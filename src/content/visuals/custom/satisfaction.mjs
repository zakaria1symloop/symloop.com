// Bespoke animated figures for the 2027 "comment mesurer la satisfaction client" post.
//  nps():    how a recommendation score is computed. The 0-to-10 scale in three
//            groups, then a bar of 200 answers whose three segments grow one
//            after another, then the subtraction: 55 % minus 15 % equals +40.
//  boucle(): from a low score to a call back. Six stations around a loop appear
//            in order while the connectors between them are drawn one by one;
//            a counter in the middle says how many low scores were called back
//            within 48 hours.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function pop(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scale(0)}${(at + 1.5).toFixed(1)}%,100%{transform:scale(1)}}`); return `transform-box:fill-box;transform-origin:center;animation:${P}-${id} ${LOOP}s linear infinite`; }
function growX(css, P, id, at, dur, rtl) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'} center;animation:${P}-${id} ${LOOP}s linear infinite`; }
function drawLine(css, P, id, at, dur, len) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{stroke-dashoffset:${len.toFixed(0)}}${(at + dur).toFixed(1)}%,100%{stroke-dashoffset:0}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
const TINT = 'rgba(242,181,68,0.06)';
const DARK = '#0b0b0b';
const PALE = 'rgba(255,255,255,0.85)';

function tiles(c, css, P, ky, ts, at0) {
  let s = '';
  ts.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, at0 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? TINT : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  return s;
}
const motionOff = (P) => `@media (prefers-reduced-motion: reduce){svg [style*="${P}-"]{animation:none !important}}`;

// 200 answers: detractors, passives, promoters
const PARTS = [30, 60, 110];

