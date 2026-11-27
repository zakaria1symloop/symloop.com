// Bespoke animated figures for the 2027 "logiciel de suivi budgétaire" page.
//  ligne(): one budget line (maintenance, 30 million dinars voted) read three ways at the end of
//           August: invoiced only (22, 73 %), with the orders already signed (22 + 11 = 33,
//           110 %), and with the needs planned until December (33 + 6 = 39, 130 %).
//  pont():  the bridge from the voted budget (240) to the year-end forecast (265), one step per
//           cost centre: maintenance +9, production +8, logistics +7, sales +1, IT +1,
//           administration -1. The vertical axis is cut at 230 and says so.
// Amounts are in millions of dinars. CSS-only animation; base attributes are the finished state.
import { C, ctx, text, rect, open, heading, esc } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function growX(css, P, id, at, dur, rtl) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'} center;animation:${P}-${id} ${LOOP}s linear infinite`; }
function growY(css, P, id, at, dur, origin) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleY(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleY(1)}}`); return `transform-box:fill-box;transform-origin:center ${origin || 'bottom'};animation:${P}-${id} ${LOOP}s linear infinite`; }
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
const poly = (c, pts, color, sw, dash) => `<polyline points="${pts.map(([x, y]) => `${c.X(x)},${y}`).join(' ')}" fill="none" stroke="${color}" stroke-width="${sw || 1}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;

// one line, in millions of dinars: voted, invoiced, ordered and not yet invoiced, planned until December
const VOTED = 30; const ACTUAL = 22; const COMMITTED = 11; const PLANNED = 6;
const SX = (m) => 330 + m * 14;
const ROWS = [214, 274, 334];

