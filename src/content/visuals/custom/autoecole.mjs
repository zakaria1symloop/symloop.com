// Bespoke animated figures for the 2027 "logiciel auto-école en Algérie" post.
//  parcours():  one candidate's path: identity strip, a code panel (online series,
//               mock exam, exam date), a twenty-lesson grid that fills square by
//               square (done, cancelled in time, no-show counted, remaining) with
//               the skills grid summary, and the instalments panel (collected with
//               receipt, due, reminder); three tiles.
//  planning():  the week's schedule: three instructors × six days, each cell the
//               lessons booked over capacity as a growing bar, cancellations and
//               no-shows marked, one vehicle immobilised one day with lessons moved;
//               weekly totals panel; three tiles.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function grow(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
const I = (x) => `⁦${x}⁩`;

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

export function parcours(t, rtl) {
  const c = ctx(rtl); const P = 'ap'; const css = []; const H = 640;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: 'rgba(242,181,68,0.06)' }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  // code panel (left top)
  s += panel(c, css, P, 'code', 4, 80, 146, 330, 134, t.code, false);
  // instalments panel (left bottom)
  s += panel(c, css, P, 'pay', 18, 80, 296, 330, 152, t.pay, true);
  // lessons grid (right)
  const gx = 450, gy = 150; const cell = 56, gap = 8; const cols = 10;
  s += text(c, gx, gy - 6, t.gridLabel, { size: 9, font: 'mono', fill: C.fg35, letter: 1.2, upper: true });
  t.lessons.forEach((l, i) => {
    const col = i % cols, row = Math.floor(i / cols); const x = gx + col * (cell + gap), y = gy + 10 + row * (cell + gap); const at = 5 + i * 0.55;
    const st = l.s; const fill = st === 'done' ? 'rgba(255,255,255,0.16)' : st === 'noshow' ? 'rgba(242,181,68,0.22)' : st === 'cancel' ? 'rgba(255,255,255,0.05)' : 'none';
    const stroke = st === 'noshow' ? C.accent : st === 'left' ? C.line : C.line2;
    s += `<g style="animation:${show(css, P, `l${i}`, at)}">` + rect(c, x, y, cell, cell, { stroke, fill, dash: st === 'left' ? '3 3' : undefined }) + text(c, x + 6, y + 14, String(i + 1), { size: 8, font: 'mono', fill: st === 'noshow' ? C.accent : C.fg55 });
    if (l.d) s += text(c, x + 6, y + cell - 18, l.d, { size: 7.5, font: 'mono', fill: C.fg55 });
    if (l.g) s += text(c, x + 6, y + cell - 7, l.g, { size: 7.5, font: 'mono', fill: st === 'noshow' ? C.accent : C.fg70 });
    s += '</g>';
  });
  const ly = gy + 10 + 2 * (cell + gap) + 6;
  s += text(c, gx, ly + 8, t.legend, { size: 8.5, font: 'mono', fill: C.fg55 });
  // skills summary (right, below grid)
  s += panel(c, css, P, 'sk', 16, 450, ly + 22, 670, 112, t.skills, false);
  const ky = 464;
  s += tiles(c, css, P, ky, t.tiles, 21);
  s += text(c, 80, ky + 86, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

export function planning(t, rtl) {
  const c = ctx(rtl); const P = 'aw'; const css = []; const H = 600;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  const gx = 80, gy = 104; const nameW = 150; const cw = 92, ch = 54; const days = t.days.length;
  s += t.days.map((d, j) => text(c, gx + nameW + j * cw + cw / 2, gy, d, { size: 9, font: 'mono', fill: C.fg35, letter: 1.2, upper: true, anchor: 'middle' })).join('') + line(c, gx, gy + 8, gx + nameW + days * cw, gy + 8, { stroke: C.line2 });
  t.rows.forEach((r, i) => {
    const y = gy + 18 + i * (ch + 10); const at = 3 + i * 1.6;
    s += `<g style="animation:${show(css, P, `r${i}`, at)}">` + text(c, gx, y + 22, r.name, { size: 11, fill: C.fg, weight: 500 }) + text(c, gx, y + 36, r.sub, { size: 8, font: 'mono', fill: C.fg55 });
    r.cells.forEach((cell, j) => {
      const x = gx + nameW + j * cw + 4; const hot = cell.off;
      s += rect(c, x, y, cw - 8, ch - 6, { stroke: hot ? C.accent : C.line, fill: hot ? 'rgba(242,181,68,0.08)' : 'none', dash: hot ? '3 3' : undefined });
      s += text(c, x + 8, y + 16, cell.t, { size: 9.5, font: 'mono', fill: hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 8, y + 30, cell.s || '', { size: 7.5, font: 'mono', fill: hot ? C.accent : C.fg55 });
    });
    s += '</g>';
    r.cells.forEach((cell, j) => {
      if (cell.off) return; const x = gx + nameW + j * cw + 4;
      s += `<g style="transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'};animation:${grow(css, P, `b${i}${j}`, at + 0.4 + j * 0.15, 1)}">` + rect(c, x + 8, y + ch - 16, Math.max(Math.round(((cw - 24) * cell.n) / cell.cap), 2), 5, { stroke: 'none', fill: cell.n >= cell.cap ? C.accent : C.fg55 }) + '</g>';
    });
  });
  const ly = gy + 18 + t.rows.length * (ch + 10) + 2;
  s += text(c, gx, ly + 8, t.legend, { size: 8.5, font: 'mono', fill: C.fg55 });
  // totals panel (right)
  s += panel(c, css, P, 'tot', 12, 820, gy + 10, 300, 206, t.totals, true);
  const ky = Math.max(ly + 26, gy + 10 + 206 + 14);
  s += tiles(c, css, P, ky, t.tiles, 15);
  s += text(c, 80, ky + 86, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

const NB = ' ';
export const STRINGS = {
  fr: {
    parcours: {
      title: 'Le parcours d’un candidat : code, vingt leçons comptées, grille, tranches',
      alt: 'Un bandeau : candidate S., inscrite le 12 janvier, forfait de 20 leçons d’une heure écrit par la direction, 38 000 dinars en trois tranches, moniteur Karim, véhicule A. À gauche, le panneau code : 1 420 questions faites dans l’application, dont 640 hors ligne, dernière série blanche 36 sur 40, examen du code le 9 février, réussi. En dessous, le panneau des tranches : tranche 1, 15 000 dinars encaissée le 12 janvier avec reçu ; tranche 2, 13 000 encaissée le 2 février, par le père depuis Lyon, reçu aux deux ; tranche 3, 10 000 due le 1er mars, rappel WhatsApp envoyé le 25 février, en accent ; règle écrite : la quinzième leçon ne se réserve pas tant que la tranche 3 n’est pas encaissée. À droite, une grille de vingt cases, une par leçon : quatorze faites avec date et note de grille, deux annulées à temps non comptées, une absence comptée en accent, trois restantes en pointillé. En dessous, la grille de compétences : huit compétences, cinq acquises, deux en cours, une non vue, évaluées par le moniteur à la fin de chaque leçon sur son téléphone. Trois tuiles : 14 faites, 1 absence comptée, 3 restantes ; 28 000 encaissés sur 38 000, rappel le 25 février ; 36 sur 40 à la dernière série, code réussi le 9 février. Candidate, dates et chiffres sont un exemple construit.',
      header: 'Candidate S. · inscrite le 12 janv. · forfait 20 leçons × 1 h (règle de la direction) · 38 000 DA en 3 tranches · moniteur Karim · véhicule A',
      code: { title: 'Code · dans l’application, même sans réseau', sub: 'séries, série blanche, progression vue par le moniteur', rows: [{ l: 'Questions faites', v: `1${NB}420 · dont 640 hors ligne` }, { l: 'Dernière série blanche', v: '36 / 40' }, { l: 'Examen du code', v: '9 févr. · réussi', hot: true }, { l: 'Fiches revues', v: '42 / 50' }] },
      pay: { title: 'Tranches · chaque encaissement a un reçu', sub: 'espèces à l’accueil, ou en ligne depuis la France', rows: [{ l: 'Tranche 1 · 12 janv.', v: `15${NB}000 · reçu` }, { l: 'Tranche 2 · 2 févr. · le père, depuis Lyon', v: `13${NB}000 · reçu aux deux` }, { l: 'Tranche 3 · due le 1er mars', v: `10${NB}000 · rappel 25 févr.`, hot: true }, { l: 'Règle écrite', v: 'leçon 15 bloquée sans tranche 3' }, { l: 'Encaissé · restant', v: `28${NB}000 · 10${NB}000` }] },
      gridLabel: 'Vingt leçons · une case par leçon · comptées par la règle écrite',
      lessons: [
        { s: 'done', d: '14 janv.', g: '3/8' }, { s: 'done', d: '16 janv.', g: '3/8' }, { s: 'done', d: '19 janv.', g: '4/8' }, { s: 'cancel', d: '21 janv.', g: 'annulée' }, { s: 'done', d: '23 janv.', g: '4/8' },
        { s: 'done', d: '26 janv.', g: '5/8' }, { s: 'done', d: '28 janv.', g: '5/8' }, { s: 'noshow', d: '30 janv.', g: 'absence' }, { s: 'done', d: '2 févr.', g: '5/8' }, { s: 'done', d: '4 févr.', g: '6/8' },
        { s: 'done', d: '6 févr.', g: '6/8' }, { s: 'cancel', d: '9 févr.', g: 'annulée' }, { s: 'done', d: '11 févr.', g: '6/8' }, { s: 'done', d: '13 févr.', g: '7/8' }, { s: 'done', d: '16 févr.', g: '7/8' },
        { s: 'done', d: '18 févr.', g: '7/8' }, { s: 'done', d: '20 févr.', g: '7/8' }, { s: 'left', d: '', g: '' }, { s: 'left', d: '', g: '' }, { s: 'left', d: '', g: '' },
      ],
      legend: 'case pleine : faite, avec la note de grille · grise : annulée à temps, non comptée · dorée : absence comptée · pointillé : restante',
      skills: { title: 'Grille de compétences · remplie par le moniteur à la fin de chaque leçon', sub: 'huit compétences écrites par la direction · acquis, en cours, non vu', rows: [{ l: 'Acquises', v: '5 / 8 · démarrage, créneau, giratoire, ville, nuit' }, { l: 'En cours', v: '2 / 8 · autoroute, stationnement en côte' }, { l: 'Non vue', v: '1 / 8 · conduite sous pluie', hot: true }] },
      tiles: [
        { big: '14 · 1 · 3', l1: 'faites · absence comptée · restantes', l2: 'deux annulées à temps, non comptées' },
        { big: `28${NB}000 / 38${NB}000`, l1: 'encaissés · reçu à chaque fois', l2: 'rappel de la tranche 3 parti le 25 février', hot: true },
        { big: '36 / 40 · 9 févr.', l1: 'dernière série blanche · code réussi', l2: 'séries faites hors ligne, vues par le moniteur' },
      ],
      rule: 'Chaque leçon est comptée par la règle écrite, évaluée sur la grille par le moniteur, et payée par une tranche avec reçu ;',
      rule2: 'le candidat, son père à Lyon et la direction lisent le même compteur.',
      note: 'Candidate, dates, prix et chiffres sont un exemple construit ; le forfait et la grille sont ceux que la direction écrit.',
    },
    planning: {
      title: 'La semaine du planning : trois moniteurs, trois véhicules, six jours',
      alt: 'Une grille de trois lignes, Karim, Nadia, Yacine, un moniteur et son véhicule par ligne, sur six colonnes du samedi au jeudi. Chaque case montre les leçons réservées sur la capacité de huit par jour, avec une barre : Karim 8 sur 8 samedi, 7 dimanche, 8 lundi, 6 mardi, 8 mercredi, 5 jeudi ; Nadia 8, 8, 7, immobilisé mardi en accent, véhicule B au garage, les sept leçons déplacées sur mercredi et jeudi, 8 mercredi, 8 jeudi ; Yacine 6, 7, 7, 8, 7, 6. Les cases notent les annulations à temps et les absences comptées. À droite, le panneau des totaux : 118 leçons planifiées sur 144 places, taux d’occupation 82 pour cent, 9 annulées à temps, 4 absences comptées, 7 leçons déplacées pour le véhicule B, 23 rappels de la veille envoyés par WhatsApp, 0 doublon. Trois tuiles : 118 sur 144, 82 pour cent ; 9 annulées, 4 absences ; 7 déplacées, candidats prévenus à 7h40. Noms et chiffres sont un exemple construit.',
      days: ['Sam.', 'Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.'],
      rows: [
        { name: 'Karim · véhicule A', sub: 'boîte manuelle · 8 créneaux / jour', cells: [{ t: '8 / 8', n: 8, cap: 8 }, { t: '7 / 8', s: '1 annulée', n: 7, cap: 8 }, { t: '8 / 8', n: 8, cap: 8 }, { t: '6 / 8', s: '1 absence', n: 6, cap: 8 }, { t: '8 / 8', n: 8, cap: 8 }, { t: '5 / 8', n: 5, cap: 8 }] },
        { name: 'Nadia · véhicule B', sub: 'boîte manuelle · 8 créneaux / jour', cells: [{ t: '8 / 8', n: 8, cap: 8 }, { t: '8 / 8', n: 8, cap: 8 }, { t: '7 / 8', s: '1 annulée', n: 7, cap: 8 }, { t: 'immobilisé', s: 'garage · 7 déplacées', off: true, n: 0, cap: 8 }, { t: '8 / 8', s: '+4 déplacées', n: 8, cap: 8 }, { t: '8 / 8', s: '+3 déplacées', n: 8, cap: 8 }] },
        { name: 'Yacine · véhicule C', sub: 'boîte automatique · 8 créneaux / jour', cells: [{ t: '6 / 8', s: '1 absence', n: 6, cap: 8 }, { t: '7 / 8', n: 7, cap: 8 }, { t: '7 / 8', s: '2 annulées', n: 7, cap: 8 }, { t: '8 / 8', n: 8, cap: 8 }, { t: '7 / 8', s: '1 absence', n: 7, cap: 8 }, { t: '6 / 8', s: '1 annulée', n: 6, cap: 8 }] },
      ],
      legend: 'barre : réservées sur la capacité du jour · dorée : complet · pointillé : véhicule immobilisé, leçons déplacées',
      totals: { title: 'Semaine · totaux lus par la direction', sub: 'un planning par moniteur et par véhicule, zéro doublon', rows: [{ l: 'Leçons planifiées', v: '118 / 144 · 82 %', hot: true }, { l: 'Annulées à temps · non comptées', v: '9' }, { l: 'Absences comptées', v: '4' }, { l: 'Déplacées · véhicule B', v: '7' }, { l: 'Rappels de la veille · WhatsApp', v: '23' }, { l: 'Doublons', v: '0' }, { l: 'Heures moniteurs · payées sur le réel', v: '118 h' }] },
      tiles: [
        { big: '118 / 144 · 82 %', l1: 'leçons planifiées · occupation', l2: 'par moniteur et par véhicule' },
        { big: '9 · 4', l1: 'annulées à temps · absences comptées', l2: 'selon la règle d’annulation écrite' },
        { big: '7 déplacées', l1: 'véhicule B immobilisé mardi', l2: 'candidats prévenus à 7h40 par WhatsApp', hot: true },
      ],
      rule: 'Un créneau existe une seule fois, pour un moniteur et un véhicule ; une annulation suit la règle écrite,',
      rule2: 'et un véhicule immobilisé déplace ses leçons avant que les candidats ne partent de chez eux.',
      note: 'Moniteurs, véhicules et chiffres sont un exemple construit.',
    },
  },
  en: {
    parcours: {
      title: 'One candidate’s path: theory, twenty counted lessons, skills grid, instalments',
      alt: 'A strip: candidate S., enrolled 12 January, 20-lesson package of one hour written by management, 38,000 dinars in three instalments, instructor Karim, vehicle A. Left, the theory panel: 1,420 questions done in the app, 640 of them offline, last mock test 36 of 40, theory exam on 9 February, passed. Below, the instalments panel: instalment 1, 15,000 dinars collected 12 January with receipt; instalment 2, 13,000 collected 2 February, by the father from Lyon, receipt to both; instalment 3, 10,000 due 1 March, WhatsApp reminder sent 25 February, accented; written rule: lesson fifteen cannot be booked until instalment 3 is collected. Right, a grid of twenty boxes, one per lesson: fourteen done with date and grid score, two cancelled in time not counted, one no-show counted, accented, three remaining dashed. Below, the skills grid: eight skills, five acquired, two in progress, one not seen, rated by the instructor at the end of each lesson on their phone. Three tiles: 14 done, 1 no-show counted, 3 remaining; 28,000 collected of 38,000, reminder on 25 February; 36 of 40 on the last mock test, theory passed 9 February. Candidate, dates and figures are a constructed example.',
      header: 'Candidate S. · enrolled 12 Jan · 20-lesson × 1 h package (management’s rule) · 38,000 DA in 3 instalments · instructor Karim · vehicle A',
      code: { title: 'Theory · in the app, even without network', sub: 'series, mock test, progress seen by the instructor', rows: [{ l: 'Questions done', v: '1,420 · 640 of them offline' }, { l: 'Last mock test', v: '36 / 40' }, { l: 'Theory exam', v: '9 Feb · passed', hot: true }, { l: 'Sheets reviewed', v: '42 / 50' }] },
      pay: { title: 'Instalments · every collection has a receipt', sub: 'cash at the desk, or online from France', rows: [{ l: 'Instalment 1 · 12 Jan', v: '15,000 · receipt' }, { l: 'Instalment 2 · 2 Feb · the father, from Lyon', v: '13,000 · receipt to both' }, { l: 'Instalment 3 · due 1 Mar', v: '10,000 · reminder 25 Feb', hot: true }, { l: 'Written rule', v: 'lesson 15 blocked without instalment 3' }, { l: 'Collected · remaining', v: '28,000 · 10,000' }] },
      gridLabel: 'Twenty lessons · one box per lesson · counted by the written rule',
      lessons: [
        { s: 'done', d: '14 Jan', g: '3/8' }, { s: 'done', d: '16 Jan', g: '3/8' }, { s: 'done', d: '19 Jan', g: '4/8' }, { s: 'cancel', d: '21 Jan', g: 'cancelled' }, { s: 'done', d: '23 Jan', g: '4/8' },
        { s: 'done', d: '26 Jan', g: '5/8' }, { s: 'done', d: '28 Jan', g: '5/8' }, { s: 'noshow', d: '30 Jan', g: 'no-show' }, { s: 'done', d: '2 Feb', g: '5/8' }, { s: 'done', d: '4 Feb', g: '6/8' },
        { s: 'done', d: '6 Feb', g: '6/8' }, { s: 'cancel', d: '9 Feb', g: 'cancelled' }, { s: 'done', d: '11 Feb', g: '6/8' }, { s: 'done', d: '13 Feb', g: '7/8' }, { s: 'done', d: '16 Feb', g: '7/8' },
        { s: 'done', d: '18 Feb', g: '7/8' }, { s: 'done', d: '20 Feb', g: '7/8' }, { s: 'left', d: '', g: '' }, { s: 'left', d: '', g: '' }, { s: 'left', d: '', g: '' },
      ],
      legend: 'filled box: done, with grid score · grey: cancelled in time, not counted · gold: no-show counted · dashed: remaining',
      skills: { title: 'Skills grid · filled by the instructor at the end of each lesson', sub: 'eight skills written by management · acquired, in progress, not seen', rows: [{ l: 'Acquired', v: '5 / 8 · moving off, parallel parking, roundabout, city, night' }, { l: 'In progress', v: '2 / 8 · motorway, hill parking' }, { l: 'Not seen', v: '1 / 8 · driving in rain', hot: true }] },
      tiles: [
        { big: '14 · 1 · 3', l1: 'done · no-show counted · remaining', l2: 'two cancelled in time, not counted' },
        { big: '28,000 / 38,000', l1: 'collected · receipt every time', l2: 'instalment 3 reminder sent 25 February', hot: true },
        { big: '36 / 40 · 9 Feb', l1: 'last mock test · theory passed', l2: 'series done offline, seen by the instructor' },
      ],
      rule: 'Each lesson is counted by the written rule, rated on the grid by the instructor, and paid by an instalment with a receipt;',
      rule2: 'the candidate, her father in Lyon and management read the same counter.',
      note: 'Candidate, dates, prices and figures are a constructed example; the package and the grid are the ones management writes.',
    },
    planning: {
      title: 'The week’s schedule: three instructors, three vehicles, six days',
      alt: 'A grid of three rows, Karim, Nadia, Yacine, one instructor and their vehicle per row, over six columns from Saturday to Thursday. Each cell shows lessons booked over a capacity of eight per day, with a bar: Karim 8 of 8 Saturday, 7 Sunday, 8 Monday, 6 Tuesday, 8 Wednesday, 5 Thursday; Nadia 8, 8, 7, immobilised Tuesday, accented, vehicle B at the garage, the seven lessons moved to Wednesday and Thursday, 8 Wednesday, 8 Thursday; Yacine 6, 7, 7, 8, 7, 6. Cells note cancellations in time and counted no-shows. Right, the totals panel: 118 lessons scheduled over 144 slots, 82 percent occupancy, 9 cancelled in time, 4 no-shows counted, 7 lessons moved for vehicle B, 23 day-before reminders sent by WhatsApp, 0 duplicates. Three tiles: 118 of 144, 82 percent; 9 cancelled, 4 no-shows; 7 moved, candidates told at 7:40. Names and figures are a constructed example.',
      days: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu'],
      rows: [
        { name: 'Karim · vehicle A', sub: 'manual · 8 slots / day', cells: [{ t: '8 / 8', n: 8, cap: 8 }, { t: '7 / 8', s: '1 cancelled', n: 7, cap: 8 }, { t: '8 / 8', n: 8, cap: 8 }, { t: '6 / 8', s: '1 no-show', n: 6, cap: 8 }, { t: '8 / 8', n: 8, cap: 8 }, { t: '5 / 8', n: 5, cap: 8 }] },
        { name: 'Nadia · vehicle B', sub: 'manual · 8 slots / day', cells: [{ t: '8 / 8', n: 8, cap: 8 }, { t: '8 / 8', n: 8, cap: 8 }, { t: '7 / 8', s: '1 cancelled', n: 7, cap: 8 }, { t: 'immobilised', s: 'garage · 7 moved', off: true, n: 0, cap: 8 }, { t: '8 / 8', s: '+4 moved', n: 8, cap: 8 }, { t: '8 / 8', s: '+3 moved', n: 8, cap: 8 }] },
        { name: 'Yacine · vehicle C', sub: 'automatic · 8 slots / day', cells: [{ t: '6 / 8', s: '1 no-show', n: 6, cap: 8 }, { t: '7 / 8', n: 7, cap: 8 }, { t: '7 / 8', s: '2 cancelled', n: 7, cap: 8 }, { t: '8 / 8', n: 8, cap: 8 }, { t: '7 / 8', s: '1 no-show', n: 7, cap: 8 }, { t: '6 / 8', s: '1 cancelled', n: 6, cap: 8 }] },
      ],
      legend: 'bar: booked over the day’s capacity · gold: full · dashed: vehicle immobilised, lessons moved',
      totals: { title: 'Week · totals read by management', sub: 'one schedule per instructor and vehicle, zero duplicates', rows: [{ l: 'Lessons scheduled', v: '118 / 144 · 82 %', hot: true }, { l: 'Cancelled in time · not counted', v: '9' }, { l: 'No-shows counted', v: '4' }, { l: 'Moved · vehicle B', v: '7' }, { l: 'Day-before reminders · WhatsApp', v: '23' }, { l: 'Duplicates', v: '0' }, { l: 'Instructor hours · paid on actuals', v: '118 h' }] },
      tiles: [
        { big: '118 / 144 · 82 %', l1: 'lessons scheduled · occupancy', l2: 'per instructor and per vehicle' },
        { big: '9 · 4', l1: 'cancelled in time · no-shows counted', l2: 'per the written cancellation rule' },
        { big: '7 moved', l1: 'vehicle B immobilised Tuesday', l2: 'candidates told at 7:40 by WhatsApp', hot: true },
      ],
      rule: 'A slot exists once, for one instructor and one vehicle; a cancellation follows the written rule,',
      rule2: 'and an immobilised vehicle moves its lessons before candidates leave home.',
      note: 'Instructors, vehicles and figures are a constructed example.',
    },
  },
  ar: {
    parcours: {
      title: 'مسار مترشّح: القانون، عشرون حصة محسوبة، شبكة المهارات، الأقساط',
      alt: 'شريط: المترشّحة س.، مسجَّلة في 12 جانفي، باقة 20 حصة بساعة كتبتها الإدارة، 38 000 دينار في ثلاثة أقساط، المدرّب كريم، السيارة أ. يساراً لوحة القانون: 1 420 سؤالاً أُنجزت في التطبيق، منها 640 دون شبكة، آخر سلسلة تجريبية 36 من 40، امتحان القانون في 9 فيفري، ناجح. أسفلها لوحة الأقساط: القسط 1، 15 000 دينار حُصّل في 12 جانفي بوصل؛ القسط 2، 13 000 حُصّل في 2 فيفري من الأب من ليون، وصل للاثنين؛ القسط 3، 10 000 مستحق في 1 مارس، تذكير واتساب أُرسل في 25 فيفري، مبرز؛ قاعدة مكتوبة: الحصة الخامسة عشرة لا تُحجز ما لم يُحصَّل القسط 3. يميناً شبكة من عشرين خانة، خانة لكل حصة: أربع عشرة منجزة بالتاريخ ونقطة الشبكة، اثنتان ملغاتان في الوقت غير محسوبتين، غياب واحد محسوب مبرز، ثلاث متبقية منقّطة. أسفلها شبكة المهارات: ثماني مهارات، خمس مكتسبة، اثنتان قيد الاكتساب، واحدة لم تُر، يقيّمها المدرّب آخر كل حصة على هاتفه. ثلاث بطاقات: 14 منجزة، 1 غياب محسوب، 3 متبقية؛ 28 000 محصَّلة من 38 000، تذكير في 25 فيفري؛ 36 من 40 في آخر سلسلة، القانون ناجح في 9 فيفري. المترشّحة والتواريخ والأرقام مثال مبني.',
      header: 'المترشّحة س. · مسجَّلة 12 جانفي · باقة 20 حصة × ساعة (قاعدة الإدارة) · 38 000 دج في 3 أقساط · المدرّب كريم · السيارة أ',
      code: { title: 'القانون · في التطبيق، حتى دون شبكة', sub: 'سلاسل، سلسلة تجريبية، تقدّم يراه المدرّب', rows: [{ l: 'أسئلة منجزة', v: `1${NB}420 · منها 640 دون شبكة` }, { l: 'آخر سلسلة تجريبية', v: I('36 / 40') }, { l: 'امتحان القانون', v: '9 فيفري · ناجح', hot: true }, { l: 'بطاقات مراجَعة', v: I('42 / 50') }] },
      pay: { title: 'الأقساط · لكل تحصيل وصل', sub: 'نقداً في الاستقبال، أو عبر الإنترنت من فرنسا', rows: [{ l: 'القسط 1 · 12 جانفي', v: `15${NB}000 · وصل` }, { l: 'القسط 2 · 2 فيفري · الأب، من ليون', v: `13${NB}000 · وصل للاثنين` }, { l: 'القسط 3 · مستحق 1 مارس', v: `10${NB}000 · تذكير 25 فيفري`, hot: true }, { l: 'قاعدة مكتوبة', v: 'الحصة 15 محجوبة دون القسط 3' }, { l: 'محصَّل · متبقٍ', v: `28${NB}000 · 10${NB}000` }] },
      gridLabel: 'عشرون حصة · خانة لكل حصة · تُحسب بالقاعدة المكتوبة',
      lessons: [
        { s: 'done', d: '14 جانفي', g: I('3/8') }, { s: 'done', d: '16 جانفي', g: I('3/8') }, { s: 'done', d: '19 جانفي', g: I('4/8') }, { s: 'cancel', d: '21 جانفي', g: 'ملغاة' }, { s: 'done', d: '23 جانفي', g: I('4/8') },
        { s: 'done', d: '26 جانفي', g: I('5/8') }, { s: 'done', d: '28 جانفي', g: I('5/8') }, { s: 'noshow', d: '30 جانفي', g: 'غياب' }, { s: 'done', d: '2 فيفري', g: I('5/8') }, { s: 'done', d: '4 فيفري', g: I('6/8') },
        { s: 'done', d: '6 فيفري', g: I('6/8') }, { s: 'cancel', d: '9 فيفري', g: 'ملغاة' }, { s: 'done', d: '11 فيفري', g: I('6/8') }, { s: 'done', d: '13 فيفري', g: I('7/8') }, { s: 'done', d: '16 فيفري', g: I('7/8') },
        { s: 'done', d: '18 فيفري', g: I('7/8') }, { s: 'done', d: '20 فيفري', g: I('7/8') }, { s: 'left', d: '', g: '' }, { s: 'left', d: '', g: '' }, { s: 'left', d: '', g: '' },
      ],
      legend: 'خانة ممتلئة: منجزة بنقطة الشبكة · رمادية: ملغاة في الوقت، غير محسوبة · ذهبية: غياب محسوب · منقّطة: متبقية',
      skills: { title: 'شبكة المهارات · يملؤها المدرّب آخر كل حصة', sub: 'ثماني مهارات كتبتها الإدارة · مكتسب، قيد الاكتساب، لم يُر', rows: [{ l: 'مكتسبة', v: `${I('5 / 8')} · الانطلاق، الركن الموازي، الدوّار، المدينة، الليل` }, { l: 'قيد الاكتساب', v: `${I('2 / 8')} · الطريق السيار، الركن في المنحدر` }, { l: 'لم تُر', v: `${I('1 / 8')} · القيادة تحت المطر`, hot: true }] },
      tiles: [
        { big: '14 · 1 · 3', l1: 'منجزة · غياب محسوب · متبقية', l2: 'اثنتان ملغاتان في الوقت، غير محسوبتين' },
        { big: `${I('28 000 / 38 000')}`, l1: 'محصَّلة · وصل كل مرة', l2: 'تذكير القسط 3 خرج في 25 فيفري', hot: true },
        { big: `${I('36 / 40')} · 9 فيفري`, l1: 'آخر سلسلة تجريبية · القانون ناجح', l2: 'سلاسل أُنجزت دون شبكة، يراها المدرّب' },
      ],
      rule: 'كل حصة تُحسب بالقاعدة المكتوبة، وتُقيَّم على الشبكة من المدرّب، وتُدفع بقسط له وصل؛',
      rule2: 'المترشّحة وأبوها في ليون والإدارة يقرؤون العدّاد نفسه.',
      note: 'المترشّحة والتواريخ والأسعار والأرقام مثال مبني؛ الباقة والشبكة هما ما تكتبه الإدارة.',
    },
    planning: {
      title: 'أسبوع الجدول: ثلاثة مدرّبين، ثلاث سيارات، ستة أيام',
      alt: 'شبكة من ثلاثة صفوف، كريم ونادية وياسين، مدرّب وسيارته في كل صف، على ستة أعمدة من السبت إلى الخميس. تعرض كل خانة الحصص المحجوزة على سعة ثماني في اليوم، بشريط: كريم 8 من 8 السبت، 7 الأحد، 8 الاثنين، 6 الثلاثاء، 8 الأربعاء، 5 الخميس؛ نادية 8، 8، 7، متوقفة الثلاثاء مبرز، السيارة ب في الورشة، الحصص السبع نُقلت إلى الأربعاء والخميس، 8 الأربعاء، 8 الخميس؛ ياسين 6، 7، 7، 8، 7، 6. تذكر الخانات الإلغاءات في الوقت والغيابات المحسوبة. يميناً لوحة المجاميع: 118 حصة مخططة على 144 مكاناً، نسبة إشغال 82 بالمئة، 9 ملغاة في الوقت، 4 غيابات محسوبة، 7 حصص منقولة بسبب السيارة ب، 23 تذكيراً لليوم السابق عبر واتساب، 0 تكرار. ثلاث بطاقات: 118 من 144، 82 بالمئة؛ 9 ملغاة، 4 غيابات؛ 7 منقولة، المترشّحون أُخبروا على 7:40. الأسماء والأرقام مثال مبني.',
      days: ['السبت', 'الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس'],
      rows: [
        { name: 'كريم · السيارة أ', sub: 'يدوية · 8 فترات / يوم', cells: [{ t: I('8 / 8'), n: 8, cap: 8 }, { t: I('7 / 8'), s: '1 ملغاة', n: 7, cap: 8 }, { t: I('8 / 8'), n: 8, cap: 8 }, { t: I('6 / 8'), s: '1 غياب', n: 6, cap: 8 }, { t: I('8 / 8'), n: 8, cap: 8 }, { t: I('5 / 8'), n: 5, cap: 8 }] },
        { name: 'نادية · السيارة ب', sub: 'يدوية · 8 فترات / يوم', cells: [{ t: I('8 / 8'), n: 8, cap: 8 }, { t: I('8 / 8'), n: 8, cap: 8 }, { t: I('7 / 8'), s: '1 ملغاة', n: 7, cap: 8 }, { t: 'متوقفة', s: 'ورشة · 7 منقولة', off: true, n: 0, cap: 8 }, { t: I('8 / 8'), s: '+4 منقولة', n: 8, cap: 8 }, { t: I('8 / 8'), s: '+3 منقولة', n: 8, cap: 8 }] },
        { name: 'ياسين · السيارة ج', sub: 'أوتوماتيكية · 8 فترات / يوم', cells: [{ t: I('6 / 8'), s: '1 غياب', n: 6, cap: 8 }, { t: I('7 / 8'), n: 7, cap: 8 }, { t: I('7 / 8'), s: '2 ملغاة', n: 7, cap: 8 }, { t: I('8 / 8'), n: 8, cap: 8 }, { t: I('7 / 8'), s: '1 غياب', n: 7, cap: 8 }, { t: I('6 / 8'), s: '1 ملغاة', n: 6, cap: 8 }] },
      ],
      legend: 'شريط: محجوزة على سعة اليوم · ذهبي: ممتلئ · منقّط: سيارة متوقفة، حصص منقولة',
      totals: { title: 'الأسبوع · مجاميع تقرؤها الإدارة', sub: 'جدول لكل مدرّب وسيارة، صفر تكرار', rows: [{ l: 'حصص مخططة', v: `${I('118 / 144')} · 82 %`, hot: true }, { l: 'ملغاة في الوقت · غير محسوبة', v: '9' }, { l: 'غيابات محسوبة', v: '4' }, { l: 'منقولة · السيارة ب', v: '7' }, { l: 'تذكيرات اليوم السابق · واتساب', v: '23' }, { l: 'تكرارات', v: '0' }, { l: 'ساعات المدرّبين · تُدفع على الفعلي', v: '118 س' }] },
      tiles: [
        { big: `${I('118 / 144')} · 82 %`, l1: 'حصص مخططة · إشغال', l2: 'لكل مدرّب ولكل سيارة' },
        { big: '9 · 4', l1: 'ملغاة في الوقت · غيابات محسوبة', l2: 'وفق قاعدة الإلغاء المكتوبة' },
        { big: '7 منقولة', l1: 'السيارة ب متوقفة الثلاثاء', l2: 'المترشّحون أُخبروا على 7:40 عبر واتساب', hot: true },
      ],
      rule: 'الفترة توجد مرة واحدة، لمدرّب واحد وسيارة واحدة؛ الإلغاء يتبع القاعدة المكتوبة،',
      rule2: 'والسيارة المتوقفة تنقل حصصها قبل أن يغادر المترشّحون بيوتهم.',
      note: 'المدرّبون والسيارات والأرقام مثال مبني.',
    },
  },
};
