// Bespoke animated figures for the 2027 "IA pour répondre aux mails" page.
//  file():    one day of a shared mailbox as two cumulative charts, 8:00 to 18:00, same scales.
//             Before: 200 emails arrive (46 overnight + 154), two people handle 16 an hour, 148 are
//             handled at 18:00 and 52 wait. With the agent: 64 are filed on arrival, 136 remain for
//             people who send 18 an hour with the drafts; the queue is empty at 16:00.
//  lecture(): one price-request email with five numbered passages, the five items extracted from
//             them with a confidence score (one under the threshold, to be checked), the routing,
//             and the draft reply, which carries no price.
// Numbers with separators are drawn in their own text elements or isolated, direction="ltr".
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, open, heading, esc } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function pop(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scale(0)}${(at + 1.2).toFixed(1)}%,100%{transform:scale(1)}}`); return `transform-box:fill-box;transform-origin:center;animation:${P}-${id} ${LOOP}s linear infinite`; }
function drawLine(css, P, id, at, dur, len) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{stroke-dashoffset:${len}}${(at + dur).toFixed(1)}%,100%{stroke-dashoffset:0}}`); return `stroke-dasharray:${len};animation:${P}-${id} ${LOOP}s linear infinite`; }
const TINT = 'rgba(242,181,68,0.06)';
const WAIT = 'rgba(242,181,68,0.16)';
const DARK = '#0b0b0b';

function tiles(c, css, P, ky, ts, at0) {
  let s = '';
  ts.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, at0 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? TINT : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  return s;
}
const motionOff = (P) => `@media (prefers-reduced-motion: reduce){svg [style*="${P}-"]{animation:none !important}}`;
function ltrSpans(x, y, parts, size, anchor) {
  const L = ctx(false);
  const monoCss = /style="([^"]*)"/.exec(text(L, 0, 0, 'x', { size, font: 'mono' }))[1];
  return `<text x="${x}" y="${y}" style="${monoCss}" direction="ltr" text-anchor="${anchor}">` + parts.map(([str, fill, bold]) => (str ? `<tspan fill="${fill}" style="font-weight:${bold ? 500 : 300}">${esc(str)}</tspan>` : '')).join('') + '</text>';
}
const num = (c, x, y, str, o = {}) => ltrSpans(c.X(x), y, [[str, o.fill || C.fg, o.bold]], o.size || 10.5, 'middle');
const numEnd = (c, x, y, str, o = {}) => ltrSpans(c.X(x), y, [[str, o.fill || C.fg, o.bold]], o.size || 10.5, c.rtl ? 'start' : 'end');
const poly = (c, pts, color, sw, dash, style) => `<polyline points="${pts.map(([x, y]) => `${c.X(x)},${y}`).join(' ')}" fill="none" stroke="${color}" stroke-width="${sw || 1}"${dash ? ` stroke-dasharray="${dash}"` : ''}${style ? ` style="${style}"` : ''}/>`;
const area = (c, pts, fill) => `<polygon points="${pts.map(([x, y]) => `${c.X(x)},${y}`).join(' ')}" fill="${fill}" stroke="none"/>`;
const dot = (c, x, y, r, fill, stroke, sw) => `<circle cx="${c.X(x)}" cy="${y}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${sw || 1}"/>`;
const pathLen = (pts) => Math.ceil(pts.slice(1).reduce((a, p, i) => a + Math.hypot(p[0] - pts[i][0], p[1] - pts[i][1]), 0));
// a line of prose whose marked passages are coloured: parts = [[string, highlighted], ...]
function rich(c, x, y, parts, o = {}) {
  const inner = parts.map(([str, hot]) => `<tspan fill="${hot ? C.accent : (o.fill || C.fg)}"${hot ? ' style="font-weight:500"' : ''}>${esc(str)}</tspan>`).join('');
  return text(c, x, y, '\u0001', o).replace('\u0001', inner);
}

