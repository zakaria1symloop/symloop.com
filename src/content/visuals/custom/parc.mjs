// Bespoke animated figures for the 2027 "comment gérer un parc informatique" post.
//  registre(): the first inventory as a unit chart. Forty squares, one per
//              machine, appear in neutral grey; then four groups light up in
//              turn (system out of support, late on updates, no known user,
//              unencrypted laptops) while the legend on the right counts them:
//              19 machines out of 40 need an action.
//  ages():     two bar charts. Left, the age of the forty machines by year,
//              with a line at five years and the twelve older machines in
//              accent. Right, the number of machines older than five years at
//              the start of each year when the eight oldest are replaced
//              every year: 12, 12, 11, 9, 5, then none.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function growY(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleY(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleY(1)}}`); return `transform-box:fill-box;transform-origin:center bottom;animation:${P}-${id} ${LOOP}s linear infinite`; }
const I = (x) => `⁦${x}⁩`;
const TINT = 'rgba(242,181,68,0.06)';
const DARK = '#0b0b0b';

function tiles(c, css, P, ky, ts, at0) {
  let s = '';
  ts.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, at0 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? TINT : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  return s;
}
const motionOff = (P) => `@media (prefers-reduced-motion: reduce){svg [style*="${P}-"]{animation:none !important}}`;

// which of the forty machines falls in which group (the other 21 are in order)
const GROUPS = [[3, 8, 14, 19, 22, 31, 37], [1, 11, 25, 28, 34], [6, 17, 29, 39], [12, 23, 36]];
const STYLE = [
  { stroke: C.accent, fill: C.accent },
  { stroke: C.accent, fill: 'rgba(242,181,68,0.18)' },
  { stroke: C.fg70, fill: DARK, dash: '4 3' },
  { stroke: C.fg, fill: 'rgba(255,255,255,0.72)' },
];
const OK = { stroke: C.fg35, fill: C.fill };

