import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { flux, tour, STRINGS as SC } from './custom/agentvocal.mjs';
export const slug = 'agent-vocal-ia-standard-telephonique-ia-algerie-2027-appels-manques-prise-de-rendez-vous-francais-arabe-darija-temps-de-reponse-transfert';
const T = {
  fr: {
    cover: { eyebrow: 'Agent vocal IA · Algérie · 2027', title: ['Agent vocal IA :', 'les appels que personne ne prenait'], subtitle: 'Standard téléphonique IA, prise de rendez-vous, français, arabe et darija, temps de réponse, transfert', left: { label: 'Sans réponse', sub: '530 appels sur 1 400' }, right: { label: 'Résolus par l’agent', sub: '307 appels' } },
    types: { title: 'Cinq types d’appels, et ce que l’agent en fait', columns: ['Ce que l’appel demande', 'Ce que fait l’agent'], rows: [
      { label: 'Horaires, adresse, pièces à apporter', cells: ['une réponse fixe, toujours la même', 'répond seul'] },
      { label: 'Prendre ou déplacer un rendez-vous', cells: ['un agenda à consulter et à modifier', 'répond seul, confirme par message'] },
      { label: 'Suivi de commande ou de dossier', cells: ['un numéro à identifier, une lecture seule', 'répond seul si le numéro est reconnu'] },
      { label: 'Prix, devis, cas particulier', cells: ['un contexte, et un engagement de l’entreprise', 'note la demande, la transmet à une personne'] },
      { label: 'Réclamation, urgence, personne en colère', cells: ['de l’écoute, et une décision', 'transfère tout de suite, avec le résumé'] },
    ], caption: 'Figure 1 · Cinq types d’appels. L’agent répond seul aux trois premiers, qui sont répétitifs et vérifiables ; il transmet les deux autres, où une personne doit décider.', alt: 'Matrice de cinq types d’appels : horaires et adresse, rendez-vous, suivi de commande ou de dossier, prix et cas particuliers, réclamations et urgences ; pour chacun, ce que l’appel demande et ce que fait l’agent.' },
    flux: { caption: 'Figure 2 · Sur 1 400 appels d’une semaine, 530 restaient sans réponse ; l’agent en résout 307, en transmet 159, et 64 sont abandonnés. Appels et taux fictifs.' },
    appel: { title: 'Un appel, en six temps', items: [
      { label: 'Appel reçu', sub: 'par le standard, sur votre numéro' },
      { label: 'Accueil', sub: 'l’agent dit qu’il est automatique' },
      { label: 'Demande comprise', sub: 'parole transcrite, intention reconnue' },
      { label: 'Action', sub: 'agenda, commande ou dossier consultés', accent: true },
      { label: 'Réponse ou transfert', sub: 'à une personne, avec ce qui a été dit' },
      { label: 'Trace', sub: 'résumé, suite à donner, rappel prévu' },
    ], caption: 'Figure 3 · Six temps. Le temps accentué est l’action : l’agent ne répond pas de mémoire, il consulte l’agenda, la commande ou le dossier.', alt: 'Six temps : appel reçu, accueil, demande comprise, action (accentuée), réponse ou transfert, trace.' },
    tour: { caption: 'Figure 4 · Un tour de parole : 1,5 seconde de silence entre la question et la réponse, dont 700 millisecondes pour le modèle et l’agenda. Délais fictifs.' },
    calendrier: { title: 'Huit semaines, en commençant par écouter', unit: 'sem.', items: [
      { label: 'Écoute de deux cents appels', note: 'ce que les gens demandent, dans quelle langue, avec quels mots', from: 0, to: 2, accent: true },
      { label: 'Téléphonie et transfert', note: 'numéro, standard, renvoi vers l’agent, transfert vers une personne', from: 1, to: 3 },
      { label: 'Trois demandes et leurs outils', note: 'horaires, rendez-vous, suivi : agenda et dossiers reliés', from: 2, to: 5 },
      { label: 'Essais de langue', note: 'français, arabe, appels mêlés, bruit de fond, mots non compris', from: 3, to: 6 },
      { label: 'Appels après la fermeture', note: 'l’agent seul, sur les heures où personne ne répondait', from: 5, to: 7 },
      { label: 'Débordement en journée', note: 'quand l’accueil est occupé, avec écoute d’échantillons chaque semaine', from: 6, to: 8 },
    ], caption: 'Figure 5 · Huit semaines dans l’exemple. La période accentuée est la première : avant d’écrire une ligne, on écoute deux cents appels réels. Durées indicatives d’un exemple construit.', alt: 'Calendrier de huit semaines : écoute de deux cents appels (accentuée), téléphonie et transfert, trois demandes et leurs outils, essais de langue, appels après la fermeture, débordement en journée.' },
    couches: { title: 'Ce qu’il y a dans un agent vocal, en cinq couches', layers: [
      { label: 'Téléphonie', items: [{ name: 'La téléphonie : votre numéro, le standard, le renvoi vers l’agent, le transfert vers une personne', sub: 'l’appel arrive et repart' }] },
      { label: 'Voix', items: [{ name: 'La voix : reconnaissance de la parole, détection de fin de parole, interruption, synthèse', sub: 'entendre et parler sans couper' }] },
      { label: 'Agent', items: [{ name: 'L’agent : le modèle, ses consignes, les demandes qu’il a le droit de traiter, ses garde-fous', sub: 'ce qu’il fait, et ce qu’il ne fait jamais', accent: true }] },
      { label: 'Outils', items: [{ name: 'Les outils : agenda, commandes, dossiers, base de réponses, message de confirmation', sub: 'répondre avec vos données, pas de mémoire' }] },
      { label: 'Suivi', items: [{ name: 'Le suivi : résumés, appels transmis, taux de résolution, mots non compris, écoute d’échantillons', sub: 'savoir ce qu’il a dit hier' }] },
    ], caption: 'Figure 6 · Cinq couches. La couche accentuée est l’agent : ses consignes disent ce qu’il traite, ce qu’il transmet et ce qu’il ne dit jamais.', alt: 'Cinq couches : la téléphonie ; la voix ; l’agent (accentué) ; les outils ; le suivi.' },
  },
  en: {
    cover: { eyebrow: 'AI voice agent · Algeria · 2027', title: ['AI voice agent:', 'the calls nobody was taking'], subtitle: 'AI phone reception, appointment booking, French, Arabic and Darija, response time, handover', left: { label: 'Unanswered', sub: '530 calls of 1,400' }, right: { label: 'Resolved by the agent', sub: '307 calls' } },
    types: { title: 'Five kinds of call, and what the agent does with them', columns: ['What the call needs', 'What the agent does'], rows: [
      { label: 'Opening hours, address, what to bring', cells: ['a fixed answer, always the same', 'answers alone'] },
      { label: 'Booking or moving an appointment', cells: ['a diary to consult and change', 'answers alone, confirms by message'] },
      { label: 'Tracking an order or a file', cells: ['a number to identify, read-only access', 'answers alone if the number is recognised'] },
      { label: 'Price, quote, special case', cells: ['a context, and a commitment by the company', 'notes the request, passes it to a person'] },
      { label: 'Complaint, emergency, angry caller', cells: ['listening, and a decision', 'transfers at once, with the summary'] },
    ], caption: 'Figure 1 · Five kinds of call. The agent answers the first three alone, because they are repetitive and checkable; it passes on the other two, where a person has to decide.', alt: 'Matrix of five kinds of call: hours and address, appointments, order or file tracking, prices and special cases, complaints and emergencies; for each, what the call needs and what the agent does.' },
    flux: { caption: 'Figure 2 · Of 1,400 calls in a week, 530 were going unanswered; the agent resolves 307, hands over 159, and 64 are abandoned. Fictitious calls and rates.' },
    appel: { title: 'A call, in six steps', items: [
      { label: 'Call received', sub: 'through the switchboard, on your number' },
      { label: 'Greeting', sub: 'the agent says it is automated' },
      { label: 'Request understood', sub: 'speech transcribed, intent recognised' },
      { label: 'Action', sub: 'diary, order or file consulted', accent: true },
      { label: 'Answer or handover', sub: 'to a person, with what was said' },
      { label: 'Record', sub: 'summary, next step, call-back planned' },
    ], caption: 'Figure 3 · Six steps. The accented step is the action: the agent does not answer from memory, it consults the diary, the order or the file.', alt: 'Six steps: call received, greeting, request understood, action (accented), answer or handover, record.' },
    tour: { caption: 'Figure 4 · One turn of the conversation: 1.5 seconds of silence between question and answer, 700 milliseconds of it for the model and the diary. Fictitious delays.' },
    calendrier: { title: 'Eight weeks, starting by listening', unit: 'wk', items: [
      { label: 'Listening to two hundred calls', note: 'what people ask, in which language, with which words', from: 0, to: 2, accent: true },
      { label: 'Telephony and handover', note: 'number, switchboard, forwarding to the agent, transfer to a person', from: 1, to: 3 },
      { label: 'Three requests and their tools', note: 'hours, appointments, tracking: diary and files connected', from: 2, to: 5 },
      { label: 'Language trials', note: 'French, Arabic, mixed calls, background noise, words not understood', from: 3, to: 6 },
      { label: 'Calls after closing', note: 'the agent alone, in the hours when nobody answered', from: 5, to: 7 },
      { label: 'Daytime overflow', note: 'when the reception is busy, with samples listened to every week', from: 6, to: 8 },
    ], caption: 'Figure 5 · Eight weeks in the example. The accented period is the first: before writing a line, two hundred real calls are listened to. Indicative durations of a constructed example.', alt: 'Eight-week calendar: listening to two hundred calls (accented), telephony and handover, three requests and their tools, language trials, calls after closing, daytime overflow.' },
    couches: { title: 'What is inside a voice agent, in five layers', layers: [
      { label: 'Telephony', items: [{ name: 'Telephony: your number, the switchboard, forwarding to the agent, transfer to a person', sub: 'the call comes in and goes out' }] },
      { label: 'Voice', items: [{ name: 'Voice: speech recognition, end-of-speech detection, barge-in, synthesis', sub: 'hearing and speaking without cutting in' }] },
      { label: 'Agent', items: [{ name: 'The agent: the model, its instructions, the requests it is allowed to handle, its guardrails', sub: 'what it does, and what it never does', accent: true }] },
      { label: 'Tools', items: [{ name: 'The tools: diary, orders, files, answer base, confirmation message', sub: 'answering with your data, not from memory' }] },
      { label: 'Follow-up', items: [{ name: 'Follow-up: summaries, calls handed over, resolution rate, words not understood, sampled listening', sub: 'knowing what it said yesterday' }] },
    ], caption: 'Figure 6 · Five layers. The accented layer is the agent: its instructions say what it handles, what it hands over and what it never says.', alt: 'Five layers: telephony; voice; the agent (accented); the tools; follow-up.' },
  },
  ar: {
    cover: { eyebrow: 'العون الصوتي الذكي · الجزائر · 2027', title: ['العون الصوتي الذكي:', 'المكالمات التي لم يكن يرد عليها أحد'], subtitle: 'استقبال هاتفي بالذكاء الاصطناعي، حجز المواعيد، الفرنسية والعربية والدارجة، زمن الرد، والتحويل', left: { label: 'دون رد', sub: '530 مكالمة من 1400' }, right: { label: 'يحلّها العون', sub: '307 مكالمات' } },
    types: { title: 'خمسة أنواع من المكالمات، وما يفعله العون بها', columns: ['ما تطلبه المكالمة', 'ما يفعله العون'], rows: [
      { label: 'التوقيت، العنوان، وما يُحضَر', cells: ['جواب ثابت، دائماً نفسه', 'يجيب وحده'] },
      { label: 'أخذ موعد أو تغييره', cells: ['مفكرة تُراجَع وتُعدَّل', 'يجيب وحده، ويؤكد برسالة'] },
      { label: 'متابعة طلبية أو ملف', cells: ['رقم يُعرَّف، وقراءة فقط', 'يجيب وحده إذا عُرف الرقم'] },
      { label: 'سعر، عرض، أو حالة خاصة', cells: ['سياق، والتزام من المؤسسة', 'يسجّل الطلب، ويحوّله إلى شخص'] },
      { label: 'شكوى، استعجال، أو متصل غاضب', cells: ['إصغاء، وقرار', 'يحوّل فوراً، مع الملخّص'] },
    ], caption: 'الشكل 1 · خمسة أنواع من المكالمات. العون يجيب وحده على الثلاثة الأولى، لأنها متكررة ويمكن التحقق منها؛ ويحوّل الاثنتين الأخريين، حيث يجب أن يقرّر شخص.', alt: 'مصفوفة من خمسة أنواع مكالمات: التوقيت والعنوان، المواعيد، متابعة طلبية أو ملف، الأسعار والحالات الخاصة، والشكاوى والاستعجالات؛ ولكل نوع، ما تطلبه المكالمة وما يفعله العون.' },
    flux: { caption: 'الشكل 2 · من 1400 مكالمة في أسبوع، 530 كانت تبقى دون رد؛ العون يحل 307، يحوّل 159، و64 يتخلى عنها أصحابها. مكالمات ونسب خيالية.' },
    appel: { title: 'مكالمة، في ست مراحل', items: [
      { label: 'ورود المكالمة', sub: 'عبر المقسم، على رقمكم' },
      { label: 'الاستقبال', sub: 'العون يقول إنه آلي' },
      { label: 'فهم الطلب', sub: 'الكلام يُنسَخ، والقصد يُعرَف' },
      { label: 'الفعل', sub: 'المفكرة، الطلبية، أو الملف تُراجَع', accent: true },
      { label: 'جواب أو تحويل', sub: 'إلى شخص، مع ما قيل' },
      { label: 'الأثر', sub: 'ملخّص، ما يُتابَع، واتصال مبرمج' },
    ], caption: 'الشكل 3 · ست مراحل. المرحلة المبرزة هي الفعل: العون لا يجيب من الذاكرة، بل يراجع المفكرة، الطلبية، أو الملف.', alt: 'ست مراحل: ورود المكالمة، الاستقبال، فهم الطلب، الفعل (مبرز)، جواب أو تحويل، والأثر.' },
    tour: { caption: 'الشكل 4 · دور كلام واحد: ثانية ونصف من الصمت بين السؤال والجواب، منها 700 ميلي ثانية للنموذج والمفكرة. مهل خيالية.' },
    calendrier: { title: 'ثمانية أسابيع، بدءاً بالإصغاء', unit: 'أسبوع', items: [
      { label: 'الإصغاء إلى مئتي مكالمة', note: 'ما يطلبه الناس، بأي لغة، وبأي كلمات', from: 0, to: 2, accent: true },
      { label: 'الهاتف والتحويل', note: 'الرقم، المقسم، التوجيه نحو العون، والتحويل إلى شخص', from: 1, to: 3 },
      { label: 'ثلاثة طلبات وأدواتها', note: 'التوقيت، المواعيد، والمتابعة: المفكرة والملفات مربوطة', from: 2, to: 5 },
      { label: 'تجارب اللغة', note: 'الفرنسية، العربية، مكالمات مختلطة، ضجيج، وكلمات لم تُفهَم', from: 3, to: 6 },
      { label: 'المكالمات بعد الإغلاق', note: 'العون وحده، في الساعات التي لم يكن يرد فيها أحد', from: 5, to: 7 },
      { label: 'فائض النهار', note: 'حين يكون الاستقبال مشغولاً، مع الإصغاء إلى عيّنات كل أسبوع', from: 6, to: 8 },
    ], caption: 'الشكل 5 · ثمانية أسابيع في المثال. الفترة المبرزة هي الأولى: قبل كتابة سطر واحد، يُصغى إلى مئتي مكالمة حقيقية. مدد تقريبية لمثال مركَّب.', alt: 'رزنامة من ثمانية أسابيع: الإصغاء إلى مئتي مكالمة (مبرز)، الهاتف والتحويل، ثلاثة طلبات وأدواتها، تجارب اللغة، المكالمات بعد الإغلاق، ثم فائض النهار.' },
    couches: { title: 'ما يوجد في عون صوتي، في خمس طبقات', layers: [
      { label: 'الهاتف', items: [{ name: 'الهاتف: رقمكم، المقسم، التوجيه نحو العون، والتحويل إلى شخص', sub: 'المكالمة تصل وتغادر' }] },
      { label: 'الصوت', items: [{ name: 'الصوت: التعرف على الكلام، كشف نهاية الكلام، المقاطعة، وتركيب الصوت', sub: 'السماع والكلام دون مقاطعة' }] },
      { label: 'العون', items: [{ name: 'العون: النموذج، تعليماته، الطلبات المسموح له بمعالجتها، وضوابطه', sub: 'ما يفعله، وما لا يفعله أبداً', accent: true }] },
      { label: 'الأدوات', items: [{ name: 'الأدوات: المفكرة، الطلبيات، الملفات، قاعدة الأجوبة، ورسالة التأكيد', sub: 'الجواب ببياناتكم، لا من الذاكرة' }] },
      { label: 'المتابعة', items: [{ name: 'المتابعة: الملخّصات، المكالمات المحوَّلة، نسبة الحل، الكلمات غير المفهومة، والإصغاء إلى عيّنات', sub: 'معرفة ما قاله أمس' }] },
    ], caption: 'الشكل 6 · خمس طبقات. الطبقة المبرزة هي العون: تعليماته تقول ما يعالجه، ما يحوّله، وما لا يقوله أبداً.', alt: 'خمس طبقات: الهاتف؛ الصوت؛ العون (مبرز)؛ الأدوات؛ والمتابعة.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      types: { svg: matrix({ title: t.types.title, columns: t.types.columns, rows: t.types.rows, rtl }), caption: t.types.caption, alt: t.types.alt },
      flux: { svg: flux(e.flux, rtl), caption: t.flux.caption, alt: e.flux.alt },
      appel: { svg: steps({ title: t.appel.title, steps: t.appel.items, arrows: true, rtl }), caption: t.appel.caption, alt: t.appel.alt },
      tour: { svg: tour(e.tour, rtl), caption: t.tour.caption, alt: e.tour.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 8, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
    },
  };
}
