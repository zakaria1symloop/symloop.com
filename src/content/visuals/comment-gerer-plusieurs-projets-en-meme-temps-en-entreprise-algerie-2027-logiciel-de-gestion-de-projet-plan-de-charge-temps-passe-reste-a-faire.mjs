import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { charge, atterrissage, STRINGS as SC } from './custom/projets.mjs';
export const slug = 'comment-gerer-plusieurs-projets-en-meme-temps-en-entreprise-algerie-2027-logiciel-de-gestion-de-projet-plan-de-charge-temps-passe-reste-a-faire';
const T = {
  fr: {
    cover: { eyebrow: 'Gestion de projets · Algérie · 2027', title: ['Gérer plusieurs projets', 'en même temps'], subtitle: 'Plan de charge par personne, temps passé, reste à faire, atterrissage en heures et en date, marge', left: { label: 'Tout est à 90 %', sub: 'depuis un mois' }, right: { label: 'Une seule grille', sub: 'onze projets, cinq personnes' } },
    mesures: { title: 'Six façons de mesurer l’avancement, et le piège de chacune', columns: ['Ce que ça dit', 'Son piège'], rows: [
      { label: 'Le pourcentage estimé à l’œil', cells: ['l’impression de la personne', '« 90 % » pendant des semaines'] },
      { label: 'Les heures consommées', cells: ['ce que le projet a coûté', 'dépenser n’est pas avancer'] },
      { label: 'Les tâches terminées', cells: ['ce qui est fait, sans discussion', 'dix petites tâches, pas la grosse'] },
      { label: 'Les jalons acceptés par le client', cells: ['ce qui est livré et validé', 'trop espacés : rien entre deux'] },
      { label: 'Le reste à faire réestimé', cells: ['les heures qu’il faut encore', 'à redemander chaque semaine'] },
      { label: 'La date de fin recalculée', cells: ['quand on finit à ce rythme', 'fausse si le reste à faire l’est'] },
    ], caption: 'Figure 1 · Six mesures de l’avancement. Les deux premières sont celles du tableau habituel ; les quatre suivantes reposent sur des faits, ou sur une question reposée chaque semaine.', alt: 'Matrice de six mesures de l’avancement : le pourcentage estimé à l’œil, les heures consommées, les tâches terminées, les jalons acceptés par le client, le reste à faire réestimé, la date de fin recalculée ; pour chacune, ce qu’elle dit et son piège.' },
    couches: { title: 'Ce que tient un suivi de projets, en cinq couches', layers: [
      { label: 'Projets', items: [{ name: 'Les projets : client, périmètre, heures vendues, date promise, jalons de facturation', sub: 'ce qui a été vendu' }] },
      { label: 'Tâches', items: [{ name: 'Les tâches et les jalons : qui fait quoi, pour quand, ce qui dépend de quoi', sub: 'le découpage du travail' }] },
      { label: 'Charge', items: [{ name: 'Le plan de charge : les heures de chaque personne, semaine par semaine, tous projets réunis', sub: 'la seule vue commune à tous les projets', accent: true }] },
      { label: 'Temps', items: [{ name: 'Le temps passé : saisi chaque jour, par projet et par tâche, en moins d’une minute', sub: 'ce que le projet coûte vraiment' }] },
      { label: 'Pilotage', items: [{ name: 'Le pilotage : avancement, reste à faire, atterrissage en heures et en date, marge par projet', sub: 'ce qu’on regarde chaque semaine' }] },
    ], caption: 'Figure 2 · Cinq couches. La couche accentuée est le plan de charge : c’est la seule qui traverse tous les projets, parce que les projets se partagent les mêmes personnes.', alt: 'Cinq couches : les projets ; les tâches et les jalons ; le plan de charge (accentuée) ; le temps passé ; le pilotage.' },
    vie: { title: 'La vie d’un projet, du devis au bilan, en six temps', items: [
      { label: 'Devis', sub: 'heures vendues, date promise, jalons' },
      { label: 'Lancement', sub: 'périmètre écrit, équipe, tâches' },
      { label: 'Planification', sub: 'posé sur le plan de charge avant de confirmer', accent: true },
      { label: 'Exécution', sub: 'temps saisi, tâches fermées' },
      { label: 'Jalons', sub: 'livré, accepté, facturé' },
      { label: 'Bilan', sub: 'vendu, passé, à retenir' },
    ], caption: 'Figure 3 · Six temps. Le temps accentué est la planification : le projet est posé sur le plan de charge avant que la date soit confirmée au client, pas après.', alt: 'Six temps : devis, lancement, planification (accentuée), exécution, jalons, bilan.' },
    charge: { caption: 'Figure 4 · Les heures de cinq personnes sur six semaines, tous projets réunis : l’équipe à 168 h pour 160 en semaine 4, une personne à 52 h pour 32. Exemple construit.' },
    atterrissage: { caption: 'Figure 5 · Un projet vendu 400 h, lu en semaine 6 : 200 h acquises pour 290 consommées, atterrissage à 580 h en semaine 12. Heures fictives.' },
    calendrier: { title: 'Six semaines pour suivre tous les projets au même endroit', unit: 'sem.', items: [
      { label: 'Relevé', note: 'les projets en cours, le tableau actuel, qui fait quoi, comment vous facturez', from: 0, to: 1, accent: true },
      { label: 'Projets et tâches', note: 'fiches projet, heures vendues, jalons, tâches reprises du tableau', from: 1, to: 3 },
      { label: 'Plan de charge', note: 'capacité par personne, affectations, vue par semaine', from: 2, to: 4 },
      { label: 'Saisie du temps', note: 'saisie quotidienne sur téléphone, rappel en fin de journée', from: 3, to: 5 },
      { label: 'Pilotage', note: 'avancement, reste à faire, atterrissage, marge par projet', from: 4, to: 6 },
      { label: 'Première revue', note: 'le point hebdomadaire tenu sur l’écran, projet par projet', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six semaines dans l’exemple, relevé compris. La période accentuée est la première : on lit le tableau et les projets tels qu’ils sont. Le dernier jalon est la première revue hebdomadaire tenue sur l’écran. Durées indicatives d’un exemple construit.', alt: 'Calendrier de six semaines : relevé (accentué), projets et tâches, plan de charge, saisie du temps, pilotage, première revue.' },
  },
  en: {
    cover: { eyebrow: 'Project management · Algeria · 2027', title: ['Running several projects', 'at the same time'], subtitle: 'Load plan per person, time spent, work remaining, landing in hours and in date, margin', left: { label: 'Everything is at 90%', sub: 'for a month' }, right: { label: 'One single grid', sub: 'eleven projects, five people' } },
    mesures: { title: 'Six ways to measure progress, and the trap in each', columns: ['What it says', 'Its trap'], rows: [
      { label: 'The percentage estimated by eye', cells: ['the person’s impression', '“90%” for weeks on end'] },
      { label: 'The hours consumed', cells: ['what the project has cost', 'spending is not progressing'] },
      { label: 'The tasks finished', cells: ['what is done, beyond discussion', 'ten small tasks, not the big one'] },
      { label: 'The milestones the client accepted', cells: ['what is delivered and approved', 'too far apart: nothing in between'] },
      { label: 'The remaining work, re-estimated', cells: ['the hours still needed', 'to be asked again every week'] },
      { label: 'The end date, recalculated', cells: ['when you finish at this pace', 'wrong if the remaining work is'] },
    ], caption: 'Figure 1 · Six measures of progress. The first two are those of the usual spreadsheet; the next four rest on facts, or on a question asked again every week.', alt: 'Matrix of six measures of progress: the percentage estimated by eye, the hours consumed, the tasks finished, the milestones the client accepted, the remaining work re-estimated, the end date recalculated; for each, what it says and its trap.' },
    couches: { title: 'What project tracking holds, in five layers', layers: [
      { label: 'Projects', items: [{ name: 'The projects: client, scope, hours sold, promised date, invoicing milestones', sub: 'what was sold' }] },
      { label: 'Tasks', items: [{ name: 'The tasks and milestones: who does what, by when, what depends on what', sub: 'the breakdown of the work' }] },
      { label: 'Load', items: [{ name: 'The load plan: each person’s hours, week by week, all projects together', sub: 'the only view shared by every project', accent: true }] },
      { label: 'Time', items: [{ name: 'Time spent: entered every day, per project and per task, in under a minute', sub: 'what the project really costs' }] },
      { label: 'Steering', items: [{ name: 'Steering: progress, remaining work, landing in hours and in date, margin per project', sub: 'what is looked at every week' }] },
    ], caption: 'Figure 2 · Five layers. The accented layer is the load plan: it is the only one that runs across all projects, because projects share the same people.', alt: 'Five layers: the projects; the tasks and milestones; the load plan (accented); time spent; steering.' },
    vie: { title: 'The life of a project, from quote to review, in six steps', items: [
      { label: 'Quote', sub: 'hours sold, promised date, milestones' },
      { label: 'Kick-off', sub: 'written scope, team, tasks' },
      { label: 'Planning', sub: 'placed on the load plan before confirming', accent: true },
      { label: 'Execution', sub: 'time entered, tasks closed' },
      { label: 'Milestones', sub: 'delivered, accepted, invoiced' },
      { label: 'Review', sub: 'sold, spent, to remember' },
    ], caption: 'Figure 3 · Six steps. The accented step is planning: the project is placed on the load plan before the date is confirmed to the client, not after.', alt: 'Six steps: quote, kick-off, planning (accented), execution, milestones, review.' },
    charge: { caption: 'Figure 4 · Five people’s hours over six weeks, all projects together: the team at 168 h for 160 in week 4, one person at 52 h for 32. Constructed example.' },
    atterrissage: { caption: 'Figure 5 · A project sold for 400 h, read in week 6: 200 h earned for 290 consumed, landing at 580 h in week 12. Fictitious hours.' },
    calendrier: { title: 'Six weeks to follow every project in one place', unit: 'wk', items: [
      { label: 'Survey', note: 'the projects under way, the current spreadsheet, who does what, how you invoice', from: 0, to: 1, accent: true },
      { label: 'Projects and tasks', note: 'project records, hours sold, milestones, tasks taken over from the spreadsheet', from: 1, to: 3 },
      { label: 'Load plan', note: 'capacity per person, assignments, view by week', from: 2, to: 4 },
      { label: 'Time entry', note: 'daily entry on the phone, reminder at the end of the day', from: 3, to: 5 },
      { label: 'Steering', note: 'progress, remaining work, landing, margin per project', from: 4, to: 6 },
      { label: 'First review', note: 'the weekly meeting held on the screen, project by project', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six weeks in the example, survey included. The accented period is the first: reading the spreadsheet and the projects as they are. The last milestone is the first weekly review held on the screen. Indicative durations of a constructed example.', alt: 'Six-week calendar: survey (accented), projects and tasks, load plan, time entry, steering, first review.' },
  },
  ar: {
    cover: { eyebrow: 'تسيير المشاريع · الجزائر · 2027', title: ['تسيير عدة مشاريع', 'في الوقت نفسه'], subtitle: 'مخطط الحِمل لكل شخص، الوقت المستغرَق، الباقي للإنجاز، نهاية المشروع بالساعات والتاريخ، والهامش', left: { label: 'كل شيء عند 90 بالمئة', sub: 'منذ شهر' }, right: { label: 'شبكة واحدة', sub: 'أحد عشر مشروعاً، خمسة أشخاص' } },
    mesures: { title: 'ست طرق لقياس التقدّم، وفخّ كل واحدة', columns: ['ما تقوله', 'فخّها'], rows: [
      { label: 'النسبة المقدَّرة بالعين', cells: ['انطباع الشخص', '«90 بالمئة» طوال أسابيع'] },
      { label: 'الساعات المستهلكة', cells: ['ما كلّفه المشروع', 'الصرف ليس تقدّماً'] },
      { label: 'المهام المنتهية', cells: ['ما أُنجز، دون نقاش', 'عشر مهام صغيرة، لا الكبيرة'] },
      { label: 'المحطات التي قبلها الزبون', cells: ['ما سُلّم وصودق عليه', 'متباعدة: لا شيء بين اثنتين'] },
      { label: 'الباقي للإنجاز بعد إعادة تقديره', cells: ['الساعات التي ما زالت لازمة', 'يُسأل عنه من جديد كل أسبوع'] },
      { label: 'تاريخ النهاية بعد إعادة حسابه', cells: ['متى ننتهي بهذه الوتيرة', 'خاطئ إذا كان الباقي خاطئاً'] },
    ], caption: 'الشكل 1 · ستة مقاييس للتقدّم. الأولان هما مقياسا الجدول المعتاد؛ والأربعة التالية تقوم على وقائع، أو على سؤال يُطرح من جديد كل أسبوع.', alt: 'مصفوفة من ستة مقاييس للتقدّم: النسبة المقدَّرة بالعين، الساعات المستهلكة، المهام المنتهية، المحطات التي قبلها الزبون، الباقي للإنجاز بعد إعادة تقديره، وتاريخ النهاية بعد إعادة حسابه؛ ولكل واحد، ما يقوله وفخّه.' },
    couches: { title: 'ما يمسكه متابعة المشاريع، في خمس طبقات', layers: [
      { label: 'المشاريع', items: [{ name: 'المشاريع: الزبون، النطاق، الساعات المبيعة، التاريخ الموعود، ومحطات الفوترة', sub: 'ما بيع' }] },
      { label: 'المهام', items: [{ name: 'المهام والمحطات: من يفعل ماذا، متى، وما يتوقف على ماذا', sub: 'تقسيم العمل' }] },
      { label: 'الحِمل', items: [{ name: 'مخطط الحِمل: ساعات كل شخص، أسبوعاً بأسبوع، كل المشاريع مجتمعة', sub: 'النظرة الوحيدة المشتركة بين كل المشاريع', accent: true }] },
      { label: 'الوقت', items: [{ name: 'الوقت المستغرَق: يُدخَل كل يوم، لكل مشروع ولكل مهمة، في أقل من دقيقة', sub: 'ما يكلّفه المشروع فعلاً' }] },
      { label: 'القيادة', items: [{ name: 'القيادة: التقدّم، الباقي للإنجاز، النهاية بالساعات والتاريخ، وهامش كل مشروع', sub: 'ما يُنظر إليه كل أسبوع' }] },
    ], caption: 'الشكل 2 · خمس طبقات. الطبقة المبرزة هي مخطط الحِمل: هي الوحيدة التي تعبر كل المشاريع، لأن المشاريع تتقاسم الأشخاص أنفسهم.', alt: 'خمس طبقات: المشاريع؛ المهام والمحطات؛ مخطط الحِمل (مبرزة)؛ الوقت المستغرَق؛ والقيادة.' },
    vie: { title: 'حياة مشروع، من عرض السعر إلى الحصيلة، في ست مراحل', items: [
      { label: 'عرض السعر', sub: 'ساعات مبيعة، تاريخ موعود، ومحطات' },
      { label: 'الانطلاق', sub: 'نطاق مكتوب، فريق، ومهام' },
      { label: 'التخطيط', sub: 'يوضع على مخطط الحِمل قبل التأكيد', accent: true },
      { label: 'التنفيذ', sub: 'وقت يُدخَل، ومهام تُغلق' },
      { label: 'المحطات', sub: 'سُلّم، قُبل، وفُوتر' },
      { label: 'الحصيلة', sub: 'المبيع، المقضي، وما يُحفظ' },
    ], caption: 'الشكل 3 · ست مراحل. المرحلة المبرزة هي التخطيط: يوضع المشروع على مخطط الحِمل قبل تأكيد التاريخ للزبون، لا بعده.', alt: 'ست مراحل: عرض السعر، الانطلاق، التخطيط (مبرزة)، التنفيذ، المحطات، والحصيلة.' },
    charge: { caption: 'الشكل 4 · ساعات خمسة أشخاص على ستة أسابيع، كل المشاريع مجتمعة: الفريق عند 168 ساعة مقابل 160 في الأسبوع الرابع، وشخص واحد عند 52 مقابل 32. مثال مركَّب.' },
    atterrissage: { caption: 'الشكل 5 · مشروع بيع بـ400 ساعة، يُقرأ في الأسبوع السادس: 200 ساعة مكتسبة مقابل 290 مستهلكة، والنهاية عند 580 ساعة في الأسبوع 12. ساعات خيالية.' },
    calendrier: { title: 'ستة أسابيع لمتابعة كل المشاريع في مكان واحد', unit: 'أسبوع', items: [
      { label: 'المعاينة', note: 'المشاريع الجارية، الجدول الحالي، من يفعل ماذا، وكيف تفوترون', from: 0, to: 1, accent: true },
      { label: 'المشاريع والمهام', note: 'بطاقات المشاريع، الساعات المبيعة، المحطات، والمهام المنقولة من الجدول', from: 1, to: 3 },
      { label: 'مخطط الحِمل', note: 'طاقة كل شخص، الإسنادات، ونظرة أسبوعية', from: 2, to: 4 },
      { label: 'إدخال الوقت', note: 'إدخال يومي على الهاتف، وتذكير في آخر اليوم', from: 3, to: 5 },
      { label: 'القيادة', note: 'التقدّم، الباقي للإنجاز، النهاية المتوقعة، وهامش كل مشروع', from: 4, to: 6 },
      { label: 'أول مراجعة', note: 'الاجتماع الأسبوعي يُعقد على الشاشة، مشروعاً بمشروع', from: 5, to: 6 },
    ], caption: 'الشكل 6 · ستة أسابيع في المثال، المعاينة منها. الفترة المبرزة هي الأولى: قراءة الجدول والمشاريع كما هي. وآخر محطة أول مراجعة أسبوعية تُعقد على الشاشة. مدد تقريبية لمثال مركَّب.', alt: 'رزنامة من ستة أسابيع: المعاينة (مبرزة)، المشاريع والمهام، مخطط الحِمل، إدخال الوقت، القيادة، ثم أول مراجعة.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      mesures: { svg: matrix({ title: t.mesures.title, columns: t.mesures.columns, rows: t.mesures.rows, rtl }), caption: t.mesures.caption, alt: t.mesures.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      vie: { svg: steps({ title: t.vie.title, steps: t.vie.items, arrows: true, rtl }), caption: t.vie.caption, alt: t.vie.alt },
      charge: { svg: charge(e.charge, rtl), caption: t.charge.caption, alt: e.charge.alt },
      atterrissage: { svg: atterrissage(e.atterrissage, rtl), caption: t.atterrissage.caption, alt: e.atterrissage.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 6, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
