// Bespoke animated figures for the 2027 "logiciel boutique prêt-à-porter" page.
//  grille(): one model, four colours, six sizes. The grid holds 58 pieces, yet
//            six cells are empty, in the sizes asked for most. Two rows under the
//            grid compare stock per size with the week's requests per size.
//  saison(): a collection of 400 pieces over twelve weeks. Remaining stock with
//            no decision (120 pieces left) against a markdown decided at week 6
//            on the slow models (40 pieces left).
// Numbers are drawn in their own text elements with direction="ltr".
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, open, heading, esc } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function pop(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scale(0)}${(at + 1.2).toFixed(1)}%,100%{transform:scale(1)}}`); return `transform-box:fill-box;transform-origin:center;animation:${P}-${id} ${LOOP}s linear infinite`; }
function drawLine(css, P, id, at, dur, len) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{stroke-dashoffset:${len.toFixed(0)}}${(at + dur).toFixed(1)}%,100%{stroke-dashoffset:0}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
const TINT = 'rgba(242,181,68,0.06)';
const DARK = '#0b0b0b';

function tiles(c, css, P, ky, ts, at0) {
  let s = '';
  ts.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, at0 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? TINT : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  return s;
}
const motionOff = (P) => `@media (prefers-reduced-motion: reduce){svg [style*="${P}-"]{animation:none !important}}`;
function ltrSpans(x, y, parts, size, anchor) {
  const L = ctx(false);
  const monoCss = /style="([^"]*)"/.exec(text(L, 0, 0, 'x', { size, font: 'mono' }))[1];
  return `<text x="${x}" y="${y}" style="${monoCss}" direction="ltr" text-anchor="${anchor}">` + parts.map(([str, fill, bold]) => (str ? `<tspan fill="${fill}" style="font-weight:${bold ? 500 : 300}">${esc(str)}</tspan>` : '')).join('') + '</text>';
}
const num = (c, x, y, str, o = {}) => ltrSpans(c.X(x), y, [[str, o.fill || C.fg, o.bold]], o.size || 10.5, 'middle');
const hline = (c, x1, x2, y, color, dash, sw) => `<polyline points="${c.X(x1)},${y} ${c.X(x2)},${y}" fill="none" stroke="${color}" stroke-width="${sw || 1}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;

// one model: four colours (rows) by six sizes (columns)
const SIZES = ['36', '38', '40', '42', '44', '46'];
const GRID = [[2, 0, 0, 3, 4, 5], [3, 1, 0, 2, 4, 4], [1, 0, 0, 0, 3, 5], [4, 3, 2, 3, 3, 6]];
const ASKED = [3, 9, 11, 7, 3, 1];
const CXG = (j) => 300 + j * 84;

