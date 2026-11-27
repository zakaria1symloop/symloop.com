import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/comment-gerer-une-ferme-de-poulets-de-chair-algerie-2027-logiciel-elevage-avicole-carnet-de-bande-mortalite-indice-de-consommation-cout-du-kilo.mjs';

const SLUG = 'comment-gerer-une-ferme-de-poulets-de-chair-algerie-2027-logiciel-elevage-avicole-carnet-de-bande-mortalite-indice-de-consommation-cout-du-kilo';
const FIGURES = ['bande', 'couches', 'mortalite', 'coutkilo', 'calendrier', 'tailles'];
const DATE = '2026-11-20';
const I = (x) => '⁦' + x + '⁩';

const L = {
  horsligne: '/blog/application-hors-ligne-synchronisation-algerie-2027-base-locale-file-d-attente-idempotence-conflits/',
  agro: '/blog/logiciel-agroalimentaire-algerie-2027-tracabilite-des-lots-de-la-matiere-a-la-palette-rappel-rendement-controles-qualite-dlc-erp-production/',
  cout: '/blog/personne-ne-sait-ce-que-coute-un-produit-fini-fabrication-application-algerie-2027-nomenclature-ordre-de-fabrication-rendement-cout-d-atelier/',
  reappro: '/blog/en-rupture-tous-les-mois-et-trop-de-stock-le-reste-reapprovisionnement-application-algerie-2027-point-de-commande-delai-mesure-proposition/',
  dashboard: '/blog/tableau-de-bord-temps-reel-gerant-algerie-2027-evenements-agregats-fraicheur-une-definition-par-chiffre-alertes-whatsapp/',
  froid: '/blog/chaine-du-froid-algerie-2027-grossiste-pharma-agroalimentaire-sondes-alertes-preuve-de-livraison/',
  notifications: '/blog/notifications-application-algerie-2027-push-sms-whatsapp-boite-in-app-quel-canal-pour-quel-message-pourquoi-elles-n-arrivent-pas-cout-par-envoi/',
  soustraitance: '/blog/le-sous-traitant-a-livre-en-retard-et-on-l-a-paye-quand-meme-sous-traitance-application-algerie-2027-ordres-matieres-confiees-reception-facture/',
};

