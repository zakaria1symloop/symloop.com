// Bespoke animated figures for the 2027 "logiciel de gestion de restaurant" page.
//  plats():  twelve dishes placed by sales of the month (x) and margin per dish (y). The two
//            averages (475 sales, 472 dinars) cut the menu into four groups: 3 stars, 3
//            plowhorses, 4 puzzles and 2 dogs. The plowhorses make 44 % of sales and 28 % of the
//            margin; the best seller (910 sales) earns 340 a dish, the best margin (850) sells 150.
//  ecarts(): one week, six ingredients. For each, what the sales should have consumed according
//            to the recipe sheets against what really left the stock. The gap is worth 34 650
//            dinars for the week at purchase price; meat alone is 24 200 of it.
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
const dot = (c, x, y, r, fill, stroke, sw) => `<circle cx="${c.X(x)}" cy="${y}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${sw || 1}"/>`;
const grp = (n, sep) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, sep);

// twelve dishes: [sales of the month, margin per dish in dinars, index of the label or -1]
const DISHES = [[620, 840, 0], [910, 340, 1], [840, 370, -1], [560, 570, -1], [690, 500, -1], [300, 680, -1], [260, 540, -1], [210, 360, -1], [150, 850, 3], [190, 740, -1], [730, 190, 2], [240, 240, 4]];
const PX = (v) => 150 + v * 0.71;
const PY = (m) => 410 - m * 0.2444;

