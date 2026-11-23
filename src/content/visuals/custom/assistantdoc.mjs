// Bespoke animated figures for the 2027 "chatbot d'entreprise sur vos documents" page.
//  question(): the path of one question through the assistant. 7 200 indexed passages, 40 candidates
//              found by words and by meaning, 8 kept after re-ranking, 6 the person is allowed to
//              read (2 removed by the rights filter, before the model), 4 quoted in the answer.
//              Below: the question, and the answer card with its two sources (document, page, date).
//  corpus():   the 1 150 documents before indexing (815 in order, 60 with no owner or date, 85 scans
//              with no text, 190 duplicates and old versions removed: 960 indexed), then the same
//              120 test questions answered with everything indexed (84 right with the right source,
//              9 from an old version, 14 "I don't know" by mistake, 6 justified, 7 invented) and
//              after triage and tuning (107, 1, 4, 6, 2).
// Everything is drawn in logical coordinates and mirrors in RTL. CSS-only animation; base attributes
// are the finished state for the JPG.
import { C, ctx, text, rect, open, heading } from '../../../lib/visuals/index.mjs';

const LOOP = 12;
function show(css, P, id, at) { css.push(`@keyframes ${P}-${id}{0%,${Math.max(0, at - 0.5).toFixed(1)}%{opacity:0}${at.toFixed(1)}%,100%{opacity:1}}`); return `${P}-${id} ${LOOP}s linear infinite`; }
function growX(css, P, id, at, dur, rtl) { css.push(`@keyframes ${P}-${id}{0%,${at.toFixed(1)}%{transform:scaleX(0)}${(at + dur).toFixed(1)}%,100%{transform:scaleX(1)}}`); return `transform-box:fill-box;transform-origin:${rtl ? 'right' : 'left'} center;animation:${P}-${id} ${LOOP}s linear infinite`; }
const TINT = 'rgba(242,181,68,0.06)';
const SOFT = 'rgba(242,181,68,0.38)';
const DARK = '#0b0b0b';
const DIM = 'rgba(255,255,255,0.16)';
const MID = 'rgba(255,255,255,0.55)';

