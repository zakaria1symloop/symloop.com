import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { invoice, receipt, STRINGS as DC } from './custom/documents.mjs';
export const slug = 'imprimer-factures-tickets-etiquettes-depuis-votre-application-algerie-2027-pdf-bilingue-imprimante-thermique-numerotation';
const T = {
  fr: {
    cover: { eyebrow: 'Documents · Impression · PDF · Tickets · 2027', title: ['« Le ticket ne sort', 'pas sur l’imprimante', 'de la caisse »'], subtitle: 'Ce qu’on construit pour que votre application produise des factures, tickets, bons et étiquettes justes dans les deux langues : une numérotation sans trou posée une fois, un instantané figé, des gabarits versionnés, des PDF archivables avec les polices embarquées, des tickets qui sortent sur l’imprimante thermique même sans réseau, et une réimpression toujours marquée', left: { label: 'Le PDF regénéré à chaque clic', sub: 'et des carrés à la place de l’arabe' }, right: { label: 'Un document figé, numéroté, archivé', sub: 'et imprimé sur la machine qui est là' } },
    couches: { title: 'Les documents d’une application, en cinq couches', layers: [
      { label: 'Données du document', items: [{ name: 'Un instantané figé au moment de l’émission : lignes, prix, adresses, taux, numéro posé dans une séquence sans trou', sub: 'le document est une photo, pas une vue sur des données qui bougent' }] },
      { label: 'Gabarits', items: [{ name: 'Un gabarit par document et par langue ou bilingue, versionné dans le dépôt, avec des polices qui couvrent les deux écritures', sub: 'chaque document dit quelle version de gabarit l’a produit', accent: true }] },
      { label: 'Rendu', items: [{ name: 'PDF/A pour les documents à conserver, flux de commandes pour les tickets thermiques, langage d’étiquettes pour les étiqueteuses', sub: 'trois moteurs, une seule source de données ; l’arabe part en image là où l’imprimante n’a pas de police' }] },
      { label: 'Sortie', items: [{ name: 'Impression locale par file d’attente, envoi WhatsApp et e-mail, téléchargement, archive versionnée avec empreinte', sub: 'le fichier envoyé est le fichier archivé ; une réimpression ne régénère rien' }] },
      { label: 'Supervision', items: [{ name: 'File d’impression et ses erreurs, imprimantes présentes par site, réimpressions et par qui, lots de fin de mois, écarts de numérotation', sub: 'le comptable lit les numéros ; le gérant lit les réimpressions' }] },
    ], caption: 'Figure 1 · La couche accentuée est celle qui évite les deux pannes les plus fréquentes : un PDF différent à chaque clic, parce qu’il relit des données qui ont changé, et une version arabe en carrés, parce que la police n’était pas embarquée. Un gabarit versionné avec ses polices, appliqué à un instantané figé, produit le même document aujourd’hui et dans dix ans.', alt: 'Cinq couches : données du document, gabarits (accentués), rendu, sortie, supervision.' },
    facture: { caption: 'Figure 2 · La facture n’est pas « imprimée », elle est émise : un événement la déclenche, un numéro lui est posé une fois dans une séquence sans trou, ses données sont figées, un gabarit versionné la rend en PDF/A avec ses polices embarquées, et son empreinte est calculée avant l’envoi et l’archivage. Dix ans plus tard, le fichier archivé est le fichier envoyé, et une réimpression porte un filigrane. Les numéros et montants sont un exemple.' },
    documents: { title: 'Six documents, et la sortie que chacun demande', columns: ['Ce que le document doit être', 'Rendu, sortie, archive'], rows: [
      { label: 'Facture', cells: ['bilingue, numérotée sans trou, figée, lisible dans dix ans', 'PDF/A avec polices embarquées et empreinte ; WhatsApp + e-mail ; archive versionnée ; réimpression = duplicata'] },
      { label: 'Ticket de caisse', cells: ['sort en deux secondes, avec ou sans réseau, sur l’imprimante de la caisse', 'flux de commandes thermique 80 ou 58 mm ; arabe en image ; file locale ; QR vers la facture ; tiroir si espèces'] },
      { label: 'Bon de livraison', cells: ['signé par le client à la porte, avec la photo du colis', 'PDF généré sur le téléphone du livreur, signature et photo embarquées, horodaté, synchronisé au retour du réseau'] },
      { label: 'Étiquette', cells: ['collée sur le colis ou le rayon, lue par un scanner, 50 × 30 mm', 'langage d’étiquettes de l’étiqueteuse ; code-barres ou QR ; texte court en deux écritures ; lot d’étiquettes par préparation'] },
      { label: 'Devis', cells: ['daté, avec une validité, et des versions quand il change', 'PDF par version, v1 v2 v3 conservées ; acceptation enregistrée ; le devis accepté devient la base de la facture'] },
      { label: 'Relevé mensuel', cells: ['un document par client, généré en lot le premier du mois', 'lot de nuit ; PDF/A par client ; envoi groupé ; erreurs de lot dans la supervision du matin'] },
    ], caption: 'Figure 2 bis · Six documents, trois moteurs de rendu et une seule règle : la source est un instantané figé, le gabarit est versionné, la sortie est journalisée. Le ticket est le seul qui n’attende pas le réseau ; la facture est la seule qui doive être lisible dans dix ans ; l’étiquette est la seule qu’une machine lise avant un humain.', alt: 'Matrice de six documents : facture, ticket, bon de livraison, étiquette, devis, relevé ; ce que chacun doit être et sa sortie.' },
    etapes: { title: 'Le ticket, de la caisse à l’imprimante, en six étapes', items: [
      { label: 'La vente est validée', sub: 'le ticket est créé en base avec son numéro ; même sans réseau' },
      { label: 'Rendu en commandes', sub: 'texte latin en texte, lignes arabes en image, QR, coupe' },
      { label: 'File locale', sub: 'le ticket attend dans une file sur la caisse ; rien ne se perd', accent: true },
      { label: 'Vers l’imprimante', sub: 'Bluetooth, USB ou réseau ; l’état de l’imprimante lu avant' },
      { label: 'Coupe et tiroir', sub: 'coupe après le QR ; tiroir seulement si espèces' },
      { label: 'Statut écrit', sub: 'imprimé, échoué, réimprimé par qui ; visible à la supervision' },
    ], caption: 'Figure 4 · La troisième étape est celle qui fait la différence entre une caisse qui tient et une caisse qui bloque : le ticket attend dans une file locale, l’imprimante le prend quand elle est prête, et un papier coincé ne perd pas la vente. La dernière étape est celle qui empêche les réimpressions d’être invisibles.', alt: 'Six étapes : vente validée, rendu en commandes, file locale (accentuée), vers l’imprimante, coupe et tiroir, statut écrit.' },
    ticket: { caption: 'Figure 5 · Un ticket de 80 mm tient quarante-huit caractères par ligne et sort d’une imprimante qui comprend un jeu de commandes textuel, celui d’Epson que la plupart des imprimantes de caisse acceptent : le texte latin part en texte, les lignes arabes partent en image parce que l’imprimante n’a ni la police ni le façonnage, le QR renvoie vers la facture, la coupe vient après, et le tiroir ne s’ouvre que si l’on a payé en espèces.' },
    calendrier: { title: 'Les documents d’une application en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Inventaire et numérotation', note: 'la liste des documents, qui les lit, quelle langue ; séquences par agence ; gabarits signés par le gérant et le comptable', from: 0, to: 1 },
      { label: 'Moteur PDF et facture', note: 'instantané figé, gabarit bilingue versionné, polices embarquées, PDF/A, empreinte ; première facture relue', from: 1, to: 2, accent: true },
      { label: 'Tickets thermiques', note: 'rendu en commandes, arabe en image, file locale, test sur chaque imprimante réellement présente dans les magasins', from: 2, to: 3 },
      { label: 'Bons, étiquettes, devis', note: 'signature et photo sur le téléphone, étiqueteuses, versions de devis', from: 3, to: 4 },
      { label: 'Archive et envoi', note: 'stockage versionné, réimpression marquée, WhatsApp et e-mail, lot de fin de mois', from: 4, to: 5 },
      { label: 'Recette sur place', note: 'chaque imprimante, chaque document, les deux langues ; le comptable valide les numéros', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six semaines, et la première se passe sans un seul document généré : on écrit la liste des documents, qui les lit, dans quelle langue, et comment ils sont numérotés, parce que ces décisions ne se changent plus une fois la première facture émise. La recette finale se fait sur place, sur les imprimantes qui sont là.', alt: 'Frise de six semaines : inventaire et numérotation, moteur PDF et facture (accentué), tickets thermiques, bons et étiquettes, archive et envoi, recette sur place.' },
  },
  en: {
    cover: { eyebrow: 'Documents · Printing · PDF · Receipts · 2027', title: ['“The receipt won’t', 'come out of the', 'till printer”'], subtitle: 'What gets built so that your application produces correct invoices, receipts, delivery notes and labels in both languages: a gapless number set once, a frozen snapshot, versioned templates, archivable PDFs with embedded fonts, receipts that come out of the thermal printer even without network, and a reprint that is always marked', left: { label: 'The PDF regenerated on every click', sub: 'and boxes instead of Arabic' }, right: { label: 'A frozen, numbered, archived document', sub: 'printed on the machine that is there' } },
    couches: { title: 'An application’s documents, in five layers', layers: [
      { label: 'Document data', items: [{ name: 'A snapshot frozen at issue time: lines, prices, addresses, rates, number set in a gapless sequence', sub: 'the document is a photograph, not a view on data that moves' }] },
      { label: 'Templates', items: [{ name: 'One template per document and per language or bilingual, versioned in the repository, with fonts covering both scripts', sub: 'every document says which template version produced it', accent: true }] },
      { label: 'Rendering', items: [{ name: 'PDF/A for documents to keep, command stream for thermal receipts, label language for label printers', sub: 'three engines, one data source; Arabic goes as an image where the printer has no font' }] },
      { label: 'Output', items: [{ name: 'Local printing through a queue, WhatsApp and e-mail sending, download, versioned archive with fingerprint', sub: 'the file sent is the file archived; a reprint regenerates nothing' }] },
      { label: 'Supervision', items: [{ name: 'Print queue and its errors, printers present per site, reprints and by whom, month-end batches, numbering gaps', sub: 'the accountant reads the numbers; the manager reads the reprints' }] },
    ], caption: 'Figure 1 · The accented layer is what avoids the two most frequent failures: a different PDF on every click, because it rereads data that changed, and an Arabic version in boxes, because the font was not embedded. A versioned template with its fonts, applied to a frozen snapshot, produces the same document today and in ten years.', alt: 'Five layers: document data, templates (accented), rendering, output, supervision.' },
    facture: { caption: 'Figure 2 · The invoice is not “printed”, it is issued: an event triggers it, a number is set once in a gapless sequence, its data is frozen, a versioned template renders it as PDF/A with embedded fonts, and its fingerprint is computed before sending and archiving. Ten years later, the archived file is the file sent, and a reprint carries a watermark. Numbers and amounts are an example.' },
    documents: { title: 'Six documents, and the output each one demands', columns: ['What the document must be', 'Rendering, output, archive'], rows: [
      { label: 'Invoice', cells: ['bilingual, gaplessly numbered, frozen, readable in ten years', 'PDF/A with embedded fonts and fingerprint; WhatsApp + e-mail; versioned archive; reprint = duplicate'] },
      { label: 'Receipt', cells: ['comes out in two seconds, with or without network, on the till printer', 'thermal command stream 80 or 58 mm; Arabic as image; local queue; QR to the invoice; drawer if cash'] },
      { label: 'Delivery note', cells: ['signed by the customer at the door, with the parcel photo', 'PDF generated on the courier’s phone, signature and photo embedded, timestamped, synced when network returns'] },
      { label: 'Label', cells: ['stuck on the parcel or the shelf, read by a scanner, 50 × 30 mm', 'the label printer’s language; barcode or QR; short text in both scripts; batch of labels per preparation'] },
      { label: 'Quote', cells: ['dated, with a validity, and versions when it changes', 'PDF per version, v1 v2 v3 kept; acceptance recorded; the accepted quote becomes the invoice’s base'] },
      { label: 'Monthly statement', cells: ['one document per customer, generated in a batch on the first of the month', 'night batch; PDF/A per customer; grouped sending; batch errors in the morning supervision'] },
    ], caption: 'Figure 3 · Six documents, three rendering engines and one rule: the source is a frozen snapshot, the template is versioned, the output is logged. The receipt is the only one that does not wait for the network; the invoice is the only one that must be readable in ten years; the label is the only one a machine reads before a human.', alt: 'Matrix of six documents: invoice, receipt, delivery note, label, quote, statement; what each must be and its output.' },
    etapes: { title: 'The receipt, from till to printer, in six steps', items: [
      { label: 'The sale is validated', sub: 'the receipt is created in the database with its number; even without network' },
      { label: 'Rendered as commands', sub: 'Latin text as text, Arabic lines as image, QR, cut' },
      { label: 'Local queue', sub: 'the receipt waits in a queue on the till; nothing is lost', accent: true },
      { label: 'To the printer', sub: 'Bluetooth, USB or network; printer status read first' },
      { label: 'Cut and drawer', sub: 'cut after the QR; drawer only if cash' },
      { label: 'Status written', sub: 'printed, failed, reprinted by whom; visible in supervision' },
    ], caption: 'Figure 4 · The third step is what separates a till that holds from a till that blocks: the receipt waits in a local queue, the printer takes it when ready, and a paper jam does not lose the sale. The last step is what keeps reprints from being invisible.', alt: 'Six steps: sale validated, rendered as commands, local queue (accented), to the printer, cut and drawer, status written.' },
    ticket: { caption: 'Figure 5 · An 80 mm receipt holds forty-eight characters per line and comes out of a printer that understands a textual command set, Epson’s, which most till printers accept: Latin text goes as text, Arabic lines go as an image because the printer has neither the font nor the shaping, the QR links to the invoice, the cut comes after, and the drawer opens only when paid in cash.' },
    calendrier: { title: 'An application’s documents in 2027, in weeks', unit: 'wk', items: [
      { label: 'Inventory and numbering', note: 'the list of documents, who reads them, which language; sequences per branch; templates signed by the manager and the accountant', from: 0, to: 1 },
      { label: 'PDF engine and invoice', note: 'frozen snapshot, versioned bilingual template, embedded fonts, PDF/A, fingerprint; first invoice reviewed', from: 1, to: 2, accent: true },
      { label: 'Thermal receipts', note: 'rendering as commands, Arabic as image, local queue, test on every printer actually present in the shops', from: 2, to: 3 },
      { label: 'Notes, labels, quotes', note: 'signature and photo on the phone, label printers, quote versions', from: 3, to: 4 },
      { label: 'Archive and sending', note: 'versioned storage, marked reprint, WhatsApp and e-mail, month-end batch', from: 4, to: 5 },
      { label: 'On-site acceptance', note: 'every printer, every document, both languages; the accountant validates the numbers', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six weeks, and the first passes without a single document generated: you write the list of documents, who reads them, in which language, and how they are numbered, because those decisions cannot change once the first invoice is issued. Final acceptance is done on site, on the printers that are there.', alt: 'Six-week timeline: inventory and numbering, PDF engine and invoice (accented), thermal receipts, notes and labels, archive and sending, on-site acceptance.' },
  },
  ar: {
    cover: { eyebrow: 'وثائق · طباعة · PDF · تذاكر · 2027', title: ['«التذكرة لا تخرج', 'من طابعة', 'الصندوق»'], subtitle: 'ما يُبنى كي ينتج تطبيقكم فواتير وتذاكر ووصولات تسليم وبطاقات صحيحة باللغتين: ترقيم بلا فجوة يوضع مرة، لقطة مجمَّدة، قوالب مرقَّمة، ملفات PDF قابلة للأرشفة بخطوط مضمَّنة، تذاكر تخرج من الطابعة الحرارية حتى بلا شبكة، وإعادة طباعة موسومة دائماً', left: { label: 'PDF يُعاد توليده عند كل نقرة', sub: 'ومربعات بدل العربية' }, right: { label: 'وثيقة مجمَّدة، مرقَّمة، مؤرشَفة', sub: 'ومطبوعة على الآلة الموجودة' } },
    couches: { title: 'وثائق التطبيق، في خمس طبقات', layers: [
      { label: 'بيانات الوثيقة', items: [{ name: 'لقطة مجمَّدة لحظة الإصدار: أسطر، أسعار، عناوين، نسب، رقم موضوع في تسلسل بلا فجوة', sub: 'الوثيقة صورة فوتوغرافية، لا نظرة على بيانات تتحرك' }] },
      { label: 'القوالب', items: [{ name: 'قالب لكل وثيقة ولكل لغة أو بلغتين، مرقَّم في المستودع، بخطوط تغطي الكتابتين', sub: 'كل وثيقة تقول أي نسخة قالب أنتجتها', accent: true }] },
      { label: 'العرض', items: [{ name: 'PDF/A للوثائق التي تُحفظ، تدفق أوامر للتذاكر الحرارية، لغة بطاقات لطابعات البطاقات', sub: 'ثلاثة محركات ومصدر بيانات واحد؛ العربية تذهب صورة حيث لا خط للطابعة' }] },
      { label: 'الإخراج', items: [{ name: 'طباعة محلية عبر طابور، إرسال WhatsApp وبريد، تنزيل، أرشيف مرقَّم ببصمة', sub: 'الملف المرسَل هو الملف المؤرشَف؛ وإعادة الطباعة لا تولّد شيئاً' }] },
      { label: 'الإشراف', items: [{ name: 'طابور الطباعة وأخطاؤه، الطابعات الموجودة لكل موقع، إعادات الطباعة ومن قام بها، دفعات نهاية الشهر، فجوات الترقيم', sub: 'المحاسب يقرأ الأرقام؛ والمسيّر يقرأ إعادات الطباعة' }] },
    ], caption: 'الشكل 1 · الطبقة المميزة هي التي تتجنب أكثر عطلين تكراراً: PDF مختلف عند كل نقرة لأنه يعيد قراءة بيانات تغيّرت، ونسخة عربية بمربعات لأن الخط لم يكن مضمَّناً. قالب مرقَّم بخطوطه، مطبَّق على لقطة مجمَّدة، ينتج الوثيقة نفسها اليوم وبعد عشر سنوات.', alt: 'خمس طبقات: بيانات الوثيقة، القوالب (مميزة)، العرض، الإخراج، الإشراف.' },
    facture: { caption: 'الشكل 2 · الفاتورة لا «تُطبع» بل تُصدَر: حدث يطلقها، رقم يوضع لها مرة في تسلسل بلا فجوة، بياناتها تُجمَّد، قالب مرقَّم يعرضها PDF/A بخطوطها المضمَّنة، وبصمتها تُحسب قبل الإرسال والأرشفة. وبعد عشر سنوات الملف المؤرشَف هو الملف المرسَل، وإعادة الطباعة تحمل علامة مائية. والأرقام والمبالغ مثال.' },
    documents: { title: 'ست وثائق، والإخراج الذي تطلبه كل منها', columns: ['ما يجب أن تكونه الوثيقة', 'العرض، الإخراج، الأرشيف'], rows: [
      { label: 'الفاتورة', cells: ['بلغتين، مرقَّمة بلا فجوة، مجمَّدة، قابلة للقراءة بعد عشر سنوات', 'PDF/A بخطوط مضمَّنة وبصمة؛ WhatsApp + بريد؛ أرشيف مرقَّم؛ إعادة الطباعة = نسخة'] },
      { label: 'تذكرة الصندوق', cells: ['تخرج في ثانيتين، بشبكة أو بدونها، على طابعة الصندوق', 'تدفق أوامر حراري 80 أو 58 مم؛ عربية كصورة؛ طابور محلي؛ QR إلى الفاتورة؛ درج إن نقداً'] },
      { label: 'وصل التسليم', cells: ['يوقّعه الزبون عند الباب، مع صورة الطرد', 'PDF يُولَّد على هاتف الموصّل، توقيع وصورة مضمَّنان، مؤرَّخ، يُزامَن عند عودة الشبكة'] },
      { label: 'البطاقة', cells: ['تُلصق على الطرد أو الرف، يقرؤها ماسح، 50 × 30 مم', 'لغة طابعة البطاقات؛ باركود أو QR؛ نص قصير بكتابتين؛ دفعة بطاقات لكل تحضير'] },
      { label: 'عرض السعر', cells: ['مؤرَّخ، بصلاحية، ونسخ حين يتغير', 'PDF لكل نسخة، v1 v2 v3 محفوظة؛ القبول مسجَّل؛ العرض المقبول يصير أساس الفاتورة'] },
      { label: 'الكشف الشهري', cells: ['وثيقة لكل زبون، تُولَّد دفعةً في أول الشهر', 'دفعة ليلية؛ PDF/A لكل زبون؛ إرسال مجمَّع؛ أخطاء الدفعة في إشراف الصباح'] },
    ], caption: 'الشكل 3 · ست وثائق، ثلاثة محركات عرض وقاعدة واحدة: المصدر لقطة مجمَّدة، والقالب مرقَّم، والإخراج مسجَّل. التذكرة الوحيدة التي لا تنتظر الشبكة؛ والفاتورة الوحيدة التي يجب أن تُقرأ بعد عشر سنوات؛ والبطاقة الوحيدة التي تقرؤها آلة قبل إنسان.', alt: 'مصفوفة ست وثائق: فاتورة، تذكرة، وصل تسليم، بطاقة، عرض سعر، كشف؛ ما يجب أن تكونه كل منها وإخراجها.' },
    etapes: { title: 'التذكرة، من الصندوق إلى الطابعة، في ست خطوات', items: [
      { label: 'البيع مصادَق عليه', sub: 'تُنشأ التذكرة في القاعدة برقمها؛ حتى بلا شبكة' },
      { label: 'عرض في أوامر', sub: 'نص لاتيني نصاً، أسطر عربية صورة، QR، قص' },
      { label: 'طابور محلي', sub: 'تنتظر التذكرة في طابور على الصندوق؛ لا شيء يضيع', accent: true },
      { label: 'إلى الطابعة', sub: 'بلوتوث أو USB أو شبكة؛ حالة الطابعة تُقرأ أولاً' },
      { label: 'قص ودرج', sub: 'قص بعد الـ QR؛ درج إن نقداً فقط' },
      { label: 'حالة مكتوبة', sub: 'مطبوعة، فشلت، أُعيدت طباعتها ومن؛ مرئية في الإشراف' },
    ], caption: 'الشكل 4 · الخطوة الثالثة هي التي تفصل صندوقاً يصمد عن صندوق يتوقف: تنتظر التذكرة في طابور محلي، وتأخذها الطابعة حين تكون جاهزة، وورقة عالقة لا تُضيع البيع. والخطوة الأخيرة هي التي تمنع إعادات الطباعة من أن تكون خفية.', alt: 'ست خطوات: بيع مصادَق عليه، عرض في أوامر، طابور محلي (مميز)، إلى الطابعة، قص ودرج، حالة مكتوبة.' },
    ticket: { caption: 'الشكل 5 · تذكرة 80 مم تتسع لثمانية وأربعين حرفاً في السطر وتخرج من طابعة تفهم مجموعة أوامر نصية، مجموعة Epson التي تقبلها معظم طابعات الصناديق: النص اللاتيني يذهب نصاً، والأسطر العربية تذهب صورة لأن الطابعة لا تملك الخط ولا التشكيل، والـ QR يحيل إلى الفاتورة، والقص يأتي بعده، والدرج لا يُفتح إلا عند الدفع نقداً.' },
    calendrier: { title: 'وثائق التطبيق سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'جرد وترقيم', note: 'قائمة الوثائق، من يقرؤها، أي لغة؛ تسلسلات لكل وكالة؛ قوالب يوقّعها المسيّر والمحاسب', from: 0, to: 1 },
      { label: 'محرك PDF والفاتورة', note: 'لقطة مجمَّدة، قالب بلغتين مرقَّم، خطوط مضمَّنة، PDF/A، بصمة؛ أول فاتورة مراجَعة', from: 1, to: 2, accent: true },
      { label: 'تذاكر حرارية', note: 'عرض في أوامر، عربية صورة، طابور محلي، اختبار على كل طابعة موجودة فعلاً في المتاجر', from: 2, to: 3 },
      { label: 'وصولات، بطاقات، عروض', note: 'توقيع وصورة على الهاتف، طابعات بطاقات، نسخ عروض الأسعار', from: 3, to: 4 },
      { label: 'أرشيف وإرسال', note: 'تخزين مرقَّم، إعادة طباعة موسومة، WhatsApp وبريد، دفعة نهاية الشهر', from: 4, to: 5 },
      { label: 'قبول في الموقع', note: 'كل طابعة، كل وثيقة، اللغتان؛ المحاسب يصادق على الأرقام', from: 5, to: 6 },
    ], caption: 'الشكل 6 · ستة أسابيع، والأول يمر دون توليد وثيقة واحدة: نكتب قائمة الوثائق، ومن يقرؤها، وبأي لغة، وكيف تُرقَّم، لأن هذه القرارات لا تتغير بعد إصدار أول فاتورة. والقبول النهائي في الموقع، على الطابعات الموجودة.', alt: 'خط زمني من ستة أسابيع: جرد وترقيم، محرك PDF والفاتورة (مميز)، تذاكر حرارية، وصولات وبطاقات، أرشيف وإرسال، قبول في الموقع.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = DC[locale] || DC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      facture: { svg: invoice(e.invoice, rtl), caption: t.facture.caption, alt: e.invoice.alt },
      documents: { svg: matrix({ title: t.documents.title, columns: t.documents.columns, rows: t.documents.rows, rtl }), caption: t.documents.caption.replace('Figure 2 bis', 'Figure 3'), alt: t.documents.alt },
      etapes: { svg: steps({ title: t.etapes.title, steps: t.etapes.items, arrows: true, rtl }), caption: t.etapes.caption, alt: t.etapes.alt },
      ticket: { svg: receipt(e.receipt, rtl), caption: t.ticket.caption, alt: e.receipt.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 6, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
