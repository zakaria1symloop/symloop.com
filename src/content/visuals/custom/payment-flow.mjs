// Bespoke animated figures for the 2027 online-payment integration post.
//  journey(): one payment travels through three lanes (customer's phone, your
//             server, gateway and bank): order created, hosted payment page,
//             card paid, browser return (a hint), server-side confirmation (the
//             truth), paid + receipt, then the bank statement line days later.
//             Stations appear in sequence and a token moves along the path.
//  states():  the order state machine; only server-confirmed events move the
//             state. The browser return is blocked, the duplicate webhook is
//             ignored, timeout expires, refusal fails, refund is its own state.
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

export function journey(t, rtl) {
  const c = ctx(rtl); const P = 'pj'; const css = []; const H = 585;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  const laneY = [150, 262, 374];
  // lanes
  t.lanes.forEach((l, i) => {
    const y = laneY[i];
    s += line(c, 250, y, 1120, y, { stroke: C.line, dash: '2 6' });
    s += text(c, 80, y - 6, l.name, { size: 12.5, fill: C.fg70 });
    s += text(c, 80, y + 12, l.sub, { size: 10.5, font: 'mono', fill: C.fg35 });
  });
  // stations
  const xs = [300, 458, 616, 774, 932, 1090];
  const pts = t.stations.map((st, i) => [xs[i], laneY[st.lane]]);
  // static path (dim) and mover
  const d = pts.map(([x, y], i) => `${i ? 'L' : 'M'} ${c.X(x)} ${y}`).join(' ');
  s += `<path d="${d}" fill="none" stroke="${C.line2}" stroke-width="1"/>`;
  const ats = t.stations.map((_, i) => 6 + i * 14);
  t.stations.forEach((st, i) => {
    const [x, y] = pts[i]; const at = ats[i];
    const hint = st.kind === 'hint'; const truth = st.kind === 'truth';
    const stroke = truth ? C.accent : hint ? C.fg35 : C.line2;
    s += `<g style="animation:${show(css, P, `s${i}`, at)}">`
      + circle(c, x, y, 19, { fill: C.bg, stroke, sw: truth ? 1.5 : 1 })
      + text(c, x, y + 4.5, String(i + 1), { size: 12.5, font: 'mono', fill: truth ? C.accent : hint ? C.fg55 : C.fg, anchor: 'middle' });
    const above = st.lane === 0 || (st.lane === 1 && i === 0);
    const ly = above ? y - 34 : y + 40;
    st.label.forEach((ln, k) => { s += text(c, x, ly + k * 15, ln, { size: 12, fill: truth ? C.accent : hint ? C.fg55 : C.fg, anchor: 'middle' }); });
    const ny = above ? ly - 16 - (st.label.length - 1) * 15 : ly + st.label.length * 15 + 2;
    s += text(c, x, ny, st.note, { size: 10, font: 'mono', fill: hint ? C.fg35 : truth ? C.accent : C.fg55, anchor: 'middle' });
    s += '</g>';
  });
  // mover token along the path
  const kf = pts.map((_, i) => `${ats[i].toFixed(1)}%{offset-distance:${(i / (pts.length - 1) * 100).toFixed(1)}%;opacity:1}`).join('');
  css.push(`@keyframes ${P}-mv{0%{offset-distance:0%;opacity:0}5%{opacity:1}${kf}${(ats[ats.length - 1] + 6).toFixed(1)}%,100%{offset-distance:100%;opacity:0}}`);
  s += `<circle r="6" fill="${C.accent}" opacity="0" style="offset-path:path('${d}');offset-rotate:0deg;animation:${P}-mv ${LOOP}s linear infinite"/>`;
  // bottom: the statement line and reconciliation
  const by = 515;
  s += `<g style="animation:${show(css, P, 'bank', 90)}">`
    + rect(c, 80, by - 22, 1040, 50, { stroke: C.line2, fill: C.fill })
    + text(c, 98, by, t.bank, { size: 13, fill: C.fg })
    + text(c, 98, by + 18, t.bank2, { size: 11, font: 'mono', fill: C.fg55 })
    + '</g>';
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"],svg circle[style*="${P}-"]{animation:none !important;opacity:1}}</style>`;
  return s + '</svg>';
}

