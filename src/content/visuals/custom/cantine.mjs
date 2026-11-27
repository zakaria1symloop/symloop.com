// Bespoke animated figures for the 2027 "logiciel de cantine d'entreprise en Algérie" page.
//  semaine(): two weeks of lunches side by side, one column per day (Sunday to Thursday). Each
//             column is the number of meals ordered from the caterer; the lower part is what was
//             served, the upper part (accent) what was paid for and not served. Before: 380 ordered
//             every day, 312 / 341 / 298 / 366 / 323 served, 260 not served out of 1 900. After:
//             the order is the bookings at the cut-off plus ten, 328 / 354 / 311 / 372 / 337 ordered,
//             311 / 339 / 296 / 357 / 322 served, 77 not served out of 1 702.
//  service(): one lunch service at the counter, 11:30 to 13:30, in twelve ten-minute slots:
//             12, 21, 34, 46, 52, 49, 41, 33, 24, 15, 8, 4 badge readings = 339 meals. The network
//             is down from 12:10 to 12:30: the 101 readings of those two slots stay on the tablet
//             and are sent at 12:30.
// Everything is drawn in logical coordinates and mirrors in RTL. CSS-only animation; base attributes
// are the finished state for the JPG.
import { C, ctx, text, rect, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function growY(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleY(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleY(1)}}`); return `transform-box:fill-box;transform-origin:center bottom;animation:${P}-${id} ${LOOP}s linear infinite`; }
const TINT = 'rgba(242,181,68,0.06)';
const DARK = '#0b0b0b';
const MID = 'rgba(255,255,255,0.55)';
const I = (x) => '⁦' + x + '⁩';

function tiles(c, css, P, ky, ts, at0) {
  let s = '';
  ts.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, at0 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? TINT : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  return s;
}
const motionOff = (P) => `@media (prefers-reduced-motion: reduce){svg [style*="${P}-"]{animation:none !important}}`;
const seg = (c, x1, y1, x2, y2, color, dash) => `<line x1="${c.X(x1)}" y1="${y1}" x2="${c.X(x2)}" y2="${y2}" stroke="${color}" stroke-width="1"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;

// meals per day, Sunday to Thursday: [ordered, served]
const BEFORE = [[380, 312], [380, 341], [380, 298], [380, 366], [380, 323]];
const AFTER = [[328, 311], [354, 339], [311, 296], [372, 357], [337, 322]];

export function semaine(t, rtl) {
  const c = ctx(rtl); const P = 'ct'; const css = []; const H = 686;
  const BASE = 412; const K = 0.5;                     // half a pixel per meal
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + text(c, 96, 170, t.chartTitle, { size: 11, fill: C.fg, weight: 500 })
    + rect(c, 760, 160, 11, 11, { stroke: 'none', fill: MID }) + text(c, 778, 170, t.legend[0], { size: 9.5, fill: C.fg70 })
    + rect(c, 900, 160, 11, 11, { stroke: 'none', fill: C.accent }) + text(c, 918, 170, t.legend[1], { size: 9.5, fill: C.accent }) + '</g>';
  const group = (gx, data, head, id, at) => {
    let out = `<g style="animation:${show(css, P, `${id}h`, at)}">` + text(c, gx, 198, head, { size: 11.5, fill: C.fg, weight: 500 }) + seg(c, gx, BASE, gx + 424, BASE, C.line2) + '</g>';
    data.forEach(([ordered, served], i) => {
      const x = gx + i * 92; const hs = served * K; const ho = ordered * K; const lost = ordered - served;
      out += `<g style="${growY(css, P, `${id}s${i}`, at + 1 + i * 2.2, 1.8)}">` + rect(c, x, BASE - hs, 56, hs, { stroke: 'none', fill: MID }) + '</g>';
      out += `<g style="${growY(css, P, `${id}o${i}`, at + 2 + i * 2.2, 1.2)}">` + rect(c, x, BASE - ho, 56, ho - hs, { stroke: 'none', fill: C.accent }) + '</g>';
      out += `<g style="animation:${show(css, P, `${id}n${i}`, at + 3.4 + i * 2.2)}">`
        + text(c, x + 28, BASE - hs + 16, String(served), { size: 10, font: 'mono', fill: DARK, anchor: 'middle', weight: 500 })
        + text(c, x + 28, BASE - ho - 6, String(lost), { size: 10.5, font: 'mono', fill: C.accent, anchor: 'middle', weight: 500 })
        + text(c, x + 28, BASE + 16, t.days[i], { size: 9, fill: C.fg55, anchor: 'middle' }) + '</g>';
    });
    return out;
  };
  s += group(130, BEFORE, t.before, 'b', 6);
  s += `<g style="animation:${show(css, P, 'sp', 26)}">` + seg(c, 600, 186, 600, 436, C.line2, '3 4') + '</g>';
  s += group(646, AFTER, t.after, 'a', 28);
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bn', 52)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 56);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// badge readings per ten-minute slot, from 11:30; slots 4 and 5 (12:10 to 12:30) are read without network
const SLOTS = [12, 21, 34, 46, 52, 49, 41, 33, 24, 15, 8, 4];
const OFF = [4, 5];
const HOURS = ['11:30', '11:40', '11:50', '12:00', '12:10', '12:20', '12:30', '12:40', '12:50', '13:00', '13:10', '13:20'];

export function service(t, rtl) {
  const c = ctx(rtl); const P = 'kb'; const css = []; const H = 686;
  const X0 = 136; const SW = 76; const BASE = 400; const K = 3;   // three pixels per reading
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + text(c, 96, 170, t.chartTitle, { size: 11, fill: C.fg, weight: 500 }) + seg(c, X0, BASE, X0 + 12 * SW, BASE, C.line2) + '</g>';
  // the twenty minutes without network, drawn behind the bars
  s += `<g style="animation:${show(css, P, 'of', 22)}">` + rect(c, X0 + OFF[0] * SW, 204, 2 * SW, BASE - 204, { stroke: C.accent, fill: TINT, dash: '4 4' }) + text(c, X0 + OFF[0] * SW + SW, 196, t.offline, { size: 10, fill: C.accent, anchor: 'middle', weight: 500 }) + '</g>';
  SLOTS.forEach((n, i) => {
    const x = X0 + i * SW; const h = n * K; const off = OFF.includes(i);
    s += `<g style="${growY(css, P, `b${i}`, 5 + i * 1.4, 1.2)}">` + rect(c, x + 8, BASE - h, SW - 16, h, { stroke: 'none', fill: off ? C.accent : MID }) + '</g>';
    s += `<g style="animation:${show(css, P, `n${i}`, 6.4 + i * 1.4)}">` + text(c, x + SW / 2, BASE - h - 6, String(n), { size: 10, font: 'mono', fill: off ? C.accent : C.fg, anchor: 'middle', weight: 500 })
      + text(c, x + SW / 2, BASE + 15, rtl ? I(HOURS[i]) : HOURS[i], { size: 8.5, font: 'mono', fill: C.fg55, anchor: 'middle' }) + '</g>';
  });
  // the moment the stored readings are sent
  s += `<g style="animation:${show(css, P, 'sy', 30)}">` + seg(c, X0 + 6 * SW, 204, X0 + 6 * SW, BASE + 22, C.accent, '2 3') + text(c, X0 + 6 * SW + 8, BASE + 38, t.sync, { size: 9.5, fill: C.accent, weight: 500 }) + '</g>';
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bn', 38)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 42);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    semaine: {
      title: 'Une semaine de déjeuners : commandé, servi, payé sans être servi',
      alt: 'Deux semaines de déjeuners, une colonne par jour du dimanche au jeudi. Semaine avant : 380 repas commandés chaque jour, 312, 341, 298, 366 et 323 servis, soit 260 repas payés sans être servis sur 1 900 commandés. Semaine après : la commande est le nombre de réservations à l’heure limite plus dix, 328, 354, 311, 372 et 337 commandés, 311, 339, 296, 357 et 322 servis, soit 77 repas non servis sur 1 702.',
      header: 'Exemple construit · usine de 420 personnes, déjeuner, du dimanche au jeudi',
      chartTitle: 'Repas commandés au traiteur, par jour',
      legend: ['servis', 'payés, non servis'],
      before: 'Avant : 380 commandés chaque jour, au jugé', after: 'Après : réservations à l’heure limite, plus dix',
      days: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.'],
      band: 'La partie haute de chaque colonne est payée au traiteur et ne nourrit personne. Elle se voit dès qu’on compte.',
      tiles: [
        { big: '1 900 commandés', l1: 'semaine avant : 1 640 servis, 260 payés pour rien', l2: '13,7 % de la commande' },
        { big: '1 652 réservations', l1: 'semaine après : commande de 1 702, dix de marge par jour', l2: '24 personnes servies sans réservation' },
        { big: '77 non servis', l1: '51 réservés et non venus, 26 de marge restée', l2: '4,5 % de la commande', hot: true },
      ],
      line1: 'Avant, la commande est un chiffre fixe. Après, c’est le nombre de réservations à l’heure limite, plus une marge.',
      line2: 'La marge sert ceux qui viennent sans avoir réservé ; son niveau se règle chaque mois sur ce qui a été constaté.',
      note: 'Exemple construit · usine, effectifs et repas fictifs.',
    },
    service: {
      title: 'Un service au comptoir : 339 passages, dont 101 sans réseau',
      alt: 'Un service de déjeuner de 11 h 30 à 13 h 30, en douze tranches de dix minutes : 12, 21, 34, 46, 52, 49, 41, 33, 24, 15, 8 et 4 passages au badge, soit 339 repas servis. Le réseau est coupé de 12 h 10 à 12 h 30 : les 101 passages de ces deux tranches sont gardés sur la tablette du comptoir et envoyés à 12 h 30, sans perte ni doublon.',
      header: 'Exemple construit · déjeuner du lundi, 11 h 30 à 13 h 30, une tablette au comptoir',
      chartTitle: 'Passages au badge, par tranche de dix minutes',
      offline: 'réseau coupé : 101 passages gardés sur la tablette',
      sync: '12 h 30 : envoi des 101 passages, aucun perdu, aucun en double',
      band: 'Le comptoir ne dépend pas du réseau : il contrôle le badge avec la liste du jour, chargée avant le service, et envoie plus tard.',
      tiles: [
        { big: '339 repas servis', l1: '334 sur réservation, 5 sans réservation pris sur la marge', l2: 'pic : 52 passages en dix minutes' },
        { big: '4 seconds passages refusés', l1: 'le badge a déjà servi pour ce service', l2: 'contrôle fait sur la tablette, sans réseau' },
        { big: '101 passages sans réseau', l1: 'gardés sur la tablette, envoyés à 12 h 30', l2: 'un identifiant par passage : aucun doublon', hot: true },
      ],
      line1: 'Dix personnes avaient réservé et ne sont pas venues : la clôture du service les liste, et c’est vous qui décidez de la suite.',
      line2: 'Un passage se lit en une seconde : le badge de l’entreprise, ou un code QR affiché sur le téléphone.',
      note: 'Exemple construit · service, horaires et passages fictifs.',
    },
  },
  en: {
    semaine: {
      title: 'One week of lunches: ordered, served, paid for and not served',
      alt: 'Two weeks of lunches, one column per day from Sunday to Thursday. Week before: 380 meals ordered every day, 312, 341, 298, 366 and 323 served, that is 260 meals paid for and not served out of 1,900 ordered. Week after: the order is the number of bookings at the cut-off plus ten, 328, 354, 311, 372 and 337 ordered, 311, 339, 296, 357 and 322 served, that is 77 meals not served out of 1,702.',
      header: 'Constructed example · a plant of 420 people, lunch, Sunday to Thursday',
      chartTitle: 'Meals ordered from the caterer, per day',
      legend: ['served', 'paid, not served'],
      before: 'Before: 380 ordered every day, by guesswork', after: 'After: bookings at the cut-off, plus ten',
      days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu'],
      band: 'The top part of each column is paid to the caterer and feeds nobody. It shows as soon as someone counts.',
      tiles: [
        { big: '1,900 ordered', l1: 'week before: 1,640 served, 260 paid for nothing', l2: '13.7% of the order' },
        { big: '1,652 bookings', l1: 'week after: an order of 1,702, a margin of ten a day', l2: '24 people served without a booking' },
        { big: '77 not served', l1: '51 booked and absent, 26 of margin left over', l2: '4.5% of the order', hot: true },
      ],
      line1: 'Before, the order is a fixed figure. After, it is the number of bookings at the cut-off, plus a margin.',
      line2: 'The margin feeds those who come without a booking; its level is adjusted every month on what was observed.',
      note: 'Constructed example · fictitious plant, headcount and meals.',
    },
    service: {
      title: 'One service at the counter: 339 readings, 101 of them without network',
      alt: 'One lunch service from 11:30 to 13:30, in twelve ten-minute slots: 12, 21, 34, 46, 52, 49, 41, 33, 24, 15, 8 and 4 badge readings, that is 339 meals served. The network is down from 12:10 to 12:30: the 101 readings of those two slots stay on the counter tablet and are sent at 12:30, with no loss and no duplicate.',
      header: 'Constructed example · Monday lunch, 11:30 to 13:30, one tablet at the counter',
      chartTitle: 'Badge readings, per ten-minute slot',
      offline: 'network down: 101 readings kept on the tablet',
      sync: '12:30: the 101 readings are sent, none lost, none twice',
      band: 'The counter does not depend on the network: it checks the badge against the day’s list, loaded before the service, and sends later.',
      tiles: [
        { big: '339 meals served', l1: '334 on a booking, 5 without a booking, taken from the margin', l2: 'peak: 52 readings in ten minutes' },
        { big: '4 second passes refused', l1: 'the badge has already been used for this service', l2: 'checked on the tablet, without network' },
        { big: '101 readings without network', l1: 'kept on the tablet, sent at 12:30', l2: 'one identifier per reading: no duplicate', hot: true },
      ],
      line1: 'Ten people had booked and did not come: the service closing lists them, and you decide what follows.',
      line2: 'A reading takes one second: the company badge, or a QR code shown on the phone.',
      note: 'Constructed example · fictitious service, times and readings.',
    },
  },
  ar: {
    semaine: {
      title: 'أسبوع من وجبات الغداء: المطلوب، المقدَّم، والمدفوع دون تقديم',
      alt: 'أسبوعان من وجبات الغداء، عمود لكل يوم من الأحد إلى الخميس. الأسبوع قبل: 380 وجبة مطلوبة كل يوم، و312، 341، 298، 366، و323 مقدَّمة، أي 260 وجبة مدفوعة دون تقديم من 1900 مطلوبة. الأسبوع بعد: الطلبية هي عدد الحجوزات عند الساعة المحددة زائد عشرة، 328، 354، 311، 372، و337 مطلوبة، و311، 339، 296، 357، و322 مقدَّمة، أي 77 وجبة غير مقدَّمة من 1702.',
      header: 'مثال مركَّب · مصنع من 420 شخصاً، وجبة الغداء، من الأحد إلى الخميس',
      chartTitle: 'الوجبات المطلوبة من المموِّن، في اليوم',
      legend: ['مقدَّمة', 'مدفوعة، غير مقدَّمة'],
      before: 'قبل: 380 وجبة كل يوم، بالتقدير', after: 'بعد: الحجوزات عند الساعة المحددة، زائد عشرة',
      days: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس'],
      band: 'الجزء العلوي من كل عمود يُدفَع للمموِّن ولا يُطعم أحداً. ويظهر حالما نعدّ.',
      tiles: [
        { big: I('1 900') + ' وجبة مطلوبة', l1: 'الأسبوع قبل: 1640 مقدَّمة، و260 مدفوعة دون فائدة', l2: 'ما يقارب 14 بالمئة من الطلبية' },
        { big: I('1 652') + ' حجزاً', l1: 'الأسبوع بعد: طلبية من 1702، بهامش عشرة في اليوم', l2: '24 شخصاً قُدِّمت لهم وجبة دون حجز' },
        { big: '77 وجبة غير مقدَّمة', l1: '51 حجزوا ولم يأتوا، و26 بقيت من الهامش', l2: 'أقل من 5 بالمئة من الطلبية', hot: true },
      ],
      line1: 'قبل، الطلبية رقم ثابت. بعد، هي عدد الحجوزات عند الساعة المحددة، زائد هامش.',
      line2: 'الهامش يخدم من يأتون دون حجز؛ ومستواه يُضبَط كل شهر على ما لوحظ.',
      note: 'مثال مركَّب · مصنع وأعداد ووجبات خيالية.',
    },
    service: {
      title: 'خدمة واحدة عند الشباك: 339 مروراً، منها 101 دون شبكة',
      alt: 'خدمة غداء من الحادية عشرة والنصف إلى الواحدة والنصف، في اثنتي عشرة فترة من عشر دقائق: 12، 21، 34، 46، 52، 49، 41، 33، 24، 15، 8، و4 مرورات بالبطاقة، أي 339 وجبة مقدَّمة. الشبكة مقطوعة من الثانية عشرة وعشر دقائق إلى الثانية عشرة والنصف: المرورات الـ101 في هاتين الفترتين تبقى على لوحة الشباك وتُرسَل عند الثانية عشرة والنصف، دون ضياع ولا تكرار.',
      header: 'مثال مركَّب · غداء يوم الاثنين، لوحة واحدة عند الشباك',
      chartTitle: 'المرورات بالبطاقة، في كل فترة من عشر دقائق',
      offline: 'الشبكة مقطوعة: 101 مرور محفوظ على اللوحة',
      sync: 'عند ' + I('12:30') + ': إرسال المرورات الـ101، دون ضياع ولا تكرار',
      band: 'الشباك لا يعتمد على الشبكة: يتحقق من البطاقة بقائمة اليوم، المحمَّلة قبل الخدمة، ويرسل لاحقاً.',
      tiles: [
        { big: '339 وجبة مقدَّمة', l1: '334 بحجز، و5 دون حجز من الهامش', l2: 'الذروة: 52 مروراً في عشر دقائق' },
        { big: '4 مرورات ثانية مرفوضة', l1: 'البطاقة استُعملت من قبل في هذه الخدمة', l2: 'التحقق يتم على اللوحة، دون شبكة' },
        { big: '101 مرور دون شبكة', l1: 'محفوظة على اللوحة، ومُرسَلة عند ' + I('12:30'), l2: 'معرِّف لكل مرور: لا تكرار', hot: true },
      ],
      line1: 'عشرة أشخاص حجزوا ولم يأتوا: إقفال الخدمة يسرد أسماءهم، وأنتم تقررون ما يتبع.',
      line2: 'المرور يُقرأ في ثانية: بطاقة المؤسسة، أو رمز ' + I('QR') + ' يُعرَض على الهاتف.',
      note: 'مثال مركَّب · خدمة ومواقيت ومرورات خيالية.',
    },
  },
};
