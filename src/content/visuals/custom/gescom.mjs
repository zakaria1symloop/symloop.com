// Bespoke animated figures for the 2027 "logiciel de gestion commerciale en
// Algérie" post.
//  iles():   three tools that do not talk to each other (notebook and WhatsApp,
//            single-workstation software, spreadsheet) drawn as three islands,
//            with the retyping between them as arrows, the phone calls as a
//            dashed return path, and a tally of what is typed again each day
//            (bars that grow); three tiles.
//  chaine(): one sale, five documents born from one another (quotation, order,
//            delivery note, invoice, payment). Under each document, three
//            gauges show what it does to physical stock, available stock and
//            the customer's balance; the gauge that moves is accented; three
//            tiles.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function growX(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
const I = (x) => `⁦${x}⁩`;
const TINT = 'rgba(242,181,68,0.06)';

function tiles(c, css, P, ky, ts, at0) {
  let s = '';
  ts.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, at0 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? TINT : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  return s;
}
const motionOff = (P) => `@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"],svg rect[style*="${P}-"]{animation:none !important}}`;
// an arrow whose head follows the mirrored direction
function arrow(c, x1, y, x2, col) { const a = c.X(x1), b = c.X(x2); const d = b > a ? 1 : -1; return `<line x1="${a}" y1="${y}" x2="${b - d * 7}" y2="${y}" stroke="${col}" stroke-width="1.5"/><path d="M ${b} ${y} L ${b - d * 9} ${y - 4.5} L ${b - d * 9} ${y + 4.5} Z" fill="${col}"/>`; }

const COUNTS = [52, 38, 38];

