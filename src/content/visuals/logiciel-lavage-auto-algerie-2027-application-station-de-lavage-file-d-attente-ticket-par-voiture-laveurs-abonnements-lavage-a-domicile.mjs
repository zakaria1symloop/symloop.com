import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { affluence, tickets, STRINGS as SC } from './custom/lavage.mjs';
export const slug = 'logiciel-lavage-auto-algerie-2027-application-station-de-lavage-file-d-attente-ticket-par-voiture-laveurs-abonnements-lavage-a-domicile';
const T = {
  fr: {
    cover: { eyebrow: 'Lavage auto · Algérie · 2027', title: ['Logiciel lavage auto', 'un ticket par voiture'], subtitle: 'File du samedi, caisse qui tombe juste, décompte des laveurs, abonnements, flottes et lavage à domicile', left: { label: 'Trois chiffres', sub: 'le cahier, la caisse, les laveurs' }, right: { label: 'Un seul', sub: 'une plaque, un ticket, un paiement' } },
    affluence: { caption: 'Figure 1 · Une station de trois baies, à vingt-cinq minutes par voiture, lave 7,2 voitures par heure. Le samedi, 69 voitures arrivent pour 57,6 places, dont 35 entre 11 h et 14 h pour 21,6 places : la file s’allonge et des clients repartent. Le mardi, 22 voitures arrivent et 62 % des places restent vides. Arrivées et durées sont un exemple construit ; le calcul, lui, se refait avec vos propres comptages.' },
    passage: { title: 'Le passage d’une voiture, en six temps', items: [
      { label: 'Accueillir', sub: 'la plaque saisie ouvre le ticket', accent: true },
      { label: 'Choisir', sub: 'la formule et les options, prix affiché' },
      { label: 'Photographier', sub: 'quatre photos de l’état à l’entrée' },
      { label: 'Laver', sub: 'baie et laveur attribués, durée mesurée' },
      { label: 'Encaisser', sub: 'espèces, abonnement ou compte société' },
      { label: 'Prévenir', sub: 'message : votre voiture est prête' },
    ], caption: 'Figure 2 · Le temps accentué est le premier : la plaque d’immatriculation saisie à l’entrée ouvre un ticket, et tout le reste s’y rattache, la formule, les photos, le laveur, le paiement. Les photos à l’entrée règlent d’avance la discussion sur une rayure ; le message de fin évite au client d’attendre debout.', alt: 'Six temps : accueillir (accentué), choisir, photographier, laver, encaisser, prévenir.' },
    tickets: { caption: 'Figure 3 · La même journée comptée de trois façons donne trois chiffres : 39 voitures au cahier, 36 en caisse, 44 selon les laveurs. Avec un ticket ouvert à l’entrée et fermé au paiement, il n’en reste qu’un : 42 voitures, 42 paiements, 42 lignes de décompte. Dans l’exemple, six voitures lavées n’étaient pas encaissées, soit 4 800 DA par jour. Quantités et montants sont un exemple construit, pas des prix de marché.' },
    couches: { title: 'Un logiciel de lavage auto, en cinq couches', layers: [
      { label: 'Tickets', items: [{ name: 'Un ticket par voiture : plaque, formule, options, photos, baie, laveur, heures, paiement', sub: 'tout ce qui suit se calcule à partir de lui', accent: true }] },
      { label: 'File et réservations', items: [{ name: 'Créneaux réservés, file visible en direct, temps d’attente annoncé, message quand la voiture est prête', sub: 'le client choisit son heure au lieu de subir celle des autres' }] },
      { label: 'Clients et abonnements', items: [{ name: 'Fiche par plaque, carnets de lavages, abonnements, comptes de flotte avec relevé, fidélité', sub: 'la voiture est reconnue à la plaque, sans carte à présenter' }] },
      { label: 'Équipe', items: [{ name: 'Présence, voitures par laveur, décompte du jour à partir des tickets, pourboires notés à part', sub: 'chacun voit son décompte avant de partir' }] },
      { label: 'Pilotage', items: [{ name: 'Voitures par heure et par baie, recette par formule, clôture de caisse, produits consommés', sub: 'on sait quelle heure déborde et quelle formule rapporte' }] },
    ], caption: 'Figure 4 · La couche accentuée est celle des tickets : la file, les abonnements, le décompte des laveurs et la clôture de caisse ne sont que des lectures différentes de la même liste. Sans elle, chaque couche demande son propre cahier.', alt: 'Cinq couches : tickets (accentuée) ; file et réservations ; clients et abonnements ; équipe ; pilotage.' },
    modeles: { title: 'En station ou à domicile : six différences', columns: ['En station', 'À domicile, par application'], rows: [
      { label: 'Ce qui limite', cells: ['le nombre de baies aux heures de pointe', 'le temps de trajet entre deux clients'] },
      { label: 'Ce que le client réserve', cells: ['un créneau, ou une place dans la file', 'une adresse, une heure, une formule'] },
      { label: 'Ce qu’il faut suivre', cells: ['tickets, baies, caisse du jour', 'tournées, position, matériel et produits emportés'] },
      { label: 'Le paiement', cells: ['au comptoir, par abonnement ou sur compte', 'à la fin du lavage, ou sur le compte du client'] },
      { label: 'La preuve', cells: ['photos à l’entrée de la station', 'photos avant et après, sur place'] },
      { label: 'Le calcul', cells: ['voitures par heure et par baie', 'lavages par jour et par laveur'] },
    ], caption: 'Figure 5 · Les deux modèles partagent le ticket, la fiche par plaque et les abonnements, mais pas la contrainte : en station, c’est la baie ; à domicile, c’est le trajet. Dans l’exemple, un laveur mobile qui met 45 minutes par voiture et 25 minutes de trajet fait six à sept lavages par jour ; à 15 minutes de trajet, huit.', alt: 'Matrice de six différences entre le lavage en station et le lavage à domicile par application : ce qui limite, ce que le client réserve, ce qu’il faut suivre, le paiement, la preuve, le calcul.' },
    calendrier: { title: 'Une station équipée en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Formules et tickets', note: 'formules et options avec leurs prix, ticket ouvert à l’entrée sur tablette par la plaque, photos de l’état du véhicule', from: 0, to: 1, accent: true },
      { label: 'Caisse et laveurs', note: 'encaissement par ticket, décompte par laveur, clôture du jour, en parallèle du cahier pendant une semaine', from: 1, to: 2 },
      { label: 'Clients', note: 'fiche par plaque, carnets et abonnements, comptes de flotte avec relevé, message quand la voiture est prête', from: 2, to: 3 },
      { label: 'Réservation', note: 'créneaux, file visible en direct, application du client, formule de semaine pour déplacer le samedi', from: 3, to: 4 },
    ], caption: 'Figure 6 · Quatre semaines dans l’exemple. La semaine accentuée est la première : les formules et le ticket à l’entrée. Tant que chaque voiture n’a pas son ticket, ni la caisse, ni le décompte, ni la réservation ne peuvent être justes.', alt: 'Calendrier de quatre semaines : formules et tickets (accentué), caisse et laveurs, clients, réservation.' },
  },
  en: {
    cover: { eyebrow: 'Car wash · Algeria · 2027', title: ['Car wash software', 'one ticket per car'], subtitle: 'Saturday queue, a till that balances, washers’ count, subscriptions, fleets and washing at home', left: { label: 'Three figures', sub: 'the notebook, the till, the washers' }, right: { label: 'Only one', sub: 'one plate, one ticket, one payment' } },
    affluence: { caption: 'Figure 1 · A three-bay station, at twenty-five minutes per car, washes 7.2 cars an hour. On Saturday, 69 cars arrive for 57.6 places, 35 of them between 11 a.m. and 2 p.m. for 21.6 places: the queue grows and customers drive away. On Tuesday, 22 cars arrive and 62 % of the places stay empty. Arrivals and durations are a constructed example; the calculation can be redone with your own counts.' },
    passage: { title: 'One car through the station, in six steps', items: [
      { label: 'Welcome', sub: 'the plate typed in opens the ticket', accent: true },
      { label: 'Choose', sub: 'the package and options, price shown' },
      { label: 'Photograph', sub: 'four photos of the condition at entry' },
      { label: 'Wash', sub: 'bay and washer assigned, time measured' },
      { label: 'Take payment', sub: 'cash, subscription or company account' },
      { label: 'Notify', sub: 'message: your car is ready' },
    ], caption: 'Figure 2 · The accented step is the first: the registration plate typed in at entry opens a ticket, and everything else attaches to it, the package, the photos, the washer, the payment. The photos at entry settle in advance any discussion about a scratch; the closing message saves the customer from standing and waiting.', alt: 'Six steps: welcome (accented), choose, photograph, wash, take payment, notify.' },
    tickets: { caption: 'Figure 3 · The same day counted three ways gives three figures: 39 cars in the notebook, 36 in the till, 44 according to the washers. With a ticket opened at entry and closed at payment, only one remains: 42 cars, 42 payments, 42 lines in the count. In the example, six washed cars were not cashed, that is 4,800 DZD a day. Quantities and amounts are a constructed example, not market prices.' },
    couches: { title: 'Car wash software, in five layers', layers: [
      { label: 'Tickets', items: [{ name: 'One ticket per car: plate, package, options, photos, bay, washer, times, payment', sub: 'everything that follows is calculated from it', accent: true }] },
      { label: 'Queue and bookings', items: [{ name: 'Booked slots, queue visible live, waiting time announced, message when the car is ready', sub: 'the customer picks their time instead of enduring everyone else’s' }] },
      { label: 'Customers and plans', items: [{ name: 'Record per plate, wash booklets, subscriptions, fleet accounts with statement, loyalty', sub: 'the car is recognised by its plate, with no card to show' }] },
      { label: 'Team', items: [{ name: 'Attendance, cars per washer, daily count taken from the tickets, tips noted separately', sub: 'everyone sees their count before leaving' }] },
      { label: 'Steering', items: [{ name: 'Cars per hour and per bay, takings per package, till closing, products used', sub: 'you know which hour overflows and which package pays' }] },
    ], caption: 'Figure 4 · The accented layer is the tickets: the queue, the subscriptions, the washers’ count and the till closing are only different readings of the same list. Without it, every layer needs its own notebook.', alt: 'Five layers: tickets (accented); queue and bookings; customers and plans; team; steering.' },
    modeles: { title: 'At the station or at home: six differences', columns: ['At the station', 'At home, through an app'], rows: [
      { label: 'What limits you', cells: ['the number of bays at peak hours', 'the travel time between two customers'] },
      { label: 'What the customer books', cells: ['a slot, or a place in the queue', 'an address, a time, a package'] },
      { label: 'What has to be tracked', cells: ['tickets, bays, the day’s till', 'rounds, position, equipment and products carried'] },
      { label: 'Payment', cells: ['at the counter, by subscription or on account', 'at the end of the wash, or on the customer’s account'] },
      { label: 'The proof', cells: ['photos at the station entrance', 'photos before and after, on the spot'] },
      { label: 'The calculation', cells: ['cars per hour and per bay', 'washes per day and per washer'] },
    ], caption: 'Figure 5 · The two models share the ticket, the record per plate and the subscriptions, but not the constraint: at the station it is the bay; at home it is the journey. In the example, a mobile washer who takes 45 minutes per car and 25 minutes of travel does six to seven washes a day; with 15 minutes of travel, eight.', alt: 'Matrix of six differences between washing at the station and washing at home through an app: what limits you, what the customer books, what has to be tracked, payment, proof, calculation.' },
    calendrier: { title: 'A station equipped in 2027, in weeks', unit: 'wk', items: [
      { label: 'Packages and tickets', note: 'packages and options with their prices, ticket opened at entry on a tablet from the plate, photos of the vehicle’s condition', from: 0, to: 1, accent: true },
      { label: 'Till and washers', note: 'payment per ticket, count per washer, daily closing, alongside the notebook for one week', from: 1, to: 2 },
      { label: 'Customers', note: 'record per plate, booklets and subscriptions, fleet accounts with statement, message when the car is ready', from: 2, to: 3 },
      { label: 'Booking', note: 'slots, queue visible live, the customer’s app, a weekday offer to move Saturday', from: 3, to: 4 },
    ], caption: 'Figure 6 · Four weeks in the example. The accented week is the first: the packages and the ticket at entry. Until every car has its ticket, neither the till, nor the count, nor the booking can be right.', alt: 'Four-week calendar: packages and tickets (accented), till and washers, customers, booking.' },
  },
  ar: {
    cover: { eyebrow: 'غسل السيارات · الجزائر · 2027', title: ['برنامج غسل السيارات', 'تذكرة لكل سيارة'], subtitle: 'طابور السبت، صندوق يتوازن، حساب الغسّالين، الاشتراكات، الأساطيل والغسل في البيت', left: { label: 'ثلاثة أرقام', sub: 'الكرّاس، الصندوق، الغسّالون' }, right: { label: 'رقم واحد', sub: 'لوحة، تذكرة، ودفع' } },
    affluence: { caption: 'الشكل 1 · محطة من ثلاثة أروقة، بخمس وعشرين دقيقة للسيارة، تغسل 7,2 سيارة في الساعة. يوم السبت تأتي 69 سيارة مقابل 57,6 مكاناً، منها 35 بين الحادية عشرة والثانية مقابل 21,6 مكاناً: الطابور يطول وزبائن يغادرون. ويوم الثلاثاء تأتي 22 سيارة ويبقى 62 بالمئة من الأماكن فارغاً. الوافدون والمدد مثال مركَّب؛ أما الحساب فيُعاد بعدّكم أنتم.' },
    passage: { title: 'مرور سيارة، في ست مراحل', items: [
      { label: 'الاستقبال', sub: 'إدخال اللوحة يفتح التذكرة', accent: true },
      { label: 'الاختيار', sub: 'الصيغة والإضافات، والسعر معروض' },
      { label: 'التصوير', sub: 'أربع صور لحالة السيارة عند الدخول' },
      { label: 'الغسل', sub: 'رواق وغسّال معيَّنان، ومدة مقاسة' },
      { label: 'القبض', sub: 'نقداً، باشتراك أو على حساب شركة' },
      { label: 'الإشعار', sub: 'رسالة: سيارتكم جاهزة' },
    ], caption: 'الشكل 2 · المرحلة المبرزة هي الأولى: لوحة الترقيم المدخَلة عند الدخول تفتح تذكرة، وكل الباقي يُربط بها، الصيغة والصور والغسّال والدفع. والصور عند الدخول تحسم مسبقاً النقاش حول خدش؛ ورسالة النهاية تجنّب الزبون الانتظار واقفاً.', alt: 'ست مراحل: الاستقبال (مبرزة)، الاختيار، التصوير، الغسل، القبض، الإشعار.' },
    tickets: { caption: 'الشكل 3 · اليوم نفسه محسوباً بثلاث طرق يعطي ثلاثة أرقام: 39 سيارة في الكرّاس، 36 في الصندوق، و44 حسب الغسّالين. وبتذكرة تُفتح عند الدخول وتُغلق عند الدفع، لا يبقى إلا رقم واحد: 42 سيارة، 42 دفعاً، و42 سطراً في الحساب. في المثال، ست سيارات غُسلت ولم تُقبَض، أي 4800 دج في اليوم. الكميات والمبالغ مثال مركَّب، وليست أسعار السوق.' },
    couches: { title: 'برنامج غسل السيارات، في خمس طبقات', layers: [
      { label: 'التذاكر', items: [{ name: 'تذكرة لكل سيارة: اللوحة، الصيغة، الإضافات، الصور، الرواق، الغسّال، الساعات، والدفع', sub: 'كل ما يليها يُحسب انطلاقاً منها', accent: true }] },
      { label: 'الطابور والحجز', items: [{ name: 'مواعيد محجوزة، طابور يُرى مباشرة، وقت انتظار معلَن، ورسالة حين تجهز السيارة', sub: 'الزبون يختار ساعته بدل أن يتحمّل ساعة الآخرين' }] },
      { label: 'الزبائن والاشتراكات', items: [{ name: 'بطاقة لكل لوحة، دفاتر غسلات، اشتراكات، حسابات أساطيل بكشف، ووفاء', sub: 'السيارة تُعرَف بلوحتها، دون بطاقة تُقدَّم' }] },
      { label: 'الفريق', items: [{ name: 'الحضور، السيارات لكل غسّال، حساب اليوم من التذاكر، والإكراميات تُسجَّل على حدة', sub: 'كل واحد يرى حسابه قبل أن يغادر' }] },
      { label: 'القيادة', items: [{ name: 'السيارات في الساعة ولكل رواق، المداخيل لكل صيغة، إقفال الصندوق، والمواد المستهلَكة', sub: 'نعرف أي ساعة تفيض وأي صيغة تدرّ' }] },
    ], caption: 'الشكل 4 · الطبقة المبرزة هي التذاكر: الطابور والاشتراكات وحساب الغسّالين وإقفال الصندوق ليست إلا قراءات مختلفة للقائمة نفسها. ومن دونها، كل طبقة تحتاج كرّاسها.', alt: 'خمس طبقات: التذاكر (مبرزة)؛ الطابور والحجز؛ الزبائن والاشتراكات؛ الفريق؛ القيادة.' },
    modeles: { title: 'في المحطة أم في البيت: ستة فروق', columns: ['في المحطة', 'في البيت، عبر تطبيق'], rows: [
      { label: 'ما يحدّ', cells: ['عدد الأروقة في ساعات الذروة', 'وقت التنقل بين زبونين'] },
      { label: 'ما يحجزه الزبون', cells: ['موعد، أو مكان في الطابور', 'عنوان، ساعة، وصيغة'] },
      { label: 'ما يجب متابعته', cells: ['التذاكر، الأروقة، وصندوق اليوم', 'الجولات، الموقع، والعتاد والمواد المحمولة'] },
      { label: 'الدفع', cells: ['في المحطة، باشتراك أو على حساب', 'عند نهاية الغسل، أو على حساب الزبون'] },
      { label: 'الدليل', cells: ['صور عند مدخل المحطة', 'صور قبل وبعد، في عين المكان'] },
      { label: 'الحساب', cells: ['السيارات في الساعة ولكل رواق', 'الغسلات في اليوم ولكل غسّال'] },
    ], caption: 'الشكل 5 · النموذجان يتقاسمان التذكرة والبطاقة لكل لوحة والاشتراكات، لكن لا يتقاسمان القيد: في المحطة هو الرواق؛ وفي البيت هو التنقل. في المثال، غسّال متنقل يأخذ 45 دقيقة للسيارة و25 دقيقة تنقلاً ينجز ست إلى سبع غسلات في اليوم؛ وبـ 15 دقيقة تنقلاً، ثمانٍ.', alt: 'مصفوفة ستة فروق بين الغسل في المحطة والغسل في البيت عبر تطبيق: ما يحدّ، ما يحجزه الزبون، ما يجب متابعته، الدفع، الدليل، الحساب.' },
    calendrier: { title: 'محطة مجهَّزة سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'الصيغ والتذاكر', note: 'الصيغ والإضافات بأسعارها، تذكرة تُفتح عند الدخول على لوح رقمي باللوحة، وصور حالة السيارة', from: 0, to: 1, accent: true },
      { label: 'الصندوق والغسّالون', note: 'القبض لكل تذكرة، حساب لكل غسّال، إقفال اليوم، بالتوازي مع الكرّاس مدة أسبوع', from: 1, to: 2 },
      { label: 'الزبائن', note: 'بطاقة لكل لوحة، دفاتر واشتراكات، حسابات أساطيل بكشف، ورسالة حين تجهز السيارة', from: 2, to: 3 },
      { label: 'الحجز', note: 'مواعيد، طابور يُرى مباشرة، تطبيق الزبون، وعرض لأيام الأسبوع لنقل السبت', from: 3, to: 4 },
    ], caption: 'الشكل 6 · أربعة أسابيع في المثال. الأسبوع المبرز هو الأول: الصيغ والتذكرة عند الدخول. وما لم تكن لكل سيارة تذكرتها، لا الصندوق ولا الحساب ولا الحجز يمكن أن تكون صحيحة.', alt: 'تقويم أربعة أسابيع: الصيغ والتذاكر (مبرز)، الصندوق والغسّالون، الزبائن، الحجز.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      affluence: { svg: affluence(e.affluence, rtl), caption: t.affluence.caption, alt: e.affluence.alt },
      passage: { svg: steps({ title: t.passage.title, steps: t.passage.items, arrows: true, rtl }), caption: t.passage.caption, alt: t.passage.alt },
      tickets: { svg: tickets(e.tickets, rtl), caption: t.tickets.caption, alt: e.tickets.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      modeles: { svg: matrix({ title: t.modeles.title, columns: t.modeles.columns, rows: t.modeles.rows, rtl }), caption: t.modeles.caption, alt: t.modeles.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 4, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
