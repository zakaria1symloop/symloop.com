import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { accueil, lecture, STRINGS as SC } from './custom/intranet.mjs';
export const slug = 'comment-creer-un-intranet-d-entreprise-en-algerie-2027-notes-de-service-documents-annuaire-demandes-internes-recherche-accuse-de-lecture';
const T = {
  fr: {
    cover: { eyebrow: 'Intranet d’entreprise · Algérie · 2027', title: ['Créer un intranet d’entreprise', 'cinq blocs, un responsable chacun'], subtitle: 'Notes de service lues, documents en vigueur, annuaire, demandes suivies, une seule connexion', left: { label: 'Groupe de messagerie', sub: 'qui a lu ? on ne sait pas' }, right: { label: 'Intranet', sub: '41 lecteurs sur 45' } },
    accueil: { caption: 'Figure 1 · La page d’accueil d’un intranet de 45 personnes : une barre de recherche et cinq blocs. Les notes de service avec leur accusé de lecture, les demandes avec leur état, les documents dans leur version en vigueur, l’annuaire, et les applications derrière une seule connexion. Blocs et contenus sont un exemple construit.' },
    etapes: { title: 'Créer un intranet, dans cet ordre', items: [
      { label: 'Lister', sub: 'les dix questions qu’on vous pose le plus', accent: true },
      { label: 'Choisir', sub: 'cinq blocs, pas plus' },
      { label: 'Nommer', sub: 'un responsable par bloc' },
      { label: 'Remplir', sub: 'avant d’ouvrir, pas après' },
      { label: 'Ouvrir', sub: 'avec une vraie note, lue par tous' },
      { label: 'Élaguer', sub: 'chaque mois, ce qui est périmé' },
    ], caption: 'Figure 2 · Le temps accentué est le premier : lister les dix questions qui reviennent chaque semaine, parce qu’elles sont le plan de l’intranet. L’outil ne figure pas dans la liste : il se choisit après, et compte moins que le responsable nommé en face de chaque bloc.', alt: 'Six temps : lister (accentué), choisir, nommer, remplir, ouvrir, élaguer.' },
    couches: { title: 'Un intranet qui sert, en cinq couches', layers: [
      { label: 'Comptes', items: [{ name: 'Un compte par personne, une seule connexion pour l’intranet et les applications, fermé au départ', sub: 'ni compte partagé, ni ancien employé' }] },
      { label: 'Contenus', items: [{ name: 'Notes datées, documents en version en vigueur, un responsable et une date de revue par page', sub: 'ce qui est affiché est vrai aujourd’hui', accent: true }] },
      { label: 'Recherche', items: [{ name: 'Une seule barre : procédures, personnes, formulaires ; les recherches sans résultat sont relevées', sub: 'on trouve en dix secondes, ou l’on sait ce qui manque' }] },
      { label: 'Demandes', items: [{ name: 'Un formulaire par besoin, un circuit de validation, un état visible par le demandeur', sub: 'plus de papier qui se promène' }] },
      { label: 'Mesure', items: [{ name: 'Lectures par note, pages jamais ouvertes, délai des demandes, recherches sans réponse', sub: 'on garde ce qui sert, on retire le reste' }] },
    ], caption: 'Figure 3 · La couche accentuée est celle des contenus : un intranet vaut ce que vaut sa dernière mise à jour. Les comptes disent qui entre, la recherche fait trouver, les demandes remplacent le papier, et la mesure dit ce qui sert.', alt: 'Cinq couches : comptes ; contenus (accentuée) ; recherche ; demandes ; mesure.' },
    besoins: { title: 'Six situations, aujourd’hui et avec un intranet', columns: ['Aujourd’hui', 'Avec l’intranet'], rows: [
      { label: 'La note de service', cells: ['dans un groupe de messagerie, enfouie en deux jours', 'une page datée, avec la liste de ceux qui l’ont lue'] },
      { label: 'La procédure', cells: ['trois versions dans trois dossiers', 'une version en vigueur, avec sa date de revue'] },
      { label: 'À qui demander', cells: ['on demande au collègue d’à côté', 'un annuaire par service, avec les remplaçants'] },
      { label: 'La demande de matériel ou d’absence', cells: ['un papier ou un message, sans suite visible', 'un formulaire, un circuit, un état'] },
      { label: 'Le nouvel employé', cells: ['des semaines à comprendre qui fait quoi', 'une page d’accueil : comptes, documents, contacts'] },
      { label: 'Les applications', cells: ['cinq adresses et cinq mots de passe', 'une porte d’entrée, une seule connexion'] },
    ], caption: 'Figure 4 · Six situations ordinaires. Dans chacune, l’intranet ne fait rien d’extraordinaire : il met l’information à un seul endroit, la date, et rend visible ce qui ne l’était pas, qui a lu, où en est la demande, quelle version fait foi.', alt: 'Matrice de six situations, aujourd’hui et avec un intranet : note de service, procédure, à qui demander, demande de matériel ou d’absence, nouvel employé, applications.' },
    lecture: { caption: 'Figure 5 · Une note publiée un lundi pour 45 destinataires. Vingt-sept l’ont lue le mercredi, soit 60 % ; sans relance, la courbe plafonne à 30. Une relance envoyée aux seuls 18 qui n’ont pas lu amène 41 lecteurs, soit 91 %. Dans un groupe de messagerie, ce chiffre n’existe pas. Destinataires et lectures sont un exemple construit.' },
    calendrier: { title: 'Six semaines jusqu’à la première note lue', unit: 'sem.', items: [
      { label: 'Questions et blocs', note: 'les dix questions les plus posées, les cinq blocs retenus, un responsable nommé pour chacun', from: 0, to: 1, accent: true },
      { label: 'Comptes et connexion', note: 'un compte par personne, connexion unique, droits par service et par site', from: 1, to: 2 },
      { label: 'Contenus', note: 'notes en cours, procédures en vigueur, modèles, annuaire, liens vers les applications', from: 1, to: 4 },
      { label: 'Demandes', note: 'deux formulaires pour commencer, leur circuit, l’état visible par le demandeur', from: 3, to: 5 },
      { label: 'Ouverture et mesure', note: 'une vraie note avec accusé de lecture, relance au deuxième jour, premières mesures', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six semaines dans l’exemple. La période accentuée est la première : une semaine pour les questions, les blocs et les responsables. Les contenus prennent trois semaines et reviennent à vos équipes ; l’ouverture se fait avec une vraie note, et sa mesure. Durées indicatives d’un exemple construit.', alt: 'Calendrier de six semaines : questions et blocs (accentué, une semaine), comptes et connexion, contenus, demandes, ouverture et mesure.' },
  },
  en: {
    cover: { eyebrow: 'Company intranet · Algeria · 2027', title: ['Creating a company intranet', 'five blocks, one owner each'], subtitle: 'Memos that are read, current documents, a directory, requests followed, a single sign-in', left: { label: 'Messaging group', sub: 'who has read it? unknown' }, right: { label: 'Intranet', sub: '41 readers out of 45' } },
    accueil: { caption: 'Figure 1 · The home page of an intranet for 45 people: a search bar and five blocks. Memos with their read receipt, requests with their status, documents in their current version, the directory, and applications behind a single sign-in. Blocks and content are a constructed example.' },
    etapes: { title: 'Creating an intranet, in this order', items: [
      { label: 'List', sub: 'the ten questions you are asked most', accent: true },
      { label: 'Choose', sub: 'five blocks, no more' },
      { label: 'Name', sub: 'one owner per block' },
      { label: 'Fill', sub: 'before opening, not after' },
      { label: 'Open', sub: 'with a real memo, read by all' },
      { label: 'Prune', sub: 'every month, what is out of date' },
    ], caption: 'Figure 2 · The accented step is the first: list the ten questions that come back every week, because they are the plan of the intranet. The tool is not in the list: it is chosen afterwards, and matters less than the owner named against each block.', alt: 'Six steps: list (accented), choose, name, fill, open, prune.' },
    couches: { title: 'An intranet that is used, in five layers', layers: [
      { label: 'Accounts', items: [{ name: 'One account per person, a single sign-in for the intranet and the applications, closed on departure', sub: 'no shared account, no former employee' }] },
      { label: 'Content', items: [{ name: 'Dated memos, documents in their current version, an owner and a review date per page', sub: 'what is displayed is true today', accent: true }] },
      { label: 'Search', items: [{ name: 'A single bar: procedures, people, forms; searches with no result are recorded', sub: 'you find it in ten seconds, or you know what is missing' }] },
      { label: 'Requests', items: [{ name: 'One form per need, an approval route, a status the requester can see', sub: 'no more paper wandering about' }] },
      { label: 'Measurement', items: [{ name: 'Reads per memo, pages never opened, time taken by requests, searches with no answer', sub: 'you keep what is used, and remove the rest' }] },
    ], caption: 'Figure 3 · The accented layer is content: an intranet is worth what its last update is worth. Accounts say who comes in, search makes things findable, requests replace paper, and measurement says what is used.', alt: 'Five layers: accounts; content (accented); search; requests; measurement.' },
    besoins: { title: 'Six situations, today and with an intranet', columns: ['Today', 'With the intranet'], rows: [
      { label: 'The memo', cells: ['in a messaging group, buried within two days', 'a dated page, with the list of those who have read it'] },
      { label: 'The procedure', cells: ['three versions in three folders', 'one current version, with its review date'] },
      { label: 'Who to ask', cells: ['you ask the colleague next to you', 'a directory by department, with stand-ins'] },
      { label: 'The equipment or absence request', cells: ['a paper or a message, with no visible follow-up', 'a form, a route, a status'] },
      { label: 'The new employee', cells: ['weeks working out who does what', 'a welcome page: accounts, documents, contacts'] },
      { label: 'The applications', cells: ['five addresses and five passwords', 'one way in, a single sign-in'] },
    ], caption: 'Figure 4 · Six ordinary situations. In each, the intranet does nothing extraordinary: it puts the information in one place, dates it, and makes visible what was not, who has read it, where the request stands, which version is authoritative.', alt: 'Matrix of six situations, today and with an intranet: memo, procedure, who to ask, equipment or absence request, new employee, applications.' },
    lecture: { caption: 'Figure 5 · A memo published on a Monday for 45 recipients. Twenty-seven have read it by Wednesday, that is 60 %; without a reminder, the curve levels off at 30. A reminder sent only to the 18 who have not read it brings 41 readers, that is 91 %. In a messaging group, that figure does not exist. Recipients and readings are a constructed example.' },
    calendrier: { title: 'Six weeks to the first memo that is read', unit: 'wk', items: [
      { label: 'Questions and blocks', note: 'the ten most-asked questions, the five blocks kept, an owner named for each', from: 0, to: 1, accent: true },
      { label: 'Accounts and sign-in', note: 'one account per person, single sign-in, rights by department and by site', from: 1, to: 2 },
      { label: 'Content', note: 'current memos, procedures in force, templates, directory, links to the applications', from: 1, to: 4 },
      { label: 'Requests', note: 'two forms to start with, their route, the status visible to the requester', from: 3, to: 5 },
      { label: 'Opening and measurement', note: 'a real memo with a read receipt, a reminder on day two, the first measurements', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six weeks in the example. The accented period is the first: one week for the questions, the blocks and the owners. Content takes three weeks and falls to your own teams; opening is done with a real memo, and its measurement. Indicative durations from a constructed example.', alt: 'Six-week calendar: questions and blocks (accented, one week), accounts and sign-in, content, requests, opening and measurement.' },
  },
  ar: {
    cover: { eyebrow: 'إنترانت المؤسسة · الجزائر · 2027', title: ['إنشاء إنترانت للمؤسسة', 'خمس خانات، ومسؤول لكل واحدة'], subtitle: 'مذكرات تُقرأ، وثائق سارية، دليل، طلبات متابَعة، وتسجيل دخول واحد', left: { label: 'مجموعة مراسلة', sub: 'من قرأ؟ لا نعرف' }, right: { label: 'إنترانت', sub: '41 قارئاً من 45' } },
    accueil: { caption: 'الشكل 1 · الصفحة الرئيسية لإنترانت من 45 شخصاً: شريط بحث وخمس خانات. المذكرات مع إشعار القراءة، الطلبات مع حالتها، الوثائق في نسختها السارية، الدليل، والتطبيقات وراء تسجيل دخول واحد. الخانات والمحتويات مثال مركَّب.' },
    etapes: { title: 'إنشاء إنترانت، بهذا الترتيب', items: [
      { label: 'الجرد', sub: 'الأسئلة العشرة الأكثر طرحاً عليكم', accent: true },
      { label: 'الاختيار', sub: 'خمس خانات، لا أكثر' },
      { label: 'التسمية', sub: 'مسؤول لكل خانة' },
      { label: 'الملء', sub: 'قبل الفتح، لا بعده' },
      { label: 'الفتح', sub: 'بمذكرة حقيقية، يقرؤها الجميع' },
      { label: 'التشذيب', sub: 'كل شهر، ما انتهت صلاحيته' },
    ], caption: 'الشكل 2 · المرحلة المبرزة هي الأولى: جرد الأسئلة العشرة التي تعود كل أسبوع، لأنها مخطط الإنترانت. والأداة ليست في القائمة: تُختار بعدها، وتهمّ أقل من المسؤول المسمّى أمام كل خانة.', alt: 'ست مراحل: الجرد (مبرزة)، الاختيار، التسمية، الملء، الفتح، التشذيب.' },
    couches: { title: 'إنترانت ينفع، في خمس طبقات', layers: [
      { label: 'الحسابات', items: [{ name: 'حساب لكل شخص، تسجيل دخول واحد للإنترانت والتطبيقات، ويُغلق عند المغادرة', sub: 'لا حساب مشترك، ولا عامل سابق' }] },
      { label: 'المحتويات', items: [{ name: 'مذكرات مؤرَّخة، وثائق في نسختها السارية، ومسؤول وتاريخ مراجعة لكل صفحة', sub: 'ما يُعرض صحيح اليوم', accent: true }] },
      { label: 'البحث', items: [{ name: 'شريط واحد: إجراءات، أشخاص، واستمارات؛ والبحث دون نتيجة يُسجَّل', sub: 'نجد في عشر ثوانٍ، أو نعرف ما ينقص' }] },
      { label: 'الطلبات', items: [{ name: 'استمارة لكل حاجة، مسار مصادقة، وحالة يراها صاحب الطلب', sub: 'لا ورقة تتجوّل بعد اليوم' }] },
      { label: 'القياس', items: [{ name: 'القراءات لكل مذكرة، صفحات لم تُفتح، آجال الطلبات، وبحث دون جواب', sub: 'نُبقي ما ينفع، ونسحب الباقي' }] },
    ], caption: 'الشكل 3 · الطبقة المبرزة هي المحتويات: الإنترانت يساوي ما يساويه آخر تحديث له. الحسابات تقول من يدخل، البحث يوصل، الطلبات تعوّض الورق، والقياس يقول ما ينفع.', alt: 'خمس طبقات: الحسابات؛ المحتويات (مبرزة)؛ البحث؛ الطلبات؛ القياس.' },
    besoins: { title: 'ست حالات، اليوم ومع إنترانت', columns: ['اليوم', 'مع الإنترانت'], rows: [
      { label: 'المذكرة', cells: ['في مجموعة مراسلة، تُدفن في يومين', 'صفحة مؤرَّخة، مع قائمة من قرؤوها'] },
      { label: 'الإجراء', cells: ['ثلاث نسخ في ثلاثة مجلدات', 'نسخة سارية، مع تاريخ مراجعتها'] },
      { label: 'من نسأل', cells: ['نسأل الزميل المجاور', 'دليل حسب المصلحة، مع المعوِّضين'] },
      { label: 'طلب العتاد أو الغياب', cells: ['ورقة أو رسالة، دون متابعة ظاهرة', 'استمارة، مسار، وحالة'] },
      { label: 'العامل الجديد', cells: ['أسابيع لفهم من يفعل ماذا', 'صفحة استقبال: حسابات، وثائق، وجهات اتصال'] },
      { label: 'التطبيقات', cells: ['خمسة عناوين وخمس كلمات مرور', 'مدخل واحد، وتسجيل دخول واحد'] },
    ], caption: 'الشكل 4 · ست حالات عادية. وفي كل واحدة، لا يفعل الإنترانت شيئاً خارقاً: يضع المعلومة في مكان واحد، يؤرّخها، ويُظهر ما لم يكن ظاهراً، من قرأ، أين وصل الطلب، وأي نسخة هي المعتمَدة.', alt: 'مصفوفة ست حالات، اليوم ومع إنترانت: المذكرة، الإجراء، من نسأل، طلب العتاد أو الغياب، العامل الجديد، والتطبيقات.' },
    lecture: { caption: 'الشكل 5 · مذكرة نُشرت يوم اثنين لـ 45 مرسَلاً إليه. سبعة وعشرون قرؤوها يوم الأربعاء، أي 60 بالمئة؛ ودون تذكير، يتوقف المنحنى عند 30. وتذكير يُرسَل للثمانية عشر الذين لم يقرؤوا وحدهم يأتي بـ 41 قارئاً، أي 91 بالمئة. وفي مجموعة مراسلة، هذا الرقم غير موجود. المرسَل إليهم والقراءات مثال مركَّب.' },
    calendrier: { title: 'ستة أسابيع إلى أول مذكرة مقروءة', unit: 'أسبوع', items: [
      { label: 'الأسئلة والخانات', note: 'الأسئلة العشرة الأكثر طرحاً، الخانات الخمس المختارة، ومسؤول مسمّى لكل واحدة', from: 0, to: 1, accent: true },
      { label: 'الحسابات والدخول', note: 'حساب لكل شخص، تسجيل دخول واحد، وصلاحيات حسب المصلحة والموقع', from: 1, to: 2 },
      { label: 'المحتويات', note: 'المذكرات الجارية، الإجراءات السارية، النماذج، الدليل، وروابط التطبيقات', from: 1, to: 4 },
      { label: 'الطلبات', note: 'استمارتان للبداية، مسارهما، وحالة يراها صاحب الطلب', from: 3, to: 5 },
      { label: 'الفتح والقياس', note: 'مذكرة حقيقية بإشعار قراءة، تذكير في اليوم الثاني، وأولى القياسات', from: 5, to: 6 },
    ], caption: 'الشكل 6 · ستة أسابيع في المثال. الفترة المبرزة هي الأولى: أسبوع للأسئلة والخانات والمسؤولين. والمحتويات تأخذ ثلاثة أسابيع وتعود إلى فرقكم؛ والفتح يتم بمذكرة حقيقية، وبقياسها. مدد تقريبية لمثال مركَّب.', alt: 'تقويم ستة أسابيع: الأسئلة والخانات (مبرزة، أسبوع)، الحسابات والدخول، المحتويات، الطلبات، الفتح والقياس.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      accueil: { svg: accueil(e.accueil, rtl), caption: t.accueil.caption, alt: e.accueil.alt },
      etapes: { svg: steps({ title: t.etapes.title, steps: t.etapes.items, arrows: true, rtl }), caption: t.etapes.caption, alt: t.etapes.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      besoins: { svg: matrix({ title: t.besoins.title, columns: t.besoins.columns, rows: t.besoins.rows, rtl }), caption: t.besoins.caption, alt: t.besoins.alt },
      lecture: { svg: lecture(e.lecture, rtl), caption: t.lecture.caption, alt: e.lecture.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 6, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
