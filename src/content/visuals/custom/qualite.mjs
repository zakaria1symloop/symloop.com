// Bespoke animated figures for the 2027 "logiciel de gestion de la qualité" page.
//  entonnoir(): six months of findings as a funnel: 120 opened, 96 with a cause analysed,
//               81 with an action decided, 58 with the action done, 37 with effectiveness
//               verified. 83 are stuck on the way (24 + 15 + 23 + 21).
//  recidive():  the same defect counted each month: 9, 11, 8, 10, 9, 10 (57 in six months,
//               despite a sort-and-rework correction in month 3), then 4, 2, 1, 1 (8 in four
//               months) after a corrective action on the cause in month 6.
// Numbers are drawn in their own text elements, direction="ltr".
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, open, heading, esc } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function pop(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scale(0)}${(at + 1.2).toFixed(1)}%,100%{transform:scale(1)}}`); return `transform-box:fill-box;transform-origin:center;animation:${P}-${id} ${LOOP}s linear infinite`; }
function growC(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `transform-box:fill-box;transform-origin:center;animation:${P}-${id} ${LOOP}s linear infinite`; }
function drawLine(css, P, id, at, dur, len) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{stroke-dashoffset:${len.toFixed(0)}}${(at + dur).toFixed(1)}%,100%{stroke-dashoffset:0}}`); return `animation:${P}-${id} ${LOOP}s linear infinite`; }
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
const pathLen = (pts) => pts.slice(1).reduce((a, p, i) => a + Math.hypot(p[0] - pts[i][0], p[1] - pts[i][1]), 0);

const FUNNEL = [120, 96, 81, 58, 37];

