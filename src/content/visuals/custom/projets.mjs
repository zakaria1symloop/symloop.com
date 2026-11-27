// Bespoke animated figures for the 2027 "gérer plusieurs projets en même temps" page.
//  charge():       the load plan of five people over six weeks, all projects together,
//                  against a capacity of 32 project hours a week each. The team as a
//                  whole is at 168 h for 160 h in week 4; one person is at 52 h for 32
//                  while another with the same skill is at 24 h.
//  atterrissage(): one project sold for 400 h over 10 weeks, read in week 6: 240 h
//                  planned, 200 h earned, 290 h consumed. At the same pace it lands at
//                  580 h in week 12, and the 400 h sold are used up in week 8.
// Numbers are drawn in their own text elements, direction="ltr".
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, open, heading, esc } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function pop(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scale(0)}${(at + 1.2).toFixed(1)}%,100%{transform:scale(1)}}`); return `transform-box:fill-box;transform-origin:center;animation:${P}-${id} ${LOOP}s linear infinite`; }
function drawLine(css, P, id, at, dur, len) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{stroke-dashoffset:${len.toFixed(0)}}${(at + dur).toFixed(1)}%,100%{stroke-dashoffset:0}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
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
const hline = (c, x1, x2, y, color, dash, sw) => `<polyline points="${c.X(x1)},${y} ${c.X(x2)},${y}" fill="none" stroke="${color}" stroke-width="${sw || 1}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const vline = (c, x, y1, y2, color, dash) => `<polyline points="${c.X(x)},${y1} ${c.X(x)},${y2}" fill="none" stroke="${color}" stroke-width="1"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;

// project hours assigned to each person, week by week, all projects together
const CAP = 32;
const LOAD = [
  [30, 34, 48, 52, 38, 28],
  [26, 28, 30, 24, 22, 20],
  [32, 36, 44, 40, 30, 24],
  [20, 22, 18, 30, 34, 36],
  [16, 18, 20, 22, 28, 30],
];
const CX = (w) => 310 + w * 130;

