// Bespoke animated figures for the 2027 "comment créer une plateforme de mise en relation" page.
//  densite():      the same twelve tradespeople drawn on two maps. On the left they work in three
//                  neighbouring communes (map 12 km wide): seven are within 3 km of the request,
//                  five of them free, and the request is accepted in 4 minutes. On the right they
//                  are spread over a whole wilaya (map 60 km wide): one is within 3 km and busy,
//                  and the request gets no answer.
//  encaissement(): when the platform's money arrives, for a job paid in cash. A 10 % commission is
//                  due after the job: of 400 000 due on 1 000 jobs, 220 000 are paid on time,
//                  60 000 after a reminder and 120 000 never. A fixed fee of 250 taken from a
//                  prepaid credit when the job is accepted brings 250 000, before the job.
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
const dot = (c, x, y, r, fill, stroke, sw, dash) => `<circle cx="${c.X(x)}" cy="${y}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${sw || 1}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const grp = (n, sep) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, sep);

// twelve tradespeople on each map: [dx km, dy km, busy]; the request is at the centre
const RADIUS = 3;
const MAPS = [
  { x0: 100, scale: 400 / 12, pts: [[-1.8, -1.0, 0], [1.5, -1.6, 0], [-1.0, 1.6, 0], [2.4, 1.0, 0], [-2.4, 0.8, 1], [0.6, 2.6, 0], [2.6, -1.0, 1], [-5.0, -2.4, 0], [5.0, 2.4, 0], [-5.2, 2.6, 0], [5.3, -2.6, 0], [4.9, 0.6, 0]], accept: [[2, 4], [0, 6]] },
  { x0: 540, scale: 400 / 60, pts: [[1.5, 2.5, 1], [-25, -10.5, 0], [-18, 11.5, 0], [-12, -6.5, 0], [-8, 14.5, 0], [10, -11.5, 0], [14, 9.5, 0], [22, -4.5, 0], [25, 13.5, 0], [-22, 0.5, 0], [6, 15, 0], [18, 2.5, 0]], accept: [] },
];
const MY = 196; const MH = 220;

export function densite(t, rtl) {
  const c = ctx(rtl); const P = 'dz'; const css = []; const H = 686;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  let frame = rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + text(c, 96, 170, t.chartTitle, { size: 11, fill: C.fg, weight: 500 });
  MAPS.forEach((m, i) => { frame += rect(c, m.x0, MY, 400, MH, { stroke: C.line2, fill: C.fill }) + text(c, m.x0, MY - 8, t.maps[i], { size: 9.5, fill: C.fg70 }); });
  [[C.accent, C.accent, t.leg[0]], [C.fg, C.fg, t.leg[1]], ['none', C.fg, t.leg[2]], [C.fg35, C.fg35, t.leg[3]]].forEach(([fill, stroke, label], i) => { frame += dot(c, 966, 214 + i * 26, 4.5, fill, stroke, 1.5) + text(c, 980, 218 + i * 26, label, { size: 9, fill: C.fg70 }); });
  s += `<g style="animation:${show(css, P, 'pa', 3)}">${frame}</g>`;
  MAPS.forEach((m, i) => {
    const cx = m.x0 + 200; const cy = MY + MH / 2; const r = RADIUS * m.scale;
    const at = (id) => (id === 'ring' ? 5 : 7);
    s += `<g style="${pop(css, P, `r${i}`, at('ring'))}">` + dot(c, cx, cy, r, TINT, C.accent, 1.2, '4 3') + '</g>';
    s += `<g style="${pop(css, P, `q${i}`, at('req'))}">` + dot(c, cx, cy, 5.5, C.accent, C.accent) + '</g>';
    let inside = 0; let free = 0;
    m.pts.forEach(([dx, dy, busy], j) => {
      const inR = Math.hypot(dx, dy) <= RADIUS; if (inR) { inside += 1; if (!busy) free += 1; }
      const x = cx + dx * m.scale; const y = cy + dy * m.scale;
      s += `<g style="${pop(css, P, `a${i}x${j}`, 9 + j * 0.8)}">` + (inR ? dot(c, x, y, 5, busy ? 'none' : C.fg, C.fg, 1.5) : dot(c, x, y, 4, C.fg35, C.fg35)) + '</g>';
    });
    m.accept.forEach(([j, min], k) => {
      const [dx, dy] = m.pts[j]; const x = cx + dx * m.scale; const y = cy + dy * m.scale;
      s += `<polyline points="${c.X(x)},${y} ${c.X(cx)},${cy}" fill="none" stroke="${C.accent}" stroke-width="1.6" style="${drawLine(css, P, `l${i}x${k}`, 21 + k * 3, 1.8, Math.ceil(Math.hypot(x - cx, y - cy)))}"/>`;
      s += `<g style="animation:${show(css, P, `m${i}x${k}`, 23 + k * 3)}">` + dot(c, x, y, 5.5, C.accent, C.accent) + text(c, x - 10, y - 9, t.minutes.replace('{n}', String(min)), { size: 9.5, fill: C.accent, weight: 500, anchor: 'end' }) + '</g>';
    });
    const bad = m.accept.length === 0;
    s += `<g style="animation:${show(css, P, `o${i}`, 28 + i * 3)}">` + text(c, m.x0, MY + MH + 18, t.outcome[i].replace('{f}', String(free)).replace('{i}', String(inside)), { size: 10, fill: bad ? C.accent : C.fg, weight: 500 }) + '</g>';
  });
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bd', 38)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 42);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// 1 000 jobs paid in cash to the tradesperson, 4 000 on average
const JOBS = 1000; const AVG = 4000; const RATE = 0.10; const FEE = 250;
const SPLIT = [0.55, 0.15, 0.30];
const DX = (d) => 300 + (d + 10) * 14;
const LANES = [250, 346];

export function encaissement(t, rtl) {
  const c = ctx(rtl); const P = 'wl'; const css = []; const H = 686;
  const due = Math.round(JOBS * AVG * RATE); const onTime = Math.round(due * SPLIT[0]); const late = Math.round(due * SPLIT[1]); const lost = Math.round(due * SPLIT[2]); const prepaid = JOBS * FEE;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  let frame = rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + text(c, 96, 170, t.chartTitle, { size: 11, fill: C.fg, weight: 500 }) + poly(c, [[DX(-10), 400], [DX(30), 400]], C.line2) + poly(c, [[DX(0), 196], [DX(0), 400]], C.fg55, 1, '3 4') + text(c, DX(0), 190, t.jobDay, { size: 9, fill: C.fg70, anchor: 'middle' });
  [-10, 0, 10, 20, 30].forEach((d) => { frame += num(c, DX(d), 416, d === 0 ? t.day : `${t.day}${d > 0 ? '+' : '−'}${Math.abs(d)}`, { size: 9, fill: C.fg55 }); });
  frame += text(c, 96, 436, t.axis, { size: 8.5, fill: C.fg55 });
  LANES.forEach((y, i) => { frame += text(c, 96, y - 4, t.lanes[i], { size: 10.5, fill: C.fg, weight: 500 }) + text(c, 96, y + 12, t.laneSub[i], { size: 9, fill: C.fg55 }) + poly(c, [[DX(-10), y], [DX(30), y]], C.line); });
  s += `<g style="animation:${show(css, P, 'pa', 3)}">${frame}</g>`;
  // lane A: commission due after the job
  const a = LANES[0];
  s += `<polyline points="${c.X(DX(0))},${a} ${c.X(DX(25))},${a}" fill="none" stroke="${C.fg55}" stroke-width="1.5" style="${drawLine(css, P, 'wa', 9, 8, 350)}"/>`;
  [[0, t.evA[0], -12, C.fg, C.fg, 6], [2, t.evA[1], 20, 'none', C.fg55, 9], [9, t.evA[2], -12, 'none', C.fg55, 12], [25, t.evA[3], 20, C.fg35, C.fg55, 17], [30, t.evA[4], -12, 'none', C.accent, 20]].forEach(([d, label, dy, fill, stroke, at], k) => {
    s += `<g style="${pop(css, P, `ea${k}`, at)}">` + dot(c, DX(d), a, 5, fill, stroke, 1.5) + '</g>';
    s += `<g style="animation:${show(css, P, `la${k}`, at + 1)}">` + text(c, DX(d), a + dy, label, { size: 9, fill: stroke === C.accent ? C.accent : C.fg70, anchor: d >= 25 ? 'end' : 'start' }) + '</g>';
  });
  // lane B: fixed fee taken from a prepaid credit when the job is accepted
  const b = LANES[1];
  s += `<polyline points="${c.X(DX(-10))},${b} ${c.X(DX(0))},${b}" fill="none" stroke="${C.accent}" stroke-width="1.5" style="${drawLine(css, P, 'wb', 24, 3, 140)}"/>`;
  [[-10, t.evB[0], -12, C.fg35, C.fg55, 23], [0, t.evB[1], 20, C.accent, C.accent, 27]].forEach(([d, label, dy, fill, stroke, at], k) => {
    s += `<g style="${pop(css, P, `eb${k}`, at)}">` + dot(c, DX(d), b, 5, fill, stroke, 1.5) + '</g>';
    s += `<g style="animation:${show(css, P, `lb${k}`, at + 1)}">` + text(c, DX(d), b + dy, label, { size: 9, fill: stroke === C.accent ? C.accent : C.fg70 }) + '</g>';
  });
  s += `<g style="animation:${show(css, P, 'nb', 30)}">` + text(c, DX(12), b + 4, t.nothing, { size: 9, fill: C.fg55 }) + '</g>';
  // what 1 000 jobs bring in
  [[t.cards[0], lost > 0 ? onTime + late : due, t.cardSub[0].replace('{d}', grp(due, t.sep)), t.cardSub2[0].replace('{l}', grp(lost, t.sep)), true], [t.cards[1], prepaid, t.cardSub[1], t.cardSub2[1], false]].forEach(([title, big, sub, sub2, hot], i) => {
    const y = 204 + i * 98;
    s += `<g style="${pop(css, P, `c${i}`, 32 + i * 3)}">` + rect(c, 880, y, 224, 88, { stroke: hot ? C.accent : C.line2, fill: hot ? TINT : C.fill }) + text(c, 892, y + 20, title, { size: 9.5, fill: hot ? C.accent : C.fg, weight: 500 }) + ltrSpans(c.X(892), y + 46, [[grp(big, t.sep), hot ? C.accent : C.fg, true]], 17, rtl ? 'end' : 'start') + text(c, 892, y + 63, sub, { size: 9, fill: C.fg70 }) + text(c, 892, y + 77, sub2, { size: 9, fill: hot ? C.accent : C.fg70 }) + '</g>';
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
    densite: {
      title: 'Douze artisans, deux cartes : la densité avant le nombre',
      alt: 'Les douze mêmes artisans dessinés sur deux cartes, avec un rayon d’envoi de 3 km autour de la demande. À gauche, ils travaillent dans trois communes voisines : sept sont dans le rayon, cinq sont disponibles, et la demande est acceptée en 4 minutes. À droite, ils sont répartis dans toute la wilaya : un seul est dans le rayon, il est occupé, et la demande reste sans réponse.',
      header: 'Exemple construit · douze artisans du même métier, une demande, un rayon d’envoi de 3 km',
      chartTitle: 'La même demande, envoyée aux artisans disponibles dans un rayon de 3 km',
      maps: ['trois communes voisines · carte de 12 km', 'toute la wilaya · carte de 60 km'],
      leg: ['la demande', 'dans le rayon, disponible', 'dans le rayon, occupé', 'hors du rayon'],
      minutes: '{n} min',
      outcome: ['{i} artisans dans le rayon, {f} disponibles : acceptée en 4 minutes', '{i} artisan dans le rayon, occupé : sans réponse après 15 minutes'],
      band: 'Une plateforme de mise en relation ne se lance pas dans un pays : elle se lance dans un quartier, sur trois métiers, jusqu’à ce que chaque demande trouve preneur.',
      tiles: [
        { big: '12 artisans, deux cartes', l1: 'le même nombre, répartis autrement', l2: 'rayon d’envoi : 3 km autour de la demande' },
        { big: '5 reçoivent la demande', l1: 'dans trois communes voisines', l2: 'premier accord en 4 minutes' },
        { big: 'sans réponse', l1: 'dans toute la wilaya : un artisan dans le rayon, occupé', l2: 'le client ne rouvre pas l’application', hot: true },
      ],
      line1: 'La densité compte plus que le nombre : douze artisans dans trois communes servent mieux que cent dans toute une wilaya.',
      line2: 'On mesure la part des demandes acceptées en moins de quinze minutes, zone par zone, avant d’en ouvrir une autre.',
      note: 'Exemple construit · positions, distances et délais fictifs.',
    },
    encaissement: {
      title: 'Quand tout se paie en espèces : à quel moment la plateforme est payée',
      alt: 'Le trajet de l’argent de la plateforme pour une intervention payée en espèces à l’artisan. Avec une commission de 10 % due après l’intervention, sur 1 000 interventions à 4 000 dinars, 400 000 dinars sont dus : 220 000 sont payés à temps, 60 000 après relance, et 120 000 ne sont jamais encaissés. Avec un frais fixe de 250 dinars prélevé sur un crédit prépayé au moment de l’accord, 250 000 dinars sont encaissés avant l’intervention.',
      header: 'Exemple construit · 1 000 interventions à 4 000 dinars, payées en espèces à l’artisan',
      chartTitle: 'Le trajet de l’argent de la plateforme, en jours autour de l’intervention',
      jobDay: 'intervention', day: 'J', axis: 'jours avant et après l’intervention', sep: ' ',
      lanes: ['Commission après coup', 'Frais sur crédit prépayé'], laneSub: ['10 % dus par l’artisan', '250 DA à chaque accord'],
      evA: ['espèces à l’artisan', 'déclaration', 'relance', 'commission reçue', 'ou jamais'],
      evB: ['achat de crédit', 'frais prélevé à l’accord'], nothing: 'rien à encaisser, rien à relancer',
      cards: ['Commission, 1 000 interventions', 'Crédit prépayé, 1 000 interventions'],
      cardSub: ['encaissés sur {d} dus', 'encaissés avant l’intervention'], cardSub2: ['{l} jamais reversés', 'aucune relance'],
      band: 'Quand tout se règle en espèces, l’argent de la plateforme doit arriver avant l’intervention : ce qui se prélève à l’accord ne se relance pas.',
      tiles: [
        { big: '400 000 DA dus', l1: 'commission de 10 % sur 1 000 interventions', l2: '220 000 à temps, 60 000 après relance' },
        { big: '120 000 DA perdus', l1: 'interventions non déclarées ou jamais reversées', l2: '30 % de la commission due', hot: true },
        { big: '250 000 DA encaissés', l1: '250 DA prélevés à chaque accord', l2: 'avant l’intervention, sans relance' },
      ],
      line1: 'Commission : la plateforme attend que l’artisan déclare le prix réel et reverse sa part. Rien ne l’y oblige sur place.',
      line2: 'Crédit prépayé : l’artisan achète un crédit ; un montant fixe est prélevé à l’accord, et rendu si la demande était fausse.',
      note: 'Exemple construit · montants, taux et délais fictifs ; le modèle se teste zone par zone.',
    },
  },
  en: {
    densite: {
      title: 'Twelve tradespeople, two maps: density before numbers',
      alt: 'The same twelve tradespeople drawn on two maps, with a dispatch radius of 3 km around the request. On the left they work in three neighbouring communes: seven are within the radius, five are free, and the request is accepted in 4 minutes. On the right they are spread over a whole wilaya: only one is within the radius, they are busy, and the request gets no answer.',
      header: 'Constructed example · twelve tradespeople of the same trade, one request, a 3 km dispatch radius',
      chartTitle: 'The same request, sent to the tradespeople free within a 3 km radius',
      maps: ['three neighbouring communes · a 12 km map', 'the whole wilaya · a 60 km map'],
      leg: ['the request', 'in the radius, free', 'in the radius, busy', 'outside the radius'],
      minutes: '{n} min',
      outcome: ['{i} tradespeople in the radius, {f} free: accepted in 4 minutes', '{i} tradesperson in the radius, busy: no answer after 15 minutes'],
      band: 'A matching platform is not launched in a country: it is launched in a neighbourhood, on three trades, until every request finds a taker.',
      tiles: [
        { big: '12 tradespeople, two maps', l1: 'the same number, spread differently', l2: 'dispatch radius: 3 km around the request' },
        { big: '5 receive the request', l1: 'in three neighbouring communes', l2: 'first acceptance in 4 minutes' },
        { big: 'no answer', l1: 'across the wilaya: one tradesperson in the radius, busy', l2: 'the customer does not open the app again', hot: true },
      ],
      line1: 'Density matters more than numbers: twelve tradespeople in three communes serve better than a hundred across a wilaya.',
      line2: 'You measure the share of requests accepted in under fifteen minutes, zone by zone, before opening another.',
      note: 'Constructed example · fictitious positions, distances and times.',
    },
    encaissement: {
      title: 'When everything is paid in cash: when the platform gets paid',
      alt: 'The path of the platform’s money for a job paid in cash to the tradesperson. With a 10% commission due after the job, on 1,000 jobs at 4,000 dinars, 400,000 dinars are due: 220,000 are paid on time, 60,000 after a reminder, and 120,000 are never collected. With a fixed fee of 250 dinars taken from a prepaid credit when the job is accepted, 250,000 dinars are collected before the job.',
      header: 'Constructed example · 1,000 jobs at 4,000 dinars, paid in cash to the tradesperson',
      chartTitle: 'The path of the platform’s money, in days around the job',
      jobDay: 'job', day: 'D', axis: 'days before and after the job', sep: ',',
      lanes: ['Commission afterwards', 'Fee on prepaid credit'], laneSub: ['10% owed by the tradesperson', 'DA 250 at each acceptance'],
      evA: ['cash to the tradesperson', 'declaration', 'reminder', 'commission received', 'or never'],
      evB: ['credit bought', 'fee taken at acceptance'], nothing: 'nothing to collect, nothing to chase',
      cards: ['Commission, 1,000 jobs', 'Prepaid credit, 1,000 jobs'],
      cardSub: ['collected of {d} due', 'collected before the job'], cardSub2: ['{l} never paid over', 'no reminders'],
      band: 'When everything is settled in cash, the platform’s money has to arrive before the job: what is taken at acceptance never needs chasing.',
      tiles: [
        { big: 'DA 400,000 due', l1: '10% commission on 1,000 jobs', l2: '220,000 on time, 60,000 after a reminder' },
        { big: 'DA 120,000 lost', l1: 'jobs not declared or never paid over', l2: '30% of the commission due', hot: true },
        { big: 'DA 250,000 collected', l1: 'DA 250 taken at each acceptance', l2: 'before the job, with no reminders' },
      ],
      line1: 'Commission: the platform waits for the tradesperson to declare the real price and pay its share. Nothing makes them on site.',
      line2: 'Prepaid credit: the tradesperson buys credit; a fixed amount is taken at acceptance, and returned if the request was fake.',
      note: 'Constructed example · fictitious amounts, rates and delays; the model is tested zone by zone.',
    },
  },
  ar: {
    densite: {
      title: 'اثنا عشر حرفياً، خريطتان: الكثافة قبل العدد',
      alt: 'الحرفيون الاثنا عشر أنفسهم مرسومون على خريطتين، بمحيط إرسال من 3 كلم حول الطلب. على اليمين، يعملون في ثلاث بلديات متجاورة: سبعة داخل المحيط، خمسة متاحون، والطلب يُقبَل في 4 دقائق. وعلى اليسار، موزَّعون على كامل الولاية: واحد فقط داخل المحيط، وهو مشغول، والطلب يبقى دون جواب.',
      header: 'مثال مركَّب · اثنا عشر حرفياً من المهنة نفسها، طلب واحد، ومحيط إرسال من 3 كلم',
      chartTitle: 'الطلب نفسه، يُرسَل إلى الحرفيين المتاحين في محيط 3 كلم',
      maps: ['ثلاث بلديات متجاورة · خريطة من 12 كلم', 'كامل الولاية · خريطة من 60 كلم'],
      leg: ['الطلب', 'داخل المحيط، متاح', 'داخل المحيط، مشغول', 'خارج المحيط'],
      minutes: '{n} د',
      outcome: ['{i} حرفيين داخل المحيط، {f} متاحون: قُبل في 4 دقائق', '{i} حرفي داخل المحيط، مشغول: دون جواب بعد 15 دقيقة'],
      band: 'منصة الربط لا تُطلَق في بلد: تُطلَق في حي، على ثلاث مهن، إلى أن يجد كل طلب من يقبله.',
      tiles: [
        { big: '12 حرفياً، خريطتان', l1: 'العدد نفسه، موزَّعاً بشكل آخر', l2: 'محيط الإرسال: 3 كلم حول الطلب' },
        { big: '5 يتلقون الطلب', l1: 'في ثلاث بلديات متجاورة', l2: 'أول قبول في 4 دقائق' },
        { big: 'دون جواب', l1: 'في كامل الولاية: حرفي واحد داخل المحيط، مشغول', l2: 'الزبون لا يفتح التطبيق مرة أخرى', hot: true },
      ],
      line1: 'الكثافة أهم من العدد: اثنا عشر حرفياً في ثلاث بلديات يخدمون أفضل من مئة في ولاية كاملة.',
      line2: 'تُقاس حصة الطلبات المقبولة في أقل من خمس عشرة دقيقة، منطقة بمنطقة، قبل فتح أخرى.',
      note: 'مثال مركَّب · مواقع ومسافات وآجال خيالية.',
    },
    encaissement: {
      title: 'حين يُدفَع كل شيء نقداً: متى تُدفَع حصة المنصة',
      alt: 'مسار مال المنصة لتدخل يُدفَع نقداً للحرفي. بعمولة 10 بالمئة مستحقة بعد التدخل، على 1000 تدخل بـ4000 دينار، 400000 دينار مستحقة: 220000 تُدفَع في وقتها، 60000 بعد تذكير، و120000 لا تُحصَّل أبداً. وبرسم ثابت من 250 ديناراً يُقتطَع من رصيد مسبق الدفع لحظة القبول، 250000 دينار تُحصَّل قبل التدخل.',
      header: 'مثال مركَّب · 1000 تدخل بـ4000 دينار، تُدفَع نقداً للحرفي',
      chartTitle: 'مسار مال المنصة، بالأيام حول التدخل',
      jobDay: 'التدخل', day: 'D', axis: 'أيام قبل التدخل وبعده', sep: ' ',
      lanes: ['عمولة بعد التدخل', 'رسم على رصيد مسبق'], laneSub: ['⁦10 %⁩ يدين بها الحرفي', '250 دج عند كل قبول'],
      evA: ['نقد للحرفي', 'التصريح', 'تذكير', 'عمولة مستلَمة', 'أو أبداً'],
      evB: ['شراء رصيد', 'رسم يُقتطَع عند القبول'], nothing: 'لا شيء يُحصَّل، ولا شيء يُذكَّر به',
      cards: ['العمولة، 1000 تدخل', 'الرصيد المسبق، 1000 تدخل'],
      cardSub: ['محصَّلة من ⁦{d}⁩ مستحقة', 'محصَّلة قبل التدخل'], cardSub2: ['⁦{l}⁩ لم تُدفَع أبداً', 'دون أي تذكير'],
      band: 'حين يُسوَّى كل شيء نقداً، مال المنصة يجب أن يصل قبل التدخل: ما يُقتطَع عند القبول لا يحتاج تذكيراً.',
      tiles: [
        { big: '⁦400 000⁩ دج مستحقة', l1: 'عمولة ⁦10 %⁩ على 1000 تدخل', l2: '⁦220 000⁩ في وقتها، و⁦60 000⁩ بعد تذكير' },
        { big: '⁦120 000⁩ دج ضائعة', l1: 'تدخلات غير مصرَّح بها أو لم تُدفَع حصتها', l2: '⁦30 %⁩ من العمولة المستحقة', hot: true },
        { big: '⁦250 000⁩ دج محصَّلة', l1: '250 دج تُقتطَع عند كل قبول', l2: 'قبل التدخل، ودون تذكير' },
      ],
      line1: 'العمولة: المنصة تنتظر أن يصرّح الحرفي بالسعر الحقيقي ويدفع حصتها. ولا شيء يلزمه بذلك في المكان.',
      line2: 'الرصيد المسبق: الحرفي يشتري رصيداً؛ ومبلغ ثابت يُقتطَع عند القبول، ويُرَدّ إذا كان الطلب وهمياً.',
      note: 'مثال مركَّب · مبالغ ونسب وآجال خيالية؛ والنموذج يُجرَّب منطقة بمنطقة.',
    },
  },
};