export function iles(t, rtl) {
  const c = ctx(rtl); const P = 'gi'; const css = []; const H = 580;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const by = 146, bh = 96, bw = 290, xs = [80, 455, 830];
  t.boxes.forEach((b, i) => {
    const x = xs[i]; const hot = i === 1;
    s += `<g style="animation:${show(css, P, `b${i}`, 4 + i * 4)}">` + rect(c, x, by, bw, bh, { stroke: hot ? C.accent : C.line2, fill: hot ? TINT : C.fill })
      + text(c, x + 14, by + 24, b.t, { size: 11.5, fill: hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 14, by + 40, b.s, { size: 8.5, font: 'mono', fill: C.fg55 })
      + text(c, x + 14, by + 62, b.l1, { size: 9.5, fill: C.fg }) + text(c, x + 14, by + 78, b.l2, { size: 9.5, fill: C.fg70 }) + '</g>';
  });
  // retyping between the islands
  s += `<g style="animation:${show(css, P, 'a0', 7)}">` + arrow(c, xs[0] + bw + 6, by + bh / 2, xs[1] - 6, C.accent) + text(c, (xs[0] + bw + xs[1]) / 2, by + bh + 16, t.arrows[0], { size: 9, font: 'mono', fill: C.accent, anchor: 'middle' }) + '</g>';
  s += `<g style="animation:${show(css, P, 'a1', 11)}">` + arrow(c, xs[1] + bw + 6, by + bh / 2, xs[2] - 6, C.accent) + text(c, (xs[1] + bw + xs[2]) / 2, by + bh + 16, t.arrows[1], { size: 9, font: 'mono', fill: C.accent, anchor: 'middle' }) + '</g>';
  // the phone calls: a dashed path back from the spreadsheet to the salespeople
  const ry = by + bh + 44; const xa = c.X(xs[2] + bw / 2), xb = c.X(xs[0] + bw / 2);
  s += `<g style="animation:${show(css, P, 'ret', 15)}"><path d="M ${xa} ${by + bh} V ${ry} H ${xb} V ${by + bh + 9}" fill="none" stroke="${C.fg55}" stroke-width="1.2" stroke-dasharray="5 4"/><path d="M ${xb} ${by + bh} L ${xb - 4.5} ${by + bh + 9} L ${xb + 4.5} ${by + bh + 9} Z" fill="${C.fg55}"/>`
    + text(c, 600, ry - 7, t.calls, { size: 9.5, fill: C.fg70, anchor: 'middle' }) + '</g>';
  // the tally
  const ty = ry + 28;
  t.tally.forEach((r, i) => {
    const y = ty + i * 30; const at = 18 + i * 3; const w = COUNTS[i] * 6;
    s += `<g style="animation:${show(css, P, `t${i}`, at)}">` + text(c, 80, y + 14, r, { size: 10, fill: C.fg }) + '</g>';
    s += `<rect x="${c.RX(420, w)}" y="${y + 4}" width="${w}" height="13" fill="${C.accent}" style="transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'};animation:${growX(css, P, `g${i}`, at + 0.4, 2)}"/>`;
    s += `<g style="animation:${show(css, P, `v${i}`, at + 2.4)}">` + text(c, 420 + w + 10, y + 15, String(COUNTS[i]), { size: 12, font: 'mono', fill: C.accent, weight: 500 }) + '</g>';
  });
  const ky = ty + 3 * 30 + 12;
  s += tiles(c, css, P, ky, t.tiles, 30);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

const PHYS = [140, 140, 60, 60, 60];
const DISPO = [140, 40, 40, 40, 40];
const DUE = [0, 0, 0, 2560000, 1060000];

export function chaine(t, rtl) {
  const c = ctx(rtl); const P = 'gc'; const css = []; const H = 578;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const gx = 250, cw = 174, dy = 146, dh = 92;
  t.docs.forEach((d, i) => {
    const x = gx + i * cw + 4; const w = cw - 8; const at = 4 + i * 5; const first = i === 0;
    s += `<g style="animation:${show(css, P, `d${i}`, at)}">` + rect(c, x, dy, w, dh, { stroke: first ? C.accent : C.line2, fill: first ? TINT : C.fill })
      + text(c, x + 12, dy + 22, d.t, { size: 11, fill: first ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, dy + 37, d.n, { size: 8.5, font: 'mono', fill: C.fg55 })
      + text(c, x + 12, dy + 58, d.l, { size: 9.5, fill: C.fg }) + text(c, x + 12, dy + 76, d.o, { size: 8, font: 'mono', fill: first ? C.accent : C.fg55 }) + '</g>';
  });
  // the chain under the five documents
  s += `<rect x="${c.RX(gx + 4, 5 * cw - 8)}" y="${dy + dh + 6}" width="${5 * cw - 8}" height="2" fill="${C.accent}" style="transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'};animation:${growX(css, P, 'ch', 5, 22)}"/>`;
  const my = dy + dh + 24, mh = 46; const series = [PHYS, DISPO, DUE]; const maxes = [140, 140, 2560000];
  series.forEach((vals, r) => {
    const y = my + r * mh;
    s += `<g style="animation:${show(css, P, `rl${r}`, 4)}">` + text(c, 80, y + 20, t.rows[r].t, { size: 10.5, fill: C.fg, weight: 500 }) + text(c, 80, y + 34, t.rows[r].s, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>';
    vals.forEach((v, i) => {
      const x = gx + i * cw + 14; const track = cw - 28; const w = Math.max(v ? 3 : 0, (v / maxes[r]) * track); const changed = i > 0 && v !== vals[i - 1]; const at = 5.5 + i * 5 + r * 0.5;
      s += `<g style="animation:${show(css, P, `m${r}${i}`, at)}">` + rect(c, x, y + 10, track, 10, { stroke: C.line, fill: 'none' })
        + (w ? `<rect x="${c.RX(x, w).toFixed(1)}" y="${y + 10}" width="${w.toFixed(1)}" height="10" fill="${changed ? C.accent : C.fg55}"/>` : '')
        + text(c, x, y + 37, t.fmt(v, r), { size: 10, font: 'mono', fill: changed ? C.accent : C.fg70, weight: changed ? 500 : 300 }) + '</g>';
    });
  });
  const ky = my + 3 * mh + 14;
  s += tiles(c, css, P, ky, t.tiles, 33);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

const NB = ' ';
const frNum = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, NB);
const enNum = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const STRINGS = {
  fr: {
    iles: {
      title: 'Trois outils qui ne se parlent pas : 128 ressaisies par jour',
      alt: 'Trois îles : le carnet, le téléphone et WhatsApp où arrivent 52 commandes par jour ; le logiciel installé sur un seul poste où sont faits 38 bons de livraison puis 38 factures ; le tableur où sont recopiés les 38 bons pour tenir le stock. Entre elles, 52 commandes retapées et 38 bons recopiés, et 25 appels par jour des commerciaux pour connaître un prix ou un stock. Au total 128 ressaisies par jour, soit 3 heures 12 minutes à une minute et demie la saisie, et environ 56 erreurs par mois à 2 % d’erreur.',
      header: 'Exemple construit · distributeur, six commerciaux, un dépôt · une journée ordinaire',
      boxes: [
        { t: 'Carnet, téléphone, WhatsApp', s: 'les commandes des clients', l1: '52 commandes notées par jour', l2: 'par six commerciaux' },
        { t: 'Logiciel sur un seul poste', s: 'bons de livraison et factures', l1: '38 bons, puis 38 factures', l2: 'la facture est refaite d’après le bon' },
        { t: 'Tableur', s: 'le stock et les relevés clients', l1: '38 bons recopiés ligne à ligne', l2: 'le stock date de la veille, au mieux' },
      ],
      arrows: ['52 retapées', '38 recopiés'],
      calls: '25 appels par jour au bureau : « tu as le prix ? il en reste ? »',
      tally: ['Commandes retapées dans le logiciel', 'Factures refaites à partir des bons', 'Bons recopiés dans le tableur du stock'],
      tiles: [
        { big: '128 ressaisies par jour', l1: 'la même information tapée deux ou trois fois', l2: '52 + 38 + 38' },
        { big: '3 h 12 min par jour', l1: 'à une minute et demie la saisie', l2: 'le temps d’une personne, tous les matins', hot: true },
        { big: '56 erreurs par mois', l1: 'à 2 % d’erreur de saisie, sur 22 jours', l2: 'chacune fausse le stock ou une facture' },
      ],
      line1: 'Le stock n’est pas faux parce que quelqu’un compte mal : il est faux parce qu’il est recopié,',
      line2: 'une journée après, à partir de documents qui ont eux-mêmes été retapés.',
      note: 'Exemple construit · volumes, durée par saisie et taux d’erreur sont des hypothèses de l’exemple ; comptez les vôtres sur une journée.',
    },
    chaine: {
      title: 'Une vente, cinq documents, une seule saisie',
      alt: 'Une vente de 100 pompes suivie en cinq documents. Le devis est saisi une fois. La commande naît du devis et réserve 100 pièces : le stock disponible passe de 140 à 40. Le bon de livraison naît de la commande, 80 pièces livrées et 20 en reliquat : le stock physique passe de 140 à 60. La facture naît du bon, 80 fois 32 000 dinars : la créance du client passe à 2 560 000 dinars. Le règlement de 1 500 000 dinars la ramène à 1 060 000.',
      header: 'Exemple construit · article « pompe P-40 », 140 pièces au dépôt, 32 000 DA l’unité',
      docs: [
        { t: 'Devis', n: 'D-2027-118', l: '100 pompes P-40', o: 'saisi une fois' },
        { t: 'Commande', n: 'C-2027-096', l: '100 commandées', o: 'née du devis' },
        { t: 'Bon de livraison', n: 'BL-2027-141', l: '80 livrées, 20 en reliquat', o: 'né de la commande' },
        { t: 'Facture', n: 'F-2027-133', l: '80 × 32 000 = 2 560 000 DA', o: 'née du bon' },
        { t: 'Règlement', n: 'R-2027-087', l: '1 500 000 DA encaissés', o: 'rattaché à la facture' },
      ],
      rows: [{ t: 'Stock physique', s: 'ce qui est au dépôt' }, { t: 'Stock disponible', s: 'physique moins réservé' }, { t: 'Créance du client', s: 'ce qu’il doit, en dinars' }],
      fmt: (v) => frNum(v),
      tiles: [
        { big: '1 saisie', l1: 'le devis ; les quatre autres documents en naissent', l2: 'aucune quantité, aucun prix retapé', hot: true },
        { big: '20 en reliquat', l1: 'restent réservées pour ce client', l2: 'livraison partielle : 80 sur 100' },
        { big: '1 060 000 DA', l1: 'restent dus après le règlement', l2: 'la créance se lit sans tableur' },
      ],
      line1: 'Le stock et la créance ne sont pas saisis : ils sont la conséquence des documents.',
      line2: 'Si un document peut être fait hors du logiciel, le stock est faux le soir même.',
      note: 'Exemple construit · article, quantités, prix et numéros sont ceux de l’exemple.',
    },
  },
  en: {
    iles: {
      title: 'Three tools that do not talk to each other: 128 retypings a day',
      alt: 'Three islands: the notebook, the phone and WhatsApp where 52 orders arrive each day; software installed on a single workstation where 38 delivery notes and then 38 invoices are made; the spreadsheet where the 38 delivery notes are copied to keep stock. Between them, 52 orders retyped and 38 notes copied, and 25 calls a day from salespeople asking for a price or a stock level. In all 128 retypings a day, 3 hours 12 minutes at a minute and a half each, and about 56 errors a month at a 2 % error rate.',
      header: 'Constructed example · distributor, six salespeople, one warehouse · an ordinary day',
      boxes: [
        { t: 'Notebook, phone, WhatsApp', s: 'customer orders', l1: '52 orders noted each day', l2: 'by six salespeople' },
        { t: 'Software on one workstation', s: 'delivery notes and invoices', l1: '38 notes, then 38 invoices', l2: 'the invoice is redone from the note' },
        { t: 'Spreadsheet', s: 'stock and customer statements', l1: '38 notes copied line by line', l2: 'stock is a day old, at best' },
      ],
      arrows: ['52 retyped', '38 copied'],
      calls: '25 calls a day to the office: “do you have the price? is there any left?”',
      tally: ['Orders retyped into the software', 'Invoices redone from delivery notes', 'Notes copied into the stock spreadsheet'],
      tiles: [
        { big: '128 retypings a day', l1: 'the same information typed two or three times', l2: '52 + 38 + 38' },
        { big: '3 h 12 min a day', l1: 'at a minute and a half per entry', l2: 'one person’s time, every morning', hot: true },
        { big: '56 errors a month', l1: 'at a 2 % typing error rate, over 22 days', l2: 'each one distorts stock or an invoice' },
      ],
      line1: 'Stock is not wrong because someone counts badly: it is wrong because it is copied,',
      line2: 'a day later, from documents that were themselves retyped.',
      note: 'Constructed example · volumes, time per entry and error rate are assumptions of the example; count your own over one day.',
    },
    chaine: {
      title: 'One sale, five documents, typed once',
      alt: 'A sale of 100 pumps followed through five documents. The quotation is typed once. The order is born from the quotation and reserves 100 units: available stock goes from 140 to 40. The delivery note is born from the order, 80 delivered and 20 on back order: physical stock goes from 140 to 60. The invoice is born from the note, 80 times 32,000 dinars: the customer balance goes to 2,560,000 dinars. The payment of 1,500,000 dinars brings it down to 1,060,000.',
      header: 'Constructed example · item “pump P-40”, 140 units in the warehouse, 32,000 DZD each',
      docs: [
        { t: 'Quotation', n: 'D-2027-118', l: '100 pumps P-40', o: 'typed once' },
        { t: 'Order', n: 'C-2027-096', l: '100 ordered', o: 'born from the quotation' },
        { t: 'Delivery note', n: 'BL-2027-141', l: '80 delivered, 20 on back order', o: 'born from the order' },
        { t: 'Invoice', n: 'F-2027-133', l: '80 × 32,000 = 2,560,000 DZD', o: 'born from the note' },
        { t: 'Payment', n: 'R-2027-087', l: '1,500,000 DZD received', o: 'attached to the invoice' },
      ],
      rows: [{ t: 'Physical stock', s: 'what is in the warehouse' }, { t: 'Available stock', s: 'physical minus reserved' }, { t: 'Customer balance', s: 'what they owe, in dinars' }],
      fmt: (v) => enNum(v),
      tiles: [
        { big: 'typed once', l1: 'the quotation; the four other documents are born from it', l2: 'no quantity, no price retyped', hot: true },
        { big: '20 on back order', l1: 'stay reserved for this customer', l2: 'partial delivery: 80 out of 100' },
        { big: '1,060,000 DZD', l1: 'still owed after the payment', l2: 'the balance is read with no spreadsheet' },
      ],
      line1: 'Stock and the customer balance are not typed in: they are the consequence of the documents.',
      line2: 'If a document can be made outside the software, stock is wrong that same evening.',
      note: 'Constructed example · item, quantities, price and numbers belong to the example.',
    },
  },
  ar: {
    iles: {
      title: 'ثلاث أدوات لا تتكلم مع بعضها: 128 إعادة إدخال في اليوم',
      alt: 'ثلاث جزر: الدفتر والهاتف وواتساب حيث تصل 52 طلبية في اليوم؛ البرنامج المنصَّب على حاسوب واحد حيث يُنجز 38 وصل تسليم ثم 38 فاتورة؛ والجدول حيث تُنسخ الوصولات الـ 38 لمسك المخزون. وبينها 52 طلبية يُعاد إدخالها و38 وصلاً يُنسخ، و25 مكالمة في اليوم من البائعين لمعرفة سعر أو مخزون. المجموع 128 إعادة إدخال في اليوم، أي 3 ساعات و12 دقيقة بدقيقة ونصف لكل إدخال، ونحو 56 خطأ في الشهر بنسبة خطأ 2 بالمئة.',
      header: 'مثال مركَّب · موزّع، ستة بائعين، مستودع واحد · يوم عادي',
      boxes: [
        { t: 'الدفتر، الهاتف، واتساب', s: 'طلبيات الزبائن', l1: '52 طلبية تُدوَّن في اليوم', l2: 'من ستة بائعين' },
        { t: 'برنامج على حاسوب واحد', s: 'وصولات التسليم والفواتير', l1: '38 وصلاً، ثم 38 فاتورة', l2: 'الفاتورة تُعاد انطلاقاً من الوصل' },
        { t: 'جدول إكسل', s: 'المخزون وكشوف الزبائن', l1: '38 وصلاً تُنسخ سطراً سطراً', l2: 'المخزون يعود إلى الأمس، في أحسن الأحوال' },
      ],
      arrows: ['52 يُعاد إدخالها', '38 تُنسخ'],
      calls: '25 مكالمة في اليوم إلى المكتب: «عندك السعر؟ هل بقي منه؟»',
      tally: ['طلبيات يُعاد إدخالها في البرنامج', 'فواتير تُعاد انطلاقاً من الوصولات', 'وصولات تُنسخ في جدول المخزون'],
      tiles: [
        { big: '128 إعادة إدخال في اليوم', l1: 'المعلومة نفسها تُكتب مرتين أو ثلاثاً', l2: I('52 + 38 + 38') },
        { big: '3 ساعات و12 دقيقة في اليوم', l1: 'بدقيقة ونصف لكل إدخال', l2: 'وقت شخص كامل، كل صباح', hot: true },
        { big: '56 خطأ في الشهر', l1: `بنسبة خطأ ${I('2 %')}، على 22 يوماً`, l2: 'كل واحد يُفسد المخزون أو فاتورة' },
      ],
      line1: 'المخزون ليس خاطئاً لأن أحداً يعدّ بشكل سيئ: هو خاطئ لأنه يُنسخ،',
      line2: 'بعد يوم، من وثائق أُعيد إدخالها هي نفسها.',
      note: 'مثال مركَّب · الأحجام ومدة الإدخال ونسبة الخطأ فرضيات المثال؛ عُدّوا أرقامكم في يوم واحد.',
    },
    chaine: {
      title: 'بيعة واحدة، خمس وثائق، إدخال واحد',
      alt: 'بيعة من 100 مضخة تُتابَع في خمس وثائق. عرض السعر يُدخَل مرة واحدة. الطلبية تولد من عرض السعر وتحجز 100 قطعة: المخزون المتاح ينتقل من 140 إلى 40. وصل التسليم يولد من الطلبية، 80 قطعة مسلَّمة و20 باقية: المخزون الفعلي ينتقل من 140 إلى 60. الفاتورة تولد من الوصل، 80 في 32 000 دينار: دين الزبون يصير 2 560 000 دينار. والتسديد بـ 1 500 000 دينار ينزل به إلى 1 060 000.',
      header: `مثال مركَّب · السلعة «مضخة ${I('P-40')}»، 140 قطعة في المستودع، ${I('32 000')} دينار للقطعة`,
      docs: [
        { t: 'عرض السعر', n: I('D-2027-118'), l: `100 مضخة ${I('P-40')}`, o: 'يُدخَل مرة واحدة' },
        { t: 'الطلبية', n: I('C-2027-096'), l: '100 مطلوبة', o: 'تولد من عرض السعر' },
        { t: 'وصل التسليم', n: I('BL-2027-141'), l: '80 مسلَّمة، 20 باقية', o: 'يولد من الطلبية' },
        { t: 'الفاتورة', n: I('F-2027-133'), l: `${I('80 × 32 000 = 2 560 000')} دج`, o: 'تولد من الوصل' },
        { t: 'التسديد', n: I('R-2027-087'), l: `${I('1 500 000')} دج محصَّلة`, o: 'مربوط بالفاتورة' },
      ],
      rows: [{ t: 'المخزون الفعلي', s: 'ما هو في المستودع' }, { t: 'المخزون المتاح', s: 'الفعلي ناقص المحجوز' }, { t: 'دين الزبون', s: 'ما عليه، بالدينار' }],
      fmt: (v) => I(frNum(v)),
      tiles: [
        { big: 'إدخال واحد', l1: 'عرض السعر؛ والوثائق الأربع الأخرى تولد منه', l2: 'لا كمية ولا سعر يُعاد إدخاله', hot: true },
        { big: '20 قطعة باقية', l1: 'تبقى محجوزة لهذا الزبون', l2: 'تسليم جزئي: 80 من 100' },
        { big: `${I('1 060 000')} دج`, l1: 'تبقى مستحقة بعد التسديد', l2: 'الدين يُقرأ دون جدول' },
      ],
      line1: 'المخزون ودين الزبون لا يُدخَلان: هما نتيجة الوثائق.',
      line2: 'وإذا أمكن إنجاز وثيقة خارج البرنامج، صار المخزون خاطئاً في المساء نفسه.',
      note: 'مثال مركَّب · السلعة والكميات والسعر والأرقام خاصة بالمثال.',
    },
  },
};
