// Bespoke animated figures for the 2027 "logiciel pour entreprise de bâtiment"
// post.
//  courbe():  one site followed week by week with three curves that draw
//             themselves: what was planned (dashed), the work done valued at
//             budget prices, and what was actually spent, up to "today"; the
//             spending is then projected to the end and meets the contract
//             price line; three tiles.
//  ouvrage(): the price of one item of work built up as a stacked bar whose
//             segments grow one after another (materials, labour, equipment,
//             site costs, overheads, margin), then the same bar when the
//             mason lays six square metres a day instead of eight: the margin
//             segment shrinks; three tiles.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function growX(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function drawLine(css, P, id, at, dur, len) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{stroke-dashoffset:${len.toFixed(0)}}${(at + dur).toFixed(1)}%,100%{stroke-dashoffset:0}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
const I = (x) => `⁦${x}⁩`;
const TINT = 'rgba(242,181,68,0.06)';

function tiles(c, css, P, ky, ts, at0) {
  let s = '';
  ts.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, at0 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? TINT : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  return s;
}
const motionOff = (P) => `@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"],svg rect[style*="${P}-"],svg polyline[style*="${P}-"]{animation:none !important}}`;

// The constructed site: cost budget 9.0 M, contract price 10.2 M, 20 weeks,
// read at week 9. Curves follow a smooth S shape.
const S = (x) => 3 * x * x - 2 * x * x * x;
const BUDGET = 9.0, PRICE = 10.2, WEEKS = 20, NOW = 9, EV = 3.6, AC = 4.1;
const EAC = BUDGET / (EV / AC);
const PV_NOW = BUDGET * S(NOW / WEEKS);

