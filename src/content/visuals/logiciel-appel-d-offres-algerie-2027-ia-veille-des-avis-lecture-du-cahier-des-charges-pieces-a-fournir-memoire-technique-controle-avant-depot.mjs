import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { lecture, compte, STRINGS as SC } from './custom/appeldoffres.mjs';
export const slug = 'logiciel-appel-d-offres-algerie-2027-ia-veille-des-avis-lecture-du-cahier-des-charges-pieces-a-fournir-memoire-technique-controle-avant-depot';
const T = {
  fr: {
    cover: { eyebrow: 'Appels d’offres · Algérie · 2027', title: ['Logiciel appel d’offres :', 'savoir au premier jour ce qui manque'], subtitle: 'Veille des avis, lecture du cahier des charges par IA, pièces à fournir, mémoire technique, contrôle', left: { label: 'Avant', sub: 'on le sait trois jours avant' }, right: { label: 'Avec l’outil', sub: 'on le sait au jour 1' } },
    pertes: { title: 'Cinq façons de perdre un appel d’offres avant d’être lu', columns: ['Ce qui se passe', 'Ce que fait l’outil'], rows: [
      { label: 'L’avis est vu trop tard', cells: ['il reste six jours sur vingt et un', 'surveille vos sources, alerte le jour même'] },
      { label: 'Une pièce manque au dépôt', cells: ['découverte trois jours avant la date limite', 'liste des pièces dès le premier jour'] },
      { label: 'Une pièce n’est plus valide', cells: ['personne ne suivait sa date de validité', 'bibliothèque datée, rappel avant échéance'] },
      { label: 'Le mémoire est recopié du précédent', cells: ['le nom d’un autre client y est resté', 'réponses passées retrouvées, puis relues'] },
      { label: 'On répond à tout, ou au hasard', cells: ['aucun critère pour décider d’y aller', 'une grille d’aller ou non, sur vos critères'] },
    ], caption: 'Figure 1 · Cinq façons de perdre avant d’être lu. Aucune ne tient au fond de l’offre : toutes tiennent à ce que l’on a su trop tard.', alt: 'Matrice de cinq façons de perdre un appel d’offres : avis vu trop tard, pièce manquante, pièce qui n’est plus valide, mémoire recopié, réponse à tout ; pour chacune, ce qui se passe et ce que fait l’outil.' },
    lecture: { caption: 'Figure 2 · Un cahier des charges de 180 pages : 64 exigences sur 41 pages, dont 49 couvertes par la bibliothèque, 12 à produire et 3 à clarifier. Document et chiffres fictifs.' },
    compte: { caption: 'Figure 3 · Le même dossier sur 21 jours : avant, 15 points ouverts trois jours avant le dépôt et 2 au dépôt ; avec l’outil, 15 points connus au jour 1 et aucun au jour 17. Chiffres fictifs.' },
    dossier: { title: 'Un dossier, en six temps', items: [
      { label: 'Avis repéré', sub: 'la veille le trouve et le résume' },
      { label: 'Y aller ou non', sub: 'une grille, vos critères, votre décision' },
      { label: 'Lecture', sub: 'exigences, pièces, dates, avec la page', accent: true },
      { label: 'Répartition', sub: 'chaque point a une personne et une date' },
      { label: 'Rédaction et prix', sub: 'réponses passées relues, prix par vos équipes' },
      { label: 'Contrôle et dépôt', sub: 'complétude vérifiée, dossier archivé' },
    ], caption: 'Figure 4 · Six temps. Le temps accentué est la lecture : c’est elle qui donne, dès le premier jour, la liste de ce qui est exigé.', alt: 'Six temps : avis repéré, décision d’y aller ou non, lecture (accentuée), répartition, rédaction et prix, contrôle et dépôt.' },
    calendrier: { title: 'Neuf semaines, en commençant par trois dossiers passés', unit: 'sem.', items: [
      { label: 'Trois dossiers passés relus', note: 'un gagné, un perdu, un écarté : ce qui a manqué, et le jour où on l’a su', from: 0, to: 2, accent: true },
      { label: 'Bibliothèque de pièces', note: 'pièces avec dates de validité, références, réponses techniques classées', from: 1, to: 4 },
      { label: 'Lecture du cahier des charges', note: 'exigences avec numéro de page, essais sur vos anciens dossiers', from: 2, to: 6 },
      { label: 'Veille des avis', note: 'sources, mots et secteurs suivis, alerte le jour de la parution', from: 4, to: 7 },
      { label: 'Tableau du dossier et contrôle', note: 'points ouverts par personne, complétude avant envoi', from: 5, to: 8 },
      { label: 'Premier dossier réel', note: 'en double avec votre méthode actuelle, puis seul', from: 7, to: 9 },
    ], caption: 'Figure 5 · Neuf semaines dans l’exemple. La période accentuée est la première : trois dossiers passés disent ce qui a manqué, et servent de jeu d’essai. Durées indicatives d’un exemple construit.', alt: 'Calendrier de neuf semaines : relecture de trois dossiers passés (accentuée), bibliothèque de pièces, lecture du cahier des charges, veille des avis, tableau du dossier et contrôle, premier dossier réel.' },
    couches: { title: 'Ce qu’il y a dans l’outil, en cinq couches', layers: [
      { label: 'Veille', items: [{ name: 'La veille : sources suivies, mots et secteurs, alerte le jour de la parution, résumé de l’avis', sub: 'ne plus apprendre un avis par hasard' }] },
      { label: 'Lecture', items: [{ name: 'La lecture : reconnaissance de caractères, extraction des exigences, numéro de page, points à clarifier', sub: 'une exigence sans page n’entre pas dans la liste', accent: true }] },
      { label: 'Bibliothèque', items: [{ name: 'La bibliothèque : pièces avec dates de validité, références, réponses passées, prix de vos équipes', sub: 'retrouver, puis relire' }] },
      { label: 'Dossier', items: [{ name: 'Le dossier : points ouverts, une personne et une date pour chacun, versions, contrôle de complétude', sub: 'savoir ce qui reste' }] },
      { label: 'Suivi', items: [{ name: 'Le suivi : avis vus, dossiers déposés, résultats, motifs de rejet, délais par étape', sub: 'apprendre de chaque réponse' }] },
    ], caption: 'Figure 6 · Cinq couches. La couche accentuée est la lecture : une exigence n’entre dans la liste qu’avec le numéro de sa page.', alt: 'Cinq couches : la veille ; la lecture (accentuée) ; la bibliothèque ; le dossier ; le suivi.' },
  },
  en: {
    cover: { eyebrow: 'Tenders · Algeria · 2027', title: ['Tender software:', 'knowing on day one what is missing'], subtitle: 'Watching notices, AI reading of the tender document, documents to supply, technical proposal, check', left: { label: 'Before', sub: 'known three days before' }, right: { label: 'With the tool', sub: 'known on day 1' } },
    pertes: { title: 'Five ways to lose a tender before being read', columns: ['What happens', 'What the tool does'], rows: [
      { label: 'The notice is seen too late', cells: ['six days left out of twenty-one', 'watches your sources, alerts the same day'] },
      { label: 'A document is missing at submission', cells: ['discovered three days before the deadline', 'list of documents from the first day'] },
      { label: 'A document is no longer valid', cells: ['nobody was tracking its validity date', 'dated library, reminder before expiry'] },
      { label: 'The proposal is copied from the last one', cells: ['another client’s name was left in it', 'past answers retrieved, then reread'] },
      { label: 'You bid on everything, or at random', cells: ['no criteria for deciding to go', 'a go or no-go grid, on your criteria'] },
    ], caption: 'Figure 1 · Five ways to lose before being read. None is about the substance of the bid: all are about what was known too late.', alt: 'Matrix of five ways to lose a tender: notice seen too late, missing document, document no longer valid, copied proposal, bidding on everything; for each, what happens and what the tool does.' },
    lecture: { caption: 'Figure 2 · A 180-page tender document: 64 requirements on 41 pages, 49 of them covered by the library, 12 to produce and 3 to clarify. Fictitious document and figures.' },
    compte: { caption: 'Figure 3 · The same bid over 21 days: before, 15 open points three days before submission and 2 at submission; with the tool, 15 points known on day 1 and none on day 17. Fictitious figures.' },
    dossier: { title: 'A bid, in six steps', items: [
      { label: 'Notice spotted', sub: 'the watch finds and summarises it' },
      { label: 'Go or no-go', sub: 'a grid, your criteria, your decision' },
      { label: 'Reading', sub: 'requirements, documents, dates, with the page', accent: true },
      { label: 'Allocation', sub: 'each point has a person and a date' },
      { label: 'Writing and price', sub: 'past answers reread, price by your teams' },
      { label: 'Check and submit', sub: 'completeness verified, bid archived' },
    ], caption: 'Figure 4 · Six steps. The accented step is the reading: it is what gives, from the first day, the list of what is required.', alt: 'Six steps: notice spotted, go or no-go decision, reading (accented), allocation, writing and price, check and submission.' },
    calendrier: { title: 'Nine weeks, starting from three past bids', unit: 'wk', items: [
      { label: 'Three past bids reread', note: 'one won, one lost, one rejected: what was missing, and the day it was known', from: 0, to: 2, accent: true },
      { label: 'Library of documents', note: 'documents with validity dates, references, technical answers filed', from: 1, to: 4 },
      { label: 'Reading the tender document', note: 'requirements with page numbers, trials on your past bids', from: 2, to: 6 },
      { label: 'Watching notices', note: 'sources, words and sectors followed, alert on the day of publication', from: 4, to: 7 },
      { label: 'Bid board and check', note: 'open points per person, completeness before sending', from: 5, to: 8 },
      { label: 'First real bid', note: 'in parallel with your current method, then alone', from: 7, to: 9 },
    ], caption: 'Figure 5 · Nine weeks in the example. The accented period is the first: three past bids say what was missing, and serve as a test set. Indicative durations of a constructed example.', alt: 'Nine-week calendar: rereading three past bids (accented), library of documents, reading the tender document, watching notices, bid board and check, first real bid.' },
    couches: { title: 'What is inside the tool, in five layers', layers: [
      { label: 'Watch', items: [{ name: 'The watch: sources followed, words and sectors, alert on the day of publication, summary of the notice', sub: 'no longer learning of a notice by chance' }] },
      { label: 'Reading', items: [{ name: 'Reading: character recognition, extraction of requirements, page number, points to clarify', sub: 'a requirement with no page does not enter the list', accent: true }] },
      { label: 'Library', items: [{ name: 'The library: documents with validity dates, references, past answers, your teams’ prices', sub: 'retrieve, then reread' }] },
      { label: 'Bid', items: [{ name: 'The bid: open points, a person and a date for each, versions, completeness check', sub: 'knowing what remains' }] },
      { label: 'Follow-up', items: [{ name: 'Follow-up: notices seen, bids submitted, results, reasons for rejection, delays per stage', sub: 'learning from each answer' }] },
    ], caption: 'Figure 6 · Five layers. The accented layer is the reading: a requirement enters the list only with its page number.', alt: 'Five layers: the watch; reading (accented); the library; the bid; follow-up.' },
  },
  ar: {
    cover: { eyebrow: 'المناقصات · الجزائر · 2027', title: ['برنامج المناقصات:', 'أن نعرف منذ اليوم الأول ما ينقص'], subtitle: 'رصد الإعلانات، قراءة دفتر الشروط بالذكاء الاصطناعي، الوثائق المطلوبة، المذكرة التقنية، والمراقبة', left: { label: 'قبل', sub: 'نعرف قبل الأجل بثلاثة أيام' }, right: { label: 'مع الأداة', sub: 'نعرف في اليوم 1' } },
    pertes: { title: 'خمس طرق لخسارة مناقصة قبل أن يُقرأ العرض', columns: ['ما يحدث', 'ما تفعله الأداة'], rows: [
      { label: 'الإعلان يُرى بعد فوات الأوان', cells: ['تبقى ستة أيام من واحد وعشرين', 'ترصد مصادركم، وتنبّه في اليوم نفسه'] },
      { label: 'وثيقة ناقصة عند الإيداع', cells: ['تُكتشَف قبل آخر أجل بثلاثة أيام', 'قائمة الوثائق منذ اليوم الأول'] },
      { label: 'وثيقة لم تعد صالحة', cells: ['لا أحد كان يتابع تاريخ صلاحيتها', 'مكتبة مؤرَّخة، وتذكير قبل الانتهاء'] },
      { label: 'المذكرة منسوخة من السابقة', cells: ['بقي فيها اسم زبون آخر', 'أجوبة سابقة تُسترجَع، ثم تُراجَع'] },
      { label: 'نجيب عن كل شيء، أو كيفما اتفق', cells: ['لا معيار لقرار المشاركة', 'شبكة للمشاركة أو عدمها، بمعاييركم'] },
    ], caption: 'الشكل 1 · خمس طرق للخسارة قبل أن يُقرأ العرض. لا واحدة منها تخص مضمون العرض: كلها تخص ما عُرف بعد فوات الأوان.', alt: 'مصفوفة من خمس طرق لخسارة مناقصة: إعلان يُرى متأخراً، وثيقة ناقصة، وثيقة لم تعد صالحة، مذكرة منسوخة، والجواب عن كل شيء؛ ولكل واحدة ما يحدث وما تفعله الأداة.' },
    lecture: { caption: 'الشكل 2 · دفتر شروط من 180 صفحة: 64 متطلَّباً على 41 صفحة، منها 49 تغطيها المكتبة، 12 تُعَدّ، و3 تُستوضَح. وثيقة وأرقام خيالية.' },
    compte: { caption: 'الشكل 3 · الملف نفسه على 21 يوماً: قبل، 15 نقطة مفتوحة قبل الإيداع بثلاثة أيام ونقطتان عند الإيداع؛ مع الأداة، 15 نقطة معروفة في اليوم 1 ولا شيء في اليوم 17. أرقام خيالية.' },
    dossier: { title: 'ملف، في ست مراحل', items: [
      { label: 'رصد الإعلان', sub: 'الرصد يجده ويلخّصه' },
      { label: 'نشارك أم لا', sub: 'شبكة، معاييركم، وقراركم' },
      { label: 'القراءة', sub: 'المتطلبات، الوثائق، التواريخ، مع الصفحة', accent: true },
      { label: 'التوزيع', sub: 'لكل نقطة شخص وتاريخ' },
      { label: 'التحرير والسعر', sub: 'أجوبة سابقة تُراجَع، والسعر من فرقكم' },
      { label: 'المراقبة والإيداع', sub: 'اكتمال مُتحقَّق منه، وملف مؤرشَف' },
    ], caption: 'الشكل 4 · ست مراحل. المرحلة المبرزة هي القراءة: هي التي تعطي، منذ اليوم الأول، قائمة ما هو مطلوب.', alt: 'ست مراحل: رصد الإعلان، قرار المشاركة أو عدمها، القراءة (مبرزة)، التوزيع، التحرير والسعر، والمراقبة والإيداع.' },
    calendrier: { title: 'تسعة أسابيع، بدءاً بثلاثة ملفات سابقة', unit: 'أسبوع', items: [
      { label: 'مراجعة ثلاثة ملفات سابقة', note: 'واحد رُبح، واحد خُسر، وواحد أُقصي: ما الذي نقص، وفي أي يوم عُرف', from: 0, to: 2, accent: true },
      { label: 'مكتبة الوثائق', note: 'وثائق بتواريخ صلاحيتها، مراجع، وأجوبة تقنية مرتَّبة', from: 1, to: 4 },
      { label: 'قراءة دفتر الشروط', note: 'متطلبات برقم الصفحة، وتجارب على ملفاتكم القديمة', from: 2, to: 6 },
      { label: 'رصد الإعلانات', note: 'المصادر، الكلمات، والقطاعات المتابَعة، وتنبيه يوم النشر', from: 4, to: 7 },
      { label: 'لوحة الملف والمراقبة', note: 'النقاط المفتوحة لكل شخص، والاكتمال قبل الإرسال', from: 5, to: 8 },
      { label: 'أول ملف حقيقي', note: 'بالتوازي مع طريقتكم الحالية، ثم وحده', from: 7, to: 9 },
    ], caption: 'الشكل 5 · تسعة أسابيع في المثال. الفترة المبرزة هي الأولى: ثلاثة ملفات سابقة تقول ما الذي نقص، وتصلح مجموعة تجارب. مدد تقريبية لمثال مركَّب.', alt: 'رزنامة من تسعة أسابيع: مراجعة ثلاثة ملفات سابقة (مبرزة)، مكتبة الوثائق، قراءة دفتر الشروط، رصد الإعلانات، لوحة الملف والمراقبة، وأول ملف حقيقي.' },
    couches: { title: 'ما يوجد في الأداة، في خمس طبقات', layers: [
      { label: 'الرصد', items: [{ name: 'الرصد: المصادر المتابَعة، الكلمات والقطاعات، تنبيه يوم النشر، وملخّص الإعلان', sub: 'ألا نعلم بإعلان بالصدفة' }] },
      { label: 'القراءة', items: [{ name: 'القراءة: التعرف على الحروف، استخراج المتطلبات، رقم الصفحة، والنقاط التي تُستوضَح', sub: 'متطلَّب دون صفحة لا يدخل القائمة', accent: true }] },
      { label: 'المكتبة', items: [{ name: 'المكتبة: وثائق بتواريخ صلاحيتها، مراجع، أجوبة سابقة، وأسعار فرقكم', sub: 'نسترجع، ثم نراجع' }] },
      { label: 'الملف', items: [{ name: 'الملف: النقاط المفتوحة، شخص وتاريخ لكل واحدة، النسخ، ومراقبة الاكتمال', sub: 'معرفة ما بقي' }] },
      { label: 'المتابعة', items: [{ name: 'المتابعة: الإعلانات المرئية، الملفات المودَعة، النتائج، أسباب الإقصاء، والآجال لكل مرحلة', sub: 'التعلّم من كل جواب' }] },
    ], caption: 'الشكل 6 · خمس طبقات. الطبقة المبرزة هي القراءة: المتطلَّب لا يدخل القائمة إلا برقم صفحته.', alt: 'خمس طبقات: الرصد؛ القراءة (مبرزة)؛ المكتبة؛ الملف؛ والمتابعة.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      pertes: { svg: matrix({ title: t.pertes.title, columns: t.pertes.columns, rows: t.pertes.rows, rtl }), caption: t.pertes.caption, alt: t.pertes.alt },
      lecture: { svg: lecture(e.lecture, rtl), caption: t.lecture.caption, alt: e.lecture.alt },
      compte: { svg: compte(e.compte, rtl), caption: t.compte.caption, alt: e.compte.alt },
      dossier: { svg: steps({ title: t.dossier.title, steps: t.dossier.items, arrows: true, rtl }), caption: t.dossier.caption, alt: t.dossier.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 9, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
    },
  };
}
