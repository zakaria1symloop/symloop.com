// Bespoke animated figures for the 2027 "logiciel de gestion hôtelière" page.
//  planning(): a room planning board, 8 rooms by 14 nights. 97 room-nights sold out of 112
//              (87 %); 15 free nights, 5 of them isolated between two stays; the number of
//              rooms occupied each night underneath.
//  revpar():   two weeks of a 40-room hotel as two rectangles, width = occupancy and height =
//              average price. Week A: 216 of 280 room-nights at 10 056 = 2 172 000, 7 757 per
//              available room. Week B: 252 of 280 at 8 000 = 2 016 000, 7 200 per available room.
// Numbers are drawn in their own text elements, direction="ltr".
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, open, heading, esc } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function pop(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scale(0)}${(at + 1.2).toFixed(1)}%,100%{transform:scale(1)}}`); return `transform-box:fill-box;transform-origin:center;animation:${P}-${id} ${LOOP}s linear infinite`; }
function growX(css, P, id, at, dur, rtl) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'} center;animation:${P}-${id} ${LOOP}s linear infinite`; }
function growXY(css, P, id, at, dur, rtl) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scale(0)}${(at + dur).toFixed(1)}%,100%{transform:scale(1)}}`); return `transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'} bottom;animation:${P}-${id} ${LOOP}s linear infinite`; }
const TINT = 'rgba(242,181,68,0.06)';
const DARK = '#0b0b0b';

