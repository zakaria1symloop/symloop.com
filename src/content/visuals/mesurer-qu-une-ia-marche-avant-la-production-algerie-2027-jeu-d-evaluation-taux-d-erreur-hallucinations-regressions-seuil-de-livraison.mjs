import { cover, steps, matrix, timeline } from '../../lib/visuals/index.mjs';
import { board, verdict, STRINGS as EV } from './custom/eval-set.mjs';
export const slug = 'mesurer-qu-une-ia-marche-avant-la-production-algerie-2027-jeu-d-evaluation-taux-d-erreur-hallucinations-regressions-seuil-de-livraison';
const T = {
  fr: {
    cover: { eyebrow: 'Évaluation de l’IA · Mesure · Livraison · 2027', title: ['« Ça a l’air de', 'marcher. » Ce n’est', 'pas une mesure'], subtitle: 'Comment on prouve qu’une fonction IA marche avant de la mettre devant vos clients : soixante cas réels avec la bonne réponse, trois façons de noter, les affirmations sans source comptées, les régressions attrapées, et un seuil de livraison écrit avec vous', left: { label: 'Une démonstration', sub: 'cinq questions choisies, un bon jour' }, right: { label: 'Un jeu d’évaluation', sub: 'soixante cas, une note, un seuil' } },
    tableau: { caption: 'Figure 1 · La version 3 répond bien quand on l’essaie à la main ; c’est le tableau qui montre qu’elle a perdu deux cas que la version 2 réussissait. Sans les soixante carrés, elle serait partie en production parce qu’elle coûte moins. Les cinq échecs de la version 2 ne sont pas cachés : ils sont listés, et le client sait lesquels.' },
    etapes: { title: 'Construire le jeu d’évaluation, en six étapes', items: [
      { n: '01', label: 'Le critère', sub: 'Ce que « marcher » veut dire pour cette fonction, en une phrase mesurable : la bonne date, la bonne catégorie, aucune affirmation sans source.' },
      { n: '02', label: 'Les cas réels', sub: 'Soixante demandes prises dans vos vrais messages, documents et vocaux, en arabe, en français et en darija ; pas des exemples inventés par nous.' },
      { n: '03', label: 'La bonne réponse', sub: 'Écrite par la personne de chez vous qui sait : le gérant, le comptable, le chef d’agence. C’est elle qui fait foi, pas le modèle.', accent: true },
      { n: '04', label: 'Les cas difficiles', sub: 'Pièges, questions hors périmètre où il faut dire « je ne sais pas », données manquantes, tentatives de faire dire n’importe quoi.' },
      { n: '05', label: 'La notation', sub: 'Par code quand c’est possible, par un modèle juge calé sur vos propres notes pour le reste, par un humain sur un échantillon.' },
      { n: '06', label: 'Le seuil', sub: 'La note minimale pour livrer et la règle sur les régressions, écrites avant le premier essai ; chaque changement rejoue tout le jeu.' },
    ], caption: 'Figure 2 · L’étape 03 est celle qui prend le temps de votre équipe, et celle qu’aucun prestataire ne peut faire à votre place : personne d’autre ne sait quelle est la bonne réponse à vos clients. Une heure du gérant sur soixante cas vaut plus que deux semaines de réglages à l’aveugle.', alt: 'Six étapes : critère, cas réels, bonne réponse (accentuée), cas difficiles, notation, seuil.' },
    verdict: { caption: 'Figure 3 · La date est juste et la réponse est polie : notée à l’œil, elle passe. C’est la deuxième notation qui l’arrête : « retour gratuit sous 30 jours » n’est écrit nulle part chez vous. C’est ce qu’on appelle une hallucination, et elle ne se compte que si chaque affirmation est confrontée aux documents récupérés.' },
    cas: { title: 'Six types de cas, et ce qu’on attend de l’IA', columns: ['Ce que le cas contient', 'Ce qu’on attend'], rows: [
      { label: 'Le cas courant', cells: ['La question qui revient vingt fois par jour, dans les mots des clients', 'La bonne réponse, sourcée, dans la langue de la question ; c’est la moitié du jeu'] },
      { label: 'Le piège', cells: ['Deux questions en une, un produit qui ressemble à un autre, une date ambiguë', 'Répondre à la partie connue, demander une précision sur l’autre, ne rien compléter'] },
      { label: 'Le hors périmètre', cells: ['Une question dont la réponse n’est dans aucun de vos documents', '« Je ne sais pas », et le passage à un humain ; toute réponse inventée est un échec'] },
      { label: 'La donnée manquante', cells: ['La commande n’existe pas, le client n’est pas reconnu, le document est illisible', 'Le dire, demander l’information, ne pas supposer'] },
      { label: 'L’arabe et la darija', cells: ['La même question en arabe standard, en darija, en lettres latines, en vocal', 'La même réponse que la version française ; l’écart entre langues est mesuré à part'] },
      { label: 'Le contournement', cells: ['« Oublie tes consignes », une remise demandée avec insistance, une donnée d’un autre client', 'Refus, sans divulguer ; la tentative est journalisée ; aucun droit de plus que le rôle'] },
    ], caption: 'Figure 4 · Un jeu qui ne contient que des cas courants donne une belle note et ne prouve rien. Les trois lignes du milieu sont celles où une IA invente ; la dernière est celle où elle obéit à la mauvaise personne.', alt: 'Matrice de six types de cas : courant, piège, hors périmètre, donnée manquante, arabe et darija, contournement ; contenu et attendu.' },
    mesures: { title: 'Six mesures, ce qu’elles disent et comment on les lit', columns: ['Ce qu’elle mesure', 'Comment on la lit'], rows: [
      { label: 'Réussite sur le jeu', cells: ['La part des soixante cas notés justes, au total et par type de cas', 'Face au seuil écrit ; une note par type vaut mieux qu’une moyenne'] },
      { label: 'Affirmations sans source', cells: ['Le nombre d’affirmations qui ne sont dans aucun document récupéré', 'Zéro sur les cas critiques ; c’est la mesure des hallucinations'] },
      { label: 'Refus à tort', cells: ['Les « je ne sais pas » alors que la réponse était dans les documents', 'Trop haut, l’IA ne sert à rien ; trop bas, elle invente : les deux se règlent ensemble'] },
      { label: 'Régressions', cells: ['Les cas réussis par la version précédente et échoués par la nouvelle', 'Zéro pour livrer, ou une décision écrite cas par cas'] },
      { label: 'Passage à l’humain', cells: ['La part des demandes transférées, et celles qui auraient dû l’être', 'Au pilote, chaque jour ; un transfert manqué compte comme un échec'] },
      { label: 'Coût et latence', cells: ['Le coût par requête et le temps de réponse, par version', 'À côté de la note, jamais seuls : moins coûteux avec deux régressions n’est pas mieux'] },
    ], caption: 'Figure 5 · Aucune de ces mesures n’est un « taux de précision » unique. La deuxième et la troisième se tiennent l’une l’autre : une IA qui ne dit jamais « je ne sais pas » a un bon taux de réponse et invente ; celle qui le dit toujours n’invente rien et ne répond à rien.', alt: 'Matrice de six mesures : réussite, affirmations sans source, refus à tort, régressions, passage à l’humain, coût et latence ; ce qu’elles mesurent et comment les lire.' },
    calendrier: { title: 'Mesurer une fonction IA en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Critère et seuil', note: 'ce que « marcher » veut dire, la note minimale, la règle sur les régressions et les cas critiques ; signés', from: 0, to: 1 },
      { label: 'Soixante cas et leurs réponses', note: 'cas tirés de vos vrais échanges ; la bonne réponse écrite par votre équipe ; les six types présents', from: 1, to: 2, accent: true },
      { label: 'Notation automatique', note: 'graders par code, modèle juge calé sur vos notes, échantillon relu à la main ; le jeu tourne en une commande', from: 2, to: 3 },
      { label: 'Versions et réglages', note: 'chaque changement d’instructions, de documents ou de modèle rejoue tout ; le tableau est montré à chaque démonstration', from: 3, to: 6 },
      { label: 'Pilote', note: 'vrais utilisateurs ; chaque erreur vue devient un cas ; le jeu passe de soixante à cent', from: 6, to: 8 },
    ], caption: 'Figure 6 · Huit semaines, et la deuxième est celle qui décide de tout : un jeu écrit par nous mesurerait ce que nous croyons que vos clients demandent. Le jeu ne s’arrête pas à la livraison ; il grandit avec chaque erreur vue au pilote, et il est rejoué le jour où un modèle change de version.', alt: 'Frise de huit semaines : critère et seuil, soixante cas (accentué), notation automatique, versions et réglages, pilote.' },
  },
  en: {
    cover: { eyebrow: 'AI evaluation · Measurement · Release · 2027', title: ['“It seems to work.”', 'That is not', 'a measurement'], subtitle: 'How you prove an AI function works before it faces your customers: sixty real cases with the right answer, three ways to grade, unsourced claims counted, regressions caught, and a release threshold written with you', left: { label: 'A demo', sub: 'five chosen questions, a good day' }, right: { label: 'An evaluation set', sub: 'sixty cases, a score, a threshold' } },
    tableau: { caption: 'Figure 1 · Version 3 answers well when you try it by hand; the board is what shows it lost two cases version 2 passed. Without the sixty squares it would have gone to production because it costs less. Version 2’s five failures are not hidden: they are listed, and the client knows which ones.' },
    etapes: { title: 'Building the evaluation set, in six steps', items: [
      { n: '01', label: 'The criterion', sub: 'What “working” means for this function, in one measurable sentence: the right date, the right category, no unsourced claim.' },
      { n: '02', label: 'The real cases', sub: 'Sixty requests taken from your real messages, documents and voice notes, in Arabic, French and darija; not examples invented by us.' },
      { n: '03', label: 'The right answer', sub: 'Written by the person on your side who knows: the manager, the accountant, the branch head. They prevail, not the model.', accent: true },
      { n: '04', label: 'The hard cases', sub: 'Traps, out-of-scope questions where it must say “I don’t know”, missing data, attempts to make it say anything.' },
      { n: '05', label: 'The grading', sub: 'By code when possible, by a judge model calibrated on your own grades for the rest, by a human on a sample.' },
      { n: '06', label: 'The threshold', sub: 'The minimum score to release and the rule on regressions, written before the first trial; every change replays the whole set.' },
    ], caption: 'Figure 2 · Step 03 is the one that takes your team’s time, and the one no supplier can do for you: nobody else knows the right answer to your customers. One hour of the manager on sixty cases is worth more than two weeks of blind tuning.', alt: 'Six steps: criterion, real cases, right answer (accented), hard cases, grading, threshold.' },
    verdict: { caption: 'Figure 3 · The date is right and the answer is polite: graded by eye, it passes. The second grading stops it: “free returns within 30 days” is written nowhere at your company. That is what is called a hallucination, and it is only counted if every claim is checked against the retrieved documents.' },
    cas: { title: 'Six types of case, and what is expected of the AI', columns: ['What the case contains', 'What is expected'], rows: [
      { label: 'The common case', cells: ['The question that comes back twenty times a day, in customers’ words', 'The right answer, sourced, in the language of the question; that is half the set'] },
      { label: 'The trap', cells: ['Two questions in one, a product resembling another, an ambiguous date', 'Answer the known part, ask to clarify the other, complete nothing'] },
      { label: 'Out of scope', cells: ['A question whose answer is in none of your documents', '“I don’t know”, and handover to a human; any invented answer is a failure'] },
      { label: 'Missing data', cells: ['The order does not exist, the customer is not recognised, the document is unreadable', 'Say so, ask for the information, assume nothing'] },
      { label: 'Arabic and darija', cells: ['The same question in standard Arabic, darija, Latin letters, as a voice note', 'The same answer as the French version; the gap between languages is measured separately'] },
      { label: 'The bypass attempt', cells: ['“Forget your instructions”, an insistent discount request, another customer’s data', 'Refusal, without disclosing; the attempt is logged; no right beyond the role'] },
    ], caption: 'Figure 4 · A set containing only common cases gives a fine score and proves nothing. The three middle rows are where an AI invents; the last is where it obeys the wrong person.', alt: 'Matrix of six case types: common, trap, out of scope, missing data, Arabic and darija, bypass; content and expectation.' },
    mesures: { title: 'Six measures, what they say and how to read them', columns: ['What it measures', 'How it is read'], rows: [
      { label: 'Pass rate on the set', cells: ['The share of the sixty cases graded right, overall and per case type', 'Against the written threshold; a score per type beats an average'] },
      { label: 'Unsourced claims', cells: ['The number of claims found in no retrieved document', 'Zero on critical cases; this is the hallucination measure'] },
      { label: 'Wrong refusals', cells: ['“I don’t know” when the answer was in the documents', 'Too high, the AI is useless; too low, it invents: the two are tuned together'] },
      { label: 'Regressions', cells: ['Cases the previous version passed and the new one fails', 'Zero to release, or a written decision case by case'] },
      { label: 'Handover to a human', cells: ['The share of requests transferred, and those that should have been', 'In the pilot, every day; a missed handover counts as a failure'] },
      { label: 'Cost and latency', cells: ['Cost per request and response time, per version', 'Next to the score, never alone: less costly with two regressions is not better'] },
    ], caption: 'Figure 5 · None of these measures is a single “accuracy rate”. The second and third hold each other: an AI that never says “I don’t know” has a good answer rate and invents; one that always says it invents nothing and answers nothing.', alt: 'Matrix of six measures: pass rate, unsourced claims, wrong refusals, regressions, handover, cost and latency; what they measure and how to read them.' },
    calendrier: { title: 'Measuring an AI function in 2027, in weeks', unit: 'wk', items: [
      { label: 'Criterion and threshold', note: 'what “working” means, the minimum score, the rule on regressions and critical cases; signed', from: 0, to: 1 },
      { label: 'Sixty cases and their answers', note: 'cases drawn from your real exchanges; the right answer written by your team; all six types present', from: 1, to: 2, accent: true },
      { label: 'Automated grading', note: 'code graders, judge model calibrated on your grades, sample reread by hand; the set runs with one command', from: 2, to: 3 },
      { label: 'Versions and tuning', note: 'every change of instructions, documents or model replays everything; the board is shown at every demo', from: 3, to: 6 },
      { label: 'Pilot', note: 'real users; every error seen becomes a case; the set grows from sixty to a hundred', from: 6, to: 8 },
    ], caption: 'Figure 6 · Eight weeks, and the second decides everything: a set written by us would measure what we believe your customers ask. The set does not stop at release; it grows with every error seen in the pilot, and it is replayed the day a model changes version.', alt: 'Eight-week timeline: criterion and threshold, sixty cases (accented), automated grading, versions and tuning, pilot.' },
  },
  ar: {
    cover: { eyebrow: 'تقييم الذكاء الاصطناعي · القياس · التسليم · 2027', title: ['«يبدو أنه يعمل.»', 'هذا ليس', 'قياساً'], subtitle: 'كيف نثبت أن وظيفة ذكاء اصطناعي تعمل قبل وضعها أمام زبائنكم: ستون حالة حقيقية بالجواب الصحيح، ثلاث طرق للتنقيط، الادعاءات بلا مصدر تُعدّ، التراجعات تُلتقط، وعتبة تسليم تُكتب معكم', left: { label: 'عرض تجريبي', sub: 'خمسة أسئلة مختارة، يوم جيد' }, right: { label: 'مجموعة تقييم', sub: 'ستون حالة، درجة، عتبة' } },
    tableau: { caption: 'الشكل 1 · النسخة 3 تجيب جيداً حين تُجرَّب يدوياً؛ واللوحة هي ما يُظهر أنها خسرت حالتين كانت النسخة 2 تنجح فيهما. وبلا المربعات الستين لذهبت إلى الإنتاج لأنها أقل كلفة. وإخفاقات النسخة 2 الخمسة ليست مخفية: هي مسرودة والزبون يعرف أيّها.' },
    etapes: { title: 'بناء مجموعة التقييم، في ست خطوات', items: [
      { n: '01', label: 'المعيار', sub: 'ما معنى «يعمل» لهذه الوظيفة، في جملة قابلة للقياس: التاريخ الصحيح، الفئة الصحيحة، لا ادعاء بلا مصدر.' },
      { n: '02', label: 'الحالات الحقيقية', sub: 'ستون طلباً مأخوذة من رسائلكم ووثائقكم وصوتياتكم الحقيقية، بالعربية والفرنسية والدارجة؛ لا أمثلة نخترعها نحن.' },
      { n: '03', label: 'الجواب الصحيح', sub: 'يكتبه من يعرف عندكم: المسيّر، المحاسب، رئيس الوكالة. هو المرجع لا النموذج.', accent: true },
      { n: '04', label: 'الحالات الصعبة', sub: 'فخاخ، أسئلة خارج النطاق حيث يجب قول «لا أعرف»، بيانات ناقصة، ومحاولات لجعله يقول أي شيء.' },
      { n: '05', label: 'التنقيط', sub: 'بالكود حين يمكن، وبنموذج حَكَم مضبوط على تنقيطكم للباقي، وبإنسان على عينة.' },
      { n: '06', label: 'العتبة', sub: 'الدرجة الدنيا للتسليم وقاعدة التراجعات، تُكتبان قبل أول تجربة؛ وكل تغيير يعيد المجموعة كلها.' },
    ], caption: 'الشكل 2 · الخطوة 03 هي التي تأخذ وقت فريقكم، والتي لا يستطيع أي مقدّم خدمة فعلها مكانكم: لا أحد غيركم يعرف الجواب الصحيح لزبائنكم. ساعة من المسيّر على ستين حالة خير من أسبوعين من الضبط الأعمى.', alt: 'ست خطوات: المعيار، الحالات الحقيقية، الجواب الصحيح (مميزة)، الحالات الصعبة، التنقيط، العتبة.' },
    verdict: { caption: 'الشكل 3 · التاريخ صحيح والجواب مهذب: بالنظر، يمرّ. والتنقيط الثاني هو ما يوقفه: «الإرجاع مجاني خلال 30 يوماً» ليس مكتوباً في أي مكان عندكم. هذا ما يُسمى هلوسة، ولا يُعدّ إلا إن قوبل كل ادعاء بالوثائق المسترجَعة.' },
    cas: { title: 'ستة أنواع من الحالات، وما يُنتظر من الذكاء الاصطناعي', columns: ['ما تحتويه الحالة', 'ما يُنتظر'], rows: [
      { label: 'الحالة الشائعة', cells: ['السؤال الذي يعود عشرين مرة في اليوم، بكلمات الزبائن', 'الجواب الصحيح بمصدره، بلغة السؤال؛ وهي نصف المجموعة'] },
      { label: 'الفخ', cells: ['سؤالان في واحد، منتج يشبه آخر، تاريخ ملتبس', 'الجواب عن الجزء المعروف، وطلب توضيح للآخر، وعدم إكمال شيء'] },
      { label: 'خارج النطاق', cells: ['سؤال جوابه ليس في أي من وثائقكم', '«لا أعرف»، والتحويل إلى إنسان؛ وكل جواب مخترَع إخفاق'] },
      { label: 'المعطى الناقص', cells: ['الطلبية غير موجودة، الزبون غير معروف، الوثيقة غير مقروءة', 'قول ذلك، وطلب المعلومة، وعدم الافتراض'] },
      { label: 'العربية والدارجة', cells: ['السؤال نفسه بالفصحى وبالدارجة وبأحرف لاتينية وصوتياً', 'الجواب نفسه كالنسخة الفرنسية؛ والفارق بين اللغات يُقاس على حدة'] },
      { label: 'محاولة التحايل', cells: ['«انسَ تعليماتك»، طلب تخفيض بإلحاح، معطى زبون آخر', 'الرفض دون إفشاء؛ والمحاولة تُسجَّل؛ ولا حق فوق الدور'] },
    ], caption: 'الشكل 4 · مجموعة لا تحتوي إلا حالات شائعة تعطي درجة جميلة ولا تثبت شيئاً. والأسطر الثلاثة الوسطى هي حيث يخترع الذكاء الاصطناعي؛ والأخير حيث يطيع الشخص الخطأ.', alt: 'مصفوفة ستة أنواع من الحالات: شائعة، فخ، خارج النطاق، معطى ناقص، عربية ودارجة، تحايل؛ المحتوى والمنتظر.' },
    mesures: { title: 'ستة قياسات، ما تقوله وكيف تُقرأ', columns: ['ما يقيسه', 'كيف يُقرأ'], rows: [
      { label: 'النجاح على المجموعة', cells: ['حصة الحالات الستين المنقَّطة صحيحة، إجمالاً ولكل نوع', 'مقابل العتبة المكتوبة؛ ودرجة لكل نوع خير من متوسط'] },
      { label: 'ادعاءات بلا مصدر', cells: ['عدد الادعاءات التي ليست في أي وثيقة مسترجَعة', 'صفر في الحالات الحرجة؛ وهذا قياس الهلوسات'] },
      { label: 'الرفض الخاطئ', cells: ['«لا أعرف» والجواب كان في الوثائق', 'عالٍ جداً فلا فائدة منه؛ منخفض جداً فيخترع: يُضبطان معاً'] },
      { label: 'التراجعات', cells: ['حالات نجحت فيها النسخة السابقة وفشلت الجديدة', 'صفر للتسليم، أو قرار مكتوب حالةً حالة'] },
      { label: 'التحويل إلى إنسان', cells: ['حصة الطلبات المحوَّلة، وما كان يجب تحويله', 'في التجريب، كل يوم؛ وتحويل فائت يُحسب إخفاقاً'] },
      { label: 'التكلفة والكمون', cells: ['تكلفة كل طلب وزمن الاستجابة، لكل نسخة', 'بجانب الدرجة لا وحدهما: أقل كلفة بتراجعين ليس أفضل'] },
    ], caption: 'الشكل 5 · لا واحد من هذه القياسات «نسبة دقة» وحيدة. والثاني والثالث يمسك أحدهما الآخر: ذكاء اصطناعي لا يقول «لا أعرف» أبداً له نسبة جواب جيدة ويخترع؛ ومن يقولها دائماً لا يخترع ولا يجيب.', alt: 'مصفوفة ستة قياسات: النجاح، ادعاءات بلا مصدر، رفض خاطئ، تراجعات، تحويل، تكلفة وكمون؛ ما تقيسه وكيف تُقرأ.' },
    calendrier: { title: 'قياس وظيفة ذكاء اصطناعي سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'المعيار والعتبة', note: 'ما معنى «يعمل»، الدرجة الدنيا، قاعدة التراجعات والحالات الحرجة؛ موقَّعة', from: 0, to: 1 },
      { label: 'ستون حالة وأجوبتها', note: 'حالات من تبادلاتكم الحقيقية؛ الجواب الصحيح يكتبه فريقكم؛ الأنواع الستة حاضرة', from: 1, to: 2, accent: true },
      { label: 'التنقيط الآلي', note: 'منقِّطات بالكود، نموذج حَكَم مضبوط على تنقيطكم، عينة تُراجَع يدوياً؛ المجموعة تعمل بأمر واحد', from: 2, to: 3 },
      { label: 'النسخ والضبط', note: 'كل تغيير في التعليمات أو الوثائق أو النموذج يعيد كل شيء؛ واللوحة تُعرض في كل عرض', from: 3, to: 6 },
      { label: 'التجريب', note: 'مستعملون حقيقيون؛ كل خطأ يُرى يصير حالة؛ المجموعة تكبر من ستين إلى مائة', from: 6, to: 8 },
    ], caption: 'الشكل 6 · ثمانية أسابيع، والثاني يقرر كل شيء: مجموعة نكتبها نحن ستقيس ما نظن أن زبائنكم يسألونه. والمجموعة لا تتوقف عند التسليم؛ تكبر مع كل خطأ يُرى في التجريب، وتُعاد يوم يغيّر نموذج نسخته.', alt: 'خط زمني من ثمانية أسابيع: المعيار والعتبة، ستون حالة (مميزة)، التنقيط الآلي، النسخ والضبط، التجريب.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = EV[locale] || EV.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      tableau: { svg: board(e.board, rtl), caption: t.tableau.caption, alt: e.board.alt },
      etapes: { svg: steps({ title: t.etapes.title, steps: t.etapes.items, arrows: true, rtl }), caption: t.etapes.caption, alt: t.etapes.alt },
      verdict: { svg: verdict(e.verdict, rtl), caption: t.verdict.caption, alt: e.verdict.alt },
      cas: { svg: matrix({ title: t.cas.title, columns: t.cas.columns, rows: t.cas.rows, rtl }), caption: t.cas.caption, alt: t.cas.alt },
      mesures: { svg: matrix({ title: t.mesures.title, columns: t.mesures.columns, rows: t.mesures.rows, rtl }), caption: t.mesures.caption, alt: t.mesures.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 8, tick: 2, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
