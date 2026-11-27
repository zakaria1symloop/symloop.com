// Bespoke animated figures for the 2027 "logiciel bijouterie" page.
//  etiquette(): one gold bracelet, 12.4 g in 18 karat. Its price is not on the tag:
//               12.4 g x 20 000 (gram price of the day) = 248 000, plus making charge
//               12.4 g x 2 500 = 31 000, that is 279 000. Beside it, the same piece over
//               30 days while the gram price goes from 18 500 to 20 000: a tag written
//               on day 1 says 260 400, the recalculated price ends at 279 000.
//  plateau():   one tray of 24 rings counted twice, by scanned tags and by weight:
//               24 pieces and 186.4 g expected, 23 pieces and 178.1 g found; the gap
//               is one piece of 8.3 g, with its reference.
// Numbers are drawn in their own text elements, direction="ltr".
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, open, heading, esc } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function pop(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scale(0)}${(at + 1.2).toFixed(1)}%,100%{transform:scale(1)}}`); return `transform-box:fill-box;transform-origin:center;animation:${P}-${id} ${LOOP}s linear infinite`; }
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
const num = (c, x, y, str, o = {}) => ltrSpans(c.X(x), y, [[str, o.fill || C.fg, o.bold]], o.size || 10.5, 'middle');
const grp = (n, sep) => String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, sep);
const poly = (c, pts, color, sw, dash) => `<polyline points="${pts.map(([x, y]) => `${c.X(x)},${y}`).join(' ')}" fill="none" stroke="${color}" stroke-width="${sw || 1}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;

// one piece: weight in grams, making charge per gram; gram price every three days over a month
const WEIGHT = 12.4; const MAKING = 2500;
const GRAM = [18500, 18650, 18600, 18900, 19100, 19050, 19350, 19500, 19450, 19800, 20000];
const priceAt = (g) => WEIGHT * g + WEIGHT * MAKING;

