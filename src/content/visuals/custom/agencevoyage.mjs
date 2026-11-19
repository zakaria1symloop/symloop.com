// Bespoke animated figures for the 2027 "logiciel agence de voyage en Algérie" page.
//  places():    forty places blocked for one departure. A grid of forty seats
//               fills up one sale after another until thirty-four are sold;
//               at the release date the six unsold ones are handed back; three
//               dated rows tell what happens at each moment.
//  echeances(): the money of one file. Above a time axis, what customers pay
//               in three instalments; below, what suppliers ask for on three
//               dates; bars grow in time order. Under it, the balance of the
//               file is drawn step by step and dips below zero for five days
//               before the last instalment comes in.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function pop(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scale(0)}${(at + 1.2).toFixed(1)}%,100%{transform:scale(1)}}`); return `transform-box:fill-box;transform-origin:center;animation:${P}-${id} ${LOOP}s linear infinite`; }
function growY(css, P, id, at, dur, up) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleY(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleY(1)}}`); return `transform-box:fill-box;transform-origin:center ${up ? 'bottom' : 'top'};animation:${P}-${id} ${LOOP}s linear infinite`; }
function drawLine(css, P, id, at, dur, len) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{stroke-dashoffset:${len.toFixed(0)}}${(at + dur).toFixed(1)}%,100%{stroke-dashoffset:0}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
const TINT = 'rgba(242,181,68,0.06)';
const DARK = '#0b0b0b';

function tiles(c, css, P, ky, ts, at0) {
  let s = '';
  ts.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, at0 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? TINT : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  return s;
}
const motionOff = (P) => `@media (prefers-reduced-motion: reduce){svg [style*="${P}-"]{animation:none !important}}`;

const BLOCKED = 40, SOLD = 34;

export function places(t, rtl) {
  const c = ctx(rtl); const P = 'vp'; const css = []; const H = 660;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  // left: the forty places of the departure
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 560, 280, { stroke: C.fg35, fill: DARK }) + text(c, 96, 168, t.left, { size: 11, fill: C.fg, weight: 500 }) + '</g>';
  for (let i = 0; i < BLOCKED; i++) {
    const x = 126 + (i % 10) * 48; const y = 190 + Math.floor(i / 10) * 48; const sold = i < SOLD;
    s += `<g style="animation:${show(css, P, `o${i}`, 4)}">` + rect(c, x, y, 36, 36, { stroke: sold ? C.line2 : C.accent, fill: 'none', dash: sold ? undefined : '4 3' }) + '</g>';
    if (sold) s += `<g style="${pop(css, P, `s${i}`, 5 + i * 0.75)}">` + rect(c, x, y, 36, 36, { stroke: C.fg70, fill: C.fg70 }) + '</g>';
    else s += `<g style="animation:${show(css, P, `x${i}`, 35)}">` + text(c, x + 18, y + 23, '×', { size: 14, font: 'mono', fill: C.accent, weight: 500, anchor: 'middle' }) + '</g>';
  }
  s += `<g style="animation:${show(css, P, 'ls', 37)}">` + text(c, 96, 404, t.leftSum, { size: 10, fill: C.accent, weight: 500 }) + '</g>';
  // right: the calendar of the allotment
  s += `<g style="animation:${show(css, P, 'pb', 3)}">` + rect(c, 660, 144, 460, 280, { stroke: C.fg70, fill: DARK }) + text(c, 676, 168, t.right, { size: 11, fill: C.fg, weight: 500 }) + '</g>';
  t.events.forEach(([day, top, sub], i) => {
    const y = 182 + i * 76; const hot = i === 1;
    s += `<g style="animation:${show(css, P, `e${i}`, [4, 35, 43][i])}">` + rect(c, 676, y, 428, 64, { stroke: hot ? C.accent : C.line2, fill: hot ? TINT : C.fill }) + text(c, 690, y + 24, day, { size: 11, font: 'mono', fill: C.accent, weight: 500 }) + text(c, 690, y + 46, top, { size: 10.5, fill: C.fg, weight: 500 }) + text(c, 690, y + 58, sub, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>';
  });
  const by = 440;
  s += `<g style="animation:${show(css, P, 'bd', 50)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 500;
  s += tiles(c, css, P, ky, t.tiles, 54);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// one group departure, amounts for 100 sold: [days before departure, amount]
const IN = [[90, 30], [45, 40], [15, 30]];
const OUT = [[75, 25], [40, 45], [20, 18]];
const X0 = 140, PXD = 10.2;
const dx = (d) => X0 + (90 - d) * PXD;

