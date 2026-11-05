// ============================================================================
// SYMLOOP — Country brief: Mauritania 2026.
//
// Atlantic-gateway + mining-boom positioning. Decision-makers: SNIM (iron
// ore), MCM/Tasiast (Kinross gold), Société Mauritanienne des Hydrocarbures,
// Mauritania Airlines, BSA/BMS banks, Sahara Hotel & Casino, Nouakchott
// real-estate developers, government modernization (Ministry of Equipment,
// Ministry of Digital Transformation). Verticals: BMS buildings,
// hotel PMS, smart home.
// ============================================================================

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import CountryInsightTemplate from '../../components/CountryInsightTemplate';
import { SectorStackChart } from '../../components/CountryCharts';

const CONTENT = {
  en: {
    kind:        'Country brief',
    titleSeo:    'Mauritania 2026 — AI Engineering Partner for Nouakchott + Mining',
    dekSeo:      'For SNIM, Kinross Tasiast, Mauritania Airlines, Sahara Hotel and the Nouakchott developers: how Symloop ships building management, hotel PMS and mining-grade ERP in 9 months with French-Arabic-Hassaniya context Senegalese and French vendors cannot match.',
    title:       'Mauritania 2026 — the AI engineering partner for Nouakchott modernization and the mining boom.',
    dek:         'A country brief for Mauritanian buyers — SNIM (iron ore), Kinross Tasiast (gold), Société Mauritanienne des Hydrocarbures (BirAllah offshore gas), Mauritania Airlines, the Nouakchott hotel and real-estate operators, and the ministries modernizing under the Vision 2030 digital track. Why an Algerian-engineered partner with native French + Arabic + Hassaniya context beats Senegalese, French and Gulf alternatives on cost, speed and operational fit.',
    chart: {
      label:      'Time-to-production · International vendor vs Symloop',
      before:     { label: 'FR / SN vendor', value: 30, unit: 'mo' },
      after:      { label: 'Symloop', value: 8, unit: 'mo' },
      deltaLabel: '4x faster · 50% lower cost · Hassaniya/Arabic/French native',
      note:       'Composite benchmark — software engagements delivered for Mauritanian, Algerian and West African clients. Source: Symloop production engagements 2024–2026.',
    },
    publishedAt: 'May 2026',
    readTime:    '16 min read',
    pages:       '26 pages',
    author:      'Symloop research',
    intro: [
      'Mauritania in 2026 is one of the most underserved high-growth software markets in West Africa. **Iron-ore exports through SNIM are running at record volumes. Kinross Tasiast is the largest gold mine in West Africa and is expanding production. The BirAllah offshore gas field with BP and Kosmos Energy goes into production in 2026–2027. Nouakchott is densifying rapidly — new commercial real estate, new residential developments, a growing upper-middle-class market for hotels, restaurants and smart-home services**. And yet there is no indigenous software industry at scale to serve this growth.',
      'The local market has three options today, all flawed. **French agencies** (Capgemini, Sopra Steria, plus the smaller Paris-based digital firms) priced for French clients with French overheads and limited persistent presence in Nouakchott. **Senegalese firms** with better cost structures but a Wolof-Senegalese cultural register that does not map cleanly onto Mauritanian Hassaniya-Arabic operational reality, and weak coverage of Arabic-language interfaces for government and traditional commerce buyers. **Or Gulf vendors** that fly in for major contracts and disappear afterward. **None of them are the right fit for a Mauritanian operator that wants software it owns, with on-the-ground engineering presence, in the actual languages its workforce speaks.**',
      '**Symloop\'s positioning is calibrated exactly for this market.** Algerian-engineered, French and Arabic native (with strong Hassaniya register fit), AI-first deep-tech firm, 25+ senior engineers, production track record across mining-adjacent, banking, hospitality and government work in MENA and North Africa. Algerian engineering is geographically closer to Nouakchott than Paris, culturally closer than Dakar, and structurally cheaper than European or Gulf alternatives — without sacrificing engineering depth. **Three verticals form the wedge: BMS building management for the Nouakchott densification, hotel PMS for the developing hospitality sector, and mining-grade ERP/MES for SNIM, MCM and the gas operators.**',
    ],
    sections: [
      {
        heading: 'The Mauritanian growth wedge — sized in dollars',
        body: [
          'Mauritania\'s mining sector alone implies tens of millions of dollars of software demand over 2026–2030. **SNIM (Société Nationale Industrielle et Minière) operates Africa\'s largest iron-ore mining and rail operation, with ongoing modernization needs for predictive maintenance on rolling stock, IoT-instrumented mining equipment, energy management at the Nouadhibou terminal, and integrated dashboards from mine to port to ship**. International mining-software vendors (SAP S/4 Mining, Hexagon Mining, Maptek) quote multi-year, multi-million-dollar projects with European pricing.',
          '**Kinross Tasiast (the largest gold mine in West Africa, owned by Kinross Gold Corporation since 2010) is in active expansion mode with a major capacity-doubling program through 2028.** The operational software needs are dense: predictive maintenance on heavy mining equipment, computer-vision quality control on the gold processing line, environmental and water-management monitoring, integrated reporting to the Ministry of Petroleum, Mines & Energy. A locally-rooted engineering partner that can deploy hardware on the Tasiast site in days (not weeks of flying engineers in from Toronto or Johannesburg) is structurally advantaged.',
          '**The BirAllah offshore gas field** — operated by BP and Kosmos Energy in partnership with the Société Mauritanienne des Hydrocarbures — implies an entire supply-chain of supporting software demand over 2026–2030: facility management for the onshore processing complex, environmental monitoring, compliance reporting, supplier and contract management for the dozens of subcontractors. This is exactly the kind of multi-stakeholder, regulatory-heavy environment where Symloop\'s government and oil-and-gas track record from Algeria translates directly.',
          'Then **Nouakchott** itself. The capital is densifying with new commercial real estate, a hotel pipeline (Sahara Hotel & Casino, the planned Marriott and Radisson expansions, the Nouakchott seafront resort developments), residential developments for the upper-middle class, and government modernization programs. **The aggregate building-management + hotel PMS + smart-home opportunity over 2026–2030 is in the range of $80-120M of software spend**, almost none of which is currently served by an engineering-grade local partner.',
        ],
      },
      {
        heading: 'Vertical 1 — BMS building management for Nouakchott densification',
        body: [
          '**Nouakchott\'s new commercial real estate and residential developments need the same building-management capabilities as any other African capital: energy management (Mauritanian electricity from SOMELEC is improving but unreliable enough that backup orchestration matters), water management (Nouakchott is in the Sahel — water consumption monitoring is operationally and environmentally critical), security and surveillance with computer vision, HVAC optimization for desert climate, and integrated dashboards for property managers.**',
          'The vendor reality: French BMS systems (Schneider EcoStruxure, deployed by Capgemini or local French integrators) cost €100-200K per building plus annual maintenance. Senegalese system integrators offer cheaper pricing but limited Arabic-language support and a Wolof cultural register that does not match the Mauritanian operator base. Gulf vendors are not present at scale.',
          '**Symloop\'s sovereign BMS platform** — same architecture deployed for Algerian and Libyan clients, with Hassaniya-Arabic + French + English UI, locally-manufactured ESP32-based IoT sensors (Symloop hardware facility in Algiers), and AI-driven energy + water + occupancy optimization — deploys at $25-50K per building. **For a Mauritanian developer deploying a 30-building residential pipeline, the savings versus the French alternative are $3-5M and the operating data stays sovereign.**',
        ],
      },
      {
        heading: 'Vertical 2 — Hotel PMS for Nouakchott and emerging tourism',
        body: [
          'Mauritanian tourism is small but real and growing. **The Sahara expeditions market (Atar, Adrar, the desert circuit), the Atlantic coast resorts at Nouadhibou and the Banc d\'Arguin park, the business-traveler hotel market in Nouakchott driven by mining and gas activity, and the diplomatic-traveler segment for the African Union and Arab League delegations** all need modern hotel software. Today most properties run on legacy Mauritanian-developed PMS systems or imported Sabre / Oracle Hospitality at European pricing.',
          '**Symloop\'s hotel PMS** ships the full stack — PMS, channel manager, booking engine, F&B, housekeeping, AI dynamic pricing — with French and Arabic UI, Hassaniya cultural-register fit for guest profiles, integration with the Mauritanian banks for guest payments (Banque Mauritanienne pour le Commerce International, Banque Nationale de Mauritanie, GBM), and sovereign deployment. **Cost: $800K-2M per property, depending on scale. Versus international vendor licensing, the payback is 12-18 months.**',
          'Symloop has already deployed hospitality software in adjacent African and MENA markets and has the engineering muscle to handle Sahara-specific operational reality: irregular OTA cancellation patterns from sandstorm-related travel disruption, cash-heavy guest payments from desert-tour operators, and intermittent connectivity at remote desert properties that requires offline-first PMS architecture.',
        ],
      },
      {
        heading: 'Vertical 3 — Mining and oil-and-gas adjacent software',
        body: [
          '**SNIM (iron ore mining, Africa\'s largest rail operation, the Nouadhibou export terminal) is the most strategically important software buyer in Mauritania.** Symloop\'s offering: predictive maintenance on heavy mining equipment using vibration, motor-current and temperature sensors; AI-driven optimization of the mine-to-port logistics chain; integrated environmental and safety reporting; ERP integration with French and Arabic interfaces. **A 24-month engagement at $4-8M would deliver multi-million-dollar annual operational savings** through downtime reduction and logistics optimization alone.',
          '**Kinross Tasiast (gold)** is a different buyer profile — a global mining major\'s subsidiary, with corporate IT decisions made in Toronto but operational software decisions made at the site. The wedge: Symloop\'s ability to deploy locally-presence engineers to the Tasiast site (a 24-hour drive from Nouakchott, or a charter flight), with hardware manufactured locally for the African climate, at engagement costs 50% below what Kinross\'s established global vendors quote. Computer-vision quality control on the gold processing line, environmental monitoring, water management, predictive maintenance.',
          '**The BirAllah offshore gas operator complex** is a multi-stakeholder buyer (BP, Kosmos Energy, Société Mauritanienne des Hydrocarbures, government). Symloop is positioned as the local-context delivery partner for the dozens of subcontracted software components — facility management, environmental compliance reporting, supplier portal, contract management — that the prime operators want delivered in-country with on-the-ground engineering support.',
        ],
      },
      {
        heading: 'Why an Algerian partner specifically — versus French, Senegalese, Gulf',
        body: [
          '**Versus French firms**: Symloop is 50-70% cheaper for equivalent engineering depth, has French-native engineering staff (a substantial fraction of Algerian senior engineers studied at École polytechnique d\'Alger or ÉNS Algiers with curricula very close to ÉNS Paris), and maintains persistent on-the-ground presence in Nouakchott during engagements rather than flying engineers in from Paris.',
          '**Versus Senegalese firms**: Symloop\'s Arabic-language native capability (essential for government interfaces and traditional commerce buyers), Hassaniya cultural register fit (closer to Algerian Maghrebi Arabic than to Senegalese Wolof or French), and AI-first deep-tech depth that Dakar-based firms have not yet built to scale. Symloop is also structurally larger (25+ senior engineers vs. the typical 5-15 of Senegalese boutiques) which matters for multi-year mining-grade engagements.',
          '**Versus Gulf vendors**: Symloop has persistent local presence, French-language fluency (essential for Mauritanian business and government interfaces), and a delivery model based on milestone-driven fixed-price contracts rather than time-and-materials at Dubai consulting day rates. Gulf vendors fly in for the contract pitch and the kickoff and then deliver from regional HQs.',
        ],
      },
      {
        heading: 'What a Mauritanian operator does next week',
        body: [
          '**First**, commission a 2-week scoping engagement on the specific vertical (mining-adjacent, hotel PMS, building management or smart home). $30-60K. Outcome: a defensible board paper with delivery plan, cost, comparison to French/Senegalese alternatives. No further commitment required.',
          '**Second**, structure the engagement as fixed-price milestone-driven. A mining-adjacent ERP engagement is typically 18-24 months and $4-8M. A hotel PMS rollout is 6 months and $0.8-2M per property. An BMS building deployment is 3-4 months per building at $25-50K. All sovereign deployment with source-code transfer to the Mauritanian client at end of engagement.',
          '**Third**, structure payments via the standard Mauritanian banking channels (BMCI, BNM, GBM) with USD/EUR invoicing — Symloop has shipped engagements with all three banks. For mining engagements with global parent corporations (Kinross Gold, BP), the payment flow goes through Toronto, Houston or London corporate treasury rather than Nouakchott. Symloop has handled this.',
        ],
      },
    ],
    takeaways: {
      title: 'Six things to take from this brief',
      items: [
        'Mauritania\'s mining + oil-and-gas + Nouakchott densification implies $150M+ of software demand over 2026–2030, almost none currently served by an engineering-grade local partner.',
        'French firms cost 50-70% more for equivalent depth. Senegalese firms lack Arabic + Hassaniya register fit. Gulf vendors lack persistent presence. Symloop wins on all three axes.',
        'SNIM (iron-ore) is the most strategically important software buyer — predictive maintenance, mine-to-port optimization, environmental reporting. 24-month, $4-8M engagement opportunity.',
        'Kinross Tasiast (gold) is a global mining major\'s subsidiary — local-engineering-presence is the structural wedge versus Kinross\'s established global vendors.',
        'Hotel PMS for Nouakchott and emerging Saharan tourism: $0.8-2M per property, 12-18 month payback, offline-first architecture for remote desert properties.',
        'BMS building management for Nouakchott densification: $25-50K per building, no recurring fees, Hassaniya-Arabic + French UI, ESP32 hardware manufactured in Algiers.',
      ],
    },
    faq: [
      { q: 'Why is an Algerian firm credible as a software partner in Mauritania specifically?',
        a: 'Three reasons. Cultural-linguistic match (Maghrebi Arabic register is much closer to Hassaniya-Mauritanian than Senegalese Wolof or French; French is a working second language for both Algerian and Mauritanian business classes). Geographic proximity (Algiers-Nouakchott is one flight or two-day drive — Algerian engineers maintain persistent local presence during engagements much more easily than Paris-based firms). Engineering depth at the right price point (25+ senior engineers, AI-first deep-tech, French and Arabic native, at 50-70% below French agency pricing).' },
      { q: 'How does Symloop work with global mining majors like Kinross Gold or BP?',
        a: 'Symloop is a local-context delivery partner. The primes (Kinross, BP, Kosmos) maintain corporate IT decisions in Toronto, Houston, London. Symloop delivers the in-country software components: facility management, environmental monitoring, contract and supplier portals, predictive maintenance on local equipment, compliance reporting in French and Arabic. We work under MSA + SOW structures common to global mining and oil-and-gas, with milestone-based fixed-price delivery and source-code transfer to the operator at end of engagement.' },
      { q: 'What does the SNIM engagement profile look like?',
        a: 'SNIM is a state-owned enterprise with Mauritanian government ultimate ownership. Engagements typically follow a public-procurement structure with a board-approved scoping document, a tendered RFP for the engineering partner, and milestone-based delivery against fixed scope and price. Symloop\'s prior public-sector engagements in Algeria (banking and ministry-level software) and the Algerian state-owned-enterprise engagement model translate directly. The scoping engagement at the start defines the procurement-track expectations.' },
      { q: 'Is Symloop\'s on-premise deployment really viable in Mauritanian data-center infrastructure?',
        a: 'For most workloads, yes — Mauritania has improved data-center infrastructure substantially in 2024-2026, with capable hosting in Nouakchott and partnerships with regional cloud operators. For workloads where on-premise local hosting is not yet viable, Symloop deploys on a sovereign Algerian or Tunisian data center under contractual data-protection terms. The choice depends on the specific compliance environment for the workload — mining-operational systems often need on-site, government systems often need in-country, hotel PMS often work fine on regional sovereign cloud.' },
      { q: 'How does Symloop handle Hassaniya-Arabic specifically?',
        a: 'Hassaniya is a Maghrebi-Arabic register closer to Algerian Darja than to Levantine or Gulf Arabic. Symloop\'s UI text and customer-facing copy are written in MSA (Modern Standard Arabic) which is universally understood. Where operational interfaces benefit from register adaptation (banking and hospitality customer-facing flows), Symloop produces a Hassaniya-adjusted variant. AI features (NLP, chatbots, document understanding) are trained on Maghrebi-Arabic corpora which generalize well to Hassaniya. This is a structural advantage over Senegalese and French firms.' },
    ],
    relatedServices: {
      heading: 'Capabilities applied here',
      items: [
        { name: 'Artificial Intelligence — predictive maintenance, vision QC, NLP Arabic + French',  href: '/services/ai/' },
        { name: 'IoT & Industrial Systems — ESP32 hardware, sensor networks, PLC integration',       href: '/services/iot/' },
        { name: 'Software Engineering — ERP, PMS, building management platform, sovereign deployment', href: '/services/software-engineering/' },
        { name: 'Technology Consulting — vendor-vs-build assessment, public-procurement support',     href: '/services/consulting/' },
      ],
    },
    relatedInsights: {
      heading: 'Read next',
      items: [
        { name: 'Libya 2026 — reconstruction-economy AI partner brief',                         href: '/insights/libya/' },
        { name: 'Mali 2026 — Bamako, Sahelian gold and diplomatic-hub infrastructure',          href: '/insights/mali/' },
        { name: 'Oil-and-gas transformation — vendor lock-in to independent control',           href: '/insights/oil-gas/' },
      ],
    },
    cta: {
      eyebrow: 'Talk to the team that ships into Mauritania',
      title:   'Considering an BMS building platform, hotel PMS, or mining-grade ERP in Mauritania? We scope in two weeks and ship in nine months.',
      button:  'Start the scoping conversation',
    },
    backToHub: 'Back to all insights',
  },

  fr: {
    kind:        'Étude pays',
    titleSeo:    'Mauritanie 2026 — Partenaire IA pour Nouakchott et le minier',
    dekSeo:      'Pour SNIM, Kinross Tasiast, Mauritania Airlines, Sahara Hotel et les promoteurs de Nouakchott : comment Symloop livre gestion bâtiments, PMS hôtels et ERP minier en 9 mois avec contexte français-arabe-hassaniya que les éditeurs sénégalais et français ne peuvent égaler.',
    title:       'Mauritanie 2026 — le partenaire ingénierie IA pour la modernisation de Nouakchott et le boom minier.',
    dek:         'Étude pays pour les acheteurs mauritaniens — SNIM (fer), Kinross Tasiast (or), Société Mauritanienne des Hydrocarbures (gaz offshore BirAllah), Mauritania Airlines, les opérateurs hôteliers et immobiliers de Nouakchott, et les ministères qui se modernisent sous le tracé Vision 2030 numérique. Pourquoi un partenaire d\'ingénierie algérienne avec un contexte natif français + arabe + hassaniya bat les alternatives sénégalaises, françaises et golfiques sur coût, vitesse et fit opérationnel.',
    chart: {
      label:      'Time-to-production · Éditeur international vs Symloop',
      before:     { label: 'Éditeur FR/SN', value: 30, unit: 'mois' },
      after:      { label: 'Symloop', value: 8, unit: 'mois' },
      deltaLabel: '4x plus rapide · 50% moins cher · Hassaniya/Arabe/Français natifs',
      note:       'Benchmark composite — engagements logiciels livrés pour clients mauritaniens, algériens et ouest-africains. Source : engagements Symloop 2024–2026.',
    },
    publishedAt: 'Mai 2026',
    readTime:    '16 min de lecture',
    pages:       '26 pages',
    author:      'Recherche Symloop',
    intro: [
      'La Mauritanie en 2026 est l\'un des marchés logiciels à forte croissance les plus mal servis d\'Afrique de l\'Ouest. **Les exports de minerai de fer via SNIM tournent à des volumes records. Kinross Tasiast est la plus grande mine d\'or d\'Afrique de l\'Ouest et étend sa production. Le champ de gaz offshore BirAllah avec BP et Kosmos Energy entre en production en 2026-2027. Nouakchott se densifie rapidement — nouvel immobilier commercial, nouveaux développements résidentiels, marché en croissance de la classe moyenne supérieure pour hôtels, restaurants et services smart home**. Et pourtant il n\'y a aucune industrie logicielle indigène à grande échelle pour servir cette croissance.',
      'Le marché local a trois options aujourd\'hui, toutes imparfaites. **Agences françaises** (Capgemini, Sopra Steria, plus les firmes digitales basées à Paris plus petites) tarifées pour clients français avec frais généraux français et présence persistante limitée à Nouakchott. **Firmes sénégalaises** avec meilleures structures de coûts mais un registre culturel wolof-sénégalais qui ne mappe pas proprement sur la réalité opérationnelle mauritanienne hassaniya-arabe, et une couverture faible des interfaces langue arabe pour les acheteurs gouvernement et commerce traditionnel. **Ou éditeurs du Golfe** qui s\'envolent pour les contrats majeurs et disparaissent ensuite. **Aucun d\'eux n\'est le bon fit pour un opérateur mauritanien qui veut un logiciel qu\'il possède, avec présence ingénierie sur le terrain, dans les langues réellement parlées par sa main-d\'œuvre.**',
      '**Le positionnement de Symloop est calibré exactement pour ce marché.** Ingénierie algérienne, français et arabe natifs (avec fort fit registre hassaniya), firme deep-tech IA-first, 25+ ingénieurs seniors, parcours en production dans le minier-adjacent, banque, hôtellerie et gouvernement au MENA et Afrique du Nord. L\'ingénierie algérienne est géographiquement plus proche de Nouakchott que Paris, culturellement plus proche que Dakar, et structurellement moins chère que les alternatives européennes ou golfiques — sans sacrifier la profondeur d\'ingénierie. **Trois verticaux forment le coin : BMS gestion bâtiment pour la densification de Nouakchott, PMS hôtels pour le secteur hôtelier en développement, et ERP/MES de qualité minière pour SNIM, MCM et les opérateurs gaz.**',
    ],
    sections: [
      {
        heading: 'Le coin de croissance mauritanienne — chiffré en dollars',
        body: [
          'Le secteur minier mauritanien à lui seul implique des dizaines de millions de dollars de demande logicielle sur 2026-2030. **SNIM (Société Nationale Industrielle et Minière) opère la plus grande opération minière et ferroviaire de fer en Afrique, avec des besoins de modernisation continus pour maintenance prédictive sur matériel roulant, équipement minier instrumenté IoT, gestion d\'énergie au terminal de Nouadhibou, et tableaux de bord intégrés de la mine au port au navire**. Les éditeurs internationaux de logiciels miniers (SAP S/4 Mining, Hexagon Mining, Maptek) citent des projets pluri-annuels, pluri-millions de dollars avec tarification européenne.',
          '**Kinross Tasiast (la plus grande mine d\'or en Afrique de l\'Ouest, détenue par Kinross Gold Corporation depuis 2010) est en mode d\'expansion active avec un programme majeur de doublement de capacité jusqu\'en 2028.** Les besoins logiciels opérationnels sont denses : maintenance prédictive sur équipement minier lourd, contrôle qualité vision computationnelle sur la ligne de traitement d\'or, monitoring environnemental et de gestion d\'eau, reporting intégré au Ministère du Pétrole, des Mines et de l\'Énergie. Un partenaire ingénierie enraciné localement qui peut déployer du hardware sur le site Tasiast en jours (pas en semaines d\'envol d\'ingénieurs de Toronto ou Johannesburg) est structurellement avantagé.',
          '**Le champ de gaz offshore BirAllah** — opéré par BP et Kosmos Energy en partenariat avec la Société Mauritanienne des Hydrocarbures — implique toute une chaîne d\'approvisionnement de demande logicielle support sur 2026-2030 : gestion d\'installations pour le complexe de traitement on-shore, monitoring environnemental, reporting conformité, gestion des dizaines de sous-traitants. C\'est exactement le type d\'environnement multi-parties prenantes, lourd en réglementation où le parcours gouvernement et pétrole et gaz de Symloop depuis l\'Algérie se traduit directement.',
          'Puis **Nouakchott** elle-même. La capitale se densifie avec un nouvel immobilier commercial, un pipeline hôtelier (Sahara Hotel & Casino, les expansions Marriott et Radisson planifiées, les développements de resort front de mer de Nouakchott), des développements résidentiels pour la classe moyenne supérieure, et des programmes de modernisation gouvernementale. **L\'opportunité agrégée gestion bâtiment + PMS hôtels + smart home sur 2026-2030 est de l\'ordre de 80-120M$ de dépense logicielle**, presque entièrement non servie aujourd\'hui par un partenaire local de qualité ingénierie.',
        ],
      },
      {
        heading: 'Vertical 1 — BMS gestion bâtiment pour la densification de Nouakchott',
        body: [
          '**Le nouvel immobilier commercial et les développements résidentiels de Nouakchott ont besoin des mêmes capacités de gestion de bâtiment que toute autre capitale africaine : gestion d\'énergie (l\'électricité mauritanienne de SOMELEC s\'améliore mais reste assez peu fiable pour que l\'orchestration de backup compte), gestion d\'eau (Nouakchott est au Sahel — le monitoring de consommation d\'eau est opérationnellement et environnementalement critique), sécurité et surveillance avec vision computationnelle, optimisation CVC pour climat désertique, et tableaux de bord intégrés pour gestionnaires de propriété.**',
          'La réalité éditeur : les systèmes BMS français (Schneider EcoStruxure, déployés par Capgemini ou intégrateurs locaux français) coûtent 100-200K€ par bâtiment plus maintenance annuelle. Les intégrateurs système sénégalais offrent une tarification moins chère mais un support langue arabe limité et un registre culturel wolof qui ne correspond pas à la base d\'opérateurs mauritaniens. Les éditeurs du Golfe ne sont pas présents à grande échelle.',
          '**La plateforme BMS souveraine de Symloop** — même architecture déployée pour clients algériens et libyens, avec UI hassaniya-arabe + français + anglais, capteurs IoT ESP32 fabriqués localement (usine hardware Symloop à Alger), et optimisation énergie + eau + occupation IA — se déploie à 25-50K$ par bâtiment. **Pour un promoteur mauritanien déployant un pipeline résidentiel de 30 bâtiments, les économies versus l\'alternative française sont de 3-5M$ et les données opérationnelles restent souveraines.**',
        ],
      },
      {
        heading: 'Vertical 2 — PMS hôtels pour Nouakchott et tourisme émergent',
        body: [
          'Le tourisme mauritanien est petit mais réel et en croissance. **Le marché des expéditions Sahara (Atar, Adrar, le circuit désert), les resorts côte atlantique à Nouadhibou et le parc Banc d\'Arguin, le marché hôtel voyageur d\'affaires à Nouakchott porté par l\'activité minière et gaz, et le segment voyageur diplomatique pour les délégations Union Africaine et Ligue Arabe** ont tous besoin de logiciel hôtelier moderne. Aujourd\'hui la plupart des propriétés tournent sur des systèmes PMS legacy développés en Mauritanie ou Sabre / Oracle Hospitality importés à tarification européenne.',
          '**Le PMS hôtelier de Symloop** livre la stack complète — PMS, channel manager, moteur de réservation, F&B, housekeeping, tarification dynamique IA — avec UI français et arabe, fit registre culturel hassaniya pour profils clients, intégration avec les banques mauritaniennes pour paiements clients (Banque Mauritanienne pour le Commerce International, Banque Nationale de Mauritanie, GBM), et déploiement souverain. **Coût : 800K-2M$ par propriété, selon échelle. Versus licence éditeur international, le payback est de 12-18 mois.**',
          'Symloop a déjà déployé du logiciel hôtelier dans les marchés africains et MENA adjacents et a le muscle ingénierie pour gérer la réalité opérationnelle spécifique Sahara : patterns d\'annulation OTA irréguliers dus aux perturbations de voyage liées aux tempêtes de sable, paiements clients lourds en cash des opérateurs de tours désert, et connectivité intermittente aux propriétés désert distantes qui exige une architecture PMS offline-first.',
        ],
      },
      {
        heading: 'Vertical 3 — Logiciel minier et pétrole-gaz adjacent',
        body: [
          '**SNIM (mine de fer, plus grande opération ferroviaire d\'Afrique, terminal d\'export de Nouadhibou) est l\'acheteur logiciel stratégiquement le plus important de Mauritanie.** L\'offre Symloop : maintenance prédictive sur équipement minier lourd utilisant capteurs vibration, courant moteur et température ; optimisation IA de la chaîne logistique mine-au-port ; reporting environnemental et sécurité intégré ; intégration ERP avec interfaces françaises et arabes. **Un engagement 24 mois à 4-8M$ livrerait des économies opérationnelles annuelles multi-millions de dollars** uniquement par la réduction des arrêts et l\'optimisation logistique.',
          '**Kinross Tasiast (or)** est un profil d\'acheteur différent — la filiale d\'une major minière globale, avec décisions IT corporate prises à Toronto mais décisions logicielles opérationnelles prises sur site. Le coin : la capacité de Symloop à déployer des ingénieurs à présence locale sur le site Tasiast (un trajet de 24 heures depuis Nouakchott, ou un vol charter), avec hardware fabriqué localement pour le climat africain, à des coûts d\'engagement 50% en dessous de ce que les éditeurs globaux établis de Kinross citent. Contrôle qualité vision sur ligne de traitement d\'or, monitoring environnemental, gestion d\'eau, maintenance prédictive.',
          '**Le complexe opérateur de gaz offshore BirAllah** est un acheteur multi-parties prenantes (BP, Kosmos Energy, Société Mauritanienne des Hydrocarbures, gouvernement). Symloop est positionné comme le partenaire de livraison contexte-local pour les dizaines de composants logiciels sous-traités — gestion d\'installations, reporting conformité environnementale, portail fournisseur, gestion contrats — que les opérateurs primes veulent livrés in-country avec support ingénierie sur le terrain.',
        ],
      },
      {
        heading: 'Pourquoi un partenaire algérien spécifiquement — versus français, sénégalais, golfique',
        body: [
          '**Versus firmes françaises** : Symloop est 50-70% moins cher pour une profondeur d\'ingénierie équivalente, a du personnel ingénierie français-natif (une fraction substantielle des ingénieurs seniors algériens a étudié à l\'École polytechnique d\'Alger ou ÉNS Alger avec des curricula très proches d\'ÉNS Paris), et maintient une présence persistante sur le terrain à Nouakchott pendant les engagements plutôt que d\'envoler les ingénieurs depuis Paris.',
          '**Versus firmes sénégalaises** : la capacité native langue arabe de Symloop (essentielle pour interfaces gouvernement et acheteurs commerce traditionnel), le fit registre culturel hassaniya (plus proche de l\'arabe maghrébin algérien que du wolof sénégalais ou du français), et la profondeur deep-tech IA-first que les firmes basées à Dakar n\'ont pas encore construit à l\'échelle. Symloop est aussi structurellement plus grand (25+ ingénieurs seniors vs. les 5-15 typiques des boutiques sénégalaises) ce qui compte pour les engagements pluri-annuels de qualité minière.',
          '**Versus éditeurs du Golfe** : Symloop a une présence locale persistante, une fluidité en langue française (essentielle pour les interfaces business et gouvernement mauritaniennes), et un modèle de livraison basé sur des contrats forfait pilotés par jalons plutôt que régie aux taux jour conseil Dubaï. Les éditeurs du Golfe s\'envolent pour le pitch contrat et le kickoff et livrent ensuite depuis les sièges régionaux.',
        ],
      },
      {
        heading: 'Ce qu\'un opérateur mauritanien fait la semaine prochaine',
        body: [
          '**Premièrement**, commander un cadrage de 2 semaines sur le vertical spécifique (minier-adjacent, PMS hôtelier, gestion bâtiment ou smart home). 30-60K$. Résultat : un board paper défendable avec plan de livraison, coût, comparaison aux alternatives françaises/sénégalaises. Aucun engagement supplémentaire requis.',
          '**Deuxièmement**, structurer l\'engagement comme forfait piloté par jalons. Un engagement ERP minier-adjacent est typiquement 18-24 mois et 4-8M$. Un déploiement PMS hôtelier est 6 mois et 0,8-2M$ par propriété. Un déploiement BMS bâtiment est 3-4 mois par bâtiment à 25-50K$. Tous déploiement souverain avec transfert de code source au client mauritanien en fin d\'engagement.',
          '**Troisièmement**, structurer les paiements via les canaux bancaires mauritaniens standard (BMCI, BNM, GBM) avec facturation USD/EUR — Symloop a livré des engagements avec les trois banques. Pour les engagements miniers avec corporations parentes globales (Kinross Gold, BP), le flux de paiement passe par la trésorerie corporate Toronto, Houston ou Londres plutôt que Nouakchott. Symloop a géré cela.',
        ],
      },
    ],
    takeaways: {
      title: 'Six points à retenir',
      items: [
        'La densification de Nouakchott + minier + pétrole-gaz mauritaniens implique 150M$+ de demande logicielle sur 2026-2030, presque entièrement non servie aujourd\'hui par un partenaire local de qualité ingénierie.',
        'Les firmes françaises coûtent 50-70% de plus pour profondeur équivalente. Les sénégalaises manquent du fit registre arabe + hassaniya. Les golfiques manquent de présence persistante. Symloop gagne sur les trois axes.',
        'SNIM (mine de fer) est l\'acheteur logiciel stratégiquement le plus important — maintenance prédictive, optimisation mine-au-port, reporting environnemental. Opportunité engagement 24 mois, 4-8M$.',
        'Kinross Tasiast (or) est une filiale d\'une major minière globale — la présence ingénierie locale est le coin structurel versus les éditeurs globaux établis de Kinross.',
        'PMS hôtels pour Nouakchott et tourisme saharien émergent : 0,8-2M$ par propriété, payback 12-18 mois, architecture offline-first pour propriétés désert distantes.',
        'BMS gestion bâtiment pour densification de Nouakchott : 25-50K$ par bâtiment, pas de frais récurrents, UI hassaniya-arabe + français, hardware ESP32 fabriqué à Alger.',
      ],
    },
    faq: [
      { q: 'Pourquoi une firme algérienne est-elle crédible comme partenaire logiciel en Mauritanie spécifiquement ?',
        a: 'Trois raisons. Match culturel-linguistique (le registre arabe maghrébin est beaucoup plus proche du hassaniya-mauritanien que du wolof sénégalais ou du français ; le français est une seconde langue de travail pour les classes business algériennes et mauritaniennes). Proximité géographique (Alger-Nouakchott est un vol ou un trajet de deux jours — les ingénieurs algériens maintiennent une présence locale persistante pendant les engagements beaucoup plus facilement que les firmes basées à Paris). Profondeur d\'ingénierie au bon point de prix (25+ ingénieurs seniors, deep-tech IA-first, français et arabe natifs, à 50-70% en dessous de la tarification d\'agence française).' },
      { q: 'Comment Symloop travaille-t-il avec les majors miniers globaux comme Kinross Gold ou BP ?',
        a: 'Symloop est un partenaire de livraison contexte-local. Les primes (Kinross, BP, Kosmos) maintiennent les décisions IT corporate à Toronto, Houston, Londres. Symloop livre les composants logiciels in-country : gestion d\'installations, monitoring environnemental, portails contrats et fournisseurs, maintenance prédictive sur équipement local, reporting conformité en français et arabe. Nous travaillons sous structures MSA + SOW communes au minier et pétrole-gaz global, avec livraison forfait pilotée par jalons et transfert de code source à l\'opérateur en fin d\'engagement.' },
      { q: 'À quoi ressemble le profil d\'engagement SNIM ?',
        a: 'SNIM est une entreprise publique sous propriété ultime du gouvernement mauritanien. Les engagements suivent typiquement une structure de marché public avec un document de cadrage approuvé en conseil, un appel d\'offres pour le partenaire ingénierie, et une livraison pilotée par jalons contre périmètre et prix fixes. Les engagements antérieurs secteur public de Symloop en Algérie (logiciels bancaires et niveau ministériel) et le modèle d\'engagement entreprise publique algérienne se traduit directement. L\'engagement de cadrage au début définit les attentes du parcours de procurement.' },
      { q: 'Le déploiement on-premise de Symloop est-il vraiment viable dans l\'infrastructure data center mauritanienne ?',
        a: 'Pour la plupart des workloads, oui — la Mauritanie a substantiellement amélioré son infrastructure data center en 2024-2026, avec hébergement capable à Nouakchott et partenariats avec opérateurs cloud régionaux. Pour les workloads où l\'hébergement local on-premise n\'est pas encore viable, Symloop déploie sur un data center souverain algérien ou tunisien sous termes contractuels de protection des données. Le choix dépend de l\'environnement de conformité spécifique au workload.' },
      { q: 'Comment Symloop gère-t-il le hassaniya-arabe spécifiquement ?',
        a: 'Le hassaniya est un registre arabe maghrébin plus proche du darja algérien que du levantin ou du golfique. Le texte UI et les copies client-facing de Symloop sont écrits en MSA (Modern Standard Arabic) qui est universellement compris. Où les interfaces opérationnelles bénéficient d\'une adaptation de registre (flux client-facing banque et hôtellerie), Symloop produit une variante ajustée hassaniya. Les fonctionnalités IA (NLP, chatbots, compréhension de document) sont entraînées sur des corpus arabe maghrébin qui généralisent bien au hassaniya. C\'est un avantage structurel versus firmes sénégalaises et françaises.' },
    ],
    relatedServices: {
      heading: 'Capacités appliquées ici',
      items: [
        { name: 'Intelligence Artificielle — maintenance prédictive, vision QC, NLP arabe + français',  href: '/services/ai/' },
        { name: 'IoT & Systèmes Industriels — hardware ESP32, capteurs, intégration PLC',             href: '/services/iot/' },
        { name: 'Ingénierie logicielle — ERP, PMS, plateforme gestion bâtiment, déploiement souverain', href: '/services/software-engineering/' },
        { name: 'Conseil technologique — évaluation éditeur-vs-build, support marché public',         href: '/services/consulting/' },
      ],
    },
    relatedInsights: {
      heading: 'À lire ensuite',
      items: [
        { name: 'Libye 2026 — partenaire IA pour économie de reconstruction',              href: '/insights/libya/' },
        { name: 'Mali 2026 — Bamako, or sahélien et infrastructure diplomatique',          href: '/insights/mali/' },
        { name: 'Transformation pétrole et gaz — du verrouillage au contrôle indépendant', href: '/insights/oil-gas/' },
      ],
    },
    cta: {
      eyebrow: 'Parlez à l\'équipe qui livre en Mauritanie',
      title:   'Vous envisagez une plateforme BMS, un PMS hôtelier ou un ERP minier en Mauritanie ? Nous cadrons en deux semaines et livrons en neuf mois.',
      button:  'Démarrer la conversation de cadrage',
    },
    backToHub: 'Retour à toutes les études',
  },

  ar: {
    kind:        'تقرير قطري',
    titleSeo:    'موريتانيا 2026 — شريك هندسة الذكاء الاصطناعي لنواكشوط والتعدين',
    dekSeo:      'لـ SNIM وKinross Tasiast وMauritania Airlines وSahara Hotel ومطوّري نواكشوط: كيف يشحن Symloop إدارة المباني وPMS الفنادق وERP التعدين في 9 أشهر بسياق فرنسي-عربي-حسانية.',
    title:       'موريتانيا 2026 — شريك هندسة الذكاء الاصطناعي لتحديث نواكشوط وطفرة التعدين.',
    dek:         'تقرير قطري للمشترين الموريتانيين — SNIM وKinross Tasiast والشركة الموريتانية للهيدروكربونات وMauritania Airlines ومشغّلي الفنادق والعقارات في نواكشوط والوزارات التي تتحدّث في إطار رؤية 2030. لماذا يفوز شريك هندسي جزائري بسياق فرنسي + عربي + حسانية أصلي على البدائل السنغالية والفرنسية والخليجية.',
    chart: {
      label:      'الوقت إلى الإنتاج · بائع دولي مقابل Symloop',
      before:     { label: 'بائع FR/SN', value: 30, unit: 'شهر' },
      after:      { label: 'Symloop', value: 8, unit: 'شهر' },
      deltaLabel: '4x أسرع · 50٪ أقل تكلفة · حسانية/عربي/فرنسي أصلي',
      note:       'مقياس مركب — مهام برمجيات تم تسليمها لعملاء موريتانيين وجزائريين وغرب أفريقيين.',
    },
    publishedAt: 'مايو 2026',
    readTime:    '16 دقيقة قراءة',
    pages:       '26 صفحة',
    author:      'أبحاث سيملوب',
    intro: [
      'موريتانيا في 2026 هي أحد أكثر أسواق البرمجيات سريعة النمو محرومة من الخدمة في غرب أفريقيا. **صادرات خام الحديد عبر SNIM تعمل بأحجام قياسية. Kinross Tasiast هي أكبر منجم ذهب في غرب أفريقيا. حقل غاز BirAllah البحري مع BP وKosmos Energy يدخل الإنتاج في 2026-2027. نواكشوط تتكثّف بسرعة.**',
      'السوق المحلي له ثلاثة خيارات اليوم، كلها معيبة. **وكالات فرنسية** مسعّرة لعملاء فرنسيين. **شركات سنغالية** بهياكل تكلفة أفضل لكن سياق ثقافي ولوفي-سنغالي لا يتماشى مع الواقع التشغيلي الموريتاني الحساني-العربي. **أو بائعون خليجيون** يطيرون للعقود الكبرى ويختفون بعدها.',
      '**موقع Symloop معاير لهذا السوق بالضبط.** هندسة جزائرية، فرنسي وعربي أصلي (مع تطابق قوي مع السجل الحساني)، شركة deep-tech AI-first، 25+ مهندساً أقدم. ثلاث قطاعات تشكّل الإسفين: BMS لإدارة المباني، PMS للفنادق، وERP/MES بجودة التعدين.',
    ],
    sections: [
      {
        heading: 'إسفين النمو الموريتاني — محسوباً بالدولار',
        body: [
          'القطاع التعديني الموريتاني وحده يعني عشرات الملايين من الدولارات من الطلب على البرمجيات في 2026-2030. **SNIM (الشركة الوطنية الصناعية والمعدنية) تشغّل أكبر عملية تعدين حديد وسكك حديدية في أفريقيا.**',
          '**Kinross Tasiast (أكبر منجم ذهب في غرب أفريقيا) في وضع توسع نشط مع برنامج رئيسي لمضاعفة السعة حتى 2028.** الاحتياجات البرمجية التشغيلية كثيفة: صيانة تنبؤية، مراقبة جودة بالرؤية الحاسوبية على خط معالجة الذهب.',
          '**حقل غاز BirAllah البحري** — يشغّله BP وKosmos Energy بالشراكة مع الشركة الموريتانية للهيدروكربونات.',
          'ثم **نواكشوط** نفسها. تتكثّف العاصمة. **الفرصة المجمّعة لإدارة المباني + PMS الفنادق + المنزل الذكي في 2026-2030 في نطاق 80-120 مليون دولار من الإنفاق البرمجي.**',
        ],
      },
      {
        heading: 'القطاع 1 — BMS لإدارة المباني لتكثيف نواكشوط',
        body: [
          '**العقارات التجارية الجديدة والتطويرات السكنية في نواكشوط تحتاج نفس قدرات إدارة المباني: إدارة طاقة وإدارة مياه وأمن ومراقبة بالرؤية الحاسوبية وتحسين تكييف لمناخ صحراوي.**',
          'الواقع البائع: أنظمة BMS الفرنسية تكلف 100-200 ألف يورو لكل مبنى. المتكاملون السنغاليون أرخص لكن دعم اللغة العربية محدود.',
          '**منصة BMS السيادية من Symloop** تنشر بـ 25-50 ألف دولار لكل مبنى. لمطوّر موريتاني ينشر خط أنابيب 30 مبنى، التوفيرات مقابل البديل الفرنسي 3-5 مليون دولار.',
        ],
      },
      {
        heading: 'القطاع 2 — PMS الفنادق لنواكشوط والسياحة الناشئة',
        body: [
          'السياحة الموريتانية صغيرة لكن حقيقية ومتنامية. **سوق رحلات الصحراء (آطار وأدرار)، منتجعات الساحل الأطلسي، سوق فندق المسافر التجاري في نواكشوط.**',
          '**PMS فندق Symloop** يشحن الحزمة الكاملة بـ 800 ألف-2 مليون دولار لكل عقار. استرداد في 12-18 شهراً.',
          'لدى Symloop العضلات الهندسية للتعامل مع الواقع التشغيلي الصحراوي: أنماط إلغاء OTA غير منتظمة، مدفوعات نقدية ثقيلة، اتصال متقطع.',
        ],
      },
      {
        heading: 'القطاع 3 — برمجيات التعدين والنفط والغاز المجاورة',
        body: [
          '**SNIM هي المشتري البرمجي الأكثر أهمية استراتيجياً في موريتانيا.** عرض Symloop: صيانة تنبؤية، تحسين سلسلة المنجم-إلى-الميناء، تقارير بيئية متكاملة. **مهمة 24 شهراً بـ 4-8 مليون دولار.**',
          '**Kinross Tasiast (ذهب)** هي شركة فرعية لشركة تعدين عالمية كبرى. الإسفين: قدرة Symloop على نشر مهندسين بحضور محلي على موقع Tasiast.',
          '**مجمع مشغّل غاز BirAllah البحري** مشترٍ متعدد الأطراف. Symloop موضوع كشريك تسليم سياق محلي.',
        ],
      },
      {
        heading: 'لماذا شريك جزائري تحديداً — مقابل فرنسي وسنغالي وخليجي',
        body: [
          '**مقابل الشركات الفرنسية**: Symloop أرخص 50-70٪ لعمق هندسي مكافئ، له طاقم هندسة أصلي بالفرنسية.',
          '**مقابل الشركات السنغالية**: قدرة Symloop الأصلية للغة العربية (ضرورية لواجهات الحكومة والتجارة التقليدية)، تطابق السجل الحساني.',
          '**مقابل البائعين الخليجيين**: Symloop له حضور محلي مستمر، طلاقة في اللغة الفرنسية.',
        ],
      },
      {
        heading: 'ماذا يفعل المشغّل الموريتاني الأسبوع القادم',
        body: [
          '**أولاً**، تكليف تحديد نطاق لأسبوعين. 30-60 ألف دولار.',
          '**ثانياً**، هيكلة المشاركة كقيمة ثابتة تقودها المعالم.',
          '**ثالثاً**، هيكلة المدفوعات عبر قنوات بنكية موريتانية قياسية (BMCI وBNM وGBM).',
        ],
      },
    ],
    takeaways: {
      title: 'ستة أشياء تأخذها من هذا التقرير',
      items: [
        'تكثيف نواكشوط + التعدين + النفط والغاز يعني 150+ مليون دولار من الطلب البرمجي في 2026-2030.',
        'الشركات الفرنسية تكلف 50-70٪ أكثر. السنغالية تفتقر إلى السجل العربي/الحساني. الخليجية تفتقر إلى الحضور.',
        'SNIM (خام الحديد) هي المشتري البرمجي الأكثر أهمية استراتيجياً — فرصة 24 شهراً، 4-8 مليون دولار.',
        'Kinross Tasiast (ذهب) شركة فرعية لشركة تعدين عالمية — الحضور الهندسي المحلي هو الإسفين الهيكلي.',
        'PMS فنادق لنواكشوط: 0.8-2 مليون دولار لكل عقار، استرداد 12-18 شهراً.',
        'BMS لتكثيف نواكشوط: 25-50 ألف دولار لكل مبنى، بدون رسوم متكررة.',
      ],
    },
    faq: [
      { q: 'لماذا شركة جزائرية موثوقة كشريك برمجيات في موريتانيا تحديداً؟',
        a: 'ثلاثة أسباب. التطابق الثقافي-اللغوي (السجل العربي المغاربي أقرب بكثير من الحساني-الموريتاني من الولوف السنغالي أو الفرنسي). القرب الجغرافي (الجزائر-نواكشوط رحلة واحدة أو رحلتي يوم). عمق هندسي بنقطة السعر الصحيحة (25+ مهندساً أقدم، deep-tech AI-first، بـ 50-70٪ تحت تسعير الوكالة الفرنسية).' },
      { q: 'كيف يعمل Symloop مع كبار شركات التعدين العالمية مثل Kinross Gold أو BP؟',
        a: 'Symloop هو شريك تسليم سياق محلي. تحافظ Kinross وBP وKosmos على قرارات IT الشركة في تورنتو وهيوستن ولندن. يسلّم Symloop المكوّنات البرمجية في البلاد: إدارة المرافق، مراقبة بيئية، بوابات عقود وموردين.' },
      { q: 'كيف يبدو ملف مشاركة SNIM؟',
        a: 'SNIM هي مؤسسة مملوكة للدولة بملكية نهائية من الحكومة الموريتانية. تتبع المشاركات عادة هيكل الشراء العام مع مستند تحديد نطاق معتمد من المجلس.' },
      { q: 'هل النشر في الموقع من Symloop قابل للتطبيق فعلاً في البنية التحتية لمراكز البيانات الموريتانية؟',
        a: 'لمعظم أعباء العمل، نعم — حسّنت موريتانيا بشكل كبير بنيتها التحتية لمراكز البيانات في 2024-2026.' },
      { q: 'كيف يتعامل Symloop مع اللهجة الحسانية-العربية تحديداً؟',
        a: 'الحسانية سجل عربي مغاربي أقرب إلى الدارجة الجزائرية. يتم كتابة نص واجهة المستخدم بالعربية الفصحى المعاصرة. حيث تستفيد الواجهات التشغيلية من تعديل السجل، ينتج Symloop متغيراً معدّلاً للحسانية.' },
    ],
    relatedServices: {
      heading: 'القدرات المطبقة هنا',
      items: [
        { name: 'الذكاء الاصطناعي — صيانة تنبؤية، رؤية QC، NLP عربي + فرنسي',  href: '/services/ai/' },
        { name: 'IoT والأنظمة الصناعية — هاردوير ESP32، شبكات مستشعرات',       href: '/services/iot/' },
        { name: 'هندسة البرمجيات — ERP وPMS ومنصة إدارة المباني',              href: '/services/software-engineering/' },
        { name: 'الاستشارات التقنية — تقييم بائع-مقابل-بناء، دعم الشراء العام', href: '/services/consulting/' },
      ],
    },
    relatedInsights: {
      heading: 'اقرأ بعد ذلك',
      items: [
        { name: 'ليبيا 2026 — شريك الذكاء الاصطناعي لاقتصاد إعادة الإعمار',             href: '/insights/libya/' },
        { name: 'مالي 2026 — باماكو، ذهب الساحل والبنية التحتية الدبلوماسية',         href: '/insights/mali/' },
        { name: 'تحوّل النفط والغاز — من قفل البائع إلى التحكم المستقل',                  href: '/insights/oil-gas/' },
      ],
    },
    cta: {
      eyebrow: 'تحدّث إلى الفريق الذي يشحن إلى موريتانيا',
      title:   'تفكر في منصة BMS أو PMS فندقي أو ERP تعدين في موريتانيا؟ نحدّد النطاق في أسبوعين ونشحن في تسعة أشهر.',
      button:  'ابدأ محادثة تحديد النطاق',
    },
    backToHub: 'العودة إلى جميع التقارير',
  },
};

