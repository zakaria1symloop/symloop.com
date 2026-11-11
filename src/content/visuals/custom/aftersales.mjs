// Bespoke animated figures for the 2027 "the customer called three times" post.
//  ticket(): one complaint arriving through three channels in a day, matched
//            to the same customer and order and merged into one ticket; the
//            priority cell on a 3×3 impact × urgency grid; the state timeline
//            with timestamps and authors; two deadline bars, first response
//            and resolution, target against actual.
//  queue():  the after-sales board on a Tuesday morning: five state columns
//            with ticket cards (priority, age, owner), one breached card
//            escalated, and the week's five measures underneath.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function grow(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function pulse(css, P, id) { css.push(`@keyframes ${P}-${id}{0%,100%{opacity:1}50%{opacity:0.45}}`); return `${P}-${id} 2.4s ease-in-out infinite`; }
function mover(css, P, id, path, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{offset-distance:0%;opacity:0}${(at + 0.4).toFixed(1)}%{opacity:1}${(at + dur - 0.4).toFixed(1)}%{opacity:1}${(at + dur).toFixed(1)}%,100%{offset-distance:100%;opacity:0}}`); return `<circle r="4" fill="${C.accent}" opacity="0" style="offset-path:path('${path}');animation:${P}-${id} ${LOOP}s linear infinite"/>`; }
const I = (x) => `⁦${x}⁩`;

export function ticket(t, rtl) {
  const c = ctx(rtl); const P = 'tk'; const css = []; const H = 600;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  // left: three intakes
  const ix = 80, iw = 290;
  s += text(c, ix, 100, t.intakesLabel, { size: 10, font: 'mono', fill: C.fg35, letter: 1.5, upper: true });
  t.intakes.forEach((it, i) => {
    const y = 114 + i * 78; const at = 3 + i * 6;
    s += `<g style="animation:${show(css, P, `i${i}`, at)}">` + rect(c, ix, y, iw, 64, { stroke: C.line2, fill: C.fill }) + text(c, ix + 12, y + 18, it.channel, { size: 11, font: 'mono', fill: C.accent }) + text(c, ix + iw - 12, y + 18, it.time, { size: 10, font: 'mono', fill: C.fg55, anchor: 'end' }) + text(c, ix + 12, y + 37, it.text, { size: 11, fill: C.fg }) + text(c, ix + 12, y + 54, it.match, { size: 9.5, font: 'mono', fill: C.fg55 }) + '</g>';
    // converge line to ticket box
    const x1 = ix + iw, y1 = y + 32, x2 = 420, y2 = 190;
    const path = `M${c.X(x1)} ${y1} C ${c.X(x1 + 25)} ${y1}, ${c.X(x2 - 25)} ${y2}, ${c.X(x2)} ${y2}`;
    s += `<g style="animation:${show(css, P, `l${i}`, at + 2)}"><path d="${path}" fill="none" stroke="${C.line2}" stroke-width="1"/></g>`;
    s += mover(css, P, `m${i}`, path, at + 2, 3);
  });
  // ticket box
  const tx = 420, tw = 700, ty = 100;
  s += `<g style="animation:${show(css, P, 'tk', 10)}">` + rect(c, tx, ty, tw, 250, { stroke: C.accent, fill: 'rgba(242,181,68,0.05)' }) + text(c, tx + 16, ty + 24, t.ticketTitle, { size: 13, fill: C.accent }) + text(c, tx + tw - 16, ty + 24, t.ticketId, { size: 10.5, font: 'mono', fill: C.fg55, anchor: 'end' }) + text(c, tx + 16, ty + 44, t.ticketSub, { size: 10.5, font: 'mono', fill: C.fg70 }) + '</g>';
  // priority grid 3x3
  const gx = tx + 16, gy = ty + 64, cell = 26;
  s += `<g style="animation:${show(css, P, 'grid', 14)}">` + text(c, gx, gy - 6, t.gridLabel, { size: 9.5, font: 'mono', fill: C.fg35, letter: 1, upper: true });
  for (let r = 0; r < 3; r++) for (let k = 0; k < 3; k++) { const hot = r === t.grid.row && k === t.grid.col; s += rect(c, gx + k * cell, gy + r * cell, cell - 2, cell - 2, { stroke: hot ? C.accent : C.line, fill: hot ? C.accent : 'rgba(255,255,255,0.03)' }) + text(c, gx + k * cell + cell / 2 - 1, gy + r * cell + cell / 2 + 3, t.grid.labels[r][k], { size: 8.5, font: 'mono', fill: hot ? '#000' : C.fg35, anchor: 'middle' }); }
  s += text(c, gx + 3 * cell + 10, gy + 12, t.grid.impact, { size: 9.5, font: 'mono', fill: C.fg55 }) + text(c, gx + 3 * cell + 10, gy + 28, t.grid.urgency, { size: 9.5, font: 'mono', fill: C.fg55 }) + text(c, gx + 3 * cell + 10, gy + 46, t.grid.result, { size: 10.5, font: 'mono', fill: C.accent }) + text(c, gx + 3 * cell + 10, gy + 64, t.grid.targets, { size: 9.5, font: 'mono', fill: C.fg55 }) + '</g>';
  // state timeline inside ticket box
  const sx0 = tx + 16, sx1 = tx + tw - 16, sy = ty + 190; const n = t.states.length; const step = (sx1 - sx0) / (n - 1);
  s += line(c, sx0, sy, sx1, sy, { stroke: C.line2 });
  t.states.forEach((st, i) => {
    const x = sx0 + i * step; const at = 20 + i * 6; const hot = st.hot;
    s += `<g style="animation:${show(css, P, `s${i}`, at)}">` + circle(c, x, sy, 7, { fill: hot ? C.accent : '#000', stroke: hot ? C.accent : C.fg55, sw: 1.5 }) + text(c, x, sy - 14, st.name, { size: 10.5, fill: hot ? C.accent : C.fg, anchor: 'middle' }) + text(c, x, sy + 22, st.when, { size: 9, font: 'mono', fill: C.fg55, anchor: 'middle' }) + text(c, x, sy + 35, st.who, { size: 9, font: 'mono', fill: C.fg35, anchor: 'middle' }) + '</g>';
  });
  // SLA bars
  const by = 380;
  s += text(c, 80, by, t.slaLabel, { size: 10, font: 'mono', fill: C.fg35, letter: 1.5, upper: true });
  t.sla.forEach((b, i) => {
    const y = by + 16 + i * 52; const bw = 1040; const ratio = Math.min(1, b.actual / b.target); const ok = b.actual <= b.target;
    s += `<g style="animation:${show(css, P, `b${i}`, 52 + i * 6)}">` + text(c, 80, y + 2, b.name, { size: 11.5, fill: C.fg }) + text(c, 1120, y + 2, b.text, { size: 10.5, font: 'mono', fill: ok ? C.accent : C.fg70, anchor: 'end' }) + rect(c, 80, y + 10, bw, 12, { stroke: C.line, fill: 'none' }) + `<rect x="${c.RX(80, bw * ratio)}" y="${y + 10}" width="${(bw * ratio).toFixed(1)}" height="12" fill="${ok ? C.accent : C.fg55}" style="transform-box:fill-box;transform-origin:${c.rtl ? 'right' : 'left'} center;animation:${grow(css, P, `g${i}`, 54 + i * 6, 6)}"/>` + line(c, 80 + bw, y + 6, 80 + bw, y + 26, { stroke: C.fg, sw: 1.2 }) + text(c, 80 + bw, y + 38, b.targetLabel, { size: 9, font: 'mono', fill: C.fg55, anchor: 'end' }) + '</g>';
  });
  s += text(c, 80, 556, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, 576, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, 594, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"],svg rect[style*="${P}-"],svg circle[style*="${P}-"]{animation:none !important;transform:none}}</style>`;
  return s + '</svg>';
}

