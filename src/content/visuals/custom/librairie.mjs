// Bespoke animated figures for the 2027 "logiciel librairie-papeterie" page.
//  rentree(): weekly sales of school supplies over a year, as an index. Six weeks
//             (35 to 40) make 44 % of the year. The season's order is placed in weeks
//             24 to 27; a top-up ordered in week 37 arrives in week 39, once the peak
//             has passed.
//  liste():   one school list of 12 lines and 33 items sold as a kit: 9 lines in
//             stock, 2 replaced by an equivalent item, 1 on order. With 96 pupils in
//             that year group, the same list is sold 96 times.
// Numbers are drawn in their own text elements, direction="ltr".
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, open, heading, esc } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function pop(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scale(0)}${(at + 1.2).toFixed(1)}%,100%{transform:scale(1)}}`); return `transform-box:fill-box;transform-origin:center;animation:${P}-${id} ${LOOP}s linear infinite`; }
function growY(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleY(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleY(1)}}`); return `transform-box:fill-box;transform-origin:center bottom;animation:${P}-${id} ${LOOP}s linear infinite`; }
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
const poly = (c, pts, color, sw, dash) => `<polyline points="${pts.map(([x, y]) => `${c.X(x)},${y}`).join(' ')}" fill="none" stroke="${color}" stroke-width="${sw || 1}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;

// weekly index of school-supply sales over 52 weeks
const WEEKS = Array.from({ length: 52 }, () => 20);
Object.entries({ 1: 34, 2: 30, 33: 28, 34: 40, 35: 70, 36: 150, 37: 220, 38: 180, 39: 110, 40: 60, 41: 34 }).forEach(([w, v]) => { WEEKS[w - 1] = v; });
const WX = (w) => 104 + (w - 1) * 19;      // left edge of week w
const BASE = 392;

export function rentree(t, rtl) {
  const c = ctx(rtl); const P = 'lr'; const css = []; const H = 686;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  let frame = rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + text(c, 96, 172, t.chartTitle, { size: 11, fill: C.fg, weight: 500 }) + poly(c, [[WX(1), BASE], [WX(52) + 16, BASE]], C.line2);
  [[1, t.m1], [14, t.m2], [27, t.m3], [36, t.m4], [49, t.m5]].forEach(([w, label]) => { frame += text(c, WX(w), BASE + 16, label, { size: 8.5, font: 'mono', fill: C.fg55 }); });
  s += `<g style="animation:${show(css, P, 'pa', 3)}">${frame}</g>`;
  WEEKS.forEach((v, i) => {
    const w = i + 1; const h = v * 0.78; const peak = w >= 35 && w <= 40;
    s += `<g style="${growY(css, P, `b${w}`, 5 + i * 0.35, 1.5)}">` + rect(c, WX(w), BASE - h, 16, h, { stroke: peak ? C.accent : C.fg55, fill: peak ? C.accent : C.fg35 }) + '</g>';
  });
  // the season's order window, months before the peak
  s += `<g style="animation:${show(css, P, 'ow', 27)}">` + rect(c, WX(24) - 2, BASE - 62, 4 * 19 + 2, 62, { stroke: C.fg, fill: 'none', dash: '4 3' }) + text(c, WX(20), BASE - 90, t.order1, { size: 10, fill: C.fg, weight: 500 }) + text(c, WX(20), BASE - 74, t.order2, { size: 9.5, fill: C.fg70 }) + '</g>';
  // a top-up ordered at the peak arrives two weeks later
  const y37 = BASE - WEEKS[36] * 0.78 - 14;
  s += `<g style="animation:${show(css, P, 'lt', 32)}">` + poly(c, [[WX(37) + 8, y37], [WX(39) + 8, y37]], C.accent, 1.5) + poly(c, [[WX(39) + 2, y37 - 4], [WX(39) + 8, y37], [WX(39) + 2, y37 + 4]], C.accent, 1.5) + poly(c, [[WX(39) + 8, y37], [WX(39) + 8, BASE - WEEKS[38] * 0.78 - 4]], C.accent, 1, '3 3') + text(c, WX(41), y37 + 4, t.lead1, { size: 10, fill: C.accent, weight: 500 }) + text(c, WX(41), y37 + 20, t.lead2, { size: 9.5, fill: C.fg70 }) + '</g>';
  s += `<g style="${pop(css, P, 'pk', 30)}">` + num(c, WX(37) + 8, y37 - 10, '220', { size: 11, bold: true, fill: C.accent }) + '</g>';
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bd', 38)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 42);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// one school list: quantity and state of each line (ok in stock, sub replaced by an equivalent, miss on order)
const LIST = [[6, 'ok'], [3, 'ok'], [1, 'ok'], [9, 'ok'], [4, 'ok'], [3, 'ok'], [1, 'sub'], [1, 'ok'], [1, 'ok'], [1, 'ok'], [1, 'miss'], [2, 'sub']];
const PUPILS = 96;

export function liste(t, rtl) {
  const c = ctx(rtl); const P = 'lk'; const css = []; const H = 686;
  const items = LIST.reduce((a, r) => a + r[0], 0);
  const count = (k) => LIST.filter((r) => r[1] === k).length;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + rect(c, 96, 158, 520, 280, { stroke: C.fg55, fill: C.fill }) + text(c, 110, 180, t.listTitle, { size: 10.5, fill: C.fg, weight: 500 }) + poly(c, [[110, 188], [602, 188]], C.line2) + '</g>';
  LIST.forEach(([q, state], i) => {
    const y = 206 + i * 19.5; const at = 5 + i * 1.8;
    const col = state === 'ok' ? C.fg : C.accent;
    s += `<g style="animation:${show(css, P, `r${i}`, at)}">` + text(c, 110, y, t.items[i], { size: 10, fill: state === 'ok' ? C.fg : C.fg70 }) + num(c, 420, y, `×${q}`, { size: 10.5, bold: true, fill: C.fg }) + '</g>';
    s += `<g style="animation:${show(css, P, `s${i}`, at + 0.8)}">` + rect(c, 452, y - 10, 11, 11, state === 'ok' ? { stroke: C.fg, fill: C.fg } : state === 'sub' ? { stroke: C.accent, fill: TINT } : { stroke: C.accent, fill: C.accent }) + text(c, 472, y, t.state[state], { size: 9.5, fill: col }) + '</g>';
  });
  // what one scan of the list gives
  const row = (y, label, value, id, at, hot) => `<g style="animation:${show(css, P, id, at)}">` + text(c, 650, y, label, { size: 11, fill: hot ? C.accent : C.fg }) + num(c, 1070, y, value, { size: 14, bold: true, fill: hot ? C.accent : C.fg }) + '</g>';
  s += `<g style="animation:${show(css, P, 'rt', 26)}">` + text(c, 650, 180, t.rightTitle, { size: 10.5, fill: C.fg, weight: 500 }) + poly(c, [[650, 188], [1098, 188]], C.line2) + '</g>';
  s += row(214, t.cLines, String(LIST.length), 'c1', 28, false);
  s += row(240, t.cItems, String(items), 'c2', 29, false);
  s += row(266, t.cOk, String(count('ok')), 'c3', 30, false);
  s += row(292, t.cSub, String(count('sub')), 'c4', 31, true);
  s += row(318, t.cMiss, String(count('miss')), 'c5', 32, true);
  s += `<g style="${pop(css, P, 'yr', 35)}">` + rect(c, 650, 344, 448, 82, { stroke: C.accent, fill: TINT }) + text(c, 664, 366, t.yearTop, { size: 10.5, fill: C.accent, weight: 500 }) + text(c, 664, 388, t.yearMid, { size: 10, fill: C.fg }) + text(c, 664, 408, t.yearSub, { size: 9.5, fill: C.fg70 }) + '</g>';
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bd', 40)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 44);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    rentree: {
      title: 'Les fournitures scolaires, semaine par semaine',
      alt: 'Les ventes de fournitures scolaires sur cinquante-deux semaines, en indice. Six semaines, de la 35e à la 40e, font 44 % des ventes de l’année, avec un sommet en semaine 37. La commande de saison se passe entre les semaines 24 et 27. Un réassort commandé en semaine 37 arrive en semaine 39, quand le pic est passé.',
      header: 'Exemple construit · une librairie-papeterie, les ventes de fournitures d’une année, en indice hebdomadaire',
      chartTitle: 'Ventes de fournitures, par semaine', m1: 'janv.', m2: 'avril', m3: 'juillet', m4: 'sept.', m5: 'déc.',
      order1: 'la commande de saison', order2: 'se passe ici, trois mois avant',
      lead1: 'réassort : 2 semaines', lead2: 'commandé au pic, livré après',
      band: 'Les fournitures scolaires se vendent en six semaines et se commandent trois mois plus tôt : ce qui manque au pic arrive quand le pic est passé.',
      tiles: [
        { big: '6 semaines', l1: 'font 44 % des ventes de fournitures de l’année', l2: 'semaines 35 à 40' },
        { big: '2 semaines', l1: 'de délai de réassort chez le fournisseur', l2: 'commandé au pic, livré après le pic', hot: true },
        { big: '1 commande', l1: 'décide de la saison, dès juin', l2: 'par référence, d’après la rentrée précédente' },
      ],
      line1: 'La commande de saison se prépare sur les ventes de la rentrée précédente, référence par référence, et sur les listes des écoles du quartier.',
      line2: 'Trop peu, et la vente est perdue en semaine 37 ; trop, et le cahier reste jusqu’à la rentrée suivante. Les deux se chiffrent avant de signer.',
      note: 'Exemple construit · indice fictif ; le délai de réassort dépend de chaque fournisseur.',
    },
    liste: {
      title: 'Une liste scolaire, vendue d’un scan',
      alt: 'Une liste scolaire de douze lignes et trente-trois articles vendue comme un kit : neuf lignes sont en stock, deux sont remplacées par un article équivalent et une est en commande. Avec 96 élèves dans ce niveau, la même liste se vend 96 fois, soit 576 cahiers de 96 pages à prévoir.',
      header: 'Exemple construit · la liste d’une classe de primaire, saisie en juin, vendue en septembre',
      listTitle: 'Liste de fournitures · école du quartier · 3e année',
      items: ['Cahier 96 pages', 'Cahier 192 pages', 'Cahier de dessin', 'Protège-cahiers', 'Stylos bleus', 'Crayons noirs', 'Crayons de couleur, boîte de 12', 'Gomme', 'Taille-crayon', 'Règle 30 cm', 'Ardoise et feutres', 'Colle en bâton'],
      state: { ok: 'en stock', sub: 'remplacé, au choix', miss: 'en commande' },
      rightTitle: 'Ce que donne un scan de la liste',
      cLines: 'lignes ajoutées au ticket', cItems: 'articles', cOk: 'lignes en stock', cSub: 'lignes remplacées par un équivalent', cMiss: 'ligne en commande, réservée',
      yearTop: '96 élèves dans ce niveau', yearMid: '96 fois la même liste : 576 cahiers de 96 pages', yearSub: 'connus dès juin, avant la commande de saison',
      band: 'La liste d’une classe est saisie une fois, en juin : en septembre elle se vend d’un scan, se prépare d’avance, et dit ce qu’il faut avoir en stock.',
      tiles: [
        { big: '1 scan', l1: 'ajoute les 12 lignes de la liste au ticket', l2: 'au lieu de 12 recherches au comptoir' },
        { big: '2 remplacées', l1: 'par un article équivalent, proposé', l2: 'la personne choisit, le ticket le note', hot: true },
        { big: '1 en commande', l1: 'réservée, retirée à son arrivée', l2: 'un message prévient' },
      ],
      line1: 'Les listes des écoles du quartier, multipliées par les effectifs, donnent le cœur de la commande de saison.',
      line2: 'Un kit préparé d’avance sort en trente secondes ; une liste lue ligne à ligne au comptoir prend dix minutes, pendant que la file attend.',
      note: 'Exemple construit · liste, niveau et effectif fictifs ; les temps sont indicatifs.',
    },
  },
  en: {
    rentree: {
      title: 'School supplies, week by week',
      alt: 'Sales of school supplies over fifty-two weeks, as an index. Six weeks, from the 35th to the 40th, make 44% of the year’s sales, peaking in week 37. The season’s order is placed between weeks 24 and 27. A top-up ordered in week 37 arrives in week 39, once the peak has passed.',
      header: 'Constructed example · a bookshop and stationery shop, one year of supply sales, as a weekly index',
      chartTitle: 'Sales of supplies, per week', m1: 'Jan', m2: 'April', m3: 'July', m4: 'Sept', m5: 'Dec',
      order1: 'the season’s order', order2: 'is placed here, three months ahead',
      lead1: 'top-up: 2 weeks', lead2: 'ordered at the peak, delivered after',
      band: 'School supplies sell in six weeks and are ordered three months earlier: what is missing at the peak arrives once the peak has passed.',
      tiles: [
        { big: '6 weeks', l1: 'make 44% of the year’s supply sales', l2: 'weeks 35 to 40' },
        { big: '2 weeks', l1: 'of top-up lead time at the supplier', l2: 'ordered at the peak, delivered after it', hot: true },
        { big: '1 order', l1: 'decides the season, as early as June', l2: 'per reference, from the previous season' },
      ],
      line1: 'The season’s order is prepared from the previous season’s sales, reference by reference, and from the lists of the neighbourhood schools.',
      line2: 'Too little, and the sale is lost in week 37; too much, and the notebook stays until the next season. Both are costed before signing.',
      note: 'Constructed example · fictitious index; top-up lead time depends on each supplier.',
    },
    liste: {
      title: 'A school list, sold with one scan',
      alt: 'A school list of twelve lines and thirty-three items sold as a kit: nine lines are in stock, two are replaced by an equivalent item and one is on order. With 96 pupils in that year group, the same list is sold 96 times, that is 576 notebooks of 96 pages to plan for.',
      header: 'Constructed example · a primary class list, entered in June, sold in September',
      listTitle: 'Supply list · neighbourhood school · year 3',
      items: ['Notebook, 96 pages', 'Notebook, 192 pages', 'Drawing book', 'Notebook covers', 'Blue pens', 'Pencils', 'Coloured pencils, box of 12', 'Eraser', 'Pencil sharpener', 'Ruler, 30 cm', 'Slate and markers', 'Glue stick'],
      state: { ok: 'in stock', sub: 'replaced, by choice', miss: 'on order' },
      rightTitle: 'What one scan of the list gives',
      cLines: 'lines added to the ticket', cItems: 'items', cOk: 'lines in stock', cSub: 'lines replaced by an equivalent', cMiss: 'line on order, reserved',
      yearTop: '96 pupils in that year group', yearMid: 'the same list 96 times: 576 notebooks of 96 pages', yearSub: 'known in June, before the season’s order',
      band: 'A class list is entered once, in June: in September it sells with one scan, is prepared in advance, and says what has to be in stock.',
      tiles: [
        { big: '1 scan', l1: 'adds the list’s 12 lines to the ticket', l2: 'instead of 12 searches at the counter' },
        { big: '2 replaced', l1: 'by an equivalent item, offered', l2: 'the customer chooses, the ticket records it', hot: true },
        { big: '1 on order', l1: 'reserved, collected when it arrives', l2: 'a message gives notice' },
      ],
      line1: 'The lists of the neighbourhood schools, multiplied by pupil numbers, give the core of the season’s order.',
      line2: 'A kit prepared in advance leaves in thirty seconds; a list read line by line at the counter takes ten minutes, while the queue waits.',
      note: 'Constructed example · fictitious list, year group and numbers; times are indicative.',
    },
  },
  ar: {
    rentree: {
      title: 'اللوازم المدرسية، أسبوعاً بأسبوع',
      alt: 'مبيعات اللوازم المدرسية على اثنين وخمسين أسبوعاً، بمؤشر. ستة أسابيع، من الخامس والثلاثين إلى الأربعين، تصنع 44 بالمئة من مبيعات السنة، بقمة في الأسبوع 37. وطلبية الموسم تُبرم بين الأسبوعين 24 و27. وإعادة تموين تُطلب في الأسبوع 37 تصل في الأسبوع 39، حين تكون القمة قد مرّت.',
      header: 'مثال مركَّب · مكتبة ووراقة، مبيعات اللوازم لسنة، بمؤشر أسبوعي',
      chartTitle: 'مبيعات اللوازم، في الأسبوع', m1: 'جانفي', m2: 'أفريل', m3: 'جويلية', m4: 'سبتمبر', m5: 'ديسمبر',
      order1: 'طلبية الموسم', order2: 'تُبرم هنا، قبل ثلاثة أشهر',
      lead1: 'إعادة التموين: أسبوعان', lead2: 'تُطلب في القمة، وتصل بعدها',
      band: 'اللوازم المدرسية تُباع في ستة أسابيع وتُطلب قبل ثلاثة أشهر: ما ينقص في القمة يصل حين تكون القمة قد مرّت.',
      tiles: [
        { big: '6 أسابيع', l1: 'تصنع ⁦44 %⁩ من مبيعات اللوازم في السنة', l2: 'من الأسبوع 35 إلى 40' },
        { big: 'أسبوعان', l1: 'أجل إعادة التموين عند المورّد', l2: 'تُطلب في القمة، وتصل بعد القمة', hot: true },
        { big: 'طلبية واحدة', l1: 'تحسم الموسم، منذ جوان', l2: 'مرجعاً بمرجع، حسب الدخول السابق' },
      ],
      line1: 'طلبية الموسم تُحضَّر على مبيعات الدخول السابق، مرجعاً بمرجع، وعلى قوائم مدارس الحي.',
      line2: 'قليل، فيضيع البيع في الأسبوع 37؛ كثير، فيبقى الكراس حتى الدخول القادم. والاثنان يُحسبان قبل التوقيع.',
      note: 'مثال مركَّب · مؤشر خيالي؛ وأجل إعادة التموين يتوقف على كل مورّد.',
    },
    liste: {
      title: 'قائمة مدرسية، تُباع بمسح واحد',
      alt: 'قائمة مدرسية من اثني عشر سطراً وثلاث وثلاثين سلعة تُباع كحزمة: تسعة أسطر في المخزون، سطران يُعوَّضان بسلعة معادلة، وسطر في الطلب. وبـ96 تلميذاً في هذا المستوى، تُباع القائمة نفسها 96 مرة، أي 576 كراساً من 96 صفحة يجب توقعها.',
      header: 'مثال مركَّب · قائمة قسم ابتدائي، أُدخلت في جوان، وتُباع في سبتمبر',
      listTitle: 'قائمة اللوازم · مدرسة الحي · السنة الثالثة',
      items: ['كراس 96 صفحة', 'كراس 192 صفحة', 'كراس الرسم', 'أغلفة الكراريس', 'أقلام زرقاء', 'أقلام رصاص', 'أقلام ملوّنة، علبة 12', 'ممحاة', 'مبراة', 'مسطرة 30 سم', 'لوحة وأقلام لباد', 'لصاق'],
      state: { ok: 'في المخزون', sub: 'عُوّض، بالاختيار', miss: 'في الطلب' },
      rightTitle: 'ما يعطيه مسح واحد للقائمة',
      cLines: 'أسطر تُضاف إلى التذكرة', cItems: 'سلعة', cOk: 'أسطر في المخزون', cSub: 'أسطر عُوّضت بمعادل', cMiss: 'سطر في الطلب، محجوز',
      yearTop: '96 تلميذاً في هذا المستوى', yearMid: 'القائمة نفسها 96 مرة: 576 كراساً من 96 صفحة', yearSub: 'تُعرف منذ جوان، قبل طلبية الموسم',
      band: 'قائمة القسم تُدخَل مرة واحدة، في جوان: وفي سبتمبر تُباع بمسح واحد، تُحضَّر مسبقاً، وتقول ما يجب أن يكون في المخزون.',
      tiles: [
        { big: 'مسح واحد', l1: 'يضيف أسطر القائمة الـ12 إلى التذكرة', l2: 'بدل 12 بحثاً عند المنضدة' },
        { big: 'سطران عُوّضا', l1: 'بسلعة معادلة، مقترحة', l2: 'الزبون يختار، والتذكرة تسجّل', hot: true },
        { big: 'سطر في الطلب', l1: 'محجوز، يُستلم عند وصوله', l2: 'ورسالة تنبّه' },
      ],
      line1: 'قوائم مدارس الحي، مضروبة في أعداد التلاميذ، تعطي قلب طلبية الموسم.',
      line2: 'حزمة محضَّرة مسبقاً تخرج في ثلاثين ثانية؛ وقائمة تُقرأ سطراً بسطر عند المنضدة تأخذ عشر دقائق، والطابور ينتظر.',
      note: 'مثال مركَّب · قائمة ومستوى وعدد خيالية؛ والأوقات تقريبية.',
    },
  },
};
