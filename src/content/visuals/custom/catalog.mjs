// Bespoke animated figures for the 2027 "the same product exists in twelve lines" post.
//  tree():   one product in three levels: the model (name, brand, category,
//            description, photos), its variants (the attribute that changes:
//            size), and each variant's packagings (unit, case, pallet) with
//            their own barcode, factor to the base unit and price-list entry;
//            a side legend says what lives at which level; nodes appear level
//            by level.
//  before(): twelve messy spreadsheet lines for the same product on the left,
//            converging into one model, one variant and two packagings on the
//            right, with what was merged, what was kept and what was refused.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function draw(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{stroke-dashoffset:1000}${(at + dur).toFixed(1)}%,100%{stroke-dashoffset:0}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
const I = (x) => `⁦${x}⁩`;

function node(c, x, y, w, h, title, lines, o = {}) {
  const { hot = false, muted = false } = o;
  let s = rect(c, x, y, w, h, { stroke: hot ? C.accent : muted ? C.line : C.line2, fill: hot ? 'rgba(242,181,68,0.06)' : C.fill });
  s += text(c, x + 8, y + 16, title, { size: 11, fill: hot ? C.accent : muted ? C.fg55 : C.fg });
  lines.forEach((l, i) => { s += text(c, x + 8, y + 30 + i * 12, l, { size: 8.5, font: 'mono', fill: C.fg55 }); });
  return s;
}

