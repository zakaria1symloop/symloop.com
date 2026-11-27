// Bespoke animated figures for the 2027 "piratage en entreprise : boîte mail
// piratée et faux RIB" post.
//  fil():     the conversation with the supplier, five messages stacked in
//             order. Three are genuine, one was never seen (moved by a hidden
//             mailbox rule, drawn dashed), one is forged (accented). Beside
//             them, the hidden rule and the four tells of the forged message;
//             three tiles.
//  journal(): what the mailbox already knew. A sign-in log of seven lines that
//             appear one by one, the four foreign sign-ins highlighted, and
//             beside it the seven actions of the first hour; three tiles.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
const I = (x) => `⁦${x}⁩`;
const TINT = 'rgba(242,181,68,0.06)';

function tiles(c, css, P, ky, ts, at0) {
  let s = '';
  ts.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, at0 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? TINT : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  return s;
}
const motionOff = (P) => `@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"],svg rect[style*="${P}-"]{animation:none !important}}`;

export function fil(t, rtl) {
  const c = ctx(rtl); const P = 'bf'; const css = []; const H = 650;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const mx = 80, mw = 620, my = 142, mh = 62, gap = 8;
  t.msgs.forEach((m, i) => {
    const y = my + i * (mh + gap); const at = 4 + i * 4;
    const stroke = m.fake ? C.accent : m.hidden ? C.fg35 : C.line2;
    s += `<g style="animation:${show(css, P, `m${i}`, at)}">` + rect(c, mx, y, mw, mh, { stroke, fill: m.fake ? TINT : C.fill, dash: m.hidden ? '5 4' : '' })
      + text(c, mx + 14, y + 22, m.when, { size: 8.5, font: 'mono', fill: C.fg55 })
      + text(c, mx + 176, y + 22, m.from, { size: 9.5, font: 'mono', fill: m.fake ? C.accent : m.hidden ? C.fg55 : C.fg, weight: m.fake ? 500 : 400 })
      + text(c, mx + mw - 14, y + 22, m.tag, { size: 9, fill: m.fake ? C.accent : m.hidden ? C.fg55 : C.fg70, anchor: 'end', weight: m.fake || m.paid ? 500 : 300 })
      + text(c, mx + 14, y + 44, m.body, { size: 10, fill: m.hidden ? C.fg55 : C.fg }) + '</g>';
  });
  const px = 720, pw = 400;
  // the hidden rule (dashed, like the message it hides)
  s += `<g style="animation:${show(css, P, 'rule', 13)}">` + rect(c, px, my, pw, 162, { stroke: C.fg35, fill: C.fill, dash: '5 4' }) + text(c, px + 14, my + 22, t.rule.title, { size: 11.5, fill: C.fg, weight: 500 }) + text(c, px + 14, my + 37, t.rule.sub, { size: 8.5, font: 'mono', fill: C.fg55 })
    + t.rule.rows.map((r, i) => { const y = my + 62 + i * 24; return text(c, px + 14, y, r.k, { size: 9, fill: C.fg55 }) + text(c, px + 96, y, r.v, { size: r.mono ? 9 : 9.5, font: r.mono ? 'mono' : 'sans', fill: C.fg }); }).join('') + '</g>';
  // the four tells (accented, like the forged message)
  const ty = my + 172;
  s += `<g style="animation:${show(css, P, 'tells', 22)}">` + rect(c, px, ty, pw, 170, { stroke: C.accent, fill: TINT }) + text(c, px + 14, ty + 22, t.tells.title, { size: 11.5, fill: C.accent, weight: 500 }) + '</g>';
  t.tells.rows.forEach((r, i) => {
    const y = ty + 46 + i * 31;
    s += `<g style="animation:${show(css, P, `t${i}`, 23.5 + i * 1.8)}">` + text(c, px + 14, y, String(i + 1), { size: 11, font: 'mono', fill: C.accent, weight: 500 }) + text(c, px + 36, y, r.t, { size: 10, fill: C.fg }) + text(c, px + 36, y + 13, r.s, { size: 8, font: 'mono', fill: C.fg55 }) + '</g>';
  });
  const ky = my + 5 * (mh + gap) + 8;
  s += tiles(c, css, P, ky, t.tiles, 33);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export function journal(t, rtl) {
  const c = ctx(rtl); const P = 'bj'; const css = []; const H = 570;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const lx = 80, lw = 580, ly = 142, lh = 250;
  s += `<g style="animation:${show(css, P, 'lg', 3)}">` + rect(c, lx, ly, lw, lh, { stroke: C.line2, fill: C.fill }) + text(c, lx + 14, ly + 22, t.log.title, { size: 11.5, fill: C.fg, weight: 500 }) + text(c, lx + 14, ly + 37, t.log.sub, { size: 8.5, font: 'mono', fill: C.fg55 })
    + t.log.cols.map((k, j) => text(c, lx + [14, 190, 270, 410][j], ly + 60, k, { size: 8, font: 'mono', fill: C.fg35 })).join('') + line(c, lx + 14, ly + 66, lx + lw - 14, ly + 66, { stroke: C.line2 }) + '</g>';
  t.log.rows.forEach((r, i) => {
    const y = ly + 72 + i * 24; const at = 5 + i * 2.6;
    s += `<g style="animation:${show(css, P, `r${i}`, at)}">` + (r.hot ? rect(c, lx + 8, y, lw - 16, 21, { stroke: 'none', fill: 'rgba(242,181,68,0.12)' }) : '')
      + r.c.map((v, j) => text(c, lx + [14, 190, 270, 410][j], y + 15, v, { size: j === 0 ? 8.5 : 9.5, font: j === 0 ? 'mono' : 'sans', fill: r.hot ? (j === 3 ? C.accent : C.fg) : C.fg70, weight: r.hot && j === 3 ? 500 : 300 })).join('') + '</g>';
  });
  const gx = 680, gw = 440;
  s += `<g style="animation:${show(css, P, 'gh', 24)}">` + rect(c, gx, ly, gw, lh, { stroke: C.accent, fill: TINT }) + text(c, gx + 14, ly + 22, t.hour.title, { size: 11.5, fill: C.accent, weight: 500 }) + text(c, gx + 14, ly + 37, t.hour.sub, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>';
  t.hour.rows.forEach((r, i) => {
    const y = ly + 64 + i * 26;
    s += `<g style="animation:${show(css, P, `g${i}`, 25.5 + i * 1.5)}">` + text(c, gx + 14, y, String(i + 1), { size: 11, font: 'mono', fill: C.accent, weight: 500 }) + text(c, gx + 38, y, r, { size: 10, fill: C.fg }) + '</g>';
  });
  const ky = ly + lh + 18;
  s += tiles(c, css, P, ky, t.tiles, 37);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

const REAL = 'compta@fournisseur-exemple.dz';
const FAKE = 'compta@fournisseur-exenple.dz';
const US = 'comptabilite@votre-societe.dz';

export const STRINGS = {
  fr: {
    fil: {
      title: 'Le fil de discussion : cinq messages, un seul est faux',
      alt: 'La conversation avec un fournisseur en cinq messages. Il y a quatorze jours, la vraie facture de 3 240 000 dinars. Il y a treize jours, votre accusé de réception. Il y a cinq jours, un rappel du vrai fournisseur que personne n’a vu, déplacé par une règle cachée dans la boîte. Il y a quatre jours, un faux message venu d’un domaine à une lettre près, qui annonce un changement de RIB. Il y a deux jours, votre virement vers le faux RIB. À côté, la règle cachée et les quatre indices du faux message.',
      header: 'Exemple construit · boîte de la comptabilité ouverte par un tiers depuis 31 jours · facture de 3 240 000 DA',
      msgs: [
        { when: 'reçu · il y a 14 jours', from: REAL, tag: 'vrai', body: 'Facture 2027-0412 · 3 240 000 DA · échéance le 30.' },
        { when: 'envoyé · il y a 13 jours', from: US, tag: 'vrai', body: 'Bien reçue, paiement prévu le 28.' },
        { when: 'reçu · il y a 5 jours', from: REAL, tag: 'jamais vu : déplacé par la règle', body: 'Petit rappel de l’échéance du 30. Cordialement.', hidden: true },
        { when: 'reçu · il y a 4 jours', from: FAKE, tag: 'faux', body: 'Changement de banque : utilisez le RIB joint. Urgent, joignez-nous par e-mail uniquement.', fake: true },
        { when: 'envoyé · il y a 2 jours', from: US, tag: 'payé au fraudeur', body: 'Virement de 3 240 000 DA effectué ce jour sur le nouveau RIB.', paid: true },
      ],
      rule: { title: 'La règle cachée dans la boîte', sub: 'le vrai fournisseur écrit, personne ne lit', rows: [
        { k: 'si l’expéditeur est', v: '@fournisseur-exemple.dz', mono: true }, { k: 'alors', v: 'marquer le message comme lu' }, { k: 'et', v: 'le déplacer dans « Archive »' }, { k: 'créée', v: 'il y a 31 jours, depuis l’étranger' },
      ] },
      tells: { title: 'Quatre indices dans le quatrième message', rows: [
        { t: 'un domaine à une lettre près', s: 'exemple → exenple' },
        { t: 'un changement de RIB annoncé par e-mail', s: 'aucun fournisseur ne devrait le faire ainsi' },
        { t: 'l’urgence, et la demande de ne pas téléphoner', s: 'le téléphone est ce qui fait échouer la fraude' },
        { t: 'une réponse dans le fil, avec le bon numéro de facture', s: 'celui qui écrit a lu la conversation' },
      ] },
      tiles: [
        { big: '1 lettre', l1: 'sépare le vrai domaine du faux', l2: 'le ton, la signature et le fil sont copiés' },
        { big: '31 jours', l1: 'entre l’ouverture de la boîte et la découverte', l2: 'le fraudeur a lu avant d’écrire', hot: true },
        { big: '3 240 000 DA', l1: 'virés sur un compte qui n’est pas celui du fournisseur', l2: 'montant de l’exemple' },
      ],
      line1: 'Le faux message n’a rien d’un pourriel : il arrive dans la bonne conversation, au bon moment,',
      line2: 'avec le bon numéro de facture, parce que celui qui l’écrit lit la boîte depuis un mois.',
      note: 'Exemple construit · noms de domaine, montants et dates sont inventés pour l’exemple.',
    },
    journal: {
      title: 'Ce que le journal de la boîte disait déjà',
      alt: 'À gauche, le journal des connexions de la boîte sur trente-trois jours : sept lignes, dont quatre viennent d’un appareil inconnu à l’étranger, une connexion réussie sans seconde preuve, la création d’une règle six minutes plus tard, la lecture de 212 messages en pleine nuit, une lecture quatre jours avant la découverte. À droite, les sept gestes de la première heure : changer le mot de passe, fermer les sessions inconnues, supprimer les règles et transferts ajoutés, activer la double vérification, prévenir la banque, prévenir clients et fournisseurs par téléphone, garder le journal et les messages.',
      header: 'Exemple construit · journal des connexions de la boîte de la comptabilité · trente-trois jours',
      log: { title: 'Journal des connexions', sub: 'conservé par le service de messagerie, lu par personne', cols: ['QUAND', 'LIEU', 'APPAREIL', 'CE QUI S’EST PASSÉ'], rows: [
        { c: ['il y a 33 j · 08:12', 'Alger', 'poste comptabilité', 'connexion habituelle'] },
        { c: ['il y a 31 j · 10:41', 'Alger', 'poste comptabilité', 'clic sur un faux lien'] },
        { c: ['il y a 31 j · 10:52', 'étranger', 'appareil inconnu', 'connexion sans seconde preuve'], hot: true },
        { c: ['il y a 31 j · 10:58', 'étranger', 'appareil inconnu', 'règle créée dans la boîte'], hot: true },
        { c: ['il y a 20 j · 02:14', 'étranger', 'appareil inconnu', '212 messages lus'], hot: true },
        { c: ['il y a 4 j · 23:37', 'étranger', 'appareil inconnu', 'lecture du fil de la facture'], hot: true },
        { c: ['aujourd’hui · 09:05', 'Alger', 'poste comptabilité', 'connexion habituelle'] },
      ] },
      hour: { title: 'La première heure, en sept gestes', sub: 'dans cet ordre', rows: [
        'Changer le mot de passe depuis un poste sain',
        'Fermer toutes les sessions et les appareils inconnus',
        'Supprimer les règles et les transferts ajoutés',
        'Activer la double vérification, vérifier le numéro de secours',
        'Prévenir la banque si un paiement est parti',
        'Prévenir clients et fournisseurs par téléphone',
        'Garder le journal et les messages, ne rien effacer',
      ] },
      tiles: [
        { big: '4 connexions sur 7', l1: 'venaient d’un appareil inconnu, à l’étranger', l2: 'aucune alerte n’était réglée', hot: true },
        { big: '6 minutes', l1: 'entre la première connexion et la règle cachée', l2: 'elle écarte les vrais messages du fournisseur' },
        { big: '7 gestes', l1: 'la première heure, dans l’ordre', l2: 'le mot de passe seul ne ferme pas tout' },
      ],
      line1: 'Changer le mot de passe ne suffit pas : tant qu’une session reste ouverte et que la règle reste en place,',
      line2: 'celui qui est entré continue de lire, et le vrai fournisseur continue d’écrire dans le vide.',
      note: 'Exemple construit · dates, lieux et nombres sont ceux de l’exemple ; votre service de messagerie tient un journal comparable.',
    },
  },
  en: {
    fil: {
      title: 'The email thread: five messages, only one is forged',
      alt: 'The conversation with a supplier in five messages. Fourteen days ago, the genuine invoice for 3,240,000 dinars. Thirteen days ago, your acknowledgement. Five days ago, a reminder from the real supplier that nobody saw, moved by a rule hidden in the mailbox. Four days ago, a forged message from a domain one letter away, announcing new bank details. Two days ago, your transfer to the forged bank details. Beside them, the hidden rule and the four tells of the forged message.',
      header: 'Constructed example · accounting mailbox opened by a third party 31 days ago · invoice for 3,240,000 DZD',
      msgs: [
        { when: 'received · 14 days ago', from: REAL, tag: 'genuine', body: 'Invoice 2027-0412 · 3,240,000 DZD · due on the 30th.' },
        { when: 'sent · 13 days ago', from: US, tag: 'genuine', body: 'Received, payment planned for the 28th.' },
        { when: 'received · 5 days ago', from: REAL, tag: 'never seen: moved by the rule', body: 'A short reminder of the due date on the 30th. Kind regards.', hidden: true },
        { when: 'received · 4 days ago', from: FAKE, tag: 'forged', body: 'Change of bank: please use the attached details. Urgent, contact us by email only.', fake: true },
        { when: 'sent · 2 days ago', from: US, tag: 'paid to the fraudster', body: 'Transfer of 3,240,000 DZD made today to the new bank details.', paid: true },
      ],
      rule: { title: 'The rule hidden in the mailbox', sub: 'the real supplier writes, nobody reads', rows: [
        { k: 'if the sender is', v: '@fournisseur-exemple.dz', mono: true }, { k: 'then', v: 'mark the message as read' }, { k: 'and', v: 'move it to “Archive”' }, { k: 'created', v: '31 days ago, from abroad' },
      ] },
      tells: { title: 'Four tells in the fourth message', rows: [
        { t: 'a domain one letter away', s: 'exemple → exenple' },
        { t: 'new bank details announced by email', s: 'no supplier should do it this way' },
        { t: 'urgency, and a request not to phone', s: 'the phone call is what makes the fraud fail' },
        { t: 'a reply inside the thread, with the right invoice number', s: 'whoever writes has read the conversation' },
      ] },
      tiles: [
        { big: '1 letter', l1: 'separates the real domain from the forged one', l2: 'tone, signature and thread are copied' },
        { big: '31 days', l1: 'between the mailbox being opened and the discovery', l2: 'the fraudster read before writing', hot: true },
        { big: '3,240,000 DZD', l1: 'transferred to an account that is not the supplier’s', l2: 'the amount in the example' },
      ],
      line1: 'The forged message looks nothing like spam: it arrives in the right conversation, at the right time,',
      line2: 'with the right invoice number, because whoever writes it has been reading the mailbox for a month.',
      note: 'Constructed example · domain names, amounts and dates are invented for the example.',
    },
    journal: {
      title: 'What the mailbox log was already saying',
      alt: 'On the left, the mailbox sign-in log over thirty-three days: seven lines, four of them from an unknown device abroad, a successful sign-in with no second proof, a rule created six minutes later, 212 messages read in the middle of the night, a read four days before the discovery. On the right, the seven actions of the first hour: change the password, close unknown sessions, delete added rules and forwards, turn on two-step verification, warn the bank, warn customers and suppliers by phone, keep the log and the messages.',
      header: 'Constructed example · sign-in log of the accounting mailbox · thirty-three days',
      log: { title: 'Sign-in log', sub: 'kept by the mail service, read by nobody', cols: ['WHEN', 'PLACE', 'DEVICE', 'WHAT HAPPENED'], rows: [
        { c: ['33 d ago · 08:12', 'Algiers', 'accounting PC', 'usual sign-in'] },
        { c: ['31 d ago · 10:41', 'Algiers', 'accounting PC', 'click on a forged link'] },
        { c: ['31 d ago · 10:52', 'abroad', 'unknown device', 'sign-in with no second proof'], hot: true },
        { c: ['31 d ago · 10:58', 'abroad', 'unknown device', 'rule created in the mailbox'], hot: true },
        { c: ['20 d ago · 02:14', 'abroad', 'unknown device', '212 messages read'], hot: true },
        { c: ['4 d ago · 23:37', 'abroad', 'unknown device', 'invoice thread read'], hot: true },
        { c: ['today · 09:05', 'Algiers', 'accounting PC', 'usual sign-in'] },
      ] },
      hour: { title: 'The first hour, in seven actions', sub: 'in this order', rows: [
        'Change the password from a clean computer',
        'Close every unknown session and device',
        'Delete the rules and forwards that were added',
        'Turn on two-step verification, check the recovery number',
        'Warn the bank if a payment has gone out',
        'Warn customers and suppliers by phone',
        'Keep the log and the messages, delete nothing',
      ] },
      tiles: [
        { big: '4 sign-ins out of 7', l1: 'came from an unknown device, abroad', l2: 'no alert had been set', hot: true },
        { big: '6 minutes', l1: 'between the first sign-in and the hidden rule', l2: 'it sets the real supplier’s messages aside' },
        { big: '7 actions', l1: 'the first hour, in order', l2: 'the password alone does not close everything' },
      ],
      line1: 'Changing the password is not enough: as long as a session stays open and the rule stays in place,',
      line2: 'whoever got in keeps reading, and the real supplier keeps writing into the void.',
      note: 'Constructed example · dates, places and numbers belong to the example; your mail service keeps a comparable log.',
    },
  },
  ar: {
    fil: {
      title: 'سلسلة الرسائل: خمس رسائل، واحدة فقط مزوَّرة',
      alt: 'المحادثة مع مورِّد في خمس رسائل. قبل أربعة عشر يوماً، الفاتورة الحقيقية بمبلغ 3 240 000 دينار. قبل ثلاثة عشر يوماً، إشعاركم بالاستلام. قبل خمسة أيام، تذكير من المورِّد الحقيقي لم يره أحد، نقلته قاعدة مخفية في العلبة. قبل أربعة أيام، رسالة مزوَّرة من نطاق يختلف بحرف واحد، تعلن تغيير الحساب البنكي. قبل يومين، تحويلكم إلى الحساب المزوَّر. وبجانبها القاعدة المخفية والعلامات الأربع للرسالة المزوَّرة.',
      header: `مثال مركَّب · علبة المحاسبة مفتوحة من طرف غريب منذ 31 يوماً · فاتورة بـ ${I('3 240 000')} دينار`,
      msgs: [
        { when: 'واردة · قبل 14 يوماً', from: I(REAL), tag: 'حقيقية', body: `الفاتورة ${I('2027-0412')} · ${I('3 240 000')} دينار · الأجل يوم 30.` },
        { when: 'مرسَلة · قبل 13 يوماً', from: I(US), tag: 'حقيقية', body: 'وصلت، والدفع مبرمج يوم 28.' },
        { when: 'واردة · قبل 5 أيام', from: I(REAL), tag: 'لم يرها أحد: نقلتها القاعدة', body: 'تذكير بسيط بأجل يوم 30. مع التحية.', hidden: true },
        { when: 'واردة · قبل 4 أيام', from: I(FAKE), tag: 'مزوَّرة', body: 'تغيير البنك: استعملوا الحساب المرفق. مستعجل، راسلونا بالبريد فقط.', fake: true },
        { when: 'مرسَلة · قبل يومين', from: I(US), tag: 'دُفع للمحتال', body: `تم اليوم تحويل ${I('3 240 000')} دينار إلى الحساب الجديد.`, paid: true },
      ],
      rule: { title: 'القاعدة المخفية في العلبة', sub: 'المورِّد الحقيقي يكتب، ولا أحد يقرأ', rows: [
        { k: 'إذا كان المرسِل', v: I('@fournisseur-exemple.dz'), mono: true }, { k: 'إذن', v: 'اجعل الرسالة مقروءة' }, { k: 'و', v: 'انقلها إلى «الأرشيف»' }, { k: 'أُنشئت', v: 'قبل 31 يوماً، من الخارج' },
      ] },
      tells: { title: 'أربع علامات في الرسالة الرابعة', rows: [
        { t: 'نطاق يختلف بحرف واحد', s: I('exemple → exenple') },
        { t: 'تغيير الحساب البنكي يُعلَن بالبريد', s: 'لا مورِّد يفعل ذلك بهذه الطريقة' },
        { t: 'الاستعجال، وطلب عدم الاتصال هاتفياً', s: 'المكالمة هي التي تُفشل الاحتيال' },
        { t: 'ردّ داخل السلسلة، برقم الفاتورة الصحيح', s: 'من يكتب قرأ المحادثة' },
      ] },
      tiles: [
        { big: 'حرف واحد', l1: 'يفصل النطاق الحقيقي عن المزوَّر', l2: 'الأسلوب والتوقيع والسلسلة منسوخة' },
        { big: '31 يوماً', l1: 'بين فتح العلبة والاكتشاف', l2: 'المحتال قرأ قبل أن يكتب', hot: true },
        { big: `${I('3 240 000')} دينار`, l1: 'حُوِّلت إلى حساب ليس حساب المورِّد', l2: 'مبلغ المثال' },
      ],
      line1: 'الرسالة المزوَّرة لا تشبه البريد المزعج: تصل في المحادثة الصحيحة، وفي الوقت الصحيح،',
      line2: 'وبرقم الفاتورة الصحيح، لأن من يكتبها يقرأ العلبة منذ شهر.',
      note: 'مثال مركَّب · أسماء النطاقات والمبالغ والتواريخ مخترَعة للمثال.',
    },
    journal: {
      title: 'ما كان سجل العلبة يقوله من قبل',
      alt: 'على اليمين سجل الدخول إلى العلبة خلال ثلاثة وثلاثين يوماً: سبعة سطور، أربعة منها من جهاز مجهول في الخارج، دخول ناجح دون إثبات ثانٍ، قاعدة أُنشئت بعد ست دقائق، قراءة 212 رسالة في منتصف الليل، وقراءة قبل الاكتشاف بأربعة أيام. وعلى اليسار الحركات السبع في الساعة الأولى: تغيير كلمة المرور، إغلاق الجلسات المجهولة، حذف القواعد وإعادات التوجيه المضافة، تفعيل التحقق بخطوتين، إخبار البنك، إخبار الزبائن والمورِّدين هاتفياً، وحفظ السجل والرسائل.',
      header: 'مثال مركَّب · سجل الدخول إلى علبة المحاسبة · ثلاثة وثلاثون يوماً',
      log: { title: 'سجل الدخول', sub: 'تحفظه خدمة البريد، ولا يقرؤه أحد', cols: ['متى', 'المكان', 'الجهاز', 'ما الذي حدث'], rows: [
        { c: [`قبل 33 يوماً · ${I('08:12')}`, 'الجزائر', 'حاسوب المحاسبة', 'دخول معتاد'] },
        { c: [`قبل 31 يوماً · ${I('10:41')}`, 'الجزائر', 'حاسوب المحاسبة', 'نقر على رابط مزوَّر'] },
        { c: [`قبل 31 يوماً · ${I('10:52')}`, 'الخارج', 'جهاز مجهول', 'دخول دون إثبات ثانٍ'], hot: true },
        { c: [`قبل 31 يوماً · ${I('10:58')}`, 'الخارج', 'جهاز مجهول', 'إنشاء قاعدة في العلبة'], hot: true },
        { c: [`قبل 20 يوماً · ${I('02:14')}`, 'الخارج', 'جهاز مجهول', 'قراءة 212 رسالة'], hot: true },
        { c: [`قبل 4 أيام · ${I('23:37')}`, 'الخارج', 'جهاز مجهول', 'قراءة سلسلة الفاتورة'], hot: true },
        { c: [`اليوم · ${I('09:05')}`, 'الجزائر', 'حاسوب المحاسبة', 'دخول معتاد'] },
      ] },
      hour: { title: 'الساعة الأولى، في سبع حركات', sub: 'بهذا الترتيب', rows: [
        'تغيير كلمة المرور من حاسوب سليم',
        'إغلاق كل الجلسات والأجهزة المجهولة',
        'حذف القواعد وإعادات التوجيه المضافة',
        'تفعيل التحقق بخطوتين، ومراجعة رقم الاسترجاع',
        'إخبار البنك إذا خرج دفع',
        'إخبار الزبائن والمورِّدين بالهاتف',
        'حفظ السجل والرسائل، وعدم حذف شيء',
      ] },
      tiles: [
        { big: '4 دخولات من 7', l1: 'جاءت من جهاز مجهول، في الخارج', l2: 'لم يكن أي تنبيه مضبوطاً', hot: true },
        { big: '6 دقائق', l1: 'بين أول دخول والقاعدة المخفية', l2: 'تُبعد رسائل المورِّد الحقيقي' },
        { big: '7 حركات', l1: 'الساعة الأولى، بالترتيب', l2: 'كلمة المرور وحدها لا تغلق كل شيء' },
      ],
      line1: 'تغيير كلمة المرور لا يكفي: ما دامت جلسة مفتوحة والقاعدة في مكانها،',
      line2: 'يواصل من دخل القراءة، ويواصل المورِّد الحقيقي الكتابة في الفراغ.',
      note: 'مثال مركَّب · التواريخ والأماكن والأعداد خاصة بالمثال؛ وخدمة بريدكم تمسك سجلاً مماثلاً.',
    },
  },
};
