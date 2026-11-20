import { cover, steps, layers, matrix, timeline, stats } from '../../lib/visuals/index.mjs';
export const slug = 'migrer-vieux-logiciel-de-gestion-algerie-2027-windev-access-excel-vers-plateforme-web-mobile-sans-arreter';
const T = {
  fr: {
    cover: { eyebrow: 'Migration · Logiciel de gestion · 2027', title: ['Douze ans de factures', 'dans un PC', 'sous l’escalier.'], subtitle: 'Inventaire, extraction des données, premier module en parallèle, rapprochement au dinar près, bascule module par module, extinction de l’ancien : migrer un logiciel WinDev, Access, Excel ou Delphi vers une plateforme web et mobile en Algérie en 2027, sans arrêter l’activité.', left: { label: 'L’ancien logiciel', sub: 'un PC sous Windows 10, une base que personne ne sait ouvrir, un éditeur qui ne répond plus' }, right: { label: 'La plateforme', sub: 'les mêmes données, trois dépôts, le téléphone des vendeurs, le tableau de bord à distance' }, note: 'Algérie · migration de logiciel · 2027' },
    moments: { title: 'Une migration qui n’arrête pas l’activité, en six moments', items: [
      { n: '01', label: 'Inventaire', sub: 'Ce que fait le logiciel, qui s’en sert, quels écrans, quels rapports imprimés, où est la base.' },
      { n: '02', label: 'Extraction des données', sub: 'Tables lues et copiées : clients, articles, factures, stocks, historique complet.' },
      { n: '03', label: 'Premier module en parallèle', sub: 'Ventes et stock dans la plateforme, l’ancien logiciel tourne toujours.' },
      { n: '04', label: 'Rapprochement chiffré', sub: 'Totaux par mois, par client, par article : les deux systèmes doivent dire la même chose.' },
      { n: '05', label: 'Bascule module par module', sub: 'Un module à la fois, un retour arrière possible, jamais un week-end de tout ou rien.', accent: true },
      { n: '06', label: 'Extinction de l’ancien', sub: 'Lecture seule, archive conservée, le PC débranché, l’éditeur libéré.' },
    ], caption: 'Figure 1 · Le moment 02 est celui que les prestataires sautent : sans l’historique complet, la plateforme repart de zéro et les utilisateurs gardent l’ancien logiciel « pour consulter ». Le moment 05 est celui qui protège l’activité : la bascule se fait un module à la fois, avec l’ancien système encore disponible, jamais en un week-end où tout doit marcher le lundi.', alt: 'Six moments : inventaire du logiciel existant ; extraction des données avec historique complet ; premier module en parallèle ; rapprochement chiffré des totaux ; bascule module par module, mise en avant ; extinction de l’ancien logiciel en lecture seule.' },
    couches: { title: 'La plateforme qui remplace le logiciel, en cinq couches', layers: [
      { label: 'Données', items: [
        { name: 'Base migrée, historique complet, exportable', sub: 'clients, articles, factures, stocks, douze ans reprises ; au nom de l’entreprise, copie chaque nuit', accent: true },
      ] },
      { label: 'Règles', items: [
        { name: 'Règles métier réécrites et testées contre l’ancien', sub: 'remises, arrondis, numérotation, stock négatif interdit ou non : chaque règle vérifiée sur les factures passées' },
      ] },
      { label: 'Web', items: [
        { name: 'Back-office et direction', sub: 'saisie, documents imprimés identiques, trois dépôts dans la même base, rôles par personne' },
      ] },
      { label: 'Mobile', items: [
        { name: 'Vendeurs, livreurs, dirigeant', sub: 'prise de commande, stock, encaissement, hors ligne ; les chiffres sur le téléphone du dirigeant, en Algérie ou en France' },
      ] },
      { label: 'Direction', items: [{ name: 'Tableau de bord et agent IA', sub: 'ventes, marges, impayés par dépôt ; questions en français ou en arabe sur douze ans de données' }] },
    ], caption: 'Figure 2 · La couche données est celle qu’on garde et qu’on protège : c’est l’actif de l’entreprise, pas le logiciel. Les règles sont réécrites mais testées contre l’ancien système sur les factures passées, parce qu’elles sont souvent cachées dans les écrans. Les couches web et mobile sont ce que l’ancien logiciel ne pouvait pas faire : plusieurs sites, le terrain, l’accès à distance.', alt: 'Cinq couches : données migrées avec historique complet, mises en avant ; règles métier réécrites et testées contre l’ancien ; web pour le back-office et la direction ; mobile pour vendeurs, livreurs et dirigeant ; direction avec tableau de bord et agent IA.' },
    exemple: { title: 'Un distributeur, trois dépôts, un logiciel WinDev de 2013 : l’exemple', items: [
      { value: '68 000', label: 'factures sur douze ans, 3 900 clients, 2 600 articles, lus dans la base de l’ancien logiciel et repris en entier, hypothèse' },
      { value: '5 modules', label: 'dans l’ordre : ventes et stock, achats, caisse et encaissements, livraisons sur mobile, tableau de bord ; un à la fois' },
      { value: '4 semaines', label: 'de fonctionnement en parallèle pour le premier module, 36 totaux mensuels comparés au dinar près avant la bascule' },
      { value: '0 jour', label: 'd’arrêt de la facturation : l’ancien logiciel reste disponible jusqu’à ce que chaque module ait été rapproché', accent: true },
    ], caption: 'Figure 3 · Un calcul sur des hypothèses, pas une mesure : le nombre de factures, de clients et de modules est à remplacer par le vôtre. Ce qui ne change pas, c’est la méthode : tout l’historique repris, un module à la fois, un rapprochement chiffré avant chaque bascule, et une facturation qui ne s’arrête jamais.', alt: 'Exemple chiffré : 68 000 factures sur douze ans reprises en entier ; cinq modules migrés un à la fois ; quatre semaines de fonctionnement en parallèle avec 36 totaux mensuels comparés ; zéro jour d’arrêt de la facturation, mis en avant.' },
    pieges: { title: 'Six façons de perdre une migration, six parades', columns: ['Comment ça se passe', 'Ce qu’on fait'], rows: [
      { label: 'Le week-end de tout ou rien', cells: ['Tout bascule un vendredi soir ; lundi, une facture ne sort pas et on revient à l’ancien pour six mois', 'Un module à la fois, l’ancien disponible, retour arrière prévu et testé'] },
      { label: 'Les données « nettoyées » à la main', cells: ['On ne reprend que l’année en cours ; les anciens soldes clients et l’historique disparaissent', 'Tout l’historique repris par script, rejoué autant de fois que nécessaire, totaux comparés'] },
      { label: 'Les règles cachées dans les écrans', cells: ['La remise cumulée, l’arrondi, le stock négatif toléré : personne ne les a écrites, elles sont dans le code', 'Chaque règle rejouée sur les factures passées ; une différence est une règle oubliée'] },
      { label: 'Le rapport que personne n’a mentionné', cells: ['L’état imprimé chaque fin de mois pour le gérant n’existe plus ; la plateforme est jugée inutilisable', 'Inventaire des documents imprimés au moment 01, chacun reproduit à l’identique avant la bascule'] },
      { label: 'L’éditeur qui garde la base', cells: ['Mot de passe sur la base, format fermé, contrat muet ; les données sont otages', 'Lecture de la base par ses outils ou par export écran, puis copie quotidienne au nom de l’entreprise'] },
      { label: 'Les habitudes des utilisateurs', cells: ['Quinze ans de raccourcis clavier ; la nouvelle saisie prend deux fois plus de temps, les vendeurs résistent', 'Écrans de saisie dessinés avec les utilisateurs, clavier d’abord, pilote sur un dépôt avant les autres'] },
    ], caption: 'Figure 4 · Les trois premières façons de perdre tiennent à la méthode, les trois suivantes à ce que personne n’a regardé avant de commencer. La plus coûteuse est la deuxième : des données reprises à moitié condamnent la plateforme à vivre à côté de l’ancien logiciel au lieu de le remplacer.', alt: 'Matrice de six pièges : bascule en un week-end ; données reprises partiellement ; règles cachées dans les écrans ; rapport imprimé oublié ; éditeur qui garde la base ; habitudes des utilisateurs ; avec pour chacun la parade.' },
    garder: { title: 'Ce qu’on garde de l’ancien logiciel, ce qu’on refait', columns: ['On garde', 'On refait'], rows: [
      { label: 'Les données', cells: ['Tout : clients, articles, factures, stocks, historique complet, numérotation', 'Le format : une base ouverte, sauvegardée chaque nuit, exportable à la demande'] },
      { label: 'Les règles métier', cells: ['Le fond : remises, arrondis, conditions de vente, telles que l’entreprise les pratique', 'La forme : écrites, testées, modifiables sans rappeler le développeur'] },
      { label: 'Les écrans', cells: ['L’ordre des champs et les raccourcis auxquels les utilisateurs tiennent', 'Tout le reste : web, mobile, rôles, plusieurs dépôts dans la même base'] },
      { label: 'Les documents imprimés', cells: ['La facture, le bon de livraison, l’état de fin de mois, au format que les clients connaissent', 'Leur production : générés par la plateforme, envoyés par e-mail ou WhatsApp, archivés'] },
      { label: 'Les habitudes', cells: ['La saisie au clavier, la facture en trois clics, la fin de journée en dix minutes', 'Les contournements : le cahier à côté, le fichier Excel du dépôt 2, la photo WhatsApp du stock'] },
      { label: 'Le serveur sous l’escalier', cells: ['Rien', 'Hébergement choisi avec l’entreprise, copies hors site, accès par rôle, journal des actions'] },
    ], caption: 'Figure 5 · La migration ne jette pas quinze ans de travail : elle garde les données, le fond des règles et ce à quoi les utilisateurs tiennent, et refait ce que l’ancien logiciel ne pouvait pas faire. La seule ligne où l’on ne garde rien est le serveur sous l’escalier.', alt: 'Matrice de six lignes : données, règles métier, écrans, documents imprimés, habitudes, serveur sous l’escalier ; avec pour chacune ce qu’on garde et ce qu’on refait.' },
    calendrier: { title: 'Le calendrier 2027 d’une migration module par module, en mois', unit: 'mois', items: [
      { label: 'Inventaire, extraction, copie', note: 'janvier : écrans, rapports, base lue, premier rapprochement', from: 0, to: 1 },
      { label: 'Module 1 : ventes et stock en parallèle', note: 'février à avril : saisie dans les deux, totaux comparés chaque semaine', from: 1, to: 4 },
      { label: 'Bascule du module 1', note: 'mai : rapprochement final, ancien en lecture seule pour ce module', from: 4, to: 5, accent: true },
      { label: 'Modules 2 et 3 : achats, caisse, mobile terrain', note: 'juin à septembre : même méthode, vendeurs et livreurs sur téléphone', from: 5, to: 9 },
      { label: 'Tableau de bord, rapports, agent IA', note: 'octobre et novembre : états de fin de mois, questions sur l’historique', from: 9, to: 11 },
      { label: 'Ancien logiciel éteint, archive', note: 'décembre : lecture seule, PC débranché, contrat éditeur clos', from: 11, to: 12 },
    ], caption: 'Figure 6 · Mois 0 = janvier 2027. Le premier module est le plus long parce qu’il porte l’extraction, le rapprochement et les habitudes ; les suivants réutilisent la méthode. Le ramadan commence vers le 8 février 2027 : on ne bascule rien pendant, on fait tourner en parallèle. L’ancien logiciel n’est éteint qu’au dernier mois, quand plus personne ne l’ouvre.', alt: 'Calendrier en mois : inventaire et extraction en janvier ; module 1 en parallèle de février à avril ; bascule du module 1 en mai, mise en avant ; modules 2 et 3 avec mobile terrain de juin à septembre ; tableau de bord et agent IA en octobre et novembre ; ancien logiciel éteint en décembre.' },
  },
  en: {
    cover: { eyebrow: 'Migration · Business software · 2027', title: ['Twelve years of invoices', 'in a PC', 'under the stairs.'], subtitle: 'Inventory, data extraction, first module in parallel, reconciliation to the dinar, switch module by module, old system switched off: migrating WinDev, Access, Excel or Delphi software to a web and mobile platform in Algeria in 2027, without stopping the business.', left: { label: 'The old software', sub: 'a Windows 10 PC, a database nobody can open, a vendor who no longer answers' }, right: { label: 'The platform', sub: 'the same data, three depots, the sales reps’ phones, the dashboard from abroad' }, note: 'Algeria · software migration · 2027' },
    moments: { title: 'A migration that does not stop the business, in six moments', items: [
      { n: '01', label: 'Inventory', sub: 'What the software does, who uses it, which screens, which printed reports, where the database is.' },
      { n: '02', label: 'Data extraction', sub: 'Tables read and copied: customers, items, invoices, stock, full history.' },
      { n: '03', label: 'First module in parallel', sub: 'Sales and stock in the platform while the old software keeps running.' },
      { n: '04', label: 'Reconciliation in figures', sub: 'Totals per month, per customer, per item: both systems must say the same thing.' },
      { n: '05', label: 'Switch module by module', sub: 'One module at a time, a way back, never an all-or-nothing weekend.', accent: true },
      { n: '06', label: 'Old system switched off', sub: 'Read-only, archive kept, the PC unplugged, the vendor released.' },
    ], caption: 'Figure 1 · Moment 02 is the one vendors skip: without the full history, the platform starts from zero and users keep the old software “to look things up”. Moment 05 is the one that protects the business: the switch happens one module at a time with the old system still available, never over a weekend where everything must work on Monday.', alt: 'Six moments: inventory of the existing software; data extraction with full history; first module in parallel; reconciliation of totals; switch module by module, highlighted; old software switched off in read-only.' },
    couches: { title: 'The platform that replaces the software, in five layers', layers: [
      { label: 'Data', items: [
        { name: 'Migrated database, full history, exportable', sub: 'customers, items, invoices, stock, twelve years carried over; in the company’s name, copied every night', accent: true },
      ] },
      { label: 'Rules', items: [
        { name: 'Business rules rewritten and tested against the old system', sub: 'discounts, rounding, numbering, negative stock allowed or not: every rule checked on past invoices' },
      ] },
      { label: 'Web', items: [
        { name: 'Back office and management', sub: 'data entry, identical printed documents, three depots in one database, roles per person' },
      ] },
      { label: 'Mobile', items: [
        { name: 'Sales reps, drivers, owner', sub: 'order taking, stock, collection, offline; the figures on the owner’s phone, in Algeria or in France' },
      ] },
      { label: 'Management', items: [{ name: 'Dashboard and AI agent', sub: 'sales, margins, unpaid per depot; questions in French or Arabic over twelve years of data' }] },
    ], caption: 'Figure 2 · The data layer is the one you keep and protect: it is the company’s asset, not the software. The rules are rewritten but tested against the old system on past invoices, because they are often hidden in the screens. The web and mobile layers are what the old software could not do: several sites, the field, remote access.', alt: 'Five layers: migrated data with full history, highlighted; business rules rewritten and tested against the old system; web for back office and management; mobile for sales reps, drivers and owner; management with dashboard and AI agent.' },
    exemple: { title: 'A distributor, three depots, a WinDev application from 2013: the example', items: [
      { value: '68,000', label: 'invoices over twelve years, 3,900 customers, 2,600 items, read from the old software’s database and carried over in full, assumption' },
      { value: '5 modules', label: 'in order: sales and stock, purchasing, till and collections, deliveries on mobile, dashboard; one at a time' },
      { value: '4 weeks', label: 'of parallel running for the first module, 36 monthly totals compared to the dinar before the switch' },
      { value: '0 days', label: 'of invoicing downtime: the old software stays available until every module has been reconciled', accent: true },
    ], caption: 'Figure 3 · A calculation on assumptions, not a measurement: the number of invoices, customers and modules is to be replaced by yours. What does not change is the method: the whole history carried over, one module at a time, a reconciliation in figures before every switch, and invoicing that never stops.', alt: 'Worked example: 68,000 invoices over twelve years carried over in full; five modules migrated one at a time; four weeks of parallel running with 36 monthly totals compared; zero days of invoicing downtime, highlighted.' },
    pieges: { title: 'Six ways to lose a migration, six counters', columns: ['How it happens', 'What we do'], rows: [
      { label: 'The all-or-nothing weekend', cells: ['Everything switches on a Friday night; on Monday one invoice will not print and the old system comes back for six months', 'One module at a time, the old system available, a way back planned and tested'] },
      { label: 'Data “cleaned up” by hand', cells: ['Only the current year is carried over; old customer balances and history disappear', 'The whole history carried over by script, replayed as often as needed, totals compared'] },
      { label: 'Rules hidden in the screens', cells: ['The cumulative discount, the rounding, the tolerated negative stock: nobody wrote them down, they live in the code', 'Every rule replayed on past invoices; a difference is a forgotten rule'] },
      { label: 'The report nobody mentioned', cells: ['The statement printed every month-end for the owner no longer exists; the platform is judged unusable', 'Inventory of printed documents at moment 01, each reproduced identically before the switch'] },
      { label: 'The vendor who keeps the database', cells: ['Password on the database, closed format, silent contract; the data is hostage', 'Database read with its own tools or by screen export, then daily copy in the company’s name'] },
      { label: 'Users’ habits', cells: ['Fifteen years of keyboard shortcuts; the new entry takes twice as long, the sales staff resist', 'Entry screens drawn with the users, keyboard first, pilot on one depot before the others'] },
    ], caption: 'Figure 4 · The first three ways to lose come from method, the next three from what nobody looked at before starting. The costliest is the second: data carried over by half condemns the platform to live beside the old software instead of replacing it.', alt: 'Matrix of six traps: switch over one weekend; data partly carried over; rules hidden in the screens; forgotten printed report; vendor who keeps the database; users’ habits; with the counter for each.' },
    garder: { title: 'What we keep from the old software, what we rebuild', columns: ['We keep', 'We rebuild'], rows: [
      { label: 'The data', cells: ['Everything: customers, items, invoices, stock, full history, numbering', 'The format: an open database, backed up every night, exportable on request'] },
      { label: 'The business rules', cells: ['The substance: discounts, rounding, terms of sale, as the company practises them', 'The form: written, tested, changeable without calling the developer back'] },
      { label: 'The screens', cells: ['The field order and the shortcuts users care about', 'Everything else: web, mobile, roles, several depots in one database'] },
      { label: 'The printed documents', cells: ['The invoice, the delivery note, the month-end statement, in the format customers know', 'Their production: generated by the platform, sent by e-mail or WhatsApp, archived'] },
      { label: 'The habits', cells: ['Keyboard entry, the invoice in three clicks, the end of day in ten minutes', 'The workarounds: the notebook beside the PC, depot 2’s Excel file, the WhatsApp photo of the stock'] },
      { label: 'The server under the stairs', cells: ['Nothing', 'Hosting chosen with the company, off-site copies, access by role, action log'] },
    ], caption: 'Figure 5 · The migration does not throw away fifteen years of work: it keeps the data, the substance of the rules and what users care about, and rebuilds what the old software could not do. The only line where nothing is kept is the server under the stairs.', alt: 'Matrix of six rows: data, business rules, screens, printed documents, habits, server under the stairs; with what we keep and what we rebuild for each.' },
    calendrier: { title: 'The 2027 calendar of a module-by-module migration, in months', unit: 'months', items: [
      { label: 'Inventory, extraction, copy', note: 'January: screens, reports, database read, first reconciliation', from: 0, to: 1 },
      { label: 'Module 1: sales and stock in parallel', note: 'February to April: entry in both, totals compared every week', from: 1, to: 4 },
      { label: 'Switch of module 1', note: 'May: final reconciliation, old system read-only for this module', from: 4, to: 5, accent: true },
      { label: 'Modules 2 and 3: purchasing, till, field mobile', note: 'June to September: same method, sales reps and drivers on phones', from: 5, to: 9 },
      { label: 'Dashboard, reports, AI agent', note: 'October and November: month-end statements, questions over the history', from: 9, to: 11 },
      { label: 'Old software off, archive', note: 'December: read-only, PC unplugged, vendor contract closed', from: 11, to: 12 },
    ], caption: 'Figure 6 · Month 0 = January 2027. The first module is the longest because it carries the extraction, the reconciliation and the habits; the following ones reuse the method. Ramadan starts around 8 February 2027: nothing is switched during it, both systems run in parallel. The old software is only switched off in the last month, when nobody opens it any more.', alt: 'Calendar in months: inventory and extraction in January; module 1 in parallel from February to April; switch of module 1 in May, highlighted; modules 2 and 3 with field mobile from June to September; dashboard and AI agent in October and November; old software switched off in December.' },
  },
  ar: {
    cover: { eyebrow: 'ترحيل · برنامج التسيير · 2027', title: ['اثنتا عشرة سنة من الفواتير', 'في حاسوب', 'تحت الدرج.'], subtitle: 'جرد، استخراج البيانات، أول وحدة بالتوازي، مطابقة حتى الدينار، انتقال وحدة بوحدة، إطفاء القديم: ترحيل برنامج WinDev أو Access أو Excel أو Delphi إلى منصة ويب وهاتف في الجزائر سنة 2027، دون توقيف النشاط.', left: { label: 'البرنامج القديم', sub: 'حاسوب بويندوز 10، قاعدة لا يعرف أحد فتحها، مورّد لم يعد يجيب' }, right: { label: 'المنصة', sub: 'البيانات نفسها، ثلاثة مستودعات، هواتف البائعين، لوحة المتابعة عن بعد' }, note: 'الجزائر · ترحيل البرامج · 2027' },
    moments: { title: 'ترحيل لا يوقف النشاط، في ست لحظات', items: [
      { n: '01', label: 'الجرد', sub: 'ما يفعله البرنامج، من يستعمله، أي شاشات، أي تقارير مطبوعة، أين القاعدة.' },
      { n: '02', label: 'استخراج البيانات', sub: 'الجداول تُقرأ وتُنسخ: الزبائن، المواد، الفواتير، المخزون، التاريخ الكامل.' },
      { n: '03', label: 'أول وحدة بالتوازي', sub: 'المبيعات والمخزون في المنصة، والبرنامج القديم ما يزال يعمل.' },
      { n: '04', label: 'مطابقة بالأرقام', sub: 'المجاميع لكل شهر ولكل زبون ولكل مادة: النظامان يجب أن يقولا الشيء نفسه.' },
      { n: '05', label: 'انتقال وحدة بوحدة', sub: 'وحدة واحدة في كل مرة، إمكانية الرجوع، لا نهاية أسبوع «كل شيء أو لا شيء».', accent: true },
      { n: '06', label: 'إطفاء القديم', sub: 'قراءة فقط، أرشيف محفوظ، الحاسوب مفصول، المورّد محرَّر.' },
    ], caption: 'الشكل 1 · اللحظة 02 هي التي يتجاوزها المورّدون: بدون التاريخ الكامل تنطلق المنصة من الصفر ويحتفظ المستعملون بالبرنامج القديم «للاطلاع». اللحظة 05 هي التي تحمي النشاط: الانتقال يتم وحدة بوحدة والنظام القديم ما يزال متاحاً، لا في نهاية أسبوع يجب أن يعمل فيها كل شيء يوم الاثنين.', alt: 'ست لحظات: جرد البرنامج الحالي؛ استخراج البيانات مع التاريخ الكامل؛ أول وحدة بالتوازي؛ مطابقة المجاميع؛ انتقال وحدة بوحدة، مُبرَز؛ إطفاء البرنامج القديم في وضع القراءة فقط.' },
    couches: { title: 'المنصة التي تحل محل البرنامج، في خمس طبقات', layers: [
      { label: 'البيانات', items: [
        { name: 'قاعدة مرحَّلة، تاريخ كامل، قابلة للتصدير', sub: 'الزبائن، المواد، الفواتير، المخزون، اثنتا عشرة سنة منقولة؛ باسم الشركة، نسخة كل ليلة', accent: true },
      ] },
      { label: 'القواعد', items: [
        { name: 'قواعد العمل مُعادة الكتابة ومختبَرة على القديم', sub: 'التخفيضات، التقريب، الترقيم، المخزون السالب مسموح أم لا: كل قاعدة تُفحص على الفواتير السابقة' },
      ] },
      { label: 'الويب', items: [
        { name: 'المكتب الخلفي والإدارة', sub: 'الإدخال، وثائق مطبوعة مطابقة، ثلاثة مستودعات في قاعدة واحدة، أدوار لكل شخص' },
      ] },
      { label: 'الهاتف', items: [
        { name: 'البائعون، الموزعون، المسيّر', sub: 'أخذ الطلبات، المخزون، التحصيل، دون اتصال؛ الأرقام على هاتف المسيّر في الجزائر أو في فرنسا' },
      ] },
      { label: 'الإدارة', items: [{ name: 'لوحة المتابعة والوكيل الذكي', sub: 'المبيعات، الهوامش، غير المدفوع لكل مستودع؛ أسئلة بالفرنسية أو العربية على اثنتي عشرة سنة من البيانات' }] },
    ], caption: 'الشكل 2 · طبقة البيانات هي التي نحتفظ بها ونحميها: هي أصل الشركة، لا البرنامج. القواعد تُعاد كتابتها لكنها تُختبر على النظام القديم بالفواتير السابقة، لأنها كثيراً ما تكون مخفية في الشاشات. طبقتا الويب والهاتف هما ما لم يستطع البرنامج القديم فعله: عدة مواقع، الميدان، الوصول عن بعد.', alt: 'خمس طبقات: بيانات مرحَّلة بتاريخ كامل، مُبرَزة؛ قواعد عمل مُعادة الكتابة ومختبَرة على القديم؛ ويب للمكتب الخلفي والإدارة؛ هاتف للبائعين والموزعين والمسيّر؛ إدارة بلوحة متابعة ووكيل ذكي.' },
    exemple: { title: 'موزّع، ثلاثة مستودعات، تطبيق WinDev من 2013: المثال', items: [
      { value: '68 000', label: 'فاتورة على اثنتي عشرة سنة، 3 900 زبون، 2 600 مادة، تُقرأ من قاعدة البرنامج القديم وتُنقل كاملة، فرضية' },
      { value: '5 وحدات', label: 'بالترتيب: المبيعات والمخزون، المشتريات، الصندوق والتحصيل، التوصيل على الهاتف، لوحة المتابعة؛ واحدة في كل مرة' },
      { value: '4 أسابيع', label: 'من التشغيل بالتوازي للوحدة الأولى، 36 مجموعاً شهرياً يُقارن حتى الدينار قبل الانتقال' },
      { value: '0 يوم', label: 'توقف للفوترة: البرنامج القديم يبقى متاحاً حتى تُطابَق كل وحدة', accent: true },
    ], caption: 'الشكل 3 · حساب على فرضيات لا قياس: عدد الفواتير والزبائن والوحدات يُستبدل بأرقامكم. ما لا يتغير هو الطريقة: التاريخ كله منقول، وحدة في كل مرة، مطابقة بالأرقام قبل كل انتقال، وفوترة لا تتوقف أبداً.', alt: 'مثال محسوب: 68 000 فاتورة على اثنتي عشرة سنة منقولة كاملة؛ خمس وحدات مرحَّلة واحدة في كل مرة؛ أربعة أسابيع تشغيل بالتوازي مع 36 مجموعاً شهرياً مقارَناً؛ صفر يوم توقف للفوترة، مُبرَز.' },
    pieges: { title: 'ست طرق لخسارة الترحيل، وست وقايات', columns: ['كيف يحدث', 'ما نفعله'], rows: [
      { label: 'نهاية أسبوع «كل شيء أو لا شيء»', cells: ['كل شيء ينتقل مساء الجمعة؛ يوم الاثنين فاتورة لا تخرج فيعود القديم لستة أشهر', 'وحدة في كل مرة، القديم متاح، رجوع مخطط ومختبَر'] },
      { label: 'بيانات «منظَّفة» يدوياً', cells: ['لا تُنقل إلا السنة الجارية؛ أرصدة الزبائن القديمة والتاريخ تختفي', 'التاريخ كله يُنقل بسكريبت يُعاد تشغيله كلما لزم، والمجاميع تُقارن'] },
      { label: 'قواعد مخفية في الشاشات', cells: ['التخفيض التراكمي، التقريب، المخزون السالب المتسامَح فيه: لم يكتبها أحد، هي في الكود', 'كل قاعدة تُعاد على الفواتير السابقة؛ أي فرق هو قاعدة منسية'] },
      { label: 'التقرير الذي لم يذكره أحد', cells: ['الكشف المطبوع آخر كل شهر للمسيّر لم يعد موجوداً؛ تُعتبر المنصة غير صالحة', 'جرد الوثائق المطبوعة في اللحظة 01، وكل واحدة تُعاد مطابقة قبل الانتقال'] },
      { label: 'المورّد الذي يحتفظ بالقاعدة', cells: ['كلمة سر على القاعدة، صيغة مغلقة، عقد صامت؛ البيانات رهينة', 'قراءة القاعدة بأدواتها أو بتصدير الشاشات، ثم نسخة يومية باسم الشركة'] },
      { label: 'عادات المستعملين', cells: ['خمس عشرة سنة من اختصارات لوحة المفاتيح؛ الإدخال الجديد يأخذ ضعف الوقت والبائعون يقاومون', 'شاشات إدخال تُرسم مع المستعملين، لوحة المفاتيح أولاً، تجربة في مستودع واحد قبل الباقي'] },
    ], caption: 'الشكل 4 · الطرق الثلاث الأولى للخسارة من الطريقة، والثلاث التالية مما لم ينظر فيه أحد قبل البدء. الأكثر كلفة هي الثانية: بيانات منقولة نصفياً تحكم على المنصة بالعيش إلى جانب البرنامج القديم بدل أن تحل محله.', alt: 'مصفوفة ستة فخاخ: انتقال في نهاية أسبوع؛ بيانات منقولة جزئياً؛ قواعد مخفية في الشاشات؛ تقرير مطبوع منسي؛ مورّد يحتفظ بالقاعدة؛ عادات المستعملين؛ مع الوقاية لكل منها.' },
    garder: { title: 'ما نحتفظ به من البرنامج القديم، وما نعيد بناءه', columns: ['نحتفظ', 'نعيد البناء'], rows: [
      { label: 'البيانات', cells: ['كل شيء: الزبائن، المواد، الفواتير، المخزون، التاريخ الكامل، الترقيم', 'الصيغة: قاعدة مفتوحة، تُنسخ كل ليلة، قابلة للتصدير عند الطلب'] },
      { label: 'قواعد العمل', cells: ['الجوهر: التخفيضات، التقريب، شروط البيع كما تمارسها الشركة', 'الشكل: مكتوبة، مختبَرة، قابلة للتعديل دون استدعاء المطوّر'] },
      { label: 'الشاشات', cells: ['ترتيب الحقول والاختصارات التي يتمسك بها المستعملون', 'كل ما عداه: ويب، هاتف، أدوار، عدة مستودعات في قاعدة واحدة'] },
      { label: 'الوثائق المطبوعة', cells: ['الفاتورة، وصل التسليم، كشف آخر الشهر، بالصيغة التي يعرفها الزبائن', 'إنتاجها: تولّدها المنصة، تُرسل بالبريد أو واتساب، تُؤرشف'] },
      { label: 'العادات', cells: ['الإدخال بلوحة المفاتيح، الفاتورة بثلاث نقرات، نهاية اليوم في عشر دقائق', 'الالتفافات: الدفتر بجانب الحاسوب، ملف Excel للمستودع 2، صورة واتساب للمخزون'] },
      { label: 'الخادم تحت الدرج', cells: ['لا شيء', 'استضافة تُختار مع الشركة، نسخ خارج الموقع، وصول بالأدوار، سجل العمليات'] },
    ], caption: 'الشكل 5 · الترحيل لا يرمي خمس عشرة سنة من العمل: يحتفظ بالبيانات وبجوهر القواعد وبما يتمسك به المستعملون، ويعيد بناء ما لم يستطع البرنامج القديم فعله. السطر الوحيد الذي لا نحتفظ فيه بشيء هو الخادم تحت الدرج.', alt: 'مصفوفة ستة أسطر: البيانات، قواعد العمل، الشاشات، الوثائق المطبوعة، العادات، الخادم تحت الدرج؛ مع ما نحتفظ به وما نعيد بناءه لكل منها.' },
    calendrier: { title: 'تقويم 2027 لترحيل وحدة بوحدة، بالأشهر', unit: 'شهر', items: [
      { label: 'جرد، استخراج، نسخ', note: 'جانفي: الشاشات، التقارير، قراءة القاعدة، أول مطابقة', from: 0, to: 1 },
      { label: 'الوحدة 1: المبيعات والمخزون بالتوازي', note: 'فيفري إلى أفريل: إدخال في الاثنين، مجاميع تُقارن كل أسبوع', from: 1, to: 4 },
      { label: 'انتقال الوحدة 1', note: 'ماي: مطابقة نهائية، القديم للقراءة فقط لهذه الوحدة', from: 4, to: 5, accent: true },
      { label: 'الوحدتان 2 و3: المشتريات، الصندوق، الهاتف الميداني', note: 'جوان إلى سبتمبر: الطريقة نفسها، البائعون والموزعون على الهاتف', from: 5, to: 9 },
      { label: 'لوحة المتابعة، التقارير، الوكيل الذكي', note: 'أكتوبر ونوفمبر: كشوف آخر الشهر، أسئلة على التاريخ', from: 9, to: 11 },
      { label: 'إطفاء القديم، الأرشيف', note: 'ديسمبر: قراءة فقط، الحاسوب مفصول، عقد المورّد مغلق', from: 11, to: 12 },
    ], caption: 'الشكل 6 · الشهر 0 = جانفي 2027. الوحدة الأولى هي الأطول لأنها تحمل الاستخراج والمطابقة والعادات؛ التاليات تعيد استعمال الطريقة. رمضان يبدأ نحو 8 فيفري 2027: لا ننقل شيئاً خلاله بل نشغّل بالتوازي. البرنامج القديم لا يُطفأ إلا في الشهر الأخير، حين لا يفتحه أحد.', alt: 'تقويم بالأشهر: جرد واستخراج في جانفي؛ الوحدة 1 بالتوازي من فيفري إلى أفريل؛ انتقال الوحدة 1 في ماي، مُبرَز؛ الوحدتان 2 و3 مع الهاتف الميداني من جوان إلى سبتمبر؛ لوحة المتابعة والوكيل الذكي في أكتوبر ونوفمبر؛ إطفاء القديم في ديسمبر.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      moments: { svg: steps({ title: t.moments.title, steps: t.moments.items, arrows: true, rtl }), caption: t.moments.caption, alt: t.moments.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      exemple: { svg: stats({ title: t.exemple.title, items: t.exemple.items, rtl }), caption: t.exemple.caption, alt: t.exemple.alt },
      pieges: { svg: matrix({ title: t.pieges.title, columns: t.pieges.columns, rows: t.pieges.rows, rtl }), caption: t.pieges.caption, alt: t.pieges.alt },
      garder: { svg: matrix({ title: t.garder.title, columns: t.garder.columns, rows: t.garder.rows, rtl }), caption: t.garder.caption, alt: t.garder.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 12, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
