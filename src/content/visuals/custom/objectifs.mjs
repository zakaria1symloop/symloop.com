// Bespoke animated figures for the 2027 "comment fixer des objectifs de vente" page.
//  vendeurs(): the month on day 14 of 22. One row per seller: a track for the
//              target, a bar for what is done, a dashed line for the pace (the
//              share that should be done today) and a ring for the landing if
//              nothing changes. Two sellers are ahead of the pace, three behind.
//  chaine():   the monthly target translated into activity: 12 000 = 100 orders
//              = 250 quotes = 500 visits = 4.5 visits per seller per day; then
//              expected against done on day 14 for visits, quotes, orders, revenue.
// Amounts are in thousands of dinars; numbers are drawn in ltr text elements.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, open, heading, esc } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function pop(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scale(0)}${(at + 1.2).toFixed(1)}%,100%{transform:scale(1)}}`); return `transform-box:fill-box;transform-origin:center;animation:${P}-${id} ${LOOP}s linear infinite`; }
function growX(css, P, id, at, dur, rtl) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'} center;animation:${P}-${id} ${LOOP}s linear infinite`; }
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
const grp = (n, sep) => String(Math.abs(n)).replace(/\B(?=(\d{3})+(?!\d))/g, sep);
const num = (c, x, y, str, o = {}) => ltrSpans(c.X(x), y, [[str, o.fill || C.fg, o.bold]], o.size || 10.5, 'middle');
const vline = (c, x, y1, y2, color, dash, sw) => `<polyline points="${c.X(x)},${y1} ${c.X(x)},${y2}" fill="none" stroke="${color}" stroke-width="${sw || 1}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const hline = (c, x1, x2, y, color, dash, sw) => `<polyline points="${c.X(x1)},${y} ${c.X(x2)},${y}" fill="none" stroke="${color}" stroke-width="${sw || 1}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;

// five sellers: [target, done on day 14]; a month of 22 working days
const SELL = [[3000, 2150], [2800, 1900], [2400, 1150], [2200, 800], [1600, 300]];
const DAY = 14; const DAYS = 22;
const PX = (p) => 330 + p * 5.6;

