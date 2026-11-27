// Bespoke animated figures for the 2027 "ferme de poulets de chair" page.
//  mortalite(): deaths per day over a 42-day flock of 10 000 chicks (500 in all, 5 %), with a
//               threshold at twice the average of the seven previous days. An incident from
//               day 18 to day 24 takes 190 birds; the threshold is crossed on day 19 (18 deaths
//               against an average of 7), two days before the peak of 50.
//  coutkilo():  the cost of one kilo of live weight as two stacked columns. Same flock, 22 800 kg
//               sold at 230: with a feed conversion ratio of 1.80 the kilo costs 200.8 and the
//               flock leaves 666 000; at 2.00 it costs 215.8 and the flock leaves 324 000.
// Numbers are drawn in their own text elements, direction="ltr".
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, open, heading, esc } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function pop(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scale(0)}${(at + 1.2).toFixed(1)}%,100%{transform:scale(1)}}`); return `transform-box:fill-box;transform-origin:center;animation:${P}-${id} ${LOOP}s linear infinite`; }
function growY(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleY(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleY(1)}}`); return `transform-box:fill-box;transform-origin:center bottom;animation:${P}-${id} ${LOOP}s linear infinite`; }
const TINT = 'rgba(242,181,68,0.06)';
const SOFT = 'rgba(242,181,68,0.30)';
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
const poly = (c, pts, color, sw, dash) => `<polyline points="${pts.map(([x, y]) => `${c.X(x)},${y}`).join(' ')}" fill="none" stroke="${color}" stroke-width="${sw || 1}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const grp = (n, sep) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, sep);
const dec1 = (v, d) => v.toFixed(1).replace('.', d);

// deaths per day, days 1 to 42 (500 in all)
const DEATHS = [23, 19, 16, 12, 10, 9, 8, 7, 6, 7, 6, 8, 7, 6, 7, 6, 7, 10, 18, 34, 50, 42, 24, 12, 8, 7, 7, 7, 7, 8, 8, 8, 7, 8, 8, 8, 9, 9, 9, 9, 10, 9];
const INCIDENT = [18, 24];
const DXm = (d) => 128 + (d - 1) * 23;
const DYm = (v) => 404 - v * 3.6;

export function mortalite(t, rtl) {
  const c = ctx(rtl); const P = 'vm'; const css = []; const H = 686;
  const thr = DEATHS.map((_, i) => (i < 7 ? null : 2 * DEATHS.slice(i - 7, i).reduce((a, b) => a + b, 0) / 7));
  const alertDay = DEATHS.findIndex((v, i) => thr[i] !== null && v > thr[i]) + 1;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  let frame = rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + text(c, 96, 170, t.chartTitle, { size: 11, fill: C.fg, weight: 500 }) + poly(c, [[DXm(1) - 6, 404], [DXm(42) + 23, 404]], C.line2);
  [7, 14, 21, 28, 35, 42].forEach((d) => { frame += num(c, DXm(d) + 8, 420, String(d), { size: 9, fill: C.fg55 }); });
  frame += text(c, 96, 438, t.axis, { size: 8.5, fill: C.fg55 });
  [25, 50].forEach((v) => { frame += poly(c, [[DXm(1) - 6, DYm(v)], [DXm(42) + 23, DYm(v)]], C.line, 1, '3 4') + num(c, DXm(1) - 18, DYm(v) + 4, String(v), { size: 9, fill: C.fg55 }); });
  s += `<g style="animation:${show(css, P, 'pa', 3)}">${frame}</g>`;
  DEATHS.forEach((v, i) => {
    const d = i + 1; const hot = d >= INCIDENT[0] && d <= INCIDENT[1];
    s += `<g style="${growY(css, P, `b${d}`, 5 + i * 0.5, 1.4)}">` + rect(c, DXm(d), DYm(v), 17, v * 3.6, { stroke: hot ? C.accent : C.fg55, fill: hot ? C.accent : C.fg35 }) + '</g>';
  });
  // the threshold: twice the average of the seven previous days
  const pts = thr.map((v, i) => (v === null ? null : [DXm(i + 1) + 8, DYm(Math.min(v, 58))])).filter(Boolean);
  s += `<g style="animation:${show(css, P, 'th', 28)}">` + poly(c, pts, C.fg, 1.2, '4 3') + text(c, DXm(8), 262, t.thrLabel, { size: 9.5, fill: C.fg, weight: 500 }) + '</g>';
  s += `<g style="${pop(css, P, 'al', 32)}">` + poly(c, [[DXm(alertDay) + 8, DYm(DEATHS[alertDay - 1]) - 6], [DXm(alertDay) + 8, 196]], C.accent, 1.5) + text(c, DXm(alertDay) - 2, 192, t.alert.replace('{d}', String(alertDay)), { size: 10, fill: C.accent, weight: 500, anchor: 'end' }) + '</g>';
  s += `<g style="animation:${show(css, P, 'pk', 35)}">` + num(c, DXm(21) + 8, DYm(50) - 6, '50', { size: 11, bold: true, fill: C.accent }) + '</g>';
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bd', 39)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 43);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// one flock: 10 000 chicks, 22 800 kg of live weight sold at 230 a kilo
const KG = 22800; const PRICE = 230;
const CHICKS = 900000; const OTHER = 600000; const FEED_PRICE = 75;
const CASES = [{ fcr: 1.8 }, { fcr: 2.0 }];
const CY = (v) => 420 - v * 0.95;

export function coutkilo(t, rtl) {
  const c = ctx(rtl); const P = 'vk'; const css = []; const H = 686;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  let frame = rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + text(c, 96, 170, t.chartTitle, { size: 11, fill: C.fg, weight: 500 }) + poly(c, [[300, 420], [800, 420]], C.line2);
  // legend
  [[C.fg35, C.fg55, t.legChicks], [SOFT, C.accent, t.legFeed], [C.fill, C.fg55, t.legOther]].forEach(([fill, stroke, label], i) => { frame += rect(c, 96, 212 + i * 28, 14, 14, { stroke, fill }) + text(c, 120, 224 + i * 28, label, { size: 9.5, fill: C.fg70 }); });
  s += `<g style="animation:${show(css, P, 'pa', 3)}">${frame}</g>`;
  CASES.forEach((k, i) => {
    const feedKg = Math.round(KG * k.fcr); const feed = feedKg * FEED_PRICE; const total = CHICKS + feed + OTHER;
    const parts = [[CHICKS / KG, C.fg35, C.fg55, C.fg], [feed / KG, SOFT, C.accent, C.accent], [OTHER / KG, C.fill, C.fg55, C.fg]];
    const x = 350 + i * 230; const at = 6 + i * 13; const hot = i === 1;
    let v0 = 0;
    parts.forEach(([v, fill, stroke, col], j) => {
      s += `<g style="${growY(css, P, `s${i}x${j}`, at + j * 2.2, 2)}">` + rect(c, x, CY(v0 + v), 150, v * 0.95, { stroke, fill }) + '</g>';
      s += `<g style="animation:${show(css, P, `v${i}x${j}`, at + j * 2.2 + 1.8)}">` + num(c, x + 75, CY(v0 + v / 2) + 4, dec1(v, t.dec), { size: 11, bold: true, fill: col }) + '</g>';
      v0 += v;
    });
    s += `<g style="animation:${show(css, P, `t${i}`, at + 7.5)}">` + num(c, x + 75, 438, `${t.fcr} ${dec1(k.fcr, t.dec)}0`, { size: 10.5, bold: true, fill: hot ? C.accent : C.fg }) + num(c, x + 178, CY(v0) + 5, dec1(total / KG, t.dec), { size: 13, bold: true, fill: hot ? C.accent : C.fg }) + poly(c, [[x + 150, CY(v0)], [x + 158, CY(v0)]], hot ? C.accent : C.fg55) + '</g>';
    const margin = KG * PRICE - total;
    s += `<g style="${pop(css, P, `m${i}`, at + 9.5)}">` + rect(c, 850, 206 + i * 96, 250, 80, { stroke: hot ? C.accent : C.line2, fill: hot ? TINT : C.fill }) + text(c, 864, 228 + i * 96, t.cards[i], { size: 10, fill: hot ? C.accent : C.fg, weight: 500 }) + ltrSpans(c.X(864), 254 + i * 96, [[grp(margin, t.sep), hot ? C.accent : C.fg, true]], 17, rtl ? 'end' : 'start') + text(c, 864, 274 + i * 96, t.cardSub, { size: 9, fill: C.fg70 }) + '</g>';
  });
  // the selling price
  s += `<g style="animation:${show(css, P, 'pr', 33)}">` + poly(c, [[300, CY(PRICE)], [800, CY(PRICE)]], C.fg, 1.2, '5 4') + text(c, 304, CY(PRICE) - 7, t.price, { size: 9.5, fill: C.fg, weight: 500 }) + '</g>';
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bd', 38)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 42);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    mortalite: {
      title: 'Les morts de chaque jour, sur quarante-deux jours',
      alt: 'La mortalité quotidienne d’une bande de 10 000 poussins sur 42 jours : 500 morts au total, soit 5 %. Du jour 18 au jour 24, un incident emporte 190 sujets, avec un pic de 50 au jour 21. Le seuil d’alerte, deux fois la moyenne des sept jours précédents, est franchi au jour 19, avec 18 morts contre 7 en moyenne.',
      header: 'Exemple construit · une bande de 10 000 poussins, les morts notés chaque matin',
      chartTitle: 'Morts par jour', axis: 'jour de la bande',
      thrLabel: 'seuil : deux fois la moyenne des 7 jours précédents',
      alert: 'alerte, jour {d}',
      band: 'Un chiffre noté chaque matin suffit : le logiciel le compare aux sept jours précédents et prévient quand il double, avant que cela se voie dans le bâtiment.',
      tiles: [
        { big: '500 morts', l1: 'sur 10 000 poussins en 42 jours', l2: 'soit 5 % de la bande' },
        { big: '190 en 7 jours', l1: 'du jour 18 au jour 24', l2: '38 % de la mortalité de la bande', hot: true },
        { big: 'jour 19', l1: 'l’alerte part : 18 morts contre 7 en moyenne', l2: 'deux jours avant le pic' },
      ],
      line1: 'La saisie prend une minute, au téléphone, dans le bâtiment : morts du jour, aliment distribué, eau, température.',
      line2: 'L’alerte ne dit pas la cause : elle fait venir le vétérinaire deux jours plus tôt.',
      note: 'Exemple construit · mortalité fictive ; les seuils d’alerte se règlent avec votre vétérinaire.',
    },
    coutkilo: {
      title: 'Ce que coûte un kilo de poulet, selon l’indice',
      alt: 'Le coût d’un kilo de poids vif pour la même bande de 22 800 kg vendue 230 dinars le kilo. Avec un indice de consommation de 1,80 : 39,5 dinars de poussin, 135,0 d’aliment et 26,3 d’autres charges, soit 200,8 dinars, et 666 000 dinars de marge. Avec un indice de 2,00 : 150,0 dinars d’aliment, soit 215,8 dinars le kilo, et 324 000 dinars de marge.',
      header: 'Exemple construit · la même bande, 22 800 kg vendus, deux indices de consommation',
      chartTitle: 'Coût du kilo vif, en dinars', fcr: 'indice', dec: ',', sep: ' ',
      legChicks: 'poussin', legFeed: 'aliment', legOther: 'autres charges',
      price: 'prix de vente : 230 DA le kilo',
      cards: ['Marge de la bande, indice 1,80', 'Marge de la bande, indice 2,00'], cardSub: 'dinars, sur 22 800 kg vendus',
      band: 'Deux dixièmes de point d’indice de consommation valent la moitié de la marge de la bande : c’est un chiffre à connaître chaque semaine, pas à la vente.',
      tiles: [
        { big: '1,80', l1: 'kilo d’aliment par kilo de poulet', l2: 'coût du kilo vif : 200,8 DA' },
        { big: '2,00', l1: 'la même bande, deux dixièmes de plus', l2: 'coût du kilo vif : 215,8 DA', hot: true },
        { big: '342 000 DA', l1: 'de marge en moins sur la bande', l2: '4 560 kg d’aliment de plus' },
      ],
      line1: 'Indice de consommation : l’aliment distribué divisé par le poids vif produit. Il se calcule chaque semaine, à la pesée.',
      line2: 'Le logiciel le rapproche du prix de l’aliment et du poussin, et donne le coût du kilo avant la vente.',
      note: 'Exemple construit · bande de 10 000 poussins ; prix et poids fictifs.',
    },
  },
  en: {
    mortalite: {
      title: 'Each day’s deaths, over forty-two days',
      alt: 'Daily mortality of a flock of 10,000 chicks over 42 days: 500 deaths in all, that is 5%. From day 18 to day 24, an incident takes 190 birds, with a peak of 50 on day 21. The alert threshold, twice the average of the seven previous days, is crossed on day 19, with 18 deaths against an average of 7.',
      header: 'Constructed example · a flock of 10,000 chicks, deaths noted every morning',
      chartTitle: 'Deaths per day', axis: 'day of the flock',
      thrLabel: 'threshold: twice the average of the 7 previous days',
      alert: 'alert, day {d}',
      band: 'One figure noted every morning is enough: the software compares it with the seven previous days and warns when it doubles, before it shows in the house.',
      tiles: [
        { big: '500 deaths', l1: 'out of 10,000 chicks in 42 days', l2: 'that is 5% of the flock' },
        { big: '190 in 7 days', l1: 'from day 18 to day 24', l2: '38% of the flock’s mortality', hot: true },
        { big: 'day 19', l1: 'the alert goes out: 18 deaths against an average of 7', l2: 'two days before the peak' },
      ],
      line1: 'Entry takes one minute, on the phone, in the house: the day’s deaths, feed given, water, temperature.',
      line2: 'The alert does not say the cause: it brings the vet in two days earlier.',
      note: 'Constructed example · fictitious mortality; alert thresholds are set with your vet.',
    },
    coutkilo: {
      title: 'What a kilo of chicken costs, depending on the ratio',
      alt: 'The cost of one kilo of live weight for the same flock of 22,800 kg sold at 230 dinars a kilo. With a feed conversion ratio of 1.80: 39.5 dinars of chick, 135.0 of feed and 26.3 of other costs, that is 200.8 dinars, and a margin of 666,000 dinars. With a ratio of 2.00: 150.0 dinars of feed, that is 215.8 dinars a kilo, and a margin of 324,000 dinars.',
      header: 'Constructed example · the same flock, 22,800 kg sold, two feed conversion ratios',
      chartTitle: 'Cost of a kilo of live weight, in dinars', fcr: 'ratio', dec: '.', sep: ',',
      legChicks: 'chick', legFeed: 'feed', legOther: 'other costs',
      price: 'selling price: DA 230 a kilo',
      cards: ['Flock margin, ratio 1.80', 'Flock margin, ratio 2.00'], cardSub: 'dinars, on 22,800 kg sold',
      band: 'Two tenths of a point of feed conversion ratio are worth half the flock’s margin: a figure to know every week, not at the sale.',
      tiles: [
        { big: '1.80', l1: 'kilo of feed per kilo of chicken', l2: 'cost of a live kilo: DA 200.8' },
        { big: '2.00', l1: 'the same flock, two tenths more', l2: 'cost of a live kilo: DA 215.8', hot: true },
        { big: 'DA 342,000', l1: 'less margin on the flock', l2: '4,560 kg more feed' },
      ],
      line1: 'Feed conversion ratio: the feed given divided by the live weight produced. It is calculated every week, at weighing.',
      line2: 'The software sets it against the price of feed and of the chick, and gives the cost per kilo before the sale.',
      note: 'Constructed example · flock of 10,000 chicks; fictitious prices and weights.',
    },
  },
  ar: {
    mortalite: {
      title: 'نفوق كل يوم، على اثنين وأربعين يوماً',
      alt: 'النفوق اليومي لفوج من 10000 كتكوت على 42 يوماً: 500 نافق في المجموع، أي 5 بالمئة. من اليوم 18 إلى اليوم 24، حادث يأخذ 190 طائراً، بقمة من 50 في اليوم 21. وعتبة التنبيه، ضعف متوسط الأيام السبعة السابقة، تُتجاوز في اليوم 19، بـ18 نافقاً مقابل 7 في المتوسط.',
      header: 'مثال مركَّب · فوج من 10000 كتكوت، والنافق يُسجَّل كل صباح',
      chartTitle: 'النافق في اليوم', axis: 'يوم الفوج',
      thrLabel: 'العتبة: ضعف متوسط الأيام السبعة السابقة',
      alert: 'تنبيه، اليوم {d}',
      band: 'رقم يُسجَّل كل صباح يكفي: البرنامج يقارنه بالأيام السبعة السابقة وينبّه حين يتضاعف، قبل أن يُرى ذلك في العنبر.',
      tiles: [
        { big: '500 نافق', l1: 'من 10000 كتكوت في 42 يوماً', l2: 'أي ⁦5 %⁩ من الفوج' },
        { big: '190 في 7 أيام', l1: 'من اليوم 18 إلى اليوم 24', l2: '⁦38 %⁩ من نفوق الفوج', hot: true },
        { big: 'اليوم 19', l1: 'التنبيه ينطلق: 18 نافقاً مقابل 7 في المتوسط', l2: 'يومان قبل القمة' },
      ],
      line1: 'الإدخال يأخذ دقيقة، على الهاتف، في العنبر: نافق اليوم، العلف الموزَّع، الماء، ودرجة الحرارة.',
      line2: 'التنبيه لا يقول السبب: يجعل البيطري يأتي يومين أبكر.',
      note: 'مثال مركَّب · نفوق خيالي؛ وعتبات التنبيه تُضبط مع بيطريكم.',
    },
    coutkilo: {
      title: 'كم يكلّف كيلوغرام الدجاج، حسب معامل التحويل',
      alt: 'كلفة كيلوغرام من الوزن الحي للفوج نفسه من 22800 كلغ بيع بـ230 ديناراً للكيلوغرام. بمعامل تحويل 1,80: 39,5 ديناراً للكتكوت، 135,0 للعلف، و26,3 لباقي التكاليف، أي 200,8 ديناراً، وهامش من 666000 دينار. وبمعامل 2,00: 150,0 ديناراً للعلف، أي 215,8 ديناراً للكيلوغرام، وهامش من 324000 دينار.',
      header: 'مثال مركَّب · الفوج نفسه، 22800 كلغ مباعة، ومعاملا تحويل',
      chartTitle: 'كلفة الكيلوغرام الحي، بالدينار', fcr: '', dec: ',', sep: ' ',
      legChicks: 'الكتكوت', legFeed: 'العلف', legOther: 'باقي التكاليف',
      price: 'سعر البيع: ⁦230⁩ دج للكيلوغرام',
      cards: ['هامش الفوج، بمعامل ⁦1,80⁩', 'هامش الفوج، بمعامل ⁦2,00⁩'], cardSub: 'دينار، على 22800 كلغ مباعة',
      band: 'عُشران من معامل التحويل يساويان نصف هامش الفوج: وهو رقم يُعرف كل أسبوع، لا عند البيع.',
      tiles: [
        { big: '⁦1,80⁩', l1: 'كيلوغرام علف لكل كيلوغرام دجاج', l2: 'كلفة الكيلوغرام الحي: ⁦200,8⁩ دج' },
        { big: '⁦2,00⁩', l1: 'الفوج نفسه، بعُشرين أكثر', l2: 'كلفة الكيلوغرام الحي: ⁦215,8⁩ دج', hot: true },
        { big: '⁦342 000⁩ دج', l1: 'هامش أقل على الفوج', l2: '⁦4 560⁩ كلغ علف أكثر' },
      ],
      line1: 'معامل التحويل: العلف الموزَّع مقسوماً على الوزن الحي المنتَج. ويُحسب كل أسبوع، عند الوزن.',
      line2: 'البرنامج يقرنه بسعر العلف والكتكوت، ويعطي كلفة الكيلوغرام قبل البيع.',
      note: 'مثال مركَّب · فوج من 10000 كتكوت؛ وأسعار وأوزان خيالية.',
    },
  },
};
