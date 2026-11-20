// Bespoke animated figures for the 2027 "pointeuse biométrique et logiciel de
// présence en Algérie" post.
//  semaine(): one week of attendance as a grid, eight people by six days; each
//             cell is a drawn mark (on time, late, missing punch, unplanned
//             absence, planned day off, phone punch) appearing column by column,
//             with the list of what the manager has to settle that morning;
//             three tiles.
//  circuit(): from the punch to the timesheet: three sources on one side (office
//             terminal, warehouse terminal, phone for field teams), the
//             attendance software in the middle, three outputs on the other side
//             (monthly timesheet, manager's board, access), linked by lines that
//             draw themselves; three tiles.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function draw(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{stroke-dashoffset:1000}${(at + dur).toFixed(1)}%,100%{stroke-dashoffset:0}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
const I = (x) => `⁦${x}⁩`;
const TINT = 'rgba(242,181,68,0.06)';

function box(c, css, P, id, at, x, y, w, h, t, accent) {
  let s = `<g style="animation:${show(css, P, id, at)}">` + rect(c, x, y, w, h, { stroke: accent ? C.accent : C.line2, fill: accent ? TINT : C.fill })
    + text(c, x + 12, y + 20, t.title, { size: 10.5, fill: accent ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, y + 34, t.sub, { size: 8, font: 'mono', fill: C.fg55 });
  (t.rows || []).forEach((r, i) => { const yy = y + 54 + i * 18; s += text(c, x + 12, yy, r.l, { size: 9, fill: C.fg70 }) + text(c, x + w - 12, yy, r.v, { size: 9, font: 'mono', fill: r.hot ? C.accent : C.fg, anchor: 'end', weight: r.hot ? 500 : 400 }); });
  return s + '</g>';
}
function tiles(c, css, P, ky, ts, at0) {
  let s = '';
  ts.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, at0 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? TINT : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  return s;
}
const motionOff = (P) => `@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"],svg line[style*="${P}-"]{animation:none !important}}`;

// one attendance mark, centred on (x, y); shapes are never mirrored
function cell(c, x, y, k, v) {
  const m = c.X(x);
  if (k === 'ok') return `<circle cx="${m}" cy="${y}" r="5" fill="${C.fg}"/>`;
  if (k === 'late') return `<circle cx="${m - 9}" cy="${y}" r="5" fill="${C.accent}"/><text x="${m + 1}" y="${y + 3.5}" style="font-family:Consolas,monospace;font-size:9px" fill="${C.accent}" direction="ltr">+${v}</text>`;
  if (k === 'miss') return `<circle cx="${m}" cy="${y}" r="6" fill="none" stroke="${C.accent}" stroke-width="1.6"/><text x="${m}" y="${y + 3.5}" text-anchor="middle" style="font-family:Consolas,monospace;font-size:9px;font-weight:700" fill="${C.accent}">?</text>`;
  if (k === 'abs') return `<path d="M ${m - 5} ${y - 5} L ${m + 5} ${y + 5} M ${m + 5} ${y - 5} L ${m - 5} ${y + 5}" fill="none" stroke="${C.accent}" stroke-width="2"/>`;
  if (k === 'field') return `<path d="M ${m} ${y - 6} L ${m + 6} ${y} L ${m} ${y + 6} L ${m - 6} ${y} Z" fill="none" stroke="${C.fg}" stroke-width="1.5"/>`;
  return `<path d="M ${m - 5} ${y} L ${m + 5} ${y}" fill="none" stroke="${C.fg35}" stroke-width="1.6"/>`; // off
}

export function semaine(t, rtl) {
  const c = ctx(rtl); const P = 'ps'; const css = []; const H = 660;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const gx = 290, cw = 66, gy = 176, rh = 34; const nD = t.days.length; const nR = t.people.length;
  // day headers
  s += `<g style="animation:${show(css, P, 'dh', 3)}">` + t.days.map((d, j) => text(c, gx + j * cw + cw / 2, gy - 12, d, { size: 9, font: 'mono', fill: C.fg35, anchor: 'middle', letter: 1, upper: true })).join('') + line(c, 80, gy - 2, gx + nD * cw, gy - 2, { stroke: C.line2 }) + '</g>';
  // names
  t.people.forEach((p, i) => { const y = gy + i * rh; s += `<g style="animation:${show(css, P, `n${i}`, 3.5)}">` + text(c, 80, y + 16, p.n, { size: 10.5, fill: C.fg, weight: 500 }) + text(c, 80, y + 28, p.s, { size: 7.8, font: 'mono', fill: C.fg55 }) + line(c, 80, y + rh, gx + nD * cw, y + rh, { stroke: C.line }) + '</g>'; });
  // cells, revealed column by column
  for (let j = 0; j < nD; j++) {
    let col = '';
    t.people.forEach((p, i) => { const [k, v] = p.d[j]; col += cell(c, gx + j * cw + cw / 2, gy + i * rh + rh / 2 + 1, k, v); });
    s += `<g style="animation:${show(css, P, `c${j}`, 5 + j * 3)}">${col}</g>`;
  }
  // legend
  const ly = gy + nR * rh + 22;
  s += `<g style="animation:${show(css, P, 'lg', 24)}">` + t.legend.map((l, i) => { const x = 80 + i * 102; return cell(c, x + 8, ly - 3, l.k, l.v) + text(c, x + (l.k === 'late' ? 30 : 20), ly, l.t, { size: 8.5, font: 'mono', fill: C.fg55 }); }).join('') + '</g>';
  // what to settle this morning (right)
  const px = 720, pw = 400, py = 150, ph = nR * rh + 26; const tr = (ph - 44) / t.todo.length;
  s += `<g style="animation:${show(css, P, 'pt', 26)}">` + rect(c, px, py, pw, ph, { stroke: C.accent, fill: TINT }) + text(c, px + 12, py + 20, t.todoTitle, { size: 10.5, fill: C.accent, weight: 500 }) + text(c, px + 12, py + 34, t.todoSub, { size: 8, font: 'mono', fill: C.fg55 }) + '</g>';
  t.todo.forEach((a, i) => { const y = py + 46 + i * tr; s += `<g style="animation:${show(css, P, `t${i}`, 28 + i * 2.5)}">` + text(c, px + 12, y + 14, a.t, { size: 10, fill: C.fg, weight: 500 }) + text(c, px + 12, y + 28, a.s, { size: 8, font: 'mono', fill: C.fg55 }) + '</g>'; });
  const ky = ly + 22;
  s += tiles(c, css, P, ky, t.tiles, 42);
  s += text(c, 80, ky + 86, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export function circuit(t, rtl) {
  const c = ctx(rtl); const P = 'pc'; const css = []; const H = 648;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const bh = 92, g = 14, y0 = 166; const cy = (i) => y0 + i * (bh + g);
  s += `<g style="animation:${show(css, P, 'lb', 3)}">` + [[80, 0], [450, 1], [820, 2]].map(([x, i]) => text(c, x, y0 - 12, t.cols[i], { size: 9, font: 'mono', fill: C.fg35, letter: 1.2, upper: true })).join('') + '</g>';
  t.sources.forEach((b, i) => {
    s += box(c, css, P, `s${i}`, 4 + i * 3, 80, cy(i), 300, bh, b, false);
    s += `<line x1="${c.X(380)}" y1="${cy(i) + bh / 2}" x2="${c.X(450)}" y2="${cy(i) + bh / 2}" stroke="${C.accent}" stroke-width="2" pathLength="1000" stroke-dasharray="1000" style="stroke-dashoffset:0;animation:${draw(css, P, `a${i}`, 5.5 + i * 3, 2)}"/>`;
  });
  s += box(c, css, P, 'mid', 15, 450, y0, 300, 3 * bh + 2 * g, t.core, true);
  t.outputs.forEach((b, i) => {
    s += `<line x1="${c.X(750)}" y1="${cy(i) + bh / 2}" x2="${c.X(820)}" y2="${cy(i) + bh / 2}" stroke="${C.fg}" stroke-width="2" pathLength="1000" stroke-dasharray="1000" style="stroke-dashoffset:0;animation:${draw(css, P, `o${i}`, 24 + i * 3, 2)}"/>`;
    s += box(c, css, P, `r${i}`, 26 + i * 3, 820, cy(i), 300, bh, b, false);
  });
  const ky = y0 + 3 * bh + 2 * g + 18;
  s += tiles(c, css, P, ky, t.tiles, 40);
  s += text(c, 80, ky + 86, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

const OK = ['ok'], OFF = ['off'], FI = ['field'], MISS = ['miss'], ABS = ['abs']; const LATE = (m) => ['late', m];
const WEEK = [
  [OK, OK, OK, OK, OK, OK],
  [OK, LATE(12), OK, OK, MISS, OK],
  [FI, FI, FI, FI, FI, OFF],
  [OK, OK, OFF, OFF, OK, OK],
  [OK, OK, OK, LATE(25), OK, OK],
  [OK, ABS, OK, OK, OK, MISS],
  [OK, OK, OK, OK, OK, OK],
  [FI, FI, FI, FI, FI, FI],
];
const people = (names) => names.map(([n, s], i) => ({ n, s, d: WEEK[i] }));
const NB = ' ';

export const STRINGS = {
  fr: {
    semaine: {
      title: 'Une semaine de présence : quarante journées sans rien à faire, cinq à traiter',
      alt: 'Grille de présence d’une semaine pour huit personnes sur six jours : à l’heure, en retard de 12 et 25 minutes, deux pointages manquants, une absence non prévue, trois jours de repos prévus, pointages par téléphone pour deux personnes de terrain. Sur 45 journées attendues, 40 n’appellent aucune action et 5 sont à traiter par le responsable : deux retards, deux sorties manquantes, une absence non prévue.',
      header: 'Exemple construit · huit personnes sur trois sites · une semaine, du samedi au jeudi · ce que le responsable voit le matin',
      days: ['sam.', 'dim.', 'lun.', 'mar.', 'mer.', 'jeu.'],
      people: people([['Amina', 'siège · terminal'], ['Karim', 'siège · terminal'], ['Sofiane', 'agence · téléphone'], ['Nadia', 'siège · terminal'], ['Rachid', 'dépôt · terminal'], ['Yacine', 'dépôt · terminal'], ['Lila', 'dépôt · terminal'], ['Mourad', 'chauffeur · téléphone']]),
      legend: [{ k: 'ok', t: 'à l’heure' }, { k: 'late', v: 12, t: 'retard' }, { k: 'miss', t: 'pointage manquant' }, { k: 'abs', t: 'absence' }, { k: 'off', t: 'repos prévu' }, { k: 'field', t: 'téléphone' }],
      todoTitle: 'À traiter ce matin', todoSub: 'cinq lignes ; le reste est déjà dans le relevé',
      todo: [
        { t: 'Karim · mercredi · sortie manquante', s: 'il propose 17:05, son responsable valide ou corrige' },
        { t: 'Yacine · jeudi · sortie manquante', s: 'la porte du dépôt l’a vu sortir à 16:58' },
        { t: 'Yacine · dimanche · absence non prévue', s: 'alerte partie à 08:30 ; motif à saisir' },
        { t: 'Rachid · mardi · retard de 25 min', s: 'au-delà de la tolérance écrite par l’entreprise' },
        { t: 'Karim · dimanche · retard de 12 min', s: 'noté ; la règle de l’entreprise décide de la suite' },
      ],
      tiles: [
        { big: '45 journées attendues', l1: '40 passent au relevé sans que personne n’y touche', l2: 'le responsable ne lit que les exceptions' },
        { big: '5 à traiter', l1: 'chaque correction porte un motif et un nom', l2: 'rien ne se modifie sans trace', hot: true },
        { big: '2 façons de pointer', l1: 'terminal à l’entrée, téléphone pour le terrain', l2: 'une seule grille, une seule règle écrite' },
      ],
      rule: 'Une pointeuse ne sert à rien si quelqu’un recopie ses lignes : elle sert quand quarante journées sur quarante-cinq',
      rule2: 'passent seules au relevé, et que les cinq autres arrivent devant le responsable avec leur question.',
      note: 'Exemple construit · noms, heures et tolérance sont ceux de l’exemple ; les règles sont celles que l’entreprise écrit.',
    },
    circuit: {
      title: 'Du doigt posé au relevé du mois : trois façons de pointer, un seul logiciel',
      alt: 'Trois sources de pointage : le terminal du siège (empreinte ou badge, 34 salariés, ouvre la porte), le terminal du dépôt (badge et empreinte, 22 salariés, garde les pointages hors réseau), le téléphone des équipes de terrain (8 salariés, position vérifiée). Au centre, le logiciel de présence : heure du terminal, rattachement au planning, doublons écartés, anomalies, correction avec motif, journal. Trois sorties : le relevé d’heures du mois exporté vers la paie, le tableau du gérant, les accès.',
      header: 'Exemple construit · 64 salariés, trois sites · chaque pointage arrive au logiciel en quelques secondes, ou au retour du réseau',
      cols: ['Où l’on pointe', 'Ce que fait le logiciel', 'Ce qui en sort'],
      sources: [
        { title: 'Terminal du siège', sub: 'empreinte ou badge, à l’entrée', rows: [{ l: 'Salariés enrôlés', v: '34' }, { l: 'Ouvre la porte', v: 'oui' }] },
        { title: 'Terminal du dépôt', sub: 'badge et empreinte, au tourniquet', rows: [{ l: 'Salariés enrôlés', v: '22' }, { l: 'Sans réseau', v: 'garde et renvoie' }] },
        { title: 'Téléphone, équipes de terrain', sub: 'commerciaux et chauffeurs, position vérifiée', rows: [{ l: 'Salariés', v: '8' }, { l: 'Sans réseau', v: 'envoi au retour' }] },
      ],
      core: { title: 'Logiciel de présence', sub: 'ce qui se passe entre le pointage et le relevé', rows: [
        { l: 'Heure retenue', v: 'celle du terminal' }, { l: 'Rattachement', v: 'au planning du jour' }, { l: 'Doublons', v: 'écartés' }, { l: 'Anomalies', v: 'oubli, retard, absence', hot: true },
        { l: 'Correction', v: 'motif et validation' }, { l: 'Règles', v: 'écrites par l’entreprise' }, { l: 'Journal', v: 'qui a changé quoi' }, { l: 'Empreinte', v: 'gabarit, pas une image' },
        { l: 'Départ d’un salarié', v: 'retiré partout' }, { l: 'Clôture du mois', v: 'relevé figé' }, { l: 'Sauvegarde', v: 'hors du terminal' }, { l: 'Accès', v: 'un compte par personne' },
      ] },
      outputs: [
        { title: 'Relevé d’heures du mois', sub: 'validé par le responsable, exporté vers la paie', rows: [{ l: 'Journées', v: I(`1${NB}408`) }, { l: 'À traiter', v: '42', hot: true }] },
        { title: 'Tableau du gérant', sub: 'présents, retards, absences, par site', rows: [{ l: 'Mise à jour', v: 'à chaque pointage' }, { l: 'Absent non prévu', v: 'alerte à 08:30' }] },
        { title: 'Accès', sub: 'qui est entré, par quelle porte, à quelle heure', rows: [{ l: 'Portes', v: '3' }, { l: 'Départ', v: 'accès retiré le jour même' }] },
      ],
      tiles: [
        { big: I(`1${NB}408 journées par mois`), l1: '64 salariés, 22 jours : plus rien n’est recopié', l2: 'avant : deux jours de ressaisie dans un tableur' },
        { big: '42 à traiter', l1: 'les anomalies seules demandent une décision', l2: '3 % dans l’exemple : oubli, retard, absence', hot: true },
        { big: '0 pointage perdu', l1: 'le terminal garde ses pointages sans réseau', l2: 'et les renvoie dans l’ordre au retour' },
      ],
      rule: 'Le terminal n’est qu’une porte d’entrée : la valeur est dans ce qui se passe après, le rattachement',
      rule2: 'au planning, les anomalies traitées avec un motif, et un relevé que la paie reprend sans le retaper.',
      note: 'Exemple construit · effectifs et volumes sont ceux de l’exemple ; les capacités exactes dépendent du modèle de terminal.',
    },
  },
  en: {
    semaine: {
      title: 'One week of attendance: forty days needing nothing, five to settle',
      alt: 'Attendance grid for one week, eight people over six days: on time, late by 12 and 25 minutes, two missing punches, one unplanned absence, three planned days off, phone punches for two field staff. Out of 45 expected days, 40 need no action and 5 are to be settled by the manager: two late arrivals, two missing clock-outs, one unplanned absence.',
      header: 'Constructed example · eight people on three sites · one week, Saturday to Thursday · what the manager sees in the morning',
      days: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu'],
      people: people([['Amina', 'head office · terminal'], ['Karim', 'head office · terminal'], ['Sofiane', 'branch · phone'], ['Nadia', 'head office · terminal'], ['Rachid', 'warehouse · terminal'], ['Yacine', 'warehouse · terminal'], ['Lila', 'warehouse · terminal'], ['Mourad', 'driver · phone']]),
      legend: [{ k: 'ok', t: 'on time' }, { k: 'late', v: 12, t: 'late' }, { k: 'miss', t: 'missing punch' }, { k: 'abs', t: 'absent' }, { k: 'off', t: 'planned off' }, { k: 'field', t: 'phone' }],
      todoTitle: 'To settle this morning', todoSub: 'five lines; the rest is already in the timesheet',
      todo: [
        { t: 'Karim · Wednesday · missing clock-out', s: 'he proposes 17:05, his manager approves or corrects' },
        { t: 'Yacine · Thursday · missing clock-out', s: 'the warehouse door saw him leave at 16:58' },
        { t: 'Yacine · Sunday · unplanned absence', s: 'alert sent at 08:30; reason to be entered' },
        { t: 'Rachid · Tuesday · 25 min late', s: 'beyond the tolerance the company wrote down' },
        { t: 'Karim · Sunday · 12 min late', s: 'recorded; the company’s rule decides what follows' },
      ],
      tiles: [
        { big: '45 expected days', l1: '40 go to the timesheet without anyone touching them', l2: 'the manager reads only the exceptions' },
        { big: '5 to settle', l1: 'each correction carries a reason and a name', l2: 'nothing is changed without a trace', hot: true },
        { big: '2 ways to clock in', l1: 'terminal at the door, phone for the field', l2: 'one grid, one written rule' },
      ],
      rule: 'A time clock is useless if someone retypes its lines: it works when forty days out of forty-five',
      rule2: 'go to the timesheet by themselves, and the other five reach the manager with their question.',
      note: 'Constructed example · names, times and tolerance belong to the example; the rules are those the company writes.',
    },
    circuit: {
      title: 'From the finger on the reader to the month’s timesheet: three ways to clock in, one software',
      alt: 'Three clock-in sources: the head-office terminal (fingerprint or badge, 34 employees, opens the door), the warehouse terminal (badge and fingerprint, 22 employees, keeps punches when offline), the phone for field teams (8 employees, position checked). In the middle, the attendance software: terminal time, matching to the schedule, duplicates removed, anomalies, correction with a reason, log. Three outputs: the monthly timesheet exported to payroll, the manager’s board, access.',
      header: 'Constructed example · 64 employees, three sites · each punch reaches the software within seconds, or when the network returns',
      cols: ['Where people clock in', 'What the software does', 'What comes out'],
      sources: [
        { title: 'Head-office terminal', sub: 'fingerprint or badge, at the entrance', rows: [{ l: 'Employees enrolled', v: '34' }, { l: 'Opens the door', v: 'yes' }] },
        { title: 'Warehouse terminal', sub: 'badge and fingerprint, at the turnstile', rows: [{ l: 'Employees enrolled', v: '22' }, { l: 'Offline', v: 'keeps and resends' }] },
        { title: 'Phone, field teams', sub: 'salespeople and drivers, position checked', rows: [{ l: 'Employees', v: '8' }, { l: 'Offline', v: 'sent on return' }] },
      ],
      core: { title: 'Attendance software', sub: 'what happens between the punch and the timesheet', rows: [
        { l: 'Time kept', v: 'the terminal’s' }, { l: 'Matching', v: 'to the day’s schedule' }, { l: 'Duplicates', v: 'removed' }, { l: 'Anomalies', v: 'forgotten, late, absent', hot: true },
        { l: 'Correction', v: 'reason and approval' }, { l: 'Rules', v: 'written by the company' }, { l: 'Log', v: 'who changed what' }, { l: 'Fingerprint', v: 'a template, not an image' },
        { l: 'Employee leaves', v: 'removed everywhere' }, { l: 'Month end', v: 'timesheet frozen' }, { l: 'Backup', v: 'outside the terminal' }, { l: 'Access', v: 'one account per person' },
      ] },
      outputs: [
        { title: 'Monthly timesheet', sub: 'approved by the manager, exported to payroll', rows: [{ l: 'Days', v: '1,408' }, { l: 'To settle', v: '42', hot: true }] },
        { title: 'Manager’s board', sub: 'present, late, absent, per site', rows: [{ l: 'Updated', v: 'at every punch' }, { l: 'Unplanned absence', v: 'alert at 08:30' }] },
        { title: 'Access', sub: 'who came in, through which door, at what time', rows: [{ l: 'Doors', v: '3' }, { l: 'Leaver', v: 'access removed the same day' }] },
      ],
      tiles: [
        { big: '1,408 days a month', l1: '64 employees, 22 days: nothing is retyped any more', l2: 'before: two days of retyping into a spreadsheet' },
        { big: '42 to settle', l1: 'only the anomalies call for a decision', l2: '3 % in the example: forgotten, late, absent', hot: true },
        { big: '0 punches lost', l1: 'the terminal keeps its punches when offline', l2: 'and sends them back in order on return' },
      ],
      rule: 'The terminal is only a way in: the value is in what happens next, matching to the schedule,',
      rule2: 'anomalies settled with a reason, and a timesheet payroll takes over without retyping it.',
      note: 'Constructed example · headcounts and volumes belong to the example; exact capacities depend on the terminal model.',
    },
  },
  ar: {
    semaine: {
      title: 'أسبوع من الحضور: أربعون يوماً لا تحتاج شيئاً، وخمسة تُعالَج',
      alt: 'شبكة حضور أسبوع لثمانية أشخاص على ستة أيام: في الوقت، تأخر 12 و25 دقيقة، بصمتان ناقصتان، غياب غير مبرمج، ثلاثة أيام راحة مبرمجة، وبصمات بالهاتف لشخصين ميدانيين. من 45 يوماً منتظراً، 40 لا تحتاج أي إجراء و5 يعالجها المسؤول: تأخران، خروجان ناقصان، وغياب غير مبرمج.',
      header: 'مثال مركَّب · ثمانية أشخاص على ثلاثة مواقع · أسبوع من السبت إلى الخميس · ما يراه المسؤول في الصباح',
      days: ['السبت', 'الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس'],
      people: people([['أمينة', 'المقر · الجهاز'], ['كريم', 'المقر · الجهاز'], ['سفيان', 'الوكالة · الهاتف'], ['نادية', 'المقر · الجهاز'], ['رشيد', 'المستودع · الجهاز'], ['ياسين', 'المستودع · الجهاز'], ['ليلى', 'المستودع · الجهاز'], ['مراد', 'سائق · الهاتف']]),
      legend: [{ k: 'ok', t: 'في الوقت' }, { k: 'late', v: 12, t: 'تأخر' }, { k: 'miss', t: 'بصمة ناقصة' }, { k: 'abs', t: 'غياب' }, { k: 'off', t: 'راحة مبرمجة' }, { k: 'field', t: 'الهاتف' }],
      todoTitle: 'يُعالَج هذا الصباح', todoSub: 'خمسة سطور؛ والباقي في الكشف مسبقاً',
      todo: [
        { t: 'كريم · الأربعاء · خروج ناقص', s: `يقترح ${I('17:05')}، ومسؤوله يصادق أو يصحّح` },
        { t: 'ياسين · الخميس · خروج ناقص', s: `باب المستودع رآه يخرج عند ${I('16:58')}` },
        { t: 'ياسين · الأحد · غياب غير مبرمج', s: `تنبيه انطلق عند ${I('08:30')}؛ والسبب يُدخَل` },
        { t: 'رشيد · الثلاثاء · تأخر 25 دقيقة', s: 'فوق التسامح الذي كتبته المؤسسة' },
        { t: 'كريم · الأحد · تأخر 12 دقيقة', s: 'مسجَّل؛ وقاعدة المؤسسة تقرر ما يتبع' },
      ],
      tiles: [
        { big: '45 يوماً منتظراً', l1: '40 تدخل الكشف دون أن يلمسها أحد', l2: 'المسؤول لا يقرأ إلا الاستثناءات' },
        { big: '5 تُعالَج', l1: 'كل تصحيح يحمل سبباً واسماً', l2: 'لا شيء يُغيَّر دون أثر', hot: true },
        { big: 'طريقتان للبصم', l1: 'جهاز عند المدخل، وهاتف للميدان', l2: 'شبكة واحدة وقاعدة مكتوبة واحدة' },
      ],
      rule: 'جهاز البصمة لا ينفع إذا كان أحد ينقل سطوره: ينفع حين تدخل أربعون يوماً من خمسة وأربعين',
      rule2: 'الكشف وحدها، وتصل الخمسة الأخرى إلى المسؤول ومعها سؤالها.',
      note: 'مثال مركَّب · الأسماء والأوقات والتسامح خاصة بالمثال؛ والقواعد هي التي تكتبها المؤسسة.',
    },
    circuit: {
      title: 'من الإصبع على الجهاز إلى كشف الشهر: ثلاث طرق للبصم وبرنامج واحد',
      alt: 'ثلاثة مصادر للبصمات: جهاز المقر (بصمة أو بطاقة، 34 عاملاً، يفتح الباب)، جهاز المستودع (بطاقة وبصمة، 22 عاملاً، يحفظ البصمات دون شبكة)، وهاتف الفرق الميدانية (8 عمال، الموقع متحقَّق منه). في الوسط برنامج الحضور: وقت الجهاز، الربط بالبرنامج الزمني، حذف المكرَّر، الحالات الشاذة، التصحيح بسبب، السجل. ثلاثة مخرجات: كشف ساعات الشهر المصدَّر إلى الأجور، لوحة المسيّر، والدخول.',
      header: 'مثال مركَّب · 64 عاملاً، ثلاثة مواقع · كل بصمة تصل البرنامج في ثوانٍ، أو عند عودة الشبكة',
      cols: ['أين يُبصَم', 'ما يفعله البرنامج', 'ما يخرج منه'],
      sources: [
        { title: 'جهاز المقر', sub: 'بصمة أو بطاقة، عند المدخل', rows: [{ l: 'العمال المسجَّلون', v: '34' }, { l: 'يفتح الباب', v: 'نعم' }] },
        { title: 'جهاز المستودع', sub: 'بطاقة وبصمة، عند البوابة الدوّارة', rows: [{ l: 'العمال المسجَّلون', v: '22' }, { l: 'دون شبكة', v: 'يحفظ ويعيد الإرسال' }] },
        { title: 'الهاتف، الفرق الميدانية', sub: 'بائعون وسائقون، والموقع متحقَّق منه', rows: [{ l: 'العمال', v: '8' }, { l: 'دون شبكة', v: 'إرسال عند العودة' }] },
      ],
      core: { title: 'برنامج الحضور', sub: 'ما يحدث بين البصمة والكشف', rows: [
        { l: 'الوقت المعتمد', v: 'وقت الجهاز' }, { l: 'الربط', v: 'بالبرنامج الزمني لليوم' }, { l: 'المكرَّر', v: 'يُحذف' }, { l: 'الحالات الشاذة', v: 'نسيان، تأخر، غياب', hot: true },
        { l: 'التصحيح', v: 'سبب ومصادقة' }, { l: 'القواعد', v: 'تكتبها المؤسسة' }, { l: 'السجل', v: 'من غيّر ماذا' }, { l: 'البصمة', v: 'قالب لا صورة' },
        { l: 'مغادرة عامل', v: 'يُحذف من كل مكان' }, { l: 'إقفال الشهر', v: 'كشف مجمَّد' }, { l: 'النسخ الاحتياطي', v: 'خارج الجهاز' }, { l: 'الدخول', v: 'حساب لكل شخص' },
      ] },
      outputs: [
        { title: 'كشف ساعات الشهر', sub: 'يصادق عليه المسؤول ويُصدَّر إلى الأجور', rows: [{ l: 'الأيام', v: I(`1${NB}408`) }, { l: 'تُعالَج', v: '42', hot: true }] },
        { title: 'لوحة المسيّر', sub: 'الحاضرون والمتأخرون والغائبون، لكل موقع', rows: [{ l: 'التحديث', v: 'مع كل بصمة' }, { l: 'غائب غير مبرمج', v: `تنبيه عند ${I('08:30')}` }] },
        { title: 'الدخول', sub: 'من دخل، من أي باب، وفي أي ساعة', rows: [{ l: 'الأبواب', v: '3' }, { l: 'المغادرة', v: 'يُسحب الدخول في اليوم نفسه' }] },
      ],
      tiles: [
        { big: `${I(`1${NB}408`)} يوماً في الشهر`, l1: '64 عاملاً و22 يوماً: لا شيء يُنقل يدوياً', l2: 'من قبل: يومان من إعادة الإدخال في جدول' },
        { big: '42 تُعالَج', l1: 'الحالات الشاذة وحدها تحتاج قراراً', l2: `${I('3 %')} في المثال: نسيان، تأخر، غياب`, hot: true },
        { big: 'لا بصمة ضائعة', l1: 'الجهاز يحفظ بصماته دون شبكة', l2: 'ويعيد إرسالها بالترتيب عند العودة' },
      ],
      rule: 'الجهاز مجرد مدخل: القيمة في ما يحدث بعده، الربط بالبرنامج الزمني،',
      rule2: 'ومعالجة الحالات الشاذة بسبب، وكشف تأخذه مصلحة الأجور دون إعادة كتابته.',
      note: 'مثال مركَّب · الأعداد والأحجام خاصة بالمثال؛ والقدرات الدقيقة تتوقف على طراز الجهاز.',
    },
  },
};
