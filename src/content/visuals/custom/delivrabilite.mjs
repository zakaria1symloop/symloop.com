// Bespoke animated figures for the 2027 "pourquoi mes mails arrivent en spam" page.
//  entetes(): two messages that show the same sender. Left, the quote sent
//             from the salesperson's mailbox: three header lines appear, all
//             three proofs pass, it lands in the inbox. Right, the confirmation
//             sent by the website: same From, another sending server, the
//             proofs fail, it lands in junk. Three rows then tell what each
//             header word means.
//  flux():    three streams, three paths. On top, everything leaves from one
//             domain and one reputation. Below, people's mail, the website's
//             messages and bulk mail each leave through their own sub-domain,
//             lines are drawn and a reputation bar grows for each: a complaint
//             about the newsletter no longer touches the quotes.
// Header lines and domain names read left to right in every locale: they are
// drawn in their own text elements with direction="ltr", parts told apart by
// colour, never by measured positions.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, open, heading, esc } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function pop(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scale(0)}${(at + 1.5).toFixed(1)}%,100%{transform:scale(1)}}`); return `transform-box:fill-box;transform-origin:center;animation:${P}-${id} ${LOOP}s linear infinite`; }
function growX(css, P, id, at, dur, rtl) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'} center;animation:${P}-${id} ${LOOP}s linear infinite`; }
function drawLine(css, P, id, at, dur, len) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{stroke-dashoffset:${len.toFixed(0)}}${(at + dur).toFixed(1)}%,100%{stroke-dashoffset:0}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
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

const FROM = 'ventes@entreprise.example';

