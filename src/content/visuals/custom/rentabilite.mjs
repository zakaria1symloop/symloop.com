// Bespoke animated figures for the 2027 "comment savoir si mon entreprise est rentable" page.
//  cascade(): one month, from revenue down to the result. Nine columns: revenue,
//             cost of goods, gross margin, three small leaks (discounts, delivery,
//             returns), margin after direct costs, fixed costs, result. Drawn to
//             scale: 30 % at the top, 2 % at the bottom.
//  seuil():   six months of revenue against the break-even line (fixed costs
//             divided by the rate of margin after direct costs). Months under the
//             line are in accent, with the month's result under each bar.
// Amounts are in thousands of dinars and drawn in their own ltr text elements.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, open, heading, esc } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function pop(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scale(0)}${(at + 1.2).toFixed(1)}%,100%{transform:scale(1)}}`); return `transform-box:fill-box;transform-origin:center;animation:${P}-${id} ${LOOP}s linear infinite`; }
function growY(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleY(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleY(1)}}`); return `transform-box:fill-box;transform-origin:center bottom;animation:${P}-${id} ${LOOP}s linear infinite`; }
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
const hline = (c, x1, x2, y, color, dash, sw) => `<polyline points="${c.X(x1)},${y} ${c.X(x2)},${y}" fill="none" stroke="${color}" stroke-width="${sw || 1}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;

// one month, thousands of dinars
const STEPS = [
  { kind: 'total', top: 12000, bot: 0 },
  { kind: 'drop', top: 12000, bot: 3600 },
  { kind: 'total', top: 3600, bot: 0, pct: 0 },
  { kind: 'leak', top: 3600, bot: 3120 },
  { kind: 'leak', top: 3120, bot: 2580 },
  { kind: 'leak', top: 2580, bot: 2400 },
  { kind: 'total', top: 2400, bot: 0, pct: 1 },
  { kind: 'drop', top: 2400, bot: 250 },
  { kind: 'final', top: 250, bot: 0, pct: 2 },
];
const YC = (v) => 410 - v * (220 / 12000);

