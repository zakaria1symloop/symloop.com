// Bespoke animated figures for the 2027 "comment changer d'hébergeur de site internet" post.
//  demenager(): seven things to move. Seven chips start in the old host's box
//               and travel one after another to the new host's box, each with
//               the way it is moved written in the middle; the three that are
//               easily forgotten are accented.
//  bascule():   the switch, hour by hour. Four lanes over a time axis from
//               72 hours before to 48 hours after: the DNS cache time, the old
//               host, the new host, and the share of visitors on the new one.
//               Bars grow in order, the switch marker appears, the ramp is drawn.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function growX(css, P, id, at, dur, rtl) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'} center;animation:${P}-${id} ${LOOP}s linear infinite`; }
function drawLine(css, P, id, at, dur, len) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{stroke-dashoffset:${len.toFixed(0)}}${(at + dur).toFixed(1)}%,100%{stroke-dashoffset:0}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function run(css, P, id, at, dur, dx) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:translateX(${dx.toFixed(0)}px)}${(at + dur).toFixed(1)}%,100%{transform:translateX(0)}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
const TINT = 'rgba(242,181,68,0.06)';
const DARK = '#0b0b0b';
const PALE = 'rgba(255,255,255,0.85)';

function tiles(c, css, P, ky, ts, at0) {
  let s = '';
  ts.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, at0 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? TINT : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  return s;
}
const motionOff = (P) => `@media (prefers-reduced-motion: reduce){svg [style*="${P}-"]{animation:none !important}}`;

// the three items that are easily forgotten: mailboxes, scheduled tasks, mail sent by the site
const HOT = [false, false, true, false, false, true, true];

