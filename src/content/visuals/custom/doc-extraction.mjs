// Bespoke animated figures for the 2027 document-reading post.
//  scan():   a photographed invoice on the left, a scan line sweeping down it,
//            and the fields filling in on the right with a confidence bar each;
//            one field falls under the threshold and is flagged for a human.
//  checks(): the five consistency checks ticking one by one (the fifth blocks a
//            duplicate), then the outcome bar: automatic / human / rejected.
// CSS-only animation (prefers-reduced-motion disables it); base attributes are
// the finished state for the JPG rasteriser.
import { W, C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 9;
const BAR = 150;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }

export function scan(t, rtl) {
  const c = ctx(rtl); const P = 'dx'; const css = []; const H = 600;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  const origin = rtl ? 'right center' : 'left center';

  // ── the document sheet (slightly tilted paper look via plain rect + lines)
  const dx = 90; const dy = 100; const dw = 360; const dh = 440;
  s += rect(c, dx, dy, dw, dh, { stroke: C.line2, fill: 'rgba(255,255,255,0.03)' });
  s += text(c, dx + 20, dy + 34, t.doc.supplier, { size: 15, fill: C.fg });
  s += text(c, dx + 20, dy + 54, t.doc.supplierSub, { size: 11, fill: C.fg35 });
  s += text(c, dx + dw - 20, dy + 34, t.doc.number, { size: 12, font: 'mono', fill: C.fg70, anchor: 'end' });
  s += text(c, dx + dw - 20, dy + 54, t.doc.date, { size: 12, font: 'mono', fill: C.fg70, anchor: 'end' });
  s += line(c, dx + 20, dy + 80, dx + dw - 20, dy + 80, { stroke: C.line2 });
  t.doc.lines.forEach((l, i) => {
    const y = dy + 112 + i * 34;
    s += text(c, dx + 20, y, l[0], { size: 12, fill: C.fg70 });
    s += text(c, dx + dw - 20, y, l[1], { size: 12, font: 'mono', fill: C.fg70, anchor: 'end' });
    s += line(c, dx + 20, y + 12, dx + dw - 20, y + 12, { stroke: C.line });
  });
  t.doc.totals.forEach((l, i) => {
    const y = dy + 300 + i * 30;
    s += text(c, dx + 20, y, l[0], { size: 12, fill: C.fg55 });
    s += text(c, dx + dw - 20, y, l[1], { size: i === 2 ? 14 : 12, font: 'mono', fill: i === 2 ? C.fg : C.fg70, anchor: 'end' });
  });
  s += text(c, dx + 20, dy + dh - 20, t.doc.stamp, { size: 11, fill: C.fg35 });
  // the scan line
  css.push(`@keyframes ${P}-scan{0%{transform:translateY(0);opacity:1}55%{transform:translateY(${dh - 4}px);opacity:1}60%,100%{transform:translateY(${dh - 4}px);opacity:0}}`);
  s += `<g class="${P}-m" opacity="0" style="animation:${P}-scan ${LOOP}s linear infinite">` + rect(c, dx, dy, dw, 4, { fill: C.accent, stroke: 'none' }) + rect(c, dx, dy - 26, dw, 26, { fill: 'rgba(242,181,68,0.10)', stroke: 'none' }) + '</g>';

  // ── arrow
  s += line(c, dx + dw + 20, dy + dh / 2, 560, dy + dh / 2, { stroke: C.line2 });
  { const tip = c.X(560); const dirn = rtl ? 1 : -1; s += `<path d="M ${tip + dirn * 6} ${dy + dh / 2 - 4} L ${tip} ${dy + dh / 2} L ${tip + dirn * 6} ${dy + dh / 2 + 4}" fill="none" stroke="${C.line2}"/>`; }

  // ── the fields
  const fx = 580; const fw = 540; const fy = 104; const fh = 62;
  s += text(c, fx, fy - 6, t.fieldsLabel, { size: 11, font: 'mono', fill: C.fg35, letter: 2, upper: true });
  t.fields.forEach((f, i) => {
    const y = fy + 12 + i * (fh + 8);
    const at = 10 + i * 8;
    const low = f.conf < t.threshold;
    s += `<g style="animation:${show(css, P, `f${i}`, at)}">`
      + rect(c, fx, y, fw, fh, { stroke: low ? C.accent : C.line2, fill: low ? 'rgba(242,181,68,0.06)' : 'none' })
      + text(c, fx + 16, y + 24, f.k, { size: 11, font: 'mono', fill: C.fg35 })
      + text(c, fx + 16, y + 46, f.v, { size: 15, fill: C.fg })
      + text(c, fx + fw - 16, y + 24, f.confLabel, { size: 12, font: 'mono', fill: low ? C.accent : C.fg55, anchor: 'end' })
      + (low ? text(c, fx + fw - 16, y + 46, t.toValidate, { size: 12, fill: C.accent, anchor: 'end' }) : '')
      + '</g>';
    // confidence bar
    css.push(`@keyframes ${P}-b${i}{0%,${at}%{transform:scaleX(0)}${at + 5}%,100%{transform:scaleX(1)}}`);
    s += rect(c, fx + 250, y + 38, BAR, 4, { fill: C.line, stroke: 'none' });
    s += `<g style="transform-box:fill-box;transform-origin:${origin};animation:${P}-b${i} ${LOOP}s linear infinite">` + rect(c, fx + 250, y + 38, BAR * f.conf, 4, { fill: low ? C.accent : C.fg70, stroke: 'none' }) + '</g>';
  });
  // threshold marker
  const tx = fx + 250 + BAR * t.threshold;
  s += line(c, tx, fy + 4, tx, fy + 12 + t.fields.length * (fh + 8) - 8, { stroke: C.accent, dash: '2 4' });
  s += text(c, tx, fy - 6, t.thresholdLabel, { size: 11, font: 'mono', fill: C.accent, anchor: 'middle' });

  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"]{animation:none !important}.${P}-m{display:none}}</style>`;
  return s + '</svg>';
}

