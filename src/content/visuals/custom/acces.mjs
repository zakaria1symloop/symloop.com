// Bespoke animated figures for the 2027 "accès à distance au bureau" post.
//  chemins(): three ways to reach the office from outside, as three lanes.
//             Lane 1, an open port on the router: your dot reaches the office
//             PC, and so do the dots of strangers. Lane 2, an encrypted tunnel:
//             your dot travels inside the tube, strangers stop at a wall before
//             the router. Lane 3, the software itself on the web: you and the
//             office both travel to the hosted application; three tiles.
//  ligne():   what the office line carries. Three bars grow against a dashed
//             10 Mbit/s upload limit: six people on the management software,
//             then one of them browsing the web inside the session, then one
//             playing a video, which overflows; under them a round-trip delay
//             scale in three zones with three markers; three tiles.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function growX(css, P, id, at, dur, rtl) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'} center;animation:${P}-${id} ${LOOP}s linear infinite`; }
function travel(css, P, id, at, dur, dx) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:translateX(${dx}px)}${(at + dur).toFixed(1)}%,100%{transform:translateX(0)}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
const I = (x) => `⁦${x}⁩`;
const TINT = 'rgba(242,181,68,0.06)';
const DARK = '#0b0b0b';

function tiles(c, css, P, ky, ts, at0) {
  let s = '';
  ts.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, at0 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? TINT : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  return s;
}
const motionOff = (P) => `@media (prefers-reduced-motion: reduce){svg [style*="${P}-"]{animation:none !important}}`;