export function registre(t, rtl) {
  const c = ctx(rtl); const P = 'pg'; const css = []; const H = 592;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const cx = (i) => 80 + (i % 10) * 52; const cy = (i) => 152 + Math.floor(i / 10) * 52;
  for (let r = 0; r < 4; r++) { let g = ''; for (let k = 0; k < 10; k++) { const i = r * 10 + k; g += rect(c, cx(i), cy(i), 44, 44, OK); } s += `<g style="animation:${show(css, P, `row${r}`, 4 + r * 1.5)}">` + g + '</g>'; }
  GROUPS.forEach((list, k) => {
    s += `<g style="animation:${show(css, P, `grp${k}`, 16 + k * 10)}">` + list.map((i) => rect(c, cx(i), cy(i), 44, 44, STYLE[k]) + (k === 2 ? text(c, cx(i) + 22, cy(i) + 27, '?', { size: 14, font: 'mono', fill: C.fg70, anchor: 'middle' }) : '')).join('') + '</g>';
  });
  // legend with the counts
  const lx = 632;
  t.legend.forEach((k, j) => {
    const y = 152 + j * 42; const st = j === 0 ? OK : STYLE[j - 1]; const at = j === 0 ? 11 : 16 + (j - 1) * 10;
    s += `<g style="animation:${show(css, P, `lg${j}`, at)}">` + rect(c, lx, y, 20, 20, st) + text(c, lx + 32, y + 15, k.n, { size: 14, font: 'mono', fill: j === 1 || j === 2 ? C.accent : C.fg, weight: 500 }) + text(c, lx + 64, y + 9, k.name, { size: 10.5, fill: C.fg, weight: 500 }) + text(c, lx + 64, y + 24, k.sub, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>';
  });
  const by = 372;
  s += `<g style="animation:${show(css, P, 'bd', 58)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 432;
  s += tiles(c, css, P, ky, t.tiles, 62);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

const AGES = [3, 4, 6, 7, 8, 5, 4, 3];
const LATE = [12, 12, 11, 9, 5, 0];

export function ages(t, rtl) {
  const c = ctx(rtl); const P = 'pv'; const css = []; const H = 592;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const base = 330;
  // left: age of the forty machines today
  const bx = (i) => 96 + i * 72; const u = 18;
  s += `<g style="animation:${show(css, P, 'lt', 4)}">` + text(c, 80, 160, t.leftTitle, { size: 10.5, fill: C.fg, weight: 500 }) + line(c, 88, base, 660, base, { stroke: C.fg35 }) + t.buckets.map((n, i) => text(c, bx(i) + 26, base + 17, n, { size: 9, fill: C.fg70, anchor: 'middle' })).join('') + '</g>';
  AGES.forEach((v, i) => {
    const old = i >= 5; const at = 6 + i * 2.5;
    s += `<g style="${growY(css, P, `a${i}`, at, 2.5)}">` + rect(c, bx(i), base - v * u, 52, v * u, { stroke: old ? C.accent : C.fg70, fill: old ? 'rgba(242,181,68,0.22)' : C.fill }) + '</g>';
    s += `<g style="animation:${show(css, P, `av${i}`, at + 2.8)}">` + text(c, bx(i) + 26, base - v * u - 8, String(v), { size: 11, font: 'mono', fill: old ? C.accent : C.fg, weight: 500, anchor: 'middle' }) + '</g>';
  });
  s += `<g style="animation:${show(css, P, 'th', 29)}">` + line(c, bx(5) - 10, 176, bx(5) - 10, base, { stroke: C.accent, dash: '4 3' }) + text(c, bx(5) - 2, 190, t.threshold, { size: 9, font: 'mono', fill: C.accent, weight: 500 }) + '</g>';
  // right: machines older than five years at the start of each year, eight replaced a year
  const rx = (i) => 724 + i * 64; const ru = 12;
  s += `<g style="animation:${show(css, P, 'rt', 33)}">` + text(c, 716, 160, t.rightTitle, { size: 10.5, fill: C.fg, weight: 500 }) + line(c, 716, base, 1096, base, { stroke: C.fg35 }) + t.years.map((n, i) => text(c, rx(i) + 22, base + 17, n, { size: 9, font: 'mono', fill: C.fg70, anchor: 'middle' })).join('') + '</g>';
  LATE.forEach((v, i) => {
    const at = 36 + i * 4;
    if (v) s += `<g style="${growY(css, P, `r${i}`, at, 3)}">` + rect(c, rx(i), base - v * ru, 44, v * ru, { stroke: C.accent, fill: 'rgba(242,181,68,0.22)' }) + '</g>';
    s += `<g style="animation:${show(css, P, `rv${i}`, at + 3.2)}">` + text(c, rx(i) + 22, base - v * ru - 8, String(v), { size: 11, font: 'mono', fill: v ? C.accent : C.fg, weight: 500, anchor: 'middle' }) + '</g>';
  });
  const by = 372;
  s += `<g style="animation:${show(css, P, 'bd', 62)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10, font: 'mono', fill: C.fg }) + '</g>';
  const ky = 432;
  s += tiles(c, css, P, ky, t.tiles, 66);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    registre: {
      title: 'Le premier inventaire : 19 postes sur 40 demandent une action',
      alt: 'Quarante carrés, un par poste, le jour du premier inventaire. 21 postes sont en ordre. 7 ont un système qui n’est plus suivi par son éditeur et ne reçoit plus de correctifs. 5 n’ont reçu aucune mise à jour depuis plus de 90 jours. 4 n’ont pas d’utilisateur connu. 3 portables ne sont pas chiffrés. Au total, 19 postes sur 40 demandent une action.',
      header: 'Exemple construit · un parc de 40 postes, le jour du premier relevé · un carré par poste',
      legend: [
        { n: '21', name: 'en ordre', sub: 'système suivi, à jour, utilisateur connu' },
        { n: '7', name: 'système hors support', sub: 'ne reçoit plus de correctifs de sécurité' },
        { n: '5', name: 'en retard de mise à jour', sub: 'aucun correctif depuis plus de 90 jours' },
        { n: '4', name: 'sans utilisateur connu', sub: 'placard, ancien employé, poste « de passage »' },
        { n: '3', name: 'portables non chiffrés', sub: 'perdus, ils se lisent sans mot de passe' },
      ],
      band: 'Le premier relevé ne répare rien : il dit par où commencer. Ici, 19 postes sur 40 demandent une action, et l’on sait lesquels.',
      tiles: [
        { big: '40 postes, 1 registre', l1: 'une ligne par machine, relevée par un agent installé', l2: 'numéro, utilisateur, âge, système, mise à jour' },
        { big: '19 sur 40', l1: 'demandent une action dès le premier relevé', l2: '7 + 5 + 4 + 3, dans cet exemple', hot: true },
        { big: '1 étiquette par poste', l1: 'le même numéro sur la machine et dans le registre', l2: 'on parle du poste 0217, pas du « portable du fond »' },
      ],
      line1: 'On ne gère pas ce qu’on n’a pas compté : le registre vient avant les licences, les mises à jour et le renouvellement.',
      line2: 'Tenu à la main, il n’est juste que le jour où on l’écrit ; relevé par un agent sur chaque poste, il se met à jour seul.',
      note: 'Exemple construit · parc et répartition inventés ; faites le premier relevé avant de décider quoi que ce soit.',
    },
    ages: {
      title: 'L’âge du parc : 12 postes sur 40 ont dépassé cinq ans',
      alt: 'Deux graphiques. À gauche, l’âge des 40 postes : 3 de moins d’un an, 4 d’un à deux ans, 6 de deux à trois ans, 7 de trois à quatre ans, 8 de quatre à cinq ans, 5 de cinq à six ans, 4 de six à sept ans, 3 de plus de sept ans ; 12 ont dépassé cinq ans. À droite, le nombre de postes de plus de cinq ans au début de chaque année quand on remplace les 8 plus anciens par an : 12 en 2027, 12 en 2028, 11 en 2029, 9 en 2030, 5 en 2031, aucun en 2032.',
      header: 'Exemple construit · les mêmes 40 postes, classés par âge · puis ce que donne un remplacement de 8 postes par an',
      leftTitle: 'Âge des 40 postes aujourd’hui, en années', buckets: ['moins d’1', '1–2', '2–3', '3–4', '4–5', '5–6', '6–7', 'plus de 7'], threshold: 'plus de cinq ans : 12 postes',
      rightTitle: 'Postes de plus de cinq ans, à 8 remplacés par an', years: ['2027', '2028', '2029', '2030', '2031', '2032'],
      band: '40 postes ÷ 5 ans = 8 postes par an · en remplaçant chaque année les 8 plus anciens : 12, 12, 11, 9, 5, puis aucun poste de plus de cinq ans',
      tiles: [
        { big: '12 sur 40', l1: 'ont dépassé cinq ans aujourd’hui', l2: 'dont 3 de plus de sept ans' },
        { big: '8 par an', l1: '40 postes ÷ 5 ans : le même nombre chaque année', l2: 'les plus anciens d’abord', hot: true },
        { big: '0 en 2032', l1: 'le retard se résorbe en cinq ans, sans à-coup', l2: 'ensuite 8 atteignent cinq ans, 8 sont remplacés' },
      ],
      line1: 'Un parc renouvelé « quand ça casse » vieillit d’un bloc, puis se remplace d’un bloc, l’année où rien n’était prévu.',
      line2: 'Par cinquièmes, le nombre est le même chaque année, et aucun poste n’atteint l’âge où son système n’est plus suivi.',
      note: 'Exemple construit · âges inventés ; la durée du cycle, cinq ans ici, se choisit selon l’usage. Aucun prix de matériel n’est donné.',
    },
  },
  en: {
    registre: {
      title: 'The first inventory: 19 machines out of 40 need an action',
      alt: 'Forty squares, one per machine, on the day of the first inventory. 21 machines are in order. 7 run a system that is no longer supported by its publisher and no longer receives fixes. 5 have received no update for more than 90 days. 4 have no known user. 3 laptops are not encrypted. In total, 19 machines out of 40 need an action.',
      header: 'Constructed example · a fleet of 40 machines, on the day of the first inventory · one square per machine',
      legend: [
        { n: '21', name: 'in order', sub: 'supported system, up to date, known user' },
        { n: '7', name: 'system out of support', sub: 'no longer receives security fixes' },
        { n: '5', name: 'late on updates', sub: 'no fix for more than 90 days' },
        { n: '4', name: 'no known user', sub: 'cupboard, former employee, “spare” machine' },
        { n: '3', name: 'unencrypted laptops', sub: 'if lost, they can be read without a password' },
      ],
      band: 'The first inventory repairs nothing: it says where to start. Here, 19 machines out of 40 need an action, and you know which ones.',
      tiles: [
        { big: '40 machines, 1 register', l1: 'one line per machine, read by an installed agent', l2: 'number, user, age, system, last update' },
        { big: '19 out of 40', l1: 'need an action from the first inventory', l2: '7 + 5 + 4 + 3, in this example', hot: true },
        { big: '1 label per machine', l1: 'the same number on the machine and in the register', l2: 'you say machine 0217, not “the laptop at the back”' },
      ],
      line1: 'You cannot manage what you have not counted: the register comes before licences, updates and renewal.',
      line2: 'Kept by hand, it is only right on the day it is written; read by an agent on each machine, it updates itself.',
      note: 'Constructed example · invented fleet and breakdown; do the first inventory before deciding anything.',
    },
    ages: {
      title: 'The age of the fleet: 12 machines out of 40 are over five years old',
      alt: 'Two charts. On the left, the age of the 40 machines: 3 under one year, 4 of one to two years, 6 of two to three, 7 of three to four, 8 of four to five, 5 of five to six, 4 of six to seven, 3 over seven years; 12 are over five years old. On the right, the number of machines over five years old at the start of each year when the 8 oldest are replaced every year: 12 in 2027, 12 in 2028, 11 in 2029, 9 in 2030, 5 in 2031, none in 2032.',
      header: 'Constructed example · the same 40 machines, sorted by age · then what replacing 8 machines a year gives',
      leftTitle: 'Age of the 40 machines today, in years', buckets: ['under 1', '1–2', '2–3', '3–4', '4–5', '5–6', '6–7', 'over 7'], threshold: 'over five years: 12 machines',
      rightTitle: 'Machines over five years old, with 8 replaced a year', years: ['2027', '2028', '2029', '2030', '2031', '2032'],
      band: '40 machines ÷ 5 years = 8 machines a year · replacing the 8 oldest every year: 12, 12, 11, 9, 5, then no machine over five years old',
      tiles: [
        { big: '12 out of 40', l1: 'are over five years old today', l2: '3 of them over seven years' },
        { big: '8 a year', l1: '40 machines ÷ 5 years: the same number every year', l2: 'the oldest first', hot: true },
        { big: '0 in 2032', l1: 'the backlog is absorbed in five years, without a jolt', l2: 'then 8 reach five years, 8 are replaced' },
      ],
      line1: 'A fleet renewed “when it breaks” ages in one block, then is replaced in one block, in the year nothing was planned.',
      line2: 'By fifths, the number is the same every year, and no machine reaches the age where its system is no longer supported.',
      note: 'Constructed example · invented ages; the cycle length, five years here, is chosen according to use. No hardware price is given.',
    },
  },
  ar: {
    registre: {
      title: 'الجرد الأول: 19 حاسوباً من 40 تتطلب إجراءً',
      alt: 'أربعون مربعاً، واحد لكل حاسوب، يوم الجرد الأول. 21 حاسوباً في حالة سليمة. 7 بنظام لم يعد ناشره يتابعه ولا يتلقى تصحيحات. 5 لم تتلقَّ أي تحديث منذ أكثر من 90 يوماً. 4 دون مستعمل معروف. و3 حواسيب محمولة غير مشفَّرة. في المجموع، 19 حاسوباً من 40 تتطلب إجراءً.',
      header: 'مثال مركَّب · حظيرة من 40 حاسوباً، يوم الجرد الأول · مربع لكل حاسوب',
      legend: [
        { n: '21', name: 'في حالة سليمة', sub: 'نظام متابَع، محدَّث، ومستعمل معروف' },
        { n: '7', name: 'نظام خارج الدعم', sub: 'لم يعد يتلقى تصحيحات أمنية' },
        { n: '5', name: 'متأخرة في التحديث', sub: 'لا تصحيح منذ أكثر من 90 يوماً' },
        { n: '4', name: 'دون مستعمل معروف', sub: 'خزانة، عامل سابق، أو حاسوب «عابر»' },
        { n: '3', name: 'محمولة غير مشفَّرة', sub: 'إذا ضاعت، تُقرأ دون كلمة مرور' },
      ],
      band: 'الجرد الأول لا يصلح شيئاً: يقول من أين نبدأ. هنا، 19 حاسوباً من 40 تتطلب إجراءً، ونعرف أيّها.',
      tiles: [
        { big: '40 حاسوباً، سجل واحد', l1: 'سطر لكل حاسوب، يقرؤه برنامج منصَّب عليه', l2: 'الرقم، المستعمل، العمر، النظام، آخر تحديث' },
        { big: '19 من 40', l1: 'تتطلب إجراءً منذ الجرد الأول', l2: `${I('7 + 5 + 4 + 3')}، في هذا المثال`, hot: true },
        { big: 'ملصق لكل حاسوب', l1: 'الرقم نفسه على الحاسوب وفي السجل', l2: `نقول الحاسوب ${I('0217')}، لا «المحمول الذي في الخلف»` },
      ],
      line1: 'لا نسيّر ما لم نعدّه: السجل يأتي قبل الرخص والتحديثات والتجديد.',
      line2: 'ممسوكاً باليد، لا يصحّ إلا يوم يُكتب؛ ومقروءاً ببرنامج على كل حاسوب، يتحدَّث وحده.',
      note: 'مثال مركَّب · حظيرة وتوزيع مخترَعان؛ أنجزوا الجرد الأول قبل اتخاذ أي قرار.',
    },
    ages: {
      title: 'عمر الحظيرة: 12 حاسوباً من 40 تجاوزت خمس سنوات',
      alt: 'رسمان بيانيان. على اليمين، عمر الحواسيب الأربعين: 3 أقل من سنة، 4 بين سنة وسنتين، 6 بين سنتين وثلاث، 7 بين ثلاث وأربع، 8 بين أربع وخمس، 5 بين خمس وست، 4 بين ست وسبع، و3 أكثر من سبع سنوات؛ 12 تجاوزت خمس سنوات. وعلى اليسار، عدد الحواسيب التي تجاوزت خمس سنوات في بداية كل سنة حين تُستبدل الثمانية الأقدم كل سنة: 12 في 2027، 12 في 2028، 11 في 2029، 9 في 2030، 5 في 2031، ولا شيء في 2032.',
      header: 'مثال مركَّب · الحواسيب الأربعون نفسها، مرتَّبة حسب العمر · ثم ما يعطيه استبدال 8 حواسيب في السنة',
      leftTitle: 'عمر الحواسيب الأربعين اليوم، بالسنوات', buckets: ['أقل من 1', '1–2', '2–3', '3–4', '4–5', '5–6', '6–7', 'أكثر من 7'], threshold: 'أكثر من خمس سنوات: 12 حاسوباً',
      rightTitle: 'الحواسيب التي تجاوزت خمس سنوات، باستبدال 8 في السنة', years: ['2027', '2028', '2029', '2030', '2031', '2032'],
      band: `${I('40 ÷ 5 = 8')} حواسيب في السنة · باستبدال الثمانية الأقدم كل سنة: ${I('12, 12, 11, 9, 5')}، ثم لا حاسوب تجاوز خمس سنوات`,
      tiles: [
        { big: '12 من 40', l1: 'تجاوزت خمس سنوات اليوم', l2: 'منها 3 تجاوزت سبع سنوات' },
        { big: '8 في السنة', l1: `${I('40 ÷ 5')}: العدد نفسه كل سنة`, l2: 'الأقدم أولاً', hot: true },
        { big: '0 في 2032', l1: 'التأخر يُمتصّ في خمس سنوات، دون هزّة', l2: 'ثم 8 تبلغ خمس سنوات، و8 تُستبدل' },
      ],
      line1: 'الحظيرة التي تُجدَّد «حين تتعطل» تشيخ دفعة واحدة، ثم تُستبدل دفعة واحدة، في السنة التي لم يُحسب فيها شيء.',
      line2: 'بالأخماس، العدد هو نفسه كل سنة، ولا حاسوب يبلغ العمر الذي لا يُتابَع فيه نظامه.',
      note: 'مثال مركَّب · أعمار مخترَعة؛ ومدة الدورة، خمس سنوات هنا، تُختار حسب الاستعمال. ولا يُعطى أي سعر للعتاد.',
    },
  },
};
