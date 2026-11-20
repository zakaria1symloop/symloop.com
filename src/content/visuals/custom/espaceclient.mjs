// Bespoke animated figures for the 2027 "comment créer un espace client" post.
//  appels():  one hundred incoming calls of a week, sorted by reason. Five
//             horizontal bars grow one after another; the first three (state
//             of the file, resend a document, did you receive my document)
//             are accented and summed in a box on the right: 76 of 100.
//  dossier(): the file as the customer sees it. A five-stage track whose
//             progress line is drawn up to the stage that waits for the
//             customer, a list of four documents ticking in one by one, the
//             next step, and on the right the log of what happened.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function growX(css, P, id, at, dur, rtl) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'} center;animation:${P}-${id} ${LOOP}s linear infinite`; }
function drawLine(css, P, id, at, dur, len) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{stroke-dashoffset:${len.toFixed(0)}}${(at + dur).toFixed(1)}%,100%{stroke-dashoffset:0}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
const TINT = 'rgba(242,181,68,0.06)';
const DARK = '#0b0b0b';
const PALE = 'rgba(255,255,255,0.85)';

function tiles(c, css, P, ky, ts, at0) {
  let s = '';
  ts.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, at0 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? TINT : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  return s;
}
const motionOff = (P) => `@media (prefers-reduced-motion: reduce){svg [style*="${P}-"]{animation:none !important}}`;

// one hundred calls of a week, by reason
const CALLS = [38, 21, 17, 9, 15];

