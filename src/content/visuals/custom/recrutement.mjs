// Bespoke animated figures for the 2027 "logiciel de recrutement" page.
//  parcours(): a recruitment campaign as a six-column board. 3 000 applications for 20 jobs become
//              2 580 people once 420 duplicates are merged, then 1 290 eligible, 240 shortlisted,
//              120 invited, 96 interviewed and 20 job offers ("proposition" in French, so that
//              "offre" is not confused with the posting). One file is followed across the board:
//              received and eligible on day 0, shortlisted on day 4, invited on day 6, interviewed
//              on day 13, offer on day 21.
//  delais():   the four phases after the closing date, before and with the platform, as a
//              dumbbell chart in days: sorting 30 -> 6, invitations 12 -> 2, interviews 14 -> 12,
//              decision 6 -> 3. Total 62 -> 23 days.
// Numbers are drawn in their own text elements, direction="ltr".
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
const grp = (n, sep) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, sep);

// the campaign: applications received, duplicates, then the six columns of the board
const RECEIVED = 3000; const DUPLICATES = 420;
const BOARD = [2580, 1290, 240, 120, 96, 20];
const DAYS = [0, 0, 4, 6, 13, 21];
const STEP = 168; const CW = 156;
const CX = (i) => 100 + i * STEP;

