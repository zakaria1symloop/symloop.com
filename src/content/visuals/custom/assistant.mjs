// Bespoke animated figures for the 2027 "comment utiliser ChatGPT en entreprise" post.
//  bacs():   what may be pasted into an assistant, as three bins. Three
//            columns (as it is, once cleaned or on the company account,
//            never), each with a header and four cards that appear one after
//            another, column by column.
//  usages(): ten uses on a chart of time saved against data sensitivity.
//            Numbered points appear in three waves: five uses to do from
//            tomorrow, three that need a frame, two that are not done. A
//            numbered list on the right names each point.
// CSS-only animation; base attributes are the finished state for the JPG.
import { C, ctx, text, rect, line, circle, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function pop(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scale(0)}${(at + 1.5).toFixed(1)}%,100%{transform:scale(1)}}`); return `transform-box:fill-box;transform-origin:center;animation:${P}-${id} ${LOOP}s linear infinite`; }
const TINT = 'rgba(242,181,68,0.06)';
const DARK = '#0b0b0b';

function tiles(c, css, P, ky, ts, at0) {
  let s = '';
  ts.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, at0 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? TINT : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  return s;
}
const motionOff = (P) => `@media (prefers-reduced-motion: reduce){svg [style*="${P}-"]{animation:none !important}}`;

export function bacs(t, rtl) {
  const c = ctx(rtl); const P = 'cb'; const css = []; const H = 608;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const HEAD = [{ stroke: C.fg70, fill: C.fill, tc: C.fg }, { stroke: C.accent, fill: 'rgba(242,181,68,0.14)', tc: C.accent }, { stroke: C.accent, fill: C.accent, tc: '#000' }];
  t.bins.forEach((k, b) => {
    const x = 80 + b * 352; const st = HEAD[b]; const at0 = 5 + b * 16;
    s += `<g style="animation:${show(css, P, `b${b}`, at0)}">` + rect(c, x, 144, 336, 38, st) + text(c, x + 14, 161, k.name, { size: 11, fill: st.tc, weight: 500 }) + text(c, x + 14, 175, k.sub, { size: 8.5, font: 'mono', fill: b === 2 ? '#000' : C.fg55 }) + '</g>';
    k.items.forEach((it, j) => {
      s += `<g style="animation:${show(css, P, `i${b}${j}`, at0 + 2.5 + j * 3)}">` + rect(c, x, 192 + j * 46, 336, 38, { stroke: b === 2 ? C.accent : C.line2, fill: b === 2 ? TINT : DARK }) + text(c, x + 14, 215 + j * 46, it, { size: 9.5, fill: b === 2 ? C.accent : C.fg }) + '</g>';
    });
  });
  const by = 386;
  s += `<g style="animation:${show(css, P, 'bd', 56)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 446;
  s += tiles(c, css, P, ky, t.tiles, 60);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// ten uses: time saved (0..1), data sensitivity (0..1), group (0 from tomorrow, 1 with a frame, 2 not done)
const USES = [[0.80, 0.16, 0], [0.92, 0.26, 0], [0.62, 0.10, 0], [0.72, 0.34, 0], [0.54, 0.22, 0], [0.90, 0.72, 1], [0.74, 0.86, 1], [0.60, 0.66, 1], [0.24, 0.74, 2], [0.10, 0.90, 2]];

