import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { race, week, STRINGS as BK } from './custom/booking.mjs';
export const slug = 'meme-creneau-reserve-deux-fois-reservation-en-ligne-application-algerie-2027-creneaux-verrou-tenue-acompte-liste-d-attente-rappels';
const T = {
  fr: {
    cover: { eyebrow: 'Réservation · Créneaux · Rappels · 2027', title: ['« Le même créneau', 'a été réservé', 'deux fois »'], subtitle: 'Ce qu’on construit pour qu’un créneau n’existe qu’une fois : des disponibilités en couches, un verrou dans la base de données, une tenue qui expire, un acompte, une liste d’attente, des rappels, et l’heure d’Alger affichée dans le fuseau du client', left: { label: 'Un agenda papier et WhatsApp', sub: 'et deux clients à 14 h 30' }, right: { label: 'Un moteur de créneaux', sub: 'et une seule réservation par créneau' } },
    course: { caption: 'Figure 1 · Deux demandes pour le même créneau à 220 millisecondes d’écart, l’une depuis l’application à Alger, l’autre via l’agent WhatsApp depuis Paris. Les deux écrans affichaient « disponible » ; c’est la base de données qui tranche, dans une transaction qui verrouille la ligne du créneau. La première crée une tenue de dix minutes ; la seconde reçoit un refus et deux alternatives ; l’acompte transforme la tenue en réservation confirmée ; sans acompte, elle aurait expiré. Les heures sont un exemple construit.' },
    etapes: { title: 'De la demande au rendez-vous tenu, en six étapes', items: [
      { label: 'Afficher les créneaux', sub: 'calculés depuis les disponibilités ; dans le fuseau du client' },
      { label: 'Tenir le créneau', sub: 'transaction, verrou ; tenue de 10 min ; refus net si pris', accent: true },
      { label: 'Confirmer', sub: 'acompte ou confirmation en un geste ; tenue → réservée' },
      { label: 'Rappeler', sub: 'WhatsApp J−1 et H−2 ; réponse « oui / déplacer / annuler »' },
      { label: 'Tenir ou libérer', sub: 'arrivée pointée ; absence enregistrée ; créneau relibéré si annulé' },
      { label: 'Mesurer', sub: 'taux d’absence, délai de prise, remplissage par praticien' },
    ], caption: 'Figure 2 · L’étape accentuée est la seule qui touche à la base de données en écriture concurrente, et c’est celle que les agendas en ligne grand public font bien et que les applications maison oublient : tenir le créneau dans une transaction, pour une durée courte, et refuser net la seconde demande. Les étapes 4 et 5 sont ce qui fait baisser les absences ; la sixième dit si cela marche.', alt: 'Six étapes : afficher les créneaux, tenir le créneau (accentuée), confirmer, rappeler, tenir ou libérer, mesurer.' },
    couches: { title: 'Un système de réservation, en cinq couches', layers: [
      { label: 'Disponibilités', items: [{ name: 'Horaires par praticien ou ressource, pauses, jours bloqués, durée par service, tampon entre rendez-vous, capacité', sub: 'écrits par le gérant dans l’application, en heure d’Alger' }] },
      { label: 'Moteur de créneaux', items: [{ name: 'Créneaux visibles = ouverture − pauses − bloqué − rendez-vous − tenues − tampons, découpés par la durée du service', sub: 'un créneau n’est jamais stocké à l’avance : il est calculé à la demande' }] },
      { label: 'Réservation et verrou', items: [{ name: 'Une transaction par demande : verrou, tenue de dix minutes, refus net si pris, alternatives et liste d’attente', sub: 'la base de données tranche, pas l’écran', accent: true }] },
      { label: 'Confirmation et paiement', items: [{ name: 'Acompte en ligne ou confirmation en un geste ; tenue → réservée ; annulation écrite ; créneau relibéré', sub: 'l’acompte est le meilleur remède à l’absence quand il est accepté' }] },
      { label: 'Rappels et mesure', items: [{ name: 'Rappels WhatsApp J−1 et H−2 avec réponse, pointage à l’arrivée, taux d’absence et remplissage par praticien', sub: 'un rendez-vous rappelé avec réponse est un rendez-vous qui se tient' }] },
    ], caption: 'Figure 3 · La couche accentuée est celle qui empêche la double réservation, et elle doit être unique : l’application du client, le site, l’agent WhatsApp et l’employé au comptoir passent par le même chemin et la même transaction. Deux chemins, c’est deux clients à 14 h 30.', alt: 'Cinq couches : disponibilités, moteur de créneaux, réservation et verrou (accentuée), confirmation et paiement, rappels et mesure.' },
    semaine: { caption: 'Figure 4 · Les créneaux qu’un client voit ne sont stockés nulle part : ils sont calculés à la demande en retirant des heures d’ouverture les pauses, les jours bloqués, les rendez-vous pris, les tenues en cours et les tampons, puis en découpant ce qui reste par la durée du service. Le calcul se fait en heure d’Alger, fixe toute l’année ; l’affichage se fait dans le fuseau du client, et un client à Paris voit une heure de plus de fin mars à fin octobre. Les horaires sont un exemple construit.' },
    situations: { title: 'Six situations réelles, et ce que l’application fait', columns: ['Ce qui se passe', 'Ce que l’application fait'], rows: [
      { label: 'Deux clients à 14 h 30', cells: ['Réservé sur le site et au téléphone au même moment ; les deux viennent', 'une transaction par créneau ; le second reçoit un refus et des alternatives'] },
      { label: 'Le créneau bloqué par un panier abandonné', cells: ['Le client a commencé, n’a pas payé ; 14 h 30 reste pris toute la journée', 'tenue de dix minutes avec expiration ; relibéré automatiquement'] },
      { label: 'Le client de Paris arrive une heure trop tard', cells: ['Rendez-vous à 14 h 30 heure d’Alger, lu 14 h 30 heure de Paris en été', 'stocké en heure d’Alger, affiché dans le fuseau du client avec la mention'] },
      { label: 'Un rendez-vous sur quatre ne vient pas', cells: ['Pas de rappel, pas d’acompte ; le créneau est perdu', 'rappels WhatsApp avec réponse, acompte, créneau relibéré et liste d’attente prévenue'] },
      { label: 'Le praticien a changé ses horaires', cells: ['Les créneaux de la semaine prochaine sont faux ; on appelle tout le monde', 'créneaux calculés à la demande ; conflits listés ; clients prévenus en un geste'] },
      { label: 'Le comptoir ne voit pas le site', cells: ['L’employé note sur papier ce que le site vient de donner à un autre', 'un seul moteur pour tous les canaux ; le comptoir réserve par la même transaction'] },
    ], caption: 'Figure 5 · Les deux premières lignes se règlent par la transaction et la tenue ; la troisième par le fuseau ; la quatrième par les rappels et l’acompte ; les deux dernières par un moteur unique qui calcule à la demande et que tous les canaux utilisent. Aucune ne se règle par une secrétaire plus attentive.', alt: 'Matrice de six situations : deux clients au même créneau, créneau bloqué par un panier abandonné, client de Paris en retard d’une heure, un rendez-vous sur quatre absent, horaires changés, comptoir qui ne voit pas le site ; ce qui se passe et ce que l’application fait.' },
    calendrier: { title: 'Un système de réservation en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Règles', note: 'durée par service, tampons, horaires par praticien, durée de la tenue, acompte ou non, règles d’annulation, textes des rappels ; signés', from: 0, to: 1 },
      { label: 'Disponibilités et moteur', note: 'horaires, pauses, blocages dans l’application ; moteur de créneaux calculé à la demande ; fuseau du client', from: 1, to: 2, accent: true },
      { label: 'Réservation et verrou', note: 'transaction par créneau, tenue avec expiration, refus et alternatives, liste d’attente ; même chemin pour tous les canaux', from: 2, to: 3 },
      { label: 'Confirmation et paiement', note: 'acompte en ligne ou confirmation en un geste, annulation et relibération, agenda du praticien', from: 3, to: 4 },
      { label: 'Rappels et comptoir', note: 'rappels WhatsApp J−1 et H−2 avec réponse, pointage à l’arrivée, réservation au comptoir et par l’agent WhatsApp', from: 4, to: 5 },
      { label: 'Mesure', note: 'taux d’absence, remplissage par praticien, délai moyen de prise, première revue mensuelle', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six semaines, et la première sans code : la durée des services, les tampons et les règles d’annulation sont des décisions du gérant. La deuxième semaine est accentuée parce que le moteur de créneaux calculé à la demande est ce qui rend tout le reste simple : changer un horaire, c’est changer une règle, pas effacer des créneaux.', alt: 'Frise de six semaines : règles, disponibilités et moteur (accentué), réservation et verrou, confirmation et paiement, rappels et comptoir, mesure.' },
  },
  en: {
    cover: { eyebrow: 'Booking · Slots · Reminders · 2027', title: ['“The same slot', 'was booked', 'twice”'], subtitle: 'What gets built so that a slot exists only once: layered availability, a database lock, a hold that expires, a deposit, a waitlist, reminders, and Algiers time shown in the customer’s time zone', left: { label: 'A paper diary and WhatsApp', sub: 'and two customers at 14:30' }, right: { label: 'A slot engine', sub: 'and one booking per slot' } },
    course: { caption: 'Figure 1 · Two requests for the same slot 220 milliseconds apart, one from the app in Algiers, the other through the WhatsApp agent from Paris. Both screens showed “available”; the database decides, inside a transaction that locks the slot’s row. The first creates a ten-minute hold; the second gets a refusal and two alternatives; the deposit turns the hold into a confirmed booking; without a deposit, it would have expired. Times are a constructed example.' },
    etapes: { title: 'From request to kept appointment, in six steps', items: [
      { label: 'Show the slots', sub: 'computed from availability; in the customer’s time zone' },
      { label: 'Hold the slot', sub: 'transaction, lock; 10-minute hold; clean refusal if taken', accent: true },
      { label: 'Confirm', sub: 'deposit or one-gesture confirmation; hold → booked' },
      { label: 'Remind', sub: 'WhatsApp D−1 and H−2; reply “yes / move / cancel”' },
      { label: 'Keep or release', sub: 'arrival checked in; no-show recorded; slot released if cancelled' },
      { label: 'Measure', sub: 'no-show rate, booking lead time, fill rate per practitioner' },
    ], caption: 'Figure 2 · The accented step is the only one that writes to the database concurrently, and it is what consumer online diaries do well and home-made applications forget: hold the slot inside a transaction, for a short time, and refuse the second request cleanly. Steps 4 and 5 are what lowers no-shows; the sixth says whether it works.', alt: 'Six steps: show the slots, hold the slot (accented), confirm, remind, keep or release, measure.' },
    couches: { title: 'A booking system, in five layers', layers: [
      { label: 'Availability', items: [{ name: 'Hours per practitioner or resource, breaks, blocked days, duration per service, buffer between appointments, capacity', sub: 'written by the manager in the application, in Algiers time' }] },
      { label: 'Slot engine', items: [{ name: 'Visible slots = opening − breaks − blocked − appointments − holds − buffers, sliced by the service duration', sub: 'a slot is never stored in advance: it is computed on request' }] },
      { label: 'Booking and lock', items: [{ name: 'One transaction per request: lock, ten-minute hold, clean refusal if taken, alternatives and waitlist', sub: 'the database decides, not the screen', accent: true }] },
      { label: 'Confirmation and payment', items: [{ name: 'Online deposit or one-gesture confirmation; hold → booked; written cancellation; slot released', sub: 'the deposit is the best remedy for no-shows where it is accepted' }] },
      { label: 'Reminders and measurement', items: [{ name: 'WhatsApp reminders D−1 and H−2 with reply, check-in on arrival, no-show and fill rate per practitioner', sub: 'an appointment reminded with a reply is an appointment that is kept' }] },
    ], caption: 'Figure 3 · The accented layer is what prevents double booking, and it must be unique: the customer app, the site, the WhatsApp agent and the employee at the counter all go through the same path and the same transaction. Two paths means two customers at 14:30.', alt: 'Five layers: availability, slot engine, booking and lock (accented), confirmation and payment, reminders and measurement.' },
    semaine: { caption: 'Figure 4 · The slots a customer sees are stored nowhere: they are computed on request by removing from opening hours the breaks, blocked days, taken appointments, holds in progress and buffers, then slicing what remains by the service duration. The computation is done in Algiers time, fixed all year; display is done in the customer’s time zone, and a customer in Paris sees one hour more from late March to late October. Times are a constructed example.' },
    situations: { title: 'Six real situations, and what the application does', columns: ['What happens', 'What the application does'], rows: [
      { label: 'Two customers at 14:30', cells: ['Booked on the site and by phone at the same moment; both show up', 'one transaction per slot; the second gets a refusal and alternatives'] },
      { label: 'Slot blocked by an abandoned basket', cells: ['The customer started, did not pay; 14:30 stays taken all day', 'ten-minute hold with expiry; released automatically'] },
      { label: 'The Paris customer arrives an hour late', cells: ['Appointment at 14:30 Algiers time, read as 14:30 Paris time in summer', 'stored in Algiers time, shown in the customer’s time zone with the note'] },
      { label: 'One appointment in four does not show', cells: ['No reminder, no deposit; the slot is lost', 'WhatsApp reminders with reply, deposit, slot released and waitlist notified'] },
      { label: 'The practitioner changed their hours', cells: ['Next week’s slots are wrong; everyone gets called', 'slots computed on request; conflicts listed; customers notified in one gesture'] },
      { label: 'The counter cannot see the site', cells: ['The employee writes on paper what the site just gave to someone else', 'one engine for every channel; the counter books through the same transaction'] },
    ], caption: 'Figure 5 · The first two rows are settled by the transaction and the hold; the third by the time zone; the fourth by reminders and deposit; the last two by a single engine that computes on request and that every channel uses. None is settled by a more attentive receptionist.', alt: 'Matrix of six situations: two customers on the same slot, slot blocked by an abandoned basket, Paris customer an hour late, one appointment in four absent, hours changed, counter not seeing the site; what happens and what the application does.' },
    calendrier: { title: 'A booking system in 2027, in weeks', unit: 'wk', items: [
      { label: 'Rules', note: 'duration per service, buffers, hours per practitioner, hold duration, deposit or not, cancellation rules, reminder texts; signed', from: 0, to: 1 },
      { label: 'Availability and engine', note: 'hours, breaks, blocks in the application; slot engine computed on request; customer time zone', from: 1, to: 2, accent: true },
      { label: 'Booking and lock', note: 'transaction per slot, hold with expiry, refusal and alternatives, waitlist; same path for every channel', from: 2, to: 3 },
      { label: 'Confirmation and payment', note: 'online deposit or one-gesture confirmation, cancellation and release, practitioner’s diary', from: 3, to: 4 },
      { label: 'Reminders and counter', note: 'WhatsApp reminders D−1 and H−2 with reply, check-in on arrival, booking at the counter and through the WhatsApp agent', from: 4, to: 5 },
      { label: 'Measurement', note: 'no-show rate, fill rate per practitioner, mean booking lead time, first monthly review', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six weeks, and the first without code: service durations, buffers and cancellation rules are the manager’s decisions. The second week is accented because the slot engine computed on request is what makes everything else simple: changing hours means changing a rule, not deleting slots.', alt: 'Six-week timeline: rules, availability and engine (accented), booking and lock, confirmation and payment, reminders and counter, measurement.' },
  },
  ar: {
    cover: { eyebrow: 'حجز · مواعيد · تذكيرات · 2027', title: ['«الموعد نفسه', 'حُجز', 'مرتين»'], subtitle: 'ما يُبنى كي لا يوجد الموعد إلا مرة: توافر على طبقات، قفل في قاعدة البيانات، حجز مؤقت ينتهي، عربون، قائمة انتظار، تذكيرات، وتوقيت الجزائر معروضاً بتوقيت الزبون', left: { label: 'مفكرة ورقية وWhatsApp', sub: 'وزبونان عند 14:30' }, right: { label: 'محرك مواعيد', sub: 'وحجز واحد لكل موعد' } },
    course: { caption: 'الشكل 1 · طلبان للموعد نفسه بفارق 220 ميلي ثانية، أحدهما من التطبيق في الجزائر والآخر عبر وكيل WhatsApp من باريس. الشاشتان كانتا تعرضان «متاح»؛ وقاعدة البيانات تفصل داخل معاملة تقفل سطر الموعد. الأول ينشئ حجزاً مؤقتاً لعشر دقائق؛ والثاني يتلقى رفضاً وبديلين؛ والعربون يحوّل المؤقت إلى حجز مؤكَّد؛ وبلا عربون كان سينتهي. والأوقات مثال مبني.' },
    etapes: { title: 'من الطلب إلى موعد محترَم، في ست خطوات', items: [
      { label: 'عرض المواعيد', sub: 'محسوبة من التوافر؛ بتوقيت الزبون' },
      { label: 'حجز الموعد مؤقتاً', sub: 'معاملة، قفل؛ مؤقت 10 دقائق؛ رفض واضح إن أُخذ', accent: true },
      { label: 'التأكيد', sub: 'عربون أو تأكيد بحركة واحدة؛ مؤقت ← محجوز' },
      { label: 'التذكير', sub: `WhatsApp قبل يوم وقبل ساعتين؛ رد «نعم / تغيير / إلغاء»` },
      { label: 'الاحترام أو التحرير', sub: 'تسجيل الوصول؛ تسجيل الغياب؛ تحرير الموعد إن أُلغي' },
      { label: 'القياس', sub: 'نسبة الغياب، مهلة الحجز، الامتلاء لكل ممارس' },
    ], caption: 'الشكل 2 · الخطوة المميزة هي الوحيدة التي تكتب في قاعدة البيانات بتزامن، وهي ما تجيده مفكرات الحجز العامة وتنساه التطبيقات المنزلية: حجز الموعد مؤقتاً داخل معاملة لمدة قصيرة ورفض الطلب الثاني بوضوح. والخطوتان 4 و5 هما ما يخفض الغياب؛ والسادسة تقول إن كان ذلك ينجح.', alt: 'ست خطوات: عرض المواعيد، حجز الموعد مؤقتاً (مميزة)، التأكيد، التذكير، الاحترام أو التحرير، القياس.' },
    couches: { title: 'نظام حجز، في خمس طبقات', layers: [
      { label: 'التوافر', items: [{ name: 'ساعات لكل ممارس أو مورد، استراحات، أيام محجوبة، مدة لكل خدمة، فاصل بين موعدين، سعة', sub: 'يكتبها المسيّر في التطبيق بتوقيت الجزائر' }] },
      { label: 'محرك المواعيد', items: [{ name: 'المواعيد الظاهرة = العمل − الاستراحات − المحجوب − المواعيد − المؤقتة − الفواصل، مقطَّعة بمدة الخدمة', sub: 'الموعد لا يُخزَّن مسبقاً أبداً: يُحسب عند الطلب' }] },
      { label: 'الحجز والقفل', items: [{ name: 'معاملة واحدة لكل طلب: قفل، مؤقت عشر دقائق، رفض واضح إن أُخذ، بدائل وقائمة انتظار', sub: 'قاعدة البيانات تفصل لا الشاشة', accent: true }] },
      { label: 'التأكيد والدفع', items: [{ name: 'عربون إلكتروني أو تأكيد بحركة واحدة؛ مؤقت ← محجوز؛ إلغاء مكتوب؛ تحرير الموعد', sub: 'العربون أفضل علاج للغياب حيث يُقبل' }] },
      { label: 'التذكيرات والقياس', items: [{ name: 'تذكيرات WhatsApp قبل يوم وقبل ساعتين برد، تسجيل الوصول، نسبة الغياب والامتلاء لكل ممارس', sub: 'موعد ذُكِّر به مع رد موعد يُحترم' }] },
    ], caption: 'الشكل 3 · الطبقة المميزة هي ما يمنع الحجز المزدوج، ويجب أن تكون واحدة: تطبيق الزبون والموقع ووكيل WhatsApp والموظف عند الكاونتر يمرون كلهم بالمسار نفسه والمعاملة نفسها. مساران يعنيان زبونين عند 14:30.', alt: 'خمس طبقات: التوافر، محرك المواعيد، الحجز والقفل (مميزة)، التأكيد والدفع، التذكيرات والقياس.' },
    semaine: { caption: 'الشكل 4 · المواعيد التي يراها الزبون لا تُخزَّن في أي مكان: تُحسب عند الطلب بطرح الاستراحات والأيام المحجوبة والمواعيد المأخوذة والمؤقتة الجارية والفواصل من ساعات العمل، ثم تقطيع ما يبقى بمدة الخدمة. والحساب بتوقيت الجزائر الثابت طوال السنة؛ والعرض بتوقيت الزبون، وزبون في باريس يرى ساعة زائدة من أواخر مارس إلى أواخر أكتوبر. والأوقات مثال مبني.' },
    situations: { title: 'ست حالات حقيقية، وما يفعله التطبيق', columns: ['ما يحدث', 'ما يفعله التطبيق'], rows: [
      { label: 'زبونان عند 14:30', cells: ['حُجز على الموقع وبالهاتف في اللحظة نفسها؛ يأتي الاثنان', 'معاملة واحدة لكل موعد؛ الثاني يتلقى رفضاً وبدائل'] },
      { label: 'موعد محجوب بسلة متروكة', cells: ['بدأ الزبون ولم يدفع؛ يبقى 14:30 مأخوذاً طوال اليوم', 'مؤقت عشر دقائق بانتهاء؛ يُحرَّر آلياً'] },
      { label: 'زبون باريس يصل متأخراً ساعة', cells: ['موعد 14:30 بتوقيت الجزائر قُرئ 14:30 بتوقيت باريس صيفاً', 'مخزَّن بتوقيت الجزائر، معروض بتوقيت الزبون مع الملاحظة'] },
      { label: 'موعد من أربعة لا يأتي', cells: ['لا تذكير ولا عربون؛ يضيع الموعد', 'تذكيرات WhatsApp برد، عربون، تحرير الموعد وإبلاغ قائمة الانتظار'] },
      { label: 'الممارس غيّر ساعاته', cells: ['مواعيد الأسبوع المقبل خاطئة؛ نتصل بالجميع', 'مواعيد محسوبة عند الطلب؛ تعارضات مدرجة؛ زبائن يُبلَّغون بحركة واحدة'] },
      { label: 'الكاونتر لا يرى الموقع', cells: ['يكتب الموظف على ورقة ما أعطاه الموقع للتو لغيره', 'محرك واحد لكل القنوات؛ الكاونتر يحجز بالمعاملة نفسها'] },
    ], caption: 'الشكل 5 · السطران الأولان يُحلان بالمعاملة والمؤقت؛ والثالث بالتوقيت؛ والرابع بالتذكيرات والعربون؛ والأخيران بمحرك واحد يحسب عند الطلب وتستعمله كل القنوات. ولا واحد يُحل بسكرتيرة أكثر انتباهاً.', alt: 'مصفوفة ست حالات: زبونان على الموعد نفسه، موعد محجوب بسلة متروكة، زبون باريس متأخر ساعة، موعد من أربعة غائب، ساعات متغيرة، كاونتر لا يرى الموقع؛ ما يحدث وما يفعله التطبيق.' },
    calendrier: { title: 'نظام حجز سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'القواعد', note: 'مدة لكل خدمة، فواصل، ساعات لكل ممارس، مدة المؤقت، عربون أم لا، قواعد الإلغاء، نصوص التذكيرات؛ موقَّعة', from: 0, to: 1 },
      { label: 'التوافر والمحرك', note: 'ساعات واستراحات وحجب في التطبيق؛ محرك مواعيد يُحسب عند الطلب؛ توقيت الزبون', from: 1, to: 2, accent: true },
      { label: 'الحجز والقفل', note: 'معاملة لكل موعد، مؤقت بانتهاء، رفض وبدائل، قائمة انتظار؛ المسار نفسه لكل القنوات', from: 2, to: 3 },
      { label: 'التأكيد والدفع', note: 'عربون إلكتروني أو تأكيد بحركة واحدة، إلغاء وتحرير، مفكرة الممارس', from: 3, to: 4 },
      { label: 'التذكيرات والكاونتر', note: 'تذكيرات WhatsApp قبل يوم وقبل ساعتين برد، تسجيل الوصول، حجز عند الكاونتر وعبر وكيل WhatsApp', from: 4, to: 5 },
      { label: 'القياس', note: 'نسبة الغياب، الامتلاء لكل ممارس، متوسط مهلة الحجز، أول مراجعة شهرية', from: 5, to: 6 },
    ], caption: 'الشكل 6 · ستة أسابيع، والأول بلا كود: مدد الخدمات والفواصل وقواعد الإلغاء قرارات المسيّر. والأسبوع الثاني مميز لأن محرك المواعيد المحسوب عند الطلب هو ما يجعل كل الباقي بسيطاً: تغيير ساعة تغيير قاعدة لا محو مواعيد.', alt: 'خط زمني من ستة أسابيع: القواعد، التوافر والمحرك (مميز)، الحجز والقفل، التأكيد والدفع، التذكيرات والكاونتر، القياس.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = BK[locale] || BK.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      course: { svg: race(e.race, rtl), caption: t.course.caption, alt: e.race.alt },
      etapes: { svg: steps({ title: t.etapes.title, steps: t.etapes.items, arrows: true, rtl }), caption: t.etapes.caption, alt: t.etapes.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      semaine: { svg: week(e.week, rtl), caption: t.semaine.caption, alt: e.week.alt },
      situations: { svg: matrix({ title: t.situations.title, columns: t.situations.columns, rows: t.situations.rows, rtl }), caption: t.situations.caption, alt: t.situations.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 6, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
