import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { debit, regles, STRINGS as SC } from './custom/filtrage.mjs';
export const slug = 'comment-bloquer-des-sites-internet-au-bureau-entreprise-algerie-2027-filtrage-web-dns-pare-feu-reseau-invites-debit-l-apres-midi-charte';
const T = {
  fr: {
    cover: { eyebrow: 'Filtrage web · bureau · Algérie · 2027', title: ['Bloquer des sites au bureau', 'mesurer, protéger, limiter'], subtitle: 'Où part le débit, sites dangereux bloqués pour tous, Wi-Fi invités séparé, vidéo limitée, charte d’une page', left: { label: 'Personne ne décide', sub: '4 Mbit/s pour le travail' }, right: { label: 'Le travail d’abord', sub: '8 garantis, 8 de réserve' } },
    debit: { caption: 'Figure 1 · Une ligne de 20 Mbit/s à 15 heures. Avant, la vidéo en continu en prend 9, les téléchargements 4, les réseaux sociaux 3 ; le travail n’en obtient que 4 quand il en demande 8. Après, le travail passe en premier, la vidéo est limitée, les téléchargements partent la nuit, et il reste 8 Mbit/s de réserve. Ligne et répartition sont un exemple construit.' },
    regles: { caption: 'Figure 2 · La règle d’un bureau, une case par groupe et par catégorie. Les sites dangereux sont bloqués pour tous. Les postes du bureau gardent la vidéo au débit limité et les réseaux sociaux à midi ; la caisse et le serveur ne voient que le travail ; le Wi-Fi des invités n’a pas accès au réseau interne. Règle à adapter : exemple construit.' },
    etapes: { title: 'Mettre un filtre en place, dans cet ordre', items: [
      { label: 'Mesurer', sub: 'une semaine, par catégorie et par heure', accent: true },
      { label: 'Écrire', sub: 'une charte d’une page, remise à chacun' },
      { label: 'Protéger', sub: 'sites dangereux bloqués pour tous' },
      { label: 'Séparer', sub: 'bureau, caisse et serveur, invités' },
      { label: 'Limiter', sub: 'débit, horaires, téléchargements la nuit' },
      { label: 'Revoir', sub: 'chaque trimestre, avec les exceptions' },
    ], caption: 'Figure 3 · Le temps accentué est le premier : mesurer une semaine, par catégorie et par heure, sans regarder qui. La charte s’écrit avant le premier blocage, pas après ; la protection et la séparation ne se discutent pas ; les limites, elles, se règlent et se revoient.', alt: 'Six temps : mesurer (accentué), écrire, protéger, séparer, limiter, revoir.' },
    couches: { title: 'Un filtrage qui tient, en cinq couches', layers: [
      { label: 'Mesure', items: [{ name: 'Relevé du boîtier par catégorie et par heure, pendant une semaine, sans regarder qui', sub: 'on décide sur des chiffres, pas sur une impression' }] },
      { label: 'Protection', items: [{ name: 'Sites d’hameçonnage et de logiciels malveillants bloqués pour tous, au DNS et au pare-feu', sub: 'la seule règle sans exception', accent: true }] },
      { label: 'Séparation', items: [{ name: 'Un réseau pour le bureau, un pour la caisse et le serveur, un Wi-Fi invités sans accès interne', sub: 'un téléphone infecté ne voit pas le serveur' }] },
      { label: 'Limites', items: [{ name: 'Vidéo au débit réduit, réseaux sociaux à midi, téléchargements et mises à jour la nuit', sub: 'le travail passe en premier' }] },
      { label: 'Charte', items: [{ name: 'Une page : ce qui est filtré, ce qui est mesuré, à qui demander une exception', sub: 'une règle connue se contourne moins' }] },
    ], caption: 'Figure 4 · La couche accentuée est la protection : bloquer pour tous les sites qui volent des mots de passe ou installent un logiciel malveillant. Elle seule est sans exception. Les autres servent le confort de tous : une mesure, des réseaux séparés, des limites, et une page qui le dit.', alt: 'Cinq couches : mesure ; protection (accentuée) ; séparation ; limites ; charte.' },
    moyens: { title: 'Cinq façons de bloquer, et comment on les contourne', columns: ['Ce que cela bloque', 'Comment on le contourne'], rows: [
      { label: 'Sur chaque poste', cells: ['un fichier ou une extension, poste par poste', 'un autre navigateur, ou un droit d’administrateur'] },
      { label: 'Au niveau du DNS', cells: ['tout le réseau d’un coup, par nom de site', 'un autre DNS sur le poste, le DNS chiffré du navigateur'] },
      { label: 'Au pare-feu, par catégories', cells: ['par groupe et par horaire, même en HTTPS', 'un VPN, s’il n’est pas lui-même bloqué'] },
      { label: 'Par le débit', cells: ['rien : la vidéo passe, mais lentement', 'personne ne cherche à le contourner'] },
      { label: 'Par le réseau invités', cells: ['l’accès au réseau interne, pas à internet', 'un câble branché sur une prise du bureau'] },
    ], caption: 'Figure 5 · Cinq façons de bloquer, de la plus fragile à la plus solide. Aucune n’est infranchissable ; c’est leur combinaison qui tient : le DNS pour tout le réseau, le pare-feu pour les groupes et les horaires, le débit pour ce qu’on tolère, le réseau invités pour ce qui n’a rien à faire à l’intérieur.', alt: 'Matrice de cinq façons de bloquer des sites, avec ce que chacune bloque et comment on la contourne : sur chaque poste, au DNS, au pare-feu, par le débit, par le réseau invités.' },
    calendrier: { title: 'Quatre semaines, de la mesure à la règle', unit: 'sem.', items: [
      { label: 'Mesure', note: 'relevé par catégorie et par heure, sans nom ; la ligne, les heures de pointe, ce qui occupe le débit', from: 0, to: 1, accent: true },
      { label: 'Charte et groupes', note: 'une page écrite et remise à chacun ; trois groupes d’appareils, qui est dans lequel', from: 1, to: 2 },
      { label: 'Protection et séparation', note: 'sites dangereux bloqués au DNS et au pare-feu, réseau de la caisse et Wi-Fi invités isolés', from: 1, to: 3 },
      { label: 'Limites et priorités', note: 'travail prioritaire, vidéo au débit réduit, plage de midi, téléchargements la nuit', from: 2, to: 4 },
      { label: 'Réglages', note: 'exceptions demandées et notées, nouveau relevé, comparaison avec la première semaine', from: 3, to: 4 },
    ], caption: 'Figure 6 · Quatre semaines dans l’exemple. La période accentuée est la première : une semaine de mesure, sans rien bloquer. La charte est remise avant le premier réglage ; la quatrième semaine compare le nouveau relevé au premier. Durées indicatives d’un exemple construit.', alt: 'Calendrier de quatre semaines : mesure (accentuée, une semaine), charte et groupes, protection et séparation, limites et priorités, réglages.' },
  },
  en: {
    cover: { eyebrow: 'Web filtering · office · Algeria · 2027', title: ['Blocking websites at the office', 'measure, protect, limit'], subtitle: 'Where the bandwidth goes, dangerous sites blocked for all, guest Wi-Fi apart, video limited, a short policy', left: { label: 'Nobody decides', sub: '4 Mbit/s for work' }, right: { label: 'Work first', sub: '8 guaranteed, 8 in reserve' } },
    debit: { caption: 'Figure 1 · A 20 Mbit/s line at 3 pm. Before, streaming video takes 9, downloads 4, social networks 3; work only gets 4 when it needs 8. After, work comes first, video is limited, downloads run at night, and 8 Mbit/s are left in reserve. Line and breakdown are a constructed example.' },
    regles: { caption: 'Figure 2 · The rule of an office, one cell per group and per category. Dangerous sites are blocked for everyone. Office computers keep video at limited speed and social networks at lunchtime; the till and the server only see work; guest Wi-Fi has no access to the internal network. A rule to adapt: constructed example.' },
    etapes: { title: 'Putting a filter in place, in this order', items: [
      { label: 'Measure', sub: 'one week, by category and by hour', accent: true },
      { label: 'Write', sub: 'a one-page policy, handed to everyone' },
      { label: 'Protect', sub: 'dangerous sites blocked for all' },
      { label: 'Separate', sub: 'office, till and server, guests' },
      { label: 'Limit', sub: 'speed, hours, downloads at night' },
      { label: 'Review', sub: 'every quarter, with the exceptions' },
    ], caption: 'Figure 3 · The accented step is the first: measure for a week, by category and by hour, without looking at who. The policy is written before the first block, not after; protection and separation are not up for discussion; the limits are tuned and reviewed.', alt: 'Six steps: measure (accented), write, protect, separate, limit, review.' },
    couches: { title: 'Filtering that holds, in five layers', layers: [
      { label: 'Measurement', items: [{ name: 'Reading from the box by category and by hour, for a week, without looking at who', sub: 'you decide on figures, not on an impression' }] },
      { label: 'Protection', items: [{ name: 'Phishing and malware sites blocked for everyone, at the DNS and at the firewall', sub: 'the only rule with no exception', accent: true }] },
      { label: 'Separation', items: [{ name: 'One network for the office, one for the till and server, a guest Wi-Fi with no internal access', sub: 'an infected phone does not see the server' }] },
      { label: 'Limits', items: [{ name: 'Video at reduced speed, social networks at lunchtime, downloads and updates at night', sub: 'work comes first' }] },
      { label: 'Policy', items: [{ name: 'One page: what is filtered, what is measured, who to ask for an exception', sub: 'a known rule is bypassed less' }] },
    ], caption: 'Figure 4 · The accented layer is protection: blocking for everyone the sites that steal passwords or install malware. It alone has no exception. The others serve everyone’s comfort: a measurement, separate networks, limits, and a page that says so.', alt: 'Five layers: measurement; protection (accented); separation; limits; policy.' },
    moyens: { title: 'Five ways to block, and how they are bypassed', columns: ['What it blocks', 'How it is bypassed'], rows: [
      { label: 'On each computer', cells: ['a file or an extension, machine by machine', 'another browser, or an administrator right'] },
      { label: 'At the DNS', cells: ['the whole network at once, by site name', 'another DNS on the machine, the browser’s encrypted DNS'] },
      { label: 'At the firewall, by category', cells: ['per group and per time slot, even over HTTPS', 'a VPN, if it is not itself blocked'] },
      { label: 'By speed', cells: ['nothing: video goes through, but slowly', 'nobody tries to bypass it'] },
      { label: 'By the guest network', cells: ['access to the internal network, not to the internet', 'a cable plugged into an office socket'] },
    ], caption: 'Figure 5 · Five ways to block, from the most fragile to the most solid. None is impassable; it is the combination that holds: DNS for the whole network, the firewall for groups and time slots, speed for what you tolerate, the guest network for what has no business inside.', alt: 'Matrix of five ways to block sites, with what each blocks and how it is bypassed: on each computer, at the DNS, at the firewall, by speed, by the guest network.' },
    calendrier: { title: 'Four weeks, from measuring to the rule', unit: 'wk', items: [
      { label: 'Measurement', note: 'reading by category and by hour, without names; the line, the peak hours, what uses the bandwidth', from: 0, to: 1, accent: true },
      { label: 'Policy and groups', note: 'one page written and handed to everyone; three groups of devices, who is in which', from: 1, to: 2 },
      { label: 'Protection and separation', note: 'dangerous sites blocked at the DNS and the firewall, till network and guest Wi-Fi isolated', from: 1, to: 3 },
      { label: 'Limits and priorities', note: 'work has priority, video at reduced speed, lunchtime window, downloads at night', from: 2, to: 4 },
      { label: 'Tuning', note: 'exceptions requested and noted, new reading, comparison with the first week', from: 3, to: 4 },
    ], caption: 'Figure 6 · Four weeks in the example. The accented period is the first: a week of measuring, without blocking anything. The policy is handed out before the first setting; the fourth week compares the new reading with the first. Indicative durations from a constructed example.', alt: 'Four-week calendar: measurement (accented, one week), policy and groups, protection and separation, limits and priorities, tuning.' },
  },
  ar: {
    cover: { eyebrow: 'ترشيح الويب · المكتب · الجزائر · 2027', title: ['حجب مواقع في المكتب', 'القياس، الحماية، والتحديد'], subtitle: 'أين يذهب التدفق، مواقع خطيرة محجوبة للجميع، واي فاي ضيوف مفصول، فيديو محدود، وميثاق من صفحة', left: { label: 'لا أحد يقرّر', sub: '4 Mbit/s للعمل' }, right: { label: 'العمل أولاً', sub: '8 مضمونة، و8 احتياطاً' } },
    debit: { caption: 'الشكل 1 · خط من 20 ميغابت في الثانية على الساعة 15. قبل، الفيديو المتواصل يأخذ 9، التحميلات 4، وشبكات التواصل 3؛ والعمل لا ينال إلا 4 وهو يطلب 8. بعد، العمل يمرّ أولاً، الفيديو محدود، التحميلات تجري ليلاً، ويبقى 8 احتياطاً. الخط والتوزيع مثال مركَّب.' },
    regles: { caption: 'الشكل 2 · قاعدة مكتب، خانة لكل مجموعة ولكل صنف. المواقع الخطيرة محجوبة للجميع. حواسيب المكتب تحتفظ بالفيديو بتدفق محدود وبشبكات التواصل في منتصف النهار؛ الصندوق والخادم لا يريان إلا العمل؛ وواي فاي الضيوف لا وصول له إلى الشبكة الداخلية. قاعدة تُكيَّف: مثال مركَّب.' },
    etapes: { title: 'وضع المرشِّح في الخدمة، بهذا الترتيب', items: [
      { label: 'القياس', sub: 'أسبوع، حسب الصنف وحسب الساعة', accent: true },
      { label: 'الكتابة', sub: 'ميثاق من صفحة، يُسلَّم لكل واحد' },
      { label: 'الحماية', sub: 'المواقع الخطيرة محجوبة للجميع' },
      { label: 'الفصل', sub: 'المكتب، الصندوق والخادم، والضيوف' },
      { label: 'التحديد', sub: 'التدفق، الساعات، والتحميلات ليلاً' },
      { label: 'المراجعة', sub: 'كل ثلاثة أشهر، مع الاستثناءات' },
    ], caption: 'الشكل 3 · المرحلة المبرزة هي الأولى: القياس أسبوعاً، حسب الصنف وحسب الساعة، دون النظر في من. والميثاق يُكتب قبل أول حجب، لا بعده؛ والحماية والفصل لا يُناقَشان؛ أما الحدود فتُضبط وتُراجَع.', alt: 'ست مراحل: القياس (مبرزة)، الكتابة، الحماية، الفصل، التحديد، المراجعة.' },
    couches: { title: 'ترشيح يصمد، في خمس طبقات', layers: [
      { label: 'القياس', items: [{ name: 'قراءة العلبة حسب الصنف وحسب الساعة، مدة أسبوع، دون النظر في من', sub: 'نقرّر على أرقام، لا على انطباع' }] },
      { label: 'الحماية', items: [{ name: 'مواقع التصيّد والبرمجيات الخبيثة محجوبة للجميع، عند DNS وعند الجدار الناري', sub: 'القاعدة الوحيدة دون استثناء', accent: true }] },
      { label: 'الفصل', items: [{ name: 'شبكة للمكتب، شبكة للصندوق والخادم، وواي فاي للضيوف دون وصول داخلي', sub: 'الهاتف المصاب لا يرى الخادم' }] },
      { label: 'الحدود', items: [{ name: 'فيديو بتدفق منخفض، شبكات التواصل في منتصف النهار، والتحميلات والتحديثات ليلاً', sub: 'العمل يمرّ أولاً' }] },
      { label: 'الميثاق', items: [{ name: 'صفحة: ما يُرشَّح، ما يُقاس، ومن يُطلب منه الاستثناء', sub: 'القاعدة المعروفة يُتحايَل عليها أقل' }] },
    ], caption: 'الشكل 4 · الطبقة المبرزة هي الحماية: حجب المواقع التي تسرق كلمات المرور أو تنصّب برمجية خبيثة، للجميع. وهي وحدها دون استثناء. والأخرى تخدم راحة الجميع: قياس، شبكات مفصولة، حدود، وصفحة تقول ذلك.', alt: 'خمس طبقات: القياس؛ الحماية (مبرزة)؛ الفصل؛ الحدود؛ الميثاق.' },
    moyens: { title: 'خمس طرق للحجب، وكيف يُتحايَل عليها', columns: ['ما تحجبه', 'كيف يُتحايَل عليها'], rows: [
      { label: 'على كل حاسوب', cells: ['ملف أو إضافة، حاسوباً حاسوباً', 'متصفح آخر، أو صلاحية مسؤول'] },
      { label: 'عند DNS', cells: ['الشبكة كلها دفعة واحدة، باسم الموقع', 'DNS آخر على الحاسوب، أو DNS المشفَّر للمتصفح'] },
      { label: 'عند الجدار الناري، بالأصناف', cells: ['حسب المجموعة والساعة، حتى في HTTPS', 'VPN، إذا لم يكن هو نفسه محجوباً'] },
      { label: 'بالتدفق', cells: ['لا شيء: الفيديو يمرّ، لكن ببطء', 'لا أحد يحاول التحايل عليه'] },
      { label: 'بشبكة الضيوف', cells: ['الوصول إلى الشبكة الداخلية، لا إلى الإنترنت', 'كابل موصول بمأخذ في المكتب'] },
    ], caption: 'الشكل 5 · خمس طرق للحجب، من الأهشّ إلى الأمتن. ولا واحدة منيعة؛ اجتماعها هو الذي يصمد: DNS للشبكة كلها، الجدار الناري للمجموعات والساعات، التدفق لما نتسامح معه، وشبكة الضيوف لما لا شأن له بالداخل.', alt: 'مصفوفة خمس طرق لحجب المواقع، مع ما تحجبه كل واحدة وكيف يُتحايَل عليها: على كل حاسوب، عند DNS، عند الجدار الناري، بالتدفق، وبشبكة الضيوف.' },
    calendrier: { title: 'أربعة أسابيع، من القياس إلى القاعدة', unit: 'أسبوع', items: [
      { label: 'القياس', note: 'قراءة حسب الصنف وحسب الساعة، دون أسماء؛ الخط، ساعات الذروة، وما يشغل التدفق', from: 0, to: 1, accent: true },
      { label: 'الميثاق والمجموعات', note: 'صفحة تُكتب وتُسلَّم لكل واحد؛ ثلاث مجموعات أجهزة، ومن في أيّها', from: 1, to: 2 },
      { label: 'الحماية والفصل', note: 'مواقع خطيرة محجوبة عند DNS والجدار الناري، وشبكة الصندوق وواي فاي الضيوف معزولان', from: 1, to: 3 },
      { label: 'الحدود والأولويات', note: 'العمل بالأولوية، فيديو بتدفق منخفض، فترة منتصف النهار، وتحميلات ليلاً', from: 2, to: 4 },
      { label: 'الضبط', note: 'استثناءات تُطلب وتُسجَّل، قراءة جديدة، ومقارنة بالأسبوع الأول', from: 3, to: 4 },
    ], caption: 'الشكل 6 · أربعة أسابيع في المثال. الفترة المبرزة هي الأولى: أسبوع من القياس، دون حجب شيء. والميثاق يُسلَّم قبل أول ضبط؛ والأسبوع الرابع يقارن القراءة الجديدة بالأولى. مدد تقريبية لمثال مركَّب.', alt: 'تقويم أربعة أسابيع: القياس (مبرزة، أسبوع)، الميثاق والمجموعات، الحماية والفصل، الحدود والأولويات، الضبط.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      debit: { svg: debit(e.debit, rtl), caption: t.debit.caption, alt: e.debit.alt },
      regles: { svg: regles(e.regles, rtl), caption: t.regles.caption, alt: e.regles.alt },
      etapes: { svg: steps({ title: t.etapes.title, steps: t.etapes.items, arrows: true, rtl }), caption: t.etapes.caption, alt: t.etapes.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      moyens: { svg: matrix({ title: t.moyens.title, columns: t.moyens.columns, rows: t.moyens.rows, rtl }), caption: t.moyens.caption, alt: t.moyens.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 4, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
