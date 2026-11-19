import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/logiciel-de-gestion-de-production-gpao-algerie-2027-suivi-d-atelier-au-poste-arrets-machine-par-cause-trs-en-cours-ordres-de-fabrication.mjs';

const SLUG = 'logiciel-de-gestion-de-production-gpao-algerie-2027-suivi-d-atelier-au-poste-arrets-machine-par-cause-trs-en-cours-ordres-de-fabrication';
const FIGURES = ['ordre', 'poste', 'causes', 'couches', 'pertes', 'calendrier'];
const DATE = '2026-11-19';
const I = (x) => '⁦' + x + '⁩';

const L = {
  fabrication: '/blog/personne-ne-sait-ce-que-coute-un-produit-fini-fabrication-application-algerie-2027-nomenclature-ordre-de-fabrication-rendement-cout-d-atelier/',
  planif: '/blog/on-promet-des-delais-qu-on-ne-tient-pas-planification-de-production-application-algerie-2027-capacite-charge-goulot-date-promise-calculee/',
  agro: '/blog/logiciel-agroalimentaire-algerie-2027-tracabilite-des-lots-de-la-matiere-a-la-palette-rappel-rendement-controles-qualite-dlc-erp-production/',
  erp: '/blog/logiciel-erp-algerie-2027-une-seule-base-achats-stock-production-ventes-quand-il-en-faut-un-par-quels-modules-commencer-deploiement-par-vagues/',
  interventions: '/blog/le-technicien-est-reparti-sans-la-piece-interventions-terrain-application-algerie-2027-equipements-ordres-de-travail-repartition-preventif/',
  horsligne: '/blog/application-hors-ligne-synchronisation-algerie-2027-base-locale-file-d-attente-idempotence-conflits/',
  tableau: '/blog/tableau-de-bord-temps-reel-gerant-algerie-2027-evenements-agregats-fraicheur-une-definition-par-chiffre-alertes-whatsapp/',
  reappro: '/blog/en-rupture-tous-les-mois-et-trop-de-stock-le-reste-reapprovisionnement-application-algerie-2027-point-de-commande-delai-mesure-proposition/',
};

