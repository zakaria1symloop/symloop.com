// Bespoke animated figures for the 2027 "comment créer un site e-commerce" post.
//  entonnoir(): what is left at each step, as rates on a 0–100 % track.
//               Five rows from "see a product page" to "delivered and paid";
//               each bar grows to the share kept from the previous step, with
//               the count beside it. On the last two rows an accent extension
//               shows the rate after two fixes (call within the hour, fees
//               announced before checkout) and the new count: 135 → 179.
//  argent():    where the parcel is and where the money is, on a ten-day axis.
//               A delivered parcel, a refused parcel that comes back, the
//               money of a cash-on-delivery order (with the customer, then
//               with the carrier, then paid out on day 10) and the money of a
//               card order. A token travels with the parcel; the "money is
//               outside" bar grows after delivery.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function growX(css, P, id, at, dur, rtl) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'} center;animation:${P}-${id} ${LOOP}s linear infinite`; }
const I = (x) => `⁦${x}⁩`;
const TINT = 'rgba(242,181,68,0.06)';
const DARK = '#0b0b0b';

function tiles(c, css, P, ky, ts, at0) {
  let s = '';
  ts.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, at0 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? TINT : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  return s;
}
const motionOff = (P) => `@media (prefers-reduced-motion: reduce){svg [style*="${P}-"]{animation:none !important}}`;

// share kept from the previous step, and the share after the two fixes
const KEPT = [42, 14, 40, 75, 75];
const AFTER = [null, null, null, 88, 85];

