// Bespoke animated figures for the 2027 "logiciel ERP en Algérie" page.
//  base():   the same article, four answers or one. Left, four tools each hold
//            their own copy of the available quantity of one article: four
//            boxes appear, four different numbers pop, and the re-typing links
//            between them are drawn. Right, one base in the middle and four
//            modules around it that all read the same number.
//  fiches(): cleaning the item records before migrating. A waterfall of five
//            bars that grow one after another: 1,240 records, minus duplicates,
//            minus dead records, the ones to complete, and the 910 migrated.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function pop(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scale(0)}${(at + 1.5).toFixed(1)}%,100%{transform:scale(1)}}`); return `transform-box:fill-box;transform-origin:center;animation:${P}-${id} ${LOOP}s linear infinite`; }
function growX(css, P, id, at, dur, rtl) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'} center;animation:${P}-${id} ${LOOP}s linear infinite`; }
function drawLine(css, P, id, at, dur, len) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{stroke-dashoffset:${len.toFixed(0)}}${(at + dur).toFixed(1)}%,100%{stroke-dashoffset:0}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
const TINT = 'rgba(242,181,68,0.06)';
const DARK = '#0b0b0b';
const PALE = 'rgba(255,255,255,0.85)';

function tiles(c, css, P, ky, ts, at0) {
  let s = '';
  ts.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, at0 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? TINT : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  return s;
}
const motionOff = (P) => `@media (prefers-reduced-motion: reduce){svg [style*="${P}-"]{animation:none !important}}`;

// the available quantity of one article, as each of the four tools reports it
const COPIES = ['120', '96', '104', '131'];

