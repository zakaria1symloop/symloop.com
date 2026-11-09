// Bespoke animated figures for the 2027 in-app search post.
//  query():   one query typed by a retailer ("zit 5l"), normalised, matched
//             against the three fields of one product (FR, AR, hand-written
//             synonyms), ranked and shown — letter by letter.
//  ranking(): four results and the bar that orders them: words, typos,
//             proximity, availability, customer price. Bars grow in sequence.
// CSS-only animation (prefers-reduced-motion disables it); base attributes are
// the finished state for the JPG rasteriser.
import { W, C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 9;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }

export function query(t, rtl) {
  const c = ctx(rtl); const P = 'sq'; const css = []; const H = 600;
  let s = open(H, t.title, t.alt) + heading(c, t.title);

  // ── the search box, typed letter by letter
  const qx = 80; const qy = 100; const qw = 420; const qh = 56;
  s += rect(c, qx, qy, qw, qh, { stroke: C.line2, fill: C.fill, r: 4 });
  s += circle(c, qx + 24, qy + 28, 7, { stroke: C.fg55, sw: 1.5 });
  s += line(c, qx + 29, qy + 33, qx + 35, qy + 39, { stroke: C.fg55, sw: 1.5 });
  const letters = [...t.typed];
  letters.forEach((ch, i) => {
    const at = 3 + i * 2.2;
    const slot = rtl ? letters.length - 1 - i : i; // Latin query reads left-to-right in both directions
    s += `<g style="animation:${show(css, P, `l${i}`, at)}">` + text(c, qx + 50 + slot * 15, qy + 36, ch, { size: 22, font: 'mono', fill: C.fg }) + '</g>';
  });
  s += text(c, qx, qy + qh + 22, t.typedNote, { size: 12, fill: C.fg55 });

  // ── normalisation steps (right of the box)
  const nx = 540; const steps = t.norm;
  steps.forEach((st, i) => {
    const y = qy + 12 + i * 22;
    s += `<g style="animation:${show(css, P, `n${i}`, 18 + i * 3)}">` + text(c, nx, y + 4, st.k, { size: 11, font: 'mono', fill: C.fg35, letter: 1 }) + text(c, nx + 130, y + 4, st.v, { size: 13, font: 'mono', fill: i === steps.length - 1 ? C.accent : C.fg70 }) + '</g>';
  });

  // ── the product document with three fields
  const dx = 80; const dy = 230; const dw = 620; const dh = 150;
  s += rect(c, dx, dy, dw, dh, { stroke: C.line2 });
  s += text(c, dx + 16, dy + 26, t.doc.label, { size: 11, font: 'mono', fill: C.fg35, letter: 2, upper: true });
  t.doc.fields.forEach((f, i) => {
    const y = dy + 56 + i * 30;
    s += text(c, dx + 16, y, f.k, { size: 11, font: 'mono', fill: C.fg35 });
    s += text(c, dx + 130, y, f.v, { size: 14, fill: C.fg });
    if (f.why) {
      // accent marker on the field that matched, and why
      s += `<g style="animation:${show(css, P, `h${i}`, 36 + i * 4)}">` + circle(c, dx + 118, y - 4, 3.5, { fill: C.accent }) + text(c, dx + 430, y, f.why, { size: 12, fill: C.accent }) + '</g>';
    }
  });

  // ── arrows from the query to the document, then to the result
  s += `<g style="animation:${show(css, P, 'a1', 33)}">` + line(c, 470, qy + qh, 470, dy - 6, { stroke: C.accent, sw: 1.5 }) + `<path d="M ${c.X(470) - 4} ${dy - 12} L ${c.X(470)} ${dy - 6} L ${c.X(470) + 4} ${dy - 12}" fill="none" stroke="${C.accent}" stroke-width="1.5"/>` + '</g>';

  // ── the result card
  const rx = 760; const ry = 230; const rw = 360; const rh = 150;
  s += `<g style="animation:${show(css, P, 'res', 52)}">` + rect(c, rx, ry, rw, rh, { stroke: C.accent, fill: C.fill })
    + text(c, rx + 16, ry + 26, t.result.label, { size: 11, font: 'mono', fill: C.accent, letter: 2, upper: true })
    + text(c, rx + 16, ry + 58, t.result.name, { size: 17, fill: C.fg })
    + text(c, rx + 16, ry + 82, t.result.ar, { size: 15, fill: C.fg70 })
    + text(c, rx + 16, ry + 112, t.result.meta, { size: 12.5, fill: C.fg55 })
    + text(c, rx + 16, ry + 132, t.result.score, { size: 11.5, font: 'mono', fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'a2', 50)}">` + line(c, dx + dw + 6, dy + dh / 2, rx - 6, ry + rh / 2, { stroke: C.accent, sw: 1.5 }) + '</g>';

  // ── bottom: what the log writes
  const jy = 430;
  s += line(c, 80, jy, 1120, jy, { stroke: C.line });
  s += text(c, 80, jy + 28, t.log.label, { size: 11, font: 'mono', fill: C.fg35, letter: 2, upper: true });
  t.log.lines.forEach((l, i) => {
    s += `<g style="animation:${show(css, P, `j${i}`, 60 + i * 8)}">` + text(c, 80, jy + 56 + i * 22, l, { size: 12.5, font: 'mono', fill: i === t.log.lines.length - 1 ? C.accent : C.fg70 }) + '</g>';
  });

  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

export function ranking(t, rtl) {
  const c = ctx(rtl); const P = 'sr'; const css = []; const H = 560;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  const origin = rtl ? 'right center' : 'left center';
  const x0 = 400; const bw = 560; const rowH = 78; const top = 110;
  // legend of the bar parts
  t.parts.forEach((p, i) => {
    const lx = 80 + i * 200;
    s += rect(c, lx, 86, 10, 10, { fill: p.fill, stroke: 'none' });
    s += text(c, lx + 18, 95, p.label, { size: 11.5, fill: C.fg55 });
  });
  t.rows.forEach((r, ri) => {
    const y = top + 30 + ri * rowH;
    s += `<g style="animation:${show(css, P, `rk${ri}`, 70 + ri * 3)}">` + text(c, 80, y + 24, r.rank, { size: 30, font: 'serif', fill: ri === 0 ? C.accent : C.fg35 }) + '</g>';
    s += text(c, 130, y + 14, r.name, { size: 15, fill: C.fg });
    s += text(c, 130, y + 34, r.sub, { size: 12, fill: C.fg55 });
    let x = x0; let from = 8 + ri * 14;
    r.parts.forEach((v, pi) => {
      const w = v * bw;
      if (w <= 0) return;
      const to = from + 6;
      css.push(`@keyframes ${P}-b${ri}${pi}{0%,${from}%{transform:scaleX(0)}${to}%,100%{transform:scaleX(1)}}`);
      s += `<g style="transform-box:fill-box;transform-origin:${origin};animation:${P}-b${ri}${pi} ${LOOP}s linear infinite">` + rect(c, x, y + 6, w, 28, { fill: t.parts[pi].fill, stroke: 'none' }) + '</g>';
      x += w + 2; from = to;
    });
    s += `<g style="animation:${show(css, P, `sc${ri}`, from + 2)}">` + text(c, x0 + bw + 24, y + 26, r.score, { size: 14, font: 'mono', fill: ri === 0 ? C.accent : C.fg55 }) + '</g>';
    if (r.note) s += `<g style="animation:${show(css, P, `nt${ri}`, from + 4)}">` + text(c, x0, y + 52, r.note, { size: 11.5, fill: r.noteAccent ? C.accent : C.fg35 }) + '</g>';
  });
  s += text(c, 80, H - 36, t.foot, { size: 12, fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

const FILLS = ['rgba(255,255,255,0.85)', 'rgba(255,255,255,0.55)', 'rgba(255,255,255,0.30)', '#F2B544', 'rgba(242,181,68,0.45)'];

export const STRINGS = {
  fr: {
    query: {
      title: 'Une recherche « zit 5l » tapée par un détaillant, de la frappe au résultat',
      alt: 'Un détaillant tape « zit 5l ». La requête est normalisée (minuscules, accents, chiffres), le synonyme écrit à la main « zit » renvoie à « huile », le document produit est retrouvé par son champ synonymes et son nom en français, le résultat « Huile de tournesol 5 L, carton de 4 » s’affiche avec son prix pour ce client, et le journal écrit la requête, le résultat et le clic.',
      typed: 'zit 5l', typedNote: 'tapé en lettres latines, en darija, sans accent ni espace avant l’unité',
      norm: [{ k: 'minuscules', v: 'zit 5l' }, { k: 'unités', v: 'zit 5 l' }, { k: 'synonymes', v: 'zit → huile' }, { k: 'fautes', v: '1 faute tolérée dès 5 lettres' }],
      doc: { label: 'Document produit 1042', fields: [
        { k: 'nom_fr', v: 'Huile de tournesol 5 L, carton de 4', hit: [0, 36], why: 'mot « huile » + « 5 l »' },
        { k: 'nom_ar', v: 'زيت عباد الشمس 5 ل، كرتون 4', hit: [0, 28], why: 'mot « زيت » (sans article)' },
        { k: 'synonymes', v: 'zit · zite · zeit · huile tournesol · oil', hit: [0, 22], why: 'écrit à la main, semaine 1' },
      ] },
      result: { label: 'Résultat 1', name: 'Huile de tournesol 5 L, carton de 4', ar: 'زيت عباد الشمس 5 ل', meta: 'en stock · 4 800 DA pour ce client', score: 'mots 2/2 · fautes 0 · dispo oui' },
      log: { label: '06 · Le journal de recherche', lines: ['14:02:10 détaillant 4812 · « zit 5l » · 3 résultats · 41 ms', '14:02:14 clic résultat 1 · produit 1042', 'zéro résultat cette semaine : 2,1 % des requêtes · 14 termes à ajouter aux synonymes'] },
    },
    ranking: {
      title: 'Pourquoi le résultat 1 est en premier : ce qui compose le classement',
      alt: 'Quatre produits et une barre par produit composée de cinq parts : mots trouvés, fautes, proximité, disponibilité, prix pour ce client. Le produit en stock avec les deux mots sans faute arrive premier ; un produit identique en rupture descend ; un produit avec une faute de frappe est juste derrière.',
      parts: [{ label: 'mots trouvés', fill: FILLS[0] }, { label: 'sans faute', fill: FILLS[1] }, { label: 'proximité', fill: FILLS[2] }, { label: 'en stock', fill: FILLS[3] }, { label: 'prix pour ce client', fill: FILLS[4] }],
      rows: [
        { rank: '1', name: 'Huile de tournesol 5 L, carton de 4', sub: 'en stock · 4 800 DA', parts: [0.28, 0.16, 0.12, 0.18, 0.1], score: '0,84', note: 'les deux mots, sans faute, en stock, prix négocié pour ce détaillant', noteAccent: true },
        { rank: '2', name: 'Huile de tournesol 5 L, bidon seul', sub: 'en stock · 1 300 DA', parts: [0.28, 0.16, 0.08, 0.18, 0.04], score: '0,74' },
        { rank: '3', name: 'Huile de soja 5 L, carton de 4', sub: 'rupture · 4 500 DA', parts: [0.28, 0.16, 0.12, 0, 0.08], score: '0,64', note: 'même mots, mais en rupture : la disponibilité est une règle de classement, pas un filtre' },
        { rank: '4', name: 'Huile d’olive 1 L', sub: 'en stock · 1 900 DA', parts: [0.14, 0.16, 0, 0.18, 0.02], score: '0,50', note: 'un seul mot sur deux : « 5 l » absent' },
      ],
      foot: 'Les parts sont illustratives ; l’ordre des règles (mots, fautes, proximité, puis les règles métier) est celui des moteurs de recherche courants, et les règles métier sont écrites avec le gérant.',
    },
  },
  en: {
    query: {
      title: 'A “zit 5l” search typed by a retailer, from keystroke to result',
      alt: 'A retailer types “zit 5l”. The query is normalised (lowercase, accents, digits), the hand-written synonym “zit” maps to “huile”, the product document is found through its synonyms field and its French name, the result “Sunflower oil 5 L, box of 4” is shown with this customer’s price, and the log writes the query, the result and the click.',
      typed: 'zit 5l', typedNote: 'typed in Latin letters, in darija, no accent, no space before the unit',
      norm: [{ k: 'lowercase', v: 'zit 5l' }, { k: 'units', v: 'zit 5 l' }, { k: 'synonyms', v: 'zit → huile' }, { k: 'typos', v: '1 typo allowed from 5 letters' }],
      doc: { label: 'Product document 1042', fields: [
        { k: 'name_fr', v: 'Huile de tournesol 5 L, carton de 4', hit: [0, 36], why: 'word “huile” + “5 l”' },
        { k: 'name_ar', v: 'زيت عباد الشمس 5 ل، كرتون 4', hit: [0, 28], why: 'word “زيت” (article stripped)' },
        { k: 'synonyms', v: 'zit · zite · zeit · huile tournesol · oil', hit: [0, 22], why: 'hand-written, week 1' },
      ] },
      result: { label: 'Result 1', name: 'Sunflower oil 5 L, box of 4', ar: 'زيت عباد الشمس 5 ل', meta: 'in stock · 4,800 DA for this customer', score: 'words 2/2 · typos 0 · in stock yes' },
      log: { label: '06 · The search log', lines: ['14:02:10 retailer 4812 · “zit 5l” · 3 results · 41 ms', '14:02:14 click result 1 · product 1042', 'zero results this week: 2.1 % of queries · 14 terms to add to synonyms'] },
    },
    ranking: {
      title: 'Why result 1 comes first: what makes up the ranking',
      alt: 'Four products and one bar per product made of five parts: words found, typos, proximity, availability, price for this customer. The in-stock product with both words and no typo comes first; an identical out-of-stock product drops; a product with a typo is just behind.',
      parts: [{ label: 'words found', fill: FILLS[0] }, { label: 'no typo', fill: FILLS[1] }, { label: 'proximity', fill: FILLS[2] }, { label: 'in stock', fill: FILLS[3] }, { label: 'price for this customer', fill: FILLS[4] }],
      rows: [
        { rank: '1', name: 'Sunflower oil 5 L, box of 4', sub: 'in stock · 4,800 DA', parts: [0.28, 0.16, 0.12, 0.18, 0.1], score: '0.84', note: 'both words, no typo, in stock, negotiated price for this retailer', noteAccent: true },
        { rank: '2', name: 'Sunflower oil 5 L, single can', sub: 'in stock · 1,300 DA', parts: [0.28, 0.16, 0.08, 0.18, 0.04], score: '0.74' },
        { rank: '3', name: 'Soybean oil 5 L, box of 4', sub: 'out of stock · 4,500 DA', parts: [0.28, 0.16, 0.12, 0, 0.08], score: '0.64', note: 'same words, but out of stock: availability is a ranking rule, not a filter' },
        { rank: '4', name: 'Olive oil 1 L', sub: 'in stock · 1,900 DA', parts: [0.14, 0.16, 0, 0.18, 0.02], score: '0.50', note: 'one word out of two: “5 l” missing' },
      ],
      foot: 'Parts are illustrative; the order of rules (words, typos, proximity, then business rules) is that of common search engines, and the business rules are written with the manager.',
    },
  },
  ar: {
    query: {
      title: 'بحث «zit 5l» يكتبه تاجر، من الضغطة إلى النتيجة',
      alt: 'يكتب تاجر «zit 5l». يُطبَّع الطلب (أحرف صغيرة، حركات، أرقام)، المرادف المكتوب يدوياً «zit» يحيل إلى «huile»، يُسترجع مستند المنتج عبر حقل المرادفات واسمه بالفرنسية، تُعرض النتيجة «زيت عباد الشمس 5 ل، كرتون 4» بسعرها لهذا الزبون، ويكتب السجل الطلب والنتيجة والنقرة.',
      typed: 'zit 5l', typedNote: 'مكتوب بأحرف لاتينية، بالدارجة، بلا حركات ولا مسافة قبل الوحدة',
      norm: [{ k: 'أحرف صغيرة', v: 'zit 5l' }, { k: 'الوحدات', v: 'zit 5 l' }, { k: 'المرادفات', v: 'zit → huile' }, { k: 'الأخطاء', v: 'خطأ واحد مسموح من 5 أحرف' }],
      doc: { label: 'مستند المنتج 1042', fields: [
        { k: 'nom_fr', v: 'Huile de tournesol 5 L, carton de 4', hit: [0, 36], why: 'كلمة «huile» + «5 l»' },
        { k: 'nom_ar', v: 'زيت عباد الشمس 5 ل، كرتون 4', hit: [0, 28], why: 'كلمة «زيت» (بلا أداة التعريف)' },
        { k: 'مرادفات', v: 'zit · zite · zeit · huile tournesol · oil', hit: [0, 22], why: 'مكتوبة يدوياً، الأسبوع 1' },
      ] },
      result: { label: 'النتيجة 1', name: 'زيت عباد الشمس 5 ل، كرتون 4', ar: 'Huile de tournesol 5 L', meta: 'متوفر · ⁦4 800⁩ دج لهذا الزبون', score: 'كلمات 2/2 · أخطاء 0 · متوفر نعم' },
      log: { label: '06 · سجل البحث', lines: ['14:02:10 تاجر 4812 · «zit 5l» · 3 نتائج · 41 ms', '14:02:14 نقرة النتيجة 1 · المنتج 1042', 'صفر نتيجة هذا الأسبوع: ⁦2,1 %⁩ من الطلبات · 14 مصطلحاً تُضاف إلى المرادفات'] },
    },
    ranking: {
      title: 'لماذا النتيجة 1 في المقدمة: مما يتكون الترتيب',
      alt: 'أربعة منتجات وشريط لكل منتج من خمسة أجزاء: الكلمات الموجودة، الأخطاء، التقارب، التوفر، السعر لهذا الزبون. المنتج المتوفر بالكلمتين بلا خطأ يأتي أولاً؛ منتج مطابق غير متوفر ينزل؛ ومنتج بخطأ إملائي يأتي خلفه مباشرة.',
      parts: [{ label: 'كلمات موجودة', fill: FILLS[0] }, { label: 'بلا خطأ', fill: FILLS[1] }, { label: 'التقارب', fill: FILLS[2] }, { label: 'متوفر', fill: FILLS[3] }, { label: 'السعر لهذا الزبون', fill: FILLS[4] }],
      rows: [
        { rank: '1', name: 'زيت عباد الشمس 5 ل، كرتون 4', sub: 'متوفر · ⁦4 800⁩ دج', parts: [0.28, 0.16, 0.12, 0.18, 0.1], score: '⁦0,84⁩', note: 'الكلمتان، بلا خطأ، متوفر، سعر متفاوَض عليه لهذا التاجر', noteAccent: true },
        { rank: '2', name: 'زيت عباد الشمس 5 ل، قارورة واحدة', sub: 'متوفر · ⁦1 300⁩ دج', parts: [0.28, 0.16, 0.08, 0.18, 0.04], score: '⁦0,74⁩' },
        { rank: '3', name: 'زيت الصويا 5 ل، كرتون 4', sub: 'نفاد · ⁦4 500⁩ دج', parts: [0.28, 0.16, 0.12, 0, 0.08], score: '⁦0,64⁩', note: 'الكلمات نفسها لكنه نافد: التوفر قاعدة ترتيب لا مرشّح' },
        { rank: '4', name: 'زيت زيتون 1 ل', sub: 'متوفر · ⁦1 900⁩ دج', parts: [0.14, 0.16, 0, 0.18, 0.02], score: '⁦0,50⁩', note: 'كلمة واحدة من اثنتين: «5 l» غائبة' },
      ],
      foot: 'الأجزاء توضيحية؛ ترتيب القواعد (الكلمات، الأخطاء، التقارب، ثم قواعد العمل) هو ترتيب محركات البحث الشائعة، وقواعد العمل تُكتب مع المسيّر.',
    },
  },
};
