// Bespoke animated figures for the 2027 "quote to invoice without retyping" post.
//  pricing():   how one line price is computed: a price waterfall from the
//               catalogue price through the customer grid, the quantity break
//               and the requested discount, against a margin floor line; the
//               requested discount dips under the floor, is refused by the
//               server, and the approved discount lands above it. Side panel:
//               who may discount how much, and the three rules.
//  lifecycle(): quote v1 → v2 → acceptance → order → partial delivery →
//               invoice 60 % → invoice 40 %: seven document cards in two rows,
//               each listing what is frozen at that step, connectors carrying
//               the event that creates the next document.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function grow(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleY(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleY(1)}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function draw(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{stroke-dashoffset:1000}${(at + dur).toFixed(1)}%,100%{stroke-dashoffset:0}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function arrow(c, x1, y1, x2, y2, o = {}) {
  const { stroke = C.line2, dash = '' } = o; const X1 = c.X(x1), X2 = c.X(x2);
  const ang = Math.atan2(y2 - y1, X2 - X1); const hx = X2 - 9 * Math.cos(ang), hy = y2 - 9 * Math.sin(ang);
  const p1 = [hx + 4 * Math.sin(ang), hy - 4 * Math.cos(ang)], p2 = [hx - 4 * Math.sin(ang), hy + 4 * Math.cos(ang)];
  return `<line x1="${X1}" y1="${y1}" x2="${hx.toFixed(1)}" y2="${hy.toFixed(1)}" stroke="${stroke}" stroke-width="1"${dash ? ` stroke-dasharray="${dash}"` : ''}/><polygon points="${X2},${y2} ${p1[0].toFixed(1)},${p1[1].toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}" fill="${stroke}"/>`;
}

