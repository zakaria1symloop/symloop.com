import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { entonnoir, pipeline, STRINGS as SC } from './custom/crm.mjs';
export const slug = 'logiciel-crm-algerie-2027-portefeuille-clients-pipeline-relances-devis-prevision-commerciaux';
const T = {
  fr: {
    cover: { eyebrow: 'Logiciel CRM · Algérie · 2027', title: ['Logiciel CRM en Algérie', 'portefeuille, pipeline, relances'], subtitle: 'Fichier unique, affaires avec prochaine action datée, relances de devis, prévision pondérée, motifs de perte', left: { label: 'Clients dans les téléphones', sub: 'un commercial part avec son portefeuille' }, right: { label: 'Un portefeuille à l’entreprise', sub: 'chaque affaire a sa prochaine action' } },
    situations: { title: 'Six situations réelles, et ce que le CRM doit faire', columns: ['Ce qui se passe', 'Ce que le CRM doit faire'], rows: [
      { label: 'Les clients sont dans le téléphone des commerciaux', cells: ['Chacun a son carnet et son fichier', 'un fichier unique à l’entreprise, alimenté depuis le téléphone, sans doublons'] },
      { label: 'Un commercial part avec son portefeuille', cells: ['Personne d’autre ne connaît ses clients', 'historique rattaché au client, affaires réattribuées en une minute'] },
      { label: 'Personne ne sait où en sont les devis', cells: ['Envoyés par e-mail, jamais suivis', 'chaque devis lié à une affaire, relancé aux délais écrits, statut visible'] },
      { label: 'On rappelle trop tard, ou deux fois', cells: ['Personne ne sait qui devait rappeler', 'une prochaine action datée par affaire, un seul responsable, rappel le jour dit'] },
      { label: 'Je ne sais pas ce qui va rentrer', cells: ['Le gérant demande à chacun en fin de mois', 'pipeline par étape et prévision pondérée, mis à jour par le travail lui-même'] },
      { label: 'On ne sait pas pourquoi on perd', cells: ['Les affaires perdues disparaissent', 'motif de perte obligatoire, lu chaque mois, silence, prix, délai, concurrent'] },
    ], caption: 'Figure 1 · Les trois premières lignes se règlent par un fichier qui appartient à l’entreprise, un historique rattaché au client et des devis liés à une affaire ; les trois suivantes par une prochaine action datée, une prévision pondérée et un motif de perte obligatoire. Aucune ne se règle par un commercial de plus.', alt: 'Matrice de six situations : clients dans les téléphones, commercial qui part avec son portefeuille, devis non suivis, rappels trop tard ou en double, prévision inconnue, pertes sans motif ; ce qui se passe et ce que le CRM doit faire.' },
    entonnoir: { caption: 'Figure 2 · Cent demandes reçues en un mois : quarante-six qualifiées, vingt-huit devis envoyés, douze affaires gagnées. Sur les quatre-vingt-huit autres, trente-sept ont reçu un non ou un pas maintenant, hors cible, reportées, prix, délai. Les cinquante et une restantes n’ont été refusées par personne : trente et une jamais rappelées à temps, onze laissées sans suite, neuf devis jamais relancés. Nombres et motifs sont un exemple construit ; les vôtres apparaissent quand chaque affaire fermée porte son motif.' },
    pipeline: { caption: 'Figure 3 · Le tableau des affaires ouvertes : trente-six qualifiées, trente et un devis envoyés, dix-huit négociations, pour 35,88 millions de dinars. Chaque colonne est pondérée par la part des affaires qui, à cette étape, finissent gagnées, vingt-cinq, quarante et soixante-dix pour cent dans l’exemple : la prévision est de 15,05 millions. Trois cartes sont en retard, une sans prochaine action et deux relances dépassées. Clients, montants et probabilités sont un exemple construit.' },
    couches: { title: 'Un CRM, en cinq couches', layers: [
      { label: 'Fichier unique', items: [{ name: 'Entreprises, contacts, téléphone comme clé, source de la demande, commercial responsable, sans doublons', sub: 'le portefeuille appartient à l’entreprise, pas au téléphone de chacun' }] },
      { label: 'Affaires', items: [{ name: 'Chaque demande devient une affaire avec une étape, un montant et une prochaine action datée', sub: 'une affaire sans prochaine action est une affaire en train de se perdre', accent: true }] },
      { label: 'Historique', items: [{ name: 'Appels, WhatsApp, e-mails, visites, devis et factures rattachés au client, dans l’ordre', sub: 'celui qui reprend le client lit tout en deux minutes' }] },
      { label: 'Relances et règles', items: [{ name: 'Rappel le jour dit, devis relancé aux délais écrits, alerte quand une affaire dort, réattribution', sub: 'les délais sont ceux que l’entreprise écrit' }] },
      { label: 'Tableau du gérant', items: [{ name: 'Pipeline par étape, prévision pondérée, taux de transformation, délai de première réponse, motifs de perte', sub: 'le mois prochain se lit ce mois-ci' }] },
    ], caption: 'Figure 4 · La couche accentuée est celle des affaires : une étape définie par écrit, un montant et une prochaine action datée. Le fichier unique, au-dessus, dit à qui l’on parle ; l’historique, les relances et le tableau, en dessous, ne font que lire et faire avancer les affaires.', alt: 'Cinq couches : fichier unique ; affaires (accentuée) ; historique ; relances et règles ; tableau du gérant.' },
    etapes: { title: 'Une affaire, en six temps', items: [
      { label: 'Recevoir', sub: 'téléphone, WhatsApp, site, salon, source notée' },
      { label: 'Qualifier', sub: 'besoin, budget, décideur, délai' },
      { label: 'Chiffrer', sub: 'devis lié à l’affaire, envoyé et tracé' },
      { label: 'Relancer', sub: 'aux délais écrits, par le canal du client', accent: true },
      { label: 'Conclure', sub: 'gagnée ou perdue, avec un motif' },
      { label: 'Servir', sub: 'commande, livraison, rappel à 90 jours' },
    ], caption: 'Figure 5 · Le temps accentué est la relance : c’est là que se perdent les affaires que personne n’a refusées. Avant, la demande est reçue avec sa source, qualifiée et chiffrée ; après, elle est conclue avec un motif, puis servie, avec un rappel à quatre-vingt-dix jours.', alt: 'Six temps d’une affaire : recevoir, qualifier, chiffrer, relancer (accentué), conclure, servir.' },
    calendrier: { title: 'Un CRM en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Étapes et règles', note: 'étapes de vente et leur définition, délais de relance, motifs de perte, qui voit quoi ; sans logiciel', from: 0, to: 1 },
      { label: 'Fichier et reprise', note: 'contacts des téléphones, tableurs et facturation réunis, doublons fusionnés, portefeuilles attribués', from: 1, to: 2, accent: true },
      { label: 'Affaires et relances', note: 'pipeline ouvert avec deux commerciaux, prochaine action obligatoire, relances de devis, application mobile', from: 2, to: 3 },
      { label: 'Tableau et liaisons', note: 'prévision pondérée, motifs de perte, liaison avec la téléphonie, WhatsApp, devis et facturation', from: 3, to: 4 },
    ], caption: 'Figure 6 · Quatre semaines dans l’exemple, la première sans logiciel : les étapes, les délais de relance et les motifs de perte s’écrivent avec les commerciaux. La semaine accentuée est celle du fichier, parce qu’un CRM ouvert sur des contacts en désordre est abandonné en un mois. L’outil se choisit après la première semaine, quand on sait ce qu’on lui demande.', alt: 'Calendrier de quatre semaines : étapes et règles, fichier et reprise (accentué), affaires et relances, tableau et liaisons.' },
  },
  en: {
    cover: { eyebrow: 'CRM software · Algeria · 2027', title: ['CRM software in Algeria', 'portfolio, pipeline, follow-ups'], subtitle: 'One customer file, deals with a dated next action, quotation follow-ups, weighted forecast, loss reasons', left: { label: 'Customers in the phones', sub: 'a salesperson leaves with the portfolio' }, right: { label: 'A portfolio the company owns', sub: 'every deal has its next action' } },
    situations: { title: 'Six real situations, and what the CRM must do', columns: ['What happens', 'What the CRM must do'], rows: [
      { label: 'Customers live in the salespeople’s phones', cells: ['Each has their own notebook and file', 'one file owned by the company, fed from the phone, with no duplicates'] },
      { label: 'A salesperson leaves with the portfolio', cells: ['Nobody else knows their customers', 'history attached to the customer; deals reassigned in a minute'] },
      { label: 'Nobody knows where the quotations stand', cells: ['Sent by email, never followed', 'each quotation tied to a deal, followed up on written delays, status visible'] },
      { label: 'We call back too late, or twice', cells: ['Nobody knows who was supposed to call', 'one dated next action per deal, one owner, a reminder on the day'] },
      { label: 'I do not know what will come in', cells: ['The manager asks each person at month end', 'pipeline by stage and weighted forecast, updated by the work itself'] },
      { label: 'We do not know why we lose', cells: ['Lost deals simply disappear', 'a mandatory loss reason, read monthly: silence, price, lead time, competitor'] },
    ], caption: 'Figure 1 · The first three rows are settled by a file the company owns, a history attached to the customer and quotations tied to a deal; the next three by a dated next action, a weighted forecast and a mandatory loss reason. None is settled by one more salesperson.', alt: 'Matrix of six situations: customers in phones, salesperson leaving with the portfolio, quotations not followed, call-backs late or doubled, unknown forecast, losses with no reason; what happens and what the CRM must do.' },
    entonnoir: { caption: 'Figure 2 · A hundred enquiries received in one month: forty-six qualified, twenty-eight quotations sent, twelve deals won. Of the other eighty-eight, thirty-seven got a no or a not-now: off target, postponed, price, lead time. The remaining fifty-one were refused by nobody: thirty-one never called back in time, eleven left with no follow-up, nine quotations never chased. Numbers and reasons are a constructed example; yours appear once every closed deal carries its reason.' },
    pipeline: { caption: 'Figure 3 · The board of open deals: thirty-six qualified, thirty-one quotations sent, eighteen in negotiation, for 35.88 million dinars. Each column is weighted by the share of deals that, at that stage, end up won, twenty-five, forty and seventy per cent in the example: the forecast is 15.05 million. Three cards are late, one with no next action and two overdue follow-ups. Customers, amounts and probabilities are a constructed example.' },
    couches: { title: 'A CRM, in five layers', layers: [
      { label: 'One customer file', items: [{ name: 'Companies, contacts, phone number as the key, source of the enquiry, owner, with no duplicates', sub: 'the portfolio belongs to the company, not to each person’s phone' }] },
      { label: 'Deals', items: [{ name: 'Every enquiry becomes a deal with a stage, an amount and a dated next action', sub: 'a deal with no next action is a deal being lost', accent: true }] },
      { label: 'History', items: [{ name: 'Calls, WhatsApp, emails, visits, quotations and invoices attached to the customer, in order', sub: 'whoever takes over the customer reads it all in two minutes' }] },
      { label: 'Follow-ups and rules', items: [{ name: 'Reminder on the day, quotation chased on written delays, alert when a deal sleeps, reassignment', sub: 'the delays are those the company writes' }] },
      { label: 'Manager’s board', items: [{ name: 'Pipeline by stage, weighted forecast, conversion rates, first-response time, loss reasons', sub: 'next month is read this month' }] },
    ], caption: 'Figure 4 · The accented layer is deals: a stage defined in writing, an amount and a dated next action. The customer file, above, says who is being spoken to; history, follow-ups and the board, below, only read the deals and move them forward.', alt: 'Five layers: one customer file; deals (accented); history; follow-ups and rules; manager’s board.' },
    etapes: { title: 'One deal, in six steps', items: [
      { label: 'Receive', sub: 'phone, WhatsApp, website, show; source noted' },
      { label: 'Qualify', sub: 'need, budget, decision-maker, timing' },
      { label: 'Quote', sub: 'quotation tied to the deal, sent and tracked' },
      { label: 'Follow up', sub: 'on written delays, through the customer’s channel', accent: true },
      { label: 'Close', sub: 'won or lost, with a reason' },
      { label: 'Serve', sub: 'order, delivery, call at 90 days' },
    ], caption: 'Figure 5 · The accented step is the follow-up: that is where the deals nobody refused are lost. Before it, the enquiry is received with its source, qualified and quoted; after it, the deal is closed with a reason, then served, with a call at ninety days.', alt: 'Six steps of a deal: receive, qualify, quote, follow up (accented), close, serve.' },
    calendrier: { title: 'A CRM in 2027, in weeks', unit: 'wk', items: [
      { label: 'Stages and rules', note: 'sales stages and their definition, follow-up delays, loss reasons, who sees what; no software yet', from: 0, to: 1 },
      { label: 'File and migration', note: 'contacts from phones, spreadsheets and invoicing brought together, duplicates merged, portfolios assigned', from: 1, to: 2, accent: true },
      { label: 'Deals and follow-ups', note: 'pipeline opened with two salespeople, next action mandatory, quotation follow-ups, mobile app', from: 2, to: 3 },
      { label: 'Board and links', note: 'weighted forecast, loss reasons, links with telephony, WhatsApp, quotations and invoicing', from: 3, to: 4 },
    ], caption: 'Figure 6 · Four weeks in the example, the first with no software: stages, follow-up delays and loss reasons are written with the salespeople. The accented week is the file, because a CRM opened on untidy contacts is abandoned within a month. The tool is chosen after the first week, once it is clear what is asked of it.', alt: 'Four-week calendar: stages and rules, file and migration (accented), deals and follow-ups, board and links.' },
  },
  ar: {
    cover: { eyebrow: 'برنامج إدارة الزبائن · الجزائر · 2027', title: ['برنامج إدارة الزبائن في الجزائر', 'المحفظة، مسار الصفقات، المتابعات'], subtitle: 'ملف واحد للزبائن، صفقات لها خطوة موالية بتاريخ، متابعة عروض السعر، توقع مرجَّح، وأسباب الضياع', left: { label: 'الزبائن في الهواتف', sub: 'بائع يغادر ومعه محفظته' }, right: { label: 'محفظة تملكها المؤسسة', sub: 'لكل صفقة خطوتها الموالية' } },
    situations: { title: 'ست حالات واقعية، وما يجب أن يفعله البرنامج', columns: ['ما يحدث', 'ما يجب أن يفعله البرنامج'], rows: [
      { label: 'الزبائن في هواتف البائعين', cells: ['لكل واحد دفتره وملفه', 'ملف واحد تملكه المؤسسة، يتغذى من الهاتف، دون تكرار'] },
      { label: 'بائع يغادر ومعه محفظته', cells: ['لا أحد غيره يعرف زبائنه', 'التاريخ مربوط بالزبون؛ والصفقات يُعاد إسنادها في دقيقة'] },
      { label: 'لا أحد يعرف أين وصلت عروض السعر', cells: ['أُرسلت بالبريد ولم تُتابَع', 'كل عرض مربوط بصفقة، يُتابَع بالآجال المكتوبة، وحالته ظاهرة'] },
      { label: 'نعاود الاتصال متأخرين، أو مرتين', cells: ['لا أحد يعرف من كان عليه أن يتصل', 'خطوة موالية بتاريخ لكل صفقة، مسؤول واحد، وتذكير في يومه'] },
      { label: 'لا أعرف ما الذي سيدخل', cells: ['المسيّر يسأل كل واحد آخر الشهر', 'الصفقات حسب المرحلة وتوقع مرجَّح، يتحدَّثان بالعمل نفسه'] },
      { label: 'لا نعرف لماذا نخسر', cells: ['الصفقات الضائعة تختفي', 'سبب ضياع إلزامي يُقرأ كل شهر: صمت، سعر، أجل، منافس'] },
    ], caption: 'الشكل 1 · السطور الثلاثة الأولى تُحَل بملف تملكه المؤسسة، وتاريخ مربوط بالزبون، وعروض سعر مربوطة بصفقة؛ والثلاثة التالية بخطوة موالية بتاريخ، وتوقع مرجَّح، وسبب ضياع إلزامي. لا يُحَل أي منها ببائع إضافي.', alt: 'مصفوفة ست حالات: زبائن في الهواتف، بائع يغادر بمحفظته، عروض سعر دون متابعة، معاودة متأخرة أو مكرَّرة، توقع مجهول، خسائر دون سبب؛ ما يحدث وما يجب أن يفعله البرنامج.' },
    entonnoir: { caption: 'الشكل 2 · مئة طلب وصلت في شهر: ستة وأربعون مؤهَّلاً، ثمانية وعشرون عرض سعر أُرسل، اثنتا عشرة صفقة رُبحت. من الثمانية والثمانين الأخرى، سبع وثلاثون تلقّت «لا» أو «ليس الآن»: خارج الهدف، مؤجَّلة، السعر، الأجل. والإحدى والخمسون الباقية لم يرفضها أحد: إحدى وثلاثون لم يُعاود الاتصال بها في الوقت، إحدى عشرة تُركت دون متابعة، وتسعة عروض سعر لم تُتابَع قط. الأعداد والأسباب مثال مركَّب؛ وأعدادكم تظهر حين تحمل كل صفقة مغلقة سببها.' },
    pipeline: { caption: 'الشكل 3 · لوحة الصفقات المفتوحة: ست وثلاثون مؤهَّلة، واحد وثلاثون عرض سعر مرسَل، ثماني عشرة في التفاوض، بمجموع 35,88 مليون دينار. كل عمود مرجَّح بحصة الصفقات التي تنتهي رابحة من تلك المرحلة، خمسة وعشرون وأربعون وسبعون بالمئة في المثال: التوقع 15,05 مليون. ثلاث بطاقات متأخرة، واحدة دون خطوة موالية ومتابعتان فات أجلهما. الزبائن والمبالغ والاحتمالات مثال مركَّب.' },
    couches: { title: 'برنامج إدارة الزبائن، في خمس طبقات', layers: [
      { label: 'ملف واحد', items: [{ name: 'المؤسسات، جهات الاتصال، رقم الهاتف كمفتاح، مصدر الطلب، والبائع المسؤول، دون تكرار', sub: 'المحفظة ملك المؤسسة، لا هاتف كل واحد' }] },
      { label: 'الصفقات', items: [{ name: 'كل طلب يصير صفقة لها مرحلة ومبلغ وخطوة موالية بتاريخ', sub: 'الصفقة التي لا خطوة موالية لها صفقة في طريق الضياع', accent: true }] },
      { label: 'التاريخ', items: [{ name: 'المكالمات، واتساب، البريد، الزيارات، عروض السعر والفواتير مربوطة بالزبون، بالترتيب', sub: 'من يتسلّم الزبون يقرأ كل شيء في دقيقتين' }] },
      { label: 'المتابعات والقواعد', items: [{ name: 'تذكير في يومه، عرض سعر يُتابَع بالآجال المكتوبة، تنبيه حين تنام صفقة، وإعادة إسناد', sub: 'الآجال هي التي تكتبها المؤسسة' }] },
      { label: 'لوحة المسيّر', items: [{ name: 'الصفقات حسب المرحلة، توقع مرجَّح، نسب التحويل، مهلة أول ردّ، وأسباب الضياع', sub: 'الشهر القادم يُقرأ هذا الشهر' }] },
    ], caption: 'الشكل 4 · الطبقة المبرزة هي الصفقات: مرحلة معرَّفة كتابياً، ومبلغ، وخطوة موالية بتاريخ. الملف الواحد، فوقها، يقول مع من نتكلم؛ والتاريخ والمتابعات واللوحة، تحتها، تقرأ الصفقات وتدفعها إلى الأمام فقط.', alt: 'خمس طبقات: ملف واحد؛ الصفقات (مبرزة)؛ التاريخ؛ المتابعات والقواعد؛ لوحة المسيّر.' },
    etapes: { title: 'صفقة واحدة، في ست مراحل', items: [
      { label: 'الاستقبال', sub: 'هاتف، واتساب، موقع، معرض؛ والمصدر مدوَّن' },
      { label: 'التأهيل', sub: 'الحاجة، الميزانية، صاحب القرار، الأجل' },
      { label: 'التسعير', sub: 'عرض سعر مربوط بالصفقة، مرسَل ومتابَع' },
      { label: 'المتابعة', sub: 'بالآجال المكتوبة، وبقناة الزبون', accent: true },
      { label: 'الإغلاق', sub: 'رابحة أو ضائعة، مع سبب' },
      { label: 'الخدمة', sub: 'طلبية، تسليم، واتصال بعد 90 يوماً' },
    ], caption: 'الشكل 5 · المرحلة المبرزة هي المتابعة: هنا تضيع الصفقات التي لم يرفضها أحد. قبلها يُستقبل الطلب بمصدره ويُؤهَّل ويُسعَّر؛ وبعدها تُغلق الصفقة بسبب، ثم تُخدَم، مع اتصال بعد تسعين يوماً.', alt: 'ست مراحل لصفقة: الاستقبال، التأهيل، التسعير، المتابعة (مبرزة)، الإغلاق، الخدمة.' },
    calendrier: { title: 'برنامج إدارة الزبائن سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'المراحل والقواعد', note: 'مراحل البيع وتعريف كل واحدة، آجال المتابعة، أسباب الضياع، ومن يرى ماذا؛ دون برنامج', from: 0, to: 1 },
      { label: 'الملف والاسترجاع', note: 'جمع جهات الاتصال من الهواتف والجداول والفوترة، دمج المكرَّر، وإسناد المحافظ', from: 1, to: 2, accent: true },
      { label: 'الصفقات والمتابعات', note: 'فتح مسار الصفقات مع بائعَين، خطوة موالية إلزامية، متابعة عروض السعر، وتطبيق الهاتف', from: 2, to: 3 },
      { label: 'اللوحة والربط', note: 'توقع مرجَّح، أسباب الضياع، والربط مع الهاتف وواتساب وعروض السعر والفوترة', from: 3, to: 4 },
    ], caption: 'الشكل 6 · أربعة أسابيع في المثال، الأول دون برنامج: المراحل وآجال المتابعة وأسباب الضياع تُكتب مع البائعين. الأسبوع المبرز هو الملف، لأن برنامجاً يُفتح على جهات اتصال غير مرتَّبة يُهجَر في شهر. والأداة تُختار بعد الأسبوع الأول، حين يُعرف ما يُطلب منها.', alt: 'تقويم أربعة أسابيع: المراحل والقواعد، الملف والاسترجاع (مبرز)، الصفقات والمتابعات، اللوحة والربط.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      situations: { svg: matrix({ title: t.situations.title, columns: t.situations.columns, rows: t.situations.rows, rtl }), caption: t.situations.caption, alt: t.situations.alt },
      entonnoir: { svg: entonnoir(e.entonnoir, rtl), caption: t.entonnoir.caption, alt: e.entonnoir.alt },
      pipeline: { svg: pipeline(e.pipeline, rtl), caption: t.pipeline.caption, alt: e.pipeline.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      etapes: { svg: steps({ title: t.etapes.title, steps: t.etapes.items, arrows: true, rtl }), caption: t.etapes.caption, alt: t.etapes.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 4, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
