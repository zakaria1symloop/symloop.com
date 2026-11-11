// Bespoke animated figures for the 2027 "logiciel laboratoire d'analyses médicales
// en Algérie" post.
//  tube():   one sample's path from registration to the delivered report: a vertical
//            event line with timed events (registration and barcode labels, sampling,
//            centrifugation, analysers, technical validation, biological validation
//            with an out-of-range flag, report sent), a panel of results received
//            from the analysers vs typed by hand, a turnaround panel; three tiles.
//  labo():   the biologist's board: five sections with the day's files as growing
//            bars, files awaiting validation, median turnaround vs the written
//            target, out-of-range count; reagent lots panel, home-sampling round
//            panel, collections panel; three tiles.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function draw(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{stroke-dashoffset:1000}${(at + dur).toFixed(1)}%,100%{stroke-dashoffset:0}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
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

export function tube(t, rtl) {
  const c = ctx(rtl); const P = 'lt'; const css = []; const H = 640;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: 'rgba(242,181,68,0.06)' }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  // event line (left)
  const ex = 80, ey = 150; const lineX = ex + 10; const n = t.events.length; const gap = 40;
  s += text(c, ex, ey - 6, t.eventsLabel, { size: 9, font: 'mono', fill: C.fg35, letter: 1.2, upper: true });
  s += `<line x1="${c.X(lineX)}" y1="${ey + 10}" x2="${c.X(lineX)}" y2="${ey + 10 + (n - 1) * gap}" stroke="${C.line2}" stroke-width="1.4" pathLength="1000" style="stroke-dashoffset:0;animation:${draw(css, P, 'ln', 3, 11)}"/>`;
  t.events.forEach((ev, i) => {
    const y = ey + 10 + i * gap; const at = 4 + i * 1.3; const hot = ev.hot;
    s += `<g style="animation:${show(css, P, `e${i}`, at)}">` + circle(c, lineX, y, hot ? 6 : 4.5, { fill: hot ? C.accent : C.bg, stroke: hot ? C.accent : C.line2, sw: 1.4 })
      + text(c, ex + 26, y - 3, ev.d, { size: 8.5, font: 'mono', fill: C.fg55 }) + text(c, ex + 80, y - 3, ev.t, { size: 10, fill: hot ? C.accent : C.fg, weight: 500 }) + text(c, ex + 80, y + 11, ev.sub, { size: 8, font: 'mono', fill: C.fg55 }) + '</g>';
  });
  // panels (right)
  s += panel(c, css, P, 'res', 10, 600, 146, 520, 152, t.results, false);
  s += panel(c, css, P, 'tat', 16, 600, 312, 520, 134, t.tat, true);
  const ky = Math.max(ey + 10 + (n - 1) * gap + 30, 462);
  s += tiles(c, css, P, ky, t.tiles, 19);
  s += text(c, 80, ky + 86, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"],svg line[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

export function labo(t, rtl) {
  const c = ctx(rtl); const P = 'lb'; const css = []; const H = 600;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  const sx = 80, hy = 104; const colB = sx + 140; const barW = 170; const cW = colB + barW + 16, cT = cW + 86, cO = cT + 120;
  s += [sx, colB, cW, cT, cO].map((x, i) => text(c, x, hy, t.cols[i], { size: 9, font: 'mono', fill: C.fg35, letter: 1.2, upper: true })).join('') + line(c, sx, hy + 8, cO + 70, hy + 8, { stroke: C.line2 });
  const max = Math.max(...t.rows.map((r) => r.files));
  t.rows.forEach((r, i) => {
    const y = hy + 40 + i * 50; const at = 3 + i * 1.5;
    s += `<g style="animation:${show(css, P, `r${i}`, at)}">` + text(c, sx, y - 2, r.name, { size: 11, fill: C.fg, weight: 500 }) + text(c, sx, y + 12, r.sub, { size: 8, font: 'mono', fill: C.fg55 })
      + text(c, cW, y + 4, r.wait, { size: 10, font: 'mono', fill: r.waitHot ? C.accent : C.fg })
      + text(c, cT, y + 4, r.tat, { size: 10, font: 'mono', fill: r.tatHot ? C.accent : C.fg })
      + text(c, cO, y + 4, r.out, { size: 10, font: 'mono', fill: C.fg })
      + line(c, sx, y + 24, cO + 70, y + 24, { stroke: C.line }) + '</g>';
    s += `<g style="transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'};animation:${grow(css, P, `g${i}`, at + 0.4, 1.3)}">` + rect(c, colB, y - 4, Math.max(Math.round((r.files / max) * barW), 2), 9, { stroke: 'none', fill: r.hot ? C.accent : C.fg55 }) + '</g>';
    s += `<g style="animation:${show(css, P, `v${i}`, at + 1.5)}">` + text(c, colB, y + 16, r.filesT, { size: 8, font: 'mono', fill: C.fg55 }) + '</g>';
  });
  const ly = hy + 40 + t.rows.length * 50;
  s += text(c, sx, ly + 6, t.legend, { size: 8.5, font: 'mono', fill: C.fg55 });
  s += panel(c, css, P, 'reag', 11, 820, 96, 300, 116, t.reagents, true);
  s += panel(c, css, P, 'home', 13, 820, 224, 300, 98, t.home, false);
  s += panel(c, css, P, 'cash', 15, 820, 334, 300, 80, t.cash, false);
  const ky = Math.max(ly + 24, 430);
  s += tiles(c, css, P, ky, t.tiles, 17);
  s += text(c, 80, ky + 86, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

const NB = ' ';
export const STRINGS = {
  fr: {
    tube: {
      title: 'Le parcours d’un dossier : enregistrement, tubes, automates, validation, compte rendu',
      alt: 'Un bandeau : dossier D-2026-04187, patient de 58 ans, ordonnance de 9 analyses, 3 tubes étiquetés, prélevé au laboratoire, mardi 7h40, compte rendu envoyé à 10h45. À gauche, une frise verticale : 7h40 enregistrement et étiquettes code-barres, 3 tubes, encaissement avec reçu ; 8h05 prélèvement, tubes scannés ; 8h30 centrifugation ; 8h50 hématologie, 22 valeurs lues depuis l’automate ; 9h20 biochimie, 18 valeurs lues ; 9h40 sérologie, 3 valeurs saisies à la main, double saisie ; 10h05 validation technique, 43 valeurs, 2 hors plage signalées ; 10h40 validation biologique par le biologiste, glycémie 1,42 g/L hors plage, commentaire, en accent ; 10h45 compte rendu signé envoyé au patient par WhatsApp avec lien signé, copie au médecin prescripteur, en accent. À droite, le panneau des résultats : 43 valeurs, 40 lues depuis les automates, 3 saisies à la main en double saisie, 2 hors plage contre les plages écrites par le laboratoire, 0 retapée. En dessous, en accent, le délai : enregistré 7h40, rendu 10h45, trois heures cinq, objectif écrit quatre heures pour la routine, tenu ; le patient a vu « en cours » puis « disponible » sur son lien. Trois tuiles : 3 tubes, 43 valeurs, 2 hors plage ; 40 sur 43 lues depuis les automates, 0 retapée ; 3h05 contre 4h d’objectif. Dossier, valeurs et horaires sont un exemple construit.',
      header: 'Dossier D-2026-04187 · patient 58 ans · ordonnance de 9 analyses · 3 tubes · prélevé au laboratoire · mardi 7h40 · compte rendu envoyé 10h45',
      eventsLabel: 'Événements · du laboratoire, des automates et du biologiste',
      events: [
        { d: '7h40', t: 'Enregistrement · étiquettes', sub: '3 tubes code-barres · encaissement avec reçu' },
        { d: '8h05', t: 'Prélèvement', sub: 'tubes scannés · heure et préleveur notés' },
        { d: '8h30', t: 'Centrifugation', sub: 'tube scanné à l’entrée et à la sortie' },
        { d: '8h50', t: 'Hématologie · 22 valeurs', sub: 'lues depuis l’automate · rien retapé' },
        { d: '9h20', t: 'Biochimie · 18 valeurs', sub: 'lues depuis l’automate' },
        { d: '9h40', t: 'Sérologie · 3 valeurs', sub: 'saisies à la main · double saisie' },
        { d: '10h05', t: 'Validation technique', sub: '43 valeurs · 2 hors plage signalées' },
        { d: '10h40', t: 'Validation biologique', sub: 'glycémie 1,42 g/L hors plage · commentaire', hot: true },
        { d: '10h45', t: 'Compte rendu envoyé', sub: 'WhatsApp, lien signé · copie au médecin', hot: true },
      ],
      results: { title: 'Résultats · d’où viennent les 43 valeurs', sub: 'automates reliés, saisie manuelle en double, plages écrites', rows: [{ l: 'Lues depuis les automates', v: '40 / 43', hot: true }, { l: 'Saisies à la main · double saisie', v: '3 / 43' }, { l: 'Hors plage · contre les plages du laboratoire', v: '2' }, { l: 'Retapées depuis un papier', v: '0' }, { l: 'Qui a validé · quand', v: 'journalisé' }] },
      tat: { title: 'Délai · enregistré 7h40, rendu 10h45', sub: 'objectif écrit par le laboratoire pour la routine : 4 h', rows: [{ l: 'Délai du dossier', v: '3 h 05', hot: true }, { l: 'Objectif · tenu', v: '4 h · oui' }, { l: 'Ce que le patient a vu sur son lien', v: '« en cours » → « disponible »' }, { l: 'Médecin prescripteur', v: 'copie à 10h45' }] },
      tiles: [
        { big: '3 · 43 · 2', l1: 'tubes · valeurs · hors plage', l2: 'plages écrites par le laboratoire' },
        { big: '40 / 43 · 0', l1: 'lues depuis les automates · retapées', l2: 'les 3 restantes en double saisie', hot: true },
        { big: '3 h 05 · 4 h', l1: 'délai du dossier · objectif écrit', l2: 'compte rendu envoyé à 10h45' },
      ],
      rule: 'Le tube est scanné à chaque étape, les valeurs viennent des automates et non d’un papier retapé,',
      rule2: 'le biologiste valide ce qui est hors plage, et le patient reçoit un lien, pas une photo de feuille.',
      note: 'Dossier, valeurs, plages et horaires sont un exemple construit ; les plages et l’objectif de délai sont ceux que le laboratoire écrit.',
    },
    labo: {
      title: 'Le tableau du biologiste : sections, validation en attente, délai, réactifs, tournée',
      alt: 'À gauche, cinq sections avec les dossiers du jour en barre : hématologie 164 dossiers, 6 en attente de validation, délai médian 2h40 contre 4h, 11 hors plage ; biochimie 158, 14 en attente en accent, 3h10 contre 4h, 19 hors plage ; sérologie et immunologie 61, 2 en attente, 5h20 contre 6h, 4 hors plage ; microbiologie 23, 0 en attente, 48h contre 72h, 5 ; hormonologie 37, 1 en attente, 6h50 contre 8h en accent, 6 hors plage. Total 180 dossiers, 540 tubes, 23 en attente de validation à 11h. À droite, en accent, les réactifs : 3 lots périment sous 30 jours, 2 références sous le seuil écrit, commande proposée ; en dessous, la tournée de prélèvement à domicile : 14 prélèvements, 12 faits, 2 en route, application hors ligne du préleveur, tubes scannés à la prise ; et les encaissements du jour : 180 dossiers, 612 000 dinars, reçus envoyés 180 sur 180. Trois tuiles : 180 dossiers, 540 tubes, 23 en attente ; 92 pour cent des dossiers rendus dans l’objectif de délai ; 3 lots de réactifs à moins de 30 jours, commande proposée. Chiffres et sections sont un exemple construit.',
      cols: ['Section', 'Dossiers du jour', 'En attente', 'Délai · objectif', 'Hors plage'],
      rows: [
        { name: 'Hématologie', sub: 'automate relié', files: 164, filesT: '164 dossiers', wait: '6', tat: '2 h 40 · 4 h', out: '11' },
        { name: 'Biochimie', sub: 'automate relié', files: 158, filesT: '158 dossiers', wait: '14', waitHot: true, tat: '3 h 10 · 4 h', out: '19', hot: true },
        { name: 'Sérologie · immuno', sub: 'saisie manuelle en double', files: 61, filesT: '61 dossiers', wait: '2', tat: '5 h 20 · 6 h', out: '4' },
        { name: 'Microbiologie', sub: 'cultures · 48 à 72 h', files: 23, filesT: '23 dossiers', wait: '0', tat: '48 h · 72 h', out: '5' },
        { name: 'Hormonologie', sub: 'série de l’après-midi', files: 37, filesT: '37 dossiers', wait: '1', tat: '6 h 50 · 8 h', tatHot: true, out: '6' },
      ],
      legend: 'barre : dossiers du jour par section · dorée : section avec le plus d’attente · objectifs de délai écrits par le laboratoire',
      reagents: { title: 'Réactifs · lots et seuils', sub: 'stock par lot, péremption, seuil écrit', rows: [{ l: 'Lots périmant sous 30 jours', v: '3', hot: true }, { l: 'Références sous le seuil', v: '2 · commande proposée' }, { l: 'Lot utilisé noté sur chaque résultat', v: 'oui' }] },
      home: { title: 'Tournée à domicile · 11h', sub: 'application du préleveur, hors ligne', rows: [{ l: 'Prélèvements · faits · en route', v: '14 · 12 · 2' }, { l: 'Tubes scannés à la prise', v: '36 / 36' }] },
      cash: { title: 'Encaissements du jour', sub: 'à l’accueil, reçu par dossier', rows: [{ l: 'Dossiers · encaissés', v: `180 · 612${NB}000 DA` }] },
      tiles: [
        { big: '180 · 540 · 23', l1: 'dossiers · tubes · en attente à 11h', l2: 'validation biologique par section' },
        { big: '92 %', l1: 'dossiers rendus dans l’objectif de délai', l2: 'objectifs écrits par section', hot: true },
        { big: `612${NB}000 · 180 / 180`, l1: 'encaissés · reçus envoyés', l2: 'tiers payant et conventions hors périmètre' },
      ],
      rule: 'Le biologiste lit par section les dossiers, ce qui attend sa validation, le délai contre l’objectif écrit et les hors plage ;',
      rule2: 'les réactifs sont suivis par lot, et la tournée à domicile scanne ses tubes sans réseau.',
      note: 'Sections, délais, réactifs et chiffres sont un exemple construit.',
    },
  },
  en: {
    tube: {
      title: 'One file’s path: registration, tubes, analysers, validation, report',
      alt: 'A strip: file D-2026-04187, 58-year-old patient, prescription of 9 tests, 3 labelled tubes, sampled at the lab, Tuesday 7:40, report sent at 10:45. Left, a vertical line: 7:40 registration and barcode labels, 3 tubes, collection with receipt; 8:05 sampling, tubes scanned; 8:30 centrifugation; 8:50 haematology, 22 values read from the analyser; 9:20 biochemistry, 18 values read; 9:40 serology, 3 values typed by hand, double entry; 10:05 technical validation, 43 values, 2 out of range flagged; 10:40 biological validation by the biologist, glucose 1.42 g/L out of range, comment, accented; 10:45 signed report sent to the patient by WhatsApp with a signed link, copy to the prescribing doctor, accented. Right, the results panel: 43 values, 40 read from the analysers, 3 typed by hand with double entry, 2 out of range against the ranges written by the lab, 0 retyped. Below, accented, turnaround: registered 7:40, delivered 10:45, three hours five, written target four hours for routine, met; the patient saw “in progress” then “available” on their link. Three tiles: 3 tubes, 43 values, 2 out of range; 40 of 43 read from analysers, 0 retyped; 3h05 against a 4h target. File, values and times are a constructed example.',
      header: 'File D-2026-04187 · 58-year-old patient · 9-test prescription · 3 tubes · sampled at the lab · Tuesday 7:40 · report sent 10:45',
      eventsLabel: 'Events · from the lab, the analysers and the biologist',
      events: [
        { d: '7:40', t: 'Registration · labels', sub: '3 barcode tubes · collection with receipt' },
        { d: '8:05', t: 'Sampling', sub: 'tubes scanned · time and sampler noted' },
        { d: '8:30', t: 'Centrifugation', sub: 'tube scanned in and out' },
        { d: '8:50', t: 'Haematology · 22 values', sub: 'read from the analyser · nothing retyped' },
        { d: '9:20', t: 'Biochemistry · 18 values', sub: 'read from the analyser' },
        { d: '9:40', t: 'Serology · 3 values', sub: 'typed by hand · double entry' },
        { d: '10:05', t: 'Technical validation', sub: '43 values · 2 out of range flagged' },
        { d: '10:40', t: 'Biological validation', sub: 'glucose 1.42 g/L out of range · comment', hot: true },
        { d: '10:45', t: 'Report sent', sub: 'WhatsApp, signed link · copy to the doctor', hot: true },
      ],
      results: { title: 'Results · where the 43 values come from', sub: 'connected analysers, double manual entry, written ranges', rows: [{ l: 'Read from the analysers', v: '40 / 43', hot: true }, { l: 'Typed by hand · double entry', v: '3 / 43' }, { l: 'Out of range · against the lab’s ranges', v: '2' }, { l: 'Retyped from paper', v: '0' }, { l: 'Who validated · when', v: 'logged' }] },
      tat: { title: 'Turnaround · registered 7:40, delivered 10:45', sub: 'target written by the lab for routine: 4 h', rows: [{ l: 'File turnaround', v: '3 h 05', hot: true }, { l: 'Target · met', v: '4 h · yes' }, { l: 'What the patient saw on their link', v: '“in progress” → “available”' }, { l: 'Prescribing doctor', v: 'copy at 10:45' }] },
      tiles: [
        { big: '3 · 43 · 2', l1: 'tubes · values · out of range', l2: 'ranges written by the lab' },
        { big: '40 / 43 · 0', l1: 'read from analysers · retyped', l2: 'the 3 others in double entry', hot: true },
        { big: '3 h 05 · 4 h', l1: 'file turnaround · written target', l2: 'report sent at 10:45' },
      ],
      rule: 'The tube is scanned at every step, values come from the analysers and not from retyped paper,',
      rule2: 'the biologist validates what is out of range, and the patient receives a link, not a photo of a sheet.',
      note: 'File, values, ranges and times are a constructed example; ranges and the turnaround target are the ones the lab writes.',
    },
    labo: {
      title: 'The biologist’s board: sections, pending validation, turnaround, reagents, round',
      alt: 'Left, five sections with the day’s files as bars: haematology 164 files, 6 awaiting validation, median turnaround 2h40 against 4h, 11 out of range; biochemistry 158, 14 awaiting accented, 3h10 against 4h, 19 out of range; serology and immunology 61, 2 awaiting, 5h20 against 6h, 4; microbiology 23, 0 awaiting, 48h against 72h, 5; hormonology 37, 1 awaiting, 6h50 against 8h accented, 6. Total 180 files, 540 tubes, 23 awaiting validation at 11:00. Right, accented, reagents: 3 lots expiring within 30 days, 2 references under the written threshold, order proposed; below, the home-sampling round: 14 samplings, 12 done, 2 on the way, the sampler’s offline app, tubes scanned at collection; and the day’s collections: 180 files, 612,000 dinars, receipts sent 180 of 180. Three tiles: 180 files, 540 tubes, 23 awaiting; 92 percent of files delivered within the turnaround target; 3 reagent lots under 30 days, order proposed. Figures and sections are a constructed example.',
      cols: ['Section', 'Day’s files', 'Awaiting', 'Turnaround · target', 'Out of range'],
      rows: [
        { name: 'Haematology', sub: 'connected analyser', files: 164, filesT: '164 files', wait: '6', tat: '2 h 40 · 4 h', out: '11' },
        { name: 'Biochemistry', sub: 'connected analyser', files: 158, filesT: '158 files', wait: '14', waitHot: true, tat: '3 h 10 · 4 h', out: '19', hot: true },
        { name: 'Serology · immuno', sub: 'double manual entry', files: 61, filesT: '61 files', wait: '2', tat: '5 h 20 · 6 h', out: '4' },
        { name: 'Microbiology', sub: 'cultures · 48 to 72 h', files: 23, filesT: '23 files', wait: '0', tat: '48 h · 72 h', out: '5' },
        { name: 'Hormonology', sub: 'afternoon batch', files: 37, filesT: '37 files', wait: '1', tat: '6 h 50 · 8 h', tatHot: true, out: '6' },
      ],
      legend: 'bar: day’s files per section · gold: section with the most awaiting · turnaround targets written by the lab',
      reagents: { title: 'Reagents · lots and thresholds', sub: 'stock per lot, expiry, written threshold', rows: [{ l: 'Lots expiring within 30 days', v: '3', hot: true }, { l: 'References under threshold', v: '2 · order proposed' }, { l: 'Lot used noted on each result', v: 'yes' }] },
      home: { title: 'Home round · 11:00', sub: 'the sampler’s app, offline', rows: [{ l: 'Samplings · done · on the way', v: '14 · 12 · 2' }, { l: 'Tubes scanned at collection', v: '36 / 36' }] },
      cash: { title: 'Day’s collections', sub: 'at the desk, receipt per file', rows: [{ l: 'Files · collected', v: '180 · 612,000 DA' }] },
      tiles: [
        { big: '180 · 540 · 23', l1: 'files · tubes · awaiting at 11:00', l2: 'biological validation per section' },
        { big: '92 %', l1: 'files delivered within the turnaround target', l2: 'targets written per section', hot: true },
        { big: '612,000 · 180 / 180', l1: 'collected · receipts sent', l2: 'third-party payment and agreements out of scope' },
      ],
      rule: 'The biologist reads per section the files, what awaits their validation, turnaround against the written target and out-of-range results;',
      rule2: 'reagents are tracked per lot, and the home round scans its tubes without network.',
      note: 'Sections, turnarounds, reagents and figures are a constructed example.',
    },
  },
  ar: {
    tube: {
      title: 'مسار ملف: التسجيل، الأنابيب، الأجهزة، المصادقة، التقرير',
      alt: 'شريط: الملف D-2026-04187، مريض في 58 سنة، وصفة من 9 تحاليل، 3 أنابيب موسومة، أُخذت العينة في المخبر، الثلاثاء 7:40، التقرير مرسَل على 10:45. يساراً خط عمودي: 7:40 تسجيل وملصقات باركود، 3 أنابيب، تحصيل بوصل؛ 8:05 أخذ العينة، أنابيب ممسوحة؛ 8:30 طرد مركزي؛ 8:50 أمراض الدم، 22 قيمة مقروءة من الجهاز؛ 9:20 كيمياء حيوية، 18 قيمة مقروءة؛ 9:40 أمصال، 3 قيم مُدخلة يدوياً، إدخال مزدوج؛ 10:05 مصادقة تقنية، 43 قيمة، 2 خارج المجال مُشار إليهما؛ 10:40 مصادقة بيولوجية من البيولوجي، سكر الدم 1,42 غ/ل خارج المجال، تعليق، مبرز؛ 10:45 تقرير موقَّع مرسَل للمريض عبر واتساب برابط موقَّع، نسخة للطبيب الواصف، مبرز. يميناً لوحة النتائج: 43 قيمة، 40 مقروءة من الأجهزة، 3 مُدخلة يدوياً بإدخال مزدوج، 2 خارج المجال مقابل المجالات التي كتبها المخبر، 0 أُعيد إدخالها. أسفله مبرز الأجل: مسجَّل 7:40، مسلَّم 10:45، ثلاث ساعات وخمس دقائق، هدف مكتوب أربع ساعات للروتين، محقَّق؛ رأى المريض «جارٍ» ثم «متاح» على رابطه. ثلاث بطاقات: 3 أنابيب، 43 قيمة، 2 خارج المجال؛ 40 من 43 مقروءة من الأجهزة، 0 أُعيد إدخالها؛ ⁦3 س 05⁩ مقابل هدف ⁦4 س⁩. الملف والقيم والأوقات مثال مبني.',
      header: 'الملف D-2026-04187 · مريض 58 سنة · وصفة من 9 تحاليل · 3 أنابيب · عينة في المخبر · الثلاثاء 7:40 · التقرير مرسَل 10:45',
      eventsLabel: 'أحداث · من المخبر والأجهزة والبيولوجي',
      events: [
        { d: '7:40', t: 'تسجيل · ملصقات', sub: '3 أنابيب باركود · تحصيل بوصل' },
        { d: '8:05', t: 'أخذ العينة', sub: 'أنابيب ممسوحة · الساعة وآخذ العينة مسجَّلان' },
        { d: '8:30', t: 'طرد مركزي', sub: 'الأنبوب ممسوح عند الدخول والخروج' },
        { d: '8:50', t: 'أمراض الدم · 22 قيمة', sub: 'مقروءة من الجهاز · لا شيء أُعيد إدخاله' },
        { d: '9:20', t: 'كيمياء حيوية · 18 قيمة', sub: 'مقروءة من الجهاز' },
        { d: '9:40', t: 'أمصال · 3 قيم', sub: 'مُدخلة يدوياً · إدخال مزدوج' },
        { d: '10:05', t: 'مصادقة تقنية', sub: '43 قيمة · 2 خارج المجال مُشار إليهما' },
        { d: '10:40', t: 'مصادقة بيولوجية', sub: 'سكر الدم 1,42 غ/ل خارج المجال · تعليق', hot: true },
        { d: '10:45', t: 'التقرير مرسَل', sub: 'واتساب، رابط موقَّع · نسخة للطبيب', hot: true },
      ],
      results: { title: 'النتائج · من أين تأتي القيم الـ43', sub: 'أجهزة موصولة، إدخال يدوي مزدوج، مجالات مكتوبة', rows: [{ l: 'مقروءة من الأجهزة', v: I('40 / 43'), hot: true }, { l: 'مُدخلة يدوياً · إدخال مزدوج', v: I('3 / 43') }, { l: 'خارج المجال · مقابل مجالات المخبر', v: '2' }, { l: 'أُعيد إدخالها من ورقة', v: '0' }, { l: 'من صادق · متى', v: 'مسجَّل' }] },
      tat: { title: 'الأجل · مسجَّل 7:40، مسلَّم 10:45', sub: 'هدف كتبه المخبر للروتين: ⁦4 س⁩', rows: [{ l: 'أجل الملف', v: '⁦3 س 05⁩', hot: true }, { l: 'الهدف · محقَّق', v: '⁦4 س⁩ · نعم' }, { l: 'ما رآه المريض على رابطه', v: '«جارٍ» ← «متاح»' }, { l: 'الطبيب الواصف', v: 'نسخة على 10:45' }] },
      tiles: [
        { big: '3 · 43 · 2', l1: 'أنابيب · قيم · خارج المجال', l2: 'مجالات كتبها المخبر' },
        { big: `${I('40 / 43')} · 0`, l1: 'مقروءة من الأجهزة · أُعيد إدخالها', l2: 'الثلاث الباقية بإدخال مزدوج', hot: true },
        { big: '⁦3 س 05⁩ · ⁦4 س⁩', l1: 'أجل الملف · الهدف المكتوب', l2: 'التقرير مرسَل على 10:45' },
      ],
      rule: 'يُمسح الأنبوب في كل خطوة، وتأتي القيم من الأجهزة لا من ورقة يُعاد إدخالها،',
      rule2: 'ويصادق البيولوجي على ما هو خارج المجال، ويتلقى المريض رابطاً لا صورة ورقة.',
      note: 'الملف والقيم والمجالات والأوقات مثال مبني؛ المجالات وهدف الأجل هي ما يكتبه المخبر.',
    },
    labo: {
      title: 'لوحة البيولوجي: الأقسام، المصادقة المعلّقة، الأجل، الكواشف، الجولة',
      alt: 'يساراً خمسة أقسام بملفات اليوم كأشرطة: أمراض الدم 164 ملفاً، 6 في انتظار المصادقة، أجل وسيط ⁦2 س 40⁩ مقابل ⁦4 س⁩، 11 خارج المجال؛ كيمياء حيوية 158، 14 في الانتظار مبرز، ⁦3 س 10⁩ مقابل ⁦4 س⁩، 19 خارج المجال؛ أمصال ومناعة 61، 2 في الانتظار، ⁦5 س 20⁩ مقابل ⁦6 س⁩، 4؛ ميكروبيولوجيا 23، 0 في الانتظار، ⁦48 س⁩ مقابل ⁦72 س⁩، 5؛ هرمونات 37، 1 في الانتظار، ⁦6 س 50⁩ مقابل ⁦8 س⁩ مبرز، 6. المجموع 180 ملفاً، 540 أنبوباً، 23 في انتظار المصادقة على 11:00. يميناً مبرز الكواشف: 3 دفعات تنتهي خلال 30 يوماً، مرجعان تحت العتبة المكتوبة، طلبية مقترحة؛ أسفله جولة أخذ العينات في المنازل: 14 عينة، 12 أُخذت، 2 في الطريق، تطبيق آخذ العينات دون شبكة، أنابيب ممسوحة عند الأخذ؛ وتحصيلات اليوم: 180 ملفاً، 612 000 دينار، وصولات مرسَلة 180 من 180. ثلاث بطاقات: 180 ملفاً، 540 أنبوباً، 23 في الانتظار؛ 92 بالمئة من الملفات سُلّمت ضمن هدف الأجل؛ 3 دفعات كواشف أقل من 30 يوماً، طلبية مقترحة. الأرقام والأقسام مثال مبني.',
      cols: ['القسم', 'ملفات اليوم', 'في الانتظار', 'أجل · هدف', 'خارج المجال'],
      rows: [
        { name: 'أمراض الدم', sub: 'جهاز موصول', files: 164, filesT: '164 ملفاً', wait: '6', tat: '⁦2 س 40⁩ · ⁦4 س⁩', out: '11' },
        { name: 'كيمياء حيوية', sub: 'جهاز موصول', files: 158, filesT: '158 ملفاً', wait: '14', waitHot: true, tat: '⁦3 س 10⁩ · ⁦4 س⁩', out: '19', hot: true },
        { name: 'أمصال · مناعة', sub: 'إدخال يدوي مزدوج', files: 61, filesT: '61 ملفاً', wait: '2', tat: '⁦5 س 20⁩ · ⁦6 س⁩', out: '4' },
        { name: 'ميكروبيولوجيا', sub: 'زراعات · 48 إلى ⁦72 س⁩', files: 23, filesT: '23 ملفاً', wait: '0', tat: '⁦48 س⁩ · ⁦72 س⁩', out: '5' },
        { name: 'هرمونات', sub: 'دفعة بعد الظهر', files: 37, filesT: '37 ملفاً', wait: '1', tat: '⁦6 س 50⁩ · ⁦8 س⁩', tatHot: true, out: '6' },
      ],
      legend: 'شريط: ملفات اليوم لكل قسم · ذهبي: القسم الأكثر انتظاراً · أهداف الأجل كتبها المخبر',
      reagents: { title: 'الكواشف · دفعات وعتبات', sub: 'مخزون لكل دفعة، صلاحية، عتبة مكتوبة', rows: [{ l: 'دفعات تنتهي خلال 30 يوماً', v: '3', hot: true }, { l: 'مراجع تحت العتبة', v: '2 · طلبية مقترحة' }, { l: 'الدفعة المستعملة مسجَّلة على كل نتيجة', v: 'نعم' }] },
      home: { title: 'جولة المنازل · 11:00', sub: 'تطبيق آخذ العينات، دون شبكة', rows: [{ l: 'عينات · أُخذت · في الطريق', v: '14 · 12 · 2' }, { l: 'أنابيب ممسوحة عند الأخذ', v: I('36 / 36') }] },
      cash: { title: 'تحصيلات اليوم', sub: 'في الاستقبال، وصل لكل ملف', rows: [{ l: 'ملفات · محصَّلة', v: `180 · ${I(`612${NB}000`)} دج` }] },
      tiles: [
        { big: '180 · 540 · 23', l1: 'ملفات · أنابيب · في الانتظار على 11:00', l2: 'مصادقة بيولوجية لكل قسم' },
        { big: '92 %', l1: 'ملفات سُلّمت ضمن هدف الأجل', l2: 'أهداف مكتوبة لكل قسم', hot: true },
        { big: `${I(`612${NB}000`)} · ${I('180 / 180')}`, l1: 'محصَّلة · وصولات مرسَلة', l2: 'الدفع من الغير والاتفاقيات خارج النطاق' },
      ],
      rule: 'يقرأ البيولوجي لكل قسم الملفات وما ينتظر مصادقته والأجل مقابل الهدف المكتوب وما هو خارج المجال؛',
      rule2: 'تُتابَع الكواشف لكل دفعة، وتمسح جولة المنازل أنابيبها دون شبكة.',
      note: 'الأقسام والآجال والكواشف والأرقام مثال مبني.',
    },
  },
};
