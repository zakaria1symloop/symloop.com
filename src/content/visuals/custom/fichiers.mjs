// Bespoke animated figures for the 2027 "partage de fichiers en entreprise"
// post.
//  versions(): where one quotation lives today. Seven small cards (a
//              workstation, a mailbox, WhatsApp, a USB key...) appear one after
//              another, linked by the path of the copies, each with its own
//              file name; beside them, the same quotation in one shared space,
//              one name, four versions with author and date; three tiles.
//  course():   the race of one 200 MB file from the office to an online space.
//              Six lanes, one per upload rate, each with a dot that travels at
//              a speed proportional to the real time; the time appears when
//              the dot arrives; under them, how long moving 300 GB takes;
//              three tiles.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function travel(css, P, id, at, dur, dx) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:translateX(${dx}px)}${(at + dur).toFixed(1)}%,100%{transform:translateX(0)}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
const I = (x) => `⁦${x}⁩`;
const TINT = 'rgba(242,181,68,0.06)';

function tiles(c, css, P, ky, ts, at0) {
  let s = '';
  ts.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, at0 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? TINT : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  return s;
}
const motionOff = (P) => `@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"],svg rect[style*="${P}-"],svg circle[style*="${P}-"]{animation:none !important}}`;

// seven places, in the order the copies were made
const SPOTS = [[80, 160], [222, 160], [364, 160], [506, 160], [151, 252], [293, 252], [435, 252]];

