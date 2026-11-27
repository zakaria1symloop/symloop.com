// Bespoke animated figures for the 2027 "standard téléphonique IP d'entreprise
// en Algérie" post.
//  pointe(): the busiest hour, counted: incoming and outgoing calls times the
//            average duration give the traffic in erlangs; a bar chart then
//            grows, one bar per number of simultaneous lines, showing the share
//            of calls that get the busy tone (Erlang B); three tiles.
//  trajet(): the path of one incoming call drawn as five linked steps (arrival,
//            voice menu, ring group, queue, answer) that light up in order, with
//            what the answering desk sees, what happens when nobody answers and
//            the call log; three tiles.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function draw(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{stroke-dashoffset:1000}${(at + dur).toFixed(1)}%,100%{stroke-dashoffset:0}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function growY(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleY(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleY(1)}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
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

// Erlang B, computed rather than typed: share of calls refused with n lines.
function erlangB(a, n) { let b = 1; for (let i = 1; i <= n; i++) b = (a * b) / (i + a * b); return b; }

export function pointe(t, rtl) {
  const c = ctx(rtl); const P = 'tp'; const css = []; const H = 652;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  // the count (left)
  s += box(c, css, P, 'calc', 4, 80, 150, 350, 176, t.calc, false);
  s += `<g style="animation:${show(css, P, 'def', 8)}">` + t.def.map((l, i) => text(c, 80, 350 + i * 15, l, { size: 9, font: 'mono', fill: C.fg55 })).join('') + '</g>';
  // the chart (right)
  const cx0 = 520, base = 440, top = 190, maxPct = 70; const bw = 50, gap = 24;
  s += `<g style="animation:${show(css, P, 'ax', 9)}">` + text(c, 480, 162, t.chartLabel, { size: 9, font: 'mono', fill: C.fg35, letter: 1.2, upper: true }) + line(c, 480, base, 1120, base, { stroke: C.line2 });
  [20, 40, 60].forEach((v) => { const y = base - (v / maxPct) * (base - top); s += line(c, 480, y, 1120, y, { stroke: C.line, dash: '2 6' }) + text(c, 484, y - 4, I(`${v} %`), { size: 8, font: 'mono', fill: C.fg35 }); });
  s += text(c, 480, base + 46, t.xLabel, { size: 8.5, font: 'mono', fill: C.fg35 }) + '</g>';
  for (let n = 1; n <= 8; n++) {
    const pct = erlangB(t.erlangs, n) * 100; const h = Math.max(3, (pct / maxPct) * (base - top)); const x = cx0 + (n - 1) * (bw + gap); const now = n === t.now; const kept = n === t.kept; const at = 11 + n * 1.6;
    const label = pct >= 10 ? `${Math.round(pct)} %` : pct >= 1 ? `${pct.toFixed(1).replace('.', t.dec)} %` : `${pct.toFixed(pct >= 0.1 ? 1 : 2).replace('.', t.dec)} %`;
    s += `<rect x="${c.RX(x, bw)}" y="${(base - h).toFixed(1)}" width="${bw}" height="${h.toFixed(1)}" fill="${now ? C.accent : kept ? C.fg : 'rgba(255,255,255,0.18)'}" style="transform-box:fill-box;transform-origin:bottom;animation:${growY(css, P, `b${n}`, at, 2.4)}"/>`;
    s += `<g style="animation:${show(css, P, `v${n}`, at + 2.4)}">` + text(c, x + bw / 2, base - h - 8, I(label), { size: 10.5, font: 'mono', fill: now ? C.accent : C.fg, anchor: 'middle', weight: now || kept ? 500 : 400 })
      + text(c, x + bw / 2, base + 16, String(n), { size: 10.5, font: 'mono', fill: now ? C.accent : kept ? C.fg : C.fg55, anchor: 'middle' })
      + (now ? text(c, x + bw / 2, base + 30, t.nowLabel, { size: 8, font: 'mono', fill: C.accent, anchor: 'middle' }) : '') + (kept ? text(c, x + bw / 2, base + 30, t.keptLabel, { size: 8, font: 'mono', fill: C.fg, anchor: 'middle' }) : '') + '</g>';
  }
  const ky = 506;
  s += tiles(c, css, P, ky, t.tiles, 40);
  s += text(c, 80, ky + 86, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export function trajet(t, rtl) {
  const c = ctx(rtl); const P = 'tt'; const css = []; const H = 678;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  // the path (left): five linked steps
  const sx = 80, sw = 470, sh = 52, sg = 18, sy = 150;
  t.steps.forEach((st, i) => {
    const y = sy + i * (sh + sg); const at = 4 + i * 4.5; const hot = st.hot;
    if (i > 0) s += `<line x1="${c.X(sx + 40)}" y1="${y - sg}" x2="${c.X(sx + 40)}" y2="${y}" stroke="${C.accent}" stroke-width="1.6" pathLength="1000" stroke-dasharray="1000" style="stroke-dashoffset:0;animation:${draw(css, P, `l${i}`, at - 2, 2)}"/>`;
    s += `<g style="animation:${show(css, P, `s${i}`, at)}">` + rect(c, sx, y, sw, sh, { stroke: hot ? C.accent : C.line2, fill: hot ? TINT : C.fill })
      + text(c, sx + 12, y + 21, I(st.time), { size: 9, font: 'mono', fill: hot ? C.accent : C.fg55 }) + text(c, sx + 86, y + 21, st.title, { size: 11, fill: hot ? C.accent : C.fg, weight: 500 })
      + text(c, sx + 86, y + 38, st.sub, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>';
  });
  // right column: what the desk sees, the fallbacks, the log
  s += box(c, css, P, 'pa', 24, 600, 150, 520, 122, t.desk, false);
  s += box(c, css, P, 'pb', 30, 600, 284, 520, 122, t.fallback, true);
  s += box(c, css, P, 'pc', 36, 600, 418, 520, 84, t.log, false);
  const ky = 522;
  s += tiles(c, css, P, ky, t.tiles, 42);
  s += text(c, 80, ky + 86, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    pointe: {
      title: 'L’heure de pointe comptée : 48 appels, deux lignes, et 40 % qui sonnent occupé',
      alt: 'À l’heure de pointe, 34 appels entrants et 14 sortants de 2 minutes 30 en moyenne font 120 minutes de conversation, soit 2 erlangs. Un histogramme donne la part des appels refusés selon le nombre de lignes simultanées : 67 % avec une ligne, 40 % avec deux (situation actuelle), 21 % avec trois, 9,5 % avec quatre, 3,7 % avec cinq, 1,2 % avec six (retenu), 0,3 % avec sept, 0,09 % avec huit.',
      header: 'Exemple construit · distributeur, un siège et deux agences, 30 postes · dimanche de 9 h à 10 h · modèle d’Erlang B',
      erlangs: 2, now: 2, kept: 6, dec: ',',
      calc: { title: 'Le compte de l’heure la plus chargée', sub: 'relevé sur la facture détaillée ou sur le journal du standard', rows: [{ l: 'Appels entrants', v: '34' }, { l: 'Appels sortants', v: '14' }, { l: 'Total dans l’heure', v: '48 appels' }, { l: 'Durée moyenne', v: '2 min 30' }, { l: 'Conversation cumulée', v: '120 min' }, { l: 'Trafic à écouler', v: '2 erlangs', hot: true }] },
      def: ['1 erlang = une ligne occupée sans arrêt pendant une heure.', '120 minutes de conversation dans l’heure = 2 erlangs.', 'Le modèle suppose que l’appel refusé ne rappelle pas aussitôt.'],
      chartLabel: 'Part des appels qui tombent sur « occupé »', xLabel: 'nombre d’appels possibles en même temps (lignes ou canaux)', nowLabel: 'aujourd’hui', keptLabel: 'retenu',
      tiles: [
        { big: '14 clients sur 34', l1: 'entendent « occupé » à l’heure de pointe avec 2 lignes', l2: '40 % des appels, entrants et sortants confondus', hot: true },
        { big: '6 canaux', l1: 'environ 1 appel sur 100 refusé à l’heure de pointe', l2: 'avec 8 canaux : moins d’1 sur 1 000' },
        { big: '≈ 0,5 Mbit/s', l1: 'pour six appels en même temps, dans chaque sens', l2: 'la voix demande peu de débit, mais un lien stable' },
      ],
      rule: 'On ne compte pas les lignes d’après le nombre de postes : on les compte d’après l’heure la plus chargée,',
      rule2: 'et la différence entre deux et six appels simultanés est celle entre « occupé » et « décroché ».',
      note: 'Exemple construit · appels et durées sont ceux de l’exemple ; le modèle donne un ordre de grandeur.',
    },
    trajet: {
      title: 'Le trajet d’un appel : reconnu, orienté, mis en attente, décroché, noté',
      alt: 'Trajet d’un appel entrant en cinq étapes : à 09:12:00 l’appel arrive et le numéro est reconnu ; à 09:12:02 l’accueil vocal propose ventes, service après-vente, comptabilité ; à 09:12:09 les trois postes du groupe ventes sonnent ensemble ; à 09:12:29 l’appel passe en file d’attente pendant 38 secondes ; à 09:13:07 un commercial décroche, la fiche du client déjà à l’écran. À droite : ce que voit le poste, ce qui se passe si personne ne décroche, et le journal de l’appel.',
      header: 'Exemple construit · dimanche 09:12 · un client connu appelle le numéro principal · les trois commerciaux sont déjà en ligne',
      steps: [
        { time: '09:12:00', title: 'L’appel arrive sur le numéro principal', sub: 'numéro reconnu : client connu, fiche trouvée' },
        { time: '09:12:02', title: 'Accueil vocal', sub: '1 ventes · 2 service après-vente · 3 comptabilité ; il tape 1' },
        { time: '09:12:09', title: 'Groupe ventes', sub: 'trois postes sonnent ensemble pendant 20 s ; tous en ligne' },
        { time: '09:12:29', title: 'File d’attente', sub: '« vous êtes le deuxième » ; attente : 38 s', hot: true },
        { time: '09:13:07', title: 'Karim décroche', sub: 'la fiche du client est déjà à l’écran ; durée 3 min 12' },
      ],
      desk: { title: 'Ce que voit le poste qui décroche', sub: 'avant même de dire bonjour', rows: [{ l: 'Appelant', v: 'Quincaillerie B. · client connu' }, { l: 'Dernière commande', v: 'il y a 5 jours' }, { l: 'A choisi', v: '1 · ventes' }, { l: 'A attendu', v: '38 s', hot: true }] },
      fallback: { title: 'Si personne ne décroche', sub: 'un appel n’est jamais perdu sans trace', rows: [{ l: 'Après 60 s d’attente', v: 'sonne sur le mobile du responsable' }, { l: 'Toujours sans réponse', v: 'messagerie, message reçu par e-mail' }, { l: 'Appel manqué', v: 'liste des rappels · rappelé en 12 min', hot: true }, { l: 'Hors horaires', v: 'annonce, messagerie, rappel à l’ouverture' }] },
      log: { title: 'Le journal de l’appel', sub: 'écrit tout seul, lisible depuis la fiche du client', rows: [{ l: 'Reçu 09:12 · décroché 09:13', v: 'durée 3 min 12' }, { l: 'Suite notée par Karim', v: 'devis à envoyer aujourd’hui' }] },
      tiles: [
        { big: '0 appel sur « occupé »', l1: 'répondu, mis en attente, débordé ou rappelé', l2: 'la tonalité occupé n’existe plus pour le client' },
        { big: '38 s', l1: 'd’attente mesurée pour cet appel', l2: 'le gérant lit l’attente moyenne heure par heure' },
        { big: '12 min', l1: 'entre un appel manqué et son rappel', l2: 'la liste des rappels est vidée chaque jour', hot: true },
      ],
      rule: 'Un standard ne sert pas à faire sonner des téléphones : il sert à ce que chaque appel',
      rule2: 'soit répondu, mis en attente, renvoyé ailleurs ou rappelé, et que cela se lise le soir.',
      note: 'Exemple construit · noms, heures et durées sont ceux de l’exemple.',
    },
  },
  en: {
    pointe: {
      title: 'The busy hour, counted: 48 calls, two lines, and 40 % getting the busy tone',
      alt: 'In the busy hour, 34 incoming and 14 outgoing calls of 2 minutes 30 on average make 120 minutes of conversation, that is 2 erlangs. A bar chart gives the share of calls refused by number of simultaneous lines: 67 % with one line, 40 % with two (today), 21 % with three, 9.5 % with four, 3.7 % with five, 1.2 % with six (chosen), 0.3 % with seven, 0.09 % with eight.',
      header: 'Constructed example · distributor, one head office and two branches, 30 extensions · Sunday 9 to 10 am · Erlang B model',
      erlangs: 2, now: 2, kept: 6, dec: '.',
      calc: { title: 'The count for the busiest hour', sub: 'read from the itemised bill or the phone system log', rows: [{ l: 'Incoming calls', v: '34' }, { l: 'Outgoing calls', v: '14' }, { l: 'Total in the hour', v: '48 calls' }, { l: 'Average duration', v: '2 min 30' }, { l: 'Cumulated conversation', v: '120 min' }, { l: 'Traffic to carry', v: '2 erlangs', hot: true }] },
      def: ['1 erlang = one line busy non-stop for an hour.', '120 minutes of conversation in the hour = 2 erlangs.', 'The model assumes a refused call does not redial at once.'],
      chartLabel: 'Share of calls that get the busy tone', xLabel: 'number of calls possible at the same time (lines or channels)', nowLabel: 'today', keptLabel: 'chosen',
      tiles: [
        { big: '14 customers out of 34', l1: 'hear “busy” in the busy hour with 2 lines', l2: '40 % of calls, incoming and outgoing together', hot: true },
        { big: '6 channels', l1: 'about 1 call in 100 refused in the busy hour', l2: 'with 8 channels: fewer than 1 in 1,000' },
        { big: '≈ 0.5 Mbit/s', l1: 'for six calls at once, in each direction', l2: 'voice needs little bandwidth, but a stable link' },
      ],
      rule: 'Lines are not counted from the number of extensions: they are counted from the busiest hour,',
      rule2: 'and the gap between two and six simultaneous calls is the gap between “busy” and “answered”.',
      note: 'Constructed example · calls and durations belong to the example; the model gives an order of magnitude.',
    },
    trajet: {
      title: 'The path of a call: recognised, routed, queued, answered, logged',
      alt: 'Path of an incoming call in five steps: at 09:12:00 the call arrives and the number is recognised; at 09:12:02 the voice menu offers sales, after-sales, accounting; at 09:12:09 the three sales extensions ring together; at 09:12:29 the call goes into the queue for 38 seconds; at 09:13:07 a salesperson answers with the customer record already on screen. On the right: what the desk sees, what happens if nobody answers, and the call log.',
      header: 'Constructed example · Sunday 09:12 · a known customer calls the main number · all three salespeople are already on the phone',
      steps: [
        { time: '09:12:00', title: 'The call reaches the main number', sub: 'number recognised: known customer, record found' },
        { time: '09:12:02', title: 'Voice menu', sub: '1 sales · 2 after-sales · 3 accounting; they press 1' },
        { time: '09:12:09', title: 'Sales group', sub: 'three extensions ring together for 20 s; all busy' },
        { time: '09:12:29', title: 'Queue', sub: '“you are second in line”; wait: 38 s', hot: true },
        { time: '09:13:07', title: 'Karim answers', sub: 'the customer record is already on screen; 3 min 12' },
      ],
      desk: { title: 'What the answering desk sees', sub: 'before even saying hello', rows: [{ l: 'Caller', v: 'Hardware store B. · known customer' }, { l: 'Last order', v: '5 days ago' }, { l: 'Chose', v: '1 · sales' }, { l: 'Waited', v: '38 s', hot: true }] },
      fallback: { title: 'If nobody answers', sub: 'a call is never lost without a trace', rows: [{ l: 'After 60 s in the queue', v: 'rings the manager’s mobile' }, { l: 'Still no answer', v: 'voicemail, message received by email' }, { l: 'Missed call', v: 'call-back list · called back in 12 min', hot: true }, { l: 'Outside hours', v: 'announcement, voicemail, call-back at opening' }] },
      log: { title: 'The call log', sub: 'written by itself, readable from the customer record', rows: [{ l: 'Received 09:12 · answered 09:13', v: 'duration 3 min 12' }, { l: 'Follow-up noted by Karim', v: 'quote to send today' }] },
      tiles: [
        { big: '0 calls on “busy”', l1: 'answered, queued, overflowed or called back', l2: 'the busy tone no longer exists for the customer' },
        { big: '38 s', l1: 'of waiting measured for this call', l2: 'the manager reads the average wait hour by hour' },
        { big: '12 min', l1: 'between a missed call and its call-back', l2: 'the call-back list is emptied every day', hot: true },
      ],
      rule: 'A phone system is not there to make phones ring: it is there so that every call',
      rule2: 'is answered, queued, sent elsewhere or called back, and that this can be read in the evening.',
      note: 'Constructed example · names, times and durations belong to the example.',
    },
  },
  ar: {
    pointe: {
      title: `ساعة الذروة محسوبة: 48 مكالمة، خطّان، و${I('40 %')} تسمع «مشغول»`,
      alt: 'في ساعة الذروة، 34 مكالمة واردة و14 صادرة بمعدل دقيقتين ونصف تعطي 120 دقيقة من المحادثة، أي 2 إرلانغ. مخطط أعمدة يعطي حصة المكالمات المرفوضة حسب عدد الخطوط المتزامنة: 67 % بخط واحد، 40 % بخطين (الوضع الحالي)، 21 % بثلاثة، 9,5 % بأربعة، 3,7 % بخمسة، 1,2 % بستة (المعتمد)، 0,3 % بسبعة، 0,09 % بثمانية.',
      header: `مثال مركَّب · موزّع، مقر ووكالتان، 30 هاتفاً · الأحد من 9 إلى 10 صباحاً · نموذج ${I('Erlang B')}`,
      erlangs: 2, now: 2, kept: 6, dec: ',',
      calc: { title: 'حساب الساعة الأكثر ازدحاماً', sub: 'من الفاتورة المفصَّلة أو من سجل المقسّم', rows: [{ l: 'المكالمات الواردة', v: '34' }, { l: 'المكالمات الصادرة', v: '14' }, { l: 'المجموع في الساعة', v: '48 مكالمة' }, { l: 'المدة المتوسطة', v: 'دقيقتان و30 ثانية' }, { l: 'المحادثة المتراكمة', v: '120 دقيقة' }, { l: 'الحركة المطلوب تمريرها', v: '2 إرلانغ', hot: true }] },
      def: ['1 إرلانغ = خط مشغول دون توقف طوال ساعة.', '120 دقيقة من المحادثة في الساعة = 2 إرلانغ.', 'النموذج يفترض أن المكالمة المرفوضة لا تعاود الاتصال فوراً.'],
      chartLabel: 'حصة المكالمات التي تسمع «مشغول»', xLabel: 'عدد المكالمات الممكنة في الوقت نفسه (خطوط أو قنوات)', nowLabel: 'اليوم', keptLabel: 'المعتمد',
      tiles: [
        { big: '14 زبوناً من 34', l1: 'يسمعون «مشغول» في ساعة الذروة بخطين', l2: `${I('40 %')} من المكالمات، الواردة والصادرة معاً`, hot: true },
        { big: '6 قنوات', l1: 'نحو مكالمة واحدة من 100 تُرفض في ساعة الذروة', l2: 'بثماني قنوات: أقل من واحدة في الألف' },
        { big: I('≈ 0,5 Mbit/s'), l1: 'لست مكالمات في الوقت نفسه، في كل اتجاه', l2: 'الصوت يحتاج تدفقاً قليلاً، لكن خطاً مستقراً' },
      ],
      rule: 'الخطوط لا تُحسب من عدد الهواتف: تُحسب من الساعة الأكثر ازدحاماً،',
      rule2: 'والفرق بين مكالمتين وست مكالمات متزامنة هو الفرق بين «مشغول» و«تم الرد».',
      note: 'مثال مركَّب · المكالمات والمدد خاصة بالمثال؛ النموذج يعطي ترتيباً تقريبياً.',
    },
    trajet: {
      title: 'مسار مكالمة: معروفة، موجَّهة، في الانتظار، مُجاب عليها، مسجَّلة',
      alt: 'مسار مكالمة واردة في خمس مراحل: عند 09:12:00 تصل المكالمة ويُعرَف الرقم؛ عند 09:12:02 تقترح القائمة الصوتية المبيعات وخدمة ما بعد البيع والمحاسبة؛ عند 09:12:09 ترنّ هواتف مجموعة المبيعات الثلاثة معاً؛ عند 09:12:29 تدخل المكالمة طابور الانتظار 38 ثانية؛ عند 09:13:07 يردّ بائع وبطاقة الزبون على شاشته. على الجانب: ما يراه من يردّ، وما يحدث إذا لم يردّ أحد، وسجل المكالمة.',
      header: `مثال مركَّب · الأحد ${I('09:12')} · زبون معروف يتصل بالرقم الرئيسي · البائعون الثلاثة في مكالمات`,
      steps: [
        { time: '09:12:00', title: 'المكالمة تصل إلى الرقم الرئيسي', sub: 'الرقم معروف: زبون معروف، البطاقة موجودة' },
        { time: '09:12:02', title: 'القائمة الصوتية', sub: '1 المبيعات · 2 ما بعد البيع · 3 المحاسبة؛ يضغط 1' },
        { time: '09:12:09', title: 'مجموعة المبيعات', sub: 'ثلاثة هواتف ترنّ معاً 20 ثانية؛ كلها مشغولة' },
        { time: '09:12:29', title: 'طابور الانتظار', sub: '«أنت الثاني في الطابور»؛ الانتظار: 38 ثانية', hot: true },
        { time: '09:13:07', title: 'كريم يردّ', sub: 'بطاقة الزبون على الشاشة مسبقاً؛ المدة 3 دقائق و12 ثانية' },
      ],
      desk: { title: 'ما يراه من يردّ', sub: 'قبل أن يقول مرحباً', rows: [{ l: 'المتصل', v: 'محل العتاد ب. · زبون معروف' }, { l: 'آخر طلبية', v: 'منذ 5 أيام' }, { l: 'اختار', v: '1 · المبيعات' }, { l: 'انتظر', v: '38 ثانية', hot: true }] },
      fallback: { title: 'إذا لم يردّ أحد', sub: 'لا تضيع مكالمة دون أثر', rows: [{ l: 'بعد 60 ثانية من الانتظار', v: 'يرنّ هاتف المسؤول المحمول' }, { l: 'ودون ردّ أيضاً', v: 'بريد صوتي، والرسالة تصل بالبريد الإلكتروني' }, { l: 'مكالمة فائتة', v: 'قائمة معاودة الاتصال · بعد 12 دقيقة', hot: true }, { l: 'خارج أوقات العمل', v: 'إعلان، بريد صوتي، اتصال عند الفتح' }] },
      log: { title: 'سجل المكالمة', sub: 'يُكتب وحده، ويُقرأ من بطاقة الزبون', rows: [{ l: `وردت ${I('09:12')} · رُدّ عليها ${I('09:13')}`, v: 'المدة 3 دقائق و12 ثانية' }, { l: 'المتابعة التي دوّنها كريم', v: 'عرض سعر يُرسل اليوم' }] },
      tiles: [
        { big: '0 مكالمة على «مشغول»', l1: 'مُجاب عليها، في الانتظار، محوَّلة أو مُعاد الاتصال بها', l2: 'نغمة «مشغول» لم تعد موجودة عند الزبون' },
        { big: '38 ثانية', l1: 'من الانتظار المقاس لهذه المكالمة', l2: 'المسيّر يقرأ متوسط الانتظار ساعة بساعة' },
        { big: '12 دقيقة', l1: 'بين المكالمة الفائتة ومعاودة الاتصال', l2: 'قائمة المعاودة تُفرَّغ كل يوم', hot: true },
      ],
      rule: 'المقسّم ليس لجعل الهواتف ترنّ: هو لكي تكون كل مكالمة',
      rule2: 'مُجاباً عليها، أو في الانتظار، أو محوَّلة، أو مُعاداً الاتصال بها، ولكي يُقرأ ذلك في المساء.',
      note: 'مثال مركَّب · الأسماء والأوقات والمدد خاصة بالمثال.',
    },
  },
};