export function ligne(t, rtl) {
  const c = ctx(rtl); const P = 'bu'; const css = []; const H = 686;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  let frame = rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + text(c, 96, 170, t.chartTitle, { size: 11, fill: C.fg, weight: 500 });
  frame += poly(c, [[SX(0), 380], [SX(40), 380]], C.line2);
  [0, 10, 20, 30, 40].forEach((m) => { frame += poly(c, [[SX(m), 380], [SX(m), 385]], C.line2) + num(c, SX(m), 399, String(m), { size: 9, fill: C.fg55 }); });
  frame += text(c, 904, 399, t.unit, { size: 9, fill: C.fg55 });
  s += `<g style="animation:${show(css, P, 'pa', 3)}">${frame}</g>`;
  s += `<g style="animation:${show(css, P, 'vt', 5)}">` + poly(c, [[SX(VOTED), 198], [SX(VOTED), 380]], C.accent, 1.5, '5 4') + text(c, SX(VOTED), 192, t.voted, { size: 10, fill: C.accent, weight: 500, anchor: 'middle' }) + '</g>';
  const seg = (y, from, len, kind, id, at, dur) => {
    const o = kind === 0 ? { stroke: 'none', fill: C.fg55 } : kind === 1 ? { stroke: 'none', fill: C.accent } : { stroke: C.accent, fill: TINT, dash: '4 3' };
    return `<g style="${growX(css, P, id, at, dur, rtl)}">` + rect(c, SX(from), y, len * 14, 26, o) + '</g>' + `<g style="animation:${show(css, P, `${id}n`, at + dur)}">` + num(c, SX(from + len / 2), y + 17, String(len), { size: 10.5, fill: kind === 1 ? DARK : C.fg, bold: true }) + '</g>';
  };
  const left = (i, at) => `<g style="animation:${show(css, P, `l${i}`, at)}">` + text(c, 96, ROWS[i] + 12, t.rows[i][0], { size: 10.5, fill: C.fg, weight: 500 }) + text(c, 96, ROWS[i] + 27, t.rows[i][1], { size: 9, fill: C.fg55 }) + '</g>';
  const right = (i, at, hot) => `<g style="animation:${show(css, P, `r${i}`, at)}">` + text(c, 904, ROWS[i] + 12, t.reads[i][0], { size: 11.5, font: 'mono', fill: hot ? C.accent : C.fg, weight: 500 }) + text(c, 904, ROWS[i] + 27, t.reads[i][1], { size: 9, fill: hot ? C.accent : C.fg70 }) + '</g>';
  // the spreadsheet: invoiced only
  s += left(0, 7) + seg(ROWS[0], 0, ACTUAL, 0, 'a0', 8, 5) + right(0, 15, false);
  // with what is already signed
  s += left(1, 19) + seg(ROWS[1], 0, ACTUAL, 0, 'a1', 20, 3) + seg(ROWS[1], ACTUAL, COMMITTED, 1, 'c1', 24, 4) + right(1, 30, true);
  // with what is planned until December
  s += left(2, 34) + seg(ROWS[2], 0, ACTUAL, 0, 'a2', 35, 3) + seg(ROWS[2], ACTUAL, COMMITTED, 1, 'c2', 38.5, 3) + seg(ROWS[2], ACTUAL + COMMITTED, PLANNED, 2, 'p2', 42, 3) + right(2, 47, true);
  s += `<g style="animation:${show(css, P, 'lg', 51)}">` + rect(c, 330, 420, 12, 12, { stroke: 'none', fill: C.fg55 }) + text(c, 348, 430, t.legend[0], { size: 9.5, fill: C.fg70 }) + rect(c, 520, 420, 12, 12, { stroke: 'none', fill: C.accent }) + text(c, 538, 430, t.legend[1], { size: 9.5, fill: C.fg70 }) + rect(c, 800, 420, 12, 12, { stroke: C.accent, fill: TINT, dash: '3 2' }) + text(c, 818, 430, t.legend[2], { size: 9.5, fill: C.fg70 }) + '</g>';
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bn', 56)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 60);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// the bridge: voted budget, one step per cost centre (sorted by size), year-end forecast
const BUDGET = 240;
const STEPS = [9, 8, 7, 1, 1, -1];
const PAIRS = [[39, 30], [94, 86], [45, 38], [43, 42], [25, 24], [19, 20]];     // forecast / voted, per centre
const CUT = 230;
const VY = (v) => 396 - (v - CUT) * 4.2;
const CXB = (i) => 130 + i * 118;
const CW = 80;

export function pont(t, rtl) {
  const c = ctx(rtl); const P = 'wf'; const css = []; const H = 686;
  const forecast = BUDGET + STEPS.reduce((a, b) => a + b, 0);
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  let frame = rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + text(c, 96, 170, t.chartTitle, { size: 11, fill: C.fg, weight: 500 });
  frame += poly(c, [[CXB(0) - 16, 396], [CXB(7) + CW + 16, 396]], C.line2) + text(c, CXB(0) - 16, 440, t.cut, { size: 8.5, fill: C.fg55 });
  s += `<g style="animation:${show(css, P, 'pa', 3)}">${frame}</g>`;
  // a cut mark across the foot of the two full columns
  const cutMark = (x) => poly(c, [[x - 4, 386], [x + CW * 0.3, 380], [x + CW * 0.7, 390], [x + CW + 4, 384]], DARK, 4) + poly(c, [[x - 4, 386], [x + CW * 0.3, 380], [x + CW * 0.7, 390], [x + CW + 4, 384]], C.fg55, 1);
  // voted budget
  s += `<g style="${growY(css, P, 'b0', 6, 4)}">` + rect(c, CXB(0), VY(BUDGET), CW, 396 - VY(BUDGET), { stroke: 'none', fill: C.fg55 }) + '</g>';
  s += `<g style="animation:${show(css, P, 'b0l', 10)}">` + cutMark(CXB(0)) + num(c, CXB(0) + CW / 2, VY(BUDGET) - 8, String(BUDGET), { size: 12, bold: true }) + text(c, CXB(0) + CW / 2, 414, t.names[0], { size: 9.5, fill: C.fg, weight: 500, anchor: 'middle' }) + '</g>';
  s += `<g style="animation:${show(css, P, 'bl', 11)}">` + poly(c, [[CXB(0) + CW, VY(BUDGET)], [CXB(7) + CW + 16, VY(BUDGET)]], C.fg35, 1, '3 4') + '</g>';
  // one step per cost centre
  let run = BUDGET;
  STEPS.forEach((d, i) => {
    const x = CXB(i + 1); const from = run; const to = run + d; run = to; const at = 13 + i * 6; const up = d > 0;
    const top = VY(Math.max(from, to)); const h = Math.abs(VY(from) - VY(to));
    s += `<g style="animation:${show(css, P, `j${i}`, at)}">` + poly(c, [[x - (118 - CW), VY(from)], [x, VY(from)]], C.fg55, 1, '2 3') + '</g>';
    s += `<g style="${growY(css, P, `s${i}`, at + 0.6, 2.4, up ? 'bottom' : 'top')}">` + rect(c, x, top, CW, Math.max(h, 2), up ? { stroke: 'none', fill: C.accent } : { stroke: C.fg70, fill: 'none', dash: '3 2' }) + '</g>';
    s += `<g style="animation:${show(css, P, `v${i}`, at + 3)}">` + num(c, x + CW / 2, top - 8, (up ? '+' : '−') + Math.abs(d), { size: 11.5, fill: up ? C.accent : C.fg70, bold: true }) + text(c, x + CW / 2, 414, t.names[i + 1], { size: 9.5, fill: C.fg, anchor: 'middle' }) + (t.pairText ? text(c, x + CW / 2, 430, t.pairText.replace('{f}', String(PAIRS[i][0])).replace('{v}', String(PAIRS[i][1])), { size: 9, fill: C.fg55, anchor: 'middle' }) : num(c, x + CW / 2, 430, `${PAIRS[i][0]} / ${PAIRS[i][1]}`, { size: 9, fill: C.fg55 })) + '</g>';
  });
  // year-end forecast
  const xf = CXB(7);
  s += `<g style="animation:${show(css, P, 'jf', 50)}">` + poly(c, [[xf - (118 - CW), VY(forecast)], [xf, VY(forecast)]], C.fg55, 1, '2 3') + '</g>';
  s += `<g style="${growY(css, P, 'f0', 51, 4)}">` + rect(c, xf, VY(forecast), CW, 396 - VY(forecast), { stroke: C.accent, fill: TINT, sw: 2 }) + '</g>';
  s += `<g style="animation:${show(css, P, 'f0l', 55)}">` + cutMark(xf) + num(c, xf + CW / 2, VY(forecast) - 8, String(forecast), { size: 12, fill: C.accent, bold: true }) + text(c, xf + CW / 2, 414, t.names[7], { size: 9.5, fill: C.accent, weight: 500, anchor: 'middle' }) + num(c, xf + CW / 2, 430, `+${forecast - BUDGET}`, { size: 9.5, fill: C.accent, bold: true }) + '</g>';
  s += `<g style="animation:${show(css, P, 'pr', 57)}">` + text(c, CXB(1), 204, t.pair, { size: 9, fill: C.fg55 }) + '</g>';
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bn', 60)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 64);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    ligne: {
      title: 'La même ligne, lue trois fois : facturé, engagé, atterrissage',
      alt: 'Une ligne budgétaire de maintenance, 30 millions de dinars votés, lue de trois façons fin août. Le tableur ne montre que le facturé : 22, soit 73 % du budget, il resterait 8. Avec les commandes déjà signées : 22 plus 11, soit 33 et 110 %, la ligne est dépassée de 3. Avec les besoins prévus jusqu’en décembre : 33 plus 6, soit 39 et 130 %, un dépassement prévu de 9.',
      header: 'Exemple construit · une ligne de maintenance, fin août',
      chartTitle: 'Ligne maintenance : 30 votés, et trois façons de lire où elle en est',
      unit: 'millions de dinars', voted: 'budget voté : 30',
      rows: [['Le tableur', 'le facturé seulement'], ['Avec l’engagé', 'les commandes déjà signées'], ['Avec l’atterrissage', 'les besoins prévus d’ici décembre']],
      reads: [['73 %', 'il resterait 8'], ['110 %', 'dépassée de 3, déjà signé'], ['130 %', 'dépassement prévu : 9']],
      legend: ['réalisé : facturé', 'engagé : commandé, pas encore facturé', 'reste à faire prévu'],
      band: 'Un budget se consomme à la commande, pas à la facture : sans l’engagé, une ligne dépassée paraît tenue.',
      tiles: [
        { big: '73 % sur le tableur', l1: '22 facturés sur 30 : la ligne paraît tenue', l2: 'fin août, les deux tiers de l’année écoulés' },
        { big: '110 % avec l’engagé', l1: '11 de commandes signées, pas encore facturées', l2: 'dépassée de 3 avant la moindre facture' },
        { big: '130 % à l’atterrissage', l1: '6 de besoins prévus d’ici décembre', l2: 'dépassement de 9, connu fin août', hot: true },
      ],
      line1: 'Le tableur compare le facturé au budget : il montre ce qui est comptabilisé, pas ce qui est déjà décidé.',
      line2: 'Le suivi ajoute ce qui est signé et ce qui reste à faire : la ligne dit où elle finira, pas seulement où elle en est.',
      note: 'Exemple construit · ligne et montants fictifs, en millions de dinars.',
    },
    pont: {
      title: 'Du budget voté à l’atterrissage : d’où viennent les 25 millions',
      alt: 'Un pont du budget voté, 240 millions de dinars, à l’atterrissage prévu, 265 millions, marche par marche : maintenance plus 9 (39 prévus pour 30 votés), production plus 8 (94 pour 86), logistique plus 7 (45 pour 38), commercial plus 1 (43 pour 42), informatique plus 1 (25 pour 24), administration moins 1 (19 pour 20). Dépassement prévu : 25 millions. L’axe vertical est coupé à 230.',
      header: 'Exemple construit · six centres de coût, atterrissage calculé fin août',
      chartTitle: 'Budget voté, écart prévu de chaque centre, atterrissage', cut: 'axe coupé à 230 · millions de dinars', pair: 'sous chaque centre : prévu / voté',
      names: ['Budget voté', 'Maintenance', 'Production', 'Logistique', 'Commercial', 'Informatique', 'Administration', 'Atterrissage'],
      band: 'L’écart total ne dit rien : sa décomposition par centre dit à qui parler, et de quoi.',
      tiles: [
        { big: '240 votés, 265 prévus', l1: 'dépassement prévu de 25, environ 10 %', l2: 'calculé fin août, quatre mois avant la clôture', hot: true },
        { big: '3 centres font 24 des 25', l1: 'maintenance 9, production 8, logistique 7', l2: 'c’est là que se décide la fin d’année' },
        { big: '1 centre sous son budget', l1: 'administration : 19 prévus pour 20 votés', l2: 'un transfert possible, s’il est décidé et tracé' },
      ],
      line1: 'Chaque marche est un écart expliqué par la personne responsable du centre : volume, prix, imprévu.',
      line2: 'Fin août, il reste quatre mois pour agir : reporter, renégocier, transférer, ou assumer le dépassement.',
      note: 'Exemple construit · centres et montants fictifs, en millions de dinars.',
    },
  },
  en: {
    ligne: {
      title: 'The same line, read three times: invoiced, committed, year-end forecast',
      alt: 'A maintenance budget line, 30 million dinars voted, read three ways at the end of August. The spreadsheet shows only what is invoiced: 22, that is 73% of the budget, with 8 apparently left. With the orders already signed: 22 plus 11, that is 33 and 110%, the line is over by 3. With the needs planned until December: 33 plus 6, that is 39 and 130%, a forecast overrun of 9.',
      header: 'Constructed example · one maintenance line, end of August',
      chartTitle: 'Maintenance line: 30 voted, and three ways of reading where it stands',
      unit: 'million dinars', voted: 'voted budget: 30',
      rows: [['The spreadsheet', 'invoiced amounts only'], ['With commitments', 'orders already signed'], ['With the forecast', 'needs planned until December']],
      reads: [['73%', '8 apparently left'], ['110%', 'over by 3, already signed'], ['130%', 'forecast overrun: 9']],
      legend: ['actual: invoiced', 'committed: ordered, not yet invoiced', 'planned remaining spend'],
      band: 'A budget is consumed at the order, not at the invoice: without commitments, a line that is over looks on track.',
      tiles: [
        { big: '73% on the spreadsheet', l1: '22 invoiced of 30: the line looks on track', l2: 'end of August, two thirds of the year gone' },
        { big: '110% with commitments', l1: '11 of orders signed, not yet invoiced', l2: 'over by 3 before a single invoice' },
        { big: '130% at year end', l1: '6 of needs planned until December', l2: 'overrun of 9, known at the end of August', hot: true },
      ],
      line1: 'The spreadsheet compares invoiced amounts with the budget: it shows what is booked, not what is already decided.',
      line2: 'Tracking adds what is signed and what remains to be done: the line says where it will end, not only where it stands.',
      note: 'Constructed example · fictitious line and amounts, in million dinars.',
    },
    pont: {
      title: 'From voted budget to year-end forecast: where the 25 million come from',
      alt: 'A bridge from the voted budget, 240 million dinars, to the year-end forecast, 265 million, step by step: maintenance plus 9 (39 forecast for 30 voted), production plus 8 (94 for 86), logistics plus 7 (45 for 38), sales plus 1 (43 for 42), IT plus 1 (25 for 24), administration minus 1 (19 for 20). Forecast overrun: 25 million. The vertical axis is cut at 230.',
      header: 'Constructed example · six cost centres, forecast computed at the end of August',
      chartTitle: 'Voted budget, forecast variance of each centre, year-end forecast', cut: 'axis cut at 230 · million dinars', pair: 'under each centre: forecast / voted',
      names: ['Voted budget', 'Maintenance', 'Production', 'Logistics', 'Sales', 'IT', 'Administration', 'Forecast'],
      band: 'The total variance says nothing: its breakdown by centre says whom to talk to, and about what.',
      tiles: [
        { big: '240 voted, 265 forecast', l1: 'forecast overrun of 25, about 10%', l2: 'computed at the end of August, four months before closing', hot: true },
        { big: '3 centres make 24 of the 25', l1: 'maintenance 9, production 8, logistics 7', l2: 'that is where the year end is decided' },
        { big: '1 centre under its budget', l1: 'administration: 19 forecast for 20 voted', l2: 'a transfer is possible, if decided and recorded' },
      ],
      line1: 'Each step is a variance explained by the person in charge of the centre: volume, price, the unforeseen.',
      line2: 'At the end of August, four months remain to act: postpone, renegotiate, transfer, or accept the overrun.',
      note: 'Constructed example · fictitious centres and amounts, in million dinars.',
    },
  },
  ar: {
    ligne: {
      title: 'البند نفسه، مقروءاً ثلاث مرات: المفوتَر، الملتزَم به، وتوقع نهاية السنة',
      alt: 'بند ميزانية للصيانة، 30 مليون دينار مصادَق عليها، مقروء بثلاث طرق في نهاية أوت. الجدول لا يُظهر إلا المفوتَر: 22، أي 73 بالمئة من الميزانية، ويبدو أنه بقي 8. مع الطلبيات الموقَّعة من قبل: 22 زائد 11، أي 33 و110 بالمئة، والبند متجاوَز بـ3. ومع الحاجات المتوقعة حتى ديسمبر: 33 زائد 6، أي 39 و130 بالمئة، وتجاوز متوقع بـ9.',
      header: 'مثال مركَّب · بند صيانة، في نهاية أوت',
      chartTitle: 'بند الصيانة: 30 مصادَق عليها، وثلاث طرق لقراءة أين وصل',
      unit: 'مليون دينار', voted: 'الميزانية المصادَق عليها: 30',
      rows: [['الجدول', 'المفوتَر فقط'], ['مع الملتزَم به', 'الطلبيات الموقَّعة من قبل'], ['مع توقع نهاية السنة', 'الحاجات المتوقعة حتى ديسمبر']],
      reads: [['⁦73 %⁩', 'يبدو أنه بقي 8'], ['⁦110 %⁩', 'متجاوَز بـ3، وموقَّع من قبل'], ['⁦130 %⁩', 'تجاوز متوقع: 9']],
      legend: ['المنجَز: مفوتَر', 'الملتزَم به: مطلوب، وغير مفوتَر بعد', 'الباقي المتوقع إنجازه'],
      band: 'الميزانية تُستهلَك عند الطلبية، لا عند الفاتورة: دون الملتزَم به، بند متجاوَز يبدو محترَماً.',
      tiles: [
        { big: '73 بالمئة في الجدول', l1: '22 مفوتَرة من 30: البند يبدو محترَماً', l2: 'نهاية أوت، وثلثا السنة مضيا' },
        { big: '110 بالمئة مع الملتزَم به', l1: '11 من طلبيات موقَّعة، غير مفوتَرة بعد', l2: 'متجاوَز بـ3 قبل أي فاتورة' },
        { big: '130 بالمئة في نهاية السنة', l1: '6 من حاجات متوقعة حتى ديسمبر', l2: 'تجاوز بـ9، معروف في نهاية أوت', hot: true },
      ],
      line1: 'الجدول يقارن المفوتَر بالميزانية: يُظهر ما سُجّل في المحاسبة، لا ما تقرّر من قبل.',
      line2: 'المتابعة تضيف ما وُقّع وما بقي إنجازه: البند يقول أين سينتهي، لا أين وصل فقط.',
      note: 'مثال مركَّب · بند ومبالغ خيالية، بملايين الدنانير.',
    },
    pont: {
      title: 'من الميزانية المصادَق عليها إلى توقع نهاية السنة: من أين تأتي الـ25 مليوناً',
      alt: 'جسر من الميزانية المصادَق عليها، 240 مليون دينار، إلى توقع نهاية السنة، 265 مليوناً، درجة بدرجة: الصيانة زائد 9 (39 متوقعة لـ30 مصادَق عليها)، الإنتاج زائد 8 (94 لـ86)، اللوجستيك زائد 7 (45 لـ38)، التجاري زائد 1 (43 لـ42)، الإعلام الآلي زائد 1 (25 لـ24)، والإدارة ناقص 1 (19 لـ20). التجاوز المتوقع: 25 مليوناً. والمحور العمودي مقطوع عند 230.',
      header: 'مثال مركَّب · ستة مراكز كلفة، والتوقع محسوب في نهاية أوت',
      chartTitle: 'الميزانية المصادَق عليها، الفارق المتوقع لكل مركز، وتوقع نهاية السنة', cut: 'المحور مقطوع عند 230 · مليون دينار', pair: 'تحت كل مركز: المبلغ المتوقع، للمبلغ المصادَق عليه', pairText: '{f} لـ{v}',
      names: ['الميزانية', 'الصيانة', 'الإنتاج', 'اللوجستيك', 'التجاري', 'الإعلام الآلي', 'الإدارة', 'التوقع'],
      band: 'الفارق الإجمالي لا يقول شيئاً: تفصيله حسب المركز يقول مع من نتكلم، وعن ماذا.',
      tiles: [
        { big: '240 مصادَق عليها، و265 متوقعة', l1: 'تجاوز متوقع بـ25، أي نحو 10 بالمئة', l2: 'محسوب في نهاية أوت، قبل الإقفال بأربعة أشهر', hot: true },
        { big: '3 مراكز تصنع 24 من 25', l1: 'الصيانة 9، الإنتاج 8، واللوجستيك 7', l2: 'هناك تُحسَم نهاية السنة' },
        { big: 'مركز واحد تحت ميزانيته', l1: 'الإدارة: 19 متوقعة لـ20 مصادَق عليها', l2: 'تحويل ممكن، إذا تقرّر وسُجّل' },
      ],
      line1: 'كل درجة فارق يشرحه الشخص المسؤول عن المركز: الحجم، السعر، أو غير المتوقع.',
      line2: 'في نهاية أوت، تبقى أربعة أشهر للتصرف: التأجيل، إعادة التفاوض، التحويل، أو تحمّل التجاوز.',
      note: 'مثال مركَّب · مراكز ومبالغ خيالية، بملايين الدنانير.',
    },
  },
};
