// Bespoke animated figures for the 2027 back-office / ERP agent post.
//  actions():  one request from the manager becomes four tool calls, each
//              passing through the same gate: a read executed, a write under
//              the limit executed, a write above the limit sent for approval,
//              a tool the role does not have refused. Cards appear in sequence.
//  toolcard(): one tool as the model sees it (name, description, typed
//              parameters) and as the server checks it regardless of what the
//              model sent (role, limit, ownership, idempotency, preview, log).
// CSS-only animation (prefers-reduced-motion disables it); base attributes are
// the finished state for the JPG rasteriser.
import { W, C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 10;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }

export function actions(t, rtl) {
  const c = ctx(rtl); const P = 'ea'; const css = []; const H = 565;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  // the request
  s += rect(c, 80, 96, 1040, 56, { stroke: C.line2, fill: C.fill });
  s += text(c, 98, 118, t.reqLabel, { size: 11, font: 'mono', fill: C.fg35, letter: 2, upper: true });
  s += text(c, 98, 140, t.req, { size: 14.5, fill: C.fg });
  // the gate
  const gy = 176;
  s += text(c, 80, gy + 14, t.gateLabel, { size: 11, font: 'mono', fill: C.fg35, letter: 2, upper: true });
  s += text(c, 1120, gy + 14, t.gate, { size: 12, fill: C.fg55, anchor: 'end' });
  s += line(c, 80, gy + 26, 1120, gy + 26, { stroke: C.line2 });
  // four calls
  const cw = 250; const gap = 13; const cy = 220; const ch = 250;
  t.calls.forEach((k, i) => {
    const x = 80 + i * (cw + gap); const at = 10 + i * 17;
    const col = k.verdict === 'ok' ? C.fg : k.verdict === 'wait' ? C.accent : C.fg35;
    const stroke = k.verdict === 'wait' ? C.accent : k.verdict === 'no' ? C.line : C.line2;
    s += `<g style="animation:${show(css, P, `c${i}`, at)}">`
      + rect(c, x, cy, cw, ch, { stroke, fill: k.verdict === 'wait' ? 'rgba(242,181,68,0.06)' : 'none' })
      + text(c, x + 14, cy + 24, k.n, { size: 11, font: 'mono', fill: C.fg35, letter: 2 })
      + text(c, x + cw - 14, cy + 24, k.kind, { size: 11, font: 'mono', fill: k.write ? C.accent : C.fg55, anchor: 'end' })
      + text(c, x + 14, cy + 54, k.tool, { size: 13.5, font: 'mono', fill: C.fg })
      + k.args.map((a, j) => text(c, x + 14, cy + 78 + j * 18, a, { size: 11.5, font: 'mono', fill: C.fg55 })).join('')
      + line(c, x + 14, cy + 142, x + cw - 14, cy + 142, { stroke: C.line })
      + k.checks.map((ck, j) => text(c, x + 14, cy + 164 + j * 18, ck, { size: 11.5, fill: C.fg70 })).join('')
      + '</g>';
    // verdict badge
    const vy = cy + ch - 26;
    s += `<g style="animation:${show(css, P, `v${i}`, at + 7)}">` + rect(c, x + 14, vy - 16, cw - 28, 30, { fill: k.verdict === 'wait' ? C.accent : k.verdict === 'ok' ? 'rgba(255,255,255,0.9)' : 'none', stroke: k.verdict === 'no' ? C.fg35 : 'none' }) + text(c, x + cw / 2, vy + 4, k.verdictLabel, { size: 12.5, fill: k.verdict === 'no' ? C.fg55 : C.bg, anchor: 'middle' }) + '</g>';
  });
  // totals
  const ty = cy + ch + 40;
  s += `<g style="animation:${show(css, P, 'tot', 84)}">` + text(c, 80, ty, t.total, { size: 14, fill: C.fg }) + text(c, 80, ty + 22, t.total2, { size: 12, fill: C.fg55 }) + '</g>';
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

export function toolcard(t, rtl) {
  const c = ctx(rtl); const P = 'et'; const css = []; const H = 540;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  // left: what the model sees
  const lx = 80; const ly = 100; const lw = 480; const lh = 400;
  s += rect(c, lx, ly, lw, lh, { stroke: C.line2 });
  s += text(c, lx + 18, ly + 28, t.leftLabel, { size: 11, font: 'mono', fill: C.fg35, letter: 2, upper: true });
  s += text(c, lx + 18, ly + 62, t.tool.name, { size: 17, font: 'mono', fill: C.fg });
  t.tool.desc.forEach((d, i) => { s += text(c, lx + 18, ly + 88 + i * 18, d, { size: 12.5, fill: C.fg70 }); });
  s += line(c, lx + 18, ly + 150, lx + lw - 18, ly + 150, { stroke: C.line });
  s += text(c, lx + 18, ly + 174, t.tool.paramsLabel, { size: 11, font: 'mono', fill: C.fg35 });
  t.tool.params.forEach((p, i) => {
    const y = ly + 200 + i * 56; const at = 8 + i * 8;
    s += `<g style="animation:${show(css, P, `p${i}`, at)}">` + text(c, lx + 18, y, p.k, { size: 13.5, font: 'mono', fill: C.fg }) + text(c, lx + 230, y, p.type, { size: 12, font: 'mono', fill: C.accent }) + text(c, lx + 18, y + 20, p.d, { size: 11.5, fill: C.fg55 }) + '</g>';
  });
  // arrow
  s += `<g style="animation:${show(css, P, 'arr', 36)}">` + line(c, lx + lw + 10, ly + lh / 2, 620, ly + lh / 2, { stroke: C.accent, sw: 1.5 }) + text(c, (lx + lw + 10 + 620) / 2, ly + lh / 2 - 10, t.arrow, { size: 10.5, font: 'mono', fill: C.accent, anchor: 'middle' }) + '</g>';
  // right: what the server checks
  const rx = 640; const rw = 480;
  s += text(c, rx, ly + 14, t.rightLabel, { size: 11, font: 'mono', fill: C.fg35, letter: 2, upper: true });
  t.checks.forEach((k, i) => {
    const y = ly + 32 + i * 60; const at = 40 + i * 8; const wait = k.state === 'wait';
    s += rect(c, rx, y, rw, 50, { stroke: wait ? C.accent : C.line, fill: wait ? 'rgba(242,181,68,0.06)' : 'none' });
    s += text(c, rx + 48, y + 21, k.rule, { size: 13.5, fill: C.fg });
    s += text(c, rx + 48, y + 39, k.detail, { size: 11.5, font: 'mono', fill: wait ? C.accent : C.fg55 });
    const kx = c.X(rx + 24); const ky = y + 25;
    s += `<g style="animation:${show(css, P, `k${i}`, at)}">` + circle(c, rx + 24, ky, 10, { fill: wait ? C.accent : C.fg, stroke: 'none' })
      + (wait ? `<path d="M ${kx} ${ky - 5} L ${kx} ${ky + 1} M ${kx} ${ky + 4} L ${kx} ${ky + 5}" stroke="${C.bg}" stroke-width="2.2" fill="none"/>` : `<path d="M ${kx - 4.5} ${ky} L ${kx - 1.5} ${ky + 3} L ${kx + 4.5} ${ky - 3.5}" stroke="${C.bg}" stroke-width="2" fill="none"/>`) + '</g>';
  });
  s += `<g style="animation:${show(css, P, 'ft', 92)}">` + text(c, rx, ly + 32 + t.checks.length * 60 + 22, t.foot, { size: 12.5, fill: C.fg55 }) + '</g>';
  s += `<style>${css.join('')}@media (prefers-reduced-motion: reduce){svg g[style*="${P}-"]{animation:none !important}}</style>`;
  return s + '</svg>';
}

const I = (x) => `⁦${x}⁩`;
const N = ' ';

export const STRINGS = {
  fr: {
    actions: {
      title: 'Une demande du gérant devient quatre appels d’outils, et chacun passe par la même porte',
      alt: 'Le gérant demande de relancer les clients en retard de plus de trente jours et de préparer les avoirs des retours de la semaine. L’agent appelle quatre outils : lire les clients en retard, exécuté ; envoyer les relances WhatsApp, vingt-trois sous le plafond de cinquante par jour, exécuté ; créer un avoir de 12 400 dinars, au-dessus du plafond de 10 000, envoyé au gérant pour approbation ; supprimer une facture, outil que son rôle n’a pas, refusé. Chaque appel a une ligne de journal.',
      reqLabel: 'Demande du gérant, 9 h 12', req: '« Relance les clients en retard de plus de 30 jours et prépare les avoirs pour les retours de la semaine. »',
      gateLabel: 'La porte, identique pour chaque appel', gate: 'rôle de l’agent → paramètres vérifiés → plafond → idempotence → journal',
      calls: [
        { n: '01', kind: 'lecture', write: false, tool: 'lister_clients_en_retard', args: ['jours_min : 30', 'agence : toutes'], checks: ['rôle : lecture autorisée', '23 clients, 1 840 000 DA', 'journal : lecture écrite'], verdict: 'ok', verdictLabel: 'exécuté' },
        { n: '02', kind: 'écriture', write: true, tool: 'envoyer_relance', args: ['clients : 23', 'gabarit : relance_30j', 'canal : WhatsApp'], checks: ['plafond : 23 ≤ 50 par jour', 'gabarit approuvé, pas de texte libre', 'clé d’idempotence : relance-2027-03-16'], verdict: 'ok', verdictLabel: 'exécuté · 23 envois' },
        { n: '03', kind: 'écriture', write: true, tool: 'creer_avoir', args: ['facture : FA-2027-0391', `montant : 12${N}400 DA`, 'motif : retour'], checks: ['facture existe, client vérifié', `plafond : 12${N}400 > 10${N}000`, 'aperçu envoyé au gérant'], verdict: 'wait', verdictLabel: 'en attente d’approbation' },
        { n: '04', kind: 'écriture', write: true, tool: 'supprimer_facture', args: ['facture : FA-2027-0388'], checks: ['outil absent du rôle « agent »', 'aucun paramètre n’est lu', 'tentative écrite au journal'], verdict: 'no', verdictLabel: 'refusé' },
      ],
      total: 'Quatre appels : une lecture et une écriture exécutées, une écriture en attente du gérant, une refusée.',
      total2: 'Aucune action sans ligne de journal, refus compris ; le gérant reçoit l’aperçu de l’avoir sur son téléphone et approuve d’une touche.',
    },
    toolcard: {
      title: 'Un outil, tel que l’agent le voit et tel que le serveur le vérifie',
      alt: 'À gauche, la fiche de l’outil créer un avoir telle que le modèle la lit : nom, description, et trois paramètres typés, numéro de facture, montant, motif parmi trois valeurs. À droite, six contrôles que le serveur applique quoi que le modèle envoie : rôle autorisé, facture existante et du bon client, montant sous le plafond sinon approbation, clé d’idempotence, aperçu avant exécution, ligne de journal.',
      leftLabel: 'Ce que le modèle lit',
      tool: { name: 'creer_avoir', desc: ['Crée un avoir sur une facture existante.', 'À utiliser seulement pour un retour ou une erreur', 'de prix constatés ; ne jamais deviner le montant.'], paramsLabel: 'paramètres (schéma strict)', params: [
        { k: 'facture', type: 'string, obligatoire', d: 'numéro exact, ex. FA-2027-0391' },
        { k: 'montant', type: 'number, obligatoire', d: 'en dinars ; doit venir d’une ligne de la facture' },
        { k: 'motif', type: 'enum : retour | erreur_prix | geste', d: 'trois valeurs, rien d’autre' },
      ] },
      arrow: 'appel reçu',
      rightLabel: 'Ce que le serveur vérifie, quoi que le modèle envoie',
      checks: [
        { rule: 'Le rôle « agent » a-t-il cet outil ?', detail: 'oui : écriture, sous plafond', state: 'ok' },
        { rule: 'La facture existe-t-elle, pour ce client ?', detail: 'FA-2027-0391 · client 4 812 · ouverte', state: 'ok' },
        { rule: 'Le montant est-il dans la facture et sous le plafond ?', detail: `12${N}400 DA dans la facture · > 10${N}000 → approbation`, state: 'wait' },
        { rule: 'Cet appel a-t-il déjà été exécuté ?', detail: 'clé FA-2027-0391/retour : première fois', state: 'ok' },
        { rule: 'Aperçu avant exécution', detail: 'l’avoir est montré, rien n’est écrit encore', state: 'ok' },
        { rule: 'Ligne de journal', detail: 'agent · 9 h 12 · demandé par le gérant · avant/après', state: 'ok' },
      ],
      foot: 'Le modèle propose ; le serveur dispose. Un paramètre deviné par le modèle est arrêté ici, pas chez le client.',
    },
  },
  en: {
    actions: {
      title: 'One request from the manager becomes four tool calls, and each goes through the same gate',
      alt: 'The manager asks to chase customers more than thirty days late and prepare credit notes for the week’s returns. The agent calls four tools: list late customers, executed; send WhatsApp reminders, twenty-three under the limit of fifty a day, executed; create a credit note of 12,400 dinars, above the 10,000 limit, sent to the manager for approval; delete an invoice, a tool its role does not have, refused. Every call has a log line.',
      reqLabel: 'Manager’s request, 9:12', req: '“Chase the customers more than 30 days late and prepare the credit notes for this week’s returns.”',
      gateLabel: 'The gate, identical for every call', gate: 'agent role → parameters checked → limit → idempotency → log',
      calls: [
        { n: '01', kind: 'read', write: false, tool: 'list_late_customers', args: ['min_days: 30', 'branch: all'], checks: ['role: read allowed', '23 customers, 1,840,000 DA', 'log: read written'], verdict: 'ok', verdictLabel: 'executed' },
        { n: '02', kind: 'write', write: true, tool: 'send_reminder', args: ['customers: 23', 'template: reminder_30d', 'channel: WhatsApp'], checks: ['limit: 23 ≤ 50 per day', 'approved template, no free text', 'idempotency key: reminder-2027-03-16'], verdict: 'ok', verdictLabel: 'executed · 23 sent' },
        { n: '03', kind: 'write', write: true, tool: 'create_credit_note', args: ['invoice: FA-2027-0391', 'amount: 12,400 DA', 'reason: return'], checks: ['invoice exists, customer checked', 'limit: 12,400 > 10,000', 'preview sent to the manager'], verdict: 'wait', verdictLabel: 'awaiting approval' },
        { n: '04', kind: 'write', write: true, tool: 'delete_invoice', args: ['invoice: FA-2027-0388'], checks: ['tool absent from the “agent” role', 'no parameter is read', 'attempt written to the log'], verdict: 'no', verdictLabel: 'refused' },
      ],
      total: 'Four calls: one read and one write executed, one write awaiting the manager, one refused.',
      total2: 'No action without a log line, refusals included; the manager gets the credit-note preview on their phone and approves with one key.',
    },
    toolcard: {
      title: 'One tool, as the agent sees it and as the server checks it',
      alt: 'On the left, the create-credit-note tool card as the model reads it: name, description, and three typed parameters, invoice number, amount, reason among three values. On the right, six checks the server applies whatever the model sends: role allowed, invoice exists and belongs to the right customer, amount under the limit otherwise approval, idempotency key, preview before execution, log line.',
      leftLabel: 'What the model reads',
      tool: { name: 'create_credit_note', desc: ['Creates a credit note on an existing invoice.', 'Use only for a confirmed return or a confirmed', 'price error; never guess the amount.'], paramsLabel: 'parameters (strict schema)', params: [
        { k: 'invoice', type: 'string, required', d: 'exact number, e.g. FA-2027-0391' },
        { k: 'amount', type: 'number, required', d: 'in dinars; must come from a line of the invoice' },
        { k: 'reason', type: 'enum: return | price_error | goodwill', d: 'three values, nothing else' },
      ] },
      arrow: 'call received',
      rightLabel: 'What the server checks, whatever the model sends',
      checks: [
        { rule: 'Does the “agent” role have this tool?', detail: 'yes: write, under limit', state: 'ok' },
        { rule: 'Does the invoice exist, for this customer?', detail: 'FA-2027-0391 · customer 4812 · open', state: 'ok' },
        { rule: 'Is the amount in the invoice and under the limit?', detail: '12,400 DA in the invoice · > 10,000 → approval', state: 'wait' },
        { rule: 'Has this call already been executed?', detail: 'key FA-2027-0391/return: first time', state: 'ok' },
        { rule: 'Preview before execution', detail: 'the credit note is shown, nothing is written yet', state: 'ok' },
        { rule: 'Log line', detail: 'agent · 9:12 · requested by the manager · before/after', state: 'ok' },
      ],
      foot: 'The model proposes; the server disposes. A parameter guessed by the model is stopped here, not at the customer.',
    },
  },
  ar: {
    actions: {
      title: 'طلب واحد من المسيّر يصير أربعة استدعاءات لأدوات، وكل منها يمر بالباب نفسه',
      alt: 'يطلب المسيّر متابعة الزبائن المتأخرين أكثر من ثلاثين يوماً وتحضير إشعارات الدائن لمرتجعات الأسبوع. يستدعي الوكيل أربع أدوات: قراءة الزبائن المتأخرين، نُفّذت؛ إرسال تذكيرات WhatsApp، ثلاثة وعشرون تحت سقف خمسين في اليوم، نُفّذت؛ إنشاء إشعار دائن بـ 12 400 دينار فوق سقف 10 000، أُرسل للمسيّر للموافقة؛ حذف فاتورة، أداة لا يملكها دوره، رُفض. ولكل استدعاء سطر في السجل.',
      reqLabel: 'طلب المسيّر، 9:12', req: '«تابع الزبائن المتأخرين أكثر من 30 يوماً وحضّر إشعارات الدائن لمرتجعات هذا الأسبوع.»',
      gateLabel: 'الباب، نفسه لكل استدعاء', gate: 'دور الوكيل ← المعاملات تُتحقَّق ← السقف ← عدم التكرار ← السجل',
      calls: [
        { n: '01', kind: 'قراءة', write: false, tool: I('lister_clients_en_retard'), args: [I('jours_min : 30'), 'الوكالة: الكل'], checks: ['الدور: القراءة مسموحة', I(`23 زبوناً، 1${N}840${N}000 DA`), 'السجل: القراءة مكتوبة'], verdict: 'ok', verdictLabel: 'نُفّذ' },
        { n: '02', kind: 'كتابة', write: true, tool: I('envoyer_relance'), args: ['الزبائن: 23', I('gabarit : relance_30j'), 'القناة: WhatsApp'], checks: [I('السقف: 23 ≤ 50 في اليوم'), 'قالب معتمد، لا نص حر', I('مفتاح: relance-2027-03-16')], verdict: 'ok', verdictLabel: 'نُفّذ · 23 إرسالاً' },
        { n: '03', kind: 'كتابة', write: true, tool: I('creer_avoir'), args: [I('facture : FA-2027-0391'), I(`montant : 12${N}400 DA`), 'السبب: مرتجع'], checks: ['الفاتورة موجودة، الزبون متحقَّق منه', I(`السقف: 12${N}400 > 10${N}000`), 'معاينة أُرسلت إلى المسيّر'], verdict: 'wait', verdictLabel: 'في انتظار الموافقة' },
        { n: '04', kind: 'كتابة', write: true, tool: I('supprimer_facture'), args: [I('facture : FA-2027-0388')], checks: ['الأداة غائبة عن دور «الوكيل»', 'لا معامل يُقرأ', 'المحاولة مكتوبة في السجل'], verdict: 'no', verdictLabel: 'مرفوض' },
      ],
      total: 'أربعة استدعاءات: قراءة وكتابة نُفّذتا، كتابة في انتظار المسيّر، وواحدة مرفوضة.',
      total2: 'لا فعل بلا سطر في السجل، حتى المرفوض؛ ويتلقى المسيّر معاينة إشعار الدائن على هاتفه ويوافق بضغطة.',
    },
    toolcard: {
      title: 'أداة واحدة، كما يراها الوكيل وكما يتحقق منها الخادم',
      alt: 'على اليمين بطاقة أداة إنشاء إشعار دائن كما يقرؤها النموذج: الاسم، الوصف، وثلاثة معاملات منمَّطة، رقم الفاتورة، المبلغ، السبب من ثلاث قيم. وعلى اليسار ستة فحوص يطبقها الخادم مهما أرسل النموذج: الدور مسموح، الفاتورة موجودة وللزبون الصحيح، المبلغ تحت السقف وإلا موافقة، مفتاح عدم التكرار، معاينة قبل التنفيذ، سطر في السجل.',
      leftLabel: 'ما يقرؤه النموذج',
      tool: { name: I('creer_avoir'), desc: ['ينشئ إشعار دائن على فاتورة موجودة.', 'يُستعمل فقط لمرتجع أو خطأ سعر مؤكَّد؛', 'ولا يُخمَّن المبلغ أبداً.'], paramsLabel: 'المعاملات (مخطط صارم)', params: [
        { k: I('facture'), type: I('string'), d: 'الرقم الدقيق، مثل FA-2027-0391' },
        { k: I('montant'), type: I('number'), d: 'بالدينار؛ يجب أن يأتي من سطر في الفاتورة' },
        { k: I('motif'), type: I('enum : retour | erreur_prix | geste'), d: 'ثلاث قيم لا غير' },
      ] },
      arrow: 'استدعاء مستلَم',
      rightLabel: 'ما يتحقق منه الخادم، مهما أرسل النموذج',
      checks: [
        { rule: 'هل لدور «الوكيل» هذه الأداة؟', detail: 'نعم: كتابة، تحت سقف', state: 'ok' },
        { rule: 'هل الفاتورة موجودة، لهذا الزبون؟', detail: I('FA-2027-0391 · client 4812 · ouverte'), state: 'ok' },
        { rule: 'هل المبلغ في الفاتورة وتحت السقف؟', detail: I(`12${N}400 DA في الفاتورة · > 10${N}000 ← موافقة`), state: 'wait' },
        { rule: 'هل نُفّذ هذا الاستدعاء من قبل؟', detail: I('clé FA-2027-0391/retour : première fois'), state: 'ok' },
        { rule: 'معاينة قبل التنفيذ', detail: 'إشعار الدائن يُعرض، ولا شيء يُكتب بعد', state: 'ok' },
        { rule: 'سطر في السجل', detail: 'الوكيل · 9:12 · بطلب من المسيّر · قبل/بعد', state: 'ok' },
      ],
      foot: 'النموذج يقترح؛ والخادم يقرر. والمعامل الذي يخمّنه النموذج يُوقَف هنا لا عند الزبون.',
    },
  },
};