export function vendeurs(t, rtl) {
  const c = ctx(rtl); const P = 'ob'; const css = []; const H = 686; const sep = t.sep; const pc = t.pc;
  const pace = (DAY / DAYS) * 100;
  const tot = SELL.reduce((a, r) => [a[0] + r[0], a[1] + r[1]], [0, 0]);
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + text(c, 96, 172, t.colSeller, { size: 8.5, font: 'mono', fill: C.fg55 }) + text(c, 268, 172, t.colTarget, { size: 8.5, font: 'mono', fill: C.fg55, anchor: 'middle' }) + text(c, 1062, 172, t.colLanding, { size: 8.5, font: 'mono', fill: C.fg55, anchor: 'middle' })
    + vline(c, PX(100), 180, 416, C.fg55) + num(c, PX(100), 434, '100' + pc, { size: 9.5, fill: C.fg55 }) + hline(c, 96, 1104, 378, C.line2) + '</g>';
  const row = (i, y, tg, done, label, bold) => {
    const at = 5 + i * 4; const p = (done / tg) * 100; const proj = p * DAYS / DAY; const ahead = p >= pace; let g = '';
    g += `<g style="animation:${show(css, P, `r${i}`, at)}">` + text(c, 96, y + 13, label, { size: 10.5, fill: C.fg, weight: bold ? 500 : 300 }) + num(c, 268, y + 13, grp(tg, sep), { size: 10.5, fill: C.fg70, bold }) + rect(c, PX(0), y, 560, 18, { stroke: C.line2, fill: C.fill }) + '</g>';
    g += `<g style="${growX(css, P, `b${i}`, at + 1, 2, rtl)}">` + rect(c, PX(0), y, p * 5.6, 18, { stroke: ahead ? C.fg : C.accent, fill: ahead ? C.fg : C.accent }) + '</g>';
    g += `<g style="${pop(css, P, `p${i}`, at + 3)}">` + num(c, PX(p) + (bold ? 30 : 24), y + 13, (bold ? t.fmt(p) : Math.round(p)) + pc, { size: 10, bold: true, fill: ahead ? C.fg : C.accent }) + '</g>';
    g += `<g style="${pop(css, P, `c${i}`, 34 + i * 1.5)}"><circle cx="${c.X(PX(Math.min(proj, 120)))}" cy="${y + 9}" r="6" fill="${DARK}" stroke="${ahead ? C.fg : C.accent}" stroke-width="2"/>` + num(c, 1062, y + 13, (bold ? t.fmt(proj) : Math.round(proj)) + pc, { size: 11, bold: true, fill: ahead ? C.fg : C.accent }) + '</g>';
    return g;
  };
  SELL.forEach(([tg, done], i) => { s += row(i, 190 + i * 36, tg, done, t.sellers[i], false); });
  s += row(5, 388, tot[0], tot[1], t.total, true);
  s += `<g style="animation:${show(css, P, 'pc', 28)}">` + vline(c, PX(pace), 180, 416, C.accent, '5 4', 2) + text(c, PX(pace), 434, t.today, { size: 9.5, fill: C.accent, weight: 500, anchor: 'middle' }) + '</g>';
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bd', 46)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 50);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// expected on day 14 against done: visits, quotes, orders, revenue
const GAUGE = [[318, 255], [159, 118], [64, 52], [7636, 6300]];

export function chaine(t, rtl) {
  const c = ctx(rtl); const P = 'oj'; const css = []; const H = 682; const sep = t.sep; const pc = t.pc;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 1040, 304, { stroke: C.fg35, fill: DARK }) + hline(c, 96, 1104, 256, C.line2) + '</g>';
  // the chain: target, orders, quotes, visits, visits per seller per day
  t.chain.forEach((bx, k) => {
    const x = 96 + k * 212; const at = 5 + k * 4; const hot = k === 4;
    s += `<g style="${pop(css, P, `x${k}`, at)}">` + rect(c, x, 162, 160, 78, { stroke: hot ? C.accent : C.line2, fill: hot ? TINT : C.fill }) + num(c, x + 80, 190, bx.big, { size: 16, bold: true, fill: hot ? C.accent : C.fg }) + text(c, x + 80, 210, bx.l1, { size: 10, fill: C.fg, anchor: 'middle' }) + text(c, x + 80, 227, bx.l2, { size: 8.5, font: 'mono', fill: C.fg55, anchor: 'middle' }) + '</g>';
    if (k < 4) { const len = 52; s += `<polyline points="${c.X(x + 160)},201 ${c.X(x + 212)},201" fill="none" stroke="${C.fg70}" stroke-width="1.5" stroke-dasharray="${len}" style="animation:${drawLine(css, P, `a${k}`, at + 2, 1.5, len)}"/>`; }
  });
  s += `<g style="animation:${show(css, P, 'dt', 27)}">` + text(c, 96, 282, t.dayTitle, { size: 11, fill: C.fg, weight: 500 }) + '</g>';
  GAUGE.forEach(([exp, done], k) => {
    const x = 96 + k * 256; const at = 29 + k * 4; const r = done / exp; const lead = k < 2;
    s += `<g style="animation:${show(css, P, `g${k}`, at)}">` + text(c, x, 310, t.gauges[k], { size: 10.5, fill: lead ? C.accent : C.fg, weight: 500 }) + text(c, x, 334, t.expected, { size: 9, font: 'mono', fill: C.fg55 }) + num(c, x + 176, 334, grp(exp, sep), { size: 10.5, fill: C.fg70 }) + text(c, x, 354, t.done, { size: 9, font: 'mono', fill: C.fg55 }) + num(c, x + 176, 354, grp(done, sep), { size: 11.5, bold: true, fill: lead ? C.accent : C.fg }) + rect(c, x, 370, 208, 14, { stroke: C.line2, fill: C.fill }) + '</g>';
    s += `<g style="${growX(css, P, `f${k}`, at + 1, 2, rtl)}">` + rect(c, x, 370, 208 * r, 14, { stroke: lead ? C.accent : C.fg, fill: lead ? C.accent : C.fg }) + '</g>';
    s += `<g style="${pop(css, P, `q${k}`, at + 3)}">` + num(c, x + 104, 410, Math.round(r * 100) + pc, { size: 13, bold: true, fill: lead ? C.accent : C.fg }) + '</g>';
  });
  s += `<g style="animation:${show(css, P, 'lg', 44)}">` + text(c, 96, 436, t.legend, { size: 9, font: 'mono', fill: C.fg55 }) + '</g>';
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
    vendeurs: {
      sep: ' ', pc: ' %', fmt: (n) => String(Math.round(n * 10) / 10).replace('.', ','),
      title: 'Le mois, vu le jour 14 : qui est sur le rythme, qui ne l’est pas',
      alt: 'Cinq vendeurs le jour 14 d’un mois de 22 jours ouvrés. Le rythme voudrait que 64 % de l’objectif soit fait. Deux vendeurs sont au-dessus, à 72 % et 68 % ; trois sont en dessous, à 48 %, 36 % et 19 %. L’équipe a fait 6 300 sur 12 000, soit 52,5 %. Au rythme actuel, les deux premiers finiront à 113 % et 107 %, les trois autres à 75 %, 57 % et 29 %, et l’équipe à 82,5 %.',
      header: 'Exemple construit · cinq vendeurs, un mois de 22 jours ouvrés, vu le jour 14 · en milliers de dinars',
      colSeller: 'vendeur', colTarget: 'objectif', colLanding: 'atterrissage',
      sellers: ['vendeur A', 'vendeur B', 'vendeur C', 'vendeur D', 'vendeur E'], total: 'l’équipe',
      today: 'jour 14 sur 22 : le rythme est à 64 %',
      band: 'Le trait pointillé est le rythme : la part de l’objectif qui devrait être faite aujourd’hui. Le rond est l’atterrissage si rien ne change.',
      tiles: [
        { big: '52,5 %', l1: 'réalisé par l’équipe au jour 14', l2: '6 300 sur 12 000' },
        { big: '64 %', l1: 'ce qui devrait être fait aujourd’hui', l2: 'retard sur le rythme : 1 336', hot: true },
        { big: '82,5 %', l1: 'atterrissage du mois au rythme actuel', l2: '9 900 sur 12 000' },
      ],
      line1: 'Le même mois, vu le jour 14 : deux vendeurs sont en avance sur le rythme, trois en retard, et il reste huit jours pour agir.',
      line2: 'Pour tenir l’objectif, il faudrait 713 par jour jusqu’à la fin du mois ; l’équipe en fait 450. C’est aujourd’hui que cela se décide.',
      note: 'Exemple construit · montants fictifs ; l’atterrissage prolonge le rythme des quatorze premiers jours.',
    },
    chaine: {
      sep: ' ', pc: ' %',
      title: 'L’objectif du mois, traduit en visites',
      alt: 'L’objectif du mois traduit en activité : 12 000 de chiffre d’affaires, soit 100 commandes à 120, soit 250 devis si deux devis sur cinq sont signés, soit 500 visites à deux visites par devis, soit 4,5 visites par vendeur et par jour pour cinq vendeurs sur 22 jours. Au jour 14 : 255 visites faites pour 318 attendues, 118 devis pour 159, 52 commandes pour 64, 6 300 de chiffre pour 7 636.',
      header: 'Exemple construit · la même équipe · ce que l’objectif demande, puis ce qui est fait au jour 14',
      chain: [
        { big: '12 000', l1: 'objectif du mois', l2: 'en milliers de dinars' },
        { big: '100', l1: 'commandes', l2: '120 par commande' },
        { big: '250', l1: 'devis', l2: '2 devis sur 5 signés' },
        { big: '500', l1: 'visites', l2: '2 visites par devis' },
        { big: '4,5', l1: 'visites par vendeur et par jour', l2: '5 vendeurs, 22 jours' },
      ],
      dayTitle: 'Au jour 14 : attendu, réalisé', expected: 'attendu', done: 'réalisé',
      gauges: ['visites', 'devis', 'commandes', 'chiffre d’affaires'],
      legend: 'en accent : les indicateurs avancés, ceux qui annoncent le résultat',
      band: 'Les indicateurs avancés (visites, devis) annoncent le résultat ; les indicateurs de résultat (commandes, chiffre) le constatent.',
      tiles: [
        { big: '4,5 visites', l1: 'par vendeur et par jour : l’objectif, traduit en activité', l2: '500 visites pour 12 000', hot: true },
        { big: '255 sur 318', l1: 'visites faites au jour 14', l2: '80 % de l’activité attendue' },
        { big: '6 300 sur 7 636', l1: 'chiffre réalisé au jour 14', l2: 'le chiffre suit l’activité, avec retard' },
      ],
      line1: 'Un objectif en chiffre d’affaires se constate ; un objectif en visites et en devis se pilote, parce qu’il se mesure chaque soir.',
      line2: 'Dans l’exemple, le taux de signature tient : c’est le nombre de visites qui manque. La décision n’est pas la même.',
      note: 'Exemple construit · panier, taux et volumes fictifs ; cinq vendeurs, 22 jours ouvrés.',
    },
  },
  en: {
    vendeurs: {
      sep: ',', pc: '%', fmt: (n) => String(Math.round(n * 10) / 10),
      title: 'The month, seen on day 14: who is on pace, who is not',
      alt: 'Five sellers on day 14 of a month of 22 working days. The pace would have 64% of the target done. Two sellers are above it, at 72% and 68%; three are below, at 48%, 36% and 19%. The team has done 6,300 out of 12,000, that is 52.5%. At the current pace, the first two will finish at 113% and 107%, the other three at 75%, 57% and 29%, and the team at 82.5%.',
      header: 'Constructed example · five sellers, a month of 22 working days, seen on day 14 · in thousands of dinars',
      colSeller: 'seller', colTarget: 'target', colLanding: 'landing',
      sellers: ['seller A', 'seller B', 'seller C', 'seller D', 'seller E'], total: 'the team',
      today: 'day 14 of 22: the pace is at 64%',
      band: 'The dashed line is the pace: the share of the target that should be done today. The ring is the landing if nothing changes.',
      tiles: [
        { big: '52.5%', l1: 'done by the team on day 14', l2: '6,300 out of 12,000' },
        { big: '64%', l1: 'what should be done today', l2: 'behind the pace by 1,336', hot: true },
        { big: '82.5%', l1: 'the month’s landing at the current pace', l2: '9,900 out of 12,000' },
      ],
      line1: 'The same month, seen on day 14: two sellers are ahead of the pace, three behind, and eight days remain to act.',
      line2: 'To hit the target, 713 a day would be needed until month end; the team is doing 450. Today is when that is decided.',
      note: 'Constructed example · fictitious amounts; the landing extends the pace of the first fourteen days.',
    },
    chaine: {
      sep: ',', pc: '%',
      title: 'The month’s target, translated into visits',
      alt: 'The month’s target translated into activity: 12,000 of revenue, that is 100 orders at 120, that is 250 quotes if two quotes in five are signed, that is 500 visits at two visits per quote, that is 4.5 visits per seller per day for five sellers over 22 days. On day 14: 255 visits done for 318 expected, 118 quotes for 159, 52 orders for 64, 6,300 of revenue for 7,636.',
      header: 'Constructed example · the same team · what the target requires, then what is done on day 14',
      chain: [
        { big: '12,000', l1: 'target for the month', l2: 'in thousands of dinars' },
        { big: '100', l1: 'orders', l2: '120 per order' },
        { big: '250', l1: 'quotes', l2: '2 quotes in 5 signed' },
        { big: '500', l1: 'visits', l2: '2 visits per quote' },
        { big: '4.5', l1: 'visits per seller per day', l2: '5 sellers, 22 days' },
      ],
      dayTitle: 'On day 14: expected, done', expected: 'expected', done: 'done',
      gauges: ['visits', 'quotes', 'orders', 'revenue'],
      legend: 'in accent: the leading indicators, those that announce the result',
      band: 'Leading indicators (visits, quotes) announce the result; lagging indicators (orders, revenue) record it.',
      tiles: [
        { big: '4.5 visits', l1: 'per seller per day: the target, translated into activity', l2: '500 visits for 12,000', hot: true },
        { big: '255 of 318', l1: 'visits done on day 14', l2: '80% of the expected activity' },
        { big: '6,300 of 7,636', l1: 'revenue done on day 14', l2: 'revenue follows activity, with a delay' },
      ],
      line1: 'A revenue target is observed; a target in visits and quotes is steered, because it is measured every evening.',
      line2: 'In the example, the signing rate holds: it is the number of visits that is missing. The decision is not the same.',
      note: 'Constructed example · fictitious order value, rates and volumes; five sellers, 22 working days.',
    },
  },
  ar: {
    vendeurs: {
      sep: ' ', pc: ' %', fmt: (n) => String(Math.round(n * 10) / 10).replace('.', ','),
      title: 'الشهر، كما يُرى في اليوم 14: من على الوتيرة، ومن ليس عليها',
      alt: 'خمسة بائعين في اليوم 14 من شهر فيه 22 يوم عمل. الوتيرة تقتضي أن يكون 64 بالمئة من الهدف منجزاً. بائعان فوقها، بـ 72 و68 بالمئة؛ وثلاثة تحتها، بـ 48 و36 و19 بالمئة. والفريق أنجز 6300 من 12000، أي 52,5 بالمئة. وبالوتيرة الحالية، سينهي الأولان بـ 113 و107 بالمئة، والثلاثة الآخرون بـ 75 و57 و29 بالمئة، والفريق بـ 82,5 بالمئة.',
      header: 'مثال مركَّب · خمسة بائعين، شهر من 22 يوم عمل، يُرى في اليوم 14 · بآلاف الدنانير',
      colSeller: 'البائع', colTarget: 'الهدف', colLanding: 'نهاية الشهر',
      sellers: ['البائع أ', 'البائع ب', 'البائع ج', 'البائع د', 'البائع هـ'], total: 'الفريق',
      today: 'اليوم 14 من 22: الوتيرة عند ⁦64 %⁩',
      band: 'الخط المتقطع هو الوتيرة: الجزء من الهدف الذي يجب أن يكون منجزاً اليوم. والدائرة هي نهاية الشهر إذا لم يتغير شيء.',
      tiles: [
        { big: '⁦52,5 %⁩', l1: 'أنجزه الفريق في اليوم 14', l2: '⁦6 300⁩ من ⁦12 000⁩' },
        { big: '⁦64 %⁩', l1: 'ما يجب أن يكون منجزاً اليوم', l2: 'التأخر عن الوتيرة: ⁦1 336⁩', hot: true },
        { big: '⁦82,5 %⁩', l1: 'نهاية الشهر بالوتيرة الحالية', l2: '⁦9 900⁩ من ⁦12 000⁩' },
      ],
      line1: 'الشهر نفسه، كما يُرى في اليوم 14: بائعان متقدمان على الوتيرة، ثلاثة متأخرون، وتبقى ثمانية أيام للتحرك.',
      line2: 'لبلوغ الهدف، يلزم 713 في اليوم حتى نهاية الشهر؛ والفريق ينجز 450. واليوم هو الذي يُحسم فيه ذلك.',
      note: 'مثال مركَّب · مبالغ خيالية؛ ونهاية الشهر تمديد لوتيرة الأيام الأربعة عشر الأولى.',
    },
    chaine: {
      sep: ' ', pc: ' %',
      title: 'هدف الشهر، مترجَماً إلى زيارات',
      alt: 'هدف الشهر مترجَماً إلى نشاط: 12000 من رقم الأعمال، أي 100 طلبية بـ 120، أي 250 عرض سعر إذا وُقّع عرضان من خمسة، أي 500 زيارة بزيارتين لكل عرض، أي 4,5 زيارة لكل بائع في اليوم لخمسة بائعين على 22 يوماً. وفي اليوم 14: 255 زيارة منجزة من 318 منتظرة، 118 عرضاً من 159، 52 طلبية من 64، و6300 من رقم الأعمال من 7636.',
      header: 'مثال مركَّب · الفريق نفسه · ما يتطلبه الهدف، ثم ما أُنجز في اليوم 14',
      chain: [
        { big: '12 000', l1: 'هدف الشهر', l2: 'بآلاف الدنانير' },
        { big: '100', l1: 'طلبية', l2: '120 لكل طلبية' },
        { big: '250', l1: 'عرض سعر', l2: 'عرضان من خمسة يُوقَّعان' },
        { big: '500', l1: 'زيارة', l2: 'زيارتان لكل عرض' },
        { big: '4,5', l1: 'زيارة لكل بائع في اليوم', l2: '5 بائعين، 22 يوماً' },
      ],
      dayTitle: 'في اليوم 14: المنتظر والمنجز', expected: 'المنتظر', done: 'المنجز',
      gauges: ['الزيارات', 'عروض الأسعار', 'الطلبيات', 'رقم الأعمال'],
      legend: 'باللون المبرز: المؤشرات المتقدمة، التي تُعلن النتيجة',
      band: 'المؤشرات المتقدمة (الزيارات، العروض) تُعلن النتيجة؛ ومؤشرات النتيجة (الطلبيات، الرقم) تعاينها.',
      tiles: [
        { big: '⁦4,5⁩ زيارة', l1: 'لكل بائع في اليوم: الهدف، مترجَماً إلى نشاط', l2: '500 زيارة مقابل ⁦12 000⁩', hot: true },
        { big: '255 من 318', l1: 'زيارات منجزة في اليوم 14', l2: '⁦80 %⁩ من النشاط المنتظر' },
        { big: '⁦6 300⁩ من ⁦7 636⁩', l1: 'الرقم المنجز في اليوم 14', l2: 'الرقم يتبع النشاط، بتأخر' },
      ],
      line1: 'الهدف برقم الأعمال يُعاين؛ والهدف بالزيارات والعروض يُقاد، لأنه يُقاس كل مساء.',
      line2: 'في المثال، نسبة التوقيع صامدة: عدد الزيارات هو الذي ينقص. والقرار ليس نفسه.',
      note: 'مثال مركَّب · قيمة الطلبية والنسب والأحجام خيالية؛ خمسة بائعين، 22 يوم عمل.',
    },
  },
};
