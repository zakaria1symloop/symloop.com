// Bespoke animated figures for the 2027 "how do you prove the AI works" post.
//  board():   sixty real cases as sixty squares, replayed on three versions.
//             Rows fill left to right; version 3 scores lower than version 2
//             and two cases that used to pass now fail (regressions, ringed).
//  verdict(): one case graded three ways — exact field, every claim sourced,
//             form judged against a rubric — and failed for one unsourced claim.
// CSS-only animation (prefers-reduced-motion disables it); base attributes are
// the finished state for the JPG rasteriser.
import { W, C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 10;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }

const FAILS = [
  [3, 7, 11, 14, 19, 22, 27, 31, 36, 40, 45, 52, 57],
  [7, 19, 31, 45, 57],
  [7, 19, 24, 31, 45, 49, 57],
];
const REGRESS = [24, 49];

export function board(t, rtl) {
  const c = ctx(rtl); const P = 'eb'; const css = []; const H = 520;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  const x0 = 80; const sq = 12; const gap = 3; const stepX = sq + gap; const rowY = [136, 226, 316];
  // category brackets on top
  let acc = 0;
  t.cats.forEach((cat) => {
    const xa = x0 + acc * stepX; const xb = x0 + (acc + cat.n) * stepX - gap;
    s += line(c, xa, 108, xb, 108, { stroke: C.line2 });
    s += line(c, xa, 104, xa, 112, { stroke: C.line2 }); s += line(c, xb, 104, xb, 112, { stroke: C.line2 });
    s += text(c, (xa + xb) / 2, 98, cat.label, { size: 11, fill: C.fg55, anchor: 'middle' });
    acc += cat.n;
  });
  t.versions.forEach((v, vi) => {
    const y = rowY[vi];
    s += text(c, x0, y - 12, v.label, { size: 14, fill: C.fg });
    s += text(c, x0 + 60 * stepX - gap, y - 12, v.sub, { size: 11.5, fill: C.fg55, anchor: 'end' });
    // squares revealed in ten chunks of six (keeps the stylesheet small)
    for (let k = 0; k < 10; k += 1) {
      const at = 6 + vi * 26 + k * 1.8;
      let g = '';
      for (let i = k * 6; i < k * 6 + 6; i += 1) {
        const fail = FAILS[vi].includes(i); const reg = vi === 2 && REGRESS.includes(i);
        g += rect(c, x0 + i * stepX, y, sq, sq, { fill: fail ? (reg ? C.accent : 'rgba(255,255,255,0.14)') : 'rgba(255,255,255,0.82)', stroke: 'none' });
      }
      s += `<g style="animation:${show(css, P, `q${vi}_${k}`, at)}">${g}</g>`;
    }
    if (vi === 2) REGRESS.forEach((i) => { s += `<g style="animation:${show(css, P, `g${i}`, 82)}">` + rect(c, x0 + i * stepX - 4, y - 4, sq + 8, sq + 8, { stroke: C.accent, sw: 1.5 }) + '</g>'; });
    const at2 = 6 + vi * 26 + 20;
    s += `<g style="animation:${show(css, P, `s${vi}`, at2)}">` + text(c, 1120, y + 13, v.score, { size: 26, font: 'serif', fill: vi === 1 ? C.accent : C.fg, anchor: 'end' }) + '</g>';
    if (v.note) s += `<g style="animation:${show(css, P, `n${vi}`, vi === 2 ? 84 : at2 + 2)}">` + text(c, x0, y + sq + 22, v.note, { size: 12, fill: vi === 2 ? C.accent : C.fg55 }) + '</g>';
  });
  // legend + threshold
  const ly = 412;
  s += line(c, 80, ly - 14, 1120, ly - 14, { stroke: C.line });
  s += rect(c, 80, ly, 12, 12, { fill: 'rgba(255,255,255,0.82)', stroke: 'none' }); s += text(c, 100, ly + 11, t.legend[0], { size: 12, fill: C.fg55 });
  s += rect(c, 270, ly, 12, 12, { fill: 'rgba(255,255,255,0.14)', stroke: 'none' }); s += text(c, 290, ly + 11, t.legend[1], { size: 12, fill: C.fg55 });
  s += rect(c, 460, ly, 12, 12, { fill: C.accent, stroke: 'none' }); s += text(c, 480, ly + 11, t.legend[2], { size: 12, fill: C.fg55 });
  s += `<g style="animation:${show(css, P, 'thr', 90)}">` + text(c, 80, ly + 52, t.threshold, { size: 14, fill: C.fg }) + text(c, 80, ly + 74, t.threshold2, { size: 12, fill: C.fg55 }) + '</g>';
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

export function verdict(t, rtl) {
  const c = ctx(rtl); const P = 'ev'; const css = []; const H = 520;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  // ── the case
  const ax = 80; const ay = 100; const aw = 520; const ah = 400;
  s += rect(c, ax, ay, aw, ah, { stroke: C.line2 });
  s += text(c, ax + 18, ay + 28, t.caseLabel, { size: 11, font: 'mono', fill: C.fg35, letter: 2, upper: true });
  s += text(c, ax + 18, ay + 58, t.qLabel, { size: 11, font: 'mono', fill: C.fg35 });
  t.q.forEach((l, i) => { s += text(c, ax + 18, ay + 80 + i * 20, l, { size: 14, fill: C.fg }); });
  s += line(c, ax + 18, ay + 132, ax + aw - 18, ay + 132, { stroke: C.line });
  s += text(c, ax + 18, ay + 158, t.aLabel, { size: 11, font: 'mono', fill: C.fg35 });
  t.claims.forEach((cl, i) => {
    const y = ay + 176 + i * 70; const bad = !cl.ok; const at = 14 + i * 12;
    s += rect(c, ax + 18, y, aw - 36, 58, { stroke: bad ? C.accent : C.line, fill: bad ? 'rgba(242,181,68,0.06)' : 'none' });
    cl.text.forEach((l, k) => { s += text(c, ax + 32, y + 23 + k * 18, l, { size: 13, fill: C.fg }); });
    s += `<g style="animation:${show(css, P, `c${i}`, at)}">` + text(c, ax + aw - 32, y + 23, cl.tag, { size: 11.5, font: 'mono', fill: bad ? C.accent : C.fg55, anchor: 'end' }) + text(c, ax + aw - 32, y + 41, cl.src, { size: 11, fill: bad ? C.accent : C.fg35, anchor: 'end' }) + '</g>';
  });
  // ── the graders
  const gx = 660; const gy = 100; const gw = 460;
  s += text(c, gx, gy + 14, t.gradersLabel, { size: 11, font: 'mono', fill: C.fg35, letter: 2, upper: true });
  t.graders.forEach((g, i) => {
    const y = gy + 40 + i * 92; const at = 52 + i * 10; const bad = !g.ok;
    s += rect(c, gx, y, gw, 78, { stroke: bad ? C.accent : C.line2, fill: bad ? 'rgba(242,181,68,0.06)' : 'none' });
    s += text(c, gx + 56, y + 28, g.name, { size: 15, fill: C.fg });
    s += text(c, gx + 56, y + 48, g.how, { size: 11.5, fill: C.fg55 });
    s += text(c, gx + 56, y + 65, g.result, { size: 11.5, font: 'mono', fill: bad ? C.accent : C.fg70 });
    const kx = c.X(gx + 28); const ky = y + 34;
    s += `<g style="animation:${show(css, P, `k${i}`, at)}">` + circle(c, gx + 28, ky, 12, { fill: bad ? C.accent : C.fg, stroke: 'none' })
      + (bad ? `<path d="M ${kx - 4.5} ${ky - 4.5} L ${kx + 4.5} ${ky + 4.5} M ${kx + 4.5} ${ky - 4.5} L ${kx - 4.5} ${ky + 4.5}" stroke="${C.bg}" stroke-width="2.2" fill="none"/>` : `<path d="M ${kx - 5} ${ky} L ${kx - 1.5} ${ky + 3.5} L ${kx + 5} ${ky - 4}" stroke="${C.bg}" stroke-width="2.2" fill="none"/>`) + '</g>';
  });
  s += `<g style="animation:${show(css, P, 'vd', 86)}">` + text(c, gx, gy + 40 + 3 * 92 + 22, t.verdict, { size: 22, font: 'serif', fill: C.accent }) + text(c, gx, gy + 40 + 3 * 92 + 46, t.verdictSub, { size: 12, fill: C.fg55 }) + '</g>';
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

const I = (x) => `⁦${x}⁩`;

export const STRINGS = {
  fr: {
    board: {
      title: 'Soixante cas réels, rejoués sur trois versions',
      alt: 'Soixante carrés, un par cas réel, classés en cas courants, pièges, hors périmètre et tentatives de contournement, rejoués sur trois versions. La version 1 réussit 47 cas sur 60, la version 2 en réussit 55, la version 3 avec un modèle plus petit en réussit 53 et échoue sur deux cas qui passaient : deux régressions. Le seuil de livraison est de 54 sur 60 sans régression.',
      cats: [{ label: 'cas courants', n: 30 }, { label: 'pièges', n: 15 }, { label: 'hors périmètre', n: 9 }, { label: 'contournements', n: 6 }],
      versions: [
        { label: 'Version 1', sub: 'premières instructions', score: '47 / 60', note: 'treize échecs, dont un tiers dans les pièges : on sait où travailler' },
        { label: 'Version 2', sub: 'instructions corrigées, documents mieux découpés', score: '55 / 60', note: 'cinq échecs restants, tous connus et listés' },
        { label: 'Version 3', sub: 'même instructions, modèle plus petit', score: '53 / 60', note: 'deux cas qui passaient ne passent plus : la version n’est pas livrée telle quelle' },
      ],
      legend: ['cas réussi', 'cas échoué', 'régression : réussi avant, échoué maintenant'],
      threshold: 'Seuil de livraison écrit avec vous : 54 sur 60, et aucune régression.',
      threshold2: 'La version 2 est livrée. La version 3 coûte moins par requête, mais elle attend que ses deux régressions soient corrigées.',
    },
    verdict: {
      title: 'Un cas, trois façons de le noter, un verdict',
      alt: 'Le cas 37 : un client demande quand sa commande 1042 sera livrée et s’il peut la retourner. La réponse de l’IA contient trois affirmations : la date de livraison, sourcée dans la commande ; le créneau du matin, sourcé dans la tournée ; et un retour gratuit sous trente jours, qui n’est dans aucun document. Trois notations : le champ exact est juste, la règle « chaque affirmation a une source » échoue, la forme est correcte. Verdict : échec.',
      caseLabel: 'Cas 37 · piège', qLabel: 'question du client',
      q: ['« Ma commande 1042 arrive quand ?', 'Et si ça ne me plaît pas, je peux la retourner ? »'],
      aLabel: 'réponse de l’IA, affirmation par affirmation',
      claims: [
        { text: ['Votre commande 1042 sera livrée', 'demain, mardi 16 mars.'], tag: 'sourcée', src: 'commande 1042', ok: true },
        { text: ['Le livreur passera', 'avant 9 h.'], tag: 'sourcée', src: 'tournée du 16 mars', ok: true },
        { text: ['Le retour est gratuit', 'sous 30 jours.'], tag: 'sans source', src: 'dans aucun document', ok: false },
      ],
      gradersLabel: 'Trois notations',
      graders: [
        { name: 'Le champ exact', how: 'par code : la date rendue est-elle celle attendue ?', result: '2027-03-16 = 2027-03-16', ok: true },
        { name: 'Chaque affirmation a une source', how: 'par code puis par un modèle juge : est-elle dans un document récupéré ?', result: '2 sur 3 · 1 affirmation inventée', ok: false },
        { name: 'La forme', how: 'par un modèle juge, calé sur vos notes : ton, langue, longueur', result: 'conforme à la grille', ok: true },
      ],
      verdict: 'Échec', verdictSub: 'Une affirmation sans source suffit : c’est celle que le client retiendra.',
    },
  },
  en: {
    board: {
      title: 'Sixty real cases, replayed on three versions',
      alt: 'Sixty squares, one per real case, grouped into common cases, traps, out of scope and bypass attempts, replayed on three versions. Version 1 passes 47 cases out of 60, version 2 passes 55, version 3 with a smaller model passes 53 and fails two cases that used to pass: two regressions. The release threshold is 54 out of 60 with no regression.',
      cats: [{ label: 'common cases', n: 30 }, { label: 'traps', n: 15 }, { label: 'out of scope', n: 9 }, { label: 'bypass attempts', n: 6 }],
      versions: [
        { label: 'Version 1', sub: 'first instructions', score: '47 / 60', note: 'thirteen failures, a third of them in the traps: we know where to work' },
        { label: 'Version 2', sub: 'instructions fixed, documents better chunked', score: '55 / 60', note: 'five failures left, all known and listed' },
        { label: 'Version 3', sub: 'same instructions, smaller model', score: '53 / 60', note: 'two cases that used to pass no longer do: the version is not released as is' },
      ],
      legend: ['case passed', 'case failed', 'regression: passed before, fails now'],
      threshold: 'Release threshold written with you: 54 out of 60, and no regression.',
      threshold2: 'Version 2 is released. Version 3 costs less per request, but waits until its two regressions are fixed.',
    },
    verdict: {
      title: 'One case, three ways to grade it, one verdict',
      alt: 'Case 37: a customer asks when order 1042 will be delivered and whether they can return it. The AI’s answer contains three claims: the delivery date, sourced in the order; the morning slot, sourced in the route; and a free return within thirty days, which is in no document. Three gradings: the exact field is right, the rule “every claim has a source” fails, the form is correct. Verdict: fail.',
      caseLabel: 'Case 37 · trap', qLabel: 'customer’s question',
      q: ['“When does my order 1042 arrive?', 'And if I don’t like it, can I return it?”'],
      aLabel: 'the AI’s answer, claim by claim',
      claims: [
        { text: ['Your order 1042 will be delivered', 'tomorrow, Tuesday 16 March.'], tag: 'sourced', src: 'order 1042', ok: true },
        { text: ['The courier will come', 'before 9 am.'], tag: 'sourced', src: 'route of 16 March', ok: true },
        { text: ['Returns are free', 'within 30 days.'], tag: 'no source', src: 'in no document', ok: false },
      ],
      gradersLabel: 'Three gradings',
      graders: [
        { name: 'The exact field', how: 'by code: is the returned date the expected one?', result: '2027-03-16 = 2027-03-16', ok: true },
        { name: 'Every claim has a source', how: 'by code then a judge model: is it in a retrieved document?', result: '2 out of 3 · 1 invented claim', ok: false },
        { name: 'The form', how: 'by a judge model, calibrated on your grades: tone, language, length', result: 'matches the rubric', ok: true },
      ],
      verdict: 'Fail', verdictSub: 'One unsourced claim is enough: it is the one the customer will remember.',
    },
  },
  ar: {
    board: {
      title: 'ستون حالة حقيقية، تُعاد على ثلاث نسخ',
      alt: 'ستون مربعاً، واحد لكل حالة حقيقية، مصنَّفة إلى حالات شائعة وفخاخ وخارج النطاق ومحاولات تحايل، تُعاد على ثلاث نسخ. النسخة 1 تنجح في 47 حالة من 60، والنسخة 2 في 55، والنسخة 3 بنموذج أصغر في 53 وتفشل في حالتين كانتا تنجحان: تراجعان. وعتبة التسليم 54 من 60 بلا تراجع.',
      cats: [{ label: 'حالات شائعة', n: 30 }, { label: 'فخاخ', n: 15 }, { label: 'خارج النطاق', n: 9 }, { label: 'تحايل', n: 6 }],
      versions: [
        { label: 'النسخة 1', sub: 'التعليمات الأولى', score: I('47 / 60'), note: 'ثلاثة عشر إخفاقاً، ثلثها في الفخاخ: نعرف أين نعمل' },
        { label: 'النسخة 2', sub: 'تعليمات مصحَّحة ووثائق مقطَّعة أفضل', score: I('55 / 60'), note: 'خمسة إخفاقات باقية، كلها معروفة ومسرودة' },
        { label: 'النسخة 3', sub: 'التعليمات نفسها، نموذج أصغر', score: I('53 / 60'), note: 'حالتان كانتا تنجحان لم تعودا: النسخة لا تُسلَّم كما هي' },
      ],
      legend: ['حالة ناجحة', 'حالة فاشلة', 'تراجع: نجحت قبل وفشلت الآن'],
      threshold: 'عتبة التسليم المكتوبة معكم: 54 من 60، وبلا أي تراجع.',
      threshold2: 'النسخة 2 تُسلَّم. والنسخة 3 أقل كلفة لكل طلب، لكنها تنتظر تصحيح تراجعَيها.',
    },
    verdict: {
      title: 'حالة واحدة، ثلاث طرق لتنقيطها، حكم واحد',
      alt: 'الحالة 37: يسأل زبون متى تصل طلبيته 1042 وهل يستطيع إرجاعها. جواب الذكاء الاصطناعي فيه ثلاثة ادعاءات: تاريخ التسليم، وله مصدر في الطلبية؛ فترة الصباح، ولها مصدر في الجولة؛ وإرجاع مجاني خلال ثلاثين يوماً، وليس في أي وثيقة. ثلاثة تنقيطات: الحقل الدقيق صحيح، قاعدة «لكل ادعاء مصدر» تفشل، والشكل سليم. الحكم: إخفاق.',
      caseLabel: 'الحالة 37 · فخ', qLabel: 'سؤال الزبون',
      q: ['«الطلبية 1042 وقتاش توصل؟', 'ولو ما عجبتنيش نقدر نرجّعها؟»'],
      aLabel: 'جواب الذكاء الاصطناعي، ادعاءً ادعاءً',
      claims: [
        { text: ['طلبيتكم 1042 ستُسلَّم', 'غداً الثلاثاء 16 مارس.'], tag: 'له مصدر', src: 'الطلبية 1042', ok: true },
        { text: ['سيمرّ الموصّل', 'قبل 9 صباحاً.'], tag: 'له مصدر', src: 'جولة 16 مارس', ok: true },
        { text: ['الإرجاع مجاني', 'خلال 30 يوماً.'], tag: 'بلا مصدر', src: 'ليس في أي وثيقة', ok: false },
      ],
      gradersLabel: 'ثلاثة تنقيطات',
      graders: [
        { name: 'الحقل الدقيق', how: 'بالكود: هل التاريخ المُعاد هو المنتظر؟', result: I('2027-03-16 = 2027-03-16'), ok: true },
        { name: 'لكل ادعاء مصدر', how: 'بالكود ثم بنموذج حَكَم: هل هو في وثيقة مسترجَعة؟', result: '2 من 3 · ادعاء مخترَع واحد', ok: false },
        { name: 'الشكل', how: 'بنموذج حَكَم مضبوط على تنقيطكم: النبرة، اللغة، الطول', result: 'مطابق للشبكة', ok: true },
      ],
      verdict: 'إخفاق', verdictSub: 'ادعاء واحد بلا مصدر يكفي: هو ما سيتذكره الزبون.',
    },
  },
};
