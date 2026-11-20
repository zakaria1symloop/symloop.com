// Bespoke animated figures for the 2027 "comment créer un logiciel de gestion" page.
//  fichier(): the file that multiplies. Left, one order spreadsheet becomes
//             five files kept by five people, each with its own monthly total.
//             Right, one base with three tables, five desks linked to it and a
//             single total.
//  tranche(): layer by layer, or slice by slice. Two 4 x 4 grids (four chains,
//             four layers). Left, cells are finished row by row: the first
//             chain is usable at week 26. Right, column by column: week 8.
// File names and numbers are drawn in their own text elements, direction="ltr".
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
function box(c, x, y, w, h, top, o = {}) {
  return rect(c, x, y, w, h, { stroke: o.stroke || C.line2, fill: o.fill || C.fill }) + text(c, x + w / 2, y + h / 2 + 4, top, { size: o.size || 10, fill: o.color || C.fg, weight: o.weight || 300, anchor: 'middle' });
}
function link(c, css, P, id, at, x1, y1, x2, y2, color) {
  const len = Math.hypot(x2 - x1, y2 - y1);
  return `<polyline points="${c.X(x1)},${y1} ${c.X(x2)},${y2}" fill="none" stroke="${color || C.fg70}" stroke-width="1.5" stroke-dasharray="${len.toFixed(0)}" style="animation:${drawLine(css, P, id, at, 1.2, len)}"/>`;
}

const FILES = ['commandes.xlsx', 'commandes_v2.xlsx', 'commandes_depot.xlsx', 'commandes_final.xlsx', 'commandes_final (2).xlsx'];
const TOTALS = [412, 409, 415, 398, 421];

