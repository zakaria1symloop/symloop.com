// Bespoke animated figures for the 2027 "comment sécuriser une application" page.
//  acces():  changing one digit in the address. A customer opens their own
//            order, then changes one digit; the two addresses are shown one
//            under the other, the changed digit accented. Below, two servers
//            answer: the fragile one only asks "is he signed in?" and returns
//            another customer's order; the safe one also asks "is this order
//            his?" and refuses. Rows appear one after another.
//  coffre(): what the thief of a database finds. Left, four accounts with the
//            password stored in clear, read row by row; right, the same four
//            accounts with hashed and salted passwords, where even the two
//            identical passwords no longer look alike.
// Addresses, passwords and hashes read left to right in every locale: they are
// drawn in their own text elements with direction="ltr", and parts are told
// apart by colour, never by measured positions.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, open, heading, esc } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function pop(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scale(0)}${(at + 1.5).toFixed(1)}%,100%{transform:scale(1)}}`); return `transform-box:fill-box;transform-origin:center;animation:${P}-${id} ${LOOP}s linear infinite`; }
const TINT = 'rgba(242,181,68,0.06)';
const DARK = '#0b0b0b';

function tiles(c, css, P, ky, ts, at0) {
  let s = '';
  ts.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, at0 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? TINT : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  return s;
}
const motionOff = (P) => `@media (prefers-reduced-motion: reduce){svg [style*="${P}-"]{animation:none !important}}`;
// a left-to-right monospace line, anchored where the caller says, parts coloured one by one
function ltrSpans(x, y, parts, size, anchor) {
  const L = ctx(false);
  const monoCss = /style="([^"]*)"/.exec(text(L, 0, 0, 'x', { size, font: 'mono' }))[1];
  return `<text x="${x}" y="${y}" style="${monoCss}" direction="ltr" text-anchor="${anchor}">` + parts.map(([str, fill, bold]) => (str ? `<tspan fill="${fill}" style="font-weight:${bold ? 500 : 300}">${esc(str)}</tspan>` : '')).join('') + '</text>';
}

// a check the server makes: question on the reading side, answer on the far side
function check(c, x, y, w, q, a, o = {}) {
  return rect(c, x, y, w, 34, { stroke: o.hot ? C.accent : o.ghost ? C.fg35 : C.line2, fill: o.hot ? TINT : o.ghost ? 'none' : C.fill, dash: o.ghost ? '4 3' : undefined })
    + text(c, x + 12, y + 21, q, { size: 10.5, fill: o.ghost ? C.fg55 : C.fg })
    + text(c, x + w - 12, y + 21, a, { size: 10, font: 'mono', fill: o.hot ? C.accent : o.ghost ? C.fg55 : C.fg70, weight: 500, anchor: 'end' });
}

