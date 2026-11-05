import { cover, steps, layers, matrix, timeline, stats } from '../../lib/visuals/index.mjs';
export const slug = 'faire-vivre-une-application-algerie-2027-cout-annee-stores-serveurs-mises-a-jour';
const T = {
  fr: {
    cover: { eyebrow: 'Applications mobiles · Maintenance · 2027', title: ['Une application livrée', 'coûte encore chaque année.', 'Voici quoi, et quand.'], subtitle: 'Comptes stores, serveur, SMS, nouvelles versions d’Android et d’iOS, exigences des stores aux dates fixes, correctifs : la première année chiffrée.', left: { label: 'Le propriétaire', sub: 'une PME à Sétif, un fondateur à Paris, une agence à Oran' }, right: { label: 'L’application', sub: 'en ligne, utilisée, et déjà en train de vieillir' }, note: 'Algérie · stores · 2027' },
    annee: { title: 'L’année 1 après la mise en ligne, en six moments', items: [
      { n: '01', label: 'Semaine 1 : en ligne', sub: 'Comptes, fiches, première note, premiers avis.' },
      { n: '02', label: 'Mois 1 : premiers retours', sub: 'Plantages sur des téléphones jamais testés.' },
      { n: '03', label: 'Mois 3 : dépendances', sub: 'Bibliothèques, paiement, cartes à mettre à jour.' },
      { n: '04', label: 'Juin et septembre : nouveaux OS', sub: 'Android puis iOS ; permissions, caméra, notifications.' },
      { n: '05', label: '31 août : exigence Play', sub: 'Cible API imposée pour toute mise à jour.' },
      { n: '06', label: 'Mois 12 : renouvellements', sub: 'Apple, domaine, certificats, bilan, évolutions.', accent: true },
    ], caption: 'Figure 1 · Une application ne vieillit pas de façon continue : elle vieillit par à-coups, aux dates où Google, Apple, Android et iOS changent leurs règles. Les moments 04 et 05 reviennent tous les ans ; le moment 06 aussi. Qui ne les a pas dans son calendrier les découvre quand une mise à jour est refusée.', alt: 'Six moments : semaine 1 en ligne avec comptes, fiches et première note ; mois 1 premiers retours avec plantages sur des téléphones jamais testés ; mois 3 dépendances à mettre à jour ; juin et septembre nouveaux OS Android puis iOS ; 31 août exigence Play de cible API ; mois 12 renouvellements Apple, domaine, certificats, bilan.' },
    postes: { title: 'Les cinq postes d’une année : le code coûte plus que les factures', layers: [
      { label: 'Comptes et stores', items: [
        { name: 'Apple Developer', sub: '99 USD par an, carte internationale' },
        { name: 'Google Play', sub: '25 USD une fois ; tests fermés pour un compte personnel' },
      ] },
      { label: 'Serveur et socle', items: [
        { name: 'VPS, domaine, certificats', sub: 'hébergeur algérien ou européen, sauvegardes, supervision' },
      ] },
      { label: 'Services consommés', items: [
        { name: 'SMS, notifications, e-mail', sub: 'codes de connexion, rappels ; facturés à l’usage' },
        { name: 'Cartes, paiement', sub: 'API de cartes, CIB et Edahabia via la plateforme agréée' },
      ] },
      { label: 'Code', items: [
        { name: 'Mises à jour OS, SDK, dépendances', sub: 'Android en juin, iOS en septembre, Flutter quatre fois par an', accent: true },
        { name: 'Correctifs et support', sub: 'plantages, téléphones particuliers, retours des utilisateurs' },
      ] },
      { label: 'Produit', items: [{ name: 'Évolutions', sub: 'ce que les utilisateurs demandent une fois qu’ils utilisent l’application' }] },
    ], caption: 'Figure 2 · Les factures des stores et du serveur sont connues et petites. Le poste qui pèse est le code : suivre deux systèmes d’exploitation, un framework et des bibliothèques qui changent, plus les correctifs que l’usage réel révèle. C’est ce poste qu’il faut chiffrer en jours d’ingénieur avant de signer.', alt: 'Cinq couches : comptes et stores avec Apple Developer à 99 USD par an et Google Play à 25 USD une fois ; serveur et socle avec VPS, domaine et certificats ; services consommés avec SMS, notifications, e-mail, cartes et paiement ; code avec mises à jour OS, SDK et dépendances, correctifs et support ; produit avec les évolutions.' },
    exemple: { title: 'Cinq mille utilisateurs, une PME : la première année chiffrée', items: [
      { value: '≈ 13 000 DA', label: 'les stores : 99 USD Apple au cours officiel, Google déjà payé' },
      { value: '60 à 180 k DA', label: 'serveur et domaine : 5 000 à 15 000 DA par mois selon l’hébergeur' },
      { value: '≈ 60 000 DA', label: 'SMS : 5 000 utilisateurs × 4 codes × 3 DA, hypothèse' },
      { value: '≈ 25 jours', label: 'd’ingénieur : deux cycles OS, dépendances, exigences des stores, correctifs', accent: true },
    ], caption: 'Figure 3 · Un calcul sur des hypothèses, pas une mesure. Les montants en dinars viennent d’offres publiques d’hébergeurs et du cours officiel d’avril 2026 (environ 132 DA pour un dollar) ; le prix du SMS n’est pas public et doit être demandé à l’agrégateur. Les vingt-cinq jours d’ingénieur sont le poste qui décide du budget : multipliez-les par le taux journalier de votre prestataire.', alt: 'Exemple chiffré : environ 13 000 DA pour les stores ; 60 000 à 180 000 DA de serveur et domaine sur l’année ; environ 60 000 DA de SMS sur une hypothèse de 3 DA ; environ 25 jours d’ingénieur pour deux cycles OS, les dépendances, les exigences des stores et les correctifs. Hypothèses indiquées.' },
    pannes: { title: 'Six pannes silencieuses, six parades', columns: ['Comment ça arrive', 'Ce qui l’évite'], rows: [
      { label: 'Mise à jour refusée par Play', cells: ['Cible API dépassée après le 31 août', 'Montée de version prévue en juillet, chaque année'] },
      { label: 'Envoi refusé par Apple', cells: ['Compilé avec un SDK trop ancien après fin avril', 'Xcode et SDK à jour dès la sortie de printemps'] },
      { label: 'Domaine ou certificat expiré', cells: ['« L’application ne marche plus », un dimanche', 'Renouvellement automatique, alerte 30 jours avant'] },
      { label: 'Crédit SMS épuisé', cells: ['Plus de code de connexion, plus d’inscriptions', 'Seuil d’alerte, recharge avant zéro, second fournisseur'] },
      { label: 'Dépendance avec une faille', cells: ['Bibliothèque de paiement ou de cartes vulnérable', 'Revue des dépendances à chaque cycle, mise à jour testée'] },
      { label: 'Nouvelle permission de l’OS', cells: ['Caméra, localisation ou notifications cassées', 'Tests sur les bêtas d’Android et d’iOS avant la sortie'] },
    ], caption: 'Figure 4 · Aucune de ces pannes ne prévient. Les deux premières ont une date fixe chez Google et Apple ; les quatre autres arrivent quand personne ne regarde. Un contrat de maintenance sérieux est d’abord un calendrier et une supervision, pas une promesse de réactivité.', alt: 'Matrice de six pannes : mise à jour refusée par Play, envoi refusé par Apple, domaine ou certificat expiré, crédit SMS épuisé, dépendance avec une faille, nouvelle permission de l’OS ; pour chacune, comment ça arrive et ce qui l’évite.' },
    calendrier: { title: 'Le calendrier 2027 d’une application qui reste en ligne, en mois', unit: 'mois', items: [
      { label: 'Bilan, dépendances, budget écrit', note: 'janvier et février', from: 0, to: 2 },
      { label: 'Fenêtre Apple : SDK de l’année', note: 'exigence fin avril, si le rythme se maintient', from: 3, to: 4 },
      { label: 'Nouvel Android : tests, permissions', note: 'sortie en juin', from: 5, to: 6 },
      { label: 'Cible API Play avant le 31 août', note: 'mise à jour publiée en juillet', from: 6, to: 8, accent: true },
      { label: 'Nouvel iOS : tests, correctifs', note: 'sortie en septembre', from: 8, to: 9 },
      { label: 'Renouvellements, évolutions', note: 'Apple, domaine, certificats', from: 10, to: 12 },
    ], caption: 'Figure 5 · Mois 0 = janvier 2027. Les fenêtres Apple et Play reprennent les dates de 2025 et 2026 (fin avril, 31 août) ; Google et Apple peuvent les déplacer, d’où une marge d’un mois. Deux mises à jour planifiées par an, en juillet et en octobre, couvrent presque tout ; les correctifs se glissent entre les deux.', alt: 'Calendrier en mois : bilan, dépendances et budget de 0 à 2 ; fenêtre Apple SDK de 3 à 4 ; nouvel Android de 5 à 6 ; cible API Play avant le 31 août de 6 à 8 ; nouvel iOS de 8 à 9 ; renouvellements et évolutions de 10 à 12.' },
    modeles: { title: 'Qui s’en occupe : ce qui marche, ce qui casse', columns: ['Ce qui marche', 'Ce qui casse'], rows: [
      { label: 'Personne', cells: ['Rien à payer la première année', 'Mise à jour refusée, puis application invisible pour les nouveaux'] },
      { label: 'Un développeur interne', cells: ['Réactif, connaît le code', 'Un seul qui sait ; part, et le calendrier part avec lui'] },
      { label: 'Un freelance à l’appel', cells: ['Correctifs ponctuels à la demande', 'Personne ne regarde les dates ni les dépendances'] },
      { label: 'Un contrat d’heures avec une agence', cells: ['Budget connu, équipe disponible', 'Les heures servent aux urgences, pas aux mises à jour'] },
      { label: 'Contrat avec supervision et calendrier', cells: ['Dates tenues, pannes vues avant les utilisateurs', 'Coût fixe même les mois calmes'] },
      { label: 'Reprise d’une application abandonnée', cells: ['Audit écrit, comptes récupérés, mise à jour publiée', 'Parfois le code ne se met plus à jour : réécriture'] },
    ], caption: 'Figure 6 · Nous conseillons un contrat avec un calendrier et une supervision pour toute application qui encaisse ou qui sert des clients, et un contrat d’heures pour une application interne peu exposée. Ne rien faire est un choix qui se paie dans les douze à vingt-quatre mois, quand les stores ferment la porte.', alt: 'Matrice de six façons de s’en occuper : personne, un développeur interne, un freelance à l’appel, un contrat d’heures avec une agence, un contrat avec supervision et calendrier, la reprise d’une application abandonnée ; pour chacune, ce qui marche et ce qui casse.' },
  },
  en: {
    cover: { eyebrow: 'Mobile apps · Maintenance · 2027', title: ['A delivered app', 'still costs money every year.', 'Here is what, and when.'], subtitle: 'Store accounts, server, SMS, new Android and iOS versions, store requirements on fixed dates, fixes: the first year with numbers.', left: { label: 'The owner', sub: 'a company in Sétif, a founder in Paris, an agency in Oran' }, right: { label: 'The app', sub: 'live, in use, and already ageing' }, note: 'Algeria · stores · 2027' },
    annee: { title: 'Year 1 after launch, in six moments', items: [
      { n: '01', label: 'Week 1: live', sub: 'Accounts, listings, first rating, first reviews.' },
      { n: '02', label: 'Month 1: first feedback', sub: 'Crashes on phones never tested.' },
      { n: '03', label: 'Month 3: dependencies', sub: 'Libraries, payment, maps to update.' },
      { n: '04', label: 'June and September: new OS', sub: 'Android then iOS; permissions, camera, notifications.' },
      { n: '05', label: '31 August: Play requirement', sub: 'Target API level imposed for every update.' },
      { n: '06', label: 'Month 12: renewals', sub: 'Apple, domain, certificates, review, improvements.', accent: true },
    ], caption: 'Figure 1 · An app does not age smoothly: it ages in jolts, on the dates when Google, Apple, Android and iOS change their rules. Moments 04 and 05 come back every year; so does moment 06. Whoever does not have them in the calendar finds out when an update is refused.', alt: 'Six moments: week 1 live with accounts, listings and first rating; month 1 first feedback with crashes on phones never tested; month 3 dependencies to update; June and September new OS Android then iOS; 31 August Play target API requirement; month 12 renewals Apple, domain, certificates, review.' },
    postes: { title: 'The five cost lines of a year: code costs more than invoices', layers: [
      { label: 'Accounts and stores', items: [
        { name: 'Apple Developer', sub: '99 USD a year, international card' },
        { name: 'Google Play', sub: '25 USD once; closed testing for a personal account' },
      ] },
      { label: 'Server and foundation', items: [
        { name: 'VPS, domain, certificates', sub: 'Algerian or European host, backups, monitoring' },
      ] },
      { label: 'Consumed services', items: [
        { name: 'SMS, notifications, e-mail', sub: 'login codes, reminders; billed per use' },
        { name: 'Maps, payment', sub: 'maps API, CIB and Edahabia through the licensed platform' },
      ] },
      { label: 'Code', items: [
        { name: 'OS, SDK and dependency updates', sub: 'Android in June, iOS in September, Flutter four times a year', accent: true },
        { name: 'Fixes and support', sub: 'crashes, particular phones, user feedback' },
      ] },
      { label: 'Product', items: [{ name: 'Improvements', sub: 'what users ask for once they actually use the app' }] },
    ], caption: 'Figure 2 · Store and server invoices are known and small. The line that weighs is code: following two operating systems, one framework and libraries that change, plus the fixes that real use reveals. That is the line to price in engineer-days before signing.', alt: 'Five layers: accounts and stores with Apple Developer at 99 USD a year and Google Play at 25 USD once; server and foundation with VPS, domain and certificates; consumed services with SMS, notifications, e-mail, maps and payment; code with OS, SDK and dependency updates, fixes and support; product with improvements.' },
    exemple: { title: 'Five thousand users, one company: the first year with numbers', items: [
      { value: '≈ 13,000 DA', label: 'stores: 99 USD Apple at the official rate, Google already paid' },
      { value: '60 to 180k DA', label: 'server and domain: 5,000 to 15,000 DA a month depending on the host' },
      { value: '≈ 60,000 DA', label: 'SMS: 5,000 users × 4 codes × 3 DA, assumption' },
      { value: '≈ 25 days', label: 'of engineer: two OS cycles, dependencies, store requirements, fixes', accent: true },
    ], caption: 'Figure 3 · A calculation on assumptions, not a measurement. The dinar amounts come from hosts’ public offers and from the official rate of April 2026 (about 132 DA to the dollar); the SMS price is not public and must be asked of the aggregator. The twenty-five engineer-days are the line that decides the budget: multiply them by your provider’s daily rate.', alt: 'Worked example: about 13,000 DA for the stores; 60,000 to 180,000 DA of server and domain over the year; about 60,000 DA of SMS on an assumption of 3 DA; about 25 engineer-days for two OS cycles, dependencies, store requirements and fixes. Assumptions stated.' },
    pannes: { title: 'Six silent failures, six counters', columns: ['How it happens', 'What prevents it'], rows: [
      { label: 'Update refused by Play', cells: ['Target API level missed after 31 August', 'Version bump planned in July, every year'] },
      { label: 'Upload refused by Apple', cells: ['Built with an SDK too old after late April', 'Xcode and SDK updated as soon as the spring release lands'] },
      { label: 'Domain or certificate expired', cells: ['“The app stopped working”, on a Sunday', 'Auto-renewal, alert 30 days before'] },
      { label: 'SMS credit exhausted', cells: ['No more login codes, no more sign-ups', 'Alert threshold, top-up before zero, second provider'] },
      { label: 'Dependency with a flaw', cells: ['Vulnerable payment or maps library', 'Dependency review each cycle, tested update'] },
      { label: 'New OS permission', cells: ['Camera, location or notifications broken', 'Tests on Android and iOS betas before release'] },
    ], caption: 'Figure 4 · None of these failures gives warning. The first two have a fixed date at Google and Apple; the other four happen when nobody is looking. A serious maintenance contract is first a calendar and monitoring, not a promise of responsiveness.', alt: 'Matrix of six failures: update refused by Play, upload refused by Apple, domain or certificate expired, SMS credit exhausted, dependency with a flaw, new OS permission; for each, how it happens and what prevents it.' },
    calendrier: { title: 'The 2027 calendar of an app that stays live, in months', unit: 'months', items: [
      { label: 'Review, dependencies, written budget', note: 'January and February', from: 0, to: 2 },
      { label: 'Apple window: this year’s SDK', note: 'requirement late April, if the rhythm holds', from: 3, to: 4 },
      { label: 'New Android: tests, permissions', note: 'release in June', from: 5, to: 6 },
      { label: 'Play target API before 31 August', note: 'update published in July', from: 6, to: 8, accent: true },
      { label: 'New iOS: tests, fixes', note: 'release in September', from: 8, to: 9 },
      { label: 'Renewals, improvements', note: 'Apple, domain, certificates', from: 10, to: 12 },
    ], caption: 'Figure 5 · Month 0 = January 2027. The Apple and Play windows repeat the 2025 and 2026 dates (late April, 31 August); Google and Apple can move them, hence a month of margin. Two planned updates a year, in July and October, cover almost everything; fixes slip in between.', alt: 'Calendar in months: review, dependencies and budget from 0 to 2; Apple SDK window from 3 to 4; new Android from 5 to 6; Play target API before 31 August from 6 to 8; new iOS from 8 to 9; renewals and improvements from 10 to 12.' },
    modeles: { title: 'Who looks after it: what works, what breaks', columns: ['What works', 'What breaks'], rows: [
      { label: 'Nobody', cells: ['Nothing to pay in year one', 'Update refused, then app invisible to new users'] },
      { label: 'An in-house developer', cells: ['Responsive, knows the code', 'Only one who knows; leaves, and the calendar leaves too'] },
      { label: 'A freelancer on call', cells: ['One-off fixes on request', 'Nobody watches the dates or the dependencies'] },
      { label: 'An hours contract with an agency', cells: ['Known budget, team available', 'Hours go to emergencies, not to updates'] },
      { label: 'Contract with monitoring and calendar', cells: ['Dates kept, failures seen before users', 'Fixed cost even in quiet months'] },
      { label: 'Takeover of an abandoned app', cells: ['Written audit, accounts recovered, update published', 'Sometimes the code no longer updates: rewrite'] },
    ], caption: 'Figure 6 · We advise a contract with a calendar and monitoring for any app that takes payments or serves customers, and an hours contract for a little-exposed internal app. Doing nothing is a choice that is paid for within twelve to twenty-four months, when the stores close the door.', alt: 'Matrix of six ways to look after an app: nobody, an in-house developer, a freelancer on call, an hours contract with an agency, a contract with monitoring and calendar, the takeover of an abandoned app; for each, what works and what breaks.' },
  },
  ar: {
    cover: { eyebrow: 'تطبيقات الهاتف · الصيانة · 2027', title: ['التطبيق المسلَّم', 'يكلّف كل سنة.', 'إليك ماذا ومتى.'], subtitle: 'حسابات المتاجر، الخادم، الرسائل القصيرة، إصدارات أندرويد وiOS الجديدة، متطلبات المتاجر في تواريخ ثابتة، التصحيحات: السنة الأولى بالأرقام.', left: { label: 'المالك', sub: 'مؤسسة في سطيف، مؤسِّس في باريس، وكالة في وهران' }, right: { label: 'التطبيق', sub: 'منشور ومستعمَل، وبدأ يشيخ' }, note: 'الجزائر · المتاجر · 2027' },
    annee: { title: 'السنة الأولى بعد النشر، في ست لحظات', items: [
      { n: '01', label: 'الأسبوع 1: النشر', sub: 'الحسابات، الصفحات، أول تقييم، أول آراء.' },
      { n: '02', label: 'الشهر 1: أول ملاحظات', sub: 'انهيارات على هواتف لم تُختبر قط.' },
      { n: '03', label: 'الشهر 3: التبعيات', sub: 'مكتبات، دفع، خرائط يجب تحديثها.' },
      { n: '04', label: 'جوان وسبتمبر: أنظمة جديدة', sub: 'أندرويد ثم iOS؛ الأذونات، الكاميرا، الإشعارات.' },
      { n: '05', label: '31 أوت: متطلب Play', sub: 'مستوى API مفروض لكل تحديث.' },
      { n: '06', label: 'الشهر 12: التجديدات', sub: 'آبل، النطاق، الشهادات، الحصيلة، التطويرات.', accent: true },
    ], caption: 'الشكل 1 · التطبيق لا يشيخ بشكل متواصل بل على دفعات، في التواريخ التي تغيّر فيها غوغل وآبل وأندرويد وiOS قواعدها. اللحظتان 04 و05 تعودان كل سنة، وكذلك اللحظة 06. ومن لا يضعها في تقويمه يكتشفها حين يُرفض تحديث.', alt: 'ست لحظات: الأسبوع 1 النشر بالحسابات والصفحات وأول تقييم؛ الشهر 1 أول ملاحظات بانهيارات على هواتف لم تُختبر؛ الشهر 3 تبعيات يجب تحديثها؛ جوان وسبتمبر أنظمة جديدة أندرويد ثم iOS؛ 31 أوت متطلب Play لمستوى API؛ الشهر 12 تجديدات آبل والنطاق والشهادات والحصيلة.' },
    postes: { title: 'البنود الخمسة للسنة: الكود يكلّف أكثر من الفواتير', layers: [
      { label: 'الحسابات والمتاجر', items: [
        { name: 'Apple Developer', sub: '99 دولاراً في السنة، بطاقة دولية' },
        { name: 'Google Play', sub: '25 دولاراً مرة واحدة؛ اختبار مغلق للحساب الشخصي' },
      ] },
      { label: 'الخادم والقاعدة', items: [
        { name: 'VPS، النطاق، الشهادات', sub: 'مستضيف جزائري أو أوروبي، نسخ احتياطي، مراقبة' },
      ] },
      { label: 'الخدمات المستهلَكة', items: [
        { name: 'الرسائل القصيرة، الإشعارات، البريد', sub: 'رموز الدخول، التذكيرات؛ تُفوتر حسب الاستعمال' },
        { name: 'الخرائط، الدفع', sub: 'واجهة الخرائط، CIB والذهبية عبر المنصة المعتمدة' },
      ] },
      { label: 'الكود', items: [
        { name: 'تحديثات النظام وSDK والتبعيات', sub: 'أندرويد في جوان، iOS في سبتمبر، Flutter أربع مرات في السنة', accent: true },
        { name: 'التصحيحات والدعم', sub: 'انهيارات، هواتف خاصة، ملاحظات المستعملين' },
      ] },
      { label: 'المنتج', items: [{ name: 'التطويرات', sub: 'ما يطلبه المستعملون حين يستعملون التطبيق فعلاً' }] },
    ], caption: 'الشكل 2 · فواتير المتاجر والخادم معروفة وصغيرة. البند الذي يثقل هو الكود: متابعة نظامي تشغيل وإطار عمل ومكتبات تتغير، إضافة إلى التصحيحات التي يكشفها الاستعمال الحقيقي. هذا البند هو ما يجب تقديره بأيام المهندس قبل التوقيع.', alt: 'خمس طبقات: الحسابات والمتاجر بـApple Developer بـ99 دولاراً في السنة وGoogle Play بـ25 دولاراً مرة واحدة؛ الخادم والقاعدة بـVPS والنطاق والشهادات؛ الخدمات المستهلَكة بالرسائل والإشعارات والبريد والخرائط والدفع؛ الكود بتحديثات النظام وSDK والتبعيات والتصحيحات والدعم؛ المنتج بالتطويرات.' },
    exemple: { title: 'خمسة آلاف مستعمل ومؤسسة واحدة: السنة الأولى بالأرقام', items: [
      { value: '≈ 13 000 دج', label: 'المتاجر: 99 دولاراً لآبل بالسعر الرسمي، غوغل مدفوع سلفاً' },
      { value: '60 إلى 180 ألف دج', label: 'الخادم والنطاق: 5 000 إلى 15 000 دج في الشهر حسب المستضيف' },
      { value: '≈ 60 000 دج', label: 'الرسائل: 5 000 مستعمل × 4 رموز × 3 دج، فرضية' },
      { value: '≈ 25 يوماً', label: 'من عمل المهندس: دورتا نظام، تبعيات، متطلبات المتاجر، تصحيحات', accent: true },
    ], caption: 'الشكل 3 · حساب مبني على فرضيات لا على قياس. المبالغ بالدينار من عروض عمومية للمستضيفين ومن السعر الرسمي لأفريل 2026 (نحو 132 دج للدولار)؛ وسعر الرسالة القصيرة غير منشور ويُطلب من المجمِّع. وأيام المهندس الخمسة والعشرون هي البند الذي يحسم الميزانية: اضربها في السعر اليومي لمزوّدك.', alt: 'مثال حساب: نحو 13 000 دج للمتاجر؛ 60 000 إلى 180 000 دج للخادم والنطاق في السنة؛ نحو 60 000 دج للرسائل على فرضية 3 دج؛ نحو 25 يوم مهندس لدورتي نظام والتبعيات ومتطلبات المتاجر والتصحيحات. الفرضيات مذكورة.' },
    pannes: { title: 'ستة أعطال صامتة وستة ردود', columns: ['كيف يحدث', 'ما يمنعه'], rows: [
      { label: 'تحديث مرفوض من Play', cells: ['مستوى API متجاوَز بعد 31 أوت', 'رفع الإصدار مبرمج في جويلية كل سنة'] },
      { label: 'رفع مرفوض من آبل', cells: ['مبنيّ بـSDK قديم بعد نهاية أفريل', 'Xcode وSDK محدَّثان فور صدور إصدار الربيع'] },
      { label: 'نطاق أو شهادة منتهية', cells: ['«التطبيق لم يعد يعمل»، يوم أحد', 'تجديد تلقائي، تنبيه قبل 30 يوماً'] },
      { label: 'رصيد الرسائل نفد', cells: ['لا رموز دخول، لا تسجيلات', 'عتبة تنبيه، شحن قبل الصفر، مزوّد ثانٍ'] },
      { label: 'تبعية فيها ثغرة', cells: ['مكتبة دفع أو خرائط هشّة', 'مراجعة التبعيات كل دورة، تحديث مختبَر'] },
      { label: 'إذن جديد في النظام', cells: ['الكاميرا أو الموقع أو الإشعارات معطّلة', 'اختبارات على نسخ بيتا لأندرويد وiOS قبل الصدور'] },
    ], caption: 'الشكل 4 · لا شيء من هذه الأعطال ينذر مسبقاً. للأولين تاريخ ثابت عند غوغل وآبل؛ والأربعة الأخرى تقع حين لا ينظر أحد. وعقد الصيانة الجاد هو أولاً تقويم ومراقبة، لا وعد بسرعة الاستجابة.', alt: 'مصفوفة ستة أعطال: تحديث مرفوض من Play، رفع مرفوض من آبل، نطاق أو شهادة منتهية، رصيد الرسائل نفد، تبعية فيها ثغرة، إذن جديد في النظام؛ ولكل منها كيف يحدث وما يمنعه.' },
    calendrier: { title: 'تقويم 2027 لتطبيق يبقى منشوراً، بالأشهر', unit: 'أشهر', items: [
      { label: 'الحصيلة، التبعيات، ميزانية مكتوبة', note: 'جانفي وفيفري', from: 0, to: 2 },
      { label: 'نافذة آبل: SDK السنة', note: 'المتطلب نهاية أفريل، إن استمر الإيقاع', from: 3, to: 4 },
      { label: 'أندرويد جديد: اختبارات، أذونات', note: 'الصدور في جوان', from: 5, to: 6 },
      { label: 'مستوى API لـPlay قبل 31 أوت', note: 'تحديث يُنشر في جويلية', from: 6, to: 8, accent: true },
      { label: 'iOS جديد: اختبارات، تصحيحات', note: 'الصدور في سبتمبر', from: 8, to: 9 },
      { label: 'التجديدات، التطويرات', note: 'آبل، النطاق، الشهادات', from: 10, to: 12 },
    ], caption: 'الشكل 5 · الشهر 0 = جانفي 2027. نافذتا آبل وPlay تعيدان تواريخ 2025 و2026 (نهاية أفريل، 31 أوت)؛ ويمكن لغوغل وآبل تحريكهما، ومن هنا هامش شهر. تحديثان مبرمجان في السنة، في جويلية وأكتوبر، يغطيان كل شيء تقريباً؛ والتصحيحات تنزلق بينهما.', alt: 'تقويم بالأشهر: الحصيلة والتبعيات والميزانية من 0 إلى 2؛ نافذة SDK آبل من 3 إلى 4؛ أندرويد جديد من 5 إلى 6؛ مستوى API لـPlay قبل 31 أوت من 6 إلى 8؛ iOS جديد من 8 إلى 9؛ التجديدات والتطويرات من 10 إلى 12.' },
    modeles: { title: 'من يتكفّل به: ما ينجح، وما ينكسر', columns: ['ما ينجح', 'ما ينكسر'], rows: [
      { label: 'لا أحد', cells: ['لا شيء يُدفع في السنة الأولى', 'تحديث مرفوض، ثم تطبيق غير مرئي للجدد'] },
      { label: 'مطوّر داخلي', cells: ['سريع، يعرف الكود', 'شخص واحد يعرف؛ يغادر فيغادر التقويم معه'] },
      { label: 'مستقل عند الطلب', cells: ['تصحيحات ظرفية عند الطلب', 'لا أحد يراقب التواريخ ولا التبعيات'] },
      { label: 'عقد ساعات مع وكالة', cells: ['ميزانية معروفة، فريق متاح', 'الساعات تذهب للطوارئ لا للتحديثات'] },
      { label: 'عقد بمراقبة وتقويم', cells: ['تواريخ محترَمة، أعطال تُرى قبل المستعملين', 'تكلفة ثابتة حتى في الأشهر الهادئة'] },
      { label: 'استرجاع تطبيق مهجور', cells: ['تدقيق مكتوب، حسابات مستردّة، تحديث منشور', 'أحياناً لا يقبل الكود التحديث: إعادة كتابة'] },
    ], caption: 'الشكل 6 · ننصح بعقد بتقويم ومراقبة لكل تطبيق يحصّل مدفوعات أو يخدم زبائن، وبعقد ساعات لتطبيق داخلي قليل التعرض. وعدم فعل شيء خيار يُدفع ثمنه خلال اثني عشر إلى أربعة وعشرين شهراً، حين تغلق المتاجر الباب.', alt: 'مصفوفة ست طرق للتكفّل: لا أحد، مطوّر داخلي، مستقل عند الطلب، عقد ساعات مع وكالة، عقد بمراقبة وتقويم، استرجاع تطبيق مهجور؛ ولكل منها ما ينجح وما ينكسر.' },
  },
};

export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      annee: { svg: steps({ title: t.annee.title, steps: t.annee.items, arrows: true, rtl }), caption: t.annee.caption, alt: t.annee.alt },
      postes: { svg: layers({ title: t.postes.title, layers: t.postes.layers, rtl }), caption: t.postes.caption, alt: t.postes.alt },
      exemple: { svg: stats({ title: t.exemple.title, items: t.exemple.items, rtl }), caption: t.exemple.caption, alt: t.exemple.alt },
      pannes: { svg: matrix({ title: t.pannes.title, columns: t.pannes.columns, rows: t.pannes.rows, rtl }), caption: t.pannes.caption, alt: t.pannes.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 12, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
      modeles: { svg: matrix({ title: t.modeles.title, columns: t.modeles.columns, rows: t.modeles.rows, rtl }), caption: t.modeles.caption, alt: t.modeles.alt },
    },
  };
}
