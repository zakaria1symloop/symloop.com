// Bespoke animated figures for the 2027 "logiciel quincaillerie et matériaux
// de construction" post.
//  unites(): one item, three units, one stock. Three unit cards (carton, box,
//            piece) linked by their conversion factors; beside them the stock
//            drawn as blocks counted in pieces: the bar grows, a counter sale
//            appears, then the bar after the sale grows shorter, the sold slice
//            left as a dashed outline; a band applies the same rule to cable
//            sold by the metre; three tiles.
//  compte(): a tradesman's account over one month. A stepped balance line
//            draws itself against a dashed credit limit, six numbered markers
//            appear as the line passes, each matched by a row of the statement;
//            under it, a bar of goods paid for and not yet collected, in three
//            growing segments; three tiles.
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

// stock of the example, in pieces: cartons of 2,000, boxes of 100, loose pieces
const PER_CARTON = 2000, PER_BOX = 100;
function blocks(c, x, y, h, sc, cartons, boxes, pieces) {
  let s = ''; let cur = x;
  for (let i = 0; i < cartons; i++) { const w = PER_CARTON * sc; s += rect(c, cur, y, w - 2, h, { stroke: C.fg70, fill: C.fill }); cur += w; }
  for (let i = 0; i < boxes; i++) { const w = PER_BOX * sc; s += rect(c, cur, y, w - 1.5, h, { stroke: C.fg55, fill: DARK }); cur += w; }
  const pw = Math.max(2, pieces * sc); s += rect(c, cur, y, pw, h, { fill: C.accent });
  return { s, end: cur + pw };
}

