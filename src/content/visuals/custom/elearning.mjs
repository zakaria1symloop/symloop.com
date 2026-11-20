// Bespoke animated figures for the 2027 "comment créer une plateforme de formation en ligne" page.
//  debit():    one learner's connection during a twelve-minute lesson, in megabits per second,
//              against the four qualities the lesson is encoded in (240p 0.3, 360p 0.6,
//              480p 1.2, 720p 2.5). A single 720p file cannot keep up during 8 minutes of 12
//              and weighs 225 MB; an adaptive stream picks the quality the connection holds
//              (with a 20 % margin), never waits and uses 90.75 MB.
//  parcours(): 1 000 learners enrolled in a course of twenty lessons. 780 start, and the curve
//              falls lesson after lesson to 190 at the end (19 %). 220 never start; after the
//              start, the largest drop, 150 learners, is at lesson 6, the only 48-minute lesson.
// Numbers are drawn in their own text elements, direction="ltr".
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, open, heading, esc } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function pop(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scale(0)}${(at + 1.2).toFixed(1)}%,100%{transform:scale(1)}}`); return `transform-box:fill-box;transform-origin:center;animation:${P}-${id} ${LOOP}s linear infinite`; }
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
const poly = (c, pts, color, sw, dash) => `<polyline points="${pts.map(([x, y]) => `${c.X(x)},${y}`).join(' ')}" fill="none" stroke="${color}" stroke-width="${sw || 1}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const pathLen = (pts) => Math.ceil(pts.slice(1).reduce((a, p, i) => a + Math.hypot(p[0] - pts[i][0], p[1] - pts[i][1]), 0));
const grp = (n, sep) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, sep);

// the connection, minute by minute (Mbit/s), and the four encodings of the lesson
const BW = [3.2, 2.8, 1.5, 0.9, 0.7, 1.4, 2.2, 3.0, 0.5, 0.8, 1.9, 3.1];
const LADDER = [{ q: 720, r: 2.5 }, { q: 480, r: 1.2 }, { q: 360, r: 0.6 }, { q: 240, r: 0.3 }];
const pick = (bw) => LADDER.find((l) => l.r <= bw * 0.8 + 1e-9) || LADDER[LADDER.length - 1];
const SHADE = { 720: C.fg35, 480: 'rgba(255,255,255,0.14)', 360: 'rgba(255,255,255,0.09)', 240: 'rgba(255,255,255,0.05)' };
const VX = (m) => 190 + m * 55;
const BY = (v) => 320 - v * 37;

