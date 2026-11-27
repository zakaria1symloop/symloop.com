import { cover, layers, matrix, timeline } from '../../lib/visuals/index.mjs';
import { paths, sizing, STRINGS as PL } from './custom/private-llm.mjs';
export const slug = 'deployer-un-modele-ia-sur-ses-serveurs-algerie-2027-llm-prive-quel-modele-quelle-machine-cout-par-requete-quand-rester-sur-une-api';
const T = {
  fr: {
    cover: { eyebrow: 'IA privée · Modèles ouverts · Serveurs · 2027', title: ['« Nos documents ne', 'sortent pas. » Alors', 'le modèle entre'], subtitle: 'Comment un modèle d’IA ouvert se déploie sur vos propres serveurs en Algérie : quand le faire, quel modèle pour quelle fonction, quelle carte pour quelle taille, comment on le sert à plusieurs utilisateurs, ce que coûte une requête, et quand rester sur une API en Europe', left: { label: 'Tout envoyer à une API', sub: 'simple, puissant, hors de vos murs' }, right: { label: 'Un modèle chez vous', sub: 'vos murs, votre machine, vos règles' } },
    parcours: { caption: 'Figure 1 · L’orchestration décide du chemin, requête par requête : ce qui contient un document client reste sur le modèle sur site ; ce qui n’en contient pas peut aller vers le modèle le plus capable, en Europe, avec les seules données nécessaires. Un seul des deux chemins n’est presque jamais la bonne réponse.' },
    couches: { title: 'Un modèle sur vos serveurs, en cinq couches', layers: [
      { label: 'Application', items: [{ name: 'Le back-office, l’agent, le portail : rien ne change pour l’utilisateur', sub: 'l’application ne sait pas où tourne le modèle ; elle appelle l’orchestration' }] },
      { label: 'Orchestration', items: [{ name: 'Instructions, récupération de documents, schémas, seuils, repli humain, journal, et le choix du chemin', sub: 'la même couche que pour une API ; c’est elle qui décide « sur site » ou « Europe » par type de requête' }] },
      { label: 'Serveur de modèles', items: [{ name: 'Un serveur d’inférence ouvert, une API compatible, requêtes regroupées, préfixe en cache, poids quantifiés', sub: 'ce qui fait qu’une carte sert trente personnes au lieu d’une ; changer de modèle est un fichier et un redémarrage', accent: true }] },
      { label: 'Machine', items: [{ name: 'Une ou plusieurs cartes graphiques, mémoire, stockage, onduleur, réseau interne, pas d’accès sortant', sub: 'dimensionnée sur la taille du modèle et le nombre de requêtes simultanées, pas sur une fiche technique' }] },
      { label: 'Exploitation', items: [{ name: 'Charge de la carte, file d’attente, latence, note sur le jeu d’évaluation, sauvegarde des poids et des index', sub: 'un écran lu chaque semaine ; une mise à jour du modèle passe par le jeu d’évaluation avant la production' }] },
    ], caption: 'Figure 2 · La couche du milieu est celle qu’on ajoute par rapport à une API ; les deux du haut sont les mêmes. C’est pourquoi une fonction construite proprement sur une API peut passer sur site sans être réécrite, et l’inverse.', alt: 'Cinq couches : application, orchestration, serveur de modèles (accentué), machine, exploitation.' },
    dimension: { caption: 'Figure 3 · La quantification en 4 bits est ce qui fait tenir un modèle de trente milliards de paramètres sur une carte de 24 Go ; elle coûte un peu de qualité, à mesurer sur votre jeu d’évaluation, pas à supposer. La taille ne dit pas la langue : un grand modèle qui ne liste pas l’arabe peut faire moins bien qu’un plus petit qui a été entraîné dessus.' },
    situations: { title: 'Six situations, et ce qu’on monte pour chacune', columns: ['Ce que la situation impose', 'Ce qu’on monte'], rows: [
      { label: 'Banque, assurance, administration', cells: ['Les documents des clients ne sortent pas de l’établissement, parfois pas du réseau', 'Tout sur site : modèle ouvert, index et journal sur vos serveurs, aucun accès sortant ; deuxième machine pour la reprise'] },
      { label: 'Clinique, laboratoire', cells: ['Les données de santé restent sous votre contrôle ; les questions générales n’en contiennent pas', 'Mixte : lecture de dossiers et d’ordonnances sur site ; rédaction générale vers l’Europe sans données patient'] },
      { label: 'Industriel, site isolé', cells: ['Connexion instable ou absente ; la fonction doit tourner hors ligne', 'Sur site, hors ligne : petit modèle sur une carte, mises à jour apportées, journal synchronisé quand la liaison revient'] },
      { label: 'Distributeur, portail B2B', cells: ['Catalogue et commandes peu sensibles ; volume variable, budget suivi', 'API en Europe d’abord, avec cache et récupération ; sur site quand le volume rend la machine moins chère que les requêtes'] },
      { label: 'Fondateur en France, produit pour l’Algérie', cells: ['Pas de salle serveur ; lancer vite ; données des premiers clients limitées', 'API en Europe, orchestration à vous dès le départ ; le passage sur site reste possible sans réécrire'] },
      { label: 'Éditeur de SaaS', cells: ['Des clients qui acceptent l’Europe, d’autres qui exigent l’Algérie ou leurs murs', 'Les deux chemins dans la même orchestration, choisis par client ; un modèle sur site proposé comme offre'] },
    ], caption: 'Figure 4 · Le déploiement sur site n’est pas une marque de sérieux, c’est une réponse à une contrainte écrite : où les documents ont le droit d’aller. Quand la contrainte n’existe pas, une API en Europe avec une orchestration propre arrive plus vite et répond mieux.', alt: 'Matrice de six situations : banque, clinique, site isolé, distributeur, fondateur, éditeur de SaaS ; ce que la situation impose et ce qu’on monte.' },
    pannes: { title: 'Six échecs d’un modèle sur site, et ce que l’architecture fait', columns: ['Ce qui se passe', 'Ce que l’architecture fait'], rows: [
      { label: 'La carte saturée', cells: ['Vingt personnes posent une question en même temps ; chacun attend une minute', 'Requêtes regroupées par le serveur, file avec priorité, limite de tokens, modèle plus petit pour le tri ; charge lue chaque semaine'] },
      { label: 'Le modèle trop grand', cells: ['On a pris le plus gros « pour être sûr » ; il ne tient pas, ou répond en dix secondes', 'Taille choisie par fonction sur le jeu d’évaluation ; quantification mesurée ; le plus petit qui tient la note'] },
      { label: 'L’arabe mal servi', cells: ['Le modèle choisi sur un classement en anglais répond mal en arabe et en darija', 'Modèles comparés sur vos soixante cas réels, en arabe, en français et en darija ; un modèle arabe pour la voix et le dialecte'] },
      { label: 'La mise à jour qui casse', cells: ['Un nouveau modèle remplace l’ancien ; trois fonctions régressent sans que personne le voie', 'Tout changement de modèle ou de quantification passe par le jeu d’évaluation ; livraison refusée si la note baisse ; retour arrière'] },
      { label: 'Le serveur exposé', cells: ['L’API du modèle répond sur le réseau sans authentification ; n’importe quel poste l’interroge', 'Serveur de modèles joignable par l’orchestration seule, pas d’accès sortant, journal par utilisateur, clés tournées'] },
      { label: 'La machine unique', cells: ['La carte tombe, ou le courant ; tout s’arrête', 'Onduleur, sauvegarde des poids et des index, deuxième machine ou repli écrit vers l’Europe pour ce qui a le droit d’y aller'] },
    ], caption: 'Figure 5 · Les deux premières se voient la première semaine ; les quatre autres, le jour où elles arrivent. Aucune ne se règle en achetant une carte plus grosse : elles se règlent dans l’orchestration, le jeu d’évaluation et l’exploitation.', alt: 'Matrice de six échecs : carte saturée, modèle trop grand, arabe mal servi, mise à jour, serveur exposé, machine unique ; ce qui se passe et la parade.' },
    calendrier: { title: 'Déployer un modèle sur ses serveurs en 2027, en semaines', unit: 'sem.', items: [
      { label: 'Contrainte et fonctions', note: 'où les documents ont le droit d’aller, par type ; les deux ou trois fonctions ; ce qui reste sur site, ce qui peut sortir ; signé', from: 0, to: 1 },
      { label: 'Jeu d’évaluation', note: 'soixante cas réels en arabe, français et darija, avec la bonne réponse ; c’est lui qui choisira le modèle', from: 1, to: 2 },
      { label: 'Choix du modèle sur API', note: 'trois ou quatre modèles ouverts comparés sur le jeu, loués à l’heure, avant tout achat ; taille et quantification retenues', from: 2, to: 4, accent: true },
      { label: 'Machine et serveur de modèles', note: 'machine dimensionnée, installée, sans accès sortant ; serveur d’inférence, cache, file ; test de charge', from: 4, to: 6 },
      { label: 'Fonctions et pilote', note: 'orchestration branchée sur le modèle sur site, fonctions une à une, pilote avec repli humain', from: 6, to: 9 },
      { label: 'Exploitation et reprise', note: 'supervision hebdomadaire, sauvegarde, procédure de mise à jour par le jeu d’évaluation, répétition de la panne', from: 9, to: 10 },
    ], caption: 'Figure 6 · Dix semaines, et aucune carte n’est achetée avant la quatrième : le modèle se choisit d’abord sur des machines louées à l’heure, sur votre jeu d’évaluation. C’est ce qui évite d’acheter la mauvaise machine pour le mauvais modèle.', alt: 'Frise de dix semaines : contrainte, jeu d’évaluation, choix du modèle (accentué), machine et serveur, fonctions et pilote, exploitation.' },
  },
  en: {
    cover: { eyebrow: 'Private AI · Open models · Servers · 2027', title: ['“Our documents do', 'not leave.” Then the', 'model comes in'], subtitle: 'How an open AI model is deployed on your own servers in Algeria: when to do it, which model for which function, which card for which size, how it is served to many users, what a request costs, and when to stay on an API in Europe', left: { label: 'Send everything to an API', sub: 'simple, powerful, outside your walls' }, right: { label: 'A model at your place', sub: 'your walls, your machine, your rules' } },
    parcours: { caption: 'Figure 1 · The orchestration decides the route, request by request: anything containing a customer document stays on the on-site model; anything that does not can go to the most capable model, in Europe, with only the necessary data. One route alone is almost never the right answer.' },
    couches: { title: 'A model on your servers, in five layers', layers: [
      { label: 'Application', items: [{ name: 'The back office, the agent, the portal: nothing changes for the user', sub: 'the app does not know where the model runs; it calls the orchestration' }] },
      { label: 'Orchestration', items: [{ name: 'Instructions, document retrieval, schemas, thresholds, human fallback, log, and the choice of route', sub: 'the same layer as for an API; it decides “on site” or “Europe” per request type' }] },
      { label: 'Model server', items: [{ name: 'An open inference server, a compatible API, batched requests, cached prefix, quantised weights', sub: 'what lets one card serve thirty people instead of one; switching model is a file and a restart', accent: true }] },
      { label: 'Machine', items: [{ name: 'One or more graphics cards, memory, storage, UPS, internal network, no outbound access', sub: 'sized on model size and simultaneous requests, not on a spec sheet' }] },
      { label: 'Operations', items: [{ name: 'Card load, queue, latency, score on the evaluation set, backup of weights and indexes', sub: 'a screen read every week; a model update goes through the evaluation set before production' }] },
    ], caption: 'Figure 2 · The middle layer is the one added compared with an API; the top two are the same. That is why a function built properly on an API can move on site without being rewritten, and the reverse.', alt: 'Five layers: application, orchestration, model server (accented), machine, operations.' },
    dimension: { caption: 'Figure 3 · 4-bit quantisation is what makes a thirty-billion-parameter model fit on a 24 GB card; it costs a little quality, to be measured on your evaluation set, not assumed. Size does not tell language: a large model that does not list Arabic can do worse than a smaller one trained on it.' },
    situations: { title: 'Six situations, and what gets set up for each', columns: ['What the situation imposes', 'What gets set up'], rows: [
      { label: 'Bank, insurer, government', cells: ['Customers’ documents do not leave the institution, sometimes not the network', 'Everything on site: open model, index and log on your servers, no outbound access; second machine for recovery'] },
      { label: 'Clinic, laboratory', cells: ['Health data stays under your control; general questions contain none', 'Mixed: reading files and prescriptions on site; general drafting to Europe without patient data'] },
      { label: 'Industrial, isolated site', cells: ['Unstable or absent connection; the function must run offline', 'On site, offline: small model on one card, updates carried in, log synchronised when the link returns'] },
      { label: 'Distributor, B2B portal', cells: ['Catalogue and orders not very sensitive; variable volume, tracked budget', 'API in Europe first, with cache and retrieval; on site when volume makes the machine cost less than the requests'] },
      { label: 'Founder in France, product for Algeria', cells: ['No server room; launch fast; limited data from first customers', 'API in Europe, orchestration yours from the start; moving on site stays possible without rewriting'] },
      { label: 'SaaS vendor', cells: ['Customers who accept Europe, others who require Algeria or their own walls', 'Both routes in the same orchestration, chosen per customer; an on-site model offered as a plan'] },
    ], caption: 'Figure 4 · On-site deployment is not a badge of seriousness, it is an answer to a written constraint: where documents are allowed to go. When the constraint does not exist, an API in Europe with a proper orchestration arrives faster and answers better.', alt: 'Matrix of six situations: bank, clinic, isolated site, distributor, founder, SaaS vendor; what the situation imposes and what gets set up.' },
    pannes: { title: 'Six failures of an on-site model, and what the architecture does', columns: ['What happens', 'What the architecture does'], rows: [
      { label: 'The saturated card', cells: ['Twenty people ask a question at once; each waits a minute', 'Requests batched by the server, priority queue, token limit, smaller model for sorting; load read every week'] },
      { label: 'The oversized model', cells: ['The biggest was chosen “to be safe”; it does not fit, or answers in ten seconds', 'Size chosen per function on the evaluation set; quantisation measured; the smallest that holds the score'] },
      { label: 'Arabic poorly served', cells: ['The model chosen on an English leaderboard answers badly in Arabic and darija', 'Models compared on your sixty real cases, in Arabic, French and darija; an Arabic model for voice and dialect'] },
      { label: 'The update that breaks', cells: ['A new model replaces the old; three functions regress unseen', 'Every change of model or quantisation goes through the evaluation set; release refused if the score drops; rollback'] },
      { label: 'The exposed server', cells: ['The model API answers on the network without authentication; any workstation queries it', 'Model server reachable by the orchestration only, no outbound access, log per user, keys rotated'] },
      { label: 'The single machine', cells: ['The card fails, or the power; everything stops', 'UPS, backup of weights and indexes, second machine or written fallback to Europe for what is allowed to go there'] },
    ], caption: 'Figure 5 · The first two show in week one; the other four, the day they happen. None is solved by buying a bigger card: they are solved in the orchestration, the evaluation set and operations.', alt: 'Matrix of six failures: saturated card, oversized model, Arabic poorly served, update, exposed server, single machine; what happens and the defence.' },
    calendrier: { title: 'Deploying a model on your servers in 2027, in weeks', unit: 'wk', items: [
      { label: 'Constraint and functions', note: 'where documents are allowed to go, by type; the two or three functions; what stays on site, what may leave; signed', from: 0, to: 1 },
      { label: 'Evaluation set', note: 'sixty real cases in Arabic, French and darija, with the right answer; it will choose the model', from: 1, to: 2 },
      { label: 'Choosing the model on rented compute', note: 'three or four open models compared on the set, rented by the hour, before any purchase; size and quantisation chosen', from: 2, to: 4, accent: true },
      { label: 'Machine and model server', note: 'machine sized, installed, no outbound access; inference server, cache, queue; load test', from: 4, to: 6 },
      { label: 'Functions and pilot', note: 'orchestration wired to the on-site model, functions one by one, pilot with human fallback', from: 6, to: 9 },
      { label: 'Operations and recovery', note: 'weekly supervision, backup, update procedure through the evaluation set, failure rehearsal', from: 9, to: 10 },
    ], caption: 'Figure 6 · Ten weeks, and no card is bought before the fourth: the model is first chosen on machines rented by the hour, on your evaluation set. That is what avoids buying the wrong machine for the wrong model.', alt: 'Ten-week timeline: constraint, evaluation set, model choice (accented), machine and server, functions and pilot, operations.' },
  },
  ar: {
    cover: { eyebrow: 'ذكاء اصطناعي خاص · نماذج مفتوحة · خوادم · 2027', title: ['«وثائقنا لا تخرج.»', 'إذن النموذج', 'هو الذي يدخل'], subtitle: 'كيف يُنشر نموذج ذكاء اصطناعي مفتوح على خوادمكم في الجزائر: متى نفعل ذلك، أي نموذج لأي وظيفة، أي بطاقة لأي حجم، كيف يُخدَّم لعدة مستعملين، كم يكلّف الطلب، ومتى نبقى على API في أوروبا', left: { label: 'إرسال الكل إلى API', sub: 'بسيط، قوي، خارج أسواركم' }, right: { label: 'نموذج عندكم', sub: 'أسواركم، آلتكم، قواعدكم' } },
    parcours: { caption: 'الشكل 1 · التنسيق يقرر الطريق طلباً طلباً: ما يحتوي وثيقة زبون يبقى على النموذج في الموقع؛ وما لا يحتوي يمكن أن يذهب إلى النموذج الأقدر في أوروبا بالبيانات الضرورية فقط. وطريق واحد وحده يكاد لا يكون الجواب الصحيح أبداً.' },
    couches: { title: 'نموذج على خوادمكم، في خمس طبقات', layers: [
      { label: 'التطبيق', items: [{ name: 'المكتب الخلفي، الوكيل، البوابة: لا شيء يتغير للمستعمل', sub: 'التطبيق لا يعرف أين يعمل النموذج؛ يستدعي التنسيق' }] },
      { label: 'التنسيق', items: [{ name: 'تعليمات، استرجاع وثائق، مخططات، عتبات، تحويل بشري، سجل، واختيار الطريق', sub: 'الطبقة نفسها كما مع API؛ هي التي تقرر «في الموقع» أو «أوروبا» لكل نوع طلب' }] },
      { label: 'خادم النماذج', items: [{ name: 'خادم استدلال مفتوح، API متوافق، طلبات مجمَّعة، بادئة مخزَّنة، أوزان مكمَّمة', sub: 'ما يجعل بطاقة واحدة تخدم ثلاثين شخصاً بدل واحد؛ وتبديل النموذج ملف وإعادة تشغيل', accent: true }] },
      { label: 'الآلة', items: [{ name: 'بطاقة رسومية أو أكثر، ذاكرة، تخزين، مزوّد طاقة احتياطي، شبكة داخلية، بلا وصول خارجي', sub: 'تُحجَّم على حجم النموذج وعدد الطلبات المتزامنة لا على بطاقة تقنية' }] },
      { label: 'التشغيل', items: [{ name: 'حمل البطاقة، الطابور، الكمون، الدرجة على مجموعة التقييم، نسخ الأوزان والفهارس', sub: 'شاشة تُقرأ كل أسبوع؛ وتحديث النموذج يمر بمجموعة التقييم قبل الإنتاج' }] },
    ], caption: 'الشكل 2 · الطبقة الوسطى هي المضافة مقارنة بـ API؛ والطبقتان العلويتان هما نفساهما. ولهذا فوظيفة مبنية جيداً على API تنتقل إلى الموقع دون إعادة كتابة، والعكس.', alt: 'خمس طبقات: التطبيق، التنسيق، خادم النماذج (مميز)، الآلة، التشغيل.' },
    dimension: { caption: 'الشكل 3 · التكميم بـ 4 بت هو ما يجعل نموذجاً من ثلاثين مليار معلمة يتسع على بطاقة 24 غيغابايت؛ ويكلّف قليلاً من الجودة يُقاس على مجموعة تقييمكم لا يُفترض. والحجم لا يقول اللغة: نموذج كبير لا يذكر العربية قد يكون أسوأ من أصغر دُرِّب عليها.' },
    situations: { title: 'ست حالات، وما نركّبه لكل منها', columns: ['ما تفرضه الحالة', 'ما نركّبه'], rows: [
      { label: 'بنك، تأمين، إدارة', cells: ['وثائق الزبائن لا تخرج من المؤسسة، وأحياناً لا من الشبكة', 'الكل في الموقع: نموذج مفتوح، فهرس وسجل على خوادمكم، بلا وصول خارجي؛ آلة ثانية للاستعادة'] },
      { label: 'مصحة، مخبر', cells: ['البيانات الصحية تبقى تحت سيطرتكم؛ والأسئلة العامة لا تحتويها', 'مختلط: قراءة الملفات والوصفات في الموقع؛ الصياغة العامة نحو أوروبا بلا بيانات مرضى'] },
      { label: 'صناعي، موقع معزول', cells: ['اتصال غير مستقر أو غائب؛ الوظيفة يجب أن تعمل دون اتصال', 'في الموقع دون اتصال: نموذج صغير على بطاقة، تحديثات تُحمل، سجل يتزامن حين يعود الربط'] },
      { label: 'موزّع، بوابة B2B', cells: ['كتالوج وطلبيات قليلة الحساسية؛ حجم متغير وميزانية متابَعة', 'API في أوروبا أولاً بتخزين واسترجاع؛ وفي الموقع حين يجعل الحجم الآلة أقل كلفة من الطلبات'] },
      { label: 'مؤسس في فرنسا، منتج للجزائر', cells: ['لا قاعة خوادم؛ إطلاق سريع؛ بيانات محدودة من أوائل الزبائن', 'API في أوروبا والتنسيق لكم منذ البداية؛ والانتقال إلى الموقع يبقى ممكناً بلا إعادة كتابة'] },
      { label: 'ناشر SaaS', cells: ['زبائن يقبلون أوروبا وآخرون يشترطون الجزائر أو أسوارهم', 'الطريقان في التنسيق نفسه يُختاران لكل زبون؛ ونموذج في الموقع يُعرض كخطة'] },
    ], caption: 'الشكل 4 · النشر في الموقع ليس علامة جدية بل جواب عن قيد مكتوب: أين يحق للوثائق أن تذهب. وحين لا يوجد القيد، يصل API في أوروبا بتنسيق سليم أسرع ويجيب أفضل.', alt: 'مصفوفة ست حالات: بنك، مصحة، موقع معزول، موزّع، مؤسس، ناشر SaaS؛ ما تفرضه الحالة وما نركّبه.' },
    pannes: { title: 'ستة إخفاقات لنموذج في الموقع، وما تفعله الهندسة', columns: ['ما يحدث', 'ما تفعله الهندسة'], rows: [
      { label: 'البطاقة المشبعة', cells: ['عشرون شخصاً يسألون في اللحظة نفسها؛ وكل واحد ينتظر دقيقة', 'طلبات يجمّعها الخادم، طابور بأولوية، حد للرموز، نموذج أصغر للفرز؛ والحمل يُقرأ كل أسبوع'] },
      { label: 'النموذج الأكبر من اللازم', cells: ['اختير الأكبر «للاطمئنان»؛ فلا يتسع أو يجيب في عشر ثوانٍ', 'الحجم يُختار لكل وظيفة على مجموعة التقييم؛ التكميم يُقاس؛ الأصغر الذي يحفظ الدرجة'] },
      { label: 'العربية مخدومة سيئاً', cells: ['النموذج المختار على ترتيب بالإنجليزية يجيب سيئاً بالعربية والدارجة', 'نماذج تُقارَن على حالاتكم الستين الحقيقية بالعربية والفرنسية والدارجة؛ ونموذج عربي للصوت واللهجة'] },
      { label: 'التحديث الذي يكسر', cells: ['نموذج جديد يحل محل القديم؛ ثلاث وظائف تتراجع دون أن يرى أحد', 'كل تغيير في النموذج أو التكميم يمر بمجموعة التقييم؛ يُرفض التسليم إن انخفضت الدرجة؛ تراجع'] },
      { label: 'الخادم المكشوف', cells: ['API النموذج يجيب على الشبكة بلا مصادقة؛ وأي حاسوب يستعلمه', 'خادم النماذج لا يصله إلا التنسيق، بلا وصول خارجي، سجل لكل مستعمل، مفاتيح تُدوَّر'] },
      { label: 'الآلة الوحيدة', cells: ['تتعطل البطاقة أو الكهرباء؛ فيتوقف كل شيء', 'مزوّد طاقة احتياطي، نسخ الأوزان والفهارس، آلة ثانية أو احتياط مكتوب نحو أوروبا لما يحق له'] },
    ], caption: 'الشكل 5 · الاثنان الأولان يظهران في الأسبوع الأول؛ والأربعة الأخرى يوم تحدث. ولا واحد منها يُحل بشراء بطاقة أكبر: تُحل في التنسيق ومجموعة التقييم والتشغيل.', alt: 'مصفوفة ستة إخفاقات: بطاقة مشبعة، نموذج كبير، عربية، تحديث، خادم مكشوف، آلة وحيدة؛ ما يحدث والصدّ.' },
    calendrier: { title: 'نشر نموذج على خوادمكم سنة 2027، بالأسابيع', unit: 'أسبوع', items: [
      { label: 'القيد والوظائف', note: 'أين يحق للوثائق أن تذهب، حسب النوع؛ الوظيفتان أو الثلاث؛ ما يبقى في الموقع وما يجوز أن يخرج؛ موقَّع', from: 0, to: 1 },
      { label: 'مجموعة التقييم', note: 'ستون حالة حقيقية بالعربية والفرنسية والدارجة بالجواب الصحيح؛ هي التي ستختار النموذج', from: 1, to: 2 },
      { label: 'اختيار النموذج على حساب مؤجَّر', note: 'ثلاثة أو أربعة نماذج مفتوحة تُقارَن على المجموعة، مؤجَّرة بالساعة، قبل أي شراء؛ الحجم والتكميم يُحدَّدان', from: 2, to: 4, accent: true },
      { label: 'الآلة وخادم النماذج', note: 'آلة محجَّمة ومثبَّتة بلا وصول خارجي؛ خادم استدلال، تخزين، طابور؛ اختبار حمل', from: 4, to: 6 },
      { label: 'الوظائف والتجريب', note: 'التنسيق موصول بالنموذج في الموقع، الوظائف واحدة واحدة، تجريب بتحويل بشري', from: 6, to: 9 },
      { label: 'التشغيل والاستعادة', note: 'إشراف أسبوعي، نسخ احتياطي، إجراء التحديث عبر مجموعة التقييم، تمرين على العطل', from: 9, to: 10 },
    ], caption: 'الشكل 6 · عشرة أسابيع، ولا بطاقة تُشترى قبل الرابع: يُختار النموذج أولاً على آلات مؤجَّرة بالساعة، على مجموعة تقييمكم. وهذا ما يجنّب شراء الآلة الخطأ للنموذج الخطأ.', alt: 'خط زمني من عشرة أسابيع: القيد، مجموعة التقييم، اختيار النموذج (مميز)، الآلة والخادم، الوظائف والتجريب، التشغيل.' },
  },
};
export function visuals(locale = 'fr') {
  const t = T[locale] || T.fr;
  const p = PL[locale] || PL.fr;
  const rtl = locale === 'ar';
  return {
    cover: cover({ ...t.cover, rtl }),
    figures: {
      parcours: { svg: paths(p.paths, rtl), caption: t.parcours.caption, alt: p.paths.alt },
      couches: { svg: layers({ title: t.couches.title, layers: t.couches.layers, rtl }), caption: t.couches.caption, alt: t.couches.alt },
      dimension: { svg: sizing(p.sizing, rtl), caption: t.dimension.caption, alt: p.sizing.alt },
      situations: { svg: matrix({ title: t.situations.title, columns: t.situations.columns, rows: t.situations.rows, rtl }), caption: t.situations.caption, alt: t.situations.alt },
      pannes: { svg: matrix({ title: t.pannes.title, columns: t.pannes.columns, rows: t.pannes.rows, rtl }), caption: t.pannes.caption, alt: t.pannes.alt },
      calendrier: { svg: timeline({ title: t.calendrier.title, items: t.calendrier.items, total: 10, tick: 2, unit: t.calendrier.unit, rtl }), caption: t.calendrier.caption, alt: t.calendrier.alt },
    },
  };
}
