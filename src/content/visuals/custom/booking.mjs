// Bespoke animated figures for the 2027 "same slot booked twice" post.
//  race(): two customers ask for the same 14:30 slot 220 ms apart, one from
//          the app in Algiers, one through the WhatsApp agent from Paris; the
//          server lane shows the transaction taking the slot, the hold with
//          its expiry, the second request refused with alternatives, the
//          deposit arriving and the hold becoming a confirmed booking.
//  week(): where slots come from: a one-practitioner week grid where working
//          hours, breaks, blocked time, existing bookings, holds and buffers
//          are layered, and what remains is sliced by the service duration
//          into the available slots a customer can see; with the Paris time
//          note for the diaspora.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function mover(css, P, id, path, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{offset-distance:0%;opacity:0}${(at + 0.5).toFixed(1)}%{opacity:1}${(at + dur - 0.5).toFixed(1)}%{opacity:1}${(at + dur).toFixed(1)}%,100%{offset-distance:100%;opacity:0}}`); return `<circle r="4" fill="${C.accent}" opacity="0" style="offset-path:path('${path}');animation:${P}-${id} ${LOOP}s linear infinite"/>`; }
const I = (x) => `⁦${x}⁩`;

export function race(t, rtl) {
  const c = ctx(rtl); const P = 'rc'; const css = []; const H = 600;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  const laneY = { a: 178, srv: 312, b: 446 }; const x0 = 230, x1 = 1120;
  // lanes
  Object.entries(laneY).forEach(([k, y]) => {
    s += line(c, x0, y, x1, y, { stroke: C.line2 });
    s += text(c, 80, y - 6, t.lanes[k].name, { size: 13, fill: k === 'srv' ? C.accent : C.fg });
    s += text(c, 80, y + 12, t.lanes[k].sub, { size: 10, font: 'mono', fill: C.fg55 });
  });
  // time ticks
  t.ticks.forEach((tk) => { s += line(c, tk.x, 110, tk.x, 490, { stroke: C.line, dash: '2 4' }) + text(c, tk.x, 104, tk.label, { size: 10, font: 'mono', fill: C.fg35, anchor: 'middle' }); });
  // events: {lane, x, label, sub, kind, at}
  t.events.forEach((e, i) => {
    const y = laneY[e.lane]; const hot = e.kind === 'ok'; const bad = e.kind === 'no';
    s += `<g style="animation:${show(css, P, `e${i}`, e.at)}">`
      + circle(c, e.x, y, 7, { fill: hot ? C.accent : bad ? 'rgba(255,255,255,0.08)' : '#000', stroke: hot ? C.accent : bad ? C.fg55 : C.fg, sw: 1.5 })
      + (bad ? text(c, e.x, y + 4, '✕', { size: 10, fill: C.fg70, anchor: 'middle' }) : '')
      + text(c, e.x, y + (e.below ? 26 : -18), e.label, { size: 11, fill: hot ? C.accent : bad ? C.fg70 : C.fg, anchor: 'middle' })
      + (e.sub ? text(c, e.x, y + (e.below ? 40 : -32), e.sub, { size: 9.5, font: 'mono', fill: C.fg55, anchor: 'middle' }) : '')
      + '</g>';
  });
  // arrows between lanes (requests and replies) with movers
  t.arrows.forEach((a, i) => {
    const y1 = laneY[a.from], y2 = laneY[a.to]; const path = `M${c.X(a.x1)} ${y1} L${c.X(a.x2)} ${y2}`;
    s += `<g style="animation:${show(css, P, `a${i}`, a.at)}">` + line(c, a.x1, y1, a.x2, y2, { stroke: a.kind === 'no' ? C.fg55 : C.line2, dash: a.kind === 'no' ? '3 3' : '' }) + '</g>';
    s += mover(css, P, `m${i}`, path, a.at, 3);
  });
  // slot state strip
  const sy = 516;
  s += text(c, 80, sy - 2, t.slotLabel, { size: 10, font: 'mono', fill: C.fg35, letter: 1.5, upper: true });
  t.states.forEach((st, i) => {
    const hot = st.kind === 'ok';
    s += `<g style="animation:${show(css, P, `s${i}`, st.at)}">` + rect(c, st.x1, sy + 6, st.x2 - st.x1, 26, { stroke: hot ? C.accent : st.kind === 'hold' ? C.fg55 : C.line2, fill: hot ? 'rgba(242,181,68,0.14)' : st.kind === 'hold' ? 'rgba(255,255,255,0.06)' : 'none', dash: st.kind === 'hold' ? '4 3' : '' }) + text(c, (st.x1 + st.x2) / 2, sy + 23, st.label, { size: 10.5, font: 'mono', fill: hot ? C.accent : C.fg70, anchor: 'middle' }) + '</g>';
  });
  s += text(c, 80, 568, t.rule, { size: 12, fill: C.fg }) + text(c, 80, 586, t.rule2, { size: 12, fill: C.fg });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"],svg circle[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

export function week(t, rtl) {
  const c = ctx(rtl); const P = 'wk'; const css = []; const H = 600;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  const gx = 150, gy = 120, colW = 128, rowH = 36; const days = t.days; const hours = t.hours; // hours: labels for rows 9..17 (9 rows)
  // headers
  days.forEach((d, i) => { s += text(c, gx + i * colW + colW / 2, gy - 12, d, { size: 11, font: 'mono', fill: C.fg55, anchor: 'middle', upper: true, letter: 1 }); });
  hours.forEach((h, r) => { s += text(c, gx - 10, gy + r * rowH + 4, h, { size: 10, font: 'mono', fill: C.fg35, anchor: 'end' }) + line(c, gx, gy + r * rowH, gx + days.length * colW, gy + r * rowH, { stroke: C.line }); });
  s += line(c, gx, gy + hours.length * rowH, gx + days.length * colW, gy + hours.length * rowH, { stroke: C.line });
  // blocks: {day, from, to (in hours, decimal), kind} kinds: closed, break, blocked, booked, hold, buffer, free
  const Y = (h) => gy + (h - 9) * rowH;
  const fillFor = { closed: 'rgba(255,255,255,0.025)', break: 'rgba(255,255,255,0.06)', blocked: 'rgba(255,255,255,0.06)', booked: 'rgba(255,255,255,0.16)', hold: 'rgba(255,255,255,0.05)', buffer: 'rgba(255,255,255,0.02)', free: 'rgba(242,181,68,0.16)' };
  const strokeFor = { closed: 'none', break: 'none', blocked: C.fg55, booked: C.line2, hold: C.fg55, buffer: 'none', free: C.accent };
  const order = { closed: 2, break: 8, blocked: 8, booked: 16, hold: 22, buffer: 28, free: 40 };
  t.blocks.forEach((b, i) => {
    const x = gx + b.day * colW + 3, w = colW - 6, y = Y(b.from), h = (b.to - b.from) * rowH;
    s += `<g style="animation:${show(css, P, `b${i}`, order[b.kind] + (b.kind === 'free' ? (b.day * 1.2) : 0))}">`
      + rect(c, x, y, w, Math.max(h, 2), { fill: fillFor[b.kind], stroke: strokeFor[b.kind], dash: b.kind === 'hold' ? '3 3' : b.kind === 'blocked' ? '2 3' : '' })
      + (b.label ? text(c, x + 6, y + Math.min(h, rowH) / 2 + 4, b.label, { size: 9.5, font: 'mono', fill: b.kind === 'free' ? C.accent : C.fg70 }) : '')
      + '</g>';
  });
  // legend
  const ly = gy + hours.length * rowH + 22;
  t.legend.forEach((lg, i) => { const x = 150 + i * 160; s += rect(c, x, ly - 9, 14, 10, { fill: fillFor[lg.kind], stroke: strokeFor[lg.kind] === 'none' ? C.line2 : strokeFor[lg.kind] }) + text(c, x + 20, ly, lg.label, { size: 10, font: 'mono', fill: C.fg55 }); });
  // formula
  s += `<g style="animation:${show(css, P, 'f', 48)}">` + text(c, 80, 560, t.formula, { size: 12, fill: C.fg }) + text(c, 80, 580, t.note, { size: 10.5, font: 'mono', fill: C.accent }) + '</g>';
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    race: {
      title: 'Deux clients, un créneau, une seule réservation : ce que fait le serveur en 220 millisecondes',
      alt: 'Trois lignes de temps. En haut, Amel, à Alger, depuis l’application, demande le créneau de 14 h 30 à 10:00:00,120. En bas, Karim, à Paris, via l’agent WhatsApp, demande le même créneau à 10:00:00,340. Au milieu, le serveur : la transaction d’Amel prend le créneau et crée une tenue qui expire à 10:10 ; la demande de Karim arrive sur un créneau tenu et reçoit un refus avec deux alternatives, 15 h 00 ou la liste d’attente ; Amel paie l’acompte à 10:04 et la tenue devient une réservation confirmée ; Karim choisit la liste d’attente. En bas, l’état du créneau : libre, tenu par Amel jusqu’à 10:10, confirmé. Les heures sont un exemple construit.',
      lanes: { a: { name: 'Amel · Alger · application', sub: '14 h 30 demandé à 10:00:00,120' }, srv: { name: 'Serveur · une transaction par créneau', sub: 'verrou sur la ligne du créneau · tenue 10 min' }, b: { name: 'Karim · Paris · agent WhatsApp', sub: '14 h 30 demandé à 10:00:00,340 · 11 h 30 à Paris' } },
      ticks: [{ x: 300, label: '10:00:00' }, { x: 520, label: '+220 ms' }, { x: 760, label: '10:04' }, { x: 1000, label: '10:10' }],
      events: [
        { lane: 'a', x: 300, label: 'demande 14 h 30', sub: 'depuis l’application', kind: 'req', at: 4 },
        { lane: 'srv', x: 330, label: 'verrou · tenue créée', sub: 'expire 10:10 · pour Amel', kind: 'ok', at: 9, below: true },
        { lane: 'b', x: 520, label: 'demande 14 h 30', sub: 'via l’agent WhatsApp', kind: 'req', at: 18, below: true },
        { lane: 'srv', x: 550, label: 'créneau tenu · refus', sub: 'alternatives : 15 h 00 · liste d’attente', kind: 'no', at: 24, below: true },
        { lane: 'a', x: 760, label: 'acompte payé', sub: '10:04 · webhook reçu', kind: 'req', at: 40 },
        { lane: 'srv', x: 790, label: 'réservation confirmée', sub: 'tenue → confirmée · messages envoyés', kind: 'ok', at: 46, below: true },
        { lane: 'b', x: 820, label: 'liste d’attente', sub: 'prévenu si 14 h 30 se libère', kind: 'req', at: 52, below: true },
        { lane: 'srv', x: 1000, label: 'expiration', sub: 'non payé → libéré · ici sans effet', kind: 'req', at: 62, below: true },
      ],
      arrows: [
        { from: 'a', to: 'srv', x1: 300, x2: 330, kind: 'req', at: 5 },
        { from: 'b', to: 'srv', x1: 520, x2: 550, kind: 'req', at: 19 },
        { from: 'srv', to: 'b', x1: 560, x2: 600, kind: 'no', at: 26 },
        { from: 'a', to: 'srv', x1: 760, x2: 790, kind: 'req', at: 41 },
        { from: 'srv', to: 'a', x1: 800, x2: 840, kind: 'req', at: 48 },
      ],
      slotLabel: 'état du créneau 14 h 30',
      states: [
        { x1: 230, x2: 320, label: 'libre', kind: 'free', at: 2 },
        { x1: 330, x2: 780, label: 'tenu par Amel · expire 10:10', kind: 'hold', at: 10 },
        { x1: 790, x2: 1120, label: 'confirmé · Amel · acompte reçu', kind: 'ok', at: 47 },
      ],
      rule: 'Deux demandes à 220 ms d’écart ne passent pas toutes les deux : c’est la base de données qui tranche, dans une transaction, pas l’écran qui affichait encore « disponible ».', rule2: 'La tenue dure dix minutes ; sans acompte, elle expire et le créneau redevient libre. Les heures sont un exemple construit.',
    },
    week: {
      title: 'D’où viennent les créneaux : une semaine d’un praticien, couche par couche',
      alt: 'Grille d’une semaine, du lundi au samedi, de 9 h à 18 h, pour un praticien. Les heures d’ouverture sont le fond ; la pause de 12 h 30 à 13 h 30 ; le jeudi après-midi bloqué pour formation ; les rendez-vous déjà pris en gris plein ; une tenue en pointillés le mardi à 11 h, qui expire dans six minutes ; des tampons de dix minutes après chaque rendez-vous ; et ce qui reste, découpé en créneaux de trente minutes, en jaune : ce sont les seuls créneaux qu’un client voit. Un créneau de 14 h 30 le mercredi porte la note « 15 h 30 à Paris en été ». Les horaires sont un exemple construit.',
      days: ['lun', 'mar', 'mer', 'jeu', 'ven', 'sam'],
      hours: ['9 h', '10 h', '11 h', '12 h', '13 h', '14 h', '15 h', '16 h', '17 h'],
      blocks: [
        ...[0, 1, 2, 3, 4, 5].map((d) => ({ day: d, from: 9, to: 18, kind: 'closed' })),
        ...[0, 1, 2, 3, 4, 5].map((d) => ({ day: d, from: 12.5, to: 13.5, kind: 'break', label: d === 0 ? 'pause' : '' })),
        { day: 3, from: 13.5, to: 18, kind: 'blocked', label: 'bloqué · formation' },
        { day: 5, from: 13.5, to: 18, kind: 'blocked', label: 'fermé samedi après-midi' },
        { day: 0, from: 9, to: 10, kind: 'booked', label: 'RDV · B. Nadir' }, { day: 0, from: 10, to: 10.17, kind: 'buffer' },
        { day: 0, from: 14, to: 15, kind: 'booked', label: 'RDV · S. Amel' }, { day: 0, from: 15, to: 15.17, kind: 'buffer' },
        { day: 1, from: 9.5, to: 10.5, kind: 'booked', label: 'RDV' }, { day: 1, from: 10.5, to: 10.67, kind: 'buffer' },
        { day: 1, from: 11, to: 11.5, kind: 'hold', label: 'tenue · expire dans 6 min' },
        { day: 1, from: 15, to: 16, kind: 'booked', label: 'RDV' }, { day: 1, from: 16, to: 16.17, kind: 'buffer' },
        { day: 2, from: 9, to: 9.5, kind: 'booked', label: 'RDV' }, { day: 2, from: 9.5, to: 9.67, kind: 'buffer' },
        { day: 2, from: 16, to: 17, kind: 'booked', label: 'RDV' }, { day: 2, from: 17, to: 17.17, kind: 'buffer' },
        { day: 4, from: 10, to: 11, kind: 'booked', label: 'RDV' }, { day: 4, from: 11, to: 11.17, kind: 'buffer' },
        { day: 5, from: 9, to: 10, kind: 'booked', label: 'RDV' }, { day: 5, from: 10, to: 10.17, kind: 'buffer' },
        // free slots (30 min)
        { day: 0, from: 10.5, to: 11, kind: 'free', label: '10 h 30' }, { day: 0, from: 11, to: 11.5, kind: 'free', label: '11 h 00' }, { day: 0, from: 11.5, to: 12, kind: 'free', label: '11 h 30' }, { day: 0, from: 15.5, to: 16, kind: 'free', label: '15 h 30' }, { day: 0, from: 16.5, to: 17, kind: 'free', label: '16 h 30' },
        { day: 1, from: 13.5, to: 14, kind: 'free', label: '13 h 30' }, { day: 1, from: 14, to: 14.5, kind: 'free', label: '14 h 00' }, { day: 1, from: 16.5, to: 17, kind: 'free', label: '16 h 30' },
        { day: 2, from: 10, to: 10.5, kind: 'free', label: '10 h 00' }, { day: 2, from: 11, to: 11.5, kind: 'free', label: '11 h 00' }, { day: 2, from: 14.5, to: 15, kind: 'free', label: '14 h 30 · Paris +1 h' }, { day: 2, from: 15, to: 15.5, kind: 'free', label: '15 h 00' },
        { day: 3, from: 9, to: 9.5, kind: 'free', label: '9 h 00' }, { day: 3, from: 10, to: 10.5, kind: 'free', label: '10 h 00' }, { day: 3, from: 11, to: 11.5, kind: 'free', label: '11 h 00' },
        { day: 4, from: 9, to: 9.5, kind: 'free', label: '9 h 00' }, { day: 4, from: 14, to: 14.5, kind: 'free', label: '14 h 00' }, { day: 4, from: 15.5, to: 16, kind: 'free', label: '15 h 30' },
        { day: 5, from: 10.5, to: 11, kind: 'free', label: '10 h 30' }, { day: 5, from: 11.5, to: 12, kind: 'free', label: '11 h 30' },
      ],
      legend: [{ kind: 'closed', label: 'ouverture' }, { kind: 'break', label: 'pause · bloqué' }, { kind: 'booked', label: 'rendez-vous pris' }, { kind: 'hold', label: 'tenue 10 min' }, { kind: 'buffer', label: 'tampon 10 min' }, { kind: 'free', label: 'créneau visible' }],
      formula: 'Créneaux visibles = (ouverture − pauses − bloqué − rendez-vous − tenues − tampons), découpé par la durée du service, en heure d’Alger ; l’affichage se fait dans le fuseau du client.',
      note: 'Alger reste à UTC+1 toute l’année ; Paris passe à UTC+2 l’été : un créneau de 14 h 30 à Alger s’affiche 15 h 30 à Paris de fin mars à fin octobre, 14 h 30 le reste de l’année · horaires : exemple construit',
    },
  },
  en: {
    race: {
      title: 'Two customers, one slot, one booking: what the server does in 220 milliseconds',
      alt: 'Three timelines. Top, Amel, in Algiers, from the app, asks for the 14:30 slot at 10:00:00.120. Bottom, Karim, in Paris, through the WhatsApp agent, asks for the same slot at 10:00:00.340. Middle, the server: Amel’s transaction takes the slot and creates a hold that expires at 10:10; Karim’s request lands on a held slot and gets a refusal with two alternatives, 15:00 or the waitlist; Amel pays the deposit at 10:04 and the hold becomes a confirmed booking; Karim chooses the waitlist. Bottom, the slot state: free, held by Amel until 10:10, confirmed. Times are a constructed example.',
      lanes: { a: { name: 'Amel · Algiers · app', sub: '14:30 requested at 10:00:00.120' }, srv: { name: 'Server · one transaction per slot', sub: 'row lock on the slot · 10-minute hold' }, b: { name: 'Karim · Paris · WhatsApp agent', sub: '14:30 requested at 10:00:00.340 · 11:30 in Paris' } },
      ticks: [{ x: 300, label: '10:00:00' }, { x: 520, label: '+220 ms' }, { x: 760, label: '10:04' }, { x: 1000, label: '10:10' }],
      events: [
        { lane: 'a', x: 300, label: 'request 14:30', sub: 'from the app', kind: 'req', at: 4 },
        { lane: 'srv', x: 330, label: 'lock · hold created', sub: 'expires 10:10 · for Amel', kind: 'ok', at: 9, below: true },
        { lane: 'b', x: 520, label: 'request 14:30', sub: 'through the WhatsApp agent', kind: 'req', at: 18, below: true },
        { lane: 'srv', x: 550, label: 'slot held · refusal', sub: 'alternatives: 15:00 · waitlist', kind: 'no', at: 24, below: true },
        { lane: 'a', x: 760, label: 'deposit paid', sub: '10:04 · webhook received', kind: 'req', at: 40 },
        { lane: 'srv', x: 790, label: 'booking confirmed', sub: 'hold → confirmed · messages sent', kind: 'ok', at: 46, below: true },
        { lane: 'b', x: 820, label: 'waitlist', sub: 'notified if 14:30 frees up', kind: 'req', at: 52, below: true },
        { lane: 'srv', x: 1000, label: 'expiry', sub: 'unpaid → released · no effect here', kind: 'req', at: 62, below: true },
      ],
      arrows: [
        { from: 'a', to: 'srv', x1: 300, x2: 330, kind: 'req', at: 5 },
        { from: 'b', to: 'srv', x1: 520, x2: 550, kind: 'req', at: 19 },
        { from: 'srv', to: 'b', x1: 560, x2: 600, kind: 'no', at: 26 },
        { from: 'a', to: 'srv', x1: 760, x2: 790, kind: 'req', at: 41 },
        { from: 'srv', to: 'a', x1: 800, x2: 840, kind: 'req', at: 48 },
      ],
      slotLabel: 'state of the 14:30 slot',
      states: [
        { x1: 230, x2: 320, label: 'free', kind: 'free', at: 2 },
        { x1: 330, x2: 780, label: 'held by Amel · expires 10:10', kind: 'hold', at: 10 },
        { x1: 790, x2: 1120, label: 'confirmed · Amel · deposit received', kind: 'ok', at: 47 },
      ],
      rule: 'Two requests 220 ms apart do not both go through: the database decides, inside a transaction, not the screen that still showed “available”.', rule2: 'The hold lasts ten minutes; without a deposit it expires and the slot becomes free again. Times are a constructed example.',
    },
    week: {
      title: 'Where slots come from: one practitioner’s week, layer by layer',
      alt: 'A week grid, Monday to Saturday, 9:00 to 18:00, for one practitioner. Opening hours are the background; the 12:30 to 13:30 break; Thursday afternoon blocked for training; existing appointments in solid grey; a dashed hold on Tuesday at 11:00, expiring in six minutes; ten-minute buffers after each appointment; and what remains, sliced into thirty-minute slots, in yellow: the only slots a customer sees. A Wednesday 14:30 slot carries the note “15:30 in Paris in summer”. Times are a constructed example.',
      days: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'],
      hours: ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
      blocks: [
        ...[0, 1, 2, 3, 4, 5].map((d) => ({ day: d, from: 9, to: 18, kind: 'closed' })),
        ...[0, 1, 2, 3, 4, 5].map((d) => ({ day: d, from: 12.5, to: 13.5, kind: 'break', label: d === 0 ? 'break' : '' })),
        { day: 3, from: 13.5, to: 18, kind: 'blocked', label: 'blocked · training' },
        { day: 5, from: 13.5, to: 18, kind: 'blocked', label: 'closed Saturday afternoon' },
        { day: 0, from: 9, to: 10, kind: 'booked', label: 'appt · B. Nadir' }, { day: 0, from: 10, to: 10.17, kind: 'buffer' },
        { day: 0, from: 14, to: 15, kind: 'booked', label: 'appt · S. Amel' }, { day: 0, from: 15, to: 15.17, kind: 'buffer' },
        { day: 1, from: 9.5, to: 10.5, kind: 'booked', label: 'appt' }, { day: 1, from: 10.5, to: 10.67, kind: 'buffer' },
        { day: 1, from: 11, to: 11.5, kind: 'hold', label: 'hold · expires in 6 min' },
        { day: 1, from: 15, to: 16, kind: 'booked', label: 'appt' }, { day: 1, from: 16, to: 16.17, kind: 'buffer' },
        { day: 2, from: 9, to: 9.5, kind: 'booked', label: 'appt' }, { day: 2, from: 9.5, to: 9.67, kind: 'buffer' },
        { day: 2, from: 16, to: 17, kind: 'booked', label: 'appt' }, { day: 2, from: 17, to: 17.17, kind: 'buffer' },
        { day: 4, from: 10, to: 11, kind: 'booked', label: 'appt' }, { day: 4, from: 11, to: 11.17, kind: 'buffer' },
        { day: 5, from: 9, to: 10, kind: 'booked', label: 'appt' }, { day: 5, from: 10, to: 10.17, kind: 'buffer' },
        { day: 0, from: 10.5, to: 11, kind: 'free', label: '10:30' }, { day: 0, from: 11, to: 11.5, kind: 'free', label: '11:00' }, { day: 0, from: 11.5, to: 12, kind: 'free', label: '11:30' }, { day: 0, from: 15.5, to: 16, kind: 'free', label: '15:30' }, { day: 0, from: 16.5, to: 17, kind: 'free', label: '16:30' },
        { day: 1, from: 13.5, to: 14, kind: 'free', label: '13:30' }, { day: 1, from: 14, to: 14.5, kind: 'free', label: '14:00' }, { day: 1, from: 16.5, to: 17, kind: 'free', label: '16:30' },
        { day: 2, from: 10, to: 10.5, kind: 'free', label: '10:00' }, { day: 2, from: 11, to: 11.5, kind: 'free', label: '11:00' }, { day: 2, from: 14.5, to: 15, kind: 'free', label: '14:30 · Paris +1 h' }, { day: 2, from: 15, to: 15.5, kind: 'free', label: '15:00' },
        { day: 3, from: 9, to: 9.5, kind: 'free', label: '9:00' }, { day: 3, from: 10, to: 10.5, kind: 'free', label: '10:00' }, { day: 3, from: 11, to: 11.5, kind: 'free', label: '11:00' },
        { day: 4, from: 9, to: 9.5, kind: 'free', label: '9:00' }, { day: 4, from: 14, to: 14.5, kind: 'free', label: '14:00' }, { day: 4, from: 15.5, to: 16, kind: 'free', label: '15:30' },
        { day: 5, from: 10.5, to: 11, kind: 'free', label: '10:30' }, { day: 5, from: 11.5, to: 12, kind: 'free', label: '11:30' },
      ],
      legend: [{ kind: 'closed', label: 'opening hours' }, { kind: 'break', label: 'break · blocked' }, { kind: 'booked', label: 'appointment' }, { kind: 'hold', label: '10-min hold' }, { kind: 'buffer', label: '10-min buffer' }, { kind: 'free', label: 'visible slot' }],
      formula: 'Visible slots = (opening − breaks − blocked − appointments − holds − buffers), sliced by the service duration, in Algiers time; display happens in the customer’s time zone.',
      note: 'Algiers stays at UTC+1 all year; Paris moves to UTC+2 in summer: a 14:30 slot in Algiers shows as 15:30 in Paris from late March to late October, 14:30 the rest of the year · times: constructed example',
    },
  },
  ar: {
    race: {
      title: 'زبونان، موعد واحد، حجز واحد: ما يفعله الخادم في 220 ميلي ثانية',
      alt: 'ثلاثة خطوط زمنية. في الأعلى أمل، في الجزائر، من التطبيق، تطلب موعد 14:30 عند 10:00:00.120. في الأسفل كريم، في باريس، عبر وكيل WhatsApp، يطلب الموعد نفسه عند 10:00:00.340. في الوسط الخادم: معاملة أمل تأخذ الموعد وتنشئ حجزاً مؤقتاً ينتهي عند 10:10؛ طلب كريم يصل على موعد محجوز مؤقتاً فيتلقى رفضاً ببديلين، 15:00 أو قائمة الانتظار؛ تدفع أمل العربون عند 10:04 فيصير الحجز المؤقت حجزاً مؤكَّداً؛ ويختار كريم قائمة الانتظار. في الأسفل حالة الموعد: حر، محجوز مؤقتاً لأمل حتى 10:10، مؤكَّد. والأوقات مثال مبني.',
      lanes: { a: { name: 'أمل · الجزائر · التطبيق', sub: `${I('14:30')} طُلب عند ${I('10:00:00.120')}` }, srv: { name: 'الخادم · معاملة واحدة لكل موعد', sub: 'قفل على سطر الموعد · حجز مؤقت 10 دقائق' }, b: { name: 'كريم · باريس · وكيل WhatsApp', sub: `${I('14:30')} طُلب عند ${I('10:00:00.340')} · ${I('11:30')} في باريس` } },
      ticks: [{ x: 300, label: I('10:00:00') }, { x: 520, label: I('+220 ms') }, { x: 760, label: I('10:04') }, { x: 1000, label: I('10:10') }],
      events: [
        { lane: 'a', x: 300, label: `طلب ${I('14:30')}`, sub: 'من التطبيق', kind: 'req', at: 4 },
        { lane: 'srv', x: 330, label: 'قفل · حجز مؤقت', sub: `ينتهي ${I('10:10')} · لأمل`, kind: 'ok', at: 9, below: true },
        { lane: 'b', x: 520, label: `طلب ${I('14:30')}`, sub: 'عبر وكيل WhatsApp', kind: 'req', at: 18, below: true },
        { lane: 'srv', x: 550, label: 'موعد محجوز · رفض', sub: `بدائل: ${I('15:00')} · قائمة الانتظار`, kind: 'no', at: 24, below: true },
        { lane: 'a', x: 760, label: 'العربون مدفوع', sub: `${I('10:04')} · webhook مستلَم`, kind: 'req', at: 40 },
        { lane: 'srv', x: 790, label: 'حجز مؤكَّد', sub: 'مؤقت ← مؤكَّد · رسائل مرسلة', kind: 'ok', at: 46, below: true },
        { lane: 'b', x: 820, label: 'قائمة الانتظار', sub: `يُبلَّغ إن تحرر ${I('14:30')}`, kind: 'req', at: 52, below: true },
        { lane: 'srv', x: 1000, label: 'انتهاء', sub: 'غير مدفوع ← يُحرَّر · هنا بلا أثر', kind: 'req', at: 62, below: true },
      ],
      arrows: [
        { from: 'a', to: 'srv', x1: 300, x2: 330, kind: 'req', at: 5 },
        { from: 'b', to: 'srv', x1: 520, x2: 550, kind: 'req', at: 19 },
        { from: 'srv', to: 'b', x1: 560, x2: 600, kind: 'no', at: 26 },
        { from: 'a', to: 'srv', x1: 760, x2: 790, kind: 'req', at: 41 },
        { from: 'srv', to: 'a', x1: 800, x2: 840, kind: 'req', at: 48 },
      ],
      slotLabel: `حالة موعد ${I('14:30')}`,
      states: [
        { x1: 230, x2: 320, label: 'حر', kind: 'free', at: 2 },
        { x1: 330, x2: 780, label: `محجوز مؤقتاً لأمل · ينتهي ${I('10:10')}`, kind: 'hold', at: 10 },
        { x1: 790, x2: 1120, label: 'مؤكَّد · أمل · العربون مستلَم', kind: 'ok', at: 47 },
      ],
      rule: 'طلبان بفارق 220 ميلي ثانية لا يمرّان معاً: قاعدة البيانات تفصل داخل معاملة، لا الشاشة التي كانت ما زالت تعرض «متاح».', rule2: 'الحجز المؤقت يدوم عشر دقائق؛ وبلا عربون ينتهي ويعود الموعد حراً. والأوقات مثال مبني.',
    },
    week: {
      title: 'من أين تأتي المواعيد: أسبوع ممارس، طبقة طبقة',
      alt: 'شبكة أسبوع من الاثنين إلى السبت، من 9:00 إلى 18:00، لممارس واحد. ساعات العمل هي الخلفية؛ استراحة من 12:30 إلى 13:30؛ بعد ظهر الخميس محجوب للتكوين؛ المواعيد المأخوذة بالرمادي؛ حجز مؤقت متقطع الثلاثاء عند 11:00 ينتهي خلال ست دقائق؛ فواصل عشر دقائق بعد كل موعد؛ وما يبقى، مقطَّعاً إلى مواعيد من ثلاثين دقيقة، بالأصفر: المواعيد الوحيدة التي يراها الزبون. موعد 14:30 الأربعاء يحمل ملاحظة «15:30 في باريس صيفاً». والأوقات مثال مبني.',
      days: ['اثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'],
      hours: [I('9:00'), I('10:00'), I('11:00'), I('12:00'), I('13:00'), I('14:00'), I('15:00'), I('16:00'), I('17:00')],
      blocks: [
        ...[0, 1, 2, 3, 4, 5].map((d) => ({ day: d, from: 9, to: 18, kind: 'closed' })),
        ...[0, 1, 2, 3, 4, 5].map((d) => ({ day: d, from: 12.5, to: 13.5, kind: 'break', label: d === 0 ? 'استراحة' : '' })),
        { day: 3, from: 13.5, to: 18, kind: 'blocked', label: 'محجوب · تكوين' },
        { day: 5, from: 13.5, to: 18, kind: 'blocked', label: 'مغلق بعد ظهر السبت' },
        { day: 0, from: 9, to: 10, kind: 'booked', label: 'موعد · ب. نذير' }, { day: 0, from: 10, to: 10.17, kind: 'buffer' },
        { day: 0, from: 14, to: 15, kind: 'booked', label: 'موعد · س. أمل' }, { day: 0, from: 15, to: 15.17, kind: 'buffer' },
        { day: 1, from: 9.5, to: 10.5, kind: 'booked', label: 'موعد' }, { day: 1, from: 10.5, to: 10.67, kind: 'buffer' },
        { day: 1, from: 11, to: 11.5, kind: 'hold', label: 'مؤقت · ينتهي خلال 6 د' },
        { day: 1, from: 15, to: 16, kind: 'booked', label: 'موعد' }, { day: 1, from: 16, to: 16.17, kind: 'buffer' },
        { day: 2, from: 9, to: 9.5, kind: 'booked', label: 'موعد' }, { day: 2, from: 9.5, to: 9.67, kind: 'buffer' },
        { day: 2, from: 16, to: 17, kind: 'booked', label: 'موعد' }, { day: 2, from: 17, to: 17.17, kind: 'buffer' },
        { day: 4, from: 10, to: 11, kind: 'booked', label: 'موعد' }, { day: 4, from: 11, to: 11.17, kind: 'buffer' },
        { day: 5, from: 9, to: 10, kind: 'booked', label: 'موعد' }, { day: 5, from: 10, to: 10.17, kind: 'buffer' },
        { day: 0, from: 10.5, to: 11, kind: 'free', label: I('10:30') }, { day: 0, from: 11, to: 11.5, kind: 'free', label: I('11:00') }, { day: 0, from: 11.5, to: 12, kind: 'free', label: I('11:30') }, { day: 0, from: 15.5, to: 16, kind: 'free', label: I('15:30') }, { day: 0, from: 16.5, to: 17, kind: 'free', label: I('16:30') },
        { day: 1, from: 13.5, to: 14, kind: 'free', label: I('13:30') }, { day: 1, from: 14, to: 14.5, kind: 'free', label: I('14:00') }, { day: 1, from: 16.5, to: 17, kind: 'free', label: I('16:30') },
        { day: 2, from: 10, to: 10.5, kind: 'free', label: I('10:00') }, { day: 2, from: 11, to: 11.5, kind: 'free', label: I('11:00') }, { day: 2, from: 14.5, to: 15, kind: 'free', label: `${I('14:30')} · باريس ${I('+1')} س` }, { day: 2, from: 15, to: 15.5, kind: 'free', label: I('15:00') },
        { day: 3, from: 9, to: 9.5, kind: 'free', label: I('9:00') }, { day: 3, from: 10, to: 10.5, kind: 'free', label: I('10:00') }, { day: 3, from: 11, to: 11.5, kind: 'free', label: I('11:00') },
        { day: 4, from: 9, to: 9.5, kind: 'free', label: I('9:00') }, { day: 4, from: 14, to: 14.5, kind: 'free', label: I('14:00') }, { day: 4, from: 15.5, to: 16, kind: 'free', label: I('15:30') },
        { day: 5, from: 10.5, to: 11, kind: 'free', label: I('10:30') }, { day: 5, from: 11.5, to: 12, kind: 'free', label: I('11:30') },
      ],
      legend: [{ kind: 'closed', label: 'ساعات العمل' }, { kind: 'break', label: 'استراحة · محجوب' }, { kind: 'booked', label: 'موعد مأخوذ' }, { kind: 'hold', label: 'مؤقت 10 د' }, { kind: 'buffer', label: 'فاصل 10 د' }, { kind: 'free', label: 'موعد ظاهر' }],
      formula: 'المواعيد الظاهرة = (العمل − الاستراحات − المحجوب − المواعيد − المؤقتة − الفواصل)، مقطَّعة بمدة الخدمة، بتوقيت الجزائر؛ والعرض بتوقيت الزبون.',
      note: `الجزائر تبقى على ${I('UTC+1')} طوال السنة؛ وباريس تنتقل إلى ${I('UTC+2')} صيفاً: موعد ${I('14:30')} في الجزائر يظهر ${I('15:30')} في باريس من أواخر مارس إلى أواخر أكتوبر، و${I('14:30')} بقية السنة · الأوقات: مثال مبني`,
    },
  },
};
