// Bespoke animated figures for the 2027 "logiciel appel d'offres" page.
//  lecture(): the 180 pages of a tender document drawn one by one; 41 of them carry the 64
//             requirements the tool extracts. On the other side, the 64 requirements by family
//             (documents to supply 18, technical 27, dates 6, scoring criteria 5, financial 8),
//             each bar split into covered by the library (49), to produce (12), to clarify (3).
//  compte():  open points on the same bid during the 21 days of preparation, before and with the
//             tool. Before: points are discovered as each person reads their part, 15 on day 18
//             and 2 still open on the deadline. With the tool: the 15 points are known on day 1
//             and closed on day 17, four days before the deadline.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, open, heading, esc } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function growX(css, P, id, at, dur, rtl) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'} center;animation:${P}-${id} ${LOOP}s linear infinite`; }
function drawLine(css, P, id, at, dur, len) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{stroke-dashoffset:${len}}${(at + dur).toFixed(1)}%,100%{stroke-dashoffset:0}}`); return `stroke-dasharray:${len};animation:${P}-${id} ${LOOP}s linear infinite`; }
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
const poly = (c, pts, color, sw, dash, style) => `<polyline points="${pts.map(([x, y]) => `${c.X(x)},${y}`).join(' ')}" fill="none" stroke="${color}" stroke-width="${sw || 1}"${dash ? ` stroke-dasharray="${dash}"` : ''}${style ? ` style="${style}"` : ''}/>`;
const dot = (c, x, y, r, fill, stroke, sw) => `<circle cx="${c.X(x)}" cy="${y}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${sw || 1}"/>`;
const pathLen = (pts) => Math.ceil(pts.slice(1).reduce((a, p, i) => a + Math.hypot(p[0] - pts[i][0], p[1] - pts[i][1]), 0));

// the tender document: 180 pages; pages that carry at least one requirement, by family
const PAGES = 180; const COLS = 30;
const PIECE_PAGES = [9, 10, 11, 12, 13, 14, 15, 22];
const OTHER_PAGES = [4, 5, 23, 24, 28, 29, 30, 41, 44, 47, 52, 58, 63, 66, 71, 77, 80, 84, 91, 95, 102, 108, 113, 119, 124, 141, 146, 152, 158, 163, 167, 171, 174];
// families: [requirements, covered by the library, to produce, to clarify]
const FAMILIES = [[18, 14, 4, 0], [27, 19, 6, 2], [6, 6, 0, 0], [5, 4, 0, 1], [8, 6, 2, 0]];
const U = 14;

export function lecture(t, rtl) {
  const c = ctx(rtl); const P = 'ao'; const css = []; const H = 686;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  // the plain pages
  let grid = rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + text(c, 96, 170, t.chartTitle, { size: 11, fill: C.fg, weight: 500 });
  const cell = (p) => [100 + ((p - 1) % COLS) * 16, 190 + Math.floor((p - 1) / COLS) * 26];
  let pages = '';
  for (let p = 1; p <= PAGES; p += 1) { const [x, y] = cell(p); pages += `<rect x="${c.RX(x, 13)}" y="${y}" width="13" height="22"/>`; }
  grid += `<g fill="${C.fill}" stroke="${C.line2}">${pages}</g>`;
  s += `<g style="animation:${show(css, P, 'pa', 3)}">${grid}</g>`;
  // the reading progress, and the pages that carry a requirement
  s += `<g style="${growX(css, P, 'rd', 6, 30, rtl)}">` + rect(c, 100, 354, 477, 4, { stroke: 'none', fill: C.fg55 }) + '</g>';
  s += `<g style="animation:${show(css, P, 'rl', 36)}">` + text(c, 100, 376, t.read, { size: 9.5, font: 'mono', fill: C.fg70 }) + '</g>';
  for (let r = 0; r < PAGES / COLS; r += 1) {
    const inRow = (p) => Math.floor((p - 1) / COLS) === r;
    const mark = (list, fill) => list.filter(inRow).map((p) => { const [x, y] = cell(p); return `<rect x="${c.RX(x, 13)}" y="${y}" width="13" height="22" fill="${fill}"/>`; }).join('');
    const marks = mark(PIECE_PAGES, C.accent) + mark(OTHER_PAGES, SOFT);
    if (marks) s += `<g stroke="${C.accent}" style="animation:${show(css, P, `r${r}`, 6 + ((r + 1) / (PAGES / COLS)) * 30)}">${marks}</g>`;
  }
  s += `<g style="animation:${show(css, P, 'lg', 38)}">` + rect(c, 100, 392, 11, 11, { stroke: C.accent, fill: C.accent }) + text(c, 118, 402, t.legPiece, { size: 9, fill: C.fg70 }) + rect(c, 330, 392, 11, 11, { stroke: C.accent, fill: SOFT }) + text(c, 348, 402, t.legOther, { size: 9, fill: C.fg70 }) + text(c, 100, 432, t.foot, { size: 10, fill: C.fg70 }) + '</g>';
  // the requirements, by family
  FAMILIES.forEach(([n, cov, prod, clar], i) => {
    const y = 200 + i * 38; const at = 40 + i * 3;
    s += `<g style="animation:${show(css, P, `f${i}`, at)}">` + text(c, 620, y, t.cats[i], { size: 10, fill: C.fg, weight: 500 }) + text(c, 1096, y, String(n), { size: 11, font: 'mono', fill: C.fg, weight: 500, anchor: 'end' }) + '</g>';
    let x = 620;
    s += `<g style="${growX(css, P, `a${i}`, at + 0.6, 1.6, rtl)}">` + rect(c, x, y + 8, cov * U, 8, { stroke: 'none', fill: C.fg55 }) + '</g>'; x += cov * U;
    if (prod) { s += `<g style="${growX(css, P, `b${i}`, at + 2.2, 1, rtl)}">` + rect(c, x, y + 8, prod * U, 8, { stroke: 'none', fill: C.accent }) + '</g>'; x += prod * U; }
    if (clar) { s += `<g style="${growX(css, P, `c${i}`, at + 3.2, 0.8, rtl)}">` + rect(c, x + 1, y + 8, clar * U - 1, 8, { stroke: C.accent, fill: 'none', dash: '3 2' }) + '</g>'; }
  });
  s += `<g style="animation:${show(css, P, 'l2', 56)}">` + rect(c, 620, 392, 11, 11, { stroke: 'none', fill: C.fg55 }) + text(c, 638, 402, t.legCov, { size: 9, fill: C.fg70 }) + rect(c, 800, 392, 11, 11, { stroke: 'none', fill: C.accent }) + text(c, 818, 402, t.legProd, { size: 9, fill: C.fg70 }) + rect(c, 920, 392, 11, 11, { stroke: C.accent, fill: 'none', dash: '3 2' }) + text(c, 938, 402, t.legClar, { size: 9, fill: C.fg70 }) + text(c, 620, 432, t.sum, { size: 10, fill: C.accent }) + '</g>';
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bd', 60)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 64);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// open points per day: [day, points]
const BEFORE = [[0, 0], [3, 4], [7, 7], [12, 11], [16, 13], [18, 15], [19, 11], [20, 6], [21, 2]];
const AFTER = [[0, 0], [1, 15], [4, 11], [8, 7], [12, 3], [15, 1], [17, 0], [21, 0]];
const DX = (d) => 170 + d * 36;
const PY = (n) => 392 - n * 10;

export function compte(t, rtl) {
  const c = ctx(rtl); const P = 'jx'; const css = []; const H = 686;
  const bp = BEFORE.map(([d, n]) => [DX(d), PY(n)]); const ap = AFTER.map(([d, n]) => [DX(d), PY(n)]);
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  let frame = rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + text(c, 96, 170, t.chartTitle, { size: 11, fill: C.fg, weight: 500 }) + poly(c, [[DX(0), 392], [DX(21), 392]], C.line2);
  [5, 10, 15].forEach((n) => { frame += poly(c, [[DX(0), PY(n)], [DX(21), PY(n)]], C.line, 1, '3 4') + num(c, 150, PY(n) + 4, String(n), { size: 9, fill: C.fg55 }); });
  [0, 7, 14, 21].forEach((d) => { frame += num(c, DX(d), 408, String(d), { size: 9, fill: C.fg55 }); });
  frame += text(c, 170, 437, t.axis, { size: 8.5, fill: C.fg55 });
  frame += dot(c, 760, 166, 5, C.fg35, C.fg55, 1.5) + text(c, 772, 170, t.legBefore, { size: 9.5, fill: C.fg70 }) + dot(c, 850, 166, 5, C.accent, C.accent) + text(c, 862, 170, t.legAfter, { size: 9.5, fill: C.fg70 });
  frame += poly(c, [[DX(21), 196], [DX(21), 392]], C.accent, 1.5, '5 4') + text(c, DX(21) + 10, 208, t.deadline, { size: 9.5, fill: C.accent, weight: 500 });
  s += `<g style="animation:${show(css, P, 'pa', 3)}">${frame}</g>`;
  // before: points are discovered late
  s += poly(c, bp, C.fg55, 2, null, drawLine(css, P, 'lb', 6, 24, pathLen(bp)));
  s += `<g style="animation:${show(css, P, 'db', 30)}">` + bp.slice(1).map(([x, y]) => dot(c, x, y, 3.5, C.fg35, C.fg55, 1.5)).join('') + '</g>';
  s += `<g style="animation:${show(css, P, 'pk', 32)}">` + text(c, DX(18) - 12, PY(15) - 8, t.peak, { size: 10, fill: C.fg, weight: 500, anchor: 'end' }) + '</g>';
  s += `<g style="animation:${show(css, P, 'lf', 34)}">` + text(c, DX(21) + 10, PY(2) + 4, t.left, { size: 10, fill: C.fg70 }) + '</g>';
  // with the tool: known on day 1, closed on day 17
  s += poly(c, ap, C.accent, 2.5, null, drawLine(css, P, 'la', 38, 18, pathLen(ap)));
  s += `<g style="animation:${show(css, P, 'da', 56)}">` + ap.slice(1, -1).map(([x, y]) => dot(c, x, y, 4, C.accent, C.accent)).join('') + '</g>';
  s += `<g style="animation:${show(css, P, 'kn', 40)}">` + text(c, DX(1) + 12, PY(15) - 8, t.known, { size: 10, fill: C.accent, weight: 500 }) + '</g>';
  s += `<g style="animation:${show(css, P, 'mg', 58)}">` + poly(c, [[DX(17), 416], [DX(17), 422], [DX(21), 422], [DX(21), 416]], C.accent, 1.5) + text(c, (DX(17) + DX(21)) / 2, 439, t.margin, { size: 10, fill: C.accent, weight: 500, anchor: 'middle' }) + '</g>';
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bd', 62)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 66);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    lecture: {
      title: 'Un cahier des charges de 180 pages : 64 exigences, chacune avec sa page',
      alt: 'Les 180 pages d’un cahier des charges dessinées une à une ; 41 pages portent les 64 exigences extraites. Par famille : 18 pièces à fournir, 27 exigences techniques, 6 dates et délais, 5 critères de notation, 8 conditions financières. 49 sont couvertes par la bibliothèque, 12 sont à produire, 3 à clarifier.',
      header: 'Exemple construit · un cahier des charges, 180 pages, 64 exigences',
      chartTitle: 'Les 180 pages lues, et les 64 exigences par famille',
      read: '180 pages lues', legPiece: 'page avec une pièce à fournir', legOther: 'page avec une autre exigence',
      foot: '41 pages portent les 64 exigences ; 139 n’en portent aucune.',
      cats: ['Pièces à fournir', 'Exigences techniques', 'Dates et délais', 'Critères de notation', 'Conditions financières'],
      legCov: 'couverte par la bibliothèque', legProd: 'à produire', legClar: 'à clarifier',
      sum: '49 couvertes, 12 à produire, 3 à clarifier : 15 points à traiter.',
      band: 'L’outil ne dit pas si l’offre est conforme : il sort la liste, la page d’origine, et ce qui manque.',
      tiles: [
        { big: '180 pages, 64 exigences', l1: 'réparties sur 41 pages du cahier des charges', l2: 'pièces 18, techniques 27, dates 6, critères 5, financières 8' },
        { big: '49 déjà couvertes', l1: 'par la bibliothèque de pièces et de réponses', l2: 'pièces valides, réponses passées, dates notées' },
        { big: '12 à produire, 3 à clarifier', l1: 'connues dès le premier jour', l2: 'au lieu de trois jours avant le dépôt', hot: true },
      ],
      line1: 'Une exigence sans numéro de page n’entre pas dans la liste : la règle protège d’une invention du modèle.',
      line2: 'Les pages scannées passent d’abord par la reconnaissance de caractères ; les pages illisibles sont signalées.',
      note: 'Exemple construit · cahier des charges, exigences et pages fictifs.',
    },
    compte: {
      title: 'Vingt et un jours avant le dépôt : quand sait-on ce qui manque',
      alt: 'Points ouverts connus sur le même dossier pendant les 21 jours de préparation. Avant : 4 points au jour 3, 7 au jour 7, 11 au jour 12, 13 au jour 16, 15 au jour 18 quand la pièce manquante est découverte, 11 au jour 19, 6 au jour 20, et 2 encore ouverts le jour du dépôt. Avec l’outil : 15 points connus au jour 1, 11 au jour 4, 7 au jour 8, 3 au jour 12, 1 au jour 15, aucun au jour 17, soit quatre jours de marge.',
      header: 'Exemple construit · le même dossier, avant et avec l’outil',
      chartTitle: 'Points ouverts connus sur le dossier, jour par jour',
      legBefore: 'avant', legAfter: 'avec l’outil', axis: 'jours depuis le retrait du cahier des charges',
      deadline: 'date limite de dépôt', peak: 'trois jours avant : la pièce manquante', left: '2 points ouverts au dépôt',
      known: 'jour 1 : 15 points connus', margin: 'quatre jours de marge',
      band: 'Le travail est le même : ce qui change, c’est le jour où l’on sait ce qui manque.',
      tiles: [
        { big: 'avant : 15 points au jour 18', l1: 'découverts à mesure que chacun lit sa partie', l2: '2 encore ouverts le jour du dépôt' },
        { big: 'avec l’outil : 15 points au jour 1', l1: '12 à produire, 3 à clarifier, chacun avec une personne', l2: 'aucun au jour 17 : quatre jours de marge', hot: true },
        { big: 'le même dossier', l1: 'le même cahier des charges, les mêmes personnes', l2: 'seul change le jour où l’on sait' },
      ],
      line1: 'Chaque point a une personne et une date ; le tableau montre ce qui reste, pas ce qui est fait.',
      line2: 'Avant l’envoi, un contrôle de complétude compare le dossier à la liste, pièce par pièce, et signale ce qui manque.',
      note: 'Exemple construit · dossier, points et dates fictifs.',
    },
  },
  en: {
    lecture: {
      title: 'A 180-page tender document: 64 requirements, each with its page',
      alt: 'The 180 pages of a tender document drawn one by one; 41 pages carry the 64 requirements extracted. By family: 18 documents to supply, 27 technical requirements, 6 dates and deadlines, 5 scoring criteria, 8 financial conditions. 49 are covered by the library, 12 are to be produced, 3 to be clarified.',
      header: 'Constructed example · one tender document, 180 pages, 64 requirements',
      chartTitle: 'The 180 pages read, and the 64 requirements by family',
      read: '180 pages read', legPiece: 'page with a document to supply', legOther: 'page with another requirement',
      foot: '41 pages carry the 64 requirements; 139 carry none.',
      cats: ['Documents to supply', 'Technical requirements', 'Dates and deadlines', 'Scoring criteria', 'Financial conditions'],
      legCov: 'covered by the library', legProd: 'to produce', legClar: 'to clarify',
      sum: '49 covered, 12 to produce, 3 to clarify: 15 points to handle.',
      band: 'The tool does not say whether the bid is compliant: it produces the list, the source page, and what is missing.',
      tiles: [
        { big: '180 pages, 64 requirements', l1: 'spread over 41 pages of the tender document', l2: 'documents 18, technical 27, dates 6, criteria 5, financial 8' },
        { big: '49 already covered', l1: 'by the library of documents and answers', l2: 'valid documents, past answers, dates noted' },
        { big: '12 to produce, 3 to clarify', l1: 'known from the first day', l2: 'instead of three days before submission', hot: true },
      ],
      line1: 'A requirement with no page number does not enter the list: the rule protects against an invention by the model.',
      line2: 'Scanned pages first go through character recognition; unreadable pages are flagged.',
      note: 'Constructed example · fictitious tender document, requirements and pages.',
    },
    compte: {
      title: 'Twenty-one days before submission: when do you know what is missing',
      alt: 'Known open points on the same bid during the 21 days of preparation. Before: 4 points on day 3, 7 on day 7, 11 on day 12, 13 on day 16, 15 on day 18 when the missing document is discovered, 11 on day 19, 6 on day 20, and 2 still open on submission day. With the tool: 15 points known on day 1, 11 on day 4, 7 on day 8, 3 on day 12, 1 on day 15, none on day 17, that is four days of margin.',
      header: 'Constructed example · the same bid, before and with the tool',
      chartTitle: 'Known open points on the bid, day by day',
      legBefore: 'before', legAfter: 'with the tool', axis: 'days since the tender document was collected',
      deadline: 'submission deadline', peak: 'three days before: the missing document', left: '2 points open at submission',
      known: 'day 1: 15 points known', margin: 'four days of margin',
      band: 'The work is the same: what changes is the day you know what is missing.',
      tiles: [
        { big: 'before: 15 points on day 18', l1: 'discovered as each person reads their part', l2: '2 still open on submission day' },
        { big: 'with the tool: 15 points on day 1', l1: '12 to produce, 3 to clarify, each with a person', l2: 'none on day 17: four days of margin', hot: true },
        { big: 'the same bid', l1: 'the same tender document, the same people', l2: 'only the day you know changes' },
      ],
      line1: 'Each point has a person and a date; the board shows what remains, not what is done.',
      line2: 'Before sending, a completeness check compares the bid with the list, document by document, and flags what is missing.',
      note: 'Constructed example · fictitious bid, points and dates.',
    },
  },
  ar: {
    lecture: {
      title: 'دفتر شروط من 180 صفحة: 64 متطلَّباً، وكل واحد مع صفحته',
      alt: 'صفحات دفتر الشروط الـ180 مرسومة واحدة واحدة؛ 41 صفحة تحمل المتطلبات الـ64 المستخرجة. حسب الصنف: 18 وثيقة مطلوبة، 27 متطلَّباً تقنياً، 6 تواريخ وآجال، 5 معايير تنقيط، و8 شروط مالية. 49 منها تغطيها المكتبة، 12 تُعَدّ، و3 تُستوضَح.',
      header: 'مثال مركَّب · دفتر شروط واحد، 180 صفحة، و64 متطلَّباً',
      chartTitle: 'الصفحات الـ180 المقروءة، والمتطلبات الـ64 حسب الصنف',
      read: '180 صفحة مقروءة', legPiece: 'صفحة فيها وثيقة مطلوبة', legOther: 'صفحة فيها متطلَّب آخر',
      foot: '41 صفحة تحمل المتطلبات الـ64؛ و139 لا تحمل أي متطلَّب.',
      cats: ['الوثائق المطلوبة', 'المتطلبات التقنية', 'التواريخ والآجال', 'معايير التنقيط', 'الشروط المالية'],
      legCov: 'تغطيه المكتبة', legProd: 'يُعَدّ', legClar: 'يُستوضَح',
      sum: '49 مغطّاة، 12 تُعَدّ، و3 تُستوضَح: 15 نقطة للمعالجة.',
      band: 'الأداة لا تقول إن كان العرض مطابقاً: تُخرج القائمة، الصفحة الأصلية، وما ينقص.',
      tiles: [
        { big: '180 صفحة، 64 متطلَّباً', l1: 'موزَّعة على 41 صفحة من دفتر الشروط', l2: 'وثائق 18، تقنية 27، تواريخ 6، معايير 5، مالية 8' },
        { big: '49 مغطّاة من قبل', l1: 'بمكتبة الوثائق والأجوبة', l2: 'وثائق صالحة، أجوبة سابقة، وتواريخ مسجَّلة' },
        { big: '12 تُعَدّ، و3 تُستوضَح', l1: 'معروفة منذ اليوم الأول', l2: 'بدل ثلاثة أيام قبل الإيداع', hot: true },
      ],
      line1: 'متطلَّب دون رقم صفحة لا يدخل القائمة: القاعدة تحمي من اختلاق النموذج.',
      line2: 'الصفحات الممسوحة تمر أولاً بالتعرف على الحروف؛ والصفحات غير المقروءة يُشار إليها.',
      note: 'مثال مركَّب · دفتر شروط ومتطلبات وصفحات خيالية.',
    },
    compte: {
      title: 'واحد وعشرون يوماً قبل الإيداع: متى نعرف ما ينقص',
      alt: 'النقاط المفتوحة المعروفة في الملف نفسه خلال 21 يوماً من التحضير. قبل: 4 نقاط في اليوم 3، 7 في اليوم 7، 11 في اليوم 12، 13 في اليوم 16، 15 في اليوم 18 حين تُكتشَف الوثيقة الناقصة، 11 في اليوم 19، 6 في اليوم 20، ونقطتان ما زالتا مفتوحتين يوم الإيداع. مع الأداة: 15 نقطة معروفة في اليوم 1، 11 في اليوم 4، 7 في اليوم 8، 3 في اليوم 12، 1 في اليوم 15، ولا شيء في اليوم 17، أي أربعة أيام هامشاً.',
      header: 'مثال مركَّب · الملف نفسه، قبل الأداة ومعها',
      chartTitle: 'النقاط المفتوحة المعروفة في الملف، يوماً بيوم',
      legBefore: 'قبل', legAfter: 'مع الأداة', axis: 'الأيام منذ سحب دفتر الشروط',
      deadline: 'آخر أجل للإيداع', peak: 'قبل الأجل بثلاثة أيام: الوثيقة الناقصة', left: 'نقطتان مفتوحتان عند الإيداع',
      known: 'في اليوم 1، 15 نقطة معروفة', margin: 'أربعة أيام هامشاً',
      band: 'العمل هو نفسه: ما يتغيّر هو اليوم الذي نعرف فيه ما ينقص.',
      tiles: [
        { big: 'قبل: 15 نقطة في اليوم 18', l1: 'تُكتشَف كلما قرأ كل واحد جزءه', l2: 'نقطتان ما زالتا مفتوحتين يوم الإيداع' },
        { big: 'مع الأداة: 15 نقطة في اليوم 1', l1: '12 تُعَدّ، 3 تُستوضَح، ولكل واحدة شخص', l2: 'لا شيء في اليوم 17: أربعة أيام هامشاً', hot: true },
        { big: 'الملف نفسه', l1: 'دفتر الشروط نفسه، والأشخاص أنفسهم', l2: 'لا يتغيّر إلا اليوم الذي نعرف فيه' },
      ],
      line1: 'لكل نقطة شخص وتاريخ؛ واللوحة تُظهر ما بقي، لا ما أُنجز.',
      line2: 'قبل الإرسال، مراقبة اكتمال تقارن الملف بالقائمة، وثيقة بوثيقة، وتشير إلى ما ينقص.',
      note: 'مثال مركَّب · ملف ونقاط وتواريخ خيالية.',
    },
  },
};
