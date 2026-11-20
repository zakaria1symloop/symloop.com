// Bespoke animated figures for the 2027 "ransomware en entreprise en Algérie"
// post.
//  heure():  the first hour drawn on a sixty-minute axis: seven numbered markers
//            appear along a line that draws itself, with the list of what to do,
//            in order, and beside it what not to do; three tiles.
//  chaine(): the attack as a chain of six links over three weeks, drawn from left
//            to right, and under each of the first five links the barrier that
//            would have broken it (a cross appears on the link); under the last
//            link, what is left with and without the out-of-reach copy; three
//            tiles.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function draw(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{stroke-dashoffset:1000}${(at + dur).toFixed(1)}%,100%{stroke-dashoffset:0}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
const I = (x) => `⁦${x}⁩`;
const TINT = 'rgba(242,181,68,0.06)';

function tiles(c, css, P, ky, ts, at0) {
  let s = '';
  ts.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, at0 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? TINT : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  return s;
}
const motionOff = (P) => `@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"],svg line[style*="${P}-"]{animation:none !important}}`;
// a cross whose shape is never mirrored
const cross = (c, x, y, col) => { const m = c.X(x); return `<path d="M ${m - 5} ${y - 5} L ${m + 5} ${y + 5} M ${m + 5} ${y - 5} L ${m - 5} ${y + 5}" fill="none" stroke="${col}" stroke-width="2"/>`; };

