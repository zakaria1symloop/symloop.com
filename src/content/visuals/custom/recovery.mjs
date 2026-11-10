// Bespoke animated figures for the 2027 backups-and-recovery post.
//  incident(): the day the server dies, on a clock: disk failure at 09:14,
//              alert, decision, new server from the repository, database
//              restored to 09:13 by point-in-time recovery, files from the
//              second-site copy, DNS switched, checks, back at 10:35. Two
//              measured gaps are drawn: data lost (RPO) and time down (RTO).
//  drill():    the monthly restore drill: a checklist ticking step by step on
//              an empty server with the time each step took, the total against
//              the written objective, and one deviation flagged for follow-up.
// CSS-only animation (prefers-reduced-motion disables it); base attributes are
// the finished state for the JPG rasteriser.
import { W, C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function grow(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `${P}-${id} ${LOOP}s linear infinite`; }

export function incident(t, rtl) {
  const c = ctx(rtl); const P = 'ri'; const css = []; const H = 600;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  // clock axis from 09:00 to 10:45 (105 minutes)
  const x0 = 110; const x1 = 1110; const m0 = 0; const m1 = 105;
  const sx = (m) => x0 + ((m - m0) / (m1 - m0)) * (x1 - x0);
  const ay = 330;
  s += line(c, x0, ay, x1, ay, { stroke: C.line2 });
  t.ticks.forEach((tk) => {
    s += line(c, sx(tk.m), ay - 5, sx(tk.m), ay + 5, { stroke: C.line2 });
    s += text(c, sx(tk.m), ay + 22, tk.label, { size: 10.5, font: 'mono', fill: C.fg35, anchor: 'middle' });
  });
  // events above and below alternately, on two tiers to avoid collisions
  t.events.forEach((ev, i) => {
    const x = sx(ev.m); const at = 6 + i * 8.5; const up = i % 2 === 0; const far = ev.lvl === 2;
    const stem = far ? 86 : 30; const timeOff = far ? 92 : 36; const lineOff = far ? 102 : 46;
    const big = ev.kind === 'fail' || ev.kind === 'back';
    const col = ev.kind === 'back' ? C.accent : ev.kind === 'fail' ? C.fg : C.fg70;
    s += `<g style="animation:${show(css, P, `e${i}`, at)}">`
      + line(c, x, ay, x, up ? ay - stem : ay + stem + 12, { stroke: ev.kind === 'fail' ? C.fg55 : ev.kind === 'back' ? C.accent : C.line2 })
      + circle(c, x, ay, big ? 8 : 5, { fill: ev.kind === 'back' ? C.accent : ev.kind === 'fail' ? C.bg : C.fg, stroke: ev.kind === 'fail' ? C.fg55 : 'none', sw: 1.5 })
      + text(c, x, up ? ay - timeOff : ay + timeOff + 20, ev.time, { size: 10.5, font: 'mono', fill: ev.kind === 'back' ? C.accent : C.fg55, anchor: 'middle' })
      + ev.lines.map((l, k) => text(c, x, (up ? ay - lineOff - (ev.lines.length - 1) * 14 : ay + lineOff + 32) + k * 14, l, { size: 11.5, fill: col, anchor: 'middle' })).join('')
      + '</g>';
  });
  // RPO bar (data lost): from last recoverable point to failure
  const rpoY = 116; const rpoX = sx(t.rpo.from); const rpoW = Math.max(6, sx(t.rpo.to) - sx(t.rpo.from));
  s += `<g style="animation:${show(css, P, 'rpo', 72)}">`
    + text(c, 80, rpoY - 10, t.rpo.label, { size: 12.5, fill: C.fg })
    + text(c, 80, rpoY + 7, t.rpo.sub, { size: 10.5, font: 'mono', fill: C.fg55 })
    + `<rect x="${c.RX(rpoX, rpoW)}" y="${rpoY + 16}" width="${rpoW}" height="10" fill="${C.fg}" style="transform-box:fill-box;transform-origin:${c.rtl ? 'right' : 'left'} center;animation:${grow(css, P, 'rpob', 73, 3)}"/>`
    + text(c, rpoX + rpoW + 10, rpoY + 25, t.rpo.value, { size: 12, font: 'mono', fill: C.fg })
    + '</g>';
  // RTO bar (time down)
  const rtoY = 158; const rtoX = sx(t.rto.from); const rtoW = sx(t.rto.to) - sx(t.rto.from);
  s += `<g style="animation:${show(css, P, 'rto', 80)}">`
    + text(c, 80, rtoY - 10, t.rto.label, { size: 12.5, fill: C.accent })
    + text(c, 80, rtoY + 7, t.rto.sub, { size: 10.5, font: 'mono', fill: C.fg55 })
    + `<rect x="${c.RX(rtoX, rtoW)}" y="${rtoY + 16}" width="${rtoW.toFixed(1)}" height="10" fill="${C.accent}" style="transform-box:fill-box;transform-origin:${c.rtl ? 'right' : 'left'} center;animation:${grow(css, P, 'rtob', 81, 8)}"/>`
    + text(c, rtoX + rtoW + 10, rtoY + 25, t.rto.value, { size: 12, font: 'mono', fill: C.accent })
    + '</g>';
  // bottom note
  s += `<g style="animation:${show(css, P, 'note', 92)}">`
    + rect(c, 80, 526, 1040, 52, { stroke: C.line2, fill: C.fill })
    + text(c, 98, 548, t.note, { size: 12.5, fill: C.fg })
    + text(c, 98, 567, t.note2, { size: 10.5, font: 'mono', fill: C.fg55 })
    + '</g>';
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"],svg rect[style*="${P}-"]{animation:none !important;transform:none}}</style>`;
  return s + '</svg>';
}

export function drill(t, rtl) {
  const c = ctx(rtl); const P = 'rd'; const css = []; const H = 660;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  // header card
  s += rect(c, 80, 92, 1040, 46, { stroke: C.line2, fill: C.fill });
  s += text(c, 98, 112, t.headLabel, { size: 11, font: 'mono', fill: C.fg35, letter: 2, upper: true });
  s += text(c, 98, 129, t.head, { size: 12, fill: C.fg70 });
  s += text(c, 1102, 122, t.headRight, { size: 11.5, font: 'mono', fill: C.fg55, anchor: 'end' });
  // steps with running clock
  const top = 162; const rowH = 44;
  let cum = 0;
  t.steps.forEach((st, i) => {
    const y = top + i * rowH; const at = 6 + i * 9; cum += st.min;
    const warn = st.warn;
    s += line(c, 80, y + rowH - 6, 1120, y + rowH - 6, { stroke: C.line });
    s += text(c, 120, y + 20, st.label, { size: 13, fill: warn ? C.accent : C.fg });
    s += text(c, 120, y + 36, st.sub, { size: 10.5, font: 'mono', fill: C.fg55 });
    s += text(c, 940, y + 24, t.cum(st.min), { size: 12.5, font: 'mono', fill: warn ? C.accent : C.fg70, anchor: 'end' });
    s += `<g style="animation:${show(css, P, `k${i}`, at)}">`
      + circle(c, 96, y + 20, 10, { fill: warn ? C.accent : C.fg, stroke: 'none' })
      + text(c, 96, y + 24, warn ? '!' : '✓', { size: 12, fill: C.bg, anchor: 'middle', weight: 600 })
      + text(c, 1120, y + 24, t.cum(cum), { size: 12.5, font: 'mono', fill: warn ? C.accent : C.fg, anchor: 'end' })
      + '</g>';
    if (warn) {
      s += `<g style="animation:${show(css, P, `w${i}`, at + 4)}">` + text(c, 960, y + 40, st.warnText, { size: 10, font: 'mono', fill: C.accent, anchor: 'end' }) + '</g>';
    }
  });
  // total vs objective
  const ty = top + t.steps.length * rowH + 16;
  const bx0 = 400; const bx1 = 1120; const bw = bx1 - bx0; const ratio = Math.min(1, cum / t.objective);
  s += `<g style="animation:${show(css, P, 'tot', 6 + t.steps.length * 9)}">`
    + text(c, 80, ty + 14, t.totalLabel, { size: 13, fill: C.fg })
    + text(c, 80, ty + 32, t.totalSub, { size: 10.5, font: 'mono', fill: C.fg55 })
    + rect(c, bx0, ty + 6, bw, 16, { stroke: C.line, fill: 'none' })
    + `<rect x="${c.RX(bx0, bw * ratio)}" y="${ty + 6}" width="${(bw * ratio).toFixed(1)}" height="16" fill="${C.accent}" style="transform-box:fill-box;transform-origin:${c.rtl ? 'right' : 'left'} center;animation:${grow(css, P, 'totb', 7 + t.steps.length * 9, 5)}"/>`
    + text(c, bx0 + bw * ratio + 10, ty + 18, t.cum(cum), { size: 12.5, font: 'mono', fill: C.accent })
    + text(c, bx1, ty + 40, t.objectiveLabel, { size: 10.5, font: 'mono', fill: C.fg55, anchor: 'end' })
    + '</g>';
  // outcome card
  const oy = ty + 58;
  s += `<g style="animation:${show(css, P, 'out', 90)}">`
    + rect(c, 80, oy, 1040, 50, { stroke: C.accent, fill: 'rgba(242,181,68,0.06)' })
    + text(c, 98, oy + 21, t.outcome, { size: 12.5, fill: C.fg })
    + text(c, 98, oy + 39, t.outcome2, { size: 10.5, font: 'mono', fill: C.accent })
    + '</g>';
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"],svg rect[style*="${P}-"]{animation:none !important;transform:none}}</style>`;
  return s + '</svg>';
}

const I = (x) => `⁦${x}⁩`;

export const STRINGS = {
  fr: {
    incident: {
      title: 'Le jour où le serveur meurt : de la panne à la reprise, sur l’horloge',
      alt: 'Une horloge de 9 h à 10 h 45. À 9 h 14, le disque du serveur de production meurt. À 9 h 16, l’alerte arrive sur deux téléphones. À 9 h 20, la décision de reprise est prise et le document de reprise ouvert. À 9 h 25, un nouveau serveur est créé depuis le dépôt de code. À 9 h 40, la base est restaurée au point 9 h 13 grâce à l’archivage continu des journaux. À 10 h 05, les fichiers sont restaurés depuis la copie du second site. À 10 h 20, le nom de domaine est basculé. À 10 h 30, douze vérifications métier sont passées. À 10 h 35, les clients travaillent à nouveau. Deux barres : la perte de données, une minute, et l’indisponibilité, une heure vingt et une.',
      ticks: [{ m: 0, label: '9 h 00' }, { m: 15, label: '9 h 15' }, { m: 30, label: '9 h 30' }, { m: 45, label: '9 h 45' }, { m: 60, label: '10 h 00' }, { m: 75, label: '10 h 15' }, { m: 90, label: '10 h 30' }, { m: 105, label: '10 h 45' }],
      events: [
        { m: 14, time: '9 h 14', kind: 'fail', lvl: 2, lines: ['Le disque du serveur', 'de production meurt'] },
        { m: 16, time: '9 h 16', kind: 'step', lines: ['Alerte sur deux', 'téléphones'] },
        { m: 20, time: '9 h 20', kind: 'step', lines: ['Décision de reprise ;', 'document de reprise ouvert'] },
        { m: 25, time: '9 h 25', kind: 'step', lvl: 2, lines: ['Nouveau serveur créé', 'depuis le dépôt de code'] },
        { m: 40, time: '9 h 40', kind: 'step', lines: ['Base restaurée', 'au point 9 h 13'] },
        { m: 65, time: '10 h 05', kind: 'step', lines: ['Fichiers restaurés depuis', 'la copie du second site'] },
        { m: 80, time: '10 h 20', kind: 'step', lines: ['Nom de domaine', 'basculé'] },
        { m: 90, time: '10 h 30', kind: 'step', lines: ['12 vérifications', 'métier passées'] },
        { m: 95, time: '10 h 35', kind: 'back', lvl: 2, lines: ['Les clients', 'travaillent à nouveau'] },
      ],
      rpo: { label: 'Données perdues', sub: 'dernier point restaurable → panne', from: 13, to: 14, value: '1 min · objectif écrit : 15 min' },
      rto: { label: 'Indisponibilité', sub: 'panne → clients de retour', from: 14, to: 95, value: '1 h 21 · objectif écrit : 2 h' },
      note: 'Rien de ce qui s’est passé ce matin-là n’a été improvisé : chaque étape avait été jouée lors de l’exercice du mois précédent, en 47 minutes, sur un serveur vide.',
      note2: 'exemple construit à partir de cas réels · les objectifs de 15 min et 2 h sont ceux que nous écrivons par défaut pour une application de gestion',
    },
    drill: {
      title: 'L’exercice de restauration du mois, chronométré et consigné',
      alt: 'Une liste de huit étapes jouées sur un serveur vide, chacune cochée avec sa durée et l’heure cumulée : serveur vide créé depuis le dépôt, 4 minutes ; secrets récupérés depuis le gestionnaire par la seconde personne, 3 minutes ; base restaurée au point choisi, 18 minutes ; fichiers restaurés depuis la copie du second site, 22 minutes, signalés comme deux fois plus longs que le mois dernier ; application démarrée, 3 minutes ; douze vérifications métier, 9 minutes ; nom de domaine basculé en test, 2 minutes ; rapport écrit, 5 minutes. Total 66 minutes pour un objectif de 2 heures. Verdict : objectif tenu, un écart ouvert sur la restauration des fichiers.',
      headLabel: 'Exercice du mois', head: 'Premier mardi · serveur vide chez un autre hébergeur · joué par la personne qui n’a pas écrit la procédure', headRight: 'mars 2027 · 3e exercice',
      steps: [
        { label: 'Serveur vide créé depuis le dépôt', sub: 'infrastructure décrite dans le code ; rien n’est cliqué à la main', min: 4 },
        { label: 'Secrets récupérés par la seconde personne', sub: 'gestionnaire de secrets ; aucun mot de passe sur le serveur mort', min: 3 },
        { label: 'Base restaurée au point choisi', sub: 'copie de base + journaux archivés en continu → 14 h 02 la veille', min: 18 },
        { label: 'Fichiers restaurés depuis le second site', sub: 'copie versionnée et inaltérable ; 38 Go', min: 22, warn: true, warnText: '2 × plus long que le mois dernier → écart ouvert' },
        { label: 'Application démarrée', sub: 'même version que la production, lue dans le dépôt', min: 3 },
        { label: '12 vérifications métier', sub: 'une commande, une facture, un paiement, un export, une connexion…', min: 9 },
        { label: 'Nom de domaine basculé en test', sub: 'bascule réelle répétée, puis retour', min: 2 },
        { label: 'Rapport écrit et signé', sub: 'durées, écarts, qui a fait quoi ; lu par le gérant', min: 5 },
      ],
      cum: (m) => `${m} min`,
      totalLabel: 'Total de l’exercice', totalSub: 'face à l’objectif de reprise écrit', objective: 120, objectiveLabel: 'objectif : 120 min',
      outcome: 'Verdict : objectif tenu, 66 minutes sur 120. Un écart ouvert : la restauration des fichiers a doublé, à investiguer avant le prochain exercice.',
      outcome2: 'une sauvegarde jamais restaurée n’est pas une sauvegarde ; c’est l’exercice qui la rend réelle, et c’est le rapport qui la rend vérifiable',
    },
  },
  en: {
    incident: {
      title: 'The day the server dies: from failure to recovery, on the clock',
      alt: 'A clock from 9:00 to 10:45. At 9:14 the production server’s disk dies. At 9:16 the alert reaches two phones. At 9:20 the recovery decision is taken and the recovery document opened. At 9:25 a new server is created from the code repository. At 9:40 the database is restored to the 9:13 point thanks to continuous log archiving. At 10:05 files are restored from the second-site copy. At 10:20 the domain name is switched. At 10:30 twelve business checks pass. At 10:35 customers are working again. Two bars: data lost, one minute, and downtime, one hour twenty-one.',
      ticks: [{ m: 0, label: '9:00' }, { m: 15, label: '9:15' }, { m: 30, label: '9:30' }, { m: 45, label: '9:45' }, { m: 60, label: '10:00' }, { m: 75, label: '10:15' }, { m: 90, label: '10:30' }, { m: 105, label: '10:45' }],
      events: [
        { m: 14, time: '9:14', kind: 'fail', lvl: 2, lines: ['The production', 'server’s disk dies'] },
        { m: 16, time: '9:16', kind: 'step', lines: ['Alert on two', 'phones'] },
        { m: 20, time: '9:20', kind: 'step', lines: ['Recovery decision;', 'recovery document opened'] },
        { m: 25, time: '9:25', kind: 'step', lvl: 2, lines: ['New server created', 'from the code repository'] },
        { m: 40, time: '9:40', kind: 'step', lines: ['Database restored', 'to the 9:13 point'] },
        { m: 65, time: '10:05', kind: 'step', lines: ['Files restored from', 'the second-site copy'] },
        { m: 80, time: '10:20', kind: 'step', lines: ['Domain name', 'switched'] },
        { m: 90, time: '10:30', kind: 'step', lines: ['12 business', 'checks passed'] },
        { m: 95, time: '10:35', kind: 'back', lvl: 2, lines: ['Customers are', 'working again'] },
      ],
      rpo: { label: 'Data lost', sub: 'last recoverable point → failure', from: 13, to: 14, value: '1 min · written objective: 15 min' },
      rto: { label: 'Downtime', sub: 'failure → customers back', from: 14, to: 95, value: '1 h 21 · written objective: 2 h' },
      note: 'Nothing that happened that morning was improvised: every step had been played during the previous month’s drill, in 47 minutes, on an empty server.',
      note2: 'example built from real cases · the 15 min and 2 h objectives are the ones we write by default for a management application',
    },
    drill: {
      title: 'The monthly restore drill, timed and recorded',
      alt: 'A list of eight steps played on an empty server, each ticked with its duration and cumulative time: empty server created from the repository, 4 minutes; secrets retrieved from the manager by the second person, 3 minutes; database restored to the chosen point, 18 minutes; files restored from the second-site copy, 22 minutes, flagged as twice as long as last month; application started, 3 minutes; twelve business checks, 9 minutes; domain name switched in test, 2 minutes; report written, 5 minutes. Total 66 minutes against a 2-hour objective. Verdict: objective met, one deviation opened on file restore.',
      headLabel: 'Drill of the month', head: 'First Tuesday · empty server at another provider · played by the person who did not write the procedure', headRight: 'March 2027 · 3rd drill',
      steps: [
        { label: 'Empty server created from the repository', sub: 'infrastructure described in code; nothing clicked by hand', min: 4 },
        { label: 'Secrets retrieved by the second person', sub: 'secrets manager; no password on the dead server', min: 3 },
        { label: 'Database restored to the chosen point', sub: 'base copy + continuously archived logs → 14:02 the day before', min: 18 },
        { label: 'Files restored from the second site', sub: 'versioned and immutable copy; 38 GB', min: 22, warn: true, warnText: '2 × longer than last month → deviation opened' },
        { label: 'Application started', sub: 'same version as production, read from the repository', min: 3 },
        { label: '12 business checks', sub: 'an order, an invoice, a payment, an export, a login…', min: 9 },
        { label: 'Domain name switched in test', sub: 'real switch rehearsed, then reverted', min: 2 },
        { label: 'Report written and signed', sub: 'durations, deviations, who did what; read by the manager', min: 5 },
      ],
      cum: (m) => `${m} min`,
      totalLabel: 'Drill total', totalSub: 'against the written recovery objective', objective: 120, objectiveLabel: 'objective: 120 min',
      outcome: 'Verdict: objective met, 66 minutes out of 120. One deviation opened: file restore doubled, to investigate before the next drill.',
      outcome2: 'a backup never restored is not a backup; the drill makes it real, and the report makes it verifiable',
    },
  },
  ar: {
    incident: {
      title: 'يوم يموت الخادم: من العطل إلى الاستئناف، على الساعة',
      alt: 'ساعة من 9:00 إلى 10:45. في 9:14 يموت قرص خادم الإنتاج. في 9:16 يصل التنبيه إلى هاتفين. في 9:20 يُتخذ قرار الاستئناف ويُفتح مستند الاستئناف. في 9:25 يُنشأ خادم جديد من مستودع الكود. في 9:40 تُستعاد القاعدة إلى نقطة 9:13 بفضل الأرشفة المستمرة للسجلات. في 10:05 تُستعاد الملفات من نسخة الموقع الثاني. في 10:20 يُحوَّل اسم النطاق. في 10:30 تجتاز اثنتا عشرة عملية تحقق. في 10:35 يعمل الزبائن من جديد. شريطان: البيانات المفقودة، دقيقة واحدة، والتوقف، ساعة وإحدى وعشرون دقيقة.',
      ticks: [{ m: 0, label: I('9:00') }, { m: 15, label: I('9:15') }, { m: 30, label: I('9:30') }, { m: 45, label: I('9:45') }, { m: 60, label: I('10:00') }, { m: 75, label: I('10:15') }, { m: 90, label: I('10:30') }, { m: 105, label: I('10:45') }],
      events: [
        { m: 14, time: I('9:14'), kind: 'fail', lvl: 2, lines: ['قرص خادم', 'الإنتاج يموت'] },
        { m: 16, time: I('9:16'), kind: 'step', lines: ['تنبيه على', 'هاتفين'] },
        { m: 20, time: I('9:20'), kind: 'step', lines: ['قرار الاستئناف؛', 'مستند الاستئناف مفتوح'] },
        { m: 25, time: I('9:25'), kind: 'step', lvl: 2, lines: ['خادم جديد يُنشأ', 'من مستودع الكود'] },
        { m: 40, time: I('9:40'), kind: 'step', lines: ['القاعدة مستعادة', `إلى نقطة ${I('9:13')}`] },
        { m: 65, time: I('10:05'), kind: 'step', lines: ['الملفات مستعادة من', 'نسخة الموقع الثاني'] },
        { m: 80, time: I('10:20'), kind: 'step', lines: ['اسم النطاق', 'محوَّل'] },
        { m: 90, time: I('10:30'), kind: 'step', lines: ['12 تحققاً', 'مجتازاً'] },
        { m: 95, time: I('10:35'), kind: 'back', lvl: 2, lines: ['الزبائن يعملون', 'من جديد'] },
      ],
      rpo: { label: 'البيانات المفقودة', sub: 'آخر نقطة قابلة للاستعادة ← العطل', from: 13, to: 14, value: `${I('1 min')} · الهدف المكتوب: ${I('15 min')}` },
      rto: { label: 'التوقف', sub: 'العطل ← عودة الزبائن', from: 14, to: 95, value: `${I('1 h 21')} · الهدف المكتوب: ${I('2 h')}` },
      note: 'لا شيء مما حدث ذلك الصباح كان مرتجلاً: كل خطوة أُجريت في تمرين الشهر السابق، في 47 دقيقة، على خادم فارغ.',
      note2: 'مثال مبني من حالات حقيقية · هدفا 15 دقيقة وساعتين هما ما نكتبه افتراضياً لتطبيق تسيير',
    },
    drill: {
      title: 'تمرين الاستعادة الشهري، مؤقَّت ومدوَّن',
      alt: 'قائمة ثماني خطوات تُجرى على خادم فارغ، كل منها مؤشَّرة بمدتها والوقت التراكمي: خادم فارغ يُنشأ من المستودع، 4 دقائق؛ الأسرار تُسترجع من المدير بواسطة الشخص الثاني، 3 دقائق؛ القاعدة تُستعاد إلى النقطة المختارة، 18 دقيقة؛ الملفات تُستعاد من نسخة الموقع الثاني، 22 دقيقة، مُعلَّمة كضعف الشهر الماضي؛ التطبيق يُشغَّل، 3 دقائق؛ اثنا عشر تحققاً، 9 دقائق؛ اسم النطاق يُحوَّل في الاختبار، دقيقتان؛ التقرير يُكتب، 5 دقائق. المجموع 66 دقيقة لهدف ساعتين. الحكم: الهدف محقَّق، فارق واحد مفتوح على استعادة الملفات.',
      headLabel: 'تمرين الشهر', head: 'أول ثلاثاء · خادم فارغ عند مستضيف آخر · يجريه الشخص الذي لم يكتب الإجراء', headRight: 'مارس 2027 · التمرين الثالث',
      steps: [
        { label: 'خادم فارغ يُنشأ من المستودع', sub: 'بنية تحتية موصوفة في الكود؛ لا شيء يُنقر يدوياً', min: 4 },
        { label: 'الأسرار يسترجعها الشخص الثاني', sub: 'مدير أسرار؛ لا كلمة مرور على الخادم الميت', min: 3 },
        { label: 'القاعدة تُستعاد إلى النقطة المختارة', sub: `نسخة أساس + سجلات مؤرشفة باستمرار ← ${I('14:02')} أمس`, min: 18 },
        { label: 'الملفات تُستعاد من الموقع الثاني', sub: `نسخة مرقَّمة وغير قابلة للتعديل؛ ${I('38 Go')}`, min: 22, warn: true, warnText: 'ضعف الشهر الماضي ← فارق مفتوح' },
        { label: 'التطبيق يُشغَّل', sub: 'النسخة نفسها كالإنتاج، تُقرأ من المستودع', min: 3 },
        { label: '12 تحققاً من العمل', sub: 'طلبية، فاتورة، دفعة، تصدير، تسجيل دخول…', min: 9 },
        { label: 'اسم النطاق يُحوَّل في الاختبار', sub: 'تحويل حقيقي يُتدرَّب عليه ثم يُعاد', min: 2 },
        { label: 'تقرير مكتوب وموقَّع', sub: 'المدد، الفوارق، من فعل ماذا؛ يقرؤه المسيّر', min: 5 },
      ],
      cum: (m) => I(`${m} min`),
      totalLabel: 'مجموع التمرين', totalSub: 'مقابل هدف الاستئناف المكتوب', objective: 120, objectiveLabel: `الهدف: ${I('120 min')}`,
      outcome: 'الحكم: الهدف محقَّق، 66 دقيقة من 120. فارق واحد مفتوح: استعادة الملفات تضاعفت، يُحقَّق فيها قبل التمرين المقبل.',
      outcome2: 'نسخة احتياطية لم تُستعد قط ليست نسخة احتياطية؛ التمرين يجعلها حقيقية، والتقرير يجعلها قابلة للتحقق',
    },
  },
};
