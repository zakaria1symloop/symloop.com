// Bespoke animated figures for the 2027 "application qui plante" post.
//  grille(): where the application crashes. A heat grid, memory class (rows) by
//            Android version (columns); each cell carries the number of
//            customers and the share of them who see a crash each day, tinted
//            by that rate. The two low-memory rows are outlined (40 % of the
//            customers, 89 % of the crashes) and the developer's test phone is
//            ringed in the calm corner; three tiles.
//  causes(): from a one-star review to a line of code. On one side a crash
//            report card (device, version, screen, free memory, last actions,
//            error, raw trace, decoded trace); on the other the causes ranked
//            by customers affected, bars that grow, with the running total;
//            three tiles.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function growX(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
const I = (x) => `⁦${x}⁩`;
const TINT = 'rgba(242,181,68,0.06)';

function tiles(c, css, P, ky, ts, at0) {
  let s = '';
  ts.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, at0 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? TINT : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  return s;
}
const motionOff = (P) => `@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"],svg rect[style*="${P}-"]{animation:none !important}}`;

// The constructed fleet: 3 800 customers, weights out of 100 by memory class
// (rows) and Android version (columns); crash rate = base of the row x factor
// of the column, in per cent of customers per day.
const WEIGHTS = [[5, 5, 3, 1, 0, 0], [3, 7, 8, 5, 2, 1], [1, 3, 7, 9, 7, 4], [0, 1, 2, 5, 6, 5], [0, 0, 1, 2, 3, 4]];
const BASE = [8.5, 4.2, 1.0, 0.4, 0.2];
const FACTOR = [1.5, 1.2, 1.0, 0.8, 0.7, 0.6];
const UNIT = 38;

