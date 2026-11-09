// Bespoke animated figure for the 2027 "AI in the app" post: one catalogue
// search request built two ways, token block by token block. Row A resends the
// whole catalogue; row B sends a cached prefix and three retrieved sheets.
// The bars grow in the browser (CSS only, disabled under prefers-reduced-motion);
// the base attributes are the finished state for the JPG rasteriser.
import { W, C, ctx, text, rect, line, open, heading } from '../../../lib/visuals/index.mjs';

const H = 600;
const LOOP = 8;

export function aiCache(t, rtl) {
  const c = ctx(rtl);
  const P = 'ac';
  const css = [];
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  const origin = rtl ? 'right center' : 'left center';

  const bx0 = 80; const bw = 760; const scale = bw / t.max; // px per token
  const grow = (id, from, to) => { css.push(`@keyframes ${P}-${id}{0%,${from}%{transform:scaleX(0)}${to}%,100%{transform:scaleX(1)}}`); return `${P}-${id} ${LOOP}s linear infinite`; };
  const show = (id, at) => { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5)}%{opacity:0}${at}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; };

  const rows = [t.rowA, t.rowB];
  const ry = [120, 300];
  rows.forEach((r, ri) => {
    const y = ry[ri];
    s += text(c, bx0, y, r.label, { size: 17, fill: C.fg });
    s += text(c, bx0, y + 22, r.sub, { size: 12.5, fill: C.fg55 });
    // token blocks
    let x = bx0; const by = y + 40; const bh = 44;
    let from = 6 + ri * 40;
    r.blocks.forEach((b, bi) => {
      const w = Math.max(6, b.tokens * scale);
      const to = from + Math.max(3, (w / bw) * 28);
      const fill = b.cached ? 'url(#ac-hatch)' : b.dim ? 'rgba(255,255,255,0.10)' : C.fill;
      const stroke = b.cached ? C.accent : C.line2;
      s += `<g style="transform-box:fill-box;transform-origin:${origin};animation:${grow(`g${ri}${bi}`, from, to)}">` + rect(c, x, by, w, bh, { fill, stroke }) + '</g>';
      x += w + 4;
      from = to;
    });
    // legend under the bar
    s += `<g style="animation:${show(`lg${ri}`, from)}">` + text(c, bx0, by + bh + 20, r.legend, { size: 12, fill: C.fg55 }) + (r.legend2 ? text(c, bx0, by + bh + 38, r.legend2, { size: 12, fill: C.accent }) : '') + '</g>';
    // total at right
    s += `<g style="animation:${show(`t${ri}`, from + 2)}">` + text(c, 1120, by + 20, r.total, { size: 30, font: 'serif', fill: ri === 1 ? C.accent : C.fg, anchor: 'end' }) + text(c, 1120, by + 40, r.totalSub, { size: 11.5, font: 'mono', fill: C.fg55, anchor: 'end' }) + '</g>';
  });
  // ratio between the rows
  s += `<g style="animation:${show('ratio', 92)}">` + line(c, 900, 236, 900, 296, { stroke: C.accent }) + text(c, 912, 270, t.ratio, { size: 14, fill: C.accent }) + '</g>';

  // bottom: the four figures of the month, as a quiet strip
  const sy = 470;
  s += line(c, 80, sy - 30, 1120, sy - 30, { stroke: C.line });
  t.strip.forEach((it, i) => {
    const x = 80 + i * 260;
    s += text(c, x, sy + 10, it.value, { size: 34, font: 'serif', fill: it.accent ? C.accent : C.fg });
    it.lines.forEach((l, k) => { s += text(c, x, sy + 36 + k * 16, l, { size: 11.5, fill: C.fg55 }); });
  });

  s += `<defs><pattern id="ac-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="8" height="8" fill="rgba(242,181,68,0.10)"/><line x1="0" y1="0" x2="0" y2="8" stroke="${C.accent}" stroke-width="1.5" opacity="0.6"/></pattern></defs>`;
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    title: 'Une recherche dans le catalogue, construite de deux façons : ce qui part vers le modèle',
    alt: 'Deux barres de blocs de tokens. Sans cache : instructions 3 000, catalogue entier 20 000, question 200, soit 23 200 tokens au plein tarif. Avec préfixe en cache et récupération : instructions 3 000 au dixième, trois fiches 1 200, question 200, soit l’équivalent de 1 700 tokens au plein tarif. Environ treize fois moins dans cet exemple. En bas, les quatre chiffres du mois.',
    max: 23200,
    rowA: { label: 'Sans cache : tout le catalogue à chaque requête', sub: 'le chatbot branché depuis l’écran', blocks: [
      { name: 'instructions', tokens: 3000, tokensLabel: '3 000' },
      { name: 'catalogue entier', tokens: 20000, tokensLabel: '20 000 tokens, renvoyés à chaque requête', dim: true },
      { name: 'question', tokens: 200, tokensLabel: '200' },
    ], legend: 'instructions 3 000 · catalogue entier 20 000, renvoyé à chaque requête · question 200', total: '23 200', totalSub: 'tokens au plein tarif' },
    rowB: { label: 'Préfixe en cache et documents récupérés', sub: 'la fonction construite dans l’orchestration', blocks: [
      { name: 'instructions en cache', tokens: 3000, tokensLabel: '3 000, facturés au dixième', cached: true },
      { name: 'trois fiches retrouvées', tokens: 1200, tokensLabel: '1 200' },
      { name: 'question', tokens: 200, tokensLabel: '200' },
    ], legend: 'instructions 3 000 · trois fiches retrouvées 1 200 · question 200', legend2: 'les instructions, en cache, sont facturées au dixième', total: '≈ 1 700', totalSub: 'équivalent plein tarif' },
    ratio: '≈ 13 fois moins, dans cet exemple',
    strip: [
      { value: '2 000', lines: ['requêtes par jour sur le portail ;', 'hypothèse à mesurer au pilote'] },
      { value: '60', lines: ['cas réels dans le jeu d’évaluation,', 'rejoués à chaque changement'] },
      { value: '÷ 10', lines: ['sur le préfixe en cache selon les grilles', 'publiques ; à vérifier sur votre facture'], accent: true },
      { value: '100 %', lines: ['des requêtes journalisées : coût,', 'latence, note, source'] },
    ],
  },
  en: {
    title: 'One catalogue search, built two ways: what goes to the model',
    alt: 'Two bars of token blocks. Without cache: instructions 3,000, whole catalogue 20,000, question 200, i.e. 23,200 tokens at full price. With cached prefix and retrieval: instructions 3,000 at a tenth, three sheets 1,200, question 200, i.e. the equivalent of 1,700 full-price tokens. About thirteen times less in this example. Below, the four figures of the month.',
    max: 23200,
    rowA: { label: 'No cache: the whole catalogue on every request', sub: 'the chatbot wired from the screen', blocks: [
      { name: 'instructions', tokens: 3000, tokensLabel: '3,000' },
      { name: 'whole catalogue', tokens: 20000, tokensLabel: '20,000 tokens, resent on every request', dim: true },
      { name: 'question', tokens: 200, tokensLabel: '200' },
    ], legend: 'instructions 3,000 · whole catalogue 20,000, resent on every request · question 200', total: '23,200', totalSub: 'tokens at full price' },
    rowB: { label: 'Cached prefix and retrieved documents', sub: 'the function built in the orchestration', blocks: [
      { name: 'cached instructions', tokens: 3000, tokensLabel: '3,000, billed at a tenth', cached: true },
      { name: 'three retrieved sheets', tokens: 1200, tokensLabel: '1,200' },
      { name: 'question', tokens: 200, tokensLabel: '200' },
    ], legend: 'instructions 3,000 · three retrieved sheets 1,200 · question 200', legend2: 'the cached instructions are billed at a tenth', total: '≈ 1,700', totalSub: 'full-price equivalent' },
    ratio: '≈ 13 times less, in this example',
    strip: [
      { value: '2,000', lines: ['requests a day on the portal;', 'assumption measured in the pilot'] },
      { value: '60', lines: ['real cases in the evaluation set,', 'replayed at every change'] },
      { value: '÷ 10', lines: ['on the cached prefix per public price', 'lists; check on your invoice'], accent: true },
      { value: '100 %', lines: ['of requests logged: cost,', 'latency, score, source'] },
    ],
  },
  ar: {
    title: 'بحث واحد في الكتالوج مبني بطريقتين: ما يذهب إلى النموذج',
    alt: 'شريطان من كتل الرموز. بلا تخزين: تعليمات 3 000، الكتالوج كله 20 000، سؤال 200، أي 23 200 رمز بالسعر الكامل. ببادئة مخزَّنة واسترجاع: تعليمات 3 000 بالعُشر، ثلاث بطاقات 1 200، سؤال 200، أي ما يعادل 1 700 رمز بالسعر الكامل. نحو ثلاثة عشر ضعفاً أقل في هذا المثال. في الأسفل أرقام الشهر الأربعة.',
    max: 23200,
    rowA: { label: 'بلا تخزين: الكتالوج كله مع كل طلب', sub: 'روبوت المحادثة الموصول من الشاشة', blocks: [
      { name: 'تعليمات', tokens: 3000, tokensLabel: '3 000' },
      { name: 'الكتالوج كله', tokens: 20000, tokensLabel: '20 000 رمز، يُعاد إرسالها مع كل طلب', dim: true },
      { name: 'سؤال', tokens: 200, tokensLabel: '200' },
    ], legend: 'تعليمات ⁦3 000⁩ · الكتالوج كله ⁦20 000⁩، يُعاد إرساله مع كل طلب · سؤال 200', total: '⁦23 200⁩', totalSub: 'رمز بالسعر الكامل' },
    rowB: { label: 'بادئة مخزَّنة ووثائق مسترجَعة', sub: 'الوظيفة المبنية في التنسيق', blocks: [
      { name: 'تعليمات مخزَّنة', tokens: 3000, tokensLabel: '3 000، تُحاسَب بالعُشر', cached: true },
      { name: 'ثلاث بطاقات مسترجَعة', tokens: 1200, tokensLabel: '1 200' },
      { name: 'سؤال', tokens: 200, tokensLabel: '200' },
    ], legend: 'تعليمات ⁦3 000⁩ · ثلاث بطاقات مسترجَعة ⁦1 200⁩ · سؤال 200', legend2: 'التعليمات المخزَّنة تُحاسَب بالعُشر', total: '⁦≈ 1 700⁩', totalSub: 'ما يعادل السعر الكامل تقريباً' },
    ratio: 'نحو 13 ضعفاً أقل، في هذا المثال',
    strip: [
      { value: '⁦2 000⁩', lines: ['طلب يومياً على البوابة؛', 'فرضية تُقاس في التجريب'] },
      { value: '60', lines: ['حالة حقيقية في مجموعة التقييم،', 'تُعاد مع كل تغيير'] },
      { value: '⁦÷ 10⁩', lines: ['على البادئة المخزَّنة وفق الجداول', 'العلنية؛ تُتحقَّق على فاتورتكم'], accent: true },
      { value: '⁦100 %⁩', lines: ['من الطلبات مسجَّلة: التكلفة،', 'الكمون، الدرجة، المصدر'] },
    ],
  },
};