export function parcours(t, rtl) {
  const c = ctx(rtl); const P = 'rj'; const css = []; const H = 686;
  const iso = (str) => (rtl ? `⁦${str}⁩` : str);
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + text(c, 96, 170, t.chartTitle, { size: 11, fill: C.fg, weight: 500 }) + poly(c, [[CX(0) + CW / 2, 304], [CX(5) + CW / 2, 304]], C.line2, 1, '3 4') + '</g>';
  BOARD.forEach((n, i) => {
    const x = CX(i); const last = i === BOARD.length - 1; const at = 5 + i * 3;
    s += `<g style="animation:${show(css, P, `c${i}`, at)}">` + rect(c, x, 184, CW, 212, { stroke: last ? C.accent : C.line2, fill: last ? TINT : C.fill }) + text(c, x + 10, 202, t.cols[i], { size: 10, fill: last ? C.accent : C.fg, weight: 500 })
      + ltrSpans(c.X(x + 10), 226, [[grp(n, t.sep), last ? C.accent : C.fg, true]], 16, rtl ? 'end' : 'start') + text(c, x + 10, 258, t.subs[i], { size: 8.5, fill: C.fg55 })
      + rect(c, x + 12, 284, CW - 24, 40, { stroke: C.fg35, fill: 'none', dash: '3 4' }) + text(c, x + CW / 2, 344, t.triggers[i], { size: 8.5, fill: C.fg70, anchor: 'middle' }) + text(c, x + CW / 2, 362, t.day.replace('{d}', String(DAYS[i])), { size: 9, font: 'mono', fill: C.fg55, anchor: 'middle' }) + '</g>';
    s += `<g style="${growX(css, P, `b${i}`, at + 0.6, 1.2, rtl)}">` + rect(c, x + 10, 234, Math.max((CW - 20) * n / BOARD[0], 1.5), 6, { stroke: 'none', fill: last ? C.accent : C.fg55 }) + '</g>';
  });
  // one file travels across the board; its resting place is the last column
  const k = rtl ? 1 : -1; const shift = (cols) => `translateX(${k * cols * STEP}px)`;
  css.push(`@keyframes ${P}-card{0%,24%{${'transform:' + shift(5)};opacity:0}26%,32%{transform:${shift(5)};opacity:1}36%,42%{transform:${shift(4)};opacity:1}46%,52%{transform:${shift(3)};opacity:1}56%,62%{transform:${shift(2)};opacity:1}66%,72%{transform:${shift(1)};opacity:1}76%,100%{transform:translateX(0);opacity:1}}`);
  s += `<g style="animation:${P}-card ${LOOP}s linear infinite">` + rect(c, CX(5) + 12, 284, CW - 24, 40, { stroke: C.accent, fill: C.accent }) + text(c, CX(5) + CW / 2, 308, t.file, { size: 10, fill: DARK, weight: 500, anchor: 'middle' }) + '</g>';
  s += `<g style="animation:${show(css, P, 'ft', 34)}">` + text(c, 96, 422, t.foot.replace('{r}', iso(grp(RECEIVED, t.sep))).replace('{d}', String(DUPLICATES)), { size: 10, fill: C.fg70 }) + '</g>';
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bd', 38)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 42);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// days per phase after the closing date: [before, with the platform]
const PHASES = [[30, 6], [12, 2], [14, 12], [6, 3]];
const DX = (d) => 330 + d * 13.4;
const RY = (i) => 222 + i * 46;

export function delais(t, rtl) {
  const c = ctx(rtl); const P = 'dd'; const css = []; const H = 686;
  const before = PHASES.reduce((a, p) => a + p[0], 0); const after = PHASES.reduce((a, p) => a + p[1], 0);
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  let frame = rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + text(c, 96, 170, t.chartTitle, { size: 11, fill: C.fg, weight: 500 }) + poly(c, [[DX(0), 396], [DX(32), 396]], C.line2);
  [0, 10, 20, 30].forEach((d) => { frame += poly(c, [[DX(d), 200], [DX(d), 396]], C.line, 1, '3 4') + num(c, DX(d), 412, String(d), { size: 9, fill: C.fg55 }); });
  frame += text(c, DX(32), 430, t.axis, { size: 8.5, fill: C.fg55, anchor: 'end' });
  frame += dot(c, 610, 166, 5, C.fg35, C.fg55, 1.5) + text(c, 622, 170, t.legBefore, { size: 9.5, fill: C.fg70 }) + dot(c, 700, 166, 5, C.accent, C.accent) + text(c, 712, 170, t.legAfter, { size: 9.5, fill: C.fg70 });
  s += `<g style="animation:${show(css, P, 'pa', 3)}">${frame}</g>`;
  PHASES.forEach(([b, a], i) => {
    const y = RY(i); const at = 6 + i * 6; const gain = b - a; const small = gain <= 3;
    s += `<g style="animation:${show(css, P, `l${i}`, at)}">` + text(c, 96, y + 4, t.phases[i], { size: 10.5, fill: C.fg, weight: 500 }) + '</g>';
    s += `<g style="${pop(css, P, `b${i}`, at + 0.6)}">` + dot(c, DX(b), y, 7, C.fg35, C.fg55, 1.5) + '</g>';
    s += `<g style="${growX(css, P, `x${i}`, at + 1.8, 1.6, !rtl)}">` + rect(c, DX(a), y - 1.5, DX(b) - DX(a), 3, { stroke: 'none', fill: C.fg55 }) + '</g>';
    s += `<g style="${pop(css, P, `a${i}`, at + 3.4)}">` + dot(c, DX(a), y, 7, C.accent, C.accent) + '</g>';
    s += `<g style="animation:${show(css, P, `v${i}`, at + 4.4)}">` + num(c, DX(b), y - 13, String(b), { size: 10, fill: C.fg70 }) + num(c, DX(a), y - 13, String(a), { size: 10, bold: true, fill: C.accent }) + text(c, DX(b) + 16, y + 4, t.gains ? t.gains[i] : t.gain.replace('{n}', String(gain)), { size: 9.5, fill: small ? C.fg55 : C.accent }) + '</g>';
  });
  [[t.cards[0], before, false], [t.cards[1], after, true]].forEach(([title, n, hot], i) => {
    const y = 204 + i * 98;
    s += `<g style="${pop(css, P, `c${i}`, 31 + i * 3)}">` + rect(c, 890, y, 214, 86, { stroke: hot ? C.accent : C.line2, fill: hot ? TINT : C.fill }) + text(c, 902, y + 22, title, { size: 10, fill: hot ? C.accent : C.fg, weight: 500 }) + text(c, 902, y + 52, t.total.replace('{n}', String(n)), { size: 18, font: 'mono', fill: hot ? C.accent : C.fg, weight: 500 }) + text(c, 902, y + 72, t.cardSub, { size: 9, fill: C.fg70 }) + '</g>';
  });
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
    parcours: {
      title: 'Vingt postes, 3 000 candidatures : où en est chaque dossier',
      alt: 'Une campagne de recrutement sur un tableau à six colonnes. 3 000 candidatures pour 20 postes deviennent 2 580 personnes une fois 420 doublons fusionnés, puis 1 290 éligibles selon les critères annoncés, 240 présélectionnées, 120 convoquées, 96 reçues en entretien et 20 propositions d’embauche. Un dossier est suivi sur le tableau : reçu et éligible au jour 0, présélectionné au jour 4, convoqué au jour 6, entretien au jour 13, proposition au jour 21.',
      header: 'Exemple construit · une campagne, vingt postes, 3 000 candidatures',
      chartTitle: 'Le tableau de la campagne : six étapes, et un dossier suivi de la première à la dernière', sep: ' ',
      cols: ['Reçues', 'Éligibles', 'Présélection', 'Convoqués', 'Entretien passé', 'Proposition'],
      subs: ['une personne, un dossier', 'critères annoncés', 'lecture et grille', 'créneau choisi', '24 absents', 'pour 20 postes'],
      triggers: ['formulaire déposé', 'règle automatique', 'lecture par deux personnes', 'message de convocation', 'entretien noté', 'décision'],
      day: 'jour {d}', file: 'dossier 1 847',
      foot: '{r} candidatures reçues, {d} doublons fusionnés : la même personne avait postulé plusieurs fois.',
      band: 'Un dossier par personne, une étape à la fois : tout le monde sait où en est chaque candidature, y compris la personne qui a postulé.',
      tiles: [
        { big: '3 000 candidatures', l1: 'pour 20 postes, par un seul formulaire', l2: '420 doublons fusionnés : 2 580 personnes' },
        { big: '1 290 éligibles', l1: 'selon les critères écrits dans l’annonce', l2: 'la même règle pour tout le monde' },
        { big: '21 jours', l1: 'du dépôt à la proposition, pour le dossier suivi', l2: 'chaque étape datée, chaque message envoyé', hot: true },
      ],
      line1: 'Chaque changement d’étape envoie un message : accusé de réception, convocation, réponse.',
      line2: 'La personne qui postule suit son dossier avec son numéro : elle n’écrit plus pour demander où elle en est.',
      note: 'Exemple construit · postes, candidatures et délais fictifs.',
    },
    delais: {
      title: 'De la clôture à la proposition : où se gagnent les jours',
      alt: 'Les quatre phases après la clôture des candidatures, avant et avec la plateforme, en jours. Tri des candidatures : 30 jours avant, 6 avec. Convocations : 12 avant, 2 avec. Entretiens : 14 avant, 12 avec. Décision et réponses : 6 avant, 3 avec. Total : 62 jours avant, 23 jours avec la plateforme.',
      header: 'Exemple construit · la même campagne, avant et avec la plateforme',
      chartTitle: 'Jours passés dans chaque phase, après la clôture', axis: 'jours',
      legBefore: 'avant', legAfter: 'avec la plateforme',
      phases: ['Tri des candidatures', 'Convocations', 'Entretiens', 'Décision et réponses'],
      gain: '{n} jours gagnés',
      cards: ['Avant', 'Avec la plateforme'], total: '{n} jours', cardSub: 'de la clôture à la proposition',
      band: 'Le gain n’est pas dans les entretiens : il est dans tout ce qui les précède, le tri, les doublons, les appels pour convoquer.',
      tiles: [
        { big: '62 jours', l1: 'de la clôture des candidatures à la proposition, avant', l2: 'tri 30, convocations 12, entretiens 14, décision 6' },
        { big: '23 jours', l1: 'avec la plateforme', l2: 'tri 6, convocations 2, entretiens 12, décision 3', hot: true },
        { big: 'entretiens : 14 puis 12', l1: 'le temps des personnes ne se compresse pas', l2: 'le gain est dans le tri et les convocations' },
      ],
      line1: 'Tri : les critères annoncés s’appliquent seuls, les doublons sont fusionnés, la lecture commence par les dossiers complets.',
      line2: 'Convocations : un message avec un créneau à choisir remplace des jours d’appels sans réponse.',
      note: 'Exemple construit · délais fictifs, pour vingt postes et 3 000 candidatures.',
    },
  },
  en: {
    parcours: {
      title: 'Twenty jobs, 3,000 applications: where each file stands',
      alt: 'A recruitment campaign on a six-column board. 3,000 applications for 20 jobs become 2,580 people once 420 duplicates are merged, then 1,290 eligible on the announced criteria, 240 shortlisted, 120 invited, 96 interviewed and 20 offers. One file is followed across the board: received and eligible on day 0, shortlisted on day 4, invited on day 6, interviewed on day 13, offer on day 21.',
      header: 'Constructed example · one campaign, twenty jobs, 3,000 applications',
      chartTitle: 'The campaign board: six stages, and one file followed from the first to the last', sep: ',',
      cols: ['Received', 'Eligible', 'Shortlist', 'Invited', 'Interviewed', 'Offer'],
      subs: ['one person, one file', 'announced criteria', 'reading and grid', 'slot chosen', '24 no-shows', 'for 20 jobs'],
      triggers: ['form submitted', 'automatic rule', 'read by two people', 'invitation message', 'interview scored', 'decision'],
      day: 'day {d}', file: 'file 1,847',
      foot: '{r} applications received, {d} duplicates merged: the same person had applied several times.',
      band: 'One file per person, one stage at a time: everybody knows where each application stands, including the person who applied.',
      tiles: [
        { big: '3,000 applications', l1: 'for 20 jobs, through a single form', l2: '420 duplicates merged: 2,580 people' },
        { big: '1,290 eligible', l1: 'on the criteria announced in the posting', l2: 'the same rule for everyone' },
        { big: '21 days', l1: 'from submission to offer for the file followed', l2: 'each stage dated, each message sent', hot: true },
      ],
      line1: 'Each change of stage sends a message: acknowledgement, invitation, answer.',
      line2: 'The applicant follows the file with its number: they no longer write to ask where things stand.',
      note: 'Constructed example · fictitious jobs, applications and delays.',
    },
    delais: {
      title: 'From closing date to offer: where the days are gained',
      alt: 'The four phases after the closing date, before and with the platform, in days. Sorting applications: 30 days before, 6 with. Invitations: 12 before, 2 with. Interviews: 14 before, 12 with. Decision and answers: 6 before, 3 with. Total: 62 days before, 23 days with the platform.',
      header: 'Constructed example · the same campaign, before and with the platform',
      chartTitle: 'Days spent in each phase, after the closing date', axis: 'days',
      legBefore: 'before', legAfter: 'with the platform',
      phases: ['Sorting applications', 'Invitations', 'Interviews', 'Decision and answers'],
      gain: '{n} days gained',
      cards: ['Before', 'With the platform'], total: '{n} days', cardSub: 'from closing date to offer',
      band: 'The gain is not in the interviews: it is in everything before them, sorting, duplicates, the calls to invite people.',
      tiles: [
        { big: '62 days', l1: 'from the closing date to the offer, before', l2: 'sorting 30, invitations 12, interviews 14, decision 6' },
        { big: '23 days', l1: 'with the platform', l2: 'sorting 6, invitations 2, interviews 12, decision 3', hot: true },
        { big: 'interviews: 14 then 12', l1: 'people’s time does not compress', l2: 'the gain is in sorting and invitations' },
      ],
      line1: 'Sorting: the announced criteria apply by themselves, duplicates are merged, reading starts with complete files.',
      line2: 'Invitations: a message with a slot to choose replaces days of unanswered calls.',
      note: 'Constructed example · fictitious delays, for twenty jobs and 3,000 applications.',
    },
  },
  ar: {
    parcours: {
      title: 'عشرون منصباً، و3000 ترشح: أين وصل كل ملف',
      alt: 'حملة توظيف على لوحة من ستة أعمدة. 3000 ترشح لعشرين منصباً تصير 2580 شخصاً بعد دمج 420 تكراراً، ثم 1290 مؤهَّلاً حسب المعايير المعلنة، 240 في الانتقاء الأولي، 120 مستدعى، 96 أجروا المقابلة، و20 عرضاً. وملف واحد يُتابَع على اللوحة: مستلَم ومؤهَّل في اليوم 0، منتقى في اليوم 4، مستدعى في اليوم 6، مقابلة في اليوم 13، وعرض في اليوم 21.',
      header: 'مثال مركَّب · حملة واحدة، عشرون منصباً، و3000 ترشح',
      chartTitle: 'لوحة الحملة: ست مراحل، وملف يُتابَع من الأولى إلى الأخيرة', sep: ' ',
      cols: ['المستلَمة', 'المؤهَّلون', 'الانتقاء الأولي', 'المستدعَون', 'أجروا المقابلة', 'العرض'],
      subs: ['شخص واحد، ملف واحد', 'معايير معلنة', 'قراءة وشبكة تنقيط', 'فترة مختارة', '24 غائباً', 'لعشرين منصباً'],
      triggers: ['استمارة مودَعة', 'قاعدة آلية', 'قراءة من شخصين', 'رسالة استدعاء', 'مقابلة منقَّطة', 'القرار'],
      day: 'اليوم {d}', file: 'الملف ⁦1 847⁩',
      foot: '{r} ترشح مستلَم، و{d} تكراراً مدموجاً: الشخص نفسه ترشح عدة مرات.',
      band: 'ملف لكل شخص، ومرحلة في كل مرة: الجميع يعرف أين وصل كل ترشح، بمن فيهم من ترشح.',
      tiles: [
        { big: '⁦3 000⁩ ترشح', l1: 'لعشرين منصباً، باستمارة واحدة', l2: '420 تكراراً مدموجاً: ⁦2 580⁩ شخصاً' },
        { big: '⁦1 290⁩ مؤهَّلاً', l1: 'حسب المعايير المكتوبة في الإعلان', l2: 'القاعدة نفسها للجميع' },
        { big: '21 يوماً', l1: 'من الإيداع إلى العرض للملف المتابَع', l2: 'كل مرحلة مؤرَّخة، وكل رسالة مرسَلة', hot: true },
      ],
      line1: 'كل تغيير مرحلة يرسل رسالة: إشعار استلام، استدعاء، أو جواب.',
      line2: 'من يترشح يتابع ملفه برقمه: لا يكتب بعد ذلك ليسأل أين وصل.',
      note: 'مثال مركَّب · مناصب وترشحات وآجال خيالية.',
    },
    delais: {
      title: 'من إغلاق الترشحات إلى العرض: أين تُربَح الأيام',
      alt: 'المراحل الأربع بعد إغلاق الترشحات، قبل المنصة ومعها، بالأيام. فرز الترشحات: 30 يوماً قبل، و6 مع المنصة. الاستدعاءات: 12 قبل، و2 مع المنصة. المقابلات: 14 قبل، و12 مع المنصة. القرار والأجوبة: 6 قبل، و3 مع المنصة. المجموع: 62 يوماً قبل، و23 يوماً مع المنصة.',
      header: 'مثال مركَّب · الحملة نفسها، قبل المنصة ومعها',
      chartTitle: 'الأيام المقضية في كل مرحلة، بعد الإغلاق', axis: 'أيام',
      legBefore: 'قبل', legAfter: 'مع المنصة',
      phases: ['فرز الترشحات', 'الاستدعاءات', 'المقابلات', 'القرار والأجوبة'],
      gain: '{n} أيام مربوحة', gains: ['24 يوماً مربوحاً', '10 أيام مربوحة', 'يومان مربوحان', '3 أيام مربوحة'],
      cards: ['قبل', 'مع المنصة'], total: '{n} يوماً', cardSub: 'من الإغلاق إلى العرض',
      band: 'الربح ليس في المقابلات: هو في كل ما يسبقها، الفرز، التكرارات، والاتصالات للاستدعاء.',
      tiles: [
        { big: '62 يوماً', l1: 'من إغلاق الترشحات إلى العرض، قبل', l2: 'الفرز 30، الاستدعاءات 12، المقابلات 14، القرار 6' },
        { big: '23 يوماً', l1: 'مع المنصة', l2: 'الفرز 6، الاستدعاءات 2، المقابلات 12، القرار 3', hot: true },
        { big: 'المقابلات: 14 ثم 12', l1: 'وقت الأشخاص لا يُضغَط', l2: 'الربح في الفرز والاستدعاءات' },
      ],
      line1: 'الفرز: المعايير المعلنة تُطبَّق وحدها، التكرارات تُدمَج، والقراءة تبدأ بالملفات الكاملة.',
      line2: 'الاستدعاءات: رسالة بفترة تُختار تعوّض أياماً من الاتصالات دون رد.',
      note: 'مثال مركَّب · آجال خيالية، لعشرين منصباً و3000 ترشح.',
    },
  },
};
