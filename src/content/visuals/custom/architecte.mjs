// Bespoke animated figures for the 2027 "logiciel architecte et bureau d'études" page.
//  diffusion(): a distribution register. Six drawings, four recipients, the revision each one
//               last received against the current revision: 20 sends to track, 6 of them
//               behind, 2 where the structural contractor is two revisions behind.
//  reserves():  site reserves after ten visits: 86 raised, 61 lifted, 25 still open, of which
//               9 open for more than 30 days; open reserves by trade (7, 6, 5, 4, 3).
// Numbers and codes are drawn in their own text elements, direction="ltr".
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, open, heading, esc } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function pop(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scale(0)}${(at + 1.2).toFixed(1)}%,100%{transform:scale(1)}}`); return `transform-box:fill-box;transform-origin:center;animation:${P}-${id} ${LOOP}s linear infinite`; }
function growX(css, P, id, at, dur, rtl) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'} center;animation:${P}-${id} ${LOOP}s linear infinite`; }
const TINT = 'rgba(242,181,68,0.06)';
const DARK = '#0b0b0b';

function tiles(c, css, P, ky, ts, at0) {
  let s = '';
  ts.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, at0 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? TINT : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  return s;
}
const motionOff = (P) => `@media (prefers-reduced-motion: reduce){svg [style*="${P}-"]{animation:none !important}}`;
function ltrSpans(x, y, parts, size, anchor) {
  const L = ctx(false);
  const monoCss = /style="([^"]*)"/.exec(text(L, 0, 0, 'x', { size, font: 'mono' }))[1];
  return `<text x="${x}" y="${y}" style="${monoCss}" direction="ltr" text-anchor="${anchor}">` + parts.map(([str, fill, bold]) => (str ? `<tspan fill="${fill}" style="font-weight:${bold ? 500 : 300}">${esc(str)}</tspan>` : '')).join('') + '</text>';
}
const num = (c, x, y, str, o = {}) => ltrSpans(c.X(x), y, [[str, o.fill || C.fg, o.bold]], o.size || 10.5, 'middle');
// a Latin code drawn left-to-right, aligned on the reading-start side
const code = (c, x, y, str, o = {}) => ltrSpans(c.X(x), y, [[str, o.fill || C.fg, o.bold]], o.size || 10, c.rtl ? 'end' : 'start');
const poly = (c, pts, color, sw, dash) => `<polyline points="${pts.map(([x, y]) => `${c.X(x)},${y}`).join(' ')}" fill="none" stroke="${color}" stroke-width="${sw || 1}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;

// drawings: code, current revision, revision last received by each of four recipients ('' = not concerned)
const PLANS = [
  { code: 'A-101', cur: 'C', got: ['C', 'C', 'C', 'B'] },
  { code: 'A-201', cur: 'D', got: ['D', 'B', 'D', 'C'] },
  { code: 'A-202', cur: 'D', got: ['D', 'D', 'D', 'D'] },
  { code: 'A-301', cur: 'B', got: ['B', 'B', 'A', ''] },
  { code: 'A-401', cur: 'C', got: ['C', 'C', '', ''] },
  { code: 'S-201', cur: 'E', got: ['D', 'C', 'E', ''] },
];
const lag = (cur, g) => cur.charCodeAt(0) - g.charCodeAt(0);
const COLX = [610, 750, 890, 1030];

export function diffusion(t, rtl) {
  const c = ctx(rtl); const P = 'dv'; const css = []; const H = 686;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  let frame = rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + text(c, 96, 174, t.colPlan, { size: 9.5, fill: C.fg55 }) + text(c, 470, 174, t.colCur, { size: 9.5, fill: C.fg55, anchor: 'middle' });
  COLX.forEach((x, k) => { frame += text(c, x, 174, t.recipients[k], { size: 9.5, fill: C.fg55, anchor: 'middle' }); });
  frame += poly(c, [[96, 186], [1104, 186]], C.line2);
  s += `<g style="animation:${show(css, P, 'pa', 3)}">${frame}</g>`;
  PLANS.forEach((p, i) => {
    const y = 214 + i * 40; const at = 6 + i * 3;
    let row = code(c, 96, y, p.code, { size: 10.5, bold: true, fill: C.fg }) + text(c, 152, y, t.plans[i], { size: 10.5, fill: C.fg }) + rect(c, 456, y - 17, 28, 24, { stroke: C.fg, fill: C.fg }) + num(c, 470, y, p.cur, { size: 11.5, bold: true, fill: DARK });
    if (i < PLANS.length - 1) row += poly(c, [[96, y + 16], [1104, y + 16]], C.line);
    s += `<g style="animation:${show(css, P, `r${i}`, at)}">${row}</g>`;
    p.got.forEach((g, k) => {
      const x = COLX[k];
      if (!g) { s += `<g style="animation:${show(css, P, `c${i}${k}`, at + 0.8)}">` + num(c, x, y, '–', { size: 11, fill: C.fg35 }) + '</g>'; return; }
      const d = lag(p.cur, g);
      const box = d === 0 ? { stroke: C.fg55, fill: C.fill } : d === 1 ? { stroke: C.accent, fill: TINT } : { stroke: C.accent, fill: C.accent };
      const col = d === 0 ? C.fg : d === 1 ? C.accent : DARK;
      const cell = rect(c, x - 28, y - 17, 56, 24, box) + num(c, x, y, d ? `${g}  −${d}` : g, { size: 11, bold: d > 0, fill: col });
      s += d ? `<g style="${pop(css, P, `c${i}${k}`, 28 + i * 1.6 + k * 0.4)}">${cell}</g>` : `<g style="animation:${show(css, P, `c${i}${k}`, at + 0.8)}">${cell}</g>`;
    });
  });
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bd', 40)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 44);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// open reserves by trade: open for more than 30 days, open for less
const LOTS = [{ old: 3, recent: 4 }, { old: 2, recent: 4 }, { old: 2, recent: 3 }, { old: 1, recent: 3 }, { old: 1, recent: 2 }];
const RAISED = 86; const LIFTED = 61;

export function reserves(t, rtl) {
  const c = ctx(rtl); const P = 'rv'; const css = []; const H = 686;
  const openAll = LOTS.reduce((a, l) => a + l.old + l.recent, 0);
  const oldAll = LOTS.reduce((a, l) => a + l.old, 0);
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + text(c, 96, 172, t.leftTitle, { size: 11, fill: C.fg, weight: 500 }) + text(c, 400, 172, t.chartTitle, { size: 11, fill: C.fg, weight: 500 }) + poly(c, [[376, 160], [376, 438]], C.line2) + '</g>';
  // the three counts
  const count = (y, value, l1, l2, id, at, hot) => `<g style="${pop(css, P, id, at)}">` + rect(c, 96, y - 30, 264, 62, { stroke: hot ? C.accent : C.line2, fill: hot ? TINT : C.fill }) + num(c, 140, y + 8, String(value), { size: 22, bold: true, fill: hot ? C.accent : C.fg }) + text(c, 186, y - 4, l1, { size: 10.5, fill: hot ? C.accent : C.fg, weight: 500 }) + text(c, 186, y + 13, l2, { size: 9, fill: C.fg70 }) + '</g>';
  s += count(226, RAISED, t.raised1, t.raised2, 'n1', 5, false);
  s += count(300, LIFTED, t.lifted1, t.lifted2, 'n2', 8, false);
  s += count(374, openAll, t.open1, t.open2.replace('{n}', String(oldAll)), 'n3', 11, true);
  // open reserves by trade
  const BX = 560; const U = 62;
  LOTS.forEach((l, i) => {
    const y = 200 + i * 44; const at = 16 + i * 3.2;
    s += `<g style="animation:${show(css, P, `l${i}`, at)}">` + text(c, 400, y + 17, t.lots[i], { size: 10.5, fill: C.fg }) + '</g>';
    s += `<g style="${growX(css, P, `o${i}`, at + 0.5, 1.6, rtl)}">` + rect(c, BX, y, l.old * U, 26, { stroke: C.accent, fill: C.accent }) + '</g>';
    s += `<g style="${growX(css, P, `r${i}`, at + 1.6, 1.6, rtl)}">` + rect(c, BX + l.old * U, y, l.recent * U, 26, { stroke: C.fg55, fill: C.fg35 }) + '</g>';
    s += `<g style="animation:${show(css, P, `v${i}`, at + 2.8)}">` + num(c, BX + l.old * U / 2, y + 17, String(l.old), { size: 10.5, bold: true, fill: DARK }) + num(c, BX + l.old * U + l.recent * U / 2, y + 17, String(l.recent), { size: 10.5, bold: true, fill: C.fg }) + num(c, BX + (l.old + l.recent) * U + 22, y + 17, String(l.old + l.recent), { size: 12, bold: true, fill: C.fg }) + '</g>';
  });
  s += `<g style="animation:${show(css, P, 'lg', 34)}">` + rect(c, 400, 425, 12, 12, { stroke: C.accent, fill: C.accent }) + text(c, 420, 435, t.legOld, { size: 9.5, fill: C.accent }) + rect(c, 700, 425, 12, 12, { stroke: C.fg55, fill: C.fg35 }) + text(c, 720, 435, t.legRecent, { size: 9.5, fill: C.fg70 }) + '</g>';
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bd', 38)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 42);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    diffusion: {
      title: 'Qui a quel indice de quel plan',
      alt: 'Un registre de diffusion : six plans, quatre destinataires, et pour chacun le dernier indice reçu comparé à l’indice en cours. Sur vingt envois à suivre, six sont en retard. L’entreprise de gros œuvre a deux plans avec deux indices de retard : le plan du rez-de-chaussée, à l’indice B alors que l’indice en cours est D, et le plan de coffrage, à l’indice C alors que l’indice en cours est E.',
      header: 'Exemple construit · un projet, six plans, quatre destinataires, le dernier indice reçu par chacun',
      colPlan: 'Plan', colCur: 'Indice en cours',
      recipients: ['Maître d’ouvrage', 'Entreprise gros œuvre', 'Bureau de contrôle', 'Lot électricité'],
      plans: ['Plan de masse', 'Plan du rez-de-chaussée', 'Plan de l’étage', 'Coupe AA', 'Façade sud', 'Coffrage du plancher haut'],
      band: 'Le plan à jour existe ; la question est de savoir qui l’a reçu. Sans registre, on l’apprend le jour où un ouvrage est exécuté sur un plan périmé.',
      tiles: [
        { big: '20 envois', l1: 'à suivre pour six plans et quatre destinataires', l2: 'chaque indice, chaque destinataire' },
        { big: '6 en retard', l1: 'un destinataire n’a pas le dernier indice', l2: 'dont 2 avec deux indices de retard', hot: true },
        { big: '2 plans', l1: 'que le gros œuvre exécute sur un ancien indice', l2: 'rez-de-chaussée et coffrage' },
      ],
      line1: 'Chaque envoi laisse une ligne : quel plan, quel indice, à qui, quand, et l’accusé de réception. Le tableau se remplit tout seul.',
      line2: 'Quand un plan change d’indice, le logiciel liste celles et ceux qui ont l’ancien et propose l’envoi : personne n’a à s’en souvenir.',
      note: 'Exemple construit · plans, indices et destinataires fictifs.',
    },
    reserves: {
      title: 'Les réserves du chantier, après dix visites',
      alt: 'Après dix visites de chantier, 86 réserves ont été relevées, 61 levées et vérifiées, et 25 restent ouvertes, dont 9 depuis plus de trente jours. Par lot : gros œuvre 7 dont 3 anciennes, électricité 6 dont 2, plomberie 5 dont 2, menuiserie 4 dont 1, peinture 3 dont 1.',
      header: 'Exemple construit · un chantier, dix visites, les réserves suivies une par une',
      leftTitle: 'Depuis le début du chantier', chartTitle: 'Réserves encore ouvertes, par lot',
      raised1: 'réserves relevées', raised2: 'en dix visites de chantier',
      lifted1: 'levées', lifted2: 'vérifiées sur place, photo à l’appui',
      open1: 'encore ouvertes', open2: 'dont {n} depuis plus de 30 jours',
      lots: ['Gros œuvre', 'Électricité', 'Plomberie', 'Menuiserie', 'Peinture'],
      legOld: 'ouvertes depuis plus de 30 jours', legRecent: 'ouvertes depuis moins de 30 jours',
      band: 'Une réserve notée dans un compte rendu se perd ; une réserve avec un lot, une photo et une date se suit jusqu’à sa levée.',
      tiles: [
        { big: '25 ouvertes', l1: 'sur 86 relevées en dix visites', l2: '61 levées et vérifiées' },
        { big: '9 anciennes', l1: 'ouvertes depuis plus de trente jours', l2: 'celles qui retarderont la fin du chantier', hot: true },
        { big: '5 lots', l1: 'chacun reçoit sa liste, pas tout le compte rendu', l2: 'une réserve : un lot, une photo, une date' },
      ],
      line1: 'À chaque visite, les réserves se saisissent sur place, au téléphone : un lieu, un lot, une photo, une échéance.',
      line2: 'Le compte rendu se génère en sortant du chantier, et chaque entreprise reçoit la liste de ce qui la concerne, avec l’ancienneté.',
      note: 'Exemple construit · chantier, lots et nombres fictifs.',
    },
  },
  en: {
    diffusion: {
      title: 'Who has which revision of which drawing',
      alt: 'A distribution register: six drawings, four recipients, and for each the last revision received against the current revision. Out of twenty sends to track, six are behind. The structural contractor has two drawings two revisions behind: the ground floor plan, at revision B while the current one is D, and the formwork drawing, at revision C while the current one is E.',
      header: 'Constructed example · one project, six drawings, four recipients, the last revision each received',
      colPlan: 'Drawing', colCur: 'Current revision',
      recipients: ['Client', 'Structural contractor', 'Inspection office', 'Electrical trade'],
      plans: ['Site plan', 'Ground floor plan', 'First floor plan', 'Section AA', 'South elevation', 'Formwork, upper floor slab'],
      band: 'The up-to-date drawing exists; the question is who received it. Without a register, you find out the day something is built from a superseded drawing.',
      tiles: [
        { big: '20 sends', l1: 'to track for six drawings and four recipients', l2: 'each revision, each recipient' },
        { big: '6 behind', l1: 'a recipient does not have the latest revision', l2: '2 of them two revisions behind', hot: true },
        { big: '2 drawings', l1: 'the structural contractor builds from an old revision', l2: 'ground floor and formwork' },
      ],
      line1: 'Each send leaves a line: which drawing, which revision, to whom, when, and the acknowledgement. The table fills itself.',
      line2: 'When a drawing changes revision, the software lists those who hold the old one and proposes the send: nobody has to remember.',
      note: 'Constructed example · fictitious drawings, revisions and recipients.',
    },
    reserves: {
      title: 'Site snags, after ten visits',
      alt: 'After ten site visits, 86 snags have been raised, 61 cleared and checked, and 25 are still open, 9 of them for more than thirty days. By trade: structure 7 of which 3 old, electrical 6 of which 2, plumbing 5 of which 2, joinery 4 of which 1, painting 3 of which 1.',
      header: 'Constructed example · one site, ten visits, snags tracked one by one',
      leftTitle: 'Since the start of the site', chartTitle: 'Snags still open, by trade',
      raised1: 'snags raised', raised2: 'in ten site visits',
      lifted1: 'cleared', lifted2: 'checked on site, with a photo',
      open1: 'still open', open2: '{n} of them for more than 30 days',
      lots: ['Structure', 'Electrical', 'Plumbing', 'Joinery', 'Painting'],
      legOld: 'open for more than 30 days', legRecent: 'open for less than 30 days',
      band: 'A snag noted in a site report gets lost; a snag with a trade, a photo and a date is followed until it is cleared.',
      tiles: [
        { big: '25 open', l1: 'out of 86 raised in ten visits', l2: '61 cleared and checked' },
        { big: '9 old ones', l1: 'open for more than thirty days', l2: 'the ones that will delay the end of the site', hot: true },
        { big: '5 trades', l1: 'each receives its own list, not the whole report', l2: 'one snag: a trade, a photo, a date' },
      ],
      line1: 'At each visit, snags are entered on the spot, on the phone: a place, a trade, a photo, a due date.',
      line2: 'The site report is generated on leaving the site, and each contractor receives the list of what concerns it, with its age.',
      note: 'Constructed example · fictitious site, trades and numbers.',
    },
  },
  ar: {
    diffusion: {
      title: 'من عنده أي مؤشّر من أي مخطط',
      alt: 'سجل توزيع: ستة مخططات، أربعة مستلمين، ولكل واحد آخر مؤشّر استلمه مقارنة بالمؤشّر الحالي. من عشرين إرسالاً يجب تتبّعها، ستة متأخرة. ومقاولة الأشغال الكبرى عندها مخططان بتأخر مؤشّرين: مخطط الطابق الأرضي، بالمؤشّر B والحالي D، ومخطط القوالب، بالمؤشّر C والحالي E.',
      header: 'مثال مركَّب · مشروع واحد، ستة مخططات، أربعة مستلمين، وآخر مؤشّر استلمه كل واحد',
      colPlan: 'المخطط', colCur: 'المؤشّر الحالي',
      recipients: ['صاحب المشروع', 'مقاولة الأشغال الكبرى', 'مكتب المراقبة', 'حصة الكهرباء'],
      plans: ['مخطط الكتلة', 'مخطط الطابق الأرضي', 'مخطط الطابق الأول', 'المقطع', 'الواجهة الجنوبية', 'قوالب السقف العلوي'],
      band: 'المخطط المحيَّن موجود؛ والسؤال من استلمه. ودون سجل، يُعرف ذلك يوم يُنجَز عمل على مخطط قديم.',
      tiles: [
        { big: '20 إرسالاً', l1: 'يجب تتبّعها لستة مخططات وأربعة مستلمين', l2: 'كل مؤشّر، وكل مستلم' },
        { big: '6 متأخرة', l1: 'مستلم ليس عنده آخر مؤشّر', l2: 'منها 2 بتأخر مؤشّرين', hot: true },
        { big: 'مخططان', l1: 'تنفّذهما مقاولة الأشغال الكبرى على مؤشّر قديم', l2: 'الطابق الأرضي والقوالب' },
      ],
      line1: 'كل إرسال يترك سطراً: أي مخطط، أي مؤشّر، لمن، متى، وإشعار الاستلام. والجدول يمتلئ وحده.',
      line2: 'حين يتغيّر مؤشّر مخطط، يسرد البرنامج من عندهم القديم ويقترح الإرسال: لا أحد يحتاج أن يتذكّر.',
      note: 'مثال مركَّب · مخططات ومؤشّرات ومستلمون خياليون.',
    },
    reserves: {
      title: 'تحفّظات الورشة، بعد عشر زيارات',
      alt: 'بعد عشر زيارات للورشة، سُجّل 86 تحفّظاً، رُفع 61 وتم التحقق منها، وبقي 25 مفتوحاً، منها 9 منذ أكثر من ثلاثين يوماً. حسب الحصة: الأشغال الكبرى 7 منها 3 قديمة، الكهرباء 6 منها 2، الترصيص 5 منها 2، النجارة 4 منها 1، والدهن 3 منها 1.',
      header: 'مثال مركَّب · ورشة واحدة، عشر زيارات، والتحفّظات متابَعة واحداً واحداً',
      leftTitle: 'منذ بداية الورشة', chartTitle: 'التحفّظات المفتوحة، حسب الحصة',
      raised1: 'تحفّظاً مسجَّلاً', raised2: 'في عشر زيارات للورشة',
      lifted1: 'مرفوعاً', lifted2: 'تم التحقق منها في المكان، بصورة',
      open1: 'ما زالت مفتوحة', open2: 'منها {n} منذ أكثر من 30 يوماً',
      lots: ['الأشغال الكبرى', 'الكهرباء', 'الترصيص', 'النجارة', 'الدهن'],
      legOld: 'مفتوحة منذ أكثر من 30 يوماً', legRecent: 'مفتوحة منذ أقل من 30 يوماً',
      band: 'تحفّظ مكتوب في محضر يضيع؛ وتحفّظ بحصة وصورة وتاريخ يُتابَع حتى رفعه.',
      tiles: [
        { big: '25 مفتوحاً', l1: 'من 86 مسجَّلاً في عشر زيارات', l2: '61 مرفوعاً ومتحقَّقاً منه' },
        { big: '9 قديمة', l1: 'مفتوحة منذ أكثر من ثلاثين يوماً', l2: 'وهي التي ستؤخّر نهاية الورشة', hot: true },
        { big: '5 حصص', l1: 'كل واحدة تستلم قائمتها، لا المحضر كله', l2: 'تحفّظ: حصة، صورة، وتاريخ' },
      ],
      line1: 'في كل زيارة، تُدخَل التحفّظات في المكان، على الهاتف: موضع، حصة، صورة، وأجل.',
      line2: 'المحضر يُولَّد عند الخروج من الورشة، وكل مقاولة تستلم قائمة ما يخصّها، مع أقدميته.',
      note: 'مثال مركَّب · ورشة وحصص وأعداد خيالية.',
    },
  },
};
