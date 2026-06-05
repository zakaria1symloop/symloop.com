// ============================================================================
// SYMLOOP — Case study: Sadia — Buy Scan & Win campaign platform
// ============================================================================

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ArrowRight, ArrowLeft, ExternalLink } from 'lucide-react';
import SEO from '../../components/SEO';

const CONTENT = {
  en: {
    eyebrow: 'Case Study · N°02',
    client: 'Sadia',
    tagline: 'Consumer activation engineering — receipt-scan entry at national scale.',
    dek: 'A consumer-brand activation running across three distinct surfaces — a responsive consumer web, an in-store tablet kiosk, and a brand operations console — engineered as one domain model rendered three ways. Receipt ingestion, deduplication, moderation, and traffic-surge handling built as a single production system rather than three disconnected products.',
    publishedAt: 'Delivered 2024',
    duration: '3 months · 3 engineers',
    url: 'https://winwithsadia.com',
    stats: [
      { value: '3', label: 'Render surfaces (consumer · kiosk · console)' },
      { value: '1', label: 'Domain model across all three clients' },
      { value: 'Burst', label: 'Architecture tuned for TV-driven traffic' },
      { value: 'Live', label: 'National deployment, in-store + digital' },
    ],
    overview: {
      eyebrow: 'Engineering brief',
      title: 'The problem framed as engineering.',
      body: [
        'A national consumer promotion is not a marketing website. It is a distributed data-ingestion system with strong correctness requirements: every submission must be deduplicated, every submission must be auditable, every prize draw must be defensible under public scrutiny. The failure mode is not slow — it is a contested winner, a duplicate entry, or a lost submission during a traffic burst.',
        'The engineering discipline here is **data integrity under bursty load with three heterogeneous clients writing into the same domain**. A responsive consumer web reaches submissions from any device at any time. An in-store tablet reaches submissions from supermarket floors where the operator has no IT staff and the session must self-recover from abandonment. A brand operations console reaches submissions from moderators who must make binding decisions under time pressure.',
        'Symloop\'s position from day one: one domain model, one write path, one audit log — three render targets, each engineered for the physical reality of where it runs.',
      ],
    },
    solution: {
      eyebrow: 'What we built',
      title: 'One system. Three render targets.',
      body: [
        '**Consumer entry surface** — a responsive single-page application with form-factor-specific layouts. The design principle: responsive CSS stretches the same UI across breakpoints, which is the wrong architecture when touch targets, input modality, and viewport context differ. We treat desktop, tablet, and mobile as three distinct render targets sharing the same form model, input validation, and submission pipeline — swapping the layout tree at runtime based on device class and orientation.',
        '**In-store tablet surface** — a kiosk-hardened client engineered for unattended operation on supermarket floors. Self-recovering session state after idle timeout, attract-mode that prevents dead-screen failure, touch targets sized for gloved or hurried consumers, and a narrow deployment target that eliminates the class of bugs that come from running general-purpose software in a kiosk context.',
        '**Operations console** — a brand-side console with strict separation between ingestion and review. The team reviewing entries never shares a code path with the team submitting them. Role-scoped access, immutable audit log per decision, and an export pipeline that produces a prize-draw manifest with a defensible provenance trail — so the draw itself is verifiable end-to-end.',
      ],
    },
    architecture: {
      eyebrow: 'Architecture principles',
      title: 'Burst-aware, correctness-first, audit-complete.',
      body: [
        '**Write-path isolation.** Consumer ingestion and operator review run on separate read/write planes. When a TV spot spikes consumer writes by an order of magnitude, the review console stays responsive because it reads from a path that does not contend with the ingestion firehose.',
        '**Deterministic deduplication at the write boundary.** Duplicate detection runs at submission time, not in batch post-facto. Perceptual hashing on receipt imagery, stable identity hashing across submission fields, and idempotent write keys so a retry never creates a ghost entry.',
        '**Immutable audit log.** Every state transition — submission, validation flag, moderator decision, export event — is appended to an audit log that is readable by the operations team and not mutable by anyone, including engineers. This is how a prize draw remains defensible.',
        '**Burst-aware static delivery.** The consumer surface is delivered as static assets from an edge network so a TV-driven traffic burst never touches origin infrastructure for the first paint. Dynamic state — submissions, validation — scales horizontally on managed primitives so we pay for capacity at the second, not the hour.',
      ],
    },
    challenges: {
      eyebrow: 'Engineering problems worth documenting',
      title: 'What made this hard, and how we resolved it.',
      items: [
        { heading: 'Cross-surface consistency without code duplication', body: 'Three render targets must behave identically on the dimensions consumers experience — same form semantics, same validation errors, same receipt-submission flow — while differing on the dimensions the physical surface demands. The failure mode is divergence: the consumer web rejects an input the kiosk accepts, a moderator sees a receipt format the consumer never submitted. We kept the domain model singular and isolated the render surfaces from domain logic so no rule can exist in one client and not the others.' },
        { heading: 'Adversarial input on an open endpoint', body: 'The consumer endpoint is public by definition. Duplicate submissions, machine-generated entries, and image reuse are not edge cases — they are the baseline. The engineering stance is defensive from the first commit: perceptual hashing on imagery, identity hashing across submission fields, rate limits anchored to multiple signals rather than IP alone, and a moderation queue with an explicit budget for manual review. The goal is not zero fraud — it is a defensible rate where human review is economically bounded.' },
        { heading: 'Kiosk deployment without field engineers', body: 'The kiosks run in retail environments where we have no staff. A consumer may abandon the screen mid-entry, pull the power, or block the screen. The software has to recover from every one of these states to a known-good attract mode within seconds. We treat every kiosk boot as if the last session crashed — because statistically, some of them did.' },
        { heading: 'Operator-side review under time pressure', body: 'A prize draw has a deadline. The operations team reviews submissions on that deadline. If the review console is sluggish because the ingestion path is saturated, the draw slips and the campaign degrades. We separated the ingestion and review planes at the infrastructure level so a consumer traffic spike cannot make a moderator wait.' },
      ],
    },
    outcomes: {
      eyebrow: 'Outcomes',
      title: 'What ran in production, and what was verifiable.',
      items: [
        'Three render surfaces operational on launch day against the same domain model, with no behavior divergence observable between them.',
        'Moderation console produced an auditable prize-draw manifest with complete per-submission provenance — submission time, dedupe state, moderator decision, export event — readable by the brand team without engineer involvement.',
        'Burst load absorbed without origin-server intervention. Static-first delivery meant the first paint is never a contended resource, and the dynamic write path scaled on managed primitives.',
        'Kiosks self-recovered from abandonment without field support. The deployment model assumes the physical environment is hostile and engineers accordingly.',
      ],
    },
    tech: { eyebrow: 'Tech stack', items: ['Responsive React', 'Native mobile (Flutter)', 'Managed document store', 'Edge-delivered assets', 'Perceptual hashing', 'Role-scoped admin', 'Immutable audit log', 'Static-first delivery'] },
    faq: {
      eyebrow: 'Engineering FAQ',
      title: 'What operators and technical buyers ask us about this project.',
      items: [
        { q: 'Why treat desktop, tablet, and kiosk as separate render targets instead of one responsive codebase?', a: 'Because responsive CSS encodes the assumption that the same UI is correct across devices. It is not. A kiosk in a retail aisle needs session timeouts, attract mode, and touch targets that have no analogue on a desktop browser. We keep the domain model singular and the render targets distinct — the duplication is small, the divergence risk is smaller, and each target is fit-for-purpose rather than a compromise.' },
        { q: 'How is the prize-draw result defensible under scrutiny?', a: 'Every state transition — submission, validation flag, moderation decision, export event — is appended to an immutable audit log keyed on submission identity. The draw manifest is generated from this log, not from the live database. If a submission is contested, the provenance is in the log and not reconstructible after the fact. This is how we design for events where the output has to survive public examination.' },
        { q: 'How do you handle adversarial input without blocking legitimate consumers?', a: 'Duplicate detection is deterministic and runs at the write boundary. Rate-limiting is anchored to multiple signals — device fingerprint, submission identity hash, temporal pattern — not IP alone, because mobile networks translate millions of users through a small number of IPs. Moderation is reserved for the small percentage that automated checks flag, with an explicit budget so human review is economically bounded.' },
        { q: 'What is the engineering cost of burst traffic absorption?', a: 'Near-zero when the architecture is correct. Static-first delivery from an edge network makes the first paint free. Dynamic writes scale on managed primitives that price by the second. The cost model is a function of the submission volume, not the traffic surge — which is exactly how bursty consumer events should price.' },
        { q: 'Does the same architecture transfer to other consumer-brand events?', a: 'Yes. The engineering shape — three-surface ingestion, bursty write path, audit-complete moderation, defensible output event — repeats across on-pack promotions, scan-to-redeem mechanics, loyalty activations, and retail-tied contests. The domain logic changes. The architecture does not.' },
      ],
    },
    related: {
      eyebrow: 'Engineering services applied on this project',
      items: [
        { label: 'Custom Software Engineering', href: '/services/software-engineering/', desc: 'Domain model, write-path isolation, immutable audit log' },
        { label: 'Mobile App Development', href: '/services/mobile/', desc: 'Kiosk-hardened native client, self-recovering session state' },
        { label: 'Product Engineering', href: '/services/product/', desc: 'Three-surface product shipped as one system, one discipline' },
        { label: 'Cloud & DevOps', href: '/services/cloud/', desc: 'Edge-first static delivery, managed write-path scaling' },
      ],
    },
    cta: { eyebrow: 'Running an event that has to hold under scrutiny?', title: 'Symloop engineers consumer-activation platforms where correctness and defensibility are first-class requirements, not afterthoughts. One domain model, multiple render targets, audit-complete by default.', button: 'Book a 30-minute call' },
    backToHub: 'Back to all case studies',
  },
  fr: {
    eyebrow: 'Étude de cas · N°02',
    client: 'Sadia',
    tagline: "Ingénierie d'activation consommateur — saisie par scan de ticket à l'échelle nationale.",
    dek: "Une activation de marque consommateur exécutée sur trois surfaces distinctes — un web consommateur responsive, un kiosque tablette en magasin, et une console d'opérations pour la marque — conçue comme un seul modèle de domaine rendu de trois manières. Ingestion de tickets, déduplication, modération et absorption des pics de trafic construits comme un système de production unique, pas trois produits déconnectés.",
    publishedAt: 'Livré 2024',
    duration: '3 mois · 3 ingénieurs',
    url: 'https://winwithsadia.com',
    stats: [
      { value: '3', label: 'Surfaces de rendu (consommateur · kiosque · console)' },
      { value: '1', label: 'Modèle de domaine unique pour les trois clients' },
      { value: 'Burst', label: 'Architecture tunée pour pics TV' },
      { value: 'Live', label: 'Déploiement national, magasin + digital' },
    ],
    overview: {
      eyebrow: "Brief d'ingénierie",
      title: "Le problème cadré comme ingénierie.",
      body: [
        "Une promotion consommateur nationale n'est pas un site marketing. C'est un système distribué d'ingestion de données avec des exigences fortes de correction : chaque soumission doit être dédupliquée, chaque soumission doit être auditable, chaque tirage doit être défendable face à un examen public. Le mode d'échec n'est pas la lenteur — c'est un gagnant contesté, une entrée en double, ou une soumission perdue pendant un pic de trafic.",
        "La discipline d'ingénierie ici est **l'intégrité des données sous charge en rafale avec trois clients hétérogènes écrivant dans le même domaine**. Un web consommateur reçoit des soumissions depuis n'importe quel appareil à tout moment. Une tablette en magasin reçoit des soumissions depuis des rayons de supermarché où l'opérateur n'a pas de staff IT et où la session doit se récupérer seule après abandon. Une console d'opérations marque reçoit des soumissions depuis des modérateurs qui doivent prendre des décisions contraignantes sous pression temporelle.",
        "La position de Symloop dès le premier jour : un seul modèle de domaine, un seul write path, un seul audit log — trois cibles de rendu, chacune conçue pour la réalité physique de son déploiement.",
      ],
    },
    solution: {
      eyebrow: 'Ce que nous avons construit',
      title: 'Un système. Trois cibles de rendu.',
      body: [
        "**Surface de saisie consommateur** — un SPA responsive avec des layouts spécifiques au format. Le principe de conception : le CSS responsive étire la même UI sur tous les breakpoints, ce qui est la mauvaise architecture quand les cibles tactiles, la modalité d'input et le contexte viewport diffèrent. Nous traitons desktop, tablette et mobile comme trois cibles de rendu distinctes partageant le même modèle de formulaire, la même validation d'input et le même pipeline de soumission — en permutant l'arbre de layout à l'exécution selon la classe d'appareil et l'orientation.",
        "**Surface tablette en magasin** — un client durci kiosque conçu pour une opération non-supervisée sur les rayons de supermarché. Récupération automatique de l'état de session après timeout d'inactivité, attract-mode qui prévient la panne d'écran mort, cibles tactiles dimensionnées pour des consommateurs gantés ou pressés, et une cible de déploiement étroite qui élimine la classe de bugs qui viennent de l'exécution de software généraliste dans un contexte kiosque.",
        "**Console d'opérations** — une console côté marque avec séparation stricte entre ingestion et revue. L'équipe qui revoit les entrées ne partage jamais un code path avec l'équipe qui les soumet. Accès par rôle, audit log immuable par décision, et un pipeline d'export qui produit un manifeste de tirage avec une traçabilité de provenance défendable — pour que le tirage lui-même soit vérifiable de bout en bout.",
      ],
    },
    architecture: {
      eyebrow: "Principes d'architecture",
      title: 'Consciente des rafales, correction d\'abord, audit complet.',
      body: [
        "**Isolation du write path.** L'ingestion consommateur et la revue opérateur tournent sur des plans read/write séparés. Quand un spot TV fait spiker les écritures consommateur d'un ordre de magnitude, la console de revue reste réactive parce qu'elle lit depuis un path qui ne concurrence pas le firehose d'ingestion.",
        "**Déduplication déterministe au write boundary.** La détection de doublons tourne au moment de la soumission, pas en batch post-facto. Hashing perceptuel sur les images de tickets, hashing d'identité stable à travers les champs de soumission, et clés d'écriture idempotentes pour qu'un retry ne crée jamais une entrée fantôme.",
        "**Audit log immuable.** Chaque transition d'état — soumission, flag de validation, décision modérateur, événement d'export — est appendée à un audit log lisible par l'équipe opérations et non-mutable par qui que ce soit, y compris les ingénieurs. C'est ainsi qu'un tirage reste défendable.",
        "**Livraison statique consciente des rafales.** La surface consommateur est livrée en assets statiques depuis un edge network pour qu'une rafale de trafic TV ne touche jamais l'infrastructure d'origine pour le premier paint. L'état dynamique — soumissions, validation — scale horizontalement sur des primitives managed pour que nous payions la capacité à la seconde, pas à l'heure.",
      ],
    },
    challenges: {
      eyebrow: "Problèmes d'ingénierie qui méritent documentation",
      title: 'Ce qui a rendu ça difficile, et comment nous l\'avons résolu.',
      items: [
        { heading: 'Cohérence cross-surface sans duplication de code', body: "Trois cibles de rendu doivent se comporter identiquement sur les dimensions que les consommateurs expérimentent — même sémantique de formulaire, mêmes erreurs de validation, même flow de soumission de ticket — tout en différant sur les dimensions que la surface physique exige. Le mode d'échec est la divergence : le web consommateur rejette un input que le kiosque accepte, un modérateur voit un format de ticket que le consommateur n'a jamais soumis. Nous gardons le modèle de domaine unique et isolons les surfaces de rendu de la logique de domaine pour qu'aucune règle ne puisse exister dans un client et pas les autres." },
        { heading: 'Input adversarial sur un endpoint ouvert', body: "L'endpoint consommateur est public par définition. Les soumissions en double, les entrées générées par machine et la réutilisation d'images ne sont pas des cas limites — ce sont la baseline. La posture d'ingénierie est défensive dès le premier commit : hashing perceptuel sur les images, hashing d'identité à travers les champs, rate limits ancrés sur plusieurs signaux plutôt que l'IP seule, et une queue de modération avec un budget explicite pour la revue manuelle. L'objectif n'est pas le zéro fraude — c'est un taux défendable où la revue humaine est économiquement bornée." },
        { heading: 'Déploiement kiosque sans ingénieurs terrain', body: "Les kiosques tournent dans des environnements retail où nous n'avons pas de staff. Un consommateur peut abandonner l'écran en plein milieu d'une entrée, couper le courant, ou bloquer l'écran. Le software doit se récupérer de chacun de ces états vers un attract-mode known-good en quelques secondes. Nous traitons chaque boot de kiosque comme si la dernière session avait crashé — parce que statistiquement, certaines l'avaient fait." },
        { heading: 'Revue opérateur sous pression temporelle', body: "Un tirage a une deadline. L'équipe opérations revoit les soumissions sur cette deadline. Si la console de revue est lente parce que le path d'ingestion est saturé, le tirage glisse et la campagne dégrade. Nous avons séparé les plans d'ingestion et de revue au niveau infrastructure pour qu'un pic de trafic consommateur ne puisse pas faire attendre un modérateur." },
      ],
    },
    outcomes: {
      eyebrow: 'Résultats',
      title: 'Ce qui a tourné en production, et ce qui était vérifiable.',
      items: [
        'Trois surfaces de rendu opérationnelles le jour du lancement contre le même modèle de domaine, sans divergence de comportement observable entre elles.',
        "Console de modération a produit un manifeste de tirage auditable avec provenance complète par soumission — heure de soumission, état de dédupe, décision modérateur, événement d'export — lisible par l'équipe marque sans implication ingénieur.",
        "Charge en rafale absorbée sans intervention de serveur d'origine. La livraison static-first signifie que le premier paint n'est jamais une ressource contendue, et le write path dynamique scale sur des primitives managed.",
        "Kiosques auto-récupérés d'abandon sans support terrain. Le modèle de déploiement assume que l'environnement physique est hostile et ingénierie en conséquence.",
      ],
    },
    tech: { eyebrow: 'Stack technique', items: ['React responsive', 'Mobile natif (Flutter)', 'Document store managed', 'Assets edge-delivered', 'Hashing perceptuel', 'Admin role-scoped', 'Audit log immuable', 'Livraison static-first'] },
    faq: {
      eyebrow: "FAQ d'ingénierie",
      title: 'Ce que les opérateurs et acheteurs techniques nous demandent sur ce projet.',
      items: [
        { q: "Pourquoi traiter desktop, tablette et kiosque comme des cibles de rendu séparées plutôt qu'un codebase responsive ?", a: "Parce que le CSS responsive encode l'hypothèse que la même UI est correcte à travers les appareils. Elle ne l'est pas. Un kiosque dans une allée retail nécessite des timeouts de session, un attract-mode et des cibles tactiles qui n'ont pas d'analogue sur un navigateur desktop. Nous gardons le modèle de domaine unique et les cibles de rendu distinctes — la duplication est petite, le risque de divergence est plus petit, et chaque cible est adaptée à l'usage plutôt qu'un compromis." },
        { q: 'Comment le résultat du tirage est-il défendable sous examen ?', a: "Chaque transition d'état — soumission, flag de validation, décision de modération, événement d'export — est appendée à un audit log immuable indexé sur l'identité de soumission. Le manifeste de tirage est généré depuis ce log, pas depuis la base de données live. Si une soumission est contestée, la provenance est dans le log et non reconstructible après coup. C'est ainsi que nous concevons pour des événements où la sortie doit survivre à un examen public." },
        { q: "Comment gérez-vous l'input adversarial sans bloquer les consommateurs légitimes ?", a: "La détection de doublons est déterministe et tourne au write boundary. Le rate-limiting est ancré sur plusieurs signaux — empreinte d'appareil, hash d'identité de soumission, pattern temporel — pas l'IP seule, parce que les réseaux mobiles traduisent des millions d'utilisateurs à travers un petit nombre d'IPs. La modération est réservée au petit pourcentage que les checks automatiques signalent, avec un budget explicite pour que la revue humaine soit économiquement bornée." },
        { q: "Quel est le coût d'ingénierie de l'absorption de trafic en rafale ?", a: "Quasi-zéro quand l'architecture est correcte. La livraison static-first depuis un edge network rend le premier paint gratuit. Les écritures dynamiques scalent sur des primitives managed qui facturent à la seconde. Le modèle de coût est une fonction du volume de soumissions, pas du pic de trafic — ce qui est exactement comment des événements consommateurs en rafale devraient se tarifer." },
        { q: 'La même architecture se transfère-t-elle à d\'autres événements de marque consommateur ?', a: "Oui. La forme d'ingénierie — ingestion trois-surfaces, write path en rafale, modération audit-complète, événement de sortie défendable — se répète à travers les promotions on-pack, les mécaniques scan-to-redeem, les activations de loyauté et les concours tied retail. La logique de domaine change. L'architecture non." },
      ],
    },
    related: {
      eyebrow: "Services d'ingénierie appliqués sur ce projet",
      items: [
        { label: 'Développement Logiciel Sur Mesure', href: '/services/software-engineering/', desc: 'Modèle de domaine, isolation write path, audit log immuable' },
        { label: 'Développement Application Mobile', href: '/services/mobile/', desc: 'Client natif durci kiosque, état de session auto-récupérant' },
        { label: 'Ingénierie Produit', href: '/services/product/', desc: 'Produit trois-surfaces livré comme un système, une discipline' },
        { label: 'Cloud & DevOps', href: '/services/cloud/', desc: 'Livraison statique edge-first, scaling write path managed' },
      ],
    },
    cta: { eyebrow: "Vous exécutez un événement qui doit tenir sous examen ?", title: "Symloop ingénierie les plateformes d'activation consommateur où la correction et la défendabilité sont des exigences de première classe, pas des afterthoughts. Un modèle de domaine, cibles de rendu multiples, audit-complet par défaut.", button: 'Réserver un appel de 30 minutes' },
    backToHub: 'Retour à toutes les études de cas',
  },
  ar: {
    eyebrow: 'دراسة حالة · N°02',
    client: 'Sadia',
    tagline: 'Buy, Scan & Win — منصة تفعيل استهلاكي لعلامة FMCG منذ 1944.',
    dek: 'تفعيل علامة استهلاكية يعمل عبر ثلاثة أسطح منفصلة — ويب استهلاكي متجاوب، كشك لوحي في المتجر، وكونسول عمليات العلامة — هُندس كنموذج مجال واحد يُعرَض بثلاث طرق. استيعاب الإيصالات، إزالة التكرار، التنسيق، ومعالجة ذروات الترافيك مبنية كنظام إنتاج واحد، لا ثلاث منتجات منفصلة.',
    publishedAt: 'سُلِّم 2024',
    duration: '3 أشهر · 3 مهندسين',
    url: 'https://winwithsadia.com',
    stats: [
      { value: '3', label: 'أسطح عرض (مستهلك · كشك · كونسول)' },
      { value: '1', label: 'نموذج مجال لجميع العملاء الثلاثة' },
      { value: 'Burst', label: 'معمارية مُعَايَرة لذروات الترافيك' },
      { value: 'Live', label: 'نشر وطني، في المتجر + رقمي' },
    ],
    overview: {
      eyebrow: 'موجز هندسي',
      title: 'المشكلة مُؤطَّرة كهندسة.',
      body: [
        'ترويج استهلاكي وطني ليس موقع تسويق. إنه نظام استيعاب بيانات موزَّع بمتطلبات صحة قوية: كل إرسال يجب إزالة تكراره، كل إرسال يجب أن يكون قابلاً للتدقيق، كل سحب جائزة يجب أن يكون قابلاً للدفاع تحت التدقيق العام. وضع الفشل ليس بطيئاً — إنه فائز متنازع عليه، إدخال مكرر، أو إرسال ضائع أثناء ذروة الترافيك.',
        'الانضباط الهندسي هنا هو **سلامة البيانات تحت حمل متقطع مع ثلاثة عملاء غير متجانسين يكتبون في نفس المجال**. ويب استهلاكي متجاوب يستقبل إرسالات من أي جهاز في أي وقت. لوحي في المتجر يستقبل إرسالات من أرضيات السوبرماركت حيث المشغّل لا يملك طاقم IT ويجب أن تستعيد الجلسة نفسها من التخلي. كونسول عمليات العلامة يستقبل إرسالات من مُنسِّقين يجب أن يتخذوا قرارات ملزمة تحت ضغط زمني.',
        'موقف سيملوب من اليوم الأول: نموذج مجال واحد، مسار كتابة واحد، سجل تدقيق واحد — ثلاثة أهداف عرض، كل واحد هُندس للواقع الفيزيائي حيث يعمل.',
      ],
    },
    solution: {
      eyebrow: 'ما بنيناه',
      title: 'نظام واحد. ثلاثة أهداف عرض.',
      body: [
        '**سطح إدخال المستهلك** — تطبيق صفحة واحدة متجاوب مع layouts خاصة بكل شكل. مبدأ التصميم: CSS المتجاوب يشد نفس الواجهة عبر نقاط التوقف، وهو المعمارية الخطأ عندما تختلف أهداف اللمس وطريقة الإدخال وسياق العرض. نعامل desktop و tablet و mobile كثلاثة أهداف عرض منفصلة تتشارك نفس نموذج النموذج والتحقق وخط أنابيب الإرسال.',
        '**سطح اللوحي في المتجر** — عميل مُقسَّى للكشك هُندس للعمل غير المراقَب على أرضيات السوبرماركت. حالة جلسة ذاتية الاستعادة بعد انتهاء مهلة الخمول، وضع جذب يمنع فشل الشاشة الميتة، أهداف لمس محددة الحجم للمستهلكين المتعجلين، وهدف نشر ضيق يُلغي فئة الأخطاء التي تأتي من تشغيل برمجيات عامة في سياق كشك.',
        '**كونسول العمليات** — كونسول جانب العلامة بفصل صارم بين الاستيعاب والمراجعة. الفريق الذي يراجع الإدخالات لا يتشارك أبداً مسار كود مع الفريق الذي يُرسلها. وصول محدد بالدور، سجل تدقيق غير قابل للتغيير لكل قرار، وخط أنابيب تصدير يُنتج manifest السحب مع مسار provenance قابل للدفاع.',
      ],
    },
    architecture: {
      eyebrow: 'مبادئ المعمارية',
      title: 'واعية بالذروات، الصحة أولاً، تدقيق كامل.',
      body: [
        '**عزل مسار الكتابة.** استيعاب المستهلك ومراجعة المشغّل يعملان على مستويات قراءة/كتابة منفصلة. عندما يرفع إعلان تلفزيوني كتابات المستهلك بترتيب حجم، يبقى كونسول المراجعة مستجيباً لأنه يقرأ من مسار لا يتنافس مع خرطوم الاستيعاب.',
        '**إزالة تكرار حتمية عند حدود الكتابة.** كشف التكرار يعمل عند وقت الإرسال، لا في batch بعد الفعل. Perceptual hashing على صور الإيصالات، hashing هوية مستقر عبر حقول الإرسال، ومفاتيح كتابة idempotent ليكون retry لا يُنشئ أبداً إدخالاً شبحياً.',
        '**سجل تدقيق غير قابل للتغيير.** كل انتقال حالة — إرسال، flag تحقق، قرار مُنسِّق، حدث تصدير — يُضاف إلى سجل تدقيق قابل للقراءة من قبل فريق العمليات وغير قابل للتغيير من قبل أي شخص، بما في ذلك المهندسون. هكذا يبقى سحب الجائزة قابلاً للدفاع.',
        '**تسليم ثابت واعٍ بالذروات.** سطح المستهلك يُسلَّم كأصول ثابتة من شبكة edge لذا لا تلمس ذروة ترافيك إعلان تلفزيوني أبداً بنية التحتية الأصل للرسم الأول. الحالة الديناميكية — الإرسالات، التحقق — تتوسع أفقياً على primitives managed لندفع السعة بالثانية، لا بالساعة.',
      ],
    },
    challenges: {
      eyebrow: 'مشاكل هندسية تستحق التوثيق',
      title: 'ما جعل هذا صعباً، وكيف حلّيناه.',
      items: [
        { heading: 'اتساق cross-surface دون تكرار الكود', body: 'ثلاثة أهداف عرض يجب أن تتصرف بشكل متطابق على الأبعاد التي يختبرها المستهلكون — نفس دلالات النموذج، نفس أخطاء التحقق، نفس تدفق إرسال الإيصال — مع الاختلاف على الأبعاد التي يتطلبها السطح الفيزيائي. وضع الفشل هو التباين. حافظنا على نموذج المجال فريداً وعزلنا أسطح العرض عن منطق المجال.' },
        { heading: 'إدخال عدائي على endpoint مفتوح', body: 'endpoint المستهلك عام بالتعريف. الإرسالات المكررة والإدخالات المُولَّدة بآلة وإعادة استخدام الصور ليست حالات حدية — إنها الأساس. الموقف الهندسي دفاعي منذ أول commit.' },
        { heading: 'نشر كشك بدون مهندسين ميدانيين', body: 'الأكشاك تعمل في بيئات retail حيث لا نملك طاقم. المستهلك قد يتخلى عن الشاشة في منتصف إدخال، يسحب الطاقة، أو يمنع الشاشة. البرمجيات يجب أن تستعيد من كل حالة من هذه إلى وضع جذب known-good في ثوانٍ.' },
        { heading: 'مراجعة جانب المشغّل تحت ضغط زمني', body: 'سحب الجائزة له موعد نهائي. فريق العمليات يراجع الإرسالات على هذا الموعد النهائي. إذا كانت كونسول المراجعة بطيئاً لأن مسار الاستيعاب مشبع، ينزلق السحب وتتدهور الحملة. فصلنا مستوى الاستيعاب والمراجعة على مستوى البنية التحتية.' },
      ],
    },
    outcomes: {
      eyebrow: 'النتائج',
      title: 'ما عمل في الإنتاج، وما كان قابلاً للتحقق.',
      items: [
        'ثلاثة أسطح عرض عاملة يوم الإطلاق ضد نفس نموذج المجال، بدون انجراف سلوكي ملحوظ بينها.',
        'كونسول التنسيق أنتج manifest سحب جائزة قابل للتدقيق مع provenance كامل لكل إرسال — قابل للقراءة من قبل فريق العلامة دون تدخل مهندس.',
        'حمل الذروة استُوعب بدون تدخل خادم أصلي. التسليم static-first يعني أن الرسم الأول ليس أبداً مورداً متنازعاً، ومسار الكتابة الديناميكي يتوسع على primitives managed.',
        'الأكشاك استعادت ذاتياً من التخلي بدون دعم ميداني. نموذج النشر يفترض أن البيئة الفيزيائية معادية ويُهندس وفقاً لذلك.',
      ],
    },
    tech: { eyebrow: 'الحزمة التقنية', items: ['React متجاوب', 'جوال أصلي (Flutter)', 'document store managed', 'أصول edge-delivered', 'Perceptual hashing', 'إدارة role-scoped', 'سجل تدقيق غير قابل للتغيير', 'تسليم static-first'] },
    faq: {
      eyebrow: 'FAQ هندسي',
      title: 'ما يسأله المشغّلون والمشترون التقنيون عن هذا المشروع.',
      items: [
        { q: 'لماذا تعامل desktop و tablet وkiosk كأهداف عرض منفصلة بدلاً من قاعدة كود متجاوبة واحدة؟', a: 'لأن CSS المتجاوب يشفر افتراض أن نفس الواجهة صحيحة عبر الأجهزة. ليست كذلك. كشك في ممر retail يحتاج timeouts للجلسة، وضع جذب، وأهداف لمس لا مثيل لها على متصفح desktop. نحافظ على نموذج المجال فريداً وأهداف العرض منفصلة.' },
        { q: 'كيف يكون نتيجة سحب الجائزة قابلة للدفاع تحت التدقيق؟', a: 'كل انتقال حالة — إرسال، flag تحقق، قرار تنسيق، حدث تصدير — يُضاف إلى سجل تدقيق غير قابل للتغيير مُفهرَس على هوية الإرسال. manifest السحب يُولَّد من هذا السجل، لا من قاعدة البيانات الحية.' },
        { q: 'كيف تتعاملون مع الإدخال العدائي دون حجب المستهلكين الشرعيين؟', a: 'كشف التكرار حتمي ويعمل عند حدود الكتابة. rate-limiting مُرسَّى على إشارات متعددة — بصمة الجهاز، hash هوية الإرسال، نمط زمني — ليس IP وحده.' },
        { q: 'ما التكلفة الهندسية لاستيعاب ذروة الترافيك؟', a: 'قريبة من الصفر عندما تكون المعمارية صحيحة. التسليم static-first من شبكة edge يجعل الرسم الأول مجانياً. الكتابات الديناميكية تتوسع على primitives managed تُسعَّر بالثانية.' },
        { q: 'هل تنتقل نفس المعمارية لفعاليات علامات استهلاكية أخرى؟', a: 'نعم. الشكل الهندسي — استيعاب ثلاث أسطح، مسار كتابة متقطع، تنسيق تدقيق-كامل، حدث إخراج قابل للدفاع — يتكرر عبر الترويجات on-pack والآليات scan-to-redeem وتفعيلات الولاء ومسابقات retail-tied.' },
      ],
    },
    related: {
      eyebrow: 'الخدمات الهندسية المُطبَّقة',
      items: [
        { label: 'تطوير برمجيات مخصصة', href: '/services/software-engineering/', desc: 'نموذج المجال، عزل مسار الكتابة، سجل تدقيق غير قابل للتغيير' },
        { label: 'تطوير تطبيقات جوال', href: '/services/mobile/', desc: 'عميل أصلي مُقسَّى للكشك، حالة جلسة ذاتية الاستعادة' },
        { label: 'هندسة المنتج', href: '/services/product/', desc: 'منتج ثلاث-أسطح مُسلَّم كنظام واحد، انضباط واحد' },
        { label: 'السحابة و DevOps', href: '/services/cloud/', desc: 'تسليم ثابت edge-first، توسع مسار كتابة managed' },
      ],
    },
    cta: { eyebrow: 'تُشغِّل حدثاً يجب أن يصمد تحت التدقيق؟', title: 'سيملوب يُهندس منصات تفعيل استهلاكية حيث الصحة والقابلية للدفاع متطلبات من الدرجة الأولى، ليست إضافات لاحقة. نموذج مجال واحد، أهداف عرض متعددة، تدقيق-كامل افتراضياً.', button: 'احجز مكالمة 30 دقيقة' },
    backToHub: 'العودة إلى جميع دراسات الحالة',
  },
};

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } };
const stagger = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } } };

function renderRichText(text) {
  const parts = String(text).split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) => {
    if (p.startsWith('**') && p.endsWith('**')) return <span key={i} className="font-normal text-white border-b border-white/30">{p.slice(2, -2)}</span>;
    return <span key={i}>{p}</span>;
  });
}

export default function SadiaCaseStudyPage() {
  const { locale } = useRouter();
  const isRtl = locale === 'ar';
  const c = CONTENT[locale] || CONTENT.en;

  const articleLd = {
    '@context': 'https://schema.org', '@type': 'Article', '@id': 'https://symloop.com/case-studies/sadia/#article',
    headline: `${c.client} — ${c.tagline}`,
    alternativeHeadline: 'Buy-Scan-Win consumer promotional platform — FMCG activation case study',
    description: c.dek,
    image: ['https://symloop.com/case-studies/sadia-cover.jpg', 'https://symloop.com/case-studies/sadia-logo.png'],
    datePublished: '2024-09-01', dateModified: '2026-04-17',
    inLanguage: locale === 'ar' ? 'ar' : locale === 'fr' ? 'fr' : 'en',
    articleSection: 'Case Study', keywords: 'consumer activation engineering, FMCG promotional platform, burst-traffic architecture, immutable audit log, cross-surface product engineering, kiosk-hardened client, write-path isolation, receipt deduplication',
    author: { '@type': 'Organization', name: 'Symloop Technology', url: 'https://symloop.com' },
    publisher: { '@type': 'Organization', name: 'Symloop Technology', logo: { '@type': 'ImageObject', url: 'https://symloop.com/sym-logo.png' } },
    about: [
      { '@type': 'SoftwareApplication', name: 'Sadia Buy Scan & Win Platform', url: 'https://winwithsadia.com', applicationCategory: 'BusinessApplication', operatingSystem: 'Web, Android' },
      { '@type': 'Thing', name: 'FMCG consumer activation' },
      { '@type': 'Thing', name: 'Promotional campaign platform' },
      { '@type': 'Thing', name: 'In-store kiosk technology' },
    ],
    mentions: [
      { '@type': 'Thing', name: 'Consumer activation engineering' },
      { '@type': 'Thing', name: 'Write-path isolation' },
      { '@type': 'Thing', name: 'Immutable audit log' },
      { '@type': 'Thing', name: 'Kiosk-hardened client architecture' },
      { '@type': 'Thing', name: 'Burst-aware static delivery' },
      { '@type': 'Thing', name: 'Perceptual hashing deduplication' },
    ],
    audience: { '@type': 'BusinessAudience', audienceType: 'FMCG brand managers, retail marketing directors, consumer brand CMOs, activation agency leads' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://symloop.com/case-studies/sadia/' },
  };

  const faqLd = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: c.faq.items.map(item => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })),
  };

  const combinedLd = { '@context': 'https://schema.org', '@graph': [articleLd, faqLd] };
  const breadcrumbs = [
    { name: 'Home', url: 'https://symloop.com/' },
    { name: 'Case Studies', url: 'https://symloop.com/case-studies/' },
    { name: c.client, url: 'https://symloop.com/case-studies/sadia/' },
  ];

  const seoKeywords = [
    'sadia case study', 'sadia win with sadia', 'winwithsadia', 'sadia buy scan win',
    'FMCG campaign platform', 'plateforme campagne FMCG', 'consumer activation platform',
    'plateforme activation consommateur', 'brand campaign platform MENA', 'promotional platform Algeria',
    'plateforme promotionnelle Algérie', 'buy scan win platform', 'QR code campaign platform',
    'receipt scan contest', 'concours ticket scan', 'in-store tablet kiosk', 'kiosque tablette magasin',
    'kiosk-hardened mobile client', 'burst-aware campaign backend', 'consumer activation engineering',
    'panneau admin marque', 'FMCG marketing technology', 'Martech MENA', 'retail activation software',
    'logiciel activation retail', 'halal brand marketing platform', 'symloop sadia',
    'منصة تفعيل استهلاكي', 'Buy Scan Win الجزائر', 'Sadia حملة', 'symloop case studies',
  ].join(', ');

  return (
    <>
      <SEO
        title={`${c.client} — ${c.tagline} | Symloop Case Study`}
        description={c.dek}
        keywords={seoKeywords}
        type="article"
        structuredData={combinedLd}
        breadcrumbs={breadcrumbs}
        image="/case-studies/sadia-cover.jpg"
      />
      <main dir={isRtl ? 'rtl' : 'ltr'} className="bg-black text-white">

        <section className="relative border-b border-white/[0.06]">
          <div className="max-w-5xl mx-auto px-6 lg:px-10 pt-32 lg:pt-40 pb-16">
            <motion.div initial="hidden" animate="show" variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <Link href="/case-studies/" className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors">{c.eyebrow}</Link>
                <span className="h-px w-12 bg-white/20" />
                <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/35">{c.publishedAt}</span>
              </motion.div>
              <motion.div variants={fadeUp} className="flex items-center gap-5 mb-8">
                <div className="relative w-16 h-16 border border-white/[0.08] bg-white flex items-center justify-center overflow-hidden">
                  <Image src="/case-studies/sadia-logo.png" alt="Sadia logo" width={48} height={48} className="object-contain" />
                </div>
                <div>
                  <div className="text-sm font-mono tracking-[0.1em] uppercase text-white/40 mb-1">Client</div>
                  <a href={c.url} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 text-2xl lg:text-3xl font-light text-white hover:text-white/70 transition-colors">
                    {c.client}
                    <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-white/70 transition-colors" strokeWidth={1.5} />
                  </a>
                </div>
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-4xl lg:text-6xl xl:text-7xl font-light tracking-tight leading-[1.05]">{c.tagline}</motion.h1>
              <motion.p variants={fadeUp} className="mt-8 text-xl lg:text-2xl text-white/60 leading-relaxed font-light max-w-3xl">{c.dek}</motion.p>
              <motion.div variants={fadeUp} className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-3 font-mono text-[11px] tracking-[0.15em] uppercase text-white/35 pt-8 border-t border-white/[0.08]">
                <span>{c.duration}</span>
                <span>{c.publishedAt}</span>
              </motion.div>
            </motion.div>
          </div>
          <div className="relative w-full aspect-[16/9] lg:aspect-[21/9] border-y border-white/[0.06] bg-white/[0.02] overflow-hidden">
            <Image src="/case-studies/sadia-cover.jpg" alt={`${c.client} — ${c.tagline}`} fill priority sizes="100vw" className="object-cover" />
          </div>
        </section>

        <section className="border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
            <ul className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06]">
              {c.stats.map((s, i) => (
                <li key={i} className="bg-black p-8 lg:p-10">
                  <div className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-white leading-none mb-5">{s.value}</div>
                  <div className="font-mono text-[10px] lg:text-[11px] tracking-[0.15em] uppercase text-white/45 leading-snug">{s.label}</div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          {[c.overview, c.solution, c.architecture].map((section, si) => (
            <motion.section key={si} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="mb-16 lg:mb-20">
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{section.eyebrow}</span>
                <span className="h-px flex-1 bg-white/10" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-3xl lg:text-5xl font-light tracking-tight mb-10">{section.title}</motion.h2>
              <div className="space-y-5">
                {section.body.map((p, i) => (<motion.p key={i} variants={fadeUp} className="text-base lg:text-lg text-white/65 leading-relaxed">{renderRichText(p)}</motion.p>))}
              </div>
            </motion.section>
          ))}

          <motion.section initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="mb-16 lg:mb-20">
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{c.challenges.eyebrow}</span>
              <span className="h-px flex-1 bg-white/10" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl lg:text-5xl font-light tracking-tight mb-10">{c.challenges.title}</motion.h2>
            <ul className="space-y-0 border border-white/[0.08]">
              {c.challenges.items.map((ch, i) => (
                <motion.li key={i} variants={fadeUp} className="p-6 lg:p-8 border-b border-white/[0.08] last:border-b-0">
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="font-mono text-[11px] tracking-[0.15em] text-white/30 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="text-lg lg:text-xl font-light text-white leading-tight">{ch.heading}</h3>
                  </div>
                  <p className="text-base text-white/55 leading-relaxed ps-0 lg:ps-10">{ch.body}</p>
                </motion.li>
              ))}
            </ul>
          </motion.section>

          <motion.section initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="mb-16 lg:mb-20 border border-white/[0.08] bg-white/[0.015] p-8 lg:p-12">
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{c.outcomes.eyebrow}</span>
              <span className="h-px flex-1 bg-white/10" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-2xl lg:text-3xl font-light tracking-tight mb-8">{c.outcomes.title}</motion.h2>
            <ul className="space-y-5">
              {c.outcomes.items.map((o, i) => (
                <motion.li key={i} variants={fadeUp} className="flex items-start gap-5">
                  <span className="font-mono text-[11px] tracking-[0.15em] text-white/30 pt-1.5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <p className="text-base lg:text-lg text-white/75 leading-relaxed font-light">{o}</p>
                </motion.li>
              ))}
            </ul>
          </motion.section>

          <motion.section initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="mb-16">
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{c.tech.eyebrow}</span>
              <span className="h-px flex-1 bg-white/10" />
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              {c.tech.items.map((t, i) => (<span key={i} className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/60 border border-white/[0.12] px-4 py-2">{t}</span>))}
            </motion.div>
          </motion.section>

          <motion.section initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="mb-16 lg:mb-20">
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{c.related.eyebrow}</span>
              <span className="h-px flex-1 bg-white/10" />
            </motion.div>
            <div className="grid sm:grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06]">
              {c.related.items.map((s, i) => (
                <motion.div key={i} variants={fadeUp} className="bg-black">
                  <Link href={s.href} className="group block p-6 hover:bg-white/[0.02] transition-colors">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="font-mono text-[11px] tracking-[0.15em] text-white/30">{String(i + 1).padStart(2, '0')}</span>
                      <h3 className="text-lg font-light text-white leading-tight group-hover:text-white transition-colors">{s.label}</h3>
                    </div>
                    <p className="text-sm text-white/50 leading-relaxed ps-0 sm:ps-7 mb-4">{s.desc}</p>
                    <div className="ps-0 sm:ps-7"><ArrowRight className="w-3.5 h-3.5 text-white/30 group-hover:text-white/80 group-hover:translate-x-1 transition-all" strokeWidth={1.5} /></div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="mb-16 lg:mb-20">
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{c.faq.eyebrow}</span>
              <span className="h-px flex-1 bg-white/10" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-2xl lg:text-3xl font-light tracking-tight mb-10">{c.faq.title}</motion.h2>
            <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {c.faq.items.map((f, i) => (
                <motion.details key={i} variants={fadeUp} className="group">
                  <summary className="cursor-pointer list-none py-5 px-2 flex items-start gap-4 hover:bg-white/[0.015] transition-colors">
                    <span className="font-mono text-[11px] tracking-[0.15em] text-white/30 pt-1.5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-base lg:text-lg font-light text-white leading-snug flex-1">{f.q}</span>
                    <span className="font-mono text-lg text-white/40 group-open:rotate-45 transition-transform shrink-0">+</span>
                  </summary>
                  <div className="pb-6 ps-10 pe-4"><p className="text-base text-white/60 leading-relaxed">{f.a}</p></div>
                </motion.details>
              ))}
            </div>
          </motion.section>
        </article>

        <section className="border-t border-white/[0.06]">
          <div className="max-w-5xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="max-w-3xl">
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{c.cta.eyebrow}</span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-3xl lg:text-5xl font-light tracking-tight leading-[1.1]">{c.cta.title}</motion.h2>
              <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-x-12 gap-y-6">
                <Link href="/contact/" className="group inline-flex items-center gap-3 text-sm font-medium tracking-wide text-white border-b border-white/30 hover:border-white pb-2 transition-colors">
                  <span>{c.cta.button}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
                </Link>
                <Link href="/case-studies/" className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.15em] uppercase text-white/40 hover:text-white transition-colors">
                  {isRtl ? <ArrowRight className="w-3.5 h-3.5 rotate-180" strokeWidth={1.5} /> : <ArrowLeft className="w-3.5 h-3.5" strokeWidth={1.5} />}
                  <span>{c.backToHub}</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return { props: { ...(await serverSideTranslations(locale || 'en', ['common'])) } };
}
