// Bespoke animated figures for the 2027 "système de gestion de file d'attente" page.
//  journee():  arrivals per hour over a day (18, 28, 38, 34, 16, 12, 26, 20 = 192) against
//              what three counters can serve (30 an hour at 6 minutes each). The queue forms
//              in the two hours above capacity (8 then 12 people waiting) and a fourth counter
//              from 9 to 12 (40 an hour) removes it in this simplified calculation.
//  guichets(): the same hour (28 arrivals, 6 minutes of service) with 3, 4 or 5 counters,
//              computed with the Erlang C formula: 26 min, 2 min, 31 s of average wait;
//              12, 1 and 0 people waiting on average.
// Numbers are drawn in their own text elements, direction="ltr".
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
const num = (c, x, y, str, o = {}) => ltrSpans(c.X(x), y, [[str, o.fill || C.fg, o.bold]], o.size || 10.5, 'middle');
const poly = (c, pts, color, sw, dash) => `<polyline points="${pts.map(([x, y]) => `${c.X(x)},${y}`).join(' ')}" fill="none" stroke="${color}" stroke-width="${sw || 1}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const dot = (c, x, y, r, fill) => `<circle cx="${c.X(x)}" cy="${y}" r="${r}" fill="${fill}"/>`;

// arrivals per hour, 8:00 to 16:00; one counter serves 10 people an hour (6 minutes each)
const ARR = [18, 28, 38, 34, 16, 12, 26, 20];
const CAP3 = 30;
const CAP4 = 40;
const QUEUE = (() => { let q = 0; return ARR.map((a) => { q = Math.max(0, q + a - CAP3); return q; }); })();
const X0 = 200; const STEP = 104; const BW = 60; const BASE = 384; const K = 3.4;

export function journee(t, rtl) {
  const c = ctx(rtl); const P = 'qj'; const css = []; const H = 686;
  const y30 = BASE - CAP3 * K; const y40 = BASE - CAP4 * K;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  let frame = rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + text(c, 96, 172, t.chartTitle, { size: 11, fill: C.fg, weight: 500 }) + poly(c, [[190, BASE], [996, BASE]], C.line2);
  ARR.forEach((_, i) => { frame += num(c, X0 + i * STEP + BW / 2, BASE + 16, t.hours[i], { size: 9, fill: C.fg55 }); });
  frame += text(c, 96, BASE + 36, t.q1, { size: 8.5, fill: C.fg55 }) + text(c, 96, BASE + 48, t.q2, { size: 8.5, fill: C.fg55 });
  s += `<g style="animation:${show(css, P, 'pa', 3)}">${frame}</g>`;
  ARR.forEach((a, i) => {
    const h = a * K; const over = a > CAP3; const x = X0 + i * STEP;
    s += `<g style="${growY(css, P, `b${i}`, 5 + i * 1.6, 2)}">` + rect(c, x, BASE - h, BW, h, { stroke: over ? C.accent : C.fg55, fill: over ? C.accent : C.fg35 }) + '</g>';
    // keep the value clear of the dashed capacity line
    const vy = Math.abs(BASE - h + 11 - y30) < 10 ? y30 + 17 : BASE - h + 15;
    s += `<g style="animation:${show(css, P, `v${i}`, 7.5 + i * 1.6)}">` + num(c, x + BW / 2, vy, String(a), { size: 10.5, bold: true, fill: over ? DARK : C.fg }) + '</g>';
  });
  // what three counters can serve in an hour
  s += `<g style="animation:${show(css, P, 'c3', 22)}">` + poly(c, [[190, y30], [996, y30]], C.fg, 1, '5 4') + text(c, 1004, y30 - 3, t.cap3a, { size: 9, fill: C.fg, weight: 500 }) + text(c, 1004, y30 + 10, t.cap3b, { size: 8.5, fill: C.fg55 }) + '</g>';
  // the queue at the end of each hour, with three counters all day
  QUEUE.forEach((q, i) => {
    s += `<g style="animation:${show(css, P, `q${i}`, 25 + i * 1.2)}">` + num(c, X0 + i * STEP + BW / 2, BASE + 44, String(q), { size: 11.5, bold: q > 0, fill: q > 0 ? C.accent : C.fg55 }) + '</g>';
  });
  // a fourth counter from 9 to 12
  const xa = X0 + STEP - 10; const xb = X0 + 3 * STEP + BW + 10;
  s += `<g style="animation:${show(css, P, 'c4', 36)}">` + poly(c, [[xa, y30], [xa, y40], [xb, y40], [xb, y30]], C.accent, 1.5) + text(c, xa, y40 - 10, t.cap4, { size: 9.5, fill: C.accent, weight: 500 }) + '</g>';
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bd', 40)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 44);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// 28 arrivals an hour, 6 minutes of service: counters open, people waiting on average (rounded)
const LANES = [{ n: 3, wait: 12 }, { n: 4, wait: 1 }, { n: 5, wait: 0 }];

export function guichets(t, rtl) {
  const c = ctx(rtl); const P = 'qg'; const css = []; const H = 686;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + text(c, 96, 172, t.chartTitle, { size: 11, fill: C.fg, weight: 500 }) + '</g>';
  LANES.forEach((ln, i) => {
    const y = 190 + i * 86; const at = 6 + i * 11; const hot = i === 0; const L = t.lanes[i];
    s += `<g style="animation:${show(css, P, `l${i}`, at)}">` + rect(c, 96, y, 1008, 74, { stroke: hot ? C.accent : C.line2, fill: hot ? TINT : C.fill }) + text(c, 112, y + 30, L.label, { size: 12.5, fill: C.fg, weight: 500 }) + text(c, 112, y + 50, L.occ, { size: 9.5, fill: C.fg70 }) + '</g>';
    for (let k = 0; k < ln.n; k++) s += `<g style="${pop(css, P, `c${i}${k}`, at + 0.6 + k * 0.4)}">` + rect(c, 262 + k * 30, y + 25, 24, 24, { stroke: C.fg, fill: C.fg }) + '</g>';
    for (let k = 0; k < ln.wait; k++) s += `<g style="${pop(css, P, `w${i}x${k}`, at + 3 + k * 0.45)}">` + dot(c, 452 + k * 22, y + 37, 7, hot ? C.accent : C.fg) + '</g>';
    s += `<g style="animation:${show(css, P, `n${i}`, at + 3 + Math.max(1, ln.wait) * 0.45)}">` + text(c, 452 + ln.wait * 22 + (ln.wait ? 8 : 0), y + 41, L.waiting, { size: 9.5, fill: hot ? C.accent : C.fg70 }) + '</g>';
    s += `<g style="${pop(css, P, `r${i}`, at + 9)}">` + text(c, 900, y + 34, L.big, { size: 19, font: 'mono', fill: hot ? C.accent : C.fg, weight: 500 }) + text(c, 900, y + 54, L.share, { size: 9.5, fill: C.fg70 }) + '</g>';
  });
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bd', 42)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 46);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    journee: {
      title: 'Quand la file se forme, heure par heure',
      alt: 'Les arrivées d’une journée, heure par heure : 18, 28, 38, 34, 16, 12, 26 et 20 personnes, soit 192. Trois guichets servent 30 personnes par heure. De 10 h à 12 h, les arrivées dépassent cette capacité : 8 puis 12 personnes attendent. Un quatrième guichet ouvert de 9 h à 12 h porte la capacité à 40 par heure et la file ne se forme plus dans ce calcul.',
      header: 'Exemple construit · une agence, une journée, 6 minutes par personne, trois guichets ouverts',
      chartTitle: 'Arrivées par heure, et ce que les guichets peuvent servir',
      hours: ['8 h', '9 h', '10 h', '11 h', '12 h', '13 h', '14 h', '15 h'],
      q1: 'en attente', q2: 'en fin d’heure',
      cap3a: '3 guichets', cap3b: '30 par heure',
      cap4: 'quatrième guichet, de 9 h à 12 h : 40 par heure',
      band: 'La file ne vient pas de la journée entière : elle vient de deux heures où les arrivées dépassent ce que trois guichets peuvent servir.',
      tiles: [
        { big: '12 personnes', l1: 'en attente à midi, avec trois guichets', l2: 'la dernière arrivée attend 24 minutes' },
        { big: '3 heures', l1: 'de quatrième guichet, de 9 h à 12 h', l2: 'la capacité passe de 30 à 40 par heure', hot: true },
        { big: '192 passages', l1: 'dans la journée, 6 minutes chacun', l2: 'le total ne dit rien, l’heure dit tout' },
      ],
      line1: 'Calcul simplifié : arrivées régulières dans l’heure, 6 minutes par personne, soit 10 personnes par guichet et par heure.',
      line2: 'Le planning des guichets se cale sur les arrivées mesurées, heure par heure et jour par jour : c’est le premier usage des tickets.',
      note: 'Exemple construit · arrivées fictives ; le hasard des arrivées ajoute de l’attente, voir la figure suivante.',
    },
    guichets: {
      title: 'La même heure, avec trois, quatre ou cinq guichets',
      alt: 'Pour 28 arrivées par heure et 6 minutes de service, la formule d’Erlang C donne : avec trois guichets, occupés à 93 %, 26 minutes d’attente moyenne et 12 personnes en attente ; avec quatre guichets, occupés à 70 %, 2 minutes et 1 personne ; avec cinq guichets, occupés à 56 %, 31 secondes et le plus souvent personne.',
      header: 'Exemple construit · 28 arrivées par heure, au hasard ; 6 minutes de service en moyenne',
      chartTitle: 'Guichets ouverts, personnes en attente, attente moyenne',
      lanes: [
        { label: '3 guichets', occ: 'occupés à 93 %', waiting: '12 personnes en attente, en moyenne', big: '26 min', share: '88 % des personnes attendent' },
        { label: '4 guichets', occ: 'occupés à 70 %', waiting: '1 personne en attente, en moyenne', big: '2 min', share: '43 % des personnes attendent' },
        { label: '5 guichets', occ: 'occupés à 56 %', waiting: 'le plus souvent, personne en attente', big: '31 s', share: '19 % des personnes attendent' },
      ],
      band: 'Le quatrième guichet ne réduit pas l’attente d’un quart : il la divise par douze. Près de la saturation, chaque guichet compte bien plus que sa part.',
      tiles: [
        { big: '93 %', l1: 'd’occupation avec trois guichets', l2: '26 minutes d’attente moyenne', hot: true },
        { big: '70 %', l1: 'd’occupation avec quatre guichets', l2: '2 minutes d’attente moyenne' },
        { big: '56 %', l1: 'd’occupation avec cinq guichets', l2: '31 secondes d’attente moyenne' },
      ],
      line1: 'Calcul par la formule d’Erlang C : arrivées au hasard, 28 par heure ; 6 minutes de service en moyenne ; personne ne quitte la file.',
      line2: 'Un guichet « occupé à 93 % » paraît bien employé ; c’est précisément le régime où la salle d’attente déborde.',
      note: 'Exemple construit · régime établi, si ce rythme durait ; un ordre de grandeur, pas une promesse.',
    },
  },
  en: {
    journee: {
      title: 'When the queue forms, hour by hour',
      alt: 'A day’s arrivals, hour by hour: 18, 28, 38, 34, 16, 12, 26 and 20 people, 192 in all. Three counters serve 30 people an hour. From 10 am to 12 pm, arrivals exceed that capacity: 8 then 12 people are waiting. A fourth counter open from 9 am to 12 pm raises capacity to 40 an hour and the queue no longer forms in this calculation.',
      header: 'Constructed example · a branch, one day, 6 minutes per person, three counters open',
      chartTitle: 'Arrivals per hour, and what the counters can serve',
      hours: ['8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm'],
      q1: 'waiting', q2: 'at the end of the hour',
      cap3a: '3 counters', cap3b: '30 an hour',
      cap4: 'fourth counter, 9 am to 12 pm: 40 an hour',
      band: 'The queue does not come from the whole day: it comes from two hours in which arrivals exceed what three counters can serve.',
      tiles: [
        { big: '12 people', l1: 'waiting at noon, with three counters', l2: 'the last to arrive waits 24 minutes' },
        { big: '3 hours', l1: 'of a fourth counter, 9 am to 12 pm', l2: 'capacity goes from 30 to 40 an hour', hot: true },
        { big: '192 visits', l1: 'in the day, 6 minutes each', l2: 'the total says nothing, the hour says it all' },
      ],
      line1: 'Simplified calculation: regular arrivals within the hour, 6 minutes per person, that is 10 people per counter per hour.',
      line2: 'The counter roster follows measured arrivals, hour by hour and day by day: that is the first use of the tickets.',
      note: 'Constructed example · fictitious arrivals; random arrivals add waiting, see the next figure.',
    },
    guichets: {
      title: 'The same hour, with three, four or five counters',
      alt: 'For 28 arrivals an hour and 6 minutes of service, the Erlang C formula gives: with three counters, 93% busy, an average wait of 26 minutes and 12 people waiting; with four counters, 70% busy, 2 minutes and 1 person; with five counters, 56% busy, 31 seconds and most often nobody.',
      header: 'Constructed example · 28 arrivals an hour, at random; 6 minutes of service on average',
      chartTitle: 'Counters open, people waiting, average wait',
      lanes: [
        { label: '3 counters', occ: '93% busy', waiting: '12 people waiting, on average', big: '26 min', share: '88% of people wait' },
        { label: '4 counters', occ: '70% busy', waiting: '1 person waiting, on average', big: '2 min', share: '43% of people wait' },
        { label: '5 counters', occ: '56% busy', waiting: 'most often, nobody waiting', big: '31 s', share: '19% of people wait' },
      ],
      band: 'The fourth counter does not cut the wait by a quarter: it divides it by twelve. Close to saturation, each counter counts for far more than its share.',
      tiles: [
        { big: '93%', l1: 'busy with three counters', l2: '26 minutes of average wait', hot: true },
        { big: '70%', l1: 'busy with four counters', l2: '2 minutes of average wait' },
        { big: '56%', l1: 'busy with five counters', l2: '31 seconds of average wait' },
      ],
      line1: 'Calculated with the Erlang C formula: random arrivals, 28 an hour; 6 minutes of service on average; nobody leaves the queue.',
      line2: 'A counter that is “93% busy” looks well used; it is exactly the regime in which the waiting room overflows.',
      note: 'Constructed example · steady state, if that pace lasted; an order of magnitude, not a promise.',
    },
  },
  ar: {
    journee: {
      title: 'متى يتكوّن الطابور، ساعة بساعة',
      alt: 'وصول يوم كامل، ساعة بساعة: 18، 28، 38، 34، 16، 12، 26 و20 شخصاً، أي 192. ثلاثة شبابيك تخدم 30 شخصاً في الساعة. من العاشرة إلى منتصف النهار، يتجاوز الوصول هذه القدرة: 8 ثم 12 شخصاً ينتظرون. وشبّاك رابع يُفتح من التاسعة إلى منتصف النهار يرفع القدرة إلى 40 في الساعة فلا يتكوّن الطابور في هذا الحساب.',
      header: 'مثال مركَّب · وكالة، يوم واحد، 6 دقائق لكل شخص، وثلاثة شبابيك مفتوحة',
      chartTitle: 'الوصول في الساعة، وما تستطيع الشبابيك خدمته',
      hours: ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],
      q1: 'في الانتظار', q2: 'عند نهاية الساعة',
      cap3a: '3 شبابيك', cap3b: '30 في الساعة',
      cap4: 'شبّاك رابع، من 9 إلى 12: ⁦40⁩ في الساعة',
      band: 'الطابور لا يأتي من اليوم كله: يأتي من ساعتين يتجاوز فيهما الوصول ما تستطيع ثلاثة شبابيك خدمته.',
      tiles: [
        { big: '12 شخصاً', l1: 'في الانتظار عند منتصف النهار، بثلاثة شبابيك', l2: 'وآخر الواصلين ينتظر 24 دقيقة' },
        { big: '3 ساعات', l1: 'من شبّاك رابع، من 9 إلى 12', l2: 'القدرة تنتقل من 30 إلى 40 في الساعة', hot: true },
        { big: '192 مروراً', l1: 'في اليوم، 6 دقائق لكل واحد', l2: 'المجموع لا يقول شيئاً، والساعة تقول كل شيء' },
      ],
      line1: 'حساب مبسَّط: وصول منتظم داخل الساعة، 6 دقائق لكل شخص، أي 10 أشخاص لكل شبّاك في الساعة.',
      line2: 'جدول الشبابيك يُضبط على الوصول المقاس، ساعة بساعة ويوماً بيوم: وهذا أول استعمال للتذاكر.',
      note: 'مثال مركَّب · وصول خيالي؛ وعشوائية الوصول تضيف انتظاراً، انظر الشكل التالي.',
    },
    guichets: {
      title: 'الساعة نفسها، بثلاثة أو أربعة أو خمسة شبابيك',
      alt: 'لـ28 وصولاً في الساعة و6 دقائق من الخدمة، تعطي صيغة إرلانغ C: بثلاثة شبابيك، مشغولة بنسبة 93 بالمئة، 26 دقيقة انتظار في المتوسط و12 شخصاً في الانتظار؛ بأربعة شبابيك، مشغولة بنسبة 70 بالمئة، دقيقتين وشخصاً واحداً؛ وبخمسة شبابيك، مشغولة بنسبة 56 بالمئة، 31 ثانية ولا أحد في الغالب.',
      header: 'مثال مركَّب · 28 وصولاً في الساعة، عشوائياً؛ و6 دقائق من الخدمة في المتوسط',
      chartTitle: 'الشبابيك المفتوحة، الأشخاص في الانتظار، ومتوسط الانتظار',
      lanes: [
        { label: '3 شبابيك', occ: 'مشغولة بنسبة ⁦93 %⁩', waiting: '12 شخصاً في الانتظار، في المتوسط', big: '26 دقيقة', share: '⁦88 %⁩ من الأشخاص ينتظرون' },
        { label: '4 شبابيك', occ: 'مشغولة بنسبة ⁦70 %⁩', waiting: 'شخص واحد في الانتظار، في المتوسط', big: 'دقيقتان', share: '⁦43 %⁩ من الأشخاص ينتظرون' },
        { label: '5 شبابيك', occ: 'مشغولة بنسبة ⁦56 %⁩', waiting: 'في الغالب، لا أحد في الانتظار', big: '31 ثانية', share: '⁦19 %⁩ من الأشخاص ينتظرون' },
      ],
      band: 'الشبّاك الرابع لا ينقص الانتظار بالربع: يقسمه على اثني عشر. وقرب التشبّع، كل شبّاك يساوي أكثر بكثير من حصته.',
      tiles: [
        { big: '⁦93 %⁩', l1: 'نسبة الانشغال بثلاثة شبابيك', l2: '26 دقيقة انتظار في المتوسط', hot: true },
        { big: '⁦70 %⁩', l1: 'نسبة الانشغال بأربعة شبابيك', l2: 'دقيقتان انتظار في المتوسط' },
        { big: '⁦56 %⁩', l1: 'نسبة الانشغال بخمسة شبابيك', l2: '31 ثانية انتظار في المتوسط' },
      ],
      line1: 'حساب بصيغة إرلانغ C: وصول عشوائي، 28 في الساعة؛ 6 دقائق من الخدمة في المتوسط؛ ولا أحد يغادر الطابور.',
      line2: 'شبّاك «مشغول بنسبة ⁦93 %⁩» يبدو حسن الاستعمال؛ وهو بالضبط النظام الذي تفيض فيه قاعة الانتظار.',
      note: 'مثال مركَّب · نظام مستقر، لو دام هذا الإيقاع؛ ترتيب مقدار، لا وعد.',
    },
  },
};
