// Bespoke animated figures for the 2027 "nobody knows what a finished product really costs us" post.
//  bom():   a two-level bill of materials for a bottled juice: finished pack →
//           bulk juice sub-assembly + packaging, quantities per 1,000 bottles
//           with scrap rates, the routing (three operations with durations
//           and line rate) and the version badge. Nodes appear level by level.
//  batch(): one production order for 6,000 bottles: planned vs actual per
//           component with the lots consumed, time planned vs actual, good and
//           rejected output, yield, the finished lot entered into stock, and
//           the workshop cost per bottle planned vs actual. Bars grow.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function draw(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{stroke-dashoffset:1000}${(at + dur).toFixed(1)}%,100%{stroke-dashoffset:0}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function grow(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
const I = (x) => `⁦${x}⁩`;

function node(c, x, y, w, h, title, lines, hot) {
  let s = rect(c, x, y, w, h, { stroke: hot ? C.accent : C.line2, fill: hot ? 'rgba(242,181,68,0.06)' : C.fill });
  s += text(c, x + 8, y + 16, title, { size: 10.5, fill: hot ? C.accent : C.fg });
  lines.forEach((l, i) => { s += text(c, x + 8, y + 30 + i * 12, l, { size: 8.5, font: 'mono', fill: C.fg55 }); });
  return s;
}

