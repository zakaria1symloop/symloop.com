import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { densite, encaissement, STRINGS as SC } from './custom/miseenrelation.mjs';
export const slug = 'comment-creer-une-plateforme-de-mise-en-relation-algerie-2027-application-artisans-services-a-domicile-densite-verification-paiement-especes';
const T = {
  fr: {
    cover: { eyebrow: 'Mise en relation · Algérie · 2027', title: ['Plateforme de mise en relation :', 'un quartier, trois métiers, d’abord'], subtitle: 'Demande en trois écrans, envoi aux artisans proches, vérification, avis, espèces, crédit prépayé', left: { label: 'Dans toute la wilaya', sub: 'sans réponse' }, right: { label: 'Dans trois communes', sub: 'acceptée en 4 minutes' } },
    demande: { title: 'Une demande, en six temps', items: [
      { label: 'Besoin décrit', sub: 'métier, photos, point sur la carte, créneau' },
      { label: 'Envoi', sub: 'aux artisans proches et disponibles', accent: true },
      { label: 'Accord', sub: 'le premier qui accepte, ou un devis' },
      { label: 'Intervention', sub: 'arrivée, travail, prix confirmé' },
      { label: 'Paiement', sub: 'espèces à l’artisan, reçu dans l’application' },
      { label: 'Avis', sub: 'noté après une intervention réelle' },
    ], caption: 'Figure 1 · Six temps. Le temps accentué est l’envoi : une demande ne vaut que si elle arrive, dans la minute, à des artisans proches et libres.', alt: 'Six temps : besoin décrit, envoi (accentué), accord, intervention, paiement, avis.' },
    densite: { caption: 'Figure 2 · Les douze mêmes artisans : dans trois communes voisines, la demande est acceptée en 4 minutes ; répartis dans toute la wilaya, elle reste sans réponse. Positions fictives.' },
    modeles: { title: 'Cinq façons de se rémunérer, et ce qui peut mal tourner', columns: ['Comment l’argent arrive', 'Ce qui peut mal tourner'], rows: [
      { label: 'Commission après l’intervention', cells: ['l’artisan reverse un pourcentage après coup', 'interventions non déclarées, relances, impayés'] },
      { label: 'Frais par demande, sur crédit prépayé', cells: ['un montant fixe est prélevé à chaque accord', 'demandes fausses à rembourser'] },
      { label: 'Abonnement mensuel de l’artisan', cells: ['un forfait par mois, quel que soit le volume', 'difficile à vendre avant d’avoir des demandes'] },
      { label: 'Prix fixe payé en ligne', cells: ['le client paie par carte, la plateforme reverse', 'peu de cartes, et un prix qui change sur place'] },
      { label: 'Mise en avant payante', cells: ['les artisans paient pour apparaître en premier', 'la confiance baisse si le classement s’achète'] },
    ], caption: 'Figure 3 · Cinq façons de se rémunérer. Aucune n’est la bonne partout : chacune échoue à sa façon, et le choix se teste sur une zone avant de s’étendre.', alt: 'Matrice de cinq modèles de revenu : commission après l’intervention, frais par demande sur crédit prépayé, abonnement mensuel, prix fixe payé en ligne, mise en avant payante ; pour chacun, comment l’argent arrive et ce qui peut mal tourner.' },
    encaissement: { caption: 'Figure 4 · Sur 1 000 interventions payées en espèces : 280 000 dinars encaissés sur 400 000 dus avec une commission, 250 000 encaissés d’avance avec un crédit prépayé. Montants fictifs.' },
    calendrier: { title: 'Douze semaines, pour une zone et trois métiers', unit: 'sem.', items: [
      { label: 'Cadrage', note: 'la zone, les trois métiers, les prix repères, le modèle de revenu à tester', from: 0, to: 1, accent: true },
      { label: 'Application artisan et vérification', note: 'inscription, pièces, zone, disponibilité, demandes reçues', from: 1, to: 5 },
      { label: 'Application client', note: 'demande en trois écrans, photos, point sur la carte, suivi', from: 3, to: 7 },
      { label: 'Répartition et notifications', note: 'rayon, disponibilité, délai d’accord, relance d’une demande sans réponse', from: 5, to: 9 },
      { label: 'Crédit, reçus et avis', note: 'achat de crédit, frais à l’accord, remboursement, reçu, avis', from: 7, to: 10 },
      { label: 'Lancement fermé', note: 'cinquante artisans vérifiés, une zone, des demandes réelles', from: 9, to: 12 },
    ], caption: 'Figure 5 · Douze semaines dans l’exemple. La période accentuée est la première ; le lancement se fait fermé, avec cinquante artisans vérifiés sur une seule zone. Durées indicatives d’un exemple construit.', alt: 'Calendrier de douze semaines : cadrage (accentué), application artisan et vérification, application client, répartition et notifications, crédit, reçus et avis, lancement fermé.' },
    couches: { title: 'Ce qu’il y a dans une plateforme de mise en relation, en cinq couches', layers: [
      { label: 'Client', items: [{ name: 'L’application client : la demande en trois écrans, photos, point sur la carte, suivi, avis', sub: 'demander sans téléphoner' }] },
      { label: 'Artisan', items: [{ name: 'L’application artisan : demandes reçues, accord en un geste, agenda, zone, crédit restant', sub: 'répondre depuis un chantier' }] },
      { label: 'Répartition', items: [{ name: 'La répartition : métier, zone, disponibilité, rayon d’envoi, délai d’accord, relance', sub: 'chaque demande trouve preneur, ou on le sait', accent: true }] },
      { label: 'Confiance', items: [{ name: 'La confiance : pièces vérifiées, avis après intervention réelle, litiges, reprise du travail', sub: 'pourquoi repasser par la plateforme' }] },
      { label: 'Pilotage', items: [{ name: 'Le pilotage : demandes servies, délai d’accord, annulations, crédits, par zone et par métier', sub: 'savoir quand ouvrir une autre zone' }] },
    ], caption: 'Figure 6 · Cinq couches. La couche accentuée est la répartition : c’est elle qui décide si une demande trouve preneur en quelques minutes.', alt: 'Cinq couches : l’application client ; l’application artisan ; la répartition (accentuée) ; la confiance ; le pilotage.' },
  },
  en: {
    cover: { eyebrow: 'Matching platform · Algeria · 2027', title: ['A matching platform:', 'one neighbourhood, three trades first'], subtitle: 'A request in three screens, dispatch to nearby tradespeople, vetting, reviews, cash, prepaid credit', left: { label: 'Across the wilaya', sub: 'no answer' }, right: { label: 'In three communes', sub: 'accepted in 4 minutes' } },
    demande: { title: 'A request, in six steps', items: [
      { label: 'Need described', sub: 'trade, photos, point on the map, time slot' },
      { label: 'Dispatch', sub: 'to tradespeople who are near and free', accent: true },
      { label: 'Acceptance', sub: 'the first to accept, or a quote' },
      { label: 'The job', sub: 'arrival, work, price confirmed' },
      { label: 'Payment', sub: 'cash to the tradesperson, receipt in the app' },
      { label: 'Review', sub: 'rated after a real job' },
    ], caption: 'Figure 1 · Six steps. The accented step is dispatch: a request is only worth something if it reaches, within the minute, tradespeople who are near and free.', alt: 'Six steps: need described, dispatch (accented), acceptance, the job, payment, review.' },
    densite: { caption: 'Figure 2 · The same twelve tradespeople: in three neighbouring communes the request is accepted in 4 minutes; spread over the whole wilaya it gets no answer. Fictitious positions.' },
    modeles: { title: 'Five ways of earning, and what can go wrong', columns: ['How the money arrives', 'What can go wrong'], rows: [
      { label: 'Commission after the job', cells: ['the tradesperson pays a percentage afterwards', 'jobs not declared, reminders, unpaid sums'] },
      { label: 'Fee per request, on prepaid credit', cells: ['a fixed amount is taken at each acceptance', 'fake requests to refund'] },
      { label: 'Monthly subscription', cells: ['a flat fee a month, whatever the volume', 'hard to sell before there are requests'] },
      { label: 'Fixed price paid online', cells: ['the customer pays by card, the platform pays out', 'few cards, and a price that changes on site'] },
      { label: 'Paid promotion', cells: ['tradespeople pay to appear first', 'trust falls if ranking can be bought'] },
    ], caption: 'Figure 3 · Five ways of earning. None is right everywhere: each fails in its own way, and the choice is tested on one zone before spreading.', alt: 'Matrix of five revenue models: commission after the job, fee per request on prepaid credit, monthly subscription, fixed price paid online, paid promotion; for each, how the money arrives and what can go wrong.' },
    encaissement: { caption: 'Figure 4 · On 1,000 jobs paid in cash: 280,000 dinars collected of 400,000 due with a commission, 250,000 collected in advance with prepaid credit. Fictitious amounts.' },
    calendrier: { title: 'Twelve weeks, for one zone and three trades', unit: 'wk', items: [
      { label: 'Scoping', note: 'the zone, the three trades, reference prices, the revenue model to test', from: 0, to: 1, accent: true },
      { label: 'Tradesperson app and vetting', note: 'sign-up, documents, zone, availability, requests received', from: 1, to: 5 },
      { label: 'Customer app', note: 'request in three screens, photos, point on the map, tracking', from: 3, to: 7 },
      { label: 'Dispatch and notifications', note: 'radius, availability, time to accept, re-sending an unanswered request', from: 5, to: 9 },
      { label: 'Credit, receipts and reviews', note: 'buying credit, fee at acceptance, refund, receipt, review', from: 7, to: 10 },
      { label: 'Closed launch', note: 'fifty vetted tradespeople, one zone, real requests', from: 9, to: 12 },
    ], caption: 'Figure 5 · Twelve weeks in the example. The accented period is the first; the launch is closed, with fifty vetted tradespeople in a single zone. Indicative durations of a constructed example.', alt: 'Twelve-week calendar: scoping (accented), tradesperson app and vetting, customer app, dispatch and notifications, credit, receipts and reviews, closed launch.' },
    couches: { title: 'What is inside a matching platform, in five layers', layers: [
      { label: 'Customer', items: [{ name: 'The customer app: the request in three screens, photos, point on the map, tracking, review', sub: 'asking without phoning' }] },
      { label: 'Tradesperson', items: [{ name: 'The tradesperson app: requests received, one-tap acceptance, diary, zone, credit left', sub: 'answering from a job site' }] },
      { label: 'Dispatch', items: [{ name: 'Dispatch: trade, zone, availability, radius, time to accept, re-sending', sub: 'every request finds a taker, or you know it', accent: true }] },
      { label: 'Trust', items: [{ name: 'Trust: documents checked, reviews after a real job, disputes, the work redone if needed', sub: 'why come back through the platform' }] },
      { label: 'Steering', items: [{ name: 'Steering: requests served, time to accept, cancellations, credit, per zone and per trade', sub: 'knowing when to open another zone' }] },
    ], caption: 'Figure 6 · Five layers. The accented layer is dispatch: it decides whether a request finds a taker within minutes.', alt: 'Five layers: the customer app; the tradesperson app; dispatch (accented); trust; steering.' },
  },
  ar: {
    cover: { eyebrow: 'منصة ربط · الجزائر · 2027', title: ['منصة ربط بالحرفيين:', 'حي واحد، وثلاث مهن، أولاً'], subtitle: 'طلب في ثلاث شاشات، إرسال إلى الحرفيين القريبين، التحقق، التقييمات، النقد، والرصيد المسبق', left: { label: 'في كامل الولاية', sub: 'دون جواب' }, right: { label: 'في ثلاث بلديات', sub: 'قُبل في 4 دقائق' } },
    demande: { title: 'طلب، في ست مراحل', items: [
      { label: 'وصف الحاجة', sub: 'المهنة، الصور، نقطة على الخريطة، والفترة' },
      { label: 'الإرسال', sub: 'إلى الحرفيين القريبين والمتاحين', accent: true },
      { label: 'القبول', sub: 'أول من يقبل، أو عرض سعر' },
      { label: 'التدخل', sub: 'الوصول، العمل، وتأكيد السعر' },
      { label: 'الدفع', sub: 'نقداً للحرفي، ووصل في التطبيق' },
      { label: 'التقييم', sub: 'يُعطى بعد تدخل حقيقي' },
    ], caption: 'الشكل 1 · ست مراحل. المرحلة المبرزة هي الإرسال: الطلب لا قيمة له إلا إذا وصل، في الدقيقة، إلى حرفيين قريبين ومتاحين.', alt: 'ست مراحل: وصف الحاجة، الإرسال (مبرز)، القبول، التدخل، الدفع، والتقييم.' },
    densite: { caption: 'الشكل 2 · الحرفيون الاثنا عشر أنفسهم: في ثلاث بلديات متجاورة، يُقبَل الطلب في 4 دقائق؛ وموزَّعين على كامل الولاية، يبقى دون جواب. مواقع خيالية.' },
    modeles: { title: 'خمس طرق للكسب، وما قد يسوء', columns: ['كيف يصل المال', 'ما قد يسوء'], rows: [
      { label: 'عمولة بعد التدخل', cells: ['الحرفي يدفع نسبة بعد ذلك', 'تدخلات غير مصرَّح بها، تذكير، ومبالغ غير مدفوعة'] },
      { label: 'رسم لكل طلب، على رصيد مسبق', cells: ['مبلغ ثابت يُقتطَع عند كل قبول', 'طلبات وهمية تُرَدّ قيمتها'] },
      { label: 'اشتراك شهري للحرفي', cells: ['مبلغ جزافي في الشهر، مهما كان الحجم', 'صعب البيع قبل وجود طلبات'] },
      { label: 'سعر ثابت يُدفَع عبر الإنترنت', cells: ['الزبون يدفع بالبطاقة، والمنصة تحوّل', 'بطاقات قليلة، وسعر يتغيّر في المكان'] },
      { label: 'إبراز مدفوع', cells: ['الحرفيون يدفعون للظهور أولاً', 'الثقة تنزل إذا كان الترتيب يُشترى'] },
    ], caption: 'الشكل 3 · خمس طرق للكسب. لا واحدة صالحة في كل مكان: كل واحدة تفشل بطريقتها، والاختيار يُجرَّب على منطقة قبل التوسّع.', alt: 'مصفوفة من خمسة نماذج دخل: عمولة بعد التدخل، رسم لكل طلب على رصيد مسبق، اشتراك شهري، سعر ثابت يُدفَع عبر الإنترنت، وإبراز مدفوع؛ ولكل واحد، كيف يصل المال وما قد يسوء.' },
    encaissement: { caption: 'الشكل 4 · على ألف تدخل يُدفَع نقداً: 280 ألف دينار محصَّلة من 400 ألف مستحقة بالعمولة، و250 ألفاً محصَّلة مسبقاً بالرصيد المسبق. مبالغ خيالية.' },
    calendrier: { title: 'اثنا عشر أسبوعاً، لمنطقة واحدة وثلاث مهن', unit: 'أسبوع', items: [
      { label: 'التأطير', note: 'المنطقة، المهن الثلاث، أسعار مرجعية، ونموذج الدخل الذي يُجرَّب', from: 0, to: 1, accent: true },
      { label: 'تطبيق الحرفي والتحقق', note: 'التسجيل، الوثائق، المنطقة، التوفر، والطلبات المستلَمة', from: 1, to: 5 },
      { label: 'تطبيق الزبون', note: 'طلب في ثلاث شاشات، صور، نقطة على الخريطة، ومتابعة', from: 3, to: 7 },
      { label: 'التوزيع والإشعارات', note: 'المحيط، التوفر، أجل القبول، وإعادة إرسال طلب دون جواب', from: 5, to: 9 },
      { label: 'الرصيد، الوصولات، والتقييمات', note: 'شراء الرصيد، الرسم عند القبول، الرد، الوصل، والتقييم', from: 7, to: 10 },
      { label: 'انطلاق مغلق', note: 'خمسون حرفياً متحقَّقاً منهم، منطقة واحدة، وطلبات حقيقية', from: 9, to: 12 },
    ], caption: 'الشكل 5 · اثنا عشر أسبوعاً في المثال. الفترة المبرزة هي الأولى؛ والانطلاق مغلق، بخمسين حرفياً متحقَّقاً منهم في منطقة واحدة. مدد تقريبية لمثال مركَّب.', alt: 'رزنامة من اثني عشر أسبوعاً: التأطير (مبرز)، تطبيق الحرفي والتحقق، تطبيق الزبون، التوزيع والإشعارات، الرصيد والوصولات والتقييمات، ثم انطلاق مغلق.' },
    couches: { title: 'ما يوجد في منصة ربط، في خمس طبقات', layers: [
      { label: 'الزبون', items: [{ name: 'تطبيق الزبون: الطلب في ثلاث شاشات، صور، نقطة على الخريطة، متابعة، وتقييم', sub: 'الطلب دون اتصال هاتفي' }] },
      { label: 'الحرفي', items: [{ name: 'تطبيق الحرفي: الطلبات المستلَمة، قبول بحركة واحدة، مفكرة، منطقة، والرصيد الباقي', sub: 'الرد من ورشة العمل' }] },
      { label: 'التوزيع', items: [{ name: 'التوزيع: المهنة، المنطقة، التوفر، محيط الإرسال، أجل القبول، وإعادة الإرسال', sub: 'كل طلب يجد من يقبله، أو يُعرف ذلك', accent: true }] },
      { label: 'الثقة', items: [{ name: 'الثقة: وثائق متحقَّق منها، تقييمات بعد تدخل حقيقي، نزاعات، وإعادة العمل', sub: 'لماذا يُعاد المرور عبر المنصة' }] },
      { label: 'القيادة', items: [{ name: 'القيادة: الطلبات الملبّاة، أجل القبول، الإلغاءات، والأرصدة، لكل منطقة ولكل مهنة', sub: 'معرفة متى تُفتح منطقة أخرى' }] },
    ], caption: 'الشكل 6 · خمس طبقات. الطبقة المبرزة هي التوزيع: هو الذي يقرّر هل يجد الطلب من يقبله في بضع دقائق.', alt: 'خمس طبقات: تطبيق الزبون؛ تطبيق الحرفي؛ التوزيع (مبرز)؛ الثقة؛ والقيادة.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = SC[locale] || SC.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      demande: { svg: steps({ title: t.demande.title, steps: t.demande.items, arrows: true, rtl }), caption: t.demande.caption, alt: t.demande.alt },
      densite: { svg: densite(e.densite, rtl), caption: t.densite.caption, alt: e.densite.alt },
      modeles: { svg: matrix({ title: t.modeles.title, columns: t.modeles.columns, rows: t.modeles.rows, rtl }), caption: t.modeles.caption, alt: t.modeles.alt },
      encaissement: { svg: encaissement(e.encaissement, rtl), caption: t.encaissement.caption, alt: e.encaissement.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 12, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
    },
  };
}
