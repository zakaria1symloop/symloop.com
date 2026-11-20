// Bespoke animated figures for the 2027 "borne de commande restaurant" post.
//  goulot():   where the queue forms at lunchtime. Two rows, one till alone
//              and one till plus three kiosks; three stages each, order
//              taking, kitchen, hand-over. Capacity bars grow against a dashed
//              demand mark, the bottleneck of each row turns accent, and the
//              number served per hour appears; a band gives the formula;
//              three tiles.
//  parcours(): one order across four screens. A numbered ticket travels from
//              the kiosk or phone to the pay point, the kitchen screen and the
//              call screen; its state appears under each screen as it arrives;
//              an arc shows the card payment that skips the pay point; a band
//              on sold-out items; three tiles.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function growX(css, P, id, at, dur, rtl) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'} center;animation:${P}-${id} ${LOOP}s linear infinite`; }
function drawLine(css, P, id, at, dur, len) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{stroke-dashoffset:${len}}${(at + dur).toFixed(1)}%,100%{stroke-dashoffset:0}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
const I = (x) => `⁦${x}⁩`;
const TINT = 'rgba(242,181,68,0.06)';
const DARK = '#0b0b0b';

function tiles(c, css, P, ky, ts, at0) {
  let s = '';
  ts.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, at0 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? TINT : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  return s;
}
const motionOff = (P) => `@media (prefers-reduced-motion: reduce){svg [style*="${P}-"]{animation:none !important}}`;

// orders per hour each stage can handle: order taking, kitchen, hand-over
const ROWS = [[48, 90, 120], [138, 90, 120]];
const DEMAND = 100;

