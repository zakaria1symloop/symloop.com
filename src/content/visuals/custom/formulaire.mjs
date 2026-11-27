// Bespoke animated figures for the 2027 "comment faire un formulaire en ligne" post.
//  tableur(): the same week of answers twice. Left, the spreadsheet: eight
//             rows appear one by one and four of them get a flag (duplicate,
//             spam, no answer for six days, answered twice). Right, the same
//             answers as tracked requests: six cards drop into three columns,
//             two entries are set aside at the door.
//  champs():  twelve fields, or five. Twelve field chips appear, then seven
//             are struck through one after another with the reason, and the
//             two completion figures appear on the side.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function pop(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scale(0)}${(at + 1.5).toFixed(1)}%,100%{transform:scale(1)}}`); return `transform-box:fill-box;transform-origin:center;animation:${P}-${id} ${LOOP}s linear infinite`; }
function drawLine(css, P, id, at, dur, len) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{stroke-dashoffset:${len.toFixed(0)}}${(at + dur).toFixed(1)}%,100%{stroke-dashoffset:0}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
const TINT = 'rgba(242,181,68,0.06)';
const DARK = '#0b0b0b';

function tiles(c, css, P, ky, ts, at0) {
  let s = '';
  ts.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, at0 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? TINT : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  return s;
}
const motionOff = (P) => `@media (prefers-reduced-motion: reduce){svg [style*="${P}-"]{animation:none !important}}`;

// index of the flag carried by each of the eight rows (-1: none)
const FLAG = [-1, 0, -1, 1, 2, -1, 3, -1];
// cards per column on the tracked side: received, in progress, answered
const CARDS = [1, 2, 3];

