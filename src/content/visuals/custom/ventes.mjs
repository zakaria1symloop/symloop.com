// Bespoke animated figures for the 2027 "comment analyser les ventes" page.
//  classements(): the same eight products, ranked twice. Left, by revenue:
//                 bars grow from the best seller down. Right, by margin: bars
//                 grow in the new order. In between, one line per product
//                 joins its two ranks; the best seller, accented, drops from
//                 first to sixth.
//  ramadan():     comparing the right weeks. Two years of twelve weekly bars;
//                 a band marks Ramadan, eleven days earlier in the second
//                 year. Week nine against week nine gives a false alarm; the
//                 second week of Ramadan against the second week of Ramadan
//                 gives the real change.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function growX(css, P, id, at, dur, rtl) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'} center;animation:${P}-${id} ${LOOP}s linear infinite`; }
function growY(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleY(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleY(1)}}`); return `transform-box:fill-box;transform-origin:center bottom;animation:${P}-${id} ${LOOP}s linear infinite`; }
function drawLine(css, P, id, at, dur, len) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{stroke-dashoffset:${len.toFixed(0)}}${(at + dur).toFixed(1)}%,100%{stroke-dashoffset:0}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
const TINT = 'rgba(242,181,68,0.06)';
const DARK = '#0b0b0b';

function tiles(c, css, P, ky, ts, at0) {
  let s = '';
  ts.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, at0 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? TINT : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  return s;
}
const motionOff = (P) => `@media (prefers-reduced-motion: reduce){svg [style*="${P}-"]{animation:none !important}}`;

// eight products numbered by revenue rank: revenue index and margin rate
const SALES = [100, 82, 64, 51, 40, 33, 27, 20];
const RATE = [0.06, 0.22, 0.18, 0.09, 0.30, 0.25, 0.12, 0.35];
const MARGIN = SALES.map((v, i) => v * RATE[i]);
const BY_MARGIN = SALES.map((_, i) => i).sort((a, b) => MARGIN[b] - MARGIN[a]);

export function classements(t, rtl) {
  const c = ctx(rtl); const P = 'sv'; const css = []; const H = 680;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const y0 = 196, pitch = 28;
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 440, 290, { stroke: C.fg35, fill: DARK }) + text(c, 96, 168, t.left, { size: 11, fill: C.fg, weight: 500 }) + '</g>';
  s += `<g style="animation:${show(css, P, 'pb', 22)}">` + rect(c, 680, 144, 440, 290, { stroke: C.accent, fill: TINT }) + text(c, 696, 168, t.right, { size: 11, fill: C.fg, weight: 500 }) + '</g>';
  SALES.forEach((v, i) => {
    const y = y0 + i * pitch; const at = 4 + i * 2; const hot = i === 0; const w = v * 2.3;
    s += `<g style="animation:${show(css, P, `ln${i}`, at)}">` + text(c, 96, y + 11, t.prod + ' ' + (i + 1), { size: 10, fill: hot ? C.accent : C.fg }) + '</g>';
    s += `<g style="${growX(css, P, `lb${i}`, at + 0.5, 1.5, rtl)}">` + rect(c, 190, y, w, 14, { stroke: hot ? C.accent : C.fg70, fill: hot ? C.accent : C.fg70 }) + '</g>';
    s += `<g style="animation:${show(css, P, `lv${i}`, at + 2)}">` + text(c, 190 + w + 8, y + 11, String(v), { size: 9, font: 'mono', fill: C.fg }) + '</g>';
  });
  BY_MARGIN.forEach((idx, r) => {
    const y = y0 + r * pitch; const at = 24 + r * 2; const hot = idx === 0; const w = MARGIN[idx] * 12.5;
    s += `<g style="animation:${show(css, P, `rn${r}`, at)}">` + text(c, 696, y + 11, t.prod + ' ' + (idx + 1), { size: 10, fill: hot ? C.accent : C.fg }) + '</g>';
    s += `<g style="${growX(css, P, `rb${r}`, at + 0.5, 1.5, rtl)}">` + rect(c, 790, y, w, 14, { stroke: hot ? C.accent : C.fg, fill: hot ? C.accent : C.fg }) + '</g>';
    s += `<g style="animation:${show(css, P, `rv${r}`, at + 2)}">` + text(c, 790 + w + 8, y + 11, MARGIN[idx].toFixed(1).replace('.', t.dec), { size: 9, font: 'mono', fill: C.fg }) + '</g>';
    const yl = y0 + idx * pitch + 7; const yr = y + 7; const len = Math.hypot(160, yr - yl);
    s += `<polyline points="${c.X(520)},${yl} ${c.X(680)},${yr}" fill="none" stroke="${hot ? C.accent : C.fg35}" stroke-width="${hot ? 2.5 : 1.2}" stroke-dasharray="${len.toFixed(0)}" style="animation:${drawLine(css, P, `sl${idx}`, hot ? 48 : 42 + r * 0.6, 2, len)}"/>`;
  });
  const by = 450;
  s += `<g style="animation:${show(css, P, 'bd', 54)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 510;
  s += tiles(c, css, P, ky, t.tiles, 58);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// twelve weekly sales, base 100; Ramadan weeks sell 60 % more; year 2 grows 6 %