const CONTENT = {
  fr: {
    kind: 'Gestion de production · Algérie · 2027', title: "Logiciel de gestion de production en Algérie (2027) : huit heures de poste pour quatre heures de production utile, des arrêts que personne ne note, une production connue le lendemain ; suivi au poste, causes d'arrêt, TRS, en-cours, et ce qu'on met en place",
    dek: "« Je dirige une usine de quarante personnes, six machines, deux équipes. Les machines tournent toute la journée, et pourtant nous sortons moins que ce que les cadences annoncent. Quand je demande pourquoi, chacun a sa réponse : les pannes, la matière, les réglages. La production d'hier, je la connais ce matin, sur une feuille. Et quand un client appelle pour sa commande, il faut descendre à l'atelier pour savoir où elle en est. Existe-t-il un logiciel de gestion de production pour une usine comme la nôtre ? » Une usine ne manque pas de chiffres : elle manque de chiffres pris au moment où les choses arrivent. Planning, coûts, délais, tout repose sur ce qui se déclare au poste.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Logiciel de gestion de production', 'GPAO', "Suivi d'atelier au poste", 'Arrêts machine et TRS', 'Ordres de fabrication et en-cours', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Un logiciel de gestion de production, souvent appelé GPAO, tient cinq choses : **les données de base**, articles, nomenclatures, gammes, cadences ; **les ordres de fabrication** ; **le suivi au poste**, où se déclarent quantités, arrêts et rebuts au moment où ils arrivent ; **la matière et les en-cours** ; **le pilotage**. Le troisième décide de tout : sans déclaration prise sur place, le logiciel ne contient que ce qui était prévu. Avec elle, trois réponses : **combien d'heures utiles dans un poste**, **quelles causes d'arrêt coûtent le plus**, **où en est chaque commande**. Dans l'exemple de cette page, huit heures de poste donnent 4 h 22 de production utile.",
      "Cette page s'adresse à celles et ceux qui dirigent une usine ou un atelier de fabrication, plasturgie, emballage, métallerie, agroalimentaire, matériaux, textile, ou qui en conduisent la production, et à celles et ceux qui possèdent une unité en Algérie et la suivent depuis la France. Les définitions viennent de sources publiques : taux de rendement synthétique, six grandes pertes, temps d'arrêt, en-cours de production, principe de Pareto, planification des besoins en matières, goulot d'étranglement, changement rapide de série, andon. L'usine de quarante personnes, ses minutes et ses pièces sont un exemple construit ; les chiffres sont fictifs. La page ne traite ni de paie, ni de règles du travail, et ne cite aucun prix de matériel.",
    ],
    sections: [
      { heading: "La vie d'un ordre de fabrication", body: [
        "La figure suit un ordre en six temps.",
      ], visual: 'ordre', after: [
        "**Le lancement.** Un ordre de fabrication dit quoi produire, combien, pour quand, sur quel poste. Dans un atelier, il naît de la commande du client, pour montrer que le travail va commencer. **La matière.** Elle sort du stock pour cet ordre, avec son lot : c'est ce qui dira ce que la commande a consommé. **Le réglage.** Le changement de série se chronomètre comme le reste : c'est souvent une des premières causes d'arrêt, et la moins regardée. **La production.** C'est le temps accentué : à la fin de chaque heure ou de chaque palette, la quantité se déclare ; à chaque arrêt, une cause se choisit parmi sept ou huit.",
        "**Déclarer en dix secondes.** Une tablette au poste, de gros boutons, pas de clavier : quantité, arrêt, cause. Si la machine a un compteur, il est lu directement et il ne reste à saisir que la cause. Sans réseau dans l'atelier, le poste continue d'enregistrer, voir [l'application hors ligne](" + L.horsligne + "). **Le contrôle.** Bonnes pièces, rebuts, retouches : trois chiffres par ordre, pas un seul. **La clôture.** Temps passé, matière consommée, quantité bonne : l'ordre fermé donne son coût réel, celui que détaille [le coût d'un produit fini](" + L.fabrication + "). **Ce que cette page ne traite pas.** Le calcul des dates et de la charge est dans [la planification de production](" + L.planif + ") ; la traçabilité des lots alimentaires, dans [le logiciel agroalimentaire](" + L.agro + ").",
      ] },
      { heading: "Huit heures de poste, quatre heures vingt de production", body: [
        "La figure déroule un poste minute par minute, puis regroupe les mêmes minutes.",
      ], visual: 'poste', after: [
        "**Le taux de rendement synthétique.** Le TRS mesure à quel point un équipement est utilisé par rapport à son plein potentiel, pendant les périodes où il est prévu qu'il tourne. C'est le produit de trois facteurs. **La disponibilité** : la part du temps prévu où l'équipement est disponible pour fonctionner. Ici, 345 minutes de marche sur 450 prévues, pause déduite : 76,7 %. **La performance** : la vitesse réelle rapportée à la vitesse théorique maximale. 2 760 pièces sorties pour 3 450 possibles en 345 minutes : 80 %. **La qualité** : les bonnes pièces rapportées au total produit. 2 622 sur 2 760 : 95 %.",
        "**Le produit.** 76,7 % × 80 % × 95 % = 58,3 %. Autrement dit : 2 622 bonnes pièces là où 4 500 étaient possibles, ou 4 h 22 de production utile dans un poste de 8 h. **Aucun des trois n'alarme seul.** 77, 80 et 95 se lisent chacun comme « pas mal » ; c'est leur produit qui surprend. **Pas de chiffre idéal.** On lit souvent qu'un TRS de 85 % serait la référence mondiale ; la source même qui le rapporte prévient que cette cible est fausse dans bien des cas, par exemple quand toutes les pertes ne sont pas comptées. Le TRS utile est le vôtre, mois après mois, sur la même machine. **Ce qu'il n'est pas.** Une note donnée à l'équipe : dans l'exemple, 70 des 105 minutes d'arrêt, changement de série et attente de matière, se décident en amont du poste.",
      ] },
      { heading: "Les arrêts, cause par cause", body: [
        "La figure classe un mois d'arrêts par durée.",
      ], visual: 'causes', after: [
        "**Le temps d'arrêt.** Le terme s'applique couramment, en milieu industriel, aux défaillances des équipements de production ; il recouvre des arrêts non planifiés, comme une panne, et des arrêts planifiés, comme un entretien. Le relevé au poste note les deux, avec une cause. **Sept ou huit causes.** Une liste de trente causes ne sera pas utilisée ; sept ou huit, choisies avec l'atelier, et une case « autres » que l'on surveille : si elle grossit, il manque une cause. **Le classement.** Le principe de Pareto dit que, pour beaucoup de phénomènes, environ 80 % des conséquences viennent de 20 % des causes ; la source rappelle que ce rapport est une règle pratique, pas une loi. Dans l'exemple, trois causes sur sept font 74 % des 3 800 minutes.",
        "**Ce que le classement change.** Avant le relevé, on disait « les pannes » ; elles sont troisièmes, avec 19 %. Les deux premières, changement de série et attente de matière, se traitent ailleurs qu'à la maintenance. **Le changement de série.** Le changement rapide de série, connu sous le sigle SMED, est une méthode pour passer vite de la fabrication d'un produit à celle du suivant ; avant toute méthode, il faut l'avoir mesuré. **L'attente de matière.** Elle renvoie au stock et aux achats, voir [le réapprovisionnement](" + L.reappro + "). **Les pannes.** Chaque panne déclarée au poste peut ouvrir une demande d'intervention, suivie comme dans [les interventions de maintenance](" + L.interventions + "). **Alerter.** Un système andon avertit l'encadrement et la maintenance d'un problème de qualité ou de procédé : un arrêt qui dépasse dix minutes envoie un message, sans que personne ait à téléphoner.",
      ] },
      { heading: "Ce que tient un logiciel de gestion de production", body: [
        "La figure empile cinq couches ; la troisième alimente toutes les autres.",
      ], visual: 'couches', after: [
        "**Les données de base.** La nomenclature dit de quoi un produit est fait ; la gamme, par quels postes il passe et à quelle cadence. Sans cadence nominale par machine et par produit, il n'y a pas de performance à calculer. **Les besoins en matière.** La planification des besoins en matières, ou MRP, est un système de planification de la production, d'ordonnancement et de gestion des stocks ; la plupart sont logiciels. C'est le cœur historique de la GPAO : à partir des commandes et des nomenclatures, ce qu'il faut acheter et fabriquer, et pour quand. **Les en-cours.** On appelle ainsi les produits partiellement finis qui attendent leur achèvement. Trop d'en-cours entre deux postes signale un goulot.",
        "**Le goulot.** Un goulot d'étranglement est un processus dont la capacité limitée réduit celle de toute la chaîne. Une heure perdue sur le goulot est une heure perdue pour l'usine ; c'est donc là que le suivi commence. **Où est la commande ?** Chaque déclaration fait avancer l'ordre : lancé, en réglage, en production, 1 200 pièces sur 3 000, en contrôle. La réponse au client se lit à l'écran, sans descendre à l'atelier. **GPAO, MES, ERP.** La GPAO planifie et suit les ordres ; un système d'exécution de la fabrication, ou MES, suit et documente la transformation des matières en produits finis ; un [ERP](" + L.erp + ") réunit le tout avec les achats, les ventes et le stock. Pour une usine de taille moyenne, un seul logiciel fait souvent les trois ; ce qui compte est que le suivi au poste existe.",
      ] },
      { heading: "Six grandes pertes, deux par facteur", body: [
        "La figure range les pertes par facteur du TRS.",
      ], visual: 'pertes', after: [
        "**Disponibilité.** Les attentes et les pannes : la machine est arrêtée. Ce sont les pertes que l'on voit, donc celles dont on parle. **Performance.** Les micro-arrêts et la vitesse réduite : la machine tourne, mais sort moins que sa cadence. Dans l'exemple, 69 minutes sur le poste, sans qu'aucun arrêt ait été noté. Seule la comparaison entre les pièces sorties et la cadence nominale les fait apparaître. **Qualité.** Les rebuts et les retouches : des pièces produites pour rien, ou produites deux fois.",
        "**Par où commencer.** Par la perte la plus longue sur la machine goulot, et une seule à la fois. Un mois de relevé suffit pour la choisir ; il en faut davantage pour savoir si l'action a porté. **Par équipe, sans classement.** Le même poste lu par équipe montre des écarts ; ils viennent aussi souvent du produit lancé ou de la matière reçue que des personnes. On compare les causes, pas les équipes. **Le matin.** Dix minutes devant l'écran : le TRS de la veille par machine, les trois plus longs arrêts, ce qui est décidé. Les mêmes chiffres remontent à la direction dans [le tableau de bord](" + L.tableau + ").",
      ] },
      { heading: "Huit semaines, dans l'exemple", body: [
        "Huit semaines pour un atelier de quelques machines, dont une de relevé.",
      ], visual: 'calendrier', after: [
        "**Le relevé.** Une semaine dans l'atelier : vos machines, vos gammes, les feuilles de production que l'on remplit déjà, et les causes d'arrêt telles que l'atelier les nomme. **La machine goulot d'abord.** Le suivi commence sur une ou deux machines, celles qui limitent l'usine. **Les tablettes.** Une par machine, fixée au poste, avec l'ordre en cours à l'écran. **La revue du matin.** Le dernier jalon : le premier point quotidien tenu devant l'écran.",
        "**Ce qui reste après.** Un TRS par machine et par poste, des arrêts classés par cause, des ordres dont on connaît l'avancement, un coût réel par ordre. **Du marché ou sur mesure.** Des logiciels de GPAO et de suivi d'atelier existent, et certains sont très complets ; ils conviennent quand vos procédés entrent dans leur cadre et que vos équipes peuvent en absorber la complexité. Le sur-mesure se justifie quand il faut un suivi au poste très simple, relié à ce que vous avez déjà, ou quand le procédé a ses particularités. **Les durées** sont celles d'un exemple construit.",
      ], list: [
        "**Ce que la direction reçoit** : des ordres de fabrication suivis du lancement à la clôture ; les quantités, arrêts et rebuts déclarés au poste ; le TRS par machine, par poste et par produit ; les arrêts classés par cause ; l'avancement de chaque commande ; le coût réel par ordre.",
        "**Ce que l'usine ne fait plus** : connaître la production le lendemain sur une feuille, débattre des causes sans chiffres, descendre à l'atelier pour répondre à un client, découvrir un retard le jour de la livraison.",
        "**Ce qui est mesuré** : disponibilité, performance, qualité et TRS ; minutes d'arrêt par cause ; durée des changements de série ; en-cours entre postes ; ordres livrés à la date ; écart entre temps prévu et temps passé.",
        "**Ce que fait Symloop** : le relevé dans l'atelier, les données de base, les ordres de fabrication, les écrans de déclaration au poste, hors ligne compris, la lecture des compteurs quand c'est possible, les tableaux d'atelier, puis la première revue du matin avec vous.",
      ], faq: [
        { q: "Existe-t-il un logiciel de gestion de production pour une PME ?", a: "Oui. Il doit tenir les données de base, les ordres de fabrication, le suivi au poste, la matière et le pilotage. Le point à vérifier : les quantités et les arrêts sont-ils déclarés au poste, au moment où ils arrivent, ou ressaisis le lendemain ?" },
        { q: "Qu'est-ce qu'une GPAO ?", a: "La gestion de production assistée par ordinateur : le logiciel qui planifie ce qu'il faut fabriquer et acheter, lance les ordres de fabrication et suit leur avancement. Son cœur historique est le calcul des besoins en matière." },
        { q: "Comment suivre la production en temps réel ?", a: "Par une déclaration au poste, sur tablette : quantité produite, arrêt, cause. Si la machine a un compteur, il est lu directement. L'avancement de chaque ordre et la production de l'heure se lisent alors à l'écran." },
        { q: "Comment calculer le TRS ?", a: "Disponibilité multipliée par performance multipliée par qualité. Ou, plus simplement : bonnes pièces produites, divisées par les pièces possibles pendant le temps prévu, à la cadence nominale. Dans l'exemple, 2 622 sur 4 500, soit 58,3 %." },
        { q: "Quel est un bon TRS ?", a: "Il n'y a pas de chiffre valable pour tous : la cible de 85 % souvent citée est contestée par la source même qui la rapporte. Le bon repère est votre propre TRS, sur la même machine, d'un mois à l'autre." },
        { q: "Pourquoi mes machines produisent-elles moins que prévu ?", a: "Trois familles de causes : la machine est arrêtée, attentes, pannes, changements ; elle tourne en dessous de sa cadence, micro-arrêts, vitesse réduite ; ou elle produit des pièces à jeter ou à reprendre. Un mois de relevé au poste dit lesquelles pèsent le plus." },
        { q: "Comment réduire les arrêts machine ?", a: "En les notant d'abord, avec une cause, pendant un mois. Le classement par durée désigne deux ou trois causes ; dans l'exemple, les premières ne sont pas des pannes mais des changements de série et des attentes de matière." },
        { q: "Comment savoir où en est une commande dans l'atelier ?", a: "Chaque déclaration fait avancer l'ordre de fabrication : lancé, en réglage, en production avec la quantité faite, en contrôle, clôturé. La réponse au client se lit à l'écran." },
        { q: "Faut-il connecter les machines ?", a: "Pas pour commencer. Une déclaration manuelle bien faite suffit pour les quantités et les causes. Lire un compteur ou un signal de marche vient ensuite, là où cela évite une saisie ; cela dépend de chaque machine." },
        { q: "Combien de temps pour équiper un atelier ?", a: "Huit semaines dans l'exemple de cette page, pour quelques machines, en commençant par la machine goulot, jusqu'à une première revue du matin tenue devant l'écran." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "Aucun des trois chiffres n'alarme seul ; c'est leur produit qui surprend." },
      { after: 2, text: "Avant le relevé, on disait « les pannes ». Elles sont troisièmes." },
    ],
    cta: { eyebrow: "Dites-nous ce que vous fabriquez, sur combien de machines, et comment la production se note aujourd'hui : nous commençons par une semaine dans l'atelier", title: "Machines qui tournent et production en dessous des cadences, arrêts que personne ne note, production connue le lendemain, commande introuvable dans l'atelier, ou usine en Algérie que vous suivez depuis la France", body: "Symloop construit le suivi qui part du poste : ordres de fabrication, déclarations sur tablette, arrêts par cause, TRS, avancement des commandes. Décrivez-nous votre atelier, vos machines, et la question à laquelle vous ne savez pas répondre sans descendre voir." },
    related: { label: 'À lire aussi', items: [
      { href: L.fabrication, kind: '2027', name: 'Fabrication : ce que coûte un produit fini' },
      { href: L.planif, kind: '2027', name: 'Planification de production : capacité, date promise' },
      { href: L.agro, kind: '2027', name: 'Logiciel agroalimentaire : lots, rappel, bilan matière' },
      { href: L.erp, kind: '2027', name: 'Logiciel ERP : une seule base, par quels modules commencer' },
    ] },
  },
  en: {
    kind: 'Production management · Algeria · 2027', title: "Production management software in Algeria (2027): an eight-hour shift for four hours of useful production, stops nobody records, output known the next day; tracking at the station, causes of stops, OEE, work in process, and what we put in place",
    dek: "“I run a factory of forty people, six machines, two shifts. The machines run all day, and yet we put out less than the rated speeds say. When I ask why, everyone has an answer: breakdowns, material, set-ups. Yesterday's output I learn this morning, on a sheet. And when a customer calls about their order, someone has to go down to the shop floor to find out where it is. Is there production management software for a factory like ours?” A factory does not lack figures: it lacks figures taken at the moment things happen. Schedule, costs, lead times all rest on what is declared at the station.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Production management software', 'Shop-floor tracking', 'Machine stops and OEE', 'Production orders', 'Work in process', 'Algeria 2027'],
    intro: [
      "**Short answer.** Production management software holds five things: **the master data**, items, bills of materials, routings, rates; **the production orders**; **tracking at the station**, where quantities, stops and scrap are declared at the moment they happen; **material and work in process**; **steering**. The third decides everything: without a declaration taken on the spot, the software contains only what was planned. With it, three answers: **how many useful hours in a shift**, **which causes of stops cost the most**, **where each order stands**. In this page's example, an eight-hour shift gives 4 h 22 of useful production.",
      "This page is for those who run a factory or a manufacturing workshop, plastics, packaging, metalwork, food, materials, textiles, or who lead its production, and for those who own a unit in Algeria and follow it from France. The definitions come from public sources: overall equipment effectiveness, six big losses, downtime, work in process, Pareto principle, material requirements planning, bottleneck, quick changeover, andon. The factory of forty, its minutes and its pieces are a constructed example; the figures are fictitious. The page covers neither payroll nor labour rules, and quotes no hardware price.",
    ],
    sections: [
      { heading: "The life of a production order", body: [
        "The figure follows an order in six steps.",
      ], visual: 'ordre', after: [
        "**Release.** A production order says what to produce, how many, by when, at which station. In a workshop, it comes from the customer's order, to show that work is about to begin. **Material.** It leaves stock for that order, with its lot: that is what will say what the order consumed. **Set-up.** The changeover is timed like everything else: it is often one of the first causes of stops, and the least looked at. **Production.** It is the accented step: at the end of each hour or each pallet, the quantity is declared; at each stop, a cause is chosen from seven or eight.",
        "**Declaring in ten seconds.** A tablet at the station, big buttons, no keyboard: quantity, stop, cause. If the machine has a counter, it is read directly and only the cause remains to be entered. Without a network on the shop floor, the station keeps recording, see [the offline application](" + L.horsligne + "). **The check.** Good pieces, scrap, rework: three figures per order, not one. **Closing.** Time spent, material consumed, good quantity: the closed order gives its real cost, the one detailed in [the cost of a finished product](" + L.fabrication + "). **What this page does not cover.** Calculating dates and load is in [production planning](" + L.planif + "); traceability of food lots, in [the food manufacturing software page](" + L.agro + ").",
      ] },
      { heading: "An eight-hour shift, four hours twenty of production", body: [
        "The figure runs through a shift minute by minute, then regroups the same minutes.",
      ], visual: 'poste', after: [
        "**Overall equipment effectiveness.** OEE measures how well a piece of equipment is used compared with its full potential, during the periods when it is scheduled to run. It is the product of three factors. **Availability**: the share of scheduled time in which the equipment is available to operate. Here, 345 minutes running out of 450 scheduled, break deducted: 76.7%. **Performance**: actual speed as a share of the theoretical maximum speed. 2,760 pieces out for 3,450 possible in 345 minutes: 80%. **Quality**: good units as a share of total units produced. 2,622 out of 2,760: 95%.",
        "**The product.** 76.7% × 80% × 95% = 58.3%. In other words: 2,622 good pieces where 4,500 were possible, or 4 h 22 of useful production in an 8 h shift. **None of the three alarms on its own.** 77, 80 and 95 each read as “not bad”; it is their product that surprises. **No ideal figure.** You often read that an OEE of 85% is the world-class reference; the very source that reports it warns that this target is wrong in many cases, for example when not all losses are counted. The useful OEE is your own, month after month, on the same machine. **What it is not.** A mark given to the team: in the example, 70 of the 105 minutes of stops, changeover and waiting for material, are decided upstream of the station.",
      ] },
      { heading: "The stops, cause by cause", body: [
        "The figure sorts one month of stops by duration.",
      ], visual: 'causes', after: [
        "**Downtime.** In industry the term is commonly applied to failures of production equipment; it covers unplanned stops, such as a breakdown, and planned ones, such as maintenance. The record at the station notes both, with a cause. **Seven or eight causes.** A list of thirty causes will not be used; seven or eight, chosen with the workshop, and an “other” box that is watched: if it grows, a cause is missing. **The ranking.** The Pareto principle says that, for many outcomes, roughly 80% of consequences come from 20% of causes; the source adds that this ratio is a rule of thumb, not a law. In the example, three causes out of seven make 74% of the 3,800 minutes.",
        "**What the ranking changes.** Before the record, people said “breakdowns”; they are third, at 19%. The first two, changeover and waiting for material, are dealt with elsewhere than in maintenance. **The changeover.** Quick changeover, known by the acronym SMED, is a method for moving fast from making one product to making the next; before any method, it has to have been measured. **Waiting for material.** It points to stock and purchasing, see [replenishment](" + L.reappro + "). **Breakdowns.** Each breakdown declared at the station can open a work request, followed as in [maintenance interventions](" + L.interventions + "). **Alerting.** An andon system notifies supervisors and maintenance of a quality or process problem: a stop that exceeds ten minutes sends a message, without anyone having to phone.",
      ] },
      { heading: "What production management software holds", body: [
        "The figure stacks five layers; the third feeds all the others.",
      ], visual: 'couches', after: [
        "**The master data.** The bill of materials says what a product is made of; the routing, which stations it goes through and at what rate. Without a nominal rate per machine and per product, there is no performance to calculate. **Material requirements.** Material requirements planning, or MRP, is a production planning, scheduling and inventory control system; most are software-based. It is the historic core of production management software: from orders and bills of materials, what must be bought and made, and by when. **Work in process.** That is the name for partially finished goods waiting for completion. Too much of it between two stations points to a bottleneck.",
        "**The bottleneck.** A bottleneck is a process whose limited capacity reduces the capacity of the whole chain. An hour lost on the bottleneck is an hour lost for the factory; so that is where tracking starts. **Where is the order?** Each declaration moves the order forward: released, in set-up, in production, 1,200 pieces out of 3,000, in check. The answer to the customer is read on screen, without going down to the shop floor. **The acronyms.** Production management software plans and follows the orders; a manufacturing execution system, or MES, tracks and documents the transformation of materials into finished goods; an [ERP](" + L.erp + ") brings it all together with purchasing, sales and stock. For a mid-sized factory, one piece of software often does all three; what matters is that tracking at the station exists.",
      ] },
      { heading: "Six big losses, two per factor", body: [
        "The figure sorts the losses by OEE factor.",
      ], visual: 'pertes', after: [
        "**Availability.** Waiting and breakdowns: the machine is stopped. These are the losses people see, hence the ones they talk about. **Performance.** Minor stops and reduced speed: the machine runs, but puts out less than its rate. In the example, 69 minutes over the shift, without a single stop having been noted. Only the comparison between pieces out and the nominal rate makes them appear. **Quality.** Scrap and rework: pieces made for nothing, or made twice.",
        "**Where to start.** With the longest loss on the bottleneck machine, and one at a time. One month of records is enough to choose it; more is needed to know whether the action worked. **By shift, without ranking.** The same station read by shift shows gaps; they come as often from the product released or the material received as from the people. Causes are compared, not shifts. **In the morning.** Ten minutes in front of the screen: yesterday's OEE per machine, the three longest stops, what is decided. The same figures go up to management in [the dashboard](" + L.tableau + ").",
      ] },
      { heading: "Eight weeks, in the example", body: [
        "Eight weeks for a workshop of a few machines, one of them a survey.",
      ], visual: 'calendrier', after: [
        "**The survey.** One week on the shop floor: your machines, your routings, the production sheets already being filled in, and the causes of stops as the workshop names them. **The bottleneck machine first.** Tracking starts on one or two machines, those that limit the factory. **The tablets.** One per machine, fixed at the station, with the current order on screen. **The morning review.** The last milestone: the first daily meeting held in front of the screen.",
        "**What remains afterwards.** An OEE per machine and per shift, stops sorted by cause, orders whose progress is known, a real cost per order. **Off the shelf or custom.** Production management and shop-floor tracking software exists, and some of it is very complete; it fits when your processes fall within its frame and your teams can absorb its complexity. Custom work is justified when tracking at the station must be very simple, tied to what you already have, or when the process has its particularities. **The durations** are those of a constructed example.",
      ], list: [
        "**What management receives**: production orders followed from release to closing; quantities, stops and scrap declared at the station; OEE per machine, per shift and per product; stops sorted by cause; the progress of each order; the real cost per order.",
        "**What the factory no longer does**: learn yesterday's output the next day on a sheet, argue about causes without figures, go down to the shop floor to answer a customer, discover a delay on delivery day.",
        "**What is measured**: availability, performance, quality and OEE; minutes stopped per cause; duration of changeovers; work in process between stations; orders delivered on the date; gap between planned and actual time.",
        "**What Symloop does**: the survey on the shop floor, the master data, the production orders, the declaration screens at the station, offline included, reading counters where possible, the shop-floor boards, then the first morning review with you.",
      ], faq: [
        { q: "Is there production management software for a small or mid-sized factory?", a: "Yes. It must hold master data, production orders, tracking at the station, material and steering. The point to check: are quantities and stops declared at the station, when they happen, or re-entered the next day?" },
        { q: "What is production management software?", a: "The software that plans what must be made and bought, releases the production orders and follows their progress. Its historic core is the calculation of material requirements." },
        { q: "How do you follow production in real time?", a: "With a declaration at the station, on a tablet: quantity produced, stop, cause. If the machine has a counter, it is read directly. The progress of each order and the hour's output can then be read on screen." },
        { q: "How do you calculate OEE?", a: "Availability times performance times quality. Or, more simply: good pieces produced, divided by the pieces possible during the scheduled time at the nominal rate. In the example, 2,622 out of 4,500, that is 58.3%." },
        { q: "What is a good OEE?", a: "There is no figure that holds for everyone: the 85% target often quoted is disputed by the very source that reports it. The right reference is your own OEE, on the same machine, from one month to the next." },
        { q: "Why do my machines produce less than planned?", a: "Three families of causes: the machine is stopped, waiting, breakdowns, changeovers; it runs below its rate, minor stops, reduced speed; or it makes pieces to throw away or redo. One month of records at the station says which weigh most." },
        { q: "How do you reduce machine stops?", a: "By recording them first, with a cause, for a month. Sorting by duration points to two or three causes; in the example, the first ones are not breakdowns but changeovers and waiting for material." },
        { q: "How do you know where an order is on the shop floor?", a: "Each declaration moves the production order forward: released, in set-up, in production with the quantity done, in check, closed. The answer to the customer is read on screen." },
        { q: "Do the machines have to be connected?", a: "Not to begin with. A well-made manual declaration is enough for quantities and causes. Reading a counter or a running signal comes next, where it saves an entry; it depends on each machine." },
        { q: "How long does it take to equip a workshop?", a: "Eight weeks in this page's example, for a few machines, starting with the bottleneck machine, up to a first morning review held in front of the screen." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "None of the three figures alarms on its own; it is their product that surprises." },
      { after: 2, text: "Before the record, people said “breakdowns”. They are third." },
    ],
    cta: { eyebrow: "Tell us what you make, on how many machines, and how output is recorded today: we start with a week on the shop floor", title: "Machines running and output below the rated speeds, stops nobody records, output known the next day, an order that cannot be found on the shop floor, or a factory in Algeria that you follow from France", body: "Symloop builds the tracking that starts at the station: production orders, declarations on a tablet, stops by cause, OEE, progress of orders. Describe your workshop to us, your machines, and the question you cannot answer without going down to look." },
    related: { label: 'Also read', items: [
      { href: L.fabrication, kind: '2027', name: 'Manufacturing: what a finished product costs' },
      { href: L.planif, kind: '2027', name: 'Production planning: capacity, promised date' },
      { href: L.agro, kind: '2027', name: 'Food manufacturing software: lots, recall, mass balance' },
      { href: L.erp, kind: '2027', name: 'ERP software: one database, which modules first' },
    ] },
  },
  ar: {
    kind: 'تسيير الإنتاج · الجزائر · 2027', title: "برنامج تسيير الإنتاج في الجزائر (2027): مناوبة من ثماني ساعات لأربع ساعات إنتاج نافع، توقفات لا يسجّلها أحد، وإنتاج يُعرف في الغد؛ المتابعة في المركز، أسباب التوقف، المردود الإجمالي، قيد الصنع، وما نضعه",
    dek: "«أسيّر مصنعاً من أربعين شخصاً، ست آلات، وفرقتين. الآلات تدور طوال اليوم، ومع ذلك نُخرج أقل مما تعلنه الوتائر. وحين أسأل لماذا، لكل واحد جوابه: الأعطال، المادة، الضبط. إنتاج الأمس أعرفه هذا الصباح، على ورقة. وحين يتصل زبون عن طلبيته، يجب النزول إلى الورشة لمعرفة أين وصلت. هل يوجد برنامج لتسيير الإنتاج لمصنع مثلنا؟» المصنع لا تنقصه الأرقام: تنقصه أرقام تؤخذ لحظة وقوع الأشياء. التخطيط، التكاليف، والآجال، كلها تقوم على ما يُصرَّح به في المركز.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['برنامج تسيير الإنتاج', 'متابعة الورشة في المركز', 'توقفات الآلات والمردود الإجمالي', 'أوامر التصنيع', 'قيد الصنع', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** برنامج تسيير الإنتاج يمسك خمسة أشياء: **المعطيات الأساسية**، السلع وقوائم المكوّنات والمسارات والوتائر؛ **أوامر التصنيع**؛ **المتابعة في المركز**، حيث يُصرَّح بالكميات والتوقفات والمرفوضات لحظة وقوعها؛ **المادة وقيد الصنع**؛ و**القيادة**. والثالث يحسم كل شيء: دون تصريح يؤخذ في عين المكان، لا يحتوي البرنامج إلا على ما كان مقرَّراً. ومعه، ثلاثة أجوبة: **كم ساعة نافعة في المناوبة**، **أي أسباب التوقف تكلّف أكثر**، و**أين وصلت كل طلبية**. في مثال هذه الصفحة، مناوبة من ثماني ساعات تعطي 4 ساعات و22 دقيقة من الإنتاج النافع.",
      "هذه الصفحة موجّهة إلى من يسيّر مصنعاً أو ورشة تصنيع، بلاستيك، تغليف، حدادة، صناعة غذائية، مواد، أو نسيج، أو يقود إنتاجها، وإلى من يملك وحدة في الجزائر ويتابعها من فرنسا. التعريفات من مصادر عمومية: المردود الإجمالي للتجهيزات، الضياعات الستة الكبرى، وقت التوقف، قيد الصنع، مبدأ باريتو، تخطيط الحاجات من المواد، عنق الزجاجة، التغيير السريع للسلسلة، ونظام الإشعار في الورشة. والمصنع ذو الأربعين شخصاً ودقائقه وقطعه مثال مركَّب؛ والأرقام خيالية. والصفحة لا تتناول الأجور ولا قواعد العمل، ولا تذكر أي سعر عتاد.",
    ],
    sections: [
      { heading: "حياة أمر تصنيع", body: [
        "الشكل يتابع أمراً في ست مراحل.",
      ], visual: 'ordre', after: [
        "**الإطلاق.** أمر التصنيع يقول ماذا يُنتَج، كم، متى، وفي أي مركز. وفي الورشة، يولد من طلبية الزبون، ليبيّن أن العمل سيبدأ. **المادة.** تخرج من المخزون لهذا الأمر، مع حصتها: وهذا ما سيقول ما استهلكته الطلبية. **الضبط.** تغيير السلسلة يُحسب وقته كالباقي: وهو غالباً من أول أسباب التوقف، وأقلها نظراً إليه. **الإنتاج.** هو المرحلة المبرزة: في آخر كل ساعة أو كل منصّة، يُصرَّح بالكمية؛ وعند كل توقف، يُختار سبب من سبعة أو ثمانية.",
        "**التصريح في عشر ثوانٍ.** لوحة في المركز، أزرار كبيرة، ودون لوحة مفاتيح: كمية، توقف، وسبب. وإذا كان للآلة عدّاد، قُرئ مباشرة ولم يبقَ للإدخال إلا السبب. ودون شبكة في الورشة، يواصل المركز التسجيل، انظر [التطبيق دون اتصال](" + L.horsligne + "). **المراقبة.** قطع جيدة، مرفوضات، وإعادة تشغيل: ثلاثة أرقام لكل أمر، لا واحد. **الإغلاق.** الوقت المقضي، المادة المستهلكة، والكمية الجيدة: الأمر المغلق يعطي كلفته الفعلية، التي تفصّلها [كلفة المنتوج النهائي](" + L.fabrication + "). **ما لا تعالجه هذه الصفحة.** حساب التواريخ والحِمل في [تخطيط الإنتاج](" + L.planif + ")؛ وتتبّع الحصص الغذائية في [برنامج الصناعة الغذائية](" + L.agro + ").",
      ] },
      { heading: "مناوبة من ثماني ساعات، وأربع ساعات وعشرون دقيقة من الإنتاج", body: [
        "الشكل يعرض مناوبة دقيقة بدقيقة، ثم يجمع الدقائق نفسها.",
      ], visual: 'poste', after: [
        "**المردود الإجمالي للتجهيزات.** هذا المؤشر، المعروف بـ" + I('OEE') + "، يقيس إلى أي حد يُستعمل تجهيز مقارنةً بكامل طاقته، في الفترات المقرَّر أن يشتغل فيها. وهو حاصل ثلاثة عوامل. **التوفر**: نصيب الوقت المقرَّر الذي يكون فيه التجهيز متاحاً للاشتغال. هنا، 345 دقيقة اشتغال من 450 مقرَّرة، بعد طرح الاستراحة: " + I('76,7') + " بالمئة. **الأداء**: السرعة الفعلية منسوبة إلى السرعة النظرية القصوى. 2760 قطعة خرجت مقابل 3450 ممكنة في 345 دقيقة: 80 بالمئة. **الجودة**: القطع الجيدة منسوبة إلى مجموع ما أُنتج. 2622 من 2760: 95 بالمئة.",
        "**الحاصل.** " + I('76,7 % × 80 % × 95 % = 58,3 %') + ". وبعبارة أخرى: 2622 قطعة جيدة حيث كانت 4500 ممكنة، أو 4 ساعات و22 دقيقة من الإنتاج النافع في مناوبة من 8 ساعات. **لا واحد من الثلاثة يقلق وحده.** 77 و80 و95 يُقرأ كل واحد منها «لا بأس»؛ وحاصلها هو الذي يفاجئ. **لا رقم مثالي.** يُقرأ كثيراً أن مردوداً إجمالياً من 85 بالمئة هو المرجع العالمي؛ والمصدر نفسه الذي ينقل ذلك يحذّر من أن هذا الهدف خاطئ في حالات كثيرة، مثلاً حين لا تُحسب كل الضياعات. والمردود النافع هو مردودكم، شهراً بعد شهر، على الآلة نفسها. **ما ليس هو.** علامة تُعطى للفريق: في المثال، 70 من 105 دقائق توقف، تغيير السلسلة وانتظار المادة، تُقرَّر قبل المركز.",
      ] },
      { heading: "التوقفات، سبباً بسبب", body: [
        "الشكل يرتّب شهراً من التوقفات حسب المدة.",
      ], visual: 'causes', after: [
        "**وقت التوقف.** يُطلق المصطلح في الوسط الصناعي عادة على أعطال تجهيزات الإنتاج؛ ويشمل توقفات غير مبرمجة، كالعطل، وتوقفات مبرمجة، كالصيانة. والتسجيل في المركز يدوّن الاثنين، مع سبب. **سبعة أو ثمانية أسباب.** قائمة من ثلاثين سبباً لن تُستعمل؛ سبعة أو ثمانية، تُختار مع الورشة، وخانة «أخرى» تُراقَب: إذا كبرت، فسبب ناقص. **الترتيب.** مبدأ باريتو يقول إن نحو 80 بالمئة من النتائج، في ظواهر كثيرة، تأتي من 20 بالمئة من الأسباب؛ والمصدر يذكّر بأن هذه النسبة قاعدة عملية، لا قانون. في المثال، ثلاثة أسباب من سبعة تصنع 74 بالمئة من الـ3800 دقيقة.",
        "**ما يغيّره الترتيب.** قبل التسجيل، كان يُقال «الأعطال»؛ وهي الثالثة، بـ19 بالمئة. والاثنان الأولان، تغيير السلسلة وانتظار المادة، يُعالَجان في غير الصيانة. **تغيير السلسلة.** التغيير السريع للسلسلة، المعروف بـ" + I('SMED') + "، طريقة للانتقال بسرعة من صنع منتوج إلى صنع التالي؛ وقبل أي طريقة، يجب أن يكون قد قيس. **انتظار المادة.** يحيل إلى المخزون والمشتريات، انظر [إعادة التموين](" + L.reappro + "). **الأعطال.** كل عطل يُصرَّح به في المركز يمكن أن يفتح طلب تدخل، يُتابَع كما في [تدخلات الصيانة](" + L.interventions + "). **التنبيه.** نظام الإشعار في الورشة ينبّه المؤطّرين والصيانة إلى مشكل في الجودة أو في الطريقة: توقف يتجاوز عشر دقائق يرسل رسالة، دون أن يهاتف أحد أحداً.",
      ] },
      { heading: "ما يمسكه برنامج تسيير الإنتاج", body: [
        "الشكل يرتّب خمس طبقات؛ والثالثة تغذي كل الأخريات.",
      ], visual: 'couches', after: [
        "**المعطيات الأساسية.** قائمة المكوّنات تقول ممّ يُصنع المنتوج؛ والمسار، بأي مراكز يمرّ وبأي وتيرة. ودون وتيرة اسمية لكل آلة ولكل منتوج، لا أداء يُحسب. **الحاجات من المواد.** تخطيط الحاجات من المواد، أو " + I('MRP') + "، نظام لتخطيط الإنتاج والجدولة ومراقبة المخزون؛ ومعظمه برمجيات. وهو القلب التاريخي لبرامج تسيير الإنتاج: انطلاقاً من الطلبيات وقوائم المكوّنات، ما يجب شراؤه وصنعه، ومتى. **قيد الصنع.** يُسمّى هكذا ما هو مصنَّع جزئياً وينتظر إتمامه. وكثرته بين مركزين تدلّ على عنق زجاجة.",
        "**عنق الزجاجة.** عنق الزجاجة عملية تحدّ طاقتها المحدودة من طاقة السلسلة كلها. ساعة ضائعة عليه ساعة ضائعة على المصنع؛ فهناك تبدأ المتابعة. **أين الطلبية؟** كل تصريح يقدّم الأمر: مُطلَق، في الضبط، في الإنتاج، 1200 قطعة من 3000، في المراقبة. والجواب للزبون يُقرأ على الشاشة، دون النزول إلى الورشة. **التسميات.** برنامج تسيير الإنتاج يخطط الأوامر ويتابعها؛ ونظام تنفيذ التصنيع، أو " + I('MES') + "، يتابع ويوثّق تحويل المواد إلى منتجات نهائية؛ و[النظام المتكامل](" + L.erp + ") يجمع الكل مع المشتريات والمبيعات والمخزون. ولمصنع متوسط الحجم، برنامج واحد يقوم غالباً بالثلاثة؛ والمهم أن توجد المتابعة في المركز.",
      ] },
      { heading: "ستة ضياعات كبرى، اثنان لكل عامل", body: [
        "الشكل يرتّب الضياعات حسب عوامل المردود الإجمالي.",
      ], visual: 'pertes', after: [
        "**التوفر.** الانتظار والأعطال: الآلة متوقفة. هذه الضياعات التي تُرى، فهي التي يُتحدث عنها. **الأداء.** التوقفات الصغيرة والسرعة المنخفضة: الآلة تدور، لكنها تُخرج أقل من وتيرتها. في المثال، 69 دقيقة في المناوبة، دون أن يُسجَّل أي توقف. ولا يُظهرها إلا مقارنة القطع الخارجة بالوتيرة الاسمية. **الجودة.** المرفوضات وإعادة التشغيل: قطع أُنتجت عبثاً، أو أُنتجت مرتين.",
        "**من أين يُبدأ.** بأطول ضياع على آلة عنق الزجاجة، وبواحد في كل مرة. شهر من التسجيل يكفي لاختياره؛ ويلزم أكثر لمعرفة هل نفع الإجراء. **حسب الفرقة، دون ترتيب.** المركز نفسه مقروءاً حسب الفرقة يبيّن فوارق؛ وهي تأتي من المنتوج المُطلَق أو المادة المستلَمة بقدر ما تأتي من الأشخاص. تُقارَن الأسباب، لا الفرق. **في الصباح.** عشر دقائق أمام الشاشة: مردود الأمس لكل آلة، أطول ثلاثة توقفات، وما تقرَّر. والأرقام نفسها تصعد إلى الإدارة في [لوحة القيادة](" + L.tableau + ").",
      ] },
      { heading: "ثمانية أسابيع، في المثال", body: [
        "ثمانية أسابيع لورشة من بضع آلات، منها أسبوع للمعاينة.",
      ], visual: 'calendrier', after: [
        "**المعاينة.** أسبوع في الورشة: آلاتكم، مساراتكم، أوراق الإنتاج التي تُملأ من قبل، وأسباب التوقف كما تسمّيها الورشة. **آلة عنق الزجاجة أولاً.** المتابعة تبدأ على آلة أو اثنتين، اللتين تحدّان المصنع. **اللوحات.** واحدة لكل آلة، مثبَّتة في المركز، والأمر الجاري على الشاشة. **مراجعة الصباح.** آخر محطة: أول اجتماع يومي يُعقد أمام الشاشة.",
        "**ما يبقى بعد ذلك.** مردود إجمالي لكل آلة ولكل مناوبة، توقفات مرتّبة حسب السبب، أوامر يُعرف تقدّمها، وكلفة فعلية لكل أمر. **جاهز أو على المقاس.** توجد برامج لتسيير الإنتاج ومتابعة الورشة، وبعضها كامل جداً؛ وتناسب حين تدخل طرقكم في إطارها ويستطيع فريقكم استيعاب تعقيدها. والعمل على المقاس يُبرَّر حين تلزم متابعة في المركز بسيطة جداً، مربوطة بما عندكم من قبل، أو حين تكون للطريقة خصوصياتها. **المدد** هي مدد مثال مركَّب.",
      ], list: [
        "**ما تتلقاه الإدارة**: أوامر تصنيع متابَعة من الإطلاق إلى الإغلاق؛ كميات وتوقفات ومرفوضات يُصرَّح بها في المركز؛ المردود الإجمالي لكل آلة، لكل مناوبة، ولكل منتوج؛ التوقفات مرتّبة حسب السبب؛ تقدّم كل طلبية؛ والكلفة الفعلية لكل أمر.",
        "**ما لا يفعله المصنع بعد الآن**: معرفة الإنتاج في الغد على ورقة، الجدال في الأسباب دون أرقام، النزول إلى الورشة للرد على زبون، واكتشاف تأخر يوم التسليم.",
        "**ما يُقاس**: التوفر، الأداء، الجودة، والمردود الإجمالي؛ دقائق التوقف لكل سبب؛ مدة تغييرات السلسلة؛ قيد الصنع بين المراكز؛ الأوامر المسلَّمة في تاريخها؛ والفارق بين الوقت المقرَّر والوقت المقضي.",
        "**ما تفعله Symloop**: المعاينة في الورشة، المعطيات الأساسية، أوامر التصنيع، شاشات التصريح في المركز، دون اتصال كذلك، قراءة العدّادات حين يمكن، لوحات الورشة، ثم أول مراجعة صباحية معكم.",
      ], faq: [
        { q: "هل يوجد برنامج لتسيير الإنتاج لمؤسسة صغيرة أو متوسطة؟", a: "نعم. ويجب أن يمسك المعطيات الأساسية، أوامر التصنيع، المتابعة في المركز، المادة، والقيادة. والنقطة التي تُراجَع: هل يُصرَّح بالكميات والتوقفات في المركز، لحظة وقوعها، أم تُعاد كتابتها في الغد؟" },
        { q: "ما هو برنامج تسيير الإنتاج؟", a: "هو البرنامج الذي يخطط ما يجب صنعه وشراؤه، يطلق أوامر التصنيع، ويتابع تقدّمها. وقلبه التاريخي حساب الحاجات من المواد." },
        { q: "كيف يُتابَع الإنتاج في الوقت الحقيقي؟", a: "بتصريح في المركز، على لوحة: الكمية المنتَجة، التوقف، والسبب. وإذا كان للآلة عدّاد، قُرئ مباشرة. فيُقرأ تقدّم كل أمر وإنتاج الساعة على الشاشة." },
        { q: "كيف يُحسب المردود الإجمالي؟", a: "التوفر مضروباً في الأداء مضروباً في الجودة. أو، ببساطة أكثر: القطع الجيدة المنتَجة، مقسومة على القطع الممكنة في الوقت المقرَّر بالوتيرة الاسمية. في المثال، 2622 من 4500، أي " + I('58,3') + " بالمئة." },
        { q: "ما هو المردود الإجمالي الجيد؟", a: "لا رقم يصلح للجميع: هدف 85 بالمئة المتداول ينازع فيه المصدر نفسه الذي ينقله. والمرجع الصحيح هو مردودكم أنتم، على الآلة نفسها، من شهر إلى آخر." },
        { q: "لماذا تنتج آلاتي أقل من المقرَّر؟", a: "ثلاث عائلات من الأسباب: الآلة متوقفة، انتظار وأعطال وتغييرات؛ تدور دون وتيرتها، توقفات صغيرة وسرعة منخفضة؛ أو تنتج قطعاً تُرمى أو تُعاد. وشهر من التسجيل في المركز يقول أيها أثقل." },
        { q: "كيف تُقلَّص توقفات الآلات؟", a: "بتسجيلها أولاً، مع سبب، طوال شهر. والترتيب حسب المدة يدلّ على سببين أو ثلاثة؛ وفي المثال، الأولى ليست أعطالاً بل تغييرات سلسلة وانتظار مادة." },
        { q: "كيف يُعرف أين وصلت طلبية في الورشة؟", a: "كل تصريح يقدّم أمر التصنيع: مُطلَق، في الضبط، في الإنتاج مع الكمية المنجزة، في المراقبة، ثم مغلق. والجواب للزبون يُقرأ على الشاشة." },
        { q: "هل يجب ربط الآلات؟", a: "ليس للبدء. تصريح يدوي جيد يكفي للكميات والأسباب. وقراءة عدّاد أو إشارة اشتغال تأتي بعد ذلك، حيث توفّر إدخالاً؛ وهذا يتوقف على كل آلة." },
        { q: "كم من الوقت لتجهيز ورشة؟", a: "ثمانية أسابيع في مثال هذه الصفحة، لبضع آلات، بدءاً بآلة عنق الزجاجة، حتى أول مراجعة صباحية تُعقد أمام الشاشة." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "لا واحد من الأرقام الثلاثة يقلق وحده؛ وحاصلها هو الذي يفاجئ." },
      { after: 2, text: "قبل التسجيل، كان يُقال «الأعطال». وهي الثالثة." },
    ],
    cta: { eyebrow: "قولوا لنا ماذا تصنعون، على كم آلة، وكيف يُسجَّل الإنتاج اليوم: نبدأ بأسبوع في الورشة", title: "آلات تدور وإنتاج دون الوتائر، توقفات لا يسجّلها أحد، إنتاج يُعرف في الغد، طلبية لا يُعثر عليها في الورشة، أو مصنع في الجزائر تتابعونه من فرنسا", body: "Symloop تبني المتابعة التي تنطلق من المركز: أوامر التصنيع، التصريح على اللوحة، التوقفات حسب السبب، المردود الإجمالي، وتقدّم الطلبيات. صِفوا لنا ورشتكم، آلاتكم، والسؤال الذي لا تستطيعون الإجابة عنه دون النزول للنظر." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.fabrication, kind: '2027', name: 'التصنيع: ما يكلّفه المنتوج النهائي' },
      { href: L.planif, kind: '2027', name: 'تخطيط الإنتاج: الطاقة والتاريخ الموعود' },
      { href: L.agro, kind: '2027', name: 'برنامج الصناعة الغذائية: الحصص، السحب، وحصيلة المادة' },
      { href: L.erp, kind: '2027', name: 'النظام المتكامل: قاعدة واحدة، وبأي وحدات يُبدأ' },
    ] },
  },
};

const KEYWORDS = "logiciel de gestion de production algérie 2027, logiciel production algerie, logiciel gpao algérie, logiciel de gestion production, logiciel usine, logiciel de gestion d'usine, logiciel de gestion industriel, suivi de production en temps réel, suivi d'atelier, arrêts machine, calcul du TRS, ordres de fabrication, en-cours, production management software algeria, shop floor tracking, machine downtime tracking, oee calculation, production orders, برنامج تسيير الإنتاج, برنامج تسيير مصنع الجزائر, متابعة الورشة, توقفات الآلات, المردود الإجمالي للتجهيزات, Symloop";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
