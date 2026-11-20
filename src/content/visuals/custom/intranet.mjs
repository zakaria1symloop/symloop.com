// Bespoke animated figures for the 2027 "comment créer un intranet" post.
//  accueil(): the home page of an intranet as a wireframe. A screen with a
//             search bar and five blocks (memos, requests, documents,
//             directory, applications); each block appears with a numbered
//             mark, and the matching note appears on the right. Five blocks,
//             not twenty.
//  lecture(): who has read a memo. A cumulative curve of readers over five
//             days out of 45 recipients, drawn progressively: 21, 27, then a
//             reminder on day 2 to the 18 who have not read, 36, 38, 41. A
//             dashed curve shows the same memo without a reminder. Two boxes
//             compare a messaging group and the intranet.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function drawLine(css, P, id, at, dur, len) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{stroke-dashoffset:${len}}${(at + dur).toFixed(1)}%,100%{stroke-dashoffset:0}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
const I = (x) => `⁦${x}⁩`;
const TINT = 'rgba(242,181,68,0.06)';
const DARK = '#0b0b0b';

function tiles(c, css, P, ky, ts, at0) {
  let s = '';
  ts.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, at0 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? TINT : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  return s;
}
const motionOff = (P) => `@media (prefers-reduced-motion: reduce){svg [style*="${P}-"]{animation:none !important}}`;
const mark = (c, x, y, n) => circle(c, x, y, 9, { fill: C.accent }) + text(c, x, y + 3.5, String(n), { size: 9.5, font: 'mono', fill: '#000', weight: 500, anchor: 'middle' });

// the five blocks of the home page: x, y, width, height
const BLOCKS = [[96, 184, 300, 112], [408, 184, 296, 112], [96, 308, 196, 100], [304, 308, 196, 100], [512, 308, 192, 100]];

