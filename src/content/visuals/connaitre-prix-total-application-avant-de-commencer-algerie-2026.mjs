import { cover, steps, matrix, timeline, stats } from '../../lib/visuals/index.mjs';

export const slug = 'connaitre-prix-total-application-avant-de-commencer-algerie-2026';

const T = {
  fr: {
    cover: { eyebrow: 'Problème · Budget', title: ['Peut-on connaître', 'le prix total', 'avant de commencer ?'], subtitle: 'Oui, si le périmètre est écrit. Ce qui fait bouger le prix, comment un cadrage le fixe, et comment lire un devis.', left: { label: 'Une idée', sub: 'une fourchette, jamais un total' }, right: { label: 'Un périmètre écrit', sub: 'un prix fixe par jalons' }, note: 'Algérie · 2026' },
    factors: { title: 'Ce qui fait bouger le prix d’une application', columns: ['Impact', 'La question à vous poser'], rows: [
      { label: 'Nombre de rôles utilisateurs', cells: [2, 'Client, livreur, admin, propriétaire : chacun est une application'] },
      { label: 'Intégrations paiement et livraison', cells: [2, 'CIB, Edahabia, SATIM, Yalidine : chacune est un mini-projet'] },
      { label: 'Reprise de données existantes', cells: [1, 'Excel, Sheets, ancien logiciel : combien de lignes, quel état'] },
      { label: 'Langues et sens de lecture', cells: [1, 'Arabe et français dès le départ, ou plus tard'] },
      { label: 'Design sur mesure', cells: [1, 'Identité propre ou composants standards'] },
      { label: 'Fonctionnement hors connexion', cells: [1, 'Terrain, wilayas intérieures, réseau instable'] },
      { label: 'Reporting et administration', cells: [1, 'Qui a besoin de quels chiffres, à quelle fréquence'] },
      { label: 'Publication sur les stores', cells: [0, 'Comptes Apple et Google, à votre nom'] },
    ], legend: '●  fait doubler le prix      ◐  fait varier de 20 à 50 %      ○  marginal', caption: 'Figure 1 · Huit facteurs expliquent presque tout l’écart entre deux devis. Aucun ne se devine à partir d’une idée.', alt: 'Les huit facteurs qui font varier le prix d’une application : rôles utilisateurs, intégrations paiement et livraison, reprise de données, langues, design, hors connexion, reporting, publication sur les stores.' },
    scoping: { title: 'Le cadrage : deux semaines qui transforment une estimation en prix', items: [
      { label: 'Ateliers', sub: 'Jours 1 à 3. Votre métier, vos utilisateurs, ce qui se passe aujourd’hui sans l’application.' },
      { label: 'Périmètre écrit', sub: 'Jours 4 à 7. Liste des écrans, règles métier, intégrations, données à reprendre, ce qui est hors périmètre.' },
      { label: 'Chiffrage par jalon', sub: 'Jours 8 et 9. Chaque jalon a un contenu, une date et un montant.' },
      { label: 'Validation et contrat', sub: 'Jour 10. Le périmètre est annexé au contrat. Il vous appartient.', accent: true },
    ], caption: 'Figure 2 · Le document de cadrage vous appartient. Vous pouvez le faire chiffrer par qui vous voulez.', alt: 'Les quatre étapes d’un cadrage en deux semaines : ateliers, périmètre écrit, chiffrage par jalon, validation et contrat.' },
    milestones: { title: 'Un prix fixe se paie par jalons, jamais d’avance', unit: 'semaines', items: [
      { label: 'Cadrage', note: 'périmètre écrit, chiffrage', from: 0, to: 2 },
      { label: 'Jalon 1 · design validé', note: 'maquettes sur votre téléphone', from: 2, to: 5 },
      { label: 'Jalon 2 · version testable', note: 'toutes les deux semaines, une version', from: 5, to: 12 },
      { label: 'Jalon 3 · publication', note: 'stores, administration, formation', from: 12, to: 14 },
      { label: 'Jalon 4 · garantie', note: 'corrections incluses, puis maintenance', from: 14, to: 18, accent: true },
    ], caption: 'Figure 3 · Chaque jalon a un livrable que vous voyez avant de payer. Un changement de périmètre se chiffre à part, par écrit.', alt: 'Calendrier en semaines : cadrage 0 à 2, jalon design 2 à 5, jalon version testable 5 à 12, jalon publication 12 à 14, jalon garantie 14 à 18.' },
    categories: { title: 'Se situer avant le cadrage : les quatre catégories de la grille publique', items: [
      { value: '1,5 à 4 M DA', label: 'Vitrine ou catalogue, sans compte ni paiement' },
      { value: '4 à 8 M DA', label: 'Comptes utilisateurs, backend, notifications' },
      { value: '8 à 15 M DA', label: 'Paiement CIB, Edahabia, livraison intégrée', accent: true },
      { value: '15 à 40 M DA', label: 'Plateforme multi-rôles, intégrations multiples' },
    ], caption: 'Figure 4 · La grille donne la catégorie, le cadrage donne le prix. L’ordre ne s’inverse pas.', alt: 'Les quatre catégories de prix des applications en Algérie : 1,5 à 4 millions de dinars, 4 à 8, 8 à 15, 15 à 40.' },
  },
  en: {
    cover: { eyebrow: 'Problem · Budget', title: ['Can I know', 'the total price', 'before starting?'], subtitle: 'Yes, if the scope is written. What moves the price, how a scoping phase fixes it, and how to read a quote.', left: { label: 'An idea', sub: 'a range, never a total' }, right: { label: 'A written scope', sub: 'a fixed price by milestones' }, note: 'Algeria · 2026' },
    factors: { title: 'What moves the price of an app', columns: ['Impact', 'The question to ask yourself'], rows: [
      { label: 'Number of user roles', cells: [2, 'Customer, courier, admin, owner: each one is an app'] },
      { label: 'Payment and delivery integrations', cells: [2, 'CIB, Edahabia, SATIM, Yalidine: each is a mini-project'] },
      { label: 'Existing data to import', cells: [1, 'Excel, Sheets, old software: how many rows, in what state'] },
      { label: 'Languages and reading direction', cells: [1, 'Arabic and French from day one, or later'] },
      { label: 'Custom design', cells: [1, 'Own identity or standard components'] },
      { label: 'Offline operation', cells: [1, 'Field work, inland wilayas, unstable network'] },
      { label: 'Reporting and administration', cells: [1, 'Who needs which numbers, how often'] },
      { label: 'Store publishing', cells: [0, 'Apple and Google accounts, in your name'] },
    ], legend: '●  doubles the price      ◐  moves it by 20 to 50%      ○  marginal', caption: 'Figure 1 · Eight factors explain almost all the gap between two quotes. None can be guessed from an idea.', alt: 'The eight factors that move the price of an app: user roles, payment and delivery integrations, data import, languages, design, offline, reporting, store publishing.' },
    scoping: { title: 'Scoping: two weeks that turn an estimate into a price', items: [
      { label: 'Workshops', sub: 'Days 1 to 3. Your business, your users, what happens today without the app.' },
      { label: 'Written scope', sub: 'Days 4 to 7. Screen list, business rules, integrations, data to import, what is out of scope.' },
      { label: 'Pricing by milestone', sub: 'Days 8 and 9. Each milestone has content, a date and an amount.' },
      { label: 'Validation and contract', sub: 'Day 10. The scope is attached to the contract. It belongs to you.', accent: true },
    ], caption: 'Figure 2 · The scoping document belongs to you. You can have it priced by whoever you want.', alt: 'The four steps of a two-week scoping: workshops, written scope, pricing by milestone, validation and contract.' },
    milestones: { title: 'A fixed price is paid by milestones, never upfront', unit: 'weeks', items: [
      { label: 'Scoping', note: 'written scope, pricing', from: 0, to: 2 },
      { label: 'Milestone 1 · design validated', note: 'mockups on your phone', from: 2, to: 5 },
      { label: 'Milestone 2 · testable version', note: 'a version every two weeks', from: 5, to: 12 },
      { label: 'Milestone 3 · release', note: 'stores, admin, training', from: 12, to: 14 },
      { label: 'Milestone 4 · warranty', note: 'fixes included, then maintenance', from: 14, to: 18, accent: true },
    ], caption: 'Figure 3 · Each milestone has a deliverable you see before you pay. A scope change is priced separately, in writing.', alt: 'Timeline in weeks: scoping 0 to 2, design milestone 2 to 5, testable version 5 to 12, release 12 to 14, warranty 14 to 18.' },
    categories: { title: 'Placing yourself before scoping: the four categories of the public grid', items: [
      { value: '1.5 to 4 M DZD', label: 'Showcase or catalogue, no accounts or payment' },
      { value: '4 to 8 M DZD', label: 'User accounts, backend, notifications' },
      { value: '8 to 15 M DZD', label: 'CIB, Edahabia payment, integrated delivery', accent: true },
      { value: '15 to 40 M DZD', label: 'Multi-role platform, multiple integrations' },
    ], caption: 'Figure 4 · The grid gives the category, scoping gives the price. The order never reverses.', alt: 'The four price categories of apps in Algeria: 1.5 to 4 million dinars, 4 to 8, 8 to 15, 15 to 40.' },
  },
  ar: {
    cover: { eyebrow: 'مشكلة · الميزانية', title: ['هل يمكن معرفة', 'السعر الإجمالي', 'قبل البدء؟'], subtitle: 'نعم، إذا كان النطاق مكتوباً. ما الذي يحرّك السعر، كيف يثبّته التأطير، وكيف تقرأ عرض سعر.', left: { label: 'فكرة', sub: 'نطاق سعري، لا إجمالي أبداً' }, right: { label: 'نطاق مكتوب', sub: 'سعر ثابت حسب المراحل' }, note: 'الجزائر · 2026' },
    factors: { title: 'ما الذي يحرّك سعر التطبيق', columns: ['الأثر', 'السؤال الذي تطرحه على نفسك'], rows: [
      { label: 'عدد أدوار المستخدمين', cells: [2, 'عميل، موصّل، مدير، مالك: كل دور تطبيق'] },
      { label: 'تكاملات الدفع والتوصيل', cells: [2, 'CIB، الذهبية، SATIM، Yalidine: كل واحد مشروع مصغّر'] },
      { label: 'استرجاع البيانات الموجودة', cells: [1, 'Excel، Sheets، برنامج قديم: كم سطراً وبأي حالة'] },
      { label: 'اللغات واتجاه القراءة', cells: [1, 'العربية والفرنسية من البداية أم لاحقاً'] },
      { label: 'تصميم مخصص', cells: [1, 'هوية خاصة أم مكوّنات قياسية'] },
      { label: 'العمل دون اتصال', cells: [1, 'الميدان، الولايات الداخلية، شبكة غير مستقرة'] },
      { label: 'التقارير والإدارة', cells: [1, 'من يحتاج أي أرقام وبأي وتيرة'] },
      { label: 'النشر على المتاجر', cells: [0, 'حسابات Apple وGoogle باسمك'] },
    ], legend: '●  يضاعف السعر      ◐  يغيّره بين 20 و50%      ○  هامشي', caption: 'الشكل 1 · ثمانية عوامل تفسّر تقريباً كل الفارق بين عرضين. لا يمكن تخمين أي منها من فكرة.', alt: 'العوامل الثمانية التي تحرّك سعر التطبيق.' },
    scoping: { title: 'التأطير: أسبوعان يحوّلان التقدير إلى سعر', items: [
      { label: 'ورشات', sub: 'الأيام 1 إلى 3. مهنتك، مستخدموك، ما يحدث اليوم بدون التطبيق.' },
      { label: 'نطاق مكتوب', sub: 'الأيام 4 إلى 7. قائمة الشاشات، قواعد العمل، التكاملات، البيانات المسترجعة، ما هو خارج النطاق.' },
      { label: 'تسعير حسب المرحلة', sub: 'اليومان 8 و9. لكل مرحلة محتوى وتاريخ ومبلغ.' },
      { label: 'المصادقة والعقد', sub: 'اليوم 10. يُلحق النطاق بالعقد. وهو ملكك.', accent: true },
    ], caption: 'الشكل 2 · وثيقة التأطير ملكك. يمكنك أن تطلب تسعيرها ممن تشاء.', alt: 'المراحل الأربع للتأطير في أسبوعين.' },
    milestones: { title: 'السعر الثابت يُدفع حسب المراحل، لا مقدّماً أبداً', unit: 'أسابيع', items: [
      { label: 'التأطير', note: 'نطاق مكتوب، تسعير', from: 0, to: 2 },
      { label: 'المرحلة 1 · تصميم مصادق عليه', note: 'نماذج على هاتفك', from: 2, to: 5 },
      { label: 'المرحلة 2 · نسخة قابلة للاختبار', note: 'نسخة كل أسبوعين', from: 5, to: 12 },
      { label: 'المرحلة 3 · النشر', note: 'المتاجر، الإدارة، التكوين', from: 12, to: 14 },
      { label: 'المرحلة 4 · الضمان', note: 'تصحيحات مشمولة ثم صيانة', from: 14, to: 18, accent: true },
    ], caption: 'الشكل 3 · لكل مرحلة مخرج تراه قبل أن تدفع. تغيير النطاق يُسعَّر على حدة وكتابياً.', alt: 'جدول زمني بالأسابيع للمراحل.' },
    categories: { title: 'تحديد موقعك قبل التأطير: الفئات الأربع للشبكة العلنية', items: [
      { value: '1.5 إلى 4 مليون دج', label: 'عرض أو كتالوج، بلا حسابات ولا دفع' },
      { value: '4 إلى 8 مليون دج', label: 'حسابات مستخدمين، خلفية، إشعارات' },
      { value: '8 إلى 15 مليون دج', label: 'دفع CIB والذهبية، توصيل مدمج', accent: true },
      { value: '15 إلى 40 مليون دج', label: 'منصة متعددة الأدوار، تكاملات متعددة' },
    ], caption: 'الشكل 4 · الشبكة تعطي الفئة، والتأطير يعطي السعر. الترتيب لا ينعكس.', alt: 'فئات أسعار التطبيقات الأربع في الجزائر.' },
  },
};

export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      factors: { svg: matrix({ title: t.factors.title, columns: t.factors.columns, rows: t.factors.rows, legend: t.factors.legend, rtl }), caption: t.factors.caption, alt: t.factors.alt },
      scoping: { svg: steps({ title: t.scoping.title, steps: t.scoping.items, arrows: true, rtl }), caption: t.scoping.caption, alt: t.scoping.alt },
      milestones: { svg: timeline({ title: t.milestones.title, items: t.milestones.items, total: 18, tick: 2, unit: t.milestones.unit, rtl }), caption: t.milestones.caption, alt: t.milestones.alt },
      categories: { svg: stats({ title: t.categories.title, items: t.categories.items, rtl }), caption: t.categories.caption, alt: t.categories.alt },
    },
  };
}
