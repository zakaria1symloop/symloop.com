// Bespoke animated figures for the 2027 stock-accuracy post.
//  ledger(): one product, one day, one location: the stock is not a number
//            but a column of movements (reception, sale, reservation,
//            transfer out, adjustment, expiry of a reservation), each with its
//            source document and author; the running balance and the
//            available quantity (on hand minus reserved) update row by row.
//  count():  a cycle-count board: ABC classes with their counting frequency,
//            a count sheet with system vs counted and variance per line, the
//            adjustments written with a reason, and the monthly accuracy
//            figure against the written objective.
// CSS-only animation (prefers-reduced-motion disables it); base attributes are
// the finished state for the JPG rasteriser.
import { W, C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function grow(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `${P}-${id} ${LOOP}s linear infinite`; }

export function ledger(t, rtl) {
  const c = ctx(rtl); const P = 'sl'; const css = []; const H = 560; const iso = (x) => rtl ? `⁦${x}⁩` : x;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  // product header
  s += rect(c, 80, 92, 1040, 44, { stroke: C.line2, fill: C.fill });
  s += text(c, 98, 111, t.product, { size: 13, fill: C.fg });
  s += text(c, 98, 128, t.productSub, { size: 10.5, font: 'mono', fill: C.fg55 });
  s += text(c, 1102, 120, t.location, { size: 11.5, font: 'mono', fill: C.fg55, anchor: 'end' });
  // column headers
  const cols = t.cols; // [time, movement, qty, source, onhand, reserved, available]
  const cx = [80, 150, 470, 560, 780, 890, 1000]; const cw = [70, 320, 90, 220, 110, 110, 120];
  const hy = 160;
  cols.forEach((h, i) => { s += text(c, cx[i] + (i >= 2 && i !== 3 ? cw[i] - 8 : 8), hy, h, { size: 10, font: 'mono', fill: C.fg35, letter: 1, upper: true, anchor: i >= 2 && i !== 3 ? 'end' : 'start' }); });
  s += line(c, 80, hy + 8, 1120, hy + 8, { stroke: C.line2 });
  // rows
  let onhand = t.opening.onhand; let reserved = t.opening.reserved;
  const top = hy + 30; const rowH = 38;
  s += text(c, 88, top, t.opening.label, { size: 11, fill: C.fg55 });
  s += text(c, cx[4] + cw[4] - 8, top, String(onhand), { size: 11.5, font: 'mono', fill: C.fg70, anchor: 'end' });
  s += text(c, cx[5] + cw[5] - 8, top, String(reserved), { size: 11.5, font: 'mono', fill: C.fg70, anchor: 'end' });
  s += text(c, cx[6] + cw[6] - 8, top, String(onhand - reserved), { size: 11.5, font: 'mono', fill: C.fg70, anchor: 'end' });
  t.rows.forEach((r, i) => {
    const y = top + (i + 1) * rowH; const at = 6 + i * 10;
    onhand += r.onhand; reserved += r.reserved;
    const flag = r.kind === 'adjust' || r.kind === 'expire';
    s += `<g style="animation:${show(css, P, `r${i}`, at)}">`
      + line(c, 80, y + 12, 1120, y + 12, { stroke: C.line })
      + text(c, cx[0] + 8, y, r.time, { size: 10.5, font: 'mono', fill: C.fg55 })
      + text(c, cx[1] + 8, y, r.label, { size: 11.5, fill: flag ? C.accent : C.fg })
      + text(c, cx[2] + cw[2] - 8, y, iso(r.qty), { size: 11.5, font: 'mono', fill: r.qty.startsWith('−') ? C.fg70 : C.fg, anchor: 'end' })
      + text(c, cx[3] + 8, y, r.source, { size: 10, font: 'mono', fill: C.fg55 })
      + text(c, cx[4] + cw[4] - 8, y, String(onhand), { size: 11.5, font: 'mono', fill: C.fg, anchor: 'end' })
      + text(c, cx[5] + cw[5] - 8, y, String(reserved), { size: 11.5, font: 'mono', fill: C.fg70, anchor: 'end' })
      + text(c, cx[6] + cw[6] - 8, y, String(onhand - reserved), { size: 12, font: 'mono', fill: (onhand - reserved) < 0 ? C.accent : C.accent, anchor: 'end', weight: 500 })
      + '</g>';
  });
  // footer rule
  const fy = top + (t.rows.length + 1) * rowH + 14;
  s += `<g style="animation:${show(css, P, 'rule', 90)}">`
    + rect(c, 80, fy, 1040, 46, { stroke: C.accent, fill: 'rgba(242,181,68,0.06)' })
    + text(c, 98, fy + 19, t.rule, { size: 12.5, fill: C.fg })
    + text(c, 98, fy + 36, t.rule2, { size: 10.5, font: 'mono', fill: C.accent })
    + '</g>';
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

export function count(t, rtl) {
  const c = ctx(rtl); const P = 'sc'; const css = []; const H = 600; const iso = (x) => rtl ? `⁦${x}⁩` : x;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  // left: ABC classes
  const lx = 80; const lw = 300; const top = 96;
  s += text(c, lx, top, t.classesLabel, { size: 11, font: 'mono', fill: C.fg35, letter: 2, upper: true });
  t.classes.forEach((k, i) => {
    const y = top + 18 + i * 92; const at = 4 + i * 6;
    s += `<g style="animation:${show(css, P, `k${i}`, at)}">`
      + rect(c, lx, y, lw, 80, { stroke: i === 0 ? C.accent : C.line2, fill: i === 0 ? 'rgba(242,181,68,0.06)' : C.fill })
      + text(c, lx + 14, y + 24, k.name, { size: 14, fill: i === 0 ? C.accent : C.fg })
      + text(c, lx + lw - 14, y + 24, k.share, { size: 11, font: 'mono', fill: C.fg55, anchor: 'end' })
      + text(c, lx + 14, y + 46, k.freq, { size: 11.5, fill: C.fg70 })
      + text(c, lx + 14, y + 64, k.how, { size: 10.5, font: 'mono', fill: C.fg55 })
      + '</g>';
  });
  // right: count sheet
  const rx = 420; const rw = 700;
  s += text(c, rx, top, t.sheetLabel, { size: 11, font: 'mono', fill: C.fg35, letter: 2, upper: true });
  s += text(c, rx + rw, top, t.sheetMeta, { size: 10.5, font: 'mono', fill: C.fg55, anchor: 'end' });
  const hcols = t.sheetCols; const hx = [rx, rx + 300, rx + 400, rx + 500, rx + 600];
  hcols.forEach((h, i) => { s += text(c, i === 0 ? hx[i] : hx[i] + 92, top + 26, h, { size: 10, font: 'mono', fill: C.fg35, anchor: i === 0 ? 'start' : 'end' }); });
  s += line(c, rx, top + 34, rx + rw, top + 34, { stroke: C.line2 });
  t.lines.forEach((ln, i) => {
    const y = top + 56 + i * 36; const at = 24 + i * 7; const diff = ln.counted - ln.system; const bad = Math.abs(diff) > 0;
    s += `<g style="animation:${show(css, P, `l${i}`, at)}">`
      + line(c, rx, y + 12, rx + rw, y + 12, { stroke: C.line })
      + text(c, hx[0], y, ln.name, { size: 11.5, fill: C.fg })
      + text(c, hx[1] + 92, y, String(ln.system), { size: 11.5, font: 'mono', fill: C.fg70, anchor: 'end' })
      + text(c, hx[2] + 92, y, String(ln.counted), { size: 11.5, font: 'mono', fill: C.fg, anchor: 'end' })
      + text(c, hx[3] + 92, y, iso((diff > 0 ? '+' : '') + String(diff)), { size: 11.5, font: 'mono', fill: bad ? C.accent : C.fg55, anchor: 'end' })
      + text(c, hx[4] + 92, y, ln.reason, { size: 10, font: 'mono', fill: bad ? C.accent : C.fg35, anchor: 'end' })
      + '</g>';
  });
  // accuracy bar
  const ay = top + 56 + t.lines.length * 36 + 24;
  const bx0 = rx; const bw = rw; const ratio = (t.accuracy.value - 90) / 10; const objR = (t.accuracy.objective - 90) / 10;
  s += `<g style="animation:${show(css, P, 'acc', 70)}">`
    + text(c, rx, ay, t.accuracy.label, { size: 12.5, fill: C.fg })
    + text(c, rx + rw, ay, t.accuracy.valueLabel, { size: 12.5, font: 'mono', fill: C.accent, anchor: 'end' })
    + rect(c, bx0, ay + 10, bw, 14, { stroke: C.line, fill: 'none' })
    + `<rect x="${c.RX(bx0, bw * ratio)}" y="${ay + 10}" width="${(bw * ratio).toFixed(1)}" height="14" fill="${C.accent}" style="transform-box:fill-box;transform-origin:${c.rtl ? 'right' : 'left'} center;animation:${grow(css, P, 'accb', 71, 8)}"/>`
    + line(c, bx0 + bw * objR, ay + 4, bx0 + bw * objR, ay + 30, { stroke: C.fg, sw: 1.2 })
    + text(c, bx0 + bw * objR, ay + 44, t.accuracy.objectiveLabel, { size: 10, font: 'mono', fill: C.fg55, anchor: 'middle' })
    + text(c, bx0, ay + 44, iso('90 %'), { size: 10, font: 'mono', fill: C.fg35 })
    + text(c, bx0 + bw, ay + 44, iso('100 %'), { size: 10, font: 'mono', fill: C.fg35, anchor: 'end' })
    + '</g>';
  s += `<g style="animation:${show(css, P, 'rule', 90)}">` + text(c, 80, 560, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, 580, t.rule2, { size: 12.5, fill: C.fg }) + '</g>';
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"],svg rect[style*="${P}-"]{animation:none !important;transform:none}}</style>`;
  return s + '</svg>';
}

const I = (x) => `⁦${x}⁩`;

export const STRINGS = {
  fr: {
    ledger: {
      title: 'Un produit, une journée, un dépôt : le stock est une colonne de mouvements, pas un chiffre',
      alt: 'Huile de table 5 litres, carton de 4, dépôt de Sétif. Le journal du 10 novembre : ouverture à 48 unités dont 8 réservées, soit 40 disponibles. 8 h 05, réception du fournisseur, plus 48 unités, bon de réception 2027-311, par Nadir. 9 h 12, commande du portail B2B, réservation de 12 unités, commande 2027-0418. 10 h 30, vente au comptoir, moins 4, ticket 0418 caisse 2. 11 h 20, transfert vers le magasin du centre, moins 24, en transit, transfert 2027-77. 14 h 02, ajustement après comptage, moins 2, casse, motif obligatoire, par Nadir. 16 h 00, la réservation 2027-0391 expire, moins 8 réservées. Chaque ligne a sa source et son auteur ; le disponible est le stock physique moins les réservations.',
      product: 'Huile de table 5 L · carton de 4 · code 613 0001 234567 · lot L2611',
      productSub: 'journal du 10/11/2026 · chaque ligne porte un document source, un auteur, un appareil',
      location: 'dépôt Sétif',
      cols: ['heure', 'mouvement', 'qté', 'document source · auteur', 'physique', 'réservé', 'disponible'],
      opening: { label: 'Ouverture 10/11 · report du journal de la veille', onhand: 48, reserved: 8 },
      rows: [
        { time: '08:05', label: 'Réception fournisseur', qty: '+48', source: 'BR 2027-311 · Nadir · lecteur dépôt', onhand: 48, reserved: 0, kind: 'in' },
        { time: '09:12', label: 'Réservation · commande portail B2B', qty: '12', source: 'commande 2027-0418 · El Hidhab', onhand: 0, reserved: 12, kind: 'reserve' },
        { time: '10:30', label: 'Vente au comptoir', qty: '−4', source: 'ticket 0418 · caisse 2 · Amel', onhand: -4, reserved: 0, kind: 'out' },
        { time: '11:20', label: 'Transfert vers magasin centre · en transit', qty: '−24', source: 'transfert 2027-77 · Nadir · reçu à 15 h 10', onhand: -24, reserved: 0, kind: 'transfer' },
        { time: '14:02', label: 'Ajustement après comptage · casse', qty: '−2', source: 'comptage C-118 · motif obligatoire · Nadir', onhand: -2, reserved: 0, kind: 'adjust' },
        { time: '16:00', label: 'Réservation 2027-0391 expirée · libérée', qty: '−8 rés.', source: 'automatique · 48 h sans paiement', onhand: 0, reserved: -8, kind: 'expire' },
      ],
      rule: 'Le stock n’est jamais « modifié » : on ajoute un mouvement, et la quantité est la somme. Un chiffre qu’on peut taper est un chiffre qu’on ne peut pas expliquer.',
      rule2: 'physique 66 · réservé 12 · disponible 54 · six mouvements, six documents, trois personnes, deux appareils',
    },
    count: {
      title: 'L’inventaire tournant : compter un peu chaque semaine, pas tout fermer une fois par an',
      alt: 'À gauche, trois classes : A, les 20 % de références qui font 80 % de la valeur, comptées chaque semaine par deux personnes ; B, 30 % des références, comptées chaque mois ; C, le reste, compté chaque trimestre. À droite, la feuille de comptage du 10 novembre pour huit références de classe A : quantité système, quantité comptée, écart, motif. Trois écarts : moins deux sur l’huile, casse ; plus un sur la semoule, réception mal saisie ; moins trois sur le lait, vente non saisie. Les cinq autres sont justes. L’exactitude du mois : 96,8 % des lignes comptées justes, pour un objectif de 97 %.',
      classesLabel: 'Trois classes, trois rythmes',
      classes: [
        { name: 'Classe A', share: '20 % des réf. · 80 % de la valeur', freq: 'comptée chaque semaine', how: 'deux personnes · lecteur · sans voir le chiffre système' },
        { name: 'Classe B', share: '30 % des réf. · 15 % de la valeur', freq: 'comptée chaque mois', how: 'une personne · lecteur · le lundi' },
        { name: 'Classe C', share: '50 % des réf. · 5 % de la valeur', freq: 'comptée chaque trimestre', how: 'par zone de rayonnage · une allée par semaine' },
      ],
      sheetLabel: 'Feuille de comptage · classe A', sheetMeta: '10/11/2026 · dépôt Sétif · Nadir + Amel',
      sheetCols: ['référence', 'système', 'compté', 'écart', 'motif'],
      lines: [
        { name: 'Huile de table 5 L', system: 68, counted: 66, reason: 'casse · ajusté' },
        { name: 'Semoule fine 25 kg', system: 112, counted: 113, reason: 'réception mal saisie' },
        { name: 'Sucre 1 kg · carton 10', system: 240, counted: 240, reason: 'juste' },
        { name: 'Lait UHT 1 L · pack 6', system: 318, counted: 315, reason: 'vente non saisie' },
        { name: 'Café moulu 250 g', system: 96, counted: 96, reason: 'juste' },
        { name: 'Pâtes 500 g · carton 20', system: 400, counted: 400, reason: 'juste' },
        { name: 'Tomate concentrée 800 g', system: 150, counted: 150, reason: 'juste' },
        { name: 'Eau 1,5 L · pack 6', system: 540, counted: 540, reason: 'juste' },
      ],
      accuracy: { label: 'Exactitude du mois · lignes comptées justes', value: 96.8, valueLabel: '96,8 %', objective: 97, objectiveLabel: 'objectif 97 %' },
      rule: 'Règle : on compte sans voir le chiffre système, on écrit un motif pour chaque écart, et l’ajustement est un mouvement signé, jamais une correction du chiffre.', rule2: 'L’exactitude du mois, part des lignes comptées justes, est la seule mesure qui dit si le stock de l’application est fiable.',
    },
  },
  en: {
    ledger: {
      title: 'One product, one day, one warehouse: stock is a column of movements, not a number',
      alt: 'Table oil 5 litres, case of 4, Sétif warehouse. The 10 November ledger: opening at 48 units of which 8 reserved, so 40 available. 8:05, supplier receipt, plus 48 units, receiving note 2027-311, by Nadir. 9:12, B2B portal order, reservation of 12 units, order 2027-0418. 10:30, counter sale, minus 4, receipt 0418 till 2. 11:20, transfer to the city-centre shop, minus 24, in transit, transfer 2027-77. 14:02, adjustment after count, minus 2, breakage, mandatory reason, by Nadir. 16:00, reservation 2027-0391 expires, minus 8 reserved. Every line has its source and its author; available is physical stock minus reservations.',
      product: 'Table oil 5 L · case of 4 · code 613 0001 234567 · lot L2611',
      productSub: 'ledger of 10/11/2026 · every line carries a source document, an author, a device',
      location: 'Sétif warehouse',
      cols: ['time', 'movement', 'qty', 'source document · author', 'on hand', 'reserved', 'available'],
      opening: { label: 'Opening 10/11 · carried from yesterday’s ledger', onhand: 48, reserved: 8 },
      rows: [
        { time: '08:05', label: 'Supplier receipt', qty: '+48', source: 'GRN 2027-311 · Nadir · warehouse scanner', onhand: 48, reserved: 0, kind: 'in' },
        { time: '09:12', label: 'Reservation · B2B portal order', qty: '12', source: 'order 2027-0418 · El Hidhab', onhand: 0, reserved: 12, kind: 'reserve' },
        { time: '10:30', label: 'Counter sale', qty: '−4', source: 'receipt 0418 · till 2 · Amel', onhand: -4, reserved: 0, kind: 'out' },
        { time: '11:20', label: 'Transfer to city-centre shop · in transit', qty: '−24', source: 'transfer 2027-77 · Nadir · received 15:10', onhand: -24, reserved: 0, kind: 'transfer' },
        { time: '14:02', label: 'Adjustment after count · breakage', qty: '−2', source: 'count C-118 · mandatory reason · Nadir', onhand: -2, reserved: 0, kind: 'adjust' },
        { time: '16:00', label: 'Reservation 2027-0391 expired · released', qty: '−8 res.', source: 'automatic · 48 h without payment', onhand: 0, reserved: -8, kind: 'expire' },
      ],
      rule: 'Stock is never “edited”: a movement is added, and the quantity is the sum. A figure you can type is a figure you cannot explain.',
      rule2: 'on hand 66 · reserved 12 · available 54 · six movements, six documents, three people, two devices',
    },
    count: {
      title: 'Cycle counting: count a little every week instead of closing everything once a year',
      alt: 'On the left, three classes: A, the 20 % of references that make 80 % of the value, counted every week by two people; B, 30 % of references, counted every month; C, the rest, counted every quarter. On the right, the 10 November count sheet for eight class-A references: system quantity, counted quantity, variance, reason. Three variances: minus two on oil, breakage; plus one on semolina, receipt mis-entered; minus three on milk, sale not recorded. The other five are right. Accuracy for the month: 96.8 % of counted lines right, against a 97 % objective.',
      classesLabel: 'Three classes, three rhythms',
      classes: [
        { name: 'Class A', share: '20 % of refs · 80 % of value', freq: 'counted every week', how: 'two people · scanner · without seeing the system figure' },
        { name: 'Class B', share: '30 % of refs · 15 % of value', freq: 'counted every month', how: 'one person · scanner · on Monday' },
        { name: 'Class C', share: '50 % of refs · 5 % of value', freq: 'counted every quarter', how: 'by shelving zone · one aisle a week' },
      ],
      sheetLabel: 'Count sheet · class A', sheetMeta: '10/11/2026 · Sétif warehouse · Nadir + Amel',
      sheetCols: ['reference', 'system', 'counted', 'variance', 'reason'],
      lines: [
        { name: 'Table oil 5 L', system: 68, counted: 66, reason: 'breakage · adjusted' },
        { name: 'Fine semolina 25 kg', system: 112, counted: 113, reason: 'receipt mis-entered' },
        { name: 'Sugar 1 kg · case 10', system: 240, counted: 240, reason: 'right' },
        { name: 'UHT milk 1 L · pack 6', system: 318, counted: 315, reason: 'sale not recorded' },
        { name: 'Ground coffee 250 g', system: 96, counted: 96, reason: 'right' },
        { name: 'Pasta 500 g · case 20', system: 400, counted: 400, reason: 'right' },
        { name: 'Tomato paste 800 g', system: 150, counted: 150, reason: 'right' },
        { name: 'Water 1.5 L · pack 6', system: 540, counted: 540, reason: 'right' },
      ],
      accuracy: { label: 'Accuracy for the month · counted lines right', value: 96.8, valueLabel: '96.8 %', objective: 97, objectiveLabel: 'objective 97 %' },
      rule: 'Rule: you count without seeing the system figure, you write a reason for every variance, and the adjustment is a signed movement, never a correction of the figure.', rule2: 'The month’s accuracy, the share of counted lines that were right, is the only measure that says whether the application’s stock is reliable.',
    },
  },
  ar: {
    ledger: {
      title: 'منتج واحد، يوم واحد، مستودع واحد: المخزون عمود حركات لا رقم',
      alt: 'زيت المائدة 5 لترات، كرتون من 4، مستودع سطيف. سجل 10 نوفمبر: افتتاح عند 48 وحدة منها 8 محجوزة، أي 40 متاحة. 8:05، استلام من المورد، زائد 48 وحدة، وصل استلام 2027-311، بواسطة نذير. 9:12، طلبية من بوابة B2B، حجز 12 وحدة، الطلبية 2027-0418. 10:30، بيع عند الكاونتر، ناقص 4، تذكرة 0418 الصندوق 2. 11:20، تحويل إلى متجر الوسط، ناقص 24، في الطريق، تحويل 2027-77. 14:02، تسوية بعد الجرد، ناقص 2، كسر، سبب إلزامي، بواسطة نذير. 16:00، انتهاء الحجز 2027-0391، ناقص 8 محجوزة. لكل سطر مصدره ومؤلفه؛ والمتاح هو المخزون الفعلي ناقص الحجوزات.',
      product: `زيت المائدة 5 ل · كرتون من 4 · رمز ${I('613 0001 234567')} · دفعة ${I('L2611')}`,
      productSub: `سجل ${I('10/11/2026')} · كل سطر يحمل وثيقة مصدر ومؤلفاً وجهازاً`,
      location: 'مستودع سطيف',
      cols: ['الوقت', 'الحركة', 'الكمية', 'الوثيقة المصدر · المؤلف', 'الفعلي', 'محجوز', 'متاح'],
      opening: { label: `افتتاح ${I('10/11')} · مرحَّل من سجل الأمس`, onhand: 48, reserved: 8 },
      rows: [
        { time: I('08:05'), label: 'استلام من المورد', qty: '+48', source: `وصل ${I('2027-311')} · نذير · ماسح المستودع`, onhand: 48, reserved: 0, kind: 'in' },
        { time: I('09:12'), label: 'حجز · طلبية بوابة B2B', qty: '12', source: `الطلبية ${I('2027-0418')} · الهضاب`, onhand: 0, reserved: 12, kind: 'reserve' },
        { time: I('10:30'), label: 'بيع عند الكاونتر', qty: '−4', source: `تذكرة ${I('0418')} · الصندوق 2 · أمل`, onhand: -4, reserved: 0, kind: 'out' },
        { time: I('11:20'), label: 'تحويل إلى متجر الوسط · في الطريق', qty: '−24', source: `تحويل ${I('2027-77')} · نذير · استُلم ${I('15:10')}`, onhand: -24, reserved: 0, kind: 'transfer' },
        { time: I('14:02'), label: 'تسوية بعد الجرد · كسر', qty: '−2', source: `جرد ${I('C-118')} · سبب إلزامي · نذير`, onhand: -2, reserved: 0, kind: 'adjust' },
        { time: I('16:00'), label: `انتهاء الحجز ${I('2027-0391')} · مُحرَّر`, qty: '−8', source: 'آلي · 48 ساعة بلا دفع', onhand: 0, reserved: -8, kind: 'expire' },
      ],
      rule: 'المخزون لا «يُعدَّل» أبداً: تُضاف حركة، والكمية هي المجموع. الرقم الذي يمكن كتابته رقم لا يمكن تفسيره.',
      rule2: 'فعلي 66 · محجوز 12 · متاح 54 · ست حركات، ست وثائق، ثلاثة أشخاص، جهازان',
    },
    count: {
      title: 'الجرد الدوري: عدّ القليل كل أسبوع بدل إغلاق كل شيء مرة في السنة',
      alt: 'على اليمين ثلاث فئات: أ، 20 % من المراجع التي تشكّل 80 % من القيمة، تُعدّ كل أسبوع بواسطة شخصين؛ ب، 30 % من المراجع، تُعدّ كل شهر؛ ج، الباقي، يُعدّ كل فصل. على اليسار ورقة جرد 10 نوفمبر لثمانية مراجع من الفئة أ: كمية النظام، الكمية المعدودة، الفارق، السبب. ثلاثة فوارق: ناقص اثنان على الزيت، كسر؛ زائد واحد على السميد، استلام سيئ الإدخال؛ ناقص ثلاثة على الحليب، بيع غير مسجَّل. والخمسة الأخرى صحيحة. دقة الشهر: 96,8 % من الأسطر المعدودة صحيحة، لهدف 97 %.',
      classesLabel: 'ثلاث فئات، ثلاثة إيقاعات',
      classes: [
        { name: 'الفئة أ', share: '20 % من المراجع · 80 % من القيمة', freq: 'تُعدّ كل أسبوع', how: 'شخصان · ماسح · دون رؤية رقم النظام' },
        { name: 'الفئة ب', share: '30 % من المراجع · 15 % من القيمة', freq: 'تُعدّ كل شهر', how: 'شخص واحد · ماسح · يوم الاثنين' },
        { name: 'الفئة ج', share: '50 % من المراجع · 5 % من القيمة', freq: 'تُعدّ كل فصل', how: 'حسب منطقة الرفوف · ممر واحد في الأسبوع' },
      ],
      sheetLabel: 'ورقة الجرد · الفئة أ', sheetMeta: `${I('10/11/2026')} · مستودع سطيف · نذير + أمل`,
      sheetCols: ['المرجع', 'النظام', 'المعدود', 'الفارق', 'السبب'],
      lines: [
        { name: 'زيت المائدة 5 ل', system: 68, counted: 66, reason: 'كسر · مسوّى' },
        { name: 'سميد رقيق 25 كغ', system: 112, counted: 113, reason: 'استلام سيئ الإدخال' },
        { name: 'سكر 1 كغ · كرتون 10', system: 240, counted: 240, reason: 'صحيح' },
        { name: 'حليب 1 ل · عبوة 6', system: 318, counted: 315, reason: 'بيع غير مسجَّل' },
        { name: 'قهوة مطحونة 250 غ', system: 96, counted: 96, reason: 'صحيح' },
        { name: 'معكرونة 500 غ · كرتون 20', system: 400, counted: 400, reason: 'صحيح' },
        { name: 'طماطم مركزة 800 غ', system: 150, counted: 150, reason: 'صحيح' },
        { name: 'ماء 1,5 ل · عبوة 6', system: 540, counted: 540, reason: 'صحيح' },
      ],
      accuracy: { label: 'دقة الشهر · أسطر معدودة صحيحة', value: 96.8, valueLabel: '96,8 %', objective: 97, objectiveLabel: 'الهدف 97 %' },
      rule: 'القاعدة: نعدّ دون رؤية رقم النظام، ونكتب سبباً لكل فارق، والتسوية حركة موقَّعة لا تصحيح للرقم أبداً.', rule2: 'ودقة الشهر، حصة الأسطر المعدودة الصحيحة، هي المقياس الوحيد الذي يقول إن كان مخزون التطبيق موثوقاً.',
    },
  },
};