const SCHEMA_ABOUT = [
  { '@type': 'Thing',        name: 'Mauritania software engineering' },
  { '@type': 'Thing',        name: 'Mining software Mauritania' },
  { '@type': 'Thing',        name: 'Hotel PMS Nouakchott' },
  { '@type': 'Thing',        name: 'Building management Mauritania' },
  { '@type': 'Place',        name: 'Nouakchott' },
  { '@type': 'Place',        name: 'Nouadhibou' },
  { '@type': 'Place',        name: 'Atar' },
  { '@type': 'Organization', name: 'SNIM', alternateName: 'Société Nationale Industrielle et Minière' },
  { '@type': 'Organization', name: 'Kinross Tasiast', alternateName: 'Mauritanian Copper Mines / Kinross Gold' },
  { '@type': 'Organization', name: 'Société Mauritanienne des Hydrocarbures' },
  { '@type': 'Organization', name: 'Mauritania Airlines' },
  { '@type': 'Organization', name: 'Banque Mauritanienne pour le Commerce International', alternateName: 'BMCI' },
  { '@type': 'Organization', name: 'Banque Nationale de Mauritanie', alternateName: 'BNM' },
  { '@type': 'Organization', name: 'GBM' },
  { '@type': 'Organization', name: 'SOMELEC', alternateName: 'Société Mauritanienne de l\'Électricité' },
];

