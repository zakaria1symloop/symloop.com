import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { mirror, chain, STRINGS as BL } from './custom/bilingual.mjs';
export const slug = 'application-en-arabe-et-en-francais-algerie-2027-droite-a-gauche-chiffres-dates-polices-traductions-darija-ce-qu-on-construit';
const T = {
  fr: {
    cover: { eyebrow: 'Arabe · Français · Darija · Interface · 2027', title: ['« La version arabe', 'a les boutons', 'à l’envers »'], subtitle: 'Ce qu’on construit pour qu’une application marche vraiment en arabe et en français, et parle darija dans ses messages : une mise en page qui se retourne là où il faut et pas ailleurs, des chiffres et des dates à l’algérienne, des phrases traduites par clé avec les six pluriels de l’arabe, des valeurs isolées, des polices qui ont les deux écritures, et une relecture par ceux qui lisent', left: { label: 'Traduit mot à mot, à la fin', sub: 'et personne ne lit la version arabe' }, right: { label: 'Deux langues dès la première maquette', sub: 'relues par ceux qui les lisent' } },
    miroir: { caption: 'Figure 1 · Le même écran dans les deux langues, et six décisions visibles : la flèche de retour et l’alignement des libellés se retournent, la barre de progression se remplit depuis la droite ; l’horloge, les chiffres, le numéro de téléphone et la date restent tels quels. Les montants arabes utilisent les mêmes chiffres qu’en français : c’est ce que dit la locale arabe d’Algérie, et c’est ce que lisent vos employés.' },
    couches: { title: 'Une application en deux langues, en cinq couches', layers: [
      { label: 'Textes et traductions', items: [{ name: 'Une clé par phrase, des variables nommées, les pluriels de chaque langue, trois fichiers : français, arabe, darija pour les messages', sub: 'aucune phrase construite par morceaux dans le code ; aucun texte en dur' }] },
      { label: 'Mise en page', items: [{ name: 'Tout est écrit en « début » et « fin » ; les flèches de navigation et les listes se retournent, les horloges, lecteurs et chiffres non ; icônes miroir déclarées', sub: 'une seule maquette, testée dans les deux sens dès la première semaine', accent: true }] },
      { label: 'Données', items: [{ name: 'Chiffres, dates, monnaie et tri selon la locale ; recherche qui comprend l’arabe sans points et les deux écritures d’un nom ; machine-readable toujours en chiffres occidentaux', sub: 'ce que l’utilisateur voit suit sa langue ; ce que la base et l’API stockent ne change jamais' }] },
      { label: 'Saisie', items: [{ name: 'Clavier arabe et français, téléphone normalisé en +213, noms stockés dans les deux écritures quand il le faut, adresses et wilayas en deux langues', sub: 'un client saisi en arabe au comptoir doit être retrouvé en français depuis la France' }] },
      { label: 'Processus', items: [{ name: 'Relecture de chaque écran par une personne qui lit l’arabe, captures d’écran dans les deux sens dans la recette, textes livrés au traducteur avec leur contexte', sub: 'la version arabe n’est pas « la traduction de la fin » : elle est livrée à chaque démonstration' }] },
    ], caption: 'Figure 2 · La couche accentuée est celle où l’on gagne ou perd la version arabe : une mise en page écrite en gauche et droite ne se retournera jamais proprement, et une mise en page écrite en début et fin se retourne seule. La cinquième couche est celle qu’on saute toujours, et c’est pour cela que la version arabe est si souvent livrée cassée.', alt: 'Cinq couches : textes et traductions, mise en page (accentuée), données, saisie, processus.' },
    pieges: { title: 'Six pièges d’une application en deux langues, et ce qu’on construit', columns: ['Ce qui se passe', 'Ce qu’on construit'], rows: [
      { label: 'La phrase construite par morceaux', cells: ['« Commande » + n + « livrée » : l’ordre des mots arabes est différent, et le pluriel est faux', 'une clé par phrase avec variables nommées ; les six formes de pluriel de l’arabe dans le fichier de langue'] },
      { label: 'Le numéro de téléphone coupé', cells: ['+213 661 23 45 67 dans une phrase arabe : le + et les groupes de chiffres changent de place', 'chaque valeur insérée est isolée par des marques bidirectionnelles avant d’entrer dans la phrase'] },
      { label: 'Tout se retourne, ou rien', cells: ['Soit les boutons sont à l’envers et l’horloge aussi, soit rien n’est retourné et l’arabe est aligné à gauche', 'mise en page en début et fin ; liste écrite de ce qui se retourne (flèches, listes, barres) et de ce qui ne se retourne pas (horloges, lecteurs, chiffres, logos)'] },
      { label: 'Les chiffres qui changent', cells: ['Les montants s’affichent en chiffres indiens, ou le point et la virgule s’inversent entre les langues', 'locale arabe d’Algérie : chiffres occidentaux, virgule décimale, point des milliers ; la base et l’API toujours en chiffres occidentaux'] },
      { label: 'La date ambiguë', cells: ['03/11 est lu « 3 novembre » par l’un et « 11 mars » par l’autre ; les noms de mois diffèrent entre l’Algérie et le Machrek', 'format de date par locale, mois écrits en toutes lettres dans les documents, noms de mois algériens (janvier, février…) en arabe'] },
      { label: 'La police sans arabe', cells: ['Des carrés à la place des lettres sur certains téléphones, ou une police arabe qui ne ressemble pas à la française', 'une famille de polices qui couvre les deux écritures, embarquée dans l’application et dans les PDF, testée sur un Android de 2019'] },
    ], caption: 'Figure 3 · Les deux premiers pièges sont dans le code, les deux suivants dans la mise en page, les deux derniers dans les données et les polices ; aucun ne se voit sur le téléphone du développeur réglé en français. Tous se voient la première semaine si la maquette est testée dans les deux sens.', alt: 'Matrice de six pièges : phrase par morceaux, téléphone coupé, tout ou rien retourné, chiffres, date ambiguë, police ; ce qui se passe et ce qu’on construit.' },
    chaine: { caption: 'Figure 4 · Une phrase traverse six étapes avant d’atteindre le téléphone du client, et chacune est une règle, pas un geste : la clé, les trois fichiers, le pluriel qui a six formes en arabe quand le français en a deux, le formatage par la locale, l’isolation des valeurs insérées, et le rendu dans trois registres, dont la darija des messages WhatsApp, écrite en lettres latines parce que c’est ainsi que vos clients l’écrivent.' },
    etapes: { title: 'Livrer la version arabe, en six étapes', items: [
      { label: 'Décider où va chaque langue', sub: 'interface en arabe et français, messages en darija, documents bilingues' },
      { label: 'Extraire les textes en clés', sub: 'variables nommées, pluriels, contexte pour le traducteur' },
      { label: 'Maquetter dans les deux sens', sub: 'début et fin, liste de ce qui se retourne, polices à deux écritures', accent: true },
      { label: 'Traduire avec le contexte', sub: 'une capture par écran ; le traducteur voit où va la phrase' },
      { label: 'Relire sur le téléphone', sub: 'par une personne qui lit l’arabe ; captures RTL dans la recette' },
      { label: 'Livrer à chaque démonstration', sub: 'les deux langues, pas la française d’abord et l’arabe « après »' },
    ], caption: 'Figure 5 · La troisième étape est celle qui coûte le moins et évite le plus : une maquette testée dans les deux sens dès la première semaine coûte une heure, et une application à retourner après coup coûte des semaines. La cinquième est celle qu’on saute toujours, et c’est pour cela que les boutons sont à l’envers.', alt: 'Six étapes : décider où va chaque langue, extraire en clés, maquetter dans les deux sens (accentuée), traduire avec le contexte, relire sur le téléphone, livrer à chaque démonstration.' },
    calendrier: { title: 'Une application en arabe et en français en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Langues et règles', note: 'quelle langue pour l’interface, les messages, les documents ; chiffres, dates, monnaie ; ce qui se retourne et ce qui ne se retourne pas ; écrit et signé', from: 0, to: 1 },
      { label: 'Textes en clés', note: 'extraction, variables nommées, pluriels, contexte ; plus un texte en dur dans le code', from: 1, to: 2 },
      { label: 'Mise en page dans les deux sens', note: 'début et fin partout, miroir déclaré, polices à deux écritures, premier écran testé en arabe', from: 2, to: 3, accent: true },
      { label: 'Données et saisie', note: 'formats par locale, tri et recherche arabes, téléphone normalisé, noms en deux écritures', from: 3, to: 4 },
      { label: 'Relecture et recette', note: 'chaque écran relu par un lecteur d’arabe ; captures dans les deux sens ; corrections', from: 4, to: 5 },
      { label: 'Documents et messages', note: 'PDF bilingues avec les deux écritures, gabarits WhatsApp en darija, mise en production', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six semaines, et la version arabe est visible dès la troisième, sur le premier écran, avant que le reste soit construit : c’est ce qui fait que les deux langues sont livrées ensemble, et non la française d’abord et l’arabe « après », quand plus personne n’a le temps.', alt: 'Frise de six semaines : langues et règles, textes en clés, mise en page dans les deux sens (accentuée), données et saisie, relecture et recette, documents et messages.' },
  },
  en: {
    cover: { eyebrow: 'Arabic · French · Darija · Interface · 2027', title: ['“The Arabic version', 'has the buttons', 'backwards”'], subtitle: 'What gets built so that an application truly works in Arabic and French, and speaks darija in its messages: a layout that mirrors where it should and nowhere else, Algerian digits and dates, sentences translated by key with Arabic’s six plurals, isolated values, fonts that carry both scripts, and a review by the people who read them', left: { label: 'Translated word for word, at the end', sub: 'and nobody reads the Arabic version' }, right: { label: 'Two languages from the first mock-up', sub: 'reviewed by those who read them' } },
    miroir: { caption: 'Figure 1 · The same screen in both languages, and six visible decisions: the back arrow and label alignment mirror, the progress bar fills from the right; the clock, the digits, the phone number and the date stay as they are. Arabic amounts use the same digits as French: that is what the Algerian Arabic locale says, and what your employees read.' },
    couches: { title: 'An application in two languages, in five layers', layers: [
      { label: 'Texts and translations', items: [{ name: 'One key per sentence, named variables, each language’s plurals, three files: French, Arabic, darija for messages', sub: 'no sentence built from pieces in the code; no hard-coded text' }] },
      { label: 'Layout', items: [{ name: 'Everything written in “start” and “end”; navigation arrows and lists mirror, clocks, players and digits do not; mirrored icons declared', sub: 'a single mock-up, tested in both directions from week one', accent: true }] },
      { label: 'Data', items: [{ name: 'Digits, dates, currency and sorting per locale; search that understands Arabic without dots and both spellings of a name; machine-readable always in Western digits', sub: 'what the user sees follows their language; what the database and API store never changes' }] },
      { label: 'Input', items: [{ name: 'Arabic and French keyboards, phone normalised to +213, names stored in both scripts when needed, addresses and wilayas in two languages', sub: 'a customer entered in Arabic at the counter must be found in French from France' }] },
      { label: 'Process', items: [{ name: 'Every screen reviewed by someone who reads Arabic, screenshots in both directions in acceptance, texts delivered to the translator with their context', sub: 'the Arabic version is not “the translation at the end”: it is delivered at every demo' }] },
    ], caption: 'Figure 2 · The accented layer is where the Arabic version is won or lost: a layout written in left and right will never mirror cleanly, and a layout written in start and end mirrors on its own. The fifth layer is the one always skipped, which is why the Arabic version is so often delivered broken.', alt: 'Five layers: texts and translations, layout (accented), data, input, process.' },
    pieges: { title: 'Six traps of a two-language application, and what gets built', columns: ['What happens', 'What gets built'], rows: [
      { label: 'The sentence built from pieces', cells: ['“Order” + n + “delivered”: Arabic word order differs, and the plural is wrong', 'one key per sentence with named variables; Arabic’s six plural forms in the language file'] },
      { label: 'The broken phone number', cells: ['+213 661 23 45 67 inside an Arabic sentence: the + and digit groups change places', 'every inserted value is isolated with bidirectional marks before entering the sentence'] },
      { label: 'Everything mirrors, or nothing', cells: ['Either buttons are backwards and the clock too, or nothing mirrors and Arabic is left-aligned', 'layout in start and end; written list of what mirrors (arrows, lists, bars) and what does not (clocks, players, digits, logos)'] },
      { label: 'Digits that change', cells: ['Amounts show in Eastern Arabic digits, or dot and comma swap between languages', 'Algerian Arabic locale: Western digits, comma decimal, dot thousands; database and API always in Western digits'] },
      { label: 'The ambiguous date', cells: ['03/11 is read “3 November” by one and “11 March” by the other; month names differ between Algeria and the Mashreq', 'date format per locale, months spelled out in documents, Algerian month names in Arabic'] },
      { label: 'The font without Arabic', cells: ['Boxes instead of letters on some phones, or an Arabic font that does not match the French one', 'a font family covering both scripts, embedded in the app and in PDFs, tested on a 2019 Android'] },
    ], caption: 'Figure 3 · The first two traps are in the code, the next two in the layout, the last two in data and fonts; none shows on the developer’s phone set to French. All show in week one if the mock-up is tested in both directions.', alt: 'Matrix of six traps: sentence from pieces, broken phone number, all or nothing mirrored, digits, ambiguous date, font; what happens and what gets built.' },
    chaine: { caption: 'Figure 4 · A sentence crosses six stages before reaching the customer’s phone, and each is a rule, not a gesture: the key, the three files, the plural that has six forms in Arabic where French has two, formatting by locale, isolation of inserted values, and rendering in three registers, including the darija of WhatsApp messages, written in Latin letters because that is how your customers write it.' },
    etapes: { title: 'Delivering the Arabic version, in six steps', items: [
      { label: 'Decide where each language goes', sub: 'interface in Arabic and French, messages in darija, bilingual documents' },
      { label: 'Extract texts into keys', sub: 'named variables, plurals, context for the translator' },
      { label: 'Mock up in both directions', sub: 'start and end, list of what mirrors, fonts with both scripts', accent: true },
      { label: 'Translate with context', sub: 'one screenshot per screen; the translator sees where the sentence goes' },
      { label: 'Review on the phone', sub: 'by someone who reads Arabic; RTL screenshots in acceptance' },
      { label: 'Deliver at every demo', sub: 'both languages, not French first and Arabic “later”' },
    ], caption: 'Figure 5 · The third step is the one that costs least and avoids most: a mock-up tested in both directions in week one costs an hour, and an application to mirror afterwards costs weeks. The fifth is the one always skipped, which is why the buttons are backwards.', alt: 'Six steps: decide where each language goes, extract into keys, mock up in both directions (accented), translate with context, review on the phone, deliver at every demo.' },
    calendrier: { title: 'An application in Arabic and French in 2027, in weeks', unit: 'wk', items: [
      { label: 'Languages and rules', note: 'which language for the interface, messages, documents; digits, dates, currency; what mirrors and what does not; written and signed', from: 0, to: 1 },
      { label: 'Texts into keys', note: 'extraction, named variables, plurals, context; no hard-coded text left', from: 1, to: 2 },
      { label: 'Layout in both directions', note: 'start and end everywhere, mirroring declared, fonts with both scripts, first screen tested in Arabic', from: 2, to: 3, accent: true },
      { label: 'Data and input', note: 'formats per locale, Arabic sorting and search, normalised phone, names in both scripts', from: 3, to: 4 },
      { label: 'Review and acceptance', note: 'every screen reviewed by an Arabic reader; screenshots in both directions; fixes', from: 4, to: 5 },
      { label: 'Documents and messages', note: 'bilingual PDFs with both scripts, WhatsApp templates in darija, production', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six weeks, and the Arabic version is visible from the third, on the first screen, before the rest is built: that is what makes both languages ship together, rather than French first and Arabic “later”, when nobody has time any more.', alt: 'Six-week timeline: languages and rules, texts into keys, layout in both directions (accented), data and input, review and acceptance, documents and messages.' },
  },
  ar: {
    cover: { eyebrow: 'عربية · فرنسية · دارجة · واجهة · 2027', title: ['«النسخة العربية', 'أزرارها', 'مقلوبة»'], subtitle: 'ما يُبنى كي يعمل التطبيق فعلاً بالعربية والفرنسية ويتكلم الدارجة في رسائله: تخطيط ينعكس حيث يجب ولا ينعكس في غيره، أرقام وتواريخ على الطريقة الجزائرية، جمل تُترجم بالمفتاح مع صيغ الجمع الست للعربية، قيم معزولة، خطوط تحمل الكتابتين، ومراجعة من الذين يقرؤون', left: { label: 'مترجَم كلمة كلمة، في النهاية', sub: 'ولا أحد يقرأ النسخة العربية' }, right: { label: 'لغتان منذ أول نموذج', sub: 'يراجعهما من يقرؤهما' } },
    miroir: { caption: 'الشكل 1 · الشاشة نفسها باللغتين، وستة قرارات مرئية: سهم الرجوع ومحاذاة التسميات ينعكسان، وشريط التقدم يمتلئ من اليمين؛ أما الساعة والأرقام ورقم الهاتف والتاريخ فتبقى كما هي. والمبالغ العربية تستعمل الأرقام نفسها كما في الفرنسية: هذا ما تقوله لغة الجزائر العربية، وهذا ما يقرؤه موظفوكم.' },
    couches: { title: 'تطبيق بلغتين، في خمس طبقات', layers: [
      { label: 'النصوص والترجمات', items: [{ name: 'مفتاح لكل جملة، متغيرات مسمّاة، صيغ جمع كل لغة، ثلاثة ملفات: فرنسية، عربية، دارجة للرسائل', sub: 'لا جملة تُبنى من قطع في الكود؛ لا نص مثبَّت' }] },
      { label: 'التخطيط', items: [{ name: 'كل شيء يُكتب بـ «البداية» و«النهاية»؛ أسهم التنقل والقوائم تنعكس، والساعات والمشغّلات والأرقام لا؛ الأيقونات المنعكسة معلَنة', sub: 'نموذج واحد، يُختبر في الاتجاهين منذ الأسبوع الأول', accent: true }] },
      { label: 'البيانات', items: [{ name: 'أرقام وتواريخ وعملة وترتيب حسب اللغة المحلية؛ بحث يفهم العربية بلا نقاط وكتابتَي الاسم؛ ما تقرؤه الآلة دائماً بأرقام غربية', sub: 'ما يراه المستعمل يتبع لغته؛ وما تخزنه القاعدة والواجهة لا يتغير أبداً' }] },
      { label: 'الإدخال', items: [{ name: 'لوحتا مفاتيح عربية وفرنسية، هاتف منمَّط بـ +213، أسماء مخزَّنة بالكتابتين عند اللزوم، عناوين وولايات بلغتين', sub: 'زبون أُدخل بالعربية عند الكاونتر يجب أن يُعثر عليه بالفرنسية من فرنسا' }] },
      { label: 'المسار', items: [{ name: 'مراجعة كل شاشة من شخص يقرأ العربية، لقطات شاشة في الاتجاهين في القبول، نصوص تُسلَّم للمترجم بسياقها', sub: 'النسخة العربية ليست «ترجمة النهاية»: تُسلَّم في كل عرض' }] },
    ], caption: 'الشكل 2 · الطبقة المميزة هي حيث تُكسب النسخة العربية أو تُخسر: تخطيط مكتوب باليسار واليمين لن ينعكس بنظافة أبداً، وتخطيط مكتوب بالبداية والنهاية ينعكس وحده. والطبقة الخامسة هي التي تُتخطى دائماً، ولهذا تُسلَّم النسخة العربية مكسورة كثيراً.', alt: 'خمس طبقات: النصوص والترجمات، التخطيط (مميز)، البيانات، الإدخال، المسار.' },
    pieges: { title: 'ستة فخاخ لتطبيق بلغتين، وما يُبنى', columns: ['ما يحدث', 'ما يُبنى'], rows: [
      { label: 'الجملة المبنية من قطع', cells: ['«طلبية» + n + «سُلّمت»: ترتيب الكلمات العربية مختلف، والجمع خاطئ', 'مفتاح لكل جملة بمتغيرات مسمّاة؛ صيغ الجمع الست للعربية في ملف اللغة'] },
      { label: 'رقم الهاتف المقطوع', cells: ['+213 661 23 45 67 داخل جملة عربية: الـ + ومجموعات الأرقام تبدّل مكانها', 'كل قيمة مدرجة تُعزل بعلامات ثنائية الاتجاه قبل دخول الجملة'] },
      { label: 'كل شيء ينعكس، أو لا شيء', cells: ['إما الأزرار مقلوبة والساعة أيضاً، أو لا شيء ينعكس والعربية محاذاة لليسار', 'تخطيط بالبداية والنهاية؛ قائمة مكتوبة بما ينعكس (أسهم، قوائم، أشرطة) وما لا ينعكس (ساعات، مشغّلات، أرقام، شعارات)'] },
      { label: 'الأرقام التي تتغير', cells: ['المبالغ تُعرض بالأرقام الهندية، أو تنقلب النقطة والفاصلة بين اللغتين', 'لغة الجزائر العربية: أرقام غربية، فاصلة عشرية، نقطة آلاف؛ القاعدة والواجهة دائماً بأرقام غربية'] },
      { label: 'التاريخ الملتبس', cells: ['03/11 يُقرأ «3 نوفمبر» عند أحدهم و«11 مارس» عند الآخر؛ وأسماء الأشهر تختلف بين الجزائر والمشرق', 'صيغة تاريخ حسب اللغة المحلية، أشهر مكتوبة بالحروف في الوثائق، أسماء الأشهر الجزائرية بالعربية'] },
      { label: 'الخط بلا عربية', cells: ['مربعات بدل الحروف على بعض الهواتف، أو خط عربي لا يشبه الفرنسي', 'عائلة خطوط تغطي الكتابتين، مضمَّنة في التطبيق وفي PDF، مختبَرة على Android من 2019'] },
    ], caption: 'الشكل 3 · الفخان الأولان في الكود، والتاليان في التخطيط، والأخيران في البيانات والخطوط؛ ولا يُرى أي منها على هاتف المطوّر المضبوط على الفرنسية. وكلها تُرى في الأسبوع الأول إن اختُبر النموذج في الاتجاهين.', alt: 'مصفوفة ستة فخاخ: جملة من قطع، هاتف مقطوع، كل شيء أو لا شيء منعكس، أرقام، تاريخ ملتبس، خط؛ ما يحدث وما يُبنى.' },
    chaine: { caption: 'الشكل 4 · تعبر الجملة ست مراحل قبل أن تبلغ هاتف الزبون، وكل منها قاعدة لا حركة: المفتاح، الملفات الثلاثة، الجمع الذي له ست صيغ في العربية حين للفرنسية صيغتان، التنسيق حسب اللغة المحلية، عزل القيم المدرجة، والعرض في ثلاثة سجلات، منها دارجة رسائل WhatsApp، المكتوبة بحروف لاتينية لأن زبائنكم يكتبونها هكذا.' },
    etapes: { title: 'تسليم النسخة العربية، في ست خطوات', items: [
      { label: 'تحديد أين تذهب كل لغة', sub: 'واجهة بالعربية والفرنسية، رسائل بالدارجة، وثائق بلغتين' },
      { label: 'استخراج النصوص في مفاتيح', sub: 'متغيرات مسمّاة، جموع، سياق للمترجم' },
      { label: 'النمذجة في الاتجاهين', sub: 'بداية ونهاية، قائمة ما ينعكس، خطوط بكتابتين', accent: true },
      { label: 'الترجمة بالسياق', sub: 'لقطة لكل شاشة؛ المترجم يرى أين تذهب الجملة' },
      { label: 'المراجعة على الهاتف', sub: 'من شخص يقرأ العربية؛ لقطات RTL في القبول' },
      { label: 'التسليم في كل عرض', sub: 'اللغتان، لا الفرنسية أولاً والعربية «لاحقاً»' },
    ], caption: 'الشكل 5 · الخطوة الثالثة هي الأقل كلفة والأكثر تجنيباً: نموذج يُختبر في الاتجاهين في الأسبوع الأول يكلّف ساعة، وتطبيق يُعكس بعد ذلك يكلّف أسابيع. والخامسة هي التي تُتخطى دائماً، ولهذا الأزرار مقلوبة.', alt: 'ست خطوات: تحديد أين تذهب كل لغة، استخراج في مفاتيح، نمذجة في الاتجاهين (مميزة)، ترجمة بالسياق، مراجعة على الهاتف، تسليم في كل عرض.' },
    calendrier: { title: 'تطبيق بالعربية والفرنسية سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'اللغات والقواعد', note: 'أي لغة للواجهة والرسائل والوثائق؛ الأرقام والتواريخ والعملة؛ ما ينعكس وما لا ينعكس؛ مكتوب وموقَّع', from: 0, to: 1 },
      { label: 'النصوص في مفاتيح', note: 'استخراج، متغيرات مسمّاة، جموع، سياق؛ لا نص مثبَّت في الكود بعد', from: 1, to: 2 },
      { label: 'تخطيط في الاتجاهين', note: 'بداية ونهاية في كل مكان، انعكاس معلَن، خطوط بكتابتين، أول شاشة مختبَرة بالعربية', from: 2, to: 3, accent: true },
      { label: 'البيانات والإدخال', note: 'صيغ حسب اللغة المحلية، ترتيب وبحث عربيان، هاتف منمَّط، أسماء بكتابتين', from: 3, to: 4 },
      { label: 'مراجعة وقبول', note: 'كل شاشة يراجعها قارئ عربية؛ لقطات في الاتجاهين؛ تصحيحات', from: 4, to: 5 },
      { label: 'وثائق ورسائل', note: 'PDF بلغتين بالكتابتين، قوالب WhatsApp بالدارجة، إنتاج', from: 5, to: 6 },
    ], caption: 'الشكل 6 · ستة أسابيع، والنسخة العربية مرئية منذ الثالث على أول شاشة قبل أن يُبنى الباقي: هذا ما يجعل اللغتين تُسلَّمان معاً، لا الفرنسية أولاً والعربية «لاحقاً» حين لم يعد لأحد وقت.', alt: 'خط زمني من ستة أسابيع: اللغات والقواعد، النصوص في مفاتيح، تخطيط في الاتجاهين (مميز)، البيانات والإدخال، مراجعة وقبول، وثائق ورسائل.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = BL[locale] || BL.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      miroir: { svg: mirror(e.mirror, rtl), caption: t.miroir.caption, alt: e.mirror.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      pieges: { svg: matrix({ title: t.pieges.title, columns: t.pieges.columns, rows: t.pieges.rows, rtl }), caption: t.pieges.caption, alt: t.pieges.alt },
      chaine: { svg: chain(e.chain, rtl), caption: t.chaine.caption, alt: e.chain.alt },
      etapes: { svg: steps({ title: t.etapes.title, steps: t.etapes.items, arrows: true, rtl }), caption: t.etapes.caption, alt: t.etapes.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 6, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
