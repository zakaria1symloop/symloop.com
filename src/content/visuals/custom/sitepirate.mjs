// Bespoke animated figures for the 2027 "site web piraté, que faire" post.
//  chronologie(): the hack is older than its signs. A day axis from one week
//                 before the intrusion to the day it shows; a marker travels
//                 from the entry to the first visible sign while the events
//                 appear above and below; under the axis, two backup policies:
//                 fourteen daily copies, all taken after the entry, and weekly
//                 copies kept twelve weeks, one of which predates it; tiles.
//  portes():      what a quick clean leaves behind. Six places of a site appear
//                 one after another; the visible page is marked as cleaned,
//                 the five others light up as still open; a band counts them;
//                 three tiles.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
const I = (x) => `⁦${x}⁩`;
const TINT = 'rgba(242,181,68,0.06)';
const DARK = '#0b0b0b';

function tiles(c, css, P, ky, ts, at0) {
  let s = '';
  ts.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, at0 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? TINT : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  return s;
}
const motionOff = (P) => `@media (prefers-reduced-motion: reduce){svg [style*="${P}-"]{animation:none !important}}`;

// days counted from the intrusion (day 0); the axis starts one week before
const EVENTS = [0, 1, 9, 24, 42];
const WEEKLY = [-5, 2, 9, 16, 23, 30, 37];

