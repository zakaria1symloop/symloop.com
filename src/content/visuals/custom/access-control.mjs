// Bespoke animated figures for the 2027 roles / permissions / audit-log post.
//  grid():  the same six pieces of data seen by five roles (the AI agent is a
//           role like the others). A highlight sweeps role by role and the
//           column's cells light up: edits / sees / hidden / limited.
//  trail(): "who changed this price?" — the audit log answers, entry by entry:
//           an attempt refused above the discount limit, an approval request,
//           the manager's approval, the change with the old value kept.
// CSS-only animation (prefers-reduced-motion disables it); base attributes are
// the finished state for the JPG rasteriser.
import { W, C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 10;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }

export function grid(t, rtl) {
  const c = ctx(rtl); const P = 'ag'; const css = []; const H = 535;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  const x0 = 80; const labelW = 300; const colW = 148; const top = 100; const headH = 64; const rowH = 52;
  const n = t.roles.length;
  // role headers
  t.roles.forEach((r, i) => {
    const x = x0 + labelW + i * colW;
    s += rect(c, x, top, colW, headH, { stroke: C.line2, fill: C.fill });
    s += text(c, x + colW / 2, top + 26, r.name, { size: 14, fill: C.fg, anchor: 'middle' });
    s += text(c, x + colW / 2, top + 46, r.scope, { size: 11, fill: C.fg55, anchor: 'middle' });
    // sweeping highlight
    const from = 4 + i * 14;
    css.push(`@keyframes ${P}-c${i}{0%,${from}%{opacity:0}${from + 1}%,${from + 12}%{opacity:1}${from + 13}%,100%{opacity:0}}`);
    s += `<g opacity="0" class="${P}-m" style="animation:${P}-c${i} ${LOOP}s linear infinite">` + rect(c, x, top, colW, headH + rowH * t.rows.length, { stroke: C.accent, sw: 2 }) + '</g>';
  });
  // rows
  t.rows.forEach((row, ri) => {
    const y = top + headH + ri * rowH;
    s += rect(c, x0, y, labelW, rowH, { stroke: C.line });
    s += text(c, x0 + 14, y + 31, row.label, { size: 13.5, fill: C.fg });
    row.cells.forEach((cell, ci) => {
      const x = x0 + labelW + ci * colW;
      const kind = cell[0]; const label = cell[1];
      const fill = kind === 'e' ? 'rgba(242,181,68,0.16)' : 'none';
      const col = kind === 'e' ? C.accent : kind === 'v' ? C.fg : C.fg35;
      s += rect(c, x, y, colW, rowH, { stroke: C.line, fill });
      const at = 5 + ci * 14 + ri * 1.2;
      s += `<g style="animation:${show(css, P, `x${ri}${ci}`, at)}">` + text(c, x + colW / 2, y + 31, label, { size: 12.5, fill: col, anchor: 'middle' }) + '</g>';
    });
  });
  // legend
  const ly = top + headH + rowH * t.rows.length + 34;
  t.legend.forEach((l, i) => {
    const lx = x0 + i * 330;
    s += rect(c, lx, ly - 11, 12, 12, { fill: i === 0 ? 'rgba(242,181,68,0.16)' : 'none', stroke: i === 0 ? C.accent : i === 1 ? C.fg : C.fg35 });
    s += text(c, lx + 20, ly, l, { size: 12, fill: C.fg55 });
  });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"]{animation:none !important}.${P}-m{display:none}}</style>`;
  return s + '</svg>';
}