export function plats(t, rtl) {
  const c = ctx(rtl); const P = 'mn'; const css = []; const H = 686;
  const iso = (str) => (rtl ? `⁦${str}⁩` : str);
  const sold = DISHES.reduce((a, d) => a + d[0], 0);
  const margin = DISHES.reduce((a, d) => a + d[0] * d[1], 0);
  const avgPop = sold / DISHES.length; const avgMar = margin / sold;
  const group = (d) => (d[0] >= avgPop ? (d[1] >= avgMar ? 0 : 1) : (d[1] >= avgMar ? 2 : 3));
  const STYLE = [[C.accent, C.accent], [SOFT, C.accent], [C.fg35, C.fg55], [DARK, C.fg55]];
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  let frame = rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + text(c, 96, 170, t.chartTitle, { size: 11, fill: C.fg, weight: 500 }) + poly(c, [[PX(0), PY(0)], [PX(1000), PY(0)]], C.line2) + poly(c, [[PX(0), PY(0)], [PX(0), PY(900)]], C.line2);
  [0, 250, 500, 750, 1000].forEach((v) => { frame += num(c, PX(v), 426, grp(v, t.sep), { size: 9, fill: C.fg55 }); });
  [300, 600, 900].forEach((v) => { frame += num(c, 130, PY(v) + 3, String(v), { size: 9, fill: C.fg55 }); });
  frame += text(c, PX(1000), 442, t.axisX, { size: 8.5, fill: C.fg55, anchor: 'end' });
  s += `<g style="animation:${show(css, P, 'pa', 3)}">${frame}</g>`;
  // the two averages and the four groups
  s += `<g style="animation:${show(css, P, 'av', 5)}">` + poly(c, [[PX(avgPop), PY(0)], [PX(avgPop), PY(900)]], C.fg55, 1, '3 4') + poly(c, [[PX(0), PY(avgMar)], [PX(1000), PY(avgMar)]], C.fg55, 1, '3 4')
    + text(c, PX(1000) - 6, PY(900) + 10, t.groups[0], { size: 9, fill: C.fg55, anchor: 'end' }) + text(c, PX(1000) - 6, PY(0) - 8, t.groups[1], { size: 9, fill: C.fg55, anchor: 'end' })
    + text(c, PX(0) + 8, PY(900) + 10, t.groups[2], { size: 9, fill: C.fg55 }) + text(c, PX(0) + 8, PY(0) - 8, t.groups[3], { size: 9, fill: C.fg55 }) + '</g>';
  const count = [0, 0, 0, 0]; const share = [0, 0, 0, 0]; const sales = [0, 0, 0, 0];
  DISHES.forEach((d, i) => {
    const g = group(d); count[g] += 1; share[g] += d[0] * d[1]; sales[g] += d[0];
    const x = PX(d[0]); const y = PY(d[1]);
    s += `<g style="${pop(css, P, `d${i}`, 8 + i * 1.1)}">` + dot(c, x, y, 7, STYLE[g][0], STYLE[g][1], 1.5) + '</g>';
    if (d[2] >= 0) { const left = d[0] > 800; s += `<g style="animation:${show(css, P, `n${i}`, 9.5 + i * 1.1)}">` + text(c, left ? x + 8 : x + 12, left ? y + 21 : y + 4, t.names[d[2]], { size: 10, fill: g < 2 ? C.accent : C.fg, weight: 500, anchor: left ? 'end' : 'start' }) + '</g>'; }
  });
  // what each group weighs
  [0, 1, 2, 3].forEach((g) => {
    const y = 190 + g * 58; const pm = iso(`${Math.round(share[g] / margin * 100)} %`); const ps = iso(`${Math.round(sales[g] / sold * 100)} %`);
    s += `<g style="animation:${show(css, P, `g${g}`, 24 + g * 3)}">` + rect(c, 880, y, 224, 50, { stroke: g === 1 ? C.accent : C.line2, fill: g === 1 ? TINT : C.fill }) + dot(c, 896, y + 17, 5, STYLE[g][0], STYLE[g][1], 1.5) + text(c, 910, y + 21, t.cardTitle.replace('{g}', t.groups[g]).replace('{n}', String(count[g])), { size: 10, fill: g === 1 ? C.accent : C.fg, weight: 500 }) + text(c, 896, y + 39, t.cardSub.replace('{s}', ps).replace('{m}', pm), { size: 9, fill: C.fg70 }) + '</g>';
  });
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bd', 38)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 42);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// one week: [theoretical consumption, real consumption, purchase price per unit]
const ITEMS = [[86, 97, 2200], [64, 66, 450], [18, 22.5, 1400], [40, 47, 250], [210, 228, 80], [480, 481, 60]];
const EY = (i) => 214 + i * 34;

export function ecarts(t, rtl) {
  const c = ctx(rtl); const P = 'ec'; const css = []; const H = 686;
  const fmt = (v) => (Number.isInteger(v) ? grp(v, t.sep) : String(v).replace('.', t.dec));
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  let frame = rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + text(c, 96, 170, t.chartTitle, { size: 11, fill: C.fg, weight: 500 }) + poly(c, [[540, 202], [540, EY(6) - 4]], C.fg55, 1, '3 4') + text(c, 540, 196, t.ref, { size: 8.5, fill: C.fg55, anchor: 'middle' });
  [[700, t.cols[0]], [790, t.cols[1]], [880, t.cols[2]], [1020, t.cols[3]]].forEach(([x, label]) => { frame += text(c, x, 196, label, { size: 9, fill: C.fg55, anchor: 'middle' }); });
  s += `<g style="animation:${show(css, P, 'pa', 3)}">${frame}</g>`;
  let total = 0;
  ITEMS.forEach(([theo, real, price], i) => {
    const y = EY(i); const at = 6 + i * 4.5; const gap = real - theo; const value = Math.round(gap * price); total += value;
    const hot = value >= 5000; const ext = gap / theo * 300;
    s += `<g style="animation:${show(css, P, `l${i}`, at)}">` + text(c, 96, y + 14, t.items[i], { size: 10, fill: hot ? C.accent : C.fg, weight: hot ? 500 : 400 }) + '</g>';
    s += `<g style="${growX(css, P, `t${i}`, at + 0.4, 1.4, rtl)}">` + rect(c, 240, y, 300, 20, { stroke: C.fg55, fill: C.fg35 }) + '</g>';
    s += `<g style="${growX(css, P, `x${i}`, at + 1.8, 1.2, rtl)}">` + rect(c, 540, y, Math.max(ext, 1.5), 20, { stroke: C.accent, fill: hot ? C.accent : SOFT }) + '</g>';
    s += `<g style="animation:${show(css, P, `v${i}`, at + 3)}">` + num(c, 700, y + 14, fmt(theo), { size: 10.5, fill: C.fg70 }) + num(c, 790, y + 14, fmt(real), { size: 10.5, fill: C.fg }) + num(c, 880, y + 14, `+${fmt(gap)}`, { size: 10.5, bold: true, fill: hot ? C.accent : C.fg }) + num(c, 1020, y + 14, grp(value, t.sep), { size: 10.5, bold: hot, fill: hot ? C.accent : C.fg70 }) + '</g>';
  });
  s += `<g style="${pop(css, P, 'to', 34)}">` + poly(c, [[660, EY(6) - 2], [1096, EY(6) - 2]], C.line2) + text(c, 880, EY(6) + 16, t.total, { size: 10, fill: C.fg, weight: 500, anchor: 'end' }) + num(c, 1020, EY(6) + 16, grp(total, t.sep), { size: 13, bold: true, fill: C.accent }) + '</g>';
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bd', 38)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 42);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    plats: {
      title: 'Douze plats, deux moyennes, quatre groupes',
      alt: 'Douze plats placés selon leurs ventes du mois et leur marge par plat. Les deux moyennes, 475 ventes et 472 dinars, découpent la carte en quatre groupes : trois vedettes, trois chevaux de trait, quatre énigmes et deux poids morts. Les trois chevaux de trait font 44 % des ventes et 28 % de la marge. Le plat le plus vendu, le poulet rôti avec frites, fait 910 ventes pour 340 dinars de marge ; le poisson grillé rapporte 850 dinars par plat et se vend 150 fois.',
      header: 'Exemple construit · une carte de douze plats, les ventes d’un mois',
      chartTitle: 'Marge par plat, en dinars, selon les ventes du mois', axisX: 'ventes du mois', sep: ' ',
      groups: ['vedettes', 'chevaux de trait', 'énigmes', 'poids morts'],
      names: ['Grillade mixte', 'Poulet rôti, frites', 'Sandwich', 'Poisson grillé', 'Soupe'],
      cardTitle: '{g} · {n} plats', cardSub: '{s} des ventes, {m} de la marge',
      band: 'Le plat qui remplit la salle n’est pas celui qui paie le loyer : les trois chevaux de trait font 44 % des ventes et 28 % de la marge.',
      tiles: [
        { big: '12 plats, 5 700 ventes', l1: 'marge moyenne par plat vendu : 472 DA', l2: 'les deux moyennes servent de frontières' },
        { big: 'Poulet rôti, frites', l1: 'le plat le plus vendu : 910 ventes', l2: '340 DA de marge, sous la moyenne', hot: true },
        { big: 'Poisson grillé', l1: 'la plus forte marge : 850 DA par plat', l2: '150 ventes dans le mois' },
      ],
      line1: 'Chaque plat a sa fiche technique : ses ingrédients, leurs quantités, leur coût. La marge se calcule à chaque vente.',
      line2: 'Un cheval de trait se retravaille, portion ou prix ; une énigme se met en avant ; un poids mort se retire de la carte.',
      note: 'Exemple construit · carte, ventes et marges fictives.',
    },
    ecarts: {
      title: 'Ce que les ventes auraient dû consommer, et ce qui est sorti du stock',
      alt: 'Une semaine, six ingrédients. Viande : 86 kg d’après les fiches techniques, 97 kg sortis du stock, soit 11 kg d’écart et 24 200 dinars. Poulet : 64 contre 66 kg. Fromage : 18 contre 22,5 kg, soit 6 300 dinars. Huile : 40 contre 47 litres. Pommes de terre : 210 contre 228 kg. Boissons : 480 contre 481 bouteilles. L’écart de la semaine vaut 34 650 dinars au prix d’achat.',
      header: 'Exemple construit · une semaine, six ingrédients, prix d’achat fictifs',
      chartTitle: 'La barre grise est la consommation théorique ; ce qui dépasse est l’écart', sep: ' ', dec: ',',
      ref: 'théorique', cols: ['théorique', 'réel', 'écart', 'valeur, en dinars'],
      items: ['Viande (kg)', 'Poulet (kg)', 'Fromage (kg)', 'Huile (litres)', 'Pommes de terre (kg)', 'Boissons (bouteilles)'],
      total: 'écart de la semaine',
      band: 'L’écart n’est pas partout : il est sur la viande et le fromage. C’est là que l’on pèse les portions, pas sur les boissons.',
      tiles: [
        { big: '34 650 DA', l1: 'd’écart sur la semaine, au prix d’achat', l2: 'soit environ 150 000 DA par mois' },
        { big: 'Viande : +11 kg', l1: '97 kg sortis du stock pour 86 kg vendus', l2: '24 200 DA, soit 70 % de l’écart', hot: true },
        { big: 'Boissons : +1', l1: '481 bouteilles sorties pour 480 vendues', l2: 'ce qui se compte à l’unité ne dérive pas' },
      ],
      line1: 'Consommation théorique : ce que les ventes auraient dû consommer, d’après les fiches techniques des plats vendus.',
      line2: 'Consommation réelle : le stock de départ, plus les achats, moins le stock compté. La différence est l’écart.',
      note: 'Exemple construit · quantités et prix d’achat fictifs.',
    },
  },
  en: {
    plats: {
      title: 'Twelve dishes, two averages, four groups',
      alt: 'Twelve dishes placed by their sales of the month and their margin per dish. The two averages, 475 sales and 472 dinars, cut the menu into four groups: three stars, three plowhorses, four puzzles and two dogs. The three plowhorses make 44% of sales and 28% of the margin. The best seller, roast chicken with fries, makes 910 sales for 340 dinars of margin; grilled fish earns 850 dinars a dish and sells 150 times.',
      header: 'Constructed example · a menu of twelve dishes, one month of sales',
      chartTitle: 'Margin per dish, in dinars, against sales of the month', axisX: 'sales of the month', sep: ',',
      groups: ['stars', 'plowhorses', 'puzzles', 'dogs'],
      names: ['Mixed grill', 'Roast chicken, fries', 'Sandwich', 'Grilled fish', 'Soup'],
      cardTitle: '{g} · {n} dishes', cardSub: '{s} of sales, {m} of the margin',
      band: 'The dish that fills the room is not the one that pays the rent: the three plowhorses make 44% of sales and 28% of the margin.',
      tiles: [
        { big: '12 dishes, 5,700 sales', l1: 'average margin per dish sold: DA 472', l2: 'the two averages serve as boundaries' },
        { big: 'Roast chicken, fries', l1: 'the best seller: 910 sales', l2: 'DA 340 of margin, below the average', hot: true },
        { big: 'Grilled fish', l1: 'the highest margin: DA 850 a dish', l2: '150 sales in the month' },
      ],
      line1: 'Each dish has its recipe sheet: its ingredients, their quantities, their cost. The margin is calculated at every sale.',
      line2: 'A plowhorse is reworked, portion or price; a puzzle is promoted; a dog comes off the menu.',
      note: 'Constructed example · fictitious menu, sales and margins.',
    },
    ecarts: {
      title: 'What sales should have consumed, and what left the stock',
      alt: 'One week, six ingredients. Meat: 86 kg according to the recipe sheets, 97 kg out of stock, a gap of 11 kg and 24,200 dinars. Chicken: 64 against 66 kg. Cheese: 18 against 22.5 kg, that is 6,300 dinars. Oil: 40 against 47 litres. Potatoes: 210 against 228 kg. Drinks: 480 against 481 bottles. The week’s gap is worth 34,650 dinars at purchase price.',
      header: 'Constructed example · one week, six ingredients, fictitious purchase prices',
      chartTitle: 'The grey bar is theoretical consumption; what sticks out is the gap', sep: ',', dec: '.',
      ref: 'theoretical', cols: ['theoretical', 'real', 'gap', 'value, in dinars'],
      items: ['Meat (kg)', 'Chicken (kg)', 'Cheese (kg)', 'Oil (litres)', 'Potatoes (kg)', 'Drinks (bottles)'],
      total: 'gap for the week',
      band: 'The gap is not everywhere: it is on meat and cheese. That is where portions get weighed, not on drinks.',
      tiles: [
        { big: 'DA 34,650', l1: 'of gap over the week, at purchase price', l2: 'that is about DA 150,000 a month' },
        { big: 'Meat: +11 kg', l1: '97 kg out of stock for 86 kg sold', l2: 'DA 24,200, that is 70% of the gap', hot: true },
        { big: 'Drinks: +1', l1: '481 bottles out for 480 sold', l2: 'what is counted by the unit does not drift' },
      ],
      line1: 'Theoretical consumption: what sales should have consumed, according to the recipe sheets of the dishes sold.',
      line2: 'Real consumption: opening stock, plus purchases, minus the stock counted. The difference is the gap.',
      note: 'Constructed example · fictitious quantities and purchase prices.',
    },
  },
  ar: {
    plats: {
      title: 'اثنا عشر طبقاً، متوسطان، وأربع مجموعات',
      alt: 'اثنا عشر طبقاً موضوعة حسب مبيعاتها في الشهر وهامشها لكل طبق. المتوسطان، 475 مبيعاً و472 ديناراً، يقسمان القائمة إلى أربع مجموعات: ثلاثة نجوم، ثلاثة أطباق رائجة بهامش ضعيف، أربعة بهامش جيد وطلب ضعيف، وطبقان خاملان. الأطباق الثلاثة الرائجة تمثّل 44 بالمئة من المبيعات و28 بالمئة من الهامش. والطبق الأكثر مبيعاً، الدجاج المشوي مع البطاطا، يحقق 910 مبيعات بهامش 340 ديناراً؛ والسمك المشوي يربح 850 ديناراً للطبق ويُباع 150 مرة.',
      header: 'مثال مركَّب · قائمة من اثني عشر طبقاً، ومبيعات شهر',
      chartTitle: 'الهامش لكل طبق، بالدينار، حسب مبيعات الشهر', axisX: 'مبيعات الشهر', sep: ' ',
      groups: ['نجوم', 'رائجة بهامش ضعيف', 'هامش جيد وطلب ضعيف', 'خاملة'],
      names: ['مشاوي مشكّلة', 'دجاج مشوي وبطاطا', 'ساندويتش', 'سمك مشوي', 'شوربة'],
      cardTitle: '{g} · {n} أطباق', cardSub: '{s} من المبيعات، و{m} من الهامش',
      band: 'الطبق الذي يملأ القاعة ليس الذي يدفع الإيجار: الأطباق الثلاثة الرائجة تمثّل ⁦44 %⁩ من المبيعات و⁦28 %⁩ من الهامش.',
      tiles: [
        { big: '12 طبقاً، ⁦5 700⁩ مبيع', l1: 'متوسط الهامش لكل طبق مباع: 472 دج', l2: 'المتوسطان يُستعملان كحدود' },
        { big: 'دجاج مشوي وبطاطا', l1: 'الطبق الأكثر مبيعاً: 910 مبيعات', l2: '340 دج هامشاً، تحت المتوسط', hot: true },
        { big: 'سمك مشوي', l1: 'أعلى هامش: 850 دج للطبق', l2: '150 مبيعاً في الشهر' },
      ],
      line1: 'لكل طبق بطاقته التقنية: مكوّناته، كمياتها، وكلفتها. والهامش يُحسب عند كل بيع.',
      line2: 'الطبق الرائج بهامش ضعيف يُراجَع، حصة أو سعراً؛ وذو الهامش الجيد يُبرَز؛ والخامل يُسحب من القائمة.',
      note: 'مثال مركَّب · قائمة ومبيعات وهوامش خيالية.',
    },
    ecarts: {
      title: 'ما كان يجب أن تستهلكه المبيعات، وما خرج من المخزون',
      alt: 'أسبوع واحد، ستة مكوّنات. اللحم: 86 كلغ حسب البطاقات التقنية، و97 كلغ خرجت من المخزون، أي فارق 11 كلغ و24200 دينار. الدجاج: 64 مقابل 66 كلغ. الجبن: 18 مقابل 22,5 كلغ، أي 6300 دينار. الزيت: 40 مقابل 47 لتراً. البطاطا: 210 مقابل 228 كلغ. المشروبات: 480 مقابل 481 قارورة. وفارق الأسبوع يساوي 34650 ديناراً بسعر الشراء.',
      header: 'مثال مركَّب · أسبوع واحد، ستة مكوّنات، وأسعار شراء خيالية',
      chartTitle: 'الشريط الرمادي هو الاستهلاك النظري؛ وما يتجاوزه هو الفارق', sep: ' ', dec: ',',
      ref: 'النظري', cols: ['النظري', 'الفعلي', 'الفارق', 'القيمة، بالدينار'],
      items: ['اللحم (كلغ)', 'الدجاج (كلغ)', 'الجبن (كلغ)', 'الزيت (لتر)', 'البطاطا (كلغ)', 'المشروبات (قارورة)'],
      total: 'فارق الأسبوع',
      band: 'الفارق ليس في كل مكان: هو في اللحم والجبن. هناك تُوزن الحصص، لا في المشروبات.',
      tiles: [
        { big: '⁦34 650⁩ دج', l1: 'فارق في الأسبوع، بسعر الشراء', l2: 'أي نحو ⁦150 000⁩ دج في الشهر' },
        { big: 'اللحم: ⁦+11⁩ كلغ', l1: '97 كلغ خرجت من المخزون مقابل 86 كلغ مباعة', l2: '⁦24 200⁩ دج، أي ⁦70 %⁩ من الفارق', hot: true },
        { big: 'المشروبات: ⁦+1⁩', l1: '481 قارورة خرجت مقابل 480 مباعة', l2: 'ما يُعدّ بالوحدة لا ينحرف' },
      ],
      line1: 'الاستهلاك النظري: ما كان يجب أن تستهلكه المبيعات، حسب البطاقات التقنية للأطباق المباعة.',
      line2: 'الاستهلاك الفعلي: مخزون البداية، زائد المشتريات، ناقص المخزون المعدود. والفرق هو الفارق.',
      note: 'مثال مركَّب · كميات وأسعار شراء خيالية.',
    },
  },
};
