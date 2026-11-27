import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { roue, page, STRINGS as SC } from './custom/annuaire.mjs';
export const slug = 'comment-creer-un-annuaire-en-ligne-en-algerie-2027-annuaire-d-entreprises-fiches-verifiees-revendication-recherche-par-wilaya-revue-annuelle';
const T = {
  fr: {
    cover: { eyebrow: 'Annuaire en ligne · Algérie · 2027', title: ['Créer un annuaire en ligne :', 'des fiches qui restent justes'], subtitle: 'Une page par entreprise, revendication, vérification datée, recherche par wilaya, revue annuelle', left: { label: 'Après trois ans', sub: '52 % de fiches fausses' }, right: { label: 'Revue annuelle', sub: '90 % de fiches justes' } },
    roue: { caption: 'Figure 1 · Si 2 % des fiches changent chaque mois, 52 % sont fausses après trois ans sans revérification ; avec une revue annuelle par douzièmes, 90 % restent justes. Taux et volumes fictifs.' },
    parcours: { title: 'Une fiche, en six temps', items: [
      { label: 'Import', sub: 'le PDF et les tableurs deviennent des lignes' },
      { label: 'Dédoublonnage', sub: 'la même société n’a qu’une fiche' },
      { label: 'Invitation', sub: 'un message à l’entreprise, avec un code' },
      { label: 'Revendication', sub: 'l’entreprise corrige ; une personne vérifie', accent: true },
      { label: 'Publication', sub: 'la page, sa date, ses données structurées' },
      { label: 'Revue annuelle', sub: 'un message chaque année, un appel sinon' },
    ], caption: 'Figure 2 · Six temps. Le temps accentué est la revendication : l’entreprise corrige elle-même sa fiche, et une personne vérifie avant publication.', alt: 'Six temps : import, dédoublonnage, invitation, revendication (accentuée), publication, revue annuelle.' },
    page: { caption: 'Figure 3 · La même fiche, affichée pour une personne et publiée en données structurées pour un moteur ou un assistant. Entreprise fictive, exemple simplifié.' },
    situations: { title: 'Cinq situations, et ce que la plateforme en fait', columns: ['Avec un PDF ou un tableur', 'Avec la plateforme'], rows: [
      { label: 'La même société figure trois fois', cells: ['trois lignes, trois orthographes', 'fusion proposée, une personne confirme'] },
      { label: 'Une fiche est fausse', cells: ['l’entreprise appelle, on corrige dans deux ans', 'elle corrige elle-même, vérification avant publication'] },
      { label: 'Une recherche ne donne rien', cells: ['personne ne le sait', 'recherches sans résultat listées chaque semaine'] },
      { label: 'Une entreprise a fermé', cells: ['elle reste dans le PDF', 'sans réponse à deux revues, la fiche est retirée'] },
      { label: 'Une entreprise paie pour être en tête', cells: ['rien ne le dit au lecteur', 'mise en avant signalée, classement inchangé'] },
    ], caption: 'Figure 4 · Cinq situations. Un PDF fige l’annuaire le jour de son impression ; la plateforme le fait vivre, et dit ce qu’elle ne sait pas.', alt: 'Matrice de cinq situations : société en triple, fiche fausse, recherche sans résultat, entreprise fermée, mise en avant payante ; pour chacune, avec un PDF ou un tableur et avec la plateforme.' },
    calendrier: { title: 'Douze semaines, en commençant par cent appels', unit: 'sem.', items: [
      { label: 'Cent fiches appelées', note: 'tirées au hasard dans l’annuaire actuel : combien sont encore justes', from: 0, to: 1, accent: true },
      { label: 'Modèle de fiche et catégories', note: 'champs, activités, wilayas, ce qui est public et ce qui ne l’est pas', from: 0, to: 3 },
      { label: 'Import et dédoublonnage', note: 'le PDF et les tableurs repris, les doublons fusionnés', from: 2, to: 5 },
      { label: 'Pages, recherche, données structurées', note: 'une page par fiche, filtres par activité et par wilaya, plan du site', from: 3, to: 8 },
      { label: 'Campagne de revendication', note: 'invitations, codes, vérification, relances', from: 6, to: 11 },
      { label: 'Ouverture et première revue', note: 'publication, puis un douzième des fiches chaque mois', from: 10, to: 12 },
    ], caption: 'Figure 5 · Douze semaines dans l’exemple. La période accentuée est la première : cent appels disent ce que vaut l’annuaire actuel. Durées indicatives d’un exemple construit.', alt: 'Calendrier de douze semaines : cent fiches appelées (accentué), modèle de fiche et catégories, import et dédoublonnage, pages, recherche et données structurées, campagne de revendication, ouverture et première revue.' },
    couches: { title: 'Ce qu’il y a dans la plateforme, en cinq couches', layers: [
      { label: 'Fiches', items: [{ name: 'Les fiches : une page par entreprise, des champs précis, une adresse stable, des données structurées', sub: 'ce que lisent les personnes et les machines' }] },
      { label: 'Recherche', items: [{ name: 'La recherche : mots, activité, wilaya, fautes de frappe, arabe et français, recherches sans résultat', sub: 'trouver, ou savoir ce qui manque' }] },
      { label: 'Vérification', items: [{ name: 'La vérification : revendication par code, contrôle par une personne, date affichée, revue annuelle', sub: 'une fiche dit de quand elle date', accent: true }] },
      { label: 'Comptes', items: [{ name: 'Les comptes : l’entreprise gère sa fiche, l’équipe modère, chaque changement est tracé', sub: 'qui a modifié quoi' }] },
      { label: 'Revenus', items: [{ name: 'Les revenus : fiche enrichie, mise en avant signalée, demandes de contact, statistiques de la fiche', sub: 'jamais un classement vendu sans le dire' }] },
    ], caption: 'Figure 6 · Cinq couches. La couche accentuée est la vérification : c’est elle qui sépare un annuaire d’une liste.', alt: 'Cinq couches : les fiches ; la recherche ; la vérification (accentuée) ; les comptes ; les revenus.' },
  },
  en: {
    cover: { eyebrow: 'Online directory · Algeria · 2027', title: ['Creating an online directory:', 'entries that stay correct'], subtitle: 'One page per company, claiming, dated verification, search by wilaya, yearly review', left: { label: 'After three years', sub: '52% of entries wrong' }, right: { label: 'Yearly review', sub: '90% of entries correct' } },
    roue: { caption: 'Figure 1 · If 2% of entries change every month, 52% are wrong after three years with no re-verification; with a yearly review by twelfths, 90% stay correct. Fictitious rate and volumes.' },
    parcours: { title: 'An entry, in six steps', items: [
      { label: 'Import', sub: 'the PDF and the spreadsheets become rows' },
      { label: 'Deduplication', sub: 'the same company has one entry only' },
      { label: 'Invitation', sub: 'a message to the company, with a code' },
      { label: 'Claiming', sub: 'the company corrects; a person verifies', accent: true },
      { label: 'Publication', sub: 'the page, its date, its structured data' },
      { label: 'Yearly review', sub: 'a message every year, a call otherwise' },
    ], caption: 'Figure 2 · Six steps. The accented step is claiming: the company corrects its own entry, and a person verifies before publication.', alt: 'Six steps: import, deduplication, invitation, claiming (accented), publication, yearly review.' },
    page: { caption: 'Figure 3 · The same entry, displayed for a person and published as structured data for a search engine or an assistant. Fictitious company, simplified example.' },
    situations: { title: 'Five situations, and what the platform does with them', columns: ['With a PDF or a spreadsheet', 'With the platform'], rows: [
      { label: 'The same company appears three times', cells: ['three lines, three spellings', 'merge suggested, a person confirms'] },
      { label: 'An entry is wrong', cells: ['the company calls, it is fixed in two years', 'it corrects it itself, verified before publication'] },
      { label: 'A search returns nothing', cells: ['nobody knows', 'zero-result searches listed every week'] },
      { label: 'A company has closed', cells: ['it stays in the PDF', 'no answer to two reviews, the entry is removed'] },
      { label: 'A company pays to be on top', cells: ['nothing tells the reader', 'promotion labelled, ranking unchanged'] },
    ], caption: 'Figure 4 · Five situations. A PDF freezes the directory on the day it is printed; the platform keeps it alive, and says what it does not know.', alt: 'Matrix of five situations: company listed three times, wrong entry, search with no result, closed company, paid promotion; for each, with a PDF or a spreadsheet and with the platform.' },
    calendrier: { title: 'Twelve weeks, starting with one hundred calls', unit: 'wk', items: [
      { label: 'One hundred entries called', note: 'drawn at random from the current directory: how many are still correct', from: 0, to: 1, accent: true },
      { label: 'Entry template and categories', note: 'fields, activities, wilayas, what is public and what is not', from: 0, to: 3 },
      { label: 'Import and deduplication', note: 'the PDF and the spreadsheets taken over, duplicates merged', from: 2, to: 5 },
      { label: 'Pages, search, structured data', note: 'one page per entry, filters by activity and by wilaya, site map', from: 3, to: 8 },
      { label: 'Claiming campaign', note: 'invitations, codes, verification, reminders', from: 6, to: 11 },
      { label: 'Opening and first review', note: 'publication, then one twelfth of the entries every month', from: 10, to: 12 },
    ], caption: 'Figure 5 · Twelve weeks in the example. The accented period is the first: one hundred calls say what the current directory is worth. Indicative durations of a constructed example.', alt: 'Twelve-week calendar: one hundred entries called (accented), entry template and categories, import and deduplication, pages, search and structured data, claiming campaign, opening and first review.' },
    couches: { title: 'What is inside the platform, in five layers', layers: [
      { label: 'Entries', items: [{ name: 'Entries: one page per company, precise fields, a stable address, structured data', sub: 'what people and machines read' }] },
      { label: 'Search', items: [{ name: 'Search: words, activity, wilaya, typing errors, Arabic and French, zero-result searches', sub: 'finding, or knowing what is missing' }] },
      { label: 'Verification', items: [{ name: 'Verification: claiming by code, check by a person, date displayed, yearly review', sub: 'an entry says how old it is', accent: true }] },
      { label: 'Accounts', items: [{ name: 'Accounts: the company manages its entry, the team moderates, every change is recorded', sub: 'who changed what' }] },
      { label: 'Revenue', items: [{ name: 'Revenue: enriched entry, labelled promotion, contact requests, entry statistics', sub: 'never a ranking sold without saying so' }] },
    ], caption: 'Figure 6 · Five layers. The accented layer is verification: it is what separates a directory from a list.', alt: 'Five layers: entries; search; verification (accented); accounts; revenue.' },
  },
  ar: {
    cover: { eyebrow: 'دليل على الإنترنت · الجزائر · 2027', title: ['إنشاء دليل على الإنترنت:', 'بطاقات تبقى صحيحة'], subtitle: 'صفحة لكل مؤسسة، مطالبة بالبطاقة، تحقق مؤرَّخ، بحث حسب الولاية، ومراجعة سنوية', left: { label: 'بعد ثلاث سنوات', sub: '52 بالمئة بطاقات خاطئة' }, right: { label: 'المراجعة السنوية', sub: '90 بالمئة بطاقات صحيحة' } },
    roue: { caption: 'الشكل 1 · إذا تغيّرت 2 بالمئة من البطاقات كل شهر، فإن 52 بالمئة خاطئة بعد ثلاث سنوات دون إعادة تحقق؛ ومع مراجعة سنوية بالتناوب، 90 بالمئة تبقى صحيحة. نسبة وأحجام خيالية.' },
    parcours: { title: 'بطاقة، في ست مراحل', items: [
      { label: 'الاستيراد', sub: 'الملف والجداول تصير سطوراً' },
      { label: 'إزالة التكرار', sub: 'الشركة نفسها لها بطاقة واحدة' },
      { label: 'الدعوة', sub: 'رسالة إلى المؤسسة، مع رمز' },
      { label: 'المطالبة', sub: 'المؤسسة تصحّح؛ وشخص يتحقق', accent: true },
      { label: 'النشر', sub: 'الصفحة، تاريخها، وبياناتها المنظَّمة' },
      { label: 'المراجعة السنوية', sub: 'رسالة كل سنة، وإلا فاتصال' },
    ], caption: 'الشكل 2 · ست مراحل. المرحلة المبرزة هي المطالبة: المؤسسة تصحّح بطاقتها بنفسها، وشخص يتحقق قبل النشر.', alt: 'ست مراحل: الاستيراد، إزالة التكرار، الدعوة، المطالبة (مبرزة)، النشر، والمراجعة السنوية.' },
    page: { caption: 'الشكل 3 · البطاقة نفسها، معروضة لشخص ومنشورة في بيانات منظَّمة لمحرك بحث أو مساعد ذكي. مؤسسة خيالية، ومثال مبسَّط.' },
    situations: { title: 'خمس حالات، وما تفعله المنصة بها', columns: ['مع ملف أو جدول', 'مع المنصة'], rows: [
      { label: 'الشركة نفسها مذكورة ثلاث مرات', cells: ['ثلاثة سطور، وثلاث كتابات', 'دمج مقترَح، وشخص يؤكّد'] },
      { label: 'بطاقة خاطئة', cells: ['المؤسسة تتصل، ويُصحَّح بعد سنتين', 'تصحّحها بنفسها، مع تحقق قبل النشر'] },
      { label: 'بحث لا يعطي شيئاً', cells: ['لا أحد يعلم', 'عمليات البحث دون نتيجة تُعرَض كل أسبوع'] },
      { label: 'مؤسسة أغلقت', cells: ['تبقى في الملف', 'دون جواب على مراجعتين، تُسحَب البطاقة'] },
      { label: 'مؤسسة تدفع لتكون في المقدمة', cells: ['لا شيء يقوله للقارئ', 'إبراز مُشار إليه، وترتيب لا يتغيّر'] },
    ], caption: 'الشكل 4 · خمس حالات. الملف يجمّد الدليل يوم طباعته؛ والمنصة تبقيه حياً، وتقول ما لا تعرفه.', alt: 'مصفوفة من خمس حالات: شركة مذكورة ثلاث مرات، بطاقة خاطئة، بحث دون نتيجة، مؤسسة مغلقة، وإبراز مدفوع؛ ولكل واحدة مع ملف أو جدول ومع المنصة.' },
    calendrier: { title: 'اثنا عشر أسبوعاً، بدءاً بمئة اتصال', unit: 'أسبوع', items: [
      { label: 'الاتصال بمئة بطاقة', note: 'مسحوبة عشوائياً من الدليل الحالي: كم منها ما زال صحيحاً', from: 0, to: 1, accent: true },
      { label: 'نموذج البطاقة والأصناف', note: 'الحقول، الأنشطة، الولايات، وما هو عمومي وما ليس كذلك', from: 0, to: 3 },
      { label: 'الاستيراد وإزالة التكرار', note: 'الملف والجداول مسترجَعة، والتكرارات مدموجة', from: 2, to: 5 },
      { label: 'الصفحات، البحث، والبيانات المنظَّمة', note: 'صفحة لكل بطاقة، تصفية حسب النشاط والولاية، وخريطة الموقع', from: 3, to: 8 },
      { label: 'حملة المطالبة بالبطاقات', note: 'دعوات، رموز، تحقق، وتذكيرات', from: 6, to: 11 },
      { label: 'الفتح والمراجعة الأولى', note: 'النشر، ثم جزء من اثني عشر من البطاقات كل شهر', from: 10, to: 12 },
    ], caption: 'الشكل 5 · اثنا عشر أسبوعاً في المثال. الفترة المبرزة هي الأولى: مئة اتصال تقول ما قيمة الدليل الحالي. مدد تقريبية لمثال مركَّب.', alt: 'رزنامة من اثني عشر أسبوعاً: الاتصال بمئة بطاقة (مبرز)، نموذج البطاقة والأصناف، الاستيراد وإزالة التكرار، الصفحات والبحث والبيانات المنظَّمة، حملة المطالبة، والفتح والمراجعة الأولى.' },
    couches: { title: 'ما يوجد في المنصة، في خمس طبقات', layers: [
      { label: 'البطاقات', items: [{ name: 'البطاقات: صفحة لكل مؤسسة، حقول دقيقة، عنوان ثابت، وبيانات منظَّمة', sub: 'ما يقرؤه الأشخاص والآلات' }] },
      { label: 'البحث', items: [{ name: 'البحث: الكلمات، النشاط، الولاية، أخطاء الكتابة، العربية والفرنسية، والبحث دون نتيجة', sub: 'أن نجد، أو نعرف ما ينقص' }] },
      { label: 'التحقق', items: [{ name: 'التحقق: مطالبة برمز، مراقبة من شخص، تاريخ ظاهر، ومراجعة سنوية', sub: 'البطاقة تقول متى تُحقِّق منها', accent: true }] },
      { label: 'الحسابات', items: [{ name: 'الحسابات: المؤسسة تسيّر بطاقتها، الفريق يراقب، وكل تغيير مسجَّل', sub: 'من غيّر ماذا' }] },
      { label: 'المداخيل', items: [{ name: 'المداخيل: بطاقة موسَّعة، إبراز مُشار إليه، طلبات اتصال، وإحصائيات البطاقة', sub: 'لا يُباع ترتيب دون قول ذلك' }] },
    ], caption: 'الشكل 6 · خمس طبقات. الطبقة المبرزة هي التحقق: هي التي تفصل الدليل عن القائمة.', alt: 'خمس طبقات: البطاقات؛ البحث؛ التحقق (مبرز)؛ الحسابات؛ والمداخيل.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      roue: { svg: roue(e.roue, rtl), caption: t.roue.caption, alt: e.roue.alt },
      parcours: { svg: steps({ title: t.parcours.title, steps: t.parcours.items, arrows: true, rtl }), caption: t.parcours.caption, alt: t.parcours.alt },
      page: { svg: page(e.page, rtl), caption: t.page.caption, alt: e.page.alt },
      situations: { svg: matrix({ title: t.situations.title, columns: t.situations.columns, rows: t.situations.rows, rtl }), caption: t.situations.caption, alt: t.situations.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 12, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
    },
  };
}
