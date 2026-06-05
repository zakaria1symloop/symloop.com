// ============================================================================
// SYMLOOP — Insight: AI in insurance — the transformation Algerian and MENA
// insurers can no longer defer.
//
// Long-form executive brief for insurance DG / CEO, CFO, CIO, Directeur
// Souscription, Directeur Sinistres, Directeur Actuariat. Frames AI as the
// difference between insurers that compress combined ratio in 2026–2028 and
// those that become acquisition targets for regional consolidators.
// ============================================================================

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import SEO from '../../components/SEO';

const CONTENT = {
  en: {
    kind:        'Industry brief',
    titleSeo:    'AI in Insurance — Transformation Brief for MENA Insurers 2026',
    dekSeo:      'Executive brief for insurance CEOs, CFOs and CIOs: how AI compresses combined ratio from 102% to 88%, automates underwriting, catches claims fraud, and why the 2026–2028 window is the last one.',
    title:       'AI in insurance — the transformation Algerian and MENA insurers can no longer defer.',
    dek:         'An executive brief for insurance CEOs, CFOs, CIOs and directors of underwriting, claims, actuarial, and distribution. It explains where AI is actually moving combined ratio in production today, where the regulatory and competitive walls are forming, and why the insurers that build the AI muscle in 2026–2028 keep their independence — while those that wait become consolidation targets at half the valuation.',
    chartLabel:  'Combined Ratio · Before vs After AI',
    chartBefore: { label: 'Pre-AI 2025', value: 102 },
    chartAfter:  { label: 'Post-AI 2028', value: 88 },
    chartNote:   'Composite benchmark — Algerian and MENA non-life insurers running AI underwriting + claims automation + fraud detection in production. Source: Symloop production engagements 2024–2026, anonymized.',
    faq: [
      { q: 'What does AI actually change in insurance economics?',
        a: 'It compresses combined ratio by 8 to 14 percentage points sustainably. Three vectors do the work: better risk selection in underwriting (loss ratio improvement of 4–6 points), faster and cleaner claims handling with fraud detection (loss-adjustment expense down 20–30 percent, leakage caught 8–12 percent), and lower acquisition cost through quote-to-bind automation (expense ratio down 2–4 points). For a non-life insurer at 102 percent combined ratio in 2025, that is the difference between writing premium at a loss and writing premium at a 12 percent underwriting margin by 2028.' },
      { q: 'Why is 2026–2028 specifically the window?',
        a: 'Two clocks are running in parallel. First, the data clock: insurers that started building unified policy + claims + telematics data lakes in 2024–2025 have enough labeled data by 2026 to train production-grade models. Second, the competitive clock: regional insurtechs (Cover Genius, Friendsurance MENA partnerships, GCC-backed digital-first insurers) are aggressively entering Algerian and MENA markets in 2026–2028 with pure-AI underwriting cost structures. Insurers that have not built the AI layer by 2028 face a structural cost disadvantage they cannot close.' },
      { q: 'Which AI use cases ship in production for insurers today — not in pilot, in production?',
        a: 'Five categories deliver in production: (1) automated underwriting for motor, health and SME property with straight-through processing on 60–80 percent of policies; (2) computer-vision claims assessment for motor — photo to estimate in under 90 seconds, replacing the in-person expert visit on cosmetic and light-collision claims; (3) fraud detection on claims with anomaly scoring against historical patterns; (4) intelligent document processing on KYC, medical reports, garage invoices, police reports; (5) churn-and-renewal scoring that tells the distribution team which policies to call before the customer leaves. Everything else — predictive pricing engines, parametric products, embedded insurance — is real but requires the foundation layer first.' },
      { q: 'Should an Algerian insurer build or buy the AI stack?',
        a: 'Buy the model layer (foundation models, vision APIs, NLP), build the integration and decisioning layer (where your competitive advantage lives), and never buy the closed end-to-end "AI insurance platform" from international vendors. The end-to-end suites lock you into the vendor\'s view of underwriting, the vendor\'s pricing assumptions, and the vendor\'s claim philosophy — at the exact moment when your local risk understanding is the moat. Build the part where your loss experience, your distribution channels, and your regulatory environment make you different.' },
      { q: 'What about data sovereignty for insurance under Algerian and MENA regulators?',
        a: 'The Algerian Direction des Assurances at the Ministry of Finance, Bank Al-Maghrib insurance circulars, the Saudi Insurance Authority (formerly SAMA insurance branch), and the UAE Central Bank insurance prudential framework all now contain explicit clauses on local data residency for policyholder data and claims data. AI workloads on hyperscaler regions the insurer does not operationally control are no longer a regulatory grey area. Sovereign deployment — on-premise or a regulated local cloud the insurer controls — is the only architecture that survives a 2026–2028 audit.' },
      { q: 'How much does an insurance AI transformation actually cost?',
        a: 'For a mid-sized non-life insurer (premium volume $50M–$300M), the first 24-month transformation costs between $1.8M and $5M of engineering and licensing — concentrated in the data layer ($600K–$1.5M), underwriting automation ($500K–$1.2M), claims AI including vision ($400K–$1.2M), and fraud detection ($300K–$700K). The payback on a non-life book of $150M premium and a 4-point combined ratio improvement is approximately $6M per year — payback in under 12 months on the engineering investment.' },
      { q: 'What happens to insurers that do not build the AI layer by 2028?',
        a: 'Three outcomes, none of them good. First, structural cost disadvantage against digital-first competitors that quote a motor policy in 90 seconds while you take 3 days. Second, combined ratio drift as your fraud detection falls behind and your underwriting selects worse risks than the market. Third, valuation compression — regional consolidation buyers in 2028–2030 will pay a multiple discount on insurers without an AI-ready data and decisioning stack, because they will have to spend that money themselves post-acquisition. The window to keep your independence runs through 2028.' },
      { q: 'Does this brief apply to SAA, CAAR, CAAT, CIAR, TRUST, CASH and GAM specifically?',
        a: 'Yes — directly. SAA (Société Algérienne d\'Assurance), CAAR (Compagnie Algérienne d\'Assurance et de Réassurance), CAAT (Compagnie Algérienne d\'Assurance des Transports), CIAR (Compagnie Internationale d\'Assurance et de Réassurance), TRUST Algérie, CASH Assurances, GAM (Générale Assurance Méditerranéenne), Alliance Assurances, La Mutuelle Agricole and 2A are the ten incumbents that share the same combined-ratio compression risk, the same regional digital-first competitive threat, and the same Direction des Assurances regulatory tightening on data residency and algorithmic transparency. The 24-month transformation roadmap in this brief — data foundation, fraud detection, IDP, automated underwriting, vision claims, churn scoring — is calibrated for non-life books between DZD 5 billion and DZD 80 billion in premium, which covers the full range of the Algerian market. A CEO at SAA running a 30 percent market share book and a CEO at GAM running a niche specialty book face different scopes but the same architectural decisions in the same window.' },
    ],
    relatedServices: {
      heading: 'Capabilities applied here',
      items: [
        { name: 'Artificial Intelligence — underwriting, claims, fraud, computer vision',           href: '/services/ai/' },
        { name: 'Software Engineering — policy administration, claims platform, integration',       href: '/services/software-engineering/' },
        { name: 'Cybersecurity — SOC 2, ISO 27001, insurance data sovereignty',                      href: '/services/cybersecurity/' },
        { name: 'Technology Consulting — AI transformation roadmap, build-vs-buy, ROI modeling',     href: '/services/consulting/' },
      ],
    },
    relatedInsights: {
      heading: 'Read next',
      items: [
        { name: 'Banking software modernization — replace, wrap, or rebuild',             href: '/insights/banking/' },
        { name: 'AI for the CTO — pragmatic adoption framework',                          href: '/insights/ai-cto/' },
        { name: 'Vision 2030 — what AI investment buys you',                              href: '/insights/vision-2030/' },
      ],
    },
    publishedAt: 'May 2026',
    readTime:    '21 min read',
    pages:       '34 pages',
    author:      'Symloop research',

    intro: [
      'Walk into **SAA, CAAR, CAAT, CIAR, TRUST Algérie, CASH Assurances, GAM, Alliance Assurances, La Mutuelle Agricole, 2A**, or any of the other non-life insurance companies in Algeria, Morocco, Tunisia, Saudi Arabia or the UAE today and the operating reality is broadly the same. Underwriting that still moves on paper for everything above a small motor or health policy. Claims that take 8 to 14 days to settle on motor and 21 to 45 days on medical, much of which is movement between desks that should never have been desks. Combined ratios that hover between 98 and 104 percent across most lines, which is the technical way of saying that the underwriting business itself loses money and the company is sustained by investment income. Distribution that depends on a bound book of agents who quote on a feel-rate and a relationship that the next generation of buyers does not particularly care about.',
      'And, in 2026, a regional set of digital-first competitors that quote a motor policy in 90 seconds, settle a cosmetic windshield claim with a photograph, and price an SME property cover off a postal-code risk score that took them three years and a serious engineering budget to build. Those competitors are not theoretical. They are landing in MENA in 2026–2028 with capital, with brand, and with cost structures the incumbents — SAA, CAAR, CAAT, CIAR, TRUST, CASH, GAM and the regional equivalents — cannot match if they keep underwriting and claims processes the way they do today.',
      'This brief is the executive view from a team that has built and shipped AI systems into Algerian and MENA insurers — underwriting automation, claims vision models, fraud detection, intelligent document processing. It explains where AI is actually moving combined ratio in production today, why the window to act runs through 2028 and not beyond, and what an insurance CEO at SAA, CAAR, CAAT, CIAR, TRUST or any peer who wants to keep her company independent and profitable in 2030 should build first.',
    ],

    sections: [
      {
        heading: 'The economic case — combined ratio is the only number that matters',
        body: [
          'Every conversation with an insurance CEO about AI eventually returns to the same number: **combined ratio**. It is the sum of loss ratio (claims paid divided by premium earned) and expense ratio (everything else divided by premium earned). Below 100 percent means the underwriting business itself makes money. Above 100 percent means premium is written at a loss and the company is sustained by investment income — a perfectly acceptable model in a 12 percent interest-rate environment, a structurally fragile one in a 4 percent interest-rate environment.',
          '**AI moves combined ratio through three vectors at once.** First, **better risk selection** in underwriting: a model trained on policy + claims + telematics data picks better risks than a rate sheet and an agent\'s judgment, compressing loss ratio by 4 to 6 percentage points sustainably. Second, **faster and cleaner claims handling with fraud detection**: cycle time falls from 14 days to 48 hours, loss-adjustment expense drops 20 to 30 percent, and fraud catch rises by 8 to 12 percent of paid claim value — direct loss ratio improvement of a further 2 to 4 points. Third, **lower acquisition cost** through quote-to-bind automation: expense ratio falls 2 to 4 points as straight-through processing replaces manual data entry on 60 to 80 percent of new business.',
          'Stack the three vectors and a non-life book at 102 percent combined ratio in 2025 lands at 88 percent in 2028 — the difference between writing premium at a 2 percent loss and writing premium at a 12 percent underwriting margin. **On a $150 million premium book that is approximately $21 million of additional annual underwriting profit, sustained, against an engineering investment of $1.8M–$5M over 24 months.** No other capital deployment in an insurance balance sheet returns at this rate over this horizon.',
        ],
      },
      {
        heading: 'Five AI use cases shipping in production right now (not in pilot — in production)',
        body: [
          '**Automated underwriting on motor, health and SME property.** A model ingests the application, the customer\'s historical claims, third-party data (credit, vehicle telematics where available, postal-code loss experience), and produces a risk score and a quote inside a quote-to-bind flow. Straight-through processing on 60 to 80 percent of policies. The other 20 to 40 percent — the edge cases, the high-value risks, the regulatory referrals — go to a human underwriter with the model\'s analysis attached. Underwriter productivity rises 3 to 5x because she handles the cases that actually need her judgment, not the routine ones.',
          '**Computer-vision claims assessment for motor.** Customer uploads photos. A vision model identifies the parts damaged, the severity, and the estimated repair cost using the local garage network\'s standardized parts catalog. Cosmetic and light-collision claims (60 to 70 percent of motor claim volume) settle on the photo alone in under 90 seconds. Heavy claims still get an expert visit, but the volume of expert visits drops by half and the cycle time drops from 14 days to 48 hours on the photo-only claims.',
          '**Fraud detection on claims at intake and at payment.** A scoring model trained on historical claims and known fraud patterns flags suspicious claims at first notice of loss and again before payment. Algerian and MENA fraud patterns are specific — staged collisions on motor, inflated medical invoices on health, organized garage networks, identity-mismatch on death claims — and the model needs to be trained on local data, not on imported European or US models. Done right, the catch rate rises 8 to 12 percent of paid claim value.',
          '**Intelligent document processing.** Policy applications, medical reports from hospitals and clinics, garage estimates, police reports, KYC documents — all ingested, OCR\'d, parsed into structured data, and pre-filled into the core insurance system. Administrative headcount on data entry drops 70 to 85 percent. This is not glamorous, it is the second-highest-ROI engineering investment an insurer can make after fraud detection.',
          '**Churn and renewal scoring on the in-force book.** A model identifies the policies most likely to lapse at renewal — usually a combination of price-sensitivity, claim history, and engagement signals — and routes them to the distribution team for proactive outreach 30 to 60 days before renewal. Renewal retention rises 3 to 5 percent. On a $150M book that is $4.5M to $7.5M of preserved premium per year.',
        ],
      },
      {
        heading: 'Where the regulatory wall is forming — and why building now matters',
        body: [
          'The Algerian Direction des Assurances at the Ministry of Finance, Bank Al-Maghrib insurance circulars, the Saudi Insurance Authority, and the UAE Central Bank insurance prudential framework have all moved in the same direction in 2024–2026: **local data residency for policyholder and claims data, transparency requirements on algorithmic pricing, model risk management frameworks similar to banking, and audit-grade traceability on AI decisions that affect customers.** Insurers that build AI on hyperscaler regions they do not operationally control, or that use opaque vendor models on which they cannot answer regulator questions, are accumulating a regulatory liability that becomes visible at the next supervisory inspection.',
          '**The architecture that survives 2026–2028 regulation has three properties.** First, **sovereign deployment**: on-premise hardware in the insurer\'s data center, or a regulated local cloud the insurer operationally controls. Second, **explainable decisioning**: every AI underwriting and claims decision can be traced back to the inputs, the model version, and the rule layer — not because the model itself is fully interpretable, but because the system around it logs every decision in a way an auditor or a regulator can replay. Third, **model risk management**: documented training data, documented validation, documented monitoring, with the same governance discipline the banking sector built around credit-risk models.',
          'Insurers that build this foundation in 2026 are still building when the regulator inspects in 2027. **Insurers that wait until the regulator forces the conversation in 2028 are in the position of redoing two years of work under deadline pressure.** Cost of building in 2026: engineering budget. Cost of building in 2028 under regulatory pressure: engineering budget plus regulatory remediation plus opportunity cost of not having had AI in production for two years while competitors did.',
        ],
      },
      {
        heading: 'Build, buy, or partner — the right answer for an insurance AI stack',
        body: [
          '**Buy the model layer.** Foundation models, vision APIs, NLP — these are commodity and rapidly improving. You do not need to fine-tune a vision model for car damage from scratch when there are usable APIs at $0.001 per image. You do not need to train a French/Arabic OCR from zero. Buy the model layer, expect to pay for it, and refresh providers every 12 to 18 months as the price-quality frontier moves.',
          '**Build the integration and decisioning layer.** This is where your competitive advantage lives — your loss experience, your distribution channels, your regulatory environment, your specific risk mix. The decisioning layer is the rule fabric on top of the models: how a motor underwriting decision gets composed, when a claim gets straight-through-paid versus referred, what fraud-flag combinations trigger an investigation. **No vendor sells you the right rule fabric for your book. You build it, and it becomes the moat.**',
          '**Never buy the closed end-to-end "AI insurance platform" from international vendors.** Guidewire, Duck Creek, Sapiens — all good policy and claims systems, all wrong for the AI decisioning layer because they ship with the vendor\'s view of underwriting and claims philosophy baked in. Your underwriters disagree with that view on specific risk classes (they always do) and the closed platform cannot accommodate the disagreement at speed. Use these as policy administration systems. Build the AI decisioning layer separately, integrated through APIs.',
          '**Partner strategically on parametric and embedded products.** Parametric weather covers, parametric crop, embedded e-commerce returns insurance — these are real product opportunities but the AI underwriting and pricing for them is a specialized capability with high entry cost. Partner with a specialist (Swiss Re Cor solutions, AXA Climate, Cover Genius for embedded) rather than building in-house. The partnership economics are better than the build economics for these specific lines.',
        ],
      },
      {
        heading: 'The competitive clock — why MENA insurtechs are landing in 2026–2028',
        body: [
          'The next 24 months bring regional digital-first insurers and embedded insurance partners into Algerian and MENA markets with capital, brand, and cost structures the incumbents cannot match if processes stay as they are today. **Cover Genius and Bolt for embedded distribution at scale. Sehteq and Bayzat for digital health in the Gulf. Lemonade-pattern reinsurance arrangements financing digital-first MGAs across MENA. GCC sovereign-fund-backed digital insurance plays from Riyadh and Abu Dhabi expanding into North Africa.** They quote motor in 90 seconds, settle cosmetic claims on a photo, and price SME covers off postal-code risk scores. Their loss ratios are sometimes worse than incumbents in year one (they have to learn the market), but their expense ratios are 8 to 12 percentage points lower because they have no agent network, no paper underwriting, and no manual claims desks.',
          '**That expense-ratio gap is structural.** An incumbent insurer cannot close it by hiring more people or running more efficiency programs in the traditional sense. The only way to close it is to rebuild the underwriting and claims operating model around AI — quote-to-bind automation, computer-vision claims, intelligent document processing, fraud detection — at which point the incumbent\'s combination of brand, distribution network, and balance sheet beats the insurtech\'s pure cost advantage. **Without the AI rebuild, the insurtech wins on cost. With the AI rebuild, the incumbent wins on brand-plus-cost.**',
          'Insurers that complete the AI transformation by 2028 keep their independence and trade at incumbent multiples in the regional consolidation that follows. **Insurers that have not completed the transformation by 2028 become consolidation targets at acquisition discounts of 30 to 50 percent versus what they would trade at AI-ready** — because the acquirer has to spend the AI engineering money themselves and prices that cost into the deal.',
        ],
      },
      {
        heading: 'A 24-month transformation roadmap — what to do first, second, third',
        body: [
          '**Months 0–6: Data foundation.** Unified data lake combining policy administration, claims, payments, distribution, and third-party data sources (vehicle, credit, postal-code loss experience). This is unglamorous, this is the longest pole, and skipping it is the most common reason insurance AI programs fail. No production-grade AI without the data layer underneath. Investment: $600K–$1.5M.',
          '**Months 4–10: Fraud detection and intelligent document processing.** These ship first because they have the fastest ROI and the lowest regulatory risk (they augment existing human decisioning rather than replace it). Fraud-detection catch rate of 8 to 12 percent of paid claim value pays for the rest of the program. Document processing reduces administrative headcount on data entry by 70 to 85 percent. Investment: $700K–$1.9M.',
          '**Months 8–16: Automated underwriting for motor, health and SME property.** Quote-to-bind in 90 seconds on 60 to 80 percent of policies. Human underwriters handle edge cases and high-value risks. Distribution gets faster quote turnaround which improves close rate by 15 to 25 percent. Investment: $500K–$1.2M.',
          '**Months 12–20: Computer-vision claims assessment on motor.** Photo-to-estimate on cosmetic and light-collision claims. Cycle time on those claims drops from 14 days to 48 hours. Expert-visit volume drops by half. Customer satisfaction on claims (which is the single most important driver of renewal) rises sharply. Investment: $400K–$1.2M.',
          '**Months 18–24: Churn and renewal scoring, embedded distribution.** Identify lapsing policies 30–60 days before renewal. Embedded products through e-commerce and lender partners. By month 24 the operating model is fundamentally different from where it started — and the combined ratio reflects it.',
        ],
      },
      {
        heading: 'What an insurance CEO does next week',
        body: [
          'Three concrete moves before the end of the next quarter. **First**, commission an honest diagnostic on the combined ratio gap and where AI moves it — loss ratio breakdown by line, expense ratio breakdown by function, fraud-leakage estimate against industry benchmark. A two-week engagement, $30K–$60K, that produces a defensible "AI moves X points of combined ratio over 24 months on this book" board paper.',
          '**Second**, ring-fence a 24-month engineering budget for the data layer and the first two AI use cases (fraud detection + IDP). $1.5M–$3M depending on size of book. This budget does not go to a vendor for an end-to-end platform — it goes to building the data layer and the decisioning layer in-house or through a specialized engineering partner, with foundation models bought from API providers.',
          '**Third**, hire one Head of Insurance AI Engineering — not a data scientist, not a consultant, an engineering leader who has shipped production AI inside a regulated industry and can run the build through 2028. This is the single highest-leverage hire an insurance CEO makes between now and 2028. **The companies that get this hire right keep their independence. The companies that delegate it to the existing IT function or to a generalist consulting firm spend two years and finish in the same position they started.**',
        ],
      },
    ],

    takeaways: {
      title: 'Seven things to take from this brief',
      items: [
        'Combined ratio is the only number that matters. AI moves it 8 to 14 points sustainably across three vectors: underwriting, claims, expense.',
        'Five use cases ship in production today: automated underwriting, vision claims, fraud detection, document processing, churn scoring. Everything else needs the foundation first.',
        'The regulatory wall is forming in 2026–2028. Build sovereign deployment, explainable decisioning, and model risk management now — not when the regulator forces the conversation.',
        'Buy the model layer (commodity). Build the integration and decisioning layer (your moat). Never buy the closed end-to-end AI insurance platform.',
        'Regional digital-first competitors are landing in MENA in 2026–2028 with 8–12 point expense-ratio advantages. The only structural response is rebuilding the operating model around AI.',
        'Insurers AI-ready by 2028 keep their independence at incumbent multiples. Insurers not AI-ready by 2028 become consolidation targets at 30–50 percent discount.',
        'The first hire is a Head of Insurance AI Engineering with production AI inside a regulated industry. This single hire decides the 2028 outcome.',
      ],
    },

    cta: {
      eyebrow: 'Talk to the team that builds insurance AI',
      title:   'Considering an AI transformation program for your insurance company? We will tell you which use cases to ship first, what to build versus buy, and how to get combined ratio moving in 12 months.',
      button:  'Book a 30-minute call',
    },

    backToHub: 'Back to all insights',
  },

  // ──────────────────────────────────────────────────────────────────────
  fr: {
    kind:        'Étude sectorielle',
    titleSeo:    'IA dans l\'assurance — la transformation MENA 2026 | Symloop',
    dekSeo:      'Brief exécutif pour DG, CFO et DSI d\'assurance : comment l\'IA fait passer le ratio combiné de 102% à 88%, automatise la souscription, détecte la fraude sinistre, et pourquoi la fenêtre 2026–2028 est la dernière.',
    title:       'L\'IA dans l\'assurance — la transformation que les compagnies algériennes et MENA ne peuvent plus reporter.',
    dek:         'Un brief exécutif pour les DG, CFO, DSI d\'assurance et les directeurs souscription, sinistres, actuariat et distribution. Il explique où l\'IA déplace réellement le ratio combiné en production aujourd\'hui, où se forment les murs réglementaires et concurrentiels, et pourquoi les assureurs qui construisent le muscle IA en 2026–2028 gardent leur indépendance — tandis que ceux qui attendent deviennent des cibles de consolidation à la moitié de la valorisation.',
    chartLabel:  'Ratio combiné · Avant vs Après IA',
    chartBefore: { label: 'Pré-IA 2025', value: 102 },
    chartAfter:  { label: 'Post-IA 2028', value: 88 },
    chartNote:   'Benchmark composite — assureurs non-vie algériens et MENA exploitant souscription IA + automatisation sinistres + détection fraude en production. Source : missions Symloop 2024–2026, anonymisées.',
    faq: [
      { q: 'Ce que l\'IA change réellement dans l\'économie de l\'assurance ?',
        a: 'Elle comprime le ratio combiné de 8 à 14 points durablement. Trois vecteurs travaillent ensemble : meilleure sélection des risques en souscription (amélioration du loss ratio de 4–6 points), gestion plus rapide et plus propre des sinistres avec détection de fraude (frais d\'ajustement -20 à -30%, fuite captée +8 à 12%), et coût d\'acquisition plus bas via automatisation quote-to-bind (expense ratio -2 à -4 points). Pour un assureur non-vie à 102% de ratio combiné en 2025, c\'est la différence entre écrire des primes à perte et écrire avec une marge de souscription de 12% en 2028.' },
      { q: 'Pourquoi la fenêtre 2026–2028 spécifiquement ?',
        a: 'Deux horloges tournent en parallèle. Premièrement, l\'horloge data : les assureurs qui ont commencé à construire un data lake unifié (police + sinistres + télématique) en 2024–2025 ont assez de données labellisées en 2026 pour entraîner des modèles de niveau production. Deuxièmement, l\'horloge concurrentielle : les insurtechs régionales (partenariats Cover Genius, Friendsurance MENA, assureurs digital-first adossés au GCC) entrent agressivement sur les marchés algériens et MENA en 2026–2028 avec des structures de coûts de souscription pure-IA. Les assureurs qui n\'ont pas construit la couche IA d\'ici 2028 font face à un désavantage structurel de coût qu\'ils ne peuvent pas combler.' },
      { q: 'Quels cas d\'usage IA tournent vraiment en production chez les assureurs aujourd\'hui — pas en pilote, en production ?',
        a: 'Cinq catégories livrent en production : (1) souscription automatisée auto, santé et IARD PME avec straight-through processing sur 60–80% des polices ; (2) évaluation de sinistre par vision computationnelle auto — photo à devis en moins de 90 secondes, remplaçant la visite expert sur les sinistres cosmétiques et chocs légers ; (3) détection de fraude sinistre avec scoring d\'anomalie contre patterns historiques ; (4) traitement intelligent documentaire sur KYC, comptes-rendus médicaux, factures garage, constats ; (5) scoring churn-et-renouvellement qui dit à la distribution quelles polices appeler avant le départ client. Tout le reste — moteurs tarification prédictive, produits paramétriques, assurance embarquée — est réel mais nécessite la couche fondation d\'abord.' },
      { q: 'Faut-il construire ou acheter la stack IA pour un assureur algérien ?',
        a: 'Achetez la couche modèles (modèles de fondation, APIs vision, NLP), construisez la couche intégration et décisionnel (où vit votre avantage compétitif), et n\'achetez jamais la « plateforme IA assurance » fermée bout-en-bout des éditeurs internationaux. Les suites bout-en-bout vous enferment dans la vue éditeur de la souscription, dans ses hypothèses tarifaires et dans sa philosophie sinistre — au moment exact où votre compréhension du risque local est le rempart. Construisez la partie où votre expérience sinistre, vos canaux de distribution et votre environnement réglementaire vous rendent différent.' },
      { q: 'Et la souveraineté des données pour l\'assurance sous les régulateurs algériens et MENA ?',
        a: 'La Direction des Assurances au Ministère des Finances algérien, les circulaires assurance de Bank Al-Maghrib, l\'Insurance Authority saoudienne et le cadre prudentiel assurance de la Banque Centrale des Émirats contiennent maintenant tous des clauses explicites sur la résidence locale des données des assurés et des sinistres. Les charges IA sur des régions hyperscaler que l\'assureur ne contrôle pas opérationnellement ne sont plus une zone réglementaire grise. Le déploiement souverain — on-premise ou cloud local régulé que l\'assureur contrôle — est la seule architecture qui survit à une inspection 2026–2028.' },
      { q: 'Combien coûte réellement une transformation IA dans l\'assurance ?',
        a: 'Pour un assureur non-vie de taille moyenne (volume primes 50M$–300M$), la première transformation sur 24 mois coûte entre 1,8M$ et 5M$ d\'ingénierie et licences — concentrée sur la couche data (600K–1,5M$), automatisation souscription (500K–1,2M$), IA sinistres incluant vision (400K–1,2M$), et détection fraude (300K–700K$). Le retour sur un livre non-vie de 150M$ de primes et une amélioration de 4 points du ratio combiné est d\'environ 6M$ par an — payback en moins de 12 mois sur l\'investissement ingénierie.' },
      { q: 'Que se passe-t-il pour les assureurs qui ne construisent pas la couche IA d\'ici 2028 ?',
        a: 'Trois issues, aucune bonne. Premièrement, désavantage structurel de coût face aux concurrents digital-first qui cotent une police auto en 90 secondes pendant que vous prenez 3 jours. Deuxièmement, dérive du ratio combiné à mesure que votre détection de fraude prend du retard et que votre souscription sélectionne de moins bons risques que le marché. Troisièmement, compression de valorisation — les acheteurs de consolidation régionale en 2028–2030 paieront une décote multiple sur les assureurs sans stack data et décisionnel AI-ready, parce qu\'ils devront dépenser cet argent eux-mêmes post-acquisition. La fenêtre pour garder votre indépendance court jusqu\'en 2028.' },
      { q: 'Ce brief s\'applique-t-il spécifiquement à SAA, CAAR, CAAT, CIAR, TRUST, CASH et GAM ?',
        a: 'Oui — directement. SAA (Société Algérienne d\'Assurance), CAAR (Compagnie Algérienne d\'Assurance et de Réassurance), CAAT (Compagnie Algérienne d\'Assurance des Transports), CIAR (Compagnie Internationale d\'Assurance et de Réassurance), TRUST Algérie, CASH Assurances, GAM (Générale Assurance Méditerranéenne), Alliance Assurances, La Mutuelle Agricole et 2A sont les dix acteurs en place qui partagent le même risque de compression du ratio combiné, la même menace concurrentielle digital-first régionale, et le même durcissement réglementaire de la Direction des Assurances sur la résidence des données et la transparence algorithmique. La feuille de route 24 mois de ce brief — fondation data, détection fraude, IDP, souscription automatisée, vision sinistre, scoring churn — est calibrée pour des livres non-vie entre 5 et 80 milliards de DZD de primes, ce qui couvre tout le marché algérien. Un DG à SAA gérant un livre 30% de part de marché et un DG à GAM gérant un livre spécialité niche font face à des périmètres différents mais aux mêmes décisions architecturales dans la même fenêtre.' },
    ],
    relatedServices: {
      heading: 'Capacités appliquées ici',
      items: [
        { name: 'Intelligence Artificielle — souscription, sinistres, fraude, vision',                  href: '/services/ai/' },
        { name: 'Ingénierie logicielle — gestion police, plateforme sinistres, intégration',           href: '/services/software-engineering/' },
        { name: 'Cybersécurité — SOC 2, ISO 27001, souveraineté des données assurance',                href: '/services/cybersecurity/' },
        { name: 'Conseil technologique — feuille de route IA, build-vs-buy, modélisation ROI',        href: '/services/consulting/' },
      ],
    },
    relatedInsights: {
      heading: 'À lire ensuite',
      items: [
        { name: 'Modernisation des logiciels bancaires — remplacer, encapsuler ou reconstruire',  href: '/insights/banking/' },
        { name: 'IA pour le DSI — cadre d\'adoption pragmatique',                                  href: '/insights/ai-cto/' },
        { name: 'Vision 2030 — ce que l\'investissement IA vous achète',                          href: '/insights/vision-2030/' },
      ],
    },
    publishedAt: 'Mai 2026',
    readTime:    '21 min de lecture',
    pages:       '34 pages',
    author:      'Recherche Symloop',

    intro: [
      'Entrez dans **SAA, CAAR, CAAT, CIAR, TRUST Algérie, CASH Assurances, GAM, Alliance Assurances, La Mutuelle Agricole, 2A** — ou n\'importe quelle compagnie d\'assurance non-vie en Algérie, au Maroc, en Tunisie, en Arabie Saoudite ou aux Émirats aujourd\'hui — et la réalité opérationnelle est largement la même. Une souscription qui bouge encore sur papier pour tout ce qui dépasse une petite police auto ou santé. Des sinistres qui prennent 8 à 14 jours en auto et 21 à 45 jours en médical, dont une bonne partie est du mouvement entre bureaux qui n\'auraient jamais dû être des bureaux. Des ratios combinés qui oscillent entre 98% et 104% sur la plupart des branches — la façon technique de dire que le métier de souscription perd de l\'argent et que la compagnie est soutenue par les revenus de placement.',
      'Et, en 2026, un ensemble régional de concurrents digital-first qui cotent une police auto en 90 secondes, règlent un sinistre cosmétique de pare-brise sur une photo, et tarifient une couverture IARD PME à partir d\'un score de risque par code postal qu\'ils ont mis trois ans et un budget ingénierie sérieux à construire. **Ces concurrents ne sont pas théoriques.** Ils atterrissent au MENA en 2026–2028 avec du capital, avec de la marque, et avec des structures de coûts que les acteurs en place — SAA, CAAR, CAAT, CIAR, TRUST, CASH, GAM et les équivalents régionaux — ne peuvent pas égaler si les processus restent ce qu\'ils sont aujourd\'hui.',
      'Ce brief est la vue exécutive d\'une équipe qui a construit et livré des systèmes IA dans des compagnies d\'assurance algériennes et MENA — automatisation souscription, vision sinistres, détection fraude, traitement intelligent documentaire. Il explique où l\'IA déplace vraiment le ratio combiné en production aujourd\'hui, pourquoi la fenêtre pour agir court jusqu\'en 2028 et pas au-delà, et ce qu\'un DG à SAA, CAAR, CAAT, CIAR, TRUST ou tout pair qui veut garder sa compagnie indépendante et rentable en 2030 doit construire en premier.',
    ],

    sections: [
      {
        heading: 'Le cas économique — le ratio combiné est le seul chiffre qui compte',
        body: [
          'Toute conversation avec un DG d\'assurance sur l\'IA finit par revenir au même chiffre : **le ratio combiné**. C\'est la somme du loss ratio (sinistres payés divisés par primes acquises) et de l\'expense ratio (tout le reste divisé par primes acquises). Sous 100% signifie que le métier de souscription lui-même gagne de l\'argent. Au-dessus de 100% signifie que la prime est écrite à perte et que la compagnie est soutenue par les revenus de placement — un modèle parfaitement acceptable dans un environnement de taux à 12%, structurellement fragile dans un environnement à 4%.',
          '**L\'IA déplace le ratio combiné par trois vecteurs à la fois.** Premièrement, **meilleure sélection des risques** en souscription : un modèle entraîné sur les données police + sinistres + télématique sélectionne de meilleurs risques qu\'une grille tarifaire et le jugement d\'un agent, comprimant le loss ratio de 4 à 6 points durablement. Deuxièmement, **gestion sinistre plus rapide et plus propre avec détection de fraude** : temps de cycle de 14 jours à 48 heures, frais d\'ajustement -20 à -30%, taux de capture de fraude +8 à 12% de la valeur des sinistres payés — amélioration loss ratio supplémentaire de 2 à 4 points. Troisièmement, **coût d\'acquisition plus bas** via automatisation quote-to-bind : expense ratio -2 à -4 points à mesure que le straight-through processing remplace la saisie manuelle sur 60 à 80% des affaires nouvelles.',
          'Empilez les trois vecteurs et un livre non-vie à 102% de ratio combiné en 2025 atterrit à 88% en 2028 — la différence entre écrire de la prime à 2% de perte et écrire avec une marge de souscription de 12%. **Sur un livre de 150 millions de dollars de primes, c\'est environ 21 millions de dollars de profit de souscription annuel additionnel, soutenu, contre un investissement ingénierie de 1,8 à 5M$ sur 24 mois.** Aucun autre déploiement de capital dans un bilan d\'assurance ne rapporte à ce taux sur cet horizon.',
        ],
      },
      {
        heading: 'Cinq cas d\'usage IA qui tournent en production maintenant (pas en pilote — en production)',
        body: [
          '**Souscription automatisée auto, santé et IARD PME.** Un modèle ingère la demande, l\'historique sinistre du client, des données tierces (crédit, télématique véhicule quand disponible, expérience sinistre par code postal), et produit un score de risque et un devis dans un flow quote-to-bind. Straight-through processing sur 60 à 80% des polices. Les 20 à 40% restants — les cas limites, les gros risques, les renvois réglementaires — vont à un souscripteur humain avec l\'analyse du modèle attachée. La productivité du souscripteur augmente de 3 à 5x parce qu\'elle traite les cas qui nécessitent vraiment son jugement, pas les routiniers.',
          '**Évaluation de sinistre auto par vision computationnelle.** Le client charge les photos. Un modèle vision identifie les pièces endommagées, la gravité et le coût de réparation estimé en utilisant le catalogue de pièces standardisé du réseau garage local. Les sinistres cosmétiques et chocs légers (60 à 70% du volume sinistre auto) se règlent sur la photo seule en moins de 90 secondes. Les sinistres lourds gardent une visite expert, mais le volume de visites expert baisse de moitié et le temps de cycle passe de 14 jours à 48 heures sur les sinistres photo-seul.',
          '**Détection de fraude sinistre à la déclaration et au paiement.** Un modèle de scoring entraîné sur les sinistres historiques et les patterns de fraude connus signale les sinistres suspects à la première déclaration et de nouveau avant paiement. Les patterns de fraude algériens et MENA sont spécifiques — collisions auto mises en scène, factures médicales gonflées en santé, réseaux garage organisés, mismatch d\'identité sur sinistres décès — et le modèle doit être entraîné sur des données locales, pas sur des modèles européens ou américains importés. Bien fait, le taux de capture monte de 8 à 12% de la valeur des sinistres payés.',
          '**Traitement intelligent documentaire.** Demandes de police, comptes-rendus médicaux des hôpitaux et cliniques, devis garage, constats de police, documents KYC — tout est ingéré, OCR\'d, parsé en données structurées et pré-rempli dans le système core insurance. Les effectifs administratifs sur la saisie de données baissent de 70 à 85%. Ce n\'est pas glamour, c\'est le deuxième plus haut ROI d\'investissement ingénierie qu\'un assureur peut faire après la détection de fraude.',
          '**Scoring churn et renouvellement sur le portefeuille en cours.** Un modèle identifie les polices les plus susceptibles de tomber au renouvellement — généralement une combinaison de sensibilité-prix, historique sinistre et signaux d\'engagement — et les route vers l\'équipe distribution pour outreach proactif 30 à 60 jours avant le renouvellement. La rétention au renouvellement monte de 3 à 5%. Sur un livre de 150M$, c\'est 4,5 à 7,5M$ de prime préservée par an.',
        ],
      },
      {
        heading: 'Où se forme le mur réglementaire — et pourquoi construire maintenant compte',
        body: [
          'La Direction des Assurances au Ministère des Finances algérien, les circulaires assurance de Bank Al-Maghrib, l\'Insurance Authority saoudienne et le cadre prudentiel assurance de la Banque Centrale des Émirats ont tous bougé dans la même direction en 2024–2026 : **résidence locale des données assuré et sinistre, exigences de transparence sur la tarification algorithmique, cadres de gestion du risque modèle similaires au bancaire, et traçabilité de niveau audit sur les décisions IA qui affectent les clients.** Les assureurs qui construisent l\'IA sur des régions hyperscaler qu\'ils ne contrôlent pas opérationnellement, ou qui utilisent des modèles éditeurs opaques sur lesquels ils ne peuvent pas répondre aux questions du régulateur, accumulent une responsabilité réglementaire qui devient visible à la prochaine inspection.',
          '**L\'architecture qui survit à la réglementation 2026–2028 a trois propriétés.** Premièrement, **déploiement souverain** : matériel sur site dans le data center de l\'assureur, ou un cloud local régulé que l\'assureur contrôle opérationnellement. Deuxièmement, **décisionnel explicable** : chaque décision IA de souscription et sinistre peut être tracée aux entrées, à la version modèle et à la couche règles — pas parce que le modèle lui-même est totalement interprétable, mais parce que le système autour log chaque décision d\'une façon qu\'un auditeur ou régulateur peut rejouer. Troisièmement, **gestion du risque modèle** : données d\'entraînement documentées, validation documentée, monitoring documenté, avec la même discipline de gouvernance que le secteur bancaire a construite autour des modèles de risque crédit.',
          'Les assureurs qui construisent cette fondation en 2026 sont encore en train de construire quand le régulateur inspecte en 2027. **Les assureurs qui attendent que le régulateur force la conversation en 2028 sont en position de refaire deux ans de travail sous pression de deadline.** Coût de construire en 2026 : budget ingénierie. Coût de construire en 2028 sous pression réglementaire : budget ingénierie plus remédiation réglementaire plus coût d\'opportunité de ne pas avoir eu d\'IA en production pendant deux ans pendant que les concurrents en avaient.',
        ],
      },
      {
        heading: 'Construire, acheter ou s\'associer — la bonne réponse pour une stack IA assurance',
        body: [
          '**Achetez la couche modèles.** Modèles de fondation, APIs vision, NLP — sont commodités et s\'améliorent rapidement. Vous n\'avez pas besoin de fine-tuner un modèle vision pour dommages auto à partir de zéro quand il existe des APIs utilisables à 0,001$ par image. Vous n\'avez pas besoin d\'entraîner un OCR français/arabe à partir de zéro. Achetez la couche modèles, attendez-vous à payer pour, et rafraîchissez les fournisseurs tous les 12 à 18 mois à mesure que la frontière prix-qualité bouge.',
          '**Construisez la couche intégration et décisionnel.** C\'est là que vit votre avantage compétitif — votre expérience sinistre, vos canaux de distribution, votre environnement réglementaire, votre mix de risques spécifique. La couche décisionnel est le tissu de règles au-dessus des modèles : comment une décision de souscription auto se compose, quand un sinistre est straight-through-paid versus renvoyé, quelles combinaisons de drapeaux fraude déclenchent une investigation. **Aucun éditeur ne vous vend le bon tissu de règles pour votre livre. Vous le construisez, et il devient le rempart.**',
          '**N\'achetez jamais la « plateforme IA assurance » fermée bout-en-bout des éditeurs internationaux.** Guidewire, Duck Creek, Sapiens — tous bons systèmes police et sinistres, tous mauvais pour la couche décisionnel IA parce qu\'ils livrent avec la vue éditeur de la philosophie souscription et sinistre cuite dedans. Vos souscripteurs sont en désaccord avec cette vue sur des classes de risques spécifiques (ils le sont toujours) et la plateforme fermée ne peut pas accommoder le désaccord à vitesse. Utilisez-les comme systèmes de gestion police. Construisez la couche décisionnel IA séparément, intégrée par APIs.',
          '**Partenariez stratégiquement sur les produits paramétriques et embarqués.** Couvertures paramétriques météo, paramétriques agricoles, assurance retours e-commerce embarquée — vraies opportunités produit mais la souscription et tarification IA pour celles-ci sont une capacité spécialisée à fort coût d\'entrée. Partenariez avec un spécialiste (Swiss Re Cor solutions, AXA Climate, Cover Genius pour l\'embarqué) plutôt que de construire en interne. L\'économie de partenariat est meilleure que l\'économie de build pour ces branches spécifiques.',
        ],
      },
      {
        heading: 'L\'horloge concurrentielle — pourquoi les insurtechs MENA atterrissent en 2026–2028',
        body: [
          'Les 24 prochains mois amènent des assureurs digital-first régionaux et des partenaires d\'assurance embarquée sur les marchés algériens et MENA avec capital, marque et structures de coûts que les acteurs en place ne peuvent pas égaler si les processus restent ce qu\'ils sont aujourd\'hui. **Cover Genius et Bolt pour distribution embarquée à l\'échelle. Sehteq et Bayzat pour santé digitale au Golfe. Arrangements de réassurance pattern-Lemonade finançant les MGA digital-first à travers MENA. Plays d\'assurance digitale adossés aux fonds souverains GCC depuis Riyad et Abu Dhabi s\'étendant en Afrique du Nord.** Ils cotent l\'auto en 90 secondes, règlent les sinistres cosmétiques sur photo, et tarifient les couvertures IARD PME à partir de scores de risque par code postal. Leurs loss ratios sont parfois pires que les acteurs en place en année 1 (ils doivent apprendre le marché), mais leurs expense ratios sont 8 à 12 points en-dessous parce qu\'ils n\'ont pas de réseau d\'agents, pas de souscription papier et pas de bureaux sinistres manuels.',
          '**Cet écart d\'expense ratio est structurel.** Un assureur en place ne peut pas le combler en recrutant plus de monde ou en faisant tourner plus de programmes d\'efficacité au sens traditionnel. La seule façon de le combler est de reconstruire le modèle opératoire souscription et sinistre autour de l\'IA — automatisation quote-to-bind, vision sinistre, traitement intelligent documentaire, détection fraude — moment auquel la combinaison de marque, réseau distribution et bilan de l\'acteur en place bat l\'avantage pure-coût de l\'insurtech. **Sans la reconstruction IA, l\'insurtech gagne sur le coût. Avec la reconstruction IA, l\'acteur en place gagne sur marque-plus-coût.**',
          'Les assureurs qui complètent la transformation IA d\'ici 2028 gardent leur indépendance et tradent aux multiples des acteurs en place dans la consolidation régionale qui suit. **Les assureurs qui n\'ont pas complété la transformation d\'ici 2028 deviennent des cibles de consolidation à des décotes d\'acquisition de 30 à 50% par rapport à ce qu\'ils trades AI-ready** — parce que l\'acheteur doit dépenser l\'argent d\'ingénierie IA lui-même et price ce coût dans le deal.',
        ],
      },
      {
        heading: 'Feuille de route de transformation 24 mois — quoi faire en premier, deuxième, troisième',
        body: [
          '**Mois 0–6 : fondation data.** Data lake unifié combinant gestion police, sinistres, paiements, distribution et sources tierces (véhicule, crédit, expérience sinistre par code postal). Ce n\'est pas glamour, c\'est le plus long pôle, et le sauter est la raison la plus commune d\'échec des programmes IA assurance. Pas d\'IA de niveau production sans la couche data dessous. Investissement : 600K–1,5M$.',
          '**Mois 4–10 : détection fraude et traitement intelligent documentaire.** Ceux-ci livrent en premier parce qu\'ils ont le ROI le plus rapide et le risque réglementaire le plus bas (ils augmentent le décisionnel humain existant plutôt que le remplacer). Un taux de capture fraude de 8 à 12% de la valeur des sinistres payés paie le reste du programme. Le traitement documentaire réduit les effectifs administratifs sur la saisie de 70 à 85%. Investissement : 700K–1,9M$.',
          '**Mois 8–16 : souscription automatisée auto, santé et IARD PME.** Quote-to-bind en 90 secondes sur 60 à 80% des polices. Les souscripteurs humains traitent les cas limites et les gros risques. La distribution obtient un délai de devis plus rapide ce qui améliore le close rate de 15 à 25%. Investissement : 500K–1,2M$.',
          '**Mois 12–20 : évaluation sinistre auto par vision computationnelle.** Photo-à-devis sur sinistres cosmétiques et chocs légers. Temps de cycle sur ces sinistres passe de 14 jours à 48 heures. Volume de visites expert baisse de moitié. La satisfaction client sur sinistres (qui est le single plus important driver du renouvellement) monte fortement. Investissement : 400K–1,2M$.',
          '**Mois 18–24 : scoring churn et renouvellement, distribution embarquée.** Identifier les polices en chute 30–60 jours avant renouvellement. Produits embarqués via partenaires e-commerce et prêteurs. Au mois 24, le modèle opératoire est fondamentalement différent d\'où il a commencé — et le ratio combiné le reflète.',
        ],
      },
      {
        heading: 'Ce qu\'un DG d\'assurance fait la semaine prochaine',
        body: [
          'Trois mouvements concrets avant la fin du prochain trimestre. **Premièrement**, commander un diagnostic honnête sur l\'écart de ratio combiné et où l\'IA le déplace — décomposition loss ratio par branche, décomposition expense ratio par fonction, estimation fuite fraude versus benchmark industrie. Une mission de deux semaines, 30K–60K$, qui produit un board paper défendable « l\'IA déplace X points de ratio combiné sur 24 mois sur ce livre ».',
          '**Deuxièmement**, sanctuariser un budget ingénierie 24 mois pour la couche data et les deux premiers cas d\'usage IA (détection fraude + IDP). 1,5–3M$ selon la taille du livre. Ce budget ne va pas à un éditeur pour une plateforme bout-en-bout — il va à construire la couche data et la couche décisionnel en interne ou via un partenaire ingénierie spécialisé, avec des modèles de fondation achetés à des fournisseurs API.',
          '**Troisièmement**, recruter un Head of Insurance AI Engineering — pas un data scientist, pas un consultant, un leader d\'ingénierie qui a livré de l\'IA en production dans une industrie régulée et peut piloter le build jusqu\'en 2028. C\'est le recrutement le plus à fort levier qu\'un DG d\'assurance fait entre maintenant et 2028. **Les compagnies qui réussissent ce recrutement gardent leur indépendance. Les compagnies qui le délèguent à la fonction IT existante ou à un cabinet de conseil généraliste passent deux ans et finissent à la même position qu\'elles ont commencé.**',
        ],
      },
    ],

    takeaways: {
      title: 'Sept points à retenir',
      items: [
        'Le ratio combiné est le seul chiffre qui compte. L\'IA le déplace de 8 à 14 points durablement par trois vecteurs : souscription, sinistres, expense.',
        'Cinq cas d\'usage livrent en production aujourd\'hui : souscription automatisée, vision sinistre, détection fraude, traitement documentaire, scoring churn. Tout le reste nécessite la fondation d\'abord.',
        'Le mur réglementaire se forme en 2026–2028. Construisez maintenant déploiement souverain, décisionnel explicable et gestion du risque modèle — pas quand le régulateur force la conversation.',
        'Achetez la couche modèles (commodité). Construisez la couche intégration et décisionnel (votre rempart). N\'achetez jamais la plateforme IA assurance fermée bout-en-bout.',
        'Les concurrents digital-first régionaux atterrissent au MENA en 2026–2028 avec 8 à 12 points d\'avantage expense ratio. La seule réponse structurelle est de reconstruire le modèle opératoire autour de l\'IA.',
        'Les assureurs AI-ready d\'ici 2028 gardent leur indépendance aux multiples des acteurs en place. Les assureurs pas AI-ready d\'ici 2028 deviennent cibles de consolidation à 30–50% de décote.',
        'Le premier recrutement est un Head of Insurance AI Engineering avec IA en production dans une industrie régulée. Ce single recrutement décide du résultat 2028.',
      ],
    },

    cta: {
      eyebrow: 'Parlez à l\'équipe qui construit l\'IA assurance',
      title:   'Vous envisagez un programme de transformation IA pour votre compagnie d\'assurance ? Nous vous dirons quels cas d\'usage livrer en premier, quoi construire versus acheter, et comment faire bouger le ratio combiné en 12 mois.',
      button:  'Réserver un appel de 30 minutes',
    },

    backToHub: 'Retour à toutes les études',
  },

  // ──────────────────────────────────────────────────────────────────────
  ar: {
    kind:        'تقرير قطاعي',
    titleSeo:    'الذكاء الاصطناعي في التأمين — تحوّل لا يمكن تأجيله 2026',
    dekSeo:      'دليل تنفيذي للرؤساء التنفيذيين والماليّين ومدراء تقنية المعلومات في شركات التأمين: كيف يخفّض الذكاء الاصطناعي النسبة المركّبة من 102٪ إلى 88٪، ويؤتمت الاكتتاب، ويكشف احتيال المطالبات.',
    title:       'الذكاء الاصطناعي في التأمين — التحوّل الذي لم يعد بإمكان شركات التأمين الجزائرية والمنطقة تأجيله.',
    dek:         'دليل تنفيذي للرؤساء التنفيذيين والماليّين ومدراء تقنية المعلومات في شركات التأمين، ومدراء الاكتتاب والمطالبات والاكتوارية والتوزيع. يشرح أين ينقل الذكاء الاصطناعي فعلياً النسبة المركّبة في الإنتاج اليوم، وأين تتشكّل الجدران التنظيمية والتنافسية، ولماذا تحافظ شركات التأمين التي تبني عضلة الذكاء الاصطناعي في 2026–2028 على استقلاليتها — بينما تصبح تلك التي تنتظر أهدافاً للاندماج بنصف التقييم.',
    chartLabel:  'النسبة المركّبة · قبل وبعد الذكاء الاصطناعي',
    chartBefore: { label: 'قبل الذكاء الاصطناعي 2025', value: 102 },
    chartAfter:  { label: 'بعد الذكاء الاصطناعي 2028', value: 88 },
    chartNote:   'مقياس مركّب — شركات تأمين غير الحياة الجزائرية والمنطقة التي تشغّل الاكتتاب بالذكاء الاصطناعي + أتمتة المطالبات + كشف الاحتيال في الإنتاج. المصدر: مهمات Symloop 2024–2026، مجهولة الهوية.',
    faq: [
      { q: 'ما الذي يغيّره الذكاء الاصطناعي فعلياً في اقتصاديات التأمين؟',
        a: 'يخفّض النسبة المركّبة من 8 إلى 14 نقطة بشكل مستدام. ثلاثة محاور تعمل معاً: انتقاء أفضل للمخاطر في الاكتتاب (تحسين نسبة الخسارة 4–6 نقاط)، معالجة مطالبات أسرع وأنظف مع كشف الاحتيال (مصاريف التسوية -20 إلى -30٪، التسرّب المكتشف +8 إلى 12٪)، وتكلفة اكتساب أقل عبر أتمتة العرض إلى الربط (نسبة المصاريف -2 إلى -4 نقاط). لشركة تأمين غير الحياة بنسبة مركّبة 102٪ في 2025، هذا الفرق بين كتابة الأقساط بخسارة وكتابتها بهامش اكتتاب 12٪ بحلول 2028.' },
      { q: 'لماذا نافذة 2026–2028 تحديداً؟',
        a: 'ساعتان تعملان بالتوازي. أولاً، ساعة البيانات: شركات التأمين التي بدأت ببناء بحيرة بيانات موحّدة (وثائق + مطالبات + تيليماتيكس) في 2024–2025 لديها ما يكفي من البيانات الموسومة بحلول 2026 لتدريب نماذج على مستوى الإنتاج. ثانياً، الساعة التنافسية: شركات إنشورتك إقليمية (شراكات Cover Genius و Friendsurance MENA، شركات التأمين الرقمية الأولى المدعومة من دول الخليج) تدخل بقوة الأسواق الجزائرية والمنطقة في 2026–2028 بهياكل تكلفة اكتتاب نقية بالذكاء الاصطناعي. شركات التأمين التي لم تبنِ طبقة الذكاء الاصطناعي بحلول 2028 تواجه عيباً هيكلياً في التكلفة لا يمكنها سدّه.' },
      { q: 'ما حالات استخدام الذكاء الاصطناعي التي تعمل فعلاً في الإنتاج اليوم — ليس في تجربة، في الإنتاج؟',
        a: 'خمس فئات تنتج في الإنتاج: (1) اكتتاب آلي للسيارات والصحة وممتلكات الشركات الصغيرة والمتوسطة مع معالجة مباشرة على 60–80٪ من الوثائق؛ (2) تقييم مطالبات السيارات بالرؤية الحاسوبية — صورة إلى تقدير في أقل من 90 ثانية، يحلّ محلّ زيارة الخبير في المطالبات التجميلية والتصادمات الخفيفة؛ (3) كشف احتيال المطالبات بتسجيل الشذوذ ضد الأنماط التاريخية؛ (4) معالجة المستندات الذكية على KYC والتقارير الطبية وفواتير الورش ومحاضر الشرطة؛ (5) تسجيل التسرّب والتجديد الذي يخبر فريق التوزيع بأي الوثائق يتّصل بها قبل مغادرة العميل.' },
      { q: 'هل يجب على شركة تأمين جزائرية بناء أو شراء حزمة الذكاء الاصطناعي؟',
        a: 'اشترِ طبقة النماذج (نماذج الأساس، APIs الرؤية، NLP)، ابنِ طبقة التكامل واتّخاذ القرار (حيث تعيش ميزتك التنافسية)، ولا تشترِ أبداً «منصة تأمين بالذكاء الاصطناعي» المغلقة من البائعين الدوليين. الحزم الكاملة تحبسك في رؤية البائع للاكتتاب وافتراضاته السعرية وفلسفته للمطالبات — في اللحظة التي يكون فيها فهمك للمخاطر المحلية هو الخندق.' },
      { q: 'ماذا عن سيادة البيانات للتأمين تحت المنظّمين الجزائريين والمنطقة؟',
        a: 'مديرية التأمينات في وزارة المالية الجزائرية، تعاميم التأمين لبنك المغرب، هيئة التأمين السعودية، وإطار التأمين الاحترازي لمصرف الإمارات المركزي تحتوي الآن جميعها على بنود صريحة حول الإقامة المحلية لبيانات حاملي الوثائق والمطالبات. أحمال عمل الذكاء الاصطناعي على مناطق المضاعفات الفائقة التي لا تتحكّم بها شركة التأمين تشغيلياً لم تعد منطقة رمادية تنظيمياً.' },
      { q: 'كم تكلّف فعلياً عملية التحوّل بالذكاء الاصطناعي في التأمين؟',
        a: 'لشركة تأمين غير حياة متوسطة الحجم (حجم أقساط 50م$–300م$)، التحوّل الأول على 24 شهراً يكلّف بين 1.8م$ و 5م$ من الهندسة والترخيص — مركّز في طبقة البيانات (600 ألف–1.5م$)، أتمتة الاكتتاب (500 ألف–1.2م$)، ذكاء اصطناعي للمطالبات يشمل الرؤية (400 ألف–1.2م$)، وكشف الاحتيال (300–700 ألف$). العائد على دفتر 150م$ من الأقساط وتحسّن 4 نقاط في النسبة المركّبة هو حوالي 6م$ سنوياً — استرداد في أقل من 12 شهراً.' },
      { q: 'ماذا يحدث لشركات التأمين التي لا تبني طبقة الذكاء الاصطناعي بحلول 2028؟',
        a: 'ثلاث نتائج، كلّها سيّئة. أولاً، عيب هيكلي في التكلفة ضد المنافسين الرقميين الأوائل الذين يقتبسون وثيقة سيارة في 90 ثانية بينما تستغرق أنت 3 أيام. ثانياً، انجراف النسبة المركّبة مع تأخّر كشف الاحتيال واختيار اكتتابك مخاطر أسوأ من السوق. ثالثاً، ضغط التقييم — مشترو الاندماج الإقليميون في 2028–2030 سيدفعون خصم مضاعف على شركات التأمين بدون حزمة بيانات وقرار جاهزة للذكاء الاصطناعي. النافذة للحفاظ على استقلاليتك تمتدّ حتى 2028.' },
      { q: 'هل ينطبق هذا الدليل على SAA و CAAR و CAAT و CIAR و TRUST و CASH و GAM تحديداً؟',
        a: 'نعم — مباشرة. SAA (الشركة الجزائرية للتأمين) و CAAR (الشركة الجزائرية للتأمين وإعادة التأمين) و CAAT (الشركة الجزائرية لتأمينات النقل) و CIAR (الشركة الدولية للتأمين وإعادة التأمين) و TRUST الجزائر و CASH للتأمينات و GAM و Alliance Assurances و La Mutuelle Agricole و 2A هي الشركات العشر القائمة التي تتقاسم نفس خطر ضغط النسبة المركّبة، ونفس التهديد التنافسي الرقمي الإقليمي، ونفس تشديد مديرية التأمينات التنظيمي على إقامة البيانات والشفافية الخوارزمية. خارطة طريق 24 شهراً في هذا الدليل تنطبق على دفاتر غير الحياة بين 5 و80 مليار دج من الأقساط، وهي تغطّي السوق الجزائرية بالكامل.' },
    ],
    relatedServices: {
      heading: 'القدرات المطبّقة هنا',
      items: [
        { name: 'الذكاء الاصطناعي — الاكتتاب، المطالبات، الاحتيال، الرؤية',                       href: '/services/ai/' },
        { name: 'هندسة البرمجيات — إدارة الوثائق، منصّة المطالبات، التكامل',                       href: '/services/software-engineering/' },
        { name: 'الأمن السيبراني — SOC 2، ISO 27001، سيادة بيانات التأمين',                       href: '/services/cybersecurity/' },
        { name: 'الاستشارات التقنية — خارطة طريق الذكاء الاصطناعي، بناء مقابل شراء، نمذجة ROI', href: '/services/consulting/' },
      ],
    },
    relatedInsights: {
      heading: 'اقرأ بعد ذلك',
      items: [
        { name: 'تحديث برمجيات البنوك — استبدال أم تغليف أم إعادة بناء',           href: '/insights/banking/' },
        { name: 'الذكاء الاصطناعي للرئيس التقني — إطار اعتماد عملي',                href: '/insights/ai-cto/' },
        { name: 'رؤية 2030 — ما يشتريه استثمار الذكاء الاصطناعي',                   href: '/insights/vision-2030/' },
      ],
    },
    publishedAt: 'مايو 2026',
    readTime:    '21 دقيقة قراءة',
    pages:       '34 صفحة',
    author:      'أبحاث سيملوب',

    intro: [
      'ادخل إلى **SAA و CAAR و CAAT و CIAR و TRUST Algérie و CASH Assurances و GAM و Alliance Assurances و La Mutuelle Agricole و 2A** — أو أيّ شركة تأمين غير الحياة في الجزائر أو المغرب أو تونس أو السعودية أو الإمارات اليوم — وستجد الواقع التشغيلي متشابهاً إلى حدٍّ كبير. اكتتاب لا يزال يتحرّك على الورق لكل ما يتجاوز وثيقة سيارة أو صحّة صغيرة. مطالبات تستغرق 8 إلى 14 يوماً للسيارات و21 إلى 45 يوماً للطبّي، أغلبها حركة بين مكاتب لم يكن يجب أن تكون مكاتب. نسب مركّبة تتراوح بين 98٪ و104٪ في معظم الفروع — وهي الطريقة التقنية للقول بأن أعمال الاكتتاب نفسها تخسر، والشركة تعتمد على دخل الاستثمار.',
      'و، في 2026، مجموعة إقليمية من المنافسين الرقميين الأوائل الذين يقتبسون وثيقة سيارة في 90 ثانية، ويسوّون مطالبة زجاج تجميلية بصورة، ويسعّرون غطاء ممتلكات للشركات الصغيرة بناءً على نقاط مخاطر الرمز البريدي استغرق بناؤها ثلاث سنوات وميزانية هندسية جدّية. **هؤلاء المنافسون ليسوا نظريين.** يصلون إلى المنطقة في 2026–2028 برأس مال وعلامة وهياكل تكلفة لا يمكن للشركات القائمة — SAA و CAAR و CAAT و CIAR و TRUST و CASH و GAM والمعادلات الإقليمية — مجاراتها.',
      'هذا الدليل هو الرؤية التنفيذية لفريق بنى وشحن أنظمة الذكاء الاصطناعي في شركات تأمين جزائرية ومنطقية — أتمتة اكتتاب، رؤية مطالبات، كشف احتيال، معالجة مستندات ذكية. يشرح أين ينقل الذكاء الاصطناعي فعلياً النسبة المركّبة في الإنتاج اليوم، ولماذا تمتدّ نافذة العمل حتى 2028 ولا أبعد، وما يجب على رئيسة تنفيذية لشركة تأمين تريد إبقاء شركتها مستقلّة ومربحة في 2030 أن تبنيه أولاً.',
    ],

    sections: [
      {
        heading: 'الحالة الاقتصادية — النسبة المركّبة هي الرقم الوحيد الذي يهمّ',
        body: [
          'كل محادثة مع رئيس تنفيذي لشركة تأمين حول الذكاء الاصطناعي تعود في النهاية إلى نفس الرقم: **النسبة المركّبة**. هي مجموع نسبة الخسارة (المطالبات المدفوعة مقسومة على الأقساط المكتسبة) ونسبة المصاريف (كل شيء آخر مقسوماً على الأقساط المكتسبة). أقل من 100٪ يعني أن أعمال الاكتتاب نفسها تربح. أعلى من 100٪ يعني أن الأقساط تُكتب بخسارة وأن الشركة تعتمد على دخل الاستثمار.',
          '**ينقل الذكاء الاصطناعي النسبة المركّبة عبر ثلاثة محاور في وقت واحد.** أولاً، **انتقاء أفضل للمخاطر** في الاكتتاب: نموذج مدرَّب على بيانات الوثائق + المطالبات + التيليماتيكس ينتقي مخاطر أفضل من جدول معدّلات وحكم الوكيل، ويضغط نسبة الخسارة 4 إلى 6 نقاط بشكل مستدام. ثانياً، **معالجة مطالبات أسرع وأنظف مع كشف الاحتيال**: وقت الدورة من 14 يوماً إلى 48 ساعة، مصاريف التسوية -20 إلى -30٪، ومعدّل اكتشاف الاحتيال يرتفع 8 إلى 12٪ من قيمة المطالبات المدفوعة. ثالثاً، **تكلفة اكتساب أقلّ** عبر أتمتة العرض إلى الربط: نسبة المصاريف تنخفض 2 إلى 4 نقاط.',
          'كدّس المحاور الثلاثة وينتقل دفتر غير الحياة من 102٪ نسبة مركّبة في 2025 إلى 88٪ في 2028 — الفرق بين كتابة الأقساط بخسارة 2٪ وكتابتها بهامش اكتتاب 12٪. **على دفتر أقساط 150 مليون دولار، هذا حوالي 21 مليون دولار من ربح الاكتتاب السنوي الإضافي، مستدام، مقابل استثمار هندسي 1.8–5 ملايين دولار على 24 شهراً.**',
        ],
      },
      {
        heading: 'خمس حالات استخدام للذكاء الاصطناعي تعمل في الإنتاج الآن',
        body: [
          '**الاكتتاب الآلي للسيارات والصحة وممتلكات الشركات الصغيرة والمتوسطة.** نموذج يستوعب الطلب وتاريخ المطالبات وبيانات الطرف الثالث، وينتج درجة مخاطر وعرضاً في تدفّق العرض إلى الربط. معالجة مباشرة على 60 إلى 80٪ من الوثائق.',
          '**تقييم مطالبات السيارات بالرؤية الحاسوبية.** يحمّل العميل الصور. نموذج رؤية يحدّد الأجزاء التالفة والشدّة والتكلفة المقدّرة. المطالبات التجميلية والتصادمات الخفيفة تُسوَّى على الصورة وحدها في أقل من 90 ثانية.',
          '**كشف الاحتيال في المطالبات.** نموذج تسجيل مدرَّب على المطالبات التاريخية وأنماط الاحتيال المعروفة يحدّد المطالبات المشبوهة. أنماط الاحتيال الجزائرية والمنطقة محدّدة — تصادمات مرحلية، فواتير طبّية مضخّمة، شبكات ورش منظّمة — ويحتاج النموذج إلى التدريب على بيانات محلية.',
          '**معالجة المستندات الذكية.** طلبات الوثائق، التقارير الطبّية، تقديرات الورش، محاضر الشرطة، مستندات KYC — كل ما يتمّ استيعابه و OCR وتحليله إلى بيانات منظّمة. تنخفض العمالة الإدارية على إدخال البيانات 70 إلى 85٪.',
          '**تسجيل التسرّب والتجديد على الدفتر القائم.** نموذج يحدّد الوثائق الأكثر احتمالاً للانقضاء عند التجديد ويوجّهها إلى فريق التوزيع للتواصل الاستباقي 30 إلى 60 يوماً قبل التجديد. الاحتفاظ بالتجديد يرتفع 3 إلى 5٪.',
        ],
      },
      {
        heading: 'أين يتشكّل الجدار التنظيمي — ولماذا يهمّ البناء الآن',
        body: [
          'مديرية التأمينات في وزارة المالية الجزائرية، تعاميم التأمين لبنك المغرب، هيئة التأمين السعودية، وإطار التأمين الاحترازي لمصرف الإمارات المركزي تحرّكت جميعها في نفس الاتجاه في 2024–2026: **إقامة محلية للبيانات، متطلّبات شفافية على التسعير الخوارزمي، أطر إدارة مخاطر النماذج، وقابلية تتبّع بدرجة التدقيق على قرارات الذكاء الاصطناعي.**',
          '**المعمارية التي تنجو من تنظيم 2026–2028 لها ثلاث خصائص.** أولاً، **النشر السيادي**: أجهزة في الموقع أو سحابة محلية منظّمة تتحكّم بها شركة التأمين. ثانياً، **اتّخاذ قرار قابل للشرح**: كل قرار اكتتاب ومطالبات يمكن تتبّعه إلى المدخلات وإصدار النموذج وطبقة القواعد. ثالثاً، **إدارة مخاطر النموذج**: بيانات تدريب موثّقة، تحقّق موثّق، رصد موثّق.',
          'شركات التأمين التي تبني هذا الأساس في 2026 لا تزال تبني عندما يفتّش المنظّم في 2027. **شركات التأمين التي تنتظر حتى يفرض المنظّم المحادثة في 2028 تكون في موقع إعادة سنتين من العمل تحت ضغط مهلة.**',
        ],
      },
      {
        heading: 'بناء أم شراء أم شراكة — الإجابة الصحيحة لحزمة التأمين بالذكاء الاصطناعي',
        body: [
          '**اشترِ طبقة النماذج.** نماذج الأساس، APIs الرؤية، NLP — هي سلع تتحسّن بسرعة. لا تحتاج إلى ضبط نموذج رؤية لأضرار السيارات من الصفر عندما توجد APIs قابلة للاستخدام بـ 0.001 دولار لكل صورة.',
          '**ابنِ طبقة التكامل واتّخاذ القرار.** هنا تعيش ميزتك التنافسية — تجربة الخسارة الخاصة بك، قنوات التوزيع، البيئة التنظيمية، مزيج المخاطر المحدّد. **لا يبيعك أي بائع نسيج القواعد الصحيح لدفترك. أنت تبنيه، ويصبح الخندق.**',
          '**لا تشترِ أبداً «منصة تأمين بالذكاء الاصطناعي» المغلقة الكاملة من البائعين الدوليين.** Guidewire و Duck Creek و Sapiens — جميعها أنظمة وثائق ومطالبات جيّدة، جميعها خاطئة لطبقة القرار بالذكاء الاصطناعي لأنها تُشحن مع رؤية البائع لفلسفة الاكتتاب والمطالبات.',
          '**شارك استراتيجياً في المنتجات البارامترية والمضمّنة.** أغطية الطقس البارامترية، الزراعية البارامترية، تأمين إرجاعات التجارة الإلكترونية المضمّن — فرص منتج حقيقية لكنها قدرة متخصّصة بتكلفة دخول عالية.',
        ],
      },
      {
        heading: 'الساعة التنافسية — لماذا تصل شركات الإنشورتك المنطقية في 2026–2028',
        body: [
          'تجلب الـ 24 شهراً القادمة شركات تأمين رقمية أولى إقليمية وشركاء تأمين مضمّن إلى الأسواق الجزائرية والمنطقة برأس مال وعلامة وهياكل تكلفة لا يمكن للشركات القائمة مجاراتها. **Cover Genius و Bolt للتوزيع المضمّن، Sehteq و Bayzat للصحّة الرقمية، شركات تأمين رقمية مدعومة من صناديق سيادية خليجية تتوسّع في شمال إفريقيا.** نسب مصاريفها أقل 8 إلى 12 نقطة لأنها بدون شبكة وكلاء وبدون اكتتاب ورقي.',
          '**هذه الفجوة في نسبة المصاريف هيكلية.** الطريقة الوحيدة لسدّها هي إعادة بناء النموذج التشغيلي للاكتتاب والمطالبات حول الذكاء الاصطناعي. **بدون إعادة البناء بالذكاء الاصطناعي، تفوز الإنشورتك على التكلفة. مع إعادة البناء، تفوز الشركة القائمة على العلامة-زائد-التكلفة.**',
          'شركات التأمين التي تكمل التحوّل بالذكاء الاصطناعي بحلول 2028 تحافظ على استقلاليتها. **الشركات التي لم تكمل التحوّل بحلول 2028 تصبح أهداف اندماج بخصومات استحواذ 30 إلى 50٪.**',
        ],
      },
      {
        heading: 'خارطة طريق التحوّل لـ 24 شهراً — ما يجب فعله أولاً وثانياً وثالثاً',
        body: [
          '**الأشهر 0–6: أساس البيانات.** بحيرة بيانات موحّدة تجمع إدارة الوثائق والمطالبات والمدفوعات والتوزيع ومصادر الطرف الثالث. لا ذكاء اصطناعي بمستوى الإنتاج دون طبقة البيانات أسفله. الاستثمار: 600 ألف–1.5 مليون$.',
          '**الأشهر 4–10: كشف الاحتيال ومعالجة المستندات الذكية.** هذه تنتج أولاً لأنّ لديها أسرع ROI وأقلّ مخاطر تنظيمية. الاستثمار: 700 ألف–1.9 مليون$.',
          '**الأشهر 8–16: اكتتاب آلي للسيارات والصحة وممتلكات الشركات الصغيرة والمتوسطة.** عرض إلى ربط في 90 ثانية على 60 إلى 80٪ من الوثائق. الاستثمار: 500 ألف–1.2 مليون$.',
          '**الأشهر 12–20: تقييم مطالبات السيارات بالرؤية الحاسوبية.** صورة إلى تقدير. وقت الدورة على هذه المطالبات ينخفض من 14 يوماً إلى 48 ساعة. الاستثمار: 400 ألف–1.2 مليون$.',
          '**الأشهر 18–24: تسجيل التسرّب والتجديد، التوزيع المضمّن.** بحلول الشهر 24، النموذج التشغيلي مختلف جذرياً عن حيث بدأ — والنسبة المركّبة تعكس ذلك.',
        ],
      },
      {
        heading: 'ماذا يفعل الرئيس التنفيذي لشركة تأمين الأسبوع القادم',
        body: [
          'ثلاث حركات ملموسة قبل نهاية الربع القادم. **أولاً**، تكليف تشخيص صادق على فجوة النسبة المركّبة وأين ينقلها الذكاء الاصطناعي. مهمّة أسبوعين، 30–60 ألف دولار.',
          '**ثانياً**، تخصيص ميزانية هندسية لـ 24 شهراً لطبقة البيانات وأوّل حالتي استخدام للذكاء الاصطناعي. 1.5–3 ملايين دولار. هذه الميزانية لا تذهب إلى بائع لمنصة كاملة — تذهب لبناء طبقة البيانات وطبقة القرار داخلياً أو عبر شريك هندسي متخصّص.',
          '**ثالثاً**، توظيف رئيس واحد لهندسة الذكاء الاصطناعي للتأمين — ليس عالم بيانات، ليس استشارياً، قائد هندسة شحن ذكاء اصطناعياً في الإنتاج داخل صناعة منظّمة. هذا التوظيف الواحد هو الأكثر رافعة. **الشركات التي تحسن هذا التوظيف تحافظ على استقلاليتها.**',
        ],
      },
    ],

    takeaways: {
      title: 'سبعة أشياء تأخذها من هذا التقرير',
      items: [
        'النسبة المركّبة هي الرقم الوحيد الذي يهمّ. الذكاء الاصطناعي ينقلها 8 إلى 14 نقطة بشكل مستدام عبر ثلاثة محاور: الاكتتاب، المطالبات، المصاريف.',
        'خمس حالات استخدام تنتج اليوم: اكتتاب آلي، رؤية مطالبات، كشف احتيال، معالجة مستندات، تسجيل تسرّب. كل ما عداها يحتاج إلى الأساس أولاً.',
        'الجدار التنظيمي يتشكّل في 2026–2028. ابنِ النشر السيادي واتّخاذ القرار القابل للشرح وإدارة مخاطر النموذج الآن.',
        'اشترِ طبقة النماذج (سلعة). ابنِ طبقة التكامل واتّخاذ القرار (خندقك). لا تشترِ أبداً منصة تأمين بالذكاء الاصطناعي مغلقة كاملة.',
        'منافسون رقميون أوائل إقليميون يصلون إلى المنطقة في 2026–2028 بأفضلية 8 إلى 12 نقطة في نسبة المصاريف.',
        'شركات التأمين الجاهزة للذكاء الاصطناعي بحلول 2028 تحافظ على استقلاليتها. الشركات غير الجاهزة تصبح أهداف اندماج بخصومات 30–50٪.',
        'التوظيف الأول هو رئيس هندسة الذكاء الاصطناعي للتأمين مع ذكاء اصطناعي في الإنتاج داخل صناعة منظّمة.',
      ],
    },

    cta: {
      eyebrow: 'تحدّث إلى الفريق الذي يبني الذكاء الاصطناعي للتأمين',
      title:   'تفكّر في برنامج تحوّل بالذكاء الاصطناعي لشركة تأمينك؟ سنخبرك بأي حالات استخدام تشحن أولاً، وما تبنيه مقابل ما تشتريه، وكيف تجعل النسبة المركّبة تتحرّك في 12 شهراً.',
      button:  'احجز مكالمة 30 دقيقة',
    },

    backToHub: 'العودة إلى جميع الرؤى',
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

// Animated AI-ROI chart — two bars sliding up to show combined-ratio compression.
// Client-only render: framer-motion's `initial={{ height: 0 }}` serializes
// inconsistently between SSR and CSR which causes a hydration mismatch on
// React 18 + Next.js 16. We mount it after hydration via useEffect, and emit
// a stable, animation-free skeleton on the server so the page layout is
// identical pre- and post-hydration (no layout shift on first paint).
function AIProfitChart({ label, before, after, note, isRtl }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const max = Math.max(before.value, after.value);
  const bh  = (v) => Math.round((v / max) * 100);

  if (!mounted) {
    // Static placeholder — same outer dimensions as the animated version so
    // the page height does not shift when the chart hydrates.
    return (
      <figure className="relative my-16 lg:my-24 border-y border-white/[0.08] py-12 lg:py-16">
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{label}</span>
          <span className="h-px flex-1 bg-white/10" />
        </div>
        <div className="h-[260px] lg:h-[340px] mb-8" aria-hidden="true" />
        <figcaption className="mt-10 text-xs lg:text-sm text-white/40 leading-relaxed max-w-2xl mx-auto text-center font-light">{note}</figcaption>
      </figure>
    );
  }

  return (
    <motion.figure
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={stagger}
      className="relative my-16 lg:my-24 border-y border-white/[0.08] py-12 lg:py-16"
    >
      <motion.div variants={fadeUp} className="flex items-center gap-3 mb-10">
        <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{label}</span>
        <span className="h-px flex-1 bg-white/10" />
      </motion.div>

      <div className="grid grid-cols-2 gap-8 lg:gap-16 items-end h-[260px] lg:h-[340px] mb-8 max-w-2xl mx-auto">
        {[before, after].map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, height: 0 }}
            whileInView={{ opacity: 1, height: `${bh(b.value)}%` }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.1, delay: 0.25 + i * 0.35, ease: [0.22, 1, 0.36, 1] }}
            className={`relative w-full ${i === 0 ? 'bg-white/[0.18]' : 'bg-white'} flex flex-col items-center justify-start`}
            style={{ minHeight: 8 }}
          >
            <motion.span
              initial={{ opacity: 0, y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.3 + i * 0.35 }}
              className={`absolute -top-9 font-light text-2xl lg:text-3xl tracking-tight ${i === 0 ? 'text-white/70' : 'text-white'}`}
            >
              {b.value}%
            </motion.span>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-8 lg:gap-16 max-w-2xl mx-auto">
        {[before, after].map((b, i) => (
          <motion.div key={i} variants={fadeUp} className="text-center">
            <span className="font-mono text-[10px] lg:text-[11px] tracking-[0.15em] uppercase text-white/40">
              {b.label}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.figcaption variants={fadeUp} className="mt-10 text-xs lg:text-sm text-white/40 leading-relaxed max-w-2xl mx-auto text-center font-light">
        {note}
      </motion.figcaption>
    </motion.figure>
  );
}

export default function InsightInsurancePage() {
  const { locale } = useRouter();
  const isRtl = locale === 'ar';
  const c = CONTENT[locale] || CONTENT.en;

  const articleLd = {
    '@context':      'https://schema.org',
    '@type':         'Article',
    headline:        c.title,
    description:     c.dek,
    image:           ['https://symloop.com/insights/cover-insurance.jpg'],
    datePublished:   '2026-05-24',
    dateModified:    '2026-05-24',
    author:          { '@type': 'Organization', name: 'Symloop Technology' },
    publisher:       {
      '@type': 'Organization',
      name:    'Symloop Technology',
      logo:    { '@type': 'ImageObject', url: 'https://symloop.com/sym-logo.png' },
    },
    mainEntityOfPage: 'https://symloop.com/insights/insurance/',
    about: [
      { '@type': 'Thing', name: 'AI in insurance' },
      { '@type': 'Thing', name: 'Insurance digital transformation' },
      { '@type': 'Thing', name: 'AI underwriting automation' },
      { '@type': 'Thing', name: 'Claims AI computer vision' },
      { '@type': 'Thing', name: 'Insurance fraud detection AI' },
      { '@type': 'Thing', name: 'Combined ratio optimization' },
      { '@type': 'Thing', name: 'Insurance core system modernization MENA' },
      { '@type': 'Organization', name: 'SAA', alternateName: 'Société Algérienne d\'Assurance' },
      { '@type': 'Organization', name: 'CAAR', alternateName: 'Compagnie Algérienne d\'Assurance et de Réassurance' },
      { '@type': 'Organization', name: 'CAAT', alternateName: 'Compagnie Algérienne d\'Assurance des Transports' },
      { '@type': 'Organization', name: 'CIAR', alternateName: 'Compagnie Internationale d\'Assurance et de Réassurance' },
      { '@type': 'Organization', name: 'TRUST Algérie' },
      { '@type': 'Organization', name: 'CASH Assurances' },
      { '@type': 'Organization', name: 'GAM', alternateName: 'Générale Assurance Méditerranéenne' },
      { '@type': 'Organization', name: 'Alliance Assurances' },
      { '@type': 'Organization', name: 'La Mutuelle Agricole' },
      { '@type': 'Organization', name: '2A' },
      { '@type': 'GovernmentOrganization', name: 'Direction des Assurances Algérie' },
    ],
    audience: { '@type': 'BusinessAudience', audienceType: 'Insurance CEO, CFO, CIO, Director of Underwriting, Director of Claims, Director of Actuarial, Insurtech Founder, SAA executive, CAAR executive, CAAT executive, CIAR executive, TRUST Algérie executive, CASH Assurances executive, GAM executive' },
    mentions: [
      { '@type': 'Organization', name: 'SAA' },
      { '@type': 'Organization', name: 'CAAR' },
      { '@type': 'Organization', name: 'CAAT' },
      { '@type': 'Organization', name: 'CIAR' },
      { '@type': 'Organization', name: 'TRUST Algérie' },
      { '@type': 'Organization', name: 'CASH Assurances' },
      { '@type': 'Organization', name: 'GAM' },
    ],
  };

  const breadcrumbs = [
    { name: 'Home',     url: 'https://symloop.com/' },
    { name: 'Insights', url: 'https://symloop.com/insights/' },
    { name: c.title,    url: 'https://symloop.com/insights/insurance/' },
  ];

  return (
    <>
      <SEO
        title={c.titleSeo}
        description={c.dekSeo}
        keywords="SAA IA, SAA digitalisation, SAA transformation digitale, SAA Société Algérienne d'Assurance IA, CAAR IA, CAAR digitalisation, CAAR transformation digitale, CAAR Compagnie Algérienne Assurance Réassurance IA, CAAT IA, CAAT digitalisation, CAAT transformation digitale, CAAT Compagnie Algérienne Assurance Transports IA, CIAR IA, CIAR digitalisation, CIAR transformation digitale, CIAR Compagnie Internationale Assurance Réassurance IA, TRUST Algérie IA, TRUST Algérie transformation digitale, CASH Assurances IA, CASH Assurances digitalisation, GAM IA, GAM Générale Assurance Méditerranéenne digitalisation, Alliance Assurances IA, La Mutuelle Agricole IA, 2A Assurances IA, AI insurance Algeria, transformation digitale assurance algérie, IA assurance algérie, insurance AI MENA, AI underwriting automation, automated underwriting insurance, claims AI computer vision, insurance fraud detection AI, combined ratio AI, insurance digital transformation MENA, insurtech algeria, insurtech MENA, custom insurance software, policy administration system, claims management software, insurance data sovereignty, sovereign insurance software, AI insurance platform, IA assurance non-vie, souscription IA, gestion sinistres IA, détection fraude assurance, ratio combiné, digitalisation assurance, transformation IA compagnie assurance, Direction des Assurances Algérie, insurance core system, telematics underwriting, parametric insurance, embedded insurance, AI insurance Morocco, AI insurance Tunisia, AI insurance Saudi Arabia, AI insurance UAE, symloop insurance, symloop insights"
        type="article"
        structuredData={articleLd}
        faq={c.faq}
        breadcrumbs={breadcrumbs}
        image="/insights/cover-insurance.jpg"
      />

      <main dir={isRtl ? 'rtl' : 'ltr'} className="bg-black text-white">

        <section className="relative border-b border-white/[0.06]">
          <div className="max-w-5xl mx-auto px-6 lg:px-10 pt-32 lg:pt-40 pb-16">
            <motion.div initial="hidden" animate="show" variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <Link href="/insights/" className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors">
                  {c.kind}
                </Link>
                <span className="h-px w-12 bg-white/20" />
                <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/35">{c.publishedAt}</span>
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-4xl lg:text-6xl xl:text-7xl font-light tracking-tight leading-[1.05]">
                {c.title}
              </motion.h1>

              <motion.p variants={fadeUp} className="mt-8 text-xl lg:text-2xl text-white/60 leading-relaxed font-light max-w-3xl">
                {c.dek}
              </motion.p>

              <motion.div variants={fadeUp} className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-3 font-mono text-[11px] tracking-[0.15em] uppercase text-white/35 pt-8 border-t border-white/[0.08]">
                <span>{c.author}</span>
                <span>{c.pages}</span>
                <span>{c.readTime}</span>
              </motion.div>
            </motion.div>
          </div>

          <div className="relative w-full aspect-[16/9] lg:aspect-[21/9] border-y border-white/[0.06] bg-white/[0.02] overflow-hidden">
            <Image
              src="/insights/cover-insurance.jpg"
              alt={c.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="space-y-6 mb-16">
            {c.intro.map((p, i) => (
              <motion.p key={i} variants={fadeUp} className="text-lg lg:text-xl text-white/75 leading-relaxed font-light">
                {renderRichText(p)}
              </motion.p>
            ))}
          </motion.div>

          {/* Animated combined-ratio chart — the single hero visualization for the brief */}
          <AIProfitChart
            label={c.chartLabel}
            before={c.chartBefore}
            after={c.chartAfter}
            note={c.chartNote}
            isRtl={isRtl}
          />

          {c.sections.map((s, idx) => (
            <motion.section key={idx} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="mb-16 lg:mb-20">
              <motion.div variants={fadeUp} className="flex items-baseline gap-4 mb-8">
                <span className="font-mono text-[11px] tracking-[0.15em] text-white/30">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h2 className="text-2xl lg:text-3xl font-light tracking-tight text-white leading-tight">
                  {s.heading}
                </h2>
              </motion.div>

              <div className="space-y-5 ps-0 lg:ps-10">
                {s.body.map((p, i) => (
                  <motion.p key={i} variants={fadeUp} className="text-base lg:text-lg text-white/65 leading-relaxed">
                    {renderRichText(p)}
                  </motion.p>
                ))}
              </div>
            </motion.section>
          ))}

          <motion.aside initial="hidden" whileInView="show" viewport={{ once: true, margin: '-50px' }} variants={stagger} className="mt-20 mb-16 border border-white/[0.08] bg-white/[0.015] p-8 lg:p-12">
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{c.takeaways.title}</span>
              <span className="h-px flex-1 bg-white/10" />
            </motion.div>
            <ul className="space-y-5">
              {c.takeaways.items.map((t, i) => (
                <motion.li key={i} variants={fadeUp} className="flex items-start gap-5">
                  <span className="font-mono text-[11px] tracking-[0.15em] text-white/30 pt-1.5 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-base lg:text-lg text-white/75 leading-relaxed font-light">{t}</p>
                </motion.li>
              ))}
            </ul>
          </motion.aside>

          {c.faq && c.faq.length > 0 && (
            <motion.section initial="hidden" whileInView="show" viewport={{ once: true, margin: '-50px' }} variants={stagger} className="mt-20 mb-16">
              <motion.div variants={fadeUp} className="flex items-baseline gap-4 mb-10">
                <span className="font-mono text-[11px] tracking-[0.15em] text-white/30">FAQ</span>
                <h2 className="text-2xl lg:text-3xl font-light tracking-tight text-white leading-tight">
                  {isRtl ? 'أسئلة يطرحها مدراء شركات التأمين' : (locale === 'fr' ? 'Questions des DG d\'assurance' : 'Questions insurance executives ask')}
                </h2>
              </motion.div>
              <div className="space-y-8 ps-0 lg:ps-10 border-t border-white/[0.06] pt-8">
                {c.faq.map((f, i) => (
                  <motion.div key={i} variants={fadeUp} className="border-b border-white/[0.06] pb-8 last:border-0">
                    <h3 className="text-lg lg:text-xl font-normal text-white mb-3 leading-snug">{f.q}</h3>
                    <p className="text-base lg:text-lg text-white/65 leading-relaxed">{f.a}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {c.relatedServices && (
            <motion.section initial="hidden" whileInView="show" viewport={{ once: true, margin: '-50px' }} variants={stagger} className="mt-20 mb-16">
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{c.relatedServices.heading}</span>
                <span className="h-px flex-1 bg-white/10" />
              </motion.div>
              <ul className="space-y-px bg-white/[0.06]">
                {c.relatedServices.items.map((item) => (
                  <motion.li key={item.href} variants={fadeUp}>
                    <Link href={item.href} className="group flex items-start justify-between gap-6 bg-black p-6 hover:bg-white/[0.02] transition-colors">
                      <span className="text-base lg:text-lg text-white/75 group-hover:text-white transition-colors leading-snug font-light">{item.name}</span>
                      <ArrowRight className="w-4 h-4 mt-1.5 text-white/30 group-hover:text-white/70 group-hover:translate-x-1 transition-all shrink-0" strokeWidth={1.5} />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.section>
          )}

          {c.relatedInsights && (
            <motion.section initial="hidden" whileInView="show" viewport={{ once: true, margin: '-50px' }} variants={stagger} className="mt-16 mb-12">
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{c.relatedInsights.heading}</span>
                <span className="h-px flex-1 bg-white/10" />
              </motion.div>
              <ul className="space-y-px bg-white/[0.06]">
                {c.relatedInsights.items.map((item) => (
                  <motion.li key={item.href} variants={fadeUp}>
                    <Link href={item.href} className="group flex items-start justify-between gap-6 bg-black p-6 hover:bg-white/[0.02] transition-colors">
                      <span className="text-base lg:text-lg text-white/75 group-hover:text-white transition-colors leading-snug font-light">{item.name}</span>
                      <ArrowRight className="w-4 h-4 mt-1.5 text-white/30 group-hover:text-white/70 group-hover:translate-x-1 transition-all shrink-0" strokeWidth={1.5} />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.section>
          )}
        </article>

        <section className="border-t border-white/[0.06]">
          <div className="max-w-5xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} variants={stagger} className="max-w-3xl">
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{c.cta.eyebrow}</span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>

              <motion.h2 variants={fadeUp} className="text-3xl lg:text-5xl font-light tracking-tight leading-[1.1]">
                {c.cta.title}
              </motion.h2>

              <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-x-12 gap-y-6">
                <a href="https://wa.me/213549575512" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 text-sm font-medium tracking-wide text-white border-b border-white/30 hover:border-white pb-2 transition-colors">
                  <span>{c.cta.button}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
                </a>
                <Link href="/insights/" className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.15em] uppercase text-white/40 hover:text-white transition-colors">
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

function renderRichText(text) {
  const parts = String(text).split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) => {
    if (p.startsWith('**') && p.endsWith('**')) {
      return (
        <span key={i} className="font-normal text-white border-b border-white/30">
          {p.slice(2, -2)}
        </span>
      );
    }
    return <span key={i}>{p}</span>;
  });
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  };
}