export function pricing(t, rtl) {
  const c = ctx(rtl); const P = 'pr'; const css = []; const H = 600;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  // chart
  const cx0 = 80, cw = 680, top = 110, bottom = 470; const yMin = t.yMin, yMax = t.yMax;
  const Y = (v) => bottom - (v - yMin) / (yMax - yMin) * (bottom - top);
  // axis ticks
  t.ticks.forEach((v) => { s += line(c, cx0, Y(v), cx0 + cw, Y(v), { stroke: C.line }) + text(c, cx0 + cw + 6, Y(v) + 4, t.fmt(v), { size: 10, font: 'mono', fill: C.fg35 }); });
  const n = t.bars.length; const slot = cw / n; const bw = 72;
  t.bars.forEach((b, i) => {
    const x = cx0 + slot * i + (slot - bw) / 2; const y = Y(b.value); const h = bottom - y; const at = 6 + i * 10;
    const fill = b.kind === 'refused' ? 'rgba(255,255,255,0.06)' : b.kind === 'approved' ? 'rgba(242,181,68,0.22)' : 'rgba(255,255,255,0.14)';
    const stroke = b.kind === 'refused' ? C.fg55 : b.kind === 'approved' ? C.accent : C.line2;
    s += `<rect x="${c.RX(x, bw)}" y="${y}" width="${bw}" height="${h}" fill="${fill}" stroke="${stroke}" stroke-width="1"${b.kind === 'refused' ? ' stroke-dasharray="4 3"' : ''} style="transform-box:fill-box;transform-origin:center bottom;animation:${grow(css, P, `b${i}`, at, 5)}"/>`;
    s += `<g style="animation:${show(css, P, `l${i}`, at + 4)}">`
      + text(c, x + bw / 2, b.kind === 'refused' ? y + h / 2 + 26 : y - 10, t.fmt(b.value), { size: 12, font: 'mono', fill: b.kind === 'refused' ? C.fg55 : b.kind === 'approved' ? C.accent : C.fg, anchor: 'middle', weight: 500 })
      + text(c, x + bw / 2, bottom + 20, b.label, { size: 11, fill: C.fg70, anchor: 'middle' })
      + text(c, x + bw / 2, bottom + 36, b.sub, { size: 10, font: 'mono', fill: b.kind === 'refused' ? C.fg55 : C.fg35, anchor: 'middle' })
      + '</g>';
    if (i > 0) { const prev = t.bars[i - 1]; const px = cx0 + slot * (i - 1) + (slot - bw) / 2 + bw; s += `<g style="animation:${show(css, P, `s${i}`, at + 2)}">` + line(c, px, Y(prev.value), x, Y(prev.value), { stroke: C.line2, dash: '2 3' }) + '</g>'; }
    if (b.kind === 'refused') s += `<g style="animation:${show(css, P, 'x', at + 6)}">` + text(c, x + bw / 2, y + h / 2 - 2, '✕', { size: 18, fill: C.fg55, anchor: 'middle' }) + '</g>';
  });
  // margin floor
  const fy = Y(t.floor.value);
  s += `<line x1="${c.X(cx0)}" y1="${fy}" x2="${c.X(cx0 + cw)}" y2="${fy}" stroke="${C.accent}" stroke-width="1.2" stroke-dasharray="6 4" pathLength="1000" style="stroke-dashoffset:0;animation:${draw(css, P, 'floor', 2, 6)}"/>`;
  s += `<g style="animation:${show(css, P, 'fl', 8)}">` + text(c, cx0 + slot * 3 + 6, fy + 16, t.floor.label, { size: 10, font: 'mono', fill: C.accent }) + text(c, cx0 + slot * 3 + 6, fy + 30, t.floor.label2, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  // side panel
  const rx = 820, rw = 300;
  s += text(c, rx, 108, t.panelLabel, { size: 11, font: 'mono', fill: C.fg35, letter: 2, upper: true });
  s += line(c, rx, 118, rx + rw, 118, { stroke: C.line2 });
  t.tiers.forEach((tr, i) => {
    const y = 146 + i * 56;
    s += `<g style="animation:${show(css, P, `t${i}`, 10 + i * 6)}">` + rect(c, rx, y - 20, rw, 44, { stroke: tr.hot ? C.accent : C.line2, fill: tr.hot ? 'rgba(242,181,68,0.06)' : 'none' }) + text(c, rx + 12, y, tr.who, { size: 12.5, fill: tr.hot ? C.accent : C.fg }) + text(c, rx + rw - 12, y, tr.max, { size: 12, font: 'mono', fill: tr.hot ? C.accent : C.fg70, anchor: 'end' }) + text(c, rx + 12, y + 16, tr.how, { size: 10, font: 'mono', fill: C.fg55 }) + '</g>';
  });
  const ry = 146 + t.tiers.length * 56 + 6;
  t.rules.forEach((r, i) => { s += `<g style="animation:${show(css, P, `r${i}`, 62 + i * 5)}">` + text(c, rx, ry + i * 34, r[0], { size: 11.5, fill: C.fg }) + text(c, rx, ry + i * 34 + 15, r[1], { size: 10, font: 'mono', fill: C.fg55 }) + '</g>'; });
  s += text(c, 80, 560, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, 580, t.rule2, { size: 10.5, font: 'mono', fill: C.accent });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"],svg rect[style*="${P}-"],svg line[style*="${P}-"]{animation:none !important;transform:none}}</style>`;
  return s + '</svg>';
}

export function lifecycle(t, rtl) {
  const c = ctx(rtl); const P = 'lc'; const css = []; const H = 600;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  const cwid = 270, chei = 150; const xs = [80, 465, 850]; const rows = [104, 334];
  // positions: row 0 cards 0..2, row 1 cards 3..5 ; card 6 (final) drawn inside card 5? keep 6 cards + a closing note
  t.cards.forEach((k, i) => {
    const r = i < 3 ? 0 : 1; const col = i < 3 ? i : i - 3; const x = xs[col], y = rows[r]; const at = 4 + i * 9;
    s += `<g style="animation:${show(css, P, `c${i}`, at)}">`
      + rect(c, x, y, cwid, chei, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? 'rgba(242,181,68,0.06)' : C.fill })
      + text(c, x + 14, y + 24, k.title, { size: 14, fill: k.hot ? C.accent : C.fg })
      + text(c, x + cwid - 14, y + 24, k.num, { size: 10.5, font: 'mono', fill: C.fg55, anchor: 'end' })
      + text(c, x + 14, y + 46, k.l1, { size: 11, fill: C.fg70 })
      + text(c, x + 14, y + 63, k.l2, { size: 11, fill: C.fg70 })
      + line(c, x + 14, y + 76, x + cwid - 14, y + 76, { stroke: C.line })
      + text(c, x + 14, y + 94, t.frozenLabel, { size: 9.5, font: 'mono', fill: C.accent, letter: 1, upper: true })
      + text(c, x + 14, y + 112, k.f1, { size: 10.5, font: 'mono', fill: C.fg55 })
      + text(c, x + 14, y + 128, k.f2, { size: 10.5, font: 'mono', fill: C.fg55 })
      + '</g>';
    // connector to next
    if (i < t.cards.length - 1) {
      const ev = t.events[i]; const at2 = at + 5;
      if (i === 2) {
        // wrap from row 0 col 2 down to row 1 col 0
        const x1 = xs[2] + cwid / 2, y1 = rows[0] + chei, y2 = rows[1]; const midY = (y1 + y2) / 2;
        s += `<g style="animation:${show(css, P, `e${i}`, at2)}">` + line(c, x1, y1, x1, midY, { stroke: C.line2 }) + line(c, x1, midY, xs[0] + cwid / 2, midY, { stroke: C.line2 }) + arrow(c, xs[0] + cwid / 2, midY, xs[0] + cwid / 2, y2 - 2) + rect(c, 440, midY - 11, 320, 22, { fill: '#000', stroke: 'none' }) + text(c, 600, midY + 4, ev.join(' · '), { size: 10.5, font: 'mono', fill: C.fg70, anchor: 'middle' }) + '</g>';
      } else {
        const x1 = x + cwid, x2 = xs[col + 1], ym = y + chei / 2;
        s += `<g style="animation:${show(css, P, `e${i}`, at2)}">` + arrow(c, x1, ym, x2 - 2, ym) + text(c, (x1 + x2) / 2, ym - 22, ev[0], { size: 9.5, font: 'mono', fill: C.fg70, anchor: 'middle' }) + text(c, (x1 + x2) / 2, ym - 9, ev[1], { size: 9.5, font: 'mono', fill: C.fg70, anchor: 'middle' }) + '</g>';
      }
    }
  });
  s += `<g style="animation:${show(css, P, 'rule', 70)}">` + text(c, 80, 540, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, 560, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, 582, t.rule3, { size: 10.5, font: 'mono', fill: C.accent }) + '</g>';
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

const I = (x) => `⁦${x}⁩`;
const fmtFR = (v) => v.toLocaleString('fr-FR').replace(/ | | /g, ' ') + ' DA';
const fmtEN = (v) => v.toLocaleString('en-US') + ' DA';
const fmtAR = (v) => I(v.toLocaleString('en-US')) + ' دج';

export const STRINGS = {
  fr: {
    pricing: {
      title: 'Comment le prix d’une ligne se calcule, et où la remise s’arrête',
      alt: 'Cascade de prix pour une ligne de devis : prix catalogue 12 000 DA ; prix de la grille client « grossiste », moins 8 %, 11 040 DA ; palier de quantité à partir de 50, moins 3 %, 10 709 DA ; remise commerciale demandée par le vendeur, moins 10 %, 9 638 DA, refusée parce qu’elle passe sous le plancher de marge de 10 114 DA ; remise approuvée par le chef des ventes, moins 4 %, 10 281 DA, au-dessus du plancher. À droite, qui peut remettre combien : vendeur jusqu’à 5 %, chef des ventes jusqu’à 10 %, direction au-delà ; et trois règles : le moteur calcule, l’écran affiche, le serveur refuse. Les montants sont un exemple construit.',
      yMin: 8800, yMax: 12400, ticks: [9000, 10000, 11000, 12000], fmt: fmtFR,
      bars: [
        { label: 'Prix catalogue', sub: 'liste 2027 · HT', value: 12000, kind: 'base' },
        { label: 'Grille client', sub: '« grossiste » · −8 %', value: 11040, kind: 'step' },
        { label: 'Palier quantité', sub: '≥ 50 unités · −3 %', value: 10709, kind: 'step' },
        { label: 'Remise demandée', sub: 'vendeur · −10 % · refusée', value: 9638, kind: 'refused' },
        { label: 'Remise approuvée', sub: 'chef des ventes · −4 %', value: 10281, kind: 'approved' },
      ],
      floor: { value: 10114, label: 'plancher de marge · 10 114 DA', label2: 'coût 8 900 DA · marge brute min. 12 %' },
      panelLabel: 'Qui peut remettre combien',
      tiers: [
        { who: 'Vendeur', max: '≤ 5 %', how: 'seul · journalisé' },
        { who: 'Chef des ventes', max: '≤ 10 %', how: 'approbation en un geste · motif obligatoire', hot: true },
        { who: 'Direction', max: '> 10 %', how: 'approbation · jamais sous le plancher' },
      ],
      rules: [
        ['Le moteur calcule', 'grille → palier → remise, dans cet ordre, côté serveur'],
        ['L’écran affiche', 'le prix, la marge et la remise restante autorisée'],
        ['Le serveur refuse', 'tout prix sous le plancher, quel que soit l’écran'],
      ],
      rule: 'Un prix n’est jamais tapé : il est calculé par une suite de règles écrites, et la remise est un droit par rôle, pas une case libre.',
      rule2: 'coût, grille, paliers et seuils : exemple construit · le plancher est fixé par la direction, pas par le vendeur',
    },
    lifecycle: {
      title: 'Du devis à la facture : sept documents, zéro ressaisie, et ce qui est gelé à chaque étape',
      alt: 'Deux rangées de cartes. Devis v1, daté, valable 30 jours, prix calculés ; gelé : lignes, prix, version. Devis v2 après négociation ; v1 conservée ; gelé : lignes, prix, version. Acceptation par signature sur le téléphone ou code reçu par SMS, dans la validité ; gelé : le devis accepté, l’identité, l’heure. Puis Commande créée depuis le devis accepté, acompte de 30 % demandé ; gelé : quantités commandées, prix, conditions. Livraison partielle, bon de livraison signé pour 60 % ; gelé : quantités livrées, date, signature. Facture 1 pour les 60 % livrés moins l’acompte, puis facture 2 pour le solde ; gelé : numéro, lignes, montants, PDF. Chaque flèche porte l’événement qui crée le document suivant.',
      frozenLabel: 'gelé',
      cards: [
        { title: 'Devis v1', num: 'D-2027-0418 · v1', l1: 'daté · valable 30 jours', l2: 'prix calculés par le moteur, marge visible', f1: 'lignes · prix · remises · version', f2: 'PDF v1 conservé, jamais régénéré' },
        { title: 'Devis v2', num: 'D-2027-0418 · v2', l1: 'après négociation · remise approuvée', l2: 'v1 conservée, v2 envoyée', f1: 'lignes · prix · remises · version', f2: 'PDF v2 · lien de comparaison v1/v2' },
        { title: 'Acceptation', num: '14/11 · 10:42', l1: 'signature sur le téléphone ou code SMS', l2: 'dans la validité · identité vérifiée', f1: 'devis accepté · qui · quand · comment', f2: 'après acceptation : v3 = nouveau devis', hot: true },
        { title: 'Commande', num: 'C-2027-0512', l1: 'créée depuis le devis accepté', l2: 'acompte 30 % demandé · délai écrit', f1: 'quantités commandées · prix · conditions', f2: 'restes à livrer calculés, jamais tapés' },
        { title: 'Livraison partielle', num: 'BL-2027-0890', l1: 'bon de livraison signé · 60 %', l2: 'photo · heure · reste 40 % en attente', f1: 'quantités livrées · date · signature', f2: 'le stock bouge ici, pas à la commande' },
        { title: 'Factures', num: 'F-2027-1201 · F-2027-1288', l1: 'facture 1 : 60 % livrés − acompte', l2: 'facture 2 : solde à la dernière livraison', f1: 'numéro · lignes · montants · PDF', f2: 'erreur → avoir, jamais une modification', hot: true },
      ],
      events: [['négociation', 'nouvelle version'], ['signature / code', 'dans le délai'], ['acceptation → commande', 'acompte demandé'], ['acompte reçu', 'préparation'], ['BL signé →', 'facture du livré']],
      rule: 'Un document n’est jamais retapé à partir du précédent : il est créé depuis lui, par un événement, et ce qui est gelé ne bouge plus.',
      rule2: 'Les quantités restant à livrer et à facturer sont des différences calculées, et une erreur après émission se corrige par un avoir.',
      rule3: 'numéros, dates et pourcentages : exemple construit · la numérotation sans trou est décrite dans le guide sur l’impression des documents',
    },
  },
  en: {
    pricing: {
      title: 'How a line price is computed, and where the discount stops',
      alt: 'Price waterfall for one quote line: catalogue price 12,000 DA; customer grid price “wholesaler”, minus 8 %, 11,040 DA; quantity break from 50 units, minus 3 %, 10,709 DA; commercial discount requested by the sales rep, minus 10 %, 9,638 DA, refused because it falls under the margin floor of 10,114 DA; discount approved by the sales manager, minus 4 %, 10,281 DA, above the floor. On the right, who may discount how much: sales rep up to 5 %, sales manager up to 10 %, management beyond; and three rules: the engine computes, the screen displays, the server refuses. Amounts are a constructed example.',
      yMin: 8800, yMax: 12400, ticks: [9000, 10000, 11000, 12000], fmt: fmtEN,
      bars: [
        { label: 'Catalogue price', sub: '2027 list · excl. tax', value: 12000, kind: 'base' },
        { label: 'Customer grid', sub: '“wholesaler” · −8 %', value: 11040, kind: 'step' },
        { label: 'Quantity break', sub: '≥ 50 units · −3 %', value: 10709, kind: 'step' },
        { label: 'Requested discount', sub: 'sales rep · −10 % · refused', value: 9638, kind: 'refused' },
        { label: 'Approved discount', sub: 'sales manager · −4 %', value: 10281, kind: 'approved' },
      ],
      floor: { value: 10114, label: 'margin floor · 10,114 DA', label2: 'cost 8,900 DA · min. gross margin 12 %' },
      panelLabel: 'Who may discount how much',
      tiers: [
        { who: 'Sales rep', max: '≤ 5 %', how: 'alone · logged' },
        { who: 'Sales manager', max: '≤ 10 %', how: 'one-gesture approval · mandatory reason', hot: true },
        { who: 'Management', max: '> 10 %', how: 'approval · never under the floor' },
      ],
      rules: [
        ['The engine computes', 'grid → break → discount, in that order, server side'],
        ['The screen displays', 'the price, the margin and the remaining allowed discount'],
        ['The server refuses', 'any price under the floor, whatever the screen says'],
      ],
      rule: 'A price is never typed: it is computed by a sequence of written rules, and the discount is a right per role, not a free field.',
      rule2: 'cost, grid, breaks and thresholds: constructed example · the floor is set by management, not by the sales rep',
    },
    lifecycle: {
      title: 'From quote to invoice: seven documents, zero retyping, and what is frozen at each step',
      alt: 'Two rows of cards. Quote v1, dated, valid 30 days, computed prices; frozen: lines, prices, version. Quote v2 after negotiation; v1 kept; frozen: lines, prices, version. Acceptance by signature on the phone or a code received by SMS, within validity; frozen: the accepted quote, identity, time. Then Order created from the accepted quote, 30 % deposit requested; frozen: ordered quantities, prices, terms. Partial delivery, delivery note signed for 60 %; frozen: delivered quantities, date, signature. Invoice 1 for the 60 % delivered minus the deposit, then invoice 2 for the balance; frozen: number, lines, amounts, PDF. Every arrow carries the event that creates the next document.',
      frozenLabel: 'frozen',
      cards: [
        { title: 'Quote v1', num: 'Q-2027-0418 · v1', l1: 'dated · valid 30 days', l2: 'prices computed by the engine, margin visible', f1: 'lines · prices · discounts · version', f2: 'PDF v1 kept, never regenerated' },
        { title: 'Quote v2', num: 'Q-2027-0418 · v2', l1: 'after negotiation · approved discount', l2: 'v1 kept, v2 sent', f1: 'lines · prices · discounts · version', f2: 'PDF v2 · v1/v2 comparison link' },
        { title: 'Acceptance', num: '14/11 · 10:42', l1: 'signature on the phone or SMS code', l2: 'within validity · identity checked', f1: 'accepted quote · who · when · how', f2: 'after acceptance: v3 = a new quote', hot: true },
        { title: 'Order', num: 'O-2027-0512', l1: 'created from the accepted quote', l2: '30 % deposit requested · written lead time', f1: 'ordered quantities · prices · terms', f2: 'remaining to deliver computed, never typed' },
        { title: 'Partial delivery', num: 'DN-2027-0890', l1: 'delivery note signed · 60 %', l2: 'photo · time · 40 % remaining pending', f1: 'delivered quantities · date · signature', f2: 'stock moves here, not at the order' },
        { title: 'Invoices', num: 'I-2027-1201 · I-2027-1288', l1: 'invoice 1: 60 % delivered − deposit', l2: 'invoice 2: balance at the last delivery', f1: 'number · lines · amounts · PDF', f2: 'error → credit note, never an edit', hot: true },
      ],
      events: [['negotiation', 'new version'], ['signature / code', 'within validity'], ['acceptance → order', 'deposit requested'], ['deposit received', 'preparation'], ['signed DN →', 'invoice delivered']],
      rule: 'A document is never retyped from the previous one: it is created from it, by an event, and what is frozen no longer moves.',
      rule2: 'Quantities remaining to deliver and to invoice are computed differences, and an error after issue is corrected by a credit note.',
      rule3: 'numbers, dates and percentages: constructed example · gapless numbering is described in the document printing guide',
    },
  },
  ar: {
    pricing: {
      title: 'كيف يُحسب سعر السطر، وأين تتوقف الخصومات',
      alt: 'شلال سعر لسطر عرض سعر: سعر الكتالوج 12,000 دج؛ سعر شبكة الزبون «تاجر جملة»، ناقص 8 %، 11,040 دج؛ عتبة كمية من 50 وحدة، ناقص 3 %، 10,709 دج؛ خصم تجاري يطلبه البائع، ناقص 10 %، 9,638 دج، مرفوض لأنه ينزل تحت أرضية الهامش 10,114 دج؛ خصم وافق عليه مدير المبيعات، ناقص 4 %، 10,281 دج، فوق الأرضية. على الجانب من يستطيع الخصم وكم: البائع حتى 5 %، مدير المبيعات حتى 10 %، الإدارة فوق ذلك؛ وثلاث قواعد: المحرك يحسب، الشاشة تعرض، الخادم يرفض. والمبالغ مثال مبني.',
      yMin: 8800, yMax: 12400, ticks: [9000, 10000, 11000, 12000], fmt: fmtAR,
      bars: [
        { label: 'سعر الكتالوج', sub: 'قائمة 2027 · دون ضريبة', value: 12000, kind: 'base' },
        { label: 'شبكة الزبون', sub: `«تاجر جملة» · ${I('−8 %')}`, value: 11040, kind: 'step' },
        { label: 'عتبة الكمية', sub: `${I('≥ 50')} وحدة · ${I('−3 %')}`, value: 10709, kind: 'step' },
        { label: 'الخصم المطلوب', sub: `البائع · ${I('−10 %')} · مرفوض`, value: 9638, kind: 'refused' },
        { label: 'الخصم المعتمد', sub: `مدير المبيعات · ${I('−4 %')}`, value: 10281, kind: 'approved' },
      ],
      floor: { value: 10114, label: `أرضية الهامش · ${I('10,114')} دج`, label2: `تكلفة ${I('8,900')} دج · هامش أدنى 12 %` },
      panelLabel: 'من يستطيع الخصم وكم',
      tiers: [
        { who: 'البائع', max: I('≤ 5 %'), how: 'وحده · مسجَّل' },
        { who: 'مدير المبيعات', max: I('≤ 10 %'), how: 'موافقة بحركة واحدة · سبب إلزامي', hot: true },
        { who: 'الإدارة', max: I('> 10 %'), how: 'موافقة · أبداً تحت الأرضية' },
      ],
      rules: [
        ['المحرك يحسب', 'شبكة ← عتبة ← خصم، بهذا الترتيب، من جهة الخادم'],
        ['الشاشة تعرض', 'السعر والهامش والخصم المتبقي المسموح'],
        ['الخادم يرفض', 'أي سعر تحت الأرضية مهما قالت الشاشة'],
      ],
      rule: 'السعر لا يُكتب أبداً: يُحسب بسلسلة قواعد مكتوبة، والخصم حق حسب الدور لا خانة حرة.',
      rule2: 'التكلفة والشبكة والعتبات والحدود: مثال مبني · الأرضية تحددها الإدارة لا البائع',
    },
    lifecycle: {
      title: 'من عرض السعر إلى الفاتورة: سبع وثائق، صفر إعادة إدخال، وما يُجمَّد في كل خطوة',
      alt: 'صفان من البطاقات. عرض سعر ن1، مؤرَّخ، صالح 30 يوماً، أسعار محسوبة؛ مجمَّد: الأسطر والأسعار والنسخة. عرض سعر ن2 بعد التفاوض؛ ن1 محفوظة؛ مجمَّد: الأسطر والأسعار والنسخة. قبول بتوقيع على الهاتف أو رمز عبر SMS، ضمن الصلاحية؛ مجمَّد: العرض المقبول والهوية والوقت. ثم طلبية منشأة من العرض المقبول، عربون 30 % مطلوب؛ مجمَّد: الكميات المطلوبة والأسعار والشروط. تسليم جزئي، وصل تسليم موقَّع لـ 60 %؛ مجمَّد: الكميات المسلَّمة والتاريخ والتوقيع. فاتورة 1 عن 60 % المسلَّمة ناقص العربون، ثم فاتورة 2 عن الباقي؛ مجمَّد: الرقم والأسطر والمبالغ وPDF. كل سهم يحمل الحدث الذي ينشئ الوثيقة التالية.',
      frozenLabel: 'مجمَّد',
      cards: [
        { title: 'عرض سعر ن1', num: I('D-2027-0418 · v1'), l1: 'مؤرَّخ · صالح 30 يوماً', l2: 'أسعار يحسبها المحرك، الهامش ظاهر', f1: 'أسطر · أسعار · خصومات · نسخة', f2: 'PDF ن1 محفوظ، لا يُعاد توليده' },
        { title: 'عرض سعر ن2', num: I('D-2027-0418 · v2'), l1: 'بعد التفاوض · خصم معتمد', l2: 'ن1 محفوظة، ن2 مرسلة', f1: 'أسطر · أسعار · خصومات · نسخة', f2: 'PDF ن2 · رابط مقارنة ن1/ن2' },
        { title: 'القبول', num: I('14/11 · 10:42'), l1: 'توقيع على الهاتف أو رمز SMS', l2: 'ضمن الصلاحية · هوية متحقَّق منها', f1: 'العرض المقبول · من · متى · كيف', f2: 'بعد القبول: ن3 = عرض جديد', hot: true },
        { title: 'الطلبية', num: I('C-2027-0512'), l1: 'منشأة من العرض المقبول', l2: 'عربون 30 % مطلوب · أجل مكتوب', f1: 'كميات مطلوبة · أسعار · شروط', f2: 'المتبقي للتسليم محسوب، لا يُكتب' },
        { title: 'تسليم جزئي', num: I('BL-2027-0890'), l1: 'وصل تسليم موقَّع · 60 %', l2: 'صورة · ساعة · 40 % متبقية معلّقة', f1: 'كميات مسلَّمة · تاريخ · توقيع', f2: 'المخزون يتحرك هنا لا عند الطلب' },
        { title: 'الفواتير', num: I('F-2027-1201 · F-2027-1288'), l1: 'فاتورة 1: 60 % مسلَّمة − العربون', l2: 'فاتورة 2: الباقي عند آخر تسليم', f1: 'رقم · أسطر · مبالغ · PDF', f2: 'خطأ ← إشعار دائن، لا تعديل أبداً', hot: true },
      ],
      events: [['تفاوض', 'نسخة جديدة'], ['توقيع / رمز', 'ضمن الصلاحية'], ['قبول ← طلبية', 'طلب عربون'], ['عربون مستلَم', 'تحضير'], ['وصل موقَّع ←', 'فوترة المسلَّم']],
      rule: 'الوثيقة لا يُعاد إدخالها من السابقة أبداً: تُنشأ منها بحدث، وما جُمِّد لا يتحرك بعد.',
      rule2: 'الكميات المتبقية للتسليم والفوترة فروق محسوبة، والخطأ بعد الإصدار يُصحَّح بإشعار دائن.',
      rule3: 'الأرقام والتواريخ والنسب: مثال مبني · الترقيم بلا فجوات موصوف في دليل طباعة الوثائق',
    },
  },
};
