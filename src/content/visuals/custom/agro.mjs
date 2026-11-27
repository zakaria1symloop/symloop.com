// Bespoke animated figures for the 2027 "logiciel agroalimentaire" page.
//  genealogie(): one raw-material lot traced forward. The lot feeds three
//                production lots; each has its pallets, some shipped and some
//                still in stock; the shipped ones went to five customers. Six
//                pallets are blocked in stock, eight are at customers.
//  bilan():      the mass balance of one production lot (1 000 kg in: 912 kg of
//                conforming product, 50 kg of loss planned by the recipe, 22 kg
//                of declared scrap, 16 kg unexplained), then the yield of six
//                successive lots on the same line, drifting from 93.1 % to 89.6 %.
// Lot codes and numbers are drawn in their own text elements, direction="ltr".
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, open, heading, esc } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function pop(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scale(0)}${(at + 1.2).toFixed(1)}%,100%{transform:scale(1)}}`); return `transform-box:fill-box;transform-origin:center;animation:${P}-${id} ${LOOP}s linear infinite`; }
function growX(css, P, id, at, dur, rtl) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'} center;animation:${P}-${id} ${LOOP}s linear infinite`; }
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
const code = (c, x, w, y, str, o = {}) => ltrSpans(c.RX(x, w) + 14, y, [[str, o.fill || C.fg, true]], o.size || 12, 'start');
const hline = (c, x1, x2, y, color, dash, sw) => `<polyline points="${c.X(x1)},${y} ${c.X(x2)},${y}" fill="none" stroke="${color}" stroke-width="${sw || 1}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
function link(c, css, P, id, at, x1, y1, x2, y2, color) {
  const len = Math.hypot(x2 - x1, y2 - y1);
  return `<polyline points="${c.X(x1)},${y1} ${c.X(x2)},${y2}" fill="none" stroke="${color || C.fg70}" stroke-width="1.5" stroke-dasharray="${len.toFixed(0)}" style="animation:${drawLine(css, P, id, at, 1.5, len)}"/>`;
}

// production lots fed by the raw lot: [code, pallets, shipped]
const PROD = [['PF-118', 5, 4], ['PF-119', 5, 3], ['PF-121', 4, 1]];

export function genealogie(t, rtl) {
  const c = ctx(rtl); const P = 'gn'; const css = []; const H = 686;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const head = (x, str) => text(c, x, 172, str, { size: 8.5, font: 'mono', fill: C.fg55 });
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + head(96, t.colRaw) + head(380, t.colProd) + head(640, t.colPal) + head(892, t.colCli) + '</g>';
  // the raw-material lot
  s += `<g style="${pop(css, P, 'rw', 5)}">` + rect(c, 96, 244, 200, 74, { stroke: C.accent, fill: TINT }) + code(c, 96, 200, 270, 'MP-0412', { fill: C.accent, size: 13 }) + text(c, 110, 290, t.rawName, { size: 10, fill: C.fg }) + text(c, 110, 306, t.rawQty, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>';
  PROD.forEach(([cd, pal, shipped], i) => {
    const y = 196 + i * 66; const at = 9 + i * 5;
    s += link(c, css, P, `a${i}`, at, 296, 281, 380, y + 25, C.accent);
    s += `<g style="${pop(css, P, `p${i}`, at + 1.5)}">` + rect(c, 380, y, 200, 50, { stroke: C.fg70, fill: C.fill }) + code(c, 380, 200, y + 22, cd) + text(c, 394, y + 39, t.used[i], { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>';
    s += link(c, css, P, `b${i}`, at + 3, 580, y + 25, 634, y + 25, C.fg70);
    for (let k = 0; k < pal; k++) {
      const out = k < shipped;
      s += `<g style="${pop(css, P, `q${i}${k}`, 24 + i * 3 + k * 0.5)}">` + rect(c, 640 + k * 24, y + 17, 16, 16, { stroke: out ? C.fg : C.accent, fill: out ? C.fg : TINT }) + '</g>';
    }
    s += link(c, css, P, `c${i}`, 34 + i * 2, 640 + pal * 24 + 2, y + 25, 880, y + 25, C.fg55);
    s += `<g style="animation:${show(css, P, `l${i}`, 35 + i * 2)}">` + text(c, 892, y + 29, t.clients[i], { size: 10.5, fill: C.fg }) + '</g>';
  });
  s += `<g style="${pop(css, P, 's1', 42)}">` + rect(c, 96, 392, 478, 44, { stroke: C.accent, fill: C.accent }) + text(c, 108, 410, t.stockTop, { size: 10.5, fill: '#000', weight: 500 }) + text(c, 108, 426, t.stockSub, { size: 9, font: 'mono', fill: '#000' }) + '</g>';
  s += `<g style="${pop(css, P, 's2', 45)}">` + rect(c, 626, 392, 478, 44, { stroke: C.fg, fill: C.fill }) + text(c, 638, 410, t.shipTop, { size: 10.5, fill: C.fg, weight: 500 }) + text(c, 638, 426, t.shipSub, { size: 9, font: 'mono', fill: C.fg70 }) + '</g>';
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bd', 50)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 54);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// one production lot, 1 000 kg in: conforming, loss planned by the recipe, declared scrap, unexplained
const LOT = [912, 50, 22, 16];
const YIELDS = [93.1, 92.8, 92.1, 91.2, 90.3, 89.6];
const CODES = ['PF-116', 'PF-117', 'PF-118', 'PF-119', 'PF-120', 'PF-121'];
const STD = 93;
const YX = (i) => 360 + i * 136;
const YV = (v) => 330 + (STD - v) * 18;

export function bilan(t, rtl) {
  const c = ctx(rtl); const P = 'bl'; const css = []; const H = 686; const dec = t.dec; const pc = t.pc;
  const f1 = (v) => v.toFixed(1).replace('.', dec) + pc;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + text(c, 96, 172, t.barTitle, { size: 11, fill: C.fg, weight: 500 }) + hline(c, 96, 1104, 280, C.line2) + text(c, 96, 304, t.trendTitle, { size: 11, fill: C.fg, weight: 500 })
    + hline(c, 320, 1080, YV(STD), C.fg55, '4 4') + text(c, 96, YV(STD) + 4, t.std, { size: 9.5, fill: C.fg70 }) + '</g>';
  const fills = [[C.fg, C.fg], [C.fg55, C.fg35], [C.fg70, C.fg55], [C.accent, C.accent]];
  let x = 96;
  LOT.forEach((v, i) => {
    const w = v * 1.008; const at = 5 + i * 4;
    s += `<g style="${growX(css, P, `s${i}`, at, 2.5, rtl)}">` + rect(c, x, 186, w, 30, { stroke: fills[i][0], fill: fills[i][1] }) + '</g>';
    const lx = 96 + i * 256;
    s += `<g style="animation:${show(css, P, `g${i}`, at + 1.5)}">` + rect(c, lx, 236, 12, 12, { stroke: fills[i][0], fill: fills[i][1] }) + text(c, lx + 20, 246, t.parts[i], { size: 10, fill: i === 3 ? C.accent : C.fg70, weight: i === 3 ? 500 : 300 }) + num(c, lx + 216, 246, String(v), { size: 11.5, bold: true, fill: i === 3 ? C.accent : C.fg }) + '</g>';
    x += w;
  });
  s += `<g style="animation:${show(css, P, 'un', 22)}">` + text(c, 96, 268, t.unit, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>';
  // the yield of six successive lots on the same line
  const pts = YIELDS.map((v, i) => [c.X(YX(i)), YV(v)]);
  let len = 0; for (let i = 1; i < pts.length; i++) len += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]);
  s += `<polyline points="${pts.map((p) => `${p[0]},${p[1].toFixed(1)}`).join(' ')}" fill="none" stroke="${C.fg70}" stroke-width="2" stroke-dasharray="${len.toFixed(0)}" style="animation:${drawLine(css, P, 'ln', 28, 10, len)}"/>`;
  YIELDS.forEach((v, i) => {
    const low = v < 92; const at = 28 + i * 2;
    s += `<g style="${pop(css, P, `d${i}`, at)}"><circle cx="${pts[i][0]}" cy="${pts[i][1].toFixed(1)}" r="5" fill="${low ? C.accent : C.fg}"/>` + num(c, YX(i), v >= STD ? YV(v) - 12 : YV(v) + 21, f1(v), { size: 11, bold: true, fill: low ? C.accent : C.fg }) + '</g>';
    s += `<g style="animation:${show(css, P, `c${i}`, at)}">` + num(c, YX(i), 438, CODES[i], { size: 9.5, fill: i === 3 ? C.fg : C.fg55, bold: i === 3 }) + '</g>';
  });
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
    genealogie: {
      title: 'Un lot de matière douteux : où est-il passé ?',
      alt: 'Un lot de matière première, MP-0412, est entré dans trois lots de production : PF-118, PF-119 et PF-121. Ces trois lots font quatorze palettes. Six sont encore en stock et sont bloquées ; huit ont été expédiées chez cinq clients, dont la liste et les dates de livraison sont connues.',
      header: 'Exemple construit · une conserverie · un fournisseur signale un défaut sur un lot de concentré de tomate',
      colRaw: 'lot de matière', colProd: 'lots de production', colPal: 'palettes · pleine : expédiée, cadre : en stock', colCli: 'clients livrés',
      rawName: 'concentré de tomate', rawQty: '2 400 kg reçus',
      used: ['1 000 kg de ce lot', '900 kg de ce lot', '500 kg de ce lot'],
      clients: ['clients A, B et C', 'clients C et D', 'client E'],
      stockTop: '6 palettes encore en stock', stockSub: 'bloquées d’un geste, avant qu’elles ne partent',
      shipTop: '8 palettes chez 5 clients', shipSub: 'la liste, les quantités, les dates de livraison',
      band: 'Un lot de matière douteux : en un écran, les lots de production qui l’ont reçu, leurs palettes, ce qui est encore là et ce qui est parti.',
      tiles: [
        { big: '1 lot de matière', l1: 'entré dans 3 lots de production', l2: '2 400 kg, sur trois jours de fabrication' },
        { big: '6 palettes', l1: 'encore en stock : bloquées', l2: 'avant qu’elles ne partent', hot: true },
        { big: '5 clients', l1: 'ont reçu les 8 autres palettes', l2: 'et pas « tous les clients du mois »' },
      ],
      line1: 'La même lecture se fait à l’envers : un bocal rendu par un client donne son lot, puis les matières, la ligne, l’équipe, les contrôles.',
      line2: 'Sans cette généalogie, le rappel couvre tout ce qui est sorti ce mois-là ; avec elle, il couvre huit palettes.',
      note: 'Exemple construit · numéros de lots, quantités et clients fictifs.',
    },
    bilan: {
      dec: ',', pc: ' %',
      title: 'Le bilan matière d’un lot, et le rendement qui glisse',
      alt: 'Le bilan matière du lot PF-119 : sur 1 000 kg de matière entrés, 912 kg de produit conforme, 50 kg de freinte prévue par la recette, 22 kg de rebuts déclarés et 16 kg d’écart inexpliqué. Dessous, le rendement de six lots successifs sur la même ligne : 93,1 %, 92,8 %, 92,1 %, 91,2 %, 90,3 % et 89,6 %, pour un standard de 93 %.',
      header: 'Exemple construit · ligne 2 · ce qui entre dans un lot, ce qui en sort, puis six lots à la suite',
      barTitle: 'Lot PF-119 : 1 000 kg de matière entrés', trendTitle: 'Rendement de six lots successifs, ligne 2',
      parts: ['produit conforme', 'freinte prévue par la recette', 'rebuts déclarés', 'écart inexpliqué'],
      unit: 'en kilogrammes', std: 'standard de la recette : 93 %',
      band: 'Ce qui entre doit ressortir : en produit, en freinte prévue, en rebuts déclarés. Le reste est un écart, et il se suit lot après lot.',
      tiles: [
        { big: '91,2 %', l1: 'rendement du lot PF-119', l2: 'standard de la recette : 93 %' },
        { big: '16 kg', l1: 'd’écart inexpliqué sur 1 000 kg', l2: 'ni freinte prévue, ni rebut déclaré', hot: true },
        { big: '−3,5 points', l1: 'en six lots sur la même ligne', l2: 'de 93,1 % à 89,6 %' },
      ],
      line1: 'Un seul lot à 91 % ne dit rien ; six lots qui descendent sur la même ligne disent où regarder : un réglage, une balance, une matière.',
      line2: 'Un point de rendement sur une tonne, ce sont dix kilos de matière payée qui ne deviennent pas du produit.',
      note: 'Exemple construit · quantités et rendements fictifs ; la freinte prévue vient de la recette.',
    },
  },
  en: {
    genealogie: {
      title: 'A doubtful lot of raw material: where did it go?',
      alt: 'One lot of raw material, MP-0412, went into three production lots: PF-118, PF-119 and PF-121. Those three lots make fourteen pallets. Six are still in stock and are blocked; eight were shipped to five customers, whose list and delivery dates are known.',
      header: 'Constructed example · a cannery · a supplier reports a defect on one lot of tomato concentrate',
      colRaw: 'raw-material lot', colProd: 'production lots', colPal: 'pallets · solid: shipped, outline: in stock', colCli: 'customers delivered',
      rawName: 'tomato concentrate', rawQty: '2,400 kg received',
      used: ['1,000 kg of this lot', '900 kg of this lot', '500 kg of this lot'],
      clients: ['customers A, B and C', 'customers C and D', 'customer E'],
      stockTop: '6 pallets still in stock', stockSub: 'blocked in one gesture, before they leave',
      shipTop: '8 pallets at 5 customers', shipSub: 'the list, the quantities, the delivery dates',
      band: 'A doubtful lot of raw material: on one screen, the production lots that received it, their pallets, what is still there and what has left.',
      tiles: [
        { big: '1 raw lot', l1: 'went into 3 production lots', l2: '2,400 kg, over three days of production' },
        { big: '6 pallets', l1: 'still in stock: blocked', l2: 'before they leave', hot: true },
        { big: '5 customers', l1: 'received the other 8 pallets', l2: 'and not “every customer of the month”' },
      ],
      line1: 'The same reading works backwards: a jar returned by a customer gives its lot, then the materials, the line, the shift, the checks.',
      line2: 'Without this genealogy, the recall covers everything that left that month; with it, it covers eight pallets.',
      note: 'Constructed example · fictitious lot numbers, quantities and customers.',
    },
    bilan: {
      dec: '.', pc: '%',
      title: 'One lot’s mass balance, and the yield that slides',
      alt: 'The mass balance of lot PF-119: out of 1,000 kg of material in, 912 kg of conforming product, 50 kg of loss planned by the recipe, 22 kg of declared scrap and 16 kg unexplained. Below, the yield of six successive lots on the same line: 93.1%, 92.8%, 92.1%, 91.2%, 90.3% and 89.6%, against a standard of 93%.',
      header: 'Constructed example · line 2 · what goes into a lot, what comes out, then six lots in a row',
      barTitle: 'Lot PF-119: 1,000 kg of material in', trendTitle: 'Yield of six successive lots, line 2',
      parts: ['conforming product', 'loss planned by the recipe', 'declared scrap', 'unexplained gap'],
      unit: 'in kilograms', std: 'recipe standard: 93%',
      band: 'What goes in must come out: as product, as planned loss, as declared scrap. The rest is a gap, and it is followed lot after lot.',
      tiles: [
        { big: '91.2%', l1: 'yield of lot PF-119', l2: 'recipe standard: 93%' },
        { big: '16 kg', l1: 'unexplained out of 1,000 kg', l2: 'neither planned loss nor declared scrap', hot: true },
        { big: '−3.5 points', l1: 'in six lots on the same line', l2: 'from 93.1% to 89.6%' },
      ],
      line1: 'A single lot at 91% says nothing; six lots going down on the same line say where to look: a setting, a scale, a material.',
      line2: 'One point of yield on a tonne is ten kilos of paid-for material that do not become product.',
      note: 'Constructed example · fictitious quantities and yields; the planned loss comes from the recipe.',
    },
  },
  ar: {
    genealogie: {
      title: 'حصة مادة أولية مشكوك فيها: أين ذهبت؟',
      alt: 'حصة من المادة الأولية دخلت في ثلاث حصص إنتاج. وهذه الحصص الثلاث تعطي أربع عشرة منصّة. ست منها ما زالت في المخزون وهي محجوزة؛ وثماني أُرسلت إلى خمسة زبائن، قائمتهم وتواريخ تسليمهم معروفة.',
      header: 'مثال مركَّب · مصنع مصبَّرات · مورّد يبلّغ عن عيب في حصة من معجون الطماطم',
      colRaw: 'حصة المادة الأولية', colProd: 'حصص الإنتاج', colPal: 'المنصّات · الممتلئة: مُرسَلة، والإطار: في المخزون', colCli: 'الزبائن المسلَّم لهم',
      rawName: 'معجون الطماطم', rawQty: 'استُلم ⁦2 400⁩ كلغ',
      used: ['⁦1 000⁩ كلغ من هذه الحصة', '900 كلغ من هذه الحصة', '500 كلغ من هذه الحصة'],
      clients: ['الزبائن أ، ب، ج', 'الزبونان ج، د', 'الزبون هـ'],
      stockTop: '6 منصّات ما زالت في المخزون', stockSub: 'تُحجز بحركة واحدة، قبل أن تغادر',
      shipTop: '8 منصّات عند 5 زبائن', shipSub: 'القائمة، الكميات، وتواريخ التسليم',
      band: 'حصة مادة أولية مشكوك فيها: في شاشة واحدة، حصص الإنتاج التي تلقّتها، منصّاتها، ما بقي هنا وما غادر.',
      tiles: [
        { big: 'حصة واحدة', l1: 'دخلت في 3 حصص إنتاج', l2: '⁦2 400⁩ كلغ، على ثلاثة أيام تصنيع' },
        { big: '6 منصّات', l1: 'ما زالت في المخزون: محجوزة', l2: 'قبل أن تغادر', hot: true },
        { big: '5 زبائن', l1: 'تلقّوا المنصّات الثماني الأخرى', l2: 'لا «كل زبائن الشهر»' },
      ],
      line1: 'والقراءة نفسها تُجرى بالعكس: قارورة يعيدها زبون تعطي حصتها، ثم المواد، الخط، الفرقة، والمراقبات.',
      line2: 'دون هذا النسب، يشمل السحب كل ما خرج ذلك الشهر؛ ومعه، يشمل ثماني منصّات.',
      note: 'مثال مركَّب · أرقام حصص وكميات وزبائن خيالية.',
    },
    bilan: {
      dec: ',', pc: ' %',
      title: 'حصيلة المادة لحصة واحدة، والمردود الذي ينزلق',
      alt: 'حصيلة المادة لحصة إنتاج: من 1000 كلغ من المادة الداخلة، 912 كلغ من المنتوج المطابق، 50 كلغ من الفاقد المتوقَّع في الوصفة، 22 كلغ من المرفوضات المصرَّح بها، و16 كلغ من فارق دون تفسير. وتحتها، مردود ست حصص متتالية على الخط نفسه: من 93,1 بالمئة إلى 89,6 بالمئة، مقابل معيار 93 بالمئة.',
      header: 'مثال مركَّب · الخط 2 · ما يدخل في حصة، ما يخرج منها، ثم ست حصص متتالية',
      barTitle: 'حصة إنتاج واحدة: ⁦1 000⁩ كلغ من المادة الداخلة', trendTitle: 'مردود ست حصص متتالية، الخط 2',
      parts: ['المنتوج المطابق', 'الفاقد المتوقَّع في الوصفة', 'المرفوضات المصرَّح بها', 'فارق دون تفسير'],
      unit: 'بالكيلوغرام', std: 'معيار الوصفة: ⁦93 %⁩',
      band: 'ما يدخل يجب أن يخرج: منتوجاً، فاقداً متوقَّعاً، أو مرفوضات مصرَّحاً بها. والباقي فارق، يُتابَع حصة بعد حصة.',
      tiles: [
        { big: '⁦91,2 %⁩', l1: 'مردود الحصة', l2: 'معيار الوصفة: ⁦93 %⁩' },
        { big: '16 كلغ', l1: 'فارق دون تفسير من ⁦1 000⁩ كلغ', l2: 'لا فاقد متوقَّع ولا مرفوضات مصرَّح بها', hot: true },
        { big: '⁦−3,5⁩ نقطة', l1: 'في ست حصص على الخط نفسه', l2: 'من ⁦93,1 %⁩ إلى ⁦89,6 %⁩' },
      ],
      line1: 'حصة واحدة عند 91 بالمئة لا تقول شيئاً؛ وست حصص تنزل على الخط نفسه تقول أين يُنظر: ضبط، ميزان، أو مادة.',
      line2: 'نقطة مردود واحدة على طن تعني عشرة كيلوغرامات من مادة مدفوعة لا تصير منتوجاً.',
      note: 'مثال مركَّب · كميات ومردودات خيالية؛ والفاقد المتوقَّع يأتي من الوصفة.',
    },
  },
};
