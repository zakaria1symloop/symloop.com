import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { nps, boucle, STRINGS as SC } from './custom/satisfaction.mjs';
export const slug = 'comment-mesurer-la-satisfaction-client-en-algerie-2027-une-question-apres-chaque-prestation-score-de-recommandation-rappel-sous-48-h-causes';
const T = {
  fr: {
    cover: { eyebrow: 'Satisfaction client · Algérie · 2027', title: ['Mesurer la satisfaction', 'de ses clients'], subtitle: 'Une question juste après la prestation, un rappel sous 48 h pour chaque note basse, des causes comptées', left: { label: 'Aucune réclamation', sub: 'et trois clients perdus' }, right: { label: 'Une question', sub: 'et un rappel sous 48 h' } },
    couches: { title: 'Mesurer la satisfaction, en cinq couches', layers: [
      { label: 'Moment', items: [{ name: 'Juste après la prestation : la livraison, l’intervention, la clôture du dossier, pas trois mois plus tard', sub: 'le souvenir est encore précis' }] },
      { label: 'Question', items: [{ name: 'Une seule question, une note, puis « pourquoi cette note ? » ; pas un questionnaire de vingt lignes', sub: 'la brièveté fait répondre' }] },
      { label: 'Canal', items: [{ name: 'Par le canal que le client utilise déjà : un lien dans un message, sans compte ni mot de passe', sub: 'trois touches sur un téléphone' }] },
      { label: 'Alerte', items: [{ name: 'Toute note basse part aussitôt vers une personne nommée, qui rappelle sous 48 heures', sub: 'c’est la couche qui change quelque chose', accent: true }] },
      { label: 'Tableau', items: [{ name: 'Chaque lundi, trois chiffres : le taux de réponse, les notes basses rappelées à temps, les causes', sub: 'et, deux fois par an, le score de recommandation' }] },
    ], caption: 'Figure 1 · La couche accentuée est l’alerte : une note basse qui ne déclenche rien n’a servi à rien. Les trois premières couches font répondre : le bon moment, une seule question, le canal du client. La dernière fait décider : trois chiffres chaque lundi, et des causes plutôt que des moyennes.', alt: 'Cinq couches : moment ; question ; canal ; alerte (accentuée) ; tableau.' },
    sources: { title: 'Six sources, ce que chacune dit et ce qu’elle tait', columns: ['Ce qu’elle dit', 'Ce qu’elle tait'], rows: [
      { label: 'Les réclamations', cells: ['ce qui a assez dérangé pour qu’on appelle', 'les mécontents qui partent sans rien dire'] },
      { label: 'Les avis en ligne', cells: ['les extrêmes, en public', 'la majorité, et la raison précise'] },
      { label: 'Ce que disent les commerciaux', cells: ['les clients qu’ils voient souvent', 'ceux qu’ils ne voient plus'] },
      { label: 'La note après la prestation', cells: ['ce qui s’est passé cette fois, à chaud', 'l’attachement à l’entreprise'] },
      { label: 'Le score de recommandation', cells: ['l’état de la relation, deux fois par an', 'l’incident précis à corriger'] },
      { label: 'Le client qui ne revient pas', cells: ['une perte, quand elle est déjà faite', 'pourquoi, si personne ne demande'] },
    ], caption: 'Figure 2 · Six façons de savoir ce que pensent les clients. Aucune ne suffit seule. Les réclamations et les avis montrent les extrêmes ; la note après la prestation sert à réparer ; le score de recommandation sert à suivre une tendance. Le client qui ne revient pas est la mesure qui arrive trop tard.', alt: 'Matrice de six sources : les réclamations, les avis en ligne, ce que disent les commerciaux, la note après la prestation, le score de recommandation, le client qui ne revient pas ; pour chacune, ce qu’elle dit et ce qu’elle tait.' },
    nps: { caption: 'Figure 3 · Le calcul d’un score de recommandation. Les réponses de 0 à 6 sont des détracteurs, 7 et 8 des passifs, 9 et 10 des promoteurs. Sur 200 réponses : 15 % de détracteurs, 30 % de passifs, 55 % de promoteurs ; le score est 55 moins 15, soit +40. Exemple construit.' },
    boucle: { caption: 'Figure 4 · Une note basse suivie jusqu’au bout : la prestation, la question dans l’heure, la note et sa raison, l’alerte vers une personne nommée, le rappel sous 48 heures, la cause codée et corrigée. Au centre, la mesure qui compte : onze notes basses sur douze rappelées à temps. Exemple construit.' },
    ordre: { title: 'Mettre en place, dans cet ordre', items: [
      { label: 'Choisir', sub: 'le moment : après quelle prestation', accent: true },
      { label: 'Écrire', sub: 'la question, et « pourquoi ? »' },
      { label: 'Brancher', sub: 'l’envoi sur la fin de prestation' },
      { label: 'Nommer', sub: 'qui rappelle une note basse' },
      { label: 'Coder', sub: 'cinq ou six causes, pas plus' },
      { label: 'Publier', sub: 'ce qui a changé, aux clients' },
    ], caption: 'Figure 5 · Le temps accentué est le premier : choisir le moment. Une seule prestation pour commencer, celle qui compte le plus pour le client. La question s’écrit ensuite ; l’envoi se branche sur l’événement « terminé » ; puis viennent la personne qui rappelle, les causes, et le message aux clients.', alt: 'Six temps : choisir (accentué), écrire, brancher, nommer, coder, publier.' },
    calendrier: { title: 'Cinq semaines, de la première question au premier bilan', unit: 'sem.', items: [
      { label: 'Moment et question', note: 'quelle prestation déclenche l’envoi, la question, l’échelle, la liste des causes', from: 0, to: 1, accent: true },
      { label: 'Envoi et réponse', note: 'lien envoyé à la fin de la prestation, page de réponse en trois touches, sans compte', from: 1, to: 3 },
      { label: 'Alerte et rappel', note: 'note basse vers une personne nommée, rappel sous 48 heures, cause codée', from: 2, to: 4 },
      { label: 'Tableau du lundi', note: 'taux de réponse, notes basses rappelées à temps, causes de la semaine', from: 3, to: 5 },
      { label: 'Premier bilan', note: 'ce que disent les causes, une correction décidée, un message aux clients', from: 4, to: 5 },
    ], caption: 'Figure 6 · Cinq semaines dans l’exemple. La période accentuée est la première : décider du moment et de la question, sans rien construire. L’alerte et le rappel viennent avant le tableau : mieux vaut rappeler dix clients que regarder une moyenne. Durées indicatives d’un exemple construit.', alt: 'Calendrier de cinq semaines : moment et question (accentué, une semaine), envoi et réponse, alerte et rappel, tableau du lundi, premier bilan.' },
  },
  en: {
    cover: { eyebrow: 'Customer satisfaction · Algeria · 2027', title: ['Measuring the satisfaction', 'of your customers'], subtitle: 'One question right after the job, a call back within 48 hours for each low rating, causes counted', left: { label: 'No complaints', sub: 'and three customers lost' }, right: { label: 'One question', sub: 'and a call back in 48 h' } },
    couches: { title: 'Measuring satisfaction, in five layers', layers: [
      { label: 'Moment', items: [{ name: 'Right after the job: the delivery, the call-out, the closing of the file, not three months later', sub: 'the memory is still precise' }] },
      { label: 'Question', items: [{ name: 'A single question, a rating, then “why this rating?”; not a twenty-line questionnaire', sub: 'brevity gets answers' }] },
      { label: 'Channel', items: [{ name: 'Through the channel the customer already uses: a link in a message, no account, no password', sub: 'three taps on a phone' }] },
      { label: 'Alert', items: [{ name: 'Every low rating goes straight to a named person, who calls back within 48 hours', sub: 'this is the layer that changes something', accent: true }] },
      { label: 'Board', items: [{ name: 'Every Monday, three figures: the response rate, low ratings called back in time, the causes', sub: 'and, twice a year, the recommendation score' }] },
    ], caption: 'Figure 1 · The accented layer is the alert: a low rating that triggers nothing has served no purpose. The first three layers get answers: the right moment, a single question, the customer’s channel. The last one gets decisions: three figures every Monday, and causes instead of averages.', alt: 'Five layers: moment; question; channel; alert (accented); board.' },
    sources: { title: 'Six sources, what each says and what it leaves out', columns: ['What it says', 'What it leaves out'], rows: [
      { label: 'Complaints', cells: ['what bothered enough for someone to call', 'the unhappy ones who leave without a word'] },
      { label: 'Online reviews', cells: ['the extremes, in public', 'the majority, and the precise reason'] },
      { label: 'What the sales reps say', cells: ['the customers they see often', 'those they no longer see'] },
      { label: 'The rating after the job', cells: ['what happened this time, while fresh', 'attachment to the company'] },
      { label: 'The recommendation score', cells: ['the state of the relationship, twice a year', 'the precise incident to correct'] },
      { label: 'The customer who does not come back', cells: ['a loss, once it has happened', 'why, if nobody asks'] },
    ], caption: 'Figure 2 · Six ways of knowing what customers think. None is enough alone. Complaints and reviews show the extremes; the rating after the job is for repairing; the recommendation score is for following a trend. The customer who does not come back is the measure that arrives too late.', alt: 'Matrix of six sources: complaints, online reviews, what the sales reps say, the rating after the job, the recommendation score, the customer who does not come back; for each, what it says and what it leaves out.' },
    nps: { caption: 'Figure 3 · Computing a recommendation score. Answers from 0 to 6 are detractors, 7 and 8 passives, 9 and 10 promoters. Out of 200 answers: 15% detractors, 30% passives, 55% promoters; the score is 55 minus 15, which gives +40. Constructed example.' },
    boucle: { caption: 'Figure 4 · One low rating followed to the end: the job, the question within the hour, the rating and its reason, the alert to a named person, the call back within 48 hours, the cause coded and corrected. In the centre, the measure that matters: eleven low ratings out of twelve called back in time. Constructed example.' },
    ordre: { title: 'Setting it up, in this order', items: [
      { label: 'Choose', sub: 'the moment: after which job', accent: true },
      { label: 'Write', sub: 'the question, and “why?”' },
      { label: 'Connect', sub: 'the sending to the end of the job' },
      { label: 'Name', sub: 'who calls back a low rating' },
      { label: 'Code', sub: 'five or six causes, no more' },
      { label: 'Publish', sub: 'what changed, to customers' },
    ], caption: 'Figure 5 · The accented step is the first: choose the moment. A single job to start with, the one that matters most to the customer. The question is written next; the sending is connected to the “finished” event; then come the person who calls back, the causes, and the message to customers.', alt: 'Six steps: choose (accented), write, connect, name, code, publish.' },
    calendrier: { title: 'Five weeks, from the first question to the first review', unit: 'wk', items: [
      { label: 'Moment and question', note: 'which job triggers the sending, the question, the scale, the list of causes', from: 0, to: 1, accent: true },
      { label: 'Sending and answer', note: 'link sent at the end of the job, answer page in three taps, no account', from: 1, to: 3 },
      { label: 'Alert and call back', note: 'low rating to a named person, call back within 48 hours, cause coded', from: 2, to: 4 },
      { label: 'Monday board', note: 'response rate, low ratings called back in time, causes of the week', from: 3, to: 5 },
      { label: 'First review', note: 'what the causes say, one correction decided, a message to customers', from: 4, to: 5 },
    ], caption: 'Figure 6 · Five weeks in the example. The accented period is the first: deciding the moment and the question, with nothing built. The alert and the call back come before the board: better to call ten customers back than to look at an average. Indicative durations from a constructed example.', alt: 'Five-week calendar: moment and question (accented, one week), sending and answer, alert and call back, Monday board, first review.' },
  },
  ar: {
    cover: { eyebrow: 'رضا الزبائن · الجزائر · 2027', title: ['قياس رضا', 'الزبائن'], subtitle: 'سؤال مباشرة بعد الخدمة، مكالمة خلال 48 ساعة لكل علامة ضعيفة، وأسباب تُعدّ', left: { label: 'لا شكوى', sub: 'وثلاثة زبائن ضاعوا' }, right: { label: 'سؤال واحد', sub: 'ومكالمة خلال 48 ساعة' } },
    couches: { title: 'قياس الرضا، في خمس طبقات', layers: [
      { label: 'اللحظة', items: [{ name: 'مباشرة بعد الخدمة: التوصيل، التدخّل، أو إغلاق الملف، لا بعد ثلاثة أشهر', sub: 'الذكرى ما زالت دقيقة' }] },
      { label: 'السؤال', items: [{ name: 'سؤال واحد، علامة، ثم «لماذا هذه العلامة؟»؛ لا استبيان من عشرين سطراً', sub: 'الإيجاز يجعلهم يجيبون' }] },
      { label: 'القناة', items: [{ name: 'بالقناة التي يستعملها الزبون أصلاً: رابط في رسالة، دون حساب ولا كلمة مرور', sub: 'ثلاث لمسات على الهاتف' }] },
      { label: 'التنبيه', items: [{ name: 'كل علامة ضعيفة تخرج حالاً نحو شخص معيَّن بالاسم، يتصل خلال 48 ساعة', sub: 'هي الطبقة التي تغيّر شيئاً', accent: true }] },
      { label: 'اللوحة', items: [{ name: 'كل اثنين، ثلاثة أرقام: نسبة الجواب، العلامات الضعيفة المتابَعة في الأجل، والأسباب', sub: 'ومرتين في السنة، مؤشر التوصية' }] },
    ], caption: 'الشكل 1 · الطبقة المبرزة هي التنبيه: علامة ضعيفة لا تُطلق شيئاً لم تنفع في شيء. والطبقات الثلاث الأولى تجعلهم يجيبون: اللحظة المناسبة، سؤال واحد، وقناة الزبون. والأخيرة تجعلكم تقرّرون: ثلاثة أرقام كل اثنين، وأسباب بدل معدّلات.', alt: 'خمس طبقات: اللحظة؛ السؤال؛ القناة؛ التنبيه (مبرزة)؛ اللوحة.' },
    sources: { title: 'ستة مصادر، ما يقوله كل واحد وما يسكت عنه', columns: ['ما يقوله', 'ما يسكت عنه'], rows: [
      { label: 'الشكاوى', cells: ['ما أزعج إلى حد الاتصال', 'غير الراضين الذين يغادرون دون كلمة'] },
      { label: 'الآراء على الخط', cells: ['الحالات القصوى، علناً', 'الأغلبية، والسبب الدقيق'] },
      { label: 'ما يقوله المندوبون', cells: ['الزبائن الذين يرونهم كثيراً', 'الذين لم يعودوا يرونهم'] },
      { label: 'العلامة بعد الخدمة', cells: ['ما جرى هذه المرة، في حينه', 'التعلّق بالمؤسسة'] },
      { label: 'مؤشر التوصية', cells: ['حالة العلاقة، مرتين في السنة', 'الحادث الدقيق الذي يُصحَّح'] },
      { label: 'الزبون الذي لا يعود', cells: ['خسارة، بعد وقوعها', 'لماذا، إن لم يسأل أحد'] },
    ], caption: 'الشكل 2 · ست طرق لمعرفة ما يفكر فيه الزبائن. ولا واحدة تكفي وحدها. الشكاوى والآراء تُظهر الحالات القصوى؛ العلامة بعد الخدمة للإصلاح؛ ومؤشر التوصية لمتابعة اتجاه. والزبون الذي لا يعود هو القياس الذي يصل متأخراً.', alt: 'مصفوفة ستة مصادر: الشكاوى، الآراء على الخط، ما يقوله المندوبون، العلامة بعد الخدمة، مؤشر التوصية، والزبون الذي لا يعود؛ ولكل واحد ما يقوله وما يسكت عنه.' },
    nps: { caption: 'الشكل 3 · حساب مؤشر التوصية. الأجوبة من 0 إلى 6 منتقدون، 7 و8 محايدون، و9 و10 مروّجون. من 200 جواب: 15 بالمئة منتقدون، 30 بالمئة محايدون، و55 بالمئة مروّجون؛ والمؤشر 55 ناقص 15، أي زائد 40. مثال مركَّب.' },
    boucle: { caption: 'الشكل 4 · علامة ضعيفة متابَعة إلى آخرها: الخدمة، السؤال في الساعة، العلامة وسببها، التنبيه نحو شخص معيَّن بالاسم، المكالمة خلال 48 ساعة، والسبب مرمَّزاً ومصحَّحاً. وفي الوسط، القياس الذي يهمّ: إحدى عشرة علامة ضعيفة من اثنتي عشرة تلتها مكالمة في الأجل. مثال مركَّب.' },
    ordre: { title: 'الوضع، بهذا الترتيب', items: [
      { label: 'الاختيار', sub: 'اللحظة: بعد أي خدمة', accent: true },
      { label: 'الكتابة', sub: 'السؤال، و«لماذا؟»' },
      { label: 'الربط', sub: 'الإرسال بنهاية الخدمة' },
      { label: 'التعيين', sub: 'من يتصل عند علامة ضعيفة' },
      { label: 'الترميز', sub: 'خمسة أو ستة أسباب، لا أكثر' },
      { label: 'النشر', sub: 'ما تغيّر، للزبائن' },
    ], caption: 'الشكل 5 · المرحلة المبرزة هي الأولى: اختيار اللحظة. خدمة واحدة للبدء، التي تهمّ الزبون أكثر. ثم يُكتب السؤال؛ ويُربط الإرسال بحدث «انتهت»؛ ثم يأتي الشخص الذي يتصل، الأسباب، والرسالة إلى الزبائن.', alt: 'ست مراحل: الاختيار (مبرزة)، الكتابة، الربط، التعيين، الترميز، النشر.' },
    calendrier: { title: 'خمسة أسابيع، من أول سؤال إلى أول حصيلة', unit: 'أسبوع', items: [
      { label: 'اللحظة والسؤال', note: 'أي خدمة تُطلق الإرسال، السؤال، السلّم، وقائمة الأسباب', from: 0, to: 1, accent: true },
      { label: 'الإرسال والجواب', note: 'رابط يُرسَل عند نهاية الخدمة، صفحة جواب بثلاث لمسات، دون حساب', from: 1, to: 3 },
      { label: 'التنبيه والمكالمة', note: 'علامة ضعيفة نحو شخص معيَّن، مكالمة خلال 48 ساعة، وسبب مرمَّز', from: 2, to: 4 },
      { label: 'لوحة الاثنين', note: 'نسبة الجواب، العلامات الضعيفة المتابَعة في الأجل، وأسباب الأسبوع', from: 3, to: 5 },
      { label: 'أول حصيلة', note: 'ما تقوله الأسباب، تصحيح مقرَّر، ورسالة إلى الزبائن', from: 4, to: 5 },
    ], caption: 'الشكل 6 · خمسة أسابيع في المثال. الفترة المبرزة هي الأولى: تقرير اللحظة والسؤال، دون بناء شيء. والتنبيه والمكالمة يسبقان اللوحة: الاتصال بعشرة زبائن أنفع من النظر إلى معدّل. مدد تقريبية لمثال مركَّب.', alt: 'تقويم خمسة أسابيع: اللحظة والسؤال (مبرزة، أسبوع)، الإرسال والجواب، التنبيه والمكالمة، لوحة الاثنين، أول حصيلة.' },
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
      sources: { svg: matrix({ title: t.sources.title, columns: t.sources.columns, rows: t.sources.rows, rtl }), caption: t.sources.caption, alt: t.sources.alt },
      nps: { svg: nps(e.nps, rtl), caption: t.nps.caption, alt: e.nps.alt },
      boucle: { svg: boucle(e.boucle, rtl), caption: t.boucle.caption, alt: e.boucle.alt },
      ordre: { svg: steps({ title: t.ordre.title, steps: t.ordre.items, arrows: true, rtl }), caption: t.ordre.caption, alt: t.ordre.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 5, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
