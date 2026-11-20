// Bespoke animated figures for the 2027 "vidéosurveillance IP d'entreprise en
// Algérie" post.
//  recul():  how far back the recorder can look. A fifty-day axis ending today,
//            the theft marked nineteen days back and the written thirty-day
//            target; four settings of the same sixteen cameras, each a bar that
//            grows backwards from today, with a mark on the theft line (a cross
//            when the recording no longer reaches it); three tiles.
//  visage(): what one camera really sees. A distance ruler (5, 10, 20, 50 m) and
//            four cards, each with the same face drawn at the number of pixels
//            the camera gives it at that distance, the pixel density, and what
//            the IEC 62676-4:2014 level allows; three tiles.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function growX(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
const I = (x) => `⁦${x}⁩`;
const TINT = 'rgba(242,181,68,0.06)';

function tiles(c, css, P, ky, ts, at0) {
  let s = '';
  ts.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, at0 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? TINT : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  return s;
}
const motionOff = (P) => `@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"],svg rect[style*="${P}-"]{animation:none !important}}`;
// a cross whose shape is never mirrored
const cross = (c, x, y, col) => { const m = c.X(x); return `<path d="M ${m - 5} ${y - 5} L ${m + 5} ${y + 5} M ${m + 5} ${y - 5} L ${m - 5} ${y + 5}" fill="none" stroke="${col}" stroke-width="2"/>`; };

