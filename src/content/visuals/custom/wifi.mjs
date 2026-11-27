// Bespoke animated figures for the 2027 "wifi qui coupe au bureau" post.
//  arbre(): a decision tree in three questions. A spine of three question
//           boxes on the left; from each, a connector is drawn to a leaf on
//           the right: the line or the box, the coverage, saturation,
//           roaming. Connectors are drawn one after another, each leaf
//           appears when its connector arrives.
//  plan():  the same office floor twice. Left, one box in the entrance:
//           rings spread from it and the signal read in each of six rooms
//           appears, two rooms too weak in accent. Right, three wired access
//           points on the ceiling: three sets of rings, every room between
//           −49 and −56 dBm.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function drawLine(css, P, id, at, dur, len) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{stroke-dashoffset:${len}}${(at + dur).toFixed(1)}%,100%{stroke-dashoffset:0}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function grow(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scale(0)}${(at + dur).toFixed(1)}%,100%{transform:scale(1)}}`); return `transform-box:fill-box;transform-origin:center;animation:${P}-${id} ${LOOP}s linear infinite`; }
const I = (x) => `⁦${x}⁩`;
const TINT = 'rgba(242,181,68,0.06)';
const DARK = '#0b0b0b';

function tiles(c, css, P, ky, ts, at0) {
  let s = '';
  ts.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, at0 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? TINT : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  return s;
}
const motionOff = (P) => `@media (prefers-reduced-motion: reduce){svg [style*="${P}-"]{animation:none !important}}`;
function path(c, css, P, id, pts, at, dur, stroke) {
  let len = 0; for (let i = 1; i < pts.length; i++) len += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]);
  const L = Math.ceil(len);
  return `<polyline points="${pts.map(([x, y]) => `${c.X(x).toFixed(1)},${y}`).join(' ')}" fill="none" stroke="${stroke}" stroke-width="1.5" stroke-dasharray="${L}" style="animation:${drawLine(css, P, id, at, dur, L)}"/>`;
}

