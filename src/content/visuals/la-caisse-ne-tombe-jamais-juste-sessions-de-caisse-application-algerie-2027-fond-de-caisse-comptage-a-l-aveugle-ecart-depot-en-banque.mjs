import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { session, gaps, STRINGS as CH } from './custom/cash.mjs';
export const slug = 'la-caisse-ne-tombe-jamais-juste-sessions-de-caisse-application-algerie-2027-fond-de-caisse-comptage-a-l-aveugle-ecart-depot-en-banque';
const T = {
  fr: {
    cover: { eyebrow: 'Sessions de caisse · Espèces · Écarts · 2027', title: ['« La caisse ne tombe', 'jamais juste »'], subtitle: 'Ce qu’on construit pour les espèces : session par caissier, mouvements, comptage à l’aveugle, écart signé, coffre, dépôt', left: { label: 'Un cahier, un total de tête', sub: 'et un écart que personne n’explique' }, right: { label: 'Une session, un attendu calculé', sub: 'un comptage à l’aveugle, un écart signé' } },
    fermer: { title: 'Fermer une caisse, en six temps', items: [
      { label: 'Compter le fond', sub: 'à l’ouverture, par coupures ; signé par le caissier' },
      { label: 'Encaisser', sub: 'chaque paiement lié à la session ; le tiroir s’ouvre sur un événement' },
      { label: 'Bouger les espèces', sub: 'entrées, sorties, remises au coffre ; motif, photo, approbation' },
      { label: 'Compter à l’aveugle', sub: 'par coupures, l’attendu caché ; durée mesurée', accent: true },
      { label: 'Décider l’écart', sub: 'tolérance écrite ; motif codé ; approbation du gérant ; signé' },
      { label: 'Déposer et rapprocher', sub: 'bordereau, banque, relevé ; export comptable' },
    ], caption: 'Figure 2 · L’étape accentuée est le comptage à l’aveugle : le caissier saisit ce qu’il compte, par coupures, sans voir ce que l’application attend ; l’écart n’apparaît qu’après. Avant, chaque dinar qui entre ou sort du tiroir est un mouvement de la session ; après, l’écart est une décision signée, puis un dépôt qui se rapproche avec le relevé.', alt: 'Six temps : compter le fond, encaisser, bouger les espèces, compter à l’aveugle (accentué), décider l’écart, déposer et rapprocher.' },
    couches: { title: 'La caisse, en cinq couches', layers: [
      { label: 'Session', items: [{ name: 'Une session par caisse et caissier : fond compté, comptage à la fermeture, aucun paiement hors session', sub: 'contrainte en base, pas une consigne' }] },
      { label: 'Mouvements', items: [{ name: 'Ventes, remboursements, entrées, sorties, remises au coffre ; motif codé, photo du reçu, approbation au-delà d’un seuil', sub: 'l’ouverture du tiroir sans vente est un événement journalisé' }] },
      { label: 'Comptage', items: [{ name: 'Attendu calculé et caché ; comptage par coupures ; écart contre tolérance écrite ; décision signée à deux', sub: 'à l’aveugle, sinon le compte tombe toujours juste', accent: true }] },
      { label: 'Coffre et banque', items: [{ name: 'Le coffre est une caisse ; remises signées des deux côtés ; dépôt avec bordereau ; rapprochement au relevé', sub: 'chaque dinar a un seul endroit à la fois' }] },
      { label: 'Mesure', items: [{ name: 'Écart par session et caissier, ouvertures sans vente, sorties par motif, délai de dépôt, sessions non fermées', sub: 'un tableau mensuel, lu sans accuser' }] },
    ], caption: 'Figure 4 · La couche accentuée est le comptage : l’attendu est calculé et caché, le comptage est saisi par coupures, et l’écart est une décision signée. La session au-dessus est la contrainte qui donne un sens à tout le reste : un paiement sans session n’existe pas. Le coffre et la banque en dessous ne sont que d’autres endroits où le même dinar peut être, un seul à la fois.', alt: 'Cinq couches : session, mouvements, comptage (accentuée), coffre et banque, mesure.' },
    journee: { caption: 'Figure 1 · Une session de caisse du 11 novembre, ouverte à 8 h 02 avec un fond de 20 000 dinars compté et signé, et fermée à 20 h 14. Les ventes en espèces, les remboursements, une entrée de monnaie, une sortie pour achats avec photo, et une remise au coffre à 14 h 30 donnent un attendu de 132 750 dinars, calculé et caché. La caissière compte 131 750 par coupures en quatre minutes ; l’écart de 1 000 dépasse la tolérance de 500, reçoit un motif codé et l’approbation signée du gérant. Les paiements par carte et en ligne de la même session se rapprochent à part. Montants et noms sont un exemple construit.' },
    situations: { title: 'Six situations réelles, et ce que l’application fait', columns: ['Ce qui se passe', 'Ce que l’application fait'], rows: [
      { label: 'Il manque 1 000 dinars ce soir', cells: ['Le caissier recompte jusqu’à ce que ça tombe juste', 'attendu caché ; comptage saisi ; écart signé avec motif ; tolérance'] },
      { label: 'Le caissier a pris pour le pain', cells: ['Sortie sans trace ; le soir, un trou inexpliqué', 'sortie avec motif codé et photo du reçu ; approbation au-delà du seuil'] },
      { label: 'Le tiroir s’ouvre sans vente', cells: ['Personne ne compte ; personne ne sait', 'chaque ouverture journalisée ; compteur par caissier au tableau du mois'] },
      { label: 'Deux caissiers sur la même caisse', cells: ['Un écart, deux personnes, aucune responsable', 'une session par caissier ; passation avec comptage signé des deux'] },
      { label: 'Coupure d’électricité à 15 h', cells: ['Ventes sur papier, retapées le soir ou perdues', 'caisse hors ligne ; mouvements horodatés ; synchronisés au retour'] },
      { label: 'Le dépôt ne correspond pas au relevé', cells: ['On cherche dans des bordereaux une semaine après', 'dépôt lié aux sessions ; rapprochement ligne à ligne ; écart daté'] },
    ], caption: 'Figure 5 · Les trois premières lignes se règlent par le comptage à l’aveugle et par les mouvements avec motif ; les trois suivantes par la session par caissier, le mode hors ligne et le rapprochement du dépôt. Aucune ne se règle par un gérant qui recompte lui-même tous les soirs.', alt: 'Matrice de six situations : écart du soir, sortie sans trace, tiroir ouvert sans vente, deux caissiers, coupure d’électricité, dépôt différent du relevé ; ce qui se passe et ce que l’application fait.' },
    ecarts: { caption: 'Figure 3 · Un mois de fermetures : quatre caissiers, 72 sessions, un point par session sur un axe d’écart, et la bande de tolérance de plus ou moins 500 dinars. Trois caissiers ont des points des deux côtés de zéro et presque tous dans la bande ; la quatrième a sept sessions hors tolérance, toutes négatives, et 31 ouvertures de tiroir sans vente contre quatre à six pour les autres. Le tableau ne dit pas pourquoi ; il montre une tendance que personne ne voyait dans un cahier, et le gérant décide. Caissiers, sessions et chiffres sont un exemple construit.' },
    calendrier: { title: 'Mettre les caisses en sessions en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Règles', note: 'fond par caisse, tolérance, seuil d’approbation des sorties, motifs codés, qui ferme, qui approuve ; avec le gérant', from: 0, to: 1 },
      { label: 'Sessions et mouvements', note: 'session par caissier, paiements liés, entrées et sorties avec motif et photo, ouverture du tiroir journalisée, remise au coffre', from: 1, to: 3, accent: true },
      { label: 'Comptage et écart', note: 'attendu calculé et caché, comptage par coupures, tolérance, décision signée, passation entre caissiers', from: 3, to: 4 },
      { label: 'Coffre et banque', note: 'coffre comme caisse, dépôts avec bordereau, rapprochement avec le relevé, export comptable', from: 4, to: 5 },
      { label: 'Hors ligne et multi-caisses', note: 'ventes et mouvements horodatés sans réseau, synchronisation, plusieurs caisses et points de vente', from: 5, to: 6 },
      { label: 'Mesure', note: 'écarts par caissier et par session, ouvertures sans vente, sorties par motif, délai de dépôt, revue du lundi', from: 6, to: 7 },
    ], caption: 'Figure 6 · Sept semaines, la première sans code : le fond par caisse, la tolérance, le seuil d’approbation et les motifs sont des décisions du gérant. Les deux semaines accentuées sont les sessions et les mouvements, parce que le comptage et le rapprochement ne sont que des lectures de ces deux couches ; les moyens de paiement non espèces viennent du guide sur la caisse.', alt: 'Frise de sept semaines : règles, sessions et mouvements (accentué, deux semaines), comptage et écart, coffre et banque, hors ligne et multi-caisses, mesure.' },
  },
  en: {
    cover: { eyebrow: 'Cash sessions · Cash · Gaps · 2027', title: ['“The till never', 'balances”'], subtitle: 'What gets built for cash: session per cashier, movements, blind count, signed gap, safe, bank deposit', left: { label: 'A notebook, a total from memory', sub: 'and a gap nobody explains' }, right: { label: 'A session, a computed expected', sub: 'a blind count, a signed gap' } },
    fermer: { title: 'Closing a till, in six beats', items: [
      { label: 'Count the float', sub: 'at opening, by denomination; signed by the cashier' },
      { label: 'Take payments', sub: 'each payment linked to the session; the drawer opens on an event' },
      { label: 'Move cash', sub: 'paid in, paid out, safe drops; reason, photo, approval' },
      { label: 'Count blind', sub: 'by denomination, expected hidden; time measured', accent: true },
      { label: 'Decide the gap', sub: 'written tolerance; coded reason; manager approval; signed' },
      { label: 'Deposit and reconcile', sub: 'slip, bank, statement; accounting export' },
    ], caption: 'Figure 2 · The accented beat is the blind count: the cashier enters what they count, by denomination, without seeing what the application expects; the gap appears only afterwards. Before, every dinar in or out of the drawer is a movement of the session; after, the gap is a signed decision, then a deposit that reconciles with the statement.', alt: 'Six beats: count the float, take payments, move cash, count blind (accented), decide the gap, deposit and reconcile.' },
    couches: { title: 'The till, in five layers', layers: [
      { label: 'Session', items: [{ name: 'One session per till and cashier: counted float at opening, count at closing, no payment outside a session', sub: 'a database constraint, not an instruction' }] },
      { label: 'Movements', items: [{ name: 'Sales, refunds, paid in, paid out, safe drops; coded reason, receipt photo, approval beyond a threshold', sub: 'opening the drawer without a sale is a logged event' }] },
      { label: 'Count', items: [{ name: 'Expected computed and hidden; count by denomination; gap against written tolerance; decision signed by two', sub: 'blind, otherwise the count always balances', accent: true }] },
      { label: 'Safe and bank', items: [{ name: 'The safe is a till; drops signed on both sides; deposit with slip; reconciliation with the statement', sub: 'every dinar is in one place at a time' }] },
      { label: 'Measurement', items: [{ name: 'Gap per session and cashier, openings without sale, paid-outs by reason, deposit delay, unclosed sessions', sub: 'a monthly board, read without accusing' }] },
    ], caption: 'Figure 4 · The accented layer is the count: the expected amount is computed and hidden, the count is entered by denomination, and the gap is a signed decision. The session above is the constraint that gives everything else its meaning: a payment without a session does not exist. The safe and the bank below are only other places where the same dinar can be, one at a time.', alt: 'Five layers: session, movements, count (accented), safe and bank, measurement.' },
    journee: { caption: 'Figure 1 · A cash session on 11 November, opened at 08:02 with a counted and signed float of 20,000 dinars, and closed at 20:14. Cash sales, refunds, change paid in, a purchase paid out with a photo, and a safe drop at 14:30 give an expected amount of 132,750 dinars, computed and hidden. The cashier counts 131,750 by denomination in four minutes; the 1,000 gap exceeds the 500 tolerance, gets a coded reason and the manager’s signed approval. Card and online payments of the same session reconcile separately. Amounts and names are a constructed example.' },
    situations: { title: 'Six real situations, and what the application does', columns: ['What happens', 'What the application does'], rows: [
      { label: '1,000 dinars are missing tonight', cells: ['The cashier recounts until it balances', 'expected hidden; count entered; gap signed with reason; tolerance'] },
      { label: 'The cashier took cash for bread', cells: ['Paid out without a trace; a hole at night', 'paid-out with coded reason and receipt photo; approval beyond the threshold'] },
      { label: 'The drawer opens without a sale', cells: ['Nobody counts; nobody knows', 'every opening logged; counter per cashier on the monthly board'] },
      { label: 'Two cashiers on the same till', cells: ['One gap, two people, nobody responsible', 'one session per cashier; hand-over with a count signed by both'] },
      { label: 'Power cut at 3 pm', cells: ['Sales on paper, retyped at night or lost', 'till works offline; movements timestamped; synced when back'] },
      { label: 'The deposit does not match the statement', cells: ['Slips searched a week later', 'deposit linked to sessions; line-by-line reconciliation; dated gap'] },
    ], caption: 'Figure 5 · The first three rows are settled by the blind count and by movements with a reason; the next three by the session per cashier, offline mode and deposit reconciliation. None is settled by a manager who recounts everything every night.', alt: 'Matrix of six situations: evening gap, untraced paid-out, drawer opened without sale, two cashiers, power cut, deposit differing from the statement; what happens and what the application does.' },
    ecarts: { caption: 'Figure 3 · A month of closings: four cashiers, 72 sessions, one dot per session on a gap axis, and the tolerance band of plus or minus 500 dinars. Three cashiers have dots on both sides of zero and almost all within the band; the fourth has seven sessions out of tolerance, all negative, and 31 drawer openings without a sale against four to six for the others. The board does not say why; it shows a pattern nobody saw in a notebook, and the manager decides. Cashiers, sessions and figures are a constructed example.' },
    calendrier: { title: 'Putting tills into sessions in 2027, in weeks', unit: 'wk', items: [
      { label: 'Rules', note: 'float per till, tolerance, approval threshold for paid-outs, coded reasons, who closes, who approves; with the manager', from: 0, to: 1 },
      { label: 'Sessions and movements', note: 'session per cashier, linked payments, paid in and out with reason and photo, logged drawer opening, safe drop', from: 1, to: 3, accent: true },
      { label: 'Count and gap', note: 'expected computed and hidden, count by denomination, tolerance, signed decision, hand-over between cashiers', from: 3, to: 4 },
      { label: 'Safe and bank', note: 'safe as a till, deposits with slip, reconciliation with the statement, accounting export', from: 4, to: 5 },
      { label: 'Offline and multi-till', note: 'sales and movements timestamped without network, sync, several tills and points of sale', from: 5, to: 6 },
      { label: 'Measurement', note: 'gaps per cashier and session, openings without sale, paid-outs by reason, deposit delay, Monday review', from: 6, to: 7 },
    ], caption: 'Figure 6 · Seven weeks, the first without code: the float per till, the tolerance, the approval threshold and the reasons are the manager’s decisions. The two accented weeks are sessions and movements, because the count and the reconciliation are only readings of those two layers; non-cash payment methods come from the till guide.', alt: 'Seven-week timeline: rules, sessions and movements (accented, two weeks), count and gap, safe and bank, offline and multi-till, measurement.' },
  },
  ar: {
    cover: { eyebrow: 'جلسات صندوق · نقد · فوارق · 2027', title: ['«الصندوق لا يتوازن', 'أبداً»'], subtitle: 'ما يُبنى للنقد: جلسة لكل أمين صندوق، حركات، عدّ أعمى، فارق موقَّع، خزنة، إيداع بنكي', left: { label: 'دفتر، ومجموع من الذاكرة', sub: 'وفارق لا يفسّره أحد' }, right: { label: 'جلسة، ومتوقع محسوب', sub: 'عدّ أعمى، وفارق موقَّع' } },
    fermer: { title: 'إغلاق صندوق، في ستة أوقات', items: [
      { label: 'عدّ الرصيد', sub: 'عند الافتتاح، بالفئات؛ موقَّع من أمين الصندوق' },
      { label: 'القبض', sub: 'كل دفعة مرتبطة بالجلسة؛ الدرج يُفتح على حدث' },
      { label: 'تحريك النقد', sub: 'دخول، خروج، إيداع في الخزنة؛ سبب، صورة، موافقة' },
      { label: 'العدّ الأعمى', sub: 'بالفئات، والمتوقع مخفي؛ مدة مقيسة', accent: true },
      { label: 'تقرير الفارق', sub: 'سماحية مكتوبة؛ سبب مرمَّز؛ موافقة المسيّر؛ موقَّع' },
      { label: 'إيداع وتسوية', sub: 'قسيمة، بنك، كشف؛ تصدير محاسبي' },
    ], caption: 'الشكل 2 · الوقت المميز هو العدّ الأعمى: يدخل أمين الصندوق ما يعدّه بالفئات دون أن يرى ما يتوقعه التطبيق؛ والفارق لا يظهر إلا بعد ذلك. وقبله كل دينار يدخل الدرج أو يخرج حركة في الجلسة؛ وبعده الفارق قرار موقَّع، ثم إيداع يُسوّى مع الكشف.', alt: 'ستة أوقات: عدّ الرصيد، القبض، تحريك النقد، العدّ الأعمى (مميز)، تقرير الفارق، إيداع وتسوية.' },
    couches: { title: 'الصندوق، في خمس طبقات', layers: [
      { label: 'الجلسة', items: [{ name: 'جلسة لكل صندوق وأمين: رصيد معدود عند الافتتاح، عدّ عند الإغلاق، لا دفعة خارج جلسة', sub: 'قيد في قاعدة البيانات لا تعليمة' }] },
      { label: 'الحركات', items: [{ name: 'مبيعات، إرجاعات، دخول، خروج، إيداع في الخزنة؛ سبب مرمَّز، صورة الوصل، موافقة بعد عتبة', sub: 'فتح الدرج دون بيع حدث مسجَّل' }] },
      { label: 'العدّ', items: [{ name: 'متوقع محسوب من الحركات ومخفي؛ عدّ بالفئات؛ فارق مقابل سماحية مكتوبة؛ قرار يوقّعه شخصان', sub: 'أعمى، وإلا توازن العدّ دائماً', accent: true }] },
      { label: 'الخزنة والبنك', items: [{ name: 'الخزنة صندوق؛ إيداعات موقَّعة من الجانبين؛ إيداع بقسيمة؛ تسوية مع كشف البنك', sub: 'كل دينار في مكان واحد في كل مرة' }] },
      { label: 'القياس', items: [{ name: 'فارق لكل جلسة وأمين، فتحات دون بيع، خروج بالسبب، مدة من الإغلاق إلى الإيداع، جلسات غير مغلقة', sub: 'لوحة شهرية تُقرأ دون اتهام' }] },
    ], caption: 'الشكل 4 · الطبقة المميزة هي العدّ: المتوقع يُحسب ويُخفى، والعدّ يُدخل بالفئات، والفارق قرار موقَّع. والجلسة فوقها هي القيد الذي يعطي كل الباقي معناه: دفعة بلا جلسة لا توجد. والخزنة والبنك تحتها مجرد أماكن أخرى يمكن أن يكون فيها الدينار نفسه، واحد في كل مرة.', alt: 'خمس طبقات: الجلسة، الحركات، العدّ (مميزة)، الخزنة والبنك، القياس.' },
    journee: { caption: 'الشكل 1 · جلسة صندوق في 11 نوفمبر، فُتحت الساعة 08:02 برصيد 20,000 دينار معدود وموقَّع، وأُغلقت 20:14. المبيعات النقدية والإرجاعات ودخول فكة وخروج لمشتريات بصورة وإيداع في الخزنة الساعة 14:30 تعطي متوقعاً 132,750 ديناراً محسوباً ومخفياً. وتعدّ أمينة الصندوق 131,750 بالفئات في أربع دقائق؛ والفارق 1,000 يتجاوز سماحية 500 فيتلقى سبباً مرمَّزاً وموافقة المسيّر الموقَّعة. ومدفوعات البطاقة والإنترنت للجلسة نفسها تُسوّى على حدة. والمبالغ والأسماء مثال مبني.' },
    situations: { title: 'ست حالات حقيقية، وما يفعله التطبيق', columns: ['ما يحدث', 'ما يفعله التطبيق'], rows: [
      { label: 'ينقص 1,000 دينار هذا المساء', cells: ['يعيد أمين الصندوق العدّ حتى يتوازن', 'متوقع مخفي؛ عدّ مُدخل؛ فارق موقَّع بسبب؛ سماحية'] },
      { label: 'أخذ أمين الصندوق ثمن الخبز', cells: ['خروج بلا أثر؛ وفي المساء ثغرة بلا تفسير', 'خروج بسبب مرمَّز وصورة الوصل؛ موافقة بعد العتبة'] },
      { label: 'الدرج يُفتح دون بيع', cells: ['لا أحد يعدّ؛ لا أحد يعرف', 'كل فتحة مسجَّلة؛ عداد لكل أمين في لوحة الشهر'] },
      { label: 'أمينان على الصندوق نفسه', cells: ['فارق واحد وشخصان ولا مسؤول', 'جلسة لكل أمين؛ تسليم بعدّ موقَّع من الاثنين'] },
      { label: 'انقطاع الكهرباء الساعة 15', cells: ['مبيعات على ورق تُعاد كتابتها مساءً أو تضيع', 'صندوق دون اتصال؛ حركات موقَّتة؛ تُزامَن عند العودة'] },
      { label: 'الإيداع لا يطابق الكشف', cells: ['يُبحث في القسائم بعد أسبوع', 'إيداع مرتبط بالجلسات؛ تسوية سطراً سطراً؛ فارق مؤرَّخ'] },
    ], caption: 'الشكل 5 · الأسطر الثلاثة الأولى تُحل بالعدّ الأعمى والحركات ذات السبب؛ والثلاثة التالية بالجلسة لكل أمين والوضع دون اتصال وتسوية الإيداع. ولا واحد يُحل بمسيّر يعيد العدّ بنفسه كل مساء.', alt: 'مصفوفة ست حالات: فارق المساء، خروج بلا أثر، درج مفتوح دون بيع، أمينان، انقطاع كهرباء، إيداع مختلف عن الكشف؛ ما يحدث وما يفعله التطبيق.' },
    ecarts: { caption: 'الشكل 3 · شهر من الإغلاقات: أربعة أمناء صندوق، 72 جلسة، نقطة لكل جلسة على محور فارق، ونطاق سماحية زائد أو ناقص 500 دينار. ثلاثة أمناء نقاطهم على جانبي الصفر وكلها تقريباً داخل النطاق؛ والرابعة لها سبع جلسات خارج السماحية كلها سالبة و31 فتحة درج دون بيع مقابل أربع إلى ست للآخرين. واللوحة لا تقول لماذا؛ تُظهر اتجاهاً لم يره أحد في دفتر، والمسيّر يقرر. وأمناء الصندوق والجلسات والأرقام مثال مبني.' },
    calendrier: { title: 'وضع الصناديق في جلسات سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'القواعد', note: 'رصيد لكل صندوق، سماحية، عتبة موافقة الخروج، أسباب مرمَّزة، من يغلق، من يوافق؛ مع المسيّر', from: 0, to: 1 },
      { label: 'الجلسات والحركات', note: 'جلسة لكل أمين، دفعات مرتبطة، دخول وخروج بسبب وصورة، فتح الدرج مسجَّل، إيداع في الخزنة', from: 1, to: 3, accent: true },
      { label: 'العدّ والفارق', note: 'متوقع محسوب ومخفي، عدّ بالفئات، سماحية، قرار موقَّع، تسليم بين الأمناء', from: 3, to: 4 },
      { label: 'الخزنة والبنك', note: 'الخزنة كصندوق، إيداعات بقسيمة، تسوية مع الكشف، تصدير محاسبي', from: 4, to: 5 },
      { label: 'دون اتصال وتعدد الصناديق', note: 'مبيعات وحركات موقَّتة بلا شبكة، مزامنة، عدة صناديق ونقاط بيع', from: 5, to: 6 },
      { label: 'القياس', note: 'فوارق لكل أمين وجلسة، فتحات دون بيع، خروج بالسبب، مدة الإيداع، مراجعة الاثنين', from: 6, to: 7 },
    ], caption: 'الشكل 6 · سبعة أسابيع، الأول بلا كود: الرصيد لكل صندوق والسماحية وعتبة الموافقة والأسباب قرارات المسيّر. والأسبوعان المميزان هما الجلسات والحركات، لأن العدّ والتسوية مجرد قراءتين لهاتين الطبقتين؛ ووسائل الدفع غير النقدية من دليل الصندوق.', alt: 'خط زمني من سبعة أسابيع: القواعد، الجلسات والحركات (مميز، أسبوعان)، العدّ والفارق، الخزنة والبنك، دون اتصال وتعدد الصناديق، القياس.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = CH[locale] || CH.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      journee: { svg: session(e.session, rtl), caption: t.journee.caption, alt: e.session.alt },
      fermer: { svg: steps({ title: t.fermer.title, steps: t.fermer.items, arrows: true, rtl }), caption: t.fermer.caption, alt: t.fermer.alt },
      ecarts: { svg: gaps(e.gaps, rtl), caption: t.ecarts.caption, alt: e.gaps.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      situations: { svg: matrix({ title: t.situations.title, columns: t.situations.columns, rows: t.situations.rows, rtl }), caption: t.situations.caption, alt: t.situations.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 7, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
