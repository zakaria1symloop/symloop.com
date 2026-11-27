// Bespoke animated figures for the 2027 Arabic-and-French application post.
//  mirror(): the same order screen drawn twice, left-to-right in French and
//            right-to-left in Arabic; elements appear pair by pair with a tag
//            saying whether they are mirrored (back arrow, list alignment,
//            progress bar) or not (digits, clock, phone number, logo).
//  chain():  one sentence from translation key to phone: key → three language
//            files → plural rule and variables → number and date formatting →
//            bidi isolation of inserted values → rendered strings; stages
//            appear in sequence with the string transforming.
// CSS-only animation (prefers-reduced-motion disables it); base attributes are
// the finished state for the JPG rasteriser.
import { W, C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }

// A phone frame with absolute coordinates; `dir` is 'ltr' or 'rtl' and decides
// where "start" is inside the frame. Figures are always drawn in the page's own
// direction (ctx handles the page), so inside a frame we compute explicitly.
function phone(c, s, css, P, fx, fy, fw, fh, dir, t, idp) {
  const start = (x, w = 0) => (dir === 'ltr' ? fx + x : fx + fw - x - w);
  const anchorStart = 'start'; // direction="rtl" already flips start/end in SVG
  const anchorEnd = 'end';
  const tdir = dir;
  const tx = (x, y, str, o = {}) => `<text x="${c.X(x)}" y="${y}" style="font-family:${o.font === 'mono' ? "var(--font-jetbrains-mono), Consolas, monospace" : o.font === 'serif' ? "var(--font-instrument-serif), Georgia, serif" : "var(--font-ibm-plex-arabic), 'Segoe UI', Arial, sans-serif"};font-size:${o.size || 12}px;font-weight:300" fill="${o.fill || C.fg}" text-anchor="${o.anchor || 'start'}" direction="${tdir}">${str}</text>`;
  s += rect(c, fx, fy, fw, fh, { stroke: C.line2, r: 18 });
  // header
  s += line(c, fx + 1, fy + 64, fx + fw - 1, fy + 64, { stroke: C.line });
  // back arrow (mirrored)
  const ax = start(22, 12);
  s += `<g style="animation:${show(css, P, `${idp}a`, 6)}">`
    + `<path d="M ${c.X(dir === 'ltr' ? ax + 12 : ax)} ${fy + 36} L ${c.X(dir === 'ltr' ? ax : ax + 12)} ${fy + 42} L ${c.X(dir === 'ltr' ? ax + 12 : ax)} ${fy + 48}" fill="none" stroke="${C.fg}" stroke-width="1.6"/>`
    + tx(start(44), fy + 46, t.title, { size: 14, anchor: anchorStart })
    + '</g>';
  // clock icon (not mirrored) at the end of header
  const cx = start(fw - 24, 0) ; const ccx = dir === 'ltr' ? fx + fw - 24 : fx + 24;
  s += `<g style="animation:${show(css, P, `${idp}c`, 16)}">` + circle(c, ccx, fy + 42, 8, { fill: 'none', stroke: C.fg55 }) + line(c, ccx, fy + 42, ccx, fy + 37, { stroke: C.fg55 }) + line(c, ccx, fy + 42, ccx + 4, fy + 44, { stroke: C.fg55 }) + '</g>';
  // rows: label at start, amount at end
  t.rows.forEach((r, i) => {
    const y = fy + 100 + i * 52;
    s += `<g style="animation:${show(css, P, `${idp}r${i}`, 26 + i * 6)}">`
      + line(c, fx + 16, y + 30, fx + fw - 16, y + 30, { stroke: C.line })
      + tx(start(16), y + 6, r.label, { size: 12, anchor: anchorStart })
      + tx(start(16), y + 22, r.sub, { size: 10, font: 'mono', fill: C.fg55, anchor: anchorStart })
      + tx(start(fw - 16), y + 12, r.amount, { size: 12.5, font: 'mono', anchor: anchorEnd })
      + '</g>';
  });
  // progress bar (mirrored fill)
  const py = fy + 100 + t.rows.length * 52 + 14;
  const pw = fw - 32; const fillW = pw * 0.6;
  s += `<g style="animation:${show(css, P, `${idp}p`, 48)}">`
    + rect(c, fx + 16, py, pw, 8, { stroke: C.line, fill: 'none', r: 4 })
    + rect(c, dir === 'ltr' ? fx + 16 : fx + fw - 16 - fillW, py, fillW, 8, { fill: C.accent, stroke: 'none', r: 4 })
    + tx(start(16), py + 26, t.progress, { size: 10.5, font: 'mono', fill: C.fg55, anchor: anchorStart })
    + '</g>';
  // phone number (isolated, not mirrored) and date
  const ny = py + 56;
  s += `<g style="animation:${show(css, P, `${idp}n`, 60)}">`
    + tx(start(16), ny, t.phoneLabel, { size: 10.5, font: 'mono', fill: C.fg55, anchor: anchorStart })
    + `<text x="${c.X(start(16))}" y="${ny + 18}" style="font-family:var(--font-jetbrains-mono), Consolas, monospace;font-size:12.5px" fill="${C.fg}" text-anchor="${anchorStart}" direction="${tdir}">⁦${t.phone}⁩</text>`
    + tx(start(fw - 16), ny + 18, t.date, { size: 11.5, font: 'mono', fill: C.fg70, anchor: anchorEnd })
    + '</g>';
  // button (full width, text centred)
  const by = fy + fh - 56;
  s += `<g style="animation:${show(css, P, `${idp}b`, 70)}">` + rect(c, fx + 16, by, fw - 32, 36, { fill: C.fg, stroke: 'none', r: 8 }) + tx(fx + fw / 2, by + 23, t.button, { size: 12.5, fill: C.bg, anchor: 'middle' }) + '</g>';
  return s;
}

