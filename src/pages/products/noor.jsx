// ============================================================================
// SYMLOOP — /products/noor/ (NOOR by Symloop · flagship AI platform)
//
// Editorial product page in the Stripe / Linear / Vercel mould — restraint,
// precision, a single distinctive cultural moment (the Arabic "نور" calligraphic
// backdrop in the hero). SSR-friendly (no "use client"), locale-aware, schema-
// rich for LLM and Google indexing.
//
// Section order:
//   1. Hero — name, tagline, dek, primary CTA, stat strip
//   2. Why sovereign AI — three principle pillars
//   3. The 12 capabilities — full grid with longer descriptions
//   4. Sector applications — banking, government, oil & gas, healthcare
//   5. Deployment options — on-prem, sovereign cloud, hybrid
//   6. Architecture principles — five short pillars
//   7. FAQ
//   8. Final CTA
// ============================================================================

import Link from 'next/link';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import {
  ArrowUpRight,
  ArrowRight,
  ArrowLeft,
  MessageSquare,
  FileText,
  Search,
  Network,
  Database,
  FileBarChart,
  Library,
  Users,
  Server,
  ShieldCheck,
  Languages,
  Activity,
  Building2,
  Landmark,
  Factory,
  HeartPulse,
  Lock,
  Cloud,
  CloudCog,
  ServerCog,
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
};

// ─── 12 capabilities (full version with longer descriptions) ─────────────
const ICONS = { MessageSquare, FileText, Search, Network, Database, FileBarChart, Library, Users, Server, ShieldCheck, Languages, Activity };

