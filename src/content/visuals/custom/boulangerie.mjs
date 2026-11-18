// Bespoke animated figures for the 2027 "logiciel boulangerie pâtisserie" post.
//  stock(): the stock of two products through one day. Croissants baked in
//           three batches end the day with unsold pieces; millefeuilles baked
//           once run out before closing. Each stock line draws itself from
//           opening to closing, batch marks and end labels appear as it
//           passes; a band gives the day's figures; three tiles.
//  fiche(): a recipe sheet that adds itself up. Six ingredient rows appear
//           one after another, the total and the cost per piece follow; two
//           bars split the selling price into cost and margin, today and when
//           butter goes up by a quarter; a band gives the production rule;
//           three tiles.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function growX(css, P, id, at, dur, rtl) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'} center;animation:${P}-${id} ${LOOP}s linear infinite`; }
function drawLine(css, P, id, at, dur, len) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{stroke-dashoffset:${len}}${(at + dur).toFixed(1)}%,100%{stroke-dashoffset:0}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
const I = (x) => `⁦${x}⁩`;
const TINT = 'rgba(242,181,68,0.06)';
const DARK = '#0b0b0b';

function tiles(c, css, P, ky, ts, at0) {
  let s = '';
  ts.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, at0 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? TINT : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  return s;
}
const motionOff = (P) => `@media (prefers-reduced-motion: reduce){svg [style*="${P}-"]{animation:none !important}}`;

// stock at each hour from 7 h to 20 h; a pair [before, after] marks a batch
const CROISSANT = [60, 46, [30, 70], 58, 50, 44, 37, [31, 51], 47, 42, 34, 28, 25, 24];
const MILLE = [40, 40, 40, 37, 33, 27, 20, 14, 9, 4, 0, 0, 0, 0];

function chart(c, css, P, n, x0, data, u, t, at0) {
  const yb = 350, w = 460, hx = w / 13; let s = '';
  const pts = []; const marks = [];
  data.forEach((v, i) => { const x = x0 + i * hx; if (Array.isArray(v)) { pts.push([x, yb - v[0] * u], [x, yb - v[1] * u]); marks.push([x, yb - v[1] * u, i]); } else pts.push([x, yb - v * u]); });
  let len = 0; const cum = [0]; for (let i = 1; i < pts.length; i++) { len += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); cum.push(len); }
  const L = Math.ceil(len); const DUR = 22;
  s += `<g style="animation:${show(css, P, `t${n}`, at0 - 2)}">` + text(c, x0 - 20, 156, t.name, { size: 11.5, fill: C.fg, weight: 500 }) + text(c, x0 - 20, 172, t.sub, { size: 8.5, font: 'mono', fill: C.fg55 })
    + line(c, x0 - 20, yb, x0 + w + 10, yb, { stroke: C.line2 }) + [0, 3, 6, 9, 13].map((h, i) => text(c, x0 + h * hx, yb + 16, t.hours[i], { size: 8.5, font: 'mono', fill: C.fg55, anchor: 'middle' })).join('') + '</g>';
  s += `<polyline points="${pts.map(([x, y]) => `${c.X(x).toFixed(1)},${y.toFixed(1)}`).join(' ')}" fill="none" stroke="${C.fg}" stroke-width="2" stroke-dasharray="${L}" style="animation:${drawLine(css, P, `l${n}`, at0, DUR, L)}"/>`;
  s += `<g style="animation:${show(css, P, `s${n}`, at0)}">` + circle(c, pts[0][0], pts[0][1], 4, { fill: C.fg }) + text(c, pts[0][0] + 8, pts[0][1] - 8, t.start, { size: 8.5, font: 'mono', fill: C.fg70 }) + '</g>';
  marks.forEach(([x, y, i], k) => { const at = at0 + (cum[pts.findIndex((p) => p[0] === x && p[1] === y)] / len) * DUR; s += `<g style="animation:${show(css, P, `m${n}${k}`, at)}">` + circle(c, x, y, 4, { fill: C.fg }) + text(c, x + 8, y - 6, t.batches[k], { size: 8.5, font: 'mono', fill: C.fg70 }) + '</g>'; });
  return { s, pts, cum, len, at0, DUR, yb, hx };
}