function tiles(c, css, P, ky, ts, at0) {
  let s = '';
  ts.forEach((k, i) => { const x = 80 + i * 350; s += `<g style="animation:${show(css, P, `k${i}`, at0 + i * 2)}">` + rect(c, x, ky, 340, 58, { stroke: k.hot ? C.accent : C.line2, fill: k.hot ? TINT : C.fill }) + text(c, x + 12, ky + 23, k.big, { size: 13, font: 'mono', fill: k.hot ? C.accent : C.fg, weight: 500 }) + text(c, x + 12, ky + 40, k.l1, { size: 9.5, fill: C.fg70 }) + text(c, x + 12, ky + 52, k.l2, { size: 8.5, font: 'mono', fill: C.fg55 }) + '</g>'; });
  return s;
}
const motionOff = (P) => `@media (prefers-reduced-motion: reduce){svg [style*="${P}-"]{animation:none !important}}`;
const seg = (c, x1, y1, x2, y2, color, dash) => `<line x1="${c.X(x1)}" y1="${y1}" x2="${c.X(x2)}" y2="${y2}" stroke="${color}" stroke-width="1"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const chevron = (c, x, y, color) => `<polyline points="${c.X(x)},${y - 5} ${c.X(x + 6)},${y} ${c.X(x)},${y + 5}" fill="none" stroke="${color}" stroke-width="1.2"/>`;

export function question(t, rtl) {
  const c = ctx(rtl); const P = 'qn'; const css = []; const H = 686;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + text(c, 96, 170, t.chartTitle, { size: 11, fill: C.fg, weight: 500 }) + '</g>';
  // five stages, from the whole index to the passages quoted
  t.stages.forEach((st, i) => {
    const x = 104 + i * 198; const hot = i === 3;
    s += `<g style="animation:${show(css, P, `s${i}`, 9 + i * 6)}">` + rect(c, x, 184, 176, 96, { stroke: hot ? C.accent : C.line2, fill: hot ? TINT : C.fill })
      + text(c, x + 14, 220, st.n, { size: 24, font: 'mono', fill: hot ? C.accent : C.fg, weight: 500 })
      + text(c, x + 14, 242, st.label, { size: 10.5, fill: hot ? C.accent : C.fg, weight: 500 })
      + text(c, x + 14, 258, st.sub1, { size: 8.5, fill: C.fg55 }) + text(c, x + 14, 270, st.sub2, { size: 8.5, fill: C.fg55 })
      + (i < 4 ? chevron(c, x + 184, 232, C.fg55) : '') + '</g>';
  });
  // the question
  s += `<g style="animation:${show(css, P, 'q', 5)}">` + rect(c, 104, 296, 366, 142, { stroke: C.line2, fill: C.fill }) + text(c, 118, 316, t.qLabel, { size: 9, font: 'mono', fill: C.fg55 }) + text(c, 118, 340, t.qText, { size: 11.5, fill: C.fg, weight: 500 }) + text(c, 118, 358, t.qWho, { size: 9, fill: C.fg70 }) + '</g>';
  s += `<g style="animation:${show(css, P, 'rf', 54)}">` + seg(c, 118, 378, 456, 378, C.line2, '3 4') + text(c, 118, 400, t.refuse1, { size: 9.5, fill: C.fg70 }) + text(c, 118, 420, t.refuse2, { size: 10.5, fill: C.accent, weight: 500 }) + '</g>';
  // the answer and its sources
  s += `<g style="animation:${show(css, P, 'a', 40)}">` + rect(c, 500, 296, 572, 142, { stroke: C.accent, fill: TINT }) + text(c, 514, 316, t.aLabel, { size: 9, font: 'mono', fill: C.accent }) + text(c, 514, 340, t.aText1, { size: 11.5, fill: C.fg, weight: 500 }) + text(c, 514, 358, t.aText2, { size: 11.5, fill: C.fg, weight: 500 }) + '</g>';
  t.sources.forEach((src, i) => { const y = 372 + i * 30; s += `<g style="animation:${show(css, P, `c${i}`, 45 + i * 4)}">` + rect(c, 514, y, 544, 22, { stroke: C.line2, fill: DARK }) + text(c, 524, y + 15, src, { size: 9, font: 'mono', fill: C.fg70 }) + '</g>'; });
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bn', 60)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 64);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

// the 1 150 documents: [in order, no owner or date, scans with no text, duplicates and old versions]
const DOCS = [815, 60, 85, 190];
// the 120 test questions: [right with the right source, from an old version, "I don't know" by mistake, "I don't know" justified, invented or wrong]
const RUN_ALL = [84, 9, 14, 6, 7];
const RUN_SORTED = [107, 1, 4, 6, 2];

export function corpus(t, rtl) {
  const c = ctx(rtl); const P = 'cz'; const css = []; const H = 686;
  let s = open(H, t.title, t.alt) + heading(c, t.title);
  s += `<g style="animation:${show(css, P, 'h', 2)}">` + rect(c, 80, 96, 1040, 30, { stroke: C.accent, fill: TINT }) + text(c, 92, 115, t.header, { size: 10, font: 'mono', fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'pa', 3)}">` + rect(c, 80, 144, 1040, 308, { stroke: C.fg35, fill: DARK }) + text(c, 96, 170, t.chartTitle, { size: 11, fill: C.fg, weight: 500 }) + '</g>';
  // the documents: 0.8 px per document
  const X0 = 140; const K = 0.8; let x = X0;
  const dFill = [MID, 'rgba(255,255,255,0.34)', 'rgba(255,255,255,0.22)', 'none'];
  const edges = [];
  DOCS.forEach((n, i) => {
    const w = n * K; edges.push([x, x + w]);
    s += `<g style="${growX(css, P, `d${i}`, 6 + i * 3, 2.6, rtl)}">` + rect(c, x, 212, w, 26, { stroke: i === 3 ? C.accent : DARK, fill: dFill[i], dash: i === 3 ? '4 3' : '' }) + '</g>';
    x += w;
  });
  s += `<g style="animation:${show(css, P, 'dl0', 9)}">` + text(c, edges[0][0] + 8, 229, t.docs[0], { size: 10, fill: DARK, weight: 500 }) + '</g>';
  s += `<g style="animation:${show(css, P, 'dl1', 12)}">` + seg(c, edges[1][0] + 4, 212, edges[1][0] + 4, 200, C.fg55) + text(c, edges[1][0] + 4, 196, t.docs[1], { size: 9.5, fill: C.fg70, anchor: 'end' }) + '</g>';
  s += `<g style="animation:${show(css, P, 'dl2', 15)}">` + seg(c, edges[2][1] - 4, 238, edges[2][1] - 4, 250, C.fg55) + text(c, edges[2][1] - 4, 262, t.docs[2], { size: 9.5, fill: C.fg70, anchor: 'end' }) + '</g>';
  s += `<g style="animation:${show(css, P, 'dl3', 18)}">` + text(c, edges[3][0] + 8, 229, t.docs[3], { size: 10, fill: C.accent, weight: 500 }) + text(c, edges[3][0] + 8, 262, t.docs[4], { size: 9.5, fill: C.accent }) + '</g>';
  s += `<g style="animation:${show(css, P, 'ix', 22)}">` + seg(c, X0, 278, edges[2][1], 278, C.fg70) + seg(c, X0, 274, X0, 282, C.fg70) + seg(c, edges[2][1], 274, edges[2][1], 282, C.fg70) + text(c, X0, 296, t.indexed, { size: 10, fill: C.fg, weight: 500 }) + '</g>';
  // the 120 test questions: 7 px per question
  const Q0 = 240; const Q = 7;
  const qFill = [C.accent, SOFT, MID, DIM, C.fg];
  const run = (y, data, id, at, label) => {
    let out = `<g style="animation:${show(css, P, `${id}t`, at)}">` + text(c, 96, y + 17, label, { size: 10, fill: C.fg, weight: 500 }) + '</g>'; let qx = Q0;
    data.forEach((n, i) => {
      const w = n * Q;
      out += `<g style="${growX(css, P, `${id}${i}`, at + 1 + i * 2.2, 2, rtl)}">` + rect(c, qx, y, w, 26, { stroke: DARK, fill: qFill[i] }) + '</g>';
      out += `<g style="animation:${show(css, P, `${id}v${i}`, at + 3 + i * 2.2)}">` + (w >= 40 ? text(c, qx + w / 2, y + 17, String(n), { size: 10.5, font: 'mono', fill: i === 0 || i === 4 ? DARK : C.fg, anchor: 'middle', weight: 500 }) : text(c, qx + w / 2, y - 5, String(n), { size: 9, font: 'mono', fill: C.fg70, anchor: 'middle' })) + '</g>';
      qx += w;
    });
    return out;
  };
  s += run(328, RUN_ALL, 'a', 28, t.runAll);
  s += run(376, RUN_SORTED, 'b', 42, t.runSorted);
  let lg = ''; let lx = 240;
  t.legend.forEach((lab, i) => { lg += rect(c, lx, 419, 9, 9, { stroke: i === 3 ? C.line2 : 'none', fill: qFill[i] }) + text(c, lx + 14, 428, lab, { size: 8.5, fill: C.fg70 }); lx += t.legendW[i]; });
  s += `<g style="animation:${show(css, P, 'lg', 27)}">` + lg + '</g>';
  const by = 466;
  s += `<g style="animation:${show(css, P, 'bn', 58)}">` + rect(c, 80, by, 1040, 42, { stroke: C.line2, fill: C.fill }) + text(c, 96, by + 26, t.band, { size: 10.5, fill: C.fg }) + '</g>';
  const ky = 526;
  s += tiles(c, css, P, ky, t.tiles, 62);
  s += text(c, 80, ky + 86, t.line1, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 106, t.line2, { size: 12.5, fill: C.fg }) + text(c, 80, ky + 128, t.note, { size: 10, font: 'mono', fill: C.fg55 });
  s += `<style>${css.join('')}${motionOff(P)}</style>`;
  return s + '</svg>';
}