const SCHEMA_MENTIONS = SCHEMA_ABOUT.filter(o => o['@type'] === 'Organization');

const SCHEMA_AUDIENCE = {
  '@type': 'BusinessAudience',
  audienceType: 'Mauritanian operators, SNIM executives, Kinross Tasiast site management, Société Mauritanienne des Hydrocarbures, Mauritania Airlines, Nouakchott hotel developers, Nouakchott real-estate developers, Ministry of Petroleum Mines & Energy, Ministry of Digital Transformation, BMCI / BNM / GBM bankers',
};

const KEYWORDS = "logiciel mauritanie, ingénierie logicielle mauritanie, AI Mauritania, software development Mauritania, hotel PMS Nouakchott, hotel software Nouadhibou, BMS Mauritanie, building management Mauritania, BMS Nouakchott, smart home Nouakchott, domotique Mauritanie, mining software Mauritania, SNIM software partner, Kinross Tasiast software, Société Mauritanienne Hydrocarbures, BMCI software, BNM Nouakchott, GBM technology, SOMELEC software, Mauritania Airlines software, Mauritanian government modernization, sovereign software Mauritania, AI Mauritania hospitality, AI Mauritania mining, Nouakchott smart home, Nouakchott real estate software, Mauritania hotel automation, Mauritania residential automation, Mauritania energy management, partenaire ingénierie Mauritanie, PMS hôtel Mauritanie, gestion bâtiment Mauritanie, maison intelligente Mauritanie, automatisation Mauritanie, Algérie ingénierie pour Mauritanie, hassaniya software, Symloop Mauritania, BirAllah software, B2B software Africa, African B2B AI partner, logiciel B2B Afrique francophone, Sahel software partner, West Africa enterprise software, francophone Africa AI consulting, Afrique de l'Ouest software, mining software West Africa, African mining AI partner, BCEAO software, BOAD software, UEMOA software vendor, AfDB software vendor, regional development bank software, pan-African mining software, Atlantic gateway software";

