// Bespoke animated figures for the 2027 "logiciel CRM en Algérie" post.
//  entonnoir(): one month of enquiries as a funnel of four bars that grow
//               (received, qualified, quoted, won) with the rate between
//               stages, and beside it where the other deals went; the three
//               "lost by silence" lines are highlighted and summed; three tiles.
//  pipeline():  the board of open deals: three columns by stage, each with its
//               count, gross amount, three sample deals (late next actions
//               highlighted) and its weighted amount; then two bars comparing
//               the gross pipeline with the weighted forecast; three tiles.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function growX(css, P, id, at, dur) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
const I = (x) => `⁦${x}⁩`;
const TINT = 'rgba(242,181,68,0.06)';
const NB = ' ';
const money = (n) => I(String(n).replace(/\B(?=(\d{3})+(?!\d))/g, NB));

function box(c, css, P, id, at, x, y, w, h, t, accent) {
  let s = `<g style="animation:${show(css, P, id, at)}">` + rect(c, x, y, w, h, { stroke: accent ? C.accent : C.line2, fill: accent ? TINT : C.fill })
    + text(c, x + 12, y + 20, t.title, { size: 10.5, fill: accent ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, y + 34, t.sub, { size: 8, font: 'mono', fill: C.fg55 });
  (t.rows || []).forEach((r, i) => { const yy = y + 54 + i * 18; s += text(c, x + 12, yy, r.l, { size: 9, fill: r.hot ? C.fg : C.fg70, weight: r.hot ? 500 : 300 }) + text(c, x + w - 12, yy, r.v, { size: 9.5, font: 'mono', fill: r.hot ? C.accent : C.fg, anchor: 'end', weight: r.hot ? 500 : 400 }); });
  return s + '</g>';
}
function tiles(c, css, P, ky, ts, at0) {
  let s = '';
  ts.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, at0 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? TINT : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  return s;
}
const motionOff = (P) => `@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"],svg rect[style*="${P}-"]{animation:none !important}}`;
const bar = (c, css, P, id, at, x, y, w, h, fill, rtl) => `<rect x="${c.RX(x, w)}" y="${y}" width="${w.toFixed(1)}" height="${h}" fill="${fill}" style="transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'};animation:${growX(css, P, id, at, 2.4)}"/>`;

export function entonnoir(t, rtl) {
  const c = ctx(rtl); const P = 'ce'; const css = []; const H = 590;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const fx = 80, maxW = 520, y0 = 166, step = 62; const top = t.stages[0].n;
  t.stages.forEach((st, i) => {
    const y = y0 + i * step; const w = Math.max(40, (st.n / top) * maxW); const at = 4 + i * 5; const last = i === t.stages.length - 1;
    s += `<g style="animation:${show(css, P, `l${i}`, at)}">` + text(c, fx, y - 6, st.t, { size: 10.5, fill: last ? C.accent : C.fg, weight: 500 }) + '</g>';
    s += bar(c, css, P, `b${i}`, at + 0.4, fx, y, w, 26, last ? C.accent : i === 0 ? 'rgba(255,255,255,0.30)' : C.fg, rtl);
    s += `<g style="animation:${show(css, P, `n${i}`, at + 2.8)}">` + text(c, fx + w + 12, y + 19, String(st.n), { size: 15, font: 'mono', fill: last ? C.accent : C.fg, weight: 500 }) + (st.rate ? text(c, fx + w + 54, y + 19, st.rate, { size: 9, font: 'mono', fill: C.fg55 }) : '') + '</g>';
  });
  // where the others went (right)
  const px = 690, pw = 430, py = 150; const ph = 54 + t.lost.rows.length * 18 + 6;
  s += box(c, css, P, 'lost', 22, px, py, pw, ph, t.lost, false);
  s += `<g style="animation:${show(css, P, 'sum', 30)}">` + rect(c, px, py + ph + 10, pw, 46, { stroke: C.accent, fill: TINT }) + text(c, px + 12, py + ph + 29, t.silence.t, { size: 11, fill: C.accent, weight: 500 }) + text(c, px + 12, py + ph + 45, t.silence.s, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>';
  const ky = Math.max(y0 + 3 * step + 26, py + ph + 56) + 18;
  s += tiles(c, css, P, ky, t.tiles, 36);
  s += text(c, 80, ky + 86, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export function pipeline(t, rtl) {
  const c = ctx(rtl); const P = 'cp'; const css = []; const H = 700;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const cw = 340, gx = 10, y0 = 150;
  t.cols.forEach((col, i) => {
    const x = 80 + i * (cw + gx); const at = 4 + i * 7;
    s += `<g style="animation:${show(css, P, `c${i}`, at)}">` + rect(c, x, y0, cw, 54, { stroke: C.line2, fill: C.fill }) + text(c, x + 12, y0 + 22, col.stage, { size: 11.5, fill: C.fg, weight: 500 })
      + text(c, x + cw - 12, y0 + 22, col.count, { size: 9.5, font: 'mono', fill: C.fg55, anchor: 'end' }) + text(c, x + 12, y0 + 42, t.gross, { size: 8.5, font: 'mono', fill: C.fg55 }) + text(c, x + cw - 12, y0 + 42, money(col.brut), { size: 10.5, font: 'mono', fill: C.fg, anchor: 'end' }) + '</g>';
    col.cards.forEach((k, j) => {
      const y = y0 + 62 + j * 58;
      s += `<g style="animation:${show(css, P, `k${i}${j}`, at + 1.5 + j * 1.2)}">` + rect(c, x, y, cw, 50, { stroke: k.hot ? C.accent : C.line, fill: k.hot ? TINT : 'rgba(255,255,255,0.03)' })
        + text(c, x + 12, y + 20, k.n, { size: 10, fill: C.fg, weight: 500 }) + text(c, x + cw - 12, y + 20, money(k.m), { size: 10, font: 'mono', fill: C.fg, anchor: 'end' })
        + text(c, x + 12, y + 38, k.a, { size: 8.5, font: 'mono', fill: k.hot ? C.accent : C.fg55 }) + '</g>';
    });
    const fy = y0 + 62 + 3 * 58;
    s += `<g style="animation:${show(css, P, `f${i}`, at + 5.5)}">` + rect(c, x, fy, cw, 32, { stroke: C.fg, fill: 'rgba(255,255,255,0.07)' }) + text(c, x + 12, fy + 21, col.prob, { size: 9, font: 'mono', fill: C.fg70 }) + text(c, x + cw - 12, fy + 21, money(col.pond), { size: 11, font: 'mono', fill: C.fg, anchor: 'end', weight: 500 }) + '</g>';
  });
  // gross pipeline against weighted forecast
  const by = y0 + 62 + 3 * 58 + 32 + 22; const bw = 700; const total = t.total.brut;
  s += `<g style="animation:${show(css, P, 'bl', 28)}">` + text(c, 80, by + 13, t.total.l1, { size: 10, fill: C.fg70 }) + text(c, 80, by + 41, t.total.l2, { size: 10, fill: C.accent, weight: 500 }) + '</g>';
  s += bar(c, css, P, 'tb', 29, 300, by, bw, 18, 'rgba(255,255,255,0.30)', rtl) + bar(c, css, P, 'tp', 32, 300, by + 28, bw * (t.total.pond / total), 18, C.accent, rtl);
  s += `<g style="animation:${show(css, P, 'bv', 34.5)}">` + text(c, 300 + bw + 12, by + 14, money(total), { size: 11, font: 'mono', fill: C.fg }) + text(c, 300 + bw * (t.total.pond / total) + 12, by + 42, money(t.total.pond), { size: 11, font: 'mono', fill: C.accent, weight: 500 }) + '</g>';
  const ky = by + 66;
  s += tiles(c, css, P, ky, t.tiles, 38);
  s += text(c, 80, ky + 86, t.rule, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.rule2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

const FUNNEL = [100, 46, 28, 12];
const LOST = [31, 23, 11, 7, 9, 4, 3];
const COLS = [{ brut: 13680000, pond: 3420000, m: [620000, 1450000, 280000] }, { brut: 13020000, pond: 5208000, m: [940000, 510000, 1800000] }, { brut: 9180000, pond: 6426000, m: [760000, 1200000, 430000] }];
const TOTAL = { brut: 35880000, pond: 15054000 };

export const STRINGS = {
  fr: {
    entonnoir: {
      title: 'Un mois de demandes : cent reçues, douze gagnées, et où partent les autres',
      alt: 'Entonnoir d’un mois : 100 demandes reçues, 46 qualifiées, 28 devis envoyés, 12 affaires gagnées. Les 88 autres : 31 jamais rappelées à temps, 23 hors cible, 11 qualifiées puis laissées sans suite, 7 reportées par le client, 9 devis jamais relancés, 4 perdues sur le prix, 3 sur le délai. 51 des 88 ont été perdues sans que personne ne dise non.',
      header: 'Exemple construit · distributeur d’équipements, six commerciaux · un mois · demandes reçues par téléphone, WhatsApp, site et salons',
      stages: [{ t: 'Demandes reçues', n: FUNNEL[0] }, { t: 'Qualifiées', n: FUNNEL[1], rate: '46 % des demandes' }, { t: 'Devis envoyés', n: FUNNEL[2], rate: '61 % des qualifiées' }, { t: 'Gagnées', n: FUNNEL[3], rate: '43 % des devis' }],
      lost: { title: 'Où partent les 88 autres', sub: 'chaque affaire fermée porte un motif', rows: [{ l: 'Jamais rappelées à temps', v: String(LOST[0]), hot: true }, { l: 'Hors cible', v: String(LOST[1]) }, { l: 'Qualifiées, puis laissées sans suite', v: String(LOST[2]), hot: true }, { l: 'Reportées par le client', v: String(LOST[3]) }, { l: 'Devis envoyés, jamais relancés', v: String(LOST[4]), hot: true }, { l: 'Perdues sur le prix', v: String(LOST[5]) }, { l: 'Perdues sur le délai', v: String(LOST[6]) }] },
      silence: { t: '51 perdues sans que personne ne dise non', s: '31 + 11 + 9 : oubli, pas refus' },
      tiles: [
        { big: I('12 %'), l1: 'des demandes deviennent une vente', l2: '100 reçues, 46 qualifiées, 28 devis, 12 gagnées' },
        { big: '51 sur 88', l1: 'perdues par silence, pas par refus', l2: 'non rappelées, sans suite, devis non relancés', hot: true },
        { big: '1 prochaine action', l1: 'datée, sur chaque affaire ouverte', l2: 'c’est la seule règle qui change ce tableau' },
      ],
      rule: 'Un CRM ne fait pas vendre mieux à la place des commerciaux : il empêche de perdre par oubli',
      rule2: 'les affaires que personne n’a refusées. Dans l’exemple, c’est plus d’une affaire perdue sur deux.',
      note: 'Exemple construit · nombres et motifs sont ceux de l’exemple ; les vôtres apparaissent après un mois de motifs saisis.',
    },
    pipeline: {
      title: 'Le tableau des affaires : 35,9 millions ouverts, 15,1 millions attendus',
      alt: 'Tableau des affaires ouvertes en trois colonnes. Qualifié : 36 affaires, 13 680 000 dinars, probabilité 25 %, pondéré 3 420 000. Devis envoyé : 31 affaires, 13 020 000, 40 %, pondéré 5 208 000. Négociation : 18 affaires, 9 180 000, 70 %, pondéré 6 426 000. Trois affaires sont en retard : une sans prochaine action et deux relances dépassées. Pipeline brut 35 880 000 dinars, prévision pondérée 15 054 000.',
      header: 'Exemple construit · six commerciaux · affaires ouvertes ce dimanche matin · montants en dinars',
      gross: 'montant des affaires',
      cols: [
        { stage: 'Qualifié', count: '36 affaires', brut: COLS[0].brut, prob: 'probabilité 25 % · pondéré', pond: COLS[0].pond, cards: [{ n: 'Clinique A.', m: COLS[0].m[0], a: 'rappeler mardi' }, { n: 'Promoteur B.', m: COLS[0].m[1], a: 'visite le 21' }, { n: 'École C.', m: COLS[0].m[2], a: 'aucune prochaine action', hot: true }] },
        { stage: 'Devis envoyé', count: '31 affaires', brut: COLS[1].brut, prob: 'probabilité 40 % · pondéré', pond: COLS[1].pond, cards: [{ n: 'Hôtel D.', m: COLS[1].m[0], a: 'relance à J+3, demain' }, { n: 'Laboratoire E.', m: COLS[1].m[1], a: 'relance en retard de 6 jours', hot: true }, { n: 'Usine F.', m: COLS[1].m[2], a: 'réponse attendue le 20' }] },
        { stage: 'Négociation', count: '18 affaires', brut: COLS[2].brut, prob: 'probabilité 70 % · pondéré', pond: COLS[2].pond, cards: [{ n: 'Grossiste G.', m: COLS[2].m[0], a: 'remise à faire valider' }, { n: 'Clinique H.', m: COLS[2].m[1], a: 'signature jeudi' }, { n: 'Transporteur I.', m: COLS[2].m[2], a: 'rappel en retard de 2 jours', hot: true }] },
      ],
      total: { ...TOTAL, l1: 'Pipeline brut', l2: 'Prévision pondérée' },
      tiles: [
        { big: '35,9 millions', l1: 'de pipeline brut : ce que valent les affaires ouvertes', l2: 'ce n’est pas ce qui va rentrer' },
        { big: '15,1 millions', l1: 'de prévision, chaque affaire pondérée par son étape', l2: '25, 40, 70 % : vos taux, mesurés sur vos affaires', hot: true },
        { big: '3 affaires en retard', l1: 'vues du gérant avant qu’elles ne soient perdues', l2: 'une sans prochaine action, deux relances dépassées' },
      ],
      rule: 'Le gérant ne demande plus « où en est-on ? » : il lit trois colonnes, ce qui est en retard,',
      rule2: 'et un seul chiffre pour le mois prochain, qui se met à jour par le travail des commerciaux.',
      note: 'Exemple construit · clients, montants et probabilités sont ceux de l’exemple.',
    },
  },
  en: {
    entonnoir: {
      title: 'One month of enquiries: a hundred received, twelve won, and where the others go',
      alt: 'Funnel for one month: 100 enquiries received, 46 qualified, 28 quotations sent, 12 deals won. The other 88: 31 never called back in time, 23 off target, 11 qualified then left with no follow-up, 7 postponed by the customer, 9 quotations never followed up, 4 lost on price, 3 on lead time. 51 of the 88 were lost without anyone saying no.',
      header: 'Constructed example · equipment distributor, six salespeople · one month · enquiries by phone, WhatsApp, website and trade shows',
      stages: [{ t: 'Enquiries received', n: FUNNEL[0] }, { t: 'Qualified', n: FUNNEL[1], rate: '46 % of enquiries' }, { t: 'Quotations sent', n: FUNNEL[2], rate: '61 % of qualified' }, { t: 'Won', n: FUNNEL[3], rate: '43 % of quotations' }],
      lost: { title: 'Where the other 88 go', sub: 'every closed deal carries a reason', rows: [{ l: 'Never called back in time', v: String(LOST[0]), hot: true }, { l: 'Off target', v: String(LOST[1]) }, { l: 'Qualified, then left with no follow-up', v: String(LOST[2]), hot: true }, { l: 'Postponed by the customer', v: String(LOST[3]) }, { l: 'Quotations sent, never followed up', v: String(LOST[4]), hot: true }, { l: 'Lost on price', v: String(LOST[5]) }, { l: 'Lost on lead time', v: String(LOST[6]) }] },
      silence: { t: '51 lost without anyone saying no', s: '31 + 11 + 9: forgotten, not refused' },
      tiles: [
        { big: I('12 %'), l1: 'of enquiries become a sale', l2: '100 received, 46 qualified, 28 quoted, 12 won' },
        { big: '51 out of 88', l1: 'lost through silence, not refusal', l2: 'not called back, no follow-up, quotes not chased', hot: true },
        { big: '1 next action', l1: 'dated, on every open deal', l2: 'it is the only rule that changes this picture' },
      ],
      rule: 'A CRM does not sell better in the salespeople’s place: it stops the company losing through oversight',
      rule2: 'the deals nobody refused. In the example, that is more than one lost deal in two.',
      note: 'Constructed example · numbers and reasons belong to the example; yours appear after a month of recorded reasons.',
    },
    pipeline: {
      title: 'The deal board: 35.9 million open, 15.1 million expected',
      alt: 'Board of open deals in three columns. Qualified: 36 deals, 13,680,000 dinars, probability 25 %, weighted 3,420,000. Quotation sent: 31 deals, 13,020,000, 40 %, weighted 5,208,000. Negotiation: 18 deals, 9,180,000, 70 %, weighted 6,426,000. Three deals are late: one with no next action and two overdue follow-ups. Gross pipeline 35,880,000 dinars, weighted forecast 15,054,000.',
      header: 'Constructed example · six salespeople · deals open this Sunday morning · amounts in dinars',
      gross: 'value of the deals',
      cols: [
        { stage: 'Qualified', count: '36 deals', brut: COLS[0].brut, prob: 'probability 25 % · weighted', pond: COLS[0].pond, cards: [{ n: 'Clinic A.', m: COLS[0].m[0], a: 'call back Tuesday' }, { n: 'Developer B.', m: COLS[0].m[1], a: 'visit on the 21st' }, { n: 'School C.', m: COLS[0].m[2], a: 'no next action', hot: true }] },
        { stage: 'Quotation sent', count: '31 deals', brut: COLS[1].brut, prob: 'probability 40 % · weighted', pond: COLS[1].pond, cards: [{ n: 'Hotel D.', m: COLS[1].m[0], a: 'follow-up at D+3, tomorrow' }, { n: 'Laboratory E.', m: COLS[1].m[1], a: 'follow-up 6 days late', hot: true }, { n: 'Factory F.', m: COLS[1].m[2], a: 'answer expected on the 20th' }] },
        { stage: 'Negotiation', count: '18 deals', brut: COLS[2].brut, prob: 'probability 70 % · weighted', pond: COLS[2].pond, cards: [{ n: 'Wholesaler G.', m: COLS[2].m[0], a: 'discount to be approved' }, { n: 'Clinic H.', m: COLS[2].m[1], a: 'signature on Thursday' }, { n: 'Carrier I.', m: COLS[2].m[2], a: 'call-back 2 days late', hot: true }] },
      ],
      total: { ...TOTAL, l1: 'Gross pipeline', l2: 'Weighted forecast' },
      tiles: [
        { big: '35.9 million', l1: 'of gross pipeline: what the open deals are worth', l2: 'it is not what will come in' },
        { big: '15.1 million', l1: 'of forecast, each deal weighted by its stage', l2: '25, 40, 70 %: your rates, measured on your deals', hot: true },
        { big: '3 deals late', l1: 'seen by the manager before they are lost', l2: 'one with no next action, two overdue follow-ups' },
      ],
      rule: 'The manager no longer asks “where are we?”: they read three columns, what is late,',
      rule2: 'and one figure for next month, kept up to date by the salespeople’s own work.',
      note: 'Constructed example · customers, amounts and probabilities belong to the example.',
    },
  },
  ar: {
    entonnoir: {
      title: 'شهر من الطلبات: مئة وصلت، اثنتا عشرة رُبحت، وأين تذهب البقية',
      alt: 'قمع شهر: 100 طلب وصل، 46 مؤهَّلاً، 28 عرض سعر أُرسل، 12 صفقة رُبحت. الـ 88 الأخرى: 31 لم يُعاود الاتصال بها في الوقت، 23 خارج الهدف، 11 مؤهَّلة ثم تُركت دون متابعة، 7 أجّلها الزبون، 9 عروض سعر لم تُتابَع قط، 4 ضاعت بسبب السعر، 3 بسبب الأجل. 51 من 88 ضاعت دون أن يقول أحد لا.',
      header: 'مثال مركَّب · موزّع تجهيزات، ستة بائعين · شهر واحد · طلبات عبر الهاتف وواتساب والموقع والمعارض',
      stages: [{ t: 'الطلبات الواردة', n: FUNNEL[0] }, { t: 'المؤهَّلة', n: FUNNEL[1], rate: `${I('46 %')} من الطلبات` }, { t: 'عروض السعر المرسَلة', n: FUNNEL[2], rate: `${I('61 %')} من المؤهَّلة` }, { t: 'الرابحة', n: FUNNEL[3], rate: `${I('43 %')} من العروض` }],
      lost: { title: 'أين تذهب الـ 88 الأخرى', sub: 'كل صفقة مغلقة تحمل سبباً', rows: [{ l: 'لم يُعاود الاتصال بها في الوقت', v: String(LOST[0]), hot: true }, { l: 'خارج الهدف', v: String(LOST[1]) }, { l: 'مؤهَّلة ثم تُركت دون متابعة', v: String(LOST[2]), hot: true }, { l: 'أجّلها الزبون', v: String(LOST[3]) }, { l: 'عروض سعر لم تُتابَع قط', v: String(LOST[4]), hot: true }, { l: 'ضاعت بسبب السعر', v: String(LOST[5]) }, { l: 'ضاعت بسبب الأجل', v: String(LOST[6]) }] },
      silence: { t: '51 ضاعت دون أن يقول أحد لا', s: `${I('31 + 11 + 9')}: نسيان لا رفض` },
      tiles: [
        { big: I('12 %'), l1: 'من الطلبات تصير بيعاً', l2: '100 واردة، 46 مؤهَّلة، 28 عرضاً، 12 رابحة' },
        { big: '51 من 88', l1: 'ضاعت بالصمت لا بالرفض', l2: 'دون معاودة، دون متابعة، وعروض لم تُتابَع', hot: true },
        { big: 'خطوة موالية واحدة', l1: 'بتاريخ، على كل صفقة مفتوحة', l2: 'هي القاعدة الوحيدة التي تغيّر هذه اللوحة' },
      ],
      rule: 'برنامج الزبائن لا يبيع أحسن مكان البائعين: يمنع أن تضيع بالنسيان',
      rule2: 'الصفقات التي لم يرفضها أحد. وفي المثال هي أكثر من صفقة ضائعة من اثنتين.',
      note: 'مثال مركَّب · الأعداد والأسباب خاصة بالمثال؛ وأعدادكم تظهر بعد شهر من تدوين الأسباب.',
    },
    pipeline: {
      title: 'لوحة الصفقات: 35,9 مليون مفتوحة، و15,1 مليون منتظَرة',
      alt: 'لوحة الصفقات المفتوحة في ثلاثة أعمدة. مؤهَّلة: 36 صفقة، 13 680 000 دينار، احتمال 25 %، مرجَّح 3 420 000. عرض سعر مرسَل: 31 صفقة، 13 020 000، 40 %، مرجَّح 5 208 000. تفاوض: 18 صفقة، 9 180 000، 70 %، مرجَّح 6 426 000. ثلاث صفقات متأخرة: واحدة دون خطوة موالية ومتابعتان فات أجلهما. المجموع الخام 35 880 000 دينار، والتوقع المرجَّح 15 054 000.',
      header: 'مثال مركَّب · ستة بائعين · الصفقات المفتوحة صباح هذا الأحد · المبالغ بالدينار',
      gross: 'قيمة الصفقات',
      cols: [
        { stage: 'مؤهَّلة', count: '36 صفقة', brut: COLS[0].brut, prob: `احتمال ${I('25 %')} · المرجَّح`, pond: COLS[0].pond, cards: [{ n: 'العيادة أ.', m: COLS[0].m[0], a: 'معاودة الاتصال الثلاثاء' }, { n: 'المرقّي ب.', m: COLS[0].m[1], a: 'زيارة يوم 21' }, { n: 'المدرسة ج.', m: COLS[0].m[2], a: 'لا خطوة موالية', hot: true }] },
        { stage: 'عرض سعر مرسَل', count: '31 صفقة', brut: COLS[1].brut, prob: `احتمال ${I('40 %')} · المرجَّح`, pond: COLS[1].pond, cards: [{ n: 'الفندق د.', m: COLS[1].m[0], a: 'متابعة بعد 3 أيام، غداً' }, { n: 'المخبر هـ.', m: COLS[1].m[1], a: 'متابعة متأخرة 6 أيام', hot: true }, { n: 'المصنع و.', m: COLS[1].m[2], a: 'الجواب منتظَر يوم 20' }] },
        { stage: 'تفاوض', count: '18 صفقة', brut: COLS[2].brut, prob: `احتمال ${I('70 %')} · المرجَّح`, pond: COLS[2].pond, cards: [{ n: 'تاجر الجملة ز.', m: COLS[2].m[0], a: 'تخفيض ينتظر المصادقة' }, { n: 'العيادة ح.', m: COLS[2].m[1], a: 'التوقيع يوم الخميس' }, { n: 'الناقل ط.', m: COLS[2].m[2], a: 'معاودة متأخرة يومين', hot: true }] },
      ],
      total: { ...TOTAL, l1: 'المجموع الخام', l2: 'التوقع المرجَّح' },
      tiles: [
        { big: '35,9 مليون', l1: 'مجموع خام: ما تساويه الصفقات المفتوحة', l2: 'ليس هو ما سيدخل' },
        { big: '15,1 مليون', l1: 'توقع، كل صفقة مرجَّحة بمرحلتها', l2: `${I('25, 40, 70 %')}: نسبكم، مقاسة على صفقاتكم`, hot: true },
        { big: '3 صفقات متأخرة', l1: 'يراها المسيّر قبل أن تضيع', l2: 'واحدة دون خطوة موالية، ومتابعتان فات أجلهما' },
      ],
      rule: 'المسيّر لم يعد يسأل «أين وصلنا؟»: يقرأ ثلاثة أعمدة، وما هو متأخر،',
      rule2: 'ورقماً واحداً للشهر القادم، يتحدَّث بعمل البائعين أنفسهم.',
      note: 'مثال مركَّب · الزبائن والمبالغ والاحتمالات خاصة بالمثال.',
    },
  },
};
