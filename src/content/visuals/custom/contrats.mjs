// Bespoke animated figures for the 2027 "logiciel de gestion des contrats" page.
//  echeancier(): the 148 dates carried by 300 contracts over the next twelve months, one square
//                per date, stacked month by month and split into four kinds (last day of notice,
//                end of term, price review, end of warranty). The first three months hold 23
//                notice dates.
//  preavis():    one maintenance contract of one year with a three-month notice: nine months in
//                which a decision is still possible, the last day of notice, then two futures:
//                answered in time (renewed, renegotiated or terminated, by choice) or not answered
//                (renewed for twelve months, 1 800 000 dinars committed with no decision).
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, open, heading, esc } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function pop(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scale(0)}${(at + 1.2).toFixed(1)}%,100%{transform:scale(1)}}`); return `transform-box:fill-box;transform-origin:center;animation:${P}-${id} ${LOOP}s linear infinite`; }
function growX(css, P, id, at, dur, rtl) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'} center;animation:${P}-${id} ${LOOP}s linear infinite`; }
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
const dot = (c, x, y, r, fill, stroke, sw) => `<circle cx="${c.X(x)}" cy="${y}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${sw || 1}"/>`;

// dates per month: [last day of notice, end of term, price review, end of warranty]
const DATES = [[9, 3, 2, 1], [6, 4, 1, 2], [8, 2, 3, 0], [3, 6, 2, 1], [4, 5, 1, 1], [2, 7, 2, 0], [5, 3, 4, 2], [3, 4, 1, 1], [6, 2, 2, 0], [4, 5, 3, 1], [2, 3, 1, 2], [7, 9, 2, 1]];
const KIND = [
  { fill: C.accent, stroke: C.accent },
  { fill: C.fg55, stroke: C.fg55 },
  { fill: 'none', stroke: C.accent },
  { fill: 'none', stroke: C.fg55, dash: '2 2' },
];
const CX0 = 150; const CPITCH = 72; const SQ = 9; const SP = 11; const BASE = 372;
const square = (c, x, y, k) => `<rect x="${c.RX(x, SQ)}" y="${y}" width="${SQ}" height="${SQ}" fill="${KIND[k].fill}" stroke="${KIND[k].stroke}"${KIND[k].dash ? ` stroke-dasharray="${KIND[k].dash}"` : ''}/>`;