export function states(t, rtl) {
  const c = ctx(rtl); const P = 'ps'; const css = []; const H = 470;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  const bw = 190; const bh = 60;
  const B = {
    created: { x: 80, y: 130 }, pending: { x: 356, y: 130 }, paid: { x: 632, y: 130 }, delivered: { x: 930, y: 130 },
    failed: { x: 140, y: 330 }, expired: { x: 400, y: 330 }, refunded: { x: 870, y: 330 },
  };
  Object.entries(B).forEach(([k, b]) => {
    const st = t.states[k]; const main = ['created', 'pending', 'paid', 'delivered'].includes(k);
    s += rect(c, b.x, b.y, bw, bh, { stroke: k === 'paid' ? C.accent : main ? C.line2 : C.line, fill: k === 'paid' ? 'rgba(242,181,68,0.06)' : main ? C.fill : 'none' });
    s += text(c, b.x + 14, b.y + 26, st.name, { size: 14.5, fill: k === 'paid' ? C.accent : main ? C.fg : C.fg70 });
    s += text(c, b.x + 14, b.y + 45, st.sub, { size: 10.5, font: 'mono', fill: C.fg55 });
  });
  const cy = (b) => b.y + bh / 2;
  const lab = (x, y, str, o = {}) => text(c, x, y, str, { size: 10.5, font: 'mono', fill: o.fill || C.fg55, anchor: o.anchor || 'middle' });
  // happy path: arrows in the gaps, event labels in the free band above the boxes
  const hp = [['created', 'pending', 8], ['pending', 'paid', 22], ['paid', 'delivered', 36]];
  hp.forEach(([a, b, at], i) => {
    const A = B[a]; const Bb = B[b];
    s += `<g style="animation:${show(css, P, `h${i}`, at)}">`
      + arrow(c, A.x + bw + 2, cy(A), Bb.x - 2, cy(Bb), { stroke: b === 'paid' ? C.accent : C.fg70, sw: 1.2 })
      + lab((A.x + bw + Bb.x) / 2, A.y - 12, t.events[i], { fill: b === 'paid' ? C.accent : C.fg70 })
      + '</g>';
  });
  // the browser return: blocked
  const rx = 620; const ry = 250;
  s += `<g style="animation:${show(css, P, 'ret', 48)}">`
    + text(c, rx, ry, t.ret, { size: 11.5, fill: C.fg70, anchor: 'middle' })
    + text(c, rx, ry + 15, t.retSub, { size: 10, font: 'mono', fill: C.fg35, anchor: 'middle' })
    + arrow(c, rx + 40, ry - 16, B.paid.x + 68, B.paid.y + bh + 4, { stroke: C.fg35, dash: '4 4' })
    + '</g>';
  s += `<g style="animation:${show(css, P, 'retx', 55)}">`
    + circle(c, B.paid.x + 80, B.paid.y + bh + 22, 11, { fill: C.bg, stroke: C.fg55 })
    + text(c, B.paid.x + 80, B.paid.y + bh + 26.5, '✕', { size: 12, fill: C.fg, anchor: 'middle' })
    + text(c, B.paid.x + 96, B.paid.y + bh + 26, t.retNo, { size: 10.5, font: 'mono', fill: C.fg55 })
    + '</g>';
  // duplicate webhook: loop above the paid box, label in the free band
  const lx = B.paid.x + bw - 30; const ly = B.paid.y - 2;
  s += `<g style="animation:${show(css, P, 'dup', 64)}">`
    + `<path d="M ${c.X(lx)} ${ly} C ${c.X(lx + 10)} ${ly - 42}, ${c.X(lx - 60)} ${ly - 42}, ${c.X(lx - 50)} ${ly}" fill="none" stroke="${C.accent}" stroke-width="1" stroke-dasharray="3 3"/>`
    + lab(B.paid.x + bw + 14, B.paid.y - 46, t.dup[0], { fill: C.accent, anchor: 'start' })
    + lab(B.paid.x + bw + 14, B.paid.y - 32, t.dup[1], { fill: C.accent, anchor: 'start' })
    + '</g>';
  // failure and expiry from pending
  const pend = B.pending;
  s += `<g style="animation:${show(css, P, 'fail', 74)}">`
    + arrow(c, pend.x + 40, pend.y + bh + 2, B.failed.x + 95, B.failed.y - 2, { stroke: C.fg55 })
    + lab(300, 250, t.fail, { anchor: 'end' })
    + '</g>';
  s += `<g style="animation:${show(css, P, 'exp', 82)}">`
    + arrow(c, pend.x + bw - 40, pend.y + bh + 2, B.expired.x + 95, B.expired.y - 2, { stroke: C.fg55 })
    + lab(515, 300, t.exp, { anchor: 'start' })
    + '</g>';
  // refund from delivered (and paid)
  s += `<g style="animation:${show(css, P, 'ref', 90)}">`
    + arrow(c, B.delivered.x + 30, B.delivered.y + bh + 2, B.refunded.x + 95, B.refunded.y - 2, { stroke: C.fg55 })
    + lab(980, 270, t.refund, { anchor: 'start' })
    + '</g>';
  s += `<g style="animation:${show(css, P, 'rule', 96)}">` + text(c, 80, 440, t.rule, { size: 13, fill: C.fg }) + '</g>';
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

const I = (x) => `⁦${x}⁩`;
const N = ' ';

export const STRINGS = {
  fr: {
    journey: {
      title: 'Un paiement en ligne, de l’écran du client au relevé de la banque',
      alt: 'Un paiement traverse trois couloirs : le téléphone du client, votre serveur, la passerelle et la banque. Six stations : la commande est créée en attente sur votre serveur ; le client est envoyé sur la page de paiement de la passerelle ; il paie par carte CIB ou Edahabia ; le navigateur revient sur votre site, ce qui n’est qu’un indice ; votre serveur demande à la passerelle le statut réel, ce qui est la preuve ; la commande passe à payée et le reçu part. Quelques jours plus tard, une ligne apparaît sur le relevé de la banque acquéreur et le rapprochement la relie à la commande.',
      lanes: [
        { name: 'Téléphone du client', sub: 'navigateur ou application' },
        { name: 'Votre serveur', sub: 'commande, états, journal' },
        { name: 'Passerelle et banque', sub: 'SATIM ou agrégateur · banque acquéreur' },
      ],
      stations: [
        { lane: 1, label: ['Commande créée'], note: 'en attente · n° 2027-0418 · 8 500 DA', kind: 'normal' },
        { lane: 2, label: ['Page de paiement', 'de la passerelle'], note: 'montant envoyé par votre serveur', kind: 'normal' },
        { lane: 0, label: ['Le client paie'], note: 'carte CIB ou Edahabia, code OTP', kind: 'normal' },
        { lane: 0, label: ['Retour sur', 'votre site'], note: 'un indice, pas une preuve', kind: 'hint' },
        { lane: 1, label: ['Confirmation', 'serveur → passerelle'], note: 'statut lu à la source : payé', kind: 'truth' },
        { lane: 1, label: ['Payée · reçu envoyé'], note: 'WhatsApp + e-mail · stock réservé', kind: 'normal' },
      ],
      bank: 'J + 1 à J + 3 : une ligne de 8 500 DA apparaît sur le relevé de la banque acquéreur, nette ou avant commission selon le contrat.',
      bank2: 'rapprochement automatique : ligne du relevé ↔ commande 2027-0418 ; ce qui ne se relie pas remonte dans une liste lue chaque semaine',
    },
    states: {
      title: 'Les états d’une commande, et les seuls événements qui les font changer',
      alt: 'Machine à états d’une commande : créée, en attente de paiement, payée, livrée en haut ; échouée, expirée, remboursée en bas. Les flèches portent l’événement qui fait changer l’état : commande validée côté serveur, statut confirmé par la passerelle, livraison scannée. Le retour du navigateur vers votre site est barré : il ne change pas l’état. Un webhook reçu deux fois revient sur le même état sans rien écrire. Un refus de la passerelle mène à échouée, trente minutes sans confirmation à expirée, un remboursement confirmé à remboursée.',
      states: {
        created: { name: 'Créée', sub: 'panier figé, montant calculé' },
        pending: { name: 'En attente de paiement', sub: 'page de paiement ouverte' },
        paid: { name: 'Payée', sub: 'statut confirmé, reçu envoyé' },
        delivered: { name: 'Livrée', sub: 'ou service rendu' },
        failed: { name: 'Échouée', sub: 'refus de la banque' },
        expired: { name: 'Expirée', sub: 'délai dépassé, stock libéré' },
        refunded: { name: 'Remboursée', sub: 'total ou partiel, daté' },
      },
      events: ['commande validée côté serveur', 'statut « payé » lu chez la passerelle', 'livraison scannée'],
      ret: 'Le navigateur revient sur /succes', retSub: 'avec un numéro de commande dans l’URL', retNo: 'ne change pas l’état',
      dup: ['webhook reçu deux fois →', 'déjà payée, rien n’est écrit'],
      fail: 'refus de la passerelle', exp: '30 min sans confirmation', refund: 'remboursement confirmé',
      rule: 'Règle : un état ne change que sur un événement vérifié par votre serveur, jamais sur ce que le navigateur du client raconte.',
    },
  },
  en: {
    journey: {
      title: 'One online payment, from the customer’s screen to the bank statement',
      alt: 'A payment crosses three lanes: the customer’s phone, your server, the gateway and bank. Six stations: the order is created as pending on your server; the customer is sent to the gateway’s payment page; they pay with a CIB or Edahabia card; the browser returns to your site, which is only a hint; your server asks the gateway for the real status, which is the proof; the order becomes paid and the receipt goes out. A few days later a line appears on the acquiring bank’s statement and reconciliation links it to the order.',
      lanes: [
        { name: 'Customer’s phone', sub: 'browser or app' },
        { name: 'Your server', sub: 'order, states, log' },
        { name: 'Gateway and bank', sub: 'SATIM or aggregator · acquiring bank' },
      ],
      stations: [
        { lane: 1, label: ['Order created'], note: 'pending · no. 2027-0418 · 8,500 DA', kind: 'normal' },
        { lane: 2, label: ['Gateway’s', 'payment page'], note: 'amount sent by your server', kind: 'normal' },
        { lane: 0, label: ['Customer pays'], note: 'CIB or Edahabia card, OTP code', kind: 'normal' },
        { lane: 0, label: ['Return to', 'your site'], note: 'a hint, not a proof', kind: 'hint' },
        { lane: 1, label: ['Confirmation', 'server → gateway'], note: 'status read at the source: paid', kind: 'truth' },
        { lane: 1, label: ['Paid · receipt sent'], note: 'WhatsApp + e-mail · stock reserved', kind: 'normal' },
      ],
      bank: 'D + 1 to D + 3: a line of 8,500 DA appears on the acquiring bank’s statement, net or before fees depending on the contract.',
      bank2: 'automatic reconciliation: statement line ↔ order 2027-0418; whatever does not match goes to a list read every week',
    },
    states: {
      title: 'An order’s states, and the only events that change them',
      alt: 'Order state machine: created, awaiting payment, paid, delivered on top; failed, expired, refunded below. Arrows carry the event that changes the state: order validated server-side, status confirmed by the gateway, delivery scanned. The browser’s return to your site is crossed out: it does not change the state. A webhook received twice lands on the same state without writing anything. A gateway refusal leads to failed, thirty minutes without confirmation to expired, a confirmed refund to refunded.',
      states: {
        created: { name: 'Created', sub: 'basket frozen, amount computed' },
        pending: { name: 'Awaiting payment', sub: 'payment page open' },
        paid: { name: 'Paid', sub: 'status confirmed, receipt sent' },
        delivered: { name: 'Delivered', sub: 'or service rendered' },
        failed: { name: 'Failed', sub: 'bank refusal' },
        expired: { name: 'Expired', sub: 'time out, stock released' },
        refunded: { name: 'Refunded', sub: 'full or partial, dated' },
      },
      events: ['order validated server-side', '“paid” status read at the gateway', 'delivery scanned'],
      ret: 'Browser returns to /success', retSub: 'with an order number in the URL', retNo: 'does not change the state',
      dup: ['webhook received twice →', 'already paid, nothing written'],
      fail: 'gateway refusal', exp: '30 min without confirmation', refund: 'refund confirmed',
      rule: 'Rule: a state changes only on an event verified by your server, never on what the customer’s browser says.',
    },
  },
  ar: {
    journey: {
      title: 'دفعة إلكترونية واحدة، من شاشة الزبون إلى كشف البنك',
      alt: 'تعبر الدفعة ثلاثة مسارات: هاتف الزبون، خادمكم، البوابة والبنك. ست محطات: تُنشأ الطلبية معلَّقة على خادمكم؛ يُرسل الزبون إلى صفحة دفع البوابة؛ يدفع ببطاقة CIB أو الذهبية؛ يعود المتصفح إلى موقعكم وهو مجرد إشارة؛ يسأل خادمكم البوابة عن الحالة الحقيقية وهي الدليل؛ تصير الطلبية مدفوعة ويُرسل الوصل. وبعد أيام يظهر سطر في كشف البنك المستحوذ وتربطه المطابقة بالطلبية.',
      lanes: [
        { name: 'هاتف الزبون', sub: 'متصفح أو تطبيق' },
        { name: 'خادمكم', sub: 'الطلبية، الحالات، السجل' },
        { name: 'البوابة والبنك', sub: `${I('SATIM')} أو مجمّع · البنك المستحوذ` },
      ],
      stations: [
        { lane: 1, label: ['إنشاء الطلبية'], note: `معلَّقة · رقم ${I('2027-0418')} · ${I('8' + N + '500')} دج`, kind: 'normal' },
        { lane: 2, label: ['صفحة دفع', 'البوابة'], note: 'المبلغ يرسله خادمكم', kind: 'normal' },
        { lane: 0, label: ['الزبون يدفع'], note: `بطاقة ${I('CIB')} أو الذهبية، رمز ${I('OTP')}`, kind: 'normal' },
        { lane: 0, label: ['العودة إلى', 'موقعكم'], note: 'إشارة، لا دليل', kind: 'hint' },
        { lane: 1, label: ['التأكيد', 'الخادم ← البوابة'], note: 'الحالة تُقرأ من المصدر: مدفوع', kind: 'truth' },
        { lane: 1, label: ['مدفوعة · أُرسل الوصل'], note: `${I('WhatsApp')} + بريد · المخزون محجوز`, kind: 'normal' },
      ],
      bank: `بعد يوم إلى ثلاثة أيام: يظهر سطر بـ ${I('8' + N + '500')} دج في كشف البنك المستحوذ، صافياً أو قبل العمولة حسب العقد.`,
      bank2: `مطابقة آلية: سطر الكشف ↔ الطلبية ${I('2027-0418')}؛ وما لا يتطابق يصعد إلى قائمة تُقرأ كل أسبوع`,
    },
    states: {
      title: 'حالات الطلبية، والأحداث الوحيدة التي تغيّرها',
      alt: 'آلة حالات الطلبية: أُنشئت، في انتظار الدفع، مدفوعة، مسلَّمة في الأعلى؛ فاشلة، منتهية، مستردَّة في الأسفل. تحمل الأسهم الحدث الذي يغيّر الحالة: الطلبية صودق عليها في الخادم، الحالة أكدتها البوابة، التسليم مُسح. وعودة المتصفح إلى موقعكم مشطوبة: لا تغيّر الحالة. والـ webhook المستلَم مرتين يعود إلى الحالة نفسها دون كتابة. ورفض البوابة يؤدي إلى فاشلة، وثلاثون دقيقة بلا تأكيد إلى منتهية، واسترداد مؤكَّد إلى مستردَّة.',
      states: {
        created: { name: 'أُنشئت', sub: 'السلة مجمَّدة، المبلغ محسوب' },
        pending: { name: 'في انتظار الدفع', sub: 'صفحة الدفع مفتوحة' },
        paid: { name: 'مدفوعة', sub: 'الحالة مؤكَّدة، الوصل مُرسَل' },
        delivered: { name: 'مسلَّمة', sub: 'أو الخدمة مقدَّمة' },
        failed: { name: 'فاشلة', sub: 'رفض من البنك' },
        expired: { name: 'منتهية', sub: 'انقضى الأجل، حُرر المخزون' },
        refunded: { name: 'مستردَّة', sub: 'كلياً أو جزئياً، مؤرَّخة' },
      },
      events: ['صودق على الطلبية في الخادم', 'حالة «مدفوع» قُرئت عند البوابة', 'التسليم مُسح'],
      ret: `المتصفح يعود إلى ${I('/succes')}`, retSub: 'برقم طلبية في الرابط', retNo: 'لا يغيّر الحالة',
      dup: [`${I('webhook')} مرتين ←`, 'مدفوعة سلفاً، لا كتابة'],
      fail: 'رفض البوابة', exp: `${I('30')} دقيقة بلا تأكيد`, refund: 'استرداد مؤكَّد',
      rule: 'القاعدة: لا تتغير الحالة إلا بحدث يتحقق منه خادمكم، لا بما يرويه متصفح الزبون أبداً.',
    },
  },
};
