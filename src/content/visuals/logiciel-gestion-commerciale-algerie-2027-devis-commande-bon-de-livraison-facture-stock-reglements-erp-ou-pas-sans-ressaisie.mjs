import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { iles, chaine, STRINGS as SC } from './custom/gescom.mjs';
export const slug = 'logiciel-gestion-commerciale-algerie-2027-devis-commande-bon-de-livraison-facture-stock-reglements-erp-ou-pas-sans-ressaisie';
const T = {
  fr: {
    cover: { eyebrow: 'Logiciel de gestion commerciale · Algérie · 2027', title: ['Logiciel de gestion commerciale', 'en Algérie : une seule saisie'], subtitle: 'Devis, commande, livraison, facture, stock et règlements dans une même chaîne, au bureau et sur téléphone', left: { label: 'Trois outils séparés', sub: '128 ressaisies par jour' }, right: { label: 'Une seule chaîne', sub: 'le stock suit les documents' } },
    iles: { caption: 'Figure 1 · L’organisation de départ : les commandes arrivent sur un carnet, au téléphone ou par WhatsApp, sont retapées dans un logiciel installé sur un seul poste, où la facture est refaite d’après le bon de livraison, puis les bons sont recopiés dans le tableur du stock. Cent vingt-huit ressaisies par jour, trois heures douze, une cinquantaine d’erreurs par mois, et vingt-cinq appels de commerciaux qui ne voient ni le prix ni le stock. Volumes, durée par saisie et taux d’erreur sont un exemple construit.' },
    chaine: { caption: 'Figure 2 · Une vente de cent pompes en cinq documents nés les uns des autres. La commande réserve cent pièces : le stock disponible passe de 140 à 40. Le bon de livraison en sort quatre-vingts : le stock physique passe à 60, vingt restent en reliquat. La facture crée une créance de 2 560 000 dinars, que le règlement ramène à 1 060 000. Seul le devis a été saisi. Article, quantités, prix et numéros sont un exemple construit.' },
    couches: { title: 'Un logiciel de gestion commerciale, en cinq couches', layers: [
      { label: 'Référentiels', items: [{ name: 'Articles, clients, fournisseurs, prix et remises, dépôts, chacun créé une fois, avec un responsable', sub: 'un article en double, ce sont deux stocks faux' }] },
      { label: 'Documents', items: [{ name: 'Ventes : devis, commande, bon de livraison, facture, avoir. Achats : commande, réception, facture fournisseur', sub: 'chaque document naît du précédent, sans rien retaper', accent: true }] },
      { label: 'Stock', items: [{ name: 'Mouvements créés par les documents, réservations, plusieurs dépôts, transferts, inventaire tournant', sub: 'le stock est une conséquence, jamais une saisie' }] },
      { label: 'Règlements', items: [{ name: 'Encaissements rattachés aux factures, échéances, relevé par client, relances, plafond de crédit', sub: 'ce que chaque client doit se lit en une ligne' }] },
      { label: 'Pilotage', items: [{ name: 'Ventes, marges, ruptures et encours par agence et par commercial, au bureau et sur téléphone', sub: 'les chiffres du jour, sans attendre la fin du mois' }] },
    ], caption: 'Figure 3 · La couche accentuée est celle des documents : c’est la chaîne, et tout le reste en dépend. Les référentiels, au-dessus, lui donnent des articles et des clients uniques ; le stock, les règlements et le pilotage, en dessous, ne font que lire ce que les documents ont écrit.', alt: 'Cinq couches : référentiels ; documents (accentuée) ; stock ; règlements ; pilotage.' },
    comparatif: { title: 'Gestion commerciale ou ERP : six critères', columns: ['Logiciel de gestion commerciale', 'ERP'], rows: [
      { label: 'Ce qu’il couvre', cells: ['achats, ventes, stock, règlements', 'les mêmes, plus comptabilité, production, ressources humaines, projets'] },
      { label: 'À qui il convient', cells: ['négoce et distribution, une à quelques agences', 'entreprises à plusieurs métiers, ou qui produisent ce qu’elles vendent'] },
      { label: 'Mise en place', cells: ['en semaines, si les référentiels sont propres', 'en mois, module par module, avec un chef de projet côté entreprise'] },
      { label: 'Adaptation à vos règles', cells: ['réglages, quelques développements ciblés', 'paramétrage étendu, qui demande un intégrateur'] },
      { label: 'Le risque', cells: ['le garder trop longtemps, avec des tableurs autour', 'le prendre trop tôt, et n’en utiliser que la facturation'] },
      { label: 'Le signe qu’il faut changer', cells: ['la comptabilité ou la production retapent vos données', 'personne ne s’en sert, sauf pour imprimer des factures'] },
    ], caption: 'Figure 4 · Les deux familles ne répondent pas à la même entreprise. Un logiciel de gestion commerciale couvre la chaîne qui va de l’achat à l’encaissement ; un ERP y ajoute les autres services. Les deux dernières lignes disent quand on s’est trompé : dans un sens, d’autres services retapent vos données ; dans l’autre, on a dix modules et une seule facturation.', alt: 'Matrice de six critères comparant un logiciel de gestion commerciale et un ERP : périmètre, entreprises concernées, durée de mise en place, adaptation aux règles, risque, signe qu’il faut changer.' },
    questions: { title: 'Six questions avant de choisir', items: [
      { label: 'Une chaîne ?', sub: 'chaque document naît-il du précédent' },
      { label: 'Le stock ?', sub: 'est-il mis à jour par les documents', accent: true },
      { label: 'À distance ?', sub: 'agences, téléphone, hors connexion' },
      { label: 'Mes règles ?', sub: 'prix, remises, crédit, dépôts' },
      { label: 'Mes données ?', sub: 'puis-je tout exporter quand je veux' },
      { label: 'Dans trois ans ?', sub: 'qui le maintient, qui le fait évoluer' },
    ], caption: 'Figure 5 · La question accentuée est la deuxième : si le stock n’est pas mis à jour par les documents, il sera recopié, donc faux. Les six questions se posent devant le logiciel, avec vos propres documents d’une journée, pas devant une plaquette.', alt: 'Six questions : une chaîne, le stock (accentuée), à distance, mes règles, mes données, dans trois ans.' },
    calendrier: { title: 'Changer de logiciel de gestion commerciale, en semaines', unit: 'sem.', items: [
      { label: 'Relevé et règles', note: 'une journée de ressaisies comptée, documents réellement utilisés, règles de prix, de crédit et de stock, sans rien installer', from: 0, to: 1 },
      { label: 'Référentiels et reprise', note: 'articles, clients, fournisseurs et prix nettoyés, doublons fusionnés, stock compté, soldes des clients repris', from: 1, to: 3, accent: true },
      { label: 'Documents et stock', note: 'chaîne des ventes et des achats ouverte sur une agence, mouvements de stock, commerciaux sur téléphone', from: 3, to: 5 },
      { label: 'Bascule et suivi', note: 'toutes les agences, ancien logiciel en lecture seule, premier inventaire tournant, tableau du gérant', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six semaines dans l’exemple, la première sans rien installer. La période accentuée, deux semaines, est celle des référentiels : un logiciel neuf rempli d’articles en double et de soldes faux reproduit les mêmes erreurs, plus vite. Les durées dépendent surtout de l’état de ces données.', alt: 'Calendrier de six semaines : relevé et règles, référentiels et reprise (accentué, deux semaines), documents et stock (deux semaines), bascule et suivi.' },
  },
  en: {
    cover: { eyebrow: 'Sales and inventory software · Algeria · 2027', title: ['Sales management software', 'in Algeria: typed only once'], subtitle: 'Quotation, order, delivery, invoice, stock and payments in one chain, at the office and on the phone', left: { label: 'Three separate tools', sub: '128 retypings a day' }, right: { label: 'One single chain', sub: 'stock follows the documents' } },
    iles: { caption: 'Figure 1 · The starting organisation: orders arrive in a notebook, by phone or on WhatsApp, are retyped into software installed on a single workstation, where the invoice is redone from the delivery note, and then the notes are copied into the stock spreadsheet. A hundred and twenty-eight retypings a day, three hours twelve minutes, some fifty errors a month, and twenty-five calls from salespeople who see neither price nor stock. Volumes, time per entry and error rate are a constructed example.' },
    chaine: { caption: 'Figure 2 · A sale of a hundred pumps in five documents born from one another. The order reserves a hundred units: available stock goes from 140 to 40. The delivery note ships eighty: physical stock goes to 60, twenty stay on back order. The invoice creates a balance of 2,560,000 dinars, which the payment brings down to 1,060,000. Only the quotation was typed. Item, quantities, price and numbers are a constructed example.' },
    couches: { title: 'Sales management software, in five layers', layers: [
      { label: 'Master data', items: [{ name: 'Items, customers, suppliers, prices and discounts, warehouses, each created once, with an owner', sub: 'one duplicated item means two wrong stock figures' }] },
      { label: 'Documents', items: [{ name: 'Sales: quotation, order, delivery note, invoice, credit note. Purchasing: order, receipt, supplier invoice', sub: 'each document is born from the previous one, nothing retyped', accent: true }] },
      { label: 'Stock', items: [{ name: 'Movements created by the documents, reservations, several warehouses, transfers, cycle counting', sub: 'stock is a consequence, never an entry' }] },
      { label: 'Payments', items: [{ name: 'Receipts attached to invoices, due dates, statement per customer, reminders, credit limit', sub: 'what each customer owes is read in one line' }] },
      { label: 'Steering', items: [{ name: 'Sales, margins, stock-outs and balances by branch and by salesperson, at the office and on the phone', sub: 'today’s figures, without waiting for month end' }] },
    ], caption: 'Figure 3 · The accented layer is documents: that is the chain, and everything else depends on it. Master data, above, gives it unique items and customers; stock, payments and steering, below, only read what the documents have written.', alt: 'Five layers: master data; documents (accented); stock; payments; steering.' },
    comparatif: { title: 'Sales management software or ERP: six criteria', columns: ['Sales management software', 'ERP'], rows: [
      { label: 'What it covers', cells: ['purchasing, sales, stock, payments', 'the same, plus accounting, production, human resources, projects'] },
      { label: 'Who it suits', cells: ['trading and distribution, one to a few branches', 'companies with several lines of work, or that make what they sell'] },
      { label: 'Set-up', cells: ['in weeks, if master data is clean', 'in months, module by module, with a project lead on the company side'] },
      { label: 'Fit to your rules', cells: ['settings, a few targeted developments', 'extensive configuration, which needs an integrator'] },
      { label: 'The risk', cells: ['keeping it too long, with spreadsheets around it', 'taking it too early, and using only the invoicing'] },
      { label: 'The sign it is time to change', cells: ['accounting or production retype your data', 'nobody uses it, except to print invoices'] },
    ], caption: 'Figure 4 · The two families do not answer the same company. Sales management software covers the chain from purchase to cash; an ERP adds the other departments. The last two rows say when the choice was wrong: one way, other departments retype your data; the other, there are ten modules and one invoicing screen in use.', alt: 'Matrix of six criteria comparing sales management software and an ERP: scope, companies it suits, set-up time, fit to rules, risk, sign it is time to change.' },
    questions: { title: 'Six questions before choosing', items: [
      { label: 'One chain?', sub: 'is each document born from the previous one' },
      { label: 'Stock?', sub: 'is it updated by the documents', accent: true },
      { label: 'Remotely?', sub: 'branches, phone, offline' },
      { label: 'My rules?', sub: 'prices, discounts, credit, warehouses' },
      { label: 'My data?', sub: 'can I export everything whenever I want' },
      { label: 'In three years?', sub: 'who maintains it, who develops it' },
    ], caption: 'Figure 5 · The accented question is the second: if stock is not updated by the documents, it will be copied, and therefore wrong. The six questions are asked in front of the software, with one day of your own documents, not in front of a brochure.', alt: 'Six questions: one chain, stock (accented), remotely, my rules, my data, in three years.' },
    calendrier: { title: 'Changing sales management software, in weeks', unit: 'wk', items: [
      { label: 'Survey and rules', note: 'one day of retypings counted, the documents really used, price, credit and stock rules, nothing installed yet', from: 0, to: 1 },
      { label: 'Master data and migration', note: 'items, customers, suppliers and prices cleaned, duplicates merged, stock counted, customer balances carried over', from: 1, to: 3, accent: true },
      { label: 'Documents and stock', note: 'sales and purchasing chain opened in one branch, stock movements, salespeople on their phones', from: 3, to: 5 },
      { label: 'Switch-over and follow-up', note: 'all branches, old software read-only, first cycle count, manager’s board', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six weeks in the example, the first with nothing installed. The accented period, two weeks, is master data: new software filled with duplicated items and wrong balances reproduces the same errors, faster. Durations depend mostly on the state of that data.', alt: 'Six-week calendar: survey and rules, master data and migration (accented, two weeks), documents and stock (two weeks), switch-over and follow-up.' },
  },
  ar: {
    cover: { eyebrow: 'برنامج التسيير التجاري · الجزائر · 2027', title: ['برنامج التسيير التجاري', 'في الجزائر: إدخال واحد'], subtitle: 'عرض السعر، الطلبية، التسليم، الفاتورة، المخزون والتسديدات في سلسلة واحدة، في المكتب وعلى الهاتف', left: { label: 'ثلاث أدوات منفصلة', sub: '128 إعادة إدخال في اليوم' }, right: { label: 'سلسلة واحدة', sub: 'المخزون يتبع الوثائق' } },
    iles: { caption: 'الشكل 1 · التنظيم عند البداية: الطلبيات تصل في دفتر أو بالهاتف أو عبر واتساب، ثم يُعاد إدخالها في برنامج منصَّب على حاسوب واحد، حيث تُعاد الفاتورة انطلاقاً من وصل التسليم، ثم تُنسخ الوصولات في جدول المخزون. مئة وثمان وعشرون إعادة إدخال في اليوم، ثلاث ساعات واثنتا عشرة دقيقة، نحو خمسين خطأ في الشهر، وخمس وعشرون مكالمة من بائعين لا يرون السعر ولا المخزون. الأحجام ومدة الإدخال ونسبة الخطأ مثال مركَّب.' },
    chaine: { caption: 'الشكل 2 · بيعة من مئة مضخة في خمس وثائق يولد بعضها من بعض. الطلبية تحجز مئة قطعة: المخزون المتاح ينتقل من 140 إلى 40. وصل التسليم يُخرج ثمانين: المخزون الفعلي يصير 60، وعشرون تبقى للتسليم. الفاتورة تُنشئ ديناً بـ 2 560 000 دينار، ينزل به التسديد إلى 1 060 000. ولم يُدخَل إلا عرض السعر. السلعة والكميات والسعر والأرقام مثال مركَّب.' },
    couches: { title: 'برنامج التسيير التجاري، في خمس طبقات', layers: [
      { label: 'البيانات المرجعية', items: [{ name: 'السلع، الزبائن، المورِّدون، الأسعار والتخفيضات، المستودعات، كل واحد يُنشأ مرة واحدة وله مسؤول', sub: 'سلعة مكرَّرة تعني مخزونين خاطئين' }] },
      { label: 'الوثائق', items: [{ name: 'البيع: عرض سعر، طلبية، وصل تسليم، فاتورة، فاتورة إرجاع. الشراء: طلبية، استلام، فاتورة المورِّد', sub: 'كل وثيقة تولد من سابقتها، دون إعادة إدخال شيء', accent: true }] },
      { label: 'المخزون', items: [{ name: 'حركات تُنشئها الوثائق، حجوزات، عدة مستودعات، تحويلات بينها، وجرد دوري', sub: 'المخزون نتيجة، لا إدخال' }] },
      { label: 'التسديدات', items: [{ name: 'تحصيلات مربوطة بالفواتير، آجال، كشف لكل زبون، متابعات، وسقف للدين', sub: 'ما على كل زبون يُقرأ في سطر' }] },
      { label: 'القيادة', items: [{ name: 'المبيعات، الهوامش، النفاد والمستحقات حسب الوكالة والبائع، في المكتب وعلى الهاتف', sub: 'أرقام اليوم، دون انتظار آخر الشهر' }] },
    ], caption: 'الشكل 3 · الطبقة المبرزة هي الوثائق: هي السلسلة، وكل الباقي يتوقف عليها. البيانات المرجعية، فوقها، تعطيها سلعاً وزبائن غير مكرَّرين؛ والمخزون والتسديدات والقيادة، تحتها، تقرأ فقط ما كتبته الوثائق.', alt: 'خمس طبقات: البيانات المرجعية؛ الوثائق (مبرزة)؛ المخزون؛ التسديدات؛ القيادة.' },
    comparatif: { title: 'برنامج التسيير التجاري أم برنامج متكامل: ستة معايير', columns: ['برنامج التسيير التجاري', 'البرنامج المتكامل (ERP)'], rows: [
      { label: 'ما يغطيه', cells: ['الشراء، البيع، المخزون، التسديدات', 'الشيء نفسه، مع المحاسبة والإنتاج والموارد البشرية والمشاريع'] },
      { label: 'لمن يصلح', cells: ['التجارة والتوزيع، من وكالة إلى بضع وكالات', 'مؤسسات بعدة أنشطة، أو تصنع ما تبيعه'] },
      { label: 'الوضع في الخدمة', cells: ['بالأسابيع، إذا كانت البيانات المرجعية نظيفة', 'بالأشهر، وحدة بعد وحدة، مع مسؤول مشروع من المؤسسة'] },
      { label: 'التكيّف مع قواعدكم', cells: ['إعدادات، وبعض التطويرات المحدَّدة', 'ضبط واسع، يحتاج إلى مكامِل'] },
      { label: 'الخطر', cells: ['الاحتفاظ به طويلاً، والجداول تحيط به', 'أخذه مبكراً، واستعمال الفوترة منه فقط'] },
      { label: 'علامة أن التغيير لازم', cells: ['المحاسبة أو الإنتاج يعيدان إدخال بياناتكم', 'لا أحد يستعمله، إلا لطبع الفواتير'] },
    ], caption: 'الشكل 4 · العائلتان لا تجيبان عن المؤسسة نفسها. برنامج التسيير التجاري يغطي السلسلة من الشراء إلى التحصيل؛ والبرنامج المتكامل يضيف المصالح الأخرى. والسطران الأخيران يقولان متى كان الاختيار خاطئاً: من جهة، مصالح أخرى تعيد إدخال بياناتكم؛ ومن الجهة الأخرى، عشر وحدات وفوترة واحدة مستعملة.', alt: 'مصفوفة ستة معايير تقارن برنامج التسيير التجاري والبرنامج المتكامل: المجال، المؤسسات المعنية، مدة الوضع في الخدمة، التكيّف مع القواعد، الخطر، وعلامة أن التغيير لازم.' },
    questions: { title: 'ستة أسئلة قبل الاختيار', items: [
      { label: 'سلسلة واحدة؟', sub: 'هل تولد كل وثيقة من سابقتها' },
      { label: 'المخزون؟', sub: 'هل تحدّثه الوثائق', accent: true },
      { label: 'عن بعد؟', sub: 'الوكالات، الهاتف، دون اتصال' },
      { label: 'قواعدي؟', sub: 'الأسعار، التخفيضات، الدين، المستودعات' },
      { label: 'بياناتي؟', sub: 'هل أصدّر كل شيء متى شئت' },
      { label: 'بعد ثلاث سنوات؟', sub: 'من يصونه، ومن يطوّره' },
    ], caption: 'الشكل 5 · السؤال المبرز هو الثاني: إذا لم تكن الوثائق هي التي تحدّث المخزون، فسيُنسخ، إذن سيكون خاطئاً. والأسئلة الستة تُطرح أمام البرنامج، بوثائق يوم من أيامكم، لا أمام مطوية.', alt: 'ستة أسئلة: سلسلة واحدة، المخزون (مبرز)، عن بعد، قواعدي، بياناتي، بعد ثلاث سنوات.' },
    calendrier: { title: 'تغيير برنامج التسيير التجاري، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'المعاينة والقواعد', note: 'عدّ إعادات الإدخال في يوم، الوثائق المستعملة فعلاً، قواعد الأسعار والدين والمخزون، دون تنصيب شيء', from: 0, to: 1 },
      { label: 'البيانات المرجعية والاسترجاع', note: 'تنظيف السلع والزبائن والمورِّدين والأسعار، دمج المكرَّر، عدّ المخزون، واسترجاع أرصدة الزبائن', from: 1, to: 3, accent: true },
      { label: 'الوثائق والمخزون', note: 'فتح سلسلة البيع والشراء في وكالة واحدة، حركات المخزون، والبائعون على الهاتف', from: 3, to: 5 },
      { label: 'الانتقال والمتابعة', note: 'كل الوكالات، البرنامج القديم للقراءة فقط، أول جرد دوري، ولوحة المسيّر', from: 5, to: 6 },
    ], caption: 'الشكل 6 · ستة أسابيع في المثال، الأول دون تنصيب شيء. الفترة المبرزة، أسبوعان، هي البيانات المرجعية: برنامج جديد مملوء بسلع مكرَّرة وأرصدة خاطئة يعيد الأخطاء نفسها، بسرعة أكبر. والمدد تتوقف خاصة على حالة هذه البيانات.', alt: 'تقويم ستة أسابيع: المعاينة والقواعد، البيانات المرجعية والاسترجاع (مبرز، أسبوعان)، الوثائق والمخزون (أسبوعان)، الانتقال والمتابعة.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      iles: { svg: iles(e.iles, rtl), caption: t.iles.caption, alt: e.iles.alt },
      chaine: { svg: chaine(e.chaine, rtl), caption: t.chaine.caption, alt: e.chaine.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      comparatif: { svg: matrix({ title: t.comparatif.title, columns: t.comparatif.columns, rows: t.comparatif.rows, rtl }), caption: t.comparatif.caption, alt: t.comparatif.alt },
      questions: { svg: steps({ title: t.questions.title, steps: t.questions.items, arrows: true, rtl }), caption: t.questions.caption, alt: t.questions.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 6, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
