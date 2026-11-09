// Bespoke animated figures for the 2027 private-LLM deployment post.
//  paths():  one request, two routes — it stays inside "your walls" on a model
//            server on site, or it crosses to a vendor hosted in Europe with
//            minimal data. Two dots travel the two routes; three comparison
//            rows fill in underneath.
//  sizing(): four model sizes × two precisions as memory bars, against the
//            24 / 48 / 80 GB lines of common GPU cards. Bars grow in sequence.
// CSS-only animation (prefers-reduced-motion disables it); base attributes are
// the finished state for the JPG rasteriser.
import { W, C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 9;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }

export function paths(t, rtl) {
  const c = ctx(rtl); const P = 'pl'; const css = []; const H = 600;
  let s = open(H, t.title, t.alt) + heading(c, t.title);

  // the wall: everything left of x=720 is "inside"
  const wallX = 720;
  s += rect(c, 60, 96, wallX - 60, 250, { stroke: C.line2, dash: '6 6' });
  s += text(c, 76, 118, t.inside, { size: 11, font: 'mono', fill: C.fg35, letter: 2, upper: true });
  s += text(c, wallX + 24, 118, t.outside, { size: 11, font: 'mono', fill: C.fg35, letter: 2, upper: true });

  // nodes
  const app = { x: 90, y: 170, w: 200, h: 80 };
  const orch = { x: 330, y: 170, w: 170, h: 80 };
  const local = { x: 540, y: 140, w: 160, h: 60 };
  const eu = { x: 860, y: 230, w: 240, h: 70 };
  const node = (n, lab, sub, accent) => rect(c, n.x, n.y, n.w, n.h, { stroke: accent ? C.accent : C.line2, fill: accent ? C.fill : 'none' }) + text(c, n.x + 14, n.y + 28, lab, { size: 15, fill: C.fg }) + text(c, n.x + 14, n.y + 48, sub, { size: 11.5, fill: C.fg55 });
  s += node(app, t.app.label, t.app.sub);
  s += node(orch, t.orch.label, t.orch.sub);
  s += node(local, t.local.label, t.local.sub, true);
  s += node(eu, t.eu.label, t.eu.sub);
  s += line(c, app.x + app.w, 210, orch.x, 210, { stroke: C.line2 });
  // route 1: orch → local (inside)
  s += line(c, orch.x + orch.w, 200, local.x, 170, { stroke: C.accent, sw: 1.5 });
  // route 2: orch → eu (crosses the wall)
  s += line(c, orch.x + orch.w, 225, eu.x, 265, { stroke: C.line2, sw: 1.5, dash: '4 4' });
  s += `<g style="animation:${show(css, P, 'min', 46)}">` + text(c, wallX + 24, 222, t.minimal, { size: 11.5, fill: C.fg55 }) + '</g>';

  // moving dots
  const a0 = [c.X(app.x + app.w), 210]; const a1 = [c.X(orch.x + orch.w), 200]; const a2 = [c.X(local.x), 170];
  const b1 = [c.X(orch.x + orch.w), 225]; const b2 = [c.X(eu.x), 265];
  css.push(`@keyframes ${P}-d1{0%{offset-distance:0%;opacity:1}30%{offset-distance:100%;opacity:1}34%,100%{offset-distance:100%;opacity:0}}`);
  css.push(`@keyframes ${P}-d2{0%,34%{offset-distance:0%;opacity:0}36%{offset-distance:0%;opacity:1}66%{offset-distance:100%;opacity:1}70%,100%{offset-distance:100%;opacity:0}}`);
  s += `<circle r="6" fill="${C.accent}" opacity="0" class="${P}-m" style="offset-path:path('M ${a0[0]} ${a0[1]} L ${a1[0]} ${a1[1]} L ${a2[0]} ${a2[1]}');offset-rotate:0deg;animation:${P}-d1 ${LOOP}s linear infinite"/>`;
  s += `<circle r="6" fill="${C.fg}" opacity="0" class="${P}-m" style="offset-path:path('M ${a0[0]} ${a0[1]} L ${b1[0]} ${b1[1]} L ${b2[0]} ${b2[1]}');offset-rotate:0deg;animation:${P}-d2 ${LOOP}s linear infinite"/>`;

  // comparison rows
  const ty = 390; const colA = 330; const colB = 740;
  s += text(c, colA, ty, t.colA, { size: 13, fill: C.accent });
  s += text(c, colB, ty, t.colB, { size: 13, fill: C.fg });
  s += line(c, 60, ty + 12, 1140, ty + 12, { stroke: C.line2 });
  t.rows.forEach((r, i) => {
    const y = ty + 44 + i * 44;
    s += text(c, 76, y, r.k, { size: 13, fill: C.fg55 });
    s += `<g style="animation:${show(css, P, `ra${i}`, 32 + i * 4)}">` + text(c, colA, y, r.a, { size: 13.5, fill: C.fg }) + '</g>';
    s += `<g style="animation:${show(css, P, `rb${i}`, 70 + i * 4)}">` + text(c, colB, y, r.b, { size: 13.5, fill: C.fg }) + '</g>';
    s += line(c, 60, y + 16, 1140, y + 16, { stroke: C.line });
  });

  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"]{animation:none !important}.${P}-m{display:none}}</style>`;
  return s + '</svg>';
}

