import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { echeancier, preavis, STRINGS as SC } from './custom/contrats.mjs';
export const slug = 'logiciel-gestion-des-contrats-algerie-2027-contratheque-echeances-preavis-reconduction-tacite-avenants-versions-alertes-obligations-responsable';
const T = {
  fr: {
    cover: { eyebrow: 'Gestion des contrats · Algérie · 2027', title: ['Logiciel de gestion des contrats :', 'la date qui compte est le préavis'], subtitle: 'Contrathèque, échéances et préavis, reconduction tacite, avenants et versions, obligations, alertes', left: { label: 'Contrats', sub: '300 dans des classeurs' }, right: { label: 'Dates à suivre', sub: '148 en douze mois' } },
    trouvailles: { title: 'Ce que l’inventaire des contrats trouve', columns: ['Dans l’exemple', 'Ce que fait le logiciel'], rows: [
      { label: 'Contrat sans responsable', cells: ['41 contrats sur 300', 'un nom par contrat, et une suppléance'] },
      { label: 'Version signée introuvable', cells: ['17 contrats, seul un brouillon existe', 'le signé et ses avenants, dans la fiche'] },
      { label: 'Reconduction que personne n’a vue', cells: ['132 contrats se renouvellent seuls', 'date de préavis calculée, trois alertes'] },
      { label: 'On paie pour rien', cells: ['9 contrats pour un site ou un service fermé', 'chaque contrat rattaché à un site, un usage'] },
      { label: 'Engagement non tenu, ou non réclamé', cells: ['délais, pénalités, garanties jamais suivis', 'obligations listées, avec date et preuve'] },
    ], caption: 'Figure 1 · Cinq trouvailles de l’inventaire. Dans l’exemple, sur 300 contrats : 41 sans responsable, 17 sans version signée, 132 qui se renouvellent seuls, 9 payés pour rien. Chiffres fictifs.', alt: 'Matrice de cinq trouvailles de l’inventaire des contrats : contrat sans responsable, version signée introuvable, reconduction non vue, paiement pour rien, engagement non suivi ; pour chacune, le chiffre de l’exemple et ce que fait le logiciel.' },
    echeancier: { caption: 'Figure 2 · 148 dates en douze mois pour 300 contrats, dont 23 derniers jours de préavis dans les trois premiers mois. Contrats et dates fictifs.' },
    preavis: { caption: 'Figure 3 · Un contrat d’un an avec trois mois de préavis : si personne ne répond avant le dernier jour du préavis, il repart pour douze mois et 1 800 000 dinars sont engagés. Montant fictif.' },
    couches: { title: 'Ce qu’il y a dans le logiciel, en cinq couches', layers: [
      { label: 'Registre', items: [{ name: 'Le registre : une fiche par contrat, parties, objet, montant, dates, type, site, responsable', sub: 'savoir quels contrats existent' }] },
      { label: 'Documents', items: [{ name: 'Les documents : le contrat signé, ses avenants, ses annexes, les versions, la recherche plein texte', sub: 'la version signée, et pas une autre' }] },
      { label: 'Échéances', items: [{ name: 'Les échéances : préavis, fin de terme, révision de prix, garantie, avec alertes et remontée', sub: 'une date ne passe pas en silence', accent: true }] },
      { label: 'Obligations', items: [{ name: 'Les obligations : ce que chaque partie doit, délais, niveaux de service, pénalités, preuves', sub: 'tenir, et faire tenir' }] },
      { label: 'Droits et journal', items: [{ name: 'Les droits et le journal : qui voit quel contrat, qui a modifié quoi, validation avant signature', sub: 'un contrat n’est pas lisible par tous' }] },
    ], caption: 'Figure 4 · Cinq couches. La couche accentuée est celle des échéances : chaque date a une personne responsable, trois alertes et une remontée.', alt: 'Cinq couches : le registre ; les documents ; les échéances (accentuées) ; les obligations ; les droits et le journal.' },
    calendrier: { title: 'Douze semaines, en commençant par l’inventaire', unit: 'sem.', items: [
      { label: 'Inventaire des contrats', note: 'classeurs, boîtes mail, comptabilité : ce qui est payé a un contrat', from: 0, to: 3, accent: true },
      { label: 'Fiches et documents', note: 'une fiche par contrat, le signé retrouvé ou réclamé, les avenants', from: 2, to: 6 },
      { label: 'Dates et alertes', note: 'préavis, fins de terme, révisions, garanties, un responsable par date', from: 4, to: 8 },
      { label: 'Lecture assistée par IA', note: 'dates et clauses proposées avec la page, validées par une personne', from: 5, to: 9 },
      { label: 'Obligations et droits', note: 'niveaux de service, pénalités, qui voit quoi, journal', from: 7, to: 11 },
      { label: 'Circuit des nouveaux contrats', note: 'demande, validation, signature, fiche créée le jour même', from: 9, to: 12 },
    ], caption: 'Figure 5 · Douze semaines dans l’exemple. La période accentuée est la première : on ne suit que les contrats que l’on a retrouvés. Durées indicatives d’un exemple construit.', alt: 'Calendrier de douze semaines : inventaire des contrats (accentué), fiches et documents, dates et alertes, lecture assistée par IA, obligations et droits, circuit des nouveaux contrats.' },
    vie: { title: 'La vie d’un contrat, en six temps', items: [
      { label: 'Demande', sub: 'un besoin, un budget, une personne responsable' },
      { label: 'Négociation', sub: 'versions comparées, la dernière identifiée' },
      { label: 'Validation', sub: 'juridique, finance, direction, selon le montant' },
      { label: 'Signature', sub: 'le signé classé, la fiche et les dates créées' },
      { label: 'Exécution', sub: 'obligations suivies, avenants rattachés' },
      { label: 'Échéance', sub: 'préavis vu à temps : reconduire, renégocier, résilier', accent: true },
    ], caption: 'Figure 6 · Six temps. Le temps accentué est l’échéance : le préavis est vu à temps, et la suite se choisit.', alt: 'Six temps : demande, négociation, validation, signature, exécution, échéance (accentuée).' },
  },
  en: {
    cover: { eyebrow: 'Contract management · Algeria · 2027', title: ['Contract management software:', 'the date that matters is the notice'], subtitle: 'Contract register, deadlines and notice dates, automatic renewal, amendments, versions, obligations', left: { label: 'Contracts', sub: '300 in binders' }, right: { label: 'Dates to track', sub: '148 in twelve months' } },
    trouvailles: { title: 'What the contract inventory finds', columns: ['In the example', 'What the software does'], rows: [
      { label: 'Contract with nobody in charge', cells: ['41 contracts of 300', 'one name per contract, and a deputy'] },
      { label: 'Signed version not found', cells: ['17 contracts, only a draft exists', 'the signed copy and its amendments, in the record'] },
      { label: 'Renewal nobody saw', cells: ['132 contracts renew by themselves', 'notice date computed, three alerts'] },
      { label: 'Paying for nothing', cells: ['9 contracts for a closed site or service', 'each contract tied to a site and a use'] },
      { label: 'Commitment not kept, or not claimed', cells: ['deadlines, penalties, warranties never tracked', 'obligations listed, with a date and a proof'] },
    ], caption: 'Figure 1 · Five findings of the inventory. In the example, of 300 contracts: 41 with nobody in charge, 17 with no signed version, 132 that renew by themselves, 9 paid for nothing. Fictitious figures.', alt: 'Matrix of five findings of a contract inventory: contract with nobody in charge, signed version not found, renewal nobody saw, paying for nothing, commitment not tracked; for each, the figure in the example and what the software does.' },
    echeancier: { caption: 'Figure 2 · 148 dates in twelve months for 300 contracts, 23 of them last days of notice in the first three months. Fictitious contracts and dates.' },
    preavis: { caption: 'Figure 3 · A one-year contract with three months of notice: if nobody answers before the last day of notice, it runs for another twelve months and 1,800,000 dinars are committed. Fictitious amount.' },
    couches: { title: 'What is inside the software, in five layers', layers: [
      { label: 'Register', items: [{ name: 'The register: one record per contract, parties, subject, amount, dates, type, site, person in charge', sub: 'knowing which contracts exist' }] },
      { label: 'Documents', items: [{ name: 'Documents: the signed contract, its amendments, its annexes, versions, full-text search', sub: 'the signed version, and no other' }] },
      { label: 'Deadlines', items: [{ name: 'Deadlines: notice, end of term, price review, warranty, with alerts and escalation', sub: 'a date does not pass in silence', accent: true }] },
      { label: 'Obligations', items: [{ name: 'Obligations: what each party owes, deadlines, service levels, penalties, proofs', sub: 'keeping them, and having them kept' }] },
      { label: 'Rights and log', items: [{ name: 'Rights and the log: who sees which contract, who changed what, approval before signature', sub: 'a contract is not readable by everyone' }] },
    ], caption: 'Figure 4 · Five layers. The accented layer is the deadlines: each date has a person in charge, three alerts and an escalation.', alt: 'Five layers: the register; documents; deadlines (accented); obligations; rights and the log.' },
    calendrier: { title: 'Twelve weeks, starting with the inventory', unit: 'wk', items: [
      { label: 'Contract inventory', note: 'binders, mailboxes, accounting: what is paid has a contract', from: 0, to: 3, accent: true },
      { label: 'Records and documents', note: 'one record per contract, the signed copy found or requested, amendments', from: 2, to: 6 },
      { label: 'Dates and alerts', note: 'notice, ends of term, reviews, warranties, a person in charge per date', from: 4, to: 8 },
      { label: 'AI-assisted reading', note: 'dates and clauses proposed with the page, validated by a person', from: 5, to: 9 },
      { label: 'Obligations and rights', note: 'service levels, penalties, who sees what, log', from: 7, to: 11 },
      { label: 'Circuit for new contracts', note: 'request, approval, signature, record created the same day', from: 9, to: 12 },
    ], caption: 'Figure 5 · Twelve weeks in the example. The accented period is the first: you can only track the contracts you have found. Indicative durations of a constructed example.', alt: 'Twelve-week calendar: contract inventory (accented), records and documents, dates and alerts, AI-assisted reading, obligations and rights, circuit for new contracts.' },
    vie: { title: 'The life of a contract, in six steps', items: [
      { label: 'Request', sub: 'a need, a budget, a person in charge' },
      { label: 'Negotiation', sub: 'versions compared, the latest identified' },
      { label: 'Approval', sub: 'legal, finance, management, by amount' },
      { label: 'Signature', sub: 'signed copy filed, record and dates created' },
      { label: 'Performance', sub: 'obligations tracked, amendments attached' },
      { label: 'Deadline', sub: 'notice seen in time: renew, renegotiate, terminate', accent: true },
    ], caption: 'Figure 6 · Six steps. The accented step is the deadline: the notice is seen in time, and what follows is chosen.', alt: 'Six steps: request, negotiation, approval, signature, performance, deadline (accented).' },
  },
  ar: {
    cover: { eyebrow: 'تسيير العقود · الجزائر · 2027', title: ['برنامج تسيير العقود:', 'التاريخ المهم هو الإشعار'], subtitle: 'سجل العقود، الآجال والإشعار، التجديد الضمني، الملحقات والنسخ، الالتزامات، والتنبيهات', left: { label: 'العقود', sub: '300 في الملفات' }, right: { label: 'تواريخ تُتابَع', sub: '148 في اثني عشر شهراً' } },
    trouvailles: { title: 'ما يجده جرد العقود', columns: ['في المثال', 'ما يفعله البرنامج'], rows: [
      { label: 'عقد دون مسؤول', cells: ['41 عقداً من 300', 'اسم لكل عقد، ومن ينوب عنه'] },
      { label: 'النسخة الموقَّعة غير موجودة', cells: ['17 عقداً، ولا يوجد إلا مسودة', 'النسخة الموقَّعة وملحقاتها، في البطاقة'] },
      { label: 'تجديد لم يره أحد', cells: ['132 عقداً تتجدّد وحدها', 'تاريخ الإشعار محسوب، وثلاثة تنبيهات'] },
      { label: 'ندفع دون مقابل', cells: ['9 عقود لموقع أو خدمة مغلقة', 'كل عقد مربوط بموقع واستعمال'] },
      { label: 'التزام لم يُحترَم، أو لم يُطالَب به', cells: ['آجال، غرامات، وضمانات لم تُتابَع أبداً', 'التزامات مسجَّلة، بتاريخ ودليل'] },
    ], caption: 'الشكل 1 · خمسة اكتشافات في الجرد. في المثال، من 300 عقد: 41 دون مسؤول، 17 دون نسخة موقَّعة، 132 تتجدّد وحدها، و9 تُدفَع دون مقابل. أرقام خيالية.', alt: 'مصفوفة من خمسة اكتشافات في جرد العقود: عقد دون مسؤول، نسخة موقَّعة غير موجودة، تجديد لم يره أحد، دفع دون مقابل، والتزام غير متابَع؛ ولكل واحد رقم المثال وما يفعله البرنامج.' },
    echeancier: { caption: 'الشكل 2 · 148 تاريخاً في اثني عشر شهراً لـ300 عقد، منها 23 آخر يوم للإشعار في الأشهر الثلاثة الأولى. عقود وتواريخ خيالية.' },
    preavis: { caption: 'الشكل 3 · عقد من سنة بإشعار من ثلاثة أشهر: إذا لم يجب أحد قبل آخر يوم للإشعار، ينطلق لاثني عشر شهراً ويُلتزَم بمليون و800 ألف دينار. مبلغ خيالي.' },
    couches: { title: 'ما يوجد في البرنامج، في خمس طبقات', layers: [
      { label: 'السجل', items: [{ name: 'السجل: بطاقة لكل عقد، الأطراف، الموضوع، المبلغ، التواريخ، النوع، الموقع، والمسؤول', sub: 'معرفة أي العقود موجودة' }] },
      { label: 'الوثائق', items: [{ name: 'الوثائق: العقد الموقَّع، ملحقاته، مرفقاته، النسخ، والبحث في النص', sub: 'النسخة الموقَّعة، لا غيرها' }] },
      { label: 'الآجال', items: [{ name: 'الآجال: الإشعار، نهاية المدة، مراجعة السعر، والضمان، مع تنبيهات وتصعيد', sub: 'التاريخ لا يمر في صمت', accent: true }] },
      { label: 'الالتزامات', items: [{ name: 'الالتزامات: ما على كل طرف، الآجال، مستويات الخدمة، الغرامات، والأدلة', sub: 'أن نحترمها، وأن تُحترَم' }] },
      { label: 'الصلاحيات', items: [{ name: 'الصلاحيات والسجل: من يرى أي عقد، من غيّر ماذا، والمصادقة قبل التوقيع', sub: 'العقد لا يقرؤه الجميع' }] },
    ], caption: 'الشكل 4 · خمس طبقات. الطبقة المبرزة هي الآجال: لكل تاريخ شخص مسؤول، ثلاثة تنبيهات، وتصعيد.', alt: 'خمس طبقات: السجل؛ الوثائق؛ الآجال (مبرزة)؛ الالتزامات؛ والصلاحيات والسجل.' },
    calendrier: { title: 'اثنا عشر أسبوعاً، بدءاً بالجرد', unit: 'أسبوع', items: [
      { label: 'جرد العقود', note: 'الملفات، علب البريد، والمحاسبة: ما يُدفَع له عقد', from: 0, to: 3, accent: true },
      { label: 'البطاقات والوثائق', note: 'بطاقة لكل عقد، النسخة الموقَّعة تُوجَد أو تُطلَب، والملحقات', from: 2, to: 6 },
      { label: 'التواريخ والتنبيهات', note: 'الإشعار، نهايات المدة، المراجعات، الضمانات، ومسؤول لكل تاريخ', from: 4, to: 8 },
      { label: 'القراءة بالذكاء الاصطناعي', note: 'تواريخ وبنود مقترَحة مع الصفحة، يصادق عليها شخص', from: 5, to: 9 },
      { label: 'الالتزامات والصلاحيات', note: 'مستويات الخدمة، الغرامات، من يرى ماذا، والسجل', from: 7, to: 11 },
      { label: 'مسار العقود الجديدة', note: 'طلب، مصادقة، توقيع، وبطاقة تُنشأ في اليوم نفسه', from: 9, to: 12 },
    ], caption: 'الشكل 5 · اثنا عشر أسبوعاً في المثال. الفترة المبرزة هي الأولى: لا نتابع إلا العقود التي وجدناها. مدد تقريبية لمثال مركَّب.', alt: 'رزنامة من اثني عشر أسبوعاً: جرد العقود (مبرز)، البطاقات والوثائق، التواريخ والتنبيهات، القراءة بالذكاء الاصطناعي، الالتزامات والصلاحيات، ومسار العقود الجديدة.' },
    vie: { title: 'حياة عقد، في ست مراحل', items: [
      { label: 'الطلب', sub: 'حاجة، ميزانية، وشخص مسؤول' },
      { label: 'التفاوض', sub: 'نسخ تُقارَن، والأخيرة معروفة' },
      { label: 'المصادقة', sub: 'القانوني، المالية، والمديرية، حسب المبلغ' },
      { label: 'التوقيع', sub: 'النسخة الموقَّعة تُحفَظ، والبطاقة والتواريخ تُنشأ' },
      { label: 'التنفيذ', sub: 'الالتزامات متابَعة، والملحقات مربوطة' },
      { label: 'الأجل', sub: 'الإشعار يُرى في وقته: تجديد، تفاوض، أو فسخ', accent: true },
    ], caption: 'الشكل 6 · ست مراحل. المرحلة المبرزة هي الأجل: الإشعار يُرى في وقته، وما يتبعه يُختار.', alt: 'ست مراحل: الطلب، التفاوض، المصادقة، التوقيع، التنفيذ، والأجل (مبرز).' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      trouvailles: { svg: matrix({ title: t.trouvailles.title, columns: t.trouvailles.columns, rows: t.trouvailles.rows, rtl }), caption: t.trouvailles.caption, alt: t.trouvailles.alt },
      echeancier: { svg: echeancier(e.echeancier, rtl), caption: t.echeancier.caption, alt: e.echeancier.alt },
      preavis: { svg: preavis(e.preavis, rtl), caption: t.preavis.caption, alt: e.preavis.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 12, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
      vie: { svg: steps({ title: t.vie.title, steps: t.vie.items, arrows: true, rtl }), caption: t.vie.caption, alt: t.vie.alt },
    },
  };
}
