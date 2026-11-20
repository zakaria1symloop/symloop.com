import { cover, steps, layers, matrix } from '../../lib/visuals/index.mjs';
import { cartes, memes, STRINGS as SC } from './custom/outsourcingmap.mjs';
export const slug = 'outsourcing-map-2027-what-search-engines-show-software-buyers-saudi-uae-qatar-france-spain';
const T = {
  fr: {
    cover: { eyebrow: 'Étude · Symloop Research · 2027', title: ['Outsourcing Map 2027 :', 'la carte que les moteurs tendent aux acheteurs'], subtitle: '3 816 requêtes, quatre langues, deux moteurs, huit marchés : où les suggestions situent un partenaire logiciel', left: { label: 'Riyad, Dubaï, Doha', sub: 'la même liste qu’à Londres et New York' }, right: { label: 'Une carte par langue', sub: 'Inde 37 % en anglais · Algérie absente' } },
    cartes: { caption: 'Figure 1 · Part des mentions de lieu par pays dans les suggestions que Google propose pour des amorces du type « software development company in », dans quatre langues. L’Inde tient 37 % de la carte anglaise, devant les États-Unis ; la carte arabe est partagée entre l’Égypte et l’Arabie saoudite ; la carte française est la France, puis le Maroc et la Tunisie ; la carte espagnole est l’Amérique latine. L’Algérie est citée une fois, en français. Suggestions relevées le 16 novembre 2026 ; les échantillons arabe, français et espagnol sont petits et se lisent comme un ordre, pas comme des pourcentages fins.' },
    memes: { caption: 'Figure 2 · Le même relevé, marché par marché. Les suggestions étendues par lettre que Google propose en Arabie saoudite, aux Émirats, au Qatar et au Royaume-Uni sont identiques à celles des États-Unis ; en arabe, celles des trois pays du Golfe sont identiques à celles de l’Égypte. La part du premier pays ne bouge pas, la part du pays de l’acheteur reste faible en anglais, et la première ligne n’est locale que sur une partie des amorces.' },
    premiere: { title: 'La première ligne est locale, pas la suite', columns: ['Première suggestion de Google', 'Amorces où la première ligne est locale'], rows: [
      { label: 'Riyad, en anglais', cells: ['« software development company in india »', '1 sur 6 : « mobile app development company in saudi arabia »'] },
      { label: 'Dubaï, en anglais', cells: ['« software development company in dubai »', '4 sur 6 : Dubaï trois fois, « uae » une fois'] },
      { label: 'Doha, en anglais', cells: ['« software development company in india »', '3 sur 6 : « … in qatar » sur trois amorces'] },
      { label: 'Riyad, en arabe', cells: ['« شركة برمجة في السعودية »', '3 sur 4 ; la quatrième commence par la Jordanie'] },
      { label: 'Dubaï, en arabe', cells: ['« شركة برمجة في مصر »', '0 sur 4 : Égypte, Arabie saoudite, Jordanie'] },
      { label: 'Doha, en arabe', cells: ['« شركة برمجة في مصر »', '0 sur 4 : Égypte, Arabie saoudite, Jordanie'] },
    ], caption: 'Figure 3 · Ce que Google propose en premier quand l’acheteur a tapé l’amorce et une espace. La localisation existe, mais elle tient en une ligne : Dubaï l’obtient sur quatre amorces anglaises sur six, Riyad sur une, Doha sur trois ; en arabe, Riyad l’obtient sur trois amorces sur quatre, Dubaï et Doha sur aucune. À partir de la deuxième lettre tapée, la liste est la même partout.', alt: 'Tableau de six lignes, Riyad, Dubaï et Doha en anglais puis en arabe : première suggestion de Google pour l’amorce principale et nombre d’amorces dont la première ligne est locale : 1 sur 6, 4 sur 6, 3 sur 6, 3 sur 4, 0 sur 4, 0 sur 4.' },
    preuves: { title: 'Ce qui voyage quand la carte ne vous montre pas', layers: [
      { label: 'Avis comptés par un tiers', items: [{ name: 'Des avis clients sur un annuaire ou une fiche d’établissement, datés, que l’acheteur peut compter seul', sub: 'un chiffre que le vendeur ne contrôle pas' }] },
      { label: 'Travail nommé', items: [{ name: 'Des réalisations avec le nom du client, ce qui a été livré, et une attestation signée quand le client l’accepte', sub: 'une référence que l’acheteur peut appeler' }] },
      { label: 'Mesures publiées', items: [{ name: 'Une méthode écrite, un jeu de données téléchargeable, un résultat que n’importe qui peut refaire', sub: 'la compétence montrée, pas déclarée', accent: true }] },
      { label: 'Produit en ligne', items: [{ name: 'Une application ou une plateforme en production que l’acheteur peut ouvrir avant de signer', sub: 'ce qui existe se vérifie en cinq minutes' }] },
      { label: 'Équipe nommée', items: [{ name: 'Les personnes qui feront le travail, joignables, et la propriété du code écrite au contrat', sub: 'on sait qui répond, et à qui est le code' }] },
    ], caption: 'Figure 4 · Une suggestion ne dit rien de la qualité d’un prestataire ; elle dit ce que beaucoup de gens ont tapé. Ce que l’acheteur peut demander à la place tient en cinq preuves qui passent les frontières. La couche accentuée est celle que cette étude pratique : une méthode, des données, un résultat refaisable.', alt: 'Cinq couches de preuves qui voyagent : avis comptés par un tiers, travail nommé, mesures publiées (accentuée), produit en ligne, équipe nommée.' },
    methode: { title: 'La méthode, en six temps', items: [
      { label: 'Amorces', sub: '25 amorces de lieu en quatre langues, 28 amorces d’intention' },
      { label: 'Lettres', sub: 'chaque amorce suivie de chaque lettre de l’alphabet' },
      { label: 'Deux moteurs', sub: 'suggestions de Google et de Bing, sans compte ni historique' },
      { label: 'Huit marchés', sub: 'cinq étudiés, trois témoins : États-Unis, Royaume-Uni, Égypte', accent: true },
      { label: 'Classer', sub: 'lieu vers pays ; bruit et offres d’emploi écartés' },
      { label: 'Comparer', sub: 'chaque marché à son témoin, moteur par moteur' },
    ], caption: 'Figure 5 · Le temps accentué est celui des marchés témoins : sans les États-Unis, le Royaume-Uni et l’Égypte, on aurait conclu que le Golfe « cherche en Inde », alors que la même liste est proposée à tout le monde dans la même langue. Les 3 816 requêtes ont été envoyées le 16 novembre 2026, aucune n’a échoué, et le jeu de 12 230 suggestions est téléchargeable.', alt: 'Six temps : amorces, lettres, deux moteurs, huit marchés (accentué), classer, comparer.' },
  },
  en: {
    cover: { eyebrow: 'Study · Symloop Research · 2027', title: ['Outsourcing Map 2027:', 'the map search engines hand to buyers'], subtitle: '3,816 queries, four languages, two engines, eight markets: where suggestions place a software partner', left: { label: 'Riyadh, Dubai, Doha', sub: 'the same list as London and New York' }, right: { label: 'One map per language', sub: 'India 37 % in English · Algeria absent' } },
    cartes: { caption: 'Figure 1 · Share of place mentions per country in the suggestions Google proposes for seeds such as “software development company in”, in four languages. India holds 37 % of the English map, ahead of the United States; the Arabic map is split between Egypt and Saudi Arabia; the French map is France, then Morocco and Tunisia; the Spanish map is Latin America. Algeria is named once, in French. Suggestions collected on 16 November 2026; the Arabic, French and Spanish samples are small and read as an order, not as fine percentages.' },
    memes: { caption: 'Figure 2 · The same collection, market by market. The letter-expanded suggestions Google proposes in Saudi Arabia, the UAE, Qatar and the United Kingdom are identical to those of the United States; in Arabic, those of the three Gulf countries are identical to Egypt’s. The leader’s share does not move, the buyer’s own country stays small in English, and the first line is local only on some seeds.' },
    premiere: { title: 'The first line is local, the rest is not', columns: ['Google’s first suggestion', 'Seeds where the first line is local'], rows: [
      { label: 'Riyadh, in English', cells: ['“software development company in india”', '1 of 6: “mobile app development company in saudi arabia”'] },
      { label: 'Dubai, in English', cells: ['“software development company in dubai”', '4 of 6: Dubai three times, “uae” once'] },
      { label: 'Doha, in English', cells: ['“software development company in india”', '3 of 6: “… in qatar” on three seeds'] },
      { label: 'Riyadh, in Arabic', cells: ['“شركة برمجة في السعودية”', '3 of 4; the fourth starts with Jordan'] },
      { label: 'Dubai, in Arabic', cells: ['“شركة برمجة في مصر”', '0 of 4: Egypt, Saudi Arabia, Jordan'] },
      { label: 'Doha, in Arabic', cells: ['“شركة برمجة في مصر”', '0 of 4: Egypt, Saudi Arabia, Jordan'] },
    ], caption: 'Figure 3 · What Google proposes first once the buyer has typed the seed and a space. Localisation exists, but it fits in one line: Dubai gets it on four English seeds of six, Riyadh on one, Doha on three; in Arabic, Riyadh gets it on three seeds of four, Dubai and Doha on none. From the second typed letter on, the list is the same everywhere.', alt: 'Table of six rows, Riyadh, Dubai and Doha in English then in Arabic: Google’s first suggestion for the main seed and the number of seeds whose first line is local: 1 of 6, 4 of 6, 3 of 6, 3 of 4, 0 of 4, 0 of 4.' },
    preuves: { title: 'What travels when the map does not show you', layers: [
      { label: 'Reviews counted by a third party', items: [{ name: 'Client reviews on a directory or a business listing, dated, that the buyer can count alone', sub: 'a number the vendor does not control' }] },
      { label: 'Named work', items: [{ name: 'Delivered projects with the client’s name, what was delivered, and a signed attestation when the client agrees', sub: 'a reference the buyer can call' }] },
      { label: 'Published measurements', items: [{ name: 'A written method, a downloadable dataset, a result anyone can re-run', sub: 'competence shown, not declared', accent: true }] },
      { label: 'A live product', items: [{ name: 'An application or platform in production that the buyer can open before signing', sub: 'what exists can be checked in five minutes' }] },
      { label: 'A named team', items: [{ name: 'The people who will do the work, reachable, and code ownership written in the contract', sub: 'you know who answers, and whose code it is' }] },
    ], caption: 'Figure 4 · A suggestion says nothing about a vendor’s quality; it says what many people typed. What the buyer can ask for instead fits in five kinds of proof that cross borders. The accented layer is the one this study practises: a method, data, a result that can be re-run.', alt: 'Five layers of proof that travel: reviews counted by a third party, named work, published measurements (accented), a live product, a named team.' },
    methode: { title: 'The method, in six beats', items: [
      { label: 'Seeds', sub: '25 place seeds in four languages, 28 intent seeds' },
      { label: 'Letters', sub: 'each seed followed by every letter of the alphabet' },
      { label: 'Two engines', sub: 'Google and Bing suggestions, no account, no history' },
      { label: 'Eight markets', sub: 'five studied, three controls: United States, United Kingdom, Egypt', accent: true },
      { label: 'Classify', sub: 'place to country; noise and job queries removed' },
      { label: 'Compare', sub: 'each market with its control, engine by engine' },
    ], caption: 'Figure 5 · The accented beat is the control markets: without the United States, the United Kingdom and Egypt, we would have concluded that the Gulf “searches in India”, when the same list is proposed to everyone in the same language. The 3,816 queries were sent on 16 November 2026, none failed, and the set of 12,230 suggestions is downloadable.', alt: 'Six beats: seeds, letters, two engines, eight markets (accented), classify, compare.' },
  },
  ar: {
    cover: { eyebrow: 'دراسة · Symloop Research · 2027', title: ['خريطة التعهيد 2027:', 'الخريطة التي تقدّمها محركات البحث للمشترين'], subtitle: '3 816 استعلاماً، أربع لغات، محركان، ثمانية أسواق: أين تضع الاقتراحات شريك البرمجيات', left: { label: 'الرياض، دبي، الدوحة', sub: 'القائمة نفسها كما في لندن ونيويورك' }, right: { label: 'خريطة لكل لغة', sub: 'الهند 37 % بالإنجليزية · الجزائر غائبة' } },
    cartes: { caption: 'الشكل 1 · حصة ذكر الأماكن لكل بلد في الاقتراحات التي يقترحها غوغل لبذور من نوع «software development company in»، في أربع لغات. تمسك الهند 37 % من الخريطة الإنجليزية، قبل الولايات المتحدة؛ والخريطة العربية مقسومة بين مصر والسعودية؛ والخريطة الفرنسية فرنسا ثم المغرب وتونس؛ والخريطة الإسبانية أمريكا اللاتينية. الجزائر مذكورة مرة واحدة، بالفرنسية. جُمعت الاقتراحات في 16 نوفمبر 2026؛ والعينات العربية والفرنسية والإسبانية صغيرة وتُقرأ كترتيب، لا كنسب دقيقة.' },
    memes: { caption: 'الشكل 2 · الجمع نفسه، سوقاً سوقاً. الاقتراحات الموسَّعة بالحروف التي يقترحها غوغل في السعودية والإمارات وقطر والمملكة المتحدة مطابقة لاقتراحات الولايات المتحدة؛ وبالعربية اقتراحات بلدان الخليج الثلاثة مطابقة لاقتراحات مصر. حصة البلد الأول لا تتحرك، وحصة بلد المشتري تبقى ضعيفة بالإنجليزية، والسطر الأول محلي في جزء من البذور فقط.' },
    premiere: { title: 'السطر الأول محلي، وما بعده لا', columns: ['أول اقتراح من غوغل', 'البذور التي سطرها الأول محلي'], rows: [
      { label: 'الرياض، بالإنجليزية', cells: ['«software development company in india»', '1 من 6: «mobile app development company in saudi arabia»'] },
      { label: 'دبي، بالإنجليزية', cells: ['«software development company in dubai»', '4 من 6: دبي ثلاث مرات، و«uae» مرة'] },
      { label: 'الدوحة، بالإنجليزية', cells: ['«software development company in india»', '3 من 6: «… in qatar» في ثلاث بذور'] },
      { label: 'الرياض، بالعربية', cells: ['«شركة برمجة في السعودية»', '3 من 4؛ والرابعة تبدأ بالأردن'] },
      { label: 'دبي، بالعربية', cells: ['«شركة برمجة في مصر»', '0 من 4: مصر، السعودية، الأردن'] },
      { label: 'الدوحة، بالعربية', cells: ['«شركة برمجة في مصر»', '0 من 4: مصر، السعودية، الأردن'] },
    ], caption: 'الشكل 3 · ما يقترحه غوغل أولاً حين يكتب المشتري البذرة ثم مسافة. التوطين موجود، لكنه يسع سطراً واحداً: تناله دبي في أربع بذور إنجليزية من ست، والرياض في واحدة، والدوحة في ثلاث؛ وبالعربية تناله الرياض في ثلاث بذور من أربع، ودبي والدوحة في ولا واحدة. ومن الحرف الثاني المكتوب تصير القائمة واحدة في كل مكان.', alt: 'جدول من ستة صفوف، الرياض ودبي والدوحة بالإنجليزية ثم بالعربية: أول اقتراح من غوغل للبذرة الرئيسية وعدد البذور التي سطرها الأول محلي: 1 من 6، 4 من 6، 3 من 6، 3 من 4، 0 من 4، 0 من 4.' },
    preuves: { title: 'ما يسافر حين لا تُظهرك الخريطة', layers: [
      { label: 'تقييمات يعدّها طرف ثالث', items: [{ name: 'تقييمات زبائن على دليل أو بطاقة مؤسسة، مؤرَّخة، يستطيع المشتري عدّها وحده', sub: 'رقم لا يتحكم فيه البائع' }] },
      { label: 'عمل مسمّى', items: [{ name: 'إنجازات باسم الزبون، وما سُلّم، وشهادة موقَّعة حين يقبل الزبون', sub: 'مرجع يستطيع المشتري الاتصال به' }] },
      { label: 'قياسات منشورة', items: [{ name: 'منهج مكتوب، بيانات قابلة للتنزيل، نتيجة يستطيع أي أحد إعادتها', sub: 'الكفاءة تُعرض، لا تُعلن', accent: true }] },
      { label: 'منتج على الخط', items: [{ name: 'تطبيق أو منصة في الإنتاج يستطيع المشتري فتحها قبل التوقيع', sub: 'ما هو موجود يُتحقق منه في خمس دقائق' }] },
      { label: 'فريق مسمّى', items: [{ name: 'الأشخاص الذين سينجزون العمل، يمكن الوصول إليهم، وملكية الكود مكتوبة في العقد', sub: 'تعرف من يجيب، ولمن الكود' }] },
    ], caption: 'الشكل 4 · الاقتراح لا يقول شيئاً عن جودة مزوّد؛ يقول ما كتبه كثير من الناس. وما يستطيع المشتري طلبه بدلاً منه يسع خمسة أدلة تعبر الحدود. الطبقة المبرزة هي التي تمارسها هذه الدراسة: منهج، وبيانات، ونتيجة قابلة للإعادة.', alt: 'خمس طبقات من الأدلة التي تسافر: تقييمات يعدّها طرف ثالث، عمل مسمّى، قياسات منشورة (مبرزة)، منتج على الخط، فريق مسمّى.' },
    methode: { title: 'المنهج، في ستة أوقات', items: [
      { label: 'البذور', sub: '25 بذرة مكان في أربع لغات، و28 بذرة قصد' },
      { label: 'الحروف', sub: 'كل بذرة متبوعة بكل حرف من الأبجدية' },
      { label: 'محركان', sub: 'اقتراحات غوغل وبينغ، دون حساب ولا سجل' },
      { label: 'ثمانية أسواق', sub: 'خمسة مدروسة، وثلاثة شواهد: الولايات المتحدة، المملكة المتحدة، مصر', accent: true },
      { label: 'التصنيف', sub: 'المكان إلى بلد؛ استبعاد الضجيج وعروض العمل' },
      { label: 'المقارنة', sub: 'كل سوق بشاهده، محركاً محركاً' },
    ], caption: 'الشكل 5 · الوقت المبرز هو الأسواق الشواهد: دون الولايات المتحدة والمملكة المتحدة ومصر، لاستنتجنا أن الخليج «يبحث في الهند»، بينما القائمة نفسها تُقترح على الجميع في اللغة نفسها. أُرسلت الاستعلامات الـ3 816 في 16 نوفمبر 2026، ولم يفشل أي منها، ومجموعة الـ12 230 اقتراحاً قابلة للتنزيل.', alt: 'ستة أوقات: البذور، الحروف، محركان، ثمانية أسواق (مبرز)، التصنيف، المقارنة.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      cartes: { svg: cartes(e.cartes, rtl), caption: t.cartes.caption, alt: e.cartes.alt },
      memes: { svg: memes(e.memes, rtl), caption: t.memes.caption, alt: e.memes.alt },
      premiere: { svg: matrix({ title: t.premiere.title, columns: t.premiere.columns, rows: t.premiere.rows, rtl }), caption: t.premiere.caption, alt: t.premiere.alt },
      preuves: { svg: layers({ title: t.preuves.title, layers: t.preuves.layers, rtl }), caption: t.preuves.caption, alt: t.preuves.alt },
      methode: { svg: steps({ title: t.methode.title, steps: t.methode.items, arrows: true, rtl }), caption: t.methode.caption, alt: t.methode.alt },
    },
  };
}
