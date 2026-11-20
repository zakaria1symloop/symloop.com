// Bespoke animated figures for the 2027 "we lost 400 crates and nobody knows where"
// post.
//  stop():        one delivery stop: identity strip, three packaging rows with balance
//                 before, delivered, returned, balance after and deposit, a drawn
//                 signature line, the alert on the crate balance, three tiles.
//  circulation(): where the fleet of crates is: a segmented bar (depot, trucks,
//                 customers by age band, written off) with growing segments, then the
//                 five customers holding crates beyond the threshold, three tiles.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function draw(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{stroke-dashoffset:1000}${(at + dur).toFixed(1)}%,100%{stroke-dashoffset:0}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function grow(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
const I = (x) => `⁦${x}⁩`;

export function stop(t, rtl) {
  const c = ctx(rtl); const P = 'st'; const css = []; const H = 600;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: 'rgba(242,181,68,0.06)' }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const cols = [80, 330, 450, 570, 700, 850]; const hy = 152;
  s += t.cols.map((h, i) => text(c, cols[i], hy, h, { size: 9, font: 'mono', fill: C.fg35, letter: 1.2, upper: true })).join('') + line(c, 80, hy + 8, 1120, hy + 8, { stroke: C.line2 });
  t.rows.forEach((r, i) => {
    const y = hy + 40 + i * 52; const at = 4 + i * 2;
    s += `<g style="animation:${show(css, P, `r${i}`, at)}">` + text(c, cols[0], y - 3, r.name, { size: 11, fill: r.hot ? C.accent : C.fg, weight: 500 }) + text(c, cols[0], y + 11, r.sub, { size: 8, font: 'mono', fill: C.fg55 })
      + text(c, cols[1], y + 2, r.before, { size: 11, font: 'mono', fill: C.fg70 })
      + line(c, 80, y + 24, 1120, y + 24, { stroke: C.line }) + '</g>';
    s += `<g style="animation:${show(css, P, `d${i}`, at + 0.8)}">` + text(c, cols[2], y + 2, r.deliv, { size: 11, font: 'mono', fill: C.fg }) + '</g>';
    s += `<g style="animation:${show(css, P, `b${i}`, at + 1.4)}">` + text(c, cols[3], y + 2, r.ret, { size: 11, font: 'mono', fill: C.fg }) + '</g>';
    s += `<g style="animation:${show(css, P, `a${i}`, at + 2)}">` + text(c, cols[4], y - 3, r.after, { size: 12, font: 'mono', fill: r.hot ? C.accent : C.fg, weight: 500 }) + text(c, cols[4], y + 11, r.afterSub, { size: 7.5, font: 'mono', fill: r.hot ? C.accent : C.fg55 }) + text(c, cols[5], y - 3, r.dep, { size: 10, font: 'mono', fill: C.fg }) + text(c, cols[5], y + 11, r.depSub, { size: 7.5, font: 'mono', fill: C.fg55 }) + '</g>';
  });
  const sy = hy + 40 + t.rows.length * 52 + 4;
  s += `<line x1="${c.X(80)}" y1="${sy}" x2="${c.X(1120)}" y2="${sy}" stroke="${C.accent}" stroke-width="1.6" pathLength="1000" style="stroke-dashoffset:0;animation:${draw(css, P, 'sl', 12, 2)}"/>`;
  s += `<g style="animation:${show(css, P, 'sg', 13.5)}">` + text(c, 80, sy + 20, t.sign, { size: 11, fill: C.accent, weight: 500 }) + text(c, 80, sy + 36, t.sign2, { size: 9, font: 'mono', fill: C.fg70 }) + '</g>';
  s += `<g style="animation:${show(css, P, 'al', 15)}">` + rect(c, 700, sy + 8, 420, 36, { stroke: C.accent, fill: 'rgba(242,181,68,0.10)' }) + text(c, 712, sy + 23, t.alert, { size: 9.5, fill: C.accent, weight: 500 }) + text(c, 712, sy + 37, t.alert2, { size: 8, font: 'mono', fill: C.fg70 }) + '</g>';
  const ky = sy + 58;
  t.tiles.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, 18 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? 'rgba(242,181,68,0.06)' : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  s += text(c, 80, ky + 86, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"],svg line[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

export function circulation(t, rtl) {
  const c = ctx(rtl); const P = 'ci'; const css = []; const H = 620;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: 'rgba(242,181,68,0.06)' }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const bx = 80, bw = 1040, by = 150, bh = 34; const total = t.segs.reduce((a, g) => a + g.v, 0);
  let acc = 0;
  t.segs.forEach((g, i) => { const x0 = bx + (acc / total) * bw, x1 = bx + ((acc + g.v) / total) * bw; acc += g.v; s += `<g style="transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'};animation:${grow(css, P, `g${i}`, 3 + i * 1.2, 1.2)}">` + rect(c, x0, by, x1 - x0, bh, { stroke: 'none', fill: g.k === 'hot' ? C.accent : g.k === 'warn' ? 'rgba(242,181,68,0.45)' : g.k === 'lost' ? 'rgba(255,255,255,0.12)' : g.k === 'depot' ? 'rgba(255,255,255,0.45)' : 'rgba(255,255,255,0.22)' }) + '</g>'; });
  s += rect(c, bx, by, bw, bh, { stroke: C.line2 });
  acc = 0;
  t.segs.forEach((g, i) => { const x0 = bx + (acc / total) * bw; const w = (g.v / total) * bw; acc += g.v; const hot = g.k === 'hot'; s += `<g style="animation:${show(css, P, `l${i}`, 4 + i * 1.2)}">` + line(c, x0 + 2, by + bh, x0 + 2, by + bh + 10 + (i % 2) * 26, { stroke: C.line2 }) + text(c, x0 + 6, by + bh + 20 + (i % 2) * 26, g.l, { size: 9, font: 'mono', fill: hot ? C.accent : C.fg70, weight: hot ? 500 : 400 }) + text(c, x0 + 6, by + bh + 32 + (i % 2) * 26, g.l2, { size: 7.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  // aging list
  const ly = by + bh + 82; const cols = [80, 400, 520, 660, 820];
  s += `<g style="animation:${show(css, P, 'lh', 12)}">` + text(c, 80, ly, t.listTitle, { size: 10.5, fill: C.fg, weight: 500 }) + line(c, 80, ly + 8, 1120, ly + 8, { stroke: C.line2 }) + t.listCols.map((h, i) => text(c, cols[i], ly + 24, h, { size: 8.5, font: 'mono', fill: C.fg35, letter: 1.2, upper: true })).join('') + '</g>';
  t.list.forEach((r, i) => { const y = ly + 48 + i * 30; s += `<g style="animation:${show(css, P, `r${i}`, 13 + i * 1.2)}">` + text(c, cols[0], y, r.name, { size: 10, fill: C.fg, weight: 500 }) + text(c, cols[1], y, r.bal, { size: 10, font: 'mono', fill: C.accent, weight: 500 }) + text(c, cols[2], y, r.days, { size: 10, font: 'mono', fill: C.fg70 }) + text(c, cols[3], y, r.dep, { size: 10, font: 'mono', fill: C.fg70 }) + text(c, cols[4], y, r.action, { size: 9, font: 'mono', fill: C.fg55 }) + line(c, 80, y + 10, 1120, y + 10, { stroke: C.line }) + '</g>'; });
  const ky = ly + 48 + t.list.length * 30 + 10;
  t.tiles.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, 20 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? 'rgba(242,181,68,0.06)' : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  s += text(c, 80, ky + 86, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

const NB = ' ';
export const STRINGS = {
  fr: {
    stop: {
      title: 'Un arrêt de tournée : livré, repris, solde signé, caution',
      alt: 'Un bandeau : tournée T-0311 du 11 novembre, arrêt 7 sur 18, Supérette El Amel, chauffeur Walid, 9 h 48, comptage à chaque arrêt, signé par le client. Trois lignes d’emballages avec solde avant, livré, repris, solde après et caution : casiers de 24, solde avant 36, livré 40, repris 32, solde après 44 en accent, au-dessus du seuil de 40, caution 250 dinars le casier soit 11 000 détenus ; palettes, 2, livré 1, repris 1, solde 2, caution 3 000 la palette soit 6 000 ; fûts 30 litres, 3, livré 2, repris 3, solde 2, caution 1 500 le fût soit 3 000. Un trait accentué puis : le client signe le solde, pas seulement la livraison, photo de la pile reprise, horodatée. Une alerte : 44 casiers au-dessus du seuil 40 depuis 23 jours, relance WhatsApp programmée. Trois tuiles : 44 casiers détenus, 20 000 dinars de caution détenus, 0 ressaisie au dépôt. Les quantités, cautions et noms sont un exemple construit.',
      header: 'Tournée T-0311 · 11 nov. · arrêt 7 / 18 · Supérette El Amel · chauffeur Walid · 09:48 · compté à chaque arrêt · signé par le client',
      cols: ['Emballage', 'Solde avant', 'Livré', 'Repris', 'Solde après', 'Caution détenue'],
      rows: [
        { name: 'Casiers 24 bouteilles', sub: 'caution 250 DA / casier · seuil 40', before: '36', deliv: '+ 40', ret: '− 32', after: '44', afterSub: '> seuil 40 · 23 j', dep: `11${NB}000 DA`, depSub: '44 × 250', hot: true },
        { name: 'Palettes', sub: 'caution 3 000 DA / palette', before: '2', deliv: '+ 1', ret: '− 1', after: '2', afterSub: 'inchangé', dep: `6${NB}000 DA`, depSub: '2 × 3 000' },
        { name: 'Fûts 30 L', sub: 'caution 1 500 DA / fût · n° gravé', before: '3', deliv: '+ 2', ret: '− 3', after: '2', afterSub: 'n° 0417, 0422', dep: `3${NB}000 DA`, depSub: '2 × 1 500' },
      ],
      sign: 'Le client signe le solde après, pas seulement la livraison : 44 casiers, 2 palettes, 2 fûts',
      sign2: 'photo de la pile reprise, horodatée, position GPS · le reçu part sur son WhatsApp · le solde est le même sur son portail',
      alert: 'Alerte : 44 casiers > seuil 40 depuis 23 jours',
      alert2: 'relance WhatsApp programmée · la caution est facturée au-delà du seuil, selon la règle écrite',
      tiles: [
        { big: '44 casiers', l1: 'détenus par ce client après l’arrêt', l2: 'solde = somme des mouvements signés, jamais saisi', hot: true },
        { big: `20${NB}000 DA`, l1: 'de caution détenus, trois types d’emballages', l2: 'facturée ou remboursée selon la règle écrite' },
        { big: '0 ressaisie', l1: 'le dépôt reçoit le comptage de l’arrêt', l2: 'le camion se solde à l’arrivée' },
      ],
      rule: 'Le solde d’un client n’est jamais saisi : c’est la somme des mouvements signés à chaque arrêt, livré moins repris.',
      rule2: 'La caution suit le solde selon une règle écrite ; la relance part au seuil, sans que le chauffeur ait à négocier.',
      note: 'Quantités, cautions, seuils et noms sont un exemple construit ; le montant de la caution et la règle de facturation sont des décisions du gérant.',
    },
    circulation: {
      title: 'Où sont les 12 400 casiers : dépôt, camions, clients par ancienneté, radiés',
      alt: 'Un bandeau : parc de 12 400 casiers, inventaire au 11 novembre, en circulation égale dépôt plus camions plus clients, écart radié. Une barre segmentée : au dépôt 3 180, en camion 1 240, chez les clients depuis moins de 30 jours 5 100, de 31 à 60 jours 1 620, depuis plus de 60 jours 840 en accent, radiés cette année 420. Puis la liste des cinq soldes qui demandent une action, par quantité ou par ancienneté : Gros Marché Est 210 casiers, 74 jours, 52 500 dinars de caution, relancé deux fois, visite planifiée ; Supérette El Amel 44, 23 jours, 11 000, relance programmée ; Dépôt Boissons Sud 180, 91 jours, 45 000, caution facturée ; Café de la Gare 36, 68 jours, 9 000, relancé ; Restaurant Le Port 58, 63 jours, 14 500, relancé. Trois tuiles : 12 400 casiers dans le parc ; 840 chez des clients depuis plus de 60 jours, 6,8 pour cent ; 420 radiés cette année, 3,4 pour cent, contre 1 900 l’an dernier. Les chiffres sont un exemple construit.',
      header: 'Parc : 12 400 casiers · inventaire au 11 nov. · en circulation = dépôt + camions + clients · écart radié avec motif',
      segs: [
        { k: 'depot', v: 3180, l: `dépôt · 3${NB}180`, l2: 'comptés ce matin' },
        { k: 'truck', v: 1240, l: `camions · 1${NB}240`, l2: '6 tournées en cours' },
        { k: 'cust', v: 5100, l: `clients ≤ 30 j · 5${NB}100`, l2: 'rotation normale' },
        { k: 'warn', v: 1620, l: `31–60 j · 1${NB}620`, l2: 'relance au seuil' },
        { k: 'hot', v: 840, l: '> 60 j · 840', l2: 'caution facturée' },
        { k: 'lost', v: 420, l: 'radiés · 420', l2: 'cette année' },
      ],
      listTitle: 'Les cinq soldes qui demandent une action : quantité ou ancienneté au-delà du seuil',
      listCols: ['Client', 'Casiers', 'Depuis', 'Caution', 'Action'],
      list: [
        { name: 'Gros Marché Est', bal: '210', days: '74 j', dep: `52${NB}500 DA`, action: 'relancé 2 fois · visite planifiée jeudi' },
        { name: 'Dépôt Boissons Sud', bal: '180', days: '91 j', dep: `45${NB}000 DA`, action: 'caution facturée · F-2027-2210' },
        { name: 'Restaurant Le Port', bal: '58', days: '63 j', dep: `14${NB}500 DA`, action: 'relancé · réponse : reprise lundi' },
        { name: 'Supérette El Amel', bal: '44', days: '23 j', dep: `11${NB}000 DA`, action: 'relance programmée au seuil' },
        { name: 'Café de la Gare', bal: '36', days: '68 j', dep: `9${NB}000 DA`, action: 'relancé · sans réponse' },
      ],
      tiles: [
        { big: `12${NB}400 casiers`, l1: 'dans le parc, chacun quelque part', l2: 'dépôt + camions + clients + radiés = parc' },
        { big: '840 · 6,8 %', l1: 'chez des clients depuis plus de 60 jours', l2: 'caution facturée ; visite ou reprise planifiée', hot: true },
        { big: '420 radiés · 3,4 %', l1: 'cette année, avec motif, décision du gérant', l2: 'contre 1 900 l’an dernier sans application' },
      ],
      rule: 'Chaque casier est quelque part : au dépôt, dans un camion, chez un client avec une date, ou radié avec un motif ; la somme fait le parc.',
      rule2: 'La relance et la caution suivent l’ancienneté du solde ; la commande de casiers neufs suit les radiations, pas le sentiment.',
      note: 'Parc, soldes, délais, cautions et noms sont un exemple construit ; les seuils d’ancienneté et la règle de caution sont des décisions du gérant.',
    },
  },
  en: {
    stop: {
      title: 'One delivery stop: delivered, returned, signed balance, deposit',
      alt: 'A strip: round T-0311 of 11 November, stop 7 of 18, Supérette El Amel, driver Walid, 09:48, counted at every stop, signed by the customer. Three packaging rows with balance before, delivered, returned, balance after and deposit: 24-bottle crates, balance before 36, delivered 40, returned 32, balance after 44 accented, above the 40 threshold, deposit 250 dinars per crate so 11,000 held; pallets, 2, delivered 1, returned 1, balance 2, deposit 3,000 per pallet so 6,000; 30-litre drums, 3, delivered 2, returned 3, balance 2, deposit 1,500 per drum so 3,000. An accented line then: the customer signs the balance, not only the delivery, photo of the returned stack, timestamped. An alert: 44 crates above the 40 threshold for 23 days, WhatsApp reminder scheduled. Three tiles: 44 crates held, 20,000 dinars of deposit held, 0 retyping at the depot. Quantities, deposits and names are a constructed example.',
      header: 'Round T-0311 · 11 Nov · stop 7 / 18 · Supérette El Amel · driver Walid · 09:48 · counted at every stop · signed by the customer',
      cols: ['Packaging', 'Balance before', 'Delivered', 'Returned', 'Balance after', 'Deposit held'],
      rows: [
        { name: '24-bottle crates', sub: 'deposit 250 DA / crate · threshold 40', before: '36', deliv: '+ 40', ret: '− 32', after: '44', afterSub: '> threshold 40 · 23 d', dep: '11,000 DA', depSub: '44 × 250', hot: true },
        { name: 'Pallets', sub: 'deposit 3,000 DA / pallet', before: '2', deliv: '+ 1', ret: '− 1', after: '2', afterSub: 'unchanged', dep: '6,000 DA', depSub: '2 × 3,000' },
        { name: 'Drums 30 L', sub: 'deposit 1,500 DA / drum · engraved no.', before: '3', deliv: '+ 2', ret: '− 3', after: '2', afterSub: 'no. 0417, 0422', dep: '3,000 DA', depSub: '2 × 1,500' },
      ],
      sign: 'The customer signs the balance after, not only the delivery: 44 crates, 2 pallets, 2 drums',
      sign2: 'photo of the returned stack, timestamped, GPS position · the receipt goes to their WhatsApp · the balance is the same on their portal',
      alert: 'Alert: 44 crates > threshold 40 for 23 days',
      alert2: 'WhatsApp reminder scheduled · deposit invoiced beyond the threshold, per the written rule',
      tiles: [
        { big: '44 crates', l1: 'held by this customer after the stop', l2: 'balance = sum of signed movements, never typed', hot: true },
        { big: '20,000 DA', l1: 'of deposit held, three packaging types', l2: 'invoiced or refunded per the written rule' },
        { big: '0 retyping', l1: 'the depot receives the stop’s count', l2: 'the truck balances on arrival' },
      ],
      rule: 'A customer’s balance is never typed: it is the sum of movements signed at every stop, delivered minus returned.',
      rule2: 'The deposit follows the balance by a written rule; the reminder leaves at the threshold, without the driver having to negotiate.',
      note: 'Quantities, deposits, thresholds and names are a constructed example; the deposit amount and the invoicing rule are the manager’s decisions.',
    },
    circulation: {
      title: 'Where the 12,400 crates are: depot, trucks, customers by age, written off',
      alt: 'A strip: fleet of 12,400 crates, count as of 11 November, in circulation equals depot plus trucks plus customers, gap written off. A segmented bar: at the depot 3,180, in trucks 1,240, with customers for less than 30 days 5,100, 31 to 60 days 1,620, more than 60 days 840 accented, written off this year 420. Then the list of the five balances that need an action, by quantity or by age: Gros Marché Est 210 crates, 74 days, 52,500 dinars deposit, chased twice, visit planned; Dépôt Boissons Sud 180, 91 days, 45,000, deposit invoiced; Restaurant Le Port 58, 63 days, 14,500, chased; Supérette El Amel 44, 23 days, 11,000, reminder scheduled; Café de la Gare 36, 68 days, 9,000, chased. Three tiles: 12,400 crates in the fleet; 840 with customers for more than 60 days, 6.8 percent; 420 written off this year, 3.4 percent, against 1,900 last year. Figures are a constructed example.',
      header: 'Fleet: 12,400 crates · count as of 11 Nov · in circulation = depot + trucks + customers · gap written off with a reason',
      segs: [
        { k: 'depot', v: 3180, l: 'depot · 3,180', l2: 'counted this morning' },
        { k: 'truck', v: 1240, l: 'trucks · 1,240', l2: '6 rounds in progress' },
        { k: 'cust', v: 5100, l: 'customers ≤ 30 d · 5,100', l2: 'normal rotation' },
        { k: 'warn', v: 1620, l: '31–60 d · 1,620', l2: 'reminder at threshold' },
        { k: 'hot', v: 840, l: '> 60 d · 840', l2: 'deposit invoiced' },
        { k: 'lost', v: 420, l: 'written off · 420', l2: 'this year' },
      ],
      listTitle: 'The five balances that need an action: quantity or age beyond the threshold',
      listCols: ['Customer', 'Crates', 'Since', 'Deposit', 'Action'],
      list: [
        { name: 'Gros Marché Est', bal: '210', days: '74 d', dep: '52,500 DA', action: 'chased twice · visit planned Thursday' },
        { name: 'Dépôt Boissons Sud', bal: '180', days: '91 d', dep: '45,000 DA', action: 'deposit invoiced · F-2027-2210' },
        { name: 'Restaurant Le Port', bal: '58', days: '63 d', dep: '14,500 DA', action: 'chased · reply: pickup Monday' },
        { name: 'Supérette El Amel', bal: '44', days: '23 d', dep: '11,000 DA', action: 'reminder scheduled at threshold' },
        { name: 'Café de la Gare', bal: '36', days: '68 d', dep: '9,000 DA', action: 'chased · no reply' },
      ],
      tiles: [
        { big: '12,400 crates', l1: 'in the fleet, each one somewhere', l2: 'depot + trucks + customers + written off = fleet' },
        { big: '840 · 6.8 %', l1: 'with customers for more than 60 days', l2: 'deposit invoiced; visit or pickup planned', hot: true },
        { big: '420 written off · 3.4 %', l1: 'this year, with a reason, manager’s decision', l2: 'against 1,900 last year without the application' },
      ],
      rule: 'Every crate is somewhere: at the depot, in a truck, with a customer with a date, or written off with a reason; the sum is the fleet.',
      rule2: 'Reminders and deposits follow the age of the balance; the order for new crates follows write-offs, not a feeling.',
      note: 'Fleet, balances, delays, deposits and names are a constructed example; age thresholds and the deposit rule are the manager’s decisions.',
    },
  },
  ar: {
    stop: {
      title: 'توقف في جولة: مسلَّم، مسترجَع، رصيد موقَّع، ضمان',
      alt: 'شريط: الجولة T-0311 في 11 نوفمبر، التوقف 7 من 18، سوبيرات الأمل، السائق وليد، 09:48، عدّ عند كل توقف، موقَّع من الزبون. ثلاثة أسطر تغليف برصيد قبل ومسلَّم ومسترجَع ورصيد بعد وضمان: صناديق 24 قارورة، رصيد قبل 36، مسلَّم 40، مسترجَع 32، رصيد بعد 44 مميز فوق عتبة 40، ضمان 250 ديناراً للصندوق أي 11,000 محتجزة؛ منصات، 2، مسلَّم 1، مسترجَع 1، رصيد 2، ضمان 3,000 للمنصة أي 6,000؛ براميل 30 لتراً، 3، مسلَّم 2، مسترجَع 3، رصيد 2، ضمان 1,500 للبرميل أي 3,000. خط مميز ثم: الزبون يوقّع الرصيد لا التسليم فقط، صورة الكومة المسترجَعة موقَّتة. تنبيه: 44 صندوقاً فوق عتبة 40 منذ 23 يوماً، تذكير واتساب مبرمج. ثلاث بطاقات: 44 صندوقاً محتجزاً، 20,000 دينار ضمان محتجز، 0 إعادة كتابة في المستودع. الكميات والضمانات والأسماء مثال مبني.',
      header: `الجولة ${I('T-0311')} · ${I('11')} نوفمبر · التوقف ${I('7 / 18')} · سوبيرات الأمل · السائق وليد · ${I('09:48')} · عدّ عند كل توقف · موقَّع من الزبون`,
      cols: ['التغليف', 'الرصيد قبل', 'مسلَّم', 'مسترجَع', 'الرصيد بعد', 'الضمان المحتجز'],
      rows: [
        { name: `صناديق ${I('24')} قارورة`, sub: `ضمان ${I('250 DA')} / صندوق · عتبة ${I('40')}`, before: I('36'), deliv: I('+ 40'), ret: I('− 32'), after: I('44'), afterSub: `> عتبة ${I('40')} · ${I('23')} يوماً`, dep: I('11,000 DA'), depSub: I('44 × 250'), hot: true },
        { name: 'منصات', sub: `ضمان ${I('3,000 DA')} / منصة`, before: I('2'), deliv: I('+ 1'), ret: I('− 1'), after: I('2'), afterSub: 'دون تغيير', dep: I('6,000 DA'), depSub: I('2 × 3,000') },
        { name: `براميل ${I('30 L')}`, sub: `ضمان ${I('1,500 DA')} / برميل · رقم محفور`, before: I('3'), deliv: I('+ 2'), ret: I('− 3'), after: I('2'), afterSub: `رقم ${I('0417, 0422')}`, dep: I('3,000 DA'), depSub: I('2 × 1,500') },
      ],
      sign: `الزبون يوقّع الرصيد بعد لا التسليم فقط: ${I('44')} صندوقاً، ${I('2')} منصتان، ${I('2')} برميلان`,
      sign2: 'صورة الكومة المسترجَعة، موقَّتة، موقع GPS · الوصل يذهب إلى واتسابه · الرصيد نفسه على بوابته',
      alert: `تنبيه: ${I('44')} صندوقاً > عتبة ${I('40')} منذ ${I('23')} يوماً`,
      alert2: 'تذكير واتساب مبرمج · الضمان يُفوتَر فوق العتبة بحسب القاعدة المكتوبة',
      tiles: [
        { big: `${I('44')} صندوقاً`, l1: 'محتجزة عند هذا الزبون بعد التوقف', l2: 'الرصيد = مجموع الحركات الموقَّعة ولا يُكتب أبداً', hot: true },
        { big: I('20,000 DA'), l1: 'ضمان محتجز، ثلاثة أنواع تغليف', l2: 'يُفوتَر أو يُرد بحسب القاعدة المكتوبة' },
        { big: `${I('0')} إعادة كتابة`, l1: 'المستودع يتلقى عدّ التوقف', l2: 'الشاحنة تُسوّى عند الوصول' },
      ],
      rule: 'رصيد الزبون لا يُكتب أبداً: هو مجموع الحركات الموقَّعة عند كل توقف، مسلَّم ناقص مسترجَع.',
      rule2: 'الضمان يتبع الرصيد بقاعدة مكتوبة؛ والتذكير يخرج عند العتبة دون أن يتفاوض السائق.',
      note: 'الكميات والضمانات والعتبات والأسماء مثال مبني؛ ومبلغ الضمان وقاعدة الفوترة قرارا المسيّر.',
    },
    circulation: {
      title: 'أين الصناديق الـ 12,400: مستودع، شاحنات، زبائن بالأقدمية، مشطوبة',
      alt: 'شريط: أسطول 12,400 صندوق، جرد في 11 نوفمبر، في التداول يساوي المستودع زائد الشاحنات زائد الزبائن، الفارق مشطوب. شريط مقسَّم: في المستودع 3,180، في الشاحنات 1,240، عند الزبائن منذ أقل من 30 يوماً 5,100، من 31 إلى 60 يوماً 1,620، منذ أكثر من 60 يوماً 840 مميزة، مشطوبة هذه السنة 420. ثم قائمة الأرصدة الخمسة التي تتطلب إجراءً، بالكمية أو بالأقدمية: السوق الكبير الشرقي 210 صناديق، 74 يوماً، 52,500 دينار ضمان، ذُكّر مرتين، زيارة مخططة؛ مستودع مشروبات الجنوب 180، 91 يوماً، 45,000، ضمان مفوتَر؛ مطعم الميناء 58، 63 يوماً، 14,500، ذُكّر؛ سوبيرات الأمل 44، 23 يوماً، 11,000، تذكير مبرمج؛ مقهى المحطة 36، 68 يوماً، 9,000، ذُكّر. ثلاث بطاقات: 12,400 صندوق في الأسطول؛ 840 عند زبائن منذ أكثر من 60 يوماً، 6.8 بالمائة؛ 420 مشطوبة هذه السنة، 3.4 بالمائة، مقابل 1,900 السنة الماضية. الأرقام مثال مبني.',
      header: `الأسطول: ${I('12,400')} صندوق · جرد في ${I('11')} نوفمبر · في التداول = مستودع + شاحنات + زبائن · الفارق مشطوب بسبب`,
      segs: [
        { k: 'depot', v: 3180, l: `مستودع · ${I('3,180')}`, l2: 'عُدّت هذا الصباح' },
        { k: 'truck', v: 1240, l: `شاحنات · ${I('1,240')}`, l2: `${I('6')} جولات جارية` },
        { k: 'cust', v: 5100, l: `زبائن ${I('≤ 30')} يوماً · ${I('5,100')}`, l2: 'دوران عادي' },
        { k: 'warn', v: 1620, l: `${I('31–60')} يوماً · ${I('1,620')}`, l2: 'تذكير عند العتبة' },
        { k: 'hot', v: 840, l: `${I('> 60')} يوماً · ${I('840')}`, l2: 'ضمان مفوتَر' },
        { k: 'lost', v: 420, l: `مشطوبة · ${I('420')}`, l2: 'هذه السنة' },
      ],
      listTitle: 'الأرصدة الخمسة التي تتطلب إجراءً: كمية أو أقدمية فوق العتبة',
      listCols: ['الزبون', 'صناديق', 'منذ', 'الضمان', 'الإجراء'],
      list: [
        { name: 'السوق الكبير الشرقي', bal: I('210'), days: `${I('74')} يوماً`, dep: I('52,500 DA'), action: 'ذُكّر مرتين · زيارة مخططة الخميس' },
        { name: 'مستودع مشروبات الجنوب', bal: I('180'), days: `${I('91')} يوماً`, dep: I('45,000 DA'), action: `ضمان مفوتَر · ${I('F-2027-2210')}` },
        { name: 'مطعم الميناء', bal: I('58'), days: `${I('63')} يوماً`, dep: I('14,500 DA'), action: 'ذُكّر · الرد: استرجاع الاثنين' },
        { name: 'سوبيرات الأمل', bal: I('44'), days: `${I('23')} يوماً`, dep: I('11,000 DA'), action: 'تذكير مبرمج عند العتبة' },
        { name: 'مقهى المحطة', bal: I('36'), days: `${I('68')} يوماً`, dep: I('9,000 DA'), action: 'ذُكّر · بلا رد' },
      ],
      tiles: [
        { big: `${I('12,400')} صندوق`, l1: 'في الأسطول، كل واحد في مكان ما', l2: 'مستودع + شاحنات + زبائن + مشطوبة = الأسطول' },
        { big: I('840 · 6.8 %'), l1: `عند زبائن منذ أكثر من ${I('60')} يوماً`, l2: 'ضمان مفوتَر؛ زيارة أو استرجاع مخطط', hot: true },
        { big: `${I('420')} مشطوبة · ${I('3.4 %')}`, l1: 'هذه السنة، بسبب، بقرار المسيّر', l2: `مقابل ${I('1,900')} السنة الماضية بلا تطبيق` },
      ],
      rule: 'كل صندوق في مكان ما: في المستودع، أو في شاحنة، أو عند زبون بتاريخ، أو مشطوب بسبب؛ والمجموع هو الأسطول.',
      rule2: 'التذكير والضمان يتبعان أقدمية الرصيد؛ وطلب الصناديق الجديدة يتبع المشطوبات لا الشعور.',
      note: 'الأسطول والأرصدة والمهل والضمانات والأسماء مثال مبني؛ وعتبات الأقدمية وقاعدة الضمان قرارا المسيّر.',
    },
  },
};
