// Bespoke animated figures for the 2027 "data center en Algérie" page.
//  formules(): who looks after what. A grid of six responsibility rows by four
//              ways of running a server (office cupboard, colocation, rented
//              server, virtual server). Columns fill one after another; the
//              accented cells are what stays with the company, and a frontier
//              line is drawn between the company's part and the operator's.
//  lien():     the same company before and after the server leaves the office.
//              Left, the server sits at head office and the two branches reach
//              it over the internet. Right, the server sits in the data center
//              and every site reaches it over its own link; the head-office
//              link is accented and a second, dashed link appears last.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function pop(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scale(0)}${(at + 1.5).toFixed(1)}%,100%{transform:scale(1)}}`); return `transform-box:fill-box;transform-origin:center;animation:${P}-${id} ${LOOP}s linear infinite`; }
function drawLine(css, P, id, at, dur, len) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{stroke-dashoffset:${len.toFixed(0)}}${(at + dur).toFixed(1)}%,100%{stroke-dashoffset:0}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
const TINT = 'rgba(242,181,68,0.06)';
const DARK = '#0b0b0b';

function tiles(c, css, P, ky, ts, at0) {
  let s = '';
  ts.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, at0 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? TINT : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  return s;
}
const motionOff = (P) => `@media (prefers-reduced-motion: reduce){svg [style*="${P}-"]{animation:none !important}}`;

// rows from the top of the stack to the bottom; 1 = the company, 0 = the operator
// columns: office cupboard, colocation, rented server, virtual server
const OWNER = [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0]];

