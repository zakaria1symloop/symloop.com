// Bespoke animated figures for the 2027 "logiciel pièces auto" post.
//  references(): one part, five names. A vehicle card, the manufacturer's
//                reference, then four equivalent references fanning out; the
//                connectors draw themselves one after another, each card
//                appears with its stock and shelf location; two boxes compare
//                the answer without and with the equivalences; three tiles.
//  manquees():   one month of counter requests on five references. For each,
//                the served quantity grows as a bar, then the unserved part
//                grows after it, with the sales missed; a summary band gives
//                the fill rate; three tiles.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function growX(css, P, id, at, dur, rtl) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'} center;animation:${P}-${id} ${LOOP}s linear infinite`; }
function drawLine(css, P, id, at, dur, len) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{stroke-dashoffset:${len}}${(at + dur).toFixed(1)}%,100%{stroke-dashoffset:0}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
const I = (x) => `⁦${x}⁩`;
const TINT = 'rgba(242,181,68,0.06)';
const DARK = '#0b0b0b';

function tiles(c, css, P, ky, ts, at0) {
  let s = '';
  ts.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, at0 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? TINT : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  return s;
}
const motionOff = (P) => `@media (prefers-reduced-motion: reduce){svg [style*="${P}-"]{animation:none !important}}`;
const poly = (c, css, P, id, pts, stroke, at, dur) => { let len = 0; for (let i = 1; i < pts.length; i++) len += Math.abs(pts[i][0] - pts[i - 1][0]) + Math.abs(pts[i][1] - pts[i - 1][1]); const L = Math.ceil(len); return `<polyline points="${pts.map(([x, y]) => `${c.X(x).toFixed(1)},${y.toFixed(1)}`).join(' ')}" fill="none" stroke="${stroke}" stroke-width="1.5" stroke-dasharray="${L}" style="animation:${drawLine(css, P, id, at, dur, L)}"/>`; };

// stock of each equivalent reference in the example
const STOCK = [0, 3, 0, 6];

