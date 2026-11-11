import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';

export const slug = 'mon-application-bloquee-chez-un-developpeur-disparu-reprendre-projet-algerie-2027';

const T = {
  fr: {
    cover: { eyebrow: 'Problème · Projet bloqué', title: ['Mon application est', 'bloquée chez un développeur', 'qui a disparu. Et maintenant ?'], subtitle: 'Ce qui se récupère et comment, l’audit qui décide entre garder et réécrire, le kit de propriété pour que ça n’arrive plus, et les six semaines de la reprise, en 2027.', left: { label: 'Aujourd’hui', sub: 'comptes du prestataire, code introuvable' }, right: { label: 'Dans six semaines', sub: 'tout à votre nom, application à jour' }, note: 'Algérie · 2027' },
    steps: { title: 'Les quatre étapes d’une reprise', items: [
      { n: '01', label: 'Inventaire', sub: 'Ce que vous avez : comptes, code, serveurs, domaine, stores, clés. Ce qui est à votre nom et ce qui ne l’est pas.' },
      { n: '02', label: 'Récupération', sub: 'Actif par actif : stores, hébergeur, domaine, dépôt de code, services tiers. Mise en demeure si le contrat le permet.', accent: true },
      { n: '03', label: 'Audit', sub: 'Le code est-il lisible, à jour, sûr ? Les données sont-elles exportables ? Ce qui se garde, ce qui se réécrit.' },
      { n: '04', label: 'Remise en route', sub: 'Accès verrouillés, dépendances mises à jour, stores repris, sauvegardes, documentation d’une page.' },
    ], caption: 'Figure 1 · La récupération vient avant l’audit : on n’audite pas un code qu’on n’a pas. Et l’audit vient avant la décision de réécrire.', alt: 'Quatre étapes d’une reprise d’application : inventaire, récupération, audit, remise en route.' },
    assets: { title: 'Ce qui se récupère, et comment', columns: ['Si c’est à votre nom', 'Si c’est au nom du prestataire'], rows: [
      { label: 'Comptes Google Play et App Store', cells: ['Changez le mot de passe, activez la double authentification sur votre téléphone', 'Demandez le transfert de l’application ; sinon, republication sous votre compte'] },
      { label: 'Nom de domaine', cells: ['Vérifiez le titulaire chez le registrar, renouvelez', 'Transfert à exiger par écrit ; à défaut, nouveau domaine et redirection'] },
      { label: 'Hébergement et serveurs', cells: ['Changez les accès, exportez une sauvegarde complète', 'Export de la base via l’hébergeur ; sinon, reconstruction depuis l’application'] },
      { label: 'Code source', cells: ['Vérifiez que le dépôt contient la dernière version déployée', 'Réclamez-le au titre du contrat ; récupérez le build en production'] },
      { label: 'Base de données et données clients', cells: ['Export, sauvegarde, accès tracés', 'Vos données vous appartiennent : exigez l’export, loi 18-07 à l’appui'] },
      { label: 'Clés et services tiers (SMS, paiement, cartes)', cells: ['Révoquez et recréez toutes les clés', 'Recréez les comptes à votre nom, réinstallez les clés'] },
    ], caption: 'Figure 2 · La colonne de droite coûte dix fois la colonne de gauche. Le kit de propriété sert à ne plus jamais y être.', alt: 'Matrice des actifs d’une application et de la procédure de récupération selon qu’ils sont au nom du client ou du prestataire : stores, domaine, hébergement, code, données, clés.' },
    kit: { title: 'Le kit de propriété d’une application en 2027', layers: [
      { label: 'Comptes', items: [{ name: 'Stores, domaine, hébergeur à votre nom', sub: 'double authentification sur votre téléphone, pas celui du prestataire', accent: true }] },
      { label: 'Code', items: [{ name: 'Dépôt à votre nom', sub: 'le prestataire est invité, l’accès se révoque' }, { name: 'Livraison à chaque étape', sub: 'pas à la fin du projet' }] },
      { label: 'Infrastructure', items: [{ name: 'Serveurs et base', sub: 'accès administrateur chez vous' }, { name: 'Clés dans un coffre', sub: 'SMS, paiement, cartes, IA' }, { name: 'Sauvegardes testées', sub: 'restaurées une fois, pas supposées' }] },
      { label: 'Contrat', items: [{ name: 'Propriété du code écrite', sub: 'cession à chaque paiement' }, { name: 'Clause de réversibilité', sub: 'accès et documentation remis sous quinze jours' }] },
      { label: 'Documentation', items: [{ name: 'Une page : où est quoi, comment déployer', sub: 'lisible par un autre développeur en une heure' }] },
    ], caption: 'Figure 3 · Cinq couches, une règle : rien d’essentiel n’existe uniquement sur l’ordinateur ou dans le téléphone du prestataire.', alt: 'Kit de propriété en cinq couches : comptes à votre nom, dépôt de code à votre nom, infrastructure et clés, contrat avec cession et réversibilité, documentation d’une page.' },
    timeline: { title: 'Six semaines pour reprendre la main', unit: 'sem.', items: [
      { label: 'Inventaire', note: 'liste des actifs, qui détient quoi, contrat relu', from: 0, to: 1 },
      { label: 'Récupération', note: 'stores, domaine, hébergeur, code, clés ; mise en demeure si besoin', from: 1, to: 3 },
      { label: 'Audit', note: 'lisibilité, dépendances, sécurité, données', from: 2, to: 4 },
      { label: 'Décision : garder, réparer ou réécrire', note: 'sur l’audit, avec un prix total écrit', from: 4, to: 4.5 },
      { label: 'Remise en route', note: 'accès verrouillés, mises à jour, stores repris, documentation', from: 4.5, to: 6, accent: true },
    ], caption: 'Figure 4 · La décision de réécrire se prend en semaine quatre, sur l’audit. Prise en semaine zéro, elle coûte un projet entier pour un code qui aurait peut-être tenu.', alt: 'Calendrier en semaines : inventaire 0 à 1, récupération 1 à 3, audit 2 à 4, décision en semaine 4, remise en route 4 à 6.' },
  },
  en: {
    cover: { eyebrow: 'Problem · Stuck project', title: ['My app is stuck with', 'a developer who vanished.', 'What now?'], subtitle: 'What can be recovered and how, the audit that decides between keeping and rewriting, the ownership kit so it never happens again, and the six weeks of the takeover, in 2027.', left: { label: 'Today', sub: 'vendor’s accounts, code nowhere' }, right: { label: 'In six weeks', sub: 'all in your name, app updated' }, note: 'Algeria · 2027' },
    steps: { title: 'The four steps of a takeover', items: [
      { n: '01', label: 'Inventory', sub: 'What you have: accounts, code, servers, domain, stores, keys. What is in your name and what is not.' },
      { n: '02', label: 'Recovery', sub: 'Asset by asset: stores, host, domain, code repository, third-party services. Formal notice if the contract allows it.', accent: true },
      { n: '03', label: 'Audit', sub: 'Is the code readable, up to date, secure? Is the data exportable? What to keep, what to rewrite.' },
      { n: '04', label: 'Restart', sub: 'Access locked down, dependencies updated, stores taken over, backups, one-page documentation.' },
    ], caption: 'Figure 1 · Recovery comes before the audit: you cannot audit code you do not have. And the audit comes before the decision to rewrite.', alt: 'Four steps of an app takeover: inventory, recovery, audit, restart.' },
    assets: { title: 'What can be recovered, and how', columns: ['If it is in your name', 'If it is in the vendor’s name'], rows: [
      { label: 'Google Play and App Store accounts', cells: ['Change the password, enable two-factor on your own phone', 'Request the app transfer; otherwise, republish under your account'] },
      { label: 'Domain name', cells: ['Check the registrant at the registrar, renew', 'Demand the transfer in writing; failing that, new domain and redirect'] },
      { label: 'Hosting and servers', cells: ['Change the access, export a full backup', 'Database export through the host; otherwise, rebuild from the app'] },
      { label: 'Source code', cells: ['Check the repository holds the last deployed version', 'Claim it under the contract; recover the production build'] },
      { label: 'Database and customer data', cells: ['Export, backup, traced access', 'Your data belongs to you: demand the export, Law 18-07 in hand'] },
      { label: 'Keys and third-party services (SMS, payment, maps)', cells: ['Revoke and recreate every key', 'Recreate the accounts in your name, reinstall the keys'] },
    ], caption: 'Figure 2 · The right-hand column costs ten times the left-hand one. The ownership kit exists so you are never there again.', alt: 'Matrix of an app’s assets and the recovery procedure depending on whether they are in the client’s or the vendor’s name: stores, domain, hosting, code, data, keys.' },
    kit: { title: 'The ownership kit of an app in 2027', layers: [
      { label: 'Accounts', items: [{ name: 'Stores, domain, host in your name', sub: 'two-factor on your phone, not the vendor’s', accent: true }] },
      { label: 'Code', items: [{ name: 'Repository in your name', sub: 'the vendor is a guest, access is revocable' }, { name: 'Delivery at every stage', sub: 'not at the end of the project' }] },
      { label: 'Infrastructure', items: [{ name: 'Servers and database', sub: 'admin access on your side' }, { name: 'Keys in a vault', sub: 'SMS, payment, maps, AI' }, { name: 'Tested backups', sub: 'restored once, not assumed' }] },
      { label: 'Contract', items: [{ name: 'Code ownership in writing', sub: 'assignment at each payment' }, { name: 'Reversibility clause', sub: 'access and documentation handed over within fifteen days' }] },
      { label: 'Documentation', items: [{ name: 'One page: where is what, how to deploy', sub: 'readable by another developer in an hour' }] },
    ], caption: 'Figure 3 · Five layers, one rule: nothing essential exists only on the vendor’s computer or phone.', alt: 'Ownership kit in five layers: accounts in your name, code repository in your name, infrastructure and keys, contract with assignment and reversibility, one-page documentation.' },
    timeline: { title: 'Six weeks to take back control', unit: 'wk', items: [
      { label: 'Inventory', note: 'asset list, who holds what, contract reread', from: 0, to: 1 },
      { label: 'Recovery', note: 'stores, domain, host, code, keys; formal notice if needed', from: 1, to: 3 },
      { label: 'Audit', note: 'readability, dependencies, security, data', from: 2, to: 4 },
      { label: 'Decision: keep, repair or rewrite', note: 'on the audit, with a written total price', from: 4, to: 4.5 },
      { label: 'Restart', note: 'access locked, updates, stores taken over, documentation', from: 4.5, to: 6, accent: true },
    ], caption: 'Figure 4 · The decision to rewrite is made in week four, on the audit. Made in week zero, it costs a whole project for code that might have held.', alt: 'Timeline in weeks: inventory 0 to 1, recovery 1 to 3, audit 2 to 4, decision in week 4, restart 4 to 6.' },
  },
  ar: {
    cover: { eyebrow: 'مشكلة · مشروع معلّق', title: ['تطبيقي معلّق عند', 'مطوّر اختفى.', 'ماذا الآن؟'], subtitle: 'ما يمكن استرجاعه وكيف، التدقيق الذي يحسم بين الاحتفاظ وإعادة الكتابة، عدّة الملكية حتى لا يتكرر ذلك، والأسابيع الستة للاستعادة، في 2027.', left: { label: 'اليوم', sub: 'حسابات باسم المزوّد، كود مفقود، تطبيق متجمّد' }, right: { label: 'بعد ستة أسابيع', sub: 'كل شيء باسمك، تطبيق محدَّث' }, note: 'الجزائر · 2027' },
    steps: { title: 'الخطوات الأربع للاستعادة', items: [
      { n: '01', label: 'الجرد', sub: 'ما تملكه: حسابات، كود، خوادم، نطاق، متاجر، مفاتيح. ما هو باسمك وما ليس كذلك.' },
      { n: '02', label: 'الاسترجاع', sub: 'أصلاً أصلاً: متاجر، مستضيف، نطاق، مستودع كود، خدمات الغير. إعذار إن سمح العقد.', accent: true },
      { n: '03', label: 'التدقيق', sub: 'هل الكود مقروء ومحدَّث وآمن؟ هل البيانات قابلة للتصدير؟ ما يُحتفظ به وما يُعاد كتابته.' },
      { n: '04', label: 'إعادة التشغيل', sub: 'وصول مقفل، تبعيات محدَّثة، متاجر مستعادة، نسخ احتياطية، توثيق في صفحة.' },
    ], caption: 'الشكل 1 · الاسترجاع قبل التدقيق: لا نُدقق كوداً لا نملكه. والتدقيق قبل قرار إعادة الكتابة.', alt: 'أربع خطوات لاستعادة تطبيق: جرد، استرجاع، تدقيق، إعادة تشغيل.' },
    assets: { title: 'ما يُسترجع، وكيف', columns: ['إن كان باسمك', 'إن كان باسم المزوّد'], rows: [
      { label: 'حسابا Google Play وApp Store', cells: ['غيّر كلمة السر، فعّل التحقق الثنائي على هاتفك', 'اطلب نقل التطبيق؛ وإلا إعادة النشر تحت حسابك'] },
      { label: 'اسم النطاق', cells: ['تحقق من صاحب التسجيل عند المسجِّل، جدّد', 'طالب بالنقل كتابياً؛ وإلا نطاق جديد وإعادة توجيه'] },
      { label: 'الاستضافة والخوادم', cells: ['غيّر الوصول، صدّر نسخة احتياطية كاملة', 'تصدير القاعدة عبر المستضيف؛ وإلا إعادة البناء من التطبيق'] },
      { label: 'الكود المصدري', cells: ['تحقق أن المستودع يحوي آخر نسخة منشورة', 'طالب به بموجب العقد؛ استرجع البناء الموجود في الإنتاج'] },
      { label: 'قاعدة البيانات وبيانات الزبائن', cells: ['تصدير، نسخ احتياطي، وصول متتبَّع', 'بيانات زبائنك ملكك: طالب بالتصدير مستنداً إلى القانون 18-07'] },
      { label: 'المفاتيح وخدمات الغير (SMS، دفع، خرائط)', cells: ['ألغِ كل المفاتيح وأعد إنشاءها', 'أعد إنشاء الحسابات باسمك وأعد تثبيت المفاتيح'] },
    ], caption: 'الشكل 2 · العمود الأيسر يكلّف عشرة أضعاف الأيمن. عدّة الملكية موجودة حتى لا تكون هناك مرة أخرى.', alt: 'مصفوفة أصول التطبيق وإجراء الاسترجاع حسب ما إذا كانت باسم الزبون أو المزوّد.' },
    kit: { title: 'عدّة ملكية تطبيق في 2027', layers: [
      { label: 'الحسابات', items: [{ name: 'متاجر ونطاق ومستضيف باسمك', sub: 'تحقق ثنائي على هاتفك لا هاتف المزوّد', accent: true }] },
      { label: 'الكود', items: [{ name: 'مستودع باسمك', sub: 'المزوّد ضيف والوصول قابل للإلغاء' }, { name: 'تسليم في كل مرحلة', sub: 'لا في نهاية المشروع' }] },
      { label: 'البنية التحتية', items: [{ name: 'خوادم وقاعدة', sub: 'وصول المسؤول عندك' }, { name: 'مفاتيح في خزنة', sub: 'SMS، دفع، خرائط، ذكاء اصطناعي' }, { name: 'نسخ احتياطية مختبَرة', sub: 'استُعيدت مرة لا مفترَضة' }] },
      { label: 'العقد', items: [{ name: 'ملكية الكود مكتوبة', sub: 'تنازل عند كل دفعة' }, { name: 'بند قابلية الرجوع', sub: 'تسليم الوصول والتوثيق خلال خمسة عشر يوماً' }] },
      { label: 'التوثيق', items: [{ name: 'صفحة واحدة: أين ماذا، كيف يُنشر', sub: 'يقرؤها مطوّر آخر في ساعة' }] },
    ], caption: 'الشكل 3 · خمس طبقات وقاعدة واحدة: لا شيء أساسي يوجد فقط على حاسوب المزوّد أو هاتفه.', alt: 'عدّة الملكية في خمس طبقات.' },
    timeline: { title: 'ستة أسابيع لاستعادة السيطرة', unit: 'أسابيع', items: [
      { label: 'الجرد', note: 'قائمة الأصول، من يحوز ماذا، قراءة العقد', from: 0, to: 1 },
      { label: 'الاسترجاع', note: 'متاجر، نطاق، مستضيف، كود، مفاتيح؛ إعذار عند الحاجة', from: 1, to: 3 },
      { label: 'التدقيق', note: 'المقروئية، التبعيات، الأمان، البيانات', from: 2, to: 4 },
      { label: 'القرار: احتفاظ، إصلاح أم إعادة كتابة', note: 'على التدقيق، بسعر إجمالي مكتوب', from: 4, to: 4.5 },
      { label: 'إعادة التشغيل', note: 'وصول مقفل، تحديثات، متاجر مستعادة، توثيق', from: 4.5, to: 6, accent: true },
    ], caption: 'الشكل 4 · يُتخذ قرار إعادة الكتابة في الأسبوع الرابع على التدقيق. وإن اتُّخذ في الأسبوع صفر كلّف مشروعاً كاملاً لكود ربما كان سيصمد.', alt: 'جدول زمني بالأسابيع لاستعادة تطبيق.' },
  },
};

export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      steps: { svg: steps({ title: t.steps.title, steps: t.steps.items, arrows: true, rtl }), caption: t.steps.caption, alt: t.steps.alt },
      assets: { svg: matrix({ title: t.assets.title, columns: t.assets.columns, rows: t.assets.rows, rtl }), caption: t.assets.caption, alt: t.assets.alt },
      kit: { svg: layers({ title: t.kit.title, layers: t.kit.layers, rtl }), caption: t.kit.caption, alt: t.kit.alt },
      timeline: { svg: timeline({ title: t.timeline.title, items: t.timeline.items, total: 6, tick: 1, unit: t.timeline.unit, rtl }), caption: t.timeline.caption, alt: t.timeline.alt },
    },
  };
}
