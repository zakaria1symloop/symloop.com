// Bespoke animated figures for the 2027 partner-API post.
//  gate():    three partner calls travelling through the same chain of gates
//             (TLS, key, rights, quota, schema, idempotency) before reaching
//             your service: one passes, one is refused for rights (403), one is
//             refused for quota (429 with Retry-After). Tokens move gate by gate.
//  webhook(): one event delivered to a partner: three attempts over time
//             (timeout, 500, 200), the signed header, the partner deduplicating
//             by event id, the three-day retry window and a manual replay.
// CSS-only animation (prefers-reduced-motion disables it); base attributes are
// the finished state for the JPG rasteriser.
import { W, C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }

export function gate(t, rtl) {
  const c = ctx(rtl); const P = 'pg'; const css = []; const H = 560;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  // gates across the top
  const gx0 = 330; const gx1 = 1120; const n = t.gates.length; const gw = (gx1 - gx0) / n;
  const gy = 100; const gh = 70;
  t.gates.forEach((g, i) => {
    const x = gx0 + i * gw;
    s += rect(c, x + 4, gy, gw - 8, gh, { stroke: C.line2, fill: C.fill });
    s += text(c, x + gw / 2, gy + 26, g.name, { size: 12.5, fill: C.fg, anchor: 'middle' });
    s += text(c, x + gw / 2, gy + 46, g.sub, { size: 10, font: 'mono', fill: C.fg55, anchor: 'middle' });
  });
  s += text(c, 80, gy + 30, t.gatesLabel, { size: 11, font: 'mono', fill: C.fg35, letter: 2, upper: true });
  s += text(c, 80, gy + 48, t.gatesLabel2, { size: 10.5, font: 'mono', fill: C.fg35 });
  // three calls as rows
  const rows = [210, 320, 430];
  t.calls.forEach((k, r) => {
    const y = rows[r]; const at = 6 + r * 30;
    // partner card
    s += rect(c, 80, y - 34, 230, 70, { stroke: C.line2 });
    s += text(c, 96, y - 12, k.partner, { size: 12.5, fill: C.fg });
    s += text(c, 96, y + 6, k.request, { size: 10.5, font: 'mono', fill: C.fg70 });
    s += text(c, 96, y + 24, k.key, { size: 10, font: 'mono', fill: C.fg35 });
    // lane
    s += line(c, 310, y, gx1, y, { stroke: C.line, dash: '2 6' });
    // gate verdict dots along the lane
    const stopAt = k.stop; // index of the gate that refuses, or -1
    t.gates.forEach((g, i) => {
      const x = gx0 + i * gw + gw / 2;
      if (stopAt >= 0 && i > stopAt) return;
      const refused = i === stopAt;
      const dAt = at + 3 + i * 3;
      s += `<g style="animation:${show(css, P, `d${r}${i}`, dAt)}">`
        + circle(c, x, y, refused ? 10 : 6, { fill: refused ? C.bg : C.fg, stroke: refused ? C.accent : 'none', sw: 1.5 })
        + (refused ? text(c, x, y + 4, '✕', { size: 11, fill: C.accent, anchor: 'middle' }) : '')
        + '</g>';
    });
    // mover
    const endX = stopAt >= 0 ? gx0 + stopAt * gw + gw / 2 : gx1 - 10;
    const d = `M ${c.X(310)} ${y} L ${c.X(endX)} ${y}`;
    const dur = 3 + (stopAt >= 0 ? stopAt : n) * 3;
    css.push(`@keyframes ${P}-m${r}{0%,${at.toFixed(1)}%{offset-distance:0%;opacity:0}${(at + 1).toFixed(1)}%{opacity:1}${(at + dur).toFixed(1)}%{offset-distance:100%;opacity:1}${(at + dur + 1).toFixed(1)}%,100%{offset-distance:100%;opacity:0}}`);
    s += `<circle r="6" fill="${C.accent}" opacity="0" style="offset-path:path('${d}');offset-rotate:0deg;animation:${P}-m${r} ${LOOP}s linear infinite"/>`;
    // verdict
    const vx = stopAt >= 0 ? gx0 + stopAt * gw + gw / 2 : gx1;
    s += `<g style="animation:${show(css, P, `v${r}`, at + dur + 1)}">`
      + text(c, stopAt >= 0 ? vx : vx, y + 34, k.verdict, { size: 11.5, fill: stopAt >= 0 ? C.accent : C.fg, anchor: stopAt >= 0 ? 'middle' : 'end' })
      + text(c, stopAt >= 0 ? vx : vx, y + 50, k.verdict2, { size: 10, font: 'mono', fill: C.fg55, anchor: stopAt >= 0 ? 'middle' : 'end' })
      + '</g>';
  });
  // rule
  s += `<g style="animation:${show(css, P, 'rule', 95)}">` + text(c, 80, 525, t.rule, { size: 13, fill: C.fg }) + '</g>';
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"],svg circle[style*="${P}-"]{animation:none !important;opacity:1}}</style>`;
  return s + '</svg>';
}

