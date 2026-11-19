// Bespoke animated figures for the 2027 "comparateur de prix en Algérie" page.
//  appariement(): the same product, written three ways. Three shop offers
//                 appear one by one with their own title; each is reduced to
//                 the same three keys (brand, reference, capacity); lines are
//                 drawn to a single product record where the three prices are
//                 listed, the lowest first.
//  fraicheur():   a price has an age. Eight shops, the age of their last
//                 price as a bar growing on an hours axis, two thresholds:
//                 fresh under 6 hours, shown with its age up to 48 hours,
//                 hidden after that.
// Shop titles and keys read left to right in every locale: they are drawn in
// their own text elements with direction="ltr".
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

// three shops, one fictitious product, fictitious prices on a base of 100
const TITLES = ['Réfrigérateur MARQUE-A 400L No Frost RF400NF', 'Frigo Marque A nofrost 400 litres - RF-400-NF', 'MARQUE A RF 400 NF refrigerateur 2 portes'];
const PRICES = [100, 104, 96];
const KEYS = ['marque a', 'rf400nf', '400 l'];

export function appariement(t, rtl) {
  const c = ctx(rtl); const P = 'ja'; const css = []; const H = 618;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const kx = [470, 566, 668], kw = [88, 94, 66];
  TITLES.forEach((title, i) => {
    const y = 150 + i * 82; const at = 4 + i * 8;
    s += `<g style="animation:${show(css, P, `c${i}`, at)}">` + rect(c, 80, y, 360, 70, { stroke: C.line2, fill: C.fill }) + text(c, 92, y + 20, t.shops[i], { size: 8.5, font: 'mono', fill: C.fg55 }) + ltrSpans(c.RX(80, 360) + 12, y + 42, [[title, C.fg, true]], 10, 'start') + text(c, 92, y + 60, t.price + ' ' + PRICES[i], { size: 9, font: 'mono', fill: C.fg70 }) + '</g>';
    s += `<polyline points="${c.X(440)},${y + 35} ${c.X(470)},${y + 35}" fill="none" stroke="${C.fg70}" stroke-width="1.5" stroke-dasharray="30" style="animation:${drawLine(css, P, `a${i}`, at + 1.5, 1, 30)}"/>`;
    KEYS.forEach((k, j) => {
      const hot = j === 1;
      s += `<g style="${pop(css, P, `k${i}${j}`, at + 2.5 + j)}">` + rect(c, kx[j], y + 23, kw[j], 24, { stroke: hot ? C.accent : C.fg70, fill: hot ? TINT : DARK }) + ltrSpans(c.X(kx[j] + kw[j] / 2), y + 39, [[k, hot ? C.accent : C.fg, true]], 10, 'middle') + '</g>';
    });
    const len = Math.hypot(800 - 734, 267 - (y + 35));
    s += `<polyline points="${c.X(734)},${y + 35} ${c.X(800)},267" fill="none" stroke="${C.accent}" stroke-width="1.5" stroke-dasharray="${len.toFixed(0)}" style="animation:${drawLine(css, P, `b${i}`, at + 6, 1.5, len)}"/>`;
  });
  s += `<g style="animation:${show(css, P, 'rec', 28)}">` + rect(c, 800, 150, 320, 234, { stroke: C.accent, fill: TINT }) + text(c, 816, 174, t.recTitle, { size: 11, fill: C.fg, weight: 500 }) + ltrSpans(c.X(960), 198, [['MARQUE A · RF400NF · 400 L', C.accent, true]], 11, 'middle') + text(c, 816, 222, t.recSub, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>';
  const order = [2, 0, 1];
  order.forEach((idx, r) => {
    const y = 236 + r * 44; const best = r === 0;
    s += `<g style="animation:${show(css, P, `o${r}`, 31 + r * 3)}">` + rect(c, 816, y, 288, 36, { stroke: best ? C.accent : C.line2, fill: best ? C.accent : C.fill }) + text(c, 828, y + 23, t.shops[idx], { size: 10, fill: best ? '#000' : C.fg, weight: best ? 500 : 300 }) + text(c, 1092, y + 23, String(PRICES[idx]), { size: 13, font: 'mono', fill: best ? '#000' : C.fg, weight: 500, anchor: 'end' }) + '</g>';
  });
  const by = 398;
  s += `<g style="animation:${show(css, P, 'bd', 44)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 458;
  s += tiles(c, css, P, ky, t.tiles, 48);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// age, in hours, of the last price of eight shops; source index per shop
const AGES = [1, 2, 3, 5, 9, 20, 41, 66];
const SRC = [0, 0, 1, 1, 2, 2, 3, 3];
const X0 = 400, PXH = 8;

export function fraicheur(t, rtl) {
  const c = ctx(rtl); const P = 'jf'; const css = []; const H = 670;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 1040, 290, { stroke: C.fg35, fill: DARK }) + '</g>';
  // the two thresholds
  [[6, t.th[0]], [48, t.th[1]]].forEach(([h, label], i) => {
    const x = X0 + h * PXH;
    s += `<g style="animation:${show(css, P, `t${i}`, 4 + i)}"><polyline points="${c.X(x)},172 ${c.X(x)},400" fill="none" stroke="${C.accent}" stroke-width="1" stroke-dasharray="4 4"/>` + text(c, x, 166, label, { size: 9, font: 'mono', fill: C.accent, weight: 500, anchor: 'middle' }) + '</g>';
  });
  AGES.forEach((age, i) => {
    const y = 186 + i * 27; const at = 7 + i * 4; const stale = age > 48; const fresh = age <= 6; const w = age * PXH;
    s += `<g style="animation:${show(css, P, `n${i}`, at)}">` + text(c, 96, y + 11, t.shop + ' ' + (i + 1), { size: 10, fill: stale ? C.accent : C.fg }) + text(c, 200, y + 11, t.sources[SRC[i]], { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>';
    s += `<g style="${growX(css, P, `b${i}`, at + 0.5, 2, rtl)}">` + rect(c, X0, y, w, 14, stale ? { stroke: C.accent, fill: 'none', dash: '4 3' } : { stroke: fresh ? C.fg : C.fg70, fill: fresh ? C.fg : C.fg70 }) + '</g>';
    s += `<g style="animation:${show(css, P, `v${i}`, at + 2.5)}">` + text(c, X0 + w + (age === 5 ? 16 : 8), y + 11, t.ages[i], { size: 9, font: 'mono', fill: stale ? C.accent : C.fg, weight: stale ? 500 : 300 }) + '</g>';
  });
  s += `<g style="animation:${show(css, P, 'lg', 42)}">` + text(c, X0, 422, t.zones[0], { size: 8.5, font: 'mono', fill: C.fg }) + text(c, X0 + 6 * PXH + 12, 422, t.zones[1], { size: 8.5, font: 'mono', fill: C.fg70 }) + text(c, X0 + 48 * PXH + 12, 422, t.zones[2], { size: 8.5, font: 'mono', fill: C.accent }) + '</g>';
  const by = 450;
  s += `<g style="animation:${show(css, P, 'bd', 46)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 510;
  s += tiles(c, css, P, ky, t.tiles, 50);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    appariement: {
      title: 'Le même produit, trois écritures',
      alt: 'À gauche, trois offres de trois boutiques pour le même réfrigérateur, chacune avec son titre : l’une écrit la référence collée, l’autre avec des tirets, la troisième avec des espaces. Au milieu, chaque offre est ramenée aux trois mêmes clés : la marque, la référence sans espaces ni tirets, la capacité. À droite, une seule fiche produit où les trois prix sont listés, le plus bas en premier : 96, 100, 104.',
      header: 'Exemple construit · un produit et une marque fictifs, trois boutiques · prix fictifs, sur une base de 100',
      shops: ['boutique 1', 'boutique 2', 'boutique 3'], price: 'prix :',
      recTitle: 'Une seule fiche produit', recSub: 'trois offres, la plus basse en tête',
      band: 'On ne compare pas des titres, on compare des clés : la marque et la référence normalisées, puis le code-barres quand il existe.',
      tiles: [
        { big: '3 écritures', l1: 'le même réfrigérateur, écrit de trois façons', l2: 'aucun des trois titres n’est faux' },
        { big: '1 clé', l1: 'la référence sans espaces ni tirets, en minuscules', l2: 'rf400nf dans les trois cas', hot: true },
        { big: '1 offre sur 4', l1: 'reste à apparier à la main, dans l’exemple', l2: 'un écran pour le faire vite' },
      ],
      line1: 'Si deux offres du même produit restent sur deux fiches, le comparateur ne compare plus rien : il liste.',
      line2: 'Si deux produits différents se retrouvent sur la même fiche, il compare faux : c’est l’erreur à éviter d’abord.',
      note: 'Exemple construit · marque, référence et prix fictifs ; le mécanisme est le même pour un téléphone ou un billet.',
    },
    fraicheur: {
      title: 'Un prix a un âge',
      alt: 'Huit boutiques et l’âge de leur dernier prix, en heures. Les quatre premières, alimentées par un flux ou par l’espace boutique, ont un prix de moins de six heures : il est affiché. Les trois suivantes, relevées sur le site ou saisies, ont un prix de neuf, vingt et quarante et une heures : il est affiché avec son âge. La dernière a un prix de soixante-six heures, au-delà du seuil de quarante-huit heures : il est masqué.',
      header: 'Exemple construit · huit boutiques, l’âge de leur dernier prix connu · deux seuils : 6 heures et 48 heures',
      shop: 'boutique', sources: ['flux', 'espace boutique', 'relevé du site', 'saisie par l’équipe'],
      ages: ['1 h', '2 h', '3 h', '5 h', '9 h', '20 h', '41 h', '66 h : masqué'],
      th: ['6 h', '48 h'], zones: ['frais', 'affiché avec son âge', 'masqué'],
      band: 'Un prix sans date est une promesse que personne ne tient : chaque prix affiché porte son âge, et disparaît quand il est trop vieux.',
      tiles: [
        { big: 'toutes les 6 h', l1: 'les flux et les relevés repassent quatre fois par jour', l2: 'dans l’exemple' },
        { big: 'après 48 h : masqué', l1: 'un prix que personne n’a confirmé ne s’affiche plus', l2: 'mieux vaut une offre de moins', hot: true },
        { big: 'l’âge, toujours', l1: '« relevé il y a 3 heures », à côté de chaque prix', l2: 'le visiteur juge lui-même' },
      ],
      line1: 'Le visiteur qui se déplace pour un prix qui n’existe plus ne revient pas : la fraîcheur est le produit.',
      line2: 'Les sources lentes ne sont pas interdites : elles sont affichées avec leur âge, et sortent seules quand il dépasse le seuil.',
      note: 'Exemple construit · seuils de 6 et 48 heures ; à régler selon la vitesse à laquelle les prix bougent chez vous.',
    },
  },
  en: {
    appariement: {
      title: 'The same product, written three ways',
      alt: 'On the left, three offers from three shops for the same refrigerator, each with its own title: one writes the reference stuck together, another with hyphens, the third with spaces. In the middle, each offer is reduced to the same three keys: the brand, the reference with no spaces or hyphens, the capacity. On the right, a single product record where the three prices are listed, the lowest first: 96, 100, 104.',
      header: 'Constructed example · a fictitious product and brand, three shops · fictitious prices, on a base of 100',
      shops: ['shop 1', 'shop 2', 'shop 3'], price: 'price:',
      recTitle: 'A single product record', recSub: 'three offers, the lowest on top',
      band: 'You do not compare titles, you compare keys: the normalised brand and reference, then the barcode when there is one.',
      tiles: [
        { big: '3 spellings', l1: 'the same refrigerator, written three ways', l2: 'none of the three titles is wrong' },
        { big: '1 key', l1: 'the reference with no spaces or hyphens, in lower case', l2: 'rf400nf in all three cases', hot: true },
        { big: '1 offer in 4', l1: 'still has to be matched by hand, in the example', l2: 'a screen to do it fast' },
      ],
      line1: 'If two offers of the same product stay on two records, the comparison site no longer compares anything: it lists.',
      line2: 'If two different products end up on the same record, it compares wrongly: that is the error to avoid first.',
      note: 'Constructed example · fictitious brand, reference and prices; the mechanism is the same for a phone or a ticket.',
    },
    fraicheur: {
      title: 'A price has an age',
      alt: 'Eight shops and the age of their last price, in hours. The first four, fed by a feed or by the shop area, have a price under six hours old: it is shown. The next three, read from the site or typed in, have a price nine, twenty and forty-one hours old: it is shown with its age. The last has a price sixty-six hours old, beyond the forty-eight-hour threshold: it is hidden.',
      header: 'Constructed example · eight shops, the age of their last known price · two thresholds: 6 hours and 48 hours',
      shop: 'shop', sources: ['feed', 'shop area', 'read from the site', 'typed by the team'],
      ages: ['1 h', '2 h', '3 h', '5 h', '9 h', '20 h', '41 h', '66 h: hidden'],
      th: ['6 h', '48 h'], zones: ['fresh', 'shown with its age', 'hidden'],
      band: 'A price with no date is a promise nobody keeps: each price shown carries its age, and disappears when it is too old.',
      tiles: [
        { big: 'every 6 h', l1: 'feeds and readings run four times a day', l2: 'in the example' },
        { big: 'after 48 h: hidden', l1: 'a price nobody has confirmed is no longer shown', l2: 'better one offer fewer', hot: true },
        { big: 'the age, always', l1: '“read 3 hours ago”, next to each price', l2: 'the visitor judges for themselves' },
      ],
      line1: 'A visitor who travels for a price that no longer exists does not come back: freshness is the product.',
      line2: 'Slow sources are not forbidden: they are shown with their age, and drop out by themselves when it passes the threshold.',
      note: 'Constructed example · thresholds of 6 and 48 hours; to be set by how fast prices move in your market.',
    },
  },
  ar: {
    appariement: {
      title: 'المنتج نفسه، بثلاث كتابات',
      alt: 'في جهة، ثلاثة عروض من ثلاثة متاجر للثلاجة نفسها، ولكل واحد عنوانه: الأول يكتب المرجع ملتصقاً، الثاني بشرطات، والثالث بفراغات. وفي الوسط، كل عرض يُرَدّ إلى المفاتيح الثلاثة نفسها: العلامة، المرجع دون فراغات ولا شرطات، والسعة. وفي الجهة الأخرى، بطاقة منتج واحدة تُسرد فيها الأسعار الثلاثة، الأدنى أولاً: 96 ثم 100 ثم 104.',
      header: 'مثال مركَّب · منتج وعلامة خياليان، وثلاثة متاجر · أسعار خيالية، على أساس 100',
      shops: ['المتجر 1', 'المتجر 2', 'المتجر 3'], price: 'السعر:',
      recTitle: 'بطاقة منتج واحدة', recSub: 'ثلاثة عروض، والأدنى في المقدمة',
      band: 'لا تُقارَن العناوين، بل تُقارَن المفاتيح: العلامة والمرجع موحَّدان، ثم الرمز الشريطي حين يوجد.',
      tiles: [
        { big: '3 كتابات', l1: 'الثلاجة نفسها، مكتوبة بثلاث طرق', l2: 'ولا عنوان من الثلاثة خاطئ' },
        { big: 'مفتاح واحد', l1: 'المرجع دون فراغات ولا شرطات، بحروف صغيرة', l2: 'المرجع نفسه في الحالات الثلاث', hot: true },
        { big: 'عرض من 4', l1: 'يبقى للمطابقة باليد، في المثال', l2: 'شاشة لإنجازها بسرعة' },
      ],
      line1: 'إذا بقي عرضان للمنتج نفسه على بطاقتين، فالمقارِن لم يعد يقارن شيئاً: هو يسرد.',
      line2: 'وإذا وُجد منتجان مختلفان على البطاقة نفسها، فهو يقارن خطأً: وهو الخطأ الذي يُتجنَّب أولاً.',
      note: 'مثال مركَّب · علامة ومرجع وأسعار خيالية؛ والآلية نفسها لهاتف أو لتذكرة.',
    },
    fraicheur: {
      title: 'للسعر عمر',
      alt: 'ثمانية متاجر وعمر آخر سعر لكل واحد، بالساعات. الأربعة الأولى، التي يغذّيها تدفق أو فضاء المتجر، سعرها أقل من ست ساعات: يُعرض. والثلاثة الموالية، المقروءة من الموقع أو المُدخَلة، سعرها تسع وعشرون وإحدى وأربعون ساعة: يُعرض مع عمره. والأخير سعره ست وستون ساعة، فوق عتبة الثماني والأربعين ساعة: يُخفى.',
      header: 'مثال مركَّب · ثمانية متاجر، وعمر آخر سعر معروف لكل واحد · عتبتان: 6 ساعات و48 ساعة',
      shop: 'المتجر', sources: ['تدفق', 'فضاء المتجر', 'قراءة الموقع', 'إدخال الفريق'],
      ages: ['1 سا', '2 سا', '3 سا', '5 سا', '9 سا', '20 سا', '41 سا', '66 سا: مخفي'],
      th: ['6 سا', '48 سا'], zones: ['طازج', 'يُعرض مع عمره', 'مخفي'],
      band: 'السعر دون تاريخ وعد لا يفي به أحد: كل سعر معروض يحمل عمره، ويختفي حين يصير قديماً جداً.',
      tiles: [
        { big: 'كل 6 ساعات', l1: 'التدفقات والقراءات تُعاد أربع مرات في اليوم', l2: 'في المثال' },
        { big: 'بعد 48 ساعة: مخفي', l1: 'السعر الذي لم يؤكده أحد لم يعد يُعرض', l2: 'عرض أقل خير من سعر خاطئ', hot: true },
        { big: 'العمر، دائماً', l1: '«قُرئ منذ 3 ساعات»، بجانب كل سعر', l2: 'والزائر يحكم بنفسه' },
      ],
      line1: 'الزائر الذي يتنقل من أجل سعر لم يعد موجوداً لا يرجع: الطزاجة هي المنتج.',
      line2: 'والمصادر البطيئة ليست ممنوعة: تُعرض مع عمرها، وتخرج وحدها حين يتجاوز العتبة.',
      note: 'مثال مركَّب · عتبتان من 6 و48 ساعة؛ تُضبطان حسب سرعة تحرك الأسعار عندكم.',
    },
  },
};
