// Bespoke animated figures for the 2027 "every quote takes two hours and the price depends on who makes it" post.
//  configure(): a made-to-measure aluminium window: dimensions, option groups
//               with the chosen value highlighted and the constraints that
//               fired (one option greyed with its reason, one forced), and the
//               price built as a waterfall from base per m² to total with the
//               rounding and the lead time. Options appear, bars grow.
//  fanout():    one accepted configuration in the middle; around it, the four
//               documents it generates without retyping: the quote with its
//               drawing and lines, the generated bill of materials with cut
//               lengths, the production order on acceptance, and the fitting
//               visit; connectors draw; a strip compares two hours by hand
//               with two minutes.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function draw(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{stroke-dashoffset:1000}${(at + dur).toFixed(1)}%,100%{stroke-dashoffset:0}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function grow(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
const I = (x) => `⁦${x}⁩`;

export function configure(t, rtl) {
  const c = ctx(rtl); const P = 'cf'; const css = []; const H = 540;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  // left: window sketch + dimensions
  const sx = 80, sy = 110, sw = 210, sh = 180;
  s += `<g style="animation:${show(css, P, 'sk', 2)}">` + rect(c, sx, sy, sw, sh, { stroke: C.fg70, fill: 'none' }) + rect(c, sx + 8, sy + 8, sw - 16, sh - 16, { stroke: C.line2, fill: 'rgba(255,255,255,0.03)' }) + line(c, sx + sw / 2, sy + 8, sx + sw / 2, sy + sh - 8, { stroke: C.line2 })
    + line(c, sx, sy + sh + 14, sx + sw, sy + sh + 14, { stroke: C.fg55 }) + text(c, sx + sw / 2, sy + sh + 28, t.dimW, { size: 9.5, font: 'mono', fill: C.fg70, anchor: 'middle' })
    + line(c, sx + sw + 14, sy, sx + sw + 14, sy + sh, { stroke: C.fg55 }) + text(c, sx + sw + 20, sy + sh / 2 + 4, t.dimH, { size: 9.5, font: 'mono', fill: C.fg70 })
    + text(c, sx, sy - 12, t.sketchLabel, { size: 10, font: 'mono', fill: C.fg35, letter: 1.5, upper: true }) + '</g>';
  s += `<g style="animation:${show(css, P, 'sa', 3)}">` + text(c, sx, sy + sh + 50, t.area, { size: 9.5, font: 'mono', fill: C.accent }) + text(c, sx, sy + sh + 66, t.area2, { size: 9, font: 'mono', fill: C.fg55 }) + '</g>';
  // middle: option groups
  const ox = 360, oy = 110, ow = 360;
  s += text(c, ox, oy - 12, t.optLabel, { size: 10, font: 'mono', fill: C.fg35, letter: 1.5, upper: true });
  t.groups.forEach((g, i) => {
    const y = oy + i * 56; const at = 4 + i * 2;
    s += `<g style="animation:${show(css, P, `g${i}`, at)}">` + text(c, ox, y + 10, g.name, { size: 9.5, font: 'mono', fill: C.fg55 });
    let x = ox;
    g.opts.forEach((o, k) => { const w = o.w || 86; const st = o.state; s += rect(c, x, y + 16, w, 22, { stroke: st === 'on' ? C.accent : st === 'off' ? C.line : C.line2, fill: st === 'on' ? 'rgba(242,181,68,0.18)' : 'none', dash: st === 'off' ? '3 3' : undefined }) + text(c, x + 8, y + 31, o.t, { size: 9, font: 'mono', fill: st === 'on' ? C.accent : st === 'off' ? C.fg35 : C.fg70 }); x += w + 6; });
    if (g.note) s += text(c, ox, y + 50, g.note, { size: 8.5, font: 'mono', fill: g.noteHot ? C.accent : C.fg55 });
    s += '</g>';
  });
  // right: price waterfall
  const px = 780, py = 110, pw = 340; const max = t.total;
  s += text(c, px, py - 12, t.priceLabel, { size: 10, font: 'mono', fill: C.fg35, letter: 1.5, upper: true });
  let acc = 0;
  t.price.forEach((p, i) => {
    const y = py + i * 34; const at = 16 + i * 1.5; const x0 = px + Math.round((acc / max) * pw); const w = Math.max(3, Math.round((p.v / max) * pw)); acc += p.v;
    s += `<g style="animation:${show(css, P, `p${i}`, at)}">` + text(c, px, y + 10, p.l, { size: 9, font: 'mono', fill: C.fg55 }) + `<g style="transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'};animation:${grow(css, P, `pg${i}`, at, 2)}">` + rect(c, x0, y + 14, w, 10, { stroke: 'none', fill: p.hot ? C.accent : C.fg55 }) + '</g>' + text(c, px + pw, y + 10, p.a, { size: 9.5, font: 'mono', fill: p.hot ? C.accent : C.fg, anchor: 'end' }) + '</g>';
  });
  const ty = py + t.price.length * 34 + 8;
  s += `<g style="animation:${show(css, P, 'tot', 28)}">` + rect(c, px, ty, pw, 54, { stroke: C.accent, fill: 'rgba(242,181,68,0.06)' }) + text(c, px + 10, ty + 22, t.totalLabel, { size: 10, fill: C.fg }) + text(c, px + pw - 10, ty + 22, t.totalText, { size: 14, font: 'mono', fill: C.accent, weight: 500, anchor: 'end' }) + text(c, px + 10, ty + 42, t.totalSub, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>';
  s += text(c, 80, 426, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, 446, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, 466, t.rule3, { size: 12.5, fill: C.fg }) + text(c, 80, 492, t.note, { size: 10, font: 'mono', fill: C.fg55 }) + text(c, 80, 508, t.note2, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

export function fanout(t, rtl) {
  const c = ctx(rtl); const P = 'fo'; const css = []; const H = 600;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  // centre configuration card
  const cx = 420, cy = 196, cw = 360, ch = 110;
  s += `<g style="animation:${show(css, P, 'c', 2)}">` + rect(c, cx, cy, cw, ch, { stroke: C.accent, fill: 'rgba(242,181,68,0.06)' }) + text(c, cx + 12, cy + 22, t.center.title, { size: 12, fill: C.accent, weight: 500 }) + t.center.lines.map((l, i) => text(c, cx + 12, cy + 40 + i * 13, l, { size: 8.5, font: 'mono', fill: C.fg70 })).join('') + '</g>';
  // four doc cards: top-left, top-right, bottom-left, bottom-right
  const pos = [[80, 110], [820, 110], [80, 306], [820, 306]]; const dw = 300, dh = 96;
  t.docs.forEach((d, i) => {
    const [x, y] = pos[i]; const at = 6 + i * 4;
    const ax = i % 2 === 0 ? x + dw : x; const ay = y + dh / 2; const bx = i % 2 === 0 ? cx : cx + cw; const by = cy + ch / 2 + (i < 2 ? -20 : 20);
    s += `<path d="M${c.X(bx)} ${by} C ${c.X(bx + (i % 2 === 0 ? -40 : 40))} ${by}, ${c.X(ax + (i % 2 === 0 ? 40 : -40))} ${ay}, ${c.X(ax)} ${ay}" fill="none" stroke="${d.hot ? C.accent : C.line2}" stroke-width="1" pathLength="1000" style="stroke-dashoffset:0;animation:${draw(css, P, `l${i}`, at - 1, 2.5)}"/>`;
    s += `<g style="animation:${show(css, P, `d${i}`, at)}">` + rect(c, x, y, dw, dh, { stroke: d.hot ? C.accent : C.line2, fill: C.fill }) + text(c, x + 10, y + 18, d.title, { size: 11, fill: d.hot ? C.accent : C.fg, weight: 500 }) + d.lines.map((l, k) => text(c, x + 10, y + 36 + k * 13, l, { size: 8.5, font: 'mono', fill: C.fg55 })).join('') + text(c, x + 10, y + dh - 10, d.when, { size: 8.5, font: 'mono', fill: d.hot ? C.accent : C.fg70 }) + '</g>';
  });
  // compare strip
  const ky = 452;
  t.compare.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, 24 + i * 2)}">` + rect(c, x, ky, 340, 50, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? 'rgba(242,181,68,0.06)' : C.fill }) + text(c, x + 12, ky + 21, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 38, k.l, { size: 9, fill: C.fg70 }) + '</g>'; });
  s += text(c, 80, 530, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, 550, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, 576, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"],svg path[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    configure: {
      title: 'Configurer une fenêtre sur mesure : dimensions, options sous contraintes, prix règle par règle',
      alt: 'À gauche, le croquis d’une fenêtre à deux vantaux de 1 400 millimètres de large et 1 200 de haut, surface 1,68 mètre carré. Au milieu, les groupes d’options : type, coulissant ou battant, le battant choisi ; vantaux, un vantail grisé parce que la largeur dépasse 900 millimètres par vantail, deux vantaux imposés ; couleur, blanc ou gris anthracite avec un supplément de 12 pour cent, anthracite choisi ; vitrage, simple ou double 4-16-4, double choisi ; accessoires, moustiquaire choisie et volet roulant choisi, autorisé parce que la hauteur est sous 2 200. À droite, le prix en cascade : base 18 000 dinars par mètre carré, 30 240 ; anthracite plus 12 pour cent, 3 629 ; double vitrage 6 500 par mètre carré, 10 920 ; moustiquaire 4 500 ; volet roulant 9 000 par mètre de largeur, 12 600 ; total 61 889 arrondi à 61 900 dinars, délai 12 jours. Les données sont un exemple construit.',
      sketchLabel: 'Croquis · fenêtre aluminium', dimW: '1 400 mm', dimH: '1 200 mm', area: 'surface 1,68 m² · périmètre 5,2 m', area2: 'largeur > 900 mm → 2 vantaux imposés',
      optLabel: 'Options · règles appliquées en direct',
      groups: [
        { name: 'type', opts: [{ t: 'coulissant', state: 'av' }, { t: 'battant', state: 'on' }] },
        { name: 'vantaux', opts: [{ t: '1 vantail', state: 'off' }, { t: '2 vantaux', state: 'on' }], note: '1 vantail impossible : largeur de vantail max 900 mm', noteHot: true },
        { name: 'couleur', opts: [{ t: 'blanc', state: 'av' }, { t: 'gris anthracite', state: 'on', w: 110 }], note: 'anthracite : + 12 % sur la base' },
        { name: 'vitrage', opts: [{ t: 'simple', state: 'av' }, { t: 'double 4-16-4', state: 'on', w: 110 }], note: 'double : + 6 500 DA / m²' },
        { name: 'accessoires', opts: [{ t: 'moustiquaire', state: 'on', w: 100 }, { t: 'volet roulant', state: 'on', w: 100 }], note: 'volet roulant autorisé : hauteur ≤ 2 200 mm' },
      ],
      priceLabel: 'Prix · construit règle par règle',
      total: 61889,
      price: [
        { l: 'base 18 000 DA / m² × 1,68', v: 30240, a: '30 240' },
        { l: 'anthracite + 12 %', v: 3629, a: '3 629' },
        { l: 'double vitrage 6 500 / m²', v: 10920, a: '10 920', hot: true },
        { l: 'moustiquaire · forfait', v: 4500, a: '4 500' },
        { l: 'volet roulant 9 000 / m × 1,4', v: 12600, a: '12 600', hot: true },
      ],
      totalLabel: 'Total · arrondi à la centaine', totalText: '61 900 DA', totalSub: '61 889 → 61 900 · délai 12 jours · marge vérifiée contre la nomenclature générée',
      rule: 'Une option n’est pas une ligne de texte : elle a des valeurs, des contraintes avec les autres options et des règles de prix, écrites une fois par le gérant.',
      rule2: 'Le prix se construit règle par règle à partir des dimensions, et chaque règle est visible sur le devis ; deux vendeurs obtiennent le même prix.',
      rule3: 'Une contrainte grise l’option interdite et dit pourquoi ; elle ne laisse pas le vendeur promettre un vantail de 1 400 mm.',
      note: 'produit, dimensions, options, prix et règles : exemple construit · les limites (900 mm par vantail, 2 200 mm pour le volet) sont celles du fabricant de l’exemple, pas une norme',
      note2: 'un configurateur limite les options autorisées et valide leur compatibilité, puis intègre les choix dans la spécification du produit (description courante)',
    },
    fanout: {
      title: 'Une configuration acceptée, quatre documents sans ressaisie',
      alt: 'Au centre, la configuration acceptée : fenêtre battante deux vantaux 1 400 par 1 200, anthracite, double vitrage, moustiquaire, volet roulant, 61 900 dinars, acceptée le 11 novembre. Autour, quatre documents reliés : le devis avec croquis coté, lignes de prix et validité, envoyé en deux minutes ; la nomenclature générée, profilés de dormant 5,2 mètres et de vantaux 7,6 mètres en barres de 6 mètres soit 3 barres, deux vitrages de 660 par 1 150, quincaillerie, volet, avec le coût d’atelier prévu ; l’ordre de fabrication créé à l’acceptation avec les composants réservés ; la visite de pose planifiée avec le technicien et la fiche équipement créée. En bas, une comparaison : deux heures et un prix différent selon le vendeur à la main, deux minutes et le même prix avec le configurateur. Les données sont un exemple construit.',
      center: { title: 'Configuration CFG-2026-0731 · acceptée le 11 nov', lines: ['battant 2 vantaux · 1 400 × 1 200 · anthracite', 'double 4-16-4 · moustiquaire · volet roulant', '61 900 DA · validité 15 jours · acompte 30 % reçu', 'une seule source : les quatre documents la lisent'] },
      docs: [
        { title: 'Devis DV-2026-0731', lines: ['croquis coté · 5 lignes de prix · règles visibles', 'PDF bilingue · lien de paiement de l’acompte', 'versions : v1 blanc, v2 anthracite'], when: 'généré en 2 min · envoyé WhatsApp + e-mail', hot: true },
        { title: 'Nomenclature générée', lines: ['dormant 5,2 m + vantaux 7,6 m → 3 barres de 6 m', 'vitrage double 660 × 1 150 × 2 · quincaillerie', 'volet 1 400 × 1 250 · moustiquaire · chutes 5,2 m'], when: 'coût d’atelier prévu 38 400 DA · marge 38 %' },
        { title: 'Ordre de fabrication OF-0731', lines: ['créé à l’acceptation · composants réservés', 'découpe → assemblage → vitrage → contrôle', 'lot fini lié à la configuration'], when: 'lancé le 12 nov · prêt le 20 nov' },
        { title: 'Pose · ordre de travail OT-0731', lines: ['technicien Nadir · zone Est · 23 nov 9 h', 'photos avant/après · signature du client', 'fiche équipement créée chez le client'], when: 'garantie 2 ans · préventive à 12 mois' },
      ],
      compare: [{ big: '2 h · prix variable', l: 'à la main : calcul, croquis, devis Word, recopie en atelier' }, { big: '2 min · même prix', l: 'configurateur : règles une fois, quatre documents sans ressaisie', hot: true }, { big: '0 ressaisie', l: 'la nomenclature et l’ordre lisent la configuration' }],
      rule: 'La configuration acceptée est la source unique : le devis, la nomenclature, l’ordre de fabrication et la pose la lisent, personne ne la recopie.',
      rule2: 'La nomenclature générée donne un coût d’atelier prévu avant d’envoyer le devis : la marge est connue au moment de promettre le prix.',
      note: 'configuration, documents, longueurs, coûts et dates : exemple construit · le calcul de barres suit la règle de chutes du fabricant ; la pose suit le guide sur les interventions terrain',
    },
  },
  en: {
    configure: {
      title: 'Configuring a made-to-measure window: dimensions, constrained options, price rule by rule',
      alt: 'On the left, the sketch of a two-leaf window 1,400 millimetres wide and 1,200 high, area 1.68 square metres. In the middle, the option groups: type, sliding or casement, casement chosen; leaves, one leaf greyed because the width exceeds 900 millimetres per leaf, two leaves forced; colour, white or anthracite grey with a 12 percent surcharge, anthracite chosen; glazing, single or double 4-16-4, double chosen; accessories, insect screen chosen and roller shutter chosen, allowed because the height is under 2,200. On the right, the price as a waterfall: base 18,000 dinars per square metre, 30,240; anthracite plus 12 percent, 3,629; double glazing 6,500 per square metre, 10,920; insect screen 4,500; roller shutter 9,000 per metre of width, 12,600; total 61,889 rounded to 61,900 dinars, lead time 12 days. The data is a constructed example.',
      sketchLabel: 'Sketch · aluminium window', dimW: '1,400 mm', dimH: '1,200 mm', area: 'area 1.68 m² · perimeter 5.2 m', area2: 'width > 900 mm → 2 leaves forced',
      optLabel: 'Options · rules applied live',
      groups: [
        { name: 'type', opts: [{ t: 'sliding', state: 'av' }, { t: 'casement', state: 'on' }] },
        { name: 'leaves', opts: [{ t: '1 leaf', state: 'off' }, { t: '2 leaves', state: 'on' }], note: '1 leaf impossible: max leaf width 900 mm', noteHot: true },
        { name: 'colour', opts: [{ t: 'white', state: 'av' }, { t: 'anthracite grey', state: 'on', w: 110 }], note: 'anthracite: + 12 % on base' },
        { name: 'glazing', opts: [{ t: 'single', state: 'av' }, { t: 'double 4-16-4', state: 'on', w: 110 }], note: 'double: + 6,500 DA / m²' },
        { name: 'accessories', opts: [{ t: 'insect screen', state: 'on', w: 100 }, { t: 'roller shutter', state: 'on', w: 100 }], note: 'roller shutter allowed: height ≤ 2,200 mm' },
      ],
      priceLabel: 'Price · built rule by rule',
      total: 61889,
      price: [
        { l: 'base 18,000 DA / m² × 1.68', v: 30240, a: '30,240' },
        { l: 'anthracite + 12 %', v: 3629, a: '3,629' },
        { l: 'double glazing 6,500 / m²', v: 10920, a: '10,920', hot: true },
        { l: 'insect screen · flat', v: 4500, a: '4,500' },
        { l: 'roller shutter 9,000 / m × 1.4', v: 12600, a: '12,600', hot: true },
      ],
      totalLabel: 'Total · rounded to the hundred', totalText: '61,900 DA', totalSub: '61,889 → 61,900 · lead time 12 days · margin checked against the generated BOM',
      rule: 'An option is not a line of text: it has values, constraints with other options and price rules, written once by the manager.',
      rule2: 'The price is built rule by rule from the dimensions, and every rule is visible on the quote; two sellers get the same price.',
      rule3: 'A constraint greys the forbidden option and says why; it does not let the seller promise a 1,400 mm leaf.',
      note: 'product, dimensions, options, prices and rules: constructed example · the limits (900 mm per leaf, 2,200 mm for the shutter) are the example maker’s, not a standard',
      note2: 'a configurator limits allowable options and validates their compatibility, then integrates the choices into the product specification (common description)',
    },
    fanout: {
      title: 'One accepted configuration, four documents without retyping',
      alt: 'In the centre, the accepted configuration: casement window two leaves 1,400 by 1,200, anthracite, double glazing, insect screen, roller shutter, 61,900 dinars, accepted on 11 November. Around it, four linked documents: the quote with dimensioned sketch, price lines and validity, sent in two minutes; the generated bill of materials, frame profiles 5.2 metres and leaf profiles 7.6 metres in 6-metre bars, that is 3 bars, two glazings 660 by 1,150, hardware, shutter, with the planned workshop cost; the production order created on acceptance with components reserved; the fitting visit planned with the technician and the equipment record created. At the bottom, a comparison: two hours and a different price per seller by hand, two minutes and the same price with the configurator. The data is a constructed example.',
      center: { title: 'Configuration CFG-2026-0731 · accepted 11 Nov', lines: ['casement 2 leaves · 1,400 × 1,200 · anthracite', 'double 4-16-4 · insect screen · roller shutter', '61,900 DA · valid 15 days · 30 % deposit received', 'one source: the four documents read it'] },
      docs: [
        { title: 'Quote DV-2026-0731', lines: ['dimensioned sketch · 5 price lines · visible rules', 'bilingual PDF · deposit payment link', 'versions: v1 white, v2 anthracite'], when: 'generated in 2 min · sent WhatsApp + e-mail', hot: true },
        { title: 'Generated bill of materials', lines: ['frame 5.2 m + leaves 7.6 m → 3 bars of 6 m', 'double glazing 660 × 1,150 × 2 · hardware', 'shutter 1,400 × 1,250 · screen · offcuts 5.2 m'], when: 'planned workshop cost 38,400 DA · margin 38 %' },
        { title: 'Production order PO-0731', lines: ['created on acceptance · components reserved', 'cutting → assembly → glazing → check', 'finished lot linked to the configuration'], when: 'launched 12 Nov · ready 20 Nov' },
        { title: 'Fitting · work order WO-0731', lines: ['technician Nadir · East zone · 23 Nov 9:00', 'before/after photos · customer signature', 'equipment record created at the customer’s'], when: '2-year warranty · preventive at 12 months' },
      ],
      compare: [{ big: '2 h · variable price', l: 'by hand: computing, sketch, Word quote, retyping in the workshop' }, { big: '2 min · same price', l: 'configurator: rules once, four documents without retyping', hot: true }, { big: '0 retyping', l: 'the BOM and the order read the configuration' }],
      rule: 'The accepted configuration is the single source: the quote, the BOM, the production order and the fitting read it, nobody retypes it.',
      rule2: 'The generated BOM gives a planned workshop cost before the quote is sent: the margin is known when the price is promised.',
      note: 'configuration, documents, lengths, costs and dates: constructed example · the bar count follows the maker’s offcut rule; fitting follows the field service guide',
    },
  },
  ar: {
    configure: {
      title: 'تهيئة نافذة على المقاس: أبعاد، خيارات مقيَّدة، سعر قاعدةً قاعدة',
      alt: 'على جانب، رسم نافذة بدرفتين عرضها 1,400 مليمتر وارتفاعها 1,200، مساحة 1.68 متر مربع. في الوسط مجموعات الخيارات: النوع، منزلق أو مفصلي، والمفصلي مختار؛ الدرفات، درفة واحدة رمادية لأن العرض يتجاوز 900 مليمتر للدرفة، ودرفتان مفروضتان؛ اللون، أبيض أو رمادي أنثراسيت بزيادة 12 بالمائة، والأنثراسيت مختار؛ الزجاج، مفرد أو مزدوج 4-16-4، والمزدوج مختار؛ الملحقات، شبكة ناموس مختارة ومصراع دوّار مختار ومسموح لأن الارتفاع تحت 2,200. على الجانب الآخر السعر شلالاً: أساس 18,000 دينار للمتر المربع، 30,240؛ أنثراسيت زائد 12 بالمائة، 3,629؛ زجاج مزدوج 6,500 للمتر المربع، 10,920؛ شبكة ناموس 4,500؛ مصراع دوّار 9,000 لمتر العرض، 12,600؛ المجموع 61,889 مقرَّباً إلى 61,900 دينار، مهلة 12 يوماً. والبيانات مثال مبني.',
      sketchLabel: 'رسم · نافذة ألمنيوم', dimW: I('1,400 mm'), dimH: I('1,200 mm'), area: `مساحة ${I('1.68 m²')} · محيط ${I('5.2 m')}`, area2: 'العرض > 900 مم ← درفتان مفروضتان',
      optLabel: 'الخيارات · القواعد تُطبَّق مباشرة',
      groups: [
        { name: 'النوع', opts: [{ t: 'منزلق', state: 'av' }, { t: 'مفصلي', state: 'on' }] },
        { name: 'الدرفات', opts: [{ t: 'درفة واحدة', state: 'off' }, { t: 'درفتان', state: 'on' }], note: 'درفة واحدة مستحيلة: أقصى عرض درفة 900 مم', noteHot: true },
        { name: 'اللون', opts: [{ t: 'أبيض', state: 'av' }, { t: 'رمادي أنثراسيت', state: 'on', w: 110 }], note: 'أنثراسيت: + 12 ٪ على الأساس' },
        { name: 'الزجاج', opts: [{ t: 'مفرد', state: 'av' }, { t: 'مزدوج 4-16-4', state: 'on', w: 110 }], note: `مزدوج: ${I('+ 6,500 DA / m²')}` },
        { name: 'الملحقات', opts: [{ t: 'شبكة ناموس', state: 'on', w: 100 }, { t: 'مصراع دوّار', state: 'on', w: 100 }], note: 'المصراع مسموح: الارتفاع ≤ 2,200 مم' },
      ],
      priceLabel: 'السعر · يُبنى قاعدةً قاعدة',
      total: 61889,
      price: [
        { l: `أساس ${I('18,000 DA / m² × 1.68')}`, v: 30240, a: I('30,240') },
        { l: 'أنثراسيت + 12 ٪', v: 3629, a: I('3,629') },
        { l: `زجاج مزدوج ${I('6,500 / m²')}`, v: 10920, a: I('10,920'), hot: true },
        { l: 'شبكة ناموس · مبلغ ثابت', v: 4500, a: I('4,500') },
        { l: `مصراع دوّار ${I('9,000 / m × 1.4')}`, v: 12600, a: I('12,600'), hot: true },
      ],
      totalLabel: 'المجموع · مقرَّب إلى المائة', totalText: I('61,900 DA'), totalSub: `${I('61,889 → 61,900')} · مهلة 12 يوماً · الهامش مفحوص مقابل قائمة المواد المولَّدة`,
      rule: 'الخيار ليس سطر نص: له قيم وقيود مع الخيارات الأخرى وقواعد سعر، يكتبها المسيّر مرة واحدة.',
      rule2: 'السعر يُبنى قاعدةً قاعدة من الأبعاد، وكل قاعدة مرئية على عرض السعر؛ وبائعان يحصلان على السعر نفسه.',
      rule3: 'القيد يرمّد الخيار الممنوع ويقول لماذا؛ ولا يدع البائع يعد بدرفة 1,400 مم.',
      note: 'المنتج والأبعاد والخيارات والأسعار والقواعد: مثال مبني · الحدود (900 مم للدرفة، 2,200 مم للمصراع) حدود مصنّع المثال لا معياراً',
      note2: 'المهيّئ يحدّ الخيارات المسموحة ويتحقق من توافقها ثم يدمج الاختيارات في مواصفة المنتج (وصف شائع)',
    },
    fanout: {
      title: 'تهيئة مقبولة واحدة، أربعة مستندات بلا إعادة كتابة',
      alt: 'في الوسط التهيئة المقبولة: نافذة مفصلية بدرفتين 1,400 في 1,200، أنثراسيت، زجاج مزدوج، شبكة ناموس، مصراع دوّار، 61,900 دينار، مقبولة في 11 نوفمبر. حولها أربعة مستندات مرتبطة: عرض السعر برسم مقاس وأسطر سعر وصلاحية، أُرسل في دقيقتين؛ قائمة المواد المولَّدة، مقاطع الإطار 5.2 متر والدرفات 7.6 متر في قضبان 6 أمتار أي 3 قضبان، زجاجان 660 في 1,150، عتاد، مصراع، بكلفة الورشة المخططة؛ أمر التصنيع المنشأ عند القبول بمكوّنات محجوزة؛ زيارة التركيب المخططة مع التقني وبطاقة المعدّة المنشأة. في الأسفل مقارنة: ساعتان وسعر يختلف بحسب البائع يدوياً، دقيقتان والسعر نفسه بالمهيّئ. والبيانات مثال مبني.',
      center: { title: `تهيئة ${I('CFG-2026-0731')} · مقبولة في 11 نوف`, lines: ['مفصلي درفتان · 1,400 × 1,200 · أنثراسيت', 'مزدوج 4-16-4 · شبكة ناموس · مصراع دوّار', `${I('61,900 DA')} · صلاحية 15 يوماً · عربون 30 ٪ مستلَم`, 'مصدر واحد: المستندات الأربعة تقرؤه'] },
      docs: [
        { title: `عرض سعر ${I('DV-2026-0731')}`, lines: ['رسم مقاس · 5 أسطر سعر · قواعد مرئية', 'PDF ثنائي اللغة · رابط دفع العربون', 'إصدارات: إ1 أبيض، إ2 أنثراسيت'], when: 'وُلّد في دقيقتين · أُرسل WhatsApp + بريد', hot: true },
        { title: 'قائمة مواد مولَّدة', lines: [`إطار ${I('5.2 m')} + درفات ${I('7.6 m')} ← 3 قضبان من 6 م`, 'زجاج مزدوج 660 × 1,150 × 2 · عتاد', 'مصراع 1,400 × 1,250 · شبكة · قصاصات 5.2 م'], when: `كلفة ورشة مخططة ${I('38,400 DA')} · هامش 38 ٪` },
        { title: `أمر تصنيع ${I('OF-0731')}`, lines: ['منشأ عند القبول · مكوّنات محجوزة', 'قص ← تجميع ← تزجيج ← مراقبة', 'دفعة نهائية مرتبطة بالتهيئة'], when: 'أُطلق 12 نوف · جاهز 20 نوف' },
        { title: `تركيب · أمر عمل ${I('OT-0731')}`, lines: ['التقني نذير · المنطقة الشرقية · 23 نوف 09:00', 'صور قبل/بعد · توقيع الزبون', 'بطاقة معدّة منشأة عند الزبون'], when: 'ضمان سنتان · وقائية عند 12 شهراً' },
      ],
      compare: [{ big: '2 س · سعر متغير', l: 'يدوياً: حساب، رسم، عرض سعر Word، إعادة كتابة في الورشة' }, { big: '2 د · السعر نفسه', l: 'المهيّئ: قواعد مرة واحدة، أربعة مستندات بلا إعادة كتابة', hot: true }, { big: '0 إعادة كتابة', l: 'قائمة المواد والأمر يقرآن التهيئة' }],
      rule: 'التهيئة المقبولة هي المصدر الواحد: عرض السعر وقائمة المواد وأمر التصنيع والتركيب تقرؤها، ولا أحد يعيد كتابتها.',
      rule2: 'قائمة المواد المولَّدة تعطي كلفة ورشة مخططة قبل إرسال عرض السعر: الهامش معروف لحظة الوعد بالسعر.',
      note: 'التهيئة والمستندات والأطوال والكلف والتواريخ: مثال مبني · حساب القضبان يتبع قاعدة القصاصات عند المصنّع؛ والتركيب يتبع دليل التدخلات الميدانية',
    },
  },
};
