// Bespoke animated figures for the 2027 single-customer-record post.
//  doors():  one customer enters through five doors (till, WhatsApp, web
//            shop, mobile app, field sales), each producing a raw record with
//            a differently written phone, name or e-mail; the records converge
//            through the resolution box (normalise, match, score) into one
//            golden record whose fields fill up with their source.
//  merge():  one merge, field by field: two records side by side, a rule per
//            field (verified, most recent, most complete, kept both), the
//            merged column filling in, the audit line, and the undo arrow
//            because the sources are kept.
// CSS-only animation (prefers-reduced-motion disables it); base attributes are
// the finished state for the JPG rasteriser.
import { W, C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }

export function doors(t, rtl) {
  const c = ctx(rtl); const P = 'cd'; const css = []; const H = 600;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  // five doors on the left
  const dx = 80; const dw = 300; const dh = 74; const top = 96; const gap = 10;
  const midX = 560; const midY = top + (5 * (dh + gap) - gap) / 2;
  t.doors.forEach((d, i) => {
    const y = top + i * (dh + gap); const at = 5 + i * 7;
    s += `<g style="animation:${show(css, P, `d${i}`, at)}">`
      + rect(c, dx, y, dw, dh, { stroke: C.line2, fill: C.fill })
      + text(c, dx + 14, y + 20, d.name, { size: 12.5, fill: C.fg })
      + text(c, dx + 14, y + 38, d.raw1, { size: 10.5, font: 'mono', fill: C.fg70 })
      + text(c, dx + 14, y + 54, d.raw2, { size: 10.5, font: 'mono', fill: C.fg55 })
      + text(c, dx + dw - 14, y + 20, d.when, { size: 10, font: 'mono', fill: C.fg35, anchor: 'end' })
      + '</g>';
    // converging line to the resolution box
    const ly = y + dh / 2;
    s += `<g style="animation:${show(css, P, `l${i}`, at + 4)}">` + `<path d="M ${c.X(dx + dw)} ${ly} C ${c.X(dx + dw + 60)} ${ly}, ${c.X(midX - 60)} ${midY}, ${c.X(midX)} ${midY}" fill="none" stroke="${C.line2}" stroke-width="1"/>` + '</g>';
  });
  // resolution box
  const rw = 200; const rh = 150; const ry = midY - rh / 2;
  s += `<g style="animation:${show(css, P, 'res', 40)}">`
    + rect(c, midX, ry, rw, rh, { stroke: C.accent, fill: 'rgba(242,181,68,0.06)' })
    + text(c, midX + 14, ry + 24, t.res.label, { size: 11, font: 'mono', fill: C.accent, letter: 2, upper: true })
    + t.res.steps.map((st, k) => text(c, midX + 14, ry + 50 + k * 22, st, { size: 11.5, fill: C.fg })).join('')
    + '</g>';
  // golden record on the right
  const gx = 820; const gw = 300; const gy = 96; const gh = 5 * (dh + gap) - gap;
  s += `<g style="animation:${show(css, P, 'g0', 48)}">`
    + rect(c, gx, gy, gw, gh, { stroke: C.accent, fill: 'none' })
    + text(c, gx + 14, gy + 24, t.golden.label, { size: 11, font: 'mono', fill: C.accent, letter: 2, upper: true })
    + text(c, gx + 14, gy + 46, t.golden.id, { size: 10.5, font: 'mono', fill: C.fg55 })
    + '</g>';
  s += `<g style="animation:${show(css, P, 'arr', 46)}">` + line(c, midX + rw, midY, gx - 4, midY, { stroke: C.accent, sw: 1.2 }) + '</g>';
  t.golden.fields.forEach((f, k) => {
    const y = gy + 72 + k * 40; const at = 52 + k * 6;
    s += `<g style="animation:${show(css, P, `f${k}`, at)}">`
      + text(c, gx + 14, y, f.k, { size: 10, font: 'mono', fill: C.fg35 })
      + text(c, gx + 14, y + 17, f.v, { size: 12, fill: C.fg })
      + text(c, gx + gw - 14, y + 17, f.src, { size: 9.5, font: 'mono', fill: C.accent, anchor: 'end' })
      + '</g>';
  });
  s += `<g style="animation:${show(css, P, 'rule', 92)}">` + text(c, 80, 568, t.rule, { size: 13, fill: C.fg }) + '</g>';
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

export function merge(t, rtl) {
  const c = ctx(rtl); const P = 'cm'; const css = []; const H = 556;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  const colX = [80, 400, 780]; const colW = [300, 300, 340]; const top = 96;
  // headers
  t.cols.forEach((h, i) => {
    s += rect(c, colX[i], top, colW[i], 40, { stroke: i === 2 ? C.accent : C.line2, fill: i === 2 ? 'rgba(242,181,68,0.06)' : C.fill });
    s += text(c, colX[i] + 12, top + 18, h.name, { size: 12, fill: i === 2 ? C.accent : C.fg });
    s += text(c, colX[i] + 12, top + 32, h.sub, { size: 9.5, font: 'mono', fill: C.fg55 });
  });
  // rows
  t.rows.forEach((r, k) => {
    const y = top + 56 + k * 48; const at = 6 + k * 9;
    s += text(c, colX[0] + 12, y + 2, r.k, { size: 10, font: 'mono', fill: C.fg35 });
    s += line(c, 80, y + 36, 1120, y + 36, { stroke: C.line });
    s += text(c, colX[0] + 12, y + 20, r.a, { size: 11.5, fill: r.pick === 'a' ? C.fg : C.fg55 });
    s += text(c, colX[1] + 12, y + 20, r.b, { size: 11.5, fill: r.pick === 'b' ? C.fg : C.fg55 });
    s += `<g style="animation:${show(css, P, `m${k}`, at)}">`
      + circle(c, colX[r.pick === 'a' ? 0 : 1] + colW[0] - 14, y + 16, 5, { fill: C.accent, stroke: 'none' })
      + text(c, colX[2] + 12, y + 20, r.m, { size: 11.5, fill: C.fg })
      + text(c, colX[2] + colW[2] - 12, y + 20, r.rule, { size: 9.5, font: 'mono', fill: C.accent, anchor: 'end' })
      + '</g>';
  });
  // audit line and undo
  const ay = top + 56 + t.rows.length * 48 + 14;
  s += `<g style="animation:${show(css, P, 'aud', 70)}">`
    + rect(c, 80, ay, 1040, 46, { stroke: C.line2, fill: C.fill })
    + text(c, 98, ay + 19, t.audit, { size: 12, fill: C.fg })
    + text(c, 98, ay + 36, t.audit2, { size: 10.5, font: 'mono', fill: C.fg55 })
    + '</g>';
  // undo: an arc over the headers from the merged column back to the two sources, label under the audit box
  const ux0 = colX[2] + colW[2] / 2; const ux1 = colX[0] + colW[0] + 50;
  s += `<g style="animation:${show(css, P, 'undo', 82)}">`
    + `<path d="M ${c.X(ux0)} ${top - 2} C ${c.X(ux0)} ${top - 30}, ${c.X(ux1)} ${top - 30}, ${c.X(ux1)} ${top - 2}" fill="none" stroke="${C.accent}" stroke-width="1" stroke-dasharray="4 4"/>`
    + `<polygon points="${c.X(ux1) - 4},${top - 10} ${c.X(ux1) + 4},${top - 10} ${c.X(ux1)},${top - 2}" fill="${C.accent}"/>`
    + text(c, 600, ay + 70, t.undo, { size: 11, font: 'mono', fill: C.accent, anchor: 'middle' })
    + '</g>';
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

const I = (x) => `⁦${x}⁩`;

export const STRINGS = {
  fr: {
    doors: {
      title: 'Un client, cinq portes d’entrée, une seule fiche',
      alt: 'Cinq portes à gauche, chacune avec une fiche brute : la caisse, « Benali Karim, 0661 23 45 67 », en arabe ; WhatsApp, « +213661234567, Karim B. » ; la boutique en ligne, « karim.benali@gmail.com, 00213 661 23 45 67 » ; l’application mobile, « K. Benali, 0661234567, Sétif » ; le commercial terrain, « Supérette El Hidhab, Karim, 06 61 23 45 67 ». Les cinq convergent vers une boîte de résolution : normaliser, rapprocher, noter, décider ; puis vers une fiche unique avec le téléphone +213 661 23 45 67 vérifié, le nom en deux écritures, l’e-mail, la wilaya, les cinq sources et la date de chaque passage.',
      doors: [
        { name: 'Caisse · magasin', raw1: 'بن علي كريم · ⁦0661 23 45 67⁩', raw2: 'saisi par Amel · arabe', when: '12/03/2026' },
        { name: 'WhatsApp', raw1: '+213661234567 · « Karim B. »', raw2: 'premier message · opt-in promos', when: '28/05/2026' },
        { name: 'Boutique en ligne', raw1: 'karim.benali@gmail.com', raw2: '00213 661 23 45 67 · Sétif', when: '03/09/2026' },
        { name: 'Application mobile', raw1: 'K. Benali · 0661234567', raw2: 'OTP vérifié · Sétif', when: '14/10/2026' },
        { name: 'Commercial terrain', raw1: 'Supérette El Hidhab · Karim', raw2: '06 61 23 45 67 · tournée mardi', when: '10/11/2026' },
      ],
      res: { label: 'Résolution', steps: ['1 · normaliser (+213…, nom, e-mail)', '2 · rapprocher (exact, puis approché)', '3 · noter la confiance', '4 · fusion auto · suggestion · revue'] },
      golden: { label: 'Fiche unique', id: 'client 00231 · créée 12/03/2026 · 5 sources', fields: [
        { k: 'téléphone', v: '+213 661 23 45 67 · vérifié', src: 'app · OTP' },
        { k: 'nom', v: 'Karim Benali · بن علي كريم', src: 'caisse + app' },
        { k: 'e-mail', v: 'karim.benali@gmail.com', src: 'boutique' },
        { k: 'wilaya · point de vente', v: 'Sétif · Supérette El Hidhab', src: 'terrain' },
        { k: 'canaux · consentements', v: 'WhatsApp promos : oui · SMS : non', src: 'WhatsApp' },
      ] },
      rule: 'Règle : chaque porte garde sa fiche brute et sa date ; la fiche unique est calculée à partir d’elles, jamais tapée, et le téléphone normalisé est la clé qu’on cherche en premier.',
    },
    merge: {
      title: 'Une fusion, champ par champ, et son retour arrière',
      alt: 'Trois colonnes : la fiche A créée à la caisse, la fiche B créée sur la boutique en ligne, et la fiche fusionnée. Pour chaque champ une règle choisit : le téléphone vérifié par OTP l’emporte ; le nom le plus complet l’emporte et l’autre écriture est gardée ; l’e-mail présent l’emporte ; l’adresse la plus récente l’emporte ; les points de fidélité s’additionnent ; les consentements prennent le plus restrictif. Une ligne de journal dit qui a fusionné, quand, et avec quel score. Une flèche de retour arrière rappelle que les deux fiches sources sont conservées et que la fusion se défait en un geste.',
      cols: [{ name: 'Fiche A · caisse', sub: 'créée 12/03/2026 · 14 achats' }, { name: 'Fiche B · boutique en ligne', sub: 'créée 03/09/2026 · 3 commandes' }, { name: 'Fiche fusionnée', sub: 'score 0,96 · fusion proposée, confirmée par Amel' }],
      rows: [
        { k: 'téléphone', a: '0661 23 45 67', b: '00213 661 23 45 67', pick: 'a', m: '+213 661 23 45 67 · vérifié', rule: 'normalisé · identique' },
        { k: 'nom', a: 'بن علي كريم', b: 'Karim Benali', pick: 'b', m: 'Karim Benali · بن علي كريم', rule: 'le plus complet + l’autre écriture' },
        { k: 'e-mail', a: '—', b: 'karim.benali@gmail.com', pick: 'b', m: 'karim.benali@gmail.com', rule: 'présent l’emporte' },
        { k: 'adresse', a: 'Cité El Hidhab, Sétif', b: 'Rue des Frères Meslem, Sétif', pick: 'b', m: 'Rue des Frères Meslem, Sétif', rule: 'la plus récente · l’autre gardée' },
        { k: 'points fidélité', a: '1 240', b: '310', pick: 'a', m: '1 550', rule: 'addition' },
        { k: 'consentements', a: 'SMS : oui', b: 'SMS : non · e-mail : oui', pick: 'b', m: 'SMS : non · e-mail : oui · WhatsApp : oui', rule: 'le plus restrictif par canal' },
      ],
      audit: 'Journal : fiches 00231 et 00587 fusionnées le 10/11/2026 à 14 h 12 par Amel (caisse 2) · score 0,96 · règle « téléphone identique après normalisation ».',
      audit2: 'les deux fiches sources sont conservées telles quelles, avec leur historique ; la fiche fusionnée pointe vers elles',
      undo: 'défusion en un geste : les sources n’ont jamais été modifiées',
    },
  },
  en: {
    doors: {
      title: 'One customer, five doors, one single record',
      alt: 'Five doors on the left, each with a raw record: the till, “Benali Karim, 0661 23 45 67”, in Arabic; WhatsApp, “+213661234567, Karim B.”; the online shop, “karim.benali@gmail.com, 00213 661 23 45 67”; the mobile app, “K. Benali, 0661234567, Sétif”; field sales, “Supérette El Hidhab, Karim, 06 61 23 45 67”. The five converge into a resolution box: normalise, match, score, decide; then into a single record with the verified phone +213 661 23 45 67, the name in both scripts, the e-mail, the wilaya, the five sources and the date of each visit.',
      doors: [
        { name: 'Till · shop', raw1: 'بن علي كريم · ⁦0661 23 45 67⁩', raw2: 'entered by Amel · Arabic', when: '12/03/2026' },
        { name: 'WhatsApp', raw1: '+213661234567 · “Karim B.”', raw2: 'first message · promo opt-in', when: '28/05/2026' },
        { name: 'Online shop', raw1: 'karim.benali@gmail.com', raw2: '00213 661 23 45 67 · Sétif', when: '03/09/2026' },
        { name: 'Mobile app', raw1: 'K. Benali · 0661234567', raw2: 'OTP verified · Sétif', when: '14/10/2026' },
        { name: 'Field sales', raw1: 'Supérette El Hidhab · Karim', raw2: '06 61 23 45 67 · Tuesday round', when: '10/11/2026' },
      ],
      res: { label: 'Resolution', steps: ['1 · normalise (+213…, name, e-mail)', '2 · match (exact, then approximate)', '3 · score the confidence', '4 · auto-merge · suggest · review'] },
      golden: { label: 'Single record', id: 'customer 00231 · created 12/03/2026 · 5 sources', fields: [
        { k: 'phone', v: '+213 661 23 45 67 · verified', src: 'app · OTP' },
        { k: 'name', v: 'Karim Benali · بن علي كريم', src: 'till + app' },
        { k: 'e-mail', v: 'karim.benali@gmail.com', src: 'shop' },
        { k: 'wilaya · outlet', v: 'Sétif · Supérette El Hidhab', src: 'field' },
        { k: 'channels · consents', v: 'WhatsApp promos: yes · SMS: no', src: 'WhatsApp' },
      ] },
      rule: 'Rule: every door keeps its raw record and its date; the single record is computed from them, never typed, and the normalised phone is the key looked up first.',
    },
    merge: {
      title: 'One merge, field by field, and its undo',
      alt: 'Three columns: record A created at the till, record B created on the online shop, and the merged record. For each field a rule picks: the OTP-verified phone wins; the most complete name wins and the other script is kept; the present e-mail wins; the most recent address wins; loyalty points add up; consents take the most restrictive. A log line says who merged, when, and with which score. An undo arrow recalls that both source records are kept and the merge is undone in one gesture.',
      cols: [{ name: 'Record A · till', sub: 'created 12/03/2026 · 14 purchases' }, { name: 'Record B · online shop', sub: 'created 03/09/2026 · 3 orders' }, { name: 'Merged record', sub: 'score 0.96 · merge suggested, confirmed by Amel' }],
      rows: [
        { k: 'phone', a: '0661 23 45 67', b: '00213 661 23 45 67', pick: 'a', m: '+213 661 23 45 67 · verified', rule: 'normalised · identical' },
        { k: 'name', a: 'بن علي كريم', b: 'Karim Benali', pick: 'b', m: 'Karim Benali · بن علي كريم', rule: 'most complete + other script' },
        { k: 'e-mail', a: '—', b: 'karim.benali@gmail.com', pick: 'b', m: 'karim.benali@gmail.com', rule: 'present wins' },
        { k: 'address', a: 'Cité El Hidhab, Sétif', b: 'Rue des Frères Meslem, Sétif', pick: 'b', m: 'Rue des Frères Meslem, Sétif', rule: 'most recent · other kept' },
        { k: 'loyalty points', a: '1,240', b: '310', pick: 'a', m: '1,550', rule: 'sum' },
        { k: 'consents', a: 'SMS: yes', b: 'SMS: no · e-mail: yes', pick: 'b', m: 'SMS: no · e-mail: yes · WhatsApp: yes', rule: 'most restrictive per channel' },
      ],
      audit: 'Log: records 00231 and 00587 merged on 10/11/2026 at 14:12 by Amel (till 2) · score 0.96 · rule “identical phone after normalisation”.',
      audit2: 'both source records are kept as they were, with their history; the merged record points to them',
      undo: 'unmerge in one gesture: the sources were never modified',
    },
  },
  ar: {
    doors: {
      title: 'زبون واحد، خمسة أبواب، بطاقة واحدة',
      alt: 'خمسة أبواب على اليمين، لكل منها بطاقة خام: الصندوق، «بن علي كريم، 0661 23 45 67» بالعربية؛ WhatsApp، «+213661234567، Karim B.»؛ المتجر الإلكتروني، «karim.benali@gmail.com، 00213 661 23 45 67»؛ التطبيق المحمول، «K. Benali، 0661234567، سطيف»؛ المندوب الميداني، «سوبيريت الهضاب، كريم، 06 61 23 45 67». الخمسة تتقارب نحو صندوق حل: تنميط، مطابقة، تنقيط، قرار؛ ثم نحو بطاقة واحدة بالهاتف المتحقَّق منه +213 661 23 45 67، والاسم بالكتابتين، والبريد، والولاية، والمصادر الخمسة وتاريخ كل مرور.',
      doors: [
        { name: 'الصندوق · المتجر', raw1: `بن علي كريم · ${I('0661 23 45 67')}`, raw2: 'أدخلته أمل · عربية', when: I('12/03/2026') },
        { name: 'WhatsApp', raw1: `${I('+213661234567')} · «${I('Karim B.')}»`, raw2: 'أول رسالة · موافقة على العروض', when: I('28/05/2026') },
        { name: 'المتجر الإلكتروني', raw1: I('karim.benali@gmail.com'), raw2: `${I('00213 661 23 45 67')} · سطيف`, when: I('03/09/2026') },
        { name: 'التطبيق المحمول', raw1: `${I('K. Benali')} · ${I('0661234567')}`, raw2: `${I('OTP')} مُتحقَّق منه · سطيف`, when: I('14/10/2026') },
        { name: 'المندوب الميداني', raw1: 'سوبيريت الهضاب · كريم', raw2: `${I('06 61 23 45 67')} · جولة الثلاثاء`, when: I('10/11/2026') },
      ],
      res: { label: 'الحل', steps: [`1 · تنميط (${I('+213…')}، اسم، بريد)`, '2 · مطابقة (تامة ثم تقريبية)', '3 · تنقيط الثقة', '4 · دمج آلي · اقتراح · مراجعة'] },
      golden: { label: 'البطاقة الواحدة', id: `زبون ${I('00231')} · أُنشئت ${I('12/03/2026')} · 5 مصادر`, fields: [
        { k: 'الهاتف', v: `${I('+213 661 23 45 67')} · مُتحقَّق منه`, src: `التطبيق · ${I('OTP')}` },
        { k: 'الاسم', v: `${I('Karim Benali')} · بن علي كريم`, src: 'الصندوق + التطبيق' },
        { k: 'البريد', v: I('karim.benali@gmail.com'), src: 'المتجر' },
        { k: 'الولاية · نقطة البيع', v: 'سطيف · سوبيريت الهضاب', src: 'الميدان' },
        { k: 'القنوات · الموافقات', v: `عروض ${I('WhatsApp')}: نعم · ${I('SMS')}: لا`, src: 'WhatsApp' },
      ] },
      rule: 'القاعدة: كل باب يحتفظ ببطاقته الخام وتاريخها؛ والبطاقة الواحدة تُحسب منها ولا تُكتب أبداً، والهاتف المنمَّط هو المفتاح الذي يُبحث عنه أولاً.',
    },
    merge: {
      title: 'دمج واحد، حقلاً حقلاً، والتراجع عنه',
      alt: 'ثلاثة أعمدة: البطاقة أ المنشأة عند الصندوق، والبطاقة ب المنشأة على المتجر الإلكتروني، والبطاقة المدموجة. لكل حقل قاعدة تختار: الهاتف المتحقَّق منه بـ OTP يفوز؛ الاسم الأكمل يفوز وتُحفظ الكتابة الأخرى؛ البريد الموجود يفوز؛ العنوان الأحدث يفوز؛ نقاط الولاء تُجمع؛ الموافقات تأخذ الأكثر تقييداً. سطر سجل يقول من دمج ومتى وبأي نقطة. وسهم تراجع يذكّر بأن البطاقتين المصدر محفوظتان وأن الدمج يُفسخ بحركة واحدة.',
      cols: [{ name: 'البطاقة أ · الصندوق', sub: `أُنشئت ${I('12/03/2026')} · 14 شراء` }, { name: 'البطاقة ب · المتجر الإلكتروني', sub: `أُنشئت ${I('03/09/2026')} · 3 طلبيات` }, { name: 'البطاقة المدموجة', sub: `نقطة ${I('0,96')} · دمج مقترَح، أكدته أمل` }],
      rows: [
        { k: 'الهاتف', a: I('0661 23 45 67'), b: I('00213 661 23 45 67'), pick: 'a', m: `${I('+213 661 23 45 67')} · مُتحقَّق منه`, rule: 'منمَّط · متطابق' },
        { k: 'الاسم', a: 'بن علي كريم', b: I('Karim Benali'), pick: 'b', m: `${I('Karim Benali')} · بن علي كريم`, rule: 'الأكمل + الكتابة الأخرى' },
        { k: 'البريد', a: '—', b: I('karim.benali@gmail.com'), pick: 'b', m: I('karim.benali@gmail.com'), rule: 'الموجود يفوز' },
        { k: 'العنوان', a: 'حي الهضاب، سطيف', b: 'شارع الإخوة مسلم، سطيف', pick: 'b', m: 'شارع الإخوة مسلم، سطيف', rule: 'الأحدث · الآخر محفوظ' },
        { k: 'نقاط الولاء', a: I('1 240'), b: I('310'), pick: 'a', m: I('1 550'), rule: 'جمع' },
        { k: 'الموافقات', a: `${I('SMS')}: نعم`, b: `${I('SMS')}: لا · بريد: نعم`, pick: 'b', m: `${I('SMS')}: لا · بريد: نعم · ${I('WhatsApp')}: نعم`, rule: 'الأكثر تقييداً لكل قناة' },
      ],
      audit: `السجل: دُمجت البطاقتان ${I('00231')} و${I('00587')} في ${I('10/11/2026')} الساعة ${I('14:12')} بواسطة أمل (الصندوق 2) · نقطة ${I('0,96')} · قاعدة «هاتف متطابق بعد التنميط».`,
      audit2: 'البطاقتان المصدر محفوظتان كما هما بتاريخهما؛ والبطاقة المدموجة تشير إليهما',
      undo: 'فسخ الدمج بحركة واحدة: المصادر لم تُعدَّل قط',
    },
  },
};
