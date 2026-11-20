import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { request, spend, STRINGS as PU } from './custom/purchasing.mjs';
export const slug = 'tout-le-monde-achete-et-personne-ne-sait-combien-on-a-depense-demandes-d-achat-application-algerie-2027-approbation-budget-engage-bon-commande';
const T = {
  fr: {
    cover: { eyebrow: 'Demandes d’achat · Approbation · Budget · 2027', title: ['« Tout le monde achète,', 'et personne ne sait combien »'], subtitle: 'Ce qu’on construit pour les achats : demande, chaîne par seuils, budget engagé, bon généré, pas de bon pas de paiement', left: { label: 'Un achat au téléphone', sub: 'et une facture qui surprend tout le monde' }, right: { label: 'Une demande, une règle, un bon', sub: 'une enveloppe qui se consomme à l’approbation' } },
    couches: { title: 'Les achats, en cinq couches', layers: [
      { label: 'Demande', items: [{ name: 'Une demande par besoin : article ou description, quantité, centre de coût, justification, devis joint ; depuis le téléphone, hors ligne', sub: 'le demandeur ne peut pas s’approuver lui-même' }] },
      { label: 'Règles d’approbation', items: [{ name: 'Chaîne par seuil de montant et par centre de coût, délégation en absence, séparation demandeur et approbateur ; jouée par le code', sub: 'écrite une fois par le gérant, jamais choisie au cas par cas', accent: true }] },
      { label: 'Budget', items: [{ name: 'Enveloppe par centre de coût et par période ; dépensé, engagé, en attente, disponible ; engagé à l’approbation, alerte ou blocage', sub: 'ce qui est engagé n’est plus disponible' }] },
      { label: 'Bon et réception', items: [{ name: 'Bon numéroté généré depuis la demande, fournisseur référencé, envoyé avec accusé, date attendue, réception contrôlée', sub: 'la même ligne traverse demande, bon, réception, facture' }] },
      { label: 'Rapprochement', items: [{ name: 'Facture rapprochée du bon et de la réception, pas de bon pas de paiement, écarts bloqués, export comptable, mesure', sub: 'une facture sans bon est retournée' }] },
    ], caption: 'Figure 1 · La couche accentuée est la règle d’approbation : une chaîne par seuil et par centre de coût, écrite une fois par le gérant et jouée par le code, avec une délégation quand quelqu’un est absent. La demande au-dessus vient du téléphone ; le budget, le bon et le rapprochement en dessous ne sont que des conséquences d’une approbation donnée selon la règle.', alt: 'Cinq couches : demande, règles d’approbation (accentuée), budget, bon et réception, rapprochement.' },
    demander: { title: 'Acheter, en six temps', items: [
      { label: 'Demander', sub: 'besoin, quantité, centre de coût, justification, devis' },
      { label: 'Vérifier le budget', sub: 'disponible = enveloppe − dépensé − engagé − en attente' },
      { label: 'Approuver', sub: 'chaîne par seuils ; délégation ; depuis le téléphone ; signé', accent: true },
      { label: 'Commander', sub: 'bon numéroté généré, fournisseur référencé, envoyé, accusé' },
      { label: 'Réceptionner', sub: 'quantité, contrôle, photo ; écart avec le bon noté' },
      { label: 'Rapprocher et payer', sub: 'facture = bon = réception ; sinon bloquée ; export' },
    ], caption: 'Figure 2 · L’étape accentuée est l’approbation : elle suit une chaîne écrite, elle se fait depuis le téléphone, et elle engage l’enveloppe au moment où elle est donnée. Avant elle, la demande et la vérification du budget ; après elle, le bon, la réception et le rapprochement, qui ne ressaisissent rien.', alt: 'Six temps : demander, vérifier le budget, approuver (accentué), commander, réceptionner, rapprocher et payer.' },
    demande: { caption: 'Figure 3 · Une demande de trois pompes doseuses pour 486 000 dinars, soumise par l’atelier un matin. La chaîne dit : chef d’atelier jusqu’à 100 000, gérant jusqu’à 500 000, direction au-delà ; la première station est sautée par la règle, la troisième n’est pas requise, le gérant approuve depuis son téléphone à 11 h 20 après avoir vu l’enveloppe. L’enveloppe du centre de coût passe de 184 000 disponibles après engagement, et le bon est généré et envoyé quatre minutes plus tard, avec la mention qu’une facture sans ce numéro ne sera pas payée. Montants, seuils et noms sont un exemple construit.' },
    trimestre: { caption: 'Figure 4 · Le trimestre lu par centre de coût : pour chaque enveloppe, le dépensé, l’engagé par bons ouverts et les demandes en attente, contre la ligne du budget. Le marketing dépasse : ses demandes en attente sont bloquées jusqu’à une décision du gérant. Quatre factures arrivées sans numéro de bon ont été retournées au fournisseur, et le délai médian d’approbation sur le trimestre est de 1,9 jour. Centres de coût, budgets et montants sont un exemple construit.' },
    situations: { title: 'Six situations réelles, et ce que l’application fait', columns: ['Ce qui se passe', 'Ce que l’application fait'], rows: [
      { label: 'Le chef a acheté au téléphone', cells: ['La facture arrive, personne ne l’attendait', 'facture sans bon retournée ; demande a posteriori signée et visible'] },
      { label: 'L’approbateur est en congé', cells: ['Tout attend deux semaines', 'délégation écrite après 48 h ; approbation depuis le téléphone'] },
      { label: 'On ne sait pas ce qu’il reste', cells: ['On apprend le dépassement au bilan', 'enveloppe dépensé, engagé, en attente, disponible ; alerte sous 10 %'] },
      { label: 'Un fournisseur inconnu est payé', cells: ['Un nom, un RIB, un virement', 'fournisseur référencé avec approbation avant le premier bon'] },
      { label: 'La facture dit 12, le bon disait 10', cells: ['On paie 12 sans regarder', 'rapprochement à trois ; écart bloqué ; avoir ou bon complémentaire'] },
      { label: 'Les petits achats en espèces disparaissent', cells: ['Des tickets dans un tiroir', 'note de frais avec photo du reçu, centre de coût, plafond ; ou sortie de caisse'] },
    ], caption: 'Figure 5 · Les trois premières lignes se règlent par la règle d’approbation et l’enveloppe ; les trois suivantes par le fournisseur référencé, le rapprochement à trois et la note de frais. Aucune ne se règle par un gérant qui signe tout lui-même.', alt: 'Matrice de six situations : achat au téléphone, approbateur absent, budget inconnu, fournisseur inconnu, facture différente du bon, petits achats en espèces ; ce qui se passe et ce que l’application fait.' },
    calendrier: { title: 'Mettre les achats sous règle en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Règles', note: 'centres de coût, seuils par montant, chaîne par centre, délégations, enveloppes du trimestre, règle de dépassement, plafond des notes de frais ; avec le gérant', from: 0, to: 1 },
      { label: 'Demande et approbation', note: 'demande depuis le téléphone, pièces jointes, chaîne jouée par le code, délégation, signature, journal', from: 1, to: 3, accent: true },
      { label: 'Budget', note: 'enveloppes par centre et période, engagé à l’approbation, disponible calculé, alertes, blocage', from: 3, to: 4 },
      { label: 'Bon et fournisseurs', note: 'bon généré et envoyé avec accusé, fournisseurs référencés avec approbation, délai attendu mesuré', from: 4, to: 5 },
      { label: 'Réception et rapprochement', note: 'réception liée au bon, rapprochement à trois, pas de bon pas de paiement, export comptable', from: 5, to: 6 },
      { label: 'Mesure', note: 'dépensé et engagé par centre, délai d’approbation, factures sans bon, écarts, revue du lundi', from: 6, to: 7 },
    ], caption: 'Figure 6 · Sept semaines, la première sans code : les centres de coût, les seuils, les délégations et les enveloppes sont des décisions du gérant. Les deux semaines accentuées sont la demande et l’approbation, parce que le budget, le bon et le rapprochement ne sont que des lectures d’une approbation donnée selon la règle.', alt: 'Frise de sept semaines : règles, demande et approbation (accentué, deux semaines), budget, bon et fournisseurs, réception et rapprochement, mesure.' },
  },
  en: {
    cover: { eyebrow: 'Purchase requests · Approval · Budget · 2027', title: ['“Everyone buys,', 'and nobody knows how much”'], subtitle: 'What gets built for purchasing: request, chain by thresholds, committed budget, generated order, reception, no PO no pay', left: { label: 'A purchase by phone', sub: 'and an invoice that surprises everyone' }, right: { label: 'A request, a rule, an order', sub: 'an envelope consumed at approval' } },
    couches: { title: 'Purchasing, in five layers', layers: [
      { label: 'Request', items: [{ name: 'One request per need: item or description, quantity, cost centre, justification, quote attached; from the phone, offline', sub: 'the requester cannot approve their own request' }] },
      { label: 'Approval rules', items: [{ name: 'Chain by amount threshold and cost centre, delegation when absent, separation of requester and approver; played by the code', sub: 'written once by the manager, never picked case by case', accent: true }] },
      { label: 'Budget', items: [{ name: 'Envelope per cost centre and period; spent, committed, pending, available; committed at approval, alert or block', sub: 'what is committed is no longer available' }] },
      { label: 'Order and reception', items: [{ name: 'Numbered order generated from the request, referenced supplier, sent with acknowledgement, expected date, checked reception', sub: 'the same line runs through request, order, reception, invoice' }] },
      { label: 'Matching', items: [{ name: 'Invoice matched to order and reception, no PO no pay, gaps blocked, accounting export, measurement', sub: 'an invoice without an order is returned' }] },
    ], caption: 'Figure 1 · The accented layer is the approval rule: a chain by threshold and cost centre, written once by the manager and played by the code, with a delegation when someone is away. The request above comes from the phone; the budget, the order and the matching below are only consequences of an approval given by the rule.', alt: 'Five layers: request, approval rules (accented), budget, order and reception, matching.' },
    demander: { title: 'Buying, in six beats', items: [
      { label: 'Request', sub: 'need, quantity, cost centre, justification, quote' },
      { label: 'Check the budget', sub: 'available = envelope − spent − committed − pending' },
      { label: 'Approve', sub: 'chain by thresholds; delegation; from the phone; signed', accent: true },
      { label: 'Order', sub: 'numbered order generated, referenced supplier, sent, acknowledged' },
      { label: 'Receive', sub: 'quantity, check, photo; gap with the order noted' },
      { label: 'Match and pay', sub: 'invoice = order = reception; otherwise blocked; export' },
    ], caption: 'Figure 2 · The accented beat is the approval: it follows a written chain, it happens from the phone, and it commits the envelope at the moment it is given. Before it, the request and the budget check; after it, the order, the reception and the matching, which retype nothing.', alt: 'Six beats: request, check the budget, approve (accented), order, receive, match and pay.' },
    demande: { caption: 'Figure 3 · A request for three dosing pumps for 486,000 dinars, submitted by the workshop one morning. The chain says: workshop lead up to 100,000, manager up to 500,000, top management above; the first station is skipped by the rule, the third is not required, the manager approves from his phone at 11:20 after seeing the envelope. The cost centre envelope shows 184,000 available after commitment, and the order is generated and sent four minutes later, stating that an invoice without this number will not be paid. Amounts, thresholds and names are a constructed example.' },
    trimestre: { caption: 'Figure 4 · The quarter read by cost centre: for each envelope, the spent, the committed by open orders and the pending requests, against the budget line. Marketing is over: its pending requests are blocked until a manager’s decision. Four invoices that arrived without an order number were returned to the supplier, and the median approval time over the quarter is 1.9 days. Cost centres, budgets and amounts are a constructed example.' },
    situations: { title: 'Six real situations, and what the application does', columns: ['What happens', 'What the application does'], rows: [
      { label: 'The lead bought by phone', cells: ['The invoice arrives, nobody expected it', 'invoice without order returned; after-the-fact request signed and visible'] },
      { label: 'The approver is on leave', cells: ['Everything waits two weeks', 'written delegation after 48 h; approval from the phone'] },
      { label: 'Nobody knows what is left', cells: ['The overrun is found at year end', 'envelope spent, committed, pending, available; alert below 10 %'] },
      { label: 'An unknown supplier is paid', cells: ['A name, a bank account, a transfer', 'referenced supplier with approval before the first order'] },
      { label: 'The invoice says 12, the order said 10', cells: ['12 is paid without looking', 'three-way matching; gap blocked; credit note or additional order'] },
      { label: 'Small cash purchases vanish', cells: ['Receipts in a drawer', 'expense claim with receipt photo, cost centre, cap; or till paid-out'] },
    ], caption: 'Figure 5 · The first three rows are settled by the approval rule and the envelope; the next three by the referenced supplier, three-way matching and the expense claim. None is settled by a manager who signs everything himself.', alt: 'Matrix of six situations: purchase by phone, absent approver, unknown budget, unknown supplier, invoice differing from order, small cash purchases; what happens and what the application does.' },
    calendrier: { title: 'Putting purchasing under rules in 2027, in weeks', unit: 'wk', items: [
      { label: 'Rules', note: 'cost centres, amount thresholds, chain per centre, delegations, quarter envelopes, overrun rule, expense claim cap; with the manager', from: 0, to: 1 },
      { label: 'Request and approval', note: 'request from the phone, attachments, chain played by the code, delegation, signature, log', from: 1, to: 3, accent: true },
      { label: 'Budget', note: 'envelopes per centre and period, committed at approval, computed available, alerts, block', from: 3, to: 4 },
      { label: 'Order and suppliers', note: 'order generated and sent with acknowledgement, referenced suppliers with approval, expected measured lead time', from: 4, to: 5 },
      { label: 'Reception and matching', note: 'reception linked to the order, three-way matching, no PO no pay, accounting export', from: 5, to: 6 },
      { label: 'Measurement', note: 'spent and committed per centre, approval time, invoices without order, gaps, Monday review', from: 6, to: 7 },
    ], caption: 'Figure 6 · Seven weeks, the first without code: cost centres, thresholds, delegations and envelopes are the manager’s decisions. The two accented weeks are the request and the approval, because the budget, the order and the matching are only readings of an approval given by the rule.', alt: 'Seven-week timeline: rules, request and approval (accented, two weeks), budget, order and suppliers, reception and matching, measurement.' },
  },
  ar: {
    cover: { eyebrow: 'طلبات شراء · موافقة · ميزانية · 2027', title: ['«الجميع يشتري،', 'ولا أحد يعرف كم»'], subtitle: 'ما يُبنى للمشتريات: طلب، سلسلة بالعتبات، ميزانية ملتزَم بها، أمر مولَّد، استلام، لا أمر لا دفع', left: { label: 'شراء بالهاتف', sub: 'وفاتورة تفاجئ الجميع' }, right: { label: 'طلب، قاعدة، أمر', sub: 'غلاف يُستهلك عند الموافقة' } },
    couches: { title: 'المشتريات، في خمس طبقات', layers: [
      { label: 'الطلب', items: [{ name: 'طلب لكل حاجة: صنف أو وصف، كمية، مركز كلفة، تبرير، عرض سعر مرفق؛ من الهاتف، دون اتصال', sub: 'الطالب لا يستطيع الموافقة على طلبه' }] },
      { label: 'قواعد الموافقة', items: [{ name: 'سلسلة بعتبة المبلغ ومركز الكلفة، تفويض عند الغياب، فصل الطالب عن الموافق؛ يلعبها الكود', sub: 'يكتبها المسيّر مرة ولا تُختار حالة بحالة', accent: true }] },
      { label: 'الميزانية', items: [{ name: 'غلاف لكل مركز كلفة وفترة؛ منفق، ملتزَم به، معلَّق، متاح؛ يُلتزم به عند الموافقة، تنبيه أو حجز', sub: 'ما التُزم به لم يعد متاحاً' }] },
      { label: 'الأمر والاستلام', items: [{ name: 'أمر مرقَّم مولَّد من الطلب، مورد مرجعي، مرسل بإشعار استلام، تاريخ متوقع بمهلة مقيسة، استلام مراقَب', sub: 'السطر نفسه يعبر الطلب والأمر والاستلام والفاتورة' }] },
      { label: 'المطابقة', items: [{ name: 'فاتورة مطابَقة بالأمر والاستلام، لا أمر لا دفع، فوارق محجوزة، تصدير محاسبي، قياس', sub: 'الفاتورة بلا أمر تُعاد' }] },
    ], caption: 'الشكل 1 · الطبقة المميزة هي قاعدة الموافقة: سلسلة بالعتبة ومركز الكلفة يكتبها المسيّر مرة ويلعبها الكود، بتفويض حين يغيب أحد. والطلب فوقها يأتي من الهاتف؛ والميزانية والأمر والمطابقة تحتها مجرد نتائج لموافقة أُعطيت وفق القاعدة.', alt: 'خمس طبقات: الطلب، قواعد الموافقة (مميزة)، الميزانية، الأمر والاستلام، المطابقة.' },
    demander: { title: 'الشراء، في ستة أوقات', items: [
      { label: 'الطلب', sub: 'حاجة، كمية، مركز كلفة، تبرير، عرض سعر' },
      { label: 'فحص الميزانية', sub: 'المتاح = الغلاف − المنفق − الملتزَم به − المعلَّق' },
      { label: 'الموافقة', sub: 'سلسلة بالعتبات؛ تفويض؛ من الهاتف؛ موقَّعة', accent: true },
      { label: 'الأمر', sub: 'أمر مرقَّم مولَّد، مورد مرجعي، مرسل، بإشعار' },
      { label: 'الاستلام', sub: 'كمية، مراقبة، صورة؛ فارق مع الأمر مدوَّن' },
      { label: 'المطابقة والدفع', sub: 'فاتورة = أمر = استلام؛ وإلا محجوزة؛ تصدير' },
    ], caption: 'الشكل 2 · الوقت المميز هو الموافقة: تتبع سلسلة مكتوبة، وتتم من الهاتف، وتلتزم بالغلاف لحظة إعطائها. وقبلها الطلب وفحص الميزانية؛ وبعدها الأمر والاستلام والمطابقة التي لا تعيد كتابة شيء.', alt: 'ستة أوقات: الطلب، فحص الميزانية، الموافقة (مميز)، الأمر، الاستلام، المطابقة والدفع.' },
    demande: { caption: 'الشكل 3 · طلب ثلاث مضخات جرعات بـ 486,000 دينار قدّمته الورشة ذات صباح. السلسلة تقول: رئيس الورشة حتى 100,000، المسيّر حتى 500,000، الإدارة فوق ذلك؛ المحطة الأولى تُخطّيت بالقاعدة، والثالثة غير مطلوبة، والمسيّر يوافق من هاتفه الساعة 11:20 بعد رؤية الغلاف. ويُظهر غلاف مركز الكلفة 184,000 متاحة بعد الالتزام، ويُولَّد الأمر ويُرسل بعد أربع دقائق مع الإشارة إلى أن فاتورة بلا هذا الرقم لن تُدفع. والمبالغ والعتبات والأسماء مثال مبني.' },
    trimestre: { caption: 'الشكل 4 · الربع مقروءاً بمركز الكلفة: لكل غلاف المنفق والملتزَم به بأوامر مفتوحة والطلبات المعلَّقة مقابل خط الميزانية. التسويق متجاوز: طلباته المعلَّقة محجوزة حتى قرار المسيّر. وأربع فواتير وصلت بلا رقم أمر أُعيدت إلى المورد، ومهلة الموافقة الوسيطة على الربع 1.9 يوم. ومراكز الكلفة والميزانيات والمبالغ مثال مبني.' },
    situations: { title: 'ست حالات حقيقية، وما يفعله التطبيق', columns: ['ما يحدث', 'ما يفعله التطبيق'], rows: [
      { label: 'الرئيس اشترى بالهاتف', cells: ['تصل الفاتورة ولا أحد كان ينتظرها', 'فاتورة بلا أمر تُعاد؛ طلب لاحق موقَّع ومرئي'] },
      { label: 'الموافق في إجازة', cells: ['كل شيء ينتظر أسبوعين', 'تفويض مكتوب بعد 48 ساعة؛ موافقة من الهاتف'] },
      { label: 'لا أحد يعرف ما تبقى', cells: ['يُكتشف التجاوز في الحصيلة', 'غلاف منفق، ملتزَم به، معلَّق، متاح؛ تنبيه تحت 10 %'] },
      { label: 'مورد مجهول يُدفع له', cells: ['اسم، وحساب بنكي، وتحويل', 'مورد مرجعي بموافقة قبل أول أمر'] },
      { label: 'الفاتورة تقول 12 والأمر قال 10', cells: ['تُدفع 12 دون نظر', 'مطابقة ثلاثية؛ فارق محجوز؛ إشعار دائن أو أمر تكميلي'] },
      { label: 'المشتريات النقدية الصغيرة تختفي', cells: ['وصول في درج', 'مذكرة مصاريف بصورة الوصل ومركز كلفة وسقف؛ أو خروج صندوق'] },
    ], caption: 'الشكل 5 · الأسطر الثلاثة الأولى تُحل بقاعدة الموافقة والغلاف؛ والثلاثة التالية بالمورد المرجعي والمطابقة الثلاثية ومذكرة المصاريف. ولا واحد يُحل بمسيّر يوقّع كل شيء بنفسه.', alt: 'مصفوفة ست حالات: شراء بالهاتف، موافق غائب، ميزانية مجهولة، مورد مجهول، فاتورة مختلفة عن الأمر، مشتريات نقدية صغيرة؛ ما يحدث وما يفعله التطبيق.' },
    calendrier: { title: 'وضع المشتريات تحت القاعدة سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'القواعد', note: 'مراكز الكلفة، عتبات المبالغ، سلسلة لكل مركز، تفويضات، أغلفة الربع، قاعدة التجاوز، سقف مذكرات المصاريف؛ مع المسيّر', from: 0, to: 1 },
      { label: 'الطلب والموافقة', note: 'طلب من الهاتف، مرفقات، سلسلة يلعبها الكود، تفويض، توقيع، سجل', from: 1, to: 3, accent: true },
      { label: 'الميزانية', note: 'أغلفة لكل مركز وفترة، التزام عند الموافقة، متاح محسوب، تنبيهات، حجز', from: 3, to: 4 },
      { label: 'الأمر والموردون', note: 'أمر مولَّد ومرسل بإشعار استلام، موردون مرجعيون بموافقة، مهلة متوقعة مقيسة', from: 4, to: 5 },
      { label: 'الاستلام والمطابقة', note: 'استلام مرتبط بالأمر، مطابقة ثلاثية، لا أمر لا دفع، تصدير محاسبي', from: 5, to: 6 },
      { label: 'القياس', note: 'منفق وملتزَم به لكل مركز، مهلة الموافقة، فواتير بلا أمر، فوارق، مراجعة الاثنين', from: 6, to: 7 },
    ], caption: 'الشكل 6 · سبعة أسابيع، الأول بلا كود: مراكز الكلفة والعتبات والتفويضات والأغلفة قرارات المسيّر. والأسبوعان المميزان هما الطلب والموافقة، لأن الميزانية والأمر والمطابقة مجرد قراءات لموافقة أُعطيت وفق القاعدة.', alt: 'خط زمني من سبعة أسابيع: القواعد، الطلب والموافقة (مميز، أسبوعان)، الميزانية، الأمر والموردون، الاستلام والمطابقة، القياس.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = PU[locale] || PU.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      demander: { svg: steps({ title: t.demander.title, steps: t.demander.items, arrows: true, rtl }), caption: t.demander.caption, alt: t.demander.alt },
      demande: { svg: request(e.request, rtl), caption: t.demande.caption, alt: e.request.alt },
      trimestre: { svg: spend(e.spend, rtl), caption: t.trimestre.caption, alt: e.spend.alt },
      situations: { svg: matrix({ title: t.situations.title, columns: t.situations.columns, rows: t.situations.rows, rtl }), caption: t.situations.caption, alt: t.situations.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 7, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