export function grille(t, rtl) {
  const c = ctx(rtl); const P = 'pg'; const css = []; const H = 606;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const gx = 262, cw = 143, gy = 162, chh = 50;
  s += `<g style="animation:${show(css, P, 'ch', 3)}">` + t.cols.map((k, j) => text(c, gx + j * cw + cw / 2, gy - 12, k, { size: 9.5, fill: C.fg70, anchor: 'middle' })).join('') + '</g>';
  WEIGHTS.forEach((row, r) => {
    const y = gy + r * chh; const at = 5 + r * 4;
    let g = `<g style="animation:${show(css, P, `r${r}`, at)}">` + text(c, 80, y + 22, t.rows[r].t, { size: 10.5, fill: r < 2 ? C.accent : C.fg, weight: 500 }) + text(c, 80, y + 37, t.rows[r].s, { size: 8.5, font: 'mono', fill: C.fg55 });
    row.forEach((w, j) => {
      const x = gx + j * cw; const rate = BASE[r] * FACTOR[j];
      if (!w) { g += rect(c, x + 2, y + 2, cw - 4, chh - 4, { stroke: C.line, fill: 'none' }) + text(c, x + cw / 2, y + 30, '·', { size: 12, fill: C.fg35, anchor: 'middle' }); return; }
      const a = 0.05 + 0.5 * Math.min(1, rate / 12.75);
      g += rect(c, x + 2, y + 2, cw - 4, chh - 4, { stroke: rate > 8 ? C.accent : C.line2, fill: `rgba(242,181,68,${a.toFixed(2)})` })
        + text(c, x + cw / 2, y + 23, t.pct(rate), { size: 12.5, font: 'mono', fill: C.fg, anchor: 'middle', weight: 500 })
        + text(c, x + cw / 2, y + 39, t.users(w * UNIT), { size: 8.5, font: 'mono', fill: C.fg70, anchor: 'middle' });
    });
    s += g + '</g>';
  });
  const by = gy + 5 * chh;
  s += `<g style="animation:${show(css, P, 'hot', 27)}">` + rect(c, gx - 3, gy - 3, 6 * cw + 6, 2 * chh + 4, { stroke: C.accent, fill: 'none', sw: 1.5, dash: '6 4' }) + text(c, gx, by + 20, t.hot, { size: 10, fill: C.accent, weight: 500 }) + '</g>';
  s += `<g style="animation:${show(css, P, 'dev', 31)}">` + rect(c, gx + 5 * cw - 2, gy + 4 * chh - 2, cw + 4, chh + 4, { stroke: C.fg, fill: 'none', sw: 2 }) + text(c, gx + 6 * cw, by + 20, t.dev, { size: 10, fill: C.fg, anchor: 'end', weight: 500 }) + '</g>';
  const ky = by + 36;
  s += tiles(c, css, P, ky, t.tiles, 35);
  s += text(c, 80, ky + 86, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export function causes(t, rtl) {
  const c = ctx(rtl); const P = 'pc'; const css = []; const H = 570;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  // the crash report card
  const cx = 80, cy = 142, cwd = 390, chh = 250;
  s += `<g style="animation:${show(css, P, 'card', 4)}">` + rect(c, cx, cy, cwd, chh, { stroke: C.line2, fill: C.fill }) + text(c, cx + 14, cy + 22, t.card.title, { size: 11.5, fill: C.fg, weight: 500 }) + text(c, cx + 14, cy + 37, t.card.sub, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>';
  t.card.rows.forEach((r, i) => {
    const y = cy + 60 + i * 23;
    s += `<g style="animation:${show(css, P, `f${i}`, 5.5 + i * 1.6)}">` + text(c, cx + 14, y, r.k, { size: 9, fill: C.fg55 })
      + text(c, cx + 128, y, r.v, { size: r.mono ? 9 : 9.5, font: r.mono ? 'mono' : 'sans', fill: r.hot ? C.accent : r.dim ? C.fg35 : C.fg, weight: r.hot ? 500 : 300 }) + '</g>';
  });
  // the causes, ranked
  const rx = 500, rw = 620, y0 = 204, rh = 38, scale = 430 / t.list[0].p;
  s += `<g style="animation:${show(css, P, 'lt', 19)}">` + text(c, rx, 164, t.rank.title, { size: 11.5, fill: C.fg, weight: 500 }) + text(c, rx, 179, t.rank.sub, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>';
  let cum = 0;
  t.list.forEach((k, i) => {
    const y = y0 + i * rh; const at = 21 + i * 3; const w = k.p * scale; cum += k.p; const top = i < 3;
    s += `<g style="animation:${show(css, P, `l${i}`, at)}">` + text(c, rx, y + 10, k.t, { size: 10, fill: top ? C.fg : C.fg70, weight: top ? 500 : 300 }) + text(c, rx + rw, y + 10, t.cum(cum), { size: 9, font: 'mono', fill: i === 2 ? C.accent : C.fg55, anchor: 'end', weight: i === 2 ? 500 : 300 }) + '</g>';
    s += `<rect x="${c.RX(rx, w).toFixed(1)}" y="${y + 16}" width="${w.toFixed(1)}" height="12" fill="${top ? C.accent : 'rgba(255,255,255,0.30)'}" style="transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'};animation:${growX(css, P, `b${i}`, at + 0.4, 2)}"/>`;
    s += `<g style="animation:${show(css, P, `p${i}`, at + 2.4)}">` + text(c, rx + w + 8, y + 26, t.pct(k.p), { size: 11, font: 'mono', fill: top ? C.accent : C.fg, weight: 500 }) + '</g>';
  });
  const ky = cy + chh + 18;
  s += tiles(c, css, P, ky, t.tiles, 38);
  s += text(c, 80, ky + 86, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

const frPct = (x) => `${x.toFixed(1).replace('.', ',')} %`;
const SHARES = [41, 23, 14, 9, 13];

export const STRINGS = {
  fr: {
    grille: {
      title: 'Où plante l’application : pas sur le téléphone du développeur',
      alt: 'Grille de 3 800 clients, par mémoire du téléphone (2, 3, 4, 6, 8 Go et plus) et par version d’Android (9 et avant jusqu’à 14 et après). La part des clients qui subissent un plantage par jour va de 12,8 % sur les téléphones de 2 Go sous Android 9 à 0,1 % sur les téléphones de 8 Go sous Android 14. Les téléphones de 2 et 3 Go représentent 40 % des clients et 89 % des plantages. Le téléphone de test du développeur est un 8 Go sous Android 14. Taux global : 2,9 %, pour un seuil Android vitals de 1,09 %.',
      header: 'Exemple construit · application de commande d’un grossiste · 3 800 clients actifs, version 2.6 · part des clients qui subissent un plantage par jour',
      cols: ['Android 9 et avant', 'Android 10', 'Android 11', 'Android 12', 'Android 13', 'Android 14 et après'],
      rows: [{ t: '2 Go de mémoire', s: '14 % des clients' }, { t: '3 Go', s: '26 % des clients' }, { t: '4 Go', s: '31 % des clients' }, { t: '6 Go', s: '19 % des clients' }, { t: '8 Go et plus', s: '10 % des clients' }],
      pct: frPct, users: (n) => `${n} clients`,
      hot: 'téléphones de 2 et 3 Go : 40 % des clients, 89 % des plantages',
      dev: 'téléphone de test du développeur : 8 Go, Android 14',
      tiles: [
        { big: '2,9 % des clients', l1: 'voient l’application se fermer chaque jour', l2: 'seuil Android vitals : 1,09 %' },
        { big: '40 % des clients', l1: 'font 89 % des plantages : téléphones de 2 et 3 Go', l2: 'ceux que personne n’avait en main pour tester', hot: true },
        { big: '0,1 %', l1: 'sur le téléphone du développeur', l2: '« chez nous, elle marche » est vrai, et ne dit rien' },
      ],
      rule: 'L’application ne plante pas « de temps en temps » : elle plante sur des téléphones précis,',
      rule2: 'ceux de quatre clients sur dix, que personne n’avait dans les mains au moment de tester.',
      note: 'Exemple construit · parts et taux sont ceux de l’exemple ; les vôtres se lisent dans la console du store et l’outil de rapports.',
    },
    causes: {
      title: 'D’un avis une étoile à la ligne de code',
      alt: 'À gauche, un rapport de plantage : téléphone de 2 Go sous Android 10, version 2.6.0, écran catalogue, 38 Mo de mémoire libre, dernières actions, erreur de mémoire en chargeant une image, trace brute illisible puis relue. À droite, les causes classées par clients touchés : photo du catalogue trop lourde 41 %, réponse vide du serveur 23 %, écriture en base pendant la synchronisation 14 %, appareil photo refusé 9 %, trente-sept autres causes 13 %. Trois causes font 78 % des plantages.',
      header: 'Exemple construit · deux semaines de rapports de plantage, version 2.6 · quarante et une causes distinctes',
      card: { title: 'Un rapport de plantage', sub: 'ce que l’application envoie quand elle se ferme', rows: [
        { k: 'Appareil', v: 'téléphone de 2 Go, Android 10' }, { k: 'Version', v: '2.6.0' }, { k: 'Écran', v: 'catalogue' }, { k: 'Mémoire libre', v: '38 Mo' },
        { k: 'Dernières actions', v: 'ouverture, recherche « huile », défilement' }, { k: 'Erreur', v: 'mémoire insuffisante en chargeant une image' },
        { k: 'Trace brute', v: 'at a.b.k.c(SourceFile:3)', mono: true, dim: true }, { k: 'Trace relue', v: 'CatalogueImage.charger · ligne 142', mono: true, hot: true },
      ] },
      rank: { title: 'Les causes, classées par clients touchés', sub: 'une cause = des centaines de rapports regroupés' },
      list: [
        { t: 'Photo du catalogue trop lourde pour la mémoire', p: SHARES[0] }, { t: 'Réponse vide du serveur quand le réseau coupe', p: SHARES[1] }, { t: 'Écriture en base locale pendant la synchronisation', p: SHARES[2] },
        { t: 'Appareil photo refusé par le client', p: SHARES[3] }, { t: 'Trente-sept autres causes', p: SHARES[4] },
      ],
      pct: (p) => `${p} %`, cum: (p) => `cumul ${p} %`,
      tiles: [
        { big: '3 causes sur 41', l1: 'font 78 % des plantages', l2: 'on corrige celles-là d’abord, dans cet ordre', hot: true },
        { big: '0 reproduite au bureau', l1: '3 sur 3 sur un téléphone de 2 Go', l2: 'mémoire faible, réseau coupé, base pleine' },
        { big: '1 fichier par version', l1: 'pour relire une trace rendue illisible', l2: 'gardé à chaque compilation, sinon la trace reste muette' },
      ],
      rule: 'Un avis une étoile dit « elle se ferme ». Un rapport de plantage dit sur quel téléphone, à quel écran,',
      rule2: 'après quels gestes et à quelle ligne : c’est la différence entre chercher et corriger.',
      note: 'Exemple construit · causes, parts et noms de fichiers sont ceux de l’exemple.',
    },
  },
  en: {
    grille: {
      title: 'Where the app crashes: not on the developer’s phone',
      alt: 'A grid of 3,800 customers, by phone memory (2, 3, 4, 6, 8 GB and more) and Android version (9 and earlier up to 14 and later). The share of customers who see a crash each day goes from 12.8 % on 2 GB phones running Android 9 to 0.1 % on 8 GB phones running Android 14. Phones with 2 and 3 GB are 40 % of the customers and 89 % of the crashes. The developer’s test phone is an 8 GB phone on Android 14. Overall rate: 2.9 %, against an Android vitals threshold of 1.09 %.',
      header: 'Constructed example · a wholesaler’s ordering app · 3,800 active customers, version 2.6 · share of customers who see a crash each day',
      cols: ['Android 9 and earlier', 'Android 10', 'Android 11', 'Android 12', 'Android 13', 'Android 14 and later'],
      rows: [{ t: '2 GB of memory', s: '14 % of customers' }, { t: '3 GB', s: '26 % of customers' }, { t: '4 GB', s: '31 % of customers' }, { t: '6 GB', s: '19 % of customers' }, { t: '8 GB and more', s: '10 % of customers' }],
      pct: (x) => `${x.toFixed(1)} %`, users: (n) => `${n} customers`,
      hot: '2 and 3 GB phones: 40 % of customers, 89 % of crashes',
      dev: 'the developer’s test phone: 8 GB, Android 14',
      tiles: [
        { big: '2.9 % of customers', l1: 'see the app close on them every day', l2: 'Android vitals threshold: 1.09 %' },
        { big: '40 % of customers', l1: 'account for 89 % of crashes: 2 and 3 GB phones', l2: 'the ones nobody had in hand for testing', hot: true },
        { big: '0.1 %', l1: 'on the developer’s phone', l2: '“it works for us” is true, and says nothing' },
      ],
      rule: 'The app does not crash “now and then”: it crashes on specific phones,',
      rule2: 'those of four customers in ten, which nobody was holding when it was tested.',
      note: 'Constructed example · shares and rates belong to the example; yours are read in the store console and the reporting tool.',
    },
    causes: {
      title: 'From a one-star review to a line of code',
      alt: 'On the left, a crash report: 2 GB phone on Android 10, version 2.6.0, catalogue screen, 38 MB of free memory, last actions, out-of-memory error while loading an image, an unreadable raw trace and then the decoded one. On the right, causes ranked by customers affected: catalogue photo too heavy 41 %, empty server response 23 %, database write during sync 14 %, camera permission refused 9 %, thirty-seven other causes 13 %. Three causes account for 78 % of crashes.',
      header: 'Constructed example · two weeks of crash reports, version 2.6 · forty-one distinct causes',
      card: { title: 'A crash report', sub: 'what the app sends when it closes', rows: [
        { k: 'Device', v: '2 GB phone, Android 10' }, { k: 'Version', v: '2.6.0' }, { k: 'Screen', v: 'catalogue' }, { k: 'Free memory', v: '38 MB' },
        { k: 'Last actions', v: 'open, search “oil”, scroll' }, { k: 'Error', v: 'out of memory while loading an image' },
        { k: 'Raw trace', v: 'at a.b.k.c(SourceFile:3)', mono: true, dim: true }, { k: 'Decoded trace', v: 'CatalogueImage.load · line 142', mono: true, hot: true },
      ] },
      rank: { title: 'Causes, ranked by customers affected', sub: 'one cause = hundreds of reports grouped together' },
      list: [
        { t: 'Catalogue photo too heavy for the memory', p: SHARES[0] }, { t: 'Empty server response when the network drops', p: SHARES[1] }, { t: 'Local database write during synchronisation', p: SHARES[2] },
        { t: 'Camera permission refused by the customer', p: SHARES[3] }, { t: 'Thirty-seven other causes', p: SHARES[4] },
      ],
      pct: (p) => `${p} %`, cum: (p) => `running total ${p} %`,
      tiles: [
        { big: '3 causes out of 41', l1: 'account for 78 % of crashes', l2: 'those are fixed first, in that order', hot: true },
        { big: '0 reproduced at the office', l1: '3 out of 3 on a 2 GB phone', l2: 'low memory, network cut, full database' },
        { big: '1 file per version', l1: 'to read a trace made unreadable', l2: 'kept at every build, or the trace stays mute' },
      ],
      rule: 'A one-star review says “it closes”. A crash report says on which phone, on which screen,',
      rule2: 'after which actions and at which line: that is the difference between searching and fixing.',
      note: 'Constructed example · causes, shares and file names belong to the example.',
    },
  },
  ar: {
    grille: {
      title: 'أين يتوقف التطبيق: ليس على هاتف المطوِّر',
      alt: 'شبكة من 3 800 زبون، حسب ذاكرة الهاتف (2، 3، 4، 6، 8 غيغا فأكثر) وحسب نسخة أندرويد (9 وما قبلها إلى 14 وما بعدها). حصة الزبائن الذين يتوقف عندهم التطبيق كل يوم تذهب من 12,8 بالمئة على هواتف 2 غيغا بأندرويد 9 إلى 0,1 بالمئة على هواتف 8 غيغا بأندرويد 14. هواتف 2 و3 غيغا تمثل 40 بالمئة من الزبائن و89 بالمئة من التوقفات. هاتف تجارب المطوِّر من 8 غيغا بأندرويد 14. النسبة العامة 2,9 بالمئة، مقابل عتبة 1,09 بالمئة.',
      header: `مثال مركَّب · تطبيق طلبيات لتاجر جملة · ${I('3 800')} زبون نشط، النسخة ${I('2.6')} · حصة الزبائن الذين يتوقف عندهم التطبيق كل يوم`,
      cols: ['أندرويد 9 وما قبلها', 'أندرويد 10', 'أندرويد 11', 'أندرويد 12', 'أندرويد 13', 'أندرويد 14 وما بعدها'],
      rows: [{ t: 'ذاكرة 2 غيغا', s: `${I('14 %')} من الزبائن` }, { t: '3 غيغا', s: `${I('26 %')} من الزبائن` }, { t: '4 غيغا', s: `${I('31 %')} من الزبائن` }, { t: '6 غيغا', s: `${I('19 %')} من الزبائن` }, { t: '8 غيغا فأكثر', s: `${I('10 %')} من الزبائن` }],
      pct: (x) => I(frPct(x)), users: (n) => `${n} زبوناً`,
      hot: `هواتف 2 و3 غيغا: ${I('40 %')} من الزبائن، و${I('89 %')} من التوقفات`,
      dev: 'هاتف تجارب المطوِّر: 8 غيغا، أندرويد 14',
      tiles: [
        { big: `${I('2,9 %')} من الزبائن`, l1: 'يرون التطبيق يُغلق عندهم كل يوم', l2: `عتبة ${I('Android vitals')}: ${I('1,09 %')}` },
        { big: `${I('40 %')} من الزبائن`, l1: `يصنعون ${I('89 %')} من التوقفات: هواتف 2 و3 غيغا`, l2: 'تلك التي لم تكن في يد أحد وقت التجربة', hot: true },
        { big: I('0,1 %'), l1: 'على هاتف المطوِّر', l2: '«عندنا يشتغل» صحيحة، ولا تقول شيئاً' },
      ],
      rule: 'التطبيق لا يتوقف «من حين لآخر»: يتوقف على هواتف بعينها،',
      rule2: 'هواتف أربعة زبائن من عشرة، لم تكن في يد أحد وقت التجربة.',
      note: 'مثال مركَّب · الحصص والنسب خاصة بالمثال؛ وأرقامكم تُقرأ في لوحة المتجر وأداة التقارير.',
    },
    causes: {
      title: 'من تقييم بنجمة واحدة إلى سطر في الشيفرة',
      alt: 'على اليمين تقرير توقف: هاتف 2 غيغا بأندرويد 10، النسخة 2.6.0، شاشة الكتالوغ، 38 ميغا من الذاكرة الحرة، آخر الحركات، خطأ نقص الذاكرة عند تحميل صورة، أثر خام غير مقروء ثم الأثر بعد فكّه. وعلى اليسار الأسباب مرتَّبة حسب الزبائن المتضررين: صورة الكتالوغ أثقل من الذاكرة 41 بالمئة، جواب فارغ من الخادم 23 بالمئة، كتابة في القاعدة أثناء التزامن 14 بالمئة، رفض الكاميرا 9 بالمئة، سبعة وثلاثون سبباً آخر 13 بالمئة. ثلاثة أسباب تصنع 78 بالمئة من التوقفات.',
      header: `مثال مركَّب · أسبوعان من تقارير التوقف، النسخة ${I('2.6')} · واحد وأربعون سبباً مختلفاً`,
      card: { title: 'تقرير توقف', sub: 'ما يرسله التطبيق حين يُغلق', rows: [
        { k: 'الجهاز', v: 'هاتف 2 غيغا، أندرويد 10' }, { k: 'النسخة', v: I('2.6.0') }, { k: 'الشاشة', v: 'الكتالوغ' }, { k: 'الذاكرة الحرة', v: '38 ميغا' },
        { k: 'آخر الحركات', v: 'فتح، بحث عن «زيت»، تمرير' }, { k: 'الخطأ', v: 'ذاكرة غير كافية عند تحميل صورة' },
        { k: 'الأثر الخام', v: I('at a.b.k.c(SourceFile:3)'), mono: true, dim: true }, { k: 'الأثر بعد فكّه', v: I('CatalogueImage.load · 142'), mono: true, hot: true },
      ] },
      rank: { title: 'الأسباب، مرتَّبة حسب الزبائن المتضررين', sub: 'سبب واحد = مئات التقارير مجموعة' },
      list: [
        { t: 'صورة الكتالوغ أثقل من الذاكرة', p: SHARES[0] }, { t: 'جواب فارغ من الخادم حين تنقطع الشبكة', p: SHARES[1] }, { t: 'كتابة في القاعدة المحلية أثناء التزامن', p: SHARES[2] },
        { t: 'رفض الزبون استعمال الكاميرا', p: SHARES[3] }, { t: 'سبعة وثلاثون سبباً آخر', p: SHARES[4] },
      ],
      pct: (p) => I(`${p} %`), cum: (p) => `المجموع ${I(`${p} %`)}`,
      tiles: [
        { big: '3 أسباب من 41', l1: `تصنع ${I('78 %')} من التوقفات`, l2: 'تُصلَّح هي أولاً، بهذا الترتيب', hot: true },
        { big: 'لا سبب أُعيد في المكتب', l1: '3 من 3 على هاتف 2 غيغا', l2: 'ذاكرة ضعيفة، شبكة مقطوعة، قاعدة ممتلئة' },
        { big: 'ملف لكل نسخة', l1: 'لقراءة أثر جُعل غير مقروء', l2: 'يُحفظ عند كل بناء، وإلا بقي الأثر صامتاً' },
      ],
      rule: 'التقييم بنجمة واحدة يقول «يُغلق». وتقرير التوقف يقول على أي هاتف، وفي أي شاشة،',
      rule2: 'وبعد أي حركات وفي أي سطر: هذا هو الفرق بين البحث والإصلاح.',
      note: 'مثال مركَّب · الأسباب والحصص وأسماء الملفات خاصة بالمثال.',
    },
  },
};