export function fichier(t, rtl) {
  const c = ctx(rtl); const P = 'gf'; const css = []; const H = 680;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  // left: five copies of one spreadsheet
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 510, 300, { stroke: C.accent, fill: TINT }) + text(c, 96, 168, t.left, { size: 11, fill: C.fg, weight: 500 })
    + text(c, 96, 188, t.colFile, { size: 8.5, font: 'mono', fill: C.fg55 }) + text(c, 344, 188, t.colUser, { size: 8.5, font: 'mono', fill: C.fg55 }) + text(c, 530, 188, t.colTotal, { size: 8.5, font: 'mono', fill: C.fg55, anchor: 'middle' }) + '</g>';
  FILES.forEach((f, i) => {
    const y = 198 + i * 37; const at = 5 + i * 4;
    s += `<g style="animation:${show(css, P, `f${i}`, at)}">` + rect(c, 96, y, 232, 28, { stroke: i === 0 ? C.fg70 : C.line2, fill: C.fill }) + ltrSpans(c.RX(96, 232) + 12, y + 18, [[f, i === 0 ? C.fg : C.fg70, i === 0]], 10, 'start') + text(c, 344, y + 18, t.users[i], { size: 10, fill: C.fg70 }) + '</g>';
    s += `<g style="${pop(css, P, `n${i}`, at + 1.5)}">` + num(c, 530, y + 18, String(TOTALS[i]), { bold: true, size: 11.5, fill: i === 0 ? C.fg : C.accent }) + '</g>';
  });
  s += `<g style="${pop(css, P, 'ls', 26)}">` + rect(c, 96, 388, 478, 44, { stroke: C.accent, fill: C.accent }) + text(c, 108, 406, t.badTop, { size: 10.5, fill: '#000', weight: 500 }) + text(c, 108, 422, t.badSub, { size: 9, font: 'mono', fill: '#000' }) + '</g>';
  // right: one base, five desks
  s += `<g style="animation:${show(css, P, 'pb', 30)}">` + rect(c, 610, 144, 510, 300, { stroke: C.fg70, fill: DARK }) + text(c, 626, 168, t.right, { size: 11, fill: C.fg, weight: 500 }) + '</g>';
  s += `<g style="animation:${show(css, P, 'bs', 32)}">` + rect(c, 786, 188, 160, 112, { stroke: C.fg, fill: C.fill }) + text(c, 866, 206, t.base, { size: 10, fill: C.fg, weight: 500, anchor: 'middle' }) + '</g>';
  t.tables.forEach((tb, k) => { s += `<g style="animation:${show(css, P, `tb${k}`, 33 + k)}">` + rect(c, 800, 214 + k * 27, 132, 21, { stroke: C.line2, fill: DARK }) + text(c, 866, 229 + k * 27, tb, { size: 9, font: 'mono', fill: C.fg70, anchor: 'middle' }) + '</g>'; });
  [[626, 192], [626, 230], [626, 268], [986, 192], [986, 230]].forEach(([x, y], i) => {
    const at = 37 + i * 1.6; const leftSide = x < 786;
    s += `<g style="animation:${show(css, P, `u${i}`, at)}">` + box(c, x, y, leftSide ? 120 : 118, 28, t.users[i], { size: 9.5 }) + '</g>';
    s += leftSide ? link(c, css, P, `l${i}`, at + 0.5, 746, y + 14, 786, y + 14, C.fg70) : link(c, css, P, `l${i}`, at + 0.5, 986, y + 14, 946, y + 14, C.fg70);
  });
  s += `<g style="animation:${show(css, P, 'ot', 46)}">` + rect(c, 626, 318, 478, 50, { stroke: C.fg, fill: C.fill }) + text(c, 642, 348, t.oneTotal, { size: 10.5, fill: C.fg }) + '</g>';
  s += `<g style="${pop(css, P, 'on', 47)}">` + num(c, 1040, 351, '412', { bold: true, size: 18 }) + '</g>';
  s += `<g style="${pop(css, P, 'rs', 49)}">` + rect(c, 626, 388, 478, 44, { stroke: C.fg, fill: C.fill }) + text(c, 638, 406, t.goodTop, { size: 10.5, fill: C.fg, weight: 500 }) + text(c, 638, 422, t.goodSub, { size: 9, font: 'mono', fill: C.fg70 }) + '</g>';
  const by = 460;
  s += `<g style="animation:${show(css, P, 'bd', 52)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 520;
  s += tiles(c, css, P, ky, t.tiles, 56);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

const CW = 86; const CH = 34; const PX = 92; const PY = 40; const GY0 = 204;

export function tranche(t, rtl) {
  const c = ctx(rtl); const P = 'gt'; const css = []; const H = 668;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const frame = (px, x0, title, stroke, fill, id, at) => `<g style="animation:${show(css, P, id, at)}">` + rect(c, px, 144, 510, 288, { stroke, fill }) + text(c, px + 16, 168, title, { size: 11, fill: C.fg, weight: 500 })
    + t.cols.map((col, k) => text(c, x0 + k * PX + CW / 2, 194, col, { size: 8.5, font: 'mono', fill: C.fg55, anchor: 'middle' })).join('')
    + t.rows.map((row, r) => text(c, px + 16, GY0 + r * PY + 21, row, { size: 10, fill: C.fg70 })).join('') + '</g>';
  const cell = (x0, r, k, week, hot, filled) => rect(c, x0 + k * PX, GY0 + r * PY, CW, CH, { stroke: hot ? C.accent : C.line2, fill: filled ? C.accent : C.fill })
    + num(c, x0 + k * PX + CW / 2, GY0 + r * PY + 21, String(week), { size: 10.5, bold: hot, fill: filled ? '#000' : (hot ? C.accent : C.fg70) });
  // left: layer by layer (row-major)
  const XL = 214;
  s += frame(80, XL, t.left, C.accent, TINT, 'pa', 3);
  for (let r = 0; r < 4; r++) for (let k = 0; k < 4; k++) {
    const n = r * 4 + k;
    s += `<g style="animation:${show(css, P, `a${n}`, 5 + n * 1.1)}">` + cell(XL, r, k, (n + 1) * 2, k === 0, false) + '</g>';
  }
  s += `<g style="${pop(css, P, 'ls', 24)}">` + rect(c, 96, 372, 478, 44, { stroke: C.accent, fill: C.accent }) + text(c, 108, 390, t.badTop, { size: 10.5, fill: '#000', weight: 500 }) + text(c, 108, 406, t.badSub, { size: 9, font: 'mono', fill: '#000' }) + '</g>';
  // right: slice by slice (column-major)
  const XR = 744;
  s += frame(610, XR, t.right, C.fg70, DARK, 'pb', 27);
  for (let k = 0; k < 4; k++) for (let r = 0; r < 4; r++) {
    const n = k * 4 + r;
    s += `<g style="animation:${show(css, P, `b${n}`, 29 + n * 1.1)}">` + cell(XR, r, k, (n + 1) * 2, k === 0, k === 0) + '</g>';
  }
  s += `<g style="${pop(css, P, 'rs', 34.5)}">` + rect(c, 626, 372, 478, 44, { stroke: C.fg, fill: C.fill }) + text(c, 638, 390, t.goodTop, { size: 10.5, fill: C.fg, weight: 500 }) + text(c, 638, 406, t.goodSub, { size: 9, font: 'mono', fill: C.fg70 }) + '</g>';
  const by = 448;
  s += `<g style="animation:${show(css, P, 'bd', 50)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 508;
  s += tiles(c, css, P, ky, t.tiles, 54);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    fichier: {
      title: 'Le fichier qui se multiplie, et la base saisie une fois',
      alt: 'Deux montages. À gauche, le fichier de commandes d’une entreprise est devenu cinq fichiers en six mois, tenus par le bureau, le dépôt, la comptable, le commercial et le gérant : pour le même mois, ils donnent 412, 409, 415, 398 et 421 commandes. À droite, une seule base avec trois tables, clients, articles et commandes : les cinq postes y écrivent en même temps et lisent le même total, 412.',
      header: 'Exemple construit · une entreprise de distribution de 25 personnes · le même fichier de commandes, six mois plus tard',
      left: 'Des fichiers que l’on recopie', right: 'Une base, saisie une fois',
      colFile: 'fichier', colUser: 'tenu par', colTotal: 'commandes du mois',
      users: ['le bureau', 'le dépôt', 'la comptable', 'le commercial', 'le gérant'],
      badTop: 'Cinq fichiers, cinq totaux pour le même mois', badSub: 'une seule personne sait lequel est le bon',
      base: 'une seule base', tables: ['clients', 'articles', 'commandes'],
      oneTotal: 'commandes du mois, pour les cinq',
      goodTop: 'Cinq postes, un seul total', goodSub: 'chaque modification est datée et signée',
      band: 'Un tableur garde des cellules. Un logiciel de gestion garde des faits : une commande, un client, un mouvement, saisis une fois et lus par tous.',
      tiles: [
        { big: '5 fichiers', l1: 'issus du même tableau en six mois', l2: 'copié, renommé, envoyé par mail', hot: true },
        { big: '398 à 421', l1: 'commandes du mois, selon le fichier ouvert', l2: 'la même question, cinq réponses' },
        { big: '1 base', l1: 'cinq personnes écrivent en même temps', l2: 'un seul total, daté et signé' },
      ],
      line1: 'Le signe ne trompe pas : un nom de fichier qui finit par « v2 », « final » ou « (2) » veut dire que le tableur sert déjà de logiciel.',
      line2: 'Ce n’est pas un défaut du tableur : il est fait pour calculer, pas pour que cinq personnes tiennent le même registre.',
      note: 'Exemple construit · noms de fichiers et totaux fictifs.',
    },
    tranche: {
      title: 'Couche par couche, ou tranche par tranche',
      alt: 'Deux grilles de seize cases : quatre chaînes en colonnes (ventes, stock, achats, trésorerie) et quatre couches en lignes (données, règles, écrans, états), deux semaines par case. À gauche, les cases sont terminées ligne par ligne : la chaîne des ventes n’est complète qu’à la semaine 26. À droite, elles sont terminées colonne par colonne : la chaîne des ventes est utilisable dès la semaine 8. Le total est de 32 semaines dans les deux cas.',
      header: 'Exemple construit · quatre chaînes, quatre couches, deux semaines par case · le chiffre est la semaine où la case est terminée',
      left: 'Couche par couche', right: 'Tranche par tranche',
      cols: ['Ventes', 'Stock', 'Achats', 'Trésorerie'], rows: ['données', 'règles', 'écrans', 'états'],
      badTop: 'Première chaîne utilisable : semaine 26', badSub: 'tout avance, rien ne sert avant six mois',
      goodTop: 'Première chaîne utilisable : semaine 8', goodSub: 'les ventes tournent pendant que le stock se construit',
      band: 'Le même travail dans les deux cas. Ce qui change : la semaine où quelqu’un s’en sert, donc celle où l’on apprend ce qu’il fallait vraiment.',
      tiles: [
        { big: 'semaine 8', l1: 'première chaîne utilisable, tranche par tranche', l2: 'devis · commande · livraison · facture', hot: true },
        { big: 'semaine 26', l1: 'la même chaîne, couche par couche', l2: 'dix-huit semaines de plus sans rien utiliser' },
        { big: '32 semaines', l1: 'le total est le même dans l’exemple', l2: 'la différence est dans l’ordre' },
      ],
      line1: 'Demandez à qui construit votre logiciel la date de la première chaîne utilisable de bout en bout, pas seulement la date de fin.',
      line2: 'Ce que les équipes disent en utilisant la première tranche corrige les trois suivantes : c’est là que se gagne le reste.',
      note: 'Exemple construit · durées fictives ; une tranche traverse données, règles, écrans et états pour une seule chaîne.',
    },
  },
  en: {
    fichier: {
      title: 'The file that multiplies, and the base entered once',
      alt: 'Two set-ups. On the left, a company’s order file has become five files in six months, kept by the office, the warehouse, the accountant, the salesperson and the manager: for the same month they give 412, 409, 415, 398 and 421 orders. On the right, a single base with three tables, customers, items and orders: the five desks write to it at the same time and read the same total, 412.',
      header: 'Constructed example · a distribution company of 25 people · the same order file, six months later',
      left: 'Files that get copied', right: 'One base, entered once',
      colFile: 'file', colUser: 'kept by', colTotal: 'orders this month',
      users: ['the office', 'the warehouse', 'the accountant', 'the salesperson', 'the manager'],
      badTop: 'Five files, five totals for the same month', badSub: 'only one person knows which is the right one',
      base: 'a single base', tables: ['customers', 'items', 'orders'],
      oneTotal: 'orders this month, for all five',
      goodTop: 'Five desks, a single total', goodSub: 'every change is dated and signed',
      band: 'A spreadsheet keeps cells. Management software keeps facts: an order, a customer, a movement, entered once and read by all.',
      tiles: [
        { big: '5 files', l1: 'born from the same sheet in six months', l2: 'copied, renamed, sent by mail', hot: true },
        { big: '398 to 421', l1: 'orders this month, depending on the file opened', l2: 'the same question, five answers' },
        { big: '1 base', l1: 'five people write at the same time', l2: 'a single total, dated and signed' },
      ],
      line1: 'The sign does not lie: a file name ending in “v2”, “final” or “(2)” means the spreadsheet is already serving as software.',
      line2: 'It is not a flaw of the spreadsheet: it is made to calculate, not for five people to keep the same register.',
      note: 'Constructed example · fictitious file names and totals.',
    },
    tranche: {
      title: 'Layer by layer, or slice by slice',
      alt: 'Two grids of sixteen cells: four chains in columns (sales, stock, purchasing, cash) and four layers in rows (data, rules, screens, reports), two weeks per cell. On the left, cells are finished row by row: the sales chain is complete only at week 26. On the right, they are finished column by column: the sales chain is usable from week 8. The total is 32 weeks in both cases.',
      header: 'Constructed example · four chains, four layers, two weeks per cell · the number is the week the cell is finished',
      left: 'Layer by layer', right: 'Slice by slice',
      cols: ['Sales', 'Stock', 'Purchasing', 'Cash'], rows: ['data', 'rules', 'screens', 'reports'],
      badTop: 'First usable chain: week 26', badSub: 'everything moves, nothing is used for six months',
      goodTop: 'First usable chain: week 8', goodSub: 'sales run while stock is being built',
      band: 'The same work in both cases. What changes: the week someone uses it, and so the week you learn what was really needed.',
      tiles: [
        { big: 'week 8', l1: 'first usable chain, slice by slice', l2: 'quote · order · delivery · invoice', hot: true },
        { big: 'week 26', l1: 'the same chain, layer by layer', l2: 'eighteen more weeks without using anything' },
        { big: '32 weeks', l1: 'the total is the same in the example', l2: 'the difference is in the order' },
      ],
      line1: 'Ask whoever builds your software for the date of the first chain usable end to end, not only the end date.',
      line2: 'What the teams say while using the first slice corrects the next three: that is where the rest is won.',
      note: 'Constructed example · fictitious durations; a slice crosses data, rules, screens and reports for a single chain.',
    },
  },
  ar: {
    fichier: {
      title: 'الملف الذي يتكاثر، والقاعدة التي تُدخَل مرة',
      alt: 'تركيبان. في الأول، ملف طلبيات مؤسسة صار خمسة ملفات في ستة أشهر، يمسكها المكتب والمستودع والمحاسِبة والمندوب التجاري والمسيّر: وللشهر نفسه، تعطي 412 و409 و415 و398 و421 طلبية. وفي الثاني، قاعدة واحدة بثلاثة جداول، الزبائن والسلع والطلبيات: المكاتب الخمسة تكتب فيها في الوقت نفسه وتقرأ المجموع نفسه، 412.',
      header: 'مثال مركَّب · مؤسسة توزيع من 25 شخصاً · ملف الطلبيات نفسه، بعد ستة أشهر',
      left: 'ملفات تُنسخ', right: 'قاعدة واحدة، تُدخَل مرة',
      colFile: 'الملف', colUser: 'يمسكه', colTotal: 'طلبيات الشهر',
      users: ['المكتب', 'المستودع', 'المحاسِبة', 'المندوب التجاري', 'المسيّر'],
      badTop: 'خمسة ملفات، خمسة مجاميع للشهر نفسه', badSub: 'وشخص واحد يعرف أيها الصحيح',
      base: 'قاعدة واحدة', tables: ['الزبائن', 'السلع', 'الطلبيات'],
      oneTotal: 'طلبيات الشهر، للخمسة',
      goodTop: 'خمسة مكاتب، مجموع واحد', goodSub: 'كل تعديل مؤرَّخ وموقَّع',
      band: 'جدول البيانات يحفظ خانات. وبرنامج التسيير يحفظ وقائع: طلبية، زبون، حركة، تُدخَل مرة ويقرؤها الجميع.',
      tiles: [
        { big: '5 ملفات', l1: 'خرجت من الجدول نفسه في ستة أشهر', l2: 'نُسخ، أُعيدت تسميته، وأُرسل بالبريد', hot: true },
        { big: 'من 398 إلى 421', l1: 'طلبيات الشهر، حسب الملف المفتوح', l2: 'السؤال نفسه، خمسة أجوبة' },
        { big: 'قاعدة واحدة', l1: 'خمسة أشخاص يكتبون في الوقت نفسه', l2: 'مجموع واحد، مؤرَّخ وموقَّع' },
      ],
      line1: 'العلامة لا تخطئ: اسم ملف ينتهي بـ «⁦v2⁩» أو «⁦final⁩» أو «⁦(2)⁩» يعني أن الجدول صار يقوم مقام البرنامج.',
      line2: 'وهذا ليس عيباً في الجدول: هو مصنوع ليحسب، لا ليمسك خمسة أشخاص السجل نفسه.',
      note: 'مثال مركَّب · أسماء ملفات ومجاميع خيالية.',
    },
    tranche: {
      title: 'طبقة بطبقة، أو شريحة بشريحة',
      alt: 'شبكتان من ست عشرة خانة: أربع سلاسل في الأعمدة (المبيعات، المخزون، المشتريات، الخزينة) وأربع طبقات في الأسطر (البيانات، القواعد، الشاشات، الكشوف)، أسبوعان لكل خانة. في الأولى، تنتهي الخانات سطراً بسطر: سلسلة المبيعات لا تكتمل إلا في الأسبوع 26. وفي الثانية، تنتهي عموداً بعمود: سلسلة المبيعات قابلة للاستعمال منذ الأسبوع 8. والمجموع 32 أسبوعاً في الحالتين.',
      header: 'مثال مركَّب · أربع سلاسل، أربع طبقات، أسبوعان لكل خانة · الرقم هو الأسبوع الذي تنتهي فيه الخانة',
      left: 'طبقة بطبقة', right: 'شريحة بشريحة',
      cols: ['المبيعات', 'المخزون', 'المشتريات', 'الخزينة'], rows: ['البيانات', 'القواعد', 'الشاشات', 'الكشوف'],
      badTop: 'أول سلسلة قابلة للاستعمال: الأسبوع 26', badSub: 'كل شيء يتقدم، ولا شيء يُستعمل قبل ستة أشهر',
      goodTop: 'أول سلسلة قابلة للاستعمال: الأسبوع 8', goodSub: 'المبيعات تشتغل والمخزون يُبنى',
      band: 'العمل نفسه في الحالتين. ما يتغير: الأسبوع الذي يستعمله فيه أحد، أي الأسبوع الذي نعرف فيه ما كان لازماً حقاً.',
      tiles: [
        { big: 'الأسبوع 8', l1: 'أول سلسلة قابلة للاستعمال، شريحة بشريحة', l2: 'عرض السعر · الطلبية · التسليم · الفاتورة', hot: true },
        { big: 'الأسبوع 26', l1: 'السلسلة نفسها، طبقة بطبقة', l2: 'ثمانية عشر أسبوعاً إضافياً دون استعمال شيء' },
        { big: '32 أسبوعاً', l1: 'المجموع هو نفسه في المثال', l2: 'الفرق في الترتيب' },
      ],
      line1: 'اسألوا من يبني برنامجكم عن تاريخ أول سلسلة قابلة للاستعمال من أولها إلى آخرها، لا عن تاريخ النهاية فقط.',
      line2: 'ما تقوله الفرق وهي تستعمل الشريحة الأولى يصحّح الثلاث الموالية: هناك يُربح الباقي.',
      note: 'مثال مركَّب · مدد خيالية؛ الشريحة تعبر البيانات والقواعد والشاشات والكشوف لسلسلة واحدة.',
    },
  },
};
