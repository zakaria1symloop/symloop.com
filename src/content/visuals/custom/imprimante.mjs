// Bespoke animated figures for the 2027 "comment partager une imprimante en réseau" page.
//  horsligne(): plugged into one computer, or into the network. Left, the
//               printer hangs off the reception computer, which shares it to
//               five others: links are drawn, then that computer switches off
//               and the five lose the printer. Right, the printer sits on the
//               switch with a fixed address: six computers reach it directly.
//  adresse():   the address that changes. Five working days: with an automatic
//               address the printer answers at .37 until a power cut, then at
//               .52 while the computers still write to .37; with a reserved
//               address it stays at .50 and prints every day.
// Addresses read left to right in every locale: they are drawn in their own
// text elements with direction="ltr".
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, open, heading, esc } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function pop(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scale(0)}${(at + 1.2).toFixed(1)}%,100%{transform:scale(1)}}`); return `transform-box:fill-box;transform-origin:center;animation:${P}-${id} ${LOOP}s linear infinite`; }
function drawLine(css, P, id, at, dur, len) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{stroke-dashoffset:${len.toFixed(0)}}${(at + dur).toFixed(1)}%,100%{stroke-dashoffset:0}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
const TINT = 'rgba(242,181,68,0.06)';
const DARK = '#0b0b0b';

function tiles(c, css, P, ky, ts, at0) {
  let s = '';
  ts.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, at0 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? TINT : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  return s;
}
const motionOff = (P) => `@media (prefers-reduced-motion: reduce){svg [style*="${P}-"]{animation:none !important}}`;
function ltrSpans(x, y, parts, size, anchor) {
  const L = ctx(false);
  const monoCss = /style="([^"]*)"/.exec(text(L, 0, 0, 'x', { size, font: 'mono' }))[1];
  return `<text x="${x}" y="${y}" style="${monoCss}" direction="ltr" text-anchor="${anchor}">` + parts.map(([str, fill, bold]) => (str ? `<tspan fill="${fill}" style="font-weight:${bold ? 500 : 300}">${esc(str)}</tspan>` : '')).join('') + '</text>';
}
function box(c, x, y, w, h, top, sub, o = {}) {
  return rect(c, x, y, w, h, { stroke: o.stroke || C.line2, fill: o.fill || C.fill, dash: o.dash }) + text(c, x + w / 2, y + (sub ? h / 2 - 2 : h / 2 + 4), top, { size: o.size || 10, fill: o.color || C.fg, weight: 500, anchor: 'middle' }) + (sub ? text(c, x + w / 2, y + h / 2 + 12, sub, { size: 8.5, font: 'mono', fill: o.subColor || C.fg55, anchor: 'middle' }) : '');
}
function link(c, css, P, id, at, x1, y1, x2, y2, color) {
  const len = Math.hypot(x2 - x1, y2 - y1);
  return `<polyline points="${c.X(x1)},${y1} ${c.X(x2)},${y2}" fill="none" stroke="${color || C.fg70}" stroke-width="1.5" stroke-dasharray="${len.toFixed(0)}" style="animation:${drawLine(css, P, id, at, 1.5, len)}"/>`;
}

export function horsligne(t, rtl) {
  const c = ctx(rtl); const P = 'ih'; const css = []; const H = 660;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  // left: the printer hangs off one computer
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 510, 280, { stroke: C.accent, fill: TINT }) + text(c, 96, 168, t.left, { size: 11, fill: C.fg, weight: 500 }) + '</g>';
  s += `<g style="animation:${show(css, P, 'lp', 4)}">` + box(c, 96, 186, 130, 50, t.printer, t.usb) + '</g>';
  s += link(c, css, P, 'lu', 6, 226, 211, 270, 211, C.fg);
  s += `<g style="animation:${show(css, P, 'lh', 6)}">` + box(c, 270, 186, 160, 50, t.host, t.hostSub, { stroke: C.accent, dash: '5 3', subColor: C.accent }) + '</g>';
  for (let i = 0; i < 5; i++) {
    const x = 96 + i * 96;
    s += `<g style="animation:${show(css, P, `lc${i}`, 9 + i)}">` + box(c, x, 296, 84, 38, t.pc + ' ' + (i + 2)) + '</g>';
    s += link(c, css, P, `ll${i}`, 10 + i, x + 42, 296, 350, 236, C.accent);
  }
  s += `<g style="${pop(css, P, 'ls', 20)}">` + rect(c, 96, 360, 478, 44, { stroke: C.accent, fill: C.accent }) + text(c, 108, 378, t.badTop, { size: 10.5, fill: '#000', weight: 500 }) + text(c, 108, 394, t.badSub, { size: 9, font: 'mono', fill: '#000' }) + '</g>';
  // right: the printer sits on the network with a fixed address
  s += `<g style="animation:${show(css, P, 'pb', 28)}">` + rect(c, 610, 144, 510, 280, { stroke: C.fg70, fill: DARK }) + text(c, 626, 168, t.right, { size: 11, fill: C.fg, weight: 500 }) + '</g>';
  s += `<g style="animation:${show(css, P, 'rp', 30)}">` + rect(c, 626, 186, 150, 50, { stroke: C.fg, fill: C.fill }) + text(c, 701, 206, t.printer, { size: 10, fill: C.fg, weight: 500, anchor: 'middle' }) + ltrSpans(c.X(701), 224, [['192.168.1.50', C.accent, true]], 9.5, 'middle') + '</g>';
  s += link(c, css, P, 'ru', 32, 776, 211, 830, 211, C.fg);
  s += `<g style="animation:${show(css, P, 'rs', 32)}">` + box(c, 830, 186, 170, 50, t.sw, t.swSub, { stroke: C.fg70, fill: DARK }) + '</g>';
  for (let i = 0; i < 6; i++) {
    const x = 626 + i * 80;
    s += `<g style="animation:${show(css, P, `rc${i}`, 35 + i)}">` + box(c, x, 296, 70, 38, t.pc + ' ' + (i + 1), null, { size: 9.5 }) + '</g>';
    s += link(c, css, P, `rl${i}`, 36 + i, x + 35, 296, 915, 236, C.fg70);
  }
  s += `<g style="${pop(css, P, 'rr', 46)}">` + rect(c, 626, 360, 478, 44, { stroke: C.fg, fill: C.fill }) + text(c, 638, 378, t.goodTop, { size: 10.5, fill: C.fg, weight: 500 }) + text(c, 638, 394, t.goodSub, { size: 9, font: 'mono', fill: C.fg70 }) + '</g>';
  const by = 440;
  s += `<g style="animation:${show(css, P, 'bd', 52)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 500;
  s += tiles(c, css, P, ky, t.tiles, 56);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// five working days; the power cut happens after the third
