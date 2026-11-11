// Bespoke animated figures for the 2027 "the device comes back broken and nobody
// knows if we sold it" post.
//  life():  one serialized unit from reception to exchange: a header strip with its
//           identity, three lanes on a February–October 2027 axis (unit state,
//           seller warranty, supplier warranty), the return marker with the day
//           count that decides the warranty, a zoom on the repair order, three tiles.
//           Lanes appear, the return marker draws.
//  board(): the repair board: seven open repair orders with state, days elapsed
//           as a growing bar against a 14-day supplier threshold, warranty decision
//           and who holds the unit; two rows over the threshold accented; three tiles.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function draw(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{stroke-dashoffset:1000}${(at + dur).toFixed(1)}%,100%{stroke-dashoffset:0}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function grow(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
const I = (x) => `⁦${x}⁩`;

export function life(t, rtl) {
  const c = ctx(rtl); const P = 'lf'; const css = []; const H = 620;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: 'rgba(242,181,68,0.06)' }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  // axis: day 0 = 1 Feb 2027, day 273 = 31 Oct 2027
  const ax = 300, aw = 820, ay = 152; const DAYS = 273; const dX = (d) => ax + (Math.min(Math.max(d, 0), DAYS) / DAYS) * aw;
  const laneH = 50, lanes = t.lanes.length;
  t.ticks.forEach((tk) => { s += line(c, dX(tk.d), ay - 6, dX(tk.d), ay + lanes * laneH, { stroke: C.line }) + text(c, dX(tk.d), ay - 12, tk.l, { size: 9, font: 'mono', fill: C.fg35, anchor: 'middle' }); });
  t.lanes.forEach((ln, i) => {
    const y = ay + 4 + i * laneH; const at = 4 + i * 3;
    s += `<g style="animation:${show(css, P, `n${i}`, at)}">` + text(c, 80, y + 15, ln.name, { size: 11, fill: C.fg, weight: 500 }) + text(c, 80, y + 29, ln.sub, { size: 8.5, font: 'mono', fill: ln.hot ? C.accent : C.fg55 }) + line(c, 80, y + 42, 1120, y + 42, { stroke: C.line }) + '</g>';
    ln.blocks.forEach((b, k) => {
      const x0 = dX(b.from), x1 = dX(b.to); const w = Math.max(x1 - x0, 4);
      const stroke = b.kind === 'hot' ? C.accent : b.kind === 'warr' ? C.line2 : C.line2;
      const fill = b.kind === 'hot' ? 'rgba(242,181,68,0.22)' : b.kind === 'warr' ? 'rgba(255,255,255,0.10)' : b.kind === 'faint' ? 'none' : 'rgba(255,255,255,0.05)';
      s += `<g style="animation:${show(css, P, `b${i}${k}`, at + 1 + k * 0.8)}">` + rect(c, x0, y + 2, w, 26, { stroke, fill, dash: b.kind === 'faint' ? '3 3' : undefined })
        + (b.t ? text(c, (b.labelAt === 'after' ? x1 + 6 : x0 + 6), y + 13, b.t, { size: 8.5, font: 'mono', fill: b.kind === 'hot' ? C.accent : C.fg70 }) : '')
        + (b.sub ? text(c, (b.labelAt === 'after' ? x1 + 6 : x0 + 6), y + 24, b.sub, { size: 7.5, font: 'mono', fill: C.fg55 }) : '')
        + (b.to > DAYS ? text(c, 1120, y + 24, b.beyond, { size: 7.5, font: 'mono', fill: C.fg55, anchor: 'end' }) : '') + '</g>';
    });
  });
  // return marker
  const my = ay + lanes * laneH + 6;
  s += `<line x1="${c.X(dX(t.ret.d))}" y1="${ay - 6}" x2="${c.X(dX(t.ret.d))}" y2="${my}" stroke="${C.accent}" stroke-width="1.6" pathLength="1000" style="stroke-dashoffset:0;animation:${draw(css, P, 'rt', 14, 3)}"/>`;
  s += `<g style="animation:${show(css, P, 'rtl', 16)}">` + text(c, dX(t.ret.d) - 6, my + 12, t.ret.l, { size: 10, font: 'mono', fill: C.accent, weight: 500, anchor: 'end' }) + text(c, dX(t.ret.d) - 6, my + 25, t.ret.sub, { size: 8.5, font: 'mono', fill: C.fg55, anchor: 'end' }) + '</g>';
  // zoom on the repair order
  const zy = my + 44; const zx = 80, zw = 1040; const Z0 = t.zoom.from, Z1 = t.zoom.to; const zX = (d) => zx + 200 + ((d - Z0) / (Z1 - Z0)) * (zw - 210);
  s += `<g style="animation:${show(css, P, 'z', 18)}">` + rect(c, zx, zy, zw, 92, { stroke: C.line2, fill: C.fill }) + text(c, zx + 12, zy + 18, t.zoom.title, { size: 10.5, fill: C.fg, weight: 500 }) + text(c, zx + 12, zy + 33, t.zoom.sub, { size: 8.5, font: 'mono', fill: C.fg55 }) + text(c, zx + 12, zy + 47, t.zoom.sub2, { size: 8.5, font: 'mono', fill: C.fg55 });
  t.zoom.ticks.forEach((tk) => { s += line(c, zX(tk.d), zy + 50, zX(tk.d), zy + 86, { stroke: C.line }) + text(c, zX(tk.d), zy + 46, tk.l, { size: 8, font: 'mono', fill: C.fg35, anchor: 'middle' }); });
  s += '</g>';
  t.zoom.blocks.forEach((b, k) => { const x0 = zX(b.from), x1 = zX(b.to); s += `<g style="animation:${show(css, P, `zb${k}`, 19 + k * 1.2)}">` + rect(c, x0, zy + 54, x1 - x0, 28, { stroke: b.hot ? C.accent : C.line2, fill: b.hot ? 'rgba(242,181,68,0.22)' : 'rgba(255,255,255,0.06)' }) + text(c, x0 + 5, zy + 66, b.t, { size: 8.5, font: 'mono', fill: b.hot ? C.accent : C.fg70 }) + text(c, x0 + 5, zy + 77, b.sub, { size: 7.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  const ky = zy + 108;
  t.tiles.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, 25 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? 'rgba(242,181,68,0.06)' : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  s += text(c, 80, ky + 86, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"],svg line[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

export function board(t, rtl) {
  const c = ctx(rtl); const P = 'rb'; const css = []; const H = 630;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  const cols = [80, 170, 420, 600, 850, 1010]; const hy = 104; const barW = 200; const MAXD = 30; const thr = t.threshold;
  s += t.cols.map((h, i) => text(c, cols[i], hy, h, { size: 9, font: 'mono', fill: C.fg35, letter: 1.2, upper: true })).join('') + line(c, 80, hy + 8, 1120, hy + 8, { stroke: C.line2 });
  // threshold tick on the days column
  const tx = cols[3] + (thr / MAXD) * barW;
  s += line(c, tx, hy + 12, tx, hy + 12 + t.rows.length * 46, { stroke: C.accent, dash: '3 3' }) + text(c, tx, hy + 12 + t.rows.length * 46 + 12, t.thrLabel, { size: 8, font: 'mono', fill: C.accent, anchor: 'middle' });
  t.rows.forEach((r, i) => {
    const y = hy + 40 + i * 46; const at = 3 + i * 1.6; const over = r.days >= thr && r.at === 'supplier';
    s += `<g style="animation:${show(css, P, `r${i}`, at)}">`
      + text(c, cols[0], y, r.id, { size: 10, font: 'mono', fill: over ? C.accent : C.fg, weight: 500 })
      + text(c, cols[1], y - 4, r.product, { size: 10.5, fill: C.fg }) + text(c, cols[1], y + 10, r.serial, { size: 8, font: 'mono', fill: C.fg55 })
      + text(c, cols[2], y - 4, r.state, { size: 10, fill: over ? C.accent : C.fg70 }) + (r.stateSub ? text(c, cols[2], y + 10, r.stateSub, { size: 8, font: 'mono', fill: C.fg55 }) : '')
      + text(c, cols[3] + barW + 10, y + 1, r.daysT, { size: 9.5, font: 'mono', fill: over ? C.accent : C.fg55 })
      + text(c, cols[4], y - 4, r.warr, { size: 10, fill: r.warrOk ? C.fg : C.fg70 }) + text(c, cols[4], y + 10, r.warrSub, { size: 8, font: 'mono', fill: C.fg55 })
      + text(c, cols[5], y - 4, r.holder, { size: 10, fill: C.fg70 }) + (r.holderSub ? text(c, cols[5], y + 10, r.holderSub, { size: 8, font: 'mono', fill: over ? C.accent : C.fg55 }) : '')
      + line(c, 80, y + 20, 1120, y + 20, { stroke: C.line }) + '</g>';
    s += `<g style="transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'};animation:${grow(css, P, `g${i}`, at + 0.5, 1.5)}">` + rect(c, cols[3], y - 7, Math.round((Math.min(r.days, MAXD) / MAXD) * barW), 10, { stroke: 'none', fill: over ? C.accent : r.days >= thr ? 'rgba(242,181,68,0.5)' : C.fg55 }) + '</g>';
  });
  const ky = hy + 40 + t.rows.length * 46 + 10;
  t.tiles.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, 16 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? 'rgba(242,181,68,0.06)' : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  s += text(c, 80, ky + 86, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

// day offsets from 1 Feb 2027: 3 Feb = 2, 11 Mar = 38, 14 Sep = 225, 16 Sep = 227, 17 Sep = 228, 28 Sep = 239, 30 Sep = 241, 31 Oct = 273
export const STRINGS = {
  fr: {
    life: {
      title: 'La vie d’une unité : reçue, vendue, revenue, échangée',
      alt: 'Un bandeau d’identité : unité 35-8841-2207, smartphone X, IMEI de 15 chiffres dont la clé est vérifiée, reçue le 3 février 2027 dans le lot fournisseur L-0207. Trois couloirs sur un axe de février à octobre 2027. L’état de l’unité : en stock du 3 février au 11 mars, chez le client du 11 mars au 14 septembre, en réparation du 14 au 30 septembre en accent, puis échangée. La garantie vendeur de 12 mois court du 11 mars 2027 au 11 mars 2028. La garantie fournisseur de 24 mois court du 3 février 2027 au 3 février 2029. Un trait accentué au 14 septembre : retour en panne, jour 187 sur 365, sous garantie vendeur. Un zoom sur l’ordre de réparation OR-0219 du 14 au 30 septembre : diagnostic deux jours, décision un jour, chez le fournisseur onze jours, échange et remise au client deux jours. Trois tuiles : 187 sur 365, le client ne paie rien ; réclamation fournisseur ouverte le 17 septembre, 24 mois courent encore ; nouvelle unité 35-8841-2611 liée au même client, l’ancienne sortie du stock comme échangée. Les dates et numéros sont un exemple construit.',
      header: 'Unité 35-8841-2207 · Smartphone X · IMEI 15 chiffres, clé vérifiée · reçue le 3 fév. 2027 · lot fournisseur L-0207 · facture F-2027-0318 au client',
      ticks: [{ d: 0, l: 'fév. 27' }, { d: 28, l: 'mars' }, { d: 59, l: 'avr.' }, { d: 89, l: 'mai' }, { d: 120, l: 'juin' }, { d: 150, l: 'juil.' }, { d: 181, l: 'août' }, { d: 212, l: 'sept.' }, { d: 242, l: 'oct.' }],
      lanes: [
        { name: 'État de l’unité', sub: 'un seul état à la fois · chaque passage daté et signé', blocks: [{ from: 2, to: 38, t: 'en stock', sub: 'reçue · scan' }, { from: 38, to: 225, t: 'chez le client', sub: 'vendue le 11 mars · F-2027-0318' }, { from: 225, to: 241, t: 'réparation · OR-0219', sub: 'échangée · rendue le 30 sept.', kind: 'hot', labelAt: 'after' }] },
        { name: 'Garantie vendeur · 12 mois', sub: 'court depuis la date de remise au client', hot: true, blocks: [{ from: 38, to: 403, t: 'du 11 mars 2027', sub: 'durée écrite par le gérant sur le produit', kind: 'warr', beyond: '→ 11 mars 2028' }] },
        { name: 'Garantie fournisseur · 24 mois', sub: 'court depuis la réception · réclamation possible', blocks: [{ from: 2, to: 731, t: 'du 3 fév. 2027', sub: 'écrite sur le lot à la réception', kind: 'warr', beyond: '→ 3 fév. 2029' }] },
      ],
      ret: { d: 225, l: 'retour en panne · 14 sept. · jour 187 / 365', sub: 'sous garantie vendeur → le client ne paie rien ; décision écrite' },
      zoom: { title: 'Zoom · ordre de réparation OR-0219 · du 14 au 30 septembre', sub: 'diagnostic : carte mère · photos · panne reproduite', sub2: 'chaque état daté ; le client voit le sien', from: 14, to: 30, ticks: [{ d: 14, l: '14' }, { d: 16, l: '16' }, { d: 17, l: '17' }, { d: 21, l: '21' }, { d: 28, l: '28' }, { d: 30, l: '30' }], blocks: [{ from: 14, to: 16, t: 'diagnostic', sub: '2 j' }, { from: 16, to: 17, t: 'décision', sub: '1 j' }, { from: 17, to: 28, t: 'chez le fournisseur · réclamation RF-0088', sub: '11 j · relance au 14e jour', hot: true }, { from: 28, to: 30, t: 'échange + remise', sub: '2 j · signature' }] },
      tiles: [
        { big: '187 / 365', l1: 'jour du retour dans la garantie vendeur', l2: 'calculé depuis la date de remise, pas depuis la vente', hot: true },
        { big: 'RF-0088 · 17 sept.', l1: 'réclamation fournisseur, 24 mois courent encore', l2: 'l’unité est chez lui ; le délai se mesure' },
        { big: '35-8841-2611', l1: 'nouvelle unité liée au même client', l2: 'l’ancienne sort du stock « échangée », jamais revendue' },
      ],
      rule: 'Une unité a un seul état à la fois, et chaque passage d’état est daté, signé et lié à un document.',
      rule2: 'La garantie n’est pas une case cochée : c’est une date de départ, une durée écrite, et un jour compté.',
      note: 'Dates, numéros et durées sont un exemple construit ; les durées de garantie sont celles que le vendeur ou le fabricant écrit, pas une règle du guide.',
    },
    board: {
      title: 'Le tableau des réparations : sept unités, qui les a, depuis combien de jours',
      alt: 'Un tableau de sept ordres de réparation en cours avec six colonnes : ordre, unité avec produit et fin de numéro de série, état, jours écoulés sous forme de barre contre un seuil de 14 jours, garantie, chez qui. OR-0219 smartphone X chez le fournisseur depuis 12 jours, sous garantie. OR-0220 climatiseur en attente de pièce depuis 6 jours, sous garantie, à l’atelier. OR-0221 onduleur solaire en diagnostic depuis 1 jour, hors garantie au jour 410 sur 365, devis envoyé. OR-0222 tablette prête depuis 4 jours, sous garantie, client prévenu. OR-0223 réfrigérateur chez le fournisseur depuis 19 jours, accentué, relance envoyée. OR-0224 smartphone Y en diagnostic depuis 2 jours, pas vendu ici, devis payant. OR-0225 machine à laver chez le fournisseur depuis 23 jours, accentué, relance envoyée. Trois tuiles : 7 en cours ; 2 au-delà de 14 jours chez le fournisseur, relance envoyée ; 9 jours de délai médian sur les 90 derniers ordres clos. Les données sont un exemple construit.',
      cols: ['Ordre', 'Unité', 'État', 'Jours écoulés', 'Garantie', 'Chez qui'], threshold: 14, thrLabel: 'seuil 14 j',
      rows: [
        { id: 'OR-0219', product: 'Smartphone X', serial: '…8841-2207', state: 'Chez le fournisseur', stateSub: 'réclamation RF-0088', days: 12, daysT: '12 j', warr: 'Oui · vendeur', warrSub: 'jour 187 / 365', warrOk: true, holder: 'Fournisseur', holderSub: 'relance au 14e jour', at: 'supplier' },
        { id: 'OR-0220', product: 'Climatiseur 12 000 BTU', serial: '…3310-0455', state: 'Attente pièce', stateSub: 'carte électronique · commandée', days: 6, daysT: '6 j', warr: 'Oui · vendeur', warrSub: 'jour 92 / 365', warrOk: true, holder: 'Atelier', holderSub: 'pièce attendue le 18', at: 'us' },
        { id: 'OR-0221', product: 'Onduleur solaire 5 kW', serial: '…5520-7718', state: 'Diagnostic', stateSub: 'panne reproduite', days: 1, daysT: '1 j', warr: 'Non · jour 410 / 365', warrSub: 'devis envoyé · attente accord', warrOk: false, holder: 'Atelier', holderSub: '', at: 'us' },
        { id: 'OR-0222', product: 'Tablette 10"', serial: '…0190-3390', state: 'Prête', stateSub: 'réparée · testée', days: 4, daysT: '4 j', warr: 'Oui · vendeur', warrSub: 'jour 211 / 365', warrOk: true, holder: 'Atelier', holderSub: 'client prévenu · WhatsApp', at: 'us' },
        { id: 'OR-0223', product: 'Réfrigérateur 400 L', serial: '…7700-1182', state: 'Chez le fournisseur', stateSub: 'réclamation RF-0081', days: 19, daysT: '19 j', warr: 'Oui · vendeur', warrSub: 'jour 44 / 365', warrOk: true, holder: 'Fournisseur', holderSub: 'relance envoyée · 2 fois', at: 'supplier' },
        { id: 'OR-0224', product: 'Smartphone Y', serial: '…2201-9034', state: 'Diagnostic', stateSub: 'série inconnue ici', days: 2, daysT: '2 j', warr: 'Pas vendu ici', warrSub: 'devis payant · acompte', warrOk: false, holder: 'Atelier', holderSub: '', at: 'us' },
        { id: 'OR-0225', product: 'Machine à laver 8 kg', serial: '…4480-6621', state: 'Chez le fournisseur', stateSub: 'réclamation RF-0079', days: 23, daysT: '23 j', warr: 'Oui · vendeur', warrSub: 'jour 160 / 365', warrOk: true, holder: 'Fournisseur', holderSub: 'relance envoyée · 3 fois', at: 'supplier' },
      ],
      tiles: [
        { big: '7 en cours', l1: 'une ligne par unité, jamais par appel', l2: 'le client voit la sienne dans son espace' },
        { big: '2 > 14 j', l1: 'chez le fournisseur au-delà du seuil', l2: 'relance envoyée ; délai mesuré par fournisseur', hot: true },
        { big: '9 j', l1: 'délai médian des 90 derniers ordres clos', l2: 'du dépôt au retour au client' },
      ],
      rule: 'Le tableau répond à trois questions : où est l’unité, depuis combien de jours, et qui doit agir aujourd’hui.',
      rule2: 'La garantie est décidée à l’entrée, pas discutée à la sortie ; le devis payant part le jour même.',
      note: 'Ordres, produits, jours et seuil sont un exemple construit ; le seuil de relance est une décision du gérant.',
    },
  },
  en: {
    life: {
      title: 'The life of one unit: received, sold, returned, exchanged',
      alt: 'An identity strip: unit 35-8841-2207, smartphone X, 15-digit IMEI with a verified check digit, received on 3 February 2027 in supplier lot L-0207. Three lanes on a February to October 2027 axis. Unit state: in stock from 3 February to 11 March, with the customer from 11 March to 14 September, in repair from 14 to 30 September accented, then exchanged. The 12-month seller warranty runs from 11 March 2027 to 11 March 2028. The 24-month supplier warranty runs from 3 February 2027 to 3 February 2029. An accented line on 14 September: returned broken, day 187 of 365, under seller warranty. A zoom on repair order OR-0219 from 14 to 30 September: diagnosis two days, decision one day, at the supplier eleven days, exchange and hand-back two days. Three tiles: 187 of 365, the customer pays nothing; supplier claim opened on 17 September, 24 months still running; new unit 35-8841-2611 linked to the same customer, the old one leaves stock as exchanged. Dates and numbers are a constructed example.',
      header: 'Unit 35-8841-2207 · Smartphone X · 15-digit IMEI, check digit verified · received 3 Feb 2027 · supplier lot L-0207 · invoice F-2027-0318 to the customer',
      ticks: [{ d: 0, l: 'Feb 27' }, { d: 28, l: 'Mar' }, { d: 59, l: 'Apr' }, { d: 89, l: 'May' }, { d: 120, l: 'Jun' }, { d: 150, l: 'Jul' }, { d: 181, l: 'Aug' }, { d: 212, l: 'Sep' }, { d: 242, l: 'Oct' }],
      lanes: [
        { name: 'Unit state', sub: 'one state at a time · every transition dated and signed', blocks: [{ from: 2, to: 38, t: 'in stock', sub: 'received · scanned' }, { from: 38, to: 225, t: 'with the customer', sub: 'sold 11 March · F-2027-0318' }, { from: 225, to: 241, t: 'repair · OR-0219', sub: 'exchanged · returned 30 Sep', kind: 'hot', labelAt: 'after' }] },
        { name: 'Seller warranty · 12 months', sub: 'runs from the hand-over date to the customer', hot: true, blocks: [{ from: 38, to: 403, t: 'from 11 March 2027', sub: 'term written by the manager on the product', kind: 'warr', beyond: '→ 11 March 2028' }] },
        { name: 'Supplier warranty · 24 months', sub: 'runs from reception · a claim is possible', blocks: [{ from: 2, to: 731, t: 'from 3 Feb 2027', sub: 'written on the lot at reception', kind: 'warr', beyond: '→ 3 Feb 2029' }] },
      ],
      ret: { d: 225, l: 'returned broken · 14 Sep · day 187 / 365', sub: 'under seller warranty → the customer pays nothing; written decision' },
      zoom: { title: 'Zoom · repair order OR-0219 · 14 to 30 September', sub: 'diagnosis: mainboard · photos · fault reproduced', sub2: 'every state dated; the customer sees their own', from: 14, to: 30, ticks: [{ d: 14, l: '14' }, { d: 16, l: '16' }, { d: 17, l: '17' }, { d: 21, l: '21' }, { d: 28, l: '28' }, { d: 30, l: '30' }], blocks: [{ from: 14, to: 16, t: 'diagnosis', sub: '2 d' }, { from: 16, to: 17, t: 'decision', sub: '1 d' }, { from: 17, to: 28, t: 'at the supplier · claim RF-0088', sub: '11 d · chased on day 14', hot: true }, { from: 28, to: 30, t: 'exchange + hand-back', sub: '2 d · signature' }] },
      tiles: [
        { big: '187 / 365', l1: 'day of the return within the seller warranty', l2: 'counted from the hand-over date, not the sale', hot: true },
        { big: 'RF-0088 · 17 Sep', l1: 'supplier claim, 24 months still running', l2: 'the unit is with them; the delay is measured' },
        { big: '35-8841-2611', l1: 'new unit linked to the same customer', l2: 'the old one leaves stock as “exchanged”, never resold' },
      ],
      rule: 'A unit has one state at a time, and every state change is dated, signed and linked to a document.',
      rule2: 'A warranty is not a ticked box: it is a start date, a written term, and a counted day.',
      note: 'Dates, numbers and terms are a constructed example; warranty terms are what the seller or manufacturer writes, not a rule of this guide.',
    },
    board: {
      title: 'The repair board: seven units, who has them, for how many days',
      alt: 'A board of seven open repair orders with six columns: order, unit with product and serial ending, state, days elapsed as a bar against a 14-day threshold, warranty, who holds it. OR-0219 smartphone X at the supplier for 12 days, under warranty. OR-0220 air conditioner waiting for a part for 6 days, under warranty, in the workshop. OR-0221 solar inverter in diagnosis for 1 day, out of warranty at day 410 of 365, quote sent. OR-0222 tablet ready for 4 days, under warranty, customer notified. OR-0223 refrigerator at the supplier for 19 days, accented, chased. OR-0224 smartphone Y in diagnosis for 2 days, not sold here, paid quote. OR-0225 washing machine at the supplier for 23 days, accented, chased. Three tiles: 7 open; 2 beyond 14 days at the supplier, chased; 9 days median time over the last 90 closed orders. The data is a constructed example.',
      cols: ['Order', 'Unit', 'State', 'Days elapsed', 'Warranty', 'Held by'], threshold: 14, thrLabel: 'threshold 14 d',
      rows: [
        { id: 'OR-0219', product: 'Smartphone X', serial: '…8841-2207', state: 'At the supplier', stateSub: 'claim RF-0088', days: 12, daysT: '12 d', warr: 'Yes · seller', warrSub: 'day 187 / 365', warrOk: true, holder: 'Supplier', holderSub: 'chase on day 14', at: 'supplier' },
        { id: 'OR-0220', product: 'Air conditioner 12,000 BTU', serial: '…3310-0455', state: 'Waiting for part', stateSub: 'control board · ordered', days: 6, daysT: '6 d', warr: 'Yes · seller', warrSub: 'day 92 / 365', warrOk: true, holder: 'Workshop', holderSub: 'part expected on the 18th', at: 'us' },
        { id: 'OR-0221', product: 'Solar inverter 5 kW', serial: '…5520-7718', state: 'Diagnosis', stateSub: 'fault reproduced', days: 1, daysT: '1 d', warr: 'No · day 410 / 365', warrSub: 'quote sent · awaiting approval', warrOk: false, holder: 'Workshop', holderSub: '', at: 'us' },
        { id: 'OR-0222', product: 'Tablet 10"', serial: '…0190-3390', state: 'Ready', stateSub: 'repaired · tested', days: 4, daysT: '4 d', warr: 'Yes · seller', warrSub: 'day 211 / 365', warrOk: true, holder: 'Workshop', holderSub: 'customer notified · WhatsApp', at: 'us' },
        { id: 'OR-0223', product: 'Refrigerator 400 L', serial: '…7700-1182', state: 'At the supplier', stateSub: 'claim RF-0081', days: 19, daysT: '19 d', warr: 'Yes · seller', warrSub: 'day 44 / 365', warrOk: true, holder: 'Supplier', holderSub: 'chased · twice', at: 'supplier' },
        { id: 'OR-0224', product: 'Smartphone Y', serial: '…2201-9034', state: 'Diagnosis', stateSub: 'serial unknown here', days: 2, daysT: '2 d', warr: 'Not sold here', warrSub: 'paid quote · deposit', warrOk: false, holder: 'Workshop', holderSub: '', at: 'us' },
        { id: 'OR-0225', product: 'Washing machine 8 kg', serial: '…4480-6621', state: 'At the supplier', stateSub: 'claim RF-0079', days: 23, daysT: '23 d', warr: 'Yes · seller', warrSub: 'day 160 / 365', warrOk: true, holder: 'Supplier', holderSub: 'chased · 3 times', at: 'supplier' },
      ],
      tiles: [
        { big: '7 open', l1: 'one row per unit, never per call', l2: 'the customer sees theirs in their space' },
        { big: '2 > 14 d', l1: 'at the supplier beyond the threshold', l2: 'chased; delay measured per supplier', hot: true },
        { big: '9 d', l1: 'median time over the last 90 closed orders', l2: 'from drop-off to return to the customer' },
      ],
      rule: 'The board answers three questions: where is the unit, for how many days, and who must act today.',
      rule2: 'Warranty is decided at intake, not argued at pick-up; the paid quote leaves the same day.',
      note: 'Orders, products, days and threshold are a constructed example; the chase threshold is a manager’s decision.',
    },
  },
  ar: {
    life: {
      title: 'حياة وحدة واحدة: استُلمت، بيعت، عادت، استُبدلت',
      alt: 'شريط هوية: الوحدة 35-8841-2207، هاتف ذكي X، رقم IMEI من 15 رقماً برقم تحقق مفحوص، استُلمت في 3 فبراير 2027 ضمن دفعة المورد L-0207. ثلاثة مسارات على محور من فبراير إلى أكتوبر 2027. حالة الوحدة: في المخزون من 3 فبراير إلى 11 مارس، عند الزبون من 11 مارس إلى 14 سبتمبر، في الإصلاح من 14 إلى 30 سبتمبر مميزة، ثم مستبدلة. ضمان البائع 12 شهراً يسري من 11 مارس 2027 إلى 11 مارس 2028. ضمان المورد 24 شهراً يسري من 3 فبراير 2027 إلى 3 فبراير 2029. خط مميز في 14 سبتمبر: عادت معطلة، اليوم 187 من 365، تحت ضمان البائع. تكبير على أمر الإصلاح OR-0219 من 14 إلى 30 سبتمبر: تشخيص يومان، قرار يوم، عند المورد أحد عشر يوماً، استبدال وتسليم يومان. ثلاث بطاقات: 187 من 365، الزبون لا يدفع شيئاً؛ مطالبة مورد فُتحت في 17 سبتمبر و24 شهراً ما زالت تسري؛ وحدة جديدة 35-8841-2611 مرتبطة بالزبون نفسه، والقديمة تخرج من المخزون كمستبدلة. التواريخ والأرقام مثال مبني.',
      header: `الوحدة ${I('35-8841-2207')} · هاتف ذكي ${I('X')} · ${I('IMEI')} من ${I('15')} رقماً، رقم التحقق مفحوص · استُلمت ${I('3')} فبراير ${I('2027')} · دفعة المورد ${I('L-0207')} · فاتورة ${I('F-2027-0318')} للزبون`,
      ticks: [{ d: 0, l: `فبراير ${I('27')}` }, { d: 28, l: 'مارس' }, { d: 59, l: 'أبريل' }, { d: 89, l: 'ماي' }, { d: 120, l: 'جوان' }, { d: 150, l: 'جويلية' }, { d: 181, l: 'أوت' }, { d: 212, l: 'سبتمبر' }, { d: 242, l: 'أكتوبر' }],
      lanes: [
        { name: 'حالة الوحدة', sub: 'حالة واحدة في كل مرة · كل انتقال مؤرَّخ وموقَّع', blocks: [{ from: 2, to: 38, t: 'في المخزون', sub: 'استُلمت · مسح' }, { from: 38, to: 225, t: 'عند الزبون', sub: `بيعت ${I('11')} مارس · ${I('F-2027-0318')}` }, { from: 225, to: 241, t: `إصلاح · ${I('OR-0219')}`, sub: `مستبدلة · أُرجعت ${I('30')} سبتمبر`, kind: 'hot', labelAt: 'after' }] },
        { name: `ضمان البائع · ${I('12')} شهراً`, sub: 'يسري من تاريخ التسليم للزبون', hot: true, blocks: [{ from: 38, to: 403, t: `من ${I('11')} مارس ${I('2027')}`, sub: 'المدة يكتبها المسيّر على المنتج', kind: 'warr', beyond: `← ${I('11')} مارس ${I('2028')}` }] },
        { name: `ضمان المورد · ${I('24')} شهراً`, sub: 'يسري من الاستلام · المطالبة ممكنة', blocks: [{ from: 2, to: 731, t: `من ${I('3')} فبراير ${I('2027')}`, sub: 'مكتوب على الدفعة عند الاستلام', kind: 'warr', beyond: `← ${I('3')} فبراير ${I('2029')}` }] },
      ],
      ret: { d: 225, l: `عادت معطلة · ${I('14')} سبتمبر · اليوم ${I('187 / 365')}`, sub: 'تحت ضمان البائع ← الزبون لا يدفع شيئاً؛ قرار مكتوب' },
      zoom: { title: `تكبير · أمر الإصلاح ${I('OR-0219')} · من ${I('14')} إلى ${I('30')} سبتمبر`, sub: 'التشخيص: اللوحة الأم · صور · العطل مُعاد إنتاجه', sub2: 'كل حالة مؤرَّخة؛ والزبون يرى حالته', from: 14, to: 30, ticks: [{ d: 14, l: '14' }, { d: 16, l: '16' }, { d: 17, l: '17' }, { d: 21, l: '21' }, { d: 28, l: '28' }, { d: 30, l: '30' }], blocks: [{ from: 14, to: 16, t: 'تشخيص', sub: `${I('2')} أيام` }, { from: 16, to: 17, t: 'قرار', sub: `${I('1')} يوم` }, { from: 17, to: 28, t: `عند المورد · مطالبة ${I('RF-0088')}`, sub: `${I('11')} يوماً · متابعة في اليوم ${I('14')}`, hot: true }, { from: 28, to: 30, t: 'استبدال + تسليم', sub: `${I('2')} أيام · توقيع` }] },
      tiles: [
        { big: I('187 / 365'), l1: 'يوم العودة ضمن ضمان البائع', l2: 'يُحسب من تاريخ التسليم لا من البيع', hot: true },
        { big: `${I('RF-0088')} · ${I('17')} سبتمبر`, l1: `مطالبة مورد، ${I('24')} شهراً ما زالت تسري`, l2: 'الوحدة عنده؛ والمهلة تُقاس' },
        { big: I('35-8841-2611'), l1: 'وحدة جديدة مرتبطة بالزبون نفسه', l2: 'القديمة تخرج من المخزون «مستبدلة» ولا تُباع أبداً' },
      ],
      rule: 'للوحدة حالة واحدة في كل مرة، وكل تغيير حالة مؤرَّخ وموقَّع ومرتبط بوثيقة.',
      rule2: 'الضمان ليس خانة مؤشَّرة: هو تاريخ بداية، ومدة مكتوبة، ويوم معدود.',
      note: 'التواريخ والأرقام والمدد مثال مبني؛ ومدد الضمان هي ما يكتبه البائع أو الصانع، لا قاعدة من هذا الدليل.',
    },
    board: {
      title: 'لوحة الإصلاحات: سبع وحدات، عند من، ومنذ كم يوماً',
      alt: 'لوحة بسبعة أوامر إصلاح جارية بست أعمدة: الأمر، الوحدة بالمنتج ونهاية الرقم التسلسلي، الحالة، الأيام المنقضية كشريط مقابل عتبة 14 يوماً، الضمان، عند من. OR-0219 هاتف X عند المورد منذ 12 يوماً تحت الضمان. OR-0220 مكيف ينتظر قطعة منذ 6 أيام تحت الضمان في الورشة. OR-0221 عاكس شمسي في التشخيص منذ يوم، خارج الضمان في اليوم 410 من 365، عرض سعر مرسل. OR-0222 لوح جاهز منذ 4 أيام تحت الضمان والزبون منبَّه. OR-0223 ثلاجة عند المورد منذ 19 يوماً، مميز، متابعة مرسلة. OR-0224 هاتف Y في التشخيص منذ يومين، لم يُبع هنا، عرض سعر مدفوع. OR-0225 غسالة عند المورد منذ 23 يوماً، مميز، متابعة مرسلة. ثلاث بطاقات: 7 جارية؛ 2 تجاوزت 14 يوماً عند المورد مع متابعة؛ 9 أيام مهلة وسيطة على آخر 90 أمراً مغلقاً. البيانات مثال مبني.',
      cols: ['الأمر', 'الوحدة', 'الحالة', 'الأيام المنقضية', 'الضمان', 'عند من'], threshold: 14, thrLabel: `عتبة ${I('14')} يوماً`,
      rows: [
        { id: I('OR-0219'), product: `هاتف ذكي ${I('X')}`, serial: I('…8841-2207'), state: 'عند المورد', stateSub: `مطالبة ${I('RF-0088')}`, days: 12, daysT: `${I('12')} يوماً`, warr: 'نعم · البائع', warrSub: `اليوم ${I('187 / 365')}`, warrOk: true, holder: 'المورد', holderSub: `متابعة في اليوم ${I('14')}`, at: 'supplier' },
        { id: I('OR-0220'), product: `مكيف ${I('12,000 BTU')}`, serial: I('…3310-0455'), state: 'انتظار قطعة', stateSub: 'لوحة إلكترونية · مطلوبة', days: 6, daysT: `${I('6')} أيام`, warr: 'نعم · البائع', warrSub: `اليوم ${I('92 / 365')}`, warrOk: true, holder: 'الورشة', holderSub: `القطعة متوقعة في ${I('18')}`, at: 'us' },
        { id: I('OR-0221'), product: `عاكس شمسي ${I('5 kW')}`, serial: I('…5520-7718'), state: 'تشخيص', stateSub: 'العطل مُعاد إنتاجه', days: 1, daysT: `${I('1')} يوم`, warr: `لا · اليوم ${I('410 / 365')}`, warrSub: 'عرض سعر مرسل · انتظار الموافقة', warrOk: false, holder: 'الورشة', holderSub: '', at: 'us' },
        { id: I('OR-0222'), product: `لوح ${I('10"')}`, serial: I('…0190-3390'), state: 'جاهز', stateSub: 'أُصلح · اختُبر', days: 4, daysT: `${I('4')} أيام`, warr: 'نعم · البائع', warrSub: `اليوم ${I('211 / 365')}`, warrOk: true, holder: 'الورشة', holderSub: `الزبون منبَّه · ${I('WhatsApp')}`, at: 'us' },
        { id: I('OR-0223'), product: `ثلاجة ${I('400 L')}`, serial: I('…7700-1182'), state: 'عند المورد', stateSub: `مطالبة ${I('RF-0081')}`, days: 19, daysT: `${I('19')} يوماً`, warr: 'نعم · البائع', warrSub: `اليوم ${I('44 / 365')}`, warrOk: true, holder: 'المورد', holderSub: 'متابعة مرسلة · مرتان', at: 'supplier' },
        { id: I('OR-0224'), product: `هاتف ذكي ${I('Y')}`, serial: I('…2201-9034'), state: 'تشخيص', stateSub: 'رقم تسلسلي مجهول هنا', days: 2, daysT: `${I('2')} يومان`, warr: 'لم يُبع هنا', warrSub: 'عرض سعر مدفوع · عربون', warrOk: false, holder: 'الورشة', holderSub: '', at: 'us' },
        { id: I('OR-0225'), product: `غسالة ${I('8 kg')}`, serial: I('…4480-6621'), state: 'عند المورد', stateSub: `مطالبة ${I('RF-0079')}`, days: 23, daysT: `${I('23')} يوماً`, warr: 'نعم · البائع', warrSub: `اليوم ${I('160 / 365')}`, warrOk: true, holder: 'المورد', holderSub: `متابعة مرسلة · ${I('3')} مرات`, at: 'supplier' },
      ],
      tiles: [
        { big: `${I('7')} جارية`, l1: 'سطر لكل وحدة، لا لكل مكالمة', l2: 'الزبون يرى وحدته في فضائه' },
        { big: `${I('2')} > ${I('14')} يوماً`, l1: 'عند المورد بعد العتبة', l2: 'متابعة مرسلة؛ المهلة تُقاس لكل مورد', hot: true },
        { big: `${I('9')} أيام`, l1: `مهلة وسيطة على آخر ${I('90')} أمراً مغلقاً`, l2: 'من الإيداع إلى الإرجاع للزبون' },
      ],
      rule: 'اللوحة تجيب عن ثلاثة أسئلة: أين الوحدة، ومنذ كم يوماً، ومن عليه أن يتصرف اليوم.',
      rule2: 'الضمان يُقرَّر عند الإيداع لا يُناقَش عند الاستلام؛ وعرض السعر المدفوع يخرج في اليوم نفسه.',
      note: 'الأوامر والمنتجات والأيام والعتبة مثال مبني؛ وعتبة المتابعة قرار المسيّر.',
    },
  },
};
