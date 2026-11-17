// Bespoke animated figures for the 2027 "installation réseau informatique
// d'entreprise en Algérie" post.
//  plan():       the network drawn as a plan: two internet links into a firewall,
//                the main cabinet with its switches, a fibre run to the warehouse
//                cabinet, then six separated networks (VLAN) as bands. The links
//                draw themselves, the bands appear, then the main link is cut and
//                the backup link takes over; three tiles.
//  couverture(): one office floor drawn twice as a floor plan: an operator box
//                at the end of the corridor against two wired access points, with
//                growing coverage rings, the signal measured in each room, and a
//                scale placing the eight rooms against a threshold; three tiles.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function draw(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{stroke-dashoffset:1000}${(at + dur).toFixed(1)}%,100%{stroke-dashoffset:0}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function ring(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scale(0.05);opacity:0}${(at + dur).toFixed(1)}%,100%{transform:scale(1);opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
const I = (x) => `⁦${x}⁩`;
const TINT = 'rgba(242,181,68,0.06)';

function box(c, css, P, id, at, x, y, w, h, t, accent) {
  let s = `<g style="animation:${show(css, P, id, at)}">` + rect(c, x, y, w, h, { stroke: accent ? C.accent : C.line2, fill: accent ? TINT : C.fill })
    + text(c, x + 12, y + 20, t.title, { size: 10.5, fill: accent ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, y + 34, t.sub, { size: 8, font: 'mono', fill: C.fg55 });
  (t.rows || []).forEach((r, i) => { const yy = y + 54 + i * 18; s += text(c, x + 12, yy, r.l, { size: 9, fill: C.fg70 }) + text(c, x + w - 12, yy, r.v, { size: 9, font: 'mono', fill: r.hot ? C.accent : C.fg, anchor: 'end', weight: r.hot ? 500 : 400 }); });
  return s + '</g>';
}
function link(c, css, P, id, at, x1, y1, x2, y2, o = {}) {
  return `<line x1="${c.X(x1)}" y1="${y1}" x2="${c.X(x2)}" y2="${y2}" stroke="${o.stroke || C.line2}" stroke-width="${o.sw || 1.4}" pathLength="1000" stroke-dasharray="1000" style="stroke-dashoffset:0;animation:${draw(css, P, id, at, 2)}"/>`;
}
function tiles(c, css, P, ky, ts, at0) {
  let s = '';
  ts.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, at0 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? TINT : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  return s;
}
const motionOff = (P) => `@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"],svg line[style*="${P}-"],svg circle[style*="${P}-"]{animation:none !important}}`;

export function plan(t, rtl) {
  const c = ctx(rtl); const P = 'rp'; const css = []; const H = 694;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  // internet links (left)
  s += box(c, css, P, 'm', 4, 80, 150, 210, 62, t.main, false);
  s += box(c, css, P, 'b', 4.6, 80, 224, 210, 62, t.backup, false);
  s += link(c, css, P, 'l1', 5, 290, 181, 350, 205) + link(c, css, P, 'l2', 5.4, 290, 255, 350, 231);
  // firewall, main cabinet, warehouse cabinet
  s += box(c, css, P, 'f', 7, 350, 172, 180, 92, t.fw, false);
  s += link(c, css, P, 'l3', 8, 530, 218, 590, 218);
  s += box(c, css, P, 'r', 9.5, 590, 150, 260, 136, t.baie, false);
  s += link(c, css, P, 'l4', 11, 850, 218, 920, 218, { stroke: C.accent });
  s += `<g style="animation:${show(css, P, 'fl', 12)}">` + text(c, 885, 208, t.fibre, { size: 8.5, font: 'mono', fill: C.accent, anchor: 'middle' }) + '</g>';
  s += box(c, css, P, 'd', 12.5, 920, 172, 200, 92, t.depot, false);
  // six separated networks
  const vy = 330;
  s += `<g style="animation:${show(css, P, 'vl', 14)}">` + text(c, 80, vy - 12, t.vlanLabel, { size: 9, font: 'mono', fill: C.fg35, letter: 1.2, upper: true }) + '</g>';
  t.vlans.forEach((v, i) => {
    const y = vy + i * 34; const hot = v.hot;
    s += `<g style="animation:${show(css, P, `v${i}`, 15 + i * 3)}">` + rect(c, 80, y, 1040, 28, { stroke: hot ? C.accent : C.line2, fill: hot ? TINT : C.fill })
      + text(c, 92, y + 18, v.id, { size: 9.5, font: 'mono', fill: hot ? C.accent : C.fg55 })
      + text(c, 170, y + 18, v.name, { size: 10.5, fill: hot ? C.accent : C.fg, weight: 500 })
      + text(c, 380, y + 18, v.net, { size: 9, font: 'mono', fill: C.fg55 })
      + text(c, 500, y + 18, v.what, { size: 9.5, fill: C.fg70 })
      + text(c, 1108, y + 18, v.rule, { size: 8.5, font: 'mono', fill: hot ? C.accent : C.fg, anchor: 'end' }) + '</g>';
  });
  // the cut and the failover (drawn last so they sit on top)
  s += `<g style="animation:${show(css, P, 'cut', 40)}">` + text(c, 92, 202, t.main.state, { size: 8.5, font: 'mono', fill: C.accent })
    + `<line x1="${c.X(312)}" y1="184" x2="${c.X(326)}" y2="200" stroke="${C.accent}" stroke-width="2"/><line x1="${c.X(326)}" y1="184" x2="${c.X(312)}" y2="200" stroke="${C.accent}" stroke-width="2"/></g>`;
  s += `<g style="animation:${show(css, P, 'bk', 44)}">` + rect(c, 80, 224, 210, 62, { stroke: C.accent, fill: TINT, sw: 1.4 }) + text(c, 92, 276, t.backup.state, { size: 8.5, font: 'mono', fill: C.accent })
    + `<line x1="${c.X(290)}" y1="255" x2="${c.X(350)}" y2="231" stroke="${C.accent}" stroke-width="2"/></g>`;
  const ky = vy + 6 * 34 + 10;
  s += tiles(c, css, P, ky, t.tiles, 50);
  s += text(c, 80, ky + 86, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export function couverture(t, rtl) {
  const c = ctx(rtl); const P = 'rw'; const css = []; const H = 716;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const py = 164, pw = 490, rh = 85, ch = 60, rw = pw / 4; const ph = rh * 2 + ch;
  const drawPlan = (k, px, p, at0) => {
    let g = `<g style="animation:${show(css, P, `${k}l`, at0)}">` + text(c, px, py - 12, p.label, { size: 9, font: 'mono', fill: C.fg35, letter: 1.2, upper: true }) + rect(c, px, py, pw, ph, { stroke: C.line2, fill: 'none' })
      + text(c, px + pw / 2, py + rh + ch / 2 + 20, p.corridor, { size: 8, font: 'mono', fill: C.fg35, anchor: 'middle' }) + '</g>';
    // coverage rings, clipped to the plan
    g += `<clipPath id="${P}-c${k}"><rect x="${c.RX(px, pw)}" y="${py}" width="${pw}" height="${ph}"/></clipPath><g clip-path="url(#${P}-c${k})">`;
    p.aps.forEach((ap, ai) => {
      ap.radii.forEach((r, ri) => { g += `<circle cx="${c.X(px + ap.x)}" cy="${py + rh + ch / 2}" r="${r}" fill="none" stroke="${ri === 0 ? C.accent : C.fg35}" stroke-width="1" stroke-dasharray="${ri === 0 ? '' : '2 5'}" style="transform-box:fill-box;transform-origin:center;animation:${ring(css, P, `${k}r${ai}${ri}`, at0 + 1.5 + ri * 1.2, 3)}"/>`; });
    });
    g += '</g>';
    p.aps.forEach((ap, ai) => { g += `<g style="animation:${show(css, P, `${k}a${ai}`, at0 + 1)}">` + circle(c, px + ap.x, py + rh + ch / 2, 5, { fill: C.accent }) + text(c, px + ap.x, py + rh + ch / 2 - 11, ap.name, { size: 8, font: 'mono', fill: C.accent, anchor: 'middle' }) + '</g>'; });
    // rooms: 4 on top, 4 below
    p.rooms.forEach((r, i) => {
      const col = i % 4; const top = i < 4; const x = px + col * rw; const y = top ? py : py + rh + ch; const weak = r.v < t.threshold;
      g += `<g style="animation:${show(css, P, `${k}m${i}`, at0 + 6 + i * 0.7)}">` + rect(c, x, y, rw, rh, { stroke: weak ? C.accent : C.line2, fill: weak ? 'rgba(40,28,6,0.72)' : 'rgba(0,0,0,0.62)' })
        + text(c, x + 9, y + 19, r.name, { size: 9, fill: C.fg70 }) + text(c, x + 9, y + 44, I(`−${Math.abs(r.v)}`), { size: 15, font: 'mono', fill: weak ? C.accent : C.fg, weight: 500 })
        + text(c, x + 9, y + 62, r.note, { size: 8, font: 'mono', fill: weak ? C.accent : C.fg55 }) + '</g>';
    });
    // verdict under the plan
    g += `<g style="animation:${show(css, P, `${k}v`, at0 + 12)}">` + rect(c, px, py + ph + 10, pw, 50, { stroke: p.bad ? C.accent : C.line2, fill: p.bad ? TINT : C.fill }) + text(c, px + 12, py + ph + 30, p.verdict, { size: 10.5, fill: p.bad ? C.accent : C.fg, weight: 500 }) + text(c, px + 12, py + ph + 46, p.verdict2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>';
    return g;
  };
  s += drawPlan('a', 80, t.before, 4) + drawPlan('b', 630, t.after, 22);
  // scale: the eight rooms against the threshold, before and after
  const sy = py + ph + 86; const X = (v) => 190 + ((v + 90) / 50) * 930;
  s += `<g style="animation:${show(css, P, 'ax', 40)}">` + line(c, 190, sy + 44, 1120, sy + 44, { stroke: C.line2 });
  [-90, -80, -70, -60, -50, -40].forEach((v) => { s += line(c, X(v), sy + 40, X(v), sy + 48, { stroke: C.line2 }) + text(c, X(v), sy + 60, I(`−${Math.abs(v)}`), { size: 8, font: 'mono', fill: C.fg35, anchor: 'middle' }); });
  s += line(c, X(t.threshold), sy - 4, X(t.threshold), sy + 44, { stroke: C.accent, dash: '3 3' }) + text(c, X(t.threshold), sy - 9, t.thrLabel, { size: 8.5, font: 'mono', fill: C.accent, anchor: 'middle' })
    + text(c, 80, sy + 12, t.before.short, { size: 9, font: 'mono', fill: C.fg55 }) + text(c, 80, sy + 32, t.after.short, { size: 9, font: 'mono', fill: C.fg55 }) + text(c, 80, sy + 60, t.unit, { size: 8, font: 'mono', fill: C.fg35 }) + '</g>';
  t.before.rooms.forEach((r, i) => { const weak = r.v < t.threshold; s += `<g style="animation:${show(css, P, `sa${i}`, 42 + i * 0.6)}">` + circle(c, X(r.v), sy + 9, 5, { fill: 'none', stroke: weak ? C.accent : C.fg70, sw: 1.6 }) + '</g>'; });
  t.after.rooms.forEach((r, i) => { s += `<g style="animation:${show(css, P, `sb${i}`, 48 + i * 0.6)}">` + circle(c, X(r.v), sy + 29, 5, { fill: C.fg, stroke: C.fg, sw: 1 }) + '</g>'; });
  const ky = sy + 76;
  s += tiles(c, css, P, ky, t.tiles, 54);
  s += text(c, 80, ky + 86, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

const NET = (n) => I(`10.20.${n}.0/24`);
const ROOMS_BEFORE = [-48, -61, -72, -81, -50, -63, -74, -84];
const ROOMS_AFTER = [-52, -49, -50, -54, -53, -50, -51, -56];
const rooms = (names, vals, notes) => names.map((name, i) => ({ name, v: vals[i], note: notes[i] }));
const APS_BEFORE = (name) => [{ x: 22, name, radii: [120, 240, 360] }];
const APS_AFTER = (name) => [{ x: 122.5, name, radii: [95, 180] }, { x: 367.5, name, radii: [95, 180] }];

export const STRINGS = {
  fr: {
    plan: {
      title: 'Le réseau dessiné : deux liens internet, un pare-feu, trois switchs, six réseaux séparés',
      alt: 'Plan du réseau d’un siège et de son dépôt : un lien principal en fibre et un lien de secours 4G arrivent sur un pare-feu, relié à la baie principale (switch A 48 ports PoE+, switch B 24 ports, NAS et serveur, onduleur) puis par fibre sur 140 m au coffret du dépôt (switch C 24 ports PoE+). Six réseaux séparés : postes, téléphonie, serveurs et imprimantes, caméras et pointeuses, invités, administration. À 08:40 le lien principal est coupé et le secours prend le relais en 20 secondes.',
      header: 'Exemple construit · siège et dépôt · 30 postes, 96 prises posées et testées, 58 équipements branchés, 356 W en PoE',
      main: { title: 'Lien principal · fibre', sub: 'opérateur A', state: 'coupé à 08:40' },
      backup: { title: 'Lien de secours · 4G', sub: 'opérateur B, autre réseau', state: 'actif à 08:40:20' },
      fw: { title: 'Pare-feu', sub: 'sonde chaque lien toutes les 5 s', rows: [{ l: 'Bascule', v: '20 s', hot: true }, { l: 'Priorité', v: 'caisse, voix' }] },
      baie: { title: 'Baie principale · bureaux', sub: '3 panneaux de 24 · 72 prises', rows: [{ l: 'Switch A · 48 ports PoE+', v: '252 / 370 W' }, { l: 'Switch B · 24 ports', v: 'serveurs, liens' }, { l: 'NAS et serveur', v: 'réseau 30' }, { l: 'Onduleur', v: '14 min mesurées', hot: true }] },
      depot: { title: 'Coffret dépôt', sub: '1 panneau de 24 · 24 prises', rows: [{ l: 'Switch C · 24 PoE+', v: '104 / 195 W' }, { l: 'Liaison', v: 'fibre optique', hot: true }] },
      fibre: '140 m',
      vlanLabel: 'Six réseaux séparés sur les mêmes câbles',
      vlans: [
        { id: 'VLAN 10', name: 'Postes', net: NET(10), what: '30 postes, 4 écrans de salle de réunion', rule: 'serveurs et internet' },
        { id: 'VLAN 20', name: 'Téléphonie', net: NET(20), what: '30 téléphones IP, le poste branché derrière', rule: 'voix prioritaire' },
        { id: 'VLAN 30', name: 'Serveurs et imprimantes', net: NET(30), what: 'NAS, serveur, 6 imprimantes', rule: 'joignables depuis les postes' },
        { id: 'VLAN 40', name: 'Caméras et pointeuses', net: NET(40), what: '10 caméras, 2 pointeuses, enregistreur', rule: 'aucun accès à internet' },
        { id: 'VLAN 50', name: 'Invités', net: NET(50), what: 'Wi-Fi des visiteurs', rule: 'internet seul, rien d’autre', hot: true },
        { id: 'VLAN 99', name: 'Administration', net: NET(99), what: '3 switchs, 6 bornes Wi-Fi, pare-feu', rule: 'deux comptes nommés' },
      ],
      tiles: [
        { big: '96 prises', l1: 'numérotées aux deux bouts, testées une à une', l2: '88 utiles · 8 de réserve · 4 panneaux de 24' },
        { big: '6 réseaux', l1: 'un visiteur ne voit ni les caméras ni le serveur', l2: 'les règles entre réseaux sont écrites au pare-feu' },
        { big: '20 s', l1: 'entre la coupure de la fibre et le secours 4G', l2: 'caisse et téléphonie d’abord, invités coupés', hot: true },
      ],
      rule: 'Le réseau tient parce qu’il est dessiné : chaque prise a un numéro, chaque équipement a son réseau,',
      rule2: 'chaque lien a son secours, et la bascule a été provoquée avant la signature.',
      note: 'Exemple construit · puissances, durées et adresses sont celles de l’exemple, pas un relevé.',
    },
    couverture: {
      title: 'Le Wi-Fi mesuré : une box au fond du couloir contre deux bornes câblées par niveau',
      alt: 'Deux plans du même étage de huit pièces. Avant : une box d’opérateur au bout du couloir, signal de −48 dBm à l’accueil à −84 dBm en salle de réunion, quatre pièces sur huit sous le repère de −67 dBm. Après : deux bornes câblées au plafond du couloir, de −49 à −56 dBm, huit pièces sur huit au-dessus du repère. Une échelle place les huit pièces avant et après contre le repère.',
      header: 'Exemple construit · étage de bureaux, huit pièces · signal mesuré au téléphone dans chaque pièce, porte fermée',
      threshold: -67, thrLabel: `repère ${I('−67 dBm')}`, unit: 'dBm',
      before: { label: 'Avant · la box de l’opérateur au bout du couloir', short: 'avant', corridor: 'couloir', bad: true, aps: APS_BEFORE('box'),
        rooms: rooms(['Accueil', 'Comptabilité', 'Commercial', 'Direction', 'Caisse', 'Achats', 'Logistique', 'Salle de réunion'], ROOMS_BEFORE, ['bon', 'correct', 'faible', 'la visio coupe', 'bon', 'correct', 'faible', 'la visio coupe']),
        verdict: '4 pièces sur 8 sous le repère', verdict2: 'un répéteur n’ajoute pas de signal : il répète un signal déjà faible' },
      after: { label: 'Après · deux bornes câblées au plafond du couloir', short: 'après', corridor: 'couloir', bad: false, aps: APS_AFTER('borne'),
        rooms: rooms(['Accueil', 'Comptabilité', 'Commercial', 'Direction', 'Caisse', 'Achats', 'Logistique', 'Salle de réunion'], ROOMS_AFTER, ['bon', 'bon', 'bon', 'bon', 'bon', 'bon', 'bon', 'la visio tient']),
        verdict: '8 pièces sur 8 au-dessus du repère', verdict2: 'chaque borne a son câble, son port PoE et son canal' },
      tiles: [
        { big: I('−67 dBm'), l1: 'repère d’usage pour la voix et la visio sur Wi-Fi', l2: 'plus le chiffre est proche de zéro, plus le signal est fort' },
        { big: '2 bornes par niveau', l1: 'câblées, au plafond, placées d’après les mesures', l2: '0 répéteur · alimentées par le switch (PoE)' },
        { big: '1 mesure par pièce', l1: 'remise par écrit à la recette, avant et après', l2: 'une pièce sous le repère = une borne déplacée', hot: true },
      ],
      rule: 'Le Wi-Fi ne se règle pas avec une box plus puissante : il se règle avec des bornes câblées,',
      rule2: 'placées là où sont les gens, et une mesure dans chaque pièce avant de signer.',
      note: 'Exemple construit · les valeurs sont celles de l’exemple ; les murs, les portes et le mobilier changent tout.',
    },
  },
  en: {
    plan: {
      title: 'The network, drawn: two internet links, one firewall, three switches, six separated networks',
      alt: 'Network plan of a head office and its warehouse: a main fibre link and a 4G backup link reach a firewall, connected to the main cabinet (switch A 48 ports PoE+, switch B 24 ports, NAS and server, UPS) then by fibre over 140 m to the warehouse cabinet (switch C 24 ports PoE+). Six separated networks: workstations, telephony, servers and printers, cameras and time clocks, guests, administration. At 08:40 the main link is cut and the backup takes over in 20 seconds.',
      header: 'Constructed example · head office and warehouse · 30 workstations, 96 outlets installed and tested, 58 devices connected, 356 W of PoE',
      main: { title: 'Main link · fibre', sub: 'operator A', state: 'cut at 08:40' },
      backup: { title: 'Backup link · 4G', sub: 'operator B, another network', state: 'active at 08:40:20' },
      fw: { title: 'Firewall', sub: 'probes each link every 5 s', rows: [{ l: 'Failover', v: '20 s', hot: true }, { l: 'Priority', v: 'till, voice' }] },
      baie: { title: 'Main cabinet · offices', sub: '3 panels of 24 · 72 outlets', rows: [{ l: 'Switch A · 48 ports PoE+', v: '252 / 370 W' }, { l: 'Switch B · 24 ports', v: 'servers, uplinks' }, { l: 'NAS and server', v: 'network 30' }, { l: 'UPS', v: '14 min measured', hot: true }] },
      depot: { title: 'Warehouse cabinet', sub: '1 panel of 24 · 24 outlets', rows: [{ l: 'Switch C · 24 PoE+', v: '104 / 195 W' }, { l: 'Run', v: 'optical fibre', hot: true }] },
      fibre: '140 m',
      vlanLabel: 'Six separated networks on the same cables',
      vlans: [
        { id: 'VLAN 10', name: 'Workstations', net: NET(10), what: '30 workstations, 4 meeting-room screens', rule: 'servers and internet' },
        { id: 'VLAN 20', name: 'Telephony', net: NET(20), what: '30 IP phones, the workstation plugged behind', rule: 'voice first' },
        { id: 'VLAN 30', name: 'Servers and printers', net: NET(30), what: 'NAS, server, 6 printers', rule: 'reachable from workstations' },
        { id: 'VLAN 40', name: 'Cameras and time clocks', net: NET(40), what: '10 cameras, 2 time clocks, recorder', rule: 'no internet access' },
        { id: 'VLAN 50', name: 'Guests', net: NET(50), what: 'Visitor Wi-Fi', rule: 'internet only, nothing else', hot: true },
        { id: 'VLAN 99', name: 'Administration', net: NET(99), what: '3 switches, 6 access points, firewall', rule: 'two named accounts' },
      ],
      tiles: [
        { big: '96 outlets', l1: 'numbered at both ends, tested one by one', l2: '88 in use · 8 spare · 4 panels of 24' },
        { big: '6 networks', l1: 'a visitor sees neither the cameras nor the server', l2: 'rules between networks are written on the firewall' },
        { big: '20 s', l1: 'between the fibre cut and the 4G backup', l2: 'till and telephony first, guests cut off', hot: true },
      ],
      rule: 'The network holds because it is drawn: every outlet has a number, every device has its network,',
      rule2: 'every link has its backup, and the failover was provoked before sign-off.',
      note: 'Constructed example · powers, durations and addresses belong to the example, not to a survey.',
    },
    couverture: {
      title: 'Wi-Fi, measured: one box at the end of the corridor against two wired access points per floor',
      alt: 'Two plans of the same eight-room floor. Before: an operator box at the end of the corridor, signal from −48 dBm at reception to −84 dBm in the meeting room, four rooms out of eight below the −67 dBm mark. After: two wired access points on the corridor ceiling, −49 to −56 dBm, eight rooms out of eight above the mark. A scale places the eight rooms before and after against the mark.',
      header: 'Constructed example · office floor, eight rooms · signal measured with a phone in each room, door closed',
      threshold: -67, thrLabel: `mark ${I('−67 dBm')}`, unit: 'dBm',
      before: { label: 'Before · the operator box at the end of the corridor', short: 'before', corridor: 'corridor', bad: true, aps: APS_BEFORE('box'),
        rooms: rooms(['Reception', 'Accounting', 'Sales', 'Management', 'Till', 'Purchasing', 'Logistics', 'Meeting room'], ROOMS_BEFORE, ['good', 'fair', 'weak', 'video calls drop', 'good', 'fair', 'weak', 'video calls drop']),
        verdict: '4 rooms out of 8 below the mark', verdict2: 'a repeater adds no signal: it repeats a signal that is already weak' },
      after: { label: 'After · two wired access points on the corridor ceiling', short: 'after', corridor: 'corridor', bad: false, aps: APS_AFTER('AP'),
        rooms: rooms(['Reception', 'Accounting', 'Sales', 'Management', 'Till', 'Purchasing', 'Logistics', 'Meeting room'], ROOMS_AFTER, ['good', 'good', 'good', 'good', 'good', 'good', 'good', 'video calls hold']),
        verdict: '8 rooms out of 8 above the mark', verdict2: 'each access point has its cable, its PoE port and its channel' },
      tiles: [
        { big: I('−67 dBm'), l1: 'a common design mark for voice and video on Wi-Fi', l2: 'the closer the figure is to zero, the stronger the signal' },
        { big: '2 access points per floor', l1: 'wired, on the ceiling, placed from the measurements', l2: '0 repeaters · powered by the switch (PoE)' },
        { big: '1 measurement per room', l1: 'handed over in writing at acceptance, before and after', l2: 'a room below the mark = an access point moved', hot: true },
      ],
      rule: 'Wi-Fi is not fixed with a more powerful box: it is fixed with wired access points,',
      rule2: 'placed where people are, and one measurement in every room before signing.',
      note: 'Constructed example · the values belong to the example; walls, doors and furniture change everything.',
    },
  },
  ar: {
    plan: {
      title: 'الشبكة مرسومة: خطّا إنترنت، جدار حماية، ثلاثة مبدّلات، ست شبكات معزولة',
      alt: 'مخطط شبكة مقر ومستودعه: خط رئيسي بالألياف وخط احتياطي 4G يصلان إلى جدار حماية موصول بالخزانة الرئيسية (مبدّل A بـ 48 منفذاً PoE+، مبدّل B بـ 24 منفذاً، NAS وخادم، مزوّد طاقة غير منقطعة) ثم بالألياف على 140 متراً إلى خزانة المستودع (مبدّل C بـ 24 منفذاً PoE+). ست شبكات معزولة: الحواسيب، الهاتف، الخوادم والطابعات، الكاميرات وأجهزة البصمة، الضيوف، الإدارة التقنية. عند 08:40 ينقطع الخط الرئيسي ويتولى الاحتياطي في 20 ثانية.',
      header: `مثال مركَّب · مقر ومستودع · 30 حاسوباً، 96 مأخذاً مركَّباً ومختبَراً، 58 جهازاً موصولاً، ${I('356 W')} عبر ${I('PoE')}`,
      main: { title: 'الخط الرئيسي · ألياف', sub: 'المتعامل أ', state: `انقطع عند ${I('08:40')}` },
      backup: { title: `الخط الاحتياطي · ${I('4G')}`, sub: 'المتعامل ب، شبكة أخرى', state: `نشط عند ${I('08:40:20')}` },
      fw: { title: 'جدار الحماية', sub: 'يفحص كل خط كل 5 ثوانٍ', rows: [{ l: 'التحويل', v: '20 ثانية', hot: true }, { l: 'الأولوية', v: 'الصندوق، الصوت' }] },
      baie: { title: 'الخزانة الرئيسية · المكاتب', sub: '3 لوحات من 24 · 72 مأخذاً', rows: [{ l: `المبدّل ${I('A')} · 48 منفذاً ${I('PoE+')}`, v: I('252 / 370 W') }, { l: `المبدّل ${I('B')} · 24 منفذاً`, v: 'خوادم، وصلات' }, { l: `${I('NAS')} وخادم`, v: 'الشبكة 30' }, { l: 'مزوّد الطاقة', v: '14 دقيقة مقاسة', hot: true }] },
      depot: { title: 'خزانة المستودع', sub: 'لوحة من 24 · 24 مأخذاً', rows: [{ l: `المبدّل ${I('C')} · 24 ${I('PoE+')}`, v: I('104 / 195 W') }, { l: 'الوصلة', v: 'ألياف بصرية', hot: true }] },
      fibre: I('140 m'),
      vlanLabel: 'ست شبكات معزولة على الكوابل نفسها',
      vlans: [
        { id: I('VLAN 10'), name: 'الحواسيب', net: NET(10), what: '30 حاسوباً، 4 شاشات قاعات اجتماع', rule: 'الخوادم والإنترنت' },
        { id: I('VLAN 20'), name: 'الهاتف', net: NET(20), what: `30 هاتف ${I('IP')}، والحاسوب موصول خلفه`, rule: 'الصوت أولاً' },
        { id: I('VLAN 30'), name: 'الخوادم والطابعات', net: NET(30), what: `${I('NAS')}، خادم، 6 طابعات`, rule: 'تُبلَغ من الحواسيب' },
        { id: I('VLAN 40'), name: 'الكاميرات وأجهزة البصمة', net: NET(40), what: '10 كاميرات، جهازا بصمة، مسجِّل', rule: 'لا وصول إلى الإنترنت' },
        { id: I('VLAN 50'), name: 'الضيوف', net: NET(50), what: 'واي فاي الزوار', rule: 'الإنترنت فقط، لا شيء غيره', hot: true },
        { id: I('VLAN 99'), name: 'الإدارة التقنية', net: NET(99), what: '3 مبدّلات، 6 نقاط وصول، جدار الحماية', rule: 'حسابان باسميهما' },
      ],
      tiles: [
        { big: '96 مأخذاً', l1: 'مرقَّمة من الطرفين، مختبَرة واحداً واحداً', l2: '88 مستعملة · 8 احتياطية · 4 لوحات من 24' },
        { big: '6 شبكات', l1: 'الزائر لا يرى الكاميرات ولا الخادم', l2: 'القواعد بين الشبكات مكتوبة في جدار الحماية' },
        { big: '20 ثانية', l1: `بين انقطاع الألياف وخط ${I('4G')} الاحتياطي`, l2: 'الصندوق والهاتف أولاً، والضيوف مقطوعون', hot: true },
      ],
      rule: 'الشبكة تصمد لأنها مرسومة: لكل مأخذ رقم، ولكل جهاز شبكته،',
      rule2: 'ولكل خط احتياطيُّه، والتحويل جُرِّب عمداً قبل التوقيع.',
      note: 'مثال مركَّب · القدرات والمدد والعناوين خاصة بالمثال، وليست قياساً ميدانياً.',
    },
    couverture: {
      title: 'الواي فاي مقاساً: علبة في آخر الرواق مقابل نقطتي وصول موصولتين بالكابل في كل طابق',
      alt: 'مخططان للطابق نفسه بثماني غرف. قبل: علبة المتعامل في آخر الرواق، الإشارة من −48 dBm في الاستقبال إلى −84 dBm في قاعة الاجتماعات، أربع غرف من ثمانٍ تحت علامة −67 dBm. بعد: نقطتا وصول موصولتان بالكابل في سقف الرواق، من −49 إلى −56 dBm، ثماني غرف من ثمانٍ فوق العلامة. سلّم يضع الغرف الثماني قبل وبعد مقابل العلامة.',
      header: 'مثال مركَّب · طابق مكاتب، ثماني غرف · الإشارة مقاسة بالهاتف في كل غرفة والباب مغلق',
      threshold: -67, thrLabel: `العلامة ${I('−67 dBm')}`, unit: I('dBm'),
      before: { label: 'قبل · علبة المتعامل في آخر الرواق', short: 'قبل', corridor: 'الرواق', bad: true, aps: APS_BEFORE('العلبة'),
        rooms: rooms(['الاستقبال', 'المحاسبة', 'التجاري', 'المديرية', 'الصندوق', 'المشتريات', 'اللوجستيك', 'قاعة الاجتماعات'], ROOMS_BEFORE, ['جيدة', 'مقبولة', 'ضعيفة', 'المكالمة تنقطع', 'جيدة', 'مقبولة', 'ضعيفة', 'المكالمة تنقطع']),
        verdict: '4 غرف من 8 تحت العلامة', verdict2: 'المكرِّر لا يضيف إشارة: يكرّر إشارة ضعيفة أصلاً' },
      after: { label: 'بعد · نقطتا وصول موصولتان بالكابل في سقف الرواق', short: 'بعد', corridor: 'الرواق', bad: false, aps: APS_AFTER('نقطة'),
        rooms: rooms(['الاستقبال', 'المحاسبة', 'التجاري', 'المديرية', 'الصندوق', 'المشتريات', 'اللوجستيك', 'قاعة الاجتماعات'], ROOMS_AFTER, ['جيدة', 'جيدة', 'جيدة', 'جيدة', 'جيدة', 'جيدة', 'جيدة', 'المكالمة تصمد']),
        verdict: '8 غرف من 8 فوق العلامة', verdict2: `لكل نقطة وصول كابلها ومنفذ ${I('PoE')} وقناتها` },
      tiles: [
        { big: I('−67 dBm'), l1: 'علامة شائعة للصوت والفيديو عبر الواي فاي', l2: 'كلما اقترب الرقم من الصفر كانت الإشارة أقوى' },
        { big: 'نقطتا وصول لكل طابق', l1: 'موصولتان بالكابل، في السقف، موضوعتان حسب القياس', l2: `دون أي مكرِّر · تتغذيان من المبدّل (${I('PoE')})` },
        { big: 'قياس واحد لكل غرفة', l1: 'يُسلَّم مكتوباً عند الاستلام، قبل وبعد', l2: 'غرفة تحت العلامة = نقطة وصول تُنقَل', hot: true },
      ],
      rule: 'الواي فاي لا يُصلَح بعلبة أقوى: يُصلَح بنقاط وصول موصولة بالكابل،',
      rule2: 'موضوعة حيث يوجد الناس، وبقياس في كل غرفة قبل التوقيع.',
      note: 'مثال مركَّب · القيم خاصة بالمثال؛ الجدران والأبواب والأثاث تغيّر كل شيء.',
    },
  },
};
