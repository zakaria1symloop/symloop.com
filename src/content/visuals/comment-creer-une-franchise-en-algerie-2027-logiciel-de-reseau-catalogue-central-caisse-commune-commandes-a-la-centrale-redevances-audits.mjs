import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { redevance, couloir, STRINGS as SC } from './custom/franchise.mjs';
export const slug = 'comment-creer-une-franchise-en-algerie-2027-logiciel-de-reseau-catalogue-central-caisse-commune-commandes-a-la-centrale-redevances-audits';
const T = {
  fr: {
    cover: { eyebrow: 'Franchise · Algérie · 2027', title: ['Créer une franchise :', 'ce que le réseau doit avoir construit'], subtitle: 'Catalogue central, caisse commune, commandes à la centrale, redevances, audits, comparaison des points', left: { label: 'Sur la déclaration', sub: '2 630 000 DA' }, right: { label: 'Sur la caisse commune', sub: '2 827 500 DA' } },
    couches: { title: 'Ce qu’il y a dans la plateforme d’un réseau, en cinq couches', layers: [
      { label: 'Catalogue', items: [{ name: 'Le catalogue central : articles, recettes, prix par zone, promotions, poussés à tous les points le même jour', sub: 'ce qui fait que c’est la même enseigne', accent: true }] },
      { label: 'Caisse', items: [{ name: 'La caisse commune : le même logiciel dans chaque point, chaque ticket remonté, même sans connexion', sub: 'les ventes vues par le réseau' }] },
      { label: 'Centrale', items: [{ name: 'Les commandes à la centrale : le point commande, la centrale prépare, livre et facture, stock par point', sub: 'les mêmes produits partout' }] },
      { label: 'Redevances', items: [{ name: 'Les redevances : calculées sur les ventes de la caisse, facturées chaque mois, avec le fonds de communication', sub: 'ce que chaque point doit au réseau' }] },
      { label: 'Réseau', items: [{ name: 'Le réseau : grilles d’audit avec photos, comparaison des points, couloirs, alertes, formation des équipes', sub: 'ce qui se passe dans chaque point' }] },
    ], caption: 'Figure 1 · Cinq couches. La couche accentuée est le catalogue central : c’est lui qui fait que deux points sous la même enseigne vendent la même chose au même prix.', alt: 'Cinq couches : le catalogue central (accentué) ; la caisse commune ; les commandes à la centrale ; les redevances ; le réseau.' },
    etapes: { title: 'Franchiser un concept, en six temps', items: [
      { label: 'Concept prouvé', sub: 'un point rentable, des chiffres connus' },
      { label: 'Concept écrit', sub: 'catalogue, recettes, procédures, grille d’audit' },
      { label: 'Outil commun', sub: 'caisse, commandes, tableau du réseau', accent: true },
      { label: 'Point pilote', sub: 'un premier franchisé, suivi de près' },
      { label: 'Ouverture', sub: 'formation, stock initial, liste à cocher' },
      { label: 'Suivi', sub: 'redevances, audits, comparaison' },
    ], caption: 'Figure 2 · Six temps. Le temps accentué est l’outil commun : il se construit dans vos propres points, avant le premier franchisé, pas après.', alt: 'Six temps : concept prouvé, concept écrit, outil commun (accentué), point pilote, ouverture, suivi.' },
    redevance: { caption: 'Figure 3 · Douze mois d’un point franchisé : 56 550 000 dinars lus sur la caisse, 52 600 000 déclarés, soit 7,0 % d’écart. Ventes et taux fictifs.' },
    couloir: { caption: 'Figure 4 · Huit points, quatre chiffres : 28 valeurs sur 32 sont dans le couloir fixé par le réseau, et quatre en sortent. Chiffres fictifs.' },
    calendrier: { title: 'Dix semaines avant le premier franchisé', unit: 'sem.', items: [
      { label: 'Cadrage', note: 'ce qui est commun à tous les points, ce qui reste local, les chiffres à suivre', from: 0, to: 1, accent: true },
      { label: 'Catalogue central et prix', note: 'articles, recettes, prix par zone, promotions, droits de modification', from: 1, to: 4 },
      { label: 'Caisse commune', note: 'installée d’abord dans vos propres points, hors connexion, remontée des tickets', from: 3, to: 6 },
      { label: 'Commandes à la centrale', note: 'catalogue d’approvisionnement, préparation, livraison, facture', from: 5, to: 8 },
      { label: 'Redevances et tableau du réseau', note: 'calcul mensuel, facture, quatre chiffres par point, couloirs', from: 6, to: 9 },
      { label: 'Audits et point pilote', note: 'grille avec photos, ouverture du premier franchisé, corrections', from: 8, to: 10 },
    ], caption: 'Figure 5 · Dix semaines dans l’exemple. La période accentuée est la première ; la caisse commune s’installe d’abord dans vos propres points. Durées indicatives d’un exemple construit.', alt: 'Calendrier de dix semaines : cadrage (accentué), catalogue central et prix, caisse commune, commandes à la centrale, redevances et tableau du réseau, audits et point pilote.' },
    roles: { title: 'Qui voit quoi, et qui modifie quoi', columns: ['Ce qui est visible', 'Ce qui est modifiable'], rows: [
      { label: 'La direction du réseau', cells: ['tous les points, toutes les ventes, les redevances', 'le catalogue, les prix, les couloirs, les droits'] },
      { label: 'L’animation du réseau', cells: ['ses points, leurs chiffres, leurs audits', 'les grilles d’audit, les plans d’action'] },
      { label: 'La personne franchisée', cells: ['ses points, ses ventes, ses factures de redevance', 'ses commandes, son équipe, les prix locaux permis'] },
      { label: 'La gérance d’un point', cells: ['la caisse, le stock et le planning de son point', 'les commandes du jour, les inventaires'] },
      { label: 'La centrale', cells: ['les commandes de tous les points, son stock', 'la préparation, les livraisons, les factures'] },
    ], caption: 'Figure 6 · Cinq rôles. Chaque personne voit ses points et modifie ce qui relève d’elle ; le catalogue et les prix communs ne se modifient qu’à la tête du réseau.', alt: 'Matrice de cinq rôles : la direction du réseau, l’animation du réseau, la personne franchisée, la gérance d’un point, la centrale ; pour chacun, ce qui est visible et ce qui est modifiable.' },
  },
  en: {
    cover: { eyebrow: 'Franchise · Algeria · 2027', title: ['Creating a franchise:', 'what the network must have built'], subtitle: 'Central catalogue, common till, orders to the central unit, royalties, audits, comparison of outlets', left: { label: 'On the declaration', sub: 'DA 2,630,000' }, right: { label: 'On the common till', sub: 'DA 2,827,500' } },
    couches: { title: 'What is inside a network’s platform, in five layers', layers: [
      { label: 'Catalogue', items: [{ name: 'The central catalogue: items, recipes, prices per zone, promotions, pushed to every outlet the same day', sub: 'what makes it the same brand', accent: true }] },
      { label: 'Till', items: [{ name: 'The common till: the same software in each outlet, every ticket sent up, even without a connection', sub: 'sales as the network sees them' }] },
      { label: 'Central unit', items: [{ name: 'Orders to the central unit: the outlet orders, the central unit prepares, delivers and invoices, stock per outlet', sub: 'the same products everywhere' }] },
      { label: 'Royalties', items: [{ name: 'Royalties: calculated on the till’s sales, invoiced every month, with the marketing fund', sub: 'what each outlet owes the network' }] },
      { label: 'Network', items: [{ name: 'The network: audit checklists with photos, comparison of outlets, corridors, alerts, team training', sub: 'what happens in each outlet' }] },
    ], caption: 'Figure 1 · Five layers. The accented layer is the central catalogue: it is what makes two outlets under the same brand sell the same thing at the same price.', alt: 'Five layers: the central catalogue (accented); the common till; orders to the central unit; royalties; the network.' },
    etapes: { title: 'Franchising a concept, in six steps', items: [
      { label: 'Proven concept', sub: 'a profitable outlet, known figures' },
      { label: 'Written concept', sub: 'catalogue, recipes, procedures, audit checklist' },
      { label: 'Common tool', sub: 'till, orders, network dashboard', accent: true },
      { label: 'Pilot outlet', sub: 'a first franchisee, followed closely' },
      { label: 'Opening', sub: 'training, opening stock, checklist' },
      { label: 'Follow-up', sub: 'royalties, audits, comparison' },
    ], caption: 'Figure 2 · Six steps. The accented step is the common tool: it is built in your own outlets, before the first franchisee, not after.', alt: 'Six steps: proven concept, written concept, common tool (accented), pilot outlet, opening, follow-up.' },
    redevance: { caption: 'Figure 3 · Twelve months of a franchised outlet: 56,550,000 dinars read on the till, 52,600,000 declared, a gap of 7.0%. Fictitious sales and rates.' },
    couloir: { caption: 'Figure 4 · Eight outlets, four figures: 28 values of 32 are inside the corridor set by the network, and four leave it. Fictitious figures.' },
    calendrier: { title: 'Ten weeks before the first franchisee', unit: 'wk', items: [
      { label: 'Scoping', note: 'what is common to every outlet, what stays local, the figures to follow', from: 0, to: 1, accent: true },
      { label: 'Central catalogue and prices', note: 'items, recipes, prices per zone, promotions, rights to modify', from: 1, to: 4 },
      { label: 'Common till', note: 'installed first in your own outlets, offline, tickets sent up', from: 3, to: 6 },
      { label: 'Orders to the central unit', note: 'supply catalogue, preparation, delivery, invoice', from: 5, to: 8 },
      { label: 'Royalties and network dashboard', note: 'monthly calculation, invoice, four figures per outlet, corridors', from: 6, to: 9 },
      { label: 'Audits and pilot outlet', note: 'checklist with photos, opening of the first franchisee, corrections', from: 8, to: 10 },
    ], caption: 'Figure 5 · Ten weeks in the example. The accented period is the first; the common till is installed first in your own outlets. Indicative durations of a constructed example.', alt: 'Ten-week calendar: scoping (accented), central catalogue and prices, common till, orders to the central unit, royalties and network dashboard, audits and pilot outlet.' },
    roles: { title: 'Who sees what, and who changes what', columns: ['What is visible', 'What can be changed'], rows: [
      { label: 'Network management', cells: ['every outlet, every sale, the royalties', 'the catalogue, prices, corridors, rights'] },
      { label: 'Network field team', cells: ['their outlets, their figures, their audits', 'audit checklists, action plans'] },
      { label: 'The franchisee', cells: ['their outlets, their sales, their royalty invoices', 'their orders, their team, the local prices allowed'] },
      { label: 'An outlet’s manager', cells: ['the till, stock and schedule of their outlet', 'the day’s orders, stock counts'] },
      { label: 'The central unit', cells: ['the orders of every outlet, its own stock', 'preparation, deliveries, invoices'] },
    ], caption: 'Figure 6 · Five roles. Each person sees their outlets and changes what is theirs; the common catalogue and prices are changed only at the head of the network.', alt: 'Matrix of five roles: network management, network field team, the franchisee, an outlet’s manager, the central unit; for each, what is visible and what can be changed.' },
  },
  ar: {
    cover: { eyebrow: 'الامتياز التجاري · الجزائر · 2027', title: ['إنشاء امتياز تجاري:', 'ما يجب أن تكون الشبكة قد بنته'], subtitle: 'كتالوغ مركزي، صندوق موحَّد، طلبيات إلى المركزية، إتاوات، تدقيق، ومقارنة النقاط', left: { label: 'على التصريح', sub: '⁦2 630 000⁩ دج' }, right: { label: 'على الصندوق الموحَّد', sub: '⁦2 827 500⁩ دج' } },
    couches: { title: 'ما يوجد في منصة الشبكة، في خمس طبقات', layers: [
      { label: 'الكتالوغ', items: [{ name: 'الكتالوغ المركزي: الأصناف، الوصفات، الأسعار حسب المنطقة، والعروض، تُدفَع إلى كل النقاط في اليوم نفسه', sub: 'ما يجعلها العلامة نفسها', accent: true }] },
      { label: 'الصندوق', items: [{ name: 'الصندوق الموحَّد: البرنامج نفسه في كل نقطة، وكل تذكرة تُرفَع، حتى دون اتصال', sub: 'المبيعات كما تراها الشبكة' }] },
      { label: 'المركزية', items: [{ name: 'الطلبيات إلى المركزية: النقطة تطلب، والمركزية تحضّر، تسلّم، وتفوتر، مع مخزون لكل نقطة', sub: 'المنتجات نفسها في كل مكان' }] },
      { label: 'الإتاوات', items: [{ name: 'الإتاوات: تُحسب على مبيعات الصندوق، تُفوتَر كل شهر، مع صندوق الإشهار', sub: 'ما تدين به كل نقطة للشبكة' }] },
      { label: 'الشبكة', items: [{ name: 'الشبكة: شبكات تدقيق بالصور، مقارنة النقاط، المجالات، التنبيهات، وتكوين الفرق', sub: 'ما يجري في كل نقطة' }] },
    ], caption: 'الشكل 1 · خمس طبقات. الطبقة المبرزة هي الكتالوغ المركزي: هو الذي يجعل نقطتين تحت العلامة نفسها تبيعان الشيء نفسه بالسعر نفسه.', alt: 'خمس طبقات: الكتالوغ المركزي (مبرز)؛ الصندوق الموحَّد؛ الطلبيات إلى المركزية؛ الإتاوات؛ والشبكة.' },
    etapes: { title: 'منح امتياز لمفهوم، في ست مراحل', items: [
      { label: 'مفهوم مُثبَت', sub: 'نقطة رابحة، وأرقام معروفة' },
      { label: 'مفهوم مكتوب', sub: 'كتالوغ، وصفات، إجراءات، وشبكة تدقيق' },
      { label: 'أداة مشتركة', sub: 'صندوق، طلبيات، ولوحة الشبكة', accent: true },
      { label: 'نقطة تجريبية', sub: 'أول صاحب امتياز، متابَع عن قرب' },
      { label: 'الافتتاح', sub: 'تكوين، مخزون أولي، وقائمة تأشير' },
      { label: 'المتابعة', sub: 'إتاوات، تدقيق، ومقارنة' },
    ], caption: 'الشكل 2 · ست مراحل. المرحلة المبرزة هي الأداة المشتركة: تُبنى في نقاطكم الخاصة، قبل أول صاحب امتياز، لا بعده.', alt: 'ست مراحل: مفهوم مُثبَت، مفهوم مكتوب، أداة مشتركة (مبرزة)، نقطة تجريبية، الافتتاح، والمتابعة.' },
    redevance: { caption: 'الشكل 3 · اثنا عشر شهراً لنقطة بامتياز: 56,55 مليون دينار مقروءة على الصندوق، و52,6 مليوناً مصرَّح بها، أي فارق 7,0 بالمئة. مبيعات ونسب خيالية.' },
    couloir: { caption: 'الشكل 4 · ثماني نقاط، أربعة أرقام: 28 قيمة من 32 داخل المجال الذي حدّدته الشبكة، وأربع تخرج منه. أرقام خيالية.' },
    calendrier: { title: 'عشرة أسابيع قبل أول صاحب امتياز', unit: 'أسبوع', items: [
      { label: 'التأطير', note: 'ما هو مشترك بين كل النقاط، ما يبقى محلياً، والأرقام التي تُتابَع', from: 0, to: 1, accent: true },
      { label: 'الكتالوغ المركزي والأسعار', note: 'الأصناف، الوصفات، الأسعار حسب المنطقة، العروض، وصلاحيات التعديل', from: 1, to: 4 },
      { label: 'الصندوق الموحَّد', note: 'يُثبَّت أولاً في نقاطكم الخاصة، دون اتصال، مع رفع التذاكر', from: 3, to: 6 },
      { label: 'الطلبيات إلى المركزية', note: 'كتالوغ التموين، التحضير، التسليم، والفاتورة', from: 5, to: 8 },
      { label: 'الإتاوات ولوحة الشبكة', note: 'حساب شهري، فاتورة، أربعة أرقام لكل نقطة، ومجالات', from: 6, to: 9 },
      { label: 'التدقيق والنقطة التجريبية', note: 'شبكة بالصور، افتتاح أول صاحب امتياز، وتصحيحات', from: 8, to: 10 },
    ], caption: 'الشكل 5 · عشرة أسابيع في المثال. الفترة المبرزة هي الأولى؛ والصندوق الموحَّد يُثبَّت أولاً في نقاطكم الخاصة. مدد تقريبية لمثال مركَّب.', alt: 'رزنامة من عشرة أسابيع: التأطير (مبرز)، الكتالوغ المركزي والأسعار، الصندوق الموحَّد، الطلبيات إلى المركزية، الإتاوات ولوحة الشبكة، ثم التدقيق والنقطة التجريبية.' },
    roles: { title: 'من يرى ماذا، ومن يعدّل ماذا', columns: ['ما يُرى', 'ما يُعدَّل'], rows: [
      { label: 'إدارة الشبكة', cells: ['كل النقاط، كل المبيعات، والإتاوات', 'الكتالوغ، الأسعار، المجالات، والصلاحيات'] },
      { label: 'تنشيط الشبكة', cells: ['نقاطه، أرقامها، وتدقيقاتها', 'شبكات التدقيق، وخطط العمل'] },
      { label: 'صاحب الامتياز', cells: ['نقاطه، مبيعاته، وفواتير إتاوته', 'طلبياته، فريقه، والأسعار المحلية المسموحة'] },
      { label: 'تسيير نقطة البيع', cells: ['صندوق نقطته، مخزونها، وبرنامج عملها', 'طلبيات اليوم، والجرد'] },
      { label: 'المركزية', cells: ['طلبيات كل النقاط، ومخزونها الخاص', 'التحضير، التسليمات، والفواتير'] },
    ], caption: 'الشكل 6 · خمسة أدوار. كل شخص يرى نقاطه ويعدّل ما يخصه؛ والكتالوغ والأسعار المشتركة لا تُعدَّل إلا في رأس الشبكة.', alt: 'مصفوفة من خمسة أدوار: إدارة الشبكة، تنشيط الشبكة، صاحب الامتياز، تسيير نقطة البيع، والمركزية؛ ولكل دور، ما يُرى وما يُعدَّل.' },
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
      etapes: { svg: steps({ title: t.etapes.title, steps: t.etapes.items, arrows: true, rtl }), caption: t.etapes.caption, alt: t.etapes.alt },
      redevance: { svg: redevance(e.redevance, rtl), caption: t.redevance.caption, alt: e.redevance.alt },
      couloir: { svg: couloir(e.couloir, rtl), caption: t.couloir.caption, alt: e.couloir.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 10, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
      roles: { svg: matrix({ title: t.roles.title, columns: t.roles.columns, rows: t.roles.rows, rtl }), caption: t.roles.caption, alt: t.roles.alt },
    },
  };
}
