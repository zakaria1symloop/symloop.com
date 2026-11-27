// Bespoke animated figures for the 2027 "logiciel de gestion de courrier" page.
//  trajets(): the same incoming letter on two paths over a day axis. Passed from hand to
//             hand: 2 + 5 + 9 + 5 + 2 = 23 days, 8 days after a 15-day reply deadline.
//             Registered and assigned the same day: 1 + 1 + 3 + 1 + 1 = 7 days. The real
//             work is 3 days in both cases; the rest is time spent lying on a desk.
//  encours(): 64 letters awaiting a reply today, one square each: 9 overdue, 14 due within
//             five days, 41 on time; where the 9 overdue ones are (4, 3, 2) and for how long.
// Numbers are drawn in their own text elements, direction="ltr".
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, open, heading, esc } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function pop(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scale(0)}${(at + 1.2).toFixed(1)}%,100%{transform:scale(1)}}`); return `transform-box:fill-box;transform-origin:center;animation:${P}-${id} ${LOOP}s linear infinite`; }
function growX(css, P, id, at, dur, rtl) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'} center;animation:${P}-${id} ${LOOP}s linear infinite`; }
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

// days spent at each of five stops: reception, management, department, signature, dispatch
const PAPER = [2, 5, 9, 5, 2];
const REGISTERED = [1, 1, 3, 1, 1];
const DEADLINE = 15;
const DX = (d) => 250 + d * 33;

