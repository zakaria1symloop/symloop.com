import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';

export const slug = 'combien-de-temps-pour-developper-application-plateforme-algerie-2027-delais-reels';

const T = {
  fr: {
    cover: { eyebrow: 'Problème · Délais', title: ['Combien de temps pour', 'une application en Algérie', 'en 2027 ? Les délais réels.'], subtitle: 'Les délais par type de projet, ce qui dépend de vous et ce qui ne dépend de personne, les phases, et ce qui fait qu’un projet de trois mois en prend six.', left: { label: 'Le devis', sub: '« six semaines » sans préciser quoi' }, right: { label: 'Le calendrier écrit', sub: 'phases, dépendances, date de mise en ligne' }, note: 'Algérie · 2027' },
    types: { title: 'Les délais réels par type de projet, en 2027', columns: ['Délai de construction', 'Ce qui le fait durer'], rows: [
      { label: 'Site ou web-app de commande, prise de rendez-vous', cells: ['Six à dix semaines', 'Le dossier web-marchand, lancé le premier jour ou pas'] },
      { label: 'Application mobile avec back-office', cells: ['Trois à cinq mois', 'Les comptes stores, le hors-ligne, la reprise des données'] },
      { label: 'SaaS métier avec facturation et abonnement', cells: ['Quatre à six mois', 'Le périmètre du métier, le paiement récurrent, les dix pilotes'] },
      { label: 'Plateforme à deux faces, séquestre, logistique', cells: ['Cinq à huit mois', 'Le recrutement des vendeurs, les transporteurs, les deux applications'] },
      { label: 'Agent IA branché sur un back-office existant', cells: ['Six semaines à trois mois', 'L’état des données et des règles écrites avant de commencer'] },
      { label: 'Reprise d’une application abandonnée', cells: ['Six semaines', 'La récupération des comptes et du code, hors de votre contrôle'] },
    ], caption: 'Figure 1 · La colonne de gauche est le temps de construction. La colonne de droite est ce qui s’y ajoute quand on ne l’a pas lancé le premier jour.', alt: 'Matrice des délais par type de projet : site de commande six à dix semaines, application mobile trois à cinq mois, SaaS quatre à six mois, plateforme cinq à huit mois, agent IA six semaines à trois mois, reprise six semaines, avec ce qui fait durer chacun.' },
    phases: { title: 'Les cinq phases, et qui tient chacune', items: [
      { n: '01', label: 'Cadrage écrit', sub: 'Une à deux semaines. Vous décidez, nous écrivons : écrans, règles, prix total, calendrier.' },
      { n: '02', label: 'Prototype testé', sub: 'Une à deux semaines. Cinq utilisateurs réels. Le moment le moins cher pour changer d’avis.' },
      { n: '03', label: 'Développement', sub: 'Le gros du délai. Livraisons toutes les deux semaines, visibles, testables.', accent: true },
      { n: '04', label: 'Reprise des données et tests terrain', sub: 'Deux à quatre semaines. Vos données réelles, vos téléphones, votre réseau.' },
      { n: '05', label: 'Mise en ligne et corrections', sub: 'Deux semaines. Stores, production, premières versions correctives incluses.' },
    ], caption: 'Figure 2 · Les phases 1, 2 et 4 dépendent de votre disponibilité autant que de la nôtre. C’est là que les projets prennent du retard, pas en phase 3.', alt: 'Cinq phases : cadrage écrit, prototype testé, développement, reprise des données et tests terrain, mise en ligne et corrections.' },
    parallel: { title: 'Ce qui court en parallèle, et qui ne dépend de personne', layers: [
      { label: 'Vous', items: [{ name: 'Décisions et validations', sub: 'quarante-huit heures par validation, ou le projet attend', accent: true }, { name: 'Données à reprendre', sub: 'fichiers propres, le plus tôt possible' }] },
      { label: 'Banques et GIE Monétique', items: [{ name: 'Statut de web-marchand', sub: 'des semaines à des mois ; lancé le premier jour' }] },
      { label: 'Stores', items: [{ name: 'Comptes développeur', sub: 'à votre nom, vérification d’identité' }, { name: 'Revue de l’application', sub: 'quelques jours, parfois des allers-retours' }] },
      { label: 'Administration', items: [{ name: 'Société, label startup, identification de plateforme', sub: 'selon le projet ; en parallèle, jamais en série' }] },
      { label: 'Nous', items: [{ name: 'Construction', sub: 'la seule ligne que le studio contrôle entièrement' }] },
    ], caption: 'Figure 3 · Un calendrier honnête a cinq lignes. Un devis qui n’en montre qu’une vous promet une date qu’il ne tient pas.', alt: 'Cinq lignes parallèles : vos décisions et données, le statut de web-marchand, les comptes et la revue des stores, l’administration, la construction par le studio.' },
    timeline: { title: 'Une application mobile avec back-office : seize semaines, en vrai', unit: 'sem.', items: [
      { label: 'Cadrage écrit', note: 'écrans, règles, prix total, calendrier', from: 0, to: 2 },
      { label: 'Web-marchand et comptes stores', note: 'lancés en semaine 1, hors de notre contrôle', from: 1, to: 12 },
      { label: 'Prototype testé', note: 'cinq utilisateurs réels', from: 2, to: 4 },
      { label: 'Développement, livraisons toutes les deux semaines', note: 'application, back-office, paiement', from: 4, to: 12 },
      { label: 'Reprise des données, tests terrain', note: 'vos fichiers, vos téléphones, votre réseau', from: 11, to: 14 },
      { label: 'Mise en ligne et corrections', note: 'stores, production, versions correctives', from: 14, to: 16, accent: true },
    ], caption: 'Figure 4 · Le web-marchand court de la semaine 1 à la semaine 12. Lancé en semaine 8, il décale la mise en ligne de deux mois, sans qu’une ligne de code soit en cause.', alt: 'Calendrier en semaines : cadrage 0 à 2, web-marchand et stores 1 à 12, prototype 2 à 4, développement 4 à 12, reprise et tests 11 à 14, mise en ligne 14 à 16.' },
  },
  en: {
    cover: { eyebrow: 'Problem · Timelines', title: ['How long for an app', 'in Algeria in 2027?', 'The real timelines.'], subtitle: 'Timelines by project type, what depends on you and what depends on nobody, the phases, and what turns a three-month project into six.', left: { label: 'The quote', sub: '“six weeks” without saying of what' }, right: { label: 'The written calendar', sub: 'phases, dependencies, go-live date' }, note: 'Algeria · 2027' },
    types: { title: 'Real timelines by project type, in 2027', columns: ['Build time', 'What makes it longer'], rows: [
      { label: 'Ordering site or web app, appointment booking', cells: ['Six to ten weeks', 'The merchant file, started on day one or not'] },
      { label: 'Mobile app with back-office', cells: ['Three to five months', 'Store accounts, offline mode, data import'] },
      { label: 'Vertical SaaS with invoicing and subscription', cells: ['Four to six months', 'The scope of the trade, recurring payment, the ten pilots'] },
      { label: 'Two-sided platform, escrow, logistics', cells: ['Five to eight months', 'Seller recruitment, carriers, the two apps'] },
      { label: 'AI agent connected to an existing back-office', cells: ['Six weeks to three months', 'The state of the data and written rules before starting'] },
      { label: 'Takeover of an abandoned app', cells: ['Six weeks', 'Recovery of accounts and code, outside your control'] },
    ], caption: 'Figure 1 · The left column is build time. The right column is what gets added when it was not started on day one.', alt: 'Matrix of timelines by project type: ordering site six to ten weeks, mobile app three to five months, SaaS four to six months, platform five to eight months, AI agent six weeks to three months, takeover six weeks, with what makes each longer.' },
    phases: { title: 'The five phases, and who holds each', items: [
      { n: '01', label: 'Written scoping', sub: 'One to two weeks. You decide, we write: screens, rules, total price, calendar.' },
      { n: '02', label: 'Tested prototype', sub: 'One to two weeks. Five real users. The cheapest moment to change your mind.' },
      { n: '03', label: 'Development', sub: 'The bulk of the time. Deliveries every two weeks, visible, testable.', accent: true },
      { n: '04', label: 'Data import and field tests', sub: 'Two to four weeks. Your real data, your phones, your network.' },
      { n: '05', label: 'Go-live and fixes', sub: 'Two weeks. Stores, production, first corrective versions included.' },
    ], caption: 'Figure 2 · Phases 1, 2 and 4 depend on your availability as much as ours. That is where projects slip, not in phase 3.', alt: 'Five phases: written scoping, tested prototype, development, data import and field tests, go-live and fixes.' },
    parallel: { title: 'What runs in parallel, and depends on nobody', layers: [
      { label: 'You', items: [{ name: 'Decisions and sign-offs', sub: 'forty-eight hours per sign-off, or the project waits', accent: true }, { name: 'Data to import', sub: 'clean files, as early as possible' }] },
      { label: 'Banks and GIE Monétique', items: [{ name: 'Online-merchant status', sub: 'weeks to months; started on day one' }] },
      { label: 'Stores', items: [{ name: 'Developer accounts', sub: 'in your name, identity verification' }, { name: 'App review', sub: 'a few days, sometimes back and forth' }] },
      { label: 'Administration', items: [{ name: 'Company, startup label, platform registration', sub: 'depending on the project; in parallel, never in series' }] },
      { label: 'Us', items: [{ name: 'Construction', sub: 'the only line the studio fully controls' }] },
    ], caption: 'Figure 3 · An honest calendar has five lines. A quote that shows only one promises a date it will not keep.', alt: 'Five parallel lines: your decisions and data, merchant status, store accounts and review, administration, construction by the studio.' },
    timeline: { title: 'A mobile app with back-office: sixteen weeks, for real', unit: 'wk', items: [
      { label: 'Written scoping', note: 'screens, rules, total price, calendar', from: 0, to: 2 },
      { label: 'Merchant status and store accounts', note: 'started in week 1, outside our control', from: 1, to: 12 },
      { label: 'Tested prototype', note: 'five real users', from: 2, to: 4 },
      { label: 'Development, deliveries every two weeks', note: 'app, back-office, payment', from: 4, to: 12 },
      { label: 'Data import, field tests', note: 'your files, your phones, your network', from: 11, to: 14 },
      { label: 'Go-live and fixes', note: 'stores, production, corrective versions', from: 14, to: 16, accent: true },
    ], caption: 'Figure 4 · Merchant status runs from week 1 to week 12. Started in week 8, it pushes go-live back two months, with no line of code to blame.', alt: 'Timeline in weeks: scoping 0 to 2, merchant status and stores 1 to 12, prototype 2 to 4, development 4 to 12, import and tests 11 to 14, go-live 14 to 16.' },
  },
  ar: {
    cover: { eyebrow: 'مشكلة · الآجال', title: ['كم من الوقت لتطبيق', 'في الجزائر سنة 2027؟', 'الآجال الحقيقية.'], subtitle: 'الآجال حسب نوع المشروع، ما يعتمد عليك وما لا يعتمد على أحد، المراحل، وما يجعل مشروع ثلاثة أشهر يستغرق ستة.', left: { label: 'عرض السعر', sub: '«ستة أسابيع» دون تحديد ماذا' }, right: { label: 'الجدول المكتوب', sub: 'مراحل، تبعيات، تاريخ النشر' }, note: 'الجزائر · 2027' },
    types: { title: 'الآجال الحقيقية حسب نوع المشروع، في 2027', columns: ['مدة البناء', 'ما يطيلها'], rows: [
      { label: 'موقع أو تطبيق ويب للطلب، حجز مواعيد', cells: ['ستة إلى عشرة أسابيع', 'ملف التاجر الإلكتروني، منطلق في اليوم الأول أو لا'] },
      { label: 'تطبيق جوّال بمكتب خلفي', cells: ['ثلاثة إلى خمسة أشهر', 'حسابات المتاجر، وضع دون اتصال، استرجاع البيانات'] },
      { label: 'SaaS مهني بفوترة واشتراك', cells: ['أربعة إلى ستة أشهر', 'نطاق المهنة، الدفع المتكرر، الزبائن التجريبيون العشرة'] },
      { label: 'منصة بوجهين، حجز، لوجستيك', cells: ['خمسة إلى ثمانية أشهر', 'تجنيد البائعين، الناقلون، التطبيقان'] },
      { label: 'وكيل ذكاء اصطناعي موصول بمكتب خلفي موجود', cells: ['ستة أسابيع إلى ثلاثة أشهر', 'حالة البيانات والقواعد المكتوبة قبل البدء'] },
      { label: 'استعادة تطبيق مهجور', cells: ['ستة أسابيع', 'استرجاع الحسابات والكود، خارج سيطرتك'] },
    ], caption: 'الشكل 1 · العمود الأيمن هو زمن البناء. والعمود الأيسر ما يُضاف إليه حين لا يُطلق في اليوم الأول.', alt: 'مصفوفة الآجال حسب نوع المشروع مع ما يطيل كلاً منها.' },
    phases: { title: 'المراحل الخمس، ومن يمسك كلاً منها', items: [
      { n: '01', label: 'تأطير مكتوب', sub: 'أسبوع إلى أسبوعين. أنت تقرر ونحن نكتب: شاشات، قواعد، سعر إجمالي، جدول.' },
      { n: '02', label: 'نموذج مختبَر', sub: 'أسبوع إلى أسبوعين. خمسة مستخدمين حقيقيين. أرخص لحظة لتغيير الرأي.' },
      { n: '03', label: 'التطوير', sub: 'الجزء الأكبر من الوقت. تسليمات كل أسبوعين، مرئية، قابلة للاختبار.', accent: true },
      { n: '04', label: 'استرجاع البيانات واختبارات ميدانية', sub: 'أسبوعان إلى أربعة. بياناتك الحقيقية، هواتفك، شبكتك.' },
      { n: '05', label: 'النشر والتصحيحات', sub: 'أسبوعان. متاجر، إنتاج، أولى الإصدارات التصحيحية مشمولة.' },
    ], caption: 'الشكل 2 · المراحل 1 و2 و4 تعتمد على توفرك بقدر ما تعتمد على توفرنا. هناك تتأخر المشاريع لا في المرحلة 3.', alt: 'خمس مراحل لمشروع تطبيق.' },
    parallel: { title: 'ما يجري بالتوازي، ولا يعتمد على أحد', layers: [
      { label: 'أنت', items: [{ name: 'قرارات ومصادقات', sub: 'ثمان وأربعون ساعة لكل مصادقة وإلا انتظر المشروع', accent: true }, { name: 'بيانات تُسترجع', sub: 'ملفات نظيفة، في أقرب وقت' }] },
      { label: 'البنوك وGIE Monétique', items: [{ name: 'صفة التاجر الإلكتروني', sub: 'أسابيع إلى أشهر؛ تنطلق في اليوم الأول' }] },
      { label: 'المتاجر', items: [{ name: 'حسابات المطور', sub: 'باسمك، تحقق من الهوية' }, { name: 'مراجعة التطبيق', sub: 'بضعة أيام، أحياناً ذهاب وإياب' }] },
      { label: 'الإدارة', items: [{ name: 'شركة، علامة ستارت-أب، تعريف المنصة', sub: 'حسب المشروع؛ بالتوازي لا بالتسلسل' }] },
      { label: 'نحن', items: [{ name: 'البناء', sub: 'الخط الوحيد الذي يتحكم فيه الاستوديو كلياً' }] },
    ], caption: 'الشكل 3 · الجدول الصادق له خمسة خطوط. عرض سعر يُظهر خطاً واحداً يعدك بتاريخ لن يفي به.', alt: 'خمسة خطوط متوازية في مشروع تطبيق.' },
    timeline: { title: 'تطبيق جوّال بمكتب خلفي: ستة عشر أسبوعاً، فعلاً', unit: 'أسابيع', items: [
      { label: 'تأطير مكتوب', note: 'شاشات، قواعد، سعر إجمالي، جدول', from: 0, to: 2 },
      { label: 'التاجر الإلكتروني وحسابات المتاجر', note: 'منطلقة في الأسبوع 1، خارج سيطرتنا', from: 1, to: 12 },
      { label: 'نموذج مختبَر', note: 'خمسة مستخدمين حقيقيين', from: 2, to: 4 },
      { label: 'تطوير، تسليمات كل أسبوعين', note: 'تطبيق، مكتب خلفي، دفع', from: 4, to: 12 },
      { label: 'استرجاع البيانات، اختبارات ميدانية', note: 'ملفاتك، هواتفك، شبكتك', from: 11, to: 14 },
      { label: 'النشر والتصحيحات', note: 'متاجر، إنتاج، إصدارات تصحيحية', from: 14, to: 16, accent: true },
    ], caption: 'الشكل 4 · يمتد التاجر الإلكتروني من الأسبوع 1 إلى 12. وإن انطلق في الأسبوع 8 أخّر النشر شهرين دون أن يكون سطر كود واحد سبباً.', alt: 'جدول زمني بالأسابيع لتطبيق جوّال بمكتب خلفي.' },
  },
};

export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      types: { svg: matrix({ title: t.types.title, columns: t.types.columns, rows: t.types.rows, rtl }), caption: t.types.caption, alt: t.types.alt },
      phases: { svg: steps({ title: t.phases.title, steps: t.phases.items, arrows: true, rtl }), caption: t.phases.caption, alt: t.phases.alt },
      parallel: { svg: layers({ title: t.parallel.title, layers: t.parallel.layers, rtl }), caption: t.parallel.caption, alt: t.parallel.alt },
      timeline: { svg: timeline({ title: t.timeline.title, items: t.timeline.items, total: 16, tick: 2, unit: t.timeline.unit, rtl }), caption: t.timeline.caption, alt: t.timeline.alt },
    },
  };
}
