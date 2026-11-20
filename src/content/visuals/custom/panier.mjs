// Bespoke animated figures for the 2027 "augmenter le panier moyen en magasin" page.
//  arbre():  the month's revenue broken down: 6 000 000 = 4 000 tickets x 1 500 of
//            average basket; 1 500 = 2.5 items per ticket x 600 per item. If one
//            ticket in ten takes one more item: 2.6 items, 1 560, 6 240 000. Beside
//            it, the tickets by number of items: 38 % have a single item.
//  paires(): three pairs read in the same 4 000 tickets: paint then roller (800
//            tickets, 360 with, 440 without), paint then masking tape (800, 160, 640),
//            filler then filling knife (300, 75, 225), with the share and the index.
// Numbers are drawn in their own text elements, direction="ltr".
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, open, heading, esc } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function pop(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scale(0)}${(at + 1.2).toFixed(1)}%,100%{transform:scale(1)}}`); return `transform-box:fill-box;transform-origin:center;animation:${P}-${id} ${LOOP}s linear infinite`; }
function growX(css, P, id, at, dur, rtl) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'} center;animation:${P}-${id} ${LOOP}s linear infinite`; }
function growY(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleY(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleY(1)}}`); return `transform-box:fill-box;transform-origin:center bottom;animation:${P}-${id} ${LOOP}s linear infinite`; }
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
function box(c, x, y, w, h, label, value, hot) {
  return rect(c, x, y, w, h, { stroke: hot ? C.accent : C.fg55, fill: hot ? TINT : C.fill }) + text(c, x + 10, y + 17, label, { size: 8.5, font: 'mono', fill: C.fg55 }) + ltrSpans(c.RX(x, w) + w / 2, y + h - 14, [[value, hot ? C.accent : C.fg, true]], 15, 'middle');
}
const op = (c, x, y, s) => ltrSpans(c.X(x), y, [[s, C.fg70, false]], 16, 'middle');
const arrow = (c, x1, x2, y) => poly(c, [[x1 + 6, y], [x2 - 6, y]], C.accent, 1.5) + poly(c, [[x2 - 12, y - 4], [x2 - 6, y], [x2 - 12, y + 4]], C.accent, 1.5);

// one month in one shop
const TK = 4000; const ITEMS = 2.5; const PRICE = 600;
const BINS = [38, 24, 16, 10, 12];   // share of tickets with 1, 2, 3, 4, 5 or more items

export function arbre(t, rtl) {
  const c = ctx(rtl); const P = 'bq'; const css = []; const H = 686; const sep = t.sep; const dec = t.dec;
  const basket = ITEMS * PRICE; const ca = TK * basket;
  const items2 = ITEMS + 0.1; const basket2 = items2 * PRICE; const ca2 = TK * basket2;
  const d1 = (v) => v.toFixed(1).replace('.', dec);
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + text(c, 96, 172, t.eqTitle, { size: 11, fill: C.fg, weight: 500 }) + poly(c, [[632, 160], [632, 436]], C.line2) + text(c, 650, 172, t.histTitle, { size: 11, fill: C.fg, weight: 500 }) + '</g>';
  // revenue = tickets x basket
  s += `<g style="${pop(css, P, 'a1', 5)}">` + box(c, 96, 188, 150, 54, t.lCa, grp(ca, sep)) + '</g>';
  s += `<g style="animation:${show(css, P, 'a2', 8)}">` + op(c, 263, 222, '=') + box(c, 280, 188, 150, 54, t.lTickets, grp(TK, sep)) + op(c, 447, 222, '×') + '</g>';
  s += `<g style="${pop(css, P, 'a3', 10)}">` + box(c, 464, 188, 150, 54, t.lBasket, grp(basket, sep), true) + '</g>';
  // basket = items per ticket x price per item
  s += `<g style="animation:${show(css, P, 'b0', 13)}">` + poly(c, [[539, 242], [539, 256], [171, 256], [171, 270]], C.accent, 1, '3 3') + '</g>';
  s += `<g style="${pop(css, P, 'b1', 14)}">` + box(c, 96, 270, 150, 54, t.lBasket, grp(basket, sep), true) + '</g>';
  s += `<g style="animation:${show(css, P, 'b2', 17)}">` + op(c, 263, 304, '=') + box(c, 280, 270, 150, 54, t.lItems, d1(ITEMS)) + op(c, 447, 304, '×') + box(c, 464, 270, 150, 54, t.lPrice, grp(PRICE, sep)) + '</g>';
  // one ticket in ten takes one more item
  s += `<g style="animation:${show(css, P, 'c0', 24)}">` + text(c, 96, 352, t.ifTitle, { size: 10, fill: C.accent }) + '</g>';
  s += `<g style="${pop(css, P, 'c1', 26)}">` + box(c, 96, 364, 150, 54, t.lItems, d1(items2), true) + '</g>';
  s += `<g style="animation:${show(css, P, 'c2', 29)}">` + arrow(c, 246, 280, 391) + '</g>';
  s += `<g style="${pop(css, P, 'c3', 30)}">` + box(c, 280, 364, 150, 54, t.lBasket, grp(basket2, sep), true) + '</g>';
  s += `<g style="animation:${show(css, P, 'c4', 33)}">` + arrow(c, 430, 464, 391) + '</g>';
  s += `<g style="${pop(css, P, 'c5', 34)}">` + box(c, 464, 364, 150, 54, t.lCa, grp(ca2, sep), true) + '</g>';
  // tickets by number of items
  BINS.forEach((v, i) => {
    const x = 664 + i * 86; const h = v * 4.2; const y = 404 - h;
    s += `<g style="${growY(css, P, `h${i}`, 18 + i * 2, 3)}">` + rect(c, x, y, 62, h, { stroke: i === 0 ? C.accent : C.fg55, fill: i === 0 ? C.accent : C.fg35 }) + '</g>';
    s += `<g style="animation:${show(css, P, `p${i}`, 21 + i * 2)}">` + num(c, x + 31, y - 8, `${v}${t.pc}`, { size: 11, bold: true, fill: i === 0 ? C.accent : C.fg }) + num(c, x + 31, 422, t.bins[i], { size: 10, fill: C.fg70 }) + '</g>';
  });
  s += `<g style="animation:${show(css, P, 'hx', 30)}">` + poly(c, [[650, 404], [1094, 404]], C.line2) + text(c, 650, 440, t.binsUnit, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>';
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bd', 40)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 44);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// pairs read in the 4 000 tickets: tickets with the first item, of which with the second, share of all tickets with the second
const PAIRS = [{ n: 800, w: 360, base: 12, lift: '3.75' }, { n: 800, w: 160, base: 8, lift: '2.5' }, { n: 300, w: 75, base: 3, lift: '8.3' }];
const PX = 0.56;

export function paires(t, rtl) {
  const c = ctx(rtl); const P = 'bz'; const css = []; const H = 686; const dec = t.dec;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const hd = (x, str) => text(c, x, 172, str, { size: 8.5, font: 'mono', fill: C.fg55 });
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + hd(96, t.colPair) + hd(330, t.colBar) + hd(850, t.colShare) + hd(970, t.colIndex) + '</g>';
  PAIRS.forEach((p, i) => {
    const y = 192 + i * 84; const at = 6 + i * 9;
    const conf = Math.round((p.w / p.n) * 100);
    const liftStr = p.lift.replace('.', dec);
    const ww = p.w * PX; const mw = (p.n - p.w) * PX;
    s += `<g style="animation:${show(css, P, `l${i}`, at)}">` + text(c, 96, y + 18, t.pairs[i].name, { size: 11.5, fill: C.fg, weight: 500 }) + text(c, 96, y + 36, t.pairs[i].sub, { size: 9, font: 'mono', fill: C.fg55 }) + '</g>';
    s += `<g style="${growX(css, P, `w${i}`, at + 1, 2.5, rtl)}">` + rect(c, 330, y, ww, 30, { stroke: C.fg, fill: C.fg }) + '</g>';
    s += `<g style="${growX(css, P, `m${i}`, at + 3.5, 2.5, rtl)}">` + rect(c, 330 + ww, y, mw, 30, { stroke: C.accent, fill: TINT }) + '</g>';
    s += `<g style="animation:${show(css, P, `v${i}`, at + 6)}">` + num(c, 330 + ww / 2, y + 20, String(p.w), { size: 11.5, bold: true, fill: '#000' }) + num(c, 330 + ww + mw / 2, y + 20, String(p.n - p.w), { size: 11.5, bold: true, fill: C.accent }) + text(c, 330, y + 48, t.pairs[i].miss, { size: 9.5, fill: C.fg70 }) + '</g>';
    s += `<g style="${pop(css, P, `c${i}`, at + 7)}">` + num(c, 878, y + 22, `${conf}${t.pc}`, { size: 15, bold: true }) + '</g>';
    s += `<g style="${pop(css, P, `x${i}`, at + 8)}">` + num(c, 1000, y + 22, `×${liftStr}`, { size: 15, bold: true, fill: C.accent }) + '</g>';
  });
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
    arbre: {
      sep: ' ', dec: ',', pc: ' %',
      title: 'Le panier moyen, c’est deux chiffres',
      alt: 'Le chiffre d’affaires du mois, 6 000 000 de dinars, est le produit de 4 000 tickets par un panier moyen de 1 500 dinars ; ce panier est le produit de 2,5 articles par ticket par 600 dinars par article. Si un ticket sur dix prend un article de plus, le panier passe à 1 560 dinars et le chiffre d’affaires à 6 240 000. À côté, la répartition des tickets : 38 % n’ont qu’un seul article.',
      header: 'Exemple construit · un magasin de peinture et de décoration : 4 000 tickets et 6 000 000 DA dans le mois',
      eqTitle: 'Ce qui fait le chiffre d’affaires', histTitle: 'Les tickets, selon le nombre d’articles',
      lCa: 'chiffre d’affaires, DA', lTickets: 'tickets', lBasket: 'panier moyen, DA', lItems: 'articles par ticket', lPrice: 'DA par article',
      ifTitle: 'si un ticket sur dix prend un article de plus :',
      bins: ['1', '2', '3', '4', '5+'], binsUnit: 'articles sur le ticket',
      band: 'Le panier moyen se décompose : articles par ticket × prix moyen par article. Le premier se travaille à la caisse et en rayon ; le second, par la gamme.',
      tiles: [
        { big: '1 500 DA', l1: 'panier moyen : 6 000 000 ÷ 4 000 tickets', l2: '2,5 articles × 600 DA' },
        { big: '+0,1 article', l1: 'un ticket sur dix prend un article de plus', l2: 'panier à 1 560 DA, soit +4 %', hot: true },
        { big: '+240 000 DA', l1: 'par mois, avec les mêmes 4 000 tickets', l2: 'sans un client de plus' },
      ],
      line1: '38 % des tickets n’ont qu’un article : c’est là que se joue la suggestion, pas sur les tickets de cinq articles.',
      line2: 'Gagner 4 % par le nombre de clients demande 160 clients de plus par mois ; par le panier, un article de plus sur un ticket sur dix.',
      note: 'Exemple construit · un mois dans un magasin ; montants fictifs en dinars.',
    },
    paires: {
      dec: ',', pc: ' %',
      title: 'Les articles achetés ensemble, et ceux qui repartent sans',
      alt: 'Trois paires lues dans 4 000 tickets. Sur 800 tickets avec de la peinture, 360 ont aussi un rouleau et 440 repartent sans : 45 %, soit 3,75 fois plus que l’ensemble des tickets. Sur les mêmes 800, 160 ont un ruban de masquage et 640 non : 20 %, indice 2,5. Sur 300 tickets avec de l’enduit, 75 ont un couteau à enduire et 225 non : 25 %, indice 8,3.',
      header: 'Exemple construit · les mêmes 4 000 tickets, lus paire par paire',
      colPair: 'paire', colBar: 'tickets avec le premier article : avec le second, sans', colShare: 'part', colIndex: 'indice',
      pairs: [
        { name: 'Peinture, puis rouleau', sub: '800 tickets avec peinture', miss: '440 repartent sans rouleau' },
        { name: 'Peinture, puis ruban', sub: '800 tickets avec peinture', miss: '640 repartent sans ruban de masquage' },
        { name: 'Enduit, puis couteau', sub: '300 tickets avec enduit', miss: '225 repartent sans couteau à enduire' },
      ],
      band: 'Trois paires lues dans les tickets du mois : la part qui prend déjà le second article, et ceux qui repartent sans, à qui la caisse peut le proposer.',
      tiles: [
        { big: '45 %', l1: 'des tickets de peinture ont aussi un rouleau', l2: 'contre 12 % de l’ensemble des tickets' },
        { big: '×3,75', l1: 'l’indice de la paire peinture et rouleau', l2: '45 % ÷ 12 % : une vraie association' },
        { big: '1 305 tickets', l1: 'repartent sans l’article associé', l2: '440 + 640 + 225, en un mois', hot: true },
      ],
      line1: 'Si une suggestion sur cinq est acceptée : 88 rouleaux, 128 rubans et 45 couteaux, soit 87 350 DA de plus par mois, sans un client de plus.',
      line2: 'L’indice écarte les fausses paires : un article présent sur un ticket sur deux est « acheté avec » tout, sans que cela veuille rien dire.',
      note: 'Exemple construit · prix fictifs : rouleau 450 DA, ruban 250 DA, couteau à enduire 350 DA.',
    },
  },
  en: {
    arbre: {
      sep: ',', dec: '.', pc: '%',
      title: 'The average basket is two figures',
      alt: 'The month’s revenue, 6,000,000 dinars, is 4,000 tickets times an average basket of 1,500 dinars; that basket is 2.5 items per ticket times 600 dinars per item. If one ticket in ten takes one more item, the basket rises to 1,560 dinars and revenue to 6,240,000. Beside it, the split of tickets: 38% have a single item.',
      header: 'Constructed example · a paint and decoration shop: 4,000 tickets and DA 6,000,000 in the month',
      eqTitle: 'What makes the revenue', histTitle: 'Tickets, by number of items',
      lCa: 'revenue, DA', lTickets: 'tickets', lBasket: 'average basket, DA', lItems: 'items per ticket', lPrice: 'DA per item',
      ifTitle: 'if one ticket in ten takes one more item:',
      bins: ['1', '2', '3', '4', '5+'], binsUnit: 'items on the ticket',
      band: 'The average basket breaks down: items per ticket × average price per item. The first is worked on at the till and on the shelf; the second, through the range.',
      tiles: [
        { big: 'DA 1,500', l1: 'average basket: 6,000,000 ÷ 4,000 tickets', l2: '2.5 items × DA 600' },
        { big: '+0.1 item', l1: 'one ticket in ten takes one more item', l2: 'basket at DA 1,560, that is +4%', hot: true },
        { big: '+DA 240,000', l1: 'a month, with the same 4,000 tickets', l2: 'without one more customer' },
      ],
      line1: '38% of tickets have a single item: that is where the suggestion plays out, not on the five-item tickets.',
      line2: 'Gaining 4% through customer numbers takes 160 more customers a month; through the basket, one more item on one ticket in ten.',
      note: 'Constructed example · one month in one shop; fictitious amounts in dinars.',
    },
    paires: {
      dec: '.', pc: '%',
      title: 'Items bought together, and those who leave without',
      alt: 'Three pairs read in 4,000 tickets. Out of 800 tickets with paint, 360 also have a roller and 440 leave without: 45%, that is 3.75 times more than all tickets. Out of the same 800, 160 have masking tape and 640 do not: 20%, index 2.5. Out of 300 tickets with filler, 75 have a filling knife and 225 do not: 25%, index 8.3.',
      header: 'Constructed example · the same 4,000 tickets, read pair by pair',
      colPair: 'pair', colBar: 'tickets with the first item: with the second, without', colShare: 'share', colIndex: 'index',
      pairs: [
        { name: 'Paint, then roller', sub: '800 tickets with paint', miss: '440 leave without a roller' },
        { name: 'Paint, then tape', sub: '800 tickets with paint', miss: '640 leave without masking tape' },
        { name: 'Filler, then knife', sub: '300 tickets with filler', miss: '225 leave without a filling knife' },
      ],
      band: 'Three pairs read in the month’s tickets: the share that already takes the second item, and those who leave without it, to whom the till can offer it.',
      tiles: [
        { big: '45%', l1: 'of paint tickets also have a roller', l2: 'against 12% of all tickets' },
        { big: '×3.75', l1: 'the index of the paint and roller pair', l2: '45% ÷ 12%: a real association' },
        { big: '1,305 tickets', l1: 'leave without the associated item', l2: '440 + 640 + 225, in one month', hot: true },
      ],
      line1: 'If one suggestion in five is accepted: 88 rollers, 128 tapes and 45 knives, that is DA 87,350 more a month, without one more customer.',
      line2: 'The index rules out false pairs: an item present on one ticket in two is “bought with” everything, without that meaning anything.',
      note: 'Constructed example · fictitious prices: roller DA 450, tape DA 250, filling knife DA 350.',
    },
  },
  ar: {
    arbre: {
      sep: ' ', dec: ',', pc: ' %',
      title: 'متوسط السلة رقمان',
      alt: 'رقم أعمال الشهر، 6 ملايين دينار، هو حاصل 4000 تذكرة في متوسط سلة من 1500 دينار؛ وهذه السلة حاصل 2,5 سلعة في التذكرة في 600 دينار للسلعة. وإذا أخذت تذكرة من كل عشر سلعة إضافية، صعدت السلة إلى 1560 ديناراً ورقم الأعمال إلى 6240000. وبجانبه، توزيع التذاكر: 38 بالمئة فيها سلعة واحدة.',
      header: 'مثال مركَّب · محل للطلاء والديكور: ⁦4 000⁩ تذكرة و⁦6 000 000⁩ دج في الشهر',
      eqTitle: 'ما يصنع رقم الأعمال', histTitle: 'التذاكر، حسب عدد السلع',
      lCa: 'رقم الأعمال، دج', lTickets: 'التذاكر', lBasket: 'متوسط السلة، دج', lItems: 'السلع في التذكرة', lPrice: 'دج للسلعة',
      ifTitle: 'إذا أخذت تذكرة من كل عشر سلعة إضافية:',
      bins: ['1', '2', '3', '4', '5+'], binsUnit: 'عدد السلع في التذكرة',
      band: 'متوسط السلة يتفكك: السلع في التذكرة × متوسط سعر السلعة. الأول يُشتغل عليه عند الصندوق وفي الرف؛ والثاني، بتشكيلة السلع.',
      tiles: [
        { big: '⁦1 500⁩ دج', l1: 'متوسط السلة: ⁦6 000 000 ÷ 4 000⁩ تذكرة', l2: '⁦2,5 × 600⁩ دج' },
        { big: '⁦+0,1⁩ سلعة', l1: 'تذكرة من كل عشر تأخذ سلعة إضافية', l2: 'السلة عند ⁦1 560⁩ دج، أي ⁦+4 %⁩', hot: true },
        { big: '⁦+240 000⁩ دج', l1: 'في الشهر، بالتذاكر الـ⁦4 000⁩ نفسها', l2: 'دون زبون إضافي واحد' },
      ],
      line1: '38 بالمئة من التذاكر فيها سلعة واحدة: هناك يُلعب الاقتراح، لا على التذاكر ذات السلع الخمس.',
      line2: 'ربح 4 بالمئة بعدد الزبائن يتطلب 160 زبوناً إضافياً في الشهر؛ وبالسلة، سلعة إضافية في تذكرة من كل عشر.',
      note: 'مثال مركَّب · شهر واحد في محل واحد؛ مبالغ خيالية بالدينار.',
    },
    paires: {
      dec: ',', pc: ' %',
      title: 'السلع التي تُشترى معاً، والذين يغادرون دونها',
      alt: 'ثلاث ثنائيات مقروءة في 4000 تذكرة. من 800 تذكرة فيها طلاء، 360 فيها كذلك أسطوانة و440 تغادر دونها: 45 بالمئة، أي 3,75 مرة أكثر من مجموع التذاكر. ومن الـ800 نفسها، 160 فيها شريط تغطية و640 لا: 20 بالمئة، والمؤشر 2,5. ومن 300 تذكرة فيها معجون، 75 فيها سكين معجون و225 لا: 25 بالمئة، والمؤشر 8,3.',
      header: 'مثال مركَّب · التذاكر الـ⁦4 000⁩ نفسها، مقروءة ثنائية بثنائية',
      colPair: 'الثنائية', colBar: 'التذاكر التي فيها السلعة الأولى: مع الثانية، ودونها', colShare: 'النسبة', colIndex: 'المؤشر',
      pairs: [
        { name: 'الطلاء، ثم الأسطوانة', sub: '800 تذكرة فيها طلاء', miss: '440 تغادر دون أسطوانة' },
        { name: 'الطلاء، ثم الشريط', sub: '800 تذكرة فيها طلاء', miss: '640 تغادر دون شريط تغطية' },
        { name: 'المعجون، ثم السكين', sub: '300 تذكرة فيها معجون', miss: '225 تغادر دون سكين معجون' },
      ],
      band: 'ثلاث ثنائيات مقروءة في تذاكر الشهر: النسبة التي تأخذ السلعة الثانية من قبل، والذين يغادرون دونها، ولهم يمكن للصندوق أن يقترحها.',
      tiles: [
        { big: '⁦45 %⁩', l1: 'من تذاكر الطلاء فيها كذلك أسطوانة', l2: 'مقابل ⁦12 %⁩ من مجموع التذاكر' },
        { big: '⁦×3,75⁩', l1: 'مؤشر ثنائية الطلاء والأسطوانة', l2: '⁦45 % ÷ 12 %⁩: ارتباط حقيقي' },
        { big: '⁦1 305⁩ تذكرة', l1: 'تغادر دون السلعة المرتبطة', l2: '⁦440 + 640 + 225⁩، في شهر', hot: true },
      ],
      line1: 'إذا قُبل اقتراح من كل خمسة: 88 أسطوانة، 128 شريطاً، و45 سكيناً، أي ⁦87 350⁩ دج إضافية في الشهر، دون زبون إضافي واحد.',
      line2: 'المؤشر يستبعد الثنائيات الزائفة: سلعة حاضرة في تذكرة من كل اثنتين «تُشترى مع» كل شيء، دون أن يعني ذلك شيئاً.',
      note: 'مثال مركَّب · أسعار خيالية: الأسطوانة 450 دج، الشريط 250 دج، وسكين المعجون 350 دج.',
    },
  },
};