const CAPS = [
  { num: '01', icon: 'MessageSquare', title_en: 'Ask in plain language', title_fr: 'Posez vos questions en langage naturel', title_ar: 'اسأل بلغة عادية', long_en: 'Operators, analysts, and executives query the platform in Arabic, French, or English. NOOR routes the question to the right data source, retrieves the answer, and cites every source it used.', long_fr: 'Vos opérateurs, analystes et dirigeants interrogent la plateforme en arabe, français ou anglais. NOOR route la question vers la bonne source de données, récupère la réponse, et cite chaque source utilisée.', long_ar: 'يستعلم المشغلون والمحللون والمدراء بالعربية أو الفرنسية أو الإنجليزية. توجه نور السؤال إلى مصدر البيانات الصحيح، تسترجع الإجابة، وتستشهد بكل مصدر تم استخدامه.' },
  { num: '02', icon: 'FileText', title_en: 'Analyze documents', title_fr: 'Analysez vos documents', title_ar: 'حلل المستندات', long_en: 'Extracts structured data from PDFs, scanned national IDs, contracts, regulatory texts, and forms — including handwritten Arabic. Field-level confidence scores, human-in-the-loop validation built in.', long_fr: "Extrait des données structurées depuis PDF, cartes d'identité scannées, contrats, textes réglementaires, formulaires — y compris l'arabe manuscrit. Scores de confiance par champ, validation human-in-the-loop intégrée.", long_ar: 'يستخرج بيانات منظمة من ملفات PDF، بطاقات هوية ممسوحة ضوئياً، عقود، نصوص تنظيمية، نماذج — بما في ذلك العربية المكتوبة بخط اليد. نقاط ثقة على مستوى الحقل، مع التحقق البشري في الحلقة.' },
  { num: '03', icon: 'Search', title_en: 'Find information fast', title_fr: "Trouvez l'information rapidement", title_ar: 'اعثر على المعلومات بسرعة', long_en: 'Production-grade RAG over your private enterprise knowledge — wikis, file shares, ticketing, email archives, contracts, regulatory libraries. Hybrid retrieval (vector + keyword), reranking, and citation-grounded answers.', long_fr: "RAG production-grade sur votre savoir d'entreprise privé — wikis, partages de fichiers, ticketing, archives email, contrats, bibliothèques réglementaires. Retrieval hybride (vectoriel + mots-clés), reranking, réponses citées.", long_ar: 'RAG جاهز للإنتاج على معرفة شركتك الخاصة — ويكي، مشاركات الملفات، التذاكر، أرشيف البريد، العقود، المكتبات التنظيمية. استرجاع هجين (متجهي + كلمات مفتاحية)، إعادة ترتيب، إجابات مدعومة بالاستشهادات.' },
  { num: '04', icon: 'Network', title_en: 'Connect your systems', title_fr: 'Connectez vos systèmes', title_ar: 'اربط أنظمتك', long_en: 'Native connectors for SAP, Odoo, Microsoft Dynamics, Salesforce, mainframe gateways, and any REST/GraphQL/gRPC endpoint. Custom adapters delivered with the engagement.', long_fr: 'Connecteurs natifs pour SAP, Odoo, Microsoft Dynamics, Salesforce, gateways mainframe, et tout endpoint REST/GraphQL/gRPC. Adaptateurs sur mesure livrés avec la mission.', long_ar: 'موصلات أصلية لـ SAP، Odoo، Microsoft Dynamics، Salesforce، بوابات الحاسوب الكبير، وأي endpoint من نوع REST/GraphQL/gRPC. محولات مخصصة تُسلّم مع المشروع.' },
  { num: '05', icon: 'Database', title_en: 'Query databases easily', title_fr: 'Interrogez les bases de données', title_ar: 'استعلم من قواعد البيانات بسهولة', long_en: 'Translate natural language to SQL, MongoDB queries, or your data warehouse dialect (Snowflake, BigQuery, Redshift). Schema-aware. Read-only by default. Approval workflows for writes.', long_fr: 'Traduit le langage naturel en SQL, requêtes MongoDB, ou dialecte de votre data warehouse (Snowflake, BigQuery, Redshift). Schema-aware. Read-only par défaut. Workflow d\'approbation pour les écritures.', long_ar: 'يترجم اللغة الطبيعية إلى SQL، استعلامات MongoDB، أو لهجة مستودع البيانات (Snowflake، BigQuery، Redshift). يفهم المخطط. للقراءة فقط افتراضياً. سير عمل الموافقة للكتابة.' },
  { num: '06', icon: 'FileBarChart', title_en: 'Generate reports', title_fr: 'Générez des rapports', title_ar: 'أنشئ التقارير', long_en: 'Compliance reports (BCT monthly, SAMA quarterly, AML/SAR), BI dashboards, board packs, executive summaries. Scheduled or on-demand. PDF, Excel, PowerPoint output.', long_fr: 'Rapports de conformité (BCT mensuels, SAMA trimestriels, AML/SAR), dashboards BI, board packs, synthèses exécutives. Programmé ou à la demande. Sortie PDF, Excel, PowerPoint.', long_ar: 'تقارير الامتثال (شهرية BCT، ربع سنوية SAMA، AML/SAR)، لوحات BI، حزم مجلس الإدارة، ملخصات تنفيذية. مجدول أو عند الطلب. مخرجات PDF و Excel و PowerPoint.' },
  { num: '07', icon: 'Library', title_en: 'Build knowledge libraries', title_fr: 'Bâtissez des bibliothèques de connaissances', title_ar: 'ابنِ مكتبات المعرفة', long_en: 'Curated knowledge bases per domain — banking ops, regulatory affairs, industrial procedures, medical protocols. Versioned. Access-controlled. Fully exportable on contract end.', long_fr: 'Bases de connaissances curatées par domaine — ops bancaires, affaires réglementaires, procédures industrielles, protocoles médicaux. Versionnées. Avec contrôle d\'accès. Entièrement exportables en fin de contrat.', long_ar: 'قواعد معرفة منسقة لكل مجال — العمليات المصرفية، الشؤون التنظيمية، الإجراءات الصناعية، البروتوكولات الطبية. ذات إصدارات. مع تحكم في الوصول. قابلة للتصدير الكامل عند انتهاء العقد.' },
  { num: '08', icon: 'Users', title_en: 'Specialized assistants', title_fr: 'Assistants spécialisés', title_ar: 'مساعدون متخصصون', long_en: 'Pre-trained agents for banking ops (KYC, AML, transaction monitoring), government workflows (citizen requests, inter-ministerial routing), industrial maintenance (GMAO/CMMS), and clinical workflows.', long_fr: "Agents pré-entraînés pour ops bancaires (KYC, AML, monitoring transactions), workflows gouvernementaux (demandes citoyens, routage inter-ministériel), maintenance industrielle (GMAO/CMMS), workflows cliniques.", long_ar: 'وكلاء مدربون مسبقاً للعمليات المصرفية (KYC، AML، مراقبة المعاملات)، سير العمل الحكومي (طلبات المواطنين، التوجيه بين الوزارات)، الصيانة الصناعية (GMAO/CMMS)، سير العمل السريري.' },
  { num: '09', icon: 'Server', title_en: 'Runs on your servers', title_fr: 'Tourne sur vos serveurs', title_ar: 'يعمل على خوادمك', long_en: 'Three deployment modes: fully on-premise (your data center, your hardware), sovereign cloud (Algerian, Saudi, UAE national clouds), or hybrid. Air-gapped variant available.', long_fr: 'Trois modes de déploiement : entièrement on-premise (votre data center, votre matériel), cloud souverain (clouds nationaux algérien, saoudien, émirati), ou hybride. Variante air-gapped disponible.', long_ar: 'ثلاثة أوضاع للنشر: on-premise بالكامل (مركز البيانات الخاص بك، أجهزتك)، السحابة السيادية (السحابات الوطنية الجزائرية والسعودية والإماراتية)، أو هجين. متاحة نسخة air-gapped.' },
  { num: '10', icon: 'ShieldCheck', title_en: 'Audit every query', title_fr: 'Auditez chaque requête', title_ar: 'دقق كل استعلام', long_en: 'Every query logged with user, timestamp, retrieved sources, model version, and output. Tamper-evident audit trail meeting BCT, SAMA, DORA, and ISO 27001 requirements out of the box.', long_fr: 'Chaque requête loggée avec utilisateur, timestamp, sources récupérées, version du modèle, et sortie. Piste d\'audit inviolable conforme aux exigences BCT, SAMA, DORA et ISO 27001 dès l\'installation.', long_ar: 'يتم تسجيل كل استعلام مع المستخدم والطابع الزمني والمصادر المسترجعة وإصدار النموذج والمخرجات. مسار تدقيق مقاوم للعبث يلبي متطلبات BCT و SAMA و DORA و ISO 27001 من البداية.' },
  { num: '11', icon: 'Languages', title_en: 'Multi-language native', title_fr: 'Multi-langue natif', title_ar: 'متعدد اللغات أصلياً', long_en: 'Algerian Arabic dialect (دارجة), Levantine, Modern Standard Arabic, French, English. Native RTL interfaces. Specialized models for banking, legal, and medical Arabic terminology.', long_fr: 'Arabe algérien (دارجة), levantin, arabe moderne standard, français, anglais. Interfaces RTL natives. Modèles spécialisés pour la terminologie bancaire, juridique, médicale arabe.', long_ar: 'العربية الجزائرية (دارجة)، الشامية، العربية الفصحى، الفرنسية، الإنجليزية. واجهات RTL أصلية. نماذج متخصصة في المصطلحات المصرفية والقانونية والطبية العربية.' },
  { num: '12', icon: 'Activity', title_en: 'Production-grade', title_fr: 'Production-grade', title_ar: 'جاهز للإنتاج', long_en: '99.9% SLA, monitoring (Prometheus + Grafana), MLOps pipelines, automated retraining, drift detection, blue-green model rollouts. Operated by Symloop SRE on contract or handed over to your team.', long_fr: 'SLA 99,9%, monitoring (Prometheus + Grafana), pipelines MLOps, ré-entraînement automatisé, détection de drift, déploiements blue-green des modèles. Opéré par le SRE Symloop sous contrat ou transféré à vos équipes.', long_ar: 'SLA 99.9%، مراقبة (Prometheus + Grafana)، خطوط أنابيب MLOps، إعادة تدريب آلية، اكتشاف الانحراف، نشر blue-green للنماذج. تشغيل من قبل SRE في سيملوب بموجب عقد أو تسليم لفريقك.' },
];

