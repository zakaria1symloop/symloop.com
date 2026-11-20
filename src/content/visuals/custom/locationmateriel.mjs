// Bespoke animated figures for the 2027 "logiciel de location de matériel" page.
//  retour(): one aerial platform rented for 14 days, the same condition report at check-out and at
//            check-in (hour meter 1 204 h -> 1 338 h, fuel full -> half, a bent guardrail, 3 -> 2
//            accessories), and what the differences become on the invoice: rental 252 000,
//            22 hours beyond the 112-hour allowance 33 000, fuel 9 000, guardrail 26 000,
//            accessory 8 000 = 328 000 dinars, 76 000 more than the rental alone.
//  parc():   the 40 machines of a fleet placed on a 0-100 % axis by the share of a 30-day month
//            each was rented: 9 under 25 %, 25 in between, 6 above 85 %; fleet rate 53 %
//            (637 rented days of 1 200 machine-days).
// Numbers with separators are drawn in their own text elements, direction="ltr".
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
// a number drawn left-to-right whose far edge sits at logical x (the end side of a row)
const numEnd = (c, x, y, str, o = {}) => ltrSpans(c.X(x), y, [[str, o.fill || C.fg, o.bold]], o.size || 10.5, c.rtl ? 'start' : 'end');
const poly = (c, pts, color, sw, dash) => `<polyline points="${pts.map(([x, y]) => `${c.X(x)},${y}`).join(' ')}" fill="none" stroke="${color}" stroke-width="${sw || 1}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const dot = (c, x, y, r, fill, stroke, sw) => `<circle cx="${c.X(x)}" cy="${y}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${sw || 1}"/>`;
const grp = (n, sep) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, sep);

// the invoice of one rental: base rental, then what the two condition reports add
const INVOICE = [252000, 33000, 9000, 26000, 8000];

export function retour(t, rtl) {
  const c = ctx(rtl); const P = 'lq'; const css = []; const H = 686;
  const total = INVOICE.reduce((a, b) => a + b, 0);
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + text(c, 96, 170, t.chartTitle, { size: 11, fill: C.fg, weight: 500 }) + '</g>';
  // the two condition reports
  const card = (x, title, day, vals, id, at, hot) => {
    let g = `<g style="animation:${show(css, P, id, at)}">` + rect(c, x, 184, 300, 220, { stroke: hot ? C.accent : C.line2, fill: hot ? TINT : C.fill }) + text(c, x + 14, 208, title, { size: 12, fill: hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 286, 208, day, { size: 9.5, font: 'mono', fill: C.fg55, anchor: 'end' }) + poly(c, [[x + 14, 218], [x + 286, 218]], C.line2) + '</g>';
    vals.forEach((v, i) => { const y = 244 + i * 40; g += `<g style="animation:${show(css, P, `${id}${i}`, at + 1.5 + i * (hot ? 3 : 1))}">` + text(c, x + 14, y, t.labels[i], { size: 9, fill: C.fg55 }) + text(c, x + 14, y + 17, v, { size: 11.5, fill: hot ? C.accent : C.fg, weight: hot ? 500 : 400 }) + '</g>'; });
    return g;
  };
  s += card(96, t.dTitle, t.dDay, t.dVals, 'd', 5, false);
  s += card(412, t.rTitle, t.rDay, t.rVals, 'r', 12, true);
  s += `<g style="animation:${show(css, P, 'cf', 27)}">` + text(c, 404, 430, t.cardsFoot, { size: 10, fill: C.fg70, anchor: 'middle' }) + '</g>';
  // the invoice
  s += `<g style="animation:${show(css, P, 'iv', 29)}">` + rect(c, 736, 184, 368, 258, { stroke: C.line2, fill: C.fill }) + text(c, 752, 208, t.invTitle, { size: 12, fill: C.fg, weight: 500 }) + poly(c, [[752, 218], [1088, 218]], C.line2) + '</g>';
  INVOICE.forEach((a, i) => {
    const y = 240 + i * 27; const at = 31 + i * 5; const extra = i > 0;
    s += `<g style="animation:${show(css, P, `n${i}`, at)}">` + text(c, 752, y, t.lines[i], { size: 10, fill: extra ? C.fg : C.fg70 }) + numEnd(c, 1088, y, grp(a, t.sep), { size: 10.5, fill: extra ? C.accent : C.fg, bold: extra }) + '</g>';
    s += `<g style="${growX(css, P, `b${i}`, at + 0.6, 1.6, rtl)}">` + rect(c, 752, y + 6, Math.max(336 * a / INVOICE[0], 2), 4, { stroke: 'none', fill: extra ? C.accent : C.fg55 }) + '</g>';
  });
  s += `<g style="${pop(css, P, 'tt', 57)}">` + poly(c, [[752, 378], [1088, 378]], C.fg35) + text(c, 752, 398, t.total, { size: 11, fill: C.fg, weight: 500 }) + numEnd(c, 1088, 398, grp(total, t.sep), { size: 14, fill: C.accent, bold: true }) + '</g>';
  s += `<g style="animation:${show(css, P, 'wo', 60)}">` + text(c, 752, 416, t.without, { size: 9.5, fill: C.fg55 }) + numEnd(c, 1088, 416, grp(INVOICE[0], t.sep), { size: 10, fill: C.fg55 }) + text(c, 752, 433, t.gap, { size: 9.5, fill: C.accent }) + numEnd(c, 1088, 433, grp(total - INVOICE[0], t.sep), { size: 10, fill: C.accent, bold: true }) + '</g>';
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bd', 63)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 66);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// days rented out of 30, one value per machine (40 machines, sorted)
const RENTED = [0, 0, 2, 3, 4, 5, 6, 6, 7, 9, 10, 11, 12, 13, 14, 14, 15, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 24, 25, 26, 27, 28, 28, 29, 30];
const MONTH = 30; const LOW = 25; const HIGH = 85;
const UX = (pct) => 160 + pct * 9;

export function parc(t, rtl) {
  const c = ctx(rtl); const P = 'ut'; const css = []; const H = 686;
  const rate = RENTED.reduce((a, b) => a + b, 0) / (RENTED.length * MONTH) * 100;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  let frame = rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + text(c, 96, 170, t.chartTitle, { size: 11, fill: C.fg, weight: 500 });
  frame += rect(c, UX(0) - 12, 196, UX(LOW) - UX(0) + 12, 176, { stroke: C.fg35, fill: 'rgba(255,255,255,0.03)', dash: '4 4' });
  frame += rect(c, UX(HIGH), 196, UX(100) - UX(HIGH) + 12, 176, { stroke: C.accent, fill: TINT, dash: '4 4' });
  frame += poly(c, [[UX(0) - 12, 372], [UX(100) + 12, 372]], C.line2);
  [0, 25, 50, 75, 100].forEach((p) => { frame += poly(c, [[UX(p), 372], [UX(p), 378]], C.line2) + num(c, UX(p), 394, t.pct.replace('{n}', String(p)), { size: 9, fill: C.fg55 }); });
  frame += text(c, UX(0) - 12, 430, t.axis, { size: 9, fill: C.fg55 });
  s += `<g style="animation:${show(css, P, 'pa', 3)}">${frame}</g>`;
  // one dot per machine; machines with the same number of days stack upward
  const seen = {};
  RENTED.forEach((d, i) => {
    const k = seen[d] || 0; seen[d] = k + 1;
    const pct = d / MONTH * 100; const low = pct < LOW; const high = pct > HIGH;
    s += `<g style="${pop(css, P, `m${i}`, 7 + i * 0.9)}">` + dot(c, UX(pct), 352 - k * 18, 7, high ? C.accent : (low ? 'none' : C.fg55), high ? C.accent : (low ? C.fg55 : C.fg70), 1.5) + '</g>';
  });
  s += `<g style="animation:${show(css, P, 'z1', 46)}">` + text(c, UX(0) - 2, 214, t.low, { size: 10, fill: C.fg, weight: 500 }) + '</g>';
  s += `<g style="animation:${show(css, P, 'z2', 49)}">` + text(c, UX(100) + 2, 214, t.high, { size: 10, fill: C.accent, weight: 500, anchor: 'end' }) + '</g>';
  s += `<g style="animation:${show(css, P, 'z3', 52)}">` + text(c, UX(42), 290, t.mid, { size: 10, fill: C.fg70, anchor: 'middle' }) + '</g>';
  s += `<g style="animation:${show(css, P, 'av', 55)}">` + poly(c, [[UX(rate), 232], [UX(rate), 372]], C.accent, 1.5, '5 4') + text(c, UX(rate) + 8, 246, t.rate, { size: 10, fill: C.accent, weight: 500 }) + '</g>';
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bd', 60)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 64);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    retour: {
      title: 'Départ et retour : ce que l’état des lieux met sur la facture',
      alt: 'Une nacelle louée 14 jours. Au départ : compteur 1 204 heures, plein fait, douze photos sans dommage, trois accessoires sur trois. Au retour : compteur 1 338 heures, réservoir à moitié, garde-corps tordu, deux accessoires sur trois. Facture : location 252 000 dinars, 22 heures au-delà du forfait 33 000, carburant 9 000, garde-corps 26 000, accessoire 8 000, total 328 000 dinars, soit 76 000 de plus que la location seule.',
      header: 'Exemple construit · une nacelle, quatorze jours, un départ et un retour',
      chartTitle: 'Le même constat deux fois, et ce que les écarts deviennent', sep: ' ',
      dTitle: 'Départ', dDay: 'jour 0', rTitle: 'Retour', rDay: 'jour 14',
      labels: ['Compteur d’heures', 'Carburant', 'État', 'Accessoires'],
      dVals: ['1 204 h', 'plein', '12 photos, aucun dommage', '3 sur 3'],
      rVals: ['1 338 h', 'à moitié', '12 photos, garde-corps tordu', '2 sur 3'],
      cardsFoot: 'Mêmes photos, mêmes relevés, signés par le client les deux fois.',
      invTitle: 'Facture, en dinars',
      lines: ['Location, 14 jours', 'Heures au-delà du forfait : 22', 'Carburant manquant', 'Garde-corps', 'Accessoire non rendu'],
      total: 'Total', without: 'sans constat', gap: 'non facturés sans constat',
      band: 'Sans constat au départ, chaque écart devient une discussion ; avec, il devient une ligne.',
      tiles: [
        { big: '14 jours, 134 heures', l1: 'compteur 1 204 h au départ, 1 338 h au retour', l2: 'forfait 112 h : 22 heures en plus' },
        { big: '4 écarts constatés', l1: 'heures, carburant, garde-corps, un accessoire', l2: 'photos datées, deux signatures' },
        { big: '76 000 dinars de plus', l1: '328 000 au lieu de 252 000', l2: 'facturés le jour du retour', hot: true },
      ],
      line1: 'L’état des lieux se fait sur le téléphone, devant le client : photos, compteur, niveau, accessoires, signature.',
      line2: 'La facture part le jour du retour : la durée, les heures et les écarts sont déjà dans le contrat.',
      note: 'Exemple construit · machine, compteur et montants fictifs.',
    },
    parc: {
      title: 'Où dorment les machines : 40 machines, un mois',
      alt: 'Les 40 machines d’un parc placées selon la part d’un mois de 30 jours où chacune était louée. Neuf machines sont sous 25 %, vingt-cinq entre 25 et 85 %, six au-dessus de 85 %. Le parc est loué 53 % du temps : 637 jours loués sur 1 200 jours-machine.',
      header: 'Exemple construit · un parc de 40 machines, un mois de 30 jours',
      chartTitle: 'Chaque point est une machine, placée selon la part du mois où elle était louée',
      pct: '{n} %', axis: 'part des 30 jours où la machine était louée',
      low: 'dort : 9 machines sous 25 %', high: 'sature : 6 machines au-dessus de 85 %', mid: '25 machines entre les deux', rate: 'le parc : 53 %',
      band: 'La moyenne ne dit rien : le parc gagne ou perd machine par machine.',
      tiles: [
        { big: '53 % d’utilisation', l1: '637 jours loués sur 1 200 jours-machine', l2: 'atelier 72 jours, disponibles et non loués 491' },
        { big: '9 machines sous 25 %', l1: '33 jours loués à elles neuf dans le mois', l2: 'à proposer, à déplacer, ou à vendre' },
        { big: '6 machines au-dessus de 85 %', l1: '14 demandes refusées sur ces modèles', l2: 'c’est là qu’une machine de plus se loue', hot: true },
      ],
      line1: 'Le taux d’utilisation se calcule par machine, par famille et par dépôt : jours loués sur jours disponibles.',
      line2: 'Une demande refusée s’enregistre comme une location manquée : c’est elle qui dit quoi acheter.',
      note: 'Exemple construit · parc, jours et demandes fictifs.',
    },
  },
  en: {
    retour: {
      title: 'Check-out and check-in: what the condition report puts on the invoice',
      alt: 'An aerial platform rented for 14 days. At check-out: hour meter 1,204 hours, tank full, twelve photos with no damage, three accessories of three. At check-in: hour meter 1,338 hours, tank half full, a bent guardrail, two accessories of three. Invoice: rental 252,000 dinars, 22 hours beyond the allowance 33,000, fuel 9,000, guardrail 26,000, accessory 8,000, total 328,000 dinars, that is 76,000 more than the rental alone.',
      header: 'Constructed example · one aerial platform, fourteen days, a check-out and a check-in',
      chartTitle: 'The same report twice, and what the differences become', sep: ',',
      dTitle: 'Check-out', dDay: 'day 0', rTitle: 'Check-in', rDay: 'day 14',
      labels: ['Hour meter', 'Fuel', 'Condition', 'Accessories'],
      dVals: ['1,204 h', 'full', '12 photos, no damage', '3 of 3'],
      rVals: ['1,338 h', 'half', '12 photos, bent guardrail', '2 of 3'],
      cardsFoot: 'Same photos, same readings, signed by the customer both times.',
      invTitle: 'Invoice, in dinars',
      lines: ['Rental, 14 days', 'Hours beyond the allowance: 22', 'Missing fuel', 'Guardrail', 'Accessory not returned'],
      total: 'Total', without: 'with no report', gap: 'not invoiced with no report',
      band: 'With no report at check-out, every difference becomes an argument; with one, it becomes a line.',
      tiles: [
        { big: '14 days, 134 hours', l1: 'meter 1,204 h at check-out, 1,338 h at check-in', l2: 'allowance 112 h: 22 extra hours' },
        { big: '4 differences recorded', l1: 'hours, fuel, guardrail, one accessory', l2: 'dated photos, two signatures' },
        { big: '76,000 dinars more', l1: '328,000 instead of 252,000', l2: 'invoiced on the day of return', hot: true },
      ],
      line1: 'The condition report is done on the phone, in front of the customer: photos, meter, level, accessories, signature.',
      line2: 'The invoice goes out on the day of return: duration, hours and differences are already in the contract.',
      note: 'Constructed example · fictitious machine, meter and amounts.',
    },
    parc: {
      title: 'Where the machines sleep: 40 machines, one month',
      alt: 'The 40 machines of a fleet placed by the share of a 30-day month each was rented. Nine machines are under 25%, twenty-five between 25 and 85%, six above 85%. The fleet is rented 53% of the time: 637 rented days of 1,200 machine-days.',
      header: 'Constructed example · a fleet of 40 machines, a 30-day month',
      chartTitle: 'Each dot is a machine, placed by the share of the month it was rented',
      pct: '{n}%', axis: 'share of the 30 days the machine was rented',
      low: 'asleep: 9 machines under 25%', high: 'saturated: 6 machines above 85%', mid: '25 machines in between', rate: 'the fleet: 53%',
      band: 'The average says nothing: the fleet earns or loses machine by machine.',
      tiles: [
        { big: '53% utilisation', l1: '637 rented days of 1,200 machine-days', l2: 'workshop 72 days, available and not rented 491' },
        { big: '9 machines under 25%', l1: '33 rented days between the nine in the month', l2: 'to offer, to move, or to sell' },
        { big: '6 machines above 85%', l1: '14 requests refused on those models', l2: 'that is where one more machine gets rented', hot: true },
      ],
      line1: 'Utilisation is computed per machine, per family and per depot: rented days over available days.',
      line2: 'A refused request is recorded as a missed rental: it is what says what to buy.',
      note: 'Constructed example · fictitious fleet, days and requests.',
    },
  },
  ar: {
    retour: {
      title: 'الخروج والرجوع: ما يضعه محضر المعاينة على الفاتورة',
      alt: 'رافعة أشخاص مكراة 14 يوماً. عند الخروج: العدّاد 1204 ساعات، الخزان ممتلئ، اثنتا عشرة صورة دون ضرر، وثلاثة ملحقات من ثلاثة. عند الرجوع: العدّاد 1338 ساعة، الخزان إلى النصف، حاجز حماية ملتوٍ، وملحقان من ثلاثة. الفاتورة: الكراء 252 ألف دينار، 22 ساعة فوق الحصة 33 ألفاً، الوقود 9 آلاف، حاجز الحماية 26 ألفاً، الملحق 8 آلاف، والمجموع 328 ألف دينار، أي 76 ألفاً أكثر من الكراء وحده.',
      header: 'مثال مركَّب · رافعة أشخاص، أربعة عشر يوماً، خروج ورجوع',
      chartTitle: 'المعاينة نفسها مرتين، وما تصير إليه الفوارق', sep: ' ',
      dTitle: 'الخروج', dDay: 'اليوم 0', rTitle: 'الرجوع', rDay: 'اليوم 14',
      labels: ['عدّاد الساعات', 'الوقود', 'الحالة', 'الملحقات'],
      dVals: ['⁦1 204⁩ ساعة', 'ممتلئ', '12 صورة، دون ضرر', '3 من 3'],
      rVals: ['⁦1 338⁩ ساعة', 'إلى النصف', '12 صورة، وحاجز حماية ملتوٍ', '2 من 3'],
      cardsFoot: 'الصور نفسها، القراءات نفسها، وتوقيع الزبون في المرتين.',
      invTitle: 'الفاتورة، بالدينار',
      lines: ['الكراء، 14 يوماً', 'ساعات فوق الحصة: 22', 'وقود ناقص', 'حاجز الحماية', 'ملحق لم يُرجَع'],
      total: 'المجموع', without: 'دون معاينة', gap: 'غير مفوتَر دون معاينة',
      band: 'دون معاينة عند الخروج، كل فارق يصير نقاشاً؛ ومعها، يصير سطراً.',
      tiles: [
        { big: '14 يوماً، 134 ساعة', l1: 'العدّاد ⁦1 204⁩ عند الخروج، و⁦1 338⁩ عند الرجوع', l2: 'الحصة 112 ساعة: 22 ساعة زائدة' },
        { big: '4 فوارق مسجَّلة', l1: 'الساعات، الوقود، حاجز الحماية، وملحق', l2: 'صور مؤرَّخة، وتوقيعان' },
        { big: '⁦76 000⁩ دينار زائدة', l1: '⁦328 000⁩ بدل ⁦252 000⁩', l2: 'مفوتَرة يوم الرجوع', hot: true },
      ],
      line1: 'محضر المعاينة يُنجَز على الهاتف، أمام الزبون: صور، عدّاد، مستوى، ملحقات، وتوقيع.',
      line2: 'الفاتورة تخرج يوم الرجوع: المدة، الساعات، والفوارق موجودة من قبل في العقد.',
      note: 'مثال مركَّب · آلة وعدّاد ومبالغ خيالية.',
    },
    parc: {
      title: 'أين تنام الآلات: 40 آلة، وشهر واحد',
      alt: 'آلات الحظيرة الأربعون موضوعة حسب حصة شهر من 30 يوماً كانت فيها كل واحدة مكراة. تسع آلات تحت 25 بالمئة، خمس وعشرون بين 25 و85 بالمئة، وست فوق 85 بالمئة. الحظيرة مكراة 53 بالمئة من الوقت: 637 يوماً مكرى من 1200 يوم-آلة.',
      header: 'مثال مركَّب · حظيرة من 40 آلة، وشهر من 30 يوماً',
      chartTitle: 'كل نقطة آلة، موضوعة حسب حصة الشهر التي كانت فيها مكراة',
      pct: '{n} %', axis: 'حصة الأيام الثلاثين التي كانت فيها الآلة مكراة',
      low: 'تنام: 9 آلات تحت 25 بالمئة', high: 'مشبعة: 6 آلات فوق 85 بالمئة', mid: '25 آلة بين الاثنين', rate: 'الحظيرة: 53 بالمئة',
      band: 'المعدّل لا يقول شيئاً: الحظيرة تربح أو تخسر آلة بآلة.',
      tiles: [
        { big: '53 بالمئة استعمالاً', l1: '637 يوماً مكرى من ⁦1 200⁩ يوم-آلة', l2: 'ورشة الصيانة 72 يوماً، ومتوفرة غير مكراة 491' },
        { big: '9 آلات تحت 25 بالمئة', l1: '33 يوماً مكرى للتسع معاً في الشهر', l2: 'تُعرَض، تُنقَل، أو تُباع' },
        { big: '6 آلات فوق 85 بالمئة', l1: '14 طلباً مرفوضاً على هذه الأصناف', l2: 'هنا تُكرى آلة إضافية', hot: true },
      ],
      line1: 'نسبة الاستعمال تُحسَب لكل آلة، لكل صنف، ولكل مستودع: الأيام المكراة على الأيام المتوفرة.',
      line2: 'الطلب المرفوض يُسجَّل ككراء ضائع: هو الذي يقول ماذا يُشترى.',
      note: 'مثال مركَّب · حظيرة وأيام وطلبات خيالية.',
    },
  },
};
