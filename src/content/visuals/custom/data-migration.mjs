// Bespoke animated figures for the 2027 data-migration post.
//  clean():   two messy spreadsheet rows (same customer typed twice) are
//             normalised cell by cell and merged into one clean record; the
//             bank identifier that Excel corrupted is flagged, not guessed.
//  cutover(): the switch-over weekend on two tracks (old system → read-only,
//             new system → live), a marker travelling from Friday to Monday,
//             and the reconciliation counters ticking equal on both sides.
// CSS-only animation (prefers-reduced-motion disables it); base attributes are
// the finished state for the JPG rasteriser.
import { W, C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 10;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }

export function clean(t, rtl) {
  const c = ctx(rtl); const P = 'dm'; const css = []; const H = 510;
  let s = open(H, t.title, t.alt) + heading(c, t.title);

  // ── the spreadsheet (two rows, five columns)
  const gx = 80; const gy = 104; const colW = [210, 220, 130, 230, 170]; const rowH = 44;
  s += text(c, gx, gy - 8, t.sheetLabel, { size: 11, font: 'mono', fill: C.fg35, letter: 2, upper: true });
  let x = gx;
  t.cols.forEach((h, i) => { s += rect(c, x, gy, colW[i], 30, { stroke: C.line2, fill: C.fill }); s += text(c, x + 10, gy + 20, h, { size: 11, font: 'mono', fill: C.fg55 }); x += colW[i]; });
  t.rows.forEach((r, ri) => {
    let xx = gx; const y = gy + 30 + ri * rowH;
    r.forEach((cell, ci) => {
      s += rect(c, xx, y, colW[ci], rowH, { stroke: C.line });
      s += text(c, xx + 10, y + 27, cell, { size: 13, font: 'mono', fill: C.fg70 });
      // highlight sweep over the column being cleaned
      const at = 6 + ci * 12;
      css.push(`@keyframes ${P}-h${ri}${ci}{0%,${at}%{opacity:0}${at + 1}%,${at + 9}%{opacity:1}${at + 10}%,100%{opacity:0}}`);
      s += `<g opacity="0" class="${P}-m" style="animation:${P}-h${ri}${ci} ${LOOP}s linear infinite">` + rect(c, xx, y, colW[ci], rowH, { stroke: C.accent, sw: 1.5 }) + '</g>';
      xx += colW[ci];
    });
  });

  // ── the rules applied, one per column
  const ry = gy + 30 + 2 * rowH + 36;
  s += text(c, gx, ry, t.rulesLabel, { size: 11, font: 'mono', fill: C.fg35, letter: 2, upper: true });
  t.rules.forEach((r, i) => {
    s += `<g style="animation:${show(css, P, `r${i}`, 10 + i * 12)}">` + text(c, gx, ry + 28 + i * 22, r, { size: 12.5, fill: i === 3 ? C.accent : C.fg70 }) + '</g>';
  });

  // ── the clean record
  const cx = 660; const cy = ry - 12; const cw = 460; const ch = 190;
  s += `<g style="animation:${show(css, P, 'rec', 68)}">` + rect(c, cx, cy, cw, ch, { stroke: C.accent, fill: C.fill })
    + text(c, cx + 16, cy + 26, t.record.label, { size: 11, font: 'mono', fill: C.accent, letter: 2, upper: true })
    + t.record.fields.map((f, i) => text(c, cx + 16, cy + 56 + i * 24, f[0], { size: 11, font: 'mono', fill: C.fg35 }) + text(c, cx + 150, cy + 56 + i * 24, f[1], { size: 13.5, fill: f[2] ? C.accent : C.fg })).join('')
    + '</g>';
  s += `<g style="animation:${show(css, P, 'mrg', 74)}">` + text(c, cx, cy + ch + 24, t.merged, { size: 12.5, fill: C.fg55 }) + '</g>';

  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"]{animation:none !important}.${P}-m{display:none}}</style>`;
  return s + '</svg>';
}

