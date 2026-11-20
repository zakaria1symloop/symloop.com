// Bespoke animated figures for the 2027 "nom de domaine et hébergement" post.
//  chaine():   the four accounts behind a company's site and mail. The name
//              and the DNS zone on the left, the site and the mailboxes on the
//              right; connectors draw themselves, a visit and a mail travel as
//              two dots through the name and the zone; each card says in whose
//              name the account is, its due date and who has access; a band
//              states what happens when the name expires; three tiles.
//  echeance(): what happens around the expiry date. Five segments, before the
//              due date, after it, redemption, deletion, free name; a marker
//              travels along them and, under each, two status rows appear:
//              site and mail, and what you can still do; three tiles.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
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
const poly = (c, css, P, id, pts, stroke, at, dur) => { let len = 0; for (let i = 1; i < pts.length; i++) len += Math.abs(pts[i][0] - pts[i - 1][0]) + Math.abs(pts[i][1] - pts[i - 1][1]); const L = Math.ceil(len); return `<polyline points="${pts.map(([x, y]) => `${c.X(x).toFixed(1)},${y.toFixed(1)}`).join(' ')}" fill="none" stroke="${stroke}" stroke-width="1.5" stroke-dasharray="${L}" style="animation:${drawLine(css, P, id, at, dur, L)}"/>`; };
// a dot that follows a list of points, one keyframe per corner
function runner(c, css, P, id, pts, fill, at, dur) {
  let total = 0; const seg = []; for (let i = 1; i < pts.length; i++) { const d = Math.abs(pts[i][0] - pts[i - 1][0]) + Math.abs(pts[i][1] - pts[i - 1][1]); seg.push(d); total += d; }
  const end = pts[pts.length - 1]; let acc = 0;
  const frames = pts.map((p, i) => { if (i) acc += seg[i - 1]; const pct = at + (acc / total) * dur; return `${pct.toFixed(1)}%{transform:translate(${(c.X(p[0]) - c.X(end[0])).toFixed(1)}px,${(p[1] - end[1]).toFixed(1)}px)}`; });
  const first = `0%{transform:translate(${(c.X(pts[0][0]) - c.X(end[0])).toFixed(1)}px,${(pts[0][1] - end[1]).toFixed(1)}px)}`;
  css.push(`@keyframes ${P}-${id}{${first}${frames.join('')}100%{transform:translate(0,0)}}`);
  return `<circle cx="${c.X(end[0]).toFixed(1)}" cy="${end[1]}" r="5" fill="${fill}" style="animation:${P}-${id} ${LOOP}s linear infinite"/>`;
}

export function chaine(t, rtl) {
  const c = ctx(rtl); const P = 'dc'; const css = []; const H = 586;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'in', 3)}">` + text(c, 80, 162, t.entry, { size: 9.5, font: 'mono', fill: C.fg55 }) + '</g>';
  const my = 246;
  // the name and the zone
  [[80, 0], [400, 1]].forEach(([x, i]) => {
    const k = t.cards[i];
    s += `<g style="animation:${show(css, P, `c${i}`, 5 + i * 7)}">` + rect(c, x, my - 62, 240, 124, { stroke: C.accent, fill: TINT }) + text(c, x + 14, my - 38, k.name, { size: 12.5, fill: C.accent, weight: 500 }) + text(c, x + 14, my - 20, k.what, { size: 9.5, fill: C.fg70 })
      + line(c, x + 14, my - 8, x + 226, my - 8, { stroke: C.line2 }) + text(c, x + 14, my + 10, k.rows[0], { size: 9, font: 'mono', fill: C.accent }) + text(c, x + 14, my + 28, k.rows[1], { size: 9, font: 'mono', fill: C.fg70 }) + text(c, x + 14, my + 46, k.rows[2], { size: 9, font: 'mono', fill: C.fg70 }) + '</g>';
  });
  s += poly(c, css, P, 'p0', [[320, my], [400, my]], C.fg70, 9, 2);
  // the site and the mailboxes
  const ys = [my - 53, my + 53];
  [2, 3].forEach((i, n) => {
    const k = t.cards[i]; const y = ys[n];
    s += poly(c, css, P, `p${i}`, [[640, my], [700, my], [700, y], [760, y]], C.fg70, 17 + n * 6, 3);
    s += `<g style="animation:${show(css, P, `c${i}`, 20.5 + n * 6)}">` + rect(c, 760, y - 43, 360, 86, { stroke: C.line2, fill: DARK }) + text(c, 774, y - 19, k.name, { size: 12.5, fill: C.fg, weight: 500 }) + text(c, 774, y - 1, k.what, { size: 9.5, fill: C.fg70 })
      + text(c, 774, y + 19, k.rows[0], { size: 9, font: 'mono', fill: C.fg70 }) + text(c, 774, y + 33, k.rows[1], { size: 9, font: 'mono', fill: C.fg55 }) + text(c, 1106, y + 33, k.rows[2], { size: 9, font: 'mono', fill: C.fg55, anchor: 'end' }) + '</g>';
  });
  // a visit and a mail travel through the name and the zone
  s += runner(c, css, P, 'r0', [[92, my + 74], [330, my + 74], [330, my], [700, my], [700, ys[0]], [752, ys[0]]], C.fg, 32, 8);
  s += runner(c, css, P, 'r1', [[92, my + 74], [330, my + 74], [330, my], [700, my], [700, ys[1]], [752, ys[1]]], C.fg70, 41, 8);
  const by = 366;
  s += `<g style="animation:${show(css, P, 'b', 52)}">` + rect(c, 80, by, 1040, 42, { stroke: C.accent, fill: TINT }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.accent }) + '</g>';
  const ky = 426;
  s += tiles(c, css, P, ky, t.tiles, 60);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// widths of the five segments (schematic, not to scale)
