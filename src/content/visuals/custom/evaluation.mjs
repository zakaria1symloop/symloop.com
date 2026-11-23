// Bespoke animated figures for the 2027 "logiciel d'entretien annuel et d'évaluation du personnel" page.
//  notes():   last year's marks for 180 people on a 1-to-5 scale (0, 3, 21, 128, 28: 71 % of "4")
//             beside the marks after described criteria and calibration (2, 16, 67, 71, 24), and
//             the average mark given by each of the 12 managers: from 3.2 to 4.7 last year
//             (1.5 point apart), from 3.3 to 3.7 after calibration (0.4 point). The manager axis
//             starts at 3 and says so.
//  memoire(): the dated facts quoted in forty appraisal forms, by month of the fact. Written from
//             memory in December: 82 facts, 61 of them (74 %) from the last three months. With
//             notes taken during the year: 212 facts, 70 of them (33 %) from the last three months.
//             Both rows use the same vertical scale.
// Everything is drawn in logical coordinates and mirrors in RTL. CSS-only animation; base attributes
// are the finished state for the JPG.
import { C, ctx, text, rect, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function growY(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleY(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleY(1)}}`); return `transform-box:fill-box;transform-origin:center bottom;animation:${P}-${id} ${LOOP}s linear infinite`; }
const TINT = 'rgba(242,181,68,0.06)';
const DARK = '#0b0b0b';
const GREY = 'rgba(255,255,255,0.55)';

function tiles(c, css, P, ky, ts, at0) {
  let s = '';
  ts.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, at0 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? TINT : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  return s;
}
const motionOff = (P) => `@media (prefers-reduced-motion: reduce){svg [style*="${P}-"]{animation:none !important}}`;
const seg = (c, x1, y1, x2, y2, color, dash) => `<line x1="${c.X(x1)}" y1="${y1}" x2="${c.X(x2)}" y2="${y2}" stroke="${color}" stroke-width="1"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const dot = (c, x, y, fill) => `<circle cx="${c.X(x).toFixed(1)}" cy="${y}" r="5" fill="${fill}" stroke="${DARK}" stroke-width="1"/>`;

// marks 1..5 for 180 people, before and after
const BEFORE = [0, 3, 21, 128, 28];
const AFTER = [2, 16, 67, 71, 24];
// sum of the marks given by each of the 12 managers to their 15 people
const MGR_BEFORE = [48, 53, 56, 58, 59, 60, 60, 62, 63, 65, 67, 70];
const MGR_AFTER = [50, 51, 52, 52, 53, 53, 53, 54, 54, 55, 56, 56];

export function notes(t, rtl) {
  const c = ctx(rtl); const P = 'qv'; const css = []; const H = 686;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + text(c, 96, 170, t.chartTitle, { size: 11, fill: C.fg, weight: 500 })
    + rect(c, 96, 187, 9, 9, { stroke: 'none', fill: GREY }) + text(c, 111, 196, t.legendBefore, { size: 9.5, fill: C.fg70 })
    + rect(c, 96, 203, 9, 9, { stroke: 'none', fill: C.accent }) + text(c, 111, 212, t.legendAfter, { size: 9.5, fill: C.accent })
    + seg(c, 100, 400, 540, 400, C.line2) + '</g>';
  // histogram of the marks, two bars per mark
  const base = 400; const scale = 170 / 128;
  const cxOf = (i) => 144 + i * 88;
  BEFORE.forEach((n, i) => {
    const h = Math.round(n * scale); const x = cxOf(i);
    s += `<g style="animation:${show(css, P, `m${i}`, 5)}">` + text(c, x, base + 18, String(i + 1), { size: 11, font: 'mono', fill: C.fg, anchor: 'middle', weight: 500 }) + '</g>';
    if (h) s += `<g style="${growY(css, P, `b${i}`, 6 + i * 1.5, 2)}">` + rect(c, x - 32, base - h, 30, h, { stroke: 'none', fill: GREY }) + '</g>';
    s += `<g style="animation:${show(css, P, `bv${i}`, 8.5 + i * 1.5)}">` + text(c, x - 17, base - h - 6, String(n), { size: 9.5, font: 'mono', fill: C.fg70, anchor: 'middle' }) + '</g>';
  });
  AFTER.forEach((n, i) => {
    const h = Math.round(n * scale); const x = cxOf(i);
    s += `<g style="${growY(css, P, `a${i}`, 34 + i * 1.5, 2)}">` + rect(c, x + 2, base - h, 30, h, { stroke: 'none', fill: C.accent }) + '</g>';
    s += `<g style="animation:${show(css, P, `av${i}`, 36.5 + i * 1.5)}">` + text(c, x + 17, base - h - 6, String(n), { size: 9.5, font: 'mono', fill: C.accent, anchor: 'middle', weight: 500 }) + '</g>';
  });
  s += `<g style="animation:${show(css, P, 'ml', 5)}">` + text(c, 320, 440, t.markAxis, { size: 9, fill: C.fg55, anchor: 'middle' }) + '</g>';
  // the average mark of each manager, on an axis that starts at 3
  const xOf = (v) => 640 + (v - 3) * 220;
  const row = (y, sums, fill, id, at) => {
    let out = seg(c, 640, y + 18, 1080, y + 18, C.line2);
    t.ticks.forEach((lab, k) => { const x = 640 + k * 110; out += seg(c, x, y + 18, x, y + 23, C.line2) + text(c, x, y + 35, lab, { size: 8.5, font: 'mono', fill: C.fg55, anchor: 'middle' }); });
    let dots = ''; const seen = {};
    sums.forEach((sum, k) => { const n = seen[sum] || 0; seen[sum] = n + 1; dots += `<g style="animation:${show(css, P, `${id}${k}`, at + k)}">` + dot(c, xOf(sum / 15), y - n * 11, fill) + '</g>'; });
    return `<g style="animation:${show(css, P, `${id}x`, at - 1)}">` + out + '</g>' + dots;
  };
  s += `<g style="animation:${show(css, P, 'mt', 13)}">` + text(c, 600, 196, t.mgrTitle, { size: 10.5, fill: C.fg, weight: 500 }) + text(c, 1104, 196, t.axisNote, { size: 8.5, fill: C.fg55, anchor: 'end' }) + text(c, 600, 232, t.rowBefore, { size: 9.5, fill: C.fg70 }) + '</g>';
  s += row(252, MGR_BEFORE, GREY, 'd', 15);
  const b0 = xOf(48 / 15); const b1 = xOf(70 / 15);
  s += `<g style="animation:${show(css, P, 'sb', 29)}">` + seg(c, b0, 300, b1, 300, C.fg70) + seg(c, b0, 296, b0, 304, C.fg70) + seg(c, b1, 296, b1, 304, C.fg70) + text(c, (b0 + b1) / 2, 316, t.spreadBefore, { size: 10, fill: C.fg, anchor: 'middle', weight: 500 }) + '</g>';
  s += `<g style="animation:${show(css, P, 'mr', 43)}">` + text(c, 600, 346, t.rowAfter, { size: 9.5, fill: C.accent }) + '</g>';
  s += row(372, MGR_AFTER, C.accent, 'e', 45);
  const a0 = xOf(50 / 15); const a1 = xOf(56 / 15);
  s += `<g style="animation:${show(css, P, 'sa', 59)}">` + seg(c, a0, 420, a1, 420, C.accent) + seg(c, a0, 416, a0, 424, C.accent) + seg(c, a1, 416, a1, 424, C.accent) + text(c, a1 + 14, 424, t.spreadAfter, { size: 10, fill: C.accent, weight: 500 }) + '</g>';
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bn', 63)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 67);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// dated facts quoted in forty forms, by month of the fact
const FACTS_MEMORY = [1, 0, 1, 2, 2, 3, 2, 4, 6, 11, 19, 31];
const FACTS_NOTES = [14, 16, 18, 17, 19, 16, 13, 9, 20, 22, 24, 24];

export function memoire(t, rtl) {
  const c = ctx(rtl); const P = 'mz'; const css = []; const H = 686;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + text(c, 96, 170, t.chartTitle, { size: 11, fill: C.fg, weight: 500 }) + '</g>';
  const scale = 70 / 31; const colX = (i) => 140 + i * 76 + 16;
  const chart = (base, data, id, at, labelY, label, pct, hotLast) => {
    let out = `<g style="animation:${show(css, P, `${id}t`, at)}">` + text(c, 96, labelY, label, { size: 10.5, fill: C.fg, weight: 500 }) + seg(c, 140, base, 1052, base, C.line2) + '</g>';
    data.forEach((n, i) => {
      const h = Math.round(n * scale); const x = colX(i); const hot = hotLast && i >= 9;
      if (h) out += `<g style="${growY(css, P, `${id}${i}`, at + 1 + i * 1.7, 1.6)}">` + rect(c, x, base - h, 44, h, { stroke: 'none', fill: hot ? C.accent : GREY }) + '</g>';
      out += `<g style="animation:${show(css, P, `${id}v${i}`, at + 2.8 + i * 1.7)}">` + text(c, x + 22, base - h - 5, String(n), { size: 9, font: 'mono', fill: hot ? C.accent : C.fg70, anchor: 'middle', weight: hot ? 500 : 300 }) + '</g>';
    });
    out += `<g style="animation:${show(css, P, `${id}p`, at + 24)}">` + text(c, 1104, labelY, pct, { size: 10.5, fill: C.accent, anchor: 'end', weight: 500 }) + '</g>';
    return out;
  };
  s += chart(290, FACTS_MEMORY, 'a', 5, 196, t.rowA, t.pctA, true);
  s += chart(408, FACTS_NOTES, 'b', 33, 318, t.rowB, t.pctB, true);
  s += `<g style="animation:${show(css, P, 'mo', 4)}">` + t.months.map((m, i) => text(c, colX(i) + 22, 428, m, { size: 9, font: 'mono', fill: C.fg55, anchor: 'middle' })).join('') + text(c, 96, 428, t.monthAxis, { size: 9, fill: C.fg55 }) + '</g>';
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bn', 62)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 66);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    notes: {
      title: 'Tout le monde a « 4 sur 5 » : ce que disent les notes de l’an dernier',
      alt: 'À gauche, la répartition des notes de 180 personnes sur une échelle de 1 à 5. L’an dernier, sur papier : 0, 3, 21, 128 et 28, soit 71 % de « 4 ». Après des critères décrits et un calibrage : 2, 16, 67, 71 et 24. À droite, la moyenne des notes données par chacun des douze responsables : de 3,2 à 4,7 l’an dernier, soit 1,5 point d’écart ; de 3,3 à 3,7 après calibrage, soit 0,4 point.',
      header: 'Exemple construit · 180 personnes, 12 responsables, échelle de 1 à 5',
      chartTitle: 'La répartition des notes, et la moyenne de chaque responsable',
      legendBefore: 'l’an dernier, sur papier', legendAfter: 'après critères décrits et calibrage', markAxis: 'note donnée, de 1 à 5 · nombre de personnes',
      mgrTitle: 'Moyenne des notes de chaque responsable', axisNote: 'échelle de 1 à 5 · axe commençant à 3',
      rowBefore: 'L’an dernier', rowAfter: 'Après calibrage', ticks: ['3', '3,5', '4', '4,5', '5'],
      spreadBefore: '1,5 point entre deux responsables', spreadAfter: '0,4 point',
      band: 'Quand tout le monde a 4, la note ne dit plus rien ; quand deux responsables notent à 1,5 point d’écart, elle dit surtout qui a noté.',
      tiles: [
        { big: '71 % de « 4 »', l1: '128 notes sur 180, l’an dernier', l2: '87 % de 4 ou de 5' },
        { big: '1,5 point d’écart', l1: 'entre le responsable le plus sévère et le plus large', l2: '3,2 contre 4,7 de moyenne' },
        { big: '0,4 point après calibrage', l1: 'les mêmes critères, décrits par des comportements', l2: '39 % de « 4 », sans quota', hot: true },
      ],
      line1: 'À faire avec vos fiches de l’an dernier : compter les notes, puis la moyenne par responsable.',
      line2: 'Le calibrage ne fixe pas de quota : il fait relire ensemble les cas limites, critère par critère.',
      note: 'Exemple construit · effectifs, notes et écarts fictifs.',
    },
    memoire: {
      title: 'Une année, pas un trimestre : les faits cités dans les fiches',
      alt: 'Deux séries de douze barres, une par mois, comptant les faits datés cités dans quarante fiches d’entretien. Fiches écrites de mémoire en décembre : 82 faits, dont 61, soit 74 %, datent d’octobre, novembre et décembre. Avec des notes prises dans l’année : 212 faits, répartis sur les douze mois, dont 33 % sur les trois derniers.',
      header: 'Exemple construit · 40 fiches relues, les faits cités et le mois de chacun',
      chartTitle: 'Les faits datés cités dans quarante fiches, selon leur mois',
      rowA: 'Fiches écrites de mémoire, en décembre : 82 faits', pctA: '74 % sur les trois derniers mois',
      rowB: 'Avec les notes prises dans l’année : 212 faits', pctB: '33 % sur les trois derniers mois',
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'], monthAxis: 'mois',
      band: 'Un entretien annuel écrit de mémoire juge un trimestre, pas une année.',
      tiles: [
        { big: '74 % sur trois mois', l1: 'des faits cités datent d’octobre à décembre', l2: '61 faits sur 82' },
        { big: '2 faits par fiche', l1: '82 faits dans 40 fiches, écrites de mémoire', l2: 'le reste : des appréciations générales' },
        { big: '5 faits par fiche', l1: '212 faits dans 40 fiches, avec les notes de l’année', l2: '33 % sur les trois derniers mois', hot: true },
      ],
      line1: 'À faire chez vous : relire quarante fiches, compter les faits datés et le mois de chacun.',
      line2: 'Une note prise le jour même, en deux lignes, et dite à la personne : c’est elle que l’entretien relira.',
      note: 'Exemple construit · fiches, faits et répartitions fictifs.',
    },
  },
  en: {
    notes: {
      title: 'Everyone gets “4 out of 5”: what last year’s marks say',
      alt: 'On the left, the distribution of the marks of 180 people on a 1-to-5 scale. Last year, on paper: 0, 3, 21, 128 and 28, that is 71% of “4”. After described criteria and calibration: 2, 16, 67, 71 and 24. On the right, the average mark given by each of the twelve managers: from 3.2 to 4.7 last year, 1.5 points apart; from 3.3 to 3.7 after calibration, 0.4 points apart.',
      header: 'Constructed example · 180 people, 12 managers, scale from 1 to 5',
      chartTitle: 'The distribution of marks, and the average of each manager',
      legendBefore: 'last year, on paper', legendAfter: 'after described criteria and calibration', markAxis: 'mark given, from 1 to 5 · number of people',
      mgrTitle: 'Average mark given by each manager', axisNote: 'scale from 1 to 5 · axis starting at 3',
      rowBefore: 'Last year', rowAfter: 'After calibration', ticks: ['3', '3.5', '4', '4.5', '5'],
      spreadBefore: '1.5 points between two managers', spreadAfter: '0.4 points',
      band: 'When everyone gets 4, the mark says nothing; when two managers are 1.5 points apart, it mostly says who gave it.',
      tiles: [
        { big: '71% of “4”', l1: '128 marks out of 180, last year', l2: '87% of 4 or 5' },
        { big: '1.5 points apart', l1: 'between the strictest and the most generous manager', l2: '3.2 against 4.7 on average' },
        { big: '0.4 points after calibration', l1: 'the same criteria, described by behaviours', l2: '39% of “4”, with no quota', hot: true },
      ],
      line1: 'To do with last year’s forms: count the marks, then the average per manager.',
      line2: 'Calibration sets no quota: it has managers reread the borderline cases together, criterion by criterion.',
      note: 'Constructed example · fictitious headcount, marks and gaps.',
    },
    memoire: {
      title: 'A year, not a quarter: the facts quoted in the forms',
      alt: 'Two series of twelve bars, one per month, counting the dated facts quoted in forty appraisal forms. Forms written from memory in December: 82 facts, of which 61, that is 74%, date from October, November and December. With notes taken during the year: 212 facts, spread over the twelve months, 33% of them in the last three.',
      header: 'Constructed example · 40 forms reread, the facts quoted and the month of each',
      chartTitle: 'The dated facts quoted in forty forms, by month',
      rowA: 'Forms written from memory, in December: 82 facts', pctA: '74% in the last three months',
      rowB: 'With notes taken during the year: 212 facts', pctB: '33% in the last three months',
      months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'], monthAxis: 'month',
      band: 'A yearly appraisal written from memory judges a quarter, not a year.',
      tiles: [
        { big: '74% in three months', l1: 'of the facts quoted date from October to December', l2: '61 facts out of 82' },
        { big: '2 facts per form', l1: '82 facts in 40 forms, written from memory', l2: 'the rest: general appreciations' },
        { big: '5 facts per form', l1: '212 facts in 40 forms, with the year’s notes', l2: '33% in the last three months', hot: true },
      ],
      line1: 'To do at yours: reread forty forms, count the dated facts and the month of each.',
      line2: 'A note taken the same day, in two lines, and said to the person: that is what the appraisal will reread.',
      note: 'Constructed example · fictitious forms, facts and distributions.',
    },
  },
  ar: {
    notes: {
      title: 'الكل ينال «4 من 5»: ما تقوله علامات السنة الماضية',
      alt: 'على اليمين، توزيع علامات 180 شخصاً على سلّم من 1 إلى 5. السنة الماضية، على الورق: 0، 3، 21، 128 و28، أي 71 بالمئة نالوا «4». وبعد معايير موصوفة ومعايرة: 2، 16، 67، 71 و24. وعلى اليسار، متوسط العلامات التي أعطاها كل واحد من المسؤولين الاثني عشر: من 3,2 إلى 4,7 السنة الماضية، أي فارق نقطة ونصف؛ ومن 3,3 إلى 3,7 بعد المعايرة، أي 0,4 نقطة.',
      header: 'مثال مركَّب · 180 شخصاً، 12 مسؤولاً، وسلّم من 1 إلى 5',
      chartTitle: 'توزيع العلامات، ومتوسط كل مسؤول',
      legendBefore: 'السنة الماضية، على الورق', legendAfter: 'بعد المعايير الموصوفة والمعايرة', markAxis: 'العلامة المعطاة، من 1 إلى 5 · عدد الأشخاص',
      mgrTitle: 'متوسط العلامات التي أعطاها كل مسؤول', axisNote: 'السلّم من 1 إلى 5 · المحور يبدأ من 3',
      rowBefore: 'السنة الماضية', rowAfter: 'بعد المعايرة', ticks: ['3', '3,5', '4', '4,5', '5'],
      spreadBefore: 'نقطة ونصف بين مسؤولَين', spreadAfter: '⁦0,4⁩ نقطة',
      band: 'حين ينال الكل 4، لا تقول العلامة شيئاً؛ وحين يختلف مسؤولان بنقطة ونصف، تقول خصوصاً من الذي نقّط.',
      tiles: [
        { big: '71 بالمئة نالوا «4»', l1: '128 علامة من 180، السنة الماضية', l2: '87 بالمئة نالوا 4 أو 5' },
        { big: 'نقطة ونصف من الفارق', l1: 'بين أشدّ مسؤول وأكثرهم سخاءً', l2: '⁦3,2⁩ مقابل ⁦4,7⁩ في المتوسط' },
        { big: '⁦0,4⁩ نقطة بعد المعايرة', l1: 'المعايير نفسها، موصوفة بسلوكات', l2: '39 بالمئة نالوا «4»، دون حصص', hot: true },
      ],
      line1: 'للقيام به مع بطاقات السنة الماضية: عدّ العلامات، ثم المتوسط لكل مسؤول.',
      line2: 'المعايرة لا تحدد حصصاً: تجعل المسؤولين يعيدون قراءة الحالات الحدّية معاً، معياراً بمعيار.',
      note: 'مثال مركَّب · أعداد وعلامات وفوارق خيالية.',
    },
    memoire: {
      title: 'سنة كاملة، لا ثلاثة أشهر: الوقائع المذكورة في البطاقات',
      alt: 'سلسلتان من اثني عشر عموداً، عمود لكل شهر، تعدّان الوقائع المؤرَّخة المذكورة في أربعين بطاقة تقييم. بطاقات مكتوبة من الذاكرة في ديسمبر: 82 واقعة، منها 61، أي 74 بالمئة، تعود إلى أكتوبر، نوفمبر، وديسمبر. ومع ملاحظات مدوَّنة خلال السنة: 212 واقعة، موزَّعة على الأشهر الاثني عشر، منها 33 بالمئة في الثلاثة الأخيرة.',
      header: 'مثال مركَّب · 40 بطاقة أُعيدت قراءتها، والوقائع المذكورة وشهر كل واحدة',
      chartTitle: 'الوقائع المؤرَّخة المذكورة في أربعين بطاقة، حسب شهرها',
      rowA: 'بطاقات مكتوبة من الذاكرة، في ديسمبر: 82 واقعة', pctA: '74 بالمئة في الأشهر الثلاثة الأخيرة',
      rowB: 'مع الملاحظات المدوَّنة خلال السنة: 212 واقعة', pctB: '33 بالمئة في الأشهر الثلاثة الأخيرة',
      months: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'], monthAxis: 'الشهر',
      band: 'المقابلة السنوية المكتوبة من الذاكرة تحكم على فصل، لا على سنة.',
      tiles: [
        { big: '74 بالمئة في ثلاثة أشهر', l1: 'من الوقائع المذكورة تعود إلى أكتوبر، نوفمبر، وديسمبر', l2: '61 واقعة من 82' },
        { big: 'واقعتان في البطاقة', l1: '82 واقعة في 40 بطاقة، مكتوبة من الذاكرة', l2: 'والباقي تقديرات عامة' },
        { big: '5 وقائع في البطاقة', l1: '212 واقعة في 40 بطاقة، مع ملاحظات السنة', l2: '33 بالمئة في الأشهر الثلاثة الأخيرة', hot: true },
      ],
      line1: 'للقيام به عندكم: إعادة قراءة أربعين بطاقة، وعدّ الوقائع المؤرَّخة وشهر كل واحدة.',
      line2: 'ملاحظة تُدوَّن في اليوم نفسه، في سطرين، وتُقال للشخص: هي التي ستعيد المقابلة قراءتها.',
      note: 'مثال مركَّب · بطاقات ووقائع وتوزيعات خيالية.',
    },
  },
};
