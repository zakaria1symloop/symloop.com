// Bespoke animated figures for the 2027 "comment bloquer des sites internet au bureau" post.
//  debit():  where a 20 Mbit/s line goes at three in the afternoon. Two
//            stacked bars, before and after: streaming video, social
//            networks, downloads and work. Segments grow one after another;
//            before, work gets 4 Mbit/s out of 20; after, work comes first
//            with 8, video is limited, downloads move to the night and 8
//            are left in reserve.
//  regles(): the policy as a grid, three groups of devices by five
//            categories of sites. Cells appear column by column with their
//            state: priority, allowed, limited, lunchtime only, at night,
//            blocked. The last column, dangerous sites, is blocked for all.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function growX(css, P, id, at, dur, rtl) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'} center;animation:${P}-${id} ${LOOP}s linear infinite`; }
const I = (x) => `⁦${x}⁩`;
const TINT = 'rgba(242,181,68,0.06)';
const DARK = '#0b0b0b';

function tiles(c, css, P, ky, ts, at0) {
  let s = '';
  ts.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, at0 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? TINT : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  return s;
}
const motionOff = (P) => `@media (prefers-reduced-motion: reduce){svg [style*="${P}-"]{animation:none !important}}`;

// Mbit/s per use, before and after: video, social, downloads, work, reserve
const KIND = {
  video: { stroke: C.accent, fill: 'rgba(242,181,68,0.30)', tc: C.accent },
  social: { stroke: C.accent, fill: 'rgba(242,181,68,0.14)', tc: C.accent },
  dl: { stroke: C.fg55, fill: 'rgba(255,255,255,0.10)', tc: C.fg70 },
  work: { stroke: C.fg, fill: 'rgba(255,255,255,0.78)', tc: '#000' },
  free: { stroke: C.line2, fill: DARK, tc: C.fg55, dash: '4 3' },
};
const BEFORE = [['video', 9], ['social', 3], ['dl', 4], ['work', 4]];
const AFTER = [['work', 8], ['video', 2], ['social', 1], ['dl', 1], ['free', 8]];