export function stock(t, rtl) {
  const c = ctx(rtl); const P = 'bk'; const css = []; const H = 604;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const a = chart(c, css, P, 0, 100, CROISSANT, 2.2, t.a, 6); s += a.s;
  const endA = a.pts[a.pts.length - 1];
  s += `<g style="animation:${show(css, P, 'ea', a.at0 + a.DUR + 1)}">` + circle(c, endA[0], endA[1], 6, { fill: C.accent }) + line(c, endA[0], endA[1], endA[0], a.yb, { stroke: C.accent, dash: '3 3' }) + text(c, endA[0] - 10, endA[1] - 10, t.a.end, { size: 10, font: 'mono', fill: C.accent, weight: 500, anchor: 'end' }) + '</g>';
  const b = chart(c, css, P, 1, 650, MILLE, 3.6, t.b, 34); s += b.s;
  const zx = 650 + 10 * b.hx; const zEnd = 650 + 13 * b.hx;
  s += `<g style="animation:${show(css, P, 'eb', b.at0 + b.DUR + 1)}">` + line(c, zx, b.yb, zEnd, b.yb, { stroke: C.accent, sw: 4 }) + circle(c, zx, b.yb, 6, { fill: C.accent }) + text(c, zx + 4, b.yb - 30, t.b.end, { size: 10, font: 'mono', fill: C.accent, weight: 500 }) + text(c, zx + 4, b.yb - 14, t.b.end2, { size: 8.5, font: 'mono', fill: C.accent }) + '</g>';
  const by = 384;
  s += `<g style="animation:${show(css, P, 'bd', 62)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: DARK }) + text(c, 96, by + 26, t.band[0], { size: 10.5, fill: C.fg }) + text(c, 1104, by + 26, t.band[1], { size: 10.5, fill: C.accent, anchor: 'end' }) + '</g>';
  const ky = 444;
  s += tiles(c, css, P, ky, t.tiles, 68);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// selling price 65; material cost 40 today, 47.5 if butter goes up by a quarter
const PRICE = 65;

export function fiche(t, rtl) {
  const c = ctx(rtl); const P = 'bf'; const css = []; const H = 608;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  // the recipe sheet
  const tx = 80, tw = 560;
  s += `<g style="animation:${show(css, P, 'tb', 4)}">` + rect(c, tx, 142, tw, 228, { stroke: C.line2, fill: DARK }) + text(c, tx + 14, 164, t.sheet, { size: 11.5, fill: C.fg, weight: 500 })
    + text(c, tx + 14, 184, t.cols[0], { size: 8.5, font: 'mono', fill: C.fg55 }) + text(c, tx + 330, 184, t.cols[1], { size: 8.5, font: 'mono', fill: C.fg55, anchor: 'end' }) + text(c, tx + tw - 14, 184, t.cols[2], { size: 8.5, font: 'mono', fill: C.fg55, anchor: 'end' })
    + line(c, tx + 14, 192, tx + tw - 14, 192, { stroke: C.line2 }) + '</g>';
  t.rows.forEach((r, i) => {
    const y = 210 + i * 22; const hot = i === 1;
    s += `<g style="animation:${show(css, P, `r${i}`, 7 + i * 3)}">` + text(c, tx + 14, y, r[0], { size: 10, fill: hot ? C.accent : C.fg }) + text(c, tx + 330, y, r[1], { size: 9.5, font: 'mono', fill: C.fg70, anchor: 'end' }) + text(c, tx + tw - 14, y, r[2], { size: 10, font: 'mono', fill: hot ? C.accent : C.fg, weight: hot ? 500 : 400, anchor: 'end' }) + '</g>';
  });
  s += `<g style="animation:${show(css, P, 'tt', 27)}">` + line(c, tx + 14, 336, tx + tw - 14, 336, { stroke: C.line2 }) + text(c, tx + 14, 356, t.total[0], { size: 10.5, fill: C.fg, weight: 500 }) + text(c, tx + tw - 14, 356, t.total[1], { size: 11.5, font: 'mono', fill: C.fg, weight: 500, anchor: 'end' }) + '</g>';
  // price split into cost and margin, today and with dearer butter
  const px = 680, pw = 440, bw = 400; const u = bw / PRICE;
  [[146, 40, 0], [262, 47.5, 1]].forEach(([y, cost, i]) => {
    const hot = i === 1; const at = 32 + i * 12; const p = t.panels[i];
    s += `<g style="animation:${show(css, P, `p${i}`, at)}">` + rect(c, px, y, pw, 108, { stroke: hot ? C.accent : C.line2, fill: hot ? TINT : DARK }) + text(c, px + 14, y + 22, p.title, { size: 11, fill: hot ? C.accent : C.fg, weight: 500 }) + text(c, px + pw - 14, y + 22, p.right, { size: 9, font: 'mono', fill: hot ? C.accent : C.fg55, anchor: 'end' }) + '</g>';
    s += `<g style="${growX(css, P, `c${i}`, at + 1, 3, rtl)}">` + rect(c, px + 20, y + 40, cost * u - 2, 24, { stroke: C.fg55, fill: C.fill }) + '</g>';
    s += `<g style="${growX(css, P, `g${i}`, at + 4.5, 2.5, rtl)}">` + rect(c, px + 20 + cost * u, y + 40, (PRICE - cost) * u, 24, { stroke: C.accent, fill: hot ? TINT : 'rgba(242,181,68,0.14)' }) + '</g>';
    s += `<g style="animation:${show(css, P, `v${i}`, at + 7.5)}">` + text(c, px + 20, y + 84, p.cost, { size: 9.5, font: 'mono', fill: C.fg70 }) + text(c, px + 20 + bw, y + 84, p.margin, { size: 10, font: 'mono', fill: C.accent, weight: 500, anchor: 'end' }) + text(c, px + 20, y + 98, p.note, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>';
  });
  const by = 386;
  s += `<g style="animation:${show(css, P, 'bd', 58)}">` + rect(c, 80, by, 1040, 46, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 20, t.rule[0], { size: 10.5, fill: C.fg, weight: 500 }) + text(c, 96, by + 36, t.rule[1], { size: 9.5, fill: C.fg70 }) + '</g>';
  const ky = 448;
  s += tiles(c, css, P, ky, t.tiles, 64);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    stock: {
      title: 'Une journée, deux produits : 24 croissants de trop, et plus de millefeuille à 17 h',
      alt: 'Le stock de deux produits au fil d’une journée, de 7 h à 20 h. Croissants : 60 à l’ouverture, une fournée de 40 à 9 h, une de 20 à 14 h, soit 120 produits ; 96 vendus, 24 invendus à la fermeture. Millefeuilles : 40 produits en une fois le matin, tous vendus, plus rien avant 17 h, et 12 demandes refusées jusqu’à la fermeture.',
      header: 'Exemple construit · une journée de boutique, de 7 h à 20 h · quantités inventées pour montrer les deux erreurs',
      a: { name: 'Croissants · 120 produits, en trois fournées', sub: 'stock en boutique, heure par heure', hours: ['7 h', '10 h', '13 h', '16 h', '20 h'], start: '60 à l’ouverture', batches: ['+ 40 à 9 h', '+ 20 à 14 h'], end: '24 invendus' },
      b: { name: 'Millefeuilles · 40 produits, en une fois', sub: 'stock en boutique, heure par heure', hours: ['7 h', '10 h', '13 h', '16 h', '20 h'], start: '40 le matin', batches: [], end: 'plus rien avant 17 h', end2: '12 demandes refusées' },
      band: ['Croissants : 120 produits, 96 vendus, 24 invendus, un sur cinq', 'Millefeuilles : 40 produits, 40 vendus, 12 demandes refusées'],
      tiles: [
        { big: '24 invendus', l1: 'un croissant sur cinq, chaque soir', l2: 'la troisième fournée était de trop' },
        { big: 'plus rien à 17 h', l1: 'trois heures de vente sans millefeuille', l2: '12 demandes notées, aucune servie', hot: true },
        { big: '2 chiffres par produit', l1: 'les invendus du soir, l’heure de la rupture', l2: 'notés à la fermeture, en une minute' },
      ],
      line1: 'Les deux erreurs coûtent, mais pas de la même façon : l’invendu se voit dans le bac, la rupture ne se voit nulle part.',
      line2: 'Le logiciel note les deux chaque soir, produit par produit, et propose la quantité du lendemain.',
      note: 'Exemple construit · quantités, fournées et demandes inventées ; remplacez-les par une semaine de vos propres relevés.',
    },
    fiche: {
      title: 'La fiche d’une recette : 40 DA de matière par croissant, et le beurre qui monte',
      alt: 'Fiche technique d’une fournée de 60 croissants : farine 3 kg, 270 DA ; beurre 1,5 kg, 1 800 DA ; sucre 300 g, 36 DA ; œufs, 80 DA ; lait 0,6 litre, 66 DA ; levure, sel et emballage, 148 DA ; total 2 400 DA, soit 40 DA la pièce. Vendu 65 DA, le croissant laisse 25 DA de marge sur la matière. Si le beurre augmente de 25 %, le coût passe à 47,50 DA et la marge à 17,50 DA, soit 30 % de moins.',
      header: 'Exemple construit · une fournée de 60 croissants · prix des ingrédients inventés, pas des prix de marché',
      sheet: 'Fiche technique · 60 croissants', cols: ['ingrédient', 'quantité', 'coût'],
      rows: [['Farine', '3 kg', '270 DA'], ['Beurre', '1,5 kg', '1 800 DA'], ['Sucre', '300 g', '36 DA'], ['Œufs', '4', '80 DA'], ['Lait', '0,6 l', '66 DA'], ['Levure, sel, emballage', '', '148 DA']],
      total: ['Total de la fournée · 2 400 DA', '40 DA la pièce'],
      panels: [
        { title: 'Aujourd’hui', right: 'vendu 65 DA', cost: 'matière 40 DA', margin: 'marge 25 DA', note: 'sur la matière, avant le travail et les charges' },
        { title: 'Si le beurre prend 25 %', right: 'vendu 65 DA', cost: 'matière 47,50 DA', margin: 'marge 17,50 DA', note: '30 % de marge en moins, sans rien changer' },
      ],
      rule: ['Combien en produire ? Repère : (prix − coût) ÷ prix = (65 − 40) ÷ 65 = 38 %.', 'On vise la quantité que la demande ne dépasse que 38 jours sur 100 : être en rupture certains soirs est alors normal.'],
      tiles: [
        { big: '2 400 ÷ 60 = 40 DA', l1: 'le coût matière d’un croissant', l2: 'la fiche le recalcule à chaque achat' },
        { big: '25 → 17,50 DA', l1: 'la marge, si le beurre prend 25 %', l2: '30 % de moins, et rien ne se voit en boutique', hot: true },
        { big: '(65 − 40) ÷ 65 = 38 %', l1: 'le repère de quantité d’un produit du jour', l2: 'plus l’invendu coûte, plus on accepte la rupture' },
      ],
      line1: 'Une recette écrite avec ses quantités donne un coût ; une recette dans la tête du chef donne une impression.',
      line2: 'Quand le prix du beurre change, la fiche le dit le jour de l’achat ; sans elle, on le découvre à la fin du mois.',
      note: 'Exemple construit · quantités et prix inventés ; le repère de quantité vient du modèle dit du vendeur de journaux.',
    },
  },
  en: {
    stock: {
      title: 'One day, two products: 24 croissants too many, no millefeuille left by 5 p.m.',
      alt: 'The stock of two products through one day, from 7 a.m. to 8 p.m. Croissants: 60 at opening, a batch of 40 at 9 a.m., one of 20 at 2 p.m., that is 120 made; 96 sold, 24 unsold at closing. Millefeuilles: 40 made in one go in the morning, all sold, none left before 5 p.m., and 12 requests refused until closing.',
      header: 'Constructed example · one shop day, from 7 a.m. to 8 p.m. · quantities invented to show the two mistakes',
      a: { name: 'Croissants · 120 made, in three batches', sub: 'stock in the shop, hour by hour', hours: ['7', '10', '13', '16', '20'], start: '60 at opening', batches: ['+ 40 at 9', '+ 20 at 14'], end: '24 unsold' },
      b: { name: 'Millefeuilles · 40 made, in one go', sub: 'stock in the shop, hour by hour', hours: ['7', '10', '13', '16', '20'], start: '40 in the morning', batches: [], end: 'none left before 5 p.m.', end2: '12 requests refused' },
      band: ['Croissants: 120 made, 96 sold, 24 unsold, one in five', 'Millefeuilles: 40 made, 40 sold, 12 requests refused'],
      tiles: [
        { big: '24 unsold', l1: 'one croissant in five, every evening', l2: 'the third batch was one too many' },
        { big: 'none left at 5 p.m.', l1: 'three hours of trading without millefeuille', l2: '12 requests noted, none served', hot: true },
        { big: '2 figures per product', l1: 'the evening’s unsold, the time it ran out', l2: 'noted at closing, in one minute' },
      ],
      line1: 'Both mistakes cost money, but not in the same way: the unsold shows in the bin, the shortage shows nowhere.',
      line2: 'The software notes both every evening, product by product, and proposes the next day’s quantity.',
      note: 'Constructed example · invented quantities, batches and requests; replace them with a week of your own records.',
    },
    fiche: {
      title: 'A recipe sheet: 40 DZD of ingredients per croissant, and butter going up',
      alt: 'Recipe sheet for a batch of 60 croissants: flour 3 kg, 270 DZD; butter 1.5 kg, 1,800 DZD; sugar 300 g, 36 DZD; eggs, 80 DZD; milk 0.6 litre, 66 DZD; yeast, salt and packaging, 148 DZD; total 2,400 DZD, that is 40 DZD a piece. Sold at 65 DZD, the croissant leaves 25 DZD of margin over ingredients. If butter goes up by 25 %, the cost becomes 47.50 DZD and the margin 17.50 DZD, that is 30 % less.',
      header: 'Constructed example · a batch of 60 croissants · invented ingredient prices, not market prices',
      sheet: 'Recipe sheet · 60 croissants', cols: ['ingredient', 'quantity', 'cost'],
      rows: [['Flour', '3 kg', '270 DZD'], ['Butter', '1.5 kg', '1,800 DZD'], ['Sugar', '300 g', '36 DZD'], ['Eggs', '4', '80 DZD'], ['Milk', '0.6 l', '66 DZD'], ['Yeast, salt, packaging', '', '148 DZD']],
      total: ['Batch total · 2,400 DZD', '40 DZD a piece'],
      panels: [
        { title: 'Today', right: 'sold at 65 DZD', cost: 'ingredients 40 DZD', margin: 'margin 25 DZD', note: 'over ingredients, before labour and overheads' },
        { title: 'If butter goes up 25 %', right: 'sold at 65 DZD', cost: 'ingredients 47.50 DZD', margin: 'margin 17.50 DZD', note: '30 % less margin, with nothing changed' },
      ],
      rule: ['How many to make? A marker: (price − cost) ÷ price = (65 − 40) ÷ 65 = 38 %.', 'Aim for the quantity that demand exceeds only 38 days in 100: running out on some evenings is then normal.'],
      tiles: [
        { big: '2,400 ÷ 60 = 40 DZD', l1: 'the ingredient cost of one croissant', l2: 'the sheet recalculates it at every purchase' },
        { big: '25 → 17.50 DZD', l1: 'the margin, if butter goes up 25 %', l2: '30 % less, and nothing shows in the shop', hot: true },
        { big: '(65 − 40) ÷ 65 = 38 %', l1: 'the quantity marker for a same-day product', l2: 'the more the unsold costs, the more you accept running out' },
      ],
      line1: 'A recipe written down with its quantities gives a cost; a recipe in the chef’s head gives an impression.',
      line2: 'When the price of butter changes, the sheet says so on the day of purchase; without it, you find out at the end of the month.',
      note: 'Constructed example · invented quantities and prices; the quantity marker comes from the so-called newsvendor model.',
    },
  },
  ar: {
    stock: {
      title: 'يوم واحد، منتَجان: أربعة وعشرون كرواسان زائدة، ولا ميلفاي بعد الخامسة',
      alt: 'مخزون منتَجين خلال يوم، من السابعة صباحاً إلى الثامنة مساءً. الكرواسان: 60 عند الفتح، خبزة من 40 على التاسعة، وأخرى من 20 على الثانية، أي 120 منتَجة؛ 96 مباعة، و24 غير مباعة عند الإغلاق. الميلفاي: 40 منتَجة دفعة واحدة صباحاً، بيعت كلها، ولا شيء قبل الخامسة، و12 طلباً مرفوضاً حتى الإغلاق.',
      header: 'مثال مركَّب · يوم في المحل، من السابعة إلى الثامنة مساءً · كميات مخترَعة لبيان الخطأين',
      a: { name: 'الكرواسان · 120 منتَجة، في ثلاث خبزات', sub: 'المخزون في المحل، ساعة بساعة', hours: ['7', '10', '13', '16', '20'], start: '60 عند الفتح', batches: [`${I('+ 40')} على 9`, `${I('+ 20')} على 14`], end: '24 غير مباعة' },
      b: { name: 'الميلفاي · 40 منتَجة، دفعة واحدة', sub: 'المخزون في المحل، ساعة بساعة', hours: ['7', '10', '13', '16', '20'], start: '40 في الصباح', batches: [], end: 'لا شيء قبل 17', end2: '12 طلباً مرفوضاً' },
      band: ['الكرواسان: 120 منتَجة، 96 مباعة، 24 غير مباعة، واحدة من خمس', 'الميلفاي: 40 منتَجة، 40 مباعة، و12 طلباً مرفوضاً'],
      tiles: [
        { big: '24 غير مباعة', l1: 'كرواسان من كل خمس، كل مساء', l2: 'الخبزة الثالثة كانت زائدة' },
        { big: 'لا شيء على 17', l1: 'ثلاث ساعات من البيع دون ميلفاي', l2: '12 طلباً مسجَّلاً، ولا واحد لُبّي', hot: true },
        { big: 'رقمان لكل منتَج', l1: 'غير المباع مساءً، وساعة النفاد', l2: 'يُسجَّلان عند الإغلاق، في دقيقة' },
      ],
      line1: 'الخطآن يكلّفان، لكن ليس بالطريقة نفسها: غير المباع يُرى في الصندوق، والنفاد لا يُرى في أي مكان.',
      line2: 'البرنامج يسجّل الاثنين كل مساء، منتَجاً بمنتَج، ويقترح كمية الغد.',
      note: 'مثال مركَّب · الكميات والخبزات والطلبات مخترَعة؛ عوّضوها بأسبوع من تسجيلاتكم.',
    },
    fiche: {
      title: 'بطاقة الوصفة: 40 دج من المواد لكل كرواسان، والهامش حين ترتفع الزبدة',
      alt: 'البطاقة التقنية لخبزة من 60 كرواسان: دقيق 3 كغ، 270 دج؛ زبدة 1,5 كغ، 1800 دج؛ سكر 300 غ، 36 دج؛ بيض، 80 دج؛ حليب 0,6 لتر، 66 دج؛ خميرة وملح وتعبئة، 148 دج؛ المجموع 2400 دج، أي 40 دج للقطعة. بسعر بيع 65 دج، يترك الكرواسان 25 دج هامشاً على المواد. وإذا ارتفعت الزبدة بـ 25 بالمئة، تصير التكلفة 47,50 دج والهامش 17,50 دج، أي 30 بالمئة أقل.',
      header: 'مثال مركَّب · خبزة من 60 كرواسان · أسعار المكوّنات مخترَعة، وليست أسعار السوق',
      sheet: 'البطاقة التقنية · 60 كرواسان', cols: ['المكوّن', 'الكمية', 'التكلفة'],
      rows: [['الدقيق', '3 كغ', '270 دج'], ['الزبدة', '1,5 كغ', `${I('1 800')} دج`], ['السكر', '300 غ', '36 دج'], ['البيض', '4', '80 دج'], ['الحليب', '0,6 ل', '66 دج'], ['خميرة، ملح، تعبئة', '', '148 دج']],
      total: [`مجموع الخبزة · ${I('2 400')} دج`, '40 دج للقطعة'],
      panels: [
        { title: 'اليوم', right: 'يُباع بـ 65 دج', cost: 'المواد 40 دج', margin: 'الهامش 25 دج', note: 'على المواد، قبل العمل والتكاليف' },
        { title: 'إذا ارتفعت الزبدة 25 %', right: 'يُباع بـ 65 دج', cost: 'المواد 47,50 دج', margin: 'الهامش 17,50 دج', note: '30 % أقل من الهامش، دون تغيير شيء' },
      ],
      rule: [`كم ننتج؟ علامة: (السعر − التكلفة) ÷ السعر = ${I('(65 − 40) ÷ 65 = 38 %')}.`, 'نستهدف الكمية التي لا يتجاوزها الطلب إلا 38 يوماً من 100: فالنفاد في بعض الأمسيات عادي حينها.'],
      tiles: [
        { big: `${I('2 400 ÷ 60 = 40')} دج`, l1: 'تكلفة المواد لكرواسان واحد', l2: 'البطاقة تعيد حسابها عند كل شراء' },
        { big: `${I('25 → 17,50')} دج`, l1: 'الهامش، إذا ارتفعت الزبدة 25 %', l2: '30 % أقل، ولا شيء يُرى في المحل', hot: true },
        { big: I('(65 − 40) ÷ 65 = 38 %'), l1: 'علامة الكمية لمنتَج اليوم', l2: 'كلما كلّف غير المباع أكثر، قبلنا النفاد أكثر' },
      ],
      line1: 'الوصفة المكتوبة بكمياتها تعطي تكلفة؛ والوصفة في رأس الشاف تعطي انطباعاً.',
      line2: 'حين يتغيّر سعر الزبدة، تقول البطاقة ذلك يوم الشراء؛ ومن دونها نكتشفه في نهاية الشهر.',
      note: 'مثال مركَّب · كميات وأسعار مخترَعة؛ وعلامة الكمية آتية من النموذج المسمّى بائع الجرائد.',
    },
  },
};