const CONTENT = {
  fr: {
    kind: 'Élevage avicole · Algérie · 2027', title: "Comment gérer une ferme de poulets de chair en Algérie (2027) : une bande vendue sans savoir ce qu'elle a rapporté, une mortalité vue trop tard, un aliment qui part sans compte ; logiciel d'élevage avicole, carnet de bande, indice de consommation, coût du kilo, et ce qu'on met en place",
    dek: "« J'ai trois bâtiments de poulets de chair. Chaque bande, je note les morts et l'aliment sur un cahier accroché à la porte, et je fais les comptes après la vente. La dernière bande a perdu de l'argent et je ne l'ai su qu'à la fin : une semaine de forte mortalité que personne n'a signalée à temps, et un aliment consommé bien au-delà de ce que le poids justifiait. Comment gérer une ferme de poulets sans attendre la vente pour savoir ? » Une bande dure six semaines et ne se rattrape pas : il faut connaître son indice et son coût du kilo pendant qu'elle grandit, pas après.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ["Logiciel d'élevage avicole", 'Carnet de bande', 'Mortalité quotidienne et alertes', 'Indice de consommation', 'Coût du kilo et marge par bande', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Un logiciel d'élevage avicole tient quatre choses. **Le carnet du jour** : morts, aliment distribué, eau, température, saisis au téléphone dans le bâtiment. **Les pesées** : le poids moyen chaque semaine, comparé à l'objectif. **L'indice de consommation** : l'aliment distribué divisé par le poids produit, calculé chaque semaine. **Le coût du kilo** : poussin, aliment et autres charges rapportés au poids vif, avant la vente. Dans l'exemple de cette page, pour la même bande, un indice de 2,00 au lieu de 1,80 fait passer la marge de 666 000 à 324 000 dinars.",
      "Cette page s'adresse à celles et ceux qui dirigent un élevage de poulets de chair, d'un bâtiment à plusieurs sites, et aux intégrateurs qui suivent des éleveurs sous contrat, en Algérie ou depuis la France pour un projet d'investissement. Les définitions viennent de sources publiques : poulet de chair, aviculture, indice de consommation, taux de mortalité, aliment du bétail, biosécurité, traçabilité. La bande, sa mortalité, ses poids et ses prix sont un exemple construit, avec des prix fictifs. La page ne donne aucun conseil vétérinaire ni de formulation d'aliment ; elle ne traite ni des agréments et règles sanitaires, ni des aides et de la fiscalité agricoles, et ne cite aucun prix de matériel.",
    ],
    sections: [
      { heading: "Une bande, en six temps", body: [
        "La figure suit une bande en six temps.",
      ], visual: 'bande', after: [
        "**Le métier.** L'aviculture est la forme d'élevage qui produit des volailles pour leur viande ou leurs œufs. Un poulet de chair est un poulet élevé spécifiquement pour la production de viande ; la plupart des poulets de chair commerciaux atteignent leur poids d'abattage entre quatre et six semaines. Tout se joue donc en six semaines, et la bande suivante ne corrige pas la précédente. **La mise en place.** Nombre de poussins, poids moyen, origine, date : c'est le point zéro de tous les calculs. **Le démarrage.** La première semaine, la mortalité se suit de près.",
        "**La croissance.** C'est le temps accentué : une pesée par semaine sur un échantillon, et l'aliment distribué. **La finition et l'enlèvement.** Le poids visé et la date prévue se lisent sur la courbe ; à l'enlèvement, le poids vendu, le prix et l'acheteur ferment la bande. **Le vide.** Entre deux bandes, le bâtiment est nettoyé ; c'est aussi le moment du bilan. **La biosécurité.** Ce sont les mesures qui visent à empêcher l'introduction ou la propagation d'organismes nuisibles ; le logiciel n'en décide aucune, il enregistre ce qui a été fait, et quand.",
      ] },
      { heading: "Ce qu'il y a dans un logiciel d'élevage", body: [
        "La figure empile cinq couches ; la deuxième alimente toutes les autres.",
      ], visual: 'couches', after: [
        "**Les bandes.** Une bande appartient à un bâtiment et porte ses dates. **Le carnet du jour.** C'est la couche accentuée : quatre chiffres, chaque matin. Le cahier accroché à la porte les contient déjà ; ce qui manque, c'est qu'ils soient additionnés, comparés, et vus par quelqu'un d'autre que la personne qui les écrit. **Sans réseau.** Un bâtiment d'élevage est rarement couvert : la saisie se fait hors connexion et se synchronise au retour, voir [l'application hors ligne](" + L.horsligne + ").",
        "**Les stocks.** L'aliment est le plus souvent le premier poste de coût d'un élevage. Chaque livraison entre dans un silo ; chaque distribution en sort ; l'écart entre le silo et le carnet se voit. Les commandes suivent la consommation réelle, voir [le réapprovisionnement](" + L.reappro + "). **La température.** Des sondes peuvent alimenter le carnet et alerter, comme dans [la chaîne du froid](" + L.froid + "). **Le bilan.** Coût du kilo et marge par bande, lus sur [un tableau de bord](" + L.dashboard + ").",
      ] },
      { heading: "La mortalité, vue le jour même", body: [
        "La figure montre les morts de chaque jour, sur une bande de quarante-deux jours.",
      ], visual: 'mortalite', after: [
        "**Le taux.** Un taux de mortalité mesure le nombre de morts dans une population donnée. Dans l'exemple, 500 morts sur 10 000 poussins, soit 5 %. Le total ne dit pas grand-chose : 190 de ces morts tiennent en sept jours, du jour 18 au jour 24. **Le seuil.** Le logiciel compare chaque jour au double de la moyenne des sept jours précédents. Au jour 19, 18 morts contre 7 en moyenne : l'alerte part, deux jours avant le pic de 50.",
        "**Ce que fait l'alerte.** Elle n'explique rien : elle prévient la personne qui décide, par le canal qui arrive, voir [les notifications](" + L.notifications + "), et laisse au vétérinaire le soin de comprendre. **Les autres signaux.** La consommation d'eau qui chute, l'aliment qui n'est pas mangé, le poids qui décroche de l'objectif : chacun a son seuil, réglé avec votre vétérinaire. **Sur le cahier.** Les mêmes chiffres existent, mais personne ne fait la moyenne des sept derniers jours à six heures du matin. **Ce que l'on mesure.** Mortalité par jour, par semaine et cumulée ; par bâtiment ; par origine des poussins.",
      ] },
      { heading: "L'indice de consommation, et le coût du kilo", body: [
        "La figure donne le coût du kilo vif pour la même bande, avec deux indices.",
      ], visual: 'coutkilo', after: [
        "**L'indice.** L'indice de consommation mesure l'efficacité avec laquelle un animal transforme l'aliment : c'est la masse d'aliment divisée par la masse produite. Les valeurs publiées pour le poulet de chair vont, selon les sources et les années, d'environ 1,6 à 2,0 kilo d'aliment par kilo de poids vif. **Dans l'exemple.** 22 800 kg vendus. Avec 41 040 kg d'aliment, l'indice est de 1,80 ; avec 45 600 kg, il est de 2,00.",
        "**Le coût du kilo.** Prix fictifs : 90 dinars le poussin, 75 dinars le kilo d'aliment, 600 000 dinars d'autres charges. À 1,80, le kilo vif coûte 200,8 dinars : 39,5 de poussin, 135,0 d'aliment, 26,3 d'autres charges. À 2,00, il coûte 215,8 dinars. Vendue 230 dinars le kilo, la bande laisse 666 000 dinars dans le premier cas, 324 000 dans le second. **Ce que cela dit.** Deux dixièmes d'indice, 4 560 kg d'aliment, la moitié de la marge. **Chaque semaine.** Le logiciel calcule l'indice à chaque pesée ; un indice qui dérive à la quatrième semaine se voit à la quatrième semaine. La méthode du coût de revient est celle décrite dans [le coût d'un produit fini](" + L.cout + ").",
      ] },
      { heading: "Six semaines, entre deux bandes", body: [
        "Six semaines dans l'exemple, à caler sur un vide entre deux bandes.",
      ], visual: 'calendrier', after: [
        "**Le cadrage.** Une semaine : vos bâtiments, vos objectifs de poids par âge, vos fournisseurs de poussins et d'aliment, et votre cahier actuel, dont on reprend les colonnes. **La saisie.** Elle doit tenir en une minute, avec de gros chiffres, en arabe ou en français : c'est la personne du bâtiment qui la fait, pas le bureau. **Le démarrage.** Avec une nouvelle bande, le jour de la mise en place : une bande commencée sur cahier se termine sur cahier.",
        "**Les pesées.** Un échantillon pesé chaque semaine suffit ; une balance reliée évite la ressaisie, sans être indispensable. **Les alertes.** Elles se règlent après deux ou trois bandes, quand le logiciel connaît vos chiffres habituels. **Ce que le logiciel ne fait pas.** Il ne soigne pas, ne formule pas l'aliment et ne remplace ni le vétérinaire ni le technicien : il leur donne des chiffres propres, le jour même. **Les durées** sont celles d'un exemple construit.",
      ] },
      { heading: "D'un bâtiment à une filière", body: [
        "La figure donne cinq situations, et ce que le logiciel ajoute à chacune.",
      ], visual: 'tailles', after: [
        "**Un bâtiment.** Le cahier suffit pour noter ; le logiciel apporte les calculs et l'alerte. **Plusieurs bâtiments.** La comparaison devient le principal outil : même aliment, même origine, deux indices différents, pourquoi ? **Plusieurs sites.** La direction voit chaque matin tous les bâtiments, sans appeler personne.",
        "**La filière.** Quand l'aliment, le couvoir ou l'abattoir appartiennent au même groupe, les lots se suivent d'un maillon à l'autre : la traçabilité est l'enregistrement de tous les mouvements d'un produit, comme dans [le logiciel agroalimentaire](" + L.agro + "). **Les éleveurs sous contrat.** Un intégrateur qui fournit poussins et aliment tient un compte par éleveur : ce qui a été confié, ce qui a été livré, le décompte ; le mécanisme est celui des matières confiées, décrit dans [la sous-traitance](" + L.soustraitance + "). **Prêt à l'emploi ou sur mesure.** Des logiciels d'élevage existent, certains gratuits, et conviennent pour un bâtiment. Le sur-mesure se justifie pour plusieurs sites, une filière intégrée, des éleveurs sous contrat, ou un lien avec votre gestion commerciale.",
      ], list: [
        "**Ce que vous recevez** : le carnet du jour sur téléphone, hors connexion ; les pesées et la courbe contre l'objectif ; l'indice de consommation chaque semaine ; les stocks d'aliment par silo ; les alertes ; le coût du kilo et la marge par bande ; la comparaison des bâtiments.",
        "**Ce que l'élevage évite** : la bande dont on découvre la perte après la vente, la mortalité signalée trois jours trop tard, l'aliment qui part sans compte, l'indice calculé une fois par an, le cahier que personne ne relit.",
        "**Ce qui est mesuré** : mortalité par jour et cumulée ; poids moyen par semaine ; indice de consommation ; aliment consommé par sujet ; coût du kilo vif ; marge par bande ; écart entre bâtiments.",
        "**Ce que fait Symloop** : le cadrage de vos bâtiments et de vos objectifs, l'application de saisie, les pesées et l'indice, les stocks, les alertes, le bilan par bande, les comptes des éleveurs sous contrat, en arabe et en français.",
      ], faq: [
        { q: "Comment gérer une ferme de poulets de chair ?", a: "En tenant un carnet par bande, en notant chaque matin les morts et l'aliment, en pesant chaque semaine, et en calculant l'indice de consommation et le coût du kilo pendant que la bande grandit, pas après la vente." },
        { q: "Quel logiciel pour un élevage avicole ?", a: "Un logiciel qui tient les bandes, le carnet du jour sur téléphone, les pesées, les stocks d'aliment et le bilan par bande, et qui fonctionne sans réseau dans le bâtiment." },
        { q: "Comment calculer l'indice de consommation ?", a: "En divisant le poids d'aliment distribué par le poids vif produit. Dans l'exemple : 41 040 kg d'aliment pour 22 800 kg de poulet, soit 1,80." },
        { q: "Comment calculer le coût du kilo de poulet ?", a: "En additionnant le poussin, l'aliment et les autres charges de la bande, puis en divisant par le poids vif vendu. Dans l'exemple, à prix fictifs : 200,8 dinars le kilo." },
        { q: "Quel taux de mortalité est normal ?", a: "Cela dépend de la souche, de la saison et du bâtiment, et se discute avec votre vétérinaire. Le logiciel ne fixe pas de norme : il compare chaque jour à vos sept jours précédents et à vos bandes passées." },
        { q: "Comment détecter un problème sanitaire plus tôt ?", a: "Par la saisie quotidienne et un seuil d'alerte : dans l'exemple, l'alerte part au jour 19, deux jours avant le pic. La cause, elle, relève du vétérinaire." },
        { q: "Faut-il Internet dans le bâtiment ?", a: "Non. La saisie se fait hors connexion sur le téléphone et se synchronise dès qu'il retrouve du réseau." },
        { q: "Qui saisit les chiffres ?", a: "La personne qui s'occupe du bâtiment, en une minute, avec quatre chiffres. Si la saisie demande plus, elle ne sera pas faite tous les jours." },
        { q: "Peut-on comparer plusieurs bâtiments ou plusieurs bandes ?", a: "Oui, et c'est le principal intérêt dès le deuxième bâtiment : même aliment, même origine, des indices différents montrent où regarder." },
        { q: "Le logiciel convient-il à un intégrateur ?", a: "Oui : un compte par éleveur sous contrat, avec les poussins et l'aliment confiés, les livraisons et le décompte, et les mêmes chiffres de bande pour chacun." },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: "L'alerte n'explique rien : elle fait venir le vétérinaire deux jours plus tôt." },
      { after: 3, text: "Deux dixièmes d'indice, 4 560 kg d'aliment, la moitié de la marge." },
    ],
    cta: { eyebrow: "Dites-nous combien de bâtiments, combien de bandes par an, et ce que vous notez aujourd'hui : nous commençons par une semaine de cadrage", title: "Bande dont on découvre la perte après la vente, mortalité vue trop tard, aliment sans compte, plusieurs bâtiments à comparer, ou élevage que vous montez en Algérie depuis la France", body: "Symloop construit l'outil qui correspond à votre élevage : carnet du jour, pesées, indice, stocks, alertes, bilan par bande. Décrivez-nous vos bâtiments, vos fournisseurs et votre cahier actuel." },
    related: { label: 'À lire aussi', items: [
      { href: L.cout, kind: '2027', name: 'Ce que coûte un produit fini : nomenclature, rendement, coût d’atelier' },
      { href: L.agro, kind: '2027', name: 'Logiciel agroalimentaire : traçabilité des lots, rendement, contrôles' },
      { href: L.horsligne, kind: '2027', name: 'Application hors ligne : base locale, synchronisation, conflits' },
      { href: L.dashboard, kind: '2027', name: 'Le tableau de bord en temps réel : une définition par chiffre' },
    ] },
  },
  en: {
    kind: 'Poultry farming · Algeria · 2027', title: "How to run a broiler chicken farm in Algeria (2027): a flock sold without knowing what it earned, mortality seen too late, feed going out uncounted; poultry farm software, flock log, feed conversion ratio, cost per kilo, and what we put in place",
    dek: "“I have three broiler houses. For each flock I note deaths and feed in a notebook hanging on the door, and I do the sums after the sale. The last flock lost money and I only found out at the end: a week of heavy mortality nobody reported in time, and feed consumed well beyond what the weight justified. How do you run a chicken farm without waiting for the sale to know?” A flock lasts six weeks and cannot be made up afterwards: you have to know its ratio and its cost per kilo while it is growing, not after.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Poultry farm software', 'Flock log', 'Daily mortality and alerts', 'Feed conversion ratio', 'Cost per kilo and margin per flock', 'Algeria 2027'],
    intro: [
      "**Short answer.** Poultry farm software holds four things. **The daily log**: deaths, feed given, water, temperature, entered on the phone in the house. **Weighings**: the average weight each week, compared with the target. **The feed conversion ratio**: feed given divided by weight produced, calculated every week. **The cost per kilo**: chick, feed and other costs set against live weight, before the sale. In this page's example, for the same flock, a ratio of 2.00 instead of 1.80 takes the margin from 666,000 to 324,000 dinars.",
      "This page is for those who run a broiler farm, from one house to several sites, and for integrators who follow contract growers, in Algeria or from France for an investment project. The definitions come from public sources: broiler, poultry farming, feed conversion ratio, mortality rate, animal feed, biosecurity, traceability. The flock, its mortality, its weights and its prices are a constructed example, with fictitious prices. The page gives no veterinary advice and no feed formulation; it covers neither approvals and sanitary rules, nor agricultural subsidies and tax, and quotes no hardware price.",
    ],
    sections: [
      { heading: "A flock, in six steps", body: [
        "The figure follows a flock in six steps.",
      ], visual: 'bande', after: [
        "**The trade.** Poultry farming is the form of animal husbandry that raises domesticated birds to produce meat or eggs. A broiler is a chicken bred and raised specifically for meat production; most commercial broilers reach slaughter weight between four and six weeks of age. So everything is decided in six weeks, and the next flock does not correct the previous one. **Placement.** Number of chicks, average weight, origin, date: that is point zero of every calculation. **Starting.** In the first week, mortality is watched closely.",
        "**Growth.** That is the accented step: one weighing a week on a sample, and the feed given. **Finishing and removal.** The target weight and the planned date are read off the curve; at removal, the weight sold, the price and the buyer close the flock. **The gap.** Between two flocks the house is cleaned; it is also the time for the results. **Biosecurity.** It refers to measures aimed at preventing the introduction or spread of harmful organisms; the software decides none of them, it records what was done, and when.",
      ] },
      { heading: "What is inside poultry farm software", body: [
        "The figure stacks five layers; the second feeds all the others.",
      ], visual: 'couches', after: [
        "**Flocks.** A flock belongs to a house and carries its dates. **The daily log.** That is the accented layer: four figures, every morning. The notebook on the door already holds them; what is missing is that they be added up, compared, and seen by someone other than the person writing them. **Without a network.** A poultry house rarely has coverage: entry is done offline and synchronises afterwards, see [the offline application](" + L.horsligne + ").",
        "**Stocks.** Feed is frequently the main cost of raising animals. Each delivery goes into a silo; each distribution comes out of it; the gap between the silo and the log shows. Orders follow real consumption, see [replenishment](" + L.reappro + "). **Temperature.** Probes can feed the log and raise alerts, as in [the cold chain](" + L.froid + "). **Results.** Cost per kilo and margin per flock, read on [a dashboard](" + L.dashboard + ").",
      ] },
      { heading: "Mortality, seen the same day", body: [
        "The figure shows each day's deaths, over a forty-two-day flock.",
      ], visual: 'mortalite', after: [
        "**The rate.** A mortality rate is a measure of the number of deaths in a particular population. In the example, 500 deaths out of 10,000 chicks, that is 5%. The total says little: 190 of those deaths fall within seven days, from day 18 to day 24. **The threshold.** The software compares each day with twice the average of the seven previous days. On day 19, 18 deaths against an average of 7: the alert goes out, two days before the peak of 50.",
        "**What the alert does.** It explains nothing: it warns the person who decides, through the channel that arrives, see [notifications](" + L.notifications + "), and leaves understanding to the vet. **Other signals.** Water consumption that drops, feed that is not eaten, weight falling away from the target: each has its threshold, set with your vet. **In the notebook.** The same figures exist, but nobody averages the last seven days at six in the morning. **What is measured.** Mortality per day, per week and cumulative; per house; per origin of the chicks.",
      ] },
      { heading: "The feed conversion ratio, and the cost per kilo", body: [
        "The figure gives the cost of a live kilo for the same flock, with two ratios.",
      ], visual: 'coutkilo', after: [
        "**The ratio.** The feed conversion ratio measures how efficiently an animal turns feed into output: it is the mass of feed divided by the mass produced. Published values for broilers range, depending on source and year, from about 1.6 to 2.0 kilos of feed per kilo of live weight. **In the example.** 22,800 kg sold. With 41,040 kg of feed, the ratio is 1.80; with 45,600 kg, it is 2.00.",
        "**The cost per kilo.** Fictitious prices: 90 dinars per chick, 75 dinars per kilo of feed, 600,000 dinars of other costs. At 1.80, the live kilo costs 200.8 dinars: 39.5 of chick, 135.0 of feed, 26.3 of other costs. At 2.00, it costs 215.8 dinars. Sold at 230 dinars a kilo, the flock leaves 666,000 dinars in the first case, 324,000 in the second. **What that says.** Two tenths of ratio, 4,560 kg of feed, half the margin. **Every week.** The software calculates the ratio at each weighing; a ratio that drifts in week four is seen in week four. The costing method is the one described in [the cost of a finished product](" + L.cout + ").",
      ] },
      { heading: "Six weeks, between two flocks", body: [
        "Six weeks in the example, timed on a gap between two flocks.",
      ], visual: 'calendrier', after: [
        "**Scoping.** One week: your houses, your weight targets by age, your chick and feed suppliers, and your current notebook, whose columns are kept. **Entry.** It has to fit in one minute, with large digits, in Arabic or in French: the person in the house does it, not the office. **Starting.** With a new flock, on placement day: a flock started in a notebook ends in a notebook.",
        "**Weighings.** A sample weighed each week is enough; a connected scale avoids retyping, without being essential. **Alerts.** They are tuned after two or three flocks, once the software knows your usual figures. **What the software does not do.** It does not treat birds, does not formulate feed and replaces neither the vet nor the technician: it gives them clean figures, the same day. **The durations** are those of a constructed example.",
      ] },
      { heading: "From one house to an integrated chain", body: [
        "The figure gives five situations, and what the software adds to each.",
      ], visual: 'tailles', after: [
        "**One house.** The notebook is enough for noting; the software brings the calculations and the alert. **Several houses.** Comparison becomes the main tool: same feed, same origin, two different ratios, why? **Several sites.** Management sees every house each morning, without calling anyone.",
        "**The chain.** When the feed mill, the hatchery or the abattoir belong to the same group, batches are followed from one link to the next: traceability is the recording of all movement of a product, as in [food manufacturing software](" + L.agro + "). **Contract growers.** An integrator that supplies chicks and feed keeps an account per grower: what was entrusted, what was delivered, the settlement; the mechanism is that of entrusted materials, described in [subcontracting](" + L.soustraitance + "). **Ready-made or custom.** Farm software exists, some of it free, and suits a single house. Custom work is justified for several sites, an integrated chain, contract growers, or a link with your sales management.",
      ], list: [
        "**What you receive**: the daily log on the phone, offline; weighings and the curve against target; the feed conversion ratio every week; feed stocks per silo; alerts; cost per kilo and margin per flock; comparison of houses.",
        "**What the farm avoids**: the flock whose loss is discovered after the sale, mortality reported three days too late, feed going out uncounted, the ratio calculated once a year, the notebook nobody rereads.",
        "**What is measured**: mortality per day and cumulative; average weight per week; feed conversion ratio; feed consumed per bird; cost per live kilo; margin per flock; gap between houses.",
        "**What Symloop does**: scoping your houses and your targets, the entry application, weighings and the ratio, stocks, alerts, results per flock, accounts for contract growers, in Arabic and in French.",
      ], faq: [
        { q: "How do you run a broiler chicken farm?", a: "By keeping a log per flock, noting deaths and feed every morning, weighing every week, and calculating the feed conversion ratio and the cost per kilo while the flock is growing, not after the sale." },
        { q: "What software for a poultry farm?", a: "Software that holds the flocks, the daily log on the phone, weighings, feed stocks and results per flock, and that works without a network in the house." },
        { q: "How do you calculate the feed conversion ratio?", a: "By dividing the weight of feed given by the live weight produced. In the example: 41,040 kg of feed for 22,800 kg of chicken, that is 1.80." },
        { q: "How do you calculate the cost of a kilo of chicken?", a: "By adding up the chick, the feed and the flock's other costs, then dividing by the live weight sold. In the example, at fictitious prices: 200.8 dinars a kilo." },
        { q: "What mortality rate is normal?", a: "It depends on the strain, the season and the house, and is something to discuss with your vet. The software sets no norm: it compares each day with your seven previous days and with your past flocks." },
        { q: "How do you detect a health problem earlier?", a: "With daily entry and an alert threshold: in the example, the alert goes out on day 19, two days before the peak. The cause is a matter for the vet." },
        { q: "Is the internet needed in the house?", a: "No. Entry is done offline on the phone and synchronises as soon as it finds a network." },
        { q: "Who enters the figures?", a: "The person who looks after the house, in one minute, with four figures. If entry takes more, it will not be done every day." },
        { q: "Can several houses or several flocks be compared?", a: "Yes, and it is the main benefit from the second house on: same feed, same origin, different ratios show where to look." },
        { q: "Does the software suit an integrator?", a: "Yes: an account per contract grower, with the chicks and feed entrusted, deliveries and the settlement, and the same flock figures for each." },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: "The alert explains nothing: it brings the vet in two days earlier." },
      { after: 3, text: "Two tenths of ratio, 4,560 kg of feed, half the margin." },
    ],
    cta: { eyebrow: "Tell us how many houses, how many flocks a year, and what you note today: we start with a week of scoping", title: "A flock whose loss is discovered after the sale, mortality seen too late, uncounted feed, several houses to compare, or a farm you are setting up in Algeria from France", body: "Symloop builds the tool that fits your farm: daily log, weighings, ratio, stocks, alerts, results per flock. Describe your houses to us, your suppliers and your current notebook." },
    related: { label: 'Also read', items: [
      { href: L.cout, kind: '2027', name: 'What a finished product costs: bill of materials, yield, workshop cost' },
      { href: L.agro, kind: '2027', name: 'Food manufacturing software: batch traceability, yield, checks' },
      { href: L.horsligne, kind: '2027', name: 'Offline application: local database, synchronisation, conflicts' },
      { href: L.dashboard, kind: '2027', name: 'The real-time dashboard: one definition per figure' },
    ] },
  },
  ar: {
    kind: 'تربية الدواجن · الجزائر · 2027', title: "كيف تُسيَّر مدجنة الدجاج اللاحم في الجزائر (2027): فوج يُباع دون معرفة ما ربحه، نفوق يُرى بعد فوات الأوان، وعلف يخرج دون حساب؛ برنامج تربية الدواجن، سجل الفوج، معامل التحويل، كلفة الكيلوغرام، وما نضعه",
    dek: "«عندي ثلاثة عنابر للدجاج اللاحم. في كل فوج، أسجّل النافق والعلف في دفتر معلَّق على الباب، وأقوم بالحسابات بعد البيع. الفوج الأخير خسر المال ولم أعرف ذلك إلا في النهاية: أسبوع من النفوق القوي لم يبلّغ عنه أحد في وقته، وعلف استُهلك أكثر بكثير مما يبرّره الوزن. كيف تُسيَّر مدجنة دجاج دون انتظار البيع للمعرفة؟» الفوج يدوم ستة أسابيع ولا يُستدرك: يجب أن يُعرف معامله وكلفة كيلوغرامه وهو ينمو، لا بعد ذلك.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['برنامج تربية الدواجن', 'سجل الفوج', 'النفوق اليومي والتنبيهات', 'معامل التحويل', 'كلفة الكيلوغرام والهامش لكل فوج', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** برنامج تربية الدواجن يمسك أربعة أشياء. **سجل اليوم**: النافق، العلف الموزَّع، الماء، والحرارة، تُدخَل على الهاتف في العنبر. **الوزن**: متوسط الوزن كل أسبوع، مقارناً بالهدف. **معامل التحويل**: العلف الموزَّع مقسوماً على الوزن المنتَج، ويُحسب كل أسبوع. و**كلفة الكيلوغرام**: الكتكوت، العلف، وباقي التكاليف منسوبة إلى الوزن الحي، قبل البيع. في مثال هذه الصفحة، للفوج نفسه، معامل " + I('2,00') + " بدل " + I('1,80') + " ينقل الهامش من " + I('666 000') + " إلى " + I('324 000') + " دينار.",
      "هذه الصفحة موجّهة إلى من يسيّر مدجنة دجاج لاحم، من عنبر واحد إلى عدة مواقع، وإلى المتعاملين الذين يتابعون مربّين متعاقدين، في الجزائر أو من فرنسا لمشروع استثمار. التعريفات من مصادر عمومية: الدجاج اللاحم، تربية الدواجن، معامل التحويل الغذائي، معدل النفوق، علف الحيوانات، الأمن الحيوي، والتتبّع. والفوج ونفوقه وأوزانه وأسعاره مثال مركَّب، بأسعار خيالية. والصفحة لا تعطي أي نصيحة بيطرية ولا تركيبة علف؛ ولا تتناول الاعتمادات والقواعد الصحية، ولا الدعم والجباية الفلاحية، ولا تذكر أي سعر عتاد.",
    ],
    sections: [
      { heading: "فوج، في ست مراحل", body: [
        "الشكل يتابع فوجاً في ست مراحل.",
      ], visual: 'bande', after: [
        "**المهنة.** تربية الدواجن شكل من تربية الحيوانات ينتج الطيور من أجل لحمها أو بيضها. والدجاج اللاحم دجاج يُربّى خصيصاً لإنتاج اللحم؛ وأغلب الدجاج اللاحم التجاري يبلغ وزن الذبح بين أربعة وستة أسابيع. فكل شيء يُحسم في ستة أسابيع، والفوج التالي لا يصحّح السابق. **الاستقبال.** عدد الكتاكيت، متوسط الوزن، المصدر، والتاريخ: هذه نقطة الصفر لكل الحسابات. **الانطلاق.** في الأسبوع الأول، يُراقَب النفوق عن قرب.",
        "**النمو.** هو المرحلة المبرزة: وزن في الأسبوع على عيّنة، والعلف الموزَّع. **التسمين الأخير والبيع.** الوزن المستهدَف والتاريخ المتوقع يُقرآن على المنحنى؛ وعند البيع، يُغلق الفوج بالوزن المباع، السعر، والمشتري. **الفراغ.** بين فوجين، يُنظَّف العنبر؛ وهو أيضاً وقت الحصيلة. **الأمن الحيوي.** هو التدابير التي ترمي إلى منع دخول أو انتشار الكائنات المضرّة؛ والبرنامج لا يقرّر أياً منها، بل يسجّل ما أُنجز، ومتى.",
      ] },
      { heading: "ما يوجد في برنامج تربية الدواجن", body: [
        "الشكل يرتّب خمس طبقات؛ والثانية تغذّي كل الأخرى.",
      ], visual: 'couches', after: [
        "**الأفواج.** الفوج ينتمي إلى عنبر ويحمل تواريخه. **سجل اليوم.** هو الطبقة المبرزة: أربعة أرقام، كل صباح. والدفتر المعلَّق على الباب يحتويها من قبل؛ وما ينقص أن تُجمَع، تُقارَن، ويراها شخص غير من يكتبها. **دون شبكة.** عنبر التربية قلّما تغطيه الشبكة: الإدخال يتم دون اتصال ويتزامن عند العودة، انظر [التطبيق دون اتصال](" + L.horsligne + ").",
        "**المخزون.** العلف في الغالب أول بند في كلفة التربية. كل تسليم يدخل صومعة؛ وكل توزيع يخرج منها؛ والفرق بين الصومعة والسجل يُرى. والطلبيات تتبع الاستهلاك الفعلي، انظر [إعادة التموين](" + L.reappro + "). **الحرارة.** مجسّات يمكن أن تغذّي السجل وتنبّه، كما في [سلسلة التبريد](" + L.froid + "). **الحصيلة.** كلفة الكيلوغرام والهامش لكل فوج، تُقرأ على [لوحة قيادة](" + L.dashboard + ").",
      ] },
      { heading: "النفوق، يُرى في اليوم نفسه", body: [
        "الشكل يعرض نفوق كل يوم، على فوج من اثنين وأربعين يوماً.",
      ], visual: 'mortalite', after: [
        "**المعدل.** معدل النفوق يقيس عدد الوفيات في مجموعة معيّنة. في المثال، 500 نافق من 10000 كتكوت، أي 5 بالمئة. والمجموع لا يقول الكثير: 190 من هذا النفوق تقع في سبعة أيام، من اليوم 18 إلى اليوم 24. **العتبة.** البرنامج يقارن كل يوم بضعف متوسط الأيام السبعة السابقة. في اليوم 19، 18 نافقاً مقابل 7 في المتوسط: التنبيه ينطلق، يومين قبل قمة الخمسين.",
        "**ما يفعله التنبيه.** لا يشرح شيئاً: ينبّه من يقرّر، بالقناة التي تصل، انظر [الإشعارات](" + L.notifications + ")، ويترك للبيطري أن يفهم. **الإشارات الأخرى.** استهلاك الماء الذي ينزل، العلف الذي لا يؤكل، والوزن الذي يبتعد عن الهدف: لكل واحدة عتبتها، تُضبط مع بيطريكم. **في الدفتر.** الأرقام نفسها موجودة، لكن لا أحد يحسب متوسط الأيام السبعة الأخيرة في السادسة صباحاً. **ما يُقاس.** النفوق لكل يوم، لكل أسبوع، وتراكمياً؛ لكل عنبر؛ ولكل مصدر للكتاكيت.",
      ] },
      { heading: "معامل التحويل، وكلفة الكيلوغرام", body: [
        "الشكل يعطي كلفة الكيلوغرام الحي للفوج نفسه، بمعاملين.",
      ], visual: 'coutkilo', after: [
        "**المعامل.** معامل التحويل الغذائي يقيس نجاعة تحويل الحيوان للعلف: هو كتلة العلف مقسومة على الكتلة المنتَجة. والقيم المنشورة للدجاج اللاحم تتراوح، حسب المصادر والسنوات، بين نحو " + I('1,6') + " و" + I('2,0') + " كيلوغرام علف لكل كيلوغرام من الوزن الحي. **في المثال.** " + I('22 800') + " كلغ مباعة. بـ" + I('41 040') + " كلغ من العلف، المعامل " + I('1,80') + "؛ وبـ" + I('45 600') + " كلغ، المعامل " + I('2,00') + ".",
        "**كلفة الكيلوغرام.** أسعار خيالية: 90 ديناراً للكتكوت، 75 ديناراً لكيلوغرام العلف، و" + I('600 000') + " دينار لباقي التكاليف. بمعامل " + I('1,80') + "، يكلّف الكيلوغرام الحي " + I('200,8') + " ديناراً: " + I('39,5') + " للكتكوت، " + I('135,0') + " للعلف، و" + I('26,3') + " لباقي التكاليف. وبمعامل " + I('2,00') + "، يكلّف " + I('215,8') + " ديناراً. وبالبيع بـ230 ديناراً للكيلوغرام، يترك الفوج " + I('666 000') + " دينار في الحالة الأولى، و" + I('324 000') + " في الثانية. **ما يقوله ذلك.** عُشران من المعامل، " + I('4 560') + " كلغ من العلف، ونصف الهامش. **كل أسبوع.** البرنامج يحسب المعامل عند كل وزن؛ ومعامل ينحرف في الأسبوع الرابع يُرى في الأسبوع الرابع. وطريقة حساب سعر التكلفة هي الموصوفة في [كلفة المنتوج النهائي](" + L.cout + ").",
      ] },
      { heading: "ستة أسابيع، بين فوجين", body: [
        "ستة أسابيع في المثال، تُضبط على فراغ بين فوجين.",
      ], visual: 'calendrier', after: [
        "**التأطير.** أسبوع: عنابركم، أهداف الوزن حسب العمر، مورّدو الكتاكيت والعلف، ودفتركم الحالي، الذي تُؤخذ أعمدته. **الإدخال.** يجب أن يسع في دقيقة، بأرقام كبيرة، بالعربية أو الفرنسية: يقوم به شخص العنبر، لا المكتب. **الانطلاق.** مع فوج جديد، يوم الاستقبال: فوج بدأ في دفتر ينتهي في دفتر.",
        "**الوزن.** عيّنة توزن كل أسبوع تكفي؛ وميزان موصول يجنّب إعادة الإدخال، دون أن يكون ضرورياً. **التنبيهات.** تُضبط بعد فوجين أو ثلاثة، حين يعرف البرنامج أرقامكم المعتادة. **ما لا يفعله البرنامج.** لا يعالج، لا يركّب العلف، ولا يعوّض البيطري ولا التقني: يعطيهما أرقاماً نظيفة، في اليوم نفسه. **المدد** هي مدد مثال مركَّب.",
      ] },
      { heading: "من عنبر واحد إلى سلسلة متكاملة", body: [
        "الشكل يعطي خمس حالات، وما يضيفه البرنامج لكل واحدة.",
      ], visual: 'tailles', after: [
        "**عنبر واحد.** الدفتر يكفي للتسجيل؛ والبرنامج يأتي بالحسابات والتنبيه. **عدة عنابر.** المقارنة تصير الأداة الرئيسية: العلف نفسه، المصدر نفسه، ومعاملان مختلفان، لماذا؟ **عدة مواقع.** الإدارة ترى كل العنابر كل صباح، دون الاتصال بأحد.",
        "**السلسلة.** حين يكون مصنع العلف، المفرخة، أو المذبح للمجموعة نفسها، تُتابَع الدفعات من حلقة إلى أخرى: التتبّع هو تسجيل كل حركات المنتوج، كما في [برنامج الصناعة الغذائية](" + L.agro + "). **المربّون المتعاقدون.** متعامل يورّد الكتاكيت والعلف يمسك حساباً لكل مربٍّ: ما سُلّم له، ما سلّمه، والتصفية؛ والآلية هي آلية المواد المسلَّمة، الموصوفة في [المناولة](" + L.soustraitance + "). **جاهز أو على المقاس.** توجد برامج للتربية، بعضها مجاني، وتناسب عنبراً واحداً. والعمل على المقاس يُبرَّر لعدة مواقع، لسلسلة متكاملة، لمربّين متعاقدين، أو لربط بتسييركم التجاري.",
      ], list: [
        "**ما تتلقونه**: سجل اليوم على الهاتف، دون اتصال؛ الوزن والمنحنى مقابل الهدف؛ معامل التحويل كل أسبوع؛ مخزون العلف لكل صومعة؛ التنبيهات؛ كلفة الكيلوغرام والهامش لكل فوج؛ ومقارنة العنابر.",
        "**ما تتفاداه المدجنة**: الفوج الذي تُكتشف خسارته بعد البيع، النفوق المبلَّغ عنه بثلاثة أيام تأخراً، العلف الذي يخرج دون حساب، المعامل المحسوب مرة في السنة، والدفتر الذي لا يعيد قراءته أحد.",
        "**ما يُقاس**: النفوق لكل يوم وتراكمياً؛ متوسط الوزن لكل أسبوع؛ معامل التحويل؛ العلف المستهلَك لكل طائر؛ كلفة الكيلوغرام الحي؛ الهامش لكل فوج؛ والفرق بين العنابر.",
        "**ما تفعله Symloop**: تأطير عنابركم وأهدافكم، تطبيق الإدخال، الوزن والمعامل، المخزون، التنبيهات، الحصيلة لكل فوج، وحسابات المربّين المتعاقدين، بالعربية والفرنسية.",
      ], faq: [
        { q: "كيف تُسيَّر مدجنة الدجاج اللاحم؟", a: "بمسك سجل لكل فوج، تسجيل النافق والعلف كل صباح، الوزن كل أسبوع، وحساب معامل التحويل وكلفة الكيلوغرام والفوج ينمو، لا بعد البيع." },
        { q: "أي برنامج لتربية الدواجن؟", a: "برنامج يمسك الأفواج، سجل اليوم على الهاتف، الوزن، مخزون العلف، والحصيلة لكل فوج، ويشتغل دون شبكة في العنبر." },
        { q: "كيف يُحسب معامل التحويل؟", a: "بقسمة وزن العلف الموزَّع على الوزن الحي المنتَج. في المثال: 41040 كلغ من العلف لـ22800 كلغ من الدجاج، أي 1,80." },
        { q: "كيف تُحسب كلفة كيلوغرام الدجاج؟", a: "بجمع الكتكوت، العلف، وباقي تكاليف الفوج، ثم القسمة على الوزن الحي المباع. في المثال، بأسعار خيالية: 200,8 ديناراً للكيلوغرام." },
        { q: "أي معدل نفوق يُعدّ عادياً؟", a: "ذلك يتوقف على السلالة، الفصل، والعنبر، ويُناقَش مع بيطريكم. والبرنامج لا يحدّد معياراً: يقارن كل يوم بأيامكم السبعة السابقة وبأفواجكم الماضية." },
        { q: "كيف يُكتشف مشكل صحي أبكر؟", a: "بالإدخال اليومي وعتبة تنبيه: في المثال، ينطلق التنبيه في اليوم 19، يومين قبل القمة. أما السبب فمن شأن البيطري." },
        { q: "هل تلزم الإنترنت في العنبر؟", a: "لا. الإدخال يتم دون اتصال على الهاتف ويتزامن فور عودة الشبكة." },
        { q: "من يُدخل الأرقام؟", a: "الشخص الذي يعتني بالعنبر، في دقيقة، بأربعة أرقام. وإذا طلب الإدخال أكثر، لن يتم كل يوم." },
        { q: "هل يمكن مقارنة عدة عنابر أو عدة أفواج؟", a: "نعم، وهي الفائدة الرئيسية منذ العنبر الثاني: العلف نفسه، المصدر نفسه، ومعاملات مختلفة تُظهر أين يُنظر." },
        { q: "هل يناسب البرنامج متعاملاً مع مربّين متعاقدين؟", a: "نعم: حساب لكل مربٍّ متعاقد، بالكتاكيت والعلف المسلَّمة له، التسليمات، والتصفية، وأرقام الفوج نفسها لكل واحد." },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: "التنبيه لا يشرح شيئاً: يجعل البيطري يأتي يومين أبكر." },
      { after: 3, text: "عُشران من المعامل، آلاف الكيلوغرامات من العلف، ونصف الهامش." },
    ],
    cta: { eyebrow: "قولوا لنا كم عنبراً، كم فوجاً في السنة، وما تسجّلونه اليوم: نبدأ بأسبوع تأطير", title: "فوج تُكتشف خسارته بعد البيع، نفوق يُرى متأخراً، علف دون حساب، عدة عنابر تُقارَن، أو مدجنة تقيمونها في الجزائر من فرنسا", body: "Symloop تبني الأداة التي تناسب مدجنتكم: سجل اليوم، الوزن، المعامل، المخزون، التنبيهات، والحصيلة لكل فوج. صِفوا لنا عنابركم، مورّديكم، ودفتركم الحالي." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.cout, kind: '2027', name: 'كلفة المنتوج النهائي: المكوّنات، المردود، وكلفة الورشة' },
      { href: L.agro, kind: '2027', name: 'برنامج الصناعة الغذائية: تتبّع الدفعات، المردود، والمراقبات' },
      { href: L.horsligne, kind: '2027', name: 'التطبيق دون اتصال: قاعدة محلية، تزامن، وتعارضات' },
      { href: L.dashboard, kind: '2027', name: 'لوحة القيادة في الزمن الحقيقي: تعريف لكل رقم' },
    ] },
  },
};

const KEYWORDS = "comment gérer une ferme de poulet, comment gérer une ferme de poulets de chair algérie 2027, logiciel gestion élevage avicole, logiciel de gestion d'élevage de poulet, logiciel avicole, logiciel de gestion de ferme avicole, calcul indice de consommation poulet, formule indice de consommation poulet de chair, coût de revient poulet de chair, suivi de bande poulet, broiler farm management software algeria, poultry farm software, feed conversion ratio calculation, flock mortality tracking, cost per kilo broiler, برنامج تربية الدواجن, تسيير مدجنة الدجاج اللاحم, تربية الدجاج اللاحم في الجزائر, معامل التحويل الغذائي, كلفة كيلوغرام الدجاج, Symloop";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
