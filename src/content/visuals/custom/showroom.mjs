// Bespoke animated figures for the 2027 "logiciel de gestion de showroom automobile" page.
//  revient():    two vehicles bought at the same price (2 900 000) and listed at the same price
//                (3 250 000). The 350 000 gap is drawn as one bar per vehicle, split into the costs
//                added to the vehicle, the real margin and the discount given. Vehicle A, sold in
//                20 days: costs 140 000, margin 160 000, discount 50 000. Vehicle B, sold after
//                130 days: costs 165 000, margin 35 000, discount 150 000.
//  anciennete(): forty vehicles in stock, one square each, stacked by days in stock in bins of
//                ten days. 14 are under 31 days, 11 between 31 and 60, 7 between 61 and 90 and
//                8 over 90 days; those 8 hold 24 800 000 of a stock worth 121 600 000.
// Numbers are drawn in their own text elements, direction="ltr".
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, open, heading, esc } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function pop(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scale(0)}${(at + 1.2).toFixed(1)}%,100%{transform:scale(1)}}`); return `transform-box:fill-box;transform-origin:center;animation:${P}-${id} ${LOOP}s linear infinite`; }
function growX(css, P, id, at, dur, rtl) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'} center;animation:${P}-${id} ${LOOP}s linear infinite`; }
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
const grp = (n, sep) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, sep);
const dec1 = (v, d) => v.toFixed(1).replace('.', d);

// two vehicles, same purchase price, same listed price
const BUY = 2900000; const LISTED = 3250000;
const CARS = [
  { days: 20, costs: 140000, discount: 50000 },
  { days: 130, costs: 165000, discount: 150000 },
];
const SX = (v) => 270 + v / 500;

