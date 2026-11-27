// Bespoke animated figures for the 2027 "the technician left without the part" post.
//  equipment(): one piece of installed equipment (a cold room at a minimarket):
//               identity card with QR tag, contract and next preventive visit;
//               a vertical history of six interventions (install, preventive,
//               corrective, preventive, corrective, today's open work order)
//               each with type, technician, duration and parts; a side panel of
//               parts consumed and three counters. Events appear top-down.
//  dispatch():  Wednesday's dispatch board: four technicians × 08:00–17:00 with
//               work-order blocks (preventive / corrective / urgent), skill and
//               zone under each name; at 09:20 an urgent call arrives and is
//               placed on the right technician by pushing a preventive visit to
//               Thursday; travel gaps are visible; three counters. Blocks appear,
//               the urgent block slides in.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function draw(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{stroke-dashoffset:1000}${(at + dur).toFixed(1)}%,100%{stroke-dashoffset:0}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
const I = (x) => `⁦${x}⁩`;

function qr(c, x, y, s) {
  // a small deterministic pseudo-QR glyph
  const n = 7, cell = s / n; let out = rect(c, x, y, s, s, { stroke: C.line2, fill: '#0b0f19' });
  const pat = ['1111111', '1000001', '1011101', '1010101', '1011101', '1000001', '1111111'];
  const bits = ['0101100', '1100110', '0110101', '1011010', '0101101', '1101011', '0110110'];
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) { const on = (i < 3 || i > 3) && (j < 3 || j > 3) ? pat[i][j] === '1' : bits[i][j] === '1'; if (on) out += rect(c, x + j * cell + 1, y + i * cell + 1, cell - 2, cell - 2, { stroke: 'none', fill: C.fg70 }); }
  return out;
}

