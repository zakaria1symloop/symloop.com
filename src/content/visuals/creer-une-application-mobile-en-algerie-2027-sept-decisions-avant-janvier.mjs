import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';

export const slug = 'creer-une-application-mobile-en-algerie-2027-sept-decisions-avant-janvier';

const T = {
  fr: {
    cover: { eyebrow: 'Problème · Application mobile', title: ['Une application mobile', 'en Algérie en 2027 :', 'sept décisions avant janvier.'], subtitle: 'Ce qui change entre aujourd’hui et fin 2027, les sept choix qui coûtent cher quand on les prend trop tard, ce qu’il y a dans l’application, et le calendrier pour publier au printemps.', left: { label: 'Novembre 2026', sub: 'une idée, un métier, des captures d’écran d’apps françaises' }, right: { label: 'Printemps 2027', sub: 'sur Google Play et l’App Store, payée en dinars, mise à jour' }, note: 'Algérie · 2027' },
    changes: { title: 'Ce qui arrive entre aujourd’hui et fin 2027', items: [
      { n: '2026', label: 'Paiement par QR interopérable', sub: 'DZMobPay étendu à quinze banques : payer un commerçant depuis l’application de sa banque ou BaridiMob.' },
      { n: 'FIN 2026', label: 'SoftPos : le téléphone devient terminal', sub: 'Le smartphone NFC du commerçant encaisse la carte, sans TPE. Annoncé par le GIE Monétique.' },
      { n: '2027', label: 'Vérification des développeurs Android', sub: 'Google étend au monde l’obligation d’identifier le développeur, même hors Play Store. L’APK envoyé sur WhatsApp cesse d’être une méthode de distribution.', accent: true },
      { n: '2027', label: 'PLF 2027 et 5G fixe', sub: 'Réduction d’impôt si la moitié des encaissements est électronique (projet de loi). 5G fixe annoncée par Algérie Télécom.' },
    ], caption: 'Figure 1 · Quatre échéances, une conséquence : en 2027, une application sérieuse encaisse électroniquement et vit dans les stores, pas dans un fichier APK.', alt: 'Quatre étapes : 2026 paiement par QR interopérable sur quinze banques, fin 2026 SoftPos, 2027 vérification mondiale des développeurs Android qui met fin à l’APK partagé sur WhatsApp, 2027 incitations du PLF 2027 et 5G fixe.' },
    decisions: { title: 'Les sept décisions, et le choix par défaut en Algérie', columns: ['Choix par défaut en 2027', 'Quand faire l’inverse'], rows: [
      { label: 'Android d’abord, ou Android et iOS', cells: ['Android d’abord ; iOS le mois suivant si la diaspora ou le haut de gamme est visé', 'iOS en premier : jamais en Algérie, sauf outil interne d’une direction équipée en iPhone'] },
      { label: 'Hors-ligne ou connecté', cells: ['Hors-ligne d’abord pour le terrain : l’application travaille sans réseau et synchronise ensuite', 'Connecté seulement pour un back-office de bureau relié à la fibre'] },
      { label: 'Paiement dans l’application', cells: ['CIB/Edahabia, QR DZMobPay et espèces enregistrées, dès la première version', 'Sans paiement si l’application ne vend rien : outil interne, suivi d’équipe'] },
      { label: 'Identification des utilisateurs', cells: ['Numéro de téléphone et code SMS ; ni e-mail, ni mot de passe à retenir', 'E-mail et annuaire d’entreprise pour une application réservée aux employés'] },
      { label: 'Langues', cells: ['Arabe et français dès la première version ; darija dans le support par IA', 'Français seul pour un outil interne d’une équipe francophone, et encore'] },
      { label: 'Données et hébergement', cells: ['Hébergement documenté, loi 18-07, sauvegardes, accès tracés', 'Jamais l’inverse ; seul le lieu d’hébergement se discute'] },
      { label: 'Après la publication', cells: ['Budget annuel de maintenance et de mises à jour des stores décidé avant le premier jour', 'Jamais l’inverse : une application sans mise à jour disparaît des stores en un an'] },
    ], caption: 'Figure 2 · Les sept décisions se prennent en novembre sur une page. Prises en mars, chacune coûte des semaines de reprise.', alt: 'Matrice des sept décisions d’une application mobile en Algérie en 2027 avec le choix par défaut et les cas où faire l’inverse : Android d’abord, hors-ligne d’abord, paiement CIB/Edahabia et QR dès la v1, identification par téléphone, arabe et français, hébergement documenté loi 18-07, budget de maintenance décidé avant le lancement.' },
    inside: { title: 'Ce qu’il y a dans une application mobile algérienne en 2027', layers: [
      { label: 'Utilisateurs', items: [{ name: 'Application Android et iOS', sub: 'arabe et français, hors-ligne, code SMS', accent: true }, { name: 'Notifications utiles', sub: 'commande, paiement, rendez-vous ; jamais de spam' }] },
      { label: 'Paiement', items: [{ name: 'CIB / Edahabia', sub: 'web-marchand via la banque et le GIE Monétique' }, { name: 'QR DZMobPay', sub: 'interopérable, quinze banques' }, { name: 'Espèces et COD enregistrés', sub: 'le canal réel, suivi dans l’application' }] },
      { label: 'Pilotage', items: [{ name: 'Back-office web', sub: 'équipe, catalogue, commandes, tableau de bord' }, { name: 'IA', sub: 'support AR/FR/darija, relances, anomalies' }] },
      { label: 'Données', items: [{ name: 'Hébergement documenté', sub: 'loi 18-07, sauvegardes, accès tracés' }] },
      { label: 'Stores', items: [{ name: 'Google Play et App Store', sub: 'compte développeur vérifié, mises à jour chaque année' }] },
    ], caption: 'Figure 3 · L’application que voit l’utilisateur est la couche du haut. Les quatre autres font qu’elle encaisse, qu’elle se pilote et qu’elle reste en ligne.', alt: 'Cinq couches : application Android et iOS avec notifications ; paiement CIB/Edahabia, QR DZMobPay, espèces enregistrées ; back-office web et IA ; hébergement documenté ; Google Play et App Store avec compte vérifié.' },
    timeline: { title: 'Décider en novembre, publier au printemps 2027', unit: 'mois', items: [
      { label: 'Cadrage et prix total écrit', note: 'novembre : les sept décisions prises et écrites', from: 0, to: 1 },
      { label: 'Comptes développeur et web-marchand', note: 'Google Play, App Store, banque, GIE Monétique', from: 0, to: 3 },
      { label: 'Design et prototype testé', note: 'cinq utilisateurs réels, pas des proches', from: 1, to: 2 },
      { label: 'Développement', note: 'Android et iOS, hors-ligne, paiement, back-office', from: 2, to: 5 },
      { label: 'Tests terrain et corrections', note: 'dans les conditions réelles de réseau', from: 5, to: 6 },
      { label: 'Publication et premières mises à jour', note: 'mai 2027 : stores, versions correctives', from: 6, to: 7, accent: true },
    ], caption: 'Figure 4 · Les comptes développeur et le dossier web-marchand s’ouvrent le premier mois : ce sont les deux lignes qui ne dépendent pas de vous.', alt: 'Calendrier en mois : cadrage 0 à 1, comptes développeur et web-marchand 0 à 3, prototype 1 à 2, développement 2 à 5, tests terrain 5 à 6, publication 6 à 7.' },
  },
  en: {
    cover: { eyebrow: 'Problem · Mobile app', title: ['A mobile app', 'in Algeria in 2027:', 'seven decisions before January.'], subtitle: 'What changes between now and the end of 2027, the seven choices that cost dearly when made too late, what is inside the app, and the calendar to publish in spring.', left: { label: 'November 2026', sub: 'an idea, a trade, screenshots of French apps' }, right: { label: 'Spring 2027', sub: 'on Google Play and the App Store, paid in dinars, updated' }, note: 'Algeria · 2027' },
    changes: { title: 'What arrives between now and the end of 2027', items: [
      { n: '2026', label: 'Interoperable QR payment', sub: 'DZMobPay extended to fifteen banks: pay a merchant from your bank’s app or BaridiMob.' },
      { n: 'END 2026', label: 'SoftPos: the phone becomes a terminal', sub: 'The merchant’s NFC smartphone takes the card, no terminal needed. Announced by GIE Monétique.' },
      { n: '2027', label: 'Android developer verification', sub: 'Google extends worldwide the obligation to identify the developer, even outside the Play Store. The APK sent on WhatsApp stops being a distribution method.', accent: true },
      { n: '2027', label: '2027 finance bill and fixed 5G', sub: 'Tax reduction if half of receipts are electronic (bill). Fixed 5G announced by Algérie Télécom.' },
    ], caption: 'Figure 1 · Four deadlines, one consequence: in 2027 a serious app collects electronically and lives in the stores, not in an APK file.', alt: 'Four steps: 2026 interoperable QR payment across fifteen banks, end of 2026 SoftPos, 2027 worldwide Android developer verification ending the APK shared on WhatsApp, 2027 finance bill incentives and fixed 5G.' },
    decisions: { title: 'The seven decisions, and the default choice in Algeria', columns: ['Default choice in 2027', 'When to do the opposite'], rows: [
      { label: 'Android first, or Android and iOS', cells: ['Android first; iOS the following month if the diaspora or the premium segment is targeted', 'iOS first: never in Algeria, except an internal tool for a management team on iPhones'] },
      { label: 'Offline or connected', cells: ['Offline first for the field: the app works without network and syncs afterwards', 'Connected only for an office back-office on fibre'] },
      { label: 'Payment inside the app', cells: ['CIB/Edahabia, QR DZMobPay and recorded cash, from the first version', 'No payment if the app sells nothing: internal tool, team tracking'] },
      { label: 'User identification', cells: ['Phone number and SMS code; no e-mail, no password to remember', 'E-mail and company directory for an employee-only app'] },
      { label: 'Languages', cells: ['Arabic and French from the first version; darija in AI support', 'French only for an internal tool of a French-speaking team, and even then'] },
      { label: 'Data and hosting', cells: ['Documented hosting, Law 18-07, backups, traced access', 'Never the opposite; only the hosting location is debatable'] },
      { label: 'After publication', cells: ['Annual budget for maintenance and store updates decided before day one', 'Never the opposite: an app without updates disappears from the stores within a year'] },
    ], caption: 'Figure 2 · The seven decisions are made in November on one page. Made in March, each costs weeks of rework.', alt: 'Matrix of the seven decisions for a mobile app in Algeria in 2027 with the default choice and when to do the opposite: Android first, offline first, CIB/Edahabia and QR payment from v1, phone identification, Arabic and French, documented hosting under Law 18-07, maintenance budget decided before launch.' },
    inside: { title: 'What is inside an Algerian mobile app in 2027', layers: [
      { label: 'Users', items: [{ name: 'Android and iOS app', sub: 'Arabic and French, offline, SMS code', accent: true }, { name: 'Useful notifications', sub: 'order, payment, appointment; never spam' }] },
      { label: 'Payment', items: [{ name: 'CIB / Edahabia', sub: 'online merchant via the bank and GIE Monétique' }, { name: 'QR DZMobPay', sub: 'interoperable, fifteen banks' }, { name: 'Recorded cash and COD', sub: 'the real channel, tracked in the app' }] },
      { label: 'Control', items: [{ name: 'Web back-office', sub: 'team, catalogue, orders, dashboard' }, { name: 'AI', sub: 'AR/FR/darija support, reminders, anomalies' }] },
      { label: 'Data', items: [{ name: 'Documented hosting', sub: 'Law 18-07, backups, traced access' }] },
      { label: 'Stores', items: [{ name: 'Google Play and App Store', sub: 'verified developer account, yearly updates' }] },
    ], caption: 'Figure 3 · The app the user sees is the top layer. The other four make it collect, run and stay online.', alt: 'Five layers: Android and iOS app with notifications; CIB/Edahabia, QR DZMobPay, recorded cash; web back-office and AI; documented hosting; Google Play and App Store with verified account.' },
    timeline: { title: 'Decide in November, publish in spring 2027', unit: 'months', items: [
      { label: 'Scoping and written total price', note: 'November: the seven decisions made and written', from: 0, to: 1 },
      { label: 'Developer and merchant accounts', note: 'Google Play, App Store, bank, GIE Monétique', from: 0, to: 3 },
      { label: 'Design and tested prototype', note: 'five real users, not relatives', from: 1, to: 2 },
      { label: 'Development', note: 'Android and iOS, offline, payment, back-office', from: 2, to: 5 },
      { label: 'Field tests and fixes', note: 'in real network conditions', from: 5, to: 6 },
      { label: 'Publication and first updates', note: 'May 2027: stores, corrective versions', from: 6, to: 7, accent: true },
    ], caption: 'Figure 4 · Developer accounts and the merchant file open in the first month: they are the two lines that do not depend on you.', alt: 'Timeline in months: scoping 0 to 1, developer and merchant accounts 0 to 3, prototype 1 to 2, development 2 to 5, field tests 5 to 6, publication 6 to 7.' },
  },
  ar: {
    cover: { eyebrow: 'مشكلة · تطبيق جوّال', title: ['تطبيق جوّال', 'في الجزائر سنة 2027:', 'سبعة قرارات قبل جانفي.'], subtitle: 'ما يتغير بين اليوم ونهاية 2027، الخيارات السبعة التي تكلّف غالياً إن اتُّخذت متأخرة، ما داخل التطبيق، والجدول للنشر في الربيع.', left: { label: 'نوفمبر 2026', sub: 'فكرة، مهنة، لقطات شاشة لتطبيقات فرنسية' }, right: { label: 'ربيع 2027', sub: 'على Google Play وApp Store، مدفوع بالدينار، محدَّث' }, note: 'الجزائر · 2027' },
    changes: { title: 'ما يأتي بين اليوم ونهاية 2027', items: [
      { n: '2026', label: 'دفع بالرمز QR متوافق بين البنوك', sub: 'DZMobPay يمتد إلى خمسة عشر بنكاً: ادفع للتاجر من تطبيق بنكك أو بريدي موب.' },
      { n: 'نهاية 2026', label: 'SoftPos: الهاتف يصبح جهاز دفع', sub: 'هاتف التاجر بتقنية NFC يقبل البطاقة دون جهاز TPE. أعلنه GIE Monétique.' },
      { n: '2027', label: 'التحقق من مطوري أندرويد', sub: 'توسّع Google عالمياً إلزام تعريف المطور حتى خارج Play Store. ملف APK المرسل على واتساب لم يعد طريقة توزيع.', accent: true },
      { n: '2027', label: 'مشروع قانون المالية 2027 والجيل الخامس الثابت', sub: 'تخفيض ضريبي إن كان نصف التحصيل إلكترونياً (مشروع قانون). الجيل الخامس الثابت أعلنته اتصالات الجزائر.' },
    ], caption: 'الشكل 1 · أربعة مواعيد ونتيجة واحدة: في 2027 يحصّل التطبيق الجاد إلكترونياً ويعيش في المتاجر لا في ملف APK.', alt: 'أربع خطوات بين 2026 و2027 لتطبيق جوّال في الجزائر.' },
    decisions: { title: 'القرارات السبعة والخيار الافتراضي في الجزائر', columns: ['الخيار الافتراضي في 2027', 'متى تفعل العكس'], rows: [
      { label: 'أندرويد أولاً، أم أندرويد وiOS', cells: ['أندرويد أولاً؛ iOS في الشهر التالي إن استُهدفت الجالية أو الفئة الراقية', 'iOS أولاً: أبداً في الجزائر، إلا أداة داخلية لإدارة مجهزة بآيفون'] },
      { label: 'دون اتصال أم متصل', cells: ['دون اتصال أولاً للميدان: يعمل التطبيق بلا شبكة ويزامن لاحقاً', 'متصل فقط لمكتب خلفي في المكتب على الألياف'] },
      { label: 'الدفع داخل التطبيق', cells: ['CIB/الذهبية ورمز QR DZMobPay ونقد مسجَّل منذ الإصدار الأول', 'بلا دفع إن كان التطبيق لا يبيع شيئاً: أداة داخلية، متابعة فريق'] },
      { label: 'تعريف المستخدمين', cells: ['رقم الهاتف ورمز SMS؛ لا بريد إلكتروني ولا كلمة سر تُحفظ', 'بريد إلكتروني ودليل الشركة لتطبيق مخصص للموظفين'] },
      { label: 'اللغات', cells: ['العربية والفرنسية منذ الإصدار الأول؛ الدارجة في دعم الذكاء الاصطناعي', 'الفرنسية وحدها لأداة داخلية لفريق فرنكوفوني، وحتى هذا بتحفظ'] },
      { label: 'البيانات والاستضافة', cells: ['استضافة موثّقة، القانون 18-07، نسخ احتياطية، وصول متتبَّع', 'أبداً العكس؛ مكان الاستضافة وحده قابل للنقاش'] },
      { label: 'بعد النشر', cells: ['ميزانية سنوية للصيانة وتحديثات المتاجر تُقرَّر قبل اليوم الأول', 'أبداً العكس: تطبيق بلا تحديث يختفي من المتاجر خلال سنة'] },
    ], caption: 'الشكل 2 · تُتخذ القرارات السبعة في نوفمبر على صفحة واحدة. وإن اتُّخذت في مارس كلّف كل منها أسابيع من الإعادة.', alt: 'مصفوفة القرارات السبعة لتطبيق جوّال في الجزائر 2027.' },
    inside: { title: 'ما داخل تطبيق جوّال جزائري في 2027', layers: [
      { label: 'المستخدمون', items: [{ name: 'تطبيق أندرويد وiOS', sub: 'عربي وفرنسي، دون اتصال، رمز SMS', accent: true }, { name: 'إشعارات مفيدة', sub: 'طلب، دفع، موعد؛ لا رسائل مزعجة أبداً' }] },
      { label: 'الدفع', items: [{ name: 'CIB / الذهبية', sub: 'تاجر إلكتروني عبر البنك وGIE Monétique' }, { name: 'رمز QR DZMobPay', sub: 'متوافق، خمسة عشر بنكاً' }, { name: 'نقد ودفع عند الاستلام مسجَّلان', sub: 'القناة الحقيقية، متتبَّعة في التطبيق' }] },
      { label: 'القيادة', items: [{ name: 'مكتب خلفي ويب', sub: 'فريق، كتالوج، طلبات، لوحة قيادة' }, { name: 'ذكاء اصطناعي', sub: 'دعم عربي/فرنسي/دارجة، تذكيرات، شذوذ' }] },
      { label: 'البيانات', items: [{ name: 'استضافة موثّقة', sub: 'القانون 18-07، نسخ احتياطية، وصول متتبَّع' }] },
      { label: 'المتاجر', items: [{ name: 'Google Play وApp Store', sub: 'حساب مطور متحقَّق منه، تحديثات كل سنة' }] },
    ], caption: 'الشكل 3 · التطبيق الذي يراه المستخدم هو الطبقة العليا. الطبقات الأربع الأخرى تجعله يحصّل ويُقاد ويبقى على الخط.', alt: 'خمس طبقات لتطبيق جوّال جزائري في 2027.' },
    timeline: { title: 'قرّر في نوفمبر، انشر في ربيع 2027', unit: 'أشهر', items: [
      { label: 'التأطير والسعر الإجمالي المكتوب', note: 'نوفمبر: القرارات السبعة متخذة ومكتوبة', from: 0, to: 1 },
      { label: 'حسابات المطور والتاجر الإلكتروني', note: 'Google Play، App Store، البنك، GIE Monétique', from: 0, to: 3 },
      { label: 'التصميم ونموذج مختبَر', note: 'خمسة مستخدمين حقيقيين لا أقارب', from: 1, to: 2 },
      { label: 'التطوير', note: 'أندرويد وiOS، دون اتصال، دفع، مكتب خلفي', from: 2, to: 5 },
      { label: 'اختبارات ميدانية وتصحيحات', note: 'في ظروف الشبكة الحقيقية', from: 5, to: 6 },
      { label: 'النشر وأولى التحديثات', note: 'ماي 2027: المتاجر، إصدارات تصحيحية', from: 6, to: 7, accent: true },
    ], caption: 'الشكل 4 · تُفتح حسابات المطور وملف التاجر الإلكتروني في الشهر الأول: هما الخطان اللذان لا يعتمدان عليك.', alt: 'جدول زمني بالأشهر من نوفمبر 2026 إلى ماي 2027.' },
  },
};

export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      changes: { svg: steps({ title: t.changes.title, steps: t.changes.items, arrows: true, rtl }), caption: t.changes.caption, alt: t.changes.alt },
      decisions: { svg: matrix({ title: t.decisions.title, columns: t.decisions.columns, rows: t.decisions.rows, highlight: 0, rtl }), caption: t.decisions.caption, alt: t.decisions.alt },
      inside: { svg: layers({ title: t.inside.title, layers: t.inside.layers, rtl }), caption: t.inside.caption, alt: t.inside.alt },
      timeline: { svg: timeline({ title: t.timeline.title, items: t.timeline.items, total: 7, tick: 1, unit: t.timeline.unit, rtl }), caption: t.timeline.caption, alt: t.timeline.alt },
    },
  };
}
