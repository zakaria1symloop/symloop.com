// Bespoke animated figures for the 2027 "slow application" post.
//  waterfall(): the same screen loaded on a weak network, before and after:
//               two request waterfalls (HTML, scripts, images, API calls) whose
//               bars grow along a time axis; the "before" takes ~10 s with
//               sequential calls and heavy images, the "after" ~2 s with split
//               scripts, WebP images, one aggregated call and a cache.
//  budget():    a performance budget written before the code: six gauges
//               (screen weight, images, scripts, requests, API p75, LCP on 3G)
//               filling to the measured value against the budget line; one
//               gauge over budget is flagged and fails the build.
// CSS-only animation (prefers-reduced-motion disables it); base attributes are
// the finished state for the JPG rasteriser.
import { W, C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function grow(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `${P}-${id} ${LOOP}s linear infinite`; }

export function waterfall(t, rtl) {
  const c = ctx(rtl); const P = 'sw'; const css = []; const H = 600;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  const x0 = 330; const x1 = 1120; const maxS = 10;
  const sx = (sec) => x0 + (sec / maxS) * (x1 - x0);
  const panel = (p, top, at0) => {
    s += text(c, 80, top + 4, p.name, { size: 13, fill: p.accent ? C.accent : C.fg });
    s += text(c, 80, top + 22, p.sub, { size: 10.5, font: 'mono', fill: C.fg55 });
    // axis
    for (let k = 0; k <= maxS; k += 2) {
      s += line(c, sx(k), top + 30, sx(k), top + 42 + p.rows.length * 26, { stroke: C.line, dash: '2 6' });
      s += text(c, sx(k), top + 24, `${k} s`, { size: 10, font: 'mono', fill: C.fg35, anchor: 'middle' });
    }
    p.rows.forEach((r, i) => {
      const y = top + 44 + i * 26; const bx = sx(r.start); const bw = Math.max(3, sx(r.end) - sx(r.start));
      const at = at0 + (r.start / maxS) * 40; const dur = Math.max(1, (r.end - r.start) / maxS * 40);
      s += text(c, 80, y + 13, r.label, { size: 11, fill: C.fg70 });
      s += text(c, 320, y + 13, r.size, { size: 10, font: 'mono', fill: C.fg35, anchor: 'end' });
      const anchorX = c.rtl ? 'right' : 'left';
      s += `<rect x="${c.RX(bx, bw)}" y="${y + 3}" width="${bw}" height="14" fill="${r.kind === 'api' ? (p.accent ? C.accent : 'rgba(242,181,68,0.45)') : r.kind === 'img' ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.42)'}" style="transform-box:fill-box;transform-origin:${anchorX} center;animation:${grow(css, P, `b${p.key}${i}`, at, dur)}"/>`;
    });
    // total marker
    const ty = top + 44 + p.rows.length * 26 + 10; const tx = sx(p.total);
    s += `<g style="animation:${show(css, P, `t${p.key}`, at0 + (p.total / maxS) * 40 + 1)}">`
      + line(c, tx, top + 30, tx, ty - 4, { stroke: p.accent ? C.accent : C.fg55, sw: 1.2 })
      + text(c, tx, ty + 8, p.totalLabel, { size: 11.5, font: 'mono', fill: p.accent ? C.accent : C.fg, anchor: 'middle' })
      + '</g>';
  };
  panel(t.before, 96, 4);
  panel(t.after, 326, 50);
  // legend
  const ly = 572;
  const leg = [[C.fg, 'rgba(255,255,255,0.42)', t.legend[0]], [C.fg, 'rgba(255,255,255,0.22)', t.legend[1]], [C.fg, C.accent, t.legend[2]]];
  leg.forEach(([_, f, label], i) => {
    const x = 80 + i * 230;
    s += rect(c, x, ly - 9, 14, 10, { fill: f, stroke: 'none' });
    s += text(c, x + 22, ly, label, { size: 10.5, font: 'mono', fill: C.fg55 });
  });
  s += text(c, 1120, ly, t.note, { size: 10.5, font: 'mono', fill: C.fg35, anchor: 'end' });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"],svg rect[style*="${P}-"]{animation:none !important;transform:none}}</style>`;
  return s + '</svg>';
}

export function budget(t, rtl) {
  const c = ctx(rtl); const P = 'sb'; const css = []; const H = 560;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += text(c, 80, 100, t.sub, { size: 12, fill: C.fg55 });
  const gx0 = 420; const gx1 = 1000; const gw = gx1 - gx0;
  const top = 130; const rowH = 58;
  t.items.forEach((it, i) => {
    const y = top + i * rowH; const at = 6 + i * 11;
    const ratio = Math.min(1.35, it.value / it.budget); const over = it.value > it.budget;
    s += text(c, 80, y + 18, it.name, { size: 13, fill: over ? C.accent : C.fg });
    s += text(c, 80, y + 36, it.how, { size: 10.5, font: 'mono', fill: C.fg55 });
    // track to 1.35 × budget
    s += rect(c, gx0, y + 10, gw, 16, { stroke: C.line, fill: 'none' });
    // budget line at 1/1.35 of the track
    const bxp = gx0 + gw / 1.35;
    s += line(c, bxp, y + 2, bxp, y + 34, { stroke: C.fg55, sw: 1.2 });
    if (i === 0) s += text(c, bxp, y - 6, t.budgetLabel, { size: 10, font: 'mono', fill: C.fg55, anchor: 'middle' });
    // fill
    const fw = (ratio / 1.35) * gw;
    s += `<rect x="${c.RX(gx0, fw)}" y="${y + 10}" width="${fw.toFixed(1)}" height="16" fill="${over ? C.accent : 'rgba(255,255,255,0.35)'}" style="transform-box:fill-box;transform-origin:${c.rtl ? 'right' : 'left'} center;animation:${grow(css, P, `g${i}`, at, 6)}"/>`;
    // values
    s += text(c, gx1 + 16, y + 17, it.valueLabel, { size: 12.5, font: 'mono', fill: over ? C.accent : C.fg });
    s += text(c, gx1 + 16, y + 33, it.budgetText, { size: 10, font: 'mono', fill: C.fg35 });
    if (over) {
      s += `<g style="animation:${show(css, P, `x${i}`, at + 7)}">` + circle(c, gx0 - 22, y + 18, 9, { fill: C.accent, stroke: 'none' }) + text(c, gx0 - 22, y + 22, '!', { size: 12, fill: C.bg, anchor: 'middle', weight: 600 }) + '</g>';
    }
  });
  // verdict
  const vy = top + t.items.length * rowH + 14;
  s += `<g style="animation:${show(css, P, 'verdict', 80)}">`
    + rect(c, 80, vy, 1040, 54, { stroke: C.accent, fill: 'rgba(242,181,68,0.06)' })
    + text(c, 98, vy + 22, t.verdict, { size: 13, fill: C.fg })
    + text(c, 98, vy + 41, t.verdict2, { size: 10.5, font: 'mono', fill: C.accent })
    + '</g>';
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"],svg rect[style*="${P}-"]{animation:none !important;transform:none}}</style>`;
  return s + '</svg>';
}

const I = (x) => `⁦${x}⁩`;
const N = ' ';

export const STRINGS = {
  fr: {
    waterfall: {
      title: 'Le même écran « liste des commandes », sur un réseau faible, avant et après',
      alt: 'Deux cascades de requêtes sur un axe de dix secondes. Avant : la page HTML de 180 Ko, trois scripts de 1,4 Mo au total, douze images de 3,2 Mo, puis six appels d’API l’un après l’autre ; l’écran est utilisable à 9,8 secondes. Après : HTML de 40 Ko, un script de 220 Ko et le reste chargé plus tard, quatre images WebP de 280 Ko chargées quand elles arrivent à l’écran, un seul appel d’API agrégé servi depuis le cache à la deuxième ouverture ; l’écran est utilisable à 1,9 seconde. Les chiffres sont un exemple construit à partir de cas réels, pas la mesure d’un projet.',
      before: { key: 'b', name: 'Avant · réseau 3G simulé', sub: 'tout est chargé, dans l’ordre où le code le demande', accent: false, total: 9.8, totalLabel: 'utilisable à 9,8 s', rows: [
        { label: 'Page HTML', size: '180 Ko', start: 0, end: 1.1, kind: 'doc' },
        { label: 'Scripts (3 fichiers)', size: '1,4 Mo', start: 1.1, end: 4.6, kind: 'doc' },
        { label: 'Images (12, originales)', size: '3,2 Mo', start: 1.3, end: 8.4, kind: 'img' },
        { label: 'API : commandes', size: '640 Ko', start: 4.6, end: 6.2, kind: 'api' },
        { label: 'API : clients, produits, statuts…', size: '5 appels', start: 6.2, end: 9.8, kind: 'api' },
      ] },
      after: { key: 'a', name: 'Après · même réseau, même écran', sub: 'budget écrit avant le code : 500 Ko, 3 requêtes, 2,5 s', accent: true, total: 1.9, totalLabel: 'utilisable à 1,9 s', rows: [
        { label: 'Page HTML', size: '40 Ko', start: 0, end: 0.4, kind: 'doc' },
        { label: 'Script de l’écran (le reste plus tard)', size: '220 Ko', start: 0.4, end: 1.1, kind: 'doc' },
        { label: 'Images visibles (4, WebP)', size: '280 Ko', start: 0.6, end: 1.7, kind: 'img' },
        { label: 'API : un appel agrégé, paginé', size: '38 Ko', start: 1.1, end: 1.6, kind: 'api' },
        { label: '2e ouverture : servi depuis le cache', size: '0 Ko', start: 1.6, end: 1.9, kind: 'api' },
      ] },
      legend: ['page et scripts', 'images', 'appels d’API'],
      note: 'exemple construit · réseau 3G simulé, téléphone de 2019',
    },
    budget: {
      title: 'Le budget de performance d’un écran, écrit avant le code et vérifié à chaque livraison',
      sub: 'Écran « liste des commandes » · mesuré sur un Android de 2019 en 3G simulée · la livraison est refusée si une barre dépasse le trait',
      alt: 'Six jauges, une par mesure, remplies jusqu’à la valeur mesurée face à un trait de budget. Poids total du premier écran : 410 Ko mesurés pour 500 Ko de budget. Images visibles : 280 Ko pour 200 Ko, au-dessus du budget, signalé. Scripts chargés avant l’affichage : 220 Ko pour 250 Ko. Requêtes avant affichage : 3 pour 3. Temps de réponse de l’API au 75e percentile : 240 ms pour 300 ms. Affichage du contenu principal en 3G simulée : 1,9 s pour 2,5 s. Verdict : une mesure dépasse, la livraison est refusée jusqu’à correction. Les valeurs sont un exemple.',
      budgetLabel: 'budget',
      items: [
        { name: 'Poids du premier écran', how: 'HTML + scripts + images visibles, compressés', value: 410, budget: 500, valueLabel: `410${N}Ko`, budgetText: `budget 500${N}Ko` },
        { name: 'Images visibles', how: 'WebP, taille de l’écran, pas l’original du téléphone', value: 280, budget: 200, valueLabel: `280${N}Ko`, budgetText: `budget 200${N}Ko · dépassé` },
        { name: 'Scripts avant affichage', how: 'le code de cet écran seulement, le reste plus tard', value: 220, budget: 250, valueLabel: `220${N}Ko`, budgetText: `budget 250${N}Ko` },
        { name: 'Requêtes avant affichage', how: 'appels d’API agrégés, pas un par ligne', value: 3, budget: 3, valueLabel: '3', budgetText: 'budget 3' },
        { name: 'API, 75e percentile', how: 'index, pagination, pas de N+1 ; mesuré en production', value: 240, budget: 300, valueLabel: `240${N}ms`, budgetText: `budget 300${N}ms` },
        { name: 'Contenu principal affiché (LCP)', how: 'téléphone de 2019, 3G simulée, 75e percentile', value: 1.9, budget: 2.5, valueLabel: `1,9${N}s`, budgetText: `budget 2,5${N}s` },
      ],
      verdict: 'Verdict de la livraison : refusée. Une mesure dépasse le budget ; les images sont réduites à la taille de l’écran avant la prochaine démonstration.',
      verdict2: 'le budget est dans le dépôt de code, vérifié par la chaîne de livraison, pas dans un document qu’on relit une fois',
    },
  },
  en: {
    waterfall: {
      title: 'The same “order list” screen, on a weak network, before and after',
      alt: 'Two request waterfalls on a ten-second axis. Before: the 180 KB HTML page, three scripts totalling 1.4 MB, twelve images of 3.2 MB, then six API calls one after another; the screen is usable at 9.8 seconds. After: 40 KB HTML, one 220 KB script with the rest loaded later, four WebP images of 280 KB loaded as they reach the screen, one aggregated API call served from the cache on the second opening; the screen is usable at 1.9 seconds. The figures are an example built from real cases, not a project measurement.',
      before: { key: 'b', name: 'Before · simulated 3G', sub: 'everything is loaded, in the order the code asks for it', accent: false, total: 9.8, totalLabel: 'usable at 9.8 s', rows: [
        { label: 'HTML page', size: '180 KB', start: 0, end: 1.1, kind: 'doc' },
        { label: 'Scripts (3 files)', size: '1.4 MB', start: 1.1, end: 4.6, kind: 'doc' },
        { label: 'Images (12, originals)', size: '3.2 MB', start: 1.3, end: 8.4, kind: 'img' },
        { label: 'API: orders', size: '640 KB', start: 4.6, end: 6.2, kind: 'api' },
        { label: 'API: customers, products, statuses…', size: '5 calls', start: 6.2, end: 9.8, kind: 'api' },
      ] },
      after: { key: 'a', name: 'After · same network, same screen', sub: 'budget written before the code: 500 KB, 3 requests, 2.5 s', accent: true, total: 1.9, totalLabel: 'usable at 1.9 s', rows: [
        { label: 'HTML page', size: '40 KB', start: 0, end: 0.4, kind: 'doc' },
        { label: 'This screen’s script (the rest later)', size: '220 KB', start: 0.4, end: 1.1, kind: 'doc' },
        { label: 'Visible images (4, WebP)', size: '280 KB', start: 0.6, end: 1.7, kind: 'img' },
        { label: 'API: one aggregated, paginated call', size: '38 KB', start: 1.1, end: 1.6, kind: 'api' },
        { label: '2nd opening: served from the cache', size: '0 KB', start: 1.6, end: 1.9, kind: 'api' },
      ] },
      legend: ['page and scripts', 'images', 'API calls'],
      note: 'constructed example · simulated 3G, 2019 phone',
    },
    budget: {
      title: 'A screen’s performance budget, written before the code and checked at every delivery',
      sub: '“Order list” screen · measured on a 2019 Android over simulated 3G · delivery is refused if a bar crosses the line',
      alt: 'Six gauges, one per measure, filled to the measured value against a budget line. Total weight of the first screen: 410 KB measured for a 500 KB budget. Visible images: 280 KB for 200 KB, over budget, flagged. Scripts loaded before display: 220 KB for 250 KB. Requests before display: 3 for 3. API response time at the 75th percentile: 240 ms for 300 ms. Main content displayed on simulated 3G: 1.9 s for 2.5 s. Verdict: one measure exceeds, delivery is refused until fixed. The values are an example.',
      budgetLabel: 'budget',
      items: [
        { name: 'First-screen weight', how: 'HTML + scripts + visible images, compressed', value: 410, budget: 500, valueLabel: '410 KB', budgetText: 'budget 500 KB' },
        { name: 'Visible images', how: 'WebP, screen size, not the phone’s original', value: 280, budget: 200, valueLabel: '280 KB', budgetText: 'budget 200 KB · exceeded' },
        { name: 'Scripts before display', how: 'this screen’s code only, the rest later', value: 220, budget: 250, valueLabel: '220 KB', budgetText: 'budget 250 KB' },
        { name: 'Requests before display', how: 'aggregated API calls, not one per row', value: 3, budget: 3, valueLabel: '3', budgetText: 'budget 3' },
        { name: 'API, 75th percentile', how: 'indexes, pagination, no N+1; measured in production', value: 240, budget: 300, valueLabel: '240 ms', budgetText: 'budget 300 ms' },
        { name: 'Main content displayed (LCP)', how: '2019 phone, simulated 3G, 75th percentile', value: 1.9, budget: 2.5, valueLabel: '1.9 s', budgetText: 'budget 2.5 s' },
      ],
      verdict: 'Delivery verdict: refused. One measure exceeds the budget; images are resized to the screen before the next demo.',
      verdict2: 'the budget lives in the code repository, checked by the delivery pipeline, not in a document read once',
    },
  },
  ar: {
    waterfall: {
      title: 'شاشة «قائمة الطلبيات» نفسها، على شبكة ضعيفة، قبل وبعد',
      alt: 'شلالا طلبات على محور عشر ثوانٍ. قبل: صفحة HTML بـ 180 ك.ب، ثلاثة سكريبتات بـ 1,4 م.ب، اثنتا عشرة صورة بـ 3,2 م.ب، ثم ستة استدعاءات واجهة متتالية؛ الشاشة قابلة للاستعمال عند 9,8 ثوانٍ. بعد: HTML بـ 40 ك.ب، سكريبت واحد بـ 220 ك.ب والباقي لاحقاً، أربع صور WebP بـ 280 ك.ب تُحمَّل حين تصل إلى الشاشة، استدعاء واجهة واحد مجمَّع يُخدم من الذاكرة المخبأة في الفتح الثاني؛ الشاشة قابلة للاستعمال عند 1,9 ثانية. والأرقام مثال مبني من حالات حقيقية لا قياس مشروع.',
      before: { key: 'b', name: `قبل · ${I('3G')} محاكاة`, sub: 'كل شيء يُحمَّل بالترتيب الذي يطلبه الكود', accent: false, total: 9.8, totalLabel: `قابلة للاستعمال عند ${I('9,8 s')}`, rows: [
        { label: `صفحة ${I('HTML')}`, size: I('180 Ko'), start: 0, end: 1.1, kind: 'doc' },
        { label: 'سكريبتات (3 ملفات)', size: I('1,4 Mo'), start: 1.1, end: 4.6, kind: 'doc' },
        { label: 'صور (12، أصلية)', size: I('3,2 Mo'), start: 1.3, end: 8.4, kind: 'img' },
        { label: 'الواجهة: الطلبيات', size: I('640 Ko'), start: 4.6, end: 6.2, kind: 'api' },
        { label: 'الواجهة: زبائن، منتجات، حالات…', size: '5 استدعاءات', start: 6.2, end: 9.8, kind: 'api' },
      ] },
      after: { key: 'a', name: 'بعد · الشبكة نفسها، الشاشة نفسها', sub: `ميزانية مكتوبة قبل الكود: ${I('500 Ko')}، 3 طلبات، ${I('2,5 s')}`, accent: true, total: 1.9, totalLabel: `قابلة للاستعمال عند ${I('1,9 s')}`, rows: [
        { label: `صفحة ${I('HTML')}`, size: I('40 Ko'), start: 0, end: 0.4, kind: 'doc' },
        { label: 'سكريبت الشاشة (الباقي لاحقاً)', size: I('220 Ko'), start: 0.4, end: 1.1, kind: 'doc' },
        { label: `صور مرئية (4، ${I('WebP')})`, size: I('280 Ko'), start: 0.6, end: 1.7, kind: 'img' },
        { label: 'الواجهة: استدعاء مجمَّع واحد، مُصفَّح', size: I('38 Ko'), start: 1.1, end: 1.6, kind: 'api' },
        { label: 'الفتح الثاني: من الذاكرة المخبأة', size: I('0 Ko'), start: 1.6, end: 1.9, kind: 'api' },
      ] },
      legend: ['الصفحة والسكريبتات', 'الصور', 'استدعاءات الواجهة'],
      note: `مثال مبني · ${I('3G')} محاكاة، هاتف من 2019`,
    },
    budget: {
      title: 'ميزانية أداء الشاشة، تُكتب قبل الكود وتُفحص عند كل تسليم',
      sub: `شاشة «قائمة الطلبيات» · مقيسة على ${I('Android')} من 2019 بـ ${I('3G')} محاكاة · يُرفض التسليم إن تجاوز شريط الخط`,
      alt: 'ست مقاييس، واحد لكل قياس، تمتلئ حتى القيمة المقيسة مقابل خط ميزانية. وزن الشاشة الأولى: 410 ك.ب مقيسة لميزانية 500 ك.ب. الصور المرئية: 280 ك.ب لـ 200 ك.ب، فوق الميزانية، مُعلَّمة. السكريبتات قبل العرض: 220 ك.ب لـ 250 ك.ب. الطلبات قبل العرض: 3 لـ 3. زمن رد الواجهة عند المئين 75: 240 م.ث لـ 300 م.ث. عرض المحتوى الرئيسي بـ 3G محاكاة: 1,9 ث لـ 2,5 ث. الحكم: قياس واحد يتجاوز، يُرفض التسليم حتى التصحيح. والقيم مثال.',
      budgetLabel: 'الميزانية',
      items: [
        { name: 'وزن الشاشة الأولى', how: `${I('HTML')} + سكريبتات + صور مرئية، مضغوطة`, value: 410, budget: 500, valueLabel: I('410 Ko'), budgetText: `الميزانية ${I('500 Ko')}` },
        { name: 'الصور المرئية', how: `${I('WebP')}، بحجم الشاشة، لا أصل الهاتف`, value: 280, budget: 200, valueLabel: I('280 Ko'), budgetText: `الميزانية ${I('200 Ko')} · متجاوَزة` },
        { name: 'السكريبتات قبل العرض', how: 'كود هذه الشاشة فقط، والباقي لاحقاً', value: 220, budget: 250, valueLabel: I('220 Ko'), budgetText: `الميزانية ${I('250 Ko')}` },
        { name: 'الطلبات قبل العرض', how: 'استدعاءات واجهة مجمَّعة، لا واحد لكل سطر', value: 3, budget: 3, valueLabel: '3', budgetText: 'الميزانية 3' },
        { name: 'الواجهة، المئين 75', how: `فهارس، تصفيح، لا ${I('N+1')}؛ مقيسة في الإنتاج`, value: 240, budget: 300, valueLabel: I('240 ms'), budgetText: `الميزانية ${I('300 ms')}` },
        { name: `عرض المحتوى الرئيسي (${I('LCP')})`, how: `هاتف من 2019، ${I('3G')} محاكاة، المئين 75`, value: 1.9, budget: 2.5, valueLabel: I('1,9 s'), budgetText: `الميزانية ${I('2,5 s')}` },
      ],
      verdict: 'حكم التسليم: مرفوض. قياس واحد يتجاوز الميزانية؛ تُصغَّر الصور إلى حجم الشاشة قبل العرض المقبل.',
      verdict2: 'الميزانية في مستودع الكود، تفحصها سلسلة التسليم، لا في وثيقة تُقرأ مرة واحدة',
    },
  },
};
