// Bespoke animated figures for the 2027 "everyone buys and nobody knows how much
// we spent" post.
//  request(): one purchase request: identity strip, the approval chain as stations
//             with thresholds (one skipped, one not required), the cost-centre budget
//             gauge with spent, committed, this request and remaining, the generated
//             purchase order; three tiles. Stations appear, the gauge grows.
//  spend():   the quarter's spend board: six cost centres with budget bars split
//             into spent, committed and pending, invoices without an order, one
//             centre over budget accented; three tiles. Bars grow.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function draw(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{stroke-dashoffset:1000}${(at + dur).toFixed(1)}%,100%{stroke-dashoffset:0}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function grow(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
const I = (x) => `⁦${x}⁩`;

export function request(t, rtl) {
  const c = ctx(rtl); const P = 'pr'; const css = []; const H = 600;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: 'rgba(242,181,68,0.06)' }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  // approval chain (left): stations
  const sx = 80, sw = 520, sy = 150;
  s += text(c, sx, sy - 6, t.chainLabel, { size: 9, font: 'mono', fill: C.fg35, letter: 1.2, upper: true });
  t.stations.forEach((st, i) => {
    const y = sy + 10 + i * 64; const at = 4 + i * 2.2; const off = st.state === 'skip' || st.state === 'none';
    s += `<g style="animation:${show(css, P, `s${i}`, at)}">` + rect(c, sx, y, sw, 54, { stroke: st.state === 'ok' ? C.accent : C.line2, fill: st.state === 'ok' ? 'rgba(242,181,68,0.08)' : off ? 'none' : C.fill, dash: off ? '3 3' : undefined })
      + circle(c, sx + 22, y + 27, 9, { fill: st.state === 'ok' ? C.accent : 'none', stroke: off ? C.fg35 : C.line2 }) + text(c, sx + 22, y + 31, String(i + 1), { size: 9, font: 'mono', fill: st.state === 'ok' ? C.bg : C.fg55, anchor: 'middle', weight: 500 })
      + text(c, sx + 42, y + 20, st.who, { size: 10.5, fill: off ? C.fg35 : C.fg, weight: 500 }) + text(c, sx + 42, y + 35, st.rule, { size: 8, font: 'mono', fill: C.fg55 }) + text(c, sx + 42, y + 47, st.sub, { size: 8, font: 'mono', fill: off ? C.fg35 : C.fg55 })
      + text(c, sx + sw - 12, y + 24, st.stamp, { size: 9.5, font: 'mono', fill: st.state === 'ok' ? C.accent : C.fg35, anchor: 'end', weight: st.state === 'ok' ? 500 : 400 }) + text(c, sx + sw - 12, y + 40, st.stamp2, { size: 8, font: 'mono', fill: C.fg55, anchor: 'end' }) + '</g>';
    if (i < t.stations.length - 1) s += `<g style="animation:${show(css, P, `a${i}`, at + 1)}">` + line(c, sx + 22, y + 54, sx + 22, y + 64, { stroke: C.line2 }) + '</g>';
  });
  // budget gauge (right)
  const gx = 640, gw = 480, gy = 150; const total = t.budget.total; const bX = (v) => gx + (v / total) * gw;
  s += text(c, gx, gy - 6, t.budget.label, { size: 9, font: 'mono', fill: C.fg35, letter: 1.2, upper: true });
  s += `<g style="animation:${show(css, P, 'g', 6)}">` + rect(c, gx, gy + 10, gw, 54, { stroke: C.line2, fill: C.fill }) + text(c, gx + 12, gy + 30, t.budget.title, { size: 10.5, fill: C.fg, weight: 500 }) + text(c, gx + 12, gy + 46, t.budget.sub, { size: 8, font: 'mono', fill: C.fg55 }) + text(c, gx + gw - 12, gy + 32, t.budget.totalT, { size: 11, font: 'mono', fill: C.fg, anchor: 'end', weight: 500 }) + '</g>';
  const by = gy + 84; let acc = 0;
  t.budget.segs.forEach((sg, i) => { const x0 = bX(acc), x1 = bX(acc + sg.v); acc += sg.v; const fill = sg.k === 'spent' ? 'rgba(255,255,255,0.45)' : sg.k === 'committed' ? 'rgba(255,255,255,0.18)' : 'rgba(242,181,68,0.55)'; s += `<g style="transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'};animation:${grow(css, P, `b${i}`, 8 + i * 2, 1.6)}">` + rect(c, x0, by, x1 - x0, 26, { stroke: sg.k === 'request' ? C.accent : 'none', fill }) + '</g>'; });
  s += rect(c, gx, by, gw, 26, { stroke: C.line2 });
  acc = 0;
  t.budget.segs.forEach((sg, i) => { const x0 = bX(acc); acc += sg.v; s += `<g style="animation:${show(css, P, `bl${i}`, 9 + i * 2)}">` + text(c, x0 + 4, by + 42, sg.l, { size: 8.5, font: 'mono', fill: sg.k === 'request' ? C.accent : C.fg70 }) + text(c, x0 + 4, by + 54, sg.v2, { size: 8, font: 'mono', fill: C.fg55 }) + '</g>'; });
  s += `<g style="animation:${show(css, P, 'rm', 15)}">` + text(c, gx + gw, by + 42, t.budget.remaining, { size: 8.5, font: 'mono', fill: C.fg, anchor: 'end', weight: 500 }) + text(c, gx + gw, by + 54, t.budget.remaining2, { size: 8, font: 'mono', fill: C.fg55, anchor: 'end' }) + '</g>';
  // PO panel
  const py = by + 74;
  s += `<g style="animation:${show(css, P, 'po', 17)}">` + rect(c, gx, py, gw, 92, { stroke: C.accent, fill: 'rgba(242,181,68,0.06)' }) + text(c, gx + 12, py + 20, t.po.title, { size: 10.5, fill: C.accent, weight: 500 }) + text(c, gx + 12, py + 36, t.po.l1, { size: 8.5, font: 'mono', fill: C.fg70 }) + text(c, gx + 12, py + 50, t.po.l2, { size: 8.5, font: 'mono', fill: C.fg70 }) + text(c, gx + 12, py + 64, t.po.l3, { size: 8.5, font: 'mono', fill: C.fg70 }) + text(c, gx + 12, py + 80, t.po.l4, { size: 8, font: 'mono', fill: C.fg55 }) + '</g>';
  const ky = Math.max(sy + 10 + t.stations.length * 64 + 10, py + 108);
  t.tiles.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, 20 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? 'rgba(242,181,68,0.06)' : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  s += text(c, 80, ky + 86, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

export function spend(t, rtl) {
  const c = ctx(rtl); const P = 'sp'; const css = []; const H = 620;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  const cols = [80, 330, 790, 900, 1010]; const hy = 104; const barW = 400;
  s += t.cols.map((h, i) => text(c, cols[i], hy, h, { size: 9, font: 'mono', fill: C.fg35, letter: 1.2, upper: true })).join('') + line(c, 80, hy + 8, 1120, hy + 8, { stroke: C.line2 });
  s += line(c, cols[1] + barW, hy + 12, cols[1] + barW, hy + 12 + t.rows.length * 50, { stroke: C.accent, dash: '3 3' }) + text(c, cols[1] + barW, hy + 12 + t.rows.length * 50 + 12, t.thrLabel, { size: 8, font: 'mono', fill: C.accent, anchor: 'middle' });
  t.rows.forEach((r, i) => {
    const y = hy + 42 + i * 50; const at = 3 + i * 1.8; const tot = r.spent + r.committed + r.pending; const over = tot > r.budget; const scale = Math.max(r.budget, tot);
    const w = (v) => (v / r.budget) * barW;
    s += `<g style="animation:${show(css, P, `r${i}`, at)}">` + text(c, cols[0], y - 3, r.name, { size: 11, fill: over ? C.accent : C.fg, weight: 500 }) + text(c, cols[0], y + 11, r.sub, { size: 8, font: 'mono', fill: C.fg55 })
      + text(c, cols[2], y + 2, r.pct, { size: 10, font: 'mono', fill: over ? C.accent : C.fg, weight: over ? 500 : 400 })
      + text(c, cols[3], y - 3, r.nopo, { size: 10, font: 'mono', fill: r.nopoHot ? C.accent : C.fg }) + text(c, cols[3], y + 11, r.nopoSub, { size: 7.5, font: 'mono', fill: C.fg55 })
      + text(c, cols[4], y - 3, r.pend, { size: 10, font: 'mono', fill: C.fg70 }) + text(c, cols[4], y + 11, r.pendSub, { size: 7.5, font: 'mono', fill: C.fg55 })
      + line(c, 80, y + 22, 1120, y + 22, { stroke: C.line }) + '</g>';
    let acc = 0;
    [['spent', r.spent, 'rgba(255,255,255,0.45)'], ['committed', r.committed, 'rgba(255,255,255,0.18)'], ['pending', r.pending, 'rgba(242,181,68,0.35)']].forEach(([k, v, fill], j) => { if (!v) return; const x0 = cols[1] + Math.min(w(acc), barW * 1.1), x1 = cols[1] + Math.min(w(acc + v), barW * 1.1); acc += v; s += `<g style="transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'};animation:${grow(css, P, `g${i}${j}`, at + 0.5 + j * 0.6, 1)}">` + rect(c, x0, y - 8, Math.max(x1 - x0, 1), 12, { stroke: over && j === 2 ? C.accent : 'none', fill }) + '</g>'; });
    s += rect(c, cols[1], y - 8, barW, 12, { stroke: C.line2 });
  });
  const ly = hy + 42 + t.rows.length * 50 + 4;
  s += `<g style="animation:${show(css, P, 'lg', 15)}">`;
  t.legend.forEach((l, i) => { const x = 80 + i * 200; s += rect(c, x, ly, 14, 10, { stroke: 'none', fill: l.k === 'spent' ? 'rgba(255,255,255,0.45)' : l.k === 'committed' ? 'rgba(255,255,255,0.18)' : 'rgba(242,181,68,0.35)' }) + text(c, x + 20, ly + 9, l.t, { size: 9, font: 'mono', fill: C.fg55 }); });
  s += '</g>';
  const ky = ly + 24;
  t.tiles.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, 17 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? 'rgba(242,181,68,0.06)' : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  s += text(c, 80, ky + 86, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

const NB = ' ';
export const STRINGS = {
  fr: {
    request: {
      title: 'Une demande d’achat : chaîne d’approbation, budget engagé, bon généré',
      alt: 'Un bandeau : demande DA-0712 du 11 novembre, atelier, trois pompes doseuses, 486 000 dinars, devis du fournisseur joint, centre de coût maintenance. À gauche, la chaîne d’approbation en quatre stations : le demandeur Samir à 8 h 40 ; le chef d’atelier, seuil jusqu’à 100 000, sauté parce que le montant dépasse ; le gérant, seuil jusqu’à 500 000, approuvé à 11 h 20 depuis son téléphone ; la direction au-delà de 500 000, non requise. À droite, l’enveloppe du centre de coût maintenance pour le quatrième trimestre : 2 400 000 dinars, dont 1 310 000 dépensés, 420 000 engagés par des bons ouverts, 486 000 pour cette demande en accent, et 184 000 restants. En dessous, le bon de commande BC-0931 généré à 11 h 24 et envoyé au fournisseur référencé, livraison attendue le 25 novembre au délai mesuré de 14 jours. Trois tuiles : 2 heures 44 de la demande au bon ; 184 000 restants sur l’enveloppe ; zéro ressaisie. Montants, seuils et noms sont un exemple construit.',
      header: 'Demande DA-0712 · 11 nov. 08:40 · atelier · 3 pompes doseuses · 486 000 DA · devis joint · centre de coût : maintenance',
      chainLabel: 'Chaîne d’approbation · par seuil de montant et centre de coût',
      stations: [
        { who: 'Samir · demandeur', rule: 'article, quantité, justification, devis fournisseur', sub: 'ne peut pas s’approuver lui-même', stamp: '08:40', stamp2: 'soumise', state: 'ok' },
        { who: 'Chef d’atelier', rule: 'seuil ≤ 100 000 DA', sub: 'sauté : montant au-dessus du seuil', stamp: 'sauté', stamp2: 'règle écrite', state: 'skip' },
        { who: 'Gérant', rule: 'seuil ≤ 500 000 DA · délégation si absent 48 h', sub: 'approuvé depuis le téléphone · budget vérifié', stamp: '11:20 · approuvé', stamp2: 'signé · motif : remplacement', state: 'ok' },
        { who: 'Direction', rule: 'seuil > 500 000 DA', sub: 'non requise pour ce montant', stamp: '—', stamp2: 'non requise', state: 'none' },
      ],
      budget: { label: 'Enveloppe · maintenance · T4 2026', title: 'Maintenance atelier · 4e trimestre', sub: 'budget écrit par le gérant · recalculé à chaque demande', totalT: `2${NB}400${NB}000 DA`, total: 2400000,
        segs: [{ k: 'spent', v: 1310000, l: 'dépensé', v2: `1${NB}310${NB}000 · factures` }, { k: 'committed', v: 420000, l: 'engagé', v2: `420${NB}000 · bons ouverts` }, { k: 'request', v: 486000, l: 'cette demande', v2: `486${NB}000` }], remaining: `184${NB}000 restants`, remaining2: '7,7 % · alerte sous 10 %' },
      po: { title: 'Bon de commande BC-0931 · généré à 11:24', l1: 'Pompes & Co · fournisseur référencé · n° 0043', l2: 'envoyé : WhatsApp + PDF · accusé reçu 11:31', l3: 'livraison attendue le 25 nov. · délai mesuré 14 j', l4: 'pas de bon, pas de paiement : la facture devra citer BC-0931' },
      tiles: [
        { big: '2 h 44', l1: 'de la demande au bon envoyé', l2: 'deux stations, une sautée par la règle', hot: true },
        { big: `184${NB}000 DA`, l1: 'restants sur l’enveloppe après engagement', l2: 'la prochaine demande verra ce chiffre' },
        { big: '0 ressaisie', l1: 'demande → bon → réception → facture', l2: 'la même ligne traverse les quatre' },
      ],
      rule: 'La chaîne est une règle écrite par seuil et par centre de coût ; l’application la joue, personne ne la choisit au cas par cas.',
      rule2: 'L’enveloppe se consomme à l’approbation, pas à la facture : ce qui est engagé n’est plus disponible.',
      note: 'Montants, seuils, délais et noms sont un exemple construit ; les seuils, les enveloppes et les délégations sont des décisions du gérant.',
    },
    spend: {
      title: 'Le trimestre par centre de coût : dépensé, engagé, en attente',
      alt: 'Six lignes, une par centre de coût, avec une barre de budget découpée en dépensé, engagé par bons ouverts et demandes en attente, contre la ligne du budget à 100 pour cent ; à droite le pourcentage consommé, les factures sans bon et les demandes en attente. Maintenance atelier 72 pour cent, 0 facture sans bon, 2 demandes en attente. Transport 68 pour cent, 1 sans bon, 1 en attente. Marketing 109 pour cent en accent, 2 sans bon, 3 en attente bloquées. Informatique 53 pour cent, 0, 1. Fournitures 92 pour cent, 1, 0. Travaux 38 pour cent, 0, 2. Trois tuiles : 62 pour cent du budget du trimestre consommé toutes enveloppes ; 4 factures sans bon retournées ; 1,9 jour de délai médian d’approbation. Les données sont un exemple construit.',
      cols: ['Centre de coût', 'Budget du trimestre · dépensé / engagé / en attente', 'Consommé', 'Sans bon', 'En attente'], thrLabel: 'budget 100 %',
      rows: [
        { name: 'Maintenance atelier', sub: `2${NB}400${NB}000 DA`, budget: 2400000, spent: 1310000, committed: 420000, pending: 260000, pct: '72 %', nopo: '0', nopoSub: 'facture sans bon', pend: '2', pendSub: 'demandes' },
        { name: 'Transport', sub: `1${NB}800${NB}000 DA`, budget: 1800000, spent: 1050000, committed: 180000, pending: 48000, pct: '68 %', nopo: '1', nopoSub: 'retournée', nopoHot: true, pend: '1', pendSub: 'demande' },
        { name: 'Marketing', sub: `900${NB}000 DA`, budget: 900000, spent: 700000, committed: 280000, pending: 122000, pct: '109 %', nopo: '2', nopoSub: 'retournées', nopoHot: true, pend: '3', pendSub: 'bloquées' },
        { name: 'Informatique', sub: `1${NB}200${NB}000 DA`, budget: 1200000, spent: 410000, committed: 230000, pending: 0, pct: '53 %', nopo: '0', nopoSub: 'facture sans bon', pend: '1', pendSub: 'demande' },
        { name: 'Fournitures', sub: `300${NB}000 DA`, budget: 300000, spent: 236000, committed: 40000, pending: 0, pct: '92 %', nopo: '1', nopoSub: 'retournée', nopoHot: true, pend: '0', pendSub: '' },
        { name: 'Travaux', sub: `3${NB}000${NB}000 DA`, budget: 3000000, spent: 820000, committed: 320000, pending: 0, pct: '38 %', nopo: '0', nopoSub: 'facture sans bon', pend: '2', pendSub: 'demandes' },
      ],
      legend: [{ k: 'spent', t: 'dépensé · factures rapprochées' }, { k: 'committed', t: 'engagé · bons ouverts' }, { k: 'pending', t: 'en attente · demandes' }],
      tiles: [
        { big: '62 %', l1: 'du budget du trimestre consommé, toutes enveloppes', l2: 'dépensé + engagé ÷ budget · au 11 nov.' },
        { big: '4 sans bon', l1: 'factures retournées au fournisseur', l2: 'pas de bon, pas de paiement', hot: true },
        { big: '1,9 j', l1: 'délai médian d’approbation', l2: 'de la soumission à la dernière signature' },
      ],
      rule: 'Le gérant lit trois chiffres par enveloppe : dépensé, engagé, en attente ; la somme contre le budget, pas une impression.',
      rule2: 'Une enveloppe dépassée bloque les nouvelles demandes ou les fait remonter, selon la règle écrite ; elle ne se découvre pas au bilan.',
      note: 'Centres de coût, budgets, montants et délais sont un exemple construit ; les enveloppes et la règle de dépassement sont des décisions du gérant.',
    },
  },
  en: {
    request: {
      title: 'One purchase request: approval chain, committed budget, generated order',
      alt: 'A strip: request PR-0712 of 11 November, workshop, three dosing pumps, 486,000 dinars, supplier quote attached, cost centre maintenance. On the left, the approval chain in four stations: the requester Samir at 08:40; the workshop lead, threshold up to 100,000, skipped because the amount exceeds it; the manager, threshold up to 500,000, approved at 11:20 from his phone; top management above 500,000, not required. On the right, the maintenance cost-centre envelope for the fourth quarter: 2,400,000 dinars, of which 1,310,000 spent, 420,000 committed by open orders, 486,000 for this request accented, and 184,000 remaining. Below, purchase order PO-0931 generated at 11:24 and sent to the referenced supplier, delivery expected on 25 November at the measured 14-day lead time. Three tiles: 2 hours 44 from request to order; 184,000 remaining on the envelope; zero retyping. Amounts, thresholds and names are a constructed example.',
      header: 'Request PR-0712 · 11 Nov 08:40 · workshop · 3 dosing pumps · 486,000 DA · quote attached · cost centre: maintenance',
      chainLabel: 'Approval chain · by amount threshold and cost centre',
      stations: [
        { who: 'Samir · requester', rule: 'item, quantity, justification, supplier quote', sub: 'cannot approve his own request', stamp: '08:40', stamp2: 'submitted', state: 'ok' },
        { who: 'Workshop lead', rule: 'threshold ≤ 100,000 DA', sub: 'skipped: amount above threshold', stamp: 'skipped', stamp2: 'written rule', state: 'skip' },
        { who: 'Manager', rule: 'threshold ≤ 500,000 DA · delegation if absent 48 h', sub: 'approved from the phone · budget checked', stamp: '11:20 · approved', stamp2: 'signed · reason: replacement', state: 'ok' },
        { who: 'Top management', rule: 'threshold > 500,000 DA', sub: 'not required for this amount', stamp: '—', stamp2: 'not required', state: 'none' },
      ],
      budget: { label: 'Envelope · maintenance · Q4 2026', title: 'Workshop maintenance · 4th quarter', sub: 'budget written by the manager · recomputed at every request', totalT: '2,400,000 DA', total: 2400000,
        segs: [{ k: 'spent', v: 1310000, l: 'spent', v2: '1,310,000 · invoices' }, { k: 'committed', v: 420000, l: 'committed', v2: '420,000 · open orders' }, { k: 'request', v: 486000, l: 'this request', v2: '486,000' }], remaining: '184,000 remaining', remaining2: '7.7 % · alert below 10 %' },
      po: { title: 'Purchase order PO-0931 · generated at 11:24', l1: 'Pompes & Co · referenced supplier · no. 0043', l2: 'sent: WhatsApp + PDF · acknowledged 11:31', l3: 'delivery expected 25 Nov · measured lead time 14 d', l4: 'no PO, no pay: the invoice must quote PO-0931' },
      tiles: [
        { big: '2 h 44', l1: 'from request to order sent', l2: 'two stations, one skipped by the rule', hot: true },
        { big: '184,000 DA', l1: 'remaining on the envelope after commitment', l2: 'the next request will see this figure' },
        { big: '0 retyping', l1: 'request → order → reception → invoice', l2: 'the same line runs through all four' },
      ],
      rule: 'The chain is a written rule by threshold and cost centre; the application plays it, nobody picks it case by case.',
      rule2: 'The envelope is consumed at approval, not at invoice: what is committed is no longer available.',
      note: 'Amounts, thresholds, delays and names are a constructed example; thresholds, envelopes and delegations are the manager’s decisions.',
    },
    spend: {
      title: 'The quarter by cost centre: spent, committed, pending',
      alt: 'Six rows, one per cost centre, with a budget bar split into spent, committed by open orders and pending requests, against the 100 percent budget line; on the right the percentage consumed, invoices without an order and pending requests. Workshop maintenance 72 percent, 0 invoice without order, 2 pending. Transport 68 percent, 1 without order, 1 pending. Marketing 109 percent accented, 2 without order, 3 pending blocked. IT 53 percent, 0, 1. Supplies 92 percent, 1, 0. Works 38 percent, 0, 2. Three tiles: 62 percent of the quarter’s budget consumed across envelopes; 4 invoices without order returned; 1.9 days median approval time. The data is a constructed example.',
      cols: ['Cost centre', 'Quarter budget · spent / committed / pending', 'Consumed', 'No PO', 'Pending'], thrLabel: 'budget 100 %',
      rows: [
        { name: 'Workshop maintenance', sub: '2,400,000 DA', budget: 2400000, spent: 1310000, committed: 420000, pending: 260000, pct: '72 %', nopo: '0', nopoSub: 'invoice without PO', pend: '2', pendSub: 'requests' },
        { name: 'Transport', sub: '1,800,000 DA', budget: 1800000, spent: 1050000, committed: 180000, pending: 48000, pct: '68 %', nopo: '1', nopoSub: 'returned', nopoHot: true, pend: '1', pendSub: 'request' },
        { name: 'Marketing', sub: '900,000 DA', budget: 900000, spent: 700000, committed: 280000, pending: 122000, pct: '109 %', nopo: '2', nopoSub: 'returned', nopoHot: true, pend: '3', pendSub: 'blocked' },
        { name: 'IT', sub: '1,200,000 DA', budget: 1200000, spent: 410000, committed: 230000, pending: 0, pct: '53 %', nopo: '0', nopoSub: 'invoice without PO', pend: '1', pendSub: 'request' },
        { name: 'Supplies', sub: '300,000 DA', budget: 300000, spent: 236000, committed: 40000, pending: 0, pct: '92 %', nopo: '1', nopoSub: 'returned', nopoHot: true, pend: '0', pendSub: '' },
        { name: 'Works', sub: '3,000,000 DA', budget: 3000000, spent: 820000, committed: 320000, pending: 0, pct: '38 %', nopo: '0', nopoSub: 'invoice without PO', pend: '2', pendSub: 'requests' },
      ],
      legend: [{ k: 'spent', t: 'spent · matched invoices' }, { k: 'committed', t: 'committed · open orders' }, { k: 'pending', t: 'pending · requests' }],
      tiles: [
        { big: '62 %', l1: 'of the quarter’s budget consumed, all envelopes', l2: 'spent + committed ÷ budget · as of 11 Nov' },
        { big: '4 without PO', l1: 'invoices returned to the supplier', l2: 'no PO, no pay', hot: true },
        { big: '1.9 d', l1: 'median approval time', l2: 'from submission to last signature' },
      ],
      rule: 'The manager reads three figures per envelope: spent, committed, pending; the sum against the budget, not an impression.',
      rule2: 'An exceeded envelope blocks new requests or escalates them, by written rule; it is not discovered at year end.',
      note: 'Cost centres, budgets, amounts and delays are a constructed example; envelopes and the overrun rule are the manager’s decisions.',
    },
  },
  ar: {
    request: {
      title: 'طلب شراء واحد: سلسلة موافقة، ميزانية ملتزَم بها، أمر مولَّد',
      alt: 'شريط: الطلب DA-0712 في 11 نوفمبر، الورشة، ثلاث مضخات جرعات، 486,000 دينار، عرض سعر المورد مرفق، مركز الكلفة الصيانة. على اليمين سلسلة الموافقة في أربع محطات: الطالب سمير الساعة 08:40؛ رئيس الورشة، عتبة حتى 100,000، تُخطّى لأن المبلغ يتجاوزها؛ المسيّر، عتبة حتى 500,000، وافق الساعة 11:20 من هاتفه؛ الإدارة فوق 500,000، غير مطلوبة. على اليسار غلاف مركز كلفة الصيانة للربع الرابع: 2,400,000 دينار، منها 1,310,000 منفقة، و420,000 ملتزَم بها بأوامر مفتوحة، و486,000 لهذا الطلب مميزة، و184,000 متبقية. وتحته أمر الشراء BC-0931 المولَّد الساعة 11:24 والمرسل إلى المورد المرجعي، تسليم متوقع في 25 نوفمبر بمهلة مقيسة 14 يوماً. ثلاث بطاقات: ساعتان و44 دقيقة من الطلب إلى الأمر؛ 184,000 متبقية على الغلاف؛ صفر إعادة كتابة. المبالغ والعتبات والأسماء مثال مبني.',
      header: `الطلب ${I('DA-0712')} · ${I('11')} نوفمبر ${I('08:40')} · الورشة · ${I('3')} مضخات جرعات · ${I('486,000 DA')} · عرض سعر مرفق · مركز الكلفة: الصيانة`,
      chainLabel: 'سلسلة الموافقة · بعتبة المبلغ ومركز الكلفة',
      stations: [
        { who: 'سمير · الطالب', rule: 'صنف، كمية، تبرير، عرض سعر المورد', sub: 'لا يستطيع الموافقة على طلبه', stamp: I('08:40'), stamp2: 'مقدَّم', state: 'ok' },
        { who: 'رئيس الورشة', rule: `عتبة ${I('≤ 100,000 DA')}`, sub: 'تُخطّي: المبلغ فوق العتبة', stamp: 'تُخطّي', stamp2: 'قاعدة مكتوبة', state: 'skip' },
        { who: 'المسيّر', rule: `عتبة ${I('≤ 500,000 DA')} · تفويض إن غاب ${I('48')} ساعة`, sub: 'وافق من الهاتف · الميزانية مفحوصة', stamp: `${I('11:20')} · موافَق`, stamp2: 'موقَّع · السبب: استبدال', state: 'ok' },
        { who: 'الإدارة', rule: `عتبة ${I('> 500,000 DA')}`, sub: 'غير مطلوبة لهذا المبلغ', stamp: '—', stamp2: 'غير مطلوبة', state: 'none' },
      ],
      budget: { label: `الغلاف · الصيانة · ${I('T4 2026')}`, title: 'صيانة الورشة · الربع الرابع', sub: 'ميزانية يكتبها المسيّر · تُعاد حسابها عند كل طلب', totalT: I('2,400,000 DA'), total: 2400000,
        segs: [{ k: 'spent', v: 1310000, l: 'منفق', v2: `${I('1,310,000')} · فواتير` }, { k: 'committed', v: 420000, l: 'ملتزَم به', v2: `${I('420,000')} · أوامر مفتوحة` }, { k: 'request', v: 486000, l: 'هذا الطلب', v2: I('486,000') }], remaining: `${I('184,000')} متبقية`, remaining2: `${I('7.7 %')} · تنبيه تحت ${I('10 %')}` },
      po: { title: `أمر الشراء ${I('BC-0931')} · مولَّد ${I('11:24')}`, l1: `${I('Pompes & Co')} · مورد مرجعي · رقم ${I('0043')}`, l2: `مرسل: واتساب + ${I('PDF')} · إشعار استلام ${I('11:31')}`, l3: `تسليم متوقع ${I('25')} نوفمبر · مهلة مقيسة ${I('14')} يوماً`, l4: `لا أمر، لا دفع: على الفاتورة أن تذكر ${I('BC-0931')}` },
      tiles: [
        { big: `${I('2')} س ${I('44')} د`, l1: 'من الطلب إلى الأمر المرسل', l2: 'محطتان، واحدة تُخطّيت بالقاعدة', hot: true },
        { big: I('184,000 DA'), l1: 'متبقية على الغلاف بعد الالتزام', l2: 'الطلب التالي سيرى هذا الرقم' },
        { big: `${I('0')} إعادة كتابة`, l1: 'طلب ← أمر ← استلام ← فاتورة', l2: 'السطر نفسه يعبر الأربعة' },
      ],
      rule: 'السلسلة قاعدة مكتوبة بالعتبة ومركز الكلفة؛ والتطبيق يلعبها، ولا أحد يختارها حالة بحالة.',
      rule2: 'الغلاف يُستهلك عند الموافقة لا عند الفاتورة: ما التُزم به لم يعد متاحاً.',
      note: 'المبالغ والعتبات والمهل والأسماء مثال مبني؛ والعتبات والأغلفة والتفويضات قرارات المسيّر.',
    },
    spend: {
      title: 'الربع بمركز الكلفة: منفق، ملتزَم به، معلَّق',
      alt: 'ستة أسطر، سطر لكل مركز كلفة، بشريط ميزانية مقسَّم إلى منفق وملتزَم به بأوامر مفتوحة وطلبات معلَّقة، مقابل خط الميزانية عند 100 بالمائة؛ وعلى الطرف النسبة المستهلكة والفواتير بلا أمر والطلبات المعلَّقة. صيانة الورشة 72 بالمائة، 0 فاتورة بلا أمر، 2 معلَّقان. النقل 68 بالمائة، 1 بلا أمر، 1 معلَّق. التسويق 109 بالمائة مميز، 2 بلا أمر، 3 معلَّقة محجوزة. المعلوماتية 53 بالمائة، 0، 1. اللوازم 92 بالمائة، 1، 0. الأشغال 38 بالمائة، 0، 2. ثلاث بطاقات: 62 بالمائة من ميزانية الربع مستهلكة في كل الأغلفة؛ 4 فواتير بلا أمر أُعيدت؛ 1.9 يوم مهلة موافقة وسيطة. البيانات مثال مبني.',
      cols: ['مركز الكلفة', 'ميزانية الربع · منفق / ملتزَم به / معلَّق', 'مستهلَك', 'بلا أمر', 'معلَّق'], thrLabel: `الميزانية ${I('100 %')}`,
      rows: [
        { name: 'صيانة الورشة', sub: I('2,400,000 DA'), budget: 2400000, spent: 1310000, committed: 420000, pending: 260000, pct: I('72 %'), nopo: I('0'), nopoSub: 'فاتورة بلا أمر', pend: I('2'), pendSub: 'طلبان' },
        { name: 'النقل', sub: I('1,800,000 DA'), budget: 1800000, spent: 1050000, committed: 180000, pending: 48000, pct: I('68 %'), nopo: I('1'), nopoSub: 'أُعيدت', nopoHot: true, pend: I('1'), pendSub: 'طلب' },
        { name: 'التسويق', sub: I('900,000 DA'), budget: 900000, spent: 700000, committed: 280000, pending: 122000, pct: I('109 %'), nopo: I('2'), nopoSub: 'أُعيدتا', nopoHot: true, pend: I('3'), pendSub: 'محجوزة' },
        { name: 'المعلوماتية', sub: I('1,200,000 DA'), budget: 1200000, spent: 410000, committed: 230000, pending: 0, pct: I('53 %'), nopo: I('0'), nopoSub: 'فاتورة بلا أمر', pend: I('1'), pendSub: 'طلب' },
        { name: 'اللوازم', sub: I('300,000 DA'), budget: 300000, spent: 236000, committed: 40000, pending: 0, pct: I('92 %'), nopo: I('1'), nopoSub: 'أُعيدت', nopoHot: true, pend: I('0'), pendSub: '' },
        { name: 'الأشغال', sub: I('3,000,000 DA'), budget: 3000000, spent: 820000, committed: 320000, pending: 0, pct: I('38 %'), nopo: I('0'), nopoSub: 'فاتورة بلا أمر', pend: I('2'), pendSub: 'طلبان' },
      ],
      legend: [{ k: 'spent', t: 'منفق · فواتير مطابَقة' }, { k: 'committed', t: 'ملتزَم به · أوامر مفتوحة' }, { k: 'pending', t: 'معلَّق · طلبات' }],
      tiles: [
        { big: I('62 %'), l1: 'من ميزانية الربع مستهلكة، كل الأغلفة', l2: `منفق + ملتزَم به ÷ الميزانية · في ${I('11')} نوفمبر` },
        { big: `${I('4')} بلا أمر`, l1: 'فواتير أُعيدت إلى المورد', l2: 'لا أمر، لا دفع', hot: true },
        { big: `${I('1.9')} يوم`, l1: 'مهلة موافقة وسيطة', l2: 'من التقديم إلى آخر توقيع' },
      ],
      rule: 'يقرأ المسيّر ثلاثة أرقام لكل غلاف: منفق، ملتزَم به، معلَّق؛ والمجموع مقابل الميزانية لا انطباعاً.',
      rule2: 'الغلاف المتجاوَز يحجز الطلبات الجديدة أو يصعّدها بحسب القاعدة المكتوبة؛ ولا يُكتشف في الحصيلة.',
      note: 'مراكز الكلفة والميزانيات والمبالغ والمهل مثال مبني؛ والأغلفة وقاعدة التجاوز قرارات المسيّر.',
    },
  },
};
