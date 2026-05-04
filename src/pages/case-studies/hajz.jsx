// ============================================================================
// SYMLOOP — Case study: Hajz — travel & hospitality booking SaaS for Algeria
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
    eyebrow: 'Case Study · N°03',
    client: 'Hajz',
    tagline: 'Booking marketplace engineering — three verticals, one reservation model.',
    dek: 'A three-sided booking marketplace engineered as a single reservation domain rendered across consumer, operator, and platform clients. Three categorically different booking verticals — overnight stays, time-slotted seating, and dated asset rentals — unified under one reservation model with strict locale, state-transition, and financial-reconciliation discipline. Engineered from zero to production.',
    publishedAt: 'Delivered 2025',
    duration: '10 months · 5 engineers',
    url: 'https://hajz-algeria.com',
    stats: [
      { value: '3', label: 'Booking verticals on one reservation model' },
      { value: '3', label: 'Client roles (consumer · operator · platform)' },
      { value: 'Tri', label: 'Full RTL + LTR locale matrix' },
      { value: 'Live', label: 'Production deployment, market-first' },
    ],
    overview: {
      eyebrow: 'Engineering brief',
      title: 'The problem framed as engineering.',
      body: [
        'A booking marketplace is not a catalog with a checkout. It is a reservation system whose correctness is judged at two moments — the moment of booking confirmation, and the moment the consumer physically arrives. Between those two moments, inventory must be held, communicated to the operator, recovered on cancellation, and reconciled against the money that moved. Every one of these transitions is adversarial: consumers abandon, operators miss notifications, networks drop midway through a webhook.',
        'The engineering discipline here is **reservation state machines under three heterogeneous vertical semantics and three client roles**. Hotels reserve nights. Restaurants reserve time windows. Rentals reserve dated assets with pickup and return events. Each vertical has its own availability topology, its own cancellation surface, and its own failure modes — but the reservation domain must be one model so the platform is operable as one system.',
        'Symloop\'s position from the architecture review: unify the reservation state machine, isolate the vertical-specific rules behind a clean interface, and never allow vertical divergence to leak into the operator console or the financial-reconciliation path.',
      ],
    },
    solution: {
      eyebrow: 'What we built',
      title: 'One reservation system. Three client roles.',
      body: [
        '**Consumer client** — a search-and-book surface where the reservation flow is vertical-aware but the domain language underneath is identical across verticals. Consumers see three categorically different booking experiences because the ergonomics are different; the underlying reservation, the underlying confirmation, and the underlying cancellation path are one code path. Strong locale discipline: every date, currency, number, and time-zone rendering is locale-owned, never ad-hoc.',
        '**Operator client** — a role-scoped console for the supply side. Availability calendars, pricing rules, listing content, and incoming reservations are first-class objects. Operators see only the verticals they own. The console is engineered for non-technical operators working under time pressure — which is a different performance and error-surface profile than the consumer client, handled as a separate rendering context against the same domain.',
        '**Platform client** — the platform-operations console for onboarding providers, moderating listings, resolving disputes, and generating reconciliation reports. The platform role never touches consumer or operator write paths — it reads the reservation history and writes only moderation and configuration. This boundary is enforced at the service layer, not at the UI.',
        '**Reservation domain** — a single state machine with well-defined transitions: inquiry → held → confirmed → fulfilled or cancelled or refunded. Every transition emits an event that the financial-reconciliation pipeline and the notification pipeline consume independently. No business code is allowed to write reservation state by direct mutation; transitions go through the domain interface.',
        '**Payment abstraction** — a payment gateway interface that isolates the domain from any specific processor. The platform talks to an internal payment contract; concrete processors live behind an adapter. Swapping a processor — or adding a second one for a new market — does not touch reservation logic.',
        '**Notification abstraction** — an outbound-messaging interface on the same pattern: the domain emits events, the notification layer decides delivery channel (email, SMS, in-app) and format. The domain does not know how a confirmation reaches a consumer; it only knows one was confirmed.',
      ],
    },
    architecture: {
      eyebrow: 'Architecture principles',
      title: 'Domain-centric, vendor-isolated, locale-complete.',
      body: [
        '**Single reservation domain.** One aggregate, one state machine, one audit trail. Vertical-specific behavior (night count vs. time slot vs. pickup/return) lives in policy objects that implement a common reservation interface, not in parallel codebases. This is the core decision that makes the marketplace operable.',
        '**Service-level role boundaries.** Consumer, operator, and platform code paths share the same data but not the same write capability. Authorization is enforced at the service layer — the UI does not decide what a user can do; it discovers what the service allows. This keeps the trust model intact even when the UI changes.',
        '**Processor-agnostic payment contract.** The reservation domain emits money-movement events against an internal contract. Whichever payment processor the market requires sits behind that contract as an adapter. Regional rollout does not mean rewriting the reservation engine; it means implementing one adapter.',
        '**Locale as a first-class citizen.** Arabic RTL, French LTR, English LTR — the application is not a translated English codebase. Locale information flows through every layer: format, calendar, currency, timezone, sorting, validation. No surface of the product displays a locale-incorrect artifact.',
        '**Static-first SEO surface, dynamic-first booking surface.** The public pages are statically generated at build time for SEO correctness and edge delivery. The booking flow is dynamic, authenticated, and isolated from the SEO pipeline. A search-engine crawler and a paying consumer never contend for the same resources.',
        '**Separate read and write infrastructures.** Consumer reads, operator reads, and platform reads scale on different planes. Reservation writes go through a single-writer contract so state transitions remain deterministic under concurrent load. This is the boundary that keeps the marketplace correct when traffic spikes.',
      ],
    },
    challenges: {
      eyebrow: 'Engineering problems worth documenting',
      title: 'What made this hard, and how we resolved it.',
      items: [
        { heading: 'Unifying three booking semantics without leaking them', body: 'A hotel reservation and a restaurant reservation look like the same object from far away and are different objects up close. The temptation is to build three reservation models and glue them together in the UI. That produces three diverging codebases and a financial-reconciliation path nobody trusts. We built one reservation aggregate with vertical-specific policy objects — a hotel-reservation policy, a restaurant-reservation policy, a rental-reservation policy — all implementing the same interface. The domain logic is vertical-blind. The rendering is vertical-specific. The reconciliation is single-source.' },
        { heading: 'State transitions under concurrent reservation load', body: 'Two consumers can try to hold the last available room at the same millisecond. Three-sided state transitions are harder: a consumer initiates, the operator confirms, a payment processor acknowledges, and the system has to accept or reject the whole sequence as one transition. We use single-writer semantics at the reservation boundary, an append-only event log for every state change, and idempotent keys on every inbound side-effect so a retry never produces a duplicate reservation.' },
        { heading: 'Locale correctness at every layer, not just translation', body: 'Arabic RTL is not a translation feature — it is a layout, calendar, and numeric-formatting concern that touches every rendering path. Restaurant time slots must display in a locale-correct 12- or 24-hour form. Hotel stays must render in the calendar the consumer recognizes. Currency must format with the thousand-separator the locale expects. We made locale an explicit parameter on every format call and verified the matrix with locale-specific tests, because a silent locale bug is the kind of defect that erodes consumer trust without ever producing a stack trace.' },
        { heading: 'Adapter discipline on payment and messaging', body: 'The platform must settle money and send notifications. The temptation is to wire a specific processor and a specific messaging vendor directly into the reservation code because that is faster on day one. On day 300, when the market changes or the vendor fails, the cost of that shortcut is a rewrite. We put a payment adapter and a notification adapter behind strict internal contracts from the first commit. The domain never knows who processes payments or who delivers SMS. That decision keeps the platform portable across markets.' },
      ],
    },
    outcomes: {
      eyebrow: 'Outcomes',
      title: 'What shipped in production, and what it changed.',
      items: [
        'Three booking verticals — overnight stays, time-slotted seating, and dated asset rentals — running against a single reservation domain with no observable behavior drift between them.',
        'Three client roles (consumer, operator, platform) operating on service-level authorization with no privilege leakage path between them.',
        'Full trilingual product surface with locale discipline enforced at every rendering layer — no partial-translation defects, no layout-direction defects.',
        'Payment and messaging integrations behind internal contracts so regional expansion or vendor replacement is an adapter change, not a core rewrite.',
        'Static-first SEO surface deployed at the edge with a separate dynamic booking plane — the booking system is never contended by search-engine crawl traffic.',
        'First operational integrated booking platform in the market — a product category that did not exist before this system shipped.',
      ],
    },
    tech: { eyebrow: 'Tech stack', items: ['Typed server runtime', 'Typed frontend framework', 'Relational database', 'Event log for reservation history', 'Edge-delivered SEO surface', 'Role-scoped service layer', 'Adapter-isolated payment', 'Adapter-isolated messaging', 'Full RTL layout system'] },
    faq: {
      eyebrow: 'Engineering FAQ',
      title: 'What technical buyers and founders ask us about this project.',
      items: [
        { q: 'Why a single reservation domain instead of one per vertical?', a: 'Because a marketplace that runs three parallel reservation models also runs three parallel reconciliation systems, three parallel cancellation paths, and three parallel operational consoles. That shape is indistinguishable from three separate products that happen to share a logo. We build one reservation domain and push the vertical differences to policy objects behind a stable interface — the platform remains operable as one system and the financial trail remains single-source.' },
        { q: 'How do you handle the risk of depending on one payment processor?', a: 'We do not depend on any specific processor. The reservation domain talks to an internal payment contract. Whichever processor the market requires sits behind that contract as an adapter. Swapping processors — or adding a second one for a new country — is an adapter-level change, not a core rewrite. This is the principle we apply to every external service the platform consumes.' },
        { q: 'How is the platform defensible under concurrent reservation load?', a: 'Single-writer semantics at the reservation boundary, append-only event log for state transitions, idempotent keys on every inbound side-effect. Two consumers racing for the last available slot produce exactly one confirmed reservation and exactly one rejection — never two holds, never two charges, never a ghost booking. We verify this with concurrency tests before any release.' },
        { q: 'Does locale support extend beyond translation?', a: 'Yes. Arabic RTL is a layout and formatting discipline that touches every rendering path — calendar, numeric formatting, currency, time-zone, sorting, validation error rendering. We treat locale as a first-class parameter on every format call, not a global toggle. A silent locale defect is the kind of bug that erodes consumer trust without ever producing a failure log.' },
        { q: 'Can this architecture transfer to other marketplaces or verticals?', a: 'Yes. The engineering shape — one reservation domain, three client roles, adapter-isolated external services, event-driven reconciliation, locale-first rendering — is how we build multi-vendor marketplaces across any vertical where an operator is matched with a consumer under a time-or-asset-constrained contract. The domain language changes per market. The architecture does not.' },
      ],
    },
    related: {
      eyebrow: 'Engineering services applied on this project',
      items: [
        { label: 'Custom Software Engineering', href: '/services/software-engineering/', desc: 'Reservation domain, state machine, event log, role-scoped service layer' },
        { label: 'Product Engineering', href: '/services/product/', desc: 'Zero-to-production delivery as a single coherent product' },
        { label: 'Cloud & DevOps', href: '/services/cloud/', desc: 'Edge-first SEO surface, isolated booking plane, deployment discipline' },
        { label: 'Technology Consulting', href: '/services/consulting/', desc: 'Architecture review, vendor-abstraction boundaries, concurrency model' },
      ],
    },
    cta: { eyebrow: 'Building a marketplace that has to stay correct?', title: 'Symloop engineers booking marketplaces and multi-sided platforms where correctness, locale discipline, and vendor independence are first-class design decisions, not integration afterthoughts.', button: 'Book a 30-minute call' },
    backToHub: 'Back to all case studies',
  },
  fr: {
    eyebrow: 'Étude de cas · N°03',
    client: 'Hajz',
    tagline: "Ingénierie de marketplace de réservation — trois verticales, un modèle de réservation.",
    dek: "Une marketplace de réservation trois-côtés conçue comme un seul domaine de réservation rendu sur des clients consommateur, opérateur et plateforme. Trois verticales de réservation catégoriquement différentes — nuits d'hôtel, créneaux horaires, location d'actifs datés — unifiées sous un seul modèle de réservation avec une discipline stricte de locale, transitions d'état et réconciliation financière. Ingénieré de zéro à la production.",
    publishedAt: 'Livré 2025',
    duration: '10 mois · 5 ingénieurs',
    url: 'https://hajz-algeria.com',
    stats: [
      { value: '3', label: 'Verticales sur un modèle de réservation' },
      { value: '3', label: 'Rôles clients (consommateur · opérateur · plateforme)' },
      { value: 'Tri', label: 'Matrice locale RTL + LTR complète' },
      { value: 'Live', label: 'Déploiement production, premier sur le marché' },
    ],
    overview: {
      eyebrow: "Brief d'ingénierie",
      title: "Le problème cadré comme ingénierie.",
      body: [
        "Une marketplace de réservation n'est pas un catalogue avec un checkout. C'est un système de réservation dont la correction est jugée à deux moments — au moment de la confirmation de réservation, et au moment où le consommateur arrive physiquement. Entre ces deux moments, l'inventaire doit être tenu, communiqué à l'opérateur, récupéré à l'annulation, et réconcilié contre l'argent qui a bougé. Chacune de ces transitions est adversariale : les consommateurs abandonnent, les opérateurs manquent les notifications, les réseaux coupent au milieu d'un webhook.",
        "La discipline d'ingénierie ici est **les machines à états de réservation sous trois sémantiques verticales hétérogènes et trois rôles clients**. Les hôtels réservent des nuits. Les restaurants réservent des créneaux horaires. Les locations réservent des actifs datés avec événements de pickup et de return. Chaque verticale a sa propre topologie de disponibilité, sa propre surface d'annulation et ses propres modes d'échec — mais le domaine de réservation doit être un modèle pour que la plateforme soit opérable comme un système.",
        "La position de Symloop depuis la revue d'architecture : unifier la machine à états de réservation, isoler les règles spécifiques à chaque verticale derrière une interface propre, et ne jamais laisser la divergence verticale s'écouler dans la console opérateur ou le path de réconciliation financière.",
      ],
    },
    solution: {
      eyebrow: 'Ce que nous avons construit',
      title: 'Un système de réservation. Trois rôles clients.',
      body: [
        "**Client consommateur** — une surface de recherche-et-réservation où le flow de réservation est vertical-conscient mais le langage de domaine en dessous est identique à travers les verticales. Les consommateurs voient trois expériences de réservation catégoriquement différentes parce que l'ergonomie est différente ; la réservation sous-jacente, la confirmation sous-jacente et le path d'annulation sous-jacent sont un seul code path. Forte discipline locale : chaque date, devise, nombre et rendu de fuseau horaire est locale-owned, jamais ad-hoc.",
        "**Client opérateur** — une console role-scoped pour le côté offre. Calendriers de disponibilité, règles de prix, contenu de listing et réservations entrantes sont des objets de première classe. Les opérateurs ne voient que les verticales qu'ils possèdent. La console est ingénierée pour des opérateurs non-techniques travaillant sous pression temporelle — un profil de performance et de surface d'erreur différent du client consommateur, traité comme un contexte de rendu séparé contre le même domaine.",
        "**Client plateforme** — la console d'opérations de plateforme pour onboarder les fournisseurs, modérer les listings, résoudre les disputes et générer les rapports de réconciliation. Le rôle plateforme ne touche jamais les write paths consommateur ou opérateur — il lit l'historique de réservation et n'écrit que modération et configuration. Cette frontière est appliquée au niveau service, pas au niveau UI.",
        "**Domaine de réservation** — une seule machine à états avec des transitions bien définies : inquiry → held → confirmed → fulfilled ou cancelled ou refunded. Chaque transition émet un événement que le pipeline de réconciliation financière et le pipeline de notification consomment indépendamment. Aucun code métier n'est autorisé à écrire l'état de réservation par mutation directe ; les transitions passent par l'interface de domaine.",
        "**Abstraction de paiement** — une interface de passerelle de paiement qui isole le domaine de tout processeur spécifique. La plateforme parle à un contrat de paiement interne ; les processeurs concrets vivent derrière un adaptateur. Changer de processeur — ou en ajouter un second pour un nouveau marché — ne touche pas la logique de réservation.",
        "**Abstraction de notification** — une interface de messagerie sortante sur le même pattern : le domaine émet des événements, la couche de notification décide du canal de livraison (email, SMS, in-app) et du format. Le domaine ne sait pas comment une confirmation atteint un consommateur ; il sait seulement qu'une a été confirmée.",
      ],
    },
    architecture: {
      eyebrow: "Principes d'architecture",
      title: 'Centrée domaine, isolée vendor, locale-complète.',
      body: [
        "**Domaine de réservation unique.** Un agrégat, une machine à états, un audit trail. Le comportement spécifique à chaque verticale (nombre de nuits vs. créneau horaire vs. pickup/return) vit dans des objets de politique qui implémentent une interface de réservation commune, pas dans des codebases parallèles. C'est la décision centrale qui rend la marketplace opérable.",
        "**Frontières de rôle au niveau service.** Les code paths consommateur, opérateur et plateforme partagent les mêmes données mais pas la même capacité d'écriture. L'autorisation est appliquée au niveau service — l'UI ne décide pas ce qu'un utilisateur peut faire ; elle découvre ce que le service permet. Cela garde le modèle de confiance intact même quand l'UI change.",
        "**Contrat de paiement processor-agnostic.** Le domaine de réservation émet des événements de mouvement de fonds contre un contrat interne. Le processeur que le marché requiert s'assied derrière ce contrat comme un adaptateur. L'expansion régionale ne signifie pas réécrire le moteur de réservation ; cela signifie implémenter un adaptateur.",
        "**Locale comme citoyen de première classe.** Arabe RTL, français LTR, anglais LTR — l'application n'est pas un codebase anglais traduit. L'information de locale coule à travers chaque couche : format, calendrier, devise, fuseau horaire, tri, validation. Aucune surface du produit n'affiche un artefact locale-incorrect.",
        "**Surface SEO statique, surface de réservation dynamique.** Les pages publiques sont générées statiquement au build time pour la correction SEO et la livraison edge. Le flow de réservation est dynamique, authentifié et isolé du pipeline SEO. Un crawler de moteur de recherche et un consommateur payant ne concurrencent jamais pour les mêmes ressources.",
        "**Infrastructures read et write séparées.** Les reads consommateur, opérateur et plateforme scalent sur des plans différents. Les writes de réservation passent par un contrat single-writer pour que les transitions d'état restent déterministes sous charge concurrente.",
      ],
    },
    challenges: {
      eyebrow: "Problèmes d'ingénierie qui méritent documentation",
      title: 'Ce qui a rendu ça difficile, et comment nous l\'avons résolu.',
      items: [
        { heading: 'Unifier trois sémantiques de réservation sans les laisser fuir', body: "Une réservation d'hôtel et une réservation de restaurant ressemblent au même objet de loin et sont des objets différents de près. La tentation est de construire trois modèles de réservation et de les coller ensemble dans l'UI. Cela produit trois codebases divergents et un path de réconciliation financière que personne ne fait confiance. Nous avons construit un agrégat de réservation avec des objets de politique spécifiques aux verticales — une politique de réservation hôtel, une politique restaurant, une politique location — toutes implémentant la même interface. La logique de domaine est vertical-aveugle. Le rendu est vertical-spécifique. La réconciliation est single-source." },
        { heading: "Transitions d'état sous charge de réservation concurrente", body: "Deux consommateurs peuvent essayer de tenir la dernière chambre disponible à la même milliseconde. Les transitions d'état à trois côtés sont plus difficiles : un consommateur initie, l'opérateur confirme, un processeur de paiement acquitte, et le système doit accepter ou rejeter toute la séquence comme une transition. Nous utilisons la sémantique single-writer à la frontière de réservation, un event log append-only pour chaque changement d'état, et des clés idempotentes sur chaque side-effect entrant." },
        { heading: 'Correction locale à chaque couche, pas juste traduction', body: "L'arabe RTL n'est pas une feature de traduction — c'est une préoccupation de layout, calendrier et formatage numérique qui touche chaque path de rendu. Les créneaux horaires de restaurant doivent s'afficher dans une forme locale-correcte 12 ou 24 heures. Les séjours d'hôtel doivent rendre dans le calendrier que le consommateur reconnaît. La devise doit formater avec le séparateur de milliers que la locale attend. Nous avons fait de la locale un paramètre explicite sur chaque appel de format." },
        { heading: 'Discipline adaptateur sur paiement et messaging', body: "La plateforme doit régler l'argent et envoyer des notifications. La tentation est de câbler un processeur et un vendor messaging spécifiques directement dans le code de réservation parce que c'est plus rapide au jour 1. Au jour 300, quand le marché change ou le vendor échoue, le coût de ce raccourci est une réécriture. Nous avons mis un adaptateur de paiement et un adaptateur de notification derrière des contrats internes stricts dès le premier commit." },
      ],
    },
    outcomes: {
      eyebrow: 'Résultats',
      title: 'Ce qui a tourné en production, et ce que ça a changé.',
      items: [
        "Trois verticales de réservation — nuits, créneaux horaires, actifs datés — tournant contre un seul domaine de réservation sans dérive de comportement observable entre elles.",
        "Trois rôles clients (consommateur, opérateur, plateforme) opérant sur une autorisation au niveau service sans path de fuite de privilège entre eux.",
        "Surface produit trilingue complète avec discipline locale appliquée à chaque couche de rendu — aucun défaut de traduction partielle, aucun défaut de direction de layout.",
        "Intégrations paiement et messaging derrière des contrats internes pour que l'expansion régionale ou le remplacement de vendor soit un changement d'adaptateur, pas une réécriture centrale.",
        "Surface SEO statique déployée à l'edge avec un plan de réservation dynamique séparé — le système de réservation n'est jamais contendu par le trafic de crawl des moteurs de recherche.",
        "Première plateforme de réservation intégrée opérationnelle sur le marché — une catégorie de produit qui n'existait pas avant ce système.",
      ],
    },
    tech: { eyebrow: 'Stack technique', items: ['Runtime serveur typé', 'Framework frontend typé', 'Base relationnelle', 'Event log pour historique', 'Surface SEO edge-delivered', 'Service layer role-scoped', 'Paiement isolé par adaptateur', 'Messaging isolé par adaptateur', 'Système de layout RTL complet'] },
    faq: {
      eyebrow: "FAQ d'ingénierie",
      title: 'Ce que les acheteurs techniques et fondateurs nous demandent.',
      items: [
        { q: 'Pourquoi un seul domaine de réservation au lieu d\'un par verticale ?', a: "Parce qu'une marketplace qui tourne trois modèles de réservation parallèles tourne aussi trois systèmes de réconciliation parallèles, trois paths d'annulation parallèles et trois consoles opérationnelles parallèles. Cette forme est indistinguable de trois produits séparés qui se trouvent partager un logo. Nous construisons un domaine de réservation et poussons les différences verticales vers des objets de politique derrière une interface stable — la plateforme reste opérable comme un système et le trail financier reste single-source." },
        { q: "Comment gérez-vous le risque de dépendre d'un seul processeur de paiement ?", a: "Nous ne dépendons d'aucun processeur spécifique. Le domaine de réservation parle à un contrat de paiement interne. Le processeur que le marché requiert s'assied derrière ce contrat comme un adaptateur. Changer de processeurs — ou en ajouter un second pour un nouveau pays — est un changement niveau adaptateur, pas une réécriture centrale." },
        { q: 'Comment la plateforme est-elle défendable sous charge de réservation concurrente ?', a: "Sémantique single-writer à la frontière de réservation, event log append-only pour les transitions d'état, clés idempotentes sur chaque side-effect entrant. Deux consommateurs qui courent pour le dernier créneau disponible produisent exactement une réservation confirmée et exactement un rejet — jamais deux holds, jamais deux charges, jamais une ghost booking." },
        { q: 'Le support de locale s\'étend-il au-delà de la traduction ?', a: "Oui. L'arabe RTL est une discipline de layout et formatage qui touche chaque path de rendu — calendrier, formatage numérique, devise, fuseau horaire, tri, rendu d'erreur de validation. Nous traitons la locale comme un paramètre de première classe sur chaque appel de format, pas un toggle global." },
        { q: 'Cette architecture peut-elle se transférer à d\'autres marketplaces ou verticales ?', a: "Oui. La forme d'ingénierie — un domaine de réservation, trois rôles clients, services externes isolés par adaptateur, réconciliation event-driven, rendu locale-first — est comment nous construisons des marketplaces multi-vendors à travers toute verticale où un opérateur est matché avec un consommateur sous un contrat time-or-asset-contraint." },
      ],
    },
    related: {
      eyebrow: "Services d'ingénierie appliqués sur ce projet",
      items: [
        { label: 'Développement Logiciel Sur Mesure', href: '/services/software-engineering/', desc: 'Domaine de réservation, machine à états, event log, service layer role-scoped' },
        { label: 'Ingénierie Produit', href: '/services/product/', desc: 'Livraison zéro-à-production comme un produit cohérent unique' },
        { label: 'Cloud & DevOps', href: '/services/cloud/', desc: 'Surface SEO edge-first, plan de réservation isolé, discipline de déploiement' },
        { label: 'Conseil Technologique', href: '/services/consulting/', desc: "Revue d'architecture, frontières d'abstraction vendor, modèle de concurrence" },
      ],
    },
    cta: { eyebrow: 'Vous construisez une marketplace qui doit rester correcte ?', title: 'Symloop ingénierie les marketplaces de réservation et plateformes multi-côtés où la correction, la discipline locale et l\'indépendance vendor sont des décisions de design de première classe, pas des afterthoughts d\'intégration.', button: 'Réserver un appel de 30 minutes' },
    backToHub: 'Retour à toutes les études de cas',
  },
  ar: {
    eyebrow: 'دراسة حالة · N°03',
    client: 'Hajz',
    tagline: 'منصة SaaS لحجز السفر والضيافة — فنادق ومطاعم وتأجير سيارات للجزائر.',
    dek: 'سوق حجز ثلاثية الأطراف هُندست كمجال حجز واحد يُعرَض عبر عملاء المستهلك والمشغّل والمنصة. ثلاث قطاعات حجز مختلفة فئوياً — إقامات ليلية، حجوزات بمواعيد محددة، تأجير أصول مؤرَّخة — موحَّدة تحت نموذج حجز واحد مع انضباط صارم في اللغة المحلية وانتقالات الحالة والتسوية المالية. هُندست من الصفر إلى الإنتاج.',
    publishedAt: 'سُلِّم 2025',
    duration: '10 أشهر · 5 مهندسين',
    url: 'https://hajz-algeria.com',
    stats: [
      { value: '3', label: 'قطاعات (فنادق · مطاعم · سيارات)' },
      { value: '3', label: 'لغات (ع · ف · إ)' },
      { value: 'Tri', label: 'مصفوفة لغة RTL + LTR كاملة' },
      { value: 'الأولى', label: 'حجز إلكتروني للمطاعم في الجزائر' },
    ],
    overview: {
      eyebrow: 'موجز هندسي',
      title: 'المشكلة مُؤطَّرة كهندسة.',
      body: [
        'سوق الحجز ليست كتالوجاً مع checkout. إنها نظام حجز تُحكم صحته في لحظتين — لحظة تأكيد الحجز، ولحظة وصول المستهلك فيزيائياً. بين هاتين اللحظتين، يجب الاحتفاظ بالمخزون، وإبلاغ المشغّل، واستعادته عند الإلغاء، ومصالحته مقابل المال الذي تحرّك. كل واحدة من هذه التحولات عدائية.',
        'الانضباط الهندسي هنا هو **آلات حالة الحجز تحت ثلاث دلالات قطاعية غير متجانسة وثلاثة أدوار عميل**. الفنادق تحجز ليالي. المطاعم تحجز نوافذ زمنية. التأجير يحجز أصولاً مؤرَّخة. كل قطاع له طبولوجيا توفره الخاصة، وسطح إلغائه الخاص، وأوضاع فشله — لكن مجال الحجز يجب أن يكون نموذجاً واحداً ليكون النظام قابلاً للتشغيل.',
        'موقف سيملوب من مراجعة المعمارية: توحيد آلة حالة الحجز، وعزل القواعد الخاصة بكل قطاع خلف واجهة نظيفة، وعدم السماح أبداً للتباين القطاعي بالتسرب إلى كونسول المشغّل أو مسار التسوية المالية.',
      ],
    },
    solution: {
      eyebrow: 'ما بنيناه',
      title: 'نظام حجز واحد. ثلاثة أدوار عميل.',
      body: [
        '**عميل المستهلك** — سطح بحث-وحجز حيث تدفق الحجز مُدرك للقطاع لكن لغة المجال تحته متطابقة عبر القطاعات. انضباط لغة قوي: كل تاريخ، عملة، رقم، ومنطقة زمنية مُمتلَكة من قِبل اللغة، لا مُخصَّصة.',
        '**عميل المشغّل** — كونسول محدَّد الأدوار لجانب العرض. تقويمات التوفر، قواعد التسعير، محتوى القائمة والحجوزات الواردة هي كائنات من الدرجة الأولى. هُندس للمشغّلين غير التقنيين الذين يعملون تحت ضغط زمني.',
        '**عميل المنصة** — كونسول عمليات المنصة لإعداد المزوّدين، وتنسيق القوائم، وحل النزاعات، وتوليد تقارير التسوية. دور المنصة لا يلمس أبداً مسارات الكتابة للمستهلك أو المشغّل. هذه الحدود مُطبَّقة على مستوى الخدمة، لا على مستوى الواجهة.',
        '**مجال الحجز** — آلة حالة واحدة بانتقالات محددة: inquiry → held → confirmed → fulfilled أو cancelled أو refunded. كل انتقال يُصدر حدثاً يستهلكه خط أنابيب التسوية المالية وخط أنابيب الإشعار بشكل مستقل. لا يُسمح لكود عمل بكتابة حالة حجز بالتحوير المباشر؛ الانتقالات تمر عبر واجهة المجال.',
        '**تجريد الدفع** — واجهة بوابة دفع تعزل المجال عن أي معالج محدد. المنصة تتحدث إلى عقد دفع داخلي؛ المعالجات الخرسانية تعيش خلف محوّل. تبديل معالج — أو إضافة ثانٍ لسوق جديد — لا يلمس منطق الحجز.',
        '**تجريد الإشعار** — واجهة مراسلة صادرة على نفس النمط: المجال يُصدر أحداثاً، طبقة الإشعار تقرر قناة التسليم والتنسيق. المجال لا يعرف كيف يصل التأكيد إلى المستهلك.',
      ],
    },
    architecture: {
      eyebrow: 'مبادئ المعمارية',
      title: 'مُركَّزة على المجال، معزولة عن الموردين، مكتملة اللغة.',
      body: [
        '**مجال حجز واحد.** تجميع واحد، آلة حالة واحدة، مسار تدقيق واحد. السلوك الخاص بالقطاع يعيش في كائنات سياسة تُنفّذ واجهة حجز مشتركة، لا في قواعد كود متوازية. هذا القرار المركزي الذي يجعل السوق قابلة للتشغيل.',
        '**حدود دور على مستوى الخدمة.** مسارات كود المستهلك والمشغّل والمنصة تتشارك نفس البيانات لكن ليس نفس قدرة الكتابة. التفويض يُطبَّق على مستوى الخدمة — الواجهة لا تقرر ما يمكن لمستخدم فعله؛ تكتشف ما تسمح به الخدمة.',
        '**عقد دفع processor-agnostic.** مجال الحجز يُصدر أحداث تحريك أموال مقابل عقد داخلي. أي معالج يطلبه السوق يجلس خلف ذلك العقد كمحوّل. التوسع الإقليمي لا يعني إعادة كتابة محرك الحجز؛ يعني تنفيذ محوّل واحد.',
        '**اللغة كمواطن من الدرجة الأولى.** العربية RTL، الفرنسية LTR، الإنجليزية LTR — التطبيق ليس قاعدة كود إنجليزية مُترجَمة. معلومات اللغة تتدفق عبر كل طبقة.',
        '**سطح SEO ثابت، سطح حجز ديناميكي.** الصفحات العامة تُولَّد ثابتة في وقت البناء لصحة SEO وتسليم edge. تدفق الحجز ديناميكي، مُصادَق، ومعزول عن خط أنابيب SEO.',
        '**بنية قراءة وكتابة منفصلة.** قراءات المستهلك والمشغّل والمنصة تتوسع على مستويات مختلفة. كتابات الحجز تمر عبر عقد single-writer لتبقى انتقالات الحالة حتمية تحت حمل متزامن.',
      ],
    },
    challenges: {
      eyebrow: 'مشاكل هندسية تستحق التوثيق',
      title: 'ما جعل هذا صعباً، وكيف حلّيناه.',
      items: [
        { heading: 'توحيد ثلاث دلالات حجز دون السماح بتسربها', body: 'حجز فندق وحجز مطعم يبدوان كنفس الكائن من بعيد وهما كائنان مختلفان عن قرب. الإغراء هو بناء ثلاثة نماذج حجز ولصقها في الواجهة. يُنتج ذلك ثلاث قواعد كود متباينة ومسار تسوية مالية لا يثق به أحد. بنينا تجميع حجز واحد مع كائنات سياسة خاصة بكل قطاع — جميعها تُنفّذ نفس الواجهة.' },
        { heading: 'انتقالات حالة تحت حمل حجز متزامن', body: 'مستهلكان يمكن أن يحاولا الاحتفاظ بآخر غرفة متاحة في نفس الميلي ثانية. انتقالات الحالة ثلاثية الأطراف أصعب: مستهلك يبدأ، المشغّل يؤكد، معالج دفع يُقر، والنظام يجب أن يقبل أو يرفض التسلسل كله كانتقال واحد.' },
        { heading: 'صحة اللغة في كل طبقة، ليس فقط الترجمة', body: 'العربية RTL ليست ميزة ترجمة — إنها انضباط layout وتنسيق يلمس كل مسار rendering. نوافذ المطاعم الزمنية يجب أن تعرض بصيغة 12 أو 24 ساعة صحيحة محلياً. إقامات الفنادق يجب أن تُعرَض في التقويم الذي يتعرف عليه المستهلك.' },
        { heading: 'انضباط المحوّل على الدفع والمراسلة', body: 'المنصة يجب أن تسوّي الأموال وترسل الإشعارات. الإغراء هو توصيل معالج محدد ومورد مراسلة محدد مباشرة في كود الحجز لأن ذلك أسرع في اليوم الأول. في اليوم 300، عندما يتغير السوق أو يفشل المورد، تكلفة هذا الاختصار إعادة كتابة.' },
      ],
    },
    outcomes: {
      eyebrow: 'النتائج',
      title: 'ما تم تسليمه في الإنتاج، وماذا غيّر.',
      items: [
        'ثلاث قطاعات حجز — إقامات ليلية، حجوزات بمواعيد، تأجير أصول مؤرَّخة — تعمل على مجال حجز واحد دون انجراف سلوكي ملحوظ بينها.',
        'ثلاثة أدوار عميل (مستهلك، مشغّل، منصة) تعمل على تفويض مستوى الخدمة دون مسار تسرب صلاحيات بينها.',
        'سطح منتج ثلاثي اللغة كامل مع انضباط لغة مُطبَّق في كل طبقة rendering.',
        'تكاملات دفع ومراسلة خلف عقود داخلية ليكون التوسع الإقليمي أو استبدال المورد تغييراً لمحوّل، لا إعادة كتابة مركزية.',
        'سطح SEO ثابت منشور عند edge مع خط حجز ديناميكي منفصل — نظام الحجز لا يُنازَع أبداً من قبل ترافيك crawl محركات البحث.',
        'أول منصة حجز مُدمَجة تشغيلية في السوق — فئة منتج لم تكن موجودة قبل هذا النظام.',
      ],
    },
    tech: { eyebrow: 'الحزمة التقنية', items: ['runtime خادم مُطبَّع', 'framework واجهة مُطبَّع', 'قاعدة علاقية', 'سجل أحداث للحجز', 'سطح SEO edge-delivered', 'طبقة خدمة role-scoped', 'دفع معزول بمحوّل', 'مراسلة معزولة بمحوّل', 'نظام layout RTL كامل'] },
    faq: {
      eyebrow: 'FAQ هندسي',
      title: 'ما يسأله المشترون التقنيون والمؤسسون عن هذا المشروع.',
      items: [
        { q: 'لماذا مجال حجز واحد بدلاً من واحد لكل قطاع؟', a: 'لأن سوقاً تُشغّل ثلاثة نماذج حجز متوازية تُشغّل أيضاً ثلاثة أنظمة تسوية متوازية، وثلاثة مسارات إلغاء متوازية، وثلاثة كونسولات تشغيلية متوازية. هذا الشكل لا يُميَّز عن ثلاثة منتجات منفصلة تتصادف في مشاركة شعار.' },
        { q: 'كيف تتعاملون مع خطر الاعتماد على معالج دفع واحد؟', a: 'لا نعتمد على أي معالج محدد. مجال الحجز يتحدث إلى عقد دفع داخلي. أي معالج يطلبه السوق يجلس خلف ذلك العقد كمحوّل. تبديل المعالجات — أو إضافة ثانٍ لبلد جديد — هو تغيير على مستوى المحوّل، لا إعادة كتابة مركزية.' },
        { q: 'كيف تكون المنصة قابلة للدفاع تحت حمل حجز متزامن؟', a: 'دلالات single-writer على حدود الحجز، سجل أحداث append-only لانتقالات الحالة، مفاتيح idempotent على كل side-effect وارد. مستهلكان يتسابقان على آخر فتحة متاحة يُنتجان بالضبط حجزاً واحداً مؤكداً ورفضاً واحداً — لا holds مزدوجة، ولا charges مزدوجة، ولا حجز شبحي.' },
        { q: 'هل دعم اللغة يمتد إلى ما بعد الترجمة؟', a: 'نعم. العربية RTL هي انضباط layout وتنسيق يلمس كل مسار rendering — تقويم، تنسيق رقمي، عملة، منطقة زمنية، ترتيب، rendering أخطاء تحقق. نعامل اللغة كمعامل من الدرجة الأولى على كل استدعاء format، ليس كتبديل عام.' },
        { q: 'هل يمكن لهذه المعمارية الانتقال لأسواق أو قطاعات أخرى؟', a: 'نعم. الشكل الهندسي — مجال حجز واحد، ثلاثة أدوار عميل، خدمات خارجية معزولة بمحوّل، تسوية event-driven، rendering locale-first — هو كيف نبني أسواقاً متعددة البائعين عبر أي قطاع.' },
      ],
    },
    related: {
      eyebrow: 'الخدمات الهندسية المُطبَّقة في هذا المشروع',
      items: [
        { label: 'تطوير برمجيات مخصصة', href: '/services/software-engineering/', desc: 'مجال الحجز، آلة الحالة، سجل الأحداث، طبقة خدمة role-scoped' },
        { label: 'هندسة المنتج', href: '/services/product/', desc: 'تسليم صفر-إلى-إنتاج كمنتج متماسك واحد' },
        { label: 'السحابة و DevOps', href: '/services/cloud/', desc: 'سطح SEO edge-first، خط حجز معزول، انضباط نشر' },
        { label: 'الاستشارات التكنولوجية', href: '/services/consulting/', desc: 'مراجعة معمارية، حدود تجريد المورد، نموذج التزامن' },
      ],
    },
    cta: { eyebrow: 'تبني سوقاً يجب أن تبقى صحيحة؟', title: 'سيملوب يُهندس أسواق الحجز والمنصات متعددة الأطراف حيث الصحة وانضباط اللغة واستقلال المورد قرارات تصميم من الدرجة الأولى، ليست إضافات تكامل لاحقة.', button: 'احجز مكالمة 30 دقيقة' },
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

export default function HajzCaseStudyPage() {
  const { locale } = useRouter();
  const isRtl = locale === 'ar';
  const c = CONTENT[locale] || CONTENT.en;

  const articleLd = {
    '@context': 'https://schema.org', '@type': 'Article', '@id': 'https://symloop.com/case-studies/hajz/#article',
    headline: `${c.client} — ${c.tagline}`,
    alternativeHeadline: 'Travel and hospitality booking SaaS case study — Algerian multi-vendor marketplace',
    description: c.dek,
    image: ['https://symloop.com/case-studies/hajz-cover.jpg', 'https://symloop.com/case-studies/hajz-logo.png'],
    datePublished: '2025-06-01', dateModified: '2026-04-17',
    inLanguage: locale === 'ar' ? 'ar' : locale === 'fr' ? 'fr' : 'en',
    articleSection: 'Case Study',
    keywords: 'travel booking SaaS, hotel reservation platform, restaurant booking platform, car rental marketplace, three-sided marketplace, reservation engine, booking state machine, multi-vendor marketplace, RTL multilingual marketplace',
    author: { '@type': 'Organization', name: 'Symloop Technology', url: 'https://symloop.com' },
    publisher: { '@type': 'Organization', name: 'Symloop Technology', logo: { '@type': 'ImageObject', url: 'https://symloop.com/sym-logo.png' } },
    about: [
      { '@type': 'SoftwareApplication', name: 'Hajz', url: 'https://hajz-algeria.com', applicationCategory: 'TravelApplication', operatingSystem: 'Web', inLanguage: ['ar', 'fr', 'en'] },
      { '@type': 'Thing', name: 'Travel technology' },
      { '@type': 'Thing', name: 'Hotel booking platform' },
      { '@type': 'Thing', name: 'Restaurant booking system' },
      { '@type': 'Thing', name: 'Car rental marketplace' },
      { '@type': 'Thing', name: 'Multi-vendor SaaS' },
    ],
    mentions: [
      { '@type': 'Thing', name: 'Reservation domain model' },
      { '@type': 'Thing', name: 'Three-sided marketplace' },
      { '@type': 'Thing', name: 'Single-writer semantics' },
      { '@type': 'Thing', name: 'Adapter pattern' },
      { '@type': 'Thing', name: 'RTL internationalization' },
      { '@type': 'Thing', name: 'Event-driven reconciliation' },
    ],
    audience: { '@type': 'BusinessAudience', audienceType: 'Travel tech startup founders, tourism platform CEOs, hospitality marketplace operators, travel SaaS investors' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://symloop.com/case-studies/hajz/' },
  };

  const faqLd = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: c.faq.items.map(item => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })),
  };

  const combinedLd = { '@context': 'https://schema.org', '@graph': [articleLd, faqLd] };
  const breadcrumbs = [
    { name: 'Home', url: 'https://symloop.com/' },
    { name: 'Case Studies', url: 'https://symloop.com/case-studies/' },
    { name: c.client, url: 'https://symloop.com/case-studies/hajz/' },
  ];

  const seoKeywords = [
    'hajz case study', 'hajz algeria', 'hajz-algeria.com', 'hajz platform', 'hajz booking',
    'travel booking SaaS Algeria', 'plateforme réservation voyage Algérie', 'tourism platform Algeria',
    'hotel reservation Algeria', 'réservation hôtel Algérie', 'réservation hotel Algerie',
    'restaurant booking Algeria', 'réservation restaurant Algérie', 'first online restaurant booking Algeria',
    'car rental platform Algeria', 'location voiture Algérie plateforme', 'tourism marketplace MENA',
    'marketplace tourisme MENA', 'booking engine architecture', 'reservation domain model',
    'multi-vendor marketplace MENA', 'marketplace multi-vendor Algérie', 'three-sided marketplace engineering',
    'App Router RTL multilingual', 'booking state machine', '3-sided marketplace Algeria',
    'plateforme 3 côtés Algérie', 'reservation state machine engineering', 'single-writer booking semantics',
    'payment adapter pattern', 'adapter isolation architecture', 'Algerian travel technology startup',
    'startup travel tech Algérie', 'hospitality booking engine MENA', 'moteur réservation hospitalité',
    'symloop hajz', 'منصة حجز الجزائر', 'حجز فندق الجزائر', 'حجز مطعم الجزائر',
    'تأجير سيارات الجزائر', 'symloop case studies',
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
        image="/case-studies/hajz-cover.jpg"
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
                  <Image src="/case-studies/hajz-logo.png" alt="Hajz logo" width={48} height={48} className="object-contain" />
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
            <Image src="/case-studies/hajz-cover.jpg" alt={`${c.client} — ${c.tagline}`} fill priority sizes="100vw" className="object-cover" />
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