export function checks(t, rtl) {
  const c = ctx(rtl); const P = 'dc'; const css = []; const H = 560;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  const origin = rtl ? 'right center' : 'left center';
  // ── checklist
  t.items.forEach((it, i) => {
    const y = 104 + i * 52;
    const at = 8 + i * 10;
    s += rect(c, 80, y, 1040, 42, { stroke: it.fail ? C.accent : C.line, fill: it.fail ? 'rgba(242,181,68,0.06)' : 'none' });
    s += text(c, 136, y + 26, it.rule, { size: 14.5, fill: C.fg });
    s += text(c, 1104, y + 26, it.detail, { size: 12, font: 'mono', fill: it.fail ? C.accent : C.fg55, anchor: 'end' });
    const cx = c.X(104); const cy = y + 21;
    s += `<g style="animation:${show(css, P, `k${i}`, at)}">` + circle(c, 104, cy, 11, { fill: it.fail ? C.accent : C.fg, stroke: 'none' })
      + (it.fail
        ? `<path d="M ${cx - 4} ${cy - 4} L ${cx + 4} ${cy + 4} M ${cx + 4} ${cy - 4} L ${cx - 4} ${cy + 4}" stroke="${C.bg}" stroke-width="2.2" fill="none"/>`
        : `<path d="M ${cx - 5} ${cy} L ${cx - 1.5} ${cy + 3.5} L ${cx + 5} ${cy - 3.5}" stroke="${C.bg}" stroke-width="2.2" fill="none"/>`)
      + '</g>';
  });
  // ── outcome bar
  const by = 410; const bx = 80; const bw = 1040;
  s += text(c, bx, by - 14, t.outcomeLabel, { size: 11, font: 'mono', fill: C.fg35, letter: 2, upper: true });
  let x = bx; let from = 60;
  t.outcome.forEach((o, i) => {
    const w = bw * o.share - 3; const to = from + 8;
    css.push(`@keyframes ${P}-o${i}{0%,${from}%{transform:scaleX(0)}${to}%,100%{transform:scaleX(1)}}`);
    s += `<g style="transform-box:fill-box;transform-origin:${origin};animation:${P}-o${i} ${LOOP}s linear infinite">` + rect(c, x, by, w, 34, { fill: o.fill, stroke: 'none' }) + '</g>';
    const last = i === t.outcome.length - 1; const lx = last ? bx + bw : x; const an = last ? 'end' : 'start';
    s += `<g style="animation:${show(css, P, `ol${i}`, to)}">` + text(c, lx, by + 58, o.value, { size: 26, font: 'serif', fill: o.accent ? C.accent : C.fg, anchor: an }) + text(c, lx, by + 80, o.label, { size: 12, fill: C.fg55, anchor: an }) + (o.sub ? text(c, lx, by + 97, o.sub, { size: 11.5, fill: C.fg35, anchor: an }) : '') + '</g>';
    x += w + 3; from = to;
  });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

const I = (x) => `⁦${x}⁩`;
const N = ' ';

export const STRINGS = {
  fr: {
    scan: {
      title: 'Une facture photographiée devient des champs, avec une confiance par champ',
      alt: 'À gauche, une facture fournisseur photographiée avec son numéro, sa date, trois lignes et ses totaux ; une ligne de lecture la parcourt. À droite, six champs se remplissent avec un score de confiance chacun : fournisseur, numéro, date, total hors taxe, taxe, total toutes taxes. Le numéro de facture, sous le seuil de 0,90, est marqué à valider par un humain.',
      doc: { supplier: 'SARL El Baraka Distribution', supplierSub: 'Zone industrielle, Sétif', number: 'N° FA-2027-0418', date: '14/03/2027', lines: [['Huile 5 L, carton de 4 × 20', `96${N}000,00`], ['Semoule 25 kg × 40', `86${N}000,00`], ['Sucre 1 kg, carton de 10 × 30', `41${N}700,00`]], totals: [['Total HT', `223${N}700,00`], ['TVA', `42${N}503,00`], ['Total TTC', `266${N}203,00 DA`]], stamp: 'cachet, signature, photo prise au téléphone' },
      arrow: 'LECTURE → SCHÉMA',
      fieldsLabel: 'Champs extraits', threshold: 0.9, thresholdLabel: 'seuil 0,90', toValidate: 'à valider par un humain',
      fields: [
        { k: 'fournisseur', v: 'SARL El Baraka Distribution', conf: 0.98, confLabel: '0,98' },
        { k: 'numero_facture', v: 'FA-2027-0418  (ou 0413 ?)', conf: 0.72, confLabel: '0,72' },
        { k: 'date', v: '2027-03-14', conf: 0.97, confLabel: '0,97' },
        { k: 'total_ht', v: `223${N}700,00`, conf: 0.99, confLabel: '0,99' },
        { k: 'tva', v: `42${N}503,00`, conf: 0.96, confLabel: '0,96' },
        { k: 'total_ttc', v: `266${N}203,00`, conf: 0.99, confLabel: '0,99' },
      ],
    },
    checks: {
      title: 'Cinq contrôles avant d’écrire dans la comptabilité, puis trois issues',
      alt: 'Cinq contrôles sont cochés un à un : la somme des lignes égale le total hors taxe, le hors taxe plus la taxe égale le toutes taxes, la date est plausible, le fournisseur existe dans la base, et le cinquième échoue : une facture du même fournisseur avec le même numéro existe déjà. En bas, sur cent documents : 82 passent automatiquement, 15 vont à la validation humaine, 3 sont rejetés ; hypothèse à mesurer.',
      items: [
        { rule: 'La somme des lignes égale le total HT', detail: `96${N}000 + 86${N}000 + 41${N}700 = 223${N}700` },
        { rule: 'Le HT plus la TVA égale le TTC', detail: `223${N}700 + 42${N}503 = 266${N}203` },
        { rule: 'La date est plausible', detail: 'ni future, ni antérieure à 12 mois' },
        { rule: 'Le fournisseur existe dans votre base', detail: 'identifiant comparé à la fiche fournisseur' },
        { rule: 'Ce n’est pas un doublon', detail: 'même fournisseur + même numéro : bloqué', fail: true },
      ],
      outcomeLabel: 'Sur cent documents (hypothèse, à mesurer au pilote)',
      outcome: [
        { share: 0.82, value: '82', label: 'écrits automatiquement', sub: 'tous les champs au-dessus du seuil, cinq contrôles passés', fill: 'rgba(255,255,255,0.75)' },
        { share: 0.15, value: '15', label: 'validés par un humain', sub: 'un champ sous le seuil', fill: '#F2B544', accent: true },
        { share: 0.03, value: '3', label: 'rejetés', sub: 'doublon, illisible', fill: 'rgba(255,255,255,0.25)' },
      ],
    },
  },
  en: {
    scan: {
      title: 'A photographed invoice becomes fields, with a confidence per field',
      alt: 'On the left, a photographed supplier invoice with its number, date, three lines and totals; a reading line sweeps down it. On the right, six fields fill in with a confidence score each: supplier, number, date, total before tax, tax, total including tax. The invoice number, below the 0.90 threshold, is flagged for human validation.',
      doc: { supplier: 'SARL El Baraka Distribution', supplierSub: 'Industrial zone, Sétif', number: 'No. FA-2027-0418', date: '14/03/2027', lines: [['Oil 5 L, box of 4 × 20', '96,000.00'], ['Semolina 25 kg × 40', '86,000.00'], ['Sugar 1 kg, box of 10 × 30', '41,700.00']], totals: [['Total excl. tax', '223,700.00'], ['VAT', '42,503.00'], ['Total incl. tax', '266,203.00 DA']], stamp: 'stamp, signature, photo taken on a phone' },
      arrow: 'READING → SCHEMA',
      fieldsLabel: 'Extracted fields', threshold: 0.9, thresholdLabel: 'threshold 0.90', toValidate: 'for human validation',
      fields: [
        { k: 'supplier', v: 'SARL El Baraka Distribution', conf: 0.98, confLabel: '0.98' },
        { k: 'invoice_number', v: 'FA-2027-0418  (or 0413?)', conf: 0.72, confLabel: '0.72' },
        { k: 'date', v: '2027-03-14', conf: 0.97, confLabel: '0.97' },
        { k: 'total_excl_tax', v: '223,700.00', conf: 0.99, confLabel: '0.99' },
        { k: 'vat', v: '42,503.00', conf: 0.96, confLabel: '0.96' },
        { k: 'total_incl_tax', v: '266,203.00', conf: 0.99, confLabel: '0.99' },
      ],
    },
    checks: {
      title: 'Five checks before writing to accounting, then three outcomes',
      alt: 'Five checks are ticked one by one: the sum of lines equals the total before tax, before tax plus tax equals the total including tax, the date is plausible, the supplier exists in the database, and the fifth fails: an invoice from the same supplier with the same number already exists. Below, out of one hundred documents: 82 pass automatically, 15 go to human validation, 3 are rejected; assumption to measure.',
      items: [
        { rule: 'The sum of lines equals the total excl. tax', detail: '96,000 + 86,000 + 41,700 = 223,700' },
        { rule: 'Excl. tax plus VAT equals incl. tax', detail: '223,700 + 42,503 = 266,203' },
        { rule: 'The date is plausible', detail: 'not in the future, not older than 12 months' },
        { rule: 'The supplier exists in your database', detail: 'identifier compared with the supplier record' },
        { rule: 'It is not a duplicate', detail: 'same supplier + same number: blocked', fail: true },
      ],
      outcomeLabel: 'Out of one hundred documents (assumption, measured in the pilot)',
      outcome: [
        { share: 0.82, value: '82', label: 'written automatically', sub: 'all fields above the threshold, five checks passed', fill: 'rgba(255,255,255,0.75)' },
        { share: 0.15, value: '15', label: 'validated by a human', sub: 'one field below the threshold', fill: '#F2B544', accent: true },
        { share: 0.03, value: '3', label: 'rejected', sub: 'duplicate, unreadable', fill: 'rgba(255,255,255,0.25)' },
      ],
    },
  },
  ar: {
    scan: {
      title: 'فاتورة مصوَّرة تصير حقولاً، بدرجة ثقة لكل حقل',
      alt: 'على اليمين فاتورة مورّد مصوَّرة برقمها وتاريخها وثلاثة سطور ومجاميعها؛ يمر عليها خط قراءة. على اليسار ستة حقول تُملأ بدرجة ثقة لكل منها: المورّد، الرقم، التاريخ، المجموع خارج الرسم، الرسم، المجموع بكل الرسوم. ورقم الفاتورة، تحت عتبة 0,90، يُعلَّم للتحقق البشري.',
      doc: { supplier: 'ش.ذ.م.م البركة للتوزيع', supplierSub: 'المنطقة الصناعية، سطيف', number: I('N° FA-2027-0418'), date: I('14/03/2027'), lines: [['زيت 5 ل، كرتون 4 × 20', I(`96${N}000,00`)], ['سميد 25 كغ × 40', I(`86${N}000,00`)], ['سكر 1 كغ، كرتون 10 × 30', I(`41${N}700,00`)]], totals: [['المجموع خارج الرسم', I(`223${N}700,00`)], ['الرسم على القيمة المضافة', I(`42${N}503,00`)], ['المجموع بكل الرسوم', I(`266${N}203,00 DA`)]], stamp: 'ختم، توقيع، صورة بالهاتف' },
      arrow: 'قراءة ← مخطط',
      fieldsLabel: 'الحقول المستخرجة', threshold: 0.9, thresholdLabel: 'عتبة 0,90', toValidate: 'للتحقق البشري',
      fields: [
        { k: 'المورّد', v: 'ش.ذ.م.م البركة للتوزيع', conf: 0.98, confLabel: I('0,98') },
        { k: 'رقم الفاتورة', v: I('FA-2027-0418  (0413 ?)'), conf: 0.72, confLabel: I('0,72') },
        { k: 'التاريخ', v: I('2027-03-14'), conf: 0.97, confLabel: I('0,97') },
        { k: 'المجموع خارج الرسم', v: I(`223${N}700,00`), conf: 0.99, confLabel: I('0,99') },
        { k: 'الرسم', v: I(`42${N}503,00`), conf: 0.96, confLabel: I('0,96') },
        { k: 'المجموع بكل الرسوم', v: I(`266${N}203,00`), conf: 0.99, confLabel: I('0,99') },
      ],
    },
    checks: {
      title: 'خمسة فحوص قبل الكتابة في المحاسبة، ثم ثلاث نتائج',
      alt: 'خمسة فحوص تُعلَّم واحداً واحداً: مجموع السطور يساوي المجموع خارج الرسم، وخارج الرسم زائد الرسم يساوي المجموع بكل الرسوم، والتاريخ معقول، والمورّد موجود في القاعدة، والخامس يفشل: فاتورة من المورّد نفسه بالرقم نفسه موجودة أصلاً. في الأسفل، من مائة وثيقة: 82 تمر آلياً، 15 تذهب للتحقق البشري، 3 تُرفض؛ فرضية تُقاس.',
      items: [
        { rule: 'مجموع السطور يساوي المجموع خارج الرسم', detail: I(`96${N}000 + 86${N}000 + 41${N}700 = 223${N}700`) },
        { rule: 'خارج الرسم زائد الرسم يساوي المجموع بكل الرسوم', detail: I(`223${N}700 + 42${N}503 = 266${N}203`) },
        { rule: 'التاريخ معقول', detail: 'لا مستقبلي ولا أقدم من 12 شهراً' },
        { rule: 'المورّد موجود في قاعدتكم', detail: 'المعرّف يُقارَن ببطاقة المورّد' },
        { rule: 'ليست مكررة', detail: 'المورّد نفسه + الرقم نفسه: مرفوضة', fail: true },
      ],
      outcomeLabel: 'من مائة وثيقة (فرضية تُقاس في التجريب)',
      outcome: [
        { share: 0.82, value: '82', label: 'تُكتب آلياً', sub: 'كل الحقول فوق العتبة والفحوص الخمسة ناجحة', fill: 'rgba(255,255,255,0.75)' },
        { share: 0.15, value: '15', label: 'يتحقق منها إنسان', sub: 'حقل تحت العتبة', fill: '#F2B544', accent: true },
        { share: 0.03, value: '3', label: 'مرفوضة', sub: 'مكررة، غير مقروءة', fill: 'rgba(255,255,255,0.25)' },
      ],
    },
  },
};