export function goulot(t, rtl) {
  const c = ctx(rtl); const P = 'rg'; const css = []; const H = 598;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const xs = [300, 520, 740], bw = 190, u = bw / 140; const SX = 948;
  s += `<g style="animation:${show(css, P, 'ct', 3)}">` + xs.map((x, i) => text(c, x, 158, t.stages[i], { size: 10, fill: C.fg70, weight: 500 })).join('') + text(c, SX, 158, t.served, { size: 10, fill: C.fg70, weight: 500 }) + '</g>';
  ROWS.forEach((caps, r) => {
    const y = 176 + r * 96; const at = 6 + r * 26; const min = Math.min(...caps, DEMAND); const k = t.rows[r];
    s += `<g style="animation:${show(css, P, `l${r}`, at)}">` + text(c, 80, y + 20, k.name, { size: 11, fill: C.fg, weight: 500 }) + text(c, 80, y + 38, k.sub, { size: 8.5, font: 'mono', fill: C.fg55 }) + text(c, 80, y + 52, k.sub2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>';
    caps.forEach((v, i) => {
      const x = xs[i]; const neck = v === Math.min(...caps);
      s += `<g style="animation:${show(css, P, `o${r}${i}`, at + 1)}">` + rect(c, x, y, bw, 30, { stroke: C.line2, fill: DARK }) + line(c, x + DEMAND * u, y - 5, x + DEMAND * u, y + 35, { stroke: C.fg55, dash: '3 3' }) + '</g>';
      s += `<g style="${growX(css, P, `b${r}${i}`, at + 2 + i * 3, 2.5, rtl)}">` + rect(c, x, y, Math.min(v, 140) * u, 30, { stroke: neck ? C.accent : C.fg70, fill: neck ? 'rgba(242,181,68,0.16)' : C.fill }) + '</g>';
      s += `<g style="animation:${show(css, P, `v${r}${i}`, at + 5 + i * 3)}">` + text(c, x, y + 50, k.caps[i], { size: 9.5, font: 'mono', fill: neck ? C.accent : C.fg70, weight: neck ? 500 : 400 }) + '</g>';
    });
    s += `<g style="animation:${show(css, P, `r${r}`, at + 16)}">` + text(c, SX, y + 22, String(min), { size: 20, font: 'mono', fill: r ? C.fg : C.accent, weight: 500 }) + text(c, SX, y + 40, k.result, { size: 8.5, font: 'mono', fill: C.fg55 }) + text(c, SX, y + 53, k.result2, { size: 8.5, font: 'mono', fill: r ? C.fg55 : C.accent }) + '</g>';
  });
  s += `<g style="animation:${show(css, P, 'dm', 5)}">` + text(c, xs[0] + DEMAND * u + 6, 176 + 96 + 96 - 14, t.demand, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>';
  const by = 378;
  s += `<g style="animation:${show(css, P, 'bd', 60)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10, font: 'mono', fill: C.fg }) + '</g>';
  const ky = 438;
  s += tiles(c, css, P, ky, t.tiles, 66);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export function parcours(t, rtl) {
  const c = ctx(rtl); const P = 'rp'; const css = []; const H = 604;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const xs = [80, 345, 610, 875], cw = 245, cy = 196, ch = 84; const my = cy + ch / 2;
  // the card payment that skips the pay point
  const arc = [[xs[0] + cw / 2, cy], [xs[0] + cw / 2, cy - 30], [xs[2] + cw / 2, cy - 30], [xs[2] + cw / 2, cy]];
  let alen = 0; for (let i = 1; i < arc.length; i++) alen += Math.abs(arc[i][0] - arc[i - 1][0]) + Math.abs(arc[i][1] - arc[i - 1][1]);
  const AL = Math.ceil(alen);
  s += `<polyline points="${arc.map(([x, y]) => `${c.X(x).toFixed(1)},${y}`).join(' ')}" fill="none" stroke="${C.fg55}" stroke-width="1.5" stroke-dasharray="${AL}" style="animation:${drawLine(css, P, 'arc', 46, 6, AL)}"/>`;
  s += `<g style="animation:${show(css, P, 'at', 52)}">` + text(c, (arc[1][0] + arc[2][0]) / 2, cy - 38, t.card, { size: 9, font: 'mono', fill: C.fg70, anchor: 'middle' }) + '</g>';
  // four screens
  const T0 = 6, STEP = 9;
  t.screens.forEach((k, i) => {
    const x = xs[i]; const at = T0 + i * STEP;
    s += `<g style="animation:${show(css, P, `c${i}`, 4 + i * 1.2)}">` + rect(c, x, cy, cw, ch, { stroke: C.line2, fill: DARK }) + text(c, x + 14, cy + 24, k.name, { size: 11.5, fill: C.fg, weight: 500 }) + text(c, x + 14, cy + 42, k.what, { size: 9, fill: C.fg70 }) + text(c, x + 14, cy + 56, k.what2, { size: 9, fill: C.fg70 }) + (i < 3 ? line(c, x + cw, my, xs[i + 1], my, { stroke: C.fg35 }) : '') + '</g>';
    s += `<g style="animation:${show(css, P, `s${i}`, at + 3)}">` + rect(c, x, cy + ch + 12, cw, 46, { stroke: i === 1 ? C.accent : C.line2, fill: i === 1 ? TINT : C.fill }) + text(c, x + 14, cy + ch + 31, k.state, { size: 10, font: 'mono', fill: i === 1 ? C.accent : C.fg, weight: 500 }) + text(c, x + 14, cy + ch + 46, k.state2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>';
  });
  // the numbered ticket that travels from screen to screen
  const stops = xs.map((x) => x + cw - 26); const end = stops[3];
  css.push(`@keyframes ${P}-run{0%,${T0}%{transform:translateX(${(c.X(stops[0]) - c.X(end)).toFixed(1)}px)}${stops.map((v, i) => `${(T0 + i * STEP + 2).toFixed(1)}%{transform:translateX(${(c.X(v) - c.X(end)).toFixed(1)}px)}${(T0 + (i + 1) * STEP - 1).toFixed(1)}%{transform:translateX(${(c.X(v) - c.X(end)).toFixed(1)}px)}`).join('')}100%{transform:translateX(0)}}`);
  s += `<g style="animation:${P}-run ${LOOP}s linear infinite">` + circle(c, end, cy + 22, 13, { fill: C.accent }) + text(c, end, cy + 26, '47', { size: 10.5, font: 'mono', fill: '#000', weight: 500, anchor: 'middle' }) + '</g>';
  const by = 362;
  s += `<g style="animation:${show(css, P, 'bd', 58)}">` + rect(c, 80, by, 1040, 60, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 24, t.band[0], { size: 10.5, fill: C.fg }) + text(c, 96, by + 44, t.band[1], { size: 10.5, fill: C.fg70 }) + '</g>';
  const ky = 444;
  s += tiles(c, css, P, ky, t.tiles, 64);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    goulot: {
      title: 'À midi, où se forme la file : à la caisse, puis en cuisine',
      alt: 'Capacité par heure de trois étapes d’un restaurant rapide, face à une demande de 100 commandes par heure. Avec une seule caisse : prise de commande 48 par heure, cuisine 90, remise 120 ; on sert 48 commandes, et 52 clients attendent ou repartent. Avec trois bornes en plus : prise de commande 138 par heure, cuisine 90, remise 120 ; on sert 90 commandes, et 10 attendent assis avec un numéro.',
      header: 'Exemple construit · restaurant rapide, heure de pointe de midi · 100 commandes demandées en une heure',
      stages: ['Prise de commande', 'Cuisine', 'Remise'], served: 'Servis par heure', demand: 'demande : 100',
      rows: [
        { name: 'Une seule caisse', sub: '75 secondes par commande', sub2: 'la cuisine attend des tickets', caps: ['48 par heure', '90 par heure', '120 par heure'], result: 'le goulot est à la caisse', result2: '52 attendent ou repartent' },
        { name: 'La caisse et trois bornes', sub: '2 minutes par client, en parallèle', sub2: 'la cuisine travaille à plein', caps: ['138 par heure', '90 par heure', '120 par heure'], result: 'le goulot est en cuisine', result2: '10 attendent assis, avec un numéro' },
      ],
      band: 'commandes par heure = 3 600 ÷ secondes par commande × points de commande · 3 600 ÷ 75 = 48 · 3 × 3 600 ÷ 120 = 90',
      tiles: [
        { big: '48 par heure', l1: 'une caisse à 75 secondes par commande', l2: 'pendant que la cuisine pourrait en sortir 90' },
        { big: '138, puis 90', l1: 'la prise de commande dépasse la cuisine', l2: 'le goulot a changé de place', hot: true },
        { big: 'mesurer la cuisine', l1: 'avant de commander des bornes', l2: 'c’est elle qui fixe ce que vous servirez' },
      ],
      line1: 'La borne ne fait pas cuire plus vite : elle déplace l’attente, de la file debout vers la table, avec un numéro.',
      line2: 'Une fois la commande libérée, tout ce qui compte se passe en cuisine : c’est là qu’il faut un écran, pas des tickets.',
      note: 'Exemple construit · durées et capacités inventées ; chronométrez dix commandes et dix plats chez vous.',
    },
    parcours: {
      title: 'Une commande, quatre écrans, un seul numéro',
      alt: 'Le parcours de la commande numéro 47. Sur la borne ou le téléphone, la commande est saisie et attend son paiement. Au point de paiement, elle est réglée en espèces et part en cuisine. Sur l’écran de la cuisine, elle est en préparation depuis quatre minutes. Sur l’écran d’appel, elle est prête et son numéro est affiché. Une commande payée par carte à la borne va directement en cuisine, sans passer par le point de paiement.',
      header: 'Exemple construit · la commande n° 47, de l’écran où elle est saisie à l’écran où elle est appelée',
      card: 'payée par carte à la borne : directement en cuisine',
      screens: [
        { name: 'Borne ou téléphone', what: 'le client choisit, avec les options', what2: 'et voit le total', state: 'commande saisie', state2: 'en attente de paiement' },
        { name: 'Point de paiement', what: 'espèces ou carte, le ticket porte', what2: 'le numéro de la commande', state: 'payée en espèces', state2: 'envoyée en cuisine à cet instant' },
        { name: 'Écran de cuisine', what: 'par poste, dans l’ordre d’arrivée,', what2: 'avec un minuteur', state: 'en préparation', state2: 'depuis 4 minutes' },
        { name: 'Écran d’appel', what: 'en préparation, puis prête :', what2: 'le client voit son numéro', state: 'n° 47 prête', state2: 'remise au comptoir' },
      ],
      band: ['Un produit épuisé se retire d’un geste en cuisine : il disparaît au même instant de la borne, du menu sur téléphone et de la caisse.', 'Et quand internet coupe, les quatre écrans continuent sur le réseau du restaurant.'],
      tiles: [
        { big: '1 numéro par commande', l1: 'le même, du premier écran au dernier', l2: 'personne ne recopie rien' },
        { big: 'en cuisine au paiement', l1: 'une commande non réglée ne part pas au grill', l2: 'sauf service à table, payé à la fin', hot: true },
        { big: '1 geste pour une rupture', l1: 'le produit quitte tous les écrans', l2: 'plus de commande qu’on ne peut pas servir' },
      ],
      line1: 'Les écrans ne servent à rien s’ils ne se parlent pas : la commande est la même, de la borne à l’appel du numéro.',
      line2: 'En espèces, c’est le paiement qui lance la cuisine ; par carte ou à table, c’est la validation.',
      note: 'Exemple construit · schéma de principe ; l’ordre des écrans s’adapte au service, comptoir, table ou à emporter.',
    },
  },
  en: {
    goulot: {
      title: 'At lunchtime, where the queue forms: at the till, then in the kitchen',
      alt: 'Hourly capacity of three stages of a quick-service restaurant, against a demand of 100 orders an hour. With a single till: order taking 48 an hour, kitchen 90, hand-over 120; 48 orders are served, and 52 customers wait or leave. With three kiosks added: order taking 138 an hour, kitchen 90, hand-over 120; 90 orders are served, and 10 wait seated with a number.',
      header: 'Constructed example · quick-service restaurant, lunchtime peak · 100 orders asked for in one hour',
      stages: ['Order taking', 'Kitchen', 'Hand-over'], served: 'Served per hour', demand: 'demand: 100',
      rows: [
        { name: 'A single till', sub: '75 seconds per order', sub2: 'the kitchen waits for tickets', caps: ['48 an hour', '90 an hour', '120 an hour'], result: 'the bottleneck is the till', result2: '52 wait or leave' },
        { name: 'The till and three kiosks', sub: '2 minutes per customer, in parallel', sub2: 'the kitchen works flat out', caps: ['138 an hour', '90 an hour', '120 an hour'], result: 'the bottleneck is the kitchen', result2: '10 wait, seated, with a number' },
      ],
      band: 'orders per hour = 3,600 ÷ seconds per order × ordering points · 3,600 ÷ 75 = 48 · 3 × 3,600 ÷ 120 = 90',
      tiles: [
        { big: '48 an hour', l1: 'one till at 75 seconds per order', l2: 'while the kitchen could turn out 90' },
        { big: '138, then 90', l1: 'order taking overtakes the kitchen', l2: 'the bottleneck has moved', hot: true },
        { big: 'measure the kitchen', l1: 'before ordering kiosks', l2: 'it sets what you will serve' },
      ],
      line1: 'The kiosk does not cook faster: it moves the wait, from the standing queue to the table, with a number.',
      line2: 'Once ordering is freed, everything that counts happens in the kitchen: that is where a screen is needed, not tickets.',
      note: 'Constructed example · invented durations and capacities; time ten orders and ten dishes in your own restaurant.',
    },
    parcours: {
      title: 'One order, four screens, a single number',
      alt: 'The path of order number 47. On the kiosk or the phone, the order is entered and waits for payment. At the pay point, it is paid in cash and goes to the kitchen. On the kitchen screen, it has been in preparation for four minutes. On the call screen, it is ready and its number is shown. An order paid by card at the kiosk goes straight to the kitchen, without passing the pay point.',
      header: 'Constructed example · order no. 47, from the screen where it is entered to the screen where it is called',
      card: 'paid by card at the kiosk: straight to the kitchen',
      screens: [
        { name: 'Kiosk or phone', what: 'the customer chooses, with options,', what2: 'and sees the total', state: 'order entered', state2: 'waiting for payment' },
        { name: 'Pay point', what: 'cash or card, the receipt carries', what2: 'the order number', state: 'paid in cash', state2: 'sent to the kitchen at that moment' },
        { name: 'Kitchen screen', what: 'by station, in order of arrival,', what2: 'with a timer', state: 'in preparation', state2: 'for 4 minutes' },
        { name: 'Call screen', what: 'in preparation, then ready:', what2: 'the customer sees their number', state: 'no. 47 ready', state2: 'handed over at the counter' },
      ],
      band: ['A sold-out item is removed with one tap in the kitchen: it disappears at the same moment from the kiosk, the phone menu and the till.', 'And when the internet drops, the four screens carry on over the restaurant’s own network.'],
      tiles: [
        { big: '1 number per order', l1: 'the same, from the first screen to the last', l2: 'nobody copies anything' },
        { big: 'to the kitchen at payment', l1: 'an unpaid order does not go to the grill', l2: 'except table service, paid at the end', hot: true },
        { big: '1 tap for a sold-out item', l1: 'the item leaves every screen', l2: 'no more orders that cannot be served' },
      ],
      line1: 'Screens are useless if they do not talk to each other: the order is the same, from the kiosk to the number being called.',
      line2: 'In cash, it is payment that starts the kitchen; by card or at the table, it is confirmation.',
      note: 'Constructed example · schematic; the order of the screens adapts to the service, counter, table or take-away.',
    },
  },
  ar: {
    goulot: {
      title: 'في منتصف النهار، أين يتشكّل الطابور: عند الصندوق، ثم في المطبخ',
      alt: 'طاقة ثلاث مراحل في مطعم سريع في الساعة، مقابل طلب قدره 100 طلبية في الساعة. بصندوق واحد: أخذ الطلبات 48 في الساعة، المطبخ 90، والتسليم 120؛ تُخدَم 48 طلبية، و52 زبوناً ينتظرون أو يغادرون. وبثلاثة أكشاك إضافية: أخذ الطلبات 138 في الساعة، المطبخ 90، والتسليم 120؛ تُخدَم 90 طلبية، و10 ينتظرون جالسين برقم.',
      header: 'مثال مركَّب · مطعم سريع، ساعة الذروة في منتصف النهار · 100 طلبية مطلوبة في ساعة',
      stages: ['أخذ الطلبات', 'المطبخ', 'التسليم'], served: 'المخدومون في الساعة', demand: 'الطلب: 100',
      rows: [
        { name: 'صندوق واحد', sub: '75 ثانية لكل طلبية', sub2: 'المطبخ ينتظر التذاكر', caps: ['48 في الساعة', '90 في الساعة', '120 في الساعة'], result: 'الاختناق عند الصندوق', result2: '52 ينتظرون أو يغادرون' },
        { name: 'الصندوق وثلاثة أكشاك', sub: 'دقيقتان لكل زبون، بالتوازي', sub2: 'المطبخ يعمل بكامل طاقته', caps: ['138 في الساعة', '90 في الساعة', '120 في الساعة'], result: 'الاختناق في المطبخ', result2: '10 ينتظرون، جالسين، برقم' },
      ],
      band: `الطلبيات في الساعة = ${I('3 600')} ÷ الثواني لكل طلبية × نقاط الطلب · ${I('3 600 ÷ 75 = 48')} · ${I('3 × 3 600 ÷ 120 = 90')}`,
      tiles: [
        { big: '48 في الساعة', l1: 'صندوق بـ 75 ثانية لكل طلبية', l2: 'والمطبخ يستطيع إخراج 90' },
        { big: '138، ثم 90', l1: 'أخذ الطلبات يتجاوز المطبخ', l2: 'الاختناق غيّر مكانه', hot: true },
        { big: 'قياس المطبخ', l1: 'قبل طلب الأكشاك', l2: 'هو الذي يحدّد ما ستخدمون' },
      ],
      line1: 'الكشك لا يطبخ أسرع: ينقل الانتظار، من الطابور وقوفاً إلى الطاولة، برقم.',
      line2: 'حالما يتحرر أخذ الطلبات، كل ما يهمّ يحدث في المطبخ: هناك تلزم شاشة، لا تذاكر.',
      note: 'مثال مركَّب · مدد وطاقات مخترَعة؛ قيسوا زمن عشر طلبيات وعشرة أطباق عندكم.',
    },
    parcours: {
      title: 'طلبية واحدة، أربع شاشات، ورقم واحد',
      alt: 'مسار الطلبية رقم 47. على الكشك أو الهاتف، تُدخَل الطلبية وتنتظر دفعها. عند نقطة الدفع، تُسدَّد نقداً وتذهب إلى المطبخ. على شاشة المطبخ، هي في التحضير منذ أربع دقائق. وعلى شاشة النداء، هي جاهزة ورقمها معروض. والطلبية المدفوعة بالبطاقة على الكشك تذهب مباشرة إلى المطبخ، دون المرور بنقطة الدفع.',
      header: 'مثال مركَّب · الطلبية رقم 47، من الشاشة التي تُدخَل فيها إلى الشاشة التي تُنادى فيها',
      card: 'مدفوعة بالبطاقة على الكشك: مباشرة إلى المطبخ',
      screens: [
        { name: 'الكشك أو الهاتف', what: 'الزبون يختار، مع الإضافات،', what2: 'ويرى المجموع', state: 'طلبية مدخَلة', state2: 'في انتظار الدفع' },
        { name: 'نقطة الدفع', what: 'نقداً أو بالبطاقة، والتذكرة تحمل', what2: 'رقم الطلبية', state: 'مدفوعة نقداً', state2: 'تُرسَل إلى المطبخ في تلك اللحظة' },
        { name: 'شاشة المطبخ', what: 'حسب المحطة، بترتيب الوصول،', what2: 'مع مؤقِّت', state: 'في التحضير', state2: 'منذ 4 دقائق' },
        { name: 'شاشة النداء', what: 'في التحضير، ثم جاهزة:', what2: 'الزبون يرى رقمه', state: 'رقم 47 جاهزة', state2: 'تُسلَّم عند المنضدة' },
      ],
      band: ['المنتَج الذي نفد يُسحب بحركة في المطبخ: يختفي في اللحظة نفسها من الكشك وقائمة الهاتف والصندوق.', 'وحين ينقطع الإنترنت، تواصل الشاشات الأربع على شبكة المطعم.'],
      tiles: [
        { big: 'رقم واحد لكل طلبية', l1: 'هو نفسه، من أول شاشة إلى آخرها', l2: 'لا أحد ينسخ شيئاً' },
        { big: 'إلى المطبخ عند الدفع', l1: 'الطلبية غير المسدَّدة لا تذهب إلى الشواية', l2: 'إلا خدمة الطاولة، تُدفع في النهاية', hot: true },
        { big: 'حركة واحدة عند النفاد', l1: 'المنتَج يغادر كل الشاشات', l2: 'لا طلبيات لا يمكن خدمتها' },
      ],
      line1: 'الشاشات لا تنفع إن لم تتحادث: الطلبية هي نفسها، من الكشك إلى نداء الرقم.',
      line2: 'نقداً، الدفع هو الذي يطلق المطبخ؛ وبالبطاقة أو على الطاولة، التأكيد هو الذي يطلقه.',
      note: 'مثال مركَّب · مخطط مبدئي؛ وترتيب الشاشات يتكيّف مع الخدمة، منضدة أو طاولة أو أخذاً.',
    },
  },
};
