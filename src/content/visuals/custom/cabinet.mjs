// Bespoke animated figures for the 2027 "logiciel de gestion de cabinet médical" page.
//  dossier(): one patient's file over 36 months as five lanes of events: 12 consultations,
//             9 prescriptions, 5 lab tests (the last one still awaited), 2 imaging exams,
//             2 certificates = 30 items; a usual treatment renewed for 21 months.
//  quinze():  a 15-minute consultation as two rings. On paper: 9 minutes with the patient,
//             4 writing the prescription by hand, 2 looking for the file. With the software:
//             13, 1 and 1. Four minutes given back per consultation, 96 over 24 consultations.
// Numbers are drawn in their own text elements, direction="ltr".
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, open, heading, esc } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function pop(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scale(0)}${(at + 1.2).toFixed(1)}%,100%{transform:scale(1)}}`); return `transform-box:fill-box;transform-origin:center;animation:${P}-${id} ${LOOP}s linear infinite`; }
function growX(css, P, id, at, dur, rtl) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'} center;animation:${P}-${id} ${LOOP}s linear infinite`; }
const TINT = 'rgba(242,181,68,0.06)';
const SOFT = 'rgba(242,181,68,0.45)';
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
const dot = (c, x, y, r, o) => `<circle cx="${c.X(x)}" cy="${y}" r="${r}" fill="${o.fill}" stroke="${o.stroke || o.fill}" stroke-width="${o.sw || 1}"/>`;

// months since January of the first year (0..36); five lanes of the file
const LANES = [
  [1, 4, 8, 12, 15, 19, 22, 25, 28, 31, 33, 35],   // consultations
  [1, 8, 12, 15, 19, 22, 28, 31, 35],              // prescriptions
  [2, 13, 23, 32, 35],                             // lab tests (the last is awaited)
  [5, 26],                                         // imaging
  [9, 29],                                         // certificates
];
const USUAL_FROM = 15;
const MX = (m) => 250 + m * 23;

export function dossier(t, rtl) {
  const c = ctx(rtl); const P = 'pd'; const css = []; const H = 686;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  let frame = rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK });
  [0, 12, 24, 36].forEach((m) => { frame += poly(c, [[MX(m), 186], [MX(m), 384]], C.line2, 1, m === 36 ? '' : '3 4'); });
  t.years.forEach((y, i) => { frame += num(c, MX(i * 12 + 6), 176, y, { size: 10.5, bold: true, fill: C.fg70 }); });
  LANES.forEach((_, i) => { const y = 208 + i * 38; frame += text(c, 96, y + 4, t.lanes[i], { size: 10.5, fill: C.fg }) + poly(c, [[MX(0), y], [MX(36), y]], C.line); });
  s += `<g style="animation:${show(css, P, 'pa', 3)}">${frame}</g>`;
  // the usual treatment, renewed since month 15
  s += `<g style="${growX(css, P, 'ut', 22, 3, rtl)}">` + rect(c, MX(USUAL_FROM), 208 + 38 + 9, (36 - USUAL_FROM) * 23, 4, { stroke: C.accent, fill: C.accent }) + '</g>';
  LANES.forEach((months, i) => {
    const y = 208 + i * 38;
    months.forEach((m, k) => {
      const awaited = i === 2 && k === months.length - 1;
      s += `<g style="${pop(css, P, `e${i}x${k}`, 5 + m * 0.42 + i * 0.25)}">` + dot(c, MX(m), y, 6, awaited ? { fill: DARK, stroke: C.accent, sw: 2 } : { fill: i === 0 ? C.fg : C.fg70 }) + '</g>';
    });
    s += `<g style="animation:${show(css, P, `n${i}`, 24 + i)}">` + num(c, MX(36) + 22, y + 4, String(months.length), { size: 11.5, bold: true, fill: C.fg }) + '</g>';
  });
  // today
  s += `<g style="animation:${show(css, P, 'td', 30)}">` + poly(c, [[MX(36), 186], [MX(36), 384]], C.accent, 1.5) + text(c, MX(36) - 6, 398, t.today, { size: 9.5, fill: C.accent, weight: 500, anchor: 'end' }) + '</g>';
  s += `<g style="animation:${show(css, P, 'lg', 33)}">` + dot(c, 256, 426, 5, { fill: C.fg }) + text(c, 270, 430, t.legItem, { size: 9.5, fill: C.fg70 }) + dot(c, 476, 426, 5, { fill: DARK, stroke: C.accent, sw: 2 }) + text(c, 490, 430, t.legAwaited, { size: 9.5, fill: C.accent }) + rect(c, 690, 424, 26, 4, { stroke: C.accent, fill: C.accent }) + text(c, 726, 430, t.legUsual, { size: 9.5, fill: C.accent }) + '</g>';
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bd', 38)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 42);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// minutes of a 15-minute consultation: with the patient, writing, looking for the file
const PAPER = [9, 4, 2];
const SOFTWARE = [13, 1, 1];
const RING = [C.fg, C.accent, SOFT];

