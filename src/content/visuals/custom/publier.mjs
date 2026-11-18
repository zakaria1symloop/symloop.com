// Bespoke animated figures for the 2027 "comment publier une application" post.
//  compte(): who owns the app. Two panels, the same app published on the
//            developer's own account and on the company's account. In each,
//            the account box holds the listing, the users, the ratings and
//            the statistics. Then "the day the developer leaves": on the left
//            an accent frame closes over everything, on the right one access
//            line is struck through and nothing else moves.
//  revue():  the review as five gates between "sent" and "live". A token
//            travels, is refused at the second gate, comes back along a loop
//            drawn under the gates, then passes all five. A band gives the
//            days of the week; three tiles.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function growX(css, P, id, at, dur, rtl) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'} center;animation:${P}-${id} ${LOOP}s linear infinite`; }
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

export function compte(t, rtl) {
  const c = ctx(rtl); const P = 'pa'; const css = []; const H = 644;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  [t.dev, t.firm].forEach((k, p) => {
    const x = 80 + p * 530; const hot = p === 0; const a0 = 4 + p * 3;
    // panel frame and its title
    s += `<g style="animation:${show(css, P, `p${p}`, a0)}">` + rect(c, x, 142, 510, 268, { stroke: C.line2, fill: 'none' }) + text(c, x + 16, 166, k.title, { size: 11.5, fill: C.fg, weight: 500 }) + text(c, x + 16, 182, k.sub, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>';
    // the account box: whose name it carries, and what it holds
    s += `<g style="animation:${show(css, P, `a${p}`, a0 + 5)}">` + rect(c, x + 16, 194, 478, 118, { stroke: hot ? C.accent : C.fg70, fill: DARK }) + text(c, x + 28, 213, k.owner, { size: 9, font: 'mono', fill: hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 28, 229, k.seller, { size: 9, fill: C.fg70 }) + '</g>';
    t.chips.forEach((n, i) => { s += `<g style="animation:${show(css, P, `c${p}${i}`, 13 + p * 9 + i * 2)}">` + rect(c, x + 28 + i * 114, 242, 104, 26, { stroke: C.line2, fill: C.fill }) + text(c, x + 28 + i * 114 + 52, 259, n, { size: 9, fill: C.fg, anchor: 'middle' }) + '</g>'; });
    let ax = x + 78;
    s += `<g style="animation:${show(css, P, `u${p}`, 32 + p * 2)}">` + text(c, x + 28, 295, t.accessLabel, { size: 9, fill: C.fg70 }) + k.access.map((a) => { const o = rect(c, ax, 280, a.w, 22, { stroke: C.line2, fill: C.fill }) + text(c, ax + a.w / 2, 295, a.n, { size: 9, fill: C.fg, anchor: 'middle' }); ax += a.w + 10; return o; }).join('') + (k.accessNote ? text(c, ax + 2, 295, k.accessNote, { size: 9, fill: C.fg70 }) : '') + '</g>';
    // the day the developer leaves
    s += `<g style="animation:${show(css, P, `d${p}`, 40)}">` + text(c, x + 16, 336, t.leaves, { size: 10, fill: C.fg, weight: 500 }) + '</g>';
    s += `<g style="animation:${show(css, P, `r${p}`, 46 + p * 8)}">` + rect(c, x + 16, 346, 478, 50, { stroke: hot ? C.accent : C.fg70, fill: hot ? TINT : C.fill }) + text(c, x + 28, 366, k.result, { size: 10.5, fill: hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 28, 384, k.result2, { size: 9, fill: C.fg70 }) + '</g>';
  });
  // left: everything is locked in his account; right: one access line is struck through
  s += `<g style="animation:${show(css, P, 'lock', 44)}">` + rect(c, 104, 238, 462, 34, { stroke: C.accent, fill: 'none', dash: '4 3' }) + '</g>';
  s += `<g style="${growX(css, P, 'strike', 51, 3, rtl)}">` + rect(c, 610 + 78 + t.firm.access[0].w + 10, 290, t.firm.access[1].w, 1.5, { fill: C.accent, stroke: 'none' }) + '</g>';
  const by = 424;
  s += `<g style="animation:${show(css, P, 'bd', 60)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 484;
  s += tiles(c, css, P, ky, t.tiles, 64);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export function revue(t, rtl) {
  const c = ctx(rtl); const P = 'pr'; const css = []; const H = 580;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const by0 = 150, bh = 92; const gx = (i) => 200 + i * 162; const gc = (i) => gx(i) + 75; const sx = 134, ex = 1065, ty = 268;
  // start, five gates, end
  s += `<g style="animation:${show(css, P, 'st', 3)}">` + rect(c, 80, by0, 108, bh, { stroke: C.fg70, fill: DARK }) + text(c, 92, by0 + 36, t.start, { size: 11, fill: C.fg, weight: 500 }) + text(c, 92, by0 + 54, t.startDay, { size: 9, font: 'mono', fill: C.fg55 }) + rect(c, 1010, by0, 110, bh, { stroke: C.accent, fill: TINT }) + text(c, 1022, by0 + 36, t.end, { size: 11, fill: C.accent, weight: 500 }) + text(c, 1022, by0 + 54, t.endDay, { size: 9, font: 'mono', fill: C.fg55 }) + '</g>';
  t.gates.forEach((k, i) => {
    s += `<g style="animation:${show(css, P, `g${i}`, 4 + i)}">` + rect(c, gx(i), by0, 150, bh, { stroke: C.line2, fill: DARK }) + text(c, gx(i) + 12, by0 + 18, String(i + 1), { size: 9, font: 'mono', fill: C.fg55 }) + text(c, gx(i) + 12, by0 + 38, k.name, { size: 11, fill: C.fg, weight: 500 }) + text(c, gx(i) + 12, by0 + 56, k.l1, { size: 9, fill: C.fg70 }) + text(c, gx(i) + 12, by0 + 70, k.l2, { size: 9, fill: C.fg70 }) + '</g>';
  });
  s += `<g style="animation:${show(css, P, 'tr', 5)}">` + line(c, sx, ty, ex, ty, { stroke: C.fg35 }) + circle(c, sx, ty, 3, { fill: C.fg }) + t.gates.map((k, i) => circle(c, gc(i), ty, 3, { fill: C.fg55 })).join('') + '</g>';
  // first pass: refused at the second gate, back to the start along the loop
  s += `<g style="animation:${show(css, P, 'no', 16)}">` + text(c, gc(1) - 22, ty - 12, t.refused, { size: 9, font: 'mono', fill: C.accent, weight: 500, anchor: 'middle' }) + '</g>';
  const loop = [[gc(1), ty + 10], [gc(1), ty + 36], [sx, ty + 36], [sx, ty + 10]]; const LL = Math.ceil(26 + (gc(1) - sx) + 26);
  s += `<polyline points="${loop.map(([x, y]) => `${c.X(x).toFixed(1)},${y}`).join(' ')}" fill="none" stroke="${C.accent}" stroke-width="1.5" stroke-dasharray="${LL}" style="animation:${drawLine(css, P, 'lp', 20, 8, LL)}"/>`;
  s += `<g style="animation:${show(css, P, 'why', 24)}">` + text(c, sx + 12, ty + 54, t.why, { size: 9.5, fill: C.accent }) + '</g>';
  // second pass: every gate lets it through
  t.gates.forEach((k, i) => { s += `<g style="animation:${show(css, P, `ok${i}`, 42 + i * 4)}">` + text(c, gc(i) + (i === 1 ? 24 : 0), ty - 12, t.passed, { size: 9, font: 'mono', fill: C.fg70, anchor: 'middle' }) + '</g>'; });
  s += `<g style="animation:${show(css, P, 'fin', 62)}">` + text(c, 1120, ty + 54, t.accepted, { size: 9.5, fill: C.fg, anchor: 'end' }) + '</g>';
  const tx = (v) => (c.X(v) - c.X(ex)).toFixed(1);
  const stops = [[0, sx], [6, sx], [10, gc(0)], [14, gc(1)], [22, gc(1)], [30, sx], [37, sx], [41, gc(0)], [45, gc(1)], [49, gc(2)], [53, gc(3)], [57, gc(4)], [61, ex], [100, ex]];
  css.push(`@keyframes ${P}-run{${stops.map(([p, v]) => `${p}%{transform:translateX(${tx(v)}px)}`).join('')}}`);
  s += `<g style="animation:${P}-run ${LOOP}s linear infinite">` + circle(c, ex, ty, 9, { fill: C.accent }) + '</g>';
  const by = 360;
  s += `<g style="animation:${show(css, P, 'bd', 66)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10, font: 'mono', fill: C.fg }) + '</g>';
  const ky = 420;
  s += tiles(c, css, P, ky, t.tiles, 70);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    compte: {
      title: 'Celui qui possède le compte possède l’application',
      alt: 'La même application publiée de deux façons. Sur le compte du développeur : le compte est à son nom, son nom est affiché comme vendeur, et la fiche, les utilisateurs, les notes et les statistiques s’y trouvent ; le jour où il part, tout reste chez lui et aucune mise à jour n’est possible sans son accord. Sur le compte de la société : le compte est au nom de la société, deux administrateurs y ont accès et le développeur est invité ; le jour où il part, son accès est retiré et rien d’autre ne change.',
      header: 'Exemple construit · la même application, publiée de deux façons · ce qui se passe le jour où le développeur s’en va',
      chips: ['la fiche', 'les utilisateurs', 'les notes et avis', 'les statistiques'], leaves: 'Le jour où le développeur part',
      dev: { title: 'Publiée sur le compte du développeur', sub: 'le plus rapide le premier jour', owner: 'compte au nom de : le développeur', seller: 'vendeur affiché sur le store : son nom à lui', access: [{ n: 'lui seul', w: 90 }], accessNote: 'la société lui demande chaque changement', result: 'le compte, donc l’application, restent chez lui', result2: 'plus de mise à jour sans son accord ; un transfert existe, s’il l’accepte' },
      firm: { title: 'Publiée sur le compte de la société', sub: 'quelques jours à quelques semaines de vérification, une seule fois', owner: 'compte au nom de : la société', seller: 'vendeur affiché sur le store : le nom de la société', access: [{ n: 'deux administrateurs de la société', w: 196 }, { n: 'le développeur, invité', w: 150 }], result: 'son accès est retiré en une minute', result2: 'la fiche, les utilisateurs, les notes et les mises à jour ne bougent pas' },
      accessLabel: 'accès :',
      band: 'Le compte se crée au nom de l’entreprise avant la première ligne de code ; le développeur y est invité avec un rôle, et en sort à la fin du contrat.',
      tiles: [
        { big: '1 compte par store', l1: 'au nom de la société, avec deux administrateurs', l2: '25 dollars une fois, 99 dollars par an' },
        { big: 'le compte possède l’application', l1: 'fiche, utilisateurs, notes, statistiques, mises à jour', l2: 'tout suit le titulaire du compte', hot: true },
        { big: 'le développeur est invité', l1: 'un rôle pour envoyer des versions, pas plus', l2: 'retiré à la fin, sans rien perdre' },
      ],
      line1: 'Publier sur le compte du développeur fait gagner quelques semaines le premier mois, et peut coûter l’application le jour où il part.',
      line2: 'Un transfert d’un compte à un autre existe sur les deux stores ; il suppose que l’ancien titulaire réponde et accepte.',
      note: 'Exemple construit · rôles et délais indicatifs ; conditions lues dans l’aide de Google Play et d’Apple en novembre 2026.',
    },
    revue: {
      title: 'La revue : cinq portes, et un refus coûte un tour de plus',
      alt: 'Une version envoyée le lundi traverse cinq portes avant d’être en ligne : sécurité, performances, commerce, conception, juridique. Au premier passage elle est refusée à la deuxième porte, le mardi, parce que le compte de démonstration manque ; elle revient au départ, est corrigée et renvoyée le mercredi, passe les cinq portes et est acceptée le jeudi.',
      header: 'Exemple construit · une version envoyée un lundi · les cinq portes reprennent les cinq chapitres des règles de revue d’Apple',
      start: 'Envoi', startDay: 'lundi', end: 'En ligne', endDay: 'jeudi', refused: 'refus', passed: 'ok',
      gates: [
        { name: 'Sécurité', l1: 'contenus, signalement,', l2: 'protection des mineurs' },
        { name: 'Performances', l1: 'application complète,', l2: 'compte de démonstration' },
        { name: 'Commerce', l1: 'paiements et abonnements', l2: 'selon les règles du store' },
        { name: 'Conception', l1: 'plus qu’un site emballé,', l2: 'une utilité réelle' },
        { name: 'Juridique', l1: 'confidentialité, données,', l2: 'suppression de compte' },
      ],
      why: 'mardi : refus, compte de démonstration manquant · mercredi : corrigé et renvoyé',
      accepted: 'second passage : acceptée jeudi',
      band: 'lundi : envoi · mardi : refus · mercredi : correction et nouvel envoi · jeudi : acceptée · vendredi : diffusion à 5 % des utilisateurs',
      tiles: [
        { big: '50 % en 24 h, 90 % en 48 h', l1: 'délais habituels annoncés par Apple', l2: 'par envoi, donc après chaque refus aussi' },
        { big: '1 refus = 1 tour de plus', l1: 'correction, nouvel envoi, nouvelle attente', l2: 'comptez-en un dans le calendrier', hot: true },
        { big: 'un motif écrit', l1: 'on répond à la revue, on corrige, on renvoie', l2: 'un appel est possible en cas de désaccord' },
      ],
      line1: 'Un refus n’est pas un échec : c’est un tour de plus, avec un motif écrit. Beaucoup se préviennent avant l’envoi.',
      line2: 'Un compte de démonstration, un serveur allumé, une politique de confidentialité, la suppression de compte : quatre vérifications.',
      note: 'Exemple construit · jours et motif inventés ; délais habituels lus sur la page d’Apple en novembre 2026. Google Play applique des règles proches.',
    },
  },
  en: {
    compte: {
      title: 'Whoever owns the account owns the app',
      alt: 'The same app published in two ways. On the developer’s account: the account is in his name, his name is shown as the seller, and the listing, the users, the ratings and the statistics sit there; the day he leaves, everything stays with him and no update is possible without his agreement. On the company’s account: the account is in the company’s name, two administrators have access and the developer is invited; the day he leaves, his access is removed and nothing else changes.',
      header: 'Constructed example · the same app, published in two ways · what happens the day the developer leaves',
      chips: ['the listing', 'the users', 'the ratings', 'the statistics'], leaves: 'The day the developer leaves',
      dev: { title: 'Published on the developer’s account', sub: 'the fastest on day one', owner: 'account in the name of: the developer', seller: 'seller shown on the store: his own name', access: [{ n: 'him alone', w: 90 }], accessNote: 'the company asks him for every change', result: 'the account, and so the app, stay with him', result2: 'no update without his agreement; a transfer exists, if he accepts it' },
      firm: { title: 'Published on the company’s account', sub: 'a few days to a few weeks of verification, once', owner: 'account in the name of: the company', seller: 'seller shown on the store: the company’s name', access: [{ n: 'two company administrators', w: 196 }, { n: 'the developer, invited', w: 150 }], result: 'his access is removed in a minute', result2: 'the listing, the users, the ratings and the updates do not move' },
      accessLabel: 'access:',
      band: 'The account is created in the company’s name before the first line of code; the developer is invited with a role, and leaves it when the contract ends.',
      tiles: [
        { big: '1 account per store', l1: 'in the company’s name, with two administrators', l2: 'US$25 once, 99 USD a year' },
        { big: 'the account owns the app', l1: 'listing, users, ratings, statistics, updates', l2: 'everything follows the account holder', hot: true },
        { big: 'the developer is invited', l1: 'a role to send versions, nothing more', l2: 'removed at the end, with nothing lost' },
      ],
      line1: 'Publishing on the developer’s account saves a few weeks in the first month, and can cost you the app the day he leaves.',
      line2: 'A transfer from one account to another exists on both stores; it requires the former holder to answer and accept.',
      note: 'Constructed example · indicative roles and delays; conditions read in the Google Play and Apple help pages in November 2026.',
    },
    revue: {
      title: 'Review: five gates, and a refusal costs one more round',
      alt: 'A version sent on Monday crosses five gates before being live: safety, performance, business, design, legal. On the first pass it is refused at the second gate, on Tuesday, because the demo account is missing; it goes back to the start, is fixed and sent again on Wednesday, passes the five gates and is accepted on Thursday.',
      header: 'Constructed example · a version sent on a Monday · the five gates follow the five chapters of Apple’s review guidelines',
      start: 'Sent', startDay: 'Monday', end: 'Live', endDay: 'Thursday', refused: 'refused', passed: 'ok',
      gates: [
        { name: 'Safety', l1: 'content, reporting,', l2: 'protection of minors' },
        { name: 'Performance', l1: 'complete app,', l2: 'demo account' },
        { name: 'Business', l1: 'payments and subscriptions', l2: 'by the store’s rules' },
        { name: 'Design', l1: 'more than a wrapped site,', l2: 'a real use' },
        { name: 'Legal', l1: 'privacy, data,', l2: 'account deletion' },
      ],
      why: 'Tuesday: refused, demo account missing · Wednesday: fixed and sent again',
      accepted: 'second pass: accepted on Thursday',
      band: 'Monday: sent · Tuesday: refused · Wednesday: fix and new submission · Thursday: accepted · Friday: rollout to 5 % of users',
      tiles: [
        { big: '50 % in 24 h, 90 % in 48 h', l1: 'usual times stated by Apple', l2: 'per submission, so after each refusal too' },
        { big: '1 refusal = 1 more round', l1: 'fix, new submission, new wait', l2: 'count one in the calendar', hot: true },
        { big: 'a written reason', l1: 'you reply to the review, fix, send again', l2: 'an appeal is possible if you disagree' },
      ],
      line1: 'A refusal is not a failure: it is one more round, with a written reason. Many can be prevented before sending.',
      line2: 'A demo account, a server switched on, a privacy policy, account deletion: four checks.',
      note: 'Constructed example · invented days and reason; usual times read on Apple’s page in November 2026. Google Play applies similar rules.',
    },
  },
  ar: {
    compte: {
      title: 'من يملك الحساب يملك التطبيق',
      alt: 'التطبيق نفسه منشوراً بطريقتين. على حساب المطوِّر: الحساب باسمه، اسمه معروض كبائع، والبطاقة والمستعملون والتقييمات والإحصائيات موجودة فيه؛ ويوم يغادر، يبقى كل شيء عنده ولا تحديث ممكن دون موافقته. وعلى حساب الشركة: الحساب باسم الشركة، مسؤولان من الشركة لهما الوصول والمطوِّر مدعو؛ ويوم يغادر، يُسحب وصوله ولا شيء آخر يتغيّر.',
      header: 'مثال مركَّب · التطبيق نفسه، منشوراً بطريقتين · ما يحدث يوم يغادر المطوِّر',
      chips: ['البطاقة', 'المستعملون', 'التقييمات', 'الإحصائيات'], leaves: 'يوم يغادر المطوِّر',
      dev: { title: 'منشور على حساب المطوِّر', sub: 'الأسرع في اليوم الأول', owner: 'حساب باسم: المطوِّر', seller: 'البائع المعروض في المتجر: اسمه هو', access: [{ n: 'هو وحده', w: 90 }], accessNote: 'والشركة تطلب منه كل تغيير', result: 'الحساب، ومعه التطبيق، يبقيان عنده', result2: 'لا تحديث دون موافقته؛ والتحويل موجود، إن قبله' },
      firm: { title: 'منشور على حساب الشركة', sub: 'بضعة أيام إلى بضعة أسابيع من التحقق، مرة واحدة', owner: 'حساب باسم: الشركة', seller: 'البائع المعروض في المتجر: اسم الشركة', access: [{ n: 'مسؤولان من الشركة', w: 196 }, { n: 'المطوِّر، مدعو', w: 150 }], result: 'يُسحب وصوله في دقيقة', result2: 'البطاقة والمستعملون والتقييمات والتحديثات لا تتحرك' },
      accessLabel: 'الوصول:',
      band: 'يُنشأ الحساب باسم المؤسسة قبل أول سطر من الشيفرة؛ ويُدعى إليه المطوِّر بدور، ويخرج منه عند نهاية العقد.',
      tiles: [
        { big: 'حساب لكل متجر', l1: 'باسم الشركة، بمسؤولَين', l2: '25 دولاراً مرة واحدة، و99 دولاراً في السنة' },
        { big: 'الحساب يملك التطبيق', l1: 'البطاقة، المستعملون، التقييمات، الإحصائيات، التحديثات', l2: 'كل شيء يتبع صاحب الحساب', hot: true },
        { big: 'المطوِّر مدعو', l1: 'دور لإرسال الإصدارات، لا أكثر', l2: 'يُسحب في النهاية، دون خسارة شيء' },
      ],
      line1: 'النشر على حساب المطوِّر يربح بضعة أسابيع في الشهر الأول، وقد يكلّف التطبيق يوم يغادر.',
      line2: 'التحويل من حساب إلى آخر موجود في المتجرين؛ ويفترض أن يجيب صاحب الحساب القديم ويقبل.',
      note: 'مثال مركَّب · أدوار وآجال تقريبية؛ والشروط مقروءة في مساعدة غوغل بلاي وآبل في نوفمبر 2026.',
    },
    revue: {
      title: 'المراجعة: خمسة أبواب، والرفض يكلّف دورة إضافية',
      alt: 'إصدار أُرسل يوم الاثنين يعبر خمسة أبواب قبل أن يصير متاحاً: الأمان، الأداء، التجارة، التصميم، والجانب القانوني. في المرور الأول يُرفض عند الباب الثاني، يوم الثلاثاء، لأن حساب التجربة ناقص؛ فيعود إلى البداية، يُصحَّح ويُعاد إرساله يوم الأربعاء، يعبر الأبواب الخمسة ويُقبل يوم الخميس.',
      header: 'مثال مركَّب · إصدار أُرسل يوم اثنين · الأبواب الخمسة تتبع الفصول الخمسة لقواعد المراجعة عند آبل',
      start: 'الإرسال', startDay: 'الاثنين', end: 'متاح', endDay: 'الخميس', refused: 'رفض', passed: 'مقبول',
      gates: [
        { name: 'الأمان', l1: 'المحتويات، التبليغ،', l2: 'وحماية القُصَّر' },
        { name: 'الأداء', l1: 'تطبيق كامل،', l2: 'وحساب تجربة' },
        { name: 'التجارة', l1: 'المدفوعات والاشتراكات', l2: 'حسب قواعد المتجر' },
        { name: 'التصميم', l1: 'أكثر من موقع مغلَّف،', l2: 'منفعة حقيقية' },
        { name: 'الجانب القانوني', l1: 'الخصوصية، البيانات،', l2: 'وحذف الحساب' },
      ],
      why: 'الثلاثاء: رفض، حساب التجربة ناقص · الأربعاء: صُحِّح وأُعيد إرساله',
      accepted: 'المرور الثاني: قُبل يوم الخميس',
      band: `الاثنين: إرسال · الثلاثاء: رفض · الأربعاء: تصحيح وإرسال جديد · الخميس: قبول · الجمعة: نشر لـ ${I('5 %')} من المستعملين`,
      tiles: [
        { big: `${I('50 %')} في 24 سا، ${I('90 %')} في 48 سا`, l1: 'الآجال المعتادة التي تعلنها آبل', l2: 'لكل إرسال، إذن بعد كل رفض كذلك' },
        { big: 'رفض واحد = دورة إضافية', l1: 'تصحيح، إرسال جديد، وانتظار جديد', l2: 'احسبوا واحداً في التقويم', hot: true },
        { big: 'سبب مكتوب', l1: 'نجيب المراجعة، نصحّح، ونعيد الإرسال', l2: 'والتظلّم ممكن عند الخلاف' },
      ],
      line1: 'الرفض ليس فشلاً: هو دورة إضافية، بسبب مكتوب. وكثير منه يُتفادى قبل الإرسال.',
      line2: 'حساب تجربة، خادم مشغَّل، سياسة خصوصية، وحذف الحساب: أربعة تحققات.',
      note: 'مثال مركَّب · أيام وسبب مخترَعة؛ والآجال المعتادة مقروءة في صفحة آبل في نوفمبر 2026. وغوغل بلاي يطبّق قواعد قريبة.',
    },
  },
};
