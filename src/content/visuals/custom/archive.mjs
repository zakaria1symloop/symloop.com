// Bespoke animated figures for the 2027 "comment archiver des documents" page.
//  essai(): ten documents to find again, with a stopwatch. Left, before: ten
//           bars grow one after another, as long as the minutes it took; three
//           documents are never found (dashed, accented). Right, after filing
//           and indexing: the same ten documents, each found in under a minute.
//  nom():   a file name that can be found again. Three names nobody can search,
//           then one built name whose parts alternate in colour, then five rows
//           that appear one by one: each part of the name and the rule behind it.
// File names read left to right in every locale: they are drawn in their own
// text elements with direction="ltr", and parts are told apart by colour,
// never by measured positions.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, open, heading, esc } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function growX(css, P, id, at, dur, rtl) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'} center;animation:${P}-${id} ${LOOP}s linear infinite`; }
const TINT = 'rgba(242,181,68,0.06)';
const DARK = '#0b0b0b';

function tiles(c, css, P, ky, ts, at0) {
  let s = '';
  ts.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, at0 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? TINT : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  return s;
}
const motionOff = (P) => `@media (prefers-reduced-motion: reduce){svg [style*="${P}-"]{animation:none !important}}`;
// a left-to-right monospace line, anchored where the caller says, parts coloured one by one
function ltrSpans(x, y, parts, size, anchor) {
  const L = ctx(false);
  const monoCss = /style="([^"]*)"/.exec(text(L, 0, 0, 'x', { size, font: 'mono' }))[1];
  return `<text x="${x}" y="${y}" style="${monoCss}" direction="ltr" text-anchor="${anchor}">` + parts.map(([str, fill, bold]) => (str ? `<tspan fill="${fill}" style="font-weight:${bold ? 500 : 300}">${esc(str)}</tspan>` : '')).join('') + '</text>';
}

// minutes it took to find each of the ten documents before; null = never found
const BEFORE = [2, 14, 6, null, 25, 4, null, 9, 18, null];
// seconds it took after filing and indexing
const AFTER = [20, 35, 15, 50, 40, 25, 30, 45, 20, 55];
const PX_PER_MIN = 10;

