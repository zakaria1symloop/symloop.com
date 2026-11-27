import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { appariement, fraicheur, STRINGS as SC } from './custom/comparateur.mjs';
export const slug = 'comparateur-de-prix-algerie-2027-creer-un-comparateur-d-ou-viennent-les-prix-meme-produit-entre-boutiques-prix-a-jour-modele-de-revenu';
const T = {
  fr: {
    cover: { eyebrow: 'Comparateur de prix · Algérie · 2027', title: ['Comparateur de prix en Algérie', 'le même produit, les prix du jour'], subtitle: 'D’où viennent les prix, comment reconnaître le même produit, des prix datés, et le clic qui le fait vivre', left: { label: 'Dix écritures', sub: 'le même produit, partout différent' }, right: { label: 'Une fiche, cinq prix', sub: 'chacun avec son âge' } },
    couches: { title: 'Un comparateur de prix, en cinq couches', layers: [
      { label: 'Collecte', items: [{ name: 'La collecte : flux des boutiques, espace où le marchand saisit, relevé de ses pages, saisie par l’équipe', sub: 'plusieurs sources, dont aucune ne suffit seule' }] },
      { label: 'Appariement', items: [{ name: 'L’appariement : reconnaître le même produit sous dix écritures, et refuser les faux jumeaux', sub: 'la couche qui fait le comparateur', accent: true }] },
      { label: 'Catalogue', items: [{ name: 'Le catalogue : une fiche par produit, des catégories, des filtres qui suivent la façon d’acheter', sub: 'capacité, taille, mémoire, pas seulement le prix' }] },
      { label: 'Fraîcheur', items: [{ name: 'La fraîcheur : chaque prix daté, relevé à intervalle fixe, masqué quand il est trop vieux', sub: 'un prix sans âge ne s’affiche pas' }] },
      { label: 'Sortie', items: [{ name: 'La sortie : le clic vers la boutique, compté, et ce qu’il devient quand la boutique le dit', sub: 'c’est là que le comparateur gagne sa vie' }] },
    ], caption: 'Figure 1 · La couche accentuée est l’appariement : reconnaître que trois offres désignent le même produit. Sans elle, le site liste des annonces ; avec elle, il compare. La collecte la nourrit, la fraîcheur la rend digne de confiance.', alt: 'Cinq couches : la collecte ; l’appariement (accentuée) ; le catalogue ; la fraîcheur ; la sortie.' },
    appariement: { caption: 'Figure 2 · Trois boutiques écrivent le même réfrigérateur de trois façons. Chaque offre est ramenée aux mêmes clés, marque, référence, capacité, et rejoint une seule fiche où les prix se classent. Produit, marque et prix fictifs.' },
    sources: { title: 'D’où viennent les prix : six sources', columns: ['Ce que cela donne', 'Ce que cela demande'], rows: [
      { label: 'Le flux de la boutique', cells: ['tous ses prix, à jour, sans effort', 'une boutique qui sait en produire un'] },
      { label: 'L’espace boutique', cells: ['des prix saisis par le marchand lui-même', 'un marchand qui y voit ses clics'] },
      { label: 'Le relevé de ses pages', cells: ['les prix publics, sans attendre personne', 'son accord, et un robot qu’on entretient'] },
      { label: 'La saisie par l’équipe', cells: ['les boutiques sans site ni flux', 'du temps chaque jour, donc peu de produits'] },
      { label: 'Le signalement des visiteurs', cells: ['une erreur corrigée dans l’heure', 'une vérification avant publication'] },
      { label: 'Le catalogue du fabricant', cells: ['des fiches justes : références, photos', 'un accord avec la marque ou son distributeur'] },
    ], caption: 'Figure 3 · Six sources, de la plus sûre à la plus lente. Un comparateur algérien en combine quatre ou cinq dès le premier jour : le flux reste rare, et l’espace où le marchand saisit lui-même ses prix devient vite la source principale.', alt: 'Matrice de six sources de prix : le flux de la boutique, l’espace boutique, le relevé de ses pages, la saisie par l’équipe, le signalement des visiteurs, le catalogue du fabricant ; pour chacune, ce que cela donne et ce que cela demande.' },
    lancer: { title: 'Lancer un comparateur, en six temps', items: [
      { label: 'Choisir', sub: 'une catégorie, une ville', accent: true },
      { label: 'Convaincre', sub: 'dix boutiques, par écrit' },
      { label: 'Apparier', sub: '300 produits, vérifiés à la main' },
      { label: 'Publier', sub: 'prix datés, trois offres au moins' },
      { label: 'Mesurer', sub: 'les clics vers chaque boutique' },
      { label: 'Élargir', sub: 'une deuxième catégorie' },
    ], caption: 'Figure 4 · Le temps accentué est le premier : choisir une seule catégorie et une seule ville. Dix boutiques et trois cents produits bien appariés font un comparateur utile ; mille produits mal appariés font un annuaire.', alt: 'Six temps : choisir (accentué), convaincre, apparier, publier, mesurer, élargir.' },
    fraicheur: { caption: 'Figure 5 · L’âge du dernier prix connu de huit boutiques. Sous six heures, le prix est frais ; jusqu’à quarante-huit heures, il s’affiche avec son âge ; au-delà, il est masqué. Les sources automatiques restent fraîches, les saisies manuelles vieillissent. Exemple construit.' },
    calendrier: { title: 'Douze semaines jusqu’à la première catégorie', unit: 'sem.', items: [
      { label: 'Choisir et convaincre', note: 'une catégorie, une ville, dix boutiques rencontrées, accords écrits sur les prix', from: 0, to: 3, accent: true },
      { label: 'Collecte', note: 'flux quand ils existent, espace boutique, relevé avec accord, saisie pour le reste', from: 2, to: 6 },
      { label: 'Appariement', note: 'clés par marque et référence, écran de validation, 300 produits vérifiés', from: 4, to: 8 },
      { label: 'Catalogue et recherche', note: 'fiches, filtres de la catégorie, recherche en français et en arabe', from: 5, to: 9 },
      { label: 'Fraîcheur et clics', note: 'prix datés, seuils, historique, clics comptés par boutique', from: 7, to: 10 },
      { label: 'Ouverture', note: 'la catégorie publiée, puis la mesure : visiteurs, clics, prix périmés', from: 10, to: 12 },
    ], caption: 'Figure 6 · Douze semaines dans l’exemple. La période accentuée est la première, et elle ne contient aucun code : choisir la catégorie et convaincre dix boutiques. Le reste se construit pendant que les accords arrivent. Durées indicatives d’un exemple construit.', alt: 'Calendrier de douze semaines : choisir et convaincre (accentué), collecte, appariement, catalogue et recherche, fraîcheur et clics, ouverture.' },
  },
  en: {
    cover: { eyebrow: 'Price comparison · Algeria · 2027', title: ['Price comparison site in Algeria', 'the same product, today’s prices'], subtitle: 'Where prices come from, recognising the same product, dated prices, and the click that keeps it alive', left: { label: 'Ten spellings', sub: 'the same product, different everywhere' }, right: { label: 'One record, five prices', sub: 'each with its age' } },
    couches: { title: 'A price comparison site, in five layers', layers: [
      { label: 'Collection', items: [{ name: 'Collection: shop feeds, an area where the merchant types, reading their pages, typing by the team', sub: 'several sources, none enough by itself' }] },
      { label: 'Matching', items: [{ name: 'Matching: recognising the same product under ten spellings, and refusing false twins', sub: 'the layer that makes the comparison', accent: true }] },
      { label: 'Catalogue', items: [{ name: 'The catalogue: one record per product, categories, filters that follow the way people buy', sub: 'capacity, size, memory, not only the price' }] },
      { label: 'Freshness', items: [{ name: 'Freshness: each price dated, read at a fixed interval, hidden when it is too old', sub: 'a price with no age is not shown' }] },
      { label: 'Way out', items: [{ name: 'The way out: the click to the shop, counted, and what becomes of it when the shop says so', sub: 'that is where the site earns its living' }] },
    ], caption: 'Figure 1 · The accented layer is matching: recognising that three offers refer to the same product. Without it, the site lists adverts; with it, it compares. Collection feeds it, freshness makes it trustworthy.', alt: 'Five layers: collection; matching (accented); the catalogue; freshness; the way out.' },
    appariement: { caption: 'Figure 2 · Three shops write the same refrigerator in three ways. Each offer is reduced to the same keys, brand, reference, capacity, and joins a single record where prices are ranked. Fictitious product, brand and prices.' },
    sources: { title: 'Where prices come from: six sources', columns: ['What it gives', 'What it requires'], rows: [
      { label: 'The shop’s feed', cells: ['all its prices, up to date, with no effort', 'a shop that knows how to produce one'] },
      { label: 'The shop area', cells: ['prices typed in by the merchant', 'a merchant who sees their clicks there'] },
      { label: 'Reading its pages', cells: ['public prices, without waiting for anyone', 'its agreement, and a robot kept up'] },
      { label: 'Typing by the team', cells: ['shops with no site and no feed', 'time every day, so few products'] },
      { label: 'Reports from visitors', cells: ['an error corrected within the hour', 'a check before publication'] },
      { label: 'The manufacturer’s catalogue', cells: ['correct records: references, photos', 'an agreement with the brand or distributor'] },
    ], caption: 'Figure 3 · Six sources, from the surest to the slowest. An Algerian comparison site combines four or five from day one: feeds remain rare, and the area where the merchant types their own prices quickly becomes the main source.', alt: 'Matrix of six price sources: the shop’s feed, the shop area, reading its pages, typing by the team, reports from visitors, the manufacturer’s catalogue; for each, what it gives and what it requires.' },
    lancer: { title: 'Launching a comparison site, in six steps', items: [
      { label: 'Choose', sub: 'one category, one city', accent: true },
      { label: 'Convince', sub: 'ten shops, in writing' },
      { label: 'Match', sub: '300 products, checked by hand' },
      { label: 'Publish', sub: 'dated prices, three offers at least' },
      { label: 'Measure', sub: 'clicks to each shop' },
      { label: 'Widen', sub: 'a second category' },
    ], caption: 'Figure 4 · The accented step is the first: choose a single category and a single city. Ten shops and three hundred well-matched products make a useful comparison site; a thousand badly matched products make a directory.', alt: 'Six steps: choose (accented), convince, match, publish, measure, widen.' },
    fraicheur: { caption: 'Figure 5 · The age of the last known price of eight shops. Under six hours, the price is fresh; up to forty-eight hours, it is shown with its age; beyond that, it is hidden. Automatic sources stay fresh, manual entries age. Constructed example.' },
    calendrier: { title: 'Twelve weeks to the first category', unit: 'wk', items: [
      { label: 'Choose and convince', note: 'one category, one city, ten shops met, written agreements on prices', from: 0, to: 3, accent: true },
      { label: 'Collection', note: 'feeds where they exist, shop area, reading with agreement, typing for the rest', from: 2, to: 6 },
      { label: 'Matching', note: 'keys by brand and reference, validation screen, 300 products checked', from: 4, to: 8 },
      { label: 'Catalogue and search', note: 'records, filters of the category, search in French and Arabic', from: 5, to: 9 },
      { label: 'Freshness and clicks', note: 'dated prices, thresholds, history, clicks counted per shop', from: 7, to: 10 },
      { label: 'Opening', note: 'the category published, then the measure: visitors, clicks, stale prices', from: 10, to: 12 },
    ], caption: 'Figure 6 · Twelve weeks in the example. The accented period is the first, and it contains no code: choosing the category and convincing ten shops. The rest is built while the agreements come in. Indicative durations of a constructed example.', alt: 'Twelve-week calendar: choose and convince (accented), collection, matching, catalogue and search, freshness and clicks, opening.' },
  },
  ar: {
    cover: { eyebrow: 'مقارنة الأسعار · الجزائر · 2027', title: ['موقع مقارنة الأسعار في الجزائر', 'المنتج نفسه، وأسعار اليوم'], subtitle: 'من أين تأتي الأسعار، كيف يُعرف المنتج نفسه، أسعار مؤرَّخة، والنقرة التي يعيش منها', left: { label: 'عشر كتابات', sub: 'المنتج نفسه، مختلف في كل مكان' }, right: { label: 'بطاقة، وخمسة أسعار', sub: 'ولكل سعر عمره' } },
    couches: { title: 'موقع مقارنة الأسعار، في خمس طبقات', layers: [
      { label: 'الجمع', items: [{ name: 'الجمع: تدفقات المتاجر، فضاء يُدخِل فيه التاجر، قراءة صفحاته، وإدخال الفريق', sub: 'عدة مصادر، ولا واحد يكفي وحده' }] },
      { label: 'المطابقة', items: [{ name: 'المطابقة: معرفة المنتج نفسه تحت عشر كتابات، ورفض التوائم الكاذبة', sub: 'الطبقة التي تصنع المقارنة', accent: true }] },
      { label: 'الفهرس', items: [{ name: 'الفهرس: بطاقة لكل منتج، فئات، ومرشِّحات تتبع طريقة الشراء', sub: 'السعة، المقاس، الذاكرة، لا السعر فقط' }] },
      { label: 'الطزاجة', items: [{ name: 'الطزاجة: كل سعر مؤرَّخ، يُقرأ على فترات ثابتة، ويُخفى حين يصير قديماً', sub: 'السعر دون عمر لا يُعرض' }] },
      { label: 'الخروج', items: [{ name: 'الخروج: النقرة نحو المتجر، معدودة، وما تصير إليه حين يقوله المتجر', sub: 'وهناك يكسب الموقع عيشه' }] },
    ], caption: 'الشكل 1 · الطبقة المبرزة هي المطابقة: معرفة أن ثلاثة عروض تعني المنتج نفسه. ودونها، يسرد الموقع إعلانات؛ ومعها، يقارن. والجمع يغذّيها، والطزاجة تجعلها جديرة بالثقة.', alt: 'خمس طبقات: الجمع؛ المطابقة (مبرزة)؛ الفهرس؛ الطزاجة؛ والخروج.' },
    appariement: { caption: 'الشكل 2 · ثلاثة متاجر تكتب الثلاجة نفسها بثلاث طرق. كل عرض يُرَدّ إلى المفاتيح نفسها، العلامة والمرجع والسعة، وينضم إلى بطاقة واحدة تُرتَّب فيها الأسعار. منتج وعلامة وأسعار خيالية.' },
    sources: { title: 'من أين تأتي الأسعار: ستة مصادر', columns: ['ما يعطيه', 'ما يتطلبه'], rows: [
      { label: 'تدفق المتجر', cells: ['كل أسعاره، محدَّثة، دون مجهود', 'متجر يعرف كيف ينتج واحداً'] },
      { label: 'فضاء المتجر', cells: ['أسعار يُدخِلها التاجر نفسه', 'تاجر يرى فيه نقراته'] },
      { label: 'قراءة صفحاته', cells: ['الأسعار العلنية، دون انتظار أحد', 'موافقته، وروبوت يُصان'] },
      { label: 'إدخال الفريق', cells: ['المتاجر التي لا موقع لها ولا تدفق', 'وقت كل يوم، وإذن منتجات قليلة'] },
      { label: 'تبليغ الزوار', cells: ['خطأ يُصحَّح خلال ساعة', 'مراجعة قبل النشر'] },
      { label: 'فهرس المصنِّع', cells: ['بطاقات صحيحة: مراجع وصور', 'اتفاق مع العلامة أو موزّعها'] },
    ], caption: 'الشكل 3 · ستة مصادر، من الأضمن إلى الأبطأ. وموقع مقارنة جزائري يجمع أربعة أو خمسة منها من اليوم الأول: التدفق يبقى نادراً، والفضاء الذي يُدخِل فيه التاجر أسعاره يصير سريعاً المصدر الرئيسي.', alt: 'مصفوفة من ستة مصادر للأسعار: تدفق المتجر، فضاء المتجر، قراءة صفحاته، إدخال الفريق، تبليغ الزوار، وفهرس المصنِّع؛ ولكل واحد، ما يعطيه وما يتطلبه.' },
    lancer: { title: 'إطلاق موقع مقارنة، في ست مراحل', items: [
      { label: 'الاختيار', sub: 'فئة واحدة، ومدينة واحدة', accent: true },
      { label: 'الإقناع', sub: 'عشرة متاجر، كتابياً' },
      { label: 'المطابقة', sub: '300 منتج، تُراجَع باليد' },
      { label: 'النشر', sub: 'أسعار مؤرَّخة، وثلاثة عروض على الأقل' },
      { label: 'القياس', sub: 'النقرات نحو كل متجر' },
      { label: 'التوسيع', sub: 'فئة ثانية' },
    ], caption: 'الشكل 4 · المرحلة المبرزة هي الأولى: اختيار فئة واحدة ومدينة واحدة. عشرة متاجر وثلاثمئة منتج مطابَقة جيداً تصنع موقع مقارنة نافعاً؛ وألف منتج مطابَقة بشكل سيئ تصنع دليلاً.', alt: 'ست مراحل: الاختيار (مبرزة)، الإقناع، المطابقة، النشر، القياس، والتوسيع.' },
    fraicheur: { caption: 'الشكل 5 · عمر آخر سعر معروف لثمانية متاجر. تحت ست ساعات، السعر طازج؛ وحتى ثمانٍ وأربعين ساعة، يُعرض مع عمره؛ وفوقها، يُخفى. المصادر الآلية تبقى طازجة، والإدخالات اليدوية تشيخ. مثال مركَّب.' },
    calendrier: { title: 'اثنا عشر أسبوعاً حتى الفئة الأولى', unit: 'أسبوع', items: [
      { label: 'الاختيار والإقناع', note: 'فئة، مدينة، عشرة متاجر تمت زيارتها، واتفاقات مكتوبة حول الأسعار', from: 0, to: 3, accent: true },
      { label: 'الجمع', note: 'التدفقات حين توجد، فضاء المتجر، القراءة بموافقة، والإدخال للباقي', from: 2, to: 6 },
      { label: 'المطابقة', note: 'مفاتيح بالعلامة والمرجع، شاشة مصادقة، و300 منتج مراجَع', from: 4, to: 8 },
      { label: 'الفهرس والبحث', note: 'البطاقات، مرشِّحات الفئة، والبحث بالفرنسية والعربية', from: 5, to: 9 },
      { label: 'الطزاجة والنقرات', note: 'أسعار مؤرَّخة، عتبات، سجل، ونقرات معدودة لكل متجر', from: 7, to: 10 },
      { label: 'الافتتاح', note: 'الفئة منشورة، ثم القياس: الزوار، النقرات، والأسعار القديمة', from: 10, to: 12 },
    ], caption: 'الشكل 6 · اثنا عشر أسبوعاً في المثال. الفترة المبرزة هي الأولى، ولا شيفرة فيها: اختيار الفئة وإقناع عشرة متاجر. والباقي يُبنى بينما تصل الاتفاقات. مدد تقريبية لمثال مركَّب.', alt: 'رزنامة من اثني عشر أسبوعاً: الاختيار والإقناع (مبرزة)، الجمع، المطابقة، الفهرس والبحث، الطزاجة والنقرات، ثم الافتتاح.' },
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
      appariement: { svg: appariement(e.appariement, rtl), caption: t.appariement.caption, alt: e.appariement.alt },
      sources: { svg: matrix({ title: t.sources.title, columns: t.sources.columns, rows: t.sources.rows, rtl }), caption: t.sources.caption, alt: t.sources.alt },
      lancer: { svg: steps({ title: t.lancer.title, steps: t.lancer.items, arrows: true, rtl }), caption: t.lancer.caption, alt: t.lancer.alt },
      fraicheur: { svg: fraicheur(e.fraicheur, rtl), caption: t.fraicheur.caption, alt: e.fraicheur.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 12, tick: 2, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