export function webhook(t, rtl) {
  const c = ctx(rtl); const P = 'pw'; const css = []; const H = 540;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  // event card
  s += rect(c, 80, 96, 1040, 64, { stroke: C.accent, fill: 'rgba(242,181,68,0.05)' });
  s += text(c, 98, 120, t.eventLabel, { size: 11, font: 'mono', fill: C.accent, letter: 2, upper: true });
  s += text(c, 98, 144, t.event, { size: 13, font: 'mono', fill: C.fg });
  s += text(c, 1102, 144, t.eventRight, { size: 11, font: 'mono', fill: C.fg55, anchor: 'end' });
  // time axis
  const ay = 215; const x0 = 300; const x1 = 1120;
  s += line(c, x0, ay, x1, ay, { stroke: C.line2 });
  s += text(c, 80, ay + 4, t.axisLabel, { size: 12.5, fill: C.fg });
  s += text(c, 80, ay + 22, t.axisSub, { size: 10.5, font: 'mono', fill: C.fg55 });
  t.ticks.forEach((tk) => {
    const x = x0 + tk.pos * (x1 - x0);
    s += line(c, x, ay - 4, x, ay + 4, { stroke: C.line2 });
    s += text(c, x, ay - 12, tk.label, { size: 10, font: 'mono', fill: C.fg35, anchor: 'middle' });
  });
  // attempts
  t.attempts.forEach((a, i) => {
    const x = x0 + a.pos * (x1 - x0); const at = 8 + i * 18; const ok = a.ok;
    s += `<g style="animation:${show(css, P, `a${i}`, at)}">`
      + line(c, x, ay, x, ay + 40, { stroke: ok ? C.accent : C.fg35, dash: ok ? '' : '3 3' })
      + circle(c, x, ay + 52, 12, { fill: ok ? C.accent : C.bg, stroke: ok ? C.accent : C.fg55, sw: 1.2 })
      + text(c, x, ay + 56, ok ? '✓' : '✕', { size: 12, fill: ok ? C.bg : C.fg70, anchor: 'middle' })
      + text(c, x, ay + 84, a.label, { size: 11.5, fill: ok ? C.accent : C.fg, anchor: 'middle' })
      + text(c, x, ay + 100, a.sub, { size: 10, font: 'mono', fill: C.fg55, anchor: 'middle' })
      + '</g>';
  });
  // signed header card (left bottom) and partner handling (right bottom)
  const by = 350;
  s += `<g style="animation:${show(css, P, 'hdr', 62)}">`
    + rect(c, 80, by, 500, 120, { stroke: C.line2 })
    + text(c, 96, by + 24, t.hdrLabel, { size: 11, font: 'mono', fill: C.fg35, letter: 2, upper: true })
    + t.hdr.map((l, i) => text(c, 96, by + 48 + i * 20, l, { size: 11.5, font: 'mono', fill: i === 0 ? C.fg : C.fg70 })).join('')
    + '</g>';
  s += `<g style="animation:${show(css, P, 'prt', 74)}">`
    + rect(c, 620, by, 500, 120, { stroke: C.line2, fill: C.fill })
    + text(c, 636, by + 24, t.prtLabel, { size: 11, font: 'mono', fill: C.fg35, letter: 2, upper: true })
    + t.prt.map((l, i) => text(c, 636, by + 48 + i * 20, l, { size: 11.5, fill: C.fg70 })).join('')
    + '</g>';
  s += `<g style="animation:${show(css, P, 'rule', 92)}">` + text(c, 80, 508, t.rule, { size: 13, fill: C.fg }) + '</g>';
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

const I = (x) => `⁦${x}⁩`;

export const STRINGS = {
  fr: {
    gate: {
      title: 'Trois appels de partenaires, une seule chaîne de portes avant votre service',
      alt: 'Six portes en haut : connexion chiffrée, clé ou jeton, droits, quota, schéma, idempotence, puis votre service. Trois appels en dessous. Le transporteur lit les commandes à expédier avec sa clé : il passe toutes les portes et reçoit 200 avec 48 commandes, l’appel est journalisé. Le gros client veut modifier un prix : il est arrêté à la porte des droits, 403, son rôle ne permet que de créer des commandes et de lire ses factures. L’application de caisse envoie son six cent unième appel de la minute : arrêtée à la porte du quota, 429 avec Retry-After de 12 secondes. Règle : le partenaire ne voit jamais votre service, il voit les portes.',
      gatesLabel: 'Les portes, dans l’ordre', gatesLabel2: 'identiques pour tous les partenaires',
      gates: [
        { name: 'Connexion chiffrée', sub: 'TLS, domaine api.' },
        { name: 'Clé ou jeton', sub: 'par partenaire, révocable' },
        { name: 'Droits', sub: 'lire / écrire, par ressource' },
        { name: 'Quota', sub: 'par minute, par jour' },
        { name: 'Schéma', sub: 'champs typés, version' },
        { name: 'Idempotence', sub: 'clé par écriture' },
      ],
      calls: [
        { partner: 'Transporteur', request: 'GET /v1/commandes?statut=a_expedier', key: 'clé prod · droits : commandes.lire, livraisons.ecrire', stop: -1, verdict: '200 · 48 commandes à expédier', verdict2: 'journal : partenaire, route, 120 ms' },
        { partner: 'Gros client B2B', request: 'PATCH /v1/produits/318/prix', key: 'clé prod · droits : commandes.creer, factures.lire', stop: 2, verdict: '403 · hors droits', verdict2: 'tentative journalisée, le partenaire est prévenu' },
        { partner: 'Application de caisse', request: 'POST /v1/ventes · 601e appel de la minute', key: 'clé prod · quota : 600 / min', stop: 3, verdict: '429 · quota dépassé', verdict2: 'Retry-After : 12 s · rien n’est perdu, il réessaie' },
      ],
      rule: 'Règle : le partenaire ne voit jamais votre service ni votre base ; il voit six portes, les mêmes pour tous, et chaque passage ou refus laisse une ligne.',
    },
    webhook: {
      title: 'Un événement livré au partenaire : signé, réessayé, acquitté, rejouable',
      alt: 'Un événement commande.expediee, identifiant evt_7f3a, créé à 10 h 02, destiné au transporteur. Trois tentatives sur un axe de temps : à 10 h 02, délai dépassé ; à 10 h 03, le serveur du partenaire répond 500 ; à 10 h 12, il répond 200 et la livraison est acquittée. En bas à gauche, l’en-tête signé : identifiant de l’événement, horodatage, signature HMAC-SHA256 calculée avec le secret du partenaire. En bas à droite, ce que fait le partenaire : vérifier la signature, rejeter un horodatage de plus de cinq minutes, répondre 200 avant de traiter, ignorer un identifiant déjà vu, et rejouer depuis le portail jusqu’à trois jours.',
      eventLabel: 'Événement à livrer', event: 'commande.expediee · evt_7f3a · commande 2027-0418 · 10 h 02', eventRight: 'destinataire : transporteur · https://api.transporteur.dz/hooks',
      axisLabel: 'Tentatives', axisSub: 'écart croissant, jusqu’à 3 jours',
      ticks: [{ pos: 0.02, label: '10 h 02' }, { pos: 0.18, label: '10 h 03' }, { pos: 0.5, label: '10 h 12' }, { pos: 0.78, label: '+ 1 h' }, { pos: 0.98, label: '+ 3 j' }],
      attempts: [
        { pos: 0.02, ok: false, label: 'Délai dépassé', sub: 'aucune réponse en 10 s' },
        { pos: 0.18, ok: false, label: 'Erreur 500', sub: 'le partenaire redémarrait' },
        { pos: 0.5, ok: true, label: 'Acquitté · 200', sub: 'livré en 3 tentatives' },
      ],
      hdrLabel: 'En-tête signé, à chaque tentative', hdr: ['X-Event-Id: evt_7f3a', 'X-Event-Timestamp: 1798884120', 'X-Signature: v1=hmac_sha256(secret, timestamp.corps)', 'secret par partenaire · rotation avec 24 h de recouvrement'],
      prtLabel: 'Ce que fait le partenaire', prt: ['vérifie la signature sur le corps brut, rejette un horodatage > 5 min', 'répond 200 tout de suite, traite ensuite', 'ignore un identifiant déjà vu : la livraison en double ne change rien', 'rejoue depuis son portail ce qu’il a manqué, jusqu’à 3 jours'],
      rule: 'Règle : un webhook est une tentative, pas une vérité ; le partenaire peut toujours relire l’état par l’API, et vous gardez chaque livraison, réussie ou non.',
    },
  },
  en: {
    gate: {
      title: 'Three partner calls, one chain of gates before your service',
      alt: 'Six gates on top: encrypted connection, key or token, rights, quota, schema, idempotency, then your service. Three calls below. The carrier reads the orders to ship with its key: it passes every gate and receives 200 with 48 orders, the call is logged. The big client wants to change a price: it is stopped at the rights gate, 403, its role only allows creating orders and reading its invoices. The point-of-sale application sends its 601st call of the minute: stopped at the quota gate, 429 with Retry-After 12 seconds. Rule: the partner never sees your service, it sees the gates.',
      gatesLabel: 'The gates, in order', gatesLabel2: 'identical for every partner',
      gates: [
        { name: 'Encrypted connection', sub: 'TLS, api. domain' },
        { name: 'Key or token', sub: 'per partner, revocable' },
        { name: 'Rights', sub: 'read / write, per resource' },
        { name: 'Quota', sub: 'per minute, per day' },
        { name: 'Schema', sub: 'typed fields, version' },
        { name: 'Idempotency', sub: 'key per write' },
      ],
      calls: [
        { partner: 'Carrier', request: 'GET /v1/orders?status=to_ship', key: 'prod key · rights: orders.read, deliveries.write', stop: -1, verdict: '200 · 48 orders to ship', verdict2: 'log: partner, route, 120 ms' },
        { partner: 'Big B2B client', request: 'PATCH /v1/products/318/price', key: 'prod key · rights: orders.create, invoices.read', stop: 2, verdict: '403 · out of rights', verdict2: 'attempt logged, the partner is notified' },
        { partner: 'Point-of-sale app', request: 'POST /v1/sales · 601st call this minute', key: 'prod key · quota: 600 / min', stop: 3, verdict: '429 · quota exceeded', verdict2: 'Retry-After: 12 s · nothing lost, it retries' },
      ],
      rule: 'Rule: the partner never sees your service or your database; it sees six gates, the same for everyone, and every pass or refusal leaves a line.',
    },
    webhook: {
      title: 'One event delivered to a partner: signed, retried, acknowledged, replayable',
      alt: 'An order.shipped event, id evt_7f3a, created at 10:02, for the carrier. Three attempts on a time axis: at 10:02, timeout; at 10:03, the partner’s server answers 500; at 10:12, it answers 200 and the delivery is acknowledged. Bottom left, the signed header: event id, timestamp, HMAC-SHA256 signature computed with the partner’s secret. Bottom right, what the partner does: verify the signature, reject a timestamp older than five minutes, answer 200 before processing, ignore an id already seen, and replay from the portal for up to three days.',
      eventLabel: 'Event to deliver', event: 'order.shipped · evt_7f3a · order 2027-0418 · 10:02', eventRight: 'recipient: carrier · https://api.carrier.dz/hooks',
      axisLabel: 'Attempts', axisSub: 'growing gap, up to 3 days',
      ticks: [{ pos: 0.02, label: '10:02' }, { pos: 0.18, label: '10:03' }, { pos: 0.5, label: '10:12' }, { pos: 0.78, label: '+ 1 h' }, { pos: 0.98, label: '+ 3 d' }],
      attempts: [
        { pos: 0.02, ok: false, label: 'Timeout', sub: 'no answer in 10 s' },
        { pos: 0.18, ok: false, label: 'Error 500', sub: 'the partner was restarting' },
        { pos: 0.5, ok: true, label: 'Acknowledged · 200', sub: 'delivered in 3 attempts' },
      ],
      hdrLabel: 'Signed header, on every attempt', hdr: ['X-Event-Id: evt_7f3a', 'X-Event-Timestamp: 1798884120', 'X-Signature: v1=hmac_sha256(secret, timestamp.body)', 'secret per partner · rotation with 24 h overlap'],
      prtLabel: 'What the partner does', prt: ['verifies the signature on the raw body, rejects a timestamp > 5 min', 'answers 200 right away, processes afterwards', 'ignores an id already seen: a duplicate delivery changes nothing', 'replays what it missed from its portal, up to 3 days'],
      rule: 'Rule: a webhook is an attempt, not a truth; the partner can always re-read the state through the API, and you keep every delivery, successful or not.',
    },
  },
  ar: {
    gate: {
      title: 'ثلاثة استدعاءات من شركاء، سلسلة أبواب واحدة قبل خدمتكم',
      alt: 'ستة أبواب في الأعلى: اتصال مشفَّر، مفتاح أو رمز، حقوق، حصة، مخطط، عدم تكرار، ثم خدمتكم. ثلاثة استدعاءات تحتها. الناقل يقرأ الطلبيات الجاهزة للشحن بمفتاحه: يمر بكل الأبواب ويتلقى 200 مع 48 طلبية، والاستدعاء مسجَّل. الزبون الكبير يريد تعديل سعر: يُوقَف عند باب الحقوق، 403، دوره يسمح فقط بإنشاء طلبيات وقراءة فواتيره. تطبيق الصندوق يرسل استدعاءه الـ 601 في الدقيقة: يُوقَف عند باب الحصة، 429 مع Retry-After 12 ثانية. القاعدة: الشريك لا يرى خدمتكم أبداً، يرى الأبواب.',
      gatesLabel: 'الأبواب، بالترتيب', gatesLabel2: 'متطابقة لكل الشركاء',
      gates: [
        { name: 'اتصال مشفَّر', sub: `${I('TLS')}، نطاق ${I('api.')}` },
        { name: 'مفتاح أو رمز', sub: 'لكل شريك، قابل للإلغاء' },
        { name: 'الحقوق', sub: 'قراءة / كتابة، لكل مورد' },
        { name: 'الحصة', sub: 'في الدقيقة، في اليوم' },
        { name: 'المخطط', sub: 'حقول منمَّطة، نسخة' },
        { name: 'عدم التكرار', sub: 'مفتاح لكل كتابة' },
      ],
      calls: [
        { partner: 'الناقل', request: I('GET /v1/commandes?statut=a_expedier'), key: `مفتاح إنتاج · حقوق: ${I('commandes.lire, livraisons.ecrire')}`, stop: -1, verdict: `${I('200')} · 48 طلبية للشحن`, verdict2: `السجل: الشريك، المسار، ${I('120 ms')}` },
        { partner: 'زبون كبير B2B', request: I('PATCH /v1/produits/318/prix'), key: `مفتاح إنتاج · حقوق: ${I('commandes.creer, factures.lire')}`, stop: 2, verdict: `${I('403')} · خارج الحقوق`, verdict2: 'المحاولة مسجَّلة، والشريك يُنبَّه' },
        { partner: 'تطبيق الصندوق', request: `${I('POST /v1/ventes')} · الاستدعاء 601 في الدقيقة`, key: `مفتاح إنتاج · حصة: ${I('600 / min')}`, stop: 3, verdict: `${I('429')} · تجاوز الحصة`, verdict2: `${I('Retry-After: 12 s')} · لا شيء يضيع، يعيد المحاولة` },
      ],
      rule: 'القاعدة: الشريك لا يرى خدمتكم ولا قاعدتكم أبداً؛ يرى ستة أبواب، هي نفسها للجميع، وكل مرور أو رفض يترك سطراً.',
    },
    webhook: {
      title: 'حدث يُسلَّم إلى شريك: موقَّع، مُعاد، مُقرّ به، قابل للإعادة',
      alt: 'حدث commande.expediee، المعرّف evt_7f3a، أُنشئ في 10:02، موجّه إلى الناقل. ثلاث محاولات على محور زمني: في 10:02 انقضت المهلة؛ في 10:03 أجاب خادم الشريك 500؛ في 10:12 أجاب 200 وأُقرّ بالتسليم. في الأسفل، الترويسة الموقَّعة: معرّف الحدث، الطابع الزمني، توقيع HMAC-SHA256 محسوب بسر الشريك. وما يفعله الشريك: يتحقق من التوقيع، يرفض طابعاً زمنياً أقدم من خمس دقائق، يجيب 200 قبل المعالجة، يتجاهل معرّفاً سبق رؤيته، ويعيد من البوابة حتى ثلاثة أيام.',
      eventLabel: 'حدث للتسليم', event: `${I('commande.expediee')} · ${I('evt_7f3a')} · الطلبية ${I('2027-0418')} · ${I('10:02')}`, eventRight: `المستلم: الناقل · ${I('https://api.transporteur.dz/hooks')}`,
      axisLabel: 'المحاولات', axisSub: 'فاصل متزايد، حتى 3 أيام',
      ticks: [{ pos: 0.02, label: I('10:02') }, { pos: 0.18, label: I('10:03') }, { pos: 0.5, label: I('10:12') }, { pos: 0.78, label: '+ 1 س' }, { pos: 0.98, label: '+ 3 أيام' }],
      attempts: [
        { pos: 0.02, ok: false, label: 'انقضت المهلة', sub: 'لا جواب في 10 ثوانٍ' },
        { pos: 0.18, ok: false, label: `خطأ ${I('500')}`, sub: 'كان الشريك يعيد التشغيل' },
        { pos: 0.5, ok: true, label: `مُقرّ به · ${I('200')}`, sub: 'سُلّم في 3 محاولات' },
      ],
      hdrLabel: 'ترويسة موقَّعة، في كل محاولة', hdr: [I('X-Event-Id: evt_7f3a'), I('X-Event-Timestamp: 1798884120'), I('X-Signature: v1=hmac_sha256(secret, timestamp.corps)'), 'سر لكل شريك · تدوير بتداخل 24 ساعة'],
      prtLabel: 'ما يفعله الشريك', prt: ['يتحقق من التوقيع على النص الخام، ويرفض طابعاً زمنياً > 5 دقائق', `يجيب ${I('200')} فوراً، ويعالج بعد ذلك`, 'يتجاهل معرّفاً سبق رؤيته: التسليم المكرر لا يغيّر شيئاً', 'يعيد من بوابته ما فاته، حتى 3 أيام'],
      rule: 'القاعدة: الـ webhook محاولة لا حقيقة؛ الشريك يستطيع دائماً إعادة قراءة الحالة عبر الواجهة، وأنتم تحتفظون بكل تسليم، ناجحاً كان أو لا.',
    },
  },
};