export function tableur(t, rtl) {
  const c = ctx(rtl); const P = 'ft'; const css = []; const H = 660;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  // left: the spreadsheet
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 480, 280, { stroke: C.fg35, fill: DARK }) + text(c, 96, 168, t.left, { size: 11, fill: C.fg, weight: 500 }) + text(c, 96, 184, t.leftSub, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>';
  t.rows.forEach((row, j) => {
    const y = 196 + j * 25; const f = FLAG[j]; const at = 5 + j * 2.5;
    s += `<g style="animation:${show(css, P, `r${j}`, at)}">` + rect(c, 96, y, 448, 21, { stroke: C.line2, fill: C.fill }) + text(c, 106, y + 14.5, row, { size: 9, font: 'mono', fill: C.fg70 }) + '</g>';
    if (f >= 0) s += `<g style="${pop(css, P, `f${j}`, 27 + f * 3)}">` + rect(c, 386, y + 2, 152, 17, { stroke: C.accent, fill: C.accent }) + text(c, 462, y + 14, t.flags[f], { size: 8.5, fill: '#000', weight: 500, anchor: 'middle' }) + '</g>';
  });
  s += `<g style="animation:${show(css, P, 'ls', 40)}">` + text(c, 96, 412, t.leftSum, { size: 10, fill: C.accent, weight: 500 }) + '</g>';
  // right: the same answers as tracked requests
  s += `<g style="animation:${show(css, P, 'pb', 43)}">` + rect(c, 580, 144, 540, 280, { stroke: C.accent, fill: TINT }) + text(c, 596, 168, t.right, { size: 11, fill: C.fg, weight: 500 }) + text(c, 596, 184, t.rightSub, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>';
  let n = 0;
  CARDS.forEach((count, col) => {
    const x = 596 + col * 172;
    s += `<g style="animation:${show(css, P, `c${col}`, 45 + col * 2)}">` + rect(c, x, 196, 164, 22, { stroke: col === 2 ? C.fg70 : C.accent, fill: col === 2 ? C.fill : 'rgba(242,181,68,0.14)' }) + text(c, x + 82, 211, t.cols[col], { size: 9.5, fill: col === 2 ? C.fg : C.accent, weight: 500, anchor: 'middle' }) + '</g>';
    for (let k = 0; k < count; k++) {
      const y = 226 + k * 44; const card = t.cards[n];
      s += `<g style="animation:${show(css, P, `d${n}`, 50 + n * 1.5)}">` + rect(c, x, y, 164, 38, { stroke: C.line2, fill: DARK }) + text(c, x + 10, y + 16, card[0], { size: 9.5, fill: C.fg, weight: 500 }) + text(c, x + 10, y + 30, card[1], { size: 8, font: 'mono', fill: C.fg55 }) + '</g>';
      n++;
    }
  });
  s += `<g style="animation:${show(css, P, 'out', 58)}">` + rect(c, 596, 362, 164, 20, { stroke: C.line2, fill: C.fill, dash: '3 3' }) + text(c, 678, 376, t.aside[0], { size: 8.5, fill: C.fg55, anchor: 'middle' }) + rect(c, 768, 362, 164, 20, { stroke: C.line2, fill: C.fill, dash: '3 3' }) + text(c, 850, 376, t.aside[1], { size: 8.5, fill: C.fg55, anchor: 'middle' }) + '</g>';
  s += `<g style="animation:${show(css, P, 'rs', 60)}">` + text(c, 596, 412, t.rightSum, { size: 10, fill: C.fg, weight: 500 }) + '</g>';
  const by = 440;
  s += `<g style="animation:${show(css, P, 'bd', 63)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 500;
  s += tiles(c, css, P, ky, t.tiles, 66);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// reason index for each of the twelve fields (-1: kept); fields are laid out in two columns, row by row
const WHY = [-1, 0, -1, 0, -1, 0, -1, 1, -1, 1, 1, 1];

export function champs(t, rtl) {
  const c = ctx(rtl); const P = 'fc'; const css = []; const H = 660;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 580, 280, { stroke: C.fg35, fill: DARK }) + text(c, 96, 168, t.left, { size: 11, fill: C.fg, weight: 500 }) + '</g>';
  let struck = 0;
  t.fields.forEach((label, i) => {
    const col = i % 2, row = Math.floor(i / 2); const x = 96 + col * 278, y = 184 + row * 38, w = 270; const why = WHY[i]; const keep = why < 0;
    s += `<g style="animation:${show(css, P, `f${i}`, 5 + i * 1.2)}">` + rect(c, x, y, w, 30, { stroke: keep ? C.accent : C.line2, fill: keep ? TINT : C.fill }) + text(c, x + 12, y + 19, label, { size: 10, fill: keep ? C.fg : C.fg55, weight: keep ? 500 : 300 }) + '</g>';
    if (!keep) {
      const at = 22 + struck * 3; struck++;
      s += `<polyline points="${c.X(x + 8)},${y + 15} ${c.X(x + w - 80)},${y + 15}" fill="none" stroke="${C.fg55}" stroke-width="1.5" stroke-dasharray="182" style="animation:${drawLine(css, P, `x${i}`, at, 2, 182)}"/>`;
      s += `<g style="animation:${show(css, P, `y${i}`, at + 2)}">` + text(c, x + w - 10, y + 19, t.why[why], { size: 8.5, font: 'mono', fill: C.accent, anchor: 'end' }) + '</g>';
    }
  });
  // right: before and after
  s += `<g style="animation:${show(css, P, 'pb', 44)}">` + rect(c, 680, 144, 440, 280, { stroke: C.line2, fill: C.fill }) + text(c, 696, 168, t.right, { size: 11, fill: C.fg, weight: 500 }) + '</g>';
  s += `<g style="animation:${show(css, P, 'b1', 46)}">` + rect(c, 696, 184, 408, 46, { stroke: C.fg55, fill: DARK }) + text(c, 710, 204, t.before[0], { size: 13, font: 'mono', fill: C.fg, weight: 500 }) + text(c, 710, 221, t.before[1], { size: 9, fill: C.fg70 }) + '</g>';
  s += `<g style="${pop(css, P, 'b2', 50)}">` + rect(c, 696, 240, 408, 46, { stroke: C.accent, fill: 'rgba(242,181,68,0.14)' }) + text(c, 710, 260, t.after[0], { size: 13, font: 'mono', fill: C.accent, weight: 500 }) + text(c, 710, 277, t.after[1], { size: 9, fill: C.fg }) + '</g>';
  t.sums.forEach((line1, i) => { s += `<g style="animation:${show(css, P, `s${i}`, 54 + i * 2)}">` + text(c, 696, 314 + i * 22, line1, { size: 10, fill: i === 2 ? C.accent : C.fg70, weight: i === 2 ? 500 : 300 }) + '</g>'; });
  s += `<g style="animation:${show(css, P, 'cv', 60)}">` + text(c, 696, 398, t.caveat, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>';
  const by = 440;
  s += `<g style="animation:${show(css, P, 'bd', 63)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 500;
  s += tiles(c, css, P, ky, t.tiles, 66);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    tableur: {
      title: 'La même semaine, dans un tableur puis en demandes suivies',
      alt: 'Deux panneaux. À gauche, le tableur où arrivent les réponses d’un formulaire : huit lignes en une semaine, dont un doublon, un message indésirable, une demande sans réponse depuis six jours et une demande à laquelle deux personnes ont répondu. À droite, les mêmes envois traités comme des demandes : six demandes, chacune avec un numéro, un responsable et un délai, réparties en reçue, en cours et répondue ; le doublon a été fusionné et le message indésirable refusé à l’entrée.',
      header: 'Exemple construit · huit envois en une semaine pour une demande de devis · à gauche le tableur, à droite les mêmes envois, suivis',
      left: 'Le tableur des réponses', leftSub: 'huit lignes, personne n’en est responsable',
      rows: ['lun. 09:12 · devis · portail', 'lun. 09:14 · devis · portail', 'lun. 15:40 · devis · clôture', 'mar. 03:02 · « gagnez plus »', 'mar. 11:25 · devis · garage', 'mer. 10:08 · devis · véranda', 'jeu. 16:51 · devis · escalier', 'ven. 08:30 · devis · portail'],
      flags: ['doublon', 'indésirable', 'sans réponse · 6 jours', 'deux réponses'],
      leftSum: '4 lignes sur 8 posent un problème, et rien ne le signale',
      right: 'Les mêmes envois, en demandes suivies', rightSub: 'un numéro, un responsable, un délai',
      cols: ['Reçue', 'En cours', 'Répondue'],
      cards: [['n° 0418 · portail', 'commercial · depuis 2 h'], ['n° 0415 · garage', 'commercial · jour 2'], ['n° 0416 · véranda', 'métreur · jour 1'], ['n° 0412 · portail', 'répondue en 3 h'], ['n° 0413 · clôture', 'répondue en 5 h'], ['n° 0417 · escalier', 'répondue en 1 jour']],
      aside: ['1 doublon fusionné', '1 indésirable refusé'],
      rightSum: '6 demandes ; 2 envois écartés à l’entrée ; aucune sans responsable',
      band: 'Un formulaire ne s’arrête pas au bouton « Envoyer » : ce qui compte, c’est où l’envoi arrive, chez qui, et ce qu’on sait de son état.',
      tiles: [
        { big: '8 lignes, 6 demandes', l1: 'un doublon et un message indésirable occupaient deux lignes', l2: 'ils sont écartés à l’entrée' },
        { big: 'un responsable', l1: 'chaque demande a un nom en face, et un état', l2: 'plus de double réponse, plus d’oubli', hot: true },
        { big: 'un délai visible', l1: 'reçue il y a deux heures, ou il y a six jours', l2: 'le retard se voit avant l’appel du client' },
      ],
      line1: 'Un tableur enregistre des lignes ; il ne dit pas qui s’en occupe, ni depuis quand elles attendent.',
      line2: 'Le formulaire peut rester le même : c’est ce qui se passe après « Envoyer » qui change.',
      note: 'Exemple construit · un atelier de menuiserie métallique, huit envois en une semaine.',
    },
    champs: {
      title: 'Douze champs, ou cinq',
      alt: 'Un formulaire de demande de devis de douze champs. Cinq sont gardés : le nom, le téléphone, le besoin en une phrase, la wilaya, une photo ou un plan facultatif. Sept sont barrés : la civilité, la confirmation du téléphone et la date de naissance, inutiles ; l’adresse complète, la société, le budget et « comment nous avez-vous connus », à demander au premier échange. À côté : avec douze champs, 41 personnes sur 100 vont au bout ; avec cinq, 63 sur 100.',
      header: 'Exemple construit · une demande de devis · douze champs à l’ouverture, cinq après le tri',
      left: 'Le formulaire, champ par champ',
      fields: ['Nom', 'Civilité', 'Téléphone', 'Confirmer le téléphone', 'Votre besoin, en une phrase', 'Date de naissance', 'Wilaya', 'Adresse complète', 'Photo ou plan, facultatif', 'Société, registre', 'Budget', 'Comment nous avez-vous connus'],
      why: ['inutile', 'après'],
      right: 'Avant, après',
      before: ['12 champs', '41 personnes sur 100 vont jusqu’au bout'],
      after: ['5 champs', '63 personnes sur 100 vont jusqu’au bout'],
      sums: ['3 champs inutiles : personne ne s’en servait', '4 champs remis à plus tard : au premier échange', '5 champs gardés : qui, comment le joindre, quoi, où, une pièce'],
      caveat: 'chiffres de l’exemple ; mesurez les vôtres',
      band: 'Chaque champ est une question posée à un inconnu : ne demandez à l’entrée que ce qu’il faut pour le rappeler.',
      tiles: [
        { big: '5 champs', l1: 'qui, comment le joindre, quoi, où, une pièce', l2: 'le reste se demande au premier échange', hot: true },
        { big: 'le téléphone d’abord', l1: 'vérifié pendant la saisie, dans tous les formats', l2: 'local ou international' },
        { big: 'mesurer l’abandon', l1: 'combien ouvrent le formulaire, combien l’envoient', l2: 'et sur quel champ ils s’arrêtent' },
      ],
      line1: 'Dans l’exemple, le formulaire long ne recueille pas plus d’informations : il recueille moins de demandes.',
      line2: 'Les sept champs retirés ne sont pas perdus : quatre se demandent au téléphone, trois ne manquaient à personne.',
      note: 'Exemple construit · une demande de devis ; mesurez chez vous la part de ceux qui vont au bout.',
    },
  },
  en: {
    tableur: {
      title: 'The same week, in a spreadsheet then as tracked requests',
      alt: 'Two panels. On the left, the spreadsheet where a form’s answers land: eight rows in a week, including a duplicate, a spam message, a request with no answer for six days and a request two people replied to. On the right, the same submissions handled as requests: six requests, each with a number, an owner and a time limit, spread over received, in progress and answered; the duplicate has been merged and the spam refused at the door.',
      header: 'Constructed example · eight submissions in a week for a quote request · left the spreadsheet, right the same submissions, tracked',
      left: 'The spreadsheet of answers', leftSub: 'eight rows, nobody is responsible for them',
      rows: ['Mon 09:12 · quote · gate', 'Mon 09:14 · quote · gate', 'Mon 15:40 · quote · fence', 'Tue 03:02 · “earn more”', 'Tue 11:25 · quote · garage', 'Wed 10:08 · quote · veranda', 'Thu 16:51 · quote · staircase', 'Fri 08:30 · quote · gate'],
      flags: ['duplicate', 'spam', 'no answer · 6 days', 'two replies'],
      leftSum: '4 rows out of 8 are a problem, and nothing flags it',
      right: 'The same submissions, as tracked requests', rightSub: 'a number, an owner, a time limit',
      cols: ['Received', 'In progress', 'Answered'],
      cards: [['no. 0418 · gate', 'sales · for 2 h'], ['no. 0415 · garage', 'sales · day 2'], ['no. 0416 · veranda', 'surveyor · day 1'], ['no. 0412 · gate', 'answered in 3 h'], ['no. 0413 · fence', 'answered in 5 h'], ['no. 0417 · staircase', 'answered in 1 day']],
      aside: ['1 duplicate merged', '1 spam refused'],
      rightSum: '6 requests; 2 submissions set aside at the door; none without an owner',
      band: 'A form does not stop at the “Send” button: what matters is where the submission lands, with whom, and what is known of its status.',
      tiles: [
        { big: '8 rows, 6 requests', l1: 'a duplicate and a spam message were taking up two rows', l2: 'they are set aside at the door' },
        { big: 'an owner', l1: 'each request has a name against it, and a status', l2: 'no more double reply, no more forgetting', hot: true },
        { big: 'a visible delay', l1: 'received two hours ago, or six days ago', l2: 'lateness shows before the customer calls' },
      ],
      line1: 'A spreadsheet records rows; it does not say who is dealing with them, or how long they have been waiting.',
      line2: 'The form can stay the same: it is what happens after “Send” that changes.',
      note: 'Constructed example · a metalwork shop, eight submissions in a week.',
    },
    champs: {
      title: 'Twelve fields, or five',
      alt: 'A quote-request form with twelve fields. Five are kept: name, phone, the need in one sentence, the wilaya, an optional photo or plan. Seven are struck out: title, phone confirmation and date of birth, useless; full address, company, budget and “how did you hear about us”, to be asked in the first exchange. Beside it: with twelve fields, 41 people out of 100 go to the end; with five, 63 out of 100.',
      header: 'Constructed example · a quote request · twelve fields at the start, five after sorting',
      left: 'The form, field by field',
      fields: ['Name', 'Title', 'Phone', 'Confirm phone', 'Your need, in one sentence', 'Date of birth', 'Wilaya', 'Full address', 'Photo or plan, optional', 'Company, registration', 'Budget', 'How did you hear about us'],
      why: ['useless', 'later'],
      right: 'Before, after',
      before: ['12 fields', '41 people out of 100 go to the end'],
      after: ['5 fields', '63 people out of 100 go to the end'],
      sums: ['3 useless fields: nobody used them', '4 fields put off: asked in the first exchange', '5 fields kept: who, how to reach them, what, where, a file'],
      caveat: 'figures from the example; measure your own',
      band: 'Each field is a question put to a stranger: at the door, ask only what is needed to call them back.',
      tiles: [
        { big: '5 fields', l1: 'who, how to reach them, what, where, a file', l2: 'the rest is asked in the first exchange', hot: true },
        { big: 'the phone first', l1: 'checked while typing, in every format', l2: 'local or international' },
        { big: 'measure drop-off', l1: 'how many open the form, how many send it', l2: 'and on which field they stop' },
      ],
      line1: 'In the example, the long form does not collect more information: it collects fewer requests.',
      line2: 'The seven fields removed are not lost: four are asked on the phone, three were missed by nobody.',
      note: 'Constructed example · a quote request; measure at your place the share of those who go to the end.',
    },
  },
  ar: {
    tableur: {
      title: 'الأسبوع نفسه، في جدول ثم في طلبات متابَعة',
      alt: 'لوحتان. على جهة، الجدول الذي تصل إليه أجوبة استمارة: ثمانية أسطر في أسبوع، منها مكرَّر، رسالة مزعجة، طلب دون جواب منذ ستة أيام، وطلب أجاب عنه شخصان. وعلى الجهة الأخرى، الإرسالات نفسها معالَجة كطلبات: ستة طلبات، لكل واحد رقم ومسؤول وأجل، موزَّعة بين مستلَم، قيد المعالجة، ومُجاب عنه؛ والمكرَّر أُدمج والرسالة المزعجة رُفضت عند المدخل.',
      header: 'مثال مركَّب · ثمانية إرسالات في أسبوع لطلب عرض سعر · الجدول، ثم الإرسالات نفسها متابَعة',
      left: 'جدول الأجوبة', leftSub: 'ثمانية أسطر، ولا أحد مسؤول عنها',
      rows: ['الاثنين 09:12 · عرض سعر · بوابة', 'الاثنين 09:14 · عرض سعر · بوابة', 'الاثنين 15:40 · عرض سعر · سياج', 'الثلاثاء 03:02 · «اربح أكثر»', 'الثلاثاء 11:25 · عرض سعر · مرأب', 'الأربعاء 10:08 · عرض سعر · شرفة', 'الخميس 16:51 · عرض سعر · سلّم', 'الجمعة 08:30 · عرض سعر · بوابة'],
      flags: ['مكرَّر', 'مزعج', 'دون جواب · 6 أيام', 'جوابان'],
      leftSum: '4 أسطر من 8 فيها مشكل، ولا شيء ينبّه إليه',
      right: 'الإرسالات نفسها، في طلبات متابَعة', rightSub: 'رقم، مسؤول، وأجل',
      cols: ['مستلَم', 'قيد المعالجة', 'مُجاب عنه'],
      cards: [['رقم 0418 · بوابة', 'التجاري · منذ ساعتين'], ['رقم 0415 · مرأب', 'التجاري · اليوم 2'], ['رقم 0416 · شرفة', 'القيّاس · اليوم 1'], ['رقم 0412 · بوابة', 'أُجيب في 3 ساعات'], ['رقم 0413 · سياج', 'أُجيب في 5 ساعات'], ['رقم 0417 · سلّم', 'أُجيب في يوم']],
      aside: ['مكرَّر واحد أُدمج', 'مزعج واحد رُفض'],
      rightSum: '6 طلبات؛ إرسالان أُبعدا عند المدخل؛ ولا طلب دون مسؤول',
      band: 'الاستمارة لا تتوقف عند زر «إرسال»: المهم أين يصل الإرسال، عند من، وما يُعرف عن حالته.',
      tiles: [
        { big: '8 أسطر، 6 طلبات', l1: 'مكرَّر ورسالة مزعجة كانا يشغلان سطرين', l2: 'ويُبعَدان عند المدخل' },
        { big: 'مسؤول', l1: 'لكل طلب اسم مقابله، وحالة', l2: 'لا جواب مزدوج، ولا نسيان', hot: true },
        { big: 'أجل ظاهر', l1: 'مستلَم منذ ساعتين، أو منذ ستة أيام', l2: 'التأخر يُرى قبل مكالمة الزبون' },
      ],
      line1: 'الجدول يسجّل أسطراً؛ ولا يقول من يتكفل بها، ولا منذ متى تنتظر.',
      line2: 'والاستمارة قد تبقى هي نفسها: ما يجري بعد «إرسال» هو الذي يتغيّر.',
      note: 'مثال مركَّب · ورشة حدادة، ثمانية إرسالات في أسبوع.',
    },
    champs: {
      title: 'اثنا عشر حقلاً، أو خمسة',
      alt: 'استمارة طلب عرض سعر من اثني عشر حقلاً. خمسة تبقى: الاسم، الهاتف، الحاجة في جملة، الولاية، وصورة أو مخطط اختياري. وسبعة تُشطب: اللقب، تأكيد الهاتف، وتاريخ الميلاد، غير نافعة؛ والعنوان الكامل، المؤسسة، الميزانية، و«كيف عرفتمونا»، تُسأل في أول تبادل. وعلى الجانب: باثني عشر حقلاً، 41 شخصاً من 100 يكملون؛ وبخمسة، 63 من 100.',
      header: 'مثال مركَّب · طلب عرض سعر · اثنا عشر حقلاً عند الفتح، وخمسة بعد الفرز',
      left: 'الاستمارة، حقلاً بعد حقل',
      fields: ['الاسم', 'اللقب', 'الهاتف', 'تأكيد الهاتف', 'حاجتكم، في جملة', 'تاريخ الميلاد', 'الولاية', 'العنوان الكامل', 'صورة أو مخطط، اختياري', 'المؤسسة، السجل', 'الميزانية', 'كيف عرفتمونا'],
      why: ['غير نافع', 'لاحقاً'],
      right: 'قبل، وبعد',
      before: ['12 حقلاً', '41 شخصاً من 100 يكملون إلى الآخر'],
      after: ['5 حقول', '63 شخصاً من 100 يكملون إلى الآخر'],
      sums: ['3 حقول غير نافعة: لم يكن أحد يستعملها', '4 حقول مؤجَّلة: تُسأل في أول تبادل', '5 حقول باقية: من، كيف نتصل به، ماذا، أين، ووثيقة'],
      caveat: 'أرقام المثال؛ قيسوا أرقامكم',
      band: 'كل حقل سؤال يُطرح على مجهول: لا تطلبوا عند المدخل إلا ما يلزم للاتصال به.',
      tiles: [
        { big: '5 حقول', l1: 'من، كيف نتصل به، ماذا، أين، ووثيقة', l2: 'والباقي يُسأل في أول تبادل', hot: true },
        { big: 'الهاتف أولاً', l1: 'يُراجَع أثناء الكتابة، بكل الصيغ', l2: 'محلي أو دولي' },
        { big: 'قياس التخلّي', l1: 'كم يفتحون الاستمارة، وكم يرسلونها', l2: 'وعند أي حقل يتوقفون' },
      ],
      line1: 'في المثال، الاستمارة الطويلة لا تجمع معلومات أكثر: تجمع طلبات أقل.',
      line2: 'والحقول السبعة المسحوبة لم تضع: أربعة تُسأل في الهاتف، وثلاثة لم يفتقدها أحد.',
      note: 'مثال مركَّب · طلب عرض سعر؛ قيسوا عندكم حصة من يكملون إلى الآخر.',
    },
  },
};
