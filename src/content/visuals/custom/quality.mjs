// Bespoke animated figures for the 2027 "the same defect comes back and we still
// pay the supplier" post.
//  inspection(): one controlled reception: identity strip, the written control plan
//                (sample size, acceptance number), the checklist with measured values
//                and verdicts, the computed result, the decision panel and the claim;
//                three tiles. Rows appear, the result draws.
//  scorecard():  the supplier board over 90 days: six suppliers with non-conformity
//                rate as a growing bar, open claims, median closing time, inspection
//                level; two suppliers accented; three tiles.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function draw(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{stroke-dashoffset:1000}${(at + dur).toFixed(1)}%,100%{stroke-dashoffset:0}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function grow(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
const I = (x) => `⁦${x}⁩`;

export function inspection(t, rtl) {
  const c = ctx(rtl); const P = 'qi'; const css = []; const H = 620;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: 'rgba(242,181,68,0.06)' }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  // plan panel (left)
  const px = 80, pw = 300, py = 146;
  s += `<g style="animation:${show(css, P, 'p', 4)}">` + rect(c, px, py, pw, 120, { stroke: C.line2, fill: C.fill }) + text(c, px + 12, py + 20, t.plan.title, { size: 10.5, fill: C.fg, weight: 500 }) + text(c, px + 12, py + 34, t.plan.sub, { size: 8, font: 'mono', fill: C.fg55 });
  t.plan.rows.forEach((r, i) => { const y = py + 54 + i * 18; s += text(c, px + 12, y, r.l, { size: 9, fill: C.fg70 }) + text(c, px + pw - 12, y, r.v, { size: 9.5, font: 'mono', fill: r.hot ? C.accent : C.fg, anchor: 'end', weight: r.hot ? 500 : 400 }); });
  s += '</g>';
  // decision panel (left, below)
  const dy = py + 136;
  s += `<g style="animation:${show(css, P, 'd', 17)}">` + rect(c, px, dy, pw, 150, { stroke: C.accent, fill: 'rgba(242,181,68,0.06)' }) + text(c, px + 12, dy + 20, t.decision.title, { size: 10.5, fill: C.accent, weight: 500 }) + text(c, px + 12, dy + 34, t.decision.sub, { size: 8, font: 'mono', fill: C.fg55 });
  t.decision.rows.forEach((r, i) => { const y = dy + 54 + i * 18; s += text(c, px + 12, y, r.l, { size: 9, fill: r.pick ? C.fg : C.fg35 }) + (r.v ? text(c, px + pw - 12, y, r.v, { size: 9, font: 'mono', fill: r.pick ? C.accent : C.fg35, anchor: 'end' }) : ''); });
  s += text(c, px + 12, dy + 140, t.decision.note, { size: 8, font: 'mono', fill: C.fg55 }) + '</g>';
  // checklist (right)
  const cx = 410, cw = 710, cy = 146; const cols = [cx, cx + 230, cx + 540];
  s += text(c, cols[0], cy, t.cols[0], { size: 9, font: 'mono', fill: C.fg35, letter: 1.2, upper: true }) + text(c, cols[1], cy, t.cols[1], { size: 9, font: 'mono', fill: C.fg35, letter: 1.2, upper: true }) + text(c, cols[2], cy, t.cols[2], { size: 9, font: 'mono', fill: C.fg35, letter: 1.2, upper: true }) + line(c, cx, cy + 8, cx + cw, cy + 8, { stroke: C.line2 });
  t.checks.forEach((r, i) => {
    const y = cy + 30 + i * 36; const at = 6 + i * 1.5; const bad = r.verdict === 'major'; const minor = r.verdict === 'minor';
    s += `<g style="animation:${show(css, P, `c${i}`, at)}">` + text(c, cols[0], y, r.name, { size: 10, fill: C.fg, weight: 500 }) + text(c, cols[0], y + 13, r.rule, { size: 7.5, font: 'mono', fill: C.fg55 })
      + text(c, cols[1], y, r.found, { size: 9.5, font: 'mono', fill: bad ? C.accent : C.fg70 }) + (r.found2 ? text(c, cols[1], y + 13, r.found2, { size: 7.5, font: 'mono', fill: C.fg55 }) : '')
      + rect(c, cols[2], y - 11, 150, 20, { stroke: bad ? C.accent : minor ? C.line2 : 'none', fill: bad ? 'rgba(242,181,68,0.22)' : minor ? 'rgba(255,255,255,0.06)' : 'none' }) + text(c, cols[2] + 8, y + 3, r.label, { size: 9, font: 'mono', fill: bad ? C.accent : minor ? C.fg70 : C.fg55 })
      + line(c, cx, y + 20, cx + cw, y + 20, { stroke: C.line }) + '</g>';
  });
  // result
  const ry = cy + 30 + t.checks.length * 36 + 6;
  s += `<line x1="${c.X(cx)}" y1="${ry}" x2="${c.X(cx + cw)}" y2="${ry}" stroke="${C.accent}" stroke-width="1.6" pathLength="1000" style="stroke-dashoffset:0;animation:${draw(css, P, 'rl', 15, 2)}"/>`;
  s += `<g style="animation:${show(css, P, 'r', 16.5)}">` + text(c, cx, ry + 20, t.result, { size: 11.5, fill: C.accent, weight: 500 }) + text(c, cx, ry + 36, t.result2, { size: 9, font: 'mono', fill: C.fg70 }) + '</g>';
  const ky = Math.max(ry + 56, dy + 166);
  t.tiles.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, 20 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? 'rgba(242,181,68,0.06)' : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  s += text(c, 80, ky + 86, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"],svg line[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

export function scorecard(t, rtl) {
  const c = ctx(rtl); const P = 'qs'; const css = []; const H = 600;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  const cols = [80, 330, 400, 680, 800, 940]; const hy = 104; const barW = 210; const MAXP = 25;
  s += t.cols.map((h, i) => text(c, cols[i], hy, h, { size: 9, font: 'mono', fill: C.fg35, letter: 1.2, upper: true })).join('') + line(c, 80, hy + 8, 1120, hy + 8, { stroke: C.line2 });
  const tx = cols[2] + (t.threshold / MAXP) * barW;
  s += line(c, tx, hy + 12, tx, hy + 12 + t.rows.length * 50, { stroke: C.accent, dash: '3 3' }) + text(c, tx, hy + 12 + t.rows.length * 50 + 12, t.thrLabel, { size: 8, font: 'mono', fill: C.accent, anchor: 'middle' });
  t.rows.forEach((r, i) => {
    const y = hy + 42 + i * 50; const at = 3 + i * 1.8; const hot = r.rate >= t.threshold;
    s += `<g style="animation:${show(css, P, `r${i}`, at)}">`
      + text(c, cols[0], y - 3, r.name, { size: 11, fill: hot ? C.accent : C.fg, weight: 500 }) + text(c, cols[0], y + 11, r.sub, { size: 8, font: 'mono', fill: C.fg55 })
      + text(c, cols[1], y + 2, r.rec, { size: 10, font: 'mono', fill: C.fg70 })
      + text(c, cols[2] + barW + 10, y + 2, r.rateT, { size: 9.5, font: 'mono', fill: hot ? C.accent : C.fg55 })
      + text(c, cols[3], y - 3, r.claims, { size: 10, font: 'mono', fill: hot ? C.accent : C.fg }) + text(c, cols[3], y + 11, r.claimsSub, { size: 7.5, font: 'mono', fill: C.fg55 })
      + text(c, cols[4], y - 3, r.close, { size: 10, font: 'mono', fill: C.fg }) + text(c, cols[4], y + 11, r.closeSub, { size: 7.5, font: 'mono', fill: C.fg55 })
      + rect(c, cols[5], y - 13, 180, 22, { stroke: r.level === 'tight' ? C.accent : r.level === 'reduced' ? C.line2 : C.line2, fill: r.level === 'tight' ? 'rgba(242,181,68,0.22)' : r.level === 'reduced' ? 'rgba(255,255,255,0.10)' : 'none' }) + text(c, cols[5] + 8, y + 2, r.levelT, { size: 9, font: 'mono', fill: r.level === 'tight' ? C.accent : C.fg70 })
      + line(c, 80, y + 22, 1120, y + 22, { stroke: C.line }) + '</g>';
    s += `<g style="transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'};animation:${grow(css, P, `g${i}`, at + 0.5, 1.5)}">` + rect(c, cols[2], y - 7, Math.max(Math.round((Math.min(r.rate, MAXP) / MAXP) * barW), 2), 10, { stroke: 'none', fill: hot ? C.accent : r.rate > 0 ? C.fg55 : C.fg35 }) + '</g>';
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
    inspection: {
      title: 'Une réception contrôlée : plan, échantillon, verdict, décision',
      alt: 'Un bandeau : réception R-2211 du 11 novembre, fournisseur Emballages Nord, commande PO-0831 ligne 2, 1 200 bouteilles PET d’un litre, lot fournisseur L-1107. À gauche, le plan de contrôle écrit par le responsable qualité : échantillon de 32 unités sur 1 200, accepter si au plus 2 défauts majeurs, mesures de diamètre sur 5 unités, test de fuite sur 10. Au centre, six lignes de contrôle : quantité 1 200 sur 1 200 conforme ; étiquette et lot conformes ; cartons, 1 écrasé sur 40, mineur ; diamètre du col 28 millimètres plus ou moins 0,3, cinq mesures dont une à 28,4 hors tolérance, majeur ; fuite, 2 sur 10, majeur ; couleur conforme. Un trait accentué puis le résultat : 3 défauts majeurs sur 2 admis, lot en quarantaine, non-conformité NC-0419 ouverte. En bas à gauche, la décision : accepter, accepter sous dérogation, retour, tri à 100 pour cent, avec le tri choisi : 1 164 acceptées, 36 rebutées, avoir demandé, facture bloquée. Trois tuiles : 32 unités échantillonnées, 3 défauts majeurs, facture bloquée jusqu’à l’avoir. Les quantités et règles sont un exemple construit.',
      header: 'Réception R-2211 · 11 nov. · Emballages Nord · PO-0831 ligne 2 · 1 200 bouteilles PET 1 L · lot fournisseur L-1107 · contrôlée par Samir',
      plan: { title: 'Plan de contrôle · bouteille PET 1 L', sub: 'écrit par le responsable qualité · version 3', rows: [{ l: 'Échantillon', v: '32 / 1 200' }, { l: 'Accepter si défauts majeurs', v: '≤ 2', hot: true }, { l: 'Mesures de diamètre', v: '5 unités' }, { l: 'Test de fuite', v: '10 unités' }] },
      cols: ['Contrôle · règle', 'Constaté', 'Verdict'],
      checks: [
        { name: 'Quantité', rule: 'comptée contre la ligne de commande', found: '1 200 / 1 200', verdict: 'ok', label: 'conforme' },
        { name: 'Étiquette et lot', rule: 'lot fournisseur lisible, photographié', found: 'L-1107 · photo', verdict: 'ok', label: 'conforme' },
        { name: 'Cartons', rule: 'aucun carton écrasé ou ouvert', found: '1 écrasé / 40', found2: 'photo · contenu intact', verdict: 'minor', label: 'mineur' },
        { name: 'Diamètre du col', rule: '28,0 mm ± 0,3 · 5 mesures', found: '28,1 · 28,0 · 28,4 · 28,1 · 27,9', found2: '1 hors tolérance', verdict: 'major', label: 'majeur · 1' },
        { name: 'Fuite', rule: 'test sous pression · 10 unités', found: '2 fuites / 10', found2: 'photos · unités isolées', verdict: 'major', label: 'majeur · 2' },
        { name: 'Couleur', rule: 'contre l’échantillon de référence', found: 'identique', verdict: 'ok', label: 'conforme' },
      ],
      result: 'Résultat : 3 défauts majeurs sur 2 admis → lot en quarantaine · NC-0419 ouverte à 10:52',
      result2: 'calculé par l’application depuis le plan et les constats ; le magasinier ne décide pas seul',
      decision: { title: 'Décision · NC-0419 · responsable qualité', sub: 'une seule option, signée, liée à la ligne PO-0831/2', rows: [{ l: 'Accepter', v: '' }, { l: 'Accepter sous dérogation', v: '' }, { l: 'Retour complet', v: '' }, { l: 'Tri à 100 % par le fournisseur', v: '1 164 ok · 36 rebut', pick: true }], note: 'avoir demandé 36 × 42 DA · facture bloquée' },
      tiles: [
        { big: '32 unités', l1: 'échantillon tiré selon le plan écrit', l2: 'le plan vient d’une table ou d’une décision, pas du magasinier' },
        { big: '3 défauts majeurs', l1: 'contre 2 admis : verdict calculé', l2: 'photos et mesures attachées à la non-conformité', hot: true },
        { big: 'Facture bloquée', l1: 'jusqu’à l’avoir ou la décision', l2: 'le rapprochement facture-commande attend NC-0419' },
      ],
      rule: 'Le plan de contrôle est écrit avant la réception ; le verdict est calculé depuis les constats ; la décision est signée et liée à la ligne de commande.',
      rule2: 'Une non-conformité ouverte bloque la facture : on ne paie pas ce qu’on conteste.',
      note: 'Quantités, mesures, tolérances et règles d’acceptation sont un exemple construit ; l’échantillon et le nombre admis sont des décisions du responsable qualité.',
    },
    scorecard: {
      title: 'Le tableau fournisseurs sur 90 jours : taux, réclamations, niveau de contrôle',
      alt: 'Six lignes, une par fournisseur, avec les réceptions sur 90 jours, le taux de non-conformité en barre contre un seuil de 10 pour cent, les réclamations ouvertes, le délai médian de clôture et le niveau de contrôle. Emballages Nord, 14 réceptions, 21 pour cent, 3 réclamations ouvertes, 19 jours, contrôle renforcé, accentué. Verre Sud, 22 réceptions, 0 pour cent, 0 réclamation, contrôle réduit. Étiquettes Express, 31 réceptions, 3 pour cent, 1 ouverte, 6 jours, normal. Arômes et Concentrés, 9 réceptions, 11 pour cent, 2 ouvertes, 24 jours, renforcé, accentué. Cartonnerie Centre, 18 réceptions, 6 pour cent, 0 ouverte, 8 jours, normal. Bouchons Plus, 26 réceptions, 4 pour cent, 1 ouverte, 5 jours, normal. Trois tuiles : 5,8 pour cent de taux global, 2 fournisseurs en contrôle renforcé, 11 jours de clôture médiane. Les données sont un exemple construit.',
      cols: ['Fournisseur', 'Récept.', 'Taux de non-conformité', 'Réclam.', 'Clôture', 'Niveau de contrôle'], threshold: 10, thrLabel: 'seuil 10 %',
      rows: [
        { name: 'Emballages Nord', sub: 'bouteilles PET · 3 articles', rec: '14', rate: 21, rateT: '21 %', claims: '3 ouvertes', claimsSub: '7 sur 90 j', close: '19 j', closeSub: 'médiane', level: 'tight', levelT: 'renforcé · 100 %' },
        { name: 'Verre Sud', sub: 'bocaux · 2 articles', rec: '22', rate: 0, rateT: '0 %', claims: '0', claimsSub: '0 sur 90 j', close: '—', closeSub: '', level: 'reduced', levelT: 'réduit · 1 sur 3' },
        { name: 'Étiquettes Express', sub: 'étiquettes · 12 articles', rec: '31', rate: 3, rateT: '3 %', claims: '1 ouverte', claimsSub: '2 sur 90 j', close: '6 j', closeSub: 'médiane', level: 'normal', levelT: 'normal' },
        { name: 'Arômes et Concentrés', sub: 'matières · 4 articles', rec: '9', rate: 11, rateT: '11 %', claims: '2 ouvertes', claimsSub: '2 sur 90 j', close: '24 j', closeSub: 'médiane', level: 'tight', levelT: 'renforcé · 100 %' },
        { name: 'Cartonnerie Centre', sub: 'cartons · 5 articles', rec: '18', rate: 6, rateT: '6 %', claims: '0', claimsSub: '1 sur 90 j', close: '8 j', closeSub: 'médiane', level: 'normal', levelT: 'normal' },
        { name: 'Bouchons Plus', sub: 'bouchons · 3 articles', rec: '26', rate: 4, rateT: '4 %', claims: '1 ouverte', claimsSub: '2 sur 90 j', close: '5 j', closeSub: 'médiane', level: 'normal', levelT: 'normal' },
      ],
      tiles: [
        { big: '5,8 %', l1: 'taux global de non-conformité sur 120 réceptions', l2: 'lignes non conformes ÷ lignes reçues' },
        { big: '2 en renforcé', l1: 'au-dessus du seuil de 10 % : contrôle à 100 %', l2: 'retour au normal après 5 réceptions conformes', hot: true },
        { big: '11 j', l1: 'délai médian de clôture d’une réclamation', l2: 'de l’ouverture à l’avoir ou au remplacement' },
      ],
      rule: 'Le niveau de contrôle d’un fournisseur suit son taux : au-dessus du seuil, tout est contrôlé ; sous le seuil pendant assez longtemps, une réception sur trois.',
      rule2: 'Le tableau se lit avant la prochaine commande : on commande chez qui livre conforme, pas chez qui promet.',
      note: 'Fournisseurs, taux, délais et seuils sont un exemple construit ; le seuil et les règles de passage sont des décisions du responsable qualité.',
    },
  },
  en: {
    inspection: {
      title: 'One controlled reception: plan, sample, verdict, decision',
      alt: 'A strip: reception R-2211 of 11 November, supplier Emballages Nord, purchase order PO-0831 line 2, 1,200 one-litre PET bottles, supplier lot L-1107. On the left, the control plan written by the quality lead: sample of 32 units out of 1,200, accept if at most 2 major defects, diameter measured on 5 units, leak test on 10. In the centre, six check rows: quantity 1,200 of 1,200 conforming; label and lot conforming; boxes, 1 crushed out of 40, minor; neck diameter 28 millimetres plus or minus 0.3, five measurements including one at 28.4 out of tolerance, major; leak, 2 out of 10, major; colour conforming. An accented line then the result: 3 major defects against 2 allowed, lot in quarantine, non-conformity NC-0419 opened. Bottom left, the decision: accept, accept under waiver, full return, 100 percent sorting, with sorting chosen: 1,164 accepted, 36 scrapped, credit note requested, invoice blocked. Three tiles: 32 units sampled, 3 major defects, invoice blocked until the credit note. Quantities and rules are a constructed example.',
      header: 'Reception R-2211 · 11 Nov · Emballages Nord · PO-0831 line 2 · 1,200 PET bottles 1 L · supplier lot L-1107 · checked by Samir',
      plan: { title: 'Control plan · PET bottle 1 L', sub: 'written by the quality lead · version 3', rows: [{ l: 'Sample', v: '32 / 1,200' }, { l: 'Accept if major defects', v: '≤ 2', hot: true }, { l: 'Diameter measurements', v: '5 units' }, { l: 'Leak test', v: '10 units' }] },
      cols: ['Check · rule', 'Found', 'Verdict'],
      checks: [
        { name: 'Quantity', rule: 'counted against the order line', found: '1,200 / 1,200', verdict: 'ok', label: 'conforming' },
        { name: 'Label and lot', rule: 'supplier lot readable, photographed', found: 'L-1107 · photo', verdict: 'ok', label: 'conforming' },
        { name: 'Boxes', rule: 'no crushed or open box', found: '1 crushed / 40', found2: 'photo · contents intact', verdict: 'minor', label: 'minor' },
        { name: 'Neck diameter', rule: '28.0 mm ± 0.3 · 5 measurements', found: '28.1 · 28.0 · 28.4 · 28.1 · 27.9', found2: '1 out of tolerance', verdict: 'major', label: 'major · 1' },
        { name: 'Leak', rule: 'pressure test · 10 units', found: '2 leaks / 10', found2: 'photos · units set aside', verdict: 'major', label: 'major · 2' },
        { name: 'Colour', rule: 'against the reference sample', found: 'identical', verdict: 'ok', label: 'conforming' },
      ],
      result: 'Result: 3 major defects against 2 allowed → lot in quarantine · NC-0419 opened at 10:52',
      result2: 'computed by the application from the plan and the findings; the storekeeper does not decide alone',
      decision: { title: 'Decision · NC-0419 · quality lead', sub: 'one option, signed, linked to line PO-0831/2', rows: [{ l: 'Accept', v: '' }, { l: 'Accept under waiver', v: '' }, { l: 'Full return', v: '' }, { l: '100 % sorting by the supplier', v: '1,164 ok · 36 scrap', pick: true }], note: 'credit note requested 36 × 42 DA · invoice blocked' },
      tiles: [
        { big: '32 units', l1: 'sample drawn according to the written plan', l2: 'the plan comes from a table or a decision, not the storekeeper' },
        { big: '3 major defects', l1: 'against 2 allowed: computed verdict', l2: 'photos and measurements attached to the non-conformity', hot: true },
        { big: 'Invoice blocked', l1: 'until the credit note or the decision', l2: 'invoice-to-order matching waits for NC-0419' },
      ],
      rule: 'The control plan is written before the reception; the verdict is computed from the findings; the decision is signed and linked to the order line.',
      rule2: 'An open non-conformity blocks the invoice: what is disputed is not paid.',
      note: 'Quantities, measurements, tolerances and acceptance rules are a constructed example; the sample and the allowed number are the quality lead’s decisions.',
    },
    scorecard: {
      title: 'The supplier board over 90 days: rate, claims, inspection level',
      alt: 'Six rows, one per supplier, with receptions over 90 days, the non-conformity rate as a bar against a 10 percent threshold, open claims, median closing time and inspection level. Emballages Nord, 14 receptions, 21 percent, 3 open claims, 19 days, tightened inspection, accented. Verre Sud, 22 receptions, 0 percent, 0 claims, reduced inspection. Étiquettes Express, 31 receptions, 3 percent, 1 open, 6 days, normal. Arômes et Concentrés, 9 receptions, 11 percent, 2 open, 24 days, tightened, accented. Cartonnerie Centre, 18 receptions, 6 percent, 0 open, 8 days, normal. Bouchons Plus, 26 receptions, 4 percent, 1 open, 5 days, normal. Three tiles: 5.8 percent overall rate, 2 suppliers under tightened inspection, 11 days median closing. The data is a constructed example.',
      cols: ['Supplier', 'Recept.', 'Non-conformity rate', 'Claims', 'Closing', 'Inspection level'], threshold: 10, thrLabel: 'threshold 10 %',
      rows: [
        { name: 'Emballages Nord', sub: 'PET bottles · 3 items', rec: '14', rate: 21, rateT: '21 %', claims: '3 open', claimsSub: '7 in 90 d', close: '19 d', closeSub: 'median', level: 'tight', levelT: 'tightened · 100 %' },
        { name: 'Verre Sud', sub: 'jars · 2 items', rec: '22', rate: 0, rateT: '0 %', claims: '0', claimsSub: '0 in 90 d', close: '—', closeSub: '', level: 'reduced', levelT: 'reduced · 1 in 3' },
        { name: 'Étiquettes Express', sub: 'labels · 12 items', rec: '31', rate: 3, rateT: '3 %', claims: '1 open', claimsSub: '2 in 90 d', close: '6 d', closeSub: 'median', level: 'normal', levelT: 'normal' },
        { name: 'Arômes et Concentrés', sub: 'materials · 4 items', rec: '9', rate: 11, rateT: '11 %', claims: '2 open', claimsSub: '2 in 90 d', close: '24 d', closeSub: 'median', level: 'tight', levelT: 'tightened · 100 %' },
        { name: 'Cartonnerie Centre', sub: 'boxes · 5 items', rec: '18', rate: 6, rateT: '6 %', claims: '0', claimsSub: '1 in 90 d', close: '8 d', closeSub: 'median', level: 'normal', levelT: 'normal' },
        { name: 'Bouchons Plus', sub: 'caps · 3 items', rec: '26', rate: 4, rateT: '4 %', claims: '1 open', claimsSub: '2 in 90 d', close: '5 d', closeSub: 'median', level: 'normal', levelT: 'normal' },
      ],
      tiles: [
        { big: '5.8 %', l1: 'overall non-conformity rate over 120 receptions', l2: 'non-conforming lines ÷ received lines' },
        { big: '2 tightened', l1: 'above the 10 % threshold: 100 % inspection', l2: 'back to normal after 5 conforming receptions', hot: true },
        { big: '11 d', l1: 'median time to close a claim', l2: 'from opening to credit note or replacement' },
      ],
      rule: 'A supplier’s inspection level follows its rate: above the threshold, everything is checked; below it long enough, one reception in three.',
      rule2: 'The board is read before the next order: buy from whoever delivers conforming goods, not from whoever promises.',
      note: 'Suppliers, rates, delays and thresholds are a constructed example; the threshold and switching rules are the quality lead’s decisions.',
    },
  },
  ar: {
    inspection: {
      title: 'استلام مراقَب: خطة، عيّنة، حكم، قرار',
      alt: 'شريط: الاستلام R-2211 في 11 نوفمبر، المورد Emballages Nord، أمر الشراء PO-0831 السطر 2، 1,200 قارورة PET سعة لتر، دفعة المورد L-1107. على اليمين خطة المراقبة التي كتبها مسؤول الجودة: عيّنة 32 وحدة من 1,200، القبول إن كان عدد العيوب الكبرى 2 على الأكثر، قياس القطر على 5 وحدات، اختبار التسرب على 10. في الوسط ستة أسطر مراقبة: الكمية 1,200 من 1,200 مطابقة؛ الملصق والدفعة مطابقان؛ الكراتين، 1 مسحوق من 40، صغير؛ قطر العنق 28 ملم زائد أو ناقص 0.3، خمسة قياسات منها واحد 28.4 خارج السماحية، كبير؛ تسرب 2 من 10، كبير؛ اللون مطابق. خط مميز ثم النتيجة: 3 عيوب كبرى مقابل 2 مسموح، الدفعة في الحجر، عدم مطابقة NC-0419 مفتوحة. أسفل اليمين القرار: قبول، قبول باستثناء، إرجاع كامل، فرز 100 بالمائة، والفرز هو المختار: 1,164 مقبولة، 36 متلفة، إشعار دائن مطلوب، الفاتورة محجوزة. ثلاث بطاقات: 32 وحدة في العيّنة، 3 عيوب كبرى، فاتورة محجوزة حتى الإشعار الدائن. الكميات والقواعد مثال مبني.',
      header: `الاستلام ${I('R-2211')} · ${I('11')} نوفمبر · ${I('Emballages Nord')} · ${I('PO-0831')} السطر ${I('2')} · ${I('1,200')} قارورة ${I('PET 1 L')} · دفعة المورد ${I('L-1107')} · راقبها سمير`,
      plan: { title: `خطة المراقبة · قارورة ${I('PET 1 L')}`, sub: `كتبها مسؤول الجودة · الإصدار ${I('3')}`, rows: [{ l: 'العيّنة', v: I('32 / 1,200') }, { l: 'القبول إن كانت العيوب الكبرى', v: I('≤ 2'), hot: true }, { l: 'قياسات القطر', v: `${I('5')} وحدات` }, { l: 'اختبار التسرب', v: `${I('10')} وحدات` }] },
      cols: ['المراقبة · القاعدة', 'المعاين', 'الحكم'],
      checks: [
        { name: 'الكمية', rule: 'تُعدّ مقابل سطر الطلبية', found: I('1,200 / 1,200'), verdict: 'ok', label: 'مطابق' },
        { name: 'الملصق والدفعة', rule: 'دفعة المورد مقروءة ومصوَّرة', found: `${I('L-1107')} · صورة`, verdict: 'ok', label: 'مطابق' },
        { name: 'الكراتين', rule: 'لا كرتونة مسحوقة أو مفتوحة', found: `${I('1')} مسحوقة / ${I('40')}`, found2: 'صورة · المحتوى سليم', verdict: 'minor', label: 'صغير' },
        { name: 'قطر العنق', rule: `${I('28.0 mm ± 0.3')} · ${I('5')} قياسات`, found: I('28.1 · 28.0 · 28.4 · 28.1 · 27.9'), found2: `${I('1')} خارج السماحية`, verdict: 'major', label: `كبير · ${I('1')}` },
        { name: 'التسرب', rule: `اختبار تحت الضغط · ${I('10')} وحدات`, found: `${I('2')} تسرب / ${I('10')}`, found2: 'صور · وحدات معزولة', verdict: 'major', label: `كبير · ${I('2')}` },
        { name: 'اللون', rule: 'مقابل العيّنة المرجعية', found: 'مطابق', verdict: 'ok', label: 'مطابق' },
      ],
      result: `النتيجة: ${I('3')} عيوب كبرى مقابل ${I('2')} مسموح ← الدفعة في الحجر · ${I('NC-0419')} فُتحت ${I('10:52')}`,
      result2: 'يحسبها التطبيق من الخطة والمعاينات؛ وأمين المخزن لا يقرر وحده',
      decision: { title: `القرار · ${I('NC-0419')} · مسؤول الجودة`, sub: `خيار واحد، موقَّع، مرتبط بالسطر ${I('PO-0831/2')}`, rows: [{ l: 'قبول', v: '' }, { l: 'قبول باستثناء', v: '' }, { l: 'إرجاع كامل', v: '' }, { l: `فرز ${I('100 %')} من المورد`, v: `${I('1,164')} سليمة · ${I('36')} تالفة`, pick: true }], note: `إشعار دائن مطلوب ${I('36 × 42 DA')} · الفاتورة محجوزة` },
      tiles: [
        { big: `${I('32')} وحدة`, l1: 'عيّنة مسحوبة وفق الخطة المكتوبة', l2: 'الخطة من جدول أو قرار، لا من أمين المخزن' },
        { big: `${I('3')} عيوب كبرى`, l1: `مقابل ${I('2')} مسموح: حكم محسوب`, l2: 'صور وقياسات مرفقة بعدم المطابقة', hot: true },
        { big: 'فاتورة محجوزة', l1: 'حتى الإشعار الدائن أو القرار', l2: `مطابقة الفاتورة بالطلبية تنتظر ${I('NC-0419')}` },
      ],
      rule: 'خطة المراقبة تُكتب قبل الاستلام؛ والحكم يُحسب من المعاينات؛ والقرار يُوقَّع ويُربط بسطر الطلبية.',
      rule2: 'عدم المطابقة المفتوحة تحجز الفاتورة: لا يُدفع ما يُنازَع فيه.',
      note: 'الكميات والقياسات والسماحيات وقواعد القبول مثال مبني؛ والعيّنة والعدد المسموح قرارا مسؤول الجودة.',
    },
    scorecard: {
      title: 'لوحة الموردين على 90 يوماً: النسبة، المطالبات، مستوى المراقبة',
      alt: 'ستة أسطر، سطر لكل مورد، بالاستلامات على 90 يوماً، ونسبة عدم المطابقة كشريط مقابل عتبة 10 بالمائة، والمطالبات المفتوحة، ومهلة الإغلاق الوسيطة، ومستوى المراقبة. Emballages Nord، 14 استلاماً، 21 بالمائة، 3 مطالبات مفتوحة، 19 يوماً، مراقبة مشددة، مميز. Verre Sud، 22 استلاماً، 0 بالمائة، 0 مطالبة، مراقبة مخففة. Étiquettes Express، 31، 3 بالمائة، 1 مفتوحة، 6 أيام، عادية. Arômes et Concentrés، 9، 11 بالمائة، 2 مفتوحتان، 24 يوماً، مشددة، مميز. Cartonnerie Centre، 18، 6 بالمائة، 0، 8 أيام، عادية. Bouchons Plus، 26، 4 بالمائة، 1 مفتوحة، 5 أيام، عادية. ثلاث بطاقات: 5.8 بالمائة نسبة إجمالية، 2 موردان في مراقبة مشددة، 11 يوماً إغلاق وسيط. البيانات مثال مبني.',
      cols: ['المورد', 'استلام', 'نسبة عدم المطابقة', 'مطالبات', 'الإغلاق', 'مستوى المراقبة'], threshold: 10, thrLabel: `عتبة ${I('10 %')}`,
      rows: [
        { name: I('Emballages Nord'), sub: `قوارير ${I('PET')} · ${I('3')} أصناف`, rec: I('14'), rate: 21, rateT: I('21 %'), claims: `${I('3')} مفتوحة`, claimsSub: `${I('7')} في ${I('90')} يوماً`, close: `${I('19')} يوماً`, closeSub: 'وسيط', level: 'tight', levelT: `مشددة · ${I('100 %')}` },
        { name: I('Verre Sud'), sub: `برطمانات · ${I('2')} صنفان`, rec: I('22'), rate: 0, rateT: I('0 %'), claims: I('0'), claimsSub: `${I('0')} في ${I('90')} يوماً`, close: '—', closeSub: '', level: 'reduced', levelT: `مخففة · ${I('1')} من ${I('3')}` },
        { name: I('Étiquettes Express'), sub: `ملصقات · ${I('12')} صنفاً`, rec: I('31'), rate: 3, rateT: I('3 %'), claims: `${I('1')} مفتوحة`, claimsSub: `${I('2')} في ${I('90')} يوماً`, close: `${I('6')} أيام`, closeSub: 'وسيط', level: 'normal', levelT: 'عادية' },
        { name: I('Arômes et Concentrés'), sub: `مواد · ${I('4')} أصناف`, rec: I('9'), rate: 11, rateT: I('11 %'), claims: `${I('2')} مفتوحتان`, claimsSub: `${I('2')} في ${I('90')} يوماً`, close: `${I('24')} يوماً`, closeSub: 'وسيط', level: 'tight', levelT: `مشددة · ${I('100 %')}` },
        { name: I('Cartonnerie Centre'), sub: `كراتين · ${I('5')} أصناف`, rec: I('18'), rate: 6, rateT: I('6 %'), claims: I('0'), claimsSub: `${I('1')} في ${I('90')} يوماً`, close: `${I('8')} أيام`, closeSub: 'وسيط', level: 'normal', levelT: 'عادية' },
        { name: I('Bouchons Plus'), sub: `سدادات · ${I('3')} أصناف`, rec: I('26'), rate: 4, rateT: I('4 %'), claims: `${I('1')} مفتوحة`, claimsSub: `${I('2')} في ${I('90')} يوماً`, close: `${I('5')} أيام`, closeSub: 'وسيط', level: 'normal', levelT: 'عادية' },
      ],
      tiles: [
        { big: I('5.8 %'), l1: `نسبة عدم مطابقة إجمالية على ${I('120')} استلاماً`, l2: 'أسطر غير مطابقة ÷ أسطر مستلَمة' },
        { big: `${I('2')} في مشددة`, l1: `فوق عتبة ${I('10 %')}: مراقبة ${I('100 %')}`, l2: `عودة إلى العادية بعد ${I('5')} استلامات مطابقة`, hot: true },
        { big: `${I('11')} يوماً`, l1: 'مهلة وسيطة لإغلاق مطالبة', l2: 'من الفتح إلى الإشعار الدائن أو الاستبدال' },
      ],
      rule: 'مستوى مراقبة المورد يتبع نسبته: فوق العتبة يُراقَب كل شيء؛ وتحتها مدة كافية، استلام من ثلاثة.',
      rule2: 'اللوحة تُقرأ قبل الطلبية التالية: نشتري ممن يسلّم مطابقاً لا ممن يعد.',
      note: 'الموردون والنسب والمهل والعتبات مثال مبني؛ والعتبة وقواعد الانتقال قرارات مسؤول الجودة.',
    },
  },
};