export function base(t, rtl) {
  const c = ctx(rtl); const P = 'rb'; const css = []; const H = 640;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  // left: four tools, four copies
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 480, 260, { stroke: C.fg35, fill: DARK }) + text(c, 96, 168, t.left, { size: 11, fill: C.fg, weight: 500 }) + '</g>';
  const bx = [96, 328], byy = [182, 284]; const bw = 216, bh = 70;
  t.tools.forEach(([name, sub], i) => {
    const x = bx[i % 2], y = byy[Math.floor(i / 2)]; const at = 5 + i * 3;
    s += `<g style="animation:${show(css, P, `t${i}`, at)}">` + rect(c, x, y, bw, bh, { stroke: C.line2, fill: C.fill }) + text(c, x + 12, y + 22, name, { size: 10.5, fill: C.fg, weight: 500 }) + text(c, x + 12, y + 38, sub, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>';
    s += `<g style="${pop(css, P, `v${i}`, at + 1.5)}">` + text(c, x + bw - 14, y + 56, COPIES[i], { size: 18, font: 'mono', fill: C.accent, weight: 500, anchor: 'end' }) + '</g>';
  });
  // re-typing links between the four tools
  const links = [[bx[0] + bw, byy[0] + 35, bx[1], byy[0] + 35, 16], [bx[1] + bw / 2, byy[0] + bh, bx[1] + bw / 2, byy[1], 32], [bx[1], byy[1] + 35, bx[0] + bw, byy[1] + 35, 16], [bx[0] + bw / 2, byy[1], bx[0] + bw / 2, byy[0] + bh, 32]];
  links.forEach(([x1, y1, x2, y2, len], i) => { s += `<polyline points="${c.X(x1)},${y1} ${c.X(x2)},${y2}" fill="none" stroke="${C.accent}" stroke-width="2" stroke-dasharray="${len}" style="animation:${drawLine(css, P, `l${i}`, 18 + i * 2, 2, len)}"/>`; });
  s += `<g style="animation:${show(css, P, 'rl', 26)}">` + text(c, 320, 272, t.retype, { size: 8.5, font: 'mono', fill: C.accent, anchor: 'middle' }) + '</g>';
  s += `<g style="animation:${show(css, P, 'ls', 28)}">` + text(c, 96, 388, t.leftSum, { size: 10, fill: C.accent, weight: 500 }) + '</g>';
  // right: one base, four modules
  s += `<g style="animation:${show(css, P, 'pb', 32)}">` + rect(c, 580, 144, 540, 260, { stroke: C.accent, fill: TINT }) + text(c, 596, 168, t.right, { size: 11, fill: C.fg, weight: 500 }) + '</g>';
  const cx = 850, cy = 268; const mx = [596, 934], my = [186, 314]; const mw = 170, mh = 46;
  t.modules.forEach((name, i) => {
    const x = mx[i % 2], y = my[Math.floor(i / 2)]; const at = 37 + i * 3;
    const ex = i % 2 === 0 ? x + mw : x; const ey = y + mh / 2; const len = Math.hypot(cx - ex, cy - ey);
    s += `<polyline points="${c.X(ex)},${ey} ${c.X(i % 2 === 0 ? cx - 60 : cx + 60)},${cy}" fill="none" stroke="${C.fg70}" stroke-width="1.5" stroke-dasharray="${len.toFixed(0)}" style="animation:${drawLine(css, P, `c${i}`, at, 2, len)}"/>`;
    s += `<g style="animation:${show(css, P, `m${i}`, at)}">` + rect(c, x, y, mw, mh, { stroke: C.fg70, fill: DARK }) + text(c, x + 12, y + 19, name, { size: 10.5, fill: C.fg, weight: 500 }) + text(c, x + 12, y + 35, t.same, { size: 8.5, font: 'mono', fill: C.fg70 }) + '</g>';
  });
  s += `<g style="${pop(css, P, 'bs', 34)}">` + rect(c, cx - 60, cy - 28, 120, 56, { stroke: C.accent, fill: C.accent }) + text(c, cx, cy - 6, t.baseName, { size: 10, fill: '#000', weight: 500, anchor: 'middle' }) + text(c, cx, cy + 16, '96', { size: 18, font: 'mono', fill: '#000', weight: 500, anchor: 'middle' }) + '</g>';
  s += `<g style="animation:${show(css, P, 'rs', 52)}">` + text(c, 596, 388, t.rightSum, { size: 10, fill: C.fg, weight: 500 }) + '</g>';
  const by = 420;
  s += `<g style="animation:${show(css, P, 'bd', 56)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 480;
  s += tiles(c, css, P, ky, t.tiles, 60);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// item records: total kept on each row, removed on that row, flagged on that row
const ROWS = [[1240, 0, 0], [1060, 180, 0], [910, 150, 0], [910, 0, 40], [910, 0, 0]];

export function fiches(t, rtl) {
  const c = ctx(rtl); const P = 'rf'; const css = []; const H = 620;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const x0 = 300, k = 700 / 1240;
  ROWS.forEach(([kept, removed, flagged], i) => {
    const y = 156 + i * 46; const at = 5 + i * 9; const last = i === ROWS.length - 1;
    s += `<g style="animation:${show(css, P, `n${i}`, at)}">` + text(c, 80, y + 16, t.rows[i], { size: 10, fill: last ? C.accent : C.fg, weight: last ? 500 : 300 }) + '</g>';
    const wKept = (kept - flagged) * k;
    s += `<g style="${growX(css, P, `b${i}`, at + 1, 4, rtl)}">` + rect(c, x0, y, wKept, 24, { stroke: last ? C.accent : C.fg70, fill: last ? C.accent : i === 0 ? PALE : C.fill }) + '</g>';
    if (flagged) s += `<g style="${pop(css, P, `f${i}`, at + 5)}">` + rect(c, x0 + wKept, y, flagged * k, 24, { stroke: C.accent, fill: C.accent }) + '</g>';
    if (removed) s += `<g style="animation:${show(css, P, `r${i}`, at + 5)}">` + rect(c, x0 + kept * k, y, removed * k, 24, { stroke: C.accent, fill: 'none', dash: '4 3' }) + text(c, x0 + kept * k + (removed * k) / 2, y + 16, t.minus[i], { size: 9.5, font: 'mono', fill: C.accent, weight: 500, anchor: 'middle' }) + '</g>';
    s += `<g style="animation:${show(css, P, `v${i}`, at + 5)}">` + text(c, x0 + (kept + removed) * k + 10, y + 17, t.values[i], { size: 12, font: 'mono', fill: last || flagged ? C.accent : C.fg, weight: 500 }) + '</g>';
  });
  const by = 400;
  s += `<g style="animation:${show(css, P, 'bd', 54)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 460;
  s += tiles(c, css, P, ky, t.tiles, 58);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    base: {
      title: 'Le même article : quatre réponses, ou une seule',
      alt: 'Deux panneaux. À gauche, quatre outils qui tiennent chacun leur copie de la quantité disponible du même article : la facturation dit 120, le tableur du stock 96, le tableur des achats 104, la comptabilité 131 ; des ressaisies relient les quatre. À droite, une seule base au centre, et quatre modules autour, ventes, stock, achats, finance, qui lisent tous la même quantité : 96.',
      header: 'Exemple construit · la quantité disponible d’un article, relevée le même matin · à gauche quatre outils, à droite une base',
      left: 'Quatre outils, quatre copies',
      tools: [['Facturation', 'logiciel sur un poste'], ['Stock', 'tableur du magasin'], ['Achats', 'tableur des commandes'], ['Comptabilité', 'clôture du mois dernier']],
      retype: 'ressaisies', leftSum: 'un article, quatre quantités : laquelle est vraie ?',
      right: 'Une base, quatre modules', modules: ['Ventes', 'Stock', 'Achats', 'Finance'], same: 'lit : 96 disponibles', baseName: 'article A-1042',
      rightSum: 'un article, une quantité, lue par tous',
      band: 'Un ERP ne se définit pas par ses écrans : il se définit par le fait que chaque donnée n’est saisie et corrigée qu’à un seul endroit.',
      tiles: [
        { big: '4 quantités, 1 article', l1: 'chaque outil a sa copie, mise à jour à son rythme', l2: 'la vraie se trouve en comptant le rayon' },
        { big: 'saisie une fois', l1: 'une vente diminue le stock, crée la créance, alimente la marge', l2: 'personne ne la retape', hot: true },
        { big: 'pas un logiciel de plus', l1: 'un ERP remplace des copies, il ne s’ajoute pas aux tableurs', l2: 'sinon il devient la cinquième copie' },
      ],
      line1: 'Le problème n’est pas le nombre de logiciels : c’est le nombre d’endroits où la même donnée est saisie.',
      line2: 'Un ERP tient en une phrase : chaque donnée a un seul maître, et tous les modules la lisent.',
      note: 'Exemple construit · un article, quatre outils, quatre quantités relevées le même matin.',
    },
    fiches: {
      title: 'Nettoyer les fiches avant de migrer',
      alt: 'Cinq barres. L’ancien logiciel contient 1 240 fiches articles. Après fusion des doublons, il en reste 1 060 : 180 de moins. Après archivage des fiches jamais mouvementées depuis deux ans, 910 : 150 de moins. Parmi elles, 40 sont à compléter avant l’import, parce qu’une unité ou une famille manque. 910 fiches sont migrées.',
      header: 'Exemple construit · le fichier des articles, avant la migration · trois passes dans l’ancien outil',
      rows: ['Dans l’ancien logiciel', 'Après fusion des doublons', 'Après archivage des fiches mortes', 'Dont à compléter avant l’import', 'Fiches migrées'],
      minus: ['', '−180', '−150', '', ''],
      values: ['1 240', '1 060', '910', '40 à compléter', '910'],
      band: 'On ne migre pas un logiciel, on migre des données : chaque doublon importé devient un doublon officiel.',
      tiles: [
        { big: '1 240, puis 910', l1: 'plus d’un quart des fiches ne méritait pas le voyage', l2: 'doublons et fiches mortes', hot: true },
        { big: '3 fichiers maîtres', l1: 'articles, clients, fournisseurs : une fiche chacun', l2: 'nettoyés avant toute démonstration' },
        { big: 'un responsable par fichier', l1: 'celui qui crée une fiche, et celui qui la valide', l2: 'sinon les doublons reviennent' },
      ],
      line1: 'Le nettoyage se fait dans l’ancien outil, avant la migration : c’est le travail le moins visible, et tout le reste en dépend.',
      line2: 'La même passe se fait sur les clients et les fournisseurs : un client en trois exemplaires, ce sont trois soldes faux.',
      note: 'Exemple construit · 1 240 fiches articles ; faites le compte sur votre propre fichier.',
    },
  },
  en: {
    base: {
      title: 'The same article: four answers, or one',
      alt: 'Two panels. On the left, four tools each holding their own copy of the available quantity of the same article: invoicing says 120, the stock spreadsheet 96, the purchasing spreadsheet 104, accounting 131; re-typing links the four. On the right, a single base in the centre, and four modules around it, sales, stock, purchasing, finance, which all read the same quantity: 96.',
      header: 'Constructed example · the available quantity of one article, read on the same morning · left four tools, right one base',
      left: 'Four tools, four copies',
      tools: [['Invoicing', 'software on one computer'], ['Stock', 'the warehouse spreadsheet'], ['Purchasing', 'the orders spreadsheet'], ['Accounting', 'last month’s closing']],
      retype: 're-typing', leftSum: 'one article, four quantities: which one is true?',
      right: 'One base, four modules', modules: ['Sales', 'Stock', 'Purchasing', 'Finance'], same: 'reads: 96 available', baseName: 'article A-1042',
      rightSum: 'one article, one quantity, read by all',
      band: 'An ERP is not defined by its screens: it is defined by the fact that each piece of data is entered and corrected in one place only.',
      tiles: [
        { big: '4 quantities, 1 article', l1: 'each tool has its copy, updated at its own pace', l2: 'the true one is found by counting the shelf' },
        { big: 'entered once', l1: 'a sale lowers stock, creates the receivable, feeds the margin', l2: 'nobody retypes it', hot: true },
        { big: 'not one more program', l1: 'an ERP replaces copies, it is not added to the spreadsheets', l2: 'otherwise it becomes the fifth copy' },
      ],
      line1: 'The problem is not the number of programs: it is the number of places where the same data is entered.',
      line2: 'An ERP fits in one sentence: each piece of data has a single master, and all the modules read it.',
      note: 'Constructed example · one article, four tools, four quantities read on the same morning.',
    },
    fiches: {
      title: 'Cleaning the records before migrating',
      alt: 'Five bars. The old software holds 1,240 item records. After merging duplicates, 1,060 remain: 180 fewer. After archiving records with no movement for two years, 910: 150 fewer. Among them, 40 must be completed before the import, because a unit or a family is missing. 910 records are migrated.',
      header: 'Constructed example · the item file, before migration · three passes in the old tool',
      rows: ['In the old software', 'After merging duplicates', 'After archiving dead records', 'Of which to complete before import', 'Records migrated'],
      minus: ['', '−180', '−150', '', ''],
      values: ['1,240', '1,060', '910', '40 to complete', '910'],
      band: 'You do not migrate software, you migrate data: every duplicate imported becomes an official duplicate.',
      tiles: [
        { big: '1,240, then 910', l1: 'more than a quarter of the records did not deserve the trip', l2: 'duplicates and dead records', hot: true },
        { big: '3 master files', l1: 'items, customers, suppliers: one record each', l2: 'cleaned before any demonstration' },
        { big: 'one owner per file', l1: 'the person who creates a record, and the one who validates it', l2: 'otherwise the duplicates come back' },
      ],
      line1: 'The cleaning is done in the old tool, before the migration: it is the least visible work, and everything else depends on it.',
      line2: 'The same pass is made on customers and suppliers: a customer in three copies means three wrong balances.',
      note: 'Constructed example · 1,240 item records; do the count on your own file.',
    },
  },
  ar: {
    base: {
      title: 'المادة نفسها: أربعة أجوبة، أو واحد',
      alt: 'لوحتان. على جهة، أربع أدوات لكل واحدة نسختها من الكمية المتوفرة للمادة نفسها: الفوترة تقول 120، جدول المخزون 96، جدول المشتريات 104، والمحاسبة 131؛ وإعادة الإدخال تربط الأربع. وعلى الجهة الأخرى، قاعدة واحدة في الوسط، وأربع وحدات حولها، المبيعات، المخزون، المشتريات، والمالية، تقرأ كلها الكمية نفسها: 96.',
      header: 'مثال مركَّب · الكمية المتوفرة لمادة واحدة، مأخوذة في الصباح نفسه · أربع أدوات، ثم قاعدة واحدة',
      left: 'أربع أدوات، أربع نسخ',
      tools: [['الفوترة', 'برنامج على حاسوب واحد'], ['المخزون', 'جدول المخزن'], ['المشتريات', 'جدول الطلبيات'], ['المحاسبة', 'إقفال الشهر الماضي']],
      retype: 'إعادة إدخال', leftSum: 'مادة واحدة، أربع كميات: أيها الصحيحة؟',
      right: 'قاعدة واحدة، أربع وحدات', modules: ['المبيعات', 'المخزون', 'المشتريات', 'المالية'], same: 'تقرأ: 96 متوفرة', baseName: 'المادة ⁦A-1042⁩',
      rightSum: 'مادة واحدة، كمية واحدة، يقرؤها الجميع',
      band: 'النظام المتكامل لا يُعرَّف بشاشاته: يُعرَّف بأن كل معطى لا يُدخَل ولا يُصحَّح إلا في مكان واحد.',
      tiles: [
        { big: '4 كميات، مادة واحدة', l1: 'لكل أداة نسختها، تُحدَّث على وتيرتها', l2: 'والصحيحة تُعرف بعدّ الرف' },
        { big: 'إدخال مرة واحدة', l1: 'البيع ينقص المخزون، يُنشئ المستحَق، ويغذّي الهامش', l2: 'لا أحد يعيد كتابته', hot: true },
        { big: 'ليس برنامجاً إضافياً', l1: 'النظام المتكامل يعوّض النسخ، ولا يُضاف إلى الجداول', l2: 'وإلا صار النسخة الخامسة' },
      ],
      line1: 'المشكل ليس في عدد البرامج: بل في عدد الأماكن التي يُدخَل فيها المعطى نفسه.',
      line2: 'والنظام المتكامل تسعه جملة: لكل معطى مرجع واحد، وكل الوحدات تقرؤه.',
      note: 'مثال مركَّب · مادة واحدة، أربع أدوات، وأربع كميات مأخوذة في الصباح نفسه.',
    },
    fiches: {
      title: 'تنظيف البطاقات قبل الترحيل',
      alt: 'خمسة أعمدة. البرنامج القديم يحتوي 1240 بطاقة مادة. بعد دمج المكرَّرات، تبقى 1060: بنقص 180. وبعد أرشفة البطاقات التي لم تتحرك منذ سنتين، 910: بنقص 150. ومنها 40 تُكمَل قبل الاستيراد، لأن وحدة أو عائلة ناقصة. وتُرحَّل 910 بطاقة.',
      header: 'مثال مركَّب · ملف المواد، قبل الترحيل · ثلاث مراجعات في الأداة القديمة',
      rows: ['في البرنامج القديم', 'بعد دمج المكرَّرات', 'بعد أرشفة البطاقات الميتة', 'ومنها ما يُكمَل قبل الاستيراد', 'البطاقات المرحَّلة'],
      minus: ['', '⁦−180⁩', '⁦−150⁩', '', ''],
      values: ['1240', '1060', '910', '40 تُكمَل', '910'],
      band: 'لا يُرحَّل برنامج، بل تُرحَّل بيانات: وكل مكرَّر مستورَد يصير مكرَّراً رسمياً.',
      tiles: [
        { big: '1240، ثم 910', l1: 'أكثر من ربع البطاقات لم يكن يستحق الرحلة', l2: 'مكرَّرات وبطاقات ميتة', hot: true },
        { big: '3 ملفات مرجعية', l1: 'المواد، الزبائن، والمورّدون: بطاقة لكل واحد', l2: 'تُنظَّف قبل أي عرض تجريبي' },
        { big: 'مسؤول لكل ملف', l1: 'من ينشئ البطاقة، ومن يصادق عليها', l2: 'وإلا عادت المكرَّرات' },
      ],
      line1: 'التنظيف يتم في الأداة القديمة، قبل الترحيل: هو العمل الأقل ظهوراً، وكل الباقي يتوقف عليه.',
      line2: 'والمراجعة نفسها تُنجز على الزبائن والمورّدين: زبون في ثلاث نسخ يعني ثلاثة أرصدة خاطئة.',
      note: 'مثال مركَّب · 1240 بطاقة مادة؛ أنجزوا العدّ على ملفكم.',
    },
  },
};