// and its Ramadan starts a week and a half (about eleven days) earlier
const Y1 = [100, 100, 100, 100, 100, 160, 160, 160, 160, 100, 100, 100];
const Y2 = [106, 106, 106, 106, 138, 170, 170, 170, 138, 106, 106, 106];
const WX = (w) => 200 + (w - 1) * 70;

export function ramadan(t, rtl) {
  const c = ctx(rtl); const P = 'sy'; const css = []; const H = 720;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 1040, 340, { stroke: C.fg35, fill: DARK }) + '</g>';
  const base = [270, 400]; const k = 0.5;
  // the Ramadan bands: weeks 6 to 9 in year 1, a week and a half earlier in year 2
  [[WX(6) - 12, base[0], 'b1', 5], [WX(4.5) - 12, base[1], 'b2', 26]].forEach(([x, by, id, at]) => {
    s += `<g style="animation:${show(css, P, id, at)}">` + rect(c, x, by - 100, 280, 100, { stroke: C.accent, fill: TINT, dash: '4 3' }) + text(c, x + 8, by - 88, t.band1, { size: 8.5, font: 'mono', fill: C.accent }) + '</g>';
  });
  [Y1, Y2].forEach((row, r) => {
    const by = base[r]; const at0 = r === 0 ? 6 : 27;
    s += `<g style="animation:${show(css, P, `yl${r}`, at0 - 2)}">` + text(c, 96, by - 30, t.years[r], { size: 11, fill: C.fg, weight: 500 }) + `<polyline points="${c.X(190)},${by} ${c.X(1050)},${by}" fill="none" stroke="${C.fg35}" stroke-width="1"/></g>`;
    row.forEach((v, i) => {
      const x = WX(i + 1); const h = v * k;
      s += `<g style="${growY(css, P, `w${r}${i}`, at0 + i * 1.2, 1.5)}">` + rect(c, x, by - h, 46, h, { stroke: C.fg70, fill: v > 120 ? C.fg : C.fg70 }) + '</g>';
    });
  });
  // week numbers under the second year
  s += `<g style="animation:${show(css, P, 'wk', 27)}">` + Y2.map((_, i) => text(c, WX(i + 1) + 23, base[1] + 14, String(i + 1), { size: 8.5, font: 'mono', fill: C.fg55, anchor: 'middle' })).join('') + text(c, 96, base[1] + 14, t.week, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>';
  // the false comparison: week 9 against week 9
  s += `<g style="animation:${show(css, P, 'f1', 46)}">` + rect(c, WX(9) - 4, base[0] - Y1[8] * k - 4, 54, Y1[8] * k + 8, { stroke: C.accent, fill: 'none', sw: 2, dash: '5 3' }) + rect(c, WX(9) - 4, base[1] - Y2[8] * k - 4, 54, Y2[8] * k + 8, { stroke: C.accent, fill: 'none', sw: 2, dash: '5 3' }) + '</g>';
  // the right comparison: second week of Ramadan in each year (week 7, then week 6)
  s += `<g style="animation:${show(css, P, 'f2', 51)}">` + rect(c, WX(7) - 4, base[0] - Y1[6] * k - 4, 54, Y1[6] * k + 8, { stroke: C.fg, fill: 'none', sw: 2 }) + rect(c, WX(6) - 4, base[1] - Y2[5] * k - 4, 54, Y2[5] * k + 8, { stroke: C.fg, fill: 'none', sw: 2 }) + '</g>';
  s += `<g style="animation:${show(css, P, 'c1', 47)}">` + rect(c, 96, 430, 500, 40, { stroke: C.accent, fill: TINT, dash: '5 3' }) + text(c, 108, 448, t.badTop, { size: 10.5, fill: C.accent, weight: 500 }) + text(c, 108, 463, t.badSub, { size: 8.5, font: 'mono', fill: C.fg70 }) + '</g>';
  s += `<g style="animation:${show(css, P, 'c2', 52)}">` + rect(c, 604, 430, 500, 40, { stroke: C.fg, fill: C.fill }) + text(c, 616, 448, t.goodTop, { size: 10.5, fill: C.fg, weight: 500 }) + text(c, 616, 463, t.goodSub, { size: 8.5, font: 'mono', fill: C.fg70 }) + '</g>';
  const by = 500;
  s += `<g style="animation:${show(css, P, 'bd', 56)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 560;
  s += tiles(c, css, P, ky, t.tiles, 60);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    classements: {
      title: 'Les mêmes produits, deux classements',
      alt: 'Deux classements des mêmes huit produits. À gauche, par chiffre d’affaires : le produit 1 est premier avec un indice 100, puis 82, 64, 51, 40, 33, 27 et 20. À droite, par marge : le produit 2 est premier avec 18, puis les produits 5, 3, 6 et 8 ; le produit 1, le plus vendu, n’est que sixième avec 6, devant les produits 4 et 7. Une ligne relie les deux rangs de chaque produit.',
      header: 'Exemple construit · huit produits, un mois de ventes · chiffre d’affaires en indice, marge dans la même unité',
      left: 'Classés par chiffre d’affaires', right: 'Classés par marge', prod: 'produit', dec: ',',
      band: 'Le produit le plus vendu est sixième par la marge : classer par le chiffre d’affaires, c’est regarder le travail, pas le gain.',
      tiles: [
        { big: '1er, puis 6e', l1: 'le produit le plus vendu rapporte moins que cinq autres', l2: 'marge de 6 % dans l’exemple', hot: true },
        { big: '3 produits sur 8', l1: 'font plus de la moitié de la marge', l2: 'les produits 2, 5 et 3' },
        { big: 'un coût par ligne', l1: 'sans prix d’achat sur la vente, pas de marge calculable', l2: 'la donnée qui manque le plus souvent' },
      ],
      line1: 'La même lecture se fait sur les clients : celui qui achète le plus est souvent celui qui obtient le plus de remise.',
      line2: 'Deux classements côte à côte disent où mettre l’effort : pousser ce qui rapporte, renégocier ce qui occupe.',
      note: 'Exemple construit · indices et taux fictifs ; refaites les deux classements sur votre dernier mois.',
    },
    ramadan: {
      title: 'Comparer la bonne semaine',
      alt: 'Douze semaines de ventes pour deux années. La première année, les ventes passent de 100 à 160 pendant les quatre semaines de Ramadan, semaines 6 à 9. La seconde année, Ramadan commence une semaine et demie plus tôt et les ventes de fond ont progressé de 6 %. Comparer la semaine 9 à la semaine 9 donne 160 puis 138, soit moins 14 % : une fausse alerte. Comparer la deuxième semaine de Ramadan à la deuxième semaine de Ramadan donne 160 puis 170, soit plus 6 % : la vraie évolution.',
      header: 'Exemple construit · ventes par semaine, deux années · Ramadan commence environ onze jours plus tôt la seconde année',
      years: ['Année 1', 'Année 2'], week: 'semaine', band1: 'Ramadan',
      badTop: 'Semaine 9 contre semaine 9 : −14 %', badSub: '160 puis 138 · une fausse alerte',
      goodTop: 'Même semaine de Ramadan : +6 %', goodSub: '160 puis 170 · la vraie évolution',
      band: 'On ne compare pas deux dates : on compare deux périodes qui se ressemblent. La même activité donne −14 % ou +6 % selon la lecture.',
      tiles: [
        { big: '11 jours', l1: 'l’année lunaire est plus courte que l’année solaire', l2: 'Ramadan avance chaque année', hot: true },
        { big: '−14 % ou +6 %', l1: 'la même activité, lue de deux façons', l2: 'seule la seconde est juste' },
        { big: 'à calendrier égal', l1: 'les fêtes avec les fêtes, la rentrée avec la rentrée', l2: 'et le même nombre de jours ouvrés' },
      ],
      line1: 'Un tableau qui compare mars à mars se trompe une année sur deux, sans que personne ait mal travaillé.',
      line2: 'Le logiciel doit connaître le calendrier de votre activité : Ramadan, les fêtes, la rentrée, les jours fermés.',
      note: 'Exemple construit · ventes fictives, base 100 ; le décalage d’environ onze jours est celui du calendrier lunaire.',
    },
  },
  en: {
    classements: {
      title: 'The same products, two rankings',
      alt: 'Two rankings of the same eight products. On the left, by revenue: product 1 is first with an index of 100, then 82, 64, 51, 40, 33, 27 and 20. On the right, by margin: product 2 is first with 18, then products 5, 3, 6 and 8; product 1, the best seller, is only sixth with 6, ahead of products 4 and 7. A line joins the two ranks of each product.',
      header: 'Constructed example · eight products, one month of sales · revenue as an index, margin in the same unit',
      left: 'Ranked by revenue', right: 'Ranked by margin', prod: 'product', dec: '.',
      band: 'The best seller is sixth by margin: ranking by revenue looks at the work, not at the gain.',
      tiles: [
        { big: '1st, then 6th', l1: 'the best seller earns less than five others', l2: 'a 6% margin in the example', hot: true },
        { big: '3 products out of 8', l1: 'make more than half of the margin', l2: 'products 2, 5 and 3' },
        { big: 'a cost per line', l1: 'with no purchase price on the sale, no margin can be worked out', l2: 'the data most often missing' },
      ],
      line1: 'The same reading is made on customers: the one who buys most is often the one who gets the biggest discount.',
      line2: 'Two rankings side by side say where to put the effort: push what earns, renegotiate what keeps you busy.',
      note: 'Constructed example · fictitious indices and rates; redo both rankings on your last month.',
    },
    ramadan: {
      title: 'Comparing the right week',
      alt: 'Twelve weeks of sales for two years. In the first year, sales go from 100 to 160 during the four weeks of Ramadan, weeks 6 to 9. In the second year, Ramadan starts a week and a half earlier and underlying sales have grown by 6%. Comparing week 9 with week 9 gives 160 then 138, minus 14%: a false alarm. Comparing the second week of Ramadan with the second week of Ramadan gives 160 then 170, plus 6%: the real change.',
      header: 'Constructed example · weekly sales, two years · Ramadan starts about eleven days earlier in the second year',
      years: ['Year 1', 'Year 2'], week: 'week', band1: 'Ramadan',
      badTop: 'Week 9 against week 9: −14%', badSub: '160 then 138 · a false alarm',
      goodTop: 'Same week of Ramadan: +6%', goodSub: '160 then 170 · the real change',
      band: 'You do not compare two dates: you compare two periods that resemble each other. The same activity gives −14% or +6% depending on the reading.',
      tiles: [
        { big: '11 days', l1: 'the lunar year is shorter than the solar year', l2: 'Ramadan moves earlier each year', hot: true },
        { big: '−14% or +6%', l1: 'the same activity, read two ways', l2: 'only the second is right' },
        { big: 'like for like', l1: 'holidays with holidays, back-to-school with back-to-school', l2: 'and the same number of working days' },
      ],
      line1: 'A table that compares March with March is wrong one year in two, without anyone having worked badly.',
      line2: 'The software must know the calendar of your business: Ramadan, holidays, back-to-school, closed days.',
      note: 'Constructed example · fictitious sales, base 100; the shift of about eleven days is that of the lunar calendar.',
    },
  },
  ar: {
    classements: {
      title: 'المنتجات نفسها، بترتيبين',
      alt: 'ترتيبان للمنتجات الثمانية نفسها. في جهة، حسب رقم الأعمال: المنتج 1 أول بمؤشر 100، ثم 82، 64، 51، 40، 33، 27، و20. وفي الجهة الأخرى، حسب الهامش: المنتج 2 أول بـ 18، ثم المنتجات 5 و3 و6 و8؛ والمنتج 1، الأكثر مبيعاً، سادس فقط بـ 6، قبل المنتجين 4 و7. وخط يربط مرتبتَي كل منتج.',
      header: 'مثال مركَّب · ثمانية منتجات، وشهر من المبيعات · رقم الأعمال بمؤشر، والهامش بالوحدة نفسها',
      left: 'مرتَّبة حسب رقم الأعمال', right: 'مرتَّبة حسب الهامش', prod: 'المنتج', dec: '.',
      band: 'المنتج الأكثر مبيعاً سادس في الهامش: الترتيب برقم الأعمال ينظر إلى العمل، لا إلى الربح.',
      tiles: [
        { big: 'الأول، ثم السادس', l1: 'المنتج الأكثر مبيعاً يربح أقل من خمسة آخرين', l2: 'هامش 6 بالمئة في المثال', hot: true },
        { big: '3 منتجات من 8', l1: 'تصنع أكثر من نصف الهامش', l2: 'المنتجات 2 و5 و3' },
        { big: 'كلفة لكل سطر', l1: 'دون سعر الشراء على سطر البيع، لا هامش يُحسب', l2: 'المعطى الناقص في أغلب الأحيان' },
      ],
      line1: 'والقراءة نفسها تُنجز على الزبائن: الأكثر شراءً هو غالباً من ينال أكبر تخفيض.',
      line2: 'ترتيبان جنباً إلى جنب يقولان أين يوضع المجهود: دفع ما يربح، وإعادة التفاوض على ما يشغل.',
      note: 'مثال مركَّب · مؤشرات ونسب خيالية؛ أعيدوا الترتيبين على شهركم الأخير.',
    },
    ramadan: {
      title: 'مقارنة الأسبوع الصحيح',
      alt: 'اثنا عشر أسبوعاً من المبيعات لسنتين. في السنة الأولى، المبيعات تنتقل من 100 إلى 160 خلال أسابيع رمضان الأربعة، من الأسبوع 6 إلى 9. وفي السنة الثانية، رمضان يبدأ قبل ذلك بأسبوع ونصف والمبيعات العادية تقدمت بـ 6 بالمئة. مقارنة الأسبوع 9 بالأسبوع 9 تعطي 160 ثم 138، أي ناقص 14 بالمئة: إنذار كاذب. ومقارنة الأسبوع الثاني من رمضان بالأسبوع الثاني من رمضان تعطي 160 ثم 170، أي زائد 6 بالمئة: التطور الحقيقي.',
      header: 'مثال مركَّب · المبيعات حسب الأسبوع، لسنتين · رمضان يبدأ قبل نحو أحد عشر يوماً في السنة الثانية',
      years: ['السنة 1', 'السنة 2'], week: 'الأسبوع', band1: 'رمضان',
      badTop: 'الأسبوع 9 مقابل الأسبوع 9: ⁦−14%⁩', badSub: '160 ثم 138 · إنذار كاذب',
      goodTop: 'الأسبوع نفسه من رمضان: ⁦+6%⁩', goodSub: '160 ثم 170 · التطور الحقيقي',
      band: 'لا يُقارَن تاريخان: تُقارَن فترتان متشابهتان. النشاط نفسه يعطي ⁦−14%⁩ أو ⁦+6%⁩ حسب القراءة.',
      tiles: [
        { big: '11 يوماً', l1: 'السنة القمرية أقصر من السنة الشمسية', l2: 'ورمضان يتقدم كل سنة', hot: true },
        { big: '⁦−14%⁩ أو ⁦+6%⁩', l1: 'النشاط نفسه، مقروءاً بطريقتين', l2: 'والثانية وحدها صحيحة' },
        { big: 'برزنامة متساوية', l1: 'الأعياد مع الأعياد، والدخول مع الدخول', l2: 'والعدد نفسه من أيام العمل' },
      ],
      line1: 'الجدول الذي يقارن مارس بمارس يخطئ سنة من سنتين، دون أن يكون أحد قد عمل بشكل سيئ.',
      line2: 'وعلى البرنامج أن يعرف رزنامة نشاطكم: رمضان، الأعياد، الدخول، وأيام الإغلاق.',
      note: 'مثال مركَّب · مبيعات خيالية، على أساس 100؛ والفارق بنحو أحد عشر يوماً هو فارق الرزنامة القمرية.',
    },
  },
};
