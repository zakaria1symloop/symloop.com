// Bespoke animated figures for the 2027 "comment créer un annuaire en ligne" page.
//  roue(): a twelve-sector wheel. Each month one twelfth of the 1 540 entries (128) is re-verified;
//          a sector shows the share of entries still correct k months after their verification
//          (0.98^k: 100 % down to 80 %), about 90 % on average. Beside it, what happens with no
//          re-verification (78 %, 62 %, 48 % correct after 12, 24, 36 months) and with a loop
//          every year (90 %) or every six months (95 %). The 2 % a month is the example's
//          assumption, and the figure says so.
//  page(): one entry read twice: as a person reads it (seven labelled fields and the date it was
//          verified) and as a machine reads it (the same seven as schema.org structured data).
// The wheel and the code block are drawn in absolute coordinates; everything else mirrors in RTL.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, W, ctx, text, rect, open, heading, esc } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function growX(css, P, id, at, dur, rtl) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'} center;animation:${P}-${id} ${LOOP}s linear infinite`; }
const TINT = 'rgba(242,181,68,0.06)';
const SOFT = 'rgba(242,181,68,0.30)';
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
const poly = (c, pts, color, sw, dash) => `<polyline points="${pts.map(([x, y]) => `${c.X(x)},${y}`).join(' ')}" fill="none" stroke="${color}" stroke-width="${sw || 1}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;

// share of entries still correct k months after verification, if 2 % change every month
const RATE = 0.98;
const AGE = [...Array(12)].map((_, k) => RATE ** k);
const NOLOOP = [12, 24, 36].map((m) => Math.round(RATE ** m * 100));              // 78, 62, 48
const LOOPS = [12, 6].map((n) => Math.round(AGE.slice(0, n).reduce((a, b) => a + b, 0) / n * 100));   // 90, 95

export function roue(t, rtl) {
  const c = ctx(rtl); const P = 'rx'; const css = []; const H = 686;
  const cx = c.X(250); const cy = 304; const R = 104; const r = 46;
  // logical x for an absolute x, and an anchor that makes text extend to one side whatever the direction
  const ax = (xa) => (rtl ? W - xa : xa);
  const side = (toRight) => (toRight ? (rtl ? 'end' : 'start') : (rtl ? 'start' : 'end'));
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + text(c, 96, 170, t.chartTitle, { size: 11, fill: C.fg, weight: 500 }) + '</g>';
  // the wheel, clockwise from the top, never mirrored
  const pt = (rad, deg) => [cx + rad * Math.cos(deg * Math.PI / 180), cy + rad * Math.sin(deg * Math.PI / 180)];
  AGE.forEach((v, k) => {
    const a0 = -90 + k * 30 + 1; const a1 = -90 + (k + 1) * 30 - 1;
    const [x0, y0] = pt(R, a0); const [x1, y1] = pt(R, a1); const [x2, y2] = pt(r, a1); const [x3, y3] = pt(r, a0);
    const op = (0.22 + 0.78 * (v - 0.8) / 0.2).toFixed(2);
    const [lx, ly] = pt(77, a0 + 14);
    s += `<g style="animation:${show(css, P, `s${k}`, 6 + k * 2)}"><path d="M${x0.toFixed(1)} ${y0.toFixed(1)}A${R} ${R} 0 0 1 ${x1.toFixed(1)} ${y1.toFixed(1)}L${x2.toFixed(1)} ${y2.toFixed(1)}A${r} ${r} 0 0 0 ${x3.toFixed(1)} ${y3.toFixed(1)}Z" fill="${C.accent}" fill-opacity="${op}" stroke="${k === 11 ? C.fg : 'none'}" stroke-width="1.5"${k === 11 ? ' stroke-dasharray="4 3"' : ''}/>` + ltrSpans(lx.toFixed(1), (ly + 3.5).toFixed(1), [[String(Math.round(v * 100)), k <= 6 ? DARK : C.fg, true]], 9.5, 'middle') + '</g>';
  });
  s += `<g style="animation:${show(css, P, 'wl', 30)}">` + text(c, ax(cx + 30), cy - R - 10, t.fresh, { size: 9.5, fill: C.accent, weight: 500, anchor: side(true) }) + text(c, ax(cx - 30), cy - R - 10, t.stale, { size: 9.5, fill: C.fg70, anchor: side(false) }) + '</g>';
  s += `<g style="animation:${show(css, P, 'wc', 32)}">` + ltrSpans(cx, cy + 2, [[t.center, C.accent, true]], 17, 'middle') + text(c, 250, cy + 18, t.centerSub, { size: 8.5, fill: C.fg70, anchor: 'middle' }) + text(c, 250, 434, t.wheelCap, { size: 10, fill: C.fg70, anchor: 'middle' }) + '</g>';
  // what the share becomes with no loop, and with one
  const bar = (y, pct, label, wrong, id, at, hot) => `<g style="animation:${show(css, P, `${id}t`, at)}">` + text(c, 440, y + 12, label, { size: 10, fill: C.fg }) + rect(c, 600, y, 360, 16, { stroke: C.line2, fill: 'none' }) + '</g>'
    + `<g style="${growX(css, P, id, at + 0.5, 2.5, rtl)}">` + rect(c, 600, y, pct * 3.6, 16, { stroke: 'none', fill: C.fg55 }) + '</g>'
    + `<g style="animation:${show(css, P, `${id}w`, at + 3)}">` + rect(c, 600 + pct * 3.6, y, (100 - pct) * 3.6, 16, { stroke: C.accent, fill: SOFT }) + text(c, 972, y + 12, wrong, { size: 10, fill: C.accent, weight: hot ? 500 : 300 }) + '</g>';
  s += `<g style="animation:${show(css, P, 'ta', 35)}">` + text(c, 440, 202, t.noLoop, { size: 10.5, fill: C.fg, weight: 500 }) + '</g>';
  NOLOOP.forEach((p, i) => { s += bar(214 + i * 28, p, t.rowsA[i], t.wrongA[i], `a${i}`, 36 + i * 4, i === 2); });
  s += `<g style="animation:${show(css, P, 'tb', 49)}">` + text(c, 440, 318, t.loop, { size: 10.5, fill: C.accent, weight: 500 }) + '</g>';
  LOOPS.forEach((p, i) => { s += bar(330 + i * 28, p, t.rowsB[i], t.wrongB[i], `b${i}`, 50 + i * 4, false); });
  s += `<g style="animation:${show(css, P, 'ft', 59)}">` + text(c, 440, 406, t.foot1, { size: 9.5, fill: C.fg70 }) + text(c, 440, 424, t.foot2, { size: 9.5, fill: C.fg55 }) + '</g>';
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bn', 63)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 67);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

const ROWY = (i) => 258 + i * 26;

export function page(t, rtl) {
  const c = ctx(rtl); const P = 'fy'; const css = []; const H = 686;
  // left edge, in absolute coordinates, of the code block (logical 580 to 1104)
  const codeX = (rtl ? W - 1104 : 580) + 16;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + text(c, 96, 170, t.chartTitle, { size: 11, fill: C.fg, weight: 500 }) + '</g>';
  // what a person reads
  s += `<g style="animation:${show(css, P, 'hc', 6)}">` + rect(c, 96, 184, 444, 258, { stroke: C.line2, fill: C.fill }) + text(c, 110, 204, t.human, { size: 9.5, font: 'mono', fill: C.fg55 }) + poly(c, [[108, 212], [528, 212]], C.line2) + text(c, 110, 233, t.verified, { size: 9.5, fill: C.accent, weight: 500 }) + '</g>';
  // what a machine reads
  s += `<g style="animation:${show(css, P, 'mc', 8)}">` + rect(c, 580, 184, 524, 258, { stroke: C.line2, fill: '#060606' }) + text(c, 594, 204, t.machine, { size: 9.5, font: 'mono', fill: C.fg55 }) + poly(c, [[592, 212], [1092, 212]], C.line2) + ltrSpans(codeX, 233, [['"@type"', C.accent, true], [': ', C.fg55, false], ['"Organization"', C.fg, false], [',', C.fg55, false]], 10, 'start') + '</g>';
  t.labels.forEach((label, i) => {
    const y = ROWY(i); const at = 12 + i * 5;
    s += `<g style="animation:${show(css, P, `l${i}`, at)}">` + text(c, 110, y, label, { size: 9, fill: C.fg55 }) + text(c, 200, y, t.values[i], { size: 10.5, fill: C.fg, weight: i === 0 ? 500 : 300 }) + '</g>';
    s += `<g style="animation:${show(css, P, `c${i}`, at + 1.5)}">` + poly(c, [[544, y - 4], [576, y - 4]], C.accent, 1, '2 3') + '</g>';
    s += `<g style="animation:${show(css, P, `m${i}`, at + 3)}">` + ltrSpans(codeX, y, [[`"${t.code[i][0]}"`, C.accent, true], [': ', C.fg55, false], [t.code[i][1], C.fg, false], [i < t.code.length - 1 ? ',' : '', C.fg55, false]], 10, 'start') + '</g>';
  });
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bn', 52)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 56);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    roue: {
      title: 'Un annuaire se périme : la roue de revérification',
      alt: 'Une roue de douze secteurs : chaque mois, un douzième des 1 540 fiches, soit 128, est revérifié. Selon l’ancienneté de la vérification, de 0 à 11 mois, la part de fiches encore justes va de 100 % à 80 %, soit 90 % en moyenne. À côté, sans revérification : 78 % de fiches justes après 12 mois, 62 % après 24 mois, 48 % après 36 mois. Avec une revérification tous les six mois : 95 %. Hypothèse de l’exemple : 2 % des fiches changent chaque mois.',
      header: 'Exemple construit · 1 540 fiches, 2 % de fiches qui changent chaque mois',
      chartTitle: 'Part de fiches encore justes, selon l’ancienneté de leur vérification',
      fresh: 'vérifiées ce mois-ci', stale: 'à revérifier', center: '90 %', centerSub: 'justes en moyenne',
      wheelCap: '1 540 fiches, 128 revérifiées chaque mois',
      noLoop: 'Sans revérification', rowsA: ['après 12 mois', 'après 24 mois', 'après 36 mois'], wrongA: ['22 % fausses', '38 % fausses', '52 % fausses'],
      loop: 'Avec la roue', rowsB: ['une fois par an', 'tous les six mois'], wrongB: ['10 % fausses', '5 % fausses'],
      foot1: 'Hypothèse de l’exemple : chaque mois, 2 % des fiches changent.',
      foot2: 'À mesurer chez vous : appeler cent fiches tirées au hasard.',
      band: 'Un annuaire ne meurt pas d’un coup : il perd deux fiches sur cent chaque mois, sans que personne le voie.',
      tiles: [
        { big: '52 % de fiches fausses', l1: 'après trois ans sans revérification', l2: '22 % après un an, 38 % après deux' },
        { big: '128 fiches par mois', l1: 'un douzième des 1 540, à tour de rôle', l2: '52 se confirment seules, par un message' },
        { big: '90 % de fiches justes', l1: 'en permanence, avec une revérification par an', l2: '95 % avec une revérification tous les six mois', hot: true },
      ],
      line1: 'Chaque fiche affiche la date de sa dernière vérification : c’est elle qui dit si l’on peut s’y fier.',
      line2: 'L’entreprise qui a revendiqué sa fiche la confirme d’un message ; les autres sont appelées par l’équipe.',
      note: 'Exemple construit · taux de changement, volumes et résultats fictifs.',
    },
    page: {
      title: 'Une fiche, lue deux fois : par une personne, par une machine',
      alt: 'À gauche, la fiche telle qu’une personne la lit : SARL Exemple Emballages, emballage carton, Sétif, téléphone, création en 2011, zone servie l’Est algérien, adresse de la page, et la mention fiche vérifiée le 12 novembre 2026 par l’entreprise. À droite, les mêmes informations telles qu’une machine les lit, en données structurées : type Organization, puis name, description, address, telephone, foundingDate, areaServed et url.',
      header: 'Exemple construit · la fiche d’une entreprise fictive',
      chartTitle: 'Les mêmes sept informations, affichées pour une personne et publiées pour une machine',
      human: 'Ce que lit une personne', machine: 'Ce que lit une machine',
      verified: 'Fiche vérifiée le 12 novembre 2026 · par l’entreprise',
      labels: ['Nom', 'Activité', 'Wilaya', 'Téléphone', 'Création', 'Zone servie', 'Page'],
      values: ['SARL Exemple Emballages', 'Emballage carton', 'Sétif', '+213 5xx xx xx xx', '2011', 'Est algérien', 'annuaire.example/entreprise/exemple-emballages'],
      code: [['name', '"SARL Exemple Emballages"'], ['description', '"Emballage carton"'], ['address', '{ "addressRegion": "Sétif", "addressCountry": "DZ" }'], ['telephone', '"+213 5xx xx xx xx"'], ['foundingDate', '"2011"'], ['areaServed', '"Est algérien"'], ['url', '"https://annuaire.example/entreprise/exemple-emballages"']],
      band: 'La fiche est écrite deux fois : une fois pour être lue, une fois pour être comprise par un moteur ou un assistant.',
      tiles: [
        { big: 'une page par entreprise', l1: 'sa propre adresse, dans le plan du site', l2: 'pas une ligne dans un PDF' },
        { big: '7 champs structurés', l1: 'nom, activité, lieu, téléphone, création, zone, page', l2: 'vocabulaire public schema.org', hot: true },
        { big: 'une date de vérification', l1: 'affichée sur chaque fiche', l2: 'avec qui a vérifié' },
      ],
      line1: 'Les données structurées sont un format standard pour décrire une page : les moteurs s’en servent pour en comprendre le contenu.',
      line2: 'Un PDF de trois cents pages est un seul document ; une page par fiche donne à chaque entreprise une adresse que l’on peut indexer et citer.',
      note: 'Exemple construit et simplifié · entreprise, coordonnées et adresse fictives.',
    },
  },
  en: {
    roue: {
      title: 'A directory goes stale: the re-verification wheel',
      alt: 'A wheel of twelve sectors: each month one twelfth of the 1,540 entries, that is 128, is re-verified. Depending on how old the verification is, from 0 to 11 months, the share of entries still correct goes from 100% to 80%, about 90% on average. Beside it, with no re-verification: 78% of entries correct after 12 months, 62% after 24 months, 48% after 36 months. With a re-verification every six months: 95%. Assumption of the example: 2% of entries change every month.',
      header: 'Constructed example · 1,540 entries, 2% of entries changing every month',
      chartTitle: 'Share of entries still correct, by age of their verification',
      fresh: 'verified this month', stale: 'due for re-verification', center: '90%', centerSub: 'correct on average',
      wheelCap: '1,540 entries, 128 re-verified every month',
      noLoop: 'With no re-verification', rowsA: ['after 12 months', 'after 24 months', 'after 36 months'], wrongA: ['22% wrong', '38% wrong', '52% wrong'],
      loop: 'With the wheel', rowsB: ['once a year', 'every six months'], wrongB: ['10% wrong', '5% wrong'],
      foot1: 'Assumption of the example: every month, 2% of entries change.',
      foot2: 'To measure at yours: call one hundred entries drawn at random.',
      band: 'A directory does not die all at once: it loses two entries in a hundred every month, and nobody sees it.',
      tiles: [
        { big: '52% of entries wrong', l1: 'after three years with no re-verification', l2: '22% after one year, 38% after two' },
        { big: '128 entries a month', l1: 'one twelfth of the 1,540, in turn', l2: '52 confirm by themselves, with one message' },
        { big: '90% of entries correct', l1: 'at all times, with one re-verification a year', l2: '95% with a re-verification every six months', hot: true },
      ],
      line1: 'Each entry shows the date of its last verification: that is what says whether it can be relied on.',
      line2: 'A company that has claimed its entry confirms it with one message; the others are called by the team.',
      note: 'Constructed example · fictitious change rate, volumes and results.',
    },
    page: {
      title: 'One entry, read twice: by a person, by a machine',
      alt: 'On the left, the entry as a person reads it: SARL Exemple Emballages, cardboard packaging, Sétif, phone, founded in 2011, area served Eastern Algeria, address of the page, and the mention entry verified on 12 November 2026 by the company. On the right, the same information as a machine reads it, as structured data: type Organization, then name, description, address, telephone, foundingDate, areaServed and url.',
      header: 'Constructed example · the entry of a fictitious company',
      chartTitle: 'The same seven items, displayed for a person and published for a machine',
      human: 'What a person reads', machine: 'What a machine reads',
      verified: 'Entry verified on 12 November 2026 · by the company',
      labels: ['Name', 'Activity', 'Wilaya', 'Phone', 'Founded', 'Area served', 'Page'],
      values: ['SARL Exemple Emballages', 'Cardboard packaging', 'Sétif', '+213 5xx xx xx xx', '2011', 'Eastern Algeria', 'annuaire.example/entreprise/exemple-emballages'],
      code: [['name', '"SARL Exemple Emballages"'], ['description', '"Cardboard packaging"'], ['address', '{ "addressRegion": "Sétif", "addressCountry": "DZ" }'], ['telephone', '"+213 5xx xx xx xx"'], ['foundingDate', '"2011"'], ['areaServed', '"Eastern Algeria"'], ['url', '"https://annuaire.example/entreprise/exemple-emballages"']],
      band: 'The entry is written twice: once to be read, once to be understood by a search engine or an assistant.',
      tiles: [
        { big: 'one page per company', l1: 'its own address, in the site map', l2: 'not a line in a PDF' },
        { big: '7 structured fields', l1: 'name, activity, place, phone, founding, area, page', l2: 'public schema.org vocabulary', hot: true },
        { big: 'a verification date', l1: 'displayed on each entry', l2: 'with who verified it' },
      ],
      line1: 'Structured data is a standard format for describing a page: search engines use it to understand its content.',
      line2: 'A three-hundred-page PDF is a single document; one page per entry gives each company an address that can be indexed and cited.',
      note: 'Constructed and simplified example · fictitious company, contact details and address.',
    },
  },
  ar: {
    roue: {
      title: 'الدليل يتقادم: عجلة إعادة التحقق',
      alt: 'عجلة من اثني عشر قطاعاً: كل شهر، يُعاد التحقق من جزء من اثني عشر من البطاقات الـ1540، أي 128. وحسب قِدم التحقق، من 0 إلى 11 شهراً، حصة البطاقات الصحيحة تذهب من 100 إلى 80 بالمئة، أي 90 بالمئة في المتوسط. وبجانبها، دون إعادة تحقق: 78 بالمئة صحيحة بعد 12 شهراً، 62 بعد 24 شهراً، و48 بعد 36 شهراً. ومع إعادة تحقق كل ستة أشهر: 95 بالمئة. فرضية المثال: 2 بالمئة من البطاقات تتغيّر كل شهر.',
      header: 'مثال مركَّب · ⁦1 540⁩ بطاقة، و2 بالمئة من البطاقات تتغيّر كل شهر',
      chartTitle: 'حصة البطاقات الصحيحة، حسب قِدم التحقق منها',
      fresh: 'تُحقِّق منها هذا الشهر', stale: 'تنتظر إعادة التحقق', center: '90 %', centerSub: 'صحيحة في المتوسط',
      wheelCap: '⁦1 540⁩ بطاقة، و128 يُعاد التحقق منها كل شهر',
      noLoop: 'دون إعادة تحقق', rowsA: ['بعد 12 شهراً', 'بعد 24 شهراً', 'بعد 36 شهراً'], wrongA: ['22 بالمئة خاطئة', '38 بالمئة خاطئة', '52 بالمئة خاطئة'],
      loop: 'مع العجلة', rowsB: ['مرة في السنة', 'كل ستة أشهر'], wrongB: ['10 بالمئة خاطئة', '5 بالمئة خاطئة'],
      foot1: 'فرضية المثال: كل شهر، 2 بالمئة من البطاقات تتغيّر.',
      foot2: 'للقياس عندكم: الاتصال بمئة بطاقة مسحوبة عشوائياً.',
      band: 'الدليل لا يموت دفعة واحدة: يفقد بطاقتين من مئة كل شهر، دون أن يراه أحد.',
      tiles: [
        { big: '52 بالمئة بطاقات خاطئة', l1: 'بعد ثلاث سنوات دون إعادة تحقق', l2: '22 بالمئة بعد سنة، و38 بعد سنتين' },
        { big: '128 بطاقة في الشهر', l1: 'جزء من اثني عشر من البطاقات، بالتناوب', l2: '52 تؤكَّد وحدها، برسالة' },
        { big: '90 بالمئة بطاقات صحيحة', l1: 'على الدوام، مع إعادة تحقق في السنة', l2: '95 بالمئة مع إعادة تحقق كل ستة أشهر', hot: true },
      ],
      line1: 'كل بطاقة تُظهر تاريخ آخر تحقق منها: هو الذي يقول إن كان يمكن الاعتماد عليها.',
      line2: 'المؤسسة التي طالبت ببطاقتها تؤكّدها برسالة؛ والأخرى يتصل بها الفريق.',
      note: 'مثال مركَّب · نسبة تغيّر وأحجام ونتائج خيالية.',
    },
    page: {
      title: 'بطاقة واحدة، مقروءة مرتين: من شخص، ومن آلة',
      alt: 'على اليمين، البطاقة كما يقرؤها شخص: شركة المثال للتغليف، تغليف بالكرتون، سطيف، الهاتف، التأسيس سنة 2011، منطقة الخدمة الشرق الجزائري، عنوان الصفحة، وعبارة بطاقة مُتحقَّق منها يوم 12 نوفمبر 2026 من المؤسسة. وعلى اليسار، المعلومات نفسها كما تقرؤها آلة، في بيانات منظَّمة: النوع Organization، ثم name و description و address و telephone و foundingDate و areaServed و url.',
      header: 'مثال مركَّب · بطاقة مؤسسة خيالية',
      chartTitle: 'المعلومات السبع نفسها، معروضة لشخص ومنشورة لآلة',
      human: 'ما يقرؤه شخص', machine: 'ما تقرؤه آلة',
      verified: 'بطاقة مُتحقَّق منها يوم 12 نوفمبر 2026 · من المؤسسة',
      labels: ['الاسم', 'النشاط', 'الولاية', 'الهاتف', 'التأسيس', 'منطقة الخدمة', 'الصفحة'],
      values: ['شركة المثال للتغليف', 'تغليف بالكرتون', 'سطيف', '⁦+213 5xx xx xx xx⁩', '2011', 'الشرق الجزائري', '⁦annuaire.example/entreprise/exemple-emballages⁩'],
      code: [['name', '"شركة المثال للتغليف"'], ['description', '"تغليف بالكرتون"'], ['address', '{ "addressRegion": "سطيف", "addressCountry": "DZ" }'], ['telephone', '"+213 5xx xx xx xx"'], ['foundingDate', '"2011"'], ['areaServed', '"الشرق الجزائري"'], ['url', '"https://annuaire.example/entreprise/exemple-emballages"']],
      band: 'البطاقة تُكتَب مرتين: مرة لتُقرأ، ومرة ليفهمها محرك بحث أو مساعد ذكي.',
      tiles: [
        { big: 'صفحة لكل مؤسسة', l1: 'بعنوانها الخاص، في خريطة الموقع', l2: 'لا سطراً في ملف' },
        { big: '7 حقول منظَّمة', l1: 'الاسم، النشاط، المكان، الهاتف، التأسيس، المنطقة، والصفحة', l2: 'بمفردات عمومية معروفة', hot: true },
        { big: 'تاريخ تحقق', l1: 'ظاهر في كل بطاقة', l2: 'مع من تحقق' },
      ],
      line1: 'البيانات المنظَّمة صيغة معيارية لوصف صفحة: محركات البحث تستعملها لفهم محتواها.',
      line2: 'ملف من ثلاثمئة صفحة وثيقة واحدة؛ وصفحة لكل بطاقة تعطي كل مؤسسة عنواناً يمكن فهرسته وذكره.',
      note: 'مثال مركَّب ومبسَّط · مؤسسة وعناوين خيالية.',
    },
  },
};
