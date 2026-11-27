import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { ticket, queue, STRINGS as AS } from './custom/aftersales.mjs';
export const slug = 'le-client-a-appele-trois-fois-reclamations-sav-application-algerie-2027-ticket-unique-priorite-delais-escalade-retours-avoirs-espace-client';
const T = {
  fr: {
    cover: { eyebrow: 'Réclamations · SAV · Retours · 2027', title: ['« Le client a appelé', 'trois fois pour', 'la même réclamation »'], subtitle: 'Ce qu’on construit pour qu’une réclamation n’existe qu’une fois, quel que soit le canal : un ticket unique, une priorité calculée, des délais surveillés, une affectation, une escalade, un retour ou un avoir, un espace client qui répond à sa place, et cinq chiffres le lundi', left: { label: 'WhatsApp, un cahier, trois appels', sub: 'et personne ne sait où ça en est' }, right: { label: 'Un ticket, un état, un délai', sub: 'et le client qui lit sans appeler' } },
    ticket: { caption: 'Figure 1 · Une seule réclamation arrive par WhatsApp, puis par un appel au comptoir, puis par e-mail avec la photo demandée. Le téléphone rattache les trois au même client et la commande au même produit : un seul ticket, pas trois. La priorité sort d’une grille impact sur urgence écrite par le gérant, et fixe deux délais, première réponse et résolution, que l’application surveille et affiche en barres. Les états portent l’heure et l’auteur, et la clôture attend la confirmation du client. Les données sont un exemple construit.' },
    couches: { title: 'Un service après-vente qui tient, en cinq couches', layers: [
      { label: 'Entrées', items: [{ name: 'WhatsApp, appel au comptoir, e-mail, espace client, livreur sur place : chaque entrée rattachée au client par le téléphone et à la commande', sub: 'une entrée sans client identifié reste une entrée, pas un ticket' }] },
      { label: 'Ticket unique', items: [{ name: 'Un ticket par problème, pas par message : produit, commande, garantie, pièces jointes, historique ; un second contact lit l’état', sub: 'le ticket est la fiche autour de la réclamation, comme la fiche autour de la photo' }] },
      { label: 'Priorité et délais', items: [{ name: 'Grille impact × urgence écrite, P1 à P3, délai de première réponse et de résolution par priorité, pause en attente du client', sub: 'la priorité n’est pas l’humeur du client au téléphone', accent: true }] },
      { label: 'Traitement', items: [{ name: 'Affectation nominative, états écrits, escalade automatique au responsable si délai dépassé, relance du client, actions datées', sub: 'un ticket en retard clignote jusqu’à ce que quelqu’un réponde' }] },
      { label: 'Résolution et mesure', items: [{ name: 'Clôture sur confirmation ou silence de trois jours, retour et avoir liés à la commande, cinq chiffres par semaine, première cause', sub: 'la première cause dit où agir en amont, l’emballage ou le transporteur' }] },
    ], caption: 'Figure 2 · La couche accentuée est celle que les boîtes de réception n’ont pas : une priorité qui sort d’une grille et non d’une voix, et des délais qui courent. Sans elle, le SAV traite ce qui crie le plus fort, et le réfrigérateur qui ne refroidit pas attend derrière la question de facture.', alt: 'Cinq couches : entrées, ticket unique, priorité et délais (accentuée), traitement, résolution et mesure.' },
    situations: { title: 'Six situations réelles, et ce que l’application fait', columns: ['Ce qui se passe', 'Ce que l’application fait'], rows: [
      { label: 'Trois appels, trois cahiers', cells: ['Le client a écrit sur WhatsApp, appelé, puis envoyé un e-mail ; trois notes', 'téléphone → même client → même ticket ; le second contact lit l’état'] },
      { label: 'Le frigo attend derrière la facture', cells: ['Les tickets sont traités dans l’ordre d’arrivée ; l’urgent attend', 'priorité par grille impact × urgence ; P1 passe devant, délais plus courts'] },
      { label: 'Personne ne sait qui s’en occupe', cells: ['Le ticket est « chez le technicien », qui est en congé', 'affectation nominative ; absence → réaffectation ; escalade si délai dépassé'] },
      { label: 'Le client ne répond plus', cells: ['Photo demandée il y a une semaine ; le ticket traîne et compte en retard', 'état « attente client », délai en pause, relance automatique, clôture après silence'] },
      { label: 'Le retour n’est pas suivi', cells: ['Produit repris par le livreur, jamais revenu au dépôt, avoir jamais émis', 'retour lié au ticket ; réception au dépôt → avoir émis, stock mis à jour'] },
      { label: 'La même panne revient', cells: ['Cinq tickets « ne refroidit pas » sur le même modèle, vus un par un', 'cause codée par ticket ; première cause de la semaine ; alerte au fournisseur'] },
    ], caption: 'Figure 3 · Les deux premières lignes se règlent par le ticket unique et la grille ; les deux suivantes par l’affectation, l’escalade et l’état d’attente ; les deux dernières par le lien avec la commande, le stock et l’avoir, et par les causes codées. Aucune ne se règle par une personne plus patiente au téléphone.', alt: 'Matrice de six situations : trois appels trois cahiers, l’urgent attend, personne ne sait qui s’en occupe, client qui ne répond plus, retour non suivi, même panne qui revient ; ce qui se passe et ce que l’application fait.' },
    etapes: { title: 'Une réclamation, en six gestes de l’équipe', items: [
      { label: 'Identifier', sub: 'téléphone → client → commande → produit ; ticket existant ou nouveau' },
      { label: 'Qualifier', sub: 'impact et urgence choisis dans la grille ; la priorité en découle', accent: true },
      { label: 'Affecter', sub: 'une personne ou une équipe ; le délai court' },
      { label: 'Traiter', sub: 'visite, pièce, échange, avoir ; chaque action datée ; attente client si besoin' },
      { label: 'Résoudre et confirmer', sub: 'message au client ; clos sur confirmation ou après trois jours' },
      { label: 'Coder la cause', sub: 'une cause par ticket, depuis une liste ; alimente le lundi' },
    ], caption: 'Figure 4 · L’étape accentuée prend dix secondes et change l’ordre de toute la file : choisir l’impact et l’urgence dans une grille, et laisser la priorité en découler. La sixième étape est celle qu’on saute toujours et qui vaut le plus : une cause codée par ticket, et le lundi on sait que trente et un pour cent des réclamations viennent du transporteur.', alt: 'Six gestes : identifier, qualifier (accentuée), affecter, traiter, résoudre et confirmer, coder la cause.' },
    file: { caption: 'Figure 5 · La file du SAV un mardi matin : cinq colonnes d’états, des cartes avec priorité, âge et responsable, et un ticket P1 en pointillés qui a dépassé son délai de première réponse et a été escaladé au responsable ; il clignote jusqu’à ce que quelqu’un réponde. Les cinq chiffres de la semaine, première réponse, résolution, tickets rouverts, tickets pour cent commandes et première cause, sont ce que le gérant lit le lundi. Les données sont un exemple construit.' },
    calendrier: { title: 'Un service après-vente qui tient en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Règles', note: 'grille impact × urgence, délais par priorité, états, liste des causes, qui est escaladé, règles de clôture et de retour ; signées', from: 0, to: 1 },
      { label: 'Entrées et ticket unique', note: 'WhatsApp, appel, e-mail, espace client rattachés au client et à la commande ; un ticket par problème ; pièces jointes', from: 1, to: 2 },
      { label: 'Priorité, délais, affectation', note: 'grille appliquée, délais qui courent et se mettent en pause, affectation, escalade automatique, relances', from: 2, to: 3, accent: true },
      { label: 'Retours et avoirs', note: 'retour lié au ticket et à la commande, réception au dépôt, avoir émis, stock mis à jour, échange', from: 3, to: 4 },
      { label: 'Espace client et file', note: 'le client lit l’état et répond depuis son espace ou WhatsApp ; la file par états pour l’équipe', from: 4, to: 5 },
      { label: 'Mesure', note: 'cinq chiffres par semaine, causes codées, première cause, revue du lundi avec le gérant', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six semaines, et la première sans code : la grille, les délais et la liste des causes sont des décisions du gérant. La troisième semaine est accentuée parce que c’est elle qui fait passer l’urgent devant et qui fait clignoter le retard ; avant elle, le SAV est une liste.', alt: 'Frise de six semaines : règles, entrées et ticket unique, priorité délais affectation (accentué), retours et avoirs, espace client et file, mesure.' },
  },
  en: {
    cover: { eyebrow: 'Complaints · After-sales · Returns · 2027', title: ['“The customer called', 'three times about', 'the same complaint”'], subtitle: 'What gets built so that a complaint exists only once, whatever the channel: a single ticket, a computed priority, watched deadlines, an assignment, an escalation, a return or a credit note, a customer space that answers instead of the phone, and five figures on Monday', left: { label: 'WhatsApp, a notebook, three calls', sub: 'and nobody knows where it stands' }, right: { label: 'One ticket, one state, one deadline', sub: 'and a customer who reads instead of calling' } },
    ticket: { caption: 'Figure 1 · A single complaint arrives by WhatsApp, then by a call at the counter, then by e-mail with the requested photo. The phone matches all three to the same customer and the order to the same product: one ticket, not three. The priority comes from an impact by urgency grid written by the manager, and sets two deadlines, first response and resolution, which the application watches and shows as bars. States carry the time and the author, and closure waits for the customer’s confirmation. The data is a constructed example.' },
    couches: { title: 'After-sales that holds, in five layers', layers: [
      { label: 'Intakes', items: [{ name: 'WhatsApp, counter call, e-mail, customer space, courier on site: every intake matched to the customer by phone and to the order', sub: 'an intake without an identified customer stays an intake, not a ticket' }] },
      { label: 'Single ticket', items: [{ name: 'One ticket per problem, not per message: product, order, warranty, attachments, history; a second contact reads the state', sub: 'the ticket is the record around the complaint, like the record around the photo' }] },
      { label: 'Priority and deadlines', items: [{ name: 'Written impact × urgency grid, P1 to P3, first-response and resolution deadline per priority, paused while waiting for the customer', sub: 'priority is not the customer’s mood on the phone', accent: true }] },
      { label: 'Handling', items: [{ name: 'Named assignment, written states, automatic escalation to the manager if a deadline is passed, customer reminder, dated actions', sub: 'a late ticket blinks until someone answers' }] },
      { label: 'Resolution and measurement', items: [{ name: 'Closure on confirmation or three days of silence, return and credit note linked to the order, five figures a week, first cause', sub: 'the first cause says where to act upstream, packaging or carrier' }] },
    ], caption: 'Figure 2 · The accented layer is what inboxes do not have: a priority that comes from a grid and not from a voice, and deadlines that run. Without it, after-sales handles whoever shouts loudest, and the fridge that is not cooling waits behind the invoice question.', alt: 'Five layers: intakes, single ticket, priority and deadlines (accented), handling, resolution and measurement.' },
    situations: { title: 'Six real situations, and what the application does', columns: ['What happens', 'What the application does'], rows: [
      { label: 'Three calls, three notebooks', cells: ['The customer wrote on WhatsApp, called, then e-mailed; three notes', 'phone → same customer → same ticket; the second contact reads the state'] },
      { label: 'The fridge waits behind the invoice', cells: ['Tickets are handled in arrival order; the urgent one waits', 'priority by impact × urgency grid; P1 goes first, shorter deadlines'] },
      { label: 'Nobody knows who handles it', cells: ['The ticket is “with the technician”, who is on leave', 'named assignment; absence → reassignment; escalation if deadline passed'] },
      { label: 'The customer stops answering', cells: ['Photo requested a week ago; the ticket drags and counts as late', '“waiting customer” state, deadline paused, automatic reminder, closure after silence'] },
      { label: 'The return is not tracked', cells: ['Product taken back by the courier, never back at the warehouse, no credit', 'return linked to the ticket; receipt at warehouse → credit note, stock updated'] },
      { label: 'The same fault comes back', cells: ['Five “not cooling” tickets on the same model, seen one by one', 'cause coded per ticket; first cause of the week; alert to the supplier'] },
    ], caption: 'Figure 3 · The first two rows are settled by the single ticket and the grid; the next two by assignment, escalation and the waiting state; the last two by the link with the order, stock and credit note, and by coded causes. None is settled by a more patient person on the phone.', alt: 'Matrix of six situations: three calls three notebooks, the urgent one waits, nobody knows who handles it, customer stops answering, untracked return, same fault returning; what happens and what the application does.' },
    etapes: { title: 'One complaint, in six team gestures', items: [
      { label: 'Identify', sub: 'phone → customer → order → product; existing or new ticket' },
      { label: 'Qualify', sub: 'impact and urgency chosen in the grid; priority follows', accent: true },
      { label: 'Assign', sub: 'a person or a team; the deadline runs' },
      { label: 'Handle', sub: 'visit, part, exchange, credit note; every action dated; customer wait if needed' },
      { label: 'Resolve and confirm', sub: 'message to the customer; closed on confirmation or after three days' },
      { label: 'Code the cause', sub: 'one cause per ticket, from a list; feeds Monday' },
    ], caption: 'Figure 4 · The accented step takes ten seconds and changes the order of the whole queue: choose impact and urgency in a grid, and let priority follow. The sixth step is the one always skipped and worth the most: one coded cause per ticket, and on Monday you know that thirty-one percent of complaints come from the carrier.', alt: 'Six gestures: identify, qualify (accented), assign, handle, resolve and confirm, code the cause.' },
    file: { caption: 'Figure 5 · The after-sales board on a Tuesday morning: five state columns, cards with priority, age and owner, and a dashed P1 ticket that passed its first-response deadline and was escalated to the manager; it blinks until someone answers. The week’s five figures, first response, resolution, reopened tickets, tickets per hundred orders and first cause, are what the manager reads on Monday. The data is a constructed example.' },
    calendrier: { title: 'After-sales that holds in 2027, in weeks', unit: 'wk', items: [
      { label: 'Rules', note: 'impact × urgency grid, deadlines per priority, states, cause list, who is escalated to, closure and return rules; signed', from: 0, to: 1 },
      { label: 'Intakes and single ticket', note: 'WhatsApp, call, e-mail, customer space matched to customer and order; one ticket per problem; attachments', from: 1, to: 2 },
      { label: 'Priority, deadlines, assignment', note: 'grid applied, deadlines that run and pause, assignment, automatic escalation, reminders', from: 2, to: 3, accent: true },
      { label: 'Returns and credit notes', note: 'return linked to ticket and order, receipt at warehouse, credit note issued, stock updated, exchange', from: 3, to: 4 },
      { label: 'Customer space and board', note: 'the customer reads the state and replies from their space or WhatsApp; the board by state for the team', from: 4, to: 5 },
      { label: 'Measurement', note: 'five figures a week, coded causes, first cause, Monday review with the manager', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six weeks, and the first without code: the grid, the deadlines and the cause list are the manager’s decisions. The third week is accented because it is what puts the urgent first and makes lateness blink; before it, after-sales is a list.', alt: 'Six-week timeline: rules, intakes and single ticket, priority deadlines assignment (accented), returns and credit notes, customer space and board, measurement.' },
  },
  ar: {
    cover: { eyebrow: 'شكاوى · ما بعد البيع · مرتجعات · 2027', title: ['«اتصل الزبون', 'ثلاث مرات', 'للشكوى نفسها»'], subtitle: 'ما يُبنى كي لا توجد الشكوى إلا مرة أياً كانت القناة: تذكرة واحدة، أولوية محسوبة، آجال مراقَبة، إسناد، تصعيد، إرجاع أو إشعار دائن، فضاء زبون يجيب بدل الهاتف، وخمسة أرقام يوم الاثنين', left: { label: 'WhatsApp ودفتر وثلاث مكالمات', sub: 'ولا أحد يعرف أين وصلت' }, right: { label: 'تذكرة وحالة وأجل', sub: 'وزبون يقرأ بدل أن يتصل' } },
    ticket: { caption: 'الشكل 1 · شكوى واحدة تصل عبر WhatsApp ثم بمكالمة عند الكاونتر ثم ببريد مع الصورة المطلوبة. يربط الهاتف الثلاثة بالزبون نفسه والطلبية بالمنتج نفسه: تذكرة واحدة لا ثلاث. والأولوية تخرج من شبكة أثر على إلحاح كتبها المسيّر، وتحدد أجلين، الرد الأول والحل، يراقبهما التطبيق ويعرضهما شريطين. والحالات تحمل الوقت والمؤلف، والإغلاق ينتظر تأكيد الزبون. والبيانات مثال مبني.' },
    couches: { title: 'خدمة ما بعد بيع تصمد، في خمس طبقات', layers: [
      { label: 'المداخل', items: [{ name: 'WhatsApp، مكالمة كاونتر، بريد، فضاء زبون، موصّل في المكان: كل مدخل مربوط بالزبون عبر الهاتف وبالطلبية', sub: 'مدخل بلا زبون معرَّف يبقى مدخلاً لا تذكرة' }] },
      { label: 'تذكرة واحدة', items: [{ name: 'تذكرة لكل مشكلة لا لكل رسالة: منتج، طلبية، ضمان، مرفقات، تاريخ؛ الاتصال الثاني يقرأ الحالة', sub: 'التذكرة هي البطاقة حول الشكوى، كالبطاقة حول الصورة' }] },
      { label: 'الأولوية والآجال', items: [{ name: 'شبكة أثر × إلحاح مكتوبة، P1 إلى P3، أجل رد أول وحل لكل أولوية، توقف أثناء انتظار الزبون', sub: 'الأولوية ليست مزاج الزبون على الهاتف', accent: true }] },
      { label: 'المعالجة', items: [{ name: 'إسناد اسمي، حالات مكتوبة، تصعيد آلي إلى المسؤول عند تجاوز أجل، تذكير الزبون، إجراءات مؤرَّخة', sub: 'التذكرة المتأخرة تومض حتى يرد أحد' }] },
      { label: 'الحل والقياس', items: [{ name: 'إغلاق عند التأكيد أو صمت ثلاثة أيام، إرجاع وإشعار دائن مرتبطان بالطلبية، خمسة أرقام أسبوعياً، سبب أول', sub: 'السبب الأول يقول أين نتدخل في المنبع، التغليف أو الناقل' }] },
    ], caption: 'الشكل 2 · الطبقة المميزة هي ما لا تملكه صناديق الوارد: أولوية تخرج من شبكة لا من صوت، وآجال تجري. وبدونها تعالج الخدمة من يصرخ أعلى، وتنتظر الثلاجة التي لا تبرّد خلف سؤال الفاتورة.', alt: 'خمس طبقات: المداخل، تذكرة واحدة، الأولوية والآجال (مميزة)، المعالجة، الحل والقياس.' },
    situations: { title: 'ست حالات حقيقية، وما يفعله التطبيق', columns: ['ما يحدث', 'ما يفعله التطبيق'], rows: [
      { label: 'ثلاث مكالمات، ثلاثة دفاتر', cells: ['كتب الزبون على WhatsApp واتصل ثم راسل؛ ثلاث ملاحظات', 'الهاتف ← الزبون نفسه ← التذكرة نفسها؛ الاتصال الثاني يقرأ الحالة'] },
      { label: 'الثلاجة تنتظر خلف الفاتورة', cells: ['تُعالَج التذاكر بترتيب الوصول؛ العاجل ينتظر', 'أولوية بشبكة أثر × إلحاح؛ P1 تتقدم، آجال أقصر'] },
      { label: 'لا أحد يعرف من يتولاها', cells: ['التذكرة «عند التقني» وهو في إجازة', 'إسناد اسمي؛ غياب ← إعادة إسناد؛ تصعيد إن تجاوز الأجل'] },
      { label: 'الزبون لم يعد يرد', cells: ['صورة طُلبت قبل أسبوع؛ التذكرة تتأخر وتُحسب متأخرة', 'حالة «انتظار الزبون»، أجل متوقف، تذكير آلي، إغلاق بعد الصمت'] },
      { label: 'الإرجاع غير متتبَّع', cells: ['استرد الموصّل المنتج ولم يعد إلى المستودع ولا إشعار دائن', 'إرجاع مرتبط بالتذكرة؛ استلام في المستودع ← إشعار دائن، مخزون محدَّث'] },
      { label: 'العطل نفسه يعود', cells: ['خمس تذاكر «لا تبرّد» على الطراز نفسه تُرى واحدة واحدة', 'سبب مرمَّز لكل تذكرة؛ السبب الأول للأسبوع؛ تنبيه للمورد'] },
    ], caption: 'الشكل 3 · السطران الأولان يُحلان بالتذكرة الواحدة والشبكة؛ والتاليان بالإسناد والتصعيد وحالة الانتظار؛ والأخيران بالربط مع الطلبية والمخزون والإشعار الدائن وبالأسباب المرمَّزة. ولا واحد يُحل بشخص أكثر صبراً على الهاتف.', alt: 'مصفوفة ست حالات: ثلاث مكالمات ثلاثة دفاتر، العاجل ينتظر، لا أحد يعرف من يتولاها، زبون لم يعد يرد، إرجاع غير متتبَّع، العطل نفسه يعود؛ ما يحدث وما يفعله التطبيق.' },
    etapes: { title: 'شكوى واحدة، في ست حركات للفريق', items: [
      { label: 'التعريف', sub: 'هاتف ← زبون ← طلبية ← منتج؛ تذكرة موجودة أو جديدة' },
      { label: 'التأهيل', sub: 'أثر وإلحاح يُختاران في الشبكة؛ الأولوية تنتج عنهما', accent: true },
      { label: 'الإسناد', sub: 'شخص أو فريق؛ الأجل يجري' },
      { label: 'المعالجة', sub: 'زيارة، قطعة، تبديل، إشعار دائن؛ كل إجراء مؤرَّخ؛ انتظار الزبون عند الحاجة' },
      { label: 'الحل والتأكيد', sub: 'رسالة للزبون؛ إغلاق عند التأكيد أو بعد ثلاثة أيام' },
      { label: 'ترميز السبب', sub: 'سبب واحد لكل تذكرة من قائمة؛ يغذي الاثنين' },
    ], caption: 'الشكل 4 · الخطوة المميزة تستغرق عشر ثوانٍ وتغيّر ترتيب الطابور كله: اختيار الأثر والإلحاح في شبكة وترك الأولوية تنتج. والخطوة السادسة هي التي تُهمل دائماً وتساوي الأكثر: سبب مرمَّز لكل تذكرة، ويوم الاثنين نعرف أن واحداً وثلاثين بالمئة من الشكاوى من الناقل.', alt: 'ست حركات: التعريف، التأهيل (مميزة)، الإسناد، المعالجة، الحل والتأكيد، ترميز السبب.' },
    file: { caption: 'الشكل 5 · لوحة خدمة ما بعد البيع صباح ثلاثاء: خمسة أعمدة حالات، بطاقات بأولوية وعمر ومسؤول، وتذكرة P1 متقطعة تجاوزت أجل الرد الأول وصُعِّدت إلى المسؤول؛ تومض حتى يرد أحد. وأرقام الأسبوع الخمسة، الرد الأول والحل والتذاكر المعاد فتحها والتذاكر لكل مئة طلبية والسبب الأول، هي ما يقرؤه المسيّر يوم الاثنين. والبيانات مثال مبني.' },
    calendrier: { title: 'خدمة ما بعد بيع تصمد سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'القواعد', note: 'شبكة أثر × إلحاح، آجال لكل أولوية، حالات، قائمة الأسباب، من يُصعَّد إليه، قواعد الإغلاق والإرجاع؛ موقَّعة', from: 0, to: 1 },
      { label: 'المداخل والتذكرة الواحدة', note: 'WhatsApp ومكالمة وبريد وفضاء زبون مربوطة بالزبون والطلبية؛ تذكرة لكل مشكلة؛ مرفقات', from: 1, to: 2 },
      { label: 'الأولوية والآجال والإسناد', note: 'شبكة مطبَّقة، آجال تجري وتتوقف، إسناد، تصعيد آلي، تذكيرات', from: 2, to: 3, accent: true },
      { label: 'المرتجعات والإشعارات الدائنة', note: 'إرجاع مرتبط بالتذكرة والطلبية، استلام في المستودع، إشعار دائن صادر، مخزون محدَّث، تبديل', from: 3, to: 4 },
      { label: 'فضاء الزبون واللوحة', note: 'يقرأ الزبون الحالة ويرد من فضائه أو WhatsApp؛ اللوحة حسب الحالات للفريق', from: 4, to: 5 },
      { label: 'القياس', note: 'خمسة أرقام أسبوعياً، أسباب مرمَّزة، سبب أول، مراجعة الاثنين مع المسيّر', from: 5, to: 6 },
    ], caption: 'الشكل 6 · ستة أسابيع، والأول بلا كود: الشبكة والآجال وقائمة الأسباب قرارات المسيّر. والأسبوع الثالث مميز لأنه ما يقدّم العاجل ويجعل التأخر يومض؛ وقبله تكون الخدمة قائمة.', alt: 'خط زمني من ستة أسابيع: القواعد، المداخل والتذكرة الواحدة، الأولوية والآجال والإسناد (مميز)، المرتجعات والإشعارات الدائنة، فضاء الزبون واللوحة، القياس.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = AS[locale] || AS.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      ticket: { svg: ticket(e.ticket, rtl), caption: t.ticket.caption, alt: e.ticket.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      situations: { svg: matrix({ title: t.situations.title, columns: t.situations.columns, rows: t.situations.rows, rtl }), caption: t.situations.caption, alt: t.situations.alt },
      etapes: { svg: steps({ title: t.etapes.title, steps: t.etapes.items, arrows: true, rtl }), caption: t.etapes.caption, alt: t.etapes.alt },
      file: { svg: queue(e.queue, rtl), caption: t.file.caption, alt: e.queue.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 6, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