export function debit(t, rtl) {
  const c = ctx(rtl); const P = 'vq'; const css = []; const H = 686;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  let frame = rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + text(c, 96, 170, t.chartTitle, { size: 11, fill: C.fg, weight: 500 }) + poly(c, [[VX(0), 320], [VX(12), 320]], C.line2);
  LADDER.forEach((l) => { frame += poly(c, [[VX(0), BY(l.r)], [VX(12), BY(l.r)]], C.line, 1, '3 4') + num(c, 164, BY(l.r) + 3, `${l.q}p`, { size: 8.5, fill: C.fg70 }); });
  frame += text(c, 96, 362, t.rowFile, { size: 9.5, fill: C.fg }) + text(c, 96, 400, t.rowAdapt, { size: 9.5, fill: C.fg });
  BW.forEach((_, m) => { frame += num(c, VX(m) + 27.5, 424, String(m + 1), { size: 9, fill: C.fg55 }); });
  frame += text(c, 96, 440, t.axis, { size: 8.5, fill: C.fg55 });
  [[C.fg35, C.fg55, t.legPlay], [SOFT, C.accent, t.legWait]].forEach(([fill, stroke, label], i) => { frame += rect(c, 870 + i * 110, 386, 12, 12, { stroke, fill }) + text(c, 890 + i * 110, 397, label, { size: 9.5, fill: C.fg70 }); });
  s += `<g style="animation:${show(css, P, 'pa', 3)}">${frame}</g>`;
  // the connection
  const line = BW.map((v, m) => [VX(m) + 27.5, BY(v)]);
  s += `<polyline points="${line.map(([x, y]) => `${c.X(x)},${y}`).join(' ')}" fill="none" stroke="${C.fg}" stroke-width="1.6" style="${drawLine(css, P, 'bw', 5, 9, pathLen(line))}"/>`;
  // a single 720p file, then the adaptive stream
  let mb = 0; let waits = 0;
  BW.forEach((v, m) => {
    const ok = v >= LADDER[0].r; if (!ok) waits += 1;
    const x = VX(m) + 2;
    s += `<g style="animation:${show(css, P, `f${m}`, 15 + m * 0.6)}">` + rect(c, x, 346, 51, 24, { stroke: ok ? C.fg55 : C.accent, fill: ok ? C.fg35 : SOFT }) + (ok ? '' : poly(c, [[x + 22, 353], [x + 22, 363]], C.accent, 2) + poly(c, [[x + 29, 353], [x + 29, 363]], C.accent, 2)) + '</g>';
    const l = pick(v); mb += l.r * 60 / 8;
    s += `<g style="animation:${show(css, P, `a${m}`, 23 + m * 0.6)}">` + rect(c, x, 384, 51, 24, { stroke: C.fg55, fill: SHADE[l.q] }) + num(c, x + 25.5, 400, String(l.q), { size: 9, fill: C.fg }) + '</g>';
  });
  const fileMb = LADDER[0].r * 60 / 8 * BW.length;
  [[t.cards[0], t.cardBig[0].replace('{v}', String(Math.round(fileMb))), t.cardSub[0].replace('{n}', String(waits)), true], [t.cards[1], t.cardBig[1].replace('{v}', String(Math.round(mb))), t.cardSub[1], false]].forEach(([title, big, sub, hot], i) => {
    const y = 196 + i * 92;
    s += `<g style="${pop(css, P, `c${i}`, 32 + i * 3)}">` + rect(c, 870, y, 234, 80, { stroke: hot ? C.accent : C.line2, fill: hot ? TINT : C.fill }) + text(c, 884, y + 22, title, { size: 10, fill: hot ? C.accent : C.fg, weight: 500 }) + text(c, 884, y + 48, big, { size: 17, font: 'mono', fill: hot ? C.accent : C.fg, weight: 500 }) + text(c, 884, y + 68, sub, { size: 9, fill: C.fg70 }) + '</g>';
  });
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bd', 39)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 43);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// learners who finished each of the twenty lessons, and the length of each lesson in minutes
const ENROLLED = 1000;
const DONE = [780, 720, 670, 620, 560, 410, 390, 370, 350, 335, 320, 305, 290, 275, 260, 245, 230, 215, 200, 190];
const MIN = [9, 11, 8, 12, 10, 48, 9, 10, 12, 8, 11, 9, 10, 12, 9, 11, 10, 8, 12, 9];
const LX = (n) => 150 + n * 45;
const LY = (v) => 404 - v * 0.2;
const CLIFF = 5;

export function parcours(t, rtl) {
  const c = ctx(rtl); const P = 'el'; const css = []; const H = 686;
  const iso = (str) => (rtl ? `⁦${str}⁩` : str);
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  let frame = rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + text(c, 96, 170, t.chartTitle, { size: 11, fill: C.fg, weight: 500 }) + poly(c, [[120, 404], [LX(20), 404]], C.line2)
    + poly(c, [[120, LY(500)], [LX(20), LY(500)]], C.line, 1, '3 4') + num(c, 102, LY(500) + 3, '500', { size: 9, fill: C.fg55 }) + text(c, 96, 424, t.durLabel, { size: 8.5, fill: C.fg55 });
  [1, 5, 10, 15, 20].forEach((n) => { frame += num(c, LX(n - 1) + 22.5, 447, String(n), { size: 8.5, fill: C.fg55 }); });
  s += `<g style="animation:${show(css, P, 'pa', 3)}">${frame}</g>`;
  // the step curve
  const pts = [[120, LY(ENROLLED)], [LX(0), LY(ENROLLED)]];
  DONE.forEach((v, n) => { pts.push([LX(n), LY(v)], [LX(n + 1), LY(v)]); });
  const area = [...pts, [LX(20), 404], [120, 404]];
  s += `<g style="animation:${show(css, P, 'ar', 20)}"><polygon points="${area.map(([x, y]) => `${c.X(x)},${y}`).join(' ')}" fill="rgba(255,255,255,0.07)" stroke="none"/>` + rect(c, LX(CLIFF), LY(DONE[CLIFF]), 45, DONE[CLIFF] * 0.2, { stroke: 'none', fill: SOFT }) + '</g>';
  s += `<polyline points="${pts.map(([x, y]) => `${c.X(x)},${y}`).join(' ')}" fill="none" stroke="${C.fg}" stroke-width="1.6" style="${drawLine(css, P, 'cv', 5, 14, pathLen(pts))}"/>`;
  // the largest drop
  s += `<g style="animation:${show(css, P, 'cl', 23)}">` + poly(c, [[LX(CLIFF), LY(DONE[CLIFF - 1])], [LX(CLIFF), LY(DONE[CLIFF])]], C.accent, 3) + text(c, LX(CLIFF) + 12, LY(DONE[CLIFF - 1]) - 6, t.cliff, { size: 10, fill: C.accent, weight: 500 }) + '</g>';
  s += `<g style="animation:${show(css, P, 'l0', 25)}">` + text(c, 124, LY(ENROLLED) - 8, t.lblStart.replace('{v}', iso(grp(ENROLLED, t.sep))), { size: 10, fill: C.fg, weight: 500 }) + text(c, LX(0) + 8, LY(DONE[0]) - 8, t.lblBegin.replace('{v}', String(DONE[0])), { size: 9.5, fill: C.fg70 }) + '</g>';
  s += `<g style="animation:${show(css, P, 'l1', 27)}">` + text(c, LX(20), LY(DONE[19]) - 8, t.lblEnd.replace('{v}', String(DONE[19])), { size: 10, fill: C.fg, weight: 500, anchor: 'end' }) + '</g>';
  // the length of each lesson, hanging under the axis
  let bars = '';
  MIN.forEach((m, n) => { bars += rect(c, LX(n) + 12, 410, 21, m * 0.5, { stroke: n === CLIFF ? C.accent : C.fg55, fill: n === CLIFF ? C.accent : C.fg35 }); });
  s += `<g style="animation:${show(css, P, 'du', 30)}">${bars}</g>`;
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
    debit: {
      title: 'Une leçon de douze minutes, sur une connexion qui varie',
      alt: 'La connexion d’un élève pendant une leçon de douze minutes, entre 0,5 et 3,2 mégabits par seconde, comparée aux quatre qualités de la leçon : 240p, 360p, 480p et 720p. Un fichier unique en 720p pèse 225 Mo et s’arrête pendant 8 minutes sur 12, quand la connexion passe sous 2,5 mégabits par seconde. Un flux adaptatif choisit à chaque minute la qualité que la connexion tient : il ne s’arrête jamais et consomme 91 Mo.',
      header: 'Exemple construit · une leçon de douze minutes, la connexion mobile d’un élève',
      chartTitle: 'La connexion de l’élève, minute par minute, et les quatre qualités de la leçon',
      rowFile: 'fichier 720p', rowAdapt: 'flux adaptatif', axis: 'minutes de la leçon',
      legPlay: 'lecture', legWait: 'attente',
      cards: ['Un seul fichier en 720p', 'Un flux adaptatif'], cardBig: ['{v} Mo', '{v} Mo'], cardSub: ['{n} minutes sur 12 en attente', 'aucune attente, qualité ajustée'],
      band: 'Un fichier unique s’arrête dès que la connexion faiblit ; un flux adaptatif baisse la qualité et continue. L’élève termine la leçon, avec deux fois et demie moins de données.',
      tiles: [
        { big: '4 qualités', l1: 'la même leçon encodée en 240p, 360p, 480p et 720p', l2: 'découpée en segments de quelques secondes' },
        { big: '8 minutes sur 12', l1: 'où la connexion ne suit pas un fichier en 720p', l2: 'la vidéo s’arrête, l’élève décroche', hot: true },
        { big: '91 Mo au lieu de 225', l1: 'le lecteur choisit la qualité que la connexion tient', l2: 'aucune attente pendant la leçon' },
      ],
      line1: 'Débit adaptatif : la source est encodée à plusieurs débits, et le lecteur passe de l’un à l’autre selon la connexion.',
      line2: 'Le lien de lecture est signé et expire : la vidéo ne se récupère pas comme un fichier que l’on fait suivre.',
      note: 'Exemple construit · débits, connexion et tailles fictifs.',
    },
    parcours: {
      title: 'Sur 1 000 inscrits, à quelle leçon s’arrêtent-ils ?',
      alt: 'Un cours de vingt leçons et 1 000 inscrits. 780 terminent la première leçon, 560 la cinquième, 410 la sixième, et 190 la vingtième, soit 19 % des inscrits. Une fois le cours commencé, le plus gros décrochage, 150 élèves, se produit à la leçon 6, la seule qui dure 48 minutes quand les autres en durent de 8 à 12.',
      header: 'Exemple construit · un cours de vingt leçons, 1 000 inscrits',
      chartTitle: 'Élèves ayant terminé chaque leçon · en dessous, la durée de chaque leçon', sep: ' ',
      durLabel: 'durée',
      cliff: 'leçon 6 : 48 minutes d’un seul bloc, 150 élèves s’arrêtent',
      lblStart: '{v} inscrits', lblBegin: '{v} commencent', lblEnd: '{v} terminent',
      band: 'La plateforme ne vend pas seulement un accès : elle montre à quelle leçon les élèves s’arrêtent, et c’est là que le cours se retravaille.',
      tiles: [
        { big: '1 000 inscrits', l1: '780 terminent la première leçon', l2: '220 n’ouvrent jamais le cours' },
        { big: 'leçon 6', l1: '48 minutes d’un seul bloc : 150 élèves s’arrêtent', l2: 'le plus gros décrochage après le démarrage', hot: true },
        { big: '190 terminent', l1: '19 % des inscrits vont au bout', l2: 'le chiffre à suivre, cours par cours' },
      ],
      line1: 'Chaque leçon terminée est enregistrée ; la courbe se lit par cours, par groupe et par période d’inscription.',
      line2: 'Une leçon de 48 minutes se découpe en quatre ; une relance part aux élèves arrêtés depuis dix jours.',
      note: 'Exemple construit · cours, durées et effectifs fictifs.',
    },
  },
  en: {
    debit: {
      title: 'A twelve-minute lesson, on a connection that varies',
      alt: 'A learner’s connection during a twelve-minute lesson, between 0.5 and 3.2 megabits per second, compared with the lesson’s four qualities: 240p, 360p, 480p and 720p. A single 720p file weighs 225 MB and stops for 8 minutes of 12, when the connection falls below 2.5 megabits per second. An adaptive stream picks, each minute, the quality the connection can hold: it never stops and uses 91 MB.',
      header: 'Constructed example · a twelve-minute lesson, one learner’s mobile connection',
      chartTitle: 'The learner’s connection, minute by minute, and the lesson’s four qualities',
      rowFile: '720p file', rowAdapt: 'adaptive stream', axis: 'minutes of the lesson',
      legPlay: 'playing', legWait: 'waiting',
      cards: ['A single 720p file', 'An adaptive stream'], cardBig: ['{v} MB', '{v} MB'], cardSub: ['{n} minutes of 12 spent waiting', 'no waiting, quality adjusted'],
      band: 'A single file stops as soon as the connection weakens; an adaptive stream lowers the quality and carries on. The learner finishes the lesson, with two and a half times less data.',
      tiles: [
        { big: '4 qualities', l1: 'the same lesson encoded in 240p, 360p, 480p and 720p', l2: 'cut into segments of a few seconds' },
        { big: '8 minutes of 12', l1: 'when the connection cannot follow a 720p file', l2: 'the video stops, the learner drops off', hot: true },
        { big: '91 MB instead of 225', l1: 'the player picks the quality the connection holds', l2: 'no waiting during the lesson' },
      ],
      line1: 'Adaptive bitrate: the source is encoded at several bit rates, and the player switches between them with the connection.',
      line2: 'The playback link is signed and expires: the video cannot be taken away like a file that gets forwarded.',
      note: 'Constructed example · fictitious bit rates, connection and sizes.',
    },
    parcours: {
      title: 'Of 1,000 enrolled, at which lesson do they stop?',
      alt: 'A course of twenty lessons and 1,000 learners enrolled. 780 finish the first lesson, 560 the fifth, 410 the sixth, and 190 the twentieth, that is 19% of those enrolled. Once the course has started, the largest drop, 150 learners, happens at lesson 6, the only one lasting 48 minutes when the others last 8 to 12.',
      header: 'Constructed example · a course of twenty lessons, 1,000 enrolled',
      chartTitle: 'Learners who finished each lesson · below, the length of each lesson', sep: ',',
      durLabel: 'length',
      cliff: 'lesson 6: 48 minutes in one block, 150 learners stop',
      lblStart: '{v} enrolled', lblBegin: '{v} start', lblEnd: '{v} finish',
      band: 'The platform does not only sell access: it shows at which lesson learners stop, and that is where the course gets reworked.',
      tiles: [
        { big: '1,000 enrolled', l1: '780 finish the first lesson', l2: '220 never open the course' },
        { big: 'lesson 6', l1: '48 minutes in one block: 150 learners stop', l2: 'the largest drop after the start', hot: true },
        { big: '190 finish', l1: '19% of those enrolled reach the end', l2: 'the figure to follow, course by course' },
      ],
      line1: 'Each finished lesson is recorded; the curve can be read per course, per group and per enrolment period.',
      line2: 'A 48-minute lesson is cut into four; a reminder goes to learners who stopped ten days ago.',
      note: 'Constructed example · fictitious course, lengths and numbers.',
    },
  },
  ar: {
    debit: {
      title: 'درس من اثنتي عشرة دقيقة، على اتصال يتغيّر',
      alt: 'اتصال متعلّم خلال درس من اثنتي عشرة دقيقة، بين 0,5 و3,2 ميغابت في الثانية، مقارناً بالجودات الأربع للدرس: 240p، 360p، 480p، و720p. ملف واحد بجودة 720p يزن 225 ميغابايت ويتوقف 8 دقائق من 12، حين ينزل الاتصال تحت 2,5 ميغابت في الثانية. والبث المتكيّف يختار في كل دقيقة الجودة التي يتحمّلها الاتصال: لا يتوقف أبداً ويستهلك 91 ميغابايت.',
      header: 'مثال مركَّب · درس من اثنتي عشرة دقيقة، واتصال هاتف متعلّم',
      chartTitle: 'اتصال المتعلّم، دقيقة بدقيقة، والجودات الأربع للدرس',
      rowFile: 'ملف ⁦720p⁩', rowAdapt: 'بث متكيّف', axis: 'دقائق الدرس',
      legPlay: 'تشغيل', legWait: 'انتظار',
      cards: ['ملف واحد بجودة ⁦720p⁩', 'بث متكيّف'], cardBig: ['{v} ميغابايت', '{v} ميغابايت'], cardSub: ['{n} دقائق من 12 في الانتظار', 'لا انتظار، والجودة تتكيّف'],
      band: 'الملف الواحد يتوقف فور ضعف الاتصال؛ والبث المتكيّف ينزل بالجودة ويواصل. والمتعلّم ينهي الدرس، ببيانات أقل مرتين ونصفاً.',
      tiles: [
        { big: '4 جودات', l1: 'الدرس نفسه مرمَّز بأربع جودات، من ⁦240p⁩ إلى ⁦720p⁩', l2: 'مقطَّع إلى أجزاء من بضع ثوانٍ' },
        { big: '8 دقائق من 12', l1: 'لا يتحمّل فيها الاتصال ملفاً بجودة ⁦720p⁩', l2: 'الفيديو يتوقف، والمتعلّم ينسحب', hot: true },
        { big: '91 ميغابايت بدل 225', l1: 'المشغّل يختار الجودة التي يتحمّلها الاتصال', l2: 'لا انتظار خلال الدرس' },
      ],
      line1: 'البث المتكيّف: المصدر يُرمَّز بعدة معدلات، والمشغّل ينتقل من واحد إلى آخر حسب الاتصال.',
      line2: 'رابط التشغيل موقَّع وينتهي: الفيديو لا يؤخذ كملف يُعاد إرساله.',
      note: 'مثال مركَّب · معدلات واتصال وأحجام خيالية.',
    },
    parcours: {
      title: 'من 1000 مسجَّل، عند أي درس يتوقفون؟',
      alt: 'دورة من عشرين درساً و1000 مسجَّل. 780 ينهون الدرس الأول، 560 الخامس، 410 السادس، و190 العشرين، أي 19 بالمئة من المسجَّلين. وبعد الانطلاق، أكبر انسحاب، 150 متعلّماً، يحدث عند الدرس 6، الوحيد الذي يدوم 48 دقيقة بينما تدوم البقية من 8 إلى 12.',
      header: 'مثال مركَّب · دورة من عشرين درساً، و1000 مسجَّل',
      chartTitle: 'المتعلّمون الذين أنهوا كل درس · وفي الأسفل، مدة كل درس', sep: ' ',
      durLabel: 'المدة',
      cliff: 'الدرس 6: 48 دقيقة دفعة واحدة، و150 متعلّماً يتوقفون',
      lblStart: '{v} مسجَّل', lblBegin: '{v} يبدؤون', lblEnd: '{v} ينهون',
      band: 'المنصة لا تبيع الدخول فقط: تُظهر عند أي درس يتوقف المتعلّمون، وهناك تُعاد صياغة الدورة.',
      tiles: [
        { big: '⁦1 000⁩ مسجَّل', l1: '780 ينهون الدرس الأول', l2: '220 لا يفتحون الدورة أبداً' },
        { big: 'الدرس 6', l1: '48 دقيقة دفعة واحدة: 150 متعلّماً يتوقفون', l2: 'أكبر انسحاب بعد الانطلاق', hot: true },
        { big: '190 ينهون', l1: '⁦19 %⁩ من المسجَّلين يصلون إلى النهاية', l2: 'الرقم الذي يُتابَع، دورة بدورة' },
      ],
      line1: 'كل درس منتهٍ يُسجَّل؛ والمنحنى يُقرأ لكل دورة، لكل فوج، ولكل فترة تسجيل.',
      line2: 'درس من 48 دقيقة يُقسَّم إلى أربعة؛ وتذكير ينطلق إلى من توقفوا منذ عشرة أيام.',
      note: 'مثال مركَّب · دورة ومدد وأعداد خيالية.',
    },
  },
};