export function chronologie(t, rtl) {
  const c = ctx(rtl); const P = 'hc'; const css = []; const H = 604;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const X = (d) => 100 + (d + 7) * 18.5; const ay = 250; const T0 = 6, TD = 30;
  const at = (d) => T0 + (d / 42) * TD;
  s += `<g style="animation:${show(css, P, 'ax', 3)}">` + line(c, X(-7), ay, X(46), ay, { stroke: C.line2 }) + text(c, X(-7), ay + 18, t.axis[0], { size: 8.5, font: 'mono', fill: C.fg55 }) + text(c, X(46), ay + 18, t.axis[1], { size: 8.5, font: 'mono', fill: C.fg55, anchor: 'end' }) + '</g>';
  // the silent stretch between the entry and the first visible sign
  s += `<g style="animation:${show(css, P, 'sil', at(21))}">` + line(c, X(1), ay, X(42), ay, { stroke: C.accent, sw: 3 }) + text(c, (X(1) + X(42)) / 2 + 60, ay - 10, t.silent, { size: 9.5, font: 'mono', fill: C.accent, anchor: 'middle' }) + '</g>';
  // the events: [day, label above (true) or below, anchor]
  const place = [[0, true, 'start'], [1, false, 'start'], [9, true, 'start'], [24, false, 'start'], [42, true, 'end']];
  place.forEach(([d, up, anchor], i) => {
    const x = X(d); const hot = i === 0 || i === 4; const lift = i === 0 ? 30 : 0; const y1 = up ? ay - 58 - lift : ay + 44; const y2 = up ? ay - 44 - lift : ay + 58;
    s += `<g style="animation:${show(css, P, `e${i}`, at(d) + 0.4)}">` + line(c, x, ay, x, up ? ay - 36 - lift : ay + 30, { stroke: hot ? C.accent : C.fg55 }) + circle(c, x, ay, hot ? 6 : 4, { fill: hot ? C.accent : C.fg })
      + text(c, anchor === 'end' ? x : x + 0, y1, t.events[i].d, { size: 9, font: 'mono', fill: hot ? C.accent : C.fg70, anchor }) + text(c, anchor === 'end' ? x : x + 0, y2, t.events[i].l, { size: 10, fill: hot ? C.accent : C.fg, anchor }) + '</g>';
  });
  // the marker that travels from the entry to the first sign
  css.push(`@keyframes ${P}-run{0%,${T0}%{transform:translateX(${(c.X(X(0)) - c.X(X(42))).toFixed(1)}px)}${(T0 + TD).toFixed(1)}%,100%{transform:translateX(0)}}`);
  s += `<circle cx="${c.X(X(42)).toFixed(1)}" cy="${ay}" r="9" fill="none" stroke="${C.accent}" stroke-width="2" style="animation:${P}-run ${LOOP}s linear infinite"/>`;
  // two backup policies under the axis
  const r1 = 338, r2 = 372;
  s += `<g style="animation:${show(css, P, 'b1', 44)}">` + text(c, 80, r1 + 15, t.rows[0].name, { size: 10, fill: C.fg70 }) + rect(c, X(29), r1, X(42) - X(29), 22, { stroke: C.accent, fill: TINT }) + text(c, X(29) - 10, r1 + 15, t.rows[0].note, { size: 9.5, font: 'mono', fill: C.accent, anchor: 'end' }) + '</g>';
  s += `<g style="animation:${show(css, P, 'b2', 52)}">` + text(c, 80, r2 + 12, t.rows[1].name, { size: 10, fill: C.fg70 }) + '</g>';
  WEEKLY.forEach((d, i) => { const clean = d < 0; s += `<g style="animation:${show(css, P, `w${i}`, clean ? 62 : 53 + i * 1.2)}">` + circle(c, X(d), r2 + 34, clean ? 8 : 5, { fill: clean ? C.fg : 'none', stroke: clean ? C.fg : C.accent, sw: 2 }) + '</g>'; });
  s += `<g style="animation:${show(css, P, 'cl', 63)}">` + text(c, X(-5) - 10, r2 + 58, t.rows[1].note, { size: 9.5, font: 'mono', fill: C.fg }) + '</g>';
  const ky = 444;
  s += tiles(c, css, P, ky, t.tiles, 68);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export function portes(t, rtl) {
  const c = ctx(rtl); const P = 'hp'; const css = []; const H = 596;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const bw = 334, bh = 98;
  t.places.forEach((p, i) => {
    const x = 80 + (i % 3) * 353; const y = 148 + Math.floor(i / 3) * 110; const cleaned = i === 0;
    s += `<g style="animation:${show(css, P, `p${i}`, 5 + i * 4)}">` + rect(c, x, y, bw, bh, { stroke: C.line2, fill: DARK }) + text(c, x + 14, y + 24, p.name, { size: 11.5, fill: C.fg, weight: 500 }) + text(c, x + 14, y + 44, p.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 14, y + 58, p.l2, { size: 9.5, fill: C.fg70 }) + '</g>';
    s += `<g style="animation:${show(css, P, `s${i}`, cleaned ? 32 : 40 + i * 3)}">` + rect(c, x, y, bw, bh, { stroke: cleaned ? C.fg55 : C.accent, fill: cleaned ? 'none' : TINT, sw: cleaned ? 1 : 1.5 }) + text(c, x + 14, y + 82, p.state, { size: 9, font: 'mono', fill: cleaned ? C.fg55 : C.accent, weight: 500 }) + (cleaned ? '' : circle(c, x + bw - 18, y + 20, 5, { fill: C.accent })) + '</g>';
  });
  const by = 376;
  s += `<g style="animation:${show(css, P, 'bd', 60)}">` + rect(c, 80, by, 1040, 42, { stroke: C.accent, fill: TINT }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.accent }) + '</g>';
  const ky = 436;
  s += tiles(c, css, P, ky, t.tiles, 66);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    chronologie: {
      title: 'Le piratage a six semaines de plus que ses signes',
      alt: 'Chronologie d’un site piraté. Le 3 mars, une extension non mise à jour laisse entrer un intrus. Le lendemain, une porte dérobée est déposée. Vers le neuvième jour, des pages de spam sont créées, invisibles depuis le menu. Vers le vingt-quatrième jour, les moteurs de recherche commencent à les indexer. Le 14 avril, quarante-deux jours après l’entrée, le site redirige ses visiteurs et l’on s’en aperçoit. Des sauvegardes gardées quatorze jours ont toutes été prises après l’entrée ; des copies hebdomadaires gardées douze semaines en contiennent une du 26 février, antérieure à l’entrée.',
      header: 'Exemple construit · un site vitrine sous un gestionnaire de contenu courant · dates et délais inventés',
      axis: ['une semaine avant', 'quatre jours après'],
      silent: 'six semaines sans aucun signe visible',
      events: [
        { d: '3 mars · jour 0', l: 'une extension non mise à jour laisse entrer' },
        { d: 'jour 1', l: 'une porte dérobée est déposée' },
        { d: 'jour 9', l: 'des pages de spam sont créées, hors du menu' },
        { d: 'jour 24', l: 'les moteurs de recherche les indexent' },
        { d: '14 avril · jour 42', l: 'le site redirige : on s’en aperçoit' },
      ],
      rows: [
        { name: 'Copies quotidiennes, gardées 14 jours', note: '14 copies, toutes infectées' },
        { name: 'Copies hebdomadaires, gardées 12 semaines', note: 'copie du 26 février : saine' },
      ],
      tiles: [
        { big: '42 jours', l1: 'entre l’entrée et le premier signe visible', l2: 'le jour où on le voit n’est pas le jour du piratage' },
        { big: '14 copies, 0 saine', l1: 'des sauvegardes gardées deux semaines', l2: 'toutes prises après l’entrée', hot: true },
        { big: '1 copie du 26 février', l1: 'parmi des copies gardées douze semaines', l2: 'antérieure à l’entrée : c’est elle qui sert' },
      ],
      line1: 'Un site piraté l’est souvent depuis plus longtemps qu’on ne le croit ; c’est la date de l’entrée qui dit quelle copie est saine.',
      line2: 'Garder peu de sauvegardes protège d’une panne ; en garder longtemps protège d’un piratage.',
      note: 'Exemple construit · dates, délais et extension inventés pour montrer pourquoi la durée de conservation compte.',
    },
    portes: {
      title: 'Ce qu’un nettoyage rapide laisse derrière lui : cinq portes sur six',
      alt: 'Six endroits d’un site piraté. La page d’accueil remplacée est supprimée : c’est ce qu’on voit. Cinq autres restent : un fichier de commande à distance caché dans le dossier des envois, un compte administrateur que personne ne connaît, quelques lignes ajoutées dans un fichier du thème, des liens et des pages injectés dans la base de données, et une tâche planifiée qui réinstalle le tout chaque nuit.',
      header: 'Exemple construit · ce qui reste dans un site après un « nettoyage » de la seule page visible',
      places: [
        { name: 'La page d’accueil', l1: 'page remplacée, ou redirection', l2: 'vers un autre site', state: 'supprimée : c’est tout ce qu’on voit' },
        { name: 'Le dossier des envois', l1: 'un fichier de commande à distance,', l2: 'caché parmi les images', state: 'toujours là' },
        { name: 'Les comptes', l1: 'un administrateur que', l2: 'personne ne connaît', state: 'toujours là' },
        { name: 'Le thème et les extensions', l1: 'quelques lignes ajoutées', l2: 'dans un fichier légitime', state: 'toujours là' },
        { name: 'La base de données', l1: 'des liens et des pages', l2: 'injectés dans le contenu', state: 'toujours là' },
        { name: 'Les tâches planifiées', l1: 'une tâche qui réinstalle', l2: 'le tout chaque nuit', state: 'toujours là' },
      ],
      band: 'Une porte fermée, cinq encore ouvertes : le site est repris sans que personne n’ait à revenir.',
      tiles: [
        { big: '1 sur 6', l1: 'ce qu’un nettoyage rapide retire', l2: 'la page visible, et rien d’autre' },
        { big: '5 portes restent', l1: 'fichier caché, compte, code, base, tâche', l2: 'chacune suffit à tout reprendre', hot: true },
        { big: 'reconstruire', l1: 'logiciel repris à la source, contenu vérifié', l2: 'ou restaurer une copie d’avant l’entrée' },
      ],
      line1: 'Supprimer la page affichée par l’intrus, c’est repeindre une porte fracturée : l’entrée est toujours là.',
      line2: 'Un site piraté ne se nettoie pas fichier par fichier : il se reconstruit propre, et l’on n’y remet que du contenu vérifié.',
      note: 'Exemple construit · emplacements typiques ; un diagnostic réel part des fichiers modifiés et des journaux du serveur.',
    },
  },
  en: {
    chronologie: {
      title: 'The hack is six weeks older than its signs',
      alt: 'Timeline of a hacked website. On 3 March, a plugin that was not updated lets an intruder in. The next day, a backdoor is planted. Around day nine, spam pages are created, invisible from the menu. Around day twenty-four, search engines start indexing them. On 14 April, forty-two days after the entry, the site redirects its visitors and people notice. Backups kept fourteen days were all taken after the entry; weekly copies kept twelve weeks include one from 26 February, before the entry.',
      header: 'Constructed example · a brochure site on a common content management system · invented dates and delays',
      axis: ['one week before', 'four days after'],
      silent: 'six weeks with no visible sign',
      events: [
        { d: '3 March · day 0', l: 'a plugin not updated lets someone in' },
        { d: 'day 1', l: 'a backdoor is planted' },
        { d: 'day 9', l: 'spam pages are created, off the menu' },
        { d: 'day 24', l: 'search engines index them' },
        { d: '14 April · day 42', l: 'the site redirects: people notice' },
      ],
      rows: [
        { name: 'Daily copies, kept 14 days', note: '14 copies, all infected' },
        { name: 'Weekly copies, kept 12 weeks', note: 'copy of 26 February: clean' },
      ],
      tiles: [
        { big: '42 days', l1: 'between the entry and the first visible sign', l2: 'the day you see it is not the day of the hack' },
        { big: '14 copies, 0 clean', l1: 'backups kept for two weeks', l2: 'all taken after the entry', hot: true },
        { big: '1 copy of 26 February', l1: 'among copies kept twelve weeks', l2: 'older than the entry: that is the one to use' },
      ],
      line1: 'A hacked site has often been hacked for longer than people think; the date of the entry says which copy is clean.',
      line2: 'Keeping few backups protects against a failure; keeping them for long protects against a hack.',
      note: 'Constructed example · dates, delays and plugin invented to show why the retention period matters.',
    },
    portes: {
      title: 'What a quick clean leaves behind: five doors out of six',
      alt: 'Six places in a hacked site. The replaced home page is deleted: that is what you see. Five others remain: a remote-command file hidden in the uploads folder, an administrator account nobody knows, a few lines added to a theme file, links and pages injected into the database, and a scheduled task that reinstalls everything every night.',
      header: 'Constructed example · what remains in a site after “cleaning” only the visible page',
      places: [
        { name: 'The home page', l1: 'page replaced, or redirect', l2: 'to another site', state: 'deleted: that is all you see' },
        { name: 'The uploads folder', l1: 'a remote-command file,', l2: 'hidden among the images', state: 'still there' },
        { name: 'The accounts', l1: 'an administrator that', l2: 'nobody knows', state: 'still there' },
        { name: 'The theme and plugins', l1: 'a few lines added', l2: 'to a legitimate file', state: 'still there' },
        { name: 'The database', l1: 'links and pages', l2: 'injected into the content', state: 'still there' },
        { name: 'The scheduled tasks', l1: 'a task that reinstalls', l2: 'everything every night', state: 'still there' },
      ],
      band: 'One door closed, five still open: the site is taken again without anyone having to come back.',
      tiles: [
        { big: '1 out of 6', l1: 'what a quick clean removes', l2: 'the visible page, and nothing else' },
        { big: '5 doors remain', l1: 'hidden file, account, code, database, task', l2: 'each one is enough to take it all back', hot: true },
        { big: 'rebuild', l1: 'software taken from the source, content checked', l2: 'or restore a copy from before the entry' },
      ],
      line1: 'Deleting the page the intruder put up is repainting a broken door: the way in is still there.',
      line2: 'A hacked site is not cleaned file by file: it is rebuilt clean, and only checked content goes back in.',
      note: 'Constructed example · typical places; a real diagnosis starts from the modified files and the server logs.',
    },
  },
  ar: {
    chronologie: {
      title: 'الاختراق أقدم بستة أسابيع من علاماته',
      alt: 'تسلسل زمني لموقع مخترَق. يوم 3 مارس، إضافة غير محدَّثة تسمح بدخول متسلّل. وفي الغد يوضع باب خلفي. ونحو اليوم التاسع تُنشأ صفحات مزعجة، لا تُرى من القائمة. ونحو اليوم الرابع والعشرين تبدأ محرّكات البحث في فهرستها. ويوم 14 أفريل، بعد اثنين وأربعين يوماً من الدخول، يحوّل الموقع زوّاره فننتبه. النسخ الاحتياطية المحفوظة أربعة عشر يوماً أُخذت كلها بعد الدخول؛ والنسخ الأسبوعية المحفوظة اثني عشر أسبوعاً فيها نسخة 26 فيفري، السابقة للدخول.',
      header: 'مثال مركَّب · موقع تعريفي على نظام تسيير محتوى شائع · تواريخ وآجال مخترَعة',
      axis: ['أسبوع قبله', 'أربعة أيام بعده'],
      silent: 'ستة أسابيع دون أي علامة ظاهرة',
      events: [
        { d: '3 مارس · اليوم 0', l: 'إضافة غير محدَّثة تسمح بالدخول' },
        { d: 'اليوم 1', l: 'يوضع باب خلفي' },
        { d: 'اليوم 9', l: 'تُنشأ صفحات مزعجة، خارج القائمة' },
        { d: 'اليوم 24', l: 'محرّكات البحث تفهرسها' },
        { d: '14 أفريل · اليوم 42', l: 'الموقع يحوّل الزوّار: ننتبه' },
      ],
      rows: [
        { name: 'نسخ يومية، تُحفظ 14 يوماً', note: '14 نسخة، كلها مصابة' },
        { name: 'نسخ أسبوعية، تُحفظ 12 أسبوعاً', note: 'نسخة 26 فيفري: سليمة' },
      ],
      tiles: [
        { big: '42 يوماً', l1: 'بين الدخول وأول علامة ظاهرة', l2: 'يوم نراه ليس يوم الاختراق' },
        { big: '14 نسخة، ولا واحدة سليمة', l1: 'نسخ احتياطية تُحفظ أسبوعين', l2: 'أُخذت كلها بعد الدخول', hot: true },
        { big: 'نسخة 26 فيفري', l1: 'ضمن نسخ تُحفظ اثني عشر أسبوعاً', l2: 'سابقة للدخول: هي التي تنفع' },
      ],
      line1: 'الموقع المخترَق مخترَق غالباً منذ أطول مما نظن؛ وتاريخ الدخول هو الذي يقول أي نسخة سليمة.',
      line2: 'حفظ نسخ قليلة يحمي من العطل؛ وحفظها طويلاً يحمي من الاختراق.',
      note: 'مثال مركَّب · التواريخ والآجال والإضافة مخترَعة لبيان أهمية مدة الحفظ.',
    },
    portes: {
      title: 'ما يتركه التنظيف السريع وراءه: خمسة أبواب من ستة',
      alt: 'ستة مواضع في موقع مخترَق. الصفحة الرئيسية المستبدَلة تُحذف: وهذا ما نراه. وتبقى خمسة أخرى: ملف تحكّم عن بعد مخبَّأ في مجلد المرفوعات، حساب مسؤول لا يعرفه أحد، بضعة أسطر مضافة في ملف من القالب، روابط وصفحات محقونة في قاعدة البيانات، ومهمة مجدوَلة تعيد تنصيب كل شيء كل ليلة.',
      header: 'مثال مركَّب · ما يبقى في موقع بعد «تنظيف» الصفحة الظاهرة وحدها',
      places: [
        { name: 'الصفحة الرئيسية', l1: 'صفحة مستبدَلة، أو تحويل', l2: 'نحو موقع آخر', state: 'حُذفت: وهذا كل ما نراه' },
        { name: 'مجلد المرفوعات', l1: 'ملف تحكّم عن بعد،', l2: 'مخبَّأ بين الصور', state: 'ما زال هناك' },
        { name: 'الحسابات', l1: 'مسؤول لا', l2: 'يعرفه أحد', state: 'ما زال هناك' },
        { name: 'القالب والإضافات', l1: 'بضعة أسطر مضافة', l2: 'في ملف سليم', state: 'ما زال هناك' },
        { name: 'قاعدة البيانات', l1: 'روابط وصفحات', l2: 'محقونة في المحتوى', state: 'ما زال هناك' },
        { name: 'المهام المجدوَلة', l1: 'مهمة تعيد تنصيب', l2: 'كل شيء كل ليلة', state: 'ما زال هناك' },
      ],
      band: 'باب واحد أُغلق، وخمسة ما زالت مفتوحة: يُستعاد الموقع دون أن يعود أحد.',
      tiles: [
        { big: '1 من 6', l1: 'ما يزيله التنظيف السريع', l2: 'الصفحة الظاهرة، ولا شيء غيرها' },
        { big: '5 أبواب تبقى', l1: 'ملف مخبَّأ، حساب، شيفرة، قاعدة، ومهمة', l2: 'كل واحد يكفي لاستعادة الكل', hot: true },
        { big: 'إعادة البناء', l1: 'برمجيات من المصدر، ومحتوى مراجَع', l2: 'أو استرجاع نسخة سابقة للدخول' },
      ],
      line1: 'حذف الصفحة التي وضعها المتسلّل طلاء لباب مكسور: المدخل ما زال هناك.',
      line2: 'الموقع المخترَق لا يُنظَّف ملفاً بملف: يُعاد بناؤه نظيفاً، ولا يعود إليه إلا محتوى مراجَع.',
      note: 'مثال مركَّب · مواضع نموذجية؛ والتشخيص الحقيقي ينطلق من الملفات المعدَّلة وسجلات الخادم.',
    },
  },
};