export function debit(t, rtl) {
  const c = ctx(rtl); const P = 'wd'; const css = []; const H = 584;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const x0 = 250, u = 40, bh = 36; const X = (m) => x0 + m * u;
  s += `<g style="animation:${show(css, P, 'ax', 3)}">` + [0, 5, 10, 15, 20].map((m) => text(c, X(m), 156, String(m), { size: 9, font: 'mono', fill: C.fg55, anchor: 'middle' }) + line(c, X(m), 162, X(m), 318, { stroke: C.line, dash: '2 6' })).join('') + text(c, X(20) + 14, 156, t.unit, { size: 9, font: 'mono', fill: C.fg55 }) + '</g>';
  const rowsDef = [[BEFORE, 176, 6, t.before], [AFTER, 264, 30, t.after]];
  rowsDef.forEach(([segs, y, at0, k], r) => {
    s += `<g style="animation:${show(css, P, `l${r}`, at0 - 1)}">` + text(c, 80, y + 15, k.name, { size: 11, fill: C.fg, weight: 500 }) + text(c, 80, y + 31, k.sub, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>';
    let m = 0;
    segs.forEach(([kind, v], i) => {
      const st = KIND[kind]; const at = at0 + i * 4; const w = v * u;
      s += `<g style="${growX(css, P, `s${r}${i}`, at, 3, rtl)}">` + rect(c, X(m), y, w, bh, st) + '</g>';
      if (w >= 110) s += `<g style="animation:${show(css, P, `t${r}${i}`, at + 3.2)}">` + text(c, X(m) + 10, y + 22, `${t.kinds[kind]} · ${v}`, { size: 9.5, fill: st.tc, weight: 500 }) + '</g>';
      m += v;
    });
    s += `<g style="animation:${show(css, P, `n${r}`, at0 + segs.length * 4 + 1)}">` + text(c, X(0), y + bh + 16, k.note, { size: 9.5, fill: r ? C.fg70 : C.accent }) + '</g>';
  });
  const by = 340;
  s += `<g style="animation:${show(css, P, 'bd', 58)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 400;
  s += tiles(c, css, P, ky, t.tiles, 62);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// state of each cell: three groups by five categories
const CELL = {
  prio: { stroke: C.fg, fill: 'rgba(255,255,255,0.78)', tc: '#000' },
  ok: { stroke: C.fg70, fill: C.fill, tc: C.fg },
  limit: { stroke: C.accent, fill: 'rgba(242,181,68,0.16)', tc: C.accent },
  noon: { stroke: C.accent, fill: 'rgba(242,181,68,0.06)', tc: C.accent, dash: '4 3' },
  night: { stroke: C.fg55, fill: DARK, tc: C.fg70, dash: '4 3' },
  out: { stroke: C.line2, fill: DARK, tc: C.fg55 },
  block: { stroke: C.accent, fill: C.accent, tc: '#000' },
};
const GRID = [
  ['prio', 'limit', 'noon', 'night', 'block'],
  ['prio', 'block', 'block', 'night', 'block'],
  ['out', 'limit', 'ok', 'block', 'block'],
];

export function regles(t, rtl) {
  const c = ctx(rtl); const P = 'wr'; const css = []; const H = 584;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const cx0 = 350, cw = 154; const ry = (r) => 178 + r * 50;
  s += `<g style="animation:${show(css, P, 'ch', 3)}">` + t.cats.map((n, i) => text(c, cx0 + i * cw + cw / 2, 160, n, { size: 10, fill: i === 4 ? C.accent : C.fg, weight: 500, anchor: 'middle' })).join('') + '</g>';
  t.groups.forEach((k, r) => {
    s += `<g style="animation:${show(css, P, `g${r}`, 4 + r * 1.5)}">` + text(c, 80, ry(r) + 16, k.name, { size: 10.5, fill: C.fg, weight: 500 }) + text(c, 80, ry(r) + 31, k.sub, { size: 8.5, font: 'mono', fill: C.fg55 }) + (r < 2 ? line(c, 80, ry(r) + 45, 1120, ry(r) + 45, { stroke: C.line }) : '') + '</g>';
  });
  for (let i = 0; i < 5; i++) {
    for (let r = 0; r < 3; r++) {
      const st = CELL[GRID[r][i]]; const at = 9 + i * 8 + r * 1.5;
      s += `<g style="animation:${show(css, P, `c${r}${i}`, at)}">` + rect(c, cx0 + i * cw + 7, ry(r), cw - 14, 38, st) + text(c, cx0 + i * cw + cw / 2, ry(r) + 23, t.states[GRID[r][i]], { size: 9.5, fill: st.tc, weight: 500, anchor: 'middle' }) + '</g>';
    }
  }
  const by = 340;
  s += `<g style="animation:${show(css, P, 'bd', 56)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 400;
  s += tiles(c, css, P, ky, t.tiles, 60);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    debit: {
      title: 'Où part le débit à 15 heures : 4 Mbit/s sur 20 pour le travail',
      alt: 'Deux barres pour une ligne de 20 Mbit/s à 15 heures. Avant : la vidéo en continu prend 9 Mbit/s, les réseaux sociaux 3, les téléchargements 4, et le travail n’en obtient que 4 alors qu’il en demande 8. Après : le travail passe en premier avec 8 Mbit/s, la vidéo est limitée à 2, les réseaux sociaux à 1, les téléchargements à 1 parce qu’ils sont reportés à la nuit, et il reste 8 Mbit/s de réserve.',
      header: 'Exemple construit · une ligne de 20 Mbit/s, un mardi à 15 h · relevé du boîtier par catégorie',
      unit: 'Mbit/s', kinds: { video: 'vidéo en continu', social: 'réseaux sociaux', dl: 'téléchargements', work: 'travail', free: 'réserve' },
      before: { name: 'Avant', sub: 'personne ne décide', note: 'le travail demande 8 Mbit/s et n’en obtient que 4 : le logiciel attend, la visioconférence coupe' },
      after: { name: 'Après', sub: 'mêmes personnes, même ligne', note: 'le travail passe en premier ; vidéo 2, réseaux sociaux 1, téléchargements 1, reportés à la nuit ; 8 de réserve' },
      band: 'On ne bloque pas pour punir : on mesure une semaine, on fait passer le travail en premier, on limite ce qui déborde, on reporte les téléchargements à la nuit.',
      tiles: [
        { big: '4 sur 20', l1: 'Mbit/s pour le travail, à 15 h, avant', l2: 'le reste part en vidéo et en téléchargements' },
        { big: 'le travail d’abord', l1: 'logiciel, messagerie, visioconférence en priorité', l2: 'la vidéo est limitée, pas interdite', hot: true },
        { big: '1 semaine de mesure', l1: 'le relevé du boîtier, par catégorie et par heure', l2: 'avant d’écrire la moindre règle' },
      ],
      line1: 'La plainte est « internet est lent » ; la mesure dit ce qui l’occupe, et à quelle heure.',
      line2: 'Limiter le débit de la vidéo rend plus de service que l’interdire : une règle qui laisse vivre se contourne moins.',
      note: 'Exemple construit · ligne et répartition inventées ; relevez la vôtre pendant une semaine avant de décider.',
    },
    regles: {
      title: 'Qui a droit à quoi : trois groupes, cinq catégories de sites',
      alt: 'Une grille de trois groupes d’appareils par cinq catégories de sites. Postes du bureau : travail prioritaire, vidéo en continu au débit limité, réseaux sociaux de 12 à 14 heures, téléchargements la nuit, sites dangereux bloqués. Caisse et serveur : travail prioritaire, vidéo bloquée, réseaux sociaux bloqués, téléchargements la nuit, sites dangereux bloqués. Wi-Fi invités et téléphones personnels : pas d’accès au réseau interne, vidéo au débit limité, réseaux sociaux autorisés, téléchargements bloqués, sites dangereux bloqués.',
      header: 'Exemple construit · la règle d’un bureau de trente personnes · une case par groupe et par catégorie',
      cats: ['Travail', 'Vidéo en continu', 'Réseaux sociaux', 'Téléchargements', 'Sites dangereux'],
      groups: [
        { name: 'Postes du bureau', sub: 'réseau câblé et Wi-Fi interne' },
        { name: 'Caisse et serveur', sub: 'un réseau à part' },
        { name: 'Wi-Fi invités', sub: 'visiteurs, téléphones personnels' },
      ],
      states: { prio: 'prioritaire', ok: 'autorisé', limit: 'débit limité', noon: '12 h – 14 h', night: 'la nuit', out: 'hors réseau interne', block: 'bloqué' },
      band: 'Une seule règle vaut pour tous, sans exception : les sites dangereux sont bloqués partout. Le reste se règle par groupe, et s’écrit sur une page.',
      tiles: [
        { big: '3 groupes', l1: 'bureau, caisse et serveur, invités', l2: 'chacun sur son propre réseau' },
        { big: '1 règle sans exception', l1: 'sites dangereux bloqués pour tous, dirigeant compris', l2: 'hameçonnage, logiciels malveillants', hot: true },
        { big: 'limiter, pas interdire', l1: 'débit réduit, ou plage de midi', l2: 'une règle que l’on peut tenir' },
      ],
      line1: 'Le filtre ne lit pas les pages : il connaît le nom du site demandé et le groupe qui le demande, et applique la règle.',
      line2: 'Séparer les invités du réseau interne protège davantage que n’importe quelle liste de sites interdits.',
      note: 'Exemple construit · règle à adapter, à écrire dans une charte courte remise à chacun. Ce guide ne traite pas des règles de droit.',
    },
  },
  en: {
    debit: {
      title: 'Where the bandwidth goes at 3 pm: 4 Mbit/s out of 20 for work',
      alt: 'Two bars for a 20 Mbit/s line at 3 pm. Before: streaming video takes 9 Mbit/s, social networks 3, downloads 4, and work only gets 4 when it needs 8. After: work comes first with 8 Mbit/s, video is limited to 2, social networks to 1, downloads to 1 because they are moved to the night, and 8 Mbit/s are left in reserve.',
      header: 'Constructed example · a 20 Mbit/s line, a Tuesday at 3 pm · reading from the box, by category',
      unit: 'Mbit/s', kinds: { video: 'streaming video', social: 'social networks', dl: 'downloads', work: 'work', free: 'reserve' },
      before: { name: 'Before', sub: 'nobody decides', note: 'work needs 8 Mbit/s and only gets 4: the software waits, the video call drops' },
      after: { name: 'After', sub: 'same people, same line', note: 'work comes first; video 2, social networks 1, downloads 1, moved to the night; 8 in reserve' },
      band: 'You do not block to punish: you measure for a week, put work first, limit what overflows, and move downloads to the night.',
      tiles: [
        { big: '4 out of 20', l1: 'Mbit/s for work, at 3 pm, before', l2: 'the rest goes to video and downloads' },
        { big: 'work first', l1: 'software, email, video calls get priority', l2: 'video is limited, not forbidden', hot: true },
        { big: '1 week of measuring', l1: 'the reading from the box, by category and by hour', l2: 'before writing a single rule' },
      ],
      line1: 'The complaint is “the internet is slow”; the measurement says what is using it, and at what time.',
      line2: 'Limiting the speed of video does more good than forbidding it: a rule people can live with is bypassed less.',
      note: 'Constructed example · invented line and breakdown; read your own for a week before deciding.',
    },
    regles: {
      title: 'Who is allowed what: three groups, five categories of sites',
      alt: 'A grid of three groups of devices by five categories of sites. Office computers: work has priority, streaming video at limited speed, social networks from noon to 2 pm, downloads at night, dangerous sites blocked. Till and server: work has priority, video blocked, social networks blocked, downloads at night, dangerous sites blocked. Guest Wi-Fi and personal phones: no access to the internal network, video at limited speed, social networks allowed, downloads blocked, dangerous sites blocked.',
      header: 'Constructed example · the rule of an office of thirty people · one cell per group and per category',
      cats: ['Work', 'Streaming video', 'Social networks', 'Downloads', 'Dangerous sites'],
      groups: [
        { name: 'Office computers', sub: 'wired network and internal Wi-Fi' },
        { name: 'Till and server', sub: 'a network of their own' },
        { name: 'Guest Wi-Fi', sub: 'visitors, personal phones' },
      ],
      states: { prio: 'priority', ok: 'allowed', limit: 'limited speed', noon: '12:00 – 14:00', night: 'at night', out: 'off the internal net', block: 'blocked' },
      band: 'One rule applies to everyone, without exception: dangerous sites are blocked everywhere. The rest is set per group, and written on one page.',
      tiles: [
        { big: '3 groups', l1: 'office, till and server, guests', l2: 'each on its own network' },
        { big: '1 rule with no exception', l1: 'dangerous sites blocked for all, the manager included', l2: 'phishing, malware', hot: true },
        { big: 'limit, do not forbid', l1: 'reduced speed, or a lunchtime window', l2: 'a rule people can keep' },
      ],
      line1: 'The filter does not read the pages: it knows the name of the site asked for and the group asking, and applies the rule.',
      line2: 'Separating guests from the internal network protects more than any list of forbidden sites.',
      note: 'Constructed example · a rule to adapt, to be written in a short policy handed to everyone. This guide does not cover legal rules.',
    },
  },
  ar: {
    debit: {
      title: `أين يذهب التدفق على الساعة 15: ${I('4 Mbit/s')} من 20 للعمل`,
      alt: 'شريطان لخط من 20 ميغابت في الثانية على الساعة 15. قبل: الفيديو المتواصل يأخذ 9، شبكات التواصل 3، التحميلات 4، والعمل لا ينال إلا 4 وهو يطلب 8. بعد: العمل يمرّ أولاً بـ 8، الفيديو محدود بـ 2، شبكات التواصل بـ 1، التحميلات بـ 1 لأنها مؤجَّلة إلى الليل، ويبقى 8 احتياطاً.',
      header: `مثال مركَّب · خط من ${I('20 Mbit/s')}، يوم ثلاثاء على الساعة 15 · قراءة العلبة حسب الصنف`,
      unit: I('Mbit/s'), kinds: { video: 'فيديو متواصل', social: 'شبكات التواصل', dl: 'تحميلات', work: 'العمل', free: 'احتياط' },
      before: { name: 'قبل', sub: 'لا أحد يقرّر', note: `العمل يطلب ${I('8 Mbit/s')} ولا ينال إلا 4: البرنامج ينتظر، والاجتماع بالفيديو ينقطع` },
      after: { name: 'بعد', sub: 'الأشخاص أنفسهم، والخط نفسه', note: 'العمل يمرّ أولاً؛ الفيديو 2، شبكات التواصل 1، التحميلات 1 ومؤجَّلة إلى الليل؛ و8 احتياطاً' },
      band: 'لا نحجب للعقاب: نقيس أسبوعاً، نمرّر العمل أولاً، نحدّ ما يفيض، ونؤجّل التحميلات إلى الليل.',
      tiles: [
        { big: '4 من 20', l1: `${I('Mbit/s')} للعمل، على الساعة 15، قبل`, l2: 'والباقي يذهب في الفيديو والتحميلات' },
        { big: 'العمل أولاً', l1: 'البرنامج، البريد، والاجتماع بالفيديو بالأولوية', l2: 'الفيديو محدود، لا ممنوع', hot: true },
        { big: 'أسبوع من القياس', l1: 'قراءة العلبة، حسب الصنف وحسب الساعة', l2: 'قبل كتابة أي قاعدة' },
      ],
      line1: 'الشكوى هي «الإنترنت بطيء»؛ والقياس يقول ما يشغله، وفي أي ساعة.',
      line2: 'تحديد تدفق الفيديو ينفع أكثر من منعه: القاعدة التي تترك متنفَّساً يُتحايَل عليها أقل.',
      note: 'مثال مركَّب · خط وتوزيع مخترَعان؛ اقرؤوا توزيعكم مدة أسبوع قبل القرار.',
    },
    regles: {
      title: 'من له حق في ماذا: ثلاث مجموعات، وخمسة أصناف من المواقع',
      alt: 'شبكة من ثلاث مجموعات أجهزة في خمسة أصناف من المواقع. حواسيب المكتب: العمل بالأولوية، الفيديو المتواصل بتدفق محدود، شبكات التواصل من 12 إلى 14، التحميلات ليلاً، والمواقع الخطيرة محجوبة. الصندوق والخادم: العمل بالأولوية، الفيديو محجوب، شبكات التواصل محجوبة، التحميلات ليلاً، والمواقع الخطيرة محجوبة. واي فاي الضيوف والهواتف الشخصية: لا وصول إلى الشبكة الداخلية، الفيديو بتدفق محدود، شبكات التواصل مسموحة، التحميلات محجوبة، والمواقع الخطيرة محجوبة.',
      header: 'مثال مركَّب · قاعدة مكتب من ثلاثين شخصاً · خانة لكل مجموعة ولكل صنف',
      cats: ['العمل', 'فيديو متواصل', 'شبكات التواصل', 'التحميلات', 'مواقع خطيرة'],
      groups: [
        { name: 'حواسيب المكتب', sub: 'الشبكة السلكية والواي فاي الداخلي' },
        { name: 'الصندوق والخادم', sub: 'شبكة على حدة' },
        { name: 'واي فاي الضيوف', sub: 'الزوّار والهواتف الشخصية' },
      ],
      states: { prio: 'بالأولوية', ok: 'مسموح', limit: 'تدفق محدود', noon: I('12:00 – 14:00'), night: 'ليلاً', out: 'خارج الشبكة الداخلية', block: 'محجوب' },
      band: 'قاعدة واحدة تسري على الجميع، دون استثناء: المواقع الخطيرة محجوبة في كل مكان. والباقي يُضبط حسب المجموعة، ويُكتب في صفحة.',
      tiles: [
        { big: '3 مجموعات', l1: 'المكتب، الصندوق والخادم، والضيوف', l2: 'كل واحدة على شبكتها' },
        { big: 'قاعدة دون استثناء', l1: 'المواقع الخطيرة محجوبة للجميع، والمدير معهم', l2: 'تصيّد، وبرمجيات خبيثة', hot: true },
        { big: 'التحديد، لا المنع', l1: 'تدفق منخفض، أو فترة منتصف النهار', l2: 'قاعدة يمكن الالتزام بها' },
      ],
      line1: 'المرشِّح لا يقرأ الصفحات: يعرف اسم الموقع المطلوب والمجموعة التي تطلبه، ويطبّق القاعدة.',
      line2: 'فصل الضيوف عن الشبكة الداخلية يحمي أكثر من أي قائمة مواقع ممنوعة.',
      note: 'مثال مركَّب · قاعدة تُكيَّف، وتُكتب في ميثاق قصير يُسلَّم لكل واحد. هذا الدليل لا يتناول القواعد القانونية.',
    },
  },
};