export function essai(t, rtl) {
  const c = ctx(rtl); const P = 'ae'; const css = []; const H = 660;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const y0 = 182, pitch = 22;
  // left: before
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 510, 280, { stroke: C.accent, fill: TINT }) + text(c, 96, 166, t.left, { size: 11, fill: C.fg, weight: 500 }) + '</g>';
  BEFORE.forEach((m, i) => {
    const y = y0 + i * pitch; const at = 5 + i * 2; const bx = 270;
    s += `<g style="animation:${show(css, P, `an${i}`, at)}">` + text(c, 96, y + 10, t.docs[i], { size: 9, fill: m === null ? C.accent : C.fg70 }) + '</g>';
    if (m === null) {
      s += `<g style="animation:${show(css, P, `ab${i}`, at + 1.5)}">` + rect(c, bx, y, 250, 12, { stroke: C.accent, fill: 'none', dash: '4 3' }) + text(c, bx + 258, y + 10, t.lost, { size: 9, font: 'mono', fill: C.accent, weight: 500 }) + '</g>';
    } else {
      const w = m * PX_PER_MIN;
      s += `<g style="${growX(css, P, `ab${i}`, at, 1.5, rtl)}">` + rect(c, bx, y, w, 12, { stroke: C.fg70, fill: C.fg70 }) + '</g>';
      s += `<g style="animation:${show(css, P, `av${i}`, at + 1.5)}">` + text(c, bx + w + 8, y + 10, t.beforeVals[i], { size: 9, font: 'mono', fill: C.fg }) + '</g>';
    }
  });
  s += `<g style="animation:${show(css, P, 'as', 27)}">` + text(c, 96, 413, t.leftSum, { size: 10, fill: C.accent, weight: 500 }) + '</g>';
  // right: after
  s += `<g style="animation:${show(css, P, 'pb', 31)}">` + rect(c, 610, 144, 510, 280, { stroke: C.fg70, fill: DARK }) + text(c, 626, 166, t.right, { size: 11, fill: C.fg, weight: 500 }) + '</g>';
  AFTER.forEach((sec, i) => {
    const y = y0 + i * pitch; const at = 33 + i * 1.5; const bx = 800; const w = Math.max(3, (sec / 60) * PX_PER_MIN);
    s += `<g style="animation:${show(css, P, `bn${i}`, at)}">` + text(c, 626, y + 10, t.docs[i], { size: 9, fill: C.fg70 }) + '</g>';
    s += `<g style="${growX(css, P, `bb${i}`, at, 1, rtl)}">` + rect(c, bx, y, w, 12, { stroke: C.fg, fill: C.fg }) + '</g>';
    s += `<g style="animation:${show(css, P, `bv${i}`, at + 1)}">` + text(c, bx + w + 8, y + 10, t.afterVals[i], { size: 9, font: 'mono', fill: C.fg }) + '</g>';
  });
  s += `<g style="animation:${show(css, P, 'bs', 50)}">` + text(c, 626, 413, t.rightSum, { size: 10, fill: C.fg, weight: 500 }) + '</g>';
  const by = 440;
  s += `<g style="animation:${show(css, P, 'bd', 54)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 500;
  s += tiles(c, css, P, ky, t.tiles, 58);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export function nom(t, rtl) {
  const c = ctx(rtl); const P = 'an'; const css = []; const H = 708;
  const N = { ...c, X: (x) => x, RX: (x) => x };
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  // three names nobody can search
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 1040, 92, { stroke: C.fg35, fill: DARK }) + text(c, 96, 166, t.badTitle, { size: 11, fill: C.fg, weight: 500 }) + '</g>';
  t.bad.forEach(([name, remark], i) => {
    const x = 96 + i * 340;
    s += `<g style="animation:${show(css, P, `b${i}`, 5 + i * 3)}">` + rect(c, x, 178, 328, 46, { stroke: C.line2, fill: C.fill }) + ltrSpans(c.X(x + 164), 197, [[name, C.fg70, true]], 12, 'middle') + text(c, x + 164, 215, remark, { size: 9, fill: C.fg55, anchor: 'middle' }) + '</g>';
  });
  // one built name, parts alternating in colour
  s += `<g style="animation:${show(css, P, 'pb', 16)}">` + rect(N, 80, 250, 1040, 74, { stroke: C.accent, fill: TINT }) + text(N, 600, 272, t.goodTitle, { size: 10, fill: C.fg70, anchor: 'middle' }) + '</g>';
  const SEP = ['_', C.fg35];
  const parts = [];
  t.parts.forEach(([p], i) => { if (i) parts.push(SEP); parts.push([p, i % 2 === 0 ? C.accent : C.fg, true]); });
  parts.push(['.pdf', C.fg55]);
  s += `<g style="animation:${show(css, P, 'g', 19)}">` + ltrSpans(600, 305, parts, 19, 'middle') + '</g>';
  // each part, and the rule behind it
  t.parts.forEach(([p, rule], i) => {
    const y = 340 + i * 28; const hot = i % 2 === 0;
    s += `<g style="animation:${show(css, P, `r${i}`, 25 + i * 5)}">` + rect(c, 80, y, 200, 22, { stroke: hot ? C.accent : C.fg70, fill: hot ? TINT : C.fill }) + ltrSpans(c.X(180), y + 15, [[p, hot ? C.accent : C.fg, true]], 11, 'middle') + text(c, 296, y + 15, rule, { size: 10.5, fill: C.fg }) + '</g>';
  });
  const by = 488;
  s += `<g style="animation:${show(css, P, 'bd', 52)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 548;
  s += tiles(c, css, P, ky, t.tiles, 56);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    essai: {
      title: 'Dix documents à retrouver, un chronomètre',
      alt: 'Deux panneaux, les mêmes dix documents. À gauche, avant : sept documents sont retrouvés, en 2 à 25 minutes, 11 minutes en moyenne ; trois ne sont jamais retrouvés, le procès-verbal de réception, le plan de l’atelier et la garantie de la machine. À droite, après classement et index : les dix documents sont retrouvés, chacun en moins d’une minute.',
      header: 'Exemple construit · dix documents tirés au hasard, demandés un par un · le temps mis à les retrouver, à la même échelle',
      left: 'Avant : armoires et dossier partagé', right: 'Après : classés, nommés, indexés',
      docs: ['facture fournisseur de mars', 'contrat de bail du dépôt', 'bon de livraison signé', 'procès-verbal de réception', 'attestation d’assurance', 'devis accepté par le client', 'plan de l’atelier', 'relevé bancaire de juin', 'courrier recommandé reçu', 'garantie de la machine'],
      beforeVals: ['2 min', '14 min', '6 min', '', '25 min', '4 min', '', '9 min', '18 min', ''],
      afterVals: ['20 s', '35 s', '15 s', '50 s', '40 s', '25 s', '30 s', '45 s', '20 s', '55 s'],
      lost: 'introuvable',
      leftSum: '7 sur 10 retrouvés, 78 minutes au total ; 3 jamais retrouvés',
      rightSum: '10 sur 10 retrouvés, moins de 6 minutes au total',
      band: 'L’essai tient en une matinée : dix documents tirés au hasard, un chronomètre, et la liste de ceux qu’on n’a pas retrouvés.',
      tiles: [
        { big: '7 sur 10', l1: 'retrouvés, en 11 minutes en moyenne', l2: 'et 3 jamais retrouvés', hot: true },
        { big: '10 sur 10', l1: 'retrouvés, chacun en moins d’une minute', l2: 'après classement, nom et index' },
        { big: 'le vrai coût', l1: 'ce n’est pas le rangement : c’est la recherche', l2: 'et le document qu’on refait' },
      ],
      line1: 'Refaites l’essai chez vous avant toute décision : il dit quels documents manquent, et où part le temps.',
      line2: 'Puis refaites-le après : le même essai, les mêmes dix documents, est la seule mesure qui compte.',
      note: 'Exemple construit · dix documents, deux essais à huit semaines d’écart.',
    },
    nom: {
      title: 'Un nom de fichier qui se retrouve',
      alt: 'En haut, trois noms de fichiers qu’on ne retrouve pas : scan0001.pdf, facture finale (2) bis.pdf, Nouveau document.docx. Au milieu, un nom construit : 2027-03-14_facture_client-0418_F-2291_v2.pdf. En bas, ses cinq parties et la règle de chacune : la date, année-mois-jour ; le type, pris dans une liste fermée ; le tiers, par son code ; le numéro de la pièce ; la version, en chiffres.',
      header: 'Le même document, quatre noms · le quatrième se trie, se cherche et se comprend sans l’ouvrir',
      badTitle: 'Trois noms qu’on ne retrouve pas',
      bad: [['scan0001.pdf', 'aucun mot à chercher'], ['facture finale (2) bis.pdf', 'laquelle est la bonne ?'], ['Nouveau document.docx', 'personne ne sait ce que c’est']],
      goodTitle: 'Un nom construit, toujours dans le même ordre',
      parts: [
        ['2027-03-14', 'La date du document, année-mois-jour : le tri par nom devient un tri par date'],
        ['facture', 'Le type, pris dans une liste fermée de dix à quinze mots'],
        ['client-0418', 'Le tiers, par son code : le même que dans le logiciel de gestion'],
        ['F-2291', 'Le numéro de la pièce, celui qui est imprimé dessus'],
        ['v2', 'La version, en chiffres : jamais « final », jamais « bis »'],
      ],
      band: 'Un bon nom se lit sans ouvrir le fichier, se trie tout seul, et se cherche par n’importe laquelle de ses parties.',
      tiles: [
        { big: 'année-mois-jour', l1: 'la date en tête : l’ordre des noms est l’ordre du temps', l2: 'format ISO 8601', hot: true },
        { big: 'une liste fermée', l1: 'dix à quinze types, écrits toujours pareil', l2: 'facture, contrat, devis, bon, courrier…' },
        { big: 'sans accent ni espace', l1: 'des tirets, des minuscules, des noms courts', l2: 'ils passent partout, et se tapent vite' },
      ],
      line1: 'La règle tient sur une demi-page, affichée près du scanner : elle vaut pour le papier numérisé comme pour les fichiers.',
      line2: 'Elle s’applique d’abord aux nouveaux documents, dès demain ; l’ancien stock se reprend ensuite, par lots.',
      note: 'Exemple construit · codes et numéros fictifs ; adaptez les cinq parties à vos pièces.',
    },
  },
  en: {
    essai: {
      title: 'Ten documents to find again, and a stopwatch',
      alt: 'Two panels, the same ten documents. On the left, before: seven documents are found, in 2 to 25 minutes, 11 minutes on average; three are never found, the acceptance report, the workshop plan and the machine warranty. On the right, after filing and indexing: all ten documents are found, each in under a minute.',
      header: 'Constructed example · ten documents drawn at random, asked for one by one · the time taken to find them, on the same scale',
      left: 'Before: cabinets and shared folder', right: 'After: filed, named, indexed',
      docs: ['supplier invoice for March', 'lease of the depot', 'signed delivery note', 'acceptance report', 'insurance certificate', 'quote accepted by the customer', 'workshop plan', 'bank statement for June', 'registered letter received', 'machine warranty'],
      beforeVals: ['2 min', '14 min', '6 min', '', '25 min', '4 min', '', '9 min', '18 min', ''],
      afterVals: ['20 s', '35 s', '15 s', '50 s', '40 s', '25 s', '30 s', '45 s', '20 s', '55 s'],
      lost: 'not found',
      leftSum: '7 out of 10 found, 78 minutes in all; 3 never found',
      rightSum: '10 out of 10 found, under 6 minutes in all',
      band: 'The test takes one morning: ten documents drawn at random, a stopwatch, and the list of those that were not found.',
      tiles: [
        { big: '7 out of 10', l1: 'found, in 11 minutes on average', l2: 'and 3 never found', hot: true },
        { big: '10 out of 10', l1: 'found, each in under a minute', l2: 'after filing, naming and indexing' },
        { big: 'the real cost', l1: 'it is not the filing: it is the searching', l2: 'and the document that is redone' },
      ],
      line1: 'Run the test at your own company before any decision: it tells which documents are missing, and where the time goes.',
      line2: 'Then run it again afterwards: the same test, the same ten documents, is the only measure that counts.',
      note: 'Constructed example · ten documents, two tests eight weeks apart.',
    },
    nom: {
      title: 'A file name that can be found again',
      alt: 'At the top, three file names that cannot be found again: scan0001.pdf, invoice final (2) new.pdf, New document.docx. In the middle, a built name: 2027-03-14_invoice_customer-0418_F-2291_v2.pdf. At the bottom, its five parts and the rule for each: the date, year-month-day; the type, taken from a closed list; the third party, by its code; the number of the document; the version, in figures.',
      header: 'The same document, four names · the fourth sorts, searches and explains itself without being opened',
      badTitle: 'Three names that cannot be found again',
      bad: [['scan0001.pdf', 'no word to search for'], ['invoice final (2) new.pdf', 'which one is the right one?'], ['New document.docx', 'nobody knows what it is']],
      goodTitle: 'A built name, always in the same order',
      parts: [
        ['2027-03-14', 'The date of the document, year-month-day: sorting by name becomes sorting by date'],
        ['invoice', 'The type, taken from a closed list of ten to fifteen words'],
        ['customer-0418', 'The third party, by its code: the same as in the management software'],
        ['F-2291', 'The number of the document, the one printed on it'],
        ['v2', 'The version, in figures: never “final”, never “new”'],
      ],
      band: 'A good name is read without opening the file, sorts by itself, and can be searched by any of its parts.',
      tiles: [
        { big: 'year-month-day', l1: 'the date first: the order of names is the order of time', l2: 'ISO 8601 format', hot: true },
        { big: 'a closed list', l1: 'ten to fifteen types, always written the same way', l2: 'invoice, contract, quote, note, letter…' },
        { big: 'no accent, no space', l1: 'hyphens, lower case, short names', l2: 'they work everywhere, and are quick to type' },
      ],
      line1: 'The rule fits on half a page, pinned near the scanner: it holds for scanned paper as for files.',
      line2: 'It applies first to new documents, from tomorrow; the old stock is taken up afterwards, in batches.',
      note: 'Constructed example · fictitious codes and numbers; adapt the five parts to your documents.',
    },
  },
  ar: {
    essai: {
      title: 'عشر وثائق تُسترجع، وساعة توقيت',
      alt: 'لوحتان، والوثائق العشر نفسها. في الأولى، قبل: سبع وثائق تُوجد، في 2 إلى 25 دقيقة، و11 دقيقة في المتوسط؛ وثلاث لا تُوجد أبداً، محضر الاستلام، مخطط الورشة، وضمان الآلة. وفي الثانية، بعد الترتيب والفهرسة: الوثائق العشر تُوجد كلها، كل واحدة في أقل من دقيقة.',
      header: 'مثال مركَّب · عشر وثائق مسحوبة عشوائياً، تُطلب واحدة واحدة · الوقت اللازم لإيجادها، بالسلّم نفسه',
      left: 'قبل: خزائن ومجلد مشترك', right: 'بعد: مرتَّبة، مسمّاة، ومفهرسة',
      docs: ['فاتورة المورّد لشهر مارس', 'عقد إيجار المستودع', 'وصل تسليم موقَّع', 'محضر الاستلام', 'شهادة التأمين', 'عرض سعر قبِله الزبون', 'مخطط الورشة', 'كشف البنك لشهر جوان', 'رسالة مسجَّلة مستلَمة', 'ضمان الآلة'],
      beforeVals: ['2 د', '14 د', '6 د', '', '25 د', '4 د', '', '9 د', '18 د', ''],
      afterVals: ['20 ث', '35 ث', '15 ث', '50 ث', '40 ث', '25 ث', '30 ث', '45 ث', '20 ث', '55 ث'],
      lost: 'لم تُوجد',
      leftSum: '7 من 10 وُجدت، في 78 دقيقة إجمالاً؛ و3 لم تُوجد أبداً',
      rightSum: '10 من 10 وُجدت، في أقل من 6 دقائق إجمالاً',
      band: 'التجربة تأخذ صبيحة: عشر وثائق مسحوبة عشوائياً، ساعة توقيت، وقائمة التي لم تُوجد.',
      tiles: [
        { big: '7 من 10', l1: 'وُجدت، في 11 دقيقة في المتوسط', l2: 'و3 لم تُوجد أبداً', hot: true },
        { big: '10 من 10', l1: 'وُجدت، كل واحدة في أقل من دقيقة', l2: 'بعد الترتيب والتسمية والفهرسة' },
        { big: 'الكلفة الحقيقية', l1: 'ليست في الترتيب: بل في البحث', l2: 'وفي الوثيقة التي تُعاد' },
      ],
      line1: 'أعيدوا التجربة عندكم قبل أي قرار: هي تقول أي وثائق تنقص، وأين يذهب الوقت.',
      line2: 'ثم أعيدوها بعد ذلك: التجربة نفسها، بالوثائق العشر نفسها، هي القياس الوحيد الذي يُعتدّ به.',
      note: 'مثال مركَّب · عشر وثائق، وتجربتان بينهما ثمانية أسابيع.',
    },
    nom: {
      title: 'اسم ملف يُسترجع',
      alt: 'في الأعلى، ثلاثة أسماء ملفات لا تُسترجع: اسم آلي من الماسح، اسم فيه «نهائي» مكرَّرة، واسم «مستند جديد». وفي الوسط، اسم مبني من خمسة أجزاء. وفي الأسفل، أجزاؤه الخمسة وقاعدة كل واحد: التاريخ، سنة ثم شهر ثم يوم؛ النوع، من قائمة مغلقة؛ الطرف، برمزه؛ رقم الوثيقة؛ والنسخة، بالأرقام.',
      header: 'الوثيقة نفسها، أربعة أسماء · الرابع يُرتَّب، يُبحث عنه، ويُفهم دون فتحه',
      badTitle: 'ثلاثة أسماء لا تُسترجع',
      bad: [['scan0001.pdf', 'لا كلمة يُبحث بها'], ['facture finale (2) bis.pdf', 'أيها الصحيحة؟'], ['Nouveau document.docx', 'لا أحد يعرف ما هو']],
      goodTitle: 'اسم مبني، دائماً بالترتيب نفسه',
      parts: [
        ['2027-03-14', 'تاريخ الوثيقة، سنة ثم شهر ثم يوم: الترتيب بالاسم يصير ترتيباً بالتاريخ'],
        ['facture', 'النوع، مأخوذ من قائمة مغلقة من عشر إلى خمس عشرة كلمة'],
        ['client-0418', 'الطرف، برمزه: الرمز نفسه الذي في برنامج التسيير'],
        ['F-2291', 'رقم الوثيقة، المطبوع عليها'],
        ['v2', 'النسخة، بالأرقام: لا «نهائي» أبداً، ولا «مكرَّر»'],
      ],
      band: 'الاسم الجيد يُقرأ دون فتح الملف، يترتَّب وحده، ويُبحث عنه بأي جزء من أجزائه.',
      tiles: [
        { big: 'سنة، شهر، يوم', l1: 'التاريخ في المقدمة: ترتيب الأسماء هو ترتيب الزمن', l2: 'صيغة ⁦ISO 8601⁩', hot: true },
        { big: 'قائمة مغلقة', l1: 'من عشرة إلى خمسة عشر نوعاً، تُكتب دائماً بالطريقة نفسها', l2: 'فاتورة، عقد، عرض سعر، وصل، رسالة…' },
        { big: 'دون فراغ ولا حركات', l1: 'شرطات، حروف صغيرة، وأسماء قصيرة', l2: 'تمر في كل مكان، وتُكتب بسرعة' },
      ],
      line1: 'القاعدة تسعها نصف صفحة، معلَّقة قرب الماسح: وتصحّ للورق الممسوح كما للملفات.',
      line2: 'وتُطبَّق أولاً على الوثائق الجديدة، من الغد؛ والمخزون القديم يُعالَج بعدها، على دفعات.',
      note: 'مثال مركَّب · رموز وأرقام خيالية؛ كيّفوا الأجزاء الخمسة مع وثائقكم.',
    },
  },
};