export function queue(t, rtl) {
  const c = ctx(rtl); const P = 'qb'; const css = []; const H = 536;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  const cols = t.columns; const n = cols.length; const x0 = 80, total = 1040, gap = 12; const w = (total - gap * (n - 1)) / n; const y0 = 100;
  cols.forEach((col, i) => {
    const x = x0 + i * (w + gap);
    s += text(c, x, y0, col.name, { size: 10.5, font: 'mono', fill: C.fg55, letter: 1, upper: true }) + text(c, x + w, y0, String(col.cards.length), { size: 10.5, font: 'mono', fill: C.fg35, anchor: 'end' }) + line(c, x, y0 + 8, x + w, y0 + 8, { stroke: C.line2 });
    col.cards.forEach((cd, k) => {
      const y = y0 + 20 + k * 66; const at = 4 + i * 5 + k * 3; const br = cd.breach;
      s += `<g style="animation:${show(css, P, `c${i}${k}`, at)}${br ? `;` : ''}">` + `<g style="${br ? `animation:${pulse(css, P, `p${i}${k}`)}` : ''}">` + rect(c, x, y, w, 58, { stroke: br ? C.accent : cd.p === 'P1' ? C.fg55 : C.line2, fill: br ? 'rgba(242,181,68,0.08)' : C.fill, dash: br ? '4 3' : '' }) + '</g>'
        + text(c, x + 8, y + 16, cd.p, { size: 10, font: 'mono', fill: cd.p === 'P1' ? C.accent : C.fg55, weight: 600 }) + text(c, x + w - 8, y + 16, cd.age, { size: 9.5, font: 'mono', fill: br ? C.accent : C.fg55, anchor: 'end' })
        + text(c, x + 8, y + 33, cd.text, { size: 10.5, fill: C.fg }) + text(c, x + 8, y + 49, cd.sub, { size: 9, font: 'mono', fill: br ? C.accent : C.fg55 }) + '</g>';
    });
  });
  // metrics row
  const my = 356;
  s += text(c, 80, my, t.metricsLabel, { size: 10, font: 'mono', fill: C.fg35, letter: 1.5, upper: true });
  t.metrics.forEach((m, i) => { const mx = 80 + i * 208; s += `<g style="animation:${show(css, P, `m${i}`, 46 + i * 4)}">` + rect(c, mx, my + 10, 196, 64, { stroke: m.hot ? C.accent : C.line2, fill: m.hot ? 'rgba(242,181,68,0.06)' : C.fill }) + text(c, mx + 12, my + 36, m.big, { size: 18, font: 'mono', fill: m.hot ? C.accent : C.fg, weight: 500 }) + text(c, mx + 12, my + 54, m.label, { size: 9.5, fill: C.fg70 }) + text(c, mx + 12, my + 66, m.sub, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  s += text(c, 80, 466, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, 486, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, 510, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    ticket: {
      title: 'Une réclamation, trois canaux, un seul ticket : ce que l’application en fait, heure par heure',
      alt: 'À gauche, trois arrivées le même jour : un message WhatsApp à 9 h 12, « le réfrigérateur livré hier ne refroidit pas » ; un appel au comptoir à 11 h 40 ; un e-mail à 14 h 05. Les trois sont rattachés au même client par le téléphone et à la même commande, et convergent vers un seul ticket, T-2027-0315. Dans le ticket, une grille trois par trois impact sur urgence dont la case haute et haute est allumée : priorité P1, première réponse visée en deux heures, résolution visée en soixante-douze heures. Une ligne d’états : ouvert à 9 h 12, qualifié à 9 h 30 par Amel, affecté à 9 h 45 au technicien Nadir, en attente du client à 10 h 10 pour une photo, résolu à 12 h 20 le surlendemain par remplacement, clos à 14 h 00 après confirmation du client. En bas, deux barres : première réponse en dix-huit minutes contre deux heures visées ; résolution en cinquante et une heures contre soixante-douze visées. Les données sont un exemple construit.',
      intakesLabel: 'Trois arrivées · le même jour',
      intakes: [
        { channel: 'WhatsApp', time: '09:12', text: '« Le frigo livré hier ne refroidit pas »', match: '+213 661… → client Benali · commande 0890' },
        { channel: 'Comptoir · appel', time: '11:40', text: 'Le client rappelle, demande où ça en est', match: 'même téléphone → même ticket, pas un second' },
        { channel: 'E-mail', time: '14:05', text: 'Photo du compresseur envoyée', match: 'rattachée au ticket · attente client levée' },
      ],
      ticketTitle: 'Ticket unique · réfrigérateur ne refroidit pas', ticketId: 'T-2027-0315', ticketSub: 'client Benali · commande 0890 · produit RF-480 · livré le 09/11 · garantie active',
      gridLabel: 'Priorité = impact × urgence',
      grid: { row: 0, col: 2, labels: [['P2', 'P1', 'P1'], ['P3', 'P2', 'P1'], ['P3', 'P3', 'P2']], impact: 'impact : produit inutilisable', urgency: 'urgence : denrées, jour même', result: '→ P1', targets: 'réponse ≤ 2 h · résolution ≤ 72 h' },
      states: [
        { name: 'Ouvert', when: '09:12', who: 'WhatsApp' },
        { name: 'Qualifié', when: '09:30', who: 'Amel · P1' },
        { name: 'Affecté', when: '09:45', who: 'Nadir · technicien', hot: true },
        { name: 'Attente client', when: '10:10', who: 'photo demandée' },
        { name: 'Résolu', when: 'J+2 12:20', who: 'remplacement' },
        { name: 'Clos', when: 'J+2 14:00', who: 'client confirme', hot: true },
      ],
      slaLabel: 'Délais internes · visé contre réalisé',
      sla: [
        { name: 'Première réponse', actual: 18, target: 120, text: '18 min · visé 2 h', targetLabel: 'cible 2 h' },
        { name: 'Résolution', actual: 51, target: 72, text: '51 h · visé 72 h', targetLabel: 'cible 72 h' },
      ],
      rule: 'Trois arrivées ne font pas trois tickets : le téléphone rattache au même client, la commande au même produit, et le second appel lit l’état au lieu de rouvrir un dossier.',
      rule2: 'La priorité n’est pas l’humeur du client au téléphone : c’est une case d’une grille écrite, et elle fixe deux délais que l’application surveille.',
      note: 'heures, délais et grille : exemple construit · la grille impact × urgence est une pratique courante de la gestion des incidents, les seuils sont fixés par le gérant',
    },
    queue: {
      title: 'La file du service après-vente un mardi matin, et les cinq chiffres de la semaine',
      alt: 'Cinq colonnes : nouveau, deux tickets ; qualifié, deux ; affecté, trois dont un en pointillés, P1 depuis deux heures quarante sans réponse, escaladé au responsable ; en attente client, deux ; résolu à confirmer, trois. Chaque carte porte sa priorité, son âge et son responsable. En bas, cinq mesures de la semaine : première réponse médiane trente-cinq minutes ; résolution médiane quarante-quatre heures ; tickets rouverts six pour cent ; tickets pour cent commandes deux virgule un ; première cause, livraison endommagée, trente et un pour cent. Les données sont un exemple construit.',
      columns: [
        { name: 'Nouveau', cards: [{ p: 'P2', age: '12 min', text: 'Colis incomplet', sub: 'WhatsApp · à qualifier' }, { p: 'P3', age: '48 min', text: 'Question facture', sub: 'e-mail · à qualifier' }] },
        { name: 'Qualifié', cards: [{ p: 'P2', age: '1 h 05', text: 'Pièce manquante', sub: 'à affecter · magasin' }, { p: 'P3', age: '3 h', text: 'Demande de retour', sub: 'à affecter · retours' }] },
        { name: 'Affecté', cards: [{ p: 'P1', age: '2 h 40', text: 'Frigo ne refroidit pas', sub: 'sans réponse · escaladé', breach: true }, { p: 'P2', age: '5 h', text: 'Livraison endommagée', sub: 'Nadir · visite demain' }, { p: 'P3', age: '1 j', text: 'Garantie · facture', sub: 'Amel · en cours' }] },
        { name: 'Attente client', cards: [{ p: 'P2', age: '2 j', text: 'Photo demandée', sub: 'relance auto J+3' }, { p: 'P3', age: '4 j', text: 'Choix : avoir ou échange', sub: 'relance auto J+3' }] },
        { name: 'Résolu · à confirmer', cards: [{ p: 'P1', age: 'J+1', text: 'Remplacement livré', sub: 'clôture auto J+3 sans réponse' }, { p: 'P2', age: 'J+2', text: 'Avoir émis', sub: 'avoir A-2027-0112' }, { p: 'P3', age: 'J+2', text: 'Réponse donnée', sub: 'clôture auto J+3' }] },
      ],
      metricsLabel: 'La semaine · cinq mesures',
      metrics: [
        { big: '35 min', label: 'première réponse médiane', sub: 'cible 2 h · P1 : 22 min' },
        { big: '44 h', label: 'résolution médiane', sub: 'cible 72 h · P1 : 51 h' },
        { big: '6 %', label: 'tickets rouverts', sub: 'cible < 5 %', hot: true },
        { big: '2,1', label: 'tickets pour 100 commandes', sub: 'semaine précédente 2,6' },
        { big: '31 %', label: 'cause n° 1 : livraison endommagée', sub: 'action : emballage, transporteur', hot: true },
      ],
      rule: 'Un ticket sans réponse au-delà de son délai ne disparaît pas dans la file : il est escaladé au responsable, et il clignote jusqu’à ce que quelqu’un réponde.',
      rule2: 'Les cinq chiffres du lundi disent si le SAV tient, et la première cause dit où agir en amont ; sans eux, le SAV est une boîte de réception.',
      note: 'tickets, délais et pourcentages : exemple construit · les cibles sont écrites par le gérant la première semaine',
    },
  },
  en: {
    ticket: {
      title: 'One complaint, three channels, one ticket: what the application does with it, hour by hour',
      alt: 'On the left, three arrivals the same day: a WhatsApp message at 9:12, “the fridge delivered yesterday is not cooling”; a call at the counter at 11:40; an e-mail at 14:05. All three are matched to the same customer by phone and to the same order, and converge into a single ticket, T-2027-0315. Inside the ticket, a three-by-three impact by urgency grid with the high-high cell lit: priority P1, first response targeted within two hours, resolution within seventy-two hours. A state line: opened at 9:12, qualified at 9:30 by Amel, assigned at 9:45 to technician Nadir, waiting for the customer at 10:10 for a photo, resolved at 12:20 two days later by replacement, closed at 14:00 after the customer’s confirmation. At the bottom, two bars: first response in eighteen minutes against two hours targeted; resolution in fifty-one hours against seventy-two targeted. The data is a constructed example.',
      intakesLabel: 'Three arrivals · the same day',
      intakes: [
        { channel: 'WhatsApp', time: '09:12', text: '“The fridge delivered yesterday is not cooling”', match: '+213 661… → customer Benali · order 0890' },
        { channel: 'Counter · call', time: '11:40', text: 'The customer calls back, asks for the status', match: 'same phone → same ticket, not a second one' },
        { channel: 'E-mail', time: '14:05', text: 'Photo of the compressor sent', match: 'attached to the ticket · customer wait lifted' },
      ],
      ticketTitle: 'Single ticket · fridge not cooling', ticketId: 'T-2027-0315', ticketSub: 'customer Benali · order 0890 · product RF-480 · delivered 09/11 · warranty active',
      gridLabel: 'Priority = impact × urgency',
      grid: { row: 0, col: 2, labels: [['P2', 'P1', 'P1'], ['P3', 'P2', 'P1'], ['P3', 'P3', 'P2']], impact: 'impact: product unusable', urgency: 'urgency: food, same day', result: '→ P1', targets: 'response ≤ 2 h · resolution ≤ 72 h' },
      states: [
        { name: 'Opened', when: '09:12', who: 'WhatsApp' },
        { name: 'Qualified', when: '09:30', who: 'Amel · P1' },
        { name: 'Assigned', when: '09:45', who: 'Nadir · technician', hot: true },
        { name: 'Waiting customer', when: '10:10', who: 'photo requested' },
        { name: 'Resolved', when: 'D+2 12:20', who: 'replacement' },
        { name: 'Closed', when: 'D+2 14:00', who: 'customer confirms', hot: true },
      ],
      slaLabel: 'Internal deadlines · target against actual',
      sla: [
        { name: 'First response', actual: 18, target: 120, text: '18 min · target 2 h', targetLabel: 'target 2 h' },
        { name: 'Resolution', actual: 51, target: 72, text: '51 h · target 72 h', targetLabel: 'target 72 h' },
      ],
      rule: 'Three arrivals do not make three tickets: the phone matches the same customer, the order the same product, and the second call reads the state instead of reopening a file.',
      rule2: 'Priority is not the customer’s mood on the phone: it is a cell of a written grid, and it sets two deadlines the application watches.',
      note: 'times, deadlines and grid: constructed example · the impact × urgency grid is common practice in incident management, thresholds are set by the manager',
    },
    queue: {
      title: 'The after-sales board on a Tuesday morning, and the week’s five figures',
      alt: 'Five columns: new, two tickets; qualified, two; assigned, three including a dashed one, P1 for two hours forty without a response, escalated to the manager; waiting for customer, two; resolved to confirm, three. Every card carries its priority, its age and its owner. At the bottom, five measures of the week: median first response thirty-five minutes; median resolution forty-four hours; reopened tickets six percent; tickets per hundred orders two point one; first cause, damaged delivery, thirty-one percent. The data is a constructed example.',
      columns: [
        { name: 'New', cards: [{ p: 'P2', age: '12 min', text: 'Incomplete parcel', sub: 'WhatsApp · to qualify' }, { p: 'P3', age: '48 min', text: 'Invoice question', sub: 'e-mail · to qualify' }] },
        { name: 'Qualified', cards: [{ p: 'P2', age: '1 h 05', text: 'Missing part', sub: 'to assign · store' }, { p: 'P3', age: '3 h', text: 'Return request', sub: 'to assign · returns' }] },
        { name: 'Assigned', cards: [{ p: 'P1', age: '2 h 40', text: 'Fridge not cooling', sub: 'no response · escalated', breach: true }, { p: 'P2', age: '5 h', text: 'Damaged delivery', sub: 'Nadir · visit tomorrow' }, { p: 'P3', age: '1 d', text: 'Warranty · invoice', sub: 'Amel · in progress' }] },
        { name: 'Waiting customer', cards: [{ p: 'P2', age: '2 d', text: 'Photo requested', sub: 'auto reminder D+3' }, { p: 'P3', age: '4 d', text: 'Choice: credit or exchange', sub: 'auto reminder D+3' }] },
        { name: 'Resolved · to confirm', cards: [{ p: 'P1', age: 'D+1', text: 'Replacement delivered', sub: 'auto close D+3 if silent' }, { p: 'P2', age: 'D+2', text: 'Credit note issued', sub: 'credit note CN-2027-0112' }, { p: 'P3', age: 'D+2', text: 'Answer given', sub: 'auto close D+3' }] },
      ],
      metricsLabel: 'The week · five measures',
      metrics: [
        { big: '35 min', label: 'median first response', sub: 'target 2 h · P1: 22 min' },
        { big: '44 h', label: 'median resolution', sub: 'target 72 h · P1: 51 h' },
        { big: '6 %', label: 'reopened tickets', sub: 'target < 5 %', hot: true },
        { big: '2.1', label: 'tickets per 100 orders', sub: 'previous week 2.6' },
        { big: '31 %', label: 'cause no. 1: damaged delivery', sub: 'action: packaging, carrier', hot: true },
      ],
      rule: 'A ticket without a response past its deadline does not vanish in the queue: it is escalated to the manager, and it blinks until someone answers.',
      rule2: 'Monday’s five figures say whether after-sales holds, and the first cause says where to act upstream; without them, after-sales is an inbox.',
      note: 'tickets, deadlines and percentages: constructed example · targets are written by the manager in the first week',
    },
  },
  ar: {
    ticket: {
      title: 'شكوى واحدة، ثلاث قنوات، تذكرة واحدة: ما يفعله التطبيق بها، ساعة بساعة',
      alt: 'على اليمين ثلاثة ورودات في اليوم نفسه: رسالة WhatsApp عند 9:12، «الثلاجة المسلَّمة أمس لا تبرّد»؛ مكالمة عند الكاونتر عند 11:40؛ بريد إلكتروني عند 14:05. تُربط الثلاثة بالزبون نفسه عبر الهاتف وبالطلبية نفسها، وتتلاقى في تذكرة واحدة، T-2027-0315. داخل التذكرة شبكة ثلاثة في ثلاثة أثر على إلحاح خليتها العالية-العالية مضاءة: أولوية P1، رد أول مستهدَف خلال ساعتين، حل خلال اثنتين وسبعين ساعة. خط حالات: مفتوحة عند 9:12، مؤهَّلة عند 9:30 بواسطة أمل، مسنَدة عند 9:45 إلى التقني نذير، في انتظار الزبون عند 10:10 لصورة، محلولة عند 12:20 بعد يومين بالاستبدال، مغلقة عند 14:00 بعد تأكيد الزبون. في الأسفل شريطان: رد أول في ثماني عشرة دقيقة مقابل ساعتين مستهدَفتين؛ حل في إحدى وخمسين ساعة مقابل اثنتين وسبعين. والبيانات مثال مبني.',
      intakesLabel: 'ثلاثة ورودات · اليوم نفسه',
      intakes: [
        { channel: 'WhatsApp', time: I('09:12'), text: '«الثلاجة المسلَّمة أمس لا تبرّد»', match: `${I('+213 661…')} ← الزبون بن علي · الطلبية 0890` },
        { channel: 'الكاونتر · مكالمة', time: I('11:40'), text: 'يعاود الزبون الاتصال ويسأل عن الحالة', match: 'الهاتف نفسه ← التذكرة نفسها لا ثانية' },
        { channel: 'بريد إلكتروني', time: I('14:05'), text: 'صورة الضاغط مرسلة', match: 'مرفقة بالتذكرة · رُفع انتظار الزبون' },
      ],
      ticketTitle: 'تذكرة واحدة · ثلاجة لا تبرّد', ticketId: I('T-2027-0315'), ticketSub: `الزبون بن علي · الطلبية 0890 · المنتج ${I('RF-480')} · سُلّم ${I('09/11')} · الضمان ساري`,
      gridLabel: 'الأولوية = الأثر × الإلحاح',
      grid: { row: 0, col: 2, labels: [['P2', 'P1', 'P1'], ['P3', 'P2', 'P1'], ['P3', 'P3', 'P2']], impact: 'الأثر: منتج غير صالح للاستعمال', urgency: 'الإلحاح: مواد غذائية، اليوم نفسه', result: '← P1', targets: `رد ${I('≤ 2 h')} · حل ${I('≤ 72 h')}` },
      states: [
        { name: 'مفتوحة', when: I('09:12'), who: 'WhatsApp' },
        { name: 'مؤهَّلة', when: I('09:30'), who: 'أمل · P1' },
        { name: 'مسنَدة', when: I('09:45'), who: 'نذير · تقني', hot: true },
        { name: 'انتظار الزبون', when: I('10:10'), who: 'صورة مطلوبة' },
        { name: 'محلولة', when: `ي+2 ${I('12:20')}`, who: 'استبدال' },
        { name: 'مغلقة', when: `ي+2 ${I('14:00')}`, who: 'الزبون يؤكد', hot: true },
      ],
      slaLabel: 'آجال داخلية · المستهدَف مقابل المحقَّق',
      sla: [
        { name: 'الرد الأول', actual: 18, target: 120, text: `18 د · مستهدَف ${I('2 h')}`, targetLabel: `هدف ${I('2 h')}` },
        { name: 'الحل', actual: 51, target: 72, text: `${I('51 h')} · مستهدَف ${I('72 h')}`, targetLabel: `هدف ${I('72 h')}` },
      ],
      rule: 'ثلاثة ورودات لا تصنع ثلاث تذاكر: الهاتف يربط بالزبون نفسه، والطلبية بالمنتج نفسه، والمكالمة الثانية تقرأ الحالة بدل فتح ملف جديد.',
      rule2: 'الأولوية ليست مزاج الزبون على الهاتف: إنها خلية في شبكة مكتوبة، وتحدد أجلين يراقبهما التطبيق.',
      note: 'الأوقات والآجال والشبكة: مثال مبني · شبكة الأثر × الإلحاح ممارسة شائعة في إدارة الحوادث، والعتبات يحددها المسيّر',
    },
    queue: {
      title: 'لوحة خدمة ما بعد البيع صباح ثلاثاء، وأرقام الأسبوع الخمسة',
      alt: 'خمسة أعمدة: جديد، تذكرتان؛ مؤهَّل، اثنتان؛ مسنَد، ثلاث منها واحدة متقطعة، P1 منذ ساعتين وأربعين دقيقة بلا رد، مصعَّدة إلى المسؤول؛ في انتظار الزبون، اثنتان؛ محلول للتأكيد، ثلاث. كل بطاقة تحمل أولويتها وعمرها ومسؤولها. في الأسفل خمسة مقاييس للأسبوع: وسيط الرد الأول خمس وثلاثون دقيقة؛ وسيط الحل أربع وأربعون ساعة؛ تذاكر معاد فتحها ستة بالمئة؛ تذاكر لكل مئة طلبية اثنان فاصل واحد؛ السبب الأول، تسليم متضرر، واحد وثلاثون بالمئة. والبيانات مثال مبني.',
      columns: [
        { name: 'جديد', cards: [{ p: 'P2', age: '12 د', text: 'طرد ناقص', sub: 'WhatsApp · للتأهيل' }, { p: 'P3', age: '48 د', text: 'سؤال عن فاتورة', sub: 'بريد · للتأهيل' }] },
        { name: 'مؤهَّل', cards: [{ p: 'P2', age: `${I('1 h 05')}`, text: 'قطعة ناقصة', sub: 'للإسناد · المتجر' }, { p: 'P3', age: `${I('3 h')}`, text: 'طلب إرجاع', sub: 'للإسناد · المرتجعات' }] },
        { name: 'مسنَد', cards: [{ p: 'P1', age: `${I('2 h 40')}`, text: 'ثلاجة لا تبرّد', sub: 'بلا رد · مصعَّدة', breach: true }, { p: 'P2', age: `${I('5 h')}`, text: 'تسليم متضرر', sub: 'نذير · زيارة غداً' }, { p: 'P3', age: '1 ي', text: 'ضمان · فاتورة', sub: 'أمل · جارٍ' }] },
        { name: 'انتظار الزبون', cards: [{ p: 'P2', age: '2 ي', text: 'صورة مطلوبة', sub: 'تذكير آلي ي+3' }, { p: 'P3', age: '4 ي', text: 'اختيار: إشعار دائن أم تبديل', sub: 'تذكير آلي ي+3' }] },
        { name: 'محلول · للتأكيد', cards: [{ p: 'P1', age: 'ي+1', text: 'استبدال مسلَّم', sub: 'إغلاق آلي ي+3 بلا رد' }, { p: 'P2', age: 'ي+2', text: 'إشعار دائن صادر', sub: `إشعار ${I('A-2027-0112')}` }, { p: 'P3', age: 'ي+2', text: 'جواب مقدَّم', sub: 'إغلاق آلي ي+3' }] },
      ],
      metricsLabel: 'الأسبوع · خمسة مقاييس',
      metrics: [
        { big: '35 د', label: 'وسيط الرد الأول', sub: `هدف ${I('2 h')} · P1: 22 د` },
        { big: I('44 h'), label: 'وسيط الحل', sub: `هدف ${I('72 h')} · P1: ${I('51 h')}` },
        { big: '6 %', label: 'تذاكر معاد فتحها', sub: `هدف ${I('< 5 %')}`, hot: true },
        { big: I('2.1'), label: 'تذاكر لكل 100 طلبية', sub: `الأسبوع السابق ${I('2.6')}` },
        { big: '31 %', label: 'السبب 1: تسليم متضرر', sub: 'إجراء: تغليف، ناقل', hot: true },
      ],
      rule: 'تذكرة بلا رد بعد أجلها لا تختفي في الطابور: تُصعَّد إلى المسؤول وتومض حتى يرد أحد.',
      rule2: 'أرقام الاثنين الخمسة تقول إن كانت خدمة ما بعد البيع تصمد، والسبب الأول يقول أين نتدخل في المنبع؛ وبدونها تكون الخدمة صندوق وارد.',
      note: 'التذاكر والآجال والنسب: مثال مبني · الأهداف يكتبها المسيّر في الأسبوع الأول',
    },
  },
};