export function nps(t, rtl) {
  const c = ctx(rtl); const P = 'sn'; const css = []; const H = 592;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const x0 = 185, bw = 70, gap = 6; const bx = (n) => x0 + n * (bw + gap);
  s += `<g style="animation:${show(css, P, 'q', 4)}">` + text(c, x0, 148, t.question, { size: 10.5, fill: C.fg, weight: 500 }) + '</g>';
  let scale = '';
  for (let n = 0; n <= 10; n++) {
    const g = n <= 6 ? 0 : n <= 8 ? 1 : 2;
    scale += rect(c, bx(n), 158, bw, 36, { stroke: g === 0 ? C.accent : g === 1 ? C.fg55 : PALE, fill: g === 0 ? TINT : g === 1 ? C.fill : PALE }) + text(c, bx(n) + bw / 2, 181, String(n), { size: 12, font: 'mono', fill: g === 0 ? C.accent : g === 1 ? C.fg70 : '#000', weight: 500, anchor: 'middle' });
  }
  s += `<g style="animation:${show(css, P, 'sc', 6)}">${scale}</g>`;
  const mids = [(bx(0) + bx(6) + bw) / 2, (bx(7) + bx(8) + bw) / 2, (bx(9) + bx(10) + bw) / 2];
  t.groups.forEach((g, i) => { s += `<g style="animation:${show(css, P, `g${i}`, 9 + i * 3)}">` + text(c, mids[i], 212, g, { size: 9.5, fill: i === 0 ? C.accent : i === 1 ? C.fg70 : C.fg, weight: 500, anchor: 'middle' }) + '</g>'; });
  // the bar of 200 answers
  const total = 830; let acc = 0;
  s += `<g style="animation:${show(css, P, 'bl', 19)}">` + text(c, x0, 244, t.barLabel, { size: 9.5, font: 'mono', fill: C.fg55 }) + '</g>';
  PARTS.forEach((n, i) => {
    const w = (n / 200) * total; const x = x0 + acc; acc += w; const at = 21 + i * 6;
    s += `<g style="${growX(css, P, `b${i}`, at, 4, rtl)}">` + rect(c, x, 252, w, 34, { stroke: i === 0 ? C.accent : i === 1 ? C.fg55 : PALE, fill: i === 0 ? C.accent : i === 1 ? C.fill : PALE }) + '</g>';
    s += `<g style="animation:${show(css, P, `v${i}`, at + 4)}">` + text(c, x + w / 2, 274, t.parts[i], { size: 11, font: 'mono', fill: i === 1 ? C.fg : '#000', weight: 500, anchor: 'middle' }) + '</g>';
  });
  // the subtraction
  const chips = [[330, 200, t.f1, false], [570, 200, t.f2, false], [820, 130, t.f3, true]];
  chips.forEach(([x, w, label, hot], i) => {
    s += `<g style="${pop(css, P, `c${i}`, 42 + i * 4)}">` + rect(c, x, 308, w, 36, { stroke: hot ? C.accent : C.fg55, fill: hot ? C.accent : C.fill }) + text(c, x + w / 2, 331, label, { size: 13, font: 'mono', fill: hot ? '#000' : C.fg, weight: 500, anchor: 'middle' }) + '</g>';
  });
  s += `<g style="animation:${show(css, P, 'op', 46)}">` + text(c, 550, 332, '−', { size: 16, font: 'mono', fill: C.fg, anchor: 'middle' }) + text(c, 795, 332, '=', { size: 16, font: 'mono', fill: C.fg, anchor: 'middle' }) + '</g>';
  const by = 372;
  s += `<g style="animation:${show(css, P, 'bd', 56)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 432;
  s += tiles(c, css, P, ky, t.tiles, 60);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// six stations: column (0..2), row (0 top, 1 bottom), in the order they are visited
const STOPS = [[0, 0], [1, 0], [2, 0], [2, 1], [1, 1], [0, 1]];

export function boucle(t, rtl) {
  const c = ctx(rtl); const P = 'sb'; const css = []; const H = 592;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const sx = (col) => 110 + col * 360; const sy = (row) => 150 + row * 140; const w = 260, h = 56;
  // connectors, in the order of the loop: start point, end point, length
  const seg = [
    [sx(0) + w, sy(0) + 28, sx(1), sy(0) + 28, 100], [sx(1) + w, sy(0) + 28, sx(2), sy(0) + 28, 100],
    [sx(2) + w / 2, sy(0) + h, sx(2) + w / 2, sy(1), 84],
    [sx(2), sy(1) + 28, sx(1) + w, sy(1) + 28, 100], [sx(1), sy(1) + 28, sx(0) + w, sy(1) + 28, 100],
    [sx(0) + w / 2, sy(1), sx(0) + w / 2, sy(0) + h, 84],
  ];
  STOPS.forEach(([col, row], k) => {
    const at = 5 + k * 8; const hot = k === 2; const x = sx(col), y = sy(row);
    s += `<g style="animation:${show(css, P, `s${k}`, at)}">` + rect(c, x, y, w, h, { stroke: hot ? C.accent : C.fg35, fill: hot ? TINT : DARK })
      + circle(c, x + 20, y + 28, 10, { fill: hot ? C.accent : 'none', stroke: hot ? C.accent : C.fg70, sw: 1.5 }) + text(c, x + 20, y + 31.5, String(k + 1), { size: 9.5, font: 'mono', fill: hot ? '#000' : C.fg, weight: 500, anchor: 'middle' })
      + text(c, x + 40, y + 24, t.stops[k][0], { size: 10.5, fill: hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 40, y + 42, t.stops[k][1], { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>';
    const [x1, y1, x2, y2, len] = seg[k];
    s += `<polyline points="${c.X(x1)},${y1} ${c.X(x2)},${y2}" fill="none" stroke="${k === 3 ? C.accent : C.fg55}" stroke-width="${k === 3 ? 2.5 : 1.5}" stroke-dasharray="${len}" style="animation:${drawLine(css, P, `l${k}`, at + 3, 4, len)}"/>`;
  });
  // delays on four connectors
  s += `<g style="animation:${show(css, P, 'd0', 12)}">` + text(c, sx(0) + w + 50, sy(0) + 20, t.delays[0], { size: 8.5, font: 'mono', fill: C.fg70, anchor: 'middle' }) + '</g>';
  s += `<g style="animation:${show(css, P, 'd1', 28)}">` + text(c, sx(2) + w / 2 + 12, sy(0) + h + 46, t.delays[1], { size: 8.5, font: 'mono', fill: C.fg70 }) + '</g>';
  s += `<g style="animation:${show(css, P, 'd2', 36)}">` + text(c, sx(1) + w + 50, sy(1) + 20, t.delays[2], { size: 8.5, font: 'mono', fill: C.accent, weight: 500, anchor: 'middle' }) + '</g>';
  s += `<g style="animation:${show(css, P, 'd3', 52)}">` + text(c, sx(0) + w / 2 - 12, sy(0) + h + 46, t.delays[3], { size: 8.5, font: 'mono', fill: C.fg70, anchor: 'end' }) + '</g>';
  // counter in the middle of the loop
  s += `<g style="${pop(css, P, 'ct', 56)}">` + rect(c, sx(1) - 30, sy(0) + h + 22, w + 60, 46, { stroke: C.accent, fill: TINT }) + text(c, sx(1) + w / 2, sy(0) + h + 42, t.counter, { size: 11, font: 'mono', fill: C.accent, weight: 500, anchor: 'middle' }) + text(c, sx(1) + w / 2, sy(0) + h + 58, t.counterSub, { size: 8.5, fill: C.fg55, anchor: 'middle' }) + '</g>';
  const by = 372;
  s += `<g style="animation:${show(css, P, 'bd', 60)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 432;
  s += tiles(c, css, P, ky, t.tiles, 63);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    nps: {
      title: 'Calculer un score de recommandation',
      alt: 'L’échelle de 0 à 10 en trois groupes : détracteurs de 0 à 6, passifs 7 et 8, promoteurs 9 et 10. Puis une barre de 200 réponses : 30 détracteurs, soit 15 % ; 60 passifs, soit 30 % ; 110 promoteurs, soit 55 %. Le score est la part des promoteurs moins la part des détracteurs : 55 moins 15, soit plus 40.',
      header: 'Exemple construit · 200 réponses à une seule question · trois groupes, une soustraction',
      question: '« Recommanderiez-vous notre entreprise à un confrère ? » De 0, pas du tout, à 10, certainement.',
      groups: ['détracteurs · de 0 à 6', 'passifs · 7 et 8', 'promoteurs · 9 et 10'],
      barLabel: '200 réponses, rangées dans les trois groupes',
      parts: ['30 · 15 %', '60 · 30 %', '110 · 55 %'],
      f1: '55 % promoteurs', f2: '15 % détracteurs', f3: '+40',
      band: 'Le score ne se lit pas seul : ce sont la raison écrite sous la note, et l’évolution d’un semestre à l’autre, qui disent quoi changer.',
      tiles: [
        { big: '+40', l1: '55 % de promoteurs moins 15 % de détracteurs', l2: 'les passifs comptent dans le total, pas dans le score', hot: true },
        { big: 'une question, puis une', l1: 'la note, et « pourquoi cette note ? »', l2: 'la raison vaut plus que le chiffre' },
        { big: 'deux fois par an', l1: 'la recommandation mesure la relation, pas une livraison', l2: 'après chaque prestation : une note sur 5' },
      ],
      line1: 'Le même score peut cacher deux entreprises : beaucoup de passifs, ou des promoteurs et des détracteurs qui se compensent.',
      line2: 'D’où la règle : regarder les trois parts, et lire les raisons des détracteurs une par une.',
      note: 'Exemple construit · 200 réponses ; méthode du score de recommandation (NPS), popularisée en 2003.',
    },
    boucle: {
      title: 'D’une note basse à un rappel, en quarante-huit heures',
      alt: 'Une boucle de six étapes. Un : la prestation est terminée. Deux : la question est envoyée dans l’heure. Trois : le client donne une note basse, 2 sur 5, avec sa raison. Quatre : une alerte part aussitôt vers un responsable nommé. Cinq : le client est rappelé sous 48 heures. Six : la cause est codée et corrigée avant la prestation suivante. Au centre : sur douze notes basses du mois, onze ont été rappelées sous 48 heures.',
      header: 'Exemple construit · une note basse suivie jusqu’au bout · six étapes, un délai par passage',
      stops: [
        ['Prestation terminée', 'livraison, intervention, dossier clos'],
        ['Question envoyée', 'un lien, une note sur 5, un pourquoi'],
        ['Note basse : 2 sur 5', '« en retard, personne n’a prévenu »'],
        ['Alerte au responsable', 'une personne nommée, pas une boîte commune'],
        ['Rappel du client', 'on écoute, on répare, on note'],
        ['Cause codée, corrigée', 'retard, erreur, accueil, qualité'],
      ],
      delays: ['dans l’heure', 'aussitôt', 'sous 48 h', 'avant la suivante'],
      counter: '11 notes basses sur 12 rappelées sous 48 h',
      counterSub: 'la douzième : numéro injoignable, message laissé',
      band: 'Une note basse sans rappel apprend au client que répondre ne sert à rien : c’est le rappel, pas l’enquête, qui change quelque chose.',
      tiles: [
        { big: '48 heures', l1: 'entre la note basse et le rappel, par une personne nommée', l2: 'au-delà, le rappel arrive trop tard pour réparer', hot: true },
        { big: 'la cause, pas la note', l1: 'chaque note basse reçoit une cause, parmi cinq ou six', l2: 'le lundi, on compte les causes' },
        { big: 'dire ce qui a changé', l1: '« vous nous l’avez dit, voici ce que nous avons fait »', l2: 'c’est ce qui fait répondre la fois suivante' },
      ],
      line1: 'Mesurer sans rappeler, c’est collectionner des notes : la satisfaction ne monte que si une note basse déclenche quelque chose.',
      line2: 'Et la cause codée transforme douze histoires en un chiffre : sept retards sur douze, c’est un problème de planification.',
      note: 'Exemple construit · douze notes basses en un mois, onze rappelées dans les deux jours.',
    },
  },
  en: {
    nps: {
      title: 'Computing a recommendation score',
      alt: 'The 0-to-10 scale in three groups: detractors from 0 to 6, passives 7 and 8, promoters 9 and 10. Then a bar of 200 answers: 30 detractors, or 15%; 60 passives, or 30%; 110 promoters, or 55%. The score is the share of promoters minus the share of detractors: 55 minus 15, which gives plus 40.',
      header: 'Constructed example · 200 answers to a single question · three groups, one subtraction',
      question: '“Would you recommend our company to a colleague?” From 0, not at all, to 10, certainly.',
      groups: ['detractors · 0 to 6', 'passives · 7 and 8', 'promoters · 9 and 10'],
      barLabel: '200 answers, sorted into the three groups',
      parts: ['30 · 15%', '60 · 30%', '110 · 55%'],
      f1: '55% promoters', f2: '15% detractors', f3: '+40',
      band: 'The score is not read on its own: the reason written under the rating, and the change from one half-year to the next, say what to change.',
      tiles: [
        { big: '+40', l1: '55% promoters minus 15% detractors', l2: 'passives count in the total, not in the score', hot: true },
        { big: 'one question, then one', l1: 'the rating, and “why this rating?”', l2: 'the reason is worth more than the figure' },
        { big: 'twice a year', l1: 'recommendation measures the relationship, not one delivery', l2: 'after each job: a rating out of 5' },
      ],
      line1: 'The same score can hide two companies: many passives, or promoters and detractors cancelling each other out.',
      line2: 'Hence the rule: look at the three shares, and read the detractors’ reasons one by one.',
      note: 'Constructed example · 200 answers; recommendation score method (NPS), popularised in 2003.',
    },
    boucle: {
      title: 'From a low rating to a call back, in forty-eight hours',
      alt: 'A loop of six steps. One: the job is finished. Two: the question is sent within the hour. Three: the customer gives a low rating, 2 out of 5, with the reason. Four: an alert goes straight to a named manager. Five: the customer is called back within 48 hours. Six: the cause is coded and corrected before the next job. In the centre: of twelve low ratings in the month, eleven were called back within 48 hours.',
      header: 'Constructed example · one low rating followed to the end · six steps, a time limit per passage',
      stops: [
        ['Job finished', 'delivery, call-out, file closed'],
        ['Question sent', 'a link, a rating out of 5, a why'],
        ['Low rating: 2 out of 5', '“late, and nobody warned us”'],
        ['Alert to the manager', 'a named person, not a shared mailbox'],
        ['Customer called back', 'listen, repair, record'],
        ['Cause coded, corrected', 'lateness, error, reception, quality'],
      ],
      delays: ['within the hour', 'straight away', 'within 48 h', 'before the next one'],
      counter: '11 low ratings out of 12 called back within 48 h',
      counterSub: 'the twelfth: number unreachable, message left',
      band: 'A low rating with no call back teaches the customer that answering is pointless: it is the call back, not the survey, that changes something.',
      tiles: [
        { big: '48 hours', l1: 'between the low rating and the call back, by a named person', l2: 'beyond that, the call comes too late to repair', hot: true },
        { big: 'the cause, not the rating', l1: 'each low rating gets a cause, out of five or six', l2: 'on Monday, the causes are counted' },
        { big: 'say what changed', l1: '“you told us, here is what we did”', l2: 'that is what gets an answer next time' },
      ],
      line1: 'Measuring without calling back is collecting ratings: satisfaction only rises if a low rating triggers something.',
      line2: 'And the coded cause turns twelve stories into one figure: seven late deliveries out of twelve is a planning problem.',
      note: 'Constructed example · twelve low ratings in a month, eleven called back within two days.',
    },
  },
  ar: {
    nps: {
      title: 'حساب مؤشر التوصية',
      alt: 'السلّم من 0 إلى 10 في ثلاث مجموعات: المنتقدون من 0 إلى 6، المحايدون 7 و8، والمروّجون 9 و10. ثم شريط من 200 جواب: 30 منتقداً، أي 15 بالمئة؛ 60 محايداً، أي 30 بالمئة؛ و110 مروّجين، أي 55 بالمئة. والمؤشر هو حصة المروّجين ناقص حصة المنتقدين: 55 ناقص 15، أي زائد 40.',
      header: 'مثال مركَّب · 200 جواب عن سؤال واحد · ثلاث مجموعات، وطرح واحد',
      question: '«هل تنصحون زميلاً بمؤسستنا؟» من 0، أبداً، إلى 10، بالتأكيد.',
      groups: ['المنتقدون · من 0 إلى 6', 'المحايدون · 7 و8', 'المروّجون · 9 و10'],
      barLabel: '200 جواب، مرتَّبة في المجموعات الثلاث',
      parts: ['⁦30 · 15%⁩', '⁦60 · 30%⁩', '⁦110 · 55%⁩'],
      f1: 'المروّجون ⁦55%⁩', f2: 'المنتقدون ⁦15%⁩', f3: '⁦+40⁩',
      band: 'المؤشر لا يُقرأ وحده: السبب المكتوب تحت العلامة، والتطور من سداسي إلى آخر، هما اللذان يقولان ما يُغيَّر.',
      tiles: [
        { big: '⁦+40⁩', l1: 'حصة المروّجين ناقص حصة المنتقدين', l2: 'المحايدون يُحسبون في المجموع، لا في المؤشر', hot: true },
        { big: 'سؤال، ثم سؤال', l1: 'العلامة، و«لماذا هذه العلامة؟»', l2: 'السبب أثمن من الرقم' },
        { big: 'مرتان في السنة', l1: 'التوصية تقيس العلاقة، لا توصيلاً واحداً', l2: 'وبعد كل خدمة: علامة من 5' },
      ],
      line1: 'المؤشر نفسه قد يخفي مؤسستين: محايدون كثيرون، أو مروّجون ومنتقدون يتعادلون.',
      line2: 'ومن هنا القاعدة: النظر إلى الحصص الثلاث، وقراءة أسباب المنتقدين واحداً واحداً.',
      note: 'مثال مركَّب · 200 جواب؛ طريقة مؤشر التوصية، التي شاعت سنة 2003.',
    },
    boucle: {
      title: 'من علامة ضعيفة إلى مكالمة، في ثمانٍ وأربعين ساعة',
      alt: 'حلقة من ست مراحل. الأولى: انتهت الخدمة. الثانية: يُرسَل السؤال في الساعة. الثالثة: الزبون يعطي علامة ضعيفة، 2 من 5، مع سببه. الرابعة: تنبيه يخرج حالاً نحو مسؤول معيَّن بالاسم. الخامسة: يُتَّصل بالزبون خلال 48 ساعة. السادسة: يُرمَّز السبب ويُصحَّح قبل الخدمة الموالية. وفي الوسط: من اثنتي عشرة علامة ضعيفة في الشهر، إحدى عشرة تلتها مكالمة خلال 48 ساعة.',
      header: 'مثال مركَّب · علامة ضعيفة متابَعة إلى آخرها · ست مراحل، وأجل لكل انتقال',
      stops: [
        ['انتهت الخدمة', 'توصيل، تدخّل، أو ملف مغلق'],
        ['أُرسل السؤال', 'رابط، علامة من 5، ولماذا'],
        ['علامة ضعيفة: 2 من 5', '«تأخر، ولم يُعلمنا أحد»'],
        ['تنبيه للمسؤول', 'شخص معيَّن بالاسم، لا علبة مشتركة'],
        ['مكالمة للزبون', 'نستمع، نصلح، وندوّن'],
        ['السبب مرمَّز ومصحَّح', 'تأخر، خطأ، استقبال، أو جودة'],
      ],
      delays: ['في الساعة', 'حالاً', 'خلال 48 ساعة', 'قبل الموالية'],
      counter: '11 علامة ضعيفة من 12 تلتها مكالمة خلال 48 ساعة',
      counterSub: 'والثانية عشرة: رقم لا يجيب، وتُركت رسالة',
      band: 'علامة ضعيفة دون مكالمة تعلّم الزبون أن الجواب لا ينفع: المكالمة، لا الاستبيان، هي التي تغيّر شيئاً.',
      tiles: [
        { big: '48 ساعة', l1: 'بين العلامة الضعيفة والمكالمة، من شخص معيَّن بالاسم', l2: 'وبعدها، تأتي المكالمة متأخرة عن الإصلاح', hot: true },
        { big: 'السبب، لا العلامة', l1: 'كل علامة ضعيفة تأخذ سبباً، من خمسة أو ستة', l2: 'ويوم الاثنين، تُعدّ الأسباب' },
        { big: 'قول ما تغيّر', l1: '«قلتم لنا، وهذا ما فعلناه»', l2: 'وهو ما يجعلهم يجيبون في المرة الموالية' },
      ],
      line1: 'القياس دون مكالمة جمع للعلامات: الرضا لا يرتفع إلا إذا أطلقت العلامة الضعيفة شيئاً.',
      line2: 'والسبب المرمَّز يحوّل اثنتي عشرة حكاية إلى رقم: سبعة تأخرات من اثني عشر مشكل تخطيط.',
      note: 'مثال مركَّب · اثنتا عشرة علامة ضعيفة في شهر، وإحدى عشرة تلتها مكالمة في يومين.',
    },
  },
};
