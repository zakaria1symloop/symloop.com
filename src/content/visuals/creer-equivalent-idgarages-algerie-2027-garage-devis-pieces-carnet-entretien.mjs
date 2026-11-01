import { cover, steps, layers, matrix, stats } from '../../lib/visuals/index.mjs';

export const slug = 'creer-equivalent-idgarages-algerie-2027-garage-devis-pieces-carnet-entretien';

const T = {
  fr: {
    cover: { eyebrow: 'Série · Vu en France #10', title: ['Créer l’équivalent', 'd’iDGarages en Algérie', 'en 2027.'], subtitle: 'Le devis par ligne, l’accord à distance, l’origine des pièces, le carnet d’entretien : quoi construire, et dans quel ordre.', left: { label: 'Le devis', sub: 'validé depuis Alger ou depuis Lyon' }, right: { label: 'L’atelier', sub: 'Alger, Oran, Sétif, Constantine' }, note: 'France · Algérie · 2027' },
    journey: { title: 'Une réparation qui inspire confiance, en six moments', items: [
      { n: '01', label: 'La demande', sub: 'Plaque ou numéro de châssis, le symptôme, une vidéo du bruit.' },
      { n: '02', label: 'Le devis par ligne', sub: 'Chaque pièce avec son origine et son prix, les heures de main-d’œuvre.' },
      { n: '03', label: 'L’accord à distance', sub: 'Photo de la pièce usée, accord signé sur le téléphone, ici ou en France.' },
      { n: '04', label: 'Les pièces réservées', sub: 'Commandées avant que la voiture monte sur le pont.' },
      { n: '05', label: 'La restitution', sub: 'Ancienne pièce montrée. Facture = devis, plus les écarts acceptés.' },
      { n: '06', label: 'Le carnet', sub: 'Historique, garantie des pièces, rappel de la prochaine vidange.', accent: true },
    ], caption: 'Figure 1 · La méfiance envers les garages naît aux moments 02, 03 et 05 : un prix global au téléphone, un travail fait sans accord, une facture plus lourde que prévu. Écrire, photographier et faire signer règle les trois.', alt: 'Six moments : demande avec plaque, symptôme et vidéo ; devis par ligne avec origine et prix des pièces ; accord à distance avec photo de la pièce usée ; pièces réservées avant l’arrivée ; restitution avec ancienne pièce montrée et facture conforme ; carnet d’entretien avec historique, garantie et rappel.' },
    stack: { title: 'Ce qu’il faut construire : l’outil de l’atelier d’abord', layers: [
      { label: 'Côté client', items: [
        { name: 'Demande et devis', sub: 'arabe, français ; photos et vidéo ; sans compte' },
        { name: 'Accord et paiement', sub: 'signature sur téléphone ; acompte en dinars ou en euros' },
      ] },
      { label: 'Plateforme', items: [
        { name: 'Dossier véhicule', sub: 'plaque, châssis, kilométrage, tout l’historique' },
        { name: 'Pièces avec leur origine', sub: 'constructeur, équivalente, adaptable, occasion' },
        { name: 'Planning des ponts', sub: 'mécanicien, durée, voiture en attente de pièce' },
      ] },
      { label: 'Côté atelier', items: [
        { name: 'Tablette d’atelier', sub: 'photos avant et après, temps passés, travail en plus soumis au client', accent: true },
        { name: 'Stock et fournisseurs', sub: 'références, délais, prix d’achat' },
        { name: 'Caisse et facture', sub: 'acompte déduit, garantie imprimée' },
      ] },
      { label: 'Socle', items: [{ name: 'Serveur à votre nom, traçabilité', sub: 'sauvegardes quotidiennes ; un devis signé ne se modifie pas, il reçoit un avenant que le client accepte' }] },
    ], caption: 'Figure 2 · Le site de prise de rendez-vous ne vaut que ce que vaut l’atelier. Si les devis restent au téléphone et les pièces dans la tête du chef d’atelier, la plateforme promet des prix et des délais que personne ne tient.', alt: 'Quatre couches : côté client la demande, le devis, l’accord et le paiement ; la plateforme avec le dossier véhicule, les pièces avec leur origine et le planning des ponts ; côté atelier la tablette, le stock et la caisse ; un socle avec serveur à votre nom et traçabilité.' },
    atelier: { title: 'Quatre ponts, un mois : ce que coûte une voiture qui attend', items: [
      { value: '936', label: 'heures-pont par mois : 4 ponts × 9 h × 26 jours' },
      { value: '60 %', label: 'facturées si la voiture attend l’accord ou la pièce' },
      { value: '75 %', label: 'si l’accord arrive en photo et la pièce avant' },
      { value: '+ 140 h', label: 'facturables par mois, ≈ 280 000 DA à 2 000 DA l’heure', accent: true },
    ], caption: 'Figure 3 · Un exemple de calcul sur des hypothèses, pas une mesure du marché : 60 % et 75 % d’occupation facturée, 2 000 DA l’heure. Refaites-le avec vos chiffres. Le levier n’est pas d’embaucher : c’est qu’une voiture ne bloque plus un pont en attendant un coup de téléphone.', alt: 'Exemple de calcul : 936 heures-pont par mois pour quatre ponts ; 60 % facturées quand la voiture attend l’accord ou la pièce ; 75 % quand l’accord arrive en photo et la pièce est réservée avant ; environ 140 heures facturables en plus, soit 280 000 dinars par mois à 2 000 dinars l’heure.' },
    pieces: { title: 'L’origine des pièces : ce que le devis doit écrire', columns: ['Quand c’est raisonnable', 'Ce que le devis écrit'], rows: [
      { label: 'Pièce d’origine constructeur', cells: ['Sécurité, voiture récente ou sous garantie', 'Référence constructeur, prix, garantie'] },
      { label: 'Qualité équivalente (équipementier)', cells: ['Entretien courant : filtres, plaquettes', 'Marque de l’équipementier, référence'] },
      { label: 'Adaptable', cells: ['Pièce non critique, budget serré', '« Adaptable », marque, garantie réduite'] },
      { label: 'Occasion (casse)', cells: ['Carrosserie, pièce introuvable neuve', '« Occasion », provenance, photo de l’état'] },
      { label: 'Pièce de sécurité sans marque', cells: ['Jamais : freins, direction, pneus', 'Le garage refuse, et l’écrit'] },
    ], caption: 'Figure 4 · Ce n’est pas au logiciel de choisir la pièce : c’est au client, en connaissance de cause. La règle est que l’origine figure sur chaque ligne du devis et de la facture, et qu’une pièce de sécurité sans marque n’y figure jamais.', alt: 'Matrice de cinq origines de pièces : origine constructeur, qualité équivalente, adaptable, occasion, pièce de sécurité sans marque ; pour chacune, quand c’est raisonnable et ce que le devis doit écrire.' },
    models: { title: 'Quel modèle construire : ce qui rapporte, ce qui casse', columns: ['Ce qui rapporte', 'Ce qui casse'], rows: [
      { label: 'Un garage ou un réseau, son propre outil', cells: ['Devis acceptés plus vite, clients fidèles', 'Un atelier qui continue sur papier'] },
      { label: 'Logiciel par abonnement pour garages', cells: ['Un abonnement mensuel par atelier', 'Former chefs d’atelier et mécaniciens sur place'] },
      { label: 'Comparateur de garages (type iDGarages)', cells: ['Commission ou abonnement par rendez-vous', 'Prix affichés faux sans devis normalisé'] },
      { label: 'Vente de pièces en ligne (type Oscaro)', cells: ['Marge sur la pièce, livraison', 'Compatibilité des références, contrefaçon'] },
      { label: 'Entretien des flottes d’entreprise', cells: ['Contrats annuels, volume prévisible', 'Kilométrage et accords non suivis'] },
      { label: 'Mécanicien à domicile, dépannage', cells: ['Petites interventions, urgences', 'Planning et pièces tenus au téléphone'] },
    ], caption: 'Figure 5 · Les six modèles reposent sur le même socle : un dossier véhicule et un devis normalisé. Nous conseillons de commencer par la première ligne, puis de vendre l’outil à d’autres garages ; le comparateur vient quand les devis sont comparables.', alt: 'Matrice de six modèles : garage ou réseau avec son propre outil, logiciel par abonnement pour garages, comparateur de garages, vente de pièces en ligne, entretien des flottes d’entreprise, mécanicien à domicile ; pour chacun ce qui rapporte et ce qui casse.' },
  },
  en: {
    cover: { eyebrow: 'Series · Seen in France #10', title: ['Building the iDGarages', 'of Algeria', 'in 2027.'], subtitle: 'The itemised quote, remote approval, the origin of parts, the service book: what to build, and in what order.', left: { label: 'The quote', sub: 'approved from Algiers or from Lyon' }, right: { label: 'The workshop', sub: 'Algiers, Oran, Sétif, Constantine' }, note: 'France · Algeria · 2027' },
    journey: { title: 'A repair people can trust, in six moments', items: [
      { n: '01', label: 'The request', sub: 'Plate or chassis number, the symptom, a video of the noise.' },
      { n: '02', label: 'Itemised quote', sub: 'Each part with its origin and price, the labour hours.' },
      { n: '03', label: 'Remote approval', sub: 'Photo of the worn part, approval signed on a phone, here or in France.' },
      { n: '04', label: 'Parts reserved', sub: 'Ordered before the car goes up on the lift.' },
      { n: '05', label: 'Handover', sub: 'Old part shown. Invoice = quote, plus accepted changes.' },
      { n: '06', label: 'The service book', sub: 'History, parts warranty, reminder of the next oil change.', accent: true },
    ], caption: 'Figure 1 · Distrust of garages is born at moments 02, 03 and 05: a lump sum on the phone, work done without approval, an invoice heavier than expected. Writing, photographing and getting a signature settle all three.', alt: 'Six moments: request with plate, symptom and video; itemised quote with part origin and price; remote approval with a photo of the worn part; parts reserved before arrival; handover with the old part shown and a matching invoice; service book with history, warranty and reminder.' },
    stack: { title: 'What to build: the workshop’s tool first', layers: [
      { label: 'Customer side', items: [
        { name: 'Request and quote', sub: 'Arabic, French; photos and video; no account' },
        { name: 'Approval and payment', sub: 'signature on a phone; deposit in dinars or euros' },
      ] },
      { label: 'Platform', items: [
        { name: 'Vehicle file', sub: 'plate, chassis, mileage, the full history' },
        { name: 'Parts with their origin', sub: 'manufacturer, equivalent, aftermarket, used' },
        { name: 'Lift schedule', sub: 'mechanic, duration, car waiting for a part' },
      ] },
      { label: 'Workshop side', items: [
        { name: 'Workshop tablet', sub: 'before and after photos, time spent, extra work sent to the customer', accent: true },
        { name: 'Stock and suppliers', sub: 'references, lead times, purchase prices' },
        { name: 'Till and invoice', sub: 'deposit deducted, warranty printed' },
      ] },
      { label: 'Foundation', items: [{ name: 'Server in your name, traceability', sub: 'daily backups; a signed quote is never edited, it gets an amendment the customer accepts' }] },
    ], caption: 'Figure 2 · The booking site is only as good as the workshop. If quotes stay on the phone and parts in the foreman’s head, the platform promises prices and lead times nobody keeps.', alt: 'Four layers: customer side request, quote, approval and payment; platform with the vehicle file, parts with their origin and the lift schedule; workshop side tablet, stock and till; a foundation with a server in your name and traceability.' },
    atelier: { title: 'Four lifts, one month: what a waiting car costs', items: [
      { value: '936', label: 'lift-hours a month: 4 lifts × 9 h × 26 days' },
      { value: '60%', label: 'billed if the car waits for approval or a part' },
      { value: '75%', label: 'if approval comes by photo and the part comes first' },
      { value: '+140 h', label: 'billable a month, ≈ DA 280,000 at DA 2,000 an hour', accent: true },
    ], caption: 'Figure 3 · A worked example on assumptions, not a market measure: 60% and 75% billed occupancy, DA 2,000 an hour. Run it with your own numbers. The lever is not hiring: it is that a car no longer blocks a lift while waiting for a phone call.', alt: 'Worked example: 936 lift-hours a month for four lifts; 60% billed when the car waits for approval or a part; 75% when approval comes by photo and the part is reserved first; about 140 more billable hours, or 280,000 dinars a month at 2,000 dinars an hour.' },
    pieces: { title: 'The origin of parts: what the quote must say', columns: ['When it makes sense', 'What the quote says'], rows: [
      { label: 'Manufacturer original part', cells: ['Safety, recent car or under warranty', 'Manufacturer reference, price, warranty'] },
      { label: 'Equivalent quality (OE supplier)', cells: ['Routine service: filters, pads', 'Supplier brand, reference'] },
      { label: 'Aftermarket', cells: ['Non-critical part, tight budget', '"Aftermarket", brand, shorter warranty'] },
      { label: 'Used (salvage yard)', cells: ['Bodywork, part no longer sold new', '"Used", where from, photo of condition'] },
      { label: 'Unbranded safety part', cells: ['Never: brakes, steering, tyres', 'The garage refuses, in writing'] },
    ], caption: 'Figure 4 · It is not for the software to choose the part: it is for the customer, knowingly. The rule is that the origin appears on every line of the quote and the invoice, and that an unbranded safety part never does.', alt: 'Matrix of five part origins: manufacturer original, equivalent quality, aftermarket, used, unbranded safety part; for each, when it makes sense and what the quote must say.' },
    models: { title: 'Which model to build: what pays, what breaks', columns: ['What pays', 'What breaks'], rows: [
      { label: 'One garage or a network, its own tool', cells: ['Quotes accepted faster, loyal customers', 'A workshop that stays on paper'] },
      { label: 'Subscription software for garages', cells: ['A monthly subscription per workshop', 'Training foremen and mechanics on site'] },
      { label: 'Garage comparison site (iDGarages type)', cells: ['Commission or subscription per booking', 'False prices without a standard quote'] },
      { label: 'Online parts shop (Oscaro type)', cells: ['Margin on the part, delivery', 'Reference compatibility, counterfeits'] },
      { label: 'Company fleet maintenance', cells: ['Annual contracts, predictable volume', 'Mileage and approvals not tracked'] },
      { label: 'Mobile mechanic, breakdown', cells: ['Small jobs, emergencies', 'Schedule and parts kept on the phone'] },
    ], caption: 'Figure 5 · All six models stand on the same base: a vehicle file and a standard quote. We advise starting with the first row, then selling the tool to other garages; the comparison site comes once quotes are comparable.', alt: 'Matrix of six models: garage or network with its own tool, subscription software for garages, garage comparison site, online parts shop, company fleet maintenance, mobile mechanic; for each, what pays and what breaks.' },
  },
  ar: {
    cover: { eyebrow: 'سلسلة · رأيناه في فرنسا #10', title: ['إنشاء مقابل iDGarages', 'في الجزائر', 'سنة 2027.'], subtitle: 'الفاتورة التقديرية المفصّلة، الموافقة عن بُعد، مصدر القطع، دفتر الصيانة: ما يُبنى وبأي ترتيب.', left: { label: 'التقدير', sub: 'يُوافَق عليه من الجزائر أو من ليون' }, right: { label: 'الورشة', sub: 'الجزائر، وهران، سطيف، قسنطينة' }, note: 'فرنسا · الجزائر · 2027' },
    journey: { title: 'تصليح يبعث على الثقة في ست لحظات', items: [
      { n: '01', label: 'الطلب', sub: 'رقم اللوحة أو الهيكل، العَرَض، فيديو للصوت.' },
      { n: '02', label: 'تقدير مفصّل', sub: 'كل قطعة بمصدرها وسعرها، وساعات اليد العاملة.' },
      { n: '03', label: 'الموافقة عن بُعد', sub: 'صورة القطعة البالية، موافقة موقَّعة على الهاتف، هنا أو في فرنسا.' },
      { n: '04', label: 'القطع محجوزة', sub: 'تُطلب قبل أن تصعد السيارة إلى الرافعة.' },
      { n: '05', label: 'التسليم', sub: 'القطعة القديمة تُعرض. الفاتورة = التقدير مع الفروق المقبولة.' },
      { n: '06', label: 'الدفتر', sub: 'السجل، ضمان القطع، تذكير بتغيير الزيت القادم.', accent: true },
    ], caption: 'الشكل 1 · عدم الثقة في الورشات يولد في اللحظات 02 و03 و05: سعر إجمالي بالهاتف، عمل دون موافقة، فاتورة أثقل من المتوقع. الكتابة والتصوير والتوقيع تحلّ الثلاثة.', alt: 'ست لحظات: طلب برقم اللوحة والعرض وفيديو؛ تقدير مفصّل بمصدر القطع وسعرها؛ موافقة عن بعد بصورة القطعة البالية؛ قطع محجوزة قبل الوصول؛ تسليم مع عرض القطعة القديمة وفاتورة مطابقة؛ دفتر صيانة بالسجل والضمان والتذكير.' },
    stack: { title: 'ما يجب بناؤه: أداة الورشة أولاً', layers: [
      { label: 'جهة الزبون', items: [
        { name: 'الطلب والتقدير', sub: 'بالعربية والفرنسية؛ صور وفيديو؛ دون حساب' },
        { name: 'الموافقة والدفع', sub: 'توقيع على الهاتف؛ عربون بالدينار أو اليورو' },
      ] },
      { label: 'المنصة', items: [
        { name: 'ملف السيارة', sub: 'اللوحة، الهيكل، الكيلومترات، كل السجل' },
        { name: 'القطع بمصدرها', sub: 'أصلية، مكافئة، متكيّفة، مستعملة' },
        { name: 'جدول الرافعات', sub: 'الميكانيكي، المدة، سيارة تنتظر قطعة' },
      ] },
      { label: 'جهة الورشة', items: [
        { name: 'لوحة الورشة', sub: 'صور قبل وبعد، الوقت المستغرق، أي عمل إضافي يُعرض على الزبون', accent: true },
        { name: 'المخزون والموردون', sub: 'المراجع، الآجال، أسعار الشراء' },
        { name: 'الصندوق والفاتورة', sub: 'خصم العربون، ضمان مطبوع' },
      ] },
      { label: 'القاعدة', items: [{ name: 'خادم باسمك وتتبّع', sub: 'نسخ احتياطي يومي؛ التقدير الموقَّع لا يُعدَّل بل يُضاف إليه ملحق يقبله الزبون' }] },
    ], caption: 'الشكل 2 · موقع حجز المواعيد لا يساوي أكثر من الورشة. إذا بقيت التقديرات بالهاتف والقطع في ذاكرة رئيس الورشة، تعد المنصة بأسعار وآجال لا يحترمها أحد.', alt: 'أربع طبقات: جهة الزبون بالطلب والتقدير والموافقة والدفع؛ المنصة بملف السيارة والقطع بمصدرها وجدول الرافعات؛ جهة الورشة باللوحة والمخزون والصندوق؛ قاعدة بخادم باسمك وتتبّع.' },
    atelier: { title: 'أربع رافعات وشهر واحد: كم تكلّف سيارة تنتظر', items: [
      { value: '936', label: 'ساعة-رافعة شهرياً: 4 رافعات × 9 س × 26 يوماً' },
      { value: '60 %', label: 'مفوترة إذا انتظرت السيارة الموافقة أو القطعة' },
      { value: '75 %', label: 'إذا جاءت الموافقة بالصورة والقطعة قبلها' },
      { value: '+ 140 س', label: 'قابلة للفوترة شهرياً، نحو 280 000 دج', accent: true },
    ], caption: 'الشكل 3 · مثال حساب على فرضيات وليس قياساً للسوق: 60 % و75 % من الإشغال المفوتر، و2 000 دج للساعة. أعد الحساب بأرقامك. الرافعة ليست التوظيف، بل ألا تحجز سيارة رافعةً وهي تنتظر مكالمة.', alt: 'مثال حساب: 936 ساعة-رافعة شهرياً لأربع رافعات؛ 60 % مفوترة عندما تنتظر السيارة الموافقة أو القطعة؛ 75 % عندما تأتي الموافقة بالصورة وتُحجز القطعة مسبقاً؛ نحو 140 ساعة إضافية أي 280 000 دينار شهرياً بـ2 000 دينار للساعة.' },
    pieces: { title: 'مصدر القطع: ما يجب أن يكتبه التقدير', columns: ['متى يكون معقولاً', 'ما يكتبه التقدير'], rows: [
      { label: 'قطعة أصلية من الصانع', cells: ['السلامة، سيارة حديثة أو تحت الضمان', 'مرجع الصانع، السعر، الضمان'] },
      { label: 'جودة مكافئة (مورّد الصانع)', cells: ['الصيانة العادية: المصافي، الوسائد', 'علامة المورّد، المرجع'] },
      { label: 'قطعة متكيّفة', cells: ['قطعة غير حرجة، ميزانية محدودة', '«متكيّفة»، العلامة، ضمان أقصر'] },
      { label: 'مستعملة (من التفكيك)', cells: ['الهيكل، قطعة لم تعد تُباع جديدة', '«مستعملة»، المصدر، صورة الحالة'] },
      { label: 'قطعة سلامة دون علامة', cells: ['أبداً: الفرامل، المقود، العجلات', 'الورشة ترفض وتكتب ذلك'] },
    ], caption: 'الشكل 4 · ليس على البرنامج أن يختار القطعة، بل على الزبون عن بيّنة. القاعدة أن يظهر المصدر في كل سطر من التقدير والفاتورة، وألا تظهر فيهما أبداً قطعة سلامة دون علامة.', alt: 'مصفوفة خمسة مصادر للقطع: أصلية من الصانع، جودة مكافئة، متكيّفة، مستعملة، قطعة سلامة دون علامة؛ ولكل منها متى يكون معقولاً وما يجب أن يكتبه التقدير.' },
    models: { title: 'أي نموذج تبني: ما يربح وما ينكسر', columns: ['ما يربح', 'ما ينكسر'], rows: [
      { label: 'ورشة أو شبكة بأداتها الخاصة', cells: ['تقديرات تُقبل أسرع، زبائن أوفياء', 'ورشة تبقى على الورق'] },
      { label: 'برنامج باشتراك للورشات', cells: ['اشتراك شهري لكل ورشة', 'تكوين رؤساء الورشات والميكانيكيين في عين المكان'] },
      { label: 'مقارن ورشات (نوع iDGarages)', cells: ['عمولة أو اشتراك لكل موعد', 'أسعار معروضة خاطئة دون تقدير موحَّد'] },
      { label: 'بيع القطع عبر الإنترنت (نوع Oscaro)', cells: ['هامش على القطعة، التوصيل', 'توافق المراجع، التقليد'] },
      { label: 'صيانة أساطيل المؤسسات', cells: ['عقود سنوية، حجم متوقَّع', 'الكيلومترات والموافقات دون متابعة'] },
      { label: 'ميكانيكي متنقل، إغاثة', cells: ['تدخلات صغيرة، طوارئ', 'الجدول والقطع على الهاتف'] },
    ], caption: 'الشكل 5 · النماذج الستة تقوم على القاعدة نفسها: ملف سيارة وتقدير موحَّد. ننصح بالبدء بالسطر الأول، ثم بيع الأداة لورشات أخرى؛ والمقارن يأتي عندما تصبح التقديرات قابلة للمقارنة.', alt: 'مصفوفة ستة نماذج: ورشة أو شبكة بأداتها الخاصة، برنامج باشتراك للورشات، مقارن ورشات، بيع القطع عبر الإنترنت، صيانة أساطيل المؤسسات، ميكانيكي متنقل؛ ولكل منها ما يربح وما ينكسر.' },
  },
};

export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      journey: { svg: steps({ title: t.journey.title, steps: t.journey.items, arrows: true, rtl }), caption: t.journey.caption, alt: t.journey.alt },
      stack: { svg: layers({ title: t.stack.title, layers: t.stack.layers, rtl }), caption: t.stack.caption, alt: t.stack.alt },
      atelier: { svg: stats({ title: t.atelier.title, items: t.atelier.items, rtl }), caption: t.atelier.caption, alt: t.atelier.alt },
      pieces: { svg: matrix({ title: t.pieces.title, columns: t.pieces.columns, rows: t.pieces.rows, rtl }), caption: t.pieces.caption, alt: t.pieces.alt },
      models: { svg: matrix({ title: t.models.title, columns: t.models.columns, rows: t.models.rows, rtl }), caption: t.models.caption, alt: t.models.alt },
    },
  };
}