// cumulative emails at each hour mark from 8:00 to 18:00
const HOURS = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
const ARR = [46, 68, 96, 120, 138, 146, 158, 174, 186, 195, 200];     // arrived (46 overnight)
const BEFORE = [0, 16, 32, 48, 64, 68, 84, 100, 116, 132, 148];       // handled by two people, 16 an hour
const NEED = [30, 45, 64, 80, 92, 98, 106, 117, 125, 132, 136];       // arrived and needing a person (64 filed)
const SENT = [0, 18, 36, 54, 72, 78, 96, 114, 125, 132, 136];         // sent with the drafts, 18 an hour
const PY = (n) => 396 - n * 0.9;

export function file(t, rtl) {
  const c = ctx(rtl); const P = 'mq'; const css = []; const H = 686;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + text(c, 96, 170, t.chartTitle, { size: 11, fill: C.fg, weight: 500 }) + '</g>';
  const chart = (x0, id, upper, lower, loColor, at0, title, sub, note) => {
    const hx = (h) => x0 + (h - 8) * 34;
    const up = [[hx(8), PY(0)], ...HOURS.map((h, i) => [hx(h), PY(upper[i])])];
    const lo = HOURS.map((h, i) => [hx(h), PY(lower[i])]);
    let fr = text(c, x0 - 32, 192, title, { size: 11.5, fill: loColor === C.accent ? C.accent : C.fg, weight: 500 }) + text(c, x0 - 32, 206, sub, { size: 9.5, fill: C.fg55 });
    fr += poly(c, [[hx(8), PY(0)], [hx(18), PY(0)]], C.line2);
    [100, 200].forEach((n) => { fr += poly(c, [[hx(8), PY(n)], [hx(18), PY(n)]], C.line, 1, '3 4'); });
    [0, 100, 200].forEach((n) => { fr += num(c, hx(8) - 16, PY(n) + 3, String(n), { size: 9, fill: C.fg55 }); });
    [8, 10, 12, 14, 16, 18].forEach((h) => { fr += poly(c, [[hx(h), PY(0)], [hx(h), PY(0) + 5]], C.line2) + num(c, hx(h), PY(0) + 19, String(h), { size: 9, fill: C.fg55 }); });
    fr += text(c, hx(8), 436, t.axis, { size: 8.5, fill: C.fg55 }) + text(c, hx(8) + 8, 230, note, { size: 9.5, fill: C.fg70 });
    let g = `<g style="animation:${show(css, P, `${id}f`, at0)}">${fr}</g>`;
    g += `<g style="animation:${show(css, P, `${id}w`, at0 + 22)}">` + area(c, [...HOURS.map((h, i) => [hx(h), PY(upper[i])]), ...HOURS.map((h, i) => [hx(h), PY(lower[i])]).reverse()], WAIT) + '</g>';
    g += poly(c, up, C.fg70, 2, null, drawLine(css, P, `${id}u`, at0 + 2, 9, pathLen(up)));
    g += poly(c, lo, loColor, loColor === C.accent ? 2.5 : 2, null, drawLine(css, P, `${id}l`, at0 + 12, 9, pathLen(lo)));
    return { g, hx };
  };
  // before: everything goes through a person
  const a = chart(150, 'a', ARR, BEFORE, C.fg55, 5, t.aTitle, t.aSub, t.aNote);
  s += a.g;
  const ax = a.hx(18) + 12;
  s += `<g style="animation:${show(css, P, 'ae', 29)}">` + poly(c, [[a.hx(18) + 5, PY(200)], [a.hx(18) + 5, PY(148)]], C.accent, 2) + text(c, ax, PY(200) + 4, t.aArr, { size: 10, fill: C.fg70 }) + text(c, ax, (PY(200) + PY(148)) / 2 + 4, t.aGap, { size: 10.5, fill: C.accent, weight: 500 }) + text(c, ax, PY(148) + 6, t.aDone, { size: 10, fill: C.fg70 }) + '</g>';
  // with the agent: 64 filed on arrival, drafts ready for the rest
  const b = chart(664, 'b', NEED, SENT, C.accent, 36, t.bTitle, t.bSub, t.bNote);
  s += b.g;
  const bx = b.hx(18) + 12;
  s += `<g style="${pop(css, P, 'bd', 59)}">` + dot(c, b.hx(16), PY(125), 5, C.accent, DARK, 2) + '</g>';
  s += `<g style="animation:${show(css, P, 'be', 61)}">` + text(c, b.hx(16), PY(125) - 22, t.bEmpty, { size: 10.5, fill: C.accent, weight: 500, anchor: 'middle' }) + text(c, bx, PY(136) - 8, t.bNeed, { size: 10, fill: C.fg70 }) + text(c, bx, PY(136) + 8, t.bSent, { size: 10, fill: C.accent, weight: 500 }) + '</g>';
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bn', 66)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 70);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// one email: baselines of its seven lines, which line carries each numbered passage, field rows
const LY = [232, 252, 272, 292, 312, 332, 352];
const BADGE_LINE = [0, 1, 3, 4, 5];
const CONF = [99, 97, 95, 98, 61];
const LOW = 4;
const FY = (i) => 190 + i * 24;

export function lecture(t, rtl) {
  const c = ctx(rtl); const P = 'yl'; const css = []; const H = 686;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + text(c, 96, 170, t.chartTitle, { size: 11, fill: C.fg, weight: 500 }) + '</g>';
  // the email
  let mail = rect(c, 96, 184, 424, 180, { stroke: C.line2, fill: C.fill }) + text(c, 110, 204, t.mailHead, { size: 9.5, font: 'mono', fill: C.fg55 }) + poly(c, [[108, 212], [508, 212]], C.line2);
  t.mail.forEach((parts, i) => { mail += rich(c, 110, LY[i], parts, { size: 10.5, fill: C.fg70 }); });
  s += `<g style="animation:${show(css, P, 'ml', 6)}">${mail}</g>`;
  // five numbered passages, each linked to the item extracted from it
  const badge = (x, y, n) => dot(c, x, y, 8, DARK, C.accent, 1.5) + num(c, x, y + 3.5, String(n), { size: 9, fill: C.accent, bold: true });
  const row = (i) => {
    const y = FY(i); const low = i === LOW; const has = i < CONF.length;
    let g = rect(c, 560, y, 544, 22, { stroke: low ? C.accent : C.line2, fill: low ? TINT : C.fill, dash: low ? '4 3' : '' });
    if (has) g += badge(574, y + 11, i + 1);
    g += text(c, 590, y + 15, t.labels[i], { size: 9, fill: C.fg55 }) + text(c, 672, y + 15, t.values[i], { size: 10.5, fill: low ? C.accent : C.fg, weight: low ? 500 : 300 });
    if (has) g += numEnd(c, 1094, y + 15, t.pct.replace('{n}', String(CONF[i])), { size: 10, fill: low ? C.accent : C.fg70, bold: low });
    if (low) g += text(c, 1050, y + 15, t.check, { size: 9, fill: C.accent, weight: 500, anchor: 'end' });
    return g;
  };
  BADGE_LINE.forEach((li, k) => {
    const at = 12 + k * 7; const ym = LY[li] - 4; const yf = FY(k) + 11; const ex = 530 + k * 6;
    const pts = [[512, ym], [ex, ym], [ex, yf], [566, yf]];
    s += `<g style="${pop(css, P, `b${k}`, at)}">` + badge(504, ym, k + 1) + '</g>';
    s += poly(c, pts, C.accent, 1, null, drawLine(css, P, `c${k}`, at + 1.5, 2.5, pathLen(pts)));
    s += `<g style="animation:${show(css, P, `f${k}`, at + 4)}">${row(k)}</g>`;
  });
  s += `<g style="animation:${show(css, P, 'f5', 50)}">${row(5)}</g>`;
  s += `<g style="animation:${show(css, P, 'f6', 53)}">${row(6)}</g>`;
  // the draft reply
  s += `<g style="animation:${show(css, P, 'dr', 57)}">` + rect(c, 96, 372, 1008, 72, { stroke: C.accent, fill: TINT }) + text(c, 110, 391, t.draftTitle, { size: 10.5, fill: C.accent, weight: 500 }) + text(c, 1092, 391, t.draftNote, { size: 9, fill: C.fg55, anchor: 'end' }) + '</g>';
  s += `<g style="animation:${show(css, P, 'd1', 59)}">` + text(c, 110, 412, t.draft[0], { size: 10.5, fill: C.fg }) + '</g>';
  s += `<g style="animation:${show(css, P, 'd2', 61)}">` + text(c, 110, 430, t.draft[1], { size: 10.5, fill: C.fg }) + '</g>';
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bn', 65)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 68);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    file: {
      title: 'Une journée de la boîte contact@ : ce qui arrive, ce qui est traité',
      alt: 'Deux graphiques cumulés de 8 h à 18 h. Avant : 46 mails arrivés dans la nuit puis 154 dans la journée, soit 200 ; deux personnes en traitent 16 par heure ; à 18 h, 148 sont traités et 52 attendent. Avec l’agent : 64 mails sont rangés à l’arrivée sans personne ; 136 restent pour des personnes, qui en envoient 18 par heure avec les brouillons ; la file est vide à 16 h.',
      header: 'Exemple construit · une boîte partagée, 200 mails en une journée',
      chartTitle: 'Mails arrivés et mails traités, cumulés heure par heure',
      aTitle: 'Avant', aSub: 'deux personnes, 16 mails traités par heure', aNote: 'les 200 passent par une personne',
      bTitle: 'Avec l’agent', bSub: '136 mails pour des personnes, 18 envoyés par heure', bNote: '64 rangés à l’arrivée, sans personne',
      axis: 'heure de la journée',
      aArr: '200 reçus', aDone: '148 traités', aGap: '52 en attente',
      bNeed: '136 à traiter', bSent: '136 envoyés', bEmpty: 'file vide à 16 h',
      band: 'Ce qui arrive plus vite qu’on ne le traite attend : l’agent retire 64 mails de la file et prépare les 136 autres.',
      tiles: [
        { big: '52 mails en attente à 18 h', l1: 'avant : 200 reçus, 148 traités', l2: 'ils passent au lendemain, derrière les nouveaux' },
        { big: '64 rangés sans personne', l1: 'publicité, notifications, lettres d’information', l2: 'un échantillon est relu chaque semaine' },
        { big: 'file vide à 16 h', l1: 'avec l’agent : 136 mails, 18 envoyés par heure', l2: 'ensuite chaque mail part dans l’heure', hot: true },
      ],
      line1: 'L’écart entre les deux courbes est ce qui attend ; sa largeur, lue à l’horizontale, est le temps d’attente.',
      line2: 'Avant, un mail arrivé à 13 h est ouvert à 18 h, et 52 ne le sont pas ; avec l’agent, un mail arrivé dans la journée attend au plus deux heures environ.',
      note: 'Exemple construit · volumes et cadences fictifs.',
    },
    lecture: {
      title: 'Un mail, lu : ce que l’agent en tire, et ce qu’il laisse à une personne',
      alt: 'Un mail de demande de prix pour 5 000 cartons 400×300×250 livrés à Sétif avant le 15. L’agent en extrait cinq éléments, chacun avec un score de confiance : client déjà connu 99 %, demande de devis 97 %, produit et quantité 95 %, lieu de livraison 98 %, date souhaitée 61 % parce que le mois n’est pas précisé, ce champ est à vérifier. Le mail est routé vers le commercial avec une réponse attendue sous quatre heures, et un brouillon sans prix est préparé.',
      header: 'Exemple construit · une demande de prix reçue sur contact@',
      chartTitle: 'Le mail, les éléments extraits avec leur confiance, et le brouillon',
      mailHead: 'Mail reçu',
      mail: [
        [['De : ', 0], ['achats@client.example', 1]],
        [['Objet : ', 0], ['demande de prix', 1], [', cartons', 0]],
        [['Bonjour, merci de nous envoyer votre prix pour', 0]],
        [['5 000 cartons 400×300×250 double cannelure', 1], [',', 0]],
        [['livrés à ', 0], ['Sétif', 1], [',', 0]],
        [['avant le 15', 1], ['.', 0]],
        [['Nous avons déjà commandé chez vous en mars.', 0]],
      ],
      labels: ['Client', 'Type', 'Produit', 'Livraison', 'Date', 'Langue', 'Routage'],
      values: ['déjà client, 1 commande en mars', 'demande de devis', 'carton 400×300×250 double cannelure, 5 000 pièces', 'Sétif', 'le 15, mois non précisé', 'français', 'commercial, réponse attendue sous 4 h'],
      check: 'à vérifier', pct: '{n} %',
      draftTitle: 'Brouillon préparé pour le commercial',
      draftNote: 'aucun prix dans le brouillon : le devis vient de vos règles de prix',
      draft: ['Bonjour, nous avons bien reçu votre demande pour 5 000 cartons 400×300×250 double cannelure, livrés à Sétif.', 'Notre devis vous parvient aujourd’hui. Pouvez-vous nous confirmer la date de livraison souhaitée : le 15 de quel mois ?'],
      band: 'L’agent lit, range et prépare ; une personne relit et envoie ce qui engage l’entreprise.',
      tiles: [
        { big: '5 éléments extraits', l1: 'client, type, produit et quantité, lieu, date', l2: 'chacun avec un score de confiance' },
        { big: '1 élément à vérifier', l1: '« avant le 15 » : le mois n’est pas dit', l2: 'confiance 61 %, sous le seuil', hot: true },
        { big: 'aucun prix dans le brouillon', l1: 'le devis vient de vos règles de prix', l2: 'une personne relit et envoie' },
      ],
      line1: 'Le client est retrouvé dans votre fichier par son adresse : l’agent ne se fie pas à ce que dit le mail.',
      line2: 'Sous le seuil de confiance, le champ est montré à la personne avec la phrase d’origine, et la question part dans la réponse.',
      note: 'Exemple construit · mail, client et produit fictifs.',
    },
  },
  en: {
    file: {
      title: 'One day of the contact@ mailbox: what arrives, what gets handled',
      alt: 'Two cumulative charts from 8:00 to 18:00. Before: 46 emails arrived overnight then 154 during the day, 200 in all; two people handle 16 an hour; at 18:00, 148 are handled and 52 are waiting. With the agent: 64 emails are filed on arrival with nobody involved; 136 remain for people, who send 18 an hour with the drafts; the queue is empty at 16:00.',
      header: 'Constructed example · one shared mailbox, 200 emails in a day',
      chartTitle: 'Emails arrived and emails handled, cumulated hour by hour',
      aTitle: 'Before', aSub: 'two people, 16 emails handled an hour', aNote: 'all 200 go through a person',
      bTitle: 'With the agent', bSub: '136 emails for people, 18 sent an hour', bNote: '64 filed on arrival, with nobody involved',
      axis: 'hour of the day',
      aArr: '200 received', aDone: '148 handled', aGap: '52 waiting',
      bNeed: '136 to handle', bSent: '136 sent', bEmpty: 'queue empty at 16:00',
      band: 'What arrives faster than it is handled waits: the agent takes 64 emails out of the queue and prepares the other 136.',
      tiles: [
        { big: '52 emails waiting at 18:00', l1: 'before: 200 received, 148 handled', l2: 'they move to the next day, behind the new ones' },
        { big: '64 filed with nobody involved', l1: 'advertising, notifications, newsletters', l2: 'a sample is reread every week' },
        { big: 'queue empty at 16:00', l1: 'with the agent: 136 emails, 18 sent an hour', l2: 'after that each email leaves within the hour', hot: true },
      ],
      line1: 'The gap between the two curves is what is waiting; its width, read horizontally, is the waiting time.',
      line2: 'Before, an email that arrives at 13:00 is opened at 18:00, and 52 are not opened; with the agent, a daytime email waits about two hours at most.',
      note: 'Constructed example · fictitious volumes and rates.',
    },
    lecture: {
      title: 'One email, read: what the agent takes from it, and what it leaves to a person',
      alt: 'A price request email for 5,000 cartons 400×300×250 delivered to Sétif before the 15th. The agent extracts five items, each with a confidence score: known customer 99%, quote request 97%, product and quantity 95%, delivery place 98%, requested date 61% because the month is not stated, so that field is to be checked. The email is routed to sales with an answer expected within four hours, and a draft with no price is prepared.',
      header: 'Constructed example · a price request received on contact@',
      chartTitle: 'The email, the items extracted with their confidence, and the draft',
      mailHead: 'Email received',
      mail: [
        [['From: ', 0], ['purchasing@client.example', 1]],
        [['Subject: ', 0], ['price request', 1], [', cartons', 0]],
        [['Hello, please send us your price for', 0]],
        [['5,000 cartons 400×300×250, double wall', 1], [',', 0]],
        [['delivered to ', 0], ['Sétif', 1], [',', 0]],
        [['before the 15th', 1], ['.', 0]],
        [['We already ordered from you in March.', 0]],
      ],
      labels: ['Customer', 'Type', 'Product', 'Delivery', 'Date', 'Language', 'Routing'],
      values: ['existing customer, 1 order in March', 'quote request', 'carton 400×300×250 double wall, 5,000 units', 'Sétif', 'the 15th, month not stated', 'English', 'sales, answer expected within 4 hours'],
      check: 'to check', pct: '{n}%',
      draftTitle: 'Draft prepared for the salesperson',
      draftNote: 'no price in the draft: the quote comes from your pricing rules',
      draft: ['Hello, we have received your request for 5,000 cartons 400×300×250 double wall, delivered to Sétif.', 'Our quote will reach you today. Could you confirm the delivery date you want: the 15th of which month?'],
      band: 'The agent reads, files and prepares; a person rereads and sends whatever commits the company.',
      tiles: [
        { big: '5 items extracted', l1: 'customer, type, product and quantity, place, date', l2: 'each with a confidence score' },
        { big: '1 item to check', l1: '“before the 15th”: the month is not stated', l2: 'confidence 61%, under the threshold', hot: true },
        { big: 'no price in the draft', l1: 'the quote comes from your pricing rules', l2: 'a person rereads and sends' },
      ],
      line1: 'The customer is found in your own records by the address: the agent does not rely on what the email says.',
      line2: 'Under the confidence threshold, the field is shown to the person with the original sentence, and the question goes into the reply.',
      note: 'Constructed example · fictitious email, customer and product.',
    },
  },
  ar: {
    file: {
      title: 'يوم من أيام العلبة المشتركة: ما يصل، وما يُعالَج',
      alt: 'رسمان تراكميان من الساعة 8 إلى الساعة 18. قبل: 46 رسالة وصلت في الليل ثم 154 في النهار، أي 200؛ شخصان يعالجان 16 في الساعة؛ في الساعة 18، عولجت 148 و52 في الانتظار. مع العون: 64 رسالة تُرتَّب عند الوصول دون أي شخص؛ تبقى 136 للأشخاص، يرسلون 18 في الساعة بفضل المسودات؛ والطابور فارغ في الساعة 16.',
      header: 'مثال مركَّب · علبة مشتركة واحدة، و200 رسالة في يوم',
      chartTitle: 'الرسائل الواصلة والرسائل المعالَجة، متراكمة ساعة بساعة',
      aTitle: 'قبل', aSub: 'شخصان، و16 رسالة معالَجة في الساعة', aNote: 'الـ200 كلها تمر على شخص',
      bTitle: 'مع العون', bSub: '136 رسالة للأشخاص، و18 مرسَلة في الساعة', bNote: '64 مرتَّبة عند الوصول، دون أي شخص',
      axis: 'ساعة النهار',
      aArr: '200 واصلة', aDone: '148 معالَجة', aGap: '52 في الانتظار',
      bNeed: '136 للمعالجة', bSent: '136 مرسَلة', bEmpty: 'الطابور فارغ في الساعة 16',
      band: 'ما يصل أسرع مما يُعالَج ينتظر: العون يُخرج 64 رسالة من الطابور ويحضّر الـ136 الأخرى.',
      tiles: [
        { big: '52 رسالة في الانتظار في الساعة 18', l1: 'قبل: 200 واصلة، و148 معالَجة', l2: 'تنتقل إلى الغد، خلف الجديدة' },
        { big: '64 مرتَّبة دون أي شخص', l1: 'إشهار، إشعارات، ونشرات إخبارية', l2: 'عيّنة تُراجَع كل أسبوع' },
        { big: 'الطابور فارغ في الساعة 16', l1: 'مع العون: 136 رسالة، و18 مرسَلة في الساعة', l2: 'بعدها كل رسالة تخرج في ساعتها', hot: true },
      ],
      line1: 'الفارق بين المنحنيين هو ما ينتظر؛ وعرضه، مقروءاً أفقياً، هو زمن الانتظار.',
      line2: 'قبل، الرسالة الواصلة في الساعة 13 تُفتَح في الساعة 18، و52 لا تُفتَح؛ مع العون، رسالة النهار تنتظر ساعتين تقريباً على الأكثر.',
      note: 'مثال مركَّب · أحجام ووتائر خيالية.',
    },
    lecture: {
      title: 'رسالة واحدة، مقروءة: ما يستخرجه العون منها، وما يتركه لشخص',
      alt: 'رسالة طلب سعر لخمسة آلاف علبة كرتون 400×300×250 تُسلَّم في سطيف قبل يوم 15. العون يستخرج خمسة عناصر، ولكل واحد درجة ثقة: زبون معروف 99 بالمئة، طلب عرض سعر 97 بالمئة، المنتوج والكمية 95 بالمئة، مكان التسليم 98 بالمئة، والتاريخ المطلوب 61 بالمئة لأن الشهر غير محدَّد، فهذا الحقل للتحقق. الرسالة تُوجَّه إلى المصلحة التجارية مع رد منتظَر خلال أربع ساعات، وتُحضَّر مسودة دون سعر.',
      header: 'مثال مركَّب · طلب سعر وصل إلى العلبة المشتركة',
      chartTitle: 'الرسالة، العناصر المستخرَجة مع درجة ثقتها، والمسودة',
      mailHead: 'رسالة واصلة',
      mail: [
        [['من: ', 0], ['⁦achats@client.example⁩', 1]],
        [['الموضوع: ', 0], ['طلب سعر', 1], ['، علب كرتون', 0]],
        [['السلام عليكم، نرجو إرسال سعركم لـ', 0]],
        [['⁦5 000⁩ علبة كرتون ⁦400×300×250⁩ مزدوجة التمويج', 1], ['،', 0]],
        [['تُسلَّم في ', 0], ['سطيف', 1], ['،', 0]],
        [['قبل يوم 15', 1], ['.', 0]],
        [['سبق أن طلبنا منكم في مارس.', 0]],
      ],
      labels: ['الزبون', 'النوع', 'المنتوج', 'التسليم', 'التاريخ', 'اللغة', 'التوجيه'],
      values: ['زبون سابق، طلبية واحدة في مارس', 'طلب عرض سعر', 'كرتون ⁦400×300×250⁩ مزدوج التمويج، ⁦5 000⁩ قطعة', 'سطيف', 'يوم 15، والشهر غير محدَّد', 'العربية', 'المصلحة التجارية، والرد منتظَر خلال 4 ساعات'],
      check: 'للتحقق', pct: '{n} %',
      draftTitle: 'مسودة محضَّرة للمكلَّف التجاري',
      draftNote: 'لا سعر في المسودة: عرض السعر يأتي من قواعد أسعاركم',
      draft: ['السلام عليكم، استلمنا طلبكم الخاص بـ⁦5 000⁩ علبة كرتون ⁦400×300×250⁩ مزدوجة التمويج، تُسلَّم في سطيف.', 'يصلكم عرض السعر اليوم. هل يمكنكم تأكيد تاريخ التسليم المطلوب: يوم 15 من أي شهر؟'],
      band: 'العون يقرأ، يرتّب، ويحضّر؛ وشخص يراجع ويرسل ما يُلزم المؤسسة.',
      tiles: [
        { big: '5 عناصر مستخرَجة', l1: 'الزبون، النوع، المنتوج والكمية، المكان، والتاريخ', l2: 'لكل واحد درجة ثقة' },
        { big: 'عنصر واحد للتحقق', l1: '«قبل يوم 15»: الشهر غير مذكور', l2: 'الثقة 61 بالمئة، تحت العتبة', hot: true },
        { big: 'لا سعر في المسودة', l1: 'عرض السعر يأتي من قواعد أسعاركم', l2: 'شخص يراجع ويرسل' },
      ],
      line1: 'الزبون يُوجَد في ملفاتكم بعنوانه: العون لا يعتمد على ما تقوله الرسالة.',
      line2: 'تحت عتبة الثقة، يُعرَض الحقل على الشخص مع الجملة الأصلية، والسؤال يذهب في الرد.',
      note: 'مثال مركَّب · رسالة وزبون ومنتوج خيالية.',
    },
  },
};