export function demenager(t, rtl) {
  const c = ctx(rtl); const P = 'hd'; const css = []; const H = 640;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const lx = 96, rx = 796, w = 308;
  s += `<g style="animation:${show(css, P, 'bx', 3)}">` + rect(c, 80, 144, 340, 260, { stroke: C.fg35, fill: DARK }) + text(c, 96, 168, t.old, { size: 11, fill: C.fg, weight: 500 }) + rect(c, 780, 144, 340, 260, { stroke: C.accent, fill: TINT }) + text(c, 796, 168, t.neu, { size: 11, fill: C.fg, weight: 500 }) + '</g>';
  const dx = c.RX(lx, w) - c.RX(rx, w);
  t.items.forEach(([name, how], j) => {
    const y = 180 + j * 28; const at = 6 + j * 6; const hot = HOT[j];
    s += `<g style="animation:${show(css, P, `g${j}`, 4)}">` + rect(c, lx, y, w, 22, { stroke: C.line2, fill: 'none', dash: '3 3' }) + '</g>';
    s += `<g style="animation:${run(css, P, `m${j}`, at, 3.5, dx)}">` + rect(c, rx, y, w, 22, { stroke: hot ? C.accent : C.fg70, fill: hot ? 'rgba(242,181,68,0.14)' : C.fill }) + text(c, rx + 10, y + 15, name, { size: 9.5, fill: hot ? C.accent : C.fg, weight: 500 }) + '</g>';
    s += `<g style="animation:${show(css, P, `w${j}`, at + 3.5)}">` + text(c, 600, y + 15, how, { size: 9, font: 'mono', fill: hot ? C.accent : C.fg70, anchor: 'middle' }) + line(c, 436, y + 11, 480, y + 11, { stroke: C.line2 }) + line(c, 720, y + 11, 764, y + 11, { stroke: C.line2 }) + '</g>';
  });
  s += `<g style="animation:${show(css, P, 'ls', 50)}">` + text(c, 96, 392, t.oldSum, { size: 9.5, fill: C.fg55 }) + '</g>';
  s += `<g style="animation:${show(css, P, 'rs', 52)}">` + text(c, 796, 392, t.neuSum, { size: 9.5, fill: C.accent, weight: 500 }) + '</g>';
  const by = 420;
  s += `<g style="animation:${show(css, P, 'bd', 56)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 480;
  s += tiles(c, css, P, ky, t.tiles, 60);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export function bascule(t, rtl) {
  const c = ctx(rtl); const P = 'hb'; const css = []; const H = 596;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const X = (h) => 320 + (h + 72) * 6.5; const LY = [166, 208, 250, 306];
  // lane labels and time ticks
  let frame = '';
  t.lanes.forEach((name, i) => { frame += text(c, 80, LY[i] + 17, name, { size: 10.5, fill: C.fg, weight: 500 }); });
  [-72, -48, -24, 0, 24, 48].forEach((h, i) => { frame += line(c, X(h), 160, X(h), 338, { stroke: C.line2, dash: '2 5' }) + text(c, X(h), 354, t.ticks[i], { size: 8.5, font: 'mono', fill: C.fg55, anchor: 'middle' }); });
  s += `<g style="animation:${show(css, P, 'fr', 3)}">${frame}</g>`;
  // bars: lane, from, to, label, style (0 pale outline, 1 pale solid, 2 accent outline, 3 accent solid, 4 dashed)
  const bars = [
    [0, -72, -48, t.dns[0], 0], [0, -48, 24, t.dns[1], 2], [0, 24, 48, t.dns[0], 0],
    [1, -72, 0, t.oldBar[0], 1], [1, 0, 48, t.oldBar[1], 4],
    [2, -48, -4, t.neuBar[0], 0], [2, -4, 0, '', 3], [2, 0, 48, t.neuBar[1], 3],
  ];
  bars.forEach(([lane, a, b, label, st], i) => {
    const x = X(a), w = X(b) - X(a), y = LY[lane]; const at = 6 + i * 4;
    const stroke = st >= 2 && st !== 4 ? C.accent : st === 4 ? C.fg55 : C.fg70;
    const fill = st === 1 ? PALE : st === 3 ? C.accent : st === 2 ? TINT : C.fill;
    s += `<g style="${growX(css, P, `b${i}`, at, 3, rtl)}">` + rect(c, x, y, w, 26, { stroke, fill, dash: st === 4 ? '4 3' : '' }) + '</g>';
    if (label) s += `<g style="animation:${show(css, P, `t${i}`, at + 3)}">` + text(c, x + w / 2, y + 17, label, { size: 9, fill: st === 1 || st === 3 ? '#000' : st === 2 ? C.accent : C.fg70, weight: 500, anchor: 'middle' }) + '</g>';
  });
  // the freeze, the switch
  s += `<g style="animation:${show(css, P, 'fz', 32)}">` + text(c, X(-4) - 8, 292, t.freeze, { size: 8.5, font: 'mono', fill: C.accent, anchor: 'end' }) + '</g>';
  s += `<g style="animation:${show(css, P, 'sw', 36)}">` + line(c, X(0), 150, X(0), 338, { stroke: C.accent, sw: 2 }) + text(c, X(0), 144, t.switchLabel, { size: 9.5, fill: C.accent, weight: 500, anchor: 'middle' }) + '</g>';
  // visitors on the new host: 0 % before the switch, 100 % two hours after
  const y0 = LY[3] + 26, y1 = LY[3];
  const pts = [[-72, y0], [0, y0], [2, y1], [48, y1]];
  const d = pts.map(([h, y]) => `${c.X(X(h)).toFixed(1)},${y}`).join(' ');
  const len = (X(0) - X(-72)) + Math.hypot(X(2) - X(0), 26) + (X(48) - X(2));
  s += `<polyline points="${d}" fill="none" stroke="${C.accent}" stroke-width="2.5" stroke-dasharray="${len.toFixed(0)}" style="animation:${drawLine(css, P, 'vs', 40, 10, len)}"/>`;
  s += `<g style="animation:${show(css, P, 'vl', 50)}">` + text(c, X(-72) + 8, y0 - 6, t.visitors[0], { size: 8.5, font: 'mono', fill: C.fg55 }) + text(c, X(48) - 8, y1 + 18, t.visitors[1], { size: 8.5, font: 'mono', fill: C.accent, anchor: 'end' }) + '</g>';
  const by = 376;
  s += `<g style="animation:${show(css, P, 'bd', 54)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 436;
  s += tiles(c, css, P, ky, t.tiles, 58);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    demenager: {
      title: 'Sept choses à déménager, pas une',
      alt: 'Deux boîtes : l’ancien hébergeur et le nouveau. Sept éléments passent de l’une à l’autre, chacun avec sa méthode : les fichiers du site, par copie ; la base de données, par export puis import ; les boîtes mail, copiées une par une ; la zone DNS, recréée ligne par ligne ; le certificat, émis sur le nouveau serveur ; les tâches planifiées, recréées ; les envois de mails du site, réglés et testés. Les boîtes mail, les tâches planifiées et les envois de mails sont ceux qu’on oublie facilement.',
      header: 'Exemple construit · un site avec une base de données et des boîtes mail chez le même hébergeur · sept éléments, une méthode chacun',
      old: 'Ancien hébergeur', neu: 'Nouvel hébergeur',
      items: [['Les fichiers du site', 'copie'], ['La base de données', 'export, puis import'], ['Les boîtes mail', 'copiées une par une'], ['La zone DNS', 'recréée ligne par ligne'], ['Le certificat', 'émis sur le nouveau serveur'], ['Les tâches planifiées', 'recréées'], ['Les envois de mails du site', 'réglés et testés']],
      oldSum: 'reste allumé sept jours, puis se résilie', neuSum: '7 éléments sur 7, chacun essayé',
      band: 'En accent, ce qu’on oublie facilement : les boîtes mail, les tâches de nuit, et les messages que le site envoie lui-même.',
      tiles: [
        { big: '7 choses, pas une', l1: 'des fichiers, une base, des boîtes, une zone, des réglages', l2: 'la liste se fait avant de choisir la date' },
        { big: 'les boîtes mail', l1: 'ce qui se remarque en premier quand on l’a oublié', l2: 'chaque boîte, chaque redirection', hot: true },
        { big: 'essayer avant', l1: 'le nouveau site s’essaie sous une adresse provisoire', l2: 'avant que le premier visiteur n’y arrive' },
      ],
      line1: 'La page d’accueil est la première chose qu’on vérifie ; les mails, les formulaires et les tâches de nuit sont celles qu’on oublie de vérifier.',
      line2: 'D’où l’inventaire : sept lignes, une méthode et un essai pour chacune.',
      note: 'Exemple construit · la liste change selon le site ; faites la vôtre avec l’hébergeur actuel sous les yeux.',
    },
    bascule: {
      title: 'La bascule, heure par heure',
      alt: 'Quatre lignes sur un axe de temps, de 72 heures avant la bascule à 48 heures après. Le cache des DNS : long, puis abaissé à 5 minutes 48 heures avant, puis relevé 24 heures après. L’ancien hébergeur : en service jusqu’à la bascule, puis gardé allumé sans modification. Le nouvel hébergeur : copie et essais à partir de 48 heures avant, gel et dernière copie 4 heures avant, en service après. Les visiteurs sur le nouveau serveur : aucun avant la bascule, tous deux heures après.',
      header: 'Exemple construit · de 72 heures avant à 48 heures après la bascule · quatre lignes, un seul changement d’adresse',
      lanes: ['Cache des DNS', 'Ancien hébergeur', 'Nouvel hébergeur', 'Visiteurs sur le nouveau'],
      ticks: ['−72 h', '−48 h', '−24 h', '0', '+24 h', '+48 h'],
      dns: ['long', 'abaissé à 5 minutes'], oldBar: ['en service', 'allumé, sans modification'], neuBar: ['copie et essais', 'en service'],
      freeze: 'gel et dernière copie, 4 h avant', switchLabel: 'bascule : une adresse change dans les DNS',
      visitors: ['aucun', 'tous, deux heures après'],
      band: 'Une bascule sans coupure est une question d’ordre : tout est prêt et essayé sur le nouveau serveur avant qu’une seule adresse ne change.',
      tiles: [
        { big: '5 minutes', l1: 'la durée de cache des DNS, abaissée deux jours avant', l2: 'la bascule se voit vite, le retour aussi', hot: true },
        { big: 'gel de 4 heures', l1: 'plus aucune modification sur l’ancien site avant la dernière copie', l2: 'sinon une commande ou un message se perd' },
        { big: 'l’ancien reste 7 jours', l1: 'allumé, intact, prêt à reprendre', l2: 'revenir en arrière = repointer les DNS' },
      ],
      line1: 'Tant que l’ancien hébergeur reste allumé et intact, la décision se défait en quelques minutes.',
      line2: 'C’est pour cela qu’on ne résilie rien, et qu’on ne transfère pas le nom de domaine, la même semaine.',
      note: 'Exemple construit · heures indicatives ; certains serveurs de cache gardent une adresse plus longtemps que la durée réglée.',
    },
  },
  en: {
    demenager: {
      title: 'Seven things to move, not one',
      alt: 'Two boxes: the old host and the new one. Seven items go from one to the other, each with its method: the site’s files, by copying; the database, by export then import; the mailboxes, copied one by one; the DNS zone, recreated line by line; the certificate, issued on the new server; the scheduled tasks, recreated; the mail the site sends, configured and tested. The mailboxes, the scheduled tasks and the mail sending are the ones easily forgotten.',
      header: 'Constructed example · a site with a database and mailboxes at the same host · seven items, one method each',
      old: 'Old host', neu: 'New host',
      items: [['The site’s files', 'copy'], ['The database', 'export, then import'], ['The mailboxes', 'copied one by one'], ['The DNS zone', 'recreated line by line'], ['The certificate', 'issued on the new server'], ['The scheduled tasks', 'recreated'], ['Mail sent by the site', 'configured and tested']],
      oldSum: 'stays on for seven days, then is cancelled', neuSum: '7 items out of 7, each one tested',
      band: 'Accented, what is easily forgotten: the mailboxes, the night tasks, and the messages the site sends by itself.',
      tiles: [
        { big: '7 things, not one', l1: 'files, a database, mailboxes, a zone, settings', l2: 'the list is made before choosing the date' },
        { big: 'the mailboxes', l1: 'what is noticed first when it has been forgotten', l2: 'each mailbox, each forward', hot: true },
        { big: 'test beforehand', l1: 'the new site is tried under a temporary address', l2: 'before the first visitor gets there' },
      ],
      line1: 'The home page is the first thing people check; mail, forms and night tasks are the ones they forget to check.',
      line2: 'Hence the inventory: seven lines, one method and one test for each.',
      note: 'Constructed example · the list changes with the site; make yours with the current host in front of you.',
    },
    bascule: {
      title: 'The switch, hour by hour',
      alt: 'Four lanes on a time axis, from 72 hours before the switch to 48 hours after. The DNS cache: long, then lowered to 5 minutes 48 hours before, then raised again 24 hours after. The old host: in service until the switch, then kept on with no changes. The new host: copy and tests from 48 hours before, freeze and last copy 4 hours before, in service after. Visitors on the new server: none before the switch, all of them two hours after.',
      header: 'Constructed example · from 72 hours before to 48 hours after the switch · four lanes, a single change of address',
      lanes: ['DNS cache', 'Old host', 'New host', 'Visitors on the new one'],
      ticks: ['−72 h', '−48 h', '−24 h', '0', '+24 h', '+48 h'],
      dns: ['long', 'lowered to 5 minutes'], oldBar: ['in service', 'on, with no changes'], neuBar: ['copy and tests', 'in service'],
      freeze: 'freeze and last copy, 4 h before', switchLabel: 'switch: one address changes in the DNS',
      visitors: ['none', 'all, two hours after'],
      band: 'A switch with no cut is a matter of order: everything is ready and tested on the new server before a single address changes.',
      tiles: [
        { big: '5 minutes', l1: 'the DNS cache time, lowered two days before', l2: 'the switch shows quickly, so does the way back', hot: true },
        { big: '4-hour freeze', l1: 'no more changes on the old site before the last copy', l2: 'otherwise an order or a message is lost' },
        { big: 'the old one stays 7 days', l1: 'on, intact, ready to take over again', l2: 'going back = pointing the DNS back' },
      ],
      line1: 'As long as the old host stays on and intact, the decision can be undone in a few minutes.',
      line2: 'That is why nothing is cancelled, and the domain name is not transferred, in the same week.',
      note: 'Constructed example · indicative hours; some caching servers keep an address longer than the time set.',
    },
  },
  ar: {
    demenager: {
      title: 'سبعة أشياء تُنقل، لا واحد',
      alt: 'علبتان: المستضيف القديم والجديد. سبعة عناصر تنتقل من واحدة إلى أخرى، ولكل واحد طريقته: ملفات الموقع، بالنسخ؛ قاعدة البيانات، بالتصدير ثم الاستيراد؛ علب البريد، تُنسخ واحدة واحدة؛ منطقة أسماء النطاقات، تُعاد سطراً بسطر؛ الشهادة، تُصدَر على الخادم الجديد؛ المهام المبرمجة، تُعاد؛ ورسائل الموقع، تُضبط وتُجرَّب. وعلب البريد والمهام المبرمجة ورسائل الموقع هي التي تُنسى بسهولة.',
      header: 'مثال مركَّب · موقع بقاعدة بيانات وعلب بريد عند المستضيف نفسه · سبعة عناصر، وطريقة لكل واحد',
      old: 'المستضيف القديم', neu: 'المستضيف الجديد',
      items: [['ملفات الموقع', 'نسخ'], ['قاعدة البيانات', 'تصدير، ثم استيراد'], ['علب البريد', 'تُنسخ واحدة واحدة'], ['منطقة أسماء النطاقات', 'تُعاد سطراً بسطر'], ['الشهادة', 'تُصدَر على الخادم الجديد'], ['المهام المبرمجة', 'تُعاد'], ['رسائل يرسلها الموقع', 'تُضبط وتُجرَّب']],
      oldSum: 'يبقى مشغَّلاً سبعة أيام، ثم يُفسخ', neuSum: '7 عناصر من 7، وكل واحد مجرَّب',
      band: 'المبرز هو ما يُنسى بسهولة: علب البريد، مهام الليل، والرسائل التي يرسلها الموقع بنفسه.',
      tiles: [
        { big: '7 أشياء، لا واحد', l1: 'ملفات، قاعدة، علب، منطقة، وإعدادات', l2: 'القائمة تُنجز قبل اختيار التاريخ' },
        { big: 'علب البريد', l1: 'ما يُلاحَظ أولاً حين يُنسى', l2: 'كل علبة، وكل تحويل', hot: true },
        { big: 'التجربة قبلاً', l1: 'الموقع الجديد يُجرَّب تحت عنوان مؤقت', l2: 'قبل أن يصل إليه أول زائر' },
      ],
      line1: 'الصفحة الرئيسية أول ما يُراجَع؛ والبريد والاستمارات ومهام الليل هي التي تُنسى مراجعتها.',
      line2: 'ومن هنا الجرد: سبعة أسطر، وطريقة وتجربة لكل واحد.',
      note: 'مثال مركَّب · القائمة تتغيّر حسب الموقع؛ أنجزوا قائمتكم والمستضيف الحالي أمامكم.',
    },
    bascule: {
      title: 'التبديل، ساعة بعد ساعة',
      alt: 'أربعة أسطر على محور زمني، من 72 ساعة قبل التبديل إلى 48 ساعة بعده. مدة حفظ أسماء النطاقات: طويلة، ثم تُخفَّض إلى 5 دقائق قبل 48 ساعة، ثم تُرفع بعد 24 ساعة. المستضيف القديم: في الخدمة إلى غاية التبديل، ثم يبقى مشغَّلاً دون تعديل. المستضيف الجديد: نسخ وتجارب من 48 ساعة قبل، تجميد وآخر نسخة قبل 4 ساعات، ثم في الخدمة. والزوّار على الخادم الجديد: لا أحد قبل التبديل، والكل بعد ساعتين.',
      header: 'مثال مركَّب · من 72 ساعة قبل التبديل إلى 48 ساعة بعده · أربعة أسطر، وتغيير عنوان واحد',
      lanes: ['مدة حفظ الأسماء', 'المستضيف القديم', 'المستضيف الجديد', 'الزوّار على الجديد'],
      ticks: ['⁦−72⁩', '⁦−48⁩', '⁦−24⁩', '0', '⁦+24⁩', '⁦+48⁩'],
      dns: ['طويلة', 'مخفَّضة إلى 5 دقائق'], oldBar: ['في الخدمة', 'مشغَّل، دون تعديل'], neuBar: ['نسخ وتجارب', 'في الخدمة'],
      freeze: 'تجميد وآخر نسخة، قبل 4 ساعات', switchLabel: 'التبديل: عنوان واحد يتغيّر',
      visitors: ['لا أحد', 'الكل، بعد ساعتين'],
      band: 'التبديل دون انقطاع مسألة ترتيب: كل شيء جاهز ومجرَّب على الخادم الجديد قبل أن يتغيّر عنوان واحد.',
      tiles: [
        { big: '5 دقائق', l1: 'مدة حفظ أسماء النطاقات، مخفَّضة قبل يومين', l2: 'التبديل يُرى بسرعة، والرجوع كذلك', hot: true },
        { big: 'تجميد 4 ساعات', l1: 'لا تعديل على الموقع القديم قبل آخر نسخة', l2: 'وإلا ضاعت طلبية أو رسالة' },
        { big: 'القديم يبقى 7 أيام', l1: 'مشغَّلاً، سليماً، وجاهزاً للعودة', l2: 'الرجوع = إعادة توجيه الأسماء' },
      ],
      line1: 'ما دام المستضيف القديم مشغَّلاً وسليماً، فالقرار يُلغى في بضع دقائق.',
      line2: 'ولهذا لا يُفسخ شيء، ولا يُنقل اسم النطاق، في الأسبوع نفسه.',
      note: 'مثال مركَّب · ساعات تقريبية؛ وبعض خوادم الحفظ تحتفظ بالعنوان أطول من المدة المضبوطة.',
    },
  },
};
