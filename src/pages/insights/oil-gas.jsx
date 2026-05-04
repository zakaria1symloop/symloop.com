// ============================================================================
// SYMLOOP — Insight: Oil and gas IT transformation
//
// Industry brief for oil & gas decision-makers (CIO, OT director, plant manager)
// across MENA. Covers DCS/AMS to independent PLC migration, vendor lock-in,
// OT/IT convergence. Heavy B2B SEO — targets enterprise industrial buyers.
// ============================================================================

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
    title:       'Oil and gas IT transformation — from vendor lock-in to independent control.',
    dek:         'Why MENA operators are moving from proprietary AMS and DCS architectures to independent PLC systems they actually own. A field guide for CIOs and OT directors evaluating industrial automation migration.',
    publishedAt: 'April 2026',
    readTime:    '20 min read',
    pages:       '32 pages',
    author:      'Symloop research',

    intro: [
      'Walk into the control room of any MENA refinery, gas treatment plant, or upstream facility built between 1995 and 2015 and you will find the same thing: a distributed control system from Emerson, Honeywell, ABB, Siemens or Yokogawa, an asset management system layered on top, a proprietary communication bus that nobody on the local team fully understands, and a support contract that renews every three years for roughly the cost of a new mid-sized control system.',
      'The cost of change is deliberately high. The vendor owns the engineering tools, the driver libraries, the device type managers, the historian schemas, and the spare-parts supply. Any modification that is not on their roadmap gets priced as a project. Any integration that competes with their own product gets quietly locked out. This is not a conspiracy — it is a business model. It has worked brilliantly for the vendors and it is now breaking under the weight of every digital transformation initiative in the region.',
      'This brief is the engineering view from a team that has migrated industrial automation architectures from vendor-locked DCS and AMS environments to independent PLC-based systems that the operator actually controls. It explains why the migration is now unavoidable, what the independent architecture looks like, and where the real savings hide.',
    ],

    sections: [
      {
        heading: 'The vendor lock-in that runs MENA industry',
        body: [
          'The proprietary DCS is the quiet king of process automation across the Maghreb and the Gulf. Sonatrach\'s upstream and midstream assets, the Algerian refineries, the Saudi petrochemical complexes, the Emirati gas treatment plants — the vast majority are running control systems where the engineering workstation only speaks to devices through vendor-signed drivers, where the historian is locked to the vendor\'s schema, and where adding a simple third-party flow meter to the asset management loop costs more in licensing than the meter itself.',
          'Asset management systems are the worst offender. **AMS Device Manager, FieldCare, PRM — all of them were designed in the HART-protocol era to centralize device configuration and diagnostics, but the vendor priced the architecture so that the cheapest path to add or replace any instrument is to buy more of the same vendor. The handbook says open protocols. The practice says a minimum of 60% vendor-branded hardware in the loop or the calibration tool refuses to load.**',
          'For an operator sitting on 15,000 field instruments, 400 control loops, and a twenty-year remaining asset life, this is a serious strategic problem. It is also the problem that every MENA national oil company is now being told to solve by 2030 as part of their digital transformation mandate.',
        ],
      },
      {
        heading: 'What independent control actually means',
        body: [
          'The alternative is not to rip out the DCS. The alternative is to put the decision layer — the PLCs, the supervisory layer, the data layer, the analytics layer — on open architectures that the operator owns. The DCS becomes an execution layer for safety and interlock logic where it still makes sense. Everything above it becomes vendor-neutral.',
          'In concrete terms: **Siemens, Schneider, Rockwell, Beckhoff, or Bachmann PLCs connected via OPC UA instead of proprietary protocols. Historian layer on InfluxDB or TimescaleDB instead of a locked vendor database. SCADA on Ignition, Zenon, or a custom React-based HMI instead of the vendor\'s 2008-era Windows client. Asset management on FDI-standard device descriptions instead of vendor-only device type managers.** Everything above the safety-instrumented system becomes replaceable, upgradable, and independent.',
          'The engineering team inside the plant can now modify loops without a licensing call to Europe. The spare-parts inventory can source from three different vendors at competitive prices. The historian can feed a predictive maintenance model, a cost controller, or a regulatory report without a $200,000 data-integration project each time.',
        ],
        image: {
          src: '/insights/oil-gas-architecture.jpg',
          alt: 'Editorial architecture diagram comparing a vendor-locked DCS architecture on the left — one vertical column, proprietary protocols, single vendor — to an independent PLC architecture on the right — multiple parallel columns, open OPC UA bus, multi-vendor.',
          caption: 'Left: the proprietary DCS/AMS stack that runs most MENA process facilities today. Right: the independent PLC-based architecture with open protocols. The safety-instrumented system stays; everything above it becomes vendor-neutral.',
        },
      },
      {
        heading: 'The economics — where the savings actually come from',
        body: [
          'The first misconception about this migration is that the savings come from cheaper hardware. They do not. A Siemens S7-1500 is not meaningfully cheaper than an Emerson DeltaV controller. The savings come from three other places.',
          '**License freedom** — not having to pay $2,000 per engineering-workstation seat per year, not having to pay per-tag licensing on the historian, not having to pay the vendor\'s certified integrator $1,800 per day to do work your own team could do with a published API. Across a mid-sized refinery, license-freedom alone is $500,000 to $2 million per year, depending on the installation.',
          '**Vendor competition on instruments** — when the loop is open-protocol, a Yokogawa flow meter, an Endress+Hauser pressure transmitter, and a Rosemount level gauge all work equally well in the same configuration environment. Prices drop 15 to 30% on the instrument line item over a five-year procurement cycle. For an operator buying 500 to 2,000 instruments a year, this alone funds the migration.',
          '**Unlocked data** — this is the one that actually matters. The process data that sits in a vendor historian today is worth between $1 and $5 per tag per year when it is free to feed predictive maintenance, yield optimization, energy reconciliation, and environmental reporting. For a 50,000-tag facility, that is $50,000 to $250,000 per year of value that is currently locked inside a proprietary schema because the vendor wants to sell their own analytics suite on top.',
        ],
      },
      {
        heading: 'The OT/IT convergence problem nobody solves cleanly',
        body: [
          'The reason these migrations fail more often than they succeed is that they are run by IT departments that do not understand safety-instrumented systems, or by OT departments that do not understand modern software architectures. The successful migrations are run by teams that operate both sides fluently.',
          '**OT-side requirements that IT teams routinely miss** — deterministic response times below 50ms for critical loops, proper safety integrity level (SIL 2 / SIL 3) segregation between control and safety layers, hot-standby redundancy with seamless failover, 10-to-20-year component availability, proper handling of IEC 61131-3 programming standards, and the fact that a bad firmware upgrade can shut down a facility for three days and cost millions.',
          '**IT-side requirements that OT teams routinely miss** — source control for PLC programs (not just the latest file on a USB stick in the engineer\'s drawer), automated testing of control logic, configuration-as-code for the SCADA layer, proper identity management and audit logging on every engineering change, network segmentation according to IEC 62443, and the ability to deploy a change to fifty identical pump skids without walking to each one with a laptop.',
          'A team that does only OT will ship an architecture that is safe and unmaintainable. A team that does only IT will ship an architecture that is elegant and unsafe. The team that does both is rare — and it is exactly what MENA national oil companies now need to find.',
        ],
      },
      {
        heading: 'The migration playbook — what actually works',
        body: [
          'If you run a refinery, gas plant, or chemical facility in Algeria, Saudi Arabia, the UAE, or anywhere else in the region and want to move away from vendor lock-in without rebuilding the plant, the sequence is now well-understood.',
          '**Phase one: instrument the data layer, do not touch the control layer.** Install an open historian (InfluxDB / TimescaleDB) in parallel with the vendor historian. Feed it from the existing DCS through OPC DA / OPC UA gateways. Keep running the plant exactly as before. This phase alone unlocks 80% of the data value without a single risk to production. It typically pays for itself within twelve months from the analytics use cases it enables.',
          '**Phase two: migrate the supervisory layer.** Replace the vendor SCADA with an independent one (Ignition, Zenon, or custom) running alongside the existing one. Operators can run both for a transition period. The engineering ownership of the HMI shifts from vendor to operator.',
          '**Phase three: migrate non-critical control loops to independent PLCs.** Utility systems, auxiliary pumps, material handling, metering skids — systems where a controlled shutdown is not a plant-wide event. This phase is where the team learns to engineer on the new stack under real plant conditions.',
          '**Phase four: migrate primary control, preserve safety.** Core process loops move to independent PLC controllers. The safety-instrumented system stays on a certified SIL 3 platform — but it can be a competitive one, not locked to the DCS vendor. The asset management layer is rebuilt on FDI standards and open device descriptions.',
          'Done in this order, the migration is a three-to-five-year program with measurable ROI at every phase and zero heroic cutovers. Done out of order, it becomes a rip-and-replace that threatens production.',
        ],
      },
      {
        heading: 'Why MENA is the right place to do this right now',
        body: [
          'Three things make 2026 the right moment. First, the major vendors have exhausted their pricing leverage — their software maintenance fees have risen faster than inflation for a decade and operators have finally started to push back with budget-approved migration projects. Second, open-protocol support on the instrument side has matured to the point where interoperability is no longer a lab demonstration; it is a procurement reality. Third, the MENA digital transformation mandates — Algeria\'s digitalization plan, Saudi Vision 2030, UAE Smart Industry, Qatar Vision 2030 — all now explicitly require vendor-neutral architectures in their new-build specifications.',
          'The operators who start the migration now, phased correctly, will have a stable independent architecture by 2030. The operators who delay will hit the Vision-2030 compliance walls with a plant still running on 1998 proprietary DCS — and at that point the migration becomes emergency, not strategic.',
          'This is the window. It closes around 2028.',
        ],
      },
    ],

    takeaways: {
      title: 'Six things to take from this brief',
      items: [
        'Vendor lock-in on DCS and AMS is a business model, not a technology limitation. It has to be addressed at the architecture level, not the procurement level.',
        'The independent alternative is PLC-based control, OPC UA protocols, open historians, and vendor-neutral SCADA — with the safety-instrumented system preserved.',
        'The real savings are license freedom, instrument-vendor competition, and unlocked data. The hardware cost is similar; the ecosystem cost is where operators bleed.',
        'OT/IT convergence failures come from running the migration with one skill set. Successful migrations need teams that are fluent in both safety engineering and modern software.',
        'Migrate in four phases: data layer first (no control risk), then supervisory, then non-critical control, then primary control with safety preserved.',
        'The 2026–2028 window is the right moment. Vision 2030 mandates will force the issue by the end of the decade — operators who start early pay less and sleep better.',
      ],
    },

    cta: {
      eyebrow: 'Talk to the team that wrote this',
      title:   'Considering an industrial automation migration? We will tell you what to phase first — and what to leave alone until phase four.',
      button:  'Book a 30-minute call',
    },

    backToHub: 'Back to all insights',
  },

  // ──────────────────────────────────────────────────────────────────────
  fr: {
    kind:        'Étude sectorielle',
    title:       "Transformation IT pétrole et gaz — du verrouillage fournisseur au contrôle indépendant.",
    dek:         "Pourquoi les opérateurs MENA migrent des architectures AMS et DCS propriétaires vers des systèmes PLC indépendants qu'ils possèdent réellement. Un guide terrain pour les DSI et directeurs OT qui évaluent la migration d'automatisation industrielle.",
    publishedAt: 'Avril 2026',
    readTime:    '20 min de lecture',
    pages:       '32 pages',
    author:      'Recherche Symloop',

    intro: [
      "Entrez dans la salle de contrôle de n'importe quelle raffinerie MENA, usine de traitement de gaz, ou installation amont construite entre 1995 et 2015 et vous trouverez la même chose : un système de contrôle distribué d'Emerson, Honeywell, ABB, Siemens ou Yokogawa, un système de gestion d'actifs superposé, un bus de communication propriétaire que personne dans l'équipe locale ne comprend vraiment, et un contrat de support qui se renouvelle tous les trois ans pour environ le coût d'un nouveau système de contrôle de taille moyenne.",
      "Le coût du changement est délibérément élevé. Le fournisseur possède les outils d'ingénierie, les bibliothèques de pilotes, les gestionnaires de types d'appareils, les schémas d'historien et l'approvisionnement en pièces détachées. Toute modification qui n'est pas sur sa feuille de route est facturée comme un projet. Toute intégration qui concurrence son propre produit est discrètement verrouillée. Ce n'est pas une conspiration — c'est un modèle d'affaires. Il a brillamment fonctionné pour les fournisseurs et il s'effondre maintenant sous le poids de chaque initiative de transformation numérique dans la région.",
      "Cette étude est la vue d'ingénierie d'une équipe qui a migré des architectures d'automatisation industrielle depuis des environnements DCS et AMS verrouillés vers des systèmes PLC indépendants que l'opérateur contrôle réellement. Elle explique pourquoi la migration est désormais inévitable, à quoi ressemble l'architecture indépendante, et où se cachent les vraies économies.",
    ],

    sections: [
      {
        heading: "Le verrouillage fournisseur qui régit l'industrie MENA",
        body: [
          "Le DCS propriétaire est le roi silencieux de l'automatisation des procédés à travers le Maghreb et le Golfe. Les actifs amont et midstream de Sonatrach, les raffineries algériennes, les complexes pétrochimiques saoudiens, les usines de traitement de gaz émiraties — la grande majorité tournent sur des systèmes de contrôle où la station d'ingénierie ne parle aux appareils qu'à travers des pilotes signés par le fournisseur, où l'historien est verrouillé sur le schéma du fournisseur, et où ajouter un simple débitmètre tiers à la boucle de gestion d'actifs coûte plus en licences que le débitmètre lui-même.",
          "Les systèmes de gestion d'actifs sont les pires contrevenants. **AMS Device Manager, FieldCare, PRM — tous ont été conçus à l'ère du protocole HART pour centraliser la configuration et le diagnostic des appareils, mais le fournisseur a tarifé l'architecture de telle sorte que le chemin le moins cher pour ajouter ou remplacer un instrument est d'acheter davantage du même fournisseur. Le manuel dit protocoles ouverts. La pratique dit un minimum de 60% de matériel marqué fournisseur dans la boucle ou l'outil de calibration refuse de charger.**",
          "Pour un opérateur disposant de 15 000 instruments de terrain, 400 boucles de contrôle et une durée de vie résiduelle des actifs de vingt ans, c'est un problème stratégique sérieux. C'est aussi le problème que chaque compagnie pétrolière nationale MENA se voit maintenant demander de résoudre d'ici 2030 dans le cadre de son mandat de transformation numérique.",
        ],
      },
      {
        heading: 'Ce que signifie réellement le contrôle indépendant',
        body: [
          "L'alternative n'est pas d'arracher le DCS. L'alternative est de placer la couche de décision — les PLC, la couche superviseur, la couche données, la couche analytique — sur des architectures ouvertes que l'opérateur possède. Le DCS devient une couche d'exécution pour la logique de sécurité et d'interverrouillage là où cela a encore du sens. Tout au-dessus devient neutre du point de vue fournisseur.",
          "En termes concrets : **des PLC Siemens, Schneider, Rockwell, Beckhoff ou Bachmann connectés via OPC UA au lieu de protocoles propriétaires. Couche historien sur InfluxDB ou TimescaleDB au lieu d'une base de données verrouillée. SCADA sur Ignition, Zenon ou une IHM sur mesure basée React au lieu du client Windows 2008 du fournisseur. Gestion d'actifs sur descriptions d'appareils standard FDI au lieu de gestionnaires de types d'appareils exclusifs.** Tout au-dessus du système instrumenté de sécurité devient remplaçable, modernisable et indépendant.",
          "L'équipe d'ingénierie à l'intérieur de l'usine peut maintenant modifier les boucles sans un appel de licence vers l'Europe. L'inventaire de pièces détachées peut s'approvisionner chez trois fournisseurs différents à des prix compétitifs. L'historien peut alimenter un modèle de maintenance prédictive, un contrôleur de coûts ou un rapport réglementaire sans un projet d'intégration de données de 200 000 € à chaque fois.",
        ],
        image: {
          src: '/insights/oil-gas-architecture.jpg',
          alt: "Diagramme d'architecture éditorial comparant une architecture DCS verrouillée fournisseur à gauche — une colonne verticale, protocoles propriétaires, fournisseur unique — à une architecture PLC indépendante à droite — plusieurs colonnes parallèles, bus OPC UA ouvert, multi-fournisseur.",
          caption: "Gauche : la pile DCS/AMS propriétaire qui tourne dans la plupart des installations de procédés MENA aujourd'hui. Droite : l'architecture indépendante basée PLC avec protocoles ouverts. Le système instrumenté de sécurité reste ; tout au-dessus devient neutre fournisseur.",
        },
      },
      {
        heading: "L'économie — où viennent réellement les économies",
        body: [
          "La première idée fausse sur cette migration est que les économies viennent d'un matériel moins cher. C'est faux. Un Siemens S7-1500 n'est pas significativement moins cher qu'un contrôleur Emerson DeltaV. Les économies viennent de trois autres endroits.",
          "**Liberté de licence** — ne pas avoir à payer 2 000 $ par poste d'ingénierie par an, ne pas avoir à payer par-tag sur l'historien, ne pas avoir à payer l'intégrateur certifié du fournisseur 1 800 $ par jour pour un travail que votre propre équipe pourrait faire avec une API publiée. À travers une raffinerie de taille moyenne, la liberté de licence seule représente 500 000 à 2 millions de dollars par an, selon l'installation.",
          "**Concurrence fournisseur sur les instruments** — lorsque la boucle est à protocole ouvert, un débitmètre Yokogawa, un transmetteur de pression Endress+Hauser et une jauge de niveau Rosemount fonctionnent tous aussi bien dans le même environnement de configuration. Les prix baissent de 15 à 30% sur la ligne instrument sur un cycle d'approvisionnement de cinq ans. Pour un opérateur achetant 500 à 2 000 instruments par an, cela seul finance la migration.",
          "**Données débloquées** — c'est celui qui compte réellement. Les données de procédé qui résident dans un historien fournisseur aujourd'hui valent entre 1 $ et 5 $ par tag par an lorsqu'elles sont libres d'alimenter la maintenance prédictive, l'optimisation de rendement, la réconciliation énergétique et le reporting environnemental. Pour une installation de 50 000 tags, c'est 50 000 à 250 000 $ par an de valeur actuellement verrouillée dans un schéma propriétaire parce que le fournisseur veut vendre sa propre suite d'analytique par-dessus.",
        ],
      },
      {
        heading: 'Le problème de convergence OT/IT que personne ne résout proprement',
        body: [
          "La raison pour laquelle ces migrations échouent plus souvent qu'elles ne réussissent est qu'elles sont menées par des départements IT qui ne comprennent pas les systèmes instrumentés de sécurité, ou par des départements OT qui ne comprennent pas les architectures logicielles modernes. Les migrations réussies sont menées par des équipes qui opèrent les deux côtés couramment.",
          "**Exigences côté OT que les équipes IT manquent régulièrement** — des temps de réponse déterministes inférieurs à 50 ms pour les boucles critiques, une ségrégation de niveau d'intégrité de sécurité appropriée (SIL 2 / SIL 3) entre les couches contrôle et sécurité, une redondance en secours à chaud avec basculement transparent, une disponibilité de composants sur 10 à 20 ans, une gestion appropriée des standards de programmation IEC 61131-3, et le fait qu'une mauvaise mise à jour firmware peut arrêter une installation pendant trois jours et coûter des millions.",
          "**Exigences côté IT que les équipes OT manquent régulièrement** — contrôle de source pour les programmes PLC (pas juste le dernier fichier sur une clé USB dans le tiroir de l'ingénieur), tests automatisés de la logique de contrôle, configuration-as-code pour la couche SCADA, gestion d'identité et journalisation d'audit appropriées sur chaque modification d'ingénierie, segmentation réseau selon IEC 62443, et la capacité de déployer une modification sur cinquante skids de pompe identiques sans marcher vers chacun avec un ordinateur portable.",
          "Une équipe qui ne fait que de l'OT livrera une architecture sûre et non maintenable. Une équipe qui ne fait que de l'IT livrera une architecture élégante et non sûre. L'équipe qui fait les deux est rare — et c'est exactement ce que les compagnies pétrolières nationales MENA doivent maintenant trouver.",
        ],
      },
      {
        heading: 'Le plan de migration — ce qui fonctionne réellement',
        body: [
          "Si vous dirigez une raffinerie, une usine de gaz ou une installation chimique en Algérie, en Arabie Saoudite, aux Émirats, ou ailleurs dans la région et voulez vous éloigner du verrouillage fournisseur sans reconstruire l'installation, la séquence est maintenant bien comprise.",
          "**Phase un : instrumenter la couche données, ne pas toucher à la couche contrôle.** Installez un historien ouvert (InfluxDB / TimescaleDB) en parallèle de l'historien fournisseur. Alimentez-le depuis le DCS existant via des passerelles OPC DA / OPC UA. Continuez à faire tourner l'installation exactement comme avant. Cette phase seule débloque 80% de la valeur des données sans un seul risque pour la production. Elle se rembourse généralement en douze mois grâce aux cas d'usage analytiques qu'elle permet.",
          "**Phase deux : migrer la couche superviseur.** Remplacez le SCADA fournisseur par un indépendant (Ignition, Zenon, ou sur mesure) tournant aux côtés de l'existant. Les opérateurs peuvent faire tourner les deux pendant une période de transition. La propriété d'ingénierie de l'IHM passe du fournisseur à l'opérateur.",
          "**Phase trois : migrer les boucles de contrôle non critiques vers des PLC indépendants.** Systèmes utilitaires, pompes auxiliaires, manutention de matériaux, skids de comptage — systèmes où un arrêt contrôlé n'est pas un événement à l'échelle de l'installation. Cette phase est celle où l'équipe apprend à ingénierer sur la nouvelle pile dans les conditions réelles de l'installation.",
          "**Phase quatre : migrer le contrôle primaire, préserver la sécurité.** Les boucles de procédé centrales passent à des contrôleurs PLC indépendants. Le système instrumenté de sécurité reste sur une plateforme certifiée SIL 3 — mais il peut être une plateforme concurrentielle, non verrouillée au fournisseur DCS. La couche de gestion d'actifs est reconstruite sur les standards FDI et les descriptions d'appareils ouvertes.",
          "Fait dans cet ordre, la migration est un programme de trois à cinq ans avec un ROI mesurable à chaque phase et zéro bascule héroïque. Fait dans le désordre, cela devient un arrachage-remplacement qui menace la production.",
        ],
      },
      {
        heading: 'Pourquoi le MENA est le bon endroit pour le faire maintenant',
        body: [
          "Trois choses font de 2026 le bon moment. Premièrement, les grands fournisseurs ont épuisé leur levier de tarification — leurs frais de maintenance logicielle ont augmenté plus vite que l'inflation pendant une décennie et les opérateurs ont finalement commencé à pousser en retour avec des projets de migration approuvés en budget. Deuxièmement, le support des protocoles ouverts côté instrument a mûri au point où l'interopérabilité n'est plus une démonstration de laboratoire ; c'est une réalité d'approvisionnement. Troisièmement, les mandats de transformation numérique MENA — le plan de digitalisation algérien, Vision 2030 saoudien, UAE Smart Industry, Qatar Vision 2030 — exigent maintenant tous explicitement des architectures neutres du point de vue fournisseur dans leurs spécifications de nouvelle construction.",
          "Les opérateurs qui commencent la migration maintenant, phasée correctement, auront une architecture indépendante stable d'ici 2030. Les opérateurs qui retardent heurteront les murs de conformité Vision 2030 avec une installation tournant encore sur un DCS propriétaire de 1998 — et à ce moment-là, la migration devient urgence, pas stratégie.",
          "C'est la fenêtre. Elle se referme vers 2028.",
        ],
      },
    ],

    takeaways: {
      title: 'Six points à retenir',
      items: [
        "Le verrouillage fournisseur sur le DCS et l'AMS est un modèle d'affaires, pas une limitation technologique. Il doit être traité au niveau de l'architecture, pas de l'approvisionnement.",
        "L'alternative indépendante est un contrôle basé PLC, des protocoles OPC UA, des historiens ouverts et un SCADA neutre du point de vue fournisseur — avec le système instrumenté de sécurité préservé.",
        "Les vraies économies sont la liberté de licence, la concurrence fournisseur sur les instruments et les données débloquées. Le coût matériel est similaire ; c'est le coût de l'écosystème qui saigne les opérateurs.",
        "Les échecs de convergence OT/IT viennent du fait de mener la migration avec un seul ensemble de compétences. Les migrations réussies nécessitent des équipes couramment bilingues en ingénierie de sécurité et logiciel moderne.",
        "Migrez en quatre phases : couche données d'abord (aucun risque de contrôle), puis superviseur, puis contrôle non critique, puis contrôle primaire avec sécurité préservée.",
        "La fenêtre 2026-2028 est le bon moment. Les mandats Vision 2030 forceront la question d'ici la fin de la décennie — les opérateurs qui commencent tôt paient moins et dorment mieux.",
      ],
    },

    cta: {
      eyebrow: "Parlez à l'équipe qui a écrit ceci",
      title:   "Vous envisagez une migration d'automatisation industrielle ? Nous vous dirons quelles phases mener en premier — et quoi laisser tranquille jusqu'à la phase quatre.",
      button:  'Réserver un appel de 30 minutes',
    },

    backToHub: 'Retour à toutes les études',
  },

  // ──────────────────────────────────────────────────────────────────────
  ar: {
    kind:        'تقرير قطاعي',
    title:       'التحول الرقمي في النفط والغاز — من قيود المورّد إلى التحكم المستقل.',
    dek:         'لماذا يهاجر مشغّلو منطقة الشرق الأوسط وشمال أفريقيا من معماريات AMS و DCS المملوكة إلى أنظمة PLC مستقلة يملكونها فعلاً. دليل ميداني للرؤساء التنفيذيين للمعلومات ومديري التكنولوجيا التشغيلية الذين يقيّمون هجرة الأتمتة الصناعية.',
    publishedAt: 'أبريل 2026',
    readTime:    '20 دقيقة قراءة',
    pages:       '32 صفحة',
    author:      'أبحاث سيملوب',

    intro: [
      'ادخل إلى غرفة التحكم في أي مصفاة في منطقة الشرق الأوسط وشمال أفريقيا أو مصنع معالجة غاز أو منشأة إنتاج بُنيت بين 1995 و 2015 وستجد نفس الشيء: نظام تحكم موزّع من Emerson أو Honeywell أو ABB أو Siemens أو Yokogawa، ونظام إدارة أصول فوقه، وناقل اتصالات مملوك لا يفهمه فعلاً أحد في الفريق المحلي، وعقد دعم يُجدَّد كل ثلاث سنوات بتكلفة تقارب تكلفة نظام تحكم جديد متوسط الحجم.',
      'تكلفة التغيير عالية عمداً. المورّد يملك أدوات الهندسة، ومكتبات المشغّلات، ومديري أنواع الأجهزة، ومخططات قواعد بيانات التاريخ، وإمداد قطع الغيار. أي تعديل ليس على خارطة طريقه يُسعَّر كمشروع. أي تكامل ينافس منتجه الخاص يُغلَق بهدوء. هذه ليست مؤامرة — إنها نموذج عمل. عمل ببراعة للمورّدين وهو الآن ينهار تحت وطأة كل مبادرة تحول رقمي في المنطقة.',
      'هذا التقرير هو الرؤية الهندسية من فريق قام بهجرة معماريات الأتمتة الصناعية من بيئات DCS و AMS المقفلة على مورّد إلى أنظمة PLC مستقلة يتحكم بها المشغّل فعلاً. يشرح لماذا باتت الهجرة لا مفر منها، وكيف تبدو المعمارية المستقلة، وأين تختبئ الوفورات الحقيقية.',
    ],

    sections: [
      {
        heading: 'قيود المورّد التي تدير صناعة منطقة الشرق الأوسط وشمال أفريقيا',
        body: [
          'DCS المملوك هو الملك الصامت لأتمتة العمليات عبر المغرب العربي والخليج. أصول سوناطراك في المنبع والوسط، والمصافي الجزائرية، والمجمعات البتروكيماوية السعودية، ومصانع معالجة الغاز الإماراتية — الأغلبية الساحقة تعمل على أنظمة تحكم لا تتحدث فيها محطة الهندسة إلى الأجهزة إلا عبر مشغّلات موقّعة من المورّد، وقاعدة بيانات التاريخ مُقفَلة على مخطط المورّد، وإضافة عداد تدفق طرف ثالث بسيط إلى حلقة إدارة الأصول تكلّف في التراخيص أكثر من العداد نفسه.',
          'أنظمة إدارة الأصول هي المخالف الأسوأ. **AMS Device Manager و FieldCare و PRM — كلها صُمّمت في عصر بروتوكول HART لمركزة تكوين الأجهزة وتشخيصها، لكن المورّد سعّر المعمارية بحيث يكون أرخص مسار لإضافة أو استبدال أي أداة هو شراء المزيد من نفس المورّد. الكتيب يقول بروتوكولات مفتوحة. الممارسة تقول حد أدنى 60% من العتاد يحمل علامة المورّد في الحلقة وإلا ترفض أداة المعايرة التحميل.**',
          'لمشغّل يجلس على 15,000 أداة ميدانية و 400 حلقة تحكم وعشرين سنة متبقية من عمر الأصول، هذه مشكلة استراتيجية جدية. وهي أيضاً المشكلة التي يُطلب الآن من كل شركة نفط وطنية في منطقة الشرق الأوسط وشمال أفريقيا حلّها بحلول 2030 كجزء من تفويض التحول الرقمي الخاص بها.',
        ],
      },
      {
        heading: 'ماذا يعني التحكم المستقل فعلاً',
        body: [
          'البديل ليس اقتلاع DCS. البديل هو وضع طبقة القرار — PLCs، وطبقة الإشراف، وطبقة البيانات، وطبقة التحليلات — على معماريات مفتوحة يملكها المشغّل. يصبح DCS طبقة تنفيذ لمنطق الأمان والإغلاق المتشابك حيث لا يزال هذا منطقياً. كل شيء فوقه يصبح محايداً تجاه المورّد.',
          'بعبارات ملموسة: **PLCs من Siemens أو Schneider أو Rockwell أو Beckhoff أو Bachmann متصلة عبر OPC UA بدلاً من البروتوكولات المملوكة. طبقة تاريخ على InfluxDB أو TimescaleDB بدلاً من قاعدة بيانات مورّد مقفلة. SCADA على Ignition أو Zenon أو واجهة بشرية آلية مخصصة مبنية على React بدلاً من عميل ويندوز 2008 للمورّد. إدارة الأصول على أوصاف أجهزة معيار FDI بدلاً من مديري أنواع أجهزة حصريين.** كل شيء فوق نظام الأمان المُجهَّز بالأدوات يصبح قابلاً للاستبدال والترقية والاستقلال.',
          'يستطيع فريق الهندسة داخل المصنع الآن تعديل الحلقات دون مكالمة ترخيص إلى أوروبا. يستطيع مخزون قطع الغيار التزوُّد من ثلاثة مورّدين مختلفين بأسعار تنافسية. يستطيع المؤرّخ تغذية نموذج صيانة تنبؤية أو ضابط تكاليف أو تقرير تنظيمي دون مشروع تكامل بيانات بقيمة 200,000 دولار في كل مرة.',
        ],
        image: {
          src: '/insights/oil-gas-architecture.jpg',
          alt: 'رسم هندسي تحريري يقارن معمارية DCS مقفلة بمورّد في اليسار — عمود رأسي واحد، بروتوكولات مملوكة، مورّد واحد — بمعمارية PLC مستقلة على اليمين — عدة أعمدة متوازية، ناقل OPC UA مفتوح، متعدد المورّدين.',
          caption: 'يسار: كدسة DCS/AMS المملوكة التي تعمل في معظم منشآت العمليات في منطقة الشرق الأوسط وشمال أفريقيا اليوم. يمين: المعمارية المستقلة القائمة على PLC مع بروتوكولات مفتوحة. نظام الأمان المُجهَّز يبقى؛ كل شيء فوقه يصبح محايداً للمورّد.',
        },
      },
      {
        heading: 'الاقتصاد — من أين تأتي الوفورات فعلاً',
        body: [
          'أول مفهوم خاطئ حول هذه الهجرة هو أن الوفورات تأتي من عتاد أرخص. ليست كذلك. Siemens S7-1500 ليس أرخص بشكل ملموس من وحدة تحكم Emerson DeltaV. الوفورات تأتي من ثلاثة أماكن أخرى.',
          '**حرية الترخيص** — عدم الاضطرار لدفع 2,000 دولار لكل مقعد محطة هندسة سنوياً، عدم الاضطرار لدفع ترخيص لكل تاغ على المؤرّخ، عدم الاضطرار لدفع 1,800 دولار يومياً لمُكامل المورّد المعتمد لعمل يمكن لفريقك أن يقوم به بواجهة برمجية منشورة. عبر مصفاة متوسطة الحجم، حرية الترخيص وحدها تمثل 500,000 إلى 2 مليون دولار سنوياً حسب التركيب.',
          '**منافسة المورّد على الأدوات** — عندما تكون الحلقة بروتوكولاً مفتوحاً، يعمل عداد تدفق Yokogawa وناقل ضغط Endress+Hauser ومقياس مستوى Rosemount جميعاً بنفس الكفاءة في نفس بيئة التكوين. تنخفض الأسعار بنسبة 15 إلى 30% على بند الأدوات خلال دورة شراء خمس سنوات. لمشغّل يشتري 500 إلى 2,000 أداة سنوياً، هذا وحده يموّل الهجرة.',
          '**بيانات غير مقفلة** — هذه هي التي تهم فعلاً. بيانات العمليات الموجودة في مؤرّخ المورّد اليوم تساوي بين 1 و 5 دولارات لكل تاغ سنوياً عندما تكون حرة في تغذية الصيانة التنبؤية وتحسين المردود ومصالحة الطاقة والتقارير البيئية. لمنشأة بـ 50,000 تاغ، هذا 50,000 إلى 250,000 دولار سنوياً من القيمة المقفلة حالياً داخل مخطط مملوك لأن المورّد يريد بيع حزمته التحليلية الخاصة فوقه.',
        ],
      },
      {
        heading: 'مشكلة تقارب OT/IT التي لا يحلها أحد بنظافة',
        body: [
          'سبب فشل هذه الهجرات أكثر من نجاحها هو أنها تُدار من قِبَل أقسام IT لا تفهم أنظمة الأمان المُجهَّزة، أو من قِبَل أقسام OT لا تفهم المعماريات البرمجية الحديثة. الهجرات الناجحة تُدار من قِبَل فِرَق تعمل بطلاقة على كلا الجانبين.',
          '**متطلبات جانب OT التي تفوّتها فِرَق IT بانتظام** — أوقات استجابة حتمية أقل من 50 مللي ثانية للحلقات الحرجة، فصل مستوى تكامل الأمان المناسب (SIL 2 / SIL 3) بين طبقتي التحكم والأمان، تكرار احتياطي ساخن بتحوّل سلس، توفر المكوّنات لمدة 10 إلى 20 سنة، معالجة مناسبة لمعايير برمجة IEC 61131-3، وحقيقة أن ترقية برنامج ثابت سيئة يمكن أن توقف منشأة لثلاثة أيام وتكلّف الملايين.',
          '**متطلبات جانب IT التي تفوّتها فِرَق OT بانتظام** — تحكم المصدر لبرامج PLC (ليس فقط الملف الأخير على مفتاح USB في درج المهندس)، اختبار آلي لمنطق التحكم، تكوين-كوَد لطبقة SCADA، إدارة هوية مناسبة وتسجيل تدقيق على كل تغيير هندسي، تقسيم شبكة وفقاً لـ IEC 62443، والقدرة على نشر تغيير على خمسين سكيد مضخة متطابقة دون المشي إلى كل واحد بحاسوب محمول.',
          'فريق يفعل OT فقط سيسلّم معمارية آمنة وغير قابلة للصيانة. فريق يفعل IT فقط سيسلّم معمارية أنيقة وغير آمنة. الفريق الذي يفعل كليهما نادر — وهو بالضبط ما تحتاج شركات النفط الوطنية في منطقة الشرق الأوسط وشمال أفريقيا الآن أن تجده.',
        ],
      },
      {
        heading: 'دليل الهجرة — ما يعمل فعلاً',
        body: [
          'إذا كنت تدير مصفاة أو مصنع غاز أو منشأة كيميائية في الجزائر أو السعودية أو الإمارات أو أي مكان آخر في المنطقة وتريد الابتعاد عن قيود المورّد دون إعادة بناء المنشأة، فإن التسلسل الآن مفهوم جيداً.',
          '**المرحلة الأولى: أدوات طبقة البيانات، لا تمسّ طبقة التحكم.** ثبّت مؤرّخاً مفتوحاً (InfluxDB / TimescaleDB) بالتوازي مع مؤرّخ المورّد. غذّيه من DCS الحالي عبر بوابات OPC DA / OPC UA. استمر في تشغيل المنشأة تماماً كما كان. هذه المرحلة وحدها تفتح 80% من قيمة البيانات دون خطر واحد على الإنتاج. تدفع تكلفتها عادة خلال اثني عشر شهراً من حالات الاستخدام التحليلية التي تمكّنها.',
          '**المرحلة الثانية: هاجر طبقة الإشراف.** استبدل SCADA المورّد بمستقل (Ignition أو Zenon أو مخصص) يعمل بجانب الحالي. يستطيع المشغّلون تشغيل كليهما لفترة انتقالية. تنتقل ملكية هندسة واجهة الإنسان-الآلة من المورّد إلى المشغّل.',
          '**المرحلة الثالثة: هاجر حلقات التحكم غير الحرجة إلى PLCs مستقلة.** أنظمة المرافق، المضخات المساعدة، مناولة المواد، سكيدات القياس — أنظمة حيث الإيقاف المُتحكَّم به ليس حدثاً على مستوى المنشأة. هذه هي المرحلة التي يتعلم فيها الفريق الهندسة على الكدسة الجديدة في ظروف المنشأة الحقيقية.',
          '**المرحلة الرابعة: هاجر التحكم الأساسي، احفظ الأمان.** حلقات العمليات الأساسية تنتقل إلى وحدات تحكم PLC مستقلة. يبقى نظام الأمان المُجهَّز على منصة معتمدة SIL 3 — لكن يمكن أن تكون منصة تنافسية، غير مقفلة على مورّد DCS. تُعاد طبقة إدارة الأصول على معايير FDI وأوصاف الأجهزة المفتوحة.',
          'إذا تم بهذا الترتيب، تكون الهجرة برنامجاً من ثلاث إلى خمس سنوات بعائد استثمار قابل للقياس في كل مرحلة وصفر تحولات بطولية. إذا تم خارج الترتيب، يصبح اقتلاع-استبدال يهدد الإنتاج.',
        ],
      },
      {
        heading: 'لماذا منطقة الشرق الأوسط وشمال أفريقيا هي المكان المناسب الآن',
        body: [
          'ثلاثة أشياء تجعل 2026 اللحظة المناسبة. أولاً، أنهك المورّدون الكبار رافعة تسعيرهم — ارتفعت رسوم صيانة برامجهم أسرع من التضخم لعقد من الزمان وبدأ المشغّلون أخيراً في الدفع مقابل ذلك بمشاريع هجرة معتمدة في الميزانية. ثانياً، نضج دعم البروتوكولات المفتوحة من جانب الأداة إلى النقطة التي لم تعد فيها القابلية للتشغيل البيني عرضاً في المختبر؛ إنها حقيقة شراء. ثالثاً، تفويضات التحول الرقمي لمنطقة الشرق الأوسط وشمال أفريقيا — خطة الرقمنة الجزائرية، ورؤية السعودية 2030، وصناعة الإمارات الذكية، ورؤية قطر 2030 — كلها الآن تتطلب صراحةً معماريات محايدة للمورّد في مواصفاتها للبناء الجديد.',
          'المشغّلون الذين يبدؤون الهجرة الآن، بشكل متدرّج صحيح، سيكون لديهم معمارية مستقلة مستقرة بحلول 2030. المشغّلون الذين يتأخرون سيصطدمون بجدران امتثال رؤية 2030 ومنشأتهم لا تزال تعمل على DCS مملوك من عام 1998 — وفي تلك النقطة، تصبح الهجرة طارئة، ليست استراتيجية.',
          'هذه هي النافذة. تُغلَق حوالي 2028.',
        ],
      },
    ],

    takeaways: {
      title: 'ستة أشياء تأخذها من هذا التقرير',
      items: [
        'قيود المورّد على DCS و AMS هي نموذج عمل، ليست قيداً تقنياً. يجب معالجتها على مستوى المعمارية، لا مستوى الشراء.',
        'البديل المستقل هو تحكم قائم على PLC، وبروتوكولات OPC UA، ومؤرّخات مفتوحة، و SCADA محايد للمورّد — مع الحفاظ على نظام الأمان المُجهَّز.',
        'الوفورات الحقيقية هي حرية الترخيص، ومنافسة المورّد على الأدوات، والبيانات غير المقفلة. تكلفة العتاد متشابهة؛ تكلفة النظام البيئي هي حيث ينزف المشغّلون.',
        'إخفاقات تقارب OT/IT تأتي من إدارة الهجرة بمجموعة مهارات واحدة. تتطلب الهجرات الناجحة فِرَقاً تتحدث بطلاقة في هندسة الأمان والبرمجيات الحديثة.',
        'هاجر في أربع مراحل: طبقة البيانات أولاً (لا خطر تحكم)، ثم الإشراف، ثم التحكم غير الحرج، ثم التحكم الأساسي مع حفظ الأمان.',
        'نافذة 2026-2028 هي اللحظة المناسبة. ستفرض تفويضات رؤية 2030 القضية بنهاية العقد — المشغّلون الذين يبدؤون مبكراً يدفعون أقل وينامون أفضل.',
      ],
    },

    cta: {
      eyebrow: 'تحدث مع الفريق الذي كتب هذا',
      title:   'هل تفكر في هجرة أتمتة صناعية؟ سنخبرك بأي المراحل تقودها أولاً — وما الذي تتركه حتى المرحلة الرابعة.',
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

export default function InsightOilGasPage() {
  const { locale } = useRouter();
  const isRtl = locale === 'ar';
  const c = CONTENT[locale] || CONTENT.en;

  const articleLd = {
    '@context':      'https://schema.org',
    '@type':         'Article',
    headline:        c.title,
    description:     c.dek,
    image:           ['https://symloop.com/insights/cover-oil-gas.jpg'],
    datePublished:   '2026-04-17',
    dateModified:    '2026-04-17',
    author:          { '@type': 'Organization', name: 'Symloop Technology' },
    publisher:       {
      '@type': 'Organization',
      name:    'Symloop Technology',
      logo:    { '@type': 'ImageObject', url: 'https://symloop.com/sym-logo.png' },
    },
    mainEntityOfPage: 'https://symloop.com/insights/oil-gas/',
    about: [
      { '@type': 'Thing', name: 'Industrial automation migration' },
      { '@type': 'Thing', name: 'DCS to PLC migration' },
      { '@type': 'Thing', name: 'Oil and gas digital transformation' },
      { '@type': 'Thing', name: 'OT/IT convergence' },
    ],
    audience: { '@type': 'BusinessAudience', audienceType: 'CIO, OT Director, Plant Manager, Process Engineering Manager' },
  };

  const breadcrumbs = [
    { name: 'Home',     url: 'https://symloop.com/' },
    { name: 'Insights', url: 'https://symloop.com/insights/' },
    { name: c.title,    url: 'https://symloop.com/insights/oil-gas/' },
  ];

  return (
    <>
      <SEO
        title={`${c.title} — Symloop Insights`}
        description={c.dek}
        keywords="oil and gas IT transformation, DCS migration, DCS to PLC migration, industrial automation migration, SCADA modernization, asset management system migration, AMS migration oil gas, OPC UA migration, vendor lock-in DCS, open architecture PLC, OT IT convergence oil gas, process automation MENA, refinery digital transformation, Sonatrach digital transformation, Aramco digital transformation, ADNOC digital transformation, industrial control system modernization, SIL 3 safety instrumented system, PLC migration Algeria, industrial automation MENA, refinery automation consultancy, symloop insights"
        type="article"
        structuredData={articleLd}
        breadcrumbs={breadcrumbs}
        image="/insights/cover-oil-gas.jpg"
      />

      <main dir={isRtl ? 'rtl' : 'ltr'} className="bg-black text-white">

        {/* ── Hero ───────────────────────────────────────────────────── */}
        <section className="relative border-b border-white/[0.06]">
          <div className="max-w-5xl mx-auto px-6 lg:px-10 pt-32 lg:pt-40 pb-16">
            <motion.div initial="hidden" animate="show" variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <Link
                  href="/insights/"
                  className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors"
                >
                  {c.kind}
                </Link>
                <span className="h-px w-12 bg-white/20" />
                <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/35">
                  {c.publishedAt}
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-4xl lg:text-6xl xl:text-7xl font-light tracking-tight leading-[1.05]"
              >
                {c.title}
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-8 text-xl lg:text-2xl text-white/60 leading-relaxed font-light max-w-3xl"
              >
                {c.dek}
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-3 font-mono text-[11px] tracking-[0.15em] uppercase text-white/35 pt-8 border-t border-white/[0.08]"
              >
                <span>{c.author}</span>
                <span>{c.pages}</span>
                <span>{c.readTime}</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Cover image */}
          <div className="relative w-full aspect-[16/9] lg:aspect-[21/9] border-y border-white/[0.06] bg-white/[0.02] overflow-hidden">
            <Image
              src="/insights/cover-oil-gas.jpg"
              alt={c.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </section>

        {/* ── Body ───────────────────────────────────────────────────── */}
        <article className="max-w-3xl mx-auto px-6 lg:px-10 py-20 lg:py-28">

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
            className="space-y-6 mb-16"
          >
            {c.intro.map((p, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className="text-lg lg:text-xl text-white/75 leading-relaxed font-light"
              >
                {renderRichText(p)}
              </motion.p>
            ))}
          </motion.div>

          {c.sections.map((s, idx) => (
            <motion.section
              key={idx}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
              className="mb-16 lg:mb-20"
            >
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
                  <motion.p
                    key={i}
                    variants={fadeUp}
                    className="text-base lg:text-lg text-white/65 leading-relaxed"
                  >
                    {renderRichText(p)}
                  </motion.p>
                ))}
              </div>

              {s.image && (
                <motion.figure variants={fadeUp} className="mt-12">
                  <div className="relative w-full aspect-[16/9] border border-white/[0.08] bg-white/[0.02] overflow-hidden">
                    <Image
                      src={s.image.src}
                      alt={s.image.alt}
                      fill
                      sizes="(min-width: 1024px) 800px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-4 font-mono text-[11px] tracking-[0.1em] uppercase text-white/40 leading-relaxed">
                    {s.image.caption}
                  </figcaption>
                </motion.figure>
              )}
            </motion.section>
          ))}

          <motion.aside
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-50px' }}
            variants={stagger}
            className="mt-20 mb-16 border border-white/[0.08] bg-white/[0.015] p-8 lg:p-12"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
                {c.takeaways.title}
              </span>
              <span className="h-px flex-1 bg-white/10" />
            </motion.div>
            <ul className="space-y-5">
              {c.takeaways.items.map((t, i) => (
                <motion.li key={i} variants={fadeUp} className="flex items-start gap-5">
                  <span className="font-mono text-[11px] tracking-[0.15em] text-white/30 pt-1.5 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-base lg:text-lg text-white/75 leading-relaxed font-light">
                    {t}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.aside>
        </article>

        <section className="border-t border-white/[0.06]">
          <div className="max-w-5xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
              className="max-w-3xl"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
                  {c.cta.eyebrow}
                </span>
                <span className="h-px w-12 bg-white/20" />
              </motion.div>

              <motion.h2
                variants={fadeUp}
                className="text-3xl lg:text-5xl font-light tracking-tight leading-[1.1]"
              >
                {c.cta.title}
              </motion.h2>

              <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-x-12 gap-y-6">
                <Link
                  href="/contact/"
                  className="group inline-flex items-center gap-3 text-sm font-medium tracking-wide text-white border-b border-white/30 hover:border-white pb-2 transition-colors"
                >
                  <span>{c.cta.button}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
                </Link>

                <Link
                  href="/insights/"
                  className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.15em] uppercase text-white/40 hover:text-white transition-colors"
                >
                  {isRtl ? (
                    <ArrowRight className="w-3.5 h-3.5 rotate-180" strokeWidth={1.5} />
                  ) : (
                    <ArrowLeft className="w-3.5 h-3.5" strokeWidth={1.5} />
                  )}
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

// Converts **bold** markdown into inline highlighted spans
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