export function sizing(t, rtl) {
  const c = ctx(rtl); const P = 'sz'; const css = []; const H = 600;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  const origin = rtl ? 'right center' : 'left center';
  const x0 = 260; const x1 = 1100; const maxG = 150; const px = (x1 - x0) / maxG; const X = (g) => x0 + g * px;
  const top = 130; const rowH = 92;

  // capacity lines
  t.cards.forEach((cd) => {
    s += line(c, X(cd.gb), top - 14, X(cd.gb), top + rowH * 4 + 6, { stroke: C.accent, dash: '3 5' });
    s += text(c, X(cd.gb), top - 22, cd.label, { size: 11, font: 'mono', fill: C.accent, anchor: 'middle' });
  });
  // legend
  s += rect(c, 80, 84, 12, 12, { fill: 'rgba(255,255,255,0.22)', stroke: 'none' });
  s += text(c, 100, 95, t.legend16, { size: 11.5, fill: C.fg55 });
  s += rect(c, 80, 104, 12, 12, { fill: C.accent, stroke: 'none' });
  s += text(c, 100, 115, t.legend4, { size: 11.5, fill: C.fg55 });

  t.models.forEach((m, i) => {
    const y = top + i * rowH;
    s += text(c, 80, y + 26, m.name, { size: 16, fill: C.fg });
    s += text(c, 80, y + 46, m.use, { size: 11.5, fill: C.fg55 });
    const f1 = 6 + i * 20; const t1 = f1 + 8; const t2 = t1 + 6;
    css.push(`@keyframes ${P}-a${i}{0%,${f1}%{transform:scaleX(0)}${t1}%,100%{transform:scaleX(1)}}`);
    css.push(`@keyframes ${P}-b${i}{0%,${t1}%{transform:scaleX(0)}${t2}%,100%{transform:scaleX(1)}}`);
    s += `<g style="transform-box:fill-box;transform-origin:${origin};animation:${P}-a${i} ${LOOP}s linear infinite">` + rect(c, x0, y + 8, m.g16 * px, 20, { fill: 'rgba(255,255,255,0.22)', stroke: 'none' }) + '</g>';
    s += `<g style="transform-box:fill-box;transform-origin:${origin};animation:${P}-b${i} ${LOOP}s linear infinite">` + rect(c, x0, y + 34, m.g4 * px, 20, { fill: C.accent, stroke: 'none' }) + '</g>';
    s += `<g style="animation:${show(css, P, `la${i}`, t1)}">` + text(c, X(m.g16) + 8, y + 23, m.l16, { size: 11.5, font: 'mono', fill: C.fg55 }) + '</g>';
    s += `<g style="animation:${show(css, P, `lb${i}`, t2)}">` + text(c, X(m.g4) + 8, y + 49, m.l4, { size: 11.5, font: 'mono', fill: C.accent }) + '</g>';
  });
  s += line(c, x0, top + rowH * 4 + 6, x1, top + rowH * 4 + 6, { stroke: C.line2 });
  s += text(c, 80, H - 40, t.foot, { size: 12, fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

const I = (x) => `⁦${x}⁩`;

export const STRINGS = {
  fr: {
    paths: {
      title: 'Une requête, deux chemins : rester dans vos murs, ou sortir avec le minimum',
      alt: 'L’application envoie la requête à l’orchestration. Premier chemin : le serveur de modèles sur site, dans vos murs ; rien ne sort. Second chemin : un éditeur hébergé en Europe, avec les seules données nécessaires. Trois lignes comparent où vont les données, le coût et la qualité.',
      inside: 'Dans vos murs', outside: 'Hors de vos murs',
      app: { label: 'Votre application', sub: 'back-office, agent, portail' },
      orch: { label: 'Orchestration', sub: 'règles, récupération, journal' },
      local: { label: 'Modèle sur site', sub: 'ouvert, servi par vLLM' },
      eu: { label: 'Éditeur hébergé en Europe', sub: 'modèle fermé, par API' },
      minimal: 'données minimales, contrat à votre nom',
      colA: 'Sur site', colB: 'API en Europe',
      rows: [
        { k: 'Où vont les documents', a: 'Nulle part : ils restent sur vos serveurs', b: 'Chez l’éditeur, le temps de la requête' },
        { k: 'Ce que ça coûte', a: 'Une machine et son exploitation, fixes', b: 'À la requête, en devise' },
        { k: 'Ce qu’on obtient', a: 'Un modèle ouvert, à tester sur l’arabe', b: 'Les modèles les plus capables' },
      ],
    },
    sizing: {
      title: 'Quel modèle tient sur quelle carte : la mémoire, en ordres de grandeur',
      alt: 'Quatre tailles de modèles, 8, 14, 32 et 70 milliards de paramètres, avec la mémoire des poids en 16 bits et en 4 bits, face aux capacités de cartes de 24, 48 et 80 Go. En 4 bits, 8 milliards tient en environ 5 Go, 14 en 9, 32 en 20, 70 en 42 ; en 16 bits, 16, 28, 64 et 140 Go.',
      legend16: 'poids en 16 bits (≈ 2 Go par milliard de paramètres)', legend4: 'poids en 4 bits (≈ 0,6 Go par milliard) ; le contexte s’ajoute',
      cards: [{ gb: 24, label: '24 Go' }, { gb: 48, label: '48 Go' }, { gb: 80, label: '80 Go' }],
      models: [
        { name: '8 milliards', use: 'tri, extraction simple', g16: 16, g4: 5, l16: '≈ 16 Go', l4: '≈ 5 Go' },
        { name: '14 milliards', use: 'extraction, résumés', g16: 28, g4: 9, l16: '≈ 28 Go', l4: '≈ 9 Go' },
        { name: '32 milliards', use: 'RAG, agents outillés', g16: 64, g4: 20, l16: '≈ 64 Go', l4: '≈ 20 Go' },
        { name: '70 milliards', use: 'raisonnement, rédaction', g16: 140, g4: 42, l16: '≈ 140 Go', l4: '≈ 42 Go' },
      ],
      foot: 'Ordres de grandeur pour les poids seuls ; la mémoire du contexte et des requêtes simultanées s’ajoute. Au-delà d’une carte, plusieurs cartes en parallèle.',
    },
  },
  en: {
    paths: {
      title: 'One request, two routes: stay inside your walls, or leave with the minimum',
      alt: 'The app sends the request to the orchestration. First route: the model server on site, inside your walls; nothing leaves. Second route: a vendor hosted in Europe, with only the necessary data. Three rows compare where the data goes, the cost and the quality.',
      inside: 'Inside your walls', outside: 'Outside your walls',
      app: { label: 'Your application', sub: 'back office, agent, portal' },
      orch: { label: 'Orchestration', sub: 'rules, retrieval, log' },
      local: { label: 'Model on site', sub: 'open, served by vLLM' },
      eu: { label: 'Vendor hosted in Europe', sub: 'closed model, by API' },
      minimal: 'minimal data, contract in your name',
      colA: 'On site', colB: 'API in Europe',
      rows: [
        { k: 'Where documents go', a: 'Nowhere: they stay on your servers', b: 'To the vendor, for the time of the request' },
        { k: 'What it costs', a: 'A machine and its operation, fixed', b: 'Per request, in foreign currency' },
        { k: 'What you get', a: 'An open model, to test on Arabic', b: 'The most capable models' },
      ],
    },
    sizing: {
      title: 'Which model fits on which card: memory, in orders of magnitude',
      alt: 'Four model sizes, 8, 14, 32 and 70 billion parameters, with weight memory at 16 bits and at 4 bits, against cards of 24, 48 and 80 GB. At 4 bits, 8 billion fits in about 5 GB, 14 in 9, 32 in 20, 70 in 42; at 16 bits, 16, 28, 64 and 140 GB.',
      legend16: 'weights at 16 bits (≈ 2 GB per billion parameters)', legend4: 'weights at 4 bits (≈ 0.6 GB per billion); context comes on top',
      cards: [{ gb: 24, label: '24 GB' }, { gb: 48, label: '48 GB' }, { gb: 80, label: '80 GB' }],
      models: [
        { name: '8 billion', use: 'sorting, simple extraction', g16: 16, g4: 5, l16: '≈ 16 GB', l4: '≈ 5 GB' },
        { name: '14 billion', use: 'extraction, summaries', g16: 28, g4: 9, l16: '≈ 28 GB', l4: '≈ 9 GB' },
        { name: '32 billion', use: 'RAG, agents with tools', g16: 64, g4: 20, l16: '≈ 64 GB', l4: '≈ 20 GB' },
        { name: '70 billion', use: 'reasoning, drafting', g16: 140, g4: 42, l16: '≈ 140 GB', l4: '≈ 42 GB' },
      ],
      foot: 'Orders of magnitude for the weights alone; memory for the context and simultaneous requests comes on top. Beyond one card, several cards in parallel.',
    },
  },
  ar: {
    paths: {
      title: 'طلب واحد، طريقان: البقاء داخل أسواركم، أو الخروج بالحد الأدنى',
      alt: 'يرسل التطبيق الطلب إلى التنسيق. الطريق الأول: خادم النماذج في الموقع داخل أسواركم؛ لا شيء يخرج. الطريق الثاني: ناشر مستضاف في أوروبا بالبيانات الضرورية فقط. ثلاثة أسطر تقارن أين تذهب البيانات والتكلفة والجودة.',
      inside: 'داخل أسواركم', outside: 'خارج أسواركم',
      app: { label: 'تطبيقكم', sub: 'مكتب خلفي، وكيل، بوابة' },
      orch: { label: 'التنسيق', sub: 'قواعد، استرجاع، سجل' },
      local: { label: 'نموذج في الموقع', sub: 'مفتوح، يخدّمه vLLM' },
      eu: { label: 'ناشر مستضاف في أوروبا', sub: 'نموذج مغلق عبر API' },
      minimal: 'أقل بيانات، عقد باسمكم',
      colA: 'في الموقع', colB: 'API في أوروبا',
      rows: [
        { k: 'أين تذهب الوثائق', a: 'لا مكان: تبقى على خوادمكم', b: 'عند الناشر، مدة الطلب' },
        { k: 'كم يكلّف', a: 'آلة وتشغيلها، ثابتان', b: 'لكل طلب، بالعملة الأجنبية' },
        { k: 'ما نحصل عليه', a: 'نموذج مفتوح، يُختبر على العربية', b: 'النماذج الأقدر' },
      ],
    },
    sizing: {
      title: 'أي نموذج يتسع على أي بطاقة: الذاكرة، برتب الحجم',
      alt: 'أربعة أحجام نماذج، 8 و14 و32 و70 مليار معلمة، بذاكرة الأوزان بـ 16 بت وبـ 4 بت، مقابل بطاقات 24 و48 و80 غيغابايت. بـ 4 بت يتسع 8 مليارات في نحو 5 غيغابايت و14 في 9 و32 في 20 و70 في 42؛ وبـ 16 بت 16 و28 و64 و140.',
      legend16: 'الأوزان بـ 16 بت (نحو 2 غيغابايت لكل مليار معلمة)', legend4: 'الأوزان بـ 4 بت (نحو 0,6 غيغابايت لكل مليار)؛ والسياق يُضاف',
      cards: [{ gb: 24, label: I('24 GB') }, { gb: 48, label: I('48 GB') }, { gb: 80, label: I('80 GB') }],
      models: [
        { name: '8 مليارات', use: 'فرز، استخراج بسيط', g16: 16, g4: 5, l16: I('≈ 16 GB'), l4: I('≈ 5 GB') },
        { name: '14 مليار', use: 'استخراج، ملخصات', g16: 28, g4: 9, l16: I('≈ 28 GB'), l4: I('≈ 9 GB') },
        { name: '32 مليار', use: 'RAG، وكلاء بأدوات', g16: 64, g4: 20, l16: I('≈ 64 GB'), l4: I('≈ 20 GB') },
        { name: '70 مليار', use: 'استدلال، صياغة', g16: 140, g4: 42, l16: I('≈ 140 GB'), l4: I('≈ 42 GB') },
      ],
      foot: 'رتب حجم للأوزان وحدها؛ ذاكرة السياق والطلبات المتزامنة تُضاف. وما يتجاوز بطاقة واحدة يُوزَّع على عدة بطاقات.',
    },
  },
};
