import { cover, steps, layers, matrix, timeline, stats } from '../../lib/visuals/index.mjs';
export const slug = 'caisse-commerce-algerie-2027-paiement-qr-code-carte-tpe-rapprochement';
const T = {
  fr: {
    cover: { eyebrow: 'Commerces · Paiement · 2027', title: ['Encaisser par QR,', 'carte et espèces', 'en 2027.'], subtitle: 'Chaque paiement lié à sa vente, aucune capture d’écran acceptée, la journée close par mode en dix minutes.', left: { label: 'Le client', sub: 'espèces, carte, QR, bientôt téléphone' }, right: { label: 'La caisse', sub: 'supérettes, boutiques, cafés, chaînes' }, note: 'Algérie · 2027' },
    journey: { title: 'Une vente bien encaissée, en six moments', items: [
      { n: '01', label: 'La vente', sub: 'Articles scannés, total, mode de paiement choisi.' },
      { n: '02', label: 'Le QR de la vente', sub: 'Montant et référence de ce ticket, rien d’autre.' },
      { n: '03', label: 'La confirmation', sub: 'Venue de la banque, pas d’une capture d’écran.' },
      { n: '04', label: 'Carte au terminal', sub: 'Montant envoyé ou recopié, ticket rattaché.' },
      { n: '05', label: 'Espèces et crédit', sub: 'Monnaie rendue, carnet client numérique.' },
      { n: '06', label: 'La clôture', sub: 'Par mode : espèces, carte, QR, crédit ; écarts.', accent: true },
    ], caption: 'Figure 1 · Le moment qui décide de tout est le 03. Une capture d’écran se fabrique en une minute ; seule la confirmation reçue par la caisse ou lue dans l’application de la banque du commerçant prouve que l’argent est arrivé. Sans elle, la clôture du soir ne peut pas tomber juste.', alt: 'Six moments : la vente avec le mode de paiement choisi ; le QR propre à la vente avec montant et référence ; la confirmation venue de la banque et non d’une capture d’écran ; la carte au terminal avec le ticket rattaché ; les espèces et le crédit client ; la clôture par mode de paiement avec les écarts.' },
    stack: { title: 'Ce qu’il faut construire : le rapprochement d’abord', layers: [
      { label: 'Client', items: [
        { name: 'QR à scanner', sub: 'montant et référence de la vente' },
        { name: 'Reçu', sub: 'imprimé ou par SMS, avec le mode de paiement' },
      ] },
      { label: 'La caisse', items: [
        { name: 'Encaissement multi-mode', sub: 'espèces, carte, QR, crédit, paiement partagé' },
        { name: 'Rapprochement', sub: 'chaque paiement lié à une vente, écarts signalés', accent: true },
        { name: 'Crédit client', sub: 'carnet numérique, rappels, plafonds' },
      ] },
      { label: 'Banque et terminaux', items: [
        { name: 'Terminal de paiement', sub: 'carte CIB ou Edahabia, ticket de la banque' },
        { name: 'Paiement mobile', sub: 'QR de la banque ; téléphone-terminal annoncé' },
      ] },
      { label: 'Socle', items: [{ name: 'Tableau du gérant, données à votre nom', sub: 'journée par mode, par caissier, par magasin ; consultable à distance' }] },
    ], caption: 'Figure 2 · La caisse ne remplace ni la banque ni le terminal : elle relie. Selon ce que votre banque propose, la confirmation d’un paiement QR arrive directement dans la caisse ou se lit dans l’application commerçant ; dans les deux cas, la vente ne se ferme qu’une fois le paiement vu.', alt: 'Quatre couches : le client avec le QR à scanner et le reçu ; la caisse avec l’encaissement multi-mode, le rapprochement des paiements et le crédit client ; la banque et les terminaux avec le terminal de paiement et le paiement mobile ; le socle avec le tableau du gérant et les données au nom du commerçant.' },
    pointage: { title: 'Une supérette en 2027 : le temps passé à pointer les paiements', items: [
      { value: '300', label: 'ventes par jour (hypothèse)' },
      { value: '75', label: 'payées par carte ou QR : 25 % (hypothèse)' },
      { value: '75', label: 'minutes par jour à les pointer à la main, une par paiement' },
      { value: '30', label: 'heures par mois rendues au gérant avec le rapprochement', accent: true },
    ], caption: 'Figure 3 · Un calcul sur des hypothèses, pas une mesure : 300 ventes par jour, un quart payées par carte ou QR, une minute pour vérifier chaque paiement dans l’application de la banque, 24 jours d’ouverture. Plus la part électronique grandit, plus le pointage à la main coûte cher, et plus une fausse capture a de chances de passer.', alt: 'Exemple de calcul pour une supérette : 300 ventes par jour ; 75 payées par carte ou QR, soit 25 % ; 75 minutes par jour pour les pointer à la main à une minute chacune ; 30 heures par mois rendues au gérant avec le rapprochement automatique. Les taux sont des hypothèses.' },
    erreurs: { title: 'Six erreurs de caisse, six parades', columns: ['Comment ça se passe', 'La parade dans la caisse'], rows: [
      { label: 'Capture d’écran falsifiée', cells: ['« J’ai payé », image à l’appui', 'Vente close seulement sur confirmation'] },
      { label: 'Montant faux au terminal', cells: ['1 500 tapé 150, ou l’inverse', 'Montant envoyé ou contrôlé contre le ticket'] },
      { label: 'QR non rattaché', cells: ['Argent reçu, vente introuvable', 'QR propre à chaque ticket, avec référence'] },
      { label: 'Double encaissement', cells: ['QR « échoué », espèces, puis QR passé', 'Paiement en attente visible, remboursement tracé'] },
      { label: 'Crédit oublié', cells: ['« Je paie demain », jamais noté', 'Carnet numérique, plafond, rappel'] },
      { label: 'Remboursement sans trace', cells: ['Retour d’article payé en espèces', 'Retour lié à la vente et au mode initial'] },
    ], caption: 'Figure 4 · Ces erreurs existaient avec les espèces ; les paiements électroniques en ajoutent qui ne se voient pas au tiroir. La règle qui en évite la moitié : aucune vente ne se ferme sur la parole du client, seulement sur ce que la caisse ou la banque a vu.', alt: 'Matrice de six erreurs : capture d’écran falsifiée, montant faux au terminal, paiement QR non rattaché, double encaissement, crédit oublié, remboursement sans trace ; pour chacune, comment ça se passe et la parade dans la caisse.' },
    saison: { title: 'De novembre 2026 à l’après-Ramadan 2027, en semaines', unit: 'semaines', items: [
      { label: 'Cadrage, articles, modes', note: 'catalogue, prix, offre de la banque', from: 0, to: 3 },
      { label: 'Caisse multi-mode', note: 'espèces, carte, QR, crédit', from: 2, to: 7 },
      { label: 'Liaison terminal et QR', note: 'selon ce que la banque propose', from: 5, to: 10 },
      { label: 'Pilote : une caisse', note: 'clôtures comparées chaque soir', from: 8, to: 12 },
      { label: 'Ramadan : pic de ventes', note: 'files, soirées, paiements partagés', from: 13, to: 18 },
      { label: 'Tous les postes, gérant', note: 'tableau par magasin, à distance', from: 18, to: 24, accent: true },
    ], caption: 'Figure 5 · Semaine 0 = début novembre 2026. Le Ramadan, attendu vers le 8 février 2027, est le pic de l’année pour beaucoup de commerces d’alimentation : la caisse doit y arriver rodée, après un pilote où chaque clôture du soir a été comparée à l’ancienne méthode.', alt: 'Calendrier en semaines : cadrage, articles et modes de paiement de 0 à 3 ; caisse multi-mode de 2 à 7 ; liaison avec le terminal et le QR de 5 à 10 ; pilote sur une caisse de 8 à 12 ; Ramadan, pic de ventes, de 13 à 18 ; tous les postes et tableau du gérant de 18 à 24.' },
    models: { title: 'Quel modèle construire : ce qui rapporte, ce qui casse', columns: ['Ce qui rapporte', 'Ce qui casse'], rows: [
      { label: 'Un commerce, sa caisse', cells: ['Journée close juste, en dix minutes', 'Mode de paiement mal saisi'] },
      { label: 'Chaîne de magasins', cells: ['Chiffres par magasin, à distance', 'Articles et prix à synchroniser'] },
      { label: 'Caisse en SaaS pour commerçants', cells: ['Abonnement par poste', 'Support, matériel, formation'] },
      { label: 'Paiement QR à la livraison', cells: ['Moins d’espèces chez les livreurs', 'Confirmation à la porte, sans réseau'] },
      { label: 'Cafés et restauration rapide', cells: ['Encaissement rapide aux heures de pointe', 'File si la confirmation tarde'] },
      { label: 'Marchés, vente ambulante', cells: ['Le téléphone devient terminal', 'Déploiement annoncé, à confirmer'] },
    ], caption: 'Figure 6 · Les six modèles reposent sur la même règle : un paiement vu, lié à une vente, compté dans la bonne colonne. Nous conseillons de commencer par un magasin et une caisse, de comparer les clôtures pendant un mois, puis d’étendre.', alt: 'Matrice de six modèles : un commerce avec sa caisse, une chaîne de magasins, une caisse en SaaS, le paiement QR à la livraison, les cafés et la restauration rapide, les marchés et la vente ambulante ; pour chacun, ce qui rapporte et ce qui casse.' },
  },
  en: {
    cover: { eyebrow: 'Retail · Payments · 2027', title: ['Taking QR, card', 'and cash payments', 'in 2027.'], subtitle: 'Every payment tied to its sale, no screenshot accepted, the day closed by payment type in ten minutes.', left: { label: 'The customer', sub: 'cash, card, QR, soon phone' }, right: { label: 'The till', sub: 'grocers, shops, cafés, chains' }, note: 'Algeria · 2027' },
    journey: { title: 'A properly paid sale, in six moments', items: [
      { n: '01', label: 'The sale', sub: 'Items scanned, total, payment type chosen.' },
      { n: '02', label: 'The sale’s QR', sub: 'Amount and reference of this receipt, nothing else.' },
      { n: '03', label: 'Confirmation', sub: 'From the bank, not from a screenshot.' },
      { n: '04', label: 'Card at the terminal', sub: 'Amount sent or keyed, receipt attached.' },
      { n: '05', label: 'Cash and credit', sub: 'Change given, digital customer tab.' },
      { n: '06', label: 'Closing', sub: 'By type: cash, card, QR, credit; gaps.', accent: true },
    ], caption: 'Figure 1 · The moment that decides everything is 03. A screenshot can be faked in a minute; only the confirmation received by the till or read in the merchant’s own banking app proves the money arrived. Without it, the evening close cannot balance.', alt: 'Six moments: the sale with the payment type chosen; a QR specific to the sale with amount and reference; confirmation from the bank, not a screenshot; card at the terminal with the receipt attached; cash and customer credit; closing by payment type with gaps.' },
    stack: { title: 'What to build: reconciliation first', layers: [
      { label: 'Customer', items: [
        { name: 'QR to scan', sub: 'amount and reference of the sale' },
        { name: 'Receipt', sub: 'printed or by SMS, with the payment type' },
      ] },
      { label: 'The till', items: [
        { name: 'Multi-type checkout', sub: 'cash, card, QR, credit, split payment' },
        { name: 'Reconciliation', sub: 'every payment tied to a sale, gaps flagged', accent: true },
        { name: 'Customer credit', sub: 'digital tab, reminders, limits' },
      ] },
      { label: 'Bank and terminals', items: [
        { name: 'Payment terminal', sub: 'CIB or Edahabia card, bank receipt' },
        { name: 'Mobile payment', sub: 'bank QR; phone-as-terminal announced' },
      ] },
      { label: 'Foundation', items: [{ name: 'Manager dashboard, data in your name', sub: 'day by payment type, cashier, shop; viewable remotely' }] },
    ], caption: 'Figure 2 · The till replaces neither the bank nor the terminal: it connects them. Depending on what your bank offers, a QR payment confirmation arrives directly in the till or is read in the merchant app; either way, the sale only closes once the payment has been seen.', alt: 'Four layers: the customer with the QR to scan and the receipt; the till with multi-type checkout, payment reconciliation and customer credit; the bank and terminals with the payment terminal and mobile payment; the foundation with the manager dashboard and data in the merchant’s name.' },
    pointage: { title: 'A grocery store in 2027: time spent checking payments', items: [
      { value: '300', label: 'sales a day (assumption)' },
      { value: '75', label: 'paid by card or QR: 25% (assumption)' },
      { value: '75', label: 'minutes a day checking them by hand, one each' },
      { value: '30', label: 'hours a month given back to the manager', accent: true },
    ], caption: 'Figure 3 · A calculation on assumptions, not a measurement: 300 sales a day, a quarter paid by card or QR, one minute to check each payment in the banking app, 24 trading days. The larger the electronic share, the more manual checking costs, and the better the odds that a fake screenshot slips through.', alt: 'Worked example for a grocery store: 300 sales a day; 75 paid by card or QR, 25%; 75 minutes a day checking them by hand at one minute each; 30 hours a month given back to the manager with automatic reconciliation. The rates are assumptions.' },
    erreurs: { title: 'Six till errors, six counters', columns: ['How it happens', 'The counter in the till'], rows: [
      { label: 'Faked screenshot', cells: ['“I paid”, with a picture to prove it', 'Sale closed only on confirmation'] },
      { label: 'Wrong amount at the terminal', cells: ['1,500 keyed as 150, or the reverse', 'Amount sent or checked against the receipt'] },
      { label: 'Unmatched QR payment', cells: ['Money received, sale not found', 'A QR per receipt, with a reference'] },
      { label: 'Paid twice', cells: ['QR “failed”, cash, then QR goes through', 'Pending payment shown, refund traced'] },
      { label: 'Forgotten credit', cells: ['“I’ll pay tomorrow”, never noted', 'Digital tab, limit, reminder'] },
      { label: 'Untraced refund', cells: ['Returned item refunded in cash', 'Return tied to the sale and original type'] },
    ], caption: 'Figure 4 · These errors existed with cash; electronic payments add some that do not show in the drawer. The rule that prevents half of them: no sale closes on the customer’s word, only on what the till or the bank has seen.', alt: 'Matrix of six errors: faked screenshot, wrong amount at the terminal, unmatched QR payment, paid twice, forgotten credit, untraced refund; for each, how it happens and the counter in the till.' },
    saison: { title: 'From November 2026 to after Ramadan 2027, in weeks', unit: 'weeks', items: [
      { label: 'Scoping, items, types', note: 'catalogue, prices, bank’s offer', from: 0, to: 3 },
      { label: 'Multi-type till', note: 'cash, card, QR, credit', from: 2, to: 7 },
      { label: 'Terminal and QR link', note: 'depending on what the bank offers', from: 5, to: 10 },
      { label: 'Pilot: one till', note: 'closes compared every evening', from: 8, to: 12 },
      { label: 'Ramadan: sales peak', note: 'queues, evenings, split payments', from: 13, to: 18 },
      { label: 'All tills, manager', note: 'dashboard per shop, remotely', from: 18, to: 24, accent: true },
    ], caption: 'Figure 5 · Week 0 = early November 2026. Ramadan, expected around 8 February 2027, is the peak of the year for many food retailers: the till has to arrive run in, after a pilot in which every evening close was compared with the old method.', alt: 'Calendar in weeks: scoping, items and payment types from 0 to 3; multi-type till from 2 to 7; terminal and QR link from 5 to 10; pilot on one till from 8 to 12; Ramadan sales peak from 13 to 18; all tills and the manager dashboard from 18 to 24.' },
    models: { title: 'Which model to build: what pays, what breaks', columns: ['What pays', 'What breaks'], rows: [
      { label: 'One shop, its own till', cells: ['Day closed right, in ten minutes', 'Payment type entered wrongly'] },
      { label: 'Chain of shops', cells: ['Figures per shop, remotely', 'Items and prices to sync'] },
      { label: 'Till as SaaS for retailers', cells: ['Subscription per till', 'Support, hardware, training'] },
      { label: 'QR payment on delivery', cells: ['Less cash held by couriers', 'Confirmation at the door, offline'] },
      { label: 'Cafés and fast food', cells: ['Fast checkout at peak times', 'Queues if confirmation is slow'] },
      { label: 'Markets, street vendors', cells: ['The phone becomes the terminal', 'Rollout announced, to confirm'] },
    ], caption: 'Figure 6 · All six models rest on the same rule: a payment seen, tied to a sale, counted in the right column. We advise starting with one shop and one till, comparing closes for a month, then extending.', alt: 'Matrix of six models: one shop with its till, a chain of shops, a till as SaaS, QR payment on delivery, cafés and fast food, markets and street vendors; for each, what pays and what breaks.' },
  },
  ar: {
    cover: { eyebrow: 'التجارة · الدفع · 2027', title: ['التحصيل بالـQR', 'والبطاقة والنقد', 'سنة 2027.'], subtitle: 'كل دفعة مربوطة ببيعها، لا تُقبل أي لقطة شاشة، واليوم يُغلق حسب طريقة الدفع في عشر دقائق.', left: { label: 'الزبون', sub: 'نقد، بطاقة، QR، وقريباً الهاتف' }, right: { label: 'الصندوق', sub: 'محلات، متاجر، مقاهٍ، سلاسل' }, note: 'الجزائر · 2027' },
    journey: { title: 'بيع محصَّل كما يجب، في ست لحظات', items: [
      { n: '01', label: 'البيع', sub: 'السلع ممسوحة، المجموع، طريقة الدفع مختارة.' },
      { n: '02', label: 'رمز QR للبيع', sub: 'مبلغ هذه التذكرة ومرجعها، لا غير.' },
      { n: '03', label: 'التأكيد', sub: 'من البنك، لا من لقطة شاشة.' },
      { n: '04', label: 'البطاقة في الجهاز', sub: 'المبلغ يُرسل أو يُنسخ، والتذكرة مربوطة.' },
      { n: '05', label: 'النقد والكريدي', sub: 'الباقي يُرجع، دفتر زبون رقمي.' },
      { n: '06', label: 'الإغلاق', sub: 'حسب الطريقة: نقد، بطاقة، QR، كريدي؛ الفوارق.', accent: true },
    ], caption: 'الشكل 1 · اللحظة التي تحسم كل شيء هي 03. لقطة الشاشة تُزوَّر في دقيقة؛ وحده التأكيد الذي يصل إلى الصندوق أو يُقرأ في تطبيق بنك التاجر يثبت أن المال وصل. ودونه لا يمكن أن يستقيم إغلاق المساء.', alt: 'ست لحظات: البيع مع اختيار طريقة الدفع؛ رمز QR خاص بالبيع بمبلغه ومرجعه؛ التأكيد من البنك لا من لقطة شاشة؛ البطاقة في الجهاز مع ربط التذكرة؛ النقد والكريدي؛ الإغلاق حسب طريقة الدفع مع الفوارق.' },
    stack: { title: 'ما يجب بناؤه: المطابقة أولاً', layers: [
      { label: 'الزبون', items: [
        { name: 'رمز QR للمسح', sub: 'مبلغ البيع ومرجعه' },
        { name: 'الوصل', sub: 'مطبوع أو برسالة قصيرة، مع طريقة الدفع' },
      ] },
      { label: 'الصندوق', items: [
        { name: 'تحصيل متعدد الطرق', sub: 'نقد، بطاقة، QR، كريدي، دفع مقسَّم' },
        { name: 'المطابقة', sub: 'كل دفعة مربوطة ببيع، والفوارق تُنبَّه', accent: true },
        { name: 'كريدي الزبائن', sub: 'دفتر رقمي، تذكير، سقف' },
      ] },
      { label: 'البنك والأجهزة', items: [
        { name: 'جهاز الدفع', sub: 'بطاقة CIB أو الذهبية، وصل البنك' },
        { name: 'الدفع بالهاتف', sub: 'QR البنك؛ الهاتف كجهاز دفع معلن' },
      ] },
      { label: 'القاعدة', items: [{ name: 'لوحة المسيّر، والبيانات باسمك', sub: 'اليوم حسب الطريقة والصندوقي والمحل؛ تُتابع عن بُعد' }] },
    ], caption: 'الشكل 2 · الصندوق لا يعوّض البنك ولا الجهاز: إنه يربط بينهما. وحسب ما يقدّمه بنكك، يصل تأكيد الدفع بالـQR مباشرة إلى الصندوق أو يُقرأ في تطبيق التاجر؛ وفي الحالتين لا يُغلق البيع إلا بعد رؤية الدفعة.', alt: 'أربع طبقات: الزبون برمز QR للمسح والوصل؛ الصندوق بالتحصيل متعدد الطرق ومطابقة المدفوعات وكريدي الزبائن؛ البنك والأجهزة بجهاز الدفع والدفع بالهاتف؛ القاعدة بلوحة المسيّر والبيانات باسم التاجر.' },
    pointage: { title: 'محل مواد غذائية سنة 2027: الوقت الضائع في مراجعة المدفوعات', items: [
      { value: '300', label: 'بيعة في اليوم (فرضية)' },
      { value: '75', label: 'مدفوعة بالبطاقة أو QR: 25 % (فرضية)' },
      { value: '75', label: 'دقيقة يومياً لمراجعتها يدوياً، دقيقة لكل دفعة' },
      { value: '30', label: 'ساعة في الشهر تُعاد للمسيّر مع المطابقة', accent: true },
    ], caption: 'الشكل 3 · حساب مبني على فرضيات لا على قياس: 300 بيعة في اليوم، ربعها بالبطاقة أو QR، دقيقة للتحقق من كل دفعة في تطبيق البنك، و24 يوم عمل. كلما كبرت الحصة الإلكترونية زادت كلفة المراجعة اليدوية، وزادت فرص مرور لقطة مزوَّرة.', alt: 'مثال حساب لمحل مواد غذائية: 300 بيعة يومياً؛ 75 منها بالبطاقة أو QR، أي 25 %؛ 75 دقيقة يومياً لمراجعتها يدوياً بدقيقة لكل منها؛ 30 ساعة شهرياً تُعاد للمسيّر مع المطابقة الآلية. النسب فرضيات.' },
    erreurs: { title: 'ستة أخطاء صندوق وستة ردود', columns: ['كيف يحدث', 'الرد في الصندوق'], rows: [
      { label: 'لقطة شاشة مزوَّرة', cells: ['«دفعت»، والصورة دليلاً', 'البيع لا يُغلق إلا بالتأكيد'] },
      { label: 'مبلغ خاطئ في الجهاز', cells: ['1500 كُتب 150، أو العكس', 'المبلغ يُرسل أو يُراقب مقابل التذكرة'] },
      { label: 'QR غير مربوط', cells: ['المال وصل والبيع مفقود', 'رمز QR لكل تذكرة، بمرجع'] },
      { label: 'تحصيل مزدوج', cells: ['QR «فشل»، نقد، ثم مرّ الـQR', 'دفعة معلّقة ظاهرة، استرجاع متتبَّع'] },
      { label: 'كريدي منسي', cells: ['«أدفع غداً»، ولا يُسجَّل', 'دفتر رقمي، سقف، تذكير'] },
      { label: 'استرجاع بلا أثر', cells: ['سلعة مرتجعة تُرد نقداً', 'الإرجاع مربوط بالبيع وطريقته الأصلية'] },
    ], caption: 'الشكل 4 · هذه الأخطاء كانت موجودة مع النقد؛ والمدفوعات الإلكترونية تضيف أخطاء لا تظهر في الدرج. القاعدة التي تمنع نصفها: لا يُغلق أي بيع بكلام الزبون، بل بما رآه الصندوق أو البنك.', alt: 'مصفوفة ستة أخطاء: لقطة شاشة مزوَّرة، مبلغ خاطئ في الجهاز، دفع QR غير مربوط، تحصيل مزدوج، كريدي منسي، استرجاع بلا أثر؛ ولكل منها كيف يحدث والرد في الصندوق.' },
    saison: { title: 'من نوفمبر 2026 إلى ما بعد رمضان 2027، بالأسابيع', unit: 'أسابيع', items: [
      { label: 'التأطير، السلع، الطرق', note: 'الكتالوج، الأسعار، عرض البنك', from: 0, to: 3 },
      { label: 'صندوق متعدد الطرق', note: 'نقد، بطاقة، QR، كريدي', from: 2, to: 7 },
      { label: 'ربط الجهاز والـQR', note: 'حسب ما يقدّمه البنك', from: 5, to: 10 },
      { label: 'تجربة: صندوق واحد', note: 'مقارنة الإغلاق كل مساء', from: 8, to: 12 },
      { label: 'رمضان: ذروة المبيعات', note: 'طوابير، سهرات، دفع مقسَّم', from: 13, to: 18 },
      { label: 'كل الصناديق، المسيّر', note: 'لوحة لكل محل، عن بُعد', from: 18, to: 24, accent: true },
    ], caption: 'الشكل 5 · الأسبوع 0 = بداية نوفمبر 2026. رمضان، المنتظر نحو 8 فيفري 2027، ذروة السنة لكثير من محلات المواد الغذائية: يجب أن يصله الصندوق مجرَّباً، بعد تجربة قورن فيها كل إغلاق مسائي بالطريقة القديمة.', alt: 'جدول بالأسابيع: التأطير والسلع وطرق الدفع من 0 إلى 3؛ الصندوق متعدد الطرق من 2 إلى 7؛ ربط الجهاز والـQR من 5 إلى 10؛ تجربة على صندوق واحد من 8 إلى 12؛ رمضان، ذروة المبيعات، من 13 إلى 18؛ كل الصناديق ولوحة المسيّر من 18 إلى 24.' },
    models: { title: 'أي نموذج تبني: ما يُدرّ، وما ينكسر', columns: ['ما يُدرّ', 'ما ينكسر'], rows: [
      { label: 'محل واحد وصندوقه', cells: ['يوم يُغلق صحيحاً في عشر دقائق', 'طريقة دفع تُسجَّل خطأً'] },
      { label: 'سلسلة محلات', cells: ['أرقام لكل محل، عن بُعد', 'سلع وأسعار يجب مزامنتها'] },
      { label: 'صندوق بالاشتراك للتجار', cells: ['اشتراك لكل صندوق', 'الدعم، العتاد، التكوين'] },
      { label: 'الدفع بالـQR عند التسليم', cells: ['نقد أقل عند الموزّعين', 'التأكيد عند الباب، دون شبكة'] },
      { label: 'مقاهٍ ووجبات سريعة', cells: ['تحصيل سريع في ساعات الذروة', 'طابور إذا تأخر التأكيد'] },
      { label: 'الأسواق والباعة المتجوّلون', cells: ['الهاتف يصير جهاز دفع', 'نشر معلن، يُنتظر تأكيده'] },
    ], caption: 'الشكل 6 · النماذج الستة تقوم على القاعدة نفسها: دفعة مرئية، مربوطة ببيع، محسوبة في العمود الصحيح. ننصح بالبدء بمحل واحد وصندوق واحد، ومقارنة الإغلاقات شهراً، ثم التوسيع.', alt: 'مصفوفة ستة نماذج: محل بصندوقه، سلسلة محلات، صندوق بالاشتراك، الدفع بالـQR عند التسليم، المقاهي والوجبات السريعة، الأسواق والباعة المتجوّلون؛ ولكل منها ما يُدرّ وما ينكسر.' },
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
      pointage: { svg: stats({ title: t.pointage.title, items: t.pointage.items, rtl }), caption: t.pointage.caption, alt: t.pointage.alt },
      erreurs: { svg: matrix({ title: t.erreurs.title, columns: t.erreurs.columns, rows: t.erreurs.rows, rtl }), caption: t.erreurs.caption, alt: t.erreurs.alt },
      saison: { svg: timeline({ title: t.saison.title, items: t.saison.items, total: 24, tick: 4, unit: t.saison.unit, rtl }), caption: t.saison.caption, alt: t.saison.alt },
      models: { svg: matrix({ title: t.models.title, columns: t.models.columns, rows: t.models.rows, rtl }), caption: t.models.caption, alt: t.models.alt },
    },
  };
}