export function echeances(t, rtl) {
  const c = ctx(rtl); const P = 've'; const css = []; const H = 702;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const ay = 250;
  s += `<g style="animation:${show(css, P, 'ax', 3)}"><polyline points="${c.X(132)},${ay} ${c.X(1090)},${ay}" fill="none" stroke="${C.fg35}" stroke-width="1"/>` + text(c, 80, 205, t.inLabel, { size: 9, font: 'mono', fill: C.accent }) + text(c, 80, 300, t.outLabel, { size: 9, font: 'mono', fill: C.fg70 }) + '</g>';
  // events in time order
  const events = [...IN.map(([d, v], i) => ({ d, v, up: true, i })), ...OUT.map(([d, v], i) => ({ d, v, up: false, i }))].sort((a, b) => b.d - a.d);
  events.forEach((e, k) => {
    const x = dx(e.d); const h = e.v * 2; const at = 5 + k * 5; const id = `${e.up ? 'i' : 'o'}${e.i}`;
    if (e.up) {
      s += `<g style="${growY(css, P, `b${id}`, at, 2, true)}">` + rect(c, x - 13, ay - h, 26, h, { stroke: C.accent, fill: C.accent }) + '</g>';
      s += `<g style="animation:${show(css, P, `l${id}`, at + 2)}">` + text(c, x, ay - h - 8, t.ins[e.i], { size: 9.5, font: 'mono', fill: C.accent, weight: 500, anchor: 'middle' }) + text(c, x, ay + 14, t.days[e.d], { size: 9, font: 'mono', fill: C.fg55, anchor: 'middle' }) + '</g>';
    } else {
      s += `<g style="${growY(css, P, `b${id}`, at, 2, false)}">` + rect(c, x - 13, ay, 26, h, { stroke: C.fg, fill: C.fg }) + '</g>';
      s += `<g style="animation:${show(css, P, `l${id}`, at + 2)}">` + text(c, x, ay + h + 14, t.outs[e.i], { size: 9.5, font: 'mono', fill: C.fg, weight: 500, anchor: 'middle' }) + text(c, x, ay - 6, t.days[e.d], { size: 9, font: 'mono', fill: C.fg55, anchor: 'middle' }) + '</g>';
    }
  });
  // the balance of the file, one pixel per unit, zero line at zy
  const zy = 440; const by0 = (v) => zy - v;
  s += `<g style="animation:${show(css, P, 'zx', 36)}"><polyline points="${c.X(132)},${zy} ${c.X(1090)},${zy}" fill="none" stroke="${C.fg35}" stroke-width="1" stroke-dasharray="3 4"/>` + text(c, 80, zy + 4, t.balLabel, { size: 9, font: 'mono', fill: C.fg70 }) + '</g>';
  const steps = [[90, 30], [75, 5], [45, 45], [40, 0], [20, -18], [15, 12]];
  const pts = [[dx(90), zy]]; let prev = 0;
  steps.forEach(([d, v]) => { pts.push([dx(d), by0(prev)]); pts.push([dx(d), by0(v)]); prev = v; });
  pts.push([dx(0), by0(prev)]);
  let len = 0; for (let i = 1; i < pts.length; i++) len += Math.abs(pts[i][0] - pts[i - 1][0]) + Math.abs(pts[i][1] - pts[i - 1][1]);
  s += `<g style="animation:${show(css, P, 'dp', 50)}">` + rect(c, dx(20), zy, dx(15) - dx(20), 18, { stroke: C.accent, fill: TINT }) + text(c, (dx(20) + dx(15)) / 2, zy + 34, t.dip, { size: 9.5, font: 'mono', fill: C.accent, weight: 500, anchor: 'middle' }) + '</g>';
  s += `<polyline points="${pts.map(([x, y]) => `${c.X(x)},${y}`).join(' ')}" fill="none" stroke="${C.fg}" stroke-width="2" stroke-dasharray="${len.toFixed(0)}" style="animation:${drawLine(css, P, 'bl', 37, 12, len)}"/>`;
  s += `<g style="animation:${show(css, P, 'pk', 51)}">` + text(c, (dx(45) + dx(40)) / 2, by0(45) - 7, t.peak, { size: 9.5, font: 'mono', fill: C.fg, weight: 500, anchor: 'middle' }) + text(c, (dx(15) + dx(0)) / 2, by0(12) - 7, t.marge, { size: 9.5, font: 'mono', fill: C.fg, weight: 500, anchor: 'middle' }) + '</g>';
  const by = 484;
  s += `<g style="animation:${show(css, P, 'bd', 55)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 542;
  s += tiles(c, css, P, ky, t.tiles, 59);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    places: {
      title: 'Quarante places, et la date où on les rend',
      alt: 'À gauche, une grille de quarante places bloquées pour un départ : trente-quatre sont vendues, six restent invendues et sont rendues au fournisseur. À droite, trois dates : quatre-vingt-dix jours avant le départ, quarante places sont bloquées ; trente jours avant, date de rétrocession, les six invendues sont rendues ; douze jours avant, un client demande deux places de plus, qui ne sont plus dans le bloc et se traitent sur demande, au prix du jour.',
      header: 'Exemple construit · un départ en groupe, 40 places bloquées chez la compagnie et l’hôtel · ce qui se vend, ce qui se rend',
      left: 'Les 40 places du départ', right: 'Le calendrier du bloc de places',
      leftSum: '34 vendues · 6 invendues, rendues à la date prévue',
      events: [
        ['J−90', '40 places bloquées', 'prix négociés, acompte versé au fournisseur'],
        ['J−30', 'Date de rétrocession : les invendues sont rendues', '6 places rendues ; après cette date, elles seraient dues'],
        ['J−12', 'Un client veut 2 places de plus', 'plus de bloc : sur demande, au prix du jour'],
      ],
      band: 'Un bloc de places est un stock qui a une date limite : après la rétrocession, vendre une place, c’est vendre ce qu’on n’a plus.',
      tiles: [
        { big: '40 bloquées', l1: 'des sièges et des chambres négociés d’avance', l2: 'le métier dit : un allotement' },
        { big: '34 vendues, 6 rendues', l1: 'les invendues retournent au fournisseur à la date prévue', l2: 'ou restent dues, selon le contrat', hot: true },
        { big: 'une seule liste', l1: 'tous les agents vendent dans le même stock', l2: 'pas chacun dans son cahier' },
      ],
      line1: 'Le logiciel décompte les places à chaque vente, prévient avant la date de rétrocession, et bloque la vente après.',
      line2: 'Deux agents ne vendent plus la même chambre : la place est tenue le temps de l’option, puis confirmée ou libérée.',
      note: 'Exemple construit · un départ de 40 places ; J−30 se lit : trente jours avant le départ.',
    },
    echeances: {
      title: 'L’argent d’un dossier : ce qui entre, ce qui sort',
      alt: 'Sur un axe de quatre-vingt-dix jours avant le départ, pour 100 vendus : les clients versent 30 à la réservation, 40 quarante-cinq jours avant, 30 quinze jours avant ; les fournisseurs demandent 25 soixante-quinze jours avant, 45 quarante jours avant, 18 vingt jours avant. En dessous, le solde du dossier : il monte à 45, retombe à zéro quand les billets sont payés, descend à moins 18 pendant cinq jours, puis remonte à 12, la marge.',
      header: 'Exemple construit · un départ en groupe, montants pour 100 vendus · ce que versent les clients, ce que demandent les fournisseurs',
      inLabel: 'clients', outLabel: 'fournis.', balLabel: 'solde',
      ins: ['+30 · acompte', '+40 · 2ᵉ versement', '+30 · solde'],
      outs: ['−25 · acompte hôtel', '−45 · billets émis', '−18 · solde hôtel'],
      days: { 90: 'J−90', 75: 'J−75', 45: 'J−45', 40: 'J−40', 20: 'J−20', 15: 'J−15' },
      peak: '+45', dip: '−18 : l’agence avance', marge: '+12 : la marge',
      band: 'Un dossier qui gagne 12 peut manquer de 18 pendant cinq jours : l’échéancier le montre, la marge ne le montre pas.',
      tiles: [
        { big: '+12', l1: 'la marge du dossier : 100 vendus, 88 achetés', l2: 'connue le jour de la vente' },
        { big: '−18 pendant 5 jours', l1: 'l’hôtel est payé avant que le solde des clients n’arrive', l2: 'et plus, si un client paie en retard', hot: true },
        { big: '2 échéanciers', l1: 'celui des clients et celui des fournisseurs, face à face', l2: 'par dossier, puis tous départs confondus' },
      ],
      line1: 'Chaque vente crée deux échéanciers : ce que le client doit encore, et ce que l’agence doit à ses fournisseurs.',
      line2: 'Avec dix départs dans la saison, les creux s’additionnent : le logiciel les montre trois semaines à l’avance.',
      note: 'Exemple construit · montants pour 100 vendus ; vos échéances réelles viennent de vos contrats.',
    },
  },
  en: {
    places: {
      title: 'Forty places, and the date they are handed back',
      alt: 'On the left, a grid of forty places blocked for one departure: thirty-four are sold, six remain unsold and are handed back to the supplier. On the right, three dates: ninety days before departure, forty places are blocked; thirty days before, the release date, the six unsold ones are handed back; twelve days before, a customer asks for two more places, which are no longer in the block and are handled on request, at the day’s price.',
      header: 'Constructed example · a group departure, 40 places blocked with the airline and the hotel · what is sold, what is handed back',
      left: 'The 40 places of the departure', right: 'The calendar of the block of places',
      leftSum: '34 sold · 6 unsold, handed back on the agreed date',
      events: [
        ['D−90', '40 places blocked', 'negotiated prices, deposit paid to the supplier'],
        ['D−30', 'Release date: the unsold places are handed back', '6 places released; after this date, they would be owed'],
        ['D−12', 'A customer wants 2 more places', 'no block left: on request, at the day’s price'],
      ],
      band: 'A block of places is a stock with a deadline: after the release date, selling a place means selling what you no longer have.',
      tiles: [
        { big: '40 blocked', l1: 'seats and rooms negotiated in advance', l2: 'the trade calls it an allotment' },
        { big: '34 sold, 6 released', l1: 'the unsold ones go back to the supplier on the agreed date', l2: 'or stay owed, depending on the contract', hot: true },
        { big: 'one single list', l1: 'all agents sell from the same stock', l2: 'not each from their own notebook' },
      ],
      line1: 'The software counts the places down at each sale, warns before the release date, and blocks the sale after it.',
      line2: 'Two agents no longer sell the same room: the place is held for the time of the option, then confirmed or freed.',
      note: 'Constructed example · a departure of 40 places; D−30 reads: thirty days before departure.',
    },
    echeances: {
      title: 'The money of one file: what comes in, what goes out',
      alt: 'On an axis of ninety days before departure, for 100 sold: customers pay 30 at booking, 40 forty-five days before, 30 fifteen days before; suppliers ask for 25 seventy-five days before, 45 forty days before, 18 twenty days before. Below, the balance of the file: it rises to 45, falls back to zero when the tickets are paid, drops to minus 18 for five days, then comes back up to 12, the margin.',
      header: 'Constructed example · a group departure, amounts for 100 sold · what customers pay, what suppliers ask for',
      inLabel: 'customers', outLabel: 'suppliers', balLabel: 'balance',
      ins: ['+30 · deposit', '+40 · 2nd payment', '+30 · balance'],
      outs: ['−25 · hotel deposit', '−45 · tickets issued', '−18 · hotel balance'],
      days: { 90: 'D−90', 75: 'D−75', 45: 'D−45', 40: 'D−40', 20: 'D−20', 15: 'D−15' },
      peak: '+45', dip: '−18: the agency advances', marge: '+12: the margin',
      band: 'A file that earns 12 can be short of 18 for five days: the schedule shows it, the margin does not.',
      tiles: [
        { big: '+12', l1: 'the margin of the file: 100 sold, 88 bought', l2: 'known on the day of the sale' },
        { big: '−18 for 5 days', l1: 'the hotel is paid before the customers’ balance arrives', l2: 'and more, if a customer pays late', hot: true },
        { big: '2 schedules', l1: 'the customers’ and the suppliers’, face to face', l2: 'per file, then all departures together' },
      ],
      line1: 'Each sale creates two schedules: what the customer still owes, and what the agency owes its suppliers.',
      line2: 'With ten departures in the season, the dips add up: the software shows them three weeks ahead.',
      note: 'Constructed example · amounts for 100 sold; your real deadlines come from your contracts.',
    },
  },
  ar: {
    places: {
      title: 'أربعون مكاناً، وتاريخ إرجاعها',
      alt: 'في جهة، شبكة من أربعين مكاناً محجوزاً لرحلة واحدة: أربعة وثلاثون مباعة، وستة بقيت دون بيع وأُرجعت للمورّد. وفي الجهة الأخرى، ثلاثة تواريخ: قبل تسعين يوماً من الانطلاق، أربعون مكاناً محجوزة؛ قبل ثلاثين يوماً، تاريخ الإرجاع، الأماكن الستة غير المباعة تُرجَع؛ وقبل اثني عشر يوماً، زبون يطلب مكانين إضافيين، لم يعودا في الحصة ويُعالَجان عند الطلب، بسعر اليوم.',
      header: 'مثال مركَّب · رحلة جماعية، 40 مكاناً محجوزاً عند شركة الطيران والفندق · ما يُباع، وما يُرجَع',
      left: 'الأماكن الأربعون للرحلة', right: 'رزنامة حصة الأماكن',
      leftSum: '34 مباعة · 6 غير مباعة، أُرجعت في التاريخ المحدَّد',
      events: [
        ['قبل 90 يوماً', '40 مكاناً محجوزاً', 'أسعار متفاوَض عليها، وتسبيق مدفوع للمورّد'],
        ['قبل 30 يوماً', 'تاريخ الإرجاع: غير المباعة تُرجَع', '6 أماكن مُرجَعة؛ وبعد هذا التاريخ، كانت ستُستحَق'],
        ['قبل 12 يوماً', 'زبون يريد مكانين إضافيين', 'لا حصة بعد الآن: عند الطلب، بسعر اليوم'],
      ],
      band: 'حصة الأماكن مخزون له أجل: بعد تاريخ الإرجاع، بيع مكان يعني بيع ما لم يعد عندكم.',
      tiles: [
        { big: '40 محجوزة', l1: 'مقاعد وغرف متفاوَض عليها مسبقاً', l2: 'وتسمّى في المهنة حصة' },
        { big: '34 مباعة، 6 مُرجَعة', l1: 'غير المباعة ترجع للمورّد في التاريخ المحدَّد', l2: 'أو تبقى مستحَقة، حسب العقد', hot: true },
        { big: 'قائمة واحدة', l1: 'كل الأعوان يبيعون من المخزون نفسه', l2: 'لا كل واحد من دفتره' },
      ],
      line1: 'البرنامج ينقص الأماكن عند كل بيع، ينبّه قبل تاريخ الإرجاع، ويمنع البيع بعده.',
      line2: 'عونان لم يعودا يبيعان الغرفة نفسها: المكان يُمسَك مدة الخيار، ثم يُؤكَّد أو يُحرَّر.',
      note: 'مثال مركَّب · رحلة من 40 مكاناً؛ والأيام محسوبة قبل الانطلاق.',
    },
    echeances: {
      title: 'مال الملف الواحد: ما يدخل، وما يخرج',
      alt: 'على محور من تسعين يوماً قبل الانطلاق، لكل 100 مباعة: الزبائن يدفعون 30 عند الحجز، 40 قبل خمسة وأربعين يوماً، و30 قبل خمسة عشر يوماً؛ والمورّدون يطلبون 25 قبل خمسة وسبعين يوماً، 45 قبل أربعين يوماً، و18 قبل عشرين يوماً. وتحته، رصيد الملف: يصعد إلى 45، ينزل إلى الصفر حين تُدفع التذاكر، يهبط إلى ناقص 18 مدة خمسة أيام، ثم يرجع إلى 12، وهو الهامش.',
      header: 'مثال مركَّب · رحلة جماعية، المبالغ لكل 100 مباعة · الأرقام على المحور: الأيام قبل الانطلاق',
      inLabel: 'الزبائن', outLabel: 'المورّدون', balLabel: 'الرصيد',
      ins: ['⁦+30⁩ · تسبيق', '⁦+40⁩ · الدفعة الثانية', '⁦+30⁩ · الباقي'],
      outs: ['⁦−25⁩ · تسبيق الفندق', '⁦−45⁩ · إصدار التذاكر', '⁦−18⁩ · باقي الفندق'],
      days: { 90: '90', 75: '75', 45: '45', 40: '40', 20: '20', 15: '15' },
      peak: '⁦+45⁩', dip: '⁦−18⁩: الوكالة تسبّق', marge: '⁦+12⁩: الهامش',
      band: 'ملف يربح 12 قد ينقصه 18 مدة خمسة أيام: الآجال تُظهره، والهامش لا يُظهره.',
      tiles: [
        { big: '⁦+12⁩', l1: 'هامش الملف: 100 مباعة، و88 مشتراة', l2: 'يُعرف يوم البيع' },
        { big: '⁦−18⁩ مدة 5 أيام', l1: 'الفندق يُدفع له قبل وصول باقي الزبائن', l2: 'وأكثر، إذا تأخر زبون', hot: true },
        { big: 'جدولا آجال', l1: 'جدول الزبائن وجدول المورّدين، وجهاً لوجه', l2: 'لكل ملف، ثم لكل الرحلات معاً' },
      ],
      line1: 'كل بيع يُنشئ جدولَي آجال: ما بقي على الزبون، وما على الوكالة لمورّديها.',
      line2: 'ومع عشر رحلات في الموسم، تتراكم الفجوات: والبرنامج يُظهرها قبل ثلاثة أسابيع.',
      note: 'مثال مركَّب · المبالغ لكل 100 مباعة؛ وآجالكم الحقيقية تأتي من عقودكم.',
    },
  },
};
