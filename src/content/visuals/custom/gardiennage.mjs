// Bespoke animated figures for the 2027 "comment gérer une société de gardiennage" page.
//  couverture(): one site, three posts guarded day and night for thirty days: 180 twelve-hour
//                shifts, one cell each. 171 are covered as planned, 6 by a replacement found in
//                time, 3 are left empty (three nights, 36 hours). Coverage 177 of 180 = 98.3 %.
//  ronde():      one night of patrols on a site with eight checkpoints. Four rounds are due, at
//                22:00, 00:00, 02:00 and 04:00, so 32 readings are expected. Two rounds are
//                complete, the third reads 6 points of 8, the fourth is not done: 22 of 32.
// Numbers are drawn in their own text elements, direction="ltr".
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, open, heading, esc } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function pop(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scale(0)}${(at + 1.2).toFixed(1)}%,100%{transform:scale(1)}}`); return `transform-box:fill-box;transform-origin:center;animation:${P}-${id} ${LOOP}s linear infinite`; }
function drawLine(css, P, id, at, dur, len) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{stroke-dashoffset:${len}}${(at + dur).toFixed(1)}%,100%{stroke-dashoffset:0}}`); return `stroke-dasharray:${len};animation:${P}-${id} ${LOOP}s linear infinite`; }
const TINT = 'rgba(242,181,68,0.06)';
const SOFT = 'rgba(242,181,68,0.30)';
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
const poly = (c, pts, color, sw, dash) => `<polyline points="${pts.map(([x, y]) => `${c.X(x)},${y}`).join(' ')}" fill="none" stroke="${color}" stroke-width="${sw || 1}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const dot = (c, x, y, r, fill, stroke, sw) => `<circle cx="${c.X(x)}" cy="${y}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${sw || 1}"/>`;

// one site: 3 posts x (day, night) x 30 days; [row, day index]
const DAYS = 30; const ROWS = 6;
const REPLACED = [[0, 4], [1, 11], [3, 11], [2, 17], [5, 23], [4, 27]];
const EMPTY = [[1, 6], [5, 19], [3, 20]];
const GX = (d) => 262 + d * 27;
const GY = (r) => 204 + r * 34;
const has = (list, r, d) => list.some(([a, b]) => a === r && b === d);

export function couverture(t, rtl) {
  const c = ctx(rtl); const P = 'gd'; const css = []; const H = 686;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  let frame = rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + text(c, 96, 170, t.chartTitle, { size: 11, fill: C.fg, weight: 500 });
  [1, 5, 10, 15, 20, 25, 30].forEach((d) => { frame += num(c, GX(d - 1) + 11.5, 196, String(d), { size: 9, fill: C.fg55 }); });
  for (let r = 0; r < ROWS; r += 1) frame += text(c, 96, GY(r) + 17, t.rows[r], { size: 10, fill: r % 2 ? C.fg70 : C.fg });
  [[C.fg35, C.fg55, t.legOk], [SOFT, C.accent, t.legRep], [C.accent, C.accent, t.legEmpty]].forEach(([fill, stroke, label], i) => { frame += rect(c, 262 + i * 270, 420, 12, 12, { stroke, fill }) + text(c, 282 + i * 270, 431, label, { size: 9.5, fill: C.fg70 }); });
  s += `<g style="animation:${show(css, P, 'pa', 3)}">${frame}</g>`;
  for (let d = 0; d < DAYS; d += 1) {
    let col = '';
    for (let r = 0; r < ROWS; r += 1) {
      const empty = has(EMPTY, r, d); const rep = has(REPLACED, r, d);
      col += rect(c, GX(d), GY(r), 23, 26, { stroke: empty || rep ? C.accent : C.fg55, fill: empty ? C.accent : rep ? SOFT : C.fg35 });
    }
    s += `<g style="animation:${show(css, P, `d${d}`, 5 + d * 0.8)}">${col}</g>`;
  }
  // a frame around each empty post
  EMPTY.forEach(([r, d], i) => { s += `<g style="${pop(css, P, `e${i}`, 31 + i * 2)}">` + rect(c, GX(d) - 4, GY(r) - 4, 31, 34, { stroke: C.fg, fill: 'none', sw: 1.5 }) + '</g>'; });
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bd', 39)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 43);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// eight checkpoints around the site, four rounds in the night; 1 = read, 0 = missed
const PTS = [[140, 396], [265, 396], [392, 396], [392, 300], [392, 208], [265, 208], [140, 208], [140, 300]];
const ROUNDS = [
  { time: '22:00', read: [1, 1, 1, 1, 1, 1, 1, 1] },
  { time: '00:00', read: [1, 1, 1, 1, 1, 1, 1, 1] },
  { time: '02:00', read: [1, 1, 1, 1, 0, 0, 1, 1] },
  { time: '04:00', read: [0, 0, 0, 0, 0, 0, 0, 0] },
];
const TX = (j) => 600 + j * 56;
const TY = (i) => 236 + i * 46;

export function ronde(t, rtl) {
  const c = ctx(rtl); const P = 'rq'; const css = []; const H = 686;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + text(c, 96, 170, t.chartTitle, { size: 11, fill: C.fg, weight: 500 })
    + rect(c, 196, 252, 140, 100, { stroke: C.line2, fill: C.fill }) + text(c, 266, 306, t.building, { size: 9.5, fill: C.fg55, anchor: 'middle' }) + '</g>';
  // the patrol path, then the checkpoints
  const loop = [...PTS, PTS[0]];
  s += `<polyline points="${loop.map(([x, y]) => `${c.X(x)},${y}`).join(' ')}" fill="none" stroke="${C.fg55}" stroke-width="1.5" style="${drawLine(css, P, 'path', 5, 7, 880)}"/>`;
  PTS.forEach(([x, y], j) => {
    const weak = j === 4 || j === 5;
    s += `<g style="${pop(css, P, `p${j}`, 6 + j * 0.8)}">` + dot(c, x, y, 11, weak ? SOFT : DARK, weak ? C.accent : C.fg55, 1.5) + num(c, x, y + 4, String(j + 1), { size: 10.5, bold: true, fill: C.fg }) + '</g>';
  });
  s += `<g style="animation:${show(css, P, 'wk', 14)}">` + text(c, 266, 436, t.weak, { size: 9.5, fill: C.accent, anchor: 'middle' }) + '</g>';
  // the night: one row per round, one column per checkpoint
  let head = text(c, 470, 204, t.colRound, { size: 9, fill: C.fg55 }) + text(c, 1060, 204, t.colRead, { size: 9, fill: C.fg55, anchor: 'middle' });
  PTS.forEach((_, j) => { head += num(c, TX(j), 204, String(j + 1), { size: 9.5, fill: C.fg70 }); });
  s += `<g style="animation:${show(css, P, 'th', 15)}">${head}${poly(c, [[470, 212], [1096, 212]], C.line2)}</g>`;
  ROUNDS.forEach((r, i) => {
    const y = TY(i); const at = 17 + i * 5; const n = r.read.reduce((a, b) => a + b, 0); const bad = n < r.read.length;
    s += `<g style="animation:${show(css, P, `r${i}`, at)}">` + ltrSpans(c.X(470), y + 4, [[r.time, bad ? C.accent : C.fg, true]], 12, rtl ? 'end' : 'start') + text(c, 470, y + 19, t.notes[i], { size: 8.5, fill: bad ? C.accent : C.fg55 }) + poly(c, [[470, y + 28], [1096, y + 28]], C.line) + '</g>';
    r.read.forEach((ok, j) => { s += `<g style="${pop(css, P, `c${i}x${j}`, at + 0.5 + j * 0.4)}">` + (ok ? dot(c, TX(j), y, 6, C.fg35, C.fg55) : dot(c, TX(j), y, 6, 'none', C.accent, 1.5) + poly(c, [[TX(j) - 3, y - 3], [TX(j) + 3, y + 3]], C.accent, 1.5) + poly(c, [[TX(j) - 3, y + 3], [TX(j) + 3, y - 3]], C.accent, 1.5)) + '</g>'; });
    s += `<g style="animation:${show(css, P, `n${i}`, at + 4)}">` + num(c, 1060, y + 5, `${n}/${r.read.length}`, { size: 12, bold: true, fill: bad ? C.accent : C.fg }) + '</g>';
  });
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bd', 39)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 43);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    couverture: {
      title: 'Un mois sur un site : 180 vacations à couvrir',
      alt: 'Un site de trois postes gardés jour et nuit pendant trente jours : 180 vacations de douze heures, une case chacune. 171 sont couvertes comme prévu, 6 par un remplacement trouvé à temps, et 3 restent vides : trois nuits, soit 36 heures sans personne au poste. Le taux de couverture est de 98,3 %.',
      header: 'Exemple construit · un site, trois postes, vacations de douze heures, trente jours',
      chartTitle: 'Une case par vacation · les jours du mois en colonnes',
      rows: ['Poste 1 · jour', 'Poste 1 · nuit', 'Poste 2 · jour', 'Poste 2 · nuit', 'Poste 3 · jour', 'Poste 3 · nuit'],
      legOk: 'couverte comme prévu', legRep: 'couverte par un remplacement', legEmpty: 'poste resté vide',
      band: 'Sur le papier, le mois est couvert à 98,3 %. Le client, lui, se souvient de trois nuits : l’outil les signale dix minutes après l’heure de prise de poste.',
      tiles: [
        { big: '180 vacations', l1: 'trois postes, jour et nuit, trente jours', l2: '2 160 heures à couvrir' },
        { big: '177 couvertes', l1: 'dont 6 par un remplacement trouvé à temps', l2: 'taux de couverture : 98,3 %' },
        { big: '3 postes vides', l1: 'trois nuits, 36 heures sans personne au poste', l2: 'c’est ce que le client retient', hot: true },
      ],
      line1: 'Chaque vacation a un poste, une heure de début et une personne ; sans pointage au poste dans les dix minutes, l’alerte part.',
      line2: 'La personne qui remplace se cherche parmi les agents disponibles qui connaissent le site, pas dans un carnet de téléphone.',
      note: 'Exemple construit · site, vacations et absences fictifs ; le délai d’alerte se règle.',
    },
    ronde: {
      title: 'Une nuit de rondes : huit points, quatre rondes prévues',
      alt: 'Un site avec huit points de contrôle et quatre rondes prévues dans la nuit, à 22:00, 00:00, 02:00 et 04:00, soit 32 passages attendus. Les deux premières rondes lisent les huit points ; celle de 02:00 en lit six, les points 5 et 6 à l’arrière du site sont manqués ; celle de 04:00 n’est pas faite. Total : 22 passages lus sur 32.',
      header: 'Exemple construit · un site, huit points de contrôle, une ronde toutes les deux heures',
      chartTitle: 'Le site, ses huit points de contrôle, et les quatre rondes de la nuit',
      building: 'entrepôt', weak: 'points 5 et 6 : l’arrière du site',
      colRound: 'ronde', colRead: 'points lus',
      notes: ['complète, 24 minutes', 'complète, 26 minutes', 'deux points manqués', 'ronde non faite'],
      band: 'Le cahier de ronde porte quatre signatures ; les étiquettes disent deux rondes complètes et une incomplète. Le rapport du matin part de ce que le téléphone a lu.',
      tiles: [
        { big: '32 passages attendus', l1: 'huit points, quatre rondes dans la nuit', l2: 'une ronde toutes les deux heures' },
        { big: '22 passages lus', l1: 'deux rondes complètes, une à 6 points sur 8', l2: 'soit 69 % de la nuit' },
        { big: 'ronde de 04:00', l1: 'non faite : aucun point lu', l2: 'sur le cahier, elle était signée', hot: true },
      ],
      line1: 'À chaque point, l’agent approche son téléphone d’une étiquette : le système enregistre le point, la date et l’heure.',
      line2: 'Un point manqué ou une ronde en retard se voit pendant la nuit, au poste de contrôle, et pas à la fin du mois.',
      note: 'Exemple construit · site, points et horaires fictifs.',
    },
  },
  en: {
    couverture: {
      title: 'A month on one site: 180 shifts to cover',
      alt: 'A site with three posts guarded day and night for thirty days: 180 twelve-hour shifts, one cell each. 171 are covered as planned, 6 by a replacement found in time, and 3 are left empty: three nights, that is 36 hours with nobody at the post. The coverage rate is 98.3%.',
      header: 'Constructed example · one site, three posts, twelve-hour shifts, thirty days',
      chartTitle: 'One cell per shift · the days of the month in columns',
      rows: ['Post 1 · day', 'Post 1 · night', 'Post 2 · day', 'Post 2 · night', 'Post 3 · day', 'Post 3 · night'],
      legOk: 'covered as planned', legRep: 'covered by a replacement', legEmpty: 'post left empty',
      band: 'On paper the month is covered at 98.3%. The customer remembers three nights: the tool flags them ten minutes after the shift is due to start.',
      tiles: [
        { big: '180 shifts', l1: 'three posts, day and night, thirty days', l2: '2,160 hours to cover' },
        { big: '177 covered', l1: '6 of them by a replacement found in time', l2: 'coverage rate: 98.3%' },
        { big: '3 empty posts', l1: 'three nights, 36 hours with nobody at the post', l2: 'that is what the customer remembers', hot: true },
      ],
      line1: 'Each shift has a post, a start time and a person; with no check-in at the post within ten minutes, the alert goes out.',
      line2: 'The replacement is looked for among available guards who know the site, not in a phone book.',
      note: 'Constructed example · fictitious site, shifts and absences; the alert delay can be set.',
    },
    ronde: {
      title: 'A night of patrols: eight points, four rounds',
      alt: 'A site with eight checkpoints and four rounds due in the night, at 22:00, 00:00, 02:00 and 04:00, that is 32 readings expected. The first two rounds read all eight points; the 02:00 round reads six, points 5 and 6 at the back of the site are missed; the 04:00 round is not done. Total: 22 readings of 32.',
      header: 'Constructed example · one site, eight checkpoints, a round every two hours',
      chartTitle: 'The site, its eight checkpoints, and the four rounds of the night',
      building: 'warehouse', weak: 'points 5 and 6: the back of the site',
      colRound: 'round', colRead: 'points read',
      notes: ['complete, 24 minutes', 'complete, 26 minutes', 'two points missed', 'round not done'],
      band: 'The patrol notebook carries four signatures; the tags say two complete rounds and one incomplete. The morning report starts from what the phone read.',
      tiles: [
        { big: '32 readings expected', l1: 'eight points, four rounds in the night', l2: 'a round every two hours' },
        { big: '22 readings made', l1: 'two complete rounds, one at 6 points of 8', l2: 'that is 69% of the night' },
        { big: '04:00 round', l1: 'not done: no point read', l2: 'in the notebook, it was signed', hot: true },
      ],
      line1: 'At each point, the guard holds the phone to a tag: the system records the point, the date and the time.',
      line2: 'A missed point or a late round shows during the night, at the control desk, and not at the end of the month.',
      note: 'Constructed example · fictitious site, points and times.',
    },
  },
  ar: {
    couverture: {
      title: 'شهر على موقع واحد: 180 نوبة للتغطية',
      alt: 'موقع بثلاثة مراكز حراسة ليلاً ونهاراً مدة ثلاثين يوماً: 180 نوبة من اثنتي عشرة ساعة، خانة لكل نوبة. 171 مغطّاة كما كان مبرمجاً، 6 ببديل وُجد في الوقت، و3 بقيت فارغة: ثلاث ليالٍ، أي 36 ساعة دون أحد في المركز. ونسبة التغطية 98,3 بالمئة.',
      header: 'مثال مركَّب · موقع واحد، ثلاثة مراكز، نوبات من اثنتي عشرة ساعة، وثلاثون يوماً',
      chartTitle: 'خانة لكل نوبة · وأيام الشهر في الأعمدة',
      rows: ['المركز 1 · نهار', 'المركز 1 · ليل', 'المركز 2 · نهار', 'المركز 2 · ليل', 'المركز 3 · نهار', 'المركز 3 · ليل'],
      legOk: 'مغطّاة كما كان مبرمجاً', legRep: 'مغطّاة ببديل', legEmpty: 'مركز بقي فارغاً',
      band: 'على الورق، الشهر مغطّى بنسبة ⁦98,3 %⁩. أما الزبون فيتذكّر ثلاث ليالٍ: والأداة تنبّه إليها عشر دقائق بعد ساعة استلام المركز.',
      tiles: [
        { big: '180 نوبة', l1: 'ثلاثة مراكز، ليلاً ونهاراً، ثلاثين يوماً', l2: '⁦2 160⁩ ساعة للتغطية' },
        { big: '177 مغطّاة', l1: 'منها 6 ببديل وُجد في الوقت', l2: 'نسبة التغطية: ⁦98,3 %⁩' },
        { big: '3 مراكز فارغة', l1: 'ثلاث ليالٍ، 36 ساعة دون أحد في المركز', l2: 'هذا ما يتذكّره الزبون', hot: true },
      ],
      line1: 'لكل نوبة مركز، ساعة بداية، وشخص؛ ودون تسجيل حضور في المركز خلال عشر دقائق، ينطلق التنبيه.',
      line2: 'البديل يُبحث عنه بين الأعوان المتاحين الذين يعرفون الموقع، لا في دفتر هاتف.',
      note: 'مثال مركَّب · موقع ونوبات وغيابات خيالية؛ ومهلة التنبيه تُضبط.',
    },
    ronde: {
      title: 'ليلة من الدوريات: ثماني نقاط، وأربع دوريات مبرمجة',
      alt: 'موقع بثماني نقاط مراقبة وأربع دوريات مبرمجة في الليل، في 22:00، 00:00، 02:00، و04:00، أي 32 قراءة منتظَرة. الدوريتان الأوليان تقرآن النقاط الثماني؛ ودورية 02:00 تقرأ ستاً، والنقطتان 5 و6 في خلف الموقع لم تُقرآ؛ ودورية 04:00 لم تُنجَز. المجموع: 22 قراءة من 32.',
      header: 'مثال مركَّب · موقع واحد، ثماني نقاط مراقبة، ودورية كل ساعتين',
      chartTitle: 'الموقع، نقاط مراقبته الثماني، والدوريات الأربع في الليل',
      building: 'المستودع', weak: 'النقطتان 5 و6: خلف الموقع',
      colRound: 'الدورية', colRead: 'النقاط المقروءة',
      notes: ['كاملة، 24 دقيقة', 'كاملة، 26 دقيقة', 'نقطتان لم تُقرآ', 'دورية لم تُنجَز'],
      band: 'دفتر الدوريات يحمل أربعة توقيعات؛ والملصقات تقول دوريتين كاملتين وواحدة ناقصة. وتقرير الصباح ينطلق مما قرأه الهاتف.',
      tiles: [
        { big: '32 قراءة منتظَرة', l1: 'ثماني نقاط، وأربع دوريات في الليل', l2: 'دورية كل ساعتين' },
        { big: '22 قراءة منجزة', l1: 'دوريتان كاملتان، وواحدة بـ6 نقاط من 8', l2: 'أي ⁦69 %⁩ من الليلة' },
        { big: 'دورية ⁦04:00⁩', l1: 'لم تُنجَز: لا نقطة مقروءة', l2: 'وفي الدفتر، كانت موقَّعة', hot: true },
      ],
      line1: 'عند كل نقطة، يقرّب العون هاتفه من ملصق: والنظام يسجّل النقطة، التاريخ، والساعة.',
      line2: 'نقطة لم تُقرأ أو دورية متأخرة تُرى أثناء الليل، في مركز المراقبة، لا في آخر الشهر.',
      note: 'مثال مركَّب · موقع ونقاط وتوقيتات خيالية.',
    },
  },
};