const SEG = [260, 250, 250, 140, 140];

export function echeance(t, rtl) {
  const c = ctx(rtl); const P = 'de'; const css = []; const H = 600;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const sy = 186, sh = 50; let x = 80; const xs = [];
  SEG.forEach((w, i) => {
    xs.push(x); const hot = i === 1 || i === 4; const at = 6 + i * 9; const k = t.segs[i];
    s += `<g style="animation:${show(css, P, `s${i}`, at)}">` + rect(c, x, sy, w - 4, sh, { stroke: hot ? C.accent : C.fg55, fill: hot ? TINT : C.fill }) + text(c, x + (w - 4) / 2, sy + 21, k.name, { size: 11, fill: hot ? C.accent : C.fg, weight: 500, anchor: 'middle' }) + text(c, x + (w - 4) / 2, sy + 38, k.dur, { size: 8.5, font: 'mono', fill: C.fg55, anchor: 'middle' }) + '</g>';
    s += `<g style="animation:${show(css, P, `a${i}`, at + 3)}">` + text(c, x + (w - 4) / 2, sy + 90, k.site, { size: 9.5, fill: i === 0 ? C.fg : C.accent, anchor: 'middle' }) + '</g>';
    s += `<g style="animation:${show(css, P, `b${i}`, at + 5)}">` + text(c, x + (w - 4) / 2, sy + 136, k.act, { size: 9.5, fill: C.fg70, anchor: 'middle' }) + '</g>';
    x += w;
  });
  // marks before the due date and the due date itself
  s += `<g style="animation:${show(css, P, 'mk', 4)}">` + [[100, 0], [222, 1], [338, 2]].map(([mx, i]) => line(c, mx, sy - 14, mx, sy - 2, { stroke: i === 2 ? C.accent : C.fg55, sw: i === 2 ? 2 : 1 }) + text(c, i === 2 ? mx + 8 : mx, sy - 20, t.marks[i], { size: 8.5, font: 'mono', fill: i === 2 ? C.accent : C.fg55 })).join('') + '</g>';
  s += `<g style="animation:${show(css, P, 'rl', 5)}">` + text(c, 80, sy + 72, t.rowA, { size: 8.5, font: 'mono', fill: C.fg55 }) + line(c, 80, sy + 100, 1116, sy + 100, { stroke: C.line2 }) + text(c, 80, sy + 118, t.rowB, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>';
  // the marker that travels along the segments
  const stops = [80, 340, 590, 840, 980, 1116];
  css.push(`@keyframes ${P}-run{0%,6%{transform:translateX(${(c.X(stops[0]) - c.X(stops[5])).toFixed(1)}px)}${stops.slice(1).map((v, i) => `${(15 + i * 9).toFixed(1)}%{transform:translateX(${(c.X(v) - c.X(stops[5])).toFixed(1)}px)}`).join('')}100%{transform:translateX(0)}}`);
  s += `<circle cx="${c.X(stops[5])}" cy="${sy + sh + 8}" r="5" fill="${C.accent}" style="animation:${P}-run ${LOOP}s linear infinite"/>`;
  const ey = 346;
  s += `<g style="animation:${show(css, P, 'ex', 56)}">` + rect(c, 80, ey, 1040, 62, { stroke: C.line2, fill: DARK }) + text(c, 96, ey + 24, t.ex1, { size: 10.5, fill: C.fg }) + text(c, 96, ey + 44, t.ex2, { size: 10.5, fill: C.fg70 }) + '</g>';
  const ky = 440;
  s += tiles(c, css, P, ky, t.tiles, 62);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    chaine: {
      title: 'Quatre comptes derrière votre site et vos mails : deux ne sont pas à votre nom',
      alt: 'Une visite ou un mail passe d’abord par le nom de domaine, puis par la zone DNS, avant d’atteindre le site ou les boîtes. Dans l’exemple, le nom est au nom de l’ancien prestataire, expire le 14 mars, et lui seul y a accès ; la zone DNS est chez son hébergeur, sous son compte ; le site est au nom de l’entreprise, payé par la carte du gérant ; les boîtes sont au nom de l’entreprise, avec deux personnes qui y ont accès. Quand le nom expire, le site est injoignable et les mails sont refusés, alors que l’hébergement et la messagerie sont payés.',
      header: 'Exemple construit · une entreprise, son site et ses mails · quatre comptes, chez trois fournisseurs',
      entry: 'une visite, un mail : tout commence par le nom',
      cards: [
        { name: '1 · Le nom', what: 'réservé chez un bureau d’enregistrement', rows: ['au nom de : l’ancien prestataire', 'échéance : 14 mars', 'accès : lui seul'] },
        { name: '2 · La zone DNS', what: 'dit où sont le site et les mails', rows: ['compte : l’ancien prestataire', 'chez son hébergeur', 'accès : lui seul'] },
        { name: '3 · Le site', what: 'les pages, chez un hébergeur', rows: ['au nom de : l’entreprise', 'payé par la carte du gérant', 'accès : le gérant'] },
        { name: '4 · Les mails', what: 'les boîtes, chez un service de messagerie', rows: ['au nom de : l’entreprise', 'abonnement mensuel', 'accès : deux personnes'] },
      ],
      band: 'Le 14 mars, le nom expire : le site devient injoignable et les mails sont refusés, alors que l’hébergement et la messagerie sont payés.',
      tiles: [
        { big: '4 comptes', l1: 'le nom, la zone, le site, les mails', l2: 'souvent chez trois fournisseurs différents' },
        { big: '2 sur 4', l1: 'au nom de quelqu’un d’autre', l2: 'le nom et la zone : ceux dont tout dépend', hot: true },
        { big: '1 échéance oubliée', l1: 'suffit à arrêter le site et les mails', l2: 'même quand tout le reste est payé' },
      ],
      line1: 'Le site et les mails ne tiennent pas à l’hébergeur : ils tiennent au nom, et à celui qui en détient le compte.',
      line2: 'Le compte du bureau d’enregistrement est la clé de tout le reste : c’est le premier à mettre au nom de l’entreprise.',
      note: 'Exemple construit · fournisseurs, dates et personnes inventés pour montrer la dépendance.',
    },
    echeance: {
      title: 'Autour de l’échéance : cinq périodes, et ce qu’on peut encore faire dans chacune',
      alt: 'Cinq périodes autour de l’échéance d’un nom de domaine. Avant l’échéance : des rappels environ un mois et environ une semaine avant, le site et les mails fonctionnent, on renouvelle en deux clics. Après l’échéance : un rappel sous cinq jours, le bureau d’enregistrement interrompt la résolution du nom, on peut renouveler si l’on a le compte. Rédemption : trente jours après la suppression, le site et les mails sont coupés, on peut demander la restauration. Suppression : quelques jours, plus rien n’est possible. Nom libre : n’importe qui peut l’enregistrer.',
      header: 'Schéma de principe · noms génériques comme .com · politique publiée par l’ICANN · durées exactes selon l’extension et le bureau',
      marks: ['≈ 1 mois avant', '≈ 1 semaine avant', 'échéance'],
      rowA: 'le site et les mails', rowB: 'ce que vous pouvez encore faire',
      segs: [
        { name: 'Avant l’échéance', dur: 'deux rappels au moins', site: 'fonctionnent', act: 'renouveler en deux clics' },
        { name: 'Après l’échéance', dur: 'un rappel sous 5 jours', site: 'coupés par le bureau d’enregistrement', act: 'renouveler, si vous avez le compte' },
        { name: 'Rédemption', dur: '30 jours après la suppression', site: 'coupés', act: 'demander la restauration' },
        { name: 'Suppression', dur: 'quelques jours', site: 'coupés', act: 'plus rien' },
        { name: 'Nom libre', dur: 'ouvert à tous', site: 'à quelqu’un d’autre', act: 'le reprendre, s’il est libre' },
      ],
      ex1: 'Dans l’exemple, les trois rappels sont partis vers l’adresse de l’ancien prestataire : personne ne les a lus.',
      ex2: 'Le site et les mails se sont arrêtés ensemble, et l’entreprise a découvert en même temps qu’elle n’avait pas le compte.',
      tiles: [
        { big: '3 rappels au moins', l1: 'un mois avant, une semaine avant, puis après', l2: 'envoyés au titulaire inscrit, pas à vous' },
        { big: '30 jours', l1: 'de rédemption après la suppression', l2: 'la dernière fenêtre pour récupérer le nom', hot: true },
        { big: '1 date à suivre', l1: 'l’échéance, dans le calendrier du gérant', l2: 'renouvellement automatique, carte valide' },
      ],
      line1: 'Un nom ne se perd pas d’un coup : il se perd parce que les rappels arrivent chez quelqu’un qui n’est plus là.',
      line2: 'Tant que le nom est renouvelable, tout se règle en dix minutes ; après, chaque étape ajoute du délai et de l’incertitude.',
      note: 'Rappels et rédemption : politique de l’ICANN sur les noms expirés ; un nom en .dz suit les règles de son propre registre.',
    },
  },
  en: {
    chaine: {
      title: 'Four accounts behind your site and your mail: two are not in your name',
      alt: 'A visit or an email first goes through the domain name, then through the DNS zone, before reaching the site or the mailboxes. In the example, the name is registered to the former provider, expires on 14 March, and only they have access; the DNS zone is at their host, under their account; the site is in the company’s name, paid with the manager’s card; the mailboxes are in the company’s name, with two people who have access. When the name expires, the site is unreachable and mail is refused, although hosting and mail are paid for.',
      header: 'Constructed example · a company, its site and its mail · four accounts, at three providers',
      entry: 'a visit, an email: everything starts with the name',
      cards: [
        { name: '1 · The name', what: 'reserved at a registrar', rows: ['registered to: the former provider', 'due date: 14 March', 'access: only them'] },
        { name: '2 · The DNS zone', what: 'says where the site and mail are', rows: ['account: the former provider', 'at their host', 'access: only them'] },
        { name: '3 · The site', what: 'the pages, at a web host', rows: ['in the name of: the company', 'paid with the manager’s card', 'access: the manager'] },
        { name: '4 · The mail', what: 'the mailboxes, at a mail service', rows: ['in the name of: the company', 'monthly subscription', 'access: two people'] },
      ],
      band: 'On 14 March the name expires: the site becomes unreachable and mail is refused, although hosting and mail are paid for.',
      tiles: [
        { big: '4 accounts', l1: 'the name, the zone, the site, the mail', l2: 'often at three different providers' },
        { big: '2 out of 4', l1: 'in someone else’s name', l2: 'the name and the zone: the ones all depends on', hot: true },
        { big: '1 forgotten due date', l1: 'is enough to stop the site and the mail', l2: 'even when everything else is paid' },
      ],
      line1: 'The site and the mail do not hang on the host: they hang on the name, and on whoever holds its account.',
      line2: 'The registrar account is the key to everything else: it is the first to put in the company’s name.',
      note: 'Constructed example · providers, dates and people invented to show the dependency.',
    },
    echeance: {
      title: 'Around the due date: five periods, and what can still be done in each',
      alt: 'Five periods around the due date of a domain name. Before the due date: reminders about one month and about one week before, the site and mail work, renewal takes two clicks. After the due date: a reminder within five days, the registrar interrupts the resolution of the name, you can renew if you have the account. Redemption: thirty days after deletion, the site and mail are cut off, you can ask for restoration. Deletion: a few days, nothing more is possible. Free name: anyone can register it.',
      header: 'Schematic · generic names such as .com · policy published by ICANN · exact durations depend on the extension and the registrar',
      marks: ['≈ 1 month before', '≈ 1 week before', 'due date'],
      rowA: 'the site and the mail', rowB: 'what you can still do',
      segs: [
        { name: 'Before the due date', dur: 'at least two reminders', site: 'working', act: 'renew in two clicks' },
        { name: 'After the due date', dur: 'a reminder within 5 days', site: 'cut off by the registrar', act: 'renew, if you have the account' },
        { name: 'Redemption', dur: '30 days after deletion', site: 'cut off', act: 'ask for restoration' },
        { name: 'Deletion', dur: 'a few days', site: 'cut off', act: 'nothing' },
        { name: 'Free name', dur: 'open to all', site: 'someone else’s', act: 'take it back, if still free' },
      ],
      ex1: 'In the example, the three reminders went to the former provider’s address: nobody read them.',
      ex2: 'The site and the mail stopped together, and the company found out at the same moment that it did not have the account.',
      tiles: [
        { big: 'at least 3 reminders', l1: 'a month before, a week before, then after', l2: 'sent to the registered holder, not to you' },
        { big: '30 days', l1: 'of redemption after deletion', l2: 'the last window to recover the name', hot: true },
        { big: '1 date to watch', l1: 'the due date, in the manager’s calendar', l2: 'automatic renewal, valid card' },
      ],
      line1: 'A name is not lost all at once: it is lost because the reminders reach someone who is no longer there.',
      line2: 'While the name is renewable, everything is settled in ten minutes; after that, each stage adds delay and uncertainty.',
      note: 'Reminders and redemption: ICANN policy on expired names; a .dz name follows the rules of its own registry.',
    },
  },
  ar: {
    chaine: {
      title: 'أربعة حسابات خلف موقعكم وبريدكم: اثنان ليسا باسمكم',
      alt: 'الزيارة أو الرسالة تمرّ أولاً باسم النطاق، ثم بمنطقة الأسماء، قبل أن تبلغ الموقع أو علب البريد. في المثال، الاسم مسجَّل باسم المتعهّد السابق، وينتهي يوم 14 مارس، وهو وحده من له الوصول؛ ومنطقة الأسماء عند مستضيفه، تحت حسابه؛ والموقع باسم المؤسسة، يُدفع ببطاقة المسيّر؛ وعلب البريد باسم المؤسسة، ولشخصين وصول إليها. وحين ينتهي الاسم، يصير الموقع غير متاح والرسائل مرفوضة، مع أن الاستضافة والبريد مدفوعان.',
      header: 'مثال مركَّب · مؤسسة، موقعها وبريدها · أربعة حسابات، عند ثلاثة مزوِّدين',
      entry: 'زيارة أو رسالة: كل شيء يبدأ بالاسم',
      cards: [
        { name: '1 · الاسم', what: 'محجوز عند مكتب تسجيل', rows: ['باسم: المتعهّد السابق', 'الأجل: 14 مارس', 'الوصول: هو وحده'] },
        { name: '2 · منطقة الأسماء', what: 'تقول أين الموقع والبريد', rows: ['الحساب: المتعهّد السابق', 'عند مستضيفه', 'الوصول: هو وحده'] },
        { name: '3 · الموقع', what: 'الصفحات، عند مستضيف', rows: ['باسم: المؤسسة', 'يُدفع ببطاقة المسيّر', 'الوصول: المسيّر'] },
        { name: '4 · البريد', what: 'العلب، عند خدمة بريد', rows: ['باسم: المؤسسة', 'اشتراك شهري', 'الوصول: شخصان'] },
      ],
      band: 'يوم 14 مارس ينتهي الاسم: يصير الموقع غير متاح والرسائل مرفوضة، مع أن الاستضافة والبريد مدفوعان.',
      tiles: [
        { big: '4 حسابات', l1: 'الاسم، المنطقة، الموقع، البريد', l2: 'غالباً عند ثلاثة مزوِّدين مختلفين' },
        { big: '2 من 4', l1: 'باسم شخص آخر', l2: 'الاسم والمنطقة: اللذان يتوقف عليهما كل شيء', hot: true },
        { big: 'أجل واحد منسي', l1: 'يكفي لإيقاف الموقع والبريد', l2: 'حتى حين يكون كل الباقي مدفوعاً' },
      ],
      line1: 'الموقع والبريد لا يقومان على المستضيف: يقومان على الاسم، وعلى من يمسك حسابه.',
      line2: 'حساب مكتب التسجيل مفتاح كل الباقي: هو أول ما يوضع باسم المؤسسة.',
      note: 'مثال مركَّب · المزوِّدون والتواريخ والأشخاص مخترَعون لبيان التبعية.',
    },
    echeance: {
      title: 'حول الأجل: خمس فترات، وما يمكن فعله في كل واحدة',
      alt: 'خمس فترات حول أجل اسم النطاق. قبل الأجل: تذكيران، نحو شهر ونحو أسبوع قبله، والموقع والبريد يعملان، والتجديد بنقرتين. بعد الأجل: تذكير خلال خمسة أيام، ومكتب التسجيل يوقف حلّ الاسم، ويمكن التجديد إن كان الحساب عندكم. الاسترداد: ثلاثون يوماً بعد الحذف، الموقع والبريد مقطوعان، ويمكن طلب الاسترجاع. الحذف: بضعة أيام، ولا شيء ممكن. اسم حرّ: يمكن لأي أحد أن يسجّله.',
      header: `مخطط مبدئي · الأسماء العامة مثل ${I('.com')} · سياسة تنشرها ${I('ICANN')} · المدد الدقيقة حسب الامتداد ومكتب التسجيل`,
      marks: ['≈ شهر قبله', '≈ أسبوع قبله', 'الأجل'],
      rowA: 'الموقع والبريد', rowB: 'ما يمكنكم فعله بعد',
      segs: [
        { name: 'قبل الأجل', dur: 'تذكيران على الأقل', site: 'يعملان', act: 'التجديد بنقرتين' },
        { name: 'بعد الأجل', dur: 'تذكير خلال 5 أيام', site: 'يقطعهما مكتب التسجيل', act: 'التجديد، إن كان الحساب عندكم' },
        { name: 'الاسترداد', dur: '30 يوماً بعد الحذف', site: 'مقطوعان', act: 'طلب الاسترجاع' },
        { name: 'الحذف', dur: 'بضعة أيام', site: 'مقطوعان', act: 'لا شيء' },
        { name: 'اسم حرّ', dur: 'مفتوح للجميع', site: 'عند شخص آخر', act: 'أخذه، إن بقي حرّاً' },
      ],
      ex1: 'في المثال، ذهبت التذكيرات الثلاثة إلى عنوان المتعهّد السابق: لم يقرأها أحد.',
      ex2: 'توقف الموقع والبريد معاً، واكتشفت المؤسسة في اللحظة نفسها أن الحساب ليس عندها.',
      tiles: [
        { big: '3 تذكيرات على الأقل', l1: 'شهر قبله، أسبوع قبله، ثم بعده', l2: 'تُرسَل إلى صاحب الاسم المسجَّل، لا إليكم' },
        { big: '30 يوماً', l1: 'للاسترداد بعد الحذف', l2: 'آخر نافذة لاسترجاع الاسم', hot: true },
        { big: 'تاريخ واحد يُتابَع', l1: 'الأجل، في رزنامة المسيّر', l2: 'تجديد آلي، وبطاقة صالحة' },
      ],
      line1: 'الاسم لا يضيع دفعة واحدة: يضيع لأن التذكيرات تصل إلى شخص لم يعد هناك.',
      line2: 'ما دام الاسم قابلاً للتجديد، كل شيء يُسوّى في عشر دقائق؛ وبعدها، كل مرحلة تضيف أجلاً وشكّاً.',
      note: `التذكيرات والاسترداد: سياسة ${I('ICANN')} حول الأسماء المنتهية؛ والاسم بـ ${I('.dz')} يتبع قواعد سجلّه.`,
    },
  },
};
