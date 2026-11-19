// Bespoke animated figures for the 2027 "logiciel imprimerie" page.
//  quantite(): the total cost of one flyer job by quantity, in offset (12 000 of fixed
//              costs then 6 per copy) and in digital (1 500 then 14 per copy). The two
//              lines cross at 1 312.5 copies: below, digital costs less; above, offset.
//  pose():     the same A6 flyer (111 x 154 mm with 3 mm bleed) laid out on the same
//              320 x 450 mm sheet (usable area 310 x 440): on its side it fits 4 times,
//              upright 6 times; 750 sheets against 500 for 3 000 copies.
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
const grp = (n, sep) => String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, sep);
const hline = (c, x1, x2, y, color, dash, sw) => `<polyline points="${c.X(x1)},${y} ${c.X(x2)},${y}" fill="none" stroke="${color}" stroke-width="${sw || 1}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const vline = (c, x, y1, y2, color, dash) => `<polyline points="${c.X(x)},${y1} ${c.X(x)},${y2}" fill="none" stroke="${color}" stroke-width="1"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;

// one flyer job: fixed costs, then a cost per copy
const OFF = { f: 12000, v: 6 };
const DIG = { f: 1500, v: 14 };
const QMAX = 3000;
const QX = (q) => 150 + q * 0.3;
const VY = (v) => 424 - v * 0.0049;
const tot = (m, q) => m.f + m.v * q;