export function entonnoir(t, rtl) {
  const c = ctx(rtl); const P = 'ef'; const css = []; const H = 624;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const bx = 340, u = 5, nx = 880, ax = 990;
  s += `<g style="animation:${show(css, P, 'ct', 3)}">` + text(c, bx, 156, t.cols[0], { size: 9.5, fill: C.fg70, weight: 500 }) + text(c, nx, 156, t.cols[1], { size: 9.5, fill: C.fg70, weight: 500 }) + text(c, ax, 156, t.cols[2], { size: 9.5, fill: C.accent, weight: 500 }) + '</g>';
  t.rows.forEach((k, r) => {
    const y = 170 + r * 46; const at = 5 + r * 8; const v = KEPT[r];
    s += `<g style="animation:${show(css, P, `l${r}`, at)}">` + text(c, 80, y + 12, k.name, { size: 10.5, fill: C.fg, weight: 500 }) + text(c, 80, y + 28, k.sub, { size: 8.5, font: 'mono', fill: C.fg55 }) + rect(c, bx, y + 2, 100 * u, 20, { stroke: C.line2, fill: DARK }) + '</g>';
    s += `<g style="${growX(css, P, `b${r}`, at + 1, 3, rtl)}">` + rect(c, bx, y + 2, v * u, 20, { stroke: C.fg70, fill: 'rgba(255,255,255,0.20)' }) + '</g>';
    s += `<g style="animation:${show(css, P, `v${r}`, at + 4.5)}">` + text(c, bx + v * u - 6, y + 16, k.pct, { size: 10, font: 'mono', fill: C.fg, weight: 500, anchor: 'end' }) + text(c, nx, y + 17, k.n, { size: 13, font: 'mono', fill: C.fg, weight: 500 }) + '</g>';
    if (AFTER[r]) {
      const a2 = 46 + (r - 3) * 7;
      s += `<g style="${growX(css, P, `x${r}`, a2, 3, rtl)}">` + rect(c, bx + v * u, y + 2, (AFTER[r] - v) * u, 20, { stroke: C.accent, fill: 'rgba(242,181,68,0.22)' }) + '</g>';
      s += `<g style="animation:${show(css, P, `y${r}`, a2 + 3.5)}">` + text(c, bx + v * u, y + 36, k.fix, { size: 8.5, fill: C.accent }) + text(c, ax, y + 17, k.n2, { size: 13, font: 'mono', fill: C.accent, weight: 500 }) + '</g>';
    }
  });
  const by = 404;
  s += `<g style="animation:${show(css, P, 'bd', 62)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 464;
  s += tiles(c, css, P, ky, t.tiles, 66);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export function argent(t, rtl) {
  const c = ctx(rtl); const P = 'ea'; const css = []; const H = 600;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const X = (d) => 250 + d * 84; const th = 24;
  s += `<g style="animation:${show(css, P, 'ax', 3)}">` + text(c, 80, 152, t.axis, { size: 9, font: 'mono', fill: C.fg55 }) + Array.from({ length: 11 }, (_, d) => text(c, X(d), 152, String(d), { size: 9, font: 'mono', fill: C.fg55, anchor: 'middle' }) + line(c, X(d), 160, X(d), 352, { stroke: C.line, dash: '2 6' })).join('') + '</g>';
  const ys = [172, 218, 272, 318];
  t.tracks.forEach((k, i) => { s += `<g style="animation:${show(css, P, `tl${i}`, 5 + i * 1.5)}">` + text(c, 80, ys[i] + 10, k.name, { size: 10.5, fill: C.fg, weight: 500 }) + text(c, 80, ys[i] + 25, k.sub, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  const seg = (d0, d1, y, label, o) => rect(c, X(d0), y, X(d1) - X(d0), th, o) + text(c, X(d0) + 10, y + 16, label, { size: 9, fill: o.tc || C.fg });
  // 1. the parcel that is delivered
  s += `<g style="animation:${show(css, P, 'p1', 8)}">` + seg(0, 1, ys[0], t.p1[0], { stroke: C.fg70, fill: C.fill }) + seg(1, 3, ys[0], t.p1[1], { stroke: C.fg70, fill: 'rgba(255,255,255,0.14)' }) + '</g>';
  css.push(`@keyframes ${P}-run{0%,10%{transform:translateX(${(c.X(X(0)) - c.X(X(3))).toFixed(1)}px)}16%{transform:translateX(${(c.X(X(1)) - c.X(X(3))).toFixed(1)}px)}28%,100%{transform:translateX(0)}}`);
  s += `<g style="animation:${P}-run ${LOOP}s linear infinite">` + circle(c, X(3), ys[0] + th / 2, 8, { fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'p1e', 29)}">` + text(c, X(3) + 16, ys[0] + 16, t.p1[2], { size: 9.5, fill: C.accent, weight: 500 }) + '</g>';
  // 2. the parcel that is refused and comes back
  s += `<g style="animation:${show(css, P, 'p2', 32)}">` + seg(1, 3, ys[1], t.p2[0], { stroke: C.fg55, fill: DARK, dash: '4 3', tc: C.fg70 }) + seg(3, 6, ys[1], t.p2[1], { stroke: C.fg55, fill: DARK, dash: '4 3', tc: C.fg70 }) + circle(c, X(6), ys[1] + th / 2, 5, { fill: C.fg70 }) + text(c, X(6) + 14, ys[1] + 16, t.p2[2], { size: 9.5, fill: C.fg70 }) + '</g>';
  // 3. the money of a cash-on-delivery order
  s += `<g style="animation:${show(css, P, 'm1', 38)}">` + seg(0, 3, ys[2], t.m1[0], { stroke: C.line2, fill: DARK, tc: C.fg55 }) + '</g>';
  s += `<g style="${growX(css, P, 'm2', 40, 10, rtl)}">` + rect(c, X(3), ys[2], X(10) - X(3), th, { stroke: C.accent, fill: 'rgba(242,181,68,0.18)' }) + '</g>';
  s += `<g style="animation:${show(css, P, 'm2t', 46)}">` + text(c, X(3) + 10, ys[2] + 16, t.m1[1], { size: 9, fill: C.accent, weight: 500 }) + '</g>';
  s += `<g style="animation:${show(css, P, 'm3', 51)}">` + circle(c, X(10), ys[2] + th / 2, 8, { fill: C.accent }) + text(c, X(10), ys[2] - 6, t.m1[2], { size: 9.5, fill: C.accent, weight: 500, anchor: 'end' }) + '</g>';
  // 4. the money of a card order
  s += `<g style="animation:${show(css, P, 'c1', 56)}">` + circle(c, X(0), ys[3] + th / 2, 8, { fill: C.accent }) + rect(c, X(0), ys[3] + th / 2 - 1, X(2) - X(0), 2, { fill: C.fg55, stroke: 'none' }) + text(c, X(0) + 16, ys[3] + 6, t.c1[0], { size: 9.5, fill: C.accent, weight: 500 }) + text(c, X(2) + 12, ys[3] + 16, t.c1[1], { size: 9.5, fill: C.fg70 }) + '</g>';
  const by = 372;
  s += `<g style="animation:${show(css, P, 'bd', 62)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10, font: 'mono', fill: C.fg }) + '</g>';
  const ky = 432;
  s += tiles(c, css, P, ky, t.tiles, 66);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    entonnoir: {
      title: 'Où se perdent les commandes : cinq taux, dont deux après le clic',
      alt: 'Cinq étapes d’un site e-commerce, avec la part conservée de l’étape précédente. Sur 10 000 visites, 42 % voient une fiche produit, soit 4 200. 14 % ajoutent au panier, soit 600. 40 % passent commande, soit 240. 75 % sont confirmées, soit 180. 75 % sont livrées et payées, soit 135. En appelant dans l’heure, la confirmation passe à 88 %, soit 211 commandes ; en annonçant les frais avant et en rappelant le jour même, la livraison passe à 85 %, soit 179 commandes livrées et payées au lieu de 135.',
      header: 'Exemple construit · un mois d’une boutique en ligne · à chaque étape, la part gardée de l’étape précédente',
      cols: ['Ce qui reste de l’étape précédente', 'Nombre', 'Après correction'],
      rows: [
        { name: 'Voient une fiche produit', sub: 'sur 10 000 visites', pct: '42 %', n: '4 200' },
        { name: 'Ajoutent au panier', sub: 'sur 4 200 fiches vues', pct: '14 %', n: '600' },
        { name: 'Passent commande', sub: 'sur 600 paniers', pct: '40 %', n: '240' },
        { name: 'Sont confirmées', sub: 'sur 240 commandes', pct: '75 %', n: '180', fix: '88 % en appelant dans l’heure', n2: '211' },
        { name: 'Sont livrées et payées', sub: 'sur les confirmées', pct: '75 %', n: '135', fix: '85 % : frais annoncés avant, rappel le jour même', n2: '179' },
      ],
      band: 'Sans un visiteur de plus : 240 commandes passées, 135 livrées et payées aujourd’hui, 179 après les deux corrections. 44 commandes de plus par mois.',
      tiles: [
        { big: '135 sur 240', l1: 'commandes passées qui finissent livrées et payées', l2: '44 % se perdent après le clic' },
        { big: '+ 44 commandes', l1: '13 points gagnés à la confirmation, 10 à la livraison', l2: 'un tiers de plus, sans publicité en plus', hot: true },
        { big: '5 taux à suivre', l1: 'un par étape, chaque semaine', l2: 'le plus faible dit où travailler' },
      ],
      line1: 'Le site fait venir la commande ; ce sont la confirmation et la livraison qui la transforment en argent.',
      line2: 'Avant d’acheter plus de visites, on répare l’étape qui en perd le plus : ici, tout ce qui suit le clic.',
      note: 'Exemple construit · visites, taux et gains inventés pour montrer le calcul ; mesurez vos cinq taux pendant un mois.',
    },
    argent: {
      title: 'Où est le colis, où est l’argent : dix jours d’une commande',
      alt: 'Quatre lignes sur un axe de dix jours après la commande. Le colis livré : confirmé et préparé le premier jour, chez le transporteur jusqu’au troisième jour, livré et encaissé par le livreur. Le colis refusé : chez le transporteur, puis en retour, remis en stock au sixième jour. L’argent d’une commande payée à la livraison : chez le client jusqu’au troisième jour, puis chez le transporteur pendant sept jours, versé au dixième jour. L’argent d’une commande payée par carte : payé à la commande, versé selon la banque.',
      header: 'Exemple construit · une commande passée le jour 0 · livraison en 3 jours, versement du transporteur une fois par semaine',
      axis: 'jours après la commande',
      tracks: [
        { name: 'Le colis livré', sub: '3 sur 4, dans l’exemple' },
        { name: 'Le colis refusé', sub: '1 sur 4, dans l’exemple' },
        { name: 'Argent : à la livraison', sub: 'espèces remises au livreur' },
        { name: 'Argent : par carte', sub: 'CIB ou Edahabia' },
      ],
      p1: ['préparé', 'chez le transporteur', 'livré, encaissé par le livreur'],
      p2: ['chez le transporteur', 'refusé : retour vers vous', 'remis en stock au jour 6'],
      m1: ['chez le client', 'chez le transporteur · 7 jours pendant lesquels votre argent est dehors', 'versé au jour 10'],
      c1: ['payée à la commande', 'versée selon votre banque · le colis part déjà payé'],
      band: 'à la livraison : commande jour 0 · livraison jour 3 · versement jour 10 · une semaine de ventes est toujours chez les transporteurs',
      tiles: [
        { big: '10 jours', l1: 'entre la commande et l’argent sur le compte', l2: '3 de livraison + 7 de versement, ici' },
        { big: '1 semaine de ventes dehors', l1: 'en permanence chez les transporteurs', l2: 'à rapprocher colis par colis', hot: true },
        { big: '1 refus = 2 trajets payés', l1: 'l’aller, le retour, et un produit immobilisé 6 jours', l2: 'd’où la confirmation et le rappel' },
      ],
      line1: 'Un site e-commerce se pilote sur deux files : celle des colis, et celle de l’argent, qui a toujours une semaine de retard.',
      line2: 'Chaque versement d’un transporteur se rapproche colis par colis : sans cela, les écarts ne se voient jamais.',
      note: 'Exemple construit · délais inventés ; demandez à chaque transporteur son rythme de versement et ses frais de retour.',
    },
  },
  en: {
    entonnoir: {
      title: 'Where orders are lost: five rates, two of them after the click',
      alt: 'Five steps of an e-commerce site, with the share kept from the previous step. Out of 10,000 visits, 42 % see a product page, that is 4,200. 14 % add to the basket, that is 600. 40 % place an order, that is 240. 75 % are confirmed, that is 180. 75 % are delivered and paid, that is 135. By calling within the hour, confirmation rises to 88 %, that is 211 orders; by announcing the fees beforehand and reminding on the day, delivery rises to 85 %, that is 179 orders delivered and paid instead of 135.',
      header: 'Constructed example · one month of an online shop · at each step, the share kept from the previous step',
      cols: ['What is left from the previous step', 'Number', 'After the fixes'],
      rows: [
        { name: 'See a product page', sub: 'out of 10,000 visits', pct: '42 %', n: '4,200' },
        { name: 'Add to the basket', sub: 'out of 4,200 pages seen', pct: '14 %', n: '600' },
        { name: 'Place an order', sub: 'out of 600 baskets', pct: '40 %', n: '240' },
        { name: 'Are confirmed', sub: 'out of 240 orders', pct: '75 %', n: '180', fix: '88 % by calling within the hour', n2: '211' },
        { name: 'Are delivered and paid', sub: 'out of those confirmed', pct: '75 %', n: '135', fix: '85 %: fees announced before, reminder on the day', n2: '179' },
      ],
      band: 'Without one more visitor: 240 orders placed, 135 delivered and paid today, 179 after the two fixes. 44 more orders a month.',
      tiles: [
        { big: '135 out of 240', l1: 'orders placed that end up delivered and paid', l2: '44 % are lost after the click' },
        { big: '+ 44 orders', l1: '13 points gained at confirmation, 10 at delivery', l2: 'a third more, with no extra advertising', hot: true },
        { big: '5 rates to follow', l1: 'one per step, every week', l2: 'the lowest says where to work' },
      ],
      line1: 'The site brings the order in; confirmation and delivery are what turn it into money.',
      line2: 'Before buying more visits, you repair the step that loses the most: here, everything after the click.',
      note: 'Constructed example · visits, rates and gains invented to show the calculation; measure your five rates for a month.',
    },
    argent: {
      title: 'Where the parcel is, where the money is: ten days of an order',
      alt: 'Four rows on an axis of ten days after the order. The delivered parcel: confirmed and prepared on the first day, with the carrier until the third day, delivered and paid to the driver. The refused parcel: with the carrier, then on its way back, returned to stock on the sixth day. The money of a cash-on-delivery order: with the customer until the third day, then with the carrier for seven days, paid out on the tenth day. The money of a card order: paid at the order, paid out according to the bank.',
      header: 'Constructed example · an order placed on day 0 · delivery in 3 days, the carrier pays out once a week',
      axis: 'days after the order',
      tracks: [
        { name: 'The delivered parcel', sub: '3 out of 4, in the example' },
        { name: 'The refused parcel', sub: '1 out of 4, in the example' },
        { name: 'Money: on delivery', sub: 'cash handed to the driver' },
        { name: 'Money: by card', sub: 'CIB or Edahabia' },
      ],
      p1: ['prepared', 'with the carrier', 'delivered, paid to the driver'],
      p2: ['with the carrier', 'refused: on its way back', 'back in stock on day 6'],
      m1: ['with the customer', 'with the carrier · 7 days during which your money is outside', 'paid out on day 10'],
      c1: ['paid at the order', 'paid out according to your bank · the parcel leaves already paid'],
      band: 'cash on delivery: order day 0 · delivery day 3 · payout day 10 · a week of sales is always sitting with the carriers',
      tiles: [
        { big: '10 days', l1: 'between the order and the money in the account', l2: '3 of delivery + 7 of payout, here' },
        { big: '1 week of sales outside', l1: 'permanently with the carriers', l2: 'to be reconciled parcel by parcel', hot: true },
        { big: '1 refusal = 2 trips paid', l1: 'out, back, and a product tied up for 6 days', l2: 'hence the confirmation and the reminder' },
      ],
      line1: 'An e-commerce site is steered on two queues: the parcels, and the money, which is always a week behind.',
      line2: 'Each payout from a carrier is reconciled parcel by parcel: without that, the gaps are never seen.',
      note: 'Constructed example · invented delays; ask each carrier for its payout rhythm and its return fees.',
    },
  },
  ar: {
    entonnoir: {
      title: 'أين تضيع الطلبيات: خمس نسب، منها اثنتان بعد النقرة',
      alt: 'خمس مراحل لموقع تجارة إلكترونية، مع الحصة المحتفَظ بها من المرحلة السابقة. من 10 000 زيارة، 42 بالمئة يرون بطاقة منتَج، أي 4 200. 14 بالمئة يضيفون إلى السلة، أي 600. 40 بالمئة يطلبون، أي 240. 75 بالمئة تُؤكَّد، أي 180. 75 بالمئة تُسلَّم وتُدفع، أي 135. وبالاتصال خلال الساعة، يرتفع التأكيد إلى 88 بالمئة، أي 211 طلبية؛ وبإعلان المصاريف مسبقاً والتذكير يوم التسليم، يرتفع التسليم إلى 85 بالمئة، أي 179 طلبية مسلَّمة ومدفوعة بدل 135.',
      header: 'مثال مركَّب · شهر من متجر إلكتروني · في كل مرحلة، الحصة المحتفَظ بها من المرحلة السابقة',
      cols: ['ما يبقى من المرحلة السابقة', 'العدد', 'بعد التصحيح'],
      rows: [
        { name: 'يرون بطاقة منتَج', sub: `من ${I('10 000')} زيارة`, pct: I('42 %'), n: I('4 200') },
        { name: 'يضيفون إلى السلة', sub: `من ${I('4 200')} بطاقة`, pct: I('14 %'), n: '600' },
        { name: 'يطلبون', sub: 'من 600 سلة', pct: I('40 %'), n: '240' },
        { name: 'تُؤكَّد', sub: 'من 240 طلبية', pct: I('75 %'), n: '180', fix: `${I('88 %')} بالاتصال خلال الساعة`, n2: '211' },
        { name: 'تُسلَّم وتُدفع', sub: 'من المؤكَّدة', pct: I('75 %'), n: '135', fix: `${I('85 %')}: مصاريف معلَنة مسبقاً، وتذكير يوم التسليم`, n2: '179' },
      ],
      band: 'دون زائر إضافي: 240 طلبية، 135 مسلَّمة ومدفوعة اليوم، و179 بعد التصحيحين. 44 طلبية إضافية في الشهر.',
      tiles: [
        { big: '135 من 240', l1: 'طلبيات تنتهي مسلَّمة ومدفوعة', l2: `${I('44 %')} تضيع بعد النقرة` },
        { big: `${I('+ 44')} طلبية`, l1: '13 نقطة عند التأكيد، و10 عند التسليم', l2: 'ثلث إضافي، دون إشهار إضافي', hot: true },
        { big: '5 نسب تُتابَع', l1: 'واحدة لكل مرحلة، كل أسبوع', l2: 'أضعفها تقول أين نعمل' },
      ],
      line1: 'الموقع يأتي بالطلبية؛ والتأكيد والتسليم هما اللذان يحوّلانها إلى مال.',
      line2: 'قبل شراء زيارات أكثر، نصلح المرحلة التي تخسر أكثر: هنا، كل ما يأتي بعد النقرة.',
      note: 'مثال مركَّب · زيارات ونسب وأرباح مخترَعة لبيان الحساب؛ قيسوا نسبكم الخمس مدة شهر.',
    },
    argent: {
      title: 'أين الطرد، وأين المال: عشرة أيام من عمر طلبية',
      alt: 'أربعة أسطر على محور من عشرة أيام بعد الطلبية. الطرد المسلَّم: مؤكَّد ومحضَّر في اليوم الأول، عند الناقل إلى اليوم الثالث، ثم مسلَّم ومقبوض ثمنه عند الموصِّل. الطرد المرفوض: عند الناقل، ثم في طريق العودة، ويعود إلى المخزون في اليوم السادس. مال الطلبية المدفوعة عند التسليم: عند الزبون إلى اليوم الثالث، ثم عند الناقل سبعة أيام، ويُصرف في اليوم العاشر. مال الطلبية المدفوعة بالبطاقة: مدفوع عند الطلب، ويُصرف حسب البنك.',
      header: 'مثال مركَّب · طلبية يوم 0 · تسليم في 3 أيام، والناقل يصرف مرة في الأسبوع',
      axis: 'أيام بعد الطلبية',
      tracks: [
        { name: 'الطرد المسلَّم', sub: '3 من 4، في المثال' },
        { name: 'الطرد المرفوض', sub: '1 من 4، في المثال' },
        { name: 'المال: عند التسليم', sub: 'نقد يُسلَّم للموصِّل' },
        { name: 'المال: بالبطاقة', sub: `${I('CIB')} أو ${I('Edahabia')}` },
      ],
      p1: ['محضَّر', 'عند الناقل', 'مسلَّم، وثمنه عند الموصِّل'],
      p2: ['عند الناقل', 'مرفوض: في طريق العودة', 'يعود إلى المخزون في اليوم 6'],
      m1: ['عند الزبون', 'عند الناقل · 7 أيام ومالكم في الخارج', 'يُصرف في اليوم 10'],
      c1: ['مدفوعة عند الطلب', 'تُصرف حسب بنككم · والطرد ينطلق مدفوعاً'],
      band: 'عند التسليم: طلبية اليوم 0 · تسليم اليوم 3 · صرف اليوم 10 · أسبوع من المبيعات دائماً عند الناقلين',
      tiles: [
        { big: '10 أيام', l1: 'بين الطلبية والمال في الحساب', l2: '3 للتسليم و7 للصرف، هنا' },
        { big: 'أسبوع مبيعات في الخارج', l1: 'باستمرار عند الناقلين', l2: 'يُطابَق طرداً طرداً', hot: true },
        { big: 'رفض واحد = رحلتان مدفوعتان', l1: 'الذهاب، العودة، ومنتَج مجمَّد 6 أيام', l2: 'ومن هنا التأكيد والتذكير' },
      ],
      line1: 'موقع التجارة الإلكترونية يُقاد على طابورين: طابور الطرود، وطابور المال، المتأخر دائماً بأسبوع.',
      line2: 'كل صرف من ناقل يُطابَق طرداً طرداً: ودون ذلك، لا تُرى الفوارق أبداً.',
      note: 'مثال مركَّب · آجال مخترَعة؛ اسألوا كل ناقل عن وتيرة صرفه ومصاريف الإرجاع عنده.',
    },
  },
};
