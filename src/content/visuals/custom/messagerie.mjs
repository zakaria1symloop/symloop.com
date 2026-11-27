// Bespoke animated figures for the 2027 "messagerie professionnelle d'entreprise
// en Algérie" post.
//  controle(): four emails as four lanes (free address, own domain without
//              settings, own domain configured, a fraudster imitating the
//              domain). Each lane shows the sender, the three checks the
//              receiving server runs (SPF, DKIM, DMARC) with a drawn mark, and
//              the verdict; lanes and checks appear in order; three tiles.
//  adresses(): the address plan of a 30-person company (named mailboxes, shared
//              mailboxes, lists and aliases) next to the four DNS records of the
//              domain written as they are published, and DMARC in three stages;
//              three tiles.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
const I = (x) => `⁦${x}⁩`;
const TINT = 'rgba(242,181,68,0.06)';

function box(c, css, P, id, at, x, y, w, h, t, accent) {
  let s = `<g style="animation:${show(css, P, id, at)}">` + rect(c, x, y, w, h, { stroke: accent ? C.accent : C.line2, fill: accent ? TINT : C.fill })
    + text(c, x + 12, y + 20, t.title, { size: 10.5, fill: accent ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, y + 34, t.sub, { size: 8, font: 'mono', fill: C.fg55 });
  (t.rows || []).forEach((r, i) => { const yy = y + 54 + i * 18; s += text(c, x + 12, yy, r.l, { size: 9, font: r.mono ? 'mono' : 'sans', fill: C.fg70 }) + text(c, x + w - 12, yy, r.v, { size: 9, font: 'mono', fill: r.hot ? C.accent : C.fg, anchor: 'end', weight: r.hot ? 500 : 400 }); });
  return s + '</g>';
}
function tiles(c, css, P, ky, ts, at0) {
  let s = '';
  ts.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, at0 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? TINT : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  return s;
}
const motionOff = (P) => `@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"]{animation:none !important}}`;
// a drawn mark: ok (check), no (cross), na (dash)
function mark(c, x, y, kind, color) {
  const m = c.X(x); // the shape itself is never mirrored: a check stays a check in RTL
  if (kind === 'ok') return `<path d="M ${m - 6} ${y} L ${m - 2} ${y + 4} L ${m + 6} ${y - 6}" fill="none" stroke="${color}" stroke-width="1.8"/>`;
  if (kind === 'no') return `<path d="M ${m - 5} ${y - 5} L ${m + 5} ${y + 5} M ${m + 5} ${y - 5} L ${m - 5} ${y + 5}" fill="none" stroke="${color}" stroke-width="1.8"/>`;
  return `<path d="M ${m - 6} ${y} L ${m + 6} ${y}" fill="none" stroke="${color}" stroke-width="1.8"/>`;
}

export function controle(t, rtl) {
  const c = ctx(rtl); const P = 'mc'; const css = []; const H = 700;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'cl', 3)}">` + [[80, 0], [430, 1], [890, 2]].map(([x, i]) => text(c, x, 148, t.cols[i], { size: 9, font: 'mono', fill: C.fg35, letter: 1.2, upper: true })).join('') + '</g>';
  const ly = 158, lh = 84, lg = 12;
  t.lanes.forEach((ln, i) => {
    const y = ly + i * (lh + lg); const at = 4 + i * 8.5; const hot = ln.hot;
    s += `<g style="animation:${show(css, P, `s${i}`, at)}">` + rect(c, 80, y, 330, lh, { stroke: hot ? C.accent : C.line2, fill: hot ? TINT : C.fill })
      + text(c, 92, y + 22, ln.title, { size: 10.5, fill: hot ? C.accent : C.fg, weight: 500 }) + text(c, 92, y + 42, I(ln.addr), { size: 9, font: 'mono', fill: C.fg })
      + text(c, 92, y + 62, ln.note, { size: 8.5, fill: C.fg55 }) + line(c, 410, y + lh / 2, 430, y + lh / 2, { stroke: C.line2 }) + '</g>';
    ln.checks.forEach((ck, j) => {
      const x = 430 + j * 150; const col = ck.k === 'ok' ? C.fg : ck.k === 'no' ? C.accent : C.fg35;
      s += `<g style="animation:${show(css, P, `c${i}${j}`, at + 1.5 + j * 1.5)}">` + rect(c, x, y + 10, 140, lh - 20, { stroke: ck.k === 'no' ? C.accent : C.line2, fill: 'none' })
        + text(c, x + 10, y + 31, t.names[j], { size: 9.5, font: 'mono', fill: C.fg, weight: 500 }) + mark(c, x + 122, y + 28, ck.k, col)
        + text(c, x + 10, y + 53, ck.r, { size: 7.5, font: 'mono', fill: ck.k === 'no' ? C.accent : C.fg55 }) + (j < 2 ? '' : line(c, x + 140, y + lh / 2, 890, y + lh / 2, { stroke: C.line2 })) + '</g>';
    });
    const v = ln.verdict;
    s += `<g style="animation:${show(css, P, `v${i}`, at + 6.5)}">` + rect(c, 890, y, 230, lh, { stroke: v.strong ? C.fg : v.hot ? C.accent : C.line2, fill: v.hot ? TINT : C.fill, sw: v.strong ? 1.6 : 1 })
      + text(c, 902, y + 24, v.title, { size: 11, fill: v.hot ? C.accent : C.fg, weight: 500 }) + text(c, 902, y + 45, v.l1, { size: 8.5, font: 'mono', fill: C.fg55 }) + text(c, 902, y + 60, v.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>';
  });
  const ky = ly + 4 * (lh + lg) + 4;
  s += tiles(c, css, P, ky, t.tiles, 42);
  s += text(c, 80, ky + 86, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export function adresses(t, rtl) {
  const c = ctx(rtl); const P = 'ma'; const css = []; const H = 752;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  // left: the address plan
  let gy = 150;
  t.groups.forEach((gp, i) => { const h = 54 + gp.rows.length * 18 + 6; s += box(c, css, P, `g${i}`, 4 + i * 5, 80, gy, 540, h, gp, false); gy += h + 10; });
  // right: the four DNS records
  const rx = 650, rw = 470, ry = 150, rh = 48 + t.records.length * 62;
  s += `<g style="animation:${show(css, P, 'dn', 20)}">` + rect(c, rx, ry, rw, rh, { stroke: C.line2, fill: C.fill }) + text(c, rx + 12, ry + 20, t.dns.title, { size: 10.5, fill: C.fg, weight: 500 }) + text(c, rx + 12, ry + 34, t.dns.sub, { size: 8, font: 'mono', fill: C.fg55 }) + '</g>';
  t.records.forEach((r, i) => {
    const y0 = ry + 48 + i * 62;
    s += `<g style="animation:${show(css, P, `r${i}`, 22 + i * 3)}">` + line(c, rx + 12, y0, rx + rw - 12, y0, { stroke: C.line })
      + text(c, rx + 12, y0 + 22, r.name, { size: 10.5, font: 'mono', fill: r.hot ? C.accent : C.fg, weight: 500 }) + text(c, rx + 78, y0 + 22, I(r.value), { size: 9, font: 'mono', fill: r.hot ? C.accent : C.fg })
      + text(c, rx + 12, y0 + 42, r.exp, { size: 9, fill: C.fg70 }) + '</g>';
  });
  // DMARC in three stages
  const dy = ry + rh + 10; const dh = 116; const sw = (rw - 24 - 16) / 3;
  s += `<g style="animation:${show(css, P, 'dm', 36)}">` + rect(c, rx, dy, rw, dh, { stroke: C.accent, fill: TINT }) + text(c, rx + 12, dy + 20, t.stages.title, { size: 10.5, fill: C.accent, weight: 500 }) + text(c, rx + 12, dy + 34, t.stages.sub, { size: 8, font: 'mono', fill: C.fg55 }) + '</g>';
  t.stages.items.forEach((st, i) => {
    const x = rx + 12 + i * (sw + 8);
    s += `<g style="animation:${show(css, P, `st${i}`, 38 + i * 2.5)}">` + rect(c, x, dy + 46, sw, 58, { stroke: st.hot ? C.accent : C.line2, fill: st.hot ? 'rgba(242,181,68,0.12)' : 'rgba(0,0,0,0.4)' })
      + text(c, x + 8, dy + 64, I(st.k), { size: 9.5, font: 'mono', fill: st.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 8, dy + 80, st.l, { size: 9, fill: C.fg70 }) + text(c, x + 8, dy + 94, st.s, { size: 7.5, font: 'mono', fill: C.fg55 }) + '</g>';
  });
  const ky = Math.max(gy, dy + dh + 10) + 6;
  s += tiles(c, css, P, ky, t.tiles, 46);
  s += text(c, 80, ky + 86, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

const D = 'votre-domaine.dz';
const REC = { mx: `${D} → mail`, spf: 'v=spf1 include:… -all', dkim: 'selecteur._domainkey → clé', dmarc: 'v=DMARC1; p=quarantine; rua=mailto:…' };

export const STRINGS = {
  fr: {
    controle: {
      title: 'Quatre e-mails, quatre sorts : ce que vérifie le serveur de votre client',
      alt: 'Quatre e-mails et les trois contrôles du serveur destinataire. Adresse gratuite : SPF et DKIM valides pour gmail.com, aucun lien avec votre domaine ; le message arrive, sans preuve qu’il vient de l’entreprise. Votre domaine sans réglages : pas de SPF, pas de signature DKIM, pas de consigne DMARC ; souvent en indésirables, et un fraudeur peut écrire en votre nom. Votre domaine réglé : SPF, DKIM et DMARC valides ; boîte de réception. Un fraudeur imite votre adresse : SPF et DKIM échouent, DMARC demande le rejet ; le faux message est rejeté.',
      header: 'Exemple construit · le même commercial, la même offre de prix · seul change ce que le domaine publie',
      cols: ['L’expéditeur', 'Les trois contrôles du serveur destinataire', 'Ce qui arrive au message'], names: ['SPF', 'DKIM', 'DMARC'],
      lanes: [
        { title: 'Adresse gratuite', addr: 'sofiane.entreprise@gmail.com', note: 'le commercial écrit à un client', checks: [{ k: 'ok', r: 'valide pour gmail.com' }, { k: 'ok', r: 'signé par gmail.com' }, { k: 'na', r: 'pas votre domaine' }], verdict: { title: 'Arrive, sans preuve', l1: 'le client lit « gmail.com » ;', l2: 'n’importe qui peut créer la même' } },
        { title: 'Votre domaine, sans réglages', addr: `sofiane@${D}`, note: 'boîte créée avec le site, rien de plus', hot: true, checks: [{ k: 'no', r: 'aucun enregistrement' }, { k: 'no', r: 'message non signé' }, { k: 'no', r: 'aucune consigne' }], verdict: { title: 'Souvent en indésirables', l1: 'et un fraudeur peut écrire', l2: 'en votre nom sans obstacle', hot: true } },
        { title: 'Votre domaine, réglé', addr: `sofiane@${D}`, note: 'trois enregistrements publiés dans le domaine', checks: [{ k: 'ok', r: 'serveur autorisé' }, { k: 'ok', r: 'signature valide' }, { k: 'ok', r: 'alignés sur le domaine' }], verdict: { title: 'Boîte de réception', l1: 'le serveur du client sait', l2: 'que le message vient de vous', strong: true } },
        { title: 'Un fraudeur imite votre adresse', addr: `comptabilite@${D}`, note: '« nouvelle facture, nouveau compte bancaire »', checks: [{ k: 'no', r: 'serveur non autorisé' }, { k: 'no', r: 'signature absente' }, { k: 'ok', r: 'consigne : rejeter' }], verdict: { title: 'Rejeté avant d’arriver', l1: 'le faux n’atteint pas votre client ;', l2: 'vous recevez le rapport', strong: true } },
      ],
      tiles: [
        { big: '3 enregistrements', l1: 'SPF, DKIM, DMARC, publiés une fois dans le domaine', l2: 'ils disent qui a le droit d’écrire en votre nom' },
        { big: 'Observer, puis rejeter', l1: 'DMARC commence en observation et finit en rejet', l2: 'quelques semaines de rapports entre les deux', hot: true },
        { big: '1 boîte par personne', l1: 'aucun mot de passe partagé, double vérification', l2: 'quand quelqu’un part, la boîte reste à l’entreprise' },
      ],
      rule: 'Une adresse à votre nom n’est pas une question de présentation : c’est la preuve, vérifiée par le serveur',
      rule2: 'de votre client, que le message vient de vous, et le refus de celui qui ne vient pas de vous.',
      note: 'Exemple construit · adresses et noms sont fictifs ; le classement final dépend aussi du contenu et du destinataire.',
    },
    adresses: {
      title: 'Le plan d’adresses de trente personnes, et les quatre lignes du domaine',
      alt: 'Plan d’adresses d’une entreprise de trente personnes : 30 boîtes nominatives (direction 3, commercial 8, comptabilité, achats et administration 10, dépôt et logistique 9), 5 boîtes partagées (contact, commandes, facturation, sav, recrutement), 4 listes et alias. À côté, les quatre enregistrements du domaine : MX, SPF, DKIM, DMARC, tels qu’ils sont publiés, et DMARC en trois temps : observer, mettre de côté, rejeter.',
      header: `Exemple construit · entreprise de 30 personnes · domaine ${I(D)} enregistré au nom de l’entreprise`,
      groups: [
        { title: '30 boîtes nominatives', sub: 'prenom.nom@ · une personne, un mot de passe, une double vérification', rows: [{ l: 'Direction', v: '3' }, { l: 'Commercial', v: '8' }, { l: 'Comptabilité, achats, administration', v: '10' }, { l: 'Dépôt et logistique', v: '9' }] },
        { title: '5 boîtes partagées', sub: 'lues par un service ; chacun y entre avec son propre compte', rows: [{ l: 'contact@', v: 'accueil', mono: true }, { l: 'commandes@', v: 'commercial', mono: true }, { l: 'facturation@', v: 'comptabilité', mono: true }, { l: 'sav@', v: 'service après-vente', mono: true }, { l: 'recrutement@', v: 'administration', mono: true }] },
        { title: '4 listes et alias', sub: 'une adresse qui distribue, pas une boîte de plus', rows: [{ l: 'direction@', v: '3 personnes', mono: true }, { l: 'commerciaux@', v: '8 personnes', mono: true }, { l: 'tous@', v: '30 personnes · réservée à la direction', mono: true }, { l: 's.benali@', v: 'alias de sofiane.benali@', mono: true }] },
      ],
      dns: { title: 'Les quatre enregistrements du domaine', sub: 'publiés une fois dans la zone DNS, lus par tous les serveurs' },
      records: [
        { name: 'MX', value: REC.mx, exp: 'où livrer le courrier qui vous est adressé' },
        { name: 'SPF', value: REC.spf, exp: 'quels serveurs ont le droit d’envoyer en votre nom' },
        { name: 'DKIM', value: REC.dkim, exp: 'la signature que votre serveur appose sur chaque message' },
        { name: 'DMARC', value: REC.dmarc, exp: 'que faire d’un message qui échoue, et où envoyer les rapports', hot: true },
      ],
      stages: { title: 'DMARC en trois temps', sub: 'on observe avant de bloquer', items: [{ k: 'p=none', l: 'observer', s: 'rapports, rien n’est bloqué' }, { k: 'p=quarantine', l: 'mettre de côté', s: 'échecs en indésirables' }, { k: 'p=reject', l: 'rejeter', s: 'le faux n’arrive plus', hot: true }] },
      tiles: [
        { big: '39 adresses, 30 comptes', l1: 'seules les boîtes nominatives sont des comptes', l2: 'boîtes partagées, listes, alias : selon le service choisi' },
        { big: '4 lignes dans le domaine', l1: 'MX, SPF, DKIM, DMARC', l2: 'le domaine est au nom de l’entreprise, pas d’un tiers', hot: true },
        { big: '0 mot de passe partagé', l1: 'une boîte partagée s’ouvre avec le compte de chacun', l2: 'on sait qui a répondu ; un accès se retire seul' },
      ],
      rule: 'Le plan d’adresses se dessine avant d’acheter quoi que ce soit : qui a une boîte, quelles adresses',
      rule2: 'appartiennent à un service et non à une personne, et quatre lignes dans le domaine.',
      note: 'Exemple construit · noms, effectifs et valeurs des enregistrements sont ceux de l’exemple.',
    },
  },
  en: {
    controle: {
      title: 'Four emails, four fates: what your customer’s mail server checks',
      alt: 'Four emails and the three checks of the receiving server. Free address: SPF and DKIM valid for gmail.com, no link with your domain; the message arrives, with no proof it comes from the company. Your domain without settings: no SPF, no DKIM signature, no DMARC instruction; often in spam, and a fraudster can write in your name. Your domain configured: SPF, DKIM and DMARC valid; inbox. A fraudster imitates your address: SPF and DKIM fail, DMARC asks for rejection; the fake message is rejected.',
      header: 'Constructed example · the same salesperson, the same quotation · only what the domain publishes changes',
      cols: ['The sender', 'The three checks of the receiving server', 'What happens to the message'], names: ['SPF', 'DKIM', 'DMARC'],
      lanes: [
        { title: 'Free address', addr: 'sofiane.company@gmail.com', note: 'the salesperson writes to a customer', checks: [{ k: 'ok', r: 'valid for gmail.com' }, { k: 'ok', r: 'signed by gmail.com' }, { k: 'na', r: 'not your domain' }], verdict: { title: 'Arrives, without proof', l1: 'the customer reads “gmail.com”;', l2: 'anyone can create the same one' } },
        { title: 'Your domain, no settings', addr: `sofiane@${D}`, note: 'mailbox created with the website, nothing more', hot: true, checks: [{ k: 'no', r: 'no record' }, { k: 'no', r: 'message not signed' }, { k: 'no', r: 'no instruction' }], verdict: { title: 'Often in spam', l1: 'and a fraudster can write', l2: 'in your name unhindered', hot: true } },
        { title: 'Your domain, configured', addr: `sofiane@${D}`, note: 'three records published in the domain', checks: [{ k: 'ok', r: 'server authorised' }, { k: 'ok', r: 'signature valid' }, { k: 'ok', r: 'aligned with the domain' }], verdict: { title: 'Inbox', l1: 'the customer’s server knows', l2: 'the message comes from you', strong: true } },
        { title: 'A fraudster imitates your address', addr: `accounting@${D}`, note: '“new invoice, new bank account”', checks: [{ k: 'no', r: 'server not authorised' }, { k: 'no', r: 'no signature' }, { k: 'ok', r: 'instruction: reject' }], verdict: { title: 'Rejected before arriving', l1: 'the fake never reaches your customer;', l2: 'you receive the report', strong: true } },
      ],
      tiles: [
        { big: '3 records', l1: 'SPF, DKIM, DMARC, published once in the domain', l2: 'they say who is allowed to write in your name' },
        { big: 'Observe, then reject', l1: 'DMARC starts in observation and ends in rejection', l2: 'a few weeks of reports between the two', hot: true },
        { big: '1 mailbox per person', l1: 'no shared password, two-step sign-in', l2: 'when someone leaves, the mailbox stays with the company' },
      ],
      rule: 'An address in your name is not a matter of presentation: it is the proof, checked by your customer’s',
      rule2: 'server, that the message comes from you, and the refusal of the one that does not.',
      note: 'Constructed example · addresses and names are fictitious; final filtering also depends on content and recipient.',
    },
    adresses: {
      title: 'The address plan for thirty people, and the four lines of the domain',
      alt: 'Address plan of a thirty-person company: 30 named mailboxes (management 3, sales 8, accounting, purchasing and administration 10, warehouse and logistics 9), 5 shared mailboxes (contact, orders, billing, support, recruitment), 4 lists and aliases. Beside it, the four records of the domain: MX, SPF, DKIM, DMARC, as published, and DMARC in three stages: observe, set aside, reject.',
      header: `Constructed example · 30-person company · domain ${I(D)} registered in the company’s name`,
      groups: [
        { title: '30 named mailboxes', sub: 'first.last@ · one person, one password, two-step sign-in', rows: [{ l: 'Management', v: '3' }, { l: 'Sales', v: '8' }, { l: 'Accounting, purchasing, administration', v: '10' }, { l: 'Warehouse and logistics', v: '9' }] },
        { title: '5 shared mailboxes', sub: 'read by a department; each person enters with their own account', rows: [{ l: 'contact@', v: 'reception', mono: true }, { l: 'commandes@', v: 'sales', mono: true }, { l: 'facturation@', v: 'accounting', mono: true }, { l: 'sav@', v: 'after-sales', mono: true }, { l: 'recrutement@', v: 'administration', mono: true }] },
        { title: '4 lists and aliases', sub: 'an address that distributes, not one more mailbox', rows: [{ l: 'direction@', v: '3 people', mono: true }, { l: 'commerciaux@', v: '8 people', mono: true }, { l: 'tous@', v: '30 people · reserved for management', mono: true }, { l: 's.benali@', v: 'alias of sofiane.benali@', mono: true }] },
      ],
      dns: { title: 'The four records of the domain', sub: 'published once in the DNS zone, read by every server' },
      records: [
        { name: 'MX', value: REC.mx, exp: 'where to deliver the mail addressed to you' },
        { name: 'SPF', value: REC.spf, exp: 'which servers are allowed to send in your name' },
        { name: 'DKIM', value: 'selector._domainkey → key', exp: 'the signature your server puts on every message' },
        { name: 'DMARC', value: REC.dmarc, exp: 'what to do with a message that fails, and where to send reports', hot: true },
      ],
      stages: { title: 'DMARC in three stages', sub: 'observe before blocking', items: [{ k: 'p=none', l: 'observe', s: 'reports, nothing blocked' }, { k: 'p=quarantine', l: 'set aside', s: 'failures go to spam' }, { k: 'p=reject', l: 'reject', s: 'the fake no longer arrives', hot: true }] },
      tiles: [
        { big: '39 addresses, 30 accounts', l1: 'only named mailboxes are accounts', l2: 'shared mailboxes, lists, aliases: depends on the service' },
        { big: '4 lines in the domain', l1: 'MX, SPF, DKIM, DMARC', l2: 'the domain is in the company’s name, not a third party’s', hot: true },
        { big: '0 shared passwords', l1: 'a shared mailbox opens with each person’s own account', l2: 'you know who replied; one access can be removed alone' },
      ],
      rule: 'The address plan is drawn before buying anything: who gets a mailbox, which addresses',
      rule2: 'belong to a department and not to a person, and four lines in the domain.',
      note: 'Constructed example · names, headcounts and record values belong to the example.',
    },
  },
  ar: {
    controle: {
      title: 'أربع رسائل وأربعة مصائر: ما يتحقق منه خادم زبونكم',
      alt: 'أربع رسائل والفحوص الثلاثة لخادم المستقبِل. عنوان مجاني: SPF وDKIM صالحان لـ gmail.com ولا علاقة بنطاقكم؛ الرسالة تصل دون دليل على أنها من المؤسسة. نطاقكم دون إعدادات: لا SPF ولا توقيع DKIM ولا تعليمة DMARC؛ غالباً في البريد غير المرغوب، ويستطيع محتال الكتابة باسمكم. نطاقكم مضبوطاً: SPF وDKIM وDMARC صالحة؛ علبة الوارد. محتال يقلّد عنوانكم: SPF وDKIM يفشلان وDMARC يطلب الرفض؛ الرسالة المزيفة تُرفض.',
      header: 'مثال مركَّب · البائع نفسه وعرض السعر نفسه · لا يتغير إلا ما ينشره النطاق',
      cols: ['المرسِل', 'الفحوص الثلاثة لخادم المستقبِل', 'ما يحدث للرسالة'], names: ['SPF', 'DKIM', 'DMARC'],
      lanes: [
        { title: 'عنوان مجاني', addr: 'sofiane.entreprise@gmail.com', note: 'البائع يكتب إلى زبون', checks: [{ k: 'ok', r: `صالح لـ ${I('gmail.com')}` }, { k: 'ok', r: `موقَّع من ${I('gmail.com')}` }, { k: 'na', r: 'ليس نطاقكم' }], verdict: { title: 'تصل، دون دليل', l1: `الزبون يقرأ «${I('gmail.com')}»؛`, l2: 'وأي شخص يستطيع إنشاء مثله' } },
        { title: 'نطاقكم، دون إعدادات', addr: `sofiane@${D}`, note: 'علبة أُنشئت مع الموقع، لا أكثر', hot: true, checks: [{ k: 'no', r: 'لا يوجد أي تسجيل' }, { k: 'no', r: 'الرسالة غير موقَّعة' }, { k: 'no', r: 'لا توجد تعليمة' }], verdict: { title: 'غالباً في غير المرغوب', l1: 'ويستطيع محتال أن يكتب', l2: 'باسمكم دون عائق', hot: true } },
        { title: 'نطاقكم، مضبوطاً', addr: `sofiane@${D}`, note: 'ثلاثة تسجيلات منشورة في النطاق', checks: [{ k: 'ok', r: 'الخادم مرخَّص' }, { k: 'ok', r: 'التوقيع صالح' }, { k: 'ok', r: 'متوافقة مع النطاق' }], verdict: { title: 'علبة الوارد', l1: 'خادم الزبون يعرف', l2: 'أن الرسالة منكم', strong: true } },
        { title: 'محتال يقلّد عنوانكم', addr: `comptabilite@${D}`, note: '«فاتورة جديدة، حساب بنكي جديد»', checks: [{ k: 'no', r: 'الخادم غير مرخَّص' }, { k: 'no', r: 'التوقيع غائب' }, { k: 'ok', r: 'التعليمة: الرفض' }], verdict: { title: 'تُرفض قبل أن تصل', l1: 'المزيَّفة لا تبلغ زبونكم؛', l2: 'وأنتم تتلقون التقرير', strong: true } },
      ],
      tiles: [
        { big: '3 تسجيلات', l1: `${I('SPF')} و${I('DKIM')} و${I('DMARC')}، تُنشر مرة واحدة في النطاق`, l2: 'تقول من له الحق في الكتابة باسمكم' },
        { big: 'المراقبة ثم الرفض', l1: `${I('DMARC')} يبدأ بالمراقبة وينتهي بالرفض`, l2: 'بضعة أسابيع من التقارير بين الاثنين', hot: true },
        { big: 'علبة لكل شخص', l1: 'لا كلمة مرور مشتركة، وتحقق بخطوتين', l2: 'حين يغادر أحد تبقى العلبة للمؤسسة' },
      ],
      rule: 'العنوان الذي يحمل اسمكم ليس مسألة مظهر: هو الدليل، الذي يتحقق منه خادم زبونكم،',
      rule2: 'على أن الرسالة منكم، ورفضُ الرسالة التي ليست منكم.',
      note: 'مثال مركَّب · العناوين والأسماء وهمية؛ والتصنيف النهائي يتوقف أيضاً على المحتوى والمستقبِل.',
    },
    adresses: {
      title: 'مخطط عناوين ثلاثين شخصاً، والسطور الأربعة للنطاق',
      alt: 'مخطط عناوين مؤسسة من ثلاثين شخصاً: 30 علبة اسمية (المديرية 3، التجاري 8، المحاسبة والمشتريات والإدارة 10، المستودع واللوجستيك 9)، 5 علب مشتركة (contact، commandes، facturation، sav، recrutement)، 4 قوائم وأسماء بديلة. وبجانبه التسجيلات الأربعة للنطاق: MX وSPF وDKIM وDMARC كما تُنشر، وDMARC في ثلاث مراحل: المراقبة، الوضع جانباً، الرفض.',
      header: `مثال مركَّب · مؤسسة من 30 شخصاً · النطاق ${I(D)} مسجَّل باسم المؤسسة`,
      groups: [
        { title: '30 علبة اسمية', sub: `${I('prenom.nom@')} · شخص واحد، كلمة مرور واحدة، تحقق بخطوتين`, rows: [{ l: 'المديرية', v: '3' }, { l: 'التجاري', v: '8' }, { l: 'المحاسبة، المشتريات، الإدارة', v: '10' }, { l: 'المستودع واللوجستيك', v: '9' }] },
        { title: '5 علب مشتركة', sub: 'تقرؤها مصلحة؛ وكل واحد يدخلها بحسابه الخاص', rows: [{ l: I('contact@'), v: 'الاستقبال' }, { l: I('commandes@'), v: 'التجاري' }, { l: I('facturation@'), v: 'المحاسبة' }, { l: I('sav@'), v: 'خدمة ما بعد البيع' }, { l: I('recrutement@'), v: 'الإدارة' }] },
        { title: '4 قوائم وأسماء بديلة', sub: 'عنوان يوزّع، لا علبة إضافية', rows: [{ l: I('direction@'), v: '3 أشخاص' }, { l: I('commerciaux@'), v: '8 أشخاص' }, { l: I('tous@'), v: '30 شخصاً · محجوزة للمديرية' }, { l: I('s.benali@'), v: `اسم بديل لـ ${I('sofiane.benali@')}` }] },
      ],
      dns: { title: 'التسجيلات الأربعة للنطاق', sub: 'تُنشر مرة واحدة في منطقة أسماء النطاق، وتقرؤها كل الخوادم' },
      records: [
        { name: 'MX', value: REC.mx, exp: 'أين يُسلَّم البريد الموجَّه إليكم' },
        { name: 'SPF', value: REC.spf, exp: 'أي الخوادم لها الحق في الإرسال باسمكم' },
        { name: 'DKIM', value: 'selector._domainkey → key', exp: 'التوقيع الذي يضعه خادمكم على كل رسالة' },
        { name: 'DMARC', value: REC.dmarc, exp: 'ما يُفعل برسالة تفشل، وأين تُرسل التقارير', hot: true },
      ],
      stages: { title: `${I('DMARC')} في ثلاث مراحل`, sub: 'نراقب قبل أن نحجب', items: [{ k: 'p=none', l: 'المراقبة', s: 'تقارير، ولا شيء يُحجب' }, { k: 'p=quarantine', l: 'الوضع جانباً', s: 'الفاشلة إلى غير المرغوب' }, { k: 'p=reject', l: 'الرفض', s: 'المزيَّفة لا تصل', hot: true }] },
      tiles: [
        { big: '39 عنواناً، 30 حساباً', l1: 'العلب الاسمية وحدها حسابات', l2: 'العلب المشتركة والقوائم والأسماء البديلة: حسب الخدمة' },
        { big: '4 سطور في النطاق', l1: I('MX, SPF, DKIM, DMARC'), l2: 'النطاق باسم المؤسسة، لا باسم طرف آخر', hot: true },
        { big: '0 كلمة مرور مشتركة', l1: 'العلبة المشتركة تُفتح بحساب كل واحد', l2: 'نعرف من أجاب؛ ويُسحب وصول واحد وحده' },
      ],
      rule: 'مخطط العناوين يُرسم قبل شراء أي شيء: من له علبة، وأي العناوين',
      rule2: 'ملك لمصلحة لا لشخص، وأربعة سطور في النطاق.',
      note: 'مثال مركَّب · الأسماء والأعداد وقيم التسجيلات خاصة بالمثال.',
    },
  },
};
