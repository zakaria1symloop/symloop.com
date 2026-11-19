// Bespoke animated figures for the 2027 "organiser un entrepôt" page.
//  chemin():  the same six-line order picked in the same four-aisle depot, stored two
//             ways. Stored as goods arrived: four aisles walked, 192 m. Stored by how
//             often items leave: the busiest ones at the mouth of the first two aisles,
//             120 m. Aisles 10 m apart and 20 m deep, there and back in each aisle.
//  erreurs(): 1 000 order lines picked from a paper list, then with a scan of the
//             location and the item: wrong item 9 then 0, wrong quantity 7 then 3,
//             forgotten line 4 then 0; 20 errors against 3.
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

// a four-aisle depot: aisles 10 m apart, 20 m deep; picks as [aisle index, depth in metres]
const AISLES = [0, 10, 20, 30];
const BEFORE = [[0, 18], [1, 12], [1, 4], [2, 20], [3, 6], [3, 16]];
const AFTER = [[0, 2], [0, 4], [1, 3], [1, 6], [1, 10], [3, 16]];
const SX = 6; const SY = 9; const FRONT = 424;
function route(picks) {
  const deep = AISLES.map((_, i) => Math.max(0, ...picks.filter((p) => p[0] === i).map((p) => p[1])));
  const pts = [[-6, 0], [0, 0]]; let len = 0; let last = 0;
  AISLES.forEach((ax, i) => { if (!deep[i]) return; pts.push([ax, 0], [ax, deep[i]], [ax, 0]); len += 2 * deep[i]; last = ax; });
  pts.push([-6, 0]);
  return { pts, metres: 2 * last + len };
}
function plan(c, css, P, id, x0, picks, at, zone) {
  const px = (m) => x0 + m * SX; const py = (d) => FRONT - d * SY;
  let s = '';
  AISLES.forEach((ax) => { s += rect(c, px(ax) + 10, py(20), 22, 20 * SY - 8, { stroke: C.line2, fill: C.fill }); });
  s += rect(c, x0 - 46, FRONT - 10, 30, 20, { stroke: C.fg55, fill: C.fill });
  if (zone) s += rect(c, x0 - 8, py(6.5), 60 + 44, 6.5 * SY + 6, { stroke: C.accent, fill: TINT, dash: '4 3' });
  const r = route(picks);
  const q = r.pts.map(([m, d]) => [c.X(px(m)), py(d)]);
  let len = 0; for (let i = 1; i < q.length; i++) len += Math.hypot(q[i][0] - q[i - 1][0], q[i][1] - q[i - 1][1]);
  s += `<polyline points="${q.map((p) => `${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ')}" fill="none" stroke="${C.accent}" stroke-width="2" stroke-linejoin="round" stroke-dasharray="${len.toFixed(0)}" style="animation:${drawLine(css, P, `${id}p`, at, 9, len)}"/>`;
  picks.forEach(([i, d], k) => { s += `<g style="${pop(css, P, `${id}d${k}`, at + 1 + k * 1.2)}"><circle cx="${c.X(px(AISLES[i])).toFixed(1)}" cy="${py(d).toFixed(1)}" r="4.5" fill="${C.fg}"/></g>`; });
  return s;
}

export function chemin(t, rtl) {
  const c = ctx(rtl); const P = 'wh'; const css = []; const H = 686;
  const a = route(BEFORE).metres; const b = route(AFTER).metres;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + text(c, 96, 172, t.legend, { size: 8.5, font: 'mono', fill: C.fg55 }) + `<polyline points="${c.X(640)},190 ${c.X(640)},436" fill="none" stroke="${C.line2}" stroke-width="1"/>` + text(c, 94, 408, t.dock, { size: 8.5, font: 'mono', fill: C.fg55 }) + text(c, 654, 408, t.dock, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>';
  s += plan(c, css, P, 'a', 140, BEFORE, 6, false);
  const block = (x, o, m, id, at, hot) => `<g style="animation:${show(css, P, id, at)}">` + text(c, x, 262, o.title, { size: 11, fill: C.fg, weight: 500 }) + text(c, x, 280, o.sub, { size: 9.5, fill: C.fg70 }) + ltrSpans(c.X(x) + (rtl ? -34 : 34), 330, [[`${m} m`, hot ? C.accent : C.fg, true]], 24, 'middle') + text(c, x, 356, o.l2, { size: 10, fill: C.fg }) + text(c, x, 374, o.l3, { size: 9, font: 'mono', fill: C.fg55 }) + '</g>';
  s += block(380, t.a, a, 'ta', 17, false);
  s += plan(c, css, P, 'b', 700, AFTER, 22, true);
  s += `<g style="animation:${show(css, P, 'za', 22)}">` + text(c, 692, 444, t.zoneA, { size: 8.5, font: 'mono', fill: C.accent }) + '</g>';
  s += block(940, t.b, b, 'tb', 33, true);
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bd', 38)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 42);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// errors per 1 000 lines: [made, still reaching the customer once the location and the item are scanned]
const ERR = [[9, 0], [7, 3], [4, 0]];

export function erreurs(t, rtl) {
  const c = ctx(rtl); const P = 'ek'; const css = []; const H = 686;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const hd = (x, str) => text(c, x, 172, str, { size: 8.5, font: 'mono', fill: C.fg55 });
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + hd(96, t.colType) + hd(350, t.colPaper) + hd(720, t.colScan) + `<polyline points="${c.X(96)},392 ${c.X(1104)},392" fill="none" stroke="${C.line2}" stroke-width="1"/>` + '</g>';
  let made = 0; let left = 0;
  ERR.forEach(([n, rest], i) => {
    const y = 196 + i * 64; const at = 6 + i * 8;
    made += n; left += rest;
    s += `<g style="animation:${show(css, P, `l${i}`, at)}">` + text(c, 96, y + 16, t.types[i].name, { size: 11.5, fill: C.fg, weight: 500 }) + text(c, 96, y + 34, t.types[i].sub, { size: 9, font: 'mono', fill: C.fg55 }) + '</g>';
    for (let k = 0; k < n; k++) {
      s += `<g style="${pop(css, P, `a${i}${k}`, at + 1 + k * 0.3)}">` + rect(c, 350 + k * 26, y + 4, 18, 18, { stroke: C.accent, fill: C.accent }) + '</g>';
      const caught = k >= rest;
      s += `<g style="${pop(css, P, `b${i}${k}`, at + 4 + k * 0.3)}">` + rect(c, 720 + k * 26, y + 4, 18, 18, { stroke: caught ? C.fg35 : C.accent, fill: caught ? C.fill : C.accent }) + '</g>';
    }
    s += `<g style="animation:${show(css, P, `v${i}`, at + 6)}">` + num(c, 350 + n * 26 + 16, y + 18, String(n), { size: 12, bold: true, fill: C.accent }) + num(c, 720 + n * 26 + 16, y + 18, String(rest), { size: 12, bold: true, fill: rest ? C.accent : C.fg55 }) + '</g>';
  });
  s += `<g style="animation:${show(css, P, 'tt', 32)}">` + text(c, 96, 420, t.total, { size: 11.5, fill: C.fg, weight: 500 }) + num(c, 368, 421, String(made), { size: 17, bold: true, fill: C.accent }) + text(c, 398, 420, t.totalPaper, { size: 10, fill: C.fg70 }) + num(c, 738, 421, String(left), { size: 17, bold: true, fill: C.accent }) + text(c, 768, 420, t.totalScan, { size: 10, fill: C.fg70 }) + '</g>';
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
    chemin: {
      title: 'La même commande, le même dépôt : 192 mètres ou 120',
      alt: 'La même commande de six lignes préparée dans le même dépôt à quatre allées. Quand les articles sont rangés par ordre d’arrivée, le trajet parcourt les quatre allées jusqu’au fond : 192 mètres. Quand les articles les plus sortis sont à l’entrée des deux premières allées, le trajet fait 120 mètres.',
      header: 'Exemple construit · un dépôt à quatre allées, une commande de six lignes, deux façons de ranger',
      legend: 'schéma du dépôt vu de dessus · un point : une ligne à prélever · le trait : le trajet, aller-retour dans chaque allée', dock: 'quai', zoneA: 'articles les plus sortis',
      a: { title: 'Rangé par ordre d’arrivée', sub: 'chaque article là où il y avait de la place', l2: 'pour une commande de 6 lignes', l3: '15,4 km par jour à 80 commandes' },
      b: { title: 'Rangé par fréquence', sub: 'les plus sortis près du quai', l2: 'pour la même commande', l3: '9,6 km à 80 commandes' },
      band: 'La même commande de six lignes, dans le même dépôt : seul le rangement change. Les articles les plus sortis passent à l’entrée des deux premières allées.',
      tiles: [
        { big: '192 m', l1: 'pour 6 lignes, articles rangés à l’arrivée', l2: '4 allées parcourues, jusqu’au fond' },
        { big: '120 m', l1: 'la même commande, articles classés', l2: '−37 % de marche, sans rien acheter', hot: true },
        { big: '5,8 km', l1: 'de moins par jour, à 80 commandes', l2: '15,4 km contre 9,6 km' },
      ],
      line1: 'Le classement se tire des sorties, pas de l’intuition : quelques articles font l’essentiel des lignes, et ce sont eux que l’on rapproche du quai.',
      line2: 'Une commande faite seulement d’articles courants ne dépasse plus la deuxième allée : 48 m au lieu de 192.',
      note: 'Exemple construit · allées à 10 m l’une de l’autre, 20 m de profondeur ; distances calculées sur ce schéma.',
    },
    erreurs: {
      title: 'Mille lignes préparées : à la feuille, puis au scan',
      alt: 'Mille lignes de commande préparées de deux façons. À la feuille : 9 mauvais articles, 7 mauvaises quantités et 4 lignes oubliées, soit 20 erreurs qui partent toutes chez le client. Avec le scan de l’emplacement et de l’article : il reste 3 erreurs de quantité ; les 17 autres sont arrêtées au moment du geste.',
      header: 'Exemple construit · 1 000 lignes de commande, les mêmes erreurs, avec et sans contrôle au moment du prélèvement',
      colType: 'type d’erreur', colPaper: 'à la feuille : toutes partent', colScan: 'avec scan de l’emplacement et de l’article',
      types: [
        { name: 'Mauvais article', sub: 'la référence voisine' },
        { name: 'Mauvaise quantité', sub: 'dix au lieu de douze' },
        { name: 'Ligne oubliée', sub: 'la feuille tournée trop vite' },
      ],
      total: 'Total', totalPaper: 'erreurs chez le client', totalScan: 'erreurs chez le client',
      band: 'Les mêmes 1 000 lignes, préparées à la feuille puis au scan : le scan n’arrête pas tout, mais il arrête ce qui se voit à l’adresse et au code.',
      tiles: [
        { big: '20 erreurs', l1: 'sur 1 000 lignes préparées à la feuille', l2: '2 % des lignes, toutes parties' },
        { big: '3 erreurs', l1: 'sur 1 000 lignes préparées au scan', l2: '0,3 % : des quantités', hot: true },
        { big: '17 arrêtées', l1: 'avant le quai, au moment du geste', l2: '9 articles, 4 oublis, 4 quantités' },
      ],
      line1: 'Le scan ne rend personne plus attentif : il rend l’erreur impossible à valider. Le mauvais emplacement ou le mauvais article refuse la ligne.',
      line2: 'Restent les quantités : elles se réduisent en comptant des cartons plutôt que des pièces, et par un contrôle au poids du colis.',
      note: 'Exemple construit · taux d’erreur fictifs, à mesurer chez vous sur un mois de retours et de réclamations.',
    },
  },
  en: {
    chemin: {
      title: 'The same order, the same depot: 192 metres or 120',
      alt: 'The same six-line order picked in the same four-aisle depot. When items are stored in order of arrival, the route walks all four aisles to the far end: 192 metres. When the items that leave most often sit at the mouth of the first two aisles, the route is 120 metres.',
      header: 'Constructed example · a four-aisle depot, a six-line order, two ways of storing',
      legend: 'plan of the depot seen from above · a dot: a line to pick · the line: the route, there and back in each aisle', dock: 'dock', zoneA: 'items that leave most often',
      a: { title: 'Stored in order of arrival', sub: 'each item wherever there was room', l2: 'for a six-line order', l3: '15.4 km a day at 80 orders' },
      b: { title: 'Stored by frequency', sub: 'the busiest items near the dock', l2: 'for the same order', l3: '9.6 km at 80 orders' },
      band: 'The same six-line order, in the same depot: only the storage changes. The items that leave most often move to the mouth of the first two aisles.',
      tiles: [
        { big: '192 m', l1: 'for 6 lines, items stored as they arrived', l2: '4 aisles walked, to the far end' },
        { big: '120 m', l1: 'the same order, items ranked', l2: '−37% walking, with nothing bought', hot: true },
        { big: '5.8 km', l1: 'less per day, at 80 orders', l2: '15.4 km against 9.6 km' },
      ],
      line1: 'The ranking comes from what leaves, not from intuition: a few items make up most of the lines, and those are the ones moved closer to the dock.',
      line2: 'An order made only of everyday items no longer goes past the second aisle: 48 m instead of 192.',
      note: 'Constructed example · aisles 10 m apart, 20 m deep; distances calculated on this plan.',
    },
    erreurs: {
      title: 'A thousand lines picked: from a sheet, then with a scan',
      alt: 'A thousand order lines picked in two ways. From a sheet: 9 wrong items, 7 wrong quantities and 4 forgotten lines, that is 20 errors that all reach the customer. With a scan of the location and the item: 3 quantity errors remain; the other 17 are stopped at the moment of the gesture.',
      header: 'Constructed example · 1,000 order lines, the same errors, with and without a check at the moment of picking',
      colType: 'type of error', colPaper: 'from a sheet: all of them leave', colScan: 'with a scan of the location and the item',
      types: [
        { name: 'Wrong item', sub: 'the neighbouring reference' },
        { name: 'Wrong quantity', sub: 'ten instead of twelve' },
        { name: 'Forgotten line', sub: 'the sheet turned too fast' },
      ],
      total: 'Total', totalPaper: 'errors at the customer', totalScan: 'errors at the customer',
      band: 'The same 1,000 lines, picked from a sheet then with a scan: the scan does not stop everything, but it stops what shows at the address and at the code.',
      tiles: [
        { big: '20 errors', l1: 'in 1,000 lines picked from a sheet', l2: '2% of lines, all gone out' },
        { big: '3 errors', l1: 'in 1,000 lines picked with a scan', l2: '0.3%: quantities', hot: true },
        { big: '17 stopped', l1: 'before the dock, at the moment of the gesture', l2: '9 items, 4 omissions, 4 quantities' },
      ],
      line1: 'The scan makes nobody more attentive: it makes the error impossible to confirm. The wrong location or the wrong item refuses the line.',
      line2: 'Quantities remain: they are reduced by counting cartons rather than pieces, and by checking the parcel’s weight.',
      note: 'Constructed example · fictitious error rates, to be measured in your depot over a month of returns and complaints.',
    },
  },
  ar: {
    chemin: {
      title: 'الطلبية نفسها، المستودع نفسه: 192 متراً أو 120',
      alt: 'الطلبية نفسها من ستة أسطر، محضَّرة في المستودع نفسه ذي الأربعة ممرات. حين تُرتَّب السلع حسب ترتيب وصولها، يقطع المسار الممرات الأربعة حتى آخرها: 192 متراً. وحين تكون السلع الأكثر خروجاً في مدخل الممرين الأولين، يكون المسار 120 متراً.',
      header: 'مثال مركَّب · مستودع بأربعة ممرات، طلبية من ستة أسطر، وطريقتان في الترتيب',
      legend: 'مخطط المستودع من فوق · النقطة: سطر يُسحب · الخط: المسار، ذهاباً وإياباً في كل ممر', dock: 'الرصيف', zoneA: 'السلع الأكثر خروجاً',
      a: { title: 'مرتَّب حسب ترتيب الوصول', sub: 'كل سلعة حيث وُجد مكان', l2: 'لطلبية من 6 أسطر', l3: '⁦15,4⁩ كلم في اليوم لـ80 طلبية' },
      b: { title: 'مرتَّب حسب التكرار', sub: 'الأكثر خروجاً قرب الرصيف', l2: 'للطلبية نفسها', l3: '⁦9,6⁩ كلم لـ80 طلبية' },
      band: 'الطلبية نفسها من ستة أسطر، في المستودع نفسه: الترتيب وحده يتغير. السلع الأكثر خروجاً تنتقل إلى مدخل الممرين الأولين.',
      tiles: [
        { big: '192 متراً', l1: 'لـ6 أسطر، والسلع مرتَّبة عند وصولها', l2: '4 ممرات تُقطع، حتى آخرها' },
        { big: '120 متراً', l1: 'الطلبية نفسها، والسلع مصنَّفة', l2: '⁦−37 %⁩ من المشي، دون شراء شيء', hot: true },
        { big: '⁦5,8⁩ كلم', l1: 'أقل في اليوم، لـ80 طلبية', l2: '⁦15,4⁩ كلم مقابل ⁦9,6⁩ كلم' },
      ],
      line1: 'التصنيف يُستخرج من المخرجات، لا من الحدس: سلع قليلة تصنع معظم الأسطر، وهي التي تُقرَّب من الرصيف.',
      line2: 'طلبية مكوَّنة من السلع الجارية فقط لا تتجاوز الممر الثاني: 48 متراً بدل 192.',
      note: 'مثال مركَّب · الممرات على بعد 10 أمتار بعضها من بعض، وبعمق 20 متراً؛ المسافات محسوبة على هذا المخطط.',
    },
    erreurs: {
      title: 'ألف سطر محضَّر: بالورقة، ثم بالمسح',
      alt: 'ألف سطر طلبية محضَّرة بطريقتين. بالورقة: 9 سلع خاطئة، 7 كميات خاطئة، و4 أسطر منسية، أي 20 خطأ تذهب كلها إلى الزبون. وبمسح الموضع والسلعة: تبقى 3 أخطاء في الكمية؛ والـ17 الأخرى تُوقَف لحظة الحركة.',
      header: 'مثال مركَّب · ⁦1 000⁩ سطر طلبية، الأخطاء نفسها، بمراقبة لحظة السحب ودونها',
      colType: 'نوع الخطأ', colPaper: 'بالورقة: كلها تغادر', colScan: 'بمسح الموضع والسلعة',
      types: [
        { name: 'سلعة خاطئة', sub: 'المرجع المجاور' },
        { name: 'كمية خاطئة', sub: 'عشر بدل اثنتي عشرة' },
        { name: 'سطر منسي', sub: 'الورقة قُلبت بسرعة' },
      ],
      total: 'المجموع', totalPaper: 'خطأ عند الزبون', totalScan: 'أخطاء عند الزبون',
      band: 'الأسطر الـ⁦1 000⁩ نفسها، محضَّرة بالورقة ثم بالمسح: المسح لا يوقف كل شيء، لكنه يوقف ما يُرى عند العنوان وعند الرمز.',
      tiles: [
        { big: '20 خطأ', l1: 'في ⁦1 000⁩ سطر محضَّر بالورقة', l2: '⁦2 %⁩ من الأسطر، وكلها غادرت' },
        { big: '3 أخطاء', l1: 'في ⁦1 000⁩ سطر محضَّر بالمسح', l2: '⁦0,3 %⁩: في الكميات', hot: true },
        { big: '17 موقوفة', l1: 'قبل الرصيف، لحظة الحركة', l2: '9 سلع، 4 أسطر منسية، و4 كميات' },
      ],
      line1: 'المسح لا يجعل أحداً أكثر انتباهاً: يجعل الخطأ مستحيل التأكيد. الموضع الخاطئ أو السلعة الخاطئة يرفضان السطر.',
      line2: 'تبقى الكميات: وتُقلَّص بعدّ الكراتين بدل القطع، وبمراقبة وزن الطرد.',
      note: 'مثال مركَّب · نسب أخطاء خيالية، تُقاس عندكم على شهر من المرتجعات والشكاوى.',
    },
  },
};
