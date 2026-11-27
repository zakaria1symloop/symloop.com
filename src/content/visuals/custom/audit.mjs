// Bespoke animated figures for the 2027 "audit de sécurité informatique" post.
//  surface():   what a stranger sees of the company from the internet. A scan
//               dot travels along an "internet" strip; under it six doors
//               (remote desktop, mail, website, business app, domain name,
//               guest Wi-Fi) light up one after another as it passes, each
//               with its finding and a severity on a 0 to 10 scale; a band
//               sums up; three tiles.
//  priorites(): the fourteen findings of the audit placed by effort and by
//               severity. Dots appear one by one, the five that are both
//               serious and quick are numbered and fall in a highlighted zone,
//               listed on the right; three tiles.
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

// severity of the six doors seen from outside, on a 0 to 10 scale
const DOORS = [9.8, 8.1, 7.5, 6.5, 5.3, 4.3];

export function surface(t, rtl) {
  const c = ctx(rtl); const P = 'sa'; const css = []; const H = 594;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  // the internet strip and the scan dot
  const sy = 150;
  s += `<g style="animation:${show(css, P, 'st', 3)}">` + rect(c, 80, sy, 1040, 26, { stroke: C.line2, fill: C.fill }) + text(c, 96, sy + 17, t.strip, { size: 9.5, font: 'mono', fill: C.fg55 }) + '</g>';
  const cw = 160, gap = 16; const xs = DOORS.map((_, i) => 80 + i * (cw + gap) + cw / 2);
  const T0 = 6, STEP = 8; const end = xs[5];
  css.push(`@keyframes ${P}-scan{0%,${T0}%{transform:translateX(${(c.X(xs[0]) - c.X(end)).toFixed(1)}px)}${xs.map((x, i) => `${(T0 + (i + 1) * STEP - 2).toFixed(1)}%{transform:translateX(${(c.X(x) - c.X(end)).toFixed(1)}px)}`).join('')}100%{transform:translateX(0)}}`);
  s += `<circle cx="${c.X(end)}" cy="${sy + 13}" r="6" fill="${C.accent}" style="animation:${P}-scan ${LOOP}s linear infinite"/>`;
  t.doors.forEach((d, i) => {
    const x = 80 + i * (cw + gap); const v = DOORS[i]; const hot = v >= 7; const at = T0 + (i + 1) * STEP - 2;
    s += `<g style="animation:${show(css, P, `d${i}`, at)}">` + line(c, xs[i], sy + 26, xs[i], sy + 50, { stroke: hot ? C.accent : C.fg35 })
      + rect(c, x, sy + 50, cw, 136, { stroke: hot ? C.accent : C.line2, fill: hot ? TINT : DARK })
      + text(c, x + 12, sy + 74, d.name, { size: 10.5, fill: hot ? C.accent : C.fg, weight: 500 })
      + text(c, x + 12, sy + 96, d.l1, { size: 9, fill: C.fg70 }) + text(c, x + 12, sy + 110, d.l2, { size: 9, fill: C.fg70 })
      + line(c, x + 12, sy + 132, x + cw - 12, sy + 132, { stroke: C.line2 })
      + text(c, x + 12, sy + 158, d.score, { size: 16, font: 'mono', fill: hot ? C.accent : C.fg, weight: 500 }) + text(c, x + cw - 12, sy + 158, d.level, { size: 9, font: 'mono', fill: hot ? C.accent : C.fg55, anchor: 'end' })
      + text(c, x + 12, sy + 176, t.scale, { size: 8, font: 'mono', fill: C.fg35 }) + '</g>';
  });
  const by = 360;
  s += `<g style="animation:${show(css, P, 'bd', 58)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: DARK }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 420;
  s += tiles(c, css, P, ky, t.tiles, 64);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// [effort position on the x axis, severity] for the fourteen findings; the
// first five are the ones that are both serious and quick
const FINDINGS = [[190, 9.8], [330, 8.1], [262, 7.5], [208, 7.2], [346, 7.0], [505, 6.8], [274, 6.5], [425, 6.1], [250, 5.3], [334, 4.3], [522, 5.8], [436, 4.0], [655, 5.0], [640, 3.5]];

export function priorites(t, rtl) {
  const c = ctx(rtl); const P = 'sp'; const css = []; const H = 606;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const x0 = 130, x1 = 720, yb = 400; const Y = (v) => yb - v * 24;
  s += `<g style="animation:${show(css, P, 'ax', 3)}">` + line(c, x0, yb, x1, yb, { stroke: C.line2 }) + line(c, x0, Y(10), x0, yb, { stroke: C.line2 })
    + [[190, 0], [330, 1], [510, 2], [650, 3]].map(([x, i]) => text(c, x, yb + 16, t.efforts[i], { size: 8.5, font: 'mono', fill: C.fg55, anchor: 'middle' })).join('')
    + text(c, x1, yb + 32, t.xlabel, { size: 8.5, font: 'mono', fill: C.fg35, anchor: 'end' })
    + [[4, 0], [7, 1], [9, 2]].map(([v, i]) => line(c, x0, Y(v), x1, Y(v), { stroke: C.line2, dash: '3 5' }) + text(c, x0 - 8, Y(v) + 3, String(v), { size: 8.5, font: 'mono', fill: C.fg55, anchor: 'end' }) + text(c, x1, Y(v) - 5, t.levels[i], { size: 8.5, font: 'mono', fill: i ? C.accent : C.fg55, anchor: 'end' })).join('')
    + text(c, x0 - 8, Y(10) + 3, '10', { size: 8.5, font: 'mono', fill: C.fg55, anchor: 'end' }) + text(c, x0 - 8, yb + 3, '0', { size: 8.5, font: 'mono', fill: C.fg55, anchor: 'end' }) + text(c, x0 - 8, Y(10) - 12, t.ylabel, { size: 8.5, font: 'mono', fill: C.fg35, anchor: 'end' }) + '</g>';
  // the zone of what is both serious and quick
  s += `<g style="animation:${show(css, P, 'zn', 36)}">` + rect(c, x0 + 14, Y(10) - 2, 232, Y(7) - Y(10) + 2, { stroke: C.accent, fill: TINT, dash: '5 4' }) + text(c, x0 + 14, Y(10) - 9, t.zone, { size: 9, font: 'mono', fill: C.accent }) + '</g>';
  FINDINGS.forEach(([x, v], i) => {
    const top = i < 5; const at = top ? 40 + i * 3 : 6 + (i - 5) * 3;
    s += `<g style="animation:${show(css, P, `f${i}`, at)}">` + (top ? circle(c, x, Y(v), 9, { fill: C.accent }) + text(c, x, Y(v) + 3.5, String(i + 1), { size: 9, font: 'mono', fill: '#000', weight: 500, anchor: 'middle' }) : circle(c, x, Y(v), 5, { fill: C.fg55 })) + '</g>';
  });
  // the five to do first, listed
  const lx = 770, lw = 350;
  s += `<g style="animation:${show(css, P, 'lt', 38)}">` + rect(c, lx, 146, lw, 256, { stroke: C.line2, fill: DARK }) + text(c, lx + 14, 170, t.listTitle, { size: 11, fill: C.accent, weight: 500 }) + line(c, lx + 14, 180, lx + lw - 14, 180, { stroke: C.line2 }) + '</g>';
  t.top.forEach((r, i) => {
    const y = 204 + i * 34;
    s += `<g style="animation:${show(css, P, `r${i}`, 40.6 + i * 3)}">` + circle(c, lx + 24, y - 4, 8, { fill: C.accent }) + text(c, lx + 24, y - 0.5, String(i + 1), { size: 8.5, font: 'mono', fill: '#000', weight: 500, anchor: 'middle' })
      + text(c, lx + 42, y - 2, r.name, { size: 9.5, fill: C.fg }) + text(c, lx + 42, y + 11, r.fix, { size: 8.5, font: 'mono', fill: C.fg55 }) + text(c, lx + lw - 14, y - 2, r.score, { size: 10, font: 'mono', fill: C.accent, weight: 500, anchor: 'end' }) + '</g>';
  });
  s += `<g style="animation:${show(css, P, 'ls', 58)}">` + text(c, lx + 14, 388, t.listNote, { size: 9, fill: C.fg70 }) + '</g>';
  const ky = 446;
  s += tiles(c, css, P, ky, t.tiles, 62);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    surface: {
      title: 'Ce qu’un inconnu voit de vous depuis internet : six portes, dont une critique',
      alt: 'Six portes d’une entreprise visibles depuis internet, avec leur gravité sur une échelle de 0 à 10. Bureau à distance : port ouvert sur la box, 9,8, critique. Messagerie : douze boîtes sans double vérification, 8,1, élevé. Site web : extension non mise à jour depuis quatorze mois, 7,5, élevé. Application métier : page d’administration accessible à tous, 6,5, moyen. Nom de domaine : aucune protection contre l’usurpation d’adresse, 5,3, moyen. Wi-Fi invité : même réseau que les postes, 4,3, moyen.',
      header: 'Exemple construit · entreprise de quarante postes · premier regard de l’extérieur, avec un accord écrit, sans mot de passe',
      strip: 'internet · ce que voit quelqu’un qui ne vous connaît pas',
      scale: 'gravité de 0 à 10',
      doors: [
        { name: 'Bureau à distance', l1: 'port ouvert sur la box,', l2: 'joignable par tous', score: '9,8', level: 'critique' },
        { name: 'Messagerie', l1: 'douze boîtes sans', l2: 'double vérification', score: '8,1', level: 'élevé' },
        { name: 'Site web', l1: 'extension non mise à', l2: 'jour depuis 14 mois', score: '7,5', level: 'élevé' },
        { name: 'Application métier', l1: 'page d’administration', l2: 'accessible à tous', score: '6,5', level: 'moyen' },
        { name: 'Nom de domaine', l1: 'rien contre l’usurpation', l2: 'de votre adresse', score: '5,3', level: 'moyen' },
        { name: 'Wi-Fi invité', l1: 'sur le même réseau', l2: 'que les postes', score: '4,3', level: 'moyen' },
      ],
      band: 'Vu de l’extérieur, sans rien casser et sans aucun mot de passe : six portes, dont une critique et deux élevées.',
      tiles: [
        { big: 'de 0 à 10', l1: 'l’échelle de gravité la plus répandue', l2: 'élevé à partir de 7, critique à partir de 9' },
        { big: '1 critique, 2 élevés', l1: 'sur six portes visibles d’internet', l2: 'ce que voit aussi n’importe quel inconnu', hot: true },
        { big: '1 accord écrit', l1: 'avant le premier test, toujours', l2: 'périmètre, dates, personnes à prévenir' },
      ],
      line1: 'Un audit commence par la question la plus simple : que voit de vous quelqu’un qui ne vous connaît pas ?',
      line2: 'Tout ce qui est visible sera essayé un jour ; l’auditeur le fait avant, avec votre accord écrit.',
      note: 'Exemple construit · constats et notes inventés ; bandes de gravité : celles de l’échelle CVSS, version 3.',
    },
    priorites: {
      title: 'Quatorze constats, cinq à corriger cette semaine : la gravité d’abord, l’effort ensuite',
      alt: 'Les quatorze constats d’un audit placés selon l’effort de correction, d’une heure à un mois, et la gravité, de 0 à 10. Cinq sont à la fois graves et rapides : le port de bureau à distance ouvert, 9,8, une heure ; la messagerie sans double vérification, 8,1, un jour ; le site non mis à jour, 7,5, une demi-journée ; les comptes d’anciens salariés encore actifs, 7,2, une heure ; la sauvegarde jamais restaurée, 7,0, un jour. Les neuf autres sont moyens ou faibles, ou demandent d’une semaine à un mois.',
      header: 'Exemple construit · les quatorze constats du même audit · gravité sur 10, effort estimé avec l’équipe',
      efforts: ['une heure', 'un jour', 'une semaine', 'un mois'], xlabel: 'effort de correction', ylabel: 'gravité',
      levels: ['moyen', 'élevé', 'critique'],
      zone: 'grave et rapide : cette semaine',
      listTitle: 'Les cinq premiers, dans l’ordre',
      top: [
        { name: 'Port de bureau à distance ouvert', fix: 'le fermer · une heure', score: '9,8' },
        { name: 'Messagerie sans double vérification', fix: 'l’activer pour tous · un jour', score: '8,1' },
        { name: 'Site non mis à jour', fix: 'mise à jour et sauvegarde · une demi-journée', score: '7,5' },
        { name: 'Comptes d’anciens salariés actifs', fix: 'les fermer · une heure', score: '7,2' },
        { name: 'Sauvegarde jamais restaurée', fix: 'essai de restauration · un jour', score: '7,0' },
      ],
      listNote: 'Tout le critique et tout l’élevé, en moins d’une semaine.',
      tiles: [
        { big: '14 constats', l1: '1 critique, 4 élevés, 8 moyens, 1 faible', l2: 'classés sur la même échelle de 0 à 10' },
        { big: '5 en une semaine', l1: 'tout le critique et tout l’élevé', l2: 'aucun ne demande plus d’une journée', hot: true },
        { big: '8 sur 14', l1: 'se corrigent en une journée ou moins', l2: 'le rapport doit le dire, constat par constat' },
      ],
      line1: 'Un rapport d’audit ne vaut pas par son nombre de pages : il vaut par l’ordre dans lequel il vous dit de corriger.',
      line2: 'La gravité d’abord, l’effort ensuite : ce qui est grave et rapide passe avant tout le reste.',
      note: 'Exemple construit · constats, notes et efforts inventés pour montrer le classement.',
    },
  },
  en: {
    surface: {
      title: 'What a stranger sees of you from the internet: six doors, one of them critical',
      alt: 'Six doors of a company visible from the internet, with their severity on a 0 to 10 scale. Remote desktop: port opened on the router, 9.8, critical. Mail: twelve mailboxes without two-step verification, 8.1, high. Website: plugin not updated for fourteen months, 7.5, high. Business application: administration page open to everyone, 6.5, medium. Domain name: no protection against address spoofing, 5.3, medium. Guest Wi-Fi: on the same network as the workstations, 4.3, medium.',
      header: 'Constructed example · a company with forty workstations · first look from outside, with written agreement, without any password',
      strip: 'internet · what someone who does not know you can see',
      scale: 'severity from 0 to 10',
      doors: [
        { name: 'Remote desktop', l1: 'port open on the router,', l2: 'reachable by anyone', score: '9.8', level: 'critical' },
        { name: 'Mail', l1: 'twelve mailboxes without', l2: 'two-step verification', score: '8.1', level: 'high' },
        { name: 'Website', l1: 'plugin not updated', l2: 'for 14 months', score: '7.5', level: 'high' },
        { name: 'Business application', l1: 'administration page', l2: 'open to everyone', score: '6.5', level: 'medium' },
        { name: 'Domain name', l1: 'nothing against spoofing', l2: 'of your address', score: '5.3', level: 'medium' },
        { name: 'Guest Wi-Fi', l1: 'on the same network', l2: 'as the workstations', score: '4.3', level: 'medium' },
      ],
      band: 'Seen from outside, breaking nothing and with no password at all: six doors, one of them critical and two high.',
      tiles: [
        { big: 'from 0 to 10', l1: 'the most widely used severity scale', l2: 'high from 7, critical from 9' },
        { big: '1 critical, 2 high', l1: 'out of six doors visible from the internet', l2: 'which any stranger can see too', hot: true },
        { big: '1 written agreement', l1: 'before the first test, always', l2: 'scope, dates, people to warn' },
      ],
      line1: 'An audit starts with the simplest question: what does someone who does not know you see of you?',
      line2: 'Everything visible will be tried one day; the auditor does it first, with your written agreement.',
      note: 'Constructed example · invented findings and scores; severity bands: those of the CVSS scale, version 3.',
    },
    priorites: {
      title: 'Fourteen findings, five to fix this week: severity first, effort second',
      alt: 'The fourteen findings of an audit placed by correction effort, from one hour to one month, and by severity, from 0 to 10. Five are both serious and quick: the open remote desktop port, 9.8, one hour; mail without two-step verification, 8.1, one day; the website not updated, 7.5, half a day; former employees’ accounts still active, 7.2, one hour; the backup never restored, 7.0, one day. The other nine are medium or low, or take from a week to a month.',
      header: 'Constructed example · the fourteen findings of the same audit · severity out of 10, effort estimated with the team',
      efforts: ['one hour', 'one day', 'one week', 'one month'], xlabel: 'correction effort', ylabel: 'severity',
      levels: ['medium', 'high', 'critical'],
      zone: 'serious and quick: this week',
      listTitle: 'The first five, in order',
      top: [
        { name: 'Remote desktop port open', fix: 'close it · one hour', score: '9.8' },
        { name: 'Mail without two-step verification', fix: 'turn it on for all · one day', score: '8.1' },
        { name: 'Website not updated', fix: 'update and back up · half a day', score: '7.5' },
        { name: 'Former employees’ accounts active', fix: 'close them · one hour', score: '7.2' },
        { name: 'Backup never restored', fix: 'restore trial · one day', score: '7.0' },
      ],
      listNote: 'Everything critical and everything high, in under a week.',
      tiles: [
        { big: '14 findings', l1: '1 critical, 4 high, 8 medium, 1 low', l2: 'ranked on the same 0 to 10 scale' },
        { big: '5 in one week', l1: 'everything critical and everything high', l2: 'none takes more than a day', hot: true },
        { big: '8 out of 14', l1: 'are fixed in a day or less', l2: 'the report must say so, finding by finding' },
      ],
      line1: 'An audit report is not worth its number of pages: it is worth the order in which it tells you to fix things.',
      line2: 'Severity first, effort second: what is serious and quick comes before everything else.',
      note: 'Constructed example · findings, scores and efforts invented to show the ranking.',
    },
  },
  ar: {
    surface: {
      title: 'ما يراه مجهول منكم من الإنترنت: ستة أبواب، أحدها حرج',
      alt: 'ستة أبواب لمؤسسة تُرى من الإنترنت، مع خطورتها على سلّم من 0 إلى 10. سطح المكتب البعيد: منفذ مفتوح على الموجِّه، 9,8، حرج. البريد: اثنتا عشرة علبة دون تحقق بخطوتين، 8,1، مرتفع. الموقع: إضافة لم تُحدَّث منذ أربعة عشر شهراً، 7,5، مرتفع. التطبيق المهني: صفحة الإدارة مفتوحة للجميع، 6,5، متوسط. اسم النطاق: لا حماية من انتحال العنوان، 5,3، متوسط. واي فاي الضيوف: في الشبكة نفسها مع الحواسيب، 4,3، متوسط.',
      header: 'مثال مركَّب · مؤسسة من أربعين حاسوباً · نظرة أولى من الخارج، بموافقة مكتوبة، ودون أي كلمة مرور',
      strip: 'الإنترنت · ما يراه من لا يعرفكم',
      scale: 'الخطورة من 0 إلى 10',
      doors: [
        { name: 'سطح المكتب البعيد', l1: 'منفذ مفتوح على الموجِّه،', l2: 'في متناول الجميع', score: '9,8', level: 'حرج' },
        { name: 'البريد', l1: 'اثنتا عشرة علبة دون', l2: 'تحقق بخطوتين', score: '8,1', level: 'مرتفع' },
        { name: 'الموقع', l1: 'إضافة لم تُحدَّث', l2: 'منذ 14 شهراً', score: '7,5', level: 'مرتفع' },
        { name: 'التطبيق المهني', l1: 'صفحة الإدارة', l2: 'مفتوحة للجميع', score: '6,5', level: 'متوسط' },
        { name: 'اسم النطاق', l1: 'لا شيء ضد انتحال', l2: 'عنوانكم', score: '5,3', level: 'متوسط' },
        { name: 'واي فاي الضيوف', l1: 'في الشبكة نفسها', l2: 'مع الحواسيب', score: '4,3', level: 'متوسط' },
      ],
      band: 'من الخارج، دون كسر شيء ودون أي كلمة مرور: ستة أبواب، أحدها حرج واثنان مرتفعان.',
      tiles: [
        { big: 'من 0 إلى 10', l1: 'سلّم الخطورة الأكثر انتشاراً', l2: 'مرتفع ابتداءً من 7، وحرج ابتداءً من 9' },
        { big: 'حرج واحد، ومرتفعان', l1: 'من ستة أبواب تُرى من الإنترنت', l2: 'وهو ما يراه كذلك أي مجهول', hot: true },
        { big: 'موافقة مكتوبة', l1: 'قبل أول اختبار، دائماً', l2: 'المحيط، التواريخ، ومن يجب إعلامه' },
      ],
      line1: 'التدقيق يبدأ بأبسط سؤال: ماذا يرى منكم من لا يعرفكم؟',
      line2: 'كل ما يُرى سيُجرَّب يوماً؛ والمدقِّق يفعل ذلك قبل غيره، بموافقتكم المكتوبة.',
      note: `مثال مركَّب · الملاحظات والعلامات مخترَعة؛ ونطاقات الخطورة: نطاقات سلّم ${I('CVSS')}، الإصدار 3.`,
    },
    priorites: {
      title: 'أربع عشرة ملاحظة، خمس تُصحَّح هذا الأسبوع: الخطورة أولاً، ثم الجهد',
      alt: 'الملاحظات الأربع عشرة لتدقيق، موضوعة حسب جهد التصحيح، من ساعة إلى شهر، وحسب الخطورة، من 0 إلى 10. خمس منها خطيرة وسريعة معاً: منفذ سطح المكتب البعيد المفتوح، 9,8، ساعة؛ البريد دون تحقق بخطوتين، 8,1، يوم؛ الموقع غير المحدَّث، 7,5، نصف يوم؛ حسابات أجراء سابقين ما زالت نشطة، 7,2، ساعة؛ النسخة الاحتياطية التي لم تُسترجَع قط، 7,0، يوم. والتسع الأخرى متوسطة أو ضعيفة، أو تتطلب من أسبوع إلى شهر.',
      header: 'مثال مركَّب · الملاحظات الأربع عشرة للتدقيق نفسه · الخطورة من 10، والجهد مقدَّر مع الفريق',
      efforts: ['ساعة', 'يوم', 'أسبوع', 'شهر'], xlabel: 'جهد التصحيح', ylabel: 'الخطورة',
      levels: ['متوسط', 'مرتفع', 'حرج'],
      zone: 'خطير وسريع: هذا الأسبوع',
      listTitle: 'الخمس الأولى، بالترتيب',
      top: [
        { name: 'منفذ سطح المكتب البعيد مفتوح', fix: 'إغلاقه · ساعة', score: '9,8' },
        { name: 'البريد دون تحقق بخطوتين', fix: 'تفعيله للجميع · يوم', score: '8,1' },
        { name: 'الموقع غير محدَّث', fix: 'تحديث ونسخ احتياطي · نصف يوم', score: '7,5' },
        { name: 'حسابات أجراء سابقين نشطة', fix: 'إغلاقها · ساعة', score: '7,2' },
        { name: 'نسخة احتياطية لم تُسترجَع قط', fix: 'تجربة استرجاع · يوم', score: '7,0' },
      ],
      listNote: 'كل الحرج وكل المرتفع، في أقل من أسبوع.',
      tiles: [
        { big: '14 ملاحظة', l1: 'حرجة واحدة، 4 مرتفعة، 8 متوسطة، وواحدة ضعيفة', l2: 'مرتَّبة على السلّم نفسه من 0 إلى 10' },
        { big: '5 في أسبوع', l1: 'كل الحرج وكل المرتفع', l2: 'ولا واحدة تتطلب أكثر من يوم', hot: true },
        { big: '8 من 14', l1: 'تُصحَّح في يوم أو أقل', l2: 'والتقرير يجب أن يقول ذلك، ملاحظة بملاحظة' },
      ],
      line1: 'تقرير التدقيق لا يُقدَّر بعدد صفحاته: يُقدَّر بالترتيب الذي يقول لكم أن تصحّحوا به.',
      line2: 'الخطورة أولاً، ثم الجهد: ما هو خطير وسريع يسبق كل الباقي.',
      note: 'مثال مركَّب · الملاحظات والعلامات والجهود مخترَعة لبيان الترتيب.',
    },
  },
};