function tiles(c, css, P, ky, ts, at0) {
  let s = '';
  ts.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, at0 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? TINT : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  return s;
}
const motionOff = (P) => `@media (prefers-reduced-motion: reduce){svg [style*="${P}-"]{animation:none !important}}`;
function ltrSpans(x, y, parts, size, anchor) {
  const L = ctx(false);
  const monoCss = /style="([^"]*)"/.exec(text(L, 0, 0, 'x', { size, font: 'mono' }))[1];
  return `<text x="${x}" y="${y}" style="${monoCss}" direction="ltr" text-anchor="${anchor}">` + parts.map(([str, fill, bold]) => (str ? `<tspan fill="${fill}" style="font-weight:${bold ? 500 : 300}">${esc(str)}</tspan>` : '')).join('') + '</text>';
}
const num = (c, x, y, str, o = {}) => ltrSpans(c.X(x), y, [[str, o.fill || C.fg, o.bold]], o.size || 10.5, 'middle');
// a value drawn left-to-right, aligned on the reading-start side
const val = (c, x, y, str, o = {}) => ltrSpans(c.X(x), y, [[str, o.fill || C.fg, o.bold]], o.size || 12, c.rtl ? 'end' : 'start');
const poly = (c, pts, color, sw, dash) => `<polyline points="${pts.map(([x, y]) => `${c.X(x)},${y}`).join(' ')}" fill="none" stroke="${color}" stroke-width="${sw || 1}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const grp = (n, sep) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, sep);

// stays per room: [first night (0-based), number of nights]
const ROOMS = [
  [[0, 3], [3, 4], [8, 5]],
  [[0, 5], [6, 4], [10, 4]],
  [[1, 6], [7, 3], [11, 3]],
  [[0, 2], [2, 7], [9, 5]],
  [[2, 4], [6, 6]],
  [[0, 4], [5, 3], [9, 4]],
  [[3, 5], [8, 6]],
  [[0, 7], [7, 7]],
];
const NIGHTS = 14;
const GX = (n) => 190 + n * 62;
const GY = (r) => 198 + r * 26;

export function planning(t, rtl) {
  const c = ctx(rtl); const P = 'hq'; const css = []; const H = 686;
  const busy = ROOMS.map((stays) => { const a = Array(NIGHTS).fill(false); stays.forEach(([s0, n]) => { for (let k = s0; k < s0 + n; k++) a[k] = true; }); return a; });
  const perNight = Array.from({ length: NIGHTS }, (_, n) => busy.filter((a) => a[n]).length);
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  let frame = rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + text(c, 96, 170, t.rooms, { size: 9.5, fill: C.fg55 }) + text(c, 1100, 170, t.nights, { size: 9.5, fill: C.fg55, anchor: 'end' });
  for (let n = 0; n < NIGHTS; n++) frame += num(c, GX(n) + 31, 188, String(n + 1), { size: 9.5, fill: C.fg55 });
  for (let n = 0; n <= NIGHTS; n++) frame += poly(c, [[GX(n), 194], [GX(n), GY(ROOMS.length) - 2]], C.line);
  ROOMS.forEach((_, r) => { frame += num(c, 132, GY(r) + 16, String(101 + r), { size: 10.5, bold: true, fill: C.fg }); });
  frame += text(c, 96, GY(ROOMS.length) + 20, t.occ1, { size: 8.5, fill: C.fg55 }) + text(c, 96, GY(ROOMS.length) + 32, t.occ2, { size: 8.5, fill: C.fg55 });
  s += `<g style="animation:${show(css, P, 'pa', 3)}">${frame}</g>`;
  let k = 0;
  ROOMS.forEach((stays, r) => {
    stays.forEach(([s0, n], i) => {
      const at = 5 + k * 0.9; k += 1;
      s += `<g style="${growX(css, P, `s${r}x${i}`, at, 1.4, rtl)}">` + rect(c, GX(s0) + 2, GY(r) + 2, n * 62 - 4, 20, { stroke: C.fg55, fill: i % 2 === 0 ? C.fg35 : C.fill, r: 3 }) + '</g>';
    });
  });
  // free nights isolated between two stays
  busy.forEach((a, r) => {
    for (let n = 1; n < NIGHTS - 1; n++) if (!a[n] && a[n - 1] && a[n + 1]) s += `<g style="${pop(css, P, `o${r}x${n}`, 27 + r * 0.8)}">` + rect(c, GX(n) + 4, GY(r) + 3, 54, 18, { stroke: C.accent, fill: TINT, dash: '4 3', r: 3 }) + '</g>';
  });
  perNight.forEach((v, n) => {
    s += `<g style="animation:${show(css, P, `n${n}`, 34 + n * 0.4)}">` + num(c, GX(n) + 31, GY(ROOMS.length) + 28, String(v), { size: 11, bold: v === ROOMS.length, fill: v === ROOMS.length ? C.accent : C.fg }) + '</g>';
  });
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bd', 41)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 44);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// two weeks of a 40-room hotel: room-nights sold, average price per room sold
const WEEKS = [{ sold: 216, revenue: 2172000 }, { sold: 252, revenue: 2016000 }];
const AVAILABLE = 280; const PRICE_TOP = 12000;

export function revpar(t, rtl) {
  const c = ctx(rtl); const P = 'hv'; const css = []; const H = 686;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + poly(c, [[600, 160], [600, 438]], C.line2) + '</g>';
  WEEKS.forEach((w, i) => {
    const x0 = i === 0 ? 106 : 626; const at = 5 + i * 17; const hot = i === 0;
    const fw = 240; const fh = 200; const top = 206; const base = top + fh;
    const revenue = w.revenue; const adr = Math.round(revenue / w.sold); const per = Math.round(revenue / AVAILABLE); const occ = Math.round(100 * w.sold / AVAILABLE);
    const ww = fw * w.sold / AVAILABLE; const wh = fh * adr / PRICE_TOP;
    s += `<g style="animation:${show(css, P, `f${i}`, at)}">` + text(c, x0, 180, t.weeks[i], { size: 12, fill: hot ? C.accent : C.fg, weight: 500 }) + rect(c, x0, top, fw, fh, { stroke: C.fg35, fill: 'none', dash: '4 4' }) + text(c, x0, base + 18, t.axisX, { size: 8.5, fill: C.fg55 }) + '</g>';
    s += `<g style="${growXY(css, P, `r${i}`, at + 1.5, 3, rtl)}">` + rect(c, x0, base - wh, ww, wh, { stroke: hot ? C.accent : C.fg55, fill: hot ? 'rgba(242,181,68,0.22)' : C.fg35 }) + '</g>';
    s += `<g style="animation:${show(css, P, `c${i}`, at + 5)}">` + num(c, x0 + ww / 2, base - wh / 2 - 2, `${occ}${t.pc}`, { size: 16, bold: true, fill: hot ? C.accent : C.fg }) + num(c, x0 + ww / 2, base - wh / 2 + 16, `× ${grp(adr, t.sep)}`, { size: 11, fill: C.fg70 }) + '</g>';
    const tx = x0 + fw + 24;
    const pair = (y, label, value, id, d, big) => `<g style="animation:${show(css, P, `${id}${i}`, at + d)}">` + text(c, tx, y, label, { size: 9, fill: big && hot ? C.accent : C.fg70 }) + val(c, tx, y + (big ? 22 : 17), value, { size: big ? 17 : 12.5, bold: true, fill: big && hot ? C.accent : C.fg }) + '</g>';
    s += pair(226, t.lSold, `${w.sold} / ${AVAILABLE}`, 'a', 6, false);
    s += pair(272, t.lAdr, grp(adr, t.sep), 'b', 7.5, false);
    s += pair(318, t.lRev, grp(revenue, t.sep), 'd', 9, false);
    s += pair(366, t.lPer, grp(per, t.sep), 'e', 11, true);
  });
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bd', 40)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 44);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    planning: {
      title: 'Le planning des chambres, sur quatorze nuits',
      alt: 'Un planning de huit chambres sur quatorze nuits : 97 nuitées vendues sur 112, soit 87 %. Quinze nuits restent libres, dont cinq isolées entre deux séjours. Sous le planning, le nombre de chambres occupées chaque nuit : 5, 6, 7, 8, 7, 7, 8, 7, 7, 8, 7, 8, 7 et 5.',
      header: 'Exemple construit · huit chambres, quatorze nuits, chaque bloc est un séjour',
      rooms: 'Chambres', nights: 'nuits 1 à 14',
      occ1: 'chambres', occ2: 'occupées',
      band: 'Une chambre ne peut pas porter deux séjours la même nuit : le planning le rend impossible, et il montre les nuits isolées que personne ne voyait.',
      tiles: [
        { big: '97 nuitées', l1: 'vendues sur 112 possibles', l2: 'soit 87 % d’occupation' },
        { big: '5 nuits isolées', l1: 'une seule nuit libre entre deux séjours', l2: 'invendables à qui demande deux nuits', hot: true },
        { big: '4 nuits pleines', l1: 'les huit chambres occupées', l2: 'celles où une erreur coûte un client' },
      ],
      line1: 'À la réservation, le logiciel propose la chambre qui laisse le moins de nuits isolées, au lieu de la première libre.',
      line2: 'Téléphone, comptoir, agence, site : toutes les réservations tombent sur le même planning, à la seconde.',
      note: 'Exemple construit · chambres, séjours et nuits fictifs.',
    },
    revpar: {
      title: 'Deux semaines : plus plein, ou mieux vendu',
      alt: 'Deux semaines d’un hôtel de 40 chambres. Semaine A : 216 nuitées sur 280, soit 77 %, à 10 056 dinars en moyenne, 2 172 000 dinars de recette et 7 757 dinars par chambre disponible. Semaine B : 252 nuitées sur 280, soit 90 %, à 8 000 dinars en moyenne, 2 016 000 dinars de recette et 7 200 dinars par chambre disponible.',
      header: 'Exemple construit · un hôtel de 40 chambres, deux semaines, 280 nuitées disponibles chacune',
      weeks: ['Semaine A', 'Semaine B'], axisX: 'largeur : occupation · hauteur : prix moyen',
      lSold: 'nuitées vendues', lAdr: 'prix moyen par chambre vendue (DA)', lRev: 'recette des chambres (DA)', lPer: 'recette par chambre disponible (DA)',
      sep: ' ', pc: ' %',
      band: 'Un hôtel plus plein n’est pas forcément un hôtel qui gagne plus : c’est la recette par chambre disponible qui compare deux semaines, pas le taux d’occupation.',
      tiles: [
        { big: '77 % occupé', l1: 'à 10 056 DA en moyenne', l2: '7 757 DA par chambre disponible', hot: true },
        { big: '90 % occupé', l1: 'à 8 000 DA en moyenne', l2: '7 200 DA par chambre disponible' },
        { big: '36 chambres', l1: 'de plus à préparer, pour 156 000 DA de moins', l2: '252 nuitées contre 216' },
      ],
      line1: 'Recette par chambre disponible : la recette des chambres divisée par les chambres disponibles sur la période.',
      line2: 'Le logiciel la calcule chaque nuit à la clôture, par type de chambre et par canal de réservation.',
      note: 'Exemple construit · hôtel, semaines et prix fictifs.',
    },
  },
  en: {
    planning: {
      title: 'The room planning board, over fourteen nights',
      alt: 'A planning board of eight rooms over fourteen nights: 97 room-nights sold out of 112, that is 87%. Fifteen nights remain free, five of them isolated between two stays. Under the board, the number of rooms occupied each night: 5, 6, 7, 8, 7, 7, 8, 7, 7, 8, 7, 8, 7 and 5.',
      header: 'Constructed example · eight rooms, fourteen nights, each block is a stay',
      rooms: 'Rooms', nights: 'nights 1 to 14',
      occ1: 'rooms', occ2: 'occupied',
      band: 'A room cannot carry two stays on the same night: the board makes it impossible, and it shows the isolated nights nobody could see.',
      tiles: [
        { big: '97 room-nights', l1: 'sold out of 112 possible', l2: 'that is 87% occupancy' },
        { big: '5 isolated nights', l1: 'a single free night between two stays', l2: 'unsellable to anyone asking for two nights', hot: true },
        { big: '4 full nights', l1: 'all eight rooms occupied', l2: 'the ones where a mistake costs a guest' },
      ],
      line1: 'At booking, the software proposes the room that leaves the fewest isolated nights, instead of the first one free.',
      line2: 'Phone, desk, agency, website: every reservation lands on the same board, to the second.',
      note: 'Constructed example · fictitious rooms, stays and nights.',
    },
    revpar: {
      title: 'Two weeks: fuller, or better sold',
      alt: 'Two weeks of a 40-room hotel. Week A: 216 room-nights out of 280, that is 77%, at 10,056 dinars on average, 2,172,000 dinars of revenue and 7,757 dinars per available room. Week B: 252 room-nights out of 280, that is 90%, at 8,000 dinars on average, 2,016,000 dinars of revenue and 7,200 dinars per available room.',
      header: 'Constructed example · a 40-room hotel, two weeks, 280 room-nights available in each',
      weeks: ['Week A', 'Week B'], axisX: 'width: occupancy · height: average price',
      lSold: 'room-nights sold', lAdr: 'average price per room sold (DA)', lRev: 'room revenue (DA)', lPer: 'revenue per available room (DA)',
      sep: ',', pc: '%',
      band: 'A fuller hotel is not necessarily a hotel that earns more: revenue per available room compares two weeks, not the occupancy rate.',
      tiles: [
        { big: '77% occupied', l1: 'at DA 10,056 on average', l2: 'DA 7,757 per available room', hot: true },
        { big: '90% occupied', l1: 'at DA 8,000 on average', l2: 'DA 7,200 per available room' },
        { big: '36 rooms', l1: 'more to prepare, for DA 156,000 less', l2: '252 room-nights against 216' },
      ],
      line1: 'Revenue per available room: room revenue divided by the rooms available over the period.',
      line2: 'The software calculates it every night at closing, per room type and per booking channel.',
      note: 'Constructed example · fictitious hotel, weeks and prices.',
    },
  },
  ar: {
    planning: {
      title: 'مخطط الغرف، على أربع عشرة ليلة',
      alt: 'مخطط من ثماني غرف على أربع عشرة ليلة: 97 ليلة مباعة من 112، أي 87 بالمئة. وخمس عشرة ليلة تبقى حرّة، خمس منها معزولة بين إقامتين. وتحت المخطط، عدد الغرف المشغولة كل ليلة: 5، 6، 7، 8، 7، 7، 8، 7، 7، 8، 7، 8، 7 ثم 5.',
      header: 'مثال مركَّب · ثماني غرف، أربع عشرة ليلة، وكل مستطيل إقامة',
      rooms: 'الغرف', nights: 'الليالي من 1 إلى 14',
      occ1: 'الغرف', occ2: 'المشغولة',
      band: 'الغرفة لا تحمل إقامتين في الليلة نفسها: المخطط يجعل ذلك مستحيلاً، ويُظهر الليالي المعزولة التي لم يكن يراها أحد.',
      tiles: [
        { big: '97 ليلة', l1: 'مباعة من 112 ممكنة', l2: 'أي ⁦87 %⁩ من الإشغال' },
        { big: '5 ليالٍ معزولة', l1: 'ليلة حرّة واحدة بين إقامتين', l2: 'لا تُباع لمن يطلب ليلتين', hot: true },
        { big: '4 ليالٍ ممتلئة', l1: 'الغرف الثماني كلها مشغولة', l2: 'وهي التي يكلّف فيها الخطأ نزيلاً' },
      ],
      line1: 'عند الحجز، يقترح البرنامج الغرفة التي تترك أقل عدد من الليالي المعزولة، بدل أول غرفة حرّة.',
      line2: 'الهاتف، الاستقبال، الوكالة، والموقع: كل الحجوزات تقع على المخطط نفسه، في الثانية نفسها.',
      note: 'مثال مركَّب · غرف وإقامات وليالٍ خيالية.',
    },
    revpar: {
      title: 'أسبوعان: امتلاء أكثر، أم بيع أحسن',
      alt: 'أسبوعان لفندق من 40 غرفة. الأسبوع أ: 216 ليلة من 280، أي 77 بالمئة، بمتوسط 10 056 ديناراً، 2 172 000 دينار من المداخيل و7 757 ديناراً لكل غرفة متاحة. الأسبوع ب: 252 ليلة من 280، أي 90 بالمئة، بمتوسط 8 000 دينار، 2 016 000 دينار من المداخيل و7 200 دينار لكل غرفة متاحة.',
      header: 'مثال مركَّب · فندق من 40 غرفة، أسبوعان، و280 ليلة متاحة في كل واحد',
      weeks: ['الأسبوع أ', 'الأسبوع ب'], axisX: 'العرض: الإشغال · الارتفاع: متوسط السعر',
      lSold: 'الليالي المباعة', lAdr: 'متوسط السعر لكل غرفة مباعة (دج)', lRev: 'مداخيل الغرف (دج)', lPer: 'المدخول لكل غرفة متاحة (دج)',
      sep: ' ', pc: ' %',
      band: 'فندق أكثر امتلاء ليس بالضرورة فندقاً يربح أكثر: المدخول لكل غرفة متاحة هو الذي يقارن أسبوعين، لا نسبة الإشغال.',
      tiles: [
        { big: 'إشغال ⁦77 %⁩', l1: 'بمتوسط ⁦10 056⁩ دج', l2: '⁦7 757⁩ دج لكل غرفة متاحة', hot: true },
        { big: 'إشغال ⁦90 %⁩', l1: 'بمتوسط ⁦8 000⁩ دج', l2: '⁦7 200⁩ دج لكل غرفة متاحة' },
        { big: '36 غرفة', l1: 'إضافية للتحضير، مقابل ⁦156 000⁩ دج أقل', l2: '252 ليلة مقابل 216' },
      ],
      line1: 'المدخول لكل غرفة متاحة: مداخيل الغرف مقسومة على الغرف المتاحة في الفترة.',
      line2: 'البرنامج يحسبه كل ليلة عند الإغلاق، لكل نوع من الغرف ولكل قناة حجز.',
      note: 'مثال مركَّب · فندق وأسابيع وأسعار خيالية.',
    },
  },
};
