// Bespoke animated figures for the 2027 "mon site internet ne fonctionne plus" post.
//  trajet():     how far a visit gets. Five links in order (domain, DNS,
//                server, certificate, application) as columns; five rows, one
//                per broken link. In each row a bar grows from the visitor to
//                the link that fails, an accent cross marks the stop, the
//                message seen and the person to call appear on the right.
//                The shorter the bar, the further upstream the cause.
//  decouverte(): the same outage twice on a 36-hour axis. Without monitoring
//                an accent bar grows for 33 h 30 before a customer calls;
//                with a test every minute the bar is 45 minutes long, and a
//                magnified strip splits it into alert, diagnosis and repair.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function growX(css, P, id, at, dur, rtl) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'} center;animation:${P}-${id} ${LOOP}s linear infinite`; }
const I = (x) => `⁦${x}⁩`;
const TINT = 'rgba(242,181,68,0.06)';

function tiles(c, css, P, ky, ts, at0) {
  let s = '';
  ts.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, at0 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? TINT : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  return s;
}
const motionOff = (P) => `@media (prefers-reduced-motion: reduce){svg [style*="${P}-"]{animation:none !important}}`;

const LINKS = 5;

export function trajet(t, rtl) {
  const c = ctx(rtl); const P = 'st'; const css = []; const H = 644;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const x0 = 300; const TX = (i) => 330 + i * 110; const MX = 826;
  s += `<g style="animation:${show(css, P, 'ct', 3)}">` + t.links.map((n, i) => text(c, TX(i), 156, n, { size: 9.5, fill: C.fg70, weight: 500, anchor: 'middle' }) + line(c, TX(i), 164, TX(i), 408, { stroke: C.line, dash: '2 5' })).join('') + text(c, MX, 156, t.seen, { size: 9.5, fill: C.fg70, weight: 500 }) + '</g>';
  t.rows.forEach((k, r) => {
    const y = 174 + r * 48; const at = 6 + r * 10; const cy = y + 16;
    s += `<g style="animation:${show(css, P, `l${r}`, at)}">` + text(c, 80, y + 12, k.name, { size: 10.5, fill: C.fg, weight: 500 }) + text(c, 80, y + 28, k.sub, { size: 8.5, font: 'mono', fill: C.fg55 }) + circle(c, x0, cy, 3, { fill: C.fg }) + '</g>';
    s += `<g style="${growX(css, P, `b${r}`, at + 1, 3, rtl)}">` + rect(c, x0, cy - 6, TX(r) - x0, 12, { stroke: C.fg70, fill: 'rgba(255,255,255,0.20)' }) + '</g>';
    s += `<g style="animation:${show(css, P, `x${r}`, at + 4.5)}">` + (r < LINKS - 1 ? line(c, TX(r) + 12, cy, TX(LINKS - 1), cy, { stroke: C.fg35, dash: '2 5' }) : '') + circle(c, TX(r), cy, 9, { fill: C.accent }) + text(c, TX(r), cy + 4, '×', { size: 12, font: 'mono', fill: '#000', weight: 500, anchor: 'middle' }) + '</g>';
    s += `<g style="animation:${show(css, P, `m${r}`, at + 5.5)}">` + text(c, MX, y + 12, k.msg, { size: 9.5, font: 'mono', fill: C.accent, weight: 500 }) + text(c, MX, y + 28, k.who, { size: 9, fill: C.fg70 }) + '</g>';
    if (r < LINKS - 1) s += line(c, 80, y + 42, 1120, y + 42, { stroke: C.line });
  });
  const by = 424;
  s += `<g style="animation:${show(css, P, 'bd', 58)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 484;
  s += tiles(c, css, P, ky, t.tiles, 62);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export function decouverte(t, rtl) {
  const c = ctx(rtl); const P = 'sd'; const css = []; const H = 624;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const X = (h) => 240 + h * (850 / 36); const Z = (m) => 240 + m * (850 / 45);
  // hour axis, one mark every six hours
  s += `<g style="animation:${show(css, P, 'ax', 3)}">` + t.axis.map((n, i) => text(c, X(i * 6), 148, n, { size: 9, font: 'mono', fill: C.fg55, anchor: 'middle' }) + line(c, X(i * 6), 156, X(i * 6), 304, { stroke: C.line, dash: '2 6' })).join('') + '</g>';
  // row A: nobody knows
  const ya = 196; const a = t.rowA;
  s += `<g style="animation:${show(css, P, 'la', 5)}">` + text(c, 80, ya + 12, a.name, { size: 11, fill: C.fg, weight: 500 }) + text(c, 80, ya + 28, a.sub, { size: 8.5, font: 'mono', fill: C.fg55 }) + text(c, X(0), ya - 10, a.start, { size: 9, fill: C.fg70 }) + '</g>';
  s += `<g style="${growX(css, P, 'a1', 8, 28, rtl)}">` + rect(c, X(0), ya, X(33.5) - X(0), 26, { stroke: C.accent, fill: 'rgba(242,181,68,0.16)' }) + '</g>';
  s += `<g style="animation:${show(css, P, 'au', 18)}">` + text(c, X(0) + 12, ya + 17, a.unknown, { size: 9.5, font: 'mono', fill: C.accent, weight: 500 }) + '</g>';
  s += `<g style="animation:${show(css, P, 'ac', 37)}">` + text(c, X(33.5), ya - 10, a.call, { size: 9, fill: C.fg70, anchor: 'end' }) + '</g>';
  s += `<g style="${growX(css, P, 'a2', 38, 3, rtl)}">` + rect(c, X(33.5), ya, X(35) - X(33.5), 26, { stroke: C.fg, fill: 'rgba(255,255,255,0.78)' }) + '</g>';
  s += `<g style="animation:${show(css, P, 'at', 42)}">` + text(c, X(35) + 8, ya + 18, a.total, { size: 12, font: 'mono', fill: C.accent, weight: 500 }) + text(c, X(35), ya + 42, a.end, { size: 9, fill: C.fg55, anchor: 'end' }) + '</g>';
  // row B: a test every minute
  const yb = 270; const b = t.rowB;
  s += `<g style="animation:${show(css, P, 'lb', 45)}">` + text(c, 80, yb + 12, b.name, { size: 11, fill: C.fg, weight: 500 }) + text(c, 80, yb + 28, b.sub, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>';
  s += `<g style="${growX(css, P, 'b1', 47, 1.5, rtl)}">` + rect(c, X(0), yb, X(0.75) - X(0), 26, { stroke: C.fg, fill: 'rgba(255,255,255,0.78)' }) + '</g>';
  s += `<g style="animation:${show(css, P, 'bt', 50)}">` + text(c, X(0.75) + 10, yb + 18, b.total, { size: 12, font: 'mono', fill: C.fg, weight: 500 }) + text(c, X(0.75) + 96, yb + 17, b.end, { size: 9, fill: C.fg55 }) + '</g>';
  // the 45 minutes, magnified
  const zy = 336;
  s += `<g style="animation:${show(css, P, 'zf', 53)}">` + line(c, X(0), yb + 26, Z(0), zy, { stroke: C.fg35, dash: '3 4' }) + line(c, X(0.75), yb + 26, Z(45), zy, { stroke: C.fg35, dash: '3 4' }) + text(c, Z(45), zy + 46, t.zoomNote, { size: 8.5, font: 'mono', fill: C.fg55, anchor: 'end' }) + '</g>';
  s += `<g style="${growX(css, P, 'z0', 55, 2, rtl)}">` + rect(c, Z(0), zy, Z(3) - Z(0), 30, { stroke: C.accent, fill: 'rgba(242,181,68,0.30)' }) + '</g>';
  s += `<g style="${growX(css, P, 'z1', 57, 3, rtl)}">` + rect(c, Z(3), zy, Z(15) - Z(3), 30, { stroke: C.fg70, fill: C.fill }) + '</g>';
  s += `<g style="${growX(css, P, 'z2', 60, 4, rtl)}">` + rect(c, Z(15), zy, Z(45) - Z(15), 30, { stroke: C.fg70, fill: 'rgba(255,255,255,0.14)' }) + '</g>';
  s += `<g style="animation:${show(css, P, 'zt', 65)}">` + text(c, Z(0), zy + 46, t.zoom[0], { size: 9.5, fill: C.accent, weight: 500 }) + text(c, Z(3) + 10, zy + 19, t.zoom[1], { size: 9.5, fill: C.fg }) + text(c, Z(15) + 10, zy + 19, t.zoom[2], { size: 9.5, fill: C.fg }) + '</g>';
  const by = 404;
  s += `<g style="animation:${show(css, P, 'bd', 69)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10, font: 'mono', fill: C.fg }) + '</g>';
  const ky = 464;
  s += tiles(c, css, P, ky, t.tiles, 73);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    trajet: {
      title: 'Où la visite s’arrête : cinq maillons, cinq messages',
      alt: 'Cinq maillons traversés dans l’ordre par une visite : nom de domaine, DNS, serveur, certificat, application. Pour chaque maillon qui casse, une barre montre jusqu’où la visite arrive, avec le message affiché et la personne à appeler. Nom de domaine expiré : NXDOMAIN ou une page de publicité, bureau d’enregistrement. Zone DNS vidée ou fausse : DNS_PROBE_FINISHED_NXDOMAIN, celui qui gère la zone. Serveur arrêté ou suspendu : ERR_CONNECTION_TIMED_OUT ou « compte suspendu », hébergeur. Certificat expiré : NET::ERR_CERT_DATE_INVALID, hébergeur ou installateur. Application en erreur : erreur 500 ou page blanche, développeur.',
      header: 'Exemple construit · la barre montre jusqu’où arrive la visite quand ce maillon casse · messages tels que Chrome les affiche',
      links: ['Domaine', 'DNS', 'Serveur', 'Certificat', 'Application'], seen: 'Ce que voit le visiteur · qui appeler',
      rows: [
        { name: 'Nom de domaine expiré', sub: 'non renouvelé à l’échéance', msg: 'NXDOMAIN · ou une page de publicité', who: 'le bureau d’enregistrement : renouveler' },
        { name: 'Zone DNS vidée ou fausse', sub: 'enregistrement supprimé ou modifié', msg: 'DNS_PROBE_FINISHED_NXDOMAIN', who: 'celui qui gère la zone DNS' },
        { name: 'Serveur arrêté ou suspendu', sub: 'impayé, panne, disque plein', msg: 'ERR_CONNECTION_TIMED_OUT · « compte suspendu »', who: 'l’hébergeur' },
        { name: 'Certificat expiré', sub: 'renouvellement automatique en panne', msg: 'NET::ERR_CERT_DATE_INVALID', who: 'l’hébergeur, ou celui qui a installé le site' },
        { name: 'Application en erreur', sub: 'mise à jour, extension, base de données', msg: '500 Internal Server Error · page blanche', who: 'celui qui a fait le site' },
      ],
      band: 'Avant tout : ouvrez le site depuis un autre réseau, le téléphone en 4G. S’il s’ouvre, la panne est chez vous, pas sur le site.',
      tiles: [
        { big: '5 maillons', l1: 'une visite les traverse tous, dans cet ordre', l2: 'le premier qui casse arrête tout' },
        { big: 'le message dit lequel', l1: 'notez-le mot pour mot, avec l’heure', l2: 'c’est la moitié du diagnostic', hot: true },
        { big: '3 interlocuteurs', l1: 'bureau d’enregistrement, hébergeur, développeur', l2: 'savoir lequel appeler fait gagner des heures' },
      ],
      line1: 'Un site « en panne », c’est une visite qui s’arrête à l’un de ces cinq maillons ; le message vu par le visiteur dit lequel.',
      line2: 'Plus la barre est courte, plus la cause est en amont : un nom de domaine expiré arrête tout, courrier compris.',
      note: 'Exemple construit · les mots exacts changent d’un navigateur à l’autre ; le maillon désigné reste le même.',
    },
    decouverte: {
      title: 'La panne dure surtout le temps de l’apprendre',
      alt: 'Deux déroulés de la même panne, un certificat qui expire un vendredi à 23 heures. Sans surveillance, personne ne le sait pendant 33 heures 30, jusqu’à l’appel d’un client le dimanche à 8 heures 30 ; le site est rétabli à 10 heures, après 35 heures. Avec un test chaque minute, l’alerte part à 23 heures 03 et le site est rétabli à 23 heures 45, après 45 minutes : 3 minutes pour l’apprendre, 12 de diagnostic, 30 de réparation.',
      header: 'Exemple construit · la même panne, un certificat qui expire un vendredi à 23 h · à 5 visites par heure en moyenne',
      axis: ['ven. 23 h', 'sam. 5 h', 'sam. 11 h', 'sam. 17 h', 'sam. 23 h', 'dim. 5 h', 'dim. 11 h'],
      rowA: { name: 'Sans surveillance', sub: 'on l’apprend par un client', start: 'ven. 23 h : le certificat expire', unknown: 'personne ne le sait · 33 h 30', call: 'dim. 8 h 30 : un client appelle', total: '35 h', end: 'rétabli dimanche à 10 h, après 1 h 30 pour trouver qui appeler et réparer' },
      rowB: { name: 'Avec un test chaque minute', sub: 'alerte par SMS et par courriel', total: '45 min', end: 'rétabli vendredi à 23 h 45' },
      zoom: ['3 tests échoués de suite : alerte à 23 h 03', 'diagnostic : 12 min', 'certificat renouvelé, site vérifié depuis deux réseaux : 30 min'], zoomNote: 'les 45 minutes, agrandies',
      band: 'durée d’une panne = temps pour l’apprendre + temps pour réparer · 33 h 30 + 1 h 30 = 35 h · 3 min + 42 min = 45 min',
      tiles: [
        { big: '35 h', l1: 'dont 33 h 30 sans que personne le sache', l2: 'environ 175 visites perdues' },
        { big: '45 min', l1: '3 minutes pour l’apprendre, 42 pour réparer', l2: 'environ 4 visites perdues', hot: true },
        { big: '1 test par minute', l1: 'depuis l’extérieur, sur la vraie page', l2: 'et sur les dates du certificat et du domaine' },
      ],
      line1: 'Réparer prend un temps du même ordre dans les deux cas : c’est le délai pour l’apprendre qui fait la différence.',
      line2: 'Un test extérieur ne répare rien ; il fait d’une panne de week-end un incident de trois quarts d’heure.',
      note: 'Exemple construit · heures, délais et visites inventés ; une alerte trente jours avant la date de fin évite la panne elle-même.',
    },
  },
  en: {
    trajet: {
      title: 'Where the visit stops: five links, five messages',
      alt: 'Five links crossed in order by a visit: domain name, DNS, server, certificate, application. For each link that breaks, a bar shows how far the visit gets, with the message displayed and the person to call. Domain name expired: NXDOMAIN or a page of adverts, the registrar. DNS zone emptied or wrong: DNS_PROBE_FINISHED_NXDOMAIN, whoever manages the zone. Server stopped or suspended: ERR_CONNECTION_TIMED_OUT or “account suspended”, the host. Certificate expired: NET::ERR_CERT_DATE_INVALID, the host or the installer. Application in error: error 500 or a blank page, the developer.',
      header: 'Constructed example · the bar shows how far the visit gets when that link breaks · messages as Chrome displays them',
      links: ['Domain', 'DNS', 'Server', 'Certificate', 'Application'], seen: 'What the visitor sees · who to call',
      rows: [
        { name: 'Domain name expired', sub: 'not renewed at the due date', msg: 'NXDOMAIN · or a page of adverts', who: 'the registrar: renew' },
        { name: 'DNS zone emptied or wrong', sub: 'record deleted or changed', msg: 'DNS_PROBE_FINISHED_NXDOMAIN', who: 'whoever manages the DNS zone' },
        { name: 'Server stopped or suspended', sub: 'unpaid, failure, disk full', msg: 'ERR_CONNECTION_TIMED_OUT · “account suspended”', who: 'the host' },
        { name: 'Certificate expired', sub: 'automatic renewal broken', msg: 'NET::ERR_CERT_DATE_INVALID', who: 'the host, or whoever installed the site' },
        { name: 'Application in error', sub: 'update, plugin, database', msg: '500 Internal Server Error · blank page', who: 'whoever built the site' },
      ],
      band: 'First of all: open the site from another network, your phone on 4G. If it opens, the fault is at your end, not on the site.',
      tiles: [
        { big: '5 links', l1: 'a visit crosses them all, in this order', l2: 'the first one to break stops everything' },
        { big: 'the message says which', l1: 'note it word for word, with the time', l2: 'it is half the diagnosis', hot: true },
        { big: '3 people to call', l1: 'registrar, host, developer', l2: 'knowing which one saves hours' },
      ],
      line1: 'A site that is “down” is a visit that stops at one of these five links; the message the visitor sees says which.',
      line2: 'The shorter the bar, the further upstream the cause: an expired domain name stops everything, email included.',
      note: 'Constructed example · the exact words change from one browser to another; the link they point to stays the same.',
    },
    decouverte: {
      title: 'An outage lasts mostly as long as it takes to find out',
      alt: 'Two versions of the same outage, a certificate that expires on a Friday at 11 pm. Without monitoring, nobody knows for 33 and a half hours, until a customer calls on Sunday at 8.30 am; the site is restored at 10 am, after 35 hours. With a test every minute, the alert goes out at 11.03 pm and the site is restored at 11.45 pm, after 45 minutes: 3 minutes to find out, 12 of diagnosis, 30 of repair.',
      header: 'Constructed example · the same outage, a certificate that expires on a Friday at 11 pm · 5 visits an hour on average',
      axis: ['Fri 23:00', 'Sat 05:00', 'Sat 11:00', 'Sat 17:00', 'Sat 23:00', 'Sun 05:00', 'Sun 11:00'],
      rowA: { name: 'Without monitoring', sub: 'you hear it from a customer', start: 'Fri 23:00: the certificate expires', unknown: 'nobody knows · 33 h 30', call: 'Sun 08:30: a customer calls', total: '35 h', end: 'restored Sunday at 10:00, after 1 h 30 to find who to call and repair' },
      rowB: { name: 'With a test every minute', sub: 'alert by SMS and by email', total: '45 min', end: 'restored Friday at 23:45' },
      zoom: ['3 failed tests in a row: alert at 23:03', 'diagnosis: 12 min', 'certificate renewed, site checked from two networks: 30 min'], zoomNote: 'the 45 minutes, magnified',
      band: 'length of an outage = time to find out + time to repair · 33 h 30 + 1 h 30 = 35 h · 3 min + 42 min = 45 min',
      tiles: [
        { big: '35 h', l1: '33 h 30 of them with nobody knowing', l2: 'about 175 visits lost' },
        { big: '45 min', l1: '3 minutes to find out, 42 to repair', l2: 'about 4 visits lost', hot: true },
        { big: '1 test a minute', l1: 'from outside, on the real page', l2: 'and on the certificate and domain dates' },
      ],
      line1: 'Repairing takes a similar time in both cases: it is the delay in finding out that makes the difference.',
      line2: 'An outside test repairs nothing; it turns a weekend outage into a three-quarter-hour incident.',
      note: 'Constructed example · invented times, delays and visits; an alert thirty days before the end date avoids the outage itself.',
    },
  },
  ar: {
    trajet: {
      title: 'أين تتوقف الزيارة: خمس حلقات، وخمس رسائل',
      alt: 'خمس حلقات تعبرها الزيارة بالترتيب: اسم النطاق، DNS، الخادم، الشهادة، والتطبيق. ولكل حلقة تنكسر، شريط يبيّن إلى أين تصل الزيارة، مع الرسالة المعروضة والشخص الذي يُتصل به. اسم النطاق منتهٍ: NXDOMAIN أو صفحة إعلانات، مكتب التسجيل. منطقة DNS فارغة أو خاطئة: DNS_PROBE_FINISHED_NXDOMAIN، من يسيّر المنطقة. الخادم متوقف أو موقوف: ERR_CONNECTION_TIMED_OUT أو «الحساب موقوف»، المستضيف. الشهادة منتهية: NET::ERR_CERT_DATE_INVALID، المستضيف أو من نصّب الموقع. التطبيق في خطأ: خطأ 500 أو صفحة بيضاء، المطوِّر.',
      header: `مثال مركَّب · الشريط يبيّن إلى أين تصل الزيارة حين تنكسر هذه الحلقة · الرسائل كما يعرضها ${I('Chrome')}`,
      links: ['النطاق', I('DNS'), 'الخادم', 'الشهادة', 'التطبيق'], seen: 'ما يراه الزائر · بمن نتصل',
      rows: [
        { name: 'اسم النطاق منتهٍ', sub: 'لم يُجدَّد عند الأجل', msg: `${I('NXDOMAIN')} · أو صفحة إعلانات`, who: 'مكتب التسجيل: التجديد' },
        { name: `منطقة ${I('DNS')} فارغة أو خاطئة`, sub: 'سجل حُذف أو عُدِّل', msg: I('DNS_PROBE_FINISHED_NXDOMAIN'), who: `من يسيّر منطقة ${I('DNS')}` },
        { name: 'الخادم متوقف أو موقوف', sub: 'عدم دفع، عطل، قرص ممتلئ', msg: `${I('ERR_CONNECTION_TIMED_OUT')} · «الحساب موقوف»`, who: 'المستضيف' },
        { name: 'الشهادة منتهية', sub: 'التجديد الآلي معطَّل', msg: I('NET::ERR_CERT_DATE_INVALID'), who: 'المستضيف، أو من نصّب الموقع' },
        { name: 'التطبيق في خطأ', sub: 'تحديث، إضافة، قاعدة البيانات', msg: `${I('500 Internal Server Error')} · صفحة بيضاء`, who: 'من أنجز الموقع' },
      ],
      band: `قبل كل شيء: افتحوا الموقع من شبكة أخرى، الهاتف على ${I('4G')}. إذا فُتح، فالعطل عندكم، لا في الموقع.`,
      tiles: [
        { big: '5 حلقات', l1: 'الزيارة تعبرها كلها، بهذا الترتيب', l2: 'أول حلقة تنكسر توقف كل شيء' },
        { big: 'الرسالة تقول أيّها', l1: 'سجّلوها كلمة بكلمة، مع الساعة', l2: 'هي نصف التشخيص', hot: true },
        { big: '3 جهات', l1: 'مكتب التسجيل، المستضيف، المطوِّر', l2: 'معرفة من نتصل به تربح ساعات' },
      ],
      line1: 'الموقع «المعطَّل» زيارة تتوقف عند إحدى هذه الحلقات الخمس؛ والرسالة التي يراها الزائر تقول أيّها.',
      line2: 'كلما قصر الشريط، كان السبب أبعد في الأعلى: اسم نطاق منتهٍ يوقف كل شيء، والبريد معه.',
      note: 'مثال مركَّب · الكلمات تتغيّر من متصفح إلى آخر؛ والحلقة المقصودة تبقى نفسها.',
    },
    decouverte: {
      title: 'العطل يدوم خاصة مدة العلم به',
      alt: 'مجريان للعطل نفسه، شهادة تنتهي يوم جمعة على الساعة 23. دون مراقبة، لا أحد يعلم طوال 33 ساعة ونصف، إلى أن يتصل زبون يوم الأحد على 8 و30 دقيقة؛ ويعود الموقع على الساعة 10، بعد 35 ساعة. وباختبار كل دقيقة، ينطلق التنبيه على 23 و3 دقائق ويعود الموقع على 23 و45 دقيقة، بعد 45 دقيقة: 3 دقائق للعلم به، 12 للتشخيص، و30 للإصلاح.',
      header: 'مثال مركَّب · العطل نفسه، شهادة تنتهي يوم جمعة على الساعة 23 · بمعدل 5 زيارات في الساعة',
      axis: [`الجمعة ${I('23:00')}`, `السبت ${I('05:00')}`, `السبت ${I('11:00')}`, `السبت ${I('17:00')}`, `السبت ${I('23:00')}`, `الأحد ${I('05:00')}`, `الأحد ${I('11:00')}`],
      rowA: { name: 'دون مراقبة', sub: 'نعلم به من زبون', start: `الجمعة ${I('23:00')}: الشهادة تنتهي`, unknown: `لا أحد يعلم · ${I('33:30')} سا`, call: `الأحد ${I('08:30')}: زبون يتصل`, total: '35 سا', end: `يعود يوم الأحد على ${I('10:00')}، بعد ساعة ونصف لإيجاد من نتصل به والإصلاح` },
      rowB: { name: 'باختبار كل دقيقة', sub: 'تنبيه برسالة قصيرة وبالبريد', total: '45 د', end: `يعود يوم الجمعة على ${I('23:45')}` },
      zoom: [`3 اختبارات فاشلة متتالية: تنبيه على ${I('23:03')}`, 'التشخيص: 12 دقيقة', 'الشهادة مجدَّدة، والموقع مراجَع من شبكتين: 30 دقيقة'], zoomNote: 'الـ 45 دقيقة، مكبَّرة',
      band: `مدة العطل = وقت العلم به + وقت الإصلاح · ${I('33:30 + 1:30 = 35:00')} سا · ${I('3 + 42 = 45')} دقيقة`,
      tiles: [
        { big: '35 ساعة', l1: `منها ${I('33:30')} ساعة دون أن يعلم أحد`, l2: 'نحو 175 زيارة ضائعة' },
        { big: '45 دقيقة', l1: '3 دقائق للعلم به، و42 للإصلاح', l2: 'نحو 4 زيارات ضائعة', hot: true },
        { big: 'اختبار كل دقيقة', l1: 'من الخارج، على الصفحة الحقيقية', l2: 'وعلى تاريخي الشهادة والنطاق' },
      ],
      line1: 'الإصلاح يأخذ وقتاً متقارباً في الحالتين: مدة العلم بالعطل هي التي تصنع الفرق.',
      line2: 'الاختبار الخارجي لا يصلح شيئاً؛ يجعل من عطل نهاية أسبوع حادثاً من ثلاثة أرباع الساعة.',
      note: 'مثال مركَّب · ساعات وآجال وزيارات مخترَعة؛ وتنبيه ثلاثين يوماً قبل تاريخ النهاية يتفادى العطل نفسه.',
    },
  },
};
