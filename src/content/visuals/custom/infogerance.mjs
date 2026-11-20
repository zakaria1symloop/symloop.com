// Bespoke animated figures for the 2027 "infogérance et maintenance informatique
// d'entreprise en Algérie" post.
//  mois():    the same month on the same machines, run two ways. Two thirty-day
//             lanes: "à la panne" with outage bars that grow (hours stopped) and
//             "infogérance" with small preventive ticks and two short outages;
//             under them the two lists; three tiles.
//  rapport(): the one-page monthly report the manager receives: six cards with a
//             big figure and a ratio bar that grows, and the decisions of the
//             month; three tiles.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function growY(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleY(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleY(1)}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function growX(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
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
const motionOff = (P) => `@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"],svg rect[style*="${P}-"]{animation:none !important}}`;

export function mois(t, rtl) {
  const c = ctx(rtl); const P = 'im'; const css = []; const H = 690;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const ax0 = 250, ax1 = 1110; const X = (d) => ax0 + ((d - 1) / 29) * (ax1 - ax0); const hpx = 9;
  const lane = (k, ay, L, at0) => {
    let g = `<g style="animation:${show(css, P, `${k}l`, at0)}">` + text(c, 80, ay - 40, L.name, { size: 12, fill: L.hot ? C.accent : C.fg, weight: 500 }) + text(c, 80, ay - 24, L.sub, { size: 8.5, font: 'mono', fill: C.fg55 }) + text(c, 80, ay - 4, L.total, { size: 11, font: 'mono', fill: L.hot ? C.accent : C.fg, weight: 500 })
      + line(c, ax0, ay, ax1, ay, { stroke: C.line2 }) + [1, 5, 10, 15, 20, 25, 30].map((d) => line(c, X(d), ay, X(d), ay + 5, { stroke: C.line2 }) + text(c, X(d), ay + 17, String(d), { size: 8, font: 'mono', fill: C.fg35, anchor: 'middle' })).join('') + '</g>';
    L.events.forEach((e, i) => {
      const at = at0 + 1 + (e.d / 30) * 10;
      if (e.h) {
        const h = Math.max(5, e.h * hpx);
        g += `<rect x="${c.RX(X(e.d) - 6, 12)}" y="${ay - h}" width="12" height="${h}" fill="${C.accent}" style="transform-box:fill-box;transform-origin:bottom;animation:${growY(css, P, `${k}b${i}`, at, 1.6)}"/>`;
        g += `<g style="animation:${show(css, P, `${k}v${i}`, at + 1.6)}">` + text(c, X(e.d), ay - h - 6, I(e.label), { size: 9, font: 'mono', fill: C.accent, anchor: 'middle', weight: 500 }) + '</g>';
      } else {
        g += `<g style="animation:${show(css, P, `${k}t${i}`, at)}">` + (e.warn
          ? `<circle cx="${c.X(X(e.d))}" cy="${ay - 8}" r="5" fill="none" stroke="${C.accent}" stroke-width="1.6"/>`
          : `<path d="M ${c.X(X(e.d))} ${ay - 13} L ${c.X(X(e.d)) + 5} ${ay - 8} L ${c.X(X(e.d))} ${ay - 3} L ${c.X(X(e.d)) - 5} ${ay - 8} Z" fill="${C.fg}"/>`) + '</g>';
      }
    });
    return g;
  };
  s += lane('a', 236, t.a, 4) + lane('b', 330, t.b, 18);
  // the two lists
  const ly = 362; const lh = 54 + 6 * 18 + 6;
  s += box(c, css, P, 'la', 16, 80, ly, 510, lh, t.listA, true) + box(c, css, P, 'lb', 30, 610, ly, 510, lh, t.listB, false);
  const ky = ly + lh + 16;
  s += tiles(c, css, P, ky, t.tiles, 40);
  s += text(c, 80, ky + 86, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export function rapport(t, rtl) {
  const c = ctx(rtl); const P = 'ir'; const css = []; const H = 634;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const cw = 340, ch = 124, gx = 10, gy = 10, y0 = 150;
  t.cards.forEach((k, i) => {
    const x = 80 + (i % 3) * (cw + gx); const y = y0 + Math.floor(i / 3) * (ch + gy); const at = 4 + i * 4;
    s += `<g style="animation:${show(css, P, `c${i}`, at)}">` + rect(c, x, y, cw, ch, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? TINT : C.fill })
      + text(c, x + 12, y + 22, k.title, { size: 9, font: 'mono', fill: C.fg55, letter: 1, upper: true }) + text(c, x + 12, y + 52, k.big, { size: 20, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 })
      + text(c, x + 12, y + 96, k.s1, { size: 9, fill: C.fg70 }) + text(c, x + 12, y + 111, k.s2, { size: 8, font: 'mono', fill: C.fg55 }) + '</g>';
    if (k.ratio != null) {
      const bw = cw - 24; const w = Math.max(4, bw * k.ratio);
      s += `<g style="animation:${show(css, P, `g${i}`, at)}">` + rect(c, x + 12, y + 66, bw, 8, { stroke: 'none', fill: 'rgba(255,255,255,0.10)' }) + '</g>';
      s += `<rect x="${c.RX(x + 12, w)}" y="${y + 66}" width="${w.toFixed(1)}" height="8" fill="${k.hot ? C.accent : C.fg}" style="transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'};animation:${growX(css, P, `b${i}`, at + 0.6, 2.4)}"/>`;
    }
  });
  const dy = y0 + 2 * ch + gy + 12;
  s += `<g style="animation:${show(css, P, 'dec', 32)}">` + rect(c, 80, dy, 1040, 50, { stroke: C.accent, fill: TINT }) + text(c, 92, dy + 20, t.decisions.title, { size: 10.5, fill: C.accent, weight: 500 }) + text(c, 92, dy + 38, t.decisions.text, { size: 9.5, fill: C.fg }) + '</g>';
  const ky = dy + 50 + 14;
  s += tiles(c, css, P, ky, t.tiles, 38);
  s += text(c, 80, ky + 86, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// the month, shared by the three languages: d = day, h = hours stopped
const EV_A = (L) => [{ d: 3, h: 6, label: L(6) }, { d: 8, h: 4, label: L(4) }, { d: 14, h: 3, label: L(3) }, { d: 19, warn: true }, { d: 23, h: 2, label: L(2) }, { d: 27, h: 4, label: L(4) }];
const EV_B = (L) => [{ d: 1 }, { d: 3 }, { d: 6 }, { d: 8 }, { d: 12 }, { d: 14, h: 0.5, label: L('0,5') }, { d: 16 }, { d: 19 }, { d: 23 }, { d: 27, h: 1.5, label: L('1,5') }, { d: 30 }];

export const STRINGS = {
  fr: {
    mois: {
      title: 'Le même mois, deux façons : dix-neuf heures d’arrêt, ou deux',
      alt: 'Le même mois sur les mêmes machines. À la panne : cinq arrêts pour dix-neuf heures (disque du serveur plein le 3, six heures ; poste infecté le 8, quatre heures ; Wi-Fi du dépôt le 14, trois heures ; mise à jour en pleine journée le 23, deux heures ; imprimante des factures le 27, quatre heures) et une sauvegarde en échec depuis trois semaines découverte le 19. En infogérance : neuf gestes préventifs faits le soir et deux incidents pour deux heures.',
      header: 'Exemple construit · entreprise de 30 postes · le même mois, les mêmes machines · chaque barre est un arrêt, sa hauteur le nombre d’heures',
      a: { name: 'À la panne', sub: 'on appelle quand ça casse', total: '5 arrêts · 19 h', hot: true, events: EV_A((h) => `${h} h`) },
      b: { name: 'En infogérance', sub: 'surveillé, entretenu le soir', total: '2 arrêts · 2 h', events: EV_B((h) => `${h} h`) },
      listA: { title: 'À la panne · ce qui s’est passé', sub: 'chaque ligne commence par un appel et une attente', rows: [{ l: 'Le 3 · disque du serveur plein, facturation arrêtée', v: '6 h' }, { l: 'Le 8 · poste de la comptabilité infecté', v: '4 h' }, { l: 'Le 14 · Wi-Fi du dépôt en panne', v: '3 h' }, { l: 'Le 19 · sauvegarde en échec depuis 3 semaines', v: 'découverte', hot: true }, { l: 'Le 23 · mise à jour en pleine journée', v: '2 h' }, { l: 'Le 27 · imprimante des factures', v: '4 h' }] },
      listB: { title: 'En infogérance · le même mois', sub: 'les losanges sont des gestes faits la veille ou le soir', rows: [{ l: 'Le 3 · alerte « disque à 85 % », ménage fait le soir', v: '0 h' }, { l: 'Les 6 et 23 · mises à jour posées après la fermeture', v: '0 h' }, { l: 'Le 8 · pièce jointe arrêtée, poste à jour', v: '0 h' }, { l: 'Le 14 · borne Wi-Fi redémarrée à distance', v: '0,5 h' }, { l: 'Le 19 · échec de sauvegarde vu le matin même', v: 'corrigé' }, { l: 'Le 27 · imprimante, bascule sur celle de l’étage', v: '1,5 h' }] },
      tiles: [
        { big: I('19 h → 2 h'), l1: 'd’arrêt dans le mois, sur les mêmes machines', l2: 'la différence se fait la veille, pas le jour de la panne', hot: true },
        { big: '9 gestes préventifs', l1: 'faits le soir, sans que personne ne s’en aperçoive', l2: 'alertes traitées, mises à jour, restauration essayée' },
        { big: '1 sauvegarde en échec', l1: 'vue le matin même au lieu de trois semaines après', l2: 'ce qu’on ne voit pas est ce qui coûte le plus' },
      ],
      rule: 'Les machines sont les mêmes. Ce qui change, c’est que quelqu’un les regarde tous les jours,',
      rule2: 'et qu’il est payé pour qu’il ne se passe rien, pas pour venir quand il se passe quelque chose.',
      note: 'Exemple construit · incidents et durées sont ceux de l’exemple ; les vôtres se mesurent en les notant pendant un mois.',
    },
    rapport: {
      title: 'Le rapport du mois, sur une page',
      alt: 'Rapport mensuel d’infogérance en six cartes : 28 postes sur 30 à jour ; sauvegardes vérifiées 30 jours sur 30 et restauration essayée en 3 h 40 ; 34 demandes traitées dont 32 dans les délais ; 31 comptes actifs, tous avec double vérification ; 9 alertes sur 11 traitées avant qu’un utilisateur appelle ; 4 postes de plus de cinq ans et 2 échéances à 90 jours. Deux décisions pour le gérant.',
      header: 'Exemple construit · entreprise de 30 postes · la page que le gérant reçoit le premier dimanche du mois',
      cards: [
        { title: 'Postes à jour', big: I('28 / 30'), ratio: 28 / 30, s1: 'deux postes attendent un redémarrage', s2: 'prévu jeudi soir, après la fermeture' },
        { title: 'Sauvegardes vérifiées', big: I('30 / 30 jours'), ratio: 1, s1: 'restauration du serveur essayée le 12', s2: 'durée mesurée : 3 h 40' },
        { title: 'Demandes traitées', big: '34', ratio: 32 / 34, s1: '32 dans les délais écrits, 2 expliquées', s2: '2 urgentes · 9 gênantes · 23 simples' },
        { title: 'Comptes', big: '31 actifs', ratio: 1, s1: 'tous avec double vérification', s2: '1 compte fermé après un départ' },
        { title: 'Alertes traitées avant panne', big: I('9 / 11'), ratio: 9 / 11, s1: 'avant qu’un utilisateur n’appelle', s2: 'disque, sauvegarde, lien, onduleur' },
        { title: 'À prévoir', big: '4 postes · 2 échéances', hot: true, s1: 'quatre postes ont plus de cinq ans', s2: 'antivirus et nom de domaine sous 90 jours' },
      ],
      decisions: { title: 'Ce que le gérant décide ce mois-ci', text: 'Remplacer deux postes de 2019 avant la fin de l’année · renouveler le nom de domaine pour trois ans, au nom de l’entreprise' },
      tiles: [
        { big: '1 page par mois', l1: 'ce qui a été fait, ce qui a été évité, ce qui vient', l2: 'lue en dix minutes avec le gérant' },
        { big: '32 demandes sur 34', l1: 'traitées dans les délais écrits au contrat', l2: 'les deux autres sont expliquées, pas cachées' },
        { big: '6 postes par an', l1: 'trente postes gardés cinq ans, prévus au budget', l2: 'au lieu de douze d’un coup le jour où ils lâchent', hot: true },
      ],
      rule: 'Un prestataire qui ne montre pas ce qu’il a évité ne peut pas montrer ce qu’il fait :',
      rule2: 'le rapport tient sur une page, se lit en dix minutes, et se termine par une ou deux décisions.',
      note: 'Exemple construit · chiffres et dates sont ceux de l’exemple.',
    },
  },
  en: {
    mois: {
      title: 'The same month, two ways: nineteen hours stopped, or two',
      alt: 'The same month on the same machines. Break/fix: five outages for nineteen hours (server disk full on the 3rd, six hours; infected PC on the 8th, four hours; warehouse Wi-Fi on the 14th, three hours; update in the middle of the day on the 23rd, two hours; invoice printer on the 27th, four hours) and a backup failing for three weeks discovered on the 19th. Managed: nine preventive actions done in the evening and two incidents for two hours.',
      header: 'Constructed example · 30-workstation company · the same month, the same machines · each bar is an outage, its height the number of hours',
      a: { name: 'Break/fix', sub: 'we call when it breaks', total: '5 outages · 19 h', hot: true, events: EV_A((h) => `${h} h`) },
      b: { name: 'Managed', sub: 'watched, maintained in the evening', total: '2 outages · 2 h', events: EV_B((h) => `${String(h).replace(',', '.')} h`) },
      listA: { title: 'Break/fix · what happened', sub: 'every line starts with a phone call and a wait', rows: [{ l: '3rd · server disk full, invoicing stopped', v: '6 h' }, { l: '8th · accounting PC infected', v: '4 h' }, { l: '14th · warehouse Wi-Fi down', v: '3 h' }, { l: '19th · backup failing for 3 weeks', v: 'discovered', hot: true }, { l: '23rd · update in the middle of the day', v: '2 h' }, { l: '27th · invoice printer', v: '4 h' }] },
      listB: { title: 'Managed · the same month', sub: 'diamonds are actions done the day before or in the evening', rows: [{ l: '3rd · “disk at 85 %” alert, cleaned up that evening', v: '0 h' }, { l: '6th and 23rd · updates applied after closing', v: '0 h' }, { l: '8th · attachment stopped, PC up to date', v: '0 h' }, { l: '14th · Wi-Fi access point restarted remotely', v: '0.5 h' }, { l: '19th · backup failure seen that same morning', v: 'fixed' }, { l: '27th · printer, switched to the one upstairs', v: '1.5 h' }] },
      tiles: [
        { big: I('19 h → 2 h'), l1: 'stopped in the month, on the same machines', l2: 'the difference is made the day before, not on the day', hot: true },
        { big: '9 preventive actions', l1: 'done in the evening, without anyone noticing', l2: 'alerts handled, updates, restore tried' },
        { big: '1 failed backup', l1: 'seen that same morning instead of three weeks later', l2: 'what nobody sees is what costs the most' },
      ],
      rule: 'The machines are the same. What changes is that someone looks at them every day,',
      rule2: 'and is paid for nothing to happen, not to turn up when something does.',
      note: 'Constructed example · incidents and durations belong to the example; yours are measured by noting them for a month.',
    },
    rapport: {
      title: 'The month’s report, on one page',
      alt: 'Monthly managed-IT report in six cards: 28 workstations out of 30 up to date; backups verified 30 days out of 30 and a restore tried in 3 h 40; 34 requests handled, 32 within the agreed times; 31 active accounts, all with two-step sign-in; 9 alerts out of 11 handled before a user called; 4 workstations over five years old and 2 renewals within 90 days. Two decisions for the manager.',
      header: 'Constructed example · 30-workstation company · the page the manager receives on the first Sunday of the month',
      cards: [
        { title: 'Workstations up to date', big: I('28 / 30'), ratio: 28 / 30, s1: 'two workstations are waiting for a restart', s2: 'planned for Thursday evening, after closing' },
        { title: 'Backups verified', big: I('30 / 30 days'), ratio: 1, s1: 'server restore tried on the 12th', s2: 'measured duration: 3 h 40' },
        { title: 'Requests handled', big: '34', ratio: 32 / 34, s1: '32 within the agreed times, 2 explained', s2: '2 urgent · 9 disruptive · 23 simple' },
        { title: 'Accounts', big: '31 active', ratio: 1, s1: 'all with two-step sign-in', s2: '1 account closed after a departure' },
        { title: 'Alerts handled before failure', big: I('9 / 11'), ratio: 9 / 11, s1: 'before a user called', s2: 'disk, backup, link, UPS' },
        { title: 'Coming up', big: '4 PCs · 2 renewals', hot: true, s1: 'four workstations are over five years old', s2: 'antivirus and domain name within 90 days' },
      ],
      decisions: { title: 'What the manager decides this month', text: 'Replace two workstations from 2019 before year end · renew the domain name for three years, in the company’s name' },
      tiles: [
        { big: '1 page a month', l1: 'what was done, what was avoided, what is coming', l2: 'read in ten minutes with the manager' },
        { big: '32 requests out of 34', l1: 'handled within the times written in the contract', l2: 'the other two are explained, not hidden' },
        { big: '6 workstations a year', l1: 'thirty workstations kept five years, budgeted for', l2: 'instead of twelve at once on the day they fail', hot: true },
      ],
      rule: 'A provider that does not show what it avoided cannot show what it does:',
      rule2: 'the report fits on one page, is read in ten minutes, and ends with one or two decisions.',
      note: 'Constructed example · figures and dates belong to the example.',
    },
  },
  ar: {
    mois: {
      title: 'الشهر نفسه بطريقتين: تسع عشرة ساعة توقف، أو ساعتان',
      alt: 'الشهر نفسه على الأجهزة نفسها. عند العطل: خمسة توقفات مجموعها تسع عشرة ساعة (قرص الخادم ممتلئ يوم 3، ست ساعات؛ حاسوب مصاب يوم 8، أربع ساعات؛ واي فاي المستودع يوم 14، ثلاث ساعات؛ تحديث في وسط النهار يوم 23، ساعتان؛ طابعة الفواتير يوم 27، أربع ساعات) ونسخة احتياطية فاشلة منذ ثلاثة أسابيع اكتُشفت يوم 19. بالتسيير المنتظم: تسع حركات وقائية في المساء وعطلان مجموعهما ساعتان.',
      header: 'مثال مركَّب · مؤسسة بـ 30 حاسوباً · الشهر نفسه والأجهزة نفسها · كل عمود توقف، وارتفاعه عدد الساعات',
      a: { name: 'عند العطل', sub: 'نتصل حين ينكسر شيء', total: '5 توقفات · 19 ساعة', hot: true, events: EV_A((h) => `${h} h`) },
      b: { name: 'بالتسيير المنتظم', sub: 'مراقَب، ويُصان في المساء', total: 'توقفان · ساعتان', events: EV_B((h) => `${h} h`) },
      listA: { title: 'عند العطل · ما حدث', sub: 'كل سطر يبدأ بمكالمة وانتظار', rows: [{ l: 'يوم 3 · قرص الخادم ممتلئ، والفوترة متوقفة', v: I('6 h') }, { l: 'يوم 8 · حاسوب المحاسبة مصاب', v: I('4 h') }, { l: 'يوم 14 · واي فاي المستودع معطَّل', v: I('3 h') }, { l: 'يوم 19 · نسخة احتياطية فاشلة منذ 3 أسابيع', v: 'اكتُشفت', hot: true }, { l: 'يوم 23 · تحديث في وسط النهار', v: I('2 h') }, { l: 'يوم 27 · طابعة الفواتير', v: I('4 h') }] },
      listB: { title: 'بالتسيير المنتظم · الشهر نفسه', sub: 'المعيَّنات حركات أُنجزت في اليوم السابق أو في المساء', rows: [{ l: `يوم 3 · تنبيه «القرص عند ${I('85 %')}»، والتنظيف في المساء`, v: I('0 h') }, { l: 'يوما 6 و23 · تحديثات بعد الإغلاق', v: I('0 h') }, { l: 'يوم 8 · المرفق أُوقف، والحاسوب محدَّث', v: I('0 h') }, { l: 'يوم 14 · نقطة الواي فاي أُعيد تشغيلها عن بعد', v: I('0,5 h') }, { l: 'يوم 19 · فشل النسخة رُئي في الصباح نفسه', v: 'صُحِّح' }, { l: 'يوم 27 · الطابعة، والتحويل إلى طابعة الطابق', v: I('1,5 h') }] },
      tiles: [
        { big: I('19 h → 2 h'), l1: 'من التوقف في الشهر، على الأجهزة نفسها', l2: 'الفرق يُصنع في اليوم السابق، لا يوم العطل', hot: true },
        { big: '9 حركات وقائية', l1: 'أُنجزت في المساء، دون أن ينتبه أحد', l2: 'تنبيهات عولجت، تحديثات، واسترجاع مجرَّب' },
        { big: 'نسخة فاشلة واحدة', l1: 'رُئيت في الصباح نفسه بدل ثلاثة أسابيع بعدها', l2: 'ما لا يُرى هو ما يكلّف أكثر' },
      ],
      rule: 'الأجهزة هي نفسها. ما يتغير أن أحداً ينظر إليها كل يوم،',
      rule2: 'وأنه يُدفع له لكي لا يحدث شيء، لا لكي يأتي حين يحدث شيء.',
      note: 'مثال مركَّب · الأعطال والمدد خاصة بالمثال؛ وأعطالكم تُقاس بتدوينها شهراً.',
    },
    rapport: {
      title: 'تقرير الشهر، في صفحة واحدة',
      alt: 'تقرير شهري في ست بطاقات: 28 حاسوباً من 30 محدَّثة؛ نسخ احتياطية متحقَّق منها 30 يوماً من 30 واسترجاع مجرَّب في 3 ساعات و40 دقيقة؛ 34 طلباً عولجت منها 32 في الآجال؛ 31 حساباً نشطاً كلها بتحقق بخطوتين؛ 9 تنبيهات من 11 عولجت قبل أن يتصل مستعمل؛ 4 حواسيب عمرها أكثر من خمس سنوات وأجلان خلال 90 يوماً. وقراران للمسيّر.',
      header: 'مثال مركَّب · مؤسسة بـ 30 حاسوباً · الصفحة التي يتلقاها المسيّر في أول أحد من الشهر',
      cards: [
        { title: 'الحواسيب المحدَّثة', big: I('28 / 30'), ratio: 28 / 30, s1: 'حاسوبان ينتظران إعادة تشغيل', s2: 'مبرمجة مساء الخميس، بعد الإغلاق' },
        { title: 'النسخ الاحتياطية المتحقَّق منها', big: `${I('30 / 30')} يوماً`, ratio: 1, s1: 'استرجاع الخادم جُرِّب يوم 12', s2: 'المدة المقاسة: 3 ساعات و40 دقيقة' },
        { title: 'الطلبات المعالَجة', big: '34', ratio: 32 / 34, s1: '32 في الآجال المكتوبة، و2 مشروحان', s2: '2 مستعجلان · 9 مزعجة · 23 بسيطة' },
        { title: 'الحسابات', big: '31 نشطاً', ratio: 1, s1: 'كلها بتحقق بخطوتين', s2: 'حساب واحد أُغلق بعد مغادرة' },
        { title: 'تنبيهات عولجت قبل العطل', big: I('9 / 11'), ratio: 9 / 11, s1: 'قبل أن يتصل أي مستعمل', s2: 'القرص، النسخة، الخط، مزوّد الطاقة' },
        { title: 'ما يُحضَّر', big: '4 حواسيب · أجلان', hot: true, s1: 'أربعة حواسيب عمرها أكثر من خمس سنوات', s2: 'مضاد الفيروسات واسم النطاق خلال 90 يوماً' },
      ],
      decisions: { title: 'ما يقرره المسيّر هذا الشهر', text: 'استبدال حاسوبين من سنة 2019 قبل نهاية السنة · تجديد اسم النطاق لثلاث سنوات، باسم المؤسسة' },
      tiles: [
        { big: 'صفحة واحدة في الشهر', l1: 'ما أُنجز، ما جُنِّب، وما هو قادم', l2: 'تُقرأ في عشر دقائق مع المسيّر' },
        { big: '32 طلباً من 34', l1: 'عولجت في الآجال المكتوبة في العقد', l2: 'والاثنان الآخران مشروحان لا مخفيان' },
        { big: '6 حواسيب في السنة', l1: 'ثلاثون حاسوباً تُحفظ خمس سنوات، مبرمجة في الميزانية', l2: 'بدل اثني عشر دفعة واحدة يوم تتعطل', hot: true },
      ],
      rule: 'المتعهّد الذي لا يُظهر ما جنّبه لا يستطيع أن يُظهر ما يفعله:',
      rule2: 'التقرير تسعه صفحة واحدة، يُقرأ في عشر دقائق، وينتهي بقرار أو قرارين.',
      note: 'مثال مركَّب · الأرقام والتواريخ خاصة بالمثال.',
    },
  },
};
