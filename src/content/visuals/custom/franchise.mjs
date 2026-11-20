// Bespoke animated figures for the 2027 "comment créer une franchise" page.
//  redevance(): twelve months of one franchised outlet, in thousands of dinars. Each column is the
//               month's sales read on the common till; the grey part is what the franchisee
//               declared, the accented cap is what was not declared. Till 56 550, declared 52 600,
//               gap 3 950 (7.0 %). At 5 % the royalty is 2 827 500 on the till and 2 630 000 on
//               the declaration.
//  couloir():   eight outlets, four figures, one strip per figure. Each outlet is a dot; the band
//               is the corridor set by the network. 28 dots of 32 are inside; four are outside,
//               one per figure, on four different outlets.
// Numbers are drawn in their own text elements, direction="ltr".
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, open, heading, esc } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function pop(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scale(0)}${(at + 1.2).toFixed(1)}%,100%{transform:scale(1)}}`); return `transform-box:fill-box;transform-origin:center;animation:${P}-${id} ${LOOP}s linear infinite`; }
function growY(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleY(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleY(1)}}`); return `transform-box:fill-box;transform-origin:center bottom;animation:${P}-${id} ${LOOP}s linear infinite`; }
const TINT = 'rgba(242,181,68,0.06)';
const SOFT = 'rgba(242,181,68,0.30)';
const DARK = '#0b0b0b';
const BAND = 'rgba(255,255,255,0.05)';

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
const poly = (c, pts, color, sw, dash) => `<polyline points="${pts.map(([x, y]) => `${c.X(x)},${y}`).join(' ')}" fill="none" stroke="${color}" stroke-width="${sw || 1}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const dot = (c, x, y, r, fill, stroke) => `<circle cx="${c.X(x)}" cy="${y}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="1"/>`;
const grp = (n, sep) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, sep);

// one franchised outlet, twelve months, thousands of dinars
const TILL = [4200, 4350, 4600, 4800, 5100, 4700, 4300, 4100, 4900, 5200, 5000, 5300];
const DECL = [4200, 4300, 4400, 4500, 4600, 4400, 4100, 3900, 4400, 4600, 4500, 4700];
const RATE = 0.05;
const MX = (m) => 150 + m * 56;
const VY = (v) => 404 - v * 0.04;

