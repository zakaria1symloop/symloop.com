import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { question, corpus, STRINGS as SC } from './custom/assistantdoc.mjs';
export const slug = 'chatbot-entreprise-algerie-2027-assistant-ia-qui-repond-avec-vos-documents-cite-la-page-droits-d-acces-je-ne-sais-pas-jeu-de-questions';
const T = {
  fr: {
    cover: { eyebrow: 'Chatbot d’entreprise · Algérie · 2027', title: ['Un assistant qui répond', 'avec vos documents'], subtitle: 'Réponses citées, droits d’accès respectés, « je ne sais pas » quand rien n’est écrit', left: { label: 'Tout indexé', sub: '84 justes sur 120' }, right: { label: 'Après le tri', sub: '107 justes sur 120' } },
    question: { caption: 'Figure 1 · Une question traverse cinq étapes : 7 200 passages, 40 candidats, 8 retenus, 6 autorisés, 4 cités. Le filtre des droits passe avant le modèle. Question, documents et volumes fictifs.' },
    corpus: { caption: 'Figure 2 · Sur 1 150 documents, 190 doublons et anciennes versions sont retirés avant l’indexation ; sur 120 questions de test, les réponses justes avec la bonne source passent de 84 à 107. Documents et résultats fictifs.' },
    ingestion: { title: 'Un document entre dans l’assistant, en six temps', items: [
      { label: 'Collecte', sub: 'dossiers partagés, intranet, messagerie des services' },
      { label: 'Tri', sub: 'doublons et anciennes versions retirés, un responsable par document' },
      { label: 'Texte', sub: 'les scans passent par la reconnaissance de caractères' },
      { label: 'Découpage', sub: 'par titres et par paragraphes, avec la page d’origine' },
      { label: 'Droits', sub: 'chaque passage hérite du groupe de son document', accent: true },
      { label: 'Mise à jour', sub: 'document modifié : anciens passages retirés, nouveaux indexés' },
    ], caption: 'Figure 3 · Six temps. Le temps accentué est celui des droits : un passage garde le groupe de lecture de son document, du dossier jusqu’à la réponse.', alt: 'Six temps : collecte, tri, texte, découpage, droits (accentué), mise à jour.' },
    couches: { title: 'Ce qu’il y a dans l’assistant, en cinq couches', layers: [
      { label: 'Documents', items: [{ name: 'Les documents : sources reliées, une version en vigueur, un responsable et une date par document', sub: 'ce que l’assistant a le droit de savoir' }] },
      { label: 'Index', items: [{ name: 'L’index : passages découpés par titres, recherche par les mots et par le sens, reclassement', sub: 'retrouver le bon passage' }] },
      { label: 'Droits', items: [{ name: 'Les droits : groupes de lecture repris de vos dossiers, filtre appliqué avant le modèle, journal des questions', sub: 'qui peut lire quoi', accent: true }] },
      { label: 'Réponse', items: [{ name: 'La réponse : rédigée à partir des passages, une source par phrase, « je ne sais pas » sous le seuil', sub: 'rien n’est dit de mémoire' }] },
      { label: 'Mesure', items: [{ name: 'La mesure : jeu de questions rejoué à chaque changement, questions sans réponse, avis des utilisateurs', sub: 'savoir s’il répond juste' }] },
    ], caption: 'Figure 4 · Cinq couches. La couche accentuée, les droits, est celle qu’un assistant grand public branché sur un dossier partagé n’a pas.', alt: 'Cinq couches : les documents ; l’index ; les droits (accentués) ; la réponse ; la mesure.' },
    calendrier: { title: 'Dix semaines, en commençant par compter les questions', unit: 'sem.', items: [
      { label: 'Compter les questions', note: 'deux semaines : qui demande quoi, à qui, combien de fois', from: 0, to: 2, accent: true },
      { label: 'Tri des documents', note: 'doublons, anciennes versions, scans, responsable et date', from: 0, to: 4 },
      { label: 'Carte des droits', note: 'groupes de lecture repris des dossiers, documents réservés repérés', from: 2, to: 4 },
      { label: 'Index et première version', note: 'découpage, recherche, réponses citées, « je ne sais pas »', from: 3, to: 6 },
      { label: 'Jeu de questions et réglage', note: '120 questions réelles avec la réponse attendue, rejouées à chaque réglage', from: 5, to: 8 },
      { label: 'Service pilote, puis ouverture', note: 'un service d’abord, les questions sans réponse relues chaque semaine', from: 7, to: 10 },
    ], caption: 'Figure 5 · Dix semaines dans l’exemple. La période accentuée est la première : deux semaines à compter les questions réelles. Durées indicatives d’un exemple construit.', alt: 'Calendrier de dix semaines : compter les questions (accentué), tri des documents, carte des droits, index et première version, jeu de questions et réglage, service pilote puis ouverture.' },
    situations: { title: 'Cinq situations, et ce que l’assistant change', columns: ['Avec les dossiers partagés', 'Avec l’assistant'], rows: [
      { label: 'La même question revient cent fois', cells: ['un collègue répond, de mémoire', 'réponse citée, à toute heure'] },
      { label: 'La procédure a changé hier', cells: ['l’ancienne version circule encore', 'ancienne version retirée de l’index'] },
      { label: 'Une note est réservée à l’encadrement', cells: ['protégée si le dossier l’est', 'jamais lue pour qui n’y a pas droit'] },
      { label: 'La réponse n’est écrite nulle part', cells: ['chacun donne la sienne', '« je ne sais pas », question transmise'] },
      { label: 'On cherche une référence exacte', cells: ['retrouvée si l’on connaît le dossier', 'recherche par les mots, puis par le sens'] },
    ], caption: 'Figure 6 · Cinq situations. L’assistant ne remplace pas les personnes qui savent : il répond aux questions déjà écrites, et leur transmet les autres.', alt: 'Matrice de cinq situations : question répétée, procédure modifiée, note réservée, réponse non écrite, référence exacte ; pour chacune, avec les dossiers partagés et avec l’assistant.' },
  },
  en: {
    cover: { eyebrow: 'Company chatbot · Algeria · 2027', title: ['An assistant that answers', 'from your documents'], subtitle: 'Answers with sources, access rights respected, “I don’t know” when nothing is written', left: { label: 'Everything indexed', sub: '84 right out of 120' }, right: { label: 'After triage', sub: '107 right out of 120' } },
    question: { caption: 'Figure 1 · A question goes through five stages: 7,200 passages, 40 candidates, 8 kept, 6 allowed, 4 quoted. The rights filter runs before the model. Fictitious question, documents and volumes.' },
    corpus: { caption: 'Figure 2 · Out of 1,150 documents, 190 duplicates and old versions are removed before indexing; on 120 test questions, answers that are right with the right source go from 84 to 107. Fictitious documents and results.' },
    ingestion: { title: 'A document enters the assistant, in six steps', items: [
      { label: 'Collection', sub: 'shared folders, intranet, department mailboxes' },
      { label: 'Triage', sub: 'duplicates and old versions removed, one owner per document' },
      { label: 'Text', sub: 'scans go through character recognition' },
      { label: 'Splitting', sub: 'by headings and paragraphs, with the original page' },
      { label: 'Rights', sub: 'each passage inherits the group of its document', accent: true },
      { label: 'Update', sub: 'document changed: old passages removed, new ones indexed' },
    ], caption: 'Figure 3 · Six steps. The accented step is the rights: a passage keeps the reading group of its document, from the folder to the answer.', alt: 'Six steps: collection, triage, text, splitting, rights (accented), update.' },
    couches: { title: 'What is inside the assistant, in five layers', layers: [
      { label: 'Documents', items: [{ name: 'Documents: connected sources, one version in force, an owner and a date per document', sub: 'what the assistant is allowed to know' }] },
      { label: 'Index', items: [{ name: 'Index: passages split by headings, search by words and by meaning, re-ranking', sub: 'finding the right passage' }] },
      { label: 'Rights', items: [{ name: 'Rights: reading groups taken from your folders, filter applied before the model, log of questions', sub: 'who can read what', accent: true }] },
      { label: 'Answer', items: [{ name: 'Answer: written from the passages, one source per sentence, “I don’t know” under the threshold', sub: 'nothing is said from memory' }] },
      { label: 'Measurement', items: [{ name: 'Measurement: question set replayed at every change, unanswered questions, user feedback', sub: 'knowing whether it answers right' }] },
    ], caption: 'Figure 4 · Five layers. The accented layer, the rights, is the one a consumer assistant plugged into a shared folder does not have.', alt: 'Five layers: documents; index; rights (accented); answer; measurement.' },
    calendrier: { title: 'Ten weeks, starting by counting the questions', unit: 'wk', items: [
      { label: 'Counting the questions', note: 'two weeks: who asks what, to whom, how many times', from: 0, to: 2, accent: true },
      { label: 'Document triage', note: 'duplicates, old versions, scans, owner and date', from: 0, to: 4 },
      { label: 'Rights map', note: 'reading groups taken from the folders, reserved documents identified', from: 2, to: 4 },
      { label: 'Index and first version', note: 'splitting, search, answers with sources, “I don’t know”', from: 3, to: 6 },
      { label: 'Question set and tuning', note: '120 real questions with the expected answer, replayed at every tuning', from: 5, to: 8 },
      { label: 'Pilot department, then opening', note: 'one department first, unanswered questions reread every week', from: 7, to: 10 },
    ], caption: 'Figure 5 · Ten weeks in the example. The accented period is the first: two weeks counting the real questions. Indicative durations of a constructed example.', alt: 'Ten-week calendar: counting the questions (accented), document triage, rights map, index and first version, question set and tuning, pilot department then opening.' },
    situations: { title: 'Five situations, and what the assistant changes', columns: ['With shared folders', 'With the assistant'], rows: [
      { label: 'The same question comes back a hundred times', cells: ['a colleague answers, from memory', 'answer with its source, at any hour'] },
      { label: 'The procedure changed yesterday', cells: ['the old version still circulates', 'old version removed from the index'] },
      { label: 'A note is reserved for managers', cells: ['protected if the folder is', 'never read for those with no right'] },
      { label: 'The answer is written nowhere', cells: ['everyone gives their own', '“I don’t know”, question forwarded'] },
      { label: 'Someone looks for an exact reference', cells: ['found if you know the folder', 'search by words, then by meaning'] },
    ], caption: 'Figure 6 · Five situations. The assistant does not replace the people who know: it answers the questions already written down, and forwards the others to them.', alt: 'Matrix of five situations: repeated question, changed procedure, reserved note, unwritten answer, exact reference; for each, with shared folders and with the assistant.' },
  },
  ar: {
    cover: { eyebrow: 'مساعد المؤسسة · الجزائر · 2027', title: ['مساعد يجيب', 'بوثائقكم'], subtitle: 'أجوبة بمصادرها، صلاحيات محترمة، «لا أعرف» حين لا يوجد شيء مكتوب، وقياس على أسئلتكم', left: { label: 'فهرسة الكل', sub: '84 صحيحاً من 120' }, right: { label: 'بعد الفرز', sub: '107 صحيحاً من 120' } },
    question: { caption: 'الشكل 1 · السؤال يمر بخمس مراحل: آلاف المقاطع المفهرَسة، 40 مرشَّحاً، 8 محتفَظ بها، 6 مسموح بها، و4 مذكورة. ومصفاة الصلاحيات تمر قبل النموذج. سؤال ووثائق وأحجام خيالية.' },
    corpus: { caption: 'الشكل 2 · من 1150 وثيقة، يُسحَب 190 تكراراً ونسخة قديمة قبل الفهرسة؛ وعلى 120 سؤال اختبار، الأجوبة الصحيحة بالمصدر الصحيح تنتقل من 84 إلى 107. وثائق ونتائج خيالية.' },
    ingestion: { title: 'وثيقة تدخل المساعد، في ست مراحل', items: [
      { label: 'الجمع', sub: 'الملفات المشتركة، الشبكة الداخلية، وبريد المصالح' },
      { label: 'الفرز', sub: 'سحب التكرارات والنسخ القديمة، ومسؤول لكل وثيقة' },
      { label: 'النص', sub: 'الصور الممسوحة تمر بالتعرف على الحروف' },
      { label: 'التقطيع', sub: 'حسب العناوين والفقرات، مع الصفحة الأصلية' },
      { label: 'الصلاحيات', sub: 'كل مقطع يرث مجموعة وثيقته', accent: true },
      { label: 'التحيين', sub: 'وثيقة عُدِّلت: المقاطع القديمة تُسحَب، والجديدة تُفهرَس' },
    ], caption: 'الشكل 3 · ست مراحل. المرحلة المبرزة هي الصلاحيات: المقطع يحتفظ بمجموعة القراءة لوثيقته، من الملف إلى الجواب.', alt: 'ست مراحل: الجمع، الفرز، النص، التقطيع، الصلاحيات (مبرزة)، والتحيين.' },
    couches: { title: 'ما يوجد في المساعد، في خمس طبقات', layers: [
      { label: 'الوثائق', items: [{ name: 'الوثائق: مصادر مربوطة، نسخة سارية واحدة، ومسؤول وتاريخ لكل وثيقة', sub: 'ما يحق للمساعد معرفته' }] },
      { label: 'الفهرس', items: [{ name: 'الفهرس: مقاطع مقطَّعة حسب العناوين، بحث بالكلمات وبالمعنى، وإعادة ترتيب', sub: 'إيجاد المقطع الصحيح' }] },
      { label: 'الصلاحيات', items: [{ name: 'الصلاحيات: مجموعات قراءة مأخوذة من ملفاتكم، مصفاة قبل النموذج، وسجل للأسئلة', sub: 'من يقرأ ماذا', accent: true }] },
      { label: 'الجواب', items: [{ name: 'الجواب: مكتوب انطلاقاً من المقاطع، مصدر لكل جملة، و«لا أعرف» تحت العتبة', sub: 'لا شيء يُقال من الذاكرة' }] },
      { label: 'القياس', items: [{ name: 'القياس: مجموعة أسئلة تُعاد عند كل تغيير، الأسئلة دون جواب، وآراء المستعملين', sub: 'معرفة هل يجيب صحيحاً' }] },
    ], caption: 'الشكل 4 · خمس طبقات. الطبقة المبرزة، الصلاحيات، هي التي لا يملكها مساعد عمومي موصول بملف مشترك.', alt: 'خمس طبقات: الوثائق؛ الفهرس؛ الصلاحيات (مبرزة)؛ الجواب؛ والقياس.' },
    calendrier: { title: 'عشرة أسابيع، بدءاً بعدّ الأسئلة', unit: 'أسبوع', items: [
      { label: 'عدّ الأسئلة', note: 'أسبوعان: من يسأل ماذا، لمن، وكم مرة', from: 0, to: 2, accent: true },
      { label: 'فرز الوثائق', note: 'التكرارات، النسخ القديمة، الصور الممسوحة، المسؤول والتاريخ', from: 0, to: 4 },
      { label: 'خريطة الصلاحيات', note: 'مجموعات القراءة مأخوذة من الملفات، والوثائق المخصَّصة محدَّدة', from: 2, to: 4 },
      { label: 'الفهرس والنسخة الأولى', note: 'التقطيع، البحث، أجوبة بمصادرها، و«لا أعرف»', from: 3, to: 6 },
      { label: 'مجموعة الأسئلة والضبط', note: '120 سؤالاً حقيقياً مع الجواب المنتظَر، تُعاد عند كل ضبط', from: 5, to: 8 },
      { label: 'مصلحة تجريبية، ثم الفتح', note: 'مصلحة واحدة أولاً، والأسئلة دون جواب تُراجَع كل أسبوع', from: 7, to: 10 },
    ], caption: 'الشكل 5 · عشرة أسابيع في المثال. الفترة المبرزة هي الأولى: أسبوعان لعدّ الأسئلة الحقيقية. مدد تقريبية لمثال مركَّب.', alt: 'رزنامة من عشرة أسابيع: عدّ الأسئلة (مبرز)، فرز الوثائق، خريطة الصلاحيات، الفهرس والنسخة الأولى، مجموعة الأسئلة والضبط، ومصلحة تجريبية ثم الفتح.' },
    situations: { title: 'خمس حالات، وما يغيّره المساعد', columns: ['مع الملفات المشتركة', 'مع المساعد'], rows: [
      { label: 'السؤال نفسه يعود مئة مرة', cells: ['زميل يجيب، من الذاكرة', 'جواب بمصدره، في أي ساعة'] },
      { label: 'الإجراء تغيّر أمس', cells: ['النسخة القديمة ما زالت تتداول', 'النسخة القديمة مسحوبة من الفهرس'] },
      { label: 'مذكرة مخصَّصة للتأطير', cells: ['محمية إذا كان الملف محمياً', 'لا تُقرأ أبداً لمن لا حق له'] },
      { label: 'الجواب غير مكتوب في أي مكان', cells: ['كل واحد يعطي جوابه', '«لا أعرف»، ويُحوَّل السؤال'] },
      { label: 'يبحثون عن مرجع محدد', cells: ['يوجد إذا عُرف الملف', 'بحث بالكلمات، ثم بالمعنى'] },
    ], caption: 'الشكل 6 · خمس حالات. المساعد لا يعوّض الأشخاص الذين يعرفون: يجيب عن الأسئلة المكتوبة، ويحوّل إليهم الأخرى.', alt: 'مصفوفة من خمس حالات: سؤال متكرر، إجراء معدَّل، مذكرة مخصَّصة، جواب غير مكتوب، ومرجع محدد؛ ولكل واحدة مع الملفات المشتركة ومع المساعد.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      question: { svg: question(e.question, rtl), caption: t.question.caption, alt: e.question.alt },
      corpus: { svg: corpus(e.corpus, rtl), caption: t.corpus.caption, alt: e.corpus.alt },
      ingestion: { svg: steps({ title: t.ingestion.title, steps: t.ingestion.items, arrows: true, rtl }), caption: t.ingestion.caption, alt: t.ingestion.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 10, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
      situations: { svg: matrix({ title: t.situations.title, columns: t.situations.columns, rows: t.situations.rows, rtl }), caption: t.situations.caption, alt: t.situations.alt },
    },
  };
}
