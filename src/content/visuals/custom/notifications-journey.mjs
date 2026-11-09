// Bespoke animated figure for the 2027 notifications post: the journey of one
// "courier on the way" message from the event to the log, minute by minute,
// with the push → WhatsApp fallback drawn on four channel lanes.
// Animation is CSS only (so prefers-reduced-motion disables it) and the base
// attributes describe the finished state, which is what the JPG rasteriser sees.
import { W, C, F, ctx, text, rect, line, circle, open, heading, esc } from '../../../lib/visuals/index.mjs';

const H = 640;
const LOOP = 9; // seconds

function kf(id, at) {
  // appears at fraction `at` of the loop and stays until the end
  const a = Math.max(0, at * 100 - 0.6).toFixed(1); const b = (at * 100).toFixed(1);
  return `@keyframes ${id}{0%,${a}%{opacity:0}${b}%,100%{opacity:1}}`;
}

export function journey(t, rtl) {
  const c = ctx(rtl);
  const P = 'nj';
  const css = [];
  let n = 0;
  const appear = (at) => { n += 1; const id = `${P}${n}`; css.push(kf(id, at)); return ` class="${P}-a" style="animation:${id} ${LOOP}s linear infinite"`; };

  let s = open(H, t.title, t.alt) + heading(c, t.title);

  // ── top row: 01 event → 02 rule → 03 rendering
  const by = 96; const bh = 88; const bw = 320; const bx = [80, 440, 800];
  const boxes = [t.event, t.rule, t.render];
  boxes.forEach((b, i) => {
    s += rect(c, bx[i], by, bw, bh, { stroke: C.line2 });
    s += text(c, bx[i] + 16, by + 24, b.n, { size: 11, font: 'mono', fill: C.fg35, letter: 2 });
    s += text(c, bx[i] + 16, by + 50, b.label, { size: 17, fill: C.fg });
    s += text(c, bx[i] + 16, by + 72, b.sub, { size: 12.5, fill: C.fg55 });
    if (i < 2) s += line(c, bx[i] + bw + 6, by + bh / 2, bx[i + 1] - 6, by + bh / 2, { stroke: C.line2 });
  });
  // the moving message dot across the top row, then it drops into the lanes
  const px0 = c.X(100); const px1 = c.X(1100);
  css.push(`@keyframes ${P}-mv{0%{offset-distance:0%;opacity:1}22%{offset-distance:100%;opacity:1}24%,100%{offset-distance:100%;opacity:0}}`);
  s += `<circle r="6" fill="${C.accent}" opacity="0" class="${P}-m" style="offset-path:path('M ${px0} ${by + bh / 2} L ${px1} ${by + bh / 2}');offset-rotate:0deg;animation:${P}-mv ${LOOP}s linear infinite"/>`;

  // ── lanes: time axis 0 → 12 min
  const lx0 = 330; const lx1 = 1000; const pm = (lx1 - lx0) / 12; const X = (m) => lx0 + m * pm;
  const axisY = 236;
  s += text(c, 80, axisY - 14, t.lanesTitle, { size: 11, font: 'mono', fill: C.fg35, letter: 2, upper: true });
  s += line(c, lx0, axisY, lx1, axisY, { stroke: C.line2 });
  [0, 5, 10, 12].forEach((m) => {
    s += line(c, X(m), axisY - 4, X(m), axisY + 4, { stroke: C.line2 });
    s += text(c, X(m), axisY + 20, m === 0 ? t.t0 : `${m} min`, { size: 11, font: 'mono', fill: C.fg55, anchor: 'middle' });
  });
  const lanes = [t.inapp, t.push, t.whatsapp, t.sms];
  const ly = [290, 350, 410, 470];
  lanes.forEach((l, i) => {
    s += text(c, 80, ly[i] + 5, l.label, { size: 15, fill: i === 3 ? C.fg35 : C.fg });
    s += line(c, lx0, ly[i], lx1, ly[i], { stroke: C.line });
  });

  // in-app: written at t=0, always
  s += `<g${appear(0.24)}>` + circle(c, X(0), ly[0], 6, { fill: C.fg }) + text(c, X(0) + 14, ly[0] + 5, t.inapp.note, { size: 12.5, fill: C.fg70 }) + '</g>';
  // push: sent at t=0, waiting 0→10, not acknowledged
  s += `<g${appear(0.25)}>` + circle(c, X(0), ly[1], 6, { fill: C.fg }) + text(c, X(0) + 14, ly[1] - 10, t.push.sent, { size: 12.5, fill: C.fg70 }) + '</g>';
  css.push(`@keyframes ${P}-wait{0%,26%{stroke-dashoffset:1}50%,100%{stroke-dashoffset:0}}`);
  s += `<line x1="${c.X(X(0))}" y1="${ly[1]}" x2="${c.X(X(10))}" y2="${ly[1]}" stroke="${C.line2}" stroke-width="2" stroke-dasharray="1" pathLength="1" stroke-dashoffset="0" class="${P}-a" style="animation:${P}-wait ${LOOP}s linear infinite"/>`;
  s += `<g${appear(0.5)}>` + circle(c, X(10), ly[1], 6, { fill: C.bg, stroke: C.accent, sw: 2 }) + text(c, X(10) + 14, ly[1] + 5, t.push.miss, { size: 12.5, fill: C.accent }) + '</g>';
  // fallback arrow push → whatsapp at 10 min
  s += `<g${appear(0.53)}>` + line(c, X(10), ly[1] + 8, X(10), ly[2] - 8, { stroke: C.accent, sw: 1.5 }) + `<path d="M ${c.X(X(10)) - 4} ${ly[2] - 14} L ${c.X(X(10))} ${ly[2] - 8} L ${c.X(X(10)) + 4} ${ly[2] - 14}" fill="none" stroke="${C.accent}" stroke-width="1.5"/>` + '</g>';
  // whatsapp: sent at 10, read at 10.5
  s += `<g${appear(0.56)}>` + circle(c, X(10), ly[2], 6, { fill: C.fg }) + text(c, X(10) - 14, ly[2] + 5, t.whatsapp.sent, { size: 12.5, fill: C.fg70, anchor: 'end' }) + '</g>';
  s += `<g${appear(0.64)}>` + line(c, X(10), ly[2], X(10.6), ly[2], { stroke: C.accent, sw: 2 }) + circle(c, X(10.6), ly[2], 7, { fill: C.accent }) + `<path d="M ${c.X(X(10.6)) - 3.5} ${ly[2]} L ${c.X(X(10.6)) - 1} ${ly[2] + 2.5} L ${c.X(X(10.6)) + 3.5} ${ly[2] - 2.5}" fill="none" stroke="${C.bg}" stroke-width="1.8"/>` + text(c, X(10.6) + 14, ly[2] - 12, t.whatsapp.read, { size: 12.5, fill: C.accent }) + '</g>';
  // sms: only if critical and whatsapp fails
  s += line(c, X(10.6), ly[3], X(12), ly[3], { stroke: C.fg35, dash: '3 5' });
  s += text(c, X(0), ly[3] + 5, t.sms.note, { size: 12.5, fill: C.fg35 });
  // 04 and 05 badges
  s += text(c, lx1 + 20, ly[1] + 5, t.badge04, { size: 11, font: 'mono', fill: C.fg35, letter: 2 });
  s += `<g${appear(0.64)}>` + text(c, lx1 + 20, ly[2] + 5, t.badge05, { size: 11, font: 'mono', fill: C.accent, letter: 2 }) + '</g>';

  // ── journal strip
  const jy = 520; const jh = 90;
  s += rect(c, 80, jy, 1040, jh, { stroke: C.line2, fill: C.fill });
  s += text(c, 96, jy + 24, t.journal.n, { size: 11, font: 'mono', fill: C.fg35, letter: 2 });
  s += text(c, 140, jy + 24, t.journal.label, { size: 13, fill: C.fg });
  const ats = [0.24, 0.25, 0.5, 0.56, 0.64];
  t.journal.lines.forEach((l, i) => {
    const col = i % 3; const row = Math.floor(i / 3);
    s += `<g${appear(ats[i])}>` + text(c, 96 + col * 340, jy + 52 + row * 22, l, { size: 12, font: 'mono', fill: i === 4 ? C.accent : C.fg70 }) + '</g>';
  });

  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){.${P}-a{animation:none !important}.${P}-m{display:none}}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    title: 'La vie d’un message « livreur en route », de l’événement au journal',
    alt: 'Un message traverse événement, règle et rendu, puis les quatre canaux : boîte in-app écrite à 0, push envoyé à 0 et non accusé à 10 minutes, WhatsApp envoyé à 10 minutes et lu à 10 minutes 30, SMS seulement si critique ; le journal écrit chaque étape.',
    event: { n: '01', label: 'L’événement', sub: 'livreur en route, client 4 812, commande 1 042' },
    rule: { n: '02', label: 'La règle', sub: 'push haute priorité, repli WhatsApp à 10 min, arabe' },
    render: { n: '03', label: 'Le rendu', sub: 'push 2 lignes, gabarit WhatsApp approuvé' },
    lanesTitle: '04 · L’envoi et le repli, minute par minute',
    t0: '0',
    inapp: { label: 'Boîte in-app', note: 'écrite avant tout envoi : la copie que le client retrouvera' },
    push: { label: 'Push', sent: 'envoyé, priorité haute', miss: 'non accusé à 10 min' },
    whatsapp: { label: 'WhatsApp', sent: 'envoyé', read: 'lu à 10 min 30' },
    sms: { label: 'SMS', note: 'seulement si le message est critique et que WhatsApp échoue' },
    badge04: '04', badge05: '05 ACCUSÉ',
    journal: { n: '06', label: 'Le journal, ligne par ligne', lines: ['14:02:00 in-app · écrit', '14:02:00 push · envoyé · 0 DA', '14:12:00 push · non accusé', '14:12:00 whatsapp · envoyé · utilitaire', '14:12:31 whatsapp · lu'] },
  },
  en: {
    title: 'The life of a “courier on the way” message, from event to log',
    alt: 'A message goes through event, rule and rendering, then the four channels: in-app inbox written at 0, push sent at 0 and not acknowledged at 10 minutes, WhatsApp sent at 10 minutes and read at 10 minutes 30, SMS only if critical; the log writes every step.',
    event: { n: '01', label: 'The event', sub: 'courier on the way, customer 4812, order 1042' },
    rule: { n: '02', label: 'The rule', sub: 'high-priority push, WhatsApp fallback at 10 min, Arabic' },
    render: { n: '03', label: 'The rendering', sub: '2-line push, approved WhatsApp template' },
    lanesTitle: '04 · Send and fallback, minute by minute',
    t0: '0',
    inapp: { label: 'In-app inbox', note: 'written before any send: the copy the customer will find' },
    push: { label: 'Push', sent: 'sent, high priority', miss: 'not acknowledged at 10 min' },
    whatsapp: { label: 'WhatsApp', sent: 'sent', read: 'read at 10 min 30' },
    sms: { label: 'SMS', note: 'only if the message is critical and WhatsApp fails' },
    badge04: '04', badge05: '05 RECEIPT',
    journal: { n: '06', label: 'The log, line by line', lines: ['14:02:00 in-app · written', '14:02:00 push · sent · 0 DA', '14:12:00 push · not acknowledged', '14:12:00 whatsapp · sent · utility', '14:12:31 whatsapp · read'] },
  },
  ar: {
    title: 'حياة رسالة «الموصّل في الطريق»، من الحدث إلى السجل',
    alt: 'رسالة تمر بالحدث والقاعدة والصياغة ثم القنوات الأربع: صندوق الوارد يُكتب عند 0، الإشعار الفوري يُرسل عند 0 ولا يُؤكَّد عند 10 دقائق، WhatsApp يُرسل عند 10 دقائق ويُقرأ عند 10 دقائق و30 ثانية، SMS فقط إن كانت حرجة؛ والسجل يكتب كل خطوة.',
    event: { n: '01', label: 'الحدث', sub: 'الموصّل في الطريق، الزبون 4812، الطلبية 1042' },
    rule: { n: '02', label: 'القاعدة', sub: 'إشعار بأولوية عالية، احتياط WhatsApp عند 10 د، عربية' },
    render: { n: '03', label: 'الصياغة', sub: 'إشعار من سطرين، قالب WhatsApp معتمد' },
    lanesTitle: '04 · الإرسال والاحتياط، دقيقة بدقيقة',
    t0: '0',
    inapp: { label: 'صندوق الوارد', note: 'يُكتب قبل أي إرسال: النسخة التي سيجدها الزبون' },
    push: { label: 'إشعار فوري', sent: 'أُرسل، أولوية عالية', miss: 'لم يُؤكَّد عند 10 د' },
    whatsapp: { label: 'WhatsApp', sent: 'أُرسل', read: 'قُرئ عند 10 د 30 ث' },
    sms: { label: 'SMS', note: 'فقط إن كانت الرسالة حرجة وفشل WhatsApp' },
    badge04: '04', badge05: '05 الاستلام',
    journal: { n: '06', label: 'السجل، سطراً سطراً', lines: ['14:02:00 صندوق الوارد · كُتب', '14:02:00 إشعار · أُرسل · 0 دج', '14:12:00 إشعار · لم يُؤكَّد', '14:12:00 whatsapp · أُرسل · نفعي', '14:12:31 whatsapp · قُرئ'] },
  },
};
