// Bespoke animated figures for the 2027 "we run out every month and over-order the rest" post.
//  rop():      one product at one depot: eight weeks of consumption bars, the
//              derived daily rate, the supplier lead time, the safety stock,
//              the reorder point, and a projected-stock line that crosses the
//              reorder point on a date; three formula tiles and the proposed
//              quantity. Bars grow, the projection draws, the marker appears.
//  proposal(): Monday's purchase proposal for one supplier: six lines with
//              available, reorder point, proposed quantity, rounding, cover
//              days and the manager's decision; a summary strip (minimum order
//              met, total, expected delivery, budget check) and the sending
//              state. Rows appear, decisions flip.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function draw(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{stroke-dashoffset:1000}${(at + dur).toFixed(1)}%,100%{stroke-dashoffset:0}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function growY(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleY(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleY(1)}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
const I = (x) => `⁦${x}⁩`;

export function rop(t, rtl) {
  const c = ctx(rtl); const P = 'rp'; const css = []; const H = 620;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  // left: consumption bars (8 weeks)
  const bx = 80, by = 120, bw = 420, bh = 180; const max = 200;
  s += text(c, bx, by - 12, t.histLabel, { size: 10, font: 'mono', fill: C.fg35, letter: 1.5, upper: true });
  s += line(c, bx, by + bh, bx + bw, by + bh, { stroke: C.line2 });
  const n = t.weeks.length; const colW = bw / n;
  t.weeks.forEach((w, i) => { const h = Math.round((w.v / max) * bh); const x = bx + i * colW + 8; s += `<g style="animation:${show(css, P, `b${i}`, 2 + i * 0.8)}"><g style="transform-box:fill-box;transform-origin:bottom;animation:${growY(css, P, `bg${i}`, 2 + i * 0.8, 2)}">` + rect(c, x, by + bh - h, colW - 16, h, { stroke: 'none', fill: w.hot ? C.accent : C.fg55 }) + '</g>' + text(c, x + (colW - 16) / 2, by + bh - h - 6, String(w.v), { size: 9, font: 'mono', fill: C.fg70, anchor: 'middle' }) + text(c, x + (colW - 16) / 2, by + bh + 14, w.l, { size: 8.5, font: 'mono', fill: C.fg35, anchor: 'middle' }) + '</g>'; });
  // average line
  const avgY = by + bh - Math.round((t.avg / max) * bh);
  s += `<g style="animation:${show(css, P, 'avg', 10)}">` + line(c, bx, avgY, bx + bw, avgY, { stroke: C.accent, dash: '4 3' }) + text(c, bx + bw, by - 12, t.avgLabel, { size: 9, font: 'mono', fill: C.accent, anchor: 'end' }) + '</g>';
  // right: projection chart (days 0..30)
  const px = 580, py = 120, pw = 540, ph = 180; const dX = (d) => px + (d / 30) * pw; const sY = (q) => py + ph - (q / t.pmax) * ph;
  s += text(c, px, py - 12, t.projLabel, { size: 10, font: 'mono', fill: C.fg35, letter: 1.5, upper: true });
  s += line(c, px, py + ph, px + pw, py + ph, { stroke: C.line2 }) + line(c, px, py, px, py + ph, { stroke: C.line });
  [0, 10, 20, 30].forEach((d) => { s += text(c, dX(d), py + ph + 14, t.dayLabel(d), { size: 8.5, font: 'mono', fill: C.fg35, anchor: 'middle' }); });
  // ROP line and safety line
  s += `<g style="animation:${show(css, P, 'ropl', 12)}">` + line(c, px, sY(t.rop), px + pw, sY(t.rop), { stroke: C.accent, dash: '4 3' }) + text(c, px + pw, sY(t.rop) - 6, t.ropLabel, { size: 9, font: 'mono', fill: C.accent, anchor: 'end' }) + '</g>';
  s += `<g style="animation:${show(css, P, 'ssl', 13)}">` + rect(c, px, sY(t.safety), pw, py + ph - sY(t.safety), { stroke: 'none', fill: 'rgba(242,181,68,0.10)' }) + text(c, px + 6, sY(t.safety) - 6, t.safetyLabel, { size: 9, font: 'mono', fill: C.fg55 }) + '</g>';
  // projection line (available declines at rate)
  const dayCross = (t.available - t.rop) / t.rate; const dayZero = Math.min(30, t.available / t.rate);
  const path = `M${c.X(dX(0))} ${sY(t.available)} L${c.X(dX(dayZero))} ${sY(Math.max(0, t.available - t.rate * dayZero))}`;
  s += `<path d="${path}" fill="none" stroke="${C.fg}" stroke-width="1.6" pathLength="1000" style="stroke-dashoffset:0;animation:${draw(css, P, 'proj', 14, 6)}"/>`;
  // order marker and arrival
  s += `<g style="animation:${show(css, P, 'ord', 21)}">` + line(c, dX(dayCross), py, dX(dayCross), py + ph, { stroke: C.accent }) + circle(c, dX(dayCross), sY(t.rop), 5, { fill: C.accent, stroke: 'none' }) + text(c, dX(dayCross) + (rtl ? -8 : 8), py + 14, t.orderLabel, { size: 9.5, font: 'mono', fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'arr', 24)}">` + rect(c, dX(dayCross), py + ph - 10, dX(dayCross + t.leadDays) - dX(dayCross), 6, { stroke: 'none', fill: C.accent }) + line(c, dX(dayCross + t.leadDays), py + 22, dX(dayCross + t.leadDays), py + ph - 10, { stroke: C.line2, dash: '3 3' }) + text(c, dX(dayCross + t.leadDays) + (rtl ? -6 : 6), py + 34, t.arrivalLabel, { size: 9, font: 'mono', fill: C.fg70 }) + '</g>';
  // tiles
  const ty = 348;
  t.tiles.forEach((k, i) => { const x = 80 + i * 262; s += `<g style="animation:${show(css, P, `k${i}`, 26 + i * 2)}">` + rect(c, x, ty, 250, 78, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? 'rgba(242,181,68,0.06)' : C.fill }) + text(c, x + 12, ty + 24, k.big, { size: 15, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ty + 42, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ty + 57, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + text(c, x + 12, ty + 70, k.l3, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  s += text(c, 80, 470, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, 490, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, 510, t.rule3, { size: 12.5, fill: C.fg }) + text(c, 80, 536, t.note, { size: 10, font: 'mono', fill: C.fg55 }) + text(c, 80, 552, t.note2, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"],svg path[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

export function proposal(t, rtl) {
  const c = ctx(rtl); const P = 'pp'; const css = []; const H = 600;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  const lx = 80, ly = 104; const cols = [80, 300, 390, 470, 560, 660, 760, 870];
  s += text(c, lx, ly, t.label, { size: 10, font: 'mono', fill: C.fg35, letter: 1.5, upper: true });
  t.cols.forEach((h, i) => { s += text(c, cols[i], ly + 22, h, { size: 9, font: 'mono', fill: C.fg35 }); });
  s += line(c, lx, ly + 30, 1120, ly + 30, { stroke: C.line2 });
  t.rows.forEach((r, i) => {
    const y = ly + 52 + i * 34; const at = 3 + i * 2; const col = r.dec === 'ok' ? C.fg70 : r.dec === 'cut' ? C.accent : C.fg35;
    s += `<g style="animation:${show(css, P, `r${i}`, at)}">` + line(c, lx, y + 12, 1120, y + 12, { stroke: C.line })
      + text(c, cols[0], y, r.p, { size: 10, fill: r.dec === 'drop' ? C.fg55 : C.fg }) + text(c, cols[0], y + 11, r.sub, { size: 7.5, font: 'mono', fill: C.fg35 })
      + text(c, cols[1], y, r.avail, { size: 9.5, font: 'mono', fill: C.fg70 }) + text(c, cols[2], y, r.rop, { size: 9.5, font: 'mono', fill: C.fg70 })
      + text(c, cols[3], y, r.qty, { size: 9.5, font: 'mono', fill: col }) + text(c, cols[4], y, r.round, { size: 9, font: 'mono', fill: C.fg55 }) + text(c, cols[5], y, r.cover, { size: 9.5, font: 'mono', fill: C.fg70 })
      + text(c, cols[6], y, r.amount, { size: 9.5, font: 'mono', fill: col }) + text(c, cols[7], y, r.decision, { size: 9, font: 'mono', fill: col }) + '</g>';
  });
  const sy = ly + 52 + t.rows.length * 34 + 16;
  t.summary.forEach((k, i) => { const x = 80 + i * 262; s += `<g style="animation:${show(css, P, `s${i}`, 18 + i * 2)}">` + rect(c, x, sy, 250, 60, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? 'rgba(242,181,68,0.06)' : C.fill }) + text(c, x + 12, sy + 24, k.big, { size: 14, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, sy + 41, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, sy + 54, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  const sty = sy + 76;
  s += `<g style="animation:${show(css, P, 'st', 28)}">` + rect(c, 80, sty, 1040, 30, { stroke: C.accent, fill: 'rgba(242,181,68,0.06)' }) + text(c, 92, sty + 19, t.state, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  s += text(c, 80, sty + 58, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, sty + 78, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, sty + 102, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    rop: {
      title: 'Quand commander, et combien : un produit, huit semaines de ventes, un délai fournisseur',
      alt: 'À gauche, huit barres de consommation hebdomadaire d’une huile de 5 litres au dépôt d’Alger, entre 110 et 160 unités, avec la moyenne de 135 par semaine, soit environ 19 unités par jour. À droite, la projection du stock disponible sur trente jours : il part de 360 unités et descend de 19 par jour ; une ligne pointillée marque le point de commande à 253 unités, consommation pendant le délai de dix jours plus un stock de sécurité de 60 ; la projection le croise au bout de six jours, le 16 novembre, et une barre montre le délai de dix jours jusqu’à la livraison prévue le 26. En bas, trois tuiles : le point de commande et sa formule, la quantité proposée de 436 unités pour couvrir quatre semaines au-delà, arrondie au carton de quatre, et le stock de sécurité de trois jours fixé par le gérant. Les données sont un exemple construit.',
      histLabel: 'Sorties par semaine · HT-FLEU-5 · dépôt Alger', weeks: [{ v: 120, l: 'S37' }, { v: 140, l: 'S38' }, { v: 110, l: 'S39' }, { v: 160, l: 'S40', hot: true }, { v: 130, l: 'S41' }, { v: 150, l: 'S42' }, { v: 125, l: 'S43' }, { v: 145, l: 'S44' }], avg: 135, avgLabel: 'moyenne 135 / sem. ≈ 19,3 / jour',
      projLabel: 'Stock disponible projeté · 30 jours', pmax: 420, available: 360, rate: 19.3, rop: 253, safety: 60, leadDays: 10, dayLabel: (d) => d === 0 ? '10 nov' : d === 10 ? '20 nov' : d === 20 ? '30 nov' : '10 déc',
      ropLabel: 'point de commande 253', safetyLabel: 'stock de sécurité 60 · 3 jours', orderLabel: 'commander le 16 nov', arrivalLabel: 'livraison 26 nov',
      tiles: [
        { big: '253 unités', l1: 'point de commande', l2: '19,3 / jour × 10 jours de délai = 193', l3: '+ sécurité 60 = 253', hot: true },
        { big: '436 unités', l1: 'quantité proposée', l2: 'cible 253 + 4 semaines (540) = 793', l3: '− disponible 360 = 433 → carton de 4 : 436', hot: true },
        { big: '3 jours', l1: 'stock de sécurité', l2: 'règle écrite par le gérant', l3: 'relevée à 5 jours avant l’été' },
        { big: '10 jours', l1: 'délai fournisseur', l2: 'médiane des 6 dernières réceptions', l3: 'pas la promesse du fournisseur' },
      ],
      rule: 'Le point de commande est la consommation pendant le délai, plus un stock de sécurité ; le disponible, stock moins réservé plus en commande, est comparé à ce point chaque nuit.',
      rule2: 'Le délai est mesuré sur les réceptions passées, pas promis par le fournisseur ; la consommation est lue dans le journal des mouvements, pas devinée.',
      rule3: 'La quantité couvre une période écrite, arrondie au conditionnement du fournisseur ; le gérant la change, et l’application recalcule la date de rupture.',
      note: 'produit, ventes, délais et seuils : exemple construit · formule du point de commande : consommation pendant le délai + stock de sécurité (définition courante)',
      note2: 'le stock de sécurité protège contre les variations de demande ; sa taille est une décision de l’entreprise, pas un résultat de calcul',
    },
    proposal: {
      title: 'La proposition du lundi pour un fournisseur : six lignes, un minimum, un budget, une décision',
      alt: 'Un tableau de six produits du même fournisseur avec, pour chacun, le disponible, le point de commande, la quantité proposée, l’arrondi au conditionnement, les jours de couverture après livraison, le montant et la décision du gérant : quatre lignes acceptées, une réduite parce que la promotion se termine, une retirée parce que le produit est en fin de vie. En dessous, quatre tuiles : minimum de commande du fournisseur atteint, total de 3 159 900 dinars, livraison attendue le 26 novembre, budget de la semaine respecté. En bas, l’état : commande envoyée au fournisseur par e-mail et WhatsApp à 9 h 12, en attente de confirmation. Les données sont un exemple construit.',
      label: 'Proposition · lundi 16 novembre · fournisseur Cevital · dépôt Alger', cols: ['produit', 'dispo', 'point', 'proposé', 'arrondi', 'couverture', 'montant', 'décision du gérant'],
      rows: [
        { p: 'Huile de table 5 L', sub: 'HT-FLEU-5 · 19,3 / j', avail: '360', rop: '253', qty: '436', round: 'carton 4', cover: '41 j', amount: '2 092 800', decision: 'acceptée', dec: 'ok' },
        { p: 'Huile de table 2 L', sub: 'HT-FLEU-2 · 8,1 / j', avail: '95', rop: '105', qty: '232', round: 'carton 8', cover: '40 j', amount: '487 200', decision: 'acceptée · déjà sous le point', dec: 'ok' },
        { p: 'Huile de table 1 L', sub: 'HT-FLEU-1 · 12,4 / j', avail: '410', rop: '160', qty: '0', round: '—', cover: '33 j', amount: '0', decision: 'rien à commander', dec: 'drop' },
        { p: 'Margarine 500 g', sub: 'MG-500 · 22,0 / j', avail: '300', rop: '286', qty: '624', round: 'carton 24', cover: '42 j', amount: '124 800', decision: 'réduite à 312 · promo finit le 20', dec: 'cut' },
        { p: 'Semoule 10 kg', sub: 'SM-10 · 15,5 / j', avail: '180', rop: '202', qty: '450', round: 'palette 50', cover: '41 j', amount: '517 500', decision: 'acceptée', dec: 'ok' },
        { p: 'Vinaigre 1 L', sub: 'VN-1 · 2,2 / j', avail: '20', rop: '29', qty: '72', round: 'carton 12', cover: '42 j', amount: '14 400', decision: 'retirée · fin de vie', dec: 'drop' },
      ],
      summary: [
        { big: '2 480 kg ≥ 2 000', l1: 'minimum de commande atteint', l2: 'règle du fournisseur, écrite sur sa fiche' },
        { big: '3 159 900 DA', l1: 'total après décisions', l2: '3 lignes acceptées, 1 réduite, 2 retirées', hot: true },
        { big: '26 nov', l1: 'livraison attendue', l2: 'délai médian 10 j · réception planifiée' },
        { big: '92 %', l1: 'du budget achats de la semaine', l2: 'plafond fixé par le gérant' },
      ],
      state: 'envoyée au fournisseur à 9 h 12 · e-mail + WhatsApp · numéro BC-A-2026-0188 · en attente de confirmation · réception attendue créée',
      rule: 'La proposition est calculée chaque nuit et groupée par fournisseur ; le gérant décide ligne par ligne, et chaque écart avec la proposition est noté avec sa raison.',
      rule2: 'Le minimum de commande, le conditionnement et le délai viennent de la fiche fournisseur ; le budget vient du gérant ; aucun des deux n’est dans le code.',
      note: 'produits, quantités, montants et dates : exemple construit · la réception attendue nourrit le délai mesuré de la prochaine proposition',
    },
  },
  en: {
    rop: {
      title: 'When to order, and how much: one product, eight weeks of sales, one supplier lead time',
      alt: 'On the left, eight bars of weekly consumption of a 5-litre oil at the Algiers depot, between 110 and 160 units, with the average of 135 per week, about 19 units a day. On the right, the projection of available stock over thirty days: it starts at 360 units and falls by 19 a day; a dotted line marks the reorder point at 253 units, consumption during the ten-day lead time plus a safety stock of 60; the projection crosses it after six days, on 16 November, and a bar shows the ten-day lead time until the expected delivery on the 26th. At the bottom, three tiles: the reorder point and its formula, the proposed quantity of 436 units to cover four more weeks, rounded to the case of four, and the three-day safety stock set by the manager. The data is a constructed example.',
      histLabel: 'Issues per week · HT-FLEU-5 · Algiers depot', weeks: [{ v: 120, l: 'W37' }, { v: 140, l: 'W38' }, { v: 110, l: 'W39' }, { v: 160, l: 'W40', hot: true }, { v: 130, l: 'W41' }, { v: 150, l: 'W42' }, { v: 125, l: 'W43' }, { v: 145, l: 'W44' }], avg: 135, avgLabel: 'average 135 / wk ≈ 19.3 / day',
      projLabel: 'Projected available stock · 30 days', pmax: 420, available: 360, rate: 19.3, rop: 253, safety: 60, leadDays: 10, dayLabel: (d) => d === 0 ? '10 Nov' : d === 10 ? '20 Nov' : d === 20 ? '30 Nov' : '10 Dec',
      ropLabel: 'reorder point 253', safetyLabel: 'safety stock 60 · 3 days', orderLabel: 'order on 16 Nov', arrivalLabel: 'delivery 26 Nov',
      tiles: [
        { big: '253 units', l1: 'reorder point', l2: '19.3 / day × 10 days lead time = 193', l3: '+ safety 60 = 253', hot: true },
        { big: '436 units', l1: 'proposed quantity', l2: 'target 253 + 4 weeks (540) = 793', l3: '− available 360 = 433 → case of 4: 436', hot: true },
        { big: '3 days', l1: 'safety stock', l2: 'rule written by the manager', l3: 'raised to 5 days before summer' },
        { big: '10 days', l1: 'supplier lead time', l2: 'median of the last 6 receptions', l3: 'not the supplier’s promise' },
      ],
      rule: 'The reorder point is consumption during the lead time, plus a safety stock; available, stock minus reserved plus on order, is compared with it every night.',
      rule2: 'The lead time is measured on past receptions, not promised by the supplier; consumption is read from the movement ledger, not guessed.',
      rule3: 'The quantity covers a written period, rounded to the supplier’s packaging; the manager changes it, and the application recomputes the stock-out date.',
      note: 'product, sales, lead times and thresholds: constructed example · reorder point formula: consumption during lead time + safety stock (common definition)',
      note2: 'safety stock protects against demand fluctuations; its size is a company decision, not a computed result',
    },
    proposal: {
      title: 'Monday’s proposal for one supplier: six lines, a minimum, a budget, a decision',
      alt: 'A table of six products from the same supplier with, for each, available, reorder point, proposed quantity, packaging rounding, days of cover after delivery, amount and the manager’s decision: four lines accepted, one reduced because the promotion ends, one removed because the product is end of life. Below, four tiles: supplier minimum order met, total of 3,159,900 dinars, delivery expected on 26 November, weekly budget respected. At the bottom, the state: order sent to the supplier by e-mail and WhatsApp at 9:12, awaiting confirmation. The data is a constructed example.',
      label: 'Proposal · Monday 16 November · supplier Cevital · Algiers depot', cols: ['product', 'avail.', 'point', 'proposed', 'rounding', 'cover', 'amount', 'manager’s decision'],
      rows: [
        { p: 'Table oil 5 L', sub: 'HT-FLEU-5 · 19.3 / d', avail: '360', rop: '253', qty: '436', round: 'case 4', cover: '41 d', amount: '2,092,800', decision: 'accepted', dec: 'ok' },
        { p: 'Table oil 2 L', sub: 'HT-FLEU-2 · 8.1 / d', avail: '95', rop: '105', qty: '232', round: 'case 8', cover: '40 d', amount: '487,200', decision: 'accepted · already below point', dec: 'ok' },
        { p: 'Table oil 1 L', sub: 'HT-FLEU-1 · 12.4 / d', avail: '410', rop: '160', qty: '0', round: '—', cover: '33 d', amount: '0', decision: 'nothing to order', dec: 'drop' },
        { p: 'Margarine 500 g', sub: 'MG-500 · 22.0 / d', avail: '300', rop: '286', qty: '624', round: 'case 24', cover: '42 d', amount: '124,800', decision: 'cut to 312 · promo ends on 20th', dec: 'cut' },
        { p: 'Semolina 10 kg', sub: 'SM-10 · 15.5 / d', avail: '180', rop: '202', qty: '450', round: 'pallet 50', cover: '41 d', amount: '517,500', decision: 'accepted', dec: 'ok' },
        { p: 'Vinegar 1 L', sub: 'VN-1 · 2.2 / d', avail: '20', rop: '29', qty: '72', round: 'case 12', cover: '42 d', amount: '14,400', decision: 'removed · end of life', dec: 'drop' },
      ],
      summary: [
        { big: '2,480 kg ≥ 2,000', l1: 'minimum order met', l2: 'supplier rule, written on its record' },
        { big: '3,159,900 DA', l1: 'total after decisions', l2: '3 lines accepted, 1 cut, 2 removed', hot: true },
        { big: '26 Nov', l1: 'expected delivery', l2: 'median lead time 10 d · reception planned' },
        { big: '92 %', l1: 'of the week’s purchasing budget', l2: 'cap set by the manager' },
      ],
      state: 'sent to the supplier at 9:12 · e-mail + WhatsApp · number PO-A-2026-0188 · awaiting confirmation · expected reception created',
      rule: 'The proposal is computed every night and grouped by supplier; the manager decides line by line, and every deviation from the proposal is recorded with its reason.',
      rule2: 'Minimum order, packaging and lead time come from the supplier record; the budget comes from the manager; neither is in the code.',
      note: 'products, quantities, amounts and dates: constructed example · the expected reception feeds the measured lead time of the next proposal',
    },
  },
  ar: {
    rop: {
      title: 'متى نطلب، وكم: منتج واحد، ثمانية أسابيع من المبيعات، مهلة مورد',
      alt: 'على جانب، ثمانية أعمدة للاستهلاك الأسبوعي لزيت 5 لترات في مستودع الجزائر، بين 110 و160 وحدة، بمتوسط 135 في الأسبوع أي نحو 19 وحدة في اليوم. على الجانب الآخر إسقاط المخزون المتاح على ثلاثين يوماً: ينطلق من 360 وحدة وينخفض 19 في اليوم؛ خط منقّط يشير إلى نقطة إعادة الطلب عند 253 وحدة، استهلاك مهلة العشرة أيام زائد مخزون أمان 60؛ يتقاطع معه الإسقاط بعد ستة أيام، في 16 نوفمبر، وشريط يُظهر مهلة العشرة أيام حتى التسليم المتوقع في 26. في الأسفل ثلاث بطاقات: نقطة إعادة الطلب وصيغتها، الكمية المقترحة 436 وحدة لتغطية أربعة أسابيع إضافية مقرَّبة إلى كرتون من أربع، ومخزون الأمان ثلاثة أيام الذي حدده المسيّر. والبيانات مثال مبني.',
      histLabel: `خروج أسبوعي · ${I('HT-FLEU-5')} · مستودع الجزائر`, weeks: [{ v: 120, l: 'أ37' }, { v: 140, l: 'أ38' }, { v: 110, l: 'أ39' }, { v: 160, l: 'أ40', hot: true }, { v: 130, l: 'أ41' }, { v: 150, l: 'أ42' }, { v: 125, l: 'أ43' }, { v: 145, l: 'أ44' }], avg: 135, avgLabel: 'متوسط 135 / أسبوع ≈ 19.3 / يوم',
      projLabel: 'المخزون المتاح المسقَط · 30 يوماً', pmax: 420, available: 360, rate: 19.3, rop: 253, safety: 60, leadDays: 10, dayLabel: (d) => d === 0 ? '10 نوف' : d === 10 ? '20 نوف' : d === 20 ? '30 نوف' : '10 ديس',
      ropLabel: 'نقطة إعادة الطلب 253', safetyLabel: 'مخزون أمان 60 · 3 أيام', orderLabel: 'الطلب في 16 نوف', arrivalLabel: 'التسليم 26 نوف',
      tiles: [
        { big: '253 وحدة', l1: 'نقطة إعادة الطلب', l2: `${I('19.3')} / يوم × 10 أيام مهلة = 193`, l3: '+ أمان 60 = 253', hot: true },
        { big: '436 وحدة', l1: 'الكمية المقترحة', l2: 'الهدف 253 + 4 أسابيع (540) = 793', l3: '− المتاح 360 = 433 ← كرتون 4: 436', hot: true },
        { big: '3 أيام', l1: 'مخزون الأمان', l2: 'قاعدة يكتبها المسيّر', l3: 'تُرفع إلى 5 أيام قبل الصيف' },
        { big: '10 أيام', l1: 'مهلة المورد', l2: 'وسيط آخر 6 استلامات', l3: 'لا وعد المورد' },
      ],
      rule: 'نقطة إعادة الطلب هي الاستهلاك خلال المهلة زائد مخزون أمان؛ والمتاح، المخزون ناقص المحجوز زائد المطلوب، يُقارَن بها كل ليلة.',
      rule2: 'المهلة تُقاس على الاستلامات الماضية لا يعد بها المورد؛ والاستهلاك يُقرأ من سجل الحركات لا يُخمَّن.',
      rule3: 'الكمية تغطي فترة مكتوبة مقرَّبة إلى تعبئة المورد؛ والمسيّر يغيّرها فيعيد التطبيق حساب تاريخ النفاد.',
      note: 'المنتج والمبيعات والمهل والعتبات: مثال مبني · صيغة نقطة إعادة الطلب: الاستهلاك خلال المهلة + مخزون الأمان (تعريف شائع)',
      note2: 'مخزون الأمان يحمي من تقلبات الطلب؛ وحجمه قرار للشركة لا نتيجة حساب',
    },
    proposal: {
      title: 'اقتراح الاثنين لمورد واحد: ستة أسطر، حد أدنى، ميزانية، قرار',
      alt: 'جدول ستة منتجات من المورد نفسه لكل منها المتاح ونقطة إعادة الطلب والكمية المقترحة والتقريب إلى التعبئة وأيام التغطية بعد التسليم والمبلغ وقرار المسيّر: أربعة أسطر مقبولة، واحد مخفَّض لأن الترويج ينتهي، وواحد محذوف لأن المنتج في نهاية عمره. تحته أربع بطاقات: الحد الأدنى لطلب المورد محقَّق، مجموع 3,159,900 دينار، تسليم متوقع في 26 نوفمبر، ميزانية الأسبوع محترمة. في الأسفل الحالة: طلبية أُرسلت إلى المورد بالبريد وWhatsApp عند 09:12، بانتظار التأكيد. والبيانات مثال مبني.',
      label: 'اقتراح · الاثنين 16 نوفمبر · المورد سيفيتال · مستودع الجزائر', cols: ['المنتج', 'المتاح', 'النقطة', 'المقترح', 'التقريب', 'التغطية', 'المبلغ', 'قرار المسيّر'],
      rows: [
        { p: 'زيت مائدة 5 ل', sub: `${I('HT-FLEU-5')} · ${I('19.3')} / ي`, avail: '360', rop: '253', qty: '436', round: 'كرتون 4', cover: '41 ي', amount: I('2,092,800'), decision: 'مقبول', dec: 'ok' },
        { p: 'زيت مائدة 2 ل', sub: `${I('HT-FLEU-2')} · ${I('8.1')} / ي`, avail: '95', rop: '105', qty: '232', round: 'كرتون 8', cover: '40 ي', amount: I('487,200'), decision: 'مقبول · تحت النقطة أصلاً', dec: 'ok' },
        { p: 'زيت مائدة 1 ل', sub: `${I('HT-FLEU-1')} · ${I('12.4')} / ي`, avail: '410', rop: '160', qty: '0', round: '—', cover: '33 ي', amount: '0', decision: 'لا شيء يُطلب', dec: 'drop' },
        { p: 'مرغرين 500 غ', sub: `${I('MG-500')} · ${I('22.0')} / ي`, avail: '300', rop: '286', qty: '624', round: 'كرتون 24', cover: '42 ي', amount: I('124,800'), decision: 'مخفَّض إلى 312 · الترويج ينتهي في 20', dec: 'cut' },
        { p: 'سميد 10 كغ', sub: `${I('SM-10')} · ${I('15.5')} / ي`, avail: '180', rop: '202', qty: '450', round: 'طبلية 50', cover: '41 ي', amount: I('517,500'), decision: 'مقبول', dec: 'ok' },
        { p: 'خل 1 ل', sub: `${I('VN-1')} · ${I('2.2')} / ي`, avail: '20', rop: '29', qty: '72', round: 'كرتون 12', cover: '42 ي', amount: I('14,400'), decision: 'محذوف · نهاية عمر', dec: 'drop' },
      ],
      summary: [
        { big: I('2,480 kg ≥ 2,000'), l1: 'الحد الأدنى للطلب محقَّق', l2: 'قاعدة المورد مكتوبة على بطاقته' },
        { big: I('3,159,900 DA'), l1: 'المجموع بعد القرارات', l2: '3 أسطر مقبولة، 1 مخفَّض، 2 محذوفان', hot: true },
        { big: '26 نوف', l1: 'التسليم المتوقع', l2: 'مهلة وسيطة 10 ي · استلام مخطط' },
        { big: '92 ٪', l1: 'من ميزانية مشتريات الأسبوع', l2: 'سقف يحدده المسيّر' },
      ],
      state: `أُرسلت إلى المورد عند 09:12 · بريد + WhatsApp · رقم ${I('BC-A-2026-0188')} · بانتظار التأكيد · استلام متوقع منشأ`,
      rule: 'يُحسب الاقتراح كل ليلة ويُجمَّع حسب المورد؛ ويقرر المسيّر سطراً سطراً، وكل انحراف عن الاقتراح يُسجَّل بسببه.',
      rule2: 'الحد الأدنى للطلب والتعبئة والمهلة من بطاقة المورد؛ والميزانية من المسيّر؛ ولا أحد منهما في الكود.',
      note: 'المنتجات والكميات والمبالغ والتواريخ: مثال مبني · الاستلام المتوقع يغذي المهلة المقيسة للاقتراح التالي',
    },
  },
};
