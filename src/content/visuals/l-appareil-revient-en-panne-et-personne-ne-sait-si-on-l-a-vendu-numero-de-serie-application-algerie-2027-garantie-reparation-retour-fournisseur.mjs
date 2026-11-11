import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { life, board, STRINGS as SR } from './custom/serial.mjs';
export const slug = 'l-appareil-revient-en-panne-et-personne-ne-sait-si-on-l-a-vendu-numero-de-serie-application-algerie-2027-garantie-reparation-retour-fournisseur';
const T = {
  fr: {
    cover: { eyebrow: 'Numéro de série · Garantie · Réparation · 2027', title: ['« L’appareil revient en panne', 'et personne ne sait si on l’a vendu »'], subtitle: 'Ce qu’on construit pour suivre chaque unité : série scannée, vente liée, garantie comptée, réparation suivie', left: { label: 'Un ticket perdu, une dispute', sub: 'et une réparation offerte dans le doute' }, right: { label: 'Un numéro scanné, une réponse', sub: 'vendue ici, jour 187 / 365, sous garantie' } },
    comptoir: { title: 'Un appareil revient au comptoir, en six temps', items: [
      { label: 'Scanner la série', sub: 'numéro lu sur l’étiquette ou dans les réglages ; format vérifié' },
      { label: 'Retrouver l’unité', sub: 'vendue ici ou non, à qui, quand, sur quelle facture' },
      { label: 'Décider la garantie', sub: 'jour compté depuis la remise contre la durée écrite ; décision signée', accent: true },
      { label: 'Ouvrir l’ordre', sub: 'diagnostic, photos, panne reproduite ; reçu au client' },
      { label: 'Réparer ou réclamer', sub: 'pièce commandée, ou unité envoyée au fournisseur avec réclamation' },
      { label: 'Rendre et fermer', sub: 'même unité ou échange lié au client ; signature ; état final' },
    ], caption: 'Figure 1 · L’étape accentuée est la décision de garantie : elle se prend à l’entrée, depuis la date de remise et la durée écrite sur le produit, et elle est signée. Avant elle, deux lectures : le numéro et l’unité qu’il désigne. Après elle, l’ordre de réparation porte tout le reste, jusqu’à la signature du client à la sortie.', alt: 'Six temps : scanner la série, retrouver l’unité, décider la garantie (accentué), ouvrir l’ordre de réparation, réparer ou réclamer, rendre et fermer.' },
    couches: { title: 'Le suivi par unité, en cinq couches', layers: [
      { label: 'Identité', items: [{ name: 'Une ligne par unité : série scannée à la réception, unique par produit en base, format vérifié', sub: 'l’IMEI a 15 chiffres dont une clé de contrôle ; un faux format est signalé, pas prouvé' }] },
      { label: 'État', items: [{ name: 'Un seul état : stock, vendue, réparation, fournisseur, prêtée, échangée ; chaque passage daté et signé', sub: 'une unité vendue ne peut pas être vendue deux fois', accent: true }] },
      { label: 'Garantie', items: [{ name: 'Date de départ, durée écrite sur le produit ou le lot, jour compté au retour ; décision enregistrée', sub: 'les conditions sont celles du vendeur ou du fabricant' }] },
      { label: 'Réparation', items: [{ name: 'Ordre par unité : diagnostic, photos, pièces, états datés, réclamation fournisseur, échange', sub: 'le client voit son ordre ; relance au seuil' }] },
      { label: 'Mesure', items: [{ name: 'Taux de retour par produit et lot, délai médian, délai par fournisseur, garanties refusées et motifs', sub: 'un produit qui revient trop est un produit qu’on arrête' }] },
    ], caption: 'Figure 4 · La couche accentuée est l’état : une unité a un seul état à la fois, et c’est cette contrainte, pas une discipline, qui empêche de vendre deux fois la même série ou de perdre un appareil chez un fournisseur. L’identité au-dessus est scannée, jamais tapée ; la garantie en dessous n’est qu’une date, une durée et un jour compté.', alt: 'Cinq couches : identité, état (accentuée), garantie, réparation, mesure.' },
    unite: { caption: 'Figure 2 · Une unité, du 3 février au 30 septembre 2027 : reçue et scannée, vendue le 11 mars, revenue en panne le 14 septembre. Le jour compté est le 187e sur 365 depuis la remise : sous garantie vendeur, le client ne paie rien, et la garantie fournisseur de 24 mois court encore, donc une réclamation part le 17. L’unité passe onze jours chez le fournisseur, revient échangée, et la nouvelle série est liée au même client pendant que l’ancienne sort du stock comme échangée. Dates, numéros et durées sont un exemple construit.' },
    situations: { title: 'Six situations réelles, et ce que l’application fait', columns: ['Ce qui se passe', 'Ce que l’application fait'], rows: [
      { label: 'Le client n’a plus le ticket', cells: ['Dispute au comptoir ; réparation offerte dans le doute', 'la série retrouve la vente, la date, la facture ; décision en dix secondes'] },
      { label: 'L’appareil n’a pas été acheté ici', cells: ['Réparé sous garantie par erreur ; marge perdue', 'série inconnue → devis payant le jour même, acompte'] },
      { label: 'Deux cartons portent la même série', cells: ['Deux unités, une ligne ; la seconde disparaît', 'réception refusée sur doublon ; photo de l’étiquette ; fournisseur prévenu'] },
      { label: 'L’unité est chez le fournisseur depuis un mois', cells: ['Personne ne relance ; le client rappelle', 'réclamation datée ; seuil ; relance ; délai mesuré par fournisseur'] },
      { label: 'Le fournisseur échange l’appareil', cells: ['Nouvelle série inconnue ; ancienne toujours « vendue »', 'nouvelle unité liée au client ; ancienne « échangée », jamais revendue'] },
      { label: 'Un prêt qui ne revient pas', cells: ['L’appareil de prêt est oublié ; stock faux', 'unité « prêtée » liée à l’ordre ; alerte à la fermeture sans retour'] },
    ], caption: 'Figure 5 · Les trois premières lignes se règlent par l’identité : une série scannée, unique, qui retrouve ou non une vente. Les trois suivantes se règlent par l’état et l’ordre de réparation : chez qui est l’unité, depuis quand, et quelle série est liée au client aujourd’hui. Aucune ne se règle par un vendeur plus méfiant.', alt: 'Matrice de six situations : ticket perdu, achat ailleurs, série en double, unité oubliée chez le fournisseur, échange, prêt non rendu ; ce qui se passe et ce que l’application fait.' },
    tableau: { caption: 'Figure 3 · Le tableau des réparations un matin : sept unités, leur état, le nombre de jours écoulés contre un seuil de 14 jours, la garantie décidée et qui a l’appareil. Deux unités sont chez leur fournisseur au-delà du seuil et ont été relancées ; une tablette est prête et le client prévenu ; un onduleur hors garantie attend l’accord sur un devis ; un téléphone acheté ailleurs a reçu un devis payant. Le gérant lit qui doit agir aujourd’hui, pas une liste d’appels. Ordres, produits et jours sont un exemple construit.' },
    calendrier: { title: 'Suivre les unités en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Règles', note: 'quels produits sont suivis par série, durées de garantie par produit et par fournisseur, seuil de relance, qui décide une garantie ; avec le gérant', from: 0, to: 1 },
      { label: 'Identité et état', note: 'série scannée à la réception, unicité en base, format vérifié, états et passages datés, vente liée à la série', from: 1, to: 3, accent: true },
      { label: 'Garantie', note: 'date de départ, durée écrite, jour compté au retour, décision signée, devis payant hors garantie', from: 3, to: 4 },
      { label: 'Réparation', note: 'ordre par unité, diagnostic et photos, réclamation fournisseur, échange, prêt, tableau et relances', from: 4, to: 5 },
      { label: 'Reprise', note: 'séries des unités en stock scannées une fois, ventes passées reliées depuis les factures quand la série y figure', from: 5, to: 6 },
      { label: 'Mesure', note: 'taux de retour par produit et lot, délai médian, délai par fournisseur, garanties refusées', from: 6, to: 7 },
    ], caption: 'Figure 6 · Sept semaines, la première sans code : quels produits méritent un suivi par série, quelles durées de garantie, quel seuil de relance et qui décide sont des décisions du gérant. Les deux semaines accentuées sont l’identité et l’état, parce que la garantie et la réparation ne sont que des lectures de ces deux couches ; la reprise scanne une fois ce qui est en stock.', alt: 'Frise de sept semaines : règles, identité et état (accentué, deux semaines), garantie, réparation, reprise, mesure.' },
  },
  en: {
    cover: { eyebrow: 'Serial numbers · Warranty · Repair · 2027', title: ['“The device comes back broken', 'and nobody knows if we sold it”'], subtitle: 'What gets built to track every unit: scanned serial, linked sale, counted warranty, tracked repair', left: { label: 'A lost receipt, an argument', sub: 'and a repair given away in doubt' }, right: { label: 'A scanned number, an answer', sub: 'sold here, day 187 / 365, under warranty' } },
    comptoir: { title: 'A device comes back to the counter, in six beats', items: [
      { label: 'Scan the serial', sub: 'number read from the label or the settings; format checked' },
      { label: 'Find the unit', sub: 'sold here or not, to whom, when, on which invoice' },
      { label: 'Decide the warranty', sub: 'day counted from hand-over against the written term; signed decision', accent: true },
      { label: 'Open the order', sub: 'diagnosis, photos, fault reproduced; receipt to the customer' },
      { label: 'Repair or claim', sub: 'part ordered, or unit sent to the supplier with a claim' },
      { label: 'Return and close', sub: 'same unit or exchange linked to the customer; signature; final state' },
    ], caption: 'Figure 1 · The accented beat is the warranty decision: it is taken at intake, from the hand-over date and the term written on the product, and it is signed. Before it, two readings: the number and the unit it designates. After it, the repair order carries everything else, up to the customer’s signature at pick-up.', alt: 'Six beats: scan the serial, find the unit, decide the warranty (accented), open the repair order, repair or claim, return and close.' },
    couches: { title: 'Unit tracking, in five layers', layers: [
      { label: 'Identity', items: [{ name: 'One row per unit: serial scanned at reception, unique per product in the database, format checked', sub: 'an IMEI has 15 digits including a check digit; a wrong format is flagged, not proven' }] },
      { label: 'State', items: [{ name: 'One state: stock, sold, repair, supplier, on loan, exchanged; every transition dated and signed', sub: 'a sold unit cannot be sold twice', accent: true }] },
      { label: 'Warranty', items: [{ name: 'Start date, term written on the product or lot, day counted at return; decision recorded', sub: 'the conditions are the seller’s or the manufacturer’s' }] },
      { label: 'Repair', items: [{ name: 'Order per unit: diagnosis, photos, parts, dated states, supplier claim, exchange', sub: 'the customer sees their order; chase at the threshold' }] },
      { label: 'Measurement', items: [{ name: 'Return rate per product and lot, median time, delay per supplier, refused warranties and reasons', sub: 'a product that comes back too often is a product to drop' }] },
    ], caption: 'Figure 4 · The accented layer is state: a unit has one state at a time, and it is that constraint, not discipline, that prevents selling the same serial twice or losing a device at a supplier. Identity above is scanned, never typed; warranty below is only a date, a term and a counted day.', alt: 'Five layers: identity, state (accented), warranty, repair, measurement.' },
    unite: { caption: 'Figure 2 · One unit, from 3 February to 30 September 2027: received and scanned, sold on 11 March, back broken on 14 September. The counted day is the 187th of 365 since hand-over: under seller warranty, the customer pays nothing, and the 24-month supplier warranty is still running, so a claim leaves on the 17th. The unit spends eleven days at the supplier, comes back exchanged, and the new serial is linked to the same customer while the old one leaves stock as exchanged. Dates, numbers and terms are a constructed example.' },
    situations: { title: 'Six real situations, and what the application does', columns: ['What happens', 'What the application does'], rows: [
      { label: 'The customer no longer has the receipt', cells: ['Argument at the counter; repair given away in doubt', 'the serial finds the sale, the date, the invoice; decision in ten seconds'] },
      { label: 'The device was not bought here', cells: ['Repaired under warranty by mistake; margin lost', 'unknown serial → paid quote the same day, deposit'] },
      { label: 'Two boxes carry the same serial', cells: ['Two units, one row; the second disappears', 'reception refused on duplicate; label photo; supplier told'] },
      { label: 'The unit has been at the supplier for a month', cells: ['Nobody chases; the customer calls back', 'dated claim; threshold; chase; delay measured per supplier'] },
      { label: 'The supplier exchanges the device', cells: ['New serial unknown; old one still “sold”', 'new unit linked to the customer; old one “exchanged”, never resold'] },
      { label: 'A loaner that does not come back', cells: ['The loan device is forgotten; stock wrong', 'unit “on loan” linked to the order; alert at closing without return'] },
    ], caption: 'Figure 5 · The first three rows are settled by identity: a scanned, unique serial that does or does not find a sale. The next three are settled by state and the repair order: who holds the unit, since when, and which serial is linked to the customer today. None is settled by a more suspicious seller.', alt: 'Matrix of six situations: lost receipt, bought elsewhere, duplicate serial, unit forgotten at the supplier, exchange, loaner not returned; what happens and what the application does.' },
    tableau: { caption: 'Figure 3 · The repair board one morning: seven units, their state, the days elapsed against a 14-day threshold, the decided warranty and who holds the device. Two units are at their supplier beyond the threshold and have been chased; a tablet is ready and the customer notified; an out-of-warranty inverter awaits approval on a quote; a phone bought elsewhere received a paid quote. The manager reads who must act today, not a list of calls. Orders, products and days are a constructed example.' },
    calendrier: { title: 'Tracking units in 2027, in weeks', unit: 'wk', items: [
      { label: 'Rules', note: 'which products are tracked by serial, warranty terms per product and per supplier, chase threshold, who decides a warranty; with the manager', from: 0, to: 1 },
      { label: 'Identity and state', note: 'serial scanned at reception, uniqueness in the database, format check, states and dated transitions, sale linked to the serial', from: 1, to: 3, accent: true },
      { label: 'Warranty', note: 'start date, written term, day counted at return, signed decision, paid quote out of warranty', from: 3, to: 4 },
      { label: 'Repair', note: 'order per unit, diagnosis and photos, supplier claim, exchange, loan, board and chasing', from: 4, to: 5 },
      { label: 'Take-over', note: 'serials of units in stock scanned once, past sales linked from invoices where the serial appears', from: 5, to: 6 },
      { label: 'Measurement', note: 'return rate per product and lot, median time, delay per supplier, refused warranties', from: 6, to: 7 },
    ], caption: 'Figure 6 · Seven weeks, the first without code: which products deserve tracking by serial, which warranty terms, which chase threshold and who decides are the manager’s decisions. The two accented weeks are identity and state, because warranty and repair are only readings of those two layers; the take-over scans once what is in stock.', alt: 'Seven-week timeline: rules, identity and state (accented, two weeks), warranty, repair, take-over, measurement.' },
  },
  ar: {
    cover: { eyebrow: 'أرقام تسلسلية · ضمان · إصلاح · 2027', title: ['«الجهاز يعود معطلاً', 'ولا أحد يعرف إن كنا بعناه»'], subtitle: 'ما يُبنى لتتبع كل وحدة: رقم ممسوح، بيع مرتبط، ضمان معدود، إصلاح متتبَّع', left: { label: 'وصل ضائع، وجدال', sub: 'وإصلاح مجاني عند الشك' }, right: { label: 'رقم ممسوح، وجواب', sub: 'بيع هنا، اليوم 187 / 365، تحت الضمان' } },
    comptoir: { title: 'جهاز يعود إلى المحل، في ستة أوقات', items: [
      { label: 'مسح الرقم التسلسلي', sub: 'يُقرأ من الملصق أو الإعدادات؛ الصيغة مفحوصة' },
      { label: 'إيجاد الوحدة', sub: 'بيعت هنا أم لا، لمن، متى، على أي فاتورة' },
      { label: 'تقرير الضمان', sub: 'يوم معدود من التسليم مقابل المدة المكتوبة؛ قرار موقَّع', accent: true },
      { label: 'فتح الأمر', sub: 'تشخيص، صور، عطل مُعاد إنتاجه؛ وصل للزبون' },
      { label: 'إصلاح أو مطالبة', sub: 'قطعة مطلوبة، أو وحدة تُرسل للمورد بمطالبة' },
      { label: 'إرجاع وإغلاق', sub: 'الوحدة نفسها أو استبدال مرتبط بالزبون؛ توقيع؛ حالة نهائية' },
    ], caption: 'الشكل 1 · الوقت المميز هو قرار الضمان: يُتخذ عند الإيداع من تاريخ التسليم والمدة المكتوبة على المنتج، ويُوقَّع. وقبله قراءتان: الرقم والوحدة التي يعيّنها. وبعده يحمل أمر الإصلاح كل الباقي حتى توقيع الزبون عند الاستلام.', alt: 'ستة أوقات: مسح الرقم التسلسلي، إيجاد الوحدة، تقرير الضمان (مميز)، فتح أمر الإصلاح، إصلاح أو مطالبة، إرجاع وإغلاق.' },
    couches: { title: 'التتبع بالوحدة، في خمس طبقات', layers: [
      { label: 'الهوية', items: [{ name: 'سطر لكل وحدة: رقم يُمسح عند الاستلام، فريد لكل منتج في قاعدة البيانات، صيغة مفحوصة', sub: 'رقم IMEI من 15 رقماً منها رقم تحقق؛ الصيغة الخاطئة تُعلَّم لا تُثبَت' }] },
      { label: 'الحالة', items: [{ name: 'حالة واحدة: مخزون، مباعة، إصلاح، مورد، معارة، مستبدلة؛ كل انتقال مؤرَّخ وموقَّع', sub: 'الوحدة المباعة لا يمكن بيعها مرتين', accent: true }] },
      { label: 'الضمان', items: [{ name: 'تاريخ بداية، مدة مكتوبة على المنتج أو الدفعة، يوم معدود عند العودة؛ قرار مسجَّل', sub: 'الشروط هي شروط البائع أو الصانع' }] },
      { label: 'الإصلاح', items: [{ name: 'أمر لكل وحدة: تشخيص، صور، قطع، حالات مؤرَّخة، مطالبة مورد، استبدال', sub: 'الزبون يرى أمره؛ متابعة عند العتبة' }] },
      { label: 'القياس', items: [{ name: 'نسبة العودة لكل منتج ودفعة، مهلة وسيطة، مهلة لكل مورد، ضمانات مرفوضة وأسبابها', sub: 'المنتج الذي يعود كثيراً منتج يُوقَف' }] },
    ], caption: 'الشكل 4 · الطبقة المميزة هي الحالة: للوحدة حالة واحدة في كل مرة، وهذا القيد لا الانضباط هو ما يمنع بيع الرقم نفسه مرتين أو ضياع جهاز عند مورد. والهوية فوقها تُمسح ولا تُكتب أبداً؛ والضمان تحتها مجرد تاريخ ومدة ويوم معدود.', alt: 'خمس طبقات: الهوية، الحالة (مميزة)، الضمان، الإصلاح، القياس.' },
    unite: { caption: 'الشكل 2 · وحدة واحدة من 3 فبراير إلى 30 سبتمبر 2027: استُلمت ومُسحت، بيعت في 11 مارس، عادت معطلة في 14 سبتمبر. واليوم المعدود هو 187 من 365 منذ التسليم: تحت ضمان البائع، الزبون لا يدفع شيئاً، وضمان المورد 24 شهراً ما زال يسري فتخرج مطالبة في 17. وتقضي الوحدة أحد عشر يوماً عند المورد وتعود مستبدلة، ويُربط الرقم الجديد بالزبون نفسه بينما تخرج القديمة من المخزون كمستبدلة. والتواريخ والأرقام والمدد مثال مبني.' },
    situations: { title: 'ست حالات حقيقية، وما يفعله التطبيق', columns: ['ما يحدث', 'ما يفعله التطبيق'], rows: [
      { label: 'الزبون لم يعد يملك الوصل', cells: ['جدال في المحل؛ إصلاح مجاني عند الشك', 'الرقم يجد البيع والتاريخ والفاتورة؛ قرار في عشر ثوانٍ'] },
      { label: 'الجهاز لم يُشترَ هنا', cells: ['أُصلح تحت الضمان خطأً؛ هامش ضائع', 'رقم مجهول ← عرض سعر مدفوع في اليوم نفسه، عربون'] },
      { label: 'علبتان تحملان الرقم نفسه', cells: ['وحدتان وسطر واحد؛ الثانية تختفي', 'استلام مرفوض عند التكرار؛ صورة الملصق؛ المورد مُبلَّغ'] },
      { label: 'الوحدة عند المورد منذ شهر', cells: ['لا أحد يتابع؛ والزبون يعاود الاتصال', 'مطالبة مؤرَّخة؛ عتبة؛ متابعة؛ مهلة مقيسة لكل مورد'] },
      { label: 'المورد يستبدل الجهاز', cells: ['رقم جديد مجهول؛ القديم ما زال «مباعاً»', 'وحدة جديدة مرتبطة بالزبون؛ القديمة «مستبدلة» ولا تُباع أبداً'] },
      { label: 'إعارة لا تعود', cells: ['جهاز الإعارة منسي؛ مخزون خاطئ', 'وحدة «معارة» مرتبطة بالأمر؛ تنبيه عند الإغلاق دون إرجاع'] },
    ], caption: 'الشكل 5 · الأسطر الثلاثة الأولى تُحل بالهوية: رقم ممسوح فريد يجد بيعاً أو لا يجده. والثلاثة التالية تُحل بالحالة وأمر الإصلاح: عند من الوحدة، ومنذ متى، وأي رقم مرتبط بالزبون اليوم. ولا واحد يُحل ببائع أكثر ريبة.', alt: 'مصفوفة ست حالات: وصل ضائع، شراء من مكان آخر، رقم مكرر، وحدة منسية عند المورد، استبدال، إعارة لم تُرجَع؛ ما يحدث وما يفعله التطبيق.' },
    tableau: { caption: 'الشكل 3 · لوحة الإصلاحات ذات صباح: سبع وحدات، حالتها، الأيام المنقضية مقابل عتبة 14 يوماً، الضمان المقرَّر، وعند من الجهاز. وحدتان عند موردهما بعد العتبة وتمت متابعتهما؛ لوح جاهز والزبون منبَّه؛ عاكس خارج الضمان ينتظر الموافقة على عرض سعر؛ هاتف اشتُري من مكان آخر تلقى عرض سعر مدفوعاً. المسيّر يقرأ من عليه أن يتصرف اليوم، لا قائمة مكالمات. والأوامر والمنتجات والأيام مثال مبني.' },
    calendrier: { title: 'تتبع الوحدات سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'القواعد', note: 'أي منتجات تُتبع بالرقم التسلسلي، مدد الضمان لكل منتج ومورد، عتبة المتابعة، من يقرر الضمان؛ مع المسيّر', from: 0, to: 1 },
      { label: 'الهوية والحالة', note: 'رقم يُمسح عند الاستلام، تفرّد في قاعدة البيانات، فحص الصيغة، حالات وانتقالات مؤرَّخة، بيع مرتبط بالرقم', from: 1, to: 3, accent: true },
      { label: 'الضمان', note: 'تاريخ بداية، مدة مكتوبة، يوم معدود عند العودة، قرار موقَّع، عرض سعر مدفوع خارج الضمان', from: 3, to: 4 },
      { label: 'الإصلاح', note: 'أمر لكل وحدة، تشخيص وصور، مطالبة مورد، استبدال، إعارة، لوحة ومتابعات', from: 4, to: 5 },
      { label: 'الاستعادة', note: 'أرقام الوحدات في المخزون تُمسح مرة واحدة، مبيعات سابقة تُربط من الفواتير حيث يظهر الرقم', from: 5, to: 6 },
      { label: 'القياس', note: 'نسبة العودة لكل منتج ودفعة، مهلة وسيطة، مهلة لكل مورد، ضمانات مرفوضة', from: 6, to: 7 },
    ], caption: 'الشكل 6 · سبعة أسابيع، الأول بلا كود: أي منتجات تستحق التتبع بالرقم، وأي مدد ضمان، وأي عتبة متابعة، ومن يقرر، قرارات المسيّر. والأسبوعان المميزان هما الهوية والحالة، لأن الضمان والإصلاح مجرد قراءتين لهاتين الطبقتين؛ والاستعادة تمسح مرة واحدة ما في المخزون.', alt: 'خط زمني من سبعة أسابيع: القواعد، الهوية والحالة (مميز، أسبوعان)، الضمان، الإصلاح، الاستعادة، القياس.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SR[locale] || SR.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      comptoir: { svg: steps({ title: t.comptoir.title, steps: t.comptoir.items, arrows: true, rtl }), caption: t.comptoir.caption, alt: t.comptoir.alt },
      unite: { svg: life(e.life, rtl), caption: t.unite.caption, alt: e.life.alt },
      tableau: { svg: board(e.board, rtl), caption: t.tableau.caption, alt: e.board.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      situations: { svg: matrix({ title: t.situations.title, columns: t.situations.columns, rows: t.situations.rows, rtl }), caption: t.situations.caption, alt: t.situations.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 7, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