export function trajets(t, rtl) {
  const c = ctx(rtl); const P = 'kq'; const css = []; const H = 686;
  const sum = (a) => a.reduce((x, y) => x + y, 0);
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  let frame = rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + poly(c, [[DX(0), 412], [DX(25), 412]], C.line2);
  [0, 5, 10, 15, 20, 25].forEach((d) => { frame += num(c, DX(d), 428, String(d), { size: 9, fill: C.fg55 }) + poly(c, [[DX(d), 408], [DX(d), 412]], C.line2); });
  frame += text(c, 96, 428, t.axis, { size: 9, fill: C.fg55 });
  t.stops.forEach((name, i) => { const x = 250 + i * 172; frame += num(c, x + 6, 182, String(i + 1), { size: 10.5, bold: true, fill: C.fg }) + text(c, x + 20, 182, name, { size: 9.5, fill: C.fg70 }); });
  s += `<g style="animation:${show(css, P, 'pa', 3)}">${frame}</g>`;
  const lane = (days, y, id, at0, l1, l2, hot) => {
    let o = `<g style="animation:${show(css, P, `${id}l`, at0)}">` + text(c, 96, y + 18, l1, { size: 11.5, fill: hot ? C.accent : C.fg, weight: 500 }) + text(c, 96, y + 34, l2, { size: 9, fill: C.fg70 }) + '</g>';
    let d0 = 0;
    days.forEach((d, i) => {
      const x = DX(d0); const w = d * 33; const at = at0 + 1 + i * 2.2; const alt = i % 2 === 0;
      o += `<g style="${growX(css, P, `${id}${i}`, at, 1.8, rtl)}">` + rect(c, x, y, w, 40, { stroke: hot ? C.accent : C.fg55, fill: hot ? (alt ? TINT : 'rgba(242,181,68,0.16)') : (alt ? C.fg35 : C.fill) }) + '</g>';
      o += `<g style="animation:${show(css, P, `${id}n${i}`, at + 1.6)}">` + num(c, x + w / 2, y + 25, String(i + 1), { size: 11, bold: true, fill: hot ? C.accent : C.fg }) + num(c, x + w / 2, y + 56, String(d), { size: 9.5, fill: C.fg70 }) + '</g>';
      d0 += d;
    });
    return o;
  };
  s += lane(PAPER, 232, 'p', 6, t.lane1a, t.lane1b, false);
  s += `<g style="animation:${show(css, P, 'e1', 19)}">` + text(c, DX(sum(PAPER)) + 8, 256, t.end1, { size: 10, fill: C.fg, weight: 500 }) + '</g>';
  // the reply deadline
  s += `<g style="animation:${show(css, P, 'dl', 21)}">` + poly(c, [[DX(DEADLINE), 204], [DX(DEADLINE), 412]], C.accent, 1.5, '5 4') + text(c, DX(DEADLINE) + 8, 216, t.deadline, { size: 9.5, fill: C.accent, weight: 500 }) + '</g>';
  s += `<g style="${growX(css, P, 'lt', 23, 2, rtl)}">` + rect(c, DX(DEADLINE), 300, (sum(PAPER) - DEADLINE) * 33, 5, { stroke: C.accent, fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'ltx', 25)}">` + text(c, DX(DEADLINE) + 8, 322, t.late, { size: 10, fill: C.accent, weight: 500 }) + '</g>';
  s += lane(REGISTERED, 340, 'r', 27, t.lane2a, t.lane2b, true);
  s += `<g style="animation:${show(css, P, 'e2', 40)}">` + text(c, DX(sum(REGISTERED)) + 8, 364, t.end2, { size: 10, fill: C.accent, weight: 500 }) + '</g>';
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bd', 42)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 46);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

const LATE = 9; const SOON = 14; const ONTIME = 41;
const HOLD = [{ n: 4, age: 31 }, { n: 3, age: 22 }, { n: 2, age: 18 }];

export function encours(t, rtl) {
  const c = ctx(rtl); const P = 'kz'; const css = []; const H = 686;
  const total = LATE + SOON + ONTIME;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + text(c, 96, 172, t.leftTitle.replace('{n}', String(total)), { size: 11, fill: C.fg, weight: 500 }) + text(c, 680, 172, t.rightTitle.replace('{n}', String(LATE)), { size: 11, fill: C.accent, weight: 500 }) + poly(c, [[650, 160], [650, 438]], C.line2) + '</g>';
  // one square per letter: overdue first, then due soon, then on time
  for (let i = 0; i < total; i++) {
    const col = i % 16; const row = Math.floor(i / 16);
    const kind = i < LATE ? 'late' : i < LATE + SOON ? 'soon' : 'ok';
    const o = kind === 'late' ? { stroke: C.accent, fill: C.accent } : kind === 'soon' ? { stroke: C.accent, fill: 'rgba(242,181,68,0.16)' } : { stroke: C.fg55, fill: C.fg35 };
    s += `<g style="${pop(css, P, `q${i}`, 5 + i * 0.32)}">` + rect(c, 96 + col * 33, 190 + row * 33, 26, 26, o) + '</g>';
  }
  const leg = (y, o, value, label, id, at, col) => `<g style="animation:${show(css, P, id, at)}">` + rect(c, 96, y - 12, 14, 14, o) + num(c, 134, y, String(value), { size: 13, bold: true, fill: col }) + text(c, 160, y, label, { size: 10.5, fill: col }) + '</g>';
  s += leg(350, { stroke: C.accent, fill: C.accent }, LATE, t.legLate, 'g1', 27, C.accent);
  s += leg(378, { stroke: C.accent, fill: 'rgba(242,181,68,0.16)' }, SOON, t.legSoon, 'g2', 29, C.fg);
  s += leg(406, { stroke: C.fg55, fill: C.fg35 }, ONTIME, t.legOk, 'g3', 31, C.fg70);
  // where the overdue letters are
  HOLD.forEach((h, i) => {
    const y = 204 + i * 66;
    s += `<g style="${pop(css, P, `w${i}`, 34 + i * 2)}">` + rect(c, 680, y, 420, 54, { stroke: C.accent, fill: TINT }) + num(c, 714, y + 34, String(h.n), { size: 20, bold: true, fill: C.accent }) + text(c, 752, y + 24, t.holders[i], { size: 11, fill: C.fg, weight: 500 }) + text(c, 752, y + 41, t.oldest.replace('{n}', String(h.age)), { size: 9.5, fill: C.fg70 }) + '</g>';
  });
  s += `<g style="animation:${show(css, P, 'rn', 40)}">` + text(c, 680, 424, t.rightNote, { size: 9.5, fill: C.fg55 }) + '</g>';
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
    trajets: {
      title: 'Le même courrier, deux trajets',
      alt: 'Le même courrier arrivé, suivi sur deux trajets. Passé de main en main : 2 jours à l’accueil, 5 à la direction, 9 dans le service concerné, 5 à la signature, 2 au départ, soit 23 jours, 8 jours après un délai de réponse de 15 jours. Enregistré et affecté le jour même : 1, 1, 3, 1 et 1 jour, soit 7 jours. Le travail réel est de 3 jours dans les deux cas.',
      header: 'Exemple construit · un courrier arrivé, un délai de réponse de 15 jours, cinq étapes',
      axis: 'jours depuis l’arrivée',
      stops: ['accueil, enregistrement', 'direction', 'service concerné', 'signature', 'départ'],
      lane1a: 'Sans registre', lane1b: 'de main en main',
      lane2a: 'Avec le registre', lane2b: 'affecté le jour même',
      end1: 'réponse à 23 jours', end2: 'réponse à 7 jours',
      deadline: 'délai de réponse : 15 jours', late: '8 jours de retard',
      band: 'Le travail est le même ; ce qui change, c’est le temps que le courrier passe posé sur un bureau sans que personne le sache.',
      tiles: [
        { big: '23 jours', l1: 'sans registre : 8 jours après le délai', l2: 'dont 20 jours d’attente entre deux bureaux' },
        { big: '7 jours', l1: 'avec le registre : 8 jours avant le délai', l2: 'dont 4 jours d’attente', hot: true },
        { big: '3 jours', l1: 'de travail réel dans les deux cas', l2: 'le reste est du temps posé sur un bureau' },
      ],
      line1: 'Chaque passage d’une main à l’autre devient une date : enregistré, affecté, ouvert, répondu, signé, expédié.',
      line2: 'Trois jours avant l’échéance, le service est prévenu ; le jour même, la direction l’est aussi.',
      note: 'Exemple construit · durées fictives ; le délai de réponse est celui que vous fixez par type de courrier.',
    },
    encours: {
      title: 'Ce qui attend une réponse, ce matin',
      alt: 'Soixante-quatre courriers attendent une réponse, un carré par courrier : 9 sont en retard, 14 arrivent à échéance dans les cinq jours, 41 sont dans les délais. Les 9 en retard sont dans trois services : 4 à la direction technique, le plus ancien depuis 31 jours ; 3 au service juridique, le plus ancien depuis 22 jours ; 2 au service commercial, le plus ancien depuis 18 jours.',
      header: 'Exemple construit · le registre un matin : chaque carré est un courrier en attente de réponse',
      leftTitle: '{n} courriers en attente de réponse', rightTitle: 'Où sont les {n} en retard',
      legLate: 'en retard', legSoon: 'à échéance dans les 5 jours', legOk: 'dans les délais',
      holders: ['Direction technique', 'Service juridique', 'Service commercial'],
      oldest: 'le plus ancien attend depuis {n} jours',
      rightNote: 'Un clic ouvre la liste : numéro, objet, expéditeur, détenteur, échéance.',
      band: 'Un registre papier dit ce qui est arrivé ; un registre tenu dans un logiciel dit ce qui attend, chez qui, et depuis quand.',
      tiles: [
        { big: '64 courriers', l1: 'en attente de réponse ce matin', l2: 'chacun a un détenteur et une échéance' },
        { big: '9 en retard', l1: 'dans trois services', l2: 'le plus ancien attend depuis 31 jours', hot: true },
        { big: '14 cette semaine', l1: 'à échéance dans les cinq jours', l2: 'ceux qu’on peut encore rattraper' },
      ],
      line1: 'La direction ouvre cette vue le matin : les retards d’abord, par service, puis ce qui arrive à échéance dans la semaine.',
      line2: 'Chaque carré est un courrier : son numéro, son objet, son expéditeur, la personne qui le détient, son échéance.',
      note: 'Exemple construit · nombres et services fictifs.',
    },
  },
  en: {
    trajets: {
      title: 'The same letter, two journeys',
      alt: 'The same incoming letter, followed on two journeys. Passed from hand to hand: 2 days at reception, 5 with management, 9 in the department concerned, 5 at signature, 2 at dispatch, that is 23 days, 8 days after a 15-day reply deadline. Registered and assigned the same day: 1, 1, 3, 1 and 1 day, that is 7 days. The real work is 3 days in both cases.',
      header: 'Constructed example · one incoming letter, a 15-day reply deadline, five stops',
      axis: 'days since arrival',
      stops: ['reception, registration', 'management', 'department concerned', 'signature', 'dispatch'],
      lane1a: 'Without a register', lane1b: 'from hand to hand',
      lane2a: 'With the register', lane2b: 'assigned the same day',
      end1: 'reply at 23 days', end2: 'reply at 7 days',
      deadline: 'reply deadline: 15 days', late: '8 days late',
      band: 'The work is the same; what changes is the time the letter spends lying on a desk without anyone knowing.',
      tiles: [
        { big: '23 days', l1: 'without a register: 8 days after the deadline', l2: '20 of them waiting between two desks' },
        { big: '7 days', l1: 'with the register: 8 days before the deadline', l2: '4 of them waiting', hot: true },
        { big: '3 days', l1: 'of real work in both cases', l2: 'the rest is time spent lying on a desk' },
      ],
      line1: 'Each handover from one person to the next becomes a date: registered, assigned, opened, answered, signed, sent.',
      line2: 'Three days before the due date, the department is warned; on the day itself, management is too.',
      note: 'Constructed example · fictitious durations; the reply deadline is the one you set per type of mail.',
    },
    encours: {
      title: 'What is awaiting a reply, this morning',
      alt: 'Sixty-four letters are awaiting a reply, one square per letter: 9 are overdue, 14 fall due within five days, 41 are on time. The 9 overdue ones are in three departments: 4 with the technical department, the oldest for 31 days; 3 with the legal department, the oldest for 22 days; 2 with the sales department, the oldest for 18 days.',
      header: 'Constructed example · the register one morning: each square is a letter awaiting a reply',
      leftTitle: '{n} letters awaiting a reply', rightTitle: 'Where the {n} overdue ones are',
      legLate: 'overdue', legSoon: 'due within 5 days', legOk: 'on time',
      holders: ['Technical department', 'Legal department', 'Sales department'],
      oldest: 'the oldest has been waiting for {n} days',
      rightNote: 'One click opens the list: number, subject, sender, holder, due date.',
      band: 'A paper register says what arrived; a register kept in software says what is waiting, with whom, and since when.',
      tiles: [
        { big: '64 letters', l1: 'awaiting a reply this morning', l2: 'each has a holder and a due date' },
        { big: '9 overdue', l1: 'in three departments', l2: 'the oldest has been waiting for 31 days', hot: true },
        { big: '14 this week', l1: 'due within five days', l2: 'the ones that can still be caught' },
      ],
      line1: 'Management opens this view in the morning: overdue first, per department, then what falls due during the week.',
      line2: 'Each square is a letter: its number, its subject, its sender, the person holding it, its due date.',
      note: 'Constructed example · fictitious numbers and departments.',
    },
  },
  ar: {
    trajets: {
      title: 'الرسالة نفسها، ومساران',
      alt: 'الرسالة الواردة نفسها، متابَعة على مسارين. من يد إلى يد: يومان في الاستقبال، 5 عند المديرية، 9 في المصلحة المعنية، 5 عند الإمضاء، ويومان عند الإرسال، أي 23 يوماً، 8 أيام بعد أجل ردّ من 15 يوماً. مسجَّلة ومحالة في اليوم نفسه: 1، 1، 3، 1 ثم 1 يوم، أي 7 أيام. والعمل الفعلي 3 أيام في الحالتين.',
      header: 'مثال مركَّب · رسالة واردة واحدة، أجل ردّ من 15 يوماً، وخمس محطات',
      axis: 'الأيام منذ الوصول',
      stops: ['الاستقبال والتسجيل', 'المديرية', 'المصلحة المعنية', 'الإمضاء', 'الإرسال'],
      lane1a: 'دون سجل', lane1b: 'من يد إلى يد',
      lane2a: 'بالسجل', lane2b: 'تُحال في اليوم نفسه',
      end1: 'الردّ بعد 23 يوماً', end2: 'الردّ بعد 7 أيام',
      deadline: 'أجل الردّ: 15 يوماً', late: '8 أيام تأخراً',
      band: 'العمل هو نفسه؛ وما يتغيّر هو الوقت الذي تقضيه الرسالة موضوعة على مكتب دون أن يعرف أحد.',
      tiles: [
        { big: '23 يوماً', l1: 'دون سجل: 8 أيام بعد الأجل', l2: 'منها 20 يوماً انتظاراً بين مكتبين' },
        { big: '7 أيام', l1: 'بالسجل: 8 أيام قبل الأجل', l2: 'منها 4 أيام انتظاراً', hot: true },
        { big: '3 أيام', l1: 'من العمل الفعلي في الحالتين', l2: 'والباقي وقت على مكتب' },
      ],
      line1: 'كل انتقال من يد إلى أخرى يصير تاريخاً: سُجّلت، أُحيلت، فُتحت، رُدّ عليها، أُمضيت، ثم أُرسلت.',
      line2: 'قبل الأجل بثلاثة أيام، تُنبَّه المصلحة؛ وفي اليوم نفسه، تُنبَّه المديرية أيضاً.',
      note: 'مثال مركَّب · مدد خيالية؛ وأجل الردّ هو الذي تحدّدونه لكل نوع من البريد.',
    },
    encours: {
      title: 'ما ينتظر ردّاً، هذا الصباح',
      alt: 'أربع وستون رسالة تنتظر ردّاً، مربّع لكل رسالة: 9 متأخرة، 14 يحلّ أجلها في خمسة أيام، و41 في الآجال. والمتأخرة التسع في ثلاث مصالح: 4 عند المديرية التقنية، أقدمها منذ 31 يوماً؛ 3 عند المصلحة القانونية، أقدمها منذ 22 يوماً؛ و2 عند المصلحة التجارية، أقدمها منذ 18 يوماً.',
      header: 'مثال مركَّب · السجل ذات صباح: كل مربّع رسالة تنتظر ردّاً',
      leftTitle: '{n} رسالة تنتظر ردّاً', rightTitle: 'أين توجد المتأخرة الـ{n}',
      legLate: 'متأخرة', legSoon: 'يحلّ أجلها في 5 أيام', legOk: 'في الآجال',
      holders: ['المديرية التقنية', 'المصلحة القانونية', 'المصلحة التجارية'],
      oldest: 'أقدمها ينتظر منذ {n} يوماً',
      rightNote: 'نقرة تفتح القائمة: الرقم، الموضوع، المرسِل، الحائز، والأجل.',
      band: 'السجل الورقي يقول ما وصل؛ والسجل الممسوك في برنامج يقول ما ينتظر، عند من، ومنذ متى.',
      tiles: [
        { big: '64 رسالة', l1: 'تنتظر ردّاً هذا الصباح', l2: 'لكل واحدة حائز وأجل' },
        { big: '9 متأخرة', l1: 'في ثلاث مصالح', l2: 'أقدمها ينتظر منذ 31 يوماً', hot: true },
        { big: '14 هذا الأسبوع', l1: 'يحلّ أجلها في خمسة أيام', l2: 'وهي التي يمكن تداركها' },
      ],
      line1: 'المديرية تفتح هذا العرض صباحاً: المتأخرة أولاً، مصلحة بمصلحة، ثم ما يحلّ أجله في الأسبوع.',
      line2: 'كل مربّع رسالة: رقمها، موضوعها، مرسِلها، الشخص الذي يحوزها، وأجلها.',
      note: 'مثال مركَّب · أعداد ومصالح خيالية.',
    },
  },
};
