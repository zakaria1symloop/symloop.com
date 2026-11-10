// Bespoke animated figures for the 2027 "three companies, one manager, three files" post.
//  model():        three legal entities of one group at the top; below, the shared
//                  reference data (customers, products, users) with visibility
//                  badges, and the per-company data (numbering series, bank
//                  accounts, depots, price lists, document header) in three
//                  columns; connectors from the shared row to each company.
//  intercompany(): one inter-company transfer of 200 units from Algiers to Sétif:
//                  a five-step strip, the mirrored documents it writes in each
//                  company (delivery note + sales invoice in A, reception +
//                  purchase invoice in B, stock movements with lot), and the group
//                  view where the pair is tagged intra-group and the two balances
//                  cancel. Steps appear, mirrors draw.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function draw(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{stroke-dashoffset:1000}${(at + dur).toFixed(1)}%,100%{stroke-dashoffset:0}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
const I = (x) => `⁦${x}⁩`;

export function model(t, rtl) {
  const c = ctx(rtl); const P = 'gm'; const css = []; const H = 620;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  // companies row
  const cx = [80, 440, 800], cw = 320, cy = 100, ch = 64;
  t.companies.forEach((co, i) => { s += `<g style="animation:${show(css, P, `c${i}`, 2 + i * 1.5)}">` + rect(c, cx[i], cy, cw, ch, { stroke: co.hot ? C.accent : C.line2, fill: co.hot ? 'rgba(242,181,68,0.06)' : C.fill }) + text(c, cx[i] + 12, cy + 22, co.name, { size: 12.5, fill: co.hot ? C.accent : C.fg, weight: 500 }) + text(c, cx[i] + 12, cy + 39, co.l1, { size: 9, font: 'mono', fill: C.fg55 }) + text(c, cx[i] + 12, cy + 53, co.l2, { size: 9, font: 'mono', fill: C.fg55 }) + '</g>'; });
  // shared row
  const sy = 196, sh = 70;
  t.companies.forEach((co, i) => { const x1 = cx[i] + cw / 2; s += `<path d="M${c.X(x1)} ${cy + ch} L${c.X(x1)} ${sy}" fill="none" stroke="${C.line2}" stroke-width="1" pathLength="1000" style="stroke-dashoffset:0;animation:${draw(css, P, `l${i}`, 7, 2)}"/>`; });
  s += `<g style="animation:${show(css, P, 'sl', 8)}">` + rect(c, 76, sy - 21, 560, 16, { stroke: 'none', fill: '#0b0f19' }) + text(c, 80, sy - 10, t.sharedLabel, { size: 10, font: 'mono', fill: C.fg35, letter: 1.5, upper: true }) + '</g>';
  t.shared.forEach((sh2, i) => {
    const x = 80 + i * 350; const at = 9 + i * 2;
    s += `<g style="animation:${show(css, P, `s${i}`, at)}">` + rect(c, x, sy, 330, sh, { stroke: C.accent, fill: 'rgba(242,181,68,0.06)' }) + text(c, x + 12, sy + 20, sh2.name, { size: 11.5, fill: C.accent, weight: 500 }) + text(c, x + 12, sy + 36, sh2.l1, { size: 8.5, font: 'mono', fill: C.fg55 }) + text(c, x + 12, sy + 49, sh2.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + text(c, x + 12, sy + 62, sh2.l3, { size: 8.5, font: 'mono', fill: C.fg70 }) + '</g>';
  });
  // per-company rows
  const py = 300, rowH = 28;
  s += `<g style="animation:${show(css, P, 'pl', 16)}">` + text(c, 80, py - 10, t.ownLabel, { size: 10, font: 'mono', fill: C.fg35, letter: 1.5, upper: true }) + line(c, 80, py - 2, 1120, py - 2, { stroke: C.line2 }) + '</g>';
  t.own.forEach((r, i) => {
    const y = py + 16 + i * rowH; const at = 17 + i * 2;
    s += `<g style="animation:${show(css, P, `o${i}`, at)}">` + text(c, 80, y, r.k, { size: 9.5, font: 'mono', fill: C.fg70 });
    r.v.forEach((v, j) => { s += text(c, cx[j] + (j === 0 ? 170 : 0), y, v, { size: 9.5, font: 'mono', fill: j === 2 && r.euro ? C.accent : C.fg }); });
    s += line(c, 80, y + 9, 1120, y + 9, { stroke: C.line }) + '</g>';
  });
  const ry = py + 16 + t.own.length * rowH + 14;
  s += text(c, 80, ry + 8, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, ry + 28, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, ry + 48, t.rule3, { size: 12.5, fill: C.fg }) + text(c, 80, ry + 72, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"],svg path[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

export function intercompany(t, rtl) {
  const c = ctx(rtl); const P = 'ic'; const css = []; const H = 620;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  // steps strip
  const sx = 80, sy = 104, sw = 196, shh = 54;
  t.steps.forEach((st, i) => { const x = sx + i * 211; s += `<g style="animation:${show(css, P, `st${i}`, 2 + i * 2.5)}">` + rect(c, x, sy, sw, shh, { stroke: i === 1 ? C.accent : C.line2, fill: i === 1 ? 'rgba(242,181,68,0.06)' : C.fill }) + text(c, x + 10, sy + 18, st.t, { size: 10.5, fill: i === 1 ? C.accent : C.fg }) + text(c, x + 10, sy + 33, st.l1, { size: 8.5, font: 'mono', fill: C.fg55 }) + text(c, x + 10, sy + 46, st.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; if (i < 4) s += `<g style="animation:${show(css, P, `sa${i}`, 3 + i * 2.5)}">` + text(c, x + sw + 4, sy + 32, rtl ? '←' : '→', { size: 12, fill: C.fg35 }) + '</g>'; });
  // mirrored documents: company A left, company B right
  const ay = 190, bw = 470, bh = 180;
  const cols = [{ x: 80, docs: t.a, label: t.aLabel }, { x: 650, docs: t.b, label: t.bLabel }];
  cols.forEach((col, k) => {
    s += `<g style="animation:${show(css, P, `cl${k}`, 14 + k * 3)}">` + text(c, col.x, ay - 10, col.label, { size: 10, font: 'mono', fill: C.fg35, letter: 1.5, upper: true }) + rect(c, col.x, ay, bw, bh, { stroke: C.line2, fill: C.fill }) + '</g>';
    col.docs.forEach((d, i) => { const y = ay + 14 + i * 40; s += `<g style="animation:${show(css, P, `d${k}${i}`, 16 + k * 3 + i * 2)}">` + rect(c, col.x + 12, y, bw - 24, 32, { stroke: d.hot ? C.accent : C.line2, fill: d.hot ? 'rgba(242,181,68,0.06)' : 'none' }) + text(c, col.x + 22, y + 14, d.t, { size: 10, fill: d.hot ? C.accent : C.fg }) + text(c, col.x + 22, y + 26, d.sub, { size: 8.5, font: 'mono', fill: C.fg55 }) + text(c, col.x + bw - 22, y + 20, d.amt, { size: 10, font: 'mono', fill: d.hot ? C.accent : C.fg70, anchor: 'end' }) + '</g>'; });
  });
  // mirror arrows between the two boxes
  [0, 1, 2, 3].forEach((i) => { const y = ay + 14 + i * 40 + 16; s += `<path d="M${c.X(80 + bw)} ${y} L${c.X(650)} ${y}" fill="none" stroke="${i < 2 ? C.accent : C.line2}" stroke-width="1" stroke-dasharray="4 3" pathLength="1000" style="stroke-dashoffset:0;animation:${draw(css, P, `m${i}`, 22 + i * 1.5, 2.5)}"/>`; });
  s += `<g style="animation:${show(css, P, 'ml', 26)}">` + text(c, 600, ay + bh + 14, t.mirror, { size: 8.5, font: 'mono', fill: C.accent, anchor: 'middle' }) + '</g>';
  // group view
  const gy = 416;
  s += `<g style="animation:${show(css, P, 'g', 30)}">` + text(c, 80, gy - 10, t.groupLabel, { size: 10, font: 'mono', fill: C.fg35, letter: 1.5, upper: true }) + '</g>';
  t.group.forEach((g, i) => { const x = 80 + i * 262; s += `<g style="animation:${show(css, P, `g${i}`, 31 + i * 2)}">` + rect(c, x, gy, 250, 64, { stroke: g.hot ? C.accent : C.line2, fill: g.hot ? 'rgba(242,181,68,0.06)' : C.fill }) + text(c, x + 12, gy + 24, g.big, { size: 15, font: 'mono', fill: g.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, gy + 42, g.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, gy + 56, g.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  s += text(c, 80, 516, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, 536, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, 556, t.rule3, { size: 12.5, fill: C.fg }) + text(c, 80, 582, t.note, { size: 10, font: 'mono', fill: C.fg55 }) + text(c, 80, 598, t.note2, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"],svg path[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    model: {
      title: 'Un groupe, trois sociétés, une application : ce qui est partagé et ce qui appartient à chacune',
      alt: 'En haut, trois sociétés d’un même groupe : Benali Distribution à Alger, Benali Sétif, et Benali Import à Paris qui facture en euros. Au milieu, en accent, les référentiels partagés : clients, avec une visibilité par société ; produits, avec un prix par société ; utilisateurs et rôles, avec des droits par société. En bas, un tableau de ce qui appartient à chaque société : série de numérotation, comptes bancaires, dépôts, grilles de prix, en-tête et mentions des documents, devise, comptable destinataire des exports. Les données sont un exemple construit.',
      companies: [
        { name: 'Benali Distribution · Alger', l1: 'DZD · 2 dépôts · 28 utilisateurs', l2: 'vend aux détaillants de l’Ouest et du Centre' },
        { name: 'Benali Sétif', l1: 'DZD · 1 dépôt · 11 utilisateurs', l2: 'vend aux détaillants de l’Est · achète à Alger' },
        { name: 'Benali Import · Paris', l1: 'EUR · 0 dépôt · 3 utilisateurs', l2: 'facture les clients en France', hot: true },
      ],
      sharedLabel: 'Partagé par le groupe · une seule fiche, une visibilité par société',
      shared: [
        { name: 'Clients', l1: 'une fiche par client, clé téléphone', l2: 'visible par : Alger, Sétif, ou les deux', l3: 'encours et plafond par société' },
        { name: 'Produits', l1: 'un catalogue : modèle, variantes, lots', l2: 'prix et disponibilité par société', l3: 'photos et descriptions une fois' },
        { name: 'Utilisateurs et rôles', l1: 'un compte par personne', l2: 'rôle par société : vendeur à Sétif, lecteur à Alger', l3: 'le gérant voit les trois' },
      ],
      ownLabel: 'Propre à chaque société · ne se mélange jamais',
      own: [
        { k: 'numérotation', v: ['FA-2026-0412', 'FS-2026-0088', 'FP-2026-0019'] },
        { k: 'comptes bancaires', v: ['2 comptes DZD', '1 compte DZD', '1 compte EUR'], euro: true },
        { k: 'dépôts et stock', v: ['Alger A, Alger B', 'Sétif', 'aucun · drop-ship'] },
        { k: 'grilles de prix', v: ['détail, gros', 'détail, gros', 'export EUR'], euro: true },
        { k: 'en-tête, mentions', v: ['réglés avec le comptable', 'réglés avec le comptable', 'réglés avec le comptable FR'] },
        { k: 'exports comptables', v: ['cabinet Alger · mensuel', 'cabinet Sétif · mensuel', 'cabinet Paris · mensuel'] },
      ],
      rule: 'La société est une dimension de chaque document, pas une autre application : une facture, un mouvement de stock, un encaissement appartiennent à une société et une seule.',
      rule2: 'Les clients, les produits et les personnes existent une fois pour le groupe ; ce que chaque société en voit, et à quel prix, est une règle par société.',
      rule3: 'Ce qui doit figurer sur les documents de chaque société se règle avec son comptable ; l’application l’imprime, elle ne le décide pas.',
      note: 'sociétés, effectifs et numéros : exemple construit · la société parisienne suit le guide sur les deux devises pour l’encaissement en euros',
    },
    intercompany: {
      title: 'Un transfert inter-sociétés : 200 unités d’Alger à Sétif, deux jeux de documents',
      alt: 'En haut, cinq étapes : Sétif manque de 200 unités, le responsable crée un transfert inter-sociétés, l’application écrit les documents des deux côtés, le camion part avec le bon de livraison et le lot, Sétif réceptionne par scan. Au milieu, deux encadrés reliés par des flèches en miroir : chez Alger, un bon de livraison et une facture de vente à Sétif de 1 200 000 dinars au prix de transfert, et une sortie de stock de 200 unités du lot L2410B ; chez Sétif, une réception et une facture d’achat d’Alger du même montant, et une entrée de stock des mêmes 200 unités du même lot. En bas, la vue groupe : la paire est marquée intra-groupe, la créance d’Alger et la dette de Sétif s’annulent, le chiffre d’affaires du groupe n’en tient pas compte. Les données sont un exemple construit.',
      steps: [
        { t: '1 · Sétif manque', l1: '200 unités HT-FLEU-5', l2: 'stock Alger : 640 dispo' },
        { t: '2 · Un transfert', l1: 'inter-sociétés, prix de transfert', l2: 'règle écrite par le gérant' },
        { t: '3 · Deux jeux écrits', l1: 'vente chez Alger, achat chez Sétif', l2: 'même lot, même quantité' },
        { t: '4 · Le camion part', l1: 'bon de livraison, lot L2410B', l2: 'tournée du mardi' },
        { t: '5 · Sétif réceptionne', l1: 'scan, écart noté', l2: 'stock Sétif + 200' },
      ],
      aLabel: 'Chez Benali Distribution · Alger', bLabel: 'Chez Benali Sétif',
      a: [
        { t: 'Bon de livraison BL-A-2026-0931', sub: 'client : Benali Sétif · 200 × HT-FLEU-5 · lot L2410B', amt: '200 u', hot: true },
        { t: 'Facture de vente FA-2026-0412', sub: 'prix de transfert 6 000 DA · 30 jours', amt: '1 200 000 DA', hot: true },
        { t: 'Sortie de stock · dépôt Alger A', sub: '− 200 · lot L2410B · document BL-A-2026-0931', amt: '− 200' },
        { t: 'Créance sur Benali Sétif', sub: 'compte client intra-groupe · échéance 10 déc', amt: '1 200 000 DA' },
      ],
      b: [
        { t: 'Réception RC-S-2026-0144', sub: 'fournisseur : Benali Distribution · scan · 200 / 200', amt: '200 u', hot: true },
        { t: 'Facture d’achat FS-ACH-2026-0203', sub: 'miroir de FA-2026-0412 · jamais retapée', amt: '1 200 000 DA', hot: true },
        { t: 'Entrée de stock · dépôt Sétif', sub: '+ 200 · lot L2410B · document RC-S-2026-0144', amt: '+ 200' },
        { t: 'Dette envers Benali Distribution', sub: 'compte fournisseur intra-groupe · échéance 10 déc', amt: '1 200 000 DA' },
      ],
      mirror: 'écrit en miroir, une seule fois',
      groupLabel: 'Vue groupe · le même soir',
      group: [
        { big: '1 200 000 ↔ 1 200 000', l1: 'créance et dette intra-groupe', l2: 's’annulent dans la vue groupe', hot: true },
        { big: '0 DA', l1: 'ajouté au chiffre d’affaires groupe', l2: 'la vente est marquée intra-groupe' },
        { big: '200 · L2410B', l1: 'même stock, autre société', l2: 'le lot garde son historique' },
        { big: '2 exports', l1: 'un par comptable', l2: 'documents de chaque société' },
      ],
      rule: 'Un transfert entre deux sociétés du groupe est une vente chez l’une et un achat chez l’autre ; l’application écrit les deux jeux de documents en miroir, et personne ne retape le second.',
      rule2: 'La vue groupe marque la paire intra-groupe : les deux soldes s’annulent, et la vente ne compte pas dans le chiffre d’affaires du groupe, selon la définition courante des comptes consolidés.',
      rule3: 'Le prix de transfert est une règle écrite par le gérant avec le comptable ; ce guide ne dit pas lequel choisir.',
      note: 'sociétés, numéros, quantités et montants : exemple construit · le lot garde son historique d’une société à l’autre, comme dans le guide sur la traçabilité',
      note2: 'ce que chaque société doit déclarer, et comment, est hors de ce guide : comptable et conseil',
    },
  },
  en: {
    model: {
      title: 'One group, three companies, one application: what is shared and what belongs to each',
      alt: 'At the top, three companies of one group: Benali Distribution in Algiers, Benali Sétif, and Benali Import in Paris which invoices in euros. In the middle, accented, the shared reference data: customers, with visibility per company; products, with a price per company; users and roles, with rights per company. At the bottom, a table of what belongs to each company: numbering series, bank accounts, depots, price lists, document header and mentions, currency, accountant receiving the exports. The data is a constructed example.',
      companies: [
        { name: 'Benali Distribution · Algiers', l1: 'DZD · 2 depots · 28 users', l2: 'sells to West and Centre retailers' },
        { name: 'Benali Sétif', l1: 'DZD · 1 depot · 11 users', l2: 'sells to East retailers · buys from Algiers' },
        { name: 'Benali Import · Paris', l1: 'EUR · 0 depot · 3 users', l2: 'invoices customers in France', hot: true },
      ],
      sharedLabel: 'Shared by the group · one record, visibility per company',
      shared: [
        { name: 'Customers', l1: 'one record per customer, phone as key', l2: 'visible to: Algiers, Sétif, or both', l3: 'receivables and limit per company' },
        { name: 'Products', l1: 'one catalogue: model, variants, lots', l2: 'price and availability per company', l3: 'photos and descriptions once' },
        { name: 'Users and roles', l1: 'one account per person', l2: 'role per company: seller in Sétif, reader in Algiers', l3: 'the manager sees all three' },
      ],
      ownLabel: 'Own to each company · never mixed',
      own: [
        { k: 'numbering', v: ['FA-2026-0412', 'FS-2026-0088', 'FP-2026-0019'] },
        { k: 'bank accounts', v: ['2 DZD accounts', '1 DZD account', '1 EUR account'], euro: true },
        { k: 'depots and stock', v: ['Algiers A, Algiers B', 'Sétif', 'none · drop-ship'] },
        { k: 'price lists', v: ['retail, wholesale', 'retail, wholesale', 'export EUR'], euro: true },
        { k: 'header, mentions', v: ['set with the accountant', 'set with the accountant', 'set with the FR accountant'] },
        { k: 'accounting exports', v: ['Algiers firm · monthly', 'Sétif firm · monthly', 'Paris firm · monthly'] },
      ],
      rule: 'The company is a dimension of every document, not another application: an invoice, a stock movement, a receipt belong to one company and one only.',
      rule2: 'Customers, products and people exist once for the group; what each company sees of them, and at what price, is a rule per company.',
      rule3: 'What must appear on each company’s documents is set with its accountant; the application prints it, it does not decide it.',
      note: 'companies, headcounts and numbers: constructed example · the Paris company follows the two-currency guide for collecting in euros',
    },
    intercompany: {
      title: 'One inter-company transfer: 200 units from Algiers to Sétif, two sets of documents',
      alt: 'At the top, five steps: Sétif is short of 200 units, the manager creates an inter-company transfer, the application writes the documents on both sides, the truck leaves with the delivery note and the lot, Sétif receives by scan. In the middle, two boxes linked by mirror arrows: at Algiers, a delivery note and a sales invoice to Sétif of 1,200,000 dinars at the transfer price, and a stock issue of 200 units of lot L2410B; at Sétif, a reception and a purchase invoice from Algiers of the same amount, and a stock receipt of the same 200 units of the same lot. At the bottom, the group view: the pair is tagged intra-group, Algiers’ receivable and Sétif’s payable cancel out, group revenue ignores it. The data is a constructed example.',
      steps: [
        { t: '1 · Sétif is short', l1: '200 units HT-FLEU-5', l2: 'Algiers stock: 640 available' },
        { t: '2 · One transfer', l1: 'inter-company, transfer price', l2: 'rule written by the manager' },
        { t: '3 · Two sets written', l1: 'sale at Algiers, purchase at Sétif', l2: 'same lot, same quantity' },
        { t: '4 · The truck leaves', l1: 'delivery note, lot L2410B', l2: 'Tuesday round' },
        { t: '5 · Sétif receives', l1: 'scan, gap recorded', l2: 'Sétif stock + 200' },
      ],
      aLabel: 'At Benali Distribution · Algiers', bLabel: 'At Benali Sétif',
      a: [
        { t: 'Delivery note BL-A-2026-0931', sub: 'customer: Benali Sétif · 200 × HT-FLEU-5 · lot L2410B', amt: '200 u', hot: true },
        { t: 'Sales invoice FA-2026-0412', sub: 'transfer price 6,000 DA · 30 days', amt: '1,200,000 DA', hot: true },
        { t: 'Stock issue · Algiers depot A', sub: '− 200 · lot L2410B · document BL-A-2026-0931', amt: '− 200' },
        { t: 'Receivable from Benali Sétif', sub: 'intra-group customer account · due 10 Dec', amt: '1,200,000 DA' },
      ],
      b: [
        { t: 'Reception RC-S-2026-0144', sub: 'supplier: Benali Distribution · scan · 200 / 200', amt: '200 u', hot: true },
        { t: 'Purchase invoice FS-ACH-2026-0203', sub: 'mirror of FA-2026-0412 · never retyped', amt: '1,200,000 DA', hot: true },
        { t: 'Stock receipt · Sétif depot', sub: '+ 200 · lot L2410B · document RC-S-2026-0144', amt: '+ 200' },
        { t: 'Payable to Benali Distribution', sub: 'intra-group supplier account · due 10 Dec', amt: '1,200,000 DA' },
      ],
      mirror: 'written as a mirror, once',
      groupLabel: 'Group view · the same evening',
      group: [
        { big: '1,200,000 ↔ 1,200,000', l1: 'intra-group receivable and payable', l2: 'cancel out in the group view', hot: true },
        { big: '0 DA', l1: 'added to group revenue', l2: 'the sale is tagged intra-group' },
        { big: '200 · L2410B', l1: 'same stock, other company', l2: 'the lot keeps its history' },
        { big: '2 exports', l1: 'one per accountant', l2: 'each company’s documents' },
      ],
      rule: 'A transfer between two group companies is a sale at one and a purchase at the other; the application writes both sets of documents as mirrors, and nobody retypes the second.',
      rule2: 'The group view tags the pair intra-group: the two balances cancel out, and the sale does not count in group revenue, following the common definition of consolidated accounts.',
      rule3: 'The transfer price is a rule written by the manager with the accountant; this guide does not say which to choose.',
      note: 'companies, numbers, quantities and amounts: constructed example · the lot keeps its history from one company to the other, as in the traceability guide',
      note2: 'what each company must declare, and how, is outside this guide: accountant and counsel',
    },
  },
  ar: {
    model: {
      title: 'مجموعة واحدة، ثلاث شركات، تطبيق واحد: ما هو مشترك وما يخص كل واحدة',
      alt: 'في الأعلى ثلاث شركات لمجموعة واحدة: بن علي للتوزيع في الجزائر، بن علي سطيف، وبن علي للاستيراد في باريس التي تفوتر باليورو. في الوسط، مميزة، المراجع المشتركة: الزبائن برؤية لكل شركة؛ المنتجات بسعر لكل شركة؛ المستخدمون والأدوار بصلاحيات لكل شركة. في الأسفل جدول بما يخص كل شركة: سلسلة الترقيم، الحسابات البنكية، المستودعات، شبكات الأسعار، ترويسة المستندات وبياناتها، العملة، المحاسب الذي يتلقى التصديرات. والبيانات مثال مبني.',
      companies: [
        { name: 'بن علي للتوزيع · الجزائر', l1: 'دج · مستودعان · 28 مستخدماً', l2: 'تبيع لتجار تجزئة الغرب والوسط' },
        { name: 'بن علي سطيف', l1: 'دج · مستودع واحد · 11 مستخدماً', l2: 'تبيع لتجار تجزئة الشرق · تشتري من الجزائر' },
        { name: 'بن علي للاستيراد · باريس', l1: 'يورو · لا مستودع · 3 مستخدمين', l2: 'تفوتر الزبائن في فرنسا', hot: true },
      ],
      sharedLabel: 'مشترك في المجموعة · بطاقة واحدة، رؤية لكل شركة',
      shared: [
        { name: 'الزبائن', l1: 'بطاقة لكل زبون، الهاتف مفتاحاً', l2: 'مرئية لـ: الجزائر، سطيف، أو كلتيهما', l3: 'ذمم وسقف لكل شركة' },
        { name: 'المنتجات', l1: 'كتالوج واحد: طراز، متغيرات، دفعات', l2: 'سعر وتوفر لكل شركة', l3: 'صور وأوصاف مرة واحدة' },
        { name: 'المستخدمون والأدوار', l1: 'حساب واحد لكل شخص', l2: 'دور لكل شركة: بائع في سطيف، قارئ في الجزائر', l3: 'المسيّر يرى الثلاث' },
      ],
      ownLabel: 'خاص بكل شركة · لا يختلط أبداً',
      own: [
        { k: 'الترقيم', v: [I('FA-2026-0412'), I('FS-2026-0088'), I('FP-2026-0019')] },
        { k: 'الحسابات البنكية', v: ['حسابان بالدينار', 'حساب بالدينار', 'حساب باليورو'], euro: true },
        { k: 'المستودعات والمخزون', v: ['الجزائر أ، الجزائر ب', 'سطيف', 'لا شيء · شحن مباشر'] },
        { k: 'شبكات الأسعار', v: ['تجزئة، جملة', 'تجزئة، جملة', 'تصدير باليورو'], euro: true },
        { k: 'الترويسة والبيانات', v: ['تُضبط مع المحاسب', 'تُضبط مع المحاسب', 'تُضبط مع المحاسب الفرنسي'] },
        { k: 'التصديرات المحاسبية', v: ['مكتب الجزائر · شهري', 'مكتب سطيف · شهري', 'مكتب باريس · شهري'] },
      ],
      rule: 'الشركة بُعد في كل مستند لا تطبيق آخر: الفاتورة وحركة المخزون والتحصيل تخص شركة واحدة لا غير.',
      rule2: 'الزبائن والمنتجات والأشخاص يوجدون مرة واحدة للمجموعة؛ وما تراه كل شركة منهم وبأي سعر قاعدة لكل شركة.',
      rule3: 'ما يجب أن يظهر على مستندات كل شركة يُضبط مع محاسبها؛ والتطبيق يطبعه ولا يقرره.',
      note: 'الشركات والأعداد والأرقام: مثال مبني · الشركة الباريسية تتبع دليل العملتين للتحصيل باليورو',
    },
    intercompany: {
      title: 'تحويل بين شركتين: 200 وحدة من الجزائر إلى سطيف، مجموعتا مستندات',
      alt: 'في الأعلى خمس خطوات: سطيف تنقصها 200 وحدة، المسؤول ينشئ تحويلاً بين الشركتين، التطبيق يكتب المستندات في الجانبين، الشاحنة تنطلق بوصل التسليم والدفعة، سطيف تستلم بالمسح. في الوسط إطاران يربطهما سهما مرآة: عند الجزائر وصل تسليم وفاتورة بيع إلى سطيف بـ 1,200,000 دينار بسعر التحويل، وخروج مخزون 200 وحدة من الدفعة L2410B؛ وعند سطيف استلام وفاتورة شراء من الجزائر بالمبلغ نفسه، ودخول مخزون الوحدات الـ 200 نفسها من الدفعة نفسها. في الأسفل رؤية المجموعة: الزوج موسوم داخل المجموعة، ذمة الجزائر ودين سطيف يتعادلان، ورقم أعمال المجموعة لا يحسبه. والبيانات مثال مبني.',
      steps: [
        { t: '1 · سطيف تنقصها', l1: `200 وحدة ${I('HT-FLEU-5')}`, l2: 'مخزون الجزائر: 640 متاحة' },
        { t: '2 · تحويل واحد', l1: 'بين الشركتين، سعر تحويل', l2: 'قاعدة يكتبها المسيّر' },
        { t: '3 · مجموعتان تُكتبان', l1: 'بيع عند الجزائر، شراء عند سطيف', l2: 'الدفعة نفسها، الكمية نفسها' },
        { t: '4 · الشاحنة تنطلق', l1: `وصل تسليم، دفعة ${I('L2410B')}`, l2: 'جولة الثلاثاء' },
        { t: '5 · سطيف تستلم', l1: 'مسح، فارق مسجَّل', l2: 'مخزون سطيف + 200' },
      ],
      aLabel: 'عند بن علي للتوزيع · الجزائر', bLabel: 'عند بن علي سطيف',
      a: [
        { t: `وصل تسليم ${I('BL-A-2026-0931')}`, sub: `الزبون: بن علي سطيف · 200 × ${I('HT-FLEU-5')} · دفعة ${I('L2410B')}`, amt: '200 و', hot: true },
        { t: `فاتورة بيع ${I('FA-2026-0412')}`, sub: `سعر تحويل ${I('6,000 DA')} · 30 يوماً`, amt: I('1,200,000 DA'), hot: true },
        { t: 'خروج مخزون · مستودع الجزائر أ', sub: `${I('− 200')} · دفعة ${I('L2410B')} · مستند ${I('BL-A-2026-0931')}`, amt: I('− 200') },
        { t: 'ذمة على بن علي سطيف', sub: 'حساب زبون داخل المجموعة · استحقاق 10 ديس', amt: I('1,200,000 DA') },
      ],
      b: [
        { t: `استلام ${I('RC-S-2026-0144')}`, sub: `المورد: بن علي للتوزيع · مسح · ${I('200 / 200')}`, amt: '200 و', hot: true },
        { t: `فاتورة شراء ${I('FS-ACH-2026-0203')}`, sub: `مرآة ${I('FA-2026-0412')} · لا تُعاد كتابتها أبداً`, amt: I('1,200,000 DA'), hot: true },
        { t: 'دخول مخزون · مستودع سطيف', sub: `${I('+ 200')} · دفعة ${I('L2410B')} · مستند ${I('RC-S-2026-0144')}`, amt: I('+ 200') },
        { t: 'دين لبن علي للتوزيع', sub: 'حساب مورد داخل المجموعة · استحقاق 10 ديس', amt: I('1,200,000 DA') },
      ],
      mirror: 'يُكتب مرآةً، مرة واحدة',
      groupLabel: 'رؤية المجموعة · المساء نفسه',
      group: [
        { big: I('1,200,000 ↔ 1,200,000'), l1: 'ذمة ودين داخل المجموعة', l2: 'يتعادلان في رؤية المجموعة', hot: true },
        { big: I('0 DA'), l1: 'يُضاف إلى رقم أعمال المجموعة', l2: 'البيع موسوم داخل المجموعة' },
        { big: I('200 · L2410B'), l1: 'المخزون نفسه، شركة أخرى', l2: 'الدفعة تحتفظ بتاريخها' },
        { big: 'تصديران', l1: 'واحد لكل محاسب', l2: 'مستندات كل شركة' },
      ],
      rule: 'التحويل بين شركتين في المجموعة بيع عند إحداهما وشراء عند الأخرى؛ ويكتب التطبيق مجموعتي المستندات مرآةً، ولا أحد يعيد كتابة الثانية.',
      rule2: 'رؤية المجموعة تسم الزوج داخل المجموعة: الرصيدان يتعادلان، والبيع لا يُحسب في رقم أعمال المجموعة وفق التعريف الشائع للحسابات الموحَّدة.',
      rule3: 'سعر التحويل قاعدة يكتبها المسيّر مع المحاسب؛ وهذا الدليل لا يقول أيها يُختار.',
      note: 'الشركات والأرقام والكميات والمبالغ: مثال مبني · الدفعة تحتفظ بتاريخها من شركة إلى أخرى كما في دليل التتبع',
      note2: 'ما يجب أن تصرّح به كل شركة وكيف خارج هذا الدليل: المحاسب والمستشار',
    },
  },
};