export function recul(t, rtl) {
  const c = ctx(rtl); const P = 'vr'; const css = []; const H = 606;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const ax0 = 470, ax1 = 1100, per = (ax1 - ax0) / 50; const X = (d) => ax1 - d * per;
  const y0 = 204, rh = 58; const yEnd = y0 + t.rows.length * rh - 10;
  s += `<g style="animation:${show(css, P, 'ax', 3)}">` + text(c, ax0, 156, t.axis, { size: 8.5, font: 'mono', fill: C.fg35 }) + line(c, ax0, 172, ax1, 172, { stroke: C.line2 })
    + [0, 10, 20, 30, 40, 50].map((d) => line(c, X(d), 172, X(d), 177, { stroke: C.line2 }) + text(c, X(d), 189, d === 0 ? t.today : t.tick(d), { size: 8, font: 'mono', fill: C.fg35, anchor: 'middle' })).join('') + '</g>';
  s += `<g style="animation:${show(css, P, 'tg', 5)}">` + line(c, X(30), 164, X(30), 177, { stroke: C.fg55, dash: '4 4' }) + line(c, X(30), 196, X(30), yEnd, { stroke: C.fg55, dash: '4 4' }) + text(c, X(30), 156, t.target, { size: 9.5, fill: C.fg70, anchor: 'middle' }) + '</g>';
  s += `<g style="animation:${show(css, P, 'in', 7)}">` + line(c, X(t.incident), 164, X(t.incident), 177, { stroke: C.accent, dash: '4 4' }) + line(c, X(t.incident), 196, X(t.incident), yEnd, { stroke: C.accent, dash: '4 4' }) + text(c, X(t.incident), 156, t.theft, { size: 9.5, fill: C.accent, anchor: 'middle', weight: 500 }) + '</g>';
  t.rows.forEach((r, i) => {
    const y = y0 + i * rh; const at = 10 + i * 6; const w = r.d * per; const x = X(r.d); const ok = r.d >= t.incident;
    s += `<g style="animation:${show(css, P, `l${i}`, at)}">` + text(c, 80, y + 18, r.t, { size: 10.5, fill: r.best ? C.accent : C.fg, weight: 500 }) + text(c, 80, y + 33, r.s, { size: 8.5, font: 'mono', fill: C.fg55 }) + text(c, 80, y + 47, r.v, { size: 9, fill: ok ? C.fg70 : C.fg, weight: ok ? 300 : 500 }) + '</g>';
    s += `<rect x="${c.RX(x, w).toFixed(1)}" y="${y + 10}" width="${w.toFixed(1)}" height="24" fill="${r.best ? C.accent : ok ? C.fg : 'rgba(255,255,255,0.30)'}" style="transform-box:fill-box;transform-origin:${rtl ? 'left' : 'right'};animation:${growX(css, P, `b${i}`, at + 0.5, 2.6)}"/>`;
    s += `<g style="animation:${show(css, P, `m${i}`, at + 3.6)}">` + text(c, x - 8, y + 27, r.days, { size: 12, font: 'mono', fill: r.best ? C.accent : C.fg, anchor: 'end', weight: 500 })
      + (ok ? circle(c, X(t.incident), y + 22, 5, { fill: '#000', stroke: r.best ? '#000' : C.accent, sw: 2 }) : cross(c, X(t.incident), y + 22, C.accent)) + '</g>';
  });
  const ky = y0 + t.rows.length * rh + 6;
  s += tiles(c, css, P, ky, t.tiles, 36);
  s += text(c, 80, ky + 86, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// A schematic face on the unit square; sampled and averaged per cell so that a
// coarse grid shows what a few pixels really keep of it.
function shadeAt(u, v) {
  let s = 0.10;
  if (v > 0.90) { const half = 0.30 + (v - 0.90) * 1.6; if (Math.abs(u - 0.5) < half) s = 0.38; }
  if (v > 0.84 && v <= 0.93 && Math.abs(u - 0.5) < 0.12) s = 0.55;
  const hx = (u - 0.5) / 0.40, hy = (v - 0.46) / 0.42;
  if (hx * hx + hy * hy <= 1) {
    const el = (du, dv, rx, ry) => (du * du) / (rx * rx) + (dv * dv) / (ry * ry) <= 1;
    s = 0.80;
    if (v < 0.24) s = 0.28;
    if (el(u - 0.36, v - 0.42, 0.065, 0.028) || el(u - 0.64, v - 0.42, 0.065, 0.028)) s = 0.12;
    if (Math.abs(Math.abs(u - 0.5) - 0.14) < 0.085 && Math.abs(v - 0.355) < 0.012) s = 0.30;
    if (Math.abs(u - 0.5) < 0.018 && v > 0.44 && v < 0.58) s = 0.62;
    if (el(u - 0.5, v - 0.70, 0.12, 0.022)) s = 0.22;
  }
  return s;
}
function face(c, x, y, size, n) {
  const x0 = c.RX(x, size); const cs = size / n; const groups = {};
  for (let j = 0; j < n; j++) {
    let run = null;
    for (let i = 0; i <= n; i++) {
      let q = null;
      if (i < n) { let a = 0; for (let sy = 0; sy < 4; sy++) for (let sx = 0; sx < 4; sx++) a += shadeAt((i + (sx + 0.5) / 4) / n, (j + (sy + 0.5) / 4) / n); q = Math.round(a / 16 / 0.06); }
      if (run && q !== run.q) { const wd = ((i - run.i) * cs).toFixed(2); (groups[run.q] = groups[run.q] || []).push(`M${(x0 + run.i * cs).toFixed(2)} ${(y + j * cs).toFixed(2)}h${wd}v${cs.toFixed(2)}h-${wd}z`); run = null; }
      if (i < n && !run) run = { q, i };
    }
  }
  return `<g shape-rendering="crispEdges">` + Object.entries(groups).map(([q, d]) => `<path d="${d.join('')}" fill="rgba(255,255,255,${(q * 0.06).toFixed(2)})"/>`).join('') + '</g>'
    + `<rect x="${x0}" y="${y}" width="${size}" height="${size}" fill="none" stroke="${C.line2}"/>`;
}

export function visage(t, rtl) {
  const c = ctx(rtl); const P = 'vv'; const css = []; const H = 646;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const cw = 250, gap = (1040 - 4 * cw) / 3, ry = 164, cy = 186, ch = 290;
  s += `<g style="animation:${show(css, P, 'cam', 3)}">` + rect(c, 80, ry - 9, 22, 18, { stroke: C.fg, fill: C.fill }) + rect(c, 102, ry - 5, 7, 10, { stroke: C.fg, fill: C.fg }) + '</g>';
  s += `<rect x="${c.RX(112, 1008)}" y="${ry - 0.5}" width="1008" height="1" fill="${C.fg55}" style="transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'};animation:${growX(css, P, 'rl', 4, 6)}"/>`;
  t.cols.forEach((k, i) => {
    const x = 80 + i * (cw + gap); const mid = x + cw / 2; const at = 6 + i * 6; const hot = i === 0;
    s += `<g style="animation:${show(css, P, `d${i}`, at)}">` + circle(c, mid, ry, 4, { fill: hot ? C.accent : C.fg }) + text(c, mid, ry - 12, k.dist, { size: 13, font: 'mono', fill: hot ? C.accent : C.fg, anchor: 'middle', weight: 500 }) + '</g>';
    s += `<g style="animation:${show(css, P, `c${i}`, at + 1.5)}">` + rect(c, x, cy, cw, ch, { stroke: hot ? C.accent : C.line2, fill: hot ? TINT : C.fill })
      + text(c, x + 14, cy + 24, k.level, { size: 12.5, fill: hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 14, cy + 41, k.sub, { size: 8.5, font: 'mono', fill: C.fg55 })
      + face(c, x + 50, cy + 54, 150, k.grid)
      + text(c, mid, cy + 223, k.px, { size: 9.5, font: 'mono', fill: C.fg, anchor: 'middle' }) + text(c, mid, cy + 243, k.d1, { size: 9.5, fill: C.fg70, anchor: 'middle' }) + text(c, mid, cy + 257, k.d2, { size: 9.5, fill: C.fg70, anchor: 'middle' })
      + text(c, mid, cy + 277, k.th, { size: 8.5, font: 'mono', fill: hot ? C.accent : C.fg55, anchor: 'middle' }) + '</g>';
  });
  const ky = cy + ch + 14;
  s += tiles(c, css, P, ky, t.tiles, 34);
  s += text(c, 80, ky + 86, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// 1 Mbit/s recorded continuously = 86 400 s / 8 / 1 000 = 10.8 GB per day.
const DAYS = [8000 / (16 * 4 * 10.8), 8000 / (16 * 2 * 10.8), 8000 / (8 * 2 * 10.8 + 8 * 2 * 10.8 * 0.3), 16000 / (16 * 2 * 10.8)];
const fr1 = (n) => n.toFixed(1).replace('.', ',');
const GRIDS = [50, 25, 13, 5];

export const STRINGS = {
  fr: {
    recul: {
      title: 'Le jour où il faut l’image : jusqu’où l’enregistreur remonte',
      alt: `Axe de cinquante jours se terminant aujourd’hui ; le vol a eu lieu il y a dix-neuf jours, l’objectif écrit est de trente jours. Seize caméras, disque de 8 To, quatre réglages. H.264 à 4 Mbit/s en continu : ${fr1(DAYS[0])} jours, le vol n’y est plus. H.265 à 2 Mbit/s en continu : ${fr1(DAYS[1])} jours, le vol y est mais pas l’objectif. H.265 avec huit caméras sur mouvement : ${fr1(DAYS[2])} jours. H.265 en continu sur deux disques : ${fr1(DAYS[3])} jours.`,
      header: 'Exemple construit · dépôt, seize caméras de 4 mégapixels · le vol est constaté à l’inventaire, dix-neuf jours après',
      axis: 'jours en arrière', today: 'aujourd’hui', tick: (d) => `${d} j`, target: 'objectif écrit : 30 jours', theft: 'le vol, il y a 19 jours', incident: 19,
      rows: [
        { t: 'Aujourd’hui : H.264, enregistrement continu', s: '16 caméras × 4 Mbit/s · disque de 8 To', v: 'le vol n’est plus sur le disque', d: DAYS[0], days: `${fr1(DAYS[0])} jours` },
        { t: 'Même disque, compression H.265', s: '16 caméras × 2 Mbit/s · 8 To', v: 'le vol y est, l’objectif de 30 jours non', d: DAYS[1], days: `${fr1(DAYS[1])} jours` },
        { t: 'H.265, et huit caméras sur mouvement', s: '8 en continu, 8 actives 30 % du temps · 8 To', v: 'le vol y est, l’objectif aussi', d: DAYS[2], days: `${fr1(DAYS[2])} jours`, best: true },
        { t: 'H.265 en continu, deux disques', s: '16 caméras × 2 Mbit/s · 2 × 8 To', v: 'le vol y est, l’objectif aussi', d: DAYS[3], days: `${fr1(DAYS[3])} jours` },
      ],
      tiles: [
        { big: '10,8 Go par jour', l1: 'pour chaque Mbit/s enregistré en continu', l2: '16 caméras × 4 Mbit/s = 691 Go par jour' },
        { big: `${fr1(DAYS[0])} jours`, l1: 'ce que garde le disque de 8 To de l’exemple', l2: '8 000 Go ÷ 691 Go par jour', hot: true },
        { big: '30 jours', l1: 'l’objectif s’écrit avant d’acheter le disque', l2: 'et se vérifie en cherchant l’image la plus ancienne' },
      ],
      rule: 'La durée de conservation ne se lit pas sur la boîte de l’enregistreur : elle se calcule,',
      rule2: 'débit réel de chaque caméra multiplié par leur nombre, et elle se vérifie une fois par mois.',
      note: 'Exemple construit · débits et taux d’activité sont ceux de l’exemple ; les vôtres se lisent sur l’enregistreur.',
    },
    visage: {
      title: 'Ce que voit vraiment une caméra : le même visage à 5, 10, 20 et 50 mètres',
      alt: 'Une caméra de 4 mégapixels, 2 560 pixels de large, angle horizontal de 90 degrés. À 5 mètres la scène fait 10 mètres de large, 256 pixels par mètre, un visage fait environ 40 pixels : on peut identifier une personne. À 10 mètres, 128 pixels par mètre, 20 pixels : on reconnaît quelqu’un de connu. À 20 mètres, 64 pixels par mètre, 10 pixels : on observe. À 50 mètres, 26 pixels par mètre, 4 pixels : on détecte une présence.',
      header: 'Exemple construit · caméra de 4 mégapixels (2 560 pixels de large), angle horizontal de 90° · seuils de la norme IEC 62676-4:2014',
      cols: [
        { dist: 'à 5 m', level: 'Identifier', sub: '256 px/m · scène large de 10 m', grid: GRIDS[0], px: 'visage ≈ 40 pixels', d1: 'on peut identifier', d2: 'une personne inconnue', th: 'seuil : 250 px/m' },
        { dist: 'à 10 m', level: 'Reconnaître', sub: '128 px/m · scène large de 20 m', grid: GRIDS[1], px: 'visage ≈ 20 pixels', d1: 'on reconnaît quelqu’un', d2: 'qu’on a déjà vu', th: 'seuil : 125 px/m' },
        { dist: 'à 20 m', level: 'Observer', sub: '64 px/m · scène large de 40 m', grid: GRIDS[2], px: 'visage ≈ 10 pixels', d1: 'on compte les personnes,', d2: 'on voit leur allure', th: 'seuil : 63 px/m' },
        { dist: 'à 50 m', level: 'Détecter', sub: '26 px/m · scène large de 100 m', grid: GRIDS[3], px: 'visage ≈ 4 pixels', d1: 'on sait seulement', d2: 'que quelqu’un est là', th: 'seuil : 25 px/m' },
      ],
      tiles: [
        { big: '2 560 ÷ 250 = 10,2 m', l1: 'largeur de scène maximale pour identifier', l2: '2 Mpx : 7,7 m · 8 Mpx : 15,4 m', hot: true },
        { big: 'une caméra, un rôle', l1: 'identifier à la porte, observer la cour', l2: 'la même caméra ne fait pas les deux' },
        { big: '125 et 250 px/m', l1: 'gardés par l’édition 2025 de la norme', l2: 'échelle à sept niveaux, de 20 à 1 500 px/m' },
      ],
      rule: 'Ce n’est pas le nombre de mégapixels qui compte, c’est le nombre de pixels par mètre de scène :',
      rule2: 'la même caméra identifie un visage à 5 mètres et ne fait que signaler une présence à 50.',
      note: 'Seuils : IEC 62676-4:2014 · visages dessinés pour l’illustration, distances non à l’échelle, de jour et sans mouvement.',
    },
  },
  en: {
    recul: {
      title: 'The day the footage is needed: how far back the recorder goes',
      alt: `A fifty-day axis ending today; the theft happened nineteen days ago and the written target is thirty days. Sixteen cameras, an 8 TB disk, four settings. H.264 at 4 Mbit/s, continuous: ${DAYS[0].toFixed(1)} days, the theft is no longer there. H.265 at 2 Mbit/s, continuous: ${DAYS[1].toFixed(1)} days, the theft is there but not the target. H.265 with eight cameras on motion: ${DAYS[2].toFixed(1)} days. H.265 continuous on two disks: ${DAYS[3].toFixed(1)} days.`,
      header: 'Constructed example · warehouse, sixteen 4-megapixel cameras · the theft is found at stock-take, nineteen days later',
      axis: 'days back', today: 'today', tick: (d) => `${d} d`, target: 'written target: 30 days', theft: 'the theft, 19 days ago', incident: 19,
      rows: [
        { t: 'Today: H.264, continuous recording', s: '16 cameras × 4 Mbit/s · 8 TB disk', v: 'the theft is no longer on the disk', d: DAYS[0], days: `${DAYS[0].toFixed(1)} days` },
        { t: 'Same disk, H.265 compression', s: '16 cameras × 2 Mbit/s · 8 TB', v: 'the theft is there, the 30-day target is not', d: DAYS[1], days: `${DAYS[1].toFixed(1)} days` },
        { t: 'H.265, and eight cameras on motion', s: '8 continuous, 8 active 30 % of the time · 8 TB', v: 'the theft is there, and so is the target', d: DAYS[2], days: `${DAYS[2].toFixed(1)} days`, best: true },
        { t: 'H.265 continuous, two disks', s: '16 cameras × 2 Mbit/s · 2 × 8 TB', v: 'the theft is there, and so is the target', d: DAYS[3], days: `${DAYS[3].toFixed(1)} days` },
      ],
      tiles: [
        { big: '10.8 GB per day', l1: 'for every Mbit/s recorded continuously', l2: '16 cameras × 4 Mbit/s = 691 GB per day' },
        { big: `${DAYS[0].toFixed(1)} days`, l1: 'what the 8 TB disk of the example keeps', l2: '8,000 GB ÷ 691 GB per day', hot: true },
        { big: '30 days', l1: 'the target is written before buying the disk', l2: 'and checked by looking for the oldest image' },
      ],
      rule: 'Retention is not read on the recorder’s box: it is calculated, the real bitrate of each camera',
      rule2: 'multiplied by their number, and it is checked once a month.',
      note: 'Constructed example · bitrates and activity rate belong to the example; yours are read on the recorder.',
    },
    visage: {
      title: 'What a camera really sees: the same face at 5, 10, 20 and 50 metres',
      alt: 'A 4-megapixel camera, 2,560 pixels wide, 90-degree horizontal angle. At 5 metres the scene is 10 metres wide, 256 pixels per metre, a face is about 40 pixels: a person can be identified. At 10 metres, 128 pixels per metre, 20 pixels: someone known is recognised. At 20 metres, 64 pixels per metre, 10 pixels: observation. At 50 metres, 26 pixels per metre, 4 pixels: a presence is detected.',
      header: 'Constructed example · 4-megapixel camera (2,560 pixels wide), 90° horizontal angle · thresholds from IEC 62676-4:2014',
      cols: [
        { dist: 'at 5 m', level: 'Identify', sub: '256 px/m · scene 10 m wide', grid: GRIDS[0], px: 'face ≈ 40 pixels', d1: 'an unknown person', d2: 'can be identified', th: 'threshold: 250 px/m' },
        { dist: 'at 10 m', level: 'Recognise', sub: '128 px/m · scene 20 m wide', grid: GRIDS[1], px: 'face ≈ 20 pixels', d1: 'someone seen before', d2: 'is recognised', th: 'threshold: 125 px/m' },
        { dist: 'at 20 m', level: 'Observe', sub: '64 px/m · scene 40 m wide', grid: GRIDS[2], px: 'face ≈ 10 pixels', d1: 'people are counted,', d2: 'their bearing is seen', th: 'threshold: 63 px/m' },
        { dist: 'at 50 m', level: 'Detect', sub: '26 px/m · scene 100 m wide', grid: GRIDS[3], px: 'face ≈ 4 pixels', d1: 'you only know', d2: 'that someone is there', th: 'threshold: 25 px/m' },
      ],
      tiles: [
        { big: '2,560 ÷ 250 = 10.2 m', l1: 'widest scene that still identifies', l2: '2 MP: 7.7 m · 8 MP: 15.4 m', hot: true },
        { big: 'one camera, one role', l1: 'identify at the door, observe the yard', l2: 'the same camera does not do both' },
        { big: '125 and 250 px/m', l1: 'kept by the 2025 edition of the standard', l2: 'a seven-level scale, from 20 to 1,500 px/m' },
      ],
      rule: 'What counts is not the number of megapixels but the number of pixels per metre of scene:',
      rule2: 'the same camera identifies a face at 5 metres and only signals a presence at 50.',
      note: 'Thresholds: IEC 62676-4:2014 · faces drawn for illustration, distances not to scale, in daylight with no motion.',
    },
  },
  ar: {
    recul: {
      title: 'يوم نحتاج الصورة: إلى أي يوم يرجع المسجِّل',
      alt: `محور من خمسين يوماً ينتهي اليوم؛ السرقة وقعت قبل تسعة عشر يوماً والهدف المكتوب ثلاثون يوماً. ست عشرة كاميرا، قرص 8 تيرابايت، أربعة إعدادات. ضغط H.264 بـ 4 ميغابت في الثانية وتسجيل متواصل: ${fr1(DAYS[0])} يوماً، السرقة لم تعد موجودة. ضغط H.265 بـ 2 ميغابت في الثانية: ${fr1(DAYS[1])} يوماً، السرقة موجودة والهدف لا. H.265 مع ثماني كاميرات عند الحركة: ${fr1(DAYS[2])} يوماً. H.265 متواصل على قرصين: ${fr1(DAYS[3])} يوماً.`,
      header: 'مثال مركَّب · مستودع، ست عشرة كاميرا من 4 ميغابكسل · السرقة اكتُشفت عند الجرد، بعد تسعة عشر يوماً',
      axis: 'أيام إلى الوراء', today: 'اليوم', tick: (d) => `${d} يوماً`, target: 'الهدف المكتوب: 30 يوماً', theft: 'السرقة، قبل 19 يوماً', incident: 19,
      rows: [
        { t: `اليوم: ضغط ${I('H.264')} وتسجيل متواصل`, s: '16 كاميرا × 4 ميغابت/ثا · قرص 8 تيرابايت', v: 'السرقة لم تعد على القرص', d: DAYS[0], days: `${fr1(DAYS[0])} يوماً` },
        { t: `القرص نفسه، ضغط ${I('H.265')}`, s: '16 كاميرا × 2 ميغابت/ثا · 8 تيرابايت', v: 'السرقة موجودة، وهدف الثلاثين يوماً لا', d: DAYS[1], days: `${fr1(DAYS[1])} يوماً` },
        { t: `${I('H.265')}، وثماني كاميرات عند الحركة`, s: `8 متواصلة، 8 نشطة ${I('30 %')} من الوقت · 8 تيرابايت`, v: 'السرقة موجودة، والهدف كذلك', d: DAYS[2], days: `${fr1(DAYS[2])} يوماً`, best: true },
        { t: `${I('H.265')} متواصل، قرصان`, s: `16 كاميرا × 2 ميغابت/ثا · ${I('2 × 8')} تيرابايت`, v: 'السرقة موجودة، والهدف كذلك', d: DAYS[3], days: `${fr1(DAYS[3])} يوماً` },
      ],
      tiles: [
        { big: '10,8 غيغابايت في اليوم', l1: 'لكل ميغابت في الثانية يُسجَّل دون توقف', l2: '16 كاميرا × 4 ميغابت/ثا = 691 غيغابايت في اليوم' },
        { big: `${fr1(DAYS[0])} يوماً`, l1: 'ما يحفظه قرص 8 تيرابايت في المثال', l2: `${I('8 000 ÷ 691')} غيغابايت في اليوم`, hot: true },
        { big: '30 يوماً', l1: 'الهدف يُكتب قبل شراء القرص', l2: 'ويُتحقق منه بالبحث عن أقدم صورة' },
      ],
      rule: 'مدة الحفظ لا تُقرأ على علبة المسجِّل: تُحسب، التدفق الحقيقي لكل كاميرا',
      rule2: 'مضروباً في عددها، ويُتحقق منها مرة في الشهر.',
      note: 'مثال مركَّب · التدفقات ونسبة النشاط خاصة بالمثال؛ وأرقامكم تُقرأ على المسجِّل.',
    },
    visage: {
      title: 'ما تراه الكاميرا فعلاً: الوجه نفسه على 5 و10 و20 و50 متراً',
      alt: 'كاميرا من 4 ميغابكسل، عرضها 2 560 بكسل، بزاوية أفقية 90 درجة. على 5 أمتار عرض المشهد 10 أمتار، 256 بكسل في المتر، والوجه نحو 40 بكسل: يمكن تحديد هوية الشخص. على 10 أمتار، 128 بكسل في المتر، 20 بكسل: يُتعرَّف على شخص معروف. على 20 متراً، 64 بكسل في المتر، 10 بكسل: ملاحظة. على 50 متراً، 26 بكسل في المتر، 4 بكسل: كشف وجود.',
      header: `مثال مركَّب · كاميرا من 4 ميغابكسل (عرضها ${I('2 560')} بكسل)، زاوية أفقية ${I('90°')} · عتبات المعيار ${I('IEC 62676-4:2014')}`,
      cols: [
        { dist: 'على 5 م', level: 'تحديد الهوية', sub: '256 بكسل/م · مشهد عرضه 10 م', grid: GRIDS[0], px: 'الوجه ≈ 40 بكسل', d1: 'يمكن تحديد هوية', d2: 'شخص مجهول', th: 'العتبة: 250 بكسل/م' },
        { dist: 'على 10 م', level: 'التعرّف', sub: '128 بكسل/م · مشهد عرضه 20 م', grid: GRIDS[1], px: 'الوجه ≈ 20 بكسل', d1: 'نتعرّف على شخص', d2: 'رأيناه من قبل', th: 'العتبة: 125 بكسل/م' },
        { dist: 'على 20 م', level: 'الملاحظة', sub: '64 بكسل/م · مشهد عرضه 40 م', grid: GRIDS[2], px: 'الوجه ≈ 10 بكسل', d1: 'نعدّ الأشخاص', d2: 'ونرى هيئتهم', th: 'العتبة: 63 بكسل/م' },
        { dist: 'على 50 م', level: 'الكشف', sub: '26 بكسل/م · مشهد عرضه 100 م', grid: GRIDS[3], px: 'الوجه ≈ 4 بكسل', d1: 'نعرف فقط', d2: 'أن أحداً هناك', th: 'العتبة: 25 بكسل/م' },
      ],
      tiles: [
        { big: I('2 560 ÷ 250 = 10,2 m'), l1: 'أقصى عرض للمشهد لتحديد الهوية', l2: '2 ميغابكسل: 7,7 م · 8 ميغابكسل: 15,4 م', hot: true },
        { big: 'كاميرا واحدة، دور واحد', l1: 'تحديد الهوية عند الباب، وملاحظة الساحة', l2: 'الكاميرا نفسها لا تقوم بالاثنين' },
        { big: '125 و250 بكسل/م', l1: 'أبقت عليهما طبعة 2025 من المعيار', l2: 'سلّم من سبعة مستويات، من 20 إلى 1 500 بكسل/م' },
      ],
      rule: 'ليس المهم عدد الميغابكسل، بل عدد البكسلات في كل متر من المشهد:',
      rule2: 'الكاميرا نفسها تحدّد هوية وجه على 5 أمتار ولا تفعل إلا كشف وجود على 50.',
      note: `العتبات: ${I('IEC 62676-4:2014')} · الوجوه مرسومة للتوضيح، والمسافات ليست بالسلّم، نهاراً ودون حركة.`,
    },
  },
};
