import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { goulot, parcours, STRINGS as SC } from './custom/borne.mjs';
export const slug = 'borne-de-commande-restaurant-algerie-2027-menu-qr-code-commande-a-emporter-file-d-attente-paiement-especes-ecran-cuisine-numero-d-appel';
const T = {
  fr: {
    cover: { eyebrow: 'Borne de commande · restaurant · Algérie · 2027', title: ['Borne de commande et menu QR', 'la file à midi, la cuisine derrière'], subtitle: 'Où se forme la file, combien de bornes, payer en espèces, écran de cuisine, numéro d’appel', left: { label: 'Une seule caisse', sub: '48 commandes par heure' }, right: { label: 'Caisse et bornes', sub: '90 : la cuisine décide' } },
    goulot: { caption: 'Figure 1 · Une heure de pointe où cent clients veulent commander. Avec une seule caisse à 75 secondes par commande, on en prend 48 : la cuisine, qui pourrait en sortir 90, attend. Avec trois bornes en plus, la prise de commande monte à 138 et dépasse la cuisine : on sert 90 commandes, et l’attente passe de la file debout à la table. Durées et capacités sont un exemple construit.' },
    canaux: { title: 'Cinq façons de commander, et ce qu’il faut derrière chacune', columns: ['Pour quel service', 'Ce qu’il faut derrière'], rows: [
      { label: 'Borne sur place', cells: ['restauration rapide, forte affluence à heures fixes', 'écran de cuisine, numéro d’appel, point de paiement en espèces'] },
      { label: 'Menu QR à table', cells: ['service à table, terrasse, café, salon de thé', 'page web rapide, numéro de table dans le code, addition à la fin'] },
      { label: 'Commande à emporter depuis le téléphone', cells: ['habitués, bureaux et commerces voisins', 'créneau de retrait, numéro confirmé, règle pour les commandes non retirées'] },
      { label: 'Caisse au comptoir', cells: ['clients pressés, indécis, ou qui préfèrent parler à quelqu’un', 'même menu, même numérotation, même écran de cuisine'] },
      { label: 'Livraison', cells: ['soirs et week-ends, plateformes ou livreurs du restaurant', 'arrive sur le même écran de cuisine, avec son heure de départ'] },
    ], caption: 'Figure 2 · Cinq entrées pour une même cuisine. La borne convient à l’affluence à heures fixes, le menu QR au service à table, la commande à emporter aux habitués. Aucune ne remplace la caisse, qui reste ouverte. Ce qui les réunit : un seul menu, une seule numérotation, un seul écran de cuisine.', alt: 'Matrice de cinq façons de commander, avec le service auquel chacune convient et ce qu’il faut derrière : borne sur place, menu QR à table, commande à emporter depuis le téléphone, caisse au comptoir, livraison.' },
    couches: { title: 'Ce qu’il y a derrière l’écran, en cinq couches', layers: [
      { label: 'Menu', items: [{ name: 'Un seul catalogue : produits, options, suppléments, prix, photos, français et arabe, ruptures', sub: 'modifié une fois, juste partout' }] },
      { label: 'Commande', items: [{ name: 'Borne, menu QR, téléphone, caisse, livraison : une seule file, un numéro par commande', sub: 'personne ne recopie une commande' }] },
      { label: 'Paiement', items: [{ name: 'Espèces au point de paiement, carte à la borne ou au comptoir, addition en fin de repas à table', sub: 'la commande part en cuisine quand elle est réglée ou validée' }] },
      { label: 'Cuisine', items: [{ name: 'Écran par poste, ordre d’arrivée, minuteur, « prêt » d’un geste, écran d’appel des numéros', sub: 'c’est elle qui fixe ce que le restaurant sert par heure', accent: true }] },
      { label: 'Pilotage', items: [{ name: 'Ventes par heure et par canal, temps de préparation, ruptures, clôture de caisse', sub: 'on sait où se forme la file, et à quelle heure' }] },
    ], caption: 'Figure 3 · La couche accentuée est la cuisine : c’est elle qui fixe le débit une fois la prise de commande libérée. Le menu est unique, la file de commandes aussi ; le paiement décide du moment où une commande part au grill ; le pilotage dit à quelle heure la file se forme.', alt: 'Cinq couches : menu ; commande ; paiement ; cuisine (accentuée) ; pilotage.' },
    parcours: { caption: 'Figure 4 · La commande n° 47 traverse quatre écrans sans être recopiée. Payée en espèces, elle ne part en cuisine qu’au moment du règlement ; payée par carte à la borne, elle y va directement. Un produit épuisé se retire d’un geste et quitte tous les écrans. Schéma de principe d’un exemple construit.' },
    etapes: { title: 'Mettre en place, dans cet ordre', items: [
      { label: 'Mesurer', sub: 'dix commandes, dix plats, la file à midi', accent: true },
      { label: 'Simplifier le menu', sub: 'options claires, photos, deux langues' },
      { label: 'Équiper la cuisine', sub: 'écran par poste, numéro d’appel' },
      { label: 'Ouvrir un canal', sub: 'la borne ou le QR, sur un seul service' },
      { label: 'Garder la caisse', sub: 'ouverte, sur le même menu' },
      { label: 'Régler', sub: 'chaque semaine, d’après les chiffres' },
    ], caption: 'Figure 5 · Le temps accentué est le premier : mesurer. La cuisine s’équipe avant la salle, parce qu’une borne branchée sur une cuisine à tickets ne fait que remplir le passe plus vite. Un canal s’ouvre à la fois, sur un seul service, et la caisse reste ouverte.', alt: 'Six temps : mesurer (accentué), simplifier le menu, équiper la cuisine, ouvrir un canal, garder la caisse, régler.' },
    calendrier: { title: 'Huit semaines, de la mesure à l’ouverture', unit: 'sem.', items: [
      { label: 'Mesurer et cadrer', note: 'chronométrage à la caisse et en cuisine, comptage de la file à midi, choix des canaux, nombre de points de commande', from: 0, to: 1 },
      { label: 'Menu et parcours', note: 'catalogue unique, options, photos, français et arabe, parcours de commande essayé avec de vrais clients', from: 1, to: 3 },
      { label: 'Cuisine et appel', note: 'écran par poste, minuteur, écran d’appel, branchement à la caisse, fonctionnement sans internet', from: 2, to: 5, accent: true },
      { label: 'Premier canal en service', note: 'la borne ou le menu QR sur un seul service, un employé à côté, corrections chaque soir', from: 5, to: 7 },
      { label: 'Ouverture et réglages', note: 'tous les services, deuxième canal, premiers chiffres par heure, réglage du nombre de points de commande', from: 7, to: 8 },
    ], caption: 'Figure 6 · Huit semaines dans l’exemple. La période accentuée est la cuisine : trois semaines pour l’écran par poste, l’écran d’appel et le branchement à la caisse, commencées pendant que le menu se construit. La borne n’arrive en salle qu’à la sixième semaine. Durées indicatives d’un exemple construit.', alt: 'Calendrier de huit semaines : mesurer et cadrer, menu et parcours, cuisine et appel (accentué, trois semaines), premier canal en service, ouverture et réglages.' },
  },
  en: {
    cover: { eyebrow: 'Ordering kiosk · restaurant · Algeria · 2027', title: ['Ordering kiosk and QR menu', 'the lunch queue, the kitchen behind'], subtitle: 'Where the queue forms, how many kiosks, paying in cash, kitchen screen, call number', left: { label: 'A single till', sub: '48 orders an hour' }, right: { label: 'Till and kiosks', sub: '90: the kitchen decides' } },
    goulot: { caption: 'Figure 1 · A peak hour in which a hundred customers want to order. With a single till at 75 seconds per order, 48 are taken: the kitchen, which could turn out 90, waits. With three kiosks added, order taking rises to 138 and overtakes the kitchen: 90 orders are served, and the wait moves from the standing queue to the table. Durations and capacities are a constructed example.' },
    canaux: { title: 'Five ways to order, and what each needs behind it', columns: ['For which service', 'What it needs behind it'], rows: [
      { label: 'Kiosk on site', cells: ['quick service, heavy traffic at fixed hours', 'kitchen screen, call number, a pay point for cash'] },
      { label: 'QR menu at the table', cells: ['table service, terrace, café, tea room', 'fast web page, table number in the code, bill at the end'] },
      { label: 'Take-away order from the phone', cells: ['regulars, neighbouring offices and shops', 'pick-up slot, confirmed number, a rule for orders not collected'] },
      { label: 'Till at the counter', cells: ['customers in a hurry, undecided, or who prefer talking to someone', 'same menu, same numbering, same kitchen screen'] },
      { label: 'Delivery', cells: ['evenings and weekends, platforms or the restaurant’s own riders', 'arrives on the same kitchen screen, with its departure time'] },
    ], caption: 'Figure 2 · Five ways in to the same kitchen. The kiosk suits traffic at fixed hours, the QR menu suits table service, the take-away order suits regulars. None replaces the till, which stays open. What unites them: a single menu, a single numbering, a single kitchen screen.', alt: 'Matrix of five ways to order, with the service each suits and what it needs behind it: kiosk on site, QR menu at the table, take-away order from the phone, till at the counter, delivery.' },
    couches: { title: 'What is behind the screen, in five layers', layers: [
      { label: 'Menu', items: [{ name: 'One catalogue: items, options, extras, prices, photos, French and Arabic, sold-out items', sub: 'changed once, right everywhere' }] },
      { label: 'Order', items: [{ name: 'Kiosk, QR menu, phone, till, delivery: a single queue, one number per order', sub: 'nobody copies an order' }] },
      { label: 'Payment', items: [{ name: 'Cash at the pay point, card at the kiosk or the counter, the bill at the end of the meal at the table', sub: 'the order goes to the kitchen when it is paid or confirmed' }] },
      { label: 'Kitchen', items: [{ name: 'Screen per station, order of arrival, timer, “ready” in one tap, call screen for the numbers', sub: 'it sets what the restaurant serves per hour', accent: true }] },
      { label: 'Steering', items: [{ name: 'Sales per hour and per channel, preparation times, sold-out items, till closing', sub: 'you know where the queue forms, and at what time' }] },
    ], caption: 'Figure 3 · The accented layer is the kitchen: it sets the throughput once order taking is freed. The menu is single, so is the queue of orders; payment decides the moment an order goes to the grill; steering tells you at what time the queue forms.', alt: 'Five layers: menu; order; payment; kitchen (accented); steering.' },
    parcours: { caption: 'Figure 4 · Order no. 47 crosses four screens without being copied. Paid in cash, it only goes to the kitchen at the moment of payment; paid by card at the kiosk, it goes there directly. A sold-out item is removed in one tap and leaves every screen. Schematic of a constructed example.' },
    etapes: { title: 'Putting it in place, in this order', items: [
      { label: 'Measure', sub: 'ten orders, ten dishes, the queue at noon', accent: true },
      { label: 'Simplify the menu', sub: 'clear options, photos, two languages' },
      { label: 'Equip the kitchen', sub: 'screen per station, call number' },
      { label: 'Open one channel', sub: 'the kiosk or the QR, on a single shift' },
      { label: 'Keep the till', sub: 'open, on the same menu' },
      { label: 'Adjust', sub: 'every week, from the figures' },
    ], caption: 'Figure 5 · The accented step is the first: measure. The kitchen is equipped before the dining room, because a kiosk plugged into a kitchen run on paper tickets only fills the pass faster. One channel opens at a time, on a single shift, and the till stays open.', alt: 'Six steps: measure (accented), simplify the menu, equip the kitchen, open one channel, keep the till, adjust.' },
    calendrier: { title: 'Eight weeks, from measuring to opening', unit: 'wk', items: [
      { label: 'Measure and scope', note: 'timing at the till and in the kitchen, counting the queue at noon, choice of channels, number of ordering points', from: 0, to: 1 },
      { label: 'Menu and journey', note: 'single catalogue, options, photos, French and Arabic, ordering journey tried with real customers', from: 1, to: 3 },
      { label: 'Kitchen and call', note: 'screen per station, timer, call screen, connection to the till, running without the internet', from: 2, to: 5, accent: true },
      { label: 'First channel in service', note: 'the kiosk or the QR menu on a single shift, a staff member alongside, corrections every evening', from: 5, to: 7 },
      { label: 'Opening and tuning', note: 'every shift, second channel, first figures per hour, tuning the number of ordering points', from: 7, to: 8 },
    ], caption: 'Figure 6 · Eight weeks in the example. The accented period is the kitchen: three weeks for the screen per station, the call screen and the connection to the till, started while the menu is being built. The kiosk only reaches the dining room in the sixth week. Indicative durations from a constructed example.', alt: 'Eight-week calendar: measure and scope, menu and journey, kitchen and call (accented, three weeks), first channel in service, opening and tuning.' },
  },
  ar: {
    cover: { eyebrow: 'كشك الطلب · مطعم · الجزائر · 2027', title: ['كشك الطلب وقائمة QR', 'طابور منتصف النهار، والمطبخ وراءه'], subtitle: 'أين يتشكّل الطابور، كم كشكاً، الدفع نقداً، شاشة المطبخ، ورقم النداء', left: { label: 'صندوق واحد', sub: '48 طلبية في الساعة' }, right: { label: 'الصندوق والأكشاك', sub: '90: المطبخ يقرّر' } },
    goulot: { caption: 'الشكل 1 · ساعة ذروة يريد فيها مئة زبون أن يطلبوا. بصندوق واحد يأخذ 75 ثانية لكل طلبية، تُؤخذ 48: والمطبخ، الذي يستطيع إخراج 90، ينتظر. وبثلاثة أكشاك إضافية، يرتفع أخذ الطلبات إلى 138 ويتجاوز المطبخ: تُخدَم 90 طلبية، وينتقل الانتظار من الطابور وقوفاً إلى الطاولة. المدد والطاقات مثال مركَّب.' },
    canaux: { title: 'خمس طرق للطلب، وما يلزم وراء كل واحدة', columns: ['لأي خدمة', 'ما يلزم وراءها'], rows: [
      { label: 'كشك في المحل', cells: ['مطعم سريع، وإقبال قوي في ساعات ثابتة', 'شاشة مطبخ، رقم نداء، ونقطة دفع نقداً'] },
      { label: 'قائمة QR على الطاولة', cells: ['خدمة على الطاولة، شرفة، مقهى، صالون شاي', 'صفحة ويب سريعة، رقم الطاولة في الرمز، والحساب في النهاية'] },
      { label: 'طلبية للأخذ من الهاتف', cells: ['الزبائن المعتادون، المكاتب والمحلات المجاورة', 'موعد استلام، رقم مؤكَّد، وقاعدة للطلبيات غير المستلَمة'] },
      { label: 'الصندوق عند المنضدة', cells: ['زبائن مستعجلون، متردّدون، أو يفضّلون الحديث إلى شخص', 'القائمة نفسها، الترقيم نفسه، وشاشة المطبخ نفسها'] },
      { label: 'التوصيل', cells: ['المساء ونهاية الأسبوع، منصات أو موصِّلو المطعم', 'تصل إلى شاشة المطبخ نفسها، مع ساعة انطلاقها'] },
    ], caption: 'الشكل 2 · خمسة مداخل لمطبخ واحد. الكشك يناسب الإقبال في ساعات ثابتة، وقائمة QR تناسب الخدمة على الطاولة، والطلبية للأخذ تناسب المعتادين. ولا واحدة تعوّض الصندوق، الذي يبقى مفتوحاً. وما يجمعها: قائمة واحدة، ترقيم واحد، وشاشة مطبخ واحدة.', alt: 'مصفوفة خمس طرق للطلب، مع الخدمة التي تناسبها كل واحدة وما يلزم وراءها: كشك في المحل، قائمة QR على الطاولة، طلبية للأخذ من الهاتف، الصندوق عند المنضدة، والتوصيل.' },
    couches: { title: 'ما يوجد وراء الشاشة، في خمس طبقات', layers: [
      { label: 'القائمة', items: [{ name: 'فهرس واحد: المنتَجات، الخيارات، الإضافات، الأسعار، الصور، الفرنسية والعربية، وما نفد', sub: 'يُعدَّل مرة واحدة، فيصحّ في كل مكان' }] },
      { label: 'الطلبية', items: [{ name: 'كشك، قائمة QR، هاتف، صندوق، توصيل: طابور واحد، ورقم لكل طلبية', sub: 'لا أحد ينسخ طلبية' }] },
      { label: 'الدفع', items: [{ name: 'نقداً عند نقطة الدفع، بالبطاقة على الكشك أو المنضدة، والحساب في نهاية الوجبة على الطاولة', sub: 'الطلبية تذهب إلى المطبخ حين تُسدَّد أو تُؤكَّد' }] },
      { label: 'المطبخ', items: [{ name: 'شاشة لكل محطة، ترتيب الوصول، مؤقِّت، «جاهز» بحركة، وشاشة نداء الأرقام', sub: 'هو الذي يحدّد ما يخدمه المطعم في الساعة', accent: true }] },
      { label: 'القيادة', items: [{ name: 'المبيعات بالساعة وبالقناة، مدد التحضير، ما نفد، وإقفال الصندوق', sub: 'نعرف أين يتشكّل الطابور، وفي أي ساعة' }] },
    ], caption: 'الشكل 3 · الطبقة المبرزة هي المطبخ: هو الذي يحدّد التدفق حالما يتحرر أخذ الطلبات. القائمة واحدة، وطابور الطلبيات كذلك؛ والدفع يقرّر اللحظة التي تذهب فيها الطلبية إلى الشواية؛ والقيادة تقول في أي ساعة يتشكّل الطابور.', alt: 'خمس طبقات: القائمة؛ الطلبية؛ الدفع؛ المطبخ (مبرزة)؛ القيادة.' },
    parcours: { caption: 'الشكل 4 · الطلبية رقم 47 تعبر أربع شاشات دون أن تُنسخ. مدفوعةً نقداً، لا تذهب إلى المطبخ إلا لحظة التسديد؛ ومدفوعةً بالبطاقة على الكشك، تذهب إليه مباشرة. والمنتَج الذي نفد يُسحب بحركة ويغادر كل الشاشات. مخطط مبدئي لمثال مركَّب.' },
    etapes: { title: 'الوضع في الخدمة، بهذا الترتيب', items: [
      { label: 'القياس', sub: 'عشر طلبيات، عشرة أطباق، وطابور منتصف النهار', accent: true },
      { label: 'تبسيط القائمة', sub: 'خيارات واضحة، صور، ولغتان' },
      { label: 'تجهيز المطبخ', sub: 'شاشة لكل محطة، ورقم نداء' },
      { label: 'فتح قناة واحدة', sub: 'الكشك أو QR، في خدمة واحدة' },
      { label: 'إبقاء الصندوق', sub: 'مفتوحاً، على القائمة نفسها' },
      { label: 'الضبط', sub: 'كل أسبوع، حسب الأرقام' },
    ], caption: 'الشكل 5 · المرحلة المبرزة هي الأولى: القياس. والمطبخ يُجهَّز قبل القاعة، لأن كشكاً موصولاً بمطبخ يعمل بالتذاكر الورقية لا يفعل إلا ملء المنضدة أسرع. وتُفتح قناة واحدة في كل مرة، في خدمة واحدة، والصندوق يبقى مفتوحاً.', alt: 'ست مراحل: القياس (مبرزة)، تبسيط القائمة، تجهيز المطبخ، فتح قناة واحدة، إبقاء الصندوق، الضبط.' },
    calendrier: { title: 'ثمانية أسابيع، من القياس إلى الفتح', unit: 'أسبوع', items: [
      { label: 'القياس والتأطير', note: 'قياس الزمن عند الصندوق وفي المطبخ، عدّ الطابور في منتصف النهار، اختيار القنوات، وعدد نقاط الطلب', from: 0, to: 1 },
      { label: 'القائمة والمسار', note: 'فهرس واحد، خيارات، صور، الفرنسية والعربية، ومسار طلب يُجرَّب مع زبائن حقيقيين', from: 1, to: 3 },
      { label: 'المطبخ والنداء', note: 'شاشة لكل محطة، مؤقِّت، شاشة نداء، ربط بالصندوق، والعمل دون إنترنت', from: 2, to: 5, accent: true },
      { label: 'أول قناة في الخدمة', note: 'الكشك أو قائمة QR في خدمة واحدة، عامل بجانبه، وتصحيحات كل مساء', from: 5, to: 7 },
      { label: 'الفتح والضبط', note: 'كل الخدمات، قناة ثانية، أولى الأرقام بالساعة، وضبط عدد نقاط الطلب', from: 7, to: 8 },
    ], caption: 'الشكل 6 · ثمانية أسابيع في المثال. الفترة المبرزة هي المطبخ: ثلاثة أسابيع لشاشة كل محطة، شاشة النداء والربط بالصندوق، تبدأ والقائمة تُبنى. والكشك لا يصل إلى القاعة إلا في الأسبوع السادس. مدد تقريبية لمثال مركَّب.', alt: 'تقويم ثمانية أسابيع: القياس والتأطير، القائمة والمسار، المطبخ والنداء (مبرزة، ثلاثة أسابيع)، أول قناة في الخدمة، الفتح والضبط.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      goulot: { svg: goulot(e.goulot, rtl), caption: t.goulot.caption, alt: e.goulot.alt },
      canaux: { svg: matrix({ title: t.canaux.title, columns: t.canaux.columns, rows: t.canaux.rows, rtl }), caption: t.canaux.caption, alt: t.canaux.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      parcours: { svg: parcours(e.parcours, rtl), caption: t.parcours.caption, alt: e.parcours.alt },
      etapes: { svg: steps({ title: t.etapes.title, steps: t.etapes.items, arrows: true, rtl }), caption: t.etapes.caption, alt: t.etapes.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 8, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
