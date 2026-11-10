import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { equipment, dispatch, STRINGS as FS } from './custom/fieldservice.mjs';
export const slug = 'le-technicien-est-reparti-sans-la-piece-interventions-terrain-application-algerie-2027-equipements-ordres-de-travail-repartition-preventif';
const T = {
  fr: {
    cover: { eyebrow: 'Interventions · Maintenance · Techniciens · 2027', title: ['« Le technicien', 'est reparti', 'sans la pièce »'], subtitle: 'Ce qu’on construit pour les interventions terrain : fiche équipement, ordres de travail, répartition, application technicien, préventif', left: { label: 'Un carnet, des appels, deux visites', sub: 'et personne ne sait quand la chambre froide a été révisée' }, right: { label: 'Une fiche, un ordre, une visite', sub: 'et la pièce réservée avant le départ' } },
    equipement: { caption: 'Figure 1 · La fiche d’un équipement installé, une chambre froide dans une supérette : son identité et son étiquette QR, son contrat avec deux visites préventives par an, son historique de six interventions avec le technicien, la durée et les pièces, et trois chiffres. Le technicien scanne l’étiquette à l’arrivée et ouvre cette fiche ; la note d’une visite préventive, « usure du joint », est devenue une intervention planifiée. Équipement, dates et pièces sont un exemple construit.' },
    situations: { title: 'Six situations réelles, et ce que l’application fait', columns: ['Ce qui se passe', 'Ce que l’application fait'], rows: [
      { label: 'Le technicien repart sans la pièce', cells: ['Deux visites, deux déplacements, un client sans froid', 'historique et diagnostic connus ; pièce réservée avant le départ'] },
      { label: 'Personne ne sait quand c’était révisé', cells: ['Le client dit « l’an dernier » ; le carnet est au dépôt', 'fiche équipement avec historique ; scan de l’étiquette sur place'] },
      { label: 'L’urgence tombe sur le mauvais technicien', cells: ['Pas la compétence, pas dans la zone, pas la pièce', 'répartition par compétence, zone, pièce ; préventive déplacée'] },
      { label: 'Le rapport est écrit le soir, de mémoire', cells: ['Durée approximative, pièces oubliées, pas de photo', 'liste de contrôle, heures, pièces et photos saisies sur place'] },
      { label: 'Le contrat prévoit deux visites, une est faite', cells: ['Visites oubliées ; le client paie pour rien et le dit', 'plan préventif qui génère les ordres ; visites restantes visibles'] },
      { label: 'La facture ne correspond pas au travail', cells: ['Pièces et heures retapées ; contestation', 'facture issue de l’ordre clôturé : pièces, heures, forfait du contrat'] },
    ], caption: 'Figure 2 · Les trois premières lignes se règlent par la fiche équipement, le diagnostic connu avant le départ et la répartition par compétence, zone et pièce ; les trois suivantes par la saisie sur place, le plan préventif et la facture issue de l’ordre clôturé. Aucune ne se règle par un technicien plus consciencieux.', alt: 'Matrice de six situations : technicien sans la pièce, révision inconnue, urgence mal affectée, rapport de mémoire, visites de contrat oubliées, facture qui ne correspond pas ; ce qui se passe et ce que l’application fait.' },
    couches: { title: 'Les interventions terrain, en cinq couches', layers: [
      { label: 'Parc d’équipements', items: [{ name: 'Une fiche par équipement installé : modèle, série, emplacement, étiquette QR, contrat, garantie, historique', sub: 'l’équipement existe avant la panne, pas seulement sur la facture' }] },
      { label: 'Ordres de travail', items: [{ name: 'Un ordre par intervention : équipement, type, priorité, états datés, technicien, pièces réservées, durée, rapport', sub: 'le ticket du service après-vente devient un ordre quand il faut se déplacer', accent: true }] },
      { label: 'Répartition', items: [{ name: 'Tableau par technicien et par jour ; placement par compétence, zone et pièce ; urgence qui déplace une préventive et prévient', sub: 'le répartiteur confirme, il ne cherche plus' }] },
      { label: 'Application technicien', items: [{ name: 'Hors ligne ; scan de l’étiquette ; liste de contrôle par type d’équipement ; pièces du stock véhicule ; heures ; photos ; signature', sub: 'le rapport est écrit sur place, pas le soir' }] },
      { label: 'Préventif et mesure', items: [{ name: 'Plans par contrat qui génèrent les ordres ; alertes de visites dues ; résolu en une visite, délai d’intervention, pannes par équipement', sub: 'une note de visite devient une intervention planifiée' }] },
    ], caption: 'Figure 3 · La couche accentuée est l’ordre de travail : c’est lui qui relie l’équipement, le technicien, les pièces, les heures et le rapport, et c’est lui qui devient la facture. Le ticket du service après-vente décrit dans le guide sur les réclamations devient un ordre de travail dès qu’il faut se déplacer ; les pièces viennent du journal du guide sur le stock, avec un stock par véhicule.', alt: 'Cinq couches : parc d’équipements, ordres de travail (accentuée), répartition, application technicien, préventif et mesure.' },
    intervention: { title: 'Une intervention, en six temps', items: [
      { label: 'Recevoir l’ordre', sub: 'équipement, historique, diagnostic probable, pièce réservée' },
      { label: 'Se déplacer', sub: 'ordre du jour sur le téléphone ; client prévenu de l’heure prévue' },
      { label: 'Scanner l’étiquette', sub: 'la fiche s’ouvre ; arrivée horodatée ; mauvais équipement refusé', accent: true },
      { label: 'Contrôler et diagnostiquer', sub: 'liste de contrôle par type ; cause codée ; photo avant' },
      { label: 'Réparer et saisir', sub: 'pièces du stock véhicule décomptées ; heures ; photo après' },
      { label: 'Clôturer sur place', sub: 'signature du client ; rapport envoyé ; facture ou contrat' },
    ], caption: 'Figure 4 · L’étape accentuée est le scan de l’étiquette : il ouvre la bonne fiche, horodate l’arrivée et refuse un équipement qui n’est pas celui de l’ordre. Tout ce qui suit est saisi sur place, hors ligne dans la chambre froide ou le local technique, et se synchronise au retour du réseau ; le rapport et la facture sortent de l’ordre clôturé, pas d’une ressaisie le soir.', alt: 'Six temps : recevoir l’ordre, se déplacer, scanner l’étiquette (accentué), contrôler et diagnostiquer, réparer et saisir, clôturer sur place.' },
    repartition: { caption: 'Figure 5 · Le tableau de répartition d’un mercredi : quatre techniciens avec leurs compétences et leur zone, quatorze ordres de travail, les déplacements visibles. À 9 h 20, une urgence arrive ; elle est placée en quatre minutes sur le technicien qui a la compétence, qui est dans la zone et dont la pièce est réservée au dépôt ; sa visite préventive de 11 h est déplacée à jeudi, et le client déplacé est prévenu avant que le technicien ne change de route. Techniciens, ordres et horaires sont un exemple construit.' },
    calendrier: { title: 'Outiller les interventions en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Règles', note: 'types d’équipements et listes de contrôle, compétences, zones, priorités et délais, contrats et visites incluses ; avec le gérant et un technicien senior', from: 0, to: 1 },
      { label: 'Parc et ordres', note: 'fiche équipement, étiquettes QR, reprise du parc existant, ordre de travail avec états, pièces réservées, lien avec le ticket', from: 1, to: 3, accent: true },
      { label: 'Application technicien', note: 'hors ligne, scan, liste de contrôle, pièces du véhicule, heures, photos, signature, rapport', from: 3, to: 4 },
      { label: 'Répartition', note: 'tableau par technicien et jour, placement par compétence, zone, pièce, urgence et préventive déplacée, messages clients', from: 4, to: 5 },
      { label: 'Préventif et facture', note: 'plans par contrat qui génèrent les ordres, visites dues, facture issue de l’ordre clôturé, export comptable', from: 5, to: 6 },
      { label: 'Mesure', note: 'résolu en une visite, délai d’intervention, pannes par équipement, visites de contrat faites ; revue du lundi', from: 6, to: 7 },
    ], caption: 'Figure 6 · Sept semaines, la première sans code : les types d’équipements, les listes de contrôle, les compétences et les contrats sont des décisions du métier. Les deux semaines accentuées sont le parc et les ordres, parce que la reprise du parc existant, étiquette par étiquette, est ce qui prend du temps et ce qui donne sa valeur à tout le reste.', alt: 'Frise de sept semaines : règles, parc et ordres (accentué, deux semaines), application technicien, répartition, préventif et facture, mesure.' },
  },
  en: {
    cover: { eyebrow: 'Field service · Maintenance · Technicians · 2027', title: ['“The technician', 'left without', 'the part”'], subtitle: 'What gets built for field interventions: equipment record, work orders, dispatch, technician app, preventive plan', left: { label: 'A notebook, calls, two visits', sub: 'and nobody knows when the cold room was serviced' }, right: { label: 'One record, one order, one visit', sub: 'and the part reserved before leaving' } },
    equipement: { caption: 'Figure 1 · One installed piece of equipment, a cold room in a minimarket: its identity and QR tag, its contract with two preventive visits a year, its history of six interventions with technician, duration and parts, and three figures. The technician scans the tag on arrival and opens this record; a preventive-visit note, “seal wear”, became a planned intervention. Equipment, dates and parts are a constructed example.' },
    situations: { title: 'Six real situations, and what the application does', columns: ['What happens', 'What the application does'], rows: [
      { label: 'The technician leaves without the part', cells: ['Two visits, two trips, a customer without cold', 'history and diagnosis known; part reserved before leaving'] },
      { label: 'Nobody knows when it was serviced', cells: ['The customer says “last year”; the notebook is at the depot', 'equipment record with history; tag scanned on site'] },
      { label: 'The emergency lands on the wrong technician', cells: ['Not the skill, not in the zone, not the part', 'dispatch by skill, zone, part; preventive visit moved'] },
      { label: 'The report is written in the evening, from memory', cells: ['Approximate duration, forgotten parts, no photo', 'checklist, hours, parts and photos entered on site'] },
      { label: 'The contract includes two visits, one is done', cells: ['Visits forgotten; the customer pays for nothing and says so', 'preventive plan generating orders; remaining visits visible'] },
      { label: 'The invoice does not match the work', cells: ['Parts and hours retyped; dispute', 'invoice from the closed order: parts, hours, contract flat rate'] },
    ], caption: 'Figure 2 · The first three rows are settled by the equipment record, the diagnosis known before leaving and dispatch by skill, zone and part; the next three by on-site entry, the preventive plan and the invoice from the closed order. None is settled by a more conscientious technician.', alt: 'Matrix of six situations: technician without the part, unknown servicing, misassigned emergency, report from memory, forgotten contract visits, mismatched invoice; what happens and what the application does.' },
    couches: { title: 'Field interventions, in five layers', layers: [
      { label: 'Equipment base', items: [{ name: 'One record per installed piece: model, serial, location, QR tag, contract, warranty, history', sub: 'the equipment exists before the breakdown, not only on the invoice' }] },
      { label: 'Work orders', items: [{ name: 'One order per intervention: equipment, type, priority, dated states, technician, reserved parts, duration, report', sub: 'the after-sales ticket becomes an order when someone has to travel', accent: true }] },
      { label: 'Dispatch', items: [{ name: 'Board per technician and day; placement by skill, zone and part; emergency that moves a preventive visit and warns', sub: 'the dispatcher confirms, they no longer search' }] },
      { label: 'Technician app', items: [{ name: 'Offline; tag scan; checklist per equipment type; parts from van stock; hours; photos; signature', sub: 'the report is written on site, not in the evening' }] },
      { label: 'Preventive and measurement', items: [{ name: 'Plans per contract that generate orders; due-visit alerts; fixed in one visit, response time, breakdowns per equipment', sub: 'a visit note becomes a planned intervention' }] },
    ], caption: 'Figure 3 · The accented layer is the work order: it links equipment, technician, parts, hours and report, and it becomes the invoice. The after-sales ticket described in the complaints guide becomes a work order as soon as someone has to travel; parts come from the ledger of the stock guide, with a stock per van.', alt: 'Five layers: equipment base, work orders (accented), dispatch, technician app, preventive and measurement.' },
    intervention: { title: 'One intervention, in six beats', items: [
      { label: 'Receive the order', sub: 'equipment, history, likely diagnosis, reserved part' },
      { label: 'Travel', sub: 'day’s orders on the phone; customer warned of the planned time' },
      { label: 'Scan the tag', sub: 'the record opens; timestamped arrival; wrong equipment refused', accent: true },
      { label: 'Check and diagnose', sub: 'checklist per type; coded cause; before photo' },
      { label: 'Repair and enter', sub: 'van-stock parts deducted; hours; after photo' },
      { label: 'Close on site', sub: 'customer signature; report sent; invoice or contract' },
    ], caption: 'Figure 4 · The accented beat is the tag scan: it opens the right record, timestamps arrival and refuses equipment that is not the order’s. Everything after is entered on site, offline in the cold room or plant room, and syncs when the network returns; the report and the invoice come out of the closed order, not from retyping in the evening.', alt: 'Six beats: receive the order, travel, scan the tag (accented), check and diagnose, repair and enter, close on site.' },
    repartition: { caption: 'Figure 5 · One Wednesday’s dispatch board: four technicians with skills and zone, fourteen work orders, travel visible. At 9:20, an emergency arrives; it is placed in four minutes on the technician who has the skill, is in the zone and whose part is reserved at the depot; his 11:00 preventive visit is moved to Thursday, and the moved customer is warned before the technician changes route. Technicians, orders and times are a constructed example.' },
    calendrier: { title: 'Tooling field interventions in 2027, in weeks', unit: 'wk', items: [
      { label: 'Rules', note: 'equipment types and checklists, skills, zones, priorities and response times, contracts and included visits; with the manager and a senior technician', from: 0, to: 1 },
      { label: 'Base and orders', note: 'equipment record, QR tags, take-over of the existing base, work order with states, reserved parts, link with the ticket', from: 1, to: 3, accent: true },
      { label: 'Technician app', note: 'offline, scan, checklist, van parts, hours, photos, signature, report', from: 3, to: 4 },
      { label: 'Dispatch', note: 'board per technician and day, placement by skill, zone, part, emergency and moved preventive visit, customer messages', from: 4, to: 5 },
      { label: 'Preventive and invoice', note: 'plans per contract generating orders, due visits, invoice from the closed order, accounting export', from: 5, to: 6 },
      { label: 'Measurement', note: 'fixed in one visit, response time, breakdowns per equipment, contract visits done; Monday review', from: 6, to: 7 },
    ], caption: 'Figure 6 · Seven weeks, the first without code: equipment types, checklists, skills and contracts are trade decisions. The two accented weeks are the base and the orders, because taking over the existing base, tag by tag, is what takes time and what gives everything else its value.', alt: 'Seven-week timeline: rules, base and orders (accented, two weeks), technician app, dispatch, preventive and invoice, measurement.' },
  },
  ar: {
    cover: { eyebrow: 'تدخلات · صيانة · تقنيون · 2027', title: ['«التقني', 'غادر', 'بلا القطعة»'], subtitle: 'ما يُبنى للتدخلات الميدانية: بطاقة معدّة، أوامر عمل، توزيع، تطبيق تقني، خطة وقائية', left: { label: 'دفتر ومكالمات وزيارتان', sub: 'ولا أحد يعرف متى صينت غرفة التبريد' }, right: { label: 'بطاقة، أمر، زيارة', sub: 'والقطعة محجوزة قبل الانطلاق' } },
    equipement: { caption: 'الشكل 1 · بطاقة معدّة مركَّبة، غرفة تبريد في سوبيرات: هويتها ووسم QR، عقدها بزيارتين وقائيتين في السنة، تاريخها من ست تدخلات بالتقني والمدة والقطع، وثلاثة أرقام. يمسح التقني الوسم عند الوصول ويفتح هذه البطاقة؛ وملاحظة زيارة وقائية، «تآكل الجوان»، صارت تدخلاً مخططاً. والمعدّة والتواريخ والقطع مثال مبني.' },
    situations: { title: 'ست حالات حقيقية، وما يفعله التطبيق', columns: ['ما يحدث', 'ما يفعله التطبيق'], rows: [
      { label: 'التقني يغادر بلا القطعة', cells: ['زيارتان، تنقلان، زبون بلا تبريد', 'التاريخ والتشخيص معروفان؛ قطعة محجوزة قبل الانطلاق'] },
      { label: 'لا أحد يعرف متى صينت', cells: ['الزبون يقول «العام الماضي»؛ الدفتر في المستودع', 'بطاقة معدّة بتاريخ؛ مسح الوسم في المكان'] },
      { label: 'الطارئ يقع على التقني الخطأ', cells: ['لا المهارة، لا في المنطقة، لا القطعة', 'توزيع بالمهارة والمنطقة والقطعة؛ وقائية منقولة'] },
      { label: 'التقرير يُكتب مساءً من الذاكرة', cells: ['مدة تقريبية، قطع منسية، لا صورة', 'قائمة تحقق، ساعات، قطع وصور تُدخَل في المكان'] },
      { label: 'العقد ينص على زيارتين، أُنجزت واحدة', cells: ['زيارات منسية؛ الزبون يدفع بلا مقابل ويقولها', 'خطة وقائية تولّد الأوامر؛ الزيارات المتبقية مرئية'] },
      { label: 'الفاتورة لا تطابق العمل', cells: ['قطع وساعات معاد كتابتها؛ اعتراض', 'فاتورة من الأمر المغلق: قطع، ساعات، مبلغ العقد'] },
    ], caption: 'الشكل 2 · الأسطر الثلاثة الأولى تُحل ببطاقة المعدّة والتشخيص المعروف قبل الانطلاق والتوزيع بالمهارة والمنطقة والقطعة؛ والثلاثة التالية بالإدخال في المكان والخطة الوقائية والفاتورة من الأمر المغلق. ولا واحد يُحل بتقني أكثر ضميراً.', alt: 'مصفوفة ست حالات: تقني بلا قطعة، صيانة مجهولة، طارئ مُسند خطأً، تقرير من الذاكرة، زيارات عقد منسية، فاتورة لا تطابق؛ ما يحدث وما يفعله التطبيق.' },
    couches: { title: 'التدخلات الميدانية، في خمس طبقات', layers: [
      { label: 'قاعدة المعدّات', items: [{ name: 'بطاقة لكل معدّة مركَّبة: طراز، رقم تسلسلي، موقع، وسم QR، عقد، ضمان، تاريخ', sub: 'المعدّة موجودة قبل العطل لا على الفاتورة فقط' }] },
      { label: 'أوامر العمل', items: [{ name: 'أمر لكل تدخل: معدّة، نوع، أولوية، حالات مؤرَّخة، تقني، قطع محجوزة، مدة، تقرير', sub: 'تذكرة ما بعد البيع تصير أمراً حين يلزم التنقل', accent: true }] },
      { label: 'التوزيع', items: [{ name: 'لوحة لكل تقني ويوم؛ وضع بالمهارة والمنطقة والقطعة؛ طارئ ينقل وقائية وينبّه', sub: 'الموزّع يؤكد ولا يبحث بعد' }] },
      { label: 'تطبيق التقني', items: [{ name: 'دون اتصال؛ مسح الوسم؛ قائمة تحقق لكل نوع معدّة؛ قطع من مخزون الشاحنة؛ ساعات؛ صور؛ توقيع', sub: 'التقرير يُكتب في المكان لا مساءً' }] },
      { label: 'الوقائي والقياس', items: [{ name: 'خطط لكل عقد تولّد الأوامر؛ تنبيهات زيارات مستحقة؛ حُلّ في زيارة، مهلة التدخل، أعطال لكل معدّة', sub: 'ملاحظة زيارة تصير تدخلاً مخططاً' }] },
    ], caption: 'الشكل 3 · الطبقة المميزة هي أمر العمل: هو ما يربط المعدّة والتقني والقطع والساعات والتقرير، وهو ما يصير الفاتورة. وتذكرة ما بعد البيع الموصوفة في دليل الشكاوى تصير أمر عمل حالما يلزم التنقل؛ والقطع تأتي من سجل دليل المخزون بمخزون لكل شاحنة.', alt: 'خمس طبقات: قاعدة المعدّات، أوامر العمل (مميزة)، التوزيع، تطبيق التقني، الوقائي والقياس.' },
    intervention: { title: 'تدخل واحد، في ستة أوقات', items: [
      { label: 'استلام الأمر', sub: 'معدّة، تاريخ، تشخيص محتمل، قطعة محجوزة' },
      { label: 'التنقل', sub: 'أوامر اليوم على الهاتف؛ الزبون منبَّه بالوقت المخطط' },
      { label: 'مسح الوسم', sub: 'تنفتح البطاقة؛ وصول موقَّت؛ المعدّة الخطأ مرفوضة', accent: true },
      { label: 'الفحص والتشخيص', sub: 'قائمة تحقق لكل نوع؛ سبب مرمَّز؛ صورة قبل' },
      { label: 'الإصلاح والإدخال', sub: 'قطع مخزون الشاحنة تُخصم؛ ساعات؛ صورة بعد' },
      { label: 'الإغلاق في المكان', sub: 'توقيع الزبون؛ تقرير مرسَل؛ فاتورة أو عقد' },
    ], caption: 'الشكل 4 · الوقت المميز هو مسح الوسم: يفتح البطاقة الصحيحة ويوقّت الوصول ويرفض معدّة ليست معدّة الأمر. وكل ما يليه يُدخَل في المكان، دون اتصال في غرفة التبريد أو الغرفة التقنية، ويُزامَن عند عودة الشبكة؛ والتقرير والفاتورة يخرجان من الأمر المغلق لا من إعادة كتابة مساءً.', alt: 'ستة أوقات: استلام الأمر، التنقل، مسح الوسم (مميز)، الفحص والتشخيص، الإصلاح والإدخال، الإغلاق في المكان.' },
    repartition: { caption: 'الشكل 5 · لوحة توزيع يوم أربعاء: أربعة تقنيين بمهاراتهم ومنطقتهم، أربعة عشر أمر عمل، تنقلات مرئية. عند 09:20 يصل طارئ؛ يوضع في أربع دقائق على التقني الذي يملك المهارة وهو في المنطقة وقطعته محجوزة في المستودع؛ وتُنقل زيارته الوقائية عند 11:00 إلى الخميس، ويُنبَّه الزبون المنقول قبل أن يغيّر التقني طريقه. والتقنيون والأوامر والأوقات مثال مبني.' },
    calendrier: { title: 'تجهيز التدخلات سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'القواعد', note: 'أنواع المعدّات وقوائم التحقق، المهارات، المناطق، الأولويات والمهل، العقود والزيارات المشمولة؛ مع المسيّر وتقني أقدم', from: 0, to: 1 },
      { label: 'القاعدة والأوامر', note: 'بطاقة معدّة، وسوم QR، استلام القاعدة الموجودة، أمر عمل بحالات، قطع محجوزة، ربط بالتذكرة', from: 1, to: 3, accent: true },
      { label: 'تطبيق التقني', note: 'دون اتصال، مسح، قائمة تحقق، قطع الشاحنة، ساعات، صور، توقيع، تقرير', from: 3, to: 4 },
      { label: 'التوزيع', note: 'لوحة لكل تقني ويوم، وضع بالمهارة والمنطقة والقطعة، طارئ ووقائية منقولة، رسائل للزبائن', from: 4, to: 5 },
      { label: 'الوقائي والفاتورة', note: 'خطط لكل عقد تولّد الأوامر، زيارات مستحقة، فاتورة من الأمر المغلق، تصدير محاسبي', from: 5, to: 6 },
      { label: 'القياس', note: 'حُلّ في زيارة، مهلة التدخل، أعطال لكل معدّة، زيارات العقد المنجزة؛ مراجعة الاثنين', from: 6, to: 7 },
    ], caption: 'الشكل 6 · سبعة أسابيع، الأول بلا كود: أنواع المعدّات وقوائم التحقق والمهارات والعقود قرارات مهنية. والأسبوعان المميزان هما القاعدة والأوامر، لأن استلام القاعدة الموجودة وسماً وسماً هو ما يأخذ الوقت وما يعطي كل ما عداه قيمته.', alt: 'خط زمني من سبعة أسابيع: القواعد، القاعدة والأوامر (مميز، أسبوعان)، تطبيق التقني، التوزيع، الوقائي والفاتورة، القياس.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = FS[locale] || FS.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      equipement: { svg: equipment(e.equipment, rtl), caption: t.equipement.caption, alt: e.equipment.alt },
      situations: { svg: matrix({ title: t.situations.title, columns: t.situations.columns, rows: t.situations.rows, rtl }), caption: t.situations.caption, alt: t.situations.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      intervention: { svg: steps({ title: t.intervention.title, steps: t.intervention.items, arrows: true, rtl }), caption: t.intervention.caption, alt: t.intervention.alt },
      repartition: { svg: dispatch(e.dispatch, rtl), caption: t.repartition.caption, alt: e.dispatch.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 7, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
