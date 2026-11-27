import { cover, matrix, timeline, stats } from '../../lib/visuals/index.mjs';
import { scan, checks, STRINGS as DX } from './custom/doc-extraction.mjs';
export const slug = 'lire-factures-bons-de-commande-pieces-par-ia-algerie-2027-photo-en-champs-verifies-schema-controles-validation-humaine-erp';
const T = {
  fr: {
    cover: { eyebrow: 'Lecture de documents · IA · ERP · 2027', title: ['« On ressaisit 300', 'factures par jour. »', 'Plus pour longtemps'], subtitle: 'Comment une facture, un bon de commande ou une pièce d’identité photographiés deviennent des champs vérifiés dans votre ERP : la lecture, le schéma, la confiance par champ, les cinq contrôles, la validation humaine sous le seuil, le journal avec l’image', left: { label: 'La ressaisie à la main', sub: 'lente, coûteuse, erreurs silencieuses' }, right: { label: 'Un pipeline de lecture', sub: 'champs vérifiés, humain sous le seuil' } },
    parcours: { caption: 'Figure 1 · Le modèle ne « comprend » pas la facture : il propose une valeur par champ, et le pipeline lui demande à quel point il en est sûr. Le numéro de facture, lu 0418 ou 0413 sous le cachet, tombe sous le seuil ; il ne s’écrit pas dans la comptabilité, il part chez un humain avec l’image recadrée sur le champ.' },
    controles: { caption: 'Figure 2 · Un schéma garantit la forme, un montant est un nombre, pas la justesse : c’est l’arithmétique et votre base qui la vérifient. Le cinquième contrôle est celui qui évite de payer deux fois la même facture ; il ne demande aucun modèle, seulement une requête sur le fournisseur et le numéro.' },
    exemple: { title: 'Un distributeur, 300 factures fournisseurs par jour : l’exemple', items: [
      { value: '300', label: 'factures et bons de livraison par jour, photographiés à la réception ou reçus en PDF ; hypothèse de volume à mesurer au pilote' },
      { value: '0,90', label: 'seuil de confiance par champ, écrit avec le comptable : en dessous, le champ part chez un humain avec l’image recadrée', accent: true },
      { value: '60', label: 'documents réels dans le jeu d’évaluation, avec les valeurs justes, rejoués à chaque changement de modèle ou d’instructions' },
      { value: '100 %', label: 'des documents journalisés avec l’image d’origine, les champs, les scores, les contrôles et qui a validé quoi' },
    ], caption: 'Figure 3 · Le volume est une hypothèse ; le seuil, le jeu d’évaluation et le journal sont des règles. Le seuil se règle avec le comptable : plus haut, plus de documents passent par un humain ; plus bas, plus d’erreurs passent seules. Le pilote dit où le mettre, champ par champ.', alt: 'Quatre chiffres : 300 documents par jour, seuil de 0,90, 60 documents d’évaluation, 100 % journalisé.' },
    documents: { title: 'Six documents, ce qu’on en extrait et ce qu’on contrôle', columns: ['Ce qu’on extrait', 'Ce qu’on contrôle'], rows: [
      { label: 'Facture fournisseur', cells: ['Fournisseur, numéro, date, lignes, total HT, TVA, total TTC, mode de règlement', 'Somme des lignes, HT + TVA = TTC, fournisseur connu, doublon, rapprochement avec le bon de commande'] },
      { label: 'Bon de commande client', cells: ['Client, produits, quantités, unités, date de livraison demandée', 'Produit retrouvé dans le catalogue, unité cohérente, plafond de crédit du client, stock'] },
      { label: 'Bon de livraison signé', cells: ['Numéro, date, quantités livrées, présence du cachet et de la signature', 'Quantités livrées face aux quantités commandées, écart signalé, lien avec la facture'] },
      { label: 'Pièce d’identité', cells: ['Nom, prénom, date de naissance, numéro, date d’expiration, en arabe et en latin', 'Date d’expiration, cohérence des deux écritures, format du numéro ; validation humaine systématique'] },
      { label: 'Avis de virement, relevé', cells: ['Date, montant, donneur d’ordre, référence', 'Rapprochement avec une facture ouverte du même montant ; rien ne se lettre sans règle'] },
      { label: 'Ordonnance, résultat d’analyse', cells: ['Patient, prescripteur, date, lignes ; classé dans le dossier', 'Jamais d’interprétation médicale ; lecture sur site, validation par le praticien'] },
    ], caption: 'Figure 4 · Les trois premières lignes forment une chaîne : commande, livraison, facture ; rapprochées automatiquement, elles ne demandent un humain que sur l’écart. Les deux dernières colonnes de contrôle ne dépendent d’aucun modèle : ce sont des règles sur vos données, et ce sont elles qui rendent la lecture fiable.', alt: 'Matrice de six documents : facture, bon de commande, bon de livraison, pièce d’identité, avis de virement, ordonnance ; ce qu’on extrait et ce qu’on contrôle.' },
    pieges: { title: 'Six pièges de la lecture de documents, et ce que le pipeline fait', columns: ['Ce qui se passe', 'Ce que le pipeline fait'], rows: [
      { label: 'La photo floue ou de travers', cells: ['Prise au téléphone sur un comptoir, inclinée, à moitié dans l’ombre', 'Redressement, recadrage, contrôle de netteté à la prise ; si illisible, l’application demande une nouvelle photo tout de suite'] },
      { label: 'L’arabe et le français mêlés', cells: ['Raison sociale en arabe, lignes en français, chiffres latins, cachet par-dessus', 'Modèle de lecture qui tient les deux écritures, testé sur vos documents ; champs en double écriture comparés entre eux'] },
      { label: 'Le champ inventé', cells: ['Le modèle remplit une date ou un numéro qui n’est pas sur le document', 'Champ autorisé à rester vide, confiance par champ, valeur recherchée dans le texte lu ; pas de valeur sans trace'] },
      { label: 'Le tableau sur plusieurs pages', cells: ['Quarante lignes, deux pages, un sous-total reporté', 'Lecture ligne par ligne, somme recalculée, page manquante détectée par l’écart avec le total'] },
      { label: 'Le doublon', cells: ['La même facture arrive par e-mail puis sur papier', 'Clé fournisseur + numéro + montant ; le second est bloqué et rattaché au premier'] },
      { label: 'Le document sensible envoyé dehors', cells: ['Pièces d’identité et dossiers médicaux partent vers un éditeur sans contrat', 'Chemin par type de document : sur site pour le sensible, Europe pour le reste, écrit la première semaine'] },
    ], caption: 'Figure 5 · Les deux premiers pièges se règlent à la prise de vue et au choix du modèle ; les quatre autres dans les règles autour du modèle. Un pipeline qui ne fait que « lire » passe les six.', alt: 'Matrice de six pièges : photo floue, arabe et français, champ inventé, tableau multi-pages, doublon, document sensible ; ce qui se passe et la parade.' },
    calendrier: { title: 'Construire la lecture de documents en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Documents, champs et seuils', note: 'les deux ou trois types de documents, les champs par type, les contrôles, le seuil par champ, le chemin des données ; signés', from: 0, to: 1 },
      { label: 'Jeu d’évaluation', note: 'soixante documents réels par type, bons et mauvais, avec les valeurs justes saisies par votre comptable', from: 1, to: 2 },
      { label: 'Lecture, schéma et contrôles', note: 'prise de vue, redressement, modèle de lecture, schéma, confiance par champ, cinq contrôles, journal avec image', from: 2, to: 4, accent: true },
      { label: 'Écran de validation', note: 'la file humaine : l’image recadrée sur le champ douteux, la valeur proposée, une touche pour valider ou corriger', from: 4, to: 5 },
      { label: 'Écriture dans l’ERP', note: 'intégration avec la comptabilité ou l’ERP, rapprochement commande, livraison, facture ; idempotence', from: 5, to: 6 },
      { label: 'Pilote et réglage du seuil', note: 'documents réels, part automatique et part humaine lues chaque jour, seuil ajusté champ par champ', from: 6, to: 8 },
    ], caption: 'Figure 6 · Huit semaines, et les deux premières sans code : les soixante documents saisis par votre comptable sont ce qui permet de dire, à la semaine 4, « 94 % des totaux justes » au lieu de « ça a l’air de marcher ». L’écran de validation de la semaine 4 décide de l’adoption : s’il est lent, l’équipe ressaisit.', alt: 'Frise de huit semaines : documents et seuils, jeu d’évaluation, lecture et contrôles (accentué), écran de validation, écriture dans l’ERP, pilote.' },
  },
  en: {
    cover: { eyebrow: 'Document reading · AI · ERP · 2027', title: ['“We re-enter 300', 'invoices a day.”', 'Not for much longer'], subtitle: 'How a photographed invoice, purchase order or ID becomes checked fields in your ERP: reading, schema, confidence per field, five checks, human validation below the threshold, the log with the image', left: { label: 'Re-entry by hand', sub: 'slow, costly, silent errors' }, right: { label: 'A reading pipeline', sub: 'checked fields, human below threshold' } },
    parcours: { caption: 'Figure 1 · The model does not “understand” the invoice: it proposes a value per field, and the pipeline asks how sure it is. The invoice number, read 0418 or 0413 under the stamp, falls below the threshold; it is not written to accounting, it goes to a human with the image cropped on the field.' },
    controles: { caption: 'Figure 2 · A schema guarantees form, an amount is a number, not correctness: arithmetic and your database check that. The fifth check is what avoids paying the same invoice twice; it needs no model, only a query on supplier and number.' },
    exemple: { title: 'A distributor, 300 supplier invoices a day: the example', items: [
      { value: '300', label: 'invoices and delivery notes a day, photographed at reception or received as PDF; volume assumption measured in the pilot' },
      { value: '0.90', label: 'confidence threshold per field, written with the accountant: below it, the field goes to a human with the cropped image', accent: true },
      { value: '60', label: 'real documents in the evaluation set, with the right values, replayed at every change of model or instructions' },
      { value: '100 %', label: 'of documents logged with the original image, the fields, the scores, the checks and who validated what' },
    ], caption: 'Figure 3 · The volume is an assumption; the threshold, the evaluation set and the log are rules. The threshold is tuned with the accountant: higher, more documents go through a human; lower, more errors pass alone. The pilot says where to set it, field by field.', alt: 'Four figures: 300 documents a day, 0.90 threshold, 60 evaluation documents, 100 % logged.' },
    documents: { title: 'Six documents, what is extracted and what is checked', columns: ['What is extracted', 'What is checked'], rows: [
      { label: 'Supplier invoice', cells: ['Supplier, number, date, lines, total excl. tax, VAT, total incl. tax, payment method', 'Sum of lines, excl. tax + VAT = incl. tax, known supplier, duplicate, matching with the purchase order'] },
      { label: 'Customer purchase order', cells: ['Customer, products, quantities, units, requested delivery date', 'Product found in the catalogue, consistent unit, customer credit limit, stock'] },
      { label: 'Signed delivery note', cells: ['Number, date, quantities delivered, presence of stamp and signature', 'Quantities delivered against quantities ordered, gap flagged, link with the invoice'] },
      { label: 'ID document', cells: ['Surname, first name, date of birth, number, expiry date, in Arabic and Latin script', 'Expiry date, consistency of the two scripts, number format; systematic human validation'] },
      { label: 'Transfer notice, statement', cells: ['Date, amount, payer, reference', 'Matching with an open invoice of the same amount; nothing is reconciled without a rule'] },
      { label: 'Prescription, test result', cells: ['Patient, prescriber, date, lines; filed in the record', 'Never any medical interpretation; reading on site, validation by the practitioner'] },
    ], caption: 'Figure 4 · The first three rows form a chain: order, delivery, invoice; matched automatically, they need a human only on the gap. The check column depends on no model: these are rules on your data, and they are what makes the reading reliable.', alt: 'Matrix of six documents: invoice, purchase order, delivery note, ID, transfer notice, prescription; what is extracted and what is checked.' },
    pieges: { title: 'Six traps in document reading, and what the pipeline does', columns: ['What happens', 'What the pipeline does'], rows: [
      { label: 'The blurred or skewed photo', cells: ['Taken on a phone on a counter, tilted, half in shadow', 'Deskew, crop, sharpness check at capture; if unreadable, the app asks for a new photo right away'] },
      { label: 'Arabic and French mixed', cells: ['Company name in Arabic, lines in French, Latin digits, stamp on top', 'A reading model that holds both scripts, tested on your documents; fields in both scripts compared with each other'] },
      { label: 'The invented field', cells: ['The model fills in a date or a number that is not on the document', 'Field allowed to stay empty, confidence per field, value searched for in the text read; no value without a trace'] },
      { label: 'The table across pages', cells: ['Forty lines, two pages, a carried subtotal', 'Line-by-line reading, sum recomputed, missing page detected by the gap with the total'] },
      { label: 'The duplicate', cells: ['The same invoice arrives by email then on paper', 'Key supplier + number + amount; the second is blocked and attached to the first'] },
      { label: 'The sensitive document sent outside', cells: ['IDs and medical files go to a vendor with no contract', 'Route per document type: on site for the sensitive, Europe for the rest, written in week one'] },
    ], caption: 'Figure 5 · The first two traps are settled at capture and in the choice of model; the other four in the rules around the model. A pipeline that only “reads” falls into all six.', alt: 'Matrix of six traps: blurred photo, Arabic and French, invented field, multi-page table, duplicate, sensitive document; what happens and the defence.' },
    calendrier: { title: 'Building document reading in 2027, in weeks', unit: 'wk', items: [
      { label: 'Documents, fields and thresholds', note: 'the two or three document types, the fields per type, the checks, the threshold per field, the data route; signed', from: 0, to: 1 },
      { label: 'Evaluation set', note: 'sixty real documents per type, good and bad, with the right values entered by your accountant', from: 1, to: 2 },
      { label: 'Reading, schema and checks', note: 'capture, deskew, reading model, schema, confidence per field, five checks, log with image', from: 2, to: 4, accent: true },
      { label: 'Validation screen', note: 'the human queue: the image cropped on the doubtful field, the proposed value, one key to validate or correct', from: 4, to: 5 },
      { label: 'Writing to the ERP', note: 'integration with accounting or the ERP, matching order, delivery, invoice; idempotency', from: 5, to: 6 },
      { label: 'Pilot and threshold tuning', note: 'real documents, automatic share and human share read every day, threshold adjusted field by field', from: 6, to: 8 },
    ], caption: 'Figure 6 · Eight weeks, the first two without code: the sixty documents entered by your accountant are what lets you say, in week 4, “94 % of totals right” instead of “it seems to work”. The week-4 validation screen decides adoption: if it is slow, the team re-enters.', alt: 'Eight-week timeline: documents and thresholds, evaluation set, reading and checks (accented), validation screen, writing to the ERP, pilot.' },
  },
  ar: {
    cover: { eyebrow: 'قراءة الوثائق · ذكاء اصطناعي · ERP · 2027', title: ['«نعيد إدخال ثلاثمائة', 'فاتورة في اليوم.»', 'ليس لوقت طويل'], subtitle: 'كيف تصير فاتورة أو طلبية أو بطاقة هوية مصوَّرة حقولاً متحقَّقاً منها في نظام ERP: القراءة، المخطط، الثقة لكل حقل، الفحوص الخمسة، التحقق البشري تحت العتبة، السجل مع الصورة', left: { label: 'إعادة الإدخال يدوياً', sub: 'بطيئة، مكلفة، أخطاء صامتة' }, right: { label: 'خط قراءة', sub: 'حقول متحقَّق منها، إنسان تحت العتبة' } },
    parcours: { caption: 'الشكل 1 · النموذج لا «يفهم» الفاتورة: يقترح قيمة لكل حقل، والخط يسأله كم هو متأكد. رقم الفاتورة، المقروء 0418 أو 0413 تحت الختم، ينزل تحت العتبة؛ فلا يُكتب في المحاسبة بل يذهب إلى إنسان مع الصورة مقصوصة على الحقل.' },
    controles: { caption: 'الشكل 2 · المخطط يضمن الشكل، المبلغ رقم، لا الصحة: الحساب وقاعدتكم هما ما يتحققان منها. والفحص الخامس هو ما يجنّب دفع الفاتورة نفسها مرتين؛ لا يحتاج نموذجاً بل استعلاماً على المورّد والرقم.' },
    exemple: { title: 'موزّع، 300 فاتورة مورّدين يومياً: المثال', items: [
      { value: '300', label: 'فاتورة ووصل تسليم يومياً، مصوَّرة عند الاستلام أو مستلَمة PDF؛ فرضية حجم تُقاس في التجريب' },
      { value: '⁦0,90⁩', label: 'عتبة الثقة لكل حقل، تُكتب مع المحاسب: تحتها يذهب الحقل إلى إنسان مع الصورة المقصوصة', accent: true },
      { value: '60', label: 'وثيقة حقيقية في مجموعة التقييم بالقيم الصحيحة، تُعاد مع كل تغيير في النموذج أو التعليمات' },
      { value: '⁦100 %⁩', label: 'من الوثائق مسجَّلة بالصورة الأصلية والحقول والدرجات والفحوص ومن تحقق من ماذا' },
    ], caption: 'الشكل 3 · الحجم فرضية؛ أما العتبة ومجموعة التقييم والسجل فقواعد. تُضبط العتبة مع المحاسب: أعلى، فتمر وثائق أكثر بإنسان؛ أدنى، فتمر أخطاء أكثر وحدها. والتجريب يقول أين توضع، حقلاً حقلاً.', alt: 'أربعة أرقام: 300 وثيقة يومياً، عتبة 0,90، 60 وثيقة تقييم، 100 % مسجَّل.' },
    documents: { title: 'ست وثائق، ما نستخرجه وما نتحقق منه', columns: ['ما نستخرجه', 'ما نتحقق منه'], rows: [
      { label: 'فاتورة مورّد', cells: ['المورّد، الرقم، التاريخ، السطور، المجموع خارج الرسم، الرسم، المجموع بكل الرسوم، طريقة الدفع', 'مجموع السطور، خارج الرسم + الرسم = الكل، مورّد معروف، تكرار، مطابقة مع طلبية الشراء'] },
      { label: 'طلبية زبون', cells: ['الزبون، المنتجات، الكميات، الوحدات، تاريخ التسليم المطلوب', 'المنتج موجود في الكتالوج، وحدة متسقة، سقف ائتمان الزبون، المخزون'] },
      { label: 'وصل تسليم موقَّع', cells: ['الرقم، التاريخ، الكميات المسلَّمة، وجود الختم والتوقيع', 'الكميات المسلَّمة مقابل المطلوبة، الفارق يُشار إليه، الربط بالفاتورة'] },
      { label: 'بطاقة هوية', cells: ['اللقب، الاسم، تاريخ الميلاد، الرقم، تاريخ الانتهاء، بالعربية واللاتينية', 'تاريخ الانتهاء، اتساق الكتابتين، صيغة الرقم؛ تحقق بشري منهجي'] },
      { label: 'إشعار تحويل، كشف', cells: ['التاريخ، المبلغ، الآمر بالدفع، المرجع', 'مطابقة مع فاتورة مفتوحة بالمبلغ نفسه؛ لا تسوية بلا قاعدة'] },
      { label: 'وصفة، نتيجة تحليل', cells: ['المريض، الواصف، التاريخ، السطور؛ تُصنَّف في الملف', 'لا تأويل طبي أبداً؛ قراءة في الموقع وتحقق من الممارس'] },
    ], caption: 'الشكل 4 · الأسطر الثلاثة الأولى سلسلة: طلبية، تسليم، فاتورة؛ تُطابَق آلياً فلا تطلب إنساناً إلا عند الفارق. وعمود الفحص لا يتوقف على أي نموذج: هي قواعد على بياناتكم، وهي ما يجعل القراءة موثوقة.', alt: 'مصفوفة ست وثائق: فاتورة، طلبية، وصل تسليم، هوية، إشعار تحويل، وصفة؛ ما نستخرجه وما نتحقق منه.' },
    pieges: { title: 'ستة فخاخ في قراءة الوثائق، وما يفعله الخط', columns: ['ما يحدث', 'ما يفعله الخط'], rows: [
      { label: 'الصورة الضبابية أو المائلة', cells: ['مأخوذة بالهاتف على منضدة، مائلة، نصفها في الظل', 'تقويم، قص، فحص الوضوح عند الالتقاط؛ وإن لم تُقرأ يطلب التطبيق صورة جديدة فوراً'] },
      { label: 'العربية والفرنسية مختلطتان', cells: ['الاسم التجاري بالعربية، السطور بالفرنسية، أرقام لاتينية، وختم فوقها', 'نموذج قراءة يتقن الكتابتين يُختبر على وثائقكم؛ والحقول بالكتابتين تُقارَن ببعضها'] },
      { label: 'الحقل المخترَع', cells: ['يملأ النموذج تاريخاً أو رقماً ليس على الوثيقة', 'حقل يُسمح له بالبقاء فارغاً، ثقة لكل حقل، قيمة يُبحث عنها في النص المقروء؛ لا قيمة بلا أثر'] },
      { label: 'الجدول على عدة صفحات', cells: ['أربعون سطراً، صفحتان، مجموع جزئي مرحَّل', 'قراءة سطراً سطراً، مجموع يُعاد حسابه، صفحة ناقصة تُكشف بالفارق مع المجموع'] },
      { label: 'التكرار', cells: ['الفاتورة نفسها تصل بالبريد ثم ورقياً', 'مفتاح المورّد + الرقم + المبلغ؛ الثانية تُحجب وتُلحق بالأولى'] },
      { label: 'الوثيقة الحساسة المرسلة خارجاً', cells: ['بطاقات هوية وملفات طبية تذهب إلى ناشر بلا عقد', 'طريق لكل نوع وثيقة: في الموقع للحساس وأوروبا للباقي، يُكتب في الأسبوع الأول'] },
    ], caption: 'الشكل 5 · الفخان الأولان يُحسمان عند الالتقاط وفي اختيار النموذج؛ والأربعة الأخرى في القواعد حول النموذج. وخط لا يفعل إلا «القراءة» يقع في الستة.', alt: 'مصفوفة ستة فخاخ: صورة ضبابية، عربية وفرنسية، حقل مخترَع، جدول متعدد الصفحات، تكرار، وثيقة حساسة؛ ما يحدث والصدّ.' },
    calendrier: { title: 'بناء قراءة الوثائق سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'الوثائق والحقول والعتبات', note: 'نوعان أو ثلاثة من الوثائق، الحقول لكل نوع، الفحوص، العتبة لكل حقل، طريق البيانات؛ موقَّعة', from: 0, to: 1 },
      { label: 'مجموعة التقييم', note: 'ستون وثيقة حقيقية لكل نوع، جيدة وسيئة، بالقيم الصحيحة التي يدخلها محاسبكم', from: 1, to: 2 },
      { label: 'القراءة والمخطط والفحوص', note: 'التقاط، تقويم، نموذج قراءة، مخطط، ثقة لكل حقل، خمسة فحوص، سجل مع الصورة', from: 2, to: 4, accent: true },
      { label: 'شاشة التحقق', note: 'الطابور البشري: الصورة مقصوصة على الحقل المشكوك فيه، القيمة المقترحة، ضغطة للتحقق أو التصحيح', from: 4, to: 5 },
      { label: 'الكتابة في ERP', note: 'دمج مع المحاسبة أو ERP، مطابقة الطلبية والتسليم والفاتورة؛ عدم التكرار', from: 5, to: 6 },
      { label: 'التجريب وضبط العتبة', note: 'وثائق حقيقية، الحصة الآلية والحصة البشرية تُقرآن كل يوم، العتبة تُضبط حقلاً حقلاً', from: 6, to: 8 },
    ], caption: 'الشكل 6 · ثمانية أسابيع، الأولان بلا كود: الوثائق الستون التي يدخلها محاسبكم هي ما يتيح القول في الأسبوع 4 «94 % من المجاميع صحيحة» بدل «يبدو أنه يعمل». وشاشة التحقق في الأسبوع 4 تقرر التبنّي: إن كانت بطيئة أعاد الفريق الإدخال.', alt: 'خط زمني من ثمانية أسابيع: الوثائق والعتبات، مجموعة التقييم، القراءة والفحوص (مميزة)، شاشة التحقق، الكتابة في ERP، التجريب.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const d = DX[locale] || DX.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      parcours: { svg: scan(d.scan, rtl), caption: t.parcours.caption, alt: d.scan.alt },
      controles: { svg: checks(d.checks, rtl), caption: t.controles.caption, alt: d.checks.alt },
      exemple: { svg: stats({ title: t.exemple.title, items: t.exemple.items, rtl }), caption: t.exemple.caption, alt: t.exemple.alt },
      documents: { svg: matrix({ title: t.documents.title, columns: t.documents.columns, rows: t.documents.rows, rtl }), caption: t.documents.caption, alt: t.documents.alt },
      pieges: { svg: matrix({ title: t.pieges.title, columns: t.pieges.columns, rows: t.pieges.rows, rtl }), caption: t.pieges.caption, alt: t.pieges.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 8, tick: 2, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