export function usages(t, rtl) {
  const c = ctx(rtl); const P = 'cu'; const css = []; const H = 624;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  const px = 110, pw = 620, py = 152, ph = 220; const X = (g) => px + g * pw; const Y = (v) => py + ph - v * ph;
  s += `<g style="animation:${show(css, P, 'pl', 3)}">` + rect(c, px, py, pw, ph, { stroke: C.fg35, fill: DARK }) + line(c, X(0.45), py, X(0.45), py + ph, { stroke: C.line2, dash: '4 4' }) + line(c, px, Y(0.5), px + pw, Y(0.5), { stroke: C.line2, dash: '4 4' })
    + text(c, px, py - 8, t.yaxis, { size: 9, font: 'mono', fill: C.fg55 }) + text(c, px + pw, py + ph + 16, t.xaxis, { size: 9, font: 'mono', fill: C.fg55, anchor: 'end' })
    + text(c, X(0.45) + 10, py + ph - 10, t.zones[0], { size: 9.5, fill: C.fg70, weight: 500 }) + text(c, X(0.45) + 10, py + 18, t.zones[1], { size: 9.5, fill: C.accent, weight: 500 }) + text(c, px + 10, py + 18, t.zones[2], { size: 9.5, fill: C.fg55, weight: 500 }) + '</g>';
  USES.forEach(([g, v, grp], i) => {
    const at = [8, 28, 46][grp] + (i - [0, 5, 8][grp]) * 3; const hot = grp === 1; const no = grp === 2;
    s += `<g style="${pop(css, P, `p${i}`, at)}">` + circle(c, X(g), Y(v), 11, { fill: no ? DARK : hot ? C.accent : 'rgba(255,255,255,0.85)', stroke: no ? C.accent : 'none', sw: 1.5 }) + text(c, X(g), Y(v) + 3.5, String(i + 1), { size: 9.5, font: 'mono', fill: no ? C.accent : '#000', weight: 500, anchor: 'middle' }) + '</g>';
    s += `<g style="animation:${show(css, P, `l${i}`, at + 1)}">` + text(c, 760, 160 + i * 22, String(i + 1), { size: 9.5, font: 'mono', fill: hot || no ? C.accent : C.fg, weight: 500 }) + text(c, 784, 160 + i * 22, t.uses[i], { size: 9.5, fill: no ? C.fg55 : C.fg }) + '</g>';
  });
  const by = 404;
  s += `<g style="animation:${show(css, P, 'bd', 56)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 464;
  s += tiles(c, css, P, ky, t.tiles, 60);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    bacs: {
      title: 'Ce qu’on peut coller dans un assistant : trois bacs',
      alt: 'Trois colonnes. Premier bac, tel quel : un texte déjà public à reformuler, un e-mail type sans nom ni montant, une formule de tableur, la traduction d’un texte non confidentiel. Deuxième bac, une fois nettoyé ou sur le compte de l’entreprise : un compte rendu de réunion interne, un tableau de ventes sans noms de clients, une procédure interne, un brouillon de réponse à un client. Troisième bac, jamais : mots de passe et clés d’accès, fichier clients avec noms et téléphones, contrat couvert par une clause de confidentialité, pièces d’identité et dossiers du personnel.',
      header: 'Exemple construit · la règle d’usage d’une entreprise, sur une page · un bac par niveau de sensibilité',
      bins: [
        { name: 'Tel quel', sub: 'rien d’interne', items: ['un texte déjà public à reformuler', 'un e-mail type, sans nom ni montant', 'une formule ou une macro de tableur', 'la traduction d’un texte non confidentiel'] },
        { name: 'Nettoyé, ou sur le compte de l’entreprise', sub: 'interne, sans personne nommée', items: ['un compte rendu de réunion interne', 'un tableau de ventes sans noms de clients', 'une procédure ou une note interne', 'un brouillon de réponse à un client'] },
        { name: 'Jamais', sub: 'quel que soit l’outil', items: ['mots de passe, clés et codes d’accès', 'fichier clients avec noms et téléphones', 'contrat couvert par une clause de confidentialité', 'pièces d’identité, dossiers du personnel'] },
      ],
      band: 'Le test avant de coller : « si ce texte partait par erreur chez un concurrent ou un client, serait-ce grave ? » Si oui, troisième bac.',
      tiles: [
        { big: '3 bacs', l1: 'ce qui entre tel quel, ce qui entre nettoyé, ce qui n’entre pas', l2: 'une page, affichée près des écrans' },
        { big: 'jamais', l1: 'identifiants, données de personnes, documents sous confidentialité', l2: 'quel que soit l’outil, quelle que soit l’offre', hot: true },
        { big: 'nettoyer = 2 minutes', l1: 'les noms deviennent Client A, les montants deviennent X', l2: 'le résultat se recolle dans le vrai document' },
      ],
      line1: 'La règle tient en trois bacs parce qu’une charte de dix pages n’est lue par personne au moment de coller.',
      line2: 'Le bac du milieu est celui qui compte : le travail utile s’y trouve, et c’est lui qu’un compte de l’entreprise protège.',
      note: 'Exemple construit · à adapter à votre activité ; ce guide ne traite pas des règles de droit sur les données personnelles.',
    },
    usages: {
      title: 'Dix usages, classés par temps gagné et par sensibilité',
      alt: 'Graphique de dix usages d’un assistant, placés selon le temps gagné et la sensibilité des données. Cinq usages à faire dès demain, peu sensibles : reformuler un e-mail, traduire, résumer un document public, écrire une formule de tableur, bâtir le plan d’une offre. Trois usages à cadrer, sensibles et très utiles : répondre aux clients à partir de vos documents, chercher dans vos contrats et procédures, analyser les ventes par client. Deux usages à ne pas faire : appliquer tel quel un avis juridique ou médical, lui confier des mots de passe.',
      header: 'Exemple construit · dix tâches de bureau · en bas à droite ce qui se fait dès demain, en haut à droite ce qui demande un cadre',
      yaxis: 'sensibilité des données ↑', xaxis: 'temps gagné →', zones: ['dès demain', 'avec un cadre', 'non'],
      uses: ['reformuler et corriger un e-mail', 'traduire entre français, arabe et anglais', 'résumer un long document public', 'écrire une formule de tableur', 'bâtir le plan d’une offre', 'répondre aux clients d’après vos documents', 'chercher dans vos contrats et procédures', 'analyser les ventes par client', 'appliquer tel quel un avis juridique', 'lui confier des mots de passe'],
      band: 'Cinq usages se font dès demain. Trois demandent un cadre : le compte de l’entreprise, puis un assistant branché sur vos documents. Deux ne se font pas.',
      tiles: [
        { big: '5 usages sans risque', l1: 'reformuler, traduire, résumer, tableur, plan', l2: 'aucune donnée interne n’y entre' },
        { big: '3 usages à cadrer', l1: 'ceux qui touchent à vos clients et à vos documents', l2: 'c’est là que se trouve le gain', hot: true },
        { big: 'toujours relire', l1: 'l’assistant peut affirmer une chose fausse', l2: 'celui qui signe relit' },
      ],
      line1: 'L’intérêt et le risque montent ensemble : ce qui ferait gagner le plus de temps est aussi ce qui touche aux données de l’entreprise.',
      line2: 'D’où l’ordre : les cinq usages sans risque d’abord, pour apprendre ; un cadre ensuite, pour les trois qui comptent.',
      note: 'Exemple construit · positions indicatives ; refaites ce classement avec les dix tâches qui vous prennent le plus de temps.',
    },
  },
  en: {
    bacs: {
      title: 'What can be pasted into an assistant: three bins',
      alt: 'Three columns. First bin, as it is: an already public text to rephrase, a standard email with no name or amount, a spreadsheet formula, the translation of a non-confidential text. Second bin, once cleaned or on the company account: minutes of an internal meeting, a sales table without customer names, an internal procedure, a draft reply to a customer. Third bin, never: passwords and access keys, a customer file with names and phone numbers, a contract covered by a confidentiality clause, identity documents and staff files.',
      header: 'Constructed example · a company’s rule of use, on one page · one bin per level of sensitivity',
      bins: [
        { name: 'As it is', sub: 'nothing internal', items: ['an already public text to rephrase', 'a standard email, with no name or amount', 'a spreadsheet formula or macro', 'the translation of a non-confidential text'] },
        { name: 'Cleaned, or on the company account', sub: 'internal, nobody named', items: ['minutes of an internal meeting', 'a sales table without customer names', 'an internal procedure or memo', 'a draft reply to a customer'] },
        { name: 'Never', sub: 'whatever the tool', items: ['passwords, keys and access codes', 'customer file with names and phone numbers', 'contract covered by a confidentiality clause', 'identity documents, staff files'] },
      ],
      band: 'The test before pasting: “if this text went by mistake to a competitor or a customer, would it matter?” If yes, third bin.',
      tiles: [
        { big: '3 bins', l1: 'what goes in as it is, what goes in cleaned, what stays out', l2: 'one page, displayed near the screens' },
        { big: 'never', l1: 'credentials, data about people, documents under confidentiality', l2: 'whatever the tool, whatever the plan', hot: true },
        { big: 'cleaning = 2 minutes', l1: 'names become Customer A, amounts become X', l2: 'the result is pasted back into the real document' },
      ],
      line1: 'The rule fits in three bins because a ten-page policy is read by nobody at the moment of pasting.',
      line2: 'The middle bin is the one that matters: the useful work is there, and it is what a company account protects.',
      note: 'Constructed example · to adapt to your business; this guide does not cover the legal rules on personal data.',
    },
    usages: {
      title: 'Ten uses, sorted by time saved and by sensitivity',
      alt: 'Chart of ten uses of an assistant, placed by time saved and by data sensitivity. Five uses to do from tomorrow, not very sensitive: rephrase an email, translate, summarise a public document, write a spreadsheet formula, build the outline of a proposal. Three uses that need a frame, sensitive and very useful: answer customers from your documents, search your contracts and procedures, analyse sales per customer. Two uses not to do: apply legal or medical advice as it is, entrust it with passwords.',
      header: 'Constructed example · ten office tasks · bottom right what can be done from tomorrow, top right what needs a frame',
      yaxis: 'data sensitivity ↑', xaxis: 'time saved →', zones: ['from tomorrow', 'with a frame', 'no'],
      uses: ['rephrase and correct an email', 'translate between French, Arabic and English', 'summarise a long public document', 'write a spreadsheet formula', 'build the outline of a proposal', 'answer customers from your documents', 'search your contracts and procedures', 'analyse sales per customer', 'apply legal advice as it is', 'entrust it with passwords'],
      band: 'Five uses can be done from tomorrow. Three need a frame: the company account, then an assistant connected to your documents. Two are not done.',
      tiles: [
        { big: '5 uses without risk', l1: 'rephrase, translate, summarise, spreadsheet, outline', l2: 'no internal data goes in' },
        { big: '3 uses to frame', l1: 'those that touch your customers and your documents', l2: 'that is where the gain is', hot: true },
        { big: 'always reread', l1: 'the assistant can state something false', l2: 'whoever signs rereads' },
      ],
      line1: 'Benefit and risk rise together: what would save the most time is also what touches the company’s data.',
      line2: 'Hence the order: the five risk-free uses first, to learn; a frame next, for the three that count.',
      note: 'Constructed example · indicative positions; redo this ranking with the ten tasks that take you the most time.',
    },
  },
  ar: {
    bacs: {
      title: 'ما يمكن لصقه في مساعد: ثلاث سلال',
      alt: 'ثلاثة أعمدة. السلة الأولى، كما هو: نص منشور أصلاً لإعادة صياغته، رسالة نموذجية دون اسم ولا مبلغ، صيغة جدول، وترجمة نص غير سري. السلة الثانية، بعد التنظيف أو على حساب المؤسسة: محضر اجتماع داخلي، جدول مبيعات دون أسماء الزبائن، إجراء داخلي، ومسودة جواب لزبون. السلة الثالثة، أبداً: كلمات المرور ومفاتيح الوصول، ملف الزبائن بالأسماء والهواتف، عقد مشمول ببند السرية، ووثائق الهوية وملفات العمّال.',
      header: 'مثال مركَّب · قاعدة الاستعمال في مؤسسة، في صفحة · سلة لكل مستوى من الحساسية',
      bins: [
        { name: 'كما هو', sub: 'لا شيء داخلياً', items: ['نص منشور أصلاً لإعادة صياغته', 'رسالة نموذجية، دون اسم ولا مبلغ', 'صيغة أو ماكرو في جدول', 'ترجمة نص غير سري'] },
        { name: 'بعد التنظيف، أو على حساب المؤسسة', sub: 'داخلي، دون تسمية أحد', items: ['محضر اجتماع داخلي', 'جدول مبيعات دون أسماء الزبائن', 'إجراء أو مذكرة داخلية', 'مسودة جواب لزبون'] },
        { name: 'أبداً', sub: 'مهما كانت الأداة', items: ['كلمات المرور، المفاتيح، ورموز الوصول', 'ملف الزبائن بالأسماء والهواتف', 'عقد مشمول ببند السرية', 'وثائق الهوية، وملفات العمّال'] },
      ],
      band: 'الاختبار قبل اللصق: «لو ذهب هذا النص خطأً إلى منافس أو زبون، هل يكون الأمر خطيراً؟» إذا نعم، السلة الثالثة.',
      tiles: [
        { big: '3 سلال', l1: 'ما يدخل كما هو، ما يدخل منظَّفاً، وما لا يدخل', l2: 'صفحة، معلَّقة قرب الشاشات' },
        { big: 'أبداً', l1: 'المعرّفات، بيانات الأشخاص، والوثائق السرية', l2: 'مهما كانت الأداة، ومهما كان العرض', hot: true },
        { big: 'التنظيف = دقيقتان', l1: 'الأسماء تصير الزبون أ، والمبالغ تصير س', l2: 'والنتيجة تُلصق في الوثيقة الحقيقية' },
      ],
      line1: 'القاعدة تسعها ثلاث سلال لأن ميثاقاً من عشر صفحات لا يقرؤه أحد لحظة اللصق.',
      line2: 'السلة الوسطى هي التي تهمّ: فيها العمل النافع، وهي ما يحميه حساب المؤسسة.',
      note: 'مثال مركَّب · يُكيَّف مع نشاطكم؛ هذا الدليل لا يتناول القواعد القانونية للبيانات الشخصية.',
    },
    usages: {
      title: 'عشرة استعمالات، مرتَّبة حسب الوقت المربوح والحساسية',
      alt: 'رسم لعشرة استعمالات لمساعد، موضوعة حسب الوقت المربوح وحساسية البيانات. خمسة استعمالات تُنجز من الغد، قليلة الحساسية: إعادة صياغة رسالة، الترجمة، تلخيص وثيقة علنية، كتابة صيغة جدول، وبناء مخطط عرض. ثلاثة استعمالات تتطلب إطاراً، حساسة ونافعة جداً: الجواب على الزبائن من وثائقكم، البحث في عقودكم وإجراءاتكم، وتحليل المبيعات حسب الزبون. واستعمالان لا يُنجزان: تطبيق رأي قانوني أو طبي كما هو، وائتمانه على كلمات المرور.',
      header: 'مثال مركَّب · عشر مهام مكتبية · أسفل اليسار ما يُنجز من الغد، وأعلى اليسار ما يتطلب إطاراً',
      yaxis: 'حساسية البيانات ↑', xaxis: '← الوقت المربوح', zones: ['من الغد', 'بإطار', 'لا'],
      uses: ['إعادة صياغة رسالة وتصحيحها', 'الترجمة بين الفرنسية والعربية والإنجليزية', 'تلخيص وثيقة علنية طويلة', 'كتابة صيغة في جدول', 'بناء مخطط عرض', 'الجواب على الزبائن من وثائقكم', 'البحث في عقودكم وإجراءاتكم', 'تحليل المبيعات حسب الزبون', 'تطبيق رأي قانوني كما هو', 'ائتمانه على كلمات المرور'],
      band: 'خمسة استعمالات تُنجز من الغد. ثلاثة تتطلب إطاراً: حساب المؤسسة، ثم مساعد موصول بوثائقكم. واثنان لا يُنجزان.',
      tiles: [
        { big: '5 استعمالات دون خطر', l1: 'صياغة، ترجمة، تلخيص، جدول، ومخطط', l2: 'لا بيانات داخلية تدخل فيها' },
        { big: '3 استعمالات تُؤطَّر', l1: 'التي تمسّ زبائنكم ووثائقكم', l2: 'هناك يوجد الربح', hot: true },
        { big: 'المراجعة دائماً', l1: 'المساعد قد يؤكّد شيئاً خاطئاً', l2: 'من يوقّع يراجع' },
      ],
      line1: 'الفائدة والخطر يرتفعان معاً: ما يربح أكثر وقت هو كذلك ما يمسّ بيانات المؤسسة.',
      line2: 'ومن هنا الترتيب: الاستعمالات الخمسة دون خطر أولاً، للتعلّم؛ ثم إطار، للثلاثة التي تهمّ.',
      note: 'مثال مركَّب · مواضع تقريبية؛ أعيدوا هذا الترتيب بالمهام العشر التي تأخذ منكم أكثر وقت.',
    },
  },
};