export function formules(t, rtl) {
  const c = ctx(rtl); const P = 'df'; const css = []; const H = 694;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const cx = [300, 507, 714, 921]; const cw = 199; const y0 = 200; const pitch = 44; const rh = 38;
  t.rows.forEach((label, r) => { s += `<g style="animation:${show(css, P, `r${r}`, 3 + r * 0.6)}">` + text(c, 80, y0 + r * pitch + 24, label, { size: 10.5, fill: C.fg, weight: r < 3 ? 500 : 300 }) + '</g>'; });
  t.cols.forEach(([name, sub], i) => {
    const x = cx[i]; const at = 8 + i * 10;
    s += `<g style="animation:${show(css, P, `c${i}`, at)}">` + rect(c, x, 142, cw, 46, { stroke: i === 0 ? C.line2 : C.fg70, fill: DARK }) + text(c, x + 12, 161, name, { size: 11, fill: C.fg, weight: 500 }) + text(c, x + 12, 178, sub, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>';
    OWNER.forEach((row, r) => {
      const you = row[i] === 1; const y = y0 + r * pitch;
      s += `<g style="animation:${show(css, P, `x${i}${r}`, at + 1.5 + r * 1.1)}">` + rect(c, x, y, cw, rh, { stroke: you ? C.accent : C.line2, fill: you ? TINT : C.fill }) + text(c, x + cw / 2, y + 24, you ? t.you : t.op, { size: 10, font: 'mono', fill: you ? C.accent : C.fg55, weight: you ? 500 : 300, anchor: 'middle' }) + '</g>';
    });
  });
  // the frontier between what stays with the company and what the operator takes
  const fy1 = y0 + 4 * pitch - 3, fy2 = y0 + 3 * pitch - 3; const flen = 207 + 44 + 410;
  s += `<polyline points="${c.X(503)},${fy1} ${c.X(710)},${fy1} ${c.X(710)},${fy2} ${c.X(1120)},${fy2}" fill="none" stroke="${C.accent}" stroke-width="2.5" stroke-dasharray="${flen}" style="animation:${drawLine(css, P, 'fr', 50, 5, flen)}"/>`;
  const by = 474;
  s += `<g style="animation:${show(css, P, 'bd', 57)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 534;
  s += tiles(c, css, P, ky, t.tiles, 60);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

function site(c, x, y, w, h, name, sub, o = {}) {
  return rect(c, x, y, w, h, { stroke: o.stroke || C.line2, fill: o.fill || C.fill }) + text(c, x + 12, y + 18, name, { size: 10.5, fill: C.fg, weight: 500 }) + text(c, x + 12, y + 33, sub, { size: 8.5, font: 'mono', fill: C.fg55 });
}
function scenario(c, x, y, w, pair, hot) {
  return rect(c, x, y, w, 44, { stroke: hot ? C.accent : C.line2, fill: hot ? TINT : C.fill }) + text(c, x + 12, y + 18, pair[0], { size: 10.5, fill: hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, y + 34, pair[1], { size: 9, font: 'mono', fill: C.fg70 });
}
function link(c, css, P, id, at, x1, y1, x2, y2, hot) {
  const len = Math.hypot(x2 - x1, y2 - y1);
  return `<polyline points="${c.X(x1)},${y1} ${c.X(x2)},${y2}" fill="none" stroke="${hot ? C.accent : C.fg70}" stroke-width="${hot ? 2.5 : 1.5}" stroke-dasharray="${len.toFixed(0)}" style="animation:${drawLine(css, P, id, at, 2, len)}"/>`;
}

export function lien(t, rtl) {
  const c = ctx(rtl); const P = 'dl'; const css = []; const H = 660;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  // left: the server sits at head office
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 500, 280, { stroke: C.fg35, fill: DARK }) + text(c, 96, 168, t.left, { size: 11, fill: C.fg, weight: 500 }) + '</g>';
  s += `<g style="animation:${show(css, P, 'ls', 5)}">` + site(c, 96, 186, 220, 96, t.siege, t.siegeSub) + '</g>';
  s += `<g style="${pop(css, P, 'lv', 6.5)}">` + rect(c, 208, 236, 96, 34, { stroke: C.accent, fill: C.accent }) + text(c, 256, 258, t.server, { size: 10, fill: '#000', weight: 500, anchor: 'middle' }) + '</g>';
  t.agences.forEach(([name, sub], i) => { s += `<g style="animation:${show(css, P, `la${i}`, 9 + i * 2)}">` + site(c, 390, 186 + i * 54, 174, 42, name, sub) + '</g>'; });
  s += link(c, css, P, 'll0', 13, 390, 207, 316, 222, false) + link(c, css, P, 'll1', 15, 390, 261, 316, 246, false);
  s += `<g style="animation:${show(css, P, 'lw', 17)}">` + text(c, 353, 298, t.via, { size: 8.5, font: 'mono', fill: C.fg55, anchor: 'middle' }) + '</g>';
  s += `<g style="animation:${show(css, P, 'lx', 20)}">` + scenario(c, 96, 312, 468, t.la, true) + '</g>';
  s += `<g style="animation:${show(css, P, 'ly', 24)}">` + scenario(c, 96, 364, 468, t.lb, false) + '</g>';
  // right: the server sits in the data center
  s += `<g style="animation:${show(css, P, 'pb', 29)}">` + rect(c, 600, 144, 520, 280, { stroke: C.accent, fill: TINT }) + text(c, 616, 168, t.right, { size: 11, fill: C.fg, weight: 500 }) + '</g>';
  s += `<g style="animation:${show(css, P, 'rd', 31)}">` + rect(c, 770, 180, 190, 52, { stroke: C.accent, fill: DARK }) + text(c, 782, 199, t.dc, { size: 10.5, fill: C.fg, weight: 500 }) + '</g>';
  s += `<g style="${pop(css, P, 'rv', 32.5)}">` + rect(c, 782, 207, 84, 18, { stroke: C.accent, fill: C.accent }) + text(c, 824, 220, t.server, { size: 9, fill: '#000', weight: 500, anchor: 'middle' }) + '</g>';
  s += `<g style="animation:${show(css, P, 'rs', 35)}">` + site(c, 616, 262, 190, 42, t.siege, t.siegeSub, { fill: DARK, stroke: C.fg70 }) + '</g>';
  t.agences.forEach(([name, sub], i) => { s += `<g style="animation:${show(css, P, `ra${i}`, 37 + i * 2)}">` + site(c, [822, 978][i], 262, [140, 126][i], 42, name, sub, { fill: DARK }) + '</g>'; });
  s += link(c, css, P, 'rl0', 41, 730, 262, 810, 232, true) + link(c, css, P, 'rl1', 43, 892, 262, 865, 232, false) + link(c, css, P, 'rl2', 45, 1041, 262, 925, 232, false);
  s += `<g style="animation:${show(css, P, 'rx', 48)}">` + scenario(c, 616, 312, 488, t.ra, false) + '</g>';
  s += `<g style="animation:${show(css, P, 'ry', 52)}">` + scenario(c, 616, 364, 488, t.rb, true) + '</g>';
  // the second link, from another operator
  s += `<g style="animation:${show(css, P, 'r2', 57)}"><polyline points="${c.X(700)},262 ${c.X(790)},232" fill="none" stroke="${C.accent}" stroke-width="2" stroke-dasharray="5 4"/>` + text(c, 616, 226, t.second, { size: 8.5, font: 'mono', fill: C.accent }) + '</g>';
  const by = 440;
  s += `<g style="animation:${show(css, P, 'bd', 61)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 500;
  s += tiles(c, css, P, ky, t.tiles, 64);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    formules: {
      title: 'Quatre formules : qui s’occupe de quoi',
      alt: 'Grille de six lignes et quatre colonnes. Les colonnes : le serveur au bureau, la colocation, le serveur loué, le serveur virtuel. Les lignes, de haut en bas : sauvegardes et restauration, logiciels et données, système et mises à jour, la machine, les liaisons internet, le courant, le froid et l’accès. Au bureau, tout est à la charge de l’entreprise. En colocation, l’opérateur prend le courant, le froid, l’accès et les liaisons. Avec un serveur loué ou virtuel, il prend aussi la machine. Les trois lignes du haut restent à l’entreprise dans les quatre cas.',
      header: 'Du placard au serveur virtuel · six lignes de responsabilité · en accent : ce qui reste à votre charge',
      cols: [['Au bureau', 'votre machine, votre placard'], ['Colocation', 'votre machine, leur salle'], ['Serveur loué', 'leur machine, pour vous seul'], ['Serveur virtuel', 'une part de leurs machines']],
      rows: ['Sauvegardes et restauration', 'Logiciels et données', 'Système et mises à jour', 'La machine : disques, pannes', 'Liaisons internet', 'Courant, froid, accès'],
      you: 'vous', op: 'l’opérateur',
      band: 'Dans les quatre cas, les trois lignes du haut restent à vous : aucun centre de données ne restaure vos fichiers à votre place.',
      tiles: [
        { big: '3 lignes sur 6', l1: 'sauvegardes, logiciels, système : toujours à vous', l2: 'sauf service ajouté au contrat', hot: true },
        { big: 'colocation', l1: 'vous gardez la machine, et donc ses pannes', l2: 'utile si elle est récente' },
        { big: 'serveur loué', l1: 'la panne de disque devient celle de l’opérateur', l2: 'utile si la vôtre a fait son temps' },
      ],
      line1: 'Un centre de données prend en charge le bas de la pile : le bâtiment, le courant, le froid, les liaisons.',
      line2: 'Le haut de la pile ne change pas de mains : qui met à jour, qui sauvegarde, qui restaure ? Écrivez un nom.',
      note: 'Répartition habituelle ; votre contrat fait foi : lisez la ligne « à la charge du client ».',
    },
    lien: {
      title: 'Le serveur parti, le lien du bureau devient vital',
      alt: 'Deux panneaux. À gauche, le serveur est au siège : trente postes y accèdent par le réseau local, deux agences de quatre postes par internet. Une coupure de courant au siège arrête les 38 postes ; une coupure d’internet au siège laisse travailler les trente postes du siège. À droite, le serveur est au centre de données : chaque site y accède par son propre lien. Une coupure de courant au siège n’arrête plus les agences ; une coupure d’internet au siège arrête les trente postes du siège, sauf si un second lien, d’un autre opérateur, prend le relais.',
      header: 'Exemple construit · un siège de 30 postes, deux agences de 4 postes · le même serveur, avant et après',
      left: 'Avant : le serveur est au siège', right: 'Après : le serveur est au centre de données',
      siege: 'Siège', siegeSub: '30 postes', agences: [['Agence 1', '4 postes'], ['Agence 2', '4 postes']],
      server: 'serveur', dc: 'Centre de données', via: 'par internet', second: 'second lien, autre opérateur',
      la: ['Coupure de courant au siège', '38 postes arrêtés : le siège et les deux agences'],
      lb: ['Coupure d’internet au siège', '30 postes travaillent, 8 arrêtés'],
      ra: ['Coupure de courant au siège', '8 postes travaillent : les agences continuent'],
      rb: ['Coupure d’internet au siège', '30 postes arrêtés, sauf si un second lien prend le relais'],
      band: 'Le centre de données retire la panne de courant et met le lien du bureau à sa place : on ne déménage pas un serveur sans doubler le lien.',
      tiles: [
        { big: '38 postes', l1: 'trente au siège, quatre dans chacune des deux agences', l2: 'tous dépendent du même serveur' },
        { big: 'le risque se déplace', l1: 'du courant du siège vers le lien du siège', l2: 'il ne disparaît pas', hot: true },
        { big: '2 liens, 2 opérateurs', l1: 'le second prend le relais sans intervention', l2: 'essayé en débranchant le premier' },
      ],
      line1: 'Avant de déménager le serveur, mesurez le lien du siège pendant deux semaines : débit réel, coupures, heures.',
      line2: 'Puis doublez-le : un second lien, d’un autre opérateur, qui prend le relais tout seul, et que l’on essaie.',
      note: 'Exemple construit · 38 postes sur trois sites ; refaites le schéma avec les vôtres.',
    },
  },
  en: {
    formules: {
      title: 'Four ways: who looks after what',
      alt: 'A grid of six rows and four columns. The columns: the server at the office, colocation, a rented server, a virtual server. The rows, from top to bottom: backups and restoring, software and data, system and updates, the machine, internet links, power, cooling and access. At the office, everything is the company’s job. In colocation, the operator takes power, cooling, access and links. With a rented or virtual server, it also takes the machine. The three top rows stay with the company in all four cases.',
      header: 'From the cupboard to the virtual server · six rows of responsibility · accented: what stays with you',
      cols: [['At the office', 'your machine, your cupboard'], ['Colocation', 'your machine, their room'], ['Rented server', 'their machine, yours alone'], ['Virtual server', 'a share of their machines']],
      rows: ['Backups and restoring', 'Software and data', 'System and updates', 'The machine: disks, failures', 'Internet links', 'Power, cooling, access'],
      you: 'you', op: 'the operator',
      band: 'In all four cases, the three top rows stay with you: no data center restores your files in your place.',
      tiles: [
        { big: '3 rows out of 6', l1: 'backups, software, system: always yours', l2: 'unless a service is added to the contract', hot: true },
        { big: 'colocation', l1: 'you keep the machine, and so its failures', l2: 'useful if it is recent' },
        { big: 'rented server', l1: 'the disk failure becomes the operator’s', l2: 'useful if yours has had its day' },
      ],
      line1: 'A data center takes over the bottom of the stack: the building, power, cooling, the links.',
      line2: 'The top of the stack does not change hands: who updates, who backs up, who restores? Write a name.',
      note: 'The usual split; your contract decides: read the line “at the customer’s charge”.',
    },
    lien: {
      title: 'Once the server has left, the office link becomes vital',
      alt: 'Two panels. On the left, the server is at head office: thirty computers reach it over the local network, two branches of four computers over the internet. A power cut at head office stops all 38 computers; an internet cut at head office lets the thirty head-office computers go on working. On the right, the server is in the data center: each site reaches it over its own link. A power cut at head office no longer stops the branches; an internet cut at head office stops the thirty head-office computers, unless a second link, from another operator, takes over.',
      header: 'Constructed example · a head office of 30 computers, two branches of 4 · the same server, before and after',
      left: 'Before: the server is at head office', right: 'After: the server is in the data center',
      siege: 'Head office', siegeSub: '30 computers', agences: [['Branch 1', '4 computers'], ['Branch 2', '4 computers']],
      server: 'server', dc: 'Data center', via: 'over the internet', second: 'second link, another operator',
      la: ['Power cut at head office', '38 computers stopped: head office and both branches'],
      lb: ['Internet cut at head office', '30 computers work, 8 stopped'],
      ra: ['Power cut at head office', '8 computers work: the branches carry on'],
      rb: ['Internet cut at head office', '30 computers stopped, unless a second link takes over'],
      band: 'The data center removes the power failure and puts the office link in its place: never move a server without doubling the link.',
      tiles: [
        { big: '38 computers', l1: 'thirty at head office, four in each of the two branches', l2: 'all depend on the same server' },
        { big: 'the risk moves', l1: 'from head-office power to the head-office link', l2: 'it does not disappear', hot: true },
        { big: '2 links, 2 operators', l1: 'the second takes over with no intervention', l2: 'tested by unplugging the first' },
      ],
      line1: 'Before moving the server, measure the head-office link for two weeks: real speed, cuts, hours.',
      line2: 'Then double it: a second link, from another operator, that takes over by itself, and that is tested.',
      note: 'Constructed example · 38 computers on three sites; redraw it with your own.',
    },
  },
  ar: {
    formules: {
      title: 'أربع صيغ: من يتكفل بماذا',
      alt: 'شبكة من ستة أسطر وأربعة أعمدة. الأعمدة: الخادم في المكتب، الإيواء، الخادم المؤجَّر، والخادم الافتراضي. والأسطر، من الأعلى إلى الأسفل: النسخ الاحتياطية والاسترجاع، البرامج والبيانات، النظام والتحديثات، الآلة، خطوط الإنترنت، ثم الكهرباء والتبريد والدخول. في المكتب، كل شيء على عاتق المؤسسة. في الإيواء، المتعامل يتكفل بالكهرباء والتبريد والدخول والخطوط. ومع خادم مؤجَّر أو افتراضي، يتكفل بالآلة كذلك. والأسطر الثلاثة العليا تبقى على المؤسسة في الصيغ الأربع.',
      header: 'من خزانة المكتب إلى الخادم الافتراضي · ستة أسطر من المسؤولية · المبرز: ما يبقى على عاتقكم',
      cols: [['في المكتب', 'آلتكم، في خزانتكم'], ['الإيواء', 'آلتكم، في قاعتهم'], ['خادم مؤجَّر', 'آلتهم، لكم وحدكم'], ['خادم افتراضي', 'حصة من آلاتهم']],
      rows: ['النسخ الاحتياطية والاسترجاع', 'البرامج والبيانات', 'النظام والتحديثات', 'الآلة: الأقراص والأعطال', 'خطوط الإنترنت', 'الكهرباء، التبريد، والدخول'],
      you: 'أنتم', op: 'المتعامل',
      band: 'في الصيغ الأربع، الأسطر الثلاثة العليا تبقى عليكم: لا مركز بيانات يسترجع ملفاتكم مكانكم.',
      tiles: [
        { big: '3 أسطر من 6', l1: 'النسخ، البرامج، والنظام: دائماً عليكم', l2: 'إلا بخدمة مضافة في العقد', hot: true },
        { big: 'الإيواء', l1: 'تحتفظون بالآلة، وإذن بأعطالها', l2: 'نافع إذا كانت حديثة' },
        { big: 'خادم مؤجَّر', l1: 'عطل القرص يصير عطل المتعامل', l2: 'نافع إذا شاخت آلتكم' },
      ],
      line1: 'مركز البيانات يتكفل بأسفل السلّم: المبنى، الكهرباء، التبريد، والخطوط.',
      line2: 'وأعلى السلّم لا يغيّر صاحبه: من يحدّث، من ينسخ، ومن يسترجع؟ اكتبوا اسماً.',
      note: 'التوزيع المعتاد؛ والعقد هو المرجع: اقرؤوا سطر «على عاتق الزبون».',
    },
    lien: {
      title: 'الخادم غادر، فخط المكتب صار حيوياً',
      alt: 'لوحتان. في الأولى، الخادم في المقر: ثلاثون حاسوباً تصل إليه عبر الشبكة المحلية، ووكالتان بأربعة حواسيب عبر الإنترنت. انقطاع الكهرباء في المقر يوقف الحواسيب الـ 38؛ وانقطاع الإنترنت في المقر يترك حواسيب المقر الثلاثين تعمل. وفي الثانية، الخادم في مركز البيانات: كل موقع يصل إليه عبر خطه. انقطاع الكهرباء في المقر لم يعد يوقف الوكالتين؛ وانقطاع الإنترنت في المقر يوقف حواسيب المقر الثلاثين، إلا إذا أخذ خط ثانٍ، من متعامل آخر، المشعل.',
      header: 'مثال مركَّب · مقر بـ 30 حاسوباً، ووكالتان بـ 4 حواسيب · الخادم نفسه، قبل وبعد',
      left: 'قبل: الخادم في المقر', right: 'بعد: الخادم في مركز البيانات',
      siege: 'المقر', siegeSub: '30 حاسوباً', agences: [['الوكالة 1', '4 حواسيب'], ['الوكالة 2', '4 حواسيب']],
      server: 'الخادم', dc: 'مركز البيانات', via: 'عبر الإنترنت', second: 'خط ثانٍ، من متعامل آخر',
      la: ['انقطاع الكهرباء في المقر', '38 حاسوباً متوقفاً: المقر والوكالتان'],
      lb: ['انقطاع الإنترنت في المقر', '30 حاسوباً يعمل، و8 متوقفة'],
      ra: ['انقطاع الكهرباء في المقر', '8 حواسيب تعمل: الوكالتان تواصلان'],
      rb: ['انقطاع الإنترنت في المقر', '30 حاسوباً متوقفاً، إلا إذا أخذ خط ثانٍ المشعل'],
      band: 'مركز البيانات ينزع عطل الكهرباء، ويضع خط المكتب مكانه: لا يُنقل خادم دون مضاعفة الخط.',
      tiles: [
        { big: '38 حاسوباً', l1: 'ثلاثون في المقر، وأربعة في كل وكالة', l2: 'كلها تتوقف على الخادم نفسه' },
        { big: 'الخطر ينتقل', l1: 'من كهرباء المقر إلى خط المقر', l2: 'ولا يختفي', hot: true },
        { big: 'خطان، متعاملان', l1: 'الثاني يأخذ المشعل دون تدخل', l2: 'ويُجرَّب بفصل الأول' },
      ],
      line1: 'قبل نقل الخادم، قيسوا خط المقر أسبوعين: الصبيب الحقيقي، الانقطاعات، والساعات.',
      line2: 'ثم ضاعفوه: خط ثانٍ، من متعامل آخر، يأخذ المشعل وحده، ويُجرَّب.',
      note: 'مثال مركَّب · 38 حاسوباً في ثلاثة مواقع؛ أعيدوا الرسم بمواقعكم.',
    },
  },
};