export function tree(t, rtl) {
  const c = ctx(rtl); const P = 'tr'; const css = []; const H = 600;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  // level labels on the left
  const lv = [{ y: 100, n: t.levels[0] }, { y: 230, n: t.levels[1] }, { y: 370, n: t.levels[2] }];
  lv.forEach((l, i) => { s += `<g style="animation:${show(css, P, `lv${i}`, 2 + i * 10)}">` + text(c, 80, l.y + 12, l.n.name, { size: 10, font: 'mono', fill: C.accent, letter: 1.5, upper: true }) + text(c, 80, l.y + 28, l.n.sub, { size: 9.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  // model node
  const mx = 300, mw = 440, my = 96, mh = 70;
  s += `<g style="animation:${show(css, P, 'm', 4)}">` + node(c, mx, my, mw, mh, t.model.title, t.model.lines, { hot: true }) + '</g>';
  // variants
  const vw = 200, vh = 62, vy = 226; const vxs = [300, 540, 780];
  t.variants.forEach((v, i) => {
    const x = vxs[i]; const at = 14 + i * 3;
    s += `<path d="M${c.X(mx + mw / 2)} ${my + mh} L${c.X(mx + mw / 2)} ${my + mh + 20} L${c.X(x + vw / 2)} ${my + mh + 20} L${c.X(x + vw / 2)} ${vy}" fill="none" stroke="${C.line2}" stroke-width="1" pathLength="1000" style="stroke-dashoffset:0;animation:${draw(css, P, `vl${i}`, at - 2, 3)}"/>`;
    s += `<g style="animation:${show(css, P, `v${i}`, at)}">` + node(c, x, vy, vw, vh, v.title, v.lines, { hot: v.hot }) + '</g>';
  });
  // packagings under variant 2 (the hot one) and faint under others
  const pw = 150, ph = 92, py = 366;
  t.packs.forEach((p, i) => {
    const vx = vxs[t.packVariant]; const x = vx - 40 + i * (pw + 10) - (t.packs.length - 1) * (pw + 10) / 2 + vw / 2 - pw / 2; const at = 26 + i * 4;
    s += `<path d="M${c.X(vx + vw / 2)} ${vy + vh} L${c.X(vx + vw / 2)} ${vy + vh + 18} L${c.X(x + pw / 2)} ${vy + vh + 18} L${c.X(x + pw / 2)} ${py}" fill="none" stroke="${p.hot ? C.accent : C.line2}" stroke-width="1" pathLength="1000" style="stroke-dashoffset:0;animation:${draw(css, P, `pl${i}`, at - 2, 3)}"/>`;
    s += `<g style="animation:${show(css, P, `p${i}`, at)}">` + node(c, x, py, pw, ph, p.title, p.lines, { hot: p.hot }) + '</g>';
  });
  // faint "…" under other variants
  [0, 2].forEach((vi, k) => { const vx = vxs[vi]; s += `<g style="animation:${show(css, P, `d${k}`, 30)}">` + text(c, vx + vw / 2, vy + vh + 30, t.ellipsis, { size: 10, font: 'mono', fill: C.fg35, anchor: 'middle' }) + '</g>'; });
  // legend right
  const lx = 1000, lw = 120;
  s += `<g style="animation:${show(css, P, 'lg', 40)}">` + text(c, lx, 100, t.legendLabel, { size: 9.5, font: 'mono', fill: C.fg35, letter: 1, upper: true });
  t.legend.forEach((l, i) => { const y = 118 + i * 48; s += rect(c, lx, y, lw, 40, { stroke: C.line, fill: C.fill }) + text(c, lx + 8, y + 15, l.k, { size: 9.5, font: 'mono', fill: C.accent }) + text(c, lx + 8, y + 29, l.v, { size: 8.5, font: 'mono', fill: C.fg55 }); });
  s += '</g>';
  s += text(c, 80, 500, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, 520, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, 544, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"],svg path[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

export function before(t, rtl) {
  const c = ctx(rtl); const P = 'bf'; const css = []; const H = 616;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  // left: 12 lines
  const lx = 80, lw = 480, ly = 100;
  s += text(c, lx, ly, t.beforeLabel, { size: 10, font: 'mono', fill: C.fg35, letter: 1.5, upper: true });
  const cols = [lx, lx + 70, lx + 290, lx + 360];
  t.beforeCols.forEach((h, i) => { s += text(c, cols[i], ly + 20, h, { size: 9, font: 'mono', fill: C.fg35 }); });
  s += line(c, lx, ly + 28, lx + lw, ly + 28, { stroke: C.line2 });
  t.lines.forEach((r, i) => {
    const y = ly + 48 + i * 26; const at = 3 + i * 1.5; const fate = r.fate; // merge | keep | reject
    const col = fate === 'reject' ? C.fg35 : fate === 'keep' ? C.accent : C.fg70;
    s += `<g style="animation:${show(css, P, `l${i}`, at)}">` + line(c, lx, y + 9, lx + lw, y + 9, { stroke: C.line }) + text(c, cols[0], y, r.code, { size: 9.5, font: 'mono', fill: col }) + text(c, cols[1], y, r.label, { size: 10, fill: fate === 'reject' ? C.fg55 : C.fg }) + text(c, cols[2], y, r.price, { size: 9.5, font: 'mono', fill: col }) + text(c, cols[3], y, r.verdict, { size: 8.5, font: 'mono', fill: col }) + '</g>';
    // converge line to right target
    if (fate !== 'reject') { const tgt = r.to; const ty = t.targets[tgt].y + 20; const tx = 630 + t.targets[tgt].indent; const path = `M${c.X(lx + lw + 6)} ${y + 2} C ${c.X(lx + lw + 46)} ${y + 2}, ${c.X(tx - 40)} ${ty}, ${c.X(tx - 2)} ${ty}`; s += `<path d="${path}" fill="none" stroke="${fate === 'keep' ? C.accent : C.line2}" stroke-width="1" pathLength="1000" style="stroke-dashoffset:0;animation:${draw(css, P, `c${i}`, 24 + i * 1.2, 3)}"/>`; }
  });
  // right: targets
  const rx = 630, rw = 490;
  s += text(c, rx, ly, t.afterLabel, { size: 10, font: 'mono', fill: C.fg35, letter: 1.5, upper: true });
  t.targets.forEach((tg, i) => {
    s += `<g style="animation:${show(css, P, `t${i}`, 28 + i * 5)}">` + rect(c, rx + tg.indent, tg.y, rw - tg.indent, tg.h, { stroke: tg.hot ? C.accent : C.line2, fill: tg.hot ? 'rgba(242,181,68,0.06)' : C.fill }) + text(c, rx + tg.indent + 10, tg.y + 17, tg.title, { size: 11, fill: tg.hot ? C.accent : C.fg }) + tg.lines.map((l, k) => text(c, rx + tg.indent + 10, tg.y + 32 + k * 12, l, { size: 8.5, font: 'mono', fill: C.fg55 })).join('') + '</g>';
  });
  // counters
  const cy = 476;
  t.counters.forEach((k, i) => { const x = 80 + i * 262; s += `<g style="animation:${show(css, P, `k${i}`, 46 + i * 3)}">` + rect(c, x, cy, 250, 48, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? 'rgba(242,181,68,0.06)' : C.fill }) + text(c, x + 12, cy + 22, k.big, { size: 16, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, cy + 38, k.label, { size: 9.5, fill: C.fg70 }) + '</g>'; });
  s += text(c, 80, 556, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, 576, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, 600, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"],svg path[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    tree: {
      title: 'Un produit, trois niveaux : le modèle, ses variantes, leurs conditionnements',
      alt: 'Un arbre à trois niveaux. En haut, le modèle : huile de table Fleurial, marque, catégorie huiles, description et photos, référence interne HT-FLEU. Au milieu, trois variantes qui ne diffèrent que par la contenance : 1 litre, 2 litres, 5 litres ; la variante 5 litres est mise en avant. En bas, sous la variante 5 litres, trois conditionnements : l’unité, bouteille de 5 litres, code-barres EAN-13, facteur 1, prix de vente 1 290 dinars ; le carton de 4, code GTIN-14 en ITF-14, facteur 4, prix grossiste 4 960 dinars ; la palette de 112 cartons, facteur 448, sur commande. À droite, une légende dit ce qui vit à quel niveau : photos et description au modèle, attribut et stock à la variante, code-barres, facteur et prix au conditionnement. Les données sont un exemple construit.',
      levels: [{ name: 'Modèle', sub: 'ce qu’on décrit et photographie' }, { name: 'Variante', sub: 'ce qui change : un attribut' }, { name: 'Conditionnement', sub: 'ce qu’on scanne et qu’on vend' }],
      model: { title: 'Huile de table Fleurial · HT-FLEU', lines: ['marque Fleurial · catégorie huiles de table · fournisseur Cevital', 'description bilingue · 4 photos · fiche active depuis 2024'] },
      variants: [
        { title: '1 L · HT-FLEU-1', lines: ['contenance : 1 L', 'stock en unités · 3 conditionnements'] },
        { title: '5 L · HT-FLEU-5', lines: ['contenance : 5 L', 'stock en unités : 66 · 3 conditionnements'], hot: true },
        { title: '2 L · HT-FLEU-2', lines: ['contenance : 2 L', 'stock en unités · 2 conditionnements'] },
      ],
      packVariant: 1,
      packs: [
        { title: 'Unité · bouteille', lines: ['EAN-13 6130001234567', 'facteur 1', 'prix détail 1 290 DA', 'scanné en caisse'] },
        { title: 'Carton de 4', lines: ['GTIN-14 · ITF-14', 'facteur 4', 'prix grossiste 4 960 DA', 'scanné en réception'], hot: true },
        { title: 'Palette · 112 cartons', lines: ['facteur 448', 'sur commande', 'prix sur devis', 'jamais en rayon'] },
      ],
      ellipsis: '… conditionnements',
      legendLabel: 'Ce qui vit où',
      legend: [{ k: 'modèle', v: 'photos · description' }, { k: 'variante', v: 'attribut · stock' }, { k: 'conditionnement', v: 'code · facteur · prix' }, { k: 'partout', v: 'statut · historique' }],
      rule: 'Le stock se compte à la variante, en unités de base ; le prix et le code-barres vivent au conditionnement ; les photos et la description vivent au modèle, une fois.',
      rule2: 'Un carton n’est pas un autre produit : c’est quatre unités de la même variante, avec son propre code et son propre prix.',
      note: 'références, codes, facteurs et prix : exemple construit · les GTIN existent en 8, 12, 13 et 14 chiffres ; le GTIN-14 sert aux expéditions en gros, pas à la caisse',
    },
    before: {
      title: 'Douze lignes pour un produit, et ce qu’elles deviennent : une fiche en trois niveaux',
      alt: 'À gauche, douze lignes d’un ancien fichier pour la même huile de 5 litres : codes différents, libellés en majuscules ou abrégés, un prix par ligne, deux lignes qui sont en fait le carton de 4, une ligne « ancien code » sans stock, une ligne en arabe, une ligne avec un prix à zéro. À droite, ce qu’elles deviennent : un modèle huile de table Fleurial, une variante 5 litres avec le stock total recalculé en unités, deux conditionnements, l’unité et le carton de 4, chacun avec son code et son prix. En bas, trois compteurs : dix lignes fusionnées, deux lignes conservées comme conditionnements, une ligne refusée, prix à zéro, à trancher par le gérant. Les données sont un exemple construit.',
      beforeLabel: 'Avant · douze lignes de l’ancien fichier', beforeCols: ['code', 'libellé', 'prix', 'sort'],
      lines: [
        { code: 'HU5', label: 'Huile 5L', price: '1 290', verdict: 'fusionnée', fate: 'merge', to: 1 },
        { code: 'HUILE5L', label: 'HUILE FLEURIAL 5 L', price: '1 290', verdict: 'fusionnée', fate: 'merge', to: 1 },
        { code: 'FL-5', label: 'Fleurial 5 litres', price: '1 300', verdict: 'fusionnée · prix écarté', fate: 'merge', to: 1 },
        { code: '0001234567', label: 'huile de table 5l', price: '1 290', verdict: 'fusionnée · EAN gardé', fate: 'merge', to: 1 },
        { code: 'HU5-C4', label: 'Huile 5L carton 4', price: '4 960', verdict: 'conditionnement', fate: 'keep', to: 3 },
        { code: 'CART-HUILE', label: 'Carton huile x4', price: '4 960', verdict: 'fusionnée au carton', fate: 'merge', to: 3 },
        { code: 'HU5-OLD', label: 'Huile 5L (ancien code)', price: '1 150', verdict: 'fusionnée · code en alias', fate: 'merge', to: 1 },
        { code: 'زيت5', label: 'زيت المائدة 5 ل', price: '1 290', verdict: 'fusionnée · libellé AR gardé', fate: 'merge', to: 0 },
        { code: 'HU5B', label: 'Huile 5L bidon', price: '1 290', verdict: 'fusionnée', fate: 'merge', to: 1 },
        { code: 'FLEU5', label: 'FLEURIAL 5L PROMO', price: '1 190', verdict: 'fusionnée · promo → grille', fate: 'merge', to: 2 },
        { code: 'HU-5-L', label: 'Huile 5 L', price: '0', verdict: 'refusée · prix à zéro', fate: 'reject' },
        { code: 'HU5X', label: 'Huile 5L', price: '1 290', verdict: 'fusionnée', fate: 'merge', to: 1 },
      ],
      afterLabel: 'Après · une fiche en trois niveaux',
      targets: [
        { y: 140, h: 56, indent: 0, title: 'Modèle · Huile de table Fleurial', lines: ['libellé FR + AR · marque · catégorie · photos', 'description écrite une fois'], hot: false },
        { y: 212, h: 70, indent: 24, title: 'Variante · 5 L · HT-FLEU-5', lines: ['stock recalculé : 66 unités (toutes lignes)', 'alias : HU5, HUILE5L, FL-5, HU5-OLD, HU5B, HU5X', 'attribut contenance = 5 L'], hot: true },
        { y: 298, h: 56, indent: 48, title: 'Conditionnement · unité', lines: ['EAN-13 6130001234567 · facteur 1', 'prix détail 1 290 DA · promo 1 190 DA en grille'] },
        { y: 370, h: 56, indent: 48, title: 'Conditionnement · carton de 4', lines: ['code carton · facteur 4', 'prix grossiste 4 960 DA'] },
      ],
      counters: [{ big: '10', label: 'lignes fusionnées dans la fiche' }, { big: '2', label: 'lignes devenues conditionnements', hot: true }, { big: '1', label: 'ligne refusée · prix à zéro · au gérant' }, { big: '6 → 1', label: 'codes internes gardés en alias' }],
      rule: 'Les anciens codes ne sont pas perdus : ils deviennent des alias de la variante, pour que les anciennes factures et les habitudes des vendeurs continuent de trouver le produit.',
      rule2: 'Le stock des douze lignes est additionné en unités de base au moment de la reprise, et il ne sera plus jamais réparti entre des doublons.',
      note: 'lignes, codes et prix : exemple construit · la reprise suit l’essai à blanc et le rapport des rejets décrits dans le guide sur l’import',
    },
  },
  en: {
    tree: {
      title: 'One product, three levels: the model, its variants, their packagings',
      alt: 'A three-level tree. At the top, the model: Fleurial table oil, brand, oils category, description and photos, internal reference HT-FLEU. In the middle, three variants that differ only by volume: 1 litre, 2 litres, 5 litres; the 5-litre variant is highlighted. At the bottom, under the 5-litre variant, three packagings: the unit, a 5-litre bottle, EAN-13 barcode, factor 1, retail price 1,290 dinars; the case of 4, GTIN-14 in ITF-14, factor 4, wholesale price 4,960 dinars; the pallet of 112 cases, factor 448, on order. On the right, a legend says what lives at which level: photos and description at the model, attribute and stock at the variant, barcode, factor and price at the packaging. The data is a constructed example.',
      levels: [{ name: 'Model', sub: 'what is described and photographed' }, { name: 'Variant', sub: 'what changes: one attribute' }, { name: 'Packaging', sub: 'what is scanned and sold' }],
      model: { title: 'Fleurial table oil · HT-FLEU', lines: ['brand Fleurial · category table oils · supplier Cevital', 'bilingual description · 4 photos · record active since 2024'] },
      variants: [
        { title: '1 L · HT-FLEU-1', lines: ['volume: 1 L', 'stock in units · 3 packagings'] },
        { title: '5 L · HT-FLEU-5', lines: ['volume: 5 L', 'stock in units: 66 · 3 packagings'], hot: true },
        { title: '2 L · HT-FLEU-2', lines: ['volume: 2 L', 'stock in units · 2 packagings'] },
      ],
      packVariant: 1,
      packs: [
        { title: 'Unit · bottle', lines: ['EAN-13 6130001234567', 'factor 1', 'retail price 1,290 DA', 'scanned at the till'] },
        { title: 'Case of 4', lines: ['GTIN-14 · ITF-14', 'factor 4', 'wholesale price 4,960 DA', 'scanned at receiving'], hot: true },
        { title: 'Pallet · 112 cases', lines: ['factor 448', 'on order', 'price on quote', 'never on the shelf'] },
      ],
      ellipsis: '… packagings',
      legendLabel: 'What lives where',
      legend: [{ k: 'model', v: 'photos · description' }, { k: 'variant', v: 'attribute · stock' }, { k: 'packaging', v: 'code · factor · price' }, { k: 'everywhere', v: 'status · history' }],
      rule: 'Stock is counted at the variant, in base units; price and barcode live at the packaging; photos and description live at the model, once.',
      rule2: 'A case is not another product: it is four units of the same variant, with its own code and its own price.',
      note: 'references, codes, factors and prices: constructed example · GTINs come in 8, 12, 13 and 14 digits; GTIN-14 serves wholesale shipments, not the till',
    },
    before: {
      title: 'Twelve lines for one product, and what they become: one record in three levels',
      alt: 'On the left, twelve lines from an old file for the same 5-litre oil: different codes, labels in capitals or abbreviated, one price per line, two lines that are actually the case of 4, an “old code” line without stock, a line in Arabic, a line with a zero price. On the right, what they become: a Fleurial table oil model, a 5-litre variant with total stock recomputed in units, two packagings, the unit and the case of 4, each with its code and price. At the bottom, three counters: ten lines merged, two lines kept as packagings, one line refused, zero price, for the manager to settle. The data is a constructed example.',
      beforeLabel: 'Before · twelve lines of the old file', beforeCols: ['code', 'label', 'price', 'fate'],
      lines: [
        { code: 'HU5', label: 'Oil 5L', price: '1,290', verdict: 'merged', fate: 'merge', to: 1 },
        { code: 'HUILE5L', label: 'FLEURIAL OIL 5 L', price: '1,290', verdict: 'merged', fate: 'merge', to: 1 },
        { code: 'FL-5', label: 'Fleurial 5 litres', price: '1,300', verdict: 'merged · price dropped', fate: 'merge', to: 1 },
        { code: '0001234567', label: 'table oil 5l', price: '1,290', verdict: 'merged · EAN kept', fate: 'merge', to: 1 },
        { code: 'HU5-C4', label: 'Oil 5L case 4', price: '4,960', verdict: 'packaging', fate: 'keep', to: 3 },
        { code: 'CART-HUILE', label: 'Oil case x4', price: '4,960', verdict: 'merged into case', fate: 'merge', to: 3 },
        { code: 'HU5-OLD', label: 'Oil 5L (old code)', price: '1,150', verdict: 'merged · code as alias', fate: 'merge', to: 1 },
        { code: 'زيت5', label: 'زيت المائدة 5 ل', price: '1,290', verdict: 'merged · AR label kept', fate: 'merge', to: 0 },
        { code: 'HU5B', label: 'Oil 5L can', price: '1,290', verdict: 'merged', fate: 'merge', to: 1 },
        { code: 'FLEU5', label: 'FLEURIAL 5L PROMO', price: '1,190', verdict: 'merged · promo → grid', fate: 'merge', to: 2 },
        { code: 'HU-5-L', label: 'Oil 5 L', price: '0', verdict: 'refused · zero price', fate: 'reject' },
        { code: 'HU5X', label: 'Oil 5L', price: '1,290', verdict: 'merged', fate: 'merge', to: 1 },
      ],
      afterLabel: 'After · one record in three levels',
      targets: [
        { y: 140, h: 56, indent: 0, title: 'Model · Fleurial table oil', lines: ['FR + AR label · brand · category · photos', 'description written once'], hot: false },
        { y: 212, h: 70, indent: 24, title: 'Variant · 5 L · HT-FLEU-5', lines: ['stock recomputed: 66 units (all lines)', 'aliases: HU5, HUILE5L, FL-5, HU5-OLD, HU5B, HU5X', 'attribute volume = 5 L'], hot: true },
        { y: 298, h: 56, indent: 48, title: 'Packaging · unit', lines: ['EAN-13 6130001234567 · factor 1', 'retail price 1,290 DA · promo 1,190 DA in grid'] },
        { y: 370, h: 56, indent: 48, title: 'Packaging · case of 4', lines: ['case code · factor 4', 'wholesale price 4,960 DA'] },
      ],
      counters: [{ big: '10', label: 'lines merged into the record' }, { big: '2', label: 'lines turned into packagings', hot: true }, { big: '1', label: 'line refused · zero price · to the manager' }, { big: '6 → 1', label: 'internal codes kept as aliases' }],
      rule: 'Old codes are not lost: they become aliases of the variant, so that old invoices and sellers’ habits keep finding the product.',
      rule2: 'The stock of the twelve lines is added up in base units at take-over time, and will never again be split across duplicates.',
      note: 'lines, codes and prices: constructed example · the take-over follows the dry run and rejection report described in the import guide',
    },
  },
  ar: {
    tree: {
      title: 'منتج واحد، ثلاثة مستويات: الطراز، ومتغيراته، وتعبئاتها',
      alt: 'شجرة بثلاثة مستويات. في الأعلى الطراز: زيت المائدة فليوريال، العلامة، فئة الزيوت، الوصف والصور، المرجع الداخلي HT-FLEU. في الوسط ثلاثة متغيرات لا تختلف إلا بالسعة: 1 لتر، 2 لتر، 5 لترات؛ متغير 5 لترات مميز. في الأسفل تحت متغير 5 لترات ثلاث تعبئات: الوحدة، قارورة 5 لترات، باركود EAN-13، معامل 1، سعر تجزئة 1,290 دينار؛ كرتون من 4، رمز GTIN-14 بـ ITF-14، معامل 4، سعر جملة 4,960 دينار؛ طبلية من 112 كرتوناً، معامل 448، عند الطلب. وعلى الجانب مفتاح يقول ما يعيش في أي مستوى: الصور والوصف في الطراز، السمة والمخزون في المتغير، الباركود والمعامل والسعر في التعبئة. والبيانات مثال مبني.',
      levels: [{ name: 'الطراز', sub: 'ما يُوصف ويُصوَّر' }, { name: 'المتغير', sub: 'ما يتغير: سمة واحدة' }, { name: 'التعبئة', sub: 'ما يُمسح ويُباع' }],
      model: { title: `زيت المائدة فليوريال · ${I('HT-FLEU')}`, lines: ['العلامة فليوريال · الفئة زيوت المائدة · المورد سيفيتال', 'وصف ثنائي اللغة · 4 صور · بطاقة نشطة منذ 2024'] },
      variants: [
        { title: `1 ل · ${I('HT-FLEU-1')}`, lines: ['السعة: 1 ل', 'مخزون بالوحدات · 3 تعبئات'] },
        { title: `5 ل · ${I('HT-FLEU-5')}`, lines: ['السعة: 5 ل', 'مخزون بالوحدات: 66 · 3 تعبئات'], hot: true },
        { title: `2 ل · ${I('HT-FLEU-2')}`, lines: ['السعة: 2 ل', 'مخزون بالوحدات · تعبئتان'] },
      ],
      packVariant: 1,
      packs: [
        { title: 'وحدة · قارورة', lines: [I('EAN-13 6130001234567'), 'معامل 1', `سعر تجزئة ${I('1,290 DA')}`, 'تُمسح في الصندوق'] },
        { title: 'كرتون من 4', lines: [I('GTIN-14 · ITF-14'), 'معامل 4', `سعر جملة ${I('4,960 DA')}`, 'يُمسح عند الاستلام'], hot: true },
        { title: 'طبلية · 112 كرتوناً', lines: ['معامل 448', 'عند الطلب', 'سعر بعرض', 'لا على الرف أبداً'] },
      ],
      ellipsis: '… تعبئات',
      legendLabel: 'ما يعيش أين',
      legend: [{ k: 'الطراز', v: 'صور · وصف' }, { k: 'المتغير', v: 'سمة · مخزون' }, { k: 'التعبئة', v: 'رمز · معامل · سعر' }, { k: 'في كل مكان', v: 'حالة · تاريخ' }],
      rule: 'يُعدّ المخزون عند المتغير بوحدات الأساس؛ ويعيش السعر والباركود عند التعبئة؛ وتعيش الصور والوصف عند الطراز، مرة واحدة.',
      rule2: 'الكرتون ليس منتجاً آخر: إنه أربع وحدات من المتغير نفسه، برمزه وسعره الخاصين.',
      note: 'المراجع والرموز والمعاملات والأسعار: مثال مبني · رموز GTIN بـ 8 و12 و13 و14 رقماً؛ وGTIN-14 لشحنات الجملة لا للصندوق',
    },
    before: {
      title: 'اثنا عشر سطراً لمنتج واحد، وما تصير إليه: بطاقة بثلاثة مستويات',
      alt: 'على اليمين اثنا عشر سطراً من ملف قديم لزيت 5 لترات نفسه: رموز مختلفة، تسميات بأحرف كبيرة أو مختصرة، سعر لكل سطر، سطران هما في الواقع كرتون من 4، سطر «رمز قديم» بلا مخزون، سطر بالعربية، سطر بسعر صفر. على اليسار ما تصير إليه: طراز زيت المائدة فليوريال، متغير 5 لترات بمخزون إجمالي معاد حسابه بالوحدات، تعبئتان، الوحدة والكرتون من 4، كل منهما برمزه وسعره. وفي الأسفل ثلاثة عدادات: عشرة أسطر مدموجة، سطران محفوظان تعبئتين، سطر مرفوض، سعر صفر، يفصل فيه المسيّر. والبيانات مثال مبني.',
      beforeLabel: 'قبل · اثنا عشر سطراً من الملف القديم', beforeCols: ['الرمز', 'التسمية', 'السعر', 'المصير'],
      lines: [
        { code: I('HU5'), label: 'زيت 5ل', price: I('1,290'), verdict: 'مدموج', fate: 'merge', to: 1 },
        { code: I('HUILE5L'), label: 'HUILE FLEURIAL 5 L', price: I('1,290'), verdict: 'مدموج', fate: 'merge', to: 1 },
        { code: I('FL-5'), label: 'Fleurial 5 litres', price: I('1,300'), verdict: 'مدموج · سعر مستبعَد', fate: 'merge', to: 1 },
        { code: I('0001234567'), label: 'huile de table 5l', price: I('1,290'), verdict: 'مدموج · EAN محفوظ', fate: 'merge', to: 1 },
        { code: I('HU5-C4'), label: 'زيت 5ل كرتون 4', price: I('4,960'), verdict: 'تعبئة', fate: 'keep', to: 3 },
        { code: I('CART-HUILE'), label: 'كرتون زيت ×4', price: I('4,960'), verdict: 'مدموج في الكرتون', fate: 'merge', to: 3 },
        { code: I('HU5-OLD'), label: 'زيت 5ل (رمز قديم)', price: I('1,150'), verdict: 'مدموج · رمز بديل', fate: 'merge', to: 1 },
        { code: 'زيت5', label: 'زيت المائدة 5 ل', price: I('1,290'), verdict: 'مدموج · تسمية عربية', fate: 'merge', to: 0 },
        { code: I('HU5B'), label: 'زيت 5ل بيدون', price: I('1,290'), verdict: 'مدموج', fate: 'merge', to: 1 },
        { code: I('FLEU5'), label: 'FLEURIAL 5L PROMO', price: I('1,190'), verdict: 'مدموج · ترويج ← شبكة', fate: 'merge', to: 2 },
        { code: I('HU-5-L'), label: 'زيت 5 ل', price: '0', verdict: 'مرفوض · سعر صفر', fate: 'reject' },
        { code: I('HU5X'), label: 'زيت 5ل', price: I('1,290'), verdict: 'مدموج', fate: 'merge', to: 1 },
      ],
      afterLabel: 'بعد · بطاقة واحدة بثلاثة مستويات',
      targets: [
        { y: 140, h: 56, indent: 0, title: 'الطراز · زيت المائدة فليوريال', lines: ['تسمية فرنسية + عربية · علامة · فئة · صور', 'وصف مكتوب مرة واحدة'], hot: false },
        { y: 212, h: 70, indent: 24, title: `المتغير · 5 ل · ${I('HT-FLEU-5')}`, lines: ['مخزون معاد حسابه: 66 وحدة (كل الأسطر)', `بدائل: ${I('HU5, HUILE5L, FL-5, HU5-OLD, HU5B, HU5X')}`, 'السمة السعة = 5 ل'], hot: true },
        { y: 298, h: 56, indent: 48, title: 'تعبئة · وحدة', lines: [`${I('EAN-13 6130001234567')} · معامل 1`, `سعر تجزئة ${I('1,290 DA')} · ترويج ${I('1,190 DA')} في الشبكة`] },
        { y: 370, h: 56, indent: 48, title: 'تعبئة · كرتون من 4', lines: ['رمز الكرتون · معامل 4', `سعر جملة ${I('4,960 DA')}`] },
      ],
      counters: [{ big: '10', label: 'أسطر مدموجة في البطاقة' }, { big: '2', label: 'سطران صارا تعبئتين', hot: true }, { big: '1', label: 'سطر مرفوض · سعر صفر · للمسيّر' }, { big: I('6 → 1'), label: 'رموز داخلية محفوظة بدائل' }],
      rule: 'الرموز القديمة لا تضيع: تصير بدائل للمتغير كي تظل الفواتير القديمة وعادات البائعين تجد المنتج.',
      rule2: 'يُجمع مخزون الأسطر الاثني عشر بوحدات الأساس لحظة الاستلام، ولن يتوزع بعد ذلك على تكرارات أبداً.',
      note: 'الأسطر والرموز والأسعار: مثال مبني · الاستلام يتبع التجربة على الفارغ وتقرير الرفض الموصوفَين في دليل الاستيراد',
    },
  },
};
