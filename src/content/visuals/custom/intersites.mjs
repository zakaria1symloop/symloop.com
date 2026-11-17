// Bespoke animated figures for the 2027 "interconnecter deux sites distants en
// Algérie" post.
//  carte():  three sites drawn side by side (branch, head office, warehouse),
//            each with its own address plan, links and firewall; two encrypted
//            tunnels draw themselves between them; below, what each tunnel
//            carries in each direction, what blocked everything before (the same
//            address plan three times), and a failover line; three tiles.
//  allers(): why the software is slow at the branch: the same screen opened five
//            ways, as growing horizontal bars in seconds (round trips times
//            delay), next to the count that explains it; three tiles.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function draw(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{stroke-dashoffset:1000}${(at + dur).toFixed(1)}%,100%{stroke-dashoffset:0}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function growX(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
const I = (x) => `⁦${x}⁩`;
const TINT = 'rgba(242,181,68,0.06)';

function box(c, css, P, id, at, x, y, w, h, t, accent) {
  let s = `<g style="animation:${show(css, P, id, at)}">` + rect(c, x, y, w, h, { stroke: accent ? C.accent : C.line2, fill: accent ? TINT : C.fill })
    + text(c, x + 12, y + 20, t.title, { size: 10.5, fill: accent ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, y + 34, t.sub, { size: 8, font: 'mono', fill: C.fg55 });
  (t.rows || []).forEach((r, i) => { const yy = y + 54 + i * 18; s += text(c, x + 12, yy, r.l, { size: 9, fill: C.fg70 }) + text(c, x + w - 12, yy, r.v, { size: 9, font: 'mono', fill: r.hot ? C.accent : C.fg, anchor: 'end', weight: r.hot ? 500 : 400 }); });
  return s + '</g>';
}
function tiles(c, css, P, ky, ts, at0) {
  let s = '';
  ts.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, at0 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? TINT : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  return s;
}
const motionOff = (P) => `@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"],svg line[style*="${P}-"],svg rect[style*="${P}-"]{animation:none !important}}`;

export function carte(t, rtl) {
  const c = ctx(rtl); const P = 'ic'; const css = []; const H = 712;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  // three sites: branch (left), head office (centre), warehouse (right)
  const sy = 150, sh = 134, sw = 280; const xs = [80, 460, 840];
  t.sites.forEach((st, i) => { s += box(c, css, P, `s${i}`, 4 + i * 2.5, xs[i], sy, sw, sh, st, i === 1); });
  // two tunnels, drawn
  [[360, 460, 0], [740, 840, 1]].forEach(([x1, x2, i]) => {
    const y = sy + sh / 2; const at = 12 + i * 3;
    s += `<line x1="${c.X(x1)}" y1="${y}" x2="${c.X(x2)}" y2="${y}" stroke="${C.accent}" stroke-width="3" pathLength="1000" stroke-dasharray="1000" style="stroke-dashoffset:0;animation:${draw(css, P, `t${i}`, at, 2.5)}"/>`;
    s += `<g style="animation:${show(css, P, `tl${i}`, at + 2.5)}">` + text(c, (x1 + x2) / 2, y - 10, t.tunnel, { size: 8.5, font: 'mono', fill: C.accent, anchor: 'middle' }) + text(c, (x1 + x2) / 2, y + 18, t.delays[i], { size: 9, font: 'mono', fill: C.fg, anchor: 'middle' }) + '</g>';
  });
  // what the tunnels carry, and what blocked everything before
  const by = sy + sh + 16;
  s += box(c, css, P, 'tun', 20, 80, by, 620, 54 + t.flows.rows.length * 18 + 6, t.flows, false);
  s += box(c, css, P, 'bef', 26, 720, by, 400, 54 + t.before.rows.length * 18 + 6, t.before, true);
  const fy = by + 54 + 5 * 18 + 6 + 12;
  s += `<g style="animation:${show(css, P, 'fo', 34)}">` + rect(c, 80, fy, 1040, 34, { stroke: C.accent, fill: TINT }) + text(c, 92, fy + 22, t.failover, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const ky = fy + 34 + 14;
  s += tiles(c, css, P, ky, t.tiles, 40);
  s += text(c, 80, ky + 86, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export function allers(t, rtl) {
  const c = ctx(rtl); const P = 'ia'; const css = []; const H = 664;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  // the count (left)
  s += box(c, css, P, 'calc', 4, 80, 150, 340, 54 + t.calc.rows.length * 18 + 6, t.calc, false);
  const ny = 150 + 54 + t.calc.rows.length * 18 + 6 + 22;
  s += `<g style="animation:${show(css, P, 'def', 8)}">` + t.def.map((l, i) => text(c, 80, ny + i * 15, l, { size: 9, font: 'mono', fill: C.fg55 })).join('') + '</g>';
  // five ways to open the same screen (right)
  const bx = 460, bwMax = 560, rowH = 66, by = 148; const max = Math.max(...t.ways.map((w) => w.s));
  t.ways.forEach((w, i) => {
    const y = by + i * rowH; const at = 10 + i * 5; const bw = Math.max(6, (w.s / max) * bwMax);
    s += `<g style="animation:${show(css, P, `w${i}`, at)}">` + text(c, bx, y + 16, w.title, { size: 10.5, fill: w.hot ? C.accent : C.fg, weight: 500 }) + text(c, bx, y + 31, w.sub, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>';
    s += `<rect x="${c.RX(bx, bw)}" y="${y + 39}" width="${bw.toFixed(1)}" height="12" fill="${w.hot ? C.accent : C.fg}" style="transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'};animation:${growX(css, P, `b${i}`, at + 0.5, 2.5)}"/>`;
    s += `<g style="animation:${show(css, P, `v${i}`, at + 3)}">` + text(c, bx + bw + 10, y + 50, w.v, { size: 11, font: 'mono', fill: w.hot ? C.accent : C.fg, weight: 500 }) + '</g>';
  });
  const ky = by + t.ways.length * rowH + 14;
  s += tiles(c, css, P, ky, t.tiles, 40);
  s += text(c, 80, ky + 86, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

const N = (x) => I(x);
export const STRINGS = {
  fr: {
    carte: {
      title: 'Trois sites, deux tunnels : le siège, l’agence et le dépôt sur un même réseau',
      alt: 'Trois sites reliés : l’agence d’Oran (4 postes, plan 10.21.0.0/16, lien 50 descendant et 20 montant), le siège d’Alger (22 postes, plan 10.20.0.0/16, lien 100 et 50), le dépôt de Sétif (4 postes, plan 10.22.0.0/16, lien 20 et 10). Deux tunnels chiffrés partent du siège : 20 ms vers Oran, 16 ms vers Sétif. Le débit entre deux sites est borné par le plus petit des deux : débit montant de celui qui envoie, descendant de celui qui reçoit. Avant, les trois sites utilisaient le même plan 192.168.1.0/24 et ne pouvaient pas être reliés. Si le lien d’Oran tombe, le tunnel remonte sur le secours 4G en 25 secondes.',
      header: 'Exemple construit · distributeur · siège à Alger, agence à Oran, dépôt à Sétif · 30 postes · tunnels chiffrés à travers internet',
      tunnel: 'tunnel chiffré', delays: [N('20 ms'), N('16 ms')],
      sites: [
        { title: 'Agence · Oran', sub: `plan d’adresses ${N('10.21.0.0/16')}`, rows: [{ l: 'Postes', v: '4' }, { l: 'Lien principal', v: N('50 ↓ · 20 ↑ Mbit/s') }, { l: 'Secours', v: '4G' }, { l: 'Pare-feu', v: 'ouvre le tunnel' }] },
        { title: 'Siège · Alger', sub: `plan d’adresses ${N('10.20.0.0/16')} · serveur, logiciel de gestion`, rows: [{ l: 'Postes', v: '22' }, { l: 'Lien principal', v: N('100 ↓ · 50 ↑ Mbit/s') }, { l: 'Adresse publique', v: 'fixe', hot: true }, { l: 'Pare-feu', v: 'reçoit les tunnels' }] },
        { title: 'Dépôt · Sétif', sub: `plan d’adresses ${N('10.22.0.0/16')}`, rows: [{ l: 'Postes', v: '4' }, { l: 'Lien principal', v: N('20 ↓ · 10 ↑ Mbit/s') }, { l: 'Secours', v: '4G' }, { l: 'Pare-feu', v: 'ouvre le tunnel' }] },
      ],
      flows: { title: 'Ce que portent les tunnels', sub: 'borné par le plus petit des deux : débit montant de celui qui envoie, descendant de celui qui reçoit', rows: [{ l: 'Oran vers Alger', v: N('20 Mbit/s · 20 ms') }, { l: 'Alger vers Oran', v: N('50 Mbit/s · 20 ms') }, { l: 'Sétif vers Alger', v: N('10 Mbit/s · 16 ms'), hot: true }, { l: 'Alger vers Sétif', v: N('20 Mbit/s · 16 ms') }, { l: 'Sétif vers Oran, en passant par Alger', v: N('10 Mbit/s · 36 ms') }] },
      before: { title: 'Ce qui bloquait tout avant', sub: 'la box de chaque site avec son réglage d’usine', rows: [{ l: 'Siège', v: N('192.168.1.0/24') }, { l: 'Agence', v: N('192.168.1.0/24') }, { l: 'Dépôt', v: N('192.168.1.0/24') }, { l: 'Deux postes, la même adresse', v: 'aucun tunnel possible', hot: true }] },
      failover: `${N('08:40')} le lien d’Oran tombe · ${N('08:40:25')} le tunnel remonte sur le secours 4G · caisse et téléphonie d’abord, le reste attend`,
      tiles: [
        { big: '3 plans d’adresses', l1: 'un par site, sans aucun chevauchement', l2: 'écrits une fois, pour dix ans et dix sites' },
        { big: 'Le plus petit débit montant', l1: 'fixe la vitesse entre deux sites', l2: 'on mesure le lien avant de choisir le logiciel', hot: true },
        { big: N('25 s'), l1: 'pour remonter le tunnel sur le lien de secours', l2: 'provoqué exprès avant la mise en service' },
      ],
      rule: 'Relier des sites, ce n’est pas acheter un « VPN » : c’est un plan d’adresses qui ne se chevauche pas,',
      rule2: 'un pare-feu à chaque bout, un tunnel qui remonte seul, et des règles sur ce que chacun peut joindre.',
      note: 'Exemple construit · débits, délais et adresses sont ceux de l’exemple, pas un relevé.',
    },
    allers: {
      title: 'Pourquoi le logiciel est lent à l’agence : 400 allers-retours, pas le débit',
      alt: 'Le même écran ouvert de cinq façons. Au siège sur le réseau local : 400 allers-retours à 1 ms, 0,4 seconde. À l’agence avec le même logiciel à travers le tunnel : 400 allers-retours à 20 ms, 8 secondes. À l’agence par bureau à distance : 0,5 seconde. À l’agence avec une application web : 6 requêtes, 0,5 seconde. À l’agence avec une copie locale synchronisée : 0,4 seconde.',
      header: 'Exemple construit · le même écran, fiche d’un client et ses commandes · ouvert de cinq façons',
      calc: { title: 'Le compte d’un écran', sub: 'logiciel installé sur le poste, base de données au siège', rows: [{ l: 'Échanges avec la base pour l’écran', v: '400' }, { l: 'Aller-retour au siège', v: N('1 ms') }, { l: 'Aller-retour agence–siège', v: N('20 ms'), hot: true }, { l: 'Débit du tunnel', v: 'sans effet ici' }] },
      def: ['Chaque échange attend sa réponse avant le suivant.', 'Le temps de l’écran = nombre d’échanges × délai.', 'Un lien plus rapide ne change pas le délai.'],
      ways: [
        { title: 'Au siège, sur le réseau local', sub: `400 allers-retours × ${N('1 ms')}`, s: 0.4, v: N('0,4 s') },
        { title: 'À l’agence, le même logiciel à travers le tunnel', sub: `400 allers-retours × ${N('20 ms')}`, s: 8, v: N('8 s'), hot: true },
        { title: 'À l’agence, par bureau à distance', sub: 'le logiciel tourne au siège, seul l’écran voyage', s: 0.5, v: N('0,5 s') },
        { title: 'À l’agence, application web', sub: `6 requêtes × ${N('20 ms')}, le reste se fait au serveur`, s: 0.5, v: N('0,5 s') },
        { title: 'À l’agence, copie locale synchronisée', sub: 'lecture sur place, envoi au siège en arrière-plan', s: 0.4, v: N('0,4 s') },
      ],
      tiles: [
        { big: '× 20', l1: 'le même écran, vingt fois plus lent à l’agence', l2: 'aucun lien plus rapide ne corrige 400 allers-retours', hot: true },
        { big: '3 façons de traverser', l1: 'bureau à distance, application web, copie locale', l2: 'le choix se fait logiciel par logiciel' },
        { big: N('20 ms'), l1: 'mesurés entre l’agence et le siège, pas supposés', l2: 'on mesure avant de promettre' },
      ],
      rule: 'Le tunnel relie les réseaux ; il ne rend pas un logiciel bavard supportable à distance.',
      rule2: 'On choisit, logiciel par logiciel, ce qui voyage : l’écran, quelques requêtes, ou une copie.',
      note: 'Exemple construit · nombre d’échanges et délais sont ceux de l’exemple ; ils se mesurent sur votre logiciel.',
    },
  },
  en: {
    carte: {
      title: 'Three sites, two tunnels: head office, branch and warehouse on one network',
      alt: 'Three sites linked: the Oran branch (4 workstations, plan 10.21.0.0/16, link 50 down and 20 up), the Algiers head office (22 workstations, plan 10.20.0.0/16, link 100 and 50), the Sétif warehouse (4 workstations, plan 10.22.0.0/16, link 20 and 10). Two encrypted tunnels leave the head office: 20 ms to Oran, 16 ms to Sétif. Throughput between two sites is capped by the smaller of the two: upload of the sender, download of the receiver. Before, all three sites used the same 192.168.1.0/24 plan and could not be linked. If the Oran link drops, the tunnel comes back over the 4G backup in 25 seconds.',
      header: 'Constructed example · distributor · head office in Algiers, branch in Oran, warehouse in Sétif · 30 workstations · encrypted tunnels across the internet',
      tunnel: 'encrypted tunnel', delays: [N('20 ms'), N('16 ms')],
      sites: [
        { title: 'Branch · Oran', sub: `address plan ${N('10.21.0.0/16')}`, rows: [{ l: 'Workstations', v: '4' }, { l: 'Main link', v: N('50 ↓ · 20 ↑ Mbit/s') }, { l: 'Backup', v: '4G' }, { l: 'Firewall', v: 'opens the tunnel' }] },
        { title: 'Head office · Algiers', sub: `address plan ${N('10.20.0.0/16')} · server, business software`, rows: [{ l: 'Workstations', v: '22' }, { l: 'Main link', v: N('100 ↓ · 50 ↑ Mbit/s') }, { l: 'Public address', v: 'fixed', hot: true }, { l: 'Firewall', v: 'receives the tunnels' }] },
        { title: 'Warehouse · Sétif', sub: `address plan ${N('10.22.0.0/16')}`, rows: [{ l: 'Workstations', v: '4' }, { l: 'Main link', v: N('20 ↓ · 10 ↑ Mbit/s') }, { l: 'Backup', v: '4G' }, { l: 'Firewall', v: 'opens the tunnel' }] },
      ],
      flows: { title: 'What the tunnels carry', sub: 'capped by the smaller of the two: upload of the sender, download of the receiver', rows: [{ l: 'Oran to Algiers', v: N('20 Mbit/s · 20 ms') }, { l: 'Algiers to Oran', v: N('50 Mbit/s · 20 ms') }, { l: 'Sétif to Algiers', v: N('10 Mbit/s · 16 ms'), hot: true }, { l: 'Algiers to Sétif', v: N('20 Mbit/s · 16 ms') }, { l: 'Sétif to Oran, through Algiers', v: N('10 Mbit/s · 36 ms') }] },
      before: { title: 'What blocked everything before', sub: 'each site’s operator box on its factory setting', rows: [{ l: 'Head office', v: N('192.168.1.0/24') }, { l: 'Branch', v: N('192.168.1.0/24') }, { l: 'Warehouse', v: N('192.168.1.0/24') }, { l: 'Two machines, the same address', v: 'no tunnel possible', hot: true }] },
      failover: `${N('08:40')} the Oran link drops · ${N('08:40:25')} the tunnel comes back over the 4G backup · till and telephony first, the rest waits`,
      tiles: [
        { big: '3 address plans', l1: 'one per site, with no overlap at all', l2: 'written once, for ten years and ten sites' },
        { big: 'The smallest upload speed', l1: 'sets the speed between two sites', l2: 'the link is measured before the software is chosen', hot: true },
        { big: N('25 s'), l1: 'to bring the tunnel back over the backup link', l2: 'provoked on purpose before go-live' },
      ],
      rule: 'Linking sites is not buying “a VPN”: it is an address plan that does not overlap,',
      rule2: 'a firewall at each end, a tunnel that comes back by itself, and rules on what each can reach.',
      note: 'Constructed example · speeds, delays and addresses belong to the example, not to a survey.',
    },
    allers: {
      title: 'Why the software is slow at the branch: 400 round trips, not the bandwidth',
      alt: 'The same screen opened five ways. At head office on the local network: 400 round trips at 1 ms, 0.4 second. At the branch with the same software through the tunnel: 400 round trips at 20 ms, 8 seconds. At the branch by remote desktop: 0.5 second. At the branch with a web application: 6 requests, 0.5 second. At the branch with a synchronised local copy: 0.4 second.',
      header: 'Constructed example · the same screen, a customer record and its orders · opened five ways',
      calc: { title: 'The count for one screen', sub: 'software installed on the workstation, database at head office', rows: [{ l: 'Exchanges with the database for the screen', v: '400' }, { l: 'Round trip at head office', v: N('1 ms') }, { l: 'Round trip branch–head office', v: N('20 ms'), hot: true }, { l: 'Tunnel bandwidth', v: 'no effect here' }] },
      def: ['Each exchange waits for its answer before the next.', 'Screen time = number of exchanges × delay.', 'A faster link does not change the delay.'],
      ways: [
        { title: 'At head office, on the local network', sub: `400 round trips × ${N('1 ms')}`, s: 0.4, v: N('0.4 s') },
        { title: 'At the branch, the same software through the tunnel', sub: `400 round trips × ${N('20 ms')}`, s: 8, v: N('8 s'), hot: true },
        { title: 'At the branch, by remote desktop', sub: 'the software runs at head office, only the screen travels', s: 0.5, v: N('0.5 s') },
        { title: 'At the branch, web application', sub: `6 requests × ${N('20 ms')}, the rest happens on the server`, s: 0.5, v: N('0.5 s') },
        { title: 'At the branch, synchronised local copy', sub: 'read on site, sent to head office in the background', s: 0.4, v: N('0.4 s') },
      ],
      tiles: [
        { big: '× 20', l1: 'the same screen, twenty times slower at the branch', l2: 'no faster link fixes 400 round trips', hot: true },
        { big: '3 ways to cross', l1: 'remote desktop, web application, local copy', l2: 'the choice is made software by software' },
        { big: N('20 ms'), l1: 'measured between branch and head office, not assumed', l2: 'measure before promising' },
      ],
      rule: 'The tunnel links the networks; it does not make chatty software bearable at a distance.',
      rule2: 'You choose, software by software, what travels: the screen, a few requests, or a copy.',
      note: 'Constructed example · number of exchanges and delays belong to the example; they are measured on your software.',
    },
  },
  ar: {
    carte: {
      title: 'ثلاثة مواقع ونفقان: المقر والوكالة والمستودع على شبكة واحدة',
      alt: 'ثلاثة مواقع مربوطة: وكالة وهران (4 حواسيب، مخطط 10.21.0.0/16، خط 50 نزولاً و20 صعوداً)، مقر الجزائر العاصمة (22 حاسوباً، مخطط 10.20.0.0/16، خط 100 و50)، مستودع سطيف (4 حواسيب، مخطط 10.22.0.0/16، خط 20 و10). نفقان مشفَّران ينطلقان من المقر: 20 ميلي ثانية نحو وهران و16 نحو سطيف. التدفق بين موقعين محدود بالأصغر بين الاثنين: صعود المرسِل ونزول المستقبِل. من قبل كانت المواقع الثلاثة تستعمل المخطط نفسه 192.168.1.0/24 ولا يمكن ربطها. إذا سقط خط وهران يعود النفق عبر خط 4G الاحتياطي في 25 ثانية.',
      header: 'مثال مركَّب · موزّع · مقر في الجزائر العاصمة، وكالة في وهران، مستودع في سطيف · 30 حاسوباً · أنفاق مشفَّرة عبر الإنترنت',
      tunnel: 'نفق مشفَّر', delays: [N('20 ms'), N('16 ms')],
      sites: [
        { title: 'الوكالة · وهران', sub: `مخطط العناوين ${N('10.21.0.0/16')}`, rows: [{ l: 'الحواسيب', v: '4' }, { l: 'الخط الرئيسي', v: N('50 ↓ · 20 ↑ Mbit/s') }, { l: 'الاحتياطي', v: N('4G') }, { l: 'جدار الحماية', v: 'يفتح النفق' }] },
        { title: 'المقر · الجزائر العاصمة', sub: `مخطط العناوين ${N('10.20.0.0/16')} · الخادم وبرنامج التسيير`, rows: [{ l: 'الحواسيب', v: '22' }, { l: 'الخط الرئيسي', v: N('100 ↓ · 50 ↑ Mbit/s') }, { l: 'العنوان العمومي', v: 'ثابت', hot: true }, { l: 'جدار الحماية', v: 'يستقبل الأنفاق' }] },
        { title: 'المستودع · سطيف', sub: `مخطط العناوين ${N('10.22.0.0/16')}`, rows: [{ l: 'الحواسيب', v: '4' }, { l: 'الخط الرئيسي', v: N('20 ↓ · 10 ↑ Mbit/s') }, { l: 'الاحتياطي', v: N('4G') }, { l: 'جدار الحماية', v: 'يفتح النفق' }] },
      ],
      flows: { title: 'ما تحمله الأنفاق', sub: 'محدود بالأصغر بين الاثنين: صعود المرسِل ونزول المستقبِل', rows: [{ l: 'من وهران إلى الجزائر', v: N('20 Mbit/s · 20 ms') }, { l: 'من الجزائر إلى وهران', v: N('50 Mbit/s · 20 ms') }, { l: 'من سطيف إلى الجزائر', v: N('10 Mbit/s · 16 ms'), hot: true }, { l: 'من الجزائر إلى سطيف', v: N('20 Mbit/s · 16 ms') }, { l: 'من سطيف إلى وهران، مروراً بالجزائر', v: N('10 Mbit/s · 36 ms') }] },
      before: { title: 'ما كان يمنع كل شيء من قبل', sub: 'علبة المتعامل في كل موقع بإعداد المصنع', rows: [{ l: 'المقر', v: N('192.168.1.0/24') }, { l: 'الوكالة', v: N('192.168.1.0/24') }, { l: 'المستودع', v: N('192.168.1.0/24') }, { l: 'جهازان بالعنوان نفسه', v: 'لا نفق ممكن', hot: true }] },
      failover: `${N('08:40')} يسقط خط وهران · ${N('08:40:25')} يعود النفق عبر خط ${N('4G')} الاحتياطي · الصندوق والهاتف أولاً، والباقي ينتظر`,
      tiles: [
        { big: '3 مخططات عناوين', l1: 'واحد لكل موقع، دون أي تداخل', l2: 'تُكتب مرة واحدة، لعشر سنوات وعشرة مواقع' },
        { big: 'أصغر تدفق صعود', l1: 'يحدّد السرعة بين موقعين', l2: 'يُقاس الخط قبل اختيار البرنامج', hot: true },
        { big: '25 ثانية', l1: 'ليعود النفق عبر الخط الاحتياطي', l2: 'يُجرَّب عمداً قبل التشغيل' },
      ],
      rule: `ربط المواقع ليس شراء «${N('VPN')}»: هو مخطط عناوين لا يتداخل،`,
      rule2: 'وجدار حماية في كل طرف، ونفق يعود وحده، وقواعد لما يستطيع كل واحد بلوغه.',
      note: 'مثال مركَّب · التدفقات والمهل والعناوين خاصة بالمثال، وليست قياساً ميدانياً.',
    },
    allers: {
      title: 'لماذا البرنامج بطيء في الوكالة: 400 ذهاب وإياب، لا التدفق',
      alt: 'الشاشة نفسها مفتوحة بخمس طرق. في المقر على الشبكة المحلية: 400 ذهاب وإياب بـ 1 ميلي ثانية، 0,4 ثانية. في الوكالة بالبرنامج نفسه عبر النفق: 400 ذهاب وإياب بـ 20 ميلي ثانية، 8 ثوانٍ. في الوكالة بسطح المكتب البعيد: 0,5 ثانية. في الوكالة بتطبيق ويب: 6 طلبات، 0,5 ثانية. في الوكالة بنسخة محلية متزامنة: 0,4 ثانية.',
      header: 'مثال مركَّب · الشاشة نفسها، بطاقة زبون وطلبياته · مفتوحة بخمس طرق',
      calc: { title: 'حساب شاشة واحدة', sub: 'برنامج مثبَّت على الحاسوب، وقاعدة البيانات في المقر', rows: [{ l: 'التبادلات مع القاعدة لفتح الشاشة', v: '400' }, { l: 'الذهاب والإياب في المقر', v: N('1 ms') }, { l: 'الذهاب والإياب بين الوكالة والمقر', v: N('20 ms'), hot: true }, { l: 'تدفق النفق', v: 'لا أثر له هنا' }] },
      def: ['كل تبادل ينتظر جوابه قبل التالي.', 'زمن الشاشة = عدد التبادلات × المهلة.', 'خط أسرع لا يغيّر المهلة.'],
      ways: [
        { title: 'في المقر، على الشبكة المحلية', sub: `400 ذهاب وإياب × ${N('1 ms')}`, s: 0.4, v: N('0,4 s') },
        { title: 'في الوكالة، البرنامج نفسه عبر النفق', sub: `400 ذهاب وإياب × ${N('20 ms')}`, s: 8, v: N('8 s'), hot: true },
        { title: 'في الوكالة، بسطح المكتب البعيد', sub: 'البرنامج يعمل في المقر، والشاشة وحدها تسافر', s: 0.5, v: N('0,5 s') },
        { title: 'في الوكالة، تطبيق ويب', sub: `6 طلبات × ${N('20 ms')}، والباقي يتم في الخادم`, s: 0.5, v: N('0,5 s') },
        { title: 'في الوكالة، نسخة محلية متزامنة', sub: 'القراءة في المكان، والإرسال إلى المقر في الخلفية', s: 0.4, v: N('0,4 s') },
      ],
      tiles: [
        { big: N('× 20'), l1: 'الشاشة نفسها، أبطأ عشرين مرة في الوكالة', l2: 'لا خط أسرع يصلح 400 ذهاب وإياب', hot: true },
        { big: '3 طرق للعبور', l1: 'سطح المكتب البعيد، تطبيق ويب، نسخة محلية', l2: 'الاختيار يتم برنامجاً برنامجاً' },
        { big: N('20 ms'), l1: 'مقاسة بين الوكالة والمقر، لا مفترضة', l2: 'نقيس قبل أن نَعِد' },
      ],
      rule: 'النفق يربط الشبكات؛ لكنه لا يجعل برنامجاً كثير التبادل محتملاً عن بعد.',
      rule2: 'نختار، برنامجاً برنامجاً، ما الذي يسافر: الشاشة، أو بضعة طلبات، أو نسخة.',
      note: 'مثال مركَّب · عدد التبادلات والمهل خاصة بالمثال؛ وتُقاس على برنامجكم.',
    },
  },
};
