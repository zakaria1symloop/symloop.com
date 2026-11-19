// Bespoke animated figures for the 2027 "créer un site d'annonces" page.
//  cycle():   1 000 listings submitted in a month, 920 published after checking (80
//             refused: 45 duplicates, 20 off-category, 15 suspect). Thirty days later:
//             230 still valid, 310 sold, 380 abandoned. Without expiry the buyer sees
//             all 920, of which 690 lead nowhere; with expiry and a renewal reminder,
//             the 230 valid ones are shown and the rest is archived.
//  filtres(): one category, 140 listings; 38 in the chosen wilaya; year filter: 22
//             match, 7 are older, 9 have no year entered; price filter on the 22: 9
//             match, 6 are above, 7 say "price on request". 16 listings are invisible
//             because a field is empty.
// Numbers are drawn in their own text elements, direction="ltr".
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
const grp = (n, sep) => String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, sep);
const poly = (c, pts, color, sw, dash) => `<polyline points="${pts.map(([x, y]) => `${c.X(x)},${y}`).join(' ')}" fill="none" stroke="${color}" stroke-width="${sw || 1}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const arrow = (c, x1, x2, y, color) => poly(c, [[x1 + 6, y], [x2 - 6, y]], color, 1.5) + poly(c, [[x2 - 12, y - 4], [x2 - 6, y], [x2 - 12, y + 4]], color, 1.5);

// one month of listings on a vertical site, then the same listings thirty days later
const POSTED = 1000; const REFUSED = 80; const VALID = 230; const SOLD = 310; const GONE = 380;

export function cycle(t, rtl) {
  const c = ctx(rtl); const P = 'cy'; const css = []; const H = 686; const sep = t.sep;
  const live = POSTED - REFUSED;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + '</g>';
  const box = (x, label, value, id, at, hot) => `<g style="${pop(css, P, id, at)}">` + rect(c, x, 162, 200, 50, { stroke: hot ? C.accent : C.fg55, fill: hot ? TINT : C.fill }) + text(c, x + 10, 179, label, { size: 8.5, font: 'mono', fill: C.fg55 }) + ltrSpans(c.RX(x, 200) + 100, 201, [[value, hot ? C.accent : C.fg, true]], 15, 'middle') + '</g>';
  s += box(96, t.bPosted, grp(POSTED, sep), 'b1', 5, false);
  s += `<g style="animation:${show(css, P, 'a1', 8)}">` + arrow(c, 296, 340, 187, C.fg70) + '</g>';
  s += box(340, t.bCheck, grp(REFUSED, sep), 'b2', 9, false);
  s += `<g style="animation:${show(css, P, 'a2', 12)}">` + arrow(c, 540, 584, 187, C.fg70) + '</g>';
  s += box(584, t.bLive, grp(live, sep), 'b3', 13, true);
  s += `<g style="animation:${show(css, P, 'rf', 11)}">` + text(c, 806, 181, t.refused1, { size: 9.5, fill: C.fg70 }) + text(c, 806, 199, t.refused2, { size: 9.5, fill: C.fg70 }) + '</g>';
  // thirty days later, what the buyer sees
  const bar = (y, label, segs, id, at) => {
    let x = 96; let g = `<g style="animation:${show(css, P, `${id}l`, at)}">` + text(c, 96, y - 8, label, { size: 10.5, fill: C.fg, weight: 500 }) + '</g>';
    segs.forEach(([n, st, col, shown], i) => {
      g += `<g style="${growX(css, P, `${id}${i}`, at + 1 + i * 2.5, 2.2, rtl)}">` + rect(c, x, y, n, 30, st) + '</g>';
      g += `<g style="animation:${show(css, P, `${id}n${i}`, at + 3 + i * 2.5)}">` + num(c, x + n / 2, y + 20, String(n), { size: 12, bold: true, fill: col }) + (shown ? text(c, x, y + 46, shown, { size: 9.5, fill: C.fg70 }) : '') + '</g>';
      x += n;
    });
    return g;
  };
  s += bar(254, t.rowA, [[VALID, { stroke: C.fg, fill: C.fg }, '#000', t.segValid], [SOLD, { stroke: C.accent, fill: TINT }, C.accent, t.segSold], [GONE, { stroke: C.accent, fill: TINT, dash: '4 3' }, C.accent, t.segGone]], 'u', 18);
  s += bar(346, t.rowB, [[VALID, { stroke: C.fg, fill: C.fg }, '#000', t.segShown], [SOLD, { stroke: C.fg35, fill: C.fill }, C.fg55, t.segArch], [GONE, { stroke: C.fg35, fill: C.fill }, C.fg55, t.segExp]], 'v', 30);
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bd', 42)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 46);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// one category through three filters; states: 1 matches, 0 does not, -1 field left empty
const IN_WILAYA = 38;
const YEAR = { ok: 22, no: 7, empty: 9 };
const PRICE = { ok: 9, no: 6, empty: 7 };

export function filtres(t, rtl) {
  const c = ctx(rtl); const P = 'fq'; const css = []; const H = 686;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + '</g>';
  const st = { ok: { stroke: C.fg, fill: C.fg }, no: { stroke: C.fg35, fill: C.fill }, empty: { stroke: C.accent, fill: TINT, dash: '3 2' } };
  const row = (y, label, sub, counts, id, at) => {
    let g = `<g style="animation:${show(css, P, `${id}l`, at)}">` + text(c, 96, y + 14, label, { size: 11, fill: C.fg, weight: 500 }) + text(c, 96, y + 31, sub, { size: 9, font: 'mono', fill: C.fg55 }) + '</g>';
    let k = 0;
    ['ok', 'empty', 'no'].forEach((kind) => {
      for (let i = 0; i < (counts[kind] || 0); i++) { g += `<g style="${pop(css, P, `${id}${k}`, at + 1 + k * 0.22)}">` + rect(c, 330 + k * 19, y + 6, 15, 15, st[kind]) + '</g>'; k++; }
    });
    return g;
  };
  s += `<g style="animation:${show(css, P, 'r0', 5)}">` + text(c, 96, 182, t.r0, { size: 11, fill: C.fg, weight: 500 }) + num(c, 362, 182, '140', { size: 14, bold: true }) + text(c, 394, 182, t.r0sub, { size: 9.5, fill: C.fg70 }) + '</g>';
  s += row(206, t.r1, t.r1sub, { ok: IN_WILAYA }, 'w', 8);
  s += row(264, t.r2, t.r2sub, YEAR, 'y', 18);
  s += row(322, t.r3, t.r3sub, PRICE, 'p', 28);
  s += `<g style="animation:${show(css, P, 'cn', 36)}">` + num(c, 1084, 221, String(IN_WILAYA), { size: 13, bold: true }) + num(c, 1084, 279, String(YEAR.ok), { size: 13, bold: true }) + num(c, 1084, 337, String(PRICE.ok), { size: 13, bold: true, fill: C.fg }) + '</g>';
  const lg = [[st.ok, t.lgOk], [st.empty, t.lgEmpty], [st.no, t.lgNo]];
  lg.forEach(([style, label], i) => { const lx = 330 + i * 250; s += `<g style="animation:${show(css, P, `g${i}`, 38 + i)}">` + rect(c, lx, 388, 13, 13, style) + text(c, lx + 21, 399, label, { size: 9.5, fill: i === 1 ? C.accent : C.fg70 }) + '</g>'; });
  s += `<g style="animation:${show(css, P, 'sm', 41)}">` + text(c, 96, 432, t.sum, { size: 10.5, fill: C.accent, weight: 500 }) + '</g>';
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
    cycle: {
      sep: ' ',
      title: 'Mille annonces déposées : combien sont encore vraies ?',
      alt: 'Sur 1 000 annonces déposées en un mois, 80 sont refusées à la vérification et 920 publiées. Trente jours plus tard, 230 sont encore valables, 310 concernent un bien vendu et 380 sont abandonnées. Sans expiration, l’acheteur voit les 920, dont 690 ne mènent à rien. Avec une expiration à trente jours et une relance, il voit les 230 valables ; les autres sont archivées.',
      header: 'Exemple construit · un site d’annonces spécialisé, un mois de dépôts, puis les mêmes annonces trente jours plus tard',
      bPosted: 'annonces déposées', bCheck: 'refusées à la vérification', bLive: 'annonces publiées',
      refused1: '45 doublons, 20 hors catégorie,', refused2: '15 suspectes',
      rowA: 'Trente jours plus tard, sans expiration : ce que voit l’acheteur', rowB: 'Avec expiration à trente jours et relance : ce que voit l’acheteur',
      segValid: 'encore valables', segSold: 'bien déjà vendu, annonce restée', segGone: 'abandonnées, personne ne répond',
      segShown: 'affichées, toutes valables', segArch: 'marquées vendues, archivées', segExp: 'expirées, retirées',
      band: 'Un site d’annonces ne se juge pas au nombre d’annonces affichées, mais au nombre d’annonces encore vraies. Sans expiration, les mortes s’accumulent.',
      tiles: [
        { big: '920', l1: 'annonces publiées sur 1 000 déposées', l2: '80 refusées : doublons, hors catégorie, suspectes' },
        { big: '3 sur 4', l1: 'des annonces affichées ne mènent à rien', l2: '690 sur 920, trente jours après, sans expiration', hot: true },
        { big: '230', l1: 'annonces vraiment disponibles', l2: 'les seules à montrer' },
      ],
      line1: 'À trente jours, l’annonce expire sauf si l’annonceur la renouvelle d’un geste ; la relance pose aussi la question : « c’est vendu ? ».',
      line2: 'Un acheteur qui appelle trois fois pour rien ne revient pas : la fraîcheur des annonces est le premier service rendu.',
      note: 'Exemple construit · proportions fictives, à mesurer sur vos propres annonces.',
    },
    filtres: {
      title: 'Un filtre ne trouve que ce qui est dans un champ',
      alt: 'Une catégorie de 140 annonces passée par trois filtres. Dans la wilaya choisie : 38 annonces. Filtre sur l’année : 22 répondent, 7 sont plus anciennes et 9 n’ont pas d’année saisie. Filtre sur le prix, parmi les 22 : 9 répondent, 6 sont au-dessus et 7 indiquent un prix à discuter. Neuf annonces s’affichent ; seize sont invisibles parce qu’un champ est vide.',
      header: 'Exemple construit · une catégorie d’engins d’occasion, une recherche avec trois filtres',
      r0: 'Catégorie : chargeuses', r0sub: 'annonces dans tout le pays',
      r1: 'Wilaya choisie', r1sub: 'champ obligatoire au dépôt',
      r2: 'Année : 2015 ou plus', r2sub: 'champ facultatif',
      r3: 'Prix : plafond fixé', r3sub: '« prix à discuter » accepté',
      lgOk: 'répond au filtre', lgEmpty: 'invisible : le champ est vide', lgNo: 'ne répond pas au filtre',
      sum: '9 annonces affichées ; 16 autres étaient peut-être les bonnes, et l’acheteur ne les verra pas.',
      band: 'L’année écrite dans la description, ou le prix « à discuter », rendent l’annonce invisible au moment précis où l’acheteur cherche.',
      tiles: [
        { big: '9 annonces', l1: 'répondent aux trois filtres', l2: 'chargeuse, wilaya, 2015 ou plus, prix plafonné' },
        { big: '16 invisibles', l1: 'année ou prix non saisis', l2: '9 sans année + 7 « prix à discuter »', hot: true },
        { big: '2 champs', l1: 'à rendre obligatoires au dépôt', l2: 'et les 16 redeviennent trouvables' },
      ],
      line1: 'Le formulaire de dépôt est le moteur de recherche : chaque champ obligatoire est un filtre qui marchera.',
      line2: 'Trop de champs, et l’annonceur abandonne : cinq ou six par catégorie, ceux par lesquels on cherche vraiment.',
      note: 'Exemple construit · nombres fictifs ; chaque carré est une annonce.',
    },
  },
  en: {
    cycle: {
      sep: ',',
      title: 'A thousand listings posted: how many are still true?',
      alt: 'Out of 1,000 listings posted in a month, 80 are refused at checking and 920 published. Thirty days later, 230 are still valid, 310 are for an item already sold and 380 are abandoned. Without expiry, the buyer sees all 920, of which 690 lead nowhere. With expiry at thirty days and a reminder, the buyer sees the 230 valid ones; the others are archived.',
      header: 'Constructed example · a specialised classifieds site, one month of listings, then the same listings thirty days later',
      bPosted: 'listings posted', bCheck: 'refused at checking', bLive: 'listings published',
      refused1: '45 duplicates, 20 off-category,', refused2: '15 suspect',
      rowA: 'Thirty days later, without expiry: what the buyer sees', rowB: 'With expiry at thirty days and a reminder: what the buyer sees',
      segValid: 'still valid', segSold: 'item already sold, listing left up', segGone: 'abandoned, nobody answers',
      segShown: 'shown, all valid', segArch: 'marked sold, archived', segExp: 'expired, withdrawn',
      band: 'A classifieds site is not judged by the number of listings shown, but by the number of listings that are still true. Without expiry, the dead ones pile up.',
      tiles: [
        { big: '920', l1: 'listings published out of 1,000 posted', l2: '80 refused: duplicates, off-category, suspect' },
        { big: '3 in 4', l1: 'of the listings shown lead nowhere', l2: '690 of 920, thirty days later, without expiry', hot: true },
        { big: '230', l1: 'listings really available', l2: 'the only ones worth showing' },
      ],
      line1: 'At thirty days the listing expires unless the advertiser renews it in one gesture; the reminder also asks: “is it sold?”.',
      line2: 'A buyer who calls three times for nothing does not come back: fresh listings are the first service rendered.',
      note: 'Constructed example · fictitious proportions, to be measured on your own listings.',
    },
    filtres: {
      title: 'A filter only finds what is in a field',
      alt: 'A category of 140 listings put through three filters. In the chosen wilaya: 38 listings. Year filter: 22 match, 7 are older and 9 have no year entered. Price filter, among the 22: 9 match, 6 are above and 7 say price on request. Nine listings are shown; sixteen are invisible because a field is empty.',
      header: 'Constructed example · a category of used machinery, one search with three filters',
      r0: 'Category: loaders', r0sub: 'listings across the country',
      r1: 'Chosen wilaya', r1sub: 'required field at posting',
      r2: 'Year: 2015 or later', r2sub: 'optional field',
      r3: 'Price: ceiling set', r3sub: '“price on request” accepted',
      lgOk: 'matches the filter', lgEmpty: 'invisible: the field is empty', lgNo: 'does not match the filter',
      sum: '9 listings shown; 16 others may have been the right ones, and the buyer will not see them.',
      band: 'The year written in the description, or a price “on request”, makes the listing invisible at the very moment the buyer is searching.',
      tiles: [
        { big: '9 listings', l1: 'match all three filters', l2: 'loader, wilaya, 2015 or later, price ceiling' },
        { big: '16 invisible', l1: 'year or price not entered', l2: '9 with no year + 7 “price on request”', hot: true },
        { big: '2 fields', l1: 'to make required at posting', l2: 'and the 16 can be found again' },
      ],
      line1: 'The posting form is the search engine: each required field is a filter that will work.',
      line2: 'Too many fields, and the advertiser gives up: five or six per category, the ones people really search by.',
      note: 'Constructed example · fictitious numbers; each square is one listing.',
    },
  },
  ar: {
    cycle: {
      sep: ' ',
      title: 'ألف إعلان مودَع: كم منها ما زال صحيحاً؟',
      alt: 'من ألف إعلان مودَع في شهر، 80 تُرفض عند المراجعة و920 تُنشر. وبعد ثلاثين يوماً، 230 ما زالت صالحة، 310 تخص شيئاً بيع، و380 متروكة. دون انتهاء صلاحية، يرى المشتري الـ920 كلها، ومنها 690 لا تؤدي إلى شيء. ومع انتهاء صلاحية عند ثلاثين يوماً وتذكير، يرى الـ230 الصالحة؛ والأخرى تؤرشَف.',
      header: 'مثال مركَّب · موقع إعلانات متخصص، شهر من الإيداعات، ثم الإعلانات نفسها بعد ثلاثين يوماً',
      bPosted: 'إعلانات مودَعة', bCheck: 'مرفوضة عند المراجعة', bLive: 'إعلانات منشورة',
      refused1: '45 مكرَّراً، 20 خارج الصنف،', refused2: 'و15 مشبوهاً',
      rowA: 'بعد ثلاثين يوماً، دون انتهاء صلاحية: ما يراه المشتري', rowB: 'مع انتهاء صلاحية عند ثلاثين يوماً وتذكير: ما يراه المشتري',
      segValid: 'ما زالت صالحة', segSold: 'بيع الشيء، وبقي الإعلان', segGone: 'متروكة، لا أحد يجيب',
      segShown: 'معروضة، وكلها صالحة', segArch: 'أُشير إلى بيعها، وأُرشفت', segExp: 'انتهت صلاحيتها، وسُحبت',
      band: 'موقع الإعلانات لا يُحكَم بعدد الإعلانات المعروضة، بل بعدد الإعلانات التي ما زالت صحيحة. ودون انتهاء صلاحية، تتراكم الميتة.',
      tiles: [
        { big: '920', l1: 'إعلاناً منشوراً من ⁦1 000⁩ مودَع', l2: '80 مرفوضاً: مكرَّر، خارج الصنف، ومشبوه' },
        { big: '3 من 4', l1: 'من الإعلانات المعروضة لا تؤدي إلى شيء', l2: '690 من 920، بعد ثلاثين يوماً، دون انتهاء صلاحية', hot: true },
        { big: '230', l1: 'إعلاناً متاحاً فعلاً', l2: 'وهي وحدها التي تُعرض' },
      ],
      line1: 'عند ثلاثين يوماً ينتهي الإعلان إلا إذا جدّده المُعلِن بحركة واحدة؛ والتذكير يطرح كذلك السؤال: «هل بيع؟».',
      line2: 'المشتري الذي يتصل ثلاث مرات دون جدوى لا يعود: حداثة الإعلانات أول خدمة تُقدَّم.',
      note: 'مثال مركَّب · نسب خيالية، تُقاس على إعلاناتكم.',
    },
    filtres: {
      title: 'الفلتر لا يجد إلا ما هو في خانة',
      alt: 'صنف من 140 إعلاناً يمرّ بثلاثة فلاتر. في الولاية المختارة: 38 إعلاناً. فلتر السنة: 22 توافق، 7 أقدم، و9 لم تُدخَل سنتها. فلتر السعر، من الـ22: 9 توافق، 6 فوق الحد، و7 تقول إن السعر للنقاش. تُعرض تسعة إعلانات؛ وستة عشر غير مرئية لأن خانة فارغة.',
      header: 'مثال مركَّب · صنف من الآليات المستعملة، وبحث بثلاثة فلاتر',
      r0: 'الصنف: المحمِّلات', r0sub: 'إعلاناً في كل البلاد',
      r1: 'الولاية المختارة', r1sub: 'خانة إجبارية عند الإيداع',
      r2: 'السنة: 2015 فما بعد', r2sub: 'خانة اختيارية',
      r3: 'السعر: حد أقصى محدد', r3sub: '«السعر للنقاش» مقبول',
      lgOk: 'يوافق الفلتر', lgEmpty: 'غير مرئي: الخانة فارغة', lgNo: 'لا يوافق الفلتر',
      sum: '9 إعلانات معروضة؛ و16 أخرى ربما كانت هي المناسبة، ولن يراها المشتري.',
      band: 'السنة المكتوبة في الوصف، أو السعر «للنقاش»، يجعلان الإعلان غير مرئي في اللحظة نفسها التي يبحث فيها المشتري.',
      tiles: [
        { big: '9 إعلانات', l1: 'توافق الفلاتر الثلاثة', l2: 'محمِّلة، الولاية، 2015 فما بعد، وسعر محدود' },
        { big: '16 غير مرئية', l1: 'السنة أو السعر لم يُدخَلا', l2: '9 دون سنة + 7 «السعر للنقاش»', hot: true },
        { big: 'خانتان', l1: 'تُجعلان إجباريتين عند الإيداع', l2: 'فتعود الـ16 قابلة للعثور عليها' },
      ],
      line1: 'استمارة الإيداع هي محرّك البحث: كل خانة إجبارية فلتر سيشتغل.',
      line2: 'خانات كثيرة، فيتخلى المُعلِن: خمس أو ست لكل صنف، التي يُبحث بها فعلاً.',
      note: 'مثال مركَّب · أعداد خيالية؛ وكل مربع إعلان.',
    },
  },
};
