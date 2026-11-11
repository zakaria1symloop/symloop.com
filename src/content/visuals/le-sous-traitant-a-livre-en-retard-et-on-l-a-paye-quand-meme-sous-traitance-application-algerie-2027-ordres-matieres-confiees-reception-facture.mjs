import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { order, partners, STRINGS as SC } from './custom/subcontract.mjs';
export const slug = 'le-sous-traitant-a-livre-en-retard-et-on-l-a-paye-quand-meme-sous-traitance-application-algerie-2027-ordres-matieres-confiees-reception-facture';
const T = {
  fr: {
    cover: { eyebrow: 'Sous-traitance · Ordres · Matières confiées · 2027', title: ['« Le sous-traitant a livré en retard,', 'et on l’a payé quand même »'], subtitle: 'Ce qu’on construit pour la sous-traitance : ordre écrit, matières confiées, jalons, réception, règlement calculé, tableau', left: { label: 'Un accord au téléphone', sub: 'et une facture payée sans contrôle' }, right: { label: 'Un ordre accepté, un règlement calculé', sub: 'matières soldées, partenaires mesurés' } },
    couches: { title: 'La sous-traitance, en cinq couches', layers: [
      { label: 'Ordre', items: [{ name: 'Périmètre, quantité, prix, délai, jalons, règle de retenue, tolérance matière ; envoyé, accepté par le partenaire, versionné', sub: 'les termes sont écrits avant la première pièce' }] },
      { label: 'Matières confiées', items: [{ name: 'Remises signées, solde par partenaire comme un solde d’emballages ; consommé, rendu, écart contre tolérance', sub: 'ce qui est confié est un bien qui doit revenir' }] },
      { label: 'Suivi', items: [{ name: 'Portail partenaire ou WhatsApp ; jalons avec photos horodatées ; livraisons partielles ; retard compté par livraison', sub: 'le partenaire sans logiciel suit le même ordre' }] },
      { label: 'Réception et règlement', items: [{ name: 'Contrôle selon le plan ; accepté et refusé ; retenue calculée par la règle ; facture rapprochée à l’accepté ; matières soldées', sub: 'pas d’ordre, pas de facture ; rien de négocié après', accent: true }] },
      { label: 'Mesure', items: [{ name: 'Par partenaire : à l’heure, acceptées, prix contre référence, écart matière ; niveau préféré, normal, surveillé ; capacité', sub: 'le prix seul choisit le mauvais partenaire' }] },
    ], caption: 'Figure 1 · La couche accentuée est la réception et le règlement : le contrôle sépare l’accepté du refusé, la retenue est calculée par la règle écrite dans l’ordre, la facture est rapprochée à l’accepté moins la retenue, et les matières sont soldées ; rien n’est négocié après coup. L’ordre au-dessus est ce qui rend ce calcul possible ; la mesure en dessous dit à qui confier le prochain.', alt: 'Cinq couches : ordre, matières confiées, suivi, réception et règlement (accentuée), mesure.' },
    ordre: { caption: 'Figure 2 · Un ordre de six cents chemises confié à un atelier, suivi du 11 au 28 novembre. Les termes, quantité, prix, délai, règle de retenue, matières, sont acceptés sur le portail avant que le tissu ne parte. Les jalons sont photographiés, la livraison partielle est dans le délai, le solde arrive avec deux jours de retard, le contrôle refuse quatorze pièces, et le règlement est calculé : accepté moins retenue, matières soldées. La facture reçue est rapprochée au chiffre calculé, et l’écart est retourné au partenaire. Quantités, prix et noms sont un exemple construit.' },
    situations: { title: 'Six situations réelles, et ce que l’application fait', columns: ['Ce qui se passe', 'Ce que l’application fait'], rows: [
      { label: 'Livré en retard, payé quand même', cells: ['Le retard est oublié à la facture', 'retard compté par livraison ; retenue calculée par la règle de l’ordre ; facture rapprochée'] },
      { label: 'Le tissu confié a disparu en partie', cells: ['Personne ne sait combien a été remis', 'matières remises signées ; solde par partenaire ; écart contre tolérance au règlement'] },
      { label: 'On découvre les défauts chez le client final', cells: ['Reprise à nos frais, réputation', 'contrôle à la réception selon le plan ; refusé avec photos ; partenaire surveillé'] },
      { label: 'La facture ne correspond pas à l’ordre', cells: ['On paie le chiffre du partenaire', 'facture rapprochée à l’accepté moins la retenue ; pas d’ordre, pas de facture'] },
      { label: 'On ne sait pas qui a de la capacité', cells: ['On appelle trois ateliers le lundi', 'ordres en cours par partenaire ; délais tenus ; niveau ; capacité déclarée'] },
      { label: 'Le partenaire n’a pas de logiciel', cells: ['Tout passe par des appels', 'ordre, acceptation, jalons photo et livraison par WhatsApp ; mêmes règles'] },
    ], caption: 'Figure 3 · Les trois premières lignes se règlent par l’ordre écrit, le solde matière et le contrôle à la réception ; les trois suivantes par le rapprochement à l’accepté, le tableau des partenaires et le canal WhatsApp. Aucune ne se règle par un partenaire plus sérieux.', alt: 'Matrice de six situations : retard payé, matières disparues, défauts découverts tard, facture différente, capacité inconnue, partenaire sans logiciel ; ce qui se passe et ce que l’application fait.' },
    confier: { title: 'Confier un travail, en six temps', items: [
      { label: 'Écrire l’ordre', sub: 'périmètre, quantité, prix, délai, jalons, retenue, tolérance' },
      { label: 'Faire accepter', sub: 'portail ou WhatsApp ; version acceptée figée' },
      { label: 'Remettre les matières', sub: 'quantités signées ; solde matière ouvert' },
      { label: 'Suivre les jalons', sub: 'photos horodatées ; livraisons partielles ; retard par livraison' },
      { label: 'Réceptionner', sub: 'contrôle selon le plan ; accepté, refusé ; matières rendues', accent: true },
      { label: 'Régler et mesurer', sub: 'retenue calculée ; facture rapprochée ; tableau mis à jour' },
    ], caption: 'Figure 4 · L’étape accentuée est la réception : le contrôle selon le plan sépare l’accepté du refusé, et les matières rendues sont comptées ; c’est de là que le règlement se calcule. Avant elle, l’ordre est écrit, accepté, et les matières sont remises contre signature ; après elle, la retenue, la facture et le tableau ne sont que des lectures.', alt: 'Six temps : écrire l’ordre, faire accepter, remettre les matières, suivre les jalons, réceptionner (accentué), régler et mesurer.' },
    partenaires: { caption: 'Figure 5 · Le tableau des partenaires sur quatre-vingt-dix jours : à l’heure, acceptées, prix contre référence, écart matière, niveau. Le partenaire au prix le plus bas sur le papier est celui qui livre à l’heure une fois sur deux et perd trois pour cent du tissu ; il passe en surveillé, contrôlé à cent pour cent, et ne reçoit plus d’ordre au-delà du seuil. Le préféré est sous la référence et à l’heure ; il reçoit les ordres d’abord. Partenaires et chiffres sont un exemple construit.' },
    calendrier: { title: 'Mettre la sous-traitance sous ordre en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Règles', note: 'types de travaux, modèle d’ordre, règle de retenue, tolérances matière, plan de contrôle à la réception, niveaux de partenaires ; avec le gérant', from: 0, to: 1 },
      { label: 'Ordres et matières', note: 'ordre versionné, acceptation sur portail ou WhatsApp, remise de matières signée, solde matière par partenaire', from: 1, to: 3, accent: true },
      { label: 'Suivi', note: 'jalons photo, livraisons partielles, retard par livraison, portail partenaire, WhatsApp', from: 3, to: 4 },
      { label: 'Réception et règlement', note: 'contrôle selon le plan, accepté et refusé, retenue calculée, facture rapprochée, matières soldées, export', from: 4, to: 5 },
      { label: 'Reprise', note: 'ordres en cours saisis avec leurs matières remises, soldes matière initiaux signés', from: 5, to: 6 },
      { label: 'Mesure', note: 'tableau des partenaires, niveaux, capacité, revue du lundi', from: 6, to: 7 },
    ], caption: 'Figure 6 · Sept semaines, la première sans code : le modèle d’ordre, la règle de retenue, les tolérances et le plan de contrôle sont des décisions du gérant. Les deux semaines accentuées sont les ordres et les matières, parce que le suivi, le règlement et le tableau ne sont que des lectures d’un ordre accepté et de matières signées.', alt: 'Frise de sept semaines : règles, ordres et matières (accentué, deux semaines), suivi, réception et règlement, reprise, mesure.' },
  },
  en: {
    cover: { eyebrow: 'Subcontracting · Orders · Consigned materials · 2027', title: ['“The subcontractor delivered late,', 'and we paid anyway”'], subtitle: 'What gets built for subcontracting: written order, consigned materials, milestones, acceptance, computed settlement, board', left: { label: 'An agreement by phone', sub: 'and an invoice paid without a check' }, right: { label: 'An accepted order, a computed settlement', sub: 'materials balanced, partners measured' } },
    couches: { title: 'Subcontracting, in five layers', layers: [
      { label: 'Order', items: [{ name: 'Scope, quantity, price, deadline, milestones, retention rule, materials tolerance; sent, accepted by the partner, versioned', sub: 'terms are written before the first piece' }] },
      { label: 'Consigned materials', items: [{ name: 'Signed hand-overs, balance per partner like a packaging balance; consumed, returned, gap against tolerance', sub: 'what is consigned is an asset that must come back' }] },
      { label: 'Tracking', items: [{ name: 'Partner portal or WhatsApp; milestones with timestamped photos; partial deliveries; delay counted per delivery', sub: 'the partner without software follows the same order' }] },
      { label: 'Acceptance and settlement', items: [{ name: 'Check per plan; accepted and refused; retention computed by the rule; invoice matched to accepted; materials balanced', sub: 'no order, no invoice; nothing negotiated afterwards', accent: true }] },
      { label: 'Measurement', items: [{ name: 'Per partner: on time, accepted, price against reference, materials gap; preferred, normal, watched level; capacity', sub: 'price alone picks the wrong partner' }] },
    ], caption: 'Figure 1 · The accented layer is acceptance and settlement: the check separates accepted from refused, the retention is computed by the rule written in the order, the invoice is matched to accepted minus retention, and materials are balanced; nothing is negotiated after the fact. The order above is what makes that computation possible; measurement below says whom to trust with the next one.', alt: 'Five layers: order, consigned materials, tracking, acceptance and settlement (accented), measurement.' },
    ordre: { caption: 'Figure 2 · An order of six hundred shirts entrusted to a workshop, followed from 11 to 28 November. The terms, quantity, price, deadline, retention rule, materials, are accepted on the portal before the fabric leaves. Milestones are photographed, the partial delivery is within the deadline, the remainder arrives two days late, the check refuses fourteen pieces, and the settlement is computed: accepted minus retention, materials balanced. The invoice received is matched to the computed figure, and the gap is returned to the partner. Quantities, prices and names are a constructed example.' },
    situations: { title: 'Six real situations, and what the application does', columns: ['What happens', 'What the application does'], rows: [
      { label: 'Delivered late, paid anyway', cells: ['The delay is forgotten at invoice time', 'delay counted per delivery; retention computed by the order’s rule; invoice matched'] },
      { label: 'Part of the consigned fabric vanished', cells: ['Nobody knows how much was handed over', 'materials handed over signed; balance per partner; gap against tolerance at settlement'] },
      { label: 'Defects found at the end customer', cells: ['Rework at our cost, reputation', 'check at acceptance per plan; refused with photos; partner watched'] },
      { label: 'The invoice does not match the order', cells: ['The partner’s figure is paid', 'invoice matched to accepted minus retention; no order, no invoice'] },
      { label: 'Nobody knows who has capacity', cells: ['Three workshops called on Monday', 'open orders per partner; deadlines kept; level; declared capacity'] },
      { label: 'The partner has no software', cells: ['Everything goes through calls', 'order, acceptance, photo milestones and delivery by WhatsApp; same rules'] },
    ], caption: 'Figure 3 · The first three rows are settled by the written order, the materials balance and the check at acceptance; the next three by matching to accepted, the partner board and the WhatsApp channel. None is settled by a more serious partner.', alt: 'Matrix of six situations: paid delay, vanished materials, defects found late, differing invoice, unknown capacity, partner without software; what happens and what the application does.' },
    confier: { title: 'Entrusting a job, in six beats', items: [
      { label: 'Write the order', sub: 'scope, quantity, price, deadline, milestones, retention, tolerance' },
      { label: 'Get it accepted', sub: 'portal or WhatsApp; accepted version frozen' },
      { label: 'Hand over materials', sub: 'signed quantities; materials balance opened' },
      { label: 'Track milestones', sub: 'timestamped photos; partial deliveries; delay per delivery' },
      { label: 'Accept', sub: 'check per plan; accepted, refused; materials returned', accent: true },
      { label: 'Settle and measure', sub: 'retention computed; invoice matched; board updated' },
    ], caption: 'Figure 4 · The accented beat is acceptance: the check per plan separates accepted from refused, and returned materials are counted; that is where the settlement is computed from. Before it, the order is written, accepted, and materials are handed over against signature; after it, retention, invoice and board are only readings.', alt: 'Six beats: write the order, get it accepted, hand over materials, track milestones, accept (accented), settle and measure.' },
    partenaires: { caption: 'Figure 5 · The partner board over ninety days: on time, accepted, price against reference, materials gap, level. The partner with the lowest price on paper is the one delivering on time every other order and losing three percent of the fabric; it moves to watched, inspected at one hundred percent, and receives no more orders beyond the threshold. The preferred one is below reference and on time; it receives orders first. Partners and figures are a constructed example.' },
    calendrier: { title: 'Putting subcontracting under orders in 2027, in weeks', unit: 'wk', items: [
      { label: 'Rules', note: 'job types, order template, retention rule, materials tolerances, acceptance control plan, partner levels; with the manager', from: 0, to: 1 },
      { label: 'Orders and materials', note: 'versioned order, acceptance on portal or WhatsApp, signed materials hand-over, materials balance per partner', from: 1, to: 3, accent: true },
      { label: 'Tracking', note: 'photo milestones, partial deliveries, delay per delivery, partner portal, WhatsApp', from: 3, to: 4 },
      { label: 'Acceptance and settlement', note: 'check per plan, accepted and refused, retention computed, invoice matched, materials balanced, export', from: 4, to: 5 },
      { label: 'Take-over', note: 'open orders entered with their handed-over materials, opening materials balances signed', from: 5, to: 6 },
      { label: 'Measurement', note: 'partner board, levels, capacity, Monday review', from: 6, to: 7 },
    ], caption: 'Figure 6 · Seven weeks, the first without code: the order template, the retention rule, tolerances and the control plan are the manager’s decisions. The two accented weeks are orders and materials, because tracking, settlement and the board are only readings of an accepted order and signed materials.', alt: 'Seven-week timeline: rules, orders and materials (accented, two weeks), tracking, acceptance and settlement, take-over, measurement.' },
  },
  ar: {
    cover: { eyebrow: 'مناولة · أوامر · مواد مسلَّمة · 2027', title: ['«المناوِل سلّم متأخراً،', 'ودفعنا له على أي حال»'], subtitle: 'ما يُبنى للمناولة: أمر مكتوب، مواد مسلَّمة، مراحل، استلام، تسوية محسوبة، لوحة', left: { label: 'اتفاق بالهاتف', sub: 'وفاتورة تُدفع بلا مراقبة' }, right: { label: 'أمر مقبول، وتسوية محسوبة', sub: 'مواد مسوّاة، وشركاء مقيسون' } },
    couches: { title: 'المناولة، في خمس طبقات', layers: [
      { label: 'الأمر', items: [{ name: 'نطاق، كمية، سعر، أجل، مراحل، قاعدة اقتطاع، سماحية مواد؛ يُرسل ويقبله الشريك ويُرقَّم بالإصدار', sub: 'الشروط تُكتب قبل القطعة الأولى' }] },
      { label: 'المواد المسلَّمة', items: [{ name: 'تسليمات موقَّعة، رصيد لكل شريك كرصيد التغليف؛ مستهلَك، مرجَع، فارق مقابل السماحية', sub: 'ما يُسلَّم أصل يجب أن يعود' }] },
      { label: 'المتابعة', items: [{ name: 'بوابة شريك أو واتساب؛ مراحل بصور موقَّتة؛ تسليمات جزئية؛ تأخر يُحسب لكل تسليم', sub: 'الشريك بلا برنامج يتبع الأمر نفسه' }] },
      { label: 'الاستلام والتسوية', items: [{ name: 'مراقبة وفق الخطة؛ مقبول ومرفوض؛ اقتطاع محسوب بالقاعدة؛ فاتورة مطابَقة بالمقبول؛ مواد مسوّاة', sub: 'لا أمر لا فاتورة؛ لا شيء يُفاوَض بعدها', accent: true }] },
      { label: 'القياس', items: [{ name: 'لكل شريك: في الوقت، مقبولة، سعر مقابل المرجع، فارق مواد؛ مستوى مفضَّل أو عادي أو مراقَب؛ طاقة', sub: 'السعر وحده يختار الشريك الخطأ' }] },
    ], caption: 'الشكل 1 · الطبقة المميزة هي الاستلام والتسوية: المراقبة تفصل المقبول عن المرفوض، والاقتطاع يُحسب بالقاعدة المكتوبة في الأمر، والفاتورة تُطابَق بالمقبول ناقص الاقتطاع، والمواد تُسوّى؛ ولا شيء يُفاوَض بعد الواقعة. والأمر فوقها هو ما يجعل هذا الحساب ممكناً؛ والقياس تحتها يقول لمن يُعهد بالتالي.', alt: 'خمس طبقات: الأمر، المواد المسلَّمة، المتابعة، الاستلام والتسوية (مميزة)، القياس.' },
    ordre: { caption: 'الشكل 2 · أمر بستمائة قميص عُهد به إلى ورشة، متتبَّع من 11 إلى 28 نوفمبر. الشروط، الكمية والسعر والأجل وقاعدة الاقتطاع والمواد، تُقبل على البوابة قبل أن يغادر القماش. وتُصوَّر المراحل، والتسليم الجزئي ضمن الأجل، والباقي يصل بتأخر يومين، والمراقبة ترفض أربع عشرة قطعة، والتسوية تُحسب: المقبول ناقص الاقتطاع، والمواد مسوّاة. والفاتورة المستلَمة تُطابَق بالرقم المحسوب، والفارق يُعاد إلى الشريك. والكميات والأسعار والأسماء مثال مبني.' },
    situations: { title: 'ست حالات حقيقية، وما يفعله التطبيق', columns: ['ما يحدث', 'ما يفعله التطبيق'], rows: [
      { label: 'سلّم متأخراً، ودُفع له على أي حال', cells: ['التأخر يُنسى عند الفاتورة', 'تأخر يُحسب لكل تسليم؛ اقتطاع محسوب بقاعدة الأمر؛ فاتورة مطابَقة'] },
      { label: 'جزء من القماش المسلَّم اختفى', cells: ['لا أحد يعرف كم سُلّم', 'مواد مسلَّمة موقَّعة؛ رصيد لكل شريك؛ فارق مقابل السماحية عند التسوية'] },
      { label: 'العيوب تُكتشف عند الزبون النهائي', cells: ['إعادة على حسابنا، وسمعة', 'مراقبة عند الاستلام وفق الخطة؛ مرفوض بصور؛ شريك مراقَب'] },
      { label: 'الفاتورة لا تطابق الأمر', cells: ['يُدفع رقم الشريك', 'فاتورة مطابَقة بالمقبول ناقص الاقتطاع؛ لا أمر لا فاتورة'] },
      { label: 'لا أحد يعرف من لديه طاقة', cells: ['نتصل بثلاث ورش يوم الاثنين', 'أوامر جارية لكل شريك؛ آجال موفّى بها؛ مستوى؛ طاقة مصرَّح بها'] },
      { label: 'الشريك بلا برنامج', cells: ['كل شيء بالمكالمات', 'أمر وقبول ومراحل بالصور وتسليم بواتساب؛ القواعد نفسها'] },
    ], caption: 'الشكل 3 · الأسطر الثلاثة الأولى تُحل بالأمر المكتوب ورصيد المواد والمراقبة عند الاستلام؛ والثلاثة التالية بالمطابقة بالمقبول ولوحة الشركاء وقناة واتساب. ولا واحد يُحل بشريك أكثر جدية.', alt: 'مصفوفة ست حالات: تأخر مدفوع، مواد مختفية، عيوب مكتشفة متأخراً، فاتورة مختلفة، طاقة مجهولة، شريك بلا برنامج؛ ما يحدث وما يفعله التطبيق.' },
    confier: { title: 'العهد بعمل، في ستة أوقات', items: [
      { label: 'كتابة الأمر', sub: 'نطاق، كمية، سعر، أجل، مراحل، اقتطاع، سماحية' },
      { label: 'الحصول على القبول', sub: 'بوابة أو واتساب؛ النسخة المقبولة مجمَّدة' },
      { label: 'تسليم المواد', sub: 'كميات موقَّعة؛ رصيد مواد مفتوح' },
      { label: 'متابعة المراحل', sub: 'صور موقَّتة؛ تسليمات جزئية؛ تأخر لكل تسليم' },
      { label: 'الاستلام', sub: 'مراقبة وفق الخطة؛ مقبول، مرفوض؛ مواد مرجَعة', accent: true },
      { label: 'التسوية والقياس', sub: 'اقتطاع محسوب؛ فاتورة مطابَقة؛ لوحة محدَّثة' },
    ], caption: 'الشكل 4 · الوقت المميز هو الاستلام: المراقبة وفق الخطة تفصل المقبول عن المرفوض، والمواد المرجَعة تُعدّ؛ ومن هناك تُحسب التسوية. وقبله يُكتب الأمر ويُقبل وتُسلَّم المواد مقابل توقيع؛ وبعده الاقتطاع والفاتورة واللوحة مجرد قراءات.', alt: 'ستة أوقات: كتابة الأمر، الحصول على القبول، تسليم المواد، متابعة المراحل، الاستلام (مميز)، التسوية والقياس.' },
    partenaires: { caption: 'الشكل 5 · لوحة الشركاء على تسعين يوماً: في الوقت، مقبولة، سعر مقابل المرجع، فارق مواد، مستوى. والشريك الأدنى سعراً على الورق هو الذي يسلّم في الوقت مرة من اثنتين ويفقد ثلاثة بالمائة من القماش؛ ينتقل إلى مراقَب، يُراقَب مائة بالمائة، ولا يتلقى أوامر بعد العتبة. والمفضَّل تحت المرجع وفي الوقت؛ ويتلقى الأوامر أولاً. والشركاء والأرقام مثال مبني.' },
    calendrier: { title: 'وضع المناولة تحت الأمر سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'القواعد', note: 'أنواع الأعمال، نموذج الأمر، قاعدة الاقتطاع، سماحيات المواد، خطة مراقبة الاستلام، مستويات الشركاء؛ مع المسيّر', from: 0, to: 1 },
      { label: 'الأوامر والمواد', note: 'أمر مرقَّم بالإصدار، قبول على البوابة أو واتساب، تسليم مواد موقَّع، رصيد مواد لكل شريك', from: 1, to: 3, accent: true },
      { label: 'المتابعة', note: 'مراحل بالصور، تسليمات جزئية، تأخر لكل تسليم، بوابة شريك، واتساب', from: 3, to: 4 },
      { label: 'الاستلام والتسوية', note: 'مراقبة وفق الخطة، مقبول ومرفوض، اقتطاع محسوب، فاتورة مطابَقة، مواد مسوّاة، تصدير', from: 4, to: 5 },
      { label: 'الاستعادة', note: 'أوامر جارية تُدخل بموادها المسلَّمة، أرصدة مواد افتتاحية موقَّعة', from: 5, to: 6 },
      { label: 'القياس', note: 'لوحة الشركاء، مستويات، طاقة، مراجعة الاثنين', from: 6, to: 7 },
    ], caption: 'الشكل 6 · سبعة أسابيع، الأول بلا كود: نموذج الأمر وقاعدة الاقتطاع والسماحيات وخطة المراقبة قرارات المسيّر. والأسبوعان المميزان هما الأوامر والمواد، لأن المتابعة والتسوية واللوحة مجرد قراءات لأمر مقبول ومواد موقَّعة.', alt: 'خط زمني من سبعة أسابيع: القواعد، الأوامر والمواد (مميز، أسبوعان)، المتابعة، الاستلام والتسوية، الاستعادة، القياس.' },
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
      ordre: { svg: order(e.order, rtl), caption: t.ordre.caption, alt: e.order.alt },
      situations: { svg: matrix({ title: t.situations.title, columns: t.situations.columns, rows: t.situations.rows, rtl }), caption: t.situations.caption, alt: t.situations.alt },
      confier: { svg: steps({ title: t.confier.title, steps: t.confier.items, arrows: true, rtl }), caption: t.confier.caption, alt: t.confier.alt },
      partenaires: { svg: partners(e.partners, rtl), caption: t.partenaires.caption, alt: e.partners.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 7, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