export function trail(t, rtl) {
  const c = ctx(rtl); const P = 'at'; const css = []; const H = 510;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  const lx = 130; const top = 120; const step = 78; const n = t.entries.length;
  s += line(c, lx, top - 10, lx, top + step * (n - 1) + 10, { stroke: C.line2 });
  // travelling dot
  css.push(`@keyframes ${P}-dot{0%{offset-distance:0%;opacity:1}70%{offset-distance:100%;opacity:1}74%,100%{offset-distance:100%;opacity:0}}`);
  s += `<circle r="5" fill="${C.accent}" opacity="0" class="${P}-m" style="offset-path:path('M ${c.X(lx)} ${top} L ${c.X(lx)} ${top + step * (n - 1)}');offset-rotate:0deg;animation:${P}-dot ${LOOP}s linear infinite"/>`;
  t.entries.forEach((e, i) => {
    const y = top + i * step; const at = 6 + i * 15;
    const hot = e.kind === 'refused'; const ok = e.kind === 'done';
    s += `<g style="animation:${show(css, P, `e${i}`, at)}">`
      + circle(c, lx, y, 8, { fill: hot ? C.accent : ok ? C.fg : C.bg, stroke: hot ? C.accent : C.fg, sw: 1.5 })
      + text(c, lx - 22, y + 5, e.time, { size: 12, font: 'mono', fill: C.fg55, anchor: 'end' })
      + text(c, lx + 28, y - 4, e.who, { size: 12, font: 'mono', fill: hot ? C.accent : C.fg55 })
      + text(c, lx + 28, y + 18, e.what, { size: 15, fill: hot ? C.accent : C.fg })
      + (e.detail ? text(c, lx + 28, y + 38, e.detail, { size: 12, fill: C.fg55 }) : '')
      + '</g>';
  });
  // what the log keeps
  const px = 790; const py = 104; const pw = 330; const ph = 300;
  s += rect(c, px, py, pw, ph, { stroke: C.line2, fill: C.fill });
  s += text(c, px + 18, py + 30, t.keeps.label, { size: 11, font: 'mono', fill: C.fg35, letter: 2, upper: true });
  t.keeps.items.forEach((k, i) => {
    s += `<g style="animation:${show(css, P, `k${i}`, 70 + i * 3)}">` + text(c, px + 18, py + 64 + i * 36, k[0], { size: 14, fill: C.fg }) + text(c, px + 18, py + 82 + i * 36, k[1], { size: 11.5, fill: C.fg55 }) + '</g>';
  });
  s += text(c, px, py + ph + 28, t.keeps.foot1, { size: 12, fill: C.fg55 });
  s += text(c, px, py + ph + 46, t.keeps.foot2, { size: 12, fill: C.fg55 });
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"]{animation:none !important}.${P}-m{display:none}}</style>`;
  return s + '</svg>';
}

const I = (x) => `⁦${x}⁩`;
const N = ' ';