export function heure(t, rtl) {
  const c = ctx(rtl); const P = 'rh'; const css = []; const H = 676;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  // the sixty-minute axis
  const ax0 = 110, ax1 = 1090, ay = 174; const X = (min) => ax0 + (min / 60) * (ax1 - ax0);
  s += `<line x1="${c.X(ax0)}" y1="${ay}" x2="${c.X(ax1)}" y2="${ay}" stroke="${C.line2}" stroke-width="1.6" pathLength="1000" stroke-dasharray="1000" style="stroke-dashoffset:0;animation:${draw(css, P, 'ax', 3, 14)}"/>`;
  s += `<g style="animation:${show(css, P, 'tk', 3)}">` + [0, 10, 20, 30, 40, 50, 60].map((m) => line(c, X(m), ay - 4, X(m), ay + 4, { stroke: C.line2 }) + text(c, X(m), ay + 20, I(t.clock(m)), { size: 8.5, font: 'mono', fill: C.fg35, anchor: 'middle' })).join('') + '</g>';
  t.todo.forEach((a, i) => { const at = 4 + (a.min / 60) * 14; s += `<g style="animation:${show(css, P, `m${i}`, at)}">` + circle(c, X(a.min), ay, 8, { fill: a.hot ? C.accent : C.bg, stroke: a.hot ? C.accent : C.fg, sw: 1.6 }) + text(c, X(a.min), ay + 3.5, String(i + 1), { size: 9, font: 'mono', fill: a.hot ? C.bg : C.fg, anchor: 'middle', weight: 500 }) + '</g>'; });
  // what to do, in order (left)
  const py = 214, rowH = 34; const ph = 40 + t.todo.length * rowH;
  s += `<g style="animation:${show(css, P, 'pl', 5)}">` + rect(c, 80, py, 620, ph, { stroke: C.line2, fill: C.fill }) + text(c, 92, py + 22, t.todoTitle, { size: 10.5, fill: C.fg, weight: 500 }) + '</g>';
  t.todo.forEach((a, i) => {
    const y = py + 40 + i * rowH; const at = 6 + (a.min / 60) * 14;
    s += `<g style="animation:${show(css, P, `a${i}`, at)}">` + text(c, 92, y + 12, String(i + 1), { size: 10, font: 'mono', fill: a.hot ? C.accent : C.fg55, weight: 500 }) + text(c, 112, y + 12, I(t.clock(a.min)), { size: 9, font: 'mono', fill: C.fg55 })
      + text(c, 160, y + 12, a.t, { size: 10.5, fill: a.hot ? C.accent : C.fg, weight: 500 }) + text(c, 160, y + 26, a.s, { size: 8, font: 'mono', fill: C.fg55 }) + '</g>';
  });
  // what not to do (right)
  const dn = t.dont.length; const dRow = (ph - 40) / dn;
  s += `<g style="animation:${show(css, P, 'pr', 24)}">` + rect(c, 720, py, 400, ph, { stroke: C.accent, fill: TINT }) + text(c, 732, py + 22, t.dontTitle, { size: 10.5, fill: C.accent, weight: 500 }) + '</g>';
  t.dont.forEach((d, i) => {
    const y = py + 40 + i * dRow;
    s += `<g style="animation:${show(css, P, `d${i}`, 26 + i * 2.5)}">` + cross(c, 740, y + 10, C.accent) + text(c, 756, y + 14, d.t, { size: 10.5, fill: C.fg, weight: 500 }) + text(c, 756, y + 29, d.s, { size: 8, font: 'mono', fill: C.fg55 }) + '</g>';
  });
  const ky = py + ph + 16;
  s += tiles(c, css, P, ky, t.tiles, 40);
  s += text(c, 80, ky + 86, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export function chaine(t, rtl) {
  const c = ctx(rtl); const P = 'rc'; const css = []; const H = 626;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const bw = 160, g = 16, sy = 162, sh = 100, by = 304, bh = 88; const n = t.links.length;
  s += `<g style="animation:${show(css, P, 'lb', 3)}">` + text(c, 80, sy - 12, t.chainLabel, { size: 9, font: 'mono', fill: C.fg35, letter: 1.2, upper: true }) + '</g>';
  t.links.forEach((lk, i) => {
    const x = 80 + i * (bw + g); const at = 4 + i * 3; const last = i === n - 1;
    s += `<g style="animation:${show(css, P, `l${i}`, at)}">` + rect(c, x, sy, bw, sh, { stroke: last ? C.accent : C.line2, fill: last ? TINT : C.fill })
      + text(c, x + 10, sy + 20, lk.d, { size: 8.5, font: 'mono', fill: C.accent }) + text(c, x + 10, sy + 40, lk.t, { size: 10.5, fill: last ? C.accent : C.fg, weight: 500 })
      + text(c, x + 10, sy + 58, lk.s1, { size: 7.8, font: 'mono', fill: C.fg55 }) + text(c, x + 10, sy + 71, lk.s2, { size: 7.8, font: 'mono', fill: C.fg55 }) + text(c, x + 10, sy + 84, lk.s3 || '', { size: 7.8, font: 'mono', fill: C.fg55 }) + '</g>';
    if (!last) s += `<line x1="${c.X(x + bw)}" y1="${sy + sh / 2}" x2="${c.X(x + bw + g)}" y2="${sy + sh / 2}" stroke="${C.accent}" stroke-width="2.4" pathLength="1000" stroke-dasharray="1000" style="stroke-dashoffset:0;animation:${draw(css, P, `c${i}`, at + 1.5, 1.5)}"/>`;
  });
  // the barriers, one under each of the first five links
  s += `<g style="animation:${show(css, P, 'bl', 24)}">` + text(c, 80, by - 12, t.barrierLabel, { size: 9, font: 'mono', fill: C.fg35, letter: 1.2, upper: true }) + '</g>';
  t.barriers.forEach((b, i) => {
    const x = 80 + i * (bw + g); const at = 26 + i * 3;
    s += `<g style="animation:${show(css, P, `b${i}`, at)}">` + line(c, x + bw / 2, sy + sh, x + bw / 2, by, { stroke: C.fg, dash: '2 4' }) + rect(c, x, by, bw, bh, { stroke: b.hot ? C.accent : C.fg, fill: b.hot ? TINT : 'rgba(255,255,255,0.07)', sw: 1.4 })
      + text(c, x + 10, by + 20, `${t.barrierWord} ${i + 1}`, { size: 8.5, font: 'mono', fill: b.hot ? C.accent : C.fg55 }) + text(c, x + 10, by + 40, b.t, { size: 10.5, fill: b.hot ? C.accent : C.fg, weight: 500 })
      + text(c, x + 10, by + 58, b.s1, { size: 7.8, font: 'mono', fill: C.fg55 }) + text(c, x + 10, by + 71, b.s2, { size: 7.8, font: 'mono', fill: C.fg55 })
      + cross(c, x + bw + g / 2, sy + sh / 2, C.fg) + '</g>';
  });
  // under the last link: what is left
  const rx = 80 + (n - 1) * (bw + g);
  s += `<g style="animation:${show(css, P, 'res', 44)}">` + line(c, rx + bw / 2, sy + sh, rx + bw / 2, by, { stroke: C.accent, dash: '2 4' }) + rect(c, rx, by, bw, bh, { stroke: C.accent, fill: TINT })
    + text(c, rx + 10, by + 20, t.left.title, { size: 8.5, font: 'mono', fill: C.accent }) + text(c, rx + 10, by + 40, t.left.a, { size: 9.5, fill: C.fg, weight: 500 }) + text(c, rx + 10, by + 55, t.left.a2, { size: 7.8, font: 'mono', fill: C.fg55 })
    + text(c, rx + 10, by + 71, t.left.b, { size: 9.5, fill: C.accent, weight: 500 }) + text(c, rx + 10, by + 83, t.left.b2, { size: 7.8, font: 'mono', fill: C.fg55 }) + '</g>';
  const ky = by + bh + 22;
  s += tiles(c, css, P, ky, t.tiles, 48);
  s += text(c, 80, ky + 86, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

const clock = (m) => { const tot = 8 * 60 + 5 + m; return `${String(Math.floor(tot / 60)).padStart(2, '0')}:${String(tot % 60).padStart(2, '0')}`; };
const MIN = [0, 2, 5, 10, 15, 30, 45];

export const STRINGS = {
  fr: {
    heure: {
      title: 'La première heure : sept gestes dans l’ordre, cinq à ne pas faire',
      alt: 'La première heure après la découverte d’un rançongiciel, de 08:05 à 09:05. Sept gestes dans l’ordre : constater, couper internet, isoler les machines touchées sans les éteindre, mettre les sauvegardes à l’abri, alerter le gérant et le prestataire, noter et garder les traces, décider qui pilote et ce qui reprend en premier. Cinq choses à ne pas faire : payer ou répondre, éteindre ou redémarrer les machines touchées, rallumer les machines éteintes, brancher la sauvegarde pour voir, restaurer sur les mêmes machines.',
      header: 'Exemple construit · dimanche 08:05 · un poste affiche un message de rançon · d’après les consignes publiques officielles',
      clock, todoTitle: 'À faire, dans l’ordre', dontTitle: 'À ne pas faire',
      todo: [
        { min: MIN[0], t: 'Constater', s: 'un message de rançon, des fichiers qui ne s’ouvrent plus' },
        { min: MIN[1], t: 'Couper internet', s: 'box et lien de secours débranchés : l’attaquant perd la main', hot: true },
        { min: MIN[2], t: 'Isoler les machines touchées', s: 'câble réseau débranché, Wi-Fi coupé ; sans les éteindre' },
        { min: MIN[3], t: 'Mettre les sauvegardes à l’abri', s: 'débrancher le disque ou le NAS de sauvegarde encore sain' },
        { min: MIN[4], t: 'Alerter', s: 'gérant et prestataire informatique, par téléphone, liste sur papier' },
        { min: MIN[5], t: 'Noter et garder', s: 'photo du message, heure, postes touchés, registre des gestes' },
        { min: MIN[6], t: 'Décider', s: 'qui pilote, ce qui reprend d’abord, comment on travaille aujourd’hui' },
      ],
      dont: [
        { t: 'Payer ou répondre au message', s: 'aucune garantie ; jamais dans l’heure, jamais seul' },
        { t: 'Éteindre ou redémarrer les machines touchées', s: 'les traces en mémoire disparaissent ; on isole d’abord' },
        { t: 'Rallumer les machines éteintes', s: 'elles peuvent être touchées à leur tour' },
        { t: 'Brancher la sauvegarde « pour voir »', s: 'elle serait chiffrée elle aussi' },
        { t: 'Restaurer sur les mêmes machines', s: 'l’attaquant est peut-être encore là' },
      ],
      tiles: [
        { big: '2 minutes', l1: 'entre le constat et la coupure d’internet', l2: 'chaque minute de plus, ce sont des fichiers de plus', hot: true },
        { big: '1 feuille', l1: 'la liste d’appel et les gestes, imprimés et affichés', l2: 'ce jour-là, l’annuaire en ligne est chiffré lui aussi' },
        { big: '0 décision seul', l1: 'payer, communiquer, déclarer : avec un conseil', l2: 'ce guide s’arrête aux gestes techniques' },
      ],
      rule: 'La première heure ne sert pas à réparer : elle sert à empêcher que cela s’étende, à garder ce qui est encore sain',
      rule2: 'et à noter ce qui s’est passé. La réparation commence après, sur des machines propres.',
      note: 'Exemple construit · heures et postes sont ceux de l’exemple ; chaque situation se pilote avec un professionnel.',
    },
    chaine: {
      title: 'Vingt et un jours avant : la chaîne de l’attaque, et les cinq barrières',
      alt: 'La chaîne d’une attaque en six maillons sur trois semaines : un mail piégé, une boîte ouverte, une porte sur internet, un compte administrateur, les sauvegardes atteintes, le chiffrement un vendredi à 02:10. Sous chacun des cinq premiers, la barrière qui l’aurait arrêté : double vérification, alerte de connexion, aucun port ouvert, cloisons, copie hors d’atteinte. Sous le dernier : avec la copie, deux jours de reprise ; sans elle, rien à restaurer.',
      header: 'Exemple construit · la même entreprise, trois semaines plus tôt · d’après les descriptions publiques de ces attaques',
      chainLabel: 'Ce que fait l’attaquant', barrierLabel: 'Ce qui l’aurait arrêté', barrierWord: 'barrière',
      links: [
        { d: I('J−21'), t: 'Un mail piégé', s1: 'un employé saisit son', s2: 'mot de passe sur une', s3: 'fausse page' },
        { d: I('J−21'), t: 'Une boîte ouverte', s1: 'il lit les mails,', s2: 'trouve des accès,', s3: 'écrit en votre nom' },
        { d: I('J−20'), t: 'Une porte sur internet', s1: 'bureau à distance', s2: 'ouvert, le même', s3: 'mot de passe' },
        { d: I('J−14'), t: 'Un compte administrateur', s1: 'il passe de poste en', s2: 'poste, sans rencontrer', s3: 'd’obstacle' },
        { d: I('J−2'), t: 'Les sauvegardes', s1: 'sur le même réseau :', s2: 'il les efface ou les', s3: 'chiffre d’abord' },
        { d: I('J0 · 02:10'), t: 'Le chiffrement', s1: 'serveur, NAS, postes', s2: 'allumés ; un vendredi,', s3: 'la nuit' },
      ],
      barriers: [
        { t: 'Double vérification', s1: 'le mot de passe volé', s2: 'ne suffit plus à entrer' },
        { t: 'Alerte de connexion', s1: 'connexion inhabituelle', s2: 'signalée, compte bloqué' },
        { t: 'Aucun port ouvert', s1: 'accès par tunnel seul,', s2: 'mises à jour faites' },
        { t: 'Cloisons', s1: 'réseaux séparés, compte', s2: 'administrateur à part' },
        { t: 'Copie hors d’atteinte', s1: 'hors ligne ou inaltérable,', s2: 'restauration essayée', hot: true },
      ],
      left: { title: 'ce qui reste', a: 'Avec la copie', a2: 'deux jours de reprise', b: 'Sans elle', b2: 'rien à restaurer' },
      tiles: [
        { big: '21 jours', l1: 'entre le mail piégé et le chiffrement, dans l’exemple', l2: 'le chiffrement est la dernière étape, pas la première' },
        { big: '5 barrières', l1: 'chacune aurait suffi à casser la chaîne', l2: 'aucune ne dépend d’un antivirus miracle' },
        { big: '1 copie hors d’atteinte', l1: 'celle qui décide si l’entreprise repart', l2: 'une restauration jamais essayée n’existe pas', hot: true },
      ],
      rule: 'Un rançongiciel n’arrive pas un vendredi à deux heures du matin : il arrive trois semaines plus tôt,',
      rule2: 'par un mot de passe, une porte ouverte et un réseau sans cloisons. Chaque maillon a sa barrière.',
      note: 'Exemple construit · dates et étapes sont celles de l’exemple, d’après les descriptions publiques de ces attaques.',
    },
  },
  en: {
    heure: {
      title: 'The first hour: seven actions in order, five things not to do',
      alt: 'The first hour after discovering ransomware, from 08:05 to 09:05. Seven actions in order: notice, cut the internet, isolate the affected machines without switching them off, put the backups out of reach, alert the manager and the IT provider, note and keep the traces, decide who leads and what restarts first. Five things not to do: pay or reply, switch off or restart the affected machines, switch on machines that are off, plug in the backup to look, restore onto the same machines.',
      header: 'Constructed example · Sunday 08:05 · one workstation shows a ransom note · following official public guidance',
      clock, todoTitle: 'What to do, in order', dontTitle: 'What not to do',
      todo: [
        { min: MIN[0], t: 'Notice', s: 'a ransom note, files that no longer open' },
        { min: MIN[1], t: 'Cut the internet', s: 'operator box and backup link unplugged: the attacker loses control', hot: true },
        { min: MIN[2], t: 'Isolate the affected machines', s: 'network cable unplugged, Wi-Fi off; without switching them off' },
        { min: MIN[3], t: 'Put the backups out of reach', s: 'unplug the backup disk or NAS that is still healthy' },
        { min: MIN[4], t: 'Alert', s: 'manager and IT provider, by phone, from a list on paper' },
        { min: MIN[5], t: 'Note and keep', s: 'photo of the note, time, machines affected, a log of actions' },
        { min: MIN[6], t: 'Decide', s: 'who leads, what restarts first, how we work today' },
      ],
      dont: [
        { t: 'Pay or reply to the message', s: 'no guarantee; never within the hour, never alone' },
        { t: 'Switch off or restart affected machines', s: 'traces in memory disappear; isolate first' },
        { t: 'Switch on machines that are off', s: 'they may be hit in turn' },
        { t: 'Plug in the backup “to have a look”', s: 'it would be encrypted too' },
        { t: 'Restore onto the same machines', s: 'the attacker may still be there' },
      ],
      tiles: [
        { big: '2 minutes', l1: 'between noticing and cutting the internet', l2: 'every extra minute means more files', hot: true },
        { big: '1 sheet', l1: 'the call list and the actions, printed and pinned up', l2: 'that day, the online directory is encrypted too' },
        { big: '0 decisions alone', l1: 'paying, communicating, reporting: with an adviser', l2: 'this guide stops at the technical actions' },
      ],
      rule: 'The first hour is not for repairing: it is for stopping the spread, keeping what is still healthy',
      rule2: 'and noting what happened. Repair starts afterwards, on clean machines.',
      note: 'Constructed example · times and machines belong to the example; every situation is handled with a professional.',
    },
    chaine: {
      title: 'Twenty-one days earlier: the attack chain, and the five barriers',
      alt: 'The chain of an attack in six links over three weeks: a phishing email, an open mailbox, a door on the internet, an administrator account, the backups reached, encryption on a Friday at 02:10. Under each of the first five, the barrier that would have stopped it: two-step sign-in, sign-in alert, no open port, partitions, out-of-reach copy. Under the last: with the copy, two days to recover; without it, nothing to restore.',
      header: 'Constructed example · the same company, three weeks earlier · following public descriptions of these attacks',
      chainLabel: 'What the attacker does', barrierLabel: 'What would have stopped it', barrierWord: 'barrier',
      links: [
        { d: I('D−21'), t: 'A phishing email', s1: 'an employee types', s2: 'their password on', s3: 'a fake page' },
        { d: I('D−21'), t: 'An open mailbox', s1: 'they read the mail,', s2: 'find access details,', s3: 'write in your name' },
        { d: I('D−20'), t: 'A door on the internet', s1: 'remote desktop', s2: 'open, the same', s3: 'password' },
        { d: I('D−14'), t: 'An administrator account', s1: 'they move from PC', s2: 'to PC, meeting', s3: 'no obstacle' },
        { d: I('D−2'), t: 'The backups', s1: 'on the same network:', s2: 'they delete or encrypt', s3: 'them first' },
        { d: I('D0 · 02:10'), t: 'Encryption', s1: 'server, NAS, PCs left', s2: 'on; a Friday,', s3: 'at night' },
      ],
      barriers: [
        { t: 'Two-step sign-in', s1: 'the stolen password is', s2: 'no longer enough' },
        { t: 'Sign-in alert', s1: 'unusual sign-in flagged,', s2: 'account blocked' },
        { t: 'No open port', s1: 'access by tunnel only,', s2: 'updates applied' },
        { t: 'Partitions', s1: 'separated networks,', s2: 'separate admin account' },
        { t: 'Out-of-reach copy', s1: 'offline or immutable,', s2: 'restore tried', hot: true },
      ],
      left: { title: 'what is left', a: 'With the copy', a2: 'two days to recover', b: 'Without it', b2: 'nothing to restore' },
      tiles: [
        { big: '21 days', l1: 'between the phishing email and encryption, in the example', l2: 'encryption is the last step, not the first' },
        { big: '5 barriers', l1: 'each one would have been enough to break the chain', l2: 'none depends on a miracle antivirus' },
        { big: '1 out-of-reach copy', l1: 'the one that decides whether the company restarts', l2: 'a restore never tried does not exist', hot: true },
      ],
      rule: 'Ransomware does not arrive on a Friday at two in the morning: it arrives three weeks earlier,',
      rule2: 'through a password, an open door and a network with no partitions. Every link has its barrier.',
      note: 'Constructed example · dates and steps belong to the example, following public descriptions of these attacks.',
    },
  },
  ar: {
    heure: {
      title: 'الساعة الأولى: سبع حركات بالترتيب، وخمسة أشياء لا تُفعل',
      alt: 'الساعة الأولى بعد اكتشاف برنامج فدية، من 08:05 إلى 09:05. سبع حركات بالترتيب: المعاينة، قطع الإنترنت، عزل الأجهزة المصابة دون إطفائها، إبعاد النسخ الاحتياطية، تنبيه المسيّر والمتعهّد، التدوين وحفظ الآثار، تقرير من يقود وما يُستأنف أولاً. خمسة أشياء لا تُفعل: الدفع أو الردّ، إطفاء الأجهزة المصابة أو إعادة تشغيلها، تشغيل الأجهزة المطفأة، وصل النسخة الاحتياطية للاطلاع، الاسترجاع على الأجهزة نفسها.',
      header: `مثال مركَّب · الأحد ${I('08:05')} · حاسوب يعرض رسالة فدية · حسب التعليمات العمومية الرسمية`,
      clock, todoTitle: 'ما يُفعل، بالترتيب', dontTitle: 'ما لا يُفعل',
      todo: [
        { min: MIN[0], t: 'المعاينة', s: 'رسالة فدية، وملفات لم تعد تُفتح' },
        { min: MIN[1], t: 'قطع الإنترنت', s: 'فصل العلبة والخط الاحتياطي: المهاجم يفقد التحكم', hot: true },
        { min: MIN[2], t: 'عزل الأجهزة المصابة', s: 'فصل كابل الشبكة وقطع الواي فاي؛ دون إطفائها' },
        { min: MIN[3], t: 'إبعاد النسخ الاحتياطية', s: 'فصل قرص أو وحدة النسخ التي ما زالت سليمة' },
        { min: MIN[4], t: 'التنبيه', s: 'المسيّر والمتعهّد، بالهاتف، من قائمة على الورق' },
        { min: MIN[5], t: 'التدوين والحفظ', s: 'صورة الرسالة، الساعة، الأجهزة المصابة، سجل الحركات' },
        { min: MIN[6], t: 'القرار', s: 'من يقود، ما يُستأنف أولاً، وكيف نعمل اليوم' },
      ],
      dont: [
        { t: 'الدفع أو الردّ على الرسالة', s: 'لا ضمان؛ لا في الساعة الأولى ولا وحدكم' },
        { t: 'إطفاء الأجهزة المصابة أو إعادة تشغيلها', s: 'الآثار في الذاكرة تختفي؛ نعزل أولاً' },
        { t: 'تشغيل الأجهزة المطفأة', s: 'قد تُصاب بدورها' },
        { t: 'وصل النسخة الاحتياطية «للاطلاع»', s: 'ستُشفَّر هي أيضاً' },
        { t: 'الاسترجاع على الأجهزة نفسها', s: 'قد يكون المهاجم ما زال هناك' },
      ],
      tiles: [
        { big: 'دقيقتان', l1: 'بين المعاينة وقطع الإنترنت', l2: 'كل دقيقة إضافية تعني ملفات إضافية', hot: true },
        { big: 'ورقة واحدة', l1: 'قائمة الاتصال والحركات، مطبوعة ومعلَّقة', l2: 'في ذلك اليوم دليل الهاتف الإلكتروني مشفَّر هو أيضاً' },
        { big: 'لا قرار وحدكم', l1: 'الدفع والتواصل والتصريح: مع مستشار', l2: 'هذا الدليل يتوقف عند الحركات التقنية' },
      ],
      rule: 'الساعة الأولى ليست للإصلاح: هي لمنع الانتشار، وحفظ ما زال سليماً،',
      rule2: 'وتدوين ما حدث. الإصلاح يبدأ بعد ذلك، على أجهزة نظيفة.',
      note: 'مثال مركَّب · الأوقات والأجهزة خاصة بالمثال؛ وكل حالة تُدار مع مختص.',
    },
    chaine: {
      title: 'قبل واحد وعشرين يوماً: سلسلة الهجوم، والحواجز الخمسة',
      alt: 'سلسلة هجوم في ست حلقات على ثلاثة أسابيع: بريد مفخَّخ، علبة مفتوحة، باب على الإنترنت، حساب مدير، بلوغ النسخ الاحتياطية، التشفير ليلة جمعة عند 02:10. تحت كل واحدة من الخمس الأولى الحاجز الذي كان سيوقفها: تحقق بخطوتين، تنبيه دخول، لا منفذ مفتوح، فواصل، نسخة بعيدة عن المتناول. وتحت الأخيرة: مع النسخة يومان للاستئناف؛ ودونها لا شيء يُسترجع.',
      header: 'مثال مركَّب · المؤسسة نفسها قبل ثلاثة أسابيع · حسب الأوصاف العلنية لهذه الهجمات',
      chainLabel: 'ما يفعله المهاجم', barrierLabel: 'ما كان سيوقفه', barrierWord: 'الحاجز',
      links: [
        { d: 'قبل 21 يوماً', t: 'بريد مفخَّخ', s1: 'موظف يكتب كلمة', s2: 'مروره في صفحة', s3: 'مزيَّفة' },
        { d: 'قبل 21 يوماً', t: 'علبة مفتوحة', s1: 'يقرأ الرسائل،', s2: 'يجد مداخل،', s3: 'ويكتب باسمكم' },
        { d: 'قبل 20 يوماً', t: 'باب على الإنترنت', s1: 'سطح مكتب بعيد', s2: 'مفتوح، وكلمة', s3: 'المرور نفسها' },
        { d: 'قبل 14 يوماً', t: 'حساب مدير', s1: 'ينتقل من حاسوب', s2: 'إلى آخر دون', s3: 'أي عائق' },
        { d: 'قبل يومين', t: 'النسخ الاحتياطية', s1: 'على الشبكة نفسها:', s2: 'يحذفها أو يشفّرها', s3: 'أولاً' },
        { d: `اليوم · ${I('02:10')}`, t: 'التشفير', s1: 'الخادم ووحدة التخزين', s2: 'والحواسيب المشتعلة؛', s3: 'ليلة جمعة' },
      ],
      barriers: [
        { t: 'تحقق بخطوتين', s1: 'كلمة المرور المسروقة', s2: 'لم تعد تكفي للدخول' },
        { t: 'تنبيه دخول', s1: 'دخول غير معتاد يُبلَّغ،', s2: 'والحساب يُغلق' },
        { t: 'لا منفذ مفتوح', s1: 'الدخول عبر النفق فقط،', s2: 'والتحديثات منجزة' },
        { t: 'فواصل', s1: 'شبكات معزولة، وحساب', s2: 'المدير على حدة' },
        { t: 'نسخة بعيدة عن المتناول', s1: 'غير موصولة أو لا تُغيَّر،', s2: 'والاسترجاع مجرَّب', hot: true },
      ],
      left: { title: 'ما يبقى', a: 'مع النسخة', a2: 'يومان للاستئناف', b: 'دونها', b2: 'لا شيء يُسترجع' },
      tiles: [
        { big: '21 يوماً', l1: 'بين البريد المفخَّخ والتشفير، في المثال', l2: 'التشفير هو الخطوة الأخيرة لا الأولى' },
        { big: '5 حواجز', l1: 'كل واحد منها كان يكفي لقطع السلسلة', l2: 'لا يتوقف أي منها على مضاد فيروسات معجزة' },
        { big: 'نسخة واحدة بعيدة', l1: 'هي التي تقرر هل تنطلق المؤسسة من جديد', l2: 'استرجاع لم يُجرَّب قط غير موجود', hot: true },
      ],
      rule: 'برنامج الفدية لا يصل ليلة جمعة عند الثانية صباحاً: يصل قبل ثلاثة أسابيع،',
      rule2: 'عبر كلمة مرور وباب مفتوح وشبكة دون فواصل. ولكل حلقة حاجزها.',
      note: 'مثال مركَّب · التواريخ والمراحل خاصة بالمثال، حسب الأوصاف العلنية لهذه الهجمات.',
    },
  },
};