export function acces(t, rtl) {
  const c = ctx(rtl); const P = 'ax'; const css = []; const H = 686;
  const N = { ...c, X: (x) => x, RX: (x) => x };
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  // the two addresses, centred, read left to right in every locale
  s += `<g style="animation:${show(css, P, 'pn', 3)}">` + rect(N, 80, 144, 1040, 100, { stroke: C.fg35, fill: DARK }) + '</g>';
  s += `<g style="animation:${show(css, P, 'm', 5)}">` + text(N, 600, 164, t.mine, { size: 10, fill: C.fg70, anchor: 'middle' }) + ltrSpans(600, 186, [['…/commandes/', C.fg55], ['1042', C.fg, true]], 16, 'middle') + '</g>';
  s += `<g style="animation:${show(css, P, 'n', 11)}">` + text(N, 600, 210, t.changed, { size: 10, fill: C.accent, anchor: 'middle' }) + ltrSpans(600, 232, [['…/commandes/', C.fg55], ['104', C.fg, true], ['3', C.accent, true]], 16, 'middle') + '</g>';
  // left: the fragile application
  s += `<g style="animation:${show(css, P, 'pa', 18)}">` + rect(c, 80, 260, 510, 190, { stroke: C.accent, fill: TINT }) + text(c, 96, 284, t.left, { size: 11, fill: C.fg, weight: 500 }) + '</g>';
  s += `<g style="animation:${show(css, P, 'a1', 21)}">` + check(c, 96, 296, 478, t.q1, t.yes) + '</g>';
  s += `<g style="animation:${show(css, P, 'a2', 24)}">` + check(c, 96, 336, 478, t.q2, t.never, { ghost: true }) + '</g>';
  s += `<g style="${pop(css, P, 'a3', 28)}">` + rect(c, 96, 380, 478, 54, { stroke: C.accent, fill: C.accent }) + text(c, 108, 401, t.badTop, { size: 11, fill: '#000', weight: 500 }) + text(c, 108, 421, t.badSub, { size: 9.5, font: 'mono', fill: '#000' }) + '</g>';
  // right: the safe application
  s += `<g style="animation:${show(css, P, 'pb', 35)}">` + rect(c, 610, 260, 510, 190, { stroke: C.fg70, fill: DARK }) + text(c, 626, 284, t.right, { size: 11, fill: C.fg, weight: 500 }) + '</g>';
  s += `<g style="animation:${show(css, P, 'b1', 38)}">` + check(c, 626, 296, 478, t.q1, t.yes) + '</g>';
  s += `<g style="animation:${show(css, P, 'b2', 41)}">` + check(c, 626, 336, 478, t.q2, t.no, { hot: true }) + '</g>';
  s += `<g style="${pop(css, P, 'b3', 45)}">` + rect(c, 626, 380, 478, 54, { stroke: C.fg, fill: C.fill }) + text(c, 638, 401, t.goodTop, { size: 11, fill: C.fg, weight: 500 }) + text(c, 638, 421, t.goodSub, { size: 9.5, font: 'mono', fill: C.fg70 }) + '</g>';
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bd', 52)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 56);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// four accounts; accounts 2 and 4 chose the same password
const CLEAR = ['amine2019', '123456', 'bonjour19', '123456'];
const HASHED = ['$argon2id$…k3JxQ9', '$argon2id$…Zp81Lm', '$argon2id$…a7RtYw', '$argon2id$…Hd20Vs'];
const SAME = [false, true, false, true];

export function coffre(t, rtl) {
  const c = ctx(rtl); const P = 'ah'; const css = []; const H = 640;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const panel = (x, id, at, title, hot) => `<g style="animation:${show(css, P, id, at)}">` + rect(c, x, 144, 510, 260, { stroke: hot ? C.accent : C.fg70, fill: hot ? TINT : DARK }) + text(c, x + 16, 168, title, { size: 11, fill: C.fg, weight: 500 }) + text(c, x + 16, 190, t.colA, { size: 8.5, font: 'mono', fill: C.fg55 }) + text(c, x + 494, 190, t.colB, { size: 8.5, font: 'mono', fill: C.fg55, anchor: 'end' }) + '</g>';
  // the stored value sits on the far side of each row; its own x is mirrored by hand so the string itself stays left to right
  const row = (x, i, id, at, value, hot) => {
    const y = 200 + i * 38; const vx = c.X(x + 482); const anchor = rtl ? 'start' : 'end';
    return `<g style="animation:${show(css, P, id, at)}">` + rect(c, x + 16, y, 478, 30, { stroke: hot ? C.accent : C.line2, fill: C.fill }) + text(c, x + 28, y + 19, t.accounts[i], { size: 10, fill: C.fg70 }) + ltrSpans(vx, y + 20, [[value, hot ? C.accent : C.fg, true]], 11, anchor) + '</g>';
  };
  s += panel(80, 'pa', 3, t.left, true);
  CLEAR.forEach((v, i) => { s += row(80, i, `a${i}`, 6 + i * 3, v, SAME[i]); });
  s += `<g style="animation:${show(css, P, 'as', 20)}">` + text(c, 96, 384, t.leftSum, { size: 10, fill: C.accent, weight: 500 }) + '</g>';
  s += panel(610, 'pb', 27, t.right, false);
  HASHED.forEach((v, i) => { s += row(610, i, `b${i}`, 30 + i * 3, v, SAME[i]); });
  s += `<g style="animation:${show(css, P, 'bs', 44)}">` + text(c, 626, 384, t.rightSum, { size: 10, fill: C.fg, weight: 500 }) + '</g>';
  const by = 420;
  s += `<g style="animation:${show(css, P, 'bd', 50)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 480;
  s += tiles(c, css, P, ky, t.tiles, 54);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    acces: {
      title: 'Changer un chiffre dans l’adresse',
      alt: 'En haut, deux adresses : le client ouvre sa commande, numéro 1042, puis change un chiffre et demande la commande 1043. En bas, deux applications. La première ne vérifie qu’une chose, que le client est connecté, et lui renvoie la commande 1043, avec le nom, le téléphone et l’adresse d’un autre client. La seconde vérifie aussi que la commande est à lui : ce n’est pas le cas, la demande est refusée et la tentative est écrite au journal.',
      header: 'Exemple construit · un client connecté change un chiffre dans l’adresse de sa commande · deux serveurs, deux réponses',
      mine: 'Le client ouvre sa commande', changed: 'Puis il change un chiffre dans l’adresse',
      left: 'Application fragile : une seule question', right: 'Application sûre : deux questions',
      q1: 'Est-il connecté ?', q2: 'Cette commande est-elle à lui ?', yes: 'oui', no: 'non', never: 'jamais demandé',
      badTop: 'Réponse : la commande 1043', badSub: 'nom, téléphone, adresse d’un autre client',
      goodTop: 'Réponse : refusé', goodSub: 'la tentative est écrite au journal',
      band: 'Être connecté ne donne pas le droit de tout voir : le serveur doit demander, à chaque demande, « ceci est-il à lui ? ».',
      tiles: [
        { big: '100 %', l1: 'des applications testées avaient un défaut de cette famille', l2: 'OWASP Top 10, édition 2025, rang 1', hot: true },
        { big: 'sur le serveur', l1: 'cacher un bouton dans l’écran ne protège rien', l2: 'une demande s’écrit aussi à la main' },
        { big: 'refus par défaut', l1: 'tout est interdit, sauf ce qui est permis', l2: 'et chaque refus laisse une trace' },
      ],
      line1: 'Sur votre propre application, l’essai prend cinq minutes : connectez-vous, changez un numéro, regardez la réponse.',
      line2: 'Si une autre commande s’affiche, toutes les autres s’affichent aussi : il suffit de compter de 1 en 1.',
      note: 'Exemple construit · commandes 1042 et 1043 ; le défaut s’appelle référence directe non sécurisée.',
    },
    coffre: {
      title: 'Ce que trouve celui qui vole la base',
      alt: 'Deux panneaux, quatre comptes. À gauche, les mots de passe sont gardés en clair : amine2019, 123456, bonjour19, 123456 ; le voleur lit tout, et voit que deux clients ont le même mot de passe. À droite, les mêmes comptes avec des mots de passe hachés et salés : quatre chaînes illisibles, toutes différentes, y compris pour les deux mots de passe identiques.',
      header: 'Exemple construit · la table des comptes, telle qu’un voleur la lirait · en clair, puis hachée et salée',
      left: 'Mots de passe gardés en clair', right: 'Mots de passe hachés et salés',
      colA: 'compte', colB: 'ce qui est stocké',
      accounts: ['client 1', 'client 2', 'client 3', 'client 4'],
      leftSum: 'tout se lit, et s’essaie ensuite sur d’autres services',
      rightSum: 'rien à lire : deux mots de passe identiques ne se ressemblent plus',
      band: 'Un mot de passe ne se garde pas en clair et ne se chiffre pas : il se hache, avec un sel propre à chaque compte.',
      tiles: [
        { big: 'haché, pas lisible', l1: 'une opération à sens unique, difficile à inverser', l2: 'Argon2id, bcrypt ou PBKDF2', hot: true },
        { big: 'un sel par compte', l1: 'une chaîne aléatoire ajoutée à chaque mot de passe', l2: 'deux « 123456 » donnent deux résultats' },
        { big: 'l’essai simple', l1: '« mot de passe oublié » vous renvoie l’ancien ?', l2: 'alors il est gardé en clair' },
      ],
      line1: 'Une base finit par sortir : une sauvegarde oubliée, un compte d’administration, une faille. Reste ce qu’on y lit.',
      line2: 'La même règle vaut pour les clés de l’application : aucune clé, aucun mot de passe écrit dans le code du téléphone.',
      note: 'Exemple construit · quatre comptes ; les chaînes de droite sont abrégées.',
    },
  },
  en: {
    acces: {
      title: 'Changing one digit in the address',
      alt: 'At the top, two addresses: the customer opens their order, number 1042, then changes one digit and asks for order 1043. Below, two applications. The first checks only one thing, that the customer is signed in, and returns order 1043, with the name, phone and address of another customer. The second also checks that the order is theirs: it is not, the request is refused and the attempt is written to the log.',
      header: 'Constructed example · a signed-in customer changes one digit in the address of their order · two servers, two answers',
      mine: 'The customer opens their order', changed: 'Then they change one digit in the address',
      left: 'Fragile application: one question', right: 'Safe application: two questions',
      q1: 'Is he signed in?', q2: 'Is this order his?', yes: 'yes', no: 'no', never: 'never asked',
      badTop: 'Answer: order 1043', badSub: 'name, phone, address of another customer',
      goodTop: 'Answer: refused', goodSub: 'the attempt is written to the log',
      band: 'Being signed in does not give the right to see everything: the server must ask, on every request, “is this his?”.',
      tiles: [
        { big: '100%', l1: 'of the applications tested had a flaw of this family', l2: 'OWASP Top 10, 2025 edition, rank 1', hot: true },
        { big: 'on the server', l1: 'hiding a button on the screen protects nothing', l2: 'a request can also be written by hand' },
        { big: 'deny by default', l1: 'everything is forbidden, except what is allowed', l2: 'and every refusal leaves a trace' },
      ],
      line1: 'On your own application, the test takes five minutes: sign in, change a number, look at the answer.',
      line2: 'If another order shows, all the others show too: it is enough to count up one by one.',
      note: 'Constructed example · orders 1042 and 1043; the flaw is called insecure direct object reference.',
    },
    coffre: {
      title: 'What the thief of the database finds',
      alt: 'Two panels, four accounts. On the left, passwords are kept in clear: amine2019, 123456, bonjour19, 123456; the thief reads everything, and sees that two customers share a password. On the right, the same accounts with hashed and salted passwords: four unreadable strings, all different, including for the two identical passwords.',
      header: 'Constructed example · the accounts table, as a thief would read it · in clear, then hashed and salted',
      left: 'Passwords kept in clear', right: 'Passwords hashed and salted',
      colA: 'account', colB: 'what is stored',
      accounts: ['customer 1', 'customer 2', 'customer 3', 'customer 4'],
      leftSum: 'everything is read, then tried on other services',
      rightSum: 'nothing to read: two identical passwords no longer look alike',
      band: 'A password is not kept in clear and is not encrypted: it is hashed, with a salt of its own for each account.',
      tiles: [
        { big: 'hashed, unreadable', l1: 'a one-directional operation, hard to reverse', l2: 'Argon2id, bcrypt or PBKDF2', hot: true },
        { big: 'one salt per account', l1: 'a random string added to each password', l2: 'two “123456” give two results' },
        { big: 'the simple test', l1: 'does “forgot password” send you the old one?', l2: 'then it is kept in clear' },
      ],
      line1: 'A database gets out sooner or later: a forgotten backup, an admin account, a flaw. What matters is what can be read in it.',
      line2: 'The same rule holds for the application’s keys: no key, no password written in the code on the phone.',
      note: 'Constructed example · four accounts; the strings on the right are shortened.',
    },
  },
  ar: {
    acces: {
      title: 'تغيير رقم واحد في العنوان',
      alt: 'في الأعلى، عنوانان: الزبون يفتح طلبيته، رقم 1042، ثم يغيّر رقماً واحداً ويطلب الطلبية 1043. وفي الأسفل، تطبيقان. الأول يتحقق من شيء واحد، أن الزبون متصل، ويعيد له الطلبية 1043، باسم زبون آخر وهاتفه وعنوانه. والثاني يتحقق كذلك من أن الطلبية له: ليست له، فيُرفض الطلب وتُكتب المحاولة في السجل.',
      header: 'مثال مركَّب · زبون متصل يغيّر رقماً واحداً في عنوان طلبيته · خادمان، وجوابان',
      mine: 'الزبون يفتح طلبيته', changed: 'ثم يغيّر رقماً واحداً في العنوان',
      left: 'تطبيق هشّ: سؤال واحد', right: 'تطبيق آمن: سؤالان',
      q1: 'هل هو متصل؟', q2: 'هل هذه الطلبية له؟', yes: 'نعم', no: 'لا', never: 'لم يُطرح أبداً',
      badTop: 'الجواب: الطلبية 1043', badSub: 'اسم زبون آخر، هاتفه، وعنوانه',
      goodTop: 'الجواب: مرفوض', goodSub: 'المحاولة تُكتب في السجل',
      band: 'الاتصال لا يعطي الحق في رؤية كل شيء: على الخادم أن يسأل، عند كل طلب، «هل هذا له؟».',
      tiles: [
        { big: '⁦100%⁩', l1: 'من التطبيقات المختبَرة كان فيها عيب من هذه العائلة', l2: 'تصنيف ⁦OWASP⁩، طبعة 2025، المرتبة الأولى', hot: true },
        { big: 'على الخادم', l1: 'إخفاء زر في الشاشة لا يحمي شيئاً', l2: 'الطلب يُكتب باليد كذلك' },
        { big: 'الرفض هو الأصل', l1: 'كل شيء ممنوع، إلا ما هو مسموح', l2: 'وكل رفض يترك أثراً' },
      ],
      line1: 'على تطبيقكم أنتم، التجربة تأخذ خمس دقائق: اتصلوا، غيّروا رقماً، وانظروا الجواب.',
      line2: 'وإذا ظهرت طلبية أخرى، فكل الأخريات تظهر كذلك: يكفي العدّ واحداً واحداً.',
      note: 'مثال مركَّب · الطلبيتان 1042 و1043؛ ويسمّى العيب المرجع المباشر غير الآمن.',
    },
    coffre: {
      title: 'ما يجده من يسرق القاعدة',
      alt: 'لوحتان، وأربعة حسابات. في الأولى، كلمات المرور محفوظة كما هي: الأولى والثالثة مختلفتان، والثانية والرابعة متطابقتان؛ السارق يقرأ كل شيء، ويرى أن زبونين لهما كلمة المرور نفسها. وفي الثانية، الحسابات نفسها بكلمات مرور مجزَّأة ومملَّحة: أربع سلاسل غير مقروءة، كلها مختلفة، حتى للكلمتين المتطابقتين.',
      header: 'مثال مركَّب · جدول الحسابات، كما يقرؤه سارق · كما هي، ثم مجزَّأة ومملَّحة',
      left: 'كلمات المرور محفوظة كما هي', right: 'كلمات المرور مجزَّأة ومملَّحة',
      colA: 'الحساب', colB: 'ما هو مخزَّن',
      accounts: ['الزبون 1', 'الزبون 2', 'الزبون 3', 'الزبون 4'],
      leftSum: 'كل شيء يُقرأ، ثم يُجرَّب على خدمات أخرى',
      rightSum: 'لا شيء يُقرأ: كلمتان متطابقتان لم تعودا متشابهتين',
      band: 'كلمة المرور لا تُحفظ كما هي ولا تُشفَّر: تُجزَّأ، بملح خاص بكل حساب.',
      tiles: [
        { big: 'مجزَّأة، لا تُقرأ', l1: 'عملية في اتجاه واحد، يصعب عكسها', l2: '⁦Argon2id⁩ أو ⁦bcrypt⁩ أو ⁦PBKDF2⁩', hot: true },
        { big: 'ملح لكل حساب', l1: 'سلسلة عشوائية تُضاف إلى كل كلمة مرور', l2: 'كلمتان متطابقتان تعطيان نتيجتين' },
        { big: 'التجربة البسيطة', l1: '«نسيت كلمة المرور» يرسل لكم القديمة؟', l2: 'إذن هي محفوظة كما هي' },
      ],
      line1: 'القاعدة تخرج يوماً ما: نسخة احتياطية منسية، حساب إدارة، أو ثغرة. ويبقى ما يُقرأ فيها.',
      line2: 'والقاعدة نفسها تصحّ لمفاتيح التطبيق: لا مفتاح ولا كلمة مرور مكتوبة في شيفرة الهاتف.',
      note: 'مثال مركَّب · أربعة حسابات؛ والسلاسل المجزَّأة مختصرة.',
    },
  },
};