export function quantite(t, rtl) {
  const c = ctx(rtl); const P = 'iq'; const css = []; const H = 686; const sep = t.sep;
  const qe = (OFF.f - DIG.f) / (DIG.v - OFF.v);   // 1312.5 copies
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  let frame = rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + hline(c, QX(0), QX(QMAX), VY(0), C.line2) + text(c, 96, 442, t.axis, { size: 8.5, font: 'mono', fill: C.fg55 });
  for (let q = 500; q <= QMAX; q += 500) frame += num(c, QX(q), 442, grp(q, sep), { size: 9, fill: C.fg55 });
  s += `<g style="animation:${show(css, P, 'pa', 3)}">${frame}</g>`;
  const line = (m, color, id, at) => {
    const x1 = c.X(QX(0)); const y1 = VY(tot(m, 0)); const x2 = c.X(QX(QMAX)); const y2 = VY(tot(m, QMAX));
    const len = Math.hypot(x2 - x1, y2 - y1);
    return `<polyline points="${x1.toFixed(1)},${y1.toFixed(1)} ${x2.toFixed(1)},${y2.toFixed(1)}" fill="none" stroke="${color}" stroke-width="2.5" stroke-dasharray="${len.toFixed(0)}" style="animation:${drawLine(css, P, id, at, 7, len)}"/>`;
  };
  const dot = (q, m, color, r) => `<circle cx="${c.X(QX(q)).toFixed(1)}" cy="${VY(tot(m, q)).toFixed(1)}" r="${r || 3.5}" fill="${color}"/>`;
  s += line(OFF, C.fg, 'of', 6) + line(DIG, C.accent, 'dg', 10);
  [[C.fg, t.legend[0]], [C.accent, t.legend[1]]].forEach(([color, label], i) => {
    const y = 198 + i * 20;
    s += `<g style="animation:${show(css, P, `g${i}`, 8 + i * 4)}">` + hline(c, 96, 120, y - 4, color, null, 2.5) + text(c, 130, y, label, { size: 10, fill: C.fg }) + '</g>';
  });
  let dots = '';
  [500, 1000, 2000, 3000].forEach((q) => { dots += dot(q, OFF, C.fg) + dot(q, DIG, C.accent); });
  s += `<g style="animation:${show(css, P, 'ds', 19)}">${dots}</g>`;
  s += `<g style="animation:${show(css, P, 'en', 21)}">` + num(c, QX(QMAX), VY(tot(DIG, QMAX)) - 9, grp(tot(DIG, QMAX), sep), { size: 11, bold: true, fill: C.accent }) + num(c, QX(QMAX), VY(tot(OFF, QMAX)) - 9, grp(tot(OFF, QMAX), sep), { size: 11, bold: true, fill: C.fg }) + '</g>';
  s += `<g style="animation:${show(css, P, 'vx', 25)}">` + vline(c, QX(qe), 270, VY(0), C.fg55, '4 4') + text(c, QX(qe) + 8, 262, t.equal, { size: 10, fill: C.fg, weight: 500 }) + '</g>';
  s += `<g style="${pop(css, P, 'cx', 27)}"><circle cx="${c.X(QX(qe)).toFixed(1)}" cy="${VY(tot(OFF, qe)).toFixed(1)}" r="7" fill="${DARK}" stroke="${C.accent}" stroke-width="2"/></g>`;
  s += `<g style="animation:${show(css, P, 'zl', 31)}">` + text(c, 170, 300, t.zoneL, { size: 10, fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'zr', 34)}">` + text(c, 700, 392, t.zoneR, { size: 10, fill: C.fg }) + '</g>';
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bd', 40)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 44);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// a 450 x 320 mm sheet drawn landscape at 0.6 px per mm, usable area 440 x 310
const MM = 0.6;
function sheet(c, css, P, id, x0, y0, cols, rows, pw, ph, at) {
  let s = rect(c, x0, y0, 450 * MM, 320 * MM, { stroke: C.fg55, fill: C.fill }) + rect(c, x0 + 5 * MM, y0 + 5 * MM, 440 * MM, 310 * MM, { stroke: C.fg35, fill: 'none', dash: '3 3' });
  const w = pw * MM; const h = ph * MM;
  const ox = x0 + 5 * MM + (440 * MM - cols * w) / 2; const oy = y0 + 5 * MM + (310 * MM - rows * h) / 2;
  let k = 0;
  for (let r = 0; r < rows; r++) {
    for (let q = 0; q < cols; q++) {
      const x = ox + q * w; const y = oy + r * h; const b = 3 * MM;
      const tw = w - 2 * b; const th = h - 2 * b; const upright = pw < ph;
      const head = upright ? rect(c, x + b + 6, y + b + 7, tw - 12, 6, { stroke: C.fg55, fill: C.fg55 }) : rect(c, x + b + 7, y + b + 6, 6, th - 12, { stroke: C.fg55, fill: C.fg55 });
      s += `<g style="${pop(css, P, `${id}${k}`, at + k * 1.4)}">` + rect(c, x, y, w, h, { stroke: C.accent, fill: TINT, dash: '2 2' }) + rect(c, x + b, y + b, tw, th, { stroke: C.fg70, fill: DARK }) + head + '</g>';
      k++;
    }
  }
  return s;
}

export function pose(t, rtl) {
  const c = ctx(rtl); const P = 'ip'; const css = []; const H = 686;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + text(c, 96, 172, t.legend, { size: 8.5, font: 'mono', fill: C.fg55 }) + `<polyline points="${c.X(600)},190 ${c.X(600)},436" fill="none" stroke="${C.line2}" stroke-width="1"/>` + '</g>';
  // on its side: 154 x 111 with bleed, 2 columns x 2 rows
  s += sheet(c, css, P, 'a', 96, 214, 2, 2, 154, 111, 7);
  const block = (x, b, id, at, hot) => `<g style="animation:${show(css, P, id, at)}">` + text(c, x, 232, b.title, { size: 11, fill: C.fg, weight: 500 }) + text(c, x, 252, b.l1, { size: 10, fill: C.fg70 }) + text(c, x, 298, b.big, { size: 22, fill: hot ? C.accent : C.fg }) + text(c, x, 330, b.l2, { size: 10.5, fill: C.fg }) + text(c, x, 350, b.l3, { size: 9, font: 'mono', fill: C.fg55 }) + '</g>';
  s += block(386, t.a, 'ta', 14, false);
  // upright: 111 x 154 with bleed, 3 columns x 2 rows
  s += sheet(c, css, P, 'b', 626, 214, 3, 2, 111, 154, 20);
  s += block(916, t.b, 'tb', 30, true);
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bd', 36)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 40);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    quantite: {
      sep: ' ',
      title: 'Offset ou numérique : le prix dépend de la quantité',
      alt: 'Le coût total d’un même flyer selon la quantité, en offset (12 000 dinars de frais fixes puis 6 par exemplaire) et en numérique (1 500 dinars de frais fixes puis 14 par exemplaire). Les deux droites se croisent vers 1 313 exemplaires : en dessous, le numérique coûte moins ; au-dessus, l’offset. À 3 000 exemplaires, 30 000 dinars en offset contre 43 500 en numérique.',
      header: 'Exemple construit · un même flyer chiffré dans les deux procédés, selon la quantité commandée',
      legend: ['offset : 12 000 DA de frais fixes, puis 6 DA par exemplaire', 'numérique : 1 500 DA de frais fixes, puis 14 DA par exemplaire'],
      axis: 'exemplaires', equal: 'égalité : 1 313 exemplaires',
      zoneL: 'en dessous : le numérique coûte moins', zoneR: 'au-dessus : l’offset coûte moins',
      band: 'Les frais fixes de l’offset (plaques, réglages de la presse) se répartissent sur la quantité : sous 1 313 exemplaires le numérique coûte moins, au-dessus l’offset.',
      tiles: [
        { big: '500 ex.', l1: 'numérique 17 DA l’unité, offset 30', l2: '8 500 contre 15 000 au total' },
        { big: '1 313 ex.', l1: 'le point d’égalité', l2: '(12 000 − 1 500) ÷ (14 − 6)', hot: true },
        { big: '3 000 ex.', l1: 'offset 10 DA l’unité, numérique 14,5', l2: '30 000 contre 43 500 au total' },
      ],
      line1: 'Le même devis demandé en trois quantités donne trois prix à l’unité : c’est le calcul qui choisit le procédé, pas l’habitude.',
      line2: 'Un devis fait de mémoire applique le prix de 1 000 exemplaires à 300 : on y perd la commande, ou la marge.',
      note: 'Exemple construit · montants fictifs en dinars, à remplacer par vos coûts ; un flyer, une seule finition.',
    },
    pose: {
      title: 'Le même flyer sur la même feuille : 4 poses ou 6',
      alt: 'Le même flyer A6, de 111 sur 154 millimètres avec son fond perdu, posé sur la même feuille de 320 sur 450 millimètres. Couché, il tient 4 fois, soit 750 feuilles pour 3 000 exemplaires ; debout, il tient 6 fois, soit 500 feuilles.',
      header: 'Exemple construit · 3 000 flyers A6 sur une feuille de 320 × 450 mm, dans les deux sens',
      legend: 'feuille de 320 × 450 mm · en pointillé : la zone utile et le fond perdu de chaque pose',
      a: { title: 'Flyer couché', l1: '2 colonnes × 2 rangées', big: '4 poses', l2: '750 feuilles pour 3 000', l3: 'avec 40 feuilles de passe : 790' },
      b: { title: 'Flyer debout', l1: '3 colonnes × 2 rangées', big: '6 poses', l2: '500 feuilles pour 3 000', l3: 'avec 40 feuilles de passe : 540' },
      band: 'Le même flyer A6 sur la même feuille : couché, il tient 4 fois ; debout, 6 fois. Le logiciel essaie les deux sens avant de chiffrer le papier.',
      tiles: [
        { big: '4 poses', l1: 'flyer couché sur la feuille', l2: '750 feuilles pour 3 000 exemplaires' },
        { big: '6 poses', l1: 'le même flyer, debout', l2: '500 feuilles pour 3 000 exemplaires', hot: true },
        { big: '−250 feuilles', l1: 'un tiers de papier en moins', l2: 'sur une seule commande' },
      ],
      line1: 'L’imposition est ce calcul : combien de poses par feuille, donc combien de feuilles, de passages en machine et de coupes.',
      line2: 'Un devis qui compte le papier « à peu près » se trompe d’un tiers dans cet exemple, avant même la passe.',
      note: 'Exemple construit · zone utile de 310 × 440 mm, fond perdu de 3 mm ; montage simple, sans pose mixte.',
    },
  },
  en: {
    quantite: {
      sep: ',',
      title: 'Offset or digital: the price depends on the quantity',
      alt: 'The total cost of the same flyer by quantity, in offset (12,000 dinars of fixed costs then 6 per copy) and in digital (1,500 dinars of fixed costs then 14 per copy). The two lines cross at about 1,313 copies: below, digital costs less; above, offset. At 3,000 copies, 30,000 dinars in offset against 43,500 in digital.',
      header: 'Constructed example · the same flyer costed in both processes, by quantity ordered',
      legend: ['offset: DA 12,000 of fixed costs, then DA 6 per copy', 'digital: DA 1,500 of fixed costs, then DA 14 per copy'],
      axis: 'copies', equal: 'break-even: 1,313 copies',
      zoneL: 'below: digital costs less', zoneR: 'above: offset costs less',
      band: 'Offset’s fixed costs (plates, press set-up) are spread over the quantity: under 1,313 copies digital costs less, above it offset does.',
      tiles: [
        { big: '500 copies', l1: 'digital DA 17 each, offset 30', l2: '8,500 against 15,000 in total' },
        { big: '1,313 copies', l1: 'the break-even point', l2: '(12,000 − 1,500) ÷ (14 − 6)', hot: true },
        { big: '3,000 copies', l1: 'offset DA 10 each, digital 14.5', l2: '30,000 against 43,500 in total' },
      ],
      line1: 'The same quote asked for in three quantities gives three unit prices: the calculation chooses the process, not habit.',
      line2: 'A quote made from memory applies the price of 1,000 copies to 300: you lose either the order or the margin.',
      note: 'Constructed example · fictitious amounts in dinars, to be replaced by your costs; one flyer, one finish.',
    },
    pose: {
      title: 'The same flyer on the same sheet: 4-up or 6-up',
      alt: 'The same A6 flyer, 111 by 154 millimetres with its bleed, laid out on the same 320 by 450 millimetre sheet. On its side it fits 4 times, that is 750 sheets for 3,000 copies; upright it fits 6 times, that is 500 sheets.',
      header: 'Constructed example · 3,000 A6 flyers on a 320 × 450 mm sheet, in both directions',
      legend: '320 × 450 mm sheet · dotted: the usable area and each flyer’s bleed',
      a: { title: 'Flyer on its side', l1: '2 columns × 2 rows', big: '4-up', l2: '750 sheets for 3,000', l3: 'with 40 set-up sheets: 790' },
      b: { title: 'Flyer upright', l1: '3 columns × 2 rows', big: '6-up', l2: '500 sheets for 3,000', l3: 'with 40 set-up sheets: 540' },
      band: 'The same A6 flyer on the same sheet: on its side it fits 4 times; upright, 6 times. The software tries both directions before costing the paper.',
      tiles: [
        { big: '4-up', l1: 'flyer on its side on the sheet', l2: '750 sheets for 3,000 copies' },
        { big: '6-up', l1: 'the same flyer, upright', l2: '500 sheets for 3,000 copies', hot: true },
        { big: '−250 sheets', l1: 'a third less paper', l2: 'on a single order' },
      ],
      line1: 'Imposition is this calculation: how many flyers per sheet, hence how many sheets, press passes and cuts.',
      line2: 'A quote that counts paper “roughly” is wrong by a third in this example, even before set-up waste.',
      note: 'Constructed example · usable area 310 × 440 mm, 3 mm bleed; simple layout, no mixed orientation.',
    },
  },
  ar: {
    quantite: {
      sep: ' ',
      title: 'أوفست أم رقمي: السعر يتوقف على الكمية',
      alt: 'الكلفة الإجمالية للمطوية نفسها حسب الكمية، بالأوفست (12 ألف دينار مصاريف ثابتة ثم 6 للنسخة) وبالرقمي (1500 دينار مصاريف ثابتة ثم 14 للنسخة). الخطان يتقاطعان قرب 1313 نسخة: تحتها، الرقمي يكلّف أقل؛ وفوقها، الأوفست. وعند 3000 نسخة، 30 ألف دينار بالأوفست مقابل 43500 بالرقمي.',
      header: 'مثال مركَّب · المطوية نفسها مسعَّرة بالطريقتين، حسب الكمية المطلوبة',
      legend: ['الأوفست: ⁦12 000⁩ دج مصاريف ثابتة، ثم 6 دج للنسخة', 'الرقمي: ⁦1 500⁩ دج مصاريف ثابتة، ثم 14 دج للنسخة'],
      axis: 'النسخ', equal: 'التعادل: ⁦1 313⁩ نسخة',
      zoneL: 'تحتها: الرقمي يكلّف أقل', zoneR: 'فوقها: الأوفست يكلّف أقل',
      band: 'المصاريف الثابتة للأوفست (الألواح، ضبط الآلة) تتوزع على الكمية: تحت ⁦1 313⁩ نسخة الرقمي يكلّف أقل، وفوقها الأوفست.',
      tiles: [
        { big: '500 نسخة', l1: 'الرقمي 17 دج للنسخة، والأوفست 30', l2: '⁦8 500⁩ مقابل ⁦15 000⁩ في المجموع' },
        { big: '⁦1 313⁩ نسخة', l1: 'نقطة التعادل', l2: '⁦(12 000 − 1 500) ÷ (14 − 6)⁩', hot: true },
        { big: '⁦3 000⁩ نسخة', l1: 'الأوفست 10 دج للنسخة، والرقمي ⁦14,5⁩', l2: '⁦30 000⁩ مقابل ⁦43 500⁩ في المجموع' },
      ],
      line1: 'عرض السعر نفسه بثلاث كميات يعطي ثلاثة أسعار للنسخة: الحساب هو الذي يختار الطريقة، لا العادة.',
      line2: 'عرض سعر يُعدّ من الذاكرة يطبّق سعر 1000 نسخة على 300: فتضيع الطلبية، أو الهامش.',
      note: 'مثال مركَّب · مبالغ خيالية بالدينار، تُعوَّض بتكاليفكم؛ مطوية واحدة، وتشطيب واحد.',
    },
    pose: {
      title: 'المطوية نفسها على الورقة نفسها: 4 نسخ أو 6',
      alt: 'المطوية نفسها من قياس A6، 111 في 154 ملم مع هامش القص، موضوعة على الورقة نفسها من 320 في 450 ملم. مستلقية، تدخل 4 مرات، أي 750 ورقة لـ3000 نسخة؛ وواقفة، تدخل 6 مرات، أي 500 ورقة.',
      header: 'مثال مركَّب · 3000 مطوية على ورقة من ⁦320 × 450⁩ ملم، في الاتجاهين',
      legend: 'ورقة من ⁦320 × 450⁩ ملم · بالتنقيط: المساحة النافعة وهامش القص لكل نسخة',
      a: { title: 'المطوية مستلقية', l1: 'عمودان في صفّين', big: '4 نسخ', l2: '750 ورقة لـ3000 نسخة', l3: 'مع 40 ورقة ضبط: 790' },
      b: { title: 'المطوية واقفة', l1: '3 أعمدة في صفّين', big: '6 نسخ', l2: '500 ورقة لـ3000 نسخة', l3: 'مع 40 ورقة ضبط: 540' },
      band: 'المطوية نفسها على الورقة نفسها: مستلقية، تدخل 4 مرات؛ وواقفة، 6 مرات. والبرنامج يجرّب الاتجاهين قبل حساب الورق.',
      tiles: [
        { big: '4 نسخ في الورقة', l1: 'المطوية مستلقية على الورقة', l2: '750 ورقة لـ3000 نسخة' },
        { big: '6 نسخ في الورقة', l1: 'المطوية نفسها، واقفة', l2: '500 ورقة لـ3000 نسخة', hot: true },
        { big: '⁦−250⁩ ورقة', l1: 'ثلث الورق أقل', l2: 'في طلبية واحدة' },
      ],
      line1: 'التوضيب على الورقة هو هذا الحساب: كم نسخة في الورقة، إذن كم ورقة، كم مروراً في الآلة، وكم قصّة.',
      line2: 'عرض سعر يحسب الورق «تقريباً» يخطئ بالثلث في هذا المثال، حتى قبل أوراق الضبط.',
      note: 'مثال مركَّب · مساحة نافعة من ⁦310 × 440⁩ ملم، وهامش قص من 3 ملم؛ توضيب بسيط، دون خلط الاتجاهين.',
    },
  },
};