// ─── Sector applications ─────────────────────────────────────────────────
const SECTORS = [
  {
    icon: Building2,
    name_en: 'Banking', name_fr: 'Banque', name_ar: 'المصارف',
    use_en: 'Fraud detection over real-time payments. AML/CTF transaction monitoring. KYC document automation. Customer service in Algerian Arabic + French. ISO 20022 message classification. SAR generation against BCT and SAMA frameworks.',
    use_fr: "Détection de fraude sur paiements temps réel. Monitoring AML/CTF des transactions. Automatisation KYC. Service client en arabe algérien + français. Classification de messages ISO 20022. Génération de SAR conformes BCT et SAMA.",
    use_ar: 'كشف الاحتيال على المدفوعات في الوقت الفعلي. مراقبة معاملات AML/CTF. أتمتة KYC. خدمة العملاء بالعربية الجزائرية والفرنسية. تصنيف رسائل ISO 20022. إنشاء SAR وفقاً لأطر BCT و SAMA.',
  },
  {
    icon: Landmark,
    name_en: 'Government', name_fr: 'Gouvernement', name_ar: 'الحكومة',
    use_en: 'Citizen request triage and routing across ministries. National ID document AI. Inter-ministerial data exchange with sovereign cloud residency. Multi-language tax and administrative workflow assistants.',
    use_fr: "Triage et routage des demandes citoyennes inter-ministères. IA documentaire pour cartes d'identité nationales. Échange de données inter-ministériel avec résidence cloud souverain. Assistants fiscaux et administratifs multi-langues.",
    use_ar: 'فرز وتوجيه طلبات المواطنين بين الوزارات. ذكاء اصطناعي للمستندات وبطاقات الهوية الوطنية. تبادل البيانات بين الوزارات مع إقامة في السحابة السيادية. مساعدون ضريبيون وإداريون متعددو اللغات.',
  },
  {
    icon: Factory,
    name_en: 'Oil & Gas', name_fr: 'Oil & Gas', name_ar: 'النفط والغاز',
    use_en: 'Predictive maintenance over SCADA telemetry. Computer vision for safety on production sites (PPE, leaks, intrusion). Technical document analysis (procedures, datasheets, P&IDs). Air-gapped deployment for upstream operators.',
    use_fr: "Maintenance prédictive sur télémétrie SCADA. Vision par ordinateur pour la sécurité sur sites de production (EPI, fuites, intrusion). Analyse de documentation technique (procédures, datasheets, P&IDs). Déploiement air-gapped pour opérateurs upstream.",
    use_ar: 'الصيانة التنبؤية على القياس عن بُعد لـ SCADA. الرؤية الحاسوبية للسلامة في مواقع الإنتاج (PPE، التسريبات، التطفل). تحليل الوثائق التقنية (الإجراءات، أوراق البيانات، P&IDs). نشر air-gapped لمشغلي upstream.',
  },
  {
    icon: HeartPulse,
    name_en: 'Healthcare', name_fr: 'Santé', name_ar: 'الصحة',
    use_en: 'Medical imaging triage (chest X-ray, retinal scans, mammography). Clinical document AI (electronic health records, prescriptions). Pharmaceutical traceability. HDS-compliant deployment for hospital groups.',
    use_fr: "Triage en imagerie médicale (radiographie thoracique, scans rétiniens, mammographie). IA pour dossiers médicaux électroniques, ordonnances. Traçabilité pharmaceutique. Déploiement conforme HDS pour groupes hospitaliers.",
    use_ar: 'فرز التصوير الطبي (الأشعة الصدرية، فحوصات الشبكية، التصوير الشعاعي للثدي). الذكاء الاصطناعي للمستندات السريرية (السجلات الصحية الإلكترونية، الوصفات الطبية). تتبع الأدوية. نشر متوافق مع HDS لمجموعات المستشفيات.',
  },
];

// ─── Deployment options ──────────────────────────────────────────────────
const DEPLOYMENTS = [
  { icon: ServerCog, name_en: 'On-Premise',     name_fr: 'On-Premise',         name_ar: 'on-premise',          desc_en: 'Your data center, your hardware. Air-gapped variant available for upstream oil & gas and defense.', desc_fr: 'Votre data center, votre matériel. Variante air-gapped pour oil & gas upstream et défense.',           desc_ar: 'مركز بياناتك، أجهزتك. متاحة نسخة air-gapped لقطاع النفط والغاز upstream والدفاع.' },
  { icon: Cloud,     name_en: 'Sovereign cloud', name_fr: 'Cloud souverain',     name_ar: 'سحابة سيادية',         desc_en: 'Deployed in Algerian, Saudi, or UAE national clouds. Data never crosses borders.',                  desc_fr: 'Déployé dans les clouds nationaux algérien, saoudien, émirati. Les données ne traversent jamais les frontières.', desc_ar: 'يتم النشر في السحابات الوطنية الجزائرية أو السعودية أو الإماراتية. لا تعبر البيانات الحدود أبداً.' },
  { icon: CloudCog,  name_en: 'Hybrid',          name_fr: 'Hybride',             name_ar: 'هجين',                desc_en: 'Sensitive data and inference on-prem; non-sensitive workloads in your chosen cloud.',                desc_fr: 'Données et inférence sensibles on-prem ; charges non sensibles dans le cloud de votre choix.',           desc_ar: 'البيانات الحساسة والاستدلال on-prem؛ أحمال العمل غير الحساسة في السحابة التي تختارها.' },
];

// ─── Architecture principles ─────────────────────────────────────────────
const PRINCIPLES = [
  { num: 'I',   en: 'No data ever leaves your infrastructure unless you explicitly allow it.',     fr: 'Aucune donnée ne quitte votre infrastructure sauf si vous l\'autorisez explicitement.',   ar: 'لا تغادر أي بيانات بنيتك التحتية إلا إذا سمحت بذلك صراحة.' },
  { num: 'II',  en: 'Every model output is grounded in cited sources from your data.',              fr: 'Chaque sortie du modèle est ancrée dans des sources citées de vos données.',            ar: 'كل مخرج للنموذج مستند إلى مصادر مذكورة من بياناتك.' },
  { num: 'III', en: 'Models can be retrained on your data without sharing it with anyone.',         fr: 'Les modèles peuvent être ré-entraînés sur vos données sans les partager avec quiconque.', ar: 'يمكن إعادة تدريب النماذج على بياناتك دون مشاركتها مع أي طرف آخر.' },
  { num: 'IV',  en: 'Multi-language is native, not translated. Arabic is a first-class citizen.',   fr: 'Le multi-langue est natif, pas traduit. L\'arabe est un citoyen de première classe.',    ar: 'تعدد اللغات أصلي وليس مترجماً. العربية مواطن من الدرجة الأولى.' },
  { num: 'V',   en: '99.9% SLA backed by Symloop SRE. Or operated by your team after handover.',     fr: 'SLA 99,9% adossé au SRE Symloop. Ou opéré par vos équipes après transfert.',           ar: 'SLA 99.9% مدعوم من SRE في سيملوب. أو مشغّل من قبل فريقك بعد التسليم.' },
];

// ─── Stat strip ──────────────────────────────────────────────────────────
const STATS = [
  { num: '2012', label_en: 'Founded',       label_fr: 'Fondé en',         label_ar: 'تأسست' },
  { num: '25+',  label_en: 'Engineers',     label_fr: 'Ingénieurs',       label_ar: 'مهندسون' },
  { num: '5',    label_en: 'Languages',     label_fr: 'Langues',          label_ar: 'لغات' },
  { num: '99.9%', label_en: 'Platform SLA', label_fr: 'SLA plateforme',   label_ar: 'SLA المنصة' },
];