export function mirror(t, rtl) {
  const c = ctx(rtl); const ca = ctx(false); const P = 'bm'; const css = []; const H = 600;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  // the two frames keep absolute positions whatever the page direction: each has its own explicit direction
  const fw = 300; const fh = 440; const fy = 100;
  const lx = 120; const rx = 780;
  s += text(ca, lx + fw / 2, 92, t.leftLabel, { size: 11, font: 'mono', fill: C.fg35, letter: 2, upper: true, anchor: 'middle' });
  s += text(ca, rx + fw / 2, 92, t.rightLabel, { size: 11, font: 'mono', fill: C.fg35, letter: 2, upper: true, anchor: 'middle' });
  s = phone(ca, s, css, P, lx, fy, fw, fh, 'ltr', t.fr, 'L');
  s = phone(ca, s, css, P, rx, fy, fw, fh, 'rtl', t.ar, 'R');
  // middle tags: mirrored / not mirrored, aligned with elements
  const mx = 600; const tags = t.tags;
  tags.forEach((tg, i) => {
    const at = [6, 16, 26, 48, 60, 70][i] + 2;
    const flip = tg.kind === 'flip';
    s += `<g style="animation:${show(css, P, `t${i}`, at)}">`
      + rect(ca, mx - 80, fy + tg.y - 12, 160, 24, { stroke: flip ? C.accent : C.line2, fill: flip ? 'rgba(242,181,68,0.08)' : C.fill, r: 12 })
      + text(c, mx, fy + tg.y + 4, tg.label, { size: 10.5, font: 'mono', fill: flip ? C.accent : C.fg70, anchor: 'middle' })
      + '</g>';
  });
  s += `<g style="animation:${show(css, P, 'rule', 86)}">` + text(c, 80, 572, t.rule, { size: 13, fill: C.fg }) + '</g>';
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

export function chain(t, rtl) {
  const c = ctx(rtl); const P = 'bc'; const css = []; const H = 600;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  const top = 96; const rowH = 78;
  t.stages.forEach((st, i) => {
    const y = top + i * rowH; const at = 6 + i * 13;
    s += `<g style="animation:${show(css, P, `s${i}`, at)}">`
      + circle(c, 96, y + 18, 11, { fill: st.accent ? C.accent : C.bg, stroke: st.accent ? C.accent : C.fg55, sw: 1 })
      + text(c, 96, y + 22, String(i + 1), { size: 11, font: 'mono', fill: st.accent ? C.bg : C.fg, anchor: 'middle' })
      + text(c, 124, y + 14, st.name, { size: 13.5, fill: st.accent ? C.accent : C.fg })
      + text(c, 124, y + 31, st.sub, { size: 10.5, font: 'mono', fill: C.fg55 })
      + rect(c, 560, y - 4, 560, 60, { stroke: st.accent ? C.accent : C.line2, fill: st.accent ? 'rgba(242,181,68,0.06)' : C.fill })
      + st.lines.map((l, k) => `<text x="${(l.dir || c.dir) === 'rtl' ? (c.rtl ? 624 : 1104) : (c.rtl ? 96 : 576)}" y="${y + 18 + k * 18}" style="font-family:${l.mono ? "var(--font-jetbrains-mono), Consolas, monospace" : "var(--font-ibm-plex-arabic), 'Segoe UI', Arial, sans-serif"};font-size:${l.mono ? 11 : 12}px;font-weight:300" fill="${l.dim ? C.fg55 : C.fg}" text-anchor="start" direction="${l.dir || c.dir}">${l.text}</text>`).join('')
      + (i < t.stages.length - 1 ? line(c, 96, y + 30, 96, y + rowH + 6, { stroke: C.line2 }) : '')
      + '</g>';
  });
  s += `<g style="animation:${show(css, P, 'rule', 90)}">` + text(c, 80, 572, t.rule, { size: 13, fill: C.fg }) + '</g>';
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

const I = (x) => `⁦${x}⁩`;

const FR_SCREEN = { title: 'Commande 2027-0418', rows: [
  { label: 'Huile de table 5 L', sub: '12 × 980,00 DA', amount: '11 760,00 DA' },
  { label: 'Semoule fine 25 kg', sub: '4 × 2 450,00 DA', amount: '9 800,00 DA' },
  { label: 'Livraison', sub: 'Sétif · demain 9 h–12 h', amount: '600,00 DA' },
], progress: 'Préparée · 2 étapes sur 3', phoneLabel: 'Client', phone: '+213 661 23 45 67', date: '10/11/2026', button: 'Confirmer la commande' };
const AR_SCREEN = { title: 'الطلبية ⁦2027-0418⁩', rows: [
  { label: 'زيت المائدة 5 ل', sub: '12 × 980,00 دج', amount: '11.760,00 دج' },
  { label: 'سميد رقيق 25 كغ', sub: '4 × 2.450,00 دج', amount: '9.800,00 دج' },
  { label: 'التوصيل', sub: 'سطيف · غداً 9–12', amount: '600,00 دج' },
], progress: 'محضَّرة · خطوتان من 3', phoneLabel: 'الزبون', phone: '+213 661 23 45 67', date: '10/11/2026', button: 'تأكيد الطلبية' };

export const STRINGS = {
  fr: {
    mirror: {
      title: 'Le même écran en français et en arabe : ce qui se retourne, et ce qui ne se retourne pas',
      alt: 'Deux téléphones côte à côte affichent la même commande. À gauche en français, de gauche à droite ; à droite en arabe, de droite à gauche. La flèche de retour est retournée, les libellés de la liste changent de côté, la barre de progression se remplit depuis la droite ; l’horloge, les chiffres, le numéro de téléphone +213 661 23 45 67 et la date ne sont pas retournés. Les montants arabes s’écrivent avec les mêmes chiffres qu’en français, avec un point pour les milliers et une virgule pour les décimales.',
      leftLabel: 'Français · gauche → droite', rightLabel: 'Arabe · droite → gauche',
      fr: FR_SCREEN, ar: AR_SCREEN,
      tags: [
        { y: 42, label: 'flèche retournée', kind: 'flip' },
        { y: 70, label: 'horloge : non', kind: 'keep' },
        { y: 118, label: 'libellés : côté « début »', kind: 'flip' },
        { y: 284, label: 'barre : depuis la droite', kind: 'flip' },
        { y: 334, label: 'téléphone : isolé, non', kind: 'keep' },
        { y: 404, label: 'chiffres : les mêmes', kind: 'keep' },
      ],
      rule: 'Règle : la mise en page parle en « début » et « fin », jamais en gauche et droite ; les chiffres, les horloges et les numéros ne se retournent pas, et ce qui est inséré dans une phrase est isolé.',
    },
    chain: {
      title: 'Une phrase, de la clé de traduction au téléphone du client',
      alt: 'Six étapes. La clé order.delivered avec ses variables count, name et date. Trois fichiers de langue : français, arabe, et darija pour les messages WhatsApp. La règle de pluriel : le français a deux formes, l’arabe en a six, zéro, un, deux, peu, beaucoup, autre. Le formatage : chiffres occidentaux et virgule décimale dans la locale arabe d’Algérie, date au format local. L’isolation bidirectionnelle des valeurs insérées, nom et numéro. Les trois phrases rendues : « 3 colis livrés à Karim Benali le 10/11/2026 » en français, la même en arabe avec la forme « peu » du pluriel, et « 3 colis wslou l Karim » en darija.',
      stages: [
        { name: 'La clé', sub: 'une phrase = une clé, jamais une concaténation', lines: [{ text: 'order.delivered', mono: true, dir: 'ltr' }, { text: '{count} · {name} · {date}', mono: true, dim: true, dir: 'ltr' }] },
        { name: 'Trois fichiers de langue', sub: 'fr · ar · darija pour les messages', lines: [{ text: 'fr: "{count, plural, one {# colis livré} other {# colis livrés}} à {name}"', mono: true, dir: 'ltr' }, { text: 'ar: "{count, plural, zero {…} one {…} two {…} few {…} many {…} other {…}}"', mono: true, dim: true, dir: 'ltr' }] },
        { name: 'La règle de pluriel', sub: 'le français a 2 formes, l’arabe en a 6', accent: true, lines: [{ text: 'count = 3 → fr : other · ar : few (3 à 10)', mono: true, dir: 'ltr' }, { text: 'count = 2 → fr : other · ar : two (duel)', mono: true, dim: true, dir: 'ltr' }] },
        { name: 'Le formatage', sub: 'chiffres, date, monnaie selon la locale', lines: [{ text: 'ar-DZ : chiffres 0-9, virgule décimale, point des milliers · 11.760,00 دج', mono: true, dir: 'ltr' }, { text: 'date : 10/11/2026 dans les deux langues · jamais « 11/10 »', mono: true, dim: true, dir: 'ltr' }] },
        { name: 'L’isolation des valeurs', sub: '{name} et {phone} enveloppés en isolats bidi', lines: [{ text: '⁦Karim Benali⁩ · ⁦+213 661 23 45 67⁩', mono: true, dir: 'ltr' }, { text: 'sinon le + et les chiffres sautent de côté dans une phrase arabe', mono: true, dim: true, dir: 'ltr' }] },
        { name: 'Les phrases rendues', sub: 'ce que lisent le gérant, l’employé, le client', lines: [{ text: '3 colis livrés à Karim Benali le 10/11/2026', dir: 'ltr' }, { text: '3 طرود سُلّمت إلى ⁦Karim Benali⁩ في ⁦10/11/2026⁩ · darija : 3 colis wslou l Karim', dir: 'rtl' }] },
      ],
      rule: 'Règle : une phrase est une clé avec des variables, traduite trois fois, pluralisée par la langue, formatée par la locale, et isolée là où une valeur entre ; aucune de ces cinq étapes ne se fait « à la main » dans le code.',
    },
  },
  en: {
    mirror: {
      title: 'The same screen in French and Arabic: what mirrors, and what does not',
      alt: 'Two phones side by side show the same order. On the left in French, left to right; on the right in Arabic, right to left. The back arrow is mirrored, list labels switch sides, the progress bar fills from the right; the clock, the digits, the phone number +213 661 23 45 67 and the date are not mirrored. Arabic amounts use the same digits as French, with a dot for thousands and a comma for decimals.',
      leftLabel: 'French · left → right', rightLabel: 'Arabic · right → left',
      fr: FR_SCREEN, ar: AR_SCREEN,
      tags: [
        { y: 42, label: 'arrow mirrored', kind: 'flip' },
        { y: 70, label: 'clock: no', kind: 'keep' },
        { y: 118, label: 'labels: “start” side', kind: 'flip' },
        { y: 284, label: 'bar: from the right', kind: 'flip' },
        { y: 334, label: 'phone: isolated, no', kind: 'keep' },
        { y: 404, label: 'digits: the same', kind: 'keep' },
      ],
      rule: 'Rule: layout speaks in “start” and “end”, never left and right; digits, clocks and numbers do not mirror, and whatever is inserted into a sentence is isolated.',
    },
    chain: {
      title: 'One sentence, from translation key to the customer’s phone',
      alt: 'Six stages. The key order.delivered with its variables count, name and date. Three language files: French, Arabic, and darija for WhatsApp messages. The plural rule: French has two forms, Arabic has six, zero, one, two, few, many, other. Formatting: Western digits and comma decimal in the Algerian Arabic locale, date in local format. Bidi isolation of inserted values, name and number. The three rendered sentences: “3 parcels delivered to Karim Benali on 10/11/2026” in French, the same in Arabic with the “few” plural form, and “3 colis wslou l Karim” in darija.',
      stages: [
        { name: 'The key', sub: 'one sentence = one key, never a concatenation', lines: [{ text: 'order.delivered', mono: true, dir: 'ltr' }, { text: '{count} · {name} · {date}', mono: true, dim: true, dir: 'ltr' }] },
        { name: 'Three language files', sub: 'fr · ar · darija for messages', lines: [{ text: 'fr: "{count, plural, one {# colis livré} other {# colis livrés}} à {name}"', mono: true, dir: 'ltr' }, { text: 'ar: "{count, plural, zero {…} one {…} two {…} few {…} many {…} other {…}}"', mono: true, dim: true, dir: 'ltr' }] },
        { name: 'The plural rule', sub: 'French has 2 forms, Arabic has 6', accent: true, lines: [{ text: 'count = 3 → fr: other · ar: few (3 to 10)', mono: true, dir: 'ltr' }, { text: 'count = 2 → fr: other · ar: two (dual)', mono: true, dim: true, dir: 'ltr' }] },
        { name: 'Formatting', sub: 'digits, date, currency per locale', lines: [{ text: 'ar-DZ: digits 0-9, comma decimal, dot thousands · 11.760,00 دج', mono: true, dir: 'ltr' }, { text: 'date: 10/11/2026 in both languages · never “11/10”', mono: true, dim: true, dir: 'ltr' }] },
        { name: 'Isolating values', sub: '{name} and {phone} wrapped in bidi isolates', lines: [{ text: '⁦Karim Benali⁩ · ⁦+213 661 23 45 67⁩', mono: true, dir: 'ltr' }, { text: 'otherwise the + and digits jump sides inside an Arabic sentence', mono: true, dim: true, dir: 'ltr' }] },
        { name: 'Rendered sentences', sub: 'what the manager, the employee, the customer read', lines: [{ text: '3 parcels delivered to Karim Benali on 10/11/2026', dir: 'ltr' }, { text: '3 طرود سُلّمت إلى ⁦Karim Benali⁩ في ⁦10/11/2026⁩ · darija: 3 colis wslou l Karim', dir: 'rtl' }] },
      ],
      rule: 'Rule: a sentence is a key with variables, translated three times, pluralised by the language, formatted by the locale, and isolated where a value enters; none of these five steps is done “by hand” in the code.',
    },
  },
  ar: {
    mirror: {
      title: 'الشاشة نفسها بالفرنسية والعربية: ما ينعكس، وما لا ينعكس',
      alt: 'هاتفان متجاوران يعرضان الطلبية نفسها. على اليسار بالفرنسية من اليسار إلى اليمين؛ وعلى اليمين بالعربية من اليمين إلى اليسار. سهم الرجوع منعكس، وتسميات القائمة تبدّل الجهة، وشريط التقدم يمتلئ من اليمين؛ أما الساعة والأرقام ورقم الهاتف +213 661 23 45 67 والتاريخ فلا تنعكس. والمبالغ العربية تُكتب بالأرقام نفسها كما في الفرنسية، بنقطة للآلاف وفاصلة للعشرية.',
      leftLabel: `الفرنسية · يسار ${I('→')} يمين`, rightLabel: `العربية · يمين ${I('→')} يسار`,
      fr: FR_SCREEN, ar: AR_SCREEN,
      tags: [
        { y: 42, label: 'السهم منعكس', kind: 'flip' },
        { y: 70, label: 'الساعة: لا', kind: 'keep' },
        { y: 118, label: 'التسميات: جهة «البداية»', kind: 'flip' },
        { y: 284, label: 'الشريط: من اليمين', kind: 'flip' },
        { y: 334, label: 'الهاتف: معزول، لا', kind: 'keep' },
        { y: 404, label: 'الأرقام: نفسها', kind: 'keep' },
      ],
      rule: 'القاعدة: التخطيط يتكلم بـ «البداية» و«النهاية» لا باليسار واليمين أبداً؛ والأرقام والساعات والأعداد لا تنعكس، وما يُدرج في جملة يُعزل.',
    },
    chain: {
      title: 'جملة واحدة، من مفتاح الترجمة إلى هاتف الزبون',
      alt: 'ست مراحل. المفتاح order.delivered بمتغيراته count وname وdate. ثلاثة ملفات لغة: الفرنسية، العربية، والدارجة لرسائل WhatsApp. قاعدة الجمع: للفرنسية صيغتان وللعربية ست، صفر وواحد واثنان وقليل وكثير وغير ذلك. التنسيق: أرقام غربية وفاصلة عشرية في لغة الجزائر العربية، تاريخ بالصيغة المحلية. العزل ثنائي الاتجاه للقيم المدرجة، الاسم والرقم. الجمل الثلاث المعروضة: «3 طرود سُلّمت إلى كريم بن علي في 10/11/2026» بالفرنسية، ونفسها بالعربية بصيغة «قليل»، و«3 colis wslou l Karim» بالدارجة.',
      stages: [
        { name: 'المفتاح', sub: 'جملة واحدة = مفتاح واحد، لا تسلسل أبداً', lines: [{ text: 'order.delivered', mono: true, dir: 'ltr' }, { text: '{count} · {name} · {date}', mono: true, dim: true, dir: 'ltr' }] },
        { name: 'ثلاثة ملفات لغة', sub: `${I('fr · ar')} · دارجة للرسائل`, lines: [{ text: 'fr: "{count, plural, one {# colis livré} other {# colis livrés}} à {name}"', mono: true, dir: 'ltr' }, { text: 'ar: "{count, plural, zero {…} one {…} two {…} few {…} many {…} other {…}}"', mono: true, dim: true, dir: 'ltr' }] },
        { name: 'قاعدة الجمع', sub: 'للفرنسية صيغتان، وللعربية ست', accent: true, lines: [{ text: 'count = 3 → fr : other · ar : few (3 إلى 10)', mono: true, dir: 'ltr' }, { text: 'count = 2 → fr : other · ar : two (المثنى)', mono: true, dim: true, dir: 'ltr' }] },
        { name: 'التنسيق', sub: 'الأرقام والتاريخ والعملة حسب اللغة المحلية', lines: [{ text: 'ar-DZ : أرقام 0-9، فاصلة عشرية، نقطة آلاف · 11.760,00 دج', mono: true, dir: 'ltr' }, { text: 'التاريخ : 10/11/2026 في اللغتين · لا «11/10» أبداً', mono: true, dim: true, dir: 'rtl' }] },
        { name: 'عزل القيم', sub: `${I('{name}')} و${I('{phone}')} ملفوفان في عوازل ثنائية الاتجاه`, lines: [{ text: '⁦Karim Benali⁩ · ⁦+213 661 23 45 67⁩', mono: true, dir: 'ltr' }, { text: 'وإلا قفز الـ + والأرقام إلى الجهة الأخرى داخل جملة عربية', mono: true, dim: true, dir: 'rtl' }] },
        { name: 'الجمل المعروضة', sub: 'ما يقرؤه المسيّر والموظف والزبون', lines: [{ text: '3 colis livrés à Karim Benali le 10/11/2026', dir: 'ltr' }, { text: '3 طرود سُلّمت إلى ⁦Karim Benali⁩ في ⁦10/11/2026⁩ · الدارجة : 3 colis wslou l Karim', dir: 'rtl' }] },
      ],
      rule: 'القاعدة: الجملة مفتاح بمتغيرات، تُترجم ثلاث مرات، تُجمع حسب اللغة، تُنسَّق حسب اللغة المحلية، وتُعزل حيث تدخل قيمة؛ ولا واحدة من هذه الخطوات الخمس تُفعل «يدوياً» في الكود.',
    },
  },
};
