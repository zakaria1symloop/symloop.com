// Bespoke animated figures for the 2027 "comment gérer la trésorerie" page.
//  plan():  thirteen weeks of cash. One column per week for the end-of-week
//           balance with nothing changed (negative at week 7), a dashed floor,
//           a thin line for the balance after two decisions taken in week 1,
//           and the receipts and payments of each week under the chart.
//  cycle(): the cash cycle in days. Stock, customer credit and supplier credit
//           as bars on a day axis, and the days money is tied up: 75 today,
//           35 after three adjustments.
// Amounts are in thousands of dinars; numbers are drawn in ltr text elements.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, open, heading, esc } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function pop(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scale(0)}${(at + 1.2).toFixed(1)}%,100%{transform:scale(1)}}`); return `transform-box:fill-box;transform-origin:center;animation:${P}-${id} ${LOOP}s linear infinite`; }
function growX(css, P, id, at, dur, rtl) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'} center;animation:${P}-${id} ${LOOP}s linear infinite`; }
function growV(css, P, id, at, dur, down) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleY(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleY(1)}}`); return `transform-box:fill-box;transform-origin:center ${down ? 'top' : 'bottom'};animation:${P}-${id} ${LOOP}s linear infinite`; }
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
const sgn = (n, sep) => (n < 0 ? '−' : '') + grp(n, sep);
const num = (c, x, y, str, o = {}) => ltrSpans(c.X(x), y, [[str, o.fill || C.fg, o.bold]], o.size || 10.5, 'middle');
const hline = (c, x1, x2, y, color, dash, sw) => `<polyline points="${c.X(x1)},${y} ${c.X(x2)},${y}" fill="none" stroke="${color}" stroke-width="${sw || 1}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;

// thirteen weeks, thousands of dinars; opening balance 1 800
const IN = [2600, 2900, 2400, 3100, 2200, 1500, 1900, 3600, 3000, 2800, 3200, 2700, 3100];
const OUT = [2500, 2700, 3200, 2400, 2900, 2600, 3300, 2300, 2900, 2600, 2500, 3200, 2600];
const ALT = [1900, 2100, 1300, 2000, 1300, 1600, 1100, 1000, 1100, 1300, 1100, 600, 1100];
const FLOOR = 500; const Y0 = 320; const KP = 0.055;
const CXP = (i) => 262 + i * 64;