const AUTO = ['192.168.1.37', '192.168.1.37', '192.168.1.37', '192.168.1.52', '192.168.1.52'];
const KEPT = '192.168.1.37';
const FIXED = '192.168.1.50';
const DX = (i) => 300 + i * 160;

export function adresse(t, rtl) {
  const c = ctx(rtl); const P = 'ix'; const css = []; const H = 670;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 1040, 290, { stroke: C.fg35, fill: DARK }) + t.days.map((d, i) => text(c, DX(i) + 70, 166, d, { size: 9, font: 'mono', fill: C.fg55, anchor: 'middle' })).join('') + '</g>';
  const chip = (i, y, addr, o = {}) => rect(c, DX(i), y, 140, 30, { stroke: o.stroke || C.line2, fill: o.fill || C.fill, dash: o.dash }) + ltrSpans(c.X(DX(i) + 70), y + 20, [[addr, o.color || C.fg, true]], 10.5, 'middle');
  const state = (i, y, label, bad) => rect(c, DX(i), y, 140, 26, { stroke: bad ? C.accent : C.line2, fill: bad ? C.accent : 'none' }) + text(c, DX(i) + 70, y + 17, label, { size: 9.5, fill: bad ? '#000' : C.fg70, weight: bad ? 500 : 300, anchor: 'middle' });
  // automatic address
  s += `<g style="animation:${show(css, P, 'la', 4)}">` + text(c, 96, 200, t.rowAuto, { size: 10.5, fill: C.fg, weight: 500 }) + text(c, 96, 240, t.rowKept, { size: 10, fill: C.fg70 }) + text(c, 96, 278, t.rowState, { size: 10, fill: C.fg70 }) + '</g>';
  AUTO.forEach((a, i) => {
    const at = 6 + i * 5; const bad = a !== KEPT;
    s += `<g style="animation:${show(css, P, `a${i}`, at)}">` + chip(i, 180, a, bad ? { stroke: C.accent, fill: TINT, color: C.accent } : {}) + '</g>';
    s += `<g style="animation:${show(css, P, `k${i}`, at + 1)}">` + chip(i, 220, KEPT, { stroke: C.fg35, fill: 'none', color: C.fg55 }) + '</g>';
    s += `<g style="${pop(css, P, `s${i}`, at + 2)}">` + state(i, 260, bad ? t.offline : t.prints, bad) + '</g>';
  });
  s += `<g style="animation:${show(css, P, 'ev', 20)}"><polyline points="${c.X(770)},174 ${c.X(770)},292" fill="none" stroke="${C.accent}" stroke-width="1.5" stroke-dasharray="4 4"/>` + text(c, 770, 308, t.cut, { size: 9, font: 'mono', fill: C.accent, weight: 500, anchor: 'middle' }) + '</g>';
  // reserved address
  s += `<g style="animation:${show(css, P, 'lb', 34)}">` + text(c, 96, 350, t.rowFixed, { size: 10.5, fill: C.fg, weight: 500 }) + text(c, 96, 388, t.rowState, { size: 10, fill: C.fg70 }) + '</g>';
  AUTO.forEach((_, i) => {
    const at = 36 + i * 3;
    s += `<g style="animation:${show(css, P, `f${i}`, at)}">` + chip(i, 330, FIXED, { stroke: C.fg70 }) + '</g>';
    s += `<g style="${pop(css, P, `g${i}`, at + 1)}">` + state(i, 370, t.prints, false) + '</g>';
  });
  const by = 450;
  s += `<g style="animation:${show(css, P, 'bd', 54)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 510;
  s += tiles(c, css, P, ky, t.tiles, 58);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    horsligne: {
      title: 'Branchée sur un poste, ou sur le réseau',
      alt: 'Deux montages. À gauche, l’imprimante est branchée par un câble USB sur le poste de l’accueil, qui la partage à cinq autres postes : quand ce poste s’éteint, les cinq autres voient l’imprimante hors ligne. À droite, l’imprimante est branchée sur le commutateur du réseau, avec une adresse fixe : les six postes l’atteignent directement, et n’importe lequel peut s’éteindre sans gêner les autres.',
      header: 'Exemple construit · un bureau de six postes, une imprimante · deux façons de la brancher',
      left: 'Branchée sur le poste de l’accueil', right: 'Branchée sur le réseau, adresse fixe',
      printer: 'imprimante', usb: 'câble USB', host: 'poste de l’accueil', hostSub: 'éteint à 16 h 30', pc: 'poste',
      sw: 'commutateur', swSub: 'le réseau du bureau',
      badTop: 'Le poste de l’accueil s’éteint', badSub: 'cinq postes voient l’imprimante « hors ligne »',
      goodTop: 'N’importe quel poste peut s’éteindre', goodSub: 'les autres impriment toujours',
      band: 'Une imprimante partagée par un poste dépend de ce poste : allumé, réveillé, à jour. Sur le réseau, elle ne dépend plus de personne.',
      tiles: [
        { big: '1 poste éteint', l1: 'et cinq autres n’impriment plus', l2: 'la première cause à vérifier', hot: true },
        { big: 'un câble réseau', l1: 'l’imprimante devient un appareil du réseau, pas d’un poste', l2: 'ou le Wi-Fi, à défaut' },
        { big: 'une adresse fixe', l1: 'la même aujourd’hui et après une coupure de courant', l2: 'réservée dans le routeur' },
      ],
      line1: 'Regardez derrière l’imprimante : si le seul câble de données est un câble USB vers un poste, vous avez trouvé.',
      line2: 'Presque toutes les imprimantes de bureau ont une prise réseau ou le Wi-Fi : il suffit souvent de s’en servir.',
      note: 'Exemple construit · six postes ; l’adresse 192.168.1.50 est un exemple d’adresse privée.',
    },
    adresse: {
      title: 'L’adresse qui change',
      alt: 'Cinq jours ouvrés. Avec une adresse automatique, l’imprimante répond à l’adresse qui finit par 37 pendant trois jours ; après une coupure de courant le mardi soir, le routeur lui donne l’adresse qui finit par 52, alors que les postes écrivent toujours à la 37 : mercredi et jeudi, l’imprimante est hors ligne. Avec une adresse réservée, elle répond à l’adresse qui finit par 50 les cinq jours, et imprime chaque jour.',
      header: 'Exemple construit · une semaine de travail, une coupure de courant le mardi soir · adresse automatique, puis réservée',
      days: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi'],
      rowAuto: 'Adresse automatique', rowKept: 'Ce que les postes ont retenu', rowState: 'Résultat', rowFixed: 'Adresse réservée',
      prints: 'imprime', offline: 'hors ligne', cut: 'coupure de courant, mardi soir',
      band: 'L’imprimante n’est pas en panne : elle a changé d’adresse, et les postes écrivent encore à l’ancienne.',
      tiles: [
        { big: '.37 puis .52', l1: 'après la coupure, le routeur a donné une autre adresse', l2: 'les postes écrivent encore à l’ancienne', hot: true },
        { big: 'réserver', l1: 'le routeur donne toujours la même adresse à cet appareil', l2: 'réservation, ou adresse fixe' },
        { big: 'la noter', l1: 'sur l’imprimante et dans l’inventaire du parc', l2: 'le prochain dépannage gagne une heure' },
      ],
      line1: 'Imprimez la page de configuration depuis le panneau de l’imprimante : son adresse du jour y est écrite.',
      line2: 'Si elle diffère de celle que montrent les postes, la panne est trouvée, et la réservation l’empêche de revenir.',
      note: 'Exemple construit · adresses privées fictives ; la semaine de travail va du dimanche au jeudi.',
    },
  },
  en: {
    horsligne: {
      title: 'Plugged into one computer, or into the network',
      alt: 'Two set-ups. On the left, the printer is plugged by a USB cable into the reception computer, which shares it with five other computers: when that computer switches off, the five others see the printer offline. On the right, the printer is plugged into the network switch, with a fixed address: the six computers reach it directly, and any of them can switch off without bothering the others.',
      header: 'Constructed example · an office of six computers, one printer · two ways of plugging it in',
      left: 'Plugged into the reception computer', right: 'Plugged into the network, fixed address',
      printer: 'printer', usb: 'USB cable', host: 'reception computer', hostSub: 'switched off at 4.30 pm', pc: 'PC',
      sw: 'switch', swSub: 'the office network',
      badTop: 'The reception computer switches off', badSub: 'five computers see the printer “offline”',
      goodTop: 'Any computer can switch off', goodSub: 'the others still print',
      band: 'A printer shared by one computer depends on that computer: on, awake, up to date. On the network, it depends on nobody.',
      tiles: [
        { big: '1 computer off', l1: 'and five others can no longer print', l2: 'the first cause to check', hot: true },
        { big: 'a network cable', l1: 'the printer becomes a device of the network, not of one computer', l2: 'or Wi-Fi, failing that' },
        { big: 'a fixed address', l1: 'the same today and after a power cut', l2: 'reserved in the router' },
      ],
      line1: 'Look behind the printer: if the only data cable is a USB cable to one computer, you have found it.',
      line2: 'Almost every office printer has a network socket or Wi-Fi: often it is enough to use it.',
      note: 'Constructed example · six computers; the address 192.168.1.50 is an example of a private address.',
    },
    adresse: {
      title: 'The address that changes',
      alt: 'Five working days. With an automatic address, the printer answers at the address ending in 37 for three days; after a power cut on Tuesday evening, the router gives it the address ending in 52, while the computers still write to 37: on Wednesday and Thursday, the printer is offline. With a reserved address, it answers at the address ending in 50 all five days, and prints every day.',
      header: 'Constructed example · one working week, a power cut on Tuesday evening · automatic address, then reserved',
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      rowAuto: 'Automatic address', rowKept: 'What the computers remember', rowState: 'Result', rowFixed: 'Reserved address',
      prints: 'prints', offline: 'offline', cut: 'power cut, Tuesday evening',
      band: 'The printer has not broken down: it has changed address, and the computers are still writing to the old one.',
      tiles: [
        { big: '.37 then .52', l1: 'after the cut, the router gave another address', l2: 'the computers still write to the old one', hot: true },
        { big: 'reserve it', l1: 'the router always gives this device the same address', l2: 'reservation, or fixed address' },
        { big: 'write it down', l1: 'on the printer and in the equipment inventory', l2: 'the next repair saves an hour' },
      ],
      line1: 'Print the configuration page from the printer’s panel: its address of the day is written on it.',
      line2: 'If it differs from the one the computers show, the fault is found, and the reservation stops it coming back.',
      note: 'Constructed example · fictitious private addresses; the working week runs from Sunday to Thursday.',
    },
  },
  ar: {
    horsligne: {
      title: 'موصولة بحاسوب واحد، أم بالشبكة',
      alt: 'تركيبان. في الأول، الطابعة موصولة بكابل بحاسوب الاستقبال، الذي يتقاسمها مع خمسة حواسيب أخرى: حين ينطفئ هذا الحاسوب، ترى الخمسة الأخرى الطابعة غير متصلة. وفي الثاني، الطابعة موصولة بمحوّل الشبكة، بعنوان ثابت: الحواسيب الستة تصل إليها مباشرة، وأي واحد منها يستطيع أن ينطفئ دون إزعاج الآخرين.',
      header: 'مثال مركَّب · مكتب من ستة حواسيب، وطابعة واحدة · طريقتان لوصلها',
      left: 'موصولة بحاسوب الاستقبال', right: 'موصولة بالشبكة، بعنوان ثابت',
      printer: 'الطابعة', usb: 'كابل مباشر', host: 'حاسوب الاستقبال', hostSub: 'يُطفأ مساءً', pc: 'الحاسوب',
      sw: 'المحوّل', swSub: 'شبكة المكتب',
      badTop: 'حاسوب الاستقبال ينطفئ', badSub: 'خمسة حواسيب ترى الطابعة «غير متصلة»',
      goodTop: 'أي حاسوب يستطيع أن ينطفئ', goodSub: 'والبقية تطبع دائماً',
      band: 'الطابعة التي يتقاسمها حاسوب تتوقف على هذا الحاسوب: مشغَّلاً، مستيقظاً، ومحدَّثاً. وعلى الشبكة، لا تتوقف على أحد.',
      tiles: [
        { big: 'حاسوب واحد مطفأ', l1: 'وخمسة آخرون لم يعودوا يطبعون', l2: 'السبب الأول الذي يُراجَع', hot: true },
        { big: 'كابل شبكة', l1: 'الطابعة تصير جهازاً من الشبكة، لا من حاسوب', l2: 'أو الواي فاي، إن تعذّر' },
        { big: 'عنوان ثابت', l1: 'هو نفسه اليوم وبعد انقطاع الكهرباء', l2: 'محجوز في الموجّه' },
      ],
      line1: 'انظروا خلف الطابعة: إذا كان كابل البيانات الوحيد كابلاً مباشراً نحو حاسوب، فقد وجدتم السبب.',
      line2: 'وأغلب طابعات المكاتب لها مأخذ شبكة أو واي فاي: ويكفي غالباً استعماله.',
      note: 'مثال مركَّب · ستة حواسيب؛ والعنوان المعروض مثال لعنوان خاص.',
    },
    adresse: {
      title: 'العنوان الذي يتغير',
      alt: 'خمسة أيام عمل. بعنوان آلي، الطابعة تجيب على العنوان المنتهي بـ 37 مدة ثلاثة أيام؛ وبعد انقطاع الكهرباء مساء الثلاثاء، يعطيها الموجّه العنوان المنتهي بـ 52، بينما الحواسيب تكتب دائماً إلى 37: الأربعاء والخميس، الطابعة غير متصلة. وبعنوان محجوز، تجيب على العنوان المنتهي بـ 50 في الأيام الخمسة، وتطبع كل يوم.',
      header: 'مثال مركَّب · أسبوع عمل، وانقطاع كهرباء مساء الثلاثاء · عنوان آلي، ثم محجوز',
      days: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس'],
      rowAuto: 'عنوان آلي', rowKept: 'ما حفظته الحواسيب', rowState: 'النتيجة', rowFixed: 'عنوان محجوز',
      prints: 'تطبع', offline: 'غير متصلة', cut: 'انقطاع الكهرباء، مساء الثلاثاء',
      band: 'الطابعة ليست معطَّلة: غيّرت عنوانها، والحواسيب ما زالت تكتب إلى القديم.',
      tiles: [
        { big: 'عنوان، ثم آخر', l1: 'بعد الانقطاع، أعطى الموجّه عنواناً آخر', l2: 'والحواسيب تكتب دائماً إلى القديم', hot: true },
        { big: 'الحجز', l1: 'الموجّه يعطي هذا الجهاز العنوان نفسه دائماً', l2: 'حجز، أو عنوان ثابت' },
        { big: 'تسجيله', l1: 'على الطابعة وفي جرد العتاد', l2: 'والإصلاح القادم يربح ساعة' },
      ],
      line1: 'اطبعوا صفحة الإعدادات من لوحة الطابعة: عنوانها لهذا اليوم مكتوب فيها.',
      line2: 'وإذا اختلف عما تُظهره الحواسيب، فقد وُجد العطل، والحجز يمنعه من العودة.',
      note: 'مثال مركَّب · عناوين خاصة خيالية؛ وأسبوع العمل من الأحد إلى الخميس.',
    },
  },
};
