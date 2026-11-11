// Bespoke animated figures for the 2027 "logiciel supérette en Algérie" post.
//  ticket():   one till ticket while the network is down: the ticket lines appear one
//              by one (scanned EAN lines, a weighed line from the scale, a lot line
//              with a promotion applied by the engine), the total and the payment;
//              on the right, what the till did locally in under two seconds and what
//              waited for the network (ticket queued, synced later, no duplicate);
//              three tiles.
//  rayons():   the manager's board: five departments with the day's sales as growing
//              bars, margin, items close to their expiry date, stock-outs; the
//              till-closing panel (cash counted vs expected per till) and the
//              pending supplier receipt; three tiles.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function grow(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
const I = (x) => `⁦${x}⁩`;

function panel(c, css, P, id, at, x, y, w, h, t, accent) {
  let s = `<g style="animation:${show(css, P, id, at)}">` + rect(c, x, y, w, h, { stroke: accent ? C.accent : C.line2, fill: accent ? 'rgba(242,181,68,0.06)' : C.fill }) + text(c, x + 12, y + 20, t.title, { size: 10.5, fill: accent ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, y + 34, t.sub, { size: 8, font: 'mono', fill: C.fg55 });
  t.rows.forEach((r, i) => { const yy = y + 54 + i * 18; s += text(c, x + 12, yy, r.l, { size: 9, fill: C.fg70 }) + text(c, x + w - 12, yy, r.v, { size: 9.5, font: 'mono', fill: r.hot ? C.accent : C.fg, anchor: 'end', weight: r.hot ? 500 : 400 }); });
  return s + '</g>';
}
function tiles(c, css, P, ky, ts, at0) {
  let s = '';
  ts.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, at0 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? 'rgba(242,181,68,0.06)' : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  return s;
}

export function ticket(t, rtl) {
  const c = ctx(rtl); const P = 'st'; const css = []; const H = 640;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: 'rgba(242,181,68,0.06)' }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  // ticket (left)
  const tx = 80, ty = 146, tw = 420; const lh = 22; const n = t.lines.length;
  const th = 54 + n * lh + 74;
  s += rect(c, tx, ty, tw, th, { stroke: C.line2, fill: C.fill }) + text(c, tx + 12, ty + 20, t.ticket.title, { size: 10.5, fill: C.fg, weight: 500 }) + text(c, tx + 12, ty + 34, t.ticket.sub, { size: 8, font: 'mono', fill: C.fg55 });
  t.lines.forEach((l, i) => {
    const y = ty + 54 + i * lh; const at = 4 + i * 1.2; const hot = l.hot;
    s += `<g style="animation:${show(css, P, `l${i}`, at)}">` + text(c, tx + 12, y + 6, l.name, { size: 9.5, fill: hot ? C.accent : C.fg, weight: hot ? 500 : 400 }) + text(c, tx + 12, y + 16, l.sub, { size: 7.5, font: 'mono', fill: hot ? C.accent : C.fg55 }) + text(c, tx + tw - 12, y + 6, l.amt, { size: 9.5, font: 'mono', fill: hot ? C.accent : C.fg, anchor: 'end' }) + '</g>';
  });
  const sy = ty + 54 + n * lh + 6;
  s += `<g style="animation:${show(css, P, 'tot', 4 + n * 1.2 + 0.5)}">` + line(c, tx + 12, sy, tx + tw - 12, sy, { stroke: C.line2 });
  t.ticket.totals.forEach((r, i) => { const y = sy + 18 + i * 18; s += text(c, tx + 12, y, r.l, { size: r.big ? 11 : 9, fill: r.big ? C.fg : C.fg70, weight: r.big ? 500 : 400 }) + text(c, tx + tw - 12, y, r.v, { size: r.big ? 12 : 9.5, font: 'mono', fill: r.hot ? C.accent : C.fg, anchor: 'end', weight: r.big ? 500 : 400 }); });
  s += '</g>';
  // right: local steps panel and sync panel
  s += panel(c, css, P, 'loc', 6, 540, 146, 580, 170, t.local, false);
  s += panel(c, css, P, 'sync', 15, 540, 330, 580, 116, t.sync, true);
  const ky = Math.max(ty + th + 16, 462);
  s += tiles(c, css, P, ky, t.tiles, 18);
  s += text(c, 80, ky + 86, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

export function rayons(t, rtl) {
  const c = ctx(rtl); const P = 'sr'; const css = []; const H = 600;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  const sx = 80, hy = 104; const colB = sx + 150; const barW = 190; const cM = colB + barW + 16, cD = cM + 70, cR = cD + 110;
  s += [sx, colB, cM, cD, cR].map((x, i) => text(c, x, hy, t.cols[i], { size: 9, font: 'mono', fill: C.fg35, letter: 1.2, upper: true })).join('') + line(c, sx, hy + 8, cR + 60, hy + 8, { stroke: C.line2 });
  const max = Math.max(...t.rows.map((r) => r.sales));
  t.rows.forEach((r, i) => {
    const y = hy + 40 + i * 50; const at = 3 + i * 1.5;
    s += `<g style="animation:${show(css, P, `r${i}`, at)}">` + text(c, sx, y - 2, r.name, { size: 11, fill: C.fg, weight: 500 }) + text(c, sx, y + 12, r.sub, { size: 8, font: 'mono', fill: C.fg55 })
      + text(c, colB + barW + 8 - 8 + 0, y + 20, '', { size: 1 })
      + text(c, cM, y + 4, r.margin, { size: 10, font: 'mono', fill: C.fg })
      + text(c, cD, y + 4, r.dlc, { size: 10, font: 'mono', fill: r.dlcHot ? C.accent : C.fg })
      + text(c, cR, y + 4, r.out, { size: 10, font: 'mono', fill: r.outHot ? C.accent : C.fg })
      + line(c, sx, y + 24, cR + 60, y + 24, { stroke: C.line }) + '</g>';
    s += `<g style="transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'};animation:${grow(css, P, `g${i}`, at + 0.4, 1.3)}">` + rect(c, colB, y - 4, Math.max(Math.round((r.sales / max) * barW), 2), 9, { stroke: 'none', fill: r.hot ? C.accent : C.fg55 }) + '</g>';
    s += `<g style="animation:${show(css, P, `v${i}`, at + 1.5)}">` + text(c, colB, y + 16, r.salesT, { size: 8, font: 'mono', fill: C.fg55 }) + '</g>';
  });
  const ly = hy + 40 + t.rows.length * 50;
  s += text(c, sx, ly + 6, t.legend, { size: 8.5, font: 'mono', fill: C.fg55 });
  s += panel(c, css, P, 'z', 11, 800, 96, 320, 170, t.z, true);
  s += panel(c, css, P, 'rec', 14, 800, 280, 320, 98, t.receipt, false);
  const ky = Math.max(ly + 24, 392);
  s += tiles(c, css, P, ky, t.tiles, 16);
  s += text(c, 80, ky + 86, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

const NB = ' ';
export const STRINGS = {
  fr: {
    ticket: {
      title: 'Un ticket à la caisse, réseau coupé : scan, balance, promo, total, synchronisation',
      alt: 'Un bandeau : supérette de 180 mètres carrés, 2 caisses, 12 400 références, mardi 10h52, réseau coupé depuis 10h52, caisse 1, ticket T-0417. À gauche, le ticket : lait 1 litre, 2 fois 140, 280 ; tomates pesées 1,240 kilo à 180 le kilo, 223, ligne venue de la balance ; huile 5 litres, 1 150 ; yaourts lot de 6, 6 fois 45, promotion 6 pour 5 appliquée par le moteur, moins 45, 225, en accent ; pain, 2 fois 15, 30 ; eau 1,5 litre pack de 6, 240 ; lessive 3 kilos, 780 ; total 2 928 dinars ; payé en espèces 3 000, rendu 72 ; ticket numéroté localement T-0417-C1. À droite, ce que la caisse a fait en local : code-barres lu, prix trouvé dans la base locale de 12 400 références en 40 millisecondes, promotion évaluée en 15 millisecondes, stock réservé en local, ticket numéroté par la séquence de la caisse, imprimé en 1,8 seconde en tout. En dessous, en accent, ce qui a attendu le réseau : 31 tickets mis en file entre 10h52 et 11h20, envoyés à 11h21 au retour du réseau, 0 doublon parce que chaque ticket porte un identifiant unique, 0 perdu, stock central à jour à 11h21. Trois tuiles : 1,8 seconde par ticket, tout en local ; 31 tickets en file, 0 perdu ; 12 400 références et les promotions du jour dans la base locale de chaque caisse. Chiffres et produits sont un exemple construit.',
      header: 'Supérette 180 m² · 2 caisses · 12 400 références · mardi 10h52 · réseau coupé · caisse 1 · ticket T-0417',
      ticket: { title: 'Ticket T-0417-C1 · caisse 1 · 10h53', sub: 'scan, balance, promo : tout décidé en local', totals: [{ l: 'Total', v: `2${NB}928 DA`, big: true }, { l: 'Espèces reçues', v: `3${NB}000` }, { l: 'Rendu', v: '72', hot: true }] },
      lines: [
        { name: 'Lait 1 L × 2', sub: 'EAN scanné · prix base locale', amt: '280' },
        { name: 'Tomates 1,240 kg', sub: 'ligne venue de la balance · 180 / kg', amt: '223' },
        { name: 'Huile 5 L', sub: 'EAN scanné', amt: `1${NB}150` },
        { name: 'Yaourts × 6 · promo 6 pour 5', sub: 'moteur de promotions · −45 · garde de marge ok', amt: '225', hot: true },
        { name: 'Pain × 2', sub: 'touche rapide', amt: '30' },
        { name: 'Eau 1,5 L · pack de 6', sub: 'EAN du pack', amt: '240' },
        { name: 'Lessive 3 kg', sub: 'EAN scanné · lot L-2311', amt: '780' },
      ],
      local: { title: 'Ce que la caisse a fait en local · 1,8 s en tout', sub: 'base locale sur la caisse, pas d’appel au serveur pour vendre', rows: [{ l: 'Code-barres lu → prix trouvé', v: '40 ms · 12 400 réf. locales' }, { l: 'Promotions du jour évaluées', v: '15 ms · règles reçues à l’ouverture' }, { l: 'Stock réservé', v: 'local · lot et DLC notés' }, { l: 'Ticket numéroté', v: 'T-0417-C1 · séquence de la caisse' }, { l: 'Imprimé · tiroir ouvert', v: '1,8 s', hot: true }, { l: 'Carnet de crédit, QR, carte', v: 'mêmes règles, même ticket' }] },
      sync: { title: 'Ce qui a attendu le réseau · 10h52 → 11h21', sub: 'file d’attente, identifiant unique par ticket', rows: [{ l: 'Tickets mis en file', v: '31' }, { l: 'Envoyés au retour du réseau', v: '11h21 · 31 / 31', hot: true }, { l: 'Doublons · perdus', v: '0 · 0' }] },
      tiles: [
        { big: '1,8 s', l1: 'par ticket, réseau ou pas', l2: 'scan, balance, promo, stock : en local' },
        { big: '31 en file · 0 perdu', l1: 'tickets de la coupure 10h52–11h20', l2: 'envoyés à 11h21 · identifiant unique', hot: true },
        { big: `12${NB}400 réf.`, l1: 'prix et promotions du jour', l2: 'dans la base locale de chaque caisse' },
      ],
      rule: 'La caisse vend sans serveur : prix, promotions, balance et stock sont décidés en local, le ticket est numéroté sur place ;',
      rule2: 'le réseau ne sert qu’à envoyer ce qui a été vendu, et il peut attendre.',
      note: 'Produits, prix, horaires et chiffres sont un exemple construit.',
    },
    rayons: {
      title: 'Le tableau du gérant : rayons, marge, DLC, ruptures, clôture des caisses',
      alt: 'À gauche, cinq rayons avec les ventes du jour en barre : épicerie 420 000 dinars, marge 12 pour cent, 6 articles à DLC sous 3 jours, 7 ruptures en accent ; frais 310 000, marge 18 pour cent, 34 articles à DLC sous 3 jours en accent, 2 ruptures ; boissons 190 000, marge 9 pour cent, 0 DLC, 3 ruptures ; droguerie et hygiène 150 000, marge 16 pour cent, 0, 1 ; boulangerie et snack 114 000, marge 28 pour cent, 12 articles du jour, 0 rupture. Total 1 184 000 dinars, 640 tickets, panier moyen 1 850. À droite, en accent, la clôture des caisses : ventes du jour 1 184 000 ; espèces attendues 944 850 ; caisse 1 comptée à l’aveugle 512 000 contre 512 300 attendus, écart moins 300 ; caisse 2, 432 550 contre 432 550, écart 0 ; QR et carte 183 150 rapprochés ; carnet de crédit 56 000 sur 23 clients ; dépôt en banque préparé. En dessous, la réception fournisseur en attente : 48 lignes livrées ce matin, 3 prix d’achat changés, 2 lignes manquantes, à valider avant que les nouveaux prix d’achat n’entrent dans la marge. Trois tuiles : 1 184 000 dinars, 640 tickets, 1 850 de panier moyen ; 34 articles du frais à écouler sous 3 jours, promotion proposée ; écart de caisse moins 300 sur 944 850, 13 ruptures à commander ce soir. Chiffres et rayons sont un exemple construit.',
      cols: ['Rayon', 'Ventes du jour', 'Marge', 'DLC ≤ 3 j', 'Ruptures'],
      rows: [
        { name: 'Épicerie', sub: '4 120 réf. · 36 % des ventes', sales: 420000, salesT: `420${NB}000 DA`, margin: '12 %', dlc: '6 art.', out: '7 réf.', outHot: true },
        { name: 'Frais', sub: 'laitier, viande, fruits et légumes', sales: 310000, salesT: `310${NB}000 DA`, margin: '18 %', dlc: '34 art. · 8 lots', dlcHot: true, out: '2 réf.', hot: true },
        { name: 'Boissons', sub: 'eau, jus, sodas', sales: 190000, salesT: `190${NB}000 DA`, margin: '9 %', dlc: '0', out: '3 réf.' },
        { name: 'Droguerie · hygiène', sub: 'lessive, hygiène, ménage', sales: 150000, salesT: `150${NB}000 DA`, margin: '16 %', dlc: '0', out: '1 réf.' },
        { name: 'Boulangerie · snack', sub: 'pain, viennoiseries, sandwichs', sales: 114000, salesT: `114${NB}000 DA`, margin: '28 %', dlc: '12 art. du jour', out: '0' },
      ],
      legend: 'barre : ventes du jour par rayon · dorée : rayon avec alerte DLC · marge calculée sur le dernier prix d’achat reçu',
      z: { title: 'Clôture des caisses · 21h10', sub: 'comptage à l’aveugle, écart par caisse, dépôt préparé', rows: [{ l: 'Ventes du jour · 640 tickets', v: `1${NB}184${NB}000 DA` }, { l: 'Caisse 1 · comptée / attendue', v: `512${NB}000 / 512${NB}300 · −300`, hot: true }, { l: 'Caisse 2 · comptée / attendue', v: `432${NB}550 / 432${NB}550 · 0` }, { l: 'QR · carte · rapprochés', v: `183${NB}150` }, { l: 'Carnet de crédit · 23 clients', v: `56${NB}000` }, { l: 'Dépôt en banque préparé', v: `940${NB}000` }] },
      receipt: { title: 'Réception fournisseur · en attente de validation', sub: 'les prix d’achat n’entrent dans la marge qu’une fois validés', rows: [{ l: 'Lignes livrées ce matin', v: '48' }, { l: 'Prix d’achat changés · manquantes', v: '3 · 2', hot: true }] },
      tiles: [
        { big: `1${NB}184${NB}000 · 640`, l1: 'ventes du jour · tickets', l2: 'panier moyen 1 850 DA' },
        { big: '34 art. · 3 j', l1: 'frais à écouler avant la DLC', l2: 'promotion proposée au gérant, règle de marge', hot: true },
        { big: '−300 · 13 réf.', l1: 'écart de caisse · ruptures à commander', l2: 'proposition de commande prête à 21h15' },
      ],
      rule: 'Le gérant lit par rayon les ventes, la marge sur le dernier prix d’achat, les DLC proches et les ruptures ;',
      rule2: 'la caisse est comptée à l’aveugle, l’écart est par caisse, et la commande du soir est proposée, pas devinée.',
      note: 'Rayons, prix, écarts et chiffres sont un exemple construit.',
    },
  },
  en: {
    ticket: {
      title: 'One till ticket with the network down: scan, scale, promotion, total, sync',
      alt: 'A strip: 180-square-metre convenience store, 2 tills, 12,400 references, Tuesday 10:52, network down since 10:52, till 1, ticket T-0417. Left, the ticket: milk 1 litre, 2 times 140, 280; weighed tomatoes 1.240 kg at 180 per kg, 223, line from the scale; oil 5 litres, 1,150; yoghurts pack of 6, 6 times 45, 6-for-5 promotion applied by the engine, minus 45, 225, accented; bread, 2 times 15, 30; water 1.5 litre six-pack, 240; detergent 3 kg, 780; total 2,928 dinars; paid in cash 3,000, change 72; ticket numbered locally T-0417-C1. Right, what the till did locally: barcode read, price found in the local database of 12,400 references in 40 milliseconds, promotion evaluated in 15 milliseconds, stock reserved locally, ticket numbered by the till’s sequence, printed in 1.8 seconds in all. Below, accented, what waited for the network: 31 tickets queued between 10:52 and 11:20, sent at 11:21 when the network returned, 0 duplicates because each ticket carries a unique id, 0 lost, central stock up to date at 11:21. Three tiles: 1.8 seconds per ticket, all local; 31 tickets queued, 0 lost; 12,400 references and the day’s promotions in each till’s local database. Figures and products are a constructed example.',
      header: '180 m² store · 2 tills · 12,400 references · Tuesday 10:52 · network down · till 1 · ticket T-0417',
      ticket: { title: 'Ticket T-0417-C1 · till 1 · 10:53', sub: 'scan, scale, promotion: all decided locally', totals: [{ l: 'Total', v: '2,928 DA', big: true }, { l: 'Cash received', v: '3,000' }, { l: 'Change', v: '72', hot: true }] },
      lines: [
        { name: 'Milk 1 L × 2', sub: 'EAN scanned · local price', amt: '280' },
        { name: 'Tomatoes 1.240 kg', sub: 'line from the scale · 180 / kg', amt: '223' },
        { name: 'Oil 5 L', sub: 'EAN scanned', amt: '1,150' },
        { name: 'Yoghurts × 6 · 6-for-5 promo', sub: 'promotion engine · −45 · margin guard ok', amt: '225', hot: true },
        { name: 'Bread × 2', sub: 'quick key', amt: '30' },
        { name: 'Water 1.5 L · six-pack', sub: 'pack EAN', amt: '240' },
        { name: 'Detergent 3 kg', sub: 'EAN scanned · lot L-2311', amt: '780' },
      ],
      local: { title: 'What the till did locally · 1.8 s in all', sub: 'local database on the till, no server call to sell', rows: [{ l: 'Barcode read → price found', v: '40 ms · 12,400 local refs' }, { l: 'Day’s promotions evaluated', v: '15 ms · rules received at opening' }, { l: 'Stock reserved', v: 'local · lot and expiry noted' }, { l: 'Ticket numbered', v: 'T-0417-C1 · till sequence' }, { l: 'Printed · drawer opened', v: '1.8 s', hot: true }, { l: 'Credit book, QR, card', v: 'same rules, same ticket' }] },
      sync: { title: 'What waited for the network · 10:52 → 11:21', sub: 'queue, unique id per ticket', rows: [{ l: 'Tickets queued', v: '31' }, { l: 'Sent when the network returned', v: '11:21 · 31 / 31', hot: true }, { l: 'Duplicates · lost', v: '0 · 0' }] },
      tiles: [
        { big: '1.8 s', l1: 'per ticket, network or not', l2: 'scan, scale, promotion, stock: local' },
        { big: '31 queued · 0 lost', l1: 'tickets from the 10:52–11:20 outage', l2: 'sent at 11:21 · unique id', hot: true },
        { big: '12,400 refs', l1: 'prices and the day’s promotions', l2: 'in each till’s local database' },
      ],
      rule: 'The till sells without a server: prices, promotions, scale and stock are decided locally, the ticket is numbered on the spot;',
      rule2: 'the network only carries what was sold, and it can wait.',
      note: 'Products, prices, times and figures are a constructed example.',
    },
    rayons: {
      title: 'The manager’s board: departments, margin, expiry, stock-outs, till closing',
      alt: 'Left, five departments with the day’s sales as bars: grocery 420,000 dinars, margin 12 percent, 6 items expiring within 3 days, 7 stock-outs accented; fresh 310,000, margin 18 percent, 34 items expiring within 3 days accented, 2 stock-outs; drinks 190,000, margin 9 percent, 0, 3; household and hygiene 150,000, margin 16 percent, 0, 1; bakery and snacks 114,000, margin 28 percent, 12 same-day items, 0 stock-outs. Total 1,184,000 dinars, 640 tickets, average basket 1,850. Right, accented, till closing: day’s sales 1,184,000; expected cash 944,850; till 1 blind-counted 512,000 against 512,300 expected, gap minus 300; till 2, 432,550 against 432,550, gap 0; QR and card 183,150 matched; credit book 56,000 over 23 customers; bank deposit prepared. Below, the pending supplier receipt: 48 lines delivered this morning, 3 purchase prices changed, 2 lines missing, to validate before the new purchase prices enter the margin. Three tiles: 1,184,000 dinars, 640 tickets, 1,850 average basket; 34 fresh items to sell within 3 days, promotion proposed; till gap minus 300 on 944,850, 13 stock-outs to order tonight. Figures and departments are a constructed example.',
      cols: ['Department', 'Day’s sales', 'Margin', 'Expiry ≤ 3 d', 'Stock-outs'],
      rows: [
        { name: 'Grocery', sub: '4,120 refs · 36 % of sales', sales: 420000, salesT: '420,000 DA', margin: '12 %', dlc: '6 items', out: '7 refs', outHot: true },
        { name: 'Fresh', sub: 'dairy, meat, fruit and vegetables', sales: 310000, salesT: '310,000 DA', margin: '18 %', dlc: '34 items · 8 lots', dlcHot: true, out: '2 refs', hot: true },
        { name: 'Drinks', sub: 'water, juice, sodas', sales: 190000, salesT: '190,000 DA', margin: '9 %', dlc: '0', out: '3 refs' },
        { name: 'Household · hygiene', sub: 'detergent, hygiene, cleaning', sales: 150000, salesT: '150,000 DA', margin: '16 %', dlc: '0', out: '1 ref' },
        { name: 'Bakery · snacks', sub: 'bread, pastries, sandwiches', sales: 114000, salesT: '114,000 DA', margin: '28 %', dlc: '12 same-day items', out: '0' },
      ],
      legend: 'bar: day’s sales per department · gold: department with an expiry alert · margin computed on the last purchase price received',
      z: { title: 'Till closing · 21:10', sub: 'blind count, gap per till, deposit prepared', rows: [{ l: 'Day’s sales · 640 tickets', v: '1,184,000 DA' }, { l: 'Till 1 · counted / expected', v: '512,000 / 512,300 · −300', hot: true }, { l: 'Till 2 · counted / expected', v: '432,550 / 432,550 · 0' }, { l: 'QR · card · matched', v: '183,150' }, { l: 'Credit book · 23 customers', v: '56,000' }, { l: 'Bank deposit prepared', v: '940,000' }] },
      receipt: { title: 'Supplier receipt · awaiting validation', sub: 'purchase prices enter the margin only once validated', rows: [{ l: 'Lines delivered this morning', v: '48' }, { l: 'Purchase prices changed · missing', v: '3 · 2', hot: true }] },
      tiles: [
        { big: '1,184,000 · 640', l1: 'day’s sales · tickets', l2: 'average basket 1,850 DA' },
        { big: '34 items · 3 d', l1: 'fresh goods to sell before expiry', l2: 'promotion proposed to the manager, margin rule', hot: true },
        { big: '−300 · 13 refs', l1: 'till gap · stock-outs to order', l2: 'order proposal ready at 21:15' },
      ],
      rule: 'The manager reads per department the sales, the margin on the last purchase price, the close expiry dates and the stock-outs;',
      rule2: 'the till is blind-counted, the gap is per till, and the evening order is proposed, not guessed.',
      note: 'Departments, prices, gaps and figures are a constructed example.',
    },
  },
  ar: {
    ticket: {
      title: 'تذكرة واحدة في الصندوق والشبكة مقطوعة: مسح، ميزان، ترقية، مجموع، مزامنة',
      alt: 'شريط: سوبيرات بمساحة 180 متراً مربعاً، صندوقان، 12 400 مرجع، الثلاثاء 10:52، الشبكة مقطوعة منذ 10:52، الصندوق 1، التذكرة T-0417. يساراً التذكرة: حليب لتر، 2 في 140، 280؛ طماطم موزونة 1,240 كلغ بـ180 للكيلو، 223، سطر من الميزان؛ زيت 5 لترات، 1 150؛ ياغورت علبة 6، 6 في 45، ترقية 6 بسعر 5 طبّقها المحرك، ناقص 45، 225، مبرز؛ خبز، 2 في 15، 30؛ ماء 1,5 لتر علبة 6، 240؛ مسحوق غسيل 3 كلغ، 780؛ المجموع 2 928 دينار؛ مدفوع نقداً 3 000، الباقي 72؛ تذكرة مرقَّمة محلياً T-0417-C1. يميناً ما فعله الصندوق محلياً: قراءة الباركود، إيجاد السعر في القاعدة المحلية ذات 12 400 مرجع في 40 ميلي ثانية، تقييم الترقية في 15 ميلي ثانية، حجز المخزون محلياً، ترقيم التذكرة بتسلسل الصندوق، طباعة في 1,8 ثانية إجمالاً. أسفله مبرز ما انتظر الشبكة: 31 تذكرة صُفّت بين 10:52 و11:20، أُرسلت على 11:21 عند عودة الشبكة، 0 تكرار لأن لكل تذكرة معرّفاً فريداً، 0 ضائع، المخزون المركزي محدَّث على 11:21. ثلاث بطاقات: 1,8 ثانية للتذكرة، كله محلي؛ 31 تذكرة في الطابور، 0 ضائع؛ 12 400 مرجع وترقيات اليوم في القاعدة المحلية لكل صندوق. الأرقام والمنتجات مثال مبني.',
      header: 'سوبيرات 180 م² · صندوقان · 12 400 مرجع · الثلاثاء 10:52 · الشبكة مقطوعة · الصندوق 1 · التذكرة T-0417',
      ticket: { title: 'التذكرة T-0417-C1 · الصندوق 1 · 10:53', sub: 'مسح، ميزان، ترقية: كله يُقرَّر محلياً', totals: [{ l: 'المجموع', v: `⁦2${NB}928⁩ دج`, big: true }, { l: 'نقد مستلَم', v: `⁦3${NB}000⁩` }, { l: 'الباقي', v: '72', hot: true }] },
      lines: [
        { name: 'حليب 1 ل × 2', sub: 'باركود ممسوح · سعر القاعدة المحلية', amt: '280' },
        { name: 'طماطم 1,240 كلغ', sub: 'سطر من الميزان · 180 / كلغ', amt: '223' },
        { name: 'زيت 5 ل', sub: 'باركود ممسوح', amt: `⁦1${NB}150⁩` },
        { name: 'ياغورت × 6 · ترقية 6 بسعر 5', sub: 'محرك الترقيات · −45 · حارس الهامش موافق', amt: '225', hot: true },
        { name: 'خبز × 2', sub: 'زر سريع', amt: '30' },
        { name: 'ماء 1,5 ل · علبة 6', sub: 'باركود العلبة', amt: '240' },
        { name: 'مسحوق غسيل 3 كلغ', sub: 'باركود ممسوح · الدفعة L-2311', amt: '780' },
      ],
      local: { title: 'ما فعله الصندوق محلياً · 1,8 ث إجمالاً', sub: 'قاعدة محلية على الصندوق، لا نداء للخادم للبيع', rows: [{ l: 'قراءة الباركود ← إيجاد السعر', v: '40 مث · 12 400 مرجع محلي' }, { l: 'تقييم ترقيات اليوم', v: '15 مث · قواعد تُستلم عند الفتح' }, { l: 'حجز المخزون', v: 'محلي · الدفعة والصلاحية مسجَّلتان' }, { l: 'ترقيم التذكرة', v: 'T-0417-C1 · تسلسل الصندوق' }, { l: 'طباعة · فتح الدرج', v: '1,8 ث', hot: true }, { l: 'دفتر الدين، QR، البطاقة', v: 'القواعد نفسها، التذكرة نفسها' }] },
      sync: { title: 'ما انتظر الشبكة · 10:52 ← 11:21', sub: 'طابور، معرّف فريد لكل تذكرة', rows: [{ l: 'تذاكر في الطابور', v: '31' }, { l: 'أُرسلت عند عودة الشبكة', v: `${I('11:21')} · ${I('31 / 31')}`, hot: true }, { l: 'تكرارات · ضائعة', v: '0 · 0' }] },
      tiles: [
        { big: '1,8 ث', l1: 'للتذكرة، بشبكة أو دونها', l2: 'مسح، ميزان، ترقية، مخزون: محلياً' },
        { big: '31 في الطابور · 0 ضائع', l1: 'تذاكر انقطاع 10:52–11:20', l2: 'أُرسلت على 11:21 · معرّف فريد', hot: true },
        { big: `⁦12${NB}400⁩ مرجع`, l1: 'الأسعار وترقيات اليوم', l2: 'في القاعدة المحلية لكل صندوق' },
      ],
      rule: 'يبيع الصندوق دون خادم: الأسعار والترقيات والميزان والمخزون تُقرَّر محلياً، والتذكرة تُرقَّم في المكان؛',
      rule2: 'الشبكة لا تنقل إلا ما بيع، ويمكنها الانتظار.',
      note: 'المنتجات والأسعار والأوقات والأرقام مثال مبني.',
    },
    rayons: {
      title: 'لوحة المسيّر: الأقسام، الهامش، الصلاحية، النفاد، إغلاق الصناديق',
      alt: 'يساراً خمسة أقسام بمبيعات اليوم كأشرطة: البقالة 420 000 دينار، هامش 12 بالمئة، 6 مواد تنتهي صلاحيتها خلال 3 أيام، 7 نفادات مبرزة؛ الطازج 310 000، هامش 18 بالمئة، 34 مادة تنتهي خلال 3 أيام مبرزة، نفادان؛ المشروبات 190 000، هامش 9 بالمئة، 0، 3؛ التنظيف والنظافة 150 000، هامش 16 بالمئة، 0، 1؛ المخبزة والوجبات الخفيفة 114 000، هامش 28 بالمئة، 12 مادة لليوم، 0 نفاد. المجموع 1 184 000 دينار، 640 تذكرة، سلة متوسطة 1 850. يميناً مبرز إغلاق الصناديق: مبيعات اليوم 1 184 000؛ النقد المتوقع 944 850؛ الصندوق 1 عُدّ عدّاً أعمى 512 000 مقابل 512 300 متوقعة، فارق ناقص 300؛ الصندوق 2، 432 550 مقابل 432 550، فارق 0؛ QR وبطاقة 183 150 مطابَقة؛ دفتر الدين 56 000 على 23 زبوناً؛ إيداع بنكي مُعدّ. أسفله استلام المورّد المعلّق: 48 سطراً سُلّمت هذا الصباح، 3 أسعار شراء تغيّرت، سطران ناقصان، للمصادقة قبل أن تدخل أسعار الشراء الجديدة في الهامش. ثلاث بطاقات: 1 184 000 دينار، 640 تذكرة، 1 850 سلة متوسطة؛ 34 مادة طازجة تُصرَّف خلال 3 أيام، ترقية مقترحة؛ فارق صندوق ناقص 300 على 944 850، 13 نفاداً تُطلب الليلة. الأرقام والأقسام مثال مبني.',
      cols: ['القسم', 'مبيعات اليوم', 'الهامش', 'صلاحية ≤ 3 أيام', 'نفاد'],
      rows: [
        { name: 'البقالة', sub: '4 120 مرجعاً · 36 % من المبيعات', sales: 420000, salesT: `⁦420${NB}000⁩ دج`, margin: '12 %', dlc: '6 مواد', out: '7 مراجع', outHot: true },
        { name: 'الطازج', sub: 'ألبان، لحوم، خضر وفواكه', sales: 310000, salesT: `⁦310${NB}000⁩ دج`, margin: '18 %', dlc: '34 مادة · 8 دفعات', dlcHot: true, out: 'مرجعان', hot: true },
        { name: 'المشروبات', sub: 'ماء، عصير، غازيات', sales: 190000, salesT: `⁦190${NB}000⁩ دج`, margin: '9 %', dlc: '0', out: '3 مراجع' },
        { name: 'التنظيف · النظافة', sub: 'مساحيق، نظافة، منزل', sales: 150000, salesT: `⁦150${NB}000⁩ دج`, margin: '16 %', dlc: '0', out: 'مرجع واحد' },
        { name: 'المخبزة · الوجبات', sub: 'خبز، معجنات، سندويشات', sales: 114000, salesT: `⁦114${NB}000⁩ دج`, margin: '28 %', dlc: '12 مادة لليوم', out: '0' },
      ],
      legend: 'شريط: مبيعات اليوم لكل قسم · ذهبي: قسم بتنبيه صلاحية · الهامش يُحسب على آخر سعر شراء مستلَم',
      z: { title: 'إغلاق الصناديق · 21:10', sub: 'عدّ أعمى، فارق لكل صندوق، إيداع مُعدّ', rows: [{ l: 'مبيعات اليوم · 640 تذكرة', v: `⁦1${NB}184${NB}000⁩ دج` }, { l: 'الصندوق 1 · معدود / متوقع', v: `${I('512 000 / 512 300')} · −300`, hot: true }, { l: 'الصندوق 2 · معدود / متوقع', v: `${I('432 550 / 432 550')} · 0` }, { l: 'QR · بطاقة · مطابَقة', v: `⁦183${NB}150⁩` }, { l: 'دفتر الدين · 23 زبوناً', v: `⁦56${NB}000⁩` }, { l: 'إيداع بنكي مُعدّ', v: `⁦940${NB}000⁩` }] },
      receipt: { title: 'استلام المورّد · في انتظار المصادقة', sub: 'أسعار الشراء لا تدخل في الهامش إلا بعد المصادقة', rows: [{ l: 'أسطر سُلّمت هذا الصباح', v: '48' }, { l: 'أسعار شراء تغيّرت · ناقصة', v: '3 · 2', hot: true }] },
      tiles: [
        { big: `⁦1${NB}184${NB}000⁩ · 640`, l1: 'مبيعات اليوم · تذاكر', l2: 'سلة متوسطة 1 850 دج' },
        { big: '34 مادة · 3 أيام', l1: 'طازج يُصرَّف قبل انتهاء الصلاحية', l2: 'ترقية مقترحة على المسيّر، قاعدة الهامش', hot: true },
        { big: '−300 · 13 مرجعاً', l1: 'فارق الصندوق · نفادات تُطلب', l2: 'اقتراح الطلبية جاهز على 21:15' },
      ],
      rule: 'يقرأ المسيّر لكل قسم المبيعات والهامش على آخر سعر شراء والصلاحيات القريبة والنفادات؛',
      rule2: 'يُعدّ الصندوق عدّاً أعمى، والفارق لكل صندوق، وطلبية المساء تُقترح لا تُخمَّن.',
      note: 'الأقسام والأسعار والفوارق والأرقام مثال مبني.',
    },
  },
};