const CHART_DATA = {
  fr: {
    label: 'Pile sectorielle mauritanienne · opportunités logicielles 2026-2030',
    layers: [
      { label: 'Mine',         title: 'SNIM + Kinross Tasiast — mine de fer + or',                value: 50,  formattedValue: '$30-50M',   unit: 'sur 5 ans', sub: 'Maintenance prédictive, optimisation mine-au-port, monitoring environnemental, reporting Ministère.' },
      { label: 'Pétrole-gaz',  title: 'BirAllah — gaz offshore BP/Kosmos',                        value: 35,  formattedValue: '$25-35M',   unit: 'sur 5 ans', sub: 'Gestion installations, conformité environnementale, portail fournisseurs, gestion contrats.' },
      { label: 'Densification',title: 'Nouakchott — hôtels, bâtiments, smart home',               value: 100, formattedValue: '$80-120M',  unit: 'sur 5 ans', sub: 'PMS hôtelier (Sahara Hotel, Marriott plan), BMS Nouakchott, smart home classe moyenne supérieure.' },
    ],
    note: 'Estimation composite — opportunité logicielle mauritanienne agrégée sur le minier, le pétrole-gaz et la densification de Nouakchott. Source : missions Symloop + recherche secteur 2024-2026.',
  },
  en: {
    label: 'Mauritanian sector stack · software opportunity 2026-2030',
    layers: [
      { label: 'Mining',          title: 'SNIM + Kinross Tasiast — iron ore + gold',                value: 50,  formattedValue: '$30-50M',  unit: 'over 5 yrs', sub: 'Predictive maintenance, mine-to-port optimization, environmental monitoring, Ministry reporting.' },
      { label: 'Oil & gas',       title: 'BirAllah — BP/Kosmos offshore gas',                       value: 35,  formattedValue: '$25-35M',  unit: 'over 5 yrs', sub: 'Facility management, environmental compliance, supplier portal, contract management.' },
      { label: 'Capital growth',  title: 'Nouakchott — hotels, buildings, smart home',              value: 100, formattedValue: '$80-120M', unit: 'over 5 yrs', sub: 'Hotel PMS (Sahara Hotel, Marriott plan), Nouakchott BMS, upper-middle-class smart home.' },
    ],
    note: 'Composite estimate — Mauritanian software opportunity aggregated across mining, oil-and-gas and Nouakchott densification. Source: Symloop engagements + sector research 2024-2026.',
  },
  ar: {
    label: 'الكومة القطاعية الموريتانية · فرصة البرمجيات 2026-2030',
    layers: [
      { label: 'التعدين',  title: 'SNIM + Kinross Tasiast — الحديد + الذهب',                       value: 50,  formattedValue: '$30-50M',  unit: 'على 5 سنوات', sub: 'صيانة تنبؤية، تحسين المنجم إلى الميناء، مراقبة بيئية، تقارير الوزارة.' },
      { label: 'النفط والغاز',title: 'BirAllah — غاز بحري BP/Kosmos',                            value: 35,  formattedValue: '$25-35M',  unit: 'على 5 سنوات', sub: 'إدارة المرافق، الامتثال البيئي، بوابة الموردين، إدارة العقود.' },
      { label: 'تكثيف العاصمة', title: 'نواكشوط — فنادق ومباني ومنزل ذكي',                          value: 100, formattedValue: '$80-120M', unit: 'على 5 سنوات', sub: 'PMS فندقي، BMS نواكشوط، منزل ذكي للطبقة المتوسطة العليا.' },
    ],
    note: 'تقدير مركب — فرصة البرمجيات الموريتانية المجمعة عبر التعدين والنفط والغاز وتكثيف نواكشوط.',
  },
};

function MauritaniaChart() {
  const { locale } = useRouter();
  const d = CHART_DATA[locale] || CHART_DATA.en;
  return <SectorStackChart label={d.label} layers={d.layers} note={d.note} />;
}

export default function InsightMauritaniaPage() {
  return (
    <CountryInsightTemplate
      content={CONTENT}
      slug="mauritania"
      publishedDate="2026-05-25"
      coverImage="/insights/cover-mauritania.jpg"
      schemaAbout={SCHEMA_ABOUT}
      schemaMentions={SCHEMA_MENTIONS}
      schemaAudience={SCHEMA_AUDIENCE}
      keywords={KEYWORDS}
      customChart={<MauritaniaChart />}
    />
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'fr', ['common'])),
    },
  };
}
