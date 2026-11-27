// Bespoke animated figures for the 2027 "logiciel transport de marchandises en
// Algérie" post.
//  voyage():  one trip from the shipper's order to the evening invoice: a drawn
//             vertical event line (order, truck and driver assigned with a signed
//             advance, loading with consignment note and photo, departure, arrival
//             and waiting clock, delivery proven, backhaul found, return and
//             expenses settled) and a two-column trip P&L comparing an empty return
//             with a backhaul; three tiles.
//  camions(): the month's board for six trucks: trips, km, share of empty km as a
//             growing bar against a written threshold, revenue, margin; shipper
//             receivables panel, open driver advances and trips without proof of
//             delivery; three tiles.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function draw(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{stroke-dashoffset:1000}${(at + dur).toFixed(1)}%,100%{stroke-dashoffset:0}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function grow(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
const I = (x) => `⁦${x}⁩`;
const NB = ' ';
const n = (x) => I(String(x).replace(/ /g, NB));

function panel(c, css, P, id, at, x, y, w, h, t, accent) {
  let s = `<g style="animation:${show(css, P, id, at)}">` + rect(c, x, y, w, h, { stroke: accent ? C.accent : C.line2, fill: accent ? 'rgba(242,181,68,0.06)' : C.fill }) + text(c, x + 12, y + 20, t.title, { size: 10.5, fill: accent ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, y + 34, t.sub, { size: 8, font: 'mono', fill: C.fg55 });
  t.rows.forEach((r, i) => { const yy = y + 54 + i * 18; s += text(c, x + 12, yy, r.l, { size: 9, fill: C.fg70 }) + text(c, x + w - 12, yy, r.v, { size: 9.5, font: 'mono', fill: r.hot ? C.accent : C.fg, anchor: 'end', weight: r.hot ? 500 : 400 }); });
  return s + '</g>';
}
function tiles(c, css, P, ky, ts, at0) {
  let s = '';
  ts.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, at0 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? 'rgba(242,181,68,0.06)' : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  return s;
}

export function voyage(t, rtl) {
  const c = ctx(rtl); const P = 'tv'; const css = []; const H = 660;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: 'rgba(242,181,68,0.06)' }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  // event line (left)
  const ex = 80, ey = 152; const lineX = ex + 10; const nE = t.events.length; const gap = 36;
  s += text(c, ex, ey - 8, t.eventsLabel, { size: 9, font: 'mono', fill: C.fg35, letter: 1.2, upper: true });
  s += `<line x1="${c.X(lineX)}" y1="${ey + 10}" x2="${c.X(lineX)}" y2="${ey + 10 + (nE - 1) * gap}" stroke="${C.line2}" stroke-width="1.4" pathLength="1000" style="stroke-dashoffset:0;animation:${draw(css, P, 'ln', 3, 11)}"/>`;
  t.events.forEach((ev, i) => {
    const y = ey + 10 + i * gap; const at = 4 + i * 1.2; const hot = ev.hot;
    s += `<g style="animation:${show(css, P, `e${i}`, at)}">` + circle(c, lineX, y, hot ? 6 : 4.5, { fill: hot ? C.accent : C.bg, stroke: hot ? C.accent : C.line2, sw: 1.4 })
      + text(c, ex + 26, y - 3, ev.d, { size: 8.5, font: 'mono', fill: C.fg55 }) + text(c, ex + 104, y - 3, ev.t, { size: 10, fill: hot ? C.accent : C.fg, weight: 500 }) + text(c, ex + 104, y + 11, ev.sub, { size: 8, font: 'mono', fill: C.fg55 }) + '</g>';
  });
  // P&L (right): three columns
  const px = 600, py = 148, pw = 520; const rowsN = t.pl.rows.length; const ph = 62 + rowsN * 19 + 8;
  s += `<g style="animation:${show(css, P, 'pl', 15)}">` + rect(c, px, py, pw, ph, { stroke: C.accent, fill: 'rgba(242,181,68,0.06)' }) + text(c, px + 12, py + 20, t.pl.title, { size: 10.5, fill: C.accent, weight: 500 }) + text(c, px + 12, py + 34, t.pl.sub, { size: 8, font: 'mono', fill: C.fg55 });
  const cA = px + pw - 150, cB = px + pw - 12;
  s += text(c, cA, py + 52, t.pl.colA, { size: 8.5, font: 'mono', fill: C.fg55, anchor: 'end' }) + text(c, cB, py + 52, t.pl.colB, { size: 8.5, font: 'mono', fill: C.accent, anchor: 'end' }) + line(c, px + 12, py + 58, px + pw - 12, py + 58, { stroke: C.line2 });
  t.pl.rows.forEach((r, i) => {
    const y = py + 74 + i * 19; const last = i === rowsN - 1;
    if (last) s += line(c, px + 12, y - 13, px + pw - 12, y - 13, { stroke: C.line2 });
    s += text(c, px + 12, y, r.l, { size: last ? 10 : 9, fill: last ? C.fg : C.fg70, weight: last ? 500 : 400 }) + text(c, cA, y, r.a, { size: last ? 10.5 : 9.5, font: 'mono', fill: C.fg, anchor: 'end', weight: last ? 500 : 400 }) + text(c, cB, y, r.b, { size: last ? 10.5 : 9.5, font: 'mono', fill: last ? C.accent : C.fg, anchor: 'end', weight: last ? 500 : 400 });
  });
  s += '</g>';
  s += panel(c, css, P, 'exp', 17, px, py + ph + 14, pw, 98, t.expenses, false);
  const ky = Math.max(ey + 10 + (nE - 1) * gap + 30, py + ph + 14 + 98 + 16);
  s += tiles(c, css, P, ky, t.tiles, 19);
  s += text(c, 80, ky + 86, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"],svg line[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

export function camions(t, rtl) {
  const c = ctx(rtl); const P = 'tc'; const css = []; const H = 610;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  const sx = 80, hy = 104; const colT = sx + 120, colK = colT + 56, colB = colK + 76; const barW = 130; const colR = colB + barW + 54, colM = colR + 92;
  s += [sx, colT, colK, colB, colR, colM].map((x, i) => text(c, x, hy, t.cols[i], { size: 9, font: 'mono', fill: C.fg35, letter: 1.2, upper: true })).join('') + line(c, sx, hy + 8, colM + 80, hy + 8, { stroke: C.line2 });
  const tx = colB + (t.threshold / 100) * barW;
  s += line(c, tx, hy + 14, tx, hy + 14 + t.rows.length * 44, { stroke: C.accent, dash: '3 3' }) + text(c, tx, hy + 14 + t.rows.length * 44 + 12, t.thrLabel, { size: 8, font: 'mono', fill: C.accent, anchor: 'middle' });
  t.rows.forEach((r, i) => {
    const y = hy + 36 + i * 44; const at = 3 + i * 1.4; const hot = r.empty > t.threshold;
    s += `<g style="animation:${show(css, P, `r${i}`, at)}">` + text(c, sx, y - 2, r.name, { size: 11, fill: hot ? C.accent : C.fg, weight: 500 }) + text(c, sx, y + 12, r.sub, { size: 8, font: 'mono', fill: C.fg55 })
      + text(c, colT, y + 4, r.trips, { size: 10, font: 'mono', fill: C.fg })
      + text(c, colK, y + 4, r.km, { size: 10, font: 'mono', fill: C.fg })
      + text(c, colB + barW + 8, y + 4, r.emptyT, { size: 9.5, font: 'mono', fill: hot ? C.accent : C.fg55 })
      + text(c, colR, y + 4, r.rev, { size: 10, font: 'mono', fill: C.fg })
      + text(c, colM, y + 4, r.margin, { size: 10, font: 'mono', fill: hot ? C.accent : C.fg })
      + line(c, sx, y + 22, colM + 80, y + 22, { stroke: C.line }) + '</g>';
    s += `<g style="transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'};animation:${grow(css, P, `g${i}`, at + 0.4, 1.3)}">` + rect(c, colB, y - 4, Math.max(Math.round((r.empty / 100) * barW), 2), 9, { stroke: 'none', fill: hot ? C.accent : C.fg55 }) + '</g>';
  });
  const ly = hy + 36 + t.rows.length * 44 + 18;
  s += text(c, sx, ly + 4, t.legend, { size: 8.5, font: 'mono', fill: C.fg55 });
  s += panel(c, css, P, 'rec', 11, 860, 96, 260, 134, t.receivables, true);
  s += panel(c, css, P, 'open', 14, 860, 242, 260, 116, t.open, false);
  const ky = Math.max(ly + 22, 374);
  s += tiles(c, css, P, ky, t.tiles, 16);
  s += text(c, 80, ky + 86, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

const ROWS = (L) => [
  { name: 'T1', sub: L.s1, trips: '12', km: `18${NB}400`, empty: 44, emptyT: '44 %', rev: `2${NB}160${NB}000`, margin: `520${NB}000` },
  { name: 'T2', sub: L.s2, trips: '10', km: `16${NB}900`, empty: 31, emptyT: '31 %', rev: `2${NB}310${NB}000`, margin: `840${NB}000` },
  { name: 'T3', sub: L.s3, trips: '9', km: `15${NB}200`, empty: 49, emptyT: '49 %', rev: `1${NB}580${NB}000`, margin: `210${NB}000` },
  { name: 'T4', sub: L.s4, trips: '11', km: `17${NB}600`, empty: 22, emptyT: '22 %', rev: `2${NB}640${NB}000`, margin: `1${NB}050${NB}000` },
  { name: 'T5', sub: L.s5, trips: '6', km: `9${NB}800`, empty: 38, emptyT: '38 %', rev: `1${NB}120${NB}000`, margin: `260${NB}000` },
  { name: 'T6', sub: L.s6, trips: '12', km: `18${NB}100`, empty: 35, emptyT: '35 %', rev: `2${NB}390${NB}000`, margin: `760${NB}000` },
];
const ROWS_AR = () => ROWS({ s1: 'نصف مقطورة · 25 ط', s2: 'نصف مقطورة · 25 ط', s3: 'نصف مقطورة · 25 ط', s4: 'نصف مقطورة · 25 ط', s5: 'شاحنة 12 ط · 3 أيام ورشة', s6: 'نصف مقطورة · 25 ط' }).map((r) => ({ ...r, km: I(r.km), rev: I(r.rev), margin: I(r.margin), emptyT: I(r.emptyT) }));

export const STRINGS = {
  fr: {
    voyage: {
      title: 'Un voyage, de l’ordre du chargeur à la facture du soir : retour à vide ou fret de retour',
      alt: 'Un bandeau : voyage V-0612, camion T4, semi-remorque 25 tonnes, chauffeur Rachid, chargeur A, 24 tonnes de matériaux, Alger vers Ouargla, environ 820 kilomètres, forfait 180 000 dinars, lettre de voiture LV-0612. À gauche, une frise verticale : lundi 6h ordre reçu du chargeur sur le portail ; 7h30 camion et chauffeur affectés, avance de frais 25 000 dinars remise contre signature ; 9h10 chargement, lettre de voiture, photo du chargement, 24 tonnes ; 9h40 départ, jalons du téléphone du chauffeur, hors ligne ; mardi 6h20 arrivée, horloge d’attente démarrée ; mercredi 12h20 déchargement, 30 heures d’attente dont 6 au-delà de la franchise écrite de 24 heures ; 12h40 livraison prouvée, bon signé photographié et géolocalisé, en accent ; 15h fret de retour trouvé, chargeur C, 18 tonnes, détour de 60 kilomètres, 95 000 dinars, en accent ; jeudi 20h retour au dépôt, frais justifiés 21 400 sur 25 000, 3 600 rendus, facture du chargeur A émise le soir. À droite, en accent, le compte du voyage en deux colonnes, retour à vide puis fret de retour : recette aller avec attente 192 000 et 192 000 ; fret de retour 0 et 95 000 ; kilomètres 1 640 et 1 700 ; carburant relevé 19 680 et 20 400 ; frais de route justifiés 21 400 et 21 400 ; coût fixe à 55 dinars le kilomètre 90 200 et 93 500 ; marge du voyage 60 720 soit 32 pour cent, et 151 700 soit 53 pour cent. En dessous, les frais de route : avance 25 000, tickets photographiés 21 400, rendus 3 600, soldé le jeudi soir. Trois tuiles : 24 tonnes, 820 kilomètres, 30 heures d’attente ; marge de 60 720 à 151 700 avec le fret de retour ; facture émise le soir même du retour, sur bon signé. Chiffres, distances et noms sont un exemple construit.',
      header: 'Voyage V-0612 · camion T4 (semi 25 t) · chauffeur Rachid · chargeur A · 24 t matériaux · Alger → Ouargla ≈ 820 km · forfait 180 000 DA · LV-0612',
      eventsLabel: 'Événements · du portail chargeur et du téléphone du chauffeur',
      events: [
        { d: 'Lun. 6h00', t: 'Ordre reçu', sub: 'portail chargeur · forfait de la grille' },
        { d: 'Lun. 7h30', t: 'T4 et Rachid affectés', sub: 'avance 25 000 DA remise contre signature' },
        { d: 'Lun. 9h10', t: 'Chargement', sub: 'lettre de voiture · photo · 24 t' },
        { d: 'Lun. 9h40', t: 'Départ', sub: 'jalons du téléphone · hors ligne' },
        { d: 'Mar. 6h20', t: 'Arrivée · attente démarre', sub: 'horloge horodatée sur le téléphone' },
        { d: 'Mer. 12h20', t: 'Déchargement · 30 h d’attente', sub: 'franchise écrite 24 h · 6 h facturées' },
        { d: 'Mer. 12h40', t: 'Livraison prouvée', sub: 'bon signé photographié · géolocalisé', hot: true },
        { d: 'Mer. 15h00', t: 'Fret de retour · chargeur C', sub: '18 t · détour 60 km · 95 000 DA', hot: true },
        { d: 'Jeu. 20h00', t: 'Retour · frais soldés', sub: 'facture A émise le soir · 3 600 DA rendus' },
      ],
      pl: { title: 'Le compte du voyage · deux retours possibles', sub: 'recettes de la grille, carburant relevé, frais justifiés, coût fixe au km', colA: 'retour à vide', colB: 'fret de retour', rows: [
        { l: 'Recette aller · attente comprise', a: `192${NB}000`, b: `192${NB}000` },
        { l: 'Fret de retour', a: '—', b: `95${NB}000` },
        { l: 'Kilomètres', a: `1${NB}640`, b: `1${NB}700` },
        { l: 'Carburant relevé sur les pleins', a: `19${NB}680`, b: `20${NB}400` },
        { l: 'Frais de route justifiés', a: `21${NB}400`, b: `21${NB}400` },
        { l: 'Coût fixe au km · 55 DA', a: `90${NB}200`, b: `93${NB}500` },
        { l: 'Marge du voyage', a: `60${NB}720 · 32 %`, b: `151${NB}700 · 53 %` },
      ] },
      expenses: { title: 'Frais de route · avance soldée au retour', sub: 'tickets photographiés sur le téléphone du chauffeur', rows: [{ l: 'Avance remise · lundi 7h30', v: `25${NB}000` }, { l: 'Justifiés par photo · 11 tickets', v: `21${NB}400` }, { l: 'Rendus · soldé jeudi 20h', v: `3${NB}600`, hot: true }] },
      tiles: [
        { big: '24 t · 820 km · 30 h', l1: 'chargement · distance aller · attente', l2: 'attente au-delà de 24 h facturée selon la grille' },
        { big: `60${NB}720 → 151${NB}700`, l1: 'marge à vide · marge avec fret de retour', l2: 'un détour de 60 km paie le retour', hot: true },
        { big: 'facture le soir même', l1: 'émise au retour, sur bon signé', l2: 'pas de bon, pas de facture' },
      ],
      rule: 'Le voyage est un objet : un ordre, un camion, un chauffeur, une lettre de voiture, des jalons, une preuve de livraison ;',
      rule2: 'sa marge se calcule au retour, et le fret de retour se cherche avant que le camion ne reparte vide.',
      note: 'Chiffres, distances, prix et noms sont un exemple construit ; la grille, la franchise d’attente et le coût au km sont ceux du transporteur.',
    },
    camions: {
      title: 'Le tableau du mois : six camions, kilomètres à vide, marge, créances',
      alt: 'À gauche, six camions sur le mois : T1, 12 voyages, 18 400 kilomètres, 44 pour cent à vide en accent, recette 2 160 000, marge 520 000 ; T2, 10 voyages, 16 900 kilomètres, 31 pour cent, 2 310 000, 840 000 ; T3, 9 voyages, 15 200 kilomètres, 49 pour cent en accent, 1 580 000, 210 000 ; T4, 11 voyages, 17 600 kilomètres, 22 pour cent, 2 640 000, 1 050 000 ; T5, 6 voyages, 9 800 kilomètres, 38 pour cent, 1 120 000, 260 000, camion de 12 tonnes avec 3 jours au garage ; T6, 12 voyages, 18 100 kilomètres, 35 pour cent, 2 390 000, 760 000 ; seuil de kilomètres à vide écrit par le gérant à 40 pour cent. Total 60 voyages, 96 000 kilomètres, 36 pour cent à vide, recette 12 200 000, marge 3 640 000. À droite, en accent, les créances par chargeur : chargeur A 1 940 000 à 45 jours ; chargeur B 860 000 à 72 jours, au-delà du terme écrit de 60 jours, en accent ; chargeur C 420 000 à 18 jours. En dessous, ce qui reste ouvert : 3 avances chauffeur non soldées pour 64 000 dinars, 4 voyages sans bon signé donc non facturés, 1 ordre sans lettre de voiture. Trois tuiles : 60 voyages, 96 000 kilomètres, 36 pour cent à vide ; marge 3 640 000 sur 12 200 000, 30 pour cent ; T3 et T1 au-dessus du seuil de vide, fret de retour à chercher sur leurs lignes. Chiffres et camions sont un exemple construit.',
      cols: ['Camion', 'Voy.', 'Km', 'Km à vide', 'Recette', 'Marge'],
      threshold: 40, thrLabel: 'seuil écrit 40 %',
      rows: ROWS({ s1: 'semi 25 t', s2: 'semi 25 t', s3: 'semi 25 t', s4: 'semi 25 t', s5: 'porteur 12 t · 3 j garage', s6: 'semi 25 t' }),
      legend: 'barre : part des kilomètres roulés à vide · dorée : au-dessus du seuil écrit · recette et marge en dinars, coût fixe au km compris',
      receivables: { title: 'Créances par chargeur', sub: 'terme écrit au contrat : 60 jours', rows: [{ l: 'Chargeur A · 45 j', v: `1${NB}940${NB}000` }, { l: 'Chargeur B · 72 j', v: `860${NB}000`, hot: true }, { l: 'Chargeur C · 18 j', v: `420${NB}000` }, { l: 'Total', v: `3${NB}220${NB}000` }] },
      open: { title: 'Ce qui reste ouvert ce soir', sub: 'chaque ligne bloque une facture ou un solde', rows: [{ l: 'Avances chauffeur non soldées', v: `3 · 64${NB}000`, hot: true }, { l: 'Voyages sans bon signé', v: '4 · non facturés' }, { l: 'Ordre sans lettre de voiture', v: '1' }] },
      tiles: [
        { big: `60 · 96${NB}000 · 36 %`, l1: 'voyages · km · part à vide', l2: 'six camions sur le mois' },
        { big: `3${NB}640${NB}000 · 30 %`, l1: 'marge du mois · sur la recette', l2: 'coût fixe au km compris', hot: true },
        { big: 'T3 · T1 > 40 %', l1: 'au-dessus du seuil de vide', l2: 'fret de retour à chercher sur leurs lignes' },
      ],
      rule: 'Le gérant lit par camion les voyages, les kilomètres à vide, la recette et la marge, et par chargeur ce qui est dû ;',
      rule2: 'une avance non soldée, un bon manquant, une lettre absente sont des lignes ouvertes, pas des souvenirs.',
      note: 'Camions, chargeurs, seuils et chiffres sont un exemple construit.',
    },
  },
  en: {
    voyage: {
      title: 'One trip, from the shipper’s order to the evening invoice: empty return or backhaul',
      alt: 'A strip: trip V-0612, truck T4, 25-tonne semi-trailer, driver Rachid, shipper A, 24 tonnes of building materials, Algiers to Ouargla, about 820 kilometres, flat rate 180,000 dinars, consignment note LV-0612. Left, a vertical line: Monday 6:00 order received from the shipper on the portal; 7:30 truck and driver assigned, expense advance of 25,000 dinars handed over against signature; 9:10 loading, consignment note, photo of the load, 24 tonnes; 9:40 departure, milestones from the driver’s phone, offline; Tuesday 6:20 arrival, waiting clock started; Wednesday 12:20 unloading, 30 hours of waiting of which 6 beyond the written 24-hour free time; 12:40 delivery proven, signed note photographed and geolocated, accented; 15:00 backhaul found, shipper C, 18 tonnes, 60-kilometre detour, 95,000 dinars, accented; Thursday 20:00 back at the depot, expenses justified 21,400 of 25,000, 3,600 returned, shipper A invoice issued that evening. Right, accented, the trip account in two columns, empty return then backhaul: outbound revenue with waiting 192,000 and 192,000; backhaul 0 and 95,000; kilometres 1,640 and 1,700; fuel from fill-ups 19,680 and 20,400; justified road expenses 21,400 and 21,400; fixed cost at 55 dinars per kilometre 90,200 and 93,500; trip margin 60,720 or 32 percent, and 151,700 or 53 percent. Below, road expenses: advance 25,000, photographed receipts 21,400, 3,600 returned, settled Thursday evening. Three tiles: 24 tonnes, 820 kilometres, 30 hours of waiting; margin from 60,720 to 151,700 with the backhaul; invoice issued the evening of the return, on a signed note. Figures, distances and names are a constructed example.',
      header: 'Trip V-0612 · truck T4 (25 t semi) · driver Rachid · shipper A · 24 t materials · Algiers → Ouargla ≈ 820 km · flat 180,000 DA · LV-0612',
      eventsLabel: 'Events · from the shipper portal and the driver’s phone',
      events: [
        { d: 'Mon 6:00', t: 'Order received', sub: 'shipper portal · rate from the grid' },
        { d: 'Mon 7:30', t: 'T4 and Rachid assigned', sub: '25,000 DA advance against signature' },
        { d: 'Mon 9:10', t: 'Loading', sub: 'consignment note · photo · 24 t' },
        { d: 'Mon 9:40', t: 'Departure', sub: 'phone milestones · offline' },
        { d: 'Tue 6:20', t: 'Arrival · waiting starts', sub: 'timestamped clock on the phone' },
        { d: 'Wed 12:20', t: 'Unloading · 30 h waiting', sub: 'written free time 24 h · 6 h billed' },
        { d: 'Wed 12:40', t: 'Delivery proven', sub: 'signed note photographed · geolocated', hot: true },
        { d: 'Wed 15:00', t: 'Backhaul · shipper C', sub: '18 t · 60 km detour · 95,000 DA', hot: true },
        { d: 'Thu 20:00', t: 'Return · expenses settled', sub: 'invoice A issued that evening · 3,600 DA back' },
      ],
      pl: { title: 'The trip account · two possible returns', sub: 'grid revenue, measured fuel, justified expenses, fixed cost per km', colA: 'empty return', colB: 'backhaul', rows: [
        { l: 'Outbound revenue · waiting included', a: '192,000', b: '192,000' },
        { l: 'Backhaul', a: '—', b: '95,000' },
        { l: 'Kilometres', a: '1,640', b: '1,700' },
        { l: 'Fuel from fill-ups', a: '19,680', b: '20,400' },
        { l: 'Justified road expenses', a: '21,400', b: '21,400' },
        { l: 'Fixed cost per km · 55 DA', a: '90,200', b: '93,500' },
        { l: 'Trip margin', a: '60,720 · 32 %', b: '151,700 · 53 %' },
      ] },
      expenses: { title: 'Road expenses · advance settled on return', sub: 'receipts photographed on the driver’s phone', rows: [{ l: 'Advance handed over · Mon 7:30', v: '25,000' }, { l: 'Justified by photo · 11 receipts', v: '21,400' }, { l: 'Returned · settled Thu 20:00', v: '3,600', hot: true }] },
      tiles: [
        { big: '24 t · 820 km · 30 h', l1: 'load · outbound distance · waiting', l2: 'waiting beyond 24 h billed per the grid' },
        { big: '60,720 → 151,700', l1: 'empty-return margin · margin with backhaul', l2: 'a 60 km detour pays for the return', hot: true },
        { big: 'invoiced that evening', l1: 'issued on return, on a signed note', l2: 'no note, no invoice' },
      ],
      rule: 'The trip is an object: an order, a truck, a driver, a consignment note, milestones, a proof of delivery;',
      rule2: 'its margin is computed on return, and the backhaul is looked for before the truck leaves empty.',
      note: 'Figures, distances, prices and names are a constructed example; the rate grid, waiting free time and cost per km are the carrier’s.',
    },
    camions: {
      title: 'The month’s board: six trucks, empty kilometres, margin, receivables',
      alt: 'Left, six trucks over the month: T1, 12 trips, 18,400 kilometres, 44 percent empty accented, revenue 2,160,000, margin 520,000; T2, 10 trips, 16,900 kilometres, 31 percent, 2,310,000, 840,000; T3, 9 trips, 15,200 kilometres, 49 percent accented, 1,580,000, 210,000; T4, 11 trips, 17,600 kilometres, 22 percent, 2,640,000, 1,050,000; T5, 6 trips, 9,800 kilometres, 38 percent, 1,120,000, 260,000, a 12-tonne rigid with 3 days at the garage; T6, 12 trips, 18,100 kilometres, 35 percent, 2,390,000, 760,000; empty-kilometre threshold written by the manager at 40 percent. Total 60 trips, 96,000 kilometres, 36 percent empty, revenue 12,200,000, margin 3,640,000. Right, accented, receivables per shipper: shipper A 1,940,000 at 45 days; shipper B 860,000 at 72 days, beyond the written 60-day term, accented; shipper C 420,000 at 18 days. Below, what is still open: 3 unsettled driver advances for 64,000 dinars, 4 trips without a signed note and therefore not invoiced, 1 order without a consignment note. Three tiles: 60 trips, 96,000 kilometres, 36 percent empty; margin 3,640,000 on 12,200,000, 30 percent; T3 and T1 above the empty threshold, backhaul to look for on their lanes. Figures and trucks are a constructed example.',
      cols: ['Truck', 'Trips', 'Km', 'Empty km', 'Revenue', 'Margin'],
      threshold: 40, thrLabel: 'written threshold 40 %',
      rows: ROWS({ s1: '25 t semi', s2: '25 t semi', s3: '25 t semi', s4: '25 t semi', s5: '12 t rigid · 3 d garage', s6: '25 t semi' }).map((r) => ({ ...r, km: r.km.replace(NB, ','), rev: r.rev.split(NB).join(','), margin: r.margin.split(NB).join(',') })),
      legend: 'bar: share of kilometres driven empty · gold: above the written threshold · revenue and margin in dinars, fixed cost per km included',
      receivables: { title: 'Receivables per shipper', sub: 'term written in the contract: 60 days', rows: [{ l: 'Shipper A · 45 d', v: '1,940,000' }, { l: 'Shipper B · 72 d', v: '860,000', hot: true }, { l: 'Shipper C · 18 d', v: '420,000' }, { l: 'Total', v: '3,220,000' }] },
      open: { title: 'What is still open tonight', sub: 'each line blocks an invoice or a settlement', rows: [{ l: 'Unsettled driver advances', v: '3 · 64,000', hot: true }, { l: 'Trips without a signed note', v: '4 · not invoiced' }, { l: 'Order without consignment note', v: '1' }] },
      tiles: [
        { big: '60 · 96,000 · 36 %', l1: 'trips · km · empty share', l2: 'six trucks over the month' },
        { big: '3,640,000 · 30 %', l1: 'month’s margin · on revenue', l2: 'fixed cost per km included', hot: true },
        { big: 'T3 · T1 > 40 %', l1: 'above the empty threshold', l2: 'backhaul to look for on their lanes' },
      ],
      rule: 'The manager reads per truck the trips, empty kilometres, revenue and margin, and per shipper what is owed;',
      rule2: 'an unsettled advance, a missing note, an absent consignment note are open lines, not memories.',
      note: 'Trucks, shippers, thresholds and figures are a constructed example.',
    },
  },
  ar: {
    voyage: {
      title: 'رحلة واحدة، من أمر الشاحن إلى فاتورة المساء: عودة فارغة أو حمولة عودة',
      alt: 'شريط: الرحلة V-0612، الشاحنة T4، نصف مقطورة 25 طناً، السائق رشيد، الشاحن أ، 24 طناً من مواد البناء، من الجزائر العاصمة إلى ورقلة، حوالي 820 كيلومتراً، سعر جزافي 180 000 دينار، رسالة النقل LV-0612. يساراً خط عمودي: الاثنين 6:00 أمر مستلَم من الشاحن على البوابة؛ 7:30 تخصيص الشاحنة والسائق، تسبيق مصاريف 25 000 دينار مسلَّم مقابل توقيع؛ 9:10 تحميل، رسالة النقل، صورة الحمولة، 24 طناً؛ 9:40 انطلاق، مراحل من هاتف السائق، دون شبكة؛ الثلاثاء 6:20 وصول، بدء عدّاد الانتظار؛ الأربعاء 12:20 تفريغ، 30 ساعة انتظار منها 6 بعد المهلة المكتوبة 24 ساعة؛ 12:40 تسليم مُثبت، وصل موقَّع مصوَّر ومحدَّد الموقع، مبرز؛ 15:00 حمولة عودة، الشاحن ج، 18 طناً، انعطاف 60 كيلومتراً، 95 000 دينار، مبرز؛ الخميس 20:00 العودة إلى المستودع، مصاريف مبرَّرة 21 400 من 25 000، 3 600 مُرجَعة، فاتورة الشاحن أ صادرة في المساء. يميناً مبرز حساب الرحلة في عمودين، عودة فارغة ثم حمولة عودة: إيراد الذهاب مع الانتظار 192 000 و192 000؛ حمولة العودة 0 و95 000؛ الكيلومترات 1 640 و1 700؛ الوقود المسجَّل 19 680 و20 400؛ مصاريف الطريق المبرَّرة 21 400 و21 400؛ التكلفة الثابتة بـ55 ديناراً للكيلومتر 90 200 و93 500؛ هامش الرحلة 60 720 أي 32 بالمئة، و151 700 أي 53 بالمئة. ثلاث بطاقات: 24 طناً، 820 كيلومتراً، 30 ساعة انتظار؛ هامش من 60 720 إلى 151 700 بحمولة العودة؛ فاتورة في مساء العودة نفسه، على وصل موقَّع. الأرقام والمسافات والأسماء مثال مبني.',
      header: 'الرحلة V-0612 · الشاحنة T4 (نصف مقطورة 25 ط) · السائق رشيد · الشاحن أ · 24 ط مواد · الجزائر ← ورقلة ≈ 820 كلم · جزافي 180 000 دج',
      eventsLabel: 'أحداث · من بوابة الشاحن وهاتف السائق',
      events: [
        { d: 'الاثنين 6:00', t: 'أمر مستلَم', sub: 'بوابة الشاحن · سعر من الجدول' },
        { d: 'الاثنين 7:30', t: 'تخصيص T4 ورشيد', sub: `تسبيق ${n('25 000')} دج مقابل توقيع` },
        { d: 'الاثنين 9:10', t: 'تحميل', sub: 'رسالة النقل · صورة · 24 ط' },
        { d: 'الاثنين 9:40', t: 'انطلاق', sub: 'مراحل الهاتف · دون شبكة' },
        { d: 'الثلاثاء 6:20', t: 'وصول · يبدأ الانتظار', sub: 'عدّاد بختم زمني على الهاتف' },
        { d: 'الأربعاء 12:20', t: 'تفريغ · 30 س انتظار', sub: 'مهلة مكتوبة 24 س · 6 س مفوترة' },
        { d: 'الأربعاء 12:40', t: 'تسليم مُثبت', sub: 'وصل موقَّع مصوَّر · محدَّد الموقع', hot: true },
        { d: 'الأربعاء 15:00', t: 'حمولة عودة · الشاحن ج', sub: `18 ط · انعطاف 60 كلم · ${n('95 000')} دج`, hot: true },
        { d: 'الخميس 20:00', t: 'عودة · تسوية المصاريف', sub: `فاتورة أ في المساء · ${n('3 600')} دج مُرجَعة` },
      ],
      pl: { title: 'حساب الرحلة · عودتان ممكنتان', sub: 'إيراد الجدول، وقود مسجَّل، مصاريف مبرَّرة، تكلفة ثابتة للكيلومتر', colA: 'عودة فارغة', colB: 'حمولة عودة', rows: [
        { l: 'إيراد الذهاب · مع الانتظار', a: n('192 000'), b: n('192 000') },
        { l: 'حمولة العودة', a: '—', b: n('95 000') },
        { l: 'الكيلومترات', a: n('1 640'), b: n('1 700') },
        { l: 'الوقود المسجَّل من التعبئات', a: n('19 680'), b: n('20 400') },
        { l: 'مصاريف الطريق المبرَّرة', a: n('21 400'), b: n('21 400') },
        { l: 'التكلفة الثابتة للكيلومتر · 55 دج', a: n('90 200'), b: n('93 500') },
        { l: 'هامش الرحلة', a: `${n('60 720')} · 32 %`, b: `${n('151 700')} · 53 %` },
      ] },
      expenses: { title: 'مصاريف الطريق · تسبيق يُسوّى عند العودة', sub: 'وصولات مصوَّرة على هاتف السائق', rows: [{ l: 'تسبيق مسلَّم · الاثنين 7:30', v: n('25 000') }, { l: 'مبرَّرة بالصورة · 11 وصلاً', v: n('21 400') }, { l: 'مُرجَعة · سُوّيت الخميس 20:00', v: n('3 600'), hot: true }] },
      tiles: [
        { big: '24 ط · 820 كلم · 30 س', l1: 'حمولة · مسافة الذهاب · انتظار', l2: 'الانتظار بعد 24 س يُفوتر وفق الجدول' },
        { big: `${n('60 720')} ← ${n('151 700')}`, l1: 'هامش العودة الفارغة · الهامش بحمولة عودة', l2: 'انعطاف 60 كلم يدفع ثمن العودة', hot: true },
        { big: 'فاتورة في المساء نفسه', l1: 'تصدر عند العودة، على وصل موقَّع', l2: 'لا وصل، لا فاتورة' },
      ],
      rule: 'الرحلة كائن: أمر، شاحنة، سائق، رسالة نقل، مراحل، إثبات تسليم؛',
      rule2: 'يُحسب هامشها عند العودة، وتُبحث حمولة العودة قبل أن تنطلق الشاحنة فارغة.',
      note: 'الأرقام والمسافات والأسعار والأسماء مثال مبني؛ جدول الأسعار ومهلة الانتظار والتكلفة للكيلومتر هي ما يكتبه الناقل.',
    },
    camions: {
      title: 'لوحة الشهر: ست شاحنات، كيلومترات فارغة، هامش، ديون',
      alt: 'يساراً ست شاحنات على الشهر: T1، 12 رحلة، 18 400 كيلومتر، 44 بالمئة فارغة مبرزة، إيراد 2 160 000، هامش 520 000؛ T2، 10 رحلات، 16 900 كيلومتر، 31 بالمئة، 2 310 000، 840 000؛ T3، 9 رحلات، 15 200 كيلومتر، 49 بالمئة مبرزة، 1 580 000، 210 000؛ T4، 11 رحلة، 17 600 كيلومتر، 22 بالمئة، 2 640 000، 1 050 000؛ T5، 6 رحلات، 9 800 كيلومتر، 38 بالمئة، 1 120 000، 260 000، شاحنة 12 طناً مع 3 أيام في الورشة؛ T6، 12 رحلة، 18 100 كيلومتر، 35 بالمئة، 2 390 000، 760 000؛ عتبة الكيلومترات الفارغة كتبها المسيّر عند 40 بالمئة. المجموع 60 رحلة، 96 000 كيلومتر، 36 بالمئة فارغة، إيراد 12 200 000، هامش 3 640 000. يميناً مبرز الديون لكل شاحن: الشاحن أ 1 940 000 عند 45 يوماً؛ الشاحن ب 860 000 عند 72 يوماً، بعد الأجل المكتوب 60 يوماً، مبرز؛ الشاحن ج 420 000 عند 18 يوماً. أسفله ما يبقى مفتوحاً: 3 تسبيقات سائقين غير مسوّاة بـ64 000 دينار، 4 رحلات دون وصل موقَّع وبالتالي غير مفوترة، أمر واحد دون رسالة نقل. ثلاث بطاقات: 60 رحلة، 96 000 كيلومتر، 36 بالمئة فارغة؛ هامش 3 640 000 على 12 200 000، 30 بالمئة؛ T3 وT1 فوق عتبة الفراغ، حمولة عودة يُبحث عنها على خطوطهما. الأرقام والشاحنات مثال مبني.',
      cols: ['الشاحنة', 'رحلات', 'كلم', 'كلم فارغة', 'إيراد', 'هامش'],
      threshold: 40, thrLabel: 'عتبة مكتوبة 40 %',
      rows: ROWS_AR(),
      legend: 'شريط: حصة الكيلومترات المقطوعة فارغة · ذهبي: فوق العتبة المكتوبة · الإيراد والهامش بالدينار، التكلفة الثابتة للكيلومتر محسوبة',
      receivables: { title: 'الديون لكل شاحن', sub: 'الأجل المكتوب في العقد: 60 يوماً', rows: [{ l: 'الشاحن أ · 45 يوماً', v: n('1 940 000') }, { l: 'الشاحن ب · 72 يوماً', v: n('860 000'), hot: true }, { l: 'الشاحن ج · 18 يوماً', v: n('420 000') }, { l: 'المجموع', v: n('3 220 000') }] },
      open: { title: 'ما يبقى مفتوحاً الليلة', sub: 'كل سطر يحجب فاتورة أو تسوية', rows: [{ l: 'تسبيقات سائقين غير مسوّاة', v: `3 · ${n('64 000')}`, hot: true }, { l: 'رحلات دون وصل موقَّع', v: '4 · غير مفوترة' }, { l: 'أمر دون رسالة نقل', v: '1' }] },
      tiles: [
        { big: `60 · ${n('96 000')} · 36 %`, l1: 'رحلات · كلم · حصة الفراغ', l2: 'ست شاحنات على الشهر' },
        { big: `${n('3 640 000')} · 30 %`, l1: 'هامش الشهر · على الإيراد', l2: 'التكلفة الثابتة للكيلومتر محسوبة', hot: true },
        { big: I('T3 · T1 > 40 %'), l1: 'فوق عتبة الفراغ', l2: 'حمولة عودة يُبحث عنها على خطوطهما' },
      ],
      rule: 'يقرأ المسيّر لكل شاحنة الرحلات والكيلومترات الفارغة والإيراد والهامش، ولكل شاحن ما هو مستحق؛',
      rule2: 'التسبيق غير المسوّى والوصل الناقص ورسالة النقل الغائبة أسطر مفتوحة، لا ذكريات.',
      note: 'الشاحنات والشاحنون والعتبات والأرقام مثال مبني.',
    },
  },
};