export function appels(t, rtl) {
  const c = ctx(rtl); const P = 'kp'; const css = []; const H = 586;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const bx = 400, pm = 12, y0 = 150, rh = 44;
  CALLS.forEach((n, i) => {
    const y = y0 + i * rh; const hot = i < 3; const at = 5 + i * 7;
    s += `<g style="animation:${show(css, P, `r${i}`, at)}">` + text(c, 80, y + 15, t.rows[i], { size: 11.5, fill: hot ? C.fg : C.fg70 }) + '</g>';
    s += `<g style="${growX(css, P, `b${i}`, at + 1, 4, rtl)}">` + rect(c, bx, y, n * pm, 22, { stroke: hot ? C.accent : C.fg55, fill: hot ? C.accent : i === 4 ? PALE : C.fill }) + '</g>';
    s += `<g style="animation:${show(css, P, `n${i}`, at + 5)}">` + text(c, bx + n * pm + 10, y + 16, String(n), { size: 13, font: 'mono', fill: hot ? C.accent : C.fg, weight: 500 }) + '</g>';
  });
  // the first three reasons, summed
  s += `<g style="animation:${show(css, P, 'sum', 28)}">` + rect(c, 900, 146, 220, 118, { stroke: C.accent, fill: TINT })
    + text(c, 916, 192, t.sum, { size: 26, font: 'mono', fill: C.accent, weight: 500 })
    + text(c, 916, 220, t.sumL1, { size: 9.5, fill: C.fg }) + text(c, 916, 236, t.sumL2, { size: 9.5, fill: C.fg70 }) + '</g>';
  s += `<g style="animation:${show(css, P, 'n3', 34)}">` + rect(c, 900, 278, 220, 30, { stroke: C.line2, fill: C.fill }) + text(c, 912, 297, t.side3, { size: 9, fill: C.fg70 }) + '</g>';
  s += `<g style="animation:${show(css, P, 'n4', 41)}">` + rect(c, 900, 322, 220, 30, { stroke: C.fg70, fill: C.fill }) + text(c, 912, 341, t.side4, { size: 9, fill: C.fg }) + '</g>';
  const by = 366;
  s += `<g style="animation:${show(css, P, 'bd', 48)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 426;
  s += tiles(c, css, P, ky, t.tiles, 54);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// status of the four documents: 0 received, 1 missing, 2 to redo
const DOCS = [0, 0, 1, 2];

export function dossier(t, rtl) {
  const c = ctx(rtl); const P = 'kd'; const css = []; const H = 630;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  // the customer's screen
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 640, 250, { stroke: C.fg35, fill: DARK }) + text(c, 96, 166, t.screenTitle, { size: 11, fill: C.fg, weight: 500 }) + text(c, 704, 166, t.ref, { size: 9.5, font: 'mono', fill: C.fg55, anchor: 'end' }) + line(c, 130, 200, 650, 200, { stroke: C.line2, sw: 2 }) + '</g>';
  const sx = (k) => 130 + k * 130;
  s += `<polyline points="${c.X(sx(0))},200 ${c.X(sx(1))},200" fill="none" stroke="${C.accent}" stroke-width="2.5" stroke-dasharray="130" style="animation:${drawLine(css, P, 'pr', 15, 4, 130)}"/>`;
  t.stages.forEach((name, k) => {
    const done = k === 0; const cur = k === 1;
    s += `<g style="animation:${show(css, P, `s${k}`, 5 + k * 2)}">` + circle(c, sx(k), 200, 9, { fill: cur ? C.accent : done ? PALE : DARK, stroke: cur ? C.accent : done ? 'none' : C.fg35, sw: 1.5 })
      + text(c, sx(k), 226, name, { size: 9.5, fill: cur ? C.accent : done ? C.fg : C.fg55, weight: cur ? 500 : 300, anchor: 'middle' }) + '</g>';
  });
  s += `<g style="animation:${show(css, P, 'wt', 20)}">` + text(c, sx(1), 240, t.waiting, { size: 8.5, font: 'mono', fill: C.accent, anchor: 'middle' }) + '</g>';
  t.pieces.forEach(([name, status], j) => {
    const ry = 254 + j * 26; const st = DOCS[j]; const hot = st !== 0;
    s += `<g style="animation:${show(css, P, `d${j}`, 23 + j * 4)}">` + rect(c, 96, ry, 608, 20, { stroke: hot ? C.accent : C.line2, fill: hot ? TINT : C.fill })
      + rect(c, 104, ry + 5, 10, 10, { stroke: hot ? C.accent : 'none', fill: hot ? 'none' : PALE })
      + text(c, 124, ry + 14, name, { size: 10, fill: hot ? C.accent : C.fg })
      + text(c, 696, ry + 14, status, { size: 8.5, font: 'mono', fill: hot ? C.accent : C.fg55, anchor: 'end' }) + '</g>';
  });
  s += `<g style="animation:${show(css, P, 'nx', 40)}">` + rect(c, 96, 362, 608, 24, { stroke: C.accent, fill: TINT }) + text(c, 106, 378, t.next, { size: 9.5, fill: C.accent, weight: 500 }) + '</g>';
  // what happened
  s += `<g style="animation:${show(css, P, 'pb', 42)}">` + rect(c, 740, 144, 380, 250, { stroke: C.line2, fill: C.fill }) + text(c, 756, 166, t.journalTitle, { size: 11, fill: C.fg, weight: 500 }) + '</g>';
  t.events.forEach(([what, when], j) => {
    const ey = 180 + j * 52; const hot = j >= 2;
    s += `<g style="animation:${show(css, P, `e${j}`, 44 + j * 4)}">` + rect(c, 756, ey, 348, 44, { stroke: hot ? C.accent : C.line2, fill: DARK })
      + text(c, 768, ey + 18, what, { size: 9.5, fill: hot ? C.accent : C.fg }) + text(c, 768, ey + 34, when, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>';
  });
  const by = 410;
  s += `<g style="animation:${show(css, P, 'bd', 60)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 470;
  s += tiles(c, css, P, ky, t.tiles, 63);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    appels: {
      title: 'Cent appels d’une semaine, triés par motif',
      alt: 'Graphique en barres de cent appels entrants relevés sur une semaine, classés par motif. « Où en est mon dossier ? » : 38 appels. « Renvoyez-moi la facture, le document » : 21. « Avez-vous reçu ma pièce ? » : 17. Prendre ou déplacer un rendez-vous : 9. Vraies questions, un conseil ou un cas particulier : 15. Les trois premiers motifs, 76 appels sur 100, sont des questions dont la réponse existe déjà dans les dossiers de l’entreprise.',
      header: 'Exemple construit · cent appels entrants d’une semaine, classés par motif · en accent, ceux auxquels un espace client répond',
      rows: ['« Où en est mon dossier ? »', '« Renvoyez-moi la facture, le document »', '« Avez-vous reçu ma pièce ? »', 'Prendre ou déplacer un rendez-vous', 'Vraies questions : un conseil, un cas particulier'],
      sum: '76 / 100', sumL1: 'la réponse existe déjà chez vous', sumL2: 'l’espace client la montre sans appel',
      side3: 'se prend en ligne, avec un rappel', side4: 'restent des appels : ceux qui comptent',
      band: 'Trois motifs sur cinq sont des questions d’état : la réponse existe, mais elle est dans la tête de quelqu’un, dans un classeur ou dans une boîte mail.',
      tiles: [
        { big: '76 appels sur 100', l1: 'trois questions dont la réponse est dans vos dossiers', l2: 'état, document à renvoyer, pièce reçue', hot: true },
        { big: '9 rendez-vous', l1: 'se prennent et se déplacent en ligne', l2: 'avec un rappel la veille' },
        { big: '15 vraies questions', l1: 'le conseil, le cas particulier, le désaccord', l2: 'ceux-là méritent un appel' },
      ],
      line1: 'Comptez vos appels pendant une semaine avant de construire : le relevé dit par quel bloc commencer.',
      line2: 'Ici, l’état du dossier seul répond à 38 appels sur 100 : c’est le premier écran à livrer.',
      note: 'Exemple construit · société de services, cent appels entrants relevés sur une semaine ; refaites le relevé chez vous.',
    },
    dossier: {
      title: 'Le dossier, tel que le client le voit',
      alt: 'Écran d’un dossier dans un espace client. En haut, cinq étapes : demande reçue, pièces, traitement, validation, remise ; le dossier est arrêté à l’étape des pièces, marquée « en attente de vous ». En dessous, la liste de quatre pièces : pièce d’identité reçue, contrat signé reçu, justificatif d’adresse manquant et à déposer, attestation illisible et à refaire. Puis la prochaine étape : déposer deux pièces, ensuite traitement sous cinq jours ouvrés. À droite, le journal : dossier ouvert le jour 1, deux pièces reçues le jour 3, une pièce illisible le jour 4, relance automatique le jour 7.',
      header: 'Exemple construit · l’écran d’un dossier dans l’espace client · quatre réponses sans appeler',
      screenTitle: 'Votre dossier', ref: '2027-0412',
      stages: ['Demande reçue', 'Pièces', 'Traitement', 'Validation', 'Remise'],
      waiting: 'en attente de vous',
      pieces: [['Pièce d’identité', 'reçue'], ['Contrat signé', 'reçu'], ['Justificatif d’adresse', 'manquant · à déposer'], ['Attestation', 'illisible · à refaire']],
      next: 'Prochaine étape : déposer 2 pièces. Ensuite, traitement sous 5 jours ouvrés.',
      journalTitle: 'Ce qui s’est passé',
      events: [['Dossier ouvert, liste des pièces envoyée', 'jour 1 · message au client'], ['2 pièces reçues et vérifiées', 'jour 3 · message au client'], ['1 pièce illisible : photo floue', 'jour 4 · message au client'], ['Relance : il manque 2 pièces', 'jour 7 · relance automatique']],
      band: 'Quatre réponses sans appeler : où en est mon dossier, qu’attend-on de moi, que se passe-t-il ensuite et quand, que s’est-il déjà passé.',
      tiles: [
        { big: '« en attente de vous »', l1: 'le dossier dit qui doit agir : vous, ou le client', l2: 'un dossier arrêté a toujours un nom', hot: true },
        { big: 'la liste des pièces', l1: 'ce qui est reçu, ce qui manque, ce qui est à refaire', l2: 'avec la raison du refus' },
        { big: 'chaque changement prévient', l1: 'un message à chaque étape, une relance si rien ne bouge', l2: 'le client n’a plus à demander' },
      ],
      line1: 'Un écran qui ne dit que « en cours » ne supprime aucun appel : le client veut savoir ce qui bloque et qui doit agir.',
      line2: 'La liste des pièces fait le reste : un dossier complet au premier dépôt, ce sont des relances en moins des deux côtés.',
      note: 'Exemple construit · étapes, pièces et délai à remplacer par les vôtres.',
    },
  },
  en: {
    appels: {
      title: 'One hundred calls in a week, sorted by reason',
      alt: 'Bar chart of one hundred incoming calls logged over a week, sorted by reason. “Where is my file?”: 38 calls. “Send me the invoice, the document again”: 21. “Did you receive my document?”: 17. Booking or moving an appointment: 9. Real questions, advice or a special case: 15. The first three reasons, 76 calls out of 100, are questions whose answer already exists in the company’s files.',
      header: 'Constructed example · one hundred incoming calls in a week, sorted by reason · accented, those a customer area answers',
      rows: ['“Where is my file?”', '“Send me the invoice, the document again”', '“Did you receive my document?”', 'Booking or moving an appointment', 'Real questions: advice, a special case'],
      sum: '76 / 100', sumL1: 'the answer already exists with you', sumL2: 'the customer area shows it, no call',
      side3: 'done online, with a reminder', side4: 'still calls: the ones that matter',
      band: 'Three reasons out of five are status questions: the answer exists, but it is in someone’s head, in a binder or in a mailbox.',
      tiles: [
        { big: '76 calls out of 100', l1: 'three questions whose answer is in your files', l2: 'status, document to resend, document received', hot: true },
        { big: '9 appointments', l1: 'are booked and moved online', l2: 'with a reminder the day before' },
        { big: '15 real questions', l1: 'advice, the special case, the disagreement', l2: 'those deserve a call' },
      ],
      line1: 'Count your calls for a week before building: the log says which block to start with.',
      line2: 'Here, the status of the file alone answers 38 calls out of 100: it is the first screen to deliver.',
      note: 'Constructed example · service company, one hundred incoming calls logged over a week; redo the log at your place.',
    },
    dossier: {
      title: 'The file, as the customer sees it',
      alt: 'Screen of a file in a customer area. At the top, five stages: request received, documents, processing, validation, handover; the file is stopped at the documents stage, marked “waiting for you”. Below, the list of four documents: identity document received, signed contract received, proof of address missing and to be uploaded, certificate unreadable and to be redone. Then the next step: upload two documents, then processing within five working days. On the right, the log: file opened on day 1, two documents received on day 3, one unreadable document on day 4, automatic reminder on day 7.',
      header: 'Constructed example · the screen of a file in the customer area · four answers without calling',
      screenTitle: 'Your file', ref: '2027-0412',
      stages: ['Request received', 'Documents', 'Processing', 'Validation', 'Handover'],
      waiting: 'waiting for you',
      pieces: [['Identity document', 'received'], ['Signed contract', 'received'], ['Proof of address', 'missing · to upload'], ['Certificate', 'unreadable · to redo']],
      next: 'Next step: upload 2 documents. Then processing within 5 working days.',
      journalTitle: 'What has happened',
      events: [['File opened, list of documents sent', 'day 1 · message to the customer'], ['2 documents received and checked', 'day 3 · message to the customer'], ['1 unreadable document: blurred photo', 'day 4 · message to the customer'], ['Reminder: 2 documents are missing', 'day 7 · automatic reminder']],
      band: 'Four answers without calling: where is my file, what is expected of me, what happens next and when, what has already happened.',
      tiles: [
        { big: '“waiting for you”', l1: 'the file says who must act: you, or the customer', l2: 'a stopped file always has a name', hot: true },
        { big: 'the list of documents', l1: 'what is received, what is missing, what is to be redone', l2: 'with the reason for the refusal' },
        { big: 'every change notifies', l1: 'a message at each stage, a reminder if nothing moves', l2: 'the customer no longer has to ask' },
      ],
      line1: 'A screen that only says “in progress” removes no call: the customer wants to know what is blocking and who must act.',
      line2: 'The list of documents does the rest: a file complete on the first upload means fewer reminders on both sides.',
      note: 'Constructed example · stages, documents and time limit to be replaced by yours.',
    },
  },
  ar: {
    appels: {
      title: 'مئة مكالمة في أسبوع، مرتَّبة حسب السبب',
      alt: 'رسم بالأعمدة لمئة مكالمة واردة مسجَّلة في أسبوع، مرتَّبة حسب السبب. «أين وصل ملفي؟»: 38 مكالمة. «أعيدوا إرسال الفاتورة أو الوثيقة»: 21. «هل استلمتم وثيقتي؟»: 17. أخذ موعد أو تغييره: 9. أسئلة حقيقية، نصيحة أو حالة خاصة: 15. الأسباب الثلاثة الأولى، 76 مكالمة من 100، أسئلة جوابها موجود أصلاً في ملفات المؤسسة.',
      header: 'مثال مركَّب · مئة مكالمة واردة في أسبوع، مرتَّبة حسب السبب · المبرزة هي التي يجيب عنها فضاء الزبون',
      rows: ['«أين وصل ملفي؟»', '«أعيدوا إرسال الفاتورة أو الوثيقة»', '«هل استلمتم وثيقتي؟»', 'أخذ موعد أو تغييره', 'أسئلة حقيقية: نصيحة، أو حالة خاصة'],
      sum: '⁦76 / 100⁩', sumL1: 'الجواب موجود عندكم أصلاً', sumL2: 'وفضاء الزبون يُظهره دون مكالمة',
      side3: 'يؤخذ على الخط، مع تذكير', side4: 'تبقى مكالمات: وهي التي تهمّ',
      band: 'ثلاثة أسباب من خمسة أسئلة عن الحالة: الجواب موجود، لكنه في رأس أحدهم، في مصنَّف، أو في علبة بريد.',
      tiles: [
        { big: '76 مكالمة من 100', l1: 'ثلاثة أسئلة جوابها في ملفاتكم', l2: 'الحالة، وثيقة تُعاد، ووثيقة مستلَمة', hot: true },
        { big: '9 مواعيد', l1: 'تؤخذ وتُغيَّر على الخط', l2: 'مع تذكير عشية الموعد' },
        { big: '15 سؤالاً حقيقياً', l1: 'النصيحة، الحالة الخاصة، والخلاف', l2: 'هذه تستحق مكالمة' },
      ],
      line1: 'عدّوا مكالماتكم أسبوعاً قبل البناء: السجل يقول بأي جزء نبدأ.',
      line2: 'هنا، حالة الملف وحدها تجيب عن 38 مكالمة من 100: وهي أول شاشة تُسلَّم.',
      note: 'مثال مركَّب · مؤسسة خدمات، مئة مكالمة واردة مسجَّلة في أسبوع؛ أعيدوا التسجيل عندكم.',
    },
    dossier: {
      title: 'الملف، كما يراه الزبون',
      alt: 'شاشة ملف في فضاء الزبون. في الأعلى، خمس مراحل: استلام الطلب، الوثائق، المعالجة، المصادقة، التسليم؛ والملف متوقف عند مرحلة الوثائق، وعليها «في انتظاركم». تحتها، قائمة أربع وثائق: وثيقة الهوية مستلَمة، العقد الموقَّع مستلَم، إثبات العنوان ناقص ويودَع، والشهادة غير مقروءة وتُعاد. ثم الخطوة المقبلة: إيداع وثيقتين، وبعدها المعالجة في خمسة أيام عمل. وعلى الجانب، السجل: فتح الملف في اليوم 1، استلام وثيقتين في اليوم 3، وثيقة غير مقروءة في اليوم 4، وتذكير آلي في اليوم 7.',
      header: 'مثال مركَّب · شاشة ملف في فضاء الزبون · أربعة أجوبة دون مكالمة',
      screenTitle: 'ملفكم', ref: '2027-0412',
      stages: ['استلام الطلب', 'الوثائق', 'المعالجة', 'المصادقة', 'التسليم'],
      waiting: 'في انتظاركم',
      pieces: [['وثيقة الهوية', 'مستلَمة'], ['العقد الموقَّع', 'مستلَم'], ['إثبات العنوان', 'ناقص · يودَع'], ['الشهادة', 'غير مقروءة · تُعاد']],
      next: 'الخطوة المقبلة: إيداع وثيقتين. وبعدها، المعالجة في 5 أيام عمل.',
      journalTitle: 'ما جرى',
      events: [['فُتح الملف، وأُرسلت قائمة الوثائق', 'اليوم 1 · رسالة إلى الزبون'], ['استُلمت وثيقتان وتُحقِّق منهما', 'اليوم 3 · رسالة إلى الزبون'], ['وثيقة غير مقروءة: صورة غير واضحة', 'اليوم 4 · رسالة إلى الزبون'], ['تذكير: تنقص وثيقتان', 'اليوم 7 · تذكير آلي']],
      band: 'أربعة أجوبة دون مكالمة: أين وصل ملفي، ماذا يُنتظر مني، ماذا يجري بعدها ومتى، وماذا جرى إلى الآن.',
      tiles: [
        { big: '«في انتظاركم»', l1: 'الملف يقول من عليه أن يتحرك: أنتم، أو الزبون', l2: 'الملف المتوقف له دائماً اسم', hot: true },
        { big: 'قائمة الوثائق', l1: 'ما استُلم، ما ينقص، وما يُعاد', l2: 'مع سبب الرفض' },
        { big: 'كل تغيير يُعلِم', l1: 'رسالة عند كل مرحلة، وتذكير إذا لم يتحرك شيء', l2: 'الزبون لم يعد يسأل' },
      ],
      line1: 'شاشة لا تقول إلا «قيد المعالجة» لا تلغي أي مكالمة: الزبون يريد أن يعرف ما يعطّل ومن عليه أن يتحرك.',
      line2: 'وقائمة الوثائق تفعل الباقي: ملف كامل من أول إيداع يعني تذكيرات أقل من الجهتين.',
      note: 'مثال مركَّب · المراحل والوثائق والأجل تُستبدل بما عندكم.',
    },
  },
};
