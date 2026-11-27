// Bespoke animated figures for the 2027 "the van drives through the same neighbourhood twice" post.
//  plan():  Tuesday's 38 stops split into three vans: a schematic map (depot,
//           stops coloured by van, three routes drawn in sequence order) and,
//           on the right, one card per van with stop count, load vs capacity
//           bar, planned distance and duration, time-window check; a strip
//           under the map says how the plan was computed (zones → capacity →
//           sequence from a travel-time matrix). Routes draw, bars grow.
//  day():   the live day: three van rows on a 07:00–15:00 axis with planned
//           stops as ticks; at 10:40 a van breaks down and its six remaining
//           stops move to the other two with ETA messages; a planned-vs-actual
//           comparison and three counters. Rows appear, the move arrows draw.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function draw(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{stroke-dashoffset:1000}${(at + dur).toFixed(1)}%,100%{stroke-dashoffset:0}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function grow(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
const I = (x) => `⁦${x}⁩`;

// schematic stop coordinates inside a 560×300 map box, grouped by van (0,1,2)
const STOPS = [
  // van 0 (west / Bab El Oued side)
  [0, 60, 70], [0, 110, 40], [0, 150, 90], [0, 95, 130], [0, 50, 170], [0, 130, 200], [0, 180, 150], [0, 210, 60], [0, 240, 110], [0, 170, 250], [0, 90, 240], [0, 230, 200],
  // van 1 (centre)
  [1, 300, 50], [1, 340, 100], [1, 290, 140], [1, 330, 190], [1, 370, 60], [1, 400, 130], [1, 360, 250], [1, 300, 230], [1, 420, 200], [1, 440, 80], [1, 390, 280], [1, 260, 280],
  // van 2 (east)
  [2, 480, 40], [2, 520, 90], [2, 470, 140], [2, 530, 170], [2, 500, 230], [2, 540, 270], [2, 460, 270], [2, 500, 120], [2, 540, 40], [2, 470, 200], [2, 420, 290], [2, 520, 220], [2, 450, 90], [2, 490, 290],
];
const DEPOT = [280, 300];

