import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { fichier, tranche, STRINGS as SC } from './custom/logicielgestion.mjs';
export const slug = 'comment-creer-un-logiciel-de-gestion-en-algerie-2027-excel-ne-suffit-plus-access-sans-code-logiciel-du-marche-ou-developpe-par-ou-commencer';
const T = {
  fr: {
    cover: { eyebrow: 'Logiciel de gestion · Algérie · 2027', title: ['Créer un logiciel de gestion', 'quand Excel ne suffit plus'], subtitle: 'Cinq façons d’y arriver, ce dont il est fait, et pourquoi commencer par une seule chaîne de bout en bout', left: { label: 'Cinq fichiers', sub: 'cinq totaux pour le même mois' }, right: { label: 'Une base', sub: 'saisie une fois, lue par tous' } },
    fichier: { caption: 'Figure 1 · Le même fichier de commandes, six mois plus tard : cinq copies, cinq totaux. À droite, la même information dans une base : cinq postes, un seul total. Exemple construit.' },
    voies: { title: 'Cinq façons d’avoir un logiciel de gestion, et où chacune casse', columns: ['Ce que ça donne', 'Où ça casse'], rows: [
      { label: 'Un tableur ou Access, fait en interne', cells: ['rapide, à votre main, sans rien acheter', 'plusieurs personnes à la fois, puis le départ de son auteur'] },
      { label: 'Un outil sans code, assemblé', cells: ['des écrans et des formulaires en quelques jours', 'règles particulières, volumes, sortie des données'] },
      { label: 'Un logiciel du marché, paramétré', cells: ['des fonctions éprouvées, disponibles tout de suite', 'votre façon de travailler n’entre pas dans ses cases'] },
      { label: 'Un ERP, adapté à l’entreprise', cells: ['une base commune pour tous les services', 'les adaptations s’accumulent et pèsent sur les mises à jour'] },
      { label: 'Un logiciel développé pour vous', cells: ['vos règles, vos écrans, vos données', 'besoin flou au départ, ou personne pour le faire vivre'] },
    ], caption: 'Figure 2 · Cinq façons d’obtenir un logiciel de gestion. Aucune n’est mauvaise en soi : chacune a un point où elle casse. La question est de savoir si vous y êtes déjà, ou si vous y serez dans deux ans.', alt: 'Matrice de cinq voies : un tableur ou Access fait en interne, un outil sans code, un logiciel du marché paramétré, un ERP adapté, un logiciel développé pour vous ; pour chacune, ce que ça donne et où ça casse.' },
    temps: { title: 'Créer un logiciel de gestion, en six temps', items: [
      { label: 'Choisir une chaîne', sub: 'une seule, de bout en bout' },
      { label: 'Dessiner les données', sub: 'fiches, documents, mouvements', accent: true },
      { label: 'Écrire les règles', sub: 'qui peut quoi, quel contrôle' },
      { label: 'Construire la tranche', sub: 'données, règles, écrans, états' },
      { label: 'Reprendre l’existant', sub: 'nettoyer, importer, comparer' },
      { label: 'Élargir par vagues', sub: 'la chaîne suivante, puis l’autre' },
    ], caption: 'Figure 3 · Six temps. Le temps accentué est le deuxième : dessiner les données avant les écrans. Un écran se refait vite ; une donnée mal rangée se paie pendant des années.', alt: 'Six temps : choisir une chaîne, dessiner les données (accentué), écrire les règles, construire la tranche, reprendre l’existant, élargir par vagues.' },
    couches: { title: 'Ce dont un logiciel de gestion est fait, en cinq couches', layers: [
      { label: 'Données', items: [{ name: 'Les données : une fiche par client et par article, un document par opération, saisis une fois', sub: 'ce qui reste quand tout le reste change', accent: true }] },
      { label: 'Règles', items: [{ name: 'Les règles : ce qui est permis, ce qui est contrôlé, ce qui se calcule tout seul', sub: 'un plafond, une remise, un stock qui ne passe pas sous zéro' }] },
      { label: 'Écrans', items: [{ name: 'Les écrans : un par geste du métier, sur poste ou sur téléphone, dans la langue de l’équipe', sub: 'ce que les utilisateurs appellent « le logiciel »' }] },
      { label: 'Droits', items: [{ name: 'Les droits et le journal : qui voit quoi, qui a modifié quoi, et quand', sub: 'ce qu’un fichier partagé ne sait pas dire' }] },
      { label: 'États', items: [{ name: 'Les états et les liaisons : tableaux du gérant, exports, échanges avec les autres outils', sub: 'ce que le logiciel rend à l’entreprise' }] },
    ], caption: 'Figure 4 · Cinq couches. La couche accentuée est celle des données : c’est la seule qui survit à un changement d’écran, d’outil ou de prestataire. C’est aussi celle qu’il faut pouvoir emporter.', alt: 'Cinq couches : les données (accentuée) ; les règles ; les écrans ; les droits et le journal ; les états et les liaisons.' },
    tranche: { caption: 'Figure 5 · Le même travail, dans deux ordres. Couche par couche, la première chaîne n’est utilisable qu’à la semaine 26 ; tranche par tranche, à la semaine 8. Durées fictives d’un exemple construit.' },
    calendrier: { title: 'Huit semaines pour une première chaîne en service', unit: 'sem.', items: [
      { label: 'Cadrage', note: 'la chaîne choisie, les fichiers existants, les règles dites à voix haute, les utilisateurs', from: 0, to: 1, accent: true },
      { label: 'Modèle de données', note: 'fiches, documents, mouvements ; ce qui est saisi une fois, et par qui', from: 1, to: 2 },
      { label: 'Tranche des ventes', note: 'du devis à la facture : données, règles, écrans, états, montrés chaque semaine', from: 2, to: 6 },
      { label: 'Reprise des données', note: 'clients et articles nettoyés, soldes repris, import répété à blanc', from: 4, to: 7 },
      { label: 'Essai en double', note: 'les fichiers et le logiciel tenus ensemble, écarts expliqués un par un', from: 6, to: 8 },
      { label: 'Mise en service', note: 'les fichiers passent en lecture seule ; la chaîne suivante est planifiée', from: 7, to: 8 },
    ], caption: 'Figure 6 · Huit semaines dans l’exemple, pour la chaîne des ventes d’une entreprise de 25 personnes. La période accentuée est la première : on choisit la chaîne et on écoute les règles. Les chaînes suivantes viennent par vagues. Durées indicatives d’un exemple construit.', alt: 'Calendrier de huit semaines : cadrage (accentué), modèle de données, tranche des ventes, reprise des données, essai en double, mise en service.' },
  },
  en: {
    cover: { eyebrow: 'Management software · Algeria · 2027', title: ['Creating management software', 'when Excel is no longer enough'], subtitle: 'Five ways to get there, what it is made of, and why to start with a single chain from end to end', left: { label: 'Five files', sub: 'five totals for the same month' }, right: { label: 'One base', sub: 'entered once, read by all' } },
    fichier: { caption: 'Figure 1 · The same order file, six months later: five copies, five totals. On the right, the same information in a base: five desks, a single total. Constructed example.' },
    voies: { title: 'Five ways to get management software, and where each breaks', columns: ['What it gives', 'Where it breaks'], rows: [
      { label: 'A spreadsheet or Access, made in-house', cells: ['quick, in your hands, nothing to buy', 'several people at once, then its author leaving'] },
      { label: 'A no-code tool, assembled', cells: ['screens and forms in a few days', 'particular rules, volumes, getting data out'] },
      { label: 'Off-the-shelf software, configured', cells: ['proven functions, available at once', 'your way of working does not fit its boxes'] },
      { label: 'An ERP, adapted to the company', cells: ['one shared base for every department', 'adaptations pile up and weigh on updates'] },
      { label: 'Software developed for you', cells: ['your rules, your screens, your data', 'a vague need at the start, or nobody to keep it alive'] },
    ], caption: 'Figure 2 · Five ways to get management software. None is bad in itself: each has a point where it breaks. The question is whether you are already there, or will be in two years.', alt: 'Matrix of five routes: a spreadsheet or Access made in-house, a no-code tool, off-the-shelf software configured, an adapted ERP, software developed for you; for each, what it gives and where it breaks.' },
    temps: { title: 'Creating management software, in six steps', items: [
      { label: 'Choose one chain', sub: 'a single one, end to end' },
      { label: 'Draw the data', sub: 'records, documents, movements', accent: true },
      { label: 'Write the rules', sub: 'who can do what, which check' },
      { label: 'Build the slice', sub: 'data, rules, screens, reports' },
      { label: 'Take over what exists', sub: 'clean, import, compare' },
      { label: 'Widen in waves', sub: 'the next chain, then another' },
    ], caption: 'Figure 3 · Six steps. The accented step is the second: draw the data before the screens. A screen is quickly redone; badly arranged data is paid for over years.', alt: 'Six steps: choose one chain, draw the data (accented), write the rules, build the slice, take over what exists, widen in waves.' },
    couches: { title: 'What management software is made of, in five layers', layers: [
      { label: 'Data', items: [{ name: 'The data: one record per customer and per item, one document per operation, entered once', sub: 'what remains when everything else changes', accent: true }] },
      { label: 'Rules', items: [{ name: 'The rules: what is allowed, what is checked, what is calculated on its own', sub: 'a ceiling, a discount, a stock that cannot go below zero' }] },
      { label: 'Screens', items: [{ name: 'The screens: one per gesture of the trade, on a desk or a phone, in the team’s language', sub: 'what users call “the software”' }] },
      { label: 'Rights', items: [{ name: 'Rights and the log: who sees what, who changed what, and when', sub: 'what a shared file cannot tell' }] },
      { label: 'Reports', items: [{ name: 'Reports and links: the manager’s boards, exports, exchanges with other tools', sub: 'what the software gives back to the company' }] },
    ], caption: 'Figure 4 · Five layers. The accented layer is the data: it is the only one that survives a change of screen, of tool or of provider. It is also the one you must be able to take with you.', alt: 'Five layers: the data (accented); the rules; the screens; rights and the log; reports and links.' },
    tranche: { caption: 'Figure 5 · The same work, in two orders. Layer by layer, the first chain is usable only at week 26; slice by slice, at week 8. Fictitious durations of a constructed example.' },
    calendrier: { title: 'Eight weeks for a first chain in service', unit: 'wk', items: [
      { label: 'Scoping', note: 'the chain chosen, the existing files, the rules said out loud, the users', from: 0, to: 1, accent: true },
      { label: 'Data model', note: 'records, documents, movements; what is entered once, and by whom', from: 1, to: 2 },
      { label: 'Sales slice', note: 'from quote to invoice: data, rules, screens, reports, shown every week', from: 2, to: 6 },
      { label: 'Data take-over', note: 'customers and items cleaned, balances carried over, import rehearsed', from: 4, to: 7 },
      { label: 'Parallel run', note: 'files and software kept together, gaps explained one by one', from: 6, to: 8 },
      { label: 'Go-live', note: 'the files become read-only; the next chain is scheduled', from: 7, to: 8 },
    ], caption: 'Figure 6 · Eight weeks in the example, for the sales chain of a 25-person company. The accented period is the first: choosing the chain and listening to the rules. The next chains come in waves. Indicative durations of a constructed example.', alt: 'Eight-week calendar: scoping (accented), data model, sales slice, data take-over, parallel run, go-live.' },
  },
  ar: {
    cover: { eyebrow: 'برنامج التسيير · الجزائر · 2027', title: ['إنشاء برنامج تسيير', 'حين لا يكفي إكسل'], subtitle: 'خمس طرق للوصول إليه، مما يتكوّن، ولماذا البدء بسلسلة واحدة من أولها إلى آخرها', left: { label: 'خمسة ملفات', sub: 'خمسة مجاميع للشهر نفسه' }, right: { label: 'قاعدة واحدة', sub: 'تُدخَل مرة، ويقرؤها الجميع' } },
    fichier: { caption: 'الشكل 1 · ملف الطلبيات نفسه، بعد ستة أشهر: خمس نسخ، خمسة مجاميع. وفي الجهة الأخرى، المعلومة نفسها في قاعدة: خمسة مكاتب، مجموع واحد. مثال مركَّب.' },
    voies: { title: 'خمس طرق للحصول على برنامج تسيير، وأين تنكسر كل واحدة', columns: ['ما تعطيه', 'أين تنكسر'], rows: [
      { label: 'جدول بيانات أو أكسس، يُصنع داخلياً', cells: ['سريع، في يدكم، دون شراء شيء', 'عدة أشخاص في الوقت نفسه، ثم رحيل صاحبه'] },
      { label: 'أداة دون برمجة، مركَّبة', cells: ['شاشات واستمارات في بضعة أيام', 'القواعد الخاصة، الأحجام، وإخراج البيانات'] },
      { label: 'برنامج جاهز من السوق، مضبوط', cells: ['وظائف مجرَّبة، متوفرة حالاً', 'طريقة عملكم لا تدخل في خاناته'] },
      { label: 'نظام متكامل، مكيَّف للمؤسسة', cells: ['قاعدة مشتركة لكل المصالح', 'التكييفات تتراكم وتثقل التحديثات'] },
      { label: 'برنامج يُطوَّر لكم', cells: ['قواعدكم، شاشاتكم، وبياناتكم', 'حاجة غامضة في البداية، أو لا أحد يتعهده'] },
    ], caption: 'الشكل 2 · خمس طرق للحصول على برنامج تسيير. لا واحدة سيئة في ذاتها: لكل واحدة نقطة تنكسر عندها. والسؤال هو: هل بلغتموها، أم ستبلغونها بعد سنتين.', alt: 'مصفوفة من خمس طرق: جدول بيانات أو أكسس يُصنع داخلياً، أداة دون برمجة، برنامج جاهز مضبوط، نظام متكامل مكيَّف، وبرنامج يُطوَّر لكم؛ ولكل واحدة، ما تعطيه وأين تنكسر.' },
    temps: { title: 'إنشاء برنامج تسيير، في ست مراحل', items: [
      { label: 'اختيار سلسلة', sub: 'واحدة، من أولها إلى آخرها' },
      { label: 'رسم البيانات', sub: 'بطاقات، وثائق، وحركات', accent: true },
      { label: 'كتابة القواعد', sub: 'من يستطيع ماذا، وأي مراقبة' },
      { label: 'بناء الشريحة', sub: 'بيانات، قواعد، شاشات، وكشوف' },
      { label: 'استرجاع الموجود', sub: 'تنظيف، استيراد، ومقارنة' },
      { label: 'التوسيع بموجات', sub: 'السلسلة الموالية، ثم الأخرى' },
    ], caption: 'الشكل 3 · ست مراحل. المرحلة المبرزة هي الثانية: رسم البيانات قبل الشاشات. الشاشة تُعاد بسرعة؛ والبيانات السيئة الترتيب يُدفع ثمنها سنوات.', alt: 'ست مراحل: اختيار سلسلة، رسم البيانات (مبرزة)، كتابة القواعد، بناء الشريحة، استرجاع الموجود، والتوسيع بموجات.' },
    couches: { title: 'مما يتكوّن برنامج التسيير، في خمس طبقات', layers: [
      { label: 'البيانات', items: [{ name: 'البيانات: بطاقة لكل زبون ولكل سلعة، وثيقة لكل عملية، تُدخَل مرة واحدة', sub: 'ما يبقى حين يتغير كل شيء آخر', accent: true }] },
      { label: 'القواعد', items: [{ name: 'القواعد: ما هو مسموح، ما هو مراقَب، وما يُحسب وحده', sub: 'سقف، تخفيض، ومخزون لا ينزل تحت الصفر' }] },
      { label: 'الشاشات', items: [{ name: 'الشاشات: واحدة لكل حركة مهنية، على الحاسوب أو الهاتف، بلغة الفريق', sub: 'ما يسميه المستعملون «البرنامج»' }] },
      { label: 'الصلاحيات', items: [{ name: 'الصلاحيات والسجل: من يرى ماذا، من عدّل ماذا، ومتى', sub: 'ما لا يستطيع ملف مشترك أن يقوله' }] },
      { label: 'الكشوف', items: [{ name: 'الكشوف والروابط: لوحات المسيّر، التصدير، والتبادل مع الأدوات الأخرى', sub: 'ما يردّه البرنامج للمؤسسة' }] },
    ], caption: 'الشكل 4 · خمس طبقات. الطبقة المبرزة هي البيانات: هي الوحيدة التي تنجو من تغيير الشاشة أو الأداة أو المتعامل. وهي كذلك التي يجب أن تستطيعوا أخذها معكم.', alt: 'خمس طبقات: البيانات (مبرزة)؛ القواعد؛ الشاشات؛ الصلاحيات والسجل؛ والكشوف والروابط.' },
    tranche: { caption: 'الشكل 5 · العمل نفسه، بترتيبين. طبقة بطبقة، لا تصير أول سلسلة قابلة للاستعمال إلا في الأسبوع 26؛ وشريحة بشريحة، في الأسبوع 8. مدد خيالية لمثال مركَّب.' },
    calendrier: { title: 'ثمانية أسابيع لأول سلسلة في الخدمة', unit: 'أسبوع', items: [
      { label: 'التأطير', note: 'السلسلة المختارة، الملفات الموجودة، القواعد كما تُقال، والمستعملون', from: 0, to: 1, accent: true },
      { label: 'نموذج البيانات', note: 'بطاقات، وثائق، وحركات؛ ما يُدخَل مرة واحدة، ومن يُدخله', from: 1, to: 2 },
      { label: 'شريحة المبيعات', note: 'من عرض السعر إلى الفاتورة: بيانات، قواعد، شاشات، وكشوف، تُعرض كل أسبوع', from: 2, to: 6 },
      { label: 'استرجاع البيانات', note: 'زبائن وسلع منظَّفة، أرصدة مسترجَعة، واستيراد يُجرَّب مراراً', from: 4, to: 7 },
      { label: 'التشغيل المزدوج', note: 'الملفات والبرنامج يُمسكان معاً، والفوارق تُفسَّر واحداً واحداً', from: 6, to: 8 },
      { label: 'الوضع في الخدمة', note: 'الملفات تصير للقراءة فقط؛ والسلسلة الموالية تُبرمَج', from: 7, to: 8 },
    ], caption: 'الشكل 6 · ثمانية أسابيع في المثال، لسلسلة المبيعات في مؤسسة من 25 شخصاً. الفترة المبرزة هي الأولى: اختيار السلسلة والاستماع إلى القواعد. والسلاسل الموالية تأتي بموجات. مدد تقريبية لمثال مركَّب.', alt: 'رزنامة من ثمانية أسابيع: التأطير (مبرزة)، نموذج البيانات، شريحة المبيعات، استرجاع البيانات، التشغيل المزدوج، ثم الوضع في الخدمة.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      fichier: { svg: fichier(e.fichier, rtl), caption: t.fichier.caption, alt: e.fichier.alt },
      voies: { svg: matrix({ title: t.voies.title, columns: t.voies.columns, rows: t.voies.rows, rtl }), caption: t.voies.caption, alt: t.voies.alt },
      temps: { svg: steps({ title: t.temps.title, steps: t.temps.items, arrows: true, rtl }), caption: t.temps.caption, alt: t.temps.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      tranche: { svg: tranche(e.tranche, rtl), caption: t.tranche.caption, alt: e.tranche.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 8, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
