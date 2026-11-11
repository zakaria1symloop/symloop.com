// Bespoke animated figures for the 2027 "fuel costs more than planned and nobody knows why" post.
//  vehicle(): one van's record: ten fuel-ups as consumption points (L/100 km)
//             against an expected band computed from the vehicle's own history,
//             two anomalies flagged with date and driver, the odometer readings
//             they came from; on the right the maintenance due by km, document
//             expiry dates and three figures. Points appear, band draws.
//  fleet():   the fleet board: six vehicles with driver, km this month,
//             consumption vs expected as a bar, cost per km, maintenance and
//             document state; totals and three counters. Rows appear, bars grow.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function draw(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{stroke-dashoffset:1000}${(at + dur).toFixed(1)}%,100%{stroke-dashoffset:0}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function grow(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
const I = (x) => `⁦${x}⁩`;

export function vehicle(t, rtl) {
  const c = ctx(rtl); const P = 'vh'; const css = []; const H = 560;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  // header
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: 'rgba(242,181,68,0.06)' }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  // chart
  const cx = 80, cy = 150, cw = 620, chh = 200; const ymin = 6, ymax = 18; const yOf = (v) => cy + chh - ((v - ymin) / (ymax - ymin)) * chh; const n = t.points.length; const xOf = (i) => cx + 30 + (i / (n - 1)) * (cw - 60);
  s += text(c, cx, cy - 10, t.chartLabel, { size: 10, font: 'mono', fill: C.fg35, letter: 1.5, upper: true });
  s += line(c, cx, cy + chh, cx + cw, cy + chh, { stroke: C.line2 }) + line(c, cx, cy, cx, cy + chh, { stroke: C.line });
  [8, 10, 12, 14, 16].forEach((v) => { s += line(c, cx, yOf(v), cx + cw, yOf(v), { stroke: C.line }) + text(c, cx - 6, yOf(v) + 3, String(v), { size: 8.5, font: 'mono', fill: C.fg35, anchor: 'end' }); });
  // expected band
  s += `<g style="animation:${show(css, P, 'band', 4)}">` + rect(c, cx, yOf(t.bandHi), cw, yOf(t.bandLo) - yOf(t.bandHi), { stroke: 'none', fill: 'rgba(242,181,68,0.10)' }) + line(c, cx, yOf(t.median), cx + cw, yOf(t.median), { stroke: C.accent, dash: '4 3' }) + text(c, cx + cw - 6, yOf(t.bandHi) - 5, t.bandLabel, { size: 8.5, font: 'mono', fill: C.accent, anchor: 'end' }) + '</g>';
  // polyline
  const path = t.points.map((p, i) => `${i ? 'L' : 'M'}${c.X(xOf(i))} ${yOf(p.v)}`).join(' ');
  s += `<path d="${path}" fill="none" stroke="${C.fg55}" stroke-width="1" pathLength="1000" style="stroke-dashoffset:0;animation:${draw(css, P, 'pl', 6, 8)}"/>`;
  t.points.forEach((p, i) => { const at = 6 + i * 0.8; s += `<g style="animation:${show(css, P, `p${i}`, at)}">` + circle(c, xOf(i), yOf(p.v), p.flag ? 6 : 4, { fill: p.flag ? C.accent : C.fg70, stroke: 'none' }) + text(c, xOf(i), cy + chh + 14, p.d, { size: 8, font: 'mono', fill: C.fg35, anchor: 'middle' }) + (p.flag ? text(c, xOf(i), yOf(p.v) - 12, p.v.toFixed(1), { size: 9.5, font: 'mono', fill: C.accent, anchor: 'middle' }) : '') + '</g>'; });
  // anomaly notes
  t.flags.forEach((f, i) => { const y = cy + chh + 34 + i * 16; s += `<g style="animation:${show(css, P, `f${i}`, 16 + i * 2)}">` + text(c, cx, y, f, { size: 9, font: 'mono', fill: C.accent }) + '</g>'; });
  // right panel
  const rx = 740, ry = 150, rw = 380;
  s += `<g style="animation:${show(css, P, 'm', 12)}">` + text(c, rx, ry - 10, t.maintLabel, { size: 10, font: 'mono', fill: C.fg35, letter: 1.5, upper: true });
  t.maint.forEach((m, i) => { const y = ry + i * 40; s += rect(c, rx, y, rw, 32, { stroke: m.hot ? C.accent : C.line2, fill: m.hot ? 'rgba(242,181,68,0.06)' : C.fill }) + text(c, rx + 10, y + 14, m.t, { size: 10, fill: m.hot ? C.accent : C.fg }) + text(c, rx + 10, y + 26, m.sub, { size: 8.5, font: 'mono', fill: C.fg55 }) + text(c, rx + rw - 10, y + 20, m.r, { size: 10, font: 'mono', fill: m.hot ? C.accent : C.fg70, anchor: 'end' }); });
  s += '</g>';
  const ky = ry + t.maint.length * 40 + 10;
  t.tiles.forEach((k, i) => { const x = rx + i * 128; s += `<g style="animation:${show(css, P, `k${i}`, 20 + i * 2)}">` + rect(c, x, ky, 118, 62, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? 'rgba(242,181,68,0.06)' : C.fill }) + text(c, x + 10, ky + 24, k.big, { size: 14, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 10, ky + 40, k.l1, { size: 8.5, fill: C.fg70 }) + text(c, x + 10, ky + 53, k.l2, { size: 8.5, fill: C.fg70 }) + '</g>'; });
  s += text(c, 80, 446, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, 466, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, 486, t.rule3, { size: 12.5, fill: C.fg }) + text(c, 80, 512, t.note, { size: 10, font: 'mono', fill: C.fg55 }) + text(c, 80, 528, t.note2, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"],svg path[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

export function fleet(t, rtl) {
  const c = ctx(rtl); const P = 'fl'; const css = []; const H = 548;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  const ly = 104; const cols = [80, 230, 330, 420, 560, 690, 800, 960];
  s += text(c, 80, ly, t.label, { size: 10, font: 'mono', fill: C.fg35, letter: 1.5, upper: true });
  t.cols.forEach((h, i) => { s += text(c, cols[i], ly + 22, h, { size: 9, font: 'mono', fill: C.fg35 }); });
  s += line(c, 80, ly + 30, 1120, ly + 30, { stroke: C.line2 });
  const bw = 120;
  t.rows.forEach((r, i) => {
    const y = ly + 54 + i * 36; const at = 3 + i * 1.8; const ratio = Math.min(1.5, r.cons / r.exp); const over = ratio > 1.15;
    s += `<g style="animation:${show(css, P, `r${i}`, at)}">` + line(c, 80, y + 14, 1120, y + 14, { stroke: C.line })
      + text(c, cols[0], y, r.v, { size: 10, fill: C.fg }) + text(c, cols[0], y + 11, r.sub, { size: 7.5, font: 'mono', fill: C.fg35 })
      + text(c, cols[1], y, r.driver, { size: 9.5, fill: C.fg70 }) + text(c, cols[2], y, r.km, { size: 9.5, font: 'mono', fill: C.fg70 })
      + rect(c, cols[3], y - 8, bw, 8, { stroke: C.line2, fill: 'none' }) + line(c, cols[3] + bw / 1.5, y - 10, cols[3] + bw / 1.5, y + 2, { stroke: C.fg35 })
      + `<g style="transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'};animation:${grow(css, P, `g${i}`, at + 0.5, 2)}">` + rect(c, cols[3], y - 8, Math.round(bw * ratio / 1.5), 8, { stroke: 'none', fill: over ? C.accent : C.fg55 }) + '</g>' + text(c, cols[3], y + 11, r.consT, { size: 7.5, font: 'mono', fill: over ? C.accent : C.fg55 })
      + text(c, cols[4], y, r.cost, { size: 9.5, font: 'mono', fill: over ? C.accent : C.fg }) + text(c, cols[5], y, r.maint, { size: 9, font: 'mono', fill: r.maintHot ? C.accent : C.fg55 }) + text(c, cols[6], y, r.docs, { size: 9, font: 'mono', fill: r.docsHot ? C.accent : C.fg55 }) + text(c, cols[7], y, r.flag, { size: 9, font: 'mono', fill: r.flagHot ? C.accent : C.fg55 }) + '</g>';
  });
  const ty = ly + 54 + t.rows.length * 36 + 10;
  t.tiles.forEach((k, i) => { const x = 80 + i * 262; s += `<g style="animation:${show(css, P, `k${i}`, 16 + i * 2)}">` + rect(c, x, ty, 250, 60, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? 'rgba(242,181,68,0.06)' : C.fill }) + text(c, x + 12, ty + 24, k.big, { size: 14, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ty + 41, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ty + 54, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  const ry = ty + 90;
  s += text(c, 80, ry, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, ry + 20, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, ry + 44, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    vehicle: {
      title: 'La fiche d’une camionnette : dix pleins, une bande attendue, deux anomalies, l’entretien au km',
      alt: 'En haut, la fiche de la camionnette B, immatriculée en 2024, 86 420 kilomètres au compteur, chauffeur habituel Karim. À gauche, dix pleins depuis septembre reportés en litres aux cent kilomètres, calculés depuis les litres du ticket et l’écart de compteur entre deux pleins : huit points entre 9,7 et 10,3 dans une bande attendue de 9,5 à 10,8 autour de la médiane du véhicule, et deux points hors bande, 13,6 le 2 octobre et 15,2 le 4 novembre, signalés avec la date et le chauffeur du jour. À droite, l’entretien dû par kilomètre : vidange à 90 000, dans 3 580 kilomètres, en accent ; pneus à 95 000 ; et les documents : assurance qui expire le 14 décembre, dans 33 jours, contrôle le 2 février. Trois tuiles : 18,4 dinars par kilomètre, 3 120 kilomètres ce mois, 312 litres. Les données sont un exemple construit.',
      header: 'Camionnette B · 2024 · 86 420 km · chauffeur habituel Karim · zone Centre · tournées + interventions',
      chartLabel: 'Consommation par plein · L / 100 km · depuis le compteur et le ticket',
      points: [{ d: '08/09', v: 9.8 }, { d: '15/09', v: 10.1 }, { d: '24/09', v: 9.9 }, { d: '02/10', v: 13.6, flag: true }, { d: '10/10', v: 10.0 }, { d: '17/10', v: 9.7 }, { d: '25/10', v: 10.3 }, { d: '31/10', v: 9.9 }, { d: '04/11', v: 15.2, flag: true }, { d: '09/11', v: 10.0 }],
      bandLo: 9.5, bandHi: 10.8, median: 10.0, bandLabel: 'bande attendue 9,5–10,8 · médiane 10,0 ± 8 %',
      flags: ['02/10 · 13,6 L/100 · chauffeur remplaçant Yacine · 410 km · justification demandée, aucune reçue', '04/11 · 15,2 L/100 · Karim · ticket de 62 L pour 408 km · à vérifier avec le gérant lundi'],
      maintLabel: 'Entretien et documents · depuis le compteur',
      maint: [
        { t: 'Vidange + filtres', sub: 'tous les 10 000 km · dernière à 80 000', r: 'dans 3 580 km', hot: true },
        { t: 'Pneus avant', sub: 'prévus à 95 000 · usure relevée au plein', r: 'dans 8 580 km' },
        { t: 'Assurance', sub: 'expire le 14 déc 2026 · alerte à 30 j', r: '33 jours', hot: true },
        { t: 'Contrôle périodique', sub: 'prochain le 2 fév 2027', r: '83 jours' },
      ],
      tiles: [{ big: '18,4 DA', l1: 'par km ce mois', l2: 'carburant + entretien' }, { big: '3 120 km', l1: 'ce mois', l2: '2 relevés / jour' }, { big: '312 L', l1: 'ce mois', l2: '2 pleins hors bande', hot: true }],
      rule: 'La consommation n’est pas déclarée : elle est calculée depuis les litres du ticket et l’écart de compteur entre deux pleins, photo à l’appui.',
      rule2: 'La bande attendue vient de l’historique du véhicule lui-même, pas d’une moyenne de la flotte ; un plein hors bande est une question posée, pas une accusation.',
      rule3: 'L’entretien est dû par kilomètre, et le kilomètre vient des relevés de chaque tournée ; l’alerte part avant l’échéance, pas après la panne.',
      note: 'véhicule, pleins, compteur, dates et coûts : exemple construit · consommation = litres ÷ kilomètres × 100, plus la valeur est basse, plus le véhicule est économe (définition courante)',
      note2: 'la consommation varie avec la charge, le relief et la conduite : la bande est large exprès, et c’est le gérant qui qualifie l’anomalie',
    },
    fleet: {
      title: 'Le tableau de la flotte : six véhicules, consommation contre attendu, coût au km, échéances',
      alt: 'Un tableau de six véhicules avec, pour chacun, le chauffeur, les kilomètres du mois, une barre de consommation réelle contre attendue avec un repère à 100 pour cent, le coût par kilomètre, l’état de l’entretien et des documents, et un signal : camionnette B, deux pleins hors bande ; camionnette D, vidange dépassée de 1 200 kilomètres ; fourgon F, assurance expirée dans 6 jours ; les autres à jour. En dessous, quatre tuiles : 17,1 dinars par kilomètre pour la flotte, 15 840 kilomètres ce mois, trois alertes ouvertes, une anomalie de carburant qualifiée. Les données sont un exemple construit.',
      label: 'Flotte · 6 véhicules · mois en cours au 11 novembre', cols: ['véhicule', 'chauffeur', 'km mois', 'conso / attendu (trait = 100 %)', 'DA / km', 'entretien', 'documents', 'signal'],
      rows: [
        { v: 'Camionnette A', sub: '2023 · 112 300 km', driver: 'Sofiane', km: '2 640', cons: 9.6, exp: 9.8, consT: '9,6 / 9,8', cost: '16,8', maint: 'à jour', docs: 'à jour', flag: '—' },
        { v: 'Camionnette B', sub: '2024 · 86 420 km', driver: 'Karim', km: '3 120', cons: 10.9, exp: 10.0, consT: '10,9 / 10,0', cost: '18,4', maint: 'vidange 3 580 km', docs: 'assurance 33 j', flag: '2 pleins hors bande', flagHot: true },
        { v: 'Camionnette C', sub: '2022 · 148 900 km', driver: 'Amine', km: '2 980', cons: 10.4, exp: 10.6, consT: '10,4 / 10,6', cost: '17,9', maint: 'à jour', docs: 'à jour', flag: '—' },
        { v: 'Camionnette D', sub: '2021 · 171 200 km', driver: 'Nadir', km: '2 410', cons: 11.3, exp: 11.0, consT: '11,3 / 11,0', cost: '19,6', maint: 'vidange − 1 200 km', maintHot: true, docs: 'à jour', flag: 'entretien dépassé', flagHot: true },
        { v: 'Fourgon F', sub: '2020 · 203 800 km', driver: 'Yacine', km: '1 860', cons: 13.1, exp: 12.8, consT: '13,1 / 12,8', cost: '21,2', maint: 'à jour', docs: 'assurance 6 j', docsHot: true, flag: 'document expire', flagHot: true },
        { v: 'Utilitaire G', sub: '2025 · 21 400 km', driver: 'pool', km: '2 830', cons: 7.9, exp: 8.1, consT: '7,9 / 8,1', cost: '12,3', maint: 'à jour', docs: 'à jour', flag: '—' },
      ],
      tiles: [{ big: '17,1 DA / km', l1: 'coût flotte ce mois', l2: 'carburant 71 % · entretien 29 %' }, { big: '15 840 km', l1: 'ce mois · 6 véhicules', l2: 'depuis les relevés de tournée' }, { big: '3', l1: 'alertes ouvertes', l2: 'entretien, document, carburant', hot: true }, { big: '1 / 2', l1: 'anomalie qualifiée', l2: 'par le gérant, avec cause' }],
      rule: 'Chaque véhicule est comparé à lui-même, pas aux autres : un fourgon chargé à 13 litres n’est pas une anomalie, une camionnette à 15 en est une.',
      rule2: 'Le coût par kilomètre additionne carburant et entretien sur les kilomètres relevés ; c’est le chiffre qui décide quel véhicule garder et lequel remplacer.',
      note: 'véhicules, chauffeurs, kilomètres et coûts : exemple construit · les échéances de documents sont des dates saisies par le gérant, pas des règles de l’application',
    },
  },
  en: {
    vehicle: {
      title: 'One van’s record: ten fuel-ups, an expected band, two anomalies, maintenance by km',
      alt: 'At the top, the record of van B, registered in 2024, 86,420 kilometres on the odometer, usual driver Karim. On the left, ten fuel-ups since September plotted in litres per hundred kilometres, computed from the receipt’s litres and the odometer gap between two fuel-ups: eight points between 9.7 and 10.3 inside an expected band from 9.5 to 10.8 around the vehicle’s median, and two points outside the band, 13.6 on 2 October and 15.2 on 4 November, flagged with the date and the day’s driver. On the right, maintenance due by kilometre: oil change at 90,000, in 3,580 kilometres, accented; tyres at 95,000; and documents: insurance expiring on 14 December, in 33 days, inspection on 2 February. Three tiles: 18.4 dinars per kilometre, 3,120 kilometres this month, 312 litres. The data is a constructed example.',
      header: 'Van B · 2024 · 86,420 km · usual driver Karim · Centre zone · rounds + interventions',
      chartLabel: 'Consumption per fuel-up · L / 100 km · from odometer and receipt',
      points: [{ d: '08/09', v: 9.8 }, { d: '15/09', v: 10.1 }, { d: '24/09', v: 9.9 }, { d: '02/10', v: 13.6, flag: true }, { d: '10/10', v: 10.0 }, { d: '17/10', v: 9.7 }, { d: '25/10', v: 10.3 }, { d: '31/10', v: 9.9 }, { d: '04/11', v: 15.2, flag: true }, { d: '09/11', v: 10.0 }],
      bandLo: 9.5, bandHi: 10.8, median: 10.0, bandLabel: 'expected band 9.5–10.8 · median 10.0 ± 8 %',
      flags: ['02/10 · 13.6 L/100 · replacement driver Yacine · 410 km · justification requested, none received', '04/11 · 15.2 L/100 · Karim · 62 L receipt for 408 km · to check with the manager on Monday'],
      maintLabel: 'Maintenance and documents · from the odometer',
      maint: [
        { t: 'Oil + filters', sub: 'every 10,000 km · last at 80,000', r: 'in 3,580 km', hot: true },
        { t: 'Front tyres', sub: 'planned at 95,000 · wear noted at fuel-up', r: 'in 8,580 km' },
        { t: 'Insurance', sub: 'expires 14 Dec 2026 · alert at 30 d', r: '33 days', hot: true },
        { t: 'Periodic inspection', sub: 'next on 2 Feb 2027', r: '83 days' },
      ],
      tiles: [{ big: '18.4 DA', l1: 'per km this month', l2: 'fuel + maintenance' }, { big: '3,120 km', l1: 'this month', l2: '2 readings / day' }, { big: '312 L', l1: 'this month', l2: '2 fuel-ups out of band', hot: true }],
      rule: 'Consumption is not declared: it is computed from the receipt’s litres and the odometer gap between two fuel-ups, with the photo as evidence.',
      rule2: 'The expected band comes from the vehicle’s own history, not from a fleet average; a fuel-up out of band is a question asked, not an accusation.',
      rule3: 'Maintenance is due by kilometre, and the kilometre comes from each round’s readings; the alert goes out before the due point, not after the breakdown.',
      note: 'vehicle, fuel-ups, odometer, dates and costs: constructed example · consumption = litres ÷ kilometres × 100, the lower the value, the more economical the vehicle (common definition)',
      note2: 'consumption varies with load, terrain and driving: the band is wide on purpose, and the manager qualifies the anomaly',
    },
    fleet: {
      title: 'The fleet board: six vehicles, consumption vs expected, cost per km, due dates',
      alt: 'A table of six vehicles with, for each, the driver, the month’s kilometres, a bar of actual vs expected consumption with a mark at 100 percent, the cost per kilometre, maintenance and document state, and a flag: van B, two fuel-ups out of band; van D, oil change overdue by 1,200 kilometres; truck F, insurance expiring in 6 days; the others up to date. Below, four tiles: 17.1 dinars per kilometre for the fleet, 15,840 kilometres this month, three open alerts, one fuel anomaly qualified. The data is a constructed example.',
      label: 'Fleet · 6 vehicles · current month to 11 November', cols: ['vehicle', 'driver', 'km month', 'cons. / expected (tick = 100 %)', 'DA / km', 'maintenance', 'documents', 'flag'],
      rows: [
        { v: 'Van A', sub: '2023 · 112,300 km', driver: 'Sofiane', km: '2,640', cons: 9.6, exp: 9.8, consT: '9.6 / 9.8', cost: '16.8', maint: 'up to date', docs: 'up to date', flag: '—' },
        { v: 'Van B', sub: '2024 · 86,420 km', driver: 'Karim', km: '3,120', cons: 10.9, exp: 10.0, consT: '10.9 / 10.0', cost: '18.4', maint: 'oil 3,580 km', docs: 'insurance 33 d', flag: '2 fuel-ups out of band', flagHot: true },
        { v: 'Van C', sub: '2022 · 148,900 km', driver: 'Amine', km: '2,980', cons: 10.4, exp: 10.6, consT: '10.4 / 10.6', cost: '17.9', maint: 'up to date', docs: 'up to date', flag: '—' },
        { v: 'Van D', sub: '2021 · 171,200 km', driver: 'Nadir', km: '2,410', cons: 11.3, exp: 11.0, consT: '11.3 / 11.0', cost: '19.6', maint: 'oil − 1,200 km', maintHot: true, docs: 'up to date', flag: 'maintenance overdue', flagHot: true },
        { v: 'Truck F', sub: '2020 · 203,800 km', driver: 'Yacine', km: '1,860', cons: 13.1, exp: 12.8, consT: '13.1 / 12.8', cost: '21.2', maint: 'up to date', docs: 'insurance 6 d', docsHot: true, flag: 'document expiring', flagHot: true },
        { v: 'Utility G', sub: '2025 · 21,400 km', driver: 'pool', km: '2,830', cons: 7.9, exp: 8.1, consT: '7.9 / 8.1', cost: '12.3', maint: 'up to date', docs: 'up to date', flag: '—' },
      ],
      tiles: [{ big: '17.1 DA / km', l1: 'fleet cost this month', l2: 'fuel 71 % · maintenance 29 %' }, { big: '15,840 km', l1: 'this month · 6 vehicles', l2: 'from round readings' }, { big: '3', l1: 'open alerts', l2: 'maintenance, document, fuel', hot: true }, { big: '1 / 2', l1: 'anomaly qualified', l2: 'by the manager, with cause' }],
      rule: 'Every vehicle is compared with itself, not with the others: a loaded truck at 13 litres is not an anomaly, a van at 15 is.',
      rule2: 'Cost per kilometre adds fuel and maintenance over the kilometres read; it is the figure that decides which vehicle to keep and which to replace.',
      note: 'vehicles, drivers, kilometres and costs: constructed example · document due dates are dates entered by the manager, not rules of the application',
    },
  },
  ar: {
    vehicle: {
      title: 'بطاقة شاحنة صغيرة: عشر تعبئات، نطاق متوقع، شذوذان، صيانة بالكيلومتر',
      alt: 'في الأعلى بطاقة الشاحنة ب، مسجَّلة سنة 2024، 86,420 كيلومتراً على العداد، سائقها المعتاد كريم. على جانب، عشر تعبئات منذ سبتمبر مرسومة باللتر لكل مائة كيلومتر، محسوبة من لترات الوصل وفارق العداد بين تعبئتين: ثماني نقاط بين 9.7 و10.3 داخل نطاق متوقع من 9.5 إلى 10.8 حول وسيط المركبة، ونقطتان خارج النطاق، 13.6 في 2 أكتوبر و15.2 في 4 نوفمبر، موسومتان بالتاريخ وسائق اليوم. على الجانب الآخر الصيانة المستحقة بالكيلومتر: تغيير زيت عند 90,000، بعد 3,580 كيلومتراً، مميز؛ إطارات عند 95,000؛ والوثائق: تأمين ينتهي في 14 ديسمبر، بعد 33 يوماً، فحص في 2 فيفري. ثلاث بطاقات: 18.4 دينار للكيلومتر، 3,120 كيلومتراً هذا الشهر، 312 لتراً. والبيانات مثال مبني.',
      header: 'الشاحنة ب · 2024 · 86,420 كم · السائق المعتاد كريم · المنطقة الوسطى · جولات + تدخلات',
      chartLabel: 'الاستهلاك لكل تعبئة · ل / 100 كم · من العداد والوصل',
      points: [{ d: '08/09', v: 9.8 }, { d: '15/09', v: 10.1 }, { d: '24/09', v: 9.9 }, { d: '02/10', v: 13.6, flag: true }, { d: '10/10', v: 10.0 }, { d: '17/10', v: 9.7 }, { d: '25/10', v: 10.3 }, { d: '31/10', v: 9.9 }, { d: '04/11', v: 15.2, flag: true }, { d: '09/11', v: 10.0 }],
      bandLo: 9.5, bandHi: 10.8, median: 10.0, bandLabel: `نطاق متوقع ${I('9.5–10.8')} · وسيط ${I('10.0 ± 8 %')}`,
      flags: [`02/10 · ${I('13.6')} ل/100 · سائق بديل ياسين · 410 كم · طُلب تبرير ولم يصل`, `04/11 · ${I('15.2')} ل/100 · كريم · وصل 62 ل لـ 408 كم · يُفحص مع المسيّر الاثنين`],
      maintLabel: 'الصيانة والوثائق · من العداد',
      maint: [
        { t: 'زيت + مرشحات', sub: 'كل 10,000 كم · الأخيرة عند 80,000', r: 'بعد 3,580 كم', hot: true },
        { t: 'إطارات أمامية', sub: 'مخططة عند 95,000 · تآكل ملاحَظ عند التعبئة', r: 'بعد 8,580 كم' },
        { t: 'التأمين', sub: 'ينتهي 14 ديس 2026 · تنبيه عند 30 ي', r: '33 يوماً', hot: true },
        { t: 'الفحص الدوري', sub: 'المقبل 2 فيف 2027', r: '83 يوماً' },
      ],
      tiles: [{ big: I('18.4 DA'), l1: 'للكم هذا الشهر', l2: 'وقود + صيانة' }, { big: '3,120 كم', l1: 'هذا الشهر', l2: 'قراءتان / يوم' }, { big: '312 ل', l1: 'هذا الشهر', l2: 'تعبئتان خارج النطاق', hot: true }],
      rule: 'الاستهلاك لا يُصرَّح به: يُحسب من لترات الوصل وفارق العداد بين تعبئتين، والصورة دليلاً.',
      rule2: 'النطاق المتوقع يأتي من تاريخ المركبة نفسها لا من متوسط الأسطول؛ والتعبئة خارج النطاق سؤال يُطرح لا اتهام.',
      rule3: 'الصيانة مستحقة بالكيلومتر، والكيلومتر يأتي من قراءات كل جولة؛ والتنبيه يخرج قبل الاستحقاق لا بعد العطل.',
      note: 'المركبة والتعبئات والعداد والتواريخ والكلف: مثال مبني · الاستهلاك = لترات ÷ كيلومترات × 100، وكلما انخفضت القيمة كانت المركبة أوفر (تعريف شائع)',
      note2: 'الاستهلاك يتغير بالحمولة والتضاريس والقيادة: النطاق عريض عمداً، والمسيّر هو من يصنّف الشذوذ',
    },
    fleet: {
      title: 'لوحة الأسطول: ست مركبات، استهلاك مقابل متوقع، كلفة للكم، استحقاقات',
      alt: 'جدول ست مركبات لكل منها السائق وكيلومترات الشهر وشريط استهلاك فعلي مقابل متوقع بعلامة عند 100 بالمائة والكلفة للكيلومتر وحالة الصيانة والوثائق وإشارة: الشاحنة ب، تعبئتان خارج النطاق؛ الشاحنة د، تغيير زيت متجاوَز بـ 1,200 كيلومتر؛ الشاحنة الكبيرة و، تأمين ينتهي بعد 6 أيام؛ والباقي منتظم. تحته أربع بطاقات: 17.1 دينار للكيلومتر للأسطول، 15,840 كيلومتراً هذا الشهر، ثلاثة تنبيهات مفتوحة، شذوذ وقود واحد مصنَّف. والبيانات مثال مبني.',
      label: 'الأسطول · 6 مركبات · الشهر الجاري حتى 11 نوفمبر', cols: ['المركبة', 'السائق', 'كم الشهر', 'استهلاك / متوقع (العلامة = 100 ٪)', 'دج / كم', 'الصيانة', 'الوثائق', 'إشارة'],
      rows: [
        { v: 'الشاحنة أ', sub: '2023 · 112,300 كم', driver: 'سفيان', km: '2,640', cons: 9.6, exp: 9.8, consT: I('9.6 / 9.8'), cost: I('16.8'), maint: 'منتظمة', docs: 'منتظمة', flag: '—' },
        { v: 'الشاحنة ب', sub: '2024 · 86,420 كم', driver: 'كريم', km: '3,120', cons: 10.9, exp: 10.0, consT: I('10.9 / 10.0'), cost: I('18.4'), maint: 'زيت 3,580 كم', docs: 'تأمين 33 ي', flag: 'تعبئتان خارج النطاق', flagHot: true },
        { v: 'الشاحنة ج', sub: '2022 · 148,900 كم', driver: 'أمين', km: '2,980', cons: 10.4, exp: 10.6, consT: I('10.4 / 10.6'), cost: I('17.9'), maint: 'منتظمة', docs: 'منتظمة', flag: '—' },
        { v: 'الشاحنة د', sub: '2021 · 171,200 كم', driver: 'نذير', km: '2,410', cons: 11.3, exp: 11.0, consT: I('11.3 / 11.0'), cost: I('19.6'), maint: `زيت ${I('− 1,200')} كم`, maintHot: true, docs: 'منتظمة', flag: 'صيانة متجاوَزة', flagHot: true },
        { v: 'الشاحنة الكبيرة و', sub: '2020 · 203,800 كم', driver: 'ياسين', km: '1,860', cons: 13.1, exp: 12.8, consT: I('13.1 / 12.8'), cost: I('21.2'), maint: 'منتظمة', docs: 'تأمين 6 ي', docsHot: true, flag: 'وثيقة تنتهي', flagHot: true },
        { v: 'المركبة النفعية ز', sub: '2025 · 21,400 كم', driver: 'مشترك', km: '2,830', cons: 7.9, exp: 8.1, consT: I('7.9 / 8.1'), cost: I('12.3'), maint: 'منتظمة', docs: 'منتظمة', flag: '—' },
      ],
      tiles: [{ big: I('17.1 DA / km'), l1: 'كلفة الأسطول هذا الشهر', l2: 'وقود 71 ٪ · صيانة 29 ٪' }, { big: '15,840 كم', l1: 'هذا الشهر · 6 مركبات', l2: 'من قراءات الجولات' }, { big: '3', l1: 'تنبيهات مفتوحة', l2: 'صيانة، وثيقة، وقود', hot: true }, { big: I('1 / 2'), l1: 'شذوذ مصنَّف', l2: 'من المسيّر، بسبب' }],
      rule: 'كل مركبة تُقارَن بنفسها لا بالأخريات: شاحنة محمَّلة عند 13 لتراً ليست شذوذاً، وشاحنة صغيرة عند 15 شذوذ.',
      rule2: 'الكلفة للكيلومتر تجمع الوقود والصيانة على الكيلومترات المقروءة؛ وهي الرقم الذي يقرر أي مركبة تُحتفظ وأيها تُستبدل.',
      note: 'المركبات والسائقون والكيلومترات والكلف: مثال مبني · آجال الوثائق تواريخ يدخلها المسيّر لا قواعد في التطبيق',
    },
  },
};