export function courbe(t, rtl) {
  const c = ctx(rtl); const P = 'bc'; const css = []; const H = 622;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const px0 = 150, px1 = 1040, py0 = 420, py1 = 156; const X = (w) => px0 + (w / WEEKS) * (px1 - px0); const Y = (m) => py0 - (m / 11) * (py0 - py1);
  // axes
  s += `<g style="animation:${show(css, P, 'ax', 3)}">` + [0, 2, 4, 6, 8, 10].map((m) => line(c, px0, Y(m), px1, Y(m), { stroke: C.line }) + text(c, px0 - 10, Y(m) + 3, t.mil(m), { size: 8.5, font: 'mono', fill: C.fg35, anchor: 'end' })).join('')
    + [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20].map((w) => text(c, X(w), py0 + 16, String(w), { size: 8.5, font: 'mono', fill: C.fg35, anchor: 'middle' })).join('') + text(c, px1, py0 + 32, t.weeks, { size: 8.5, font: 'mono', fill: C.fg35, anchor: 'end' }) + '</g>';
  const pts = (fn, a, b) => { const out = []; let len = 0; let prev = null; for (let w = a; w <= b + 0.001; w += 0.5) { const p = [c.X(X(w)), Y(fn(w))]; if (prev) len += Math.hypot(p[0] - prev[0], p[1] - prev[1]); prev = p; out.push(`${p[0].toFixed(1)},${p[1].toFixed(1)}`); } return { d: out.join(' '), len }; };
  const fPV = (w) => BUDGET * S(w / WEEKS);
  const fEV = (w) => EV * S(w / WEEKS) / S(NOW / WEEKS);
  const fAC = (w) => AC * S(w / WEEKS) / S(NOW / WEEKS);
  const fPR = (w) => AC + (EAC - AC) * (S(w / WEEKS) - S(NOW / WEEKS)) / (1 - S(NOW / WEEKS));
  // price and budget levels
  s += `<g style="animation:${show(css, P, 'lv', 5)}">` + line(c, px0, Y(PRICE), px1, Y(PRICE), { stroke: C.fg, dash: '2 5' }) + text(c, px0 + 8, Y(PRICE) - 7, t.price, { size: 9.5, fill: C.fg, weight: 500 })
    + line(c, px0, Y(BUDGET), px1, Y(BUDGET), { stroke: C.fg55, dash: '2 5' }) + text(c, px0 + 8, Y(BUDGET) + 15, t.budget, { size: 9.5, fill: C.fg70 }) + '</g>';
  // planned curve (dashed, fades in)
  const pv = pts(fPV, 0, WEEKS);
  s += `<g style="animation:${show(css, P, 'pv', 7)}"><polyline points="${pv.d}" fill="none" stroke="${C.fg55}" stroke-width="1.5" stroke-dasharray="6 5"/></g>`;
  // today
  s += `<g style="animation:${show(css, P, 'now', 9)}">` + line(c, X(NOW), py1 - 4, X(NOW), py0, { stroke: C.line2 }) + text(c, X(NOW), py1 - 10, t.today, { size: 9.5, fill: C.fg70, anchor: 'middle' }) + '</g>';
  // work done and money spent, drawn
  const ev = pts(fEV, 0, NOW); const ac = pts(fAC, 0, NOW);
  s += `<polyline points="${ev.d}" fill="none" stroke="${C.fg}" stroke-width="2.5" stroke-dasharray="${ev.len.toFixed(0)}" style="animation:${drawLine(css, P, 'ev', 10, 4, ev.len)}"/>`;
  s += `<polyline points="${ac.d}" fill="none" stroke="${C.accent}" stroke-width="2.5" stroke-dasharray="${ac.len.toFixed(0)}" style="animation:${drawLine(css, P, 'ac', 14, 4, ac.len)}"/>`;
  // projection of the spending
  const pr = pts(fPR, NOW, WEEKS);
  s += `<g style="animation:${show(css, P, 'pr', 22)}"><polyline points="${pr.d}" fill="none" stroke="${C.accent}" stroke-width="1.5" stroke-dasharray="3 5"/>` + text(c, px1 + 8, Y(EAC) - 1, t.eac1, { size: 9.5, fill: C.accent, weight: 500 }) + text(c, px1 + 8, Y(EAC) + 12, t.eac2, { size: 8.5, font: 'mono', fill: C.accent }) + '</g>';
  // readings at week 9
  const lx = px0 + 24, ly = Y(8) + 16;
  s += `<g style="animation:${show(css, P, 'rd', 19)}">` + rect(c, lx - 12, ly - 16, 250, 78, { stroke: C.line2, fill: C.fill })
    + t.read.map((r, i) => { const yy = ly + 6 + i * 22; const col = [C.accent, C.fg55, C.fg][i]; return line(c, lx, yy - 4, lx + 28, yy - 4, { stroke: col, sw: i === 1 ? 1.5 : 2.5, dash: i === 1 ? '6 5' : '' }) + text(c, lx + 40, yy, r, { size: 10, font: 'mono', fill: col, weight: i === 1 ? 300 : 500 }); }).join('')
    + [[AC, C.accent], [PV_NOW, C.fg55], [EV, C.fg]].map(([v, col]) => `<circle cx="${c.X(X(NOW)).toFixed(1)}" cy="${Y(v).toFixed(1)}" r="4" fill="${col}" stroke="#000" stroke-width="1"/>`).join('') + '</g>';
  const ky = py0 + 44;
  s += tiles(c, css, P, ky, t.tiles, 30);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

const PARTS = [1150, 620, 80, 222, 185, 296];
const PARTS6 = [1150, 827, 80, 222, 185, 89];
const FILLS = ['rgba(255,255,255,0.78)', 'rgba(255,255,255,0.52)', 'rgba(255,255,255,0.34)', 'rgba(255,255,255,0.22)', 'rgba(255,255,255,0.13)', C.accent];

export function ouvrage(t, rtl) {
  const c = ctx(rtl); const P = 'bo'; const css = []; const H = 574;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const total = 2553; const scale = 1040 / total;
  const stack = (parts, y, h, id, at0) => { let x = 80; let out = ''; parts.forEach((v, i) => { const w = v * scale; out += `<rect x="${c.RX(x, w).toFixed(1)}" y="${y}" width="${Math.max(1, w - 1.5).toFixed(1)}" height="${h}" fill="${FILLS[i]}" style="transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'};animation:${growX(css, P, `${id}${i}`, at0 + i * 2.2, 1.8)}"/>`; x += w; }); return out; };
  // the price as planned
  s += `<g style="animation:${show(css, P, 't1', 3)}">` + text(c, 80, 152, t.planned, { size: 11, fill: C.fg, weight: 500 }) + '</g>';
  s += stack(PARTS, 162, 34, 'a', 4);
  const dsw = (PARTS[0] + PARTS[1] + PARTS[2]) * scale;
  s += `<g style="animation:${show(css, P, 'br', 11)}">` + line(c, 80, 204, 80 + dsw - 2, 204, { stroke: C.fg55 }) + text(c, 80 + dsw / 2, 219, t.dry, { size: 9.5, font: 'mono', fill: C.fg70, anchor: 'middle' }) + '</g>';
  s += `<g style="animation:${show(css, P, 'br2', 18)}">` + line(c, 80, 230, 1120, 230, { stroke: C.accent }) + text(c, 600, 246, t.sell, { size: 9.5, font: 'mono', fill: C.accent, anchor: 'middle', weight: 500 }) + '</g>';
  // legend, two columns of three
  t.parts.forEach((p, i) => {
    const col = i < 3 ? 0 : 1; const row = i % 3; const x = 80 + col * 530; const y = 262 + row * 21;
    s += `<g style="animation:${show(css, P, `lg${i}`, 5 + i * 2.2)}">` + `<rect x="${c.RX(x, 12)}" y="${y}" width="12" height="12" fill="${FILLS[i]}"/>` + text(c, x + 22, y + 10, p, { size: 10, fill: i === 5 ? C.accent : C.fg }) + text(c, x + 500, y + 10, t.da(PARTS[i]), { size: 10, font: 'mono', fill: i === 5 ? C.accent : C.fg, anchor: 'end', weight: i === 5 ? 500 : 400 }) + '</g>';
  });
  // the same item when the output drops
  s += `<g style="animation:${show(css, P, 't2', 24)}">` + text(c, 80, 352, t.slower, { size: 11, fill: C.accent, weight: 500 }) + text(c, 1120, 352, t.left, { size: 10, font: 'mono', fill: C.accent, anchor: 'end', weight: 500 }) + '</g>';
  s += stack(PARTS6, 362, 28, 'b', 25);
  const ky = 408;
  s += tiles(c, css, P, ky, t.tiles, 38);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

const NB = ' ';
const frNum = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, NB);
const enNum = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const STRINGS = {
  fr: {
    courbe: {
      title: 'Un chantier, semaine 9 : 40 % réalisé, 45,6 % dépensé',
      alt: 'Courbes d’un chantier de vingt semaines, lu à la semaine 9. Budget de coût 9,0 millions de dinars, prix du marché 10,2 millions. À la semaine 9, il était prévu 3,83 millions de travaux ; 3,60 millions ont été réalisés, valorisés au prix du budget ; 4,10 millions ont été dépensés. Prolongée au même rythme, la dépense atteint 10,25 millions à la fin du chantier, soit à peu près le prix du marché : la marge prévue de 1,2 million disparaît.',
      header: 'Exemple construit · un chantier de vingt semaines · budget de coût 9,0 millions de dinars, prix du marché 10,2 millions',
      mil: (m) => `${m} M`, weeks: 'semaines', today: 'aujourd’hui · semaine 9',
      price: 'prix du marché · 10,2 M', budget: 'budget de coût · 9,0 M',
      eac1: 'coût final', eac2: 'projeté 10,25 M',
      read: ['dépensé · 4,10 M', 'prévu · 3,83 M', 'réalisé · 3,60 M'],
      tiles: [
        { big: '40 % réalisé, 45,6 % dépensé', l1: 'le chantier consomme plus vite qu’il n’avance', l2: '3,60 M de travaux pour 4,10 M de dépenses', hot: true },
        { big: 'marge prévue 1,2 M', l1: 'marge projetée : à peu près zéro', l2: 'coût final 9,0 ÷ 0,878 = 10,25 M' },
        { big: 'semaine 9 sur 20', l1: 'il reste onze semaines pour corriger', l2: 'à la fin du chantier, il n’en reste aucune' },
      ],
      line1: 'La perte ne se découvre pas à la fin : elle se lit dès que la dépense passe devant l’avancement.',
      line2: 'Il faut pour cela un budget par lot, et des dépenses rattachées au chantier le jour même.',
      note: 'Exemple construit · montants en millions de dinars ; calcul selon la méthode de la valeur acquise.',
    },
    ouvrage: {
      title: 'Le prix d’un ouvrage : de 1 850 à 2 553 dinars le mètre carré',
      alt: 'Prix d’un mètre carré de mur en brique, décomposé : matériaux 1 150 dinars, main-d’œuvre 620, matériel 80, soit 1 850 de déboursé sec ; frais de chantier 222, frais généraux 185, marge 296 ; prix de vente 2 553 dinars, coefficient 1,38. Si le maçon pose 6 mètres carrés par jour au lieu de 8, la main-d’œuvre passe à 827 dinars et la marge tombe à 89.',
      header: 'Exemple construit · mur en brique de 20 cm, au mètre carré · 640 m² dans le devis · rendement prévu : 8 m² par maçon et par jour',
      planned: 'Le prix prévu, pièce par pièce', slower: 'Si le maçon pose 6 m² par jour au lieu de 8', left: 'marge : 89 DA au lieu de 296',
      dry: 'déboursé sec · 1 850 DA', sell: 'prix de vente · 2 553 DA le m² · coefficient 1,38',
      parts: ['Matériaux', 'Main-d’œuvre', 'Matériel', 'Frais de chantier', 'Frais généraux', 'Marge'],
      da: (v) => `${frNum(v)} DA`,
      tiles: [
        { big: '1 850 × 1,38 = 2 553 DA', l1: 'le déboursé sec, puis le coefficient', l2: 'un prix se construit, il ne se devine pas' },
        { big: '70 % de marge en moins', l1: 'pour deux mètres carrés de moins par jour', l2: '207 DA de main-d’œuvre en plus par m²', hot: true },
        { big: '640 m² au devis', l1: '189 440 DA de marge prévue sur cet ouvrage', l2: '56 960 DA si le rendement tombe à 6' },
      ],
      line1: 'Un prix au mètre carré recopié du chantier d’avant ne dit pas ce qu’il contient.',
      line2: 'Décomposé, il montre l’hypothèse qui porte la marge : ici, huit mètres carrés par maçon et par jour.',
      note: 'Exemple construit · quantités, montants et rendements sont ceux de l’exemple, pas des prix de marché.',
    },
  },
  en: {
    courbe: {
      title: 'One site, week 9: 40 % done, 45.6 % spent',
      alt: 'Curves of a twenty-week site, read at week 9. Cost budget 9.0 million dinars, contract price 10.2 million. At week 9, 3.83 million of work was planned; 3.60 million has been done, valued at budget prices; 4.10 million has been spent. Extended at the same rate, spending reaches 10.25 million at the end of the site, about the contract price: the planned margin of 1.2 million disappears.',
      header: 'Constructed example · a twenty-week site · cost budget 9.0 million dinars, contract price 10.2 million',
      mil: (m) => `${m} M`, weeks: 'weeks', today: 'today · week 9',
      price: 'contract price · 10.2 M', budget: 'cost budget · 9.0 M',
      eac1: 'final cost', eac2: 'projected 10.25 M',
      read: ['spent · 4.10 M', 'planned · 3.83 M', 'done · 3.60 M'],
      tiles: [
        { big: '40 % done, 45.6 % spent', l1: 'the site consumes faster than it advances', l2: '3.60 M of work for 4.10 M of spending', hot: true },
        { big: 'planned margin 1.2 M', l1: 'projected margin: about zero', l2: 'final cost 9.0 ÷ 0.878 = 10.25 M' },
        { big: 'week 9 of 20', l1: 'eleven weeks are left to correct', l2: 'at the end of the site, none are' },
      ],
      line1: 'The loss is not discovered at the end: it can be read as soon as spending overtakes progress.',
      line2: 'That takes a budget per trade, and spending booked to the site the same day.',
      note: 'Constructed example · amounts in millions of dinars; calculated with the earned value method.',
    },
    ouvrage: {
      title: 'The price of one item of work: from 1,850 to 2,553 dinars per square metre',
      alt: 'Price of one square metre of brick wall, broken down: materials 1,150 dinars, labour 620, equipment 80, that is 1,850 of direct cost; site costs 222, overheads 185, margin 296; selling price 2,553 dinars, coefficient 1.38. If the mason lays 6 square metres a day instead of 8, labour goes to 827 dinars and the margin falls to 89.',
      header: 'Constructed example · 20 cm brick wall, per square metre · 640 m² in the quotation · planned output: 8 m² per mason per day',
      planned: 'The planned price, piece by piece', slower: 'If the mason lays 6 m² a day instead of 8', left: 'margin: 89 DZD instead of 296',
      dry: 'direct cost · 1,850 DZD', sell: 'selling price · 2,553 DZD per m² · coefficient 1.38',
      parts: ['Materials', 'Labour', 'Equipment', 'Site costs', 'Overheads', 'Margin'],
      da: (v) => `${enNum(v)} DZD`,
      tiles: [
        { big: '1,850 × 1.38 = 2,553 DZD', l1: 'direct cost, then the coefficient', l2: 'a price is built, not guessed' },
        { big: '70 % less margin', l1: 'for two square metres fewer per day', l2: '207 DZD more labour per m²', hot: true },
        { big: '640 m² in the quotation', l1: '189,440 DZD of planned margin on this item', l2: '56,960 DZD if output falls to 6' },
      ],
      line1: 'A price per square metre copied from the previous site does not say what it contains.',
      line2: 'Broken down, it shows the assumption that carries the margin: here, eight square metres per mason per day.',
      note: 'Constructed example · quantities, amounts and outputs belong to the example, not market prices.',
    },
  },
  ar: {
    courbe: {
      title: 'ورشة واحدة، الأسبوع 9: أُنجز 40 بالمئة، وصُرف 45,6 بالمئة',
      alt: 'منحنيات ورشة من عشرين أسبوعاً، مقروءة في الأسبوع 9. ميزانية التكلفة 9,0 مليون دينار، وسعر الصفقة 10,2 مليون. في الأسبوع 9 كان مبرمجاً 3,83 مليون من الأشغال؛ أُنجز منها 3,60 مليون، مقوَّمة بأسعار الميزانية؛ وصُرف 4,10 مليون. وإذا استمر الصرف بالوتيرة نفسها يبلغ 10,25 مليون عند نهاية الورشة، أي سعر الصفقة تقريباً: الهامش المبرمج بـ 1,2 مليون يختفي.',
      header: 'مثال مركَّب · ورشة من عشرين أسبوعاً · ميزانية التكلفة 9,0 مليون دينار، سعر الصفقة 10,2 مليون',
      mil: (m) => `${m} م`, weeks: 'الأسابيع', today: 'اليوم · الأسبوع 9',
      price: 'سعر الصفقة · 10,2 م', budget: 'ميزانية التكلفة · 9,0 م',
      eac1: 'التكلفة النهائية', eac2: 'المتوقَّعة 10,25 م',
      read: ['المصروف · 4,10 م', 'المبرمج · 3,83 م', 'المنجَز · 3,60 م'],
      tiles: [
        { big: `أُنجز ${I('40 %')}، وصُرف ${I('45,6 %')}`, l1: 'الورشة تستهلك أسرع مما تتقدّم', l2: '3,60 م من الأشغال مقابل 4,10 م من المصاريف', hot: true },
        { big: 'الهامش المبرمج 1,2 م', l1: 'الهامش المتوقَّع: صفر تقريباً', l2: `التكلفة النهائية ${I('9,0 ÷ 0,878 = 10,25')} م` },
        { big: 'الأسبوع 9 من 20', l1: 'بقي أحد عشر أسبوعاً للتصحيح', l2: 'وعند نهاية الورشة لا يبقى أي أسبوع' },
      ],
      line1: 'الخسارة لا تُكتشف في النهاية: تُقرأ ما إن يسبق الصرفُ التقدّمَ.',
      line2: 'ويلزم لذلك ميزانية لكل حصة، ومصاريف تُربط بالورشة في يومها.',
      note: 'مثال مركَّب · المبالغ بملايين الدنانير؛ والحساب بطريقة القيمة المكتسبة.',
    },
    ouvrage: {
      title: 'سعر عمل واحد: من 1 850 إلى 2 553 ديناراً للمتر المربع',
      alt: 'سعر متر مربع من جدار الآجر، مفصَّلاً: المواد 1 150 ديناراً، اليد العاملة 620، العتاد 80، أي 1 850 من التكلفة المباشرة؛ مصاريف الورشة 222، المصاريف العامة 185، الهامش 296؛ سعر البيع 2 553 ديناراً، المعامل 1,38. وإذا وضع البنّاء 6 أمتار مربعة في اليوم بدل 8، تصير اليد العاملة 827 ديناراً وينزل الهامش إلى 89.',
      header: `مثال مركَّب · جدار آجر من 20 سم، بالمتر المربع · ${I('640 m²')} في عرض السعر · المردود المبرمج: ${I('8 m²')} لكل بنّاء في اليوم`,
      planned: 'السعر المبرمج، جزءاً جزءاً', slower: `إذا وضع البنّاء ${I('6 m²')} في اليوم بدل 8`, left: 'الهامش: 89 دج بدل 296',
      dry: `التكلفة المباشرة · ${I('1 850')} دج`, sell: `سعر البيع · ${I('2 553')} دج للمتر المربع · المعامل ${I('1,38')}`,
      parts: ['المواد', 'اليد العاملة', 'العتاد', 'مصاريف الورشة', 'المصاريف العامة', 'الهامش'],
      da: (v) => `${I(frNum(v))} دج`,
      tiles: [
        { big: `${I('1 850 × 1,38 = 2 553')} دج`, l1: 'التكلفة المباشرة، ثم المعامل', l2: 'السعر يُبنى، ولا يُخمَّن' },
        { big: `${I('70 %')} أقل من الهامش`, l1: 'بسبب مترين مربعين أقل في اليوم', l2: '207 دج إضافية من اليد العاملة لكل متر مربع', hot: true },
        { big: `${I('640 m²')} في عرض السعر`, l1: `${I('189 440')} دج من الهامش المبرمج لهذا العمل`, l2: `${I('56 960')} دج إذا نزل المردود إلى 6` },
      ],
      line1: 'سعر المتر المربع المنسوخ من الورشة السابقة لا يقول ما الذي يحويه.',
      line2: 'ومفصَّلاً يُظهر الفرضية التي تحمل الهامش: هنا ثمانية أمتار مربعة لكل بنّاء في اليوم.',
      note: 'مثال مركَّب · الكميات والمبالغ والمردود خاصة بالمثال، وليست أسعار السوق.',
    },
  },
};
