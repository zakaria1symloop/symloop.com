// Bespoke animated figures for the 2027 documents-and-printing post.
//  invoice(): an invoice assembling itself on an A4-shaped page (header,
//             bilingual title, lines, totals, footer with number and hash)
//             while the pipeline on the right shows the stations: order
//             validated, number assigned, snapshot frozen, template v3,
//             PDF/A with embedded fonts and fingerprint, sent and archived,
//             reprint marked as duplicate.
//  receipt(): an 80 mm thermal receipt printing line by line (Latin text as
//             printer text, Arabic lines as bitmaps, QR, cut) with the
//             command stream annotated on the side (init, align, bold,
//             image, barcode, cut, cash drawer).
// CSS-only animation (prefers-reduced-motion disables it); base attributes are
// the finished state for the JPG rasteriser.
import { W, C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
// Raw text in an explicit direction, in absolute coordinates (used inside the page mock-ups).
function raw(x, y, str, o = {}) {
  const fam = o.font === 'mono' ? "var(--font-jetbrains-mono), Consolas, monospace" : o.font === 'serif' ? "var(--font-instrument-serif), Georgia, serif" : "var(--font-ibm-plex-arabic), 'Segoe UI', Arial, sans-serif";
  return `<text x="${x}" y="${y}" style="font-family:${fam};font-size:${o.size || 11}px;font-weight:${o.weight || 300}" fill="${o.fill || C.fg}" text-anchor="${o.anchor || 'start'}" direction="${o.dir || 'ltr'}">${str}</text>`;
}

export function invoice(t, rtl) {
  const c = ctx(rtl); const ca = ctx(false); const P = 'di'; const css = []; const H = 600;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  // page mock-up (A4 ratio) at absolute coordinates
  const px = 120; const py = 96; const pw = 330; const ph = 466;
  s += rect(ca, px, py, pw, ph, { stroke: C.line2, fill: 'rgba(255,255,255,0.03)' });
  const L = px + 20; const R = px + pw - 20;
  // 1 header
  s += `<g style="animation:${show(css, P, 'h', 6)}">`
    + raw(L, py + 30, t.doc.company, { size: 13, weight: 400 })
    + raw(L, py + 46, t.doc.companySub, { size: 9, font: 'mono', fill: C.fg55 })
    + raw(R, py + 30, t.doc.titleFr, { size: 13, anchor: 'end' })
    + raw(R, py + 46, t.doc.titleAr, { size: 11, anchor: 'end', dir: 'rtl' })
    + line(ca, L, py + 58, R, py + 58, { stroke: C.line })
    + '</g>';
  // 2 number & date & customer
  s += `<g style="animation:${show(css, P, 'n', 18)}">`
    + raw(L, py + 78, t.doc.number, { size: 11, font: 'mono', fill: C.accent })
    + raw(R, py + 78, t.doc.date, { size: 10, font: 'mono', fill: C.fg55, anchor: 'end' })
    + raw(L, py + 96, t.doc.customer, { size: 10.5 })
    + raw(L, py + 110, t.doc.customerSub, { size: 9, font: 'mono', fill: C.fg55 })
    + '</g>';
  // 3 table head + lines
  const ty = py + 134;
  s += `<g style="animation:${show(css, P, 'th', 30)}">`
    + line(ca, L, ty, R, ty, { stroke: C.line2 })
    + raw(L, ty + 14, t.doc.colDesc, { size: 9, font: 'mono', fill: C.fg35 })
    + raw(R - 150, ty + 14, t.doc.colQty, { size: 9, font: 'mono', fill: C.fg35, anchor: 'end' })
    + raw(R, ty + 14, t.doc.colAmount, { size: 9, font: 'mono', fill: C.fg35, anchor: 'end' })
    + line(ca, L, ty + 20, R, ty + 20, { stroke: C.line })
    + '</g>';
  t.doc.lines.forEach((ln, i) => {
    const y = ty + 42 + i * 30;
    s += `<g style="animation:${show(css, P, `l${i}`, 36 + i * 6)}">`
      + raw(L, y, ln.fr, { size: 10.5 })
      + raw(L, y + 12, ln.ar, { size: 9.5, fill: C.fg70, dir: 'ltr' })
      + raw(R - 150, y, ln.qty, { size: 10, font: 'mono', fill: C.fg70, anchor: 'end' })
      + raw(R, y, ln.amount, { size: 10.5, font: 'mono', anchor: 'end' })
      + '</g>';
  });
  // 4 totals
  const toty = ty + 42 + t.doc.lines.length * 30 + 10;
  s += `<g style="animation:${show(css, P, 'tot', 58)}">`
    + line(ca, R - 170, toty, R, toty, { stroke: C.line2 })
    + t.doc.totals.map((tt, k) => raw(R - 170, toty + 18 + k * 16, tt.label, { size: 9.5, font: 'mono', fill: k === t.doc.totals.length - 1 ? C.fg : C.fg55 }) + raw(R, toty + 18 + k * 16, tt.value, { size: k === t.doc.totals.length - 1 ? 12 : 10, font: 'mono', anchor: 'end', fill: k === t.doc.totals.length - 1 ? C.accent : C.fg70 })).join('')
    + '</g>';
  // 5 footer: hash, QR, archive
  const fy = py + ph - 44;
  s += `<g style="animation:${show(css, P, 'f', 72)}">`
    + line(ca, L, fy - 10, R, fy - 10, { stroke: C.line })
    + rect(ca, L, fy - 2, 30, 30, { stroke: C.fg55, fill: 'none' })
    + [[4, 4], [12, 4], [20, 4], [4, 12], [20, 12], [4, 20], [12, 20], [20, 20], [12, 12]].map(([a, b]) => `<rect x="${L + a}" y="${fy - 2 + b}" width="6" height="6" fill="${C.fg55}"/>`).join('')
    + raw(L + 40, fy + 10, t.doc.hash, { size: 8.5, font: 'mono', fill: C.fg55 })
    + raw(L + 40, fy + 24, t.doc.footer, { size: 8.5, font: 'mono', fill: C.fg35 })
    + '</g>';
  // pipeline on the right (page-direction aware)
  const sx0 = 520; const sy0 = 104; const rowH = 66;
  t.stations.forEach((st, i) => {
    const y = sy0 + i * rowH; const at = [6, 18, 30, 44, 58, 72, 84][i];
    s += `<g style="animation:${show(css, P, `s${i}`, at)}">`
      + circle(c, sx0 + 12, y + 12, 10, { fill: st.accent ? C.accent : C.bg, stroke: st.accent ? C.accent : C.fg55, sw: 1 })
      + text(c, sx0 + 12, y + 16, String(i + 1), { size: 10.5, font: 'mono', fill: st.accent ? C.bg : C.fg, anchor: 'middle' })
      + text(c, sx0 + 36, y + 10, st.name, { size: 13, fill: st.accent ? C.accent : C.fg })
      + text(c, sx0 + 36, y + 28, st.sub, { size: 10.5, font: 'mono', fill: C.fg55 })
      + text(c, sx0 + 36, y + 44, st.sub2, { size: 10.5, font: 'mono', fill: C.fg35 })
      + (i < t.stations.length - 1 ? line(c, sx0 + 12, y + 24, sx0 + 12, y + rowH + 2, { stroke: C.line2 }) : '')
      + '</g>';
  });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

export function receipt(t, rtl) {
  const c = ctx(rtl); const ca = ctx(false); const P = 'dr'; const css = []; const H = 548;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  // receipt strip (80 mm → 300 px wide) at absolute coordinates
  const rx = 150; const ry = 96; const rw = 300;
  const items = t.lines; // [{kind:'text'|'arabic'|'rule'|'qr'|'cut', text, align, bold, size}]
  let y = ry + 24;
  s += `<rect x="${rx}" y="${ry}" width="${rw}" height="${H - ry - 12}" fill="rgba(255,255,255,0.05)" stroke="${C.line2}"/>`;
  s += raw(rx + rw / 2, ry - 8, t.paperLabel, { size: 10, font: 'mono', fill: C.fg35, anchor: 'middle' });
  items.forEach((ln, i) => {
    const at = 4 + i * (80 / items.length);
    let g = '';
    if (ln.kind === 'rule') { g = line(ca, rx + 16, y - 6, rx + rw - 16, y - 6, { stroke: C.line2, dash: '2 3' }); y += 10; }
    else if (ln.kind === 'cut') { g = line(ca, rx, y, rx + rw, y, { stroke: C.fg55, dash: '6 4' }) + raw(rx + rw - 8, y - 6, '✂', { size: 11, fill: C.fg55, anchor: 'end' }); y += 14; }
    else if (ln.kind === 'qr') {
      const q = rx + rw / 2 - 24;
      g = rect(ca, q, y - 4, 48, 48, { stroke: C.fg55, fill: 'none' }) + [[6, 6], [18, 6], [30, 6], [6, 18], [30, 18], [6, 30], [18, 30], [30, 30], [18, 18], [36, 12], [12, 36], [36, 36]].map(([a, b]) => `<rect x="${q + a}" y="${y - 4 + b}" width="7" height="7" fill="${C.fg55}"/>`).join('');
      y += 60;
    }
    else {
      const ar = ln.kind === 'arabic';
      const x = ln.align === 'center' ? rx + rw / 2 : ln.align === 'right' ? rx + rw - 16 : rx + 16;
      // direction="rtl" flips start/end, so a right-aligned Arabic line anchors at 'start'
      const anchor = ln.align === 'center' ? 'middle' : ln.align === 'right' ? (ar ? 'start' : 'end') : (ar ? 'end' : 'start');
      g = raw(x, y + 6, ln.text, { size: ln.size || 11, font: ar ? 'sans' : 'mono', weight: ln.bold ? 500 : 300, fill: ar ? C.fg : C.fg70, anchor, dir: ar ? 'rtl' : 'ltr' });
      if (ar) g += rect(ca, rx + 10, y - 6, rw - 20, 18, { stroke: C.accent, fill: 'none', dash: '2 2' });
      if (ln.right) g += raw(rx + rw - 16, y + 6, ln.right, { size: ln.size || 11, font: 'mono', fill: C.fg70, anchor: 'end' });
      y += ln.size ? ln.size + 10 : 20;
    }
    s += `<g style="animation:${show(css, P, `r${i}`, at)}">${g}</g>`;
  });
  // side panel: the command stream
  const cx0 = 520; const cy0 = 104;
  s += text(c, cx0, cy0, t.cmdLabel, { size: 11, font: 'mono', fill: C.fg35, letter: 2, upper: true });
  t.commands.forEach((cm, i) => {
    const yy = cy0 + 28 + i * 54; const at = 6 + i * 9;
    s += `<g style="animation:${show(css, P, `c${i}`, at)}">`
      + text(c, cx0, yy + 4, cm.code, { size: 11.5, font: 'mono', fill: cm.accent ? C.accent : C.fg })
      + text(c, cx0, yy + 22, cm.what, { size: 12, fill: C.fg70 })
      + text(c, cx0, yy + 38, cm.why, { size: 10.5, font: 'mono', fill: C.fg35 })
      + '</g>';
  });
  // legend for the dashed accent frames
  s += `<g style="animation:${show(css, P, 'leg', 86)}">` + rect(c, cx0, 462, 14, 10, { stroke: C.accent, fill: 'none', dash: '2 2' }) + text(c, cx0 + 22, 471, t.legend, { size: 10.5, font: 'mono', fill: C.fg55 }) + '</g>';
  s += `<g style="animation:${show(css, P, 'rule', 92)}">` + text(c, cx0, 504, t.rule, { size: 12.5, fill: C.fg }) + text(c, cx0, 524, t.rule2, { size: 12.5, fill: C.fg }) + '</g>';
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

const I = (x) => `⁦${x}⁩`;

const DOC = {
  company: 'SARL Baraka Distribution', companySub: 'Sétif · RC 19/00-1234567 · NIF 000019001234567',
  titleFr: 'FACTURE', titleAr: 'فاتورة',
  number: 'N° SET-2027-000418', date: '10/11/2026',
  customer: 'Supérette El Hidhab · Sétif', customerSub: 'client 00231 · +213 661 23 45 67',
  colDesc: 'DÉSIGNATION · الوصف', colQty: 'QTÉ', colAmount: 'MONTANT',
  lines: [
    { fr: 'Huile de table 5 L', ar: 'زيت المائدة 5 ل', qty: '12', amount: '11 760,00' },
    { fr: 'Semoule fine 25 kg', ar: 'سميد رقيق 25 كغ', qty: '4', amount: '9 800,00' },
    { fr: 'Livraison Sétif', ar: 'التوصيل سطيف', qty: '1', amount: '600,00' },
  ],
  totals: [{ label: 'Total HT', value: '22 160,00' }, { label: 'TVA 19 %', value: '4 210,40' }, { label: 'TOTAL TTC · DA', value: '26 370,40' }],
  hash: 'empreinte 9f3a…c71e · PDF/A-2b · polices embarquées',
  footer: 'archivée 10 ans · réimpression = DUPLICATA',
};

const RECEIPT_FR = [
  { kind: 'text', text: 'BARAKA DISTRIBUTION', align: 'center', bold: true, size: 13 },
  { kind: 'arabic', text: 'بركة للتوزيع · سطيف', align: 'center', size: 12 },
  { kind: 'text', text: 'Cité El Hidhab, Sétif · 036 00 00 00', align: 'center', size: 9 },
  { kind: 'rule' },
  { kind: 'text', text: 'Ticket 0418 · 10/11/2026 14:02', align: 'left', size: 9 },
  { kind: 'text', text: 'Caisse 2 · Amel', align: 'left', size: 9 },
  { kind: 'rule' },
  { kind: 'text', text: 'Huile 5 L         x2', align: 'left', right: '1 960,00' },
  { kind: 'arabic', text: 'زيت 5 ل', align: 'right', size: 10 },
  { kind: 'text', text: 'Semoule 25 kg     x1', align: 'left', right: '2 450,00' },
  { kind: 'arabic', text: 'سميد 25 كغ', align: 'right', size: 10 },
  { kind: 'rule' },
  { kind: 'text', text: 'TOTAL', align: 'left', right: '4 410,00 DA', bold: true, size: 13 },
  { kind: 'text', text: 'Espèces 5 000,00 · Rendu 590,00', align: 'left', size: 9 },
  { kind: 'arabic', text: 'المجموع 4.410,00 دج · شكراً', align: 'center', size: 11 },
  { kind: 'rule' },
  { kind: 'qr' },
  { kind: 'text', text: 'scannez pour la facture · fidélité', align: 'center', size: 8 },
  { kind: 'cut' },
];

export const STRINGS = {
  fr: {
    invoice: {
      title: 'Une facture, de la commande validée au PDF archivé',
      alt: 'Une page de facture se construit : en-tête avec l’entreprise et le titre en français et en arabe, numéro SET-2027-000418 et date, client, trois lignes en deux langues avec quantités et montants, totaux, pied de page avec un code QR, l’empreinte du fichier, la mention PDF/A avec polices embarquées, et « archivée 10 ans, réimpression = duplicata ». À droite, sept stations : commande validée, numéro attribué dans une séquence sans trou par agence, instantané figé des lignes et des prix, gabarit versionné bilingue, PDF/A avec polices embarquées et empreinte, envoi WhatsApp et e-mail et archive, réimpression marquée duplicata.',
      doc: DOC,
      stations: [
        { name: 'Commande validée', sub: 'événement : paiement confirmé ou livraison', sub2: 'déclenche la facture ; jamais un clic « imprimer »' },
        { name: 'Numéro attribué', sub: 'séquence par agence et par an · sans trou', sub2: 'SET-2027-000418 · posé une fois, jamais réutilisé', accent: true },
        { name: 'Instantané figé', sub: 'lignes, prix, adresses, TVA à cet instant', sub2: 'un prix modifié demain ne change pas la facture d’hier' },
        { name: 'Gabarit v3, bilingue', sub: 'fr + ar, polices à deux écritures, versionné', sub2: 'la facture dit quelle version l’a produite' },
        { name: 'PDF/A, polices embarquées', sub: 'ISO 19005 · empreinte du fichier calculée', sub2: 'lisible dans dix ans, inaltérable, vérifiable' },
        { name: 'Envoyée et archivée', sub: 'WhatsApp + e-mail · stockage versionné', sub2: 'la facture envoyée = la facture archivée, même empreinte' },
        { name: 'Réimpression', sub: 'même fichier, filigrane DUPLICATA', sub2: 'jamais régénérée ; qui, quand, journalisé' },
      ],
    },
    receipt: {
      title: 'Le ticket de caisse, 80 mm, tel que l’imprimante le reçoit',
      alt: 'Un ticket de caisse de 80 mm s’imprime ligne par ligne : nom du magasin, ligne arabe envoyée comme image, adresse, numéro et date, caisse, deux articles avec leur ligne arabe, total en gras, espèces et rendu, remerciement en arabe, code QR, coupe. À droite, le flux de commandes envoyé à l’imprimante : initialisation, alignement, gras et taille, image pour les lignes arabes, code QR, coupe, ouverture du tiroir.',
      paperLabel: '80 mm · 48 caractères par ligne',
      lines: RECEIPT_FR,
      cmdLabel: 'Ce que l’application envoie',
      commands: [
        { code: 'ESC @', what: 'Initialiser l’imprimante', why: 'état connu à chaque ticket, quel que soit le précédent' },
        { code: 'ESC a 1 · ESC E 1 · GS ! 0x11', what: 'Centrer, gras, double taille', why: 'texte latin : l’imprimante a la police, 48 colonnes' },
        { code: 'GS v 0 … (image)', what: 'Lignes arabes envoyées en image', why: 'la plupart des imprimantes n’ont ni police ni façonnage arabes', accent: true },
        { code: 'GS ( k … (QR)', what: 'Code QR : facture et fidélité', why: 'le client scanne ; le ticket renvoie vers la facture PDF' },
        { code: 'GS V 1', what: 'Coupe partielle', why: 'après le QR, jamais avant la dernière ligne' },
        { code: 'ESC p 0', what: 'Ouvrir le tiroir', why: 'seulement si paiement en espèces ; journalisé' },
      ],
      legend: 'ligne envoyée comme image, pas comme texte',
      rule: 'Règle : le texte latin part en texte, l’arabe part en image ;', rule2: 'le même ticket se réimprime à l’identique depuis la file locale, même sans réseau.',
    },
  },
  en: {
    invoice: {
      title: 'One invoice, from validated order to archived PDF',
      alt: 'An invoice page builds itself: header with the company and the title in French and Arabic, number SET-2027-000418 and date, customer, three lines in two languages with quantities and amounts, totals, footer with a QR code, the file fingerprint, the PDF/A mention with embedded fonts, and “archived 10 years, reprint = duplicate”. On the right, seven stations: order validated, number assigned in a gapless sequence per branch, frozen snapshot of lines and prices, versioned bilingual template, PDF/A with embedded fonts and fingerprint, WhatsApp and e-mail sending and archive, reprint marked duplicate.',
      doc: DOC,
      stations: [
        { name: 'Order validated', sub: 'event: payment confirmed or delivery', sub2: 'triggers the invoice; never a “print” click' },
        { name: 'Number assigned', sub: 'sequence per branch and per year · gapless', sub2: 'SET-2027-000418 · set once, never reused', accent: true },
        { name: 'Snapshot frozen', sub: 'lines, prices, addresses, VAT at that instant', sub2: 'a price changed tomorrow does not change yesterday’s invoice' },
        { name: 'Template v3, bilingual', sub: 'fr + ar, fonts with both scripts, versioned', sub2: 'the invoice says which version produced it' },
        { name: 'PDF/A, embedded fonts', sub: 'ISO 19005 · file fingerprint computed', sub2: 'readable in ten years, unalterable, verifiable' },
        { name: 'Sent and archived', sub: 'WhatsApp + e-mail · versioned storage', sub2: 'the invoice sent = the invoice archived, same fingerprint' },
        { name: 'Reprint', sub: 'same file, DUPLICATE watermark', sub2: 'never regenerated; who, when, logged' },
      ],
    },
    receipt: {
      title: 'The 80 mm receipt, as the printer receives it',
      alt: 'An 80 mm receipt prints line by line: shop name, Arabic line sent as an image, address, number and date, till, two items with their Arabic line, total in bold, cash and change, thanks in Arabic, QR code, cut. On the right, the command stream sent to the printer: initialise, align, bold and size, image for Arabic lines, QR code, cut, cash drawer.',
      paperLabel: '80 mm · 48 characters per line',
      lines: RECEIPT_FR,
      cmdLabel: 'What the application sends',
      commands: [
        { code: 'ESC @', what: 'Initialise the printer', why: 'known state on every receipt, whatever the previous one' },
        { code: 'ESC a 1 · ESC E 1 · GS ! 0x11', what: 'Centre, bold, double size', why: 'Latin text: the printer has the font, 48 columns' },
        { code: 'GS v 0 … (image)', what: 'Arabic lines sent as an image', why: 'most printers have neither Arabic fonts nor shaping', accent: true },
        { code: 'GS ( k … (QR)', what: 'QR code: invoice and loyalty', why: 'the customer scans; the receipt links to the PDF invoice' },
        { code: 'GS V 1', what: 'Partial cut', why: 'after the QR, never before the last line' },
        { code: 'ESC p 0', what: 'Open the drawer', why: 'only on cash payment; logged' },
      ],
      legend: 'line sent as an image, not as text',
      rule: 'Rule: Latin text goes as text, Arabic goes as an image;', rule2: 'the same receipt reprints identically from the local queue, even without network.',
    },
  },
  ar: {
    invoice: {
      title: 'فاتورة واحدة، من الطلبية المصادَق عليها إلى PDF المؤرشَف',
      alt: 'صفحة فاتورة تُبنى: ترويسة بالشركة والعنوان بالفرنسية والعربية، رقم SET-2027-000418 وتاريخ، زبون، ثلاثة أسطر بلغتين بالكميات والمبالغ، مجاميع، تذييل برمز QR وبصمة الملف وذكر PDF/A بخطوط مضمَّنة و«مؤرشَفة 10 سنوات، إعادة الطباعة = نسخة». على اليسار سبع محطات: طلبية مصادَق عليها، رقم مخصَّص في تسلسل بلا فجوة لكل وكالة، لقطة مجمَّدة للأسطر والأسعار، قالب مرقَّم بلغتين، PDF/A بخطوط مضمَّنة وبصمة، إرسال WhatsApp وبريد وأرشفة، إعادة طباعة موسومة نسخة.',
      doc: DOC,
      stations: [
        { name: 'طلبية مصادَق عليها', sub: 'حدث: دفع مؤكَّد أو تسليم', sub2: 'يطلق الفاتورة؛ لا نقرة «طباعة» أبداً' },
        { name: 'رقم مخصَّص', sub: 'تسلسل لكل وكالة وسنة · بلا فجوة', sub2: `${I('SET-2027-000418')} · يوضع مرة ولا يُعاد استعماله`, accent: true },
        { name: 'لقطة مجمَّدة', sub: 'الأسطر والأسعار والعناوين والضريبة في تلك اللحظة', sub2: 'سعر يتغير غداً لا يغيّر فاتورة الأمس' },
        { name: `قالب ${I('v3')}، بلغتين`, sub: `${I('fr + ar')}، خطوط بكتابتين، مرقَّم`, sub2: 'الفاتورة تقول أي نسخة أنتجتها' },
        { name: `${I('PDF/A')}، خطوط مضمَّنة`, sub: `${I('ISO 19005')} · بصمة الملف محسوبة`, sub2: 'قابلة للقراءة بعد عشر سنوات، غير قابلة للتعديل، قابلة للتحقق' },
        { name: 'مُرسَلة ومؤرشَفة', sub: `${I('WhatsApp')} + بريد · تخزين مرقَّم`, sub2: 'الفاتورة المرسَلة = الفاتورة المؤرشَفة، البصمة نفسها' },
        { name: 'إعادة الطباعة', sub: 'الملف نفسه، علامة مائية «نسخة»', sub2: 'لا تُولَّد من جديد أبداً؛ من ومتى، مسجَّل' },
      ],
    },
    receipt: {
      title: 'تذكرة الصندوق، 80 مم، كما تستلمها الطابعة',
      alt: 'تذكرة صندوق بعرض 80 مم تُطبع سطراً سطراً: اسم المتجر، سطر عربي مُرسَل كصورة، عنوان، رقم وتاريخ، صندوق، سلعتان بسطرهما العربي، مجموع بخط عريض، نقد وباقٍ، شكر بالعربية، رمز QR، قص. على اليسار تدفق الأوامر المرسَل إلى الطابعة: تهيئة، محاذاة، عريض وحجم، صورة للأسطر العربية، رمز QR، قص، فتح الدرج.',
      paperLabel: `${I('80 mm')} · 48 حرفاً في السطر`,
      lines: RECEIPT_FR,
      cmdLabel: 'ما يرسله التطبيق',
      commands: [
        { code: I('ESC @'), what: 'تهيئة الطابعة', why: 'حالة معروفة عند كل تذكرة مهما كانت السابقة' },
        { code: I('ESC a 1 · ESC E 1 · GS ! 0x11'), what: 'توسيط، عريض، حجم مضاعف', why: 'النص اللاتيني: الطابعة تملك الخط، 48 عموداً' },
        { code: I('GS v 0 … (image)'), what: 'الأسطر العربية تُرسل كصورة', why: 'معظم الطابعات لا تملك خطوطاً عربية ولا تشكيلاً', accent: true },
        { code: I('GS ( k … (QR)'), what: `رمز ${I('QR')}: الفاتورة والولاء`, why: `الزبون يمسح؛ التذكرة تحيل إلى فاتورة ${I('PDF')}` },
        { code: I('GS V 1'), what: 'قص جزئي', why: 'بعد الرمز، لا قبل السطر الأخير أبداً' },
        { code: I('ESC p 0'), what: 'فتح الدرج', why: 'عند الدفع نقداً فقط؛ مسجَّل' },
      ],
      legend: 'سطر مُرسَل كصورة لا كنص',
      rule: 'القاعدة: النص اللاتيني يذهب نصاً، والعربية تذهب صورة؛', rule2: 'والتذكرة نفسها تُعاد طباعتها بالتطابق من الطابور المحلي، حتى بلا شبكة.',
    },
  },
};