export function echeancier(t, rtl) {
  const c = ctx(rtl); const P = 'ky'; const css = []; const H = 686;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  let frame = rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + text(c, 96, 170, t.chartTitle, { size: 11, fill: C.fg, weight: 500 }) + poly(c, [[CX0 - 14, BASE + 2], [CX0 + 11 * CPITCH + 2 * SP + 12, BASE + 2]], C.line2);
  for (let m = 0; m < 12; m += 1) frame += num(c, CX0 + m * CPITCH + SP - 1, BASE + 20, String(m + 1), { size: 9, fill: C.fg55 });
  frame += text(c, CX0 - 14, 414, t.axis, { size: 9, fill: C.fg55 });
  // legend, above the right-hand columns
  [[620, 196], [860, 196], [620, 216], [860, 216]].forEach(([x, y], k) => { frame += square(c, x, y, k) + text(c, x + 16, y + 9, t.kinds[k], { size: 9.5, fill: C.fg70 }); });
  s += `<g style="animation:${show(css, P, 'pa', 3)}">${frame}</g>`;
  // one square per date, two squares wide, filled from the baseline up
  DATES.forEach((row, m) => {
    let n = 0; let g = '';
    row.forEach((count, k) => { for (let i = 0; i < count; i += 1) { g += square(c, CX0 + m * CPITCH + (n % 2) * SP, BASE - (Math.floor(n / 2) + 1) * SP, k); n += 1; } });
    s += `<g style="animation:${show(css, P, `m${m}`, 6 + m * 3)}">${g}</g>`;
  });
  // the next ninety days
  const x2 = CX0 + 2 * CPITCH + 2 * SP + 4;
  s += `<g style="animation:${show(css, P, 'br', 44)}">` + poly(c, [[CX0 - 8, 258], [CX0 - 8, 250], [x2, 250], [x2, 258]], C.accent, 1.5) + text(c, CX0 - 8, 240, t.window, { size: 10.5, fill: C.accent, weight: 500 }) + '</g>';
  s += `<g style="animation:${show(css, P, 'ft', 48)}">` + text(c, 620, 414, t.foot, { size: 10, fill: C.fg70 }) + '</g>';
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bd', 52)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 56);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// one contract: twelve months of term, three months of notice, then the next term
const MX = (m) => 130 + m * 56;
const TERM = 12; const NOTICE = 3;

export function preavis(t, rtl) {
  const c = ctx(rtl); const P = 'nq'; const css = []; const H = 686;
  const dl = TERM - NOTICE;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + text(c, 96, 170, t.chartTitle, { size: 11, fill: C.fg, weight: 500 }) + '</g>';
  // the term: nine months to decide, then three months of notice
  s += `<g style="${growX(css, P, 'b1', 6, 10, rtl)}">` + rect(c, MX(0), 280, MX(dl) - MX(0), 14, { stroke: C.fg55, fill: C.fg35 }) + '</g>';
  s += `<g style="animation:${show(css, P, 'z1', 12)}">` + text(c, MX(0), 270, t.start, { size: 9, fill: C.fg55 }) + text(c, (MX(0) + MX(dl)) / 2, 314, t.zone1, { size: 10, fill: C.fg70, anchor: 'middle' }) + '</g>';
  s += `<g style="${pop(css, P, 'al', 17)}">` + dot(c, MX(dl - 3), 287, 6, C.accent, DARK, 2) + '</g>';
  s += `<g style="animation:${show(css, P, 'at', 19)}">` + text(c, MX(dl - 3), 268, t.alert, { size: 9.5, fill: C.accent, anchor: 'middle' }) + '</g>';
  s += `<g style="${growX(css, P, 'b2', 22, 5, rtl)}">` + rect(c, MX(dl), 280, MX(TERM) - MX(dl), 14, { stroke: C.accent, fill: SOFT }) + '</g>';
  s += `<g style="animation:${show(css, P, 'z2', 27)}">` + text(c, (MX(dl) + MX(TERM)) / 2, 314, t.zone2, { size: 10, fill: C.accent, anchor: 'middle' }) + '</g>';
  s += `<g style="animation:${show(css, P, 'dl', 30)}">` + poly(c, [[MX(dl), 200], [MX(dl), 372]], C.accent, 1.5, '5 4') + text(c, MX(dl) - 8, 206, t.deadline, { size: 10.5, fill: C.accent, weight: 500, anchor: 'end' }) + '</g>';
  s += `<g style="animation:${show(css, P, 'en', 33)}">` + poly(c, [[MX(TERM), 222], [MX(TERM), 352]], C.fg55, 1, '3 4') + text(c, MX(TERM) + 8, 206, t.end, { size: 9.5, fill: C.fg70 }) + '</g>';
  // answered in time
  s += `<g style="animation:${show(css, P, 'up', 37)}">` + poly(c, [[MX(dl), 280], [MX(dl), 243], [MX(TERM), 243]], C.fg70, 1.5) + rect(c, MX(TERM), 236, MX(15) - MX(TERM), 14, { stroke: C.fg70, fill: 'none', dash: '4 3' }) + text(c, 1100, 224, t.yes, { size: 10, fill: C.fg, weight: 500, anchor: 'end' }) + text(c, (MX(dl) + MX(TERM)) / 2, 237, t.answered, { size: 9, fill: C.fg70, anchor: 'middle' }) + '</g>';
  // not answered
  s += `<g style="animation:${show(css, P, 'dn', 44)}">` + poly(c, [[MX(dl), 294], [MX(dl), 337], [MX(TERM), 337]], C.accent, 1.5) + text(c, (MX(dl) + MX(TERM)) / 2, 352, t.silent, { size: 9, fill: C.accent, anchor: 'middle' }) + '</g>';
  s += `<g style="${growX(css, P, 'b3', 46, 5, rtl)}">` + rect(c, MX(TERM), 330, MX(15) - MX(TERM), 14, { stroke: C.accent, fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'no', 51)}">` + text(c, 1100, 364, t.no, { size: 10, fill: C.accent, weight: 500, anchor: 'end' }) + text(c, 1100, 382, t.amount, { size: 10, fill: C.accent, anchor: 'end' }) + '</g>';
  s += `<g style="animation:${show(css, P, 'fc', 54)}">` + text(c, MX(0), 404, t.fact1, { size: 9.5, fill: C.fg55 }) + text(c, MX(0), 422, t.fact2, { size: 9.5, fill: C.fg55 }) + '</g>';
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bd', 58)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 62);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    echeancier: {
      title: '300 contrats, 148 dates en douze mois',
      alt: 'Les 148 dates que portent 300 contrats sur les douze mois à venir, une case par date, mois par mois, en quatre sortes : 59 derniers jours de préavis, 53 fins de terme, 24 révisions de prix, 12 fins de garantie. Les trois premiers mois contiennent 23 préavis : 9, puis 6, puis 8.',
      header: 'Exemple construit · 300 contrats, les douze mois à venir',
      chartTitle: 'Une case par date, mois par mois',
      axis: 'mois à venir',
      kinds: ['dernier jour du préavis', 'fin de terme', 'révision de prix', 'fin de garantie'],
      window: '90 jours : 23 préavis à décider',
      foot: '59 préavis, 53 fins de terme, 24 révisions de prix, 12 fins de garantie.',
      band: 'La date qui compte n’est pas la fin du contrat : c’est le dernier jour où l’on peut encore dire non.',
      tiles: [
        { big: '148 dates en douze mois', l1: 'préavis, fins de terme, révisions, garanties', l2: 'portées par 300 contrats' },
        { big: '23 préavis dans 90 jours', l1: '9 le premier mois, 6 le deuxième, 8 le troisième', l2: 'autant de décisions à prendre à temps', hot: true },
        { big: '132 contrats à reconduction', l1: 'ils se renouvellent si personne ne dit rien', l2: '44 % des contrats de l’exemple' },
      ],
      line1: 'Chaque date a une personne responsable et trois alertes : 90, 60 et 30 jours avant.',
      line2: 'Une alerte sans réponse remonte au niveau au-dessus : une date ne passe pas en silence.',
      note: 'Exemple construit · contrats et dates fictifs.',
    },
    preavis: {
      title: 'Un contrat d’un an : la seule date qui décide',
      alt: 'Un contrat de maintenance d’un an, reconduit par périodes d’un an, avec un préavis de trois mois. Neuf mois pour décider, une alerte 90 jours avant le dernier jour du préavis, puis trois mois de préavis jusqu’à la fin du terme. Si l’on répond à temps, le contrat est reconduit, renégocié ou résilié par choix. Si personne ne répond, il repart pour douze mois et 1 800 000 dinars sont engagés sans décision.',
      header: 'Exemple construit · un contrat de maintenance, un an, préavis de trois mois',
      chartTitle: 'Le terme d’un an, le préavis, et ce qui suit selon que l’on répond ou non',
      start: 'début du terme', zone1: 'neuf mois pour décider', zone2: 'trois mois de préavis',
      alert: 'alerte : 90 jours avant', deadline: 'dernier jour du préavis', end: 'fin du terme',
      answered: 'on répond avant', silent: 'personne ne répond',
      yes: 'reconduit, renégocié ou résilié : c’est choisi',
      no: 'reconduit douze mois, sans décision', amount: '1 800 000 dinars engagés',
      fact1: 'Contrat de maintenance · 1 800 000 dinars par an',
      fact2: 'Durée un an, reconduction par périodes d’un an, préavis de trois mois',
      band: 'Reconduire est une décision comme une autre : elle se prend avant le préavis, pas après.',
      tiles: [
        { big: 'une seule date décide', l1: 'le dernier jour du préavis, trois mois avant la fin', l2: 'après, le contrat court déjà pour un an de plus' },
        { big: 'trois alertes', l1: '90, 60 et 30 jours avant le dernier jour du préavis', l2: 'un responsable, et une remontée sans réponse' },
        { big: '1 800 000 dinars', l1: 'engagés pour douze mois si personne ne répond', l2: 'reconduire reste un choix, pas un oubli', hot: true },
      ],
      line1: 'Les dates viennent du contrat lui-même : durée, reconduction, préavis, révision de prix.',
      line2: 'L’outil ne dit pas ce que vaut une clause : il dit quand elle joue, et à qui il revient de décider.',
      note: 'Exemple construit · contrat, dates et montant fictifs.',
    },
  },
  en: {
    echeancier: {
      title: '300 contracts, 148 dates in twelve months',
      alt: 'The 148 dates carried by 300 contracts over the next twelve months, one square per date, month by month, in four kinds: 59 last days of notice, 53 ends of term, 24 price reviews, 12 ends of warranty. The first three months hold 23 notice dates: 9, then 6, then 8.',
      header: 'Constructed example · 300 contracts, the next twelve months',
      chartTitle: 'One square per date, month by month',
      axis: 'months ahead',
      kinds: ['last day of notice', 'end of term', 'price review', 'end of warranty'],
      window: '90 days: 23 notice dates to decide',
      foot: '59 notice dates, 53 ends of term, 24 price reviews, 12 ends of warranty.',
      band: 'The date that matters is not the end of the contract: it is the last day you can still say no.',
      tiles: [
        { big: '148 dates in twelve months', l1: 'notice dates, ends of term, reviews, warranties', l2: 'carried by 300 contracts' },
        { big: '23 notice dates in 90 days', l1: '9 in the first month, 6 in the second, 8 in the third', l2: 'as many decisions to take in time', hot: true },
        { big: '132 contracts that renew', l1: 'they renew if nobody says anything', l2: '44% of the contracts in the example' },
      ],
      line1: 'Each date has a person in charge and three alerts: 90, 60 and 30 days before.',
      line2: 'An unanswered alert goes up one level: a date does not pass in silence.',
      note: 'Constructed example · fictitious contracts and dates.',
    },
    preavis: {
      title: 'A one-year contract: the only date that decides',
      alt: 'A one-year maintenance contract, renewed by one-year periods, with three months of notice. Nine months to decide, an alert 90 days before the last day of notice, then three months of notice until the end of the term. If someone answers in time, the contract is renewed, renegotiated or terminated by choice. If nobody answers, it runs for another twelve months and 1,800,000 dinars are committed with no decision.',
      header: 'Constructed example · one maintenance contract, one year, three months of notice',
      chartTitle: 'The one-year term, the notice, and what follows depending on whether someone answers',
      start: 'start of term', zone1: 'nine months to decide', zone2: 'three months of notice',
      alert: 'alert: 90 days before', deadline: 'last day of notice', end: 'end of term',
      answered: 'someone answers before', silent: 'nobody answers',
      yes: 'renewed, renegotiated or terminated: by choice',
      no: 'renewed for twelve months, with no decision', amount: '1,800,000 dinars committed',
      fact1: 'Maintenance contract · 1,800,000 dinars a year',
      fact2: 'One-year term, renewal by one-year periods, three months of notice',
      band: 'Renewing is a decision like any other: it is taken before the notice date, not after.',
      tiles: [
        { big: 'one date decides', l1: 'the last day of notice, three months before the end', l2: 'after it, the contract already runs for one more year' },
        { big: 'three alerts', l1: '90, 60 and 30 days before the last day of notice', l2: 'a person in charge, and escalation when unanswered' },
        { big: '1,800,000 dinars', l1: 'committed for twelve months if nobody answers', l2: 'renewing stays a choice, not an oversight', hot: true },
      ],
      line1: 'The dates come from the contract itself: term, renewal, notice, price review.',
      line2: 'The tool does not say what a clause is worth: it says when it applies, and whose decision it is.',
      note: 'Constructed example · fictitious contract, dates and amount.',
    },
  },
  ar: {
    echeancier: {
      title: '300 عقد، و148 تاريخاً في اثني عشر شهراً',
      alt: 'التواريخ الـ148 التي يحملها 300 عقد في الاثني عشر شهراً القادمة، خانة لكل تاريخ، شهراً بشهر، في أربعة أنواع: 59 آخر يوم للإشعار، 53 نهاية مدة، 24 مراجعة سعر، و12 نهاية ضمان. والأشهر الثلاثة الأولى فيها 23 إشعاراً: 9، ثم 6، ثم 8.',
      header: 'مثال مركَّب · 300 عقد، والاثنا عشر شهراً القادمة',
      chartTitle: 'خانة لكل تاريخ، شهراً بشهر',
      axis: 'الأشهر القادمة',
      kinds: ['آخر يوم للإشعار', 'نهاية المدة', 'مراجعة السعر', 'نهاية الضمان'],
      window: '90 يوماً: 23 إشعاراً يُقرَّر فيها',
      foot: '59 إشعاراً، 53 نهاية مدة، 24 مراجعة سعر، و12 نهاية ضمان.',
      band: 'التاريخ المهم ليس نهاية العقد: هو آخر يوم يمكن فيه أن نقول لا.',
      tiles: [
        { big: '148 تاريخاً في اثني عشر شهراً', l1: 'إشعارات، نهايات مدة، مراجعات، وضمانات', l2: 'يحملها 300 عقد' },
        { big: '23 إشعاراً في 90 يوماً', l1: '9 في الشهر الأول، 6 في الثاني، و8 في الثالث', l2: 'قرارات بالعدد نفسه تُتَّخذ في وقتها', hot: true },
        { big: '132 عقداً يتجدّد', l1: 'تتجدّد إذا لم يقل أحد شيئاً', l2: '44 بالمئة من عقود المثال' },
      ],
      line1: 'لكل تاريخ شخص مسؤول وثلاثة تنبيهات: قبل 90، 60، و30 يوماً.',
      line2: 'التنبيه الذي لا يُجاب عنه يصعد إلى المستوى الأعلى: التاريخ لا يمر في صمت.',
      note: 'مثال مركَّب · عقود وتواريخ خيالية.',
    },
    preavis: {
      title: 'عقد من سنة: التاريخ الوحيد الذي يقرّر',
      alt: 'عقد صيانة من سنة، يتجدّد بفترات من سنة، بإشعار مسبق من ثلاثة أشهر. تسعة أشهر للقرار، تنبيه قبل آخر يوم للإشعار بـ90 يوماً، ثم ثلاثة أشهر من الإشعار حتى نهاية المدة. إذا أجاب أحد في الوقت، يُجدَّد العقد، يُعاد التفاوض عليه، أو يُفسَخ باختيار. وإذا لم يجب أحد، ينطلق لاثني عشر شهراً ويُلتزَم بمليون و800 ألف دينار دون قرار.',
      header: 'مثال مركَّب · عقد صيانة، سنة واحدة، وإشعار من ثلاثة أشهر',
      chartTitle: 'مدة السنة، الإشعار، وما يتبع حسب أن يجيب أحد أو لا',
      start: 'بداية المدة', zone1: 'تسعة أشهر للقرار', zone2: 'ثلاثة أشهر من الإشعار',
      alert: 'تنبيه: قبل 90 يوماً', deadline: 'آخر يوم للإشعار', end: 'نهاية المدة',
      answered: 'يُجاب قبله', silent: 'لا أحد يجيب',
      yes: 'تجديد، إعادة تفاوض، أو فسخ: باختيار',
      no: 'تجديد لاثني عشر شهراً، دون قرار', amount: '⁦1 800 000⁩ دينار ملتزَم بها',
      fact1: 'عقد صيانة · ⁦1 800 000⁩ دينار في السنة',
      fact2: 'المدة سنة، التجديد بفترات من سنة، والإشعار ثلاثة أشهر',
      band: 'التجديد قرار كغيره: يُتَّخذ قبل الإشعار، لا بعده.',
      tiles: [
        { big: 'تاريخ واحد يقرّر', l1: 'آخر يوم للإشعار، قبل النهاية بثلاثة أشهر', l2: 'بعده، العقد يجري لسنة أخرى' },
        { big: 'ثلاثة تنبيهات', l1: 'قبل آخر يوم للإشعار بـ90، 60، و30 يوماً', l2: 'شخص مسؤول، وتصعيد عند عدم الجواب' },
        { big: '⁦1 800 000⁩ دينار', l1: 'ملتزَم بها لاثني عشر شهراً إذا لم يجب أحد', l2: 'التجديد يبقى اختياراً، لا نسياناً', hot: true },
      ],
      line1: 'التواريخ تأتي من العقد نفسه: المدة، التجديد، الإشعار، ومراجعة السعر.',
      line2: 'الأداة لا تقول ما قيمة بند: تقول متى يُطبَّق، ولمن يعود القرار.',
      note: 'مثال مركَّب · عقد وتواريخ ومبلغ خيالية.',
    },
  },
};
