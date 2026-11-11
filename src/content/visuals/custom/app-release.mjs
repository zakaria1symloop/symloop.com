// Bespoke animated figures for the 2027 mobile-update post.
//  rollout(): one update followed day by day on two tracks (Google Play staged
//             rollout, App Store phased release): share of users on the new
//             version per day, crash rate per thousand sessions underneath, a
//             halt on day 3 when the Android crash rate crosses the threshold,
//             a hotfix, then resumption. Columns appear day after day.
//  compat():  one API serving three installed versions at once: the oldest is
//             sent to a "update required" screen, the current one gets a soft
//             banner, the newest reads the new fields; added fields are ignored
//             by older versions, the old route stays until a dated day.
// CSS-only animation (prefers-reduced-motion disables it); base attributes are
// the finished state for the JPG rasteriser.
import { W, C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function arrow(c, x1, y1, x2, y2, o = {}) {
  const { stroke = C.line2, sw = 1, dash = '' } = o;
  const ang = Math.atan2(y2 - y1, (c.rtl ? -1 : 1) * (x2 - x1));
  const hx = c.X(x2); const hy = y2; const L = 8;
  const p1 = `${(hx - L * Math.cos(ang - 0.45)).toFixed(1)},${(hy - L * Math.sin(ang - 0.45)).toFixed(1)}`;
  const p2 = `${(hx - L * Math.cos(ang + 0.45)).toFixed(1)},${(hy - L * Math.sin(ang + 0.45)).toFixed(1)}`;
  return line(c, x1, y1, x2, y2, { stroke, sw, dash }) + `<polygon points="${hx},${hy} ${p1} ${p2}" fill="${stroke}"/>`;
}

export function rollout(t, rtl) {
  const c = ctx(rtl); const P = 'ar'; const css = []; const H = 600;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  const x0 = 300; const dayW = 82; const days = 10;
  const dx = (d) => x0 + d * dayW;
  // day axis
  const ay = 110;
  for (let d = 0; d < days; d++) {
    s += text(c, dx(d) + dayW / 2, ay, t.day(d), { size: 10.5, font: 'mono', fill: C.fg35, anchor: 'middle' });
  }
  // tracks
  const tracks = [{ key: 'android', y: 130 }, { key: 'ios', y: 275 }];
  const barH = 90;
  tracks.forEach((tr) => {
    const T = t.tracks[tr.key];
    s += text(c, 80, tr.y + 18, T.name, { size: 13, fill: C.fg });
    s += text(c, 80, tr.y + 36, T.sub, { size: 10.5, font: 'mono', fill: C.fg55 });
    s += text(c, 80, tr.y + 54, T.sub2, { size: 10.5, font: 'mono', fill: C.fg35 });
    s += line(c, x0, tr.y + barH + 4, dx(days) + dayW, tr.y + barH + 4, { stroke: C.line2 });
    T.pct.forEach((p, d) => {
      const at = 6 + d * 7.5;
      const h = Math.max(2, (p / 100) * barH);
      const halted = T.halt === d;
      s += `<g style="animation:${show(css, P, `${tr.key}${d}`, at)}">`
        + rect(c, dx(d) + 10, tr.y + barH + 4 - h, dayW - 20, h, { fill: halted ? 'rgba(242,181,68,0.18)' : 'rgba(255,255,255,0.14)', stroke: halted ? C.accent : C.line2 })
        + text(c, dx(d) + dayW / 2, tr.y + barH + 4 - h - 6, p === 0 ? T.zero[d] || '' : `${p} %`, { size: 11, font: 'mono', fill: halted ? C.accent : C.fg, anchor: 'middle' })
        + '</g>';
    });
  });
  // crash row
  const cy = 420;
  s += text(c, 80, cy + 4, t.crash.name, { size: 13, fill: C.fg });
  s += text(c, 80, cy + 22, t.crash.sub, { size: 10.5, font: 'mono', fill: C.fg55 });
  s += line(c, x0, cy + 32, dx(days) + dayW, cy + 32, { stroke: C.line, dash: '2 6' });
  t.crash.values.forEach((v, d) => {
    if (v === null) return;
    const at = 6 + d * 7.5 + 2; const bad = v >= t.crash.threshold;
    s += `<g style="animation:${show(css, P, `cr${d}`, at)}">`
      + circle(c, dx(d) + dayW / 2, cy + 8, bad ? 9 : 6, { fill: bad ? C.accent : C.bg, stroke: bad ? C.accent : C.fg55 })
      + text(c, dx(d) + dayW / 2, cy + 50, t.crash.fmt(v), { size: 11, font: 'mono', fill: bad ? C.accent : C.fg70, anchor: 'middle' })
      + '</g>';
  });
  // halt annotation
  const hd = t.tracks.android.halt;
  s += `<g style="animation:${show(css, P, 'halt', 6 + hd * 7.5 + 4)}">`
    + line(c, dx(hd) + dayW / 2, 130 + barH + 8, dx(hd) + dayW / 2, cy - 4, { stroke: C.accent, dash: '3 3' })
    + rect(c, dx(hd) + dayW / 2 + 8, 130 + barH + 14, 230, 40, { stroke: C.accent, fill: 'rgba(242,181,68,0.08)' })
    + text(c, dx(hd) + dayW / 2 + 18, 130 + barH + 31, t.halt1, { size: 11.5, fill: C.accent })
    + text(c, dx(hd) + dayW / 2 + 18, 130 + barH + 46, t.halt2, { size: 10.5, font: 'mono', fill: C.accent })
    + '</g>';
  // ribbon
  const ry = 530;
  s += `<g style="animation:${show(css, P, 'rib', 90)}">`
    + rect(c, 80, ry - 22, 1040, 54, { stroke: C.line2, fill: C.fill })
    + text(c, 98, ry, t.ribbon, { size: 13, fill: C.fg })
    + text(c, 98, ry + 19, t.ribbon2, { size: 11, font: 'mono', fill: C.fg55 })
    + '</g>';
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

export function compat(t, rtl) {
  const c = ctx(rtl); const P = 'ac'; const css = []; const H = 560;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  // API box on the right
  const ax = 780; const ay = 100; const aw = 340; const ah = 380;
  s += rect(c, ax, ay, aw, ah, { stroke: C.accent, fill: 'rgba(242,181,68,0.05)' });
  s += text(c, ax + 18, ay + 28, t.api.label, { size: 11, font: 'mono', fill: C.accent, letter: 2, upper: true });
  s += text(c, ax + 18, ay + 56, t.api.name, { size: 16, fill: C.fg });
  t.api.lines.forEach((l, i) => {
    const y = ay + 90 + i * 48;
    s += text(c, ax + 18, y, l.k, { size: 10.5, font: 'mono', fill: C.fg35 });
    s += text(c, ax + 18, y + 18, l.v, { size: 12.5, fill: l.accent ? C.accent : C.fg });
  });
  // three phones on the left
  const px = 80; const pw = 300; const ph = 108;
  t.phones.forEach((p, i) => {
    const y = 100 + i * 130; const at = 6 + i * 26;
    const forced = p.verdict === 'forced'; const soft = p.verdict === 'soft';
    s += rect(c, px, y, pw, ph, { stroke: forced ? C.fg35 : C.line2, fill: forced ? 'none' : C.fill });
    s += text(c, px + 16, y + 24, p.version, { size: 15, font: 'mono', fill: forced ? C.fg55 : C.fg });
    s += text(c, px + pw - 16, y + 24, p.share, { size: 11, font: 'mono', fill: C.fg35, anchor: 'end' });
    s += text(c, px + 16, y + 44, p.device, { size: 11.5, fill: C.fg55 });
    // request
    s += `<g style="animation:${show(css, P, `q${i}`, at)}">` + text(c, px + 16, y + 68, p.request, { size: 11, font: 'mono', fill: C.fg70 }) + '</g>';
    // arrow to API and back
    const y1 = y + ph / 2; const xs = px + pw + 8; const xe = ax - 8;
    s += `<g style="animation:${show(css, P, `a${i}`, at + 3)}">` + arrow(c, xs, y1 - 8, xe, y1 - 8, { stroke: C.line2 }) + '</g>';
    s += `<g style="animation:${show(css, P, `b${i}`, at + 10)}">` + arrow(c, xe, y1 + 8, xs, y1 + 8, { stroke: forced ? C.fg35 : soft ? C.fg70 : C.accent, dash: forced ? '4 4' : '' }) + '</g>';
    // mover
    const d = `M ${c.X(xs)} ${y1 - 8} L ${c.X(xe)} ${y1 - 8} L ${c.X(xe)} ${y1 + 8} L ${c.X(xs)} ${y1 + 8}`;
    css.push(`@keyframes ${P}-m${i}{0%,${(at + 2).toFixed(1)}%{offset-distance:0%;opacity:0}${(at + 3).toFixed(1)}%{opacity:1}${(at + 14).toFixed(1)}%{offset-distance:100%;opacity:1}${(at + 15).toFixed(1)}%,100%{offset-distance:100%;opacity:0}}`);
    s += `<circle r="5" fill="${C.accent}" opacity="0" style="offset-path:path('${d}');offset-rotate:0deg;animation:${P}-m${i} ${LOOP}s linear infinite"/>`;
    // verdict
    s += `<g style="animation:${show(css, P, `v${i}`, at + 15)}">`
      + rect(c, px + 16, y + 78, pw - 32, 22, { fill: forced ? 'none' : soft ? 'rgba(255,255,255,0.08)' : C.accent, stroke: forced ? C.fg35 : 'none' })
      + text(c, px + pw / 2, y + 93, p.verdictLabel, { size: 11, font: 'mono', fill: forced ? C.fg70 : soft ? C.fg : C.bg, anchor: 'middle' })
      + '</g>';
    // response note on the arrow
    s += `<g style="animation:${show(css, P, `n${i}`, at + 11)}">` + text(c, (xs + xe) / 2, y1 + 24, p.response, { size: 10.5, font: 'mono', fill: forced ? C.fg55 : C.fg70, anchor: 'middle' }) + '</g>';
  });
  // bottom rule
  s += `<g style="animation:${show(css, P, 'rule', 92)}">` + text(c, 80, 525, t.rule, { size: 13, fill: C.fg }) + '</g>';
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"],svg circle[style*="${P}-"]{animation:none !important;opacity:1}}</style>`;
  return s + '</svg>';
}

const I = (x) => `⁦${x}⁩`;

export const STRINGS = {
  fr: {
    rollout: {
      title: 'Une mise à jour, jour par jour, sur les deux stores',
      alt: 'Deux pistes sur dix jours. Google Play : déploiement progressif piloté à la main, 5 % le jour 1, 20 % le jour 3, arrêt le jour 3 quand le taux de plantage atteint 2,1 pour mille sessions, correctif 2.4.1 le jour 4, reprise à 20 %, 50 % le jour 6, 100 % le jour 7. App Store : validation les jours 0 et 1, puis diffusion par phases automatique 1, 2, 5, 10, 20, 50, 100 % du jour 2 au jour 8. En dessous, le taux de plantage par jour avec un seuil à 1 pour mille. Un bandeau rappelle que l’API sert les deux versions pendant tout ce temps.',
      day: (d) => `J${d}`,
      tracks: {
        android: { name: 'Android · Google Play', sub: 'déploiement progressif, % choisi à la main', sub2: 'arrêt possible à tout moment', pct: [0, 5, 5, 20, 0, 20, 50, 100, 100, 100], halt: 3, zero: { 0: 'tests internes', 4: 'correctif 2.4.1' } },
        ios: { name: 'iOS · App Store', sub: 'diffusion par phases automatique sur 7 jours', sub2: 'pause possible jusqu’à 30 jours', pct: [0, 0, 1, 2, 5, 10, 20, 50, 100, 100], halt: -1, zero: { 0: 'en validation', 1: 'validée' } },
      },
      crash: { name: 'Plantages, nouvelle version', sub: 'pour 1 000 sessions · seuil 1,0', values: [null, 0.4, 0.5, 2.1, null, 0.3, 0.3, 0.2, 0.2, 0.2], threshold: 1.0, fmt: (v) => String(v).replace('.', ',') },
      halt1: 'Arrêt du déploiement Android', halt2: '2,1 ‰ > seuil · correctif 2.4.1 le lendemain',
      ribbon: 'Pendant ces dix jours, l’API sert la 2.3 et la 2.4 en même temps ; personne n’est bloqué, et personne ne reçoit la version cassée au-delà de 20 %.',
      ribbon2: 'la version minimale n’est relevée à 2.4 qu’au jour 30, quand l’adoption dépasse 90 % et que le taux de plantage est stable',
    },
    compat: {
      title: 'Une seule API, trois versions installées chez vos clients au même moment',
      alt: 'Trois téléphones à gauche : la version 2.2 sur un Android 8 de 2019, 6 % des clients ; la version 2.3 sur un Android 12, 71 % ; la version 2.4 sur un iPhone, 23 %. À droite, l’API avec une version minimale fixée à 2.3, une route v1 maintenue jusqu’au 30 juin 2027, et un champ livraison_estimee ajouté sans rien retirer. Chaque téléphone envoie sa version dans l’en-tête de la requête ; la 2.2 reçoit un écran « mise à jour requise », la 2.3 reçoit ses données et un bandeau souple, la 2.4 reçoit ses données avec le nouveau champ. Règle : on ajoute des champs, on n’en retire jamais sans date.',
      api: { label: 'Votre API', name: 'commandes · v1 et v2', lines: [
        { k: 'version minimale acceptée', v: '2.3 · relevée le 30 mars 2027, après 90 % d’adoption', accent: true },
        { k: 'champ ajouté dans la 2.4', v: 'livraison_estimee · ignoré sans erreur par la 2.3' },
        { k: 'champ jamais retiré', v: 'prix_ttc reste tant qu’une version servie le lit' },
        { k: 'route v1', v: 'maintenue jusqu’au 30 juin 2027, date écrite dans le contrat' },
        { k: 'journal', v: 'appels par version d’application, lus chaque semaine' },
      ] },
      phones: [
        { version: 'app 2.2', share: '6 % des clients', device: 'Android 8 · téléphone de 2019 · jamais mis à jour', request: 'GET /v1/commandes · X-App-Version: 2.2', verdict: 'forced', verdictLabel: 'écran « mise à jour requise »', response: '426 · version trop ancienne' },
        { version: 'app 2.3', share: '71 % des clients', device: 'Android 12 · mise à jour automatique en wifi', request: 'GET /v1/commandes · X-App-Version: 2.3', verdict: 'soft', verdictLabel: 'données + bandeau « nouvelle version »', response: '200 · champ livraison_estimee ignoré' },
        { version: 'app 2.4', share: '23 % des clients', device: 'iPhone · diffusion par phases, jour 5', request: 'GET /v2/commandes · X-App-Version: 2.4', verdict: 'ok', verdictLabel: 'données avec livraison_estimee', response: '200 · nouveaux champs lus' },
      ],
      rule: 'Règle : l’API ajoute des champs et n’en retire jamais sans date ; chaque appel porte la version de l’application, et c’est le serveur qui décide qui doit mettre à jour.',
    },
  },
  en: {
    rollout: {
      title: 'One update, day by day, on both stores',
      alt: 'Two tracks over ten days. Google Play: staged rollout driven by hand, 5 % on day 1, 20 % on day 3, halted on day 3 when the crash rate reaches 2.1 per thousand sessions, hotfix 2.4.1 on day 4, resumed at 20 %, 50 % on day 6, 100 % on day 7. App Store: review on days 0 and 1, then automatic phased release 1, 2, 5, 10, 20, 50, 100 % from day 2 to day 8. Underneath, the crash rate per day with a threshold at 1 per thousand. A ribbon recalls that the API serves both versions throughout.',
      day: (d) => `D${d}`,
      tracks: {
        android: { name: 'Android · Google Play', sub: 'staged rollout, % chosen by hand', sub2: 'can be halted at any time', pct: [0, 5, 5, 20, 0, 20, 50, 100, 100, 100], halt: 3, zero: { 0: 'internal tests', 4: 'hotfix 2.4.1' } },
        ios: { name: 'iOS · App Store', sub: 'automatic phased release over 7 days', sub2: 'can be paused up to 30 days', pct: [0, 0, 1, 2, 5, 10, 20, 50, 100, 100], halt: -1, zero: { 0: 'in review', 1: 'approved' } },
      },
      crash: { name: 'Crashes, new version', sub: 'per 1,000 sessions · threshold 1.0', values: [null, 0.4, 0.5, 2.1, null, 0.3, 0.3, 0.2, 0.2, 0.2], threshold: 1.0, fmt: (v) => String(v) },
      halt1: 'Android rollout halted', halt2: '2.1 ‰ > threshold · hotfix 2.4.1 next day',
      ribbon: 'During these ten days the API serves 2.3 and 2.4 at the same time; nobody is blocked, and nobody beyond 20 % receives the broken build.',
      ribbon2: 'the minimum version is raised to 2.4 only on day 30, when adoption exceeds 90 % and the crash rate is stable',
    },
    compat: {
      title: 'One API, three versions installed on your customers’ phones at the same time',
      alt: 'Three phones on the left: version 2.2 on a 2019 Android 8, 6 % of customers; version 2.3 on Android 12, 71 %; version 2.4 on an iPhone, 23 %. On the right, the API with a minimum version set to 2.3, a v1 route kept until 30 June 2027, and an estimated_delivery field added without removing anything. Each phone sends its version in the request header; 2.2 receives an “update required” screen, 2.3 receives its data and a soft banner, 2.4 receives its data with the new field. Rule: fields are added, never removed without a date.',
      api: { label: 'Your API', name: 'orders · v1 and v2', lines: [
        { k: 'minimum accepted version', v: '2.3 · raised on 30 March 2027, after 90 % adoption', accent: true },
        { k: 'field added in 2.4', v: 'estimated_delivery · ignored without error by 2.3' },
        { k: 'field never removed', v: 'price_incl_tax stays while any served version reads it' },
        { k: 'v1 route', v: 'kept until 30 June 2027, a date written in the contract' },
        { k: 'log', v: 'calls per app version, read every week' },
      ] },
      phones: [
        { version: 'app 2.2', share: '6 % of customers', device: 'Android 8 · 2019 phone · never updated', request: 'GET /v1/orders · X-App-Version: 2.2', verdict: 'forced', verdictLabel: '“update required” screen', response: '426 · version too old' },
        { version: 'app 2.3', share: '71 % of customers', device: 'Android 12 · automatic update on wifi', request: 'GET /v1/orders · X-App-Version: 2.3', verdict: 'soft', verdictLabel: 'data + “new version” banner', response: '200 · estimated_delivery ignored' },
        { version: 'app 2.4', share: '23 % of customers', device: 'iPhone · phased release, day 5', request: 'GET /v2/orders · X-App-Version: 2.4', verdict: 'ok', verdictLabel: 'data with estimated_delivery', response: '200 · new fields read' },
      ],
      rule: 'Rule: the API adds fields and never removes one without a date; every call carries the app version, and the server decides who must update.',
    },
  },
  ar: {
    rollout: {
      title: 'تحديث واحد، يوماً بيوم، على المتجرين',
      alt: 'مساران على عشرة أيام. Google Play: نشر تدريجي يُدار يدوياً، 5 % في اليوم 1، 20 % في اليوم 3، توقف في اليوم 3 حين بلغت نسبة الانهيار 2,1 لكل ألف جلسة، تصحيح 2.4.1 في اليوم 4، استئناف عند 20 %، 50 % في اليوم 6، 100 % في اليوم 7. App Store: مراجعة في اليومين 0 و1، ثم إصدار مرحلي آلي 1، 2، 5، 10، 20، 50، 100 % من اليوم 2 إلى اليوم 8. تحته نسبة الانهيار يومياً بعتبة 1 لكل ألف. وشريط يذكّر بأن الواجهة تخدم النسختين طوال الوقت.',
      day: (d) => `ي${I(String(d))}`,
      tracks: {
        android: { name: `${I('Android')} · ${I('Google Play')}`, sub: 'نشر تدريجي، النسبة تُختار يدوياً', sub2: 'يمكن إيقافه في أي وقت', pct: [0, 5, 5, 20, 0, 20, 50, 100, 100, 100], halt: 3, zero: { 0: 'اختبارات داخلية', 4: `تصحيح ${I('2.4.1')}` } },
        ios: { name: `${I('iOS')} · ${I('App Store')}`, sub: 'إصدار مرحلي آلي على 7 أيام', sub2: 'يمكن إيقافه مؤقتاً حتى 30 يوماً', pct: [0, 0, 1, 2, 5, 10, 20, 50, 100, 100], halt: -1, zero: { 0: 'قيد المراجعة', 1: 'مقبول' } },
      },
      crash: { name: 'الانهيارات، النسخة الجديدة', sub: 'لكل 1 000 جلسة · العتبة 1,0', values: [null, 0.4, 0.5, 2.1, null, 0.3, 0.3, 0.2, 0.2, 0.2], threshold: 1.0, fmt: (v) => I(String(v).replace('.', ',')) },
      halt1: `توقف نشر ${I('Android')}`, halt2: `${I('2,1 ‰')} > العتبة · تصحيح ${I('2.4.1')} في الغد`,
      ribbon: `خلال هذه الأيام العشرة تخدم الواجهة ${I('2.3')} و${I('2.4')} معاً؛ لا أحد محجوب، ولا أحد يتلقى النسخة المعطوبة بعد 20 %.`,
      ribbon2: `لا تُرفع النسخة الدنيا إلى ${I('2.4')} إلا في اليوم 30، حين يتجاوز الاعتماد 90 % وتستقر نسبة الانهيار`,
    },
    compat: {
      title: 'واجهة واحدة، ثلاث نسخ مثبَّتة عند زبائنكم في اللحظة نفسها',
      alt: 'ثلاثة هواتف على اليمين: النسخة 2.2 على Android 8 من 2019، 6 % من الزبائن؛ النسخة 2.3 على Android 12، 71 %؛ النسخة 2.4 على iPhone، 23 %. على اليسار الواجهة بنسخة دنيا 2.3، ومسار v1 مُبقى حتى 30 جوان 2027، وحقل التسليم_المتوقع مضاف دون حذف شيء. كل هاتف يرسل نسخته في ترويسة الطلب؛ 2.2 تتلقى شاشة «التحديث مطلوب»، 2.3 تتلقى بياناتها وشريطاً ليّناً، 2.4 تتلقى بياناتها مع الحقل الجديد. القاعدة: نضيف حقولاً ولا نحذف أبداً بلا تاريخ.',
      api: { label: 'واجهتكم', name: `الطلبيات · ${I('v1')} و${I('v2')}`, lines: [
        { k: 'النسخة الدنيا المقبولة', v: `${I('2.3')} · رُفعت في 30 مارس 2027 بعد اعتماد 90 %`, accent: true },
        { k: `حقل أُضيف في ${I('2.4')}`, v: `${I('livraison_estimee')} · تتجاهله ${I('2.3')} بلا خطأ` },
        { k: 'حقل لا يُحذف أبداً', v: `${I('prix_ttc')} يبقى ما دامت نسخة مخدومة تقرؤه` },
        { k: `مسار ${I('v1')}`, v: 'مُبقى حتى 30 جوان 2027، تاريخ مكتوب في العقد' },
        { k: 'السجل', v: 'استدعاءات لكل نسخة تطبيق، تُقرأ كل أسبوع' },
      ] },
      phones: [
        { version: I('app 2.2'), share: '6 % من الزبائن', device: `${I('Android 8')} · هاتف من 2019 · لم يُحدَّث قط`, request: I('GET /v1/commandes · X-App-Version: 2.2'), verdict: 'forced', verdictLabel: 'شاشة «التحديث مطلوب»', response: `${I('426')} · نسخة قديمة جداً` },
        { version: I('app 2.3'), share: '71 % من الزبائن', device: `${I('Android 12')} · تحديث آلي على الواي فاي`, request: I('GET /v1/commandes · X-App-Version: 2.3'), verdict: 'soft', verdictLabel: 'بيانات + شريط «نسخة جديدة»', response: `${I('200')} · الحقل الجديد مُتجاهَل` },
        { version: I('app 2.4'), share: '23 % من الزبائن', device: `${I('iPhone')} · إصدار مرحلي، اليوم 5`, request: I('GET /v2/commandes · X-App-Version: 2.4'), verdict: 'ok', verdictLabel: 'بيانات مع التسليم المتوقع', response: `${I('200')} · الحقول الجديدة مقروءة` },
      ],
      rule: 'القاعدة: الواجهة تضيف حقولاً ولا تحذف حقلاً بلا تاريخ أبداً؛ كل استدعاء يحمل نسخة التطبيق، والخادم هو من يقرر من يجب أن يحدّث.',
    },
  },
};
