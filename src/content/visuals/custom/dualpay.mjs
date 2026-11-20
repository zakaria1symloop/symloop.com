// Bespoke animated figures for the 2027 "the customer in France wants to pay in euros" post.
//  paths():  two customers, two payment paths, one order: the Paris customer
//            pays in euros through a foreign provider on an entity abroad
//            (3-D Secure, webhook), the Algiers customer pays in dinars through
//            the local provider (webhook); both webhooks land on the same
//            handler and the same order record, which holds the catalogue
//            price, the displayed euro price, the frozen reference rate and
//            the channel.
//  ledger(): the end-of-day reconciliation in two currencies: one row per
//            order with channel, customer amount, frozen rate, dinar
//            equivalent, provider fee, expected net, expected payout date and
//            reconciliation status; totals per channel; one refund row.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function mover(css, P, id, path, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{offset-distance:0%;opacity:0}${(at + 0.4).toFixed(1)}%{opacity:1}${(at + dur - 0.4).toFixed(1)}%{opacity:1}${(at + dur).toFixed(1)}%,100%{offset-distance:100%;opacity:0}}`); return `<circle r="4" fill="${C.accent}" opacity="0" style="offset-path:path('${path}');animation:${P}-${id} ${LOOP}s linear infinite"/>`; }
const I = (x) => `⁦${x}⁩`;

function card(c, x, y, w, h, title, lines, o = {}) {
  const { hot = false, dash = '' } = o;
  let s = rect(c, x, y, w, h, { stroke: hot ? C.accent : C.line2, fill: hot ? 'rgba(242,181,68,0.06)' : C.fill, dash });
  s += text(c, x + 10, y + 18, title, { size: 11.5, fill: hot ? C.accent : C.fg });
  lines.forEach((l, i) => { s += text(c, x + 10, y + 34 + i * 13, l, { size: 9.5, font: 'mono', fill: C.fg55 }); });
  return s;
}

