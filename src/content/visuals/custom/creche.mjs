// Bespoke animated figures for the 2027 "logiciel crèche en Algérie" post.
//  journee():   one child's day in the application: a horizontal day band from
//               7:30 to 17:30 with timed events (arrival checked in on the door
//               tablet, meal, nap, care, photo, hand-over to an authorised person,
//               daily journal sent), a sync panel showing events queued offline and
//               synced later, and the parent's view; three tiles. Events pop in
//               along the band, the band draws.
//  gerant():    the manager's board: three sections with places written by the
//               manager, enrolled, present today and waiting list as growing bars
//               against the capacity line; the month's fees panel (invoiced,
//               collected, late, reminded); staff present per section; three tiles.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function draw(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{stroke-dashoffset:1000}${(at + dur).toFixed(1)}%,100%{stroke-dashoffset:0}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function grow(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
const I = (x) => `⁦${x}⁩`;

export function journee(t, rtl) {
  const c = ctx(rtl); const P = 'cj'; const css = []; const H = 640;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: 'rgba(242,181,68,0.06)' }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  // day band
  const bx = 80, bw = 1040, by = 206; const t0 = 7.5, t1 = 17.5; const X = (h) => bx + ((h - t0) / (t1 - t0)) * bw;
  s += text(c, bx, by + 36, t.bandLabel, { size: 9, font: 'mono', fill: C.fg35, letter: 1.2, upper: true });
  s += `<line x1="${c.X(bx)}" y1="${by}" x2="${c.X(bx + bw)}" y2="${by}" stroke="${C.line2}" stroke-width="1.6" pathLength="1000" style="stroke-dashoffset:0;animation:${draw(css, P, 'band', 3, 10)}"/>`;
  for (let h = 8; h <= 17; h++) s += line(c, X(h), by - 4, X(h), by + 4, { stroke: C.line2 }) + text(c, X(h), by + 18, `${h}${t.hourSuffix}`, { size: 8, font: 'mono', fill: C.fg35, anchor: 'middle' });
  t.events.forEach((ev, i) => {
    const x = X(ev.h); const up = i % 2 === 0; const at = 4 + i * 1.3; const hot = ev.hot;
    const ly = up ? by - 36 : by + 36; const ty = up ? by - 44 : by + 54;
    s += `<g style="animation:${show(css, P, `e${i}`, at)}">` + line(c, x, by, x, ly, { stroke: hot ? C.accent : C.line2 }) + circle(c, x, by, hot ? 6 : 4.5, { fill: hot ? C.accent : C.bg, stroke: hot ? C.accent : C.line2, sw: 1.4 })
      + text(c, x, ty, ev.t, { size: 9.5, fill: hot ? C.accent : C.fg, weight: 500, anchor: 'middle' }) + text(c, x, ty + 13, ev.sub, { size: 7.5, font: 'mono', fill: C.fg55, anchor: 'middle' }) + text(c, x, up ? ty - 14 : ty + 26, ev.time, { size: 8, font: 'mono', fill: hot ? C.accent : C.fg35, anchor: 'middle' }) + '</g>';
  });
  // panels: sync (left) and parent view (right)
  const py = 306, ph = 150; const px1 = 80, pw1 = 500, px2 = 620, pw2 = 500;
  s += `<g style="animation:${show(css, P, 'sync', 15)}">` + rect(c, px1, py, pw1, ph, { stroke: C.line2, fill: C.fill }) + text(c, px1 + 12, py + 20, t.sync.title, { size: 10.5, fill: C.fg, weight: 500 }) + text(c, px1 + 12, py + 34, t.sync.sub, { size: 8, font: 'mono', fill: C.fg55 });
  t.sync.rows.forEach((r, i) => { const y = py + 54 + i * 18; s += text(c, px1 + 12, y, r.l, { size: 9, fill: C.fg70 }) + text(c, px1 + pw1 - 12, y, r.v, { size: 9.5, font: 'mono', fill: r.hot ? C.accent : C.fg, anchor: 'end', weight: r.hot ? 500 : 400 }); });
  s += '</g>';
  s += `<g style="animation:${show(css, P, 'par', 17)}">` + rect(c, px2, py, pw2, ph, { stroke: C.accent, fill: 'rgba(242,181,68,0.06)' }) + text(c, px2 + 12, py + 20, t.parent.title, { size: 10.5, fill: C.accent, weight: 500 }) + text(c, px2 + 12, py + 34, t.parent.sub, { size: 8, font: 'mono', fill: C.fg55 });
  t.parent.rows.forEach((r, i) => { const y = py + 54 + i * 18; s += text(c, px2 + 12, y, r.l, { size: 9, fill: C.fg70 }) + text(c, px2 + pw2 - 12, y, r.v, { size: 9.5, font: 'mono', fill: r.hot ? C.accent : C.fg, anchor: 'end', weight: r.hot ? 500 : 400 }); });
  s += '</g>';
  const ky = py + ph + 16;
  t.tiles.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, 19 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? 'rgba(242,181,68,0.06)' : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  s += text(c, 80, ky + 86, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"],svg line[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

export function gerant(t, rtl) {
  const c = ctx(rtl); const P = 'cg'; const css = []; const H = 600;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  // sections (left): places line, enrolled bar, present bar, waiting list
  const sx = 80, sw = 560, hy = 104; const barW = 260; const colB = sx + 130;
  s += t.cols.map((h, i) => text(c, [sx, colB, colB + barW + 16, colB + barW + 86][i], hy, h, { size: 9, font: 'mono', fill: C.fg35, letter: 1.2, upper: true })).join('') + line(c, sx, hy + 8, sx + sw, hy + 8, { stroke: C.line2 });
  const maxP = Math.max(...t.sections.map((r) => r.places));
  t.sections.forEach((r, i) => {
    const y = hy + 46 + i * 64; const at = 3 + i * 1.8; const px = colB + (r.places / maxP) * barW;
    s += `<g style="animation:${show(css, P, `s${i}`, at)}">` + text(c, sx, y - 4, r.name, { size: 11, fill: C.fg, weight: 500 }) + text(c, sx, y + 10, r.sub, { size: 8, font: 'mono', fill: C.fg55 })
      + line(c, px, y - 18, px, y + 20, { stroke: C.accent, dash: '3 3' }) + text(c, px, y - 22, `${r.places}`, { size: 8, font: 'mono', fill: C.accent, anchor: 'middle' })
      + text(c, colB + barW + 16, y - 4, r.enrolledT, { size: 9.5, font: 'mono', fill: C.fg }) + text(c, colB + barW + 16, y + 10, r.presentT, { size: 9.5, font: 'mono', fill: C.fg55 })
      + rect(c, colB + barW + 86, y - 14, 70, 22, { stroke: r.waitHot ? C.accent : C.line2, fill: r.waitHot ? 'rgba(242,181,68,0.22)' : 'none' }) + text(c, colB + barW + 94, y + 1, r.waitT, { size: 9, font: 'mono', fill: r.waitHot ? C.accent : C.fg70 })
      + line(c, sx, y + 26, sx + sw, y + 26, { stroke: C.line }) + '</g>';
    s += `<g style="transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'};animation:${grow(css, P, `e${i}`, at + 0.4, 1.4)}">` + rect(c, colB, y - 12, Math.max(Math.round((r.enrolled / maxP) * barW), 2), 8, { stroke: 'none', fill: C.fg55 }) + '</g>';
    s += `<g style="transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'};animation:${grow(css, P, `p${i}`, at + 0.9, 1.4)}">` + rect(c, colB, y + 1, Math.max(Math.round((r.present / maxP) * barW), 2), 8, { stroke: 'none', fill: C.accent }) + '</g>';
  });
  const ly = hy + 46 + t.sections.length * 64 - 6;
  s += text(c, sx, ly + 10, t.legend, { size: 8.5, font: 'mono', fill: C.fg55 });
  // fees panel (right)
  const fx = 680, fw = 440, fy = 96, fh = 176;
  s += `<g style="animation:${show(css, P, 'f', 10)}">` + rect(c, fx, fy, fw, fh, { stroke: C.accent, fill: 'rgba(242,181,68,0.06)' }) + text(c, fx + 12, fy + 20, t.fees.title, { size: 10.5, fill: C.accent, weight: 500 }) + text(c, fx + 12, fy + 34, t.fees.sub, { size: 8, font: 'mono', fill: C.fg55 });
  t.fees.rows.forEach((r, i) => { const y = fy + 54 + i * 18; s += text(c, fx + 12, y, r.l, { size: 9, fill: C.fg70 }) + text(c, fx + fw - 12, y, r.v, { size: 9.5, font: 'mono', fill: r.hot ? C.accent : C.fg, anchor: 'end', weight: r.hot ? 500 : 400 }); });
  s += '</g>';
  // staff panel (right, below)
  const ty = fy + fh + 14, th = 92;
  s += `<g style="animation:${show(css, P, 't', 13)}">` + rect(c, fx, ty, fw, th, { stroke: C.line2, fill: C.fill }) + text(c, fx + 12, ty + 20, t.staff.title, { size: 10.5, fill: C.fg, weight: 500 }) + text(c, fx + 12, ty + 34, t.staff.sub, { size: 8, font: 'mono', fill: C.fg55 });
  t.staff.rows.forEach((r, i) => { const y = ty + 54 + i * 16; s += text(c, fx + 12, y, r.l, { size: 9, fill: C.fg70 }) + text(c, fx + fw - 12, y, r.v, { size: 9.5, font: 'mono', fill: r.hot ? C.accent : C.fg, anchor: 'end', weight: r.hot ? 500 : 400 }); });
  s += '</g>';
  const ky = Math.max(ly + 30, ty + th + 16);
  t.tiles.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, 16 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? 'rgba(242,181,68,0.06)' : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  s += text(c, 80, ky + 86, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

const NB = ' ';
export const STRINGS = {
  fr: {
    journee: {
      title: 'Une journée d’un enfant dans l’application : pointage, repas, sieste, photo, remise, journal',
      alt: 'Un bandeau : enfant Y., section Moyens, mardi 9 mars, crèche de 48 enfants, tablette à la porte hors ligne, journal envoyé aux parents à 17h10. Une frise horizontale de 7h30 à 17h30 avec les événements : 8h12 arrivée pointée sur la tablette par la puéricultrice ; 9h30 collation ; 11h30 repas, a tout mangé, allergie à l’œuf affichée ; 13h00 sieste jusqu’à 14h30 ; 14h45 change ; 15h10 photo d’atelier, consentement parental au dossier ; 17h05 remise à la grand-mère, personne autorisée, en accent ; 17h10 journal envoyé par WhatsApp, en accent. En dessous à gauche, le panneau de synchronisation : 6 événements saisis sans réseau entre 8h et 12h, mis en file sur la tablette, envoyés à 12h04 au retour du réseau, zéro perdu, chaque événement a un identifiant unique. À droite, ce que le parent voit : arrivée 8h12, repas tout mangé, sieste 1h30, un change, une photo, remis à Fatma à 17h05, journal 17h10, et la question posée à l’agent WhatsApp « il a mangé ? » répondue depuis le journal. Trois tuiles : 48 enfants, 3 sections, 1 tablette par section ; 6 événements saisis hors ligne, 0 perdu ; journal envoyé à 17h10, question des parents répondue à 17h12. Chiffres et prénoms sont un exemple construit.',
      header: 'Enfant Y. · section Moyens · mardi 9 mars · crèche de 48 enfants · tablette à la porte, hors ligne · journal envoyé aux parents à 17h10',
      bandLabel: 'La journée · saisie par l’équipe sur la tablette de la section', hourSuffix: 'h',
      events: [
        { h: 8.2, time: '8h12', t: 'Arrivée pointée', sub: 'tablette à la porte · sans réseau' },
        { h: 9.5, time: '9h30', t: 'Collation', sub: 'un geste · section Moyens' },
        { h: 11.5, time: '11h30', t: 'Repas : tout mangé', sub: 'allergie à l’œuf affichée au repas' },
        { h: 13.0, time: '13h00', t: 'Sieste jusqu’à 14h30', sub: 'début et fin saisis' },
        { h: 14.75, time: '14h45', t: 'Change', sub: 'soin consigné' },
        { h: 15.17, time: '15h10', t: 'Photo d’atelier', sub: 'consentement au dossier · lien signé' },
        { h: 16.95, time: '17h05', t: 'Remise à la grand-mère', sub: 'personne autorisée · photo au dossier', hot: true },
        { h: 17.4, time: '17h10', t: 'Journal envoyé', sub: 'WhatsApp · lecture en un lien', hot: true },
      ],
      sync: { title: 'Synchronisation · la tablette n’attend pas le réseau', sub: 'base locale, file d’attente, identifiant unique par événement', rows: [{ l: 'Événements saisis sans réseau (8h–12h)', v: '6' }, { l: 'Envoyés au retour du réseau', v: '12h04 · 6 / 6', hot: true }, { l: 'Doublons après renvoi', v: '0 · identifiant unique' }, { l: 'Perdus', v: '0', hot: true }, { l: 'Qui a saisi', v: 'puéricultrice · horodaté' }] },
      parent: { title: 'Ce que le parent voit · à 17h10', sub: 'journal du jour · WhatsApp, puis l’application', rows: [{ l: 'Arrivée · remise', v: `8h12 · 17h05 à Fatma` }, { l: 'Repas · sieste · change', v: 'tout mangé · 1h30 · 1' }, { l: 'Photo', v: '1 · lien signé, 7 jours' }, { l: '« Il a mangé ? » à l’agent WhatsApp', v: 'répondu 17h12 · depuis le journal', hot: true }, { l: 'Ce que l’agent n’invente pas', v: 'rien hors du journal' }] },
      tiles: [
        { big: '48 · 3 · 3', l1: 'enfants · sections · tablettes', l2: 'une tablette par section, saisie hors ligne' },
        { big: `6 saisis · 0 perdu`, l1: 'événements du matin sans réseau', l2: 'envoyés à 12h04 · identifiant unique', hot: true },
        { big: '17h10 → 17h12', l1: 'journal envoyé · question répondue', l2: 'l’agent répond depuis le journal, jamais de tête' },
      ],
      rule: 'La journée est saisie par l’équipe au moment où elle se passe, sur une tablette qui n’attend pas le réseau ;',
      rule2: 'le parent la lit le soir, et l’agent WhatsApp répond depuis ce journal, jamais de mémoire.',
      note: 'Enfant, horaires, événements et chiffres sont un exemple construit.',
    },
    gerant: {
      title: 'Le tableau du gérant : places, inscrits, présents, liste d’attente, mensualités, équipe',
      alt: 'À gauche, trois sections avec, pour chacune, les places écrites par le gérant comme une ligne pointillée, les inscrits en barre grise, les présents du jour en barre dorée, et la liste d’attente dans une case : Bébés, 12 places, 11 inscrits, 9 présents, 6 en attente, en accent ; Moyens, 18 places, 18 inscrits, 16 présents, 3 en attente ; Grands, 20 places, 19 inscrits, 17 présents, 0 en attente. À droite, le panneau des mensualités de mars : 48 inscrits fois 12 000 dinars, 576 000 facturés ; encaissés au 10 du mois, 432 000, 36 enfants ; en retard au 11, 12 enfants, rappel WhatsApp envoyé automatiquement ; payés dans la semaine après rappel, 7 ; restent 5 au 18, appel du gérant ; chaque encaissement en espèces a un reçu envoyé au parent. En dessous, l’équipe du jour : Bébés 3 présentes pour 9 enfants, Moyens 3 pour 16, Grands 2 pour 17 au-dessous du seuil écrit par le gérant, en accent. Trois tuiles : 50 places, 48 inscrits, 42 présents ; 576 000 facturés, 432 000 encaissés au 10, 12 rappels automatiques ; 9 en liste d’attente, 2 places libres chez les Bébés en septembre. Chiffres, prix et sections sont un exemple construit.',
      cols: ['Section', 'Places · inscrits · présents', 'Chiffres', 'Attente'],
      sections: [
        { name: 'Bébés', sub: '3 à 12 mois · 2 puéricultrices + 1', places: 12, enrolled: 11, present: 9, enrolledT: '11 inscrits', presentT: '9 présents', waitT: '6 attente', waitHot: true },
        { name: 'Moyens', sub: '1 à 2 ans', places: 18, enrolled: 18, present: 16, enrolledT: '18 inscrits', presentT: '16 présents', waitT: '3 attente' },
        { name: 'Grands', sub: '2 à 3 ans', places: 20, enrolled: 19, present: 17, enrolledT: '19 inscrits', presentT: '17 présents', waitT: '0 attente' },
      ],
      legend: 'ligne pointillée : places écrites par le gérant · barre grise : inscrits · barre dorée : présents du jour',
      fees: { title: 'Mensualités de mars · 48 inscrits', sub: 'facturées le 1er, encaissées à l’accueil avec reçu, rappelées le 11', rows: [{ l: 'Facturées (48 × 12 000)', v: `576${NB}000 DA` }, { l: 'Encaissées au 10 · 36 enfants', v: `432${NB}000 DA` }, { l: 'En retard au 11 · rappel WhatsApp automatique', v: '12 enfants', hot: true }, { l: 'Payées dans la semaine après rappel', v: '7' }, { l: 'Restent au 18 · appel du gérant', v: '5', hot: true }, { l: 'Reçus envoyés pour les espèces', v: '43 / 43' }] },
      staff: { title: 'Équipe du jour · contre le seuil écrit par le gérant', sub: 'présentes pointées · enfants présents · seuil par section', rows: [{ l: 'Bébés · 3 présentes · 9 enfants', v: 'dans le seuil' }, { l: 'Moyens · 3 présentes · 16 enfants', v: 'dans le seuil' }, { l: 'Grands · 2 présentes · 17 enfants', v: 'sous le seuil · alerte 8h05', hot: true }] },
      tiles: [
        { big: '50 · 48 · 42', l1: 'places · inscrits · présents aujourd’hui', l2: 'par section, lus à 9h' },
        { big: `576${NB}000 · 432${NB}000`, l1: 'facturées · encaissées au 10 du mois', l2: '12 rappels automatiques · 5 appels du gérant', hot: true },
        { big: '9 en attente', l1: 'dont 6 chez les Bébés', l2: '2 places libres en septembre, déjà proposées' },
      ],
      rule: 'Le gérant lit trois chiffres par section, places, inscrits, présents, et deux par mois, facturé, encaissé ;',
      rule2: 'la liste d’attente remplit les places qui se libèrent, et le rappel part sans qu’on y pense.',
      note: 'Sections, prix, enfants et chiffres sont un exemple construit ; les seuils d’encadrement sont ceux que le gérant écrit.',
    },
  },
  en: {
    journee: {
      title: 'One child’s day in the application: check-in, meal, nap, photo, hand-over, journal',
      alt: 'A strip: child Y., Middle section, Tuesday 9 March, 48-child nursery, door tablet offline, journal sent to parents at 5:10 pm. A horizontal band from 7:30 to 17:30 with the events: 8:12 arrival checked in on the tablet by the nursery nurse; 9:30 snack; 11:30 meal, ate everything, egg allergy shown; 13:00 nap until 14:30; 14:45 nappy change; 15:10 workshop photo, parental consent on file; 17:05 handed over to the grandmother, authorised person, accented; 17:10 journal sent by WhatsApp, accented. Below left, the sync panel: 6 events entered without network between 8 and 12, queued on the tablet, sent at 12:04 when the network returned, zero lost, each event has a unique id. Right, what the parent sees: arrival 8:12, meal all eaten, nap 1h30, one change, one photo, handed to Fatma at 17:05, journal 17:10, and the question asked to the WhatsApp agent “did he eat?” answered from the journal. Three tiles: 48 children, 3 sections, 1 tablet per section; 6 events entered offline, 0 lost; journal sent 17:10, parents’ question answered 17:12. Figures and names are a constructed example.',
      header: 'Child Y. · Middle section · Tuesday 9 March · 48-child nursery · door tablet, offline · journal sent to parents at 17:10',
      bandLabel: 'The day · entered by the team on the section’s tablet', hourSuffix: ':00',
      events: [
        { h: 8.2, time: '8:12', t: 'Arrival checked in', sub: 'door tablet · no network' },
        { h: 9.5, time: '9:30', t: 'Snack', sub: 'one tap · Middle section' },
        { h: 11.5, time: '11:30', t: 'Meal: ate everything', sub: 'egg allergy shown at meal time' },
        { h: 13.0, time: '13:00', t: 'Nap until 14:30', sub: 'start and end entered' },
        { h: 14.75, time: '14:45', t: 'Nappy change', sub: 'care logged' },
        { h: 15.17, time: '15:10', t: 'Workshop photo', sub: 'consent on file · signed link' },
        { h: 16.95, time: '17:05', t: 'Handed to grandmother', sub: 'authorised person · photo on file', hot: true },
        { h: 17.4, time: '17:10', t: 'Journal sent', sub: 'WhatsApp · read in one link', hot: true },
      ],
      sync: { title: 'Sync · the tablet does not wait for the network', sub: 'local database, queue, unique id per event', rows: [{ l: 'Events entered without network (8–12)', v: '6' }, { l: 'Sent when the network returned', v: '12:04 · 6 / 6', hot: true }, { l: 'Duplicates after resend', v: '0 · unique id' }, { l: 'Lost', v: '0', hot: true }, { l: 'Who entered it', v: 'nursery nurse · timestamped' }] },
      parent: { title: 'What the parent sees · at 17:10', sub: 'day journal · WhatsApp, then the app', rows: [{ l: 'Arrival · hand-over', v: '8:12 · 17:05 to Fatma' }, { l: 'Meal · nap · changes', v: 'all eaten · 1h30 · 1' }, { l: 'Photo', v: '1 · signed link, 7 days' }, { l: '“Did he eat?” to the WhatsApp agent', v: 'answered 17:12 · from the journal', hot: true }, { l: 'What the agent never invents', v: 'anything outside the journal' }] },
      tiles: [
        { big: '48 · 3 · 3', l1: 'children · sections · tablets', l2: 'one tablet per section, offline entry' },
        { big: '6 entered · 0 lost', l1: 'morning events without network', l2: 'sent at 12:04 · unique id', hot: true },
        { big: '17:10 → 17:12', l1: 'journal sent · question answered', l2: 'the agent answers from the journal, never from memory' },
      ],
      rule: 'The day is entered by the team as it happens, on a tablet that does not wait for the network;',
      rule2: 'the parent reads it in the evening, and the WhatsApp agent answers from that journal, never from memory.',
      note: 'Child, times, events and figures are a constructed example.',
    },
    gerant: {
      title: 'The manager’s board: places, enrolled, present, waiting list, fees, staff',
      alt: 'Left, three sections, each with the places written by the manager as a dashed line, enrolled as a grey bar, present today as a gold bar, and the waiting list in a box: Babies, 12 places, 11 enrolled, 9 present, 6 waiting, accented; Middle, 18 places, 18 enrolled, 16 present, 3 waiting; Older, 20 places, 19 enrolled, 17 present, 0 waiting. Right, the March fees panel: 48 enrolled times 12,000 dinars, 576,000 invoiced; collected by the 10th, 432,000, 36 children; late on the 11th, 12 children, WhatsApp reminder sent automatically; paid within the week after the reminder, 7; 5 remain on the 18th, manager’s call; every cash payment has a receipt sent to the parent. Below, today’s staff: Babies 3 present for 9 children, Middle 3 for 16, Older 2 for 17 below the threshold written by the manager, accented. Three tiles: 50 places, 48 enrolled, 42 present; 576,000 invoiced, 432,000 collected by the 10th, 12 automatic reminders; 9 on the waiting list, 2 free places in Babies in September. Figures, prices and sections are a constructed example.',
      cols: ['Section', 'Places · enrolled · present', 'Figures', 'Waiting'],
      sections: [
        { name: 'Babies', sub: '3 to 12 months · 2 nurses + 1', places: 12, enrolled: 11, present: 9, enrolledT: '11 enrolled', presentT: '9 present', waitT: '6 waiting', waitHot: true },
        { name: 'Middle', sub: '1 to 2 years', places: 18, enrolled: 18, present: 16, enrolledT: '18 enrolled', presentT: '16 present', waitT: '3 waiting' },
        { name: 'Older', sub: '2 to 3 years', places: 20, enrolled: 19, present: 17, enrolledT: '19 enrolled', presentT: '17 present', waitT: '0 waiting' },
      ],
      legend: 'dashed line: places written by the manager · grey bar: enrolled · gold bar: present today',
      fees: { title: 'March fees · 48 enrolled', sub: 'invoiced on the 1st, collected at the desk with receipt, reminded on the 11th', rows: [{ l: 'Invoiced (48 × 12,000)', v: '576,000 DA' }, { l: 'Collected by the 10th · 36 children', v: '432,000 DA' }, { l: 'Late on the 11th · automatic WhatsApp reminder', v: '12 children', hot: true }, { l: 'Paid within the week after the reminder', v: '7' }, { l: 'Remaining on the 18th · manager’s call', v: '5', hot: true }, { l: 'Receipts sent for cash', v: '43 / 43' }] },
      staff: { title: 'Today’s staff · against the threshold written by the manager', sub: 'present staff checked in · children present · threshold per section', rows: [{ l: 'Babies · 3 present · 9 children', v: 'within threshold' }, { l: 'Middle · 3 present · 16 children', v: 'within threshold' }, { l: 'Older · 2 present · 17 children', v: 'below threshold · alert 8:05', hot: true }] },
      tiles: [
        { big: '50 · 48 · 42', l1: 'places · enrolled · present today', l2: 'per section, read at 9 am' },
        { big: '576,000 · 432,000', l1: 'invoiced · collected by the 10th', l2: '12 automatic reminders · 5 manager’s calls', hot: true },
        { big: '9 waiting', l1: 'of which 6 in Babies', l2: '2 free places in September, already offered' },
      ],
      rule: 'The manager reads three figures per section, places, enrolled, present, and two per month, invoiced, collected;',
      rule2: 'the waiting list fills places as they free up, and the reminder goes out without anyone thinking of it.',
      note: 'Sections, prices, children and figures are a constructed example; staffing thresholds are the ones the manager writes.',
    },
  },
  ar: {
    journee: {
      title: 'يوم طفل في التطبيق: التسجيل عند الوصول، الوجبة، القيلولة، الصورة، التسليم، اليوميات',
      alt: 'شريط: الطفل ي.، قسم المتوسطين، الثلاثاء 9 مارس، روضة بـ48 طفلاً، لوحة عند الباب دون شبكة، اليوميات مرسَلة للوالدين على 17:10. شريط أفقي من 7:30 إلى 17:30 بالأحداث: 8:12 وصول مسجَّل على اللوحة من المربية؛ 9:30 وجبة خفيفة؛ 11:30 وجبة، أكل كل شيء، حساسية البيض معروضة؛ 13:00 قيلولة حتى 14:30؛ 14:45 تغيير؛ 15:10 صورة ورشة، موافقة الوالدين في الملف؛ 17:05 تسليم للجدة، شخص مخوَّل، مبرز؛ 17:10 اليوميات مرسَلة عبر واتساب، مبرز. أسفله يساراً لوحة المزامنة: 6 أحداث أُدخلت دون شبكة بين 8 و12، صُفّت على اللوحة، أُرسلت على 12:04 عند عودة الشبكة، صفر ضائع، لكل حدث معرّف فريد. يميناً ما يراه الوالد: وصول 8:12، وجبة أُكلت كلها، قيلولة ساعة ونصف، تغيير واحد، صورة واحدة، سُلّم لفاطمة على 17:05، يوميات 17:10، وسؤال لوكيل واتساب «هل أكل؟» أُجيب من اليوميات. ثلاث بطاقات: 48 طفلاً، 3 أقسام، لوحة لكل قسم؛ 6 أحداث أُدخلت دون شبكة، 0 ضائع؛ يوميات مرسَلة 17:10، سؤال الوالدين مُجاب 17:12. الأرقام والأسماء مثال مبني.',
      header: 'الطفل ي. · قسم المتوسطين · الثلاثاء 9 مارس · روضة بـ48 طفلاً · لوحة عند الباب دون شبكة · اليوميات مرسَلة على 17:10',
      bandLabel: 'اليوم · يُدخله الفريق على لوحة القسم', hourSuffix: ':00',
      events: [
        { h: 8.2, time: '8:12', t: 'وصول مسجَّل', sub: 'لوحة الباب · دون شبكة' },
        { h: 9.5, time: '9:30', t: 'وجبة خفيفة', sub: 'لمسة واحدة · قسم المتوسطين' },
        { h: 11.5, time: '11:30', t: 'الوجبة: أكل كل شيء', sub: 'حساسية البيض معروضة عند الوجبة' },
        { h: 13.0, time: '13:00', t: 'قيلولة حتى 14:30', sub: 'البداية والنهاية مُدخلتان' },
        { h: 14.75, time: '14:45', t: 'تغيير', sub: 'عناية مسجَّلة' },
        { h: 15.17, time: '15:10', t: 'صورة ورشة', sub: 'موافقة في الملف · رابط موقَّع' },
        { h: 16.95, time: '17:05', t: 'تسليم للجدة', sub: 'شخص مخوَّل · صورة في الملف', hot: true },
        { h: 17.4, time: '17:10', t: 'اليوميات مرسَلة', sub: 'واتساب · قراءة برابط واحد', hot: true },
      ],
      sync: { title: 'المزامنة · اللوحة لا تنتظر الشبكة', sub: 'قاعدة محلية، طابور، معرّف فريد لكل حدث', rows: [{ l: 'أحداث أُدخلت دون شبكة (8–12)', v: '6' }, { l: 'أُرسلت عند عودة الشبكة', v: `${I('12:04')} · ${I('6 / 6')}`, hot: true }, { l: 'تكرارات بعد إعادة الإرسال', v: '0 · معرّف فريد' }, { l: 'ضائعة', v: '0', hot: true }, { l: 'من أدخلها', v: 'المربية · بختم زمني' }] },
      parent: { title: 'ما يراه الوالد · على 17:10', sub: 'يوميات اليوم · واتساب ثم التطبيق', rows: [{ l: 'الوصول · التسليم', v: `${I('8:12')} · ${I('17:05')} لفاطمة` }, { l: 'الوجبة · القيلولة · التغيير', v: 'أُكلت كلها · ساعة ونصف · 1' }, { l: 'صورة', v: '1 · رابط موقَّع، 7 أيام' }, { l: '«هل أكل؟» لوكيل واتساب', v: 'أُجيب 17:12 · من اليوميات', hot: true }, { l: 'ما لا يخترعه الوكيل', v: 'أي شيء خارج اليوميات' }] },
      tiles: [
        { big: '48 · 3 · 3', l1: 'أطفال · أقسام · لوحات', l2: 'لوحة لكل قسم، إدخال دون شبكة' },
        { big: '6 مُدخلة · 0 ضائعة', l1: 'أحداث الصباح دون شبكة', l2: 'أُرسلت على 12:04 · معرّف فريد', hot: true },
        { big: `${I('17:10')} ← ${I('17:12')}`, l1: 'يوميات مرسَلة · سؤال مُجاب', l2: 'الوكيل يجيب من اليوميات، لا من الذاكرة' },
      ],
      rule: 'يُدخل الفريق اليوم لحظة حدوثه، على لوحة لا تنتظر الشبكة؛',
      rule2: 'يقرؤه الوالد مساءً، ويجيب وكيل واتساب من هذه اليوميات، لا من الذاكرة أبداً.',
      note: 'الطفل والأوقات والأحداث والأرقام مثال مبني.',
    },
    gerant: {
      title: 'لوحة المسيّر: الأماكن، المسجَّلون، الحاضرون، قائمة الانتظار، الاشتراكات الشهرية، الفريق',
      alt: 'يساراً ثلاثة أقسام، لكل منها الأماكن التي كتبها المسيّر كخط منقّط، والمسجَّلون كشريط رمادي، وحاضرو اليوم كشريط ذهبي، وقائمة الانتظار في خانة: الرضّع، 12 مكاناً، 11 مسجَّلاً، 9 حاضرين، 6 في الانتظار، مبرز؛ المتوسطون، 18 مكاناً، 18 مسجَّلاً، 16 حاضراً، 3 في الانتظار؛ الكبار، 20 مكاناً، 19 مسجَّلاً، 17 حاضراً، 0 في الانتظار. يميناً لوحة اشتراكات مارس: 48 مسجَّلاً في 12 000 دينار، 576 000 مفوترة؛ محصَّلة إلى العاشر، 432 000، 36 طفلاً؛ متأخرة في الحادي عشر، 12 طفلاً، تذكير واتساب مرسَل تلقائياً؛ مدفوعة خلال الأسبوع بعد التذكير، 7؛ تبقى 5 في الثامن عشر، مكالمة المسيّر؛ لكل دفع نقدي وصل يُرسل للوالد. أسفله فريق اليوم: الرضّع 3 حاضرات لـ9 أطفال، المتوسطون 3 لـ16، الكبار 2 لـ17 تحت العتبة التي كتبها المسيّر، مبرز. ثلاث بطاقات: 50 مكاناً، 48 مسجَّلاً، 42 حاضراً؛ 576 000 مفوترة، 432 000 محصَّلة إلى العاشر، 12 تذكيراً تلقائياً؛ 9 في قائمة الانتظار، مكانان شاغران عند الرضّع في سبتمبر. الأرقام والأسعار والأقسام مثال مبني.',
      cols: ['القسم', 'أماكن · مسجَّلون · حاضرون', 'أرقام', 'انتظار'],
      sections: [
        { name: 'الرضّع', sub: '3 إلى 12 شهراً · مربيتان + 1', places: 12, enrolled: 11, present: 9, enrolledT: '11 مسجَّلاً', presentT: '9 حاضرين', waitT: '6 انتظار', waitHot: true },
        { name: 'المتوسطون', sub: 'سنة إلى سنتين', places: 18, enrolled: 18, present: 16, enrolledT: '18 مسجَّلاً', presentT: '16 حاضراً', waitT: '3 انتظار' },
        { name: 'الكبار', sub: 'سنتان إلى ثلاث', places: 20, enrolled: 19, present: 17, enrolledT: '19 مسجَّلاً', presentT: '17 حاضراً', waitT: '0 انتظار' },
      ],
      legend: 'خط منقّط: الأماكن التي كتبها المسيّر · شريط رمادي: المسجَّلون · شريط ذهبي: حاضرو اليوم',
      fees: { title: 'اشتراكات مارس · 48 مسجَّلاً', sub: 'تُفوتر في الأول، تُحصَّل في الاستقبال بوصل، يُذكَّر بها في الحادي عشر', rows: [{ l: 'مفوترة (48 × 12 000)', v: `576${NB}000 دج` }, { l: 'محصَّلة إلى العاشر · 36 طفلاً', v: `432${NB}000 دج` }, { l: 'متأخرة في الحادي عشر · تذكير واتساب تلقائي', v: '12 طفلاً', hot: true }, { l: 'مدفوعة خلال الأسبوع بعد التذكير', v: '7' }, { l: 'تبقى في الثامن عشر · مكالمة المسيّر', v: '5', hot: true }, { l: 'وصولات مرسَلة للنقد', v: I('43 / 43') }] },
      staff: { title: 'فريق اليوم · مقابل العتبة التي كتبها المسيّر', sub: 'حاضرات مسجَّلات · أطفال حاضرون · عتبة لكل قسم', rows: [{ l: 'الرضّع · 3 حاضرات · 9 أطفال', v: 'ضمن العتبة' }, { l: 'المتوسطون · 3 حاضرات · 16 طفلاً', v: 'ضمن العتبة' }, { l: 'الكبار · 2 حاضرتان · 17 طفلاً', v: 'تحت العتبة · تنبيه 8:05', hot: true }] },
      tiles: [
        { big: '50 · 48 · 42', l1: 'أماكن · مسجَّلون · حاضرون اليوم', l2: 'لكل قسم، تُقرأ على التاسعة' },
        { big: `576${NB}000 · 432${NB}000`, l1: 'مفوترة · محصَّلة إلى العاشر', l2: '12 تذكيراً تلقائياً · 5 مكالمات من المسيّر', hot: true },
        { big: '9 في الانتظار', l1: 'منهم 6 عند الرضّع', l2: 'مكانان شاغران في سبتمبر، عُرضا بالفعل' },
      ],
      rule: 'يقرأ المسيّر ثلاثة أرقام لكل قسم، الأماكن والمسجَّلون والحاضرون، ورقمين كل شهر، المفوتر والمحصَّل؛',
      rule2: 'قائمة الانتظار تملأ الأماكن التي تشغر، والتذكير يخرج دون أن يفكر فيه أحد.',
      note: 'الأقسام والأسعار والأطفال والأرقام مثال مبني؛ عتبات التأطير هي التي يكتبها المسيّر.',
    },
  },
};