export function revient(t, rtl) {
  const c = ctx(rtl); const P = 'cr'; const css = []; const H = 686;
  const iso = (str) => (rtl ? `⁦${str}⁩` : str);
  const fmt = (n) => iso(grp(n, t.sep));
  const GAP = LISTED - BUY;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  let frame = rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + text(c, 96, 170, t.chartTitle, { size: 11, fill: C.fg, weight: 500 });
  // legend
  [[C.fg35, C.fg55, t.legCosts], [SOFT, C.accent, t.legMargin], [C.fill, C.fg55, t.legDiscount]].forEach(([fill, stroke, label], i) => { frame += rect(c, 640 + i * 150, 160, 12, 12, { stroke, fill }) + text(c, 660 + i * 150, 171, label, { size: 9.5, fill: C.fg70 }); });
  s += `<g style="animation:${show(css, P, 'pa', 3)}">${frame}</g>`;
  // the two prices that are the same for both vehicles
  s += `<g style="animation:${show(css, P, 'pr', 5)}">` + poly(c, [[SX(0), 204], [SX(0), 422]], C.fg55, 1, '3 4') + poly(c, [[SX(GAP), 204], [SX(GAP), 422]], C.fg55, 1, '3 4')
    + text(c, SX(0), 198, t.buy.replace('{v}', fmt(BUY)), { size: 9.5, fill: C.fg, weight: 500 }) + text(c, SX(GAP), 198, t.listed.replace('{v}', fmt(LISTED)), { size: 9.5, fill: C.fg, weight: 500, anchor: 'end' }) + '</g>';
  CARS.forEach((k, i) => {
    const y = 232 + i * 108; const at = 8 + i * 14; const hot = i === 1;
    const margin = GAP - k.costs - k.discount; const sold = LISTED - k.discount;
    const segs = [[k.costs, C.fg35, C.fg55, C.fg], [margin, SOFT, C.accent, C.accent], [k.discount, C.fill, C.fg55, C.fg70]];
    s += `<g style="animation:${show(css, P, `l${i}`, at - 1)}">` + text(c, 96, y + 22, t.cars[i], { size: 11.5, fill: hot ? C.accent : C.fg, weight: 500 }) + text(c, 96, y + 40, t.sold[i], { size: 9.5, fill: C.fg70 }) + text(c, SX(0), y - 8, t.detail[i], { size: 9, fill: C.fg55 }) + '</g>';
    let v0 = 0;
    segs.forEach(([v, fill, stroke, col], j) => {
      s += `<g style="${growX(css, P, `s${i}x${j}`, at + j * 2.4, 2.2, rtl)}">` + rect(c, SX(v0), y, v / 500, 50, { stroke, fill }) + '</g>';
      s += `<g style="animation:${show(css, P, `v${i}x${j}`, at + j * 2.4 + 2)}">` + num(c, SX(v0 + v / 2), y + 30, grp(v, t.sep), { size: 11, bold: true, fill: col }) + '</g>';
      v0 += v;
    });
    // markers under the bar: cost price and selling price
    s += `<g style="animation:${show(css, P, `m${i}`, at + 8)}">` + poly(c, [[SX(k.costs), y + 50], [SX(k.costs), y + 57]], C.fg55) + poly(c, [[SX(k.costs + margin), y + 50], [SX(k.costs + margin), y + 57]], C.accent)
      + text(c, SX(k.costs) - 4, y + 68, t.rev.replace('{v}', fmt(BUY + k.costs)), { size: 9, fill: C.fg70, anchor: 'end' }) + text(c, SX(k.costs + margin) + 4, y + 68, t.sale.replace('{v}', fmt(sold)), { size: 9, fill: C.accent }) + '</g>';
    // the margin as a share of the selling price
    s += `<g style="${pop(css, P, `p${i}`, at + 10)}">` + ltrSpans(c.X(990), y + 24, [[`${dec1(margin / sold * 100, t.dec)} %`, hot ? C.accent : C.fg, true]], 15, rtl ? 'end' : 'start') + text(c, 990, y + 41, t.pctSub, { size: 9, fill: C.fg70 }) + '</g>';
  });
  s += `<g style="animation:${show(css, P, 'ft', 36)}">` + text(c, 96, 440, t.foot, { size: 10, fill: C.fg70 }) + '</g>';
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bd', 39)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 43);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// days in stock of the forty vehicles
const DAYS = [2, 4, 5, 8, 9, 12, 14, 15, 18, 21, 23, 25, 27, 29, 32, 34, 37, 39, 41, 44, 47, 50, 53, 56, 59, 63, 66, 71, 75, 79, 84, 88, 94, 99, 106, 112, 121, 130, 138, 147];
const ZONES = [{ to: 30, value: 42400000 }, { to: 60, value: 33100000 }, { to: 90, value: 21300000 }, { to: 150, value: 24800000 }];
const AX = (d) => 150 + d * 6.2;

export function anciennete(t, rtl) {
  const c = ctx(rtl); const P = 'aj'; const css = []; const H = 686;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  let frame = rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + text(c, 96, 170, t.chartTitle, { size: 11, fill: C.fg, weight: 500 }) + poly(c, [[140, 398], [1090, 398]], C.line2);
  [0, 30, 60, 90, 120, 150].forEach((d) => { frame += num(c, AX(d), 414, String(d), { size: 9, fill: C.fg55 }); });
  frame += text(c, 96, 438, t.axis, { size: 8.5, fill: C.fg55 });
  s += `<g style="animation:${show(css, P, 'pa', 3)}">${frame}</g>`;
  // one square per vehicle, stacked by bins of ten days
  const stack = {};
  DAYS.forEach((d, i) => {
    const b = Math.floor(d / 10); const k = stack[b] || 0; stack[b] = k + 1;
    const old = d > 90; const mid = d > 60 && !old;
    s += `<g style="${pop(css, P, `q${i}`, 5 + i * 0.6)}">` + rect(c, AX(b * 10) + 18, 368 - k * 30, 26, 26, { stroke: old ? C.accent : mid ? C.accent : C.fg55, fill: old ? C.accent : mid ? SOFT : C.fg35 }) + '</g>';
  });
  // the three limits and what each zone holds
  s += `<g style="animation:${show(css, P, 'zl', 31)}">` + [30, 60, 90].map((d) => poly(c, [[AX(d), 184], [AX(d), 398]], C.fg55, 1, '3 4')).join('') + '</g>';
  let from = 0;
  ZONES.forEach((z, i) => {
    const n = DAYS.filter((d) => d > from && d <= z.to).length + (i === 0 ? DAYS.filter((d) => d === 0).length : 0);
    const mx = (AX(from) + AX(z.to)) / 2; const hot = i === 3;
    s += `<g style="animation:${show(css, P, `z${i}`, 33 + i * 2)}">` + text(c, mx, 196, t.zones[i].range, { size: 9, fill: C.fg55, anchor: 'middle' }) + text(c, mx, 212, t.zones[i].count.replace('{n}', String(n)), { size: 10.5, fill: hot ? C.accent : C.fg, weight: 500, anchor: 'middle' }) + num(c, mx, 228, grp(z.value, t.sep), { size: 10, bold: hot, fill: hot ? C.accent : C.fg70 }) + '</g>';
    from = z.to;
  });
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bd', 42)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 45);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    revient: {
      title: 'Deux véhicules, le même achat, le même prix affiché',
      alt: 'Deux véhicules achetés 2 900 000 dinars et affichés 3 250 000 dinars, soit 350 000 dinars d’écart. Le véhicule A, vendu en 20 jours : 140 000 de frais, 50 000 de remise, 160 000 de marge réelle, soit 5,0 % du prix de vente. Le véhicule B, vendu après 130 jours : 165 000 de frais, 150 000 de remise, 35 000 de marge réelle, soit 1,1 % du prix de vente.',
      header: 'Exemple construit · deux véhicules identiques, achetés et affichés au même prix',
      chartTitle: 'Du prix d’achat au prix affiché, en dinars', sep: ' ', dec: ',',
      legCosts: 'frais ajoutés', legMargin: 'marge réelle', legDiscount: 'remise accordée',
      buy: 'prix d’achat : {v}', listed: 'prix affiché : {v}',
      cars: ['Véhicule A', 'Véhicule B'], sold: ['vendu en 20 jours', 'vendu après 130 jours'],
      detail: ['transport 45 000 · préparation 60 000 · pièces 35 000', 'les mêmes 140 000, plus 25 000 de remise en état après quatre mois'],
      rev: 'prix de revient : {v}', sale: 'vendu : {v}', pctSub: 'du prix de vente',
      foot: 'Le même écart de 350 000 dinars entre l’achat et le prix affiché, réparti autrement.',
      band: 'Sans la fiche de frais, les deux véhicules semblent laisser la même marge ; avec elle, l’un a rapporté 160 000 dinars et l’autre 35 000.',
      tiles: [
        { big: '350 000 DA', l1: 'entre le prix d’achat et le prix affiché', l2: 'le même écart pour les deux véhicules' },
        { big: '160 000 DA', l1: 'marge réelle du véhicule A', l2: 'vendu en 20 jours, remise de 50 000' },
        { big: '35 000 DA', l1: 'marge réelle du véhicule B', l2: 'vendu après 130 jours, remise de 150 000', hot: true },
      ],
      line1: 'Prix de revient : le prix d’achat, plus chaque frais rattaché au numéro de châssis, du transport à la préparation.',
      line2: 'Le logiciel le calcule véhicule par véhicule, et montre la marge qui reste avant d’accepter une remise.',
      note: 'Exemple construit · prix, frais et remises fictifs.',
    },
    anciennete: {
      title: 'Quarante véhicules en stock, classés par ancienneté',
      alt: 'Quarante véhicules en stock, un carré par véhicule, rangés selon le nombre de jours depuis leur entrée. 14 ont 30 jours ou moins, pour 42 400 000 dinars ; 11 ont de 31 à 60 jours, pour 33 100 000 ; 7 ont de 61 à 90 jours, pour 21 300 000 ; 8 ont plus de 90 jours, pour 24 800 000 dinars, soit un cinquième d’un stock de 121 600 000 dinars.',
      header: 'Exemple construit · quarante véhicules, un carré par véhicule, valeur au prix de revient',
      chartTitle: 'Véhicules en stock, selon le nombre de jours depuis leur entrée · valeurs en dinars', axis: 'jours en stock', sep: ' ',
      zones: [
        { range: '0 à 30 jours', count: '{n} véhicules' },
        { range: '31 à 60 jours', count: '{n} véhicules' },
        { range: '61 à 90 jours', count: '{n} véhicules' },
        { range: 'plus de 90 jours', count: '{n} véhicules' },
      ],
      band: 'Chaque matin, la liste commence par les véhicules les plus anciens : ce sont eux qu’il faut montrer, déplacer ou revoir, avant ceux qui viennent d’arriver.',
      tiles: [
        { big: '40 véhicules', l1: '121 600 000 DA de stock, au prix de revient', l2: 'ancienneté moyenne : 54 jours' },
        { big: '15 véhicules', l1: 'en stock depuis plus de 60 jours', l2: '46 100 000 DA, soit 38 % du stock' },
        { big: '8 véhicules', l1: 'en stock depuis plus de 90 jours', l2: '24 800 000 DA, un cinquième du stock', hot: true },
      ],
      line1: 'Le compteur démarre à l’entrée en stock et s’arrête à la livraison : il ne dépend de la mémoire de personne.',
      line2: 'Au-delà du seuil que vous fixez, le véhicule remonte en tête de liste, avec son prix de revient et la remise encore possible.',
      note: 'Exemple construit · valeurs fictives ; les seuils de 30, 60 et 90 jours sont un choix de l’exemple.',
    },
  },
  en: {
    revient: {
      title: 'Two vehicles, the same purchase, the same listed price',
      alt: 'Two vehicles bought at 2,900,000 dinars and listed at 3,250,000 dinars, a gap of 350,000 dinars. Vehicle A, sold in 20 days: 140,000 of costs, 50,000 of discount, 160,000 of real margin, that is 5.0% of the selling price. Vehicle B, sold after 130 days: 165,000 of costs, 150,000 of discount, 35,000 of real margin, that is 1.1% of the selling price.',
      header: 'Constructed example · two identical vehicles, bought and listed at the same price',
      chartTitle: 'From purchase price to listed price, in dinars', sep: ',', dec: '.',
      legCosts: 'costs added', legMargin: 'real margin', legDiscount: 'discount given',
      buy: 'purchase price: {v}', listed: 'listed price: {v}',
      cars: ['Vehicle A', 'Vehicle B'], sold: ['sold in 20 days', 'sold after 130 days'],
      detail: ['transport 45,000 · preparation 60,000 · parts 35,000', 'the same 140,000, plus 25,000 of reconditioning after four months'],
      rev: 'cost price: {v}', sale: 'sold: {v}', pctSub: 'of the selling price',
      foot: 'The same gap of 350,000 dinars between purchase and listed price, split differently.',
      band: 'Without the cost sheet, both vehicles seem to leave the same margin; with it, one brought in 160,000 dinars and the other 35,000.',
      tiles: [
        { big: 'DA 350,000', l1: 'between purchase price and listed price', l2: 'the same gap for both vehicles' },
        { big: 'DA 160,000', l1: 'real margin of vehicle A', l2: 'sold in 20 days, discount of 50,000' },
        { big: 'DA 35,000', l1: 'real margin of vehicle B', l2: 'sold after 130 days, discount of 150,000', hot: true },
      ],
      line1: 'Cost price: the purchase price, plus every cost attached to the chassis number, from transport to preparation.',
      line2: 'The software calculates it vehicle by vehicle, and shows the margin that remains before a discount is accepted.',
      note: 'Constructed example · fictitious prices, costs and discounts.',
    },
    anciennete: {
      title: 'Forty vehicles in stock, sorted by age',
      alt: 'Forty vehicles in stock, one square per vehicle, arranged by the number of days since they came in. 14 are 30 days old or less, for 42,400,000 dinars; 11 are 31 to 60 days old, for 33,100,000; 7 are 61 to 90 days old, for 21,300,000; 8 are over 90 days old, for 24,800,000 dinars, a fifth of a stock of 121,600,000 dinars.',
      header: 'Constructed example · forty vehicles, one square per vehicle, valued at cost price',
      chartTitle: 'Vehicles in stock, by number of days since they came in · values in dinars', axis: 'days in stock', sep: ',',
      zones: [
        { range: '0 to 30 days', count: '{n} vehicles' },
        { range: '31 to 60 days', count: '{n} vehicles' },
        { range: '61 to 90 days', count: '{n} vehicles' },
        { range: 'over 90 days', count: '{n} vehicles' },
      ],
      band: 'Every morning the list starts with the oldest vehicles: they are the ones to show, move or review, before those that have just arrived.',
      tiles: [
        { big: '40 vehicles', l1: 'DA 121,600,000 of stock, at cost price', l2: 'average age: 54 days' },
        { big: '15 vehicles', l1: 'in stock for more than 60 days', l2: 'DA 46,100,000, that is 38% of the stock' },
        { big: '8 vehicles', l1: 'in stock for more than 90 days', l2: 'DA 24,800,000, a fifth of the stock', hot: true },
      ],
      line1: 'The counter starts when the vehicle comes into stock and stops at delivery: it depends on nobody’s memory.',
      line2: 'Beyond the threshold you set, the vehicle moves to the top of the list, with its cost price and the discount still possible.',
      note: 'Constructed example · fictitious values; the 30, 60 and 90-day thresholds are a choice of the example.',
    },
  },
  ar: {
    revient: {
      title: 'سيارتان، الشراء نفسه، والسعر المعروض نفسه',
      alt: 'سيارتان اشتُريتا بـ2900000 دينار وعُرضتا بـ3250000 دينار، أي بفارق 350000 دينار. السيارة أ، بيعت في 20 يوماً: 140000 مصاريف، 50000 تخفيض، و160000 هامش حقيقي، أي 5,0 بالمئة من سعر البيع. السيارة ب، بيعت بعد 130 يوماً: 165000 مصاريف، 150000 تخفيض، و35000 هامش حقيقي، أي 1,1 بالمئة من سعر البيع.',
      header: 'مثال مركَّب · سيارتان متطابقتان، اشتُريتا وعُرضتا بالسعر نفسه',
      chartTitle: 'من سعر الشراء إلى السعر المعروض، بالدينار', sep: ' ', dec: ',',
      legCosts: 'مصاريف مضافة', legMargin: 'الهامش الحقيقي', legDiscount: 'التخفيض الممنوح',
      buy: 'سعر الشراء: {v}', listed: 'السعر المعروض: {v}',
      cars: ['السيارة أ', 'السيارة ب'], sold: ['بيعت في 20 يوماً', 'بيعت بعد 130 يوماً'],
      detail: ['النقل ⁦45 000⁩ · التحضير ⁦60 000⁩ · القطع ⁦35 000⁩', 'المصاريف نفسها ⁦140 000⁩، زائد ⁦25 000⁩ لإعادة التهيئة بعد أربعة أشهر'],
      rev: 'سعر التكلفة: {v}', sale: 'بيعت بـ{v}', pctSub: 'من سعر البيع',
      foot: 'الفارق نفسه، ⁦350 000⁩ دينار بين الشراء والسعر المعروض، موزَّعاً بشكل آخر.',
      band: 'دون بطاقة المصاريف، تبدو السيارتان بالهامش نفسه؛ وبها، ربحت الأولى ⁦160 000⁩ دينار والثانية ⁦35 000⁩.',
      tiles: [
        { big: '⁦350 000⁩ دج', l1: 'بين سعر الشراء والسعر المعروض', l2: 'الفارق نفسه للسيارتين' },
        { big: '⁦160 000⁩ دج', l1: 'الهامش الحقيقي للسيارة أ', l2: 'بيعت في 20 يوماً، بتخفيض ⁦50 000⁩' },
        { big: '⁦35 000⁩ دج', l1: 'الهامش الحقيقي للسيارة ب', l2: 'بيعت بعد 130 يوماً، بتخفيض ⁦150 000⁩', hot: true },
      ],
      line1: 'سعر التكلفة: سعر الشراء، زائد كل مصروف مربوط برقم الهيكل، من النقل إلى التحضير.',
      line2: 'البرنامج يحسبه سيارة بسيارة، ويُظهر الهامش الباقي قبل قبول أي تخفيض.',
      note: 'مثال مركَّب · أسعار ومصاريف وتخفيضات خيالية.',
    },
    anciennete: {
      title: 'أربعون سيارة في المخزون، مرتّبة حسب الأقدمية',
      alt: 'أربعون سيارة في المخزون، مربّع لكل سيارة، مرتّبة حسب عدد الأيام منذ دخولها. 14 سيارة عمرها 30 يوماً أو أقل، بقيمة 42400000 دينار؛ 11 بين 31 و60 يوماً، بقيمة 33100000؛ 7 بين 61 و90 يوماً، بقيمة 21300000؛ و8 أكثر من 90 يوماً، بقيمة 24800000 دينار، أي خُمس مخزون قيمته 121600000 دينار.',
      header: 'مثال مركَّب · أربعون سيارة، مربّع لكل سيارة، والقيمة بسعر التكلفة',
      chartTitle: 'السيارات في المخزون، حسب عدد الأيام منذ دخولها · القيم بالدينار', axis: 'الأيام في المخزون', sep: ' ',
      zones: [
        { range: 'من 0 إلى 30 يوماً', count: '{n} سيارة' },
        { range: 'من 31 إلى 60 يوماً', count: '{n} سيارة' },
        { range: 'من 61 إلى 90 يوماً', count: '{n} سيارات' },
        { range: 'أكثر من 90 يوماً', count: '{n} سيارات' },
      ],
      band: 'كل صباح، تبدأ القائمة بأقدم السيارات: هي التي يجب عرضها، نقلها، أو مراجعتها، قبل التي وصلت للتو.',
      tiles: [
        { big: '40 سيارة', l1: '⁦121 600 000⁩ دج من المخزون، بسعر التكلفة', l2: 'متوسط الأقدمية: 54 يوماً' },
        { big: '15 سيارة', l1: 'في المخزون منذ أكثر من 60 يوماً', l2: '⁦46 100 000⁩ دج، أي ⁦38 %⁩ من المخزون' },
        { big: '8 سيارات', l1: 'في المخزون منذ أكثر من 90 يوماً', l2: '⁦24 800 000⁩ دج، خُمس المخزون', hot: true },
      ],
      line1: 'العدّاد ينطلق عند دخول المخزون ويتوقف عند التسليم: لا يتوقف على ذاكرة أحد.',
      line2: 'بعد العتبة التي تحدّدونها، تصعد السيارة إلى رأس القائمة، مع سعر تكلفتها والتخفيض الممكن بعد.',
      note: 'مثال مركَّب · قيم خيالية؛ وعتبات 30 و60 و90 يوماً اختيار من المثال.',
    },
  },
};