export function redevance(t, rtl) {
  const c = ctx(rtl); const P = 'fz'; const css = []; const H = 686;
  const sum = (a) => a.reduce((x, y) => x + y, 0);
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  let frame = rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + text(c, 96, 170, t.chartTitle, { size: 11, fill: C.fg, weight: 500 }) + poly(c, [[140, 404], [826, 404]], C.line2);
  [[C.fg35, C.fg55, t.legDecl], [SOFT, C.accent, t.legGap]].forEach(([fill, stroke, label], i) => { frame += rect(c, 400 + i * 200, 160, 12, 12, { stroke, fill }) + text(c, 420 + i * 200, 171, label, { size: 9.5, fill: C.fg70 }); });
  [2000, 4000].forEach((v) => { frame += poly(c, [[140, VY(v)], [826, VY(v)]], C.line, 1, '3 4') + num(c, 118, VY(v) + 4, grp(v, t.sep), { size: 9, fill: C.fg55 }); });
  TILL.forEach((_, m) => { frame += num(c, MX(m) + 18, 420, String(m + 1), { size: 9, fill: C.fg55 }); });
  frame += text(c, 96, 438, t.axis, { size: 8.5, fill: C.fg55 });
  s += `<g style="animation:${show(css, P, 'pa', 3)}">${frame}</g>`;
  TILL.forEach((till, m) => {
    const decl = DECL[m]; const gap = till - decl;
    s += `<g style="${growY(css, P, `d${m}`, 5 + m * 0.9, 1.2)}">` + rect(c, MX(m), VY(decl), 36, decl * 0.04, { stroke: C.fg55, fill: C.fg35 }) + '</g>';
    s += `<g style="animation:${show(css, P, `g${m}`, 18 + m * 0.9)}">` + (gap ? rect(c, MX(m), VY(till), 36, gap * 0.04, { stroke: C.accent, fill: SOFT }) : '') + num(c, MX(m) + 18, VY(till) - 6, String(gap), { size: 9, bold: true, fill: gap ? C.accent : C.fg55 }) + '</g>';
  });
  // the royalty of the year, on the declaration and on the till
  [sum(DECL), sum(TILL)].forEach((base, i) => {
    const hot = i === 1; const y = 206 + i * 96;
    s += `<g style="${pop(css, P, `c${i}`, 31 + i * 3)}">` + rect(c, 850, y, 250, 80, { stroke: hot ? C.accent : C.line2, fill: hot ? TINT : C.fill }) + text(c, 864, y + 22, t.cards[i], { size: 10, fill: hot ? C.accent : C.fg, weight: 500 }) + ltrSpans(c.X(864), y + 48, [[grp(Math.round(base * 1000 * RATE), t.sep), hot ? C.accent : C.fg, true]], 17, rtl ? 'end' : 'start') + text(c, 864, y + 68, t.cardSub, { size: 9, fill: C.fg70 }) + '</g>';
  });
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bd', 38)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 42);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// eight outlets, four figures; lo and hi are the corridor set by the network
const STRIPS = [
  { min: 80, max: 200, lo: 130, hi: 180, v: [172, 158, 141, 165, 149, 96, 152, 137], sfx: '' },
  { min: 600, max: 900, lo: 750, hi: 850, v: [820, 790, 805, 760, 840, 815, 640, 800], sfx: '' },
  { min: 26, max: 40, lo: 29, hi: 34, v: [31, 32, 30, 33, 38, 32, 31, 34], sfx: ' %' },
  { min: 60, max: 100, lo: 85, hi: 100, v: [94, 91, 96, 88, 90, 86, 92, 71], sfx: ' %' },
];
const JIT = [-9, -3, 3, 9, -6, 6, 0, -9];
const PX = (st, v) => 330 + (v - st.min) / (st.max - st.min) * 750;

export function couloir(t, rtl) {
  const c = ctx(rtl); const P = 'nw'; const css = []; const H = 686;
  const iso = (str) => (rtl ? `⁦${str}⁩` : str);
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + text(c, 96, 170, t.chartTitle, { size: 11, fill: C.fg, weight: 500 }) + '</g>';
  STRIPS.forEach((st, i) => {
    const y = 214 + i * 62; const at = 5 + i * 9;
    s += `<g style="animation:${show(css, P, `s${i}`, at)}">` + text(c, 96, y - 2, t.strips[i].name, { size: 10.5, fill: C.fg, weight: 500 }) + text(c, 96, y + 13, t.strips[i].unit, { size: 9, fill: C.fg55 })
      + rect(c, PX(st, st.lo), y - 16, PX(st, st.hi) - PX(st, st.lo), 32, { stroke: C.fg35, fill: BAND, dash: '3 4' }) + poly(c, [[330, y], [1080, y]], C.line2)
      + num(c, 330, y + 28, `${st.min}${st.sfx}`, { size: 8.5, fill: C.fg55 }) + num(c, 1080, y + 28, `${st.max}${st.sfx}`, { size: 8.5, fill: C.fg55 })
      + num(c, PX(st, st.lo), y - 21, `${st.lo}${st.sfx}`, { size: 8.5, fill: C.fg70 }) + (st.hi < st.max ? num(c, PX(st, st.hi), y - 21, `${st.hi}${st.sfx}`, { size: 8.5, fill: C.fg70 }) : '') + '</g>';
    st.v.forEach((v, j) => {
      const out = v < st.lo || v > st.hi; const x = PX(st, v); const dy = out ? 0 : JIT[j];
      s += `<g style="${pop(css, P, `d${i}x${j}`, at + 1 + j * 0.6)}">` + dot(c, x, y + dy, out ? 6.5 : 5, out ? C.accent : C.fg35, out ? C.accent : C.fg55) + '</g>';
      if (out) {
        const label = `${t.outlets[j]} · ${iso(`${v}${st.sfx}`)}`; const low = v < st.lo;
        s += `<g style="animation:${show(css, P, `o${i}`, at + 7)}">` + text(c, low ? x + 14 : x - 14, y + 4, label, { size: 10, fill: C.accent, weight: 500, anchor: low ? 'start' : 'end' }) + '</g>';
      }
    });
  });
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bd', 43)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 46);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    redevance: {
      title: 'Douze mois d’un point franchisé : la caisse et la déclaration',
      alt: 'Les ventes mensuelles d’un point franchisé sur douze mois, en milliers de dinars. La caisse commune enregistre 56 550 000 dinars sur l’année ; le franchisé en a déclaré 52 600 000 ; l’écart est de 3 950 000 dinars, soit 7,0 %. À 5 %, la redevance est de 2 630 000 dinars sur la déclaration et de 2 827 500 dinars sur la caisse.',
      header: 'Exemple construit · un point franchisé, douze mois, redevance de 5 % des ventes',
      chartTitle: 'Ventes du mois, en milliers de dinars', axis: 'mois', sep: ' ',
      legDecl: 'déclaré par le franchisé', legGap: 'lu sur la caisse, non déclaré',
      cards: ['Redevance sur la déclaration', 'Redevance sur la caisse commune'], cardSub: 'dinars sur l’année, à 5 %',
      band: 'Quand la redevance se calcule sur la caisse commune, personne ne déclare rien : la facture du mois part seule, et le chiffre ne se discute plus.',
      tiles: [
        { big: '56 550 000 DA', l1: 'ventes de l’année, lues sur la caisse commune', l2: '52 600 000 DA déclarés' },
        { big: '3 950 000 DA', l1: 'd’écart entre la caisse et la déclaration', l2: '7,0 % des ventes de l’année', hot: true },
        { big: '237 000 DA', l1: 'de redevance et de fonds de communication en moins', l2: 'pour un seul point, à 5 % et 1 %' },
      ],
      line1: 'Les écarts viennent rarement d’une intention : ventes en livraison oubliées, tickets annulés, jours manquants, arrondis.',
      line2: 'La caisse commune remonte chaque ticket ; la redevance et le fonds de communication se calculent dessus, point par point.',
      note: 'Exemple construit · ventes et taux fictifs ; les taux varient d’un réseau à l’autre.',
    },
    couloir: {
      title: 'Huit points de vente, quatre chiffres, un couloir',
      alt: 'Huit points de vente comparés sur quatre chiffres, chacun avec le couloir fixé par le réseau. Ventes par jour, couloir de 130 à 180 milliers de dinars : Constantine est à 96. Ticket moyen, couloir de 750 à 850 dinars : Annaba est à 640. Coût matière, couloir de 29 à 34 % des ventes : Sétif est à 38 %. Score d’audit, couloir à partir de 85 % : Tlemcen est à 71 %. Les 28 autres valeurs sont dans le couloir.',
      header: 'Exemple construit · trois points propres et cinq franchisés, les chiffres de la semaine',
      chartTitle: 'Chaque point de vente est un rond ; la bande est le couloir fixé par le réseau',
      strips: [
        { name: 'Ventes par jour', unit: 'milliers de dinars' },
        { name: 'Ticket moyen', unit: 'dinars par ticket' },
        { name: 'Coût matière', unit: 'part des ventes' },
        { name: 'Score d’audit', unit: 'part de la grille respectée' },
      ],
      outlets: ['Alger 1', 'Alger 2', 'Blida', 'Oran', 'Sétif', 'Constantine', 'Annaba', 'Tlemcen'],
      band: 'Le réseau ne regarde pas trente-deux chiffres : il fixe un couloir par chiffre, et ne traite que les ronds qui en sortent.',
      tiles: [
        { big: '8 points de vente', l1: 'trois points propres et cinq franchisés', l2: 'quatre chiffres, calculés de la même façon' },
        { big: '28 ronds sur 32', l1: 'dans le couloir fixé par le réseau', l2: 'rien à faire pour ceux-là' },
        { big: '4 écarts', l1: 'un par chiffre, sur quatre points différents', l2: 'une visite ou un appel, pas une réunion', hot: true },
      ],
      line1: 'Ventes par jour, ticket moyen, coût matière, score d’audit : les mêmes chiffres partout, parce que la caisse est la même.',
      line2: 'Un écart ne dit pas la cause : il dit où envoyer la personne qui anime le réseau cette semaine.',
      note: 'Exemple construit · points de vente, chiffres et couloirs fictifs.',
    },
  },
  en: {
    redevance: {
      title: 'Twelve months of a franchised outlet: the till and the declaration',
      alt: 'Monthly sales of a franchised outlet over twelve months, in thousands of dinars. The common till records 56,550,000 dinars over the year; the franchisee declared 52,600,000; the gap is 3,950,000 dinars, that is 7.0%. At 5%, the royalty is 2,630,000 dinars on the declaration and 2,827,500 dinars on the till.',
      header: 'Constructed example · one franchised outlet, twelve months, royalty of 5% of sales',
      chartTitle: 'Sales of the month, in thousands of dinars', axis: 'month', sep: ',',
      legDecl: 'declared by the franchisee', legGap: 'read on the till, not declared',
      cards: ['Royalty on the declaration', 'Royalty on the common till'], cardSub: 'dinars over the year, at 5%',
      band: 'When the royalty is calculated on the common till, nobody declares anything: the month’s invoice goes out by itself, and the figure is no longer argued over.',
      tiles: [
        { big: 'DA 56,550,000', l1: 'sales of the year, read on the common till', l2: 'DA 52,600,000 declared' },
        { big: 'DA 3,950,000', l1: 'of gap between the till and the declaration', l2: '7.0% of the year’s sales', hot: true },
        { big: 'DA 237,000', l1: 'less royalty and marketing fund', l2: 'for a single outlet, at 5% and 1%' },
      ],
      line1: 'Gaps rarely come from intent: delivery sales left out, voided tickets, missing days, rounding.',
      line2: 'The common till sends up every ticket; the royalty and the marketing fund are calculated on it, outlet by outlet.',
      note: 'Constructed example · fictitious sales and rates; rates vary from one network to another.',
    },
    couloir: {
      title: 'Eight outlets, four figures, one corridor',
      alt: 'Eight outlets compared on four figures, each with the corridor set by the network. Sales per day, corridor from 130 to 180 thousand dinars: Constantine is at 96. Average ticket, corridor from 750 to 850 dinars: Annaba is at 640. Food cost, corridor from 29 to 34% of sales: Sétif is at 38%. Audit score, corridor from 85%: Tlemcen is at 71%. The 28 other values are inside the corridor.',
      header: 'Constructed example · three company-owned outlets and five franchisees, the week’s figures',
      chartTitle: 'Each outlet is a dot; the band is the corridor set by the network',
      strips: [
        { name: 'Sales per day', unit: 'thousands of dinars' },
        { name: 'Average ticket', unit: 'dinars per ticket' },
        { name: 'Food cost', unit: 'share of sales' },
        { name: 'Audit score', unit: 'share of the checklist met' },
      ],
      outlets: ['Algiers 1', 'Algiers 2', 'Blida', 'Oran', 'Sétif', 'Constantine', 'Annaba', 'Tlemcen'],
      band: 'The network does not look at thirty-two figures: it sets a corridor per figure, and only deals with the dots that leave it.',
      tiles: [
        { big: '8 outlets', l1: 'three company-owned outlets and five franchisees', l2: 'four figures, calculated the same way' },
        { big: '28 dots of 32', l1: 'inside the corridor set by the network', l2: 'nothing to do for those' },
        { big: '4 gaps', l1: 'one per figure, on four different outlets', l2: 'a visit or a call, not a meeting', hot: true },
      ],
      line1: 'Sales per day, average ticket, food cost, audit score: the same figures everywhere, because the till is the same.',
      line2: 'A gap does not say the cause: it says where to send the person who runs the network this week.',
      note: 'Constructed example · fictitious outlets, figures and corridors.',
    },
  },
  ar: {
    redevance: {
      title: 'اثنا عشر شهراً لنقطة بامتياز: الصندوق والتصريح',
      alt: 'المبيعات الشهرية لنقطة بيع بامتياز على اثني عشر شهراً، بآلاف الدنانير. الصندوق الموحَّد يسجّل 56550000 دينار في السنة؛ وصاحب الامتياز صرّح بـ52600000؛ والفارق 3950000 دينار، أي 7,0 بالمئة. بنسبة 5 بالمئة، الإتاوة 2630000 دينار على التصريح و2827500 دينار على الصندوق.',
      header: 'مثال مركَّب · نقطة بيع بامتياز، اثنا عشر شهراً، وإتاوة ⁦5 %⁩ من المبيعات',
      chartTitle: 'مبيعات الشهر، بآلاف الدنانير', axis: 'الشهر', sep: ' ',
      legDecl: 'ما صرّح به صاحب الامتياز', legGap: 'مقروء على الصندوق، وغير مصرَّح به',
      cards: ['الإتاوة على التصريح', 'الإتاوة على الصندوق الموحَّد'], cardSub: 'دينار في السنة، بنسبة ⁦5 %⁩',
      band: 'حين تُحسب الإتاوة على الصندوق الموحَّد، لا أحد يصرّح بشيء: فاتورة الشهر تنطلق وحدها، والرقم لا يعود محل نقاش.',
      tiles: [
        { big: '⁦56 550 000⁩ دج', l1: 'مبيعات السنة، مقروءة على الصندوق الموحَّد', l2: '⁦52 600 000⁩ دج مصرَّح بها' },
        { big: '⁦3 950 000⁩ دج', l1: 'فارق بين الصندوق والتصريح', l2: '⁦7,0 %⁩ من مبيعات السنة', hot: true },
        { big: '⁦237 000⁩ دج', l1: 'إتاوة وصندوق إشهار أقل', l2: 'لنقطة واحدة، بنسبتي ⁦5 %⁩ و⁦1 %⁩' },
      ],
      line1: 'الفوارق قلّما تأتي عن قصد: مبيعات توصيل منسية، تذاكر ملغاة، أيام ناقصة، وتقريب.',
      line2: 'الصندوق الموحَّد يرفع كل تذكرة؛ والإتاوة وصندوق الإشهار يُحسبان عليه، نقطة بنقطة.',
      note: 'مثال مركَّب · مبيعات ونسب خيالية؛ والنسب تختلف من شبكة إلى أخرى.',
    },
    couloir: {
      title: 'ثماني نقاط بيع، أربعة أرقام، ومجال واحد',
      alt: 'ثماني نقاط بيع تُقارَن على أربعة أرقام، ولكل رقم المجال الذي حدّدته الشبكة. المبيعات في اليوم، مجال من 130 إلى 180 ألف دينار: قسنطينة عند 96. متوسط التذكرة، مجال من 750 إلى 850 ديناراً: عنابة عند 640. كلفة المواد، مجال من 29 إلى 34 بالمئة من المبيعات: سطيف عند 38 بالمئة. نتيجة التدقيق، مجال ابتداءً من 85 بالمئة: تلمسان عند 71 بالمئة. والقيم الثماني والعشرون الأخرى داخل المجال.',
      header: 'مثال مركَّب · ثلاث نقاط خاصة وخمس بامتياز، وأرقام الأسبوع',
      chartTitle: 'كل نقطة بيع دائرة؛ والشريط هو المجال الذي حدّدته الشبكة',
      strips: [
        { name: 'المبيعات في اليوم', unit: 'بآلاف الدنانير' },
        { name: 'متوسط التذكرة', unit: 'دينار لكل تذكرة' },
        { name: 'كلفة المواد', unit: 'حصة من المبيعات' },
        { name: 'نتيجة التدقيق', unit: 'حصة الشبكة المحترَمة' },
      ],
      outlets: ['الجزائر 1', 'الجزائر 2', 'البليدة', 'وهران', 'سطيف', 'قسنطينة', 'عنابة', 'تلمسان'],
      band: 'الشبكة لا تنظر إلى اثنين وثلاثين رقماً: تحدّد مجالاً لكل رقم، ولا تعالج إلا الدوائر التي تخرج منه.',
      tiles: [
        { big: '8 نقاط بيع', l1: 'ثلاث نقاط خاصة وخمس بامتياز', l2: 'أربعة أرقام، تُحسب بالطريقة نفسها' },
        { big: '28 دائرة من 32', l1: 'داخل المجال الذي حدّدته الشبكة', l2: 'لا شيء يُفعل لهذه' },
        { big: '4 فوارق', l1: 'واحد لكل رقم، على أربع نقاط مختلفة', l2: 'زيارة أو اتصال، لا اجتماع', hot: true },
      ],
      line1: 'المبيعات في اليوم، متوسط التذكرة، كلفة المواد، ونتيجة التدقيق: الأرقام نفسها في كل مكان، لأن الصندوق واحد.',
      line2: 'الفارق لا يقول السبب: يقول إلى أين يُرسَل من ينشّط الشبكة هذا الأسبوع.',
      note: 'مثال مركَّب · نقاط بيع وأرقام ومجالات خيالية.',
    },
  },
};