export function chemins(t, rtl) {
  const c = ctx(rtl); const P = 'ac'; const css = []; const H = 606;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const ux = 80, uw = 150, bx = 520, bw = 200, tx = 870, tw = 190, mx = 380; const sg = rtl ? -1 : 1;
  const dot = (x, y, fill, id, at, dur, from) => `<circle cx="${c.X(x)}" cy="${y}" r="5" fill="${fill}" style="animation:${travel(css, P, id, at, dur, sg * (from - x))}"/>`;
  t.lanes.forEach((ln, i) => {
    const y0 = 146 + i * 100; const y = y0 + 38; const hot = i === 0; const t0 = 4 + i * 24;
    let g = text(c, ux, y0 + 8, ln.title, { size: 11.5, fill: hot ? C.accent : C.fg, weight: 500 });
    g += line(c, ux + uw, y, bx, y, { stroke: C.fg35 }) + line(c, bx + bw, y, tx, y, { stroke: C.fg35 });
    if (i === 1) g += rect(c, ux + uw, y - 7, bx - ux - uw, 14, { stroke: C.accent, fill: TINT });
    if (i > 0) g += line(c, mx, y - 14, bx - 6, y - 14, { stroke: C.fg35, dash: '3 4' }) + line(c, bx - 3, y - 23, bx - 3, y - 7, { stroke: C.accent, sw: 2.5 });
    g += rect(c, ux, y - 18, uw, 36, { stroke: C.line2, fill: DARK }) + text(c, ux + uw / 2, y + 4, ln.user, { size: 9.5, fill: C.fg, anchor: 'middle' });
    g += rect(c, bx, y - 18, bw, 36, { stroke: hot ? C.accent : C.line2, fill: hot ? TINT : DARK }) + text(c, bx + bw / 2, y + 4, ln.box, { size: 9, fill: hot ? C.accent : C.fg, anchor: 'middle' });
    g += rect(c, tx, y - 18, tw, 36, { stroke: C.line2, fill: DARK }) + text(c, tx + tw / 2, y + 4, ln.target, { size: 9.5, fill: C.fg, anchor: 'middle' });
    g += text(c, mx, y - 24, ln.mid, { size: 8.5, font: 'mono', fill: C.accent, anchor: 'middle' });
    s += `<g style="animation:${show(css, P, `l${i}`, t0)}">${g}</g>`;
    // your dot, then the strangers'
    if (i < 2) s += dot(tx - 8, y, C.fg, `u${i}`, t0 + 3, 7, ux + uw + 6);
    else s += dot(bx - 8, y, C.fg, `u${i}`, t0 + 3, 5, ux + uw + 6) + dot(bx + bw + 8, y, C.fg70, `o${i}`, t0 + 3, 5, tx - 8);
    for (let k = 0; k < 3; k++) {
      if (i === 0) s += dot(tx - 20 - k * 11, y, C.accent, `s${i}${k}`, t0 + 9 + k * 1.5, 6, mx);
      else s += dot(bx - 12 - k * 11, y - 14, C.accent, `s${i}${k}`, t0 + 9 + k * 1.5, 3, mx);
    }
    s += `<g style="animation:${show(css, P, `v${i}`, t0 + 18)}">` + text(c, ux, y0 + 78, ln.verdict, { size: 9.5, fill: hot ? C.accent : C.fg70 }) + '</g>';
  });
  const ky = 446;
  s += tiles(c, css, P, ky, t.tiles, 76);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// Mbit/s sent by the office: management software for all, plus one heavy use
const ROWS = [[1.2, 0], [1.0, 6.5], [1.0, 9.5]];
// round-trip delay markers of the example, in ms
const MARKS = [20, 80, 240];

export function ligne(t, rtl) {
  const c = ctx(rtl); const P = 'al'; const css = []; const H = 612;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const x0 = 360, pm = 56, xl = x0 + 10 * pm;
  s += `<g style="animation:${show(css, P, 'lim', 4)}">` + line(c, xl, 170, xl, 304, { stroke: C.accent, dash: '5 5' }) + text(c, xl, 160, t.limit, { size: 9, font: 'mono', fill: C.accent, anchor: 'middle' }) + '</g>';
  ROWS.forEach(([a, b], i) => {
    const y = 180 + i * 46; const at = 8 + i * 14; const r = t.rows[i];
    s += `<g style="animation:${show(css, P, `l${i}`, at)}">` + text(c, 80, y + 11, r.l1, { size: 10, fill: C.fg, weight: 500 }) + text(c, 80, y + 25, r.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>';
    s += `<g style="${growX(css, P, `a${i}`, at + 1, 2, rtl)}">` + rect(c, x0, y, a * pm, 26, { stroke: C.fg70, fill: C.fill }) + '</g>';
    if (b) s += `<g style="${growX(css, P, `b${i}`, at + 3, 5, rtl)}">` + rect(c, x0 + a * pm + 2, y, b * pm - 2, 26, { stroke: C.accent, fill: TINT }) + '</g>';
    s += `<g style="animation:${show(css, P, `v${i}`, at + 9)}">` + text(c, x0 + (a + b) * pm + 10, y + 17, r.v, { size: 10.5, font: 'mono', fill: i === 2 ? C.accent : C.fg, weight: 500 }) + '</g>';
  });
  s += `<g style="animation:${show(css, P, 'lg', 48)}">` + text(c, 80, 328, t.legend, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>';
  // round-trip delay scale
  const ay = 392, ms = 560 / 300; const X = (v) => x0 + v * ms;
  s += `<g style="animation:${show(css, P, 'dz', 52)}">` + text(c, 80, ay - 4, t.delay.l1, { size: 10, fill: C.fg, weight: 500 }) + text(c, 80, ay + 10, t.delay.l2, { size: 8.5, font: 'mono', fill: C.fg55 })
    + rect(c, X(0), ay - 5, X(150) - X(0) - 2, 10, { fill: C.fg70 }) + rect(c, X(150), ay - 5, X(200) - X(150) - 2, 10, { fill: C.fg35 }) + rect(c, X(200), ay - 5, X(300) - X(200), 10, { stroke: C.accent, fill: TINT })
    + text(c, X(75), ay + 24, t.delay.zones[0], { size: 9, fill: C.fg70, anchor: 'middle' }) + text(c, X(175), ay + 24, t.delay.zones[1], { size: 9, fill: C.fg55, anchor: 'middle' }) + text(c, X(250), ay + 24, t.delay.zones[2], { size: 9, fill: C.accent, anchor: 'middle' })
    + [0, 150, 200, 300].map((v, i) => text(c, X(v), ay + 38, t.delay.ticks[i], { size: 8.5, font: 'mono', fill: C.fg55, anchor: 'middle' })).join('')
    + text(c, 940, ay - 2, t.delay.n1, { size: 9.5, fill: C.fg70 }) + text(c, 940, ay + 12, t.delay.n2, { size: 9.5, fill: C.fg70 }) + '</g>';
  MARKS.forEach((v, i) => {
    const hot = i === 2;
    s += `<g style="animation:${show(css, P, `m${i}`, 58 + i * 5)}">` + circle(c, X(v), ay, 6, { fill: DARK, stroke: hot ? C.accent : C.fg, sw: 2 }) + text(c, X(v), ay - 16, t.delay.marks[i], { size: 8.5, font: 'mono', fill: hot ? C.accent : C.fg, anchor: 'middle' }) + '</g>';
  });
  const ky = 452;
  s += tiles(c, css, P, ky, t.tiles, 76);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    chemins: {
      title: 'Trois chemins vers le bureau : un seul laisse la porte ouverte',
      alt: 'Trois façons d’atteindre le logiciel du bureau depuis l’extérieur. Première : un port de bureau à distance ouvert sur la box ; vous atteignez le poste du bureau, et les inconnus qui balaient internet aussi. Deuxième : un tunnel chiffré jusqu’au bureau ; vous entrez par le tunnel avec votre compte et un second code, les inconnus s’arrêtent à la box. Troisième : le logiciel lui-même est une application web hébergée ; vous et le bureau l’ouvrez dans un navigateur, il n’y a plus de poste à joindre.',
      header: 'Exemple construit · une comptable chez elle, le logiciel sur un poste ou un serveur du bureau · trois façons d’y arriver',
      lanes: [
        { title: '1 · Un port ouvert sur la box', user: 'Vous, de l’extérieur', mid: 'inconnus', box: 'Box · port 3389 ouvert', target: 'Poste ou serveur du bureau', verdict: 'Vous arrivez au bureau. Ceux qui balaient internet aussi : il ne reste qu’un mot de passe entre eux et le serveur.' },
        { title: '2 · Un tunnel chiffré jusqu’au bureau', user: 'Vous, de l’extérieur', mid: 'inconnus', box: 'Box · aucun port ouvert', target: 'Poste ou serveur du bureau', verdict: 'Vous entrez par le tunnel, avec votre compte et un second code. Les inconnus s’arrêtent à la box : il n’y a rien à joindre.' },
        { title: '3 · Le logiciel lui-même sur le web', user: 'Vous, de l’extérieur', mid: 'inconnus', box: 'Application hébergée', target: 'Le bureau, client lui aussi', verdict: 'Plus de poste à joindre : chacun ouvre l’application dans un navigateur, avec son compte. C’est la sortie, quand le logiciel le permet.' },
      ],
      tiles: [
        { big: 'port 3389', l1: 'le port par défaut du bureau à distance', l2: 'ouvert sur la box, il répond à tout internet', hot: true },
        { big: '1 tunnel, 0 port ouvert', l1: 'on entre d’abord dans le réseau du bureau', l2: 'puis on ouvre sa session, comme sur place' },
        { big: 'compte + second code', l1: 'un compte par personne, jamais partagé', l2: 'le mot de passe seul ne suffit plus' },
      ],
      line1: 'La question n’est pas « comment ouvrir le bureau à distance », mais « par où entre-t-on dans le réseau du bureau ».',
      line2: 'Un tunnel ou une application web ; jamais un port ouvert, même « juste pour dépanner ».',
      note: 'Exemple construit · schéma de principe ; 3389 est le port d’écoute par défaut du protocole de bureau à distance.',
    },
    ligne: {
      title: 'Ce que la ligne du bureau doit envoyer : 1,2 Mbit/s pour six, ou 10,5 pour une vidéo',
      alt: 'Débit envoyé par le bureau pour six personnes connectées à distance, sur une ligne de 10 Mbit/s en montée. Six personnes sur le logiciel de gestion : 1,2 Mbit/s. Si l’une d’elles navigue sur le web dans sa session : 7,5 Mbit/s. Si l’une d’elles lance une vidéo : 10,5 Mbit/s, au-delà de la ligne. En dessous, une échelle du délai aller-retour : confortable jusqu’à 150 ms, correct pour du texte de 150 à 200 ms, pénible au-delà ; trois repères d’exemple à 20, 80 et 240 ms.',
      header: 'Exemple construit · six personnes à distance, bureau à 10 Mbit/s en montée · débits par usage : repères publiés par Microsoft',
      limit: '10 Mbit/s en montée',
      rows: [
        { l1: 'Six personnes sur le logiciel de gestion', l2: '6 × 0,2 = 1,2 Mbit/s', v: '1,2 Mbit/s' },
        { l1: 'Une des six ouvre le web dans sa session', l2: '5 × 0,2 + 6,5 = 7,5 Mbit/s', v: '7,5 Mbit/s' },
        { l1: 'Une des six lance une vidéo dans sa session', l2: '5 × 0,2 + 9,5 = 10,5 Mbit/s', v: '10,5 Mbit/s · déborde' },
      ],
      legend: 'Repères Microsoft, écran 1920 × 1080 : tableur 150 à 200 kbit/s · navigation web 6 à 6,5 Mbit/s · vidéo 8,5 à 9,5 Mbit/s',
      delay: { l1: 'Le délai aller-retour', l2: 'depuis l’endroit où l’on travaille', zones: ['confortable', 'correct pour du texte', 'pénible'], ticks: ['0', '150 ms', '200 ms', '300 ms'], marks: ['même ville · 20 ms', 'depuis la France · 80 ms', '4G faible · 240 ms'], n1: 'le délai ne se corrige', n2: 'pas avec plus de débit' },
      tiles: [
        { big: '0,2 Mbit/s par session', l1: 'pour un tableur ou un logiciel de gestion', l2: 'six personnes : 1,2 Mbit/s sur 10' },
        { big: '6,5 puis 9,5 Mbit/s', l1: 'dès qu’une session ouvre le web ou une vidéo', l2: 'une seule personne sature la ligne du bureau', hot: true },
        { big: 'moins de 150 ms', l1: 'aller-retour sans gêne pour un travail de saisie', l2: 'au-delà de 200 ms, chaque clic se fait attendre' },
      ],
      line1: 'Le bureau à distance ne transporte pas vos fichiers, il transporte l’écran : c’est la ligne du bureau qui envoie, pas celle de la maison.',
      line2: 'Le logiciel de gestion passe partout ; le web et la vidéo se regardent sur son propre ordinateur, pas dans la session.',
      note: 'Exemple construit · débits par usage et seuils de délai : documentation de Microsoft sur le bureau à distance ; à vérifier par un essai.',
    },
  },
  en: {
    chemins: {
      title: 'Three ways into the office: only one leaves the door open',
      alt: 'Three ways to reach the office software from outside. First: a remote desktop port opened on the router; you reach the office PC, and so do the strangers who scan the internet. Second: an encrypted tunnel to the office; you come in through the tunnel with your account and a second code, strangers stop at the router. Third: the software itself is a hosted web application; you and the office open it in a browser, and there is no PC left to reach.',
      header: 'Constructed example · an accountant at home, the software on an office PC or server · three ways to get there',
      lanes: [
        { title: '1 · A port opened on the router', user: 'You, from outside', mid: 'strangers', box: 'Router · port 3389 open', target: 'Office PC or server', verdict: 'You reach the office. So do those who scan the internet: only a password stands between them and the server.' },
        { title: '2 · An encrypted tunnel to the office', user: 'You, from outside', mid: 'strangers', box: 'Router · no open port', target: 'Office PC or server', verdict: 'You come in through the tunnel, with your account and a second code. Strangers stop at the router: there is nothing to reach.' },
        { title: '3 · The software itself on the web', user: 'You, from outside', mid: 'strangers', box: 'Hosted application', target: 'The office, a client too', verdict: 'No PC left to reach: everyone opens the application in a browser, with their account. That is the way out, when the software allows it.' },
      ],
      tiles: [
        { big: 'port 3389', l1: 'the default port of remote desktop', l2: 'opened on the router, it answers the whole internet', hot: true },
        { big: '1 tunnel, 0 open port', l1: 'you first enter the office network', l2: 'then open your session, as if on site' },
        { big: 'account + second code', l1: 'one account per person, never shared', l2: 'the password alone is no longer enough' },
      ],
      line1: 'The question is not “how do I open remote desktop”, but “through where do we enter the office network”.',
      line2: 'A tunnel or a web application; never an open port, not even “just to fix something”.',
      note: 'Constructed example · schematic; 3389 is the default listening port of the remote desktop protocol.',
    },
    ligne: {
      title: 'What the office line must send: 1.2 Mbit/s for six, or 10.5 for one video',
      alt: 'Bandwidth sent by the office for six people connected remotely, on a line with 10 Mbit/s upload. Six people on the management software: 1.2 Mbit/s. If one of them browses the web inside the session: 7.5 Mbit/s. If one of them plays a video: 10.5 Mbit/s, beyond the line. Below, a round-trip delay scale: comfortable up to 150 ms, fine for text from 150 to 200 ms, painful beyond; three example markers at 20, 80 and 240 ms.',
      header: 'Constructed example · six people remote, office with 10 Mbit/s upload · bandwidth per use: figures published by Microsoft',
      limit: '10 Mbit/s upload',
      rows: [
        { l1: 'Six people on the management software', l2: '6 × 0.2 = 1.2 Mbit/s', v: '1.2 Mbit/s' },
        { l1: 'One of the six browses the web in the session', l2: '5 × 0.2 + 6.5 = 7.5 Mbit/s', v: '7.5 Mbit/s' },
        { l1: 'One of the six plays a video in the session', l2: '5 × 0.2 + 9.5 = 10.5 Mbit/s', v: '10.5 Mbit/s · overflows' },
      ],
      legend: 'Microsoft figures, 1920 × 1080 screen: spreadsheet 150 to 200 kbit/s · web browsing 6 to 6.5 Mbit/s · video 8.5 to 9.5 Mbit/s',
      delay: { l1: 'The round-trip delay', l2: 'from the place where you work', zones: ['comfortable', 'fine for text', 'painful'], ticks: ['0', '150 ms', '200 ms', '300 ms'], marks: ['same city · 20 ms', 'from France · 80 ms', 'weak 4G · 240 ms'], n1: 'delay is not fixed', n2: 'by more bandwidth' },
      tiles: [
        { big: '0.2 Mbit/s per session', l1: 'for a spreadsheet or management software', l2: 'six people: 1.2 Mbit/s out of 10' },
        { big: '6.5 then 9.5 Mbit/s', l1: 'as soon as a session opens the web or a video', l2: 'a single person saturates the office line', hot: true },
        { big: 'under 150 ms', l1: 'round trip with no discomfort for data entry', l2: 'beyond 200 ms, every click makes you wait' },
      ],
      line1: 'Remote desktop does not carry your files, it carries the screen: it is the office line that sends, not the one at home.',
      line2: 'Management software gets through anywhere; web and video are watched on your own computer, not in the session.',
      note: 'Constructed example · bandwidth per use and delay thresholds: Microsoft documentation on remote desktop; to be checked by a trial.',
    },
  },
  ar: {
    chemins: {
      title: 'ثلاث طرق إلى المكتب: واحدة فقط تترك الباب مفتوحاً',
      alt: 'ثلاث طرق للوصول إلى برنامج المكتب من الخارج. الأولى: منفذ سطح المكتب البعيد مفتوح على الموجِّه؛ تصلون إلى حاسوب المكتب، ويصل إليه كذلك المجهولون الذين يمسحون الإنترنت. الثانية: نفق مشفَّر حتى المكتب؛ تدخلون عبر النفق بحسابكم ورمز ثانٍ، والمجهولون يتوقفون عند الموجِّه. الثالثة: البرنامج نفسه تطبيق ويب مستضاف؛ أنتم والمكتب تفتحونه في متصفح، ولم يعد هناك حاسوب يُوصَل إليه.',
      header: 'مثال مركَّب · محاسِبة في بيتها، والبرنامج على حاسوب أو خادم في المكتب · ثلاث طرق للوصول إليه',
      lanes: [
        { title: '1 · منفذ مفتوح على الموجِّه', user: 'أنتم، من الخارج', mid: 'مجهولون', box: `الموجِّه · المنفذ ${I('3389')} مفتوح`, target: 'حاسوب أو خادم المكتب', verdict: 'تصلون إلى المكتب. ومن يمسحون الإنترنت كذلك: لم يبقَ بينهم وبين الخادم إلا كلمة مرور.' },
        { title: '2 · نفق مشفَّر حتى المكتب', user: 'أنتم، من الخارج', mid: 'مجهولون', box: 'الموجِّه · لا منفذ مفتوح', target: 'حاسوب أو خادم المكتب', verdict: 'تدخلون عبر النفق، بحسابكم ورمز ثانٍ. والمجهولون يتوقفون عند الموجِّه: لا شيء يُوصَل إليه.' },
        { title: '3 · البرنامج نفسه على الويب', user: 'أنتم، من الخارج', mid: 'مجهولون', box: 'تطبيق مستضاف', target: 'المكتب، زبون هو كذلك', verdict: 'لم يعد هناك حاسوب يُوصَل إليه: كل واحد يفتح التطبيق في متصفح، بحسابه. وهو المخرج، حين يسمح البرنامج بذلك.' },
      ],
      tiles: [
        { big: `المنفذ ${I('3389')}`, l1: 'المنفذ الافتراضي لسطح المكتب البعيد', l2: 'مفتوحاً على الموجِّه، يجيب كل الإنترنت', hot: true },
        { big: 'نفق واحد، لا منفذ مفتوح', l1: 'ندخل أولاً إلى شبكة المكتب', l2: 'ثم نفتح الجلسة، كما لو كنا في المكان' },
        { big: 'حساب + رمز ثانٍ', l1: 'حساب لكل شخص، لا يُتقاسَم أبداً', l2: 'كلمة المرور وحدها لم تعد تكفي' },
      ],
      line1: 'السؤال ليس «كيف نفتح سطح المكتب البعيد»، بل «من أين ندخل إلى شبكة المكتب».',
      line2: 'نفق أو تطبيق ويب؛ ولا منفذ مفتوح أبداً، حتى «فقط لإصلاح عطل».',
      note: `مثال مركَّب · مخطط مبدئي؛ ${I('3389')} هو منفذ الاستماع الافتراضي لبروتوكول سطح المكتب البعيد.`,
    },
    ligne: {
      title: 'ما يجب أن يرسله خط المكتب: 1,2 ميغابت لستة، أو 10,5 لفيديو واحد',
      alt: 'التدفق الذي يرسله المكتب لستة أشخاص متصلين عن بعد، على خط رفعه 10 ميغابت في الثانية. ستة أشخاص على برنامج التسيير: 1,2 ميغابت في الثانية. وإذا تصفّح أحدهم الويب داخل جلسته: 7,5. وإذا شغّل أحدهم فيديو: 10,5، فوق طاقة الخط. وفي الأسفل سلّم زمن الذهاب والإياب: مريح حتى 150 ميلي ثانية، مقبول للنصوص بين 150 و200، ومزعج بعدها؛ مع ثلاث علامات للمثال عند 20 و80 و240 ميلي ثانية.',
      header: 'مثال مركَّب · ستة أشخاص عن بعد، ومكتب برفع 10 ميغابت/ثا · التدفق حسب الاستعمال: أرقام تنشرها مايكروسوفت',
      limit: 'رفع 10 ميغابت/ثا',
      rows: [
        { l1: 'ستة أشخاص على برنامج التسيير', l2: `${I('6 × 0,2 = 1,2')} ميغابت/ثا`, v: '1,2 ميغابت/ثا' },
        { l1: 'أحد الستة يفتح الويب داخل جلسته', l2: `${I('5 × 0,2 + 6,5 = 7,5')} ميغابت/ثا`, v: '7,5 ميغابت/ثا' },
        { l1: 'أحد الستة يشغّل فيديو داخل جلسته', l2: `${I('5 × 0,2 + 9,5 = 10,5')} ميغابت/ثا`, v: '10,5 ميغابت/ثا · يفيض' },
      ],
      legend: `أرقام مايكروسوفت، شاشة ${I('1920 × 1080')}: جدول 150 إلى 200 كيلوبت/ثا · تصفّح الويب 6 إلى 6,5 ميغابت/ثا · فيديو 8,5 إلى 9,5 ميغابت/ثا`,
      delay: { l1: 'زمن الذهاب والإياب', l2: 'من المكان الذي نعمل منه', zones: ['مريح', 'مقبول للنصوص', 'مزعج'], ticks: ['0', '150 م.ثا', '200 م.ثا', '300 م.ثا'], marks: ['المدينة نفسها · 20 م.ثا', 'من فرنسا · 80 م.ثا', 'جيل رابع ضعيف · 240 م.ثا'], n1: 'الزمن لا يُصلَح', n2: 'بتدفق أكبر' },
      tiles: [
        { big: '0,2 ميغابت/ثا للجلسة', l1: 'لجدول أو لبرنامج تسيير', l2: 'ستة أشخاص: 1,2 ميغابت/ثا من 10' },
        { big: '6,5 ثم 9,5 ميغابت/ثا', l1: 'حالما تفتح جلسة الويب أو فيديو', l2: 'شخص واحد يُشبع خط المكتب', hot: true },
        { big: 'أقل من 150 م.ثا', l1: 'ذهاب وإياب دون إزعاج لعمل الإدخال', l2: 'وبعد 200 م.ثا، كل نقرة تنتظر' },
      ],
      line1: 'سطح المكتب البعيد لا ينقل ملفاتكم، بل ينقل الشاشة: خط المكتب هو الذي يرسل، لا خط البيت.',
      line2: 'برنامج التسيير يمرّ في كل مكان؛ والويب والفيديو يُشاهَدان على الحاسوب الشخصي، لا داخل الجلسة.',
      note: 'مثال مركَّب · التدفق حسب الاستعمال وعتبات الزمن: وثائق مايكروسوفت حول سطح المكتب البعيد؛ وتُراجَع بتجربة.',
    },
  },
};