// ─── FAQ ─────────────────────────────────────────────────────────────────
const FAQ = [
  {
    q_en: 'Is NOOR a product I license or a custom build?',
    q_fr: 'NOOR est-il un produit sous licence ou un développement sur mesure ?',
    q_ar: 'هل نور منتج يُرخص أم تطوير مخصص؟',
    a_en: 'Both. NOOR ships as a licensed platform with twelve standard capabilities. Symloop engineering then customizes connectors, knowledge bases, specialized assistants, and compliance reports for your specific sector and regulators. The platform license + a fixed-scope customization engagement is the typical pattern.',
    a_fr: 'Les deux. NOOR est livré comme plateforme sous licence avec douze capacités standard. L\'ingénierie Symloop personnalise ensuite les connecteurs, bases de connaissances, assistants spécialisés et rapports de conformité pour votre secteur et vos régulateurs. Le pattern typique : licence plateforme + mission de customisation à scope fixe.',
    a_ar: 'كلاهما. نور تُسلَّم كمنصة مرخصة بـ 12 قدرة قياسية. ثم تقوم هندسة سيملوب بتخصيص الموصلات، قواعد المعرفة، المساعدين المتخصصين، وتقارير الامتثال لقطاعك ومنظميك. النمط النموذجي: ترخيص المنصة + مهمة تخصيص بنطاق ثابت.',
  },
  {
    q_en: 'Does NOOR send any data to OpenAI, Anthropic, or other third parties?',
    q_fr: 'NOOR envoie-t-il des données à OpenAI, Anthropic, ou autres tiers ?',
    q_ar: 'هل ترسل نور أي بيانات إلى OpenAI أو Anthropic أو أطراف أخرى؟',
    a_en: 'Not by default. NOOR runs open-weight models (Llama-class, Mistral-class, custom-trained) on your infrastructure. If you prefer to use frontier API models, that is a deliberate configuration choice with auditable per-call routing — never a hidden default.',
    a_fr: 'Pas par défaut. NOOR exécute des modèles open-weight (classe Llama, Mistral, entraînés sur mesure) sur votre infrastructure. Si vous préférez utiliser des API de modèles frontière, c\'est un choix de configuration délibéré avec routage auditable par appel — jamais un défaut caché.',
    a_ar: 'ليس بشكل افتراضي. تعمل نور بنماذج مفتوحة الأوزان (من فئة Llama و Mistral، أو مدربة مخصصة) على بنيتك التحتية. إذا فضّلت استخدام واجهات برمجة نماذج frontier، فهذا خيار تكويني متعمد مع توجيه قابل للتدقيق لكل استدعاء — وليس أبداً افتراضياً مخفياً.',
  },
  {
    q_en: 'Which Arabic dialects does NOOR support?',
    q_fr: 'Quels dialectes arabes NOOR supporte-t-il ?',
    q_ar: 'ما هي اللهجات العربية التي تدعمها نور؟',
    a_en: 'Algerian darija (دارجة), Moroccan, Tunisian, Egyptian, Levantine (Syrian / Lebanese / Jordanian), Gulf, plus Modern Standard Arabic. Custom domain models for banking, legal, regulatory, and clinical Arabic terminology.',
    a_fr: 'Darija algérien (دارجة), marocain, tunisien, égyptien, levantin (syrien / libanais / jordanien), golfe, plus arabe moderne standard. Modèles de domaine sur mesure pour terminologie bancaire, juridique, réglementaire, clinique.',
    a_ar: 'الدارجة الجزائرية (دارجة)، المغربية، التونسية، المصرية، الشامية (السورية/اللبنانية/الأردنية)، الخليجية، بالإضافة إلى العربية الفصحى. نماذج مجال مخصصة للمصطلحات المصرفية والقانونية والتنظيمية والسريرية.',
  },
  {
    q_en: 'How long does an initial deployment take?',
    q_fr: 'Combien de temps prend un déploiement initial ?',
    q_ar: 'كم يستغرق النشر الأولي؟',
    a_en: 'Eight weeks for a discovery sprint (architecture scoping, security audit, integration plan), then 12–24 weeks for a production-ready deployment of the first sector-specific use case. Subsequent capabilities and assistants ship in 2–6 week sprints.',
    a_fr: 'Huit semaines pour un sprint de découverte (cadrage architectural, audit sécurité, plan d\'intégration), puis 12–24 semaines pour un déploiement production-ready du premier cas d\'usage sectoriel. Les capacités et assistants suivants livrés en sprints de 2–6 semaines.',
    a_ar: 'ثمانية أسابيع لسبرينت الاكتشاف (تحديد المعمارية، تدقيق أمني، خطة التكامل)، ثم 12-24 أسبوعاً للنشر الجاهز للإنتاج لأول حالة استخدام قطاعية. القدرات والمساعدون اللاحقون يُسلَّمون في سبرينتات من 2-6 أسابيع.',
  },
  {
    q_en: 'Who owns the trained models, knowledge bases, and code?',
    q_fr: 'Qui possède les modèles entraînés, bases de connaissances et code ?',
    q_ar: 'من يملك النماذج المدربة وقواعد المعرفة والكود؟',
    a_en: 'You do. Symloop retains rights to the platform layer (the engine itself). Everything trained on your data — fine-tuned weights, embeddings, knowledge graphs — belongs to you. Same for any custom code shipped in your customization. Full IP transfer is contractually documented at engagement start.',
    a_fr: 'Vous. Symloop conserve les droits sur la couche plateforme (le moteur lui-même). Tout ce qui est entraîné sur vos données — poids fine-tunés, embeddings, graphes de connaissances — vous appartient. Idem pour tout code custom livré. Le transfert d\'IP complet est documenté contractuellement dès le départ.',
    a_ar: 'أنت. تحتفظ سيملوب بحقوق طبقة المنصة (المحرك نفسه). كل ما يُدرَّب على بياناتك — الأوزان المضبوطة بدقة، embeddings، الرسوم البيانية للمعرفة — يخصّك. نفس الشيء لأي كود مخصص يُسلَّم. نقل الملكية الفكرية الكامل موثق تعاقدياً منذ البداية.',
  },
];