export function quinze(t, rtl) {
  const c = ctx(rtl); const P = 'qz'; const css = []; const H = 686;
  const R = 70; const CIRC = 2 * Math.PI * R;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + poly(c, [[600, 160], [600, 438]], C.line2) + text(c, 96, 176, t.left, { size: 12, fill: C.fg, weight: 500 }) + text(c, 620, 176, t.right, { size: 12, fill: C.accent, weight: 500 }) + '</g>';
  const ring = (mins, cx, id, at0, labels, hot) => {
    let o = ''; let start = 0; const x = c.X(cx); const cy = 304;
    o += `<g style="animation:${show(css, P, `${id}b`, at0)}"><circle cx="${x}" cy="${cy}" r="${R}" fill="none" stroke="${C.line2}" stroke-width="28"/></g>`;
    mins.forEach((m, i) => {
      const len = CIRC * m / 15;
      o += `<g style="animation:${show(css, P, `${id}a${i}`, at0 + 1.5 + i * 2.5)}"><circle cx="${x}" cy="${cy}" r="${R}" fill="none" stroke="${RING[i]}" stroke-width="28" stroke-dasharray="${len.toFixed(2)} ${(CIRC - len).toFixed(2)}" stroke-dashoffset="${(-start).toFixed(2)}" transform="rotate(-90 ${x} ${cy})"/></g>`;
      start += len;
    });
    o += `<g style="${pop(css, P, `${id}c`, at0 + 9)}">` + num(c, cx, cy + 4, `${mins[0]} ${t.min}`, { size: 17, bold: true, fill: hot ? C.accent : C.fg }) + text(c, cx, cy + 22, t.withPatient, { size: 8.5, fill: C.fg70, anchor: 'middle' }) + '</g>';
    mins.forEach((m, i) => {
      const y = 268 + i * 36;
      o += `<g style="animation:${show(css, P, `${id}l${i}`, at0 + 2 + i * 2.5)}">` + rect(c, cx + 112, y - 11, 13, 13, { stroke: RING[i], fill: RING[i] }) + num(c, cx + 150, y, `${m} ${t.min}`, { size: 11.5, bold: true, fill: i === 0 ? C.fg : C.accent }) + text(c, cx + 182, y, labels[i], { size: 9.5, fill: C.fg70 }) + '</g>';
    });
    return o;
  };
  s += ring(PAPER, 200, 'p', 5, t.paperLabels, false);
  s += ring(SOFTWARE, 724, 's', 20, t.softLabels, true);
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bd', 36)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 40);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    dossier: {
      title: 'Le dossier d’un patient, sur trois ans',
      alt: 'Le dossier d’un patient sur trente-six mois, en cinq lignes : 12 consultations, 9 ordonnances, 5 analyses dont la dernière est attendue, 2 examens d’imagerie et 2 certificats, soit 30 pièces. Un traitement habituel est renouvelé depuis 21 mois.',
      header: 'Exemple construit · un patient suivi depuis trois ans, chaque pièce à sa date',
      years: ['2024', '2025', '2026'],
      lanes: ['Consultations', 'Ordonnances', 'Analyses', 'Imagerie', 'Certificats'],
      today: 'aujourd’hui',
      legItem: 'pièce au dossier', legAwaited: 'résultat attendu', legUsual: 'traitement habituel, renouvelé',
      band: 'Le dossier papier range les pièces par date d’arrivée ; le dossier dans le logiciel les montre par nature, sur le temps, d’un seul regard.',
      tiles: [
        { big: '12 consultations', l1: 'en trois ans, toutes au même endroit', l2: '30 pièces : ordonnances, analyses, imagerie' },
        { big: '1 résultat attendu', l1: 'analyse demandée le mois dernier', l2: 'visible avant que le patient n’entre', hot: true },
        { big: '21 mois', l1: 'de traitement habituel, renouvelé d’un geste', l2: 'la liste suit le patient, pas la mémoire' },
      ],
      line1: 'Avant que le patient ne s’assoie : la dernière visite, le traitement en cours, les allergies signalées, ce qui est attendu.',
      line2: 'Chaque pièce est rattachée à une consultation : on retrouve pourquoi une analyse a été demandée, et ce qui en a été fait.',
      note: 'Exemple construit · patient, dates et pièces fictifs ; aucune donnée réelle.',
    },
    quinze: {
      title: 'Quinze minutes de consultation, avant et après',
      alt: 'Une consultation de quinze minutes en deux anneaux. Sur papier : 9 minutes avec le patient, 4 à écrire l’ordonnance et le certificat à la main, 2 à chercher le dossier. Avec le logiciel : 13 minutes avec le patient, 1 pour l’ordonnance, 1 pour le dossier. Quatre minutes sont rendues au patient à chaque consultation, soit 96 minutes sur 24 consultations.',
      header: 'Exemple construit · la même consultation de 15 minutes, chronométrée de deux façons',
      left: 'Sur papier', right: 'Avec le logiciel', withPatient: 'avec le patient', min: 'min',
      paperLabels: ['avec le patient', 'ordonnance et certificat écrits à la main', 'chercher le dossier, relire la dernière visite'],
      softLabels: ['avec le patient', 'ordonnance depuis les favoris, imprimée', 'dossier ouvert à l’arrivée du patient'],
      band: 'Le logiciel ne raccourcit pas la consultation : il rend au patient les minutes passées à chercher un dossier et à recopier une ordonnance.',
      tiles: [
        { big: '9 min', l1: 'avec le patient, sur une consultation de 15', l2: '6 minutes à écrire et à chercher' },
        { big: '13 min', l1: 'avec le patient, pour la même consultation', l2: '2 minutes pour le dossier et l’ordonnance', hot: true },
        { big: '4 min', l1: 'rendues au patient à chaque consultation', l2: 'sur 24 consultations : 96 minutes par jour' },
      ],
      line1: 'L’ordonnance se compose depuis le traitement habituel du patient et les favoris du médecin, puis s’imprime lisible.',
      line2: 'Ce que l’on fait des minutes gagnées est un choix : plus de temps par patient, ou une journée qui finit à l’heure.',
      note: 'Exemple construit · durées fictives ; à mesurer chez vous sur une semaine.',
    },
  },
  en: {
    dossier: {
      title: 'One patient’s file, over three years',
      alt: 'One patient’s file over thirty-six months, in five lanes: 12 consultations, 9 prescriptions, 5 lab tests of which the last is awaited, 2 imaging exams and 2 certificates, 30 items in all. A usual treatment has been renewed for 21 months.',
      header: 'Constructed example · a patient followed for three years, each item at its date',
      years: ['2024', '2025', '2026'],
      lanes: ['Consultations', 'Prescriptions', 'Lab tests', 'Imaging', 'Certificates'],
      today: 'today',
      legItem: 'item in the file', legAwaited: 'result awaited', legUsual: 'usual treatment, renewed',
      band: 'The paper file stacks items by date of arrival; the file in the software shows them by kind, over time, at a single glance.',
      tiles: [
        { big: '12 consultations', l1: 'in three years, all in the same place', l2: '30 items: prescriptions, lab tests, imaging' },
        { big: '1 result awaited', l1: 'lab test requested last month', l2: 'visible before the patient walks in', hot: true },
        { big: '21 months', l1: 'of usual treatment, renewed in one gesture', l2: 'the list follows the patient, not memory' },
      ],
      line1: 'Before the patient sits down: the last visit, the current treatment, the allergies recorded, what is awaited.',
      line2: 'Each item is tied to a consultation: you can see why a test was requested, and what was done with it.',
      note: 'Constructed example · fictitious patient, dates and items; no real data.',
    },
    quinze: {
      title: 'Fifteen minutes of consultation, before and after',
      alt: 'A fifteen-minute consultation as two rings. On paper: 9 minutes with the patient, 4 writing the prescription and the certificate by hand, 2 looking for the file. With the software: 13 minutes with the patient, 1 for the prescription, 1 for the file. Four minutes are given back to the patient at each consultation, that is 96 minutes over 24 consultations.',
      header: 'Constructed example · the same 15-minute consultation, timed in two ways',
      left: 'On paper', right: 'With the software', withPatient: 'with the patient', min: 'min',
      paperLabels: ['with the patient', 'prescription and certificate written by hand', 'finding the file, rereading the last visit'],
      softLabels: ['with the patient', 'prescription from favourites, printed', 'file open when the patient arrives'],
      band: 'The software does not shorten the consultation: it gives back to the patient the minutes spent looking for a file and copying out a prescription.',
      tiles: [
        { big: '9 min', l1: 'with the patient, in a 15-minute consultation', l2: '6 minutes writing and searching' },
        { big: '13 min', l1: 'with the patient, for the same consultation', l2: '2 minutes for the file and the prescription', hot: true },
        { big: '4 min', l1: 'given back to the patient at each consultation', l2: 'over 24 consultations: 96 minutes a day' },
      ],
      line1: 'The prescription is composed from the patient’s usual treatment and the doctor’s favourites, then printed legibly.',
      line2: 'What is done with the minutes gained is a choice: more time per patient, or a day that ends on time.',
      note: 'Constructed example · fictitious durations; to be measured in your practice over a week.',
    },
  },
  ar: {
    dossier: {
      title: 'ملف مريض، على ثلاث سنوات',
      alt: 'ملف مريض على ستة وثلاثين شهراً، في خمسة أسطر: 12 فحصاً، 9 وصفات، 5 تحاليل آخرها منتظَر، فحصان بالتصوير، وشهادتان، أي 30 وثيقة. وعلاج معتاد يُجدَّد منذ 21 شهراً.',
      header: 'مثال مركَّب · مريض متابَع منذ ثلاث سنوات، وكل وثيقة في تاريخها',
      years: ['2024', '2025', '2026'],
      lanes: ['الفحوص', 'الوصفات', 'التحاليل', 'التصوير', 'الشهادات'],
      today: 'اليوم',
      legItem: 'وثيقة في الملف', legAwaited: 'نتيجة منتظَرة', legUsual: 'علاج معتاد، يُجدَّد',
      band: 'الملف الورقي يرتّب الوثائق حسب تاريخ وصولها؛ والملف في البرنامج يعرضها حسب نوعها، على الزمن، بنظرة واحدة.',
      tiles: [
        { big: '12 فحصاً', l1: 'في ثلاث سنوات، كلها في المكان نفسه', l2: '30 وثيقة: وصفات، تحاليل، وتصوير' },
        { big: 'نتيجة منتظَرة', l1: 'تحليل طُلب الشهر الماضي', l2: 'تظهر قبل أن يدخل المريض', hot: true },
        { big: '21 شهراً', l1: 'من العلاج المعتاد، يُجدَّد بحركة واحدة', l2: 'القائمة تتبع المريض، لا الذاكرة' },
      ],
      line1: 'قبل أن يجلس المريض: آخر زيارة، العلاج الجاري، الحساسيات المسجَّلة، وما هو منتظَر.',
      line2: 'كل وثيقة مربوطة بفحص: يُعرف لماذا طُلب تحليل، وما فُعل بنتيجته.',
      note: 'مثال مركَّب · مريض وتواريخ ووثائق خيالية؛ ولا معطيات حقيقية.',
    },
    quinze: {
      title: 'خمس عشرة دقيقة من الفحص، قبل وبعد',
      alt: 'فحص من خمس عشرة دقيقة في حلقتين. على الورق: 9 دقائق مع المريض، 4 في كتابة الوصفة والشهادة باليد، ودقيقتان في البحث عن الملف. بالبرنامج: 13 دقيقة مع المريض، دقيقة للوصفة، ودقيقة للملف. أربع دقائق تُعاد إلى المريض في كل فحص، أي 96 دقيقة على 24 فحصاً.',
      header: 'مثال مركَّب · الفحص نفسه من 15 دقيقة، موقَّتاً بطريقتين',
      left: 'على الورق', right: 'بالبرنامج', withPatient: 'مع المريض', min: 'د',
      paperLabels: ['مع المريض', 'الوصفة والشهادة تُكتبان باليد', 'البحث عن الملف، وقراءة آخر زيارة'],
      softLabels: ['مع المريض', 'الوصفة من المفضّلة، مطبوعة', 'الملف مفتوح عند وصول المريض'],
      band: 'البرنامج لا يقصّر الفحص: يعيد إلى المريض الدقائق التي تُقضى في البحث عن ملف وفي نسخ وصفة.',
      tiles: [
        { big: '9 دقائق', l1: 'مع المريض، في فحص من 15 دقيقة', l2: '6 دقائق في الكتابة والبحث' },
        { big: '13 دقيقة', l1: 'مع المريض، للفحص نفسه', l2: 'دقيقتان للملف والوصفة', hot: true },
        { big: '4 دقائق', l1: 'تُعاد إلى المريض في كل فحص', l2: 'على 24 فحصاً: 96 دقيقة في اليوم' },
      ],
      line1: 'الوصفة تُركَّب من العلاج المعتاد للمريض ومن مفضّلة الطبيب، ثم تُطبع مقروءة.',
      line2: 'وما يُفعل بالدقائق المكسوبة اختيار: وقت أكثر لكل مريض، أو يوم ينتهي في وقته.',
      note: 'مثال مركَّب · مدد خيالية؛ تُقاس عندكم على أسبوع.',
    },
  },
};