export function cutover(t, rtl) {
  const c = ctx(rtl); const P = 'co'; const css = []; const H = 570;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  const x0 = 260; const x1 = 1100; const days = t.ticks.length - 1; const X = (i) => x0 + (i / days) * (x1 - x0);

  // axis
  const ay = 118;
  s += line(c, x0, ay, x1, ay, { stroke: C.line2 });
  t.ticks.forEach((tk, i) => { s += line(c, X(i), ay - 4, X(i), ay + 4, { stroke: C.line2 }); s += text(c, X(i), ay - 12, tk, { size: 11, font: 'mono', fill: C.fg55, anchor: 'middle' }); });

  // tracks
  const ty = [170, 250];
  // old system: active until tick 1, read-only after
  s += text(c, 80, ty[0] + 5, t.old.label, { size: 15, fill: C.fg });
  s += rect(c, x0, ty[0] - 14, X(1) - x0, 28, { fill: 'rgba(255,255,255,0.75)', stroke: 'none' });
  s += rect(c, X(1), ty[0] - 14, x1 - X(1), 28, { stroke: C.line2, dash: '4 4' });
  s += text(c, x0 + 10, ty[0] + 5, t.old.active, { size: 12, fill: C.bg });
  s += text(c, X(1) + 10, ty[0] + 5, t.old.readonly, { size: 12, fill: C.fg55 });
  // new system: rehearsals before, load during the weekend, live from tick 3
  s += text(c, 80, ty[1] + 5, t.neu.label, { size: 15, fill: C.fg });
  s += rect(c, x0, ty[1] - 14, X(1) - x0, 28, { stroke: C.line2, dash: '4 4' });
  s += text(c, x0 + 10, ty[1] + 5, t.neu.rehearsed, { size: 12, fill: C.fg55 });
  s += rect(c, X(1), ty[1] - 14, X(3) - X(1), 28, { fill: 'rgba(242,181,68,0.25)', stroke: C.accent });
  s += text(c, X(1) + 10, ty[1] + 5, t.neu.loading, { size: 12, fill: C.fg });
  s += rect(c, X(3), ty[1] - 14, x1 - X(3), 28, { fill: C.accent, stroke: 'none' });
  s += text(c, X(3) + 10, ty[1] + 5, t.neu.live, { size: 12, fill: C.bg });

  // rollback window
  s += line(c, X(3), ty[1] + 26, X(3.5), ty[1] + 26, { stroke: C.fg55, dash: '2 4' });
  s += text(c, X(3), ty[1] + 46, t.rollback, { size: 11.5, fill: C.fg55 });

  // travelling marker
  const mx0 = c.X(X(0.6)); const mx1 = c.X(X(3.4));
  css.push(`@keyframes ${P}-mk{0%{offset-distance:0%;opacity:1}62%{offset-distance:100%;opacity:1}66%,100%{offset-distance:100%;opacity:0}}`);
  s += `<g class="${P}-m" opacity="0" style="offset-path:path('M ${mx0} ${ay} L ${mx1} ${ay}');offset-rotate:0deg;animation:${P}-mk ${LOOP}s linear infinite"><circle r="7" fill="${C.accent}"/></g>`;

  // reconciliation counters
  const ry = 350;
  s += text(c, 80, ry, t.reconLabel, { size: 11, font: 'mono', fill: C.fg35, letter: 2, upper: true });
  s += text(c, 600, ry, t.reconOld, { size: 11, font: 'mono', fill: C.fg55, anchor: 'end' });
  s += text(c, 820, ry, t.reconNew, { size: 11, font: 'mono', fill: C.fg55, anchor: 'end' });
  s += line(c, 80, ry + 12, 1120, ry + 12, { stroke: C.line2 });
  t.recon.forEach((r, i) => {
    const y = ry + 44 + i * 40; const at = 30 + i * 9;
    s += text(c, 80, y, r.k, { size: 14, fill: C.fg });
    s += text(c, 600, y, r.a, { size: 14, font: 'mono', fill: C.fg70, anchor: 'end' });
    s += `<g style="animation:${show(css, P, `v${i}`, at)}">` + text(c, 820, y, r.b, { size: 14, font: 'mono', fill: C.fg, anchor: 'end' }) + '</g>';
    const kx = c.X(880); const ky = y - 5;
    s += `<g style="animation:${show(css, P, `k${i}`, at + 3)}">` + circle(c, 880, ky, 10, { fill: C.fg, stroke: 'none' }) + `<path d="M ${kx - 4.5} ${ky} L ${kx - 1.5} ${ky + 3} L ${kx + 4.5} ${ky - 3.5}" stroke="${C.bg}" stroke-width="2" fill="none"/>` + text(c, 904, y, r.note, { size: 12, fill: C.fg55 }) + '</g>';
    s += line(c, 80, y + 14, 1120, y + 14, { stroke: C.line });
  });

  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"]{animation:none !important}.${P}-m{display:none}}</style>`;
  return s + '</svg>';
}

