import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { notes, memoire, STRINGS as SC } from './custom/evaluation.mjs';
export const slug = 'logiciel-entretien-annuel-evaluation-du-personnel-algerie-2027-objectifs-notes-de-l-annee-grille-de-criteres-calibrage-plan-de-formation';
const T = {
  fr: {
    cover: { eyebrow: 'Évaluation du personnel · Algérie · 2027', title: ['Entretien annuel : une note', 'qui veut dire quelque chose'], subtitle: 'Objectifs mesurables, faits notés dans l’année, critères décrits, calibrage entre responsables', left: { label: 'Sur papier', sub: '71 % de « 4 »' }, right: { label: 'Après calibrage', sub: '0,4 point d’écart' } },
    notes: { caption: 'Figure 1 · L’an dernier, 71 % des 180 personnes ont « 4 », et les moyennes de deux responsables diffèrent de 1,5 point ; après des critères décrits et un calibrage, 0,4 point. Effectifs et notes fictifs.' },
    campagne: { title: 'Une campagne, en six temps', items: [
      { label: 'Objectifs', sub: 'trois à cinq, une mesure et une date chacun' },
      { label: 'Notes de l’année', sub: 'un fait, une date, deux lignes' },
      { label: 'Mi-année', sub: 'objectifs revus, ceux qui ne tiennent plus changés' },
      { label: 'Auto-évaluation', sub: 'la personne se situe, critère par critère' },
      { label: 'Note et calibrage', sub: 'le responsable note ; les cas limites sont relus à plusieurs', accent: true },
      { label: 'Entretien et plan', sub: 'ce qui est dit, validé, puis suivi' },
    ], caption: 'Figure 2 · Six temps. Le temps accentué est la note relue en calibrage : c’est là qu’un « 4 » se met à vouloir dire la même chose d’un service à l’autre.', alt: 'Six temps : objectifs, notes de l’année, mi-année, auto-évaluation, note et calibrage (accentué), entretien et plan.' },
    memoire: { caption: 'Figure 3 · Dans quarante fiches écrites de mémoire, 74 % des faits cités datent des trois derniers mois ; avec des notes prises dans l’année, 33 %, et cinq faits par fiche au lieu de deux. Fiches et faits fictifs.' },
    couches: { title: 'Ce qu’il y a dans le logiciel, en cinq couches', layers: [
      { label: 'Objectifs', items: [{ name: 'Les objectifs : trois à cinq par personne, une mesure, une date, un poids, revus à mi-année', sub: 'ce qui était attendu' }] },
      { label: 'Notes', items: [{ name: 'Les notes de l’année : un fait, une date, deux lignes, rattachés à un objectif ou à un critère', sub: 'ce qui s’est passé', accent: true }] },
      { label: 'Évaluation', items: [{ name: 'L’évaluation : auto-évaluation, critères décrits par des comportements, note du responsable, calibrage', sub: 'la même note veut dire la même chose' }] },
      { label: 'Entretien', items: [{ name: 'L’entretien et le plan : compte rendu validé par les deux, formations demandées, objectifs suivants', sub: 'ce qui est décidé, puis suivi' }] },
      { label: 'Droits', items: [{ name: 'Les droits et l’historique : chacun voit sa fiche, le responsable son équipe, les RH l’ensemble', sub: 'qui voit quoi, année après année' }] },
    ], caption: 'Figure 4 · Cinq couches. La couche accentuée, les notes de l’année, est celle que la fiche Word de l’exemple n’avait pas.', alt: 'Cinq couches : les objectifs ; les notes de l’année (accentuées) ; l’évaluation ; l’entretien et le plan ; les droits et l’historique.' },
    calendrier: { title: 'Dix semaines, en commençant par les fiches de l’an dernier', unit: 'sem.', items: [
      { label: 'Fiches de l’an dernier', note: 'notes comptées, moyenne par responsable, quarante fiches relues', from: 0, to: 1, accent: true },
      { label: 'Critères et échelle', note: 'cinq à sept critères, chaque niveau décrit par un comportement observable', from: 0, to: 3 },
      { label: 'Format des objectifs', note: 'trois à cinq par personne, une mesure, une date, un poids', from: 2, to: 4 },
      { label: 'Fiches, circuit et droits', note: 'qui remplit quoi, qui voit quoi, en arabe et en français', from: 3, to: 7 },
      { label: 'Responsables formés', note: 'noter sur des faits, mener l’entretien ; essai dans un service', from: 6, to: 9 },
      { label: 'Ouverture de la campagne', note: 'objectifs saisis, premières notes de l’année', from: 9, to: 10 },
    ], caption: 'Figure 5 · Dix semaines dans l’exemple. La période accentuée est la première : les fiches de l’an dernier disent ce qu’il faut corriger. Durées indicatives d’un exemple construit.', alt: 'Calendrier de dix semaines : fiches de l’an dernier (accentué), critères et échelle, format des objectifs, fiches, circuit et droits, responsables formés, ouverture de la campagne.' },
    situations: { title: 'Cinq situations, et ce que le logiciel change', columns: ['Avec une fiche Word', 'Avec le logiciel'], rows: [
      { label: 'Tout le monde a « bien »', cells: ['impossible de comparer deux services', 'répartition et moyenne par responsable'] },
      { label: 'Les objectifs de janvier sont oubliés', cells: ['on les redécouvre en décembre', 'rappel à mi-année, objectifs revus'] },
      { label: 'La fiche est remplie la veille', cells: ['de mémoire : le dernier trimestre', 'les notes de l’année sont déjà dans la fiche'] },
      { label: 'Une formation est demandée', cells: ['elle reste dans le classeur', 'demande suivie : décidée, planifiée, faite'] },
      { label: 'Une promotion se décide', cells: ['on cherche trois classeurs', 'trois années de fiches, côte à côte'] },
    ], caption: 'Figure 6 · Cinq situations. La fiche Word enregistre un entretien ; le logiciel tient l’année, puis les années.', alt: 'Matrice de cinq situations : tout le monde a « bien », objectifs oubliés, fiche remplie la veille, formation demandée, promotion à décider ; pour chacune, avec une fiche Word et avec le logiciel.' },
  },
  en: {
    cover: { eyebrow: 'Staff appraisal · Algeria · 2027', title: ['Yearly appraisal: a mark', 'that means something'], subtitle: 'Measurable objectives, facts noted during the year, described criteria, calibration between managers', left: { label: 'On paper', sub: '71% of “4”' }, right: { label: 'After calibration', sub: '0.4 points apart' } },
    notes: { caption: 'Figure 1 · Last year, 71% of the 180 people got “4”, and the averages of two managers differ by 1.5 points; after described criteria and calibration, 0.4 points. Fictitious headcount and marks.' },
    campagne: { title: 'A campaign, in six steps', items: [
      { label: 'Objectives', sub: 'three to five, each with a measure and a date' },
      { label: 'Notes of the year', sub: 'one fact, one date, two lines' },
      { label: 'Mid-year', sub: 'objectives reviewed, those that no longer hold changed' },
      { label: 'Self-assessment', sub: 'the person places themself, criterion by criterion' },
      { label: 'Mark, calibration', sub: 'the manager marks; borderline cases are reread together', accent: true },
      { label: 'Interview and plan', sub: 'what is said, validated, then followed' },
    ], caption: 'Figure 2 · Six steps. The accented step is the mark reread in calibration: that is where a “4” starts meaning the same thing from one department to another.', alt: 'Six steps: objectives, notes of the year, mid-year, self-assessment, mark and calibration (accented), interview and plan.' },
    memoire: { caption: 'Figure 3 · In forty forms written from memory, 74% of the facts quoted date from the last three months; with notes taken during the year, 33%, and five facts per form instead of two. Fictitious forms and facts.' },
    couches: { title: 'What is inside the software, in five layers', layers: [
      { label: 'Objectives', items: [{ name: 'Objectives: three to five per person, a measure, a date, a weight, reviewed at mid-year', sub: 'what was expected' }] },
      { label: 'Notes', items: [{ name: 'Notes of the year: one fact, one date, two lines, attached to an objective or a criterion', sub: 'what happened', accent: true }] },
      { label: 'Assessment', items: [{ name: 'Assessment: self-assessment, criteria described by behaviours, manager’s mark, calibration', sub: 'the same mark means the same thing' }] },
      { label: 'Interview', items: [{ name: 'Interview and plan: record validated by both, training requested, next objectives', sub: 'what is decided, then followed' }] },
      { label: 'Rights', items: [{ name: 'Rights and history: each person sees their form, the manager their team, HR the whole', sub: 'who sees what, year after year' }] },
    ], caption: 'Figure 4 · Five layers. The accented layer, the notes of the year, is the one the Word form of the example did not have.', alt: 'Five layers: objectives; notes of the year (accented); assessment; interview and plan; rights and history.' },
    calendrier: { title: 'Ten weeks, starting with last year’s forms', unit: 'wk', items: [
      { label: 'Last year’s forms', note: 'marks counted, average per manager, forty forms reread', from: 0, to: 1, accent: true },
      { label: 'Criteria and scale', note: 'five to seven criteria, each level described by an observable behaviour', from: 0, to: 3 },
      { label: 'Format of objectives', note: 'three to five per person, a measure, a date, a weight', from: 2, to: 4 },
      { label: 'Forms, workflow and rights', note: 'who fills in what, who sees what, in Arabic and French', from: 3, to: 7 },
      { label: 'Managers trained', note: 'marking on facts, leading the interview; trial in one department', from: 6, to: 9 },
      { label: 'Campaign opens', note: 'objectives entered, first notes of the year', from: 9, to: 10 },
    ], caption: 'Figure 5 · Ten weeks in the example. The accented period is the first: last year’s forms say what needs fixing. Indicative durations of a constructed example.', alt: 'Ten-week calendar: last year’s forms (accented), criteria and scale, format of objectives, forms, workflow and rights, managers trained, campaign opens.' },
    situations: { title: 'Five situations, and what the software changes', columns: ['With a Word form', 'With the software'], rows: [
      { label: 'Everyone gets “good”', cells: ['no way to compare two departments', 'distribution and average per manager'] },
      { label: 'January’s objectives are forgotten', cells: ['rediscovered in December', 'mid-year reminder, objectives reviewed'] },
      { label: 'The form is filled in the day before', cells: ['from memory: the last quarter', 'the year’s notes are already in the form'] },
      { label: 'A training course is requested', cells: ['it stays in the binder', 'request followed: decided, planned, done'] },
      { label: 'A promotion is being decided', cells: ['three binders to look for', 'three years of forms, side by side'] },
    ], caption: 'Figure 6 · Five situations. The Word form records one interview; the software holds the year, then the years.', alt: 'Matrix of five situations: everyone gets “good”, forgotten objectives, form filled in the day before, training requested, promotion to decide; for each, with a Word form and with the software.' },
  },
  ar: {
    cover: { eyebrow: 'تقييم الموظفين · الجزائر · 2027', title: ['المقابلة السنوية:', 'علامة لها معنى'], subtitle: 'أهداف قابلة للقياس، وقائع تُدوَّن خلال السنة، معايير موصوفة، ومعايرة بين المسؤولين', left: { label: 'على الورق', sub: '71 بالمئة نالوا «4»' }, right: { label: 'بعد المعايرة', sub: 'فارق أقل من نصف نقطة' } },
    notes: { caption: 'الشكل 1 · السنة الماضية، 71 بالمئة من 180 شخصاً نالوا «4»، ومتوسطا مسؤولَين يختلفان بنقطة ونصف؛ وبعد معايير موصوفة ومعايرة، أقل من نصف نقطة. أعداد وعلامات خيالية.' },
    campagne: { title: 'حملة، في ست مراحل', items: [
      { label: 'الأهداف', sub: 'ثلاثة إلى خمسة، لكل واحد قياس وتاريخ' },
      { label: 'ملاحظات السنة', sub: 'واقعة، تاريخ، وسطران' },
      { label: 'منتصف السنة', sub: 'أهداف مراجَعة، وما لم يعد صالحاً يُغيَّر' },
      { label: 'التقييم الذاتي', sub: 'الشخص يحدد موقعه، معياراً بمعيار' },
      { label: 'العلامة والمعايرة', sub: 'المسؤول ينقّط؛ والحالات الحدّية تُقرأ جماعياً', accent: true },
      { label: 'المقابلة والخطة', sub: 'ما قيل، صودق عليه، ثم تُوبِع' },
    ], caption: 'الشكل 2 · ست مراحل. المرحلة المبرزة هي العلامة التي تُعاد قراءتها في المعايرة: هناك تبدأ علامة «4» في حمل المعنى نفسه من مصلحة إلى أخرى.', alt: 'ست مراحل: الأهداف، ملاحظات السنة، منتصف السنة، التقييم الذاتي، العلامة والمعايرة (مبرزة)، والمقابلة والخطة.' },
    memoire: { caption: 'الشكل 3 · في أربعين بطاقة مكتوبة من الذاكرة، 74 بالمئة من الوقائع المذكورة تعود إلى الأشهر الثلاثة الأخيرة؛ ومع ملاحظات مدوَّنة خلال السنة، 33 بالمئة، وخمس وقائع في البطاقة بدل اثنتين. بطاقات ووقائع خيالية.' },
    couches: { title: 'ما يوجد في البرنامج، في خمس طبقات', layers: [
      { label: 'الأهداف', items: [{ name: 'الأهداف: ثلاثة إلى خمسة لكل شخص، قياس، تاريخ، ووزن، تُراجَع في منتصف السنة', sub: 'ما كان منتظراً' }] },
      { label: 'الملاحظات', items: [{ name: 'ملاحظات السنة: واقعة، تاريخ، وسطران، مربوطة بهدف أو بمعيار', sub: 'ما وقع', accent: true }] },
      { label: 'التقييم', items: [{ name: 'التقييم: تقييم ذاتي، معايير موصوفة بسلوكات، علامة المسؤول، ومعايرة', sub: 'العلامة نفسها تعني الشيء نفسه' }] },
      { label: 'المقابلة', items: [{ name: 'المقابلة والخطة: محضر يصادق عليه الطرفان، تكوينات مطلوبة، وأهداف السنة القادمة', sub: 'ما تقرَّر، ثم تُوبِع' }] },
      { label: 'الصلاحيات', items: [{ name: 'الصلاحيات والسجل: كل شخص يرى بطاقته، المسؤول يرى فريقه، والموارد البشرية ترى الكل', sub: 'من يرى ماذا، سنة بعد سنة' }] },
    ], caption: 'الشكل 4 · خمس طبقات. الطبقة المبرزة، ملاحظات السنة، هي التي لم تكن في بطاقة المثال الورقية.', alt: 'خمس طبقات: الأهداف؛ ملاحظات السنة (مبرزة)؛ التقييم؛ المقابلة والخطة؛ والصلاحيات والسجل.' },
    calendrier: { title: 'عشرة أسابيع، بدءاً ببطاقات السنة الماضية', unit: 'أسبوع', items: [
      { label: 'بطاقات السنة الماضية', note: 'عدّ العلامات، المتوسط لكل مسؤول، وإعادة قراءة أربعين بطاقة', from: 0, to: 1, accent: true },
      { label: 'المعايير والسلّم', note: 'خمسة إلى سبعة معايير، وكل مستوى موصوف بسلوك يمكن ملاحظته', from: 0, to: 3 },
      { label: 'صيغة الأهداف', note: 'ثلاثة إلى خمسة لكل شخص، قياس، تاريخ، ووزن', from: 2, to: 4 },
      { label: 'البطاقات، المسار، والصلاحيات', note: 'من يملأ ماذا، من يرى ماذا، بالعربية والفرنسية', from: 3, to: 7 },
      { label: 'تكوين المسؤولين', note: 'التنقيط على وقائع، إدارة المقابلة؛ وتجربة في مصلحة واحدة', from: 6, to: 9 },
      { label: 'فتح الحملة', note: 'إدخال الأهداف، وأولى ملاحظات السنة', from: 9, to: 10 },
    ], caption: 'الشكل 5 · عشرة أسابيع في المثال. الفترة المبرزة هي الأولى: بطاقات السنة الماضية تقول ما يجب تصحيحه. مدد تقريبية لمثال مركَّب.', alt: 'رزنامة من عشرة أسابيع: بطاقات السنة الماضية (مبرزة)، المعايير والسلّم، صيغة الأهداف، البطاقات والمسار والصلاحيات، تكوين المسؤولين، وفتح الحملة.' },
    situations: { title: 'خمس حالات، وما يغيّره البرنامج', columns: ['مع بطاقة ورقية', 'مع البرنامج'], rows: [
      { label: 'الكل ينال «جيد»', cells: ['لا سبيل للمقارنة بين مصلحتين', 'التوزيع والمتوسط لكل مسؤول'] },
      { label: 'أهداف جانفي منسية', cells: ['تُكتشَف من جديد في ديسمبر', 'تذكير في منتصف السنة، وأهداف مراجَعة'] },
      { label: 'البطاقة تُملأ في الليلة السابقة', cells: ['من الذاكرة: الفصل الأخير', 'ملاحظات السنة موجودة في البطاقة'] },
      { label: 'تكوين مطلوب', cells: ['يبقى في الحافظة', 'طلب متابَع: مقرَّر، مبرمَج، ثم منجَز'] },
      { label: 'ترقية تُقرَّر', cells: ['نبحث عن ثلاث حافظات', 'ثلاث سنوات من البطاقات، جنباً إلى جنب'] },
    ], caption: 'الشكل 6 · خمس حالات. البطاقة الورقية تسجّل مقابلة واحدة؛ والبرنامج يحفظ السنة، ثم السنوات.', alt: 'مصفوفة من خمس حالات: الكل ينال «جيد»، أهداف منسية، بطاقة تُملأ في الليلة السابقة، تكوين مطلوب، وترقية تُقرَّر؛ ولكل واحدة مع بطاقة ورقية ومع البرنامج.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      notes: { svg: notes(e.notes, rtl), caption: t.notes.caption, alt: e.notes.alt },
      campagne: { svg: steps({ title: t.campagne.title, steps: t.campagne.items, arrows: true, rtl }), caption: t.campagne.caption, alt: t.campagne.alt },
      memoire: { svg: memoire(e.memoire, rtl), caption: t.memoire.caption, alt: e.memoire.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 10, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
      situations: { svg: matrix({ title: t.situations.title, columns: t.situations.columns, rows: t.situations.rows, rtl }), caption: t.situations.caption, alt: t.situations.alt },
    },
  };
}
