import { cover, steps, layers, matrix, timeline } from '../../lib/visuals/index.mjs';

export const slug = 'agent-ia-entreprise-algerie-2027-par-ou-commencer-ce-qui-marche';

const T = {
  fr: {
    cover: { eyebrow: 'Problème · IA en entreprise', title: ['Un agent IA dans', 'mon entreprise en 2027 :', 'par où commencer.'], subtitle: 'Les usages qui paient en Algérie et ceux qui ne servent à rien, ce qui doit exister avant, les quatre niveaux d’autonomie à franchir dans l’ordre, et les six mois pour y arriver.', left: { label: 'Aujourd’hui', sub: 'ChatGPT ouvert dans un onglet, rien de branché' }, right: { label: 'Mi-2027', sub: 'un agent qui relance, répond et rend compte' }, note: 'Algérie · 2027' },
    uses: { title: 'Les usages d’un agent IA, classés par gain pour une PME algérienne', columns: ['Gain', 'Ce qui doit exister avant'], rows: [
      { label: 'Relances de paiement et de commande', cells: [2, 'Un échéancier ou des commandes dans un système, pas dans un cahier'] },
      { label: 'Support client en arabe, français et darija, 24h/24', cells: [2, 'Règles, horaires, FAQ écrites ; un back-office où lire le statut'] },
      { label: 'Qualification des demandes WhatsApp', cells: [2, 'Un pipeline ou un CRM où déposer la demande qualifiée'] },
      { label: 'Résumé du jour pour le dirigeant', cells: [1, 'Ventes, encaissements et incidents dans une seule base'] },
      { label: 'Saisie de factures et de bons', cells: [1, 'Un volume de papier qui justifie l’effort'] },
      { label: 'Rédaction marketing et posts', cells: [1, 'Rien ; mais le gain est faible et tout le monde l’a'] },
      { label: 'Remplacer un commercial ou décider un crédit', cells: [0, 'Hors sujet : l’agent prépare, l’humain décide'] },
    ], legend: '●  gain fort      ◐  gain moyen      ○  hors sujet', caption: 'Figure 1 · Les trois usages forts ont le même prérequis : l’information existe dans un système. Un agent branché sur un cahier n’a rien à lire.', alt: 'Matrice des usages d’un agent IA pour une PME algérienne : relances, support trilingue et qualification WhatsApp à gain fort ; résumé du jour, saisie de documents et rédaction à gain moyen ; remplacer un commercial hors sujet.' },
    levels: { title: 'Les quatre niveaux d’autonomie, à franchir dans l’ordre', items: [
      { n: 'NIVEAU 1', label: 'Il répond', sub: 'Statut d’une commande, horaires, règlement, solde. Lecture seule, en trois langues.' },
      { n: 'NIVEAU 2', label: 'Il propose', sub: 'Brouillon de relance, rendez-vous suggéré, réponse préparée. Un humain valide avant envoi.' },
      { n: 'NIVEAU 3', label: 'Il agit dans des limites', sub: 'Relance envoyée, rendez-vous confirmé, geste commercial sous un seuil. Au-delà, il escalade.', accent: true },
      { n: 'NIVEAU 4', label: 'Il agit et rend compte', sub: 'Résumé du jour, exceptions remontées, chiffres de ce qu’il a fait. L’humain supervise.' },
    ], caption: 'Figure 2 · Sauter du niveau 1 au niveau 4 en un mois est la façon la plus sûre de perdre la confiance de l’équipe et des clients.', alt: 'Quatre niveaux d’autonomie d’un agent IA : il répond, il propose, il agit dans des limites, il agit et rend compte.' },
    stack: { title: 'Comment un agent IA s’insère dans l’entreprise', layers: [
      { label: 'Canaux', items: [{ name: 'WhatsApp Business', sub: 'là où les clients écrivent déjà', accent: true }, { name: 'Application et site', sub: 'chat intégré, mêmes règles' }, { name: 'E-mail et formulaire', sub: 'demandes B2B, devis' }] },
      { label: 'Agent', items: [{ name: 'Compréhension AR / FR / darija', sub: 'y compris l’arabe écrit en lettres latines' }, { name: 'Règles de l’entreprise', sub: 'ce qu’il peut dire, faire, promettre' }, { name: 'Escalade à un humain', sub: 'dès qu’il n’est pas sûr' }] },
      { label: 'Outils', items: [{ name: 'Lecture et écriture dans le back-office', sub: 'commandes, échéancier, agenda, stock, CRM' }] },
      { label: 'Données', items: [{ name: 'Une seule base, hébergement choisi', sub: 'loi 18-07 ; cloud local ou étranger documenté' }, { name: 'Journal de chaque action', sub: 'qui a dit quoi, qui a fait quoi' }] },
      { label: 'Contrôle', items: [{ name: 'Humain dans la boucle, limites, mesure', sub: 'seuils, revue hebdomadaire, chiffres' }] },
    ], caption: 'Figure 3 · L’agent est la deuxième couche. Sans la troisième, les outils, il parle ; il ne travaille pas.', alt: 'Cinq couches : canaux WhatsApp, application, e-mail ; agent trilingue avec règles et escalade ; outils de lecture et écriture dans le back-office ; données et journal ; contrôle humain.' },
    timeline: { title: 'Six mois, un niveau à la fois', unit: 'mois', items: [
      { label: 'Prérequis : données dans un système', note: 'back-office, échéancier, règles écrites', from: 0, to: 1 },
      { label: 'Niveau 1 · il répond', note: 'WhatsApp et application, lecture seule', from: 1, to: 2 },
      { label: 'Niveau 2 · il propose', note: 'brouillons validés par l’équipe', from: 2, to: 3 },
      { label: 'Niveau 3 · il agit dans des limites', note: 'relances, rendez-vous, seuils', from: 3, to: 5, accent: true },
      { label: 'Niveau 4 · il rend compte', note: 'résumé du jour, mesure, revue', from: 5, to: 6 },
    ], caption: 'Figure 4 · Le premier mois ne contient pas d’IA. C’est le mois qui décide si les cinq suivants servent à quelque chose.', alt: 'Calendrier en mois : prérequis 0 à 1, niveau 1 de 1 à 2, niveau 2 de 2 à 3, niveau 3 de 3 à 5, niveau 4 de 5 à 6.' },
  },
  en: {
    cover: { eyebrow: 'Problem · AI in the company', title: ['An AI agent in', 'my company in 2027:', 'where to start.'], subtitle: 'The uses that pay in Algeria and those that are useless, what must exist first, the four autonomy levels to climb in order, and the six months to get there.', left: { label: 'Today', sub: 'ChatGPT open in a tab, nothing connected' }, right: { label: 'Mid-2027', sub: 'an agent that follows up, answers and reports' }, note: 'Algeria · 2027' },
    uses: { title: 'AI agent uses, ranked by gain for an Algerian SME', columns: ['Gain', 'What must exist first'], rows: [
      { label: 'Payment and order reminders', cells: [2, 'A schedule or orders in a system, not in a notebook'] },
      { label: 'Customer support in Arabic, French and darija, 24/7', cells: [2, 'Written rules, hours, FAQ; a back-office to read status from'] },
      { label: 'Qualifying WhatsApp requests', cells: [2, 'A pipeline or CRM to drop the qualified request into'] },
      { label: 'Daily summary for the owner', cells: [1, 'Sales, receipts and incidents in one single base'] },
      { label: 'Entering invoices and delivery notes', cells: [1, 'A paper volume that justifies the effort'] },
      { label: 'Marketing copy and posts', cells: [1, 'Nothing; but the gain is small and everyone has it'] },
      { label: 'Replacing a salesperson or deciding credit', cells: [0, 'Off topic: the agent prepares, the human decides'] },
    ], legend: '●  strong gain      ◐  medium gain      ○  off topic', caption: 'Figure 1 · The three strong uses share one prerequisite: the information exists in a system. An agent plugged into a notebook has nothing to read.', alt: 'Matrix of AI agent uses for an Algerian SME: reminders, trilingual support and WhatsApp qualification strong; daily summary, document entry and copywriting medium; replacing a salesperson off topic.' },
    levels: { title: 'The four autonomy levels, to climb in order', items: [
      { n: 'LEVEL 1', label: 'It answers', sub: 'Order status, hours, rules, balance. Read-only, in three languages.' },
      { n: 'LEVEL 2', label: 'It proposes', sub: 'Draft reminder, suggested appointment, prepared reply. A human validates before sending.' },
      { n: 'LEVEL 3', label: 'It acts within limits', sub: 'Reminder sent, appointment confirmed, goodwill gesture under a threshold. Beyond, it escalates.', accent: true },
      { n: 'LEVEL 4', label: 'It acts and reports', sub: 'Daily summary, exceptions raised, numbers on what it did. The human supervises.' },
    ], caption: 'Figure 2 · Jumping from level 1 to level 4 in a month is the surest way to lose the trust of the team and the customers.', alt: 'Four autonomy levels of an AI agent: it answers, it proposes, it acts within limits, it acts and reports.' },
    stack: { title: 'How an AI agent fits into the company', layers: [
      { label: 'Channels', items: [{ name: 'WhatsApp Business', sub: 'where customers already write', accent: true }, { name: 'App and website', sub: 'embedded chat, same rules' }, { name: 'E-mail and form', sub: 'B2B requests, quotes' }] },
      { label: 'Agent', items: [{ name: 'AR / FR / darija understanding', sub: 'including Arabic written in Latin letters' }, { name: 'Company rules', sub: 'what it may say, do, promise' }, { name: 'Escalation to a human', sub: 'as soon as it is unsure' }] },
      { label: 'Tools', items: [{ name: 'Read and write in the back-office', sub: 'orders, schedule, calendar, stock, CRM' }] },
      { label: 'Data', items: [{ name: 'One single base, chosen hosting', sub: 'Law 18-07; local or documented foreign cloud' }, { name: 'Log of every action', sub: 'who said what, who did what' }] },
      { label: 'Control', items: [{ name: 'Human in the loop, limits, measurement', sub: 'thresholds, weekly review, numbers' }] },
    ], caption: 'Figure 3 · The agent is the second layer. Without the third, the tools, it talks; it does not work.', alt: 'Five layers: WhatsApp, app and e-mail channels; trilingual agent with rules and escalation; read and write tools in the back-office; data and log; human control.' },
    timeline: { title: 'Six months, one level at a time', unit: 'months', items: [
      { label: 'Prerequisite: data in a system', note: 'back-office, schedule, written rules', from: 0, to: 1 },
      { label: 'Level 1 · it answers', note: 'WhatsApp and app, read-only', from: 1, to: 2 },
      { label: 'Level 2 · it proposes', note: 'drafts validated by the team', from: 2, to: 3 },
      { label: 'Level 3 · it acts within limits', note: 'reminders, appointments, thresholds', from: 3, to: 5, accent: true },
      { label: 'Level 4 · it reports', note: 'daily summary, measurement, review', from: 5, to: 6 },
    ], caption: 'Figure 4 · The first month contains no AI. It is the month that decides whether the next five are worth anything.', alt: 'Timeline in months: prerequisite 0 to 1, level 1 from 1 to 2, level 2 from 2 to 3, level 3 from 3 to 5, level 4 from 5 to 6.' },
  },
  ar: {
    cover: { eyebrow: 'مشكلة · الذكاء الاصطناعي في الشركة', title: ['وكيل ذكاء اصطناعي', 'في شركتي سنة 2027:', 'من أين أبدأ.'], subtitle: 'الاستخدامات المجدية في الجزائر وتلك التي لا تنفع، ما يجب أن يوجد قبلها، مستويات الاستقلالية الأربعة التي تُجتاز بالترتيب، والأشهر الستة للوصول.', left: { label: 'اليوم', sub: 'ChatGPT مفتوح في تبويب، لا شيء موصول' }, right: { label: 'منتصف 2027', sub: 'وكيل يذكّر ويجيب ويقدّم تقريراً' }, note: 'الجزائر · 2027' },
    uses: { title: 'استخدامات وكيل الذكاء الاصطناعي مرتبة حسب الفائدة لمؤسسة جزائرية', columns: ['الفائدة', 'ما يجب أن يوجد قبلها'], rows: [
      { label: 'تذكيرات الدفع والطلبات', cells: [2, 'جدول استحقاقات أو طلبات في نظام، لا في دفتر'] },
      { label: 'دعم الزبائن بالعربية والفرنسية والدارجة على مدار الساعة', cells: [2, 'قواعد ومواعيد وأسئلة شائعة مكتوبة؛ مكتب خلفي يقرأ منه الحالة'] },
      { label: 'تأهيل طلبات واتساب', cells: [2, 'خط أنابيب أو CRM يودَع فيه الطلب المؤهَّل'] },
      { label: 'ملخص اليوم للمسيّر', cells: [1, 'مبيعات وتحصيلات وحوادث في قاعدة واحدة'] },
      { label: 'إدخال الفواتير وسندات التسليم', cells: [1, 'حجم من الورق يبرر الجهد'] },
      { label: 'كتابة تسويقية ومنشورات', cells: [1, 'لا شيء؛ لكن الفائدة ضعيفة والجميع يملكها'] },
      { label: 'استبدال مندوب تجاري أو تقرير قرض', cells: [0, 'خارج الموضوع: الوكيل يحضّر والإنسان يقرر'] },
    ], legend: '●  فائدة قوية      ◐  متوسطة      ○  خارج الموضوع', caption: 'الشكل 1 · الاستخدامات الثلاثة القوية لها الشرط نفسه: المعلومة موجودة في نظام. وكيل موصول بدفتر لا يجد ما يقرأ.', alt: 'مصفوفة استخدامات وكيل الذكاء الاصطناعي لمؤسسة جزائرية حسب الفائدة.' },
    levels: { title: 'مستويات الاستقلالية الأربعة، تُجتاز بالترتيب', items: [
      { n: 'المستوى 1', label: 'يجيب', sub: 'حالة طلب، مواعيد، نظام داخلي، رصيد. قراءة فقط، بثلاث لغات.' },
      { n: 'المستوى 2', label: 'يقترح', sub: 'مسودة تذكير، موعد مقترح، رد محضَّر. إنسان يصادق قبل الإرسال.' },
      { n: 'المستوى 3', label: 'يتصرف ضمن حدود', sub: 'تذكير مرسَل، موعد مؤكَّد، بادرة تجارية تحت سقف. فوقه يصعّد.', accent: true },
      { n: 'المستوى 4', label: 'يتصرف ويقدّم تقريراً', sub: 'ملخص اليوم، استثناءات مرفوعة، أرقام ما فعله. الإنسان يشرف.' },
    ], caption: 'الشكل 2 · القفز من المستوى 1 إلى المستوى 4 في شهر هو أضمن طريقة لخسارة ثقة الفريق والزبائن.', alt: 'مستويات الاستقلالية الأربعة لوكيل الذكاء الاصطناعي.' },
    stack: { title: 'كيف يندمج وكيل الذكاء الاصطناعي في الشركة', layers: [
      { label: 'القنوات', items: [{ name: 'واتساب للأعمال', sub: 'حيث يكتب الزبائن أصلاً', accent: true }, { name: 'التطبيق والموقع', sub: 'دردشة مدمجة، القواعد نفسها' }, { name: 'البريد والاستمارة', sub: 'طلبات B2B، طلبات تسعير' }] },
      { label: 'الوكيل', items: [{ name: 'فهم العربية / الفرنسية / الدارجة', sub: 'بما فيها العربية بحروف لاتينية' }, { name: 'قواعد الشركة', sub: 'ما يجوز له قوله وفعله والوعد به' }, { name: 'تصعيد إلى إنسان', sub: 'بمجرد أن لا يكون متأكداً' }] },
      { label: 'الأدوات', items: [{ name: 'قراءة وكتابة في المكتب الخلفي', sub: 'طلبات، جدول استحقاقات، أجندة، مخزون، CRM' }] },
      { label: 'البيانات', items: [{ name: 'قاعدة واحدة، استضافة مختارة', sub: 'القانون 18-07؛ سحابة محلية أو أجنبية موثّقة' }, { name: 'سجل لكل إجراء', sub: 'من قال ماذا، من فعل ماذا' }] },
      { label: 'التحكم', items: [{ name: 'إنسان في الحلقة، حدود، قياس', sub: 'سقوف، مراجعة أسبوعية، أرقام' }] },
    ], caption: 'الشكل 3 · الوكيل هو الطبقة الثانية. بدون الثالثة، الأدوات، يتكلم ولا يعمل.', alt: 'خمس طبقات لاندماج وكيل ذكاء اصطناعي في شركة.' },
    timeline: { title: 'ستة أشهر، مستوى واحد في كل مرة', unit: 'أشهر', items: [
      { label: 'الشرط المسبق: بيانات في نظام', note: 'مكتب خلفي، جدول استحقاقات، قواعد مكتوبة', from: 0, to: 1 },
      { label: 'المستوى 1 · يجيب', note: 'واتساب والتطبيق، قراءة فقط', from: 1, to: 2 },
      { label: 'المستوى 2 · يقترح', note: 'مسودات يصادق عليها الفريق', from: 2, to: 3 },
      { label: 'المستوى 3 · يتصرف ضمن حدود', note: 'تذكيرات، مواعيد، سقوف', from: 3, to: 5, accent: true },
      { label: 'المستوى 4 · يقدّم تقريراً', note: 'ملخص اليوم، قياس، مراجعة', from: 5, to: 6 },
    ], caption: 'الشكل 4 · الشهر الأول لا يحتوي ذكاءً اصطناعياً. هو الشهر الذي يقرر إن كانت الأشهر الخمسة التالية تنفع بشيء.', alt: 'جدول زمني بالأشهر لإدخال وكيل ذكاء اصطناعي خلال ستة أشهر.' },
  },
};

export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      uses: { svg: matrix({ title: t.uses.title, columns: t.uses.columns, rows: t.uses.rows, legend: t.uses.legend, rtl }), caption: t.uses.caption, alt: t.uses.alt },
      levels: { svg: steps({ title: t.levels.title, steps: t.levels.items, arrows: true, rtl }), caption: t.levels.caption, alt: t.levels.alt },
      stack: { svg: layers({ title: t.stack.title, layers: t.stack.layers, rtl }), caption: t.stack.caption, alt: t.stack.alt },
      timeline: { svg: timeline({ title: t.timeline.title, items: t.timeline.items, total: 6, tick: 1, unit: t.timeline.unit, rtl }), caption: t.timeline.caption, alt: t.timeline.alt },
    },
  };
}