export function plan(t, rtl) {
  const c = ctx(rtl); const P = 'tz'; const css = []; const H = 690; const sep = t.sep;
  const bal = []; let b = 1800; IN.forEach((v, i) => { b += v - OUT[i]; bal.push(b); });
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 1040, 312, { stroke: C.fg35, fill: DARK }) + text(c, 96, 172, t.rowWeek, { size: 9, font: 'mono', fill: C.fg55 }) + IN.map((_, i) => num(c, CXP(i), 172, String(i + 1), { size: 9.5, fill: C.fg55 })).join('')
    + hline(c, 230, 1064, Y0, C.line2) + hline(c, 230, 1064, Y0 - FLOOR * KP, C.fg55, '4 4') + text(c, 96, Y0 - FLOOR * KP + 4, t.floor, { size: 9.5, fill: C.fg70 })
    + text(c, 96, 420, t.rowIn, { size: 10, fill: C.fg70 }) + text(c, 96, 440, t.rowOut, { size: 10, fill: C.fg70 }) + '</g>';
  bal.forEach((v, i) => {
    const at = 5 + i * 2.2; const neg = v < 0; const low = v < FLOOR;
    const h = Math.max(Math.abs(v) * KP, 2); const y = neg ? Y0 : Y0 - h;
    const col = neg ? [C.accent, C.accent] : low ? [C.accent, TINT] : [C.fg, C.fg];
    s += `<g style="${growV(css, P, `b${i}`, at, 1.4, neg)}">` + rect(c, CXP(i) - 20, y, 40, h, { stroke: col[0], fill: col[1] }) + '</g>';
    s += `<g style="${pop(css, P, `v${i}`, at + 1.2)}">` + num(c, CXP(i), neg ? y + h + 14 : low ? Y0 + 14 : y - 6, sgn(v, sep), { size: neg ? 12 : 9.5, bold: neg || low, fill: neg || low ? C.accent : C.fg70 }) + '</g>';
    const hotIn = i === 5; const hotOut = i === 6;
    s += `<g style="animation:${show(css, P, `n${i}`, at)}">` + num(c, CXP(i), 420, grp(IN[i], sep), { size: 9.5, bold: hotIn, fill: hotIn ? C.accent : C.fg70 }) + num(c, CXP(i), 440, grp(OUT[i], sep), { size: 9.5, bold: hotOut, fill: hotOut ? C.accent : C.fg55 }) + '</g>';
  });
  // the balance after two decisions taken in week 1 (differs from week 6 to week 10)
  const pts = [4, 5, 6, 7, 8, 9, 10].map((i) => [c.X(CXP(i)), Y0 - ALT[i] * KP]);
  let len = 0; for (let i = 1; i < pts.length; i++) len += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]);
  s += `<polyline points="${pts.map((p) => `${p[0]},${p[1].toFixed(1)}`).join(' ')}" fill="none" stroke="${C.fg}" stroke-width="2" stroke-dasharray="${len.toFixed(0)}" style="animation:${drawLine(css, P, 'al', 38, 6, len)}"/>`;
  pts.slice(1, 6).forEach((p, k) => { s += `<g style="${pop(css, P, `d${k}`, 39 + k)}"><circle cx="${p[0]}" cy="${p[1].toFixed(1)}" r="4" fill="${DARK}" stroke="${C.fg}" stroke-width="2"/></g>`; });
  s += `<g style="animation:${show(css, P, 'lg', 6)}">` + rect(c, 700, 190, 14, 10, { stroke: C.accent, fill: C.accent }) + text(c, 722, 199, t.legendA, { size: 9.5, fill: C.fg70 }) + '</g>';
  s += `<g style="animation:${show(css, P, 'lh', 38)}">` + hline(c, 700, 714, 213, C.fg, null, 2) + text(c, 722, 217, t.legendB, { size: 9.5, fill: C.fg }) + '</g>';
  const by = 470;
  s += `<g style="animation:${show(css, P, 'bd', 48)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 530;
  s += tiles(c, css, P, ky, t.tiles, 52);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// days: [stock, customer credit, supplier credit]
const TODAY = [45, 60, 30];
const AFTER = [35, 45, 45];
const DX = (d) => 300 + d * 7;

export function cycle(t, rtl) {
  const c = ctx(rtl); const P = 'ty'; const css = []; const H = 696;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 1040, 318, { stroke: C.fg35, fill: DARK }) + hline(c, 300, 1080, 438, C.line2)
    + [0, 30, 60, 90].map((d) => `<polyline points="${c.X(DX(d))},184 ${c.X(DX(d))},438" fill="none" stroke="${C.line}" stroke-width="1" stroke-dasharray="2 5"/>` + num(c, DX(d), 453, String(d), { size: 9.5, fill: C.fg55 })).join('')
    + text(c, 96, 453, t.axis, { size: 9, font: 'mono', fill: C.fg55 }) + '</g>';
  const block = (days, y0, title, id, at0) => {
    const [st, cu, su] = days; const tied = st + cu - su; let g = '';
    g += `<g style="animation:${show(css, P, `${id}t`, at0)}">` + text(c, 96, y0, title, { size: 11, fill: C.fg, weight: 500 }) + t.lanes.map((l, k) => text(c, 110, y0 + 30 + k * 22 + (k === 3 ? 6 : 0) + 12, l, { size: 9.5, fill: k === 3 ? C.accent : C.fg70, weight: k === 3 ? 500 : 300 })).join('') + '</g>';
    const bar = (k, d0, d1, o, at) => {
      const y = y0 + 30 + k * 22 + (k === 3 ? 6 : 0);
      return `<g style="${growX(css, P, `${id}b${k}`, at, 2, rtl)}">` + rect(c, DX(d0), y, (d1 - d0) * 7, 16, { stroke: o.stroke, fill: o.fill, dash: o.dash }) + '</g>'
        + `<g style="${pop(css, P, `${id}n${k}`, at + 2)}">` + num(c, DX((d0 + d1) / 2), y + 12, String(d1 - d0), { size: 10.5, bold: true, fill: o.color }) + '</g>';
    };
    g += bar(0, 0, st, { stroke: C.fg55, fill: C.fg35, color: C.fg }, at0 + 1);
    g += bar(1, st, st + cu, { stroke: C.fg70, fill: C.fg55, color: '#000' }, at0 + 4);
    g += bar(2, 0, su, { stroke: C.fg, fill: 'none', dash: '5 3', color: C.fg }, at0 + 7);
    g += bar(3, su, su + tied, { stroke: C.accent, fill: C.accent, color: '#000' }, at0 + 10);
    return g;
  };
  s += block(TODAY, 168, t.blockA, 'a', 5);
  s += block(AFTER, 314, t.blockB, 'b', 26);
  const by = 476;
  s += `<g style="animation:${show(css, P, 'bd', 48)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 536;
  s += tiles(c, css, P, ky, t.tiles, 52);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    plan: {
      sep: ' ',
      title: 'Treize semaines de trésorerie : le creux se voit six semaines avant',
      alt: 'Le solde de fin de semaine d’une entreprise sur treize semaines, en milliers de dinars, à partir d’un solde de 1 800. Sans rien changer, il passe de 1 900 à 200 en semaine 6, tombe à moins 1 200 en semaine 7, puis remonte à 1 100 en fin de trimestre. Un plancher de 500 est tracé. Avec deux décisions prises en semaine 1, relancer un client et décaler une commande, le solde ne descend pas sous 600.',
      header: 'Exemple construit · une entreprise de négoce, un trimestre · en milliers de dinars · solde de fin de semaine',
      rowWeek: 'semaine', rowIn: 'encaissements', rowOut: 'décaissements', floor: 'plancher : 500',
      legendA: 'solde sous le plancher, sans rien changer', legendB: 'solde avec deux décisions prises en semaine 1',
      band: 'Le plan range chaque encaissement et chaque décaissement dans sa semaine. Le solde n’est plus constaté : il est prévu, semaine par semaine.',
      tiles: [
        { big: '−1 200', l1: 'le solde de la semaine 7, vu six semaines avant', l2: 'un client en retard, une échéance fournisseur', hot: true },
        { big: '2 décisions', l1: 'relancer un client, décaler une commande', l2: 'prises en semaine 1, pas en semaine 7' },
        { big: '600', l1: 'le point bas du trimestre après ces décisions', l2: 'au-dessus du plancher de 500' },
      ],
      line1: 'Sur le trimestre, les entrées et les sorties s’équilibrent presque : le problème n’est pas le trimestre, c’est la semaine 7.',
      line2: 'Un plan de trésorerie ne crée pas d’argent : il donne six semaines pour déplacer une date, ce qu’un relevé de banque ne permet pas.',
      note: 'Exemple construit · montants fictifs ; solde de départ 1 800 ; entrées 35 000 et sorties 35 700 sur le trimestre.',
    },
    cycle: {
      title: 'Le cycle de l’argent : 75 jours immobilisés, ou 35',
      alt: 'Le cycle de l’argent sur un axe de jours. Aujourd’hui : 45 jours de stock, puis 60 jours de crédit client, pour 30 jours de crédit fournisseur ; l’argent est immobilisé 75 jours, du jour 30 au jour 105. Après trois réglages : 35 jours de stock, 45 jours de crédit client, 45 jours de crédit fournisseur ; l’argent est immobilisé 35 jours, du jour 45 au jour 80.',
      header: 'Exemple construit · de l’achat de la marchandise à l’encaissement du client · durées en jours',
      blockA: 'Aujourd’hui', blockB: 'Après trois réglages',
      lanes: ['stock', 'crédit client', 'crédit fournisseur', 'argent immobilisé'],
      axis: 'jours depuis l’achat',
      band: 'Cycle = jours de stock + jours de crédit client − jours de crédit fournisseur. Chaque jour gagné rend en argent un jour de marchandise.',
      tiles: [
        { big: '75 jours', l1: 'entre le paiement du fournisseur et celui du client', l2: '45 + 60 − 30' },
        { big: '21 000', l1: 'immobilisés, en milliers de dinars', l2: '280 par jour × 75 jours', hot: true },
        { big: '35 jours', l1: 'après trois réglages : stock, client, fournisseur', l2: '9 800 immobilisés, 11 200 libérés' },
      ],
      line1: 'Dix jours de stock en moins, quinze jours de crédit client en moins, quinze jours de crédit fournisseur en plus : quarante jours.',
      line2: 'Aucun de ces réglages ne demande de vendre plus : ils demandent de savoir, chaque semaine, où en est chacun des trois compteurs.',
      note: 'Exemple construit · ordre de grandeur : coût journalier des marchandises (280) × durée du cycle.',
    },
  },
  en: {
    plan: {
      sep: ',',
      title: 'Thirteen weeks of cash: the dip is visible six weeks ahead',
      alt: 'A company’s end-of-week balance over thirteen weeks, in thousands of dinars, starting from a balance of 1,800. With nothing changed, it goes from 1,900 to 200 in week 6, falls to minus 1,200 in week 7, then climbs back to 1,100 at the end of the quarter. A floor of 500 is drawn. With two decisions taken in week 1, chasing one customer and moving one order, the balance does not go below 600.',
      header: 'Constructed example · a trading company, one quarter · in thousands of dinars · end-of-week balance',
      rowWeek: 'week', rowIn: 'receipts', rowOut: 'payments', floor: 'floor: 500',
      legendA: 'balance under the floor, nothing changed', legendB: 'balance with two decisions taken in week 1',
      band: 'The plan places every receipt and every payment in its week. The balance is no longer observed: it is forecast, week by week.',
      tiles: [
        { big: '−1,200', l1: 'week 7’s balance, seen six weeks before', l2: 'one late customer, one supplier due date', hot: true },
        { big: '2 decisions', l1: 'chase one customer, move one order', l2: 'taken in week 1, not in week 7' },
        { big: '600', l1: 'the quarter’s low point after those decisions', l2: 'above the floor of 500' },
      ],
      line1: 'Over the quarter, money in and money out almost balance: the problem is not the quarter, it is week 7.',
      line2: 'A cash plan does not create money: it gives six weeks to move a date, which a bank statement does not allow.',
      note: 'Constructed example · fictitious amounts; opening balance 1,800; 35,000 in and 35,700 out over the quarter.',
    },
    cycle: {
      title: 'The cash cycle: 75 days tied up, or 35',
      alt: 'The cash cycle on a day axis. Today: 45 days of stock, then 60 days of customer credit, against 30 days of supplier credit; money is tied up for 75 days, from day 30 to day 105. After three adjustments: 35 days of stock, 45 days of customer credit, 45 days of supplier credit; money is tied up for 35 days, from day 45 to day 80.',
      header: 'Constructed example · from buying the goods to collecting from the customer · durations in days',
      blockA: 'Today', blockB: 'After three adjustments',
      lanes: ['stock', 'customer credit', 'supplier credit', 'money tied up'],
      axis: 'days since purchase',
      band: 'Cycle = days of stock + days of customer credit − days of supplier credit. Each day gained turns one day of goods back into money.',
      tiles: [
        { big: '75 days', l1: 'between paying the supplier and being paid by the customer', l2: '45 + 60 − 30' },
        { big: '21,000', l1: 'tied up, in thousands of dinars', l2: '280 a day × 75 days', hot: true },
        { big: '35 days', l1: 'after three adjustments: stock, customer, supplier', l2: '9,800 tied up, 11,200 released' },
      ],
      line1: 'Ten days of stock fewer, fifteen days of customer credit fewer, fifteen days of supplier credit more: forty days.',
      line2: 'None of these adjustments requires selling more: they require knowing, every week, where each of the three counters stands.',
      note: 'Constructed example · order of magnitude: daily cost of goods (280) × length of the cycle.',
    },
  },
  ar: {
    plan: {
      sep: ' ',
      title: 'ثلاثة عشر أسبوعاً من الخزينة: الهبوط يُرى قبل ستة أسابيع',
      alt: 'رصيد نهاية الأسبوع لمؤسسة على ثلاثة عشر أسبوعاً، بآلاف الدنانير، انطلاقاً من رصيد 1800. دون تغيير شيء، ينتقل من 1900 إلى 200 في الأسبوع 6، ينزل إلى ناقص 1200 في الأسبوع 7، ثم يصعد إلى 1100 في نهاية الفصل. ويُرسم حد أدنى بـ 500. وبقرارين يُتخذان في الأسبوع 1، تذكير زبون وتأجيل طلبية، لا ينزل الرصيد تحت 600.',
      header: 'مثال مركَّب · مؤسسة تجارة، فصل واحد · بآلاف الدنانير · رصيد نهاية الأسبوع',
      rowWeek: 'الأسبوع', rowIn: 'المقبوضات', rowOut: 'المدفوعات', floor: 'الحد الأدنى: 500',
      legendA: 'الرصيد تحت الحد الأدنى، دون تغيير شيء', legendB: 'الرصيد بقرارين يُتخذان في الأسبوع 1',
      band: 'المخطط يضع كل مقبوض وكل مدفوع في أسبوعه. والرصيد لا يُعاين بعد الآن: يُتوقَّع، أسبوعاً بأسبوع.',
      tiles: [
        { big: '⁦−1 200⁩', l1: 'رصيد الأسبوع 7، يُرى قبل ستة أسابيع', l2: 'زبون متأخر، واستحقاق مورّد', hot: true },
        { big: 'قراران', l1: 'تذكير زبون، وتأجيل طلبية', l2: 'يُتخذان في الأسبوع 1، لا في الأسبوع 7' },
        { big: '600', l1: 'أدنى نقطة في الفصل بعد القرارين', l2: 'فوق الحد الأدنى 500' },
      ],
      line1: 'على الفصل كله، الداخل والخارج يكادان يتعادلان: المشكل ليس الفصل، بل الأسبوع 7.',
      line2: 'مخطط الخزينة لا يصنع مالاً: هو يعطي ستة أسابيع لتحريك تاريخ، وهو ما لا يتيحه كشف البنك.',
      note: 'مثال مركَّب · مبالغ خيالية؛ رصيد البداية ⁦1 800⁩؛ الداخل ⁦35 000⁩ والخارج ⁦35 700⁩ على الفصل.',
    },
    cycle: {
      title: 'دورة النقد: 75 يوماً من المال المجمَّد، أو 35',
      alt: 'دورة النقد على محور بالأيام. اليوم: 45 يوماً من المخزون، ثم 60 يوماً من أجل الزبون، مقابل 30 يوماً من أجل المورّد؛ والمال مجمَّد 75 يوماً، من اليوم 30 إلى اليوم 105. وبعد ثلاثة تعديلات: 35 يوماً من المخزون، 45 يوماً من أجل الزبون، و45 يوماً من أجل المورّد؛ والمال مجمَّد 35 يوماً، من اليوم 45 إلى اليوم 80.',
      header: 'مثال مركَّب · من شراء البضاعة إلى تحصيل الزبون · المدد بالأيام',
      blockA: 'اليوم', blockB: 'بعد ثلاثة تعديلات',
      lanes: ['المخزون', 'أجل الزبون', 'أجل المورّد', 'المال المجمَّد'],
      axis: 'الأيام منذ الشراء',
      band: 'الدورة = أيام المخزون + أيام أجل الزبون − أيام أجل المورّد. وكل يوم يُربح يعيد يوماً من البضاعة مالاً.',
      tiles: [
        { big: '75 يوماً', l1: 'بين الدفع للمورّد وتحصيل الزبون', l2: '⁦45 + 60 − 30⁩' },
        { big: '⁦21 000⁩', l1: 'مجمَّدة، بآلاف الدنانير', l2: '⁦280 × 75⁩', hot: true },
        { big: '35 يوماً', l1: 'بعد ثلاثة تعديلات: المخزون، الزبون، والمورّد', l2: '⁦9 800⁩ مجمَّدة، و⁦11 200⁩ محرَّرة' },
      ],
      line1: 'عشرة أيام مخزون أقل، خمسة عشر يوماً من أجل الزبون أقل، وخمسة عشر يوماً من أجل المورّد أكثر: أربعون يوماً.',
      line2: 'لا واحد من هذه التعديلات يتطلب بيعاً أكثر: تتطلب أن نعرف، كل أسبوع، أين وصل كل واحد من العدّادات الثلاثة.',
      note: 'مثال مركَّب · تقدير تقريبي: الكلفة اليومية للبضاعة (280) × مدة الدورة.',
    },
  },
};