export function charge(t, rtl) {
  const c = ctx(rtl); const P = 'pk'; const css = []; const H = 686;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  let head = text(c, 96, 172, t.colWho, { size: 8.5, font: 'mono', fill: C.fg55 });
  for (let w = 0; w < 6; w++) head += text(c, CX(w) + 2, 172, t.weeks[w], { size: 8.5, font: 'mono', fill: w === 3 ? C.fg : C.fg55 });
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + head + '</g>';
  const cap = LOAD.length * CAP;
  LOAD.forEach((row, i) => {
    const y = 184 + i * 40;
    let g = text(c, 96, y + 21, t.people[i], { size: 10.5, fill: C.fg });
    row.forEach((v, w) => { g += rect(c, CX(w), y, 120, 32, { stroke: C.line2, fill: C.fill }) + num(c, CX(w) + 60, y + 21, String(v), { size: 12, fill: v < 22 ? C.fg55 : C.fg }); });
    s += `<g style="animation:${show(css, P, `r${i}`, 5 + i * 4)}">${g}</g>`;
  });
  // the cells above capacity light up afterwards
  let k = 0;
  LOAD.forEach((row, i) => {
    const y = 184 + i * 40;
    row.forEach((v, w) => {
      if (v <= CAP) return;
      const hard = v >= 44;
      s += `<g style="${pop(css, P, `o${i}${w}`, 27 + k * 1.2)}">` + rect(c, CX(w), y, 120, 32, { stroke: C.accent, fill: hard ? C.accent : DARK }) + (hard ? '' : rect(c, CX(w), y, 120, 32, { stroke: C.accent, fill: TINT })) + num(c, CX(w) + 60, y + 21, String(v), { size: 12, bold: true, fill: hard ? '#000' : C.accent }) + '</g>';
      k++;
    });
  });
  // the whole team against its capacity
  const ty = 184 + 5 * 40 + 10;
  let tot = hline(c, 96, 1080, ty - 6, C.line2) + text(c, 96, ty + 21, t.total, { size: 10.5, fill: C.fg70 });
  for (let w = 0; w < 6; w++) {
    const sum = LOAD.reduce((a, r) => a + r[w], 0);
    tot += ltrSpans(c.X(CX(w) + 60), ty + 21, [[String(sum), sum > cap ? C.accent : C.fg, true], [` / ${cap}`, C.fg55, false]], 10.5, 'middle');
  }
  s += `<g style="animation:${show(css, P, 'tt', 40)}">${tot}</g>`;
  s += `<g style="animation:${show(css, P, 'col', 44)}">` + rect(c, CX(3) - 5, 178, 130, 262, { stroke: C.accent, fill: 'none', dash: '4 4' }) + '</g>';
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bd', 48)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 52);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// one project: 400 h sold, 10 weeks promised, read in week 6
const BUDGET = 400;
const AC = [0, 45, 95, 140, 190, 240, 290];
const EV = [0, 35, 70, 105, 140, 170, 200];
const WX = (w) => 150 + w * 75;
const HY = (h) => 424 - h * 0.37;

export function atterrissage(t, rtl) {
  const c = ctx(rtl); const P = 'xv'; const css = []; const H = 686;
  const now = AC.length - 1;
  const cpi = EV[now] / AC[now];
  const eac = BUDGET / cpi;                       // 580 h
  const end = now + (BUDGET - EV[now]) / (EV[now] / now);   // week 12
  const out = now + (BUDGET - AC[now]) / (AC[now] / now);   // week when the hours sold are used up
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  let frame = rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + text(c, 96, 172, t.chartTitle, { size: 11, fill: C.fg, weight: 500 }) + hline(c, WX(0), WX(12), HY(0), C.line2)
    + hline(c, WX(0), WX(12), HY(BUDGET), C.fg55, '4 4') + text(c, WX(0) + 6, HY(BUDGET) - 7, t.budget, { size: 9.5, fill: C.fg70 })
    + vline(c, WX(10), 204, HY(0), C.fg55, '4 4') + text(c, WX(10) + 8, 198, t.promised, { size: 8.5, font: 'mono', fill: C.fg55 })
    + text(c, 96, 442, t.weeksLabel, { size: 8.5, font: 'mono', fill: C.fg55 });
  for (let w = 0; w <= 12; w += 2) frame += num(c, WX(w), 442, String(w), { size: 9, fill: w === now ? C.fg : C.fg55, bold: w === now });
  s += `<g style="animation:${show(css, P, 'pa', 3)}">${frame}</g>`;
  const line = (pts, color, sw, id, at, dur) => {
    const q = pts.map(([w, h]) => [c.X(WX(w)), HY(h)]);
    let len = 0; for (let i = 1; i < q.length; i++) len += Math.hypot(q[i][0] - q[i - 1][0], q[i][1] - q[i - 1][1]);
    return `<polyline points="${q.map((p) => `${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ')}" fill="none" stroke="${color}" stroke-width="${sw}" stroke-dasharray="${len.toFixed(0)}" style="animation:${drawLine(css, P, id, at, dur, len)}"/>`;
  };
  const dash = (w1, h1, w2, h2, color) => `<polyline points="${c.X(WX(w1)).toFixed(1)},${HY(h1).toFixed(1)} ${c.X(WX(w2)).toFixed(1)},${HY(h2).toFixed(1)}" fill="none" stroke="${color}" stroke-width="2" stroke-dasharray="6 5"/>`;
  const dot = (w, h, color, r) => `<circle cx="${c.X(WX(w)).toFixed(1)}" cy="${HY(h).toFixed(1)}" r="${r || 5}" fill="${color}"/>`;
  s += line([[0, 0], [10, BUDGET]], C.fg55, 1.5, 'pl', 5, 5);
  s += line(AC.map((h, w) => [w, h]), C.accent, 2.5, 'ac', 11, 7);
  s += line(EV.map((h, w) => [w, h]), C.fg, 2.5, 'ev', 11, 7);
  s += `<g style="animation:${show(css, P, 'td', 20)}">` + vline(c, WX(now), 204, HY(0), C.fg35) + text(c, WX(now) + 8, 198, t.today, { size: 8.5, font: 'mono', fill: C.fg }) + dot(now, AC[now], C.accent) + dot(now, BUDGET * now / 10, C.fg55, 4) + dot(now, EV[now], C.fg) + '</g>';
  const leg = [[C.accent, AC[now]], [C.fg55, BUDGET * now / 10], [C.fg, EV[now]]];
  leg.forEach(([color, v], i) => {
    const y = 198 + i * 20;
    s += `<g style="animation:${show(css, P, `g${i}`, 23 + i * 2)}">` + hline(c, 96, 120, y - 4, color, null, 2.5) + text(c, 130, y, t.legend[i], { size: 10, fill: i === 1 ? C.fg70 : C.fg }) + num(c, 330, y, String(v), { size: 11.5, bold: true, fill: color === C.fg55 ? C.fg70 : color }) + '</g>';
  });
  s += `<g style="animation:${show(css, P, 'pj', 33)}">` + dash(now, AC[now], end, eac, C.accent) + dash(now, EV[now], end, BUDGET, C.fg) + '</g>';
  s += `<g style="${pop(css, P, 'x8', 37)}"><circle cx="${c.X(WX(out)).toFixed(1)}" cy="${HY(BUDGET).toFixed(1)}" r="7" fill="${DARK}" stroke="${C.accent}" stroke-width="2"/></g>`;
  s += `<g style="${pop(css, P, 'e1', 40)}">` + dot(end, eac, C.accent, 6) + num(c, WX(end) - 4, HY(eac) - 12, String(Math.round(eac)), { size: 12.5, bold: true, fill: C.accent }) + '</g>';
  s += `<g style="${pop(css, P, 'e2', 42)}">` + dot(end, BUDGET, C.fg, 6) + num(c, WX(end) - 4, HY(BUDGET) + 22, String(BUDGET), { size: 12.5, bold: true, fill: C.fg }) + '</g>';
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bd', 46)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 50);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    charge: {
      title: 'Onze projets, cinq personnes : la même grille pour tous',
      alt: 'Le plan de charge de cinq personnes sur six semaines, tous projets réunis, pour une capacité de 32 heures de projet par semaine chacune. En semaine 4, l’équipe a 168 heures de travail pour 160 heures de capacité ; une personne des études a 52 heures pour 32, pendant qu’une autre personne des études en a 24.',
      header: 'Exemple construit · une société de huit personnes, cinq sur les projets, onze projets en cours',
      colWho: 'heures de projet par semaine', weeks: ['sem. 1', 'sem. 2', 'sem. 3', 'sem. 4', 'sem. 5', 'sem. 6'],
      people: ['Études 1', 'Études 2', 'Dessin', 'Terrain 1', 'Terrain 2'], total: 'toute l’équipe, pour sa capacité',
      band: 'En semaine 4, l’équipe n’est pas surchargée (168 h pour 160) : une personne l’est (52 h pour 32), pendant qu’une autre, de même compétence, est à 24 h.',
      tiles: [
        { big: '168 h / 160 h', l1: 'toute l’équipe, en semaine 4', l2: '105 % de la capacité : rien d’alarmant' },
        { big: '52 h / 32 h', l1: 'Études 1, la même semaine', l2: '163 % : trois rendus d’étude en même temps', hot: true },
        { big: '24 h / 32 h', l1: 'Études 2, la même semaine', l2: '8 h libres, et la même compétence' },
      ],
      line1: 'Deux leviers : confier une étude à la personne disponible, ou décaler un rendu de deux semaines. Ils se décident en semaine 1, pas en semaine 4.',
      line2: 'Un douzième projet accepté aujourd’hui tombe sur les semaines 3 et 4 : la grille le dit avant qu’on promette une date.',
      note: 'Exemple construit · 32 h de projet par semaine et par personne, pour 40 h de présence ; heures fictives.',
    },
    atterrissage: {
      title: 'Un projet en semaine 6 : où atterrit-il ?',
      alt: 'Un projet vendu 400 heures sur 10 semaines, lu en semaine 6 : 240 heures prévues à cette date, 200 heures de travail acquis, 290 heures consommées. Au même rythme, il atterrit à 580 heures en semaine 12, et les 400 heures vendues sont épuisées en semaine 8.',
      header: 'Exemple construit · un projet vendu 400 h sur 10 semaines, lu en semaine 6 puis prolongé au même rythme',
      chartTitle: 'Heures cumulées du projet, semaine par semaine', weeksLabel: 'semaines', budget: '400 h vendues', promised: 'semaine 10 promise', today: 'aujourd’hui',
      legend: ['heures consommées', 'travail prévu à cette date', 'travail acquis'],
      band: 'À la semaine 6, la moitié du travail est faite et 72,5 % des heures vendues sont parties : au même rythme, le projet finit à 580 h, en semaine 12.',
      tiles: [
        { big: '200 h / 290 h', l1: 'travail acquis pour heures consommées', l2: '0,69 heure produite par heure passée' },
        { big: '580 h', l1: 'atterrissage au rythme actuel', l2: '400 ÷ 0,69, pour 400 h vendues', hot: true },
        { big: 'Semaine 12', l1: 'fin au rythme actuel', l2: 'pour une semaine 10 promise' },
      ],
      line1: 'Les 400 h vendues seront épuisées en semaine 8, à 69 % du travail : à partir de là, chaque heure sort de la marge.',
      line2: 'En semaine 3, le calcul donnait déjà 105 h acquises pour 140 consommées : l’écart se lisait sept semaines avant la date promise.',
      note: 'Exemple construit · heures fictives ; l’acquis vient des tâches terminées et des jalons acceptés, pas d’une estimation à l’œil.',
    },
  },
  en: {
    charge: {
      title: 'Eleven projects, five people: one grid for all of them',
      alt: 'The load plan of five people over six weeks, all projects together, for a capacity of 32 project hours a week each. In week 4, the team has 168 hours of work for 160 hours of capacity; one person in design studies has 52 hours for 32, while another person in design studies has 24.',
      header: 'Constructed example · a company of eight, five of them on projects, eleven projects under way',
      colWho: 'project hours per week', weeks: ['wk 1', 'wk 2', 'wk 3', 'wk 4', 'wk 5', 'wk 6'],
      people: ['Studies 1', 'Studies 2', 'Drafting', 'Field 1', 'Field 2'], total: 'the whole team, against its capacity',
      band: 'In week 4, the team is not overloaded (168 h for 160): one person is (52 h for 32), while another, with the same skill, is at 24 h.',
      tiles: [
        { big: '168 h / 160 h', l1: 'the whole team, in week 4', l2: '105% of capacity: nothing alarming' },
        { big: '52 h / 32 h', l1: 'Studies 1, the same week', l2: '163%: three study deliverables at once', hot: true },
        { big: '24 h / 32 h', l1: 'Studies 2, the same week', l2: '8 h free, and the same skill' },
      ],
      line1: 'Two levers: give one study to the person who is free, or move one deliverable by two weeks. Both are decided in week 1, not in week 4.',
      line2: 'A twelfth project accepted today falls on weeks 3 and 4: the grid says so before a date is promised.',
      note: 'Constructed example · 32 project hours a week per person, for 40 hours present; fictitious hours.',
    },
    atterrissage: {
      title: 'A project in week 6: where does it land?',
      alt: 'A project sold for 400 hours over 10 weeks, read in week 6: 240 hours planned by that date, 200 hours of work earned, 290 hours consumed. At the same pace it lands at 580 hours in week 12, and the 400 hours sold are used up in week 8.',
      header: 'Constructed example · a project sold for 400 h over 10 weeks, read in week 6 then extended at the same pace',
      chartTitle: 'Cumulative project hours, week by week', weeksLabel: 'weeks', budget: '400 h sold', promised: 'week 10 promised', today: 'today',
      legend: ['hours consumed', 'work planned by this date', 'work earned'],
      band: 'In week 6, half the work is done and 72.5% of the hours sold are gone: at the same pace, the project ends at 580 h, in week 12.',
      tiles: [
        { big: '200 h / 290 h', l1: 'work earned for hours consumed', l2: '0.69 hour produced per hour spent' },
        { big: '580 h', l1: 'landing at the current pace', l2: '400 ÷ 0.69, for 400 h sold', hot: true },
        { big: 'Week 12', l1: 'end at the current pace', l2: 'for a week 10 promised' },
      ],
      line1: 'The 400 h sold will be used up in week 8, at 69% of the work: from there on, every hour comes out of the margin.',
      line2: 'In week 3, the calculation already gave 105 h earned for 140 consumed: the gap could be read seven weeks before the promised date.',
      note: 'Constructed example · fictitious hours; earned work comes from finished tasks and accepted milestones, not from an estimate by eye.',
    },
  },
  ar: {
    charge: {
      title: 'أحد عشر مشروعاً، خمسة أشخاص: شبكة واحدة للجميع',
      alt: 'مخطط الحِمل لخمسة أشخاص على ستة أسابيع، كل المشاريع مجتمعة، بطاقة 32 ساعة مشروع في الأسبوع لكل واحد. في الأسبوع الرابع، عند الفريق 168 ساعة عمل مقابل 160 ساعة طاقة؛ وعند شخص من الدراسات 52 ساعة مقابل 32، بينما عند شخص آخر من الدراسات 24 ساعة.',
      header: 'مثال مركَّب · شركة من ثمانية أشخاص، خمسة منهم على المشاريع، وأحد عشر مشروعاً جارياً',
      colWho: 'ساعات المشاريع في الأسبوع', weeks: ['أسبوع 1', 'أسبوع 2', 'أسبوع 3', 'أسبوع 4', 'أسبوع 5', 'أسبوع 6'],
      people: ['الدراسات 1', 'الدراسات 2', 'الرسم', 'الميدان 1', 'الميدان 2'], total: 'الفريق كله، مقابل طاقته',
      band: 'في الأسبوع الرابع، الفريق ليس محمَّلاً فوق طاقته (168 ساعة مقابل 160): شخص واحد هو المحمَّل (52 مقابل 32)، وآخر بالكفاءة نفسها عند 24.',
      tiles: [
        { big: '⁦168 / 160⁩ سا', l1: 'الفريق كله، في الأسبوع الرابع', l2: '⁦105 %⁩ من الطاقة: لا شيء مقلق' },
        { big: '⁦52 / 32⁩ سا', l1: 'الدراسات 1، في الأسبوع نفسه', l2: '⁦163 %⁩: ثلاثة تسليمات دراسة معاً', hot: true },
        { big: '⁦24 / 32⁩ سا', l1: 'الدراسات 2، في الأسبوع نفسه', l2: '8 ساعات حرة، والكفاءة نفسها' },
      ],
      line1: 'رافعتان: إسناد دراسة إلى الشخص المتاح، أو تأخير تسليم بأسبوعين. وتُقرَّران في الأسبوع الأول، لا في الرابع.',
      line2: 'مشروع ثاني عشر يُقبل اليوم يقع على الأسبوعين الثالث والرابع: الشبكة تقول ذلك قبل أن يُوعَد بتاريخ.',
      note: 'مثال مركَّب · 32 ساعة مشروع في الأسبوع لكل شخص، مقابل 40 ساعة حضور؛ ساعات خيالية.',
    },
    atterrissage: {
      title: 'مشروع في الأسبوع السادس: أين ينتهي؟',
      alt: 'مشروع بيع بـ400 ساعة على 10 أسابيع، يُقرأ في الأسبوع السادس: 240 ساعة مبرمجة إلى هذا التاريخ، 200 ساعة عمل مكتسب، و290 ساعة مستهلكة. بالوتيرة نفسها ينتهي عند 580 ساعة في الأسبوع الثاني عشر، وتنفد الـ400 ساعة المبيعة في الأسبوع الثامن.',
      header: 'مثال مركَّب · مشروع بيع بـ400 ساعة على 10 أسابيع، يُقرأ في الأسبوع السادس ثم يُمدَّد بالوتيرة نفسها',
      chartTitle: 'ساعات المشروع المتراكمة، أسبوعاً بأسبوع', weeksLabel: 'الأسابيع', budget: '400 ساعة مبيعة', promised: 'الأسبوع 10 الموعود', today: 'اليوم',
      legend: ['الساعات المستهلكة', 'العمل المبرمج إلى هذا التاريخ', 'العمل المكتسب'],
      band: 'في الأسبوع السادس، نصف العمل منجز و⁦72,5 %⁩ من الساعات المبيعة ذهبت: بالوتيرة نفسها، ينتهي المشروع عند 580 ساعة، في الأسبوع 12.',
      tiles: [
        { big: '⁦200 / 290⁩ سا', l1: 'العمل المكتسب مقابل الساعات المستهلكة', l2: '⁦0,69⁩ ساعة منتَجة لكل ساعة مقضية' },
        { big: '580 ساعة', l1: 'نهاية المشروع بالوتيرة الحالية', l2: '⁦400 ÷ 0,69⁩، مقابل 400 ساعة مبيعة', hot: true },
        { big: 'الأسبوع 12', l1: 'النهاية بالوتيرة الحالية', l2: 'مقابل أسبوع 10 موعود' },
      ],
      line1: 'الـ400 ساعة المبيعة ستنفد في الأسبوع الثامن، عند ⁦69 %⁩ من العمل: ومن هناك، كل ساعة تخرج من الهامش.',
      line2: 'في الأسبوع الثالث، كان الحساب يعطي 105 ساعات مكتسبة مقابل 140 مستهلكة: الفارق كان يُقرأ سبعة أسابيع قبل التاريخ الموعود.',
      note: 'مثال مركَّب · ساعات خيالية؛ والمكتسب يأتي من المهام المنتهية والمحطات المقبولة، لا من تقدير بالعين.',
    },
  },
};