export function accueil(t, rtl) {
  const c = ctx(rtl); const P = 'ia'; const css = []; const H = 648;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  // the screen and its top bar with the search field
  s += `<g style="animation:${show(css, P, 'scr', 4)}">` + rect(c, 80, 142, 640, 280, { stroke: C.fg70, fill: DARK }) + line(c, 80, 172, 720, 172, { stroke: C.line2 }) + text(c, 96, 161, t.brand, { size: 9, font: 'mono', fill: C.fg70 }) + rect(c, 300, 149, 280, 17, { stroke: C.line2, fill: C.fill }) + text(c, 310, 161, t.search, { size: 8.5, fill: C.fg55 }) + text(c, 704, 161, t.account, { size: 9, fill: C.fg70, anchor: 'end' }) + '</g>';
  t.blocks.forEach((k, i) => {
    const [x, y, w, h] = BLOCKS[i]; const at = 9 + i * 8;
    s += `<g style="animation:${show(css, P, `b${i}`, at)}">` + rect(c, x, y, w, h, { stroke: i === 0 ? C.accent : C.line2, fill: C.fill }) + text(c, x + 12, y + 20, k.name, { size: 10.5, fill: C.fg, weight: 500 }) + k.lines.map((ln, j) => text(c, x + 12, y + 40 + j * 16, ln, { size: 9, fill: j === 0 && i === 0 ? C.accent : C.fg70 })).join('') + mark(c, x + w - 16, y + 16, i + 1) + '</g>';
    // the note on the right
    const ny = 150 + i * 54;
    s += `<g style="animation:${show(css, P, `n${i}`, at + 3)}">` + mark(c, 762, ny + 6, i + 1) + text(c, 782, ny + 6, k.note, { size: 10.5, fill: C.fg, weight: 500 }) + text(c, 782, ny + 23, k.note2, { size: 9.5, fill: C.fg70 }) + '</g>';
  });
  const by = 438;
  s += `<g style="animation:${show(css, P, 'bd', 54)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 498;
  s += tiles(c, css, P, ky, t.tiles, 58);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

const READ = [0, 21, 27, 36, 38, 41];
const NOREM = [[2, 27], [3, 29], [4, 30], [5, 30]];

export function lecture(t, rtl) {
  const c = ctx(rtl); const P = 'il'; const css = []; const H = 592;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const X = (d) => 150 + d * 116; const Y = (n) => 340 - n * 4;
  // axes
  s += `<g style="animation:${show(css, P, 'ax', 3)}">` + line(c, X(0), Y(0), X(5) + 20, Y(0), { stroke: C.fg35 }) + line(c, X(0), Y(0), X(0), Y(45) - 8, { stroke: C.fg35 }) + [0, 15, 30, 45].map((n) => text(c, X(0) - 10, Y(n) + 3, String(n), { size: 9, font: 'mono', fill: C.fg55, anchor: 'end' }) + (n ? line(c, X(0), Y(n), X(5) + 20, Y(n), { stroke: C.line, dash: n === 45 ? '4 3' : '2 6' }) : '')).join('') + t.days.map((n, d) => text(c, X(d), Y(0) + 17, n, { size: 9, font: 'mono', fill: C.fg55, anchor: 'middle' })).join('') + text(c, X(5) + 20, Y(45) - 6, t.all, { size: 9, font: 'mono', fill: C.fg55, anchor: 'end' }) + text(c, 80, 150, t.yaxis, { size: 9, font: 'mono', fill: C.fg55 }) + '</g>';
  // the curve with a reminder on day 2
  const pts = READ.map((n, d) => [X(d), Y(n)]); let len = 0; for (let i = 1; i < pts.length; i++) len += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]);
  const LL = Math.ceil(len);
  s += `<polyline points="${pts.map(([x, y]) => `${c.X(x).toFixed(1)},${y}`).join(' ')}" fill="none" stroke="${C.accent}" stroke-width="2" stroke-dasharray="${LL}" style="animation:${drawLine(css, P, 'cv', 8, 30, LL)}"/>`;
  READ.forEach((n, d) => { if (d) s += `<g style="animation:${show(css, P, `p${d}`, 8 + d * 6)}">` + circle(c, X(d), Y(n), 4, { fill: C.accent }) + text(c, X(d), Y(n) - 10, String(n), { size: 10.5, font: 'mono', fill: C.accent, weight: 500, anchor: 'middle' }) + '</g>'; });
  // the reminder
  s += `<g style="animation:${show(css, P, 'rm', 21)}">` + line(c, X(2), Y(0), X(2), Y(45), { stroke: C.fg70, dash: '3 3' }) + text(c, X(2) + 8, Y(45) + 12, t.reminder, { size: 9.5, fill: C.fg }) + '</g>';
  // the same memo without a reminder
  s += `<g style="animation:${show(css, P, 'nr', 42)}">` + `<polyline points="${NOREM.map(([d, n]) => `${c.X(X(d)).toFixed(1)},${Y(n)}`).join(' ')}" fill="none" stroke="${C.fg55}" stroke-width="1.5" stroke-dasharray="5 4"/>` + text(c, X(5), Y(30) + 16, t.noReminder, { size: 9, fill: C.fg55, anchor: 'end' }) + '</g>';
  // two boxes on the right
  [t.chat, t.intra].forEach((k, i) => {
    const y = 160 + i * 98; const hot = i === 1;
    s += `<g style="animation:${show(css, P, `bx${i}`, 46 + i * 6)}">` + rect(c, 800, y, 320, 86, { stroke: hot ? C.accent : C.line2, fill: hot ? TINT : C.fill }) + text(c, 814, y + 20, k.name, { size: 10.5, fill: hot ? C.accent : C.fg, weight: 500 }) + k.lines.map((ln, j) => text(c, 814, y + 38 + j * 15, ln, { size: 9, fill: C.fg70 })).join('') + '</g>';
  });
  const by = 372;
  s += `<g style="animation:${show(css, P, 'bd', 60)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10, font: 'mono', fill: C.fg }) + '</g>';
  const ky = 432;
  s += tiles(c, css, P, ky, t.tiles, 64);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    accueil: {
      title: 'La page d’accueil d’un intranet : cinq blocs, pas vingt',
      alt: 'Maquette de la page d’accueil d’un intranet, avec une barre de recherche et cinq blocs numérotés. 1, les notes de service, avec un accusé de lecture. 2, les demandes, avec leur état. 3, les documents, dans leur version en vigueur. 4, l’annuaire, qui dit qui fait quoi et qui remplace qui. 5, les applications, ouvertes avec une seule connexion.',
      header: 'Exemple construit · la page d’accueil d’une entreprise de 45 personnes · un bloc par besoin, un responsable par bloc',
      brand: 'intranet', search: 'rechercher : une procédure, une personne, un formulaire', account: 'mon compte',
      blocks: [
        { name: 'Notes de service', lines: ['Fermeture annuelle : dates · lue par 38 sur 45', 'Nouvelle procédure d’achat · à lire', 'Arrivée : responsable du dépôt'], note: 'Les notes de service', note2: 'une version, datée, avec un accusé de lecture' },
        { name: 'Mes demandes', lines: ['matériel · chez le responsable depuis 1 jour', 'absence · validée', '+ nouvelle demande'], note: 'Les demandes internes', note2: 'un formulaire, un circuit, et l’on voit où elle en est' },
        { name: 'Documents', lines: ['procédures · 14', 'modèles · 9', 'version en vigueur'], note: 'Les documents', note2: 'la version en vigueur, pas « final_v3 »' },
        { name: 'Qui fait quoi', lines: ['45 personnes, 3 sites', 'par service', 'poste, remplaçant'], note: 'L’annuaire', note2: 'qui fait quoi, où, et qui le remplace' },
        { name: 'Mes applications', lines: ['gestion commerciale', 'messagerie', 'pointage'], note: 'Les applications', note2: 'une porte d’entrée, une seule connexion' },
      ],
      band: 'Cinq blocs, pas vingt : chaque bloc a un responsable nommé, et ce qui n’est plus à jour sort de la page.',
      tiles: [
        { big: '5 blocs', l1: 'notes, demandes, documents, annuaire, applications', l2: 'un sixième se mérite' },
        { big: '1 responsable par bloc', l1: 'une personne nommée, qui le tient à jour', l2: 'sans elle, le bloc meurt en trois mois', hot: true },
        { big: '1 recherche', l1: 'une procédure, une personne ou un formulaire', l2: 'ce qu’on tape et qu’on ne trouve pas se note' },
      ],
      line1: 'Un intranet n’est pas un site de plus : c’est l’endroit où se trouve la version qui fait foi, et où l’on voit où en est sa demande.',
      line2: 'Il se remplit avant d’ouvrir : une page vide le premier jour, et personne ne revient le deuxième.',
      note: 'Exemple construit · blocs et contenus à adapter ; commencez par les dix questions que l’on vous pose le plus souvent.',
    },
    lecture: {
      title: 'Qui a lu la note : 60 % au deuxième jour, 91 % après une relance',
      alt: 'Courbe du nombre de lecteurs d’une note de service sur cinq jours, pour 45 destinataires. 21 lecteurs le premier jour, 27 le deuxième. Une relance est envoyée le deuxième jour aux 18 personnes qui n’ont pas lu : 36 lecteurs le troisième jour, 38 le quatrième, 41 le cinquième. Sans relance, la courbe plafonne à 30. Deux encadrés comparent un groupe de messagerie, où l’on ne sait pas qui a lu, et l’intranet, où la note est lue par 41 personnes sur 45.',
      header: 'Exemple construit · une note de service publiée un lundi · 45 destinataires · un bouton « j’ai lu »',
      yaxis: 'lecteurs', all: '45 destinataires', days: ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'lundi suivant'],
      reminder: 'relance aux 18 qui n’ont pas lu', noReminder: 'sans relance : 30',
      chat: { name: 'La même note, dans un groupe de messagerie', lines: ['envoyée à 45 personnes', 'lue par combien : on ne sait pas', 'retrouvée en remontant le fil'] },
      intra: { name: 'Sur l’intranet', lines: ['lue par 41 personnes sur 45', '4 personnes à voir directement', 'retrouvée en la cherchant'] },
      band: 'taux de lecture = lecteurs ÷ destinataires · mercredi : 27 ÷ 45 = 60 % · après relance, lundi suivant : 41 ÷ 45 = 91 %',
      tiles: [
        { big: '60 % au deuxième jour', l1: '27 lecteurs sur 45, sans rien faire de plus', l2: 'ensuite la courbe s’aplatit' },
        { big: '91 % après une relance', l1: 'envoyée aux 18 qui n’ont pas lu, pas à tous', l2: '41 sur 45 ; les 4 autres se voient en personne', hot: true },
        { big: 'un bouton « j’ai lu »', l1: 'un accusé de lecture, pas un contrôle', l2: 'pour les notes qui engagent, pas pour tout' },
      ],
      line1: 'Une note de service n’est pas faite quand elle est envoyée : elle est faite quand ceux qu’elle concerne l’ont lue.',
      line2: 'L’intranet ne rend pas les notes plus intéressantes ; il dit qui ne l’a pas lue, et permet de ne relancer que ceux-là.',
      note: 'Exemple construit · 45 destinataires et lectures inventés ; l’accusé de lecture se réserve aux notes qui engagent.',
    },
  },
  en: {
    accueil: {
      title: 'The home page of an intranet: five blocks, not twenty',
      alt: 'Mock-up of the home page of an intranet, with a search bar and five numbered blocks. 1, memos, with a read receipt. 2, requests, with their status. 3, documents, in their current version. 4, the directory, which says who does what and who stands in for whom. 5, applications, opened with a single sign-in.',
      header: 'Constructed example · the home page of a company of 45 people · one block per need, one owner per block',
      brand: 'intranet', search: 'search: a procedure, a person, a form', account: 'my account',
      blocks: [
        { name: 'Memos', lines: ['Annual closure: dates · read by 38 of 45', 'New purchasing procedure · to read', 'Arrival: warehouse manager'], note: 'Memos', note2: 'one version, dated, with a read receipt' },
        { name: 'My requests', lines: ['equipment · with the manager for 1 day', 'absence · approved', '+ new request'], note: 'Internal requests', note2: 'one form, one route, and you see where it stands' },
        { name: 'Documents', lines: ['procedures · 14', 'templates · 9', 'current version'], note: 'Documents', note2: 'the current version, not “final_v3”' },
        { name: 'Who does what', lines: ['45 people, 3 sites', 'by department', 'extension, stand-in'], note: 'The directory', note2: 'who does what, where, and who stands in' },
        { name: 'My applications', lines: ['sales management', 'email', 'time clock'], note: 'Applications', note2: 'one way in, a single sign-in' },
      ],
      band: 'Five blocks, not twenty: each block has a named owner, and what is no longer up to date leaves the page.',
      tiles: [
        { big: '5 blocks', l1: 'memos, requests, documents, directory, applications', l2: 'a sixth has to earn its place' },
        { big: '1 owner per block', l1: 'a named person, who keeps it up to date', l2: 'without them, the block dies in three months', hot: true },
        { big: '1 search', l1: 'a procedure, a person or a form', l2: 'what is typed and not found is noted' },
      ],
      line1: 'An intranet is not one more site: it is the place where the authoritative version is, and where you see where your request stands.',
      line2: 'It is filled before it opens: an empty page on day one, and nobody comes back on day two.',
      note: 'Constructed example · blocks and content to adapt; start with the ten questions you are asked most often.',
    },
    lecture: {
      title: 'Who has read the memo: 60 % on day two, 91 % after one reminder',
      alt: 'Curve of the number of readers of a memo over five days, for 45 recipients. 21 readers on the first day, 27 on the second. A reminder is sent on the second day to the 18 people who have not read it: 36 readers on the third day, 38 on the fourth, 41 on the fifth. Without a reminder, the curve levels off at 30. Two boxes compare a messaging group, where nobody knows who has read it, and the intranet, where the memo is read by 41 people out of 45.',
      header: 'Constructed example · a memo published on a Monday · 45 recipients · an “I have read it” button',
      yaxis: 'readers', all: '45 recipients', days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'next Monday'],
      reminder: 'reminder to the 18 who have not read it', noReminder: 'no reminder: 30',
      chat: { name: 'The same memo, in a messaging group', lines: ['sent to 45 people', 'read by how many: nobody knows', 'found by scrolling back up'] },
      intra: { name: 'On the intranet', lines: ['read by 41 people out of 45', '4 people to see in person', 'found by searching for it'] },
      band: 'read rate = readers ÷ recipients · Wednesday: 27 ÷ 45 = 60 % · after the reminder, the next Monday: 41 ÷ 45 = 91 %',
      tiles: [
        { big: '60 % on day two', l1: '27 readers out of 45, doing nothing more', l2: 'after that the curve flattens' },
        { big: '91 % after one reminder', l1: 'sent to the 18 who have not read it, not to all', l2: '41 out of 45; the other 4 are seen in person', hot: true },
        { big: 'an “I have read it” button', l1: 'a read receipt, not a check on people', l2: 'for memos that commit, not for everything' },
      ],
      line1: 'A memo is not done when it is sent: it is done when the people it concerns have read it.',
      line2: 'The intranet does not make memos more interesting; it says who has not read it, and lets you remind only them.',
      note: 'Constructed example · 45 recipients and invented readings; keep the read receipt for memos that commit people.',
    },
  },
  ar: {
    accueil: {
      title: 'الصفحة الرئيسية للإنترانت: خمس خانات، لا عشرون',
      alt: 'نموذج للصفحة الرئيسية لإنترانت، بشريط بحث وخمس خانات مرقَّمة. 1، المذكرات، مع إشعار بالقراءة. 2، الطلبات، مع حالتها. 3، الوثائق، في نسختها السارية. 4، الدليل، الذي يقول من يفعل ماذا ومن يعوّض من. 5، التطبيقات، تُفتح بتسجيل دخول واحد.',
      header: 'مثال مركَّب · الصفحة الرئيسية لمؤسسة من 45 شخصاً · خانة لكل حاجة، ومسؤول لكل خانة',
      brand: 'إنترانت', search: 'بحث: إجراء، شخص، أو استمارة', account: 'حسابي',
      blocks: [
        { name: 'المذكرات', lines: ['الغلق السنوي: التواريخ · قرأها 38 من 45', 'إجراء الشراء الجديد · للقراءة', 'قدوم: مسؤول المستودع'], note: 'المذكرات', note2: 'نسخة واحدة، مؤرَّخة، مع إشعار بالقراءة' },
        { name: 'طلباتي', lines: ['عتاد · عند المسؤول منذ يوم', 'غياب · مصادَق عليه', '+ طلب جديد'], note: 'الطلبات الداخلية', note2: 'استمارة، مسار، ونرى أين وصل الطلب' },
        { name: 'الوثائق', lines: ['إجراءات · 14', 'نماذج · 9', 'النسخة السارية'], note: 'الوثائق', note2: `النسخة السارية، لا ${I('«final_v3»')}` },
        { name: 'من يفعل ماذا', lines: ['45 شخصاً، 3 مواقع', 'حسب المصلحة', 'الهاتف، والمعوِّض'], note: 'الدليل', note2: 'من يفعل ماذا، أين، ومن يعوّضه' },
        { name: 'تطبيقاتي', lines: ['التسيير التجاري', 'البريد', 'تسجيل الحضور'], note: 'التطبيقات', note2: 'مدخل واحد، وتسجيل دخول واحد' },
      ],
      band: 'خمس خانات، لا عشرون: لكل خانة مسؤول مسمّى، وما لم يعد محدَّثاً يخرج من الصفحة.',
      tiles: [
        { big: '5 خانات', l1: 'مذكرات، طلبات، وثائق، دليل، وتطبيقات', l2: 'السادسة تُستحَق' },
        { big: 'مسؤول لكل خانة', l1: 'شخص مسمّى، يحدّثها', l2: 'ودونه، تموت الخانة في ثلاثة أشهر', hot: true },
        { big: 'بحث واحد', l1: 'إجراء، شخص، أو استمارة', l2: 'ما يُكتب ولا يُعثر عليه يُسجَّل' },
      ],
      line1: 'الإنترانت ليس موقعاً إضافياً: هو المكان الذي توجد فيه النسخة المعتمَدة، وحيث نرى أين وصل طلبنا.',
      line2: 'يُملأ قبل أن يُفتح: صفحة فارغة في اليوم الأول، ولا أحد يعود في الثاني.',
      note: 'مثال مركَّب · خانات ومحتويات تُكيَّف؛ ابدؤوا بالأسئلة العشرة التي تُطرح عليكم أكثر.',
    },
    lecture: {
      title: `من قرأ المذكرة: ${I('60 %')} في اليوم الثاني، و${I('91 %')} بعد تذكير`,
      alt: 'منحنى عدد قرّاء مذكرة على خمسة أيام، لـ 45 مرسَلاً إليه. 21 قارئاً في اليوم الأول، و27 في الثاني. يُرسَل تذكير في اليوم الثاني إلى الثمانية عشر الذين لم يقرؤوا: 36 قارئاً في اليوم الثالث، 38 في الرابع، و41 في الخامس. ودون تذكير، يتوقف المنحنى عند 30. وإطاران يقارنان مجموعة مراسلة، حيث لا نعرف من قرأ، بالإنترانت، حيث قرأ المذكرة 41 شخصاً من 45.',
      header: 'مثال مركَّب · مذكرة نُشرت يوم اثنين · 45 مرسَلاً إليه · زر «قرأت»',
      yaxis: 'القرّاء', all: '45 مرسَلاً إليه', days: ['الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'الاثنين الموالي'],
      reminder: 'تذكير للـ 18 الذين لم يقرؤوا', noReminder: 'دون تذكير: 30',
      chat: { name: 'المذكرة نفسها، في مجموعة مراسلة', lines: ['أُرسلت إلى 45 شخصاً', 'كم قرأها: لا نعرف', 'يُعثر عليها بالصعود في المحادثة'] },
      intra: { name: 'على الإنترانت', lines: ['قرأها 41 شخصاً من 45', '4 أشخاص نراهم مباشرة', 'يُعثر عليها بالبحث عنها'] },
      band: `نسبة القراءة = القرّاء ÷ المرسَل إليهم · الأربعاء: ${I('27 ÷ 45 = 60 %')} · بعد التذكير، الاثنين الموالي: ${I('41 ÷ 45 = 91 %')}`,
      tiles: [
        { big: `${I('60 %')} في اليوم الثاني`, l1: '27 قارئاً من 45، دون فعل شيء إضافي', l2: 'وبعدها يتسطّح المنحنى' },
        { big: `${I('91 %')} بعد تذكير`, l1: 'يُرسَل للـ 18 الذين لم يقرؤوا، لا للجميع', l2: '41 من 45؛ والأربعة الباقون نراهم شخصياً', hot: true },
        { big: 'زر «قرأت»', l1: 'إشعار بالقراءة، لا مراقبة', l2: 'للمذكرات المُلزِمة، لا لكل شيء' },
      ],
      line1: 'المذكرة لا تُنجَز حين تُرسَل: تُنجَز حين يقرؤها من تعنيهم.',
      line2: 'الإنترانت لا يجعل المذكرات أكثر تشويقاً؛ يقول من لم يقرأها، ويسمح بتذكير هؤلاء وحدهم.',
      note: 'مثال مركَّب · 45 مرسَلاً إليه وقراءات مخترَعة؛ وإشعار القراءة يُخصَّص للمذكرات المُلزِمة.',
    },
  },
};