export function paths(t, rtl) {
  const c = ctx(rtl); const P = 'dp'; const css = []; const H = 600;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  const rows = { top: 104, bot: 300 }; const cw = 190, ch = 74; const xs = [80, 300, 520, 740];
  // two lanes
  ['top', 'bot'].forEach((k, li) => {
    const lane = t.lanes[li]; const y = rows[k];
    s += text(c, 80, y - 10, lane.name, { size: 10, font: 'mono', fill: C.accent, letter: 1.5, upper: true });
    lane.cards.forEach((cd, i) => {
      const at = 3 + li * 2 + i * 6;
      s += `<g style="animation:${show(css, P, `${k}${i}`, at)}">` + card(c, xs[i], y, cw, ch, cd.title, cd.lines, { hot: cd.hot }) + '</g>';
      if (i < lane.cards.length - 1) { const x1 = xs[i] + cw, x2 = xs[i + 1], ym = y + ch / 2; s += line(c, x1, ym, x2, ym, { stroke: C.line2 }); s += mover(css, P, `m${k}${i}`, `M${c.X(x1)} ${ym} L${c.X(x2)} ${ym}`, at + 4, 2.5); }
    });
    // converge line from last card to order box
    const x1 = xs[3] + cw, y1 = y + ch / 2; const x2 = 960, y2 = 232;
    const path = `M${c.X(x1)} ${y1} C ${c.X(x1 + 20)} ${y1}, ${c.X(x2 - 20)} ${y2}, ${c.X(x2)} ${y2}`;
    s += `<g style="animation:${show(css, P, `cv${li}`, 28 + li * 2)}"><path d="${path}" fill="none" stroke="${C.accent}" stroke-width="1"/></g>`;
    s += mover(css, P, `mc${li}`, path, 30 + li * 2, 3);
  });
  // order record box (right)
  const ox = 960, ow = 160, oy = 104, oh = 270;
  s += `<g style="animation:${show(css, P, 'ord', 20)}">` + rect(c, ox, oy, ow, oh, { stroke: C.accent, fill: 'rgba(242,181,68,0.06)' }) + text(c, ox + 10, oy + 20, t.order.title, { size: 11.5, fill: C.accent }) + text(c, ox + 10, oy + 34, t.order.id, { size: 9, font: 'mono', fill: C.fg55 });
  t.order.fields.forEach((f, i) => { const yy = oy + 56 + i * 30; s += text(c, ox + 10, yy, f.k, { size: 8.5, font: 'mono', fill: C.fg35, letter: 0.8, upper: true }) + text(c, ox + 10, yy + 13, f.v, { size: 10, font: 'mono', fill: f.hot ? C.accent : C.fg }); });
  s += '</g>';
  // handler note
  s += `<g style="animation:${show(css, P, 'hd', 34)}">` + rect(c, 80, 400, 1040, 44, { stroke: C.accent, fill: 'rgba(242,181,68,0.05)' }) + text(c, 96, 419, t.handlerTitle, { size: 12, fill: C.fg }) + text(c, 96, 436, t.handlerBody, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  // caveat note
  s += `<g style="animation:${show(css, P, 'cv', 40)}">` + rect(c, 80, 456, 1040, 44, { stroke: C.fg55, fill: C.fill, dash: '4 3' }) + text(c, 96, 475, t.caveatTitle, { size: 12, fill: C.fg }) + text(c, 96, 492, t.caveatBody, { size: 10, font: 'mono', fill: C.fg70 }) + '</g>';
  s += text(c, 80, 536, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, 556, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, 580, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"],svg circle[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

export function ledger(t, rtl) {
  const c = ctx(rtl); const P = 'lg'; const css = []; const H = 584;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  const cols = t.cols; // [{label, x, w, align}]
  const hy = 104;
  cols.forEach((col) => { s += text(c, col.align === 'end' ? col.x + col.w : col.x, hy, col.label, { size: 9.5, font: 'mono', fill: C.fg35, letter: 0.8, upper: true, anchor: col.align === 'end' ? 'end' : 'start' }); });
  s += line(c, 80, hy + 8, 1120, hy + 8, { stroke: C.line2 });
  t.rows.forEach((r, i) => {
    const y = hy + 32 + i * 30; const at = 4 + i * 5; const hot = r.hot; const bad = r.bad;
    s += `<g style="animation:${show(css, P, `r${i}`, at)}">` + line(c, 80, y + 12, 1120, y + 12, { stroke: C.line });
    r.cells.forEach((cell, k) => { const col = cols[k]; s += text(c, col.align === 'end' ? col.x + col.w : col.x, y, cell, { size: 10.5, font: 'mono', fill: k === 0 ? C.fg : hot && k === cols.length - 1 ? C.accent : bad && k === cols.length - 1 ? C.fg55 : C.fg70, anchor: col.align === 'end' ? 'end' : 'start' }); });
    s += '</g>';
  });
  // totals
  const ty = hy + 32 + t.rows.length * 30 + 20;
  t.totals.forEach((tt, i) => { const tx = 80 + i * 350; s += `<g style="animation:${show(css, P, `t${i}`, 50 + i * 5)}">` + rect(c, tx, ty, 330, 72, { stroke: tt.hot ? C.accent : C.line2, fill: tt.hot ? 'rgba(242,181,68,0.06)' : C.fill }) + text(c, tx + 12, ty + 20, tt.title, { size: 11.5, fill: tt.hot ? C.accent : C.fg }) + text(c, tx + 12, ty + 40, tt.l1, { size: 10, font: 'mono', fill: C.fg70 }) + text(c, tx + 12, ty + 56, tt.l2, { size: 10, font: 'mono', fill: C.fg55 }) + '</g>'; });
  s += text(c, 80, 528, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, 548, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, 572, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    paths: {
      title: 'Deux clients, deux chemins d’encaissement, une seule commande',
      alt: 'Deux couloirs. En haut, le client à Paris : il voit le prix en euros, 160 euros, paie par carte sur la page d’un prestataire étranger rattaché à une entité en France, son banque demande une authentification forte 3-D Secure, puis le prestataire envoie un webhook signé. En bas, le client à Alger : il voit le prix en dinars, 24 000 dinars, paie par carte CIB ou Edahabia sur la page du prestataire local, puis le prestataire envoie un webhook. Les deux webhooks arrivent sur le même traitement et sur la même fiche de commande, à droite, qui porte le prix catalogue en dinars, le prix affiché en euros, le taux de référence figé à la commande, 150 dinars pour un euro le 10 novembre à 10 h 02, le canal, les frais du prestataire et l’état payée. Un encadré rappelle que l’entité qui encaisse les euros et le régime des changes sont une question pour le comptable et le conseil, pas pour ce guide. Les montants et le taux sont un exemple construit.',
      lanes: [
        { name: 'Client à Paris · carte européenne', cards: [
          { title: 'Prix affiché', lines: ['160,00 € · depuis 24 000 DA', 'taux de référence figé', '150,0 DA/€ · 10/11 10:02'] },
          { title: 'Page de paiement EUR', lines: ['prestataire étranger', 'compte d’une entité en France', 'montant et devise fixés côté serveur'], hot: true },
          { title: '3-D Secure', lines: ['authentification forte', 'exigée par les banques', 'européennes (SCA)'] },
          { title: 'Webhook signé', lines: ['payé · 160,00 € · frais 2,49 €', 'identifiant du paiement', 'rejoué sans effet'] },
        ] },
        { name: 'Client à Alger · carte CIB ou Edahabia', cards: [
          { title: 'Prix affiché', lines: ['24 000 DA · prix catalogue', 'aucune conversion', 'TTC tel que vendu'] },
          { title: 'Page de paiement DZD', lines: ['prestataire local', 'compte de l’entreprise en Algérie', 'montant fixé côté serveur'], hot: true },
          { title: 'Code et confirmation', lines: ['parcours du prestataire local', 'retour navigateur ignoré', 'seul le webhook compte'] },
          { title: 'Webhook', lines: ['payé · 24 000 DA · frais selon contrat', 'identifiant du paiement', 'rejoué sans effet'] },
        ] },
      ],
      order: { title: 'Commande · une seule fiche', id: 'C-2027-0512', fields: [
        { k: 'prix catalogue', v: '24 000 DA' },
        { k: 'prix affiché', v: '160,00 € ou 24 000 DA' },
        { k: 'taux figé', v: '150,0 DA/€ · 10:02', hot: true },
        { k: 'canal', v: 'EUR étranger · ou DZD local' },
        { k: 'frais prestataire', v: 'enregistrés par canal' },
        { k: 'état', v: 'payée · même machine à états', hot: true },
        { k: 'remboursement', v: 'par le même canal' },
      ] },
      handlerTitle: 'Un seul traitement de webhook, deux prestataires', handlerBody: 'signature vérifiée · identifiant de paiement idempotent · montant et devise comparés à ceux de la commande · un seul passage à « payée » quel que soit le canal',
      caveatTitle: 'Ce que ce guide ne traite pas', caveatBody: 'quelle entité encaisse les euros, comment les fonds circulent entre pays et ce que dit le régime des changes : à régler avec le comptable et le conseil avant la première semaine',
      rule: 'Le client ne choisit pas une devise : il voit le prix dans la sienne, calculé depuis le prix catalogue en dinars avec un taux de référence figé au moment de la commande et conservé sur la fiche.',
      rule2: 'Deux prestataires, deux pages de paiement, deux webhooks, mais une seule commande, une seule machine à états et un seul traitement qui décide qu’elle est payée.',
      note: 'montants, frais et taux : exemple construit · les prestataires étrangers listent les pays où un compte peut être ouvert ; l’Algérie n’y figure pas aujourd’hui, la France oui',
    },
    ledger: {
      title: 'Le rapprochement du 10 novembre, en deux devises : attendu contre arrivé',
      alt: 'Un tableau de huit lignes : commande, canal, montant client, taux figé, équivalent en dinars, frais du prestataire, net attendu, versement attendu et statut du rapprochement. Cinq commandes en euros par le prestataire étranger, 160, 95, 240, 160 et 60 euros, avec des taux figés entre 149,8 et 150,2, des frais de 1,4 pour cent plus 25 centimes, un versement attendu le 17 novembre ; trois commandes en dinars par le prestataire local, 24 000, 8 500 et 15 000 dinars, frais selon contrat, versement attendu le 12 novembre ; et un remboursement de 60 euros par le même canal. En bas, deux totaux : canal euros, 655 euros encaissés, 60 euros remboursés, 10,17 euros de frais, 584,83 euros nets attendus le 17 ; canal dinars, 47 500 dinars encaissés, versement du 12 rapproché. Les montants sont un exemple construit.',
      cols: [
        { label: 'commande', x: 80, w: 90 }, { label: 'canal', x: 180, w: 110 }, { label: 'montant client', x: 300, w: 110, align: 'end' }, { label: 'taux figé', x: 420, w: 80, align: 'end' }, { label: 'équiv. DA', x: 510, w: 90, align: 'end' }, { label: 'frais', x: 610, w: 90, align: 'end' }, { label: 'net attendu', x: 710, w: 110, align: 'end' }, { label: 'versement', x: 830, w: 120, align: 'end' }, { label: 'rapproché', x: 960, w: 160, align: 'end' },
      ],
      rows: [
        { cells: ['C-0512', 'EUR · étranger', '160,00 €', '150,0', '24 000', '2,49 €', '157,51 €', '17/11', 'attendu'], hot: false },
        { cells: ['C-0513', 'DZD · local', '24 000 DA', '—', '24 000', 'contrat', '24 000 DA', '12/11', '✓ reçu 12/11'], hot: true },
        { cells: ['C-0514', 'EUR · étranger', '95,00 €', '149,8', '14 231', '1,58 €', '93,42 €', '17/11', 'attendu'] },
        { cells: ['C-0515', 'DZD · local', '8 500 DA', '—', '8 500', 'contrat', '8 500 DA', '12/11', '✓ reçu 12/11'], hot: true },
        { cells: ['C-0516', 'EUR · étranger', '240,00 €', '150,2', '36 048', '3,61 €', '236,39 €', '17/11', 'attendu'] },
        { cells: ['C-0517', 'DZD · local', '15 000 DA', '—', '15 000', 'contrat', '15 000 DA', '12/11', '✕ écart · à voir'], bad: true },
        { cells: ['C-0518', 'EUR · étranger', '160,00 €', '150,0', '24 000', '2,49 €', '157,51 €', '17/11', 'attendu'] },
        { cells: ['C-0509 · remb.', 'EUR · étranger', '−60,00 €', '150,1', '−9 006', '0 €', '−60,00 €', '17/11', 'même canal'] },
      ],
      totals: [
        { title: 'Canal euros · prestataire étranger', l1: '655,00 € encaissés − 60,00 € remboursés · frais 10,17 €', l2: 'net attendu 584,83 € · versement du 17/11 à rapprocher', hot: true },
        { title: 'Canal dinars · prestataire local', l1: '47 500 DA encaissés · versement du 12/11', l2: '2 lignes rapprochées · 1 écart à expliquer (C-0517)' },
        { title: 'Ce que le gérant lit', l1: 'un total par canal, dans sa devise · jamais additionnés', l2: 'l’équivalent en dinars sert au chiffre d’affaires, au taux figé' },
      ],
      rule: 'Chaque canal se rapproche dans sa devise, contre le versement de son prestataire ; l’équivalent en dinars, calculé au taux figé de chaque commande, sert au chiffre d’affaires et jamais au rapprochement.',
      rule2: 'Un remboursement repart par le canal d’origine, dans la devise d’origine, et ne touche pas le taux : le client récupère exactement ce qu’il a payé.',
      note: 'montants, frais et dates : exemple construit · les barèmes de frais et les délais de versement sont ceux de chaque prestataire',
    },
  },
  en: {
    paths: {
      title: 'Two customers, two payment paths, one order',
      alt: 'Two lanes. Top, the customer in Paris: they see the price in euros, 160 euros, pay by card on the page of a foreign provider attached to an entity in France, their bank asks for 3-D Secure strong authentication, then the provider sends a signed webhook. Bottom, the customer in Algiers: they see the price in dinars, 24,000 dinars, pay with a CIB or Edahabia card on the local provider’s page, then the provider sends a webhook. Both webhooks land on the same handler and the same order record, on the right, which holds the catalogue price in dinars, the displayed euro price, the reference rate frozen at order time, 150 dinars per euro on 10 November at 10:02, the channel, the provider fees and the paid state. A box recalls that which entity collects the euros and the foreign exchange regime are a question for the accountant and counsel, not for this guide. Amounts and rate are a constructed example.',
      lanes: [
        { name: 'Customer in Paris · European card', cards: [
          { title: 'Displayed price', lines: ['€160.00 · from 24,000 DA', 'frozen reference rate', '150.0 DA/€ · 10/11 10:02'] },
          { title: 'EUR payment page', lines: ['foreign provider', 'account of an entity in France', 'amount and currency set server side'], hot: true },
          { title: '3-D Secure', lines: ['strong authentication', 'required by European', 'banks (SCA)'] },
          { title: 'Signed webhook', lines: ['paid · €160.00 · fee €2.49', 'payment identifier', 'replayed without effect'] },
        ] },
        { name: 'Customer in Algiers · CIB or Edahabia card', cards: [
          { title: 'Displayed price', lines: ['24,000 DA · catalogue price', 'no conversion', 'as sold, tax included'] },
          { title: 'DZD payment page', lines: ['local provider', 'the company’s account in Algeria', 'amount set server side'], hot: true },
          { title: 'Code and confirmation', lines: ['local provider’s flow', 'browser return ignored', 'only the webhook counts'] },
          { title: 'Webhook', lines: ['paid · 24,000 DA · fee per contract', 'payment identifier', 'replayed without effect'] },
        ] },
      ],
      order: { title: 'Order · a single record', id: 'O-2027-0512', fields: [
        { k: 'catalogue price', v: '24,000 DA' },
        { k: 'displayed price', v: '€160.00 or 24,000 DA' },
        { k: 'frozen rate', v: '150.0 DA/€ · 10:02', hot: true },
        { k: 'channel', v: 'EUR foreign · or DZD local' },
        { k: 'provider fee', v: 'recorded per channel' },
        { k: 'state', v: 'paid · same state machine', hot: true },
        { k: 'refund', v: 'through the same channel' },
      ] },
      handlerTitle: 'One webhook handler, two providers', handlerBody: 'signature checked · idempotent payment identifier · amount and currency compared with the order’s · a single transition to “paid” whatever the channel',
      caveatTitle: 'What this guide does not cover', caveatBody: 'which entity collects the euros, how funds move between countries and what the foreign exchange regime says: settle with the accountant and counsel before the first week',
      rule: 'The customer does not choose a currency: they see the price in theirs, computed from the catalogue price in dinars with a reference rate frozen at order time and kept on the record.',
      rule2: 'Two providers, two payment pages, two webhooks, but one order, one state machine and one handler that decides it is paid.',
      note: 'amounts, fees and rate: constructed example · foreign providers list the countries where an account can be opened; Algeria is not on it today, France is',
    },
    ledger: {
      title: 'The 10 November reconciliation, in two currencies: expected against arrived',
      alt: 'A table of eight rows: order, channel, customer amount, frozen rate, dinar equivalent, provider fee, expected net, expected payout and reconciliation status. Five euro orders through the foreign provider, 160, 95, 240, 160 and 60 euros, with frozen rates between 149.8 and 150.2, fees of 1.4 percent plus 25 cents, payout expected 17 November; three dinar orders through the local provider, 24,000, 8,500 and 15,000 dinars, fee per contract, payout expected 12 November; and a 60 euro refund through the same channel. At the bottom, two totals: euro channel, 655 euros collected, 60 euros refunded, 10.17 euros of fees, 584.83 euros net expected on the 17th; dinar channel, 47,500 dinars collected, payout of the 12th reconciled. Amounts are a constructed example.',
      cols: [
        { label: 'order', x: 80, w: 90 }, { label: 'channel', x: 180, w: 110 }, { label: 'customer amount', x: 300, w: 110, align: 'end' }, { label: 'frozen rate', x: 420, w: 80, align: 'end' }, { label: 'DA equiv.', x: 510, w: 90, align: 'end' }, { label: 'fee', x: 610, w: 90, align: 'end' }, { label: 'expected net', x: 710, w: 110, align: 'end' }, { label: 'payout', x: 830, w: 120, align: 'end' }, { label: 'reconciled', x: 960, w: 160, align: 'end' },
      ],
      rows: [
        { cells: ['O-0512', 'EUR · foreign', '€160.00', '150.0', '24,000', '€2.49', '€157.51', '17/11', 'expected'] },
        { cells: ['O-0513', 'DZD · local', '24,000 DA', '—', '24,000', 'contract', '24,000 DA', '12/11', '✓ received 12/11'], hot: true },
        { cells: ['O-0514', 'EUR · foreign', '€95.00', '149.8', '14,231', '€1.58', '€93.42', '17/11', 'expected'] },
        { cells: ['O-0515', 'DZD · local', '8,500 DA', '—', '8,500', 'contract', '8,500 DA', '12/11', '✓ received 12/11'], hot: true },
        { cells: ['O-0516', 'EUR · foreign', '€240.00', '150.2', '36,048', '€3.61', '€236.39', '17/11', 'expected'] },
        { cells: ['O-0517', 'DZD · local', '15,000 DA', '—', '15,000', 'contract', '15,000 DA', '12/11', '✕ gap · to check'], bad: true },
        { cells: ['O-0518', 'EUR · foreign', '€160.00', '150.0', '24,000', '€2.49', '€157.51', '17/11', 'expected'] },
        { cells: ['O-0509 · refund', 'EUR · foreign', '−€60.00', '150.1', '−9,006', '€0', '−€60.00', '17/11', 'same channel'] },
      ],
      totals: [
        { title: 'Euro channel · foreign provider', l1: '€655.00 collected − €60.00 refunded · fees €10.17', l2: 'expected net €584.83 · payout of 17/11 to reconcile', hot: true },
        { title: 'Dinar channel · local provider', l1: '47,500 DA collected · payout of 12/11', l2: '2 rows reconciled · 1 gap to explain (O-0517)' },
        { title: 'What the manager reads', l1: 'one total per channel, in its currency · never added up', l2: 'the dinar equivalent serves revenue, at the frozen rate' },
      ],
      rule: 'Each channel reconciles in its own currency, against its provider’s payout; the dinar equivalent, computed at each order’s frozen rate, serves revenue and never reconciliation.',
      rule2: 'A refund goes back through the original channel, in the original currency, and does not touch the rate: the customer gets back exactly what they paid.',
      note: 'amounts, fees and dates: constructed example · fee schedules and payout delays are each provider’s',
    },
  },
  ar: {
    paths: {
      title: 'زبونان، مساران للتحصيل، طلبية واحدة',
      alt: 'ممران. في الأعلى الزبون في باريس: يرى السعر باليورو، 160 يورو، يدفع بالبطاقة على صفحة مزوّد أجنبي مرتبط بكيان في فرنسا، يطلب بنكه مصادقة قوية 3-D Secure، ثم يرسل المزوّد webhook موقَّعاً. في الأسفل الزبون في الجزائر: يرى السعر بالدينار، 24,000 دينار، يدفع ببطاقة CIB أو الذهبية على صفحة المزوّد المحلي، ثم يرسل المزوّد webhook. يصل الاثنان إلى المعالج نفسه وبطاقة الطلبية نفسها، على الجانب، التي تحمل سعر الكتالوج بالدينار والسعر المعروض باليورو وسعر الصرف المرجعي المجمَّد عند الطلب، 150 ديناراً لليورو يوم 10 نوفمبر عند 10:02، والقناة ورسوم المزوّد وحالة مدفوعة. وإطار يذكّر بأن الكيان الذي يحصّل اليورو ونظام الصرف مسألة للمحاسب والمستشار لا لهذا الدليل. والمبالغ والسعر مثال مبني.',
      lanes: [
        { name: 'الزبون في باريس · بطاقة أوروبية', cards: [
          { title: 'السعر المعروض', lines: [`${I('160.00 €')} · من ${I('24,000 DA')}`, 'سعر صرف مرجعي مجمَّد', `${I('150.0 DA/€')} · ${I('10/11 10:02')}`] },
          { title: 'صفحة دفع باليورو', lines: ['مزوّد أجنبي', 'حساب كيان في فرنسا', 'المبلغ والعملة من جهة الخادم'], hot: true },
          { title: '3-D Secure', lines: ['مصادقة قوية', 'تطلبها البنوك', 'الأوروبية (SCA)'] },
          { title: 'webhook موقَّع', lines: [`مدفوع · ${I('160.00 €')} · رسوم ${I('2.49 €')}`, 'معرّف الدفع', 'إعادته بلا أثر'] },
        ] },
        { name: 'الزبون في الجزائر · بطاقة CIB أو الذهبية', cards: [
          { title: 'السعر المعروض', lines: [`${I('24,000 DA')} · سعر الكتالوج`, 'لا تحويل', 'كما يُباع'] },
          { title: 'صفحة دفع بالدينار', lines: ['مزوّد محلي', 'حساب الشركة في الجزائر', 'المبلغ من جهة الخادم'], hot: true },
          { title: 'رمز وتأكيد', lines: ['مسار المزوّد المحلي', 'عودة المتصفح متجاهَلة', 'الـ webhook وحده يُعتدّ به'] },
          { title: 'webhook', lines: [`مدفوع · ${I('24,000 DA')} · رسوم حسب العقد`, 'معرّف الدفع', 'إعادته بلا أثر'] },
        ] },
      ],
      order: { title: 'الطلبية · بطاقة واحدة', id: I('C-2027-0512'), fields: [
        { k: 'سعر الكتالوج', v: I('24,000 DA') },
        { k: 'السعر المعروض', v: `${I('160.00 €')} أو ${I('24,000 DA')}` },
        { k: 'سعر مجمَّد', v: `${I('150.0 DA/€')} · ${I('10:02')}`, hot: true },
        { k: 'القناة', v: 'يورو أجنبي · أو دينار محلي' },
        { k: 'رسوم المزوّد', v: 'مسجَّلة لكل قناة' },
        { k: 'الحالة', v: 'مدفوعة · آلة الحالات نفسها', hot: true },
        { k: 'الاسترداد', v: 'عبر القناة نفسها' },
      ] },
      handlerTitle: 'معالج webhook واحد، مزوّدان', handlerBody: 'توقيع متحقَّق منه · معرّف دفع غير مكرِّر · مبلغ وعملة مقارنان بالطلبية · انتقال واحد إلى «مدفوعة» أياً كانت القناة',
      caveatTitle: 'ما لا يعالجه هذا الدليل', caveatBody: 'أي كيان يحصّل اليورو، وكيف تنتقل الأموال بين البلدين، وما يقوله نظام الصرف: يُحسم مع المحاسب والمستشار قبل الأسبوع الأول',
      rule: 'الزبون لا يختار عملة: يرى السعر بعملته محسوباً من سعر الكتالوج بالدينار بسعر صرف مرجعي مجمَّد عند الطلب ومحفوظ على البطاقة.',
      rule2: 'مزوّدان وصفحتا دفع وwebhook اثنان، لكن طلبية واحدة وآلة حالات واحدة ومعالج واحد يقرر أنها مدفوعة.',
      note: 'المبالغ والرسوم والسعر: مثال مبني · يدرج المزوّدون الأجانب البلدان التي يمكن فتح حساب فيها؛ الجزائر ليست فيها اليوم، وفرنسا نعم',
    },
    ledger: {
      title: 'مطابقة 10 نوفمبر بعملتين: المنتظر مقابل الواصل',
      alt: 'جدول من ثمانية أسطر: الطلبية، القناة، مبلغ الزبون، السعر المجمَّد، المكافئ بالدينار، رسوم المزوّد، الصافي المنتظر، الدفعة المنتظرة وحالة المطابقة. خمس طلبيات باليورو عبر المزوّد الأجنبي، 160 و95 و240 و160 و60 يورو، بأسعار مجمَّدة بين 149.8 و150.2، رسوم 1.4 بالمئة زائد 25 سنتاً، دفعة منتظرة يوم 17 نوفمبر؛ ثلاث طلبيات بالدينار عبر المزوّد المحلي، 24,000 و8,500 و15,000 دينار، رسوم حسب العقد، دفعة منتظرة يوم 12 نوفمبر؛ واسترداد 60 يورو عبر القناة نفسها. في الأسفل مجموعان: قناة اليورو، 655 يورو محصَّلة، 60 يورو مستردَّة، 10.17 يورو رسوم، 584.83 يورو صافٍ منتظر يوم 17؛ قناة الدينار، 47,500 دينار محصَّلة، دفعة 12 مطابَقة. والمبالغ مثال مبني.',
      cols: [
        { label: 'الطلبية', x: 80, w: 90 }, { label: 'القناة', x: 180, w: 110 }, { label: 'مبلغ الزبون', x: 300, w: 110, align: 'end' }, { label: 'سعر مجمَّد', x: 420, w: 80, align: 'end' }, { label: 'مكافئ DA', x: 510, w: 90, align: 'end' }, { label: 'رسوم', x: 610, w: 90, align: 'end' }, { label: 'صافٍ منتظر', x: 710, w: 110, align: 'end' }, { label: 'الدفعة', x: 830, w: 120, align: 'end' }, { label: 'مطابَق', x: 960, w: 160, align: 'end' },
      ],
      rows: [
        { cells: [I('C-0512'), 'يورو · أجنبي', I('160.00 €'), I('150.0'), I('24,000'), I('2.49 €'), I('157.51 €'), I('17/11'), 'منتظر'] },
        { cells: [I('C-0513'), 'دينار · محلي', I('24,000 DA'), '—', I('24,000'), 'عقد', I('24,000 DA'), I('12/11'), `✓ مستلَم ${I('12/11')}`], hot: true },
        { cells: [I('C-0514'), 'يورو · أجنبي', I('95.00 €'), I('149.8'), I('14,231'), I('1.58 €'), I('93.42 €'), I('17/11'), 'منتظر'] },
        { cells: [I('C-0515'), 'دينار · محلي', I('8,500 DA'), '—', I('8,500'), 'عقد', I('8,500 DA'), I('12/11'), `✓ مستلَم ${I('12/11')}`], hot: true },
        { cells: [I('C-0516'), 'يورو · أجنبي', I('240.00 €'), I('150.2'), I('36,048'), I('3.61 €'), I('236.39 €'), I('17/11'), 'منتظر'] },
        { cells: [I('C-0517'), 'دينار · محلي', I('15,000 DA'), '—', I('15,000'), 'عقد', I('15,000 DA'), I('12/11'), '✕ فارق · للمراجعة'], bad: true },
        { cells: [I('C-0518'), 'يورو · أجنبي', I('160.00 €'), I('150.0'), I('24,000'), I('2.49 €'), I('157.51 €'), I('17/11'), 'منتظر'] },
        { cells: [`${I('C-0509')} · استرداد`, 'يورو · أجنبي', I('−60.00 €'), I('150.1'), I('−9,006'), I('0 €'), I('−60.00 €'), I('17/11'), 'القناة نفسها'] },
      ],
      totals: [
        { title: 'قناة اليورو · مزوّد أجنبي', l1: `${I('655.00 €')} محصَّلة − ${I('60.00 €')} مستردَّة · رسوم ${I('10.17 €')}`, l2: `صافٍ منتظر ${I('584.83 €')} · دفعة ${I('17/11')} للمطابقة`, hot: true },
        { title: 'قناة الدينار · مزوّد محلي', l1: `${I('47,500 DA')} محصَّلة · دفعة ${I('12/11')}`, l2: `سطران مطابَقان · فارق واحد للتفسير (${I('C-0517')})` },
        { title: 'ما يقرؤه المسيّر', l1: 'مجموع لكل قناة بعملتها · لا يُجمعان أبداً', l2: 'المكافئ بالدينار لرقم الأعمال، بالسعر المجمَّد' },
      ],
      rule: 'كل قناة تُطابَق بعملتها مقابل دفعة مزوّدها؛ والمكافئ بالدينار المحسوب بالسعر المجمَّد لكل طلبية يخدم رقم الأعمال لا المطابقة أبداً.',
      rule2: 'الاسترداد يعود عبر القناة الأصلية بالعملة الأصلية ولا يمس السعر: يسترد الزبون بالضبط ما دفعه.',
      note: 'المبالغ والرسوم والتواريخ: مثال مبني · جداول الرسوم وآجال الدفع هي جداول كل مزوّد',
    },
  },
};
