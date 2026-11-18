import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { bacs, usages, STRINGS as SC } from './custom/assistant.mjs';
export const slug = 'comment-utiliser-chatgpt-en-entreprise-algerie-2027-ia-au-travail-donnees-confidentielles-compte-personnel-ou-professionnel-trois-bacs';
const T = {
  fr: {
    cover: { eyebrow: 'ChatGPT en entreprise · Algérie · 2027', title: ['ChatGPT en entreprise', 'ce qui entre, ce qui n’entre pas'], subtitle: 'Un compte de l’entreprise, la règle des trois bacs, une relecture, cinq usages sans risque, trois à cadrer', left: { label: 'Compte personnel', sub: 'un contrat collé un soir' }, right: { label: 'Compte de l’entreprise', sub: 'trois bacs, une relecture' } },
    bacs: { caption: 'Figure 1 · La règle d’usage, sur une page. Premier bac : ce qui se colle tel quel, parce que rien d’interne n’y figure. Deuxième bac : ce qui se colle une fois nettoyé, ou sur le compte de l’entreprise. Troisième bac : ce qui ne se colle jamais, quel que soit l’outil. Exemple construit, à adapter.' },
    ordre: { title: 'Mettre un cadre, dans cet ordre', items: [
      { label: 'Recenser', sub: 'qui l’utilise déjà, sur quel compte', accent: true },
      { label: 'Choisir', sub: 'une offre, un compte par personne' },
      { label: 'Écrire', sub: 'les trois bacs, sur une page' },
      { label: 'Former', sub: 'deux heures, sur de vrais cas' },
      { label: 'Outiller', sub: 'dix consignes types par métier' },
      { label: 'Revoir', sub: 'chaque trimestre, avec les usages' },
    ], caption: 'Figure 2 · Le temps accentué est le premier : recenser. Vos employés utilisent déjà un assistant ; la question n’est pas de l’autoriser, mais de savoir sur quel compte et avec quelles données. L’interdiction ne figure pas dans la liste : elle déplace l’usage vers le téléphone personnel.', alt: 'Six temps : recenser (accentué), choisir, écrire, former, outiller, revoir.' },
    comptes: { title: 'Compte personnel ou compte de l’entreprise', columns: ['Compte personnel', 'Compte de l’entreprise'], rows: [
      { label: 'À qui est le compte', cells: ['à l’employé, avec son adresse personnelle', 'à l’entreprise, avec l’adresse professionnelle'] },
      { label: 'L’historique des échanges', cells: ['chez l’employé, y compris après son départ', 'dans l’espace de l’entreprise, fermé au départ'] },
      { label: 'L’entraînement des modèles', cells: ['activé par défaut selon l’éditeur, à désactiver soi-même', 'exclu par défaut selon l’éditeur ; à vérifier au contrat'] },
      { label: 'Qui administre', cells: ['personne', 'un administrateur : membres, droits, connexion unique'] },
      { label: 'Ce qu’on peut y brancher', cells: ['rien de l’entreprise', 'vos documents et vos outils, avec des droits'] },
      { label: 'Ce qu’il reste à faire', cells: ['tout : aucune règle ne s’y applique', 'les trois bacs et la relecture, toujours'] },
    ], caption: 'Figure 3 · Six différences. Le compte de l’entreprise ne rend pas l’assistant plus exact : il met l’historique, l’administration et les conditions d’usage du côté de l’entreprise. La ligne sur l’entraînement reprend ce que l’éditeur de ChatGPT indique en novembre 2026 ; vérifiez-la pour l’offre que vous souscrivez.', alt: 'Matrice de six différences entre un compte personnel et un compte de l’entreprise : titulaire, historique, entraînement des modèles, administration, branchements, ce qu’il reste à faire.' },
    regles: { title: 'Cinq règles qui tiennent sur une page', layers: [
      { label: 'Compte', items: [{ name: 'Un compte de l’entreprise pour chacun, ouvert et fermé avec les autres comptes', sub: 'plus de conversation de travail sur un compte privé' }] },
      { label: 'Données', items: [{ name: 'La règle des trois bacs : ce qui entre, ce qui entre nettoyé, ce qui n’entre jamais', sub: 'la décision se prend en dix secondes', accent: true }] },
      { label: 'Relecture', items: [{ name: 'Toute réponse est relue par celui qui signe : chiffres, noms, dates, citations', sub: 'l’assistant peut affirmer une chose fausse' }] },
      { label: 'Actions', items: [{ name: 'Aucun envoi, aucun paiement, aucune suppression sans validation humaine', sub: 'il propose, quelqu’un décide' }] },
      { label: 'Formation', items: [{ name: 'Deux heures par équipe : dix consignes types, les trois bacs, ce qu’on ne lui demande pas', sub: 'l’usage devient un savoir-faire' }] },
    ], caption: 'Figure 4 · La couche accentuée est celle des données : c’est la règle qui sert dix fois par jour. Les quatre autres l’encadrent : un compte qui appartient à l’entreprise, une relecture par celui qui signe, aucune action sans validation, et deux heures de formation.', alt: 'Cinq règles : compte ; données (accentuée) ; relecture ; actions ; formation.' },
    usages: { caption: 'Figure 5 · Dix usages placés selon le temps gagné et la sensibilité des données. Cinq se font dès demain. Trois, les plus utiles, touchent aux clients et aux documents de l’entreprise : ils demandent un cadre. Deux ne se font pas. Positions indicatives d’un exemple construit.' },
    calendrier: { title: 'Quatre semaines, du recensement au premier bilan', unit: 'sem.', items: [
      { label: 'Recensement', note: 'qui utilise quel assistant, sur quel compte, pour quelles tâches ; questionnaire anonyme', from: 0, to: 1, accent: true },
      { label: 'Offre et comptes', note: 'une offre choisie, un compte par personne, connexion avec l’adresse professionnelle', from: 1, to: 2 },
      { label: 'Règle et formation', note: 'les trois bacs sur une page, deux heures par équipe, sur les tâches du recensement', from: 1, to: 3 },
      { label: 'Consignes types', note: 'dix consignes par métier, relues et rangées dans l’intranet', from: 2, to: 4 },
      { label: 'Premier bilan', note: 'usages réels, incidents, temps gagné déclaré, les trois usages à cadrer ensuite', from: 3, to: 4 },
    ], caption: 'Figure 6 · Quatre semaines dans l’exemple. La période accentuée est la première : un recensement anonyme, sans jugement. La règle et la formation occupent les deux semaines suivantes ; le bilan de la quatrième dit lesquels des trois usages sensibles méritent un assistant branché sur vos documents. Durées indicatives d’un exemple construit.', alt: 'Calendrier de quatre semaines : recensement (accentué, une semaine), offre et comptes, règle et formation, consignes types, premier bilan.' },
  },
  en: {
    cover: { eyebrow: 'ChatGPT at work · Algeria · 2027', title: ['ChatGPT in a company', 'what goes in, what stays out'], subtitle: 'A company account, the three-bin rule, a reread, five risk-free uses, three to frame', left: { label: 'Personal account', sub: 'a contract pasted one evening' }, right: { label: 'Company account', sub: 'three bins, one reread' } },
    bacs: { caption: 'Figure 1 · The rule of use, on one page. First bin: what is pasted as it is, because nothing internal is in it. Second bin: what is pasted once cleaned, or on the company account. Third bin: what is never pasted, whatever the tool. Constructed example, to adapt.' },
    ordre: { title: 'Setting a frame, in this order', items: [
      { label: 'Take stock', sub: 'who already uses it, on which account', accent: true },
      { label: 'Choose', sub: 'one plan, one account per person' },
      { label: 'Write', sub: 'the three bins, on one page' },
      { label: 'Train', sub: 'two hours, on real cases' },
      { label: 'Equip', sub: 'ten standard prompts per job' },
      { label: 'Review', sub: 'every quarter, with the uses' },
    ], caption: 'Figure 2 · The accented step is the first: take stock. Your employees already use an assistant; the question is not whether to allow it, but on which account and with what data. A ban is not in the list: it moves the use to the personal phone.', alt: 'Six steps: take stock (accented), choose, write, train, equip, review.' },
    comptes: { title: 'Personal account or company account', columns: ['Personal account', 'Company account'], rows: [
      { label: 'Whose account it is', cells: ['the employee’s, with their personal address', 'the company’s, with the work address'] },
      { label: 'The history of exchanges', cells: ['with the employee, including after they leave', 'in the company’s space, closed on departure'] },
      { label: 'Model training', cells: ['on by default according to the publisher, to be turned off yourself', 'excluded by default according to the publisher; check the contract'] },
      { label: 'Who administers it', cells: ['nobody', 'an administrator: members, rights, single sign-in'] },
      { label: 'What can be connected', cells: ['nothing of the company’s', 'your documents and tools, with rights'] },
      { label: 'What still has to be done', cells: ['everything: no rule applies there', 'the three bins and the reread, always'] },
    ], caption: 'Figure 3 · Six differences. The company account does not make the assistant more accurate: it puts the history, the administration and the terms of use on the company’s side. The line on training repeats what the publisher of ChatGPT states in November 2026; check it for the plan you take out.', alt: 'Matrix of six differences between a personal account and a company account: holder, history, model training, administration, connections, what still has to be done.' },
    regles: { title: 'Five rules that fit on one page', layers: [
      { label: 'Account', items: [{ name: 'A company account for each person, opened and closed with their other accounts', sub: 'no more work conversations on a private account' }] },
      { label: 'Data', items: [{ name: 'The three-bin rule: what goes in, what goes in cleaned, what never goes in', sub: 'the decision takes ten seconds', accent: true }] },
      { label: 'Reread', items: [{ name: 'Every answer is reread by whoever signs: figures, names, dates, quotations', sub: 'the assistant can state something false' }] },
      { label: 'Actions', items: [{ name: 'No sending, no payment, no deletion without a human approval', sub: 'it proposes, someone decides' }] },
      { label: 'Training', items: [{ name: 'Two hours per team: ten standard prompts, the three bins, what not to ask it', sub: 'use becomes a skill' }] },
    ], caption: 'Figure 4 · The accented layer is data: it is the rule used ten times a day. The other four frame it: an account that belongs to the company, a reread by whoever signs, no action without approval, and two hours of training.', alt: 'Five rules: account; data (accented); reread; actions; training.' },
    usages: { caption: 'Figure 5 · Ten uses placed by time saved and by data sensitivity. Five can be done from tomorrow. Three, the most useful, touch the company’s customers and documents: they need a frame. Two are not done. Indicative positions from a constructed example.' },
    calendrier: { title: 'Four weeks, from taking stock to the first review', unit: 'wk', items: [
      { label: 'Taking stock', note: 'who uses which assistant, on which account, for which tasks; anonymous questionnaire', from: 0, to: 1, accent: true },
      { label: 'Plan and accounts', note: 'one plan chosen, one account per person, sign-in with the work address', from: 1, to: 2 },
      { label: 'Rule and training', note: 'the three bins on one page, two hours per team, on the tasks found', from: 1, to: 3 },
      { label: 'Standard prompts', note: 'ten prompts per job, reread and filed in the intranet', from: 2, to: 4 },
      { label: 'First review', note: 'real uses, incidents, time people say they saved, the three uses to frame next', from: 3, to: 4 },
    ], caption: 'Figure 6 · Four weeks in the example. The accented period is the first: an anonymous stock-take, without judgment. The rule and the training take the next two weeks; the review in the fourth says which of the three sensitive uses deserve an assistant connected to your documents. Indicative durations from a constructed example.', alt: 'Four-week calendar: taking stock (accented, one week), plan and accounts, rule and training, standard prompts, first review.' },
  },
  ar: {
    cover: { eyebrow: 'ChatGPT في المؤسسة · الجزائر · 2027', title: ['ChatGPT في المؤسسة', 'ما يدخل، وما لا يدخل'], subtitle: 'حساب للمؤسسة، قاعدة السلال الثلاث، مراجعة، خمسة استعمالات دون خطر، وثلاثة تُؤطَّر', left: { label: 'حساب شخصي', sub: 'عقد أُلصق ذات مساء' }, right: { label: 'حساب المؤسسة', sub: 'ثلاث سلال، ومراجعة' } },
    bacs: { caption: 'الشكل 1 · قاعدة الاستعمال، في صفحة. السلة الأولى: ما يُلصق كما هو، لأن لا شيء داخلياً فيه. السلة الثانية: ما يُلصق بعد التنظيف، أو على حساب المؤسسة. السلة الثالثة: ما لا يُلصق أبداً، مهما كانت الأداة. مثال مركَّب، يُكيَّف.' },
    ordre: { title: 'وضع إطار، بهذا الترتيب', items: [
      { label: 'الإحصاء', sub: 'من يستعمله أصلاً، وعلى أي حساب', accent: true },
      { label: 'الاختيار', sub: 'عرض واحد، وحساب لكل شخص' },
      { label: 'الكتابة', sub: 'السلال الثلاث، في صفحة' },
      { label: 'التكوين', sub: 'ساعتان، على حالات حقيقية' },
      { label: 'التجهيز', sub: 'عشر تعليمات نموذجية لكل مهنة' },
      { label: 'المراجعة', sub: 'كل ثلاثة أشهر، مع الاستعمالات' },
    ], caption: 'الشكل 2 · المرحلة المبرزة هي الأولى: الإحصاء. عمّالكم يستعملون مساعداً أصلاً؛ والسؤال ليس هل نسمح به، بل على أي حساب وبأي بيانات. والمنع ليس في القائمة: ينقل الاستعمال إلى الهاتف الشخصي.', alt: 'ست مراحل: الإحصاء (مبرزة)، الاختيار، الكتابة، التكوين، التجهيز، المراجعة.' },
    comptes: { title: 'حساب شخصي أم حساب المؤسسة', columns: ['حساب شخصي', 'حساب المؤسسة'], rows: [
      { label: 'لمن الحساب', cells: ['للعامل، بعنوانه الشخصي', 'للمؤسسة، بالعنوان المهني'] },
      { label: 'سجل المحادثات', cells: ['عند العامل، حتى بعد مغادرته', 'في فضاء المؤسسة، ويُغلق عند المغادرة'] },
      { label: 'تدريب النماذج', cells: ['مفعَّل افتراضياً حسب الناشر، ويُعطَّل يدوياً', 'مستبعَد افتراضياً حسب الناشر؛ ويُراجَع في العقد'] },
      { label: 'من يديره', cells: ['لا أحد', 'مسؤول: الأعضاء، الصلاحيات، ودخول موحَّد'] },
      { label: 'ما يمكن ربطه به', cells: ['لا شيء من المؤسسة', 'وثائقكم وأدواتكم، بصلاحيات'] },
      { label: 'ما يبقى فعله', cells: ['كل شيء: لا قاعدة تسري عليه', 'السلال الثلاث والمراجعة، دائماً'] },
    ], caption: 'الشكل 3 · ستة فروق. حساب المؤسسة لا يجعل المساعد أدقّ: يضع السجل والإدارة وشروط الاستعمال في جهة المؤسسة. وسطر التدريب ينقل ما يذكره ناشر ChatGPT في نوفمبر 2026؛ راجعوه للعرض الذي تشتركون فيه.', alt: 'مصفوفة ستة فروق بين حساب شخصي وحساب المؤسسة: صاحب الحساب، السجل، تدريب النماذج، الإدارة، الربط، وما يبقى فعله.' },
    regles: { title: 'خمس قواعد تسعها صفحة', layers: [
      { label: 'الحساب', items: [{ name: 'حساب للمؤسسة لكل شخص، يُفتح ويُغلق مع حساباته الأخرى', sub: 'لا محادثة عمل على حساب خاص بعد اليوم' }] },
      { label: 'البيانات', items: [{ name: 'قاعدة السلال الثلاث: ما يدخل، ما يدخل منظَّفاً، وما لا يدخل أبداً', sub: 'القرار يُتخذ في عشر ثوانٍ', accent: true }] },
      { label: 'المراجعة', items: [{ name: 'كل جواب يراجعه من يوقّع: الأرقام، الأسماء، التواريخ، والاقتباسات', sub: 'المساعد قد يؤكّد شيئاً خاطئاً' }] },
      { label: 'الأفعال', items: [{ name: 'لا إرسال، لا دفع، ولا حذف دون مصادقة بشرية', sub: 'هو يقترح، وأحدهم يقرّر' }] },
      { label: 'التكوين', items: [{ name: 'ساعتان لكل فريق: عشر تعليمات نموذجية، السلال الثلاث، وما لا يُطلب منه', sub: 'الاستعمال يصير مهارة' }] },
    ], caption: 'الشكل 4 · الطبقة المبرزة هي البيانات: هي القاعدة التي تُستعمل عشر مرات في اليوم. والأربع الأخرى تؤطّرها: حساب تملكه المؤسسة، مراجعة ممن يوقّع، لا فعل دون مصادقة، وساعتان من التكوين.', alt: 'خمس قواعد: الحساب؛ البيانات (مبرزة)؛ المراجعة؛ الأفعال؛ التكوين.' },
    usages: { caption: 'الشكل 5 · عشرة استعمالات موضوعة حسب الوقت المربوح وحساسية البيانات. خمسة تُنجز من الغد. وثلاثة، الأنفع، تمسّ زبائن المؤسسة ووثائقها: تتطلب إطاراً. واثنان لا يُنجزان. مواضع تقريبية لمثال مركَّب.' },
    calendrier: { title: 'أربعة أسابيع، من الإحصاء إلى أول حصيلة', unit: 'أسبوع', items: [
      { label: 'الإحصاء', note: 'من يستعمل أي مساعد، على أي حساب، ولأي مهام؛ استبيان مجهول الاسم', from: 0, to: 1, accent: true },
      { label: 'العرض والحسابات', note: 'عرض مختار، حساب لكل شخص، ودخول بالعنوان المهني', from: 1, to: 2 },
      { label: 'القاعدة والتكوين', note: 'السلال الثلاث في صفحة، ساعتان لكل فريق، على المهام المحصاة', from: 1, to: 3 },
      { label: 'التعليمات النموذجية', note: 'عشر تعليمات لكل مهنة، مراجَعة ومرتَّبة في الإنترانت', from: 2, to: 4 },
      { label: 'أول حصيلة', note: 'الاستعمالات الفعلية، الحوادث، الوقت المصرَّح بربحه، والاستعمالات الثلاثة التي تُؤطَّر بعدها', from: 3, to: 4 },
    ], caption: 'الشكل 6 · أربعة أسابيع في المثال. الفترة المبرزة هي الأولى: إحصاء مجهول الاسم، دون حكم. والقاعدة والتكوين يأخذان الأسبوعين المواليين؛ وحصيلة الرابع تقول أي الاستعمالات الثلاثة الحساسة يستحق مساعداً موصولاً بوثائقكم. مدد تقريبية لمثال مركَّب.', alt: 'تقويم أربعة أسابيع: الإحصاء (مبرزة، أسبوع)، العرض والحسابات، القاعدة والتكوين، التعليمات النموذجية، أول حصيلة.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      bacs: { svg: bacs(e.bacs, rtl), caption: t.bacs.caption, alt: e.bacs.alt },
      ordre: { svg: steps({ title: t.ordre.title, steps: t.ordre.items, arrows: true, rtl }), caption: t.ordre.caption, alt: t.ordre.alt },
      comptes: { svg: matrix({ title: t.comptes.title, columns: t.comptes.columns, rows: t.comptes.rows, rtl }), caption: t.comptes.caption, alt: t.comptes.alt },
      regles: { svg: layers({ title: t.regles.title, layers: t.regles.layers, rtl }), caption: t.regles.caption, alt: t.regles.alt },
      usages: { svg: usages(e.usages, rtl), caption: t.usages.caption, alt: e.usages.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 4, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