export function plan(t, rtl) {
  const c = ctx(rtl); const P = 'pl'; const css = []; const H = 620;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  const mx = 80, my = 112, mw = 560, mh = 310;
  s += text(c, mx, 100, t.mapLabel, { size: 10, font: 'mono', fill: C.fg35, letter: 1.5, upper: true });
  s += rect(c, mx, my, mw, mh, { stroke: C.line2, fill: C.fill });
  // faint grid
  for (let gx = 70; gx < mw; gx += 70) s += line(c, mx + gx, my, mx + gx, my + mh, { stroke: C.line });
  for (let gy = 62; gy < mh; gy += 62) s += line(c, mx, my + gy, mx + mw, my + gy, { stroke: C.line });
  const colour = [C.fg70, C.accent, C.fg55];
  // routes
  [0, 1, 2].forEach((v) => {
    const raw = STOPS.filter((p) => p[0] === v).map((p) => [mx + p[1], my + p[2]]);
    // order stops by angle around the group's centroid (a simple, non-crossing loop), starting nearest the depot
    const cx = raw.reduce((a, q) => a + q[0], 0) / raw.length, cy = raw.reduce((a, q) => a + q[1], 0) / raw.length;
    const sorted = raw.slice().sort((p1, p2) => Math.atan2(p1[1] - cy, p1[0] - cx) - Math.atan2(p2[1] - cy, p2[0] - cx));
    const dep = [mx + DEPOT[0], my + DEPOT[1]];
    let start = 0, best = Infinity; sorted.forEach((q, i) => { const d = (q[0] - dep[0]) ** 2 + (q[1] - dep[1]) ** 2; if (d < best) { best = d; start = i; } });
    const pts = sorted.slice(start).concat(sorted.slice(0, start));
    const path = [[mx + DEPOT[0], my + DEPOT[1]], ...pts, [mx + DEPOT[0], my + DEPOT[1]]].map(([x, y], i) => `${i ? 'L' : 'M'}${c.X(x)} ${y}`).join(' ');
    s += `<path d="${path}" fill="none" stroke="${colour[v]}" stroke-width="${v === 1 ? 1.6 : 1.1}" stroke-dasharray="${v === 1 ? '' : '4 3'}" pathLength="1000" style="stroke-dashoffset:0;animation:${draw(css, P, `r${v}`, 6 + v * 9, 8)}"/>`;
  });
  // stops
  STOPS.forEach((p, i) => { s += `<g style="animation:${show(css, P, `s${i}`, 3 + (i % 14) * 0.2 + p[0] * 0.3)}">` + circle(c, mx + p[1], my + p[2], 4, { fill: colour[p[0]], stroke: 'none' }) + '</g>'; });
  // depot
  s += rect(c, mx + DEPOT[0] - 8, my + DEPOT[1] - 8, 16, 16, { stroke: C.accent, fill: '#0b0f19' }) + text(c, mx + DEPOT[0] + (rtl ? -14 : 14), my + DEPOT[1] - 2, t.depot, { size: 9.5, font: 'mono', fill: C.accent });
  // zone labels
  t.zones.forEach((z, i) => { s += text(c, mx + [40, 300, 470][i], my + 20, z, { size: 9.5, font: 'mono', fill: colour[i], letter: 1 }); });
  // van cards
  const vx = 680, vw = 440, vh = 92;
  t.vans.forEach((v, i) => {
    const y = 112 + i * 104; const at = 14 + i * 9;
    s += `<g style="animation:${show(css, P, `v${i}`, at)}">` + rect(c, vx, y, vw, vh, { stroke: i === 1 ? C.accent : C.line2, fill: i === 1 ? 'rgba(242,181,68,0.06)' : C.fill })
      + text(c, vx + 12, y + 20, v.title, { size: 12, fill: i === 1 ? C.accent : C.fg, weight: 500 })
      + text(c, vx + vw - 12, y + 20, v.stops, { size: 10.5, font: 'mono', fill: C.fg70, anchor: 'end' })
      + text(c, vx + 12, y + 38, v.loadLabel, { size: 9, font: 'mono', fill: C.fg55 })
      + rect(c, vx + 12, y + 44, vw - 24, 8, { stroke: C.line2, fill: 'none' })
      + `<g style="transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'};animation:${grow(css, P, `lb${i}`, at + 1, 3)}">` + rect(c, vx + 12, y + 44, Math.round((vw - 24) * v.load), 8, { stroke: 'none', fill: v.load > 0.95 ? C.accent : C.fg55 }) + '</g>'
      + text(c, vx + 12, y + 68, v.l1, { size: 9.5, font: 'mono', fill: C.fg70 }) + text(c, vx + 12, y + 82, v.l2, { size: 9.5, font: 'mono', fill: v.warn ? C.accent : C.fg55 }) + '</g>';
  });
  // how computed strip
  const hy = 446;
  s += `<g style="animation:${show(css, P, 'how', 36)}">` + text(c, 80, hy, t.howLabel, { size: 10, font: 'mono', fill: C.fg35, letter: 1.5, upper: true });
  t.how.forEach((h, i) => { const x = 80 + i * 262; s += rect(c, x, hy + 10, 250, 54, { stroke: i === 2 ? C.accent : C.line2, fill: C.fill }) + text(c, x + 10, hy + 28, h.t, { size: 10.5, fill: i === 2 ? C.accent : C.fg }) + text(c, x + 10, hy + 43, h.l1, { size: 8.5, font: 'mono', fill: C.fg55 }) + text(c, x + 10, hy + 56, h.l2, { size: 8.5, font: 'mono', fill: C.fg55 }); if (i < 3) s += text(c, x + 255, hy + 42, rtl ? '←' : '→', { size: 12, fill: C.fg35 }); });
  s += '</g>';
  s += text(c, 80, 536, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, 556, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, 576, t.rule3, { size: 12.5, fill: C.fg }) + text(c, 80, 600, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"],svg path[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

export function day(t, rtl) {
  const c = ctx(rtl); const P = 'dy'; const css = []; const H = 600;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  const ax = 300, aw = 820, ay = 120; const hourX = (h) => ax + ((h - 7) / 8) * aw; // 07:00..15:00
  s += text(c, 80, 100, t.axisLabel, { size: 10, font: 'mono', fill: C.fg35, letter: 1.5, upper: true });
  for (let h = 7; h <= 15; h++) { s += line(c, hourX(h), ay - 6, hourX(h), ay + 250, { stroke: C.line }) + text(c, hourX(h), ay - 12, `${String(h).padStart(2, '0')}:00`, { size: 9, font: 'mono', fill: C.fg35, anchor: 'middle' }); }
  // event marker
  s += `<g style="animation:${show(css, P, 'ev', 16)}">` + line(c, hourX(10.67), ay - 6, hourX(10.67), ay + 250, { stroke: C.accent, dash: '3 3' }) + text(c, hourX(10.67) + (rtl ? -6 : 6), ay + 262, t.event, { size: 9.5, font: 'mono', fill: C.accent }) + '</g>';
  const rows = t.vans; const rh = 78;
  rows.forEach((v, i) => {
    const y = ay + 10 + i * rh; const at = 3 + i * 3;
    s += `<g style="animation:${show(css, P, `n${i}`, at)}">` + text(c, 80, y + 18, v.name, { size: 11, fill: C.fg, weight: 500 }) + text(c, 80, y + 33, v.sub, { size: 8.5, font: 'mono', fill: v.hot ? C.accent : C.fg55 }) + text(c, 80, y + 48, v.sub2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>';
    // planned bar
    s += `<g style="animation:${show(css, P, `pb${i}`, at + 1)}">` + text(c, ax - 8, y + 12, t.planned, { size: 7.5, font: 'mono', fill: C.fg35, anchor: 'end' }) + rect(c, hourX(v.plan[0]), y + 6, hourX(v.plan[1]) - hourX(v.plan[0]), 10, { stroke: C.line2, fill: 'none' }) + '</g>';
    v.planStops.forEach((h, k) => { s += `<g style="animation:${show(css, P, `ps${i}${k}`, at + 1)}">` + line(c, hourX(h), y + 6, hourX(h), y + 16, { stroke: C.fg55 }) + '</g>'; });
    // actual bar(s)
    s += `<g style="animation:${show(css, P, `ab${i}`, at + 2)}">` + text(c, ax - 8, y + 34, t.actual, { size: 7.5, font: 'mono', fill: C.fg35, anchor: 'end' }) + '</g>';
    v.actual.forEach((seg, k) => { s += `<g style="animation:${show(css, P, `as${i}${k}`, seg.at)}">` + rect(c, hourX(seg.from), y + 26, hourX(seg.to) - hourX(seg.from), 14, { stroke: seg.kind === 'down' ? C.accent : C.line2, fill: seg.kind === 'down' ? 'rgba(242,181,68,0.18)' : seg.kind === 'added' ? 'rgba(242,181,68,0.08)' : C.fill }) + (seg.label ? text(c, hourX(seg.from) + (rtl ? -6 : 6), y + 54, seg.label, { size: 8.5, font: 'mono', fill: seg.kind === 'down' ? C.accent : C.fg70 }) : '') + '</g>'; });
    v.actualStops.forEach((h, k) => { s += `<g style="animation:${show(css, P, `at${i}${k}`, h.at)}">` + line(c, hourX(h.h), y + 26, hourX(h.h), y + 40, { stroke: h.added ? C.accent : C.fg55 }) + '</g>'; });
  });
  // move arrows from van 1 (index 1) remaining to vans 0 and 2
  const fromY = ay + 10 + 1 * rh + 33;
  [[0, 3], [2, 3]].forEach(([to, n], k) => {
    const ty = ay + 10 + to * rh + 33; const x1 = hourX(11.5), x2 = hourX(to === 0 ? 12.9 : 13.1);
    s += `<path d="M${c.X(x1)} ${fromY} C ${c.X(x1 + 40)} ${fromY}, ${c.X(x2 - 40)} ${ty}, ${c.X(x2)} ${ty}" fill="none" stroke="${C.accent}" stroke-width="1.2" pathLength="1000" style="stroke-dashoffset:0;animation:${draw(css, P, `mv${k}`, 20 + k * 2, 3)}"/>`;
    s += `<g style="animation:${show(css, P, `ml${k}`, 23 + k * 2)}">` + text(c, (x1 + x2) / 2, (fromY + ty) / 2 + (to === 0 ? -6 : 12), t.moved(n), { size: 8.5, font: 'mono', fill: C.accent, anchor: 'middle' }) + '</g>';
  });
  // messages box
  const bx = 80, by = 400;
  s += `<g style="animation:${show(css, P, 'msg', 28)}">` + rect(c, bx, by, 560, 64, { stroke: C.line2, fill: C.fill }) + text(c, bx + 10, by + 17, t.msgTitle, { size: 10.5, fill: C.fg }) + t.msgs.map((m, k) => text(c, bx + 10, by + 33 + k * 13, m, { size: 8.5, font: 'mono', fill: C.fg55 })).join('') + '</g>';
  t.counters.forEach((k, i) => { const x = 660 + i * 156; s += `<g style="animation:${show(css, P, `k${i}`, 32 + i * 2)}">` + rect(c, x, by, 148, 64, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? 'rgba(242,181,68,0.06)' : C.fill }) + text(c, x + 10, by + 26, k.big, { size: 15, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 10, by + 42, k.l1, { size: 9, fill: C.fg70 }) + text(c, x + 10, by + 55, k.l2, { size: 9, fill: C.fg70 }) + '</g>'; });
  s += text(c, 80, 500, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, 520, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, 540, t.rule3, { size: 12.5, fill: C.fg }) + text(c, 80, 566, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"],svg path[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

const ACT = (from, to, kind, label, at) => ({ from, to, kind, label, at });
const ST = (h, at, added) => ({ h, at, added });

export const STRINGS = {
  fr: {
    plan: {
      title: 'Les 38 arrêts de mardi dans trois camionnettes : zones, charge, ordre',
      alt: 'À gauche, une carte schématique d’Alger avec le dépôt en bas au centre et trente-huit points de livraison colorés selon la camionnette ; trois trajets partent du dépôt et y reviennent, un par camionnette, dans l’ordre des arrêts. À droite, une carte par camionnette : A, douze arrêts, 940 kilos sur 1 200, 46 kilomètres, 5 h 50 ; B, douze arrêts, 1 180 kilos sur 1 200, 38 kilomètres, 6 h 10, un créneau client serré ; C, quatorze arrêts, 760 kilos sur 1 200, 52 kilomètres, 6 h 05. En dessous, quatre cases disent comment le plan a été calculé : regrouper par zone, vérifier la charge, ordonner avec une matrice de temps de trajet, vérifier les créneaux. Les données sont un exemple construit.',
      mapLabel: 'Mardi 10 novembre · 38 arrêts · 3 camionnettes · départ 7 h', depot: 'dépôt',
      zones: ['zone Ouest · A', 'zone Centre · B', 'zone Est · C'],
      vans: [
        { title: 'Camionnette A · Ouest', stops: '12 arrêts', loadLabel: 'charge 940 / 1 200 kg', load: 0.78, l1: '46 km · 5 h 50 prévues · retour 12 h 50', l2: 'créneaux : tous respectés' },
        { title: 'Camionnette B · Centre', stops: '12 arrêts', loadLabel: 'charge 1 180 / 1 200 kg', load: 0.98, l1: '38 km · 6 h 10 prévues · retour 13 h 10', l2: 'créneau 9 h–10 h chez Ryad : arrêt 3, marge 8 min', warn: true },
        { title: 'Camionnette C · Est', stops: '14 arrêts', loadLabel: 'charge 760 / 1 200 kg', load: 0.63, l1: '52 km · 6 h 05 prévues · retour 13 h 05', l2: 'créneaux : tous respectés' },
      ],
      howLabel: 'Comment le plan est calculé, chaque soir à 18 h',
      how: [
        { t: '1 · Regrouper par zone', l1: 'zones de livraison du guide adresses', l2: '38 arrêts → 3 groupes voisins' },
        { t: '2 · Vérifier la charge', l1: 'poids et volume par commande', l2: 'un groupe > 1 200 kg → arrêt déplacé' },
        { t: '3 · Ordonner les arrêts', l1: 'matrice de temps de trajet (table)', l2: 'ordre proche de l’optimal (trip)' },
        { t: '4 · Vérifier les créneaux', l1: 'heure prévue par arrêt, marge', l2: 'créneau manqué → ordre ajusté, alerte' },
      ],
      rule: 'Le plan n’est pas l’ordre dans lequel les commandes sont arrivées : il est calculé la veille à partir des zones, des charges et des temps de trajet réels.',
      rule2: 'L’ordre des arrêts vient d’une matrice de temps de trajet entre toutes les paires d’adresses, pas de la distance à vol d’oiseau ; la rue en sens unique compte.',
      rule3: 'Le planificateur peut déplacer un arrêt à la main ; le plan recalcule l’heure prévue de tous les suivants et le dit.',
      note: 'arrêts, charges, kilomètres et heures : exemple construit · le moteur de calcul d’itinéraires est un logiciel libre installé sur le serveur, avec les cartes OpenStreetMap',
    },
    day: {
      title: 'La journée réelle : la camionnette B tombe en panne à 10 h 40, six arrêts bougent',
      alt: 'Trois lignes, une par camionnette, sur un axe de 7 h à 15 h ; pour chacune, la barre prévue avec ses arrêts et la barre réelle. À 10 h 40, une ligne en pointillé marque la panne de la camionnette B : sa barre réelle s’arrête, et deux flèches déplacent trois arrêts vers A et trois vers C, dont les barres réelles s’allongent avec les arrêts ajoutés en accent. En bas, un encadré des messages envoyés aux six clients avec la nouvelle heure prévue, et trois compteurs : 38 livrés sur 38, retour 14 h 20 au lieu de 13 h 10, 2 créneaux manqués. Les données sont un exemple construit.',
      axisLabel: 'Mardi 10 novembre · prévu et réel · 7 h → 15 h', planned: 'prévu', actual: 'réel', event: 'panne B · 10 h 40',
      vans: [
        { name: 'Camionnette A', sub: '12 arrêts prévus · 15 réels', sub2: '+ 3 arrêts du Centre à 11 h 05', plan: [7, 12.83], planStops: [7.5, 7.9, 8.3, 8.8, 9.2, 9.7, 10.1, 10.6, 11.0, 11.5, 12.0, 12.5], actual: [ACT(7, 12.9, 'ok', '', 6), ACT(12.9, 14.0, 'added', '+ 3 arrêts · 1 h 05', 24)], actualStops: [ST(7.6, 6), ST(8.0, 6), ST(8.4, 6), ST(8.9, 6), ST(9.3, 6), ST(9.8, 6), ST(10.2, 6), ST(10.7, 6), ST(11.1, 6), ST(11.6, 6), ST(12.1, 6), ST(12.6, 6), ST(13.1, 24, true), ST(13.5, 24, true), ST(13.9, 24, true)] },
        { name: 'Camionnette B', sub: 'panne à 10 h 40 · 6 arrêts faits', sub2: '6 restants redistribués en 4 min', hot: true, plan: [7, 13.17], planStops: [7.6, 8.1, 8.6, 9.1, 9.5, 10.0, 10.5, 11.0, 11.5, 12.0, 12.5, 13.0], actual: [ACT(7, 10.67, 'ok', '', 9), ACT(10.67, 11.5, 'down', 'panne · dépanneuse', 16)], actualStops: [ST(7.7, 9), ST(8.2, 9), ST(8.7, 9), ST(9.2, 9), ST(9.6, 9), ST(10.1, 9)] },
        { name: 'Camionnette C', sub: '14 arrêts prévus · 17 réels', sub2: '+ 3 arrêts du Centre à 11 h 30', plan: [7, 13.08], planStops: [7.4, 7.8, 8.2, 8.6, 9.0, 9.4, 9.8, 10.2, 10.6, 11.0, 11.4, 11.9, 12.4, 12.9], actual: [ACT(7, 13.1, 'ok', '', 12), ACT(13.1, 14.33, 'added', '+ 3 arrêts · 1 h 15', 26)], actualStops: [ST(7.5, 12), ST(7.9, 12), ST(8.3, 12), ST(8.7, 12), ST(9.1, 12), ST(9.5, 12), ST(9.9, 12), ST(10.3, 12), ST(10.7, 12), ST(11.1, 12), ST(11.5, 12), ST(12.0, 12), ST(12.5, 12), ST(13.0, 12), ST(13.4, 26, true), ST(13.8, 26, true), ST(14.2, 26, true)] },
      ],
      moved: (n) => `${n} arrêts`,
      msgTitle: 'Messages envoyés à 10 h 44 aux six clients déplacés',
      msgs: ['« Votre livraison est décalée : nouvelle heure prévue 13 h 10–13 h 40, livreur Karim (A). Répondez 1 pour confirmer, 2 pour demain. »', 'quatre confirmations · un report à demain · un sans réponse → appel du planificateur à 11 h'],
      counters: [{ big: '38 / 38', l1: 'livrés le jour', l2: 'dont 1 reporté à J+1' }, { big: '14 h 20', l1: 'dernier retour', l2: 'au lieu de 13 h 10', hot: true }, { big: '2', l1: 'créneaux manqués', l2: 'prévenus avant l’heure' }],
      rule: 'Le plan de la veille est une hypothèse ; la journée le corrige, et chaque correction recalcule les heures prévues et prévient les clients concernés avant l’heure.',
      rule2: 'Redistribuer six arrêts prend quatre minutes parce que les charges, les positions et les temps de trajet sont déjà connus ; à la main, c’est une heure de téléphone.',
      rule3: 'Le réel est écrit arrêt par arrêt, heure d’arrivée et heure de départ, par l’application du livreur ; c’est lui qui nourrit le plan de la semaine suivante.',
      note: 'horaires, arrêts et messages : exemple construit · les heures d’arrivée viennent de l’application du livreur, hors ligne dans la cage d’escalier, synchronisée au retour du réseau',
    },
  },
  en: {
    plan: {
      title: 'Tuesday’s 38 stops in three vans: zones, load, order',
      alt: 'On the left, a schematic map of Algiers with the depot at the bottom centre and thirty-eight delivery points coloured by van; three routes leave the depot and return to it, one per van, in stop order. On the right, one card per van: A, twelve stops, 940 kilos of 1,200, 46 kilometres, 5 h 50; B, twelve stops, 1,180 kilos of 1,200, 38 kilometres, 6 h 10, one tight customer window; C, fourteen stops, 760 kilos of 1,200, 52 kilometres, 6 h 05. Below, four boxes say how the plan was computed: group by zone, check load, order with a travel-time matrix, check windows. The data is a constructed example.',
      mapLabel: 'Tuesday 10 November · 38 stops · 3 vans · departure 7:00', depot: 'depot',
      zones: ['West zone · A', 'Centre zone · B', 'East zone · C'],
      vans: [
        { title: 'Van A · West', stops: '12 stops', loadLabel: 'load 940 / 1,200 kg', load: 0.78, l1: '46 km · 5 h 50 planned · back 12:50', l2: 'windows: all met' },
        { title: 'Van B · Centre', stops: '12 stops', loadLabel: 'load 1,180 / 1,200 kg', load: 0.98, l1: '38 km · 6 h 10 planned · back 13:10', l2: '9:00–10:00 window at Ryad: stop 3, 8 min margin', warn: true },
        { title: 'Van C · East', stops: '14 stops', loadLabel: 'load 760 / 1,200 kg', load: 0.63, l1: '52 km · 6 h 05 planned · back 13:05', l2: 'windows: all met' },
      ],
      howLabel: 'How the plan is computed, every evening at 18:00',
      how: [
        { t: '1 · Group by zone', l1: 'delivery zones from the address guide', l2: '38 stops → 3 neighbouring groups' },
        { t: '2 · Check the load', l1: 'weight and volume per order', l2: 'a group > 1,200 kg → stop moved' },
        { t: '3 · Order the stops', l1: 'travel-time matrix (table)', l2: 'near-optimal order (trip)' },
        { t: '4 · Check the windows', l1: 'planned time per stop, margin', l2: 'missed window → order adjusted, alert' },
      ],
      rule: 'The plan is not the order in which orders arrived: it is computed the evening before from zones, loads and real travel times.',
      rule2: 'The stop order comes from a travel-time matrix between all pairs of addresses, not from straight-line distance; the one-way street counts.',
      rule3: 'The planner can move a stop by hand; the plan recomputes the planned time of every following stop and says so.',
      note: 'stops, loads, kilometres and times: constructed example · the routing engine is open-source software installed on the server, with OpenStreetMap maps',
    },
    day: {
      title: 'The real day: van B breaks down at 10:40, six stops move',
      alt: 'Three rows, one per van, on a 7:00 to 15:00 axis; for each, the planned bar with its stops and the actual bar. At 10:40, a dotted line marks van B’s breakdown: its actual bar stops, and two arrows move three stops to A and three to C, whose actual bars extend with the added stops in accent. At the bottom, a box of the messages sent to the six customers with the new planned time, and three counters: 38 of 38 delivered, last return 14:20 instead of 13:10, 2 windows missed. The data is a constructed example.',
      axisLabel: 'Tuesday 10 November · planned and actual · 7:00 → 15:00', planned: 'planned', actual: 'actual', event: 'B breakdown · 10:40',
      vans: [
        { name: 'Van A', sub: '12 stops planned · 15 actual', sub2: '+ 3 Centre stops at 11:05', plan: [7, 12.83], planStops: [7.5, 7.9, 8.3, 8.8, 9.2, 9.7, 10.1, 10.6, 11.0, 11.5, 12.0, 12.5], actual: [ACT(7, 12.9, 'ok', '', 6), ACT(12.9, 14.0, 'added', '+ 3 stops · 1 h 05', 24)], actualStops: [ST(7.6, 6), ST(8.0, 6), ST(8.4, 6), ST(8.9, 6), ST(9.3, 6), ST(9.8, 6), ST(10.2, 6), ST(10.7, 6), ST(11.1, 6), ST(11.6, 6), ST(12.1, 6), ST(12.6, 6), ST(13.1, 24, true), ST(13.5, 24, true), ST(13.9, 24, true)] },
        { name: 'Van B', sub: 'breakdown at 10:40 · 6 stops done', sub2: '6 remaining redistributed in 4 min', hot: true, plan: [7, 13.17], planStops: [7.6, 8.1, 8.6, 9.1, 9.5, 10.0, 10.5, 11.0, 11.5, 12.0, 12.5, 13.0], actual: [ACT(7, 10.67, 'ok', '', 9), ACT(10.67, 11.5, 'down', 'breakdown · tow truck', 16)], actualStops: [ST(7.7, 9), ST(8.2, 9), ST(8.7, 9), ST(9.2, 9), ST(9.6, 9), ST(10.1, 9)] },
        { name: 'Van C', sub: '14 stops planned · 17 actual', sub2: '+ 3 Centre stops at 11:30', plan: [7, 13.08], planStops: [7.4, 7.8, 8.2, 8.6, 9.0, 9.4, 9.8, 10.2, 10.6, 11.0, 11.4, 11.9, 12.4, 12.9], actual: [ACT(7, 13.1, 'ok', '', 12), ACT(13.1, 14.33, 'added', '+ 3 stops · 1 h 15', 26)], actualStops: [ST(7.5, 12), ST(7.9, 12), ST(8.3, 12), ST(8.7, 12), ST(9.1, 12), ST(9.5, 12), ST(9.9, 12), ST(10.3, 12), ST(10.7, 12), ST(11.1, 12), ST(11.5, 12), ST(12.0, 12), ST(12.5, 12), ST(13.0, 12), ST(13.4, 26, true), ST(13.8, 26, true), ST(14.2, 26, true)] },
      ],
      moved: (n) => `${n} stops`,
      msgTitle: 'Messages sent at 10:44 to the six moved customers',
      msgs: ['“Your delivery is rescheduled: new planned time 13:10–13:40, driver Karim (A). Reply 1 to confirm, 2 for tomorrow.”', 'four confirmations · one postponed to tomorrow · one no reply → planner calls at 11:00'],
      counters: [{ big: '38 / 38', l1: 'delivered that day', l2: 'incl. 1 postponed to D+1' }, { big: '14:20', l1: 'last return', l2: 'instead of 13:10', hot: true }, { big: '2', l1: 'windows missed', l2: 'warned before the time' }],
      rule: 'The evening plan is a hypothesis; the day corrects it, and every correction recomputes planned times and warns the affected customers before the time.',
      rule2: 'Redistributing six stops takes four minutes because loads, positions and travel times are already known; by hand, it is an hour on the phone.',
      rule3: 'The actual is written stop by stop, arrival and departure time, by the driver’s application; it is what feeds next week’s plan.',
      note: 'times, stops and messages: constructed example · arrival times come from the driver’s application, offline in the stairwell, synced when the network returns',
    },
  },
  ar: {
    plan: {
      title: 'محطات الثلاثاء الثماني والثلاثون في ثلاث شاحنات صغيرة: مناطق، حمولة، ترتيب',
      alt: 'على جانب، خريطة تخطيطية للجزائر العاصمة مع المستودع في الأسفل وسطاً وثمانٍ وثلاثين نقطة تسليم ملوّنة حسب الشاحنة؛ ثلاثة مسارات تخرج من المستودع وتعود إليه، واحد لكل شاحنة، بترتيب المحطات. على الجانب الآخر بطاقة لكل شاحنة: أ، اثنتا عشرة محطة، 940 كيلوغراماً من 1,200، 46 كيلومتراً، 5 س 50؛ ب، اثنتا عشرة محطة، 1,180 من 1,200، 38 كيلومتراً، 6 س 10، نافذة زبون ضيقة؛ ج، أربع عشرة محطة، 760 من 1,200، 52 كيلومتراً، 6 س 05. وفي الأسفل أربعة مربعات تقول كيف حُسبت الخطة: تجميع حسب المنطقة، فحص الحمولة، ترتيب بمصفوفة أزمنة السفر، فحص النوافذ. والبيانات مثال مبني.',
      mapLabel: 'الثلاثاء 10 نوفمبر · 38 محطة · 3 شاحنات · انطلاق 07:00', depot: 'المستودع',
      zones: ['المنطقة الغربية · أ', 'المنطقة الوسطى · ب', 'المنطقة الشرقية · ج'],
      vans: [
        { title: 'الشاحنة أ · الغرب', stops: '12 محطة', loadLabel: `حمولة ${I('940 / 1,200')} كغ`, load: 0.78, l1: '46 كم · 5 س 50 مخططة · عودة 12:50', l2: 'النوافذ: كلها محترمة' },
        { title: 'الشاحنة ب · الوسط', stops: '12 محطة', loadLabel: `حمولة ${I('1,180 / 1,200')} كغ`, load: 0.98, l1: '38 كم · 6 س 10 مخططة · عودة 13:10', l2: 'نافذة 09:00–10:00 عند رياض: المحطة 3، هامش 8 د', warn: true },
        { title: 'الشاحنة ج · الشرق', stops: '14 محطة', loadLabel: `حمولة ${I('760 / 1,200')} كغ`, load: 0.63, l1: '52 كم · 6 س 05 مخططة · عودة 13:05', l2: 'النوافذ: كلها محترمة' },
      ],
      howLabel: 'كيف تُحسب الخطة، كل مساء عند 18:00',
      how: [
        { t: '1 · التجميع حسب المنطقة', l1: 'مناطق التسليم من دليل العناوين', l2: '38 محطة ← 3 مجموعات متجاورة' },
        { t: '2 · فحص الحمولة', l1: 'وزن وحجم لكل طلبية', l2: 'مجموعة > 1,200 كغ ← محطة تُنقل' },
        { t: '3 · ترتيب المحطات', l1: 'مصفوفة أزمنة السفر (table)', l2: 'ترتيب قريب من الأمثل (trip)' },
        { t: '4 · فحص النوافذ', l1: 'وقت مخطط لكل محطة، هامش', l2: 'نافذة فائتة ← ترتيب معدَّل، تنبيه' },
      ],
      rule: 'الخطة ليست ترتيب وصول الطلبيات: تُحسب عشية اليوم من المناطق والحمولات وأزمنة السفر الحقيقية.',
      rule2: 'ترتيب المحطات يأتي من مصفوفة أزمنة السفر بين كل أزواج العناوين لا من المسافة المستقيمة؛ والشارع ذو الاتجاه الواحد يُحسب.',
      rule3: 'يستطيع المخطط نقل محطة يدوياً؛ وتعيد الخطة حساب الوقت المخطط لكل المحطات التالية وتقول ذلك.',
      note: 'المحطات والحمولات والكيلومترات والأوقات: مثال مبني · محرك حساب المسارات برنامج حر مثبَّت على الخادم بخرائط OpenStreetMap',
    },
    day: {
      title: 'اليوم الحقيقي: الشاحنة ب تتعطل عند 10:40، ست محطات تنتقل',
      alt: 'ثلاثة صفوف، واحد لكل شاحنة، على محور من 07:00 إلى 15:00؛ لكل منها الشريط المخطط بمحطاته والشريط الفعلي. عند 10:40 يشير خط منقّط إلى عطل الشاحنة ب: يتوقف شريطها الفعلي، وينقل سهمان ثلاث محطات إلى أ وثلاثاً إلى ج اللتين يمتد شريطاهما الفعليان بالمحطات المضافة المميزة. في الأسفل إطار بالرسائل المرسَلة إلى الزبائن الستة بالوقت المخطط الجديد، وثلاثة عدادات: 38 من 38 مسلَّمة، آخر عودة 14:20 بدل 13:10، نافذتان فائتتان. والبيانات مثال مبني.',
      axisLabel: 'الثلاثاء 10 نوفمبر · مخطط وفعلي · 07:00 ← 15:00', planned: 'مخطط', actual: 'فعلي', event: 'عطل ب · 10:40',
      vans: [
        { name: 'الشاحنة أ', sub: '12 محطة مخططة · 15 فعلية', sub2: '+ 3 محطات من الوسط عند 11:05', plan: [7, 12.83], planStops: [7.5, 7.9, 8.3, 8.8, 9.2, 9.7, 10.1, 10.6, 11.0, 11.5, 12.0, 12.5], actual: [ACT(7, 12.9, 'ok', '', 6), ACT(12.9, 14.0, 'added', '+ 3 محطات · 1 س 05', 24)], actualStops: [ST(7.6, 6), ST(8.0, 6), ST(8.4, 6), ST(8.9, 6), ST(9.3, 6), ST(9.8, 6), ST(10.2, 6), ST(10.7, 6), ST(11.1, 6), ST(11.6, 6), ST(12.1, 6), ST(12.6, 6), ST(13.1, 24, true), ST(13.5, 24, true), ST(13.9, 24, true)] },
        { name: 'الشاحنة ب', sub: 'عطل عند 10:40 · 6 محطات أُنجزت', sub2: '6 متبقية أُعيد توزيعها في 4 د', hot: true, plan: [7, 13.17], planStops: [7.6, 8.1, 8.6, 9.1, 9.5, 10.0, 10.5, 11.0, 11.5, 12.0, 12.5, 13.0], actual: [ACT(7, 10.67, 'ok', '', 9), ACT(10.67, 11.5, 'down', 'عطل · شاحنة سحب', 16)], actualStops: [ST(7.7, 9), ST(8.2, 9), ST(8.7, 9), ST(9.2, 9), ST(9.6, 9), ST(10.1, 9)] },
        { name: 'الشاحنة ج', sub: '14 محطة مخططة · 17 فعلية', sub2: '+ 3 محطات من الوسط عند 11:30', plan: [7, 13.08], planStops: [7.4, 7.8, 8.2, 8.6, 9.0, 9.4, 9.8, 10.2, 10.6, 11.0, 11.4, 11.9, 12.4, 12.9], actual: [ACT(7, 13.1, 'ok', '', 12), ACT(13.1, 14.33, 'added', '+ 3 محطات · 1 س 15', 26)], actualStops: [ST(7.5, 12), ST(7.9, 12), ST(8.3, 12), ST(8.7, 12), ST(9.1, 12), ST(9.5, 12), ST(9.9, 12), ST(10.3, 12), ST(10.7, 12), ST(11.1, 12), ST(11.5, 12), ST(12.0, 12), ST(12.5, 12), ST(13.0, 12), ST(13.4, 26, true), ST(13.8, 26, true), ST(14.2, 26, true)] },
      ],
      moved: (n) => `${n} محطات`,
      msgTitle: 'رسائل أُرسلت عند 10:44 إلى الزبائن الستة المنقولين',
      msgs: ['«تسليمكم مؤجَّل: الوقت المخطط الجديد 13:10–13:40، السائق كريم (أ). أجيبوا بـ 1 للتأكيد، 2 للغد.»', 'أربعة تأكيدات · تأجيل واحد إلى الغد · واحد بلا رد ← اتصال المخطط عند 11:00'],
      counters: [{ big: I('38 / 38'), l1: 'مسلَّمة في اليوم', l2: 'منها 1 مؤجَّلة إلى الغد' }, { big: '14:20', l1: 'آخر عودة', l2: 'بدل 13:10', hot: true }, { big: '2', l1: 'نافذتان فائتتان', l2: 'نُبّه إليهما قبل الوقت' }],
      rule: 'خطة المساء فرضية؛ واليوم يصحّحها، وكل تصحيح يعيد حساب الأوقات المخططة وينبّه الزبائن المعنيين قبل الوقت.',
      rule2: 'إعادة توزيع ست محطات تستغرق أربع دقائق لأن الحمولات والمواقع وأزمنة السفر معروفة سلفاً؛ ويدوياً هي ساعة من الهاتف.',
      rule3: 'الفعلي يُكتب محطةً محطة، وقت الوصول ووقت المغادرة، بتطبيق السائق؛ وهو ما يغذي خطة الأسبوع التالي.',
      note: 'الأوقات والمحطات والرسائل: مثال مبني · أوقات الوصول تأتي من تطبيق السائق، دون اتصال في بئر السلم، ويُزامَن عند عودة الشبكة',
    },
  },
};