export function entonnoir(t, rtl) {
  const c = ctx(rtl); const P = 'fn'; const css = []; const H = 686;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + text(c, 96, 170, t.chartTitle, { size: 11, fill: C.fg, weight: 500 }) + '</g>';
  FUNNEL.forEach((v, i) => {
    const y = 188 + i * 50; const w = v * 4.6; const x = 600 - w / 2; const last = i === FUNNEL.length - 1; const at = 6 + i * 5;
    s += `<g style="animation:${show(css, P, `l${i}`, at)}">` + text(c, 96, y + 25, t.stages[i], { size: 11, fill: last ? C.accent : C.fg, weight: 500 }) + '</g>';
    s += `<g style="${growC(css, P, `b${i}`, at + 0.5, 2.2)}">` + rect(c, x, y, w, 40, last ? { stroke: C.accent, fill: C.accent } : { stroke: C.fg55, fill: C.fg35 }) + '</g>';
    s += `<g style="animation:${show(css, P, `v${i}`, at + 2.6)}">` + num(c, 600, y + 26, String(v), { size: 15, bold: true, fill: last ? DARK : C.fg }) + '</g>';
    if (i > 0) s += `<g style="animation:${show(css, P, `x${i}`, at + 3.4)}">` + num(c, 920, y + 4, `−${FUNNEL[i - 1] - v}`, { size: 12, bold: true, fill: C.accent }) + text(c, 946, y + 4, t.lost[i - 1], { size: 9.5, fill: C.accent }) + '</g>';
  });
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bd', 34)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 38);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// the same defect, counted each month
const MONTHS = [9, 11, 8, 10, 9, 10, 4, 2, 1, 1];
const CORRECTION = 3; const CORRECTIVE = 6;
const RX = (m) => 210 + (m - 1) * 92;
const RY = (v) => 400 - v * 17;

export function recidive(t, rtl) {
  const c = ctx(rtl); const P = 'rz'; const css = []; const H = 686;
  const pts = MONTHS.map((v, i) => [RX(i + 1), RY(v)]);
  const before = pts.slice(0, CORRECTIVE); const after = pts.slice(CORRECTIVE - 1);
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  let frame = rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + text(c, 96, 170, t.chartTitle, { size: 11, fill: C.fg, weight: 500 }) + poly(c, [[RX(1) - 30, 400], [RX(10) + 30, 400]], C.line2);
  [5, 10].forEach((v) => { frame += poly(c, [[RX(1) - 30, RY(v)], [RX(10) + 30, RY(v)]], C.line, 1, '3 4') + num(c, RX(1) - 46, RY(v) + 4, String(v), { size: 9, fill: C.fg55 }); });
  MONTHS.forEach((_, i) => { frame += num(c, RX(i + 1), 418, `${t.m}${i + 1}`, { size: 9, fill: C.fg55 }); });
  s += `<g style="animation:${show(css, P, 'pa', 3)}">${frame}</g>`;
  // the two events
  s += `<g style="animation:${show(css, P, 'e1', 14)}">` + poly(c, [[RX(CORRECTION), 200], [RX(CORRECTION), 400]], C.fg55, 1, '4 4') + text(c, RX(CORRECTION) + 8, 372, t.ev1a, { size: 10, fill: C.fg, weight: 500 }) + text(c, RX(CORRECTION) + 8, 387, t.ev1b, { size: 9, fill: C.fg70 }) + '</g>';
  s += `<g style="animation:${show(css, P, 'e2', 24)}">` + poly(c, [[RX(CORRECTIVE), 200], [RX(CORRECTIVE), 400]], C.accent, 1.5, '4 4') + text(c, RX(CORRECTIVE) + 8, 208, t.ev2a, { size: 10, fill: C.accent, weight: 500 }) + text(c, RX(CORRECTIVE) + 8, 223, t.ev2b, { size: 9, fill: C.fg70 }) + '</g>';
  // the curve, before and after the corrective action
  const l1 = pathLen(before); const l2 = pathLen(after);
  s += `<polyline points="${before.map(([x, y]) => `${c.X(x)},${y}`).join(' ')}" fill="none" stroke="${C.fg}" stroke-width="2" stroke-dasharray="${l1.toFixed(0)}" style="${drawLine(css, P, 'c1', 6, 16, l1)}"/>`;
  s += `<polyline points="${after.map(([x, y]) => `${c.X(x)},${y}`).join(' ')}" fill="none" stroke="${C.accent}" stroke-width="2.5" stroke-dasharray="${l2.toFixed(0)}" style="${drawLine(css, P, 'c2', 26, 10, l2)}"/>`;
  MONTHS.forEach((v, i) => {
    const hot = i + 1 > CORRECTIVE; const at = hot ? 26 + (i + 1 - CORRECTIVE) * 2.5 : 6 + i * 3.2;
    s += `<g style="${pop(css, P, `d${i}`, at)}">` + dot(c, RX(i + 1), RY(v), 5, hot ? C.accent : C.fg) + '</g>';
    s += `<g style="animation:${show(css, P, `n${i}`, at + 1)}">` + num(c, RX(i + 1) - (i + 1 === CORRECTION || i + 1 === CORRECTIVE ? 16 : 0), RY(v) - 12, String(v), { size: 11, bold: true, fill: hot ? C.accent : C.fg }) + '</g>';
  });
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bd', 40)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 44);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    entonnoir: {
      title: 'Six mois de constats, étape par étape',
      alt: 'Un entonnoir de six mois de constats qualité : 120 constats ouverts, 96 dont la cause a été analysée, 81 avec une action décidée, 58 dont l’action a été réalisée, 37 dont l’efficacité a été vérifiée. 83 sont restés en chemin : 24 sans analyse, 15 sans action décidée, 23 actions non réalisées, 21 réalisées mais jamais vérifiées.',
      header: 'Exemple construit · une entreprise, six mois de non-conformités, de réclamations et de constats d’audit',
      chartTitle: 'De l’ouverture à la vérification d’efficacité',
      stages: ['Constats ouverts', 'Cause analysée', 'Action décidée', 'Action réalisée', 'Efficacité vérifiée'],
      lost: ['jamais analysés', 'sans action décidée', 'actions non réalisées', 'jamais vérifiées'],
      band: 'La qualité ne se perd pas à la détection : elle se perd entre la réunion où l’action est décidée et le jour où quelqu’un vérifie qu’elle a marché.',
      tiles: [
        { big: '120 constats', l1: 'ouverts en six mois', l2: 'réclamations, contrôles, audits' },
        { big: '37 vraiment clos', l1: 'action faite, et efficacité vérifiée', l2: 'moins d’un constat sur trois', hot: true },
        { big: '83 en suspens', l1: '24 sans analyse, 15 sans action, 23 non faites', l2: '21 faites mais jamais vérifiées' },
      ],
      line1: 'Chaque constat a un responsable, une échéance et une étape ; ce qui stagne remonte tout seul, sans attendre la prochaine réunion.',
      line2: 'Une action n’est close que lorsque le défaut n’est pas revenu pendant la durée que vous avez fixée.',
      note: 'Exemple construit · nombres fictifs.',
    },
    recidive: {
      title: 'Le même défaut, compté chaque mois',
      alt: 'Le même défaut compté chaque mois pendant dix mois : 9, 11, 8, 10, 9 et 10, soit 57 en six mois, malgré une correction par tri et retouche au troisième mois ; puis 4, 2, 1 et 1, soit 8 en quatre mois, après une action corrective sur la cause au sixième mois.',
      header: 'Exemple construit · un défaut suivi dix mois, une correction, puis une action corrective',
      chartTitle: 'Nombre de défauts par mois', m: 'M',
      ev1a: 'M3 · correction', ev1b: 'on trie, on retouche',
      ev2a: 'M6 · action corrective', ev2b: 'la cause est traitée : réglage, contrôle au poste',
      band: 'Corriger, c’est retirer les pièces mauvaises ; agir sur la cause, c’est faire qu’il n’y en ait plus. Seule la courbe dit laquelle des deux a eu lieu.',
      tiles: [
        { big: '57 défauts', l1: 'en six mois, malgré le tri et la retouche', l2: 'la correction traite la pièce, pas la cause' },
        { big: '8 défauts', l1: 'dans les quatre mois suivants', l2: 'après réglage et contrôle au poste', hot: true },
        { big: '2 mots', l1: 'correction, et action corrective', l2: 'le logiciel oblige à dire laquelle on a faite' },
      ],
      line1: 'Le même défaut, compté chaque mois : c’est la vérification d’efficacité, et elle ne demande aucune saisie de plus.',
      line2: 'Si la courbe ne descend pas dans le délai fixé, l’action est rouverte : la cause n’était pas la bonne.',
      note: 'Exemple construit · défaut, mois et nombres fictifs.',
    },
  },
  en: {
    entonnoir: {
      title: 'Six months of findings, step by step',
      alt: 'A funnel of six months of quality findings: 120 findings opened, 96 with the cause analysed, 81 with an action decided, 58 with the action carried out, 37 with effectiveness verified. 83 were left on the way: 24 never analysed, 15 with no action decided, 23 actions not carried out, 21 carried out but never verified.',
      header: 'Constructed example · one company, six months of non-conformities, complaints and audit findings',
      chartTitle: 'From opening to verification of effectiveness',
      stages: ['Findings opened', 'Cause analysed', 'Action decided', 'Action carried out', 'Effectiveness verified'],
      lost: ['never analysed', 'no action decided', 'actions not carried out', 'never verified'],
      band: 'Quality is not lost at detection: it is lost between the meeting where the action is decided and the day someone checks that it worked.',
      tiles: [
        { big: '120 findings', l1: 'opened in six months', l2: 'complaints, inspections, audits' },
        { big: '37 truly closed', l1: 'action done, and effectiveness verified', l2: 'fewer than one finding in three', hot: true },
        { big: '83 pending', l1: '24 not analysed, 15 with no action, 23 not done', l2: '21 done but never verified' },
      ],
      line1: 'Each finding has an owner, a due date and a step; what stalls surfaces by itself, without waiting for the next meeting.',
      line2: 'An action is only closed when the defect has not come back for the period you have set.',
      note: 'Constructed example · fictitious numbers.',
    },
    recidive: {
      title: 'The same defect, counted each month',
      alt: 'The same defect counted each month for ten months: 9, 11, 8, 10, 9 and 10, that is 57 in six months, despite a sort-and-rework correction in the third month; then 4, 2, 1 and 1, that is 8 in four months, after a corrective action on the cause in the sixth month.',
      header: 'Constructed example · one defect followed for ten months, a correction, then a corrective action',
      chartTitle: 'Number of defects per month', m: 'M',
      ev1a: 'M3 · correction', ev1b: 'parts are sorted and reworked',
      ev2a: 'M6 · corrective action', ev2b: 'the cause is treated: setting, check at the station',
      band: 'Correcting means removing the bad parts; acting on the cause means there are no more of them. Only the curve says which of the two took place.',
      tiles: [
        { big: '57 defects', l1: 'in six months, despite sorting and rework', l2: 'correction treats the part, not the cause' },
        { big: '8 defects', l1: 'in the following four months', l2: 'after the setting and the check at the station', hot: true },
        { big: '2 words', l1: 'correction, and corrective action', l2: 'the software makes you say which one was done' },
      ],
      line1: 'The same defect, counted each month: that is the verification of effectiveness, and it requires no extra entry.',
      line2: 'If the curve does not come down within the set period, the action is reopened: the cause was not the right one.',
      note: 'Constructed example · fictitious defect, months and numbers.',
    },
  },
  ar: {
    entonnoir: {
      title: 'ستة أشهر من المعاينات، مرحلة بمرحلة',
      alt: 'قمع من ستة أشهر من معاينات الجودة: 120 معاينة مفتوحة، 96 حُلّل سببها، 81 تقرّر لها إجراء، 58 أُنجز إجراؤها، و37 تم التحقق من فعاليتها. و83 بقيت في الطريق: 24 دون تحليل، 15 دون إجراء مقرَّر، 23 إجراء لم يُنجَز، و21 أُنجزت ولم يُتحقَّق منها أبداً.',
      header: 'مثال مركَّب · مؤسسة واحدة، ستة أشهر من حالات عدم المطابقة، الشكاوى، ومعاينات التدقيق',
      chartTitle: 'من الفتح إلى التحقق من الفعالية',
      stages: ['معاينات مفتوحة', 'السبب محلَّل', 'الإجراء مقرَّر', 'الإجراء منجَز', 'الفعالية متحقَّق منها'],
      lost: ['لم تُحلَّل أبداً', 'دون إجراء مقرَّر', 'إجراءات لم تُنجَز', 'لم يُتحقَّق منها'],
      band: 'الجودة لا تضيع عند الاكتشاف: تضيع بين الاجتماع الذي يُقرَّر فيه الإجراء واليوم الذي يتحقق فيه أحد أنه نجح.',
      tiles: [
        { big: '120 معاينة', l1: 'فُتحت في ستة أشهر', l2: 'شكاوى، مراقبات، وتدقيقات' },
        { big: '37 أُغلقت فعلاً', l1: 'الإجراء أُنجز، والفعالية متحقَّق منها', l2: 'أقل من معاينة من ثلاث', hot: true },
        { big: '83 معلَّقة', l1: '24 دون تحليل، 15 دون إجراء، 23 لم تُنجَز', l2: '21 أُنجزت ولم يُتحقَّق منها' },
      ],
      line1: 'لكل معاينة مسؤول، أجل، ومرحلة؛ وما يتوقف يصعد وحده، دون انتظار الاجتماع القادم.',
      line2: 'الإجراء لا يُغلق إلا حين لا يعود العيب طوال المدة التي حدّدتموها.',
      note: 'مثال مركَّب · أعداد خيالية.',
    },
    recidive: {
      title: 'العيب نفسه، معدوداً كل شهر',
      alt: 'العيب نفسه معدوداً كل شهر طوال عشرة أشهر: 9، 11، 8، 10، 9 ثم 10، أي 57 في ستة أشهر، رغم تصحيح بالفرز والإصلاح في الشهر الثالث؛ ثم 4، 2، 1 ثم 1، أي 8 في أربعة أشهر، بعد إجراء تصحيحي على السبب في الشهر السادس.',
      header: 'مثال مركَّب · عيب متابَع عشرة أشهر، تصحيح، ثم إجراء تصحيحي',
      chartTitle: 'عدد العيوب في الشهر', m: '',
      ev1a: 'الشهر 3 · تصحيح', ev1b: 'تُفرز القطع وتُصلَح',
      ev2a: 'الشهر 6 · إجراء تصحيحي', ev2b: 'السبب يُعالَج: ضبط، ومراقبة في المنصب',
      band: 'التصحيح سحب القطع السيئة؛ والعمل على السبب ألّا تبقى منها قطع. والمنحنى وحده يقول أيهما وقع.',
      tiles: [
        { big: '57 عيباً', l1: 'في ستة أشهر، رغم الفرز والإصلاح', l2: 'التصحيح يعالج القطعة، لا السبب' },
        { big: '8 عيوب', l1: 'في الأشهر الأربعة التالية', l2: 'بعد الضبط والمراقبة في المنصب', hot: true },
        { big: 'كلمتان', l1: 'التصحيح، والإجراء التصحيحي', l2: 'البرنامج يُلزم بقول أيهما أُنجز' },
      ],
      line1: 'العيب نفسه، معدوداً كل شهر: هذا هو التحقق من الفعالية، ولا يطلب أي إدخال إضافي.',
      line2: 'إذا لم ينزل المنحنى في المدة المحدَّدة، يُعاد فتح الإجراء: السبب لم يكن الصحيح.',
      note: 'مثال مركَّب · عيب وأشهر وأعداد خيالية.',
    },
  },
};
