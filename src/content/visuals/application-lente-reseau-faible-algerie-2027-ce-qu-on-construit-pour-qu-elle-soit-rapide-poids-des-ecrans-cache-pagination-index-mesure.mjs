import { cover, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { waterfall, budget, STRINGS as SP } from './custom/app-speed.mjs';
export const slug = 'application-lente-reseau-faible-algerie-2027-ce-qu-on-construit-pour-qu-elle-soit-rapide-poids-des-ecrans-cache-pagination-index-mesure';
const T = {
  fr: {
    cover: { eyebrow: 'Performance · Réseau faible · Application · 2027', title: ['« Chez moi ça marche,', 'chez le client', 'ça rame »'], subtitle: 'Pourquoi une application est lente sur les téléphones et les réseaux de vos clients, et ce qu’on construit pour qu’elle soit rapide : un budget de performance écrit avant le code, des écrans légers, des images à la taille de l’écran, un appel d’API agrégé et paginé, des index, un cache, et la mesure au 75e percentile chez vos vrais utilisateurs', left: { label: 'Testée sur le téléphone du développeur', sub: 'en wifi, à Alger' }, right: { label: 'Mesurée chez vos clients', sub: 'Android de 2019, 3G, 75e percentile' } },
    cascade: { caption: 'Figure 1 · Le même écran, le même réseau, deux constructions. Avant, tout est chargé dans l’ordre où le code le demande : trois scripts, douze images originales, six appels d’API l’un après l’autre ; après, le code de cet écran seulement, quatre images à la taille de l’écran, un appel agrégé, et le cache à la deuxième ouverture. Les chiffres sont un exemple construit à partir de cas réels ; les ordres de grandeur, eux, sont ceux que nous mesurons.' },
    lenteurs: { title: 'Six lenteurs que nous trouvons presque toujours, et ce qu’on construit', columns: ['Ce qui se passe', 'Ce qu’on construit'], rows: [
      { label: 'L’écran pèse 5 Mo', cells: ['Le premier écran charge tout le code de l’application et des images de 4 Mo venues du téléphone', 'budget par écran ; code découpé par écran ; images réduites et converties à l’envoi, en WebP, à la taille affichée'] },
      { label: 'La liste de 2 000 lignes', cells: ['Toutes les commandes de l’année arrivent dans un seul appel ; 640 Ko, puis l’écran bloque en les dessinant', 'pagination côté serveur, 50 lignes par page, tri et filtre dans la requête ; défilement qui charge la suite'] },
      { label: 'Une requête par ligne', cells: ['Pour chaque commande, un appel pour le client, un pour le produit : 200 appels pour une page', 'un appel agrégé qui renvoie la page avec ses clients et ses produits ; côté base, une jointure, pas une boucle'] },
      { label: 'La recherche sans index', cells: ['Chercher un client par téléphone parcourt toute la table ; 4 s à 100 000 lignes, pire chaque mois', 'index sur les colonnes cherchées et triées ; plan d’exécution lu avant la mise en production ; seuil de 300 ms au 75e percentile'] },
      { label: 'Tout est rechargé à chaque ouverture', cells: ['Le catalogue, les images et les réglages repartent de zéro à chaque lancement, même inchangés', 'cache HTTP avec validation, cache local des données stables, et le réseau seulement pour ce qui a changé'] },
      { label: 'Le serveur est loin et lent', cells: ['Chaque appel fait l’aller-retour vers un serveur mal placé, et le code en fait vingt par écran', 'moins d’appels d’abord ; puis le serveur près des utilisateurs, selon le guide sur l’hébergement'] },
    ], caption: 'Figure 2 · Cinq des six lenteurs se règlent dans le code, pas dans l’hébergement ; la sixième ne vient qu’après. L’ordre de la colonne de droite est aussi l’ordre des gains : le budget et les images d’abord, la pagination et l’agrégation ensuite, les index et le cache enfin.', alt: 'Matrice de six lenteurs : écran lourd, liste sans pagination, requête par ligne, recherche sans index, rechargement total, serveur lointain ; ce qui se passe et ce qu’on construit.' },
    couches: { title: 'La vitesse d’une application, en cinq couches', layers: [
      { label: 'Téléphone et réseau', items: [{ name: 'Un Android de 2019, un réseau 3G ou un wifi partagé, une batterie en mode économie ; ce que vos clients ont vraiment', sub: 'vous ne les changez pas ; vous construisez pour eux, et vous testez dessus' }] },
      { label: 'Écran', items: [{ name: 'Le code de cet écran seulement, des images à la taille affichée, un rendu qui n’attend pas tout pour montrer quelque chose', sub: 'budget par écran : poids, nombre de requêtes, temps d’affichage du contenu principal' }] },
      { label: 'API', items: [{ name: 'Un appel agrégé par écran, pagination, compression, en-têtes de cache, temps de réponse mesuré au 75e percentile', sub: 'la couche où l’on gagne le plus en supprimant des appels plutôt qu’en les accélérant', accent: true }] },
      { label: 'Base de données', items: [{ name: 'Index sur ce qui est cherché et trié, jointures au lieu de boucles, plan d’exécution lu, requêtes lentes journalisées', sub: 'une table qui grossit chaque mois fait apparaître ce qui n’était pas visible au lancement' }] },
      { label: 'Mesure', items: [{ name: 'Temps réels relevés chez les utilisateurs, par écran, par type de réseau, par wilaya, au 75e percentile ; budget vérifié à chaque livraison', sub: 'sans elle, « ça rame » et « ça marche » sont deux opinions' }] },
    ], caption: 'Figure 3 · La couche accentuée est celle où l’on gagne le plus : un écran qui fait un appel au lieu de vingt est rapide même sur un serveur moyen, et un écran qui en fait vingt est lent même sur le meilleur. La cinquième couche est celle qui transforme la plainte en chiffre.', alt: 'Cinq couches : téléphone et réseau, écran, API (accentuée), base de données, mesure.' },
    budget: { caption: 'Figure 4 · Le budget est la pièce qui change tout : six chiffres écrits avant le code, mesurés sur un téléphone ancien et un réseau simulé, vérifiés par la chaîne de livraison. Ici une barre dépasse, et la livraison est refusée jusqu’à ce que les images soient réduites. Les valeurs sont un exemple ; les seuils de contenu principal en 2,5 s et d’API en 300 ms au 75e percentile sont ceux que nous écrivons par défaut.' },
    ecrans: { title: 'Six écrans, et le budget que nous écrivons pour chacun', columns: ['Ce que l’écran fait', 'Budget sur Android 2019, 3G simulée'], rows: [
      { label: 'Liste des commandes', cells: ['50 commandes avec client, montant, statut ; filtre et tri', '500 Ko, 3 requêtes, contenu principal en 2,5 s ; API 300 ms au 75e percentile'] },
      { label: 'Fiche produit avec photos', cells: ['6 photos, prix, stock par agence, variantes', '600 Ko dont 300 Ko d’images visibles ; photos suivantes chargées au défilement'] },
      { label: 'Recherche dans le catalogue', cells: ['Résultats pendant la frappe, 10 000 références', '200 ms par frappe au 75e percentile ; index de recherche, pas de parcours de table'] },
      { label: 'Tableau de bord du gérant', cells: ['Six chiffres du jour, par agence', '1 requête, agrégats précalculés ; 1,5 s ; rafraîchi toutes les 60 s, pas à chaque geste'] },
      { label: 'Caisse en magasin', cells: ['Ajouter un article, encaisser, imprimer', '100 ms par geste ; catalogue en cache local ; fonctionne sans réseau'] },
      { label: 'Carte des livraisons', cells: ['200 points, trajets, statut en direct', 'fond de carte en cache ; points regroupés ; 2 s ; mise à jour par événements, pas par rechargement'] },
    ], caption: 'Figure 5 · Un budget par écran, pas un budget pour l’application : la caisse se joue en centaines de millisecondes par geste, la carte en secondes, la liste en kilo-octets. Chaque ligne est écrite au cahier des charges et mesurée à chaque démonstration.', alt: 'Matrice de six écrans : liste, fiche produit, recherche, tableau de bord, caisse, carte ; ce que chacun fait et son budget.' },
    calendrier: { title: 'Rendre une application rapide en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Mesurer chez les vrais utilisateurs', note: 'temps réels relevés par écran, réseau et wilaya ; téléphones réellement présents ; budget écrit par écran', from: 0, to: 1 },
      { label: 'Écrans', note: 'code découpé par écran, images réduites et converties à l’envoi, chargement de ce qui est visible d’abord', from: 1, to: 2, accent: true },
      { label: 'API', note: 'un appel agrégé par écran, pagination, compression, en-têtes de cache ; les appels superflus supprimés', from: 2, to: 3 },
      { label: 'Base de données', note: 'index sur les colonnes cherchées et triées, jointures, requêtes lentes journalisées et corrigées', from: 3, to: 4 },
      { label: 'Téléphone ancien et réseau simulé', note: 'chaque écran mesuré sur un Android de 2019 en 3G simulée ; test de charge sur l’API', from: 4, to: 5 },
      { label: 'Budget dans la livraison', note: 'seuils vérifiés par la chaîne de livraison ; tableau p75 par écran lu chaque semaine', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six semaines, dont la première sans une ligne de code : on mesure d’abord, parce que l’écran lent n’est presque jamais celui qu’on croit. Les écrans viennent avant l’API et la base parce que c’est là que les gains sont les plus grands ; et le budget entre dans la chaîne de livraison pour que la vitesse ne reparte pas à la prochaine version.', alt: 'Frise de six semaines : mesurer, écrans (accentué), API, base de données, téléphone ancien et réseau simulé, budget dans la livraison.' },
  },
  en: {
    cover: { eyebrow: 'Performance · Weak network · Application · 2027', title: ['“It works on my', 'machine, it crawls', 'at the customer’s”'], subtitle: 'Why an application is slow on your customers’ phones and networks, and what is built to make it fast: a performance budget written before the code, light screens, images at screen size, one aggregated and paginated API call, indexes, a cache, and measurement at the 75th percentile on your real users', left: { label: 'Tested on the developer’s phone', sub: 'on wifi, in Algiers' }, right: { label: 'Measured at your customers’', sub: '2019 Android, 3G, 75th percentile' } },
    cascade: { caption: 'Figure 1 · The same screen, the same network, two builds. Before, everything is loaded in the order the code asks for it: three scripts, twelve original images, six API calls one after another; after, this screen’s code only, four images at screen size, one aggregated call, and the cache on the second opening. The figures are an example built from real cases; the orders of magnitude are the ones we measure.' },
    lenteurs: { title: 'Six slownesses we almost always find, and what gets built', columns: ['What happens', 'What gets built'], rows: [
      { label: 'The screen weighs 5 MB', cells: ['The first screen loads the whole app’s code and 4 MB images straight from the phone', 'budget per screen; code split per screen; images resized and converted on upload, to WebP, at displayed size'] },
      { label: 'The 2,000-row list', cells: ['All the year’s orders arrive in one call; 640 KB, then the screen freezes drawing them', 'server-side pagination, 50 rows per page, sort and filter in the query; scroll loads the next page'] },
      { label: 'One request per row', cells: ['For each order, a call for the customer, one for the product: 200 calls for a page', 'one aggregated call returning the page with its customers and products; on the database side, a join, not a loop'] },
      { label: 'Search with no index', cells: ['Finding a customer by phone scans the whole table; 4 s at 100,000 rows, worse every month', 'indexes on searched and sorted columns; execution plan read before production; 300 ms threshold at the 75th percentile'] },
      { label: 'Everything reloaded on every opening', cells: ['Catalogue, images and settings start from scratch at every launch, even unchanged', 'HTTP cache with validation, local cache of stable data, and the network only for what changed'] },
      { label: 'The server is far and slow', cells: ['Every call round-trips to a badly placed server, and the code makes twenty per screen', 'fewer calls first; then the server near the users, per the hosting guide'] },
    ], caption: 'Figure 2 · Five of the six slownesses are fixed in the code, not in hosting; the sixth comes only after. The order of the right column is also the order of gains: budget and images first, pagination and aggregation next, indexes and cache last.', alt: 'Matrix of six slownesses: heavy screen, unpaginated list, request per row, search without index, full reload, far server; what happens and what gets built.' },
    couches: { title: 'An application’s speed, in five layers', layers: [
      { label: 'Phone and network', items: [{ name: 'A 2019 Android, a 3G network or a shared wifi, a battery in saving mode; what your customers really have', sub: 'you do not change them; you build for them, and you test on them' }] },
      { label: 'Screen', items: [{ name: 'This screen’s code only, images at displayed size, a render that does not wait for everything to show something', sub: 'budget per screen: weight, number of requests, time to display the main content' }] },
      { label: 'API', items: [{ name: 'One aggregated call per screen, pagination, compression, cache headers, response time measured at the 75th percentile', sub: 'the layer where you gain most by removing calls rather than speeding them up', accent: true }] },
      { label: 'Database', items: [{ name: 'Indexes on what is searched and sorted, joins instead of loops, execution plan read, slow queries logged', sub: 'a table growing every month reveals what was not visible at launch' }] },
      { label: 'Measurement', items: [{ name: 'Real timings collected from users, per screen, per network type, per wilaya, at the 75th percentile; budget checked at every delivery', sub: 'without it, “it crawls” and “it works” are two opinions' }] },
    ], caption: 'Figure 3 · The accented layer is where you gain most: a screen that makes one call instead of twenty is fast even on an average server, and a screen that makes twenty is slow even on the best. The fifth layer is what turns the complaint into a figure.', alt: 'Five layers: phone and network, screen, API (accented), database, measurement.' },
    budget: { caption: 'Figure 4 · The budget is the piece that changes everything: six figures written before the code, measured on an old phone and a simulated network, checked by the delivery pipeline. Here one bar exceeds, and delivery is refused until the images are resized. The values are an example; the 2.5 s main-content and 300 ms API thresholds at the 75th percentile are the ones we write by default.' },
    ecrans: { title: 'Six screens, and the budget we write for each', columns: ['What the screen does', 'Budget on a 2019 Android, simulated 3G'], rows: [
      { label: 'Order list', cells: ['50 orders with customer, amount, status; filter and sort', '500 KB, 3 requests, main content in 2.5 s; API 300 ms at the 75th percentile'] },
      { label: 'Product sheet with photos', cells: ['6 photos, price, stock per branch, variants', '600 KB of which 300 KB visible images; next photos loaded on scroll'] },
      { label: 'Catalogue search', cells: ['Results while typing, 10,000 references', '200 ms per keystroke at the 75th percentile; search index, no table scan'] },
      { label: 'Manager’s dashboard', cells: ['Six figures of the day, per branch', '1 request, precomputed aggregates; 1.5 s; refreshed every 60 s, not on every gesture'] },
      { label: 'In-store point of sale', cells: ['Add an item, take payment, print', '100 ms per gesture; catalogue in local cache; works without network'] },
      { label: 'Delivery map', cells: ['200 points, routes, live status', 'map tiles cached; clustered points; 2 s; updated by events, not by reload'] },
    ], caption: 'Figure 5 · A budget per screen, not one for the application: the point of sale is a matter of hundreds of milliseconds per gesture, the map of seconds, the list of kilobytes. Each row is written in the specification and measured at every demo.', alt: 'Matrix of six screens: list, product sheet, search, dashboard, point of sale, map; what each does and its budget.' },
    calendrier: { title: 'Making an application fast in 2027, in weeks', unit: 'wk', items: [
      { label: 'Measure on real users', note: 'real timings collected per screen, network and wilaya; phones actually present; budget written per screen', from: 0, to: 1 },
      { label: 'Screens', note: 'code split per screen, images resized and converted on upload, visible content loaded first', from: 1, to: 2, accent: true },
      { label: 'API', note: 'one aggregated call per screen, pagination, compression, cache headers; superfluous calls removed', from: 2, to: 3 },
      { label: 'Database', note: 'indexes on searched and sorted columns, joins, slow queries logged and fixed', from: 3, to: 4 },
      { label: 'Old phone and simulated network', note: 'every screen measured on a 2019 Android over simulated 3G; load test on the API', from: 4, to: 5 },
      { label: 'Budget in the delivery', note: 'thresholds checked by the delivery pipeline; p75 board per screen read every week', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six weeks, the first without a line of code: you measure first, because the slow screen is almost never the one you think. Screens come before the API and the database because that is where gains are largest; and the budget enters the delivery pipeline so that speed does not leave again with the next version.', alt: 'Six-week timeline: measure, screens (accented), API, database, old phone and simulated network, budget in the delivery.' },
  },
  ar: {
    cover: { eyebrow: 'الأداء · شبكة ضعيفة · تطبيق · 2027', title: ['«عندي يعمل،', 'وعند الزبون', 'يزحف»'], subtitle: 'لماذا يكون التطبيق بطيئاً على هواتف زبائنكم وشبكاتهم، وما يُبنى ليكون سريعاً: ميزانية أداء تُكتب قبل الكود، شاشات خفيفة، صور بحجم الشاشة، استدعاء واجهة واحد مجمَّع ومُصفَّح، فهارس، ذاكرة مخبأة، وقياس عند المئين 75 على مستعمليكم الحقيقيين', left: { label: 'مختبَر على هاتف المطوّر', sub: 'على الواي فاي، في الجزائر العاصمة' }, right: { label: 'مقيس عند زبائنكم', sub: 'Android من 2019، 3G، المئين 75' } },
    cascade: { caption: 'الشكل 1 · الشاشة نفسها، الشبكة نفسها، بناءان. قبل، يُحمَّل كل شيء بالترتيب الذي يطلبه الكود: ثلاثة سكريبتات، اثنتا عشرة صورة أصلية، ستة استدعاءات واجهة متتالية؛ وبعد، كود هذه الشاشة فقط، أربع صور بحجم الشاشة، استدعاء مجمَّع واحد، والذاكرة المخبأة في الفتح الثاني. والأرقام مثال مبني من حالات حقيقية؛ أما الرتب فهي التي نقيسها.' },
    lenteurs: { title: 'ستة أسباب بطء نجدها دائماً تقريباً، وما يُبنى', columns: ['ما يحدث', 'ما يُبنى'], rows: [
      { label: 'الشاشة تزن 5 م.ب', cells: ['الشاشة الأولى تحمّل كل كود التطبيق وصوراً بـ 4 م.ب من الهاتف مباشرة', 'ميزانية لكل شاشة؛ كود مقسَّم لكل شاشة؛ صور تُصغَّر وتُحوَّل عند الرفع إلى WebP بحجم العرض'] },
      { label: 'قائمة 2 000 سطر', cells: ['كل طلبيات السنة تصل في استدعاء واحد؛ 640 ك.ب، ثم تتجمد الشاشة وهي ترسمها', 'تصفيح في الخادم، 50 سطراً في الصفحة، ترتيب وتصفية في الاستعلام؛ التمرير يحمّل التالي'] },
      { label: 'طلب لكل سطر', cells: ['لكل طلبية استدعاء للزبون وآخر للمنتج: 200 استدعاء لصفحة', 'استدعاء مجمَّع واحد يعيد الصفحة بزبائنها ومنتجاتها؛ وفي القاعدة ربط لا حلقة'] },
      { label: 'بحث بلا فهرس', cells: ['البحث عن زبون بالهاتف يمسح الجدول كله؛ 4 ثوانٍ عند 100 000 سطر، وأسوأ كل شهر', 'فهارس على الأعمدة المبحوثة والمرتَّبة؛ خطة التنفيذ تُقرأ قبل الإنتاج؛ عتبة 300 م.ث عند المئين 75'] },
      { label: 'كل شيء يُعاد تحميله عند كل فتح', cells: ['الكتالوج والصور والإعدادات تبدأ من الصفر عند كل تشغيل حتى دون تغيير', 'ذاكرة HTTP مخبأة بتحقق، ذاكرة محلية للبيانات المستقرة، والشبكة فقط لما تغيّر'] },
      { label: 'الخادم بعيد وبطيء', cells: ['كل استدعاء يذهب ويعود إلى خادم سيئ الموضع، والكود يجري عشرين لكل شاشة', 'استدعاءات أقل أولاً؛ ثم الخادم قرب المستعملين وفق دليل الاستضافة'] },
    ], caption: 'الشكل 2 · خمسة من أسباب البطء الستة تُحل في الكود لا في الاستضافة؛ والسادس لا يأتي إلا بعدها. وترتيب العمود الأيسر هو ترتيب المكاسب أيضاً: الميزانية والصور أولاً، ثم التصفيح والتجميع، ثم الفهارس والذاكرة المخبأة.', alt: 'مصفوفة ستة أسباب بطء: شاشة ثقيلة، قائمة بلا تصفيح، طلب لكل سطر، بحث بلا فهرس، إعادة تحميل كاملة، خادم بعيد؛ ما يحدث وما يُبنى.' },
    couches: { title: 'سرعة التطبيق، في خمس طبقات', layers: [
      { label: 'الهاتف والشبكة', items: [{ name: 'Android من 2019، شبكة 3G أو واي فاي مشترك، بطارية في وضع التوفير؛ ما يملكه زبائنكم فعلاً', sub: 'لا تغيّرونها؛ تبنون لها وتختبرون عليها' }] },
      { label: 'الشاشة', items: [{ name: 'كود هذه الشاشة فقط، صور بحجم العرض، رسم لا ينتظر كل شيء ليُظهر شيئاً', sub: 'ميزانية لكل شاشة: الوزن، عدد الطلبات، زمن عرض المحتوى الرئيسي' }] },
      { label: 'الواجهة', items: [{ name: 'استدعاء مجمَّع واحد لكل شاشة، تصفيح، ضغط، ترويسات ذاكرة مخبأة، زمن رد مقيس عند المئين 75', sub: 'الطبقة التي نربح فيها أكثر بحذف الاستدعاءات لا بتسريعها', accent: true }] },
      { label: 'قاعدة البيانات', items: [{ name: 'فهارس على ما يُبحث ويُرتَّب، روابط بدل الحلقات، خطة تنفيذ مقروءة، استعلامات بطيئة مسجَّلة', sub: 'جدول يكبر كل شهر يُظهر ما لم يكن مرئياً عند الإطلاق' }] },
      { label: 'القياس', items: [{ name: 'أزمنة حقيقية تُجمع من المستعملين، لكل شاشة ونوع شبكة وولاية، عند المئين 75؛ ميزانية تُفحص عند كل تسليم', sub: 'بدونه، «يزحف» و«يعمل» رأيان' }] },
    ], caption: 'الشكل 3 · الطبقة المميزة هي التي نربح فيها أكثر: شاشة تجري استدعاءً واحداً بدل عشرين سريعة حتى على خادم متوسط، وشاشة تجري عشرين بطيئة حتى على الأفضل. والطبقة الخامسة هي التي تحوّل الشكوى إلى رقم.', alt: 'خمس طبقات: الهاتف والشبكة، الشاشة، الواجهة (مميزة)، قاعدة البيانات، القياس.' },
    budget: { caption: 'الشكل 4 · الميزانية هي القطعة التي تغيّر كل شيء: ستة أرقام تُكتب قبل الكود، تُقاس على هاتف قديم وشبكة محاكاة، وتفحصها سلسلة التسليم. هنا يتجاوز شريط، فيُرفض التسليم حتى تُصغَّر الصور. والقيم مثال؛ أما عتبتا المحتوى الرئيسي 2,5 ث والواجهة 300 م.ث عند المئين 75 فهما ما نكتبه افتراضياً.' },
    ecrans: { title: 'ست شاشات، والميزانية التي نكتبها لكل منها', columns: ['ما تفعله الشاشة', 'الميزانية على Android 2019، 3G محاكاة'], rows: [
      { label: 'قائمة الطلبيات', cells: ['50 طلبية بالزبون والمبلغ والحالة؛ تصفية وترتيب', '500 ك.ب، 3 طلبات، محتوى رئيسي في 2,5 ث؛ واجهة 300 م.ث عند المئين 75'] },
      { label: 'بطاقة منتج بصور', cells: ['6 صور، سعر، مخزون لكل وكالة، متغيرات', '600 ك.ب منها 300 ك.ب صور مرئية؛ الصور التالية تُحمَّل عند التمرير'] },
      { label: 'بحث في الكتالوج', cells: ['نتائج أثناء الكتابة، 10 000 مرجع', '200 م.ث لكل ضغطة عند المئين 75؛ فهرس بحث، لا مسح جدول'] },
      { label: 'لوحة قيادة المسيّر', cells: ['ستة أرقام اليوم، لكل وكالة', 'طلب واحد، مجاميع محسوبة سلفاً؛ 1,5 ث؛ تُحدَّث كل 60 ث لا عند كل حركة'] },
      { label: 'الصندوق في المحل', cells: ['إضافة سلعة، تحصيل، طباعة', '100 م.ث لكل حركة؛ الكتالوج في ذاكرة محلية؛ يعمل دون شبكة'] },
      { label: 'خريطة التوصيل', cells: ['200 نقطة، مسارات، حالة مباشرة', 'بلاطات الخريطة مخبأة؛ نقاط مجمَّعة؛ 2 ث؛ تحديث بالأحداث لا بإعادة التحميل'] },
    ], caption: 'الشكل 5 · ميزانية لكل شاشة لا للتطبيق: الصندوق مسألة مئات الميلي ثانية لكل حركة، والخريطة مسألة ثوانٍ، والقائمة مسألة كيلوبايتات. وكل سطر يُكتب في دفتر الشروط ويُقاس عند كل عرض.', alt: 'مصفوفة ست شاشات: قائمة، بطاقة منتج، بحث، لوحة قيادة، صندوق، خريطة؛ ما تفعله كل منها وميزانيتها.' },
    calendrier: { title: 'جعل تطبيق سريعاً سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'القياس عند المستعملين الحقيقيين', note: 'أزمنة حقيقية تُجمع لكل شاشة وشبكة وولاية؛ الهواتف الموجودة فعلاً؛ ميزانية تُكتب لكل شاشة', from: 0, to: 1 },
      { label: 'الشاشات', note: 'كود مقسَّم لكل شاشة، صور تُصغَّر وتُحوَّل عند الرفع، المرئي يُحمَّل أولاً', from: 1, to: 2, accent: true },
      { label: 'الواجهة', note: 'استدعاء مجمَّع واحد لكل شاشة، تصفيح، ضغط، ترويسات ذاكرة مخبأة؛ الاستدعاءات الزائدة تُحذف', from: 2, to: 3 },
      { label: 'قاعدة البيانات', note: 'فهارس على الأعمدة المبحوثة والمرتَّبة، روابط، استعلامات بطيئة تُسجَّل وتُصحَّح', from: 3, to: 4 },
      { label: 'هاتف قديم وشبكة محاكاة', note: 'كل شاشة تُقاس على Android من 2019 بـ 3G محاكاة؛ اختبار حمل على الواجهة', from: 4, to: 5 },
      { label: 'الميزانية في التسليم', note: 'عتبات تفحصها سلسلة التسليم؛ لوحة المئين 75 لكل شاشة تُقرأ كل أسبوع', from: 5, to: 6 },
    ], caption: 'الشكل 6 · ستة أسابيع، الأول بلا سطر كود: نقيس أولاً، لأن الشاشة البطيئة لا تكاد تكون التي نظنها. وتأتي الشاشات قبل الواجهة والقاعدة لأن المكاسب هناك أكبر؛ وتدخل الميزانية سلسلة التسليم كي لا تذهب السرعة مع النسخة المقبلة.', alt: 'خط زمني من ستة أسابيع: القياس، الشاشات (مميزة)، الواجهة، قاعدة البيانات، هاتف قديم وشبكة محاكاة، الميزانية في التسليم.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SP[locale] || SP.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      cascade: { svg: waterfall(e.waterfall, rtl), caption: t.cascade.caption, alt: e.waterfall.alt },
      lenteurs: { svg: matrix({ title: t.lenteurs.title, columns: t.lenteurs.columns, rows: t.lenteurs.rows, rtl }), caption: t.lenteurs.caption, alt: t.lenteurs.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      budget: { svg: budget(e.budget, rtl), caption: t.budget.caption, alt: e.budget.alt },
      ecrans: { svg: matrix({ title: t.ecrans.title, columns: t.ecrans.columns, rows: t.ecrans.rows, rtl }), caption: t.ecrans.caption, alt: t.ecrans.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 6, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