export function versions(t, rtl) {
  const c = ctx(rtl); const P = 'fv'; const css = []; const H = 556;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const cw = 134, chh = 70;
  // the path of the copies, drawn under the cards
  SPOTS.forEach((p, i) => { if (!i) return; const a = SPOTS[i - 1]; s += `<g style="animation:${show(css, P, `p${i}`, 4 + i * 2.6)}">` + line(c, a[0] + cw / 2, a[1] + chh / 2, p[0] + cw / 2, p[1] + chh / 2, { stroke: C.fg35, dash: '4 4' }) + '</g>'; });
  t.spots.forEach((k, i) => {
    const [x, y] = SPOTS[i]; const last = i === SPOTS.length - 1;
    s += `<g style="animation:${show(css, P, `c${i}`, 4.4 + i * 2.6)}">` + rect(c, x, y, cw, chh, { stroke: last ? C.accent : C.line2, fill: '#0b0b0b' })
      + text(c, x + 10, y + 20, k.place, { size: 9.5, fill: C.fg, weight: 500 }) + text(c, x + 10, y + 38, k.file, { size: 8.5, font: 'mono', fill: last ? C.accent : C.fg70 }) + text(c, x + 10, y + 55, k.date, { size: 8, font: 'mono', fill: C.fg55 }) + '</g>';
  });
  s += `<g style="animation:${show(css, P, 'q', 23)}">` + text(c, 80, 350, t.question, { size: 10.5, fill: C.fg }) + text(c, 80, 368, t.question2, { size: 10.5, fill: C.accent, weight: 500 }) + '</g>';
  // the same quotation in one shared space
  const px = 680, pw = 440, py = 142, ph = 236;
  s += `<g style="animation:${show(css, P, 'sp', 25)}">` + rect(c, px, py, pw, ph, { stroke: C.accent, fill: TINT }) + text(c, px + 14, py + 24, t.space.title, { size: 11.5, fill: C.accent, weight: 500 }) + text(c, px + 14, py + 40, t.space.sub, { size: 8.5, font: 'mono', fill: C.fg55 })
    + rect(c, px + 14, py + 54, pw - 28, 28, { stroke: C.line2, fill: '#0b0b0b' }) + text(c, px + 26, py + 72, t.space.file, { size: 10, font: 'mono', fill: C.fg, weight: 500 }) + '</g>';
  t.space.rows.forEach((r, i) => {
    const y = py + 108 + i * 30;
    s += `<g style="animation:${show(css, P, `v${i}`, 27 + i * 1.8)}">` + text(c, px + 14, y, r.v, { size: 10, font: 'mono', fill: i === 0 ? C.accent : C.fg, weight: i === 0 ? 500 : 400 }) + text(c, px + 100, y, r.who, { size: 9.5, fill: C.fg70 }) + text(c, px + pw - 14, y, r.note, { size: 9, fill: i === 0 ? C.accent : C.fg55, anchor: 'end' }) + '</g>';
  });
  const ky = 396;
  s += tiles(c, css, P, ky, t.tiles, 35);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// seconds to send 200 MB: office network, then 50, 20, 10, 5 and 2 Mbit/s up
const SECS = [2, 32, 80, 160, 320, 800];

export function course(t, rtl) {
  const c = ctx(rtl); const P = 'fc'; const css = []; const H = 626;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const x0 = 300, x1 = 990, ly = 176, lh = 36; const dist = x1 - x0;
  s += `<g style="animation:${show(css, P, 'ends', 3)}">` + text(c, x0, ly - 22, t.from, { size: 9.5, fill: C.fg70, anchor: 'middle' }) + text(c, x1, ly - 22, t.to, { size: 9.5, fill: C.fg70, anchor: 'middle' }) + '</g>';
  SECS.forEach((sec, i) => {
    const y = ly + i * lh; const slow = sec >= 160; const dur = Math.max(0.6, (sec / 800) * 74); const at = 5;
    s += `<g style="animation:${show(css, P, `l${i}`, 3 + i * 0.3)}">` + text(c, 80, y + 4, t.lanes[i], { size: 10, fill: i === 0 ? C.fg : C.fg70, weight: i === 0 ? 500 : 300 }) + line(c, x0, y, x1, y, { stroke: C.line2 }) + circle(c, x0, y, 3, { fill: C.fg35 }) + circle(c, x1, y, 3, { fill: C.fg35 }) + '</g>';
    s += `<circle cx="${c.X(x1)}" cy="${y}" r="7" fill="${slow ? C.accent : C.fg}" style="animation:${travel(css, P, `d${i}`, at, dur, rtl ? dist : -dist)}"/>`;
    s += `<g style="animation:${show(css, P, `t${i}`, Math.min(96, at + dur + 0.6))}">` + text(c, x1 + 18, y + 4, t.times[i], { size: 11, font: 'mono', fill: slow ? C.accent : C.fg, weight: 500 }) + '</g>';
  });
  // moving 300 GB
  const my = ly + SECS.length * lh + 16;
  s += `<g style="animation:${show(css, P, 'mt', 84)}">` + text(c, 80, my, t.move, { size: 10.5, fill: C.fg, weight: 500 }) + '</g>';
  t.moves.forEach((m, i) => {
    const w = 200, x = 80 + i * 210; const slow = i >= 2;
    s += `<g style="animation:${show(css, P, `m${i}`, 85 + i * 1.6)}">` + rect(c, x, my + 10, w, 44, { stroke: slow ? C.accent : C.line2, fill: slow ? TINT : C.fill }) + text(c, x + 12, my + 30, m.v, { size: 12, font: 'mono', fill: slow ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, my + 45, m.r, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>';
  });
  const ky = my + 70;
  s += tiles(c, css, P, ky, t.tiles, 92);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    versions: {
      title: 'Un devis, sept endroits, quatre contenus différents',
      alt: 'Le même devis se trouve à sept endroits : le poste du commercial, la boîte mail du client, le WhatsApp du gérant, une clé USB, le poste de la comptable, l’ancien serveur et le téléphone du commercial, sous cinq noms et quatre contenus différents. À côté, le même devis dans un espace partagé : un seul fichier, un seul nom, quatre versions avec leur auteur et leur date, la dernière marquée comme envoyée au client.',
      header: 'Exemple construit · un devis modifié quatre fois en neuf jours, dans une entreprise de trente postes',
      spots: [
        { place: 'Poste du commercial', file: 'devis_v1.xlsx', date: '3 mars' }, { place: 'Boîte mail du client', file: 'devis_v1.pdf', date: '3 mars' }, { place: 'WhatsApp du gérant', file: 'devis_v2 corrigé', date: '5 mars' }, { place: 'Clé USB', file: 'devis_v2 (copie)', date: '6 mars' },
        { place: 'Poste de la comptable', file: 'devis_final', date: '9 mars' }, { place: 'Ancien serveur', file: 'devis_final_2', date: '9 mars' }, { place: 'Téléphone du commercial', file: 'devis_final_ok', date: '12 mars' },
      ],
      question: 'Sept endroits, cinq noms, quatre contenus.', question2: 'Lequel a été envoyé au client ?',
      space: { title: 'Le même devis, dans un espace partagé', sub: 'un seul fichier, un seul nom, un seul endroit', file: 'Devis 2027-0412 · Client A.xlsx', rows: [
        { v: 'version 4', who: '12 mars · commercial', note: 'envoyée au client' }, { v: 'version 3', who: '9 mars · comptable', note: 'remise corrigée' }, { v: 'version 2', who: '5 mars · gérant', note: 'prix revus' }, { v: 'version 1', who: '3 mars · commercial', note: 'première offre' },
      ] },
      tiles: [
        { big: '7 endroits, 4 contenus', l1: 'pour un seul devis', l2: 'personne ne sait lequel est le bon' },
        { big: '1 fichier, 4 versions', l1: 'avec l’auteur et la date de chacune', l2: 'on revient à la précédente en deux clics', hot: true },
        { big: '500 versions, 93 jours', l1: 'gardées par défaut dans Microsoft 365', l2: 'historique des versions, puis corbeille' },
      ],
      line1: 'Le problème n’est pas que les gens copient : c’est qu’il n’existe aucun endroit où le fichier est le bon.',
      line2: 'Un espace partagé ne supprime pas les versions : il les range dans l’ordre, sous un seul nom.',
      note: 'Exemple construit · noms de fichiers et dates sont inventés ; durées par défaut : documentation de Microsoft.',
    },
    course: {
      title: 'La course d’un fichier de 200 Mo : 2 secondes au bureau, 13 minutes en ligne',
      alt: 'Temps pour envoyer un fichier de 200 Mo depuis un poste vers un espace partagé. Sur le réseau du bureau : environ 2 secondes. Vers un espace en ligne, selon le débit montant du bureau : 32 secondes à 50 Mbit/s, 1 minute 20 à 20 Mbit/s, 2 minutes 40 à 10 Mbit/s, 5 minutes 20 à 5 Mbit/s, 13 minutes 20 à 2 Mbit/s. Pour déménager 300 Go : 13 heures à 50 Mbit/s, 33 heures à 20, 2,8 jours à 10, 5,6 jours à 5, 13,9 jours à 2.',
      header: 'Exemple construit · un plan de 200 Mo envoyé depuis un poste · le chiffre qui compte est le débit montant du bureau',
      from: 'le poste', to: 'l’espace partagé',
      lanes: ['Réseau du bureau', 'En ligne · 50 Mbit/s en montée', 'En ligne · 20 Mbit/s', 'En ligne · 10 Mbit/s', 'En ligne · 5 Mbit/s', 'En ligne · 2 Mbit/s'],
      times: ['2 s', '32 s', '1 min 20 s', '2 min 40 s', '5 min 20 s', '13 min 20 s'],
      move: 'Déménager 300 Go de fichiers vers un espace en ligne, sans interruption',
      moves: [{ v: '13 heures', r: 'à 50 Mbit/s' }, { v: '33 heures', r: 'à 20 Mbit/s' }, { v: '2,8 jours', r: 'à 10 Mbit/s' }, { v: '5,6 jours', r: 'à 5 Mbit/s' }, { v: '13,9 jours', r: 'à 2 Mbit/s' }],
      tiles: [
        { big: 'Mo × 8 ÷ Mbit/s', l1: 'donne le temps d’envoi en secondes', l2: '200 × 8 ÷ 10 = 160 s, soit 2 min 40 s' },
        { big: '13 min 20 s', l1: 'pour un seul plan, à 2 Mbit/s en montée', l2: 'contre 2 secondes sur le réseau du bureau', hot: true },
        { big: 'le débit montant', l1: 'pas le débit affiché sur l’abonnement', l2: 'il se mesure au bureau, à 10 heures' },
      ],
      line1: 'Un espace en ligne convient aux fichiers légers et aux équipes dispersées ; les fichiers lourds restent',
      line2: 'près de ceux qui les ouvrent, et montent en ligne la nuit, quand personne n’attend.',
      note: 'Exemple construit · temps théoriques, sans les pertes ni le partage de la ligne : les vôtres seront plus longs.',
    },
  },
  en: {
    versions: {
      title: 'One quotation, seven places, four different contents',
      alt: 'The same quotation sits in seven places: the salesperson’s workstation, the customer’s mailbox, the manager’s WhatsApp, a USB key, the accountant’s workstation, the old server and the salesperson’s phone, under five names and with four different contents. Beside them, the same quotation in a shared space: one file, one name, four versions with their author and date, the last one marked as sent to the customer.',
      header: 'Constructed example · a quotation changed four times in nine days, in a company with thirty workstations',
      spots: [
        { place: 'Salesperson’s PC', file: 'quote_v1.xlsx', date: '3 March' }, { place: 'Customer’s mailbox', file: 'quote_v1.pdf', date: '3 March' }, { place: 'Manager’s WhatsApp', file: 'quote_v2 fixed', date: '5 March' }, { place: 'USB key', file: 'quote_v2 (copy)', date: '6 March' },
        { place: 'Accountant’s PC', file: 'quote_final', date: '9 March' }, { place: 'Old server', file: 'quote_final_2', date: '9 March' }, { place: 'Salesperson’s phone', file: 'quote_final_ok', date: '12 March' },
      ],
      question: 'Seven places, five names, four contents.', question2: 'Which one was sent to the customer?',
      space: { title: 'The same quotation, in a shared space', sub: 'one file, one name, one place', file: 'Quotation 2027-0412 · Customer A.xlsx', rows: [
        { v: 'version 4', who: '12 March · salesperson', note: 'sent to the customer' }, { v: 'version 3', who: '9 March · accountant', note: 'discount corrected' }, { v: 'version 2', who: '5 March · manager', note: 'prices revised' }, { v: 'version 1', who: '3 March · salesperson', note: 'first offer' },
      ] },
      tiles: [
        { big: '7 places, 4 contents', l1: 'for a single quotation', l2: 'nobody knows which one is right' },
        { big: '1 file, 4 versions', l1: 'each with its author and date', l2: 'back to the previous one in two clicks', hot: true },
        { big: '500 versions, 93 days', l1: 'kept by default in Microsoft 365', l2: 'version history, then recycle bin' },
      ],
      line1: 'The problem is not that people copy: it is that there is no place where the file is the right one.',
      line2: 'A shared space does not remove versions: it files them in order, under one name.',
      note: 'Constructed example · file names and dates are invented; default periods: Microsoft documentation.',
    },
    course: {
      title: 'The race of a 200 MB file: 2 seconds at the office, 13 minutes online',
      alt: 'Time to send a 200 MB file from a workstation to a shared space. On the office network: about 2 seconds. To an online space, depending on the office’s upload rate: 32 seconds at 50 Mbit/s, 1 minute 20 at 20 Mbit/s, 2 minutes 40 at 10 Mbit/s, 5 minutes 20 at 5 Mbit/s, 13 minutes 20 at 2 Mbit/s. To move 300 GB: 13 hours at 50 Mbit/s, 33 hours at 20, 2.8 days at 10, 5.6 days at 5, 13.9 days at 2.',
      header: 'Constructed example · a 200 MB drawing sent from a workstation · the figure that counts is the office’s upload rate',
      from: 'the workstation', to: 'the shared space',
      lanes: ['Office network', 'Online · 50 Mbit/s upload', 'Online · 20 Mbit/s', 'Online · 10 Mbit/s', 'Online · 5 Mbit/s', 'Online · 2 Mbit/s'],
      times: ['2 s', '32 s', '1 min 20 s', '2 min 40 s', '5 min 20 s', '13 min 20 s'],
      move: 'Moving 300 GB of files to an online space, without interruption',
      moves: [{ v: '13 hours', r: 'at 50 Mbit/s' }, { v: '33 hours', r: 'at 20 Mbit/s' }, { v: '2.8 days', r: 'at 10 Mbit/s' }, { v: '5.6 days', r: 'at 5 Mbit/s' }, { v: '13.9 days', r: 'at 2 Mbit/s' }],
      tiles: [
        { big: 'MB × 8 ÷ Mbit/s', l1: 'gives the sending time in seconds', l2: '200 × 8 ÷ 10 = 160 s, or 2 min 40 s' },
        { big: '13 min 20 s', l1: 'for a single drawing, at 2 Mbit/s upload', l2: 'against 2 seconds on the office network', hot: true },
        { big: 'the upload rate', l1: 'not the rate printed on the subscription', l2: 'it is measured at the office, at 10 a.m.' },
      ],
      line1: 'An online space suits light files and scattered teams; heavy files stay',
      line2: 'close to the people who open them, and go online at night, when nobody is waiting.',
      note: 'Constructed example · theoretical times, without losses or line sharing: yours will be longer.',
    },
  },
  ar: {
    versions: {
      title: 'عرض سعر واحد، سبعة أماكن، أربعة محتويات مختلفة',
      alt: 'عرض السعر نفسه موجود في سبعة أماكن: حاسوب البائع، علبة بريد الزبون، واتساب المسيّر، مفتاح USB، حاسوب المحاسبة، الخادم القديم، وهاتف البائع، بخمسة أسماء وأربعة محتويات مختلفة. وبجانبها عرض السعر نفسه في فضاء مشترك: ملف واحد، اسم واحد، أربعة إصدارات مع صاحب كل واحد وتاريخه، والأخير معلَّم بأنه أُرسل إلى الزبون.',
      header: 'مثال مركَّب · عرض سعر عُدِّل أربع مرات في تسعة أيام، في مؤسسة من ثلاثين حاسوباً',
      spots: [
        { place: 'حاسوب البائع', file: I('devis_v1.xlsx'), date: '3 مارس' }, { place: 'بريد الزبون', file: I('devis_v1.pdf'), date: '3 مارس' }, { place: 'واتساب المسيّر', file: I('devis_v2 corrigé'), date: '5 مارس' }, { place: 'مفتاح USB', file: I('devis_v2 (copie)'), date: '6 مارس' },
        { place: 'حاسوب المحاسبة', file: I('devis_final'), date: '9 مارس' }, { place: 'الخادم القديم', file: I('devis_final_2'), date: '9 مارس' }, { place: 'هاتف البائع', file: I('devis_final_ok'), date: '12 مارس' },
      ],
      question: 'سبعة أماكن، خمسة أسماء، أربعة محتويات.', question2: 'أيها أُرسل إلى الزبون؟',
      space: { title: 'عرض السعر نفسه، في فضاء مشترك', sub: 'ملف واحد، اسم واحد، مكان واحد', file: I('Devis 2027-0412 · Client A.xlsx'), rows: [
        { v: 'الإصدار 4', who: '12 مارس · البائع', note: 'أُرسل إلى الزبون' }, { v: 'الإصدار 3', who: '9 مارس · المحاسبة', note: 'تصحيح التخفيض' }, { v: 'الإصدار 2', who: '5 مارس · المسيّر', note: 'مراجعة الأسعار' }, { v: 'الإصدار 1', who: '3 مارس · البائع', note: 'العرض الأول' },
      ] },
      tiles: [
        { big: '7 أماكن، 4 محتويات', l1: 'لعرض سعر واحد', l2: 'لا أحد يعرف أيها الصحيح' },
        { big: 'ملف واحد، 4 إصدارات', l1: 'مع صاحب كل واحد وتاريخه', l2: 'نعود إلى السابق بنقرتين', hot: true },
        { big: '500 إصدار، 93 يوماً', l1: `تُحفظ افتراضياً في ${I('Microsoft 365')}`, l2: 'سجل الإصدارات، ثم سلة المحذوفات' },
      ],
      line1: 'المشكلة ليست أن الناس ينسخون: هي أنه لا يوجد مكان يكون فيه الملف هو الصحيح.',
      line2: 'الفضاء المشترك لا يحذف الإصدارات: يرتّبها بالتسلسل، تحت اسم واحد.',
      note: 'مثال مركَّب · أسماء الملفات والتواريخ مخترَعة؛ والمدد الافتراضية: وثائق مايكروسوفت.',
    },
    course: {
      title: 'سباق ملف من 200 ميغا: ثانيتان في المكتب، و13 دقيقة على الإنترنت',
      alt: 'الوقت اللازم لإرسال ملف من 200 ميغا من حاسوب إلى فضاء مشترك. على شبكة المكتب: نحو ثانيتين. وإلى فضاء على الإنترنت، حسب تدفق الرفع في المكتب: 32 ثانية بـ 50 ميغابت في الثانية، دقيقة و20 ثانية بـ 20، دقيقتان و40 ثانية بـ 10، 5 دقائق و20 ثانية بـ 5، و13 دقيقة و20 ثانية بـ 2. ولترحيل 300 غيغا: 13 ساعة بـ 50 ميغابت في الثانية، 33 ساعة بـ 20، 2,8 يوم بـ 10، 5,6 أيام بـ 5، و13,9 يوماً بـ 2.',
      header: 'مثال مركَّب · مخطط من 200 ميغا يُرسَل من حاسوب · الرقم المهم هو تدفق الرفع في المكتب',
      from: 'الحاسوب', to: 'الفضاء المشترك',
      lanes: ['شبكة المكتب', 'على الإنترنت · رفع 50 ميغابت/ثا', 'على الإنترنت · 20 ميغابت/ثا', 'على الإنترنت · 10 ميغابت/ثا', 'على الإنترنت · 5 ميغابت/ثا', 'على الإنترنت · 2 ميغابت/ثا'],
      times: ['2 ث', '32 ث', '1 د و20 ث', '2 د و40 ث', '5 د و20 ث', '13 د و20 ث'],
      move: 'ترحيل 300 غيغا من الملفات إلى فضاء على الإنترنت، دون انقطاع',
      moves: [{ v: '13 ساعة', r: 'بـ 50 ميغابت/ثا' }, { v: '33 ساعة', r: 'بـ 20 ميغابت/ثا' }, { v: '2,8 يوم', r: 'بـ 10 ميغابت/ثا' }, { v: '5,6 أيام', r: 'بـ 5 ميغابت/ثا' }, { v: '13,9 يوماً', r: 'بـ 2 ميغابت/ثا' }],
      tiles: [
        { big: 'ميغا × 8 ÷ ميغابت/ثا', l1: 'تعطي وقت الإرسال بالثواني', l2: `${I('200 × 8 ÷ 10 = 160')} ثانية، أي دقيقتان و40 ثانية` },
        { big: '13 دقيقة و20 ثانية', l1: 'لمخطط واحد، برفع 2 ميغابت/ثا', l2: 'مقابل ثانيتين على شبكة المكتب', hot: true },
        { big: 'تدفق الرفع', l1: 'لا التدفق المكتوب على الاشتراك', l2: 'يُقاس في المكتب، على العاشرة صباحاً' },
      ],
      line1: 'الفضاء على الإنترنت يناسب الملفات الخفيفة والفرق المتفرقة؛ والملفات الثقيلة تبقى',
      line2: 'قرب من يفتحونها، وتصعد إلى الإنترنت ليلاً، حين لا ينتظر أحد.',
      note: 'مثال مركَّب · أوقات نظرية، دون احتساب الضياع ولا تقاسم الخط: وأوقاتكم ستكون أطول.',
    },
  },
};