export function references(t, rtl) {
  const c = ctx(rtl); const P = 'pr'; const css = []; const H = 616;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'ct', 3)}">` + text(c, 80, 152, t.cols[0], { size: 9, font: 'mono', fill: C.fg55 }) + text(c, 410, 152, t.cols[1], { size: 9, font: 'mono', fill: C.fg55 }) + text(c, 760, 152, t.cols[2], { size: 9, font: 'mono', fill: C.fg55 }) + '</g>';
  // the vehicle
  const my = 265;
  s += `<g style="animation:${show(css, P, 'v', 4)}">` + rect(c, 80, my - 48, 230, 96, { stroke: C.line2, fill: DARK }) + text(c, 96, my - 22, t.vehicle[0], { size: 12, fill: C.fg, weight: 500 }) + text(c, 96, my - 2, t.vehicle[1], { size: 9.5, fill: C.fg70 }) + text(c, 96, my + 18, t.vehicle[2], { size: 8.5, font: 'mono', fill: C.fg55 }) + text(c, 96, my + 34, t.vehicle[3], { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>';
  s += poly(c, css, P, 'c0', [[310, my], [410, my]], C.fg70, 7, 2);
  // the manufacturer's reference
  s += `<g style="animation:${show(css, P, 'o', 10)}">` + rect(c, 410, my - 40, 230, 80, { stroke: C.accent, fill: TINT }) + text(c, 426, my - 12, t.oe[0], { size: 12, font: 'mono', fill: C.accent, weight: 500 }) + text(c, 426, my + 8, t.oe[1], { size: 9.5, fill: C.fg70 }) + text(c, 426, my + 26, t.oe[2], { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>';
  // four equivalent references
  t.eq.forEach((e, i) => {
    const y = 168 + i * 52; const inStock = STOCK[i] > 0; const at = 14 + i * 6;
    s += poly(c, css, P, `e${i}`, [[640, my], [700, my], [700, y + 22], [760, y + 22]], inStock ? C.accent : C.fg35, at, 3);
    s += `<g style="animation:${show(css, P, `q${i}`, at + 3.5)}">` + rect(c, 760, y, 360, 44, { stroke: inStock ? C.accent : C.line2, fill: inStock ? TINT : DARK })
      + text(c, 774, y + 19, e.brand, { size: 10.5, fill: inStock ? C.fg : C.fg70, weight: 500 }) + text(c, 774, y + 34, e.ref, { size: 9, font: 'mono', fill: C.fg55 })
      + text(c, 1106, y + 19, e.stock, { size: 10, font: 'mono', fill: inStock ? C.accent : C.fg35, weight: inStock ? 500 : 400, anchor: 'end' }) + text(c, 1106, y + 34, e.more, { size: 8.5, font: 'mono', fill: C.fg55, anchor: 'end' }) + '</g>';
  });
  // without and with the equivalences
  const by = 396;
  s += `<g style="animation:${show(css, P, 'b0', 42)}">` + rect(c, 80, by, 510, 46, { stroke: C.line2, fill: C.fill }) + text(c, 94, by + 19, t.without[0], { size: 10, fill: C.fg70, weight: 500 }) + text(c, 94, by + 35, t.without[1], { size: 9.5, fill: C.fg55 }) + '</g>';
  s += `<g style="animation:${show(css, P, 'b1', 48)}">` + rect(c, 610, by, 510, 46, { stroke: C.accent, fill: TINT }) + text(c, 624, by + 19, t.withEq[0], { size: 10, fill: C.accent, weight: 500 }) + text(c, 624, by + 35, t.withEq[1], { size: 9.5, fill: C.fg }) + '</g>';
  const ky = 456;
  s += tiles(c, css, P, ky, t.tiles, 56);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// asked, served over one month, for five references
const MONTH = [[46, 46], [38, 29], [14, 6], [22, 15], [30, 30]];

export function manquees(t, rtl) {
  const c = ctx(rtl); const P = 'pm'; const css = []; const H = 608;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const x0 = 340, u = 500 / 46;
  s += `<g style="animation:${show(css, P, 'lg', 3)}">` + rect(c, x0, 142, 12, 10, { stroke: C.fg70, fill: C.fill }) + text(c, x0 + 18, 151, t.legend[0], { size: 8.5, font: 'mono', fill: C.fg55 }) + rect(c, x0 + 130, 142, 12, 10, { stroke: C.accent, fill: TINT }) + text(c, x0 + 148, 151, t.legend[1], { size: 8.5, font: 'mono', fill: C.accent }) + '</g>';
  MONTH.forEach(([asked, served], i) => {
    const y = 166 + i * 44; const at = 6 + i * 8; const missed = asked - served; const r = t.rows[i];
    s += `<g style="animation:${show(css, P, `l${i}`, at)}">` + text(c, 80, y + 11, r.name, { size: 10.5, fill: C.fg, weight: 500 }) + text(c, 80, y + 25, r.sub, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>';
    s += `<g style="${growX(css, P, `s${i}`, at + 1, 2.5, rtl)}">` + rect(c, x0, y, served * u, 26, { stroke: C.fg70, fill: C.fill }) + '</g>';
    if (missed) s += `<g style="${growX(css, P, `m${i}`, at + 3.5, 2, rtl)}">` + rect(c, x0 + served * u + 2, y, missed * u - 2, 26, { stroke: C.accent, fill: TINT }) + '</g>';
    s += `<g style="animation:${show(css, P, `v${i}`, at + 6)}">` + text(c, x0 + asked * u + 12, y + 17, r.v, { size: 10, font: 'mono', fill: missed ? C.accent : C.fg55, weight: missed ? 500 : 400 }) + '</g>';
  });
  const sy = 392;
  s += `<g style="animation:${show(css, P, 'sm', 50)}">` + rect(c, 80, sy, 1040, 42, { stroke: C.line2, fill: DARK }) + text(c, 96, sy + 26, t.sum[0], { size: 10.5, fill: C.fg }) + text(c, 600, sy + 26, t.sum[1], { size: 11.5, font: 'mono', fill: C.accent, weight: 500, anchor: 'middle' }) + text(c, 1104, sy + 26, t.sum[2], { size: 10.5, fill: C.fg, anchor: 'end' }) + '</g>';
  const ky = 448;
  s += tiles(c, css, P, ky, t.tiles, 56);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    references: {
      title: 'Une pièce, cinq références : la bonne est en rayon sous un autre nom',
      alt: 'Un client demande des plaquettes de frein avant pour une citadine essence de 2015. La référence du constructeur est à zéro en stock. Elle a quatre références équivalentes : la marque A, zéro en stock ; la marque B, trois en stock, case B-12-4, 2 900 DA ; la marque C, zéro en stock ; la marque D, six en stock, case C-03-2, 4 200 DA. Sans les équivalences, le vendeur répond qu’il n’a pas la pièce ; avec elles, il en propose neuf, de deux marques, à deux emplacements.',
      header: 'Exemple construit · plaquettes de frein avant pour une citadine essence de 2015 · références et prix inventés',
      cols: ['le véhicule', 'la référence du constructeur', 'les références équivalentes'],
      vehicle: ['Citadine 1.2 essence', 'année 2015 · 75 ch', 'n° de châssis : 17 caractères', 'il lève le doute sur le moteur'],
      oe: ['OE 41 06 012 34', 'référence du constructeur', '0 en stock · sur commande, 5 jours'],
      eq: [
        { brand: 'Marque A', ref: 'A-4832', stock: '0 en stock', more: 'jamais référencée' },
        { brand: 'Marque B', ref: 'B-2157', stock: '3 en stock · case B-12-4', more: '2 900 DA' },
        { brand: 'Marque C', ref: 'C-68065', stock: '0 en stock', more: 'rupture depuis 12 jours' },
        { brand: 'Marque D', ref: 'D-4697', stock: '6 en stock · case C-03-2', more: '4 200 DA' },
      ],
      without: ['Sans les équivalences', 'on cherche la référence du constructeur : 0 en stock, « on ne l’a pas »'],
      withEq: ['Avec les équivalences', 'deux marques en rayon : 9 pièces, cases B-12-4 et C-03-2'],
      tiles: [
        { big: '1 pièce, 5 références', l1: 'une du constructeur, quatre équivalentes', l2: 'chercher l’une trouve les quatre autres' },
        { big: '9 en stock', l1: 'sous deux marques, à deux emplacements', l2: 'alors que la référence cherchée est à zéro', hot: true },
        { big: '17 caractères', l1: 'le numéro de châssis identifie le véhicule', l2: 'lettres et chiffres, sans I, O ni Q' },
      ],
      line1: 'La pièce n’est pas introuvable parce qu’elle manque : elle l’est parce qu’elle porte un autre nom.',
      line2: 'Le logiciel ne remplace pas le vendeur expérimenté : il met ce qu’il sait à la portée des autres.',
      note: 'Exemple construit · véhicule, références, stocks et prix inventés pour montrer le mécanisme.',
    },
    manquees: {
      title: 'Un mois de demandes au comptoir : 24 ventes manquées que personne n’a comptées',
      alt: 'Demandes et ventes d’un mois sur cinq références. Filtre à huile : 46 demandés, 46 servis. Plaquettes avant : 38 demandées, 29 servies, 9 manquées, 30 600 DA. Kit de distribution : 14 demandés, 6 servis, 8 manqués, 148 000 DA. Amortisseur avant : 22 demandés, 15 servis, 7 manqués, 68 600 DA. Bougies : 30 demandées, 30 servies. Au total 150 demandes, 126 servies, 24 manquées, soit un taux de service de 84 % et 247 200 DA de ventes manquées.',
      header: 'Exemple construit · un mois de demandes au comptoir sur cinq références · pas des prix de marché',
      legend: ['demandé et servi', 'demandé, pas servi'],
      rows: [
        { name: 'Filtre à huile', sub: 'demandé 46 · servi 46', v: '0 manquée' },
        { name: 'Plaquettes avant', sub: 'demandé 38 · servi 29', v: '9 manquées · 30 600 DA' },
        { name: 'Kit de distribution', sub: 'demandé 14 · servi 6', v: '8 manqués · 148 000 DA' },
        { name: 'Amortisseur avant', sub: 'demandé 22 · servi 15', v: '7 manqués · 68 600 DA' },
        { name: 'Bougies', sub: 'demandé 30 · servi 30', v: '0 manquée' },
      ],
      sum: ['150 demandes · 126 servies · 24 manquées', 'taux de service 84 %', '247 200 DA de ventes manquées sur trois références'],
      tiles: [
        { big: '24 demandes manquées', l1: 'sur 150, en un mois, sur cinq références', l2: 'aucune n’apparaît dans les ventes' },
        { big: '247 200 DA', l1: 'de ventes manquées sur trois références', l2: 'huit kits de distribution pèsent 148 000 DA', hot: true },
        { big: '1 geste au comptoir', l1: 'noter la demande quand on répond non', l2: 'la liste d’achat se prépare toute seule' },
      ],
      line1: 'Les ventes disent ce que vous avez vendu ; elles ne disent jamais ce qu’on vous a demandé et que vous n’aviez pas.',
      line2: 'Une demande non servie, notée au moment où l’on répond non, est la meilleure mesure de ce qu’il faut acheter.',
      note: 'Exemple construit · quantités et prix inventés ; taux de service = quantités servies ÷ quantités demandées.',
    },
  },
  en: {
    references: {
      title: 'One part, five references: the right one is on the shelf under another name',
      alt: 'A customer asks for front brake pads for a 2015 petrol city car. The manufacturer’s reference is at zero in stock. It has four equivalent references: brand A, zero in stock; brand B, three in stock, bin B-12-4, 2,900 DZD; brand C, zero in stock; brand D, six in stock, bin C-03-2, 4,200 DZD. Without the equivalences, the salesperson answers that the part is not available; with them, they offer nine, from two brands, in two locations.',
      header: 'Constructed example · front brake pads for a 2015 petrol city car · invented references and prices',
      cols: ['the vehicle', 'the manufacturer’s reference', 'the equivalent references'],
      vehicle: ['City car 1.2 petrol', 'year 2015 · 75 hp', 'chassis number: 17 characters', 'it settles the doubt on the engine'],
      oe: ['OE 41 06 012 34', 'manufacturer’s reference', '0 in stock · to order, 5 days'],
      eq: [
        { brand: 'Brand A', ref: 'A-4832', stock: '0 in stock', more: 'never listed' },
        { brand: 'Brand B', ref: 'B-2157', stock: '3 in stock · bin B-12-4', more: '2,900 DZD' },
        { brand: 'Brand C', ref: 'C-68065', stock: '0 in stock', more: 'out for 12 days' },
        { brand: 'Brand D', ref: 'D-4697', stock: '6 in stock · bin C-03-2', more: '4,200 DZD' },
      ],
      without: ['Without the equivalences', 'you look up the manufacturer’s reference: 0 in stock, “we don’t have it”'],
      withEq: ['With the equivalences', 'two brands on the shelf: 9 parts, bins B-12-4 and C-03-2'],
      tiles: [
        { big: '1 part, 5 references', l1: 'one from the manufacturer, four equivalent', l2: 'searching one finds the other four' },
        { big: '9 in stock', l1: 'under two brands, in two locations', l2: 'while the reference searched is at zero', hot: true },
        { big: '17 characters', l1: 'the chassis number identifies the vehicle', l2: 'letters and digits, without I, O or Q' },
      ],
      line1: 'The part is not impossible to find because it is missing: it is because it goes by another name.',
      line2: 'The software does not replace the experienced salesperson: it puts what they know within reach of the others.',
      note: 'Constructed example · vehicle, references, stock and prices invented to show the mechanism.',
    },
    manquees: {
      title: 'A month of counter requests: 24 missed sales that nobody counted',
      alt: 'Requests and sales over one month on five references. Oil filter: 46 asked, 46 served. Front pads: 38 asked, 29 served, 9 missed, 30,600 DZD. Timing kit: 14 asked, 6 served, 8 missed, 148,000 DZD. Front shock absorber: 22 asked, 15 served, 7 missed, 68,600 DZD. Spark plugs: 30 asked, 30 served. In total 150 requests, 126 served, 24 missed, that is a fill rate of 84 % and 247,200 DZD of missed sales.',
      header: 'Constructed example · one month of counter requests on five references · not market prices',
      legend: ['asked and served', 'asked, not served'],
      rows: [
        { name: 'Oil filter', sub: 'asked 46 · served 46', v: '0 missed' },
        { name: 'Front brake pads', sub: 'asked 38 · served 29', v: '9 missed · 30,600 DZD' },
        { name: 'Timing kit', sub: 'asked 14 · served 6', v: '8 missed · 148,000 DZD' },
        { name: 'Front shock absorber', sub: 'asked 22 · served 15', v: '7 missed · 68,600 DZD' },
        { name: 'Spark plugs', sub: 'asked 30 · served 30', v: '0 missed' },
      ],
      sum: ['150 requests · 126 served · 24 missed', 'fill rate 84 %', '247,200 DZD of missed sales on three references'],
      tiles: [
        { big: '24 missed requests', l1: 'out of 150, in one month, on five references', l2: 'none of them shows in the sales' },
        { big: '247,200 DZD', l1: 'of missed sales on three references', l2: 'eight timing kits weigh 148,000 DZD', hot: true },
        { big: '1 action at the counter', l1: 'note the request when the answer is no', l2: 'the purchase list prepares itself' },
      ],
      line1: 'Sales tell you what you sold; they never tell you what you were asked for and did not have.',
      line2: 'An unserved request, noted at the moment you say no, is the best measure of what to buy.',
      note: 'Constructed example · invented quantities and prices; fill rate = quantities served ÷ quantities asked.',
    },
  },
  ar: {
    references: {
      title: 'قطعة واحدة، خمسة مراجع: الصحيحة على الرفّ باسم آخر',
      alt: 'زبون يطلب صفائح فرامل أمامية لسيارة مدينة بنزين من سنة 2015. مرجع الصانع عند الصفر في المخزون. وله أربعة مراجع مكافئة: العلامة أ، صفر في المخزون؛ العلامة ب، ثلاث في المخزون، الخانة B-12-4، بسعر 2900 دج؛ العلامة ج، صفر في المخزون؛ العلامة د، ست في المخزون، الخانة C-03-2، بسعر 4200 دج. دون المكافئات يجيب البائع أن القطعة غير موجودة؛ ومعها يقترح تسع قطع، من علامتين، في موضعين.',
      header: 'مثال مركَّب · صفائح فرامل أمامية لسيارة مدينة بنزين من سنة 2015 · مراجع وأسعار مخترَعة',
      cols: ['السيارة', 'مرجع الصانع', 'المراجع المكافئة'],
      vehicle: ['سيارة مدينة 1.2 بنزين', 'سنة 2015 · 75 حصاناً', 'رقم الهيكل: 17 حرفاً ورقماً', 'يرفع الشك حول المحرك'],
      oe: [I('OE 41 06 012 34'), 'مرجع الصانع', '0 في المخزون · بالطلب، 5 أيام'],
      eq: [
        { brand: 'العلامة أ', ref: I('A-4832'), stock: '0 في المخزون', more: 'لم تُدرَج قط' },
        { brand: 'العلامة ب', ref: I('B-2157'), stock: `3 في المخزون · الخانة ${I('B-12-4')}`, more: `${I('2 900')} دج` },
        { brand: 'العلامة ج', ref: I('C-68065'), stock: '0 في المخزون', more: 'نفاد منذ 12 يوماً' },
        { brand: 'العلامة د', ref: I('D-4697'), stock: `6 في المخزون · الخانة ${I('C-03-2')}`, more: `${I('4 200')} دج` },
      ],
      without: ['دون المكافئات', 'نبحث عن مرجع الصانع: 0 في المخزون، «ليست عندنا»'],
      withEq: ['مع المكافئات', `علامتان على الرفّ: 9 قطع، الخانتان ${I('B-12-4')} و${I('C-03-2')}`],
      tiles: [
        { big: 'قطعة واحدة، 5 مراجع', l1: 'واحد للصانع، وأربعة مكافئة', l2: 'البحث عن أحدها يجد الأربعة الأخرى' },
        { big: '9 في المخزون', l1: 'بعلامتين، في موضعين', l2: 'والمرجع المبحوث عنه عند الصفر', hot: true },
        { big: '17 حرفاً ورقماً', l1: 'رقم الهيكل يعرّف السيارة', l2: `حروف وأرقام، دون ${I('I')} و${I('O')} و${I('Q')}` },
      ],
      line1: 'القطعة ليست مفقودة لأنها غير موجودة: بل لأنها تحمل اسماً آخر.',
      line2: 'البرنامج لا يعوّض البائع المتمرّس: يضع ما يعرفه في متناول الآخرين.',
      note: 'مثال مركَّب · السيارة والمراجع والمخزون والأسعار مخترَعة لبيان الآلية.',
    },
    manquees: {
      title: 'شهر من الطلبات في المحل: 24 بيعاً ضائعاً لم يحسبه أحد',
      alt: 'الطلبات والمبيعات خلال شهر على خمسة مراجع. مصفاة الزيت: 46 مطلوبة، 46 مسلَّمة. الصفائح الأمامية: 38 مطلوبة، 29 مسلَّمة، 9 ضائعة، 30600 دج. طقم التوزيع: 14 مطلوباً، 6 مسلَّمة، 8 ضائعة، 148 ألف دج. المخمِّد الأمامي: 22 مطلوباً، 15 مسلَّماً، 7 ضائعة، 68600 دج. الشمعات: 30 مطلوبة، 30 مسلَّمة. المجموع 150 طلباً، 126 مسلَّماً، 24 ضائعاً، أي نسبة خدمة 84 بالمئة و247200 دج من المبيعات الضائعة.',
      header: 'مثال مركَّب · شهر من الطلبات في المحل على خمسة مراجع · ليست أسعار السوق',
      legend: ['مطلوب ومسلَّم', 'مطلوب، غير مسلَّم'],
      rows: [
        { name: 'مصفاة الزيت', sub: 'مطلوب 46 · مسلَّم 46', v: '0 ضائع' },
        { name: 'الصفائح الأمامية', sub: 'مطلوب 38 · مسلَّم 29', v: `9 ضائعة · ${I('30 600')} دج` },
        { name: 'طقم التوزيع', sub: 'مطلوب 14 · مسلَّم 6', v: `8 ضائعة · ${I('148 000')} دج` },
        { name: 'المخمِّد الأمامي', sub: 'مطلوب 22 · مسلَّم 15', v: `7 ضائعة · ${I('68 600')} دج` },
        { name: 'الشمعات', sub: 'مطلوب 30 · مسلَّم 30', v: '0 ضائع' },
      ],
      sum: ['150 طلباً · 126 مسلَّماً · 24 ضائعاً', 'نسبة الخدمة 84 %', `${I('247 200')} دج من المبيعات الضائعة على ثلاثة مراجع`],
      tiles: [
        { big: '24 طلباً ضائعاً', l1: 'من 150، في شهر، على خمسة مراجع', l2: 'ولا واحد منها يظهر في المبيعات' },
        { big: `${I('247 200')} دج`, l1: 'مبيعات ضائعة على ثلاثة مراجع', l2: 'ثمانية أطقم توزيع تزن 148 ألف دج', hot: true },
        { big: 'حركة واحدة في المحل', l1: 'تسجيل الطلب حين نجيب بلا', l2: 'قائمة الشراء تُحضَّر وحدها' },
      ],
      line1: 'المبيعات تقول ما بعتم؛ ولا تقول أبداً ما طُلب منكم ولم يكن عندكم.',
      line2: 'الطلب غير المسلَّم، المسجَّل لحظة الجواب بلا، هو أحسن مقياس لما يجب شراؤه.',
      note: 'مثال مركَّب · كميات وأسعار مخترَعة؛ نسبة الخدمة = الكميات المسلَّمة ÷ الكميات المطلوبة.',
    },
  },
};
