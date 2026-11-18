// Bespoke animated figures for the 2027 "comment reconnaître un faux mail" post.
//  anatomie(): a fake email read in ten seconds. A mock message on one side;
//              six numbered markers pop one after another on the sender's
//              address, the urgency, the greeting, the request, the link and
//              the attachment, each with its note on the other side.
//  adresse():  where a link really leads. One long address is dissected: the
//              part the eye reads, the first slash, and the name just before
//              it, which is the real site. Then five addresses, each with the
//              real site highlighted and a verdict. Addresses are left-to-right
//              in every locale, so this panel is not mirrored.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, circle, open, heading, esc } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function pop(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scale(0)}${(at + 1.5).toFixed(1)}%,100%{transform:scale(1)}}`); return `transform-box:fill-box;transform-origin:center;animation:${P}-${id} ${LOOP}s linear infinite`; }
const TINT = 'rgba(242,181,68,0.06)';
const DARK = '#0b0b0b';
const PALE = 'rgba(255,255,255,0.85)';

function tiles(c, css, P, ky, ts, at0) {
  let s = '';
  ts.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, at0 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? TINT : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  return s;
}
const motionOff = (P) => `@media (prefers-reduced-motion: reduce){svg [style*="${P}-"]{animation:none !important}}`;

export function anatomie(t, rtl) {
  const c = ctx(rtl); const P = 'fm'; const css = []; const H = 656;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  // the message
  let m = rect(c, 80, 144, 580, 276, { stroke: C.fg35, fill: DARK });
  m += text(c, 100, 171, t.from, { size: 11, fill: C.fg, weight: 500 }) + text(c, 100, 189, t.fromAddr, { size: 9.5, font: 'mono', fill: C.fg70 });
  m += text(c, 100, 213, t.subject, { size: 10.5, fill: C.fg, weight: 500 }) + line(c, 100, 224, 600, 224, { stroke: C.line2 });
  m += text(c, 100, 245, t.hello, { size: 10, fill: C.fg }) + text(c, 100, 265, t.body1, { size: 10, fill: C.fg }) + text(c, 100, 281, t.body2, { size: 10, fill: C.fg });
  m += rect(c, 100, 296, 250, 26, { stroke: C.fg70, fill: C.fill }) + text(c, 112, 313, t.linkText, { size: 9.5, font: 'mono', fill: C.fg });
  m += rect(c, 100, 330, 470, 22, { stroke: C.fg55, fill: DARK, dash: '3 3' }) + text(c, 112, 345, t.realLabel, { size: 8.5, fill: C.fg55 }) + text(c, 560, 345, t.realAddr, { size: 8.5, font: 'mono', fill: C.accent, anchor: 'end' });
  m += rect(c, 100, 366, 210, 26, { stroke: C.fg55, fill: C.fill }) + text(c, 112, 383, t.file, { size: 9, font: 'mono', fill: C.fg });
  s += `<g style="animation:${show(css, P, 'ms', 3)}">${m}</g>`;
  // six markers on the message, six notes beside it
  const MY = [185, 209, 241, 261, 341, 379];
  t.notes.forEach(([l1, l2], j) => {
    const at = 8 + j * 7; const ny = 150 + j * 45;
    s += `<g style="${pop(css, P, `m${j}`, at)}">` + circle(c, 634, MY[j], 9, { fill: C.accent }) + text(c, 634, MY[j] + 3.5, String(j + 1), { size: 9.5, font: 'mono', fill: '#000', weight: 500, anchor: 'middle' }) + '</g>';
    s += `<g style="animation:${show(css, P, `n${j}`, at + 1)}">` + rect(c, 690, ny, 430, 38, { stroke: C.line2, fill: C.fill }) + circle(c, 710, ny + 19, 9, { fill: 'none', stroke: C.accent, sw: 1.5 }) + text(c, 710, ny + 22.5, String(j + 1), { size: 9.5, font: 'mono', fill: C.accent, weight: 500, anchor: 'middle' })
      + text(c, 730, ny + 16, l1, { size: 10, fill: C.fg, weight: 500 }) + text(c, 730, ny + 31, l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>';
  });
  const by = 436;
  s += `<g style="animation:${show(css, P, 'bd', 54)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 496;
  s += tiles(c, css, P, ky, t.tiles, 58);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// the long address, in parts: scheme, bait, dot, real site, first slash, path
const BIG = ['https://', 'votre-banque.dz', '.', 'compte-verif.net', '/', 'connexion'];
// five addresses: before the real site, the real site, after it, true when it is the real bank
const ROWS = [
  ['', 'votre-banque.dz', '/connexion', true],
  ['connexion.', 'votre-banque.dz', '/compte', true],
  ['votre-banque.dz.', 'compte-verif.net', '', false],
  ['', 'votre-banqne.dz', '/connexion', false],
  ['', 'votre-banque-dz.com', '/connexion', false],
];

export function adresse(t, rtl) {
  const c = ctx(rtl); const P = 'fd'; const css = []; const H = 670;
  // addresses read left to right in every locale: this panel is drawn with absolute coordinates,
  // and the parts of an address are told apart by colour, never by measured positions
  const L = ctx(false); const N = { ...c, X: (x) => x, RX: (x) => x };
  const monoCss = (size) => /style="([^"]*)"/.exec(text(L, 0, 0, 'x', { size, font: 'mono' }))[1];
  const spans = (x, y, parts, size, anchor) => `<text x="${x}" y="${y}" style="${monoCss(size)}" direction="ltr" text-anchor="${anchor}">` + parts.map(([str, fill, bold]) => (str ? `<tspan fill="${fill}" style="font-weight:${bold ? 500 : 300}">${esc(str)}</tspan>` : '')).join('') + '</text>';
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'pn', 3)}">` + rect(L, 80, 144, 1040, 290, { stroke: C.fg35, fill: DARK }) + '</g>';
  s += `<g style="animation:${show(css, P, 'u', 5)}">` + spans(600, 192, [[BIG[0], C.fg35], [BIG[1], C.fg70], [BIG[2], C.fg35], [BIG[3], C.accent, true], [BIG[4], C.fg, true], [BIG[5], C.fg35]], 20, 'middle') + '</g>';
  s += `<g style="animation:${show(css, P, 'bt', 11)}">` + text(N, 600, 218, t.bait, { size: 10, fill: C.fg70, anchor: 'middle' }) + '</g>';
  s += `<g style="${pop(css, P, 'rl', 19)}">` + rect(L, 380, 228, 440, 24, { stroke: C.accent, fill: 'rgba(242,181,68,0.14)' }) + text(N, 600, 244, t.real, { size: 10, fill: C.accent, weight: 500, anchor: 'middle' }) + '</g>';
  s += `<g style="animation:${show(css, P, 'et', 28)}">` + text(N, 600, 276, t.rowsTitle, { size: 10, fill: C.fg, weight: 500, anchor: 'middle' }) + '</g>';
  ROWS.forEach(([pre, real, post, ok], j) => {
    const y = 300 + j * 28;
    s += `<g style="animation:${show(css, P, `r${j}`, 31 + j * 4)}">` + spans(300, y, [[pre, C.fg55], [real, ok ? C.fg : C.accent, true], [post, C.fg55]], 13, 'start') + '</g>';
    s += `<g style="${pop(css, P, `v${j}`, 32.5 + j * 4)}">` + rect(L, 720, y - 15, 180, 22, { stroke: ok ? C.fg70 : C.accent, fill: ok ? C.fill : C.accent }) + text(N, 810, y, ok ? t.yes : t.no, { size: 9.5, fill: ok ? C.fg : '#000', weight: 500, anchor: 'middle' }) + '</g>';
  });
  const by = 450;
  s += `<g style="animation:${show(css, P, 'bd', 56)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 510;
  s += tiles(c, css, P, ky, t.tiles, 60);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    anatomie: {
      title: 'Un faux mail, lu en dix secondes',
      alt: 'Un message qui imite celui d’une banque, avec six repères numérotés. Un : l’adresse de l’expéditeur, dont ce qui suit le @ n’est pas la banque. Deux : l’urgence, « votre compte sera suspendu sous 24 h ». Trois : une formule générale, « cher client », sans votre nom. Quatre : la demande, confirmer ses identifiants. Cinq : le lien, dont le texte affiche l’adresse de la banque mais qui mène ailleurs. Six : une pièce jointe dont le nom se termine par une double extension.',
      header: 'Exemple construit · un message qui imite une banque · six repères, à lire dans cet ordre',
      from: 'Votre Banque · Service clients', fromAddr: 'alerte@votre-banque.compte-verif.net',
      subject: 'URGENT : votre compte sera suspendu sous 24 h',
      hello: 'Cher client,', body1: 'Une activité inhabituelle a été détectée sur votre compte.', body2: 'Confirmez vos identifiants pour éviter la suspension.',
      linkText: 'www.votre-banque.dz/connexion', realLabel: 'mène en réalité à :', realAddr: 'votre-banque.dz.compte-verif.net',
      file: 'releve_compte.pdf.html',
      notes: [
        ['L’adresse, pas le nom affiché', 'ce qui suit le @ n’est pas la banque'],
        ['L’urgence', '24 h, suspension, pénalité : on vous presse'],
        ['La formule générale', '« cher client » : il ne connaît pas votre nom'],
        ['La demande', 'identifiants, virement, code : jamais par mail'],
        ['Le lien', 'le texte affiché et la destination diffèrent'],
        ['La pièce jointe', 'inattendue, avec une double extension'],
      ],
      band: 'Aucun de ces six signes n’est une preuve à lui seul ; deux ensemble suffisent pour ne pas cliquer, et pour signaler.',
      tiles: [
        { big: '3 questions, 10 secondes', l1: 'qui envoie vraiment, où mène le lien, que veut-on que je fasse vite', l2: 'avant tout clic', hot: true },
        { big: 'l’urgence est le signal', l1: 'suspension, pénalité, colis bloqué, directeur pressé', l2: 'un vrai service laisse le temps de vérifier' },
        { big: 'jamais par le lien', l1: 'on ouvre le site soi-même, depuis ses favoris', l2: 'ou on appelle un numéro déjà connu' },
      ],
      line1: 'Un faux mail réussi n’est pas mal écrit : il ressemble au vrai, et il demande une chose banale, tout de suite.',
      line2: 'D’où la règle : inutile de traquer la faute d’orthographe ; on lit l’adresse, le lien et la demande.',
      note: 'Exemple construit · banque, adresses et fichier fictifs.',
    },
    adresse: {
      title: 'Où mène vraiment un lien',
      alt: 'Une adresse web décomposée : https://votre-banque.dz.compte-verif.net/connexion. Le début, votre-banque.dz, est ce que l’œil lit. Le vrai site est le nom qui se trouve juste avant la première barre oblique, avec son extension : compte-verif.net. Puis cinq adresses comparées : votre-banque.dz/connexion et connexion.votre-banque.dz/compte mènent au vrai site ; votre-banque.dz.compte-verif.net, votre-banqne.dz avec une lettre changée, et votre-banque-dz.com mènent à un autre site.',
      header: 'Exemple construit · une adresse décomposée, puis cinq adresses · la même question à chaque fois',
      bait: 'en gris clair, le début de l’adresse : ce que l’œil lit',
      real: 'en accent, le vrai site : le nom juste avant la première barre',
      rowsTitle: 'Cinq adresses, une seule question : quel nom se trouve juste avant la première barre ?',
      yes: 'le vrai site', no: 'un autre site',
      band: 'Une adresse se lit à partir de la première barre, en remontant : tout ce qui précède le vrai nom peut imiter n’importe qui.',
      tiles: [
        { big: 'avant la première barre', l1: 'le site, c’est le nom et son extension, juste avant le « / »', l2: 'le début de l’adresse ne prouve rien', hot: true },
        { big: 'une lettre suffit', l1: 'banqne pour banque, un tiret pour un point, .com pour .dz', l2: 'l’œil corrige, pas le navigateur' },
        { big: 'le gestionnaire se tait', l1: 'il ne propose pas le mot de passe sur une adresse inconnue', l2: 'son silence est une alerte' },
      ],
      line1: 'Sur un téléphone, un appui long sur le lien affiche l’adresse sans l’ouvrir ; sur un ordinateur, il suffit de le survoler.',
      line2: 'Et quand le doute reste : on ferme le message, et on ouvre le site soi-même.',
      note: 'Exemple construit · noms de domaine fictifs, choisis pour l’exemple.',
    },
  },
  en: {
    anatomie: {
      title: 'A fake email, read in ten seconds',
      alt: 'A message imitating a bank’s, with six numbered markers. One: the sender’s address, where what follows the @ is not the bank. Two: the urgency, “your account will be suspended within 24 hours”. Three: a general greeting, “dear customer”, without your name. Four: the request, confirm your credentials. Five: the link, whose text shows the bank’s address but which leads elsewhere. Six: an attachment whose name ends with a double extension.',
      header: 'Constructed example · a message imitating a bank · six markers, to read in this order',
      from: 'Your Bank · Customer service', fromAddr: 'alerte@votre-banque.compte-verif.net',
      subject: 'URGENT: your account will be suspended within 24 hours',
      hello: 'Dear customer,', body1: 'Unusual activity has been detected on your account.', body2: 'Confirm your credentials to avoid suspension.',
      linkText: 'www.votre-banque.dz/connexion', realLabel: 'really leads to:', realAddr: 'votre-banque.dz.compte-verif.net',
      file: 'releve_compte.pdf.html',
      notes: [
        ['The address, not the displayed name', 'what follows the @ is not the bank'],
        ['The urgency', '24 hours, suspension, penalty: you are being rushed'],
        ['The general greeting', '“dear customer”: it does not know your name'],
        ['The request', 'credentials, a transfer, a code: never by email'],
        ['The link', 'the text shown and the destination differ'],
        ['The attachment', 'unexpected, with a double extension'],
      ],
      band: 'None of these six signs is proof on its own; two together are enough not to click, and to report.',
      tiles: [
        { big: '3 questions, 10 seconds', l1: 'who really sends it, where the link leads, what am I rushed to do', l2: 'before any click', hot: true },
        { big: 'urgency is the signal', l1: 'suspension, penalty, parcel held, a manager in a hurry', l2: 'a real service leaves time to check' },
        { big: 'never through the link', l1: 'open the site yourself, from your bookmarks', l2: 'or call a number you already know' },
      ],
      line1: 'A successful fake email is not badly written: it looks like the real one, and it asks for something ordinary, right now.',
      line2: 'Hence the rule: no point hunting for spelling mistakes; read the address, the link and the request.',
      note: 'Constructed example · fictitious bank, addresses and file.',
    },
    adresse: {
      title: 'Where a link really leads',
      alt: 'A web address taken apart: https://votre-banque.dz.compte-verif.net/connexion. The beginning, votre-banque.dz, is what the eye reads. The real site is the name just before the first slash, with its extension: compte-verif.net. Then five addresses compared: votre-banque.dz/connexion and connexion.votre-banque.dz/compte lead to the real site; votre-banque.dz.compte-verif.net, votre-banqne.dz with one letter changed, and votre-banque-dz.com lead to another site.',
      header: 'Constructed example · one address taken apart, then five addresses · the same question every time',
      bait: 'in light grey, the start of the address: what the eye reads',
      real: 'accented, the real site: the name just before the first slash',
      rowsTitle: 'Five addresses, one question: which name sits just before the first slash?',
      yes: 'the real site', no: 'another site',
      band: 'An address is read from the first slash, going backwards: everything before the real name can imitate anyone.',
      tiles: [
        { big: 'before the first slash', l1: 'the site is the name and its extension, just before the “/”', l2: 'the start of the address proves nothing', hot: true },
        { big: 'one letter is enough', l1: 'banqne for banque, a hyphen for a dot, .com for .dz', l2: 'the eye corrects, the browser does not' },
        { big: 'the manager stays silent', l1: 'it does not offer the password on an unknown address', l2: 'its silence is a warning' },
      ],
      line1: 'On a phone, a long press on the link shows the address without opening it; on a computer, hovering over it is enough.',
      line2: 'And when doubt remains: close the message, and open the site yourself.',
      note: 'Constructed example · fictitious domain names, chosen for the example.',
    },
  },
  ar: {
    anatomie: {
      title: 'رسالة مزيَّفة، تُقرأ في عشر ثوانٍ',
      alt: 'رسالة تقلّد رسالة بنك، وعليها ست علامات مرقَّمة. الأولى: عنوان المرسِل، وما يأتي بعد علامة @ ليس البنك. الثانية: الاستعجال، «سيُعلَّق حسابكم خلال 24 ساعة». الثالثة: صيغة عامة، «زبوننا العزيز»، دون اسمكم. الرابعة: الطلب، تأكيد المعرّفات. الخامسة: الرابط، نصّه يعرض عنوان البنك لكنه يقود إلى مكان آخر. السادسة: مرفق ينتهي اسمه بامتداد مزدوج.',
      header: 'مثال مركَّب · رسالة تقلّد بنكاً · ست علامات، تُقرأ بهذا الترتيب',
      from: 'بنككم · مصلحة الزبائن', fromAddr: 'alerte@votre-banque.compte-verif.net',
      subject: 'عاجل: سيُعلَّق حسابكم خلال 24 ساعة',
      hello: 'زبوننا العزيز،', body1: 'تم رصد نشاط غير عادي على حسابكم.', body2: 'أكّدوا معرّفاتكم لتفادي التعليق.',
      linkText: 'www.votre-banque.dz/connexion', realLabel: 'يقود فعلاً إلى:', realAddr: 'votre-banque.dz.compte-verif.net',
      file: 'releve_compte.pdf.html',
      notes: [
        ['العنوان، لا الاسم المعروض', 'ما يأتي بعد العلامة ليس البنك'],
        ['الاستعجال', '24 ساعة، تعليق، غرامة: يستعجلونكم'],
        ['الصيغة العامة', '«زبوننا العزيز»: لا يعرف اسمكم'],
        ['الطلب', 'معرّفات، تحويل، أو رمز: أبداً بالبريد'],
        ['الرابط', 'النص المعروض والوجهة مختلفان'],
        ['المرفق', 'غير منتظَر، وبامتداد مزدوج'],
      ],
      band: 'لا واحدة من هذه العلامات الست دليل وحدها؛ واثنتان معاً تكفيان لعدم النقر، وللتبليغ.',
      tiles: [
        { big: '3 أسئلة، 10 ثوانٍ', l1: 'من يرسل فعلاً، إلى أين يقود الرابط، وماذا يُراد مني بسرعة', l2: 'قبل أي نقرة', hot: true },
        { big: 'الاستعجال هو الإشارة', l1: 'تعليق، غرامة، طرد محجوز، أو مدير مستعجل', l2: 'المصلحة الحقيقية تترك وقتاً للتحقق' },
        { big: 'أبداً عبر الرابط', l1: 'يُفتح الموقع مباشرة، من المفضَّلة', l2: 'أو يُتَّصل برقم معروف من قبل' },
      ],
      line1: 'الرسالة المزيَّفة الناجحة ليست رديئة الكتابة: تشبه الحقيقية، وتطلب شيئاً عادياً، حالاً.',
      line2: 'ومن هنا القاعدة: لا فائدة من تصيّد الخطأ الإملائي؛ يُقرأ العنوان والرابط والطلب.',
      note: 'مثال مركَّب · البنك والعناوين والملف خيالية.',
    },
    adresse: {
      title: 'إلى أين يقود الرابط فعلاً',
      alt: 'عنوان ويب مفكَّك: https://votre-banque.dz.compte-verif.net/connexion. البداية، votre-banque.dz، هي ما تقرؤه العين. والموقع الحقيقي هو الاسم الموجود مباشرة قبل أول شرطة مائلة، مع امتداده: compte-verif.net. ثم خمسة عناوين مقارَنة: الأول والثاني يقودان إلى الموقع الحقيقي؛ والثالث، والرابع بحرف مغيَّر، والخامس تقود إلى موقع آخر.',
      header: 'مثال مركَّب · عنوان مفكَّك، ثم خمسة عناوين · السؤال نفسه كل مرة',
      bait: 'بالرمادي الفاتح، بداية العنوان: ما تقرؤه العين',
      real: 'باللون المبرز، الموقع الحقيقي: الاسم الموجود مباشرة قبل أول شرطة',
      rowsTitle: 'خمسة عناوين، وسؤال واحد: أي اسم يوجد مباشرة قبل أول شرطة؟',
      yes: 'الموقع الحقيقي', no: 'موقع آخر',
      band: 'العنوان يُقرأ من أول شرطة، رجوعاً: وكل ما يسبق الاسم الحقيقي يستطيع تقليد أي أحد.',
      tiles: [
        { big: 'قبل أول شرطة', l1: 'الموقع هو الاسم وامتداده، مباشرة قبل الشرطة', l2: 'وبداية العنوان لا تثبت شيئاً', hot: true },
        { big: 'حرف واحد يكفي', l1: 'حرف مكان حرف، مطّة مكان نقطة، أو امتداد مكان آخر', l2: 'العين تصحّح، والمتصفح لا' },
        { big: 'المسيّر يسكت', l1: 'لا يقترح كلمة المرور على عنوان مجهول', l2: 'وسكوته تنبيه' },
      ],
      line1: 'على الهاتف، ضغطة طويلة على الرابط تعرض العنوان دون فتحه؛ وعلى الحاسوب، يكفي المرور فوقه.',
      line2: 'وحين يبقى الشك: تُغلق الرسالة، ويُفتح الموقع مباشرة.',
      note: 'مثال مركَّب · أسماء نطاقات خيالية، مختارة للمثال.',
    },
  },
};
