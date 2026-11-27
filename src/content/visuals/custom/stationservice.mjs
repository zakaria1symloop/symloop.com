// Bespoke animated figures for the 2027 "logiciel station-service" page.
//  equipe(): closing a shift. Left, the meter readings of four nozzles give
//            the litres sold, then litres × price give what the shift owes.
//            Right, what is handed over (cash, card, account vouchers) is
//            stacked against that amount: a thin accent slice remains, the gap.
//  cuve():   one tank over eight mornings. Book stock (opening + deliveries −
//            meters) against dipped stock; the cumulative gap is drawn as a
//            line with a steady slope and one step on delivery day.
// Numbers are drawn in their own text elements with direction="ltr".
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, open, heading, esc } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function pop(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scale(0)}${(at + 1.2).toFixed(1)}%,100%{transform:scale(1)}}`); return `transform-box:fill-box;transform-origin:center;animation:${P}-${id} ${LOOP}s linear infinite`; }
function growX(css, P, id, at, dur, rtl) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'} center;animation:${P}-${id} ${LOOP}s linear infinite`; }
function drawLine(css, P, id, at, dur, len) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{stroke-dashoffset:${len.toFixed(0)}}${(at + dur).toFixed(1)}%,100%{stroke-dashoffset:0}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
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
const grp = (n, sep) => String(Math.abs(n)).replace(/\B(?=(\d{3})+(?!\d))/g, sep);
const sgn = (n, sep) => (n < 0 ? '−' : '') + grp(n, sep);
const num = (c, x, y, str, o = {}) => ltrSpans(c.X(x), y, [[str, o.fill || C.fg, o.bold]], o.size || 10.5, 'middle');
const hline = (c, x1, x2, y, color, dash) => `<polyline points="${c.X(x1)},${y} ${c.X(x2)},${y}" fill="none" stroke="${color}" stroke-width="1"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;

// morning shift: four nozzles, three products (0 petrol, 1 diesel, 2 LPG)
const PUMPS = [[0, 482310, 484150], [0, 351720, 353080], [1, 618400, 620900], [2, 204150, 205050]];
const PRICE = [46, 29, 9];
const PAID = [171300, 18400, 33500];

export function equipe(t, rtl) {
  const c = ctx(rtl); const P = 'zq'; const css = []; const H = 680; const sep = t.sep;
  const litres = [0, 0, 0]; PUMPS.forEach(([p, a, b]) => { litres[p] += b - a; });
  const due = litres.map((l, p) => l * PRICE[p]);
  const total = due.reduce((a, b) => a + b, 0);
  const paid = PAID.reduce((a, b) => a + b, 0);
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  // left: the meters
  const head = (x, y, str) => text(c, x, y, str, { size: 8.5, font: 'mono', fill: C.fg55, anchor: 'middle' });
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 510, 300, { stroke: C.fg35, fill: DARK }) + text(c, 96, 168, t.left, { size: 11, fill: C.fg, weight: 500 }) + head(330, 190, t.colStart) + head(430, 190, t.colEnd) + head(530, 190, t.colLitres) + hline(c, 96, 574, 300, C.line2) + '</g>';
  PUMPS.forEach(([p, a, b], i) => {
    const y = 214 + i * 24; const at = 5 + i * 3;
    s += `<g style="animation:${show(css, P, `pr${i}`, at)}">` + text(c, 96, y, t.pumps[i], { size: 10, fill: C.fg70 }) + num(c, 330, y, grp(a, sep), { fill: C.fg55 }) + '</g>';
    s += `<g style="animation:${show(css, P, `pe${i}`, at + 1)}">` + num(c, 430, y, grp(b, sep), { fill: C.fg70 }) + '</g>';
    s += `<g style="${pop(css, P, `pl${i}`, at + 1.5)}">` + num(c, 530, y, grp(b - a, sep), { bold: true }) + '</g>';
  });
  s += `<g style="animation:${show(css, P, 'ph', 18)}">` + head(330, 318, t.colLitres) + head(430, 318, t.colPrice) + head(530, 318, t.colDue) + hline(c, 96, 574, 398, C.line2) + '</g>';
  litres.forEach((l, p) => {
    const y = 340 + p * 22; const at = 19 + p * 3;
    s += `<g style="animation:${show(css, P, `dr${p}`, at)}">` + text(c, 96, y, t.products[p], { size: 10, fill: C.fg70 }) + num(c, 330, y, grp(l, sep)) + num(c, 430, y, '× ' + PRICE[p], { fill: C.fg55 }) + '</g>';
    s += `<g style="${pop(css, P, `da${p}`, at + 1)}">` + num(c, 530, y, grp(due[p], sep), { bold: true }) + '</g>';
  });
  s += `<g style="animation:${show(css, P, 'tl', 29)}">` + text(c, 96, 424, t.total, { size: 10.5, fill: C.fg, weight: 500 }) + '</g>';
  s += `<g style="${pop(css, P, 'tn', 29.5)}">` + num(c, 530, 424, grp(total, sep), { fill: C.accent, bold: true, size: 12.5 }) + '</g>';
  // right: what is handed over
  const BX = 626; const BW = 478; const K = BW / total;
  s += `<g style="animation:${show(css, P, 'pb', 32)}">` + rect(c, 610, 144, 510, 300, { stroke: C.fg70, fill: DARK }) + text(c, 626, 168, t.right, { size: 11, fill: C.fg, weight: 500 }) + text(c, 626, 196, t.due, { size: 10, fill: C.fg70 }) + text(c, 626, 256, t.paid, { size: 10, fill: C.fg70 }) + '</g>';
  s += `<g style="${growX(css, P, 'eb', 33, 3, rtl)}">` + rect(c, BX, 204, BW, 24, { stroke: C.fg, fill: C.fill }) + '</g>';
  s += `<g style="animation:${show(css, P, 'en', 36)}">` + num(c, 865, 221, grp(total, sep), { bold: true }) + '</g>';
  const fills = [[C.fg, C.fg], [C.fg70, C.fg55], [C.fg55, C.fg35]];
  let x = BX;
  PAID.forEach((v, i) => {
    const w = v * K; const at = 38 + i * 3;
    s += `<g style="${growX(css, P, `sb${i}`, at, 2, rtl)}">` + rect(c, x, 264, w, 24, { stroke: fills[i][0], fill: fills[i][1] }) + '</g>';
    const y = 316 + i * 24;
    s += `<g style="animation:${show(css, P, `lg${i}`, at + 1)}">` + rect(c, 626, y - 10, 12, 12, { stroke: fills[i][0], fill: fills[i][1] }) + text(c, 648, y, t.legend[i], { size: 10, fill: C.fg70 }) + num(c, 1040, y, grp(v, sep)) + '</g>';
    x += w;
  });
  s += `<g style="${pop(css, P, 'gs', 47)}">` + rect(c, x, 260, BX + BW - x, 32, { stroke: C.accent, fill: C.accent }) + '</g>';
  s += `<g style="${pop(css, P, 'gb', 48)}">` + rect(c, 626, 384, 478, 44, { stroke: C.accent, fill: C.accent }) + text(c, 638, 402, t.gapTop, { size: 11, fill: '#000', weight: 500 }) + text(c, 638, 418, t.gapSub, { size: 9, font: 'mono', fill: '#000' }) + '</g>';
  const by = 460;
  s += `<g style="animation:${show(css, P, 'bd', 52)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 520;
  s += tiles(c, css, P, ky, t.tiles, 56);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// one petrol tank, eight mornings; 20 000 L delivered on the third day
