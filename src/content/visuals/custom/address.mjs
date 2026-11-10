// Bespoke animated figures for the 2027 "deliver without a street address" post.
//  pin():   one delivery address as it is really stored: a small map (zone
//           polygon, landmark, the customer's pin with its accuracy radius,
//           the courier's confirmed pin at hand-over, the correction arrow)
//           beside the structured record whose fields fill in with their
//           source tag; the record ends "confirmed, reusable".
//  zones(): delivery zones drawn as polygons on a map; four orders drop as
//           pins, each is resolved by point-in-polygon to a zone row (time
//           window, fee, courier) or to "out of zone, propose a pick-up point".
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function draw(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{stroke-dashoffset:1000}${(at + dur).toFixed(1)}%,100%{stroke-dashoffset:0}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
const pts = (c, arr) => arr.map(([x, y]) => `${c.X(x)},${y}`).join(' ');
function pinMark(c, x, y, o = {}) {
  const { fill = C.fg, r = 7 } = o;
  const X = c.X(x);
  return `<path d="M${X} ${y} l${-r} ${-r * 1.6} a${r} ${r} 0 1 1 ${2 * r} 0 z" fill="${fill}"/><circle cx="${X}" cy="${y - r * 1.6}" r="${r * 0.42}" fill="#000"/>`;
}

export function pin(t, rtl) {
  const c = ctx(rtl); const P = 'ad'; const css = []; const H = 600;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  // --- map panel
  const mx = 80, my = 96, mw = 470, mh = 448;
  s += rect(c, mx, my, mw, mh, { stroke: C.line2, fill: C.fill });
  // faint streets
  [[mx, 200, mx + mw, 190], [mx, 330, mx + mw, 345], [mx + 150, my, mx + 130, my + mh], [mx + 330, my, mx + 350, my + mh]].forEach(([a, b, d, e]) => { s += line(c, a, b, d, e, { stroke: C.line }); });
  // zone polygon
  const zone = [[mx + 60, my + 60], [mx + 400, my + 40], [mx + 440, my + 300], [mx + 300, my + 420], [mx + 90, my + 380]];
  s += `<polygon points="${pts(c, zone)}" fill="rgba(242,181,68,0.05)" stroke="${C.accent}" stroke-width="1" stroke-dasharray="4 5" pathLength="1000" style="stroke-dashoffset:0;animation:${draw(css, P, 'zone', 3, 8)}"/>`;
  s += text(c, mx + 70, my + 52, t.zoneLabel, { size: 10, font: 'mono', fill: C.accent, letter: 1.5, upper: true });
  // landmark
  const lx = mx + 262, ly = my + 262;
  s += `<g style="animation:${show(css, P, 'lm', 8)}">` + rect(c, lx - 12, ly - 12, 24, 24, { stroke: C.fg55, fill: 'rgba(255,255,255,0.08)' }) + text(c, lx, ly + 5, '+', { size: 16, fill: C.fg70, anchor: 'middle' }) + text(c, lx + 18, ly + 4, t.landmark, { size: 10.5, font: 'mono', fill: C.fg55 }) + '</g>';
  // customer pin + accuracy circle (1 px = 0.5 m → 35 m = 70 px)
  const p1 = [mx + 170, my + 300];
  s += `<g style="animation:${show(css, P, 'p1', 16)}">` + circle(c, p1[0], p1[1], 70, { fill: 'rgba(255,255,255,0.04)', stroke: C.line2 }) + pinMark(c, p1[0], p1[1], { fill: C.fg70 }) + text(c, p1[0], p1[1] + 100, t.pin1, { size: 10.5, font: 'mono', fill: C.fg55, anchor: 'middle' }) + '</g>';
  // courier pin + small circle (6 m = 12 px)
  const p2 = [mx + 236, my + 246];
  s += `<g style="animation:${show(css, P, 'arrow', 44)}"><line x1="${c.X(p1[0])}" y1="${p1[1] - 10}" x2="${c.X(p2[0]) + (rtl ? 10 : -10)}" y2="${p2[1] + 6}" stroke="${C.accent}" stroke-width="1.2" stroke-dasharray="3 3"/>` + (rtl ? text(c, (p1[0] + p2[0]) / 2 + 40, (p1[1] + p2[1]) / 2 + 22, t.gap, { size: 10, font: 'mono', fill: C.accent }) : text(c, (p1[0] + p2[0]) / 2 - 56, (p1[1] + p2[1]) / 2 - 14, t.gap, { size: 10, font: 'mono', fill: C.accent, anchor: 'end' })) + '</g>';
  s += `<g style="animation:${show(css, P, 'p2', 40)}">` + circle(c, p2[0], p2[1], 12, { fill: 'rgba(242,181,68,0.12)', stroke: C.accent }) + pinMark(c, p2[0], p2[1], { fill: C.accent }) + (rtl ? text(c, p2[0] - 22, p2[1] - 8, t.pin2, { size: 10.5, font: 'mono', fill: C.accent, anchor: 'end' }) : text(c, p2[0] + 22, p2[1] - 8, t.pin2, { size: 10.5, font: 'mono', fill: C.accent })) + '</g>';
  // scale + code
  s += line(c, mx + 20, my + mh - 22, mx + 120, my + mh - 22, { stroke: C.fg55, sw: 1.4 }) + text(c, mx + 20, my + mh - 30, t.scale, { size: 10, font: 'mono', fill: C.fg55 });
  s += text(c, mx + mw - 16, my + mh - 18, t.code, { size: 11, font: 'mono', fill: C.fg70, anchor: 'end' });
  // --- record panel
  const rx = 590, rw = 530;
  s += text(c, rx, my + 4, t.recordLabel, { size: 11, font: 'mono', fill: C.fg35, letter: 2, upper: true });
  s += line(c, rx, my + 14, rx + rw, my + 14, { stroke: C.line2 });
  t.fields.forEach((f, i) => {
    const y = my + 42 + i * 52; const at = f.at;
    s += `<g style="animation:${show(css, P, `f${i}`, at)}">`
      + text(c, rx, y, f.label, { size: 10, font: 'mono', fill: C.fg35, letter: 1, upper: true })
      + text(c, rx + rw, y, f.src, { size: 10, font: 'mono', fill: f.hot ? C.accent : C.fg55, anchor: 'end' })
      + text(c, rx, y + 20, f.value, { size: 12.5, fill: f.hot ? C.accent : C.fg })
      + line(c, rx, y + 32, rx + rw, y + 32, { stroke: C.line })
      + '</g>';
  });
  const by = my + 42 + t.fields.length * 52 + 2;
  s += `<g style="animation:${show(css, P, 'badge', 62)}">` + rect(c, rx, by, rw, 40, { stroke: C.accent, fill: 'rgba(242,181,68,0.06)' }) + text(c, rx + 14, by + 17, t.badge, { size: 12.5, fill: C.fg }) + text(c, rx + 14, by + 32, t.badge2, { size: 10.5, font: 'mono', fill: C.accent }) + '</g>';
  s += text(c, 80, 578, t.rule, { size: 12.5, fill: C.fg });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"],svg polygon[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

export function zones(t, rtl) {
  const c = ctx(rtl); const P = 'zn'; const css = []; const H = 600;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  const mx = 80, my = 96, mw = 640, mh = 448;
  s += rect(c, mx, my, mw, mh, { stroke: C.line2, fill: C.fill });
  [[mx, 180, mx + mw, 170], [mx, 300, mx + mw, 310], [mx, 420, mx + mw, 405], [mx + 200, my, mx + 180, my + mh], [mx + 420, my, mx + 440, my + mh]].forEach(([a, b, d, e]) => { s += line(c, a, b, d, e, { stroke: C.line }); });
  // polygons: A (centre), B (ring), C (outer)
  const A = [[mx + 240, my + 150], [mx + 400, my + 140], [mx + 420, my + 270], [mx + 260, my + 290]];
  const B = [[mx + 130, my + 70], [mx + 500, my + 60], [mx + 540, my + 340], [mx + 330, my + 400], [mx + 110, my + 330]];
  const Cc = [[mx + 40, my + 30], [mx + 555, my + 30], [mx + 565, my + 410], [mx + 60, my + 420]];
  const polys = [[Cc, 'C', 2], [B, 'B', 6], [A, 'A', 10]];
  polys.forEach(([p, k, at]) => {
    s += `<polygon points="${pts(c, p)}" fill="${k === 'A' ? 'rgba(242,181,68,0.07)' : k === 'B' ? 'rgba(255,255,255,0.03)' : 'none'}" stroke="${k === 'A' ? C.accent : C.line2}" stroke-width="1" stroke-dasharray="${k === 'C' ? '2 6' : '4 5'}" pathLength="1000" style="stroke-dashoffset:0;animation:${draw(css, P, `z${k}`, at, 6)}"/>`;
    s += text(c, p[0][0] + 8, p[0][1] + 16, t.zoneNames[k], { size: 10, font: 'mono', fill: k === 'A' ? C.accent : C.fg55, letter: 1.5, upper: true });
  });
  // depot
  const dx = mx + 330, dy = my + 215;
  s += rect(c, dx - 10, dy - 10, 20, 20, { stroke: C.fg, fill: 'rgba(255,255,255,0.1)' }) + (rtl ? text(c, dx - 16, dy + 4, t.depot, { size: 10.5, font: 'mono', fill: C.fg70, anchor: 'end' }) : text(c, dx + 16, dy + 4, t.depot, { size: 10.5, font: 'mono', fill: C.fg70 }));
  // orders
  const orders = [[mx + 300, my + 240, 'A'], [mx + 180, my + 140, 'B'], [mx + 480, my + 330, 'B'], [mx + 603, my + 110, 'X']];
  orders.forEach(([x, y, z], i) => {
    const at = 22 + i * 9; const hot = z === 'X';
    s += `<g style="animation:${show(css, P, `o${i}`, at)}">` + pinMark(c, x, y, { fill: hot ? C.accent : C.fg }) + text(c, x + 11, y + 2, `${i + 1}`, { size: 11, font: 'mono', fill: hot ? C.accent : C.fg70 }) + '</g>';
  });
  // right table
  const rx = 760, rw = 360;
  s += text(c, rx, my + 4, t.tableLabel, { size: 11, font: 'mono', fill: C.fg35, letter: 2, upper: true });
  s += line(c, rx, my + 14, rx + rw, my + 14, { stroke: C.line2 });
  t.rows.forEach((r, i) => {
    const y = my + 44 + i * 96; const at = 22 + i * 9; const hot = r.hot;
    s += `<g style="animation:${show(css, P, `r${i}`, at + 3)}">`
      + rect(c, rx, y - 22, rw, 82, { stroke: hot ? C.accent : C.line2, fill: hot ? 'rgba(242,181,68,0.06)' : 'none' })
      + text(c, rx + 12, y, r.head, { size: 13, fill: hot ? C.accent : C.fg })
      + text(c, rx + rw - 12, y, r.orders, { size: 10.5, font: 'mono', fill: C.fg55, anchor: 'end' })
      + text(c, rx + 12, y + 20, r.l1, { size: 11, font: 'mono', fill: C.fg70 })
      + text(c, rx + 12, y + 37, r.l2, { size: 11, font: 'mono', fill: C.fg70 })
      + text(c, rx + 12, y + 52, r.l3, { size: 10, font: 'mono', fill: hot ? C.accent : C.fg35 })
      + '</g>';
  });
  s += `<g style="animation:${show(css, P, 'rule', 70)}">` + text(c, 80, 572, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, 590, t.rule2, { size: 10.5, font: 'mono', fill: C.accent }) + '</g>';
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"],svg polygon[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

const I = (x) => `⁦${x}⁩`;

export const STRINGS = {
  fr: {
    pin: {
      title: 'Une adresse de livraison telle qu’on la stocke : un point, un repère, une zone, et qui l’a confirmée',
      alt: 'À gauche, un plan : une zone de livraison en pointillés, une pharmacie comme repère, le point GPS posé par le client avec un cercle d’incertitude de 35 mètres, puis le point confirmé par le livreur à la remise, à 6 mètres près, 42 mètres plus loin, relié par une flèche. À droite, la fiche adresse : texte libre tel que dicté, wilaya et commune depuis une liste, point client, point confirmé, code court, repère, zone et créneau calculés, et le statut « adresse confirmée, réutilisable ». Chaque champ porte sa source.',
      zoneLabel: 'zone B · périphérie', landmark: 'pharmacie El Amel', pin1: 'point client · ±35 m · navigateur', pin2: 'remise · ±6 m', gap: 'écart 42 m', scale: '50 m', code: '5CR7+HM Sétif',
      recordLabel: 'Fiche adresse · commande 2027-0418',
      fields: [
        { label: 'Texte libre, tel que dicté', value: '« Cité 1014 lgts, bât. C, 2e étage, en face pharmacie El Amel »', src: 'client · WhatsApp', at: 12 },
        { label: 'Wilaya · commune · code postal', value: '19 Sétif · Sétif · 19000', src: 'liste · jamais saisi à la main', at: 18 },
        { label: 'Point GPS client', value: '36,1911 N · 5,4137 E · précision 35 m', src: 'navigateur · HTTPS', at: 24 },
        { label: 'Point confirmé à la remise', value: '36,1914 N · 5,4142 E · précision 6 m', src: 'livreur · application', at: 44, hot: true },
        { label: 'Code court · repère', value: '5CR7+HM Sétif · en face pharmacie El Amel', src: 'dérivé du point · confirmé', at: 50 },
        { label: 'Zone · créneau', value: 'B · périphérie · 18 h–20 h', src: 'calculés · polygone', at: 56 },
      ],
      badge: 'Adresse confirmée · réutilisable à la prochaine commande sans rien redemander', badge2: 'texte + point + repère + zone · la prochaine fois, le livreur part du point confirmé',
      rule: 'Une adresse n’est pas une ligne de texte : c’est un texte, un point, sa précision, un repère, une zone, et la trace de qui l’a confirmée. Les coordonnées sont un exemple construit.',
    },
    zones: {
      title: 'Les zones de livraison dessinées, et quatre commandes qui tombent dedans ou non',
      alt: 'Un plan avec trois polygones emboîtés : zone A centre-ville, zone B périphérie, zone C communes voisines, et le dépôt au milieu. Quatre commandes tombent comme des épingles : la 1 en zone A, les 2 et 3 en zone B, la 4 hors de toute zone. À droite, une ligne par zone : A, livraison le jour même, créneau de deux heures, frais 200 DA, deux livreurs à vélo ; B, le lendemain, créneau de deux heures, frais 350 DA, trois livreurs en scooter ; C, sous 48 heures, frais 600 DA, un livreur en fourgon ; hors zone, pas de livraison à domicile, point relais ou transporteur proposé. Les montants sont un exemple.',
      zoneNames: { A: 'zone A · centre', B: 'zone B · périphérie', C: 'zone C · communes voisines' }, depot: 'dépôt',
      tableLabel: 'Ce que le polygone décide',
      rows: [
        { head: 'Zone A · centre-ville', orders: 'commande 1', l1: 'le jour même · créneau 2 h', l2: 'frais 200 DA · 2 livreurs à vélo', l3: 'point dans le polygone A → tarif A, créneaux A' },
        { head: 'Zone B · périphérie', orders: 'commandes 2 et 3', l1: 'le lendemain · créneau 2 h', l2: 'frais 350 DA · 3 livreurs en scooter', l3: 'dans B et hors de A → tarif B' },
        { head: 'Zone C · communes voisines', orders: 'aucune aujourd’hui', l1: 'sous 48 h · créneau demi-journée', l2: 'frais 600 DA · 1 fourgon', l3: 'dans C et hors de B → tournée du jeudi' },
        { head: 'Hors zone', orders: 'commande 4', l1: 'pas de livraison à domicile', l2: 'point relais ou transporteur proposé', l3: 'hors de tout polygone → proposer, pas refuser', hot: true },
      ],
      rule: 'Le tarif, le créneau et le livreur ne sont pas tapés à la commande : ils découlent du point et du polygone dans lequel il tombe. Changer une zone, c’est redessiner un polygone, pas rééduquer les employés.',
      rule2: 'montants et délais : exemple construit · le polygone se dessine dans l’application, par le gérant',
    },
  },
  en: {
    pin: {
      title: 'A delivery address as it is really stored: a point, a landmark, a zone, and who confirmed it',
      alt: 'On the left, a map: a dashed delivery zone, a pharmacy as landmark, the GPS point placed by the customer with a 35-metre uncertainty circle, then the point confirmed by the courier at hand-over, accurate to 6 metres, 42 metres away, linked by an arrow. On the right, the address record: free text as dictated, wilaya and commune from a list, customer point, confirmed point, short code, landmark, computed zone and time window, and the status “confirmed address, reusable”. Every field carries its source.',
      zoneLabel: 'zone B · outskirts', landmark: 'El Amel pharmacy', pin1: 'customer point · ±35 m · browser', pin2: 'hand-over · ±6 m', gap: 'gap 42 m', scale: '50 m', code: '5CR7+HM Sétif',
      recordLabel: 'Address record · order 2027-0418',
      fields: [
        { label: 'Free text, as dictated', value: '“Cité 1014 lgts, building C, 2nd floor, opposite El Amel pharmacy”', src: 'customer · WhatsApp', at: 12 },
        { label: 'Wilaya · commune · postal code', value: '19 Sétif · Sétif · 19000', src: 'list · never typed by hand', at: 18 },
        { label: 'Customer GPS point', value: '36.1911 N · 5.4137 E · accuracy 35 m', src: 'browser · HTTPS', at: 24 },
        { label: 'Point confirmed at hand-over', value: '36.1914 N · 5.4142 E · accuracy 6 m', src: 'courier · app', at: 44, hot: true },
        { label: 'Short code · landmark', value: '5CR7+HM Sétif · opposite El Amel pharmacy', src: 'derived from the point · confirmed', at: 50 },
        { label: 'Zone · time window', value: 'B · outskirts · 18:00–20:00', src: 'computed · polygon', at: 56 },
      ],
      badge: 'Confirmed address · reusable on the next order without asking anything again', badge2: 'text + point + landmark + zone · next time, the courier starts from the confirmed point',
      rule: 'An address is not a line of text: it is a text, a point, its accuracy, a landmark, a zone, and the trace of who confirmed it. The coordinates are a constructed example.',
    },
    zones: {
      title: 'Delivery zones drawn on the map, and four orders that fall inside or not',
      alt: 'A map with three nested polygons: zone A city centre, zone B outskirts, zone C neighbouring communes, and the depot in the middle. Four orders drop as pins: 1 in zone A, 2 and 3 in zone B, 4 outside every zone. On the right, one row per zone: A, same day, two-hour window, fee 200 DA, two bike couriers; B, next day, two-hour window, fee 350 DA, three scooter couriers; C, within 48 hours, fee 600 DA, one van; out of zone, no home delivery, pick-up point or carrier proposed. The amounts are an example.',
      zoneNames: { A: 'zone A · centre', B: 'zone B · outskirts', C: 'zone C · neighbouring communes' }, depot: 'depot',
      tableLabel: 'What the polygon decides',
      rows: [
        { head: 'Zone A · city centre', orders: 'order 1', l1: 'same day · 2-hour window', l2: 'fee 200 DA · 2 bike couriers', l3: 'point inside polygon A → A fee, A windows' },
        { head: 'Zone B · outskirts', orders: 'orders 2 and 3', l1: 'next day · 2-hour window', l2: 'fee 350 DA · 3 scooter couriers', l3: 'inside B and outside A → B fee' },
        { head: 'Zone C · neighbouring communes', orders: 'none today', l1: 'within 48 h · half-day window', l2: 'fee 600 DA · 1 van', l3: 'inside C and outside B → Thursday round' },
        { head: 'Out of zone', orders: 'order 4', l1: 'no home delivery', l2: 'pick-up point or carrier proposed', l3: 'outside every polygon → propose, do not refuse', hot: true },
      ],
      rule: 'The fee, the window and the courier are not typed at order time: they follow from the point and the polygon it falls in. Changing a zone means redrawing a polygon, not retraining staff.',
      rule2: 'amounts and delays: constructed example · the polygon is drawn in the app, by the manager',
    },
  },
  ar: {
    pin: {
      title: 'عنوان توصيل كما يُخزَّن فعلاً: نقطة، ومعلم، ومنطقة، ومن أكّده',
      alt: 'على اليمين خريطة: منطقة توصيل متقطعة، صيدلية معلماً، نقطة GPS وضعها الزبون بدائرة شك 35 متراً، ثم النقطة التي أكّدها الموصّل عند التسليم بدقة 6 أمتار، على بعد 42 متراً، موصولتان بسهم. على اليسار بطاقة العنوان: نص حر كما أُملي، ولاية وبلدية من قائمة، نقطة الزبون، النقطة المؤكَّدة، رمز قصير، معلم، منطقة وفترة محسوبتان، والحالة «عنوان مؤكَّد، قابل لإعادة الاستعمال». كل حقل يحمل مصدره.',
      zoneLabel: 'المنطقة ب · الضواحي', landmark: 'صيدلية الأمل', pin1: `نقطة الزبون · ${I('±35 m')} · المتصفح`, pin2: `التسليم · ${I('±6 m')}`, gap: `فارق ${I('42 m')}`, scale: I('50 m'), code: I('5CR7+HM Sétif'),
      recordLabel: `بطاقة العنوان · الطلبية ${I('2027-0418')}`,
      fields: [
        { label: 'نص حر، كما أُملي', value: '«حي 1014 مسكن، عمارة ج، الطابق الثاني، مقابل صيدلية الأمل»', src: 'الزبون · WhatsApp', at: 12 },
        { label: 'الولاية · البلدية · الرمز البريدي', value: '19 سطيف · سطيف · 19000', src: 'قائمة · لا يُكتب يدوياً أبداً', at: 18 },
        { label: 'نقطة GPS الزبون', value: `${I('36.1911 N · 5.4137 E')} · دقة 35 م`, src: 'المتصفح · HTTPS', at: 24 },
        { label: 'النقطة المؤكَّدة عند التسليم', value: `${I('36.1914 N · 5.4142 E')} · دقة 6 م`, src: 'الموصّل · التطبيق', at: 44, hot: true },
        { label: 'رمز قصير · معلم', value: `${I('5CR7+HM Sétif')} · مقابل صيدلية الأمل`, src: 'مشتق من النقطة · مؤكَّد', at: 50 },
        { label: 'المنطقة · الفترة', value: `ب · الضواحي · ${I('18:00–20:00')}`, src: 'محسوبة · مضلّع', at: 56 },
      ],
      badge: 'عنوان مؤكَّد · يُعاد استعماله في الطلبية التالية دون سؤال من جديد', badge2: 'نص + نقطة + معلم + منطقة · في المرة القادمة ينطلق الموصّل من النقطة المؤكَّدة',
      rule: 'العنوان ليس سطر نص: إنه نص ونقطة ودقتها ومعلم ومنطقة وأثر من أكّده. والإحداثيات مثال مبني.',
    },
    zones: {
      title: 'مناطق التوصيل مرسومة، وأربع طلبيات تقع داخلها أو خارجها',
      alt: 'خريطة بثلاثة مضلّعات متداخلة: المنطقة أ وسط المدينة، المنطقة ب الضواحي، المنطقة ج البلديات المجاورة، والمستودع في الوسط. أربع طلبيات تسقط كدبابيس: 1 في أ، و2 و3 في ب، و4 خارج كل منطقة. على الجانب سطر لكل منطقة: أ، اليوم نفسه، فترة ساعتين، رسوم 200 دج، موصّلان بدراجة؛ ب، الغد، فترة ساعتين، رسوم 350 دج، ثلاثة موصّلين بسكوتر؛ ج، خلال 48 ساعة، رسوم 600 دج، شاحنة صغيرة؛ خارج المنطقة، لا توصيل منزلي، نقطة استلام أو ناقل مقترح. والمبالغ مثال.',
      zoneNames: { A: 'المنطقة أ · الوسط', B: 'المنطقة ب · الضواحي', C: 'المنطقة ج · البلديات المجاورة' }, depot: 'المستودع',
      tableLabel: 'ما يقرره المضلّع',
      rows: [
        { head: 'المنطقة أ · وسط المدينة', orders: 'الطلبية 1', l1: 'اليوم نفسه · فترة ساعتين', l2: 'رسوم 200 دج · موصّلان بدراجة', l3: 'نقطة داخل المضلّع أ ← تعريفة أ، فترات أ' },
        { head: 'المنطقة ب · الضواحي', orders: 'الطلبيتان 2 و3', l1: 'الغد · فترة ساعتين', l2: 'رسوم 350 دج · 3 موصّلين بسكوتر', l3: 'داخل ب وخارج أ ← تعريفة ب' },
        { head: 'المنطقة ج · البلديات المجاورة', orders: 'لا شيء اليوم', l1: 'خلال 48 ساعة · فترة نصف يوم', l2: 'رسوم 600 دج · شاحنة صغيرة', l3: 'داخل ج وخارج ب ← جولة الخميس' },
        { head: 'خارج المنطقة', orders: 'الطلبية 4', l1: 'لا توصيل منزلي', l2: 'نقطة استلام أو ناقل مقترح', l3: 'خارج كل مضلّع ← اقتراح لا رفض', hot: true },
      ],
      rule: 'التعريفة والفترة والموصّل لا تُكتب عند الطلب: إنها تنتج عن النقطة والمضلّع الذي تقع فيه. وتغيير منطقة إعادة رسم مضلّع لا إعادة تكوين للموظفين.',
      rule2: 'المبالغ والآجال: مثال مبني · المضلّع يُرسم في التطبيق، بيد المسيّر',
    },
  },
};
