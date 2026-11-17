// Bespoke animated figures for the 2027 "serveur lent en entreprise" post.
//  journee(): the server's working day, 07:00 to 19:00. Four lanes (the team
//             at work, the backup, the full antivirus scan, the accounting
//             report) with the overlap window shaded, and under them a strip
//             of twenty-four columns that grow: the seconds it takes to save
//             one document, half-hour by half-hour; three tiles.
//  jauges():  the four resources of the server read at two moments. Two rows
//             of four half-dial gauges whose arcs fill (processor, memory,
//             disk, network), accented when saturated, and a bar for the
//             database against its edition limit; three tiles.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function growX(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function growY(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleY(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleY(1)}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function fillArc(css, P, id, at, dur, len, total) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{stroke-dasharray:0 ${total.toFixed(1)}}${(at + dur).toFixed(1)}%,100%{stroke-dasharray:${len.toFixed(1)} ${total.toFixed(1)}}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
const I = (x) => `⁦${x}⁩`;
const TINT = 'rgba(242,181,68,0.06)';

function tiles(c, css, P, ky, ts, at0) {
  let s = '';
  ts.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, at0 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? TINT : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  return s;
}
const motionOff = (P) => `@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"],svg rect[style*="${P}-"],svg path[style*="${P}-"]{animation:none !important}}`;

// seconds to save one delivery note, per half-hour from 07:00 to 18:30
const SECS = [2, 2, 3, 3, 4, 14, 38, 40, 22, 5, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2];
const LANES = [[8, 17], [9.5, 11], [10, 11.5], [10, 10.33]];

