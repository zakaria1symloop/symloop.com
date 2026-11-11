import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { ticket, rayons, STRINGS as SC } from './custom/superette.mjs';
export const slug = 'logiciel-superette-supermarche-algerie-2027-caisse-hors-ligne-code-barres-balance-dlc-marge-cloture';
const T = {
  fr: {
    cover: { eyebrow: 'Logiciel supérette · Algérie · 2027', title: ['Logiciel supérette en Algérie :', 'caisse hors ligne, DLC, marge'], subtitle: 'Ce qu’on construit pour une supérette ou un supermarché : caisse qui vend sans serveur, code-barres et balance, lots et DLC, réception fournisseur, clôture à l’aveugle', left: { label: 'Une caisse qui attend le réseau', sub: 'et un gérant qui devine la marge' }, right: { label: 'Une caisse qui vend en local', sub: 'marge au dernier prix d’achat, DLC vues' } },
    couches: { title: 'Un logiciel de supérette, en cinq couches', layers: [
      { label: 'Catalogue', items: [{ name: 'Références avec EAN, prix de vente, dernier prix d’achat, rayon, lot et DLC, touches rapides, articles pesés', sub: 'une référence, un prix, une marge connue' }] },
      { label: 'Caisse', items: [{ name: 'Base locale sur chaque caisse ; scan, balance, promotions, carnet de crédit, QR, carte ; ticket numéroté sur place ; file d’attente vers le serveur', sub: 'la caisse vend sans serveur', accent: true }] },
      { label: 'Stock et réception', items: [{ name: 'Mouvements par ticket et par réception ; lots et DLC ; prix d’achat validé avant d’entrer dans la marge ; inventaire tournant', sub: 'le stock est un journal, pas un chiffre' }] },
      { label: 'Clôture', items: [{ name: 'Comptage à l’aveugle par caisse, écart par caisse, QR et carte rapprochés, carnet de crédit, dépôt préparé', sub: 'l’écart a un nom et une caisse' }] },
      { label: 'Direction', items: [{ name: 'Ventes et marge par rayon, DLC proches, ruptures, proposition de commande, alertes WhatsApp, export comptable', sub: 'le gérant lit, il ne devine plus' }] },
    ], caption: 'Figure 2 · La couche accentuée est la caisse : elle porte une base locale avec les prix, les promotions et le stock, elle numérote le ticket sur place et elle met en file ce qui doit partir au serveur. Tout le reste, la marge, les DLC, la clôture, le tableau, n’est qu’une lecture de ce que la caisse et la réception ont écrit.', alt: 'Cinq couches : catalogue, caisse (accentuée), stock et réception, clôture, direction.' },
    ticket: { caption: 'Figure 1 · Un ticket de supérette pendant une coupure de réseau de vingt-huit minutes : sept lignes, dont une pesée venue de la balance et une promotion six pour cinq appliquée par le moteur, un total, un rendu, un numéro de ticket donné par la séquence de la caisse. Tout a été décidé en local en moins de deux secondes ; les trente et un tickets de la coupure sont partis à 11h21 au retour du réseau, sans doublon ni perte. Produits, prix et chiffres sont un exemple construit.' },
    etapes: { title: 'Mettre une supérette sous logiciel, en six temps', items: [
      { label: 'Reprendre le catalogue', sub: 'EAN, prix, rayons, touches rapides, articles pesés' },
      { label: 'Écrire les règles', sub: 'promotions, crédit, écart toléré, DLC, marge minimale' },
      { label: 'Installer les caisses', sub: 'base locale, scanner, balance, imprimante, tiroir', accent: true },
      { label: 'Recevoir et compter', sub: 'réception validée, lots et DLC, inventaire tournant' },
      { label: 'Clôturer', sub: 'comptage à l’aveugle, écart par caisse, dépôt' },
      { label: 'Lire le tableau', sub: 'rayons, marge, DLC, ruptures, commande proposée' },
    ], caption: 'Figure 4 · Le temps accentué est l’installation des caisses : base locale, scanner, balance, imprimante, tiroir, et la première journée vendue sans serveur. Avant, le catalogue et les règles ; après, la réception, la clôture et le tableau ne sont que des lectures de ce que les caisses écrivent.', alt: 'Six temps : reprendre le catalogue, écrire les règles, installer les caisses (accentué), recevoir et compter, clôturer, lire le tableau.' },
    situations: { title: 'Six situations réelles, et ce que l’application fait', columns: ['Ce qui se passe', 'Ce que l’application fait'], rows: [
      { label: 'Le réseau tombe en pleine matinée', cells: ['La caisse s’arrête, la file grandit', 'base locale : prix, promos, stock ; ticket numéroté sur place ; file envoyée au retour'] },
      { label: 'Le fournisseur a changé ses prix', cells: ['La marge est fausse pendant un mois', 'réception validée ligne par ligne ; prix d’achat changé signalé ; marge recalculée'] },
      { label: 'Des yaourts périment en rayon', cells: ['Découverts par un client', 'lot et DLC à la réception ; alerte à 3 jours ; promotion proposée avec garde de marge'] },
      { label: 'La caisse ne tombe pas juste', cells: ['Personne ne sait quelle caisse', 'comptage à l’aveugle par caisse et par session ; écart nommé ; seuil écrit'] },
      { label: 'Le voisin paie à la fin du mois', cells: ['Un carnet, des oublis', 'carnet de crédit par client avec plafond ; ticket lié ; rappel WhatsApp'] },
      { label: 'Le gérant est à Lyon', cells: ['Il appelle le soir', 'tableau du jour par rayon et par caisse ; alerte WhatsApp sur écart, DLC, rupture'] },
    ], caption: 'Figure 5 · Les trois premières lignes se règlent par la base locale de la caisse, la réception validée et les lots avec DLC ; les trois suivantes par la clôture à l’aveugle, le carnet de crédit et le tableau. Aucune ne se règle par une caissière plus attentive.', alt: 'Matrice de six situations : coupure de réseau, prix fournisseur, DLC, écart de caisse, crédit client, gérant à distance ; ce qui se passe et ce que l’application fait.' },
    rayons: { caption: 'Figure 3 · Le tableau que le gérant lit à 21h10 : les ventes et la marge par rayon, calculée sur le dernier prix d’achat validé ; les articles du frais à écouler sous trois jours, avec une promotion proposée ; les ruptures à commander ; la clôture des deux caisses comptées à l’aveugle, avec un écart de trois cents dinars sur une caisse nommée ; et la réception du matin qui attend sa validation parce que trois prix d’achat ont changé. Rayons et chiffres sont un exemple construit.' },
    calendrier: { title: 'Un logiciel de supérette en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Catalogue et règles', note: 'reprise des références, EAN, prix, rayons ; promotions, crédit, écart toléré, marge minimale', from: 0, to: 1 },
      { label: 'Caisses', note: 'base locale, scanner, balance, imprimante, tiroir ; file d’attente, identifiant unique, promotions, carnet, QR', from: 1, to: 3, accent: true },
      { label: 'Stock et réception', note: 'journal de mouvements, lots et DLC, réception validée, inventaire tournant', from: 3, to: 4 },
      { label: 'Clôture', note: 'comptage à l’aveugle, écart par caisse, rapprochement QR et carte, dépôt', from: 4, to: 5 },
      { label: 'Direction', note: 'tableau par rayon, DLC, ruptures, proposition de commande, alertes, export', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six semaines, la première sans code : le catalogue repris et les règles écrites sont les décisions du gérant. Les deux semaines accentuées sont les caisses, parce que le stock, la clôture et le tableau ne sont que des lectures de ce que les caisses et la réception écrivent.', alt: 'Calendrier de six semaines : catalogue et règles, caisses (accentué, deux semaines), stock et réception, clôture, direction.' },
  },
  en: {
    cover: { eyebrow: 'Convenience store software · Algeria · 2027', title: ['Convenience store software in Algeria:', 'offline till, expiry, margin'], subtitle: 'What gets built for a convenience store or supermarket: a till that sells without a server, barcodes and scale, lots and expiry dates, supplier receipt, blind closing', left: { label: 'A till that waits for the network', sub: 'and a manager who guesses the margin' }, right: { label: 'A till that sells locally', sub: 'margin on the last purchase price, expiry seen' } },
    couches: { title: 'Convenience store software, in five layers', layers: [
      { label: 'Catalogue', items: [{ name: 'References with EAN, selling price, last purchase price, department, lot and expiry, quick keys, weighed items', sub: 'one reference, one price, a known margin' }] },
      { label: 'Till', items: [{ name: 'Local database on each till; scan, scale, promotions, credit book, QR, card; ticket numbered on the spot; queue to the server', sub: 'the till sells without a server', accent: true }] },
      { label: 'Stock and receipt', items: [{ name: 'Movements per ticket and per receipt; lots and expiry; purchase price validated before entering the margin; cycle count', sub: 'stock is a journal, not a number' }] },
      { label: 'Closing', items: [{ name: 'Blind count per till, gap per till, QR and card matched, credit book, deposit prepared', sub: 'the gap has a name and a till' }] },
      { label: 'Management', items: [{ name: 'Sales and margin per department, close expiry dates, stock-outs, order proposal, WhatsApp alerts, accounting export', sub: 'the manager reads, and stops guessing' }] },
    ], caption: 'Figure 2 · The accented layer is the till: it carries a local database with prices, promotions and stock, numbers the ticket on the spot and queues what must go to the server. Everything else, margin, expiry dates, closing, the board, is only a reading of what the till and the receipt wrote.', alt: 'Five layers: catalogue, till (accented), stock and receipt, closing, management.' },
    ticket: { caption: 'Figure 1 · One convenience store ticket during a twenty-eight-minute network outage: seven lines, one weighed from the scale and one six-for-five promotion applied by the engine, a total, change, a ticket number given by the till’s sequence. Everything was decided locally in under two seconds; the thirty-one tickets of the outage left at 11:21 when the network returned, without duplicate or loss. Products, prices and figures are a constructed example.' },
    etapes: { title: 'Putting a convenience store under software, in six beats', items: [
      { label: 'Take over the catalogue', sub: 'EAN, prices, departments, quick keys, weighed items' },
      { label: 'Write the rules', sub: 'promotions, credit, tolerated gap, expiry, minimum margin' },
      { label: 'Install the tills', sub: 'local database, scanner, scale, printer, drawer', accent: true },
      { label: 'Receive and count', sub: 'validated receipt, lots and expiry, cycle count' },
      { label: 'Close', sub: 'blind count, gap per till, deposit' },
      { label: 'Read the board', sub: 'departments, margin, expiry, stock-outs, proposed order' },
    ], caption: 'Figure 4 · The accented beat is installing the tills: local database, scanner, scale, printer, drawer, and the first day sold without a server. Before it, the catalogue and the rules; after it, receipt, closing and the board are only readings of what the tills write.', alt: 'Six beats: take over the catalogue, write the rules, install the tills (accented), receive and count, close, read the board.' },
    situations: { title: 'Six real situations, and what the application does', columns: ['What happens', 'What the application does'], rows: [
      { label: 'The network drops mid-morning', cells: ['The till stops, the queue grows', 'local database: prices, promos, stock; ticket numbered on the spot; queue sent on return'] },
      { label: 'The supplier changed its prices', cells: ['The margin is wrong for a month', 'receipt validated line by line; changed purchase price flagged; margin recomputed'] },
      { label: 'Yoghurts expire on the shelf', cells: ['Found by a customer', 'lot and expiry at receipt; alert at 3 days; promotion proposed with margin guard'] },
      { label: 'The till does not balance', cells: ['Nobody knows which till', 'blind count per till and per session; named gap; written threshold'] },
      { label: 'The neighbour pays at month end', cells: ['A notebook, forgotten lines', 'credit book per customer with a ceiling; linked ticket; WhatsApp reminder'] },
      { label: 'The manager is in Lyon', cells: ['He calls in the evening', 'day’s board per department and till; WhatsApp alert on gap, expiry, stock-out'] },
    ], caption: 'Figure 5 · The first three rows are settled by the till’s local database, the validated receipt and lots with expiry; the next three by blind closing, the credit book and the board. None is settled by a more attentive cashier.', alt: 'Matrix of six situations: network outage, supplier prices, expiry, till gap, customer credit, remote manager; what happens and what the application does.' },
    rayons: { caption: 'Figure 3 · The board the manager reads at 21:10: sales and margin per department, computed on the last validated purchase price; fresh items to sell within three days, with a proposed promotion; stock-outs to order; the closing of both tills blind-counted, with a three-hundred-dinar gap on a named till; and the morning receipt awaiting validation because three purchase prices changed. Departments and figures are a constructed example.' },
    calendrier: { title: 'Convenience store software in 2027, in weeks', unit: 'wk', items: [
      { label: 'Catalogue and rules', note: 'references taken over, EAN, prices, departments; promotions, credit, tolerated gap, minimum margin', from: 0, to: 1 },
      { label: 'Tills', note: 'local database, scanner, scale, printer, drawer; queue, unique id, promotions, credit book, QR', from: 1, to: 3, accent: true },
      { label: 'Stock and receipt', note: 'movement journal, lots and expiry, validated receipt, cycle count', from: 3, to: 4 },
      { label: 'Closing', note: 'blind count, gap per till, QR and card matching, deposit', from: 4, to: 5 },
      { label: 'Management', note: 'board per department, expiry, stock-outs, order proposal, alerts, export', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six weeks, the first without code: the taken-over catalogue and the written rules are the manager’s decisions. The two accented weeks are the tills, because stock, closing and the board are only readings of what the tills and the receipt write.', alt: 'Six-week timeline: catalogue and rules, tills (accented, two weeks), stock and receipt, closing, management.' },
  },
  ar: {
    cover: { eyebrow: 'برنامج سوبيرات · الجزائر · 2027', title: ['برنامج سوبيرات في الجزائر:', 'صندوق دون شبكة، صلاحية، هامش'], subtitle: 'ما يُبنى لسوبيرات أو سوبرماركت: صندوق يبيع دون خادم، باركود وميزان، دفعات وتواريخ صلاحية، استلام المورّد، إغلاق أعمى', left: { label: 'صندوق ينتظر الشبكة', sub: 'ومسيّر يخمّن الهامش' }, right: { label: 'صندوق يبيع محلياً', sub: 'هامش على آخر سعر شراء، صلاحيات مرئية' } },
    couches: { title: 'برنامج سوبيرات، في خمس طبقات', layers: [
      { label: 'الكتالوج', items: [{ name: 'مراجع بالباركود، سعر البيع، آخر سعر شراء، القسم، الدفعة والصلاحية، أزرار سريعة، مواد موزونة', sub: 'مرجع واحد، سعر واحد، هامش معروف' }] },
      { label: 'الصندوق', items: [{ name: 'قاعدة محلية على كل صندوق؛ مسح، ميزان، ترقيات، دفتر دين، QR، بطاقة؛ تذكرة مرقَّمة في المكان؛ طابور نحو الخادم', sub: 'الصندوق يبيع دون خادم', accent: true }] },
      { label: 'المخزون والاستلام', items: [{ name: 'حركات لكل تذكرة ولكل استلام؛ دفعات وصلاحيات؛ سعر شراء يُصادَق عليه قبل دخول الهامش؛ جرد دوري', sub: 'المخزون سجل، لا رقم' }] },
      { label: 'الإغلاق', items: [{ name: 'عدّ أعمى لكل صندوق، فارق لكل صندوق، QR وبطاقة مطابَقة، دفتر الدين، إيداع مُعدّ', sub: 'للفارق اسم وصندوق' }] },
      { label: 'الإدارة', items: [{ name: 'مبيعات وهامش لكل قسم، صلاحيات قريبة، نفادات، اقتراح طلبية، تنبيهات واتساب، تصدير محاسبي', sub: 'يقرأ المسيّر، ولا يخمّن بعد اليوم' }] },
    ], caption: 'الشكل 2 · الطبقة المبرزة هي الصندوق: يحمل قاعدة محلية بالأسعار والترقيات والمخزون، يرقّم التذكرة في المكان، ويصفّ ما يجب أن يذهب إلى الخادم. كل ما عداه، الهامش والصلاحيات والإغلاق واللوحة، مجرد قراءة لما كتبه الصندوق والاستلام.', alt: 'خمس طبقات: الكتالوج، الصندوق (مبرز)، المخزون والاستلام، الإغلاق، الإدارة.' },
    ticket: { caption: 'الشكل 1 · تذكرة سوبيرات أثناء انقطاع شبكة دام ثماني وعشرين دقيقة: سبعة أسطر، منها واحد موزون من الميزان وترقية ستة بسعر خمسة طبّقها المحرك، مجموع، باقٍ، رقم تذكرة أعطاه تسلسل الصندوق. كل شيء قُرّر محلياً في أقل من ثانيتين؛ وتذاكر الانقطاع الإحدى والثلاثون خرجت على 11:21 عند عودة الشبكة، دون تكرار ولا ضياع. المنتجات والأسعار والأرقام مثال مبني.' },
    etapes: { title: 'وضع سوبيرات تحت برنامج، في ستة أوقات', items: [
      { label: 'استعادة الكتالوج', sub: 'باركود، أسعار، أقسام، أزرار سريعة، مواد موزونة' },
      { label: 'كتابة القواعد', sub: 'ترقيات، دين، فارق مسموح، صلاحية، هامش أدنى' },
      { label: 'تركيب الصناديق', sub: 'قاعدة محلية، ماسح، ميزان، طابعة، درج', accent: true },
      { label: 'الاستلام والعدّ', sub: 'استلام مصادَق، دفعات وصلاحيات، جرد دوري' },
      { label: 'الإغلاق', sub: 'عدّ أعمى، فارق لكل صندوق، إيداع' },
      { label: 'قراءة اللوحة', sub: 'أقسام، هامش، صلاحية، نفادات، طلبية مقترحة' },
    ], caption: 'الشكل 4 · الوقت المبرز هو تركيب الصناديق: قاعدة محلية، ماسح، ميزان، طابعة، درج، واليوم الأول يُباع دون خادم. قبله الكتالوج والقواعد؛ وبعده الاستلام والإغلاق واللوحة مجرد قراءات لما تكتبه الصناديق.', alt: 'ستة أوقات: استعادة الكتالوج، كتابة القواعد، تركيب الصناديق (مبرز)، الاستلام والعدّ، الإغلاق، قراءة اللوحة.' },
    situations: { title: 'ست حالات حقيقية، وما يفعله التطبيق', columns: ['ما يحدث', 'ما يفعله التطبيق'], rows: [
      { label: 'الشبكة تسقط في منتصف الصباح', cells: ['يتوقف الصندوق، ويطول الطابور', 'قاعدة محلية: أسعار، ترقيات، مخزون؛ تذكرة مرقَّمة في المكان؛ طابور يُرسل عند العودة'] },
      { label: 'المورّد غيّر أسعاره', cells: ['الهامش خاطئ شهراً كاملاً', 'استلام مصادَق سطراً سطراً؛ سعر شراء متغيّر مُشار إليه؛ هامش يُعاد حسابه'] },
      { label: 'ياغورت تنتهي صلاحيته على الرف', cells: ['يكتشفه زبون', 'دفعة وصلاحية عند الاستلام؛ تنبيه قبل 3 أيام؛ ترقية مقترحة بحارس هامش'] },
      { label: 'الصندوق لا يتوازن', cells: ['لا أحد يعرف أي صندوق', 'عدّ أعمى لكل صندوق وجلسة؛ فارق مسمّى؛ عتبة مكتوبة'] },
      { label: 'الجار يدفع آخر الشهر', cells: ['دفتر، ونسيان', 'دفتر دين لكل زبون بسقف؛ تذكرة مرتبطة؛ تذكير واتساب'] },
      { label: 'المسيّر في ليون', cells: ['يتصل في المساء', 'لوحة اليوم لكل قسم وصندوق؛ تنبيه واتساب عن الفارق والصلاحية والنفاد'] },
    ], caption: 'الشكل 5 · الصفوف الثلاثة الأولى تُحل بالقاعدة المحلية للصندوق والاستلام المصادَق والدفعات بالصلاحية؛ والثلاثة التالية بالإغلاق الأعمى ودفتر الدين واللوحة. لا واحدة منها تُحل بقابضة أكثر انتباهاً.', alt: 'مصفوفة ست حالات: انقطاع الشبكة، أسعار المورّد، الصلاحية، فارق الصندوق، دين الزبون، مسيّر عن بُعد؛ ما يحدث وما يفعله التطبيق.' },
    rayons: { caption: 'الشكل 3 · اللوحة التي يقرؤها المسيّر على 21:10: المبيعات والهامش لكل قسم، محسوباً على آخر سعر شراء مصادَق؛ مواد الطازج التي تُصرَّف خلال ثلاثة أيام، بترقية مقترحة؛ النفادات التي تُطلب؛ إغلاق الصندوقين المعدودين عدّاً أعمى، بفارق ثلاثمئة دينار على صندوق مسمّى؛ واستلام الصباح الذي ينتظر المصادقة لأن ثلاثة أسعار شراء تغيّرت. الأقسام والأرقام مثال مبني.' },
    calendrier: { title: 'برنامج سوبيرات سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'الكتالوج والقواعد', note: 'استعادة المراجع، باركود، أسعار، أقسام؛ ترقيات، دين، فارق مسموح، هامش أدنى', from: 0, to: 1 },
      { label: 'الصناديق', note: 'قاعدة محلية، ماسح، ميزان، طابعة، درج؛ طابور، معرّف فريد، ترقيات، دفتر دين، QR', from: 1, to: 3, accent: true },
      { label: 'المخزون والاستلام', note: 'سجل الحركات، دفعات وصلاحيات، استلام مصادَق، جرد دوري', from: 3, to: 4 },
      { label: 'الإغلاق', note: 'عدّ أعمى، فارق لكل صندوق، مطابقة QR والبطاقة، إيداع', from: 4, to: 5 },
      { label: 'الإدارة', note: 'لوحة لكل قسم، صلاحية، نفادات، اقتراح طلبية، تنبيهات، تصدير', from: 5, to: 6 },
    ], caption: 'الشكل 6 · ستة أسابيع، الأول دون كود: الكتالوج المستعاد والقواعد المكتوبة قرارات المسيّر. الأسبوعان المبرزان هما الصناديق، لأن المخزون والإغلاق واللوحة مجرد قراءات لما تكتبه الصناديق والاستلام.', alt: 'تقويم ستة أسابيع: الكتالوج والقواعد، الصناديق (مبرز، أسبوعان)، المخزون والاستلام، الإغلاق، الإدارة.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      ticket: { svg: ticket(e.ticket, rtl), caption: t.ticket.caption, alt: e.ticket.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      rayons: { svg: rayons(e.rayons, rtl), caption: t.rayons.caption, alt: e.rayons.alt },
      etapes: { svg: steps({ title: t.etapes.title, steps: t.etapes.items, arrows: true, rtl }), caption: t.etapes.caption, alt: t.etapes.alt },
      situations: { svg: matrix({ title: t.situations.title, columns: t.situations.columns, rows: t.situations.rows, rtl }), caption: t.situations.caption, alt: t.situations.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 6, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
