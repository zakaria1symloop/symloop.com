import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { arbre, plan, STRINGS as SC } from './custom/wifi.mjs';
export const slug = 'wifi-qui-coupe-au-bureau-entreprise-algerie-2027-internet-qui-se-coupe-souvent-la-ligne-ou-le-wifi-couverture-bornes-canaux-itinerance';
const T = {
  fr: {
    cover: { eyebrow: 'Wi-Fi qui coupe · bureau · Algérie · 2027', title: ['Le Wi-Fi coupe au bureau', 'la ligne, ou le Wi-Fi ?'], subtitle: 'Un poste câblé pour trancher, un relevé des coupures, le signal pièce par pièce, des bornes câblées', left: { label: 'Un seul boîtier', sub: '−84 dBm en salle de réunion' }, right: { label: 'Trois bornes câblées', sub: 'six pièces au-dessus du repère' } },
    ordre: { title: 'Diagnostiquer dans cet ordre', items: [
      { label: 'Tester en câblé', sub: 'un poste relié au boîtier, une journée', accent: true },
      { label: 'Noter', sub: 'chaque coupure : heure, pièce, appareil' },
      { label: 'Mesurer', sub: 'le signal, pièce par pièce' },
      { label: 'Corriger', sub: 'la ligne, les bornes ou les réglages' },
      { label: 'Séparer', sub: 'invités à part, caisses sur câble' },
      { label: 'Remesurer', sub: 'une semaine après, mêmes relevés' },
    ], caption: 'Figure 1 · Le temps accentué est le premier : un poste relié au boîtier par un câble, pendant une journée. C’est lui qui dit si la panne est avant le Wi-Fi ou dans le Wi-Fi. Rien ne s’achète avant le troisième temps ; le sixième vérifie que la correction a servi.', alt: 'Six temps : tester en câblé (accentué), noter, mesurer, corriger, séparer, remesurer.' },
    arbre: { caption: 'Figure 2 · Trois questions, dans l’ordre. Un poste câblé qui coupe aussi désigne la ligne ou le boîtier. Sinon, des coupures limitées à certaines pièces désignent la couverture ; des coupures partout désignent la saturation aux heures chargées, ou l’itinérance quand on se déplace. Arbre de principe d’un exemple construit.' },
    plan: { caption: 'Figure 3 · Le même étage de six pièces. Avec un boîtier dans l’entrée, la salle de réunion est à −84 dBm, le dépôt à −81 et la comptabilité à −70 : trois pièces sous le repère d’usage courant de −67 dBm. Avec trois bornes câblées au plafond, toutes sont entre −49 et −56. Valeurs inventées pour un exemple construit.' },
    causes: { title: 'Six causes, à quoi on les reconnaît, ce qu’on fait', columns: ['À quoi on la reconnaît', 'Ce qu’on fait'], rows: [
      { label: 'La ligne ou le boîtier', cells: ['tout coupe en même temps, poste câblé compris', 'relevé envoyé à l’opérateur, boîtier protégé ou remplacé, lien de secours'] },
      { label: 'La couverture', cells: ['toujours les mêmes pièces, signal faible', 'bornes câblées au plafond, placées d’après une mesure'] },
      { label: 'Trop d’appareils sur une borne', cells: ['coupures aux heures chargées, en réunion', 'une borne de plus, bande des 5 GHz, appareils répartis'] },
      { label: 'Un canal encombré', cells: ['débit instable, pire quand les voisins sont là', 'canaux sans chevauchement, 5 GHz, puissance réduite'] },
      { label: 'Des adresses épuisées ou en conflit', cells: ['« connecté, pas d’internet », surtout le matin', 'plage d’adresses élargie, prêt plus court pour les invités'] },
      { label: 'L’itinérance', cells: ['coupure en marchant, en plein appel', 'même nom de réseau, mêmes réglages, itinérance rapide'] },
    ], caption: 'Figure 4 · Six causes, de la plus en amont à la plus fine. Chacune a une signature : un moment, un lieu, un message. C’est pourquoi le relevé des coupures vaut plus qu’un achat : il dit laquelle des six vous avez.', alt: 'Matrice de six causes de coupures, avec leur signature et le remède : ligne ou boîtier, couverture, trop d’appareils, canal encombré, adresses épuisées ou en conflit, itinérance.' },
    couches: { title: 'Un réseau qui ne coupe pas, en cinq couches', layers: [
      { label: 'Ligne', items: [{ name: 'Un lien principal, un lien de secours d’un autre opérateur, bascule automatique, boîtier sur onduleur', sub: 'la coupure de l’opérateur ne s’entend plus' }] },
      { label: 'Câblage', items: [{ name: 'Un câble par borne jusqu’à la baie, courant fourni par le câble, aucune borne reliée en Wi-Fi', sub: 'une borne vaut ce que vaut son câble' }] },
      { label: 'Bornes', items: [{ name: 'Nombre et emplacement d’après une mesure, au plafond, une par zone, pas de répéteur', sub: 'chaque pièce au-dessus du repère', accent: true }] },
      { label: 'Réglages', items: [{ name: 'Canaux sans chevauchement, 5 GHz en priorité, puissance ajustée, itinérance rapide, adresses suffisantes', sub: 'les bornes s’entendent au lieu de se gêner' }] },
      { label: 'Séparation', items: [{ name: 'Invités sur leur réseau, caisses et postes fixes sur câble, imprimantes à adresse fixe', sub: 'ce qui doit tenir ne dépend pas du Wi-Fi' }] },
    ], caption: 'Figure 5 · La couche accentuée est celle des bornes : leur nombre et leur place, décidés d’après une mesure. Mais elle ne tient que sur les deux premières, une ligne doublée et un câble par borne, et ne donne son plein effet qu’avec les deux dernières.', alt: 'Cinq couches : ligne ; câblage ; bornes (accentuée) ; réglages ; séparation.' },
    calendrier: { title: 'Quatre semaines, du premier test au second relevé', unit: 'sem.', items: [
      { label: 'Test câblé et relevé', note: 'un poste câblé une journée, chaque coupure notée une semaine, signal mesuré pièce par pièce', from: 0, to: 1, accent: true },
      { label: 'Ligne et boîtier', note: 'relevé transmis à l’opérateur, boîtier protégé ou remplacé, lien de secours étudié', from: 1, to: 2 },
      { label: 'Câbles et bornes', note: 'un câble par borne, emplacements d’après la mesure, pose au plafond', from: 1, to: 3 },
      { label: 'Réglages et séparation', note: 'canaux, puissance, itinérance, réseau invités, caisses et postes fixes sur câble', from: 2, to: 3 },
      { label: 'Second relevé', note: 'mêmes feuilles, mêmes mesures, comparaison avec la première semaine', from: 3, to: 4 },
    ], caption: 'Figure 6 · Quatre semaines dans l’exemple. La période accentuée est la première : un test et un relevé, sans rien acheter. La quatrième refait les mêmes mesures : on sait alors ce que la correction a changé. Durées indicatives d’un exemple construit.', alt: 'Calendrier de quatre semaines : test câblé et relevé (accentué, une semaine), ligne et boîtier, câbles et bornes, réglages et séparation, second relevé.' },
  },
  en: {
    cover: { eyebrow: 'Wi-Fi dropping · office · Algeria · 2027', title: ['The Wi-Fi keeps dropping', 'the line, or the Wi-Fi?'], subtitle: 'A wired computer to settle it, a log of the drops, the signal room by room, wired access points', left: { label: 'A single box', sub: '−84 dBm in the meeting room' }, right: { label: 'Three wired points', sub: 'six rooms above the reference' } },
    ordre: { title: 'Diagnose in this order', items: [
      { label: 'Test on a cable', sub: 'a computer wired to the box, for a day', accent: true },
      { label: 'Note', sub: 'every drop: time, room, device' },
      { label: 'Measure', sub: 'the signal, room by room' },
      { label: 'Fix', sub: 'the line, the access points or the settings' },
      { label: 'Separate', sub: 'guests apart, tills on cable' },
      { label: 'Measure again', sub: 'a week later, same readings' },
    ], caption: 'Figure 1 · The accented step is the first: a computer connected to the box by a cable, for a day. It tells you whether the fault is before the Wi-Fi or in the Wi-Fi. Nothing is bought before the third step; the sixth checks that the fix helped.', alt: 'Six steps: test on a cable (accented), note, measure, fix, separate, measure again.' },
    arbre: { caption: 'Figure 2 · Three questions, in order. A wired computer that drops too points to the line or the box. Otherwise, drops limited to certain rooms point to coverage; drops everywhere point to saturation at busy hours, or to roaming when you move around. A schematic tree from a constructed example.' },
    plan: { caption: 'Figure 3 · The same six-room floor. With one box in the entrance, the meeting room is at −84 dBm, the storeroom at −81 and accounts at −70: three rooms below the common reference of −67 dBm. With three wired access points on the ceiling, all are between −49 and −56. Invented values for a constructed example.' },
    causes: { title: 'Six causes, how to recognise them, what to do', columns: ['How to recognise it', 'What to do'], rows: [
      { label: 'The line or the box', cells: ['everything drops at once, wired computer included', 'log sent to the operator, box protected or replaced, backup link'] },
      { label: 'Coverage', cells: ['always the same rooms, weak signal', 'wired access points on the ceiling, placed from a measurement'] },
      { label: 'Too many devices on one access point', cells: ['drops at busy hours, in meetings', 'one more access point, 5 GHz band, devices spread out'] },
      { label: 'A crowded channel', cells: ['unstable speed, worse when the neighbours are in', 'non-overlapping channels, 5 GHz, reduced power'] },
      { label: 'Addresses run out or in conflict', cells: ['“connected, no internet”, mostly in the morning', 'wider address range, shorter lease for guests'] },
      { label: 'Roaming', cells: ['a drop while walking, mid-call', 'same network name, same settings, fast roaming'] },
    ], caption: 'Figure 4 · Six causes, from the furthest upstream to the finest. Each has a signature: a moment, a place, a message. That is why the log of drops is worth more than a purchase: it says which of the six you have.', alt: 'Matrix of six causes of drops, with their signature and the remedy: line or box, coverage, too many devices, crowded channel, addresses run out or in conflict, roaming.' },
    couches: { title: 'A network that does not drop, in five layers', layers: [
      { label: 'Line', items: [{ name: 'A main link, a backup link from another operator, automatic failover, the box on a UPS', sub: 'the operator’s outage is no longer noticed' }] },
      { label: 'Cabling', items: [{ name: 'One cable per access point back to the rack, power supplied over the cable, none linked by Wi-Fi', sub: 'an access point is worth what its cable is worth' }] },
      { label: 'Access points', items: [{ name: 'Number and position from a measurement, on the ceiling, one per zone, no repeater', sub: 'every room above the reference', accent: true }] },
      { label: 'Settings', items: [{ name: 'Non-overlapping channels, 5 GHz first, adjusted power, fast roaming, enough addresses', sub: 'the access points cooperate instead of interfering' }] },
      { label: 'Separation', items: [{ name: 'Guests on their own network, tills and fixed computers on cable, printers on fixed addresses', sub: 'what must hold does not depend on Wi-Fi' }] },
    ], caption: 'Figure 5 · The accented layer is the access points: their number and place, decided from a measurement. But it only holds on the first two, a doubled line and one cable per access point, and only gives its full effect with the last two.', alt: 'Five layers: line; cabling; access points (accented); settings; separation.' },
    calendrier: { title: 'Four weeks, from the first test to the second reading', unit: 'wk', items: [
      { label: 'Wired test and log', note: 'a wired computer for a day, every drop noted for a week, signal measured room by room', from: 0, to: 1, accent: true },
      { label: 'Line and box', note: 'log passed to the operator, box protected or replaced, backup link studied', from: 1, to: 2 },
      { label: 'Cables and access points', note: 'one cable per access point, positions from the measurement, fitted on the ceiling', from: 1, to: 3 },
      { label: 'Settings and separation', note: 'channels, power, roaming, guest network, tills and fixed computers on cable', from: 2, to: 3 },
      { label: 'Second reading', note: 'same sheets, same measurements, comparison with the first week', from: 3, to: 4 },
    ], caption: 'Figure 6 · Four weeks in the example. The accented period is the first: a test and a log, without buying anything. The fourth repeats the same measurements: you then know what the fix changed. Indicative durations from a constructed example.', alt: 'Four-week calendar: wired test and log (accented, one week), line and box, cables and access points, settings and separation, second reading.' },
  },
  ar: {
    cover: { eyebrow: 'الواي فاي ينقطع · المكتب · الجزائر · 2027', title: ['الواي فاي ينقطع في المكتب', 'الخط، أم الواي فاي؟'], subtitle: 'حاسوب موصول بكابل للفصل، سجل للانقطاعات، الإشارة غرفة غرفة، ونقاط وصول بكابل', left: { label: 'علبة واحدة', sub: '−84 dBm في قاعة الاجتماعات' }, right: { label: 'ثلاث نقاط بكابل', sub: 'ست غرف فوق المعلَم' } },
    ordre: { title: 'التشخيص بهذا الترتيب', items: [
      { label: 'الاختبار بكابل', sub: 'حاسوب موصول بالعلبة، يوماً', accent: true },
      { label: 'التسجيل', sub: 'كل انقطاع: الساعة، الغرفة، الجهاز' },
      { label: 'القياس', sub: 'الإشارة، غرفة غرفة' },
      { label: 'التصحيح', sub: 'الخط، النقاط، أو الضبط' },
      { label: 'الفصل', sub: 'الضيوف على حدة، والصناديق بكابل' },
      { label: 'إعادة القياس', sub: 'بعد أسبوع، القراءات نفسها' },
    ], caption: 'الشكل 1 · المرحلة المبرزة هي الأولى: حاسوب موصول بالعلبة بكابل، مدة يوم. هو الذي يقول هل العطل قبل الواي فاي أم في الواي فاي. ولا شيء يُشترى قبل المرحلة الثالثة؛ والسادسة تتحقق من أن التصحيح نفع.', alt: 'ست مراحل: الاختبار بكابل (مبرزة)، التسجيل، القياس، التصحيح، الفصل، إعادة القياس.' },
    arbre: { caption: 'الشكل 2 · ثلاثة أسئلة، بالترتيب. حاسوب موصول بكابل ينقطع هو كذلك يدلّ على الخط أو العلبة. وإلا، فانقطاعات محصورة في بعض الغرف تدلّ على التغطية؛ وانقطاعات في كل مكان تدلّ على التشبّع في ساعات الازدحام، أو على التجوال عند التنقل. شجرة مبدئية لمثال مركَّب.' },
    plan: { caption: 'الشكل 3 · الطابق نفسه بست غرف. بعلبة في المدخل، قاعة الاجتماعات عند 84 ناقص، المستودع عند 81 ناقص، والمحاسبة عند 70 ناقص: ثلاث غرف تحت المعلَم الشائع، 67 ناقص. وبثلاث نقاط وصول موصولة بكابل في السقف، كلها بين 49 و56 ناقص. قيم مخترَعة لمثال مركَّب.' },
    causes: { title: 'ستة أسباب، بماذا تُعرَف، وما نفعله', columns: ['بماذا يُعرَف', 'ما نفعله'], rows: [
      { label: 'الخط أو العلبة', cells: ['كل شيء ينقطع معاً، والحاسوب الموصول بكابل كذلك', 'سجل يُرسَل للمتعامل، علبة تُحمى أو تُعوَّض، وخط إسعاف'] },
      { label: 'التغطية', cells: ['الغرف نفسها دائماً، وإشارة ضعيفة', 'نقاط وصول بكابل في السقف، توضع حسب قياس'] },
      { label: 'أجهزة كثيرة على نقطة واحدة', cells: ['انقطاعات في ساعات الازدحام، وفي الاجتماعات', 'نقطة إضافية، نطاق 5 GHz، وأجهزة موزَّعة'] },
      { label: 'قناة مزدحمة', cells: ['تدفق غير مستقر، أسوأ بحضور الجيران', 'قنوات دون تداخل، 5 GHz، وقدرة مخفَّضة'] },
      { label: 'عناوين نفدت أو متعارضة', cells: ['«متصل، لا إنترنت»، خاصة صباحاً', 'مجال عناوين أوسع، وإعارة أقصر للضيوف'] },
      { label: 'التجوال', cells: ['انقطاع أثناء المشي، وسط مكالمة', 'اسم الشبكة نفسه، الضبط نفسه، وتجوال سريع'] },
    ], caption: 'الشكل 4 · ستة أسباب، من الأبعد في الأعلى إلى الأدقّ. ولكل واحد علامة: وقت، مكان، أو رسالة. ولهذا يساوي سجل الانقطاعات أكثر من أي شراء: يقول أيّ الستة عندكم.', alt: 'مصفوفة ستة أسباب للانقطاعات، مع علامتها وعلاجها: الخط أو العلبة، التغطية، أجهزة كثيرة، قناة مزدحمة، عناوين نفدت أو متعارضة، والتجوال.' },
    couches: { title: 'شبكة لا تنقطع، في خمس طبقات', layers: [
      { label: 'الخط', items: [{ name: 'خط رئيسي، خط إسعاف من متعامل آخر، تحويل آلي، وعلبة على مموِّج', sub: 'انقطاع المتعامل لا يُشعَر به' }] },
      { label: 'الكوابل', items: [{ name: 'كابل لكل نقطة إلى الخزانة، تغذية عبر الكابل، ولا نقطة موصولة بالواي فاي', sub: 'النقطة تساوي ما يساويه كابلها' }] },
      { label: 'نقاط الوصول', items: [{ name: 'العدد والموضع حسب قياس، في السقف، واحدة لكل منطقة، ودون مكرِّر', sub: 'كل غرفة فوق المعلَم', accent: true }] },
      { label: 'الضبط', items: [{ name: 'قنوات دون تداخل، 5 GHz بالأولوية، قدرة مضبوطة، تجوال سريع، وعناوين كافية', sub: 'النقاط تتفاهم بدل أن تتزاحم' }] },
      { label: 'الفصل', items: [{ name: 'الضيوف على شبكتهم، الصناديق والحواسيب الثابتة بكابل، والطابعات بعنوان ثابت', sub: 'ما يجب أن يصمد لا يتوقف على الواي فاي' }] },
    ], caption: 'الشكل 5 · الطبقة المبرزة هي نقاط الوصول: عددها ومكانها، يُحدَّدان حسب قياس. لكنها لا تصمد إلا على الأوليين، خط مضاعَف وكابل لكل نقطة، ولا تعطي كامل أثرها إلا مع الأخيرتين.', alt: 'خمس طبقات: الخط؛ الكوابل؛ نقاط الوصول (مبرزة)؛ الضبط؛ الفصل.' },
    calendrier: { title: 'أربعة أسابيع، من الاختبار الأول إلى القراءة الثانية', unit: 'أسبوع', items: [
      { label: 'الاختبار بكابل والسجل', note: 'حاسوب موصول بكابل يوماً، كل انقطاع يُسجَّل أسبوعاً، وإشارة تُقاس غرفة غرفة', from: 0, to: 1, accent: true },
      { label: 'الخط والعلبة', note: 'سجل يُسلَّم للمتعامل، علبة تُحمى أو تُعوَّض، وخط إسعاف يُدرَس', from: 1, to: 2 },
      { label: 'الكوابل والنقاط', note: 'كابل لكل نقطة، مواضع حسب القياس، ووضع في السقف', from: 1, to: 3 },
      { label: 'الضبط والفصل', note: 'القنوات، القدرة، التجوال، شبكة الضيوف، وصناديق وحواسيب ثابتة بكابل', from: 2, to: 3 },
      { label: 'القراءة الثانية', note: 'الأوراق نفسها، القياسات نفسها، ومقارنة بالأسبوع الأول', from: 3, to: 4 },
    ], caption: 'الشكل 6 · أربعة أسابيع في المثال. الفترة المبرزة هي الأولى: اختبار وسجل، دون شراء شيء. والرابعة تعيد القياسات نفسها: فنعرف ما غيّره التصحيح. مدد تقريبية لمثال مركَّب.', alt: 'تقويم أربعة أسابيع: الاختبار بكابل والسجل (مبرزة، أسبوع)، الخط والعلبة، الكوابل والنقاط، الضبط والفصل، القراءة الثانية.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      ordre: { svg: steps({ title: t.ordre.title, steps: t.ordre.items, arrows: true, rtl }), caption: t.ordre.caption, alt: t.ordre.alt },
      arbre: { svg: arbre(e.arbre, rtl), caption: t.arbre.caption, alt: e.arbre.alt },
      plan: { svg: plan(e.plan, rtl), caption: t.plan.caption, alt: e.plan.alt },
      causes: { svg: matrix({ title: t.causes.title, columns: t.causes.columns, rows: t.causes.rows, rtl }), caption: t.causes.caption, alt: t.causes.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 4, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
