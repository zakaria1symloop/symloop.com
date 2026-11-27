// Bespoke animated figures for the 2027 "the supplier's Excel file arrives every week" post.
//  mapping(): the supplier's sheet as it arrives (title row, headers in the
//             supplier's words, five sample rows with the usual anomalies)
//             mapped column by column to the application's fields, with the
//             transform applied on each line, and the per-row verdict:
//             ok, warning, rejected; the remembered template at the bottom.
//  run():     one import from upload to undo: template detected, dry run,
//             validation counts, manager's confirmation, background apply in
//             batches with a progress bar, journal, WhatsApp notice, and the
//             undo that restores previous values; idempotency key noted.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function grow(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function draw(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{stroke-dashoffset:1000}${(at + dur).toFixed(1)}%,100%{stroke-dashoffset:0}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
const I = (x) => `⁦${x}⁩`;

export function mapping(t, rtl) {
  const c = ctx(rtl); const P = 'mp'; const css = []; const H = 540;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  // left: supplier sheet
  const sx = 80, sw = 560, sy = 96; const colW = [70, 190, 90, 80, 130];
  s += text(c, sx, sy, t.sheetLabel, { size: 10, font: 'mono', fill: C.fg35, letter: 1.5, upper: true });
  s += rect(c, sx, sy + 10, sw, 24, { stroke: C.line2, fill: 'rgba(255,255,255,0.03)' }) + text(c, sx + 8, sy + 26, t.titleRow, { size: 10.5, font: 'mono', fill: C.fg55 });
  // header row
  let hx = sx; const hy = sy + 34;
  s += rect(c, sx, hy, sw, 24, { stroke: C.line2, fill: 'rgba(255,255,255,0.08)' });
  t.headers.forEach((h, i) => { s += text(c, hx + 6, hy + 16, h, { size: 10.5, font: 'mono', fill: C.fg }); hx += colW[i]; });
  // rows
  t.rows.forEach((r, ri) => {
    const ry = hy + 24 + ri * 26; let cx = sx;
    s += rect(c, sx, ry, sw, 26, { stroke: C.line, fill: ri % 2 ? 'rgba(255,255,255,0.02)' : 'none' });
    r.cells.forEach((cell, i) => { s += text(c, cx + 6, ry + 17, cell, { size: 10.5, font: 'mono', fill: r.bad === i ? C.accent : C.fg70 }); cx += colW[i]; });
    // verdict
    const vy = ry + 13; const vx = sx + sw + 16;
    s += `<g style="animation:${show(css, P, `v${ri}`, 40 + ri * 4)}">` + circle(c, vx, vy, 8, { fill: r.kind === 'ok' ? C.accent : r.kind === 'warn' ? 'rgba(242,181,68,0.18)' : 'rgba(255,255,255,0.06)', stroke: r.kind === 'ok' ? C.accent : r.kind === 'warn' ? C.accent : C.fg55, sw: 1.2 }) + text(c, vx, vy + 4, r.kind === 'ok' ? '✓' : r.kind === 'warn' ? '!' : '✕', { size: 10, fill: r.kind === 'ok' ? '#000' : r.kind === 'warn' ? C.accent : C.fg70, anchor: 'middle', weight: 600 }) + text(c, vx + 14, vy + 4, r.verdict, { size: 9.5, font: 'mono', fill: r.kind === 'rej' ? C.fg70 : C.fg55 }) + '</g>';
  });
  const footY = hy + 24 + t.rows.length * 26;
  s += rect(c, sx, footY, sw, 24, { stroke: C.line, fill: 'rgba(255,255,255,0.02)' }) + text(c, sx + 8, footY + 16, t.totalsRow, { size: 10.5, font: 'mono', fill: C.fg35 });
  // right: app fields, linked to header columns by numbered badges
  const fx = 880, fw = 240; const fy0 = hy;
  s += text(c, fx, sy, t.fieldsLabel, { size: 10, font: 'mono', fill: C.fg35, letter: 1.5, upper: true });
  t.fields.forEach((f, i) => {
    const yy = fy0 + i * 50; const nI = String(i + 1);
    s += `<g style="animation:${show(css, P, `f${i}`, 6 + i * 4)}">`
      + rect(c, fx, yy, fw, 42, { stroke: f.key ? C.accent : C.line2, fill: f.key ? 'rgba(242,181,68,0.06)' : C.fill })
      + circle(c, fx + 16, yy + 21, 9, { fill: f.key ? C.accent : 'rgba(255,255,255,0.1)', stroke: f.key ? C.accent : C.fg55 })
      + text(c, fx + 16, yy + 25, nI, { size: 10, font: 'mono', fill: f.key ? '#000' : C.fg, anchor: 'middle', weight: 600 })
      + text(c, fx + 32, yy + 14, f.name, { size: 11, fill: f.key ? C.accent : C.fg })
      + text(c, fx + 32, yy + 26, f.transform, { size: 8.5, font: 'mono', fill: C.accent })
      + text(c, fx + 32, yy + 37, f.rule, { size: 8.5, font: 'mono', fill: C.fg55 })
      + '</g>';
    if (f.from >= 0) {
      let hcx = sx; for (let k = 0; k < f.from; k++) hcx += colW[k]; hcx += colW[f.from] / 2;
      s += `<g style="animation:${show(css, P, `h${i}`, 8 + i * 4)}">` + circle(c, hcx, hy - 1, 8, { fill: f.key ? C.accent : '#000', stroke: f.key ? C.accent : C.fg55 }) + text(c, hcx, hy + 3, nI, { size: 9.5, font: 'mono', fill: f.key ? '#000' : C.fg, anchor: 'middle', weight: 600 }) + '</g>';
    }
  });
  // remembered template
  s += `<g style="animation:${show(css, P, 'tpl', 62)}">` + rect(c, 80, 404, 1040, 44, { stroke: C.accent, fill: 'rgba(242,181,68,0.05)' }) + text(c, 96, 423, t.tplTitle, { size: 12, fill: C.fg }) + text(c, 96, 440, t.tplBody, { size: 10.5, font: 'mono', fill: C.accent }) + '</g>';
  s += text(c, 80, 480, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, 500, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, 522, t.note, { size: 10.5, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

export function run(t, rtl) {
  const c = ctx(rtl); const P = 'ir'; const css = []; const H = 600;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  // stage boxes
  const n = t.stages.length; const x0 = 80, total = 1040, gap = 12; const w = (total - gap * (n - 1)) / n; const y = 104, h = 150;
  t.stages.forEach((st, i) => {
    const x = x0 + i * (w + gap); const at = 3 + i * 7;
    s += `<g style="animation:${show(css, P, `s${i}`, at)}">`
      + rect(c, x, y, w, h, { stroke: st.hot ? C.accent : C.line2, fill: st.hot ? 'rgba(242,181,68,0.06)' : C.fill })
      + text(c, x + 10, y + 20, String(i + 1).padStart(2, '0'), { size: 10, font: 'mono', fill: C.fg35 })
      + text(c, x + 10, y + 42, st.title, { size: 12.5, fill: st.hot ? C.accent : C.fg })
      + text(c, x + 10, y + 64, st.l1, { size: 10, font: 'mono', fill: C.fg70 })
      + text(c, x + 10, y + 80, st.l2, { size: 10, font: 'mono', fill: C.fg70 })
      + text(c, x + 10, y + 96, st.l3, { size: 10, font: 'mono', fill: C.fg55 })
      + text(c, x + 10, y + 112, st.l4, { size: 10, font: 'mono', fill: C.fg55 })
      + text(c, x + w - 10, y + 136, st.time, { size: 9.5, font: 'mono', fill: C.fg55, anchor: 'end' })
      + '</g>';
    if (i < n - 1) s += line(c, x + w, y + h / 2, x + w + gap, y + h / 2, { stroke: C.line2 });
  });
  // progress bar (apply stage)
  const py = y + h + 36;
  s += text(c, 80, py, t.progressLabel, { size: 10, font: 'mono', fill: C.fg35, letter: 1.5, upper: true });
  s += rect(c, 80, py + 10, 1040, 16, { stroke: C.line2, fill: 'none' });
  s += `<rect x="${c.RX(80, 1040)}" y="${py + 10}" width="1040" height="16" fill="${C.accent}" opacity="0.8" style="transform-box:fill-box;transform-origin:${c.rtl ? 'right' : 'left'} center;animation:${grow(css, P, 'bar', 36, 16)}"/>`;
  t.batches.forEach((b, i) => { const bx = 80 + i * (1040 / t.batches.length); s += line(c, bx, py + 10, bx, py + 26, { stroke: '#000' }); s += `<g style="animation:${show(css, P, `b${i}`, 36 + i * (16 / t.batches.length))}">` + text(c, bx + 4, py + 40, b, { size: 9, font: 'mono', fill: C.fg55 }) + '</g>'; });
  // results panel
  const ry = py + 70;
  t.results.forEach((r, i) => {
    const rx = 80 + i * 350;
    s += `<g style="animation:${show(css, P, `r${i}`, 56 + i * 3)}">` + rect(c, rx, ry, 330, 56, { stroke: r.hot ? C.accent : C.line2, fill: r.hot ? 'rgba(242,181,68,0.06)' : C.fill }) + text(c, rx + 12, ry + 22, r.big, { size: 18, font: 'mono', fill: r.hot ? C.accent : C.fg, weight: 500 }) + text(c, rx + 12, ry + 42, r.label, { size: 10.5, fill: C.fg70 }) + '</g>';
  });
  // undo + idempotency
  const uy = ry + 76;
  s += `<g style="animation:${show(css, P, 'undo', 70)}">` + rect(c, 80, uy, 510, 48, { stroke: C.accent, fill: 'rgba(242,181,68,0.05)', dash: '4 3' }) + text(c, 96, uy + 20, t.undoTitle, { size: 12, fill: C.fg }) + text(c, 96, uy + 37, t.undoBody, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'idem', 74)}">` + rect(c, 610, uy, 510, 48, { stroke: C.line2, fill: C.fill }) + text(c, 626, uy + 20, t.idemTitle, { size: 12, fill: C.fg }) + text(c, 626, uy + 37, t.idemBody, { size: 10, font: 'mono', fill: C.fg55 }) + '</g>';
  s += text(c, 80, 562, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, 582, t.note, { size: 10.5, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"],svg rect[style*="${P}-"]{animation:none !important;transform:none}}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    mapping: {
      title: 'Le fichier du fournisseur, colonne par colonne : ce qu’on en fait, et ce qu’on refuse',
      alt: 'À gauche, la feuille du fournisseur telle qu’elle arrive : une ligne de titre « Tarif novembre 2026 », des en-têtes dans ses mots, Réf., Désignation, PU HT, Qté/carton, Code EAN, cinq lignes dont une avec un prix écrit 1 250,00, une avec un code EAN contenant des espaces, une sans référence, une avec N/D en prix, et une ligne de totaux en bas. À droite, les champs de l’application : référence fournisseur, clé ; libellé ; prix d’achat ; unités par carton ; code-barres. Des lignes relient chaque colonne à son champ avec la transformation appliquée : espaces retirés, virgule décimale lue, chiffre de contrôle vérifié, nombre entier. À côté de chaque ligne du fichier, le verdict : trois acceptées, une avec avertissement, prix en hausse de quarante pour cent par rapport au dernier import, une rejetée, référence vide. En bas, le modèle mémorisé : fournisseur Hidhab, version 3, réutilisé douze fois. Les données sont un exemple construit.',
      sheetLabel: 'Feuille reçue · tarif_nov_2026.xlsx', titleRow: 'Tarif novembre 2026 · SARL Hidhab Distribution · (ligne de titre fusionnée)',
      headers: ['Réf.', 'Désignation', 'PU HT', 'Qté/carton', 'Code EAN'],
      rows: [
        { cells: ['HD-0412', 'Huile de table 5 L', '1 250,00', '4', '6130001234567'], kind: 'ok', verdict: 'acceptée' },
        { cells: ['HD-0413', 'Semoule fine 25 kg', '2 980,00', '1', '613 0001 234 574'], kind: 'ok', verdict: 'acceptée · EAN nettoyé', bad: 4 },
        { cells: ['HD-0417', 'Sucre 1 kg', '168,00', '10', '6130001234581'], kind: 'warn', verdict: 'avertissement · +40 % vs dernier import', bad: 2 },
        { cells: ['', 'Lait UHT 1 L', '95,00', '6', '6130001234598'], kind: 'rej', verdict: 'rejetée · référence vide', bad: 0 },
        { cells: ['HD-0420', 'Café moulu 250 g', 'N/D', '20', '6130001234604'], kind: 'rej', verdict: 'rejetée · prix illisible', bad: 2 },
      ],
      totalsRow: 'TOTAL · 5 lignes · (ligne ignorée par le modèle)',
      fieldsLabel: 'Champs de l’application',
      fields: [
        { name: 'Référence fournisseur', rule: 'clé · obligatoire · unique par fournisseur', from: 0, transform: 'espaces retirés · majuscules', key: true },
        { name: 'Libellé', rule: 'texte · ne remplace pas le libellé interne', from: 1, transform: 'tel quel · espaces normalisés' },
        { name: 'Prix d’achat HT', rule: 'nombre · virgule décimale FR · > 0', from: 2, transform: '« 1 250,00 » → 1250.00' },
        { name: 'Unités par carton', rule: 'entier · ≥ 1', from: 3, transform: 'entier' },
        { name: 'Code-barres', rule: 'EAN-13 · chiffre de contrôle vérifié', from: 4, transform: 'espaces retirés · contrôle' },
      ],
      tplTitle: 'Modèle de correspondance mémorisé · SARL Hidhab Distribution · v3', tplBody: 'ligne de titre ignorée · en-têtes reconnus · ligne TOTAL ignorée · réutilisé 12 fois · si une colonne change de nom, l’application demande, elle ne devine pas',
      rule: 'Les en-têtes du fournisseur ne sont jamais les champs de l’application : une table de correspondance, mémorisée par fournisseur, fait le lien, et chaque colonne a une règle de lecture.',
      rule2: 'Chaque ligne reçoit un verdict avant qu’une seule valeur ne soit écrite : acceptée, avertissement à confirmer, ou rejetée avec la raison.',
      note: 'références, prix et codes : exemple construit · le seuil d’avertissement (ici +40 %) est fixé par le gérant la première semaine',
    },
    run: {
      title: 'Un import, du dépôt du fichier au retour arrière : ce qui se passe, et combien de temps',
      alt: 'Sept étapes. Dépôt du fichier, 1 842 lignes, par le gérant depuis son navigateur. Modèle détecté, Hidhab version 3, en-têtes reconnus. Essai à blanc en deux secondes : rien n’est écrit. Validation : 1 790 lignes acceptées, 44 avertissements, 8 rejets. Confirmation par le gérant, qui voit les avertissements et confirme en un geste. Application en arrière-plan par lots de 200, barre de progression, 38 secondes. Journal et notification : import numéro 27, 1 790 prix mis à jour, rapport des rejets envoyé par WhatsApp. En bas, l’annulation : l’import 27 peut être défait en un geste, les 1 790 valeurs précédentes sont restaurées ; et la clé d’idempotence : fournisseur, référence et empreinte du fichier, un fichier redéposé ne fait rien. Les chiffres sont un exemple construit.',
      stages: [
        { title: 'Dépôt', l1: 'tarif_nov_2026.xlsx', l2: '1 842 lignes · 312 Ko', l3: 'par le gérant', l4: 'navigateur', time: '0 s' },
        { title: 'Modèle détecté', l1: 'Hidhab · v3', l2: 'en-têtes reconnus 5/5', l3: 'titre et TOTAL ignorés', l4: 'confiance haute', time: '< 1 s' },
        { title: 'Essai à blanc', l1: 'tout est lu', l2: 'rien n’est écrit', l3: 'verdict par ligne', l4: 'aperçu des 20 premières', time: '2 s', hot: true },
        { title: 'Validation', l1: '1 790 acceptées', l2: '44 avertissements', l3: '8 rejets · raisons', l4: 'rapport téléchargeable', time: '—' },
        { title: 'Confirmation', l1: 'le gérant voit les 44', l2: 'confirme en un geste', l3: 'ou écarte certaines', l4: 'journalisé', time: 'humain' },
        { title: 'Application', l1: 'arrière-plan', l2: 'lots de 200 lignes', l3: 'progression visible', l4: 'reprise si coupure', time: '38 s', hot: true },
        { title: 'Journal et avis', l1: 'import n° 27', l2: '1 790 prix mis à jour', l3: 'rapport des 8 rejets', l4: 'WhatsApp au gérant', time: '< 1 s' },
      ],
      progressLabel: 'Application par lots · 1 790 lignes',
      batches: ['lot 1 · 200', 'lot 2 · 200', 'lot 3 · 200', 'lot 4 · 200', 'lot 5 · 200', 'lot 6 · 200', 'lot 7 · 200', 'lot 8 · 200', 'lot 9 · 190'],
      results: [{ big: '1 790', label: 'prix mis à jour · ancien prix conservé dans l’historique', hot: true }, { big: '44', label: 'avertissements confirmés par le gérant · tracés' }, { big: '8', label: 'rejets · rapport envoyé au fournisseur' }],
      undoTitle: 'Annuler l’import n° 27 · en un geste', undoBody: 'les 1 790 valeurs précédentes sont restaurées · l’annulation est elle-même un import journalisé',
      idemTitle: 'Clé d’idempotence · fournisseur + référence + empreinte du fichier', idemBody: 'le même fichier redéposé ne fait rien · une ligne déjà appliquée n’est pas réappliquée après une coupure',
      rule: 'Rien n’est écrit avant l’essai à blanc et la confirmation ; tout ce qui est écrit peut être défait en un geste, parce que chaque valeur remplacée est conservée avec le numéro de l’import.',
      note: 'nombres de lignes, durées et seuils : exemple construit · la durée dépend du volume et du serveur',
    },
  },
  en: {
    mapping: {
      title: 'The supplier’s file, column by column: what we do with it, and what we refuse',
      alt: 'On the left, the supplier’s sheet as it arrives: a title row “Price list November 2026”, headers in the supplier’s words, Ref., Description, Unit price, Qty/case, EAN code, five rows including one with a price written 1 250,00, one with an EAN containing spaces, one without a reference, one with N/A as price, and a totals row at the bottom. On the right, the application’s fields: supplier reference, key; label; purchase price; units per case; barcode. Lines link each column to its field with the transform applied: spaces removed, decimal comma read, check digit verified, integer. Next to each file row, the verdict: three accepted, one with a warning, price up forty percent since the last import, one rejected, empty reference. At the bottom, the remembered template: supplier Hidhab, version 3, reused twelve times. The data is a constructed example.',
      sheetLabel: 'Sheet received · tarif_nov_2026.xlsx', titleRow: 'Price list November 2026 · SARL Hidhab Distribution · (merged title row)',
      headers: ['Ref.', 'Description', 'Unit price', 'Qty/case', 'EAN code'],
      rows: [
        { cells: ['HD-0412', 'Table oil 5 L', '1 250,00', '4', '6130001234567'], kind: 'ok', verdict: 'accepted' },
        { cells: ['HD-0413', 'Fine semolina 25 kg', '2 980,00', '1', '613 0001 234 574'], kind: 'ok', verdict: 'accepted · EAN cleaned', bad: 4 },
        { cells: ['HD-0417', 'Sugar 1 kg', '168,00', '10', '6130001234581'], kind: 'warn', verdict: 'warning · +40 % vs last import', bad: 2 },
        { cells: ['', 'UHT milk 1 L', '95,00', '6', '6130001234598'], kind: 'rej', verdict: 'rejected · empty reference', bad: 0 },
        { cells: ['HD-0420', 'Ground coffee 250 g', 'N/A', '20', '6130001234604'], kind: 'rej', verdict: 'rejected · unreadable price', bad: 2 },
      ],
      totalsRow: 'TOTAL · 5 rows · (row ignored by the template)',
      fieldsLabel: 'Application fields',
      fields: [
        { name: 'Supplier reference', rule: 'key · required · unique per supplier', from: 0, transform: 'spaces removed · uppercase', key: true },
        { name: 'Label', rule: 'text · does not replace the internal label', from: 1, transform: 'as is · spaces normalised' },
        { name: 'Purchase price', rule: 'number · FR decimal comma · > 0', from: 2, transform: '“1 250,00” → 1250.00' },
        { name: 'Units per case', rule: 'integer · ≥ 1', from: 3, transform: 'integer' },
        { name: 'Barcode', rule: 'EAN-13 · check digit verified', from: 4, transform: 'spaces removed · check' },
      ],
      tplTitle: 'Remembered mapping template · SARL Hidhab Distribution · v3', tplBody: 'title row ignored · headers recognised · TOTAL row ignored · reused 12 times · if a column changes name, the application asks, it does not guess',
      rule: 'The supplier’s headers are never the application’s fields: a mapping table, remembered per supplier, makes the link, and every column has a reading rule.',
      rule2: 'Every row gets a verdict before a single value is written: accepted, warning to confirm, or rejected with the reason.',
      note: 'references, prices and codes: constructed example · the warning threshold (here +40 %) is set by the manager in the first week',
    },
    run: {
      title: 'One import, from file upload to undo: what happens, and how long it takes',
      alt: 'Seven steps. File upload, 1,842 rows, by the manager from their browser. Template detected, Hidhab version 3, headers recognised. Dry run in two seconds: nothing is written. Validation: 1,790 rows accepted, 44 warnings, 8 rejections. Confirmation by the manager, who sees the warnings and confirms in one gesture. Background apply in batches of 200, progress bar, 38 seconds. Journal and notice: import number 27, 1,790 prices updated, rejection report sent by WhatsApp. At the bottom, the undo: import 27 can be undone in one gesture, the 1,790 previous values are restored; and the idempotency key: supplier, reference and file fingerprint, a re-uploaded file does nothing. The figures are a constructed example.',
      stages: [
        { title: 'Upload', l1: 'tarif_nov_2026.xlsx', l2: '1,842 rows · 312 KB', l3: 'by the manager', l4: 'browser', time: '0 s' },
        { title: 'Template detected', l1: 'Hidhab · v3', l2: 'headers recognised 5/5', l3: 'title and TOTAL ignored', l4: 'high confidence', time: '< 1 s' },
        { title: 'Dry run', l1: 'everything is read', l2: 'nothing is written', l3: 'verdict per row', l4: 'preview of first 20', time: '2 s', hot: true },
        { title: 'Validation', l1: '1,790 accepted', l2: '44 warnings', l3: '8 rejections · reasons', l4: 'downloadable report', time: '—' },
        { title: 'Confirmation', l1: 'the manager sees the 44', l2: 'confirms in one gesture', l3: 'or excludes some', l4: 'logged', time: 'human' },
        { title: 'Apply', l1: 'background', l2: 'batches of 200 rows', l3: 'visible progress', l4: 'resume after a cut', time: '38 s', hot: true },
        { title: 'Journal and notice', l1: 'import no. 27', l2: '1,790 prices updated', l3: 'report of the 8 rejections', l4: 'WhatsApp to the manager', time: '< 1 s' },
      ],
      progressLabel: 'Apply in batches · 1,790 rows',
      batches: ['batch 1 · 200', 'batch 2 · 200', 'batch 3 · 200', 'batch 4 · 200', 'batch 5 · 200', 'batch 6 · 200', 'batch 7 · 200', 'batch 8 · 200', 'batch 9 · 190'],
      results: [{ big: '1,790', label: 'prices updated · previous price kept in history', hot: true }, { big: '44', label: 'warnings confirmed by the manager · traced' }, { big: '8', label: 'rejections · report sent to the supplier' }],
      undoTitle: 'Undo import no. 27 · in one gesture', undoBody: 'the 1,790 previous values are restored · the undo is itself a logged import',
      idemTitle: 'Idempotency key · supplier + reference + file fingerprint', idemBody: 'the same file re-uploaded does nothing · a row already applied is not reapplied after a cut',
      rule: 'Nothing is written before the dry run and the confirmation; everything written can be undone in one gesture, because every replaced value is kept with the import number.',
      note: 'row counts, durations and thresholds: constructed example · duration depends on volume and server',
    },
  },
  ar: {
    mapping: {
      title: 'ملف المورد، عموداً عموداً: ما يحويه، وما نفعل به، وما نرفضه',
      alt: 'على اليمين ورقة المورد كما تصل: سطر عنوان «تعريفة نوفمبر 2026»، رؤوس بكلماته، مرجع، تسمية، سعر الوحدة، كمية/كرتون، رمز EAN، خمسة أسطر منها واحد بسعر مكتوب 1 250,00، وواحد برمز EAN فيه مسافات، وواحد بلا مرجع، وواحد بـ N/D في السعر، وسطر مجاميع في الأسفل. على اليسار حقول التطبيق: مرجع المورد، المفتاح؛ تسمية؛ سعر الشراء؛ وحدات لكل كرتون؛ باركود. خطوط تربط كل عمود بحقله مع التحويل المطبَّق: مسافات محذوفة، فاصلة عشرية مقروءة، رقم تحقق مُتحقَّق منه، عدد صحيح. وبجانب كل سطر من الملف الحكم: ثلاثة مقبولة، وواحد بتحذير، سعر ارتفع أربعين بالمئة منذ آخر استيراد، وواحد مرفوض، مرجع فارغ. وفي الأسفل القالب المحفوظ: المورد الهضاب، النسخة 3، أعيد استعماله اثنتي عشرة مرة. والبيانات مثال مبني.',
      sheetLabel: `ورقة مستلَمة · ${I('tarif_nov_2026.xlsx')}`, titleRow: 'تعريفة نوفمبر 2026 · SARL Hidhab Distribution · (سطر عنوان مدمج)',
      headers: ['مرجع', 'تسمية', 'سعر الوحدة', 'كمية/كرتون', 'رمز EAN'],
      rows: [
        { cells: [I('HD-0412'), 'زيت المائدة 5 ل', I('1 250,00'), '4', I('6130001234567')], kind: 'ok', verdict: 'مقبول' },
        { cells: [I('HD-0413'), 'سميد رقيق 25 كغ', I('2 980,00'), '1', I('613 0001 234 574')], kind: 'ok', verdict: 'مقبول · EAN منظَّف', bad: 4 },
        { cells: [I('HD-0417'), 'سكر 1 كغ', I('168,00'), '10', I('6130001234581')], kind: 'warn', verdict: `تحذير · ${I('+40 %')} عن آخر استيراد`, bad: 2 },
        { cells: ['', 'حليب 1 ل', I('95,00'), '6', I('6130001234598')], kind: 'rej', verdict: 'مرفوض · مرجع فارغ', bad: 0 },
        { cells: [I('HD-0420'), 'قهوة مطحونة 250 غ', I('N/D'), '20', I('6130001234604')], kind: 'rej', verdict: 'مرفوض · سعر غير مقروء', bad: 2 },
      ],
      totalsRow: 'المجموع · 5 أسطر · (سطر يتجاهله القالب)',
      fieldsLabel: 'حقول التطبيق',
      fields: [
        { name: 'مرجع المورد', rule: 'مفتاح · إلزامي · فريد لكل مورد', from: 0, transform: 'مسافات محذوفة · أحرف كبيرة', key: true },
        { name: 'التسمية', rule: 'نص · لا يحل محل التسمية الداخلية', from: 1, transform: 'كما هي · مسافات منظَّمة' },
        { name: 'سعر الشراء', rule: `عدد · فاصلة عشرية · ${I('> 0')}`, from: 2, transform: I('« 1 250,00 » → 1250.00') },
        { name: 'وحدات لكل كرتون', rule: `عدد صحيح · ${I('≥ 1')}`, from: 3, transform: 'عدد صحيح' },
        { name: 'الباركود', rule: `${I('EAN-13')} · رقم تحقق مُتحقَّق منه`, from: 4, transform: 'مسافات محذوفة · تحقق' },
      ],
      tplTitle: 'قالب مطابقة محفوظ · SARL Hidhab Distribution · ن3', tplBody: 'سطر العنوان متجاهَل · الرؤوس معروفة · سطر المجموع متجاهَل · أعيد استعماله 12 مرة · إن تغيّر اسم عمود يسأل التطبيق ولا يخمّن',
      rule: 'رؤوس المورد ليست أبداً حقول التطبيق: جدول مطابقة محفوظ لكل مورد يربط بينها، ولكل عمود قاعدة قراءة.',
      rule2: 'كل سطر يتلقى حكماً قبل كتابة قيمة واحدة: مقبول، أو تحذير يُؤكَّد، أو مرفوض بسببه.',
      note: 'المراجع والأسعار والرموز: مثال مبني · عتبة التحذير (هنا +40 %) يحددها المسيّر في الأسبوع الأول',
    },
    run: {
      title: 'استيراد واحد، من إيداع الملف إلى التراجع: ما يحدث، وكم يستغرق',
      alt: 'سبع خطوات. إيداع الملف، 1,842 سطراً، من المسيّر عبر متصفحه. قالب مكتشَف، الهضاب النسخة 3، رؤوس معروفة. تجربة على الفارغ في ثانيتين: لا شيء يُكتب. تحقق: 1,790 سطراً مقبولة، 44 تحذيراً، 8 رفض. تأكيد المسيّر الذي يرى التحذيرات ويؤكد بحركة واحدة. تطبيق في الخلفية بدفعات من 200، شريط تقدم، 38 ثانية. سجل وإشعار: الاستيراد رقم 27، 1,790 سعراً محدَّثاً، تقرير الرفض مرسل عبر WhatsApp. في الأسفل التراجع: يمكن إلغاء الاستيراد 27 بحركة واحدة فتُستعاد القيم السابقة الـ 1,790؛ ومفتاح عدم التكرار: المورد والمرجع وبصمة الملف، وملف معاد إيداعه لا يفعل شيئاً. والأرقام مثال مبني.',
      stages: [
        { title: 'الإيداع', l1: I('tarif_nov_2026.xlsx'), l2: `${I('1,842')} سطر · ${I('312 KB')}`, l3: 'من المسيّر', l4: 'المتصفح', time: I('0 s') },
        { title: 'قالب مكتشَف', l1: 'الهضاب · ن3', l2: `رؤوس معروفة ${I('5/5')}`, l3: 'العنوان والمجموع متجاهَلان', l4: 'ثقة عالية', time: I('< 1 s') },
        { title: 'تجربة على الفارغ', l1: 'كل شيء يُقرأ', l2: 'لا شيء يُكتب', l3: 'حكم لكل سطر', l4: 'معاينة أول 20', time: I('2 s'), hot: true },
        { title: 'التحقق', l1: `${I('1,790')} مقبولة`, l2: '44 تحذيراً', l3: '8 رفض · أسباب', l4: 'تقرير قابل للتنزيل', time: '—' },
        { title: 'التأكيد', l1: 'يرى المسيّر الـ 44', l2: 'يؤكد بحركة واحدة', l3: 'أو يستبعد بعضها', l4: 'مسجَّل', time: 'بشري' },
        { title: 'التطبيق', l1: 'في الخلفية', l2: 'دفعات من 200 سطر', l3: 'تقدم ظاهر', l4: 'استئناف بعد انقطاع', time: I('38 s'), hot: true },
        { title: 'سجل وإشعار', l1: 'استيراد رقم 27', l2: `${I('1,790')} سعر محدَّث`, l3: 'تقرير الرفض الثمانية', l4: 'WhatsApp للمسيّر', time: I('< 1 s') },
      ],
      progressLabel: `تطبيق بدفعات · ${I('1,790')} سطر`,
      batches: ['دفعة 1 · 200', 'دفعة 2 · 200', 'دفعة 3 · 200', 'دفعة 4 · 200', 'دفعة 5 · 200', 'دفعة 6 · 200', 'دفعة 7 · 200', 'دفعة 8 · 200', 'دفعة 9 · 190'],
      results: [{ big: I('1,790'), label: 'سعر محدَّث · السعر القديم محفوظ في التاريخ', hot: true }, { big: '44', label: 'تحذيراً أكّدها المسيّر · متتبَّعة' }, { big: '8', label: 'رفض · تقرير مرسل إلى المورد' }],
      undoTitle: 'إلغاء الاستيراد رقم 27 · بحركة واحدة', undoBody: `تُستعاد القيم السابقة الـ ${I('1,790')} · الإلغاء نفسه استيراد مسجَّل`,
      idemTitle: 'مفتاح عدم التكرار · المورد + المرجع + بصمة الملف', idemBody: 'الملف نفسه معاداً لا يفعل شيئاً · سطر طُبّق لا يُعاد تطبيقه بعد انقطاع',
      rule: 'لا شيء يُكتب قبل التجربة على الفارغ والتأكيد؛ وكل ما يُكتب يمكن إلغاؤه بحركة واحدة لأن كل قيمة مستبدَلة تُحفظ مع رقم الاستيراد.',
      note: 'أعداد الأسطر والمدد والعتبات: مثال مبني · تتوقف المدة على الحجم والخادم',
    },
  },
};
