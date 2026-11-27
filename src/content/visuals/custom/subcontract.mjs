// Bespoke animated figures for the 2027 "the subcontractor delivered late and we
// paid anyway" post.
//  order():    one subcontract order: identity strip, terms panel (quantity, price,
//              deadline, written retention rule, consigned materials), a vertical
//              event timeline from order to settlement with a drawn line, and the
//              settlement panel (accepted, retention, invoice matched, materials
//              balanced); three tiles. Events appear, the line draws.
//  partners(): the partner board over 90 days: six partners with on-time rate as a
//              growing bar, accepted rate, price vs reference, materials gap, level;
//              one watched partner accented; three tiles.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function draw(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{stroke-dashoffset:1000}${(at + dur).toFixed(1)}%,100%{stroke-dashoffset:0}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function grow(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
const I = (x) => `⁦${x}⁩`;

export function order(t, rtl) {
  const c = ctx(rtl); const P = 'so'; const css = []; const H = 640;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: 'rgba(242,181,68,0.06)' }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  // terms panel (left)
  const px = 80, pw = 300, py = 146;
  s += `<g style="animation:${show(css, P, 'p', 4)}">` + rect(c, px, py, pw, 150, { stroke: C.line2, fill: C.fill }) + text(c, px + 12, py + 20, t.terms.title, { size: 10.5, fill: C.fg, weight: 500 }) + text(c, px + 12, py + 34, t.terms.sub, { size: 8, font: 'mono', fill: C.fg55 });
  t.terms.rows.forEach((r, i) => { const y = py + 54 + i * 18; s += text(c, px + 12, y, r.l, { size: 9, fill: C.fg70 }) + text(c, px + pw - 12, y, r.v, { size: 9.5, font: 'mono', fill: r.hot ? C.accent : C.fg, anchor: 'end', weight: r.hot ? 500 : 400 }); });
  s += '</g>';
  // settlement panel (left, below)
  const dy = py + 166;
  s += `<g style="animation:${show(css, P, 'd', 20)}">` + rect(c, px, dy, pw, 130, { stroke: C.accent, fill: 'rgba(242,181,68,0.06)' }) + text(c, px + 12, dy + 20, t.settle.title, { size: 10.5, fill: C.accent, weight: 500 }) + text(c, px + 12, dy + 34, t.settle.sub, { size: 8, font: 'mono', fill: C.fg55 });
  t.settle.rows.forEach((r, i) => { const y = dy + 54 + i * 18; s += text(c, px + 12, y, r.l, { size: 9, fill: C.fg70 }) + text(c, px + pw - 12, y, r.v, { size: 9.5, font: 'mono', fill: r.hot ? C.accent : C.fg, anchor: 'end', weight: r.hot ? 500 : 400 }); });
  s += '</g>';
  // event timeline (right)
  const ex = 420, ey = 150; const lineX = ex + 10;
  s += text(c, ex, ey - 6, t.eventsLabel, { size: 9, font: 'mono', fill: C.fg35, letter: 1.2, upper: true });
  const n = t.events.length; const gap = 42;
  s += `<line x1="${c.X(lineX)}" y1="${ey + 10}" x2="${c.X(lineX)}" y2="${ey + 10 + (n - 1) * gap}" stroke="${C.line2}" stroke-width="1.4" pathLength="1000" style="stroke-dashoffset:0;animation:${draw(css, P, 'ln', 5, 12)}"/>`;
  t.events.forEach((ev, i) => {
    const y = ey + 10 + i * gap; const at = 6 + i * 1.5; const hot = ev.hot;
    s += `<g style="animation:${show(css, P, `e${i}`, at)}">` + circle(c, lineX, y, hot ? 6 : 4.5, { fill: hot ? C.accent : C.bg, stroke: hot ? C.accent : C.line2, sw: 1.4 })
      + text(c, ex + 26, y - 3, ev.d, { size: 8.5, font: 'mono', fill: C.fg55 }) + text(c, ex + 100, y - 3, ev.t, { size: 10, fill: hot ? C.accent : C.fg, weight: 500 }) + text(c, ex + 100, y + 11, ev.sub, { size: 8, font: 'mono', fill: C.fg55 }) + '</g>';
  });
  const ky = Math.max(ey + 10 + (n - 1) * gap + 30, dy + 146);
  t.tiles.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, 23 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? 'rgba(242,181,68,0.06)' : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  s += text(c, 80, ky + 86, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"],svg line[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

export function partners(t, rtl) {
  const c = ctx(rtl); const P = 'pt'; const css = []; const H = 600;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  const cols = [80, 300, 370, 640, 740, 840, 960]; const hy = 104; const barW = 200;
  s += t.cols.map((h, i) => text(c, cols[i], hy, h, { size: 9, font: 'mono', fill: C.fg35, letter: 1.2, upper: true })).join('') + line(c, 80, hy + 8, 1120, hy + 8, { stroke: C.line2 });
  const tx = cols[2] + (t.threshold / 100) * barW;
  s += line(c, tx, hy + 12, tx, hy + 12 + t.rows.length * 50, { stroke: C.accent, dash: '3 3' }) + text(c, tx, hy + 12 + t.rows.length * 50 + 12, t.thrLabel, { size: 8, font: 'mono', fill: C.accent, anchor: 'middle' });
  t.rows.forEach((r, i) => {
    const y = hy + 42 + i * 50; const at = 3 + i * 1.8; const hot = r.level === 'watch';
    s += `<g style="animation:${show(css, P, `r${i}`, at)}">` + text(c, cols[0], y - 3, r.name, { size: 11, fill: hot ? C.accent : C.fg, weight: 500 }) + text(c, cols[0], y + 11, r.sub, { size: 8, font: 'mono', fill: C.fg55 })
      + text(c, cols[1], y + 2, r.orders, { size: 10, font: 'mono', fill: C.fg70 })
      + text(c, cols[2] + barW + 10, y + 2, r.onTimeT, { size: 9.5, font: 'mono', fill: hot ? C.accent : C.fg55 })
      + text(c, cols[3], y + 2, r.acc, { size: 10, font: 'mono', fill: r.accHot ? C.accent : C.fg })
      + text(c, cols[4], y + 2, r.price, { size: 10, font: 'mono', fill: C.fg })
      + text(c, cols[5], y + 2, r.mat, { size: 10, font: 'mono', fill: r.matHot ? C.accent : C.fg })
      + rect(c, cols[6], y - 13, 160, 22, { stroke: hot ? C.accent : C.line2, fill: hot ? 'rgba(242,181,68,0.22)' : r.level === 'pref' ? 'rgba(255,255,255,0.10)' : 'none' }) + text(c, cols[6] + 8, y + 2, r.levelT, { size: 9, font: 'mono', fill: hot ? C.accent : C.fg70 })
      + line(c, 80, y + 22, 1120, y + 22, { stroke: C.line }) + '</g>';
    s += `<g style="transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'};animation:${grow(css, P, `g${i}`, at + 0.5, 1.5)}">` + rect(c, cols[2], y - 7, Math.max(Math.round((r.onTime / 100) * barW), 2), 10, { stroke: 'none', fill: hot ? C.accent : C.fg55 }) + '</g>';
  });
  const ky = hy + 42 + t.rows.length * 50 + 12;
  t.tiles.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, 16 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? 'rgba(242,181,68,0.06)' : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  s += text(c, 80, ky + 86, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

const NB = ' ';
export const STRINGS = {
  fr: {
    order: {
      title: 'Un ordre de sous-traitance : termes, matières, jalons, réception, règlement',
      alt: 'Un bandeau : ordre OS-0147 du 11 novembre, atelier Confection Nord, 600 chemises, 380 dinars la pièce, délai le 25 novembre, matières confiées, règle de retenue écrite dans l’ordre. À gauche, les termes : quantité 600, prix 380 la pièce soit 228 000, délai 25 novembre, retenue 1 pour cent par jour de retard plafonnée à 10 pour cent, matières confiées tissu 1 020 mètres, boutons 7 200, fil. À droite, une frise verticale d’événements : 11 novembre ordre envoyé et accepté sur le portail ; 13 novembre matières remises, signées, 1 020 mètres ; 18 novembre point d’avancement 40 pour cent avec photo ; 24 novembre 520 pièces livrées, partiel ; 27 novembre 80 pièces livrées, deux jours de retard, en accent ; 27 novembre contrôle 14 défauts majeurs sur 600, 586 acceptées ; 28 novembre retenue calculée 2 pour cent sur les 80 pièces en retard ; 28 novembre facture reçue 228 000, rapprochée à 222 072. En bas à gauche, le règlement : accepté 586 pièces soit 222 680, retenue 608, à payer 222 072, matières tissu consommé 1 004 mètres rendu 9 écart 7 mètres soit 0,7 pour cent dans la tolérance de 1. Trois tuiles : 586 sur 600 acceptées, retenue 608 dinars calculée pas négociée, écart matière 0,7 pour cent. Quantités, prix et noms sont un exemple construit.',
      header: 'Ordre OS-0147 · 11 nov. · Confection Nord · 600 chemises · 380 DA / pièce · délai 25 nov. · matières confiées · règle de retenue écrite dans l’ordre',
      terms: { title: 'Termes de l’ordre · acceptés le 11 nov.', sub: 'périmètre, prix, délai, retenue, matières : écrits avant', rows: [{ l: 'Quantité · prix', v: `600 × 380 = 228${NB}000` }, { l: 'Délai', v: '25 nov.' }, { l: 'Retenue par jour de retard', v: '1 % · plafond 10 %', hot: true }, { l: 'Matières confiées', v: '1 020 m tissu · 7 200 boutons' }, { l: 'Tolérance matière', v: '1 %' }] },
      eventsLabel: 'Événements · du portail partenaire et de l’atelier',
      events: [
        { d: '11 nov.', t: 'Ordre envoyé et accepté', sub: 'portail partenaire · ou WhatsApp pour qui n’a pas de logiciel' },
        { d: '13 nov.', t: 'Matières remises', sub: '1 020 m signés par le partenaire · solde matière ouvert' },
        { d: '18 nov.', t: 'Point d’avancement 40 %', sub: 'photo horodatée · jalon demandé par l’ordre' },
        { d: '24 nov.', t: '520 pièces livrées', sub: 'livraison partielle · dans le délai' },
        { d: '27 nov.', t: '80 pièces livrées · 2 jours de retard', sub: 'retard compté sur les 80, pas sur les 600', hot: true },
        { d: '27 nov.', t: 'Contrôle : 14 défauts majeurs / 600', sub: 'plan de contrôle · 586 acceptées · 14 refusées, photos' },
        { d: '28 nov.', t: 'Retenue calculée : 2 % sur 80 pièces', sub: '80 × 380 × 2 % = 608 DA · règle de l’ordre, pas une négociation' },
        { d: '28 nov.', t: 'Facture reçue 228 000 → rapprochée 222 072', sub: 'accepté 586 × 380 − retenue 608 · écart retourné au partenaire', hot: true },
      ],
      settle: { title: 'Règlement · calculé depuis l’ordre', sub: 'accepté, retenue, matières ; rien de saisi', rows: [{ l: 'Accepté 586 × 380', v: `222${NB}680` }, { l: 'Retenue retard', v: '− 608', hot: true }, { l: 'À payer', v: `222${NB}072` }, { l: 'Tissu consommé · rendu', v: '1 004 m · 9 m' }, { l: 'Écart matière', v: '7 m · 0,7 % ≤ 1 %' }] },
      tiles: [
        { big: '586 / 600', l1: 'pièces acceptées après contrôle', l2: 'les 14 refusées ont leurs photos et leur défaut codé' },
        { big: '608 DA', l1: 'de retenue, calculée par la règle de l’ordre', l2: '2 jours × 1 % sur les 80 pièces en retard', hot: true },
        { big: '0,7 %', l1: 'd’écart matière, dans la tolérance écrite', l2: 'solde tissu soldé à la réception' },
      ],
      rule: 'Les termes sont écrits et acceptés avant la première pièce ; le règlement est calculé depuis l’accepté, la retenue et les matières, jamais négocié après.',
      rule2: 'Le partenaire sans logiciel suit le même ordre par WhatsApp : accepter, photographier un jalon, livrer ; les règles sont les mêmes.',
      note: 'Quantités, prix, retenues et noms sont un exemple construit ; la règle de retenue est celle que le gérant écrit dans l’ordre, et sa validité est une question pour le conseil.',
    },
    partners: {
      title: 'Le tableau des partenaires sur 90 jours : délai, qualité, prix, matières',
      alt: 'Six lignes, une par partenaire, avec les ordres sur 90 jours, le taux de livraison à l’heure en barre contre un seuil de 85 pour cent, le taux de pièces acceptées, le prix par rapport à la référence, l’écart matière et le niveau. Confection Nord, 9 ordres, 78 pour cent à l’heure, 97,7 pour cent acceptées, prix référence, écart matière 0,7, normal. Atelier Sétif Couture, 11 ordres, 96 pour cent, 99,1, moins 4 pour cent, 0,4, préféré. Broderie Houria, 6 ordres, 100 pour cent, 98,5, plus 8 pour cent, 0,2, préféré. Façonnage Est, 7 ordres, 57 pour cent, 92,0, moins 9 pour cent, 3,1, surveillé en accent. Transport Lamine, 4 ordres, 100 pour cent, 100, référence, 0, normal. Atelier Bab Ezzouar, 5 ordres, 80 pour cent, 96,4, moins 2 pour cent, 1,2, normal. Trois tuiles : 42 ordres sur 90 jours ; 1 partenaire surveillé, 57 pour cent à l’heure et 3,1 pour cent de matière perdue ; prix moins 4 pour cent chez le préféré. Les données sont un exemple construit.',
      cols: ['Partenaire', 'Ordres', 'À l’heure', 'Acceptées', 'Prix / réf.', 'Écart mat.', 'Niveau'], threshold: 85, thrLabel: 'seuil 85 %',
      rows: [
        { name: 'Confection Nord', sub: 'chemises · 9 ordres', orders: '9', onTime: 78, onTimeT: '78 %', acc: '97,7 %', price: 'réf.', mat: '0,7 %', level: 'normal', levelT: 'normal' },
        { name: 'Atelier Sétif Couture', sub: 'pantalons · 11 ordres', orders: '11', onTime: 96, onTimeT: '96 %', acc: '99,1 %', price: '− 4 %', mat: '0,4 %', level: 'pref', levelT: 'préféré' },
        { name: 'Broderie Houria', sub: 'broderie · 6 ordres', orders: '6', onTime: 100, onTimeT: '100 %', acc: '98,5 %', price: '+ 8 %', mat: '0,2 %', level: 'pref', levelT: 'préféré' },
        { name: 'Façonnage Est', sub: 'chemises · 7 ordres', orders: '7', onTime: 57, onTimeT: '57 %', acc: '92,0 %', accHot: true, price: '− 9 %', mat: '3,1 %', matHot: true, level: 'watch', levelT: 'surveillé · 100 %' },
        { name: 'Transport Lamine', sub: 'livraisons · 4 ordres', orders: '4', onTime: 100, onTimeT: '100 %', acc: '100 %', price: 'réf.', mat: '—', level: 'normal', levelT: 'normal' },
        { name: 'Atelier Bab Ezzouar', sub: 'finitions · 5 ordres', orders: '5', onTime: 80, onTimeT: '80 %', acc: '96,4 %', price: '− 2 %', mat: '1,2 %', level: 'normal', levelT: 'normal' },
      ],
      tiles: [
        { big: '42 ordres', l1: 'sur 90 jours, six partenaires', l2: 'chaque ordre a son délai, son accepté, ses matières' },
        { big: '1 surveillé', l1: '57 % à l’heure, 3,1 % de matière perdue', l2: 'contrôle à 100 % ; plus d’ordre au-delà du seuil', hot: true },
        { big: '− 4 % · 96 %', l1: 'le préféré : sous le prix de référence et à l’heure', l2: 'le prix seul aurait choisi le surveillé' },
      ],
      rule: 'Un partenaire se lit sur quatre chiffres, délai, qualité, prix, matières ; le prix seul choisit le mauvais.',
      rule2: 'Le niveau suit les chiffres : préféré reçoit les ordres d’abord, surveillé est contrôlé à 100 % et perd les ordres au-delà du seuil.',
      note: 'Partenaires, taux, prix et seuils sont un exemple construit ; les seuils et les règles de niveau sont des décisions du gérant.',
    },
  },
  en: {
    order: {
      title: 'One subcontract order: terms, materials, milestones, acceptance, settlement',
      alt: 'A strip: order OS-0147 of 11 November, workshop Confection Nord, 600 shirts, 380 dinars a piece, deadline 25 November, consigned materials, retention rule written in the order. On the left, the terms: quantity 600, price 380 a piece so 228,000, deadline 25 November, retention 1 percent per day late capped at 10 percent, consigned materials fabric 1,020 metres, buttons 7,200, thread. On the right, a vertical event timeline: 11 November order sent and accepted on the portal; 13 November materials handed over, signed, 1,020 metres; 18 November progress 40 percent with photo; 24 November 520 pieces delivered, partial; 27 November 80 pieces delivered, two days late, accented; 27 November check 14 major defects out of 600, 586 accepted; 28 November retention computed 2 percent on the 80 late pieces; 28 November invoice received 228,000, matched to 222,072. Bottom left, the settlement: accepted 586 pieces so 222,680, retention 608, to pay 222,072, materials fabric consumed 1,004 metres returned 9 gap 7 metres so 0.7 percent within the 1 percent tolerance. Three tiles: 586 of 600 accepted, retention 608 dinars computed not negotiated, materials gap 0.7 percent. Quantities, prices and names are a constructed example.',
      header: 'Order OS-0147 · 11 Nov · Confection Nord · 600 shirts · 380 DA / piece · deadline 25 Nov · consigned materials · retention rule written in the order',
      terms: { title: 'Order terms · accepted 11 Nov', sub: 'scope, price, deadline, retention, materials: written before', rows: [{ l: 'Quantity · price', v: '600 × 380 = 228,000' }, { l: 'Deadline', v: '25 Nov' }, { l: 'Retention per day late', v: '1 % · cap 10 %', hot: true }, { l: 'Consigned materials', v: '1,020 m fabric · 7,200 buttons' }, { l: 'Materials tolerance', v: '1 %' }] },
      eventsLabel: 'Events · from the partner portal and the workshop',
      events: [
        { d: '11 Nov', t: 'Order sent and accepted', sub: 'partner portal · or WhatsApp for those without software' },
        { d: '13 Nov', t: 'Materials handed over', sub: '1,020 m signed by the partner · materials balance opened' },
        { d: '18 Nov', t: 'Progress 40 %', sub: 'timestamped photo · milestone required by the order' },
        { d: '24 Nov', t: '520 pieces delivered', sub: 'partial delivery · within the deadline' },
        { d: '27 Nov', t: '80 pieces delivered · 2 days late', sub: 'delay counted on the 80, not on the 600', hot: true },
        { d: '27 Nov', t: 'Check: 14 major defects / 600', sub: 'control plan · 586 accepted · 14 refused, photos' },
        { d: '28 Nov', t: 'Retention computed: 2 % on 80 pieces', sub: '80 × 380 × 2 % = 608 DA · the order’s rule, not a negotiation' },
        { d: '28 Nov', t: 'Invoice received 228,000 → matched 222,072', sub: 'accepted 586 × 380 − retention 608 · gap returned to the partner', hot: true },
      ],
      settle: { title: 'Settlement · computed from the order', sub: 'accepted, retention, materials; nothing typed', rows: [{ l: 'Accepted 586 × 380', v: '222,680' }, { l: 'Late retention', v: '− 608', hot: true }, { l: 'To pay', v: '222,072' }, { l: 'Fabric consumed · returned', v: '1,004 m · 9 m' }, { l: 'Materials gap', v: '7 m · 0.7 % ≤ 1 %' }] },
      tiles: [
        { big: '586 / 600', l1: 'pieces accepted after check', l2: 'the 14 refused have their photos and coded defect' },
        { big: '608 DA', l1: 'of retention, computed by the order’s rule', l2: '2 days × 1 % on the 80 late pieces', hot: true },
        { big: '0.7 %', l1: 'materials gap, within the written tolerance', l2: 'fabric balance settled at acceptance' },
      ],
      rule: 'Terms are written and accepted before the first piece; the settlement is computed from accepted, retention and materials, never negotiated afterwards.',
      rule2: 'A partner without software follows the same order by WhatsApp: accept, photograph a milestone, deliver; the rules are the same.',
      note: 'Quantities, prices, retentions and names are a constructed example; the retention rule is the one the manager writes in the order, and its validity is a question for counsel.',
    },
    partners: {
      title: 'The partner board over 90 days: deadline, quality, price, materials',
      alt: 'Six rows, one per partner, with orders over 90 days, on-time delivery rate as a bar against an 85 percent threshold, accepted-piece rate, price against reference, materials gap and level. Confection Nord, 9 orders, 78 percent on time, 97.7 percent accepted, reference price, materials gap 0.7, normal. Atelier Sétif Couture, 11 orders, 96 percent, 99.1, minus 4 percent, 0.4, preferred. Broderie Houria, 6 orders, 100 percent, 98.5, plus 8 percent, 0.2, preferred. Façonnage Est, 7 orders, 57 percent, 92.0, minus 9 percent, 3.1, watched accented. Transport Lamine, 4 orders, 100 percent, 100, reference, 0, normal. Atelier Bab Ezzouar, 5 orders, 80 percent, 96.4, minus 2 percent, 1.2, normal. Three tiles: 42 orders over 90 days; 1 watched partner, 57 percent on time and 3.1 percent materials lost; price minus 4 percent at the preferred one. The data is a constructed example.',
      cols: ['Partner', 'Orders', 'On time', 'Accepted', 'Price / ref.', 'Mat. gap', 'Level'], threshold: 85, thrLabel: 'threshold 85 %',
      rows: [
        { name: 'Confection Nord', sub: 'shirts · 9 orders', orders: '9', onTime: 78, onTimeT: '78 %', acc: '97.7 %', price: 'ref.', mat: '0.7 %', level: 'normal', levelT: 'normal' },
        { name: 'Atelier Sétif Couture', sub: 'trousers · 11 orders', orders: '11', onTime: 96, onTimeT: '96 %', acc: '99.1 %', price: '− 4 %', mat: '0.4 %', level: 'pref', levelT: 'preferred' },
        { name: 'Broderie Houria', sub: 'embroidery · 6 orders', orders: '6', onTime: 100, onTimeT: '100 %', acc: '98.5 %', price: '+ 8 %', mat: '0.2 %', level: 'pref', levelT: 'preferred' },
        { name: 'Façonnage Est', sub: 'shirts · 7 orders', orders: '7', onTime: 57, onTimeT: '57 %', acc: '92.0 %', accHot: true, price: '− 9 %', mat: '3.1 %', matHot: true, level: 'watch', levelT: 'watched · 100 %' },
        { name: 'Transport Lamine', sub: 'deliveries · 4 orders', orders: '4', onTime: 100, onTimeT: '100 %', acc: '100 %', price: 'ref.', mat: '—', level: 'normal', levelT: 'normal' },
        { name: 'Atelier Bab Ezzouar', sub: 'finishing · 5 orders', orders: '5', onTime: 80, onTimeT: '80 %', acc: '96.4 %', price: '− 2 %', mat: '1.2 %', level: 'normal', levelT: 'normal' },
      ],
      tiles: [
        { big: '42 orders', l1: 'over 90 days, six partners', l2: 'every order has its deadline, its accepted, its materials' },
        { big: '1 watched', l1: '57 % on time, 3.1 % materials lost', l2: '100 % inspection; no more orders beyond the threshold', hot: true },
        { big: '− 4 % · 96 %', l1: 'the preferred one: below reference and on time', l2: 'price alone would have chosen the watched one' },
      ],
      rule: 'A partner is read on four figures, deadline, quality, price, materials; price alone picks the wrong one.',
      rule2: 'The level follows the figures: preferred gets orders first, watched is inspected at 100 % and loses orders beyond the threshold.',
      note: 'Partners, rates, prices and thresholds are a constructed example; thresholds and level rules are the manager’s decisions.',
    },
  },
  ar: {
    order: {
      title: 'أمر مناولة واحد: شروط، مواد، مراحل، استلام، تسوية',
      alt: 'شريط: الأمر OS-0147 في 11 نوفمبر، ورشة الخياطة الشمالية، 600 قميص، 380 ديناراً للقطعة، أجل 25 نوفمبر، مواد مسلَّمة، قاعدة اقتطاع مكتوبة في الأمر. على اليمين الشروط: كمية 600، سعر 380 للقطعة أي 228,000، أجل 25 نوفمبر، اقتطاع 1 بالمائة لكل يوم تأخير بسقف 10 بالمائة، مواد مسلَّمة قماش 1,020 متراً، أزرار 7,200، خيط. على اليسار خط زمني عمودي للأحداث: 11 نوفمبر أمر مرسل ومقبول على البوابة؛ 13 نوفمبر مواد مسلَّمة موقَّعة 1,020 متراً؛ 18 نوفمبر تقدم 40 بالمائة بصورة؛ 24 نوفمبر 520 قطعة مسلَّمة جزئياً؛ 27 نوفمبر 80 قطعة مسلَّمة بتأخر يومين مميز؛ 27 نوفمبر مراقبة 14 عيباً كبيراً من 600، 586 مقبولة؛ 28 نوفمبر اقتطاع محسوب 2 بالمائة على القطع الثمانين المتأخرة؛ 28 نوفمبر فاتورة مستلَمة 228,000 مطابَقة بـ 222,072. أسفل اليمين التسوية: مقبول 586 قطعة أي 222,680، اقتطاع 608، للدفع 222,072، مواد قماش مستهلَك 1,004 أمتار مرجَع 9 فارق 7 أمتار أي 0.7 بالمائة ضمن سماحية 1. ثلاث بطاقات: 586 من 600 مقبولة، اقتطاع 608 دنانير محسوب لا متفاوَض عليه، فارق مواد 0.7 بالمائة. الكميات والأسعار والأسماء مثال مبني.',
      header: `الأمر ${I('OS-0147')} · ${I('11')} نوفمبر · الخياطة الشمالية · ${I('600')} قميص · ${I('380 DA')} / قطعة · أجل ${I('25')} نوفمبر · مواد مسلَّمة · قاعدة اقتطاع مكتوبة في الأمر`,
      terms: { title: `شروط الأمر · مقبولة ${I('11')} نوفمبر`, sub: 'نطاق، سعر، أجل، اقتطاع، مواد: مكتوبة قبلاً', rows: [{ l: 'كمية · سعر', v: I('600 × 380 = 228,000') }, { l: 'الأجل', v: `${I('25')} نوفمبر` }, { l: 'اقتطاع لكل يوم تأخير', v: `${I('1 %')} · سقف ${I('10 %')}`, hot: true }, { l: 'مواد مسلَّمة', v: `${I('1,020 m')} قماش · ${I('7,200')} زر` }, { l: 'سماحية المواد', v: I('1 %') }] },
      eventsLabel: 'الأحداث · من بوابة الشريك والورشة',
      events: [
        { d: `${I('11')} نوف`, t: 'أمر مرسل ومقبول', sub: 'بوابة الشريك · أو واتساب لمن لا برنامج له' },
        { d: `${I('13')} نوف`, t: 'مواد مسلَّمة', sub: `${I('1,020 m')} موقَّعة من الشريك · رصيد مواد مفتوح` },
        { d: `${I('18')} نوف`, t: `تقدم ${I('40 %')}`, sub: 'صورة موقَّتة · مرحلة يطلبها الأمر' },
        { d: `${I('24')} نوف`, t: `${I('520')} قطعة مسلَّمة`, sub: 'تسليم جزئي · ضمن الأجل' },
        { d: `${I('27')} نوف`, t: `${I('80')} قطعة مسلَّمة · تأخر يومين`, sub: `التأخر يُحسب على الـ ${I('80')} لا على الـ ${I('600')}`, hot: true },
        { d: `${I('27')} نوف`, t: `مراقبة: ${I('14')} عيباً كبيراً / ${I('600')}`, sub: `خطة مراقبة · ${I('586')} مقبولة · ${I('14')} مرفوضة بصور` },
        { d: `${I('28')} نوف`, t: `اقتطاع محسوب: ${I('2 %')} على ${I('80')} قطعة`, sub: `${I('80 × 380 × 2 % = 608 DA')} · قاعدة الأمر لا تفاوض` },
        { d: `${I('28')} نوف`, t: `فاتورة مستلَمة ${I('228,000')} ← مطابَقة ${I('222,072')}`, sub: `مقبول ${I('586 × 380')} − اقتطاع ${I('608')} · الفارق يُعاد للشريك`, hot: true },
      ],
      settle: { title: 'التسوية · محسوبة من الأمر', sub: 'مقبول، اقتطاع، مواد؛ لا شيء مكتوب يدوياً', rows: [{ l: `مقبول ${I('586 × 380')}`, v: I('222,680') }, { l: 'اقتطاع التأخر', v: I('− 608'), hot: true }, { l: 'للدفع', v: I('222,072') }, { l: 'قماش مستهلَك · مرجَع', v: I('1,004 m · 9 m') }, { l: 'فارق المواد', v: I('7 m · 0.7 % ≤ 1 %') }] },
      tiles: [
        { big: I('586 / 600'), l1: 'قطعة مقبولة بعد المراقبة', l2: `الـ ${I('14')} المرفوضة لها صورها وعيبها المرمَّز` },
        { big: I('608 DA'), l1: 'اقتطاع محسوب بقاعدة الأمر', l2: `يومان × ${I('1 %')} على القطع الـ ${I('80')} المتأخرة`, hot: true },
        { big: I('0.7 %'), l1: 'فارق مواد ضمن السماحية المكتوبة', l2: 'رصيد القماش مسوّى عند الاستلام' },
      ],
      rule: 'الشروط تُكتب وتُقبل قبل القطعة الأولى؛ والتسوية تُحسب من المقبول والاقتطاع والمواد ولا تُفاوَض بعدها أبداً.',
      rule2: 'الشريك الذي لا برنامج له يتبع الأمر نفسه بواتساب: يقبل، يصوّر مرحلة، يسلّم؛ والقواعد نفسها.',
      note: 'الكميات والأسعار والاقتطاعات والأسماء مثال مبني؛ وقاعدة الاقتطاع هي ما يكتبه المسيّر في الأمر، وصحتها مسألة للمستشار.',
    },
    partners: {
      title: 'لوحة الشركاء على 90 يوماً: أجل، جودة، سعر، مواد',
      alt: 'ستة أسطر، سطر لكل شريك، بالأوامر على 90 يوماً، ونسبة التسليم في الوقت كشريط مقابل عتبة 85 بالمائة، ونسبة القطع المقبولة، والسعر مقابل المرجع، وفارق المواد، والمستوى. الخياطة الشمالية، 9 أوامر، 78 بالمائة في الوقت، 97.7 مقبولة، سعر مرجعي، فارق مواد 0.7، عادي. ورشة سطيف للخياطة، 11 أمراً، 96 بالمائة، 99.1، ناقص 4 بالمائة، 0.4، مفضَّل. تطريز حورية، 6 أوامر، 100 بالمائة، 98.5، زائد 8 بالمائة، 0.2، مفضَّل. تصنيع الشرق، 7 أوامر، 57 بالمائة، 92.0، ناقص 9 بالمائة، 3.1، مراقَب مميز. نقل لمين، 4 أوامر، 100 بالمائة، 100، مرجع، 0، عادي. ورشة باب الزوار، 5 أوامر، 80 بالمائة، 96.4، ناقص 2 بالمائة، 1.2، عادي. ثلاث بطاقات: 42 أمراً على 90 يوماً؛ شريك واحد مراقَب، 57 بالمائة في الوقت و3.1 بالمائة مواد ضائعة؛ سعر ناقص 4 بالمائة عند المفضَّل. البيانات مثال مبني.',
      cols: ['الشريك', 'أوامر', 'في الوقت', 'مقبولة', 'سعر / مرجع', 'فارق مواد', 'المستوى'], threshold: 85, thrLabel: `عتبة ${I('85 %')}`,
      rows: [
        { name: 'الخياطة الشمالية', sub: `قمصان · ${I('9')} أوامر`, orders: I('9'), onTime: 78, onTimeT: I('78 %'), acc: I('97.7 %'), price: 'مرجع', mat: I('0.7 %'), level: 'normal', levelT: 'عادي' },
        { name: 'ورشة سطيف للخياطة', sub: `سراويل · ${I('11')} أمراً`, orders: I('11'), onTime: 96, onTimeT: I('96 %'), acc: I('99.1 %'), price: I('− 4 %'), mat: I('0.4 %'), level: 'pref', levelT: 'مفضَّل' },
        { name: 'تطريز حورية', sub: `تطريز · ${I('6')} أوامر`, orders: I('6'), onTime: 100, onTimeT: I('100 %'), acc: I('98.5 %'), price: I('+ 8 %'), mat: I('0.2 %'), level: 'pref', levelT: 'مفضَّل' },
        { name: 'تصنيع الشرق', sub: `قمصان · ${I('7')} أوامر`, orders: I('7'), onTime: 57, onTimeT: I('57 %'), acc: I('92.0 %'), accHot: true, price: I('− 9 %'), mat: I('3.1 %'), matHot: true, level: 'watch', levelT: `مراقَب · ${I('100 %')}` },
        { name: 'نقل لمين', sub: `توصيل · ${I('4')} أوامر`, orders: I('4'), onTime: 100, onTimeT: I('100 %'), acc: I('100 %'), price: 'مرجع', mat: '—', level: 'normal', levelT: 'عادي' },
        { name: 'ورشة باب الزوار', sub: `تشطيب · ${I('5')} أوامر`, orders: I('5'), onTime: 80, onTimeT: I('80 %'), acc: I('96.4 %'), price: I('− 2 %'), mat: I('1.2 %'), level: 'normal', levelT: 'عادي' },
      ],
      tiles: [
        { big: `${I('42')} أمراً`, l1: `على ${I('90')} يوماً، ستة شركاء`, l2: 'لكل أمر أجله ومقبوله ومواده' },
        { big: `${I('1')} مراقَب`, l1: `${I('57 %')} في الوقت، ${I('3.1 %')} مواد ضائعة`, l2: `مراقبة ${I('100 %')}؛ لا أوامر بعد العتبة`, hot: true },
        { big: I('− 4 % · 96 %'), l1: 'المفضَّل: تحت المرجع وفي الوقت', l2: 'السعر وحده كان سيختار المراقَب' },
      ],
      rule: 'الشريك يُقرأ على أربعة أرقام، الأجل والجودة والسعر والمواد؛ والسعر وحده يختار الخطأ.',
      rule2: 'المستوى يتبع الأرقام: المفضَّل يتلقى الأوامر أولاً، والمراقَب يُراقَب 100 بالمائة ويفقد الأوامر بعد العتبة.',
      note: 'الشركاء والنسب والأسعار والعتبات مثال مبني؛ والعتبات وقواعد المستوى قرارات المسيّر.',
    },
  },
};
