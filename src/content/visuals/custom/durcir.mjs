// Bespoke animated figures for the 2027 "comment sécuriser un réseau informatique d'entreprise" post.
//  chemin(): the same small office twice. Top lane, the network as installed:
//            a token travels from the internet through the box (open port) and
//            the video recorder (factory password) to the file server. Bottom
//            lane, after three settings: three barriers appear and the token
//            stops at the first one.
//  cle():    the Wi-Fi key, twenty-four months after installation. Two lines
//            are drawn: the people who know the key (rising) and the people
//            who work here (flat); the gap is labelled, and three ways to
//            close it appear on the side.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
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

export function chemin(t, rtl) {
  const c = ctx(rtl); const P = 'nc'; const css = []; const H = 630;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const nx = (k) => 80 + k * 280; const mid = (k) => nx(k) + 100;
  // lane A: as installed
  const ya = 160;
  s += `<g style="animation:${show(css, P, 'ta', 4)}">` + text(c, 80, ya - 12, t.laneA, { size: 10.5, fill: C.fg, weight: 500 }) + '</g>';
  t.nodesA.forEach(([name, sub], k) => {
    const hot = k === 3;
    s += `<g style="animation:${show(css, P, `a${k}`, 5 + k * 3)}">` + rect(c, nx(k), ya, 200, 56, { stroke: hot ? C.accent : C.fg35, fill: hot ? TINT : DARK }) + text(c, nx(k) + 12, ya + 23, name, { size: 10.5, fill: hot ? C.accent : C.fg, weight: 500 }) + text(c, nx(k) + 12, ya + 41, sub, { size: 8.5, font: 'mono', fill: hot ? C.accent : C.fg55 })
      + (k < 3 ? line(c, nx(k) + 200, ya + 28, nx(k + 1), ya + 28, { stroke: C.fg55, sw: 1.5 }) : '') + '</g>';
  });
  const tya = ya + 74;
  s += `<g style="animation:${show(css, P, 'ra', 16)}">` + line(c, mid(0), tya, mid(3), tya, { stroke: C.line2, sw: 1.5 })
    + `<circle cx="${c.X(mid(3))}" cy="${tya}" r="6" fill="${C.accent}" style="animation:${run(css, P, 'ga', 18, 16, c.X(mid(0)) - c.X(mid(3)))}"/>` + '</g>';
  s += `<g style="animation:${show(css, P, 'la', 35)}">` + text(c, 1120, tya + 20, t.reached, { size: 9.5, font: 'mono', fill: C.accent, anchor: 'end' }) + '</g>';
  // lane B: after three settings
  const yb = 296;
  s += `<g style="animation:${show(css, P, 'tb', 40)}">` + text(c, 80, yb - 12, t.laneB, { size: 10.5, fill: C.fg, weight: 500 }) + '</g>';
  t.nodesB.forEach(([name, sub], k) => {
    const hot = k === 2;
    s += `<g style="animation:${show(css, P, `b${k}`, 41 + k * 2)}">` + rect(c, nx(k), yb, 200, 56, { stroke: hot ? C.accent : C.fg35, fill: DARK }) + text(c, nx(k) + 12, yb + 23, name, { size: 10.5, fill: C.fg, weight: 500 }) + text(c, nx(k) + 12, yb + 41, sub, { size: 8.5, font: 'mono', fill: k === 0 ? C.fg55 : C.accent })
      + (k < 3 ? line(c, nx(k) + 200, yb + 28, nx(k + 1), yb + 28, { stroke: k === 0 ? C.fg55 : C.line2, sw: 1.5, dash: k === 0 ? '' : '3 4' }) : '') + '</g>';
  });
  const tyb = yb + 74;
  const bars = [[nx(1) + 240, t.bars[0]], [nx(2) + 240, t.bars[1]]];
  bars.forEach(([bx, label], j) => {
    s += `<g style="animation:${show(css, P, `w${j}`, 50 + j * 4)}">` + line(c, bx, yb - 6, bx, tyb + 8, { stroke: C.accent, sw: 3 }) + text(c, bx, tyb + 24, label, { size: 9, font: 'mono', fill: C.accent, anchor: 'middle' }) + '</g>';
  });
  const stop = nx(1) + 226;
  s += `<g style="animation:${show(css, P, 'rb', 57)}">` + line(c, mid(0), tyb, mid(3), tyb, { stroke: C.line2, sw: 1.5 })
    + `<circle cx="${c.X(stop)}" cy="${tyb}" r="6" fill="${PALE}" style="animation:${run(css, P, 'gb', 58, 8, c.X(mid(0)) - c.X(stop))}"/>` + '</g>';
  s += `<g style="animation:${show(css, P, 'lb', 67)}">` + text(c, mid(0), tyb + 24, t.stopped, { size: 9.5, font: 'mono', fill: C.fg, anchor: 'start' }) + '</g>';
  const by = 410;
  s += `<g style="animation:${show(css, P, 'bd', 72)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 470;
  s += tiles(c, css, P, ky, t.tiles, 75);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// months since installation, number of people
const KNOW = [[0, 12], [3, 16], [6, 21], [9, 25], [12, 30], [15, 34], [18, 38], [21, 42], [24, 46]];
const STAFF = [[0, 12], [6, 13], [12, 12], [18, 14], [24, 13]];
const MARKS = [[6, 21], [15, 34], [21, 42]];

export function cle(t, rtl) {
  const c = ctx(rtl); const P = 'nk'; const css = []; const H = 624;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const px = 120, pw = 600, py = 152, ph = 220; const X = (m) => px + (m / 24) * pw; const Y = (n) => py + ph - (n / 50) * ph;
  const path = (pts) => { let d = ''; let len = 0; pts.forEach(([m, n], i) => { d += `${c.X(X(m)).toFixed(1)},${Y(n).toFixed(1)} `; if (i) { const [pm, pn] = pts[i - 1]; len += Math.hypot(X(m) - X(pm), Y(n) - Y(pn)); } }); return { d: d.trim(), len }; };
  let frame = rect(c, px, py, pw, ph, { stroke: C.fg35, fill: DARK });
  [0, 25, 50].forEach((n) => { frame += text(c, px - 8, Y(n) + 3, String(n), { size: 8.5, font: 'mono', fill: C.fg55, anchor: 'end' }); if (n === 25) frame += line(c, px, Y(n), px + pw, Y(n), { stroke: C.line2, dash: '4 4' }); });
  [0, 6, 12, 18, 24].forEach((m) => { frame += text(c, X(m), py + ph + 15, String(m), { size: 8.5, font: 'mono', fill: C.fg55, anchor: 'middle' }); });
  frame += text(c, px, py - 8, t.yaxis, { size: 9, font: 'mono', fill: C.fg55 }) + text(c, px + pw - 10, py + ph - 10, t.xaxis, { size: 9, font: 'mono', fill: C.fg55, anchor: 'end' });
  frame += line(c, px + 14, py + 18, px + 38, py + 18, { stroke: C.accent, sw: 2.5 }) + text(c, px + 46, py + 21, t.legend[0], { size: 9.5, fill: C.accent }) + line(c, px + 14, py + 36, px + 38, py + 36, { stroke: PALE, sw: 2.5 }) + text(c, px + 46, py + 39, t.legend[1], { size: 9.5, fill: C.fg });
  s += `<g style="animation:${show(css, P, 'pl', 3)}">` + frame + '</g>';
  const st = path(STAFF); const kn = path(KNOW);
  s += `<polyline points="${st.d}" fill="none" stroke="${PALE}" stroke-width="2.5" stroke-dasharray="${st.len.toFixed(0)}" style="animation:${drawLine(css, P, 'st', 6, 8, st.len)}"/>`;
  s += `<polyline points="${kn.d}" fill="none" stroke="${C.accent}" stroke-width="2.5" stroke-dasharray="${kn.len.toFixed(0)}" style="animation:${drawLine(css, P, 'kn', 15, 14, kn.len)}"/>`;
  MARKS.forEach(([m, n], i) => {
    s += `<g style="animation:${show(css, P, `m${i}`, 15 + (m / 24) * 14 + 0.5)}">` + circle(c, X(m), Y(n), 4.5, { fill: DARK, stroke: C.accent, sw: 1.5 }) + text(c, X(m) - 9, Y(n) - 8, t.marks[i], { size: 9, fill: C.fg70, anchor: 'end' }) + '</g>';
  });
  s += `<g style="animation:${show(css, P, 'en', 30)}">` + text(c, X(24) + 8, Y(46) + 4, '46', { size: 13, font: 'mono', fill: C.accent, weight: 500 }) + text(c, X(24) + 8, Y(13) + 4, '13', { size: 13, font: 'mono', fill: C.fg, weight: 500 })
    + line(c, X(24) - 14, Y(44), X(24) - 14, Y(15), { stroke: C.accent, sw: 1, dash: '3 3' }) + text(c, X(24) - 22, Y(28), t.gap, { size: 10, font: 'mono', fill: C.accent, weight: 500, anchor: 'end' }) + '</g>';
  // three ways to close the gap
  s += `<g style="animation:${show(css, P, 'pn', 34)}">` + rect(c, 800, py, 320, ph, { stroke: C.line2, fill: C.fill }) + text(c, 816, py + 24, t.panel, { size: 11, fill: C.fg, weight: 500 }) + '</g>';
  t.ways.forEach(([l1, l2], j) => {
    const wy = py + 38 + j * 58; const hot = j === 2;
    s += `<g style="animation:${show(css, P, `w${j}`, 37 + j * 5)}">` + rect(c, 816, wy, 288, 50, { stroke: hot ? C.accent : C.line2, fill: hot ? TINT : DARK }) + text(c, 828, wy + 21, l1, { size: 9.5, fill: hot ? C.accent : C.fg, weight: 500 }) + text(c, 828, wy + 38, l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>';
  });
  const by = 404;
  s += `<g style="animation:${show(css, P, 'bd', 54)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 464;
  s += tiles(c, css, P, ky, t.tiles, 58);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    chemin: {
      title: 'Un appareil oublié, et jusqu’où il mène',
      alt: 'Le même petit bureau, deux fois. En haut, le réseau tel qu’installé : depuis internet, un robot balaie les adresses, trouve sur la box un port ouvert vers l’enregistreur vidéo, y entre avec le mot de passe d’origine, et atteint le serveur de fichiers, qui est sur le même réseau que les caméras. En bas, le même réseau après trois réglages : aucun port ouvert sur la box, le mot de passe de l’enregistreur changé, les caméras dans une autre zone que le serveur ; le robot est arrêté dès le premier réglage.',
      header: 'Exemple construit · le même bureau deux fois · en haut tel qu’installé, en bas après trois réglages',
      laneA: 'Tel qu’installé', laneB: 'Après trois réglages',
      nodesA: [['Internet', 'un robot balaie les adresses'], ['La box', 'port ouvert vers l’enregistreur'], ['L’enregistreur vidéo', 'mot de passe d’origine'], ['Le serveur de fichiers', 'même réseau que les caméras']],
      nodesB: [['Internet', 'un robot balaie les adresses'], ['La box', 'aucun port ouvert'], ['L’enregistreur vidéo', 'mot de passe changé'], ['Le serveur de fichiers', 'dans une autre zone']],
      bars: ['port fermé', 'zone séparée'],
      reached: 'le serveur de fichiers est atteint', stopped: 'arrêté au premier réglage',
      band: 'Un mot de passe d’origine est le même sur tous les appareils du même modèle : il figure dans la notice, et dans les listes que les robots essaient.',
      tiles: [
        { big: '3 réglages', l1: 'fermer le port, changer le mot de passe, séparer la zone', l2: 'chacun aurait suffi ; ensemble, ils tiennent', hot: true },
        { big: 'des réglages d’abord', l1: 'le port et le mot de passe se règlent sur le matériel en place', l2: 'la séparation demande un matériel qui la gère' },
        { big: 'l’appareil oublié', l1: 'caméra, enregistreur, imprimante, borne : ce sont des ordinateurs', l2: 'et personne ne les met à jour' },
      ],
      line1: 'Dans l’exemple, le chemin ne passe pas par le poste du comptable : il passe par l’appareil que personne ne considère comme un ordinateur.',
      line2: 'Trois réglages indépendants coupent ce chemin : plusieurs barrières plutôt qu’une, c’est la défense en profondeur.',
      note: 'Exemple construit · un chemin possible parmi d’autres, dans un bureau d’une douzaine de postes.',
    },
    cle: {
      title: 'La clé du Wi-Fi, vingt-quatre mois après l’installation',
      alt: 'Graphique sur vingt-quatre mois. La courbe des personnes qui travaillent dans le bureau reste entre 12 et 14. La courbe des personnes qui connaissent la clé du Wi-Fi monte de 12 à 46 : un stagiaire repart, deux employés quittent l’entreprise, un prestataire passe, des visiteurs la reçoivent en réunion. Après vingt-quatre mois, 46 personnes connaissent la clé pour 13 qui travaillent là : 33 de trop. À côté, trois façons de refermer l’écart : un réseau invités séparé, la clé des bureaux changée à chaque départ, ou un compte par personne.',
      header: 'Exemple construit · un bureau de douze personnes · une seule clé Wi-Fi, jamais changée depuis l’installation',
      yaxis: 'personnes', xaxis: 'mois depuis l’installation →',
      legend: ['connaissent la clé', 'travaillent ici'],
      marks: ['un stagiaire repart', 'deux départs', 'un prestataire de passage'],
      gap: '33 de trop',
      panel: 'Trois façons de refermer l’écart',
      ways: [['Un réseau invités, séparé', 'sa clé peut s’afficher et changer chaque mois'], ['La clé des bureaux changée à chaque départ', 'et rangée dans un gestionnaire de mots de passe'], ['Un compte par personne', 'on retire un compte, pas une clé']],
      band: 'Une clé partagée ne se retire à personne : la seule façon de la reprendre est de la changer pour tout le monde.',
      tiles: [
        { big: '46 la connaissent', l1: 'employés, anciens employés, stagiaires, visiteurs, prestataires', l2: 'vingt-quatre mois après l’installation', hot: true },
        { big: '13 travaillent ici', l1: 'ceux qui devraient pouvoir se connecter', l2: 'l’écart : 33 personnes' },
        { big: 'un compte par personne', l1: 'chacun son identifiant sur le Wi-Fi des bureaux', l2: 'un départ = un compte retiré' },
      ],
      line1: 'Le chiffrement du Wi-Fi protège de ceux qui n’ont pas la clé ; il ne protège pas de ceux à qui on l’a donnée.',
      line2: 'D’où la règle : les visiteurs sur un réseau à part, et pour les bureaux une clé qui change, ou mieux un compte par personne.',
      note: 'Exemple construit · comptez chez vous qui a reçu la clé depuis l’installation.',
    },
  },
  en: {
    chemin: {
      title: 'A forgotten device, and how far it leads',
      alt: 'The same small office, twice. At the top, the network as installed: from the internet, a bot scans addresses, finds on the box an open port to the video recorder, gets in with the factory password, and reaches the file server, which is on the same network as the cameras. At the bottom, the same network after three settings: no open port on the box, the recorder’s password changed, the cameras in a different zone from the server; the bot is stopped at the very first setting.',
      header: 'Constructed example · the same office twice · top as installed, bottom after three settings',
      laneA: 'As installed', laneB: 'After three settings',
      nodesA: [['Internet', 'a bot scans addresses'], ['The box', 'open port to the recorder'], ['The video recorder', 'factory password'], ['The file server', 'same network as the cameras']],
      nodesB: [['Internet', 'a bot scans addresses'], ['The box', 'no open port'], ['The video recorder', 'password changed'], ['The file server', 'in another zone']],
      bars: ['port closed', 'zone separated'],
      reached: 'the file server is reached', stopped: 'stopped at the first setting',
      band: 'A factory password is the same on every device of the same model: it is in the manual, and in the lists that bots try.',
      tiles: [
        { big: '3 settings', l1: 'close the port, change the password, separate the zone', l2: 'each would have been enough; together they hold', hot: true },
        { big: 'settings first', l1: 'the port and the password are set on the equipment in place', l2: 'separation needs equipment that handles it' },
        { big: 'the forgotten device', l1: 'camera, recorder, printer, access point: they are computers', l2: 'and nobody updates them' },
      ],
      line1: 'In the example, the path does not go through the accountant’s computer: it goes through the device nobody thinks of as a computer.',
      line2: 'Three independent settings cut this path: several barriers instead of one, that is defence in depth.',
      note: 'Constructed example · one possible path among others, in an office of about a dozen computers.',
    },
    cle: {
      title: 'The Wi-Fi key, twenty-four months after installation',
      alt: 'Chart over twenty-four months. The line of people who work in the office stays between 12 and 14. The line of people who know the Wi-Fi key rises from 12 to 46: an intern leaves, two employees leave the company, a contractor passes through, visitors are given it in meetings. After twenty-four months, 46 people know the key for 13 who work there: 33 too many. Beside it, three ways to close the gap: a separate guest network, the office key changed at every departure, or one account per person.',
      header: 'Constructed example · an office of twelve people · a single Wi-Fi key, never changed since installation',
      yaxis: 'people', xaxis: 'months since installation →',
      legend: ['know the key', 'work here'],
      marks: ['an intern leaves', 'two departures', 'a contractor passes through'],
      gap: '33 too many',
      panel: 'Three ways to close the gap',
      ways: [['A separate guest network', 'its key can be displayed and changed monthly'], ['The office key changed at every departure', 'and kept in a password manager'], ['One account per person', 'you remove an account, not a key']],
      band: 'A shared key cannot be taken back from anyone: the only way to recover it is to change it for everybody.',
      tiles: [
        { big: '46 know it', l1: 'employees, former employees, interns, visitors, contractors', l2: 'twenty-four months after installation', hot: true },
        { big: '13 work here', l1: 'those who should be able to connect', l2: 'the gap: 33 people' },
        { big: 'one account per person', l1: 'each with their own sign-in on the office Wi-Fi', l2: 'a departure = an account removed' },
      ],
      line1: 'Wi-Fi encryption protects against those who do not have the key; it does not protect against those it was given to.',
      line2: 'Hence the rule: visitors on a separate network, and for the office a key that changes, or better one account per person.',
      note: 'Constructed example · count at your place who has been given the key since installation.',
    },
  },
  ar: {
    chemin: {
      title: 'جهاز منسي، وإلى أين يقود',
      alt: 'المكتب الصغير نفسه، مرتين. في الأعلى، الشبكة كما رُكِّبت: من الإنترنت، روبوت يمسح العناوين، يجد على العلبة منفذاً مفتوحاً نحو مسجِّل الفيديو، يدخله بكلمة المرور الأصلية، ويصل إلى خادم الملفات، وهو على شبكة الكاميرات نفسها. في الأسفل، الشبكة نفسها بعد ثلاثة إعدادات: لا منفذ مفتوح على العلبة، كلمة مرور المسجِّل مغيَّرة، والكاميرات في منطقة غير منطقة الخادم؛ والروبوت يتوقف عند أول إعداد.',
      header: 'مثال مركَّب · المكتب نفسه مرتين · في الأعلى كما رُكِّب، وفي الأسفل بعد ثلاثة إعدادات',
      laneA: 'كما رُكِّبت', laneB: 'بعد ثلاثة إعدادات',
      nodesA: [['الإنترنت', 'روبوت يمسح العناوين'], ['العلبة', 'منفذ مفتوح نحو المسجِّل'], ['مسجِّل الفيديو', 'كلمة المرور الأصلية'], ['خادم الملفات', 'على شبكة الكاميرات نفسها']],
      nodesB: [['الإنترنت', 'روبوت يمسح العناوين'], ['العلبة', 'لا منفذ مفتوح'], ['مسجِّل الفيديو', 'كلمة المرور مغيَّرة'], ['خادم الملفات', 'في منطقة أخرى']],
      bars: ['المنفذ مغلق', 'منطقة مفصولة'],
      reached: 'وصل إلى خادم الملفات', stopped: 'توقف عند أول إعداد',
      band: 'كلمة المرور الأصلية هي نفسها على كل الأجهزة من الطراز نفسه: موجودة في الدليل، وفي القوائم التي تجرّبها الروبوتات.',
      tiles: [
        { big: '3 إعدادات', l1: 'إغلاق المنفذ، تغيير كلمة المرور، وفصل المنطقة', l2: 'كل واحد كان يكفي؛ ومعاً، تصمد', hot: true },
        { big: 'الإعدادات أولاً', l1: 'المنفذ وكلمة المرور يُضبطان على العتاد الموجود', l2: 'والفصل يتطلب عتاداً يدعمه' },
        { big: 'الجهاز المنسي', l1: 'كاميرا، مسجِّل، طابعة، نقطة وصول: كلها حواسيب', l2: 'ولا أحد يحدّثها' },
      ],
      line1: 'في المثال، الطريق لا يمر بحاسوب المحاسب: يمر بالجهاز الذي لا يعتبره أحد حاسوباً.',
      line2: 'ثلاثة إعدادات مستقلة تقطع هذا الطريق: عدة حواجز بدل واحد، وهذه هي الدفاع في العمق.',
      note: 'مثال مركَّب · طريق ممكن من بين طرق أخرى، في مكتب من نحو اثني عشر حاسوباً.',
    },
    cle: {
      title: 'مفتاح الواي فاي، بعد أربعة وعشرين شهراً من التركيب',
      alt: 'رسم على أربعة وعشرين شهراً. منحنى من يعملون في المكتب يبقى بين 12 و14. ومنحنى من يعرفون مفتاح الواي فاي يصعد من 12 إلى 46: متربص يغادر، عاملان يتركان المؤسسة، مقدّم خدمة يمرّ، وزوّار يستلمونه في اجتماع. بعد أربعة وعشرين شهراً، 46 شخصاً يعرفون المفتاح مقابل 13 يعملون هناك: 33 زائدون. وعلى الجانب، ثلاث طرق لسدّ الفارق: شبكة للزوّار مفصولة، مفتاح المكاتب يُغيَّر عند كل مغادرة، أو حساب لكل شخص.',
      header: 'مثال مركَّب · مكتب من اثني عشر شخصاً · مفتاح واي فاي واحد، لم يُغيَّر منذ التركيب',
      yaxis: 'أشخاص', xaxis: '← أشهر منذ التركيب',
      legend: ['يعرفون المفتاح', 'يعملون هنا'],
      marks: ['متربص يغادر', 'مغادرتان', 'مقدّم خدمة يمرّ'],
      gap: '33 زائدون',
      panel: 'ثلاث طرق لسدّ الفارق',
      ways: [['شبكة للزوّار، مفصولة', 'مفتاحها يُعلَّق ويُغيَّر كل شهر'], ['مفتاح المكاتب يُغيَّر عند كل مغادرة', 'ويُحفظ في مسيّر كلمات المرور'], ['حساب لكل شخص', 'يُسحب حساب، لا مفتاح']],
      band: 'المفتاح المشترك لا يُسحب من أحد: والطريقة الوحيدة لاسترجاعه تغييره للجميع.',
      tiles: [
        { big: '46 يعرفونه', l1: 'عمّال، عمّال سابقون، متربصون، زوّار، ومقدّمو خدمات', l2: 'بعد أربعة وعشرين شهراً من التركيب', hot: true },
        { big: '13 يعملون هنا', l1: 'من يُفترض أن يستطيعوا الاتصال', l2: 'الفارق: 33 شخصاً' },
        { big: 'حساب لكل شخص', l1: 'لكل واحد معرّفه على واي فاي المكاتب', l2: 'مغادرة = حساب مسحوب' },
      ],
      line1: 'تشفير الواي فاي يحمي ممن ليس عندهم المفتاح؛ ولا يحمي ممن أُعطي لهم.',
      line2: 'ومن هنا القاعدة: الزوّار على شبكة منفصلة، وللمكاتب مفتاح يتغيّر، أو أحسن حساب لكل شخص.',
      note: 'مثال مركَّب · عدّوا عندكم من استلم المفتاح منذ التركيب.',
    },
  },
};
