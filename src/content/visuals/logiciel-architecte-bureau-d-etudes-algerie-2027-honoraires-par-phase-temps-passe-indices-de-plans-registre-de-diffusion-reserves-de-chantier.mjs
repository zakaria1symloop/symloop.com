import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { diffusion, reserves, STRINGS as SC } from './custom/architecte.mjs';
export const slug = 'logiciel-architecte-bureau-d-etudes-algerie-2027-honoraires-par-phase-temps-passe-indices-de-plans-registre-de-diffusion-reserves-de-chantier';
const T = {
  fr: {
    cover: { eyebrow: 'Architecture · Bureau d’études · Algérie · 2027', title: ['Logiciel d’architecte :', 'qui a quel indice de quel plan'], subtitle: 'Honoraires par phase, heures passées, indices de plans, diffusion, réserves de chantier, comptes rendus', left: { label: 'Indice B', sub: 'chez l’entreprise' }, right: { label: 'Indice D', sub: 'au cabinet' } },
    couches: { title: 'Ce qu’il y a dans un logiciel de cabinet d’architecture ou de bureau d’études, en cinq couches', layers: [
      { label: 'Affaires', items: [{ name: 'Les affaires : un client, un contrat, des phases, un montant d’honoraires et un budget d’heures par phase', sub: 'ce qui a été vendu' }] },
      { label: 'Temps', items: [{ name: 'Les temps : les heures saisies par personne, par affaire et par phase, chaque semaine', sub: 'ce que cela coûte réellement' }] },
      { label: 'Documents', items: [{ name: 'Les documents : plans, indices, pièces écrites, registre de diffusion, accusés de réception', sub: 'ce qui sort du cabinet', accent: true }] },
      { label: 'Chantier', items: [{ name: 'Le chantier : visites, réserves par lot avec photo, comptes rendus, levées vérifiées', sub: 'ce qui se passe sur place' }] },
      { label: 'Honoraires', items: [{ name: 'Les honoraires : notes par phase achevée, avenants, encaissements, reste à facturer', sub: 'ce qui rentre' }] },
    ], caption: 'Figure 1 · Cinq couches. La couche accentuée est celle des documents : un cabinet produit des plans, et les ennuis commencent quand quelqu’un travaille sur une ancienne version.', alt: 'Cinq couches : les affaires ; les temps ; les documents (accentués) ; le chantier ; les honoraires.' },
    phases: { title: 'Une affaire, phase par phase : ce qui est remis, ce qui se mesure', columns: ['Ce qui est remis', 'Ce qui se mesure'], rows: [
      { label: 'Esquisse', cells: ['plans de principe, estimation', 'heures passées, allers-retours avec le client'] },
      { label: 'Avant-projet', cells: ['plans détaillés, descriptif', 'heures contre budget, modifications demandées'] },
      { label: 'Dossier d’exécution', cells: ['plans d’exécution, quantitatifs', 'indices émis, plans diffusés, heures'] },
      { label: 'Consultation des entreprises', cells: ['dossier, réponses aux questions', 'questions reçues, délais de réponse'] },
      { label: 'Suivi de chantier', cells: ['visites, comptes rendus, réserves', 'réserves ouvertes, ancienneté, visites'] },
    ], caption: 'Figure 2 · Cinq phases, à titre d’exemple : les noms et le découpage suivent chaque contrat. Pour chacune, une chose remise et une chose mesurée ; c’est la seconde qui dit si la phase a rapporté ce qu’elle a coûté.', alt: 'Matrice de cinq phases d’une affaire, à titre d’exemple : esquisse, avant-projet, dossier d’exécution, consultation des entreprises, suivi de chantier ; pour chacune, ce qui est remis et ce qui se mesure.' },
    diffusion: { caption: 'Figure 3 · Un registre de diffusion : six plans, quatre destinataires, vingt envois à suivre, six en retard. Deux plans sont exécutés par le gros œuvre sur un ancien indice. Exemple construit.' },
    visite: { title: 'Une visite de chantier, en six temps', items: [
      { label: 'Préparation', sub: 'réserves ouvertes, par lot, à revoir' },
      { label: 'Sur place', sub: 'photo, lieu, lot, échéance : saisie au téléphone', accent: true },
      { label: 'Compte rendu', sub: 'généré en sortant, sans ressaisie' },
      { label: 'Envoi', sub: 'à chaque entreprise, sa liste' },
      { label: 'Levée', sub: 'l’entreprise déclare, photo à l’appui' },
      { label: 'Vérification', sub: 'confirmée à la visite suivante' },
    ], caption: 'Figure 4 · Six temps. Le temps accentué est la saisie sur place : une réserve notée au téléphone devant l’ouvrage, avec sa photo, n’a pas à être retranscrite le soir au bureau.', alt: 'Six temps : préparation, sur place (accentué), compte rendu, envoi, levée, vérification.' },
    reserves: { caption: 'Figure 5 · Après dix visites : 86 réserves relevées, 61 levées, 25 ouvertes dont 9 depuis plus de trente jours. Par lot, avec l’ancienneté. Exemple construit.' },
    calendrier: { title: 'Neuf semaines pour un cabinet', unit: 'sem.', items: [
      { label: 'Cadrage', note: 'les phases du cabinet, la codification des plans, les destinataires habituels, les affaires en cours', from: 0, to: 1, accent: true },
      { label: 'Affaires et phases', note: 'contrats, honoraires et budget d’heures par phase, reprise des affaires en cours', from: 1, to: 3 },
      { label: 'Temps', note: 'saisie hebdomadaire par affaire et par phase, heures contre budget', from: 2, to: 4 },
      { label: 'Documents et diffusion', note: 'plans, indices, registre de diffusion, envois et accusés de réception', from: 3, to: 6 },
      { label: 'Chantier', note: 'réserves au téléphone, comptes rendus générés, listes par entreprise', from: 5, to: 8 },
      { label: 'Honoraires et mise en service', note: 'notes d’honoraires par phase, reste à facturer, formation, première affaire suivie de bout en bout', from: 7, to: 9 },
    ], caption: 'Figure 6 · Neuf semaines dans l’exemple. La période accentuée est la première : on fixe la codification des plans et les phases avant tout, parce que le reste s’y accroche. Durées indicatives d’un exemple construit.', alt: 'Calendrier de neuf semaines : cadrage (accentué), affaires et phases, temps, documents et diffusion, chantier, honoraires et mise en service.' },
  },
  en: {
    cover: { eyebrow: 'Architecture · Design office · Algeria · 2027', title: ['Software for architects:', 'who has which drawing revision'], subtitle: 'Fees per phase, hours spent, drawing revisions, distribution, site snags, site reports', left: { label: 'Revision B', sub: 'at the contractor’s' }, right: { label: 'Revision D', sub: 'at the practice' } },
    couches: { title: 'What is inside software for an architecture practice or design office, in five layers', layers: [
      { label: 'Jobs', items: [{ name: 'Jobs: a client, a contract, phases, a fee amount and a budget of hours per phase', sub: 'what was sold' }] },
      { label: 'Time', items: [{ name: 'Time: hours entered per person, per job and per phase, every week', sub: 'what it really costs' }] },
      { label: 'Documents', items: [{ name: 'Documents: drawings, revisions, written documents, distribution register, acknowledgements', sub: 'what leaves the practice', accent: true }] },
      { label: 'Site', items: [{ name: 'The site: visits, snags per trade with a photo, site reports, clearances checked', sub: 'what happens on the ground' }] },
      { label: 'Fees', items: [{ name: 'Fees: invoices per completed phase, variations, payments received, amount still to invoice', sub: 'what comes in' }] },
    ], caption: 'Figure 1 · Five layers. The accented layer is documents: a practice produces drawings, and trouble starts when someone works from an old version.', alt: 'Five layers: jobs; time; documents (accented); the site; fees.' },
    phases: { title: 'A job, phase by phase: what is handed over, what is measured', columns: ['What is handed over', 'What is measured'], rows: [
      { label: 'Sketch design', cells: ['outline drawings, estimate', 'hours spent, rounds with the client'] },
      { label: 'Preliminary design', cells: ['detailed drawings, description', 'hours against budget, changes requested'] },
      { label: 'Construction documents', cells: ['working drawings, quantities', 'revisions issued, drawings sent, hours'] },
      { label: 'Tendering', cells: ['tender file, answers to questions', 'questions received, response times'] },
      { label: 'Site supervision', cells: ['visits, site reports, snags', 'open snags, their age, visits'] },
    ], caption: 'Figure 2 · Five phases, as an example: names and breakdown follow each contract. For each, one thing handed over and one thing measured; it is the second that says whether the phase earned what it cost.', alt: 'Matrix of five phases of a job, as an example: sketch design, preliminary design, construction documents, tendering, site supervision; for each, what is handed over and what is measured.' },
    diffusion: { caption: 'Figure 3 · A distribution register: six drawings, four recipients, twenty sends to track, six behind. Two drawings are being built by the structural contractor from an old revision. Constructed example.' },
    visite: { title: 'A site visit, in six steps', items: [
      { label: 'Preparation', sub: 'open snags, per trade, to look at again' },
      { label: 'On site', sub: 'photo, place, trade, due date: entered on the phone', accent: true },
      { label: 'Site report', sub: 'generated on leaving, nothing retyped' },
      { label: 'Sending', sub: 'to each contractor, its own list' },
      { label: 'Clearance', sub: 'the contractor declares it, with a photo' },
      { label: 'Check', sub: 'confirmed at the next visit' },
    ], caption: 'Figure 4 · Six steps. The accented step is entry on site: a snag noted on the phone in front of the work, with its photo, does not have to be written up at the office that evening.', alt: 'Six steps: preparation, on site (accented), site report, sending, clearance, check.' },
    reserves: { caption: 'Figure 5 · After ten visits: 86 snags raised, 61 cleared, 25 open of which 9 for more than thirty days. By trade, with their age. Constructed example.' },
    calendrier: { title: 'Nine weeks for a practice', unit: 'wk', items: [
      { label: 'Scoping', note: 'the practice’s phases, the drawing numbering, the usual recipients, the jobs in progress', from: 0, to: 1, accent: true },
      { label: 'Jobs and phases', note: 'contracts, fees and budget of hours per phase, taking over jobs in progress', from: 1, to: 3 },
      { label: 'Time', note: 'weekly entry per job and per phase, hours against budget', from: 2, to: 4 },
      { label: 'Documents and distribution', note: 'drawings, revisions, distribution register, sends and acknowledgements', from: 3, to: 6 },
      { label: 'Site', note: 'snags on the phone, reports generated, lists per contractor', from: 5, to: 8 },
      { label: 'Fees and go-live', note: 'fee invoices per phase, amount still to invoice, training, first job followed end to end', from: 7, to: 9 },
    ], caption: 'Figure 6 · Nine weeks in the example. The accented period is the first: drawing numbering and phases are fixed before anything else, because everything else hangs on them. Indicative durations of a constructed example.', alt: 'Nine-week calendar: scoping (accented), jobs and phases, time, documents and distribution, site, fees and go-live.' },
  },
  ar: {
    cover: { eyebrow: 'الهندسة المعمارية · مكتب الدراسات · الجزائر · 2027', title: ['برنامج المهندس المعماري:', 'من عنده أي مؤشّر من أي مخطط'], subtitle: 'الأتعاب حسب المرحلة، الساعات المقضية، مؤشّرات المخططات، التوزيع، تحفّظات الورشة، والمحاضر', left: { label: 'المؤشّر B', sub: 'عند المقاولة' }, right: { label: 'المؤشّر D', sub: 'في المكتب' } },
    couches: { title: 'ما يوجد في برنامج مكتب معماري أو مكتب دراسات، في خمس طبقات', layers: [
      { label: 'المشاريع', items: [{ name: 'المشاريع: زبون، عقد، مراحل، مبلغ أتعاب وميزانية ساعات لكل مرحلة', sub: 'ما بيع' }] },
      { label: 'الوقت', items: [{ name: 'الوقت: الساعات المُدخَلة لكل شخص، لكل مشروع، ولكل مرحلة، كل أسبوع', sub: 'ما يكلّفه ذلك فعلاً' }] },
      { label: 'الوثائق', items: [{ name: 'الوثائق: المخططات، المؤشّرات، الوثائق المكتوبة، سجل التوزيع، وإشعارات الاستلام', sub: 'ما يخرج من المكتب', accent: true }] },
      { label: 'الورشة', items: [{ name: 'الورشة: الزيارات، التحفّظات لكل حصة بصورة، المحاضر، والرفع المتحقَّق منه', sub: 'ما يجري في المكان' }] },
      { label: 'الأتعاب', items: [{ name: 'الأتعاب: كشوف لكل مرحلة منتهية، الملاحق، التحصيلات، وما بقي للفوترة', sub: 'ما يدخل' }] },
    ], caption: 'الشكل 1 · خمس طبقات. الطبقة المبرزة هي الوثائق: المكتب ينتج مخططات، والمتاعب تبدأ حين يعمل أحد على نسخة قديمة.', alt: 'خمس طبقات: المشاريع؛ الوقت؛ الوثائق (مبرزة)؛ الورشة؛ والأتعاب.' },
    phases: { title: 'مشروع، مرحلة بمرحلة: ما يُسلَّم، وما يُقاس', columns: ['ما يُسلَّم', 'ما يُقاس'], rows: [
      { label: 'الرسم الأولي', cells: ['مخططات مبدئية، وتقدير', 'الساعات المقضية، والذهاب والإياب مع الزبون'] },
      { label: 'المشروع التمهيدي', cells: ['مخططات مفصَّلة، ووصف', 'الساعات مقابل الميزانية، والتعديلات المطلوبة'] },
      { label: 'ملف التنفيذ', cells: ['مخططات التنفيذ، والكميات', 'المؤشّرات الصادرة، المخططات الموزَّعة، والساعات'] },
      { label: 'استشارة المقاولات', cells: ['الملف، والأجوبة عن الأسئلة', 'الأسئلة الواردة، وآجال الجواب'] },
      { label: 'متابعة الورشة', cells: ['الزيارات، المحاضر، والتحفّظات', 'التحفّظات المفتوحة، أقدميتها، والزيارات'] },
    ], caption: 'الشكل 2 · خمس مراحل، على سبيل المثال: الأسماء والتقسيم يتبعان كل عقد. ولكل واحدة، شيء يُسلَّم وشيء يُقاس؛ والثاني هو الذي يقول هل ربحت المرحلة ما كلّفته.', alt: 'مصفوفة من خمس مراحل لمشروع، على سبيل المثال: الرسم الأولي، المشروع التمهيدي، ملف التنفيذ، استشارة المقاولات، ومتابعة الورشة؛ ولكل واحدة، ما يُسلَّم وما يُقاس.' },
    diffusion: { caption: 'الشكل 3 · سجل توزيع: ستة مخططات، أربعة مستلمين، عشرون إرسالاً يجب تتبّعها، وستة متأخرة. ومخططان تنفّذهما مقاولة الأشغال الكبرى على مؤشّر قديم. مثال مركَّب.' },
    visite: { title: 'زيارة ورشة، في ست مراحل', items: [
      { label: 'التحضير', sub: 'التحفّظات المفتوحة، لكل حصة، للمراجعة' },
      { label: 'في المكان', sub: 'صورة، موضع، حصة، وأجل: تُدخَل على الهاتف', accent: true },
      { label: 'المحضر', sub: 'يُولَّد عند الخروج، دون إعادة كتابة' },
      { label: 'الإرسال', sub: 'لكل مقاولة، قائمتها' },
      { label: 'الرفع', sub: 'المقاولة تصرّح، بصورة' },
      { label: 'التحقق', sub: 'يُؤكَّد في الزيارة التالية' },
    ], caption: 'الشكل 4 · ست مراحل. المرحلة المبرزة هي الإدخال في المكان: تحفّظ يُسجَّل على الهاتف أمام العمل، بصورته، لا يحتاج إلى إعادة كتابته مساءً في المكتب.', alt: 'ست مراحل: التحضير، في المكان (مبرزة)، المحضر، الإرسال، الرفع، والتحقق.' },
    reserves: { caption: 'الشكل 5 · بعد عشر زيارات: 86 تحفّظاً مسجَّلاً، 61 مرفوعاً، و25 مفتوحاً منها 9 منذ أكثر من ثلاثين يوماً. حسب الحصة، مع الأقدمية. مثال مركَّب.' },
    calendrier: { title: 'تسعة أسابيع لمكتب', unit: 'أسبوع', items: [
      { label: 'التأطير', note: 'مراحل المكتب، ترميز المخططات، المستلمون المعتادون، والمشاريع الجارية', from: 0, to: 1, accent: true },
      { label: 'المشاريع والمراحل', note: 'العقود، الأتعاب وميزانية الساعات لكل مرحلة، واسترجاع المشاريع الجارية', from: 1, to: 3 },
      { label: 'الوقت', note: 'إدخال أسبوعي لكل مشروع ولكل مرحلة، والساعات مقابل الميزانية', from: 2, to: 4 },
      { label: 'الوثائق والتوزيع', note: 'المخططات، المؤشّرات، سجل التوزيع، الإرسالات، وإشعارات الاستلام', from: 3, to: 6 },
      { label: 'الورشة', note: 'التحفّظات على الهاتف، محاضر مولَّدة، وقوائم لكل مقاولة', from: 5, to: 8 },
      { label: 'الأتعاب والتشغيل', note: 'كشوف الأتعاب لكل مرحلة، ما بقي للفوترة، تكوين، وأول مشروع متابَع من البداية إلى النهاية', from: 7, to: 9 },
    ], caption: 'الشكل 6 · تسعة أسابيع في المثال. الفترة المبرزة هي الأولى: يُحدَّد ترميز المخططات والمراحل قبل كل شيء، لأن الباقي يتعلّق بهما. مدد تقريبية لمثال مركَّب.', alt: 'رزنامة من تسعة أسابيع: التأطير (مبرزة)، المشاريع والمراحل، الوقت، الوثائق والتوزيع، الورشة، ثم الأتعاب والتشغيل.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      phases: { svg: matrix({ title: t.phases.title, columns: t.phases.columns, rows: t.phases.rows, rtl }), caption: t.phases.caption, alt: t.phases.alt },
      diffusion: { svg: diffusion(e.diffusion, rtl), caption: t.diffusion.caption, alt: e.diffusion.alt },
      visite: { svg: steps({ title: t.visite.title, steps: t.visite.items, arrows: true, rtl }), caption: t.visite.caption, alt: t.visite.alt },
      reserves: { svg: reserves(e.reserves, rtl), caption: t.reserves.caption, alt: e.reserves.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 9, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
