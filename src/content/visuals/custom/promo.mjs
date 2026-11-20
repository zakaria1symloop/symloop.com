// Bespoke animated figures for the 2027 "the promotion worked and we lost money" post.
//  basket(): one basket at the till and the campaigns evaluated against it: four
//            lines with prices, five candidate campaigns with their conditions ticked
//            or crossed, the stacking order, the margin guard capping one discount,
//            and the totals before and after; three tiles. Rows appear, the guard draws.
//  uplift(): a promotion measured against control stores over six weeks: grouped
//            bars (promo stores vs control stores) with the promotion window shaded,
//            the margin line beneath, the after-promotion dip, three tiles. Bars grow.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function draw(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{stroke-dashoffset:1000}${(at + dur).toFixed(1)}%,100%{stroke-dashoffset:0}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function growY(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleY(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleY(1)}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
const I = (x) => `⁦${x}⁩`;

export function basket(t, rtl) {
  const c = ctx(rtl); const P = 'bk'; const css = []; const H = 610;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: 'rgba(242,181,68,0.06)' }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  // basket lines (left)
  const bx = 80, bw = 380, by = 150;
  s += text(c, bx, by - 6, t.basketLabel, { size: 9, font: 'mono', fill: C.fg35, letter: 1.2, upper: true });
  t.lines.forEach((l, i) => { const y = by + 10 + i * 34; s += `<g style="animation:${show(css, P, `l${i}`, 3 + i * 0.8)}">` + text(c, bx, y + 14, l.name, { size: 10.5, fill: C.fg, weight: 500 }) + text(c, bx, y + 26, l.sub, { size: 8, font: 'mono', fill: C.fg55 }) + text(c, bx + bw, y + 14, l.price, { size: 10, font: 'mono', fill: C.fg, anchor: 'end' }) + text(c, bx + bw, y + 26, l.after, { size: 8, font: 'mono', fill: l.hot ? C.accent : C.fg55, anchor: 'end' }) + line(c, bx, y + 32, bx + bw, y + 32, { stroke: C.line }) + '</g>'; });
  const ty = by + 10 + t.lines.length * 34 + 8;
  s += `<g style="animation:${show(css, P, 'tot', 16)}">` + rect(c, bx, ty, bw, 70, { stroke: C.accent, fill: 'rgba(242,181,68,0.06)' }) + text(c, bx + 12, ty + 20, t.totals.l1, { size: 9.5, fill: C.fg70 }) + text(c, bx + bw - 12, ty + 20, t.totals.v1, { size: 10, font: 'mono', fill: C.fg, anchor: 'end' }) + text(c, bx + 12, ty + 38, t.totals.l2, { size: 9.5, fill: C.fg70 }) + text(c, bx + bw - 12, ty + 38, t.totals.v2, { size: 10, font: 'mono', fill: C.accent, anchor: 'end', weight: 500 }) + text(c, bx + 12, ty + 56, t.totals.l3, { size: 9.5, fill: C.fg70 }) + text(c, bx + bw - 12, ty + 56, t.totals.v3, { size: 10, font: 'mono', fill: C.fg, anchor: 'end', weight: 500 }) + '</g>';
  // campaigns (right)
  const cx = 500, cw = 620, cy = 150; const cols = [cx, cx + 250, cx + 470];
  s += text(c, cols[0], cy - 6, t.cols[0], { size: 9, font: 'mono', fill: C.fg35, letter: 1.2, upper: true }) + text(c, cols[1], cy - 6, t.cols[1], { size: 9, font: 'mono', fill: C.fg35, letter: 1.2, upper: true }) + text(c, cols[2], cy - 6, t.cols[2], { size: 9, font: 'mono', fill: C.fg35, letter: 1.2, upper: true });
  t.campaigns.forEach((cp, i) => {
    const y = cy + 12 + i * 46; const at = 6 + i * 1.5; const ok = cp.state === 'ok'; const cap = cp.state === 'cap'; const no = cp.state === 'no';
    s += `<g style="animation:${show(css, P, `c${i}`, at)}">` + rect(c, cx, y, cw, 40, { stroke: cap ? C.accent : ok ? C.line2 : C.line, fill: cap ? 'rgba(242,181,68,0.10)' : ok ? 'rgba(255,255,255,0.05)' : 'none', dash: no ? '3 3' : undefined })
      + text(c, cols[0] + 10, y + 16, cp.name, { size: 10, fill: no ? C.fg35 : C.fg, weight: 500 }) + text(c, cols[0] + 10, y + 30, cp.rule, { size: 7.5, font: 'mono', fill: C.fg55 })
      + text(c, cols[1], y + 16, cp.cond, { size: 8.5, font: 'mono', fill: no ? C.fg35 : C.fg70 }) + text(c, cols[1], y + 30, cp.cond2, { size: 7.5, font: 'mono', fill: no ? C.fg35 : C.fg55 })
      + text(c, cols[2], y + 16, cp.effect, { size: 10, font: 'mono', fill: cap ? C.accent : no ? C.fg35 : C.fg, weight: ok || cap ? 500 : 400 }) + text(c, cols[2], y + 30, cp.effect2, { size: 7.5, font: 'mono', fill: cap ? C.accent : C.fg55 }) + '</g>';
  });
  // guard line
  const gy = cy + 12 + t.campaigns.length * 46 + 6;
  s += `<line x1="${c.X(cx)}" y1="${gy}" x2="${c.X(cx + cw)}" y2="${gy}" stroke="${C.accent}" stroke-width="1.6" pathLength="1000" style="stroke-dashoffset:0;animation:${draw(css, P, 'gl', 14, 2)}"/>`;
  s += `<g style="animation:${show(css, P, 'gt', 15.5)}">` + text(c, cx, gy + 18, t.guard, { size: 10.5, fill: C.accent, weight: 500 }) + text(c, cx, gy + 33, t.guard2, { size: 8.5, font: 'mono', fill: C.fg70 }) + '</g>';
  const ky = Math.max(gy + 50, ty + 86);
  t.tiles.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, 19 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? 'rgba(242,181,68,0.06)' : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  s += text(c, 80, ky + 86, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"],svg line[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

export function uplift(t, rtl) {
  const c = ctx(rtl); const P = 'up'; const css = []; const H = 620;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: 'rgba(242,181,68,0.06)' }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const ax = 160, aw = 760, ay = 150, ah = 200; const MAX = t.max; const n = t.weeks.length; const gw = aw / n; const bw = 36;
  const yV = (v) => ay + ah - (v / MAX) * ah;
  // promo window
  s += `<g style="animation:${show(css, P, 'win', 3)}">` + rect(c, ax + t.win[0] * gw, ay - 6, (t.win[1] - t.win[0]) * gw, ah + 6, { stroke: 'none', fill: 'rgba(242,181,68,0.08)' }) + text(c, ax + (t.win[0] + (t.win[1] - t.win[0]) / 2) * gw, ay - 12, t.winLabel, { size: 9, font: 'mono', fill: C.accent, anchor: 'middle' }) + '</g>';
  [0, 0.5, 1].forEach((f) => { const v = f * MAX; s += line(c, ax, yV(v), ax + aw, yV(v), { stroke: C.line }) + text(c, ax - 8, yV(v) + 3, String(Math.round(v)), { size: 8.5, font: 'mono', fill: C.fg35, anchor: 'end' }); });
  s += text(c, ax - 8, ay - 12, t.yLabel, { size: 8, font: 'mono', fill: C.fg35, anchor: 'end' });
  t.weeks.forEach((w, i) => {
    const x0 = ax + i * gw + gw / 2; const at = 4 + i * 1.4; const inWin = i >= t.win[0] && i < t.win[1];
    s += text(c, x0, ay + ah + 14, w.l, { size: 9, font: 'mono', fill: C.fg35, anchor: 'middle' });
    // promo bar
    s += `<g style="transform-box:fill-box;transform-origin:bottom;animation:${growY(css, P, `p${i}`, at, 1)}">` + rect(c, x0 - bw - 3, yV(w.p), bw, ay + ah - yV(w.p), { stroke: 'none', fill: inWin ? C.accent : 'rgba(242,181,68,0.45)' }) + '</g>';
    // control bar
    s += `<g style="transform-box:fill-box;transform-origin:bottom;animation:${growY(css, P, `c${i}`, at + 0.4, 1)}">` + rect(c, x0 + 3, yV(w.c), bw, ay + ah - yV(w.c), { stroke: 'none', fill: 'rgba(255,255,255,0.35)' }) + '</g>';
    s += `<g style="animation:${show(css, P, `v${i}`, at + 1.4)}">` + text(c, x0 - bw / 2 - 3, yV(w.p) - 5, String(w.p), { size: 8.5, font: 'mono', fill: inWin ? C.accent : C.fg70, anchor: 'middle' }) + text(c, x0 + bw / 2 + 3, yV(w.c) - 5, String(w.c), { size: 8.5, font: 'mono', fill: C.fg55, anchor: 'middle' }) + (w.m ? text(c, x0, ay + ah + 28, w.m, { size: 8, font: 'mono', fill: w.mHot ? C.accent : C.fg55, anchor: 'middle' }) : '') + '</g>';
  });
  s += text(c, ax, ay + ah + 28, t.mLabel, { size: 8, font: 'mono', fill: C.fg35, anchor: 'end' });
  // legend
  const ly = ay + ah + 44;
  s += `<g style="animation:${show(css, P, 'lg', 14)}">` + rect(c, 80, ly, 14, 10, { stroke: 'none', fill: C.accent }) + text(c, 100, ly + 9, t.legend[0], { size: 9, font: 'mono', fill: C.fg55 }) + rect(c, 420, ly, 14, 10, { stroke: 'none', fill: 'rgba(255,255,255,0.35)' }) + text(c, 440, ly + 9, t.legend[1], { size: 9, font: 'mono', fill: C.fg55 }) + '</g>';
  const ky = ly + 24;
  t.tiles.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, 16 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? 'rgba(242,181,68,0.06)' : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  s += text(c, 80, ky + 86, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

const NB = ' ';
export const STRINGS = {
  fr: {
    basket: {
      title: 'Un panier au comptoir, et les promotions qui s’appliquent',
      alt: 'Un bandeau : ticket du 11 novembre à 17 h 42, caisse 2, cliente identifiée par son téléphone, segment habituel, quatre lignes, 5 240 dinars avant promotions. À gauche, le panier : huile 5 litres à 1 450, biscuits 3 paquets à 180, lait 6 bouteilles à 95, couches 1 paquet à 2 450, avec le prix après promotion sous chacun. À droite, cinq campagnes évaluées : moins 10 pour cent huile 5 litres, période et canal valides, appliquée mais plafonnée à moins 8 pour cent par la garde de marge, en accent ; 3 biscuits pour 2, quantité atteinte, appliquée, moins 180 ; moins 5 pour cent panier au-dessus de 5 000, seuil atteint sur le total avant promotions, appliquée, moins 262 ; code DIASPORA15, segment non éligible, non appliquée ; lait moins 15 pour cent, période terminée hier, non appliquée. Un trait accentué puis la garde de marge : huile à moins 10 pour cent donnerait 6 pour cent de marge, minimum écrit 8, remise plafonnée à moins 8 pour cent. Totaux : avant 5 240, promotions moins 558, après 4 682, marge du panier 15 pour cent. Trois tuiles : 3 promotions appliquées sur 5 candidates ; 1 plafonnée par la garde de marge ; 0 cumul interdit. Les prix et règles sont un exemple construit.',
      header: 'Ticket · 11 nov. 17:42 · caisse 2 · cliente identifiée par téléphone · segment : habituelle · 4 lignes · 5 240 DA avant promotions',
      basketLabel: 'Panier · prix catalogue → prix après promotions',
      lines: [
        { name: 'Huile 5 L', sub: '1 × 1 450 · marge catalogue 15 %', price: `1${NB}450`, after: `1${NB}334 · −8 % (plafonné)`, hot: true },
        { name: 'Biscuits', sub: '3 × 180', price: '540', after: '360 · 3 pour 2' },
        { name: 'Lait', sub: '6 × 95', price: '570', after: '570 · promo terminée hier' },
        { name: 'Couches', sub: '1 × 2 450', price: `2${NB}450`, after: `2${NB}450 · aucune promo` },
      ],
      totals: { l1: 'Avant promotions', v1: `5${NB}240`, l2: 'Promotions appliquées', v2: '− 558', l3: 'À payer · marge du panier 15 %', v3: `4${NB}682` },
      cols: ['Campagne · règle', 'Conditions', 'Effet'],
      campaigns: [
        { name: '−10 % huile 5 L', rule: 'produit · 3→17 nov. · tous canaux', cond: 'période ✓ · canal ✓ · produit ✓', cond2: 'cumulable avec promo panier', effect: '− 116', effect2: 'plafonné à −8 % par la garde de marge', state: 'cap' },
        { name: '3 biscuits = 2', rule: 'quantité ≥ 3 · même référence', cond: 'quantité 3 ✓', cond2: 'le moins cher offert', effect: '− 180', effect2: 'appliquée', state: 'ok' },
        { name: '−5 % panier > 5 000', rule: 'seuil sur total avant promos', cond: 'total 5 240 ✓', cond2: 'exclusif avec les codes', effect: '− 262', effect2: 'appliquée après les promos ligne', state: 'ok' },
        { name: 'Code DIASPORA15', rule: 'segment : nouveaux clients France', cond: 'segment ✗ · habituelle', cond2: 'code non éligible', effect: '—', effect2: 'non appliquée', state: 'no' },
        { name: 'Lait −15 %', rule: '1→10 nov.', cond: 'période ✗ · terminée hier', cond2: '', effect: '—', effect2: 'non appliquée', state: 'no' },
      ],
      guard: 'Garde de marge : huile à −10 % → marge 6 % < minimum écrit 8 % → remise plafonnée à −8 %',
      guard2: 'calculée sur le dernier prix d’achat ; le caissier voit le prix final, pas la règle ; le gérant voit les plafonnements du jour',
      tiles: [
        { big: '3 sur 5', l1: 'promotions appliquées sur les candidates', l2: 'période, canal, produit, quantité, segment évalués' },
        { big: '1 plafonnée', l1: 'par la garde de marge, sans que la caisse le sache', l2: 'minimum de marge écrit par produit ou famille', hot: true },
        { big: '0 cumul interdit', l1: 'ordre : ligne puis panier ; codes exclusifs', l2: 'écrit une fois, joué par le moteur' },
      ],
      rule: 'Le moteur évalue chaque campagne contre le panier, dans un ordre écrit, et la garde de marge plafonne avant que le prix ne s’affiche.',
      rule2: 'La caisse, le site et les commandes WhatsApp appellent le même moteur : un seul prix, partout, au même instant.',
      note: 'Prix, marges, seuils et campagnes sont un exemple construit ; le minimum de marge et l’ordre de cumul sont des décisions du gérant.',
    },
    uplift: {
      title: 'Mesurer une promotion contre des magasins témoins, sur six semaines',
      alt: 'Un bandeau : promotion moins 10 pour cent sur l’huile 5 litres du 3 au 17 novembre dans 6 magasins, 6 magasins témoins sans promotion, unités par magasin et par semaine. Un graphique à barres groupées sur six semaines, deux avant, deux pendant, deux après : magasins promo 142, 138, puis 196 et 203 pendant, puis 118 et 131 après ; magasins témoins 140, 141, 144, 146, 143, 145. Sous chaque semaine la marge par unité des magasins promo : 15, 15, 8, 8, 15, 15 pour cent. Trois tuiles : plus 38 pour cent d’unités pendant la promotion contre témoin ; marge par unité de 15 à 8 pour cent ; moins 17 pour cent la semaine d’après, les clients ont stocké. Les chiffres sont un exemple construit.',
      header: 'Promotion −10 % huile 5 L · 3→17 nov. · 6 magasins promo · 6 magasins témoins sans promotion · unités par magasin et par semaine',
      max: 240, yLabel: 'unités / magasin', win: [2, 4], winLabel: 'promotion · semaines 3 et 4', mLabel: 'marge / unité',
      weeks: [{ l: 'sem. 1', p: 142, c: 140, m: '15 %' }, { l: 'sem. 2', p: 138, c: 141, m: '15 %' }, { l: 'sem. 3', p: 196, c: 144, m: '8 %', mHot: true }, { l: 'sem. 4', p: 203, c: 146, m: '8 %', mHot: true }, { l: 'sem. 5', p: 118, c: 143, m: '15 %' }, { l: 'sem. 6', p: 131, c: 145, m: '15 %' }],
      legend: ['magasins promo', 'magasins témoins'],
      tiles: [
        { big: '+ 38 %', l1: 'd’unités pendant la promotion, contre témoin', l2: '(196 + 203) ÷ (144 + 146) − 1' },
        { big: '15 % → 8 %', l1: 'de marge par unité pendant la promotion', l2: 'marge totale des deux semaines : en baisse', hot: true },
        { big: '− 17 %', l1: 'la semaine d’après : les clients ont stocké', l2: '118 contre 143 témoin ; cannibalisation mesurée' },
      ],
      rule: 'Une promotion se mesure contre un témoin et sur les semaines d’après, pas sur la seule semaine où elle a fait du volume.',
      rule2: 'Le verdict est un chiffre : marge gagnée ou perdue sur six semaines, par magasin ; la prochaine campagne part de là.',
      note: 'Magasins, unités et marges sont un exemple construit ; la comparaison à un témoin est la méthode courante des expériences contrôlées, dont la précision dépend de la taille de l’échantillon.',
    },
  },
  en: {
    basket: {
      title: 'One basket at the till, and the promotions that apply',
      alt: 'A strip: receipt of 11 November at 17:42, till 2, customer identified by phone, regular segment, four lines, 5,240 dinars before promotions. On the left, the basket: oil 5 litres at 1,450, biscuits 3 packs at 180, milk 6 bottles at 95, nappies 1 pack at 2,450, with the price after promotion under each. On the right, five campaigns evaluated: minus 10 percent oil 5 litres, period and channel valid, applied but capped at minus 8 percent by the margin guard, accented; 3 biscuits for 2, quantity reached, applied, minus 180; minus 5 percent basket above 5,000, threshold reached on the total before promotions, applied, minus 262; code DIASPORA15, segment not eligible, not applied; milk minus 15 percent, period ended yesterday, not applied. An accented line then the margin guard: oil at minus 10 percent would give 6 percent margin, written minimum 8, discount capped at minus 8 percent. Totals: before 5,240, promotions minus 558, after 4,682, basket margin 15 percent. Three tiles: 3 promotions applied out of 5 candidates; 1 capped by the margin guard; 0 forbidden stacking. Prices and rules are a constructed example.',
      header: 'Receipt · 11 Nov 17:42 · till 2 · customer identified by phone · segment: regular · 4 lines · 5,240 DA before promotions',
      basketLabel: 'Basket · list price → price after promotions',
      lines: [
        { name: 'Oil 5 L', sub: '1 × 1,450 · list margin 15 %', price: '1,450', after: '1,334 · −8 % (capped)', hot: true },
        { name: 'Biscuits', sub: '3 × 180', price: '540', after: '360 · 3 for 2' },
        { name: 'Milk', sub: '6 × 95', price: '570', after: '570 · promo ended yesterday' },
        { name: 'Nappies', sub: '1 × 2,450', price: '2,450', after: '2,450 · no promo' },
      ],
      totals: { l1: 'Before promotions', v1: '5,240', l2: 'Promotions applied', v2: '− 558', l3: 'To pay · basket margin 15 %', v3: '4,682' },
      cols: ['Campaign · rule', 'Conditions', 'Effect'],
      campaigns: [
        { name: '−10 % oil 5 L', rule: 'product · 3→17 Nov · all channels', cond: 'period ✓ · channel ✓ · product ✓', cond2: 'stackable with basket promo', effect: '− 116', effect2: 'capped at −8 % by the margin guard', state: 'cap' },
        { name: '3 biscuits = 2', rule: 'quantity ≥ 3 · same item', cond: 'quantity 3 ✓', cond2: 'lowest-priced one free', effect: '− 180', effect2: 'applied', state: 'ok' },
        { name: '−5 % basket > 5,000', rule: 'threshold on total before promos', cond: 'total 5,240 ✓', cond2: 'exclusive with codes', effect: '− 262', effect2: 'applied after line promos', state: 'ok' },
        { name: 'Code DIASPORA15', rule: 'segment: new customers from France', cond: 'segment ✗ · regular', cond2: 'code not eligible', effect: '—', effect2: 'not applied', state: 'no' },
        { name: 'Milk −15 %', rule: '1→10 Nov', cond: 'period ✗ · ended yesterday', cond2: '', effect: '—', effect2: 'not applied', state: 'no' },
      ],
      guard: 'Margin guard: oil at −10 % → margin 6 % < written minimum 8 % → discount capped at −8 %',
      guard2: 'computed on the last purchase price; the cashier sees the final price, not the rule; the manager sees the day’s caps',
      tiles: [
        { big: '3 of 5', l1: 'promotions applied among candidates', l2: 'period, channel, product, quantity, segment evaluated' },
        { big: '1 capped', l1: 'by the margin guard, without the till knowing', l2: 'minimum margin written per product or family', hot: true },
        { big: '0 forbidden stack', l1: 'order: line then basket; codes exclusive', l2: 'written once, played by the engine' },
      ],
      rule: 'The engine evaluates every campaign against the basket, in a written order, and the margin guard caps before the price is shown.',
      rule2: 'The till, the website and WhatsApp orders call the same engine: one price, everywhere, at the same instant.',
      note: 'Prices, margins, thresholds and campaigns are a constructed example; the minimum margin and stacking order are the manager’s decisions.',
    },
    uplift: {
      title: 'Measuring a promotion against control stores, over six weeks',
      alt: 'A strip: promotion minus 10 percent on 5-litre oil from 3 to 17 November in 6 stores, 6 control stores without promotion, units per store per week. A grouped bar chart over six weeks, two before, two during, two after: promo stores 142, 138, then 196 and 203 during, then 118 and 131 after; control stores 140, 141, 144, 146, 143, 145. Under each week the promo stores’ margin per unit: 15, 15, 8, 8, 15, 15 percent. Three tiles: plus 38 percent units during the promotion against control; margin per unit from 15 to 8 percent; minus 17 percent the week after, customers stocked up. Figures are a constructed example.',
      header: 'Promotion −10 % oil 5 L · 3→17 Nov · 6 promo stores · 6 control stores without promotion · units per store per week',
      max: 240, yLabel: 'units / store', win: [2, 4], winLabel: 'promotion · weeks 3 and 4', mLabel: 'margin / unit',
      weeks: [{ l: 'wk 1', p: 142, c: 140, m: '15 %' }, { l: 'wk 2', p: 138, c: 141, m: '15 %' }, { l: 'wk 3', p: 196, c: 144, m: '8 %', mHot: true }, { l: 'wk 4', p: 203, c: 146, m: '8 %', mHot: true }, { l: 'wk 5', p: 118, c: 143, m: '15 %' }, { l: 'wk 6', p: 131, c: 145, m: '15 %' }],
      legend: ['promo stores', 'control stores'],
      tiles: [
        { big: '+ 38 %', l1: 'units during the promotion, against control', l2: '(196 + 203) ÷ (144 + 146) − 1' },
        { big: '15 % → 8 %', l1: 'margin per unit during the promotion', l2: 'total margin of the two weeks: down', hot: true },
        { big: '− 17 %', l1: 'the week after: customers stocked up', l2: '118 against 143 control; cannibalisation measured' },
      ],
      rule: 'A promotion is measured against a control and over the weeks after, not only over the week it made volume.',
      rule2: 'The verdict is a figure: margin gained or lost over six weeks, per store; the next campaign starts from there.',
      note: 'Stores, units and margins are a constructed example; comparison with a control is the common method of controlled experiments, whose precision depends on sample size.',
    },
  },
  ar: {
    basket: {
      title: 'سلة عند الصندوق، والعروض الترويجية التي تنطبق',
      alt: 'شريط: تذكرة 11 نوفمبر الساعة 17:42، الصندوق 2، زبونة معرَّفة بهاتفها، شريحة معتادة، أربعة أسطر، 5,240 ديناراً قبل العروض. على اليمين السلة: زيت 5 لترات بـ 1,450، بسكويت 3 علب بـ 180، حليب 6 قوارير بـ 95، حفاضات علبة بـ 2,450، والسعر بعد العرض تحت كل واحد. على اليسار خمس حملات مقيَّمة: ناقص 10 بالمائة زيت 5 لترات، الفترة والقناة صالحتان، مطبَّقة لكن مسقوفة عند ناقص 8 بالمائة بحارس الهامش، مميزة؛ 3 بسكويت بثمن 2، الكمية بلغت، مطبَّقة، ناقص 180؛ ناقص 5 بالمائة سلة فوق 5,000، العتبة بلغت على المجموع قبل العروض، مطبَّقة، ناقص 262؛ رمز DIASPORA15، الشريحة غير مؤهلة، غير مطبَّق؛ حليب ناقص 15 بالمائة، الفترة انتهت أمس، غير مطبَّق. خط مميز ثم حارس الهامش: الزيت بناقص 10 بالمائة يعطي هامش 6 بالمائة، الحد الأدنى المكتوب 8، الخصم مسقوف عند ناقص 8 بالمائة. المجاميع: قبل 5,240، عروض ناقص 558، بعد 4,682، هامش السلة 15 بالمائة. ثلاث بطاقات: 3 عروض مطبَّقة من 5 مرشحة؛ 1 مسقوف بحارس الهامش؛ 0 تراكم ممنوع. الأسعار والقواعد مثال مبني.',
      header: `تذكرة · ${I('11')} نوفمبر ${I('17:42')} · الصندوق ${I('2')} · زبونة معرَّفة بالهاتف · الشريحة: معتادة · ${I('4')} أسطر · ${I('5,240 DA')} قبل العروض`,
      basketLabel: 'السلة · سعر الكتالوج ← السعر بعد العروض',
      lines: [
        { name: `زيت ${I('5 L')}`, sub: `${I('1 × 1,450')} · هامش الكتالوج ${I('15 %')}`, price: I('1,450'), after: `${I('1,334')} · ${I('−8 %')} (مسقوف)`, hot: true },
        { name: 'بسكويت', sub: I('3 × 180'), price: I('540'), after: `${I('360')} · ${I('3')} بثمن ${I('2')}` },
        { name: 'حليب', sub: I('6 × 95'), price: I('570'), after: `${I('570')} · العرض انتهى أمس` },
        { name: 'حفاضات', sub: I('1 × 2,450'), price: I('2,450'), after: `${I('2,450')} · لا عرض` },
      ],
      totals: { l1: 'قبل العروض', v1: I('5,240'), l2: 'عروض مطبَّقة', v2: I('− 558'), l3: `للدفع · هامش السلة ${I('15 %')}`, v3: I('4,682') },
      cols: ['الحملة · القاعدة', 'الشروط', 'الأثر'],
      campaigns: [
        { name: `${I('−10 %')} زيت ${I('5 L')}`, rule: `منتج · ${I('3→17')} نوفمبر · كل القنوات`, cond: 'الفترة ✓ · القناة ✓ · المنتج ✓', cond2: 'قابل للتراكم مع عرض السلة', effect: I('− 116'), effect2: `مسقوف عند ${I('−8 %')} بحارس الهامش`, state: 'cap' },
        { name: `${I('3')} بسكويت = ${I('2')}`, rule: `كمية ${I('≥ 3')} · الصنف نفسه`, cond: `الكمية ${I('3')} ✓`, cond2: 'الأرخص مجاناً', effect: I('− 180'), effect2: 'مطبَّق', state: 'ok' },
        { name: `${I('−5 %')} سلة ${I('> 5,000')}`, rule: 'عتبة على المجموع قبل العروض', cond: `المجموع ${I('5,240')} ✓`, cond2: 'حصري مع الرموز', effect: I('− 262'), effect2: 'مطبَّق بعد عروض الأسطر', state: 'ok' },
        { name: `رمز ${I('DIASPORA15')}`, rule: 'الشريحة: زبائن جدد من فرنسا', cond: 'الشريحة ✗ · معتادة', cond2: 'رمز غير مؤهل', effect: '—', effect2: 'غير مطبَّق', state: 'no' },
        { name: `حليب ${I('−15 %')}`, rule: `${I('1→10')} نوفمبر`, cond: 'الفترة ✗ · انتهت أمس', cond2: '', effect: '—', effect2: 'غير مطبَّق', state: 'no' },
      ],
      guard: `حارس الهامش: الزيت بـ ${I('−10 %')} ← هامش ${I('6 %')} < الحد الأدنى المكتوب ${I('8 %')} ← خصم مسقوف عند ${I('−8 %')}`,
      guard2: 'يُحسب على آخر سعر شراء؛ أمين الصندوق يرى السعر النهائي لا القاعدة؛ والمسيّر يرى سقوف اليوم',
      tiles: [
        { big: `${I('3')} من ${I('5')}`, l1: 'عروض مطبَّقة من المرشحة', l2: 'الفترة والقناة والمنتج والكمية والشريحة مقيَّمة' },
        { big: `${I('1')} مسقوف`, l1: 'بحارس الهامش دون أن يعلم الصندوق', l2: 'حد أدنى للهامش مكتوب لكل منتج أو عائلة', hot: true },
        { big: `${I('0')} تراكم ممنوع`, l1: 'الترتيب: السطر ثم السلة؛ الرموز حصرية', l2: 'يُكتب مرة ويلعبه المحرك' },
      ],
      rule: 'يقيّم المحرك كل حملة مقابل السلة بترتيب مكتوب، ويسقف حارس الهامش قبل أن يُعرض السعر.',
      rule2: 'الصندوق والموقع وطلبات واتساب تستدعي المحرك نفسه: سعر واحد في كل مكان في اللحظة نفسها.',
      note: 'الأسعار والهوامش والعتبات والحملات مثال مبني؛ والحد الأدنى للهامش وترتيب التراكم قرارا المسيّر.',
    },
    uplift: {
      title: 'قياس عرض ترويجي مقابل محلات شاهدة، على ستة أسابيع',
      alt: 'شريط: عرض ناقص 10 بالمائة على زيت 5 لترات من 3 إلى 17 نوفمبر في 6 محلات، و6 محلات شاهدة بلا عرض، وحدات لكل محل وأسبوع. مخطط أعمدة مجمَّعة على ستة أسابيع، اثنان قبل واثنان أثناء واثنان بعد: محلات العرض 142، 138، ثم 196 و203 أثناء، ثم 118 و131 بعد؛ المحلات الشاهدة 140، 141، 144، 146، 143، 145. تحت كل أسبوع هامش الوحدة في محلات العرض: 15، 15، 8، 8، 15، 15 بالمائة. ثلاث بطاقات: زائد 38 بالمائة وحدات أثناء العرض مقابل الشاهد؛ هامش الوحدة من 15 إلى 8 بالمائة؛ ناقص 17 بالمائة في الأسبوع التالي، الزبائن خزّنوا. الأرقام مثال مبني.',
      header: `عرض ${I('−10 %')} زيت ${I('5 L')} · ${I('3→17')} نوفمبر · ${I('6')} محلات عرض · ${I('6')} محلات شاهدة بلا عرض · وحدات لكل محل وأسبوع`,
      max: 240, yLabel: 'وحدات / محل', win: [2, 4], winLabel: `العرض · الأسبوعان ${I('3')} و${I('4')}`, mLabel: 'هامش / وحدة',
      weeks: [{ l: `أ ${I('1')}`, p: 142, c: 140, m: I('15 %') }, { l: `أ ${I('2')}`, p: 138, c: 141, m: I('15 %') }, { l: `أ ${I('3')}`, p: 196, c: 144, m: I('8 %'), mHot: true }, { l: `أ ${I('4')}`, p: 203, c: 146, m: I('8 %'), mHot: true }, { l: `أ ${I('5')}`, p: 118, c: 143, m: I('15 %') }, { l: `أ ${I('6')}`, p: 131, c: 145, m: I('15 %') }],
      legend: ['محلات العرض', 'محلات شاهدة'],
      tiles: [
        { big: I('+ 38 %'), l1: 'وحدات أثناء العرض مقابل الشاهد', l2: I('(196 + 203) ÷ (144 + 146) − 1') },
        { big: I('15 % → 8 %'), l1: 'هامش الوحدة أثناء العرض', l2: 'الهامش الكلي للأسبوعين: في انخفاض', hot: true },
        { big: I('− 17 %'), l1: 'الأسبوع التالي: الزبائن خزّنوا', l2: `${I('118')} مقابل ${I('143')} شاهد؛ تهام مقيس` },
      ],
      rule: 'العرض يُقاس مقابل شاهد وعلى الأسابيع التالية، لا على الأسبوع الوحيد الذي صنع فيه حجماً.',
      rule2: 'الحكم رقم: هامش مكسوب أو مفقود على ستة أسابيع لكل محل؛ والحملة التالية تنطلق من هناك.',
      note: 'المحلات والوحدات والهوامش مثال مبني؛ والمقارنة بشاهد هي الطريقة الشائعة للتجارب المضبوطة، ودقتها تعتمد على حجم العيّنة.',
    },
  },
};
