import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { pointe, trajet, STRINGS as SC } from './custom/telephonie.mjs';
export const slug = 'standard-telephonique-ip-entreprise-algerie-2027-ipbx-lignes-postes-menu-vocal-file-d-attente-appels-manques-crm';
const I = (x) => `⁦${x}⁩`;
const T = {
  fr: {
    cover: { eyebrow: 'Standard téléphonique IP · Algérie · 2027', title: ['Standard téléphonique IP', 'en Algérie : lignes, accueil, rappels'], subtitle: 'Canaux comptés à l’heure de pointe, IPBX, postes et mobiles, accueil vocal, file d’attente, rappels', left: { label: 'Deux lignes, « occupé »', sub: 'personne ne sait combien d’appels sont perdus' }, right: { label: 'Chaque appel répondu ou rappelé', sub: 'et compté le soir' } },
    situations: { title: 'Six situations réelles, et ce que le standard doit faire', columns: ['Ce qui se passe', 'Ce que le standard doit faire'], rows: [
      { label: 'Les clients tombent sur « occupé »', cells: ['Deux lignes pour quarante-huit appels dans l’heure', 'canaux comptés à l’heure de pointe, file d’attente à la place de la tonalité occupé'] },
      { label: 'Personne ne répond pendant la pause', cells: ['Tout passe par un seul poste d’accueil', 'groupes qui sonnent ensemble, débordement vers un autre service puis un mobile'] },
      { label: 'On ne sait pas combien d’appels on rate', cells: ['Le vieux standard ne compte rien', 'chaque appel journalisé, reçu, répondu, manqué ou rappelé, et une liste des rappels'] },
      { label: 'Le commercial part avec ses clients', cells: ['Il donnait son numéro personnel', 'numéro de l’entreprise sur son mobile par l’application, et il reste à l’entreprise'] },
      { label: 'Les agences s’appellent sur portable', cells: ['Trois sites, trois installations séparées', 'un seul plan de numérotation, trois chiffres d’un site à l’autre par le lien privé'] },
      { label: 'Une coupure de courant coupe le téléphone', cells: ['Le standard n’a pas d’onduleur', 'postes alimentés par le switch sur onduleur, renvoi vers les mobiles si le site tombe'] },
    ], caption: 'Figure 1 · Les trois premières lignes se règlent par des canaux comptés, des groupes avec débordement et un journal des appels ; les trois suivantes par l’application sur mobile, un seul plan de numérotation et une alimentation secourue. Aucune ne se règle par une standardiste plus rapide ni par une troisième ligne ajoutée au hasard.', alt: 'Matrice de six situations : clients qui tombent sur occupé, personne à la pause, appels manqués non comptés, commercial qui part avec ses clients, agences sur portable, coupure de courant ; ce qui se passe et ce que le standard doit faire.' },
    pointe: { caption: 'Figure 2 · L’heure la plus chargée de l’exemple, comptée : trente-quatre appels entrants et quatorze sortants de deux minutes et demie en moyenne font cent vingt minutes de conversation, soit deux erlangs. Avec deux lignes, le modèle d’Erlang B donne quarante pour cent d’appels refusés : environ quatorze clients sur trente-quatre entendent « occupé ». Avec six appels possibles en même temps, il en reste environ un sur cent ; avec huit, moins d’un sur mille. Appels et durées sont un exemple construit, et le modèle donne un ordre de grandeur.' },
    couches: { title: 'Un standard téléphonique IP, en cinq couches', layers: [
      { label: 'Lignes et numéros', items: [{ name: 'Numéros de l’entreprise et canaux de l’opérateur, comptés à l’heure de pointe, numéros existants conservés si possible', sub: 'le type de ligne dépend de ce que l’opérateur propose à votre adresse' }] },
      { label: 'IPBX', items: [{ name: 'Le logiciel qui route les appels, sur un petit serveur dans la baie ou hébergé : numéros internes, groupes, horaires', sub: 'un seul plan de numérotation pour le siège et les agences' }] },
      { label: 'Postes', items: [{ name: 'Téléphones IP alimentés par le réseau, application sur ordinateur et sur mobile, sans-fil au dépôt', sub: 'le numéro appartient au poste et à l’entreprise, pas à la personne' }] },
      { label: 'Règles d’accueil', items: [{ name: 'Accueil vocal, groupes, file d’attente, débordement vers un mobile, messagerie reçue par e-mail, hors horaires', sub: 'un appel est répondu, mis en attente, renvoyé ou rappelé, jamais perdu sans trace', accent: true }] },
      { label: 'Mesure et logiciel', items: [{ name: 'Appels reçus, manqués, rappelés, attente par heure ; fiche du client à l’écran, clic pour appeler, journal dans le CRM', sub: 'le gérant lit le soir ce que le téléphone a fait dans la journée' }] },
    ], caption: 'Figure 3 · La couche accentuée est celle des règles d’accueil : c’est elle qui décide ce qui arrive à un appel quand personne n’est libre, et c’est elle qui manque à un standard qui se contente de faire sonner des postes. Les lignes, l’IPBX et les postes ne servent qu’à l’appliquer ; la mesure dit le soir si elle a tenu.', alt: 'Cinq couches : lignes et numéros ; IPBX ; postes ; règles d’accueil (accentuée) ; mesure et logiciel.' },
    trajet: { caption: 'Figure 4 · Un appel du dimanche matin suivi seconde par seconde : le numéro est reconnu, l’accueil vocal l’oriente vers les ventes, les trois postes sonnent ensemble pendant vingt secondes, tous sont en ligne, l’appel attend trente-huit secondes dans la file, puis un commercial décroche avec la fiche du client déjà à l’écran. À droite, ce qui se passe quand personne ne décroche : mobile du responsable, messagerie reçue par e-mail, liste des rappels. Noms, heures et durées sont un exemple construit.' },
    etapes: { title: 'Six décisions avant de commander', items: [
      { label: 'Compter l’heure de pointe', sub: 'appels et durées, puis nombre de canaux', accent: true },
      { label: 'Lister les numéros', sub: 'ceux à garder, ceux à créer, à quel nom' },
      { label: 'Sur site ou hébergé', sub: 'selon le lien internet et le nombre de sites' },
      { label: 'Choisir les postes', sub: 'bureau, application mobile, sans-fil au dépôt' },
      { label: 'Écrire l’accueil', sub: 'annonce, groupes, délais, horaires, débordements' },
      { label: 'Brancher le logiciel', sub: 'fiche à l’écran, journal, liste des rappels' },
    ], caption: 'Figure 5 · La décision accentuée est la première : sans le compte de l’heure de pointe, on achète un nombre de lignes au hasard, trop peu ou trop. Les cinq suivantes tiennent sur une feuille : les numéros, l’endroit où tourne l’IPBX, les postes par métier, le texte et les délais de l’accueil, et la fiche qui s’ouvre quand un client appelle.', alt: 'Six décisions : compter l’heure de pointe (accentuée), lister les numéros, sur site ou hébergé, choisir les postes, écrire l’accueil, brancher le logiciel.' },
    calendrier: { title: 'Un standard téléphonique IP en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Relevé des appels', note: 'heure de pointe, numéros, postes, réseau et alimentation, lien internet mesuré ; demande à l’opérateur ; sans matériel commandé', from: 0, to: 1 },
      { label: 'Lignes et IPBX', note: 'installation de l’IPBX, plan de numérotation, lignes existantes reliées par une passerelle ; à côté de l’ancien standard', from: 1, to: 2 },
      { label: 'Postes et accueil', note: 'postes, application mobile, annonces enregistrées, groupes, files, débordements ; cinq postes pilotes', from: 2, to: 3, accent: true },
      { label: 'Bascule et mesure', note: 'numéros basculés un soir, tableau des appels, liste des rappels, liaison avec le logiciel, formation', from: 3, to: 4 },
    ], caption: 'Figure 6 · Quatre semaines dans l’exemple, la première sans matériel commandé : le compte des appels, la liste des numéros et la mesure du lien sont des décisions, pas des achats. La semaine accentuée est celle des postes et de l’accueil, parce que c’est là que l’entreprise écrit ce qui arrive à un appel. Le délai qui ne dépend pas de l’installateur est celui de l’opérateur pour les lignes : la demande part dès la première semaine.', alt: 'Calendrier de quatre semaines : relevé des appels, lignes et IPBX, postes et accueil (accentué), bascule et mesure.' },
  },
  en: {
    cover: { eyebrow: 'Business IP phone system · Algeria · 2027', title: ['Business IP phone system', 'in Algeria: lines, greeting, call-backs'], subtitle: 'Channels counted at the busy hour, IP PBX, desk phones and mobiles, voice menu, queue, call-backs', left: { label: 'Two lines, “busy”', sub: 'nobody knows how many calls are lost' }, right: { label: 'Answered or called back', sub: 'every call, counted in the evening' } },
    situations: { title: 'Six real situations, and what the phone system must do', columns: ['What happens', 'What the phone system must do'], rows: [
      { label: 'Customers get the busy tone', cells: ['Two lines for forty-eight calls in the hour', 'channels counted at the busy hour; a queue instead of the busy tone'] },
      { label: 'Nobody answers during the break', cells: ['Everything goes through one reception phone', 'groups ringing together; overflow to another department, then a mobile'] },
      { label: 'Nobody knows how many calls are missed', cells: ['The old system counts nothing', 'every call logged: received, answered, missed or called back; a call-back list'] },
      { label: 'The salesperson leaves with the customers', cells: ['They gave out their personal number', 'the company number on their mobile through the app; it stays with the company'] },
      { label: 'Branches call each other on mobiles', cells: ['Three sites, three separate installations', 'one numbering plan; three digits from one site to another over the private link'] },
      { label: 'A power cut cuts the phones', cells: ['The phone system has no UPS', 'phones powered by the switch on a UPS; forwarding to mobiles if the site goes down'] },
    ], caption: 'Figure 1 · The first three rows are settled by counted channels, groups with overflow and a call log; the next three by the mobile app, a single numbering plan and backed-up power. None is settled by a faster receptionist or by a third line added at random.', alt: 'Matrix of six situations: customers getting the busy tone, nobody at break time, missed calls not counted, salesperson leaving with customers, branches on mobiles, power cut; what happens and what the phone system must do.' },
    pointe: { caption: 'Figure 2 · The busiest hour of the example, counted: thirty-four incoming and fourteen outgoing calls of two and a half minutes on average make one hundred and twenty minutes of conversation, that is two erlangs. With two lines, the Erlang B model gives forty per cent of calls refused: about fourteen customers out of thirty-four hear “busy”. With six calls possible at once, about one in a hundred remains; with eight, fewer than one in a thousand. Calls and durations are a constructed example, and the model gives an order of magnitude.' },
    couches: { title: 'A business IP phone system, in five layers', layers: [
      { label: 'Lines and numbers', items: [{ name: 'Company numbers and operator channels, counted at the busy hour, existing numbers kept where possible', sub: 'the type of line depends on what the operator offers at your address' }] },
      { label: 'IP PBX', items: [{ name: 'The software that routes calls, on a small server in the cabinet or hosted: extensions, groups, opening hours', sub: 'one numbering plan for the head office and the branches' }] },
      { label: 'Phones', items: [{ name: 'IP desk phones powered by the network, an app on computer and mobile, cordless handsets in the warehouse', sub: 'the number belongs to the extension and the company, not to the person' }] },
      { label: 'Greeting rules', items: [{ name: 'Voice menu, groups, queue, overflow to a mobile, voicemail received by email, out-of-hours handling', sub: 'a call is answered, queued, sent elsewhere or called back, never lost without a trace', accent: true }] },
      { label: 'Measurement and software', items: [{ name: 'Calls received, missed, called back, wait per hour; customer record on screen, click to call, log in the CRM', sub: 'in the evening the manager reads what the phone did during the day' }] },
    ], caption: 'Figure 3 · The accented layer is the greeting rules: it decides what happens to a call when nobody is free, and it is what a phone system that merely rings handsets lacks. Lines, the IP PBX and phones only serve to apply it; measurement says in the evening whether it held.', alt: 'Five layers: lines and numbers; IP PBX; phones; greeting rules (accented); measurement and software.' },
    trajet: { caption: 'Figure 4 · A Sunday-morning call followed second by second: the number is recognised, the voice menu routes it to sales, the three extensions ring together for twenty seconds, all are busy, the call waits thirty-eight seconds in the queue, then a salesperson answers with the customer record already on screen. On the right, what happens when nobody answers: the manager’s mobile, voicemail received by email, the call-back list. Names, times and durations are a constructed example.' },
    etapes: { title: 'Six decisions before ordering', items: [
      { label: 'Count the busy hour', sub: 'calls and durations, then number of channels', accent: true },
      { label: 'List the numbers', sub: 'which to keep, which to create, in whose name' },
      { label: 'On site or hosted', sub: 'by internet link and number of sites' },
      { label: 'Choose the phones', sub: 'desk phone, mobile app, cordless in the warehouse' },
      { label: 'Write the greeting', sub: 'announcement, groups, delays, hours, overflow' },
      { label: 'Connect the software', sub: 'record on screen, log, call-back list' },
    ], caption: 'Figure 5 · The accented decision is the first: without the busy-hour count, a number of lines is bought at random, too few or too many. The next five fit on one sheet: the numbers, where the IP PBX runs, phones by job, the wording and delays of the greeting, and the record that opens when a customer calls.', alt: 'Six decisions: count the busy hour (accented), list the numbers, on site or hosted, choose the phones, write the greeting, connect the software.' },
    calendrier: { title: 'A business IP phone system in 2027, in weeks', unit: 'wk', items: [
      { label: 'Call survey', note: 'busy hour, numbers, extensions, network and power, internet link measured; request to the operator; nothing ordered yet', from: 0, to: 1 },
      { label: 'Lines and IP PBX', note: 'IP PBX installed, numbering plan, existing lines connected through a gateway; beside the old system', from: 1, to: 2 },
      { label: 'Phones and greeting', note: 'phones, mobile app, recorded announcements, groups, queues, overflow; five pilot extensions', from: 2, to: 3, accent: true },
      { label: 'Cutover and measurement', note: 'numbers switched one evening, call board, call-back list, link with the software, training', from: 3, to: 4 },
    ], caption: 'Figure 6 · Four weeks in the example, the first with nothing ordered: the call count, the list of numbers and the link measurement are decisions, not purchases. The accented week is phones and greeting, because that is where the company writes what happens to a call. The lead time that does not depend on the installer is the operator’s for the lines: the request goes out in week one.', alt: 'Four-week calendar: call survey, lines and IP PBX, phones and greeting (accented), cutover and measurement.' },
  },
  ar: {
    cover: { eyebrow: 'مقسّم هاتفي IP · الجزائر · 2027', title: ['مقسّم هاتفي للمؤسسة', 'في الجزائر: الخطوط، الاستقبال، المعاودة'], subtitle: 'قنوات محسوبة في ساعة الذروة، مقسّم، هواتف مكتبية ومحمولة، قائمة صوتية، طابور انتظار، معاودة اتصال', left: { label: 'خطّان و«مشغول»', sub: 'لا أحد يعرف كم مكالمة تضيع' }, right: { label: 'كل مكالمة يُرَدّ عليها أو يُعاوَد الاتصال بها', sub: 'وتُحسب في المساء' } },
    situations: { title: 'ست حالات واقعية، وما يجب أن يفعله المقسّم', columns: ['ما يحدث', 'ما يجب أن يفعله المقسّم'], rows: [
      { label: 'الزبائن يسمعون «مشغول»', cells: ['خطّان لثمانٍ وأربعين مكالمة في الساعة', 'قنوات محسوبة في ساعة الذروة؛ طابور انتظار بدل نغمة «مشغول»'] },
      { label: 'لا أحد يردّ وقت الاستراحة', cells: ['كل شيء يمرّ عبر هاتف استقبال واحد', 'مجموعات ترنّ معاً؛ تحويل إلى مصلحة أخرى ثم إلى محمول'] },
      { label: 'لا نعرف كم مكالمة تفوتنا', cells: ['المقسّم القديم لا يحسب شيئاً', 'كل مكالمة مسجَّلة: واردة، مُجاب عليها، فائتة أو مُعاودة؛ وقائمة للمعاودة'] },
      { label: 'البائع يغادر ومعه زبائنه', cells: ['كان يعطي رقمه الشخصي', 'رقم المؤسسة على محموله عبر التطبيق؛ والرقم يبقى للمؤسسة'] },
      { label: 'الوكالات تتصل ببعضها بالمحمول', cells: ['ثلاثة مواقع وثلاثة تركيبات منفصلة', 'مخطط ترقيم واحد؛ ثلاثة أرقام من موقع إلى آخر عبر الربط الخاص'] },
      { label: 'انقطاع الكهرباء يقطع الهاتف', cells: ['المقسّم بلا مزوّد طاقة', 'هواتف تتغذى من المبدّل الموصول بمزوّد طاقة؛ تحويل إلى المحمول إذا سقط الموقع'] },
    ], caption: 'الشكل 1 · السطور الثلاثة الأولى تُحَل بقنوات محسوبة، ومجموعات مع تحويل، وسجل للمكالمات؛ والثلاثة التالية بالتطبيق على المحمول، ومخطط ترقيم واحد، وتغذية مؤمَّنة. لا يُحَل أي منها بموظفة استقبال أسرع ولا بخط ثالث يُضاف عشوائياً.', alt: 'مصفوفة ست حالات: زبائن يسمعون مشغول، لا أحد وقت الاستراحة، مكالمات فائتة غير محسوبة، بائع يغادر بزبائنه، وكالات على المحمول، انقطاع الكهرباء؛ ما يحدث وما يجب أن يفعله المقسّم.' },
    pointe: { caption: `الشكل 2 · الساعة الأكثر ازدحاماً في المثال محسوبة: أربع وثلاثون مكالمة واردة وأربع عشرة صادرة بمعدل دقيقتين ونصف تعطي مئة وعشرين دقيقة من المحادثة، أي إرلانغين. بخطين، يعطي نموذج ${I('Erlang B')} أربعين بالمئة من المكالمات المرفوضة: نحو أربعة عشر زبوناً من أربعة وثلاثين يسمعون «مشغول». بست مكالمات ممكنة في الوقت نفسه تبقى نحو واحدة من مئة؛ وبثمانٍ أقل من واحدة في الألف. المكالمات والمدد مثال مركَّب، والنموذج يعطي ترتيباً تقريبياً.` },
    couches: { title: 'المقسّم الهاتفي للمؤسسة، في خمس طبقات', layers: [
      { label: 'الخطوط والأرقام', items: [{ name: 'أرقام المؤسسة وقنوات المتعامل، محسوبة في ساعة الذروة، مع الاحتفاظ بالأرقام الحالية إن أمكن', sub: 'نوع الخط يتوقف على ما يقترحه المتعامل في عنوانكم' }] },
      { label: 'المقسّم', items: [{ name: 'البرنامج الذي يوجّه المكالمات، على خادم صغير في الخزانة أو مستضاف: أرقام داخلية، مجموعات، أوقات العمل', sub: 'مخطط ترقيم واحد للمقر والوكالات' }] },
      { label: 'الهواتف', items: [{ name: 'هواتف مكتبية تتغذى من الشبكة، تطبيق على الحاسوب والمحمول، هواتف لاسلكية في المستودع', sub: 'الرقم ملك المنصب والمؤسسة، لا الشخص' }] },
      { label: 'قواعد الاستقبال', items: [{ name: 'قائمة صوتية، مجموعات، طابور انتظار، تحويل إلى محمول، بريد صوتي يصل بالبريد الإلكتروني، خارج أوقات العمل', sub: 'المكالمة يُرَدّ عليها أو تنتظر أو تُحوَّل أو يُعاوَد الاتصال بها، ولا تضيع دون أثر', accent: true }] },
      { label: 'القياس والبرنامج', items: [{ name: 'المكالمات الواردة والفائتة والمُعاودة، الانتظار بالساعة؛ بطاقة الزبون على الشاشة، اتصال بنقرة، سجل في برنامج الزبائن', sub: 'المسيّر يقرأ في المساء ما فعله الهاتف في النهار' }] },
    ], caption: 'الشكل 3 · الطبقة المبرزة هي قواعد الاستقبال: هي التي تقرر ما يحدث للمكالمة حين لا يكون أحد متفرغاً، وهي ما ينقص مقسّماً يكتفي بجعل الهواتف ترنّ. الخطوط والمقسّم والهواتف تطبّقها فقط؛ والقياس يقول في المساء هل صمدت.', alt: 'خمس طبقات: الخطوط والأرقام؛ المقسّم؛ الهواتف؛ قواعد الاستقبال (مبرزة)؛ القياس والبرنامج.' },
    trajet: { caption: 'الشكل 4 · مكالمة صباح الأحد متتبَّعة ثانية بثانية: يُعرَف الرقم، القائمة الصوتية توجّهه إلى المبيعات، الهواتف الثلاثة ترنّ معاً عشرين ثانية وكلها مشغولة، تنتظر المكالمة ثمانياً وثلاثين ثانية في الطابور، ثم يردّ بائع وبطاقة الزبون على شاشته. على الجانب ما يحدث حين لا يردّ أحد: محمول المسؤول، بريد صوتي يصل بالبريد الإلكتروني، قائمة المعاودة. الأسماء والأوقات والمدد مثال مركَّب.' },
    etapes: { title: 'ستة قرارات قبل الطلب', items: [
      { label: 'حساب ساعة الذروة', sub: 'المكالمات والمدد، ثم عدد القنوات', accent: true },
      { label: 'جرد الأرقام', sub: 'ما يُحتفَظ به، ما يُنشأ، وباسم مَن' },
      { label: 'في المكان أم مستضاف', sub: 'حسب خط الإنترنت وعدد المواقع' },
      { label: 'اختيار الهواتف', sub: 'مكتبي، تطبيق محمول، لاسلكي للمستودع' },
      { label: 'كتابة الاستقبال', sub: 'الإعلان، المجموعات، المهل، الأوقات، التحويل' },
      { label: 'ربط البرنامج', sub: 'بطاقة على الشاشة، سجل، قائمة معاودة' },
    ], caption: 'الشكل 5 · القرار المبرز هو الأول: دون حساب ساعة الذروة يُشترى عدد من الخطوط عشوائياً، أقل أو أكثر من اللازم. الخمسة التالية تسعها ورقة واحدة: الأرقام، مكان تشغيل المقسّم، الهواتف حسب المهنة، نص الاستقبال ومهله، والبطاقة التي تُفتح حين يتصل زبون.', alt: 'ستة قرارات: حساب ساعة الذروة (مبرز)، جرد الأرقام، في المكان أم مستضاف، اختيار الهواتف، كتابة الاستقبال، ربط البرنامج.' },
    calendrier: { title: 'مقسّم هاتفي للمؤسسة سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'جرد المكالمات', note: 'ساعة الذروة، الأرقام، الهواتف، الشبكة والتغذية، قياس خط الإنترنت؛ طلب إلى المتعامل؛ دون طلب أي عتاد', from: 0, to: 1 },
      { label: 'الخطوط والمقسّم', note: 'تثبيت المقسّم، مخطط الترقيم، ربط الخطوط الحالية عبر بوابة؛ بجانب المقسّم القديم', from: 1, to: 2 },
      { label: 'الهواتف والاستقبال', note: 'الهواتف، تطبيق المحمول، الإعلانات المسجَّلة، المجموعات، الطوابير، التحويل؛ خمسة هواتف تجريبية', from: 2, to: 3, accent: true },
      { label: 'الانتقال والقياس', note: 'تحويل الأرقام في مساء، لوحة المكالمات، قائمة المعاودة، الربط مع البرنامج، التكوين', from: 3, to: 4 },
    ], caption: 'الشكل 6 · أربعة أسابيع في المثال، الأول دون طلب أي عتاد: حساب المكالمات وقائمة الأرقام وقياس الخط قرارات لا مشتريات. الأسبوع المبرز هو الهواتف والاستقبال، لأن المؤسسة تكتب فيه ما يحدث للمكالمة. الأجل الذي لا يتوقف على المركِّب هو أجل المتعامل للخطوط: الطلب يُرسل منذ الأسبوع الأول.', alt: 'تقويم أربعة أسابيع: جرد المكالمات، الخطوط والمقسّم، الهواتف والاستقبال (مبرز)، الانتقال والقياس.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      situations: { svg: matrix({ title: t.situations.title, columns: t.situations.columns, rows: t.situations.rows, rtl }), caption: t.situations.caption, alt: t.situations.alt },
      pointe: { svg: pointe(e.pointe, rtl), caption: t.pointe.caption, alt: e.pointe.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      trajet: { svg: trajet(e.trajet, rtl), caption: t.trajet.caption, alt: e.trajet.alt },
      etapes: { svg: steps({ title: t.etapes.title, steps: t.etapes.items, arrows: true, rtl }), caption: t.etapes.caption, alt: t.etapes.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 4, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