export function cascade(t, rtl) {
  const c = ctx(rtl); const P = 'rn'; const css = []; const H = 686; const sep = t.sep;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + text(c, 96, 166, t.unit, { size: 9, font: 'mono', fill: C.fg55 }) + hline(c, 96, 1104, 410, C.line2) + '</g>';
  STEPS.forEach((st, i) => {
    const x = 100 + i * 113; const at = 5 + i * 4.5;
    const y = YC(st.top); const h = Math.max(YC(st.bot) - y, 2);
    const col = st.kind === 'total' ? [C.fg, C.fg] : st.kind === 'drop' ? [C.fg55, C.fg35] : [C.accent, C.accent];
    const bar = rect(c, x, y, 78, h, { stroke: col[0], fill: col[1] });
    s += (st.kind === 'total' || st.kind === 'final') ? `<g style="${growY(css, P, `b${i}`, at, 2)}">${bar}</g>` : `<g style="animation:${show(css, P, `b${i}`, at + 1)}">${bar}</g>`;
    const label = (st.kind === 'total' || st.kind === 'final') ? grp(st.top, sep) : '−' + grp(st.top - st.bot, sep);
    const hot = st.kind === 'leak' || st.kind === 'final';
    s += `<g style="${pop(css, P, `v${i}`, at + 2)}">` + num(c, x + 39, y - 8, label, { bold: true, size: st.kind === 'final' ? 13 : 11, fill: hot ? C.accent : C.fg }) + (st.pct !== undefined ? num(c, x + 39, y - 24, t.pcts[st.pct], { size: 9.5, fill: hot ? C.accent : C.fg55 }) : '') + '</g>';
    s += `<g style="animation:${show(css, P, `l${i}`, at)}">` + text(c, x + 39, 428, t.cols[i][0], { size: 9, fill: C.fg70, anchor: 'middle' }) + (t.cols[i][1] ? text(c, x + 39, 440, t.cols[i][1], { size: 9, fill: C.fg70, anchor: 'middle' }) : '') + '</g>';
  });
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bd', 50)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 54);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// six months of revenue; margin after direct costs 20 %, fixed costs 2 150
const CA = [9800, 10400, 11200, 12000, 10100, 11600];
const FIX = 2150; const RATE = 0.2; const BE = FIX / RATE;
const YS = (v) => 400 - v * (220 / 12500);

export function seuil(t, rtl) {
  const c = ctx(rtl); const P = 'rk'; const css = []; const H = 682; const sep = t.sep;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 1040, 304, { stroke: C.fg35, fill: DARK }) + text(c, 96, 170, t.formula, { size: 10.5, font: 'mono', fill: C.accent }) + text(c, 96, 196, t.rowCa, { size: 10, fill: C.fg70 }) + text(c, 96, 424, t.rowRes, { size: 10, fill: C.fg, weight: 500 }) + hline(c, 250, 1000, 400, C.line2) + '</g>';
  CA.forEach((v, i) => {
    const x = 270 + i * 125; const at = 6 + i * 4; const res = Math.round(v * RATE - FIX); const loss = res < 0;
    s += `<g style="${growY(css, P, `b${i}`, at, 2)}">` + rect(c, x, YS(v), 80, 400 - YS(v), { stroke: loss ? C.accent : C.fg, fill: loss ? C.accent : C.fg }) + '</g>';
    s += `<g style="${pop(css, P, `v${i}`, at + 2)}">` + num(c, x + 40, 244, grp(v, sep), { size: 11, bold: true, fill: '#000' }) + '</g>';
    s += `<g style="${pop(css, P, `r${i}`, 36 + i * 2)}">` + num(c, x + 40, 424, (loss ? '−' : '+') + grp(res, sep), { bold: true, size: 12, fill: loss ? C.accent : C.fg }) + '</g>';
    s += `<g style="animation:${show(css, P, `m${i}`, at)}">` + text(c, x + 40, 440, t.months[i], { size: 9, font: 'mono', fill: C.fg55, anchor: 'middle' }) + '</g>';
  });
  s += `<g style="animation:${show(css, P, 'be', 32)}">` + hline(c, 250, 1000, YS(BE).toFixed(1), DARK, null, 5) + hline(c, 250, 1000, YS(BE).toFixed(1), C.accent, '6 4', 2) + text(c, 96, YS(BE) + 4, t.beLabel, { size: 10, fill: C.accent, weight: 500 }) + num(c, 1052, YS(BE) + 4, grp(BE, sep), { bold: true, size: 12, fill: C.accent }) + '</g>';
  const by = 462;
  s += `<g style="animation:${show(css, P, 'bd', 50)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 522;
  s += tiles(c, css, P, ky, t.tiles, 54);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    cascade: {
      sep: ' ',
      title: 'Du chiffre d’affaires au résultat : la cascade d’un mois',
      alt: 'Cascade d’un mois, en milliers de dinars. Chiffre d’affaires 12 000 ; coût des marchandises 8 400 ; marge brute 3 600, soit 30 %. Puis trois petites marches : remises 480, livraison 540, retours 180. Marge après coûts directs 2 400, soit 20 %. Charges fixes 2 150. Résultat du mois 250, soit 2,1 % du chiffre d’affaires.',
      header: 'Exemple construit · une entreprise de négoce, un mois · en milliers de dinars · résultat de gestion',
      unit: 'en milliers de dinars',
      cols: [['chiffre', 'd’affaires'], ['coût des', 'marchandises'], ['marge', 'brute'], ['remises', ''], ['livraison', ''], ['retours', ''], ['marge après', 'coûts directs'], ['charges', 'fixes'], ['résultat', 'du mois']],
      pcts: ['30 %', '20 %', '2,1 %'],
      band: 'La marge brute ne voit ni les remises, ni la livraison, ni les retours, ni les charges fixes : 30 % en haut de la cascade, 2 % en bas.',
      tiles: [
        { big: '30 %', l1: 'marge brute : ce que le logiciel de vente affiche', l2: '3 600 sur 12 000' },
        { big: '20 %', l1: 'après remises, livraison et retours', l2: '1 200 de coûts que personne n’additionne' },
        { big: '2,1 %', l1: 'résultat du mois, après les charges fixes', l2: '250 sur 12 000', hot: true },
      ],
      line1: 'Le chiffre d’affaires et la marge brute peuvent monter pendant que le résultat baisse : tout se joue dans les marches du milieu.',
      line2: 'Chaque marche a sa donnée : la remise sur la ligne, la livraison sur la commande, le retour sur l’avoir, la charge fixe sur le mois.',
      note: 'Exemple construit · montants fictifs ; il s’agit d’un résultat de gestion, pas d’un résultat comptable ou fiscal.',
    },
    seuil: {
      sep: ' ',
      title: 'Six mois face au seuil de rentabilité',
      alt: 'Six mois de chiffre d’affaires, en milliers de dinars : 9 800, 10 400, 11 200, 12 000, 10 100 et 11 600. Le seuil de rentabilité est de 10 750, soit 2 150 de charges fixes divisés par 20 % de marge après coûts directs. Trois mois sont sous le seuil et perdent 190, 70 et 130 ; trois sont au-dessus et gagnent 90, 250 et 170. Le résultat cumulé des six mois est de 120.',
      header: 'Exemple construit · la même entreprise, six mois · en milliers de dinars · charges fixes de 2 150 par mois',
      formula: 'seuil = charges fixes ÷ taux de marge après coûts directs = 2 150 ÷ 20 % = 10 750',
      rowCa: 'chiffre d’affaires du mois', rowRes: 'résultat du mois', beLabel: 'seuil de rentabilité',
      months: ['mois 1', 'mois 2', 'mois 3', 'mois 4', 'mois 5', 'mois 6'],
      band: 'Sous le seuil, le mois coûte ; au-dessus, vingt centimes par dinar vendu restent. Le seuil bouge dès qu’une charge fixe ou une remise bouge.',
      tiles: [
        { big: '10 750', l1: 'le seuil de rentabilité du mois', l2: '2 150 ÷ 20 %', hot: true },
        { big: '3 mois sur 6', l1: 'sous le seuil, donc en perte', l2: '−190 · −70 · −130' },
        { big: '+120', l1: 'le résultat cumulé des six mois', l2: 'pour 65 100 de chiffre d’affaires' },
      ],
      line1: 'Le seuil se connaît le premier jour du mois : on sait alors, chaque semaine, si l’on est en avance ou en retard sur lui.',
      line2: 'Baisser le seuil ou monter le taux : ce sont les deux seuls leviers, et chacun se lit dans la cascade.',
      note: 'Exemple construit · montants fictifs ; le taux de 20 % est celui de la figure précédente.',
    },
  },
  en: {
    cascade: {
      sep: ',',
      title: 'From revenue to result: one month’s cascade',
      alt: 'One month’s cascade, in thousands of dinars. Revenue 12,000; cost of goods 8,400; gross margin 3,600, that is 30%. Then three small steps: discounts 480, delivery 540, returns 180. Margin after direct costs 2,400, that is 20%. Fixed costs 2,150. Result of the month 250, that is 2.1% of revenue.',
      header: 'Constructed example · a trading company, one month · in thousands of dinars · management result',
      unit: 'in thousands of dinars',
      cols: [['revenue', ''], ['cost of', 'goods'], ['gross', 'margin'], ['discounts', ''], ['delivery', ''], ['returns', ''], ['margin after', 'direct costs'], ['fixed', 'costs'], ['result', 'of the month']],
      pcts: ['30%', '20%', '2.1%'],
      band: 'Gross margin sees neither discounts, nor delivery, nor returns, nor fixed costs: 30% at the top of the cascade, 2% at the bottom.',
      tiles: [
        { big: '30%', l1: 'gross margin: what the sales software displays', l2: '3,600 out of 12,000' },
        { big: '20%', l1: 'after discounts, delivery and returns', l2: '1,200 of costs nobody adds up' },
        { big: '2.1%', l1: 'result of the month, after fixed costs', l2: '250 out of 12,000', hot: true },
      ],
      line1: 'Revenue and gross margin can rise while the result falls: everything is decided in the middle steps.',
      line2: 'Each step has its data: the discount on the line, delivery on the order, the return on the credit note, the fixed cost on the month.',
      note: 'Constructed example · fictitious amounts; this is a management result, not an accounting or tax result.',
    },
    seuil: {
      sep: ',',
      title: 'Six months against the break-even point',
      alt: 'Six months of revenue, in thousands of dinars: 9,800, 10,400, 11,200, 12,000, 10,100 and 11,600. The break-even point is 10,750, that is 2,150 of fixed costs divided by a 20% margin after direct costs. Three months are under it and lose 190, 70 and 130; three are above and earn 90, 250 and 170. The cumulative result of the six months is 120.',
      header: 'Constructed example · the same company, six months · in thousands of dinars · fixed costs of 2,150 a month',
      formula: 'break-even = fixed costs ÷ rate of margin after direct costs = 2,150 ÷ 20% = 10,750',
      rowCa: 'revenue of the month', rowRes: 'result of the month', beLabel: 'break-even point',
      months: ['month 1', 'month 2', 'month 3', 'month 4', 'month 5', 'month 6'],
      band: 'Under the line, the month costs money; above it, twenty cents of every dinar sold remain. The line moves as soon as a fixed cost or a discount moves.',
      tiles: [
        { big: '10,750', l1: 'the month’s break-even point', l2: '2,150 ÷ 20%', hot: true },
        { big: '3 months of 6', l1: 'under the line, so at a loss', l2: '−190 · −70 · −130' },
        { big: '+120', l1: 'the cumulative result of the six months', l2: 'for 65,100 of revenue' },
      ],
      line1: 'The break-even point is known on the first day of the month: each week you then know whether you are ahead of it or behind.',
      line2: 'Lower the line or raise the rate: those are the only two levers, and each can be read in the cascade.',
      note: 'Constructed example · fictitious amounts; the 20% rate is the one from the previous figure.',
    },
  },
  ar: {
    cascade: {
      sep: ' ',
      title: 'من رقم الأعمال إلى النتيجة: شلال شهر واحد',
      alt: 'شلال شهر واحد، بآلاف الدنانير. رقم الأعمال 12000؛ كلفة البضاعة 8400؛ الهامش الإجمالي 3600، أي 30 بالمئة. ثم ثلاث درجات صغيرة: التخفيضات 480، التوصيل 540، والمرتجعات 180. الهامش بعد التكاليف المباشرة 2400، أي 20 بالمئة. الأعباء الثابتة 2150. نتيجة الشهر 250، أي نحو 2 بالمئة من رقم الأعمال.',
      header: 'مثال مركَّب · مؤسسة تجارة، شهر واحد · بآلاف الدنانير · نتيجة تسيير',
      unit: 'بآلاف الدنانير',
      cols: [['رقم', 'الأعمال'], ['كلفة', 'البضاعة'], ['الهامش', 'الإجمالي'], ['التخفيضات', ''], ['التوصيل', ''], ['المرتجعات', ''], ['الهامش بعد', 'التكاليف المباشرة'], ['الأعباء', 'الثابتة'], ['نتيجة', 'الشهر']],
      pcts: ['30 %', '20 %', '2,1 %'],
      band: 'الهامش الإجمالي لا يرى التخفيضات ولا التوصيل ولا المرتجعات ولا الأعباء الثابتة: 30 بالمئة في أعلى الشلال، و2 بالمئة في أسفله.',
      tiles: [
        { big: '⁦30 %⁩', l1: 'الهامش الإجمالي: ما يعرضه برنامج البيع', l2: '⁦3 600⁩ من ⁦12 000⁩' },
        { big: '⁦20 %⁩', l1: 'بعد التخفيضات والتوصيل والمرتجعات', l2: '⁦1 200⁩ من تكاليف لا يجمعها أحد' },
        { big: '⁦2,1 %⁩', l1: 'نتيجة الشهر، بعد الأعباء الثابتة', l2: '250 من ⁦12 000⁩', hot: true },
      ],
      line1: 'رقم الأعمال والهامش الإجمالي قد يرتفعان والنتيجة تنزل: كل شيء يُحسم في الدرجات الوسطى.',
      line2: 'لكل درجة معلومتها: التخفيض على السطر، التوصيل على الطلبية، المرتجع على إشعار الدائن، والعبء الثابت على الشهر.',
      note: 'مثال مركَّب · مبالغ خيالية؛ والمقصود نتيجة تسيير، لا نتيجة محاسبية أو جبائية.',
    },
    seuil: {
      sep: ' ',
      title: 'ستة أشهر أمام عتبة المردودية',
      alt: 'ستة أشهر من رقم الأعمال، بآلاف الدنانير: 9800، 10400، 11200، 12000، 10100، و11600. عتبة المردودية 10750، أي 2150 من الأعباء الثابتة مقسومة على 20 بالمئة من الهامش بعد التكاليف المباشرة. ثلاثة أشهر تحت العتبة وتخسر 190 و70 و130؛ وثلاثة فوقها وتربح 90 و250 و170. والنتيجة المتراكمة للأشهر الستة 120.',
      header: 'مثال مركَّب · المؤسسة نفسها، ستة أشهر · بآلاف الدنانير · أعباء ثابتة بـ ⁦2 150⁩ في الشهر',
      formula: 'العتبة = الأعباء الثابتة ÷ نسبة الهامش بعد التكاليف المباشرة = ⁦2 150 ÷ 20 % = 10 750⁩',
      rowCa: 'رقم أعمال الشهر', rowRes: 'نتيجة الشهر', beLabel: 'عتبة المردودية',
      months: ['الشهر 1', 'الشهر 2', 'الشهر 3', 'الشهر 4', 'الشهر 5', 'الشهر 6'],
      band: 'تحت العتبة، الشهر يكلّف؛ وفوقها، يبقى خُمس كل دينار مبيع. والعتبة تتحرك ما إن يتحرك عبء ثابت أو تخفيض.',
      tiles: [
        { big: '⁦10 750⁩', l1: 'عتبة مردودية الشهر', l2: '⁦2 150 ÷ 20 %⁩', hot: true },
        { big: '3 أشهر من 6', l1: 'تحت العتبة، أي في خسارة', l2: '⁦−190 · −70 · −130⁩' },
        { big: '⁦+120⁩', l1: 'النتيجة المتراكمة للأشهر الستة', l2: 'مقابل ⁦65 100⁩ من رقم الأعمال' },
      ],
      line1: 'العتبة تُعرف في أول يوم من الشهر: فنعرف بعدها، كل أسبوع، هل نحن متقدمون عليها أم متأخرون.',
      line2: 'إنزال العتبة أو رفع النسبة: هما الرافعتان الوحيدتان، وكل واحدة تُقرأ في الشلال.',
      note: 'مثال مركَّب · مبالغ خيالية؛ ونسبة 20 بالمئة هي نسبة الشكل السابق.',
    },
  },
};
