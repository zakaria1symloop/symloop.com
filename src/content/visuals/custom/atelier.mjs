// Bespoke animated figures for the 2027 "logiciel de gestion de production" page.
//  poste():  one machine over one shift, 07:00 to 15:00, minute by minute: changeover
//            45 min, breakdown 35, waiting for material 25, break 30, running 345.
//            Then the same 480 minutes regrouped: 262 useful, 69 lost to slow running,
//            14 to scrap, 105 to stops, 30 of break; and the three ratios
//            76.7 % x 80 % x 95 % = 58.3 %.
//  causes(): one month of stops recorded at the station, sorted by duration: seven
//            causes, 3 800 minutes; the first three make 74 %.
// Numbers are drawn in their own text elements, direction="ltr".
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
const grp = (n, sep) => String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, sep);
const poly = (c, pts, color, sw, dash) => `<polyline points="${pts.map(([x, y]) => `${c.X(x)},${y}`).join(' ')}" fill="none" stroke="${color}" stroke-width="${sw || 1}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;

// one shift on one machine, in minutes from 07:00
const SEG = [['chg', 45], ['run', 155], ['panne', 35], ['run', 35], ['pause', 30], ['run', 60], ['att', 25], ['run', 95]];
const X0 = 110; const PXM = 2;
const STYLE = {
  run: { stroke: C.fg, fill: C.fg },
  chg: { stroke: C.accent, fill: TINT },
  panne: { stroke: C.accent, fill: C.accent },
  att: { stroke: C.accent, fill: TINT, dash: '3 3' },
  pause: { stroke: C.fg35, fill: C.fill },
};
// the same 480 minutes regrouped: useful, slow running, scrap, stops, break
const GROUPS = [262.2, 69, 13.8, 105, 30];

export function poste(t, rtl) {
  const c = ctx(rtl); const P = 'gp'; const css = []; const H = 686; const dec = t.dec;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  let frame = rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + text(c, 96, 172, t.rowA, { size: 11, fill: C.fg, weight: 500 });
  for (let h = 7; h <= 15; h++) { const x = X0 + (h - 7) * 60 * PXM; frame += poly(c, [[x, 246], [x, 252]], C.fg55) + num(c, x, 266, `${String(h).padStart(2, '0')}:00`, { size: 8.5, fill: C.fg55 }); }
  s += `<g style="animation:${show(css, P, 'pa', 3)}">${frame}</g>`;
  let x = X0; let k = 0;
  SEG.forEach(([kind, m], i) => {
    const w = m * PXM; const at = 5 + i * 2.2;
    s += `<g style="${growX(css, P, `s${i}`, at, 2, rtl)}">` + rect(c, x, 212, w, 32, STYLE[kind]) + '</g>';
    if (kind !== 'run') { s += `<g style="animation:${show(css, P, `l${i}`, at + 2)}">` + text(c, x, 204, t.lab[kind], { size: 9, fill: kind === 'pause' ? C.fg55 : C.accent }) + '</g>'; k++; }
    x += w;
  });
  // the same minutes, regrouped
  s += `<g style="animation:${show(css, P, 'rb', 25)}">` + text(c, 96, 300, t.rowB, { size: 11, fill: C.fg, weight: 500 }) + '</g>';
  const gst = [{ stroke: C.fg, fill: C.fg }, { stroke: C.fg55, fill: C.fg55 }, { stroke: C.fg55, fill: C.fg35 }, { stroke: C.accent, fill: TINT }, { stroke: C.fg35, fill: C.fill }];
  const gcol = ['#000', C.fg, C.fg, C.accent, C.fg55];
  let gx = X0;
  GROUPS.forEach((m, i) => {
    const w = m * PXM; const at = 27 + i * 2.2;
    s += `<g style="${growX(css, P, `g${i}`, at, 2, rtl)}">` + rect(c, gx, 312, w, 30, gst[i]) + '</g>';
    if (w > 40) s += `<g style="animation:${show(css, P, `n${i}`, at + 2)}">` + num(c, gx + w / 2, 332, String(Math.round(m)), { size: 11.5, bold: true, fill: gcol[i] }) + '</g>';
    const lx = X0 + i * 192;
    s += `<g style="animation:${show(css, P, `q${i}`, at + 2)}">` + rect(c, lx, 356, 11, 11, gst[i]) + text(c, lx + 18, 366, t.groups[i], { size: 9.5, fill: C.fg70 }) + num(c, lx + 160, 366, String(Math.round(m)), { size: 10.5, bold: true, fill: i === 3 ? C.accent : C.fg }) + '</g>';
    gx += w;
  });
  // availability x performance x quality = OEE
  const d1 = (v) => v.toFixed(1).replace('.', dec).replace(`${dec}0`, '') + t.pc;
  const ratios = [[t.rA, d1(76.7)], [t.rP, d1(80)], [t.rQ, d1(95)], [t.rT, d1(58.3)]];
  ratios.forEach(([label, value], i) => {
    const bx = X0 + i * 246; const hot = i === 3;
    s += `<g style="${pop(css, P, `r${i}`, 40 + i * 2)}">` + rect(c, bx, 388, 200, 46, { stroke: hot ? C.accent : C.fg55, fill: hot ? TINT : C.fill }) + text(c, bx + 10, 405, label, { size: 8.5, font: 'mono', fill: C.fg55 }) + ltrSpans(c.RX(bx, 200) + 100, 425, [[value, hot ? C.accent : C.fg, true]], 14, 'middle') + '</g>';
    if (i < 3) s += `<g style="animation:${show(css, P, `o${i}`, 41 + i * 2)}">` + ltrSpans(c.X(bx + 223), 417, [[i === 2 ? '=' : '×', C.fg70, false]], 15, 'middle') + '</g>';
  });
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bd', 50)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 54);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// one month of stops on one machine, minutes per cause, sorted
const CAUSES = [1240, 860, 720, 410, 260, 180, 130];

export function causes(t, rtl) {
  const c = ctx(rtl); const P = 'gk'; const css = []; const H = 686; const sep = t.sep;
  const total = CAUSES.reduce((a, b) => a + b, 0);
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const hd = (x, str) => text(c, x, 172, str, { size: 8.5, font: 'mono', fill: C.fg55 });
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + hd(96, t.colCause) + hd(340, t.colMin) + hd(990, t.colCum) + '</g>';
  let cum = 0;
  CAUSES.forEach((m, i) => {
    const y = 186 + i * 36; const w = m * 0.42; const at = 5 + i * 4; const top = i < 3;
    cum += m; const pct = Math.round((cum / total) * 100);
    s += `<g style="animation:${show(css, P, `l${i}`, at)}">` + text(c, 96, y + 17, t.causes[i], { size: 10.5, fill: top ? C.fg : C.fg70, weight: top ? 500 : 300 }) + '</g>';
    s += `<g style="${growX(css, P, `b${i}`, at + 0.5, 2.5, rtl)}">` + rect(c, 340, y, w, 24, { stroke: top ? C.accent : C.fg55, fill: top ? C.accent : C.fg35 }) + '</g>';
    s += `<g style="animation:${show(css, P, `v${i}`, at + 3)}">` + num(c, 340 + w + 34, y + 17, grp(m, sep), { size: 11, bold: true, fill: top ? C.accent : C.fg }) + '</g>';
    s += `<g style="${pop(css, P, `c${i}`, at + 3.5)}">` + num(c, 1010, y + 17, `${pct}${t.pc}`, { size: 12, bold: i === 2, fill: i === 2 ? C.accent : top ? C.fg : C.fg55 }) + '</g>';
  });
  s += `<g style="animation:${show(css, P, 'br', 36)}">` + poly(c, [[1058, 190], [1068, 190], [1068, 278], [1058, 278]], C.accent, 1.5) + '</g>';
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bd', 40)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 44);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    poste: {
      dec: ',', pc: ' %',
      title: 'Huit heures de poste, minute par minute',
      alt: 'Un poste de huit heures sur une machine, de 07:00 à 15:00 : 45 minutes de changement de série, 35 de panne, 25 d’attente de matière, 30 de pause et 345 de marche. Regroupées, les 480 minutes donnent 262 minutes de production utile, 69 perdues en ralentissements, 14 en rebuts, 105 en arrêts et 30 de pause. Disponibilité 76,7 %, performance 80 %, qualité 95 %, soit un TRS de 58,3 %.',
      header: 'Exemple construit · une machine, un poste de 07:00 à 15:00, cadence nominale de 10 pièces par minute',
      rowA: 'Le poste tel qu’il s’est passé', rowB: 'Les mêmes 480 minutes, regroupées (en minutes)',
      lab: { chg: 'changement de série · 45 min', panne: 'panne · 35 min', pause: 'pause · 30 min', att: 'attente matière · 25 min' },
      groups: ['production utile', 'ralentissements', 'rebuts', 'arrêts', 'pause'],
      rA: 'disponibilité', rP: 'performance', rQ: 'qualité', rT: 'TRS',
      band: 'Huit heures de poste ne font pas huit heures de production : arrêts, ralentissements et rebuts en prennent chacun une part, et chacune a son remède.',
      tiles: [
        { big: '4 h 22', l1: 'de production utile sur 8 h de poste', l2: '2 622 bonnes pièces, à 10 par minute' },
        { big: '58,3 %', l1: 'le TRS du poste', l2: '2 622 bonnes pièces sur 4 500 possibles', hot: true },
        { big: '105 min', l1: 'd’arrêts notés, cause par cause', l2: 'changement 45, panne 35, attente 25' },
      ],
      line1: 'Sans relevé, on ne voit que le total du soir : 2 622 pièces. Avec le relevé au poste, on voit où sont passées les 1 878 autres.',
      line2: 'Le TRS n’est pas une note donnée à l’équipe : c’est une carte des pertes. La question utile est « laquelle attaquer d’abord ? ».',
      note: 'Exemple construit · chiffres fictifs ; ralentissements = micro-arrêts et vitesse réduite.',
    },
    causes: {
      sep: ' ', pc: ' %',
      title: 'Un mois d’arrêts, classés par durée',
      alt: 'Un mois d’arrêts relevés au poste sur une machine, 3 800 minutes en sept causes : changement de série 1 240, attente de matière 860, panne 720, réglage 410, attente du contrôle qualité 260, nettoyage 180, autres 130. Les trois premières causes font 74 % du temps d’arrêt.',
      header: 'Exemple construit · une machine, un mois, chaque arrêt noté au poste avec sa cause',
      colCause: 'cause d’arrêt', colMin: 'minutes dans le mois', colCum: 'cumul',
      causes: ['Changement de série', 'Attente de matière', 'Panne', 'Réglage', 'Attente du contrôle qualité', 'Nettoyage', 'Autres'],
      band: 'Un mois d’arrêts relevés au poste, classés par durée : trois causes sur sept font les trois quarts du temps perdu.',
      tiles: [
        { big: '3 causes sur 7', l1: 'font 74 % du temps d’arrêt', l2: 'changement, attente matière, panne', hot: true },
        { big: '63 h', l1: 'd’arrêt dans le mois, sur une machine', l2: '3 800 minutes relevées au poste' },
        { big: '19 %', l1: 'la part des pannes : troisième cause', l2: 'avant le relevé, on disait « les pannes »' },
      ],
      line1: 'Les deux premières causes ne relèvent pas de la maintenance : un changement de série se prépare, une matière s’approvisionne avant.',
      line2: 'Sans relevé, chacun a sa cause favorite. Avec, la discussion commence par la plus longue barre.',
      note: 'Exemple construit · minutes fictives ; les causes se choisissent avec l’atelier : sept ou huit, pas trente.',
    },
  },
  en: {
    poste: {
      dec: '.', pc: '%',
      title: 'An eight-hour shift, minute by minute',
      alt: 'An eight-hour shift on one machine, 07:00 to 15:00: 45 minutes of changeover, 35 of breakdown, 25 waiting for material, 30 of break and 345 running. Regrouped, the 480 minutes give 262 minutes of useful production, 69 lost to slow running, 14 to scrap, 105 to stops and 30 of break. Availability 76.7%, performance 80%, quality 95%, that is an OEE of 58.3%.',
      header: 'Constructed example · one machine, one shift from 07:00 to 15:00, nominal rate of 10 pieces a minute',
      rowA: 'The shift as it happened', rowB: 'The same 480 minutes, regrouped (in minutes)',
      lab: { chg: 'changeover · 45 min', panne: 'breakdown · 35 min', pause: 'break · 30 min', att: 'waiting for material · 25 min' },
      groups: ['useful production', 'slow running', 'scrap', 'stops', 'break'],
      rA: 'availability', rP: 'performance', rQ: 'quality', rT: 'OEE',
      band: 'An eight-hour shift is not eight hours of production: stops, slow running and scrap each take a share, and each has its remedy.',
      tiles: [
        { big: '4 h 22', l1: 'of useful production in an 8 h shift', l2: '2,622 good pieces, at 10 a minute' },
        { big: '58.3%', l1: 'the shift’s OEE', l2: '2,622 good pieces out of 4,500 possible', hot: true },
        { big: '105 min', l1: 'of stops recorded, cause by cause', l2: 'changeover 45, breakdown 35, waiting 25' },
      ],
      line1: 'Without a record, you only see the evening total: 2,622 pieces. With the record at the station, you see where the other 1,878 went.',
      line2: 'OEE is not a mark given to the team: it is a map of losses. The useful question is “which one do we tackle first?”.',
      note: 'Constructed example · fictitious figures; slow running = minor stops and reduced speed.',
    },
    causes: {
      sep: ',', pc: '%',
      title: 'One month of stops, sorted by duration',
      alt: 'One month of stops recorded at the station on one machine, 3,800 minutes in seven causes: changeover 1,240, waiting for material 860, breakdown 720, adjustment 410, waiting for quality control 260, cleaning 180, other 130. The first three causes make 74% of the stopped time.',
      header: 'Constructed example · one machine, one month, each stop recorded at the station with its cause',
      colCause: 'cause of the stop', colMin: 'minutes in the month', colCum: 'cumulative',
      causes: ['Changeover', 'Waiting for material', 'Breakdown', 'Adjustment', 'Waiting for quality control', 'Cleaning', 'Other'],
      band: 'One month of stops recorded at the station, sorted by duration: three causes out of seven make three quarters of the time lost.',
      tiles: [
        { big: '3 causes of 7', l1: 'make 74% of the stopped time', l2: 'changeover, waiting for material, breakdown', hot: true },
        { big: '63 h', l1: 'stopped in the month, on one machine', l2: '3,800 minutes recorded at the station' },
        { big: '19%', l1: 'the share of breakdowns: third cause', l2: 'before the record, people said “breakdowns”' },
      ],
      line1: 'The first two causes are not maintenance matters: a changeover is prepared, a material is supplied beforehand.',
      line2: 'Without a record, everyone has a favourite cause. With one, the discussion starts with the longest bar.',
      note: 'Constructed example · fictitious minutes; the causes are chosen with the workshop: seven or eight, not thirty.',
    },
  },
  ar: {
    poste: {
      dec: ',', pc: ' %',
      title: 'مناوبة من ثماني ساعات، دقيقة بدقيقة',
      alt: 'مناوبة من ثماني ساعات على آلة واحدة، من السابعة إلى الثالثة بعد الظهر: 45 دقيقة لتغيير السلسلة، 35 للعطل، 25 لانتظار المادة، 30 للاستراحة، و345 للاشتغال. وإذا جُمعت، أعطت الدقائق الـ480: 262 دقيقة إنتاج نافع، 69 ضائعة في التباطؤ، 14 في المرفوضات، 105 في التوقفات، و30 للاستراحة. التوفر 76,7 بالمئة، الأداء 80 بالمئة، الجودة 95 بالمئة، أي معدل مردود إجمالي 58,3 بالمئة.',
      header: 'مثال مركَّب · آلة واحدة، مناوبة من ⁦07:00⁩ إلى ⁦15:00⁩، ووتيرة اسمية من 10 قطع في الدقيقة',
      rowA: 'المناوبة كما جرت', rowB: 'الدقائق الـ480 نفسها، مجمَّعة (بالدقائق)',
      lab: { chg: 'تغيير السلسلة · 45 د', panne: 'عطل · 35 د', pause: 'استراحة · 30 د', att: 'انتظار المادة · 25 د' },
      groups: ['الإنتاج النافع', 'التباطؤ', 'المرفوضات', 'التوقفات', 'الاستراحة'],
      rA: 'التوفر', rP: 'الأداء', rQ: 'الجودة', rT: 'المردود الإجمالي',
      band: 'ثماني ساعات مناوبة لا تصنع ثماني ساعات إنتاج: التوقفات والتباطؤ والمرفوضات تأخذ كل واحدة نصيبها، ولكل واحدة علاجها.',
      tiles: [
        { big: '4 ساعات و22 دقيقة', l1: 'من الإنتاج النافع في مناوبة من 8 ساعات', l2: '⁦2 622⁩ قطعة جيدة، بـ10 في الدقيقة' },
        { big: '⁦58,3 %⁩', l1: 'المردود الإجمالي للمناوبة', l2: '⁦2 622⁩ قطعة جيدة من ⁦4 500⁩ ممكنة', hot: true },
        { big: '105 دقيقة', l1: 'من التوقفات المسجَّلة، سبباً بسبب', l2: 'التغيير 45، العطل 35، والانتظار 25' },
      ],
      line1: 'دون تسجيل، لا يُرى إلا مجموع المساء: ⁦2 622⁩ قطعة. ومع التسجيل في المركز، يُرى أين ذهبت الـ⁦1 878⁩ الأخرى.',
      line2: 'المردود الإجمالي ليس علامة تُعطى للفريق: هو خريطة للضياع. والسؤال النافع هو «بأيها نبدأ؟».',
      note: 'مثال مركَّب · أرقام خيالية؛ والتباطؤ = التوقفات الصغيرة والسرعة المنخفضة.',
    },
    causes: {
      sep: ' ', pc: ' %',
      title: 'شهر من التوقفات، مرتّبة حسب المدة',
      alt: 'شهر من التوقفات المسجَّلة في المركز على آلة واحدة، 3800 دقيقة في سبعة أسباب: تغيير السلسلة 1240، انتظار المادة 860، العطل 720، الضبط 410، انتظار مراقبة الجودة 260، التنظيف 180، وأخرى 130. الأسباب الثلاثة الأولى تصنع 74 بالمئة من وقت التوقف.',
      header: 'مثال مركَّب · آلة واحدة، شهر واحد، كل توقف يُسجَّل في المركز مع سببه',
      colCause: 'سبب التوقف', colMin: 'الدقائق في الشهر', colCum: 'التراكم',
      causes: ['تغيير السلسلة', 'انتظار المادة', 'العطل', 'الضبط', 'انتظار مراقبة الجودة', 'التنظيف', 'أخرى'],
      band: 'شهر من التوقفات المسجَّلة في المركز، مرتّبة حسب المدة: ثلاثة أسباب من سبعة تصنع ثلاثة أرباع الوقت الضائع.',
      tiles: [
        { big: '3 أسباب من 7', l1: 'تصنع ⁦74 %⁩ من وقت التوقف', l2: 'التغيير، انتظار المادة، والعطل', hot: true },
        { big: '63 ساعة', l1: 'توقف في الشهر، على آلة واحدة', l2: '⁦3 800⁩ دقيقة مسجَّلة في المركز' },
        { big: '⁦19 %⁩', l1: 'نصيب الأعطال: السبب الثالث', l2: 'قبل التسجيل، كان يُقال «الأعطال»' },
      ],
      line1: 'السببان الأولان ليسا من شأن الصيانة: تغيير السلسلة يُحضَّر، والمادة تُموَّن مسبقاً.',
      line2: 'دون تسجيل، لكل واحد سببه المفضَّل. ومعه، يبدأ النقاش بأطول عمود.',
      note: 'مثال مركَّب · دقائق خيالية؛ والأسباب تُختار مع الورشة: سبعة أو ثمانية، لا ثلاثون.',
    },
  },
};
