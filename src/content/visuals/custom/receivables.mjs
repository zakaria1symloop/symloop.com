// Bespoke animated figures for the 2027 "the customer owes 400,000 dinars and nobody knows since when" post.
//  ledger(): one customer's statement (invoices, cash receipt, cheque, credit note)
//            on the left; on the right the allocation of each receipt to invoices
//            with the remaining amount per invoice; below, balance vs exposure
//            (uncollected cheques included) against the credit limit, and the
//            order that would cross it. Rows appear, allocation lines draw.
//  aging():  six customers across five ageing buckets with bars, a reminder
//            state per customer, bucket totals, and a DSO tile with the formula.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function draw(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{stroke-dashoffset:1000}${(at + dur).toFixed(1)}%,100%{stroke-dashoffset:0}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function grow(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
const I = (x) => `⁦${x}⁩`;

export function ledger(t, rtl) {
  const c = ctx(rtl); const P = 'lg'; const css = []; const H = 620;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  // left: statement
  const lx = 80, lw = 520, ly = 100;
  s += text(c, lx, ly, t.stmtLabel, { size: 10, font: 'mono', fill: C.fg35, letter: 1.5, upper: true });
  const cols = [lx, lx + 55, lx + 120, lx + 275, lx + 350, lx + 425];
  t.cols.forEach((h, i) => { s += text(c, cols[i], ly + 20, h, { size: 9, font: 'mono', fill: C.fg35 }); });
  s += line(c, lx, ly + 28, lx + lw, ly + 28, { stroke: C.line2 });
  const rowY = (i) => ly + 50 + i * 30;
  t.rows.forEach((r, i) => {
    const y = rowY(i); const at = 3 + i * 2.5;
    const hot = r.kind === 'cheque';
    s += `<g style="animation:${show(css, P, `r${i}`, at)}">` + line(c, lx, y + 10, lx + lw, y + 10, { stroke: C.line })
      + text(c, cols[0], y, r.date, { size: 9.5, font: 'mono', fill: C.fg55 })
      + text(c, cols[1], y, r.ref, { size: 9.5, font: 'mono', fill: hot ? C.accent : C.fg70 })
      + text(c, cols[2], y, r.label, { size: 10, fill: C.fg })
      + text(c, cols[3], y, r.debit, { size: 9.5, font: 'mono', fill: C.fg70 })
      + text(c, cols[4], y, r.credit, { size: 9.5, font: 'mono', fill: hot ? C.accent : C.fg70 })
      + text(c, cols[5], y, r.state, { size: 8.5, font: 'mono', fill: hot ? C.accent : C.fg55 }) + '</g>';
  });
  // right: invoices with remaining
  const rx = 740, rw = 380;
  s += text(c, rx, ly, t.allocLabel, { size: 10, font: 'mono', fill: C.fg35, letter: 1.5, upper: true });
  const invY = [ly + 32, ly + 122, ly + 212]; const ih = 76;
  t.invoices.forEach((inv, i) => {
    const y = invY[i]; const at = 20 + i * 4;
    s += `<g style="animation:${show(css, P, `i${i}`, at)}">` + rect(c, rx, y, rw, ih, { stroke: inv.open ? C.accent : C.line2, fill: inv.open ? 'rgba(242,181,68,0.06)' : C.fill })
      + text(c, rx + 10, y + 17, inv.title, { size: 11, fill: inv.open ? C.accent : C.fg })
      + inv.lines.map((l, k) => text(c, rx + 10, y + 32 + k * 12, l, { size: 8.5, font: 'mono', fill: C.fg55 })).join('')
      + text(c, rx + rw - 10, y + 17, inv.remaining, { size: 12, font: 'mono', fill: inv.open ? C.accent : C.fg70, anchor: 'end', weight: 500 }) + '</g>';
  });
  // allocation lines: from credit rows to invoices
  t.allocs.forEach((a, k) => {
    const y = rowY(a.row) + 2; const ty = invY[a.inv] + ih / 2 + (a.dy || 0);
    const hot = a.hot;
    s += `<path d="M${c.X(lx + lw + 4)} ${y} C ${c.X(lx + lw + 40)} ${y}, ${c.X(rx - 40)} ${ty}, ${c.X(rx - 2)} ${ty}" fill="none" stroke="${hot ? C.accent : C.line2}" stroke-width="1" pathLength="1000" style="stroke-dashoffset:0;animation:${draw(css, P, `a${k}`, 30 + k * 2, 3)}"/>`;
    s += `<g style="animation:${show(css, P, `al${k}`, 32 + k * 2)}">` + text(c, (lx + lw + rx) / 2, (y + ty) / 2 - 4, a.amount, { size: 8.5, font: 'mono', fill: hot ? C.accent : C.fg55, anchor: 'middle' }) + '</g>';
  });
  // tiles
  const ty0 = 420;
  t.tiles.forEach((k, i) => { const x = 80 + i * 262; s += `<g style="animation:${show(css, P, `k${i}`, 44 + i * 3)}">` + rect(c, x, ty0, 250, 64, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? 'rgba(242,181,68,0.06)' : C.fill }) + text(c, x + 12, ty0 + 24, k.big, { size: 16, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ty0 + 41, k.label, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ty0 + 55, k.sub, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  s += text(c, 80, 520, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, 540, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, 560, t.rule3, { size: 12.5, fill: C.fg }) + text(c, 80, 588, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"],svg path[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

export function aging(t, rtl) {
  const c = ctx(rtl); const P = 'ag'; const css = []; const H = 640;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  const nx = 80, bx0 = 330, bw = 128, rowH = 48, y0 = 128, max = 1500;
  s += text(c, nx, 100, t.boardLabel, { size: 10, font: 'mono', fill: C.fg35, letter: 1.5, upper: true });
  t.buckets.forEach((b, i) => { s += text(c, bx0 + i * bw + 6, 112, b, { size: 9, font: 'mono', fill: i >= 3 ? C.accent : C.fg35 }); });
  s += text(c, bx0 + 5 * bw + 6, 112, t.totalCol, { size: 9, font: 'mono', fill: C.fg35 });
  s += line(c, nx, 118, 1120, 118, { stroke: C.line2 });
  t.rows.forEach((r, i) => {
    const y = y0 + i * rowH; const at = 3 + i * 2;
    s += `<g style="animation:${show(css, P, `n${i}`, at)}">` + text(c, nx, y + 18, r.name, { size: 11, fill: C.fg }) + text(c, nx, y + 33, r.state, { size: 8.5, font: 'mono', fill: r.hot ? C.accent : C.fg55 }) + line(c, nx, y + rowH - 4, 1120, y + rowH - 4, { stroke: C.line }) + '</g>';
    r.v.forEach((v, j) => {
      if (!v) return; const x = bx0 + j * bw + 6; const w = Math.max(6, Math.round(Math.sqrt(v / max) * (bw - 16)));
      const late = j >= 3;
      s += `<g style="animation:${show(css, P, `b${i}${j}`, at + 1)}"><g style="transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'};animation:${grow(css, P, `g${i}${j}`, at + 1, 3)}">` + rect(c, x, y + 22, w, 8, { stroke: 'none', fill: late ? C.accent : j >= 1 ? C.fg55 : C.fg35 }) + '</g>' + text(c, x, y + 15, r.t[j], { size: 9.5, font: 'mono', fill: late ? C.accent : C.fg70 }) + '</g>';
    });
    s += `<g style="animation:${show(css, P, `t${i}`, at + 4)}">` + text(c, bx0 + 5 * bw + 6, y + 18, r.total, { size: 10.5, font: 'mono', fill: C.fg, weight: 500 }) + '</g>';
  });
  const tyr = y0 + t.rows.length * rowH + 6;
  s += `<g style="animation:${show(css, P, 'tot', 22)}">` + text(c, nx, tyr + 14, t.totalsLabel, { size: 10, font: 'mono', fill: C.fg55 });
  t.totals.forEach((v, j) => { s += text(c, bx0 + j * bw + 6, tyr + 14, v, { size: 10.5, font: 'mono', fill: j >= 3 ? C.accent : C.fg, weight: 500 }); });
  s += text(c, bx0 + 5 * bw + 6, tyr + 14, t.grand, { size: 10.5, font: 'mono', fill: C.fg, weight: 500 }) + '</g>';
  // DSO tile + counters
  const ky = tyr + 40;
  s += `<g style="animation:${show(css, P, 'dso', 28)}">` + rect(c, 80, ky, 500, 78, { stroke: C.accent, fill: 'rgba(242,181,68,0.06)' })
    + text(c, 92, ky + 22, t.dso.big, { size: 18, font: 'mono', fill: C.accent, weight: 500 }) + text(c, 92, ky + 40, t.dso.label, { size: 10, fill: C.fg })
    + text(c, 92, ky + 56, t.dso.formula, { size: 8.5, font: 'mono', fill: C.fg55 }) + text(c, 92, ky + 69, t.dso.formula2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>';
  t.counters.forEach((k, i) => { const x = 600 + i * 176; s += `<g style="animation:${show(css, P, `k${i}`, 32 + i * 3)}">` + rect(c, x, ky, 164, 78, { stroke: k.hot ? C.accent : C.line2, fill: C.fill }) + text(c, x + 12, ky + 26, k.big, { size: 16, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 44, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 58, k.l2, { size: 9.5, fill: C.fg70 }) + '</g>'; });
  s += text(c, 80, ky + 108, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 152, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"],svg path[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    ledger: {
      title: 'Le compte d’un client au 10 novembre : pièces, encaissements, lettrage, solde et exposition',
      alt: 'À gauche, le relevé d’un client, une quincaillerie : trois factures de 85 000, 42 000 et 60 000 dinars avec leur échéance à 30 jours, un encaissement en espèces de 50 000 dinars, un avoir de 5 000 dinars lié à la troisième facture, et un chèque de 77 000 dinars remis en banque mais pas encore encaissé. À droite, le lettrage : les espèces et 35 000 dinars du chèque soldent la première facture, les 42 000 restants du chèque soldent la deuxième, l’avoir réduit la troisième à 55 000 dinars restants. En bas, quatre tuiles : solde 55 000 dinars ; exposition 132 000 dinars, chèque non encaissé inclus ; plafond 150 000 dinars ; une commande de 30 000 dinars porterait l’exposition à 162 000 et demande l’approbation du chef des ventes. Les montants sont un exemple construit.',
      stmtLabel: 'Relevé · Quincaillerie Benali · 10 novembre', cols: ['date', 'pièce', 'libellé', 'débit', 'crédit', 'état'],
      rows: [
        { date: '12 oct', ref: 'F-1041', label: 'Facture · 30 j', debit: '85 000', credit: '', state: 'échue le 11 nov', kind: 'inv' },
        { date: '20 oct', ref: 'F-1052', label: 'Facture · 30 j', debit: '42 000', credit: '', state: 'échue le 19 nov', kind: 'inv' },
        { date: '25 oct', ref: 'R-201', label: 'Espèces · reçu SMS', debit: '', credit: '50 000', state: 'encaissé', kind: 'cash' },
        { date: '02 nov', ref: 'F-1063', label: 'Facture · 30 j', debit: '60 000', credit: '', state: 'échue le 2 déc', kind: 'inv' },
        { date: '05 nov', ref: 'A-012', label: 'Avoir · casse sur F-1063', debit: '', credit: '5 000', state: 'lié à F-1063', kind: 'cn' },
        { date: '05 nov', ref: 'CH-77', label: 'Chèque · remis en banque', debit: '', credit: '77 000', state: 'remis · non encaissé', kind: 'cheque' },
      ],
      allocLabel: 'Lettrage · restant par facture',
      invoices: [
        { title: 'F-1041 · 85 000 DA', lines: ['− 50 000 espèces R-201', '− 35 000 chèque CH-77 (sous réserve d’encaissement)'], remaining: 'reste 0', open: false },
        { title: 'F-1052 · 42 000 DA', lines: ['− 42 000 chèque CH-77 (sous réserve d’encaissement)', 'solde conditionnel : le rejet rouvre la facture'], remaining: 'reste 0', open: false },
        { title: 'F-1063 · 60 000 DA', lines: ['− 5 000 avoir A-012', 'échéance 2 décembre · non échue'], remaining: 'reste 55 000', open: true },
      ],
      allocs: [
        { row: 2, inv: 0, amount: '50 000', dy: -14 },
        { row: 5, inv: 0, amount: '35 000', dy: 14, hot: true },
        { row: 5, inv: 1, amount: '42 000', hot: true },
        { row: 4, inv: 2, amount: '5 000' },
      ],
      tiles: [
        { big: '55 000 DA', label: 'solde comptable', sub: 'factures − avoirs − encaissements' },
        { big: '132 000 DA', label: 'exposition réelle', sub: 'chèque non encaissé réintégré', hot: true },
        { big: '150 000 DA', label: 'plafond de crédit', sub: 'fixé par le gérant, par client' },
        { big: '+ 30 000 → 162 000', label: 'commande du jour', sub: 'dépasse le plafond · approbation', hot: true },
      ],
      rule: 'Chaque encaissement est affecté à des factures précises, et chaque facture connaît son restant : le solde n’est plus un chiffre, c’est une liste.',
      rule2: 'Un chèque remis n’est pas de l’argent : il solde la facture sous réserve, et son rejet la rouvre automatiquement, avec la relance qui va avec.',
      rule3: 'Le plafond se compare à l’exposition, pas au solde : les chèques en attente comptent jusqu’à preuve du contraire.',
      note: 'client, pièces et montants : exemple construit · les échéances à 30 jours sont la condition de ce client, pas une règle',
    },
    aging: {
      title: 'Le tableau des retards au 10 novembre : six clients, cinq tranches d’âge, et le délai moyen',
      alt: 'Un tableau de six clients sur quatre-vingt-quatre, avec pour chacun le montant non échu, en retard de 1 à 30 jours, de 31 à 60, de 61 à 90 et de plus de 90 jours, en barres proportionnelles, et sous le nom l’état de la relance : à jour, rappel J-3 envoyé, appel J+7 prévu, commandes bloquées, litige en attente remis au gérant. Les deux dernières tranches sont en accent. Une ligne de totaux, puis une tuile : délai moyen de paiement d’environ 40 jours, calculé comme l’encours total de 9,64 millions divisé par les ventes à crédit par jour, 21,6 millions sur 90 jours ; et trois compteurs : 14 rappels envoyés ce matin, 5 appels à passer aujourd’hui, 2 clients bloqués. Les montants sont un exemple construit.',
      boardLabel: 'Six clients sur 84 · milliers de dinars', buckets: ['non échu', '1–30 j', '31–60 j', '61–90 j', '> 90 j'], totalCol: 'total',
      rows: [
        { name: 'Quincaillerie Benali', state: 'à jour · chèque en attente', v: [55, 0, 0, 0, 0], t: ['55', '', '', '', ''], total: '55' },
        { name: 'Supérette El Amel', state: 'rappel J-3 envoyé ce matin', v: [120, 85, 0, 0, 0], t: ['120', '85', '', '', ''], total: '205' },
        { name: 'Dépôt Sidi Bel Abbès', state: 'appel J+7 prévu aujourd’hui', v: [310, 240, 160, 0, 0], t: ['310', '240', '160', '', ''], total: '710' },
        { name: 'Alimentation Ryad', state: 'commandes bloquées · J+15', v: [0, 90, 110, 95, 0], t: ['', '90', '110', '95', ''], total: '295', hot: true },
        { name: 'Grossiste Nord', state: 'à jour · plafond 3 000', v: [1450, 820, 0, 0, 0], t: ['1 450', '820', '', '', ''], total: '2 270' },
        { name: 'Épicerie Hamid', state: 'litige · remis au gérant', v: [0, 0, 0, 60, 140], t: ['', '', '', '60', '140'], total: '200', hot: true },
      ],
      totalsLabel: 'total des six', totals: ['1 935', '1 235', '270', '155', '140'], grand: '3 735',
      dso: { big: '≈ 40 jours', label: 'délai moyen de paiement (DSO) · tous clients', formula: 'encours 9 640 000 ÷ (ventes à crédit 90 j 21 600 000 ÷ 90)', formula2: '= 9 640 000 ÷ 240 000 par jour · recalculé chaque nuit' },
      counters: [
        { big: '14', l1: 'rappels J-3', l2: 'envoyés à 8 h' },
        { big: '5', l1: 'appels J+7', l2: 'à passer aujourd’hui' },
        { big: '2', l1: 'clients bloqués', l2: 'au-delà de J+15', hot: true },
      ],
      rule: 'La tranche d’âge se calcule depuis l’échéance, pas depuis la facture : un client à 30 jours n’est pas en retard le lendemain de la livraison.',
      rule2: 'La relance est une séquence écrite par le gérant, exécutée par l’application, et interrompue par un paiement ou un litige, jamais par l’oubli.',
      note: 'clients et montants : exemple construit · formule du DSO : encours ÷ ventes moyennes par jour (définition courante)',
    },
  },
  en: {
    ledger: {
      title: 'One customer’s account on 10 November: documents, receipts, allocation, balance and exposure',
      alt: 'On the left, a customer’s statement, a hardware store: three invoices of 85,000, 42,000 and 60,000 dinars with their 30-day due dates, a cash receipt of 50,000 dinars, a credit note of 5,000 dinars linked to the third invoice, and a cheque of 77,000 dinars deposited but not yet cleared. On the right, the allocation: the cash and 35,000 dinars of the cheque settle the first invoice, the remaining 42,000 of the cheque settle the second, the credit note reduces the third to 55,000 dinars remaining. At the bottom, four tiles: balance 55,000 dinars; exposure 132,000 dinars, uncleared cheque included; limit 150,000 dinars; an order of 30,000 dinars would take exposure to 162,000 and requires the sales manager’s approval. Amounts are a constructed example.',
      stmtLabel: 'Statement · Benali Hardware · 10 November', cols: ['date', 'doc', 'label', 'debit', 'credit', 'state'],
      rows: [
        { date: '12 Oct', ref: 'F-1041', label: 'Invoice · 30 d', debit: '85,000', credit: '', state: 'due 11 Nov', kind: 'inv' },
        { date: '20 Oct', ref: 'F-1052', label: 'Invoice · 30 d', debit: '42,000', credit: '', state: 'due 19 Nov', kind: 'inv' },
        { date: '25 Oct', ref: 'R-201', label: 'Cash · SMS receipt', debit: '', credit: '50,000', state: 'collected', kind: 'cash' },
        { date: '02 Nov', ref: 'F-1063', label: 'Invoice · 30 d', debit: '60,000', credit: '', state: 'due 2 Dec', kind: 'inv' },
        { date: '05 Nov', ref: 'A-012', label: 'Credit note · breakage on F-1063', debit: '', credit: '5,000', state: 'linked to F-1063', kind: 'cn' },
        { date: '05 Nov', ref: 'CH-77', label: 'Cheque · deposited', debit: '', credit: '77,000', state: 'deposited · not cleared', kind: 'cheque' },
      ],
      allocLabel: 'Allocation · remaining per invoice',
      invoices: [
        { title: 'F-1041 · 85,000 DA', lines: ['− 50,000 cash R-201', '− 35,000 cheque CH-77 (subject to clearing)'], remaining: 'remaining 0', open: false },
        { title: 'F-1052 · 42,000 DA', lines: ['− 42,000 cheque CH-77 (subject to clearing)', 'conditional settlement: a bounce reopens the invoice'], remaining: 'remaining 0', open: false },
        { title: 'F-1063 · 60,000 DA', lines: ['− 5,000 credit note A-012', 'due 2 December · not yet due'], remaining: 'remaining 55,000', open: true },
      ],
      allocs: [
        { row: 2, inv: 0, amount: '50,000', dy: -14 },
        { row: 5, inv: 0, amount: '35,000', dy: 14, hot: true },
        { row: 5, inv: 1, amount: '42,000', hot: true },
        { row: 4, inv: 2, amount: '5,000' },
      ],
      tiles: [
        { big: '55,000 DA', label: 'book balance', sub: 'invoices − credit notes − receipts' },
        { big: '132,000 DA', label: 'real exposure', sub: 'uncleared cheque added back', hot: true },
        { big: '150,000 DA', label: 'credit limit', sub: 'set by the manager, per customer' },
        { big: '+ 30,000 → 162,000', label: 'today’s order', sub: 'exceeds the limit · approval', hot: true },
      ],
      rule: 'Every receipt is allocated to specific invoices, and every invoice knows its remaining amount: the balance is no longer a number, it is a list.',
      rule2: 'A deposited cheque is not money: it settles the invoice conditionally, and a bounce reopens it automatically, with the matching reminder.',
      rule3: 'The limit is compared with exposure, not with the balance: pending cheques count until proven otherwise.',
      note: 'customer, documents and amounts: constructed example · 30-day terms are this customer’s condition, not a rule',
    },
    aging: {
      title: 'The overdue board on 10 November: six customers, five age buckets, and the average collection time',
      alt: 'A board of six customers out of eighty-four, with for each the amount not yet due, 1 to 30 days late, 31 to 60, 61 to 90 and over 90 days, as proportional bars, and under the name the reminder state: up to date, D-3 reminder sent, D+7 call planned, orders blocked, dispute pending handed to the manager. The last two buckets are accented. A totals row, then a tile: average collection time of about 40 days, computed as total receivables of 9.64 million divided by credit sales per day, 21.6 million over 90 days; and three counters: 14 reminders sent this morning, 5 calls to make today, 2 customers blocked. Amounts are a constructed example.',
      boardLabel: 'Six customers out of 84 · thousands of dinars', buckets: ['not due', '1–30 d', '31–60 d', '61–90 d', '> 90 d'], totalCol: 'total',
      rows: [
        { name: 'Benali Hardware', state: 'up to date · cheque pending', v: [55, 0, 0, 0, 0], t: ['55', '', '', '', ''], total: '55' },
        { name: 'El Amel Minimarket', state: 'D-3 reminder sent this morning', v: [120, 85, 0, 0, 0], t: ['120', '85', '', '', ''], total: '205' },
        { name: 'Sidi Bel Abbès Depot', state: 'D+7 call planned today', v: [310, 240, 160, 0, 0], t: ['310', '240', '160', '', ''], total: '710' },
        { name: 'Ryad Foods', state: 'orders blocked · D+15', v: [0, 90, 110, 95, 0], t: ['', '90', '110', '95', ''], total: '295', hot: true },
        { name: 'North Wholesale', state: 'up to date · limit 3,000', v: [1450, 820, 0, 0, 0], t: ['1,450', '820', '', '', ''], total: '2,270' },
        { name: 'Hamid Grocery', state: 'dispute · handed to the manager', v: [0, 0, 0, 60, 140], t: ['', '', '', '60', '140'], total: '200', hot: true },
      ],
      totalsLabel: 'total of six', totals: ['1,935', '1,235', '270', '155', '140'], grand: '3,735',
      dso: { big: '≈ 40 days', label: 'average collection time (DSO) · all customers', formula: 'receivables 9,640,000 ÷ (credit sales 90 d 21,600,000 ÷ 90)', formula2: '= 9,640,000 ÷ 240,000 per day · recomputed every night' },
      counters: [
        { big: '14', l1: 'D-3 reminders', l2: 'sent at 8:00' },
        { big: '5', l1: 'D+7 calls', l2: 'to make today' },
        { big: '2', l1: 'customers blocked', l2: 'beyond D+15', hot: true },
      ],
      rule: 'The age bucket is computed from the due date, not the invoice date: a 30-day customer is not late the day after delivery.',
      rule2: 'The reminder is a sequence written by the manager, run by the application, and interrupted by a payment or a dispute, never by forgetting.',
      note: 'customers and amounts: constructed example · DSO formula: receivables ÷ average sales per day (common definition)',
    },
  },
  ar: {
    ledger: {
      title: 'حساب زبون واحد في 10 نوفمبر: مستندات، تحصيلات، تسوية، رصيد وتعرّض',
      alt: 'على اليمين كشف حساب زبون، محل أدوات: ثلاث فواتير بـ 85,000 و42,000 و60,000 دينار بآجالها 30 يوماً، تحصيل نقدي 50,000 دينار، إشعار دائن 5,000 دينار مرتبط بالفاتورة الثالثة، وشيك 77,000 دينار مودَع في البنك لم يُحصَّل بعد. على اليسار التسوية: النقد و35,000 من الشيك يسدّدان الفاتورة الأولى، و42,000 الباقية من الشيك تسدّد الثانية، والإشعار الدائن يخفض الثالثة إلى 55,000 متبقية. في الأسفل أربع بطاقات: رصيد 55,000 دينار؛ تعرّض 132,000 دينار بإدراج الشيك غير المحصَّل؛ سقف 150,000 دينار؛ طلبية 30,000 دينار ترفع التعرّض إلى 162,000 وتتطلب موافقة رئيس المبيعات. والمبالغ مثال مبني.',
      stmtLabel: 'كشف · أدوات بن علي · 10 نوفمبر', cols: ['التاريخ', 'المستند', 'البيان', 'مدين', 'دائن', 'الحالة'],
      rows: [
        { date: '12 أكت', ref: I('F-1041'), label: 'فاتورة · 30 ي', debit: I('85,000'), credit: '', state: 'تستحق 11 نوف', kind: 'inv' },
        { date: '20 أكت', ref: I('F-1052'), label: 'فاتورة · 30 ي', debit: I('42,000'), credit: '', state: 'تستحق 19 نوف', kind: 'inv' },
        { date: '25 أكت', ref: I('R-201'), label: 'نقد · وصل SMS', debit: '', credit: I('50,000'), state: 'محصَّل', kind: 'cash' },
        { date: '02 نوف', ref: I('F-1063'), label: 'فاتورة · 30 ي', debit: I('60,000'), credit: '', state: 'تستحق 2 ديس', kind: 'inv' },
        { date: '05 نوف', ref: I('A-012'), label: `إشعار دائن · كسر على ${I('F-1063')}`, debit: '', credit: I('5,000'), state: `مرتبط بـ ${I('F-1063')}`, kind: 'cn' },
        { date: '05 نوف', ref: I('CH-77'), label: 'شيك · مودَع في البنك', debit: '', credit: I('77,000'), state: 'مودَع · غير محصَّل', kind: 'cheque' },
      ],
      allocLabel: 'التسوية · المتبقي لكل فاتورة',
      invoices: [
        { title: I('F-1041 · 85,000 DA'), lines: [`− ${I('50,000')} نقد ${I('R-201')}`, `− ${I('35,000')} شيك ${I('CH-77')} (رهن التحصيل)`], remaining: 'المتبقي 0', open: false },
        { title: I('F-1052 · 42,000 DA'), lines: [`− ${I('42,000')} شيك ${I('CH-77')} (رهن التحصيل)`, 'تسديد مشروط: الرفض يعيد فتح الفاتورة'], remaining: 'المتبقي 0', open: false },
        { title: I('F-1063 · 60,000 DA'), lines: [`− ${I('5,000')} إشعار دائن ${I('A-012')}`, 'الاستحقاق 2 ديسمبر · لم يحن'], remaining: `المتبقي ${I('55,000')}`, open: true },
      ],
      allocs: [
        { row: 2, inv: 0, amount: I('50,000'), dy: -14 },
        { row: 5, inv: 0, amount: I('35,000'), dy: 14, hot: true },
        { row: 5, inv: 1, amount: I('42,000'), hot: true },
        { row: 4, inv: 2, amount: I('5,000') },
      ],
      tiles: [
        { big: I('55,000 DA'), label: 'الرصيد الدفتري', sub: 'فواتير − إشعارات دائنة − تحصيلات' },
        { big: I('132,000 DA'), label: 'التعرّض الحقيقي', sub: 'الشيك غير المحصَّل مُعاد إدراجه', hot: true },
        { big: I('150,000 DA'), label: 'سقف الائتمان', sub: 'يحدده المسيّر لكل زبون' },
        { big: I('+ 30,000 → 162,000'), label: 'طلبية اليوم', sub: 'تتجاوز السقف · موافقة', hot: true },
      ],
      rule: 'كل تحصيل يُخصص لفواتير محددة، وكل فاتورة تعرف متبقيها: لم يعد الرصيد رقماً بل قائمة.',
      rule2: 'الشيك المودَع ليس مالاً: يسدّد الفاتورة رهن التحصيل، ورفضه يعيد فتحها تلقائياً مع التذكير المناسب.',
      rule3: 'يُقارَن السقف بالتعرّض لا بالرصيد: الشيكات المعلّقة تُحسب حتى يثبت العكس.',
      note: 'الزبون والمستندات والمبالغ: مثال مبني · أجل 30 يوماً شرط هذا الزبون لا قاعدة',
    },
    aging: {
      title: 'لوحة التأخيرات في 10 نوفمبر: ستة زبائن، خمس شرائح عمرية، ومتوسط مدة التحصيل',
      alt: 'لوحة ستة زبائن من أربعة وثمانين، لكل منهم المبلغ غير المستحق، والمتأخر من 1 إلى 30 يوماً، ومن 31 إلى 60، ومن 61 إلى 90، وأكثر من 90 يوماً، بأشرطة متناسبة، وتحت الاسم حالة التذكير: منتظم، تذكير ي-3 مرسَل، مكالمة ي+7 مقررة، طلبيات محجوبة، نزاع معلّق مُحال إلى المسيّر. الشريحتان الأخيرتان مميزتان. سطر مجاميع، ثم بطاقة: متوسط مدة التحصيل نحو 40 يوماً، محسوباً كإجمالي الذمم 9.64 مليون مقسوماً على مبيعات الائتمان اليومية، 21.6 مليون على 90 يوماً؛ وثلاثة عدادات: 14 تذكيراً أُرسل هذا الصباح، 5 مكالمات اليوم، زبونان محجوبان. والمبالغ مثال مبني.',
      boardLabel: 'ستة زبائن من 84 · آلاف الدنانير', buckets: ['غير مستحق', '1–30 ي', '31–60 ي', '61–90 ي', '> 90 ي'], totalCol: 'المجموع',
      rows: [
        { name: 'أدوات بن علي', state: 'منتظم · شيك معلّق', v: [55, 0, 0, 0, 0], t: ['55', '', '', '', ''], total: '55' },
        { name: 'سوبيرات الأمل', state: 'تذكير ي-3 أُرسل هذا الصباح', v: [120, 85, 0, 0, 0], t: ['120', '85', '', '', ''], total: '205' },
        { name: 'مستودع سيدي بلعباس', state: 'مكالمة ي+7 مقررة اليوم', v: [310, 240, 160, 0, 0], t: ['310', '240', '160', '', ''], total: '710' },
        { name: 'مواد غذائية رياض', state: 'طلبيات محجوبة · ي+15', v: [0, 90, 110, 95, 0], t: ['', '90', '110', '95', ''], total: '295', hot: true },
        { name: 'جملة الشمال', state: 'منتظم · سقف 3,000', v: [1450, 820, 0, 0, 0], t: ['1,450', '820', '', '', ''], total: '2,270' },
        { name: 'بقالة حميد', state: 'نزاع · مُحال إلى المسيّر', v: [0, 0, 0, 60, 140], t: ['', '', '', '60', '140'], total: '200', hot: true },
      ],
      totalsLabel: 'مجموع الستة', totals: ['1,935', '1,235', '270', '155', '140'], grand: '3,735',
      dso: { big: '≈ 40 يوماً', label: 'متوسط مدة التحصيل (DSO) · كل الزبائن', formula: I('9,640,000 ÷ (21,600,000 ÷ 90)'), formula2: `${I('= 9,640,000 ÷ 240,000')} يومياً · يُعاد حسابه كل ليلة` },
      counters: [
        { big: '14', l1: 'تذكيرات ي-3', l2: 'أُرسلت عند 08:00' },
        { big: '5', l1: 'مكالمات ي+7', l2: 'تُجرى اليوم' },
        { big: '2', l1: 'زبونان محجوبان', l2: 'بعد ي+15', hot: true },
      ],
      rule: 'تُحسب الشريحة العمرية من تاريخ الاستحقاق لا من تاريخ الفاتورة: زبون بأجل 30 يوماً ليس متأخراً غداة التسليم.',
      rule2: 'التذكير تسلسل يكتبه المسيّر وينفذه التطبيق، ويوقفه دفع أو نزاع، لا النسيان أبداً.',
      note: 'الزبائن والمبالغ: مثال مبني · صيغة DSO: الذمم ÷ متوسط المبيعات اليومية (تعريف شائع)',
    },
  },
};
