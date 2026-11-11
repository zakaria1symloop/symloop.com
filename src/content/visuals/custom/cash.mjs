// Bespoke animated figures for the 2027 "the till never balances" post.
//  session(): one cash session as a waterfall: opening float, cash sales, cash
//             refunds, paid-in, paid-out, safe drop → expected in drawer, then the
//             blind count and the gap against a written tolerance; a side panel with
//             the non-cash payments of the same session; three tiles. Bars grow in order.
//  gaps():    a month of closing gaps: one dot per session per cashier on a gap axis
//             with the tolerance band, the count of drawer openings without sale per
//             cashier, and three tiles; one cashier's pattern accented. Dots appear.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function draw(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{stroke-dashoffset:1000}${(at + dur).toFixed(1)}%,100%{stroke-dashoffset:0}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function grow(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
const I = (x) => `⁦${x}⁩`;

export function session(t, rtl) {
  const c = ctx(rtl); const P = 'cs'; const css = []; const H = 670;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: 'rgba(242,181,68,0.06)' }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  // waterfall
  const lx = 80, ax = 330, aw = 400, ay = 150; const MAX = t.max; const vX = (v) => ax + (v / MAX) * aw;
  t.ticks.forEach((tk) => { s += line(c, vX(tk.v), ay - 4, vX(tk.v), ay + t.rows.length * 40 + 2, { stroke: C.line }) + text(c, vX(tk.v), ay - 10, tk.l, { size: 8.5, font: 'mono', fill: C.fg35, anchor: 'middle' }); });
  let run = 0;
  t.rows.forEach((r, i) => {
    const y = ay + 4 + i * 40; const at = 4 + i * 1.6;
    let from = run, to = run; if (r.from !== undefined) { from = r.from; to = r.to; } else if (r.kind === 'set') { from = 0; to = r.v; run = r.v; } else if (r.kind === 'mark') { from = 0; to = r.v; } else { to = run + r.v; from = run; run = to; }
    const x0 = vX(Math.min(from, to)), x1 = vX(Math.max(from, to));
    const neg = r.v < 0 && r.kind !== 'mark';
    const fill = r.kind === 'mark' ? (r.hot ? 'rgba(242,181,68,0.22)' : 'rgba(255,255,255,0.10)') : neg ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.14)';
    s += `<g style="animation:${show(css, P, `r${i}`, at)}">` + text(c, lx, y + 13, r.name, { size: 10.5, fill: r.hot ? C.accent : C.fg, weight: r.kind === 'mark' ? 500 : 400 }) + text(c, lx, y + 26, r.sub, { size: 8, font: 'mono', fill: C.fg55 }) + line(c, lx, y + 34, 1120, y + 34, { stroke: C.line }) + '</g>';
    s += `<g style="transform-box:fill-box;transform-origin:${(neg ? !rtl : rtl) ? 'right' : 'left'};animation:${grow(css, P, `g${i}`, at + 0.4, 1.2)}">` + rect(c, x0, y + 2, Math.max(x1 - x0, 2), 22, { stroke: r.kind === 'mark' ? (r.hot ? C.accent : C.line2) : neg ? C.fg35 : C.line2, fill, dash: r.kind === 'mark' && !r.hot ? '3 3' : undefined }) + '</g>';
    s += `<g style="animation:${show(css, P, `v${i}`, at + 1.2)}">` + text(c, 810, y + 16, r.amount, { size: 10, font: 'mono', fill: r.hot ? C.accent : neg ? C.fg55 : C.fg, anchor: 'end', weight: r.kind === 'mark' ? 500 : 400 }) + '</g>';
  });
  // side panel: non-cash
  const px = 850, pw = 270, py = ay;
  s += `<g style="animation:${show(css, P, 'p', 14)}">` + rect(c, px, py, pw, 150, { stroke: C.line2, fill: C.fill }) + text(c, px + 12, py + 20, t.panel.title, { size: 10.5, fill: C.fg, weight: 500 }) + text(c, px + 12, py + 34, t.panel.sub, { size: 8, font: 'mono', fill: C.fg55 });
  t.panel.rows.forEach((r, i) => { const y = py + 54 + i * 22; s += text(c, px + 12, y, r.l, { size: 9.5, fill: C.fg70 }) + text(c, px + pw - 12, y, r.v, { size: 9.5, font: 'mono', fill: C.fg, anchor: 'end' }); });
  s += text(c, px + 12, py + 140, t.panel.note, { size: 8, font: 'mono', fill: C.fg55 }) + '</g>';
  // denominations panel
  const dy = py + 166;
  s += `<g style="animation:${show(css, P, 'd', 17)}">` + rect(c, px, dy, pw, 120, { stroke: C.accent, fill: 'rgba(242,181,68,0.06)' }) + text(c, px + 12, dy + 20, t.denom.title, { size: 10.5, fill: C.accent, weight: 500 }) + text(c, px + 12, dy + 34, t.denom.sub, { size: 8, font: 'mono', fill: C.fg55 });
  t.denom.rows.forEach((r, i) => { const col = i % 2, row = Math.floor(i / 2); const x = px + 12 + col * 130, y = dy + 54 + row * 18; s += text(c, x, y, r, { size: 9, font: 'mono', fill: C.fg70 }); });
  s += '</g>';
  const ky = ay + t.rows.length * 40 + 18;
  t.tiles.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, 22 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? 'rgba(242,181,68,0.06)' : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  s += text(c, 80, ky + 86, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

export function gaps(t, rtl) {
  const c = ctx(rtl); const P = 'cg'; const css = []; const H = 600;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  const lx = 80, ax = 330, aw = 560, ay = 120; const MIN = -3000, MAX = 3000; const gX = (v) => ax + ((v - MIN) / (MAX - MIN)) * aw; const rowH = 62;
  s += text(c, lx, ay - 14, t.label, { size: 9, font: 'mono', fill: C.fg35, letter: 1.2, upper: true });
  // tolerance band
  s += `<g style="animation:${show(css, P, 'tb', 2)}">` + rect(c, gX(-t.tol), ay - 4, gX(t.tol) - gX(-t.tol), t.rows.length * rowH, { stroke: 'none', fill: 'rgba(255,255,255,0.06)' }) + text(c, gX(0), ay - 10 + t.rows.length * rowH + 22, t.tolLabel, { size: 8.5, font: 'mono', fill: C.fg55, anchor: 'middle' }) + '</g>';
  t.ticks.forEach((tk) => { s += line(c, gX(tk.v), ay - 4, gX(tk.v), ay + t.rows.length * rowH, { stroke: tk.v === 0 ? C.line2 : C.line }) + text(c, gX(tk.v), ay - 10 + t.rows.length * rowH + 10, tk.l, { size: 8.5, font: 'mono', fill: C.fg35, anchor: 'middle' }); });
  t.rows.forEach((r, i) => {
    const y = ay + i * rowH; const at = 4 + i * 3;
    s += `<g style="animation:${show(css, P, `n${i}`, at)}">` + text(c, lx, y + 20, r.name, { size: 11, fill: r.hot ? C.accent : C.fg, weight: 500 }) + text(c, lx, y + 34, r.sub, { size: 8.5, font: 'mono', fill: C.fg55 }) + text(c, lx, y + 47, r.sub2, { size: 8.5, font: 'mono', fill: r.hot ? C.accent : C.fg55 }) + line(c, lx, y + rowH - 6, 1120, y + rowH - 6, { stroke: C.line }) + '</g>';
    r.pts.forEach((v, k) => { const out = Math.abs(v) > t.tol; const jit = ((k * 7) % 5) * 5 - 10; s += `<g style="animation:${show(css, P, `p${i}${k}`, at + 0.6 + k * 0.18)}">` + circle(c, gX(v), y + 26 + jit, out ? 4.5 : 3.5, { fill: out ? C.accent : 'rgba(255,255,255,0.55)', stroke: out ? C.accent : 'none' }) + '</g>'; });
    // no-sale openings
    s += `<g style="animation:${show(css, P, `o${i}`, at + 2.5)}">` + text(c, 1120, y + 20, r.open, { size: 12, font: 'mono', fill: r.hot ? C.accent : C.fg, anchor: 'end', weight: 500 }) + text(c, 1120, y + 34, t.openLabel, { size: 7.5, font: 'mono', fill: C.fg55, anchor: 'end' }) + '</g>';
  });
  const ky = ay + t.rows.length * rowH + 30;
  t.tiles.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, 20 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? 'rgba(242,181,68,0.06)' : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  s += text(c, 80, ky + 86, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

const NB = ' ';
export const STRINGS = {
  fr: {
    session: {
      title: 'Une session de caisse : du fond d’ouverture à l’écart',
      alt: 'Un bandeau : session S-1104, caisse 2, caissière Amina, ouverte le 11 novembre à 8 h 02 et fermée à 20 h 14, 148 tickets. Un graphique en cascade de sept lignes sur un axe de 0 à 350 000 dinars : fond d’ouverture compté 20 000 ; ventes en espèces plus 312 450 ; remboursements en espèces moins 6 200 ; entrée de monnaie depuis le coffre plus 10 000 ; sorties pour achats moins 3 500 avec photo du reçu ; remise au coffre moins 200 000 à 14 h 30 ; attendu en tiroir 132 750 calculé. Puis le comptage à l’aveugle 131 750 et l’écart moins 1 000 en accent, au-delà de la tolérance de 500, avec motif et approbation du gérant. Un panneau à droite : les paiements non espèces de la même session, carte 84 300, paiement en ligne 12 900, rapprochés à part. Un second panneau : le comptage par coupures. Trois tuiles : attendu 132 750 calculé et caché, compté 131 750 en 4 minutes, écart moins 1 000 motif rendu de monnaie signé par le gérant. Montants et noms sont un exemple construit.',
      header: 'Session S-1104 · caisse 2 · Amina · 11 nov. 08:02 → 20:14 · 148 tickets · un paiement ne peut pas exister hors d’une session',
      max: 350000, ticks: [{ v: 0, l: '0' }, { v: 100000, l: '100 k' }, { v: 200000, l: '200 k' }, { v: 300000, l: '300 k DA' }],
      rows: [
        { name: 'Fond d’ouverture', sub: 'compté par coupures, signé à 08:02', v: 20000, kind: 'set', amount: `20${NB}000` },
        { name: 'Ventes en espèces', sub: '148 tickets, chacun lié à la session', v: 312450, amount: `+ 312${NB}450` },
        { name: 'Remboursements en espèces', sub: '2 retours · ticket d’origine obligatoire', v: -6200, amount: `− 6${NB}200` },
        { name: 'Entrée : monnaie du coffre', sub: 'approuvée par le gérant · 10:40', v: 10000, amount: `+ 10${NB}000` },
        { name: 'Sortie : achats', sub: 'motif codé · photo du reçu · 12:15', v: -3500, amount: `− 3${NB}500` },
        { name: 'Remise au coffre', sub: '14:30 · signée des deux côtés', v: -200000, amount: `− 200${NB}000` },
        { name: 'Attendu en tiroir', sub: 'calculé, caché au caissier avant le comptage', v: 132750, kind: 'mark', amount: `= 132${NB}750` },
        { name: 'Compté à l’aveugle', sub: 'par coupures · 20:14 · 4 min', v: 131750, kind: 'mark', amount: `131${NB}750` },
        { name: 'Écart', sub: 'tolérance 500 · motif : rendu de monnaie · approuvé', v: -1000, from: 131750, to: 132750, kind: 'mark', hot: true, amount: `− 1${NB}000` },
      ],
      panel: { title: 'Même session, hors espèces', sub: 'rapprochés à part, jamais dans le tiroir', rows: [{ l: 'Carte · TPE', v: `84${NB}300` }, { l: 'Paiement en ligne', v: `12${NB}900` }, { l: 'Crédit client', v: `21${NB}000` }, { l: 'Total session', v: `430${NB}650` }], note: 'le TPE se rapproche sur son relevé' },
      denom: { title: 'Comptage par coupures · 131 750', sub: 'saisi sans voir l’attendu', rows: ['2 000 × 41', '1 000 × 32', '500 × 29', '200 × 12', '100 × 6', 'pièces : 350'] },
      tiles: [
        { big: `132${NB}750 attendu`, l1: 'calculé depuis les mouvements, pas recopié', l2: 'caché jusqu’à la fin du comptage' },
        { big: `131${NB}750 compté`, l1: 'par coupures, en 4 minutes', l2: 'signé par la caissière' },
        { big: `− 1${NB}000 d’écart`, l1: 'au-delà de la tolérance de 500', l2: 'motif codé + approbation du gérant, signée', hot: true },
      ],
      rule: 'L’attendu est calculé depuis les mouvements de la session ; le caissier compte sans le voir ; l’écart est signé par deux personnes.',
      rule2: 'Les paiements non espèces sont dans la session, mais pas dans le tiroir : ils se rapprochent sur leur propre relevé.',
      note: 'Montants, horaires, coupures et noms sont un exemple construit ; la tolérance et le seuil d’approbation sont des décisions du gérant.',
    },
    gaps: {
      title: 'Un mois d’écarts : quatre caissiers, 72 sessions, une tendance',
      alt: 'Quatre lignes, une par caissier, avec un point par session de fermeture sur un axe d’écart de moins 3 000 à plus 3 000 dinars, une bande de tolérance de plus ou moins 500 grisée, et à droite le nombre d’ouvertures du tiroir sans vente. Amina, 22 sessions, écart médian moins 50, 2 hors tolérance, 6 ouvertures sans vente. Karim, 20 sessions, médian plus 50, 0 hors tolérance, 4 ouvertures. Nadia, en accent, 18 sessions, médian moins 400, 7 hors tolérance presque toutes négatives, 31 ouvertures sans vente. Yacine, 12 sessions, médian plus 300, 1 hors tolérance, 5 ouvertures. Trois tuiles : 72 sessions fermées ; 10 hors tolérance dont 7 pour une caissière ; 46 ouvertures sans vente dont 31 pour la même. Les données sont un exemple construit.',
      label: 'Écart à la fermeture · une session = un point · bande = tolérance ± 500 DA', tol: 500, tolLabel: 'tolérance ± 500', openLabel: 'ouvertures sans vente',
      ticks: [{ v: -3000, l: '− 3 000' }, { v: -2000, l: '− 2 000' }, { v: -1000, l: '− 1 000' }, { v: 0, l: '0' }, { v: 1000, l: '+ 1 000' }, { v: 2000, l: '+ 2 000' }, { v: 3000, l: '+ 3 000' }],
      rows: [
        { name: 'Amina · caisse 2', sub: '22 sessions · médiane − 50', sub2: '2 hors tolérance', pts: [-100, 50, -300, 0, -150, 200, -50, -700, 100, -200, 0, -100, 300, -1000, 50, -250, 0, -100, 150, -50, -400, 100], open: '6' },
        { name: 'Karim · caisse 1', sub: '20 sessions · médiane + 50', sub2: '0 hors tolérance', pts: [50, 100, 0, -50, 200, 50, 0, 150, -100, 50, 100, 0, 250, 50, -50, 0, 100, 50, -150, 100], open: '4' },
        { name: 'Nadia · caisses 1 et 3', sub: '18 sessions · médiane − 400', sub2: '7 hors tolérance, presque toutes négatives', hot: true, pts: [-900, -1200, -300, -1500, -400, -200, -2100, -450, -350, -1800, -400, -250, -2600, -300, -100, -1300, -150, 100], open: '31' },
        { name: 'Yacine · caisse 3', sub: '12 sessions · médiane + 300', sub2: '1 hors tolérance', pts: [300, 450, 200, 0, 350, 600, 250, 100, 400, 300, 150, 500], open: '5' },
      ],
      tiles: [
        { big: '72 sessions', l1: 'fermées avec comptage à l’aveugle', l2: 'trois caisses, quatre caissiers, un mois' },
        { big: '10 hors tolérance', l1: 'dont 7 pour une même caissière', l2: 'et toutes négatives : ce n’est pas du hasard', hot: true },
        { big: '46 ouvertures sans vente', l1: 'dont 31 pour la même', l2: 'chaque ouverture est un événement journalisé' },
      ],
      rule: 'Un écart isolé est une erreur ; une série d’écarts du même signe chez la même personne est une tendance, et le tableau la montre sans accuser.',
      rule2: 'L’ouverture du tiroir sans vente est journalisée à chaque fois ; le gérant lit les compteurs, pas les rumeurs.',
      note: 'Caissiers, sessions, écarts et compteurs sont un exemple construit ; la tolérance est une décision du gérant.',
    },
  },
  en: {
    session: {
      title: 'One cash session: from opening float to gap',
      alt: 'A strip: session S-1104, till 2, cashier Amina, opened 11 November at 08:02 and closed at 20:14, 148 receipts. A seven-row waterfall on a 0 to 350,000 dinar axis: counted opening float 20,000; cash sales plus 312,450; cash refunds minus 6,200; change from the safe plus 10,000; purchases out minus 3,500 with receipt photo; safe drop minus 200,000 at 14:30; expected in drawer 132,750 computed. Then the blind count 131,750 and the gap minus 1,000 accented, beyond the 500 tolerance, with reason and manager approval. A right panel: the non-cash payments of the same session, card 84,300, online 12,900, reconciled separately. A second panel: the count by denomination. Three tiles: expected 132,750 computed and hidden, counted 131,750 in 4 minutes, gap minus 1,000 reason change-giving signed by the manager. Amounts and names are a constructed example.',
      header: 'Session S-1104 · till 2 · Amina · 11 Nov 08:02 → 20:14 · 148 receipts · a payment cannot exist outside a session',
      max: 350000, ticks: [{ v: 0, l: '0' }, { v: 100000, l: '100k' }, { v: 200000, l: '200k' }, { v: 300000, l: '300k DA' }],
      rows: [
        { name: 'Opening float', sub: 'counted by denomination, signed at 08:02', v: 20000, kind: 'set', amount: '20,000' },
        { name: 'Cash sales', sub: '148 receipts, each linked to the session', v: 312450, amount: '+ 312,450' },
        { name: 'Cash refunds', sub: '2 returns · original receipt required', v: -6200, amount: '− 6,200' },
        { name: 'Paid in: change from the safe', sub: 'approved by the manager · 10:40', v: 10000, amount: '+ 10,000' },
        { name: 'Paid out: purchases', sub: 'coded reason · receipt photo · 12:15', v: -3500, amount: '− 3,500' },
        { name: 'Safe drop', sub: '14:30 · signed on both sides', v: -200000, amount: '− 200,000' },
        { name: 'Expected in drawer', sub: 'computed, hidden from the cashier before the count', v: 132750, kind: 'mark', amount: '= 132,750' },
        { name: 'Blind count', sub: 'by denomination · 20:14 · 4 min', v: 131750, kind: 'mark', amount: '131,750' },
        { name: 'Gap', sub: 'tolerance 500 · reason: change-giving · approved', v: -1000, from: 131750, to: 132750, kind: 'mark', hot: true, amount: '− 1,000' },
      ],
      panel: { title: 'Same session, non-cash', sub: 'reconciled separately, never in the drawer', rows: [{ l: 'Card · terminal', v: '84,300' }, { l: 'Online payment', v: '12,900' }, { l: 'Customer credit', v: '21,000' }, { l: 'Session total', v: '430,650' }], note: 'the terminal reconciles on its own statement' },
      denom: { title: 'Count by denomination · 131,750', sub: 'entered without seeing the expected', rows: ['2,000 × 41', '1,000 × 32', '500 × 29', '200 × 12', '100 × 6', 'coins: 350'] },
      tiles: [
        { big: '132,750 expected', l1: 'computed from the movements, not copied', l2: 'hidden until the count is done' },
        { big: '131,750 counted', l1: 'by denomination, in 4 minutes', l2: 'signed by the cashier' },
        { big: '− 1,000 gap', l1: 'beyond the 500 tolerance', l2: 'coded reason + manager approval, signed', hot: true },
      ],
      rule: 'The expected amount is computed from the session’s movements; the cashier counts without seeing it; the gap is signed by two people.',
      rule2: 'Non-cash payments are in the session but not in the drawer: they reconcile on their own statement.',
      note: 'Amounts, times, denominations and names are a constructed example; tolerance and approval threshold are the manager’s decisions.',
    },
    gaps: {
      title: 'A month of gaps: four cashiers, 72 sessions, one pattern',
      alt: 'Four rows, one per cashier, with one dot per closing session on a gap axis from minus 3,000 to plus 3,000 dinars, a shaded tolerance band of plus or minus 500, and on the right the number of drawer openings without a sale. Amina, 22 sessions, median gap minus 50, 2 out of tolerance, 6 openings without sale. Karim, 20 sessions, median plus 50, 0 out of tolerance, 4 openings. Nadia, accented, 18 sessions, median minus 400, 7 out of tolerance almost all negative, 31 openings without sale. Yacine, 12 sessions, median plus 300, 1 out of tolerance, 5 openings. Three tiles: 72 sessions closed; 10 out of tolerance, 7 of them for one cashier; 46 openings without sale, 31 for the same one. The data is a constructed example.',
      label: 'Closing gap · one session = one dot · band = tolerance ± 500 DA', tol: 500, tolLabel: 'tolerance ± 500', openLabel: 'openings without sale',
      ticks: [{ v: -3000, l: '− 3,000' }, { v: -2000, l: '− 2,000' }, { v: -1000, l: '− 1,000' }, { v: 0, l: '0' }, { v: 1000, l: '+ 1,000' }, { v: 2000, l: '+ 2,000' }, { v: 3000, l: '+ 3,000' }],
      rows: [
        { name: 'Amina · till 2', sub: '22 sessions · median − 50', sub2: '2 out of tolerance', pts: [-100, 50, -300, 0, -150, 200, -50, -700, 100, -200, 0, -100, 300, -1000, 50, -250, 0, -100, 150, -50, -400, 100], open: '6' },
        { name: 'Karim · till 1', sub: '20 sessions · median + 50', sub2: '0 out of tolerance', pts: [50, 100, 0, -50, 200, 50, 0, 150, -100, 50, 100, 0, 250, 50, -50, 0, 100, 50, -150, 100], open: '4' },
        { name: 'Nadia · tills 1 and 3', sub: '18 sessions · median − 400', sub2: '7 out of tolerance, almost all negative', hot: true, pts: [-900, -1200, -300, -1500, -400, -200, -2100, -450, -350, -1800, -400, -250, -2600, -300, -100, -1300, -150, 100], open: '31' },
        { name: 'Yacine · till 3', sub: '12 sessions · median + 300', sub2: '1 out of tolerance', pts: [300, 450, 200, 0, 350, 600, 250, 100, 400, 300, 150, 500], open: '5' },
      ],
      tiles: [
        { big: '72 sessions', l1: 'closed with a blind count', l2: 'three tills, four cashiers, one month' },
        { big: '10 out of tolerance', l1: '7 of them for the same cashier', l2: 'and all negative: that is not chance', hot: true },
        { big: '46 openings without sale', l1: '31 for the same one', l2: 'every opening is a logged event' },
      ],
      rule: 'One gap is a mistake; a run of same-sign gaps for the same person is a pattern, and the board shows it without accusing.',
      rule2: 'Opening the drawer without a sale is logged every time; the manager reads counters, not rumours.',
      note: 'Cashiers, sessions, gaps and counters are a constructed example; the tolerance is the manager’s decision.',
    },
  },
  ar: {
    session: {
      title: 'جلسة صندوق واحدة: من رصيد الافتتاح إلى الفارق',
      alt: 'شريط: الجلسة S-1104، الصندوق 2، أمينة الصندوق أمينة، فُتحت في 11 نوفمبر الساعة 08:02 وأُغلقت 20:14، 148 تذكرة. مخطط شلالي من سبعة أسطر على محور من 0 إلى 350,000 دينار: رصيد افتتاح معدود 20,000؛ مبيعات نقدية زائد 312,450؛ إرجاعات نقدية ناقص 6,200؛ دخول فكة من الخزنة زائد 10,000؛ خروج لمشتريات ناقص 3,500 بصورة الوصل؛ إيداع في الخزنة ناقص 200,000 الساعة 14:30؛ متوقع في الدرج 132,750 محسوب. ثم العدّ الأعمى 131,750 والفارق ناقص 1,000 مميزاً، بعد سماحية 500، بسبب وموافقة المسيّر. لوحة على اليسار: المدفوعات غير النقدية للجلسة نفسها، بطاقة 84,300، دفع إلكتروني 12,900، تُسوّى على حدة. لوحة ثانية: العدّ بالفئات. ثلاث بطاقات: متوقع 132,750 محسوب ومخفي، معدود 131,750 في 4 دقائق، فارق ناقص 1,000 بسبب إرجاع فكة موقَّع من المسيّر. المبالغ والأسماء مثال مبني.',
      header: `الجلسة ${I('S-1104')} · الصندوق ${I('2')} · أمينة · ${I('11')} نوفمبر ${I('08:02 → 20:14')} · ${I('148')} تذكرة · لا يمكن أن توجد دفعة خارج جلسة`,
      max: 350000, ticks: [{ v: 0, l: '0' }, { v: 100000, l: I('100k') }, { v: 200000, l: I('200k') }, { v: 300000, l: I('300k DA') }],
      rows: [
        { name: 'رصيد الافتتاح', sub: `معدود بالفئات، موقَّع ${I('08:02')}`, v: 20000, kind: 'set', amount: I('20,000') },
        { name: 'مبيعات نقدية', sub: `${I('148')} تذكرة، كل واحدة مرتبطة بالجلسة`, v: 312450, amount: I('+ 312,450') },
        { name: 'إرجاعات نقدية', sub: `${I('2')} إرجاع · التذكرة الأصلية إلزامية`, v: -6200, amount: I('− 6,200') },
        { name: 'دخول: فكة من الخزنة', sub: `موافقة المسيّر · ${I('10:40')}`, v: 10000, amount: I('+ 10,000') },
        { name: 'خروج: مشتريات', sub: `سبب مرمَّز · صورة الوصل · ${I('12:15')}`, v: -3500, amount: I('− 3,500') },
        { name: 'إيداع في الخزنة', sub: `${I('14:30')} · موقَّع من الجانبين`, v: -200000, amount: I('− 200,000') },
        { name: 'متوقع في الدرج', sub: 'محسوب، مخفي عن أمين الصندوق قبل العدّ', v: 132750, kind: 'mark', amount: I('= 132,750') },
        { name: 'عدّ أعمى', sub: `بالفئات · ${I('20:14')} · ${I('4')} دقائق`, v: 131750, kind: 'mark', amount: I('131,750') },
        { name: 'الفارق', sub: `سماحية ${I('500')} · السبب: إرجاع فكة · موافَق`, v: -1000, from: 131750, to: 132750, kind: 'mark', hot: true, amount: I('− 1,000') },
      ],
      panel: { title: 'الجلسة نفسها، غير النقدي', sub: 'يُسوّى على حدة، لا في الدرج أبداً', rows: [{ l: 'بطاقة · جهاز الدفع', v: I('84,300') }, { l: 'دفع إلكتروني', v: I('12,900') }, { l: 'ائتمان زبون', v: I('21,000') }, { l: 'مجموع الجلسة', v: I('430,650') }], note: 'جهاز الدفع يُسوّى على كشفه' },
      denom: { title: `العدّ بالفئات · ${I('131,750')}`, sub: 'يُدخل دون رؤية المتوقع', rows: [I('2,000 × 41'), I('1,000 × 32'), I('500 × 29'), I('200 × 12'), I('100 × 6'), `قطع: ${I('350')}`] },
      tiles: [
        { big: `${I('132,750')} متوقع`, l1: 'محسوب من الحركات لا منسوخ', l2: 'مخفي حتى نهاية العدّ' },
        { big: `${I('131,750')} معدود`, l1: `بالفئات، في ${I('4')} دقائق`, l2: 'موقَّع من أمينة الصندوق' },
        { big: `فارق ${I('− 1,000')}`, l1: `بعد سماحية ${I('500')}`, l2: 'سبب مرمَّز + موافقة المسيّر، موقَّعة', hot: true },
      ],
      rule: 'المتوقع يُحسب من حركات الجلسة؛ وأمين الصندوق يعدّ دون أن يراه؛ والفارق يوقّعه شخصان.',
      rule2: 'المدفوعات غير النقدية في الجلسة لكن ليست في الدرج: تُسوّى على كشفها الخاص.',
      note: 'المبالغ والأوقات والفئات والأسماء مثال مبني؛ والسماحية وعتبة الموافقة قرارا المسيّر.',
    },
    gaps: {
      title: 'شهر من الفوارق: أربعة أمناء صندوق، 72 جلسة، اتجاه واحد',
      alt: 'أربعة أسطر، سطر لكل أمين صندوق، بنقطة لكل جلسة إغلاق على محور فارق من ناقص 3,000 إلى زائد 3,000 دينار، ونطاق سماحية زائد أو ناقص 500 مظلل، وعلى الطرف عدد فتحات الدرج دون بيع. أمينة، 22 جلسة، فارق وسيط ناقص 50، 2 خارج السماحية، 6 فتحات. كريم، 20 جلسة، وسيط زائد 50، 0 خارج السماحية، 4 فتحات. نادية، مميزة، 18 جلسة، وسيط ناقص 400، 7 خارج السماحية كلها تقريباً سالبة، 31 فتحة دون بيع. ياسين، 12 جلسة، وسيط زائد 300، 1 خارج السماحية، 5 فتحات. ثلاث بطاقات: 72 جلسة مغلقة؛ 10 خارج السماحية منها 7 لأمينة صندوق واحدة؛ 46 فتحة دون بيع منها 31 للشخص نفسه. البيانات مثال مبني.',
      label: `فارق الإغلاق · جلسة = نقطة · النطاق = سماحية ${I('± 500 DA')}`, tol: 500, tolLabel: `سماحية ${I('± 500')}`, openLabel: 'فتحات دون بيع',
      ticks: [{ v: -3000, l: I('− 3,000') }, { v: -2000, l: I('− 2,000') }, { v: -1000, l: I('− 1,000') }, { v: 0, l: '0' }, { v: 1000, l: I('+ 1,000') }, { v: 2000, l: I('+ 2,000') }, { v: 3000, l: I('+ 3,000') }],
      rows: [
        { name: `أمينة · الصندوق ${I('2')}`, sub: `${I('22')} جلسة · الوسيط ${I('− 50')}`, sub2: `${I('2')} خارج السماحية`, pts: [-100, 50, -300, 0, -150, 200, -50, -700, 100, -200, 0, -100, 300, -1000, 50, -250, 0, -100, 150, -50, -400, 100], open: I('6') },
        { name: `كريم · الصندوق ${I('1')}`, sub: `${I('20')} جلسة · الوسيط ${I('+ 50')}`, sub2: `${I('0')} خارج السماحية`, pts: [50, 100, 0, -50, 200, 50, 0, 150, -100, 50, 100, 0, 250, 50, -50, 0, 100, 50, -150, 100], open: I('4') },
        { name: `نادية · الصندوقان ${I('1')} و${I('3')}`, sub: `${I('18')} جلسة · الوسيط ${I('− 400')}`, sub2: `${I('7')} خارج السماحية، كلها تقريباً سالبة`, hot: true, pts: [-900, -1200, -300, -1500, -400, -200, -2100, -450, -350, -1800, -400, -250, -2600, -300, -100, -1300, -150, 100], open: I('31') },
        { name: `ياسين · الصندوق ${I('3')}`, sub: `${I('12')} جلسة · الوسيط ${I('+ 300')}`, sub2: `${I('1')} خارج السماحية`, pts: [300, 450, 200, 0, 350, 600, 250, 100, 400, 300, 150, 500], open: I('5') },
      ],
      tiles: [
        { big: `${I('72')} جلسة`, l1: 'مغلقة بعدّ أعمى', l2: 'ثلاثة صناديق، أربعة أمناء، شهر واحد' },
        { big: `${I('10')} خارج السماحية`, l1: `منها ${I('7')} لأمينة الصندوق نفسها`, l2: 'وكلها سالبة: ليس هذا صدفة', hot: true },
        { big: `${I('46')} فتحة دون بيع`, l1: `منها ${I('31')} للشخص نفسه`, l2: 'كل فتحة حدث مسجَّل' },
      ],
      rule: 'الفارق المنفرد خطأ؛ وسلسلة فوارق بالإشارة نفسها عند الشخص نفسه اتجاه، واللوحة تُظهره دون اتهام.',
      rule2: 'فتح الدرج دون بيع يُسجَّل كل مرة؛ والمسيّر يقرأ العدادات لا الشائعات.',
      note: 'أمناء الصندوق والجلسات والفوارق والعدادات مثال مبني؛ والسماحية قرار المسيّر.',
    },
  },
};
