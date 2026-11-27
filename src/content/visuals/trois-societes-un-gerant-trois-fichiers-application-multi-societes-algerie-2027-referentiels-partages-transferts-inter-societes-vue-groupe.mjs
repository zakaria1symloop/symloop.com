import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { model, intercompany, STRINGS as GP } from './custom/group.mjs';
export const slug = 'trois-societes-un-gerant-trois-fichiers-application-multi-societes-algerie-2027-referentiels-partages-transferts-inter-societes-vue-groupe';
const T = {
  fr: {
    cover: { eyebrow: 'Multi-sociétés · Groupe · Diaspora · 2027', title: ['« Trois sociétés,', 'un gérant,', 'trois fichiers »'], subtitle: 'Ce qu’on construit pour un groupe dans une application : référentiels partagés, données propres, transferts en miroir, vue groupe', left: { label: 'Trois logiciels, trois comptables', sub: 'et un client qui existe trois fois' }, right: { label: 'Une application, trois sociétés', sub: 'et un gérant qui voit le groupe à 8 h' } },
    modele: { caption: 'Figure 1 · Un groupe de trois sociétés dans une seule application : deux en Algérie en dinars, une à Paris en euros. Les référentiels, clients, produits, personnes, existent une fois pour le groupe avec une visibilité et un prix par société ; ce qui appartient à chaque société, numérotation, comptes bancaires, dépôts, grilles de prix, en-tête des documents, exports comptables, ne se mélange jamais. La société est une dimension de chaque document, pas une autre application. Sociétés et numéros sont un exemple construit.' },
    couches: { title: 'Le multi-sociétés, en cinq couches', layers: [
      { label: 'Société', items: [{ name: 'Une dimension obligatoire sur chaque document : facture, mouvement, encaissement ; devise, dépôts, comptes, séries', sub: 'un document appartient à une société et une seule' }] },
      { label: 'Référentiels partagés', items: [{ name: 'Clients, produits, fournisseurs, personnes : une fiche pour le groupe ; visibilité, prix, encours et rôle par société', sub: 'le client existe une fois, son encours existe par société', accent: true }] },
      { label: 'Droits', items: [{ name: 'Un compte par personne, un rôle par société ; le gérant et le comptable du groupe voient tout ; un vendeur ne voit que la sienne', sub: 'changer de société est un sélecteur, pas une autre connexion' }] },
      { label: 'Inter-sociétés', items: [{ name: 'Transfert, vente ou prestation entre sociétés : deux jeux de documents en miroir, écrits une fois ; soldes intra-groupe repérés', sub: 'personne ne retape la facture d’achat de l’autre société' }] },
      { label: 'Vue groupe', items: [{ name: 'Tableau de bord par société et pour le groupe ; intra-groupe exclu ; jamais deux devises additionnées ; export par comptable', sub: 'trois exports, trois cabinets, une seule source' }] },
    ], caption: 'Figure 2 · La couche accentuée est celle qui fait gagner le plus : un client, un produit, une personne existent une fois pour le groupe, et c’est une règle par société qui dit qui les voit, à quel prix et avec quel encours. Les quatre autres couches tiennent l’étanchéité des sociétés, les droits, les échanges entre sociétés et la lecture du groupe.', alt: 'Cinq couches : société, référentiels partagés (accentuée), droits, inter-sociétés, vue groupe.' },
    transfert: { caption: 'Figure 3 · Un transfert de 200 unités d’Alger à Sétif. Un seul geste du responsable écrit deux jeux de documents en miroir : bon de livraison, facture de vente et sortie de stock chez Alger ; réception, facture d’achat et entrée de stock chez Sétif, même lot, même quantité, même montant au prix de transfert. La vue groupe marque la paire intra-groupe : la créance et la dette s’annulent et la vente ne compte pas dans le chiffre d’affaires du groupe. Le prix de transfert et ce que chaque société déclare se règlent avec le comptable. Numéros et montants sont un exemple construit.' },
    situations: { title: 'Six situations réelles, et ce que l’application fait', columns: ['Ce qui se passe', 'Ce que l’application fait'], rows: [
      { label: 'Le client existe dans trois logiciels', cells: ['Trois fiches, trois encours, trois numéros de téléphone', 'une fiche groupe, clé téléphone ; visibilité et encours par société'] },
      { label: 'Sétif facture avec les numéros d’Alger', cells: ['Deux séries mélangées ; le comptable refuse l’export', 'série par société, imposée par la fiche ; impossible de se tromper'] },
      { label: 'Alger livre Sétif, personne ne facture', cells: ['Stock parti sans document ; retrouvé à l’inventaire', 'transfert inter-sociétés : documents en miroir, stock et lot suivis'] },
      { label: 'Le gérant additionne dinars et euros', cells: ['Un chiffre d’affaires groupe faux de 15 %', 'vue groupe par devise ; équivalent au taux figé pour la lecture'] },
      { label: 'Le vendeur de Sétif voit les prix d’Alger', cells: ['Remise promise sur une grille qui n’est pas la sienne', 'rôle et grille par société ; sélecteur de société verrouillé'] },
      { label: 'Trois comptables, trois fichiers refaits', cells: ['Exports à la main chaque mois ; versions qui divergent', 'export par société depuis la même source ; daté, rejouable'] },
    ], caption: 'Figure 4 · Les trois premières lignes se règlent par les référentiels partagés, les séries par société et le transfert en miroir ; les trois suivantes par la vue groupe par devise, les droits par société et l’export par comptable. Aucune ne se règle par un quatrième fichier de consolidation.', alt: 'Matrice de six situations : client en triple, numéros mélangés, livraison sans document, devises additionnées, prix de l’autre société, exports refaits ; ce qui se passe et ce que l’application fait.' },
    ajout: { title: 'Ajouter une société à l’application, en six temps', items: [
      { label: 'Créer la société', sub: 'nom, devise, dépôts, comptes bancaires, logo' },
      { label: 'Numérotation et documents', sub: 'séries par type, en-tête et mentions réglés avec son comptable', accent: true },
      { label: 'Droits', sub: 'qui la voit, qui y vend, qui y encaisse ; rôle par personne' },
      { label: 'Référentiels', sub: 'quels clients et produits elle voit ; ses grilles de prix' },
      { label: 'Reprise', sub: 'soldes d’ouverture, stock par dépôt, pièces ouvertes ; essai à blanc' },
      { label: 'Premier export', sub: 'un mois de documents vers son comptable ; retour avant la suite' },
    ], caption: 'Figure 5 · L’étape accentuée est celle qu’on ne fait pas seul : les séries de numéros, l’en-tête et les mentions des documents d’une société se règlent avec son comptable, et l’application les imprime sans les décider. La dernière étape est le test qui compte : un mois de documents exportés vers le cabinet, et son retour, avant d’ouvrir la société aux vendeurs.', alt: 'Six temps : créer la société, numérotation et documents (accentué), droits, référentiels, reprise, premier export.' },
    calendrier: { title: 'Passer au multi-sociétés en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Règles', note: 'liste des sociétés, devises, ce qui est partagé et ce qui est propre, prix de transfert, qui voit quoi ; avec le gérant et les comptables', from: 0, to: 1 },
      { label: 'Société et référentiels', note: 'dimension société sur chaque document, séries, dépôts, comptes ; fusion des clients et produits en un référentiel groupe', from: 1, to: 3, accent: true },
      { label: 'Droits', note: 'rôle par société, sélecteur, gérant et comptable groupe, journal d’audit par société', from: 3, to: 4 },
      { label: 'Inter-sociétés', note: 'transfert et vente entre sociétés en miroir, soldes intra-groupe, lots suivis', from: 4, to: 5 },
      { label: 'Vue groupe et exports', note: 'tableau par société et groupe, intra-groupe exclu, devises séparées, export par comptable', from: 5, to: 6 },
      { label: 'Bascule', note: 'une société d’abord, ses vendeurs, son comptable ; puis les suivantes ; anciens logiciels en lecture seule', from: 6, to: 7 },
    ], caption: 'Figure 6 · Sept semaines, la première sans code : ce qui est partagé, ce qui est propre et le prix de transfert sont des décisions prises avec les comptables. Les deux semaines accentuées sont la dimension société et la fusion des référentiels, parce qu’un client en triple ne se fusionne pas après coup. La bascule se fait société par société, pas toutes le même lundi.', alt: 'Frise de sept semaines : règles, société et référentiels (accentué, deux semaines), droits, inter-sociétés, vue groupe et exports, bascule.' },
  },
  en: {
    cover: { eyebrow: 'Multi-company · Group · Diaspora · 2027', title: ['“Three companies,', 'one manager,', 'three files”'], subtitle: 'What gets built for a group in one application: shared reference data, own data, mirrored transfers, group view', left: { label: 'Three programs, three accountants', sub: 'and a customer who exists three times' }, right: { label: 'One application, three companies', sub: 'and a manager who sees the group at 8:00' } },
    modele: { caption: 'Figure 1 · A group of three companies in one application: two in Algeria in dinars, one in Paris in euros. Reference data, customers, products, people, exist once for the group with visibility and a price per company; what belongs to each company, numbering, bank accounts, depots, price lists, document header, accounting exports, is never mixed. The company is a dimension of every document, not another application. Companies and numbers are a constructed example.' },
    couches: { title: 'Multi-company, in five layers', layers: [
      { label: 'Company', items: [{ name: 'A mandatory dimension on every document: invoice, movement, receipt; currency, depots, accounts, number series', sub: 'a document belongs to one company and one only' }] },
      { label: 'Shared reference data', items: [{ name: 'Customers, products, suppliers, people: one record for the group; visibility, price, receivables and role per company', sub: 'the customer exists once, their receivables exist per company', accent: true }] },
      { label: 'Rights', items: [{ name: 'One account per person, one role per company; the group manager and accountant see everything; a seller sees only theirs', sub: 'switching company is a selector, not another login' }] },
      { label: 'Inter-company', items: [{ name: 'Transfer, sale or service between companies: two mirrored sets of documents, written once; intra-group balances flagged', sub: 'nobody retypes the other company’s purchase invoice' }] },
      { label: 'Group view', items: [{ name: 'Dashboard per company and for the group; intra-group excluded; never two currencies added up; export per accountant', sub: 'three exports, three firms, one source' }] },
    ], caption: 'Figure 2 · The accented layer is the one that saves the most: a customer, a product, a person exist once for the group, and a rule per company says who sees them, at what price and with what receivables. The other four layers keep companies watertight, hold rights, exchanges between companies and the reading of the group.', alt: 'Five layers: company, shared reference data (accented), rights, inter-company, group view.' },
    transfert: { caption: 'Figure 3 · A transfer of 200 units from Algiers to Sétif. One action by the manager writes two mirrored sets of documents: delivery note, sales invoice and stock issue at Algiers; reception, purchase invoice and stock receipt at Sétif, same lot, same quantity, same amount at the transfer price. The group view tags the pair intra-group: the receivable and the payable cancel out and the sale does not count in group revenue. The transfer price and what each company declares are settled with the accountant. Numbers and amounts are a constructed example.' },
    situations: { title: 'Six real situations, and what the application does', columns: ['What happens', 'What the application does'], rows: [
      { label: 'The customer exists in three programs', cells: ['Three records, three balances, three phone numbers', 'one group record, phone as key; visibility and receivables per company'] },
      { label: 'Sétif invoices with Algiers’ numbers', cells: ['Two series mixed; the accountant rejects the export', 'series per company, imposed by the record; impossible to get wrong'] },
      { label: 'Algiers delivers Sétif, nobody invoices', cells: ['Stock gone without a document; found at stocktake', 'inter-company transfer: mirrored documents, stock and lot tracked'] },
      { label: 'The manager adds dinars and euros', cells: ['Group revenue wrong by 15 %', 'group view per currency; equivalent at a frozen rate for reading'] },
      { label: 'The Sétif seller sees Algiers’ prices', cells: ['Discount promised on a grid that is not theirs', 'role and grid per company; company selector locked'] },
      { label: 'Three accountants, three files redone', cells: ['Hand exports every month; diverging versions', 'export per company from the same source; dated, replayable'] },
    ], caption: 'Figure 4 · The first three rows are settled by shared reference data, series per company and the mirrored transfer; the next three by the group view per currency, rights per company and the export per accountant. None is settled by a fourth consolidation file.', alt: 'Matrix of six situations: customer in triplicate, mixed numbers, delivery without a document, currencies added up, other company’s prices, exports redone; what happens and what the application does.' },
    ajout: { title: 'Adding a company to the application, in six beats', items: [
      { label: 'Create the company', sub: 'name, currency, depots, bank accounts, logo' },
      { label: 'Numbering and documents', sub: 'series per type, header and mentions set with its accountant', accent: true },
      { label: 'Rights', sub: 'who sees it, who sells in it, who collects in it; role per person' },
      { label: 'Reference data', sub: 'which customers and products it sees; its price lists' },
      { label: 'Take-over', sub: 'opening balances, stock per depot, open documents; dry run' },
      { label: 'First export', sub: 'one month of documents to its accountant; feedback before going on' },
    ], caption: 'Figure 5 · The accented beat is the one not done alone: a company’s number series, document header and mentions are set with its accountant, and the application prints them without deciding them. The last beat is the test that counts: one month of documents exported to the firm, and its feedback, before opening the company to sellers.', alt: 'Six beats: create the company, numbering and documents (accented), rights, reference data, take-over, first export.' },
    calendrier: { title: 'Going multi-company in 2027, in weeks', unit: 'wk', items: [
      { label: 'Rules', note: 'list of companies, currencies, what is shared and what is own, transfer price, who sees what; with the manager and the accountants', from: 0, to: 1 },
      { label: 'Company and reference data', note: 'company dimension on every document, series, depots, accounts; merge of customers and products into one group reference', from: 1, to: 3, accent: true },
      { label: 'Rights', note: 'role per company, selector, group manager and accountant, audit log per company', from: 3, to: 4 },
      { label: 'Inter-company', note: 'mirrored transfer and sale between companies, intra-group balances, tracked lots', from: 4, to: 5 },
      { label: 'Group view and exports', note: 'board per company and group, intra-group excluded, currencies kept apart, export per accountant', from: 5, to: 6 },
      { label: 'Switch-over', note: 'one company first, its sellers, its accountant; then the next ones; old programs read-only', from: 6, to: 7 },
    ], caption: 'Figure 6 · Seven weeks, the first without code: what is shared, what is own and the transfer price are decisions taken with the accountants. The two accented weeks are the company dimension and the merge of reference data, because a customer in triplicate cannot be merged afterwards. The switch-over happens company by company, not all on the same Monday.', alt: 'Seven-week timeline: rules, company and reference data (accented, two weeks), rights, inter-company, group view and exports, switch-over.' },
  },
  ar: {
    cover: { eyebrow: 'متعدد الشركات · مجموعة · جالية · 2027', title: ['«ثلاث شركات،', 'مسيّر واحد،', 'ثلاثة ملفات»'], subtitle: 'ما يُبنى لمجموعة في تطبيق واحد: مراجع مشتركة، بيانات خاصة، تحويلات مرآة، رؤية المجموعة', left: { label: 'ثلاثة برامج، ثلاثة محاسبين', sub: 'وزبون موجود ثلاث مرات' }, right: { label: 'تطبيق واحد، ثلاث شركات', sub: 'ومسيّر يرى المجموعة عند 08:00' } },
    modele: { caption: 'الشكل 1 · مجموعة من ثلاث شركات في تطبيق واحد: اثنتان في الجزائر بالدينار وواحدة في باريس باليورو. المراجع، زبائن ومنتجات وأشخاص، توجد مرة واحدة للمجموعة برؤية وسعر لكل شركة؛ وما يخص كل شركة، ترقيم وحسابات بنكية ومستودعات وشبكات أسعار وترويسة مستندات وتصديرات محاسبية، لا يختلط أبداً. والشركة بُعد في كل مستند لا تطبيق آخر. والشركات والأرقام مثال مبني.' },
    couches: { title: 'تعدد الشركات، في خمس طبقات', layers: [
      { label: 'الشركة', items: [{ name: 'بُعد إلزامي في كل مستند: فاتورة، حركة، تحصيل، أمر؛ عملة، مستودعات، حسابات، سلاسل أرقام', sub: 'المستند يخص شركة واحدة لا غير' }] },
      { label: 'المراجع المشتركة', items: [{ name: 'زبائن، منتجات، موردون، أشخاص: بطاقة واحدة للمجموعة؛ رؤية وسعر وذمم ودور لكل شركة', sub: 'الزبون موجود مرة واحدة وذممه موجودة لكل شركة', accent: true }] },
      { label: 'الصلاحيات', items: [{ name: 'حساب واحد لكل شخص، دور لكل شركة؛ مسيّر المجموعة ومحاسبها يريان كل شيء؛ البائع لا يرى إلا شركته', sub: 'تغيير الشركة منتقٍ لا تسجيل دخول آخر' }] },
      { label: 'بين الشركات', items: [{ name: 'تحويل أو بيع أو خدمة بين الشركات: مجموعتا مستندات مرآة تُكتبان مرة واحدة؛ أرصدة داخل المجموعة موسومة', sub: 'لا أحد يعيد كتابة فاتورة شراء الشركة الأخرى' }] },
      { label: 'رؤية المجموعة', items: [{ name: 'لوحة لكل شركة وللمجموعة؛ داخل المجموعة مستبعَد؛ لا تُجمع عملتان أبداً؛ تصدير لكل محاسب', sub: 'ثلاثة تصديرات، ثلاثة مكاتب، مصدر واحد' }] },
    ], caption: 'الشكل 2 · الطبقة المميزة هي الأكثر توفيراً: الزبون والمنتج والشخص يوجدون مرة واحدة للمجموعة، وقاعدة لكل شركة تقول من يراهم وبأي سعر وبأي ذمم. والطبقات الأربع الأخرى تحفظ عزل الشركات والصلاحيات والتبادلات بينها وقراءة المجموعة.', alt: 'خمس طبقات: الشركة، المراجع المشتركة (مميزة)، الصلاحيات، بين الشركات، رؤية المجموعة.' },
    transfert: { caption: 'الشكل 3 · تحويل 200 وحدة من الجزائر إلى سطيف. إجراء واحد من المسؤول يكتب مجموعتي مستندات مرآة: وصل تسليم وفاتورة بيع وخروج مخزون عند الجزائر؛ استلام وفاتورة شراء ودخول مخزون عند سطيف، الدفعة نفسها والكمية نفسها والمبلغ نفسه بسعر التحويل. ورؤية المجموعة تسم الزوج داخل المجموعة: الذمة والدين يتعادلان والبيع لا يُحسب في رقم أعمال المجموعة. وسعر التحويل وما تصرّح به كل شركة يُضبطان مع المحاسب. والأرقام والمبالغ مثال مبني.' },
    situations: { title: 'ست حالات حقيقية، وما يفعله التطبيق', columns: ['ما يحدث', 'ما يفعله التطبيق'], rows: [
      { label: 'الزبون موجود في ثلاثة برامج', cells: ['ثلاث بطاقات، ثلاث ذمم، ثلاثة أرقام هاتف', 'بطاقة مجموعة واحدة، الهاتف مفتاحاً؛ رؤية وذمم لكل شركة'] },
      { label: 'سطيف تفوتر بأرقام الجزائر', cells: ['سلسلتان مختلطتان؛ المحاسب يرفض التصدير', 'سلسلة لكل شركة تفرضها البطاقة؛ يستحيل الخطأ'] },
      { label: 'الجزائر تسلّم سطيف ولا أحد يفوتر', cells: ['مخزون خرج بلا مستند؛ وُجد في الجرد', 'تحويل بين الشركتين: مستندات مرآة، مخزون ودفعة متتبَّعان'] },
      { label: 'المسيّر يجمع الدينار واليورو', cells: ['رقم أعمال مجموعة خاطئ بـ 15 ٪', 'رؤية مجموعة لكل عملة؛ مكافئ بسعر مجمَّد للقراءة'] },
      { label: 'بائع سطيف يرى أسعار الجزائر', cells: ['خصم موعود على شبكة ليست شبكته', 'دور وشبكة لكل شركة؛ منتقي الشركة مقفَل'] },
      { label: 'ثلاثة محاسبين، ثلاثة ملفات تُعاد', cells: ['تصديرات يدوية كل شهر؛ نسخ متباينة', 'تصدير لكل شركة من المصدر نفسه؛ مؤرَّخ، قابل للإعادة'] },
    ], caption: 'الشكل 4 · الأسطر الثلاثة الأولى تُحل بالمراجع المشتركة والسلاسل لكل شركة والتحويل المرآة؛ والثلاثة التالية برؤية المجموعة لكل عملة والصلاحيات لكل شركة والتصدير لكل محاسب. ولا واحد يُحل بملف توحيد رابع.', alt: 'مصفوفة ست حالات: زبون مثلَّث، أرقام مختلطة، تسليم بلا مستند، عملات مجموعة، أسعار الشركة الأخرى، تصديرات معادة؛ ما يحدث وما يفعله التطبيق.' },
    ajout: { title: 'إضافة شركة إلى التطبيق، في ستة أوقات', items: [
      { label: 'إنشاء الشركة', sub: 'اسم، عملة، مستودعات، حسابات بنكية، شعار' },
      { label: 'الترقيم والمستندات', sub: 'سلاسل لكل نوع، ترويسة وبيانات تُضبط مع محاسبها', accent: true },
      { label: 'الصلاحيات', sub: 'من يراها، من يبيع فيها، من يحصّل فيها؛ دور لكل شخص' },
      { label: 'المراجع', sub: 'أي زبائن ومنتجات تراها؛ شبكات أسعارها' },
      { label: 'الاستلام', sub: 'أرصدة افتتاحية، مخزون لكل مستودع، مستندات مفتوحة؛ تجربة على الفارغ' },
      { label: 'أول تصدير', sub: 'شهر من المستندات إلى محاسبها؛ رد قبل المتابعة' },
    ], caption: 'الشكل 5 · الوقت المميز هو ما لا يُفعل وحيداً: سلاسل أرقام الشركة وترويسة مستنداتها وبياناتها تُضبط مع محاسبها، والتطبيق يطبعها دون أن يقررها. والوقت الأخير هو الاختبار الذي يُحسب: شهر من المستندات يُصدَّر إلى المكتب، ورده، قبل فتح الشركة للبائعين.', alt: 'ستة أوقات: إنشاء الشركة، الترقيم والمستندات (مميز)، الصلاحيات، المراجع، الاستلام، أول تصدير.' },
    calendrier: { title: 'الانتقال إلى تعدد الشركات سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'القواعد', note: 'قائمة الشركات، العملات، ما هو مشترك وما هو خاص، سعر التحويل، من يرى ماذا؛ مع المسيّر والمحاسبين', from: 0, to: 1 },
      { label: 'الشركة والمراجع', note: 'بُعد الشركة في كل مستند، سلاسل، مستودعات، حسابات؛ دمج الزبائن والمنتجات في مرجع مجموعة واحد', from: 1, to: 3, accent: true },
      { label: 'الصلاحيات', note: 'دور لكل شركة، منتقٍ، مسيّر ومحاسب المجموعة، سجل تدقيق لكل شركة', from: 3, to: 4 },
      { label: 'بين الشركات', note: 'تحويل وبيع بين الشركات مرآةً، أرصدة داخل المجموعة، دفعات متتبَّعة', from: 4, to: 5 },
      { label: 'رؤية المجموعة والتصديرات', note: 'لوحة لكل شركة وللمجموعة، داخل المجموعة مستبعَد، عملات منفصلة، تصدير لكل محاسب', from: 5, to: 6 },
      { label: 'الانتقال', note: 'شركة أولاً، بائعوها، محاسبها؛ ثم التاليات؛ البرامج القديمة للقراءة فقط', from: 6, to: 7 },
    ], caption: 'الشكل 6 · سبعة أسابيع، الأول بلا كود: ما هو مشترك وما هو خاص وسعر التحويل قرارات تُتخذ مع المحاسبين. والأسبوعان المميزان هما بُعد الشركة ودمج المراجع، لأن الزبون المثلَّث لا يُدمج بعد فوات الأوان. والانتقال يتم شركةً شركة لا كلها في الاثنين نفسه.', alt: 'خط زمني من سبعة أسابيع: القواعد، الشركة والمراجع (مميز، أسبوعان)، الصلاحيات، بين الشركات، رؤية المجموعة والتصديرات، الانتقال.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = GP[locale] || GP.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      modele: { svg: model(e.model, rtl), caption: t.modele.caption, alt: e.model.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      transfert: { svg: intercompany(e.intercompany, rtl), caption: t.transfert.caption, alt: e.intercompany.alt },
      situations: { svg: matrix({ title: t.situations.title, columns: t.situations.columns, rows: t.situations.rows, rtl }), caption: t.situations.caption, alt: t.situations.alt },
      ajout: { svg: steps({ title: t.ajout.title, steps: t.ajout.items, arrows: true, rtl }), caption: t.ajout.caption, alt: t.ajout.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 7, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