// ─── Per-locale top-level copy ───────────────────────────────────────────
const COPY = {
  en: {
    eyebrow:    'NOOR by Symloop · Flagship AI Platform',
    arabicMark: 'نور',
    h1Top:      'NOOR.',
    h1Bottom:   'Sovereign AI for MENA\'s regulated industries.',
    dek:        'NOOR is the AI platform for banks, ministries, oil & gas operators, and healthcare groups across the MENA region. On-premise or sovereign cloud. Audited by design. Native in Arabic, French, and English. Built and operated by Symloop — Algiers, founded 2012, 25+ senior engineers.',
    primary:    'Schedule a demo',
    secondary:  'Read the architecture',
    backLink:   '← Back to Symloop',
    whyTitle:   'Why sovereign AI matters for regulated industries.',
    whyDek:     'Off-the-shelf AI platforms are built for consumer markets. Banks, ministries, oil operators, and hospitals operate under different rules — data residency, audit obligations, language requirements, on-premise mandates. NOOR is engineered for those constraints from the first line of code.',
    why1Title:  'Engineered for sovereignty',
    why1Body:   'No SaaS dependency. No vendor lock-in. The platform runs on your infrastructure, with your hardware, under your security controls. The model weights, knowledge bases, and audit logs are physically yours.',
    why2Title:  'Built for regulators',
    why2Body:   'Every query is logged with a tamper-evident audit trail. Compliance with BCT, SAMA, DORA, ISO 27001, and HDS is a default — not a paid add-on. Reports for the regulator generate themselves.',
    why3Title:  'Native to the region',
    why3Body:   'Arabic dialects (Algerian darija, Levantine, Moroccan, Gulf), French, English. RTL interfaces. Domain models for banking, legal, regulatory, and clinical Arabic. Built by engineers who live in the markets you serve.',
    capsTitle:  'The 12 capabilities of NOOR.',
    capsDek:    'Each capability is modular. You start with the ones that match your immediate use case and add the rest over time. All twelve are available out-of-the-box on day one of deployment.',
    sectorsTitle: 'Built for four regulated industries.',
    sectorsDek:   'NOOR ships with sector-specific knowledge bases, specialized assistants, and pre-built integrations for the systems each sector relies on.',
    deployTitle:  'Three ways to deploy NOOR.',
    deployDek:    'Pick the deployment that matches your data residency, security posture, and operational maturity. Switch later if your constraints change.',
    principlesTitle: 'Five architecture principles. Non-negotiable.',
    principlesDek:   'These are the contracts NOOR makes with every customer. They are documented, audited, and verifiable.',
    faqTitle:    'Frequently asked questions.',
    ctaTitle:    'Want to see NOOR in your stack?',
    ctaDek:      'A 60-minute demo with a Symloop engineer, tailored to your sector and data. We can run NOOR on a private workspace seeded with your sample documents within two weeks of the demo.',
    ctaPrimary:  'Schedule a demo',
    ctaSecondary: 'Email contact@symloop.com',
  },
  fr: {
    eyebrow:    'NOOR par Symloop · Plateforme IA phare',
    arabicMark: 'نور',
    h1Top:      'NOOR.',
    h1Bottom:   "L'IA souveraine pour les industries régulées du MENA.",
    dek:        "NOOR est la plateforme d'IA pour les banques, ministères, opérateurs oil & gas et groupes hospitaliers du MENA. On-premise ou cloud souverain. Auditée par conception. Native en arabe, français et anglais. Conçue et opérée par Symloop — Alger, fondée 2012, 25+ ingénieurs seniors.",
    primary:    'Planifier une démo',
    secondary:  "Lire l'architecture",
    backLink:   '← Retour à Symloop',
    whyTitle:   "Pourquoi l'IA souveraine est essentielle pour les industries régulées.",
    whyDek:     "Les plateformes IA grand public sont conçues pour les marchés consumer. Les banques, ministères, opérateurs pétroliers et hôpitaux opèrent sous d'autres règles — résidence des données, obligations d'audit, exigences linguistiques, mandats on-premise. NOOR est conçue pour ces contraintes dès la première ligne de code.",
    why1Title:  'Conçue pour la souveraineté',
    why1Body:   "Aucune dépendance SaaS. Aucun vendor lock-in. La plateforme tourne sur votre infrastructure, votre matériel, sous vos contrôles de sécurité. Les poids du modèle, bases de connaissances et logs d'audit sont physiquement les vôtres.",
    why2Title:  'Construite pour les régulateurs',
    why2Body:   "Chaque requête loggée avec une piste d'audit inviolable. La conformité BCT, SAMA, DORA, ISO 27001 et HDS est un défaut — pas un add-on payant. Les rapports régulateur se génèrent seuls.",
    why3Title:  'Native à la région',
    why3Body:   "Dialectes arabes (darija algérien, levantin, marocain, golfe), français, anglais. Interfaces RTL. Modèles de domaine pour l'arabe bancaire, juridique, réglementaire, clinique. Conçue par des ingénieurs qui vivent dans les marchés que vous servez.",
    capsTitle:  'Les 12 capacités de NOOR.',
    capsDek:    "Chaque capacité est modulaire. Vous démarrez avec celles qui correspondent à votre cas d'usage immédiat et ajoutez les autres avec le temps. Les douze sont disponibles dès le premier jour de déploiement.",
    sectorsTitle: 'Conçu pour quatre industries régulées.',
    sectorsDek:   'NOOR est livré avec des bases de connaissances sectorielles, des assistants spécialisés et des intégrations pré-construites pour les systèmes de chaque secteur.',
    deployTitle:  'Trois façons de déployer NOOR.',
    deployDek:    'Choisissez le déploiement qui correspond à votre résidence des données, posture de sécurité, maturité opérationnelle. Migrez plus tard si vos contraintes changent.',
    principlesTitle: "Cinq principes d'architecture. Non négociables.",
    principlesDek:   'Ce sont les contrats que NOOR passe avec chaque client. Documentés, audités, vérifiables.',
    faqTitle:    'Questions fréquentes.',
    ctaTitle:    'Voir NOOR dans votre stack ?',
    ctaDek:      "Une démo de 60 minutes avec un ingénieur Symloop, adaptée à votre secteur et vos données. Nous pouvons faire tourner NOOR sur un workspace privé avec vos documents échantillon dans les deux semaines suivant la démo.",
    ctaPrimary:  'Planifier une démo',
    ctaSecondary: 'Écrire à contact@symloop.com',
  },
  ar: {
    eyebrow:    'نور من سيملوب · المنصة الرئيسية للذكاء الاصطناعي',
    arabicMark: 'نور',
    h1Top:      'نور.',
    h1Bottom:   'الذكاء الاصطناعي السيادي للقطاعات المنظمة في الشرق الأوسط وشمال أفريقيا.',
    dek:        'نور هي منصة الذكاء الاصطناعي للبنوك والوزارات ومشغلي النفط والغاز ومجموعات الرعاية الصحية في الشرق الأوسط وشمال أفريقيا. on-premise أو سحابة سيادية. مدققة بالتصميم. أصلية بالعربية والفرنسية والإنجليزية. مصممة ومشغّلة من قبل سيملوب — الجزائر العاصمة، تأسست 2012، أكثر من 25 مهندساً.',
    primary:    'احجز عرضاً تجريبياً',
    secondary:  'اقرأ المعمارية',
    backLink:   '→ العودة إلى سيملوب',
    whyTitle:   'لماذا يهم الذكاء الاصطناعي السيادي للقطاعات المنظمة.',
    whyDek:     'منصات الذكاء الاصطناعي الجاهزة مصممة للأسواق الاستهلاكية. تعمل البنوك والوزارات ومشغلو النفط والمستشفيات وفق قواعد مختلفة — إقامة البيانات، التزامات التدقيق، متطلبات اللغة، تكليفات on-premise. تم تصميم نور لهذه القيود من السطر الأول من الكود.',
    why1Title:  'مصممة للسيادة',
    why1Body:   'لا تبعية SaaS. لا تقييد للموردين. تعمل المنصة على بنيتك التحتية، بأجهزتك، تحت ضوابط الأمان الخاصة بك. أوزان النموذج وقواعد المعرفة وسجلات التدقيق ملكك مادياً.',
    why2Title:  'مبنية للمنظمين',
    why2Body:   'كل استعلام مسجل مع مسار تدقيق مقاوم للعبث. الامتثال لـ BCT و SAMA و DORA و ISO 27001 و HDS افتراضي — وليس إضافة مدفوعة. تتولد تقارير المنظم تلقائياً.',
    why3Title:  'أصلية للمنطقة',
    why3Body:   'لهجات عربية (الدارجة الجزائرية، الشامية، المغربية، الخليج)، الفرنسية، الإنجليزية. واجهات RTL. نماذج مجال للعربية المصرفية والقانونية والتنظيمية والسريرية. بناها مهندسون يعيشون في الأسواق التي تخدمها.',
    capsTitle:  'القدرات الـ 12 لنور.',
    capsDek:    'كل قدرة معيارية. تبدأ بتلك التي تتناسب مع حالة الاستخدام الفورية وتضيف البقية مع الوقت. جميع القدرات الـ 12 متاحة جاهزة من اليوم الأول للنشر.',
    sectorsTitle: 'مصممة لأربعة قطاعات منظمة.',
    sectorsDek:   'تُسلَّم نور مع قواعد معرفة خاصة بالقطاع، ومساعدين متخصصين، وعمليات تكامل جاهزة للأنظمة التي يعتمد عليها كل قطاع.',
    deployTitle:  'ثلاث طرق لنشر نور.',
    deployDek:    'اختر النشر الذي يتناسب مع إقامة بياناتك، وضع الأمان، النضج التشغيلي. غيّر لاحقاً إذا تغيرت قيودك.',
    principlesTitle: 'خمسة مبادئ معمارية. غير قابلة للتفاوض.',
    principlesDek:   'هذه هي العقود التي تبرمها نور مع كل عميل. موثقة ومدققة وقابلة للتحقق.',
    faqTitle:    'الأسئلة الشائعة.',
    ctaTitle:    'ترغب في رؤية نور في بنيتك؟',
    ctaDek:      'عرض تجريبي مدته 60 دقيقة مع مهندس من سيملوب، مخصص لقطاعك وبياناتك. يمكننا تشغيل نور على workspace خاص يحتوي على عينات وثائقك خلال أسبوعين من العرض التجريبي.',
    ctaPrimary:  'احجز عرضاً تجريبياً',
    ctaSecondary: 'راسل contact@symloop.com',
  },
};