const THEO = [18000, 12800, 8000, 23000, 18400, 13000, 10000, 6000];
const DIP = [18000, 12770, 7950, 22690, 18060, 12630, 9610, 5590];
const CX = (i) => 330 + i * 100;
const GY = (g) => 292 - g * 0.27;

export function cuve(t, rtl) {
  const c = ctx(rtl); const P = 'zc'; const css = []; const H = 680; const sep = t.sep;
  const gap = THEO.map((v, i) => DIP[i] - v);
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 1040, 300, { stroke: C.fg35, fill: DARK }) + t.days.map((d, i) => text(c, CX(i), 166, d, { size: 9, font: 'mono', fill: C.fg55, anchor: 'middle' })).join('')
    + text(c, 96, 194, t.rowTheo, { size: 10, fill: C.fg70 }) + text(c, 96, 220, t.rowDip, { size: 10, fill: C.fg }) + text(c, 96, 246, t.rowGap, { size: 10, fill: C.fg, weight: 500 }) + text(c, 96, 296, t.axis, { size: 9, font: 'mono', fill: C.fg55 }) + hline(c, 290, 1070, 292, C.line2, '2 4') + '</g>';
  THEO.forEach((v, i) => {
    const at = 5 + i * 4; const hot = i >= 3;
    s += `<g style="animation:${show(css, P, `t${i}`, at)}">` + num(c, CX(i), 194, grp(v, sep), { fill: C.fg55 }) + '</g>';
    s += `<g style="animation:${show(css, P, `d${i}`, at + 1)}">` + num(c, CX(i), 220, grp(DIP[i], sep)) + '</g>';
    s += `<g style="${pop(css, P, `g${i}`, at + 2)}">` + num(c, CX(i), 246, sgn(gap[i], sep), { fill: hot ? C.accent : C.fg70, bold: true, size: 11.5 }) + '</g>';
  });
  // delivery marker between the third and the fourth morning
  s += `<g style="animation:${show(css, P, 'dv', 16)}"><polyline points="${c.X(580)},176 ${c.X(580)},412" fill="none" stroke="${C.accent}" stroke-width="1.5" stroke-dasharray="4 4"/>` + text(c, 580, 430, t.delivery, { size: 9, font: 'mono', fill: C.accent, weight: 500, anchor: 'middle' }) + '</g>';
  // the gap curve
  const pts = gap.map((g, i) => [c.X(CX(i)), GY(g)]);
  let len = 0; for (let i = 1; i < pts.length; i++) len += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]);
  s += `<polyline points="${pts.map((p) => `${p[0]},${p[1].toFixed(1)}`).join(' ')}" fill="none" stroke="${C.fg70}" stroke-width="1.5" stroke-dasharray="${len.toFixed(0)}" style="animation:${drawLine(css, P, 'ln', 38, 8, len)}"/>`;
  const sl = Math.hypot(pts[3][0] - pts[2][0], pts[3][1] - pts[2][1]);
  s += `<polyline points="${pts[2][0]},${pts[2][1].toFixed(1)} ${pts[3][0]},${pts[3][1].toFixed(1)}" fill="none" stroke="${C.accent}" stroke-width="3" stroke-dasharray="${sl.toFixed(0)}" style="animation:${drawLine(css, P, 'st', 47, 2, sl)}"/>`;
  pts.forEach((p, i) => { s += `<g style="${pop(css, P, `c${i}`, 38 + i)}"><circle cx="${p[0]}" cy="${p[1].toFixed(1)}" r="4" fill="${i >= 3 ? C.accent : C.fg}"/></g>`; });
  s += `<g style="animation:${show(css, P, 'sn', 49)}">` + text(c, 648, 338, t.stepNote, { size: 10.5, fill: C.accent, weight: 500 }) + '</g>';
  s += `<g style="animation:${show(css, P, 'so', 50)}">` + text(c, 760, 430, t.slopeNote, { size: 9, font: 'mono', fill: C.fg55 }) + '</g>';
  const by = 460;
  s += `<g style="animation:${show(css, P, 'bd', 52)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 520;
  s += tiles(c, css, P, ky, t.tiles, 56);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    equipe: {
      sep: ' ',
      title: 'La clôture d’une équipe : les compteurs contre la caisse',
      alt: 'Clôture de l’équipe du matin. À gauche, les index de quatre pistolets donnent 6 600 litres vendus : 3 200 d’essence, 2 500 de gasoil, 900 de GPL, soit 227 800 dinars attendus aux prix de l’exemple. À droite, ce que l’équipe remet : 171 300 dinars en espèces, 18 400 par carte, 33 500 en bons de clients en compte, soit 223 200. Il manque 4 600 dinars, l’équivalent de 100 litres d’essence, et cet écart est connu à la relève.',
      header: 'Exemple construit · équipe du matin, 6 h – 14 h · quatre pistolets, trois produits · prix d’exemple arrondis',
      left: 'Ce que disent les compteurs', right: 'Ce qui est remis à la relève',
      colStart: 'index début', colEnd: 'index fin', colLitres: 'litres', colPrice: 'prix d’exemple', colDue: 'attendu (DA)',
      pumps: ['pistolet 1 · essence', 'pistolet 2 · essence', 'pistolet 3 · gasoil', 'pistolet 4 · GPL'],
      products: ['essence', 'gasoil', 'GPL carburant'],
      total: 'attendu pour l’équipe', due: 'attendu d’après les compteurs', paid: 'remis par l’équipe',
      legend: ['espèces comptées', 'paiements par carte', 'bons des clients en compte'],
      gapTop: 'Écart de l’équipe : −4 600 DA', gapSub: 'soit 100 L d’essence au prix de l’exemple · connu à 14 h',
      band: 'Litres aux compteurs × prix = ce qui doit se retrouver en espèces, en carte ou en bons. Le reste est un écart, au nom d’une équipe.',
      tiles: [
        { big: '227 800 DA', l1: 'attendu d’après les compteurs', l2: '6 600 L sur quatre pistolets' },
        { big: '223 200 DA', l1: 'remis : espèces, carte, bons signés', l2: '171 300 + 18 400 + 33 500' },
        { big: '−4 600 DA', l1: 'l’écart de l’équipe du matin', l2: 'expliqué ou signé avant de partir', hot: true },
      ],
      line1: 'Sans relevé à chaque relève, l’écart d’une équipe se dilue dans la journée, puis dans le mois : on ne sait plus à qui le demander.',
      line2: 'Avec lui, la question est posée le jour même, à la bonne équipe : un bon oublié se retrouve, une erreur de monnaie s’explique.',
      note: 'Exemple construit · index, litres et montants fictifs ; les prix au litre sont des prix d’exemple arrondis, pas un tarif.',
    },
    cuve: {
      sep: ' ',
      title: 'La cuve : le stock calculé contre le stock jaugé',
      alt: 'Une cuve d’essence suivie pendant huit matins. Le stock théorique part de 18 000 litres, reçoit 20 000 litres le mardi et baisse des litres passés aux compteurs. Le stock jaugé est chaque matin un peu plus bas : l’écart cumulé passe de 0 à moins 50 litres en deux jours, tombe à moins 310 le lendemain de la livraison, puis glisse jusqu’à moins 410 litres en fin de semaine. Deux écarts se lisent : une pente de 20 à 30 litres par jour et une marche de 260 litres le jour de la livraison.',
      header: 'Exemple construit · cuve d’essence, huit matins · stock théorique = stock de départ + livraisons − litres aux compteurs',
      days: ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.', 'dim.'],
      rowTheo: 'stock théorique (L)', rowDip: 'stock jaugé (L)', rowGap: 'écart cumulé (L)', axis: 'la courbe de l’écart',
      delivery: 'livraison du mardi · 20 000 L au bon', stepNote: '−260 L le jour de la livraison', slopeNote: 'les autres jours : −20 à −30 L',
      band: 'Deux écarts différents : une pente régulière, à faire vérifier, et une marche le jour de la livraison, à contrôler au dépotage.',
      tiles: [
        { big: '−260 L', l1: 'apparus le jour de la livraison', l2: 'jauger avant et après le dépotage', hot: true },
        { big: '−20 à −30 L / jour', l1: 'une pente régulière : compteur ou cuve à faire vérifier', l2: 'visible si l’on jauge chaque matin' },
        { big: '−410 L en 7 jours', l1: '1,3 % des 32 000 L vendus dans la semaine', l2: 'sinon : découvert à l’inventaire' },
      ],
      line1: 'Le stock théorique vient des compteurs et des bons de livraison ; le stock jaugé vient de la cuve. L’un sans l’autre ne dit rien.',
      line2: 'Jaugée chaque matin, la cuve montre quel jour l’écart est apparu : c’est ce jour-là qu’il faut regarder, pas le mois.',
      note: 'Exemple construit · volumes fictifs ; une part d’un écart peut venir de la température, l’essence se dilatant quand elle chauffe.',
    },
  },
  en: {
    equipe: {
      sep: ',',
      title: 'Closing a shift: the meters against the till',
      alt: 'Closing the morning shift. On the left, the readings of four nozzles give 6,600 litres sold: 3,200 of petrol, 2,500 of diesel, 900 of LPG, that is 227,800 dinars expected at the example prices. On the right, what the shift hands over: 171,300 dinars in cash, 18,400 by card, 33,500 in account customers’ vouchers, that is 223,200. 4,600 dinars are missing, the equivalent of 100 litres of petrol, and this gap is known at shift change.',
      header: 'Constructed example · morning shift, 6 am – 2 pm · four nozzles, three products · rounded example prices',
      left: 'What the meters say', right: 'What is handed over at shift change',
      colStart: 'opening reading', colEnd: 'closing reading', colLitres: 'litres', colPrice: 'example price', colDue: 'expected (DA)',
      pumps: ['nozzle 1 · petrol', 'nozzle 2 · petrol', 'nozzle 3 · diesel', 'nozzle 4 · LPG'],
      products: ['petrol', 'diesel', 'LPG motor fuel'],
      total: 'expected for the shift', due: 'expected from the meters', paid: 'handed over by the shift',
      legend: ['cash counted', 'card payments', 'account customers’ vouchers'],
      gapTop: 'Shift gap: −4,600 DA', gapSub: 'that is 100 L of petrol at the example price · known at 2 pm',
      band: 'Litres on the meters × price = what must be found in cash, by card or in vouchers. The rest is a gap, in the name of one shift.',
      tiles: [
        { big: '227,800 DA', l1: 'expected from the meters', l2: '6,600 L across four nozzles' },
        { big: '223,200 DA', l1: 'handed over: cash, card, signed vouchers', l2: '171,300 + 18,400 + 33,500' },
        { big: '−4,600 DA', l1: 'the morning shift’s gap', l2: 'explained or signed before leaving', hot: true },
      ],
      line1: 'Without a reading at every shift change, one shift’s gap dissolves into the day, then the month: nobody knows whom to ask.',
      line2: 'With it, the question is asked the same day, to the right shift: a forgotten voucher is found, a change error is explained.',
      note: 'Constructed example · fictitious readings, litres and amounts; prices per litre are rounded example prices, not a tariff.',
    },
    cuve: {
      sep: ',',
      title: 'The tank: calculated stock against dipped stock',
      alt: 'One petrol tank followed over eight mornings. Book stock starts at 18,000 litres, receives 20,000 litres on Tuesday and falls by the litres that went through the meters. Dipped stock is a little lower each morning: the cumulative gap goes from 0 to minus 50 litres in two days, drops to minus 310 the morning after the delivery, then slides to minus 410 litres at the end of the week. Two gaps can be read: a slope of 20 to 30 litres a day and a step of 260 litres on delivery day.',
      header: 'Constructed example · petrol tank, eight mornings · book stock = opening stock + deliveries − litres on the meters',
      days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      rowTheo: 'book stock (L)', rowDip: 'dipped stock (L)', rowGap: 'cumulative gap (L)', axis: 'the gap curve',
      delivery: 'Tuesday’s delivery · 20,000 L on the note', stepNote: '−260 L on delivery day', slopeNote: 'other days: −20 to −30 L',
      band: 'Two different gaps: a steady slope, to have checked, and a step on delivery day, to control at unloading.',
      tiles: [
        { big: '−260 L', l1: 'appeared on delivery day', l2: 'dip before and after unloading', hot: true },
        { big: '−20 to −30 L / day', l1: 'a steady slope: meter or tank to have checked', l2: 'visible if the tank is dipped every morning' },
        { big: '−410 L in 7 days', l1: '1.3% of the 32,000 L sold in the week', l2: 'otherwise: found at stocktake' },
      ],
      line1: 'Book stock comes from the meters and the delivery notes; dipped stock comes from the tank. One without the other says nothing.',
      line2: 'Dipped every morning, the tank shows which day the gap appeared: that is the day to look at, not the month.',
      note: 'Constructed example · fictitious volumes; part of a gap can come from temperature, petrol expanding as it warms.',
    },
  },
  ar: {
    equipe: {
      sep: ' ',
      title: 'إغلاق المناوبة: العدّادات مقابل الصندوق',
      alt: 'إغلاق مناوبة الصباح. من جهة، مؤشرات أربع فوهات تعطي 6600 لتر مبيعة: 3200 من البنزين، 2500 من المازوت، و900 من غاز البترول المميَّع، أي 227800 دينار منتظرة بأسعار المثال. ومن الجهة الأخرى، ما تسلّمه المناوبة: 171300 دينار نقداً، 18400 بالبطاقة، و33500 بوصولات زبائن الحساب، أي 223200. ينقص 4600 دينار، ما يعادل 100 لتر من البنزين، وهذا الفارق معروف عند تبديل المناوبة.',
      header: 'مثال مركَّب · مناوبة الصباح، من الساعة 6 إلى الساعة 14 · أربع فوهات، ثلاثة منتجات · أسعار مثال مقرَّبة',
      left: 'ما تقوله العدّادات', right: 'ما يُسلَّم عند تبديل المناوبة',
      colStart: 'مؤشر البداية', colEnd: 'مؤشر النهاية', colLitres: 'اللترات', colPrice: 'سعر المثال', colDue: 'المنتظر (دج)',
      pumps: ['الفوهة 1 · بنزين', 'الفوهة 2 · بنزين', 'الفوهة 3 · مازوت', 'الفوهة 4 · غاز مميَّع'],
      products: ['البنزين', 'المازوت', 'غاز البترول المميَّع'],
      total: 'المنتظر من المناوبة', due: 'المنتظر حسب العدّادات', paid: 'ما سلّمته المناوبة',
      legend: ['النقد المعدود', 'الدفع بالبطاقة', 'وصولات زبائن الحساب'],
      gapTop: 'فارق المناوبة: ⁦−4 600⁩ دج', gapSub: 'أي 100 لتر من البنزين بسعر المثال · معروف على الساعة 14',
      band: 'اللترات في العدّادات × السعر = ما يجب أن يوجد نقداً أو بالبطاقة أو بالوصولات. والباقي فارق، باسم مناوبة واحدة.',
      tiles: [
        { big: '⁦227 800⁩ دج', l1: 'المنتظر حسب العدّادات', l2: '6600 لتر على أربع فوهات' },
        { big: '⁦223 200⁩ دج', l1: 'المسلَّم: نقد، بطاقة، ووصولات موقَّعة', l2: '⁦171 300 + 18 400 + 33 500⁩' },
        { big: '⁦−4 600⁩ دج', l1: 'فارق مناوبة الصباح', l2: 'يُفسَّر أو يُوقَّع قبل الانصراف', hot: true },
      ],
      line1: 'دون قراءة عند كل تبديل، يذوب فارق المناوبة في اليوم ثم في الشهر: فلا يُعرف من يُسأل عنه.',
      line2: 'ومعها، يُطرح السؤال في اليوم نفسه، على المناوبة المعنية: وصل منسي يُعثر عليه، وخطأ في الصرف يُفسَّر.',
      note: 'مثال مركَّب · مؤشرات ولترات ومبالغ خيالية؛ وأسعار اللتر أسعار مثال مقرَّبة، لا تسعيرة.',
    },
    cuve: {
      sep: ' ',
      title: 'الخزان: المخزون المحسوب مقابل المخزون المقيس',
      alt: 'خزان بنزين يُتابَع طيلة ثمانية صباحات. المخزون النظري ينطلق من 18000 لتر، يتلقى 20000 لتر يوم الثلاثاء، وينقص باللترات التي مرّت في العدّادات. والمخزون المقيس أدنى قليلاً كل صباح: الفارق المتراكم ينتقل من 0 إلى ناقص 50 لتراً في يومين، ينزل إلى ناقص 310 في الصباح الموالي للتسليم، ثم ينزلق إلى ناقص 410 لتر في نهاية الأسبوع. فارقان يُقرآن: ميل من 20 إلى 30 لتراً في اليوم، ودرجة من 260 لتراً يوم التسليم.',
      header: 'مثال مركَّب · خزان بنزين، ثمانية صباحات · المخزون النظري = مخزون البداية + التسليمات − لترات العدّادات',
      days: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت', 'الأحد'],
      rowTheo: 'المخزون النظري (لتر)', rowDip: 'المخزون المقيس (لتر)', rowGap: 'الفارق المتراكم (لتر)', axis: 'منحنى الفارق',
      delivery: 'تسليم الثلاثاء · ⁦20 000⁩ لتر في الوصل', stepNote: '⁦−260⁩ لتراً يوم التسليم', slopeNote: 'الأيام الأخرى: من ⁦−20⁩ إلى ⁦−30⁩ لتراً',
      band: 'فارقان مختلفان: ميل منتظم، يستدعي المراجعة، ودرجة يوم التسليم، تُراقَب عند التفريغ.',
      tiles: [
        { big: '⁦−260⁩ لتراً', l1: 'ظهرت يوم التسليم', l2: 'قياس الخزان قبل التفريغ وبعده', hot: true },
        { big: 'من ⁦−20⁩ إلى ⁦−30⁩ لتراً في اليوم', l1: 'ميل منتظم: عدّاد أو خزان يستدعي المراجعة', l2: 'يُرى إذا قيس الخزان كل صباح' },
        { big: '⁦−410⁩ لتر في 7 أيام', l1: '⁦1,3 %⁩ من ⁦32 000⁩ لتر بيعت في الأسبوع', l2: 'وإلا: يُكتشف عند الجرد' },
      ],
      line1: 'المخزون النظري يأتي من العدّادات ووصولات التسليم؛ والمخزون المقيس يأتي من الخزان. وواحد دون الآخر لا يقول شيئاً.',
      line2: 'الخزان المقيس كل صباح يُظهر في أي يوم ظهر الفارق: ذلك اليوم هو الذي يُنظر فيه، لا الشهر.',
      note: 'مثال مركَّب · أحجام خيالية؛ وجزء من الفارق قد يأتي من الحرارة، فالبنزين يتمدد حين يسخن.',
    },
  },
};
