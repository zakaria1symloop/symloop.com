// Bespoke animated figures for the 2027 "the lot that expires first is at the back" post.
//  fefo():   picking 120 units of one product on 10 November across four lots:
//            an expiry strip with today's marker and the customer's minimum
//            shelf-life line, four lot cards (quarantine, too short, FEFO first,
//            FEFO second) with state and available quantity, the proposed pick
//            split, and the two movement rows it writes. Cards appear, the pick
//            bars grow.
//  recall(): a supplier recall of one lot at 09:12: the lot node fans out to the
//            reception, the depots holding it, the delivery notes and the
//            customers who received it, with quantities; a state badge flips
//            the lot to blocked, counters show received / in stock / delivered /
//            to recover, and a clock strip shows the minutes each step took.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function draw(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{stroke-dashoffset:1000}${(at + dur).toFixed(1)}%,100%{stroke-dashoffset:0}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function grow(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
const I = (x) => `⁦${x}⁩`;

export function fefo(t, rtl) {
  const c = ctx(rtl); const P = 'ff'; const css = []; const H = 632;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  // expiry strip: Nov 2026 → May 2027 (0..180 days)
  const sx = 80, sw = 1040, sy = 152; const dayX = (d) => sx + (d / 180) * sw;
  s += text(c, sx, 100, t.stripLabel, { size: 10, font: 'mono', fill: C.fg35, letter: 1.5, upper: true });
  s += line(c, sx, sy, sx + sw, sy, { stroke: C.line2 });
  t.ticks.forEach((tk) => { s += line(c, dayX(tk.d), sy - 4, dayX(tk.d), sy + 4, { stroke: C.line2 }) + text(c, dayX(tk.d), sy + 18, tk.label, { size: 9, font: 'mono', fill: C.fg35, anchor: 'middle' }); });
  // today marker and min shelf life zone
  s += `<g style="animation:${show(css, P, 'today', 2)}">` + line(c, dayX(0), sy - 34, dayX(0), sy + 6, { stroke: C.accent, width: 1.5 }) + text(c, dayX(0) + (rtl ? -6 : 6), sy - 30, t.today, { size: 9, font: 'mono', fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'msl', 4)}">` + rect(c, dayX(0), sy - 9, dayX(t.minDays) - dayX(0), 6, { stroke: 'none', fill: 'rgba(242,181,68,0.25)' }) + line(c, dayX(t.minDays), sy - 34, dayX(t.minDays), sy + 6, { stroke: C.accent, dash: '3 3' }) + text(c, dayX(t.minDays) + (rtl ? -6 : 6), sy - 30, t.minLabel, { size: 9, font: 'mono', fill: C.accent }) + '</g>';
  // lot dots on strip
  t.lots.forEach((l, i) => { s += `<g style="animation:${show(css, P, `d${i}`, 6 + i * 2)}">` + circle(c, dayX(l.d), sy, 5, { fill: l.state === 'pick' ? C.accent : l.state === 'short' ? C.fg35 : C.fg55, stroke: 'none' }) + text(c, dayX(l.d), sy - 12, l.id, { size: 9, font: 'mono', fill: l.state === 'pick' ? C.accent : C.fg55, anchor: 'middle' }) + '</g>'; });
  // lot cards
  const cy = 196, cw = 250, ch = 118;
  t.lots.forEach((l, i) => {
    const x = 80 + i * 263; const at = 14 + i * 3; const hot = l.state === 'pick';
    s += `<g style="animation:${show(css, P, `c${i}`, at)}">` + rect(c, x, cy, cw, ch, { stroke: hot ? C.accent : C.line2, fill: hot ? 'rgba(242,181,68,0.06)' : C.fill })
      + text(c, x + 12, cy + 20, l.id, { size: 12, font: 'mono', fill: hot ? C.accent : C.fg, weight: 500 })
      + text(c, x + 12, cy + 36, l.expiry, { size: 9.5, font: 'mono', fill: C.fg55 })
      + text(c, x + 12, cy + 52, l.qty, { size: 9.5, font: 'mono', fill: C.fg70 })
      + text(c, x + 12, cy + 68, l.loc, { size: 9.5, font: 'mono', fill: C.fg55 })
      + rect(c, x + 12, cy + 80, cw - 24, 22, { stroke: hot ? C.accent : l.state === 'quar' ? C.fg55 : C.line2, fill: 'none' })
      + text(c, x + 20, cy + 95, l.badge, { size: 9.5, font: 'mono', fill: hot ? C.accent : l.state === 'quar' ? C.fg70 : C.fg55 }) + '</g>';
  });
  // pick proposal
  const py = 342;
  s += `<g style="animation:${show(css, P, 'pk', 28)}">` + text(c, 80, py, t.pickLabel, { size: 10, font: 'mono', fill: C.fg35, letter: 1.5, upper: true }) + '</g>';
  const barX = 80, barW = 1040, bh = 26; let acc = 0;
  t.pick.forEach((p, i) => {
    const w = Math.round((p.qty / t.pickTotal) * barW); const x = barX + acc; acc += w; const at = 30 + i * 4;
    s += `<g style="animation:${show(css, P, `p${i}`, at)}"><g style="transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'};animation:${grow(css, P, `pg${i}`, at, 3)}">` + rect(c, x, py + 12, w - 4, bh, { stroke: C.accent, fill: i === 0 ? 'rgba(242,181,68,0.25)' : 'rgba(242,181,68,0.10)' }) + '</g>' + text(c, x + 10, py + 29, p.label, { size: 10, font: 'mono', fill: C.fg }) + '</g>';
  });
  s += `<g style="animation:${show(css, P, 'ex', 38)}">` + text(c, 80, py + 58, t.excluded, { size: 9.5, font: 'mono', fill: C.fg55 }) + '</g>';
  // movement rows
  const my = 424;
  s += `<g style="animation:${show(css, P, 'mv', 42)}">` + text(c, 80, my, t.movLabel, { size: 10, font: 'mono', fill: C.fg35, letter: 1.5, upper: true }) + line(c, 80, my + 8, 1120, my + 8, { stroke: C.line2 });
  t.movCols.forEach((h, i) => { s += text(c, [80, 160, 300, 440, 560, 700, 880][i], my + 24, h, { size: 9, font: 'mono', fill: C.fg35 }); });
  t.moves.forEach((m, i) => { const y = my + 46 + i * 24; s += line(c, 80, y + 8, 1120, y + 8, { stroke: C.line }); m.forEach((v, j) => { s += text(c, [80, 160, 300, 440, 560, 700, 880][j], y, v, { size: 9.5, font: 'mono', fill: j === 3 ? C.accent : C.fg70 }); }); });
  s += '</g>';
  s += text(c, 80, 548, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, 568, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, 588, t.rule3, { size: 12.5, fill: C.fg }) + text(c, 80, 612, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

export function recall(t, rtl) {
  const c = ctx(rtl); const P = 'rc'; const css = []; const H = 596;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  // lot node left
  const lx = 80, ly = 150, lw = 210, lh = 96;
  s += `<g style="animation:${show(css, P, 'lot', 2)}">` + rect(c, lx, ly, lw, lh, { stroke: C.accent, fill: 'rgba(242,181,68,0.06)' })
    + text(c, lx + 12, ly + 22, t.lot.id, { size: 13, font: 'mono', fill: C.accent, weight: 500 }) + text(c, lx + 12, ly + 40, t.lot.l1, { size: 9.5, font: 'mono', fill: C.fg55 }) + text(c, lx + 12, ly + 54, t.lot.l2, { size: 9.5, font: 'mono', fill: C.fg55 })
    + rect(c, lx + 12, ly + 64, lw - 24, 22, { stroke: C.accent, fill: 'rgba(242,181,68,0.18)' }) + text(c, lx + 20, ly + 79, t.lot.badge, { size: 9.5, font: 'mono', fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'lt', 3)}">` + text(c, lx, ly - 12, t.lot.label, { size: 10, font: 'mono', fill: C.fg35, letter: 1.5, upper: true }) + '</g>';
  // column 2: where it is (reception + depots)
  const c2x = 360, c2w = 220;
  s += `<g style="animation:${show(css, P, 'c2l', 8)}">` + text(c, c2x, 104, t.col2, { size: 10, font: 'mono', fill: C.fg35, letter: 1.5, upper: true }) + '</g>';
  t.places.forEach((p, i) => {
    const y = 118 + i * 62; const at = 9 + i * 2.5;
    s += `<path d="M${c.X(lx + lw)} ${ly + lh / 2} C ${c.X(lx + lw + 35)} ${ly + lh / 2}, ${c.X(c2x - 35)} ${y + 25}, ${c.X(c2x)} ${y + 25}" fill="none" stroke="${C.line2}" stroke-width="1" pathLength="1000" style="stroke-dashoffset:0;animation:${draw(css, P, `l2${i}`, at - 1, 2.5)}"/>`;
    s += `<g style="animation:${show(css, P, `p${i}`, at)}">` + rect(c, c2x, y, c2w, 50, { stroke: C.line2, fill: C.fill }) + text(c, c2x + 10, y + 18, p.title, { size: 10.5, fill: C.fg }) + text(c, c2x + 10, y + 32, p.l1, { size: 8.5, font: 'mono', fill: C.fg55 }) + text(c, c2x + 10, y + 44, p.l2, { size: 8.5, font: 'mono', fill: p.hot ? C.accent : C.fg55 }) + '</g>';
  });
  // column 3: customers
  const c3x = 650, c3w = 470;
  s += `<g style="animation:${show(css, P, 'c3l', 18)}">` + text(c, c3x, 104, t.col3, { size: 10, font: 'mono', fill: C.fg35, letter: 1.5, upper: true }) + '</g>';
  t.customers.forEach((k, i) => {
    const y = 118 + i * 46; const at = 19 + i * 2.5; const from = t.places[k.from]; const fy = 118 + k.from * 62 + 25;
    s += `<path d="M${c.X(c2x + c2w)} ${fy} C ${c.X(c2x + c2w + 30)} ${fy}, ${c.X(c3x - 30)} ${y + 20}, ${c.X(c3x)} ${y + 20}" fill="none" stroke="${C.line}" stroke-width="1" pathLength="1000" style="stroke-dashoffset:0;animation:${draw(css, P, `l3${i}`, at - 1, 2.5)}"/>`;
    s += `<g style="animation:${show(css, P, `k${i}`, at)}">` + rect(c, c3x, y, c3w, 38, { stroke: C.line2, fill: C.fill }) + text(c, c3x + 10, y + 16, k.name, { size: 10.5, fill: C.fg }) + text(c, c3x + 10, y + 30, k.l1, { size: 8.5, font: 'mono', fill: C.fg55 }) + text(c, c3x + c3w - 10, y + 16, k.qty, { size: 10, font: 'mono', fill: C.accent, anchor: 'end' }) + text(c, c3x + c3w - 10, y + 30, k.action, { size: 8.5, font: 'mono', fill: C.fg55, anchor: 'end' }) + '</g>';
    void from;
  });
  // counters
  const ky = 392;
  t.counters.forEach((k, i) => { const x = 80 + i * 262; s += `<g style="animation:${show(css, P, `n${i}`, 34 + i * 2)}">` + rect(c, x, ky, 250, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? 'rgba(242,181,68,0.06)' : C.fill }) + text(c, x + 12, ky + 24, k.big, { size: 16, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 42, k.label, { size: 9.5, fill: C.fg70 }) + '</g>'; });
  // clock strip
  const cky = 474;
  s += `<g style="animation:${show(css, P, 'ck', 42)}">` + text(c, 80, cky, t.clockLabel, { size: 10, font: 'mono', fill: C.fg35, letter: 1.5, upper: true });
  let cx = 80; t.clock.forEach((st, i) => { const w = st.w; s += rect(c, cx, cky + 8, w - 4, 18, { stroke: i === t.clock.length - 1 ? C.accent : C.line2, fill: C.fill }) + text(c, cx + 8, cky + 21, st.label, { size: 9, font: 'mono', fill: i === t.clock.length - 1 ? C.accent : C.fg70 }); cx += w; });
  s += '</g>';
  s += text(c, 80, 530, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, 550, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, 574, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"],svg path[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    fefo: {
      title: 'Préparer 120 unités le 10 novembre : quatre lots, une règle, un ordre de sortie',
      alt: 'En haut, une frise des dates de péremption de novembre 2026 à mai 2027 avec le marqueur d’aujourd’hui et la durée restante minimale exigée par le client, 60 jours ; quatre lots y sont placés. Au milieu, quatre cartes : un lot en quarantaine en attente de contrôle, un lot qui expire le 20 novembre, trop court pour ce client ; un lot qui expire le 15 janvier avec 40 unités disponibles, à sortir en premier ; un lot qui expire le 2 mars avec 200 unités, en second. En dessous, la proposition de préparation : 40 du premier, 80 du second, les deux autres exclus avec la raison. En bas, les deux mouvements de stock écrits, chacun avec son lot. Les données sont un exemple construit.',
      stripLabel: 'Dates de péremption · aujourd’hui 10 novembre 2026',
      ticks: [{ d: 20, label: '30 nov' }, { d: 51, label: '31 déc' }, { d: 82, label: '31 jan' }, { d: 110, label: '28 fév' }, { d: 141, label: '31 mars' }, { d: 171, label: '30 avr' }],
      today: 'aujourd’hui', minDays: 60, minLabel: '≥ 60 j restants (règle client)',
      lots: [
        { id: 'L2407Q', d: 45, expiry: 'exp. 25 déc 2026 · 45 j', qty: '60 unités · non disponibles', loc: 'zone quarantaine · Q-01', badge: 'quarantaine · contrôle en attente', state: 'quar' },
        { id: 'L2408Z', d: 10, expiry: 'exp. 20 nov 2026 · 10 j', qty: '25 unités disponibles', loc: 'dépôt Alger · A-12-3', badge: 'trop court · < 60 j · déstockage', state: 'short' },
        { id: 'L2409A', d: 66, expiry: 'exp. 15 jan 2027 · 66 j', qty: '40 unités disponibles', loc: 'dépôt Alger · A-12-4', badge: 'à sortir en premier', state: 'pick' },
        { id: 'L2410B', d: 112, expiry: 'exp. 2 mars 2027 · 112 j', qty: '200 unités disponibles', loc: 'dépôt Alger · B-03-1', badge: 'à sortir en second', state: 'pick' },
      ],
      pickLabel: 'Proposition pour la commande de 120 unités · client : durée restante ≥ 60 j',
      pickTotal: 120, pick: [{ qty: 40, label: '40 × L2409A · le plus proche de la date, encore conforme' }, { qty: 80, label: '80 × L2410B · le reste, lot suivant' }],
      excluded: 'exclus : L2408Z (10 j restants, sous la règle du client → proposé à un client sans règle ou en déstockage) · L2407Q (quarantaine)',
      movLabel: 'Mouvements écrits par la préparation', movCols: ['heure', 'type', 'produit', 'lot', 'quantité', 'emplacement', 'document'],
      moves: [['09:41', 'sortie', 'HT-FLEU-5', 'L2409A', '− 40', 'A-12-4', 'BL-2211 · ligne 1'], ['09:41', 'sortie', 'HT-FLEU-5', 'L2410B', '− 80', 'B-03-1', 'BL-2211 · ligne 1']],
      rule: 'Le lot n’est pas un champ de la fiche produit : c’est une entité reçue, avec sa date, son état et ses emplacements, et chaque mouvement de stock le nomme.',
      rule2: 'La sortie suit la date de péremption la plus proche, sous la règle de durée restante du client ; le préparateur peut changer, mais il écrit pourquoi.',
      rule3: 'Un lot en quarantaine existe en stock et n’est disponible pour personne ; un lot trop court pour ce client peut l’être pour un autre.',
      note: 'lots, dates, quantités et règle de 60 jours : exemple construit · la date est lue dans le code-barres GS1-128 du carton (AI 17) quand il en porte un',
    },
    recall: {
      title: 'Le fournisseur rappelle le lot L2409A à 9 h 12 : où il est, qui l’a reçu, en quatorze minutes',
      alt: 'À gauche, le lot rappelé, L2409A, 500 unités reçues le 14 septembre, passé à l’état bloqué à 9 h 13. Au centre, où il est : la réception d’origine, le dépôt d’Alger avec 140 unités en stock bloquées, le dépôt de Sétif avec 0 après transfert. À droite, les cinq clients qui en ont reçu par sept bons de livraison, avec les quantités et l’action : message WhatsApp envoyé, bon de retour créé. En bas, quatre compteurs : 500 reçues, 140 en stock bloquées, 360 livrées à cinq clients, 360 à récupérer ; et une frise des minutes : bloquer 1 min, lister 0, prévenir 5, retours 8. Les données sont un exemple construit.',
      lot: { label: 'Lot rappelé', id: 'L2409A', l1: 'HT-FLEU-5 · exp. 15 jan 2027', l2: 'reçu le 14 sept · 500 unités', badge: 'bloqué · 9 h 13 · motif : rappel' },
      col2: 'Où il est passé',
      places: [
        { title: 'Réception R-0914', l1: 'fournisseur Cevital · 14 sept', l2: '500 unités · GS1-128 scanné' },
        { title: 'Dépôt Alger', l1: '140 unités en stock', l2: 'bloquées · indisponibles à la vente', hot: true },
        { title: 'Dépôt Sétif', l1: 'transfert T-0921 · 120 unités', l2: '0 en stock · tout livré' },
        { title: 'Bons de livraison', l1: '7 BL · du 16 sept au 8 nov', l2: '360 unités livrées' },
      ],
      col3: 'Qui l’a reçu',
      customers: [
        { from: 3, name: 'Supérette El Amel', l1: 'BL-2048, BL-2130 · Alger', qty: '96', action: 'WhatsApp envoyé · retour BR-301' },
        { from: 3, name: 'Dépôt Sidi Bel Abbès', l1: 'BL-2071 · depuis Sétif', qty: '120', action: 'WhatsApp envoyé · retour BR-302' },
        { from: 3, name: 'Alimentation Ryad', l1: 'BL-2102 · Alger', qty: '48', action: 'WhatsApp envoyé · retour BR-303' },
        { from: 3, name: 'Épicerie Hamid', l1: 'BL-2155, BL-2190 · Alger', qty: '72', action: 'appel · pas de WhatsApp' },
        { from: 3, name: 'Grossiste Nord', l1: 'BL-2211 · 10 nov · ce matin', qty: '24', action: 'camion rappelé avant livraison' },
      ],
      counters: [{ big: '500', label: 'unités reçues du lot' }, { big: '140', label: 'en stock · bloquées', hot: true }, { big: '360', label: 'livrées à 5 clients · 7 BL' }, { big: '360', label: 'à récupérer · 5 bons de retour', hot: true }],
      clockLabel: 'Minutes', clock: [{ w: 90, label: 'bloquer · 1' }, { w: 90, label: 'lister · 0' }, { w: 160, label: 'prévenir · 5' }, { w: 230, label: 'bons de retour · 8' }, { w: 470, label: 'total · 14 min, parce que chaque mouvement portait le lot' }],
      rule: 'Un rappel est une requête, pas une enquête : tous les mouvements du lot, réceptions, transferts, livraisons, retours, sont dans le journal, avec le client au bout.',
      rule2: 'Le blocage précède tout : à 9 h 13 le lot n’est plus vendable nulle part, y compris sur les terminaux hors ligne dès leur synchronisation.',
      note: 'lot, clients, quantités et minutes : exemple construit · le même journal répond à la question inverse : « quels lots ce client a-t-il reçus ? »',
    },
  },
  en: {
    fefo: {
      title: 'Picking 120 units on 10 November: four lots, one rule, one order of exit',
      alt: 'At the top, a strip of expiry dates from November 2026 to May 2027 with today’s marker and the minimum remaining shelf life the customer requires, 60 days; four lots are placed on it. In the middle, four cards: a lot in quarantine awaiting inspection, a lot expiring on 20 November, too short for this customer; a lot expiring on 15 January with 40 units available, to go out first; a lot expiring on 2 March with 200 units, second. Below, the proposed pick: 40 from the first, 80 from the second, the other two excluded with the reason. At the bottom, the two stock movements written, each with its lot. The data is a constructed example.',
      stripLabel: 'Expiry dates · today 10 November 2026',
      ticks: [{ d: 20, label: '30 Nov' }, { d: 51, label: '31 Dec' }, { d: 82, label: '31 Jan' }, { d: 110, label: '28 Feb' }, { d: 141, label: '31 Mar' }, { d: 171, label: '30 Apr' }],
      today: 'today', minDays: 60, minLabel: '≥ 60 d remaining (customer rule)',
      lots: [
        { id: 'L2407Q', d: 45, expiry: 'exp. 25 Dec 2026 · 45 d', qty: '60 units · not available', loc: 'quarantine zone · Q-01', badge: 'quarantine · inspection pending', state: 'quar' },
        { id: 'L2408Z', d: 10, expiry: 'exp. 20 Nov 2026 · 10 d', qty: '25 units available', loc: 'Algiers depot · A-12-3', badge: 'too short · < 60 d · clearance', state: 'short' },
        { id: 'L2409A', d: 66, expiry: 'exp. 15 Jan 2027 · 66 d', qty: '40 units available', loc: 'Algiers depot · A-12-4', badge: 'to go out first', state: 'pick' },
        { id: 'L2410B', d: 112, expiry: 'exp. 2 Mar 2027 · 112 d', qty: '200 units available', loc: 'Algiers depot · B-03-1', badge: 'to go out second', state: 'pick' },
      ],
      pickLabel: 'Proposal for the 120-unit order · customer: remaining shelf life ≥ 60 d',
      pickTotal: 120, pick: [{ qty: 40, label: '40 × L2409A · closest to its date, still compliant' }, { qty: 80, label: '80 × L2410B · the rest, next lot' }],
      excluded: 'excluded: L2408Z (10 d remaining, below the customer’s rule → offered to a customer without a rule or in clearance) · L2407Q (quarantine)',
      movLabel: 'Movements written by the pick', movCols: ['time', 'type', 'product', 'lot', 'quantity', 'location', 'document'],
      moves: [['09:41', 'issue', 'HT-FLEU-5', 'L2409A', '− 40', 'A-12-4', 'DN-2211 · line 1'], ['09:41', 'issue', 'HT-FLEU-5', 'L2410B', '− 80', 'B-03-1', 'DN-2211 · line 1']],
      rule: 'The lot is not a field on the product record: it is a received entity, with its date, its state and its locations, and every stock movement names it.',
      rule2: 'Exit follows the closest expiry date, under the customer’s remaining-shelf-life rule; the picker can change it, but writes why.',
      rule3: 'A quarantined lot exists in stock and is available to nobody; a lot too short for this customer may be fine for another.',
      note: 'lots, dates, quantities and the 60-day rule: constructed example · the date is read from the case’s GS1-128 barcode (AI 17) when it carries one',
    },
    recall: {
      title: 'The supplier recalls lot L2409A at 9:12: where it is, who received it, in fourteen minutes',
      alt: 'On the left, the recalled lot, L2409A, 500 units received on 14 September, switched to blocked at 9:13. In the centre, where it went: the original reception, the Algiers depot with 140 units in stock blocked, the Sétif depot with 0 after transfer. On the right, the five customers who received it through seven delivery notes, with quantities and the action: WhatsApp message sent, return note created. At the bottom, four counters: 500 received, 140 in stock blocked, 360 delivered to five customers, 360 to recover; and a strip of minutes: block 1 min, list 0, notify 5, returns 8. The data is a constructed example.',
      lot: { label: 'Recalled lot', id: 'L2409A', l1: 'HT-FLEU-5 · exp. 15 Jan 2027', l2: 'received 14 Sep · 500 units', badge: 'blocked · 9:13 · reason: recall' },
      col2: 'Where it went',
      places: [
        { title: 'Reception R-0914', l1: 'supplier Cevital · 14 Sep', l2: '500 units · GS1-128 scanned' },
        { title: 'Algiers depot', l1: '140 units in stock', l2: 'blocked · unavailable for sale', hot: true },
        { title: 'Sétif depot', l1: 'transfer T-0921 · 120 units', l2: '0 in stock · all delivered' },
        { title: 'Delivery notes', l1: '7 DN · 16 Sep to 8 Nov', l2: '360 units delivered' },
      ],
      col3: 'Who received it',
      customers: [
        { from: 3, name: 'El Amel Minimarket', l1: 'DN-2048, DN-2130 · Algiers', qty: '96', action: 'WhatsApp sent · return RN-301' },
        { from: 3, name: 'Sidi Bel Abbès Depot', l1: 'DN-2071 · from Sétif', qty: '120', action: 'WhatsApp sent · return RN-302' },
        { from: 3, name: 'Ryad Foods', l1: 'DN-2102 · Algiers', qty: '48', action: 'WhatsApp sent · return RN-303' },
        { from: 3, name: 'Hamid Grocery', l1: 'DN-2155, DN-2190 · Algiers', qty: '72', action: 'call · no WhatsApp' },
        { from: 3, name: 'North Wholesale', l1: 'DN-2211 · 10 Nov · this morning', qty: '24', action: 'truck called back before delivery' },
      ],
      counters: [{ big: '500', label: 'units of the lot received' }, { big: '140', label: 'in stock · blocked', hot: true }, { big: '360', label: 'delivered to 5 customers · 7 DN' }, { big: '360', label: 'to recover · 5 return notes', hot: true }],
      clockLabel: 'Minutes', clock: [{ w: 90, label: 'block · 1' }, { w: 90, label: 'list · 0' }, { w: 160, label: 'notify · 5' }, { w: 230, label: 'return notes · 8' }, { w: 470, label: 'total · 14 min, because every movement carried the lot' }],
      rule: 'A recall is a query, not an investigation: every movement of the lot, receptions, transfers, deliveries, returns, is in the ledger, with the customer at the end.',
      rule2: 'Blocking comes before everything: at 9:13 the lot is no longer sellable anywhere, including on offline terminals as soon as they sync.',
      note: 'lot, customers, quantities and minutes: constructed example · the same ledger answers the reverse question: “which lots did this customer receive?”',
    },
  },
  ar: {
    fefo: {
      title: 'تحضير 120 وحدة في 10 نوفمبر: أربع دفعات، قاعدة واحدة، ترتيب خروج',
      alt: 'في الأعلى شريط تواريخ انتهاء الصلاحية من نوفمبر 2026 إلى ماي 2027 مع علامة اليوم والمدة المتبقية الدنيا التي يشترطها الزبون، 60 يوماً؛ وأربع دفعات موضوعة عليه. في الوسط أربع بطاقات: دفعة في الحجر بانتظار المراقبة، دفعة تنتهي في 20 نوفمبر أقصر من شرط هذا الزبون؛ دفعة تنتهي في 15 جانفي بـ 40 وحدة متاحة تخرج أولاً؛ دفعة تنتهي في 2 مارس بـ 200 وحدة تخرج ثانياً. تحتها اقتراح التحضير: 40 من الأولى و80 من الثانية، والاثنتان الأخريان مستبعدتان مع السبب. في الأسفل حركتا المخزون المكتوبتان، كل منهما بدفعتها. والبيانات مثال مبني.',
      stripLabel: 'تواريخ انتهاء الصلاحية · اليوم 10 نوفمبر 2026',
      ticks: [{ d: 20, label: '30 نوف' }, { d: 51, label: '31 ديس' }, { d: 82, label: '31 جان' }, { d: 110, label: '28 فيف' }, { d: 141, label: '31 مارس' }, { d: 171, label: '30 أفر' }],
      today: 'اليوم', minDays: 60, minLabel: '≥ 60 ي متبقية (قاعدة الزبون)',
      lots: [
        { id: I('L2407Q'), d: 45, expiry: 'ينتهي 25 ديس 2026 · 45 ي', qty: '60 وحدة · غير متاحة', loc: `منطقة الحجر · ${I('Q-01')}`, badge: 'حجر · مراقبة معلّقة', state: 'quar' },
        { id: I('L2408Z'), d: 10, expiry: 'ينتهي 20 نوف 2026 · 10 ي', qty: '25 وحدة متاحة', loc: `مستودع الجزائر · ${I('A-12-3')}`, badge: 'قصيرة · < 60 ي · تصفية', state: 'short' },
        { id: I('L2409A'), d: 66, expiry: 'ينتهي 15 جان 2027 · 66 ي', qty: '40 وحدة متاحة', loc: `مستودع الجزائر · ${I('A-12-4')}`, badge: 'تخرج أولاً', state: 'pick' },
        { id: I('L2410B'), d: 112, expiry: 'ينتهي 2 مارس 2027 · 112 ي', qty: '200 وحدة متاحة', loc: `مستودع الجزائر · ${I('B-03-1')}`, badge: 'تخرج ثانياً', state: 'pick' },
      ],
      pickLabel: 'اقتراح لطلبية 120 وحدة · الزبون: مدة متبقية ≥ 60 ي',
      pickTotal: 120, pick: [{ qty: 40, label: `40 × ${I('L2409A')} · الأقرب إلى تاريخها وما زالت مطابقة` }, { qty: 80, label: `80 × ${I('L2410B')} · الباقي، الدفعة التالية` }],
      excluded: `مستبعدتان: ${I('L2408Z')} (10 ي متبقية، دون قاعدة الزبون ← تُعرض على زبون بلا قاعدة أو في التصفية) · ${I('L2407Q')} (حجر)`,
      movLabel: 'الحركات التي كتبها التحضير', movCols: ['الوقت', 'النوع', 'المنتج', 'الدفعة', 'الكمية', 'الموقع', 'المستند'],
      moves: [['09:41', 'خروج', I('HT-FLEU-5'), I('L2409A'), I('− 40'), I('A-12-4'), `${I('BL-2211')} · سطر 1`], ['09:41', 'خروج', I('HT-FLEU-5'), I('L2410B'), I('− 80'), I('B-03-1'), `${I('BL-2211')} · سطر 1`]],
      rule: 'الدفعة ليست حقلاً في بطاقة المنتج: إنها كيان مستلَم بتاريخه وحالته ومواقعه، وكل حركة مخزون تسمّيه.',
      rule2: 'الخروج يتبع أقرب تاريخ انتهاء تحت قاعدة المدة المتبقية للزبون؛ ويستطيع المحضّر التغيير لكنه يكتب السبب.',
      rule3: 'الدفعة في الحجر موجودة في المخزون وغير متاحة لأحد؛ والدفعة القصيرة لهذا الزبون قد تصلح لغيره.',
      note: 'الدفعات والتواريخ والكميات وقاعدة 60 يوماً: مثال مبني · يُقرأ التاريخ من باركود GS1-128 على الكرتون (AI 17) حين يحمله',
    },
    recall: {
      title: `المورد يسحب الدفعة ${I('L2409A')} عند 09:12: أين هي، ومن استلمها، في أربع عشرة دقيقة`,
      alt: 'على جانب، الدفعة المسحوبة L2409A، 500 وحدة مستلَمة في 14 سبتمبر، حُوّلت إلى حالة محجوبة عند 09:13. في الوسط أين ذهبت: الاستلام الأصلي، مستودع الجزائر بـ 140 وحدة في المخزون محجوبة، مستودع سطيف بـ 0 بعد التحويل. على الجانب الآخر الزبائن الخمسة الذين استلموا منها عبر سبعة وصول تسليم، بالكميات والإجراء: رسالة WhatsApp مرسَلة، وصل إرجاع منشأ. في الأسفل أربعة عدادات: 500 مستلَمة، 140 في المخزون محجوبة، 360 مسلَّمة لخمسة زبائن، 360 للاسترجاع؛ وشريط دقائق: حجب 1 د، سرد 0، تنبيه 5، إرجاعات 8. والبيانات مثال مبني.',
      lot: { label: 'الدفعة المسحوبة', id: I('L2409A'), l1: `${I('HT-FLEU-5')} · ينتهي 15 جان 2027`, l2: 'مستلَمة 14 سبت · 500 وحدة', badge: 'محجوبة · 09:13 · السبب: سحب' },
      col2: 'أين ذهبت',
      places: [
        { title: `استلام ${I('R-0914')}`, l1: 'المورد سيفيتال · 14 سبت', l2: `500 وحدة · ${I('GS1-128')} ممسوح` },
        { title: 'مستودع الجزائر', l1: '140 وحدة في المخزون', l2: 'محجوبة · غير متاحة للبيع', hot: true },
        { title: 'مستودع سطيف', l1: `تحويل ${I('T-0921')} · 120 وحدة`, l2: '0 في المخزون · سُلّم كله' },
        { title: 'وصول التسليم', l1: `7 ${I('BL')} · من 16 سبت إلى 8 نوف`, l2: '360 وحدة مسلَّمة' },
      ],
      col3: 'من استلمها',
      customers: [
        { from: 3, name: 'سوبيرات الأمل', l1: `${I('BL-2048, BL-2130')} · الجزائر`, qty: '96', action: `WhatsApp مرسَل · إرجاع ${I('BR-301')}` },
        { from: 3, name: 'مستودع سيدي بلعباس', l1: `${I('BL-2071')} · من سطيف`, qty: '120', action: `WhatsApp مرسَل · إرجاع ${I('BR-302')}` },
        { from: 3, name: 'مواد غذائية رياض', l1: `${I('BL-2102')} · الجزائر`, qty: '48', action: `WhatsApp مرسَل · إرجاع ${I('BR-303')}` },
        { from: 3, name: 'بقالة حميد', l1: `${I('BL-2155, BL-2190')} · الجزائر`, qty: '72', action: 'مكالمة · بلا WhatsApp' },
        { from: 3, name: 'جملة الشمال', l1: `${I('BL-2211')} · 10 نوف · هذا الصباح`, qty: '24', action: 'الشاحنة أُعيدت قبل التسليم' },
      ],
      counters: [{ big: '500', label: 'وحدة مستلَمة من الدفعة' }, { big: '140', label: 'في المخزون · محجوبة', hot: true }, { big: '360', label: `مسلَّمة لـ 5 زبائن · 7 ${I('BL')}` }, { big: '360', label: 'للاسترجاع · 5 وصول إرجاع', hot: true }],
      clockLabel: 'الدقائق', clock: [{ w: 90, label: 'حجب · 1' }, { w: 90, label: 'سرد · 0' }, { w: 160, label: 'تنبيه · 5' }, { w: 230, label: 'وصول إرجاع · 8' }, { w: 470, label: 'المجموع · 14 د، لأن كل حركة كانت تحمل الدفعة' }],
      rule: 'السحب استعلام لا تحقيق: كل حركات الدفعة، استلامات وتحويلات وتسليمات وإرجاعات، في السجل، والزبون في طرفها.',
      rule2: 'الحجب يسبق كل شيء: عند 09:13 لم تعد الدفعة قابلة للبيع في أي مكان، حتى على الأجهزة دون اتصال فور مزامنتها.',
      note: 'الدفعة والزبائن والكميات والدقائق: مثال مبني · السجل نفسه يجيب عن السؤال المعاكس: «أي دفعات استلمها هذا الزبون؟»',
    },
  },
};