export function unites(t, rtl) {
  const c = ctx(rtl); const P = 'qu'; const css = []; const H = 608;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  // three unit cards and their conversion factors
  const cx = 80, cw = 480, ch = 58, ys = [150, 232, 314];
  t.units.forEach((u, i) => {
    const y = ys[i]; const hot = i === 2;
    s += `<g style="animation:${show(css, P, `u${i}`, 4 + i * 4)}">` + rect(c, cx, y, cw, ch, { stroke: hot ? C.accent : C.line2, fill: hot ? TINT : DARK })
      + text(c, cx + 16, y + 25, u.name, { size: 13, fill: hot ? C.accent : C.fg, weight: 500 }) + text(c, cx + 16, y + 44, u.conv, { size: 9, font: 'mono', fill: C.fg55 })
      + text(c, cx + cw - 16, y + 25, u.price, { size: 11, fill: C.fg, anchor: 'end' }) + text(c, cx + cw - 16, y + 44, u.per, { size: 9, font: 'mono', fill: hot ? C.accent : C.fg70, anchor: 'end' }) + '</g>';
    if (i < 2) s += `<g style="animation:${show(css, P, `x${i}`, 6 + i * 4)}">` + line(c, cx + 40, y + ch, cx + 40, y + ch + 24, { stroke: C.fg35 }) + text(c, cx + 52, y + ch + 16, t.links[i], { size: 9.5, font: 'mono', fill: C.fg70 }) + '</g>';
  });
  // one stock, counted in pieces
  const bx = 620, bw = 440, sc = bw / 4740, bh = 30;
  s += `<g style="animation:${show(css, P, 'rt', 16)}">` + text(c, bx, 160, t.stockTitle, { size: 11.5, fill: C.accent, weight: 500 }) + text(c, bx, 175, t.stockSub, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>';
  const b1 = blocks(c, bx, 202, bh, sc, 2, 7, 40);
  s += `<g style="animation:${show(css, P, 'bl', 18)}">` + text(c, bx, 196, t.beforeLabel, { size: 9, fill: C.fg70 }) + '</g>';
  s += `<g style="${growX(css, P, 'b1', 18, 8, rtl)}">` + b1.s + '</g>';
  s += `<g style="animation:${show(css, P, 'bt', 27)}">` + text(c, bx, 246, t.before, { size: 8.5, font: 'mono', fill: C.fg55 }) + text(c, bx + bw + 12, 222, t.beforeTotal, { size: 12, font: 'mono', fill: C.fg, weight: 500 }) + '</g>';
  s += `<g style="animation:${show(css, P, 'tk', 34)}">` + rect(c, bx, 260, 500, 36, { stroke: C.accent, fill: TINT }) + text(c, bx + 14, 283, t.sale, { size: 10.5, fill: C.fg }) + text(c, bx + 486, 283, t.saleQty, { size: 11, font: 'mono', fill: C.accent, weight: 500, anchor: 'end' }) + '</g>';
  const b2 = blocks(c, bx, 322, bh, sc, 2, 4, 15);
  s += `<g style="animation:${show(css, P, 'al', 40)}">` + text(c, bx, 316, t.afterLabel, { size: 9, fill: C.fg70 }) + '</g>';
  s += `<g style="${growX(css, P, 'b2', 40, 8, rtl)}">` + b2.s + '</g>';
  s += `<g style="animation:${show(css, P, 'sl', 50)}">` + rect(c, b2.end + 2, 322, bx + bw - b2.end - 2, bh, { stroke: C.accent, dash: '3 3' }) + '</g>';
  s += `<g style="animation:${show(css, P, 'at', 52)}">` + text(c, bx, 366, t.after, { size: 8.5, font: 'mono', fill: C.fg55 }) + text(c, bx + bw + 12, 342, t.afterTotal, { size: 12, font: 'mono', fill: C.accent, weight: 500 }) + '</g>';
  // the same rule for cable sold by the metre
  s += `<g style="animation:${show(css, P, 'cb', 60)}">` + rect(c, 80, 392, 1040, 38, { stroke: C.line2, fill: C.fill }) + text(c, 96, 416, t.cable.a, { size: 10, fill: C.fg }) + text(c, 660, 416, t.cable.b, { size: 9.5, font: 'mono', fill: C.fg70, anchor: 'middle' }) + text(c, 1104, 416, t.cable.c, { size: 10, font: 'mono', fill: C.accent, weight: 500, anchor: 'end' }) + '</g>';
  const ky = 448;
  s += tiles(c, css, P, ky, t.tiles, 68);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// day of the month, balance after the event (credit limit 300,000)
const EV = [[2, 85000], [6, 205000], [11, 105000], [15, 245000], [20, 335000], [27, 135000]];
const LIMIT = 300000;

export function compte(t, rtl) {
  const c = ctx(rtl); const P = 'qc'; const css = []; const H = 640;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const x0 = 100, x1 = 540, yb = 380, yt = 160;
  const X = (d) => x0 + (d - 1) * ((x1 - x0) / 30); const Y = (v) => yb - v * ((yb - yt) / 400000);
  s += `<g style="animation:${show(css, P, 'ax', 3)}">` + line(c, x0, yb, x1 + 10, yb, { stroke: C.line2 }) + EV.map(([d], i) => text(c, X(d), yb + 16, t.days[i], { size: 8.5, font: 'mono', fill: C.fg55, anchor: 'middle' })).join('') + '</g>';
  s += `<g style="animation:${show(css, P, 'lim', 5)}">` + line(c, x0, Y(LIMIT), x1, Y(LIMIT), { stroke: C.accent, dash: '5 5' }) + text(c, x0 + 4, Y(LIMIT) - 7, t.limit, { size: 9, font: 'mono', fill: C.accent }) + '</g>';
  // the stepped balance line, drawn from the first of the month
  const pts = [[X(1), Y(0)]]; let len = 0; const cum = [];
  EV.forEach(([day, v]) => { const [px, py] = pts[pts.length - 1]; const nx = X(day), ny = Y(v); pts.push([nx, py], [nx, ny]); len += Math.abs(nx - px) + Math.abs(ny - py); cum.push(len); });
  { const [px, py] = pts[pts.length - 1]; pts.push([X(31), py]); len += X(31) - px; }
  const L = Math.ceil(len); const T0 = 8, TD = 38;
  s += `<polyline points="${pts.map(([x, y]) => `${c.X(x).toFixed(1)},${y.toFixed(1)}`).join(' ')}" fill="none" stroke="${C.fg}" stroke-width="2" stroke-dasharray="${L}" style="animation:${drawLine(css, P, 'ln', T0, TD, L)}"/>`;
  const at = cum.map((v) => T0 + (v / len) * TD);
  s += `<g style="animation:${show(css, P, 'ov', at[4] + 1)}">` + line(c, X(20), Y(335000), X(27), Y(335000), { stroke: C.accent, sw: 3 }) + '</g>';
  // statement panel
  const qx = 600, qw = 520, qy = 142, qh = 240;
  s += `<g style="animation:${show(css, P, 'tb', 6)}">` + rect(c, qx, qy, qw, qh, { stroke: C.line2, fill: DARK }) + text(c, qx + 14, qy + 22, t.stTitle, { size: 11.5, fill: C.fg, weight: 500 }) + text(c, qx + qw - 14, qy + 22, t.stSub, { size: 8.5, font: 'mono', fill: C.fg55, anchor: 'end' })
    + text(c, qx + 44, qy + 44, t.cols[0], { size: 8.5, font: 'mono', fill: C.fg55 }) + text(c, qx + 130, qy + 44, t.cols[1], { size: 8.5, font: 'mono', fill: C.fg55 }) + text(c, qx + 350, qy + 44, t.cols[2], { size: 8.5, font: 'mono', fill: C.fg55, anchor: 'end' }) + text(c, qx + qw - 14, qy + 44, t.cols[3], { size: 8.5, font: 'mono', fill: C.fg55, anchor: 'end' })
    + line(c, qx + 14, qy + 52, qx + qw - 14, qy + 52, { stroke: C.line2 }) + '</g>';
  EV.forEach(([day, v], i) => {
    const hot = i === 4; const col = hot ? C.accent : C.fg; const r = t.rows[i]; const ry = qy + 72 + i * 26;
    s += `<g style="animation:${show(css, P, `m${i}`, at[i])}">` + circle(c, X(day), Y(v), 8, { fill: DARK, stroke: hot ? C.accent : C.fg70 }) + text(c, X(day), Y(v) + 3, String(i + 1), { size: 8.5, font: 'mono', fill: col, anchor: 'middle' }) + '</g>';
    s += `<g style="animation:${show(css, P, `r${i}`, at[i] + 0.6)}">` + circle(c, qx + 24, ry - 3, 7, { fill: DARK, stroke: hot ? C.accent : C.fg35 }) + text(c, qx + 24, ry, String(i + 1), { size: 8, font: 'mono', fill: col, anchor: 'middle' })
      + text(c, qx + 44, ry, r[0], { size: 9.5, fill: C.fg70 }) + text(c, qx + 130, ry, r[1], { size: 9.5, fill: col }) + text(c, qx + 350, ry, r[2], { size: 10, font: 'mono', fill: col, anchor: 'end' }) + text(c, qx + qw - 14, ry, r[3], { size: 10, font: 'mono', fill: col, weight: 500, anchor: 'end' }) + '</g>';
  });
  s += `<g style="animation:${show(css, P, 'al', at[4] + 2)}">` + text(c, qx + 14, qy + qh - 12, t.alert, { size: 9.5, fill: C.accent }) + '</g>';
  // goods paid for, not yet collected
  const sy = 430, sh = 30, u = 3; const parts = [50, 80, 70]; let cur = 80;
  s += `<g style="animation:${show(css, P, 'st', 50)}">` + text(c, 80, sy - 10, t.strip.title, { size: 10.5, fill: C.fg, weight: 500 }) + '</g>';
  parts.forEach((n, i) => {
    const w = n * u; const last = i === 2;
    const body = rect(c, cur, sy, w - 2, sh, { stroke: last ? C.accent : C.fg55, fill: last ? TINT : C.fill }) + text(c, cur + w / 2, sy + 19, t.strip.segs[i], { size: 9, fill: last ? C.accent : C.fg70, anchor: 'middle' });
    s += last ? `<g style="animation:${show(css, P, `s${i}`, 62)}">${body}</g>` : `<g style="${growX(css, P, `s${i}`, 52 + i * 4, 3.5, rtl)}">${body}</g>`;
    cur += w;
  });
  s += `<g style="animation:${show(css, P, 'ss', 64)}">` + rect(c, 720, sy, 400, sh, { stroke: C.line2, fill: DARK }) + text(c, 920, sy + 19, t.strip.stats, { size: 9.5, font: 'mono', fill: C.fg70, anchor: 'middle' }) + '</g>';
  const ky = 480;
  s += tiles(c, css, P, ky, t.tiles, 70);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    unites: {
      title: 'Un article, trois unités, un seul stock',
      alt: 'Une vis achetée au carton de 20 boîtes, soit 2 000 pièces, vendue à la boîte de 100 pièces et à la pièce. Le stock est compté en pièces : 2 cartons, 7 boîtes et 40 pièces font 4 740 pièces. Une vente de 3 boîtes et 25 pièces retire 325 pièces : il reste 4 415 pièces, soit 2 cartons, 4 boîtes et 15 pièces. Même règle pour le câble vendu au mètre : 3 tourets de 100 m et 37 m font 337 m ; une vente de 12,5 m laisse 324,5 m.',
      header: 'Exemple construit · une vis 4 × 40 achetée au carton, vendue à la boîte et à la pièce · pas des prix de marché',
      units: [
        { name: 'Carton', conv: '= 20 boîtes = 2 000 pièces', price: 'acheté 9 000 DA', per: '4,50 DA la pièce' },
        { name: 'Boîte', conv: '= 100 pièces', price: 'vendue 650 DA', per: '6,50 DA la pièce' },
        { name: 'Pièce', conv: 'unité de stock', price: 'vendue 8 DA', per: '8,00 DA la pièce' },
      ],
      links: ['× 20', '× 100'],
      stockTitle: 'Un seul stock, compté en pièces', stockSub: 'chaque vente retire des pièces, quelle que soit l’unité vendue',
      beforeLabel: 'avant la vente', before: '2 cartons · 7 boîtes · 40 pièces', beforeTotal: '4 740',
      sale: 'Vente au comptoir : 3 boîtes + 25 pièces', saleQty: '− 325 pièces',
      afterLabel: 'après la vente', after: '2 cartons · 4 boîtes · 15 pièces', afterTotal: '4 415',
      cable: { a: 'Même règle pour le câble : touret de 100 m, vendu au mètre', b: 'stock : 3 tourets + 37 m = 337 m', c: 'vente 12,5 m · reste 324,5 m' },
      tiles: [
        { big: '1 article, 3 unités', l1: 'carton, boîte, pièce : un seul stock', l2: 'au lieu de trois articles qui ne se parlent pas' },
        { big: '4 740 − 325 = 4 415', l1: 'la vente retire des pièces du même stock', l2: 'reste 2 cartons, 4 boîtes, 15 pièces', hot: true },
        { big: '4,50 · 6,50 · 8,00 DA', l1: 'revient, prix à la boîte, prix à la pièce', l2: 'la marge se lit par unité vendue' },
      ],
      line1: 'Trois articles séparés pour la même vis donnent trois stocks faux ; un article à trois unités donne un stock juste.',
      line2: 'La règle de conversion se saisit une fois, à la création de l’article, et la caisse fait le reste.',
      note: 'Exemple construit · quantités et prix inventés pour montrer le calcul, pas des prix de marché.',
    },
    compte: {
      title: 'Le compte d’un artisan : un plafond, un relevé, 70 sacs payés qui attendent',
      alt: 'Le compte d’un artisan pendant un mois, avec un plafond de crédit de 300 000 DA. Six lignes : bon du 2 mars, 85 000, solde 85 000 ; bon du 6 mars, 120 000, solde 205 000 ; versement du 11 mars, 100 000, solde 105 000 ; bon du 15 mars, 140 000, solde 245 000 ; bon du 20 mars, 90 000, solde 335 000, au-dessus du plafond ; versement du 27 mars, 200 000, solde 135 000. En dessous, 200 sacs de ciment payés le 2 mars : 50 enlevés le jour même, 80 le 9 mars, 70 restent à enlever ; sur 500 sacs au dépôt, 70 sont réservés et 430 sont à vendre.',
      header: 'Exemple construit · un artisan, un chantier, un mois · plafond de crédit fixé à 300 000 DA',
      limit: 'plafond 300 000 DA', days: ['2', '6', '11', '15', '20', '27 mars'],
      stTitle: 'Relevé · Artisan A · chantier villa', stSub: 'mars 2027', cols: ['date', 'pièce', 'montant', 'solde'],
      rows: [['2 mars', 'bon 0412', '+ 85 000', '85 000'], ['6 mars', 'bon 0431', '+ 120 000', '205 000'], ['11 mars', 'versement', '− 100 000', '105 000'], ['15 mars', 'bon 0467', '+ 140 000', '245 000'], ['20 mars', 'bon 0489', '+ 90 000', '335 000'], ['27 mars', 'versement', '− 200 000', '135 000']],
      alert: 'Ligne 5 : le solde dépasse le plafond, la caisse demande l’accord du gérant.',
      strip: { title: 'Payé, pas encore enlevé · 200 sacs de ciment réglés le 2 mars', segs: ['50 enlevés le 2 mars', '80 enlevés le 9 mars', '70 à enlever'], stats: 'au dépôt 500 sacs · réservés 70 · à vendre 430' },
      tiles: [
        { big: '335 000 > 300 000', l1: 'le plafond est dépassé au quatrième bon', l2: 'la vente attend l’accord du gérant', hot: true },
        { big: '1 relevé par chantier', l1: 'bons, versements et solde, à la date du jour', l2: 'envoyé au client, sans recopier le carnet' },
        { big: '70 sacs réservés', l1: 'payés, pas encore enlevés', l2: 'ils ne sont plus disponibles à la vente' },
      ],
      line1: 'Le carnet dit combien le client doit ; le compte dit aussi depuis quand, pour quel chantier et jusqu’où il peut aller.',
      line2: 'La marchandise payée et laissée au dépôt est promise au client : elle sort du stock à vendre le jour du paiement.',
      note: 'Exemple construit · montants, dates et plafond inventés pour montrer le mécanisme.',
    },
  },
  en: {
    unites: {
      title: 'One item, three units, one stock',
      alt: 'A screw bought by the carton of 20 boxes, that is 2,000 pieces, sold by the box of 100 pieces and by the piece. Stock is counted in pieces: 2 cartons, 7 boxes and 40 pieces make 4,740 pieces. A sale of 3 boxes and 25 pieces removes 325 pieces: 4,415 pieces remain, that is 2 cartons, 4 boxes and 15 pieces. Same rule for cable sold by the metre: 3 reels of 100 m and 37 m make 337 m; a sale of 12.5 m leaves 324.5 m.',
      header: 'Constructed example · a 4 × 40 screw bought by the carton, sold by the box and by the piece · not market prices',
      units: [
        { name: 'Carton', conv: '= 20 boxes = 2,000 pieces', price: 'bought 9,000 DZD', per: '4.50 DZD a piece' },
        { name: 'Box', conv: '= 100 pieces', price: 'sold 650 DZD', per: '6.50 DZD a piece' },
        { name: 'Piece', conv: 'stock unit', price: 'sold 8 DZD', per: '8.00 DZD a piece' },
      ],
      links: ['× 20', '× 100'],
      stockTitle: 'One stock, counted in pieces', stockSub: 'every sale removes pieces, whatever unit was sold',
      beforeLabel: 'before the sale', before: '2 cartons · 7 boxes · 40 pieces', beforeTotal: '4,740',
      sale: 'Counter sale: 3 boxes + 25 pieces', saleQty: '− 325 pieces',
      afterLabel: 'after the sale', after: '2 cartons · 4 boxes · 15 pieces', afterTotal: '4,415',
      cable: { a: 'Same rule for cable: a 100 m reel, sold by the metre', b: 'stock: 3 reels + 37 m = 337 m', c: 'sale 12.5 m · 324.5 m left' },
      tiles: [
        { big: '1 item, 3 units', l1: 'carton, box, piece: one stock', l2: 'instead of three items that never talk' },
        { big: '4,740 − 325 = 4,415', l1: 'the sale removes pieces from the same stock', l2: '2 cartons, 4 boxes, 15 pieces left', hot: true },
        { big: '4.50 · 6.50 · 8.00 DZD', l1: 'cost, box price, piece price', l2: 'the margin is read per unit sold' },
      ],
      line1: 'Three separate items for the same screw give three wrong stocks; one item with three units gives a right one.',
      line2: 'The conversion rule is entered once, when the item is created, and the till does the rest.',
      note: 'Constructed example · quantities and prices invented to show the calculation, not market prices.',
    },
    compte: {
      title: 'A tradesman’s account: a limit, a statement, 70 paid bags waiting',
      alt: 'A tradesman’s account over one month, with a credit limit of 300,000 DZD. Six lines: slip of 2 March, 85,000, balance 85,000; slip of 6 March, 120,000, balance 205,000; payment of 11 March, 100,000, balance 105,000; slip of 15 March, 140,000, balance 245,000; slip of 20 March, 90,000, balance 335,000, above the limit; payment of 27 March, 200,000, balance 135,000. Below, 200 bags of cement paid for on 2 March: 50 collected the same day, 80 on 9 March, 70 still to collect; of 500 bags in the yard, 70 are reserved and 430 are for sale.',
      header: 'Constructed example · one tradesman, one site, one month · credit limit set at 300,000 DZD',
      limit: 'limit 300,000 DZD', days: ['2', '6', '11', '15', '20', '27 March'],
      stTitle: 'Statement · Tradesman A · villa site', stSub: 'March 2027', cols: ['date', 'document', 'amount', 'balance'],
      rows: [['2 March', 'slip 0412', '+ 85,000', '85,000'], ['6 March', 'slip 0431', '+ 120,000', '205,000'], ['11 March', 'payment', '− 100,000', '105,000'], ['15 March', 'slip 0467', '+ 140,000', '245,000'], ['20 March', 'slip 0489', '+ 90,000', '335,000'], ['27 March', 'payment', '− 200,000', '135,000']],
      alert: 'Line 5: the balance passes the limit, the till asks for the manager’s approval.',
      strip: { title: 'Paid, not yet collected · 200 bags of cement settled on 2 March', segs: ['50 collected 2 March', '80 collected 9 March', '70 to collect'], stats: 'in the yard 500 bags · reserved 70 · for sale 430' },
      tiles: [
        { big: '335,000 > 300,000', l1: 'the limit is passed at the fourth slip', l2: 'the sale waits for the manager’s approval', hot: true },
        { big: '1 statement per site', l1: 'slips, payments and balance, as of today', l2: 'sent to the customer, no notebook to copy' },
        { big: '70 bags reserved', l1: 'paid for, not yet collected', l2: 'they are no longer available for sale' },
      ],
      line1: 'The notebook says how much the customer owes; the account also says since when, for which site and how far they can go.',
      line2: 'Goods paid for and left in the yard are promised to the customer: they leave the stock for sale on the day of payment.',
      note: 'Constructed example · amounts, dates and limit invented to show the mechanism.',
    },
  },
  ar: {
    unites: {
      title: 'صنف واحد، ثلاث وحدات، مخزون واحد',
      alt: 'برغي يُشترى بالكرتونة من 20 علبة، أي 2000 قطعة، ويُباع بالعلبة من 100 قطعة وبالقطعة. المخزون يُحسب بالقطعة: كرتونتان و7 علب و40 قطعة تساوي 4740 قطعة. بيع 3 علب و25 قطعة يسحب 325 قطعة: يبقى 4415 قطعة، أي كرتونتان و4 علب و15 قطعة. والقاعدة نفسها للكابل المباع بالمتر: 3 بكرات من 100 متر و37 متراً تساوي 337 متراً؛ وبيع 12,5 متراً يُبقي 324,5 متراً.',
      header: `مثال مركَّب · برغي ${I('4 × 40')} يُشترى بالكرتونة ويُباع بالعلبة وبالقطعة · ليست أسعار السوق`,
      units: [
        { name: 'الكرتونة', conv: `= 20 علبة = ${I('2 000')} قطعة`, price: `شراء بـ ${I('9 000')} دج`, per: '4,50 دج للقطعة' },
        { name: 'العلبة', conv: '= 100 قطعة', price: 'تُباع بـ 650 دج', per: '6,50 دج للقطعة' },
        { name: 'القطعة', conv: 'وحدة المخزون', price: 'تُباع بـ 8 دج', per: '8,00 دج للقطعة' },
      ],
      links: [I('× 20'), I('× 100')],
      stockTitle: 'مخزون واحد، يُحسب بالقطعة', stockSub: 'كل بيع يسحب قطعاً، مهما كانت الوحدة المباعة',
      beforeLabel: 'قبل البيع', before: 'كرتونتان · 7 علب · 40 قطعة', beforeTotal: I('4 740'),
      sale: 'بيع في المحل: 3 علب + 25 قطعة', saleQty: `${I('− 325')} قطعة`,
      afterLabel: 'بعد البيع', after: 'كرتونتان · 4 علب · 15 قطعة', afterTotal: I('4 415'),
      cable: { a: 'القاعدة نفسها للكابل: بكرة من 100 متر، يُباع بالمتر', b: 'المخزون: 3 بكرات + 37 م = 337 م', c: 'بيع 12,5 م · الباقي 324,5 م' },
      tiles: [
        { big: 'صنف واحد، 3 وحدات', l1: 'كرتونة، علبة، قطعة: مخزون واحد', l2: 'بدل ثلاثة أصناف لا تتحادث' },
        { big: I('4 740 − 325 = 4 415'), l1: 'البيع يسحب قطعاً من المخزون نفسه', l2: 'الباقي كرتونتان، 4 علب، 15 قطعة', hot: true },
        { big: `${I('4,50 · 6,50 · 8,00')} دج`, l1: 'التكلفة، سعر العلبة، سعر القطعة', l2: 'الهامش يُقرأ لكل وحدة مباعة' },
      ],
      line1: 'ثلاثة أصناف منفصلة للبرغي نفسه تعطي ثلاثة مخزونات خاطئة؛ وصنف واحد بثلاث وحدات يعطي مخزوناً صحيحاً.',
      line2: 'قاعدة التحويل تُدخَل مرة واحدة، عند إنشاء الصنف، ونقطة البيع تتكفل بالباقي.',
      note: 'مثال مركَّب · الكميات والأسعار مخترَعة لبيان الحساب، وليست أسعار السوق.',
    },
    compte: {
      title: 'حساب الحرفي: سقف، كشف، و70 كيساً مدفوعاً ينتظر',
      alt: 'حساب حرفي خلال شهر، بسقف دَين قدره 300 ألف دينار. ستة أسطر: وصل 2 مارس، 85 ألفاً، الرصيد 85 ألفاً؛ وصل 6 مارس، 120 ألفاً، الرصيد 205 آلاف؛ دفعة 11 مارس، 100 ألف، الرصيد 105 آلاف؛ وصل 15 مارس، 140 ألفاً، الرصيد 245 ألفاً؛ وصل 20 مارس، 90 ألفاً، الرصيد 335 ألفاً، فوق السقف؛ دفعة 27 مارس، 200 ألف، الرصيد 135 ألفاً. وفي الأسفل 200 كيس إسمنت سُدِّدت يوم 2 مارس: 50 استُلمت في اليوم نفسه، و80 يوم 9 مارس، و70 باقية للاستلام؛ ومن 500 كيس في المستودع، 70 محجوزة و430 للبيع.',
      header: `مثال مركَّب · حرفي واحد، ورشة واحدة، شهر واحد · سقف الدَّين محدَّد بـ ${I('300 000')} دج`,
      limit: `السقف ${I('300 000')} دج`, days: ['2', '6', '11', '15', '20', '27 مارس'],
      stTitle: 'كشف الحساب · الحرفي أ · ورشة الفيلا', stSub: 'مارس 2027', cols: ['التاريخ', 'الوثيقة', 'المبلغ', 'الرصيد'],
      rows: [['2 مارس', `وصل ${I('0412')}`, I('+ 85 000'), I('85 000')], ['6 مارس', `وصل ${I('0431')}`, I('+ 120 000'), I('205 000')], ['11 مارس', 'دفعة', I('− 100 000'), I('105 000')], ['15 مارس', `وصل ${I('0467')}`, I('+ 140 000'), I('245 000')], ['20 مارس', `وصل ${I('0489')}`, I('+ 90 000'), I('335 000')], ['27 مارس', 'دفعة', I('− 200 000'), I('135 000')]],
      alert: 'السطر 5: الرصيد يتجاوز السقف، ونقطة البيع تطلب موافقة المسيّر.',
      strip: { title: 'مدفوع، لم يُستلَم بعد · 200 كيس إسمنت سُدِّدت يوم 2 مارس', segs: ['50 استُلمت يوم 2 مارس', '80 استُلمت يوم 9 مارس', '70 للاستلام'], stats: 'في المستودع 500 كيس · محجوزة 70 · للبيع 430' },
      tiles: [
        { big: I('335 000 > 300 000'), l1: 'السقف يُتجاوَز عند الوصل الرابع', l2: 'البيع ينتظر موافقة المسيّر', hot: true },
        { big: 'كشف لكل ورشة', l1: 'الوصولات والدفعات والرصيد، بتاريخ اليوم', l2: 'يُرسَل إلى الزبون، دون نسخ الدفتر' },
        { big: '70 كيساً محجوزاً', l1: 'مدفوعة، لم تُستلَم بعد', l2: 'لم تعد متاحة للبيع' },
      ],
      line1: 'الدفتر يقول كم على الزبون؛ والحساب يقول كذلك منذ متى، ولأي ورشة، وإلى أي حدّ يمكنه أن يصل.',
      line2: 'البضاعة المدفوعة المتروكة في المستودع موعودة للزبون: تخرج من المخزون المعروض للبيع يوم الدفع.',
      note: 'مثال مركَّب · المبالغ والتواريخ والسقف مخترَعة لبيان الآلية.',
    },
  },
};
