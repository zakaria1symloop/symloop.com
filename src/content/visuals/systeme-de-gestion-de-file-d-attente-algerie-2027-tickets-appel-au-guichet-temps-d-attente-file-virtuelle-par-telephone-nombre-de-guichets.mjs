import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { journee, guichets, STRINGS as SC } from './custom/fileattente.mjs';
export const slug = 'systeme-de-gestion-de-file-d-attente-algerie-2027-tickets-appel-au-guichet-temps-d-attente-file-virtuelle-par-telephone-nombre-de-guichets';
const T = {
  fr: {
    cover: { eyebrow: 'File d’attente · Algérie · 2027', title: ['Gestion de file d’attente :', 'combien de guichets, et quand'], subtitle: 'Tickets, appel au guichet, temps d’attente estimé, file virtuelle par téléphone, nombre de guichets', left: { label: '3 guichets', sub: '26 min d’attente' }, right: { label: '4 guichets', sub: '2 min d’attente' } },
    couches: { title: 'Ce qu’il y a dans un système de gestion de file d’attente, en cinq couches', layers: [
      { label: 'Entrée', items: [{ name: 'L’entrée : un ticket à la borne, un QR code sur la porte, un message, ou un rendez-vous déjà pris', sub: 'comment on entre dans la file' }] },
      { label: 'Services', items: [{ name: 'Les services : une file par motif, une durée moyenne par motif, des priorités, des transferts', sub: 'pourquoi on vient, et combien de temps cela prend' }] },
      { label: 'Guichets', items: [{ name: 'Les guichets : l’écran de l’agent, « suivant », absent, transfert, pause, motifs servis', sub: 'ce que fait la personne qui reçoit' }] },
      { label: 'Appel', items: [{ name: 'L’appel : écran de salle, annonce vocale en arabe et en français, message « plus que trois avant vous »', sub: 'ce que voit et entend la personne qui attend' }] },
      { label: 'Mesure', items: [{ name: 'La mesure : arrivées par heure, attente, durée de service, absents, abandons, par service et par guichet', sub: 'ce qui sert à décider', accent: true }] },
    ], caption: 'Figure 1 · Cinq couches. La couche accentuée est la mesure : un distributeur de tickets met de l’ordre dans la salle ; ce sont les chiffres qu’il produit qui disent combien de guichets ouvrir, et quand.', alt: 'Cinq couches : l’entrée ; les services ; les guichets ; l’appel ; la mesure (accentuée).' },
    ticket: { title: 'La vie d’un ticket, en six temps', items: [
      { label: 'Arrivée', sub: 'borne, QR code, message ou rendez-vous' },
      { label: 'Ticket', sub: 'un numéro, un service, une attente estimée' },
      { label: 'Attente', sub: 'en salle ou ailleurs, position visible', accent: true },
      { label: 'Appel', sub: 'écran, voix, message : numéro et guichet' },
      { label: 'Service', sub: 'début et fin horodatés, transfert possible' },
      { label: 'Clôture', sub: 'servi, absent, ou parti avant l’appel' },
    ], caption: 'Figure 2 · Six temps. Le temps accentué est l’attente : c’est le seul que la personne vit, et le seul que l’ancien système ne mesurait pas. Chaque passage laisse quatre horodatages : ticket, appel, début, fin.', alt: 'Six temps : arrivée, ticket, attente (accentuée), appel, service, clôture.' },
    modes: { title: 'Cinq façons d’organiser l’attente : pour quelle situation, ce que cela demande', columns: ['Pour quelle situation', 'Ce que cela demande'], rows: [
      { label: 'Le ticket pris sur place', cells: ['passage sans rendez-vous, flux continu', 'une borne ou une tablette, un écran d’appel'] },
      { label: 'La file virtuelle par téléphone', cells: ['attente longue, salle trop petite', 'QR code ou message, alerte avant l’appel'] },
      { label: 'Le rendez-vous', cells: ['service long, ou préparé d’avance', 'des créneaux, des rappels, les retards gérés'] },
      { label: 'La priorité', cells: ['urgence, personne fragile, client en compte', 'des règles écrites, visibles sur l’écran'] },
      { label: 'Rendez-vous et passage mêlés', cells: ['la plupart des agences et des cabinets', 'des guichets réservés par plages horaires'] },
    ], caption: 'Figure 3 · Cinq façons d’organiser l’attente. Aucune n’est meilleure en soi : un laboratoire le matin, une agence en fin de mois et un cabinet sur rendez-vous n’ont pas la même file. Le système doit permettre de les combiner.', alt: 'Matrice de cinq façons d’organiser l’attente : le ticket pris sur place, la file virtuelle par téléphone, le rendez-vous, la priorité, rendez-vous et passage mêlés ; pour chacune, la situation et ce que cela demande.' },
    journee: { caption: 'Figure 4 · Une journée, heure par heure : 192 passages, trois guichets. La file se forme de 10 h à 12 h, quand les arrivées dépassent 30 par heure. Calcul simplifié, arrivées fictives.' },
    guichets: { caption: 'Figure 5 · La même heure à 28 arrivées, avec trois, quatre ou cinq guichets : 26 minutes, 2 minutes, 31 secondes d’attente moyenne. Formule d’Erlang C, exemple construit.' },
    calendrier: { title: 'Huit semaines pour un site, une salle, des chiffres', unit: 'sem.', items: [
      { label: 'Cadrage', note: 'les services, leurs durées, les guichets, les heures de pointe, ce qui se mesure déjà', from: 0, to: 1, accent: true },
      { label: 'Tickets et services', note: 'entrée par borne ou QR code, files par motif, priorités, attente estimée', from: 1, to: 3 },
      { label: 'Écran des agents', note: 'suivant, absent, transfert, pause, motifs servis par guichet', from: 2, to: 5 },
      { label: 'Appel en salle', note: 'écran, annonce vocale en arabe et en français, messages avant l’appel', from: 3, to: 6 },
      { label: 'Tableau de bord', note: 'arrivées par heure, attente, durée de service, absents, par service et par guichet', from: 4, to: 7 },
      { label: 'Mise en service', note: 'essai sur une journée calme, formation des agents, premier planning calé sur les chiffres', from: 6, to: 8 },
    ], caption: 'Figure 6 · Huit semaines dans l’exemple, pour un site. La période accentuée est la première : on liste les motifs de visite et l’on chronomètre quelques services avant d’écrire une ligne de code. Durées indicatives d’un exemple construit.', alt: 'Calendrier de huit semaines : cadrage (accentué), tickets et services, écran des agents, appel en salle, tableau de bord, mise en service.' },
  },
  en: {
    cover: { eyebrow: 'Queue management · Algeria · 2027', title: ['Queue management:', 'how many counters, and when'], subtitle: 'Tickets, calling to the counter, estimated waiting time, virtual queue by phone, number of counters', left: { label: '3 counters', sub: '26 min of waiting' }, right: { label: '4 counters', sub: '2 min of waiting' } },
    couches: { title: 'What is inside a queue management system, in five layers', layers: [
      { label: 'Entry', items: [{ name: 'Entry: a ticket at the kiosk, a QR code on the door, a message, or an appointment already made', sub: 'how people join the queue' }] },
      { label: 'Services', items: [{ name: 'Services: one queue per reason, an average duration per reason, priorities, transfers', sub: 'why people come, and how long it takes' }] },
      { label: 'Counters', items: [{ name: 'Counters: the agent’s screen, “next”, absent, transfer, break, reasons served', sub: 'what the person receiving does' }] },
      { label: 'Calling', items: [{ name: 'Calling: room display, voice announcement in Arabic and in French, a “three ahead of you” message', sub: 'what the person waiting sees and hears' }] },
      { label: 'Measurement', items: [{ name: 'Measurement: arrivals per hour, wait, service time, no-shows, walk-aways, per service and per counter', sub: 'what decisions are made from', accent: true }] },
    ], caption: 'Figure 1 · Five layers. The accented layer is measurement: a ticket dispenser brings order to the room; it is the figures it produces that say how many counters to open, and when.', alt: 'Five layers: entry; services; counters; calling; measurement (accented).' },
    ticket: { title: 'The life of a ticket, in six steps', items: [
      { label: 'Arrival', sub: 'kiosk, QR code, message or appointment' },
      { label: 'Ticket', sub: 'a number, a service, an estimated wait' },
      { label: 'Waiting', sub: 'in the room or elsewhere, position visible', accent: true },
      { label: 'Call', sub: 'screen, voice, message: number and counter' },
      { label: 'Service', sub: 'start and end timestamped, transfer possible' },
      { label: 'Closing', sub: 'served, absent, or gone before the call' },
    ], caption: 'Figure 2 · Six steps. The accented step is waiting: it is the only one the person lives through, and the only one the old system did not measure. Each visit leaves four timestamps: ticket, call, start, end.', alt: 'Six steps: arrival, ticket, waiting (accented), call, service, closing.' },
    modes: { title: 'Five ways of organising the wait: for which situation, what it requires', columns: ['For which situation', 'What it requires'], rows: [
      { label: 'The ticket taken on site', cells: ['walk-in visits, continuous flow', 'a kiosk or a tablet, a calling display'] },
      { label: 'The virtual queue by phone', cells: ['long waits, a room that is too small', 'QR code or message, alert before the call'] },
      { label: 'The appointment', cells: ['a long service, or one prepared in advance', 'slots, reminders, late arrivals handled'] },
      { label: 'Priority', cells: ['urgency, vulnerable person, account customer', 'written rules, visible on the display'] },
      { label: 'Appointments and walk-ins mixed', cells: ['most branches and practices', 'counters reserved by time band'] },
    ], caption: 'Figure 3 · Five ways of organising the wait. None is better in itself: a laboratory in the morning, a branch at month end and a practice by appointment do not have the same queue. The system has to allow them to be combined.', alt: 'Matrix of five ways of organising the wait: the ticket taken on site, the virtual queue by phone, the appointment, priority, appointments and walk-ins mixed; for each, the situation and what it requires.' },
    journee: { caption: 'Figure 4 · One day, hour by hour: 192 visits, three counters. The queue forms from 10 am to 12 pm, when arrivals exceed 30 an hour. Simplified calculation, fictitious arrivals.' },
    guichets: { caption: 'Figure 5 · The same hour at 28 arrivals, with three, four or five counters: 26 minutes, 2 minutes, 31 seconds of average wait. Erlang C formula, constructed example.' },
    calendrier: { title: 'Eight weeks for one site, one room, and figures', unit: 'wk', items: [
      { label: 'Scoping', note: 'the services, their durations, the counters, the peak hours, what is already measured', from: 0, to: 1, accent: true },
      { label: 'Tickets and services', note: 'entry by kiosk or QR code, queues per reason, priorities, estimated wait', from: 1, to: 3 },
      { label: 'Agents’ screen', note: 'next, absent, transfer, break, reasons served per counter', from: 2, to: 5 },
      { label: 'Calling in the room', note: 'display, voice announcement in Arabic and in French, messages before the call', from: 3, to: 6 },
      { label: 'Dashboard', note: 'arrivals per hour, wait, service time, no-shows, per service and per counter', from: 4, to: 7 },
      { label: 'Go-live', note: 'trial on a quiet day, agent training, first roster set from the figures', from: 6, to: 8 },
    ], caption: 'Figure 6 · Eight weeks in the example, for one site. The accented period is the first: the reasons for visiting are listed and a few services are timed before a line of code is written. Indicative durations of a constructed example.', alt: 'Eight-week calendar: scoping (accented), tickets and services, agents’ screen, calling in the room, dashboard, go-live.' },
  },
  ar: {
    cover: { eyebrow: 'تسيير الطوابير · الجزائر · 2027', title: ['تسيير الطابور:', 'كم شبّاكاً، ومتى'], subtitle: 'التذاكر، النداء إلى الشبّاك، مدة الانتظار المقدَّرة، الطابور الافتراضي بالهاتف، وعدد الشبابيك', left: { label: '3 شبابيك', sub: '26 دقيقة انتظار' }, right: { label: '4 شبابيك', sub: 'دقيقتان انتظار' } },
    couches: { title: 'ما يوجد في نظام تسيير الطوابير، في خمس طبقات', layers: [
      { label: 'الدخول', items: [{ name: 'الدخول: تذكرة من الموزّع، رمز QR على الباب، رسالة، أو موعد مأخوذ مسبقاً', sub: 'كيف يدخل الناس الطابور' }] },
      { label: 'الخدمات', items: [{ name: 'الخدمات: طابور لكل سبب، مدة متوسطة لكل سبب، أولويات، وتحويلات', sub: 'لماذا يأتي الناس، وكم يأخذ ذلك' }] },
      { label: 'الشبابيك', items: [{ name: 'الشبابيك: شاشة العون، «التالي»، غائب، تحويل، استراحة، والأسباب المخدومة', sub: 'ما يفعله من يستقبل' }] },
      { label: 'النداء', items: [{ name: 'النداء: شاشة القاعة، إعلان صوتي بالعربية والفرنسية، ورسالة «بقي ثلاثة قبلكم»', sub: 'ما يراه ويسمعه من ينتظر' }] },
      { label: 'القياس', items: [{ name: 'القياس: الوصول في الساعة، الانتظار، مدة الخدمة، الغائبون، والمغادرون، لكل خدمة ولكل شبّاك', sub: 'ما يُبنى عليه القرار', accent: true }] },
    ], caption: 'الشكل 1 · خمس طبقات. الطبقة المبرزة هي القياس: موزّع التذاكر يضع النظام في القاعة؛ والأرقام التي ينتجها هي التي تقول كم شبّاكاً يُفتح، ومتى.', alt: 'خمس طبقات: الدخول؛ الخدمات؛ الشبابيك؛ النداء؛ والقياس (مبرزة).' },
    ticket: { title: 'حياة تذكرة، في ست مراحل', items: [
      { label: 'الوصول', sub: 'موزّع، رمز QR، رسالة، أو موعد' },
      { label: 'التذكرة', sub: 'رقم، خدمة، وانتظار مقدَّر' },
      { label: 'الانتظار', sub: 'في القاعة أو خارجها، والترتيب ظاهر', accent: true },
      { label: 'النداء', sub: 'شاشة، صوت، رسالة: الرقم والشبّاك' },
      { label: 'الخدمة', sub: 'بداية ونهاية مسجَّلتان، وتحويل ممكن' },
      { label: 'الإغلاق', sub: 'خُدم، غاب، أو غادر قبل النداء' },
    ], caption: 'الشكل 2 · ست مراحل. المرحلة المبرزة هي الانتظار: هي الوحيدة التي يعيشها الشخص، والوحيدة التي لم يكن النظام القديم يقيسها. وكل مرور يترك أربعة أوقات مسجَّلة: التذكرة، النداء، البداية، والنهاية.', alt: 'ست مراحل: الوصول، التذكرة، الانتظار (مبرزة)، النداء، الخدمة، والإغلاق.' },
    modes: { title: 'خمس طرق لتنظيم الانتظار: لأي حالة، وما تتطلّبه', columns: ['لأي حالة', 'ما تتطلّبه'], rows: [
      { label: 'التذكرة المأخوذة في المكان', cells: ['مرور دون موعد، وتدفّق مستمر', 'موزّع أو لوحة، وشاشة نداء'] },
      { label: 'الطابور الافتراضي بالهاتف', cells: ['انتظار طويل، وقاعة صغيرة', 'رمز QR أو رسالة، وتنبيه قبل النداء'] },
      { label: 'الموعد', cells: ['خدمة طويلة، أو محضَّرة مسبقاً', 'مواقيت، تذكيرات، وتسيير التأخرات'] },
      { label: 'الأولوية', cells: ['استعجال، شخص هشّ، أو زبون بحساب', 'قواعد مكتوبة، ظاهرة على الشاشة'] },
      { label: 'المواعيد والمرور معاً', cells: ['أغلب الوكالات والعيادات', 'شبابيك محجوزة حسب الفترات'] },
    ], caption: 'الشكل 3 · خمس طرق لتنظيم الانتظار. لا واحدة أحسن في ذاتها: مخبر في الصباح، وكالة في نهاية الشهر، وعيادة بالمواعيد ليس لها الطابور نفسه. والنظام يجب أن يسمح بالجمع بينها.', alt: 'مصفوفة من خمس طرق لتنظيم الانتظار: التذكرة المأخوذة في المكان، الطابور الافتراضي بالهاتف، الموعد، الأولوية، والمواعيد والمرور معاً؛ ولكل واحدة، الحالة وما تتطلّبه.' },
    journee: { caption: 'الشكل 4 · يوم واحد، ساعة بساعة: 192 مروراً، وثلاثة شبابيك. الطابور يتكوّن من العاشرة إلى منتصف النهار، حين يتجاوز الوصول 30 في الساعة. حساب مبسَّط، ووصول خيالي.' },
    guichets: { caption: 'الشكل 5 · الساعة نفسها بـ28 وصولاً، بثلاثة أو أربعة أو خمسة شبابيك: 26 دقيقة، دقيقتان، ثم 31 ثانية من الانتظار في المتوسط. صيغة إرلانغ C، مثال مركَّب.' },
    calendrier: { title: 'ثمانية أسابيع لموقع واحد، قاعة واحدة، وأرقام', unit: 'أسبوع', items: [
      { label: 'التأطير', note: 'الخدمات، مددها، الشبابيك، ساعات الذروة، وما يُقاس حالياً', from: 0, to: 1, accent: true },
      { label: 'التذاكر والخدمات', note: 'دخول بالموزّع أو برمز QR، طوابير لكل سبب، أولويات، وانتظار مقدَّر', from: 1, to: 3 },
      { label: 'شاشة الأعوان', note: 'التالي، غائب، تحويل، استراحة، والأسباب المخدومة لكل شبّاك', from: 2, to: 5 },
      { label: 'النداء في القاعة', note: 'شاشة، إعلان صوتي بالعربية والفرنسية، ورسائل قبل النداء', from: 3, to: 6 },
      { label: 'لوحة القيادة', note: 'الوصول في الساعة، الانتظار، مدة الخدمة، الغائبون، لكل خدمة ولكل شبّاك', from: 4, to: 7 },
      { label: 'التشغيل', note: 'تجربة في يوم هادئ، تكوين الأعوان، وأول جدول يُضبط على الأرقام', from: 6, to: 8 },
    ], caption: 'الشكل 6 · ثمانية أسابيع في المثال، لموقع واحد. الفترة المبرزة هي الأولى: تُحصى أسباب الزيارة وتُوقَّت بعض الخدمات قبل كتابة سطر من الشيفرة. مدد تقريبية لمثال مركَّب.', alt: 'رزنامة من ثمانية أسابيع: التأطير (مبرزة)، التذاكر والخدمات، شاشة الأعوان، النداء في القاعة، لوحة القيادة، ثم التشغيل.' },
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
      ticket: { svg: steps({ title: t.ticket.title, steps: t.ticket.items, arrows: true, rtl }), caption: t.ticket.caption, alt: t.ticket.alt },
      modes: { svg: matrix({ title: t.modes.title, columns: t.modes.columns, rows: t.modes.rows, rtl }), caption: t.modes.caption, alt: t.modes.alt },
      journee: { svg: journee(e.journee, rtl), caption: t.journee.caption, alt: e.journee.alt },
      guichets: { svg: guichets(e.guichets, rtl), caption: t.guichets.caption, alt: e.guichets.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 8, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
