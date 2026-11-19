import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { cycle, filtres, STRINGS as SC } from './custom/annonces.mjs';
export const slug = 'comment-creer-un-site-d-annonces-en-algerie-2027-depot-d-annonce-moderation-fausses-annonces-recherche-mise-en-avant-comptes-pro';
const T = {
  fr: {
    cover: { eyebrow: 'Site d’annonces · Algérie · 2027', title: ['Créer un site d’annonces', 'qui reste fréquentable'], subtitle: 'Dépôt, vérification, fausses annonces, recherche par filtres, expiration, mise en avant, comptes pro', left: { label: '920 annonces', sub: 'dont 690 mortes' }, right: { label: '230 annonces', sub: 'toutes vraies' } },
    vie: { title: 'La vie d’une annonce, en six temps', items: [
      { label: 'Dépôt', sub: 'catégorie, champs, photos, prix' },
      { label: 'Vérification', sub: 'numéro confirmé, doublon, contenu', accent: true },
      { label: 'Publication', sub: 'en ligne, trouvable par les filtres' },
      { label: 'Contacts', sub: 'appel, message, numéro révélé' },
      { label: 'Échéance', sub: 'renouveler, ou expirer à 30 jours' },
      { label: 'Clôture', sub: 'vendu, retiré, archivé' },
    ], caption: 'Figure 1 · Six temps. Le temps accentué est la vérification : entre le dépôt et la publication, quelques contrôles automatiques et, pour une minorité d’annonces, un regard humain. C’est là que se joue la réputation du site.', alt: 'Six temps : dépôt, vérification (accentuée), publication, contacts, échéance, clôture.' },
    couches: { title: 'Ce qu’il y a dans un site d’annonces, en cinq couches', layers: [
      { label: 'Annonces', items: [{ name: 'Les annonces : une catégorie, des champs propres à cette catégorie, des photos, un prix, une ville', sub: 'le stock que le site donne à voir' }] },
      { label: 'Comptes', items: [{ name: 'Les comptes : particuliers et professionnels, numéro confirmé, historique des annonces', sub: 'qui parle, et depuis quand' }] },
      { label: 'Recherche', items: [{ name: 'La recherche : filtres par champ, tri, alertes enregistrées, pages par catégorie et par ville', sub: 'ce pour quoi l’acheteur vient', accent: true }] },
      { label: 'Confiance', items: [{ name: 'La confiance : vérification avant publication, signalements, règles affichées, blocages', sub: 'ce qui fait qu’on revient' }] },
      { label: 'Revenus', items: [{ name: 'Les revenus : mise en avant, remontée en tête, comptes professionnels, vitrines', sub: 'ce que l’annonceur accepte de payer' }] },
    ], caption: 'Figure 2 · Cinq couches. La couche accentuée est la recherche : un site d’annonces est d’abord un moteur de recherche sur un stock que d’autres remplissent. Tout ce qui est en dessous sert à ce que la recherche trouve juste.', alt: 'Cinq couches : les annonces ; les comptes ; la recherche (accentuée) ; la confiance ; les revenus.' },
    fraudes: { title: 'Six nuisances d’un site d’annonces : le signal, la parade', columns: ['Le signal', 'La parade'], rows: [
      { label: 'La fausse annonce à prix trop bas', cells: ['prix très sous les autres, compte neuf', 'retenue avant publication, vérification'] },
      { label: 'Le doublon', cells: ['mêmes photos, même numéro, même titre', 'détecté au dépôt : une seule visible'] },
      { label: 'L’annonce morte', cells: ['aucune connexion de l’annonceur', 'expiration, relance, « c’est vendu ? »'] },
      { label: 'L’acompte demandé à distance', cells: ['« envoyez pour réserver »', 'avertissement affiché, signalement'] },
      { label: 'Le professionnel déguisé', cells: ['dix annonces depuis un compte particulier', 'un seuil, puis le compte professionnel'] },
      { label: 'Les comptes en série', cells: ['un appareil, vingt numéros', 'limites par appareil et par numéro'] },
    ], caption: 'Figure 3 · Six nuisances. Chacune a un signal que le logiciel peut lire avant qu’un acheteur ne s’en plaigne ; aucune ne se règle par une page de conditions que personne ne lit.', alt: 'Matrice de six nuisances d’un site d’annonces : la fausse annonce à prix trop bas, le doublon, l’annonce morte, l’acompte demandé à distance, le professionnel déguisé, les comptes en série ; pour chacune, le signal et la parade.' },
    cycle: { caption: 'Figure 4 · 1 000 annonces déposées, 920 publiées ; trente jours plus tard, 230 encore valables. Sans expiration, l’acheteur voit les 920. Proportions fictives.' },
    filtres: { caption: 'Figure 5 · Une recherche à trois filtres : 9 annonces affichées, 16 invisibles parce que l’année ou le prix n’ont pas été saisis. Exemple construit.' },
    calendrier: { title: 'Dix semaines pour une catégorie, une région, un site qui se tient', unit: 'sem.', items: [
      { label: 'Cadrage', note: 'la catégorie, la région, les champs, les règles de publication, les premiers annonceurs', from: 0, to: 1, accent: true },
      { label: 'Dépôt et comptes', note: 'formulaire par catégorie, photos, numéro confirmé par code', from: 1, to: 4 },
      { label: 'Recherche', note: 'filtres, tri, pages par catégorie et par ville, alertes', from: 2, to: 5 },
      { label: 'Vérification', note: 'file de vérification, doublons, signalements, blocages', from: 4, to: 7 },
      { label: 'Cycle de vie', note: 'expiration, relance, « vendu ? », statistiques de l’annonce', from: 5, to: 8 },
      { label: 'Revenus et ouverture', note: 'mise en avant, comptes professionnels, premières annonces réelles', from: 7, to: 10 },
    ], caption: 'Figure 6 · Dix semaines dans l’exemple, pour une seule catégorie et une seule région. La période accentuée est la première : avant d’écrire une ligne de code, on fixe les champs de la catégorie et l’on trouve les premiers annonceurs. Durées indicatives d’un exemple construit.', alt: 'Calendrier de dix semaines : cadrage (accentué), dépôt et comptes, recherche, vérification, cycle de vie, revenus et ouverture.' },
  },
  en: {
    cover: { eyebrow: 'Classifieds site · Algeria · 2027', title: ['Building a classifieds site', 'people keep coming back to'], subtitle: 'Posting, checking, fake listings, search by filters, expiry, paid promotion, business accounts', left: { label: '920 listings', sub: '690 of them dead' }, right: { label: '230 listings', sub: 'all of them true' } },
    vie: { title: 'The life of a listing, in six steps', items: [
      { label: 'Posting', sub: 'category, fields, photos, price' },
      { label: 'Checking', sub: 'number confirmed, duplicate, content', accent: true },
      { label: 'Publication', sub: 'online, findable through filters' },
      { label: 'Contacts', sub: 'call, message, number revealed' },
      { label: 'Due date', sub: 'renew, or expire at 30 days' },
      { label: 'Closing', sub: 'sold, withdrawn, archived' },
    ], caption: 'Figure 1 · Six steps. The accented step is checking: between posting and publication, a few automatic controls and, for a minority of listings, a human look. That is where the site’s reputation is decided.', alt: 'Six steps: posting, checking (accented), publication, contacts, due date, closing.' },
    couches: { title: 'What is inside a classifieds site, in five layers', layers: [
      { label: 'Listings', items: [{ name: 'The listings: a category, fields specific to that category, photos, a price, a city', sub: 'the stock the site puts on show' }] },
      { label: 'Accounts', items: [{ name: 'The accounts: private and business, number confirmed, history of listings', sub: 'who is speaking, and since when' }] },
      { label: 'Search', items: [{ name: 'Search: filters per field, sorting, saved alerts, pages per category and per city', sub: 'what the buyer comes for', accent: true }] },
      { label: 'Trust', items: [{ name: 'Trust: checking before publication, reports, displayed rules, blocking', sub: 'what makes people come back' }] },
      { label: 'Revenue', items: [{ name: 'Revenue: featured listings, bumping to the top, business accounts, shop windows', sub: 'what the advertiser agrees to pay for' }] },
    ], caption: 'Figure 2 · Five layers. The accented layer is search: a classifieds site is first of all a search engine over a stock that others fill. Everything below it is there so that search finds the right thing.', alt: 'Five layers: the listings; the accounts; search (accented); trust; revenue.' },
    fraudes: { title: 'Six nuisances on a classifieds site: the signal, the countermeasure', columns: ['The signal', 'The countermeasure'], rows: [
      { label: 'The fake listing priced too low', cells: ['price far below the others, new account', 'held before publication, checked'] },
      { label: 'The duplicate', cells: ['same photos, same number, same title', 'caught at posting: only one visible'] },
      { label: 'The dead listing', cells: ['the advertiser never logs in', 'expiry, reminder, “is it sold?”'] },
      { label: 'The deposit asked for remotely', cells: ['“send money to reserve it”', 'warning displayed, report button'] },
      { label: 'The business in disguise', cells: ['ten listings from a private account', 'a threshold, then a business account'] },
      { label: 'Accounts in series', cells: ['one device, twenty numbers', 'limits per device and per number'] },
    ], caption: 'Figure 3 · Six nuisances. Each has a signal the software can read before a buyer complains; none is settled by a terms page nobody reads.', alt: 'Matrix of six nuisances on a classifieds site: the fake listing priced too low, the duplicate, the dead listing, the deposit asked for remotely, the business in disguise, accounts in series; for each, the signal and the countermeasure.' },
    cycle: { caption: 'Figure 4 · 1,000 listings posted, 920 published; thirty days later, 230 still valid. Without expiry, the buyer sees all 920. Fictitious proportions.' },
    filtres: { caption: 'Figure 5 · A search with three filters: 9 listings shown, 16 invisible because the year or the price was not entered. Constructed example.' },
    calendrier: { title: 'Ten weeks for one category, one region, a site that holds up', unit: 'wk', items: [
      { label: 'Scoping', note: 'the category, the region, the fields, the publication rules, the first advertisers', from: 0, to: 1, accent: true },
      { label: 'Posting and accounts', note: 'a form per category, photos, number confirmed by code', from: 1, to: 4 },
      { label: 'Search', note: 'filters, sorting, pages per category and per city, alerts', from: 2, to: 5 },
      { label: 'Checking', note: 'checking queue, duplicates, reports, blocking', from: 4, to: 7 },
      { label: 'Life cycle', note: 'expiry, reminder, “sold?”, listing statistics', from: 5, to: 8 },
      { label: 'Revenue and opening', note: 'featured listings, business accounts, first real listings', from: 7, to: 10 },
    ], caption: 'Figure 6 · Ten weeks in the example, for a single category and a single region. The accented period is the first: before a line of code is written, the category’s fields are fixed and the first advertisers are found. Indicative durations of a constructed example.', alt: 'Ten-week calendar: scoping (accented), posting and accounts, search, checking, life cycle, revenue and opening.' },
  },
  ar: {
    cover: { eyebrow: 'موقع الإعلانات · الجزائر · 2027', title: ['إنشاء موقع إعلانات', 'يعود إليه الناس'], subtitle: 'الإيداع، المراجعة، الإعلانات الزائفة، البحث بالفلاتر، انتهاء الصلاحية، الإبراز، والحسابات المهنية', left: { label: '920 إعلاناً', sub: 'منها 690 ميتاً' }, right: { label: '230 إعلاناً', sub: 'وكلها صحيحة' } },
    vie: { title: 'حياة إعلان، في ست مراحل', items: [
      { label: 'الإيداع', sub: 'الصنف، الخانات، الصور، والسعر' },
      { label: 'المراجعة', sub: 'رقم مؤكَّد، مكرَّر، ومحتوى', accent: true },
      { label: 'النشر', sub: 'على الخط، ويُعثر عليه بالفلاتر' },
      { label: 'الاتصالات', sub: 'مكالمة، رسالة، ورقم يُكشف' },
      { label: 'الأجل', sub: 'تجديد، أو انتهاء عند 30 يوماً' },
      { label: 'الإغلاق', sub: 'بيع، سُحب، وأُرشف' },
    ], caption: 'الشكل 1 · ست مراحل. المرحلة المبرزة هي المراجعة: بين الإيداع والنشر، بعض المراقبات الآلية و، لأقلية من الإعلانات، نظرة بشرية. وهناك تُحسم سمعة الموقع.', alt: 'ست مراحل: الإيداع، المراجعة (مبرزة)، النشر، الاتصالات، الأجل، والإغلاق.' },
    couches: { title: 'ما يوجد في موقع إعلانات، في خمس طبقات', layers: [
      { label: 'الإعلانات', items: [{ name: 'الإعلانات: صنف، خانات خاصة بهذا الصنف، صور، سعر، ومدينة', sub: 'المخزون الذي يعرضه الموقع' }] },
      { label: 'الحسابات', items: [{ name: 'الحسابات: أفراد ومهنيون، رقم مؤكَّد، وسجل الإعلانات', sub: 'من يتكلم، ومنذ متى' }] },
      { label: 'البحث', items: [{ name: 'البحث: فلاتر لكل خانة، ترتيب، تنبيهات محفوظة، وصفحات لكل صنف ولكل مدينة', sub: 'ما يأتي المشتري من أجله', accent: true }] },
      { label: 'الثقة', items: [{ name: 'الثقة: مراجعة قبل النشر، تبليغات، قواعد معروضة، وحظر', sub: 'ما يجعل الناس يعودون' }] },
      { label: 'المداخيل', items: [{ name: 'المداخيل: الإبراز، الرفع إلى الأعلى، الحسابات المهنية، والواجهات', sub: 'ما يقبل المُعلِن أن يدفع من أجله' }] },
    ], caption: 'الشكل 2 · خمس طبقات. الطبقة المبرزة هي البحث: موقع الإعلانات أولاً محرّك بحث على مخزون يملؤه الآخرون. وكل ما تحته موجود ليجد البحث الصحيح.', alt: 'خمس طبقات: الإعلانات؛ الحسابات؛ البحث (مبرزة)؛ الثقة؛ والمداخيل.' },
    fraudes: { title: 'ست مضايقات في موقع إعلانات: الإشارة، والحل', columns: ['الإشارة', 'الحل'], rows: [
      { label: 'الإعلان الزائف بسعر منخفض جداً', cells: ['سعر بعيد تحت الآخرين، وحساب جديد', 'يُحجز قبل النشر، ويُراجَع'] },
      { label: 'المكرَّر', cells: ['الصور نفسها، الرقم نفسه، والعنوان نفسه', 'يُكتشف عند الإيداع: واحد فقط يظهر'] },
      { label: 'الإعلان الميت', cells: ['المُعلِن لا يدخل أبداً', 'انتهاء صلاحية، تذكير، و«هل بيع؟»'] },
      { label: 'العربون المطلوب عن بعد', cells: ['«أرسل المال للحجز»', 'تحذير معروض، وزر تبليغ'] },
      { label: 'المهني المتنكّر', cells: ['عشرة إعلانات من حساب فرد', 'عتبة، ثم الحساب المهني'] },
      { label: 'الحسابات بالجملة', cells: ['جهاز واحد، وعشرون رقماً', 'حدود لكل جهاز ولكل رقم'] },
    ], caption: 'الشكل 3 · ست مضايقات. لكل واحدة إشارة يستطيع البرنامج قراءتها قبل أن يشتكي مشترٍ؛ ولا واحدة تُحلّ بصفحة شروط لا يقرؤها أحد.', alt: 'مصفوفة من ست مضايقات في موقع إعلانات: الإعلان الزائف بسعر منخفض جداً، المكرَّر، الإعلان الميت، العربون المطلوب عن بعد، المهني المتنكّر، والحسابات بالجملة؛ ولكل واحدة، الإشارة والحل.' },
    cycle: { caption: 'الشكل 4 · ألف إعلان مودَع، 920 منشوراً؛ وبعد ثلاثين يوماً، 230 ما زالت صالحة. ودون انتهاء صلاحية، يرى المشتري الـ920 كلها. نسب خيالية.' },
    filtres: { caption: 'الشكل 5 · بحث بثلاثة فلاتر: 9 إعلانات معروضة، و16 غير مرئية لأن السنة أو السعر لم يُدخَلا. مثال مركَّب.' },
    calendrier: { title: 'عشرة أسابيع لصنف واحد، منطقة واحدة، وموقع يصمد', unit: 'أسبوع', items: [
      { label: 'التأطير', note: 'الصنف، المنطقة، الخانات، قواعد النشر، والمُعلِنون الأوائل', from: 0, to: 1, accent: true },
      { label: 'الإيداع والحسابات', note: 'استمارة لكل صنف، صور، ورقم يؤكَّد برمز', from: 1, to: 4 },
      { label: 'البحث', note: 'فلاتر، ترتيب، صفحات لكل صنف ولكل مدينة، وتنبيهات', from: 2, to: 5 },
      { label: 'المراجعة', note: 'طابور المراجعة، المكرَّرات، التبليغات، والحظر', from: 4, to: 7 },
      { label: 'دورة الحياة', note: 'انتهاء الصلاحية، التذكير، «هل بيع؟»، وإحصاءات الإعلان', from: 5, to: 8 },
      { label: 'المداخيل والافتتاح', note: 'الإبراز، الحسابات المهنية، وأولى الإعلانات الحقيقية', from: 7, to: 10 },
    ], caption: 'الشكل 6 · عشرة أسابيع في المثال، لصنف واحد ومنطقة واحدة. الفترة المبرزة هي الأولى: قبل كتابة سطر من الشيفرة، تُحدَّد خانات الصنف ويُعثر على المُعلِنين الأوائل. مدد تقريبية لمثال مركَّب.', alt: 'رزنامة من عشرة أسابيع: التأطير (مبرزة)، الإيداع والحسابات، البحث، المراجعة، دورة الحياة، ثم المداخيل والافتتاح.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      vie: { svg: steps({ title: t.vie.title, steps: t.vie.items, arrows: true, rtl }), caption: t.vie.caption, alt: t.vie.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      fraudes: { svg: matrix({ title: t.fraudes.title, columns: t.fraudes.columns, rows: t.fraudes.rows, rtl }), caption: t.fraudes.caption, alt: t.fraudes.alt },
      cycle: { svg: cycle(e.cycle, rtl), caption: t.cycle.caption, alt: e.cycle.alt },
      filtres: { svg: filtres(e.filtres, rtl), caption: t.filtres.caption, alt: e.filtres.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 10, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
