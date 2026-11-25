import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { semaine, service, STRINGS as SC } from './custom/cantine.mjs';
export const slug = 'logiciel-cantine-entreprise-algerie-2027-reservation-des-repas-badge-au-comptoir-sans-reseau-commande-au-traiteur-repas-payes-non-servis-facture';
const I = (x) => '⁦' + x + '⁩';
const T = {
  fr: {
    cover: { eyebrow: 'Cantine d’entreprise · Algérie · 2027', title: ['Commander les repas', 'qui seront servis'], subtitle: 'Réservation la veille, badge au comptoir même sans réseau, facture du traiteur rapprochée', left: { label: 'Commande au jugé', sub: '260 repas payés pour rien' }, right: { label: 'Commande sur réservations', sub: '77 repas non servis' } },
    semaine: { caption: 'Figure 1 · La même cantine, deux semaines. Avec une commande fixe de 380 repas par jour, 260 repas sur 1 900 sont payés sans être servis ; avec une commande calée sur les réservations, 77 sur 1 702. Usine et repas fictifs.' },
    parcours: { title: 'Un repas, de la réservation à la facture, en six temps', items: [
      { label: 'Menu', sub: 'la semaine publiée, deux plats, les régimes indiqués' },
      { label: 'Réservation', sub: 'jusqu’à 16 h la veille : téléphone, borne ou chef d’équipe' },
      { label: 'Commande', sub: 'réservations plus marge, envoyée au traiteur à l’heure limite', accent: true },
      { label: 'Passage', sub: 'badge ou code QR au comptoir, même sans réseau' },
      { label: 'Clôture', sub: 'servis, absents, sans réservation, seconds passages' },
      { label: 'Rapprochement', sub: 'commandé, servi, facturé, jour par jour' },
    ], caption: 'Figure 2 · Six temps. Le temps accentué est la commande : elle n’est plus un chiffre fixe, mais le nombre de réservations à l’heure limite, plus une marge.', alt: 'Six temps : menu, réservation, commande (accentuée), passage, clôture, rapprochement.' },
    couches: { title: 'Ce qu’il y a dans le logiciel, en cinq couches', layers: [
      { label: 'Personnes', items: [{ name: 'Les personnes : employés, équipes, badges, droit au repas par service, invités et intérimaires', sub: 'reprises du logiciel de paie ou du pointage' }] },
      { label: 'Réservations', items: [{ name: 'Les réservations : menu de la semaine, heure limite, annulation, saisie par le chef d’équipe', sub: 'savoir la veille combien viendront' }] },
      { label: 'Comptoir', items: [{ name: 'Le comptoir : lecture du badge, contrôle sur la tablette, passages gardés sans réseau puis envoyés', sub: 'le service ne s’arrête jamais', accent: true }] },
      { label: 'Commande', items: [{ name: 'La commande : compte à l’heure limite, marge réglable, envoi au traiteur, régimes à part', sub: 'ce que la cuisine doit préparer' }] },
      { label: 'Rapprochement', items: [{ name: 'Le rapprochement : commandé, servi et facturé par jour, exports par personne et par service', sub: 'vérifier la facture du mois' }] },
    ], caption: 'Figure 3 · Cinq couches. La couche accentuée, le comptoir, est celle qui doit fonctionner sans réseau : une file de 300 personnes n’attend pas.', alt: 'Cinq couches : les personnes ; les réservations ; le comptoir (accentué) ; la commande ; le rapprochement.' },
    service: { caption: 'Figure 4 · Un service de déjeuner : 339 passages en deux heures, dont 101 pendant vingt minutes sans réseau, gardés sur la tablette puis envoyés. Service et horaires fictifs.' },
    calendrier: { title: 'Huit semaines, en commençant par recompter une semaine', unit: 'sem.', items: [
      { label: 'Recompter une semaine', note: 'feuilles d’émargement et bons de commande : commandé, servi', from: 0, to: 1, accent: true },
      { label: 'Personnes et droits au repas', note: 'liste reprise de la paie ou du pointage, équipes, badges', from: 0, to: 2 },
      { label: 'Réservation et heure limite', note: 'menu, téléphone, borne, saisie par le chef d’équipe', from: 1, to: 4 },
      { label: 'Comptoir', note: 'lecture du badge, contrôle local, essais sans réseau', from: 2, to: 5 },
      { label: 'Commande et clôture', note: 'envoi au traiteur, marge, clôture de chaque service', from: 4, to: 6 },
      { label: 'Service pilote, puis première facture', note: 'une équipe d’abord, puis la facture du mois rapprochée', from: 5, to: 8 },
    ], caption: 'Figure 5 · Huit semaines dans l’exemple. La période accentuée est la première : une semaine recomptée à la main, pour connaître l’écart de départ. Durées indicatives d’un exemple construit.', alt: 'Calendrier de huit semaines : recompter une semaine (accentué), personnes et droits au repas, réservation et heure limite, comptoir, commande et clôture, service pilote puis première facture.' },
    situations: { title: 'Cinq situations, et ce que le logiciel change', columns: ['Avec la feuille d’émargement', 'Avec le logiciel'], rows: [
      { label: 'Combien de repas commander demain', cells: ['le même chiffre, au jugé', 'les réservations, plus une marge'] },
      { label: 'Une personne passe deux fois', cells: ['personne ne le voit', 'second passage refusé à l’écran'] },
      { label: 'Le réseau tombe pendant le service', cells: ['la feuille continue, sans contrôle', 'le comptoir continue, envoi au retour'] },
      { label: 'La facture du traiteur arrive', cells: ['payée telle quelle', 'rapprochée jour par jour'] },
      { label: 'Un invité, un intérimaire, l’équipe de nuit', cells: ['hors feuille, ou oubliés', 'droit au repas par service'] },
    ], caption: 'Figure 6 · Cinq situations. Le logiciel ne choisit ni le traiteur ni le menu : il donne le compte, avant et après chaque service.', alt: 'Matrice de cinq situations : la commande du lendemain, le second passage, la coupure de réseau, la facture du traiteur, les invités et l’équipe de nuit ; pour chacune, avec la feuille d’émargement et avec le logiciel.' },
  },
  en: {
    cover: { eyebrow: 'Company canteen · Algeria · 2027', title: ['Ordering the meals', 'that will be served'], subtitle: 'Booking the day before, a badge at the counter even offline, the caterer’s invoice reconciled', left: { label: 'Order by guesswork', sub: '260 meals paid for nothing' }, right: { label: 'Order on bookings', sub: '77 meals not served' } },
    semaine: { caption: 'Figure 1 · The same canteen, two weeks. With a fixed order of 380 meals a day, 260 meals out of 1,900 are paid for and not served; with an order based on bookings, 77 out of 1,702. Fictitious plant and meals.' },
    parcours: { title: 'A meal, from booking to invoice, in six steps', items: [
      { label: 'Menu', sub: 'the week published, two dishes, diets indicated' },
      { label: 'Booking', sub: 'until 4 p.m. the day before: phone, kiosk or team leader' },
      { label: 'Order', sub: 'bookings plus a margin, sent to the caterer at the cut-off', accent: true },
      { label: 'Reading', sub: 'badge or QR code at the counter, even without network' },
      { label: 'Closing', sub: 'served, absent, without a booking, second passes' },
      { label: 'Reconciliation', sub: 'ordered, served, invoiced, day by day' },
    ], caption: 'Figure 2 · Six steps. The accented step is the order: it is no longer a fixed figure, but the number of bookings at the cut-off, plus a margin.', alt: 'Six steps: menu, booking, order (accented), reading, closing, reconciliation.' },
    couches: { title: 'What is inside the software, in five layers', layers: [
      { label: 'People', items: [{ name: 'People: employees, shifts, badges, right to a meal per service, guests and temporary staff', sub: 'taken from the payroll or attendance software' }] },
      { label: 'Bookings', items: [{ name: 'Bookings: the week’s menu, cut-off time, cancellation, entry by the team leader', sub: 'knowing the day before how many will come' }] },
      { label: 'Counter', items: [{ name: 'Counter: badge reading, check on the tablet, readings kept without network then sent', sub: 'the service never stops', accent: true }] },
      { label: 'Order', items: [{ name: 'Order: count at the cut-off, adjustable margin, sent to the caterer, diets listed apart', sub: 'what the kitchen must prepare' }] },
      { label: 'Reconciliation', items: [{ name: 'Reconciliation: ordered, served and invoiced per day, exports per person and per department', sub: 'checking the month’s invoice' }] },
    ], caption: 'Figure 3 · Five layers. The accented layer, the counter, is the one that must work without network: a queue of 300 people does not wait.', alt: 'Five layers: people; bookings; counter (accented); order; reconciliation.' },
    service: { caption: 'Figure 4 · One lunch service: 339 readings in two hours, 101 of them during twenty minutes without network, kept on the tablet then sent. Fictitious service and times.' },
    calendrier: { title: 'Eight weeks, starting by recounting one week', unit: 'wk', items: [
      { label: 'Recounting one week', note: 'sign-in sheets and order slips: ordered, served', from: 0, to: 1, accent: true },
      { label: 'People and right to a meal', note: 'list taken from payroll or attendance, shifts, badges', from: 0, to: 2 },
      { label: 'Booking and cut-off', note: 'menu, phone, kiosk, entry by the team leader', from: 1, to: 4 },
      { label: 'Counter', note: 'badge reading, local check, tests without network', from: 2, to: 5 },
      { label: 'Order and closing', note: 'sending to the caterer, margin, closing of each service', from: 4, to: 6 },
      { label: 'Pilot service, then first invoice', note: 'one shift first, then the month’s invoice reconciled', from: 5, to: 8 },
    ], caption: 'Figure 5 · Eight weeks in the example. The accented period is the first: one week recounted by hand, to know the starting gap. Indicative durations of a constructed example.', alt: 'Eight-week calendar: recounting one week (accented), people and right to a meal, booking and cut-off, counter, order and closing, pilot service then first invoice.' },
    situations: { title: 'Five situations, and what the software changes', columns: ['With the sign-in sheet', 'With the software'], rows: [
      { label: 'How many meals to order tomorrow', cells: ['the same figure, by guesswork', 'the bookings, plus a margin'] },
      { label: 'Someone goes through twice', cells: ['nobody sees it', 'second pass refused on screen'] },
      { label: 'The network drops during the service', cells: ['the sheet goes on, unchecked', 'the counter goes on, sends later'] },
      { label: 'The caterer’s invoice arrives', cells: ['paid as it stands', 'reconciled day by day'] },
      { label: 'A guest, a temp, the night shift', cells: ['off the sheet, or forgotten', 'right to a meal per service'] },
    ], caption: 'Figure 6 · Five situations. The software chooses neither the caterer nor the menu: it gives the count, before and after each service.', alt: 'Matrix of five situations: tomorrow’s order, the second pass, the network outage, the caterer’s invoice, guests and the night shift; for each, with the sign-in sheet and with the software.' },
  },
  ar: {
    cover: { eyebrow: 'مطعم المؤسسة · الجزائر · 2027', title: ['طلب الوجبات', 'التي ستُقدَّم فعلاً'], subtitle: 'حجز في اليوم السابق، بطاقة عند الشباك ولو دون شبكة، وفاتورة المموِّن مطابَقة', left: { label: 'طلبية بالتقدير', sub: '260 وجبة مدفوعة دون فائدة' }, right: { label: 'طلبية على الحجوزات', sub: '77 وجبة غير مقدَّمة' } },
    semaine: { caption: 'الشكل 1 · المطعم نفسه، في أسبوعين. بطلبية ثابتة من 380 وجبة في اليوم، 260 وجبة من 1900 تُدفَع دون أن تُقدَّم؛ وبطلبية مبنية على الحجوزات، 77 من 1702. مصنع ووجبات خيالية.' },
    parcours: { title: 'وجبة، من الحجز إلى الفاتورة، في ست مراحل', items: [
      { label: 'القائمة', sub: 'قائمة الأسبوع منشورة، طبقان، والحِميات مبيَّنة' },
      { label: 'الحجز', sub: 'إلى الرابعة مساءً من اليوم السابق: هاتف، شاشة، أو رئيس الفريق' },
      { label: 'الطلبية', sub: 'الحجوزات زائد هامش، تُرسَل إلى المموِّن عند الساعة المحددة', accent: true },
      { label: 'المرور', sub: 'بطاقة أو رمز ' + I('QR') + ' عند الشباك، ولو دون شبكة' },
      { label: 'الإقفال', sub: 'من أكلوا، الغائبون، دون حجز، والمرورات الثانية' },
      { label: 'المطابقة', sub: 'المطلوب، المقدَّم، والمفوتَر، يوماً بيوم' },
    ], caption: 'الشكل 2 · ست مراحل. المرحلة المبرزة هي الطلبية: لم تعد رقماً ثابتاً، بل عدد الحجوزات عند الساعة المحددة، زائد هامش.', alt: 'ست مراحل: القائمة، الحجز، الطلبية (مبرزة)، المرور، الإقفال، والمطابقة.' },
    couches: { title: 'ما يوجد في البرنامج، في خمس طبقات', layers: [
      { label: 'الأشخاص', items: [{ name: 'الأشخاص: العمال، الفرق، البطاقات، الحق في الوجبة لكل خدمة، الضيوف والمؤقتون', sub: 'مأخوذون من برنامج الأجور أو الحضور' }] },
      { label: 'الحجوزات', items: [{ name: 'الحجوزات: قائمة الأسبوع، الساعة المحددة، الإلغاء، والإدخال من رئيس الفريق', sub: 'معرفة عدد القادمين منذ اليوم السابق' }] },
      { label: 'الشباك', items: [{ name: 'الشباك: قراءة البطاقة، تحقق على اللوحة، ومرورات تُحفَظ دون شبكة ثم تُرسَل', sub: 'الخدمة لا تتوقف أبداً', accent: true }] },
      { label: 'الطلبية', items: [{ name: 'الطلبية: العدّ عند الساعة المحددة، هامش قابل للضبط، إرسال إلى المموِّن، والحِميات على حدة', sub: 'ما يجب أن يحضّره المطبخ' }] },
      { label: 'المطابقة', items: [{ name: 'المطابقة: المطلوب، المقدَّم، والمفوتَر في كل يوم، وتصدير حسب الشخص والمصلحة', sub: 'التحقق من فاتورة الشهر' }] },
    ], caption: 'الشكل 3 · خمس طبقات. الطبقة المبرزة، الشباك، هي التي يجب أن تعمل دون شبكة: طابور من 300 شخص لا ينتظر.', alt: 'خمس طبقات: الأشخاص؛ الحجوزات؛ الشباك (مبرز)؛ الطلبية؛ والمطابقة.' },
    service: { caption: 'الشكل 4 · خدمة غداء واحدة: 339 مروراً في ساعتين، منها 101 خلال عشرين دقيقة دون شبكة، محفوظة على اللوحة ثم مُرسَلة. خدمة ومواقيت خيالية.' },
    calendrier: { title: 'ثمانية أسابيع، بدءاً بإعادة عدّ أسبوع', unit: 'أسبوع', items: [
      { label: 'إعادة عدّ أسبوع', note: 'أوراق التوقيع ووصولات الطلب: المطلوب والمقدَّم', from: 0, to: 1, accent: true },
      { label: 'الأشخاص والحق في الوجبة', note: 'قائمة مأخوذة من الأجور أو الحضور، الفرق، والبطاقات', from: 0, to: 2 },
      { label: 'الحجز والساعة المحددة', note: 'القائمة، الهاتف، الشاشة، والإدخال من رئيس الفريق', from: 1, to: 4 },
      { label: 'الشباك', note: 'قراءة البطاقة، تحقق محلي، وتجارب دون شبكة', from: 2, to: 5 },
      { label: 'الطلبية والإقفال', note: 'الإرسال إلى المموِّن، الهامش، وإقفال كل خدمة', from: 4, to: 6 },
      { label: 'خدمة تجريبية، ثم أول فاتورة', note: 'فريق واحد أولاً، ثم مطابقة فاتورة الشهر', from: 5, to: 8 },
    ], caption: 'الشكل 5 · ثمانية أسابيع في المثال. الفترة المبرزة هي الأولى: أسبوع يُعاد عدّه باليد، لمعرفة الفارق عند الانطلاق. مدد تقريبية لمثال مركَّب.', alt: 'رزنامة من ثمانية أسابيع: إعادة عدّ أسبوع (مبرزة)، الأشخاص والحق في الوجبة، الحجز والساعة المحددة، الشباك، الطلبية والإقفال، وخدمة تجريبية ثم أول فاتورة.' },
    situations: { title: 'خمس حالات، وما يغيّره البرنامج', columns: ['مع ورقة التوقيع', 'مع البرنامج'], rows: [
      { label: 'كم وجبة نطلب للغد', cells: ['الرقم نفسه، بالتقدير', 'الحجوزات، زائد هامش'] },
      { label: 'شخص يمر مرتين', cells: ['لا أحد يراه', 'المرور الثاني مرفوض على الشاشة'] },
      { label: 'الشبكة تنقطع أثناء الخدمة', cells: ['الورقة تستمر، دون تحقق', 'الشباك يستمر، والإرسال لاحقاً'] },
      { label: 'فاتورة المموِّن تصل', cells: ['تُدفَع كما هي', 'تُطابَق يوماً بيوم'] },
      { label: 'ضيف، عامل مؤقت، أو فريق الليل', cells: ['خارج الورقة، أو منسيّون', 'الحق في الوجبة لكل خدمة'] },
    ], caption: 'الشكل 6 · خمس حالات. البرنامج لا يختار المموِّن ولا القائمة: يعطي العدّ، قبل كل خدمة وبعدها.', alt: 'مصفوفة من خمس حالات: طلبية الغد، المرور الثاني، انقطاع الشبكة، فاتورة المموِّن، والضيوف وفريق الليل؛ ولكل واحدة مع ورقة التوقيع ومع البرنامج.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      semaine: { svg: semaine(e.semaine, rtl), caption: t.semaine.caption, alt: e.semaine.alt },
      parcours: { svg: steps({ title: t.parcours.title, steps: t.parcours.items, arrows: true, rtl }), caption: t.parcours.caption, alt: t.parcours.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      service: { svg: service(e.service, rtl), caption: t.service.caption, alt: e.service.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 8, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
      situations: { svg: matrix({ title: t.situations.title, columns: t.situations.columns, rows: t.situations.rows, rtl }), caption: t.situations.caption, alt: t.situations.alt },
    },
  };
}