export function equipment(t, rtl) {
  const c = ctx(rtl); const P = 'eq'; const css = []; const H = 620;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  // identity card
  const ix = 80, iy = 100, iw = 1040, ih = 86;
  s += `<g style="animation:${show(css, P, 'id', 2)}">` + rect(c, ix, iy, iw, ih, { stroke: C.accent, fill: 'rgba(242,181,68,0.06)' }) + qr(c, ix + 12, iy + 12, 62)
    + text(c, ix + 90, iy + 24, t.eq.name, { size: 14, fill: C.accent, weight: 500 }) + text(c, ix + 90, iy + 42, t.eq.l1, { size: 9.5, font: 'mono', fill: C.fg70 }) + text(c, ix + 90, iy + 57, t.eq.l2, { size: 9.5, font: 'mono', fill: C.fg70 }) + text(c, ix + 90, iy + 72, t.eq.l3, { size: 9.5, font: 'mono', fill: C.fg55 });
  t.eq.badges.forEach((b, i) => { const bx = ix + iw - 12 - (t.eq.badges.length - i) * 176 + 8; s += rect(c, bx, iy + 14, 164, 26, { stroke: b.hot ? C.accent : C.line2, fill: 'none' }) + text(c, bx + 8, iy + 31, b.t, { size: 9.5, font: 'mono', fill: b.hot ? C.accent : C.fg70 }); });
  s += text(c, ix + iw - 12, iy + 66, t.eq.next, { size: 9.5, font: 'mono', fill: C.fg55, anchor: 'end' }) + '</g>';
  // history
  const hx = 80, hy = 236, lineX = hx + 110;
  s += text(c, hx, hy - 8, t.histLabel, { size: 10, font: 'mono', fill: C.fg35, letter: 1.5, upper: true });
  s += `<line x1="${c.X(lineX)}" y1="${hy + 4}" x2="${c.X(lineX)}" y2="${hy + 4 + (t.events.length - 1) * 46 + 10}" stroke="${C.line2}" stroke-width="1" pathLength="1000" style="stroke-dashoffset:0;animation:${draw(css, P, 'vl', 5, 30)}"/>`;
  t.events.forEach((e, i) => {
    const y = hy + 4 + i * 46; const at = 7 + i * 5; const hot = e.kind === 'open' || e.kind === 'corr';
    s += `<g style="animation:${show(css, P, `e${i}`, at)}">` + text(c, hx, y + 4, e.date, { size: 9.5, font: 'mono', fill: C.fg55 }) + circle(c, lineX, y, 5, { fill: e.kind === 'open' ? '#0b0f19' : hot ? C.accent : C.fg55, stroke: e.kind === 'open' ? C.accent : 'none' })
      + rect(c, lineX + 18, y - 16, 440, 38, { stroke: hot ? C.accent : C.line2, fill: e.kind === 'open' ? 'rgba(242,181,68,0.06)' : C.fill })
      + text(c, lineX + 28, y - 1, e.title, { size: 10.5, fill: hot ? C.accent : C.fg }) + text(c, lineX + 28, y + 14, e.sub, { size: 8.5, font: 'mono', fill: C.fg55 })
      + text(c, lineX + 18 + 440 - 10, y - 1, e.who, { size: 9, font: 'mono', fill: C.fg70, anchor: 'end' }) + text(c, lineX + 18 + 440 - 10, y + 14, e.dur, { size: 8.5, font: 'mono', fill: C.fg55, anchor: 'end' }) + '</g>';
  });
  // parts panel
  const px = 700, py = 236, pw = 420;
  s += `<g style="animation:${show(css, P, 'parts', 28)}">` + text(c, px, py - 8, t.partsLabel, { size: 10, font: 'mono', fill: C.fg35, letter: 1.5, upper: true }) + line(c, px, py, px + pw, py, { stroke: C.line2 });
  t.parts.forEach((p, i) => { const y = py + 20 + i * 22; s += text(c, px, y, p.date, { size: 9, font: 'mono', fill: C.fg55 }) + text(c, px + 70, y, p.name, { size: 9.5, fill: C.fg }) + text(c, px + 230, y, p.ref, { size: 9, font: 'mono', fill: C.fg55 }) + text(c, px + pw, y, p.src, { size: 8.5, font: 'mono', fill: p.hot ? C.accent : C.fg55, anchor: 'end' }) + line(c, px, y + 7, px + pw, y + 7, { stroke: C.line }); });
  s += '</g>';
  const ky = py + 130;
  t.counters.forEach((k, i) => { const x = px + i * 144; s += `<g style="animation:${show(css, P, `k${i}`, 34 + i * 2)}">` + rect(c, x, ky, 132, 70, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? 'rgba(242,181,68,0.06)' : C.fill }) + text(c, x + 10, ky + 26, k.big, { size: 15, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 10, ky + 44, k.l1, { size: 9, fill: C.fg70 }) + text(c, x + 10, ky + 58, k.l2, { size: 9, fill: C.fg70 }) + '</g>'; });
  s += text(c, 80, 540, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, 560, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, 580, t.rule3, { size: 12.5, fill: C.fg }) + text(c, 80, 604, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"],svg line[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

export function dispatch(t, rtl) {
  const c = ctx(rtl); const P = 'dp'; const css = []; const H = 600;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  const ax = 300, aw = 820, ay = 124; const hX = (h) => ax + ((h - 8) / 9) * aw; // 08:00..17:00
  s += text(c, 80, 100, t.boardLabel, { size: 10, font: 'mono', fill: C.fg35, letter: 1.5, upper: true });
  for (let h = 8; h <= 17; h++) s += line(c, hX(h), ay - 6, hX(h), ay + 4 * 66, { stroke: C.line }) + text(c, hX(h), ay - 12, `${String(h).padStart(2, '0')}:00`, { size: 9, font: 'mono', fill: C.fg35, anchor: 'middle' });
  const fill = { prev: C.fill, corr: 'rgba(255,255,255,0.06)', urg: 'rgba(242,181,68,0.22)', moved: 'none' };
  const stroke = { prev: C.line2, corr: C.fg55, urg: C.accent, moved: C.fg35 };
  t.techs.forEach((tech, i) => {
    const y = ay + 8 + i * 66; const at = 3 + i * 2;
    s += `<g style="animation:${show(css, P, `n${i}`, at)}">` + text(c, 80, y + 16, tech.name, { size: 11, fill: C.fg, weight: 500 }) + text(c, 80, y + 31, tech.skills, { size: 8.5, font: 'mono', fill: tech.hot ? C.accent : C.fg55 }) + text(c, 80, y + 45, tech.zone, { size: 8.5, font: 'mono', fill: C.fg55 }) + line(c, 80, y + 58, 1120, y + 58, { stroke: C.line }) + '</g>';
    tech.wos.forEach((w, k) => {
      const x1 = hX(w.from), x2 = hX(w.to); const at2 = w.at || at + 1 + k * 0.6;
      s += `<g style="animation:${show(css, P, `w${i}${k}`, at2)}">` + rect(c, x1, y + 4, x2 - x1, 40, { stroke: stroke[w.kind], fill: fill[w.kind], dash: w.kind === 'moved' ? '3 3' : undefined })
        + text(c, x1 + 6, y + 19, w.t, { size: 9, font: 'mono', fill: w.kind === 'urg' ? C.accent : w.kind === 'moved' ? C.fg35 : C.fg }) + text(c, x1 + 6, y + 33, w.sub, { size: 8, font: 'mono', fill: w.kind === 'moved' ? C.fg35 : C.fg55 }) + '</g>';
    });
    (tech.travel || []).forEach((tr, k) => { s += `<g style="animation:${show(css, P, `t${i}${k}`, at + 2)}">` + rect(c, hX(tr[0]), y + 20, hX(tr[1]) - hX(tr[0]), 8, { stroke: 'none', fill: 'rgba(255,255,255,0.08)' }) + '</g>'; });
  });
  // urgent event marker and arrow of the move
  s += `<g style="animation:${show(css, P, 'ev', 14)}">` + line(c, hX(9.33), ay - 6, hX(9.33), ay + 4 * 66, { stroke: C.accent, dash: '3 3' }) + text(c, hX(9.33) + (rtl ? -6 : 6), ay + 4 * 66 + 12, t.event, { size: 9.5, font: 'mono', fill: C.accent }) + '</g>';
  // legend + counters
  const ly = ay + 4 * 66 + 30;
  s += `<g style="animation:${show(css, P, 'lg', 24)}">`;
  t.legend.forEach((l, i) => { const x = 80 + i * 150; s += rect(c, x, ly, 14, 10, { stroke: stroke[l.k], fill: fill[l.k], dash: l.k === 'moved' ? '3 3' : undefined }) + text(c, x + 20, ly + 9, l.t, { size: 9, font: 'mono', fill: C.fg55 }); });
  s += '</g>';
  const ky = ly + 26;
  t.counters.forEach((k, i) => { const x = 80 + i * 262; s += `<g style="animation:${show(css, P, `k${i}`, 28 + i * 2)}">` + rect(c, x, ky, 250, 56, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? 'rgba(242,181,68,0.06)' : C.fill }) + text(c, x + 12, ky + 24, k.big, { size: 15, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 42, k.label, { size: 9.5, fill: C.fg70 }) + '</g>'; });
  s += text(c, 80, ky + 84, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 104, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"],svg path[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

const WO = (from, to, kind, t, sub, at) => ({ from, to, kind, t, sub, at });

export const STRINGS = {
  fr: {
    equipment: {
      title: 'La fiche d’un équipement installé : identité, contrat, historique, pièces, trois chiffres',
      alt: 'En haut, la fiche d’une chambre froide installée dans une supérette : étiquette QR, modèle et numéro de série, adresse, date d’installation, contrat de maintenance avec deux visites préventives par an, prochaine visite prévue. À gauche, l’historique vertical de six interventions depuis mars 2025 : installation, visite préventive, panne du compresseur réparée, visite préventive, joint de porte remplacé, et l’ordre de travail ouvert aujourd’hui pour un compresseur en défaut ; chaque ligne porte le technicien, la durée et les pièces. À droite, les pièces consommées avec leur provenance, stock du véhicule ou commande, et trois compteurs : deux pannes en vingt mois, 9 h 40 d’intervention au total, dernière visite préventive il y a 71 jours. Les données sont un exemple construit.',
      eq: { name: 'Chambre froide CF-12 · Supérette El Amel, Alger', l1: 'modèle FrigoPro CF-12 · n° de série FP24-00318 · installée le 14 mars 2025', l2: 'étiquette QR collée sur le tableau · scannée à chaque intervention', l3: 'client · adresse géocodée · contact du gérant · accès : clé au comptoir', badges: [{ t: 'contrat Confort · 2 visites/an', hot: true }, { t: 'garantie compresseur → mars 2027' }], next: 'prochaine préventive prévue : 12 janvier 2027 · générée par le plan' },
      histLabel: 'Historique · six interventions',
      events: [
        { date: '14 mars 2025', title: 'Installation et mise en service', sub: 'liste de contrôle 18 points · photos · signature du gérant', who: 'Nadir', dur: '4 h 10', kind: 'inst' },
        { date: '02 sept 2025', title: 'Visite préventive 1/2', sub: 'nettoyage condenseur · relevé températures · aucune pièce', who: 'Nadir', dur: '1 h 05', kind: 'prev' },
        { date: '21 nov 2025', title: 'Panne · compresseur ne démarre pas', sub: 'cause : relais de démarrage · pièce du stock véhicule', who: 'Sofiane', dur: '1 h 50', kind: 'corr' },
        { date: '04 mars 2026', title: 'Visite préventive 2/2', sub: 'charge frigorigène vérifiée · porte : usure du joint notée', who: 'Nadir', dur: '1 h 15', kind: 'prev' },
        { date: '31 août 2026', title: 'Joint de porte remplacé', sub: 'suite à la note de mars · pièce commandée, posée en une visite', who: 'Nadir', dur: '1 h 20', kind: 'corr' },
        { date: '10 nov 2026', title: 'OT-2271 ouvert · compresseur en défaut', sub: 'urgence · marchandise à risque · affecté à 9 h 24', who: 'Nadir', dur: 'en cours', kind: 'open' },
      ],
      partsLabel: 'Pièces consommées',
      parts: [
        { date: '21/11/25', name: 'Relais de démarrage', ref: 'RL-118', src: 'stock véhicule Sofiane' },
        { date: '31/08/26', name: 'Joint de porte 1 900 mm', ref: 'JP-1900', src: 'commande · reçu le 28/08', hot: true },
        { date: '10/11/26', name: 'Compresseur (réservé)', ref: 'CP-12', src: 'stock dépôt · réservé à 9 h 26', hot: true },
      ],
      counters: [{ big: '2', l1: 'pannes', l2: 'en 20 mois' }, { big: '9 h 40', l1: 'd’intervention', l2: 'au total' }, { big: '71 j', l1: 'depuis la dernière', l2: 'préventive', hot: true }],
      rule: 'L’équipement est une fiche, pas une ligne sur une facture : il a une identité, un emplacement, un contrat et un historique que chaque intervention prolonge.',
      rule2: 'Le technicien scanne l’étiquette à l’arrivée : la fiche s’ouvre avec l’historique et la pièce déjà réservée, avant de toucher à quoi que ce soit.',
      rule3: 'Une note de visite préventive, « usure du joint », devient une intervention planifiée, pas un souvenir.',
      note: 'équipement, dates, techniciens et pièces : exemple construit · la « panne » et la « préventive » suivent les définitions courantes : réparer après défaillance, vérifier à intervalle planifié',
    },
    dispatch: {
      title: 'La répartition de mercredi : quatre techniciens, quatorze ordres, une urgence à 9 h 20',
      alt: 'Quatre lignes, une par technicien, avec ses compétences et sa zone, sur un axe de 8 h à 17 h ; les ordres de travail sont des blocs : préventifs, correctifs, urgents en accent, et les déplacements en bandes fines. À 9 h 20, une ligne pointillée marque l’appel urgent de la supérette ; l’ordre de travail urgent est placé sur Nadir, compétent en froid et déjà dans la zone Est, et sa visite préventive de 11 h est déplacée à jeudi, figurée en pointillé. En bas, la légende et trois compteurs : quatorze ordres du jour, un urgent placé en quatre minutes, douze résolus en une visite sur quatorze. Les données sont un exemple construit.',
      boardLabel: 'Mercredi 10 novembre · 14 ordres de travail · 4 techniciens', event: 'appel urgent 9 h 20 → OT-2271 placé sur Nadir en 4 min · sa préventive de 11 h part à jeudi 9 h, client prévenu',
      techs: [
        { name: 'Nadir', skills: 'froid · électricité', zone: 'zone Est · départ dépôt 8 h', hot: true, wos: [WO(8.25, 9.25, 'prev', 'OT-2262 · préventive', 'boulangerie · vitrine', 4), WO(9.6, 11.0, 'urg', 'OT-2271 · URGENT', 'El Amel · pièce réservée', 17), WO(11.0, 12.5, 'moved', 'OT-2263 · préventive → jeudi', 'climatisation cabinet · déplacée', 19), WO(13.5, 15.5, 'corr', 'OT-2266 · fuite', 'restaurant · chambre froide', 5)], travel: [[9.25, 9.6], [12.5, 13.5]] },
        { name: 'Sofiane', skills: 'froid · plomberie', zone: 'zone Centre', wos: [WO(8.5, 10.5, 'corr', 'OT-2264 · ne refroidit plus', 'pharmacie · réfrigérateur', 5), WO(11.0, 12.0, 'prev', 'OT-2265 · préventive', 'hôtel · cuisine', 5.6), WO(13.0, 16.0, 'corr', 'OT-2268 · remplacement', 'grossiste · évaporateur', 6.2)], travel: [[10.5, 11.0], [12.0, 13.0]] },
        { name: 'Amine', skills: 'climatisation · électricité', zone: 'zone Ouest', wos: [WO(8.5, 10.0, 'prev', 'OT-2267 · préventive', 'école · 6 splits', 7), WO(10.5, 12.5, 'prev', 'OT-2269 · préventive', 'clinique · 4 splits', 7.6), WO(14.0, 16.5, 'corr', 'OT-2270 · ne démarre pas', 'bureau · unité extérieure', 8.2)], travel: [[10.0, 10.5], [12.5, 14.0]] },
        { name: 'Yacine', skills: 'froid · apprenti', zone: 'zone Est · avec Nadir l’après-midi', wos: [WO(8.5, 11.5, 'prev', 'OT-2272 · préventive', 'supermarché · 3 meubles', 9), WO(13.5, 15.5, 'corr', 'OT-2266 · avec Nadir', 'restaurant · chambre froide', 9.6)], travel: [[11.5, 13.5]] },
      ],
      moveRow: 0, move: [11.4, 13.0], moveLabel: 'préventive 11 h → jeudi 9 h · client prévenu',
      legend: [{ k: 'prev', t: 'préventive' }, { k: 'corr', t: 'correctif' }, { k: 'urg', t: 'urgent' }, { k: 'moved', t: 'déplacé' }],
      counters: [{ big: '14', label: 'ordres de travail du jour' }, { big: '4 min', label: 'pour placer l’urgence : compétence, zone, pièce', hot: true }, { big: '12 / 14', label: 'résolus en une visite (hier)' }, { big: '1 h 10', label: 'de déplacement par technicien' }],
      rule: 'Un ordre de travail se place sur un technicien qui a la compétence, qui est dans la zone, et dont le véhicule ou le dépôt a la pièce : le tableau le sait avant le répartiteur.',
      rule2: 'Une urgence déplace une préventive, jamais une autre urgence ; le client déplacé est prévenu avec une nouvelle date avant que le technicien ne change de route.',
      note: 'techniciens, ordres et horaires : exemple construit · « résolu en une visite » = clôturé sans seconde intervention sur le même défaut, définition écrite par l’entreprise',
    },
  },
  en: {
    equipment: {
      title: 'One installed piece of equipment: identity, contract, history, parts, three figures',
      alt: 'At the top, the record of a cold room installed in a minimarket: QR tag, model and serial number, address, installation date, maintenance contract with two preventive visits a year, next planned visit. On the left, the vertical history of six interventions since March 2025: installation, preventive visit, compressor breakdown repaired, preventive visit, door seal replaced, and today’s open work order for a faulty compressor; each line carries the technician, the duration and the parts. On the right, parts consumed with their source, van stock or order, and three counters: two breakdowns in twenty months, 9 h 40 of intervention in total, last preventive visit 71 days ago. The data is a constructed example.',
      eq: { name: 'Cold room CF-12 · El Amel Minimarket, Algiers', l1: 'model FrigoPro CF-12 · serial FP24-00318 · installed 14 March 2025', l2: 'QR tag stuck on the panel · scanned at every intervention', l3: 'customer · geocoded address · manager contact · access: key at the counter', badges: [{ t: 'Comfort contract · 2 visits/yr', hot: true }, { t: 'compressor warranty → Mar 2027' }], next: 'next preventive planned: 12 January 2027 · generated by the plan' },
      histLabel: 'History · six interventions',
      events: [
        { date: '14 Mar 2025', title: 'Installation and commissioning', sub: '18-point checklist · photos · manager’s signature', who: 'Nadir', dur: '4 h 10', kind: 'inst' },
        { date: '02 Sep 2025', title: 'Preventive visit 1/2', sub: 'condenser cleaned · temperatures read · no parts', who: 'Nadir', dur: '1 h 05', kind: 'prev' },
        { date: '21 Nov 2025', title: 'Breakdown · compressor will not start', sub: 'cause: start relay · part from van stock', who: 'Sofiane', dur: '1 h 50', kind: 'corr' },
        { date: '04 Mar 2026', title: 'Preventive visit 2/2', sub: 'refrigerant charge checked · door: seal wear noted', who: 'Nadir', dur: '1 h 15', kind: 'prev' },
        { date: '31 Aug 2026', title: 'Door seal replaced', sub: 'following the March note · part ordered, fitted in one visit', who: 'Nadir', dur: '1 h 20', kind: 'corr' },
        { date: '10 Nov 2026', title: 'WO-2271 open · compressor fault', sub: 'urgent · goods at risk · assigned at 9:24', who: 'Nadir', dur: 'in progress', kind: 'open' },
      ],
      partsLabel: 'Parts consumed',
      parts: [
        { date: '21/11/25', name: 'Start relay', ref: 'RL-118', src: 'Sofiane’s van stock' },
        { date: '31/08/26', name: 'Door seal 1,900 mm', ref: 'JP-1900', src: 'ordered · received 28/08', hot: true },
        { date: '10/11/26', name: 'Compressor (reserved)', ref: 'CP-12', src: 'depot stock · reserved at 9:26', hot: true },
      ],
      counters: [{ big: '2', l1: 'breakdowns', l2: 'in 20 months' }, { big: '9 h 40', l1: 'of intervention', l2: 'in total' }, { big: '71 d', l1: 'since the last', l2: 'preventive visit', hot: true }],
      rule: 'The equipment is a record, not a line on an invoice: it has an identity, a location, a contract and a history that every intervention extends.',
      rule2: 'The technician scans the tag on arrival: the record opens with the history and the part already reserved, before touching anything.',
      rule3: 'A preventive-visit note, “seal wear”, becomes a planned intervention, not a memory.',
      note: 'equipment, dates, technicians and parts: constructed example · “breakdown” and “preventive” follow the common definitions: repair after failure, check at a planned interval',
    },
    dispatch: {
      title: 'Wednesday’s dispatch: four technicians, fourteen orders, one emergency at 9:20',
      alt: 'Four rows, one per technician, with skills and zone, on an 8:00 to 17:00 axis; work orders are blocks: preventive, corrective, urgent in accent, and travel as thin bands. At 9:20, a dotted line marks the minimarket’s urgent call; the urgent work order is placed on Nadir, skilled in refrigeration and already in the East zone, and his 11:00 preventive visit is moved to Thursday, shown dotted. At the bottom, the legend and three counters: fourteen work orders today, one emergency placed in four minutes, twelve of fourteen fixed in one visit. The data is a constructed example.',
      boardLabel: 'Wednesday 10 November · 14 work orders · 4 technicians', event: 'urgent call 9:20 → WO-2271 placed on Nadir in 4 min · his 11:00 preventive moves to Thursday 9:00, customer warned',
      techs: [
        { name: 'Nadir', skills: 'refrigeration · electrical', zone: 'East zone · leaves depot 8:00', hot: true, wos: [WO(8.25, 9.25, 'prev', 'WO-2262 · preventive', 'bakery · display case', 4), WO(9.6, 11.0, 'urg', 'WO-2271 · URGENT', 'El Amel · part reserved', 17), WO(11.0, 12.5, 'moved', 'WO-2263 · preventive → Thursday', 'clinic air-con · moved', 19), WO(13.5, 15.5, 'corr', 'WO-2266 · leak', 'restaurant · cold room', 5)], travel: [[9.25, 9.6], [12.5, 13.5]] },
        { name: 'Sofiane', skills: 'refrigeration · plumbing', zone: 'Centre zone', wos: [WO(8.5, 10.5, 'corr', 'WO-2264 · not cooling', 'pharmacy · refrigerator', 5), WO(11.0, 12.0, 'prev', 'WO-2265 · preventive', 'hotel · kitchen', 5.6), WO(13.0, 16.0, 'corr', 'WO-2268 · replacement', 'wholesaler · evaporator', 6.2)], travel: [[10.5, 11.0], [12.0, 13.0]] },
        { name: 'Amine', skills: 'air-con · electrical', zone: 'West zone', wos: [WO(8.5, 10.0, 'prev', 'WO-2267 · preventive', 'school · 6 splits', 7), WO(10.5, 12.5, 'prev', 'WO-2269 · preventive', 'clinic · 4 splits', 7.6), WO(14.0, 16.5, 'corr', 'WO-2270 · will not start', 'office · outdoor unit', 8.2)], travel: [[10.0, 10.5], [12.5, 14.0]] },
        { name: 'Yacine', skills: 'refrigeration · apprentice', zone: 'East zone · with Nadir in the afternoon', wos: [WO(8.5, 11.5, 'prev', 'WO-2272 · preventive', 'supermarket · 3 cabinets', 9), WO(13.5, 15.5, 'corr', 'WO-2266 · with Nadir', 'restaurant · cold room', 9.6)], travel: [[11.5, 13.5]] },
      ],
      moveRow: 0, move: [11.4, 13.0], moveLabel: 'preventive 11:00 → Thursday 9:00 · customer warned',
      legend: [{ k: 'prev', t: 'preventive' }, { k: 'corr', t: 'corrective' }, { k: 'urg', t: 'urgent' }, { k: 'moved', t: 'moved' }],
      counters: [{ big: '14', label: 'work orders today' }, { big: '4 min', label: 'to place the emergency: skill, zone, part', hot: true }, { big: '12 / 14', label: 'fixed in one visit (yesterday)' }, { big: '1 h 10', label: 'of travel per technician' }],
      rule: 'A work order goes to a technician who has the skill, who is in the zone, and whose van or depot has the part: the board knows it before the dispatcher does.',
      rule2: 'An emergency moves a preventive visit, never another emergency; the moved customer is warned with a new date before the technician changes route.',
      note: 'technicians, orders and times: constructed example · “fixed in one visit” = closed without a second intervention on the same fault, a definition written by the company',
    },
  },
  ar: {
    equipment: {
      title: 'بطاقة معدّة مركَّبة: هوية، عقد، تاريخ، قطع، ثلاثة أرقام',
      alt: 'في الأعلى بطاقة غرفة تبريد مركَّبة في سوبيرات: وسم QR، الطراز والرقم التسلسلي، العنوان، تاريخ التركيب، عقد صيانة بزيارتين وقائيتين في السنة، الزيارة المقبلة المخططة. على جانب، التاريخ العمودي لست تدخلات منذ مارس 2025: تركيب، زيارة وقائية، عطل ضاغط أُصلح، زيارة وقائية، استبدال جوان الباب، وأمر العمل المفتوح اليوم لضاغط معطّل؛ كل سطر يحمل التقني والمدة والقطع. على الجانب الآخر القطع المستهلكة بمصدرها، مخزون الشاحنة أو طلب، وثلاثة عدادات: عطلان في عشرين شهراً، 9 س 40 من التدخل إجمالاً، آخر زيارة وقائية قبل 71 يوماً. والبيانات مثال مبني.',
      eq: { name: `غرفة تبريد ${I('CF-12')} · سوبيرات الأمل، الجزائر`, l1: `الطراز ${I('FrigoPro CF-12')} · الرقم التسلسلي ${I('FP24-00318')} · رُكّبت في 14 مارس 2025`, l2: 'وسم QR ملصق على اللوحة · يُمسح في كل تدخل', l3: 'زبون · عنوان مرمَّز · جهة اتصال المسيّر · الدخول: مفتاح عند الشباك', badges: [{ t: 'عقد راحة · زيارتان/سنة', hot: true }, { t: 'ضمان الضاغط ← مارس 2027' }], next: 'الوقائية المقبلة المخططة: 12 جانفي 2027 · ولّدتها الخطة' },
      histLabel: 'التاريخ · ست تدخلات',
      events: [
        { date: '14 مارس 2025', title: 'تركيب وتشغيل', sub: 'قائمة تحقق 18 نقطة · صور · توقيع المسيّر', who: 'نذير', dur: '4 س 10', kind: 'inst' },
        { date: '02 سبت 2025', title: 'زيارة وقائية 1/2', sub: 'تنظيف المكثّف · قراءة الحرارات · لا قطع', who: 'نذير', dur: '1 س 05', kind: 'prev' },
        { date: '21 نوف 2025', title: 'عطل · الضاغط لا يبدأ', sub: 'السبب: مرحّل البدء · قطعة من مخزون الشاحنة', who: 'سفيان', dur: '1 س 50', kind: 'corr' },
        { date: '04 مارس 2026', title: 'زيارة وقائية 2/2', sub: 'شحنة التبريد مفحوصة · الباب: تآكل الجوان ملاحَظ', who: 'نذير', dur: '1 س 15', kind: 'prev' },
        { date: '31 أوت 2026', title: 'استبدال جوان الباب', sub: 'تبعاً لملاحظة مارس · قطعة مطلوبة، رُكّبت في زيارة واحدة', who: 'نذير', dur: '1 س 20', kind: 'corr' },
        { date: '10 نوف 2026', title: `${I('OT-2271')} مفتوح · ضاغط معطّل`, sub: 'عاجل · بضاعة في خطر · أُسند عند 09:24', who: 'نذير', dur: 'جارٍ', kind: 'open' },
      ],
      partsLabel: 'القطع المستهلكة',
      parts: [
        { date: '21/11/25', name: 'مرحّل بدء', ref: I('RL-118'), src: 'مخزون شاحنة سفيان' },
        { date: '31/08/26', name: 'جوان باب 1,900 مم', ref: I('JP-1900'), src: 'طلب · استُلم 28/08', hot: true },
        { date: '10/11/26', name: 'ضاغط (محجوز)', ref: I('CP-12'), src: 'مخزون المستودع · حُجز عند 09:26', hot: true },
      ],
      counters: [{ big: '2', l1: 'عطلان', l2: 'في 20 شهراً' }, { big: '9 س 40', l1: 'من التدخل', l2: 'إجمالاً' }, { big: '71 ي', l1: 'منذ آخر', l2: 'زيارة وقائية', hot: true }],
      rule: 'المعدّة بطاقة لا سطر في فاتورة: لها هوية وموقع وعقد وتاريخ يمدّه كل تدخل.',
      rule2: 'يمسح التقني الوسم عند الوصول: تنفتح البطاقة بالتاريخ والقطعة المحجوزة سلفاً قبل أن يلمس شيئاً.',
      rule3: 'ملاحظة زيارة وقائية، «تآكل الجوان»، تصير تدخلاً مخططاً لا ذكرى.',
      note: 'المعدّة والتواريخ والتقنيون والقطع: مثال مبني · «العطل» و«الوقائية» بالتعريفات الشائعة: إصلاح بعد الخلل، فحص على فترات مخططة',
    },
    dispatch: {
      title: 'توزيع الأربعاء: أربعة تقنيين، أربعة عشر أمراً، طارئ عند 09:20',
      alt: 'أربعة صفوف، واحد لكل تقني، بمهاراته ومنطقته، على محور من 08:00 إلى 17:00؛ أوامر العمل كتل: وقائية، تصحيحية، عاجلة مميزة، والتنقلات أشرطة رفيعة. عند 09:20 يشير خط منقّط إلى الاتصال العاجل من السوبيرات؛ يوضع أمر العمل العاجل على نذير، المتمكن من التبريد والموجود أصلاً في المنطقة الشرقية، وتُنقل زيارته الوقائية عند 11:00 إلى الخميس، مرسومة بخط منقّط. في الأسفل المفتاح وثلاثة عدادات: أربعة عشر أمراً اليوم، طارئ واحد وُضع في أربع دقائق، اثنا عشر من أربعة عشر حُلّت في زيارة واحدة. والبيانات مثال مبني.',
      boardLabel: 'الأربعاء 10 نوفمبر · 14 أمر عمل · 4 تقنيين', event: 'اتصال عاجل 09:20 ← OT-2271 وُضع على نذير في 4 د · وقائيته عند 11:00 تنتقل إلى الخميس 09:00، الزبون منبَّه',
      techs: [
        { name: 'نذير', skills: 'تبريد · كهرباء', zone: 'المنطقة الشرقية · ينطلق من المستودع 08:00', hot: true, wos: [WO(8.25, 9.25, 'prev', `${I('OT-2262')} · وقائية`, 'مخبزة · واجهة عرض', 4), WO(9.6, 11.0, 'urg', `${I('OT-2271')} · عاجل`, 'الأمل · قطعة محجوزة', 17), WO(11.0, 12.5, 'moved', `${I('OT-2263')} · وقائية ← الخميس`, 'تكييف عيادة · منقولة', 19), WO(13.5, 15.5, 'corr', `${I('OT-2266')} · تسرب`, 'مطعم · غرفة تبريد', 5)], travel: [[9.25, 9.6], [12.5, 13.5]] },
        { name: 'سفيان', skills: 'تبريد · سباكة', zone: 'المنطقة الوسطى', wos: [WO(8.5, 10.5, 'corr', `${I('OT-2264')} · لا يبرّد`, 'صيدلية · ثلاجة', 5), WO(11.0, 12.0, 'prev', `${I('OT-2265')} · وقائية`, 'فندق · مطبخ', 5.6), WO(13.0, 16.0, 'corr', `${I('OT-2268')} · استبدال`, 'تاجر جملة · مبخّر', 6.2)], travel: [[10.5, 11.0], [12.0, 13.0]] },
        { name: 'أمين', skills: 'تكييف · كهرباء', zone: 'المنطقة الغربية', wos: [WO(8.5, 10.0, 'prev', `${I('OT-2267')} · وقائية`, 'مدرسة · 6 وحدات', 7), WO(10.5, 12.5, 'prev', `${I('OT-2269')} · وقائية`, 'عيادة · 4 وحدات', 7.6), WO(14.0, 16.5, 'corr', `${I('OT-2270')} · لا يبدأ`, 'مكتب · وحدة خارجية', 8.2)], travel: [[10.0, 10.5], [12.5, 14.0]] },
        { name: 'ياسين', skills: 'تبريد · متدرب', zone: 'المنطقة الشرقية · مع نذير بعد الظهر', wos: [WO(8.5, 11.5, 'prev', `${I('OT-2272')} · وقائية`, 'سوبرماركت · 3 ثلاجات عرض', 9), WO(13.5, 15.5, 'corr', `${I('OT-2266')} · مع نذير`, 'مطعم · غرفة تبريد', 9.6)], travel: [[11.5, 13.5]] },
      ],
      moveRow: 0, move: [11.4, 13.0], moveLabel: 'وقائية 11:00 ← الخميس 09:00 · الزبون منبَّه',
      legend: [{ k: 'prev', t: 'وقائية' }, { k: 'corr', t: 'تصحيحية' }, { k: 'urg', t: 'عاجلة' }, { k: 'moved', t: 'منقولة' }],
      counters: [{ big: '14', label: 'أمر عمل اليوم' }, { big: '4 د', label: 'لوضع الطارئ: مهارة، منطقة، قطعة', hot: true }, { big: I('12 / 14'), label: 'حُلّت في زيارة واحدة (أمس)' }, { big: '1 س 10', label: 'من التنقل لكل تقني' }],
      rule: 'يوضع أمر العمل على تقني يملك المهارة، وموجود في المنطقة، وفي شاحنته أو المستودع القطعة: اللوحة تعرف ذلك قبل الموزّع.',
      rule2: 'الطارئ ينقل زيارة وقائية لا طارئاً آخر أبداً؛ والزبون المنقول يُنبَّه بتاريخ جديد قبل أن يغيّر التقني طريقه.',
      note: 'التقنيون والأوامر والأوقات: مثال مبني · «حُلّ في زيارة واحدة» = أُغلق دون تدخل ثانٍ على العطل نفسه، تعريف تكتبه الشركة',
    },
  },
};
