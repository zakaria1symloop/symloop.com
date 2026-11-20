// Bespoke animated figures for the 2027 "comment créer un catalogue en ligne" post.
//  versions(): the same catalogue six months later. Left, the PDF sent by
//              message: forty customer dots appear in six waves, each showing
//              the number of the PDF version that customer still holds; only
//              nine hold the current one. Right, the online catalogue: forty
//              dots, all on today's version.
//  demande():  from the search to the quote request, in three panels: the
//              customer searches and filters, builds a list with quantities,
//              and the sales rep receives a written request with references.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
const TINT = 'rgba(242,181,68,0.06)';
const DARK = '#0b0b0b';

function tiles(c, css, P, ky, ts, at0) {
  let s = '';
  ts.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, at0 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? TINT : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  return s;
}
const motionOff = (P) => `@media (prefers-reduced-motion: reduce){svg [style*="${P}-"]{animation:none !important}}`;

// version of the PDF each of the forty customers still holds (6 = current)
const HELD = [3, 6, 1, 5, 2, 6, 4, 1, 5, 2, 6, 3, 1, 4, 6, 5, 1, 4, 5, 6, 2, 3, 5, 1, 6, 2, 4, 6, 1, 5, 3, 4, 2, 6, 5, 1, 4, 6, 3, 2];
const SHADE = { 1: C.fg35, 2: C.fg35, 3: C.fg55, 4: C.fg55, 5: C.fg70 };