export function entetes(t, rtl) {
  const c = ctx(rtl); const P = 'mh'; const css = []; const H = 706;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const panel = (x, id, at, title, sub, lines, verdict, bad) => {
    let g = `<g style="animation:${show(css, P, id, at)}">` + rect(c, x, 144, 510, 216, { stroke: bad ? C.accent : C.fg70, fill: bad ? TINT : DARK }) + text(c, x + 16, 168, title, { size: 11, fill: C.fg, weight: 500 }) + text(c, x + 16, 186, sub, { size: 9, font: 'mono', fill: C.fg55 }) + rect(c, x + 16, 198, 478, 96, { stroke: C.line2, fill: C.fill }) + '</g>';
    const lx = c.RX(x + 16, 478) + 12;
    lines.forEach((parts, i) => { g += `<g style="animation:${show(css, P, `${id}l${i}`, at + 2 + i * 3)}">` + ltrSpans(lx, 222 + i * 26, parts, 11, 'start') + '</g>'; });
    g += `<g style="${pop(css, P, `${id}v`, at + 12)}">` + rect(c, x + 16, 306, 478, 38, { stroke: bad ? C.accent : C.fg70, fill: bad ? C.accent : C.fill }) + text(c, x + 28, 330, verdict, { size: 11, fill: bad ? '#000' : C.fg, weight: 500 }) + '</g>';
    return g;
  };
  s += panel(80, 'a', 3, t.left, t.leftSub, [
    [['From: ', C.fg55], [FROM, C.fg, true]],
    [['Received: from ', C.fg55], ['mail.entreprise.example', C.fg, true]],
    [['Authentication-Results: ', C.fg55], ['spf=pass dkim=pass dmarc=pass', C.fg, true]],
  ], t.good, false);
  s += panel(610, 'b', 20, t.right, t.rightSub, [
    [['From: ', C.fg55], [FROM, C.fg, true]],
    [['Received: from ', C.fg55], ['web12.hebergeur.example', C.accent, true]],
    [['Authentication-Results: ', C.fg55], ['spf=fail dkim=none dmarc=fail', C.accent, true]],
  ], t.bad, true);
  t.rows.forEach(([key, rule], i) => {
    const y = 376 + i * 34;
    s += `<g style="animation:${show(css, P, `r${i}`, 38 + i * 4)}">` + rect(c, 80, y, 200, 28, { stroke: C.fg70, fill: C.fill }) + ltrSpans(c.X(180), y + 18, [[key, C.accent, true]], 11, 'middle') + text(c, 296, y + 18, rule, { size: 10.5, fill: C.fg }) + '</g>';
  });
  const by = 486;
  s += `<g style="animation:${show(css, P, 'bd', 52)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 546;
  s += tiles(c, css, P, ky, t.tiles, 56);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

const DOMAINS = ['entreprise.example', 'site.entreprise.example', 'infos.entreprise.example'];
const REP = [0.92, 0.9, 0.5];

export function flux(t, rtl) {
  const c = ctx(rtl); const P = 'mf'; const css = []; const H = 706;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const hline = (id, at, x1, x2, y) => { const len = Math.abs(x2 - x1); return `<polyline points="${c.X(x1)},${y} ${c.X(x2)},${y}" fill="none" stroke="${C.fg70}" stroke-width="1.5" stroke-dasharray="${len}" style="animation:${drawLine(css, P, id, at, 1.5, len)}"/>`; };
  // before: one path, one reputation
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 1040, 96, { stroke: C.accent, fill: TINT }) + text(c, 96, 166, t.before, { size: 11, fill: C.fg, weight: 500 }) + '</g>';
  t.short.forEach((name, i) => { const x = 96 + i * 130; s += `<g style="animation:${show(css, P, `a${i}`, 5 + i * 2)}">` + rect(c, x, 180, 120, 32, { stroke: C.line2, fill: C.fill }) + text(c, x + 60, 200, name, { size: 10, fill: C.fg, anchor: 'middle' }) + '</g>'; });
  s += hline('al', 11, 476, 540, 196);
  s += `<g style="animation:${show(css, P, 'ab', 13)}">` + rect(c, 540, 178, 260, 36, { stroke: C.fg70, fill: DARK }) + ltrSpans(c.X(670), 200, [[DOMAINS[0], C.fg, true]], 11, 'middle') + '</g>';
  s += hline('am', 14, 800, 840, 196);
  s += `<g style="animation:${show(css, P, 'at', 15)}">` + rect(c, 840, 186, 264, 20, { stroke: C.line2, fill: 'none' }) + text(c, 840, 226, t.beforeRep, { size: 8.5, font: 'mono', fill: C.accent }) + '</g>';
  s += `<g style="${growX(css, P, 'ar', 16, 3, rtl)}">` + rect(c, 840, 186, 264 * 0.35, 20, { stroke: C.accent, fill: C.accent }) + '</g>';
  // after: three paths, three reputations
  s += `<g style="animation:${show(css, P, 'pb', 22)}">` + rect(c, 80, 256, 1040, 214, { stroke: C.fg70, fill: DARK }) + text(c, 96, 278, t.after, { size: 11, fill: C.fg, weight: 500 }) + '</g>';
  t.lanes.forEach(([name, vol, via, rep], i) => {
    const y = 292 + i * 56; const at = 25 + i * 9; const hot = i === 2;
    s += `<g style="animation:${show(css, P, `s${i}`, at)}">` + rect(c, 96, y, 250, 44, { stroke: C.line2, fill: C.fill }) + text(c, 108, y + 18, name, { size: 10.5, fill: C.fg, weight: 500 }) + text(c, 108, y + 34, vol, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>';
    s += hline(`l${i}`, at + 1.5, 346, 400, y + 22);
    s += `<g style="animation:${show(css, P, `v${i}`, at + 3)}">` + rect(c, 400, y, 330, 44, { stroke: hot ? C.accent : C.fg70, fill: hot ? TINT : DARK }) + ltrSpans(c.X(565), y + 19, [[DOMAINS[i], hot ? C.accent : C.fg, true]], 11, 'middle') + text(c, 565, y + 35, via, { size: 8.5, font: 'mono', fill: C.fg55, anchor: 'middle' }) + '</g>';
    s += hline(`m${i}`, at + 4.5, 730, 770, y + 22);
    s += `<g style="animation:${show(css, P, `t${i}`, at + 5)}">` + rect(c, 770, y + 8, 240, 16, { stroke: C.line2, fill: 'none' }) + text(c, 1022, y + 20, rep, { size: 8.5, font: 'mono', fill: hot ? C.accent : C.fg70 }) + '</g>';
    s += `<g style="${growX(css, P, `r${i}`, at + 5.5, 2.5, rtl)}">` + rect(c, 770, y + 8, 240 * REP[i], 16, { stroke: hot ? C.accent : C.fg, fill: hot ? C.accent : C.fg }) + '</g>';
  });
  const by = 486;
  s += `<g style="animation:${show(css, P, 'bd', 54)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 546;
  s += tiles(c, css, P, ky, t.tiles, 58);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    entetes: {
      title: 'Deux messages, le même expéditeur affiché',
      alt: 'Deux panneaux. À gauche, le devis envoyé depuis la boîte du commercial : le serveur qui envoie est celui de la messagerie, les trois preuves, SPF, DKIM et DMARC, réussissent, et le message arrive en boîte de réception. À droite, la confirmation de commande envoyée par le site : la même adresse d’expéditeur, mais le serveur qui envoie est celui de l’hébergeur du site ; SPF échoue, il n’y a pas de signature DKIM, DMARC échoue, et le message arrive en indésirables. En bas, trois lignes expliquent les mots à chercher dans les en-têtes : Received, spf, dkim et dmarc.',
      header: 'Exemple construit · deux messages reçus le même jour par le même client · ce que disent leurs en-têtes',
      left: 'Le devis du commercial', leftSub: 'envoyé depuis sa boîte, par la messagerie',
      right: 'La confirmation du site', rightSub: 'envoyée par le site, après une commande',
      good: 'Arrive en boîte de réception', bad: 'Arrive en indésirables',
      rows: [
        ['Received', 'Quel serveur a réellement envoyé : celui de la messagerie, ou celui du site'],
        ['spf', 'Ce serveur figure-t-il dans la liste que publie le domaine ? Ici non : fail'],
        ['dkim, dmarc', 'Le message est-il signé au nom du domaine affiché ? Ici non : none, puis fail'],
      ],
      band: 'Régler la messagerie ne suffit pas : tout ce qui envoie au nom du domaine doit être déclaré, le site en premier.',
      tiles: [
        { big: 'même adresse', l1: 'les deux messages affichent le même expéditeur', l2: 'le client ne voit aucune différence' },
        { big: 'deux serveurs', l1: 'la messagerie d’un côté, le serveur du site de l’autre', l2: 'le second n’a jamais été autorisé', hot: true },
        { big: '3 mots à chercher', l1: 'spf, dkim, dmarc : pass ou fail, écrits dans chaque message', l2: 'menu « afficher l’original »' },
      ],
      line1: 'Demandez à un client de vous transférer, en pièce jointe, un message arrivé en indésirables : tout est écrit dedans.',
      line2: 'Le plus souvent, la panne n’est pas la messagerie : c’est un deuxième expéditeur que personne n’a déclaré.',
      note: 'Exemple construit · noms de domaine fictifs en .example ; en-têtes abrégés.',
    },
    flux: {
      title: 'Trois flux, trois chemins',
      alt: 'En haut, avant : les devis, les messages du site et la lettre d’information partent du même domaine et partagent une seule réputation, abîmée par la lettre. En bas, après : trois chemins. Le courrier des personnes, soixante messages par jour, part de la messagerie sous le domaine principal ; les messages du site, deux cents par jour, partent d’un service d’envoi sous un sous-domaine ; les envois groupés, quatre mille par mois, partent d’un service d’envoi groupé sous un autre sous-domaine. Chacun a sa réputation ; celle des envois groupés, avec 0,3 % de plaintes, ne touche plus les deux autres.',
      header: 'Exemple construit · une entreprise, trois sortes de messages · avant, un seul chemin ; après, un chemin par usage',
      before: 'Avant : tout part du même endroit', short: ['devis', 'site', 'lettre'],
      beforeRep: 'une réputation commune, abîmée par la lettre',
      after: 'Après : un chemin par usage',
      lanes: [
        ['Le courrier des personnes', 'devis, factures, réponses · 60 par jour', 'la messagerie', 'bonne'],
        ['Les messages du site', 'confirmations, formulaires, codes · 200 par jour', 'un service d’envoi', 'bonne'],
        ['Les envois groupés', 'lettre, offres · 4 000 par mois', 'un service d’envoi groupé', 'plaintes : 0,3 %'],
      ],
      band: 'Une plainte contre la lettre d’information ne doit jamais coûter un devis : chaque usage a son chemin et sa réputation.',
      tiles: [
        { big: '3 flux', l1: 'le courrier des personnes, les messages du site, les envois groupés', l2: 'trois usages, trois chemins' },
        { big: '0,3 %', l1: '12 plaintes pour 4 000 messages : le seuil à ne jamais atteindre', l2: 'règles publiées par Gmail et Yahoo', hot: true },
        { big: 'une adresse par usage', l1: 'la réputation de la lettre ne touche plus celle des devis', l2: 'et chaque flux se mesure à part' },
      ],
      line1: 'Le serveur du destinataire juge un expéditeur sur ce que ses propres utilisateurs font de ses messages.',
      line2: 'Séparer les flux ne cache rien : cela évite qu’un envoi mal ciblé fasse classer tout le reste en indésirables.',
      note: 'Exemple construit · volumes et taux fictifs ; noms de domaine en .example.',
    },
  },
  en: {
    entetes: {
      title: 'Two messages, the same sender shown',
      alt: 'Two panels. On the left, the quote sent from the salesperson’s mailbox: the sending server is the mail service’s, the three proofs, SPF, DKIM and DMARC, pass, and the message lands in the inbox. On the right, the order confirmation sent by the website: the same sender address, but the sending server is the website host’s; SPF fails, there is no DKIM signature, DMARC fails, and the message lands in junk. Below, three rows explain the words to look for in the headers: Received, spf, dkim and dmarc.',
      header: 'Constructed example · two messages received the same day by the same customer · what their headers say',
      left: 'The salesperson’s quote', leftSub: 'sent from their mailbox, by the mail service',
      right: 'The website’s confirmation', rightSub: 'sent by the website, after an order',
      good: 'Lands in the inbox', bad: 'Lands in junk',
      rows: [
        ['Received', 'Which server really sent it: the mail service’s, or the website’s'],
        ['spf', 'Is that server on the list the domain publishes? Here it is not: fail'],
        ['dkim, dmarc', 'Is the message signed in the name of the domain shown? Here it is not: none, then fail'],
      ],
      band: 'Setting up the mail service is not enough: everything that sends in the domain’s name must be declared, the website first.',
      tiles: [
        { big: 'same address', l1: 'both messages show the same sender', l2: 'the customer sees no difference' },
        { big: 'two servers', l1: 'the mail service on one side, the website’s server on the other', l2: 'the second was never authorised', hot: true },
        { big: '3 words to look for', l1: 'spf, dkim, dmarc: pass or fail, written in every message', l2: 'menu “show original”' },
      ],
      line1: 'Ask a customer to forward you, as an attachment, a message that landed in junk: everything is written in it.',
      line2: 'Most often, the fault is not the mail service: it is a second sender that nobody declared.',
      note: 'Constructed example · fictitious .example domain names; headers shortened.',
    },
    flux: {
      title: 'Three streams, three paths',
      alt: 'At the top, before: quotes, the website’s messages and the newsletter leave from the same domain and share one reputation, damaged by the newsletter. Below, after: three paths. People’s mail, sixty messages a day, leaves from the mail service under the main domain; the website’s messages, two hundred a day, leave from a sending service under a sub-domain; bulk mail, four thousand a month, leaves from a bulk sending service under another sub-domain. Each has its own reputation; that of bulk mail, with 0.3% of complaints, no longer touches the other two.',
      header: 'Constructed example · one company, three kinds of messages · before, a single path; after, one path per use',
      before: 'Before: everything leaves from the same place', short: ['quotes', 'website', 'newsletter'],
      beforeRep: 'one shared reputation, damaged by the newsletter',
      after: 'After: one path per use',
      lanes: [
        ['People’s mail', 'quotes, invoices, replies · 60 a day', 'the mail service', 'good'],
        ['The website’s messages', 'confirmations, forms, codes · 200 a day', 'a sending service', 'good'],
        ['Bulk mail', 'newsletter, offers · 4,000 a month', 'a bulk sending service', 'complaints: 0.3%'],
      ],
      band: 'A complaint about the newsletter must never cost a quote: each use has its own path and its own reputation.',
      tiles: [
        { big: '3 streams', l1: 'people’s mail, the website’s messages, bulk mail', l2: 'three uses, three paths' },
        { big: '0.3%', l1: '12 complaints for 4,000 messages: the threshold never to reach', l2: 'rules published by Gmail and Yahoo', hot: true },
        { big: 'one address per use', l1: 'the newsletter’s reputation no longer touches the quotes’', l2: 'and each stream is measured separately' },
      ],
      line1: 'The recipient’s server judges a sender by what its own users do with that sender’s messages.',
      line2: 'Separating streams hides nothing: it stops one badly targeted mailing from sending everything else to junk.',
      note: 'Constructed example · fictitious volumes and rates; .example domain names.',
    },
  },
  ar: {
    entetes: {
      title: 'رسالتان، والمرسِل الظاهر نفسه',
      alt: 'لوحتان. في الأولى، عرض السعر المرسَل من صندوق البائع: الخادم المرسِل هو خادم البريد، والإثباتات الثلاثة تنجح، والرسالة تصل إلى صندوق الوارد. وفي الثانية، تأكيد الطلبية المرسَل من الموقع: عنوان المرسِل نفسه، لكن الخادم المرسِل هو خادم مستضيف الموقع؛ الإثبات الأول يفشل، لا توقيع، والثالث يفشل، والرسالة تصل إلى البريد غير المرغوب فيه. وفي الأسفل، ثلاثة أسطر تشرح الكلمات التي يُبحث عنها في رأس الرسالة.',
      header: 'مثال مركَّب · رسالتان استلمهما الزبون نفسه في اليوم نفسه · ما يقوله رأس كل واحدة',
      left: 'عرض سعر البائع', leftSub: 'مرسَل من صندوقه، عبر خدمة البريد',
      right: 'تأكيد الموقع', rightSub: 'مرسَل من الموقع، بعد طلبية',
      good: 'تصل إلى صندوق الوارد', bad: 'تصل إلى البريد غير المرغوب فيه',
      rows: [
        ['Received', 'أي خادم أرسل فعلاً: خادم البريد، أم خادم الموقع'],
        ['spf', 'هل هذا الخادم في القائمة التي ينشرها النطاق؟ هنا لا: الإثبات يفشل'],
        ['dkim, dmarc', 'هل الرسالة موقَّعة باسم النطاق الظاهر؟ هنا لا: لا توقيع، ثم فشل'],
      ],
      band: 'ضبط خدمة البريد لا يكفي: كل ما يرسل باسم النطاق يجب أن يُصرَّح به، والموقع أولاً.',
      tiles: [
        { big: 'العنوان نفسه', l1: 'الرسالتان تُظهران المرسِل نفسه', l2: 'والزبون لا يرى أي فرق' },
        { big: 'خادمان', l1: 'خدمة البريد من جهة، وخادم الموقع من جهة', l2: 'والثاني لم يُرخَّص له أبداً', hot: true },
        { big: '3 كلمات يُبحث عنها', l1: 'نجاح أو فشل، مكتوبان في كل رسالة', l2: 'قائمة «عرض الأصل»' },
      ],
      line1: 'اطلبوا من زبون أن يحوّل إليكم، كمرفق، رسالة وصلت إلى البريد غير المرغوب فيه: كل شيء مكتوب فيها.',
      line2: 'وغالباً، العطل ليس في خدمة البريد: بل في مرسِل ثانٍ لم يصرّح به أحد.',
      note: 'مثال مركَّب · أسماء نطاقات خيالية؛ ورأس الرسالة مختصر.',
    },
    flux: {
      title: 'ثلاثة تدفقات، ثلاثة مسارات',
      alt: 'في الأعلى، قبل: عروض الأسعار ورسائل الموقع والنشرة تخرج من النطاق نفسه وتتقاسم سمعة واحدة، أضرّت بها النشرة. وفي الأسفل، بعد: ثلاثة مسارات. بريد الأشخاص، ستون رسالة في اليوم، يخرج من خدمة البريد تحت النطاق الرئيسي؛ رسائل الموقع، مئتان في اليوم، تخرج من خدمة إرسال تحت نطاق فرعي؛ والإرسال الجماعي، أربعة آلاف في الشهر، يخرج من خدمة إرسال جماعي تحت نطاق فرعي آخر. ولكل واحد سمعته؛ وسمعة الإرسال الجماعي، بثلاثة شكاوى في الألف، لم تعد تمسّ الاثنين الآخرين.',
      header: 'مثال مركَّب · مؤسسة واحدة، ثلاثة أنواع من الرسائل · قبل، مسار واحد؛ وبعد، مسار لكل استعمال',
      before: 'قبل: كل شيء يخرج من المكان نفسه', short: ['عروض الأسعار', 'الموقع', 'النشرة'],
      beforeRep: 'سمعة مشتركة، أضرّت بها النشرة',
      after: 'بعد: مسار لكل استعمال',
      lanes: [
        ['بريد الأشخاص', 'عروض، فواتير، وأجوبة · 60 في اليوم', 'خدمة البريد', 'جيدة'],
        ['رسائل الموقع', 'تأكيدات، استمارات، ورموز · 200 في اليوم', 'خدمة إرسال', 'جيدة'],
        ['الإرسال الجماعي', 'النشرة والعروض · 4000 في الشهر', 'خدمة إرسال جماعي', 'الشكاوى: ⁦0.3%⁩'],
      ],
      band: 'شكوى ضد النشرة يجب ألّا تكلّف عرض سعر أبداً: لكل استعمال مساره وسمعته.',
      tiles: [
        { big: '3 تدفقات', l1: 'بريد الأشخاص، رسائل الموقع، والإرسال الجماعي', l2: 'ثلاثة استعمالات، ثلاثة مسارات' },
        { big: '⁦0.3%⁩', l1: '12 شكوى لكل 4000 رسالة: العتبة التي لا تُبلَغ أبداً', l2: 'قواعد منشورة من ⁦Gmail⁩ و⁦Yahoo⁩', hot: true },
        { big: 'عنوان لكل استعمال', l1: 'سمعة النشرة لم تعد تمسّ سمعة عروض الأسعار', l2: 'وكل تدفق يُقاس وحده' },
      ],
      line1: 'خادم المستلِم يحكم على المرسِل بما يفعله مستعملوه هو برسائل هذا المرسِل.',
      line2: 'وفصل التدفقات لا يخفي شيئاً: يمنع إرسالاً سيئ الاستهداف من جرّ الباقي كله إلى البريد غير المرغوب فيه.',
      note: 'مثال مركَّب · أحجام ونسب خيالية؛ وأسماء النطاقات خيالية.',
    },
  },
};