// ============================================================================
// Page component
// ============================================================================
export default function NoorProductPage() {
  const router = useRouter();
  const locale = router.locale || 'fr';
  const isRtl = locale === 'ar';
  const c = COPY[locale] || COPY.fr;

  const seoTitle = locale === 'ar'
    ? 'نور من سيملوب — منصة الذكاء الاصطناعي السيادية للقطاعات المنظمة في الشرق الأوسط'
    : locale === 'fr'
    ? "NOOR par Symloop — Plateforme IA souveraine pour les industries régulées du MENA"
    : 'NOOR by Symloop — Sovereign AI Platform for MENA Regulated Industries';

  const seoDesc = c.dek;

  return (
    <>
      <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDesc} />
        <link rel="canonical" href="https://symloop.com/products/noor/" />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDesc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://symloop.com/products/noor/" />

        {/* SoftwareApplication schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'NOOR by Symloop',
              alternateName: ['NOOR', 'نور', 'Symloop NOOR'],
              applicationCategory: 'BusinessApplication',
              applicationSubCategory: 'Enterprise AI Platform',
              operatingSystem: 'Linux (on-premise, sovereign cloud, hybrid)',
              description: seoDesc,
              url: 'https://symloop.com/products/noor/',
              softwareVersion: '1.0',
              offers: {
                '@type': 'Offer',
                priceSpecification: {
                  '@type': 'PriceSpecification',
                  price: '0',
                  priceCurrency: 'EUR',
                  description: 'Custom pricing per engagement. Schedule a demo for a quote.',
                },
              },
              creator: {
                '@type': 'Organization',
                name: 'Symloop Technology',
                url: 'https://symloop.com',
                foundingDate: '2012',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Algiers',
                  addressCountry: 'DZ',
                },
              },
              audience: {
                '@type': 'BusinessAudience',
                audienceType: 'Banks, government ministries, oil and gas operators, healthcare groups',
                geographicArea: 'MENA region',
              },
              featureList: CAPS.map((c) => c.title_en).join(' · '),
            }),
          }}
        />

        {/* FAQ schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: FAQ.map((f) => ({
                '@type': 'Question',
                name: f[`q_${locale}`] || f.q_en,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: f[`a_${locale}`] || f.a_en,
                },
              })),
            }),
          }}
        />

        {/* Breadcrumbs schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://symloop.com/' },
                { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://symloop.com/products/' },
                { '@type': 'ListItem', position: 3, name: 'NOOR', item: 'https://symloop.com/products/noor/' },
              ],
            }),
          }}
        />
      </Head>

      <main dir={isRtl ? 'rtl' : 'ltr'} className="bg-black text-white overflow-hidden">
        {/* ── 1. HERO ───────────────────────────────────────────────────────── */}
        <section className="relative border-b border-white/[0.06] overflow-hidden">
          {/* Massive Arabic "نور" calligraphic backdrop — the unforgettable moment */}
          <div
            aria-hidden
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
            style={{
              fontFamily: '"IBM Plex Sans Arabic", sans-serif',
            }}
          >
            <span
              className="text-[42vw] lg:text-[34vw] xl:text-[28vw] leading-none font-light text-white/[0.03] tracking-tighter"
              style={{
                transform: isRtl ? 'translateY(-2%)' : 'translateY(-2%)',
              }}
            >
              نور
            </span>
          </div>

          {/* Top horizontal pulse of light */}
          <div
            aria-hidden
            className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-[70%] max-w-4xl"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.5) 50%, transparent 100%)',
            }}
          />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-32 lg:pt-44 pb-20 lg:pb-28">
            {/* Back link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-12 lg:mb-16"
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 hover:text-white/80 transition-colors"
              >
                {isRtl ? <ArrowRight className="w-3 h-3" strokeWidth={1.5} /> : <ArrowLeft className="w-3 h-3" strokeWidth={1.5} />}
                <span>{c.backLink}</span>
              </Link>
            </motion.div>

            <motion.div initial="hidden" animate="show" variants={stagger} className="max-w-5xl">
              {/* Eyebrow */}
              <motion.div variants={fadeUp} className="flex items-center gap-4 mb-10">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/45">
                  {c.eyebrow}
                </span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>

              {/* H1 — two-line composition: "NOOR." + tagline */}
              <motion.h1
                variants={fadeUp}
                className="text-6xl sm:text-7xl lg:text-9xl xl:text-[10rem] font-light tracking-tight leading-[0.92] text-white"
              >
                {c.h1Top}
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="mt-6 lg:mt-8 text-2xl lg:text-3xl xl:text-4xl font-light tracking-tight leading-[1.1] text-white/70 max-w-4xl"
              >
                {c.h1Bottom}
              </motion.p>

              {/* Dek */}
              <motion.p
                variants={fadeUp}
                className="mt-10 lg:mt-12 text-base lg:text-lg text-white/50 leading-relaxed max-w-2xl font-light"
              >
                {c.dek}
              </motion.p>

              {/* CTAs */}
              <motion.div variants={fadeUp} className="mt-12 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact/?intent=noor-demo"
                  className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-sm font-medium tracking-wide hover:bg-white/90 transition-colors"
                >
                  <span>{c.primary}</span>
                  <ArrowUpRight
                    className={`w-4 h-4 transition-transform duration-300 ${isRtl ? 'group-hover:-translate-x-0.5 group-hover:-translate-y-0.5' : 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5'}`}
                    strokeWidth={1.75}
                  />
                </Link>
                <a
                  href="#architecture"
                  className="inline-flex items-center gap-3 border border-white/[0.12] text-white/80 px-8 py-4 text-sm font-light tracking-wide hover:border-white/40 hover:text-white transition-colors"
                >
                  {c.secondary}
                </a>
              </motion.div>
            </motion.div>

            {/* Stat strip */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-50px' }}
              variants={stagger}
              className="mt-20 lg:mt-28 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06] border-y border-white/[0.06]"
            >
              {STATS.map((s) => (
                <motion.div key={s.num} variants={fadeUp} className="bg-black px-6 py-8 lg:py-10">
                  <div className="font-light text-3xl lg:text-4xl xl:text-5xl text-white tracking-tight">
                    {s.num}
                  </div>
                  <div className="mt-2 font-mono text-[10px] tracking-[0.2em] uppercase text-white/40">
                    {s[`label_${locale}`] || s.label_en}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── 2. WHY SOVEREIGN AI ────────────────────────────────────────────── */}
        <section className="relative border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
              className="max-w-3xl mb-16 lg:mb-20"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
                  {locale === 'ar' ? 'الفلسفة' : locale === 'fr' ? 'Philosophie' : 'Philosophy'}
                </span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight leading-[1.05]">
                {c.whyTitle}
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-8 text-base lg:text-lg text-white/55 leading-relaxed max-w-2xl font-light">
                {c.whyDek}
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-50px' }}
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06]"
            >
              {[
                { icon: Lock,        title: c.why1Title, body: c.why1Body },
                { icon: ShieldCheck, title: c.why2Title, body: c.why2Body },
                { icon: Languages,   title: c.why3Title, body: c.why3Body },
              ].map((p, i) => (
                <motion.div key={i} variants={fadeUp} className="bg-black p-8 lg:p-10">
                  <p.icon className="w-5 h-5 text-white/40 mb-8" strokeWidth={1.5} />
                  <h3 className="text-xl lg:text-2xl font-light text-white tracking-tight leading-snug mb-4">
                    {p.title}
                  </h3>
                  <p className="text-sm lg:text-base text-white/50 leading-relaxed font-light">
                    {p.body}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── 3. THE 12 CAPABILITIES ─────────────────────────────────────────── */}
        <section className="relative border-b border-white/[0.06]" id="capabilities">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
              className="max-w-3xl mb-16 lg:mb-20"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
                  {locale === 'ar' ? 'القدرات' : locale === 'fr' ? 'Capacités' : 'Capabilities'}
                </span>
                <span className="h-px w-12 bg-white/20" />
                <span className="font-mono text-[11px] tracking-[0.2em] text-white/30">01 — 12</span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight leading-[1.05]">
                {c.capsTitle}
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-8 text-base lg:text-lg text-white/55 leading-relaxed max-w-2xl font-light">
                {c.capsDek}
              </motion.p>
            </motion.div>

            <motion.ul
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-50px' }}
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06]"
            >
              {CAPS.map((cap) => {
                const Icon = ICONS[cap.icon];
                const title = cap[`title_${locale}`] || cap.title_en;
                const body  = cap[`long_${locale}`]  || cap.long_en;
                return (
                  <motion.li key={cap.num} variants={fadeUp} className="group bg-black p-7 lg:p-9">
                    <div className="flex items-start justify-between mb-7">
                      <span className="font-mono text-[10px] tracking-[0.15em] text-white/30">
                        {cap.num}
                      </span>
                      <Icon className="w-4 h-4 text-white/40 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg lg:text-xl font-light text-white tracking-tight leading-snug mb-4">
                      {title}
                    </h3>
                    <p className="text-[13px] lg:text-sm text-white/50 leading-relaxed font-light">
                      {body}
                    </p>
                  </motion.li>
                );
              })}
            </motion.ul>
          </div>
        </section>

        {/* ── 4. SECTOR APPLICATIONS ─────────────────────────────────────────── */}
        <section className="relative border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
              className="max-w-3xl mb-16 lg:mb-20"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
                  {locale === 'ar' ? 'القطاعات' : locale === 'fr' ? 'Secteurs' : 'Sectors'}
                </span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight leading-[1.05]">
                {c.sectorsTitle}
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-8 text-base lg:text-lg text-white/55 leading-relaxed max-w-2xl font-light">
                {c.sectorsDek}
              </motion.p>
            </motion.div>

            <motion.ul
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-50px' }}
              variants={stagger}
              className="border-t border-white/[0.06]"
            >
              {SECTORS.map((s, i) => {
                const num = String(i + 1).padStart(2, '0');
                return (
                  <motion.li
                    key={s.name_en}
                    variants={fadeUp}
                    className="group border-b border-white/[0.06]"
                  >
                    <div className="grid grid-cols-12 gap-6 lg:gap-10 py-10 lg:py-14">
                      {/* Number + icon */}
                      <div className="col-span-12 md:col-span-2 flex items-start gap-4">
                        <span className="font-mono text-[10px] tracking-[0.15em] text-white/30 mt-1">
                          {num}
                        </span>
                        <s.icon className="w-5 h-5 text-white/50" strokeWidth={1.5} />
                      </div>
                      {/* Sector name */}
                      <h3 className="col-span-12 md:col-span-3 text-2xl lg:text-3xl font-light text-white tracking-tight leading-tight">
                        {s[`name_${locale}`] || s.name_en}
                      </h3>
                      {/* Use cases */}
                      <p className="col-span-12 md:col-span-7 text-sm lg:text-base text-white/55 leading-relaxed font-light">
                        {s[`use_${locale}`] || s.use_en}
                      </p>
                    </div>
                  </motion.li>
                );
              })}
            </motion.ul>
          </div>
        </section>

        {/* ── 5. DEPLOYMENT OPTIONS ──────────────────────────────────────────── */}
        <section className="relative border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
              className="max-w-3xl mb-16 lg:mb-20"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
                  {locale === 'ar' ? 'النشر' : locale === 'fr' ? 'Déploiement' : 'Deployment'}
                </span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight leading-[1.05]">
                {c.deployTitle}
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-8 text-base lg:text-lg text-white/55 leading-relaxed max-w-2xl font-light">
                {c.deployDek}
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-50px' }}
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06]"
            >
              {DEPLOYMENTS.map((d, i) => {
                const num = String(i + 1).padStart(2, '0');
                return (
                  <motion.div key={d.name_en} variants={fadeUp} className="bg-black p-8 lg:p-10">
                    <div className="flex items-start justify-between mb-8">
                      <span className="font-mono text-[10px] tracking-[0.15em] text-white/30">
                        {num}
                      </span>
                      <d.icon className="w-5 h-5 text-white/40" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-light text-white tracking-tight leading-snug mb-4">
                      {d[`name_${locale}`] || d.name_en}
                    </h3>
                    <p className="text-sm lg:text-base text-white/55 leading-relaxed font-light">
                      {d[`desc_${locale}`] || d.desc_en}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ── 6. ARCHITECTURE PRINCIPLES ────────────────────────────────────── */}
        <section id="architecture" className="relative border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
              className="max-w-3xl mb-16 lg:mb-20"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
                  {locale === 'ar' ? 'المعمارية' : locale === 'fr' ? 'Architecture' : 'Architecture'}
                </span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight leading-[1.05]">
                {c.principlesTitle}
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-8 text-base lg:text-lg text-white/55 leading-relaxed max-w-2xl font-light">
                {c.principlesDek}
              </motion.p>
            </motion.div>

            <motion.ol
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-50px' }}
              variants={stagger}
              className="border-t border-white/[0.06]"
            >
              {PRINCIPLES.map((p) => (
                <motion.li key={p.num} variants={fadeUp} className="border-b border-white/[0.06] py-8 lg:py-10">
                  <div className="grid grid-cols-12 gap-6 lg:gap-10 items-baseline">
                    <span className="col-span-2 md:col-span-1 font-mono text-sm lg:text-base text-white/30 tracking-widest">
                      {p.num}
                    </span>
                    <p className="col-span-10 md:col-span-11 text-xl lg:text-2xl xl:text-3xl font-light text-white tracking-tight leading-snug">
                      {p[locale] || p.en}
                    </p>
                  </div>
                </motion.li>
              ))}
            </motion.ol>
          </div>
        </section>

        {/* ── 7. FAQ ─────────────────────────────────────────────────────────── */}
        <section className="relative border-b border-white/[0.06]">
          <div className="max-w-5xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
              className="mb-16 lg:mb-20"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
                  {locale === 'ar' ? 'الأسئلة' : 'FAQ'}
                </span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-[1.05]">
                {c.faqTitle}
              </motion.h2>
            </motion.div>

            <motion.dl
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-50px' }}
              variants={stagger}
              className="border-t border-white/[0.06]"
            >
              {FAQ.map((f, i) => (
                <motion.div key={i} variants={fadeUp} className="border-b border-white/[0.06] py-8 lg:py-10 grid grid-cols-12 gap-6 lg:gap-10">
                  <dt className="col-span-12 md:col-span-5 text-base lg:text-lg font-light text-white tracking-tight leading-snug">
                    {f[`q_${locale}`] || f.q_en}
                  </dt>
                  <dd className="col-span-12 md:col-span-7 text-sm lg:text-base text-white/55 leading-relaxed font-light">
                    {f[`a_${locale}`] || f.a_en}
                  </dd>
                </motion.div>
              ))}
            </motion.dl>
          </div>
        </section>

        {/* ── 8. FINAL CTA ───────────────────────────────────────────────────── */}
        <section className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-[60%] max-w-3xl"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
            }}
          />
          <div className="max-w-5xl mx-auto px-6 lg:px-10 py-28 lg:py-40 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
                {locale === 'ar' ? 'الخطوة التالية' : locale === 'fr' ? 'Prochaine étape' : 'Next step'}
              </span>
              <h2 className="mt-8 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight leading-[1.05] max-w-3xl mx-auto">
                {c.ctaTitle}
              </h2>
              <p className="mt-8 text-base lg:text-lg text-white/55 leading-relaxed max-w-2xl mx-auto font-light">
                {c.ctaDek}
              </p>
              <div className="mt-12 flex flex-wrap justify-center items-center gap-4">
                <Link
                  href="/contact/?intent=noor-demo"
                  className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-sm font-medium tracking-wide hover:bg-white/90 transition-colors"
                >
                  <span>{c.ctaPrimary}</span>
                  <ArrowUpRight
                    className={`w-4 h-4 transition-transform duration-300 ${isRtl ? 'group-hover:-translate-x-0.5 group-hover:-translate-y-0.5' : 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5'}`}
                    strokeWidth={1.75}
                  />
                </Link>
                <a
                  href="mailto:contact@symloop.com?subject=NOOR%20demo"
                  className="inline-flex items-center gap-3 border border-white/[0.12] text-white/80 px-8 py-4 text-sm font-light tracking-wide hover:border-white/40 hover:text-white transition-colors"
                >
                  {c.ctaSecondary}
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'fr', ['common'])),
    },
  };
}
