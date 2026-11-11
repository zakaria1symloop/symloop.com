// Bespoke animated figures for the 2027 "nobody knows who works tomorrow" post.
//  roster(): one week's roster for a restaurant: three shift rows × seven days, each
//            cell showing the computed need against the assigned headcount, with an
//            uncovered cell accented and the application's proposal for it; a day
//            total row; three tiles. Cells appear, the proposal draws.
//  week():   one employee's week: seven day lanes on an hour axis with planned shift
//            blocks, rest gaps between shifts checked against the written rule, the
//            clock-in overlay with deviations, one swap and one replacement; three
//            tiles. Blocks appear, clock-in bars grow.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function draw(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{stroke-dashoffset:1000}${(at + dur).toFixed(1)}%,100%{stroke-dashoffset:0}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function grow(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
const I = (x) => `⁦${x}⁩`;

export function roster(t, rtl) {
  const c = ctx(rtl); const P = 'ro'; const css = []; const H = 620;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: 'rgba(242,181,68,0.06)' }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const gx = 270, gy = 160, cw = 121, ch = 58;
  t.days.forEach((d, j) => { s += text(c, gx + j * cw + cw / 2, gy - 10, d, { size: 9, font: 'mono', fill: C.fg35, anchor: 'middle' }); });
  t.rows.forEach((r, i) => {
    const y = gy + i * (ch + 8);
    s += `<g style="animation:${show(css, P, `r${i}`, 3 + i * 2)}">` + text(c, 80, y + 22, r.name, { size: 11, fill: C.fg, weight: 500 }) + text(c, 80, y + 37, r.sub, { size: 8.5, font: 'mono', fill: C.fg55 }) + text(c, 80, y + 50, r.sub2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>';
    r.cells.forEach((cell, j) => {
      const x = gx + j * cw; const at = 4 + i * 2 + j * 0.35; const gap = cell.a < cell.n; const over = cell.a > cell.n;
      s += `<g style="animation:${show(css, P, `c${i}${j}`, at)}">` + rect(c, x + 2, y, cw - 4, ch, { stroke: gap ? C.accent : C.line2, fill: gap ? 'rgba(242,181,68,0.22)' : over ? 'rgba(255,255,255,0.10)' : 'rgba(255,255,255,0.04)' })
        + text(c, x + cw / 2, y + 24, `${cell.a} / ${cell.n}`, { size: 13, font: 'mono', fill: gap ? C.accent : C.fg, anchor: 'middle', weight: gap ? 500 : 400 })
        + text(c, x + cw / 2, y + 40, cell.l, { size: 7.5, font: 'mono', fill: gap ? C.accent : over ? C.fg70 : C.fg55, anchor: 'middle' })
        + (cell.l2 ? text(c, x + cw / 2, y + 51, cell.l2, { size: 7.5, font: 'mono', fill: C.fg55, anchor: 'middle' }) : '') + '</g>';
    });
  });
  const ty = gy + t.rows.length * (ch + 8);
  s += `<g style="animation:${show(css, P, 'tot', 12)}">` + text(c, 80, ty + 16, t.totals.name, { size: 10, fill: C.fg70, weight: 500 }) + line(c, 80, ty - 2, 1120, ty - 2, { stroke: C.line2 });
  t.totals.cells.forEach((v, j) => { s += text(c, gx + j * cw + cw / 2, ty + 16, v, { size: 9.5, font: 'mono', fill: C.fg70, anchor: 'middle' }); });
  s += '</g>';
  // proposal line
  const py = ty + 34;
  s += `<line x1="${c.X(80)}" y1="${py}" x2="${c.X(1120)}" y2="${py}" stroke="${C.accent}" stroke-width="1.6" pathLength="1000" style="stroke-dashoffset:0;animation:${draw(css, P, 'pl', 14, 2)}"/>`;
  s += `<g style="animation:${show(css, P, 'pp', 15.5)}">` + text(c, 80, py + 20, t.proposal, { size: 11.5, fill: C.accent, weight: 500 }) + text(c, 80, py + 36, t.proposal2, { size: 9, font: 'mono', fill: C.fg70 }) + '</g>';
  const ky = py + 54;
  t.tiles.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, 19 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? 'rgba(242,181,68,0.06)' : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  s += text(c, 80, ky + 86, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"],svg line[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

export function week(t, rtl) {
  const c = ctx(rtl); const P = 'wk'; const css = []; const H = 640;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: 'rgba(242,181,68,0.06)' }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const ax = 220, aw = 700, ay = 156; const H0 = 6, H1 = 24; const hX = (h) => ax + ((h - H0) / (H1 - H0)) * aw; const laneH = 42;
  t.ticks.forEach((tk) => { s += line(c, hX(tk), ay - 4, hX(tk), ay + t.lanes.length * laneH, { stroke: C.line }) + text(c, hX(tk), ay - 10, `${tk}h`, { size: 8.5, font: 'mono', fill: C.fg35, anchor: 'middle' }); });
  t.lanes.forEach((ln, i) => {
    const y = ay + i * laneH; const at = 4 + i * 1.6;
    s += `<g style="animation:${show(css, P, `n${i}`, at)}">` + text(c, 80, y + 17, ln.day, { size: 10.5, fill: C.fg, weight: 500 }) + text(c, 80, y + 30, ln.sub, { size: 8, font: 'mono', fill: ln.hot ? C.accent : C.fg55 }) + line(c, 80, y + laneH - 4, 1120, y + laneH - 4, { stroke: C.line }) + '</g>';
    (ln.plan || []).forEach((b, k) => { s += `<g style="animation:${show(css, P, `p${i}${k}`, at + 0.6)}">` + rect(c, hX(b.from), y + 4, hX(b.to) - hX(b.from), 14, { stroke: b.kind === 'swap' ? C.accent : C.line2, fill: b.kind === 'swap' ? 'rgba(242,181,68,0.22)' : b.kind === 'off' ? 'none' : 'rgba(255,255,255,0.10)', dash: b.kind === 'off' ? '3 3' : undefined }) + text(c, hX(b.from) + 4, y + 14, b.l, { size: 7.5, font: 'mono', fill: b.kind === 'swap' ? C.accent : C.fg70 }) + '</g>'; });
    (ln.clock || []).forEach((b, k) => { s += `<g style="transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'};animation:${grow(css, P, `k${i}${k}`, at + 1.4, 1.2)}">` + rect(c, hX(b.from), y + 21, hX(b.to) - hX(b.from), 8, { stroke: 'none', fill: b.dev ? C.accent : C.fg55 }) + '</g>' + (b.l ? `<g style="animation:${show(css, P, `kl${i}${k}`, at + 2.6)}">` + text(c, hX(b.to) + 5, y + 29, b.l, { size: 7.5, font: 'mono', fill: b.dev ? C.accent : C.fg55 }) + '</g>' : ''); });
    if (ln.right) s += `<g style="animation:${show(css, P, `rt${i}`, at + 1)}">` + text(c, 1120, y + 17, ln.right, { size: 9.5, font: 'mono', fill: ln.hot ? C.accent : C.fg, anchor: 'end', weight: 500 }) + text(c, 1120, y + 30, ln.right2, { size: 7.5, font: 'mono', fill: C.fg55, anchor: 'end' }) + '</g>';
  });
  const ly = ay + t.lanes.length * laneH + 10;
  s += `<g style="animation:${show(css, P, 'lg', 18)}">` + rect(c, 80, ly, 14, 10, { stroke: C.line2, fill: 'rgba(255,255,255,0.10)' }) + text(c, 100, ly + 9, t.legend[0], { size: 9, font: 'mono', fill: C.fg55 }) + rect(c, 330, ly + 1, 14, 8, { stroke: 'none', fill: C.fg55 }) + text(c, 350, ly + 9, t.legend[1], { size: 9, font: 'mono', fill: C.fg55 }) + rect(c, 580, ly + 1, 14, 8, { stroke: 'none', fill: C.accent }) + text(c, 600, ly + 9, t.legend[2], { size: 9, font: 'mono', fill: C.fg55 }) + '</g>';
  const ky = ly + 26;
  t.tiles.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `t${i}`, 20 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? 'rgba(242,181,68,0.06)' : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  s += text(c, 80, ky + 86, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

const CELL = (a, n, l, l2) => ({ a, n, l, l2 });
export const STRINGS = {
  fr: {
    roster: {
      title: 'Une semaine de planning : besoins par créneau, affectés, un trou',
      alt: 'Un bandeau : restaurant, semaine du 16 au 22 novembre, 14 employés, besoins calculés depuis les couverts des huit dernières semaines plus les réservations, règles écrites par le gérant. Une grille de trois créneaux, matin, midi et soir, sur sept jours ; chaque case montre les affectés sur le besoin : par exemple lundi matin 2 sur 2, vendredi midi 5 sur 5, samedi soir 5 sur 6 en accent, non couvert, avec la mention « réservations : 84 couverts ». Une ligne de totaux d’heures par jour, de 47 heures le lundi à 82 heures le vendredi. Un trait accentué puis la proposition de l’application : Karim pour samedi soir, 34 heures cette semaine sur 40, repos de 13 heures avant, qualifié salle, préférence samedi respectée ; une autre option listée. Trois tuiles : 21 créneaux dont 1 non couvert ; 2 demandes d’échange en attente d’approbation ; 0 contrainte dure violée. Les besoins, affectations et noms sont un exemple construit.',
      header: 'Restaurant · semaine du 16 au 22 nov. · 14 employés · besoins = couverts des 8 dernières semaines + réservations · règles écrites par le gérant',
      days: ['lu 16', 'ma 17', 'me 18', 'je 19', 've 20', 'sa 21', 'di 22'],
      rows: [
        { name: 'Matin · 7h–14h', sub: 'cuisine 1 + salle', sub2: 'besoin min. 2', cells: [CELL(2, 2, 'ok'), CELL(2, 2, 'ok'), CELL(2, 2, 'ok'), CELL(3, 3, 'ok'), CELL(3, 3, 'ok'), CELL(3, 3, 'ok'), CELL(2, 2, 'ok')] },
        { name: 'Midi · 11h–16h', sub: 'cuisine 2 + salle', sub2: 'pic : vendredi', cells: [CELL(3, 3, 'ok'), CELL(3, 3, 'ok'), CELL(4, 4, 'ok'), CELL(4, 4, 'ok'), CELL(5, 5, 'ok', 'réserv. 61'), CELL(5, 5, 'ok', 'réserv. 70'), CELL(4, 4, 'ok')] },
        { name: 'Soir · 18h–00h', sub: 'cuisine 2 + salle + bar', sub2: 'pic : samedi', cells: [CELL(3, 3, 'ok'), CELL(3, 3, 'ok'), CELL(4, 4, 'ok'), CELL(5, 5, 'ok', 'réserv. 48'), CELL(6, 6, 'ok', 'réserv. 79'), CELL(5, 6, 'non couvert', 'réserv. 84'), CELL(4, 4, 'ok')] },
      ],
      totals: { name: 'Heures planifiées / jour', cells: ['47 h', '47 h', '58 h', '71 h', '82 h', '76 h', '58 h'] },
      proposal: 'Proposition pour samedi soir : Karim · 34 h cette semaine sur 40 · repos 13 h avant · qualifié salle · préférence samedi respectée',
      proposal2: 'autre option : Nadia (38 h, repos 11 h, pas de préférence) · choisie par le gérant, jamais imposée · les contraintes dures ont filtré 9 personnes',
      tiles: [
        { big: '21 créneaux · 1 trou', l1: 'samedi soir, 5 sur 6, signalé dès la proposition', l2: 'besoin calculé, pas deviné', hot: true },
        { big: '2 échanges', l1: 'en attente d’approbation du gérant', l2: 'règles vérifiées avant que la demande n’arrive' },
        { big: '0 violation', l1: 'de contrainte dure sur la semaine', l2: 'max 40 h, repos 11 h, qualifications' },
      ],
      rule: 'Le besoin par créneau est calculé depuis l’activité, puis écrit ; le planning se compare au besoin, pas à l’habitude.',
      rule2: 'La proposition explique chaque choix : heures de la semaine, repos, qualification, préférence ; le gérant décide, l’application ne décide pas.',
      note: 'Besoins, affectations, heures et noms sont un exemple construit ; les seuils d’heures et de repos sont des règles écrites par le gérant, pas une règle de ce guide.',
    },
    week: {
      title: 'La semaine d’Amina : planifié, pointé, échangé, remplacée',
      alt: 'Un bandeau : Amina, salle, 40 heures contractuelles, règles écrites : 40 heures maximum, 11 heures de repos entre deux postes, 2 jours de repos. Sept couloirs, un par jour, sur un axe de 6 heures à minuit. Lundi : midi 11 à 16 heures planifié et pointé 10 h 58 à 16 h 05. Mardi : soir 18 à minuit, pointé à partir de 18 h 12, retard de 12 minutes en accent. Mercredi : repos. Jeudi : midi 11 à 16 échangé avec Yacine, approuvé par le gérant, en accent. Vendredi : soir 18 à minuit, pointé ; repos de 11 heures avant le samedi vérifié. Samedi : matin 7 à 14 puis absence déclarée à 6 h 40, remplacée par Sofiane en 25 minutes, en accent. Dimanche : repos. Trois tuiles : 29 heures planifiées puis 17 heures pointées, 12 heures passées à Yacine et Sofiane ; 1 échange approuvé et 1 remplacement ; 0 contrainte violée. Les horaires et noms sont un exemple construit.',
      header: 'Amina · salle · contrat 40 h · règles écrites : max 40 h / semaine · repos 11 h entre deux postes · 2 jours de repos · planning verrouillé à J-2',
      ticks: [6, 9, 12, 15, 18, 21, 24],
      lanes: [
        { day: 'Lundi 16', sub: 'midi · 5 h', plan: [{ from: 11, to: 16, l: 'midi 11–16' }], clock: [{ from: 10.97, to: 16.08 }], right: '5 h 07', right2: 'pointé' },
        { day: 'Mardi 17', sub: 'soir · 6 h · retard 12 min', hot: true, plan: [{ from: 18, to: 24, l: 'soir 18–00' }], clock: [{ from: 18.2, to: 24, dev: true, l: '' }], right: '5 h 48', right2: 'retard 12 min · noté' },
        { day: 'Mercredi 18', sub: 'repos', plan: [{ from: 6, to: 24, l: 'repos', kind: 'off' }], right: '—', right2: 'repos' },
        { day: 'Jeudi 19', sub: 'midi · échangé avec Yacine', hot: true, plan: [{ from: 11, to: 16, l: 'échange → Yacine · approuvé 17/11', kind: 'swap' }], right: '0 h', right2: 'échange approuvé' },
        { day: 'Vendredi 20', sub: 'soir · 6 h · repos 11 h avant samedi ✓', plan: [{ from: 18, to: 24, l: 'soir 18–00' }], clock: [{ from: 17.95, to: 24 }], right: '6 h 03', right2: 'pointé' },
        { day: 'Samedi 21', sub: 'matin · 7 h · absence déclarée 6h40', hot: true, plan: [{ from: 7, to: 14, l: 'matin 7–14 → Sofiane · remplacé en 25 min', kind: 'swap' }], right: '0 h', right2: 'remplacée · Sofiane' },
        { day: 'Dimanche 22', sub: 'repos', plan: [{ from: 6, to: 24, l: 'repos', kind: 'off' }], right: '—', right2: 'repos' },
      ],
      legend: ['planifié', 'pointé', 'écart ou changement'],
      tiles: [
        { big: '29 h → 17 h', l1: 'planifié, puis pointé après l’échange et le remplacement', l2: '12 h passées à Yacine et Sofiane · écarts par poste' },
        { big: '1 échange · 1 remplacement', l1: 'règles vérifiées avant l’approbation', l2: 'heures de Yacine et Sofiane recalculées', hot: true },
        { big: '0 violation', l1: 'max 40 h, repos 11 h, 2 jours de repos', l2: 'vérifié à chaque changement, pas le lundi' },
      ],
      rule: 'Chaque changement, échange, absence, remplacement, est vérifié contre les règles écrites avant d’être approuvé, et recalcule les heures de chacun.',
      rule2: 'Le pointage se compare au planning poste par poste ; les heures comptées partent vers la paie, dont les règles ne sont pas ici.',
      note: 'Horaires, écarts et noms sont un exemple construit ; les seuils d’heures et de repos sont des règles écrites par le gérant ; la paie et ses règles sont hors de ce guide.',
    },
  },
  en: {
    roster: {
      title: 'One week’s roster: needs per slot, assigned, one gap',
      alt: 'A strip: restaurant, week of 16 to 22 November, 14 employees, needs computed from the last eight weeks’ covers plus bookings, rules written by the manager. A grid of three slots, morning, lunch and evening, over seven days; each cell shows assigned over need: for instance Monday morning 2 of 2, Friday lunch 5 of 5, Saturday evening 5 of 6 accented, uncovered, with “bookings: 84 covers”. A row of planned hours per day, from 47 hours on Monday to 82 hours on Friday. An accented line then the application’s proposal: Karim for Saturday evening, 34 hours this week out of 40, 13 hours’ rest before, qualified for the floor, Saturday preference respected; another option listed. Three tiles: 21 slots of which 1 uncovered; 2 swap requests awaiting approval; 0 hard constraint violated. Needs, assignments and names are a constructed example.',
      header: 'Restaurant · week of 16–22 Nov · 14 employees · needs = last 8 weeks’ covers + bookings · rules written by the manager',
      days: ['Mon 16', 'Tue 17', 'Wed 18', 'Thu 19', 'Fri 20', 'Sat 21', 'Sun 22'],
      rows: [
        { name: 'Morning · 7–14', sub: 'kitchen 1 + floor', sub2: 'min need 2', cells: [CELL(2, 2, 'ok'), CELL(2, 2, 'ok'), CELL(2, 2, 'ok'), CELL(3, 3, 'ok'), CELL(3, 3, 'ok'), CELL(3, 3, 'ok'), CELL(2, 2, 'ok')] },
        { name: 'Lunch · 11–16', sub: 'kitchen 2 + floor', sub2: 'peak: Friday', cells: [CELL(3, 3, 'ok'), CELL(3, 3, 'ok'), CELL(4, 4, 'ok'), CELL(4, 4, 'ok'), CELL(5, 5, 'ok', 'bookings 61'), CELL(5, 5, 'ok', 'bookings 70'), CELL(4, 4, 'ok')] },
        { name: 'Evening · 18–00', sub: 'kitchen 2 + floor + bar', sub2: 'peak: Saturday', cells: [CELL(3, 3, 'ok'), CELL(3, 3, 'ok'), CELL(4, 4, 'ok'), CELL(5, 5, 'ok', 'bookings 48'), CELL(6, 6, 'ok', 'bookings 79'), CELL(5, 6, 'uncovered', 'bookings 84'), CELL(4, 4, 'ok')] },
      ],
      totals: { name: 'Planned hours / day', cells: ['47 h', '47 h', '58 h', '71 h', '82 h', '76 h', '58 h'] },
      proposal: 'Proposal for Saturday evening: Karim · 34 h this week of 40 · 13 h rest before · qualified floor · Saturday preference respected',
      proposal2: 'other option: Nadia (38 h, 11 h rest, no preference) · chosen by the manager, never imposed · hard constraints filtered out 9 people',
      tiles: [
        { big: '21 slots · 1 gap', l1: 'Saturday evening, 5 of 6, flagged at proposal', l2: 'need computed, not guessed', hot: true },
        { big: '2 swaps', l1: 'awaiting the manager’s approval', l2: 'rules checked before the request arrives' },
        { big: '0 violation', l1: 'of a hard constraint over the week', l2: 'max 40 h, 11 h rest, qualifications' },
      ],
      rule: 'The need per slot is computed from activity, then written; the roster is compared with the need, not with habit.',
      rule2: 'The proposal explains every choice: hours this week, rest, qualification, preference; the manager decides, the application does not.',
      note: 'Needs, assignments, hours and names are a constructed example; hour and rest thresholds are rules written by the manager, not a rule of this guide.',
    },
    week: {
      title: 'Amina’s week: planned, clocked, swapped, replaced',
      alt: 'A strip: Amina, floor, 40 contractual hours, written rules: 40 hours maximum, 11 hours’ rest between two shifts, 2 rest days. Seven lanes, one per day, on a 6 am to midnight axis. Monday: lunch 11 to 16 planned and clocked 10:58 to 16:05. Tuesday: evening 18 to midnight, clocked from 18:12, 12 minutes late accented. Wednesday: rest. Thursday: lunch 11 to 16 swapped with Yacine, approved by the manager, accented. Friday: evening 18 to midnight, clocked; 11 hours’ rest before Saturday checked. Saturday: morning 7 to 14 then absence declared at 6:40, replaced by Sofiane in 25 minutes, accented. Sunday: rest. Three tiles: 29 hours planned then 17 hours clocked, 12 hours passed to Yacine and Sofiane; 1 approved swap and 1 replacement; 0 constraint violated. Times and names are a constructed example.',
      header: 'Amina · floor · 40 h contract · written rules: max 40 h / week · 11 h rest between shifts · 2 rest days · roster locked at D-2',
      ticks: [6, 9, 12, 15, 18, 21, 24],
      lanes: [
        { day: 'Monday 16', sub: 'lunch · 5 h', plan: [{ from: 11, to: 16, l: 'lunch 11–16' }], clock: [{ from: 10.97, to: 16.08 }], right: '5 h 07', right2: 'clocked' },
        { day: 'Tuesday 17', sub: 'evening · 6 h · 12 min late', hot: true, plan: [{ from: 18, to: 24, l: 'evening 18–00' }], clock: [{ from: 18.2, to: 24, dev: true }], right: '5 h 48', right2: '12 min late · noted' },
        { day: 'Wednesday 18', sub: 'rest', plan: [{ from: 6, to: 24, l: 'rest', kind: 'off' }], right: '—', right2: 'rest' },
        { day: 'Thursday 19', sub: 'lunch · swapped with Yacine', hot: true, plan: [{ from: 11, to: 16, l: 'swap → Yacine · approved 17/11', kind: 'swap' }], right: '0 h', right2: 'swap approved' },
        { day: 'Friday 20', sub: 'evening · 6 h · 11 h rest before Saturday ✓', plan: [{ from: 18, to: 24, l: 'evening 18–00' }], clock: [{ from: 17.95, to: 24 }], right: '6 h 03', right2: 'clocked' },
        { day: 'Saturday 21', sub: 'morning · 7 h · absence declared 6:40', hot: true, plan: [{ from: 7, to: 14, l: 'morning 7–14 → Sofiane · replaced in 25 min', kind: 'swap' }], right: '0 h', right2: 'replaced · Sofiane' },
        { day: 'Sunday 22', sub: 'rest', plan: [{ from: 6, to: 24, l: 'rest', kind: 'off' }], right: '—', right2: 'rest' },
      ],
      legend: ['planned', 'clocked', 'deviation or change'],
      tiles: [
        { big: '29 h → 17 h', l1: 'planned, then clocked after the swap and the replacement', l2: '12 h passed to Yacine and Sofiane · gaps per shift' },
        { big: '1 swap · 1 replacement', l1: 'rules checked before approval', l2: 'Yacine’s and Sofiane’s hours recomputed', hot: true },
        { big: '0 violation', l1: 'max 40 h, 11 h rest, 2 rest days', l2: 'checked at every change, not on Monday' },
      ],
      rule: 'Every change, swap, absence, replacement, is checked against the written rules before approval, and recomputes everyone’s hours.',
      rule2: 'Clock-in is compared with the roster shift by shift; counted hours go to payroll, whose rules are not here.',
      note: 'Times, gaps and names are a constructed example; hour and rest thresholds are rules written by the manager; payroll and its rules are outside this guide.',
    },
  },
  ar: {
    roster: {
      title: 'أسبوع من التخطيط: احتياجات لكل فترة، معيَّنون، ثغرة واحدة',
      alt: 'شريط: مطعم، أسبوع 16 إلى 22 نوفمبر، 14 موظفاً، احتياجات محسوبة من وجبات آخر ثمانية أسابيع زائد الحجوزات، قواعد يكتبها المسيّر. شبكة من ثلاث فترات، صباح وغداء ومساء، على سبعة أيام؛ كل خانة تُظهر المعيَّنين على الاحتياج: مثلاً الاثنين صباحاً 2 من 2، الجمعة غداءً 5 من 5، السبت مساءً 5 من 6 مميزة غير مغطاة مع «حجوزات: 84 وجبة». سطر مجاميع ساعات مخططة لكل يوم من 47 ساعة الاثنين إلى 82 ساعة الجمعة. خط مميز ثم اقتراح التطبيق: كريم للسبت مساءً، 34 ساعة هذا الأسبوع من 40، راحة 13 ساعة قبلها، مؤهل للقاعة، تفضيل السبت محترم؛ وخيار آخر مدرج. ثلاث بطاقات: 21 فترة منها 1 غير مغطاة؛ 2 طلبا تبادل في انتظار الموافقة؛ 0 قيد صارم منتهَك. الاحتياجات والتعيينات والأسماء مثال مبني.',
      header: `مطعم · أسبوع ${I('16–22')} نوفمبر · ${I('14')} موظفاً · الاحتياجات = وجبات آخر ${I('8')} أسابيع + الحجوزات · قواعد يكتبها المسيّر`,
      days: [`اثنين ${I('16')}`, `ثلاثاء ${I('17')}`, `أربعاء ${I('18')}`, `خميس ${I('19')}`, `جمعة ${I('20')}`, `سبت ${I('21')}`, `أحد ${I('22')}`],
      rows: [
        { name: `صباح · ${I('7–14')}`, sub: `مطبخ ${I('1')} + قاعة`, sub2: `احتياج أدنى ${I('2')}`, cells: [CELL(2, 2, 'سليم'), CELL(2, 2, 'سليم'), CELL(2, 2, 'سليم'), CELL(3, 3, 'سليم'), CELL(3, 3, 'سليم'), CELL(3, 3, 'سليم'), CELL(2, 2, 'سليم')] },
        { name: `غداء · ${I('11–16')}`, sub: `مطبخ ${I('2')} + قاعة`, sub2: 'ذروة: الجمعة', cells: [CELL(3, 3, 'سليم'), CELL(3, 3, 'سليم'), CELL(4, 4, 'سليم'), CELL(4, 4, 'سليم'), CELL(5, 5, 'سليم', `حجوزات ${I('61')}`), CELL(5, 5, 'سليم', `حجوزات ${I('70')}`), CELL(4, 4, 'سليم')] },
        { name: `مساء · ${I('18–00')}`, sub: `مطبخ ${I('2')} + قاعة + بار`, sub2: 'ذروة: السبت', cells: [CELL(3, 3, 'سليم'), CELL(3, 3, 'سليم'), CELL(4, 4, 'سليم'), CELL(5, 5, 'سليم', `حجوزات ${I('48')}`), CELL(6, 6, 'سليم', `حجوزات ${I('79')}`), CELL(5, 6, 'غير مغطاة', `حجوزات ${I('84')}`), CELL(4, 4, 'سليم')] },
      ],
      totals: { name: 'ساعات مخططة / يوم', cells: [I('47 h'), I('47 h'), I('58 h'), I('71 h'), I('82 h'), I('76 h'), I('58 h')] },
      proposal: `اقتراح للسبت مساءً: كريم · ${I('34')} ساعة هذا الأسبوع من ${I('40')} · راحة ${I('13')} ساعة قبلها · مؤهل للقاعة · تفضيل السبت محترم`,
      proposal2: `خيار آخر: نادية (${I('38')} ساعة، راحة ${I('11')} ساعة، لا تفضيل) · يختاره المسيّر ولا يُفرض · القيود الصارمة استبعدت ${I('9')} أشخاص`,
      tiles: [
        { big: `${I('21')} فترة · ${I('1')} ثغرة`, l1: `السبت مساءً، ${I('5')} من ${I('6')}، معلَّمة منذ الاقتراح`, l2: 'احتياج محسوب لا مخمَّن', hot: true },
        { big: `${I('2')} تبادلان`, l1: 'في انتظار موافقة المسيّر', l2: 'القواعد مفحوصة قبل وصول الطلب' },
        { big: `${I('0')} انتهاك`, l1: 'لقيد صارم على الأسبوع', l2: `حد ${I('40')} ساعة، راحة ${I('11')} ساعة، مؤهلات` },
      ],
      rule: 'الاحتياج لكل فترة يُحسب من النشاط ثم يُكتب؛ والتخطيط يُقارن بالاحتياج لا بالعادة.',
      rule2: 'الاقتراح يشرح كل خيار: ساعات الأسبوع، الراحة، المؤهل، التفضيل؛ المسيّر يقرر، والتطبيق لا يقرر.',
      note: 'الاحتياجات والتعيينات والساعات والأسماء مثال مبني؛ وعتبات الساعات والراحة قواعد يكتبها المسيّر لا قاعدة من هذا الدليل.',
    },
    week: {
      title: 'أسبوع أمينة: مخطط، مسجَّل، متبادَل، مستبدَلة',
      alt: 'شريط: أمينة، القاعة، 40 ساعة تعاقدية، قواعد مكتوبة: 40 ساعة حداً أقصى، 11 ساعة راحة بين وردِيتين، يوما راحة. سبعة مسارات، واحد لكل يوم، على محور من 6 صباحاً إلى منتصف الليل. الاثنين: غداء 11 إلى 16 مخطط ومسجَّل 10:58 إلى 16:05. الثلاثاء: مساء 18 إلى منتصف الليل، مسجَّل من 18:12، تأخر 12 دقيقة مميز. الأربعاء: راحة. الخميس: غداء 11 إلى 16 متبادَل مع ياسين بموافقة المسيّر، مميز. الجمعة: مساء 18 إلى منتصف الليل، مسجَّل؛ راحة 11 ساعة قبل السبت مفحوصة. السبت: صباح 7 إلى 14 ثم غياب مصرَّح به الساعة 6:40، استُبدلت بسفيان في 25 دقيقة، مميز. الأحد: راحة. ثلاث بطاقات: 29 ساعة مخططة ثم 17 ساعة مسجَّلة، 12 ساعة انتقلت إلى ياسين وسفيان؛ تبادل موافَق عليه واستبدال؛ 0 قيد منتهَك. الأوقات والأسماء مثال مبني.',
      header: `أمينة · القاعة · عقد ${I('40')} ساعة · قواعد مكتوبة: حد ${I('40')} ساعة / أسبوع · راحة ${I('11')} ساعة بين وردِيتين · يوما راحة · التخطيط يُقفل قبل يومين`,
      ticks: [6, 9, 12, 15, 18, 21, 24],
      lanes: [
        { day: `الاثنين ${I('16')}`, sub: `غداء · ${I('5')} ساعات`, plan: [{ from: 11, to: 16, l: `غداء ${I('11–16')}` }], clock: [{ from: 10.97, to: 16.08 }], right: I('5 h 07'), right2: 'مسجَّل' },
        { day: `الثلاثاء ${I('17')}`, sub: `مساء · ${I('6')} ساعات · تأخر ${I('12')} دقيقة`, hot: true, plan: [{ from: 18, to: 24, l: `مساء ${I('18–00')}` }], clock: [{ from: 18.2, to: 24, dev: true }], right: I('5 h 48'), right2: `تأخر ${I('12')} دقيقة · مدوَّن` },
        { day: `الأربعاء ${I('18')}`, sub: 'راحة', plan: [{ from: 6, to: 24, l: 'راحة', kind: 'off' }], right: '—', right2: 'راحة' },
        { day: `الخميس ${I('19')}`, sub: 'غداء · متبادَل مع ياسين', hot: true, plan: [{ from: 11, to: 16, l: `تبادل ← ياسين · موافَق ${I('17/11')}`, kind: 'swap' }], right: I('0 h'), right2: 'تبادل موافَق عليه' },
        { day: `الجمعة ${I('20')}`, sub: `مساء · ${I('6')} ساعات · راحة ${I('11')} ساعة قبل السبت ✓`, plan: [{ from: 18, to: 24, l: `مساء ${I('18–00')}` }], clock: [{ from: 17.95, to: 24 }], right: I('6 h 03'), right2: 'مسجَّل' },
        { day: `السبت ${I('21')}`, sub: `صباح · ${I('7')} ساعات · غياب مصرَّح ${I('6:40')}`, hot: true, plan: [{ from: 7, to: 14, l: `صباح ${I('7–14')} ← سفيان · استُبدلت في ${I('25')} دقيقة`, kind: 'swap' }], right: I('0 h'), right2: 'مستبدَلة · سفيان' },
        { day: `الأحد ${I('22')}`, sub: 'راحة', plan: [{ from: 6, to: 24, l: 'راحة', kind: 'off' }], right: '—', right2: 'راحة' },
      ],
      legend: ['مخطط', 'مسجَّل', 'فارق أو تغيير'],
      tiles: [
        { big: I('29 h → 17 h'), l1: 'مخطط، ثم مسجَّل بعد التبادل والاستبدال', l2: `${I('12')} ساعة انتقلت إلى ياسين وسفيان · فوارق لكل وردية` },
        { big: `${I('1')} تبادل · ${I('1')} استبدال`, l1: 'القواعد مفحوصة قبل الموافقة', l2: 'ساعات ياسين وسفيان معادة الحساب', hot: true },
        { big: `${I('0')} انتهاك`, l1: `حد ${I('40')} ساعة، راحة ${I('11')} ساعة، يوما راحة`, l2: 'يُفحص عند كل تغيير لا يوم الاثنين' },
      ],
      rule: 'كل تغيير، تبادل أو غياب أو استبدال، يُفحص مقابل القواعد المكتوبة قبل الموافقة ويعيد حساب ساعات كل واحد.',
      rule2: 'التسجيل يُقارن بالتخطيط وردية وردية؛ والساعات المعدودة تذهب إلى الأجور التي قواعدها ليست هنا.',
      note: 'الأوقات والفوارق والأسماء مثال مبني؛ وعتبات الساعات والراحة قواعد يكتبها المسيّر؛ والأجور وقواعدها خارج هذا الدليل.',
    },
  },
};