export function journee(t, rtl) {
  const c = ctx(rtl); const P = 'sj'; const css = []; const H = 572;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const ax0 = 262, ax1 = 1118, per = (ax1 - ax0) / 12; const X = (h) => ax0 + (h - 7) * per;
  const ly = 166, lh = 30;
  // hours
  s += `<g style="animation:${show(css, P, 'ax', 3)}">` + [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map((h) => line(c, X(h), ly - 8, X(h), ly + 4 * lh, { stroke: C.line }) + text(c, X(h), ly - 14, t.hour(h), { size: 8, font: 'mono', fill: C.fg35, anchor: 'middle' })).join('') + '</g>';
  // the overlap window
  s += `<g style="animation:${show(css, P, 'ov', 18)}">` + rect(c, X(9.5), ly - 6, X(11.5) - X(9.5), 4 * lh + 12, { stroke: C.accent, fill: 'rgba(242,181,68,0.10)', dash: '5 4' }) + '</g>';
  LANES.forEach((ln, i) => {
    const y = ly + i * lh; const at = 4 + i * 3.5; const x = X(ln[0]); const w = X(ln[1]) - X(ln[0]); const hot = i > 0;
    s += `<g style="animation:${show(css, P, `l${i}`, at)}">` + text(c, 80, y + 19, t.lanes[i], { size: 10, fill: hot ? C.fg : C.fg70, weight: hot ? 500 : 300 }) + '</g>';
    s += `<rect x="${c.RX(x, w).toFixed(1)}" y="${y + 8}" width="${w.toFixed(1)}" height="14" fill="${hot ? C.accent : 'rgba(255,255,255,0.28)'}" style="transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'};animation:${growX(css, P, `b${i}`, at + 0.4, 2.2)}"/>`;
  });
  // response time strip
  const base = ly + 4 * lh + 118; const cw = per / 2; const hmax = 84;
  s += `<g style="animation:${show(css, P, 'st', 19)}">` + text(c, 80, base - 52, t.strip.t, { size: 10.5, fill: C.fg, weight: 500 }) + text(c, 80, base - 38, t.strip.s, { size: 8.5, font: 'mono', fill: C.fg55 }) + line(c, ax0, base, ax1, base, { stroke: C.line2 }) + '</g>';
  SECS.forEach((v, i) => {
    const x = ax0 + i * cw + 3; const w = cw - 6; const h = Math.max(3, (v / 40) * hmax); const hot = v >= 10; const at = 20 + i * 0.45;
    s += `<rect x="${c.RX(x, w).toFixed(1)}" y="${(base - h).toFixed(1)}" width="${w.toFixed(1)}" height="${h.toFixed(1)}" fill="${hot ? C.accent : C.fg55}" style="transform-box:fill-box;transform-origin:bottom;animation:${growY(css, P, `c${i}`, at, 1.6)}"/>`;
    if (hot) s += `<g style="animation:${show(css, P, `v${i}`, at + 2)}">` + text(c, x + w / 2, base - h - 6, t.sec(v), { size: 9, font: 'mono', fill: C.accent, anchor: 'middle', weight: 500 }) + '</g>';
  });
  const ky = base + 18;
  s += tiles(c, css, P, ky, t.tiles, 34);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

const GAUGES = [[38, 97, 100, 9], [12, 71, 22, 6]];

export function jauges(t, rtl) {
  const c = ctx(rtl); const P = 'sg'; const css = []; const H = 612;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const r = 56; const total = Math.PI * r; const cxs = [210, 470, 730, 990];
  GAUGES.forEach((row, ri) => {
    const cy = 234 + ri * 138; const at0 = 4 + ri * 14;
    s += `<g style="animation:${show(css, P, `rt${ri}`, at0)}">` + text(c, 80, cy - 80, t.rowsT[ri], { size: 11, fill: ri === 0 ? C.accent : C.fg, weight: 500 }) + '</g>';
    row.forEach((v, i) => {
      const cx = c.X(cxs[i]); const hot = v >= 90; const len = (v / 100) * total; const at = at0 + 1 + i * 2.6; const d = `M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`;
      s += `<g style="animation:${show(css, P, `g${ri}${i}`, at)}"><path d="${d}" fill="none" stroke="${C.line2}" stroke-width="12"/>`
        + text(c, cxs[i], cy - 8, t.pct(v), { size: 17, font: 'mono', fill: hot ? C.accent : C.fg, anchor: 'middle', weight: 500 })
        + text(c, cxs[i], cy + 20, t.names[i], { size: 10.5, fill: C.fg, anchor: 'middle', weight: 500 }) + text(c, cxs[i], cy + 34, t.subs[ri][i], { size: 8.5, font: 'mono', fill: hot ? C.accent : C.fg55, anchor: 'middle' }) + '</g>';
      s += `<path d="${d}" fill="none" stroke="${hot ? C.accent : C.fg}" stroke-width="12" stroke-dasharray="${len.toFixed(1)} ${total.toFixed(1)}" style="animation:${fillArc(css, P, `a${ri}${i}`, at + 0.4, 2.2, len, total)}"/>`;
    });
  });
  // the database against its edition limit
  const by = 234 + 138 + 58; const bw = 1040 * 0.94;
  s += `<g style="animation:${show(css, P, 'db', 31)}">` + text(c, 80, by, t.db, { size: 10, fill: C.fg }) + rect(c, 80, by + 8, 1040, 10, { stroke: C.line2, fill: 'none' }) + '</g>';
  s += `<rect x="${c.RX(80, bw).toFixed(1)}" y="${by + 8}" width="${bw.toFixed(1)}" height="10" fill="${C.accent}" style="transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'};animation:${growX(css, P, 'dbb', 31.5, 3)}"/>`;
  const ky = by + 34;
  s += tiles(c, css, P, ky, t.tiles, 36);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    journee: {
      title: 'La journée du serveur : 40 secondes à 10 h 30, 3 secondes le reste du temps',
      alt: 'La journée du serveur de 7 heures à 19 heures. L’équipe travaille de 8 heures à 17 heures. La sauvegarde tourne de 9 h 30 à 11 heures, l’analyse antivirus complète de 10 heures à 11 h 30, le rapport de la comptabilité à 10 heures. Entre 9 h 30 et 11 h 30 les trois se superposent. Le temps pour enregistrer un bon passe de 3 secondes à 14, 38, 40 puis 22 secondes pendant cette fenêtre, et retombe à 3 secondes le reste de la journée.',
      header: 'Exemple construit · un serveur, vingt-deux postes, le logiciel de gestion et sa base · une journée ordinaire',
      hour: (h) => `${h} h`, sec: (v) => `${v} s`,
      lanes: ['Équipe au travail', 'Sauvegarde', 'Analyse antivirus complète', 'Rapport de la comptabilité'],
      strip: { t: 'Temps pour enregistrer un bon', s: 'en secondes, par demi-heure' },
      tiles: [
        { big: '40 secondes', l1: 'pour enregistrer un bon, à 10 h 30', l2: '3 secondes le reste de la journée', hot: true },
        { big: '3 tâches lourdes', l1: 'lancées entre 9 h 30 et 11 h 30', l2: 'sauvegarde, antivirus, rapport' },
        { big: '0 pièce à acheter', l1: 'pour déplacer ces tâches à 20 heures', l2: 'c’est le premier réglage, et il prend une heure' },
      ],
      line1: 'Le serveur n’est pas lent toute la journée : il est lent quand tout lui est demandé en même temps.',
      line2: 'Avant de le remplacer, on regarde ce qui tourne à l’heure où tout le monde attend.',
      note: 'Exemple construit · horaires et durées sont ceux de l’exemple ; les vôtres se lisent dans le planificateur de tâches du serveur.',
    },
    jauges: {
      title: 'Quatre ressources à 10 h 15 : ce n’est pas le processeur',
      alt: 'Quatre jauges relevées à deux moments. À 10 h 15, quand tout le monde attend : processeur 38 %, mémoire 97 %, disque occupé 100 % avec 180 millisecondes par opération, réseau 9 %. À 15 heures, quand tout va bien : processeur 12 %, mémoire 71 %, disque 22 % avec 9 millisecondes par opération, réseau 6 %. La base de données fait 9,4 Go pour une limite de 10 Go dans l’édition gratuite.',
      header: 'Exemple construit · le même serveur, relevé à deux moments de la même journée',
      rowsT: ['10 h 15 · quand tout le monde attend', '15 heures · quand tout va bien'],
      names: ['Processeur', 'Mémoire', 'Disque occupé', 'Réseau'],
      subs: [['il lui reste de la marge', 'le système déborde sur le disque', '180 ms par opération', 'n’y est pour rien'], ['au repos', 'suffisante hors pointe', '9 ms par opération', 'n’y est pour rien']],
      pct: (v) => `${v} %`,
      db: 'Base de données : 9,4 Go, pour 10 Go permis par l’édition gratuite du moteur de base',
      tiles: [
        { big: '38 % de processeur', l1: 'au pire moment de la journée', l2: 'un processeur plus rapide ne changerait rien' },
        { big: 'mémoire 97 %, disque 100 %', l1: 'le serveur échange sa mémoire avec le disque', l2: 'c’est là que se perdent les 40 secondes', hot: true },
        { big: '9,4 Go sur 10', l1: 'la base approche la limite de son édition', l2: 'à 10 Go, elle ne peut plus grossir' },
      ],
      line1: 'Quatre ressources, et une seule suffit à tout ralentir : ici la mémoire, qui déborde sur un disque lent.',
      line2: 'On les lit au moment où ça rame, pas le soir quand le technicien passe.',
      note: 'Exemple construit · valeurs de l’exemple ; la limite de 10 Go est celle de l’édition Express de SQL Server.',
    },
  },
  en: {
    journee: {
      title: 'The server’s day: 40 seconds at 10:30, 3 seconds the rest of the time',
      alt: 'The server’s day from 7:00 to 19:00. The team works from 8:00 to 17:00. The backup runs from 9:30 to 11:00, the full antivirus scan from 10:00 to 11:30, the accounting report at 10:00. Between 9:30 and 11:30 the three overlap. The time to save a delivery note goes from 3 seconds to 14, 38, 40 and then 22 seconds during that window, and falls back to 3 seconds for the rest of the day.',
      header: 'Constructed example · one server, twenty-two workstations, the management software and its database · an ordinary day',
      hour: (h) => `${h}:00`, sec: (v) => `${v} s`,
      lanes: ['Team at work', 'Backup', 'Full antivirus scan', 'Accounting report'],
      strip: { t: 'Time to save a delivery note', s: 'in seconds, per half-hour' },
      tiles: [
        { big: '40 seconds', l1: 'to save a delivery note, at 10:30', l2: '3 seconds the rest of the day', hot: true },
        { big: '3 heavy tasks', l1: 'started between 9:30 and 11:30', l2: 'backup, antivirus, report' },
        { big: '0 parts to buy', l1: 'to move those tasks to 20:00', l2: 'it is the first setting, and it takes an hour' },
      ],
      line1: 'The server is not slow all day: it is slow when everything is asked of it at the same time.',
      line2: 'Before replacing it, look at what is running at the hour when everyone is waiting.',
      note: 'Constructed example · times and durations belong to the example; yours are read in the server’s task scheduler.',
    },
    jauges: {
      title: 'Four resources at 10:15: it is not the processor',
      alt: 'Four gauges read at two moments. At 10:15, when everyone is waiting: processor 38 %, memory 97 %, disk busy 100 % with 180 milliseconds per operation, network 9 %. At 15:00, when all is well: processor 12 %, memory 71 %, disk 22 % with 9 milliseconds per operation, network 6 %. The database is 9.4 GB against a 10 GB limit in the free edition.',
      header: 'Constructed example · the same server, read at two moments of the same day',
      rowsT: ['10:15 · when everyone is waiting', '15:00 · when all is well'],
      names: ['Processor', 'Memory', 'Disk busy', 'Network'],
      subs: [['it still has headroom', 'the system spills onto the disk', '180 ms per operation', 'not involved'], ['idle', 'enough off-peak', '9 ms per operation', 'not involved']],
      pct: (v) => `${v} %`,
      db: 'Database: 9.4 GB, against the 10 GB allowed by the free edition of the database engine',
      tiles: [
        { big: '38 % processor', l1: 'at the worst moment of the day', l2: 'a faster processor would change nothing' },
        { big: 'memory 97 %, disk 100 %', l1: 'the server swaps its memory with the disk', l2: 'that is where the 40 seconds go', hot: true },
        { big: '9.4 GB out of 10', l1: 'the database is nearing its edition limit', l2: 'at 10 GB, it can no longer grow' },
      ],
      line1: 'Four resources, and one is enough to slow everything down: here memory, spilling onto a slow disk.',
      line2: 'They are read at the moment it crawls, not in the evening when the technician comes by.',
      note: 'Constructed example · values of the example; the 10 GB limit is that of SQL Server Express.',
    },
  },
  ar: {
    journee: {
      title: 'يوم الخادم: 40 ثانية على العاشرة والنصف، و3 ثوانٍ باقي الوقت',
      alt: 'يوم الخادم من السابعة صباحاً إلى السابعة مساءً. الفريق يعمل من الثامنة إلى الخامسة. النسخ الاحتياطي يشتغل من التاسعة والنصف إلى الحادية عشرة، والفحص الكامل لمضاد الفيروسات من العاشرة إلى الحادية عشرة والنصف، وتقرير المحاسبة على العاشرة. بين التاسعة والنصف والحادية عشرة والنصف تتراكب الثلاثة. ووقت تسجيل وصل ينتقل من 3 ثوانٍ إلى 14 ثم 38 ثم 40 ثم 22 ثانية في هذه الفترة، ويعود إلى 3 ثوانٍ باقي اليوم.',
      header: 'مثال مركَّب · خادم واحد، اثنان وعشرون حاسوباً، برنامج التسيير وقاعدته · يوم عادي',
      hour: (h) => I(`${h}:00`), sec: (v) => `${v} ث`,
      lanes: ['الفريق في العمل', 'النسخ الاحتياطي', 'الفحص الكامل لمضاد الفيروسات', 'تقرير المحاسبة'],
      strip: { t: 'وقت تسجيل وصل', s: 'بالثواني، كل نصف ساعة' },
      tiles: [
        { big: '40 ثانية', l1: 'لتسجيل وصل، على العاشرة والنصف', l2: '3 ثوانٍ باقي اليوم', hot: true },
        { big: '3 مهام ثقيلة', l1: `تنطلق بين ${I('9:30')} و${I('11:30')}`, l2: 'النسخ، مضاد الفيروسات، التقرير' },
        { big: 'لا قطعة تُشترى', l1: 'لنقل هذه المهام إلى الثامنة مساءً', l2: 'هذا أول إعداد، ويأخذ ساعة' },
      ],
      line1: 'الخادم ليس بطيئاً طوال اليوم: هو بطيء حين يُطلب منه كل شيء في الوقت نفسه.',
      line2: 'وقبل تعويضه، يُنظر إلى ما يشتغل في الساعة التي ينتظر فيها الجميع.',
      note: 'مثال مركَّب · الأوقات والمدد خاصة بالمثال؛ وأوقاتكم تُقرأ في مجدوِل المهام على الخادم.',
    },
    jauges: {
      title: 'أربعة موارد على العاشرة والربع: ليس المعالج',
      alt: 'أربعة عدادات مقروءة في لحظتين. على العاشرة والربع، حين ينتظر الجميع: المعالج 38 بالمئة، الذاكرة 97 بالمئة، القرص مشغول 100 بالمئة مع 180 ميلي ثانية لكل عملية، الشبكة 9 بالمئة. على الثالثة بعد الظهر، حين يسير كل شيء: المعالج 12 بالمئة، الذاكرة 71 بالمئة، القرص 22 بالمئة مع 9 ميلي ثوانٍ لكل عملية، الشبكة 6 بالمئة. وقاعدة البيانات 9,4 غيغا مقابل حد 10 غيغا في الطبعة المجانية.',
      header: 'مثال مركَّب · الخادم نفسه، مقروء في لحظتين من اليوم نفسه',
      rowsT: [`${I('10:15')} · حين ينتظر الجميع`, `${I('15:00')} · حين يسير كل شيء`],
      names: ['المعالج', 'الذاكرة', 'انشغال القرص', 'الشبكة'],
      subs: [['ما زال عنده هامش', 'النظام يفيض على القرص', `${I('180 ms')} لكل عملية`, 'لا دخل لها'], ['في راحة', 'كافية خارج الذروة', `${I('9 ms')} لكل عملية`, 'لا دخل لها']],
      pct: (v) => I(`${v} %`),
      db: 'قاعدة البيانات: 9,4 غيغا، مقابل 10 غيغا تسمح بها الطبعة المجانية لمحرّك القاعدة',
      tiles: [
        { big: `${I('38 %')} من المعالج`, l1: 'في أسوأ لحظة من اليوم', l2: 'معالج أسرع لن يغيّر شيئاً' },
        { big: `الذاكرة ${I('97 %')}، القرص ${I('100 %')}`, l1: 'الخادم يبادل ذاكرته مع القرص', l2: 'هنا تضيع الثواني الأربعون', hot: true },
        { big: '9,4 غيغا من 10', l1: 'القاعدة تقترب من حد طبعتها', l2: 'عند 10 غيغا لا تستطيع أن تكبر' },
      ],
      line1: 'أربعة موارد، وواحد يكفي لإبطاء كل شيء: هنا الذاكرة، وهي تفيض على قرص بطيء.',
      line2: 'وتُقرأ في اللحظة التي يتعطل فيها العمل، لا في المساء حين يمرّ التقني.',
      note: `مثال مركَّب · قيم المثال؛ وحد 10 غيغا هو حد طبعة ${I('SQL Server Express')}.`,
    },
  },
};
