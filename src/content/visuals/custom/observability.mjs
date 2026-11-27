// Bespoke animated figures for the 2027 monitoring-and-alerting post.
//  night(): one night incident seen through two signals drawn progressively
//           (error rate and 99th-percentile latency, 02:00–03:30): the payment
//           gateway times out at 02:14, the threshold is crossed, the on-call
//           phone rings at 02:16, acknowledged 02:19, fallback switched on
//           02:27, provider back 02:41; annotations appear in sequence.
//  month(): thirty days of availability against a written objective: day
//           cells appearing one by one, two incident days marked with their
//           duration, the error budget bar filling to what was consumed.
// CSS-only animation (prefers-reduced-motion disables it); base attributes are
// the finished state for the JPG rasteriser.
import { W, C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function draw(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{stroke-dashoffset:1000}${(at + dur).toFixed(1)}%,100%{stroke-dashoffset:0}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function grow(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `${P}-${id} ${LOOP}s linear infinite`; }

export function night(t, rtl) {
  const c = ctx(rtl); const P = 'on'; const css = []; const H = 600;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  const x0 = 300; const x1 = 1120; const m0 = 0; const m1 = 90; // minutes after 02:00
  const sx = (m) => x0 + ((m - m0) / (m1 - m0)) * (x1 - x0);
  // two chart bands
  const bands = [
    { key: 'err', top: 100, h: 130, label: t.err.label, sub: t.err.sub, series: t.err.series, max: t.err.max, thr: t.err.threshold, thrLabel: t.err.thrLabel },
    { key: 'lat', top: 270, h: 130, label: t.lat.label, sub: t.lat.sub, series: t.lat.series, max: t.lat.max, thr: t.lat.threshold, thrLabel: t.lat.thrLabel },
  ];
  bands.forEach((b, bi) => {
    const base = b.top + b.h;
    s += text(c, 80, b.top + 16, b.label, { size: 13, fill: C.fg });
    s += text(c, 80, b.top + 34, b.sub, { size: 10.5, font: 'mono', fill: C.fg55 });
    s += line(c, x0, base, x1, base, { stroke: C.line2 });
    for (let m = 0; m <= 90; m += 15) {
      s += line(c, sx(m), base, sx(m), base + 4, { stroke: C.line2 });
      if (bi === 1) s += text(c, sx(m), base + 18, t.tick(m), { size: 10, font: 'mono', fill: C.fg35, anchor: 'middle' });
    }
    // threshold line
    const ty = base - (b.thr / b.max) * b.h;
    s += line(c, x0, ty, x1, ty, { stroke: C.accent, dash: '4 4' });
    s += text(c, x1, ty - 5, b.thrLabel, { size: 10, font: 'mono', fill: C.accent, anchor: 'end' });
    // series polyline, drawn progressively
    const pts = b.series.map(([m, v]) => `${c.X(sx(m)).toFixed(1)},${(base - (v / b.max) * b.h).toFixed(1)}`).join(' ');
    s += `<polyline points="${pts}" fill="none" stroke="${C.fg}" stroke-width="1.6" pathLength="1000" stroke-dasharray="1000" style="animation:${draw(css, P, `l${bi}`, 4, 60)}"/>`;
  });
  // event markers on the charts (numbered), and a numbered list underneath
  t.events.forEach((ev, i) => {
    const x = sx(ev.m); const at = 4 + (ev.m / 90) * 60 + 1; const alert = ev.kind === 'alert';
    const col = i < 3 ? 0 : 1; const row = i % 3;
    const lx = 300 + col * 420; const ly = 444 + row * 32;
    s += `<g style="animation:${show(css, P, `e${i}`, at)}">`
      + line(c, x, 96, x, 400, { stroke: alert ? C.accent : C.line2, dash: alert ? '' : '2 4' })
      + circle(c, x, 90, 8, { fill: alert ? C.accent : C.bg, stroke: alert ? C.accent : C.fg55, sw: 1 })
      + text(c, x, 93.5, String(i + 1), { size: 10, font: 'mono', fill: alert ? C.bg : C.fg, anchor: 'middle' })
      + circle(c, lx + 8, ly - 4, 8, { fill: alert ? C.accent : C.bg, stroke: alert ? C.accent : C.fg55, sw: 1 })
      + text(c, lx + 8, ly - 0.5, String(i + 1), { size: 10, font: 'mono', fill: alert ? C.bg : C.fg, anchor: 'middle' })
      + text(c, lx + 26, ly, `${ev.time} · ${ev.label}`, { size: 11.5, fill: alert || ev.kind === 'ok' ? C.accent : C.fg })
      + text(c, lx + 26, ly + 14, ev.sub, { size: 10, font: 'mono', fill: C.fg55 })
      + '</g>';
  });
  // bottom note
  s += `<g style="animation:${show(css, P, 'note', 90)}">`
    + rect(c, 80, 542, 1040, 46, { stroke: C.line2, fill: C.fill })
    + text(c, 98, 562, t.note, { size: 12.5, fill: C.fg })
    + text(c, 98, 579, t.note2, { size: 10.5, font: 'mono', fill: C.fg55 })
    + '</g>';
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"],svg polyline[style*="${P}-"]{animation:none !important;stroke-dashoffset:0}}</style>`;
  return s + '</svg>';
}

export function month(t, rtl) {
  const c = ctx(rtl); const P = 'om'; const css = []; const H = 520;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += text(c, 80, 100, t.sub, { size: 12, fill: C.fg55 });
  // 30 day cells, 2 rows of 15
  const cx0 = 80; const cw = 62; const ch = 56; const gap = 8; const top = 124;
  t.days.forEach((d, i) => {
    const row = Math.floor(i / 15); const col = i % 15;
    const x = cx0 + col * (cw + gap); const y = top + row * (ch + 26); const at = 4 + i * 1.6;
    const inc = d.down > 0;
    s += `<g style="animation:${show(css, P, `d${i}`, at)}">`
      + rect(c, x, y, cw, ch, { stroke: inc ? C.accent : C.line, fill: inc ? 'rgba(242,181,68,0.14)' : 'rgba(255,255,255,0.04)' })
      + text(c, x + 8, y + 16, String(i + 1), { size: 10.5, font: 'mono', fill: C.fg35 })
      + text(c, x + cw / 2, y + 38, inc ? d.label : '100 %', { size: inc ? 11.5 : 10.5, font: 'mono', fill: inc ? C.accent : C.fg55, anchor: 'middle' })
      + '</g>';
    if (inc) {
      s += `<g style="animation:${show(css, P, `i${i}`, at + 3)}">` + text(c, x + cw / 2, y + ch + 16, d.note, { size: 10, font: 'mono', fill: C.fg70, anchor: 'middle' }) + '</g>';
    }
  });
  // budget bar
  const by = top + 2 * (ch + 26) + 22;
  const bx0 = 420; const bx1 = 1120; const bw = bx1 - bx0; const ratio = Math.min(1, t.budget.used / t.budget.total);
  s += `<g style="animation:${show(css, P, 'bud', 60)}">`
    + text(c, 80, by + 14, t.budget.label, { size: 13, fill: C.fg })
    + text(c, 80, by + 32, t.budget.sub, { size: 10.5, font: 'mono', fill: C.fg55 })
    + rect(c, bx0, by + 6, bw, 16, { stroke: C.line, fill: 'none' })
    + `<rect x="${c.RX(bx0, bw * ratio)}" y="${by + 6}" width="${(bw * ratio).toFixed(1)}" height="16" fill="${C.accent}" style="transform-box:fill-box;transform-origin:${c.rtl ? 'right' : 'left'} center;animation:${grow(css, P, 'budb', 61, 8)}"/>`
    + text(c, bx0 + bw * ratio + 10, by + 18, t.budget.usedLabel, { size: 12, font: 'mono', fill: C.accent })
    + text(c, bx1, by + 40, t.budget.totalLabel, { size: 10.5, font: 'mono', fill: C.fg55, anchor: 'end' })
    + '</g>';
  // verdict
  const vy = by + 62;
  s += `<g style="animation:${show(css, P, 'ver', 82)}">`
    + rect(c, 80, vy, 1040, 50, { stroke: C.accent, fill: 'rgba(242,181,68,0.06)' })
    + text(c, 98, vy + 21, t.verdict, { size: 12.5, fill: C.fg })
    + text(c, 98, vy + 39, t.verdict2, { size: 10.5, font: 'mono', fill: C.accent })
    + '</g>';
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"],svg rect[style*="${P}-"]{animation:none !important;transform:none}}</style>`;
  return s + '</svg>';
}

const I = (x) => `⁦${x}⁩`;

const ERR = [[0, 0.3], [10, 0.4], [13, 0.5], [14, 6.2], [16, 9.8], [20, 11.4], [25, 12.1], [27, 2.6], [30, 1.1], [41, 0.9], [45, 0.4], [60, 0.3], [90, 0.3]];
const LAT = [[0, 420], [10, 440], [13, 460], [14, 3800], [16, 6200], [20, 7900], [25, 8100], [27, 1200], [30, 700], [41, 560], [45, 450], [60, 430], [90, 420]];

export const STRINGS = {
  fr: {
    night: {
      title: 'Une nuit de panne, vue par la surveillance avant d’être vue par les clients',
      alt: 'Deux courbes de 2 h à 3 h 30. Le taux d’erreur des paiements passe de 0,3 % à 12 % à 2 h 14, quand la passerelle de paiement cesse de répondre ; la latence au 99e percentile monte de 420 ms à 8 secondes. Le seuil de 2 % d’erreurs sur cinq minutes est franchi à 2 h 16 et le téléphone d’astreinte sonne ; accusé de réception à 2 h 19 ; document d’intervention ouvert ; à 2 h 27 le paiement à la livraison est proposé à la place par un drapeau et les erreurs retombent ; la passerelle revient à 2 h 41 ; le drapeau est retiré à 2 h 45. Les clients ont vu un autre mode de paiement, pas une erreur. Exemple construit.',
      tick: (m) => { const h = 2 + Math.floor(m / 60); const mm = m % 60; return `${h} h ${String(mm).padStart(2, '0')}`; },
      err: { label: 'Erreurs des paiements', sub: '% des requêtes en échec, fenêtre de 5 min', series: ERR, max: 14, threshold: 2, thrLabel: 'seuil : 2 % sur 5 min → téléphone' },
      lat: { label: 'Latence au 99e percentile', sub: 'temps de réponse de l’API de paiement, ms', series: LAT, max: 9000, threshold: 3000, thrLabel: 'seuil : 3 000 ms → canal, pas téléphone' },
      events: [
        { m: 14, time: '2 h 14', kind: 'cause', label: 'La passerelle ne répond plus', sub: 'délais dépassés côté fournisseur' },
        { m: 16, time: '2 h 16', kind: 'alert', label: 'Le téléphone d’astreinte sonne', sub: 'symptôme : 2 % d’erreurs franchi' },
        { m: 19, time: '2 h 19', kind: 'step', label: 'Accusé de réception', sub: 'document d’intervention ouvert' },
        { m: 27, time: '2 h 27', kind: 'ok', label: 'Paiement à la livraison proposé', sub: 'drapeau activé, sans déploiement' },
        { m: 41, time: '2 h 41', kind: 'step', label: 'La passerelle revient', sub: 'erreurs < 1 %' },
        { m: 45, time: '2 h 45', kind: 'step', label: 'Drapeau retiré, rapport ouvert', sub: 'post-mortem lundi, sans blâme' },
      ],
      note: 'L’alerte a sonné sur le symptôme, les erreurs vues par les clients, pas sur la cause ; la cause a été trouvée dans les journaux, et la parade n’a demandé aucun déploiement.',
      note2: 'exemple construit · seuils par défaut pour un paiement : 2 % d’erreurs sur 5 min réveille, 3 000 ms au 99e percentile écrit dans le canal',
    },
    month: {
      title: 'Un mois de disponibilité, face à l’objectif écrit dans le contrat',
      sub: 'Objectif : 99,5 % de disponibilité par mois, soit 3 h 36 d’indisponibilité tolérée · mesuré par les sondes externes depuis Alger et Paris, toutes les minutes',
      alt: 'Trente cases, une par jour, presque toutes à 100 %. Le jour 8, 27 minutes d’indisponibilité : passerelle de paiement, parade par drapeau. Le jour 19, 1 h 25 d’indisponibilité : disque plein sur la base, alerte de saturation arrivée trop tard, corrigée. Budget d’erreur du mois : 3 h 36 tolérées, 1 h 52 consommées. Verdict : objectif tenu à 99,74 % ; une alerte de saturation à abaisser de 90 à 80 % avant le mois prochain.',
      days: Array.from({ length: 30 }, (_, i) => (i === 7 ? { down: 27, label: '27 min', note: 'passerelle de paiement · drapeau' } : i === 18 ? { down: 85, label: '1 h 25', note: 'disque plein sur la base · alerte trop tard' } : { down: 0 })),
      budget: { label: 'Budget d’erreur consommé', sub: 'minutes d’indisponibilité tolérées sur le mois', used: 112, total: 216, usedLabel: '1 h 52', totalLabel: 'budget : 3 h 36 (99,5 %)' },
      verdict: 'Verdict du mois : 99,74 %, objectif tenu. Une action : le seuil de saturation du disque passe de 90 % à 80 %, parce que l’alerte du jour 19 a sonné quand il était déjà plein.',
      verdict2: 'le rapport du lundi tient en ces trois lignes : disponibilité, incidents et durées, actions ouvertes · exemple construit',
    },
  },
  en: {
    night: {
      title: 'One night incident, seen by monitoring before it is seen by customers',
      alt: 'Two curves from 2:00 to 3:30. The payment error rate jumps from 0.3 % to 12 % at 2:14, when the payment gateway stops answering; 99th-percentile latency climbs from 420 ms to 8 seconds. The 2 % error threshold over five minutes is crossed at 2:16 and the on-call phone rings; acknowledged at 2:19; runbook opened; at 2:27 cash on delivery is offered instead through a flag and errors drop; the gateway returns at 2:41; the flag is removed at 2:45. Customers saw another payment method, not an error. Constructed example.',
      tick: (m) => { const h = 2 + Math.floor(m / 60); const mm = m % 60; return `${h}:${String(mm).padStart(2, '0')}`; },
      err: { label: 'Payment errors', sub: '% of failed requests, 5-min window', series: ERR, max: 14, threshold: 2, thrLabel: 'threshold: 2 % over 5 min → phone' },
      lat: { label: '99th-percentile latency', sub: 'payment API response time, ms', series: LAT, max: 9000, threshold: 3000, thrLabel: 'threshold: 3,000 ms → channel, not phone' },
      events: [
        { m: 14, time: '2:14', kind: 'cause', label: 'The gateway stops answering', sub: 'timeouts on the provider side' },
        { m: 16, time: '2:16', kind: 'alert', label: 'The on-call phone rings', sub: 'symptom: 2 % errors crossed' },
        { m: 19, time: '2:19', kind: 'step', label: 'Acknowledged', sub: 'runbook opened' },
        { m: 27, time: '2:27', kind: 'ok', label: 'Cash on delivery offered', sub: 'flag switched on, no deployment' },
        { m: 41, time: '2:41', kind: 'step', label: 'The gateway returns', sub: 'errors < 1 %' },
        { m: 45, time: '2:45', kind: 'step', label: 'Flag removed, report opened', sub: 'blameless post-mortem on Monday' },
      ],
      note: 'The alert fired on the symptom, the errors customers saw, not on the cause; the cause was found in the logs, and the workaround needed no deployment.',
      note2: 'constructed example · default thresholds for a payment: 2 % errors over 5 min wakes someone, 3,000 ms at p99 is written to the channel',
    },
    month: {
      title: 'A month of availability, against the objective written in the contract',
      sub: 'Objective: 99.5 % availability per month, that is 3 h 36 of tolerated downtime · measured by external probes from Algiers and Paris, every minute',
      alt: 'Thirty cells, one per day, almost all at 100 %. Day 8, 27 minutes of downtime: payment gateway, worked around by flag. Day 19, 1 h 25 of downtime: full disk on the database, saturation alert arrived too late, fixed. Error budget for the month: 3 h 36 tolerated, 1 h 52 consumed. Verdict: objective met at 99.74 %; one saturation alert to lower from 90 to 80 % before next month.',
      days: Array.from({ length: 30 }, (_, i) => (i === 7 ? { down: 27, label: '27 min', note: 'payment gateway · flag' } : i === 18 ? { down: 85, label: '1 h 25', note: 'full disk on the database · alert too late' } : { down: 0 })),
      budget: { label: 'Error budget consumed', sub: 'minutes of downtime tolerated over the month', used: 112, total: 216, usedLabel: '1 h 52', totalLabel: 'budget: 3 h 36 (99.5 %)' },
      verdict: 'Verdict of the month: 99.74 %, objective met. One action: the disk saturation threshold goes from 90 % to 80 %, because the day-19 alert rang when it was already full.',
      verdict2: 'the Monday report fits in these three lines: availability, incidents and durations, open actions · constructed example',
    },
  },
  ar: {
    night: {
      title: 'ليلة عطل، تراها المراقبة قبل أن يراها الزبائن',
      alt: 'منحنيان من 2:00 إلى 3:30. نسبة أخطاء الدفع تقفز من 0,3 % إلى 12 % في 2:14 حين تتوقف بوابة الدفع عن الرد؛ وتصعد الكمونية عند المئين 99 من 420 م.ث إلى 8 ثوانٍ. تُتجاوز عتبة 2 % أخطاء على خمس دقائق في 2:16 ويرن هاتف المناوبة؛ إقرار في 2:19؛ مستند تدخل مفتوح؛ في 2:27 يُقترح الدفع عند التسليم بدلاً عبر علم وتهبط الأخطاء؛ تعود البوابة في 2:41؛ يُزال العلم في 2:45. رأى الزبائن طريقة دفع أخرى لا خطأ. مثال مبني.',
      tick: (m) => { const h = 2 + Math.floor(m / 60); const mm = m % 60; return I(`${h}:${String(mm).padStart(2, '0')}`); },
      err: { label: 'أخطاء الدفع', sub: '% الطلبات الفاشلة، نافذة 5 دقائق', series: ERR, max: 14, threshold: 2, thrLabel: 'العتبة: 2 % على 5 دقائق ← الهاتف' },
      lat: { label: 'الكمونية عند المئين 99', sub: `زمن رد واجهة الدفع، ${I('ms')}`, series: LAT, max: 9000, threshold: 3000, thrLabel: `العتبة: ${I('3 000 ms')} ← القناة لا الهاتف` },
      events: [
        { m: 14, time: I('2:14'), kind: 'cause', label: 'البوابة تتوقف عن الرد', sub: 'مهل منتهية عند المزوّد' },
        { m: 16, time: I('2:16'), kind: 'alert', label: 'هاتف المناوبة يرن', sub: 'العَرَض: تُجوزت 2 % أخطاء' },
        { m: 19, time: I('2:19'), kind: 'step', label: 'إقرار بالاستلام', sub: 'مستند التدخل مفتوح' },
        { m: 27, time: I('2:27'), kind: 'ok', label: 'الدفع عند التسليم مقترَح', sub: 'علم مفعَّل، بلا نشر' },
        { m: 41, time: I('2:41'), kind: 'step', label: 'البوابة تعود', sub: 'أخطاء < 1 %' },
        { m: 45, time: I('2:45'), kind: 'step', label: 'العلم مُزال، التقرير مفتوح', sub: 'مراجعة بلا لوم يوم الاثنين' },
      ],
      note: 'رن التنبيه على العَرَض، الأخطاء التي رآها الزبائن، لا على السبب؛ وُجد السبب في السجلات، ولم يتطلب الحل أي نشر.',
      note2: `مثال مبني · عتبات افتراضية للدفع: 2 % أخطاء على 5 دقائق توقظ أحداً، ${I('3 000 ms')} عند المئين 99 تُكتب في القناة`,
    },
    month: {
      title: 'شهر من التوفر، مقابل الهدف المكتوب في العقد',
      sub: 'الهدف: توفر 99,5 % في الشهر، أي 3 س 36 د من التوقف المسموح · يُقاس بمسابر خارجية من الجزائر العاصمة وباريس، كل دقيقة',
      alt: 'ثلاثون خانة، واحدة لكل يوم، كلها تقريباً عند 100 %. اليوم 8، 27 دقيقة من التوقف: بوابة الدفع، حل بعلم. اليوم 19، ساعة و25 دقيقة من التوقف: قرص ممتلئ على القاعدة، تنبيه التشبع وصل متأخراً، صُحح. ميزانية الخطأ للشهر: 3 س 36 د مسموحة، ساعة و52 د مستهلكة. الحكم: الهدف محقَّق عند 99,74 %؛ تنبيه تشبع يُخفَّض من 90 إلى 80 % قبل الشهر المقبل.',
      days: Array.from({ length: 30 }, (_, i) => (i === 7 ? { down: 27, label: I('27 min'), note: 'بوابة الدفع · علم' } : i === 18 ? { down: 85, label: I('1 h 25'), note: 'قرص ممتلئ على القاعدة · تنبيه متأخر' } : { down: 0 })),
      budget: { label: 'ميزانية الخطأ المستهلكة', sub: 'دقائق التوقف المسموحة في الشهر', used: 112, total: 216, usedLabel: I('1 h 52'), totalLabel: `الميزانية: ${I('3 h 36')} (99,5 %)` },
      verdict: 'حكم الشهر: 99,74 %، الهدف محقَّق. إجراء واحد: عتبة تشبع القرص تنتقل من 90 % إلى 80 %، لأن تنبيه اليوم 19 رن وهو ممتلئ أصلاً.',
      verdict2: 'تقرير الاثنين في هذه الأسطر الثلاثة: التوفر، الحوادث ومددها، الإجراءات المفتوحة · مثال مبني',
    },
  },
};