export const STRINGS = {
  fr: {
    question: {
      title: 'Une question, quatre passages, une réponse citée',
      alt: 'Le parcours d’une question en cinq étapes : 7 200 passages indexés, 40 candidats trouvés par les mots et par le sens, 8 retenus après reclassement, 6 que la personne a le droit de lire, 2 étant écartés car réservés à l’encadrement, puis 4 passages cités dans la réponse. En dessous, la question, « Comment demander une attestation de travail ? », et la réponse avec ses deux sources : une note de service avec sa page et sa date de mise à jour, et un formulaire. Si le meilleur passage est sous le seuil, l’assistant répond « je ne sais pas » et transmet la question.',
      header: 'Exemple construit · une question, 7 200 passages indexés, cinq groupes de droits',
      chartTitle: 'De la question à la réponse : ce que l’assistant lit avant d’écrire',
      stages: [
        { n: '7 200', label: 'passages indexés', sub1: '960 documents', sub2: '3 300 pages' },
        { n: '40', label: 'candidats', sub1: 'trouvés par les mots', sub2: 'et par le sens' },
        { n: '8', label: 'retenus', sub1: 'reclassés', sub2: 'par pertinence' },
        { n: '6', label: 'autorisés', sub1: '2 écartés : réservés', sub2: 'à l’encadrement' },
        { n: '4', label: 'cités', sub1: 'la réponse', sub2: 'n’utilise qu’eux' },
      ],
      qLabel: 'Question', qText: '« Comment demander une attestation de travail ? »', qWho: 'posée par une opératrice de l’atelier 2',
      refuse1: 'Si le meilleur passage est sous le seuil :', refuse2: '« Je ne sais pas », et la question est transmise.',
      aLabel: 'Réponse', aText1: '« Par le formulaire RH-07, déposé au service du personnel.', aText2: 'Délai : trois jours ouvrés. »',
      sources: ['Note de service 2026-14 · page 2 · mise à jour le 3 septembre 2026', 'Formulaire RH-07 · page 1'],
      band: 'Le modèle ne répond pas de mémoire : il rédige à partir de quatre passages que la personne a le droit de lire.',
      tiles: [
        { big: '7 200 → 4 passages', l1: 'de l’index entier aux passages cités', l2: '40 candidats, 8 retenus, 6 autorisés' },
        { big: '2 passages écartés', l1: 'la personne n’a pas le droit de les lire', l2: 'le filtre passe avant le modèle', hot: true },
        { big: 'une source par phrase', l1: 'document, page, date de mise à jour', l2: 'sinon : « je ne sais pas »' },
      ],
      line1: 'Le filtre des droits passe avant le modèle : un passage que la personne ne peut pas ouvrir n’entre jamais dans la réponse.',
      line2: 'Sous un seuil de pertinence, l’assistant dit « je ne sais pas » et transmet la question à la personne responsable du sujet.',
      note: 'Exemple construit · question, documents, références et volumes fictifs.',
    },
    corpus: {
      title: 'Le travail est dans les documents : 1 150 fichiers triés',
      alt: 'En haut, les 1 150 documents avant indexation : 815 en ordre, 60 sans responsable ni date, 85 scans sans texte, et 190 doublons et anciennes versions, retirés ; soit 960 documents indexés, 3 300 pages et 7 200 passages. En bas, les mêmes 120 questions de test. Avec tout indexé : 84 réponses justes avec la bonne source, 9 tirées d’une ancienne version, 14 « je ne sais pas » à tort, 6 « je ne sais pas » justifiés, 7 inventées ou fausses. Après tri et réglage : 107, 1, 4, 6 et 2.',
      header: 'Exemple construit · 1 150 documents, 120 questions de test',
      chartTitle: 'Le corpus avant l’indexation, et ce que le tri change aux réponses',
      docs: ['815 en ordre', '60 sans responsable ni date : attribués', '85 scans sans texte : texte reconnu', '190 retirés', 'doublons et anciennes versions'],
      indexed: '960 documents indexés · 3 300 pages · 7 200 passages',
      runAll: 'Tout indexé', runSorted: 'Après tri et réglage',
      legend: ['juste, bonne source', 'tiré d’une ancienne version', '« je ne sais pas » à tort', '« je ne sais pas » justifié', 'inventé ou faux'], legendW: [150, 186, 166, 172, 120],
      band: 'Un assistant répond avec ce qu’on lui donne : une ancienne version indexée devient une réponse fausse, dite avec assurance.',
      tiles: [
        { big: '190 fichiers retirés', l1: 'doublons et anciennes versions, sur 1 150', l2: 'un document sur six' },
        { big: '9 réponses périmées', l1: 'justes hier, fausses aujourd’hui', l2: 'l’ancienne version était indexée' },
        { big: '107 sur 120', l1: 'justes, avec la bonne source, après tri et réglage', l2: '2 inventées, 6 « je ne sais pas » justifiés', hot: true },
      ],
      line1: 'À faire avant tout projet : compter les documents, les doublons, les anciennes versions, les scans, ceux qui n’ont ni responsable ni date.',
      line2: 'Les six « je ne sais pas » justifiés sont la liste des notes qui restent à écrire.',
      note: 'Exemple construit · documents, questions et résultats fictifs.',
    },
  },
  en: {
    question: {
      title: 'One question, four passages, one answer with its sources',
      alt: 'The path of a question in five stages: 7,200 indexed passages, 40 candidates found by words and by meaning, 8 kept after re-ranking, 6 the person is allowed to read, 2 being removed because they are reserved for managers, then 4 passages quoted in the answer. Below, the question, “How do I request a certificate of employment?”, and the answer with its two sources: a service note with its page and update date, and a form. If the best passage is under the threshold, the assistant answers “I don’t know” and forwards the question.',
      header: 'Constructed example · one question, 7,200 indexed passages, five rights groups',
      chartTitle: 'From the question to the answer: what the assistant reads before it writes',
      stages: [
        { n: '7,200', label: 'indexed passages', sub1: '960 documents', sub2: '3,300 pages' },
        { n: '40', label: 'candidates', sub1: 'found by words', sub2: 'and by meaning' },
        { n: '8', label: 'kept', sub1: 're-ranked', sub2: 'by relevance' },
        { n: '6', label: 'allowed', sub1: '2 removed: reserved', sub2: 'for managers' },
        { n: '4', label: 'quoted', sub1: 'the answer', sub2: 'uses only these' },
      ],
      qLabel: 'Question', qText: '“How do I request a certificate of employment?”', qWho: 'asked by an operator in workshop 2',
      refuse1: 'If the best passage is under the threshold:', refuse2: '“I don’t know”, and the question is forwarded.',
      aLabel: 'Answer', aText1: '“With form RH-07, handed in to the personnel office.', aText2: 'Lead time: three working days.”',
      sources: ['Service note 2026-14 · page 2 · updated on 3 September 2026', 'Form RH-07 · page 1'],
      band: 'The model does not answer from memory: it writes from four passages the person is allowed to read.',
      tiles: [
        { big: '7,200 → 4 passages', l1: 'from the whole index to the passages quoted', l2: '40 candidates, 8 kept, 6 allowed' },
        { big: '2 passages removed', l1: 'the person is not allowed to read them', l2: 'the filter runs before the model', hot: true },
        { big: 'one source per sentence', l1: 'document, page, update date', l2: 'otherwise: “I don’t know”' },
      ],
      line1: 'The rights filter runs before the model: a passage the person cannot open never enters the answer.',
      line2: 'Under a relevance threshold, the assistant says “I don’t know” and forwards the question to the person in charge of the subject.',
      note: 'Constructed example · fictitious question, documents, references and volumes.',
    },
    corpus: {
      title: 'The work is in the documents: 1,150 files sorted',
      alt: 'At the top, the 1,150 documents before indexing: 815 in order, 60 with no owner or date, 85 scans with no text, and 190 duplicates and old versions, removed; that is 960 documents indexed, 3,300 pages and 7,200 passages. At the bottom, the same 120 test questions. With everything indexed: 84 answers right with the right source, 9 taken from an old version, 14 “I don’t know” by mistake, 6 justified “I don’t know”, 7 invented or wrong. After triage and tuning: 107, 1, 4, 6 and 2.',
      header: 'Constructed example · 1,150 documents, 120 test questions',
      chartTitle: 'The corpus before indexing, and what triage changes in the answers',
      docs: ['815 in order', '60 with no owner or date: assigned', '85 scans with no text: text recognised', '190 removed', 'duplicates and old versions'],
      indexed: '960 documents indexed · 3,300 pages · 7,200 passages',
      runAll: 'Everything indexed', runSorted: 'After triage and tuning',
      legend: ['right, right source', 'taken from an old version', '“I don’t know” by mistake', '“I don’t know” justified', 'invented or wrong'], legendW: [140, 180, 176, 168, 120],
      band: 'An assistant answers with what it is given: an old version left in the index becomes a wrong answer, stated with confidence.',
      tiles: [
        { big: '190 files removed', l1: 'duplicates and old versions, out of 1,150', l2: 'one document in six' },
        { big: '9 outdated answers', l1: 'right yesterday, wrong today', l2: 'the old version was indexed' },
        { big: '107 out of 120', l1: 'right, with the right source, after triage and tuning', l2: '2 invented, 6 justified “I don’t know”', hot: true },
      ],
      line1: 'To do before any project: count the documents, the duplicates, the old versions, the scans, those with no owner or date.',
      line2: 'The six justified “I don’t know” answers are the list of notes still to be written.',
      note: 'Constructed example · fictitious documents, questions and results.',
    },
  },
  ar: {
    question: {
      title: 'سؤال واحد، أربعة مقاطع، وجواب بمصادره',
      alt: 'مسار سؤال في خمس مراحل: 7200 مقطع مفهرَس، 40 مرشَّحاً وُجدت بالكلمات وبالمعنى، 8 محتفَظ بها بعد إعادة الترتيب، 6 يحق للشخص قراءتها، بعد استبعاد اثنين مخصَّصين للتأطير، ثم 4 مقاطع مذكورة في الجواب. وتحتها، السؤال، «كيف أطلب شهادة عمل؟»، والجواب بمصدريه: مذكرة مصلحة بصفحتها وتاريخ تحيينها، واستمارة. وإذا كان أفضل مقطع تحت العتبة، يجيب المساعد «لا أعرف» ويحوّل السؤال.',
      header: 'مثال مركَّب · سؤال واحد، ⁦7 200⁩ مقطع مفهرَس، وخمس مجموعات صلاحيات',
      chartTitle: 'من السؤال إلى الجواب: ما يقرؤه المساعد قبل أن يكتب',
      stages: [
        { n: '⁦7 200⁩', label: 'مقطع مفهرَس', sub1: '960 وثيقة', sub2: '⁦3 300⁩ صفحة' },
        { n: '40', label: 'مرشَّحاً', sub1: 'وُجدت بالكلمات', sub2: 'وبالمعنى' },
        { n: '8', label: 'محتفَظ بها', sub1: 'أُعيد ترتيبها', sub2: 'حسب الملاءمة' },
        { n: '6', label: 'مسموح بها', sub1: 'اثنان مستبعَدان:', sub2: 'مخصَّصان للتأطير' },
        { n: '4', label: 'مذكورة', sub1: 'الجواب', sub2: 'لا يستعمل غيرها' },
      ],
      qLabel: 'السؤال', qText: '«كيف أطلب شهادة عمل؟»', qWho: 'طرحته عاملة في الورشة 2',
      refuse1: 'إذا كان أفضل مقطع تحت العتبة:', refuse2: '«لا أعرف»، ويُحوَّل السؤال.',
      aLabel: 'الجواب', aText1: '«بالاستمارة ⁦RH-07⁩، تُودَع لدى مصلحة المستخدمين.', aText2: 'الأجل: ثلاثة أيام عمل.»',
      sources: ['مذكرة المصلحة ⁦2026-14⁩ · الصفحة 2 · حُيِّنت يوم 3 سبتمبر 2026', 'الاستمارة ⁦RH-07⁩ · الصفحة 1'],
      band: 'النموذج لا يجيب من الذاكرة: يكتب انطلاقاً من أربعة مقاطع يحق للشخص قراءتها.',
      tiles: [
        { big: 'من ⁦7 200⁩ مقطع إلى 4', l1: 'من الفهرس كله إلى المقاطع المذكورة', l2: '40 مرشَّحاً، 8 محتفَظ بها، و6 مسموح بها' },
        { big: 'مقطعان مستبعَدان', l1: 'لا يحق للشخص قراءتهما', l2: 'المصفاة تمر قبل النموذج', hot: true },
        { big: 'مصدر لكل جملة', l1: 'الوثيقة، الصفحة، وتاريخ التحيين', l2: 'وإلا: «لا أعرف»' },
      ],
      line1: 'مصفاة الصلاحيات تمر قبل النموذج: المقطع الذي لا يستطيع الشخص فتحه لا يدخل الجواب أبداً.',
      line2: 'تحت عتبة ملاءمة، يقول المساعد «لا أعرف» ويحوّل السؤال إلى الشخص المسؤول عن الموضوع.',
      note: 'مثال مركَّب · سؤال ووثائق ومراجع وأحجام خيالية.',
    },
    corpus: {
      title: 'العمل في الوثائق: فرز 1150 ملفاً',
      alt: 'في الأعلى، الوثائق الـ1150 قبل الفهرسة: 815 مرتَّبة، 60 دون مسؤول ولا تاريخ، 85 صورة ممسوحة دون نص، و190 تكراراً ونسخة قديمة، مسحوبة؛ أي 960 وثيقة مفهرَسة، 3300 صفحة، و7200 مقطع. وفي الأسفل، الأسئلة الـ120 نفسها للاختبار. مع فهرسة الكل: 84 جواباً صحيحاً بالمصدر الصحيح، 9 مأخوذة من نسخة قديمة، 14 «لا أعرف» خطأً، 6 «لا أعرف» مبرَّرة، و7 مختلَقة أو خاطئة. وبعد الفرز والضبط: 107، 1، 4، 6 و2.',
      header: 'مثال مركَّب · ⁦1 150⁩ وثيقة، و120 سؤال اختبار',
      chartTitle: 'الوثائق قبل الفهرسة، وما يغيّره الفرز في الأجوبة',
      docs: ['815 مرتَّبة', '60 دون مسؤول ولا تاريخ: أُسنِدت', '85 صورة ممسوحة دون نص: تُعرِّف على نصها', '190 مسحوبة', 'تكرارات ونسخ قديمة'],
      indexed: '960 وثيقة مفهرَسة · ⁦3 300⁩ صفحة · ⁦7 200⁩ مقطع',
      runAll: 'فهرسة الكل', runSorted: 'بعد الفرز والضبط',
      legend: ['صحيح، بالمصدر الصحيح', 'مأخوذ من نسخة قديمة', '«لا أعرف» خطأً', '«لا أعرف» مبرَّرة', 'مختلَق أو خاطئ'], legendW: [160, 160, 130, 140, 120],
      band: 'المساعد يجيب بما يُعطى له: النسخة القديمة المفهرَسة تصير جواباً خاطئاً، يُقال بثقة.',
      tiles: [
        { big: '190 ملفاً مسحوباً', l1: 'تكرارات ونسخ قديمة، من 1150', l2: 'وثيقة من ست' },
        { big: '9 أجوبة متقادمة', l1: 'صحيحة أمس، خاطئة اليوم', l2: 'النسخة القديمة كانت مفهرَسة' },
        { big: '107 من 120', l1: 'صحيحة، بالمصدر الصحيح، بعد الفرز والضبط', l2: 'اثنان مختلَقان، و6 «لا أعرف» مبرَّرة', hot: true },
      ],
      line1: 'للقيام به قبل أي مشروع: عدّ الوثائق، التكرارات، النسخ القديمة، الصور الممسوحة، وما ليس له مسؤول ولا تاريخ.',
      line2: 'أجوبة «لا أعرف» الست المبرَّرة هي قائمة المذكرات التي بقيت للكتابة.',
      note: 'مثال مركَّب · وثائق وأسئلة ونتائج خيالية.',
    },
  },
};
