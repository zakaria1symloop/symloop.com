import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { paths, ledger, STRINGS as DP } from './custom/dualpay.mjs';
export const slug = 'client-en-france-paie-en-euros-service-en-algerie-application-2027-deux-encaissements-deux-devises-taux-fige-rapprochement-remboursement';
const T = {
  fr: {
    cover: { eyebrow: 'Paiement · Diaspora · Deux devises · 2027', title: ['« Le client en France', 'veut payer en euros,', 'le service est à Alger »'], subtitle: 'Ce qu’on construit pour encaisser les deux : un prix catalogue en dinars, un prix affiché dans la devise du client avec un taux figé à la commande, deux prestataires et deux pages de paiement, une seule commande et un seul état, un rapprochement par canal et un remboursement par le même chemin', left: { label: 'Un virement et une capture d’écran', sub: 'et trois jours pour savoir qui a payé' }, right: { label: 'Deux chemins, une commande', sub: 'et le gérant qui sait à 7 h' } },
    etapes: { title: 'Ce que voit le client, en six étapes', items: [
      { label: 'Voir le prix dans sa devise', sub: 'euros pour une carte française, dinars pour une carte algérienne ; taux figé' },
      { label: 'Choisir le moyen', sub: 'carte internationale, ou CIB et Edahabia ; le canal en découle' },
      { label: 'Payer sur la page du prestataire', sub: 'montant et devise fixés côté serveur ; 3-D Secure si la banque l’exige', accent: true },
      { label: 'Revenir sur l’application', sub: 'le retour du navigateur n’est pas une preuve ; on attend le webhook' },
      { label: 'Recevoir la confirmation', sub: 'WhatsApp ou e-mail, dans sa devise, avec le reçu' },
      { label: 'Être remboursé si besoin', sub: 'par le même canal, dans la même devise, au même montant' },
    ], caption: 'Figure 1 · L’étape accentuée est celle où l’on ne fait jamais confiance à l’écran : le montant et la devise sont fixés côté serveur avant la redirection, et la banque du client en Europe peut exiger une authentification forte. La quatrième étape est la règle déjà posée pour le paiement local : le retour du navigateur n’est pas une preuve, seul le webhook l’est.', alt: 'Six étapes : voir le prix dans sa devise, choisir le moyen, payer sur la page du prestataire (accentuée), revenir sur l’application, recevoir la confirmation, être remboursé si besoin.' },
    couches: { title: 'Encaisser en deux devises, en cinq couches', layers: [
      { label: 'Prix et devises', items: [{ name: 'Prix catalogue en dinars ; prix affiché dans la devise du client, taux de référence, arrondi écrit, figé à la commande', sub: 'le client ne choisit pas une devise, il voit la sienne' }] },
      { label: 'Deux encaissements', items: [{ name: 'Prestataire local pour CIB et Edahabia en dinars ; prestataire étranger sur une entité hors d’Algérie pour les cartes en euros', sub: 'les prestataires étrangers n’ouvrent pas de compte à une entreprise algérienne : l’entité à l’étranger est la condition' }] },
      { label: 'Commande unique', items: [{ name: 'Une fiche, une machine à états, un traitement de webhook pour les deux : signature, identifiant idempotent, montant comparé', sub: 'le canal est un champ de la commande, pas une autre commande', accent: true }] },
      { label: 'Rapprochement', items: [{ name: 'Par canal et par devise, contre le versement du prestataire : frais, net, date ; l’équivalent en dinars sert au chiffre d’affaires', sub: 'deux totaux, jamais additionnés' }] },
      { label: 'Remboursements et litiges', items: [{ name: 'Remboursement par le canal d’origine dans la devise d’origine ; contestations traitées avec les preuves de la commande ; avoir lié', sub: 'le client récupère ce qu’il a payé, au centime, sans taux' }] },
    ], caption: 'Figure 2 · La couche accentuée est celle qui évite la double comptabilité : deux prestataires et deux pages de paiement, mais une seule commande, un seul état et un seul traitement qui décide. La deuxième couche porte la condition que ce guide ne peut pas lever à votre place : qui encaisse les euros, et par quelle entité.', alt: 'Cinq couches : prix et devises, deux encaissements, commande unique (accentuée), rapprochement, remboursements et litiges.' },
    chemins: { caption: 'Figure 3 · Deux clients, deux chemins d’encaissement, une seule commande. Le client à Paris voit 160 euros, calculés depuis 24 000 dinars au taux de référence figé à 10 h 02, paie sur la page du prestataire étranger avec l’authentification forte que sa banque exige, et le prestataire envoie un webhook signé. Le client à Alger voit 24 000 dinars et paie sur la page du prestataire local. Les deux webhooks arrivent sur le même traitement et la même fiche. Montants, frais et taux sont un exemple construit ; l’entité qui encaisse et le régime des changes sont à régler avec le comptable et le conseil.' },
    rapprochement: { caption: 'Figure 4 · Le rapprochement du 10 novembre : chaque commande porte son canal, le montant payé par le client dans sa devise, le taux figé, l’équivalent en dinars, les frais et le net attendus, et la date de versement du prestataire. Les deux canaux se rapprochent chacun dans sa devise contre le versement de son prestataire, et ne s’additionnent jamais ; un écart sur une ligne locale est marqué pour être expliqué ; le remboursement repart par le canal d’origine. Les montants sont un exemple construit.' },
    situations: { title: 'Six situations réelles, et ce que l’application fait', columns: ['Ce qui se passe', 'Ce que l’application fait'], rows: [
      { label: 'Le cousin paie par virement et envoie une capture', cells: ['Trois jours pour savoir qui a payé quoi ; la commande part en retard', 'page de paiement en euros ; webhook ; commande payée à la seconde'] },
      { label: 'Le prix en euros change chaque jour', cells: ['Le client a vu 160 €, il est débité 164 € ; il conteste', 'taux figé à la commande, sur la fiche ; le montant débité est celui affiché'] },
      { label: 'La banque française refuse la carte', cells: ['Paiement refusé sans explication ; le client abandonne', 'parcours avec authentification forte ; message clair ; relance WhatsApp'] },
      { label: 'Deux commandes pour un paiement', cells: ['Le client a payé en euros, l’employé a créé une commande en dinars', 'une seule commande, le canal est un champ ; second paiement refusé'] },
      { label: 'Le versement du prestataire ne colle pas', cells: ['Le total reçu est inférieur au total vendu ; personne ne sait pourquoi', 'rapprochement par canal : frais, remboursements, délai ; écart par ligne'] },
      { label: 'Le client demande un remboursement', cells: ['Virement manuel, mauvais montant, mauvaise devise', 'remboursement par le canal d’origine, même devise, même montant ; avoir'] },
    ], caption: 'Figure 5 · Les trois premières lignes se règlent par la page de paiement en euros, le taux figé et le parcours avec authentification forte ; les trois suivantes par la commande unique, le rapprochement par canal et le remboursement par le même chemin. Aucune ne se règle par un cousin plus réactif sur WhatsApp.', alt: 'Matrice de six situations : virement et capture d’écran, prix qui change, carte refusée, deux commandes pour un paiement, versement qui ne colle pas, remboursement ; ce qui se passe et ce que l’application fait.' },
    calendrier: { title: 'Encaisser en deux devises en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Décisions', note: 'entité qui encaisse les euros, prestataires, taux de référence et règle d’arrondi, qui paie les frais, règles de remboursement ; signées avec le comptable', from: 0, to: 1 },
      { label: 'Prix et devises', note: 'prix catalogue en dinars, prix affiché dans la devise du client, taux figé à la commande, affichage et reçus bilingues', from: 1, to: 2 },
      { label: 'Encaissement euros', note: 'page du prestataire étranger, authentification forte, webhook signé, idempotence, tests avec cartes de test', from: 2, to: 3, accent: true },
      { label: 'Commande unique', note: 'un traitement de webhook pour les deux prestataires, canal sur la fiche, machine à états, confirmation au client', from: 3, to: 4 },
      { label: 'Rapprochement', note: 'frais et net attendus par canal, import des versements, écarts par ligne, remboursements par canal d’origine', from: 4, to: 5 },
      { label: 'Mesure', note: 'part des commandes par canal, taux de réussite des paiements en euros, écarts de rapprochement, revue du lundi', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six semaines, et la première sans code : l’entité qui encaisse, le taux de référence et qui paie les frais sont des décisions à prendre avec le comptable avant d’écrire une ligne. La troisième semaine est accentuée parce que l’encaissement en euros est la partie neuve ; l’encaissement local suit le guide déjà publié.', alt: 'Frise de six semaines : décisions, prix et devises, encaissement euros (accentué), commande unique, rapprochement, mesure.' },
  },
  en: {
    cover: { eyebrow: 'Payment · Diaspora · Two currencies · 2027', title: ['“The customer in France', 'wants to pay in euros,', 'the service is in Algiers”'], subtitle: 'What gets built to collect both: a catalogue price in dinars, a price shown in the customer’s currency with a rate frozen at order time, two providers and two payment pages, one order and one state, reconciliation per channel and a refund through the same path', left: { label: 'A transfer and a screenshot', sub: 'and three days to know who paid' }, right: { label: 'Two paths, one order', sub: 'and a manager who knows at 7:00' } },
    etapes: { title: 'What the customer sees, in six steps', items: [
      { label: 'See the price in their currency', sub: 'euros for a French card, dinars for an Algerian card; frozen rate' },
      { label: 'Choose the method', sub: 'international card, or CIB and Edahabia; the channel follows' },
      { label: 'Pay on the provider’s page', sub: 'amount and currency set server side; 3-D Secure if the bank requires it', accent: true },
      { label: 'Return to the application', sub: 'the browser return is not proof; we wait for the webhook' },
      { label: 'Receive the confirmation', sub: 'WhatsApp or e-mail, in their currency, with the receipt' },
      { label: 'Be refunded if needed', sub: 'through the same channel, same currency, same amount' },
    ], caption: 'Figure 1 · The accented step is where the screen is never trusted: amount and currency are set server side before the redirect, and the customer’s bank in Europe may require strong authentication. The fourth step is the rule already set for local payment: the browser return is not proof, only the webhook is.', alt: 'Six steps: see the price in their currency, choose the method, pay on the provider’s page (accented), return to the application, receive the confirmation, be refunded if needed.' },
    couches: { title: 'Collecting in two currencies, in five layers', layers: [
      { label: 'Prices and currencies', items: [{ name: 'Catalogue price in dinars; price shown in the customer’s currency, reference rate, written rounding, frozen at order time', sub: 'the customer does not choose a currency, they see theirs' }] },
      { label: 'Two collections', items: [{ name: 'Local provider for CIB and Edahabia in dinars; foreign provider on an entity outside Algeria for cards in euros', sub: 'foreign providers do not open accounts for an Algerian company: the entity abroad is the condition' }] },
      { label: 'Single order', items: [{ name: 'One record, one state machine, one webhook handler for both: signature, idempotent identifier, amount compared', sub: 'the channel is a field of the order, not another order', accent: true }] },
      { label: 'Reconciliation', items: [{ name: 'Per channel and per currency, against the provider’s payout: fees, net, date; the dinar equivalent serves revenue', sub: 'two totals, never added up' }] },
      { label: 'Refunds and disputes', items: [{ name: 'Refund through the original channel in the original currency; disputes handled with the order’s evidence; linked credit note', sub: 'the customer gets back what they paid, to the cent, without a rate' }] },
    ], caption: 'Figure 2 · The accented layer is what avoids double bookkeeping: two providers and two payment pages, but one order, one state and one handler that decides. The second layer carries the condition this guide cannot lift for you: who collects the euros, and through which entity.', alt: 'Five layers: prices and currencies, two collections, single order (accented), reconciliation, refunds and disputes.' },
    chemins: { caption: 'Figure 3 · Two customers, two payment paths, one order. The customer in Paris sees 160 euros, computed from 24,000 dinars at the reference rate frozen at 10:02, pays on the foreign provider’s page with the strong authentication their bank requires, and the provider sends a signed webhook. The customer in Algiers sees 24,000 dinars and pays on the local provider’s page. Both webhooks land on the same handler and the same record. Amounts, fees and rate are a constructed example; the collecting entity and the foreign exchange regime are to be settled with the accountant and counsel.' },
    rapprochement: { caption: 'Figure 4 · The 10 November reconciliation: every order carries its channel, the amount paid by the customer in their currency, the frozen rate, the dinar equivalent, the expected fees and net, and the provider’s payout date. The two channels each reconcile in their own currency against their provider’s payout, and are never added up; a gap on a local row is flagged to be explained; the refund goes back through the original channel. Amounts are a constructed example.' },
    situations: { title: 'Six real situations, and what the application does', columns: ['What happens', 'What the application does'], rows: [
      { label: 'The cousin pays by transfer and sends a screenshot', cells: ['Three days to know who paid what; the order leaves late', 'euro payment page; webhook; order paid within the second'] },
      { label: 'The euro price changes every day', cells: ['The customer saw €160, is charged €164; they dispute', 'rate frozen at order time, on the record; the charged amount is the shown one'] },
      { label: 'The French bank declines the card', cells: ['Payment refused without explanation; the customer gives up', 'flow with strong authentication; clear message; WhatsApp follow-up'] },
      { label: 'Two orders for one payment', cells: ['The customer paid in euros, the employee created an order in dinars', 'one order, the channel is a field; second payment refused'] },
      { label: 'The provider’s payout does not match', cells: ['Total received is below total sold; nobody knows why', 'reconciliation per channel: fees, refunds, delay; gap per row'] },
      { label: 'The customer asks for a refund', cells: ['Manual transfer, wrong amount, wrong currency', 'refund through the original channel, same currency, same amount; credit note'] },
    ], caption: 'Figure 5 · The first three rows are settled by the euro payment page, the frozen rate and the strong-authentication flow; the next three by the single order, reconciliation per channel and refund through the same path. None is settled by a cousin who is quicker on WhatsApp.', alt: 'Matrix of six situations: transfer and screenshot, changing price, declined card, two orders for one payment, payout that does not match, refund; what happens and what the application does.' },
    calendrier: { title: 'Collecting in two currencies in 2027, in weeks', unit: 'wk', items: [
      { label: 'Decisions', note: 'entity collecting the euros, providers, reference rate and rounding rule, who pays the fees, refund rules; signed with the accountant', from: 0, to: 1 },
      { label: 'Prices and currencies', note: 'catalogue price in dinars, price shown in the customer’s currency, rate frozen at order time, bilingual display and receipts', from: 1, to: 2 },
      { label: 'Euro collection', note: 'foreign provider’s page, strong authentication, signed webhook, idempotency, tests with test cards', from: 2, to: 3, accent: true },
      { label: 'Single order', note: 'one webhook handler for both providers, channel on the record, state machine, customer confirmation', from: 3, to: 4 },
      { label: 'Reconciliation', note: 'expected fees and net per channel, payout import, gaps per row, refunds through the original channel', from: 4, to: 5 },
      { label: 'Measurement', note: 'share of orders per channel, success rate of euro payments, reconciliation gaps, Monday review', from: 5, to: 6 },
    ], caption: 'Figure 6 · Six weeks, and the first without code: the collecting entity, the reference rate and who pays the fees are decisions to take with the accountant before writing a line. The third week is accented because euro collection is the new part; local collection follows the guide already published.', alt: 'Six-week timeline: decisions, prices and currencies, euro collection (accented), single order, reconciliation, measurement.' },
  },
  ar: {
    cover: { eyebrow: 'دفع · جالية · عملتان · 2027', title: ['«الزبون في فرنسا', 'يريد الدفع باليورو،', 'والخدمة في الجزائر»'], subtitle: 'ما يُبنى لتحصيل الاثنين: سعر كتالوج بالدينار، سعر معروض بعملة الزبون بسعر صرف مجمَّد عند الطلب، مزوّدان وصفحتا دفع، طلبية واحدة وحالة واحدة، مطابقة لكل قناة واسترداد عبر المسار نفسه', left: { label: 'تحويل ولقطة شاشة', sub: 'وثلاثة أيام لمعرفة من دفع' }, right: { label: 'مساران، طلبية واحدة', sub: 'ومسيّر يعرف عند 07:00' } },
    etapes: { title: 'ما يراه الزبون، في ست خطوات', items: [
      { label: 'رؤية السعر بعملته', sub: 'يورو لبطاقة فرنسية، دينار لبطاقة جزائرية؛ سعر مجمَّد' },
      { label: 'اختيار الوسيلة', sub: 'بطاقة دولية، أو CIB والذهبية؛ القناة تنتج عن ذلك' },
      { label: 'الدفع على صفحة المزوّد', sub: 'المبلغ والعملة من جهة الخادم؛ 3-D Secure إن طلبه البنك', accent: true },
      { label: 'العودة إلى التطبيق', sub: 'عودة المتصفح ليست إثباتاً؛ ننتظر الـ webhook' },
      { label: 'تلقّي التأكيد', sub: 'WhatsApp أو بريد، بعملته، مع الوصل' },
      { label: 'الاسترداد عند الحاجة', sub: 'عبر القناة نفسها، بالعملة نفسها، بالمبلغ نفسه' },
    ], caption: 'الشكل 1 · الخطوة المميزة هي التي لا نثق فيها بالشاشة أبداً: يُحدَّد المبلغ والعملة من جهة الخادم قبل إعادة التوجيه، وقد يطلب بنك الزبون في أوروبا مصادقة قوية. والخطوة الرابعة هي القاعدة الموضوعة أصلاً للدفع المحلي: عودة المتصفح ليست إثباتاً، والـ webhook وحده هو الإثبات.', alt: 'ست خطوات: رؤية السعر بعملته، اختيار الوسيلة، الدفع على صفحة المزوّد (مميزة)، العودة إلى التطبيق، تلقّي التأكيد، الاسترداد عند الحاجة.' },
    couches: { title: 'التحصيل بعملتين، في خمس طبقات', layers: [
      { label: 'الأسعار والعملات', items: [{ name: 'سعر كتالوج بالدينار؛ سعر معروض بعملة الزبون، سعر مرجعي، تقريب مكتوب، مجمَّد عند الطلب، محفوظ على البطاقة', sub: 'الزبون لا يختار عملة، يرى عملته' }] },
      { label: 'تحصيلان', items: [{ name: 'مزوّد محلي لـ CIB والذهبية بالدينار؛ مزوّد أجنبي على كيان خارج الجزائر للبطاقات باليورو', sub: 'المزوّدون الأجانب لا يفتحون حساباً لشركة جزائرية: الكيان في الخارج هو الشرط' }] },
      { label: 'طلبية واحدة', items: [{ name: 'بطاقة واحدة، آلة حالات واحدة، معالج webhook واحد للاثنين: توقيع، معرّف غير مكرِّر، مبلغ وعملة مقارنان', sub: 'القناة حقل في الطلبية لا طلبية أخرى', accent: true }] },
      { label: 'المطابقة', items: [{ name: 'لكل قناة وعملة مقابل دفعة المزوّد: رسوم، صافٍ، تاريخ؛ المكافئ بالدينار لرقم الأعمال', sub: 'مجموعان لا يُجمعان أبداً' }] },
      { label: 'الاستردادات والنزاعات', items: [{ name: 'استرداد عبر القناة الأصلية بالعملة الأصلية؛ اعتراضات تُعالَج بأدلة الطلبية؛ إشعار دائن مرتبط', sub: 'يسترد الزبون ما دفعه، بالسنتيم، بلا سعر صرف' }] },
    ], caption: 'الشكل 2 · الطبقة المميزة هي ما يجنّب المحاسبة المزدوجة: مزوّدان وصفحتا دفع، لكن طلبية واحدة وحالة واحدة ومعالج واحد يقرر. والطبقة الثانية تحمل الشرط الذي لا يستطيع هذا الدليل رفعه عنكم: من يحصّل اليورو، وعبر أي كيان.', alt: 'خمس طبقات: الأسعار والعملات، تحصيلان، طلبية واحدة (مميزة)، المطابقة، الاستردادات والنزاعات.' },
    chemins: { caption: 'الشكل 3 · زبونان، مساران للتحصيل، طلبية واحدة. يرى الزبون في باريس 160 يورو محسوبة من 24,000 دينار بالسعر المرجعي المجمَّد عند 10:02، ويدفع على صفحة المزوّد الأجنبي بالمصادقة القوية التي يطلبها بنكه، ويرسل المزوّد webhook موقَّعاً. ويرى الزبون في الجزائر 24,000 دينار ويدفع على صفحة المزوّد المحلي. ويصل الـ webhook الاثنان إلى المعالج نفسه والبطاقة نفسها. والمبالغ والرسوم والسعر مثال مبني؛ والكيان المحصِّل ونظام الصرف يُحسمان مع المحاسب والمستشار.' },
    rapprochement: { caption: 'الشكل 4 · مطابقة 10 نوفمبر: كل طلبية تحمل قناتها والمبلغ الذي دفعه الزبون بعملته والسعر المجمَّد والمكافئ بالدينار والرسوم والصافي المنتظرَين وتاريخ دفعة المزوّد. وتُطابَق القناتان كل بعملتها مقابل دفعة مزوّدها ولا تُجمعان أبداً؛ ويُوسم فارق في سطر محلي ليُفسَّر؛ ويعود الاسترداد عبر القناة الأصلية. والمبالغ مثال مبني.' },
    situations: { title: 'ست حالات حقيقية، وما يفعله التطبيق', columns: ['ما يحدث', 'ما يفعله التطبيق'], rows: [
      { label: 'ابن العم يدفع بتحويل ويرسل لقطة شاشة', cells: ['ثلاثة أيام لمعرفة من دفع ماذا؛ الطلبية تنطلق متأخرة', 'صفحة دفع باليورو؛ webhook؛ طلبية مدفوعة في الثانية'] },
      { label: 'السعر باليورو يتغير كل يوم', cells: ['رأى الزبون 160 € وخُصم 164 €؛ يعترض', 'سعر مجمَّد عند الطلب على البطاقة؛ المبلغ المخصوم هو المعروض'] },
      { label: 'البنك الفرنسي يرفض البطاقة', cells: ['دفع مرفوض بلا تفسير؛ الزبون يتخلى', 'مسار بمصادقة قوية؛ رسالة واضحة؛ متابعة WhatsApp'] },
      { label: 'طلبيتان لدفعة واحدة', cells: ['دفع الزبون باليورو وأنشأ الموظف طلبية بالدينار', 'طلبية واحدة والقناة حقل؛ الدفع الثاني مرفوض'] },
      { label: 'دفعة المزوّد لا تطابق', cells: ['المجموع المستلَم أقل من المباع؛ لا أحد يعرف لماذا', 'مطابقة لكل قناة: رسوم، استردادات، أجل؛ فارق لكل سطر'] },
      { label: 'الزبون يطلب استرداداً', cells: ['تحويل يدوي، مبلغ خاطئ، عملة خاطئة', 'استرداد عبر القناة الأصلية بالعملة والمبلغ نفسيهما؛ إشعار دائن'] },
    ], caption: 'الشكل 5 · الأسطر الثلاثة الأولى تُحل بصفحة الدفع باليورو والسعر المجمَّد ومسار المصادقة القوية؛ والثلاثة التالية بالطلبية الواحدة والمطابقة لكل قناة والاسترداد عبر المسار نفسه. ولا واحد يُحل بابن عم أسرع على WhatsApp.', alt: 'مصفوفة ست حالات: تحويل ولقطة شاشة، سعر يتغير، بطاقة مرفوضة، طلبيتان لدفعة واحدة، دفعة لا تطابق، استرداد؛ ما يحدث وما يفعله التطبيق.' },
    calendrier: { title: 'التحصيل بعملتين سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'القرارات', note: 'الكيان المحصِّل لليورو، المزوّدون، السعر المرجعي وقاعدة التقريب، من يدفع الرسوم، قواعد الاسترداد؛ موقَّعة مع المحاسب', from: 0, to: 1 },
      { label: 'الأسعار والعملات', note: 'سعر كتالوج بالدينار، سعر معروض بعملة الزبون، سعر مجمَّد عند الطلب، عرض ووصولات ثنائية اللغة', from: 1, to: 2 },
      { label: 'تحصيل اليورو', note: 'صفحة المزوّد الأجنبي، مصادقة قوية، webhook موقَّع، عدم تكرار، اختبارات ببطاقات اختبار', from: 2, to: 3, accent: true },
      { label: 'الطلبية الواحدة', note: 'معالج webhook واحد للمزوّدين، القناة على البطاقة، آلة حالات، تأكيد للزبون', from: 3, to: 4 },
      { label: 'المطابقة', note: 'رسوم وصافٍ منتظران لكل قناة، استيراد الدفعات، فوارق لكل سطر، استردادات عبر القناة الأصلية', from: 4, to: 5 },
      { label: 'القياس', note: 'حصة الطلبيات لكل قناة، نسبة نجاح الدفع باليورو، فوارق المطابقة، مراجعة الاثنين', from: 5, to: 6 },
    ], caption: 'الشكل 6 · ستة أسابيع، والأول بلا كود: الكيان المحصِّل والسعر المرجعي ومن يدفع الرسوم قرارات تُتخذ مع المحاسب قبل كتابة سطر. والأسبوع الثالث مميز لأن تحصيل اليورو هو الجزء الجديد؛ والتحصيل المحلي يتبع الدليل المنشور أصلاً.', alt: 'خط زمني من ستة أسابيع: القرارات، الأسعار والعملات، تحصيل اليورو (مميز)، الطلبية الواحدة، المطابقة، القياس.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const e = DP[locale] || DP.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      etapes: { svg: steps({ title: t.etapes.title, steps: t.etapes.items, arrows: true, rtl }), caption: t.etapes.caption, alt: t.etapes.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      chemins: { svg: paths(e.paths, rtl), caption: t.chemins.caption, alt: e.paths.alt },
      rapprochement: { svg: ledger(e.ledger, rtl), caption: t.rapprochement.caption, alt: e.ledger.alt },
      situations: { svg: matrix({ title: t.situations.title, columns: t.situations.columns, rows: t.situations.rows, rtl }), caption: t.situations.caption, alt: t.situations.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 6, tick: 1, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
