import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';

export const slug = 'gerer-son-commerce-en-algerie-depuis-la-france-2027-caisse-stock-ventes-a-distance';

const T = {
  fr: {
    cover: { eyebrow: 'Problème · Diaspora', title: ['Gérer son commerce', 'en Algérie depuis la France', 'en 2027.'], subtitle: 'Ce qui s’enregistre sur place, ce que vous voyez chaque soir en France, et huit semaines pour y arriver.', left: { label: 'Le commerce', sub: 'Oran, Sétif, Tizi Ouzou' }, right: { label: 'Votre téléphone', sub: 'Lyon, Marseille, Paris' }, note: 'Algérie · France · 2027' },
    stack: { title: 'Du comptoir à votre téléphone : quatre couches', layers: [
      { label: 'Sur place, au comptoir', items: [
        { name: 'Ventes à la caisse', sub: 'tablette ou TPE, un ticket pour chaque vente' },
        { name: 'Entrées de stock', sub: 'bon du fournisseur photographié' },
        { name: 'Dépenses', sub: 'montant et photo du reçu' },
        { name: 'Comptage des espèces', sub: 'à la fermeture, par la personne de garde' },
      ] },
      { label: 'Synchronisation', items: [{ name: 'Hors-ligne d’abord', sub: 'la caisse tourne pendant la coupure ; tout part au retour du réseau, à l’heure exacte où cela s’est passé' }] },
      { label: 'Serveur à votre nom', items: [
        { name: 'Données et historique', sub: 'sauvegarde quotidienne, compte et domaine à votre nom' },
        { name: 'Traçabilité', sub: 'chaque ligne dit qui et quand ; on annule, on ne modifie pas', accent: true },
      ] },
      { label: 'Votre téléphone, en France', items: [
        { name: 'L’écran du soir', sub: 'cinq chiffres, en arabe ou en français' },
        { name: 'Les alertes', sub: 'trois à cinq, réglées sur votre commerce' },
      ] },
    ], caption: 'Figure 1 · Seule la dernière couche est en France. Tout le reste se joue au comptoir, et doit continuer de fonctionner quand l’électricité ou le réseau tombe.', alt: 'Quatre couches : sur place les ventes, les entrées de stock, les dépenses et le comptage des espèces ; une synchronisation hors-ligne d’abord ; un serveur à votre nom avec traçabilité ; votre téléphone en France avec l’écran du soir et les alertes.' },
    types: { title: 'Ce que vous regardez chaque soir, selon le commerce', columns: ['Les chiffres du soir', 'L’alerte qui compte'], rows: [
      { label: 'Restaurant, fast-food, café', cells: ['Couverts, ticket moyen, écart de caisse', 'Ticket annulé après encaissement'] },
      { label: 'Supérette, alimentation générale', cells: ['Marge par rayon, ruptures, invendus', 'Stock compté différent du stock théorique'] },
      { label: 'Boutique : vêtements, téléphonie, cosmétique', cells: ['Ventes par vendeur, remises accordées', 'Remise au-delà du plafond fixé'] },
      { label: 'Location : voitures, appartements', cells: ['Taux d’occupation, encaissements, cautions', 'Sortie ou réservation sans paiement enregistré'] },
      { label: 'Grossiste, distribution', cells: ['Créances clients, tournées, livraisons', 'Crédit client au-delà de sa limite'] },
      { label: 'Plusieurs points de vente', cells: ['Les mêmes chiffres, côte à côte', 'Un point de vente qui décroche des autres'] },
    ], caption: 'Figure 2 · Cinq chiffres par soir et trois à cinq alertes. Une alerte qui sonne dix fois par jour est une alerte qu’on n’ouvre plus.', alt: 'Matrice par type de commerce : restaurant, supérette, boutique, location, grossiste, plusieurs points de vente, avec les chiffres à regarder chaque soir et l’alerte qui compte pour chacun.' },
    ritual: { title: 'Le rituel du soir : dix minutes sur place, deux en France', items: [
      { n: '01', label: 'Clôture de la caisse', sub: 'Un geste sur la tablette. Le total du jour est calculé, pas recopié.' },
      { n: '02', label: 'Comptage des espèces', sub: 'La personne de garde saisit ce qu’il y a dans le tiroir. L’écart s’affiche.' },
      { n: '03', label: 'Dépenses du jour', sub: 'Chaque sortie d’argent a son montant et la photo de son reçu.' },
      { n: '04', label: 'Envoi automatique', sub: 'Rien à envoyer sur WhatsApp. Tout part seul, même après une coupure.' },
      { n: '05', label: 'Votre écran du soir', sub: 'Cinq chiffres et les alertes, sur votre téléphone en France.', accent: true },
    ], caption: 'Figure 3 · L’écart de caisse est calculé par le système, pas annoncé par quelqu’un. C’est ce qui protège celui qui ferme autant que celui qui regarde.', alt: 'Cinq gestes du soir : clôture de la caisse, comptage des espèces, dépenses du jour, envoi automatique, écran du soir sur le téléphone du propriétaire en France.' },
    rollout: { title: 'Huit semaines pour le mettre en place, sans fermer', unit: 'sem.', items: [
      { label: 'Cadrage, choix du matériel', note: 'tablette, imprimante, onduleur, TPE existant', from: 0, to: 1 },
      { label: 'Inventaire de départ', note: 'un comptage complet, une seule fois', from: 1, to: 2 },
      { label: 'Caisse en double avec le cahier', note: 'l’équipe compare, puis fait confiance', from: 2, to: 4 },
      { label: 'Réception de stock et dépenses', note: 'bons et reçus photographiés', from: 3, to: 5 },
      { label: 'Écran du soir sur votre téléphone', note: 'cinq chiffres, en arabe ou en français', from: 4, to: 6 },
      { label: 'Alertes réglées, cahier arrêté', note: 'trois à cinq alertes, rituel du soir', from: 6, to: 8, accent: true },
    ], caption: 'Figure 4 · La caisse tourne deux semaines en double avec le cahier : c’est ce qui la fait accepter. Chaque point de vente supplémentaire se déploie ensuite en une à deux semaines.', alt: 'Calendrier en semaines : cadrage 0 à 1, inventaire de départ 1 à 2, caisse en double 2 à 4, réception et dépenses 3 à 5, écran du soir 4 à 6, alertes et arrêt du cahier 6 à 8.' },
  },
  en: {
    cover: { eyebrow: 'Problem · Diaspora', title: ['Running a business', 'in Algeria from France', 'in 2027.'], subtitle: 'What gets recorded on site, what you see every evening in France, and eight weeks to get there.', left: { label: 'The business', sub: 'Oran, Sétif, Tizi Ouzou' }, right: { label: 'Your phone', sub: 'Lyon, Marseille, Paris' }, note: 'Algeria · France · 2027' },
    stack: { title: 'From the counter to your phone: four layers', layers: [
      { label: 'On site, at the counter', items: [
        { name: 'Sales at the till', sub: 'tablet or card terminal, a receipt for every sale' },
        { name: 'Stock received', sub: 'supplier delivery note photographed' },
        { name: 'Expenses', sub: 'amount and photo of the receipt' },
        { name: 'Cash count', sub: 'at closing, by the person on duty' },
      ] },
      { label: 'Sync', items: [{ name: 'Offline first', sub: 'the till keeps working through the outage; everything is sent when the network returns, with the exact time it happened' }] },
      { label: 'Server in your name', items: [
        { name: 'Data and history', sub: 'daily backup, account and domain in your name' },
        { name: 'Traceability', sub: 'every line says who and when; you cancel, you never edit', accent: true },
      ] },
      { label: 'Your phone, in France', items: [
        { name: 'The evening screen', sub: 'five numbers, in Arabic or French' },
        { name: 'Alerts', sub: 'three to five, tuned to your business' },
      ] },
    ], caption: 'Figure 1 · Only the last layer is in France. Everything else happens at the counter, and must keep working when the power or the network goes down.', alt: 'Four layers: on site the sales, stock received, expenses and cash count; offline-first sync; a server in your name with traceability; your phone in France with the evening screen and alerts.' },
    types: { title: 'What you look at every evening, by type of business', columns: ['The evening numbers', 'The alert that matters'], rows: [
      { label: 'Restaurant, fast food, café', cells: ['Covers, average ticket, cash gap', 'Ticket cancelled after payment'] },
      { label: 'Convenience store, grocery', cells: ['Margin by aisle, stock-outs, unsold goods', 'Counted stock differs from expected stock'] },
      { label: 'Shop: clothing, phones, cosmetics', cells: ['Sales by seller, discounts given', 'Discount above the set ceiling'] },
      { label: 'Rental: cars, apartments', cells: ['Occupancy rate, takings, deposits', 'Car out or booking with no payment recorded'] },
      { label: 'Wholesale, distribution', cells: ['Customer credit, rounds, deliveries', 'Customer credit above its limit'] },
      { label: 'Several outlets', cells: ['The same numbers, side by side', 'One outlet drifting from the others'] },
    ], caption: 'Figure 2 · Five numbers an evening and three to five alerts. An alert that rings ten times a day is an alert nobody opens.', alt: 'Matrix by type of business: restaurant, convenience store, shop, rental, wholesale, several outlets, with the numbers to check every evening and the alert that matters for each.' },
    ritual: { title: 'The evening routine: ten minutes on site, two in France', items: [
      { n: '01', label: 'Close the till', sub: 'One tap on the tablet. The day’s total is calculated, not copied.' },
      { n: '02', label: 'Count the cash', sub: 'The person on duty enters what is in the drawer. The gap shows.' },
      { n: '03', label: 'Day’s expenses', sub: 'Every cash outflow has its amount and the photo of its receipt.' },
      { n: '04', label: 'Automatic sending', sub: 'Nothing to send on WhatsApp. It all goes on its own, even after an outage.' },
      { n: '05', label: 'Your evening screen', sub: 'Five numbers and the alerts, on your phone in France.', accent: true },
    ], caption: 'Figure 3 · The cash gap is calculated by the system, not announced by someone. That protects the person closing as much as the person watching.', alt: 'Five evening steps: close the till, count the cash, day’s expenses, automatic sending, evening screen on the owner’s phone in France.' },
    rollout: { title: 'Eight weeks to set it up, without closing', unit: 'wk', items: [
      { label: 'Scoping, choice of hardware', note: 'tablet, printer, UPS, existing terminal', from: 0, to: 1 },
      { label: 'Opening stock count', note: 'one full count, once', from: 1, to: 2 },
      { label: 'Till in parallel with the notebook', note: 'the team compares, then trusts', from: 2, to: 4 },
      { label: 'Stock received and expenses', note: 'notes and receipts photographed', from: 3, to: 5 },
      { label: 'Evening screen on your phone', note: 'five numbers, in Arabic or French', from: 4, to: 6 },
      { label: 'Alerts tuned, notebook stopped', note: 'three to five alerts, evening routine', from: 6, to: 8, accent: true },
    ], caption: 'Figure 4 · The till runs two weeks in parallel with the notebook: that is what gets it accepted. Each extra outlet then takes one to two weeks.', alt: 'Calendar in weeks: scoping 0 to 1, opening count 1 to 2, till in parallel 2 to 4, stock and expenses 3 to 5, evening screen 4 to 6, alerts and notebook stopped 6 to 8.' },
  },
  ar: {
    cover: { eyebrow: 'مشكلة · الجالية', title: ['إدارة تجارتك', 'في الجزائر من فرنسا', 'سنة 2027.'], subtitle: 'ما يُسجَّل في عين المكان، وما تراه كل مساء في فرنسا، وثمانية أسابيع للوصول إلى ذلك.', left: { label: 'المحل', sub: 'وهران، سطيف، تيزي وزو' }, right: { label: 'هاتفك', sub: 'ليون، مرسيليا، باريس' }, note: 'الجزائر · فرنسا · 2027' },
    stack: { title: 'من الكاونتر إلى هاتفك: أربع طبقات', layers: [
      { label: 'في عين المكان', items: [
        { name: 'المبيعات في الصندوق', sub: 'لوحة أو جهاز دفع، وصل لكل عملية بيع' },
        { name: 'دخول السلع', sub: 'وصل المورّد مصوَّر' },
        { name: 'المصاريف', sub: 'المبلغ وصورة الوصل' },
        { name: 'عدّ النقود', sub: 'عند الإغلاق، من طرف المناوب' },
      ] },
      { label: 'المزامنة', items: [{ name: 'العمل دون اتصال أولاً', sub: 'الصندوق يواصل العمل أثناء الانقطاع، وكل شيء يُرسل عند عودة الشبكة بالساعة التي حدث فيها' }] },
      { label: 'خادم باسمك', items: [
        { name: 'البيانات والسجل', sub: 'نسخ احتياطي يومي، حساب ونطاق باسمك' },
        { name: 'التتبّع', sub: 'كل سطر يقول من ومتى؛ نُلغي ولا نعدّل', accent: true },
      ] },
      { label: 'هاتفك في فرنسا', items: [
        { name: 'شاشة المساء', sub: 'خمسة أرقام، بالعربية أو الفرنسية' },
        { name: 'التنبيهات', sub: 'من ثلاثة إلى خمسة، حسب تجارتك' },
      ] },
    ], caption: 'الشكل 1 · الطبقة الأخيرة وحدها في فرنسا. كل الباقي يجري عند الكاونتر، ويجب أن يواصل العمل عند انقطاع الكهرباء أو الشبكة.', alt: 'أربع طبقات: في عين المكان المبيعات ودخول السلع والمصاريف وعدّ النقود؛ مزامنة تعمل دون اتصال أولاً؛ خادم باسمك مع التتبّع؛ هاتفك في فرنسا مع شاشة المساء والتنبيهات.' },
    types: { title: 'ما تراقبه كل مساء حسب نوع التجارة', columns: ['أرقام المساء', 'التنبيه المهم'], rows: [
      { label: 'مطعم، أكل سريع، مقهى', cells: ['عدد الزبائن، متوسط الوصل، فارق الصندوق', 'وصل أُلغي بعد التحصيل'] },
      { label: 'سوبيرات، مواد غذائية عامة', cells: ['الهامش حسب الرف، النفاد، غير المباع', 'مخزون معدود يختلف عن المخزون النظري'] },
      { label: 'محل: ملابس، هواتف، مستحضرات', cells: ['المبيعات حسب البائع، التخفيضات', 'تخفيض فوق السقف المحدد'] },
      { label: 'كراء: سيارات، شقق', cells: ['نسبة الإشغال، التحصيلات، الضمانات', 'خروج أو حجز دون دفع مسجَّل'] },
      { label: 'بيع بالجملة، توزيع', cells: ['ديون الزبائن، الجولات، التسليمات', 'دين زبون فوق حدّه'] },
      { label: 'عدة نقاط بيع', cells: ['الأرقام نفسها جنباً إلى جنب', 'نقطة بيع تبتعد عن البقية'] },
    ], caption: 'الشكل 2 · خمسة أرقام كل مساء ومن ثلاثة إلى خمسة تنبيهات. التنبيه الذي يرنّ عشر مرات في اليوم لا يفتحه أحد.', alt: 'مصفوفة حسب نوع التجارة: مطعم، سوبيرات، محل، كراء، جملة، عدة نقاط بيع، مع الأرقام التي تُراقب كل مساء والتنبيه المهم لكل منها.' },
    ritual: { title: 'طقس المساء: عشر دقائق في المحل ودقيقتان في فرنسا', items: [
      { n: '01', label: 'إغلاق الصندوق', sub: 'لمسة واحدة على اللوحة. مجموع اليوم يُحسب ولا يُنسخ.' },
      { n: '02', label: 'عدّ النقود', sub: 'المناوب يُدخل ما في الدرج، فيظهر الفارق.' },
      { n: '03', label: 'مصاريف اليوم', sub: 'لكل خروج للمال مبلغه وصورة وصله.' },
      { n: '04', label: 'إرسال تلقائي', sub: 'لا شيء يُرسل على واتساب. كل شيء يذهب وحده، حتى بعد الانقطاع.' },
      { n: '05', label: 'شاشة مسائك', sub: 'خمسة أرقام والتنبيهات على هاتفك في فرنسا.', accent: true },
    ], caption: 'الشكل 3 · فارق الصندوق يحسبه النظام ولا يعلنه أحد. هذا ما يحمي من يُغلق بقدر ما يحمي من يراقب.', alt: 'خمس خطوات مسائية: إغلاق الصندوق، عدّ النقود، مصاريف اليوم، إرسال تلقائي، شاشة المساء على هاتف المالك في فرنسا.' },
    rollout: { title: 'ثمانية أسابيع لوضعه دون إغلاق', unit: 'أسبوع', items: [
      { label: 'التأطير واختيار العتاد', note: 'لوحة، طابعة، مموّج، جهاز الدفع الحالي', from: 0, to: 1 },
      { label: 'جرد الانطلاق', note: 'عدّ كامل مرة واحدة', from: 1, to: 2 },
      { label: 'الصندوق بالتوازي مع الدفتر', note: 'الفريق يقارن ثم يثق', from: 2, to: 4 },
      { label: 'دخول السلع والمصاريف', note: 'وصولات مصوَّرة', from: 3, to: 5 },
      { label: 'شاشة المساء على هاتفك', note: 'خمسة أرقام بالعربية أو الفرنسية', from: 4, to: 6 },
      { label: 'ضبط التنبيهات وإيقاف الدفتر', note: 'من ثلاثة إلى خمسة تنبيهات', from: 6, to: 8, accent: true },
    ], caption: 'الشكل 4 · يعمل الصندوق أسبوعين بالتوازي مع الدفتر، وهذا ما يجعله مقبولاً. كل نقطة بيع إضافية تُنشر بعد ذلك في أسبوع إلى أسبوعين.', alt: 'جدول بالأسابيع: التأطير 0 إلى 1، جرد الانطلاق 1 إلى 2، الصندوق بالتوازي 2 إلى 4، السلع والمصاريف 3 إلى 5، شاشة المساء 4 إلى 6، التنبيهات وإيقاف الدفتر 6 إلى 8.' },
  },
};

export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      stack: { svg: layers({ title: t.stack.title, layers: t.stack.layers, rtl }), caption: t.stack.caption, alt: t.stack.alt },
      types: { svg: matrix({ title: t.types.title, columns: t.types.columns, rows: t.types.rows, rtl }), caption: t.types.caption, alt: t.types.alt },
      ritual: { svg: steps({ title: t.ritual.title, steps: t.ritual.items, arrows: true, rtl }), caption: t.ritual.caption, alt: t.ritual.alt },
      rollout: { svg: timeline({ title: t.rollout.title, items: t.rollout.items, total: 8, tick: 1, unit: t.rollout.unit, rtl }), caption: t.rollout.caption, alt: t.rollout.alt },
    },
  };
}