const I = (x) => `⁦${x}⁩`;
const N = ' ';

export const STRINGS = {
  fr: {
    clean: {
      title: 'Deux lignes d’un fichier Excel deviennent une fiche client',
      alt: 'Deux lignes d’un tableur décrivent le même client, écrit de deux façons. Colonne par colonne : le nom est normalisé, les téléphones séparés et mis au format international, le nombre 45123 redevient la date du 16 juillet 2023, l’identifiant bancaire de vingt chiffres abîmé par le tableur est marqué à redemander, et la ville devient un code de wilaya. Les deux lignes fusionnent en une fiche.',
      sheetLabel: 'clients_2019_final_v3.xlsx',
      cols: ['Nom', 'Tél', 'Depuis', 'RIB', 'Ville'],
      rows: [
        ['sarl el baraka ', '0550 12 34 56/0560…', '45123', '4,00123E+17', 'blida'],
        ['EL-BARAKA (SARL)', '550123456', '16/07/23', '00400123…000', 'Blida ctr'],
      ],
      rulesLabel: 'La règle appliquée à chaque colonne',
      rules: [
        'Nom : casse, espaces, forme juridique séparée',
        'Téléphone : un numéro par champ, format +213',
        'Date : le nombre 45123 est une date, le 16/07/2023',
        'RIB : vingt chiffres abîmés au-delà du quinzième ; à redemander, jamais deviné',
        'Ville : rattachée à un code de wilaya',
      ],
      record: { label: 'Fiche client 4 812', fields: [['raison_sociale', 'El Baraka'], ['forme', 'SARL'], ['telephones', '+213 550 12 34 56 · +213 560 …'], ['client_depuis', '2023-07-16'], ['rib', 'à redemander au client', true], ['wilaya', '09 · Blida']] },
      merged: 'Deux lignes, une fiche : le doublon est fusionné, et les deux lignes d’origine restent consultables.',
    },
    cutover: {
      title: 'La bascule en un week-end, et les chiffres qui prouvent que rien n’est perdu',
      alt: 'Deux pistes du vendredi au lundi. L’ancien système est actif jusqu’au vendredi 18 h puis passe en lecture seule. Le nouveau, déjà répété trois fois, est chargé pendant le week-end et ouvre lundi à 8 h, avec un retour arrière possible jusqu’à lundi midi. En dessous, quatre compteurs comparés entre les deux systèmes : clients, factures ouvertes, solde total, stock ; ils sont égaux.',
      ticks: ['jeu.', 'ven. 18 h', 'sam.', 'lun. 8 h', 'lun. 18 h'],
      old: { label: 'Ancien système', active: 'actif', readonly: 'lecture seule : on consulte, on ne saisit plus' },
      neu: { label: 'Nouvelle application', rehearsed: 'répétée 3 fois', loading: 'chargement et rapprochement', live: 'en service' },
      rollback: 'retour arrière possible jusqu’à lundi midi',
      reconLabel: 'Le rapprochement, lu samedi soir', reconOld: 'ANCIEN', reconNew: 'NOUVEAU',
      recon: [
        { k: 'Clients actifs', a: `4${N}812`, b: `4${N}812`, note: '213 doublons fusionnés, listés' },
        { k: 'Factures ouvertes', a: `1${N}204`, b: `1${N}204`, note: 'une par une, par numéro' },
        { k: 'Solde clients total', a: `38${N}416${N}200 DA`, b: `38${N}416${N}200 DA`, note: 'au dinar près' },
        { k: 'Références en stock', a: `3${N}057`, b: `3${N}057`, note: 'quantités par dépôt' },
      ],
    },
  },
  en: {
    clean: {
      title: 'Two rows of an Excel file become one customer record',
      alt: 'Two rows of a spreadsheet describe the same customer, written two ways. Column by column: the name is normalised, the phone numbers split and put in international format, the number 45123 becomes the date 16 July 2023 again, the twenty-digit bank identifier damaged by the spreadsheet is flagged to be asked again, and the town becomes a wilaya code. The two rows merge into one record.',
      sheetLabel: 'clients_2019_final_v3.xlsx',
      cols: ['Name', 'Phone', 'Since', 'Bank ID', 'Town'],
      rows: [
        ['sarl el baraka ', '0550 12 34 56/0560…', '45123', '4.00123E+17', 'blida'],
        ['EL-BARAKA (SARL)', '550123456', '16/07/23', '00400123…000', 'Blida ctr'],
      ],
      rulesLabel: 'The rule applied to each column',
      rules: [
        'Name: case, spaces, legal form separated',
        'Phone: one number per field, +213 format',
        'Date: the number 45123 is a date, 16/07/2023',
        'Bank ID: twenty digits damaged past the fifteenth; to be asked again, never guessed',
        'Town: attached to a wilaya code',
      ],
      record: { label: 'Customer record 4812', fields: [['company_name', 'El Baraka'], ['legal_form', 'SARL'], ['phones', '+213 550 12 34 56 · +213 560 …'], ['customer_since', '2023-07-16'], ['bank_id', 'to ask the customer again', true], ['wilaya', '09 · Blida']] },
      merged: 'Two rows, one record: the duplicate is merged, and the two original rows stay available.',
    },
    cutover: {
      title: 'The switch-over in one weekend, and the figures proving nothing is lost',
      alt: 'Two tracks from Friday to Monday. The old system is active until Friday 6 pm then becomes read-only. The new one, already rehearsed three times, is loaded during the weekend and opens Monday at 8 am, with rollback possible until Monday noon. Below, four counters compared between the two systems: customers, open invoices, total balance, stock; they are equal.',
      ticks: ['Thu', 'Fri 6 pm', 'Sat', 'Mon 8 am', 'Mon 6 pm'],
      old: { label: 'Old system', active: 'active', readonly: 'read-only: consult, no more entry' },
      neu: { label: 'New application', rehearsed: 'rehearsed 3 times', loading: 'loading and reconciliation', live: 'in service' },
      rollback: 'rollback possible until Monday noon',
      reconLabel: 'The reconciliation, read Saturday evening', reconOld: 'OLD', reconNew: 'NEW',
      recon: [
        { k: 'Active customers', a: '4,812', b: '4,812', note: '213 duplicates merged, listed' },
        { k: 'Open invoices', a: '1,204', b: '1,204', note: 'one by one, by number' },
        { k: 'Total customer balance', a: '38,416,200 DA', b: '38,416,200 DA', note: 'to the dinar' },
        { k: 'Stock references', a: '3,057', b: '3,057', note: 'quantities per depot' },
      ],
    },
  },
  ar: {
    clean: {
      title: 'سطران من ملف Excel يصيران بطاقة زبون واحدة',
      alt: 'سطران من جدول يصفان الزبون نفسه مكتوباً بطريقتين. عموداً عموداً: الاسم يُطبَّع، الهواتف تُفصل وتُكتب بالصيغة الدولية، الرقم 45123 يعود تاريخ 16 يوليو 2023، المعرّف البنكي ذو العشرين رقماً الذي أتلفه الجدول يُعلَّم ليُطلب من جديد، والمدينة تصير رمز ولاية. ويندمج السطران في بطاقة واحدة.',
      sheetLabel: I('clients_2019_final_v3.xlsx'),
      cols: ['الاسم', 'الهاتف', 'منذ', 'RIB', 'المدينة'],
      rows: [
        [I('sarl el baraka '), I('0550 12 34 56/0560…'), I('45123'), I('4,00123E+17'), I('blida')],
        [I('EL-BARAKA (SARL)'), I('550123456'), I('16/07/23'), I('00400123…000'), I('Blida ctr')],
      ],
      rulesLabel: 'القاعدة المطبَّقة على كل عمود',
      rules: [
        'الاسم: حالة الأحرف، المسافات، الشكل القانوني مفصول',
        'الهاتف: رقم واحد لكل حقل، بصيغة 213+',
        'التاريخ: الرقم 45123 تاريخ، هو 16/07/2023',
        'RIB: عشرون رقماً تالفة بعد الخامس عشر؛ يُطلب من جديد ولا يُخمَّن أبداً',
        'المدينة: تُلحق برمز ولاية',
      ],
      record: { label: 'بطاقة الزبون 4812', fields: [['الاسم التجاري', 'El Baraka'], ['الشكل', 'SARL'], ['الهواتف', I('+213 550 12 34 56 · +213 560 …')], ['زبون منذ', I('2023-07-16')], ['RIB', 'يُطلب من الزبون من جديد', true], ['الولاية', '09 · البليدة']] },
      merged: 'سطران وبطاقة واحدة: المكرر يُدمج، والسطران الأصليان يبقيان قابلين للاستشارة.',
    },
    cutover: {
      title: 'التحويل في عطلة نهاية أسبوع، والأرقام التي تثبت أن لا شيء ضاع',
      alt: 'مساران من الجمعة إلى الاثنين. النظام القديم يعمل حتى الجمعة السادسة مساءً ثم يصير للقراءة فقط. والجديد، بعد ثلاث تجارب، يُحمَّل في العطلة ويفتح الاثنين الثامنة صباحاً، مع إمكانية التراجع حتى ظهر الاثنين. في الأسفل أربعة عدادات تُقارَن بين النظامين: الزبائن، الفواتير المفتوحة، الرصيد الإجمالي، المخزون؛ وهي متساوية.',
      ticks: ['الخميس', 'الجمعة 18', 'السبت', 'الاثنين 8', 'الاثنين 18'],
      old: { label: 'النظام القديم', active: 'يعمل', readonly: 'قراءة فقط: استشارة بلا إدخال' },
      neu: { label: 'التطبيق الجديد', rehearsed: 'جُرِّب 3 مرات', loading: 'تحميل ومطابقة', live: 'في الخدمة' },
      rollback: 'التراجع ممكن حتى ظهر الاثنين',
      reconLabel: 'المطابقة، تُقرأ مساء السبت', reconOld: 'القديم', reconNew: 'الجديد',
      recon: [
        { k: 'الزبائن النشطون', a: I(`4${N}812`), b: I(`4${N}812`), note: '213 مكرراً مدموجاً، مسرودة' },
        { k: 'الفواتير المفتوحة', a: I(`1${N}204`), b: I(`1${N}204`), note: 'واحدة واحدة، بالرقم' },
        { k: 'الرصيد الإجمالي للزبائن', a: I(`38${N}416${N}200 DA`), b: I(`38${N}416${N}200 DA`), note: 'بالدينار الواحد' },
        { k: 'مراجع المخزون', a: I(`3${N}057`), b: I(`3${N}057`), note: 'الكميات لكل مستودع' },
      ],
    },
  },
};