export function grille(t, rtl) {
  const c = ctx(rtl); const P = 'bg'; const css = []; const H = 686;
  const colSum = SIZES.map((_, j) => GRID.reduce((a, r) => a + r[j], 0));
  const total = colSum.reduce((a, b) => a + b, 0);
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + text(c, 96, 168, t.gridTitle, { size: 11, fill: C.fg, weight: 500 })
    + SIZES.map((z, j) => num(c, CXG(j), 194, z, { size: 9.5, fill: C.fg55 })).join('') + text(c, 820, 194, t.colTotal, { size: 8.5, font: 'mono', fill: C.fg55, anchor: 'middle' })
    + t.colors.map((col, i) => text(c, 96, 204 + i * 42 + 22, col, { size: 10.5, fill: C.fg70 })).join('')
    + hline(c, 96, 846, 376, C.line2) + text(c, 96, 398, t.rowStock, { size: 10, fill: C.fg, weight: 500 }) + text(c, 96, 424, t.rowAsked, { size: 10, fill: C.fg, weight: 500 }) + '</g>';
  GRID.forEach((row, i) => {
    row.forEach((q, j) => {
      const at = 5 + (i * 6 + j) * 0.85; const zero = q === 0;
      const cell = rect(c, CXG(j) - 36, 204 + i * 42, 72, 34, { stroke: zero ? C.accent : C.line2, fill: zero ? TINT : C.fill }) + num(c, CXG(j), 204 + i * 42 + 22, String(q), { size: 11.5, bold: zero, fill: zero ? C.accent : C.fg });
      s += zero ? `<g style="${pop(css, P, `c${i}${j}`, at)}">${cell}</g>` : `<g style="animation:${show(css, P, `c${i}${j}`, at)}">${cell}</g>`;
    });
    s += `<g style="animation:${show(css, P, `r${i}`, 5 + (i * 6 + 6) * 0.85)}">` + num(c, 820, 204 + i * 42 + 22, String(row.reduce((a, b) => a + b, 0)), { size: 11, fill: C.fg70 }) + '</g>';
  });
  SIZES.forEach((_, j) => {
    const hot = ASKED[j] > colSum[j];
    s += `<g style="${pop(css, P, `s${j}`, 28 + j * 0.6)}">` + num(c, CXG(j), 398, String(colSum[j]), { size: 12, bold: true, fill: hot ? C.accent : C.fg }) + '</g>';
    s += `<g style="${pop(css, P, `a${j}`, 32 + j * 0.6)}">` + num(c, CXG(j), 424, String(ASKED[j]), { size: 12, bold: true, fill: hot ? C.accent : C.fg70 }) + '</g>';
  });
  s += `<g style="animation:${show(css, P, 'tt', 36)}">` + num(c, 820, 398, String(total), { size: 12, bold: true }) + num(c, 820, 424, String(ASKED.reduce((a, b) => a + b, 0)), { size: 12, bold: true, fill: C.fg70 }) + '</g>';
  // right: what each way of counting says
  t.stats.forEach((st, k) => {
    const y = 196 + k * 60;
    s += `<g style="${pop(css, P, `x${k}`, 38 + k * 3)}">` + rect(c, 880, y, 224, 50, { stroke: st.hot ? C.accent : C.line2, fill: st.hot ? TINT : C.fill }) + text(c, 892, y + 21, st.top, { size: 10.5, fill: st.hot ? C.accent : C.fg, weight: 500 }) + text(c, 892, y + 38, st.sub, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>';
  });
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bd', 51)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 55);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// a collection of 400 pieces, twelve weeks
const R1 = [400, 356, 316, 282, 252, 226, 204, 186, 170, 156, 144, 132, 120];
const R2 = [204, 172, 142, 114, 88, 62, 40];
const WX = (w) => 200 + w * 70;
const RY = (v) => 400 - v * 0.55;

export function saison(t, rtl) {
  const c = ctx(rtl); const P = 'bs'; const css = []; const H = 682;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 1040, 304, { stroke: C.fg35, fill: DARK }) + text(c, 96, 168, t.yLabel, { size: 9, font: 'mono', fill: C.fg55 }) + hline(c, 190, 1050, 400, C.line2) + hline(c, 190, 1050, RY(200), C.line, '2 5') + hline(c, 190, 1050, RY(400), C.line, '2 5')
    + num(c, 160, RY(400) + 4, '400', { size: 9.5, fill: C.fg55 }) + num(c, 160, RY(200) + 4, '200', { size: 9.5, fill: C.fg55 }) + num(c, 160, 404, '0', { size: 9.5, fill: C.fg55 })
    + [0, 2, 4, 6, 8, 10, 12].map((w) => num(c, WX(w), 418, String(w), { size: 9.5, fill: C.fg55 })).join('') + text(c, 620, 438, t.xLabel, { size: 9, font: 'mono', fill: C.fg55, anchor: 'middle' }) + '</g>';
  const p1 = R1.map((v, w) => [c.X(WX(w)), RY(v)]);
  const p2 = R2.map((v, k) => [c.X(WX(6 + k)), RY(v)]);
  const plen = (pts) => { let l = 0; for (let i = 1; i < pts.length; i++) l += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); return l; };
  const poly = (pts, color, sw, id, at, dur) => `<polyline points="${pts.map((p) => `${p[0]},${p[1].toFixed(1)}`).join(' ')}" fill="none" stroke="${color}" stroke-width="${sw}" stroke-dasharray="${plen(pts).toFixed(0)}" style="animation:${drawLine(css, P, id, at, dur, plen(pts))}"/>`;
  s += poly(p1, C.fg70, 2, 'l1', 6, 14);
  s += `<g style="animation:${show(css, P, 'dc', 24)}"><polyline points="${c.X(WX(6))},180 ${c.X(WX(6))},400" fill="none" stroke="${C.accent}" stroke-width="1.5" stroke-dasharray="4 4"/>` + text(c, WX(6) + 10, 192, t.decision, { size: 10, fill: C.accent, weight: 500 }) + '</g>';
  s += poly(p2, C.accent, 3, 'l2', 28, 12);
  s += `<g style="${pop(css, P, 'e1', 21)}"><circle cx="${p1[12][0]}" cy="${p1[12][1].toFixed(1)}" r="4" fill="${C.fg}"/>` + num(c, 1082, RY(120) + 4, '120', { size: 12, bold: true }) + '</g>';
  s += `<g style="${pop(css, P, 'e2', 41)}"><circle cx="${p2[6][0]}" cy="${p2[6][1].toFixed(1)}" r="4" fill="${C.accent}"/>` + num(c, 1082, RY(40) + 4, '40', { size: 12, bold: true, fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'lg', 8)}">` + hline(c, 216, 240, 362, C.fg70, null, 2) + text(c, 250, 366, t.lineA, { size: 10, fill: C.fg70 }) + '</g>';
  s += `<g style="animation:${show(css, P, 'lh', 30)}">` + hline(c, 216, 240, 382, C.accent, null, 3) + text(c, 250, 386, t.lineB, { size: 10, fill: C.accent }) + '</g>';
  const by = 462;
  s += `<g style="animation:${show(css, P, 'bd', 46)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 522;
  s += tiles(c, css, P, ky, t.tiles, 50);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    grille: {
      title: 'Un modèle, 58 pièces en stock, et la taille demandée manque',
      alt: 'La grille d’un modèle : quatre couleurs en lignes, six tailles en colonnes, 58 pièces au total. Six cases sur vingt-quatre sont vides, toutes en 38, 40 ou 42. Par taille, le stock est de 10, 4, 2, 8, 14 et 20 pièces, alors que les demandes de la semaine sont de 3, 9, 11, 7, 3 et 1. Les tailles 38 et 40 reçoivent 20 demandes pour 6 pièces ; les tailles 44 et 46, 4 demandes pour 34 pièces.',
      header: 'Exemple construit · un modèle de robe, une boutique · stock du samedi et demandes de la semaine',
      gridTitle: 'Stock par couleur et par taille', colTotal: 'total',
      colors: ['noir', 'beige', 'bleu', 'vert'],
      rowStock: 'stock par taille', rowAsked: 'demandes de la semaine',
      stats: [
        { top: '58 pièces en stock', sub: 'ce que dit le stock par modèle' },
        { top: '6 cases vides sur 24', sub: 'en 38, 40 et 42', hot: true },
        { top: '38 et 40 : 20 demandes', sub: 'pour 6 pièces', hot: true },
        { top: '44 et 46 : 4 demandes', sub: 'pour 34 pièces' },
      ],
      band: 'Compté par modèle, le stock rassure. Compté par taille et par couleur, il dit ce qui manque, ce qui dort, et quoi recommander.',
      tiles: [
        { big: '58 pièces', l1: 'en stock pour ce modèle', l2: 'le chiffre qui rassure' },
        { big: '6 pièces', l1: 'dans les deux tailles les plus demandées', l2: '20 demandes dans la semaine', hot: true },
        { big: '34 pièces', l1: 'dans les deux tailles les moins demandées', l2: '4 demandes dans la semaine' },
      ],
      line1: 'Un vêtement ne se vend pas par modèle : il se vend dans une taille et une couleur. Le stock doit se compter comme il se vend.',
      line2: 'La même grille sert au réassort : on recommande les tailles demandées, pas la quantité moyenne du modèle.',
      note: 'Exemple construit · quantités et demandes fictives ; tailles 36 à 46.',
    },
    saison: {
      title: 'Une collection sur douze semaines : décider à mi-saison',
      alt: 'Le stock restant d’une collection de 400 pièces, semaine après semaine. Sans décision, il descend à 204 pièces à la semaine 6, puis à 120 à la semaine 12 : 30 % de la collection reste. Avec une démarque décidée à la semaine 6 sur les modèles lents, il descend à 40 pièces : 10 % de la collection.',
      header: 'Exemple construit · une collection de 400 pièces reçue en début de saison · pièces restantes chaque semaine',
      yLabel: 'pièces restantes', xLabel: 'semaines depuis la réception',
      decision: 'semaine 6 : décision', lineA: 'sans décision', lineB: 'modèles lents démarqués à mi-saison',
      band: 'Le taux d’écoulement se lit chaque semaine, modèle par modèle : la démarque se décide à mi-saison, sur les modèles lents seulement.',
      tiles: [
        { big: '49 %', l1: 'écoulé à la semaine 6 : la moitié de la saison', l2: '196 pièces sur 400' },
        { big: '120 pièces', l1: 'restent en fin de saison, sans décision', l2: '30 % de la collection' },
        { big: '40 pièces', l1: 'restent si les modèles lents sont démarqués à mi-saison', l2: '10 % de la collection', hot: true },
      ],
      line1: 'À mi-saison, la grille dit déjà quels modèles ne partiront pas au prix plein : c’est le moment de décider, pas la dernière semaine.',
      line2: 'Une démarque coûte de la marge sur les pièces vendues ; une pièce qui dort jusqu’à l’an prochain immobilise tout son prix d’achat.',
      note: 'Exemple construit · collection de 400 pièces, douze semaines ; courbes fictives.',
    },
  },
  en: {
    grille: {
      title: 'One model, 58 pieces in stock, and the size asked for is missing',
      alt: 'The grid of one model: four colours in rows, six sizes in columns, 58 pieces in all. Six cells out of twenty-four are empty, all in 38, 40 or 42. Per size, stock is 10, 4, 2, 8, 14 and 20 pieces, while the week’s requests are 3, 9, 11, 7, 3 and 1. Sizes 38 and 40 get 20 requests for 6 pieces; sizes 44 and 46, 4 requests for 34 pieces.',
      header: 'Constructed example · one dress model, one shop · Saturday’s stock and the week’s requests',
      gridTitle: 'Stock per colour and per size', colTotal: 'total',
      colors: ['black', 'beige', 'blue', 'green'],
      rowStock: 'stock per size', rowAsked: 'requests this week',
      stats: [
        { top: '58 pieces in stock', sub: 'what stock per model says' },
        { top: '6 empty cells out of 24', sub: 'in 38, 40 and 42', hot: true },
        { top: '38 and 40: 20 requests', sub: 'for 6 pieces', hot: true },
        { top: '44 and 46: 4 requests', sub: 'for 34 pieces' },
      ],
      band: 'Counted per model, stock is reassuring. Counted per size and colour, it says what is missing, what is sleeping, and what to reorder.',
      tiles: [
        { big: '58 pieces', l1: 'in stock for this model', l2: 'the reassuring figure' },
        { big: '6 pieces', l1: 'in the two most requested sizes', l2: '20 requests in the week', hot: true },
        { big: '34 pieces', l1: 'in the two least requested sizes', l2: '4 requests in the week' },
      ],
      line1: 'A garment is not sold per model: it is sold in a size and a colour. Stock must be counted the way it is sold.',
      line2: 'The same grid serves for reordering: you reorder the sizes asked for, not the model’s average quantity.',
      note: 'Constructed example · fictitious quantities and requests; sizes 36 to 46.',
    },
    saison: {
      title: 'One collection over twelve weeks: deciding at mid-season',
      alt: 'The remaining stock of a 400-piece collection, week after week. With no decision, it falls to 204 pieces at week 6, then to 120 at week 12: 30% of the collection remains. With a markdown decided at week 6 on the slow models, it falls to 40 pieces: 10% of the collection.',
      header: 'Constructed example · a 400-piece collection received at the start of the season · pieces remaining each week',
      yLabel: 'pieces remaining', xLabel: 'weeks since reception',
      decision: 'week 6: decision', lineA: 'no decision', lineB: 'slow models marked down at mid-season',
      band: 'Sell-through is read every week, model by model: the markdown is decided at mid-season, on the slow models only.',
      tiles: [
        { big: '49%', l1: 'sold at week 6: half the season', l2: '196 pieces out of 400' },
        { big: '120 pieces', l1: 'remain at the end of the season, with no decision', l2: '30% of the collection' },
        { big: '40 pieces', l1: 'remain if slow models are marked down at mid-season', l2: '10% of the collection', hot: true },
      ],
      line1: 'At mid-season, the grid already says which models will not go at full price: that is the time to decide, not the last week.',
      line2: 'A markdown costs margin on the pieces sold; a piece that sleeps until next year ties up its whole purchase price.',
      note: 'Constructed example · a 400-piece collection, twelve weeks; fictitious curves.',
    },
  },
  ar: {
    grille: {
      title: 'موديل واحد، 58 قطعة في المخزون، والمقاس المطلوب ناقص',
      alt: 'شبكة موديل واحد: أربعة ألوان في الأسطر، ستة مقاسات في الأعمدة، و58 قطعة في المجموع. ست خانات من أربع وعشرين فارغة، كلها في 38 أو 40 أو 42. وحسب المقاس، المخزون 10 و4 و2 و8 و14 و20 قطعة، وطلبات الأسبوع 3 و9 و11 و7 و3 و1. المقاسان 38 و40 يتلقيان 20 طلباً مقابل 6 قطع؛ والمقاسان 44 و46، 4 طلبات مقابل 34 قطعة.',
      header: 'مثال مركَّب · موديل فستان واحد، محل واحد · مخزون السبت وطلبات الأسبوع',
      gridTitle: 'المخزون حسب اللون والمقاس', colTotal: 'المجموع',
      colors: ['أسود', 'بيج', 'أزرق', 'أخضر'],
      rowStock: 'المخزون حسب المقاس', rowAsked: 'طلبات الأسبوع',
      stats: [
        { top: '58 قطعة في المخزون', sub: 'ما يقوله المخزون حسب الموديل' },
        { top: '6 خانات فارغة من 24', sub: 'في 38 و40 و42', hot: true },
        { top: '38 و40: 20 طلباً', sub: 'مقابل 6 قطع', hot: true },
        { top: '44 و46: 4 طلبات', sub: 'مقابل 34 قطعة' },
      ],
      band: 'إذا عُدّ حسب الموديل، طمأن المخزون. وإذا عُدّ حسب المقاس واللون، قال ما ينقص، ما ينام، وما يُعاد طلبه.',
      tiles: [
        { big: '58 قطعة', l1: 'في المخزون لهذا الموديل', l2: 'الرقم الذي يُطمئن' },
        { big: '6 قطع', l1: 'في المقاسين الأكثر طلباً', l2: '20 طلباً في الأسبوع', hot: true },
        { big: '34 قطعة', l1: 'في المقاسين الأقل طلباً', l2: '4 طلبات في الأسبوع' },
      ],
      line1: 'اللباس لا يُباع حسب الموديل: يُباع بمقاس ولون. والمخزون يجب أن يُعدّ كما يُباع.',
      line2: 'والشبكة نفسها تصلح لإعادة التموين: يُعاد طلب المقاسات المطلوبة، لا الكمية المتوسطة للموديل.',
      note: 'مثال مركَّب · كميات وطلبات خيالية؛ المقاسات من 36 إلى 46.',
    },
    saison: {
      title: 'تشكيلة على اثني عشر أسبوعاً: القرار في منتصف الموسم',
      alt: 'المخزون الباقي من تشكيلة من 400 قطعة، أسبوعاً بعد أسبوع. دون قرار، ينزل إلى 204 قطع في الأسبوع 6، ثم إلى 120 في الأسبوع 12: يبقى 30 بالمئة من التشكيلة. وبتخفيض يُقرَّر في الأسبوع 6 على الموديلات البطيئة، ينزل إلى 40 قطعة: 10 بالمئة من التشكيلة.',
      header: 'مثال مركَّب · تشكيلة من 400 قطعة استُلمت في بداية الموسم · القطع الباقية كل أسبوع',
      yLabel: 'القطع الباقية', xLabel: 'الأسابيع منذ الاستلام',
      decision: 'الأسبوع 6: القرار', lineA: 'دون قرار', lineB: 'الموديلات البطيئة تُخفَّض في منتصف الموسم',
      band: 'نسبة التصريف تُقرأ كل أسبوع، موديلاً بموديل: والتخفيض يُقرَّر في منتصف الموسم، على الموديلات البطيئة فقط.',
      tiles: [
        { big: '⁦49 %⁩', l1: 'صُرّف في الأسبوع 6: نصف الموسم', l2: '196 قطعة من 400' },
        { big: '120 قطعة', l1: 'تبقى في نهاية الموسم، دون قرار', l2: '⁦30 %⁩ من التشكيلة' },
        { big: '40 قطعة', l1: 'تبقى إذا خُفّضت الموديلات البطيئة في منتصف الموسم', l2: '⁦10 %⁩ من التشكيلة', hot: true },
      ],
      line1: 'في منتصف الموسم، تقول الشبكة أي الموديلات لن تخرج بالسعر الكامل: هذا وقت القرار، لا الأسبوع الأخير.',
      line2: 'التخفيض يكلّف هامشاً على القطع المبيعة؛ والقطعة التي تنام إلى السنة القادمة تجمّد سعر شرائها كله.',
      note: 'مثال مركَّب · تشكيلة من 400 قطعة، اثنا عشر أسبوعاً؛ منحنيات خيالية.',
    },
  },
};