export const STRINGS = {
  fr: {
    grid: {
      title: 'Les mêmes données, cinq rôles : qui voit quoi, qui modifie quoi',
      alt: 'Une grille de six données et cinq rôles : gérant, commercial, magasinier, comptable et agent IA. Le gérant modifie presque tout ; le commercial voit les prix de vente et le solde de ses clients, accorde une remise jusqu’à 5 %, et ne voit ni le prix d’achat ni la marge ; le magasinier modifie le stock de son dépôt et ne voit pas les prix d’achat ; le comptable voit tout en lecture ; l’agent IA lit et propose, sans jamais voir la marge ni exporter.',
      roles: [{ name: 'Gérant', scope: 'toute l’entreprise' }, { name: 'Commercial', scope: 'ses clients' }, { name: 'Magasinier', scope: 'son dépôt' }, { name: 'Comptable', scope: 'tout, en lecture' }, { name: 'Agent IA', scope: 'lecture, plafonds' }],
      rows: [
        { label: 'Prix de vente', cells: [['e', 'modifie'], ['v', 'voit'], ['v', 'voit'], ['v', 'voit'], ['v', 'voit']] },
        { label: 'Prix d’achat et marge', cells: [['e', 'modifie'], ['h', 'masqué'], ['h', 'masqué'], ['v', 'voit'], ['h', 'masqué']] },
        { label: 'Solde et plafond du client', cells: [['e', 'modifie'], ['v', 'voit'], ['h', 'masqué'], ['v', 'voit'], ['v', 'voit']] },
        { label: 'Stock par dépôt', cells: [['v', 'voit'], ['v', 'voit'], ['e', 'modifie'], ['v', 'voit'], ['v', 'voit']] },
        { label: 'Remise sur une commande', cells: [['e', 'sans plafond'], ['e', 'jusqu’à 5 %'], ['h', 'non'], ['h', 'non'], ['v', 'propose']] },
        { label: 'Export de la liste clients', cells: [['e', 'oui, journalisé'], ['h', 'non'], ['h', 'non'], ['e', 'oui, journalisé'], ['h', 'non']] },
      ],
      legend: ['modifie ou agit, dans sa limite', 'voit, sans modifier', 'masqué : la donnée n’est même pas envoyée'],
    },
    trail: {
      title: '« Qui a changé ce prix ? » Le journal répond, ligne par ligne',
      alt: 'Cinq entrées de journal : à 14 h 02 un commercial tente une remise de 10 %, refusée parce que son plafond est de 5 % ; une demande d’approbation part au gérant ; à 14 h 05 le gérant approuve depuis son téléphone ; le prix passe de 4 800 à 4 320 dinars et l’ancienne valeur est gardée ; à 14 h 06 l’agent IA lit le nouveau prix pour répondre au client. À droite, ce que le journal garde : qui, quand, d’où, avant, après, pourquoi.',
      entries: [
        { time: '14:02', who: 'Karim · commercial · téléphone', what: 'Remise de 10 % sur la commande 1042 : refusée', detail: 'au-delà de son plafond de 5 % ; la tentative est écrite', kind: 'refused' },
        { time: '14:02', who: 'système', what: 'Demande d’approbation envoyée au gérant', detail: 'avec la commande, le client et le motif saisi' },
        { time: '14:05', who: 'Le gérant · téléphone', what: 'Approuve la remise de 10 %', detail: 'une touche ; son nom et l’heure sont attachés' },
        { time: '14:05', who: 'système', what: `Prix : 4${N}800 DA → 4${N}320 DA`, detail: 'l’ancienne valeur est gardée, rien n’est écrasé', kind: 'done' },
        { time: '14:06', who: 'Agent IA · WhatsApp', what: 'Lit le prix pour répondre au client', detail: 'la lecture d’une donnée sensible est écrite aussi' },
      ],
      keeps: { label: 'Ce que chaque ligne garde', items: [['Qui', 'la personne, pas un compte partagé'], ['Quand et d’où', 'l’heure, l’appareil, l’agence'], ['Avant et après', 'les deux valeurs, côte à côte'], ['Pourquoi', 'le motif saisi, l’approbateur'], ['Ce qui a été refusé', 'les tentatives comptent autant'], ['Ce qui a été lu', 'pour les données sensibles']], foot1: 'On ajoute des lignes ; on n’en modifie', foot2: 'et on n’en supprime aucune, gérant compris.' },
    },
  },
  en: {
    grid: {
      title: 'The same data, five roles: who sees what, who changes what',
      alt: 'A grid of six pieces of data and five roles: manager, sales rep, storekeeper, accountant and AI agent. The manager changes almost everything; the sales rep sees selling prices and their own customers’ balance, grants a discount up to 5 %, and sees neither purchase price nor margin; the storekeeper changes the stock of their depot and does not see purchase prices; the accountant sees everything read-only; the AI agent reads and proposes, never seeing the margin or exporting.',
      roles: [{ name: 'Manager', scope: 'the whole company' }, { name: 'Sales rep', scope: 'their customers' }, { name: 'Storekeeper', scope: 'their depot' }, { name: 'Accountant', scope: 'everything, read-only' }, { name: 'AI agent', scope: 'read, limits' }],
      rows: [
        { label: 'Selling price', cells: [['e', 'changes'], ['v', 'sees'], ['v', 'sees'], ['v', 'sees'], ['v', 'sees']] },
        { label: 'Purchase price and margin', cells: [['e', 'changes'], ['h', 'hidden'], ['h', 'hidden'], ['v', 'sees'], ['h', 'hidden']] },
        { label: 'Customer balance and limit', cells: [['e', 'changes'], ['v', 'sees'], ['h', 'hidden'], ['v', 'sees'], ['v', 'sees']] },
        { label: 'Stock per depot', cells: [['v', 'sees'], ['v', 'sees'], ['e', 'changes'], ['v', 'sees'], ['v', 'sees']] },
        { label: 'Discount on an order', cells: [['e', 'no limit'], ['e', 'up to 5 %'], ['h', 'no'], ['h', 'no'], ['v', 'proposes']] },
        { label: 'Export of the customer list', cells: [['e', 'yes, logged'], ['h', 'no'], ['h', 'no'], ['e', 'yes, logged'], ['h', 'no']] },
      ],
      legend: ['changes or acts, within its limit', 'sees, without changing', 'hidden: the data is not even sent'],
    },
    trail: {
      title: '“Who changed this price?” The log answers, line by line',
      alt: 'Five log entries: at 14:02 a sales rep attempts a 10 % discount, refused because their limit is 5 %; an approval request goes to the manager; at 14:05 the manager approves from their phone; the price goes from 4,800 to 4,320 dinars and the old value is kept; at 14:06 the AI agent reads the new price to answer the customer. On the right, what the log keeps: who, when, from where, before, after, why.',
      entries: [
        { time: '14:02', who: 'Karim · sales rep · phone', what: '10 % discount on order 1042: refused', detail: 'above their 5 % limit; the attempt is written', kind: 'refused' },
        { time: '14:02', who: 'system', what: 'Approval request sent to the manager', detail: 'with the order, the customer and the reason entered' },
        { time: '14:05', who: 'The manager · phone', what: 'Approves the 10 % discount', detail: 'one key; their name and the time are attached' },
        { time: '14:05', who: 'system', what: 'Price: 4,800 DA → 4,320 DA', detail: 'the old value is kept, nothing is overwritten', kind: 'done' },
        { time: '14:06', who: 'AI agent · WhatsApp', what: 'Reads the price to answer the customer', detail: 'reading sensitive data is written too' },
      ],
      keeps: { label: 'What each line keeps', items: [['Who', 'the person, not a shared account'], ['When and from where', 'the time, the device, the branch'], ['Before and after', 'both values, side by side'], ['Why', 'the reason entered, the approver'], ['What was refused', 'attempts count just as much'], ['What was read', 'for sensitive data']], foot1: 'Lines are added; none is changed', foot2: 'and none is deleted, manager included.' },
    },
  },
  ar: {
    grid: {
      title: 'البيانات نفسها وخمسة أدوار: من يرى ماذا، ومن يعدّل ماذا',
      alt: 'شبكة من ست معطيات وخمسة أدوار: المسيّر، المندوب، أمين المخزن، المحاسب، ووكيل الذكاء الاصطناعي. المسيّر يعدّل كل شيء تقريباً؛ المندوب يرى أسعار البيع ورصيد زبائنه ويمنح تخفيضاً حتى 5 % ولا يرى سعر الشراء ولا الهامش؛ أمين المخزن يعدّل مخزون مستودعه ولا يرى أسعار الشراء؛ المحاسب يرى كل شيء للقراءة؛ والوكيل يقرأ ويقترح دون أن يرى الهامش أو يصدّر.',
      roles: [{ name: 'المسيّر', scope: 'الشركة كلها' }, { name: 'المندوب', scope: 'زبائنه' }, { name: 'أمين المخزن', scope: 'مستودعه' }, { name: 'المحاسب', scope: 'الكل، للقراءة' }, { name: 'وكيل الذكاء', scope: 'قراءة، سقوف' }],
      rows: [
        { label: 'سعر البيع', cells: [['e', 'يعدّل'], ['v', 'يرى'], ['v', 'يرى'], ['v', 'يرى'], ['v', 'يرى']] },
        { label: 'سعر الشراء والهامش', cells: [['e', 'يعدّل'], ['h', 'مخفي'], ['h', 'مخفي'], ['v', 'يرى'], ['h', 'مخفي']] },
        { label: 'رصيد الزبون وسقفه', cells: [['e', 'يعدّل'], ['v', 'يرى'], ['h', 'مخفي'], ['v', 'يرى'], ['v', 'يرى']] },
        { label: 'المخزون لكل مستودع', cells: [['v', 'يرى'], ['v', 'يرى'], ['e', 'يعدّل'], ['v', 'يرى'], ['v', 'يرى']] },
        { label: 'تخفيض على طلبية', cells: [['e', 'بلا سقف'], ['e', I('حتى 5 %')], ['h', 'لا'], ['h', 'لا'], ['v', 'يقترح']] },
        { label: 'تصدير قائمة الزبائن', cells: [['e', 'نعم، مسجَّل'], ['h', 'لا'], ['h', 'لا'], ['e', 'نعم، مسجَّل'], ['h', 'لا']] },
      ],
      legend: ['يعدّل أو يتصرف، ضمن حدّه', 'يرى دون تعديل', 'مخفي: المعطى لا يُرسل أصلاً'],
    },
    trail: {
      title: '«من غيّر هذا السعر؟» السجل يجيب، سطراً سطراً',
      alt: 'خمسة سطور في السجل: في 14:02 يحاول مندوب تخفيضاً بـ 10 % فيُرفض لأن سقفه 5 %؛ يذهب طلب موافقة إلى المسيّر؛ في 14:05 يوافق المسيّر من هاتفه؛ ينتقل السعر من 4 800 إلى 4 320 ديناراً وتُحفظ القيمة القديمة؛ في 14:06 يقرأ وكيل الذكاء الاصطناعي السعر الجديد ليجيب الزبون. وعلى الجانب ما يحفظه السجل: من، متى، من أين، قبل، بعد، لماذا.',
      entries: [
        { time: I('14:02'), who: 'كريم · مندوب · هاتف', what: 'تخفيض 10 % على الطلبية 1042: مرفوض', detail: 'فوق سقفه البالغ 5 %؛ والمحاولة تُكتب', kind: 'refused' },
        { time: I('14:02'), who: 'النظام', what: 'طلب موافقة يُرسل إلى المسيّر', detail: 'مع الطلبية والزبون والسبب المُدخل' },
        { time: I('14:05'), who: 'المسيّر · هاتف', what: 'يوافق على تخفيض 10 %', detail: 'ضغطة واحدة؛ اسمه والساعة مرفقان' },
        { time: I('14:05'), who: 'النظام', what: `السعر: ${I(`4${N}800 DA → 4${N}320 DA`)}`, detail: 'القيمة القديمة تُحفظ، لا شيء يُمحى', kind: 'done' },
        { time: I('14:06'), who: 'وكيل الذكاء · WhatsApp', what: 'يقرأ السعر ليجيب الزبون', detail: 'قراءة معطى حساس تُكتب أيضاً' },
      ],
      keeps: { label: 'ما يحفظه كل سطر', items: [['من', 'الشخص، لا حساب مشترك'], ['متى ومن أين', 'الساعة، الجهاز، الوكالة'], ['قبل وبعد', 'القيمتان جنباً إلى جنب'], ['لماذا', 'السبب المُدخل والموافِق'], ['ما رُفض', 'المحاولات مهمة بالقدر نفسه'], ['ما قُرئ', 'للبيانات الحساسة']], foot1: 'تُضاف سطور؛ ولا يُعدَّل سطر', foot2: 'ولا يُحذف سطر، حتى من المسيّر.' },
    },
  },
};
