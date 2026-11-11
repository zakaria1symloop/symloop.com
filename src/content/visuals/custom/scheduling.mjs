// Bespoke animated figures for the 2027 "we promise dates we cannot keep" post.
//  load():    capacity vs load for three resources over ten working days: each
//             cell shows the hours loaded by launched orders against the
//             resource's daily capacity, with an overload cell accented and
//             the bottleneck named; a legend and three counters. Cells appear.
//  promise(): a new order on 11 November: four lanes (materials, press, line,
//             delivery) on a 11–27 Nov axis, the blocks the application places
//             after checking components and free capacity, the computed promise
//             date, the seller's instinct date, and the two alternatives if
//             the customer needs it sooner. Blocks appear, the promise marker draws.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function draw(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{stroke-dashoffset:1000}${(at + dur).toFixed(1)}%,100%{stroke-dashoffset:0}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
const I = (x) => `⁦${x}⁩`;

export function load(t, rtl) {
  const c = ctx(rtl); const P = 'ld'; const css = []; const H = 600;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  const gx = 300, gy = 130, cw = 82, ch = 70; const days = t.days;
  s += text(c, 80, 104, t.label, { size: 10, font: 'mono', fill: C.fg35, letter: 1.5, upper: true });
  days.forEach((d, j) => { s += text(c, gx + j * cw + cw / 2, gy - 10, d, { size: 9, font: 'mono', fill: C.fg35, anchor: 'middle' }); });
  t.rows.forEach((r, i) => {
    const y = gy + i * (ch + 10);
    s += `<g style="animation:${show(css, P, `r${i}`, 2 + i * 2)}">` + text(c, 80, y + 22, r.name, { size: 11, fill: C.fg, weight: 500 }) + text(c, 80, y + 38, r.cap, { size: 8.5, font: 'mono', fill: C.fg55 }) + text(c, 80, y + 52, r.sub, { size: 8.5, font: 'mono', fill: r.hot ? C.accent : C.fg55 }) + '</g>';
    r.cells.forEach((cell, j) => {
      const x = gx + j * cw; const at = 3 + i * 2 + j * 0.4; const pct = cell.h / r.capH; const over = pct > 1.0; const high = pct > 0.85;
      const fill = over ? 'rgba(242,181,68,0.30)' : high ? 'rgba(242,181,68,0.12)' : cell.h === 0 ? 'none' : 'rgba(255,255,255,0.05)';
      s += `<g style="animation:${show(css, P, `c${i}${j}`, at)}">` + rect(c, x + 2, y, cw - 4, ch, { stroke: over ? C.accent : C.line2, fill }) + text(c, x + cw / 2, y + 26, cell.h ? `${String(cell.h).replace('.', t.dec || '.')} h` : '—', { size: 12, font: 'mono', fill: over ? C.accent : high ? C.fg : C.fg55, anchor: 'middle', weight: over ? 500 : 400 }) + text(c, x + cw / 2, y + 42, `${Math.round(pct * 100)} %`, { size: 8.5, font: 'mono', fill: over ? C.accent : C.fg55, anchor: 'middle' }) + (cell.o ? text(c, x + cw / 2, y + 58, cell.o, { size: 7.5, font: 'mono', fill: C.fg35, anchor: 'middle' }) : '') + '</g>';
    });
  });
  const ly = gy + t.rows.length * (ch + 10) + 8;
  s += `<g style="animation:${show(css, P, 'lg', 20)}">`;
  t.legend.forEach((l, i) => { const x = 80 + i * 240; s += rect(c, x, ly, 14, 10, { stroke: l.k === 'over' ? C.accent : C.line2, fill: l.k === 'over' ? 'rgba(242,181,68,0.30)' : l.k === 'high' ? 'rgba(242,181,68,0.12)' : 'rgba(255,255,255,0.05)' }) + text(c, x + 20, ly + 9, l.t, { size: 9, font: 'mono', fill: C.fg55 }); });
  s += '</g>';
  const ky = ly + 24;
  t.tiles.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, 22 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? 'rgba(242,181,68,0.06)' : C.fill }) + text(c, x + 12, ky + 24, k.big, { size: 14, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 41, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 53, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  s += text(c, 80, ky + 88, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 108, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 132, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

export function promise(t, rtl) {
  const c = ctx(rtl); const P = 'pm'; const css = []; const H = 620;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: 'rgba(242,181,68,0.06)' }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const ax = 300, aw = 820, ay = 150; const dX = (d) => ax + ((d - 11) / 16) * aw; // 11..27 Nov
  t.ticks.forEach((tk) => { s += line(c, dX(tk.d), ay - 6, dX(tk.d), ay + 4 * 56, { stroke: C.line }) + text(c, dX(tk.d), ay - 12, tk.l, { size: 9, font: 'mono', fill: C.fg35, anchor: 'middle' }); });
  t.lanes.forEach((ln, i) => {
    const y = ay + 4 + i * 56; const at = 4 + i * 3;
    s += `<g style="animation:${show(css, P, `n${i}`, at)}">` + text(c, 80, y + 16, ln.name, { size: 11, fill: C.fg, weight: 500 }) + text(c, 80, y + 31, ln.sub, { size: 8.5, font: 'mono', fill: ln.hot ? C.accent : C.fg55 }) + line(c, 80, y + 48, 1120, y + 48, { stroke: C.line }) + '</g>';
    ln.blocks.forEach((b, k) => { s += `<g style="animation:${show(css, P, `b${i}${k}`, at + 1 + k)}">` + rect(c, dX(b.from), y + 4, dX(b.to) - dX(b.from), 32, { stroke: b.kind === 'wait' ? C.fg35 : b.kind === 'new' ? C.accent : C.line2, fill: b.kind === 'new' ? 'rgba(242,181,68,0.22)' : b.kind === 'wait' ? 'none' : 'rgba(255,255,255,0.06)', dash: b.kind === 'wait' ? '3 3' : undefined }) + text(c, dX(b.from) + (rtl ? -6 : 6), y + 18, b.t, { size: 8.5, font: 'mono', fill: b.kind === 'new' ? C.accent : b.kind === 'wait' ? C.fg35 : C.fg70 }) + text(c, dX(b.from) + (rtl ? -6 : 6), y + 30, b.sub, { size: 7.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  });
  // markers: instinct date and promise date
  const my = ay + 4 * 56 + 8;
  s += `<g style="animation:${show(css, P, 'in', 18)}">` + line(c, dX(t.instinct.d), ay - 6, dX(t.instinct.d), my, { stroke: C.fg35, dash: '3 3' }) + text(c, dX(t.instinct.d) + (rtl ? -6 : 6), my + 12, t.instinct.l, { size: 9, font: 'mono', fill: C.fg55 }) + '</g>';
  s += `<line x1="${c.X(dX(t.promise.d))}" y1="${ay - 6}" x2="${c.X(dX(t.promise.d))}" y2="${my}" stroke="${C.accent}" stroke-width="1.6" pathLength="1000" style="stroke-dashoffset:0;animation:${draw(css, P, 'pr', 20, 3)}"/>`;
  s += `<g style="animation:${show(css, P, 'prl', 22)}">` + text(c, dX(t.promise.d) + (rtl ? -6 : 6), my + 26, t.promise.l, { size: 10, font: 'mono', fill: C.accent, weight: 500 }) + '</g>';
  const ky = my + 44;
  t.tiles.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, 24 + i * 2)}">` + rect(c, x, ky, 340, 66, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? 'rgba(242,181,68,0.06)' : C.fill }) + text(c, x + 12, ky + 22, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 39, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + text(c, x + 12, ky + 63, k.l3, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  s += text(c, 80, ky + 96, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 116, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 140, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"],svg line[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

const CELL = (h, o) => ({ h, o });

export const STRINGS = {
  fr: {
    load: {
      title: 'Charge contre capacité : trois ressources, dix jours, un goulot',
      alt: 'Une grille de trois ressources sur dix jours ouvrés du 16 au 27 novembre : la presse, 8 heures de capacité par jour ; la ligne d’embouteillage, 8 heures ; la découpe et l’assemblage, 16 heures sur deux équipes. Chaque case montre les heures déjà chargées par les ordres lancés et le pourcentage de la capacité ; les cases au-dessus de 85 pour cent sont teintées et les cases au-dessus de 100 pour cent sont en accent : la ligne d’embouteillage est à 110 et 105 pour cent les 18 et 19 novembre, c’est le goulot de la quinzaine. En bas, trois tuiles : charge moyenne de la ligne 79 pour cent, goulot ligne L1 les 18 et 19, premier créneau libre de 8 heures le 24 novembre. Les données sont un exemple construit.',
      dec: ',', label: 'Plan de charge · 16 → 27 novembre · heures chargées / capacité du jour', days: ['lu 16', 'ma 17', 'me 18', 'je 19', 've 20', 'lu 23', 'ma 24', 'me 25', 'je 26', 've 27'],
      rows: [
        { name: 'Presse P1', cap: 'capacité 8 h / jour · 2 opérateurs', sub: 'charge 61 % sur la quinzaine', capH: 8, cells: [CELL(6, 'OF-0412'), CELL(6, 'OF-0413'), CELL(4, 'OF-0414'), CELL(8, 'OF-0415'), CELL(2), CELL(6, 'OF-0416'), CELL(4), CELL(6, 'OF-0417'), CELL(4), CELL(3)] },
        { name: 'Ligne L1 · embouteillage', cap: 'capacité 8 h / jour · 400 bouteilles / h', sub: 'goulot : 110 % le 18, 105 % le 19', hot: true, capH: 8, cells: [CELL(7, 'OF-0412'), CELL(7.5, 'OF-0413'), CELL(8.8, 'OF-0414+'), CELL(8.4, 'OF-0415'), CELL(7, 'OF-0415'), CELL(7.5, 'OF-0416'), CELL(0), CELL(7, 'OF-0417'), CELL(6, 'OF-0418'), CELL(4)] },
        { name: 'Découpe + assemblage', cap: 'capacité 16 h / jour · 2 équipes', sub: 'charge 48 % · menuiserie sur mesure', capH: 16, cells: [CELL(9, 'CFG-0731'), CELL(8), CELL(10, 'CFG-0733'), CELL(6), CELL(8), CELL(7, 'CFG-0735'), CELL(9), CELL(5), CELL(8), CELL(6)] },
      ],
      legend: [{ k: 'low', t: 'sous 85 % · place disponible' }, { k: 'high', t: '85 à 100 % · serré' }, { k: 'over', t: 'au-dessus de 100 % · goulot' }],
      tiles: [{ big: '79 %', l1: 'charge moyenne de la ligne L1', l2: 'sur dix jours · depuis les gammes des ordres lancés' }, { big: 'L1 · 18 et 19 nov', l1: 'goulot de la quinzaine', l2: '2,2 h au-dessus de la capacité → heures sup ou glissement', hot: true }, { big: 'ma 24 nov', l1: 'premier créneau libre de 8 h sur L1', l2: 'c’est lui qui fixe la promesse suivante' }],
      rule: 'La charge n’est pas estimée : elle est la somme des durées de gamme des ordres lancés, par ressource et par jour, recalculée à chaque lancement et à chaque pointage.',
      rule2: 'Le goulot est la ressource la plus chargée, pas la plus bruyante : c’est lui qui fixe la date que l’on peut promettre.',
      note: 'ressources, capacités, ordres et heures : exemple construit · la capacité du jour est écrite par le gérant (équipes, horaires, arrêts planifiés), pas déduite',
    },
    promise: {
      title: 'Une commande arrive le 11 novembre : la date promise calculée, et ce qui bouge',
      alt: 'En haut, la commande : 3 000 bouteilles de jus pour un grossiste, reçue le 11 novembre. Quatre couloirs sur un axe du 11 au 27 novembre : matières, les oranges manquent et la réception du fournisseur est attendue le 14 ; presse, un créneau le 16 ; ligne d’embouteillage, occupée les 17, 18 et 19 par des ordres déjà promis, en pointillé, puis le nouvel ordre placé le 20 en accent ; livraison, tournée du 23. Une ligne pointillée marque le 18, la date que le vendeur aurait promise de tête ; une ligne en accent marque le 23, la date calculée. En bas, trois tuiles : promesse le 23 novembre ; pour livrer le 20, décaler l’ordre OF-0415 non promis au 24 ; pour livrer le 18, impossible sans oranges avant le 14 et sans 2 heures supplémentaires sur la ligne. Les données sont un exemple construit.',
      header: 'Commande CMD-2026-1188 · grossiste Nord · 3 000 bouteilles JUS-OR-1L-6 · reçue le 11 nov 10 h 20 · le vendeur voulait promettre le 18',
      ticks: [{ d: 11, l: '11 nov' }, { d: 14, l: '14' }, { d: 16, l: '16' }, { d: 18, l: '18' }, { d: 20, l: '20' }, { d: 23, l: '23' }, { d: 25, l: '25' }, { d: 27, l: '27' }],
      lanes: [
        { name: 'Matières', sub: 'oranges : besoin 4 200 kg · dispo 3 100', hot: true, blocks: [{ from: 11, to: 14, t: 'attente réception oranges', sub: 'BC-0188 · délai médian 10 j → 14 nov', kind: 'wait' }, { from: 14, to: 16, t: 'réception + contrôle', sub: 'lot fournisseur', kind: 'new' }] },
        { name: 'Presse P1', sub: 'besoin 6 h · premier créneau le 16', blocks: [{ from: 16, to: 18, t: 'pressage 3 000 L', sub: 'OF-0419 · 6 h', kind: 'new' }] },
        { name: 'Ligne L1', sub: 'besoin 7,5 h · goulot', hot: true, blocks: [{ from: 17, to: 20, t: 'OF-0414, 0415 déjà promis', sub: '110 % le 18 · 105 % le 19', kind: 'busy' }, { from: 20, to: 22.5, t: 'embouteillage', sub: 'OF-0419 · 7,5 h · 20 nov', kind: 'new' }] },
        { name: 'Livraison', sub: 'tournée Nord du lundi', blocks: [{ from: 23, to: 25.5, t: 'tournée du 23', sub: 'camionnette B · 120 cartons', kind: 'new' }] },
      ],
      instinct: { d: 18, l: 'le vendeur aurait dit : 18 nov' }, promise: { d: 23, l: 'promesse calculée : lundi 23 nov' },
      tiles: [
        { big: 'lundi 23 nov', l1: 'date promise au client', l2: 'matières le 14 · presse le 16 · ligne le 20 · tournée le 23', l3: 'écrite sur la commande avec son calcul', hot: true },
        { big: 'le 20 · en décalant OF-0415', l1: 'si le client veut plus tôt', l2: 'OF-0415 n’est pas promis → glisse au 24', l3: 'décision du gérant, client de l’autre ordre prévenu' },
        { big: 'le 18 · impossible', l1: 'ce que le vendeur voulait', l2: 'pas d’oranges avant le 14 · ligne à 110 %', l3: 'seule option : 2 h sup + matières de secours' },
      ],
      rule: 'La date promise est calculée depuis trois choses connues : les composants disponibles ou attendus, les créneaux libres du goulot, et la tournée qui livre ; elle est écrite sur la commande avec son calcul.',
      rule2: 'Avancer une date, c’est déplacer un ordre non promis ou ajouter des heures : l’application montre les deux options et leur coût, et le gérant choisit.',
      note: 'commande, quantités, dates et créneaux : exemple construit · la réponse « disponible à promettre » repose sur les stocks, les réceptions et ordres planifiés, et les besoins déjà engagés (définition courante)',
    },
  },
  en: {
    load: {
      title: 'Load against capacity: three resources, ten days, one bottleneck',
      alt: 'A grid of three resources over ten working days from 16 to 27 November: the press, 8 hours of capacity a day; the bottling line, 8 hours; cutting and assembly, 16 hours over two shifts. Each cell shows the hours already loaded by launched orders and the percentage of capacity; cells above 85 percent are tinted and cells above 100 percent are accented: the bottling line is at 110 and 105 percent on 18 and 19 November, the fortnight’s bottleneck. At the bottom, three tiles: average line load 79 percent, bottleneck line L1 on the 18th and 19th, first free 8-hour slot on 24 November. The data is a constructed example.',
      label: 'Load plan · 16 → 27 November · hours loaded / daily capacity', days: ['Mo 16', 'Tu 17', 'We 18', 'Th 19', 'Fr 20', 'Mo 23', 'Tu 24', 'We 25', 'Th 26', 'Fr 27'],
      rows: [
        { name: 'Press P1', cap: 'capacity 8 h / day · 2 operators', sub: 'load 61 % over the fortnight', capH: 8, cells: [CELL(6, 'PO-0412'), CELL(6, 'PO-0413'), CELL(4, 'PO-0414'), CELL(8, 'PO-0415'), CELL(2), CELL(6, 'PO-0416'), CELL(4), CELL(6, 'PO-0417'), CELL(4), CELL(3)] },
        { name: 'Line L1 · bottling', cap: 'capacity 8 h / day · 400 bottles / h', sub: 'bottleneck: 110 % on 18th, 105 % on 19th', hot: true, capH: 8, cells: [CELL(7, 'PO-0412'), CELL(7.5, 'PO-0413'), CELL(8.8, 'PO-0414+'), CELL(8.4, 'PO-0415'), CELL(7, 'PO-0415'), CELL(7.5, 'PO-0416'), CELL(0), CELL(7, 'PO-0417'), CELL(6, 'PO-0418'), CELL(4)] },
        { name: 'Cutting + assembly', cap: 'capacity 16 h / day · 2 shifts', sub: 'load 48 % · made-to-measure joinery', capH: 16, cells: [CELL(9, 'CFG-0731'), CELL(8), CELL(10, 'CFG-0733'), CELL(6), CELL(8), CELL(7, 'CFG-0735'), CELL(9), CELL(5), CELL(8), CELL(6)] },
      ],
      legend: [{ k: 'low', t: 'under 85 % · room available' }, { k: 'high', t: '85 to 100 % · tight' }, { k: 'over', t: 'above 100 % · bottleneck' }],
      tiles: [{ big: '79 %', l1: 'average load of line L1', l2: 'over ten days · from launched orders’ routings' }, { big: 'L1 · 18 and 19 Nov', l1: 'the fortnight’s bottleneck', l2: '2.2 h above capacity → overtime or slip', hot: true }, { big: 'Tu 24 Nov', l1: 'first free 8-hour slot on L1', l2: 'it sets the next promise' }],
      rule: 'Load is not estimated: it is the sum of routing durations of launched orders, per resource and per day, recomputed at every launch and every clock-in.',
      rule2: 'The bottleneck is the most loaded resource, not the loudest: it sets the date that can be promised.',
      note: 'resources, capacities, orders and hours: constructed example · daily capacity is written by the manager (shifts, hours, planned stops), not inferred',
    },
    promise: {
      title: 'An order arrives on 11 November: the computed promise date, and what moves',
      alt: 'At the top, the order: 3,000 bottles of juice for a wholesaler, received on 11 November. Four lanes on an 11 to 27 November axis: materials, oranges are short and the supplier reception is expected on the 14th; press, a slot on the 16th; bottling line, busy on the 17th, 18th and 19th with orders already promised, dotted, then the new order placed on the 20th in accent; delivery, the round of the 23rd. A dotted line marks the 18th, the date the seller would have promised from memory; an accented line marks the 23rd, the computed date. At the bottom, three tiles: promise on 23 November; to deliver on the 20th, slip unpromised order PO-0415 to the 24th; to deliver on the 18th, impossible without oranges before the 14th and without 2 hours of overtime on the line. The data is a constructed example.',
      header: 'Order CMD-2026-1188 · North Wholesale · 3,000 bottles JUS-OR-1L-6 · received 11 Nov 10:20 · the seller wanted to promise the 18th',
      ticks: [{ d: 11, l: '11 Nov' }, { d: 14, l: '14' }, { d: 16, l: '16' }, { d: 18, l: '18' }, { d: 20, l: '20' }, { d: 23, l: '23' }, { d: 25, l: '25' }, { d: 27, l: '27' }],
      lanes: [
        { name: 'Materials', sub: 'oranges: need 4,200 kg · available 3,100', hot: true, blocks: [{ from: 11, to: 14, t: 'waiting for orange reception', sub: 'PO-0188 · median lead time 10 d → 14 Nov', kind: 'wait' }, { from: 14, to: 16, t: 'reception + check', sub: 'supplier lot', kind: 'new' }] },
        { name: 'Press P1', sub: 'needs 6 h · first slot on the 16th', blocks: [{ from: 16, to: 18, t: 'pressing 3,000 L', sub: 'PO-0419 · 6 h', kind: 'new' }] },
        { name: 'Line L1', sub: 'needs 7.5 h · bottleneck', hot: true, blocks: [{ from: 17, to: 20, t: 'PO-0414, 0415 already promised', sub: '110 % on 18th · 105 % on 19th', kind: 'busy' }, { from: 20, to: 22.5, t: 'bottling', sub: 'PO-0419 · 7.5 h · 20 Nov', kind: 'new' }] },
        { name: 'Delivery', sub: 'Monday North round', blocks: [{ from: 23, to: 25.5, t: 'round of the 23rd', sub: 'van B · 120 cartons', kind: 'new' }] },
      ],
      instinct: { d: 18, l: 'the seller would have said: 18 Nov' }, promise: { d: 23, l: 'computed promise: Monday 23 Nov' },
      tiles: [
        { big: 'Monday 23 Nov', l1: 'date promised to the customer', l2: 'materials 14th · press 16th · line 20th · round 23rd', l3: 'written on the order with its computation', hot: true },
        { big: '20th · by slipping PO-0415', l1: 'if the customer wants it sooner', l2: 'PO-0415 is not promised → slips to the 24th', l3: 'manager’s decision, the other order’s customer warned' },
        { big: '18th · impossible', l1: 'what the seller wanted', l2: 'no oranges before the 14th · line at 110 %', l3: 'only option: 2 h overtime + emergency materials' },
      ],
      rule: 'The promised date is computed from three known things: components available or expected, free slots on the bottleneck, and the round that delivers; it is written on the order with its computation.',
      rule2: 'Bringing a date forward means moving an unpromised order or adding hours: the application shows both options and their cost, and the manager chooses.',
      note: 'order, quantities, dates and slots: constructed example · the “available to promise” answer rests on stock, planned receipts and orders, and requirements already committed (common definition)',
    },
  },
  ar: {
    load: {
      title: 'الحمل مقابل الطاقة: ثلاثة موارد، عشرة أيام، عنق زجاجة واحد',
      alt: 'شبكة ثلاثة موارد على عشرة أيام عمل من 16 إلى 27 نوفمبر: المعصرة، 8 ساعات طاقة في اليوم؛ خط التعبئة، 8 ساعات؛ القص والتجميع، 16 ساعة على فريقين. كل خلية تُظهر الساعات المحمَّلة أصلاً بالأوامر المطلقة ونسبة الطاقة؛ والخلايا فوق 85 بالمائة ملوّنة والخلايا فوق 100 بالمائة مميزة: خط التعبئة عند 110 و105 بالمائة في 18 و19 نوفمبر، وهو عنق زجاجة الأسبوعين. في الأسفل ثلاث بطاقات: متوسط حمل الخط 79 بالمائة، عنق الزجاجة الخط L1 في 18 و19، أول فترة حرة من 8 ساعات في 24 نوفمبر. والبيانات مثال مبني.',
      label: 'خطة الحمل · 16 ← 27 نوفمبر · ساعات محمَّلة / طاقة اليوم', days: ['إث 16', 'ثل 17', 'أر 18', 'خم 19', 'جم 20', 'إث 23', 'ثل 24', 'أر 25', 'خم 26', 'جم 27'],
      rows: [
        { name: `المعصرة ${I('P1')}`, cap: 'طاقة 8 س / يوم · عاملان', sub: 'حمل 61 ٪ على الأسبوعين', capH: 8, cells: [CELL(6, I('OF-0412')), CELL(6, I('OF-0413')), CELL(4, I('OF-0414')), CELL(8, I('OF-0415')), CELL(2), CELL(6, I('OF-0416')), CELL(4), CELL(6, I('OF-0417')), CELL(4), CELL(3)] },
        { name: `الخط ${I('L1')} · تعبئة`, cap: 'طاقة 8 س / يوم · 400 قارورة / س', sub: 'عنق زجاجة: 110 ٪ في 18، 105 ٪ في 19', hot: true, capH: 8, cells: [CELL(7, I('OF-0412')), CELL(7.5, I('OF-0413')), CELL(8.8, I('OF-0414+')), CELL(8.4, I('OF-0415')), CELL(7, I('OF-0415')), CELL(7.5, I('OF-0416')), CELL(0), CELL(7, I('OF-0417')), CELL(6, I('OF-0418')), CELL(4)] },
        { name: 'قص + تجميع', cap: 'طاقة 16 س / يوم · فريقان', sub: 'حمل 48 ٪ · نجارة على المقاس', capH: 16, cells: [CELL(9, I('CFG-0731')), CELL(8), CELL(10, I('CFG-0733')), CELL(6), CELL(8), CELL(7, I('CFG-0735')), CELL(9), CELL(5), CELL(8), CELL(6)] },
      ],
      legend: [{ k: 'low', t: 'تحت 85 ٪ · مكان متاح' }, { k: 'high', t: '85 إلى 100 ٪ · ضيق' }, { k: 'over', t: 'فوق 100 ٪ · عنق زجاجة' }],
      tiles: [{ big: '79 ٪', l1: `متوسط حمل الخط ${I('L1')}`, l2: 'على عشرة أيام · من مسارات الأوامر المطلقة' }, { big: `${I('L1')} · 18 و19 نوف`, l1: 'عنق زجاجة الأسبوعين', l2: `${I('2.2')} س فوق الطاقة ← ساعات إضافية أو انزلاق`, hot: true }, { big: 'ثل 24 نوف', l1: `أول فترة حرة من 8 س على ${I('L1')}`, l2: 'هي ما يحدد الوعد التالي' }],
      rule: 'الحمل لا يُقدَّر: هو مجموع مدد مسارات الأوامر المطلقة، لكل مورد ويوم، يُعاد حسابه عند كل إطلاق وكل تسجيل.',
      rule2: 'عنق الزجاجة هو المورد الأكثر حملاً لا الأعلى صوتاً: هو ما يحدد التاريخ الذي يمكن الوعد به.',
      note: 'الموارد والطاقات والأوامر والساعات: مثال مبني · طاقة اليوم يكتبها المسيّر (فرق، ساعات، توقفات مخططة) ولا تُستنتج',
    },
    promise: {
      title: 'طلبية تصل في 11 نوفمبر: تاريخ الوعد المحسوب، وما يتحرك',
      alt: 'في الأعلى الطلبية: 3,000 قارورة عصير لتاجر جملة، وردت في 11 نوفمبر. أربعة ممرات على محور من 11 إلى 27 نوفمبر: المواد، البرتقال ناقص واستلام المورد متوقع في 14؛ المعصرة، فترة في 16؛ خط التعبئة، مشغول في 17 و18 و19 بأوامر موعودة أصلاً، منقّطة، ثم الأمر الجديد موضوع في 20 مميزاً؛ التوصيل، جولة 23. خط منقّط يشير إلى 18، التاريخ الذي كان البائع سيعد به من الذاكرة؛ وخط مميز يشير إلى 23، التاريخ المحسوب. في الأسفل ثلاث بطاقات: وعد في 23 نوفمبر؛ للتسليم في 20، إزاحة الأمر OF-0415 غير الموعود إلى 24؛ للتسليم في 18، مستحيل بلا برتقال قبل 14 وبلا ساعتين إضافيتين على الخط. والبيانات مثال مبني.',
      header: `طلبية ${I('CMD-2026-1188')} · جملة الشمال · 3,000 قارورة ${I('JUS-OR-1L-6')} · وردت 11 نوف 10:20 · البائع أراد الوعد بـ 18`,
      ticks: [{ d: 11, l: '11 نوف' }, { d: 14, l: '14' }, { d: 16, l: '16' }, { d: 18, l: '18' }, { d: 20, l: '20' }, { d: 23, l: '23' }, { d: 25, l: '25' }, { d: 27, l: '27' }],
      lanes: [
        { name: 'المواد', sub: 'برتقال: حاجة 4,200 كغ · متاح 3,100', hot: true, blocks: [{ from: 11, to: 14, t: 'انتظار استلام البرتقال', sub: `${I('BC-0188')} · مهلة وسيطة 10 ي ← 14 نوف`, kind: 'wait' }, { from: 14, to: 16, t: 'استلام + مراقبة', sub: 'دفعة مورد', kind: 'new' }] },
        { name: `المعصرة ${I('P1')}`, sub: 'حاجة 6 س · أول فترة في 16', blocks: [{ from: 16, to: 18, t: 'عصر 3,000 ل', sub: `${I('OF-0419')} · 6 س`, kind: 'new' }] },
        { name: `الخط ${I('L1')}`, sub: `حاجة ${I('7.5')} س · عنق زجاجة`, hot: true, blocks: [{ from: 17, to: 20, t: `${I('OF-0414, 0415')} موعودان أصلاً`, sub: '110 ٪ في 18 · 105 ٪ في 19', kind: 'busy' }, { from: 20, to: 22.5, t: 'تعبئة', sub: `${I('OF-0419')} · ${I('7.5')} س · 20 نوف`, kind: 'new' }] },
        { name: 'التوصيل', sub: 'جولة الشمال يوم الاثنين', blocks: [{ from: 23, to: 25.5, t: 'جولة 23', sub: 'الشاحنة ب · 120 كرتوناً', kind: 'new' }] },
      ],
      instinct: { d: 18, l: 'البائع كان سيقول: 18 نوف' }, promise: { d: 23, l: 'وعد محسوب: الاثنين 23 نوف' },
      tiles: [
        { big: 'الاثنين 23 نوف', l1: 'التاريخ الموعود للزبون', l2: 'مواد 14 · معصرة 16 · خط 20 · جولة 23', l3: 'مكتوب على الطلبية بحسابه', hot: true },
        { big: `20 · بإزاحة ${I('OF-0415')}`, l1: 'إن أراد الزبون أبكر', l2: `${I('OF-0415')} غير موعود ← ينزلق إلى 24`, l3: 'قرار المسيّر، زبون الأمر الآخر منبَّه' },
        { big: '18 · مستحيل', l1: 'ما أراده البائع', l2: 'لا برتقال قبل 14 · الخط عند 110 ٪', l3: 'الخيار الوحيد: ساعتان إضافيتان + مواد طوارئ' },
      ],
      rule: 'التاريخ الموعود يُحسب من ثلاثة أشياء معروفة: المكوّنات المتاحة أو المتوقعة، الفترات الحرة لعنق الزجاجة، والجولة التي تسلّم؛ ويُكتب على الطلبية بحسابه.',
      rule2: 'تقديم تاريخ يعني نقل أمر غير موعود أو إضافة ساعات: التطبيق يعرض الخيارين وكلفتهما، والمسيّر يختار.',
      note: 'الطلبية والكميات والتواريخ والفترات: مثال مبني · جواب «المتاح للوعد» يستند إلى المخزون والاستلامات والأوامر المخططة والاحتياجات الملتزَم بها أصلاً (تعريف شائع)',
    },
  },
};