export function etiquette(t, rtl) {
  const c = ctx(rtl); const P = 'jw'; const css = []; const H = 686; const sep = t.sep;
  const today = GRAM[GRAM.length - 1];
  const gold = WEIGHT * today; const making = WEIGHT * MAKING; const total = gold + making;
  const old = priceAt(GRAM[0]);
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + text(c, 96, 172, t.left, { size: 11, fill: C.fg, weight: 500 }) + poly(c, [[632, 160], [632, 436]], C.line2) + text(c, 650, 172, t.right, { size: 11, fill: C.fg, weight: 500 }) + '</g>';
  // the tag: what is written on the piece
  s += `<g style="${pop(css, P, 'tg', 5)}">` + rect(c, 96, 188, 250, 112, { stroke: C.accent, fill: TINT }) + ltrSpans(c.RX(96, 250) + 14, 212, [['B-0457', C.accent, true]], 13, 'start') + text(c, 110, 236, t.tag1, { size: 10.5, fill: C.fg }) + text(c, 110, 258, t.tag2, { size: 10.5, fill: C.fg }) + text(c, 110, 280, t.tag3, { size: 10.5, fill: C.fg }) + '</g>';
  s += `<g style="animation:${show(css, P, 'tn', 8)}">` + text(c, 366, 232, t.noPrice1, { size: 10, fill: C.fg70 }) + text(c, 366, 250, t.noPrice2, { size: 10, fill: C.fg70 }) + '</g>';
  // the calculation at the moment of sale
  const ledger = (y, label, value, id, at, hot) => `<g style="animation:${show(css, P, id, at)}">` + text(c, 96, y, label, { size: hot ? 12 : 10.5, fill: hot ? C.accent : C.fg, weight: hot ? 500 : 300 }) + ltrSpans(c.X(604), y, [[value, hot ? C.accent : C.fg, true]], hot ? 17 : 12, rtl ? 'start' : 'end') + '</g>';
  s += ledger(338, t.rowGold, grp(gold, sep), 'l1', 12, false);
  s += ledger(364, t.rowMaking, grp(making, sep), 'l2', 16, false);
  s += `<g style="animation:${show(css, P, 'l3', 20)}">` + poly(c, [[96, 380], [604, 380]], C.fg55) + '</g>';
  s += ledger(410, t.rowTotal, grp(total, sep), 'l4', 21, true);
  // the same piece over a month
  const DX = (i) => 676 + i * 40; const PY = (v) => 410 - (v - 258000) * (190 / 24000);
  const pts = GRAM.map((g, i) => [c.X(DX(i)), PY(priceAt(g))]);
  let len = 0; for (let i = 1; i < pts.length; i++) len += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]);
  s += `<g style="animation:${show(css, P, 'fx', 24)}">` + poly(c, [[DX(0), PY(old)], [DX(10), PY(old)]], C.fg55, 1.5, '5 4') + text(c, DX(0), PY(old) + 18, t.fixed, { size: 9.5, fill: C.fg70 }) + '</g>';
  s += `<polyline points="${pts.map((p) => `${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ')}" fill="none" stroke="${C.accent}" stroke-width="2.5" stroke-dasharray="${len.toFixed(0)}" style="animation:${drawLine(css, P, 'ln', 26, 9, len)}"/>`;
  s += `<g style="animation:${show(css, P, 'ax', 26)}">` + text(c, DX(0), 436, t.day1, { size: 8.5, font: 'mono', fill: C.fg55 }) + text(c, DX(10) - 40, 436, t.day30, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>';
  s += `<g style="${pop(css, P, 'e1', 36)}"><circle cx="${c.X(DX(10)).toFixed(1)}" cy="${PY(total).toFixed(1)}" r="5.5" fill="${C.accent}"/>` + num(c, DX(10) - 4, PY(total) - 12, grp(total, sep), { size: 12, bold: true, fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'gp', 39)}">` + poly(c, [[DX(10) + 16, PY(old)], [DX(10) + 16, PY(total)]], C.accent, 1.5) + poly(c, [[DX(10) + 10, PY(old)], [DX(10) + 22, PY(old)]], C.accent, 1.5) + poly(c, [[DX(10) + 10, PY(total)], [DX(10) + 22, PY(total)]], C.accent, 1.5) + text(c, DX(6), (PY(old) + PY(total)) / 2 + 14, t.gap, { size: 10, fill: C.accent, weight: 500 }) + '</g>';
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bd', 42)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 46);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// one tray of 24 rings, weights in grams; the fifth one is missing
const TRAY = [6.2, 7.8, 5.4, 9.1, 8.3, 7.0, 6.6, 10.2, 5.9, 8.8, 7.4, 6.1, 9.6, 7.2, 8.0, 5.7, 11.0, 6.9, 7.7, 8.5, 6.4, 9.3, 7.9, 9.4];
const MISSING = 4;

export function plateau(t, rtl) {
  const c = ctx(rtl); const P = 'jg'; const css = []; const H = 686; const dec = t.dec;
  const g1 = (v) => v.toFixed(1).replace('.', dec);
  const all = TRAY.reduce((a, b) => a + b, 0); const found = all - TRAY[MISSING];
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + text(c, 96, 172, t.legend, { size: 8.5, font: 'mono', fill: C.fg55 }) + poly(c, [[590, 190], [590, 436]], C.line2) + '</g>';
  let k = 0;
  TRAY.forEach((w, i) => {
    const col = i % 6; const row = Math.floor(i / 6); const x = 110 + col * 76; const y = 196 + row * 56;
    if (i === MISSING) return;
    s += `<g style="${pop(css, P, `c${i}`, 5 + k * 0.9)}">` + rect(c, x, y, 68, 46, { stroke: C.fg55, fill: C.fill }) + num(c, x + 34, y + 28, g1(w), { size: 11.5, fill: C.fg }) + '</g>';
    k++;
  });
  { const col = MISSING % 6; const row = Math.floor(MISSING / 6); const x = 110 + col * 76; const y = 196 + row * 56;
    s += `<g style="${pop(css, P, 'miss', 29)}">` + rect(c, x, y, 68, 46, { stroke: C.accent, fill: TINT, dash: '4 3' }) + num(c, x + 34, y + 28, g1(TRAY[MISSING]), { size: 11.5, bold: true, fill: C.accent }) + '</g>'; }
  // the two counts side by side
  const row = (y, label, pieces, grams, id, at, hot) => `<g style="animation:${show(css, P, id, at)}">` + text(c, 614, y, label, { size: 11, fill: hot ? C.accent : C.fg, weight: hot ? 500 : 300 }) + num(c, 880, y, pieces, { size: 13, bold: true, fill: hot ? C.accent : C.fg }) + num(c, 1020, y, grams, { size: 13, bold: true, fill: hot ? C.accent : C.fg }) + '</g>';
  s += `<g style="animation:${show(css, P, 'hd', 24)}">` + text(c, 614, 214, t.trayName, { size: 11, fill: C.fg, weight: 500 }) + text(c, 846, 240, t.colPieces, { size: 8.5, font: 'mono', fill: C.fg55 }) + text(c, 986, 240, t.colGrams, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>';
  s += row(268, t.expected, String(TRAY.length), g1(all), 'r1', 26, false);
  s += row(298, t.counted, String(TRAY.length - 1), g1(found), 'r2', 28, false);
  s += `<g style="animation:${show(css, P, 'rl', 31)}">` + poly(c, [[614, 312], [1090, 312]], C.fg55) + '</g>';
  s += row(338, t.gap, '1', g1(TRAY[MISSING]), 'r3', 32, true);
  s += `<g style="${pop(css, P, 'nm', 35)}">` + rect(c, 614, 362, 476, 58, { stroke: C.accent, fill: TINT }) + text(c, 628, 384, t.missTop, { size: 10.5, fill: C.accent, weight: 500 }) + text(c, 628, 404, t.missSub, { size: 9.5, fill: C.fg70 }) + '</g>';
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
    etiquette: {
      sep: ' ',
      title: 'Le prix n’est pas sur l’étiquette : il se calcule',
      alt: 'Un bracelet en or 18 carats de 12,4 grammes, référence B-0457. Son prix du jour : 12,4 grammes multipliés par un prix du gramme de 20 000 dinars, soit 248 000, plus la façon, 12,4 grammes à 2 500 dinars, soit 31 000 : 279 000 dinars. À côté, la même pièce sur trente jours pendant que le gramme passe de 18 500 à 20 000 dinars : une étiquette écrite le premier jour affiche 260 400 dinars, le prix recalculé finit à 279 000.',
      header: 'Exemple construit · un bracelet de 12,4 g en or 18 carats, le prix du gramme saisi chaque matin',
      left: 'Ce que porte la pièce, ce que calcule la caisse', right: 'La même pièce sur trente jours',
      tag1: 'bracelet · or 18 carats (750)', tag2: 'poids : 12,4 g', tag3: 'façon : 2 500 DA par gramme',
      noPrice1: 'pas de prix sur l’étiquette :', noPrice2: 'un poids, un titre, une façon',
      rowGold: 'or : 12,4 g × 20 000 DA, prix du gramme du jour', rowMaking: 'façon : 12,4 g × 2 500 DA', rowTotal: 'prix du jour, en DA',
      fixed: 'étiquette écrite le premier jour : 260 400', gap: 'écart : 18 600 DA', day1: 'jour 1', day30: 'jour 30',
      band: 'Le prix d’un bijou en or est un poids multiplié par le prix du gramme du jour, plus la façon. L’étiquette porte le poids ; le logiciel fait le reste.',
      tiles: [
        { big: '279 000 DA', l1: 'prix du jour : or 248 000 + façon 31 000', l2: '12,4 g × (20 000 + 2 500)' },
        { big: '18 600 DA', l1: 'd’écart avec une étiquette vieille d’un mois', l2: '12,4 g × 1 500 DA de hausse', hot: true },
        { big: '1 chiffre', l1: 'à saisir chaque matin : le prix du gramme', l2: 'toutes les pièces suivent' },
      ],
      line1: 'Quand l’or monte, l’étiquette écrite le mois dernier vend en dessous du jour ; quand il baisse, elle affiche un prix que le client trouve mieux ailleurs.',
      line2: 'Sur un stock de 3 kg, une hausse de 1 500 DA par gramme, ce sont 4 500 000 DA de valeur en plus : à savoir avant de vendre, et avant de racheter.',
      note: 'Exemple construit · prix du gramme et façon fictifs ; le cours réel se saisit chaque matin.',
    },
    plateau: {
      dec: ',',
      title: 'Un plateau compté deux fois : par les étiquettes, par le poids',
      alt: 'Un plateau de 24 bagues compté de deux façons. Attendu : 24 pièces et 186,4 grammes. Scanné et pesé : 23 pièces et 178,1 grammes. L’écart est d’une pièce de 8,3 grammes, identifiée par sa référence.',
      header: 'Exemple construit · un plateau de bagues, compté le matin avant l’ouverture',
      legend: 'chaque case : une bague et son poids en grammes · en pointillé : la pièce non scannée',
      trayName: 'Plateau 3 · bagues', colPieces: 'pièces', colGrams: 'grammes',
      expected: 'attendu, d’après le stock', counted: 'scanné, puis pesé', gap: 'écart',
      missTop: 'pièce manquante : BG-0312, bague, 8,3 g', missSub: 'dernier mouvement connu : sortie en essayage, hier',
      band: 'Un plateau compté deux fois : par les étiquettes scannées et par le poids. Quand les deux comptes disent la même chose, l’écart a un nom.',
      tiles: [
        { big: '24 pièces', l1: 'attendues sur le plateau, 186,4 g', l2: 'd’après les entrées et les ventes' },
        { big: '23 pièces', l1: 'scannées, 178,1 g sur la balance', l2: 'le poids confirme le compte' },
        { big: '8,3 g', l1: 'd’écart : une pièce, identifiée', l2: 'BG-0312, et non « il manque quelque chose »', hot: true },
      ],
      line1: 'Compter les pièces ne suffit pas, peser ne suffit pas : c’est la pièce qui manque, avec sa référence, qui permet de chercher.',
      line2: 'Un plateau par jour, à tour de rôle : toute la vitrine est recomptée régulièrement, sans fermer la boutique.',
      note: 'Exemple construit · poids, référence et mouvement fictifs.',
    },
  },
  en: {
    etiquette: {
      sep: ',',
      title: 'The price is not on the tag: it is calculated',
      alt: 'An 18-karat gold bracelet of 12.4 grams, reference B-0457. Its price of the day: 12.4 grams times a gram price of 20,000 dinars, that is 248,000, plus the making charge, 12.4 grams at 2,500 dinars, that is 31,000: 279,000 dinars. Beside it, the same piece over thirty days while the gram goes from 18,500 to 20,000 dinars: a tag written on the first day shows 260,400 dinars, the recalculated price ends at 279,000.',
      header: 'Constructed example · a 12.4 g bracelet in 18-karat gold, the gram price entered every morning',
      left: 'What the piece carries, what the till calculates', right: 'The same piece over thirty days',
      tag1: 'bracelet · 18-karat gold (750)', tag2: 'weight: 12.4 g', tag3: 'making charge: DA 2,500 per gram',
      noPrice1: 'no price on the tag:', noPrice2: 'a weight, a fineness, a making charge',
      rowGold: 'gold: 12.4 g × DA 20,000, gram price of the day', rowMaking: 'making charge: 12.4 g × DA 2,500', rowTotal: 'price of the day, in DA',
      fixed: 'tag written on the first day: 260,400', gap: 'gap: DA 18,600', day1: 'day 1', day30: 'day 30',
      band: 'The price of a gold piece is a weight times the gram price of the day, plus the making charge. The tag carries the weight; the software does the rest.',
      tiles: [
        { big: 'DA 279,000', l1: 'price of the day: gold 248,000 + making 31,000', l2: '12.4 g × (20,000 + 2,500)' },
        { big: 'DA 18,600', l1: 'gap with a tag one month old', l2: '12.4 g × DA 1,500 of increase', hot: true },
        { big: '1 figure', l1: 'to enter every morning: the gram price', l2: 'every piece follows' },
      ],
      line1: 'When gold rises, the tag written last month sells below the day’s price; when it falls, it shows a price the customer finds better elsewhere.',
      line2: 'On 3 kg of stock, a rise of DA 1,500 per gram is DA 4,500,000 more in value: to be known before selling, and before buying back.',
      note: 'Constructed example · fictitious gram price and making charge; the real price is entered every morning.',
    },
    plateau: {
      dec: '.',
      title: 'A tray counted twice: by the tags, by the weight',
      alt: 'A tray of 24 rings counted in two ways. Expected: 24 pieces and 186.4 grams. Scanned and weighed: 23 pieces and 178.1 grams. The gap is one piece of 8.3 grams, identified by its reference.',
      header: 'Constructed example · a tray of rings, counted in the morning before opening',
      legend: 'each cell: a ring and its weight in grams · dotted: the piece that was not scanned',
      trayName: 'Tray 3 · rings', colPieces: 'pieces', colGrams: 'grams',
      expected: 'expected, from stock', counted: 'scanned, then weighed', gap: 'gap',
      missTop: 'missing piece: BG-0312, ring, 8.3 g', missSub: 'last known movement: taken out for a fitting, yesterday',
      band: 'A tray counted twice: by the scanned tags and by the weight. When both counts say the same thing, the gap has a name.',
      tiles: [
        { big: '24 pieces', l1: 'expected on the tray, 186.4 g', l2: 'from goods in and sales' },
        { big: '23 pieces', l1: 'scanned, 178.1 g on the scale', l2: 'the weight confirms the count' },
        { big: '8.3 g', l1: 'of gap: one piece, identified', l2: 'BG-0312, and not “something is missing”', hot: true },
      ],
      line1: 'Counting pieces is not enough, weighing is not enough: it is the missing piece, with its reference, that makes a search possible.',
      line2: 'One tray a day, in turn: the whole display is recounted regularly, without closing the shop.',
      note: 'Constructed example · fictitious weights, reference and movement.',
    },
  },
  ar: {
    etiquette: {
      sep: ' ',
      title: 'السعر ليس على الملصق: يُحسب',
      alt: 'سوار من ذهب عيار 18 بوزن 12,4 غراماً. سعره اليوم: 12,4 غراماً مضروبة في سعر غرام من 20 ألف دينار، أي 248 ألفاً، زائد الصنعة، 12,4 غراماً بـ2500 دينار، أي 31 ألفاً: 279 ألف دينار. وبجانبه، القطعة نفسها على ثلاثين يوماً والغرام ينتقل من 18500 إلى 20 ألف دينار: ملصق كُتب في اليوم الأول يعرض 260400 دينار، والسعر المعاد حسابه ينتهي عند 279 ألفاً.',
      header: 'مثال مركَّب · سوار من ⁦12,4⁩ غ من ذهب عيار 18، وسعر الغرام يُدخَل كل صباح',
      left: 'ما تحمله القطعة، وما يحسبه الصندوق', right: 'القطعة نفسها على ثلاثين يوماً',
      tag1: 'سوار · ذهب عيار 18 ⁦(750)⁩', tag2: 'الوزن: ⁦12,4⁩ غ', tag3: 'الصنعة: ⁦2 500⁩ دج للغرام',
      noPrice1: 'لا سعر على الملصق:', noPrice2: 'وزن، عيار، وصنعة',
      rowGold: 'الذهب: ⁦12,4 × 20 000⁩ دج، سعر غرام اليوم', rowMaking: 'الصنعة: ⁦12,4 × 2 500⁩ دج', rowTotal: 'سعر اليوم، بالدينار',
      fixed: 'ملصق كُتب في اليوم الأول: ⁦260 400⁩', gap: 'الفارق: ⁦18 600⁩ دج', day1: 'اليوم 1', day30: 'اليوم 30',
      band: 'سعر الحلية الذهبية وزن مضروب في سعر غرام اليوم، زائد الصنعة. الملصق يحمل الوزن؛ والبرنامج يقوم بالباقي.',
      tiles: [
        { big: '⁦279 000⁩ دج', l1: 'سعر اليوم: الذهب ⁦248 000⁩ + الصنعة ⁦31 000⁩', l2: '⁦12,4 × (20 000 + 2 500)⁩' },
        { big: '⁦18 600⁩ دج', l1: 'فارق مع ملصق عمره شهر', l2: '⁦12,4 × 1 500⁩ دج من الارتفاع', hot: true },
        { big: 'رقم واحد', l1: 'يُدخَل كل صباح: سعر الغرام', l2: 'وكل القطع تتبع' },
      ],
      line1: 'حين يصعد الذهب، الملصق المكتوب الشهر الماضي يبيع دون سعر اليوم؛ وحين ينزل، يعرض سعراً يجد الزبون أحسن منه في مكان آخر.',
      line2: 'على مخزون من 3 كلغ، ارتفاع بـ1500 دج للغرام يعني 4500000 دج من القيمة الإضافية: تُعرف قبل البيع، وقبل الشراء.',
      note: 'مثال مركَّب · سعر الغرام والصنعة خياليان؛ والسعر الحقيقي يُدخَل كل صباح.',
    },
    plateau: {
      dec: ',',
      title: 'صينية تُعدّ مرتين: بالملصقات، وبالوزن',
      alt: 'صينية من 24 خاتماً تُعدّ بطريقتين. المنتظر: 24 قطعة و186,4 غراماً. الممسوح والموزون: 23 قطعة و178,1 غراماً. الفارق قطعة واحدة من 8,3 غرامات، معرَّفة بمرجعها.',
      header: 'مثال مركَّب · صينية خواتم، تُعدّ في الصباح قبل الفتح',
      legend: 'كل خانة: خاتم ووزنه بالغرام · بالتنقيط: القطعة التي لم تُمسح',
      trayName: 'الصينية 3 · الخواتم', colPieces: 'القطع', colGrams: 'الغرامات',
      expected: 'المنتظر، حسب المخزون', counted: 'الممسوح، ثم الموزون', gap: 'الفارق',
      missTop: 'القطعة الناقصة: خاتم، ⁦8,3⁩ غ', missSub: 'آخر حركة معروفة: خروج للتجربة، أمس',
      band: 'صينية تُعدّ مرتين: بالملصقات الممسوحة وبالوزن. وحين يقول العدّان الشيء نفسه، يصير للفارق اسم.',
      tiles: [
        { big: '24 قطعة', l1: 'منتظرة على الصينية، ⁦186,4⁩ غ', l2: 'حسب المدخلات والمبيعات' },
        { big: '23 قطعة', l1: 'ممسوحة، ⁦178,1⁩ غ على الميزان', l2: 'الوزن يؤكد العدّ' },
        { big: '⁦8,3⁩ غ', l1: 'من الفارق: قطعة واحدة، معرَّفة', l2: 'بمرجعها، لا «شيء ناقص»', hot: true },
      ],
      line1: 'عدّ القطع لا يكفي، والوزن لا يكفي: القطعة الناقصة، بمرجعها، هي التي تسمح بالبحث.',
      line2: 'صينية كل يوم، بالتناوب: الواجهة كلها يُعاد عدّها بانتظام، دون إغلاق المحل.',
      note: 'مثال مركَّب · أوزان ومرجع وحركة خيالية.',
    },
  },
};