export function versions(t, rtl) {
  const c = ctx(rtl); const P = 'gv'; const css = []; const H = 652;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const gy = (r) => 220 + r * 38;
  // left: the PDF sent by message
  const lx = (col) => 186 + col * 44;
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 520, 272, { stroke: C.fg35, fill: DARK }) + text(c, 96, 168, t.left, { size: 11, fill: C.fg, weight: 500 }) + text(c, 96, 186, t.leftSub, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>';
  for (let v = 1; v <= 6; v++) {
    let g = '';
    HELD.forEach((h, i) => {
      if (h !== v) return; const col = i % 8, row = Math.floor(i / 8); const cur = v === 6; const sh = cur ? C.accent : SHADE[v];
      g += circle(c, lx(col), gy(row), 11, { fill: cur ? C.accent : DARK, stroke: sh, sw: 1.5 }) + text(c, lx(col), gy(row) + 3.5, String(v), { size: 9.5, font: 'mono', fill: cur ? '#000' : sh, weight: 500, anchor: 'middle' });
    });
    s += `<g style="animation:${show(css, P, `v${v}`, 6 + (v - 1) * 6)}">${g}</g>`;
  }
  s += `<g style="animation:${show(css, P, 'ls', 42)}">` + text(c, 96, 402, t.leftSum, { size: 10, fill: C.accent, weight: 500 }) + '</g>';
  // right: the online catalogue
  const rx = (col) => 716 + col * 44;
  s += `<g style="animation:${show(css, P, 'pb', 46)}">` + rect(c, 620, 144, 500, 272, { stroke: C.accent, fill: TINT }) + text(c, 636, 168, t.right, { size: 11, fill: C.fg, weight: 500 }) + text(c, 636, 186, t.rightSub, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>';
  let all = '';
  for (let i = 0; i < 40; i++) { const col = i % 8, row = Math.floor(i / 8); all += circle(c, rx(col), gy(row), 11, { fill: C.accent, stroke: C.accent, sw: 1.5 }); }
  s += `<g style="animation:${show(css, P, 'ra', 50)}">${all}</g>`;
  s += `<g style="animation:${show(css, P, 'rs', 54)}">` + text(c, 636, 402, t.rightSum, { size: 10, fill: C.fg, weight: 500 }) + '</g>';
  const by = 432;
  s += `<g style="animation:${show(css, P, 'bd', 60)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 492;
  s += tiles(c, css, P, ky, t.tiles, 63);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export function demande(t, rtl) {
  const c = ctx(rtl); const P = 'gq'; const css = []; const H = 630;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const px = (k) => 80 + k * 352; const at0 = [3, 26, 46];
  t.panels.forEach((name, k) => {
    s += `<g style="animation:${show(css, P, `p${k}`, at0[k])}">` + rect(c, px(k), 144, 336, 250, { stroke: k === 2 ? C.accent : C.fg35, fill: DARK }) + text(c, px(k) + 14, 168, name, { size: 11, fill: C.fg, weight: 500 }) + text(c, px(k) + 322, 168, String(k + 1), { size: 10, font: 'mono', fill: C.fg55, anchor: 'end' })
      + (k < 2 ? line(c, px(k) + 338, 269, px(k) + 350, 269, { stroke: C.accent, sw: 2 }) : '') + '</g>';
  });
  // panel 1: search, filters, results
  let x = px(0);
  s += `<g style="animation:${show(css, P, 'q', 5)}">` + rect(c, x + 14, 180, 308, 26, { stroke: C.fg70, fill: C.fill }) + text(c, x + 24, 197, t.query, { size: 10, font: 'mono', fill: C.fg }) + '</g>';
  t.chips.forEach((chip, j) => {
    s += `<g style="animation:${show(css, P, `c${j}`, 8 + j * 2)}">` + rect(c, x + 14 + j * 104, 214, 100, 20, { stroke: C.accent, fill: TINT }) + text(c, x + 64 + j * 104, 228, chip, { size: 8.5, font: 'mono', fill: C.accent, anchor: 'middle' }) + '</g>';
  });
  t.results.forEach(([l1, l2], j) => {
    const y = 244 + j * 48; const hot = j === 0;
    s += `<g style="animation:${show(css, P, `r${j}`, 15 + j * 3)}">` + rect(c, x + 14, y, 308, 40, { stroke: hot ? C.accent : C.line2, fill: hot ? TINT : C.fill }) + text(c, x + 24, y + 17, l1, { size: 9.5, fill: hot ? C.accent : C.fg }) + text(c, x + 24, y + 32, l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>';
  });
  // panel 2: the list
  x = px(1);
  t.list.forEach(([l1, l2, qty], j) => {
    const y = 182 + j * 48;
    s += `<g style="animation:${show(css, P, `l${j}`, 29 + j * 4)}">` + rect(c, x + 14, y, 308, 40, { stroke: C.line2, fill: C.fill }) + text(c, x + 24, y + 17, l1, { size: 9.5, fill: C.fg }) + text(c, x + 24, y + 32, l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + text(c, x + 312, y + 25, qty, { size: 12, font: 'mono', fill: C.accent, weight: 500, anchor: 'end' }) + '</g>';
  });
  s += `<g style="animation:${show(css, P, 'bt', 41)}">` + rect(c, x + 14, 340, 308, 36, { stroke: C.accent, fill: C.accent }) + text(c, x + 168, 363, t.button, { size: 11, fill: '#000', weight: 500, anchor: 'middle' }) + '</g>';
  // panel 3: the request received
  x = px(2);
  s += `<g style="animation:${show(css, P, 'cd', 48)}">` + rect(c, x + 14, 180, 308, 152, { stroke: C.accent, fill: TINT }) + text(c, x + 24, 201, t.reqTitle, { size: 10, fill: C.accent, weight: 500 }) + line(c, x + 24, 210, x + 312, 210, { stroke: C.line2 }) + '</g>';
  t.reqLines.forEach(([ref, qty], j) => {
    s += `<g style="animation:${show(css, P, `q${j}`, 50 + j * 2)}">` + text(c, x + 24, 230 + j * 20, ref, { size: 9.5, font: 'mono', fill: C.fg }) + text(c, x + 312, 230 + j * 20, qty, { size: 9.5, font: 'mono', fill: C.accent, anchor: 'end' }) + '</g>';
  });
  s += `<g style="animation:${show(css, P, 'ap', 57)}">` + line(c, x + 24, 282, x + 312, 282, { stroke: C.line2 }) + text(c, x + 24, 301, t.applied[0], { size: 9, fill: C.fg70 }) + text(c, x + 24, 318, t.applied[1], { size: 9, fill: C.fg70 }) + '</g>';
  s += `<g style="animation:${show(css, P, 'in', 60)}">` + text(c, x + 14, 356, t.instead[0], { size: 9.5, fill: C.fg55 }) + text(c, x + 14, 374, t.instead[1], { size: 9.5, fill: C.fg55 }) + '</g>';
  const by = 410;
  s += `<g style="animation:${show(css, P, 'bd', 64)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 470;
  s += tiles(c, css, P, ky, t.tiles, 67);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    versions: {
      title: 'Le même catalogue, six mois plus tard',
      alt: 'Deux panneaux. À gauche, le catalogue en PDF envoyé par message : quarante clients, chacun avec le numéro de la version qu’il détient encore. Six versions sont sorties en six mois ; neuf clients ont la version en cours, trente et un lisent un prix ou une disponibilité qui n’existe plus. À droite, le catalogue en ligne, un seul lien : les quarante clients voient le prix et la disponibilité du jour.',
      header: 'Exemple construit · quarante clients, six versions du PDF en six mois · à gauche qui détient quoi, à droite un seul lien',
      left: 'Le PDF envoyé par message', leftSub: 'le chiffre = la version que le client détient · 6 = version en cours',
      leftSum: '9 clients sur 40 ont la version en cours ; 31 lisent un catalogue périmé',
      right: 'Le catalogue en ligne, un seul lien', rightSub: 'un prix change : une modification, visible aussitôt',
      rightSum: '40 clients sur 40 voient le prix et la disponibilité du jour',
      band: 'Un PDF est une photographie : il est juste le jour de l’envoi. Chaque changement de prix ou de stock crée une version de plus, et personne ne sait qui a laquelle.',
      tiles: [
        { big: '6 versions en circulation', l1: 'une par changement de prix, de stock ou de gamme', l2: 'plus celles que les commerciaux ont modifiées' },
        { big: '31 clients sur 40', l1: 'commandent sur un prix ou une référence qui a changé', l2: 'la correction se fait au téléphone', hot: true },
        { big: 'une seule source', l1: 'la page, le PDF généré et le lien du commercial lisent la même base', l2: 'on corrige une fois' },
      ],
      line1: 'Le problème n’est pas le format PDF : c’est qu’il existe en copies, et qu’une copie ne se corrige pas.',
      line2: 'Un catalogue en ligne peut toujours produire un PDF ; mais il le fabrique à la demande, à partir de la base du jour.',
      note: 'Exemple construit · comptez chez vous combien de versions de votre catalogue circulent.',
    },
    demande: {
      title: 'De la recherche à la demande de devis',
      alt: 'Trois panneaux. Un : le client cherche « disjoncteur 16 A », filtre par calibre, par nombre de pôles et par disponibilité, et obtient trois fiches. Deux : il compose sa liste avec les quantités, quarante disjoncteurs, dix tableaux, six couronnes de câble, puis appuie sur « demander un devis ». Trois : le commercial reçoit une demande écrite, avec le compte client, les références et les quantités, le prix du compte déjà appliqué, au lieu d’un message vocal et de trois photos.',
      header: 'Exemple construit · un grossiste en matériel électrique · le client cherche, compose sa liste, le commercial reçoit une demande écrite',
      panels: ['Le client cherche', 'Il compose sa liste', 'Le commercial reçoit'],
      query: 'disjoncteur 16 A',
      chips: ['calibre 16 A', 'bipolaire', 'en stock'],
      results: [['Disjoncteur 16 A bipolaire', 'réf. 40216 · en stock'], ['Disjoncteur 16 A bipolaire, différentiel', 'réf. 40616 · en stock'], ['Disjoncteur 16 A bipolaire, modulaire', 'réf. 40218 · sur commande']],
      list: [['Disjoncteur 16 A bipolaire', 'réf. 40216', '× 40'], ['Tableau 12 modules', 'réf. 71012', '× 10'], ['Câble 2,5 mm², couronne de 100 m', 'réf. 52025', '× 6']],
      button: 'Demander un devis',
      reqTitle: 'Demande 0318 · compte client 1042',
      reqLines: [['40216', '× 40'], ['71012', '× 10'], ['52025', '× 6']],
      applied: ['prix du compte client déjà appliqué', 'réponse : un devis en PDF, à valider'],
      instead: ['au lieu d’un message vocal,', 'de trois photos et d’un rappel'],
      band: 'Le catalogue ne vend pas à la place du commercial : il lui apporte une demande déjà écrite, avec les références et les quantités.',
      tiles: [
        { big: 'recherche + filtres', l1: 'dans les mots du client, en français et en arabe', l2: 'les recherches sans résultat sont notées' },
        { big: 'une liste, pas un panier', l1: 'pas de paiement en ligne : une demande de devis', l2: 'le prix du compte s’applique', hot: true },
        { big: 'une demande lisible', l1: 'références, quantités, compte client', l2: 'rien à redemander au téléphone' },
      ],
      line1: 'Un catalogue sans demande de devis reste une vitrine : le client regarde, puis appelle pour dicter sa liste.',
      line2: 'Avec la liste, la même visite produit une demande que le commercial transforme en devis sans rien ressaisir.',
      note: 'Exemple construit · références, produits et numéros fictifs.',
    },
  },
  en: {
    versions: {
      title: 'The same catalogue, six months later',
      alt: 'Two panels. On the left, the PDF catalogue sent by message: forty customers, each with the number of the version they still hold. Six versions came out in six months; nine customers have the current version, thirty-one read a price or an availability that no longer exists. On the right, the online catalogue, a single link: all forty customers see today’s price and availability.',
      header: 'Constructed example · forty customers, six versions of the PDF in six months · left who holds what, right a single link',
      left: 'The PDF sent by message', leftSub: 'the figure = the version the customer holds · 6 = current version',
      leftSum: '9 customers out of 40 have the current version; 31 read an outdated catalogue',
      right: 'The online catalogue, a single link', rightSub: 'a price changes: one edit, visible straight away',
      rightSum: '40 customers out of 40 see today’s price and availability',
      band: 'A PDF is a photograph: it is right on the day it is sent. Each change of price or stock creates one more version, and nobody knows who has which.',
      tiles: [
        { big: '6 versions in circulation', l1: 'one per change of price, stock or range', l2: 'plus those the sales reps have edited' },
        { big: '31 customers out of 40', l1: 'order on a price or a reference that has changed', l2: 'the correction is made on the phone', hot: true },
        { big: 'a single source', l1: 'the page, the generated PDF and the rep’s link read the same base', l2: 'you correct once' },
      ],
      line1: 'The problem is not the PDF format: it is that it exists in copies, and a copy cannot be corrected.',
      line2: 'An online catalogue can still produce a PDF; but it makes it on demand, from today’s base.',
      note: 'Constructed example · count at your place how many versions of your catalogue are in circulation.',
    },
    demande: {
      title: 'From the search to the quote request',
      alt: 'Three panels. One: the customer searches for “16 A circuit breaker”, filters by rating, number of poles and availability, and gets three product sheets. Two: they build their list with quantities, forty breakers, ten boards, six coils of cable, then press “request a quote”. Three: the sales rep receives a written request, with the customer account, the references and the quantities, the account’s price already applied, instead of a voice message and three photos.',
      header: 'Constructed example · an electrical wholesaler · the customer searches, builds a list, the sales rep receives a written request',
      panels: ['The customer searches', 'They build their list', 'The sales rep receives'],
      query: '16 A circuit breaker',
      chips: ['rating 16 A', 'two-pole', 'in stock'],
      results: [['16 A two-pole circuit breaker', 'ref. 40216 · in stock'], ['16 A two-pole breaker, residual-current', 'ref. 40616 · in stock'], ['16 A two-pole breaker, modular', 'ref. 40218 · on order']],
      list: [['16 A two-pole circuit breaker', 'ref. 40216', '× 40'], ['12-module board', 'ref. 71012', '× 10'], ['2.5 mm² cable, 100 m coil', 'ref. 52025', '× 6']],
      button: 'Request a quote',
      reqTitle: 'Request 0318 · customer account 1042',
      reqLines: [['40216', '× 40'], ['71012', '× 10'], ['52025', '× 6']],
      applied: ['the account’s price already applied', 'reply: a quote in PDF, to validate'],
      instead: ['instead of a voice message,', 'three photos and a call back'],
      band: 'The catalogue does not sell in place of the sales rep: it brings them a request already written, with references and quantities.',
      tiles: [
        { big: 'search + filters', l1: 'in the customer’s words, in French and in Arabic', l2: 'searches with no result are recorded' },
        { big: 'a list, not a basket', l1: 'no online payment: a quote request', l2: 'the account’s price applies', hot: true },
        { big: 'a readable request', l1: 'references, quantities, customer account', l2: 'nothing to ask again on the phone' },
      ],
      line1: 'A catalogue without a quote request stays a shop window: the customer looks, then calls to dictate a list.',
      line2: 'With the list, the same visit produces a request the sales rep turns into a quote without retyping anything.',
      note: 'Constructed example · fictitious references, products and numbers.',
    },
  },
  ar: {
    versions: {
      title: 'الفهرس نفسه، بعد ستة أشهر',
      alt: 'لوحتان. على جهة، الفهرس بصيغة PDF المرسَل برسالة: أربعون زبوناً، ولكل واحد رقم النسخة التي ما زالت عنده. صدرت ست نسخ في ستة أشهر؛ تسعة زبائن عندهم النسخة الحالية، وواحد وثلاثون يقرؤون سعراً أو توفراً لم يعد موجوداً. وعلى الجهة الأخرى، الفهرس على الخط، برابط واحد: الزبائن الأربعون يرون سعر اليوم وتوفر اليوم.',
      header: 'مثال مركَّب · أربعون زبوناً، وست نسخ من الملف في ستة أشهر · من عنده ماذا، ثم رابط واحد',
      left: 'الملف المرسَل برسالة', leftSub: 'الرقم = النسخة التي عند الزبون · 6 = النسخة الحالية',
      leftSum: '9 زبائن من 40 عندهم النسخة الحالية؛ و31 يقرؤون فهرساً منتهياً',
      right: 'الفهرس على الخط، برابط واحد', rightSub: 'يتغيّر سعر: تعديل واحد، يظهر حالاً',
      rightSum: '40 زبوناً من 40 يرون سعر اليوم وتوفر اليوم',
      band: 'الملف صورة: صحيح يوم إرساله. وكل تغيير في سعر أو مخزون يصنع نسخة أخرى، ولا أحد يعرف من عنده أي واحدة.',
      tiles: [
        { big: '6 نسخ متداولة', l1: 'واحدة عند كل تغيير في سعر، مخزون، أو تشكيلة', l2: 'زائد التي عدّلها المندوبون' },
        { big: '31 زبوناً من 40', l1: 'يطلبون على سعر أو مرجع تغيّر', l2: 'والتصحيح يتم في الهاتف', hot: true },
        { big: 'مصدر واحد', l1: 'الصفحة، الملف المولَّد، ورابط المندوب تقرأ القاعدة نفسها', l2: 'يُصحَّح مرة واحدة' },
      ],
      line1: 'المشكل ليس في صيغة الملف: بل في أنه موجود في نُسخ، والنسخة لا تُصحَّح.',
      line2: 'والفهرس على الخط يستطيع دائماً إخراج ملف؛ لكنه يصنعه عند الطلب، من قاعدة اليوم.',
      note: 'مثال مركَّب · عدّوا عندكم كم نسخة من فهرسكم تتداول.',
    },
    demande: {
      title: 'من البحث إلى طلب عرض السعر',
      alt: 'ثلاث لوحات. الأولى: الزبون يبحث عن «قاطع 16 أمبير»، يفرز حسب العيار وعدد الأقطاب والتوفر، ويحصل على ثلاث بطاقات. الثانية: يكوّن قائمته بالكميات، أربعون قاطعاً، عشر لوحات، وست لفّات كابل، ثم يضغط «طلب عرض سعر». الثالثة: المندوب يستلم طلباً مكتوباً، بحساب الزبون والمراجع والكميات، وسعر الحساب مطبَّق أصلاً، بدل رسالة صوتية وثلاث صور.',
      header: 'مثال مركَّب · تاجر جملة للعتاد الكهربائي · الزبون يبحث، يكوّن قائمته، والمندوب يستلم طلباً مكتوباً',
      panels: ['الزبون يبحث', 'يكوّن قائمته', 'المندوب يستلم'],
      query: 'قاطع 16 أمبير',
      chips: ['عيار 16 أمبير', 'ثنائي القطب', 'متوفر'],
      results: [['قاطع 16 أمبير ثنائي القطب', 'مرجع 40216 · متوفر'], ['قاطع 16 أمبير ثنائي القطب، تفاضلي', 'مرجع 40616 · متوفر'], ['قاطع 16 أمبير ثنائي القطب، معياري', 'مرجع 40218 · عند الطلب']],
      list: [['قاطع 16 أمبير ثنائي القطب', 'مرجع 40216', '× 40'], ['لوحة 12 وحدة', 'مرجع 71012', '× 10'], ['كابل 2,5 مم²، لفّة 100 متر', 'مرجع 52025', '× 6']],
      button: 'طلب عرض سعر',
      reqTitle: 'طلب 0318 · حساب الزبون 1042',
      reqLines: [['40216', '× 40'], ['71012', '× 10'], ['52025', '× 6']],
      applied: ['سعر حساب الزبون مطبَّق أصلاً', 'الجواب: عرض سعر بصيغة ملف، للمصادقة'],
      instead: ['بدل رسالة صوتية،', 'ثلاث صور، ومكالمة للتوضيح'],
      band: 'الفهرس لا يبيع مكان المندوب: يأتيه بطلب مكتوب أصلاً، بالمراجع والكميات.',
      tiles: [
        { big: 'بحث + فرز', l1: 'بكلمات الزبون، بالفرنسية والعربية', l2: 'والبحث دون نتيجة يُسجَّل' },
        { big: 'قائمة، لا سلّة', l1: 'لا دفع على الخط: طلب عرض سعر', l2: 'وسعر الحساب يُطبَّق', hot: true },
        { big: 'طلب مقروء', l1: 'المراجع، الكميات، وحساب الزبون', l2: 'لا شيء يُسأل عنه من جديد في الهاتف' },
      ],
      line1: 'فهرس دون طلب عرض سعر يبقى واجهة: الزبون ينظر، ثم يتصل ليُملي قائمته.',
      line2: 'وبالقائمة، الزيارة نفسها تنتج طلباً يحوّله المندوب إلى عرض سعر دون إعادة إدخال شيء.',
      note: 'مثال مركَّب · المراجع والمنتوجات والأرقام خيالية.',
    },
  },
};