export function arbre(t, rtl) {
  const c = ctx(rtl); const P = 'wa'; const css = []; const H = 628;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const qx = 80, qw = 340, qh = 58; const qy = [150, 236, 322]; const lx = 540, lw = 580;
  const q = (i, at) => `<g style="animation:${show(css, P, `q${i}`, at)}">` + rect(c, qx, qy[i], qw, qh, { stroke: C.fg70, fill: DARK }) + text(c, qx + 14, qy[i] + 20, t.q[i].n, { size: 9, font: 'mono', fill: C.fg55 }) + text(c, qx + 14, qy[i] + 40, t.q[i].text, { size: 11, fill: C.fg, weight: 500 }) + '</g>';
  const leaf = (k, y, h, at, hot) => `<g style="animation:${show(css, P, `f${at}`, at)}">` + rect(c, lx, y, lw, h, { stroke: hot ? C.accent : C.fg70, fill: hot ? TINT : C.fill }) + text(c, lx + 14, y + 19, k.name, { size: 11, fill: hot ? C.accent : C.fg, weight: 500 }) + text(c, lx + 14, y + 36, k.what, { size: 9.5, fill: C.fg70 }) + '</g>';
  const ans = (x, y, label, at) => `<g style="animation:${show(css, P, `a${at}`, at)}">` + text(c, x, y, label, { size: 9, font: 'mono', fill: C.fg, weight: 500, anchor: 'middle' }) + '</g>';
  // question 1 and its "yes" leaf
  s += q(0, 4);
  s += path(c, css, P, 'c0', [[qx + qw, qy[0] + 29], [lx, qy[0] + 29]], 8, 3, C.fg70) + ans(480, qy[0] + 22, t.ans[0], 9) + leaf(t.leaves[0], qy[0] + 4, 50, 12, false);
  // spine to question 2
  s += path(c, css, P, 's1', [[qx + 60, qy[0] + qh], [qx + 60, qy[1]]], 14, 2, C.fg70) + ans(qx + 96, qy[0] + qh + 18, t.ans[1], 15) + q(1, 17);
  s += path(c, css, P, 'c1', [[qx + qw, qy[1] + 29], [lx, qy[1] + 29]], 20, 3, C.accent) + ans(480, qy[1] + 22, t.ans[2], 21) + leaf(t.leaves[1], qy[1] + 4, 50, 24, true);
  // spine to question 3, two leaves
  s += path(c, css, P, 's2', [[qx + 60, qy[1] + qh], [qx + 60, qy[2]]], 26, 2, C.fg70) + ans(qx + 96, qy[1] + qh + 18, t.ans[3], 27) + q(2, 29);
  s += path(c, css, P, 'c2', [[qx + qw, qy[2] + 20], [470, qy[2] + 20], [470, qy[2] - 2], [lx, qy[2] - 2]], 32, 3, C.accent) + ans(480, qy[2] - 9, t.ans[4], 33) + leaf(t.leaves[2], qy[2] - 26, 48, 36, true);
  s += path(c, css, P, 'c3', [[qx + qw, qy[2] + 40], [470, qy[2] + 40], [470, qy[2] + 56], [lx, qy[2] + 56]], 38, 3, C.accent) + ans(480, qy[2] + 72, t.ans[5], 39) + leaf(t.leaves[3], qy[2] + 32, 48, 42, true);
  const by = 418;
  s += `<g style="animation:${show(css, P, 'bd', 50)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 478;
  s += tiles(c, css, P, ky, t.tiles, 54);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// six rooms of the same floor: x, y, width, height inside a 500 x 200 plan
const ROOMS = [[0, 0, 150, 100], [150, 0, 200, 100], [350, 0, 150, 100], [0, 100, 150, 100], [150, 100, 200, 100], [350, 100, 150, 100]];
const ONE = [-48, -61, -84, -58, -70, -81];
const THREE = [-49, -52, -51, -53, -56, -50];

export function plan(t, rtl) {
  const c = ctx(rtl); const P = 'wp'; const css = []; const H = 624;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const py = 170;
  [[80, [[40, 50]], ONE, t.one, 4], [620, [[75, 100], [250, 100], [425, 100]], THREE, t.three, 36]].forEach(([ox, aps, vals, k, at0], p) => {
    const id = `${P}-clip${p}${rtl ? 'r' : 'l'}`;
    s += `<clipPath id="${id}"><rect x="${c.RX(ox, 500)}" y="${py}" width="500" height="200"/></clipPath>`;
    s += `<g style="animation:${show(css, P, `pl${p}`, at0)}">` + text(c, ox, py - 12, k.name, { size: 10.5, fill: C.fg, weight: 500 }) + rect(c, ox, py, 500, 200, { stroke: C.fg70, fill: DARK }) + '</g>';
    // rings spreading from each access point, clipped to the floor
    let rings = '';
    aps.forEach(([ax, ay], a) => { [60, 130, p ? 0 : 230, p ? 0 : 340].filter(Boolean).forEach((r, j) => { rings += `<g style="${grow(css, P, `r${p}${a}${j}`, at0 + 3 + j * 2.5 + a * 1.5, 3)}">` + circle(c, ox + ax, py + ay, r, { fill: 'none', stroke: p ? 'rgba(242,181,68,0.55)' : `rgba(242,181,68,${(0.6 - j * 0.14).toFixed(2)})`, sw: 1 }) + '</g>'; }); });
    s += `<g clip-path="url(#${id})">${rings}</g>`;
    aps.forEach(([ax, ay], a) => { s += `<g style="animation:${show(css, P, `ap${p}${a}`, at0 + 2 + a * 1.5)}">` + circle(c, ox + ax, py + ay, 5, { fill: C.accent }) + '</g>'; });
    ROOMS.forEach(([x, y, w, h], i) => {
      const weak = vals[i] <= -70; const at = at0 + 14 + i * 1.5;
      s += `<g style="animation:${show(css, P, `rm${p}${i}`, at)}">` + rect(c, ox + x, py + y, w, h, { stroke: C.line2, fill: weak ? 'rgba(242,181,68,0.10)' : 'none' }) + text(c, ox + x + 8, py + y + 16, t.rooms[i], { size: 9, fill: C.fg70 }) + text(c, ox + x + w / 2, py + y + 62, I(`${vals[i]} dBm`.replace('-', '−')), { size: 12, font: 'mono', fill: weak ? C.accent : C.fg, weight: 500, anchor: 'middle' }) + (weak ? text(c, ox + x + w / 2, py + y + 80, t.weak, { size: 8.5, font: 'mono', fill: C.accent, anchor: 'middle' }) : '') + '</g>';
    });
    s += `<g style="animation:${show(css, P, `lg${p}`, at0 + 24)}">` + text(c, ox, py + 218, k.note, { size: 9.5, fill: p ? C.fg : C.accent }) + '</g>';
  });
  const by = 404;
  s += `<g style="animation:${show(css, P, 'bd', 66)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 464;
  s += tiles(c, css, P, ky, t.tiles, 70);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    arbre: {
      title: 'La ligne ou le Wi-Fi : trois questions pour le savoir',
      alt: 'Arbre de décision en trois questions. Première question : un poste branché par câble coupe-t-il aussi ? Si oui, c’est la ligne ou le boîtier : opérateur, alimentation, lien de secours. Si non, deuxième question : est-ce dans certaines pièces seulement ? Si oui, c’est la couverture : des bornes câblées, placées d’après une mesure. Si c’est partout, troisième question : quand ? Aux heures chargées, c’est la saturation : trop d’appareils, canal encombré, adresses épuisées. En se déplaçant, c’est l’itinérance : l’appareil reste accroché à la borne qu’il quitte.',
      header: 'Exemple construit · trois questions, dans cet ordre, avant d’acheter quoi que ce soit',
      q: [
        { n: 'question 1', text: 'Un poste branché par câble coupe-t-il aussi ?' },
        { n: 'question 2', text: 'Est-ce dans certaines pièces seulement ?' },
        { n: 'question 3', text: 'Partout, donc : à quel moment ?' },
      ],
      ans: ['oui', 'non', 'oui', 'non, partout', 'aux heures chargées', 'en se déplaçant'],
      leaves: [
        { name: 'La ligne, ou le boîtier', what: 'opérateur, alimentation du boîtier, surchauffe, câble : relevé des coupures, puis lien de secours' },
        { name: 'La couverture', what: 'le signal est trop faible dans ces pièces : des bornes câblées, placées d’après une mesure' },
        { name: 'La saturation', what: 'trop d’appareils sur une borne, canal encombré, ou plus d’adresses à distribuer' },
        { name: 'L’itinérance', what: 'l’appareil reste accroché à la borne qu’il quitte : mêmes réglages sur toutes les bornes' },
      ],
      band: 'Le premier test prend cinq minutes : un ordinateur relié au boîtier par un câble, laissé une journée. S’il coupe aussi, le Wi-Fi n’y est pour rien.',
      tiles: [
        { big: '1 poste câblé', l1: 'le premier test, avant tout achat', l2: 'il coupe aussi : ce n’est pas le Wi-Fi' },
        { big: 'notez chaque coupure', l1: 'l’heure, la pièce, l’appareil, pendant une semaine', l2: 'le motif apparaît tout seul', hot: true },
        { big: '4 causes, 4 remèdes', l1: 'ligne, couverture, saturation, itinérance', l2: 'un répéteur n’en règle aucune' },
      ],
      line1: '« Le Wi-Fi coupe » décrit quatre pannes différentes ; trois questions suffisent à savoir laquelle.',
      line2: 'Tant qu’un poste câblé n’a pas été testé, on ne sait pas s’il faut appeler l’opérateur ou déplacer une borne.',
      note: 'Exemple construit · arbre de principe ; plusieurs causes peuvent s’additionner dans le même bureau.',
    },
    plan: {
      title: 'Le même étage, un boîtier dans l’entrée ou trois bornes au plafond',
      alt: 'Deux plans du même étage de six pièces, avec le signal relevé dans chacune. Avec un seul boîtier dans l’entrée : accueil −48 dBm, espace ouvert −61, salle de réunion −84, direction −58, comptabilité −70, dépôt −81 ; trois pièces sont trop faibles. Avec trois bornes câblées au plafond : toutes les pièces sont entre −49 et −56 dBm.',
      header: 'Exemple construit · un étage de six pièces · signal relevé au milieu de chaque pièce, en dBm',
      rooms: ['Accueil', 'Espace ouvert', 'Salle de réunion', 'Direction', 'Comptabilité', 'Dépôt'], weak: 'ça coupe',
      one: { name: 'Un boîtier dans l’entrée', note: 'trois pièces sur six sous le repère : c’est là que les appels hachent' },
      three: { name: 'Trois bornes câblées au plafond', note: 'les six pièces entre −49 et −56 dBm, chaque borne sur son canal' },
      band: 'Repère d’usage courant pour la voix et la visio : −67 dBm. Au-dessus, un appel tient ; en dessous, il hache. Le chiffre se lit sur un téléphone, pièce par pièce.',
      tiles: [
        { big: '−84 dBm', l1: 'en salle de réunion, avec le boîtier dans l’entrée', l2: 'là où ont lieu les visioconférences' },
        { big: '3 bornes câblées', l1: 'au plafond, placées d’après une mesure', l2: 'toutes les pièces entre −49 et −56', hot: true },
        { big: '1, 6, 11', l1: 'trois canaux sans chevauchement en 2,4 GHz', l2: 'une borne par canal, pas trois sur le même' },
      ],
      line1: 'Le Wi-Fi ne traverse pas un étage depuis l’entrée : chaque mur prend sa part, et la pièce du fond n’a plus rien.',
      line2: 'On n’ajoute pas un répéteur, qui répète un signal déjà faible : on amène un câble, et l’on pose une borne.',
      note: 'Exemple construit · valeurs inventées ; mesurez chez vous avant de décider du nombre de bornes. Aucun prix de matériel.',
    },
  },
  en: {
    arbre: {
      title: 'The line or the Wi-Fi: three questions to find out',
      alt: 'Decision tree in three questions. First question: does a computer plugged in by cable drop too? If yes, it is the line or the box: operator, power supply, backup link. If no, second question: is it in certain rooms only? If yes, it is coverage: wired access points, placed from a measurement. If it is everywhere, third question: when? At busy hours, it is saturation: too many devices, a crowded channel, addresses run out. While moving around, it is roaming: the device stays attached to the access point it is leaving.',
      header: 'Constructed example · three questions, in this order, before buying anything',
      q: [
        { n: 'question 1', text: 'Does a computer plugged in by cable drop too?' },
        { n: 'question 2', text: 'Is it in certain rooms only?' },
        { n: 'question 3', text: 'Everywhere, then: at what moment?' },
      ],
      ans: ['yes', 'no', 'yes', 'no, everywhere', 'at busy hours', 'while moving'],
      leaves: [
        { name: 'The line, or the box', what: 'operator, power to the box, overheating, cable: a log of the drops, then a backup link' },
        { name: 'Coverage', what: 'the signal is too weak in those rooms: wired access points, placed from a measurement' },
        { name: 'Saturation', what: 'too many devices on one access point, a crowded channel, or no addresses left to hand out' },
        { name: 'Roaming', what: 'the device stays attached to the access point it is leaving: same settings on every access point' },
      ],
      band: 'The first test takes five minutes: a computer connected to the box by a cable, left for a day. If it drops too, the Wi-Fi has nothing to do with it.',
      tiles: [
        { big: '1 wired computer', l1: 'the first test, before buying anything', l2: 'it drops too: it is not the Wi-Fi' },
        { big: 'note every drop', l1: 'the time, the room, the device, for a week', l2: 'the pattern shows by itself', hot: true },
        { big: '4 causes, 4 remedies', l1: 'line, coverage, saturation, roaming', l2: 'a repeater fixes none of them' },
      ],
      line1: '“The Wi-Fi drops” describes four different faults; three questions are enough to know which.',
      line2: 'Until a wired computer has been tested, you do not know whether to call the operator or move an access point.',
      note: 'Constructed example · a schematic tree; several causes can add up in the same office.',
    },
    plan: {
      title: 'The same floor, one box in the entrance or three access points on the ceiling',
      alt: 'Two plans of the same six-room floor, with the signal read in each room. With a single box in the entrance: reception −48 dBm, open space −61, meeting room −84, management −58, accounts −70, storeroom −81; three rooms are too weak. With three wired access points on the ceiling: every room is between −49 and −56 dBm.',
      header: 'Constructed example · a floor of six rooms · signal read in the middle of each room, in dBm',
      rooms: ['Reception', 'Open space', 'Meeting room', 'Management', 'Accounts', 'Storeroom'], weak: 'it drops',
      one: { name: 'One box in the entrance', note: 'three rooms out of six below the reference: that is where calls break up' },
      three: { name: 'Three wired access points on the ceiling', note: 'all six rooms between −49 and −56 dBm, each access point on its own channel' },
      band: 'A common reference for voice and video calls: −67 dBm. Above it, a call holds; below it, it breaks up. The figure can be read on a phone, room by room.',
      tiles: [
        { big: '−84 dBm', l1: 'in the meeting room, with the box in the entrance', l2: 'where the video calls take place' },
        { big: '3 wired access points', l1: 'on the ceiling, placed from a measurement', l2: 'every room between −49 and −56', hot: true },
        { big: '1, 6, 11', l1: 'three non-overlapping channels on 2.4 GHz', l2: 'one access point per channel, not three on one' },
      ],
      line1: 'Wi-Fi does not cross a floor from the entrance: every wall takes its share, and the room at the back gets nothing.',
      line2: 'You do not add a repeater, which repeats a signal that is already weak: you bring a cable, and fit an access point.',
      note: 'Constructed example · invented values; measure on your own premises before deciding the number of access points. No hardware prices.',
    },
  },
  ar: {
    arbre: {
      title: 'الخط أم الواي فاي: ثلاثة أسئلة لمعرفة ذلك',
      alt: 'شجرة قرار في ثلاثة أسئلة. السؤال الأول: هل ينقطع حاسوب موصول بكابل كذلك؟ إذا نعم، فهو الخط أو العلبة: المتعامل، التغذية، وخط الإسعاف. إذا لا، السؤال الثاني: هل في بعض الغرف فقط؟ إذا نعم، فهي التغطية: نقاط وصول موصولة بكابل، توضع حسب قياس. وإذا في كل مكان، السؤال الثالث: متى؟ في ساعات الازدحام، فهو التشبّع: أجهزة كثيرة، قناة مزدحمة، وعناوين نفدت. وعند التنقل، فهو التجوال: الجهاز يبقى معلَّقاً بالنقطة التي يغادرها.',
      header: 'مثال مركَّب · ثلاثة أسئلة، بهذا الترتيب، قبل شراء أي شيء',
      q: [
        { n: 'السؤال 1', text: 'هل ينقطع حاسوب موصول بكابل كذلك؟' },
        { n: 'السؤال 2', text: 'هل في بعض الغرف فقط؟' },
        { n: 'السؤال 3', text: 'في كل مكان إذن: في أي وقت؟' },
      ],
      ans: ['نعم', 'لا', 'نعم', 'لا، في كل مكان', 'ساعات الازدحام', 'عند التنقل'],
      leaves: [
        { name: 'الخط، أو العلبة', what: 'المتعامل، تغذية العلبة، السخونة، الكابل: سجل للانقطاعات، ثم خط إسعاف' },
        { name: 'التغطية', what: 'الإشارة ضعيفة جداً في هذه الغرف: نقاط وصول موصولة بكابل، توضع حسب قياس' },
        { name: 'التشبّع', what: 'أجهزة كثيرة على نقطة واحدة، قناة مزدحمة، أو لم تبقَ عناوين توزَّع' },
        { name: 'التجوال', what: 'الجهاز يبقى معلَّقاً بالنقطة التي يغادرها: الضبط نفسه على كل النقاط' },
      ],
      band: 'الاختبار الأول يأخذ خمس دقائق: حاسوب موصول بالعلبة بكابل، يُترك يوماً. إذا انقطع هو كذلك، فلا دخل للواي فاي.',
      tiles: [
        { big: 'حاسوب موصول بكابل', l1: 'الاختبار الأول، قبل أي شراء', l2: 'ينقطع هو كذلك: ليس الواي فاي' },
        { big: 'سجّلوا كل انقطاع', l1: 'الساعة، الغرفة، والجهاز، مدة أسبوع', l2: 'النمط يظهر وحده', hot: true },
        { big: '4 أسباب، 4 علاجات', l1: 'الخط، التغطية، التشبّع، والتجوال', l2: 'المكرِّر لا يعالج أياً منها' },
      ],
      line1: '«الواي فاي ينقطع» تصف أربعة أعطال مختلفة؛ وثلاثة أسئلة تكفي لمعرفة أيّها.',
      line2: 'ما دام حاسوب موصول بكابل لم يُختبَر، لا نعرف هل نتصل بالمتعامل أم ننقل نقطة وصول.',
      note: 'مثال مركَّب · شجرة مبدئية؛ وقد تجتمع عدة أسباب في المكتب نفسه.',
    },
    plan: {
      title: 'الطابق نفسه، علبة في المدخل أم ثلاث نقاط في السقف',
      alt: 'مخططان للطابق نفسه بست غرف، مع الإشارة المقروءة في كل واحدة. بعلبة واحدة في المدخل: الاستقبال 48 ناقص، الفضاء المفتوح 61 ناقص، قاعة الاجتماعات 84 ناقص، الإدارة 58 ناقص، المحاسبة 70 ناقص، والمستودع 81 ناقص؛ ثلاث غرف ضعيفة جداً. وبثلاث نقاط وصول موصولة بكابل في السقف: كل الغرف بين 49 و56 ناقص.',
      header: `مثال مركَّب · طابق من ست غرف · الإشارة المقروءة وسط كل غرفة، بـ ${I('dBm')}`,
      rooms: ['الاستقبال', 'الفضاء المفتوح', 'قاعة الاجتماعات', 'الإدارة', 'المحاسبة', 'المستودع'], weak: 'ينقطع',
      one: { name: 'علبة في المدخل', note: 'ثلاث غرف من ست تحت المعلَم: هناك تتقطع المكالمات' },
      three: { name: 'ثلاث نقاط وصول موصولة بكابل في السقف', note: `الغرف الست بين ${I('−49')} و${I('−56 dBm')}، وكل نقطة على قناتها` },
      band: `معلَم شائع الاستعمال للصوت والفيديو: ${I('−67 dBm')}. فوقه، المكالمة تصمد؛ وتحته، تتقطع. والرقم يُقرأ على هاتف، غرفة غرفة.`,
      tiles: [
        { big: I('−84 dBm'), l1: 'في قاعة الاجتماعات، والعلبة في المدخل', l2: 'حيث تجري الاجتماعات بالفيديو' },
        { big: '3 نقاط موصولة بكابل', l1: 'في السقف، توضع حسب قياس', l2: `كل الغرف بين ${I('−49')} و${I('−56')}`, hot: true },
        { big: I('1, 6, 11'), l1: `ثلاث قنوات دون تداخل في ${I('2.4 GHz')}`, l2: 'نقطة لكل قناة، لا ثلاث على واحدة' },
      ],
      line1: 'الواي فاي لا يعبر طابقاً من المدخل: كل جدار يأخذ نصيبه، والغرفة التي في الآخر لا يبقى لها شيء.',
      line2: 'لا نضيف مكرِّراً، يكرّر إشارة ضعيفة أصلاً: نمدّ كابلاً، ونضع نقطة وصول.',
      note: 'مثال مركَّب · قيم مخترَعة؛ قيسوا عندكم قبل تحديد عدد النقاط. ولا يُعطى أي سعر للعتاد.',
    },
  },
};
