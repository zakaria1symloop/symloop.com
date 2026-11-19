import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { places, echeances, STRINGS as SC } from './custom/agencevoyage.mjs';
export const slug = 'logiciel-agence-de-voyage-algerie-2027-un-dossier-par-voyage-places-bloquees-acomptes-echeances-fournisseurs-passeports-marge-par-dossier';
const T = {
  fr: {
    cover: { eyebrow: 'Logiciel agence de voyage · Algérie · 2027', title: ['Logiciel agence de voyage', 'un dossier par voyage vendu'], subtitle: 'Les places bloquées et leur date limite, l’argent des deux côtés, les passeports, la marge par dossier', left: { label: 'Cahiers et WhatsApp', sub: 'personne ne sait ce qui reste dû' }, right: { label: 'Un dossier par voyage', sub: 'places, argent, documents' } },
    situations: { title: 'Cahier et WhatsApp, ou logiciel d’agence : six situations', columns: ['Aujourd’hui', 'Avec un dossier par voyage'], rows: [
      { label: 'Un client appelle pour son solde', cells: ['on cherche le cahier de l’agent', 'payé, restant dû, prochaine échéance : à l’écran'] },
      { label: 'Deux agents vendent le même départ', cells: ['la 41ᵉ place est vendue', 'le stock décompte, la place est tenue'] },
      { label: 'Un passeport expire avant le départ', cells: ['on le découvre à l’aéroport', 'signalé dès l’inscription du voyageur'] },
      { label: 'L’hôtel réclame son acompte', cells: ['on apprend la date par son appel', 'l’échéance est au calendrier depuis la vente'] },
      { label: 'Un agent est absent', cells: ['ses dossiers sont dans son téléphone', 'n’importe qui reprend le dossier'] },
      { label: 'La saison se termine', cells: ['on ignore ce que chaque départ a gagné', 'marge par dossier, par départ, par destination'] },
    ], caption: 'Figure 1 · Six situations d’une agence. Dans la colonne de gauche, l’information existe, mais dans un cahier, un téléphone ou une mémoire. Dans celle de droite, elle est dans le dossier du voyage, que toute l’agence peut ouvrir.', alt: 'Matrice de six situations : un client appelle pour son solde, deux agents vendent le même départ, un passeport expire avant le départ, l’hôtel réclame son acompte, un agent est absent, la saison se termine ; pour chacune, ce qui se passe aujourd’hui et ce qui se passe avec un dossier par voyage.' },
    couches: { title: 'Un logiciel d’agence de voyage, en cinq couches', layers: [
      { label: 'Dossier', items: [{ name: 'Le dossier : un voyage vendu, ses voyageurs, ses prestations, ses pièces, ses paiements', sub: 'tout le reste part de lui', accent: true }] },
      { label: 'Places', items: [{ name: 'Les places : sièges et chambres bloqués, en option, vendus, rendus, avec leurs dates limites', sub: 'un seul stock pour tous les agents' }] },
      { label: 'Argent', items: [{ name: 'L’argent : l’échéancier du client et celui des fournisseurs, face à face, dossier par dossier', sub: 'ce qui est dû, à qui, et quand' }] },
      { label: 'Documents', items: [{ name: 'Les documents : passeports et leurs dates, visas, billets, bons d’échange, liste des chambres', sub: 'ce qu’il faut avoir en main avant le départ' }] },
      { label: 'Lecture', items: [{ name: 'La lecture : marge par dossier, par départ, par destination, par agent ; trésorerie à trois semaines', sub: 'connue pendant la saison, pas après' }] },
    ], caption: 'Figure 2 · La couche accentuée est le dossier : un voyage vendu, avec tout ce qui le concerne. Les places, l’argent, les documents et la lecture ne sont que quatre façons de regarder l’ensemble des dossiers.', alt: 'Cinq couches : le dossier (accentuée) ; les places ; l’argent ; les documents ; la lecture.' },
    places: { caption: 'Figure 3 · Un départ de quarante places bloquées. Trente-quatre sont vendues ; les six invendues sont rendues à la date de rétrocession, trente jours avant le départ. Douze jours avant, une demande de deux places se traite hors du bloc, au prix du jour. Exemple construit.' },
    parcours: { title: 'Du devis au retour, en six temps', items: [
      { label: 'Devis', sub: 'prestations, prix, durée de validité' },
      { label: 'Dossier', sub: 'voyageurs, acompte, échéancier', accent: true },
      { label: 'Places', sub: 'option tenue, puis confirmation' },
      { label: 'Documents', sub: 'passeports, visas, billets' },
      { label: 'Départ', sub: 'bons d’échange, liste des chambres' },
      { label: 'Clôture', sub: 'soldes, factures fournisseurs, marge' },
    ], caption: 'Figure 4 · Le temps accentué est le deuxième : l’ouverture du dossier, le jour où le client verse son acompte. À partir de là, chaque temps ajoute quelque chose au même dossier : des places, des documents, des paiements, puis une marge.', alt: 'Six temps : devis, dossier (accentué), places, documents, départ, clôture.' },
    echeances: { caption: 'Figure 5 · L’argent d’un départ en groupe, pour 100 vendus. Les clients versent 30, 40 puis 30 ; les fournisseurs demandent 25, 45 puis 18. Le dossier gagne 12, mais son solde descend à moins 18 pendant cinq jours, avant le dernier versement des clients. Exemple construit.' },
    calendrier: { title: 'Huit semaines avant la haute saison', unit: 'sem.', items: [
      { label: 'Cadrer', note: 'produits vendus, fournisseurs, façons de payer, dix dossiers types relus avec les agents', from: 0, to: 1, accent: true },
      { label: 'Dossiers et paiements', note: 'dossier, voyageurs, échéancier client, reçus, rappels avant chaque échéance', from: 1, to: 4 },
      { label: 'Places et fournisseurs', note: 'blocs de places, options, dates de rétrocession, échéancier des fournisseurs', from: 3, to: 6 },
      { label: 'Documents', note: 'passeports et leurs dates, pièces manquantes, bons d’échange, liste des chambres', from: 4, to: 6 },
      { label: 'Reprise des dossiers en cours', note: 'les départs déjà vendus saisis, les soldes vérifiés un par un avec les clients', from: 5, to: 7 },
      { label: 'Lecture et premier départ', note: 'marge par dossier, trésorerie à trois semaines, un départ entier tenu dans l’outil', from: 6, to: 8 },
    ], caption: 'Figure 6 · Huit semaines dans l’exemple, à finir avant la haute saison. La période accentuée est la première : relire dix dossiers réels avec les agents. Les dossiers et les paiements viennent d’abord, parce que c’est là que l’argent se perd. Durées indicatives d’un exemple construit.', alt: 'Calendrier de huit semaines : cadrer (accentué), dossiers et paiements, places et fournisseurs, documents, reprise des dossiers en cours, lecture et premier départ.' },
  },
  en: {
    cover: { eyebrow: 'Travel agency software · Algeria · 2027', title: ['Travel agency software', 'one file per trip sold'], subtitle: 'Blocked places and their deadline, money on both sides, passports, margin per file', left: { label: 'Notebooks, WhatsApp', sub: 'nobody knows what is still owed' }, right: { label: 'One file per trip', sub: 'places, money, documents' } },
    situations: { title: 'Notebook and WhatsApp, or agency software: six situations', columns: ['Today', 'With one file per trip'], rows: [
      { label: 'A customer calls about the balance', cells: ['we look for the agent’s notebook', 'paid, still owed, next due date: on screen'] },
      { label: 'Two agents sell the same departure', cells: ['the 41st place is sold', 'the stock counts down, the place is held'] },
      { label: 'A passport expires before departure', cells: ['it is found out at the airport', 'flagged when the traveller is registered'] },
      { label: 'The hotel asks for its deposit', cells: ['we learn the date from its call', 'the due date is on the calendar since the sale'] },
      { label: 'An agent is away', cells: ['their files are in their phone', 'anyone can take over the file'] },
      { label: 'The season ends', cells: ['nobody knows what each departure earned', 'margin per file, departure and destination'] },
    ], caption: 'Figure 1 · Six situations in an agency. In the left-hand column, the information exists, but in a notebook, a phone or a memory. In the right-hand one, it is in the file of the trip, which the whole agency can open.', alt: 'Matrix of six situations: a customer calls about the balance, two agents sell the same departure, a passport expires before departure, the hotel asks for its deposit, an agent is away, the season ends; for each, what happens today and what happens with one file per trip.' },
    couches: { title: 'Travel agency software, in five layers', layers: [
      { label: 'File', items: [{ name: 'The file: one trip sold, its travellers, its services, its documents, its payments', sub: 'everything else starts from it', accent: true }] },
      { label: 'Places', items: [{ name: 'Places: seats and rooms blocked, on option, sold, released, with their deadlines', sub: 'one stock for all agents' }] },
      { label: 'Money', items: [{ name: 'Money: the customer’s schedule and the suppliers’, face to face, file by file', sub: 'what is owed, to whom, and when' }] },
      { label: 'Documents', items: [{ name: 'Documents: passports and their dates, visas, tickets, vouchers, rooming list', sub: 'what must be in hand before departure' }] },
      { label: 'Reading', items: [{ name: 'Reading: margin per file, per departure, per destination, per agent; cash three weeks ahead', sub: 'known during the season, not after' }] },
    ], caption: 'Figure 2 · The accented layer is the file: one trip sold, with everything about it. Places, money, documents and reading are only four ways of looking at all the files together.', alt: 'Five layers: the file (accented); places; money; documents; reading.' },
    places: { caption: 'Figure 3 · A departure of forty blocked places. Thirty-four are sold; the six unsold ones are handed back on the release date, thirty days before departure. Twelve days before, a request for two places is handled outside the block, at the day’s price. Constructed example.' },
    parcours: { title: 'From the quote to the return, in six steps', items: [
      { label: 'Quote', sub: 'services, price, validity' },
      { label: 'File', sub: 'travellers, deposit, schedule', accent: true },
      { label: 'Places', sub: 'option held, then confirmation' },
      { label: 'Documents', sub: 'passports, visas, tickets' },
      { label: 'Departure', sub: 'vouchers, rooming list' },
      { label: 'Closing', sub: 'balances, supplier invoices, margin' },
    ], caption: 'Figure 4 · The accented step is the second: opening the file, on the day the customer pays the deposit. From then on, each step adds something to the same file: places, documents, payments, then a margin.', alt: 'Six steps: quote, file (accented), places, documents, departure, closing.' },
    echeances: { caption: 'Figure 5 · The money of a group departure, for 100 sold. Customers pay 30, 40 then 30; suppliers ask for 25, 45 then 18. The file earns 12, but its balance drops to minus 18 for five days, before the customers’ last payment. Constructed example.' },
    calendrier: { title: 'Eight weeks before the high season', unit: 'wk', items: [
      { label: 'Frame', note: 'products sold, suppliers, ways of paying, ten typical files re-read with the agents', from: 0, to: 1, accent: true },
      { label: 'Files and payments', note: 'file, travellers, customer schedule, receipts, reminders before each due date', from: 1, to: 4 },
      { label: 'Places and suppliers', note: 'blocks of places, options, release dates, the suppliers’ schedule', from: 3, to: 6 },
      { label: 'Documents', note: 'passports and their dates, missing documents, vouchers, rooming list', from: 4, to: 6 },
      { label: 'Taking over current files', note: 'departures already sold entered, balances checked one by one with customers', from: 5, to: 7 },
      { label: 'Reading and first departure', note: 'margin per file, cash three weeks ahead, one whole departure run in the tool', from: 6, to: 8 },
    ], caption: 'Figure 6 · Eight weeks in the example, to finish before the high season. The accented period is the first: re-reading ten real files with the agents. Files and payments come first, because that is where money is lost. Indicative durations of a constructed example.', alt: 'Eight-week calendar: frame (accented), files and payments, places and suppliers, documents, taking over current files, reading and first departure.' },
  },
  ar: {
    cover: { eyebrow: 'برنامج وكالة السفر · الجزائر · 2027', title: ['برنامج وكالة السفر', 'ملف لكل رحلة مباعة'], subtitle: 'الأماكن المحجوزة وأجلها، المال من الجهتين، جوازات السفر، والهامش لكل ملف', left: { label: 'دفاتر وواتساب', sub: 'لا أحد يعرف ما بقي مستحَقاً' }, right: { label: 'ملف لكل رحلة', sub: 'أماكن، مال، ووثائق' } },
    situations: { title: 'دفتر وواتساب، أم برنامج الوكالة: ست حالات', columns: ['اليوم', 'مع ملف لكل رحلة'], rows: [
      { label: 'زبون يتصل ليسأل عن باقيه', cells: ['نبحث عن دفتر العون', 'المدفوع، الباقي، والأجل القادم: على الشاشة'] },
      { label: 'عونان يبيعان الرحلة نفسها', cells: ['المكان الحادي والأربعون يُباع', 'المخزون ينقص، والمكان يُمسَك'] },
      { label: 'جواز ينتهي قبل الانطلاق', cells: ['يُكتشف في المطار', 'يُنبَّه إليه عند تسجيل المسافر'] },
      { label: 'الفندق يطالب بتسبيقه', cells: ['نعرف التاريخ من اتصاله', 'الأجل في الرزنامة منذ يوم البيع'] },
      { label: 'عون غائب', cells: ['ملفاته في هاتفه', 'أي شخص يتابع الملف'] },
      { label: 'الموسم ينتهي', cells: ['لا نعرف ما ربحته كل رحلة', 'الهامش لكل ملف، رحلة، ووجهة'] },
    ], caption: 'الشكل 1 · ست حالات في وكالة. في العمود الأول، المعلومة موجودة، لكن في دفتر أو هاتف أو ذاكرة. وفي الثاني، هي في ملف الرحلة، الذي تستطيع الوكالة كلها فتحه.', alt: 'مصفوفة من ست حالات: زبون يتصل ليسأل عن باقيه، عونان يبيعان الرحلة نفسها، جواز ينتهي قبل الانطلاق، الفندق يطالب بتسبيقه، عون غائب، والموسم ينتهي؛ ولكل واحدة، ما يحدث اليوم وما يحدث مع ملف لكل رحلة.' },
    couches: { title: 'برنامج وكالة السفر، في خمس طبقات', layers: [
      { label: 'الملف', items: [{ name: 'الملف: رحلة مباعة، مسافروها، خدماتها، وثائقها، ومدفوعاتها', sub: 'كل الباقي ينطلق منه', accent: true }] },
      { label: 'الأماكن', items: [{ name: 'الأماكن: مقاعد وغرف محجوزة، في الخيار، مباعة، أو مُرجَعة، بآجالها', sub: 'مخزون واحد لكل الأعوان' }] },
      { label: 'المال', items: [{ name: 'المال: جدول آجال الزبون وجدول المورّدين، وجهاً لوجه، ملفاً بعد ملف', sub: 'ما هو مستحَق، لمن، ومتى' }] },
      { label: 'الوثائق', items: [{ name: 'الوثائق: جوازات السفر وتواريخها، التأشيرات، التذاكر، وصولات الخدمات، وقائمة الغرف', sub: 'ما يجب أن يكون في اليد قبل الانطلاق' }] },
      { label: 'القراءة', items: [{ name: 'القراءة: الهامش لكل ملف، رحلة، وجهة، وعون؛ والخزينة لثلاثة أسابيع قادمة', sub: 'تُعرف خلال الموسم، لا بعده' }] },
    ], caption: 'الشكل 2 · الطبقة المبرزة هي الملف: رحلة مباعة، بكل ما يخصّها. والأماكن والمال والوثائق والقراءة ليست إلا أربع طرق للنظر في مجموع الملفات.', alt: 'خمس طبقات: الملف (مبرزة)؛ الأماكن؛ المال؛ الوثائق؛ والقراءة.' },
    places: { caption: 'الشكل 3 · رحلة من أربعين مكاناً محجوزاً. أربعة وثلاثون مباعة؛ والستة غير المباعة تُرجَع في تاريخ الإرجاع، قبل ثلاثين يوماً من الانطلاق. وقبل اثني عشر يوماً، طلب مكانين يُعالَج خارج الحصة، بسعر اليوم. مثال مركَّب.' },
    parcours: { title: 'من عرض السعر إلى العودة، في ست مراحل', items: [
      { label: 'عرض السعر', sub: 'الخدمات، السعر، ومدة الصلاحية' },
      { label: 'الملف', sub: 'المسافرون، التسبيق، والآجال', accent: true },
      { label: 'الأماكن', sub: 'خيار ممسوك، ثم تأكيد' },
      { label: 'الوثائق', sub: 'جوازات، تأشيرات، وتذاكر' },
      { label: 'الانطلاق', sub: 'وصولات الخدمات، وقائمة الغرف' },
      { label: 'الإقفال', sub: 'البواقي، فواتير المورّدين، والهامش' },
    ], caption: 'الشكل 4 · المرحلة المبرزة هي الثانية: فتح الملف، يوم يدفع الزبون تسبيقه. ومن هناك، كل مرحلة تضيف شيئاً إلى الملف نفسه: أماكن، وثائق، مدفوعات، ثم هامش.', alt: 'ست مراحل: عرض السعر، الملف (مبرزة)، الأماكن، الوثائق، الانطلاق، والإقفال.' },
    echeances: { caption: 'الشكل 5 · مال رحلة جماعية، لكل 100 مباعة. الزبائن يدفعون 30 ثم 40 ثم 30؛ والمورّدون يطلبون 25 ثم 45 ثم 18. الملف يربح 12، لكن رصيده يهبط إلى ناقص 18 مدة خمسة أيام، قبل آخر دفعة من الزبائن. مثال مركَّب.' },
    calendrier: { title: 'ثمانية أسابيع قبل الموسم العالي', unit: 'أسبوع', items: [
      { label: 'التأطير', note: 'المنتجات المباعة، المورّدون، طرق الدفع، وعشرة ملفات نموذجية تُراجَع مع الأعوان', from: 0, to: 1, accent: true },
      { label: 'الملفات والمدفوعات', note: 'الملف، المسافرون، جدول آجال الزبون، الوصولات، والتذكير قبل كل أجل', from: 1, to: 4 },
      { label: 'الأماكن والمورّدون', note: 'حصص الأماكن، الخيارات، تواريخ الإرجاع، وجدول آجال المورّدين', from: 3, to: 6 },
      { label: 'الوثائق', note: 'جوازات السفر وتواريخها، الوثائق الناقصة، وصولات الخدمات، وقائمة الغرف', from: 4, to: 6 },
      { label: 'استرجاع الملفات الجارية', note: 'الرحلات المباعة سابقاً تُدخَل، والبواقي تُراجَع واحداً واحداً مع الزبائن', from: 5, to: 7 },
      { label: 'القراءة وأول رحلة', note: 'الهامش لكل ملف، الخزينة لثلاثة أسابيع، ورحلة كاملة ممسوكة في الأداة', from: 6, to: 8 },
    ], caption: 'الشكل 6 · ثمانية أسابيع في المثال، تنتهي قبل الموسم العالي. الفترة المبرزة هي الأولى: مراجعة عشرة ملفات حقيقية مع الأعوان. والملفات والمدفوعات تأتي أولاً، لأن هناك يضيع المال. مدد تقريبية لمثال مركَّب.', alt: 'رزنامة من ثمانية أسابيع: التأطير (مبرزة)، الملفات والمدفوعات، الأماكن والمورّدون، الوثائق، استرجاع الملفات الجارية، ثم القراءة وأول رحلة.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      situations: { svg: matrix({ title: t.situations.title, columns: t.situations.columns, rows: t.situations.rows, rtl }), caption: t.situations.caption, alt: t.situations.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      places: { svg: places(e.places, rtl), caption: t.places.caption, alt: e.places.alt },
      parcours: { svg: steps({ title: t.parcours.title, steps: t.parcours.items, arrows: true, rtl }), caption: t.parcours.caption, alt: t.parcours.alt },
      echeances: { svg: echeances(e.echeances, rtl), caption: t.echeances.caption, alt: e.echeances.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 8, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
