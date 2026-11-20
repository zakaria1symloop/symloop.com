import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { entonnoir, recidive, STRINGS as SC } from './custom/qualite.mjs';
export const slug = 'logiciel-gestion-de-la-qualite-algerie-2027-non-conformites-actions-correctives-jamais-closes-le-meme-defaut-revient-documents-audits-internes';
const T = {
  fr: {
    cover: { eyebrow: 'Gestion de la qualité · Algérie · 2027', title: ['Logiciel de gestion de la qualité :', 'des actions qui se ferment vraiment'], subtitle: 'Non-conformités, réclamations, causes, actions correctives, documents en vigueur, audits internes', left: { label: '120 constats', sub: 'ouverts en six mois' }, right: { label: '37 clos', sub: 'efficacité vérifiée' } },
    couches: { title: 'Ce qu’il y a dans un logiciel de gestion de la qualité, en cinq couches', layers: [
      { label: 'Constats', items: [{ name: 'Les constats : non-conformités internes, réclamations clients, défauts fournisseurs, écarts d’audit', sub: 'tout ce qui ne va pas, au même endroit' }] },
      { label: 'Causes', items: [{ name: 'Les causes : tri par famille, analyse, « pourquoi » posé jusqu’à la cause qu’on peut traiter', sub: 'ce qui évite de corriger dix fois le même défaut' }] },
      { label: 'Actions', items: [{ name: 'Les actions : correction immédiate, action corrective, responsable, échéance, vérification d’efficacité', sub: 'ce qui doit vraiment se fermer', accent: true }] },
      { label: 'Documents', items: [{ name: 'Les documents : procédures et modes opératoires, versions, diffusion, lecture confirmée au poste', sub: 'la bonne version, là où l’on travaille' }] },
      { label: 'Pilotage', items: [{ name: 'Le pilotage : audits planifiés, indicateurs par mois, coût des défauts, revue de direction', sub: 'ce que la direction regarde' }] },
    ], caption: 'Figure 1 · Cinq couches. La couche accentuée est celle des actions : un constat sans action close est une note ; c’est la fermeture vérifiée qui fait la qualité.', alt: 'Cinq couches : les constats ; les causes ; les actions (accentuées) ; les documents ; le pilotage.' },
    entonnoir: { caption: 'Figure 2 · Six mois de constats : 120 ouverts, 37 clos avec efficacité vérifiée. 83 sont restés en chemin, dont 21 actions faites mais jamais vérifiées. Nombres fictifs.' },
    sources: { title: 'Cinq sources de constats : ce qu’on enregistre, qui traite', columns: ['Ce qu’on enregistre', 'Qui traite, et la suite'], rows: [
      { label: 'La non-conformité interne', cells: ['produit ou étape, quantité, défaut, photo', 'l’atelier corrige, la qualité analyse'] },
      { label: 'La réclamation client', cells: ['client, livraison, défaut constaté', 'réponse au client, puis action interne'] },
      { label: 'Le défaut fournisseur', cells: ['lot reçu, écart au contrôle, preuve', 'réclamation au fournisseur, suivi'] },
      { label: 'L’écart d’audit', cells: ['exigence, constat, preuve relevée', 'le service audité répond, l’auditeur vérifie'] },
      { label: 'La suggestion d’amélioration', cells: ['idée, poste, gain attendu', 'triée, décidée, suivie comme une action'] },
    ], caption: 'Figure 3 · Cinq sources, un seul circuit. Une réclamation client et un défaut vu à l’atelier sont souvent le même problème, constaté à deux endroits : il faut qu’ils se rejoignent pour qu’on le voie.', alt: 'Matrice de cinq sources de constats : la non-conformité interne, la réclamation client, le défaut fournisseur, l’écart d’audit, la suggestion d’amélioration ; pour chacune, ce qu’on enregistre et qui traite.' },
    recidive: { caption: 'Figure 4 · Le même défaut compté chaque mois : 57 en six mois malgré le tri, 8 dans les quatre mois qui suivent l’action sur la cause. Exemple construit.' },
    vie: { title: 'Un constat, en six temps', items: [
      { label: 'Constat', sub: 'défaut décrit, photo, quantité' },
      { label: 'Correction', sub: 'on isole, on trie, on retouche' },
      { label: 'Analyse', sub: 'la cause, pas le coupable', accent: true },
      { label: 'Action', sub: 'responsable, échéance, moyens' },
      { label: 'Vérification', sub: 'le défaut est-il revenu ?' },
      { label: 'Clôture', sub: 'efficace, ou rouverte' },
    ], caption: 'Figure 5 · Six temps. Le temps accentué est l’analyse : sans elle, l’action traite le symptôme, et le même constat revient avec un autre numéro.', alt: 'Six temps : constat, correction, analyse (accentuée), action, vérification, clôture.' },
    calendrier: { title: 'Sept semaines pour un site', unit: 'sem.', items: [
      { label: 'Cadrage', note: 'les familles de défauts, les sources de constats, les responsables, les documents en vigueur', from: 0, to: 1, accent: true },
      { label: 'Constats', note: 'saisie au poste et au téléphone, photo, lien avec le produit ou le lot', from: 1, to: 3 },
      { label: 'Actions et relances', note: 'responsable, échéance, étapes, relances, vérification d’efficacité', from: 2, to: 4 },
      { label: 'Documents', note: 'versions, validation, diffusion, lecture confirmée, anciennes versions retirées', from: 3, to: 5 },
      { label: 'Audits', note: 'planning, grilles, écarts versés dans le même circuit', from: 4, to: 6 },
      { label: 'Indicateurs et mise en service', note: 'constats par mois et par cause, délais de clôture, formation, premier mois réel', from: 5, to: 7 },
    ], caption: 'Figure 6 · Sept semaines dans l’exemple, pour un site. La période accentuée est la première : on se met d’accord sur les familles de défauts avant tout, sinon les chiffres ne se comparent jamais. Durées indicatives d’un exemple construit.', alt: 'Calendrier de sept semaines : cadrage (accentué), constats, actions et relances, documents, audits, indicateurs et mise en service.' },
  },
  en: {
    cover: { eyebrow: 'Quality management · Algeria · 2027', title: ['Quality management software:', 'actions that really get closed'], subtitle: 'Non-conformities, complaints, causes, corrective actions, current documents, internal audits', left: { label: '120 findings', sub: 'opened in six months' }, right: { label: '37 closed', sub: 'verified effective' } },
    couches: { title: 'What is inside quality management software, in five layers', layers: [
      { label: 'Findings', items: [{ name: 'Findings: internal non-conformities, customer complaints, supplier defects, audit findings', sub: 'everything that goes wrong, in one place' }] },
      { label: 'Causes', items: [{ name: 'Causes: sorting by family, analysis, “why” asked until a cause that can be treated', sub: 'what avoids correcting the same defect ten times' }] },
      { label: 'Actions', items: [{ name: 'Actions: immediate correction, corrective action, owner, due date, verification of effectiveness', sub: 'what really has to be closed', accent: true }] },
      { label: 'Documents', items: [{ name: 'Documents: procedures and work instructions, versions, distribution, reading confirmed at the station', sub: 'the right version, where the work is done' }] },
      { label: 'Steering', items: [{ name: 'Steering: planned audits, monthly indicators, cost of defects, management review', sub: 'what management looks at' }] },
    ], caption: 'Figure 1 · Five layers. The accented layer is actions: a finding with no closed action is a note; it is verified closure that makes quality.', alt: 'Five layers: findings; causes; actions (accented); documents; steering.' },
    entonnoir: { caption: 'Figure 2 · Six months of findings: 120 opened, 37 closed with effectiveness verified. 83 were left on the way, including 21 actions done but never verified. Fictitious numbers.' },
    sources: { title: 'Five sources of findings: what is recorded, who handles it', columns: ['What is recorded', 'Who handles it, and what follows'], rows: [
      { label: 'The internal non-conformity', cells: ['product or step, quantity, defect, photo', 'the workshop corrects, quality analyses'] },
      { label: 'The customer complaint', cells: ['customer, delivery, defect observed', 'reply to the customer, then internal action'] },
      { label: 'The supplier defect', cells: ['batch received, gap at inspection, evidence', 'claim to the supplier, follow-up'] },
      { label: 'The audit finding', cells: ['requirement, finding, evidence noted', 'the audited unit replies, the auditor checks'] },
      { label: 'The improvement suggestion', cells: ['idea, station, expected gain', 'sorted, decided, followed like an action'] },
    ], caption: 'Figure 3 · Five sources, a single circuit. A customer complaint and a defect seen in the workshop are often the same problem, observed in two places: they have to meet for it to be seen.', alt: 'Matrix of five sources of findings: the internal non-conformity, the customer complaint, the supplier defect, the audit finding, the improvement suggestion; for each, what is recorded and who handles it.' },
    recidive: { caption: 'Figure 4 · The same defect counted each month: 57 in six months despite sorting, 8 in the four months after the action on the cause. Constructed example.' },
    vie: { title: 'A finding, in six steps', items: [
      { label: 'Finding', sub: 'defect described, photo, quantity' },
      { label: 'Correction', sub: 'isolate, sort, rework' },
      { label: 'Analysis', sub: 'the cause, not the culprit', accent: true },
      { label: 'Action', sub: 'owner, due date, means' },
      { label: 'Verification', sub: 'has the defect come back?' },
      { label: 'Closing', sub: 'effective, or reopened' },
    ], caption: 'Figure 5 · Six steps. The accented step is analysis: without it, the action treats the symptom, and the same finding comes back under another number.', alt: 'Six steps: finding, correction, analysis (accented), action, verification, closing.' },
    calendrier: { title: 'Seven weeks for one site', unit: 'wk', items: [
      { label: 'Scoping', note: 'the families of defects, the sources of findings, the owners, the documents in force', from: 0, to: 1, accent: true },
      { label: 'Findings', note: 'entry at the station and on the phone, photo, link with the product or the batch', from: 1, to: 3 },
      { label: 'Actions and reminders', note: 'owner, due date, steps, reminders, verification of effectiveness', from: 2, to: 4 },
      { label: 'Documents', note: 'versions, approval, distribution, reading confirmed, old versions withdrawn', from: 3, to: 5 },
      { label: 'Audits', note: 'schedule, checklists, findings fed into the same circuit', from: 4, to: 6 },
      { label: 'Indicators and go-live', note: 'findings per month and per cause, time to closure, training, first real month', from: 5, to: 7 },
    ], caption: 'Figure 6 · Seven weeks in the example, for one site. The accented period is the first: the families of defects are agreed before anything else, otherwise the figures can never be compared. Indicative durations of a constructed example.', alt: 'Seven-week calendar: scoping (accented), findings, actions and reminders, documents, audits, indicators and go-live.' },
  },
  ar: {
    cover: { eyebrow: 'تسيير الجودة · الجزائر · 2027', title: ['برنامج تسيير الجودة:', 'إجراءات تُغلق فعلاً'], subtitle: 'عدم المطابقة، الشكاوى، الأسباب، الإجراءات التصحيحية، الوثائق السارية، والتدقيق الداخلي', left: { label: '120 معاينة', sub: 'فُتحت في ستة أشهر' }, right: { label: '37 مغلقة', sub: 'فعاليتها مؤكَّدة' } },
    couches: { title: 'ما يوجد في برنامج تسيير الجودة، في خمس طبقات', layers: [
      { label: 'المعاينات', items: [{ name: 'المعاينات: عدم المطابقة الداخلي، شكاوى الزبائن، عيوب المورّدين، وملاحظات التدقيق', sub: 'كل ما لا يسير، في مكان واحد' }] },
      { label: 'الأسباب', items: [{ name: 'الأسباب: فرز حسب العائلة، تحليل، و«لماذا» تُطرح حتى سبب يمكن علاجه', sub: 'ما يجنّب تصحيح العيب نفسه عشر مرات' }] },
      { label: 'الإجراءات', items: [{ name: 'الإجراءات: تصحيح فوري، إجراء تصحيحي، مسؤول، أجل، وتحقق من الفعالية', sub: 'ما يجب أن يُغلق فعلاً', accent: true }] },
      { label: 'الوثائق', items: [{ name: 'الوثائق: الطرق وتعليمات العمل، النسخ، التوزيع، وقراءة مؤكَّدة في المنصب', sub: 'النسخة الصحيحة، حيث يُعمل' }] },
      { label: 'القيادة', items: [{ name: 'القيادة: تدقيقات مبرمجة، مؤشرات شهرية، كلفة العيوب، ومراجعة الإدارة', sub: 'ما تنظر إليه الإدارة' }] },
    ], caption: 'الشكل 1 · خمس طبقات. الطبقة المبرزة هي الإجراءات: معاينة دون إجراء مغلق مجرد ملاحظة؛ والإغلاق المتحقَّق منه هو الذي يصنع الجودة.', alt: 'خمس طبقات: المعاينات؛ الأسباب؛ الإجراءات (مبرزة)؛ الوثائق؛ والقيادة.' },
    entonnoir: { caption: 'الشكل 2 · ستة أشهر من المعاينات: 120 مفتوحة، و37 مغلقة بفعالية متحقَّق منها. و83 بقيت في الطريق، منها 21 إجراء أُنجز ولم يُتحقَّق منه. أعداد خيالية.' },
    sources: { title: 'خمسة مصادر للمعاينات: ما يُسجَّل، ومن يعالج', columns: ['ما يُسجَّل', 'من يعالج، وما يتبع'], rows: [
      { label: 'عدم المطابقة الداخلي', cells: ['المنتوج أو المرحلة، الكمية، العيب، وصورة', 'الورشة تصحّح، والجودة تحلّل'] },
      { label: 'شكوى الزبون', cells: ['الزبون، التسليم، والعيب الملاحَظ', 'ردّ على الزبون، ثم إجراء داخلي'] },
      { label: 'عيب المورّد', cells: ['الدفعة المستلمة، الفرق عند المراقبة، والدليل', 'شكوى إلى المورّد، ومتابعة'] },
      { label: 'ملاحظة التدقيق', cells: ['المتطلَّب، الملاحظة، والدليل', 'المصلحة المدقَّقة تجيب، والمدقّق يتحقق'] },
      { label: 'اقتراح التحسين', cells: ['الفكرة، المنصب، والربح المنتظَر', 'يُفرز، يُقرَّر، ويُتابَع كإجراء'] },
    ], caption: 'الشكل 3 · خمسة مصادر، ومسار واحد. شكوى زبون وعيب رُئي في الورشة هما غالباً المشكل نفسه، معايَناً في مكانين: ويجب أن يلتقيا ليُرى.', alt: 'مصفوفة من خمسة مصادر للمعاينات: عدم المطابقة الداخلي، شكوى الزبون، عيب المورّد، ملاحظة التدقيق، واقتراح التحسين؛ ولكل واحد، ما يُسجَّل ومن يعالج.' },
    recidive: { caption: 'الشكل 4 · العيب نفسه معدوداً كل شهر: 57 في ستة أشهر رغم الفرز، و8 في الأشهر الأربعة التي تلي العمل على السبب. مثال مركَّب.' },
    vie: { title: 'معاينة، في ست مراحل', items: [
      { label: 'المعاينة', sub: 'عيب موصوف، صورة، وكمية' },
      { label: 'التصحيح', sub: 'عزل، فرز، وإصلاح' },
      { label: 'التحليل', sub: 'السبب، لا المذنب', accent: true },
      { label: 'الإجراء', sub: 'مسؤول، أجل، ووسائل' },
      { label: 'التحقق', sub: 'هل عاد العيب؟' },
      { label: 'الإغلاق', sub: 'فعّال، أو يُعاد فتحه' },
    ], caption: 'الشكل 5 · ست مراحل. المرحلة المبرزة هي التحليل: دونه، يعالج الإجراء العَرَض، وتعود المعاينة نفسها برقم آخر.', alt: 'ست مراحل: المعاينة، التصحيح، التحليل (مبرز)، الإجراء، التحقق، والإغلاق.' },
    calendrier: { title: 'سبعة أسابيع لموقع واحد', unit: 'أسبوع', items: [
      { label: 'التأطير', note: 'عائلات العيوب، مصادر المعاينات، المسؤولون، والوثائق السارية', from: 0, to: 1, accent: true },
      { label: 'المعاينات', note: 'إدخال في المنصب وعلى الهاتف، صورة، وربط بالمنتوج أو بالدفعة', from: 1, to: 3 },
      { label: 'الإجراءات والتذكيرات', note: 'مسؤول، أجل، مراحل، تذكيرات، وتحقق من الفعالية', from: 2, to: 4 },
      { label: 'الوثائق', note: 'النسخ، المصادقة، التوزيع، القراءة المؤكَّدة، وسحب النسخ القديمة', from: 3, to: 5 },
      { label: 'التدقيقات', note: 'البرنامج، الشبكات، وملاحظات تدخل المسار نفسه', from: 4, to: 6 },
      { label: 'المؤشرات والتشغيل', note: 'المعاينات لكل شهر ولكل سبب، آجال الإغلاق، تكوين، وأول شهر حقيقي', from: 5, to: 7 },
    ], caption: 'الشكل 6 · سبعة أسابيع في المثال، لموقع واحد. الفترة المبرزة هي الأولى: يُتَّفق على عائلات العيوب قبل كل شيء، وإلا لم تُقارَن الأرقام أبداً. مدد تقريبية لمثال مركَّب.', alt: 'رزنامة من سبعة أسابيع: التأطير (مبرز)، المعاينات، الإجراءات والتذكيرات، الوثائق، التدقيقات، ثم المؤشرات والتشغيل.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      entonnoir: { svg: entonnoir(e.entonnoir, rtl), caption: t.entonnoir.caption, alt: e.entonnoir.alt },
      sources: { svg: matrix({ title: t.sources.title, columns: t.sources.columns, rows: t.sources.rows, rtl }), caption: t.sources.caption, alt: t.sources.alt },
      recidive: { svg: recidive(e.recidive, rtl), caption: t.recidive.caption, alt: e.recidive.alt },
      vie: { svg: steps({ title: t.vie.title, steps: t.vie.items, arrows: true, rtl }), caption: t.vie.caption, alt: t.vie.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 7, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