export function bom(t, rtl) {
  const c = ctx(rtl); const P = 'bm'; const css = []; const H = 620;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  // level 0
  const rx = 380, ry = 100, rw = 440, rh = 58;
  s += `<g style="animation:${show(css, P, 'r', 2)}">` + node(c, rx, ry, rw, rh, t.root.title, t.root.lines, true) + '</g>';
  s += `<g style="animation:${show(css, P, 'v', 3)}">` + rect(c, rx + rw - 150, ry + 8, 140, 22, { stroke: C.accent, fill: 'rgba(242,181,68,0.18)' }) + text(c, rx + rw - 142, ry + 23, t.version, { size: 9, font: 'mono', fill: C.accent }) + '</g>';
  // level 1: sub-assembly (left) and packaging group (right)
  const l1y = 200, l1h = 58; const ax = 80, aw = 360; const px = 620, pw = 500;
  [[ax, aw, t.sub, 'a'], [px, pw, t.pack, 'p']].forEach(([x, w, n, id]) => {
    s += `<path d="M${c.X(rx + rw / 2)} ${ry + rh} L${c.X(rx + rw / 2)} ${ry + rh + 20} L${c.X(x + w / 2)} ${ry + rh + 20} L${c.X(x + w / 2)} ${l1y}" fill="none" stroke="${C.line2}" stroke-width="1" pathLength="1000" style="stroke-dashoffset:0;animation:${draw(css, P, `l${id}`, 5, 3)}"/>`;
    s += `<g style="animation:${show(css, P, `n${id}`, 8)}">` + node(c, x, l1y, w, l1h, n.title, n.lines, id === 'a') + '</g>';
  });
  // level 2 under sub-assembly: raw materials
  const l2y = 300, l2h = 66; const mw = 112;
  t.materials.forEach((m, i) => { const x = ax + i * (mw + 12); const at = 12 + i * 1.5; s += `<path d="M${c.X(ax + aw / 2)} ${l1y + l1h} L${c.X(ax + aw / 2)} ${l1y + l1h + 18} L${c.X(x + mw / 2)} ${l1y + l1h + 18} L${c.X(x + mw / 2)} ${l2y}" fill="none" stroke="${C.line2}" stroke-width="1" pathLength="1000" style="stroke-dashoffset:0;animation:${draw(css, P, `lm${i}`, at - 1, 2)}"/>` + `<g style="animation:${show(css, P, `m${i}`, at)}">` + node(c, x, l2y, mw, l2h, m.title, m.lines, false) + '</g>'; });
  // level 2 under packaging
  const kw = 112;
  t.packItems.forEach((m, i) => { const x = px + i * (kw + 10); const at = 14 + i * 1.5; s += `<path d="M${c.X(px + pw / 2)} ${l1y + l1h} L${c.X(px + pw / 2)} ${l1y + l1h + 18} L${c.X(x + kw / 2)} ${l1y + l1h + 18} L${c.X(x + kw / 2)} ${l2y}" fill="none" stroke="${C.line2}" stroke-width="1" pathLength="1000" style="stroke-dashoffset:0;animation:${draw(css, P, `lk${i}`, at - 1, 2)}"/>` + `<g style="animation:${show(css, P, `k${i}`, at)}">` + node(c, x, l2y, kw, l2h, m.title, m.lines, false) + '</g>'; });
  // routing strip
  const oy = 400;
  s += `<g style="animation:${show(css, P, 'ol', 22)}">` + text(c, 80, oy, t.routingLabel, { size: 10, font: 'mono', fill: C.fg35, letter: 1.5, upper: true }) + '</g>';
  t.ops.forEach((o, i) => { const x = 80 + i * 352; const at = 23 + i * 2; s += `<g style="animation:${show(css, P, `o${i}`, at)}">` + rect(c, x, oy + 10, 336, 56, { stroke: i === 2 ? C.accent : C.line2, fill: C.fill }) + text(c, x + 10, oy + 29, o.t, { size: 10.5, fill: i === 2 ? C.accent : C.fg }) + text(c, x + 10, oy + 44, o.l1, { size: 8.5, font: 'mono', fill: C.fg55 }) + text(c, x + 10, oy + 57, o.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; if (i < 2) s += `<g style="animation:${show(css, P, `oa${i}`, at + 1)}">` + text(c, x + 340, oy + 42, rtl ? '←' : '→', { size: 12, fill: C.fg35 }) + '</g>'; });
  s += text(c, 80, 510, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, 530, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, 550, t.rule3, { size: 12.5, fill: C.fg }) + text(c, 80, 576, t.note, { size: 10, font: 'mono', fill: C.fg55 }) + text(c, 80, 592, t.note2, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"],svg path[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

export function batch(t, rtl) {
  const c = ctx(rtl); const P = 'bt'; const css = []; const H = 620;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  // header strip
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: 'rgba(242,181,68,0.06)' }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  // table: component | lot | planned | actual | bar | gap
  const ly = 146; const cols = [80, 250, 400, 480, 570, 860];
  t.cols.forEach((h, i) => { s += text(c, cols[i], ly, h, { size: 9, font: 'mono', fill: C.fg35 }); });
  s += line(c, 80, ly + 8, 1120, ly + 8, { stroke: C.line2 });
  const bw = 260; // bar full width = 125 % of planned; the tick marks 100 %
  t.rows.forEach((r, i) => {
    const y = ly + 30 + i * 28; const at = 4 + i * 1.5; const over = r.actual > r.planned; const ratio = Math.min(1.25, r.actual / r.planned);
    s += `<g style="animation:${show(css, P, `r${i}`, at)}">` + line(c, 80, y + 10, 1120, y + 10, { stroke: C.line })
      + text(c, cols[0], y, r.name, { size: 10, fill: C.fg }) + text(c, cols[1], y, r.lot, { size: 9, font: 'mono', fill: C.fg55 })
      + text(c, cols[2], y, r.p, { size: 9.5, font: 'mono', fill: C.fg70 }) + text(c, cols[3], y, r.a, { size: 9.5, font: 'mono', fill: over ? C.accent : C.fg })
      + rect(c, cols[4], y - 8, bw, 8, { stroke: C.line2, fill: 'none' }) + line(c, cols[4] + bw / 1.25, y - 10, cols[4] + bw / 1.25, y + 2, { stroke: C.fg35 })
      + `<g style="transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'};animation:${grow(css, P, `g${i}`, at + 0.5, 2)}">` + rect(c, cols[4], y - 8, Math.round(bw * ratio / 1.25), 8, { stroke: 'none', fill: over ? C.accent : C.fg55 }) + '</g>'
      + text(c, cols[5], y, r.gap, { size: 9.5, font: 'mono', fill: over ? C.accent : C.fg55 }) + '</g>';
  });
  // output + tiles
  const ty = ly + 30 + t.rows.length * 28 + 14;
  t.tiles.forEach((k, i) => { const x = 80 + i * 262; s += `<g style="animation:${show(css, P, `k${i}`, 20 + i * 2)}">` + rect(c, x, ty, 250, 74, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? 'rgba(242,181,68,0.06)' : C.fill }) + text(c, x + 12, ty + 24, k.big, { size: 15, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ty + 42, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ty + 56, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + text(c, x + 12, ty + 68, k.l3, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  const ry = ty + 100;
  s += text(c, 80, ry, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, ry + 20, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, ry + 40, t.rule3, { size: 12.5, fill: C.fg }) + text(c, 80, ry + 64, t.note, { size: 10, font: 'mono', fill: C.fg55 }) + text(c, 80, ry + 80, t.note2, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    bom: {
      title: 'La nomenclature d’un jus en bouteille : deux niveaux, rebut, gamme, version',
      alt: 'Un arbre à deux niveaux pour un pack de six bouteilles de jus d’orange d’un litre, nomenclature version 3 depuis septembre 2026. Sous le produit fini, deux branches : le jus pasteurisé en vrac, sous-ensemble fabriqué, avec ses matières, oranges 1 400 kilos pour 1 000 litres avec 3 % de rebut, sucre 40 kilos, eau 100 litres ; et l’emballage avec la bouteille PET, le bouchon, l’étiquette, un par bouteille avec 2 % de rebut pour la bouteille, et le carton, un pour six. En bas, la gamme en trois opérations : pressage 2 heures pour 1 000 litres sur la presse, pasteurisation 1 h 30 sur le pasteurisateur, embouteillage à 400 bouteilles par heure sur la ligne, opération accentuée. Les données sont un exemple construit.',
      root: { title: 'Jus d’orange 1 L · pack de 6 · JUS-OR-1L-6', lines: ['produit fini · lot à la sortie · quantités ci-dessous pour 1 000 bouteilles', 'unité de base : bouteille · conditionnement de vente : pack de 6'] },
      version: 'NOMENCLATURE v3 · sept 2026',
      sub: { title: 'Jus pasteurisé en vrac · JUS-VRAC · 1 000 L', lines: ['sous-ensemble fabriqué · lot propre · stocké en cuve', '1 L par bouteille · rebut d’embouteillage 1 %'] },
      pack: { title: 'Emballage', lines: ['composants achetés · lots fournisseurs', 'quantité par bouteille, puis par pack'] },
      materials: [
        { title: 'Oranges', lines: ['1 400 kg / 1 000 L', 'rebut 3 %', 'lot fournisseur'] },
        { title: 'Sucre', lines: ['40 kg / 1 000 L', 'rebut 0 %', 'lot fournisseur'] },
        { title: 'Eau traitée', lines: ['100 L / 1 000 L', 'compteur', 'pas de lot'] },
      ],
      packItems: [
        { title: 'Bouteille PET 1 L', lines: ['1 / bouteille', 'rebut 2 %', 'lot fournisseur'] },
        { title: 'Bouchon', lines: ['1 / bouteille', 'rebut 1 %', 'lot fournisseur'] },
        { title: 'Étiquette', lines: ['1 / bouteille', 'rebut 1 %', 'version v3'] },
        { title: 'Carton de 6', lines: ['1 / 6 bouteilles', 'rebut 0,5 %', 'lot fournisseur'] },
      ],
      routingLabel: 'Gamme · trois opérations pour 1 000 L',
      ops: [
        { t: '1 · Pressage', l1: 'presse P1 · 2 h / 1 000 L · 2 opérateurs', l2: 'consomme oranges · produit jus brut' },
        { t: '2 · Pasteurisation', l1: 'pasteurisateur · 1 h 30 / 1 000 L · 1 opérateur', l2: 'relevé de température par lot' },
        { t: '3 · Embouteillage', l1: 'ligne L1 · 400 bouteilles / h · 3 opérateurs', l2: 'consomme emballage · produit lot fini' },
      ],
      rule: 'La nomenclature dit quoi et combien par unité de base, avec le rebut attendu ; la gamme dit où, combien de temps et avec qui ; les deux sont versionnées.',
      rule2: 'Un sous-ensemble fabriqué a son propre lot et son propre stock : le jus en cuve existe avant la bouteille, et peut être vendu ou perdu seul.',
      rule3: 'Changer une quantité crée une version ; les ordres déjà lancés gardent la leur, et le coût planifié se recalcule à partir de la nouvelle.',
      note: 'produit, quantités, rebuts et durées : exemple construit · nomenclature multi-niveaux : liste parent-enfant des matières, sous-ensembles et pièces avec leurs quantités (définition courante)',
      note2: 'les prix des composants viennent des dernières réceptions ; le coût qui en sort est un coût d’atelier, pas le coût de revient comptable, que le comptable calcule avec ses règles',
    },
    batch: {
      title: 'L’ordre de fabrication OF-0412 : prévu contre réel, lots, rendement, coût d’atelier',
      alt: 'Un tableau d’un ordre de fabrication de 6 000 bouteilles de jus lancé le 9 novembre et clôturé le 10 : pour chaque composant, le lot consommé, la quantité prévue par la nomenclature, la quantité réelle saisie à l’atelier, une barre qui compare les deux, et l’écart : oranges 8 400 kilos prévus, 8 650 réels ; sucre 240 et 238 ; bouteilles 6 120 et 6 180 ; bouchons, étiquettes, cartons ; temps 9 heures prévues, 10 h 12 réelles. En dessous, quatre tuiles : 5 940 bouteilles bonnes et 60 rejetées, rendement 99 % ; lot fini L-JUS-1110 entré en stock ; coût d’atelier prévu 165,6 dinars par bouteille ; coût réel 172,2 dinars, plus 4 %, expliqué par les oranges et le temps. Les données sont un exemple construit.',
      header: 'OF-2026-0412 · JUS-OR-1L-6 · 6 000 bouteilles · nomenclature v3 · lancé le 9 nov 7 h 00 · clôturé le 10 nov 11 h 40 · ligne L1',
      cols: ['composant', 'lot consommé', 'prévu', 'réel', 'réel / prévu (trait = prévu)', 'écart'],
      rows: [
        { name: 'Oranges', lot: 'L-OR-1109 · L-OR-1107', p: '8 400 kg', a: '8 650 kg', planned: 8400, actual: 8650, gap: '+ 3,0 % · fruits plus petits' },
        { name: 'Sucre', lot: 'L-SU-1021', p: '240 kg', a: '238 kg', planned: 240, actual: 238, gap: '− 0,8 %' },
        { name: 'Eau traitée', lot: 'compteur', p: '600 L', a: '610 L', planned: 600, actual: 610, gap: '+ 1,7 %' },
        { name: 'Bouteille PET 1 L', lot: 'L-PET-1030', p: '6 120', a: '6 180', planned: 6120, actual: 6180, gap: '+ 1,0 % · casse en ligne' },
        { name: 'Bouchon', lot: 'L-BCH-1012', p: '6 060', a: '6 070', planned: 6060, actual: 6070, gap: '+ 0,2 %' },
        { name: 'Étiquette v3', lot: 'L-ETQ-1101', p: '6 060', a: '6 100', planned: 6060, actual: 6100, gap: '+ 0,7 %' },
        { name: 'Carton de 6', lot: 'L-CRT-1005', p: '1 005', a: '1 010', planned: 1005, actual: 1010, gap: '+ 0,5 %' },
        { name: 'Temps de ligne · 3 opérateurs', lot: 'pointage ligne L1', p: '9 h 00', a: '10 h 12', planned: 540, actual: 612, gap: '+ 13 % · arrêt étiqueteuse 48 min' },
      ],
      tiles: [
        { big: '5 940 + 60', l1: 'bonnes + rejetées · rendement 99 %', l2: 'rejet : étiquette décollée, 60 bouteilles', l3: 'saisi à la fin de ligne, cause codée' },
        { big: 'L-JUS-1110', l1: 'lot fini entré en stock', l2: '990 packs de 6 · DLUO 10 mai 2027', l3: 'amont : 8 lots fournisseurs liés', hot: true },
        { big: '165,6 DA', l1: 'coût d’atelier prévu / bouteille', l2: 'matières 158,6 + main-d’œuvre 2,0 + ligne 3,8', l3: 'prix des dernières réceptions' },
        { big: '172,2 DA', l1: 'coût d’atelier réel / bouteille', l2: '+ 4,0 % · oranges + 23 750, temps + 4 620', l3: '/ 5 940 bonnes, pas / 6 000', hot: true },
      ],
      rule: 'Le réel n’est pas le prévu recopié : chaque composant est consommé par lot, scanné à l’atelier, et le temps vient du pointage de la ligne, pas d’une estimation le soir.',
      rule2: 'Le coût réel divise par les bouteilles bonnes, pas par les bouteilles lancées ; le rebut et l’arrêt de machine sont dedans, avec leur cause.',
      rule3: 'Le lot fini relie les huit lots amont : un rappel d’oranges retrouve les bouteilles, un rappel de bouteilles retrouve les clients.',
      note: 'ordre, lots, quantités, temps et coûts : exemple construit · coût d’atelier = matières au prix des dernières réceptions + heures × taux + heures de ligne × taux, règle écrite par l’entreprise',
      note2: 'le coût de revient comptable, avec ses règles d’amortissement et de répartition, est l’affaire du comptable ; ce chiffre sert au gérant pour comparer et décider',
    },
  },
  en: {
    bom: {
      title: 'The bill of materials of a bottled juice: two levels, scrap, routing, version',
      alt: 'A two-level tree for a six-pack of one-litre orange juice, bill of materials version 3 since September 2026. Under the finished product, two branches: pasteurised bulk juice, a manufactured sub-assembly, with its materials, oranges 1,400 kilos per 1,000 litres with 3 % scrap, sugar 40 kilos, water 100 litres; and packaging with the PET bottle, cap, label, one per bottle with 2 % scrap on the bottle, and the carton, one per six. At the bottom, the routing in three operations: pressing 2 hours per 1,000 litres on the press, pasteurising 1 h 30 on the pasteuriser, bottling at 400 bottles an hour on the line, the accented operation. The data is a constructed example.',
      root: { title: 'Orange juice 1 L · six-pack · JUS-OR-1L-6', lines: ['finished product · lot at output · quantities below per 1,000 bottles', 'base unit: bottle · sales packaging: pack of 6'] },
      version: 'BOM v3 · Sep 2026',
      sub: { title: 'Pasteurised bulk juice · JUS-VRAC · 1,000 L', lines: ['manufactured sub-assembly · own lot · stored in tank', '1 L per bottle · bottling scrap 1 %'] },
      pack: { title: 'Packaging', lines: ['purchased components · supplier lots', 'quantity per bottle, then per pack'] },
      materials: [
        { title: 'Oranges', lines: ['1,400 kg / 1,000 L', 'scrap 3 %', 'supplier lot'] },
        { title: 'Sugar', lines: ['40 kg / 1,000 L', 'scrap 0 %', 'supplier lot'] },
        { title: 'Treated water', lines: ['100 L / 1,000 L', 'meter', 'no lot'] },
      ],
      packItems: [
        { title: 'PET bottle 1 L', lines: ['1 / bottle', 'scrap 2 %', 'supplier lot'] },
        { title: 'Cap', lines: ['1 / bottle', 'scrap 1 %', 'supplier lot'] },
        { title: 'Label', lines: ['1 / bottle', 'scrap 1 %', 'version v3'] },
        { title: 'Carton of 6', lines: ['1 / 6 bottles', 'scrap 0.5 %', 'supplier lot'] },
      ],
      routingLabel: 'Routing · three operations per 1,000 L',
      ops: [
        { t: '1 · Pressing', l1: 'press P1 · 2 h / 1,000 L · 2 operators', l2: 'consumes oranges · produces raw juice' },
        { t: '2 · Pasteurising', l1: 'pasteuriser · 1 h 30 / 1,000 L · 1 operator', l2: 'temperature reading per lot' },
        { t: '3 · Bottling', l1: 'line L1 · 400 bottles / h · 3 operators', l2: 'consumes packaging · produces finished lot' },
      ],
      rule: 'The bill of materials says what and how much per base unit, with expected scrap; the routing says where, how long and with whom; both are versioned.',
      rule2: 'A manufactured sub-assembly has its own lot and its own stock: the juice in the tank exists before the bottle, and can be sold or lost on its own.',
      rule3: 'Changing a quantity creates a version; orders already launched keep theirs, and the planned cost is recomputed from the new one.',
      note: 'product, quantities, scrap and durations: constructed example · multi-level BOM: parent-child list of materials, sub-assemblies and parts with their quantities (common definition)',
      note2: 'component prices come from the latest receptions; the resulting cost is a workshop cost, not the accounting cost price, which the accountant computes with their rules',
    },
    batch: {
      title: 'Production order PO-0412: planned vs actual, lots, yield, workshop cost',
      alt: 'A table of a production order of 6,000 bottles of juice launched on 9 November and closed on the 10th: for each component, the lot consumed, the quantity planned by the bill of materials, the actual quantity entered on the shop floor, a bar comparing the two, and the gap: oranges 8,400 kilos planned, 8,650 actual; sugar 240 and 238; bottles 6,120 and 6,180; caps, labels, cartons; time 9 hours planned, 10 h 12 actual. Below, four tiles: 5,940 good bottles and 60 rejected, yield 99 %; finished lot L-JUS-1110 entered into stock; planned workshop cost 165.6 dinars per bottle; actual cost 172.2 dinars, plus 4 %, explained by oranges and time. The data is a constructed example.',
      header: 'PO-2026-0412 · JUS-OR-1L-6 · 6,000 bottles · BOM v3 · launched 9 Nov 7:00 · closed 10 Nov 11:40 · line L1',
      cols: ['component', 'lot consumed', 'planned', 'actual', 'actual / planned (tick = planned)', 'gap'],
      rows: [
        { name: 'Oranges', lot: 'L-OR-1109 · L-OR-1107', p: '8,400 kg', a: '8,650 kg', planned: 8400, actual: 8650, gap: '+ 3.0 % · smaller fruit' },
        { name: 'Sugar', lot: 'L-SU-1021', p: '240 kg', a: '238 kg', planned: 240, actual: 238, gap: '− 0.8 %' },
        { name: 'Treated water', lot: 'meter', p: '600 L', a: '610 L', planned: 600, actual: 610, gap: '+ 1.7 %' },
        { name: 'PET bottle 1 L', lot: 'L-PET-1030', p: '6,120', a: '6,180', planned: 6120, actual: 6180, gap: '+ 1.0 % · breakage on line' },
        { name: 'Cap', lot: 'L-BCH-1012', p: '6,060', a: '6,070', planned: 6060, actual: 6070, gap: '+ 0.2 %' },
        { name: 'Label v3', lot: 'L-ETQ-1101', p: '6,060', a: '6,100', planned: 6060, actual: 6100, gap: '+ 0.7 %' },
        { name: 'Carton of 6', lot: 'L-CRT-1005', p: '1,005', a: '1,010', planned: 1005, actual: 1010, gap: '+ 0.5 %' },
        { name: 'Line time · 3 operators', lot: 'line L1 clock-in', p: '9 h 00', a: '10 h 12', planned: 540, actual: 612, gap: '+ 13 % · labeller stop 48 min' },
      ],
      tiles: [
        { big: '5,940 + 60', l1: 'good + rejected · yield 99 %', l2: 'reject: label peeled, 60 bottles', l3: 'entered at end of line, coded cause' },
        { big: 'L-JUS-1110', l1: 'finished lot entered into stock', l2: '990 six-packs · best before 10 May 2027', l3: 'upstream: 8 supplier lots linked', hot: true },
        { big: '165.6 DA', l1: 'planned workshop cost / bottle', l2: 'materials 158.6 + labour 2.0 + line 3.8', l3: 'prices from latest receptions' },
        { big: '172.2 DA', l1: 'actual workshop cost / bottle', l2: '+ 4.0 % · oranges + 23,750, time + 4,620', l3: '/ 5,940 good, not / 6,000', hot: true },
      ],
      rule: 'Actual is not planned copied over: every component is consumed by lot, scanned on the shop floor, and time comes from the line clock-in, not from an evening estimate.',
      rule2: 'The actual cost divides by good bottles, not by bottles launched; scrap and the machine stop are in it, with their cause.',
      rule3: 'The finished lot links the eight upstream lots: an orange recall finds the bottles, a bottle recall finds the customers.',
      note: 'order, lots, quantities, times and costs: constructed example · workshop cost = materials at latest reception prices + hours × rate + line hours × rate, a rule written by the company',
      note2: 'the accounting cost price, with its depreciation and allocation rules, is the accountant’s business; this figure serves the manager to compare and decide',
    },
  },
  ar: {
    bom: {
      title: 'قائمة مواد عصير معبّأ: مستويان، هدر، مسار تصنيع، إصدار',
      alt: 'شجرة بمستويين لعبوة ست قوارير عصير برتقال لتر واحد، قائمة مواد إصدار 3 منذ سبتمبر 2026. تحت المنتج النهائي فرعان: عصير مبستر سائب، مجموعة فرعية مصنَّعة، بموادها، برتقال 1,400 كيلوغرام لكل 1,000 لتر بهدر 3 ٪، سكر 40 كيلوغراماً، ماء 100 لتر؛ والتعبئة بقارورة PET وغطاء وملصق، واحد لكل قارورة بهدر 2 ٪ للقارورة، وكرتون واحد لكل ست. في الأسفل مسار التصنيع في ثلاث عمليات: عصر ساعتان لكل 1,000 لتر على المعصرة، بسترة ساعة ونصف على المبستر، تعبئة بمعدل 400 قارورة في الساعة على الخط، العملية المميزة. والبيانات مثال مبني.',
      root: { title: `عصير برتقال 1 ل · عبوة 6 · ${I('JUS-OR-1L-6')}`, lines: ['منتج نهائي · دفعة عند الخروج · الكميات أدناه لكل 1,000 قارورة', 'وحدة الأساس: قارورة · تعبئة البيع: عبوة 6'] },
      version: 'قائمة المواد إ3 · سبت 2026',
      sub: { title: `عصير مبستر سائب · ${I('JUS-VRAC')} · 1,000 ل`, lines: ['مجموعة فرعية مصنَّعة · دفعة خاصة · تُخزَّن في خزان', '1 ل لكل قارورة · هدر تعبئة 1 ٪'] },
      pack: { title: 'التعبئة', lines: ['مكوّنات مشتراة · دفعات الموردين', 'كمية لكل قارورة ثم لكل عبوة'] },
      materials: [
        { title: 'برتقال', lines: ['1,400 كغ / 1,000 ل', 'هدر 3 ٪', 'دفعة مورد'] },
        { title: 'سكر', lines: ['40 كغ / 1,000 ل', 'هدر 0 ٪', 'دفعة مورد'] },
        { title: 'ماء معالج', lines: ['100 ل / 1,000 ل', 'عداد', 'بلا دفعة'] },
      ],
      packItems: [
        { title: 'قارورة PET 1 ل', lines: ['1 / قارورة', 'هدر 2 ٪', 'دفعة مورد'] },
        { title: 'غطاء', lines: ['1 / قارورة', 'هدر 1 ٪', 'دفعة مورد'] },
        { title: 'ملصق', lines: ['1 / قارورة', 'هدر 1 ٪', 'إصدار إ3'] },
        { title: 'كرتون 6', lines: ['1 / 6 قوارير', 'هدر 0.5 ٪', 'دفعة مورد'] },
      ],
      routingLabel: 'مسار التصنيع · ثلاث عمليات لكل 1,000 ل',
      ops: [
        { t: '1 · العصر', l1: `معصرة ${I('P1')} · 2 س / 1,000 ل · عاملان`, l2: 'يستهلك البرتقال · ينتج عصيراً خاماً' },
        { t: '2 · البسترة', l1: 'مبستر · 1 س 30 / 1,000 ل · عامل واحد', l2: 'قراءة حرارة لكل دفعة' },
        { t: '3 · التعبئة', l1: `خط ${I('L1')} · 400 قارورة / س · 3 عمال`, l2: 'يستهلك التعبئة · ينتج الدفعة النهائية' },
      ],
      rule: 'قائمة المواد تقول ماذا وكم لكل وحدة أساس بالهدر المتوقع؛ ومسار التصنيع يقول أين وكم من الوقت ومع من؛ وكلاهما مرقَّم بإصدار.',
      rule2: 'المجموعة الفرعية المصنَّعة لها دفعتها ومخزونها: العصير في الخزان موجود قبل القارورة، ويمكن بيعه أو فقدانه وحده.',
      rule3: 'تغيير كمية ينشئ إصداراً؛ والأوامر المطلقة أصلاً تحتفظ بإصدارها، ويُعاد حساب الكلفة المخططة من الجديد.',
      note: 'المنتج والكميات والهدر والمدد: مثال مبني · قائمة مواد متعددة المستويات: قائمة أب-ابن للمواد والمجموعات الفرعية والقطع بكمياتها (تعريف شائع)',
      note2: 'أسعار المكوّنات من آخر الاستلامات؛ والكلفة الناتجة كلفة ورشة لا سعر التكلفة المحاسبي الذي يحسبه المحاسب بقواعده',
    },
    batch: {
      title: `أمر التصنيع ${I('OF-0412')}: مخطط مقابل فعلي، دفعات، مردود، كلفة ورشة`,
      alt: 'جدول أمر تصنيع 6,000 قارورة عصير أُطلق في 9 نوفمبر وأُغلق في 10: لكل مكوّن الدفعة المستهلَكة والكمية المخططة بقائمة المواد والكمية الفعلية المدخَلة في الورشة وشريط يقارن بينهما والفارق: برتقال 8,400 كيلوغرام مخطط و8,650 فعلي؛ سكر 240 و238؛ قوارير 6,120 و6,180؛ أغطية وملصقات وكراتين؛ وقت 9 ساعات مخططة و10 س 12 فعلية. تحته أربع بطاقات: 5,940 قارورة جيدة و60 مرفوضة، مردود 99 ٪؛ دفعة نهائية L-JUS-1110 أُدخلت إلى المخزون؛ كلفة ورشة مخططة 165.6 دينار للقارورة؛ كلفة فعلية 172.2 دينار، زائد 4 ٪، يفسرها البرتقال والوقت. والبيانات مثال مبني.',
      header: `${I('OF-2026-0412')} · ${I('JUS-OR-1L-6')} · 6,000 قارورة · قائمة مواد إ3 · أُطلق 9 نوف 07:00 · أُغلق 10 نوف 11:40 · خط ${I('L1')}`,
      cols: ['المكوّن', 'الدفعة المستهلَكة', 'مخطط', 'فعلي', 'فعلي / مخطط (العلامة = المخطط)', 'الفارق'],
      rows: [
        { name: 'برتقال', lot: I('L-OR-1109 · L-OR-1107'), p: I('8,400 kg'), a: I('8,650 kg'), planned: 8400, actual: 8650, gap: `${I('+ 3.0 %')} · ثمار أصغر` },
        { name: 'سكر', lot: I('L-SU-1021'), p: I('240 kg'), a: I('238 kg'), planned: 240, actual: 238, gap: I('− 0.8 %') },
        { name: 'ماء معالج', lot: 'عداد', p: I('600 L'), a: I('610 L'), planned: 600, actual: 610, gap: I('+ 1.7 %') },
        { name: 'قارورة PET 1 ل', lot: I('L-PET-1030'), p: I('6,120'), a: I('6,180'), planned: 6120, actual: 6180, gap: `${I('+ 1.0 %')} · كسر على الخط` },
        { name: 'غطاء', lot: I('L-BCH-1012'), p: I('6,060'), a: I('6,070'), planned: 6060, actual: 6070, gap: I('+ 0.2 %') },
        { name: 'ملصق إ3', lot: I('L-ETQ-1101'), p: I('6,060'), a: I('6,100'), planned: 6060, actual: 6100, gap: I('+ 0.7 %') },
        { name: 'كرتون 6', lot: I('L-CRT-1005'), p: I('1,005'), a: I('1,010'), planned: 1005, actual: 1010, gap: I('+ 0.5 %') },
        { name: 'وقت الخط · 3 عمال', lot: `تسجيل خط ${I('L1')}`, p: '9 س 00', a: '10 س 12', planned: 540, actual: 612, gap: `${I('+ 13 %')} · توقف الملصّقة 48 د` },
      ],
      tiles: [
        { big: I('5,940 + 60'), l1: 'جيدة + مرفوضة · مردود 99 ٪', l2: 'رفض: ملصق منفصل، 60 قارورة', l3: 'يُدخَل في نهاية الخط، سبب مرمَّز' },
        { big: I('L-JUS-1110'), l1: 'دفعة نهائية أُدخلت إلى المخزون', l2: '990 عبوة 6 · أفضل قبل 10 ماي 2027', l3: 'المنبع: 8 دفعات موردين مرتبطة', hot: true },
        { big: I('165.6 DA'), l1: 'كلفة ورشة مخططة / قارورة', l2: `مواد ${I('158.6')} + يد عاملة ${I('2.0')} + خط ${I('3.8')}`, l3: 'أسعار آخر الاستلامات' },
        { big: I('172.2 DA'), l1: 'كلفة ورشة فعلية / قارورة', l2: `${I('+ 4.0 %')} · برتقال ${I('+ 23,750')}، وقت ${I('+ 4,620')}`, l3: `/ ${I('5,940')} جيدة لا / ${I('6,000')}`, hot: true },
      ],
      rule: 'الفعلي ليس المخطط منسوخاً: كل مكوّن يُستهلك بالدفعة ويُمسح في الورشة، والوقت يأتي من تسجيل الخط لا من تقدير مسائي.',
      rule2: 'الكلفة الفعلية تُقسم على القوارير الجيدة لا على القوارير المطلقة؛ والهدر وتوقف الآلة داخلها بسببهما.',
      rule3: 'الدفعة النهائية تربط دفعات المنبع الثماني: سحب برتقال يجد القوارير، وسحب قوارير يجد الزبائن.',
      note: 'الأمر والدفعات والكميات والأوقات والكلف: مثال مبني · كلفة الورشة = مواد بأسعار آخر الاستلامات + ساعات × معدل + ساعات خط × معدل، قاعدة تكتبها الشركة',
      note2: 'سعر التكلفة المحاسبي بقواعد الاهتلاك والتوزيع شأن المحاسب؛ وهذا الرقم يخدم المسيّر للمقارنة والقرار',
    },
  },
};
