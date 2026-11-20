import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { pricing, lifecycle, STRINGS as QF } from './custom/quote-flow.mjs';
export const slug = 'du-devis-a-la-facture-sans-ressaisie-application-algerie-2027-moteur-de-prix-remises-approbation-versions-acceptation-ce-qu-on-construit';
const T = {
  fr: {
    cover: { eyebrow: 'Devis · Commande · Facture · 2027', title: ['« Le devis est', 'dans Excel, la facture', 'est retapée »'], subtitle: 'Ce qu’on construit pour qu’un prix soit calculé et jamais tapé, qu’une remise soit un droit par rôle, qu’un devis ait des versions et une acceptation, et que la commande, la livraison et la facture naissent du devis sans ressaisie', left: { label: 'Trois fichiers, trois prix', sub: 'et la facture qui ne ressemble pas au devis' }, right: { label: 'Un moteur, sept documents', sub: 'et rien de retapé' } },
    etapes: { title: 'Du devis à la facture, en six étapes', items: [
      { label: 'Composer le devis', sub: 'lignes depuis le catalogue ; prix calculés ; marge visible' },
      { label: 'Remiser dans son droit', sub: 'jusqu’à son plafond seul ; au-delà, approbation en un geste', accent: true },
      { label: 'Envoyer une version', sub: 'PDF daté, valable 30 jours ; v1, v2… conservées' },
      { label: 'Faire accepter', sub: 'signature sur le téléphone ou code SMS, dans la validité' },
      { label: 'Convertir sans retaper', sub: 'devis accepté → commande → acompte → livraison' },
      { label: 'Facturer le livré', sub: 'bon signé → facture ; erreur → avoir, jamais une modification' },
    ], caption: 'Figure 1 · L’étape accentuée est celle qui sépare un logiciel de devis d’un fichier Excel : la remise n’est pas une case libre, c’est un droit par rôle avec un plafond, et au-delà du plafond une approbation en un geste, journalisée. Les trois dernières étapes ne retapent rien : chaque document est créé depuis le précédent par un événement.', alt: 'Six étapes : composer le devis, remiser dans son droit (accentuée), envoyer une version, faire accepter, convertir sans retaper, facturer le livré.' },
    prix: { caption: 'Figure 2 · Une seule ligne de devis, et la suite de règles qui produit son prix : le prix catalogue, la grille du client, le palier de quantité, puis la remise demandée par le vendeur. La remise de 10 % ferait passer la ligne sous le plancher de marge ; le serveur la refuse, quel que soit l’écran ; le chef des ventes approuve 4 %, au-dessus du plancher, avec un motif. Coût, grille, paliers et seuils sont un exemple construit ; le plancher est fixé par la direction.' },
    couches: { title: 'Du devis à la facture, en cinq couches', layers: [
      { label: 'Catalogue et prix', items: [{ name: 'Produits et prestations avec coût, prix catalogue, grilles par type de client, paliers, dates de validité', sub: 'un prix a une date de début et de fin ; un devis garde le prix de sa date' }] },
      { label: 'Moteur de prix', items: [{ name: 'Côté serveur : grille → palier → remise ; plafond par rôle, plancher de marge, approbation avec motif, journal', sub: 'l’écran affiche ce que le serveur a calculé, jamais l’inverse', accent: true }] },
      { label: 'Documents et versions', items: [{ name: 'Devis, commande, bon de livraison, facture, avoir : chacun créé depuis le précédent, gelé à l’émission, PDF conservé', sub: 'ce qui est gelé ne bouge plus ; on crée une version ou un avoir' }] },
      { label: 'Acceptation et conversion', items: [{ name: 'Signature ou code SMS dans la validité ; acceptation → commande ; acompte → préparation ; bon signé → facture', sub: 'chaque flèche est un événement daté, signé, avec son auteur' }] },
      { label: 'Suivi', items: [{ name: 'Devis à relancer et expirés ; taux d’acceptation par vendeur ; marge réalisée contre devisée ; relances WhatsApp', sub: 'la mesure qui dit si le moteur de prix est bien réglé' }] },
    ], caption: 'Figure 3 · La couche accentuée est celle qui décide de votre marge : un moteur de prix côté serveur, avec des plafonds par rôle et un plancher, est ce qui empêche la remise « exceptionnelle » de devenir la règle. Les couches 3 et 4 sont ce qui supprime la ressaisie : le document suivant est créé depuis le précédent, par un événement.', alt: 'Cinq couches : catalogue et prix, moteur de prix (accentué), documents et versions, acceptation et conversion, suivi.' },
    cycle: { caption: 'Figure 4 · Sept documents pour une vente, et zéro ressaisie : le devis a deux versions, toutes deux conservées ; l’acceptation, signée ou par code, est datée et gèle le devis ; la commande est créée depuis lui, avec un acompte ; la livraison partielle écrit les quantités livrées et fait bouger le stock ; la première facture porte le livré moins l’acompte, la seconde le solde. Une erreur après émission se corrige par un avoir, jamais par une modification. Numéros et pourcentages sont un exemple construit.' },
    situations: { title: 'Six situations réelles, et ce que l’application fait', columns: ['Ce qui se passe', 'Ce que l’application fait'], rows: [
      { label: 'Trois vendeurs, trois prix', cells: ['Le même produit devisé à 12 000, 11 500 et 10 800 selon qui a ouvert Excel', 'un moteur de prix : grille client, palier, remise plafonnée par rôle ; prix calculé'] },
      { label: 'La remise « exceptionnelle »', cells: ['Le vendeur accorde 15 % pour conclure ; la marge réelle se découvre au bilan', 'plafond par rôle, plancher de marge tenu par le serveur, approbation avec motif'] },
      { label: 'Le devis change trois fois', cells: ['Le client renégocie ; on écrase le PDF ; personne ne sait ce qui a été envoyé', 'versions v1, v2, v3 conservées avec leur PDF ; une seule version acceptée'] },
      { label: 'Le devis accepté a six mois', cells: ['Les prix ont changé ; le client exige le prix du devis', 'validité écrite ; expiré, le devis se régénère en version aux prix du jour'] },
      { label: 'La facture ne ressemble pas au devis', cells: ['Retapée à la main ; une ligne oubliée, un prix différent, un litige', 'facture créée depuis le bon de livraison, créé depuis la commande, depuis le devis'] },
      { label: 'Livraison en deux fois', cells: ['Facturer quoi, quand, et comment déduire l’acompte ?', 'facture du livré à chaque bon signé ; acompte sur la première, solde à la dernière'] },
    ], caption: 'Figure 5 · Les deux premières lignes se règlent par le moteur de prix et ses plafonds ; les deux suivantes par les versions et la validité ; les deux dernières par la conversion sans ressaisie, où chaque document naît du précédent. Aucune ne se règle par un vendeur plus discipliné.', alt: 'Matrice de six situations : trois prix pour un produit, remise exceptionnelle, devis changé trois fois, devis accepté trop vieux, facture différente du devis, livraison en deux fois ; ce qui se passe et ce que l’application fait.' },
    calendrier: { title: 'Du devis à la facture en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Règles de prix', note: 'coûts, grilles par type de client, paliers, plafonds de remise par rôle, plancher de marge, validité des devis, qui approuve ; signés par la direction', from: 0, to: 1 },
      { label: 'Catalogue et moteur', note: 'catalogue repris avec coûts et prix datés ; moteur de prix côté serveur ; refus sous le plancher ; journal', from: 1, to: 2, accent: true },
      { label: 'Devis et versions', note: 'composition depuis le catalogue, marge visible, PDF par version, validité, approbation de remise en un geste', from: 2, to: 3 },
      { label: 'Acceptation et commande', note: 'signature sur le téléphone ou code SMS, commande créée depuis le devis, acompte demandé et rapproché', from: 3, to: 4 },
      { label: 'Livraison et facture', note: 'bon de livraison signé, quantités livrées, facture du livré, acompte déduit, avoir ; numérotation sans trou', from: 4, to: 5 },
      { label: 'Suivi et relances', note: 'devis à relancer et expirés, taux d’acceptation, marge réalisée contre devisée, relances WhatsApp ; première revue', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six semaines, et la première sans code : les plafonds, le plancher et la validité sont des décisions de direction, pas des réglages de développeur. La deuxième semaine est accentuée parce que le moteur de prix conditionne tout le reste : un devis dont le prix est tapé ne vaut pas mieux qu’Excel.', alt: 'Frise de six semaines : règles de prix, catalogue et moteur (accentué), devis et versions, acceptation et commande, livraison et facture, suivi et relances.' },
  },
  en: {
    cover: { eyebrow: 'Quote · Order · Invoice · 2027', title: ['“The quote is', 'in Excel, the invoice', 'is retyped”'], subtitle: 'What gets built so that a price is computed and never typed, a discount is a right per role, a quote has versions and an acceptance, and the order, the delivery and the invoice are born from the quote without retyping', left: { label: 'Three files, three prices', sub: 'and an invoice that does not match the quote' }, right: { label: 'One engine, seven documents', sub: 'and nothing retyped' } },
    etapes: { title: 'From quote to invoice, in six steps', items: [
      { label: 'Compose the quote', sub: 'lines from the catalogue; computed prices; visible margin' },
      { label: 'Discount within rights', sub: 'up to your ceiling alone; beyond, one-gesture approval', accent: true },
      { label: 'Send a version', sub: 'dated PDF, valid 30 days; v1, v2… kept' },
      { label: 'Get acceptance', sub: 'signature on the phone or SMS code, within validity' },
      { label: 'Convert without retyping', sub: 'accepted quote → order → deposit → delivery' },
      { label: 'Invoice what was delivered', sub: 'signed note → invoice; error → credit note, never an edit' },
    ], caption: 'Figure 1 · The accented step is what separates quoting software from an Excel file: the discount is not a free field, it is a right per role with a ceiling, and beyond the ceiling a one-gesture, logged approval. The last three steps retype nothing: every document is created from the previous one by an event.', alt: 'Six steps: compose the quote, discount within rights (accented), send a version, get acceptance, convert without retyping, invoice what was delivered.' },
    prix: { caption: 'Figure 2 · One quote line, and the sequence of rules that produces its price: the catalogue price, the customer grid, the quantity break, then the discount requested by the sales rep. The 10 % discount would take the line under the margin floor; the server refuses it, whatever the screen; the sales manager approves 4 %, above the floor, with a reason. Cost, grid, breaks and thresholds are a constructed example; the floor is set by management.' },
    couches: { title: 'From quote to invoice, in five layers', layers: [
      { label: 'Catalogue and prices', items: [{ name: 'Products and services with cost, catalogue price, grids per customer type, breaks, validity dates', sub: 'a price has a start and an end date; a quote keeps the price of its date' }] },
      { label: 'Pricing engine', items: [{ name: 'Server side: grid → break → discount; ceiling per role, margin floor, approval with reason, log', sub: 'the screen displays what the server computed, never the reverse', accent: true }] },
      { label: 'Documents and versions', items: [{ name: 'Quote, order, delivery note, invoice, credit note: each created from the previous, frozen at issue, PDF kept', sub: 'what is frozen no longer moves; you create a version or a credit note' }] },
      { label: 'Acceptance and conversion', items: [{ name: 'Signature or SMS code within validity; acceptance → order; deposit → preparation; signed note → invoice', sub: 'every arrow is a dated, signed event with its author' }] },
      { label: 'Follow-up', items: [{ name: 'Quotes to chase and expired; acceptance rate per rep; realised against quoted margin; WhatsApp reminders', sub: 'the measure that says whether the pricing engine is well tuned' }] },
    ], caption: 'Figure 3 · The accented layer decides your margin: a server-side pricing engine, with ceilings per role and a floor, is what stops the “exceptional” discount from becoming the rule. Layers 3 and 4 are what removes retyping: the next document is created from the previous one, by an event.', alt: 'Five layers: catalogue and prices, pricing engine (accented), documents and versions, acceptance and conversion, follow-up.' },
    cycle: { caption: 'Figure 4 · Seven documents for one sale, and zero retyping: the quote has two versions, both kept; the acceptance, signed or by code, is dated and freezes the quote; the order is created from it, with a deposit; the partial delivery writes the delivered quantities and moves stock; the first invoice carries what was delivered minus the deposit, the second the balance. An error after issue is corrected by a credit note, never by an edit. Numbers and percentages are a constructed example.' },
    situations: { title: 'Six real situations, and what the application does', columns: ['What happens', 'What the application does'], rows: [
      { label: 'Three reps, three prices', cells: ['The same product quoted at 12,000, 11,500 and 10,800 depending on who opened Excel', 'a pricing engine: customer grid, break, discount capped per role; computed price'] },
      { label: 'The “exceptional” discount', cells: ['The rep gives 15 % to close; the real margin shows up at year end', 'ceiling per role, margin floor held by the server, approval with reason'] },
      { label: 'The quote changes three times', cells: ['The customer renegotiates; the PDF is overwritten; nobody knows what was sent', 'versions v1, v2, v3 kept with their PDF; a single accepted version'] },
      { label: 'The accepted quote is six months old', cells: ['Prices have changed; the customer demands the quoted price', 'written validity; expired, the quote regenerates as a version at today’s prices'] },
      { label: 'The invoice does not match the quote', cells: ['Retyped by hand; a line forgotten, a different price, a dispute', 'invoice created from the delivery note, created from the order, from the quote'] },
      { label: 'Delivery in two parts', cells: ['Invoice what, when, and how to deduct the deposit?', 'invoice of the delivered at each signed note; deposit off the first, balance at the last'] },
    ], caption: 'Figure 5 · The first two rows are settled by the pricing engine and its ceilings; the next two by versions and validity; the last two by conversion without retyping, where every document is born from the previous one. None is settled by a more disciplined sales rep.', alt: 'Matrix of six situations: three prices for one product, exceptional discount, quote changed three times, accepted quote too old, invoice different from quote, delivery in two parts; what happens and what the application does.' },
    calendrier: { title: 'From quote to invoice in 2027, in weeks', unit: 'wk', items: [
      { label: 'Pricing rules', note: 'costs, grids per customer type, breaks, discount ceilings per role, margin floor, quote validity, who approves; signed by management', from: 0, to: 1 },
      { label: 'Catalogue and engine', note: 'catalogue taken over with costs and dated prices; server-side pricing engine; refusal under the floor; log', from: 1, to: 2, accent: true },
      { label: 'Quotes and versions', note: 'composition from the catalogue, visible margin, PDF per version, validity, one-gesture discount approval', from: 2, to: 3 },
      { label: 'Acceptance and order', note: 'signature on the phone or SMS code, order created from the quote, deposit requested and reconciled', from: 3, to: 4 },
      { label: 'Delivery and invoice', note: 'signed delivery note, delivered quantities, invoice of what was delivered, deposit deducted, credit note; gapless numbering', from: 4, to: 5 },
      { label: 'Follow-up and reminders', note: 'quotes to chase and expired, acceptance rate, realised against quoted margin, WhatsApp reminders; first review', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six weeks, and the first without code: ceilings, floor and validity are management decisions, not developer settings. The second week is accented because the pricing engine conditions everything else: a quote whose price is typed is no better than Excel.', alt: 'Six-week timeline: pricing rules, catalogue and engine (accented), quotes and versions, acceptance and order, delivery and invoice, follow-up and reminders.' },
  },
  ar: {
    cover: { eyebrow: 'عرض سعر · طلبية · فاتورة · 2027', title: ['«عرض السعر', 'في Excel، والفاتورة', 'تُعاد كتابتها»'], subtitle: 'ما يُبنى كي يُحسب السعر ولا يُكتب أبداً، ويكون الخصم حقاً حسب الدور، ويكون لعرض السعر نسخ وقبول، وتولد الطلبية والتسليم والفاتورة من العرض دون إعادة إدخال', left: { label: 'ثلاثة ملفات، ثلاثة أسعار', sub: 'وفاتورة لا تشبه عرض السعر' }, right: { label: 'محرك واحد، سبع وثائق', sub: 'ولا شيء يُعاد إدخاله' } },
    etapes: { title: 'من عرض السعر إلى الفاتورة، في ست خطوات', items: [
      { label: 'تركيب عرض السعر', sub: 'أسطر من الكتالوج؛ أسعار محسوبة؛ هامش ظاهر' },
      { label: 'الخصم ضمن الحق', sub: 'حتى سقفه وحده؛ وفوقه موافقة بحركة واحدة', accent: true },
      { label: 'إرسال نسخة', sub: 'PDF مؤرَّخ، صالح 30 يوماً؛ ن1، ن2… محفوظة' },
      { label: 'الحصول على القبول', sub: 'توقيع على الهاتف أو رمز SMS، ضمن الصلاحية' },
      { label: 'التحويل دون إعادة إدخال', sub: 'عرض مقبول ← طلبية ← عربون ← تسليم' },
      { label: 'فوترة المسلَّم', sub: 'وصل موقَّع ← فاتورة؛ خطأ ← إشعار دائن، لا تعديل أبداً' },
    ], caption: 'الشكل 1 · الخطوة المميزة هي ما يفصل برنامج عروض الأسعار عن ملف Excel: الخصم ليس خانة حرة بل حق حسب الدور بسقف، وفوق السقف موافقة بحركة واحدة مسجَّلة. والخطوات الثلاث الأخيرة لا تعيد إدخال شيء: كل وثيقة تُنشأ من السابقة بحدث.', alt: 'ست خطوات: تركيب عرض السعر، الخصم ضمن الحق (مميزة)، إرسال نسخة، الحصول على القبول، التحويل دون إعادة إدخال، فوترة المسلَّم.' },
    prix: { caption: 'الشكل 2 · سطر عرض سعر واحد، وسلسلة القواعد التي تنتج سعره: سعر الكتالوج، شبكة الزبون، عتبة الكمية، ثم الخصم الذي يطلبه البائع. خصم 10 % يُنزل السطر تحت أرضية الهامش؛ يرفضه الخادم مهما قالت الشاشة؛ ويوافق مدير المبيعات على 4 % فوق الأرضية بسبب. التكلفة والشبكة والعتبات والحدود مثال مبني؛ والأرضية تحددها الإدارة.' },
    couches: { title: 'من عرض السعر إلى الفاتورة، في خمس طبقات', layers: [
      { label: 'الكتالوج والأسعار', items: [{ name: 'منتجات وخدمات بتكلفة وسعر كتالوج وشبكات حسب نوع الزبون وعتبات وتواريخ صلاحية', sub: 'للسعر تاريخ بداية ونهاية؛ وعرض السعر يحتفظ بسعر تاريخه' }] },
      { label: 'محرك الأسعار', items: [{ name: 'من جهة الخادم: شبكة ← عتبة ← خصم؛ سقف لكل دور، أرضية هامش، موافقة بسبب، سجل', sub: 'الشاشة تعرض ما حسبه الخادم، لا العكس أبداً', accent: true }] },
      { label: 'الوثائق والنسخ', items: [{ name: 'عرض سعر، طلبية، وصل تسليم، فاتورة، إشعار دائن: كل منها من السابقة، مجمَّدة عند الإصدار، PDF محفوظ', sub: 'ما جُمِّد لا يتحرك؛ نُنشئ نسخة أو إشعاراً دائناً' }] },
      { label: 'القبول والتحويل', items: [{ name: 'توقيع أو رمز SMS ضمن الصلاحية؛ قبول ← طلبية؛ عربون ← تحضير؛ وصل موقَّع ← فاتورة', sub: 'كل سهم حدث مؤرَّخ موقَّع بمؤلفه' }] },
      { label: 'المتابعة', items: [{ name: 'عروض للمتابعة ومنتهية؛ نسبة القبول لكل بائع؛ الهامش المحقَّق مقابل المعروض؛ تذكيرات WhatsApp', sub: 'المقياس الذي يقول إن كان محرك الأسعار مضبوطاً' }] },
    ], caption: 'الشكل 3 · الطبقة المميزة هي التي تقرر هامشكم: محرك أسعار من جهة الخادم بسقوف حسب الدور وأرضية هو ما يمنع الخصم «الاستثنائي» من أن يصير القاعدة. والطبقتان 3 و4 هما ما يلغي إعادة الإدخال: الوثيقة التالية تُنشأ من السابقة بحدث.', alt: 'خمس طبقات: الكتالوج والأسعار، محرك الأسعار (مميز)، الوثائق والنسخ، القبول والتحويل، المتابعة.' },
    cycle: { caption: 'الشكل 4 · سبع وثائق لبيع واحد وصفر إعادة إدخال: لعرض السعر نسختان كلتاهما محفوظة؛ والقبول، بتوقيع أو رمز، مؤرَّخ ويجمّد العرض؛ والطلبية تُنشأ منه بعربون؛ والتسليم الجزئي يكتب الكميات المسلَّمة ويحرّك المخزون؛ والفاتورة الأولى تحمل المسلَّم ناقص العربون والثانية الباقي. والخطأ بعد الإصدار يُصحَّح بإشعار دائن لا بتعديل أبداً. والأرقام والنسب مثال مبني.' },
    situations: { title: 'ست حالات حقيقية، وما يفعله التطبيق', columns: ['ما يحدث', 'ما يفعله التطبيق'], rows: [
      { label: 'ثلاثة بائعين، ثلاثة أسعار', cells: ['المنتج نفسه يُعرض بـ 12,000 و11,500 و10,800 حسب من فتح Excel', 'محرك أسعار: شبكة زبون، عتبة، خصم بسقف حسب الدور؛ سعر محسوب'] },
      { label: 'الخصم «الاستثنائي»', cells: ['يمنح البائع 15 % ليُتمّ؛ والهامش الحقيقي يظهر في الميزانية', 'سقف لكل دور، أرضية هامش يمسكها الخادم، موافقة بسبب'] },
      { label: 'عرض السعر يتغير ثلاث مرات', cells: ['يعيد الزبون التفاوض؛ يُمحى PDF؛ لا أحد يعرف ما أُرسل', 'نسخ ن1 ون2 ون3 محفوظة بـ PDF؛ نسخة واحدة مقبولة'] },
      { label: 'العرض المقبول عمره ستة أشهر', cells: ['تغيرت الأسعار؛ ويطالب الزبون بسعر العرض', 'صلاحية مكتوبة؛ إذا انتهى يُولَّد نسخةً جديدة بأسعار اليوم'] },
      { label: 'الفاتورة لا تشبه العرض', cells: ['أُعيدت كتابتها يدوياً؛ سطر منسي، سعر مختلف، نزاع', 'فاتورة من وصل التسليم، المنشأ من الطلبية، من العرض'] },
      { label: 'تسليم على مرتين', cells: ['نفوتر ماذا ومتى وكيف نخصم العربون؟', 'فاتورة المسلَّم عند كل وصل موقَّع؛ العربون من الأولى والباقي في الأخيرة'] },
    ], caption: 'الشكل 5 · السطران الأولان يُحلان بمحرك الأسعار وسقوفه؛ والتاليان بالنسخ والصلاحية؛ والأخيران بالتحويل دون إعادة إدخال حيث تولد كل وثيقة من السابقة. ولا واحدة تُحل ببائع أكثر انضباطاً.', alt: 'مصفوفة ست حالات: ثلاثة أسعار لمنتج، خصم استثنائي، عرض تغير ثلاث مرات، عرض مقبول قديم، فاتورة مختلفة عن العرض، تسليم على مرتين؛ ما يحدث وما يفعله التطبيق.' },
    calendrier: { title: 'من عرض السعر إلى الفاتورة سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'قواعد الأسعار', note: 'تكاليف، شبكات حسب نوع الزبون، عتبات، سقوف خصم لكل دور، أرضية هامش، صلاحية العروض، من يوافق؛ توقّعها الإدارة', from: 0, to: 1 },
      { label: 'الكتالوج والمحرك', note: 'كتالوج مستلَم بتكاليف وأسعار مؤرَّخة؛ محرك أسعار من جهة الخادم؛ رفض تحت الأرضية؛ سجل', from: 1, to: 2, accent: true },
      { label: 'العروض والنسخ', note: 'تركيب من الكتالوج، هامش ظاهر، PDF لكل نسخة، صلاحية، موافقة خصم بحركة واحدة', from: 2, to: 3 },
      { label: 'القبول والطلبية', note: 'توقيع على الهاتف أو رمز SMS، طلبية منشأة من العرض، عربون مطلوب ومطابَق', from: 3, to: 4 },
      { label: 'التسليم والفاتورة', note: 'وصل تسليم موقَّع، كميات مسلَّمة، فاتورة المسلَّم، خصم العربون، إشعار دائن؛ ترقيم بلا فجوات', from: 4, to: 5 },
      { label: 'المتابعة والتذكيرات', note: 'عروض للمتابعة ومنتهية، نسبة القبول، الهامش المحقَّق مقابل المعروض، تذكيرات WhatsApp؛ أول مراجعة', from: 5, to: 6 },
    ], caption: 'الشكل 6 · ستة أسابيع، والأول بلا كود: السقوف والأرضية والصلاحية قرارات إدارة لا إعدادات مطوّر. والأسبوع الثاني مميز لأن محرك الأسعار يحكم كل الباقي: عرض سعر يُكتب سعره لا يفضل Excel.', alt: 'خط زمني من ستة أسابيع: قواعد الأسعار، الكتالوج والمحرك (مميز)، العروض والنسخ، القبول والطلبية، التسليم والفاتورة، المتابعة والتذكيرات.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = QF[locale] || QF.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      etapes: { svg: steps({ title: t.etapes.title, steps: t.etapes.items, arrows: true, rtl }), caption: t.etapes.caption, alt: t.etapes.alt },
      prix: { svg: pricing(e.pricing, rtl), caption: t.prix.caption, alt: e.pricing.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      cycle: { svg: lifecycle(e.lifecycle, rtl), caption: t.cycle.caption, alt: e.lifecycle.alt },
      situations: { svg: matrix({ title: t.situations.title, columns: t.situations.columns, rows: t.situations.rows, rtl }), caption: t.situations.caption, alt: t.situations.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 6, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
