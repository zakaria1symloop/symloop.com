// Bespoke animated figures for the 2027 "the night report never left" post.
//  attempts(): one background task from the queue to success or to the
//              failure queue: the lock with its lease, the first failure, the
//              retries spaced by capped exponential backoff with jitter, the
//              idempotency check, and the branch to the failure queue with an
//              alert after the last attempt.
//  night():    one server's night: scheduled jobs on two worker lanes along a
//              22:00 → 07:00 axis, a job waiting for the lock held by the
//              backup, a job missed by a restart and caught up, and the
//              Monday report leaving at 07:00.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function grow(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
const I = (x) => `⁦${x}⁩`;

export function attempts(t, rtl) {
  const c = ctx(rtl); const P = 'at'; const css = []; const H = 600;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  // state boxes row
  const sy = 104; const boxes = t.states; const bw = 150, bh = 56; const gap = (1040 - bw * boxes.length) / (boxes.length - 1);
  boxes.forEach((b, i) => {
    const x = 80 + i * (bw + gap); const at = 3 + i * 5;
    s += `<g style="animation:${show(css, P, `s${i}`, at)}">` + rect(c, x, sy, bw, bh, { stroke: b.hot ? C.accent : b.bad ? C.fg55 : C.line2, fill: b.hot ? 'rgba(242,181,68,0.06)' : C.fill, dash: b.bad ? '4 3' : '' }) + text(c, x + 10, sy + 22, b.name, { size: 12, fill: b.hot ? C.accent : C.fg }) + text(c, x + 10, sy + 40, b.sub, { size: 9.5, font: 'mono', fill: C.fg55 }) + '</g>';
    if (i < boxes.length - 1) s += line(c, x + bw, sy + bh / 2, x + bw + gap, sy + bh / 2, { stroke: C.line2 });
  });
  // attempts timeline (log scale-ish: positions given)
  const ay = 250; const ax0 = 80, ax1 = 1120;
  s += text(c, 80, 200, t.axisLabel, { size: 10, font: 'mono', fill: C.fg35, letter: 1.5, upper: true });
  s += line(c, ax0, ay, ax1, ay, { stroke: C.line2 });
  t.attempts.forEach((a, i) => {
    const x = ax0 + a.pos * (ax1 - ax0); const at = 22 + i * 8; const ok = a.kind === 'ok'; const bad = a.kind === 'fail';
    // jitter window
    if (a.jitter) s += `<g style="animation:${show(css, P, `j${i}`, at)}">` + rect(c, x - a.jitter * (ax1 - ax0), ay - 5, 2 * a.jitter * (ax1 - ax0), 10, { fill: 'rgba(242,181,68,0.14)', stroke: 'none' }) + '</g>';
    s += `<g style="animation:${show(css, P, `a${i}`, at)}">` + circle(c, x, ay, 8, { fill: ok ? C.accent : bad ? 'rgba(255,255,255,0.08)' : '#000', stroke: ok ? C.accent : bad ? C.fg55 : C.fg, sw: 1.5 }) + text(c, x, ay + 4, ok ? '✓' : bad ? '✕' : '', { size: 10, fill: ok ? '#000' : C.fg70, anchor: 'middle', weight: 600 }) + text(c, x, ay - 18, a.label, { size: 11, fill: ok ? C.accent : C.fg, anchor: 'middle' }) + text(c, x, ay + 26, a.when, { size: 9.5, font: 'mono', fill: C.fg55, anchor: 'middle' }) + text(c, x, ay + 40, a.why, { size: 9, font: 'mono', fill: bad ? C.fg70 : C.fg35, anchor: 'middle' }) + '</g>';
  });
  // ladder: attempt / delay / outcome
  const ly = 320; const cols = [80, 260, 520, 800];
  s += text(c, 80, ly, t.ladderLabel, { size: 10, font: 'mono', fill: C.fg35, letter: 1.5, upper: true });
  t.ladderCols.forEach((h, i) => { s += text(c, cols[i], ly + 20, h, { size: 10, font: 'mono', fill: C.fg35 }); });
  s += line(c, 80, ly + 28, 1120, ly + 28, { stroke: C.line2 });
  t.ladder.forEach((r, i) => {
    const y = ly + 48 + i * 24; const at = 24 + i * 8; const last = r.dead;
    s += `<g style="animation:${show(css, P, `l${i}`, at)}">` + line(c, 80, y + 8, 1120, y + 8, { stroke: C.line }) + r.cells.map((cell, k) => text(c, cols[k], y, cell, { size: 10.5, font: 'mono', fill: last ? C.accent : k === 3 && r.ok ? C.accent : C.fg70 })).join('') + '</g>';
  });
  // two side notes
  const ny = 488;
  s += `<g style="animation:${show(css, P, 'n1', 66)}">` + rect(c, 80, ny, 510, 46, { stroke: C.accent, fill: 'rgba(242,181,68,0.05)' }) + text(c, 96, ny + 19, t.idemTitle, { size: 12, fill: C.fg }) + text(c, 96, ny + 36, t.idemBody, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'n2', 70)}">` + rect(c, 610, ny, 510, 46, { stroke: C.fg55, fill: C.fill, dash: '4 3' }) + text(c, 626, ny + 19, t.deadTitle, { size: 12, fill: C.fg }) + text(c, 626, ny + 36, t.deadBody, { size: 10, font: 'mono', fill: C.fg70 }) + '</g>';
  s += text(c, 80, 560, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, 580, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

export function night(t, rtl) {
  const c = ctx(rtl); const P = 'nt'; const css = []; const H = 470;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  const x0 = 200, x1 = 1120, top = 108; const hours = 9; // 22:00 → 07:00
  const X = (h) => x0 + ((h - 22 + 24) % 24) / hours * (x1 - x0);
  // axis
  t.ticks.forEach((tk) => { const x = X(tk.h); s += line(c, x, top - 6, x, top + 8 + t.lanes.length * 92, { stroke: C.line, dash: '2 4' }) + text(c, x, top - 12, tk.label, { size: 10, font: 'mono', fill: C.fg35, anchor: 'middle' }); });
  t.lanes.forEach((lane, li) => {
    const ly = top + 10 + li * 92;
    s += text(c, 80, ly + 14, lane.name, { size: 12, fill: C.fg }) + text(c, 80, ly + 30, lane.sub, { size: 9.5, font: 'mono', fill: C.fg55 });
    s += line(c, x0, ly + 70, x1, ly + 70, { stroke: C.line });
    lane.jobs.forEach((j, k) => {
      const xa = X(j.from), xb = X(j.to); const w = Math.max(6, xb - xa); const at = 4 + (j.from - 22 + 24) % 24 * 6; const kind = j.kind || 'ok';
      const fill = kind === 'wait' ? 'rgba(255,255,255,0.04)' : kind === 'missed' ? 'rgba(255,255,255,0.06)' : kind === 'hot' ? 'rgba(242,181,68,0.22)' : 'rgba(255,255,255,0.14)';
      const stroke = kind === 'wait' ? C.fg55 : kind === 'missed' ? C.fg55 : kind === 'hot' ? C.accent : C.line2;
      s += `<rect x="${c.RX(xa, w)}" y="${ly + 40}" width="${w.toFixed(1)}" height="22" fill="${fill}" stroke="${stroke}" stroke-width="1"${kind === 'wait' || kind === 'missed' ? ' stroke-dasharray="3 3"' : ''} style="transform-box:fill-box;transform-origin:${c.rtl ? 'right' : 'left'} center;animation:${grow(css, P, `b${li}${k}`, at, 3)}"/>`;
      s += `<g style="animation:${show(css, P, `t${li}${k}`, at + 2)}">` + text(c, j.right ? xb : xa + (j.labelBelow ? 0 : 4), j.labelBelow ? ly + 84 : (j.right ? ly + 36 : ly + 55), j.name, { size: 10, font: 'mono', fill: kind === 'hot' ? C.accent : kind === 'wait' || kind === 'missed' ? C.fg70 : C.fg, anchor: j.right ? 'end' : 'start' }) + (j.note ? text(c, xa, j.labelBelow ? ly + 96 : ly + 36, j.note, { size: 8.5, font: 'mono', fill: kind === 'hot' ? C.accent : C.fg55 }) : '') + '</g>';
    });
  });
  // bottom: events
  const ey = top + 10 + t.lanes.length * 92 + 24;
  t.events.forEach((e, i) => { s += `<g style="animation:${show(css, P, `e${i}`, 58 + i * 5)}">` + rect(c, 80 + i * 350, ey, 330, 52, { stroke: e.hot ? C.accent : C.line2, fill: e.hot ? 'rgba(242,181,68,0.06)' : C.fill, dash: e.dash ? '4 3' : '' }) + text(c, 92 + i * 350, ey + 20, e.title, { size: 11.5, fill: e.hot ? C.accent : C.fg }) + text(c, 92 + i * 350, ey + 38, e.body, { size: 9.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  s += text(c, 80, 428, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, 448, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"],svg rect[style*="${P}-"]{animation:none !important;transform:none}}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    attempts: {
      title: 'Une tâche en arrière-plan, de la file à la réussite ou à la file des échecs',
      alt: 'En haut, cinq états : en file, verrouillée par un exécutant avec un bail de cinq minutes, en cours, en reprise, puis réussie ou en file des échecs. Au milieu, une ligne de temps des tentatives : première tentative à zéro seconde, échec, fournisseur SMS indisponible ; deuxième à trente secondes plus ou moins dix, échec ; troisième à deux minutes plus ou moins trente secondes, échec ; quatrième à huit minutes plus ou moins deux, réussite. Chaque attente est doublée et tirée au hasard dans une fenêtre, le délai plafonné à trente minutes. Un tableau donne pour chaque tentative le délai et le résultat, et une dernière ligne dit ce qui se serait passé à la cinquième tentative : file des échecs et alerte. Deux encadrés : la clé d’idempotence, qui fait qu’un message déjà envoyé n’est pas renvoyé, et la file des échecs, lue par un humain chaque matin. Les durées sont un exemple construit.',
      states: [
        { name: 'En file', sub: 'priorité · échéance · clé' },
        { name: 'Verrouillée', sub: 'bail 5 min · un seul exécutant', hot: true },
        { name: 'En cours', sub: 'durée max 10 min' },
        { name: 'En reprise', sub: 'attente doublée + hasard', hot: true },
        { name: 'Réussie · ou échecs', sub: 'journalisée · ou alerte', bad: false },
      ],
      axisLabel: 'Tentatives d’une tâche « envoyer 1 200 rappels WhatsApp »',
      attempts: [
        { pos: 0.04, label: 'Tentative 1', when: '0 s', why: 'fournisseur 503', kind: 'fail' },
        { pos: 0.22, label: 'Tentative 2', when: '+30 s ± 10 s', why: 'fournisseur 503', kind: 'fail', jitter: 0.03 },
        { pos: 0.46, label: 'Tentative 3', when: '+2 min ± 30 s', why: 'délai dépassé', kind: 'fail', jitter: 0.05 },
        { pos: 0.76, label: 'Tentative 4', when: '+8 min ± 2 min', why: '1 200 envoyés', kind: 'ok', jitter: 0.07 },
        { pos: 0.96, label: 'Plafond', when: '30 min max', why: 'puis file des échecs', kind: 'cap' },
      ],
      ladderLabel: 'Barème de reprise · écrit la première semaine',
      ladderCols: ['tentative', 'attente avant', 'résultat', 'et ensuite'],
      ladder: [
        { cells: ['1', '0 s', 'échec · fournisseur indisponible', 'reprise programmée'] },
        { cells: ['2', '30 s ± 10 s', 'échec · fournisseur indisponible', 'reprise programmée'] },
        { cells: ['3', '2 min ± 30 s', 'échec · délai dépassé', 'reprise programmée'] },
        { cells: ['4', '8 min ± 2 min', 'réussite · 1 200 envoyés, 0 doublon', 'journal · tâche close'], ok: true },
        { cells: ['5 (non atteinte)', '30 min · plafond', 'dernier échec', 'file des échecs · alerte au responsable'], dead: true },
      ],
      idemTitle: 'Clé d’idempotence · rappel + rendez-vous + date', idemBody: 'à la tentative 4, les 380 messages partis à la tentative 1 ne repartent pas : déjà fait → ignoré',
      deadTitle: 'File des échecs · lue chaque matin par un humain', deadBody: 'cause, charge, nombre de tentatives ; relance manuelle ou correction ; jamais supprimée en silence',
      rule: 'Une tâche qui échoue n’est ni perdue ni rejouée à l’infini : elle réessaie à des intervalles qui doublent, tirés au hasard pour ne pas repartir tous ensemble, plafonnés, et finit dans une file qu’un humain lit.',
      note: 'durées et quantités : exemple construit · attente exponentielle plafonnée avec hasard : recommandation publiée par l’équipe architecture d’AWS',
    },
    night: {
      title: 'La nuit d’un serveur : ce qui tourne entre 22 h et 7 h, sur deux exécutants',
      alt: 'Un axe de 22 h à 7 h et deux couloirs, exécutant A et exécutant B. Exécutant A : sauvegarde de la base de 22 h à 22 h 12, recalcul des stocks de 22 h 12 à 22 h 20, export comptable par lots de minuit à 0 h 20, préparation du rapport du lundi de 2 h à 2 h 06 manquée par le redémarrage du serveur à 2 h 04 puis reprise à 2 h 15, rappels de rendez-vous du jour de 6 h 30 à 6 h 50 par lots de cent à un message par seconde, rapport envoyé au gérant à 7 h. Exécutant B : relances de paiement de 23 h 30 à 23 h 33, recalcul des créneaux de 5 h 30 à 5 h 36, et un nettoyage des fichiers temporaires prévu à 22 h 05 qui attend la fin de la sauvegarde parce que le verrou est pris. Trois encadrés : la tâche manquée est reprise par la rattrapeuse du démarrage, le verrou empêche deux exécutions, les envois sont lissés pour respecter le débit du fournisseur. Les horaires sont un exemple construit.',
      ticks: [{ h: 22, label: '22:00' }, { h: 23, label: '23:00' }, { h: 0, label: '00:00' }, { h: 1, label: '01:00' }, { h: 2, label: '02:00' }, { h: 3, label: '03:00' }, { h: 4, label: '04:00' }, { h: 5, label: '05:00' }, { h: 6, label: '06:00' }, { h: 7, label: '07:00' }],
      lanes: [
        { name: 'Exécutant A', sub: 'tâches lourdes · un à la fois', jobs: [
          { from: 22, to: 22.2, name: 'sauvegarde base', note: 'verrou « base »' },
          { from: 22.2, to: 22.33, name: 'recalcul stocks', labelBelow: true },
          { from: 24, to: 24.33, name: 'export comptable · lots', note: '20 min · 9 lots' },
          { from: 26, to: 26.07, name: 'rapport lundi · manqué', note: 'redémarrage 02:04', kind: 'missed', labelBelow: true },
          { from: 26.25, to: 26.35, name: 'rapport lundi · repris', note: 'rattrapeuse 02:15', kind: 'hot' },
          { from: 30.5, to: 30.83, name: 'rappels RDV du jour', note: '1 200 · lots de 100 · 1/s', kind: 'hot', labelBelow: true },
          { from: 31, to: 31.05, name: 'rapport envoyé 07:00', kind: 'hot', right: true },
        ] },
        { name: 'Exécutant B', sub: 'tâches courtes · en parallèle', jobs: [
          { from: 22.08, to: 22.2, name: 'nettoyage · attend', note: 'verrou « base » pris', kind: 'wait' },
          { from: 22.2, to: 22.25, name: 'nettoyage', labelBelow: true },
          { from: 23.5, to: 23.55, name: 'relances paiement', note: '46 messages' },
          { from: 29.5, to: 29.6, name: 'recalcul créneaux', note: 'semaine suivante', labelBelow: true },
        ] },
      ],
      events: [
        { title: 'Manquée, puis reprise', body: 'serveur redémarré 02:04 → rattrapeuse au démarrage → 02:15', hot: true },
        { title: 'Un verrou, une exécution', body: 'le nettoyage attend la fin de la sauvegarde ; jamais deux fois en même temps', dash: true },
        { title: 'Envois lissés', body: '1 200 rappels en lots de 100, 1 message par seconde, selon le débit du fournisseur' },
      ],
      rule: 'Une tâche planifiée a une heure, mais aussi une rattrapeuse si le serveur était éteint, un verrou pour ne pas tourner deux fois, un débit pour ne pas se faire couper, et un journal qui dit à 7 h ce qui a tourné.',
      note: 'horaires et durées : exemple construit · les débits d’envoi dépendent du fournisseur de messages',
    },
  },
  en: {
    attempts: {
      title: 'A background task, from the queue to success or to the failure queue',
      alt: 'At the top, five states: queued, locked by a worker with a five-minute lease, running, retrying, then succeeded or in the failure queue. In the middle, a timeline of attempts: first attempt at zero seconds, failure, SMS provider unavailable; second at thirty seconds plus or minus ten, failure; third at two minutes plus or minus thirty seconds, failure; fourth at eight minutes plus or minus two, success. Every wait is doubled and drawn at random within a window, the delay capped at thirty minutes. A table gives for each attempt the delay and the outcome, and a last row says what would have happened at the fifth attempt: failure queue and alert. Two boxes: the idempotency key, which means a message already sent is not resent, and the failure queue, read by a human every morning. Durations are a constructed example.',
      states: [
        { name: 'Queued', sub: 'priority · due time · key' },
        { name: 'Locked', sub: '5-min lease · one worker only', hot: true },
        { name: 'Running', sub: 'max duration 10 min' },
        { name: 'Retrying', sub: 'wait doubled + random', hot: true },
        { name: 'Succeeded · or failed', sub: 'logged · or alert', bad: false },
      ],
      axisLabel: 'Attempts of a task “send 1,200 WhatsApp reminders”',
      attempts: [
        { pos: 0.04, label: 'Attempt 1', when: '0 s', why: 'provider 503', kind: 'fail' },
        { pos: 0.22, label: 'Attempt 2', when: '+30 s ± 10 s', why: 'provider 503', kind: 'fail', jitter: 0.03 },
        { pos: 0.46, label: 'Attempt 3', when: '+2 min ± 30 s', why: 'timeout', kind: 'fail', jitter: 0.05 },
        { pos: 0.76, label: 'Attempt 4', when: '+8 min ± 2 min', why: '1,200 sent', kind: 'ok', jitter: 0.07 },
        { pos: 0.96, label: 'Cap', when: '30 min max', why: 'then failure queue', kind: 'cap' },
      ],
      ladderLabel: 'Retry schedule · written in the first week',
      ladderCols: ['attempt', 'wait before', 'outcome', 'and then'],
      ladder: [
        { cells: ['1', '0 s', 'failure · provider unavailable', 'retry scheduled'] },
        { cells: ['2', '30 s ± 10 s', 'failure · provider unavailable', 'retry scheduled'] },
        { cells: ['3', '2 min ± 30 s', 'failure · timeout', 'retry scheduled'] },
        { cells: ['4', '8 min ± 2 min', 'success · 1,200 sent, 0 duplicates', 'log · task closed'], ok: true },
        { cells: ['5 (not reached)', '30 min · cap', 'last failure', 'failure queue · alert to the manager'], dead: true },
      ],
      idemTitle: 'Idempotency key · reminder + appointment + date', idemBody: 'at attempt 4, the 380 messages sent at attempt 1 do not leave again: already done → skipped',
      deadTitle: 'Failure queue · read every morning by a human', deadBody: 'cause, payload, number of attempts; manual retry or fix; never deleted silently',
      rule: 'A failing task is neither lost nor replayed forever: it retries at intervals that double, drawn at random so retries do not all restart together, capped, and ends in a queue a human reads.',
      note: 'durations and quantities: constructed example · capped exponential backoff with jitter: recommendation published by the AWS architecture team',
    },
    night: {
      title: 'A server’s night: what runs between 22:00 and 07:00, on two workers',
      alt: 'An axis from 22:00 to 07:00 and two lanes, worker A and worker B. Worker A: database backup from 22:00 to 22:12, stock recompute from 22:12 to 22:20, accounting export in batches from midnight to 00:20, Monday report preparation from 02:00 to 02:06 missed by the server restart at 02:04 then caught up at 02:15, same-day appointment reminders from 06:30 to 06:50 in batches of one hundred at one message per second, report sent to the manager at 07:00. Worker B: payment reminders from 23:30 to 23:33, slot recompute from 05:30 to 05:36, and a temporary-file cleanup due at 22:05 that waits for the backup to finish because the lock is held. Three boxes: the missed task is caught up by the start-up catch-up, the lock prevents two runs, sends are smoothed to respect the provider’s rate. Times are a constructed example.',
      ticks: [{ h: 22, label: '22:00' }, { h: 23, label: '23:00' }, { h: 0, label: '00:00' }, { h: 1, label: '01:00' }, { h: 2, label: '02:00' }, { h: 3, label: '03:00' }, { h: 4, label: '04:00' }, { h: 5, label: '05:00' }, { h: 6, label: '06:00' }, { h: 7, label: '07:00' }],
      lanes: [
        { name: 'Worker A', sub: 'heavy tasks · one at a time', jobs: [
          { from: 22, to: 22.2, name: 'database backup', note: 'lock “database”' },
          { from: 22.2, to: 22.33, name: 'stock recompute', labelBelow: true },
          { from: 24, to: 24.33, name: 'accounting export · batches', note: '20 min · 9 batches' },
          { from: 26, to: 26.07, name: 'Monday report · missed', note: 'restart 02:04', kind: 'missed', labelBelow: true },
          { from: 26.25, to: 26.35, name: 'Monday report · caught up', note: 'catch-up 02:15', kind: 'hot' },
          { from: 30.5, to: 30.83, name: 'today’s appointment reminders', note: '1,200 · batches of 100 · 1/s', kind: 'hot', labelBelow: true },
          { from: 31, to: 31.05, name: 'report sent 07:00', kind: 'hot', right: true },
        ] },
        { name: 'Worker B', sub: 'short tasks · in parallel', jobs: [
          { from: 22.08, to: 22.2, name: 'cleanup · waiting', note: 'lock “database” held', kind: 'wait' },
          { from: 22.2, to: 22.25, name: 'cleanup', labelBelow: true },
          { from: 23.5, to: 23.55, name: 'payment reminders', note: '46 messages' },
          { from: 29.5, to: 29.6, name: 'slot recompute', note: 'next week', labelBelow: true },
        ] },
      ],
      events: [
        { title: 'Missed, then caught up', body: 'server restarted 02:04 → start-up catch-up → 02:15', hot: true },
        { title: 'One lock, one run', body: 'the cleanup waits for the backup to finish; never twice at the same time', dash: true },
        { title: 'Smoothed sends', body: '1,200 reminders in batches of 100, 1 message per second, per the provider’s rate' },
      ],
      rule: 'A scheduled task has a time, but also a catch-up if the server was off, a lock so it does not run twice, a rate so it does not get cut off, and a log that says at 07:00 what ran.',
      note: 'times and durations: constructed example · send rates depend on the messaging provider',
    },
  },
  ar: {
    attempts: {
      title: 'مهمة في الخلفية، من الطابور إلى النجاح أو إلى طابور الإخفاقات',
      alt: 'في الأعلى خمس حالات: في الطابور، مقفولة بمنفّذ بعقد خمس دقائق، جارية، في إعادة محاولة، ثم ناجحة أو في طابور الإخفاقات. في الوسط خط زمني للمحاولات: الأولى عند صفر ثانية، إخفاق، مزوّد SMS غير متاح؛ الثانية عند ثلاثين ثانية زائد أو ناقص عشر، إخفاق؛ الثالثة عند دقيقتين زائد أو ناقص ثلاثين ثانية، إخفاق؛ الرابعة عند ثماني دقائق زائد أو ناقص دقيقتين، نجاح. كل انتظار يُضاعَف ويُسحب عشوائياً في نافذة، والمهلة مسقوفة بثلاثين دقيقة. جدول يعطي لكل محاولة المهلة والنتيجة، وسطر أخير يقول ما كان سيحدث في المحاولة الخامسة: طابور الإخفاقات وتنبيه. إطاران: مفتاح عدم التكرار الذي يجعل رسالة أُرسلت لا تُعاد، وطابور الإخفاقات الذي يقرؤه إنسان كل صباح. والمدد مثال مبني.',
      states: [
        { name: 'في الطابور', sub: 'أولوية · استحقاق · مفتاح' },
        { name: 'مقفولة', sub: 'عقد 5 د · منفّذ واحد فقط', hot: true },
        { name: 'جارية', sub: 'مدة قصوى 10 د' },
        { name: 'إعادة محاولة', sub: 'انتظار مضاعَف + عشوائي', hot: true },
        { name: 'ناجحة · أو إخفاق', sub: 'مسجَّلة · أو تنبيه', bad: false },
      ],
      axisLabel: `محاولات مهمة «إرسال ${I('1,200')} تذكير WhatsApp»`,
      attempts: [
        { pos: 0.04, label: 'محاولة 1', when: I('0 s'), why: `مزوّد ${I('503')}`, kind: 'fail' },
        { pos: 0.22, label: 'محاولة 2', when: I('+30 s ± 10 s'), why: `مزوّد ${I('503')}`, kind: 'fail', jitter: 0.03 },
        { pos: 0.46, label: 'محاولة 3', when: I('+2 min ± 30 s'), why: 'مهلة منتهية', kind: 'fail', jitter: 0.05 },
        { pos: 0.76, label: 'محاولة 4', when: I('+8 min ± 2 min'), why: `${I('1,200')} أُرسلت`, kind: 'ok', jitter: 0.07 },
        { pos: 0.96, label: 'السقف', when: `${I('30 min')} كحد أقصى`, why: 'ثم طابور الإخفاقات', kind: 'cap' },
      ],
      ladderLabel: 'جدول إعادة المحاولة · يُكتب في الأسبوع الأول',
      ladderCols: ['المحاولة', 'الانتظار قبلها', 'النتيجة', 'وبعدها'],
      ladder: [
        { cells: ['1', I('0 s'), 'إخفاق · مزوّد غير متاح', 'إعادة مبرمَجة'] },
        { cells: ['2', I('30 s ± 10 s'), 'إخفاق · مزوّد غير متاح', 'إعادة مبرمَجة'] },
        { cells: ['3', I('2 min ± 30 s'), 'إخفاق · مهلة منتهية', 'إعادة مبرمَجة'] },
        { cells: ['4', I('8 min ± 2 min'), `نجاح · ${I('1,200')} أُرسلت، 0 تكرار`, 'سجل · مهمة مغلقة'], ok: true },
        { cells: ['5 (لم تُبلغ)', `${I('30 min')} · سقف`, 'آخر إخفاق', 'طابور الإخفاقات · تنبيه للمسؤول'], dead: true },
      ],
      idemTitle: 'مفتاح عدم التكرار · تذكير + موعد + تاريخ', idemBody: `في المحاولة 4، الرسائل الـ ${I('380')} التي خرجت في المحاولة 1 لا تخرج ثانية: تم ← متجاهَل`,
      deadTitle: 'طابور الإخفاقات · يقرؤه إنسان كل صباح', deadBody: 'السبب، الحمولة، عدد المحاولات؛ إعادة يدوية أو تصحيح؛ لا يُحذف بصمت أبداً',
      rule: 'المهمة التي تخفق لا تضيع ولا تُعاد إلى ما لا نهاية: تعيد المحاولة على فترات تتضاعف، مسحوبة عشوائياً كي لا تنطلق كلها معاً، مسقوفة، وتنتهي في طابور يقرؤه إنسان.',
      note: 'المدد والكميات: مثال مبني · الانتظار الأسي المسقوف مع العشوائية: توصية منشورة من فريق الهندسة المعمارية في AWS',
    },
    night: {
      title: 'ليلة خادم: ما يعمل بين 22:00 و07:00، على منفّذين',
      alt: 'محور من 22:00 إلى 07:00 وممران، المنفّذ أ والمنفّذ ب. المنفّذ أ: نسخ احتياطي للقاعدة من 22:00 إلى 22:12، إعادة حساب المخزون من 22:12 إلى 22:20، تصدير محاسبي بدفعات من منتصف الليل إلى 00:20، تحضير تقرير الاثنين من 02:00 إلى 02:06 فاتَ بسبب إعادة تشغيل الخادم عند 02:04 ثم استُدرك عند 02:15، تذكيرات مواعيد اليوم من 06:30 إلى 06:50 بدفعات من مئة برسالة في الثانية، تقرير مرسل إلى المسيّر عند 07:00. المنفّذ ب: تذكيرات الدفع من 23:30 إلى 23:33، إعادة حساب المواعيد من 05:30 إلى 05:36، وتنظيف ملفات مؤقتة مقرر عند 22:05 ينتظر انتهاء النسخ الاحتياطي لأن القفل مأخوذ. ثلاثة إطارات: المهمة الفائتة يستدركها مستدرِك الإقلاع، القفل يمنع تنفيذين، الإرسالات ممهَّدة لاحترام معدل المزوّد. والأوقات مثال مبني.',
      ticks: [{ h: 22, label: I('22:00') }, { h: 23, label: I('23:00') }, { h: 0, label: I('00:00') }, { h: 1, label: I('01:00') }, { h: 2, label: I('02:00') }, { h: 3, label: I('03:00') }, { h: 4, label: I('04:00') }, { h: 5, label: I('05:00') }, { h: 6, label: I('06:00') }, { h: 7, label: I('07:00') }],
      lanes: [
        { name: 'المنفّذ أ', sub: 'مهام ثقيلة · واحدة في كل مرة', jobs: [
          { from: 22, to: 22.2, name: 'نسخ احتياطي للقاعدة', note: 'قفل «القاعدة»' },
          { from: 22.2, to: 22.33, name: 'إعادة حساب المخزون', labelBelow: true },
          { from: 24, to: 24.33, name: 'تصدير محاسبي · دفعات', note: `${I('20 min')} · 9 دفعات` },
          { from: 26, to: 26.07, name: 'تقرير الاثنين · فائت', note: `إعادة تشغيل ${I('02:04')}`, kind: 'missed', labelBelow: true },
          { from: 26.25, to: 26.35, name: 'تقرير الاثنين · مستدرَك', note: `مستدرِك ${I('02:15')}`, kind: 'hot' },
          { from: 30.5, to: 30.83, name: 'تذكيرات مواعيد اليوم', note: `${I('1,200')} · دفعات 100 · ${I('1/s')}`, kind: 'hot', labelBelow: true },
          { from: 31, to: 31.05, name: `تقرير مرسل ${I('07:00')}`, kind: 'hot', right: true },
        ] },
        { name: 'المنفّذ ب', sub: 'مهام قصيرة · بالتوازي', jobs: [
          { from: 22.08, to: 22.2, name: 'تنظيف · ينتظر', note: 'قفل «القاعدة» مأخوذ', kind: 'wait' },
          { from: 22.2, to: 22.25, name: 'تنظيف', labelBelow: true },
          { from: 23.5, to: 23.55, name: 'تذكيرات الدفع', note: '46 رسالة' },
          { from: 29.5, to: 29.6, name: 'إعادة حساب المواعيد', note: 'الأسبوع المقبل', labelBelow: true },
        ] },
      ],
      events: [
        { title: 'فائتة ثم مستدرَكة', body: `إعادة تشغيل ${I('02:04')} ← مستدرِك الإقلاع ← ${I('02:15')}`, hot: true },
        { title: 'قفل واحد، تنفيذ واحد', body: 'التنظيف ينتظر انتهاء النسخ الاحتياطي؛ لا مرتين في الوقت نفسه أبداً', dash: true },
        { title: 'إرسالات ممهَّدة', body: `${I('1,200')} تذكير بدفعات من 100، رسالة في الثانية، حسب معدل المزوّد` },
      ],
      rule: 'للمهمة المجدولة ساعة، لكن أيضاً مستدرِك إن كان الخادم مطفأً، وقفل كي لا تعمل مرتين، ومعدل كي لا تُقطع، وسجل يقول عند 07:00 ما عمل.',
      note: 'الأوقات والمدد: مثال مبني · معدلات الإرسال تتوقف على مزوّد الرسائل',
    },
  },
};
