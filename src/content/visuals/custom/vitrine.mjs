// Bespoke animated figures for the 2027 "site vitrine en Algérie" page.
//  demandes(): two 10 x 10 grids, one cell per visitor out of a hundred. Current site: 86 never see
//              how to reach the company, 13 reach the Contact page and do nothing, less than one
//              (0.75) calls or writes. Rebuilt site: the contact is on every screen, 97 do nothing,
//              3 (3.2) call or write. Monthly figures of the example: 1 200 visits and 9 requests
//              before, 1 450 visits and 46 requests after.
//  poids():    the home page weight as a stacked bar on two matching scales (megabytes on top,
//              seconds at 4 Mbit/s below, 1 MB = 2 s): 8.0 MB (photos 6.6, scripts 1.0, rest 0.4)
//              = 16 s; 0.8 MB = 1.6 s; with two reference lines, Google's 2.5 s "good" threshold
//              for the main content and the 2.3 MB median mobile page (Web Almanac, October 2024).
// Everything is drawn in logical coordinates and mirrors in RTL. CSS-only animation; base attributes
// are the finished state for the JPG.
import { C, ctx, text, rect, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function growX(css, P, id, at, dur, rtl) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'} center;animation:${P}-${id} ${LOOP}s linear infinite`; }
const TINT = 'rgba(242,181,68,0.06)';
const DARK = '#0b0b0b';
const DIM = 'rgba(255,255,255,0.14)';
const MID = 'rgba(255,255,255,0.55)';

function tiles(c, css, P, ky, ts, at0) {
  let s = '';
  ts.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, at0 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? TINT : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  return s;
}
const motionOff = (P) => `@media (prefers-reduced-motion: reduce){svg [style*="${P}-"]{animation:none !important}}`;
const seg = (c, x1, y1, x2, y2, color, dash) => `<line x1="${c.X(x1)}" y1="${y1}" x2="${c.X(x2)}" y2="${y2}" stroke="${color}" stroke-width="1"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;

// one hundred visitors: [never saw a way to reach the company, saw it and did nothing, called or wrote]
const BEFORE = [86, 13, 1];
const AFTER = [0, 97, 3];

export function demandes(t, rtl) {
  const c = ctx(rtl); const P = 'dq'; const css = []; const H = 686;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + text(c, 96, 170, t.chartTitle, { size: 11, fill: C.fg, weight: 500 }) + '</g>';
  const grid = (gx, counts, id, at) => {
    const cells = [[], [], []]; let n = 0;
    counts.forEach((count, kind) => { for (let k = 0; k < count; k++) { const col = n % 10; const row = Math.floor(n / 10); cells[kind].push(`<rect x="${c.RX(gx + col * 24, 20)}" y="${190 + row * 24}" width="20" height="20"/>`); n++; } });
    let out = '';
    if (cells[0].length) out += `<g fill="${DIM}" style="animation:${show(css, P, `${id}g`, at)}">${cells[0].join('')}</g>`;
    out += `<g fill="${MID}" style="animation:${show(css, P, `${id}m`, at + 6)}">${cells[1].join('')}</g>`;
    out += `<g fill="${C.accent}" style="animation:${show(css, P, `${id}a`, at + 12)}">${cells[2].join('')}</g>`;
    return out;
  };
  const legend = (lx, head, sub, lines, id, at) => {
    let out = `<g style="animation:${show(css, P, `${id}h`, at)}">` + text(c, lx, 204, head, { size: 11.5, fill: C.fg, weight: 500 }) + text(c, lx, 221, sub, { size: 9, font: 'mono', fill: C.fg55 }) + '</g>';
    lines.forEach(([fill, str, hot], i) => { const y = 262 + i * 38; out += `<g style="animation:${show(css, P, `${id}l${i}`, at + i * 6)}">` + rect(c, lx, y - 10, 11, 11, { stroke: 'none', fill }) + text(c, lx + 18, y, str, { size: 10, fill: hot ? C.accent : C.fg, weight: hot ? 500 : 300 }) + '</g>'; });
    return out;
  };
  s += grid(112, BEFORE, 'b', 6);
  s += legend(372, t.before, t.beforeSub, [[DIM, t.lb[0]], [MID, t.lb[1]], [C.accent, t.lb[2], true]], 'x', 6);
  s += `<g style="animation:${show(css, P, 'sp', 28)}">` + seg(c, 600, 190, 600, 426, C.line2, '3 4') + '</g>';
  s += grid(632, AFTER, 'c', 30);
  s += legend(892, t.after, t.afterSub, [[DIM, t.la[0]], [MID, t.la[1]], [C.accent, t.la[2], true]], 'y', 30);
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bn', 60)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 64);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// megabytes of the home page: [photos, scripts, the rest]
const W_BEFORE = [6.6, 1.0, 0.4];
const W_AFTER = [0.36, 0.25, 0.19];

export function poids(t, rtl) {
  const c = ctx(rtl); const P = 'pz'; const css = []; const H = 686;
  const X0 = 150; const PX = 100;                       // 100 px per megabyte, so 50 px per second at 4 Mbit/s
  const xOf = (mb) => X0 + mb * PX;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + text(c, 96, 170, t.chartTitle, { size: 11, fill: C.fg, weight: 500 }) + '</g>';
  // two matching scales: megabytes above, seconds below
  let ax = seg(c, X0, 206, xOf(9), 206, C.line2) + seg(c, X0, 372, xOf(9), 372, C.line2);
  for (let m = 0; m <= 9; m++) ax += seg(c, xOf(m), 202, xOf(m), 206, C.line2) + text(c, xOf(m), 197, String(m), { size: 8.5, font: 'mono', fill: C.fg55, anchor: 'middle' }) + seg(c, xOf(m), 372, xOf(m), 376, C.line2) + text(c, xOf(m), 388, String(m * 2), { size: 8.5, font: 'mono', fill: C.fg55, anchor: 'middle' });
  ax += text(c, xOf(9) + 14, 197, t.unitTop, { size: 8.5, fill: C.fg55 }) + text(c, xOf(9) + 14, 388, t.unitBottom, { size: 8.5, fill: C.fg55 });
  s += `<g style="animation:${show(css, P, 'ax', 5)}">` + ax + '</g>';
  // before: three segments
  const fills = [MID, 'rgba(255,255,255,0.32)', DIM];
  let x = 0;
  s += `<g style="animation:${show(css, P, 'rb', 8)}">` + text(c, 96, 248, t.rowBefore, { size: 10, fill: C.fg70 }) + '</g>';
  W_BEFORE.forEach((w, i) => {
    s += `<g style="${growX(css, P, `b${i}`, 9 + i * 5, 4.5, rtl)}">` + rect(c, xOf(x), 226, w * PX, 34, { stroke: DARK, fill: fills[i] }) + '</g>';
    s += `<g style="animation:${show(css, P, `bl${i}`, 13.5 + i * 5)}">` + text(c, xOf(x) + (w * PX) / 2, 247, t.segBefore[i], { size: 9.5, fill: i === 0 ? DARK : C.fg, anchor: 'middle', weight: 500 }) + '</g>';
    x += w;
  });
  s += `<g style="animation:${show(css, P, 'bt', 26)}">` + text(c, xOf(8) + 12, 240, t.totalBefore[0], { size: 12, font: 'mono', fill: C.fg, weight: 500 }) + text(c, xOf(8) + 12, 256, t.totalBefore[1], { size: 9, fill: C.fg70 }) + '</g>';
  // after: one short bar
  s += `<g style="animation:${show(css, P, 'ra', 34)}">` + text(c, 96, 338, t.rowAfter, { size: 10, fill: C.accent }) + '</g>';
  x = 0;
  W_AFTER.forEach((w, i) => { s += `<g style="${growX(css, P, `a${i}`, 35 + i * 1.5, 1.5, rtl)}">` + rect(c, xOf(x), 316, w * PX, 34, { stroke: DARK, fill: C.accent }) + '</g>'; x += w; });
  s += `<g style="animation:${show(css, P, 'at', 41)}">` + text(c, xOf(2.3) + 14, 330, t.totalAfter[0], { size: 12, font: 'mono', fill: C.accent, weight: 500 }) + text(c, xOf(2.3) + 14, 346, t.totalAfter[1], { size: 9, fill: C.fg70 }) + '</g>';
  // reference lines: 2.5 s (1.25 MB) and the median mobile page, 2.3 MB
  s += `<g style="animation:${show(css, P, 'r1', 47)}">` + seg(c, xOf(1.25), 206, xOf(1.25), 372, C.accent, '4 4') + text(c, xOf(1.25) - 6, 408, t.ref1, { size: 9.5, fill: C.accent, weight: 500, anchor: 'end' }) + seg(c, xOf(1.25), 376, xOf(1.25), 398, C.accent, '2 3') + '</g>';
  s += `<g style="animation:${show(css, P, 'r2', 52)}">` + seg(c, xOf(2.3), 206, xOf(2.3), 372, C.fg70, '4 4') + text(c, xOf(2.3) + 6, 428, t.ref2, { size: 9.5, fill: C.fg70 }) + seg(c, xOf(2.3), 376, xOf(2.3), 418, C.fg70, '2 3') + '</g>';
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bn', 58)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 62);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    demandes: {
      title: 'Cent visiteurs : combien voient comment vous joindre, combien le font',
      alt: 'Deux grilles de cent cases, une case par visiteur. Site actuel : 86 visiteurs ne voient jamais comment joindre l’entreprise, 13 arrivent jusqu’à la page Contact sans suite, et moins d’un, 0,75, appelle ou écrit ; soit 9 demandes pour 1 200 visites par mois. Site refait : le moyen de contact est à chaque écran, 97 visiteurs ne donnent pas suite et 3, précisément 3,2, appellent ou écrivent ; soit 46 demandes pour 1 450 visites.',
      header: 'Exemple construit · un mois de visites, ramené à cent visiteurs',
      chartTitle: 'Sur cent visiteurs : ceux qui voient comment vous joindre, et ceux qui le font',
      before: 'Site actuel', beforeSub: '1 200 visites · 9 demandes', after: 'Site refait', afterSub: '1 450 visites · 46 demandes',
      lb: ['86 ne voient pas comment vous joindre', '13 voient la page Contact, sans suite', 'moins d’un vous joint : 0,75'],
      la: ['0 sans moyen de contact visible', '97 voient le contact, sans suite', '3 vous joignent : 3,2'],
      band: 'Avant de refaire un site, mesurez-le un mois : les visites, ceux qui voient comment vous joindre, ceux qui le font.',
      tiles: [
        { big: '9 demandes par mois', l1: 'pour 1 200 visites, soit 0,75 %', l2: '5 appels, 3 formulaires, 1 message' },
        { big: '2 formulaires perdus', l1: 'ils arrivaient dans une boîte que personne ne lit', l2: '7 demandes traitées sur 9' },
        { big: '46 demandes par mois', l1: 'pour 1 450 visites, soit 3,2 %', l2: '21 appels, 17 messages, 8 formulaires', hot: true },
      ],
      line1: 'Un appel se compte au clic sur le numéro, un message au clic sur le bouton : des intentions, à rapprocher des appels reçus.',
      line2: 'Le taux de conversion est la part des visiteurs qui font ce que le site attend d’eux : ici, vous joindre.',
      note: 'Exemple construit · visites, demandes et taux fictifs.',
    },
    poids: {
      title: 'Huit mégaoctets, seize secondes : le poids d’une page et son temps d’ouverture',
      alt: 'Une barre de poids sur deux échelles, les mégaoctets en haut et les secondes à 4 mégabits par seconde en bas. Avant : la page d’accueil pèse 8 mégaoctets, dont 6,6 pour les photos du diaporama, 1 pour les scripts et 0,4 pour le reste, soit 16 secondes. Après : 0,8 mégaoctet, soit 1,6 seconde. Deux repères : 2,5 secondes, seuil que Google juge bon pour l’affichage du contenu principal, et 2,3 mégaoctets, poids médian d’une page sur mobile en octobre 2024.',
      header: 'Exemple construit · page d’accueil, sur un téléphone à 4 mégabits par seconde',
      chartTitle: 'Le poids de la page d’accueil, et le temps pour la télécharger',
      unitTop: 'Mo', unitBottom: 's', rowBefore: 'Avant', rowAfter: 'Après',
      segBefore: ['photos du diaporama : 6,6 Mo', 'scripts : 1,0', '0,4'],
      totalBefore: ['8,0 Mo · 16 s', 'trois photos de 2,2 Mo'], totalAfter: ['0,8 Mo · 1,6 s', 'photos 0,36 · scripts 0,25 · reste 0,19'],
      ref1: '2,5 s : affichage jugé bon par Google', ref2: '2,3 Mo : page médiane sur mobile, octobre 2024',
      band: 'À débit égal, le temps suit le poids : diviser le poids par dix divise l’attente par dix.',
      tiles: [
        { big: '8,0 Mo · 16 s', l1: 'la page d’accueil actuelle, sur un téléphone', l2: 'dont 6,6 Mo pour trois photos' },
        { big: '2,3 Mo', l1: 'poids médian d’une page sur mobile dans le monde', l2: 'Web Almanac, octobre 2024' },
        { big: '0,8 Mo · 1,6 s', l1: 'les mêmes photos, redimensionnées et compressées', l2: 'sous le repère de 2,5 s', hot: true },
      ],
      line1: 'Le calcul : poids en mégaoctets, multiplié par 8, divisé par le débit en mégabits par seconde. Ici 8 × 8 / 4 = 16 secondes.',
      line2: 'C’est une simplification : le contenu principal peut s’afficher avant la fin. Mesurez sur un vrai téléphone.',
      note: 'Exemple construit · poids, débit et temps fictifs ; médiane lue dans le Web Almanac 2024.',
    },
  },
  en: {
    demandes: {
      title: 'One hundred visitors: how many see how to reach you, how many do',
      alt: 'Two grids of one hundred cells, one cell per visitor. Current site: 86 visitors never see how to reach the company, 13 get to the Contact page and do nothing, and less than one, 0.75, calls or writes; that is 9 requests for 1,200 visits a month. Rebuilt site: the contact is on every screen, 97 visitors do nothing and 3, precisely 3.2, call or write; that is 46 requests for 1,450 visits.',
      header: 'Constructed example · one month of visits, brought down to one hundred visitors',
      chartTitle: 'Out of one hundred visitors: those who see how to reach you, and those who do',
      before: 'Current site', beforeSub: '1,200 visits · 9 requests', after: 'Rebuilt site', afterSub: '1,450 visits · 46 requests',
      lb: ['86 never see how to reach you', '13 see the Contact page, then nothing', 'less than one reaches you: 0.75'],
      la: ['0 without a visible way to reach you', '97 see the contact, then nothing', '3 reach you: 3.2'],
      band: 'Before rebuilding a site, measure it for a month: the visits, those who see how to reach you, those who do.',
      tiles: [
        { big: '9 requests a month', l1: 'for 1,200 visits, that is 0.75%', l2: '5 calls, 3 forms, 1 message' },
        { big: '2 forms lost', l1: 'they landed in a mailbox nobody reads', l2: '7 requests handled out of 9' },
        { big: '46 requests a month', l1: 'for 1,450 visits, that is 3.2%', l2: '21 calls, 17 messages, 8 forms', hot: true },
      ],
      line1: 'A call is counted at the click on the number, a message at the click on the button: intentions, to compare with calls received.',
      line2: 'The conversion rate is the share of visitors who do what the site expects of them: here, reaching you.',
      note: 'Constructed example · fictitious visits, requests and rates.',
    },
    poids: {
      title: 'Eight megabytes, sixteen seconds: the weight of a page and its opening time',
      alt: 'A weight bar on two scales, megabytes on top and seconds at 4 megabits per second below. Before: the home page weighs 8 megabytes, of which 6.6 for the slider photos, 1 for scripts and 0.4 for the rest, that is 16 seconds. After: 0.8 megabytes, that is 1.6 seconds. Two reference lines: 2.5 seconds, the threshold Google considers good for displaying the main content, and 2.3 megabytes, the median weight of a mobile page in October 2024.',
      header: 'Constructed example · home page, on a phone at 4 megabits per second',
      chartTitle: 'The weight of the home page, and the time to download it',
      unitTop: 'MB', unitBottom: 's', rowBefore: 'Before', rowAfter: 'After',
      segBefore: ['slider photos: 6.6 MB', 'scripts: 1.0', '0.4'],
      totalBefore: ['8.0 MB · 16 s', 'three photos of 2.2 MB'], totalAfter: ['0.8 MB · 1.6 s', 'photos 0.36 · scripts 0.25 · rest 0.19'],
      ref1: '2.5 s: display Google considers good', ref2: '2.3 MB: median mobile page, October 2024',
      band: 'At equal speed, time follows weight: dividing the weight by ten divides the wait by ten.',
      tiles: [
        { big: '8.0 MB · 16 s', l1: 'the current home page, on a phone', l2: 'of which 6.6 MB for three photos' },
        { big: '2.3 MB', l1: 'median weight of a mobile page worldwide', l2: 'Web Almanac, October 2024' },
        { big: '0.8 MB · 1.6 s', l1: 'the same photos, resized and compressed', l2: 'under the 2.5 s mark', hot: true },
      ],
      line1: 'The arithmetic: weight in megabytes, times 8, divided by the speed in megabits per second. Here 8 × 8 / 4 = 16 seconds.',
      line2: 'It is a simplification: the main content can display before the end. Measure on a real phone.',
      note: 'Constructed example · fictitious weights, speed and times; median read in the Web Almanac 2024.',
    },
  },
  ar: {
    demandes: {
      title: 'مئة زائر: كم يرى كيف يتصل بكم، وكم يفعل',
      alt: 'شبكتان من مئة خانة، خانة لكل زائر. الموقع الحالي: 86 زائراً لا يرون أبداً كيف يتصلون بالمؤسسة، 13 يصلون إلى صفحة الاتصال دون متابعة، وأقل من واحد، 0,75، يتصل أو يكتب؛ أي 9 طلبات لـ1200 زيارة في الشهر. الموقع المُعاد بناؤه: وسيلة الاتصال في كل شاشة، 97 زائراً لا يتابعون و3، بالتحديد 3,2، يتصلون أو يكتبون؛ أي 46 طلباً لـ1450 زيارة.',
      header: 'مثال مركَّب · شهر من الزيارات، محسوب على مئة زائر',
      chartTitle: 'من مئة زائر: من يرون كيف يتصلون بكم، ومن يفعلون',
      before: 'الموقع الحالي', beforeSub: '⁦1 200⁩ زيارة · 9 طلبات', after: 'الموقع المُعاد بناؤه', afterSub: '⁦1 450⁩ زيارة · 46 طلباً',
      lb: ['86 لا يرون كيف يتصلون بكم', '13 يرون صفحة الاتصال، دون متابعة', 'أقل من واحد يتصل بكم: ⁦0,75⁩'],
      la: ['0 دون وسيلة اتصال ظاهرة', '97 يرون وسيلة الاتصال، دون متابعة', '3 يتصلون بكم: ⁦3,2⁩'],
      band: 'قبل إعادة بناء موقع، قيسوه شهراً: الزيارات، من يرون كيف يتصلون بكم، ومن يفعلون.',
      tiles: [
        { big: '9 طلبات في الشهر', l1: 'لـ1200 زيارة، أي أقل من واحد بالمئة', l2: '5 مكالمات، 3 استمارات، ورسالة' },
        { big: 'استمارتان ضائعتان', l1: 'كانتا تصلان إلى بريد لا يقرؤه أحد', l2: '7 طلبات معالَجة من 9' },
        { big: '46 طلباً في الشهر', l1: 'لـ1450 زيارة، أي أكثر من 3 بالمئة', l2: '21 مكالمة، 17 رسالة، و8 استمارات', hot: true },
      ],
      line1: 'المكالمة تُحسَب عند النقر على الرقم، والرسالة عند النقر على الزر: نوايا، تُقارَن بالمكالمات المستقبَلة.',
      line2: 'معدل التحويل هو حصة الزوار الذين يفعلون ما ينتظره الموقع منهم: هنا، الاتصال بكم.',
      note: 'مثال مركَّب · زيارات وطلبات ونسب خيالية.',
    },
    poids: {
      title: 'ثمانية ميغابايت، ست عشرة ثانية: وزن الصفحة ووقت فتحها',
      alt: 'عمود وزن على سلّمين، الميغابايت في الأعلى والثواني بسرعة 4 ميغابت في الثانية في الأسفل. قبل: الصفحة الرئيسية تزن 8 ميغابايت، منها 6,6 لصور العرض، 1 للسكريبتات، و0,4 للباقي، أي 16 ثانية. بعد: 0,8 ميغابايت، أي 1,6 ثانية. ومعلمان: 2,5 ثانية، الحد الذي تعتبره Google جيداً لعرض المحتوى الرئيسي، و2,3 ميغابايت، الوزن الوسيط لصفحة على الهاتف في أكتوبر 2024.',
      header: 'مثال مركَّب · الصفحة الرئيسية، على هاتف بسرعة 4 ميغابت في الثانية',
      chartTitle: 'وزن الصفحة الرئيسية، والوقت اللازم لتحميلها',
      unitTop: 'ميغابايت', unitBottom: 'ثانية', rowBefore: 'قبل', rowAfter: 'بعد',
      segBefore: ['صور العرض: ⁦6,6⁩ ميغابايت', 'السكريبتات: ⁦1,0⁩', '⁦0,4⁩'],
      totalBefore: ['⁦8,0⁩ ميغا · 16 ثانية', 'ثلاث صور، كل واحدة ⁦2,2⁩ ميغابايت'], totalAfter: ['⁦0,8⁩ ميغا · ⁦1,6⁩ ثانية', 'الصور ⁦0,36⁩ · السكريبتات ⁦0,25⁩ · الباقي ⁦0,19⁩'],
      ref1: '⁦2,5⁩ ثانية: عرض تعتبره ⁦Google⁩ جيداً', ref2: '⁦2,3⁩ ميغابايت: الصفحة الوسيطة على الهاتف، أكتوبر 2024',
      band: 'بسرعة ثابتة، الوقت يتبع الوزن: قسمة الوزن على عشرة تقسم الانتظار على عشرة.',
      tiles: [
        { big: '⁦8,0⁩ ميغا · 16 ثانية', l1: 'الصفحة الرئيسية الحالية، على هاتف', l2: 'منها ⁦6,6⁩ ميغابايت لثلاث صور' },
        { big: '⁦2,3⁩ ميغابايت', l1: 'الوزن الوسيط لصفحة على الهاتف في العالم', l2: 'حسب تقرير صادر في أكتوبر 2024' },
        { big: '⁦0,8⁩ ميغا · ⁦1,6⁩ ثانية', l1: 'الصور نفسها، بعد تغيير أبعادها وضغطها', l2: 'تحت معلم ⁦2,5⁩ ثانية', hot: true },
      ],
      line1: 'الحساب: الوزن بالميغابايت، مضروباً في 8، مقسوماً على السرعة بالميغابت في الثانية. هنا 8 في 8 على 4 يساوي 16 ثانية.',
      line2: 'وهذا تبسيط: المحتوى الرئيسي قد يُعرَض قبل النهاية. قيسوا على هاتف حقيقي.',
      note: 'مثال مركَّب · أوزان وسرعة وأوقات خيالية؛ والوسيط مأخوذ من تقرير سنة 2024.',
    },
  },
};
