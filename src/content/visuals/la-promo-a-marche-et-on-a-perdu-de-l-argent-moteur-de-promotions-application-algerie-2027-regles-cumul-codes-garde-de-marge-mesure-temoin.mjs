import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { basket, uplift, STRINGS as PM } from './custom/promo.mjs';
export const slug = 'la-promo-a-marche-et-on-a-perdu-de-l-argent-moteur-de-promotions-application-algerie-2027-regles-cumul-codes-garde-de-marge-mesure-temoin';
const T = {
  fr: {
    cover: { eyebrow: 'Promotions · Règles · Marge · 2027', title: ['« La promo a marché,', 'et on a perdu de l’argent »'], subtitle: 'Ce qu’on construit pour les promotions : règles par condition et effet, cumul, codes, garde de marge, témoin', left: { label: 'Une affiche et un prix barré', sub: 'et une marge découverte au bilan' }, right: { label: 'Une campagne écrite, un moteur', sub: 'une garde de marge, un témoin' } },
    panier: { caption: 'Figure 1 · Un panier de quatre lignes au comptoir, et cinq campagnes candidates. Le moteur évalue chacune contre le panier, période, canal, produit, quantité, segment du client, dans un ordre écrit : les promotions de ligne d’abord, celle du panier ensuite, les codes exclusifs. Trois s’appliquent, deux non. La garde de marge plafonne la remise sur l’huile avant que le prix ne s’affiche, parce que moins dix pour cent aurait laissé six pour cent de marge sous le minimum écrit. Prix, marges et campagnes sont un exemple construit.' },
    lancer: { title: 'Lancer une promotion, en six temps', items: [
      { label: 'Définir', sub: 'condition, effet, période, canal, segment, budget ; versionnée' },
      { label: 'Simuler', sub: 'sur les ventes passées : lignes touchées, coût, marge après' },
      { label: 'Publier', sub: 'caisse, site, portail, WhatsApp : le même moteur' },
      { label: 'Appliquer', sub: 'évaluation au panier, ordre, cumul, garde de marge', accent: true },
      { label: 'Suivre', sub: 'budget consommé, codes utilisés, abus, plafonnements' },
      { label: 'Mesurer', sub: 'témoin, semaines d’après, cannibalisation, décision' },
    ], caption: 'Figure 2 · L’étape accentuée est l’application : au moment du panier, le moteur évalue toutes les campagnes, dans l’ordre écrit, et la garde de marge plafonne. Avant elle, la campagne est définie et simulée sur les ventes passées, donc son coût est connu avant le premier ticket ; après elle, le budget se suit et la promotion se mesure contre un témoin.', alt: 'Six temps : définir, simuler, publier, appliquer (accentué), suivre, mesurer.' },
    mesure: { caption: 'Figure 3 · Une promotion de deux semaines sur l’huile, dans six magasins, contre six magasins témoins sans promotion. Pendant la promotion, les unités montent de 38 pour cent contre témoin, mais la marge par unité tombe de quinze à huit pour cent, et la semaine d’après les unités chutent de 17 pour cent sous le témoin : les clients ont stocké. Le verdict est un chiffre sur six semaines, pas un sentiment sur la semaine où la caisse a sonné. Magasins, unités et marges sont un exemple construit.' },
    situations: { title: 'Six situations réelles, et ce que l’application fait', columns: ['Ce qui se passe', 'Ce que l’application fait'], rows: [
      { label: 'La promo a marché, et on a perdu de l’argent', cells: ['Volume en hausse, marge découverte au bilan', 'simulation avant lancement ; garde de marge ; verdict sur six semaines'] },
      { label: 'Le code promo a été partagé sur Facebook', cells: ['Trois mille utilisations en deux jours', 'codes uniques ou plafonnés ; segment ; usage unique par client ; arrêt automatique'] },
      { label: 'Deux promos se cumulent par accident', cells: ['Moins 10 et moins 15 sur la même ligne', 'ordre de cumul et exclusivités écrits ; joués par le moteur, pas par le caissier'] },
      { label: 'La caisse et le site n’ont pas le même prix', cells: ['Le client montre l’écran, le caissier cède', 'un seul moteur appelé par tous les canaux ; même évaluation, même instant'] },
      { label: 'Le stock était parti au troisième jour', cells: ['Affiche encore en vitrine, rayon vide', 'budget en unités lié au stock ; promo suspendue au seuil ; réassort averti'] },
      { label: 'Personne ne sait si la promo a servi', cells: ['On refait la même l’an prochain', 'témoin, semaines d’après, cannibalisation ; chaque campagne a son chiffre'] },
    ], caption: 'Figure 4 · Les trois premières lignes se règlent par la simulation, la garde de marge et les règles de cumul écrites ; les trois suivantes par le moteur unique, le budget lié au stock et la mesure contre témoin. Aucune ne se règle par un gérant qui refuse les promotions.', alt: 'Matrice de six situations : promo qui perd de l’argent, code partagé, cumul accidentel, prix différents par canal, stock parti, promo non mesurée ; ce qui se passe et ce que l’application fait.' },
    couches: { title: 'Les promotions, en cinq couches', layers: [
      { label: 'Campagne', items: [{ name: 'Conditions : produit, famille, quantité, seuil, période, canal, segment ; effet : %, montant, X pour Y, lot ; budget ; versionnée', sub: 'une campagne est une règle écrite, pas une affiche' }] },
      { label: 'Moteur', items: [{ name: 'Évaluation de toutes les campagnes contre le panier, ordre écrit, cumul et exclusivités, garde de marge sur le dernier prix d’achat', sub: 'appelé par tous les canaux ; même prix, même instant', accent: true }] },
      { label: 'Codes', items: [{ name: 'Génériques ou uniques, usage unique par client, plafonds d’utilisations, segment, arrêt automatique au plafond ou au budget', sub: 'un code partagé meurt tout seul' }] },
      { label: 'Canaux', items: [{ name: 'Caisse, site, portail B2B, commandes WhatsApp, agent : tous appellent le moteur ; hors ligne avec les campagnes synchronisées', sub: 'la caisse applique la même règle sans réseau' }] },
      { label: 'Mesure', items: [{ name: 'Témoin, semaines d’après, cannibalisation, marge gagnée ou perdue, budget consommé, plafonnements ; un chiffre par campagne', sub: 'la prochaine campagne part d’un verdict' }] },
    ], caption: 'Figure 5 · La couche accentuée est le moteur : une seule évaluation, dans l’ordre écrit, avec la garde de marge, appelée par tous les canaux. La campagne au-dessus est une règle versionnée ; les codes, les canaux et la mesure en dessous ne font que nourrir ou lire ce moteur.', alt: 'Cinq couches : campagne, moteur (accentuée), codes, canaux, mesure.' },
    calendrier: { title: 'Mettre les promotions sous règle en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Règles', note: 'types de campagnes admis, ordre de cumul, exclusivités, minimum de marge par famille, qui crée et qui approuve, segments ; avec le gérant', from: 0, to: 1 },
      { label: 'Campagnes et moteur', note: 'modèle de campagne versionnée, évaluation au panier, cumul, garde de marge, simulation sur les ventes passées', from: 1, to: 3, accent: true },
      { label: 'Codes', note: 'génériques, uniques, plafonds, usage unique, segment, arrêt automatique, anti-abus', from: 3, to: 4 },
      { label: 'Canaux', note: 'caisse hors ligne, site, portail B2B, WhatsApp ; synchronisation des campagnes ; un prix partout', from: 4, to: 5 },
      { label: 'Suivi', note: 'budget consommé, utilisations, plafonnements, stock lié, suspension au seuil', from: 5, to: 6 },
      { label: 'Mesure', note: 'témoin, semaines d’après, cannibalisation, marge, verdict par campagne, revue du lundi', from: 6, to: 7 },
    ], caption: 'Figure 6 · Sept semaines, la première sans code : les types de campagnes, l’ordre de cumul, le minimum de marge et qui approuve sont des décisions du gérant. Les deux semaines accentuées sont les campagnes et le moteur, parce que les codes, les canaux et la mesure ne sont que des entrées et des lectures de ce moteur.', alt: 'Frise de sept semaines : règles, campagnes et moteur (accentué, deux semaines), codes, canaux, suivi, mesure.' },
  },
  en: {
    cover: { eyebrow: 'Promotions · Rules · Margin · 2027', title: ['“The promotion worked,', 'and we lost money”'], subtitle: 'What gets built for promotions: rules by condition and effect, stacking, codes, margin guard, control', left: { label: 'A poster and a crossed-out price', sub: 'and a margin discovered at year end' }, right: { label: 'A written campaign, an engine', sub: 'a margin guard, a control' } },
    panier: { caption: 'Figure 1 · A four-line basket at the till, and five candidate campaigns. The engine evaluates each one against the basket, period, channel, product, quantity, customer segment, in a written order: line promotions first, then the basket one, codes exclusive. Three apply, two do not. The margin guard caps the discount on the oil before the price is shown, because minus ten percent would have left six percent margin, below the written minimum. Prices, margins and campaigns are a constructed example.' },
    lancer: { title: 'Launching a promotion, in six beats', items: [
      { label: 'Define', sub: 'condition, effect, period, channel, segment, budget; versioned' },
      { label: 'Simulate', sub: 'on past sales: lines hit, cost, margin after' },
      { label: 'Publish', sub: 'till, website, portal, WhatsApp: the same engine' },
      { label: 'Apply', sub: 'evaluation at basket, order, stacking, margin guard', accent: true },
      { label: 'Track', sub: 'budget consumed, codes used, abuse, caps' },
      { label: 'Measure', sub: 'control, weeks after, cannibalisation, decision' },
    ], caption: 'Figure 2 · The accented beat is the application: at basket time, the engine evaluates all campaigns, in the written order, and the margin guard caps. Before it, the campaign is defined and simulated on past sales, so its cost is known before the first receipt; after it, the budget is tracked and the promotion is measured against a control.', alt: 'Six beats: define, simulate, publish, apply (accented), track, measure.' },
    mesure: { caption: 'Figure 3 · A two-week promotion on oil, in six stores, against six control stores without promotion. During the promotion, units rise 38 percent against control, but margin per unit falls from fifteen to eight percent, and the week after, units drop 17 percent below control: customers stocked up. The verdict is a figure over six weeks, not a feeling about the week the till rang. Stores, units and margins are a constructed example.' },
    situations: { title: 'Six real situations, and what the application does', columns: ['What happens', 'What the application does'], rows: [
      { label: 'The promotion worked, and we lost money', cells: ['Volume up, margin discovered at year end', 'simulation before launch; margin guard; verdict over six weeks'] },
      { label: 'The promo code was shared on Facebook', cells: ['Three thousand uses in two days', 'unique or capped codes; segment; one use per customer; automatic stop'] },
      { label: 'Two promotions stack by accident', cells: ['Minus 10 and minus 15 on the same line', 'stacking order and exclusivities written; played by the engine, not the cashier'] },
      { label: 'The till and the website show different prices', cells: ['The customer shows the screen, the cashier gives in', 'one engine called by every channel; same evaluation, same instant'] },
      { label: 'Stock was gone on day three', cells: ['Poster still in the window, shelf empty', 'budget in units linked to stock; promotion suspended at threshold; replenishment warned'] },
      { label: 'Nobody knows whether the promotion helped', cells: ['The same one is run again next year', 'control, weeks after, cannibalisation; every campaign has its figure'] },
    ], caption: 'Figure 4 · The first three rows are settled by simulation, the margin guard and written stacking rules; the next three by the single engine, the stock-linked budget and measurement against control. None is settled by a manager who refuses promotions.', alt: 'Matrix of six situations: money-losing promotion, shared code, accidental stacking, different prices per channel, stock gone, unmeasured promotion; what happens and what the application does.' },
    couches: { title: 'Promotions, in five layers', layers: [
      { label: 'Campaign', items: [{ name: 'Conditions: product, family, quantity, threshold, period, channel, segment; effect: %, amount, X for Y, bundle; budget; versioned', sub: 'a campaign is a written rule, not a poster' }] },
      { label: 'Engine', items: [{ name: 'Evaluation of all campaigns against the basket, written order, stacking and exclusivities, margin guard on the last purchase price', sub: 'called by every channel; same price, same instant', accent: true }] },
      { label: 'Codes', items: [{ name: 'Generic or unique, one use per customer, usage caps, segment, automatic stop at cap or budget', sub: 'a shared code dies on its own' }] },
      { label: 'Channels', items: [{ name: 'Till, website, B2B portal, WhatsApp orders, agent: all call the engine; offline with synced campaigns', sub: 'the till applies the same rule without network' }] },
      { label: 'Measurement', items: [{ name: 'Control, weeks after, cannibalisation, margin gained or lost, budget consumed, caps; one figure per campaign', sub: 'the next campaign starts from a verdict' }] },
    ], caption: 'Figure 5 · The accented layer is the engine: one evaluation, in the written order, with the margin guard, called by every channel. The campaign above is a versioned rule; codes, channels and measurement below only feed or read that engine.', alt: 'Five layers: campaign, engine (accented), codes, channels, measurement.' },
    calendrier: { title: 'Putting promotions under rules in 2027, in weeks', unit: 'wk', items: [
      { label: 'Rules', note: 'admitted campaign types, stacking order, exclusivities, minimum margin per family, who creates and who approves, segments; with the manager', from: 0, to: 1 },
      { label: 'Campaigns and engine', note: 'versioned campaign model, evaluation at basket, stacking, margin guard, simulation on past sales', from: 1, to: 3, accent: true },
      { label: 'Codes', note: 'generic, unique, caps, single use, segment, automatic stop, anti-abuse', from: 3, to: 4 },
      { label: 'Channels', note: 'offline till, website, B2B portal, WhatsApp; campaign sync; one price everywhere', from: 4, to: 5 },
      { label: 'Tracking', note: 'budget consumed, uses, caps, linked stock, suspension at threshold', from: 5, to: 6 },
      { label: 'Measurement', note: 'control, weeks after, cannibalisation, margin, verdict per campaign, Monday review', from: 6, to: 7 },
    ], caption: 'Figure 6 · Seven weeks, the first without code: campaign types, stacking order, minimum margin and who approves are the manager’s decisions. The two accented weeks are campaigns and the engine, because codes, channels and measurement are only inputs and readings of that engine.', alt: 'Seven-week timeline: rules, campaigns and engine (accented, two weeks), codes, channels, tracking, measurement.' },
  },
  ar: {
    cover: { eyebrow: 'عروض ترويجية · قواعد · هامش · 2027', title: ['«العرض نجح،', 'وخسرنا مالاً»'], subtitle: 'ما يُبنى للعروض الترويجية: قواعد بالشرط والأثر، تراكم، رموز، حارس هامش، قياس مقابل شاهد', left: { label: 'ملصق وسعر مشطوب', sub: 'وهامش يُكتشف في الحصيلة' }, right: { label: 'حملة مكتوبة، ومحرك', sub: 'حارس هامش، وشاهد' } },
    panier: { caption: 'الشكل 1 · سلة من أربعة أسطر عند الصندوق، وخمس حملات مرشحة. يقيّم المحرك كل واحدة مقابل السلة، الفترة والقناة والمنتج والكمية وشريحة الزبون، بترتيب مكتوب: عروض الأسطر أولاً ثم عرض السلة والرموز حصرية. ثلاث تنطبق واثنتان لا. ويسقف حارس الهامش الخصم على الزيت قبل أن يُعرض السعر، لأن ناقص عشرة بالمائة كان سيترك ستة بالمائة هامشاً تحت الحد الأدنى المكتوب. والأسعار والهوامش والحملات مثال مبني.' },
    lancer: { title: 'إطلاق عرض ترويجي، في ستة أوقات', items: [
      { label: 'التعريف', sub: 'شرط، أثر، فترة، قناة، شريحة، ميزانية؛ مرقَّم بالإصدار' },
      { label: 'المحاكاة', sub: 'على المبيعات السابقة: أسطر متأثرة، كلفة، هامش بعد' },
      { label: 'النشر', sub: 'صندوق، موقع، بوابة، واتساب: المحرك نفسه' },
      { label: 'التطبيق', sub: 'تقييم عند السلة، ترتيب، تراكم، حارس هامش', accent: true },
      { label: 'المتابعة', sub: 'ميزانية مستهلكة، رموز مستعملة، إساءة، سقوف' },
      { label: 'القياس', sub: 'شاهد، أسابيع تالية، تهام، قرار' },
    ], caption: 'الشكل 2 · الوقت المميز هو التطبيق: لحظة السلة يقيّم المحرك كل الحملات بالترتيب المكتوب ويسقف حارس الهامش. وقبله تُعرَّف الحملة وتُحاكى على المبيعات السابقة فتُعرف كلفتها قبل أول تذكرة؛ وبعده تُتابع الميزانية ويُقاس العرض مقابل شاهد.', alt: 'ستة أوقات: التعريف، المحاكاة، النشر، التطبيق (مميز)، المتابعة، القياس.' },
    mesure: { caption: 'الشكل 3 · عرض أسبوعين على الزيت في ستة محلات مقابل ستة محلات شاهدة بلا عرض. أثناء العرض ترتفع الوحدات 38 بالمائة مقابل الشاهد، لكن هامش الوحدة يهبط من خمسة عشر إلى ثمانية بالمائة، وفي الأسبوع التالي تهبط الوحدات 17 بالمائة تحت الشاهد: الزبائن خزّنوا. والحكم رقم على ستة أسابيع لا شعور عن الأسبوع الذي رنّ فيه الصندوق. والمحلات والوحدات والهوامش مثال مبني.' },
    situations: { title: 'ست حالات حقيقية، وما يفعله التطبيق', columns: ['ما يحدث', 'ما يفعله التطبيق'], rows: [
      { label: 'العرض نجح وخسرنا مالاً', cells: ['حجم مرتفع، وهامش يُكتشف في الحصيلة', 'محاكاة قبل الإطلاق؛ حارس هامش؛ حكم على ستة أسابيع'] },
      { label: 'رمز العرض نُشر على فيسبوك', cells: ['ثلاثة آلاف استعمال في يومين', 'رموز فريدة أو مسقوفة؛ شريحة؛ استعمال واحد لكل زبون؛ توقف آلي'] },
      { label: 'عرضان يتراكمان بالخطأ', cells: ['ناقص 10 وناقص 15 على السطر نفسه', 'ترتيب التراكم والحصريات مكتوبة؛ يلعبها المحرك لا أمين الصندوق'] },
      { label: 'الصندوق والموقع بسعرين مختلفين', cells: ['الزبون يُري الشاشة، وأمين الصندوق يتنازل', 'محرك واحد تستدعيه كل القنوات؛ التقييم نفسه في اللحظة نفسها'] },
      { label: 'المخزون نفد في اليوم الثالث', cells: ['الملصق ما زال في الواجهة والرف فارغ', 'ميزانية بالوحدات مرتبطة بالمخزون؛ عرض معلَّق عند العتبة؛ التموين منبَّه'] },
      { label: 'لا أحد يعرف إن أفاد العرض', cells: ['يُعاد نفسه السنة القادمة', 'شاهد، أسابيع تالية، تهام؛ لكل حملة رقمها'] },
    ], caption: 'الشكل 4 · الأسطر الثلاثة الأولى تُحل بالمحاكاة وحارس الهامش وقواعد التراكم المكتوبة؛ والثلاثة التالية بالمحرك الواحد والميزانية المرتبطة بالمخزون والقياس مقابل شاهد. ولا واحد يُحل بمسيّر يرفض العروض.', alt: 'مصفوفة ست حالات: عرض خاسر، رمز منشور، تراكم بالخطأ، أسعار مختلفة بالقناة، مخزون نافد، عرض غير مقيس؛ ما يحدث وما يفعله التطبيق.' },
    couches: { title: 'العروض الترويجية، في خمس طبقات', layers: [
      { label: 'الحملة', items: [{ name: 'شروط: منتج، عائلة، كمية، عتبة، فترة، قناة، شريحة؛ أثر: نسبة، مبلغ، X بثمن Y، حزمة؛ ميزانية؛ مرقَّمة بالإصدار', sub: 'الحملة قاعدة مكتوبة لا ملصق' }] },
      { label: 'المحرك', items: [{ name: 'تقييم كل الحملات مقابل السلة، ترتيب مكتوب، تراكم وحصريات، حارس هامش على آخر سعر شراء', sub: 'تستدعيه كل القنوات؛ السعر نفسه في اللحظة نفسها', accent: true }] },
      { label: 'الرموز', items: [{ name: 'عامة أو فريدة، استعمال واحد لكل زبون، سقوف استعمال، شريحة، توقف آلي عند السقف أو الميزانية', sub: 'الرمز المنشور يموت وحده' }] },
      { label: 'القنوات', items: [{ name: 'صندوق، موقع، بوابة B2B، طلبات واتساب، وكيل: كلها تستدعي المحرك؛ دون اتصال بحملات مزامَنة', sub: 'الصندوق يطبّق القاعدة نفسها بلا شبكة' }] },
      { label: 'القياس', items: [{ name: 'شاهد، أسابيع تالية، تهام، هامش مكسوب أو مفقود، ميزانية مستهلكة، سقوف؛ رقم لكل حملة', sub: 'الحملة التالية تنطلق من حكم' }] },
    ], caption: 'الشكل 5 · الطبقة المميزة هي المحرك: تقييم واحد بالترتيب المكتوب بحارس الهامش تستدعيه كل القنوات. والحملة فوقه قاعدة مرقَّمة بالإصدار؛ والرموز والقنوات والقياس تحته لا تفعل إلا تغذية هذا المحرك أو قراءته.', alt: 'خمس طبقات: الحملة، المحرك (مميزة)، الرموز، القنوات، القياس.' },
    calendrier: { title: 'وضع العروض الترويجية تحت القاعدة سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'القواعد', note: 'أنواع الحملات المقبولة، ترتيب التراكم، الحصريات، الحد الأدنى للهامش لكل عائلة، من ينشئ ومن يوافق، الشرائح؛ مع المسيّر', from: 0, to: 1 },
      { label: 'الحملات والمحرك', note: 'نموذج حملة مرقَّم بالإصدار، تقييم عند السلة، تراكم، حارس هامش، محاكاة على المبيعات السابقة', from: 1, to: 3, accent: true },
      { label: 'الرموز', note: 'عامة، فريدة، سقوف، استعمال واحد، شريحة، توقف آلي، مكافحة الإساءة', from: 3, to: 4 },
      { label: 'القنوات', note: 'صندوق دون اتصال، موقع، بوابة B2B، واتساب؛ مزامنة الحملات؛ سعر واحد في كل مكان', from: 4, to: 5 },
      { label: 'المتابعة', note: 'ميزانية مستهلكة، استعمالات، سقوف، مخزون مرتبط، تعليق عند العتبة', from: 5, to: 6 },
      { label: 'القياس', note: 'شاهد، أسابيع تالية، تهام، هامش، حكم لكل حملة، مراجعة الاثنين', from: 6, to: 7 },
    ], caption: 'الشكل 6 · سبعة أسابيع، الأول بلا كود: أنواع الحملات وترتيب التراكم والحد الأدنى للهامش ومن يوافق قرارات المسيّر. والأسبوعان المميزان هما الحملات والمحرك، لأن الرموز والقنوات والقياس مجرد مدخلات وقراءات لهذا المحرك.', alt: 'خط زمني من سبعة أسابيع: القواعد، الحملات والمحرك (مميز، أسبوعان)، الرموز، القنوات، المتابعة، القياس.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = PM[locale] || PM.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      panier: { svg: basket(e.basket, rtl), caption: t.panier.caption, alt: e.basket.alt },
      lancer: { svg: steps({ title: t.lancer.title, steps: t.lancer.items, arrows: true, rtl }), caption: t.lancer.caption, alt: t.lancer.alt },
      mesure: { svg: uplift(e.uplift, rtl), caption: t.mesure.caption, alt: e.uplift.alt },
      situations: { svg: matrix({ title: t.situations.title, columns: t.situations.columns, rows: t.situations.rows, rtl }), caption: t.situations.caption, alt: t.situations.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 7, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
