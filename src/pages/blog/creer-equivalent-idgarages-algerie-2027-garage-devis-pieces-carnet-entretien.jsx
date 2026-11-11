import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/creer-equivalent-idgarages-algerie-2027-garage-devis-pieces-carnet-entretien.mjs';

const SLUG = 'creer-equivalent-idgarages-algerie-2027-garage-devis-pieces-carnet-entretien';
const FIGURES = ['journey', 'stack', 'atelier', 'pieces', 'models'];
const DATE = '2026-11-01';

const CONTENT = {
  fr: {
    kind: 'Série · Vu en France #10', title: "Logiciel garage automobile en Algérie (2027) : devis par ligne, accord à distance, origine des pièces et carnet d’entretien",
    dek: "En France, on compare trois garages en ligne, on réserve un créneau, et la facture ressemble au devis. En Algérie, le prix se donne au téléphone, le travail en plus se découvre à la caisse, et personne ne sait vraiment d'où vient la pièce montée. Ce qu'une plateforme doit faire à chaque moment de la réparation, ce qu'il faut construire en premier, le calcul qui la justifie, la règle sur l'origine des pièces, et le modèle à choisir pour 2027.",
    publishedAt: 'Novembre 2026', readTime: '11 min de lecture', author: 'Symloop', about: ['Garage automobile', 'Logiciel garage', 'Pièces détachées', 'Diaspora', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Un logiciel de garage automobile en Algérie en 2027, l'équivalent d'iDGarages, n'est pas d'abord un comparateur de garages : c'est **l'outil de l'atelier**, un dossier par véhicule, un devis écrit ligne par ligne avec l'origine de chaque pièce, l'accord du client donné sur son téléphone avec la photo de la pièce usée, et un carnet d'entretien qui garde tout. Un comparateur ne peut afficher des prix justes que si les devis sont comparables ; en Algérie, ils ne le sont pas encore. Commencer par l'atelier, c'est ce qui rend le reste possible, y compris pour **le fils qui, depuis Lyon, paie la réparation de la voiture de ses parents à Sétif**.",
      "Ce guide est le dixième de la série « Vu en France, à construire en Algérie », après [la réservation des salons de beauté](/blog/creer-equivalent-planity-algerie-2027-reservation-salon-beaute-acompte-mariees/) et [la location de voitures](/blog/creer-plateforme-location-voiture-algerie-2027-reservation-caution-etat-des-lieux/). Il s'adresse au fondateur de la diaspora qui veut lancer la plateforme, et au gérant de garage, de réseau ou de flotte qui veut des devis acceptés plus vite et des clients qui reviennent.",
    ],
    sections: [
      { heading: 'Pourquoi on se méfie du garage, et pourquoi on y va de plus en plus', body: [
        "Le scénario est connu. On appelle pour un bruit au freinage ; le mécanicien annonce un prix « à peu près ». Le lendemain, il rappelle : il faut aussi les disques. Le surlendemain, la facture est plus lourde que les deux appels réunis, et la pièce montée n'a ni marque ni boîte. **Rien de cela n'est forcément malhonnête : c'est ce qui arrive quand le devis vit au téléphone, l'accord dans un souvenir, et l'origine de la pièce nulle part.**",
        "La demande, elle, ne baisse pas. L'ONS comptait plus de **6,4 millions de véhicules** à fin 2018, et aucune statistique publique consolidée plus récente n'est disponible. Les importations de véhicules neufs ont été quasiment gelées entre 2017 et 2023, et ont repris à un rythme encore limité : 96 418 véhicules importés en 2025, selon le ministre de l'Industrie. On garde sa voiture plus longtemps, donc on l'entretient plus. Les pièces, elles, ont été rares : selon un responsable du secteur cité par Algérie360 en février 2025, le stock national ne couvrait fin 2024 que 45 % de la demande, et le nombre d'importateurs avait baissé de 60 % en quelques années.",
        "Et la contrefaçon reste un sujet : les Douanes ont saisi 387 026 articles contrefaits sur les neuf premiers mois de 2025, toutes catégories confondues. La part des pièces automobiles contrefaites, elle, n'est pas mesurée de façon fiable ; les estimations publiées vont d'environ 6 % à 50 % selon les sources et les années, ce qui veut surtout dire que personne ne sait. **Dans ce contexte, le garage qui écrit l'origine de chaque pièce sur son devis a un avantage que ses voisins n'ont pas.**",
      ] },
      { heading: "Ce qu'iDGarages a construit, et ce qui a déjà été tenté en Algérie", body: [
        "En France, iDGarages et Vroomly comparent des garages et prennent des rendez-vous en ligne. La presse professionnelle prêtait à iDGarages environ 4 300 garages partenaires et 8 000 rendez-vous par mois au début des années 2020, et Vroomly a lancé une offre d'outils pour les garages eux-mêmes. Détail révélateur : au moment de la réservation, iDGarages n'affiche qu'un montant total estimatif ; le détail du devis est fourni par le garage le jour du rendez-vous. **Même en France, le prix comparé repose sur des devis normalisés : des temps de main-d'œuvre de référence et des catalogues de pièces par véhicule, que les garages utilisent déjà.**",
        "En Algérie, l'idée a déjà été tentée. Otretien.com s'est présenté en janvier 2021 comme la première plateforme d'entretien et de réparation automobile du pays, avec plus de 1 000 professionnels annoncés et une quinzaine de demandes de devis par jour, selon Algérie Eco. Nous ne savons pas où en est ce service aujourd'hui. Mais la leçon est claire : **un annuaire de garages sans outil d'atelier ne peut afficher que des prix approximatifs**, et un prix approximatif, c'est exactement ce dont le client se méfie déjà.",
      ] },
      { heading: 'Une réparation qui inspire confiance, en six moments', body: [
        "La plateforme doit tenir chacun de ces six moments. Les trois premiers peuvent se faire à distance, les trois derniers à l'atelier.",
      ], visual: 'journey', after: [
        "**La demande** part de la plaque ou du numéro de châssis, pour que le dossier du véhicule s'ouvre avec son historique, du symptôme décrit avec les mots du client, et d'une vidéo du bruit, qui vaut souvent mieux qu'une description. **Le devis par ligne** sépare chaque pièce, avec sa référence, son origine et son prix, et la main-d'œuvre en heures. **L'accord** se donne sur le téléphone : le client voit la photo de la pièce usée, signe, et cet accord est horodaté. Si le mécanicien découvre autre chose en démontant, il envoie une nouvelle photo et un avenant ; **aucun travail en plus sans un deuxième accord.**",
        "**Les pièces** sont commandées ou réservées avant que la voiture monte sur le pont : c'est ce qui évite qu'elle y reste deux jours. **À la restitution**, l'ancienne pièce est montrée ou rendue, et la facture reprend le devis, plus les avenants acceptés, rien d'autre. **Le carnet** garde l'historique, la garantie de chaque pièce, et envoie le rappel de la prochaine vidange au bon kilométrage. C'est ce dernier moment qui fait revenir le client sans publicité.",
      ] },
      { heading: "Ce qu'il faut construire : l'outil de l'atelier d'abord", body: [
        "La tentation est de commencer par le beau site de comparaison. C'est l'erreur qui fait échouer la plupart des projets de ce type.",
      ], visual: 'stack', after: [
        "**Côté client**, une demande et un devis en arabe et en français, avec photos et vidéo, sans créer de compte ; l'accord signé sur le téléphone et l'acompte, en dinars ou en euros. **La plateforme** tient le dossier véhicule, le catalogue des pièces avec leur origine, et le planning des ponts : quel mécanicien, combien de temps, et quelle voiture attend une pièce. **Côté atelier**, une tablette où le mécanicien prend les photos avant et après, enregistre son temps et soumet le travail en plus au client ; le stock et les fournisseurs ; la caisse qui déduit l'acompte et imprime la garantie.",
        "**Le socle** est à votre nom, avec une règle simple : un devis signé ne se modifie pas, il reçoit un avenant que le client accepte. Une fois les devis normalisés, un [agent IA](/blog/agent-ia-entreprise-algerie-2027-par-ou-commencer-ce-qui-marche/) peut répondre sur WhatsApp à « combien pour une vidange sur une Clio 4 ? » avec le vrai prix du garage, en arabe ou en français, et proposer un créneau ; avant, il répondrait aussi vite que faux.",
      ] },
      { heading: "Le calcul qui justifie l'outil", body: [
        "Le gérant demande, à juste titre, ce que l'outil lui rapporte. Voici le calcul que nous faisons avec lui, sur ses propres chiffres.",
      ], visual: 'atelier', after: [
        "Prenons un atelier de quatre ponts, ouvert neuf heures par jour, vingt-six jours par mois : **936 heures-pont** à vendre. Une partie de ces heures part en attente : la voiture est démontée, sur le pont, et attend que le client rappelle pour donner son accord, ou que la pièce arrive du fournisseur. Si 60 % des heures sont facturées dans cette situation, et 75 % quand l'accord arrive en photo dans l'heure et que la pièce est réservée avant, l'écart est de **140 heures facturables par mois**, soit environ 280 000 DA à 2 000 DA l'heure, sans un mécanicien de plus.",
        "C'est un exemple sur des hypothèses, pas une mesure du marché : les taux et le prix de l'heure sont à remplacer par ceux de l'atelier. Mais le mécanisme est toujours le même : **ce qui coûte, ce n'est pas le temps de travail, c'est le temps où une voiture immobilise un pont sans que personne n'y travaille.** Un garage qui facture au forfait plutôt qu'à l'heure fait le même calcul en nombre de voitures sorties par jour.",
      ] },
      { heading: "L'origine des pièces : la règle qui fait la confiance", body: [
        "C'est la partie que les clients regardent en premier, et celle que les logiciels de garage du marché gèrent le moins bien pour l'Algérie.",
      ], visual: 'pieces', after: [
        "La règle tient en une phrase : **l'origine figure sur chaque ligne du devis et de la facture.** Pièce d'origine constructeur, qualité équivalente d'un équipementier, adaptable, ou occasion de casse : chacune a sa place, et le client choisit en connaissance de cause, selon la pièce, l'âge de la voiture et son budget. Une plaquette adaptable de marque connue sur une voiture de quinze ans peut être un choix raisonnable ; le même choix, non écrit, devient un soupçon au premier bruit.",
        "Pour les pièces de sécurité, freins, direction, pneus, l'outil peut **refuser une ligne sans marque ni référence**, et le garage l'écrit. La garantie suit la pièce : sa durée s'imprime sur la facture et se retrouve dans le carnet, avec la date et le kilométrage de pose. Ce n'est pas une contrainte réglementaire que nous décrivons ici, c'est une règle commerciale : c'est elle qui permet au garage de dire « voilà ce que j'ai monté, et voilà pourquoi ».",
      ] },
      { heading: 'Payer la réparation de la voiture des parents, depuis la France', body: [
        "C'est un cas que la diaspora connaît bien. La voiture des parents fait un bruit ; c'est l'enfant installé en France qui paie, sans voir la voiture, sans connaître le garage, au téléphone avec un père qui répète ce que le mécanicien a dit. Avec l'outil, le garage envoie un lien : **le devis ligne par ligne, la photo de la pièce usée, l'origine des pièces proposées**. L'enfant valide depuis Lyon, paie l'acompte en euros ou en dinars, et reçoit la facture et les photos de la pièce posée. Les parents n'ont qu'à déposer la voiture.",
        "Encaisser en euros pour un service rendu en Algérie demande une organisation à deux pays, que nous avons décrite pour [l'équivalent de Booking](/blog/creer-equivalent-booking-algerie-2027-reservation-hotels-depuis-la-france/) et qui se valide avant le développement. Mais le plus important n'est pas le paiement : c'est que **le garage devient le seul de la ville où l'on peut faire réparer une voiture depuis l'étranger en sachant ce qu'on paie.** Pour un garage qui veut se distinguer, c'est un argument plus fort qu'une remise.",
      ] },
      { heading: 'Quel modèle construire', body: [
        "Six modèles reviennent dans les projets qu'on nous présente. Ils ne rapportent pas de la même façon et ne cassent pas au même endroit.",
      ], visual: 'models', after: [
        "**Le garage ou le réseau avec son propre outil** est le point de départ le plus solide : devis acceptés plus vite, clients qui reviennent, données qui restent chez lui. **Le logiciel par abonnement pour garages** se vend atelier par atelier, avec une formation sur place ; c'est le modèle que nous avons détaillé dans [lancer un SaaS en Algérie en 2027](/blog/lancer-un-saas-en-algerie-2027-abonnement-paiement-calendrier/). **Le comparateur** ne vaut que si les devis qu'il compare sont normalisés. **La vente de pièces en ligne** bute sur la compatibilité des références et la contrefaçon : sans catalogue par véhicule, elle multiplie les retours.",
        "**L'entretien des flottes d'entreprise** est souvent le modèle le plus rentable au départ : des contrats annuels, des volumes prévisibles, un gestionnaire de flotte qui valide les devis à distance. Il rejoint ce que nous avons décrit pour [les plateformes de livraison](/blog/plateforme-livraison-transport-algerie-2027-livreurs-cod-retours/) et pour [les agences de location](/blog/creer-plateforme-location-voiture-algerie-2027-reservation-caution-etat-des-lieux/), dont les voitures doivent repartir vite. **Le mécanicien à domicile** sert les petites interventions et les urgences. Nous conseillons de commencer par la première ligne, d'ouvrir l'outil à d'autres garages, et de garder le comparateur pour le moment où les devis sont comparables.",
      ] },
      { heading: 'Le calendrier pour 2027', body: [
        "Douze semaines environ séparent le cadrage d'un pilote dans un premier garage. **Novembre : le cadrage écrit**, et le dossier de web-marchand pour le paiement CIB et Edahabia, lancé dès la première semaine, parce que son délai bancaire ne dépend ni de vous ni de nous. **Décembre-janvier : le dossier véhicule, le devis par ligne, la tablette d'atelier.** **Février : le pilote** dans un garage, en double avec le carnet papier pendant deux semaines, le temps que les mécaniciens prennent le réflexe de la photo. **Mars-avril : le stock, les fournisseurs, le carnet et les rappels.**",
        "L'objectif est d'être rodé **avant l'été**, quand les révisions avant les longs trajets, la climatisation et les voitures de location remplissent souvent les ateliers. C'est cohérent avec les délais que nous donnons dans [combien de temps pour développer une application en 2027](/blog/combien-de-temps-pour-developper-application-plateforme-algerie-2027-delais-reels/). Commencer en avril, c'est découvrir l'outil en pleine saison.",
      ] },
      { heading: 'Ce qui fait échouer ce genre de projet', body: [], list: [
        "**Commencer par le comparateur.** Sans devis normalisés, il affiche des prix que les garages ne tiennent pas, et le premier client trompé ne revient pas.",
        "**Un devis global.** « Freins : 18 000 DA » ne dit rien. Une ligne par pièce, avec référence, origine et prix, et la main-d'œuvre en heures.",
        "**Du travail en plus sans nouvel accord.** C'est la première source de disputes. Photo, avenant, signature, puis seulement le travail.",
        "**L'origine des pièces non écrite.** Une pièce adaptable assumée est un choix ; une pièce adaptable cachée est un soupçon.",
        "**Des mécaniciens qui ne prennent pas les photos.** L'outil doit leur faire gagner du temps, pas leur en prendre : trois photos, un bouton.",
        "**Une voiture qui attend sur le pont.** Pièces réservées avant, accord en photo dans l'heure.",
        "**Les comptes au nom du prestataire.** Serveur, domaine, données et compte web-marchand à votre nom, dès la première semaine.",
      ] },
      { heading: 'Questions fréquentes', body: [], faq: [
        { q: "Existe-t-il un iDGarages algérien ?", a: "Des tentatives existent, comme Otretien.com, lancé en 2021 comme plateforme de devis et de rendez-vous ; nous ne connaissons pas son activité actuelle. À notre connaissance, aucune plateforme algérienne ne combine aujourd'hui devis normalisé par ligne, origine des pièces, accord à distance et carnet d'entretien." },
        { q: "Pourquoi ne pas commencer directement par un comparateur de garages ?", a: "Parce qu'un comparateur affiche des prix, et que des prix ne sont comparables que si les devis le sont : mêmes lignes, mêmes temps de main-d'œuvre, même origine de pièces. Tant que les garages font leurs devis au téléphone, le comparateur affiche des approximations, et le client s'en méfie." },
        { q: "Comment un client en France peut-il valider et payer une réparation en Algérie ?", a: "Par un lien envoyé par le garage : devis ligne par ligne, photo de la pièce usée, origine des pièces proposées. Le client signe sur son téléphone et paie l'acompte, en dinars par CIB ou Edahabia, ou en euros avec une organisation à deux pays à valider avant le développement." },
        { q: "Un logiciel de garage du marché ne suffit-il pas ?", a: "Parfois. S'il gère le dossier véhicule, le devis par ligne et le stock, et qu'il accepte le paiement de vos clients, nous vous le disons. Le sur-mesure se justifie pour l'accord à distance avec photos, l'origine des pièces sur chaque ligne, le paiement en dinars et en euros, un réseau de garages, ou l'entretien de flottes d'entreprise." },
        { q: "Faut-il une application mobile pour les clients ?", a: "Pas au lancement. Un lien de devis et un carnet consultable sur le web suffisent ; l'application vient quand les clients reviennent et que les rappels d'entretien comptent. Pour l'atelier, la tablette passe en premier." },
        { q: "Combien de temps faut-il pour être prêt ?", a: "Environ douze semaines entre le cadrage et un pilote dans un premier garage, avec le dossier véhicule, le devis par ligne et la tablette d'atelier. Le stock, les fournisseurs et le carnet viennent ensuite. Pour être rodé avant l'été 2027, il faut commencer en novembre 2026." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "Un annuaire de garages sans outil d'atelier ne peut afficher que des prix approximatifs." },
      { after: 4, text: "Ce qui coûte, ce n'est pas le temps de travail : c'est le temps où une voiture immobilise un pont sans que personne n'y travaille." },
    ],
    cta: { eyebrow: 'Décrivez votre projet', title: "Garage, réseau, flotte d'entreprise ou plateforme à lancer, la ville, le nombre de ponts et de mécaniciens, comment vous faites aujourd'hui vos devis et vos commandes de pièces, et la date que vous visez. Nous vous rendons le périmètre, le calendrier et le prix total, écrits, avant de commencer.", body: "Symloop construit des logiciels d'atelier, des plateformes de devis et de rendez-vous, et des applications de suivi d'entretien pour les garages, les réseaux et les flottes algériens, en arabe, en français et en anglais, avec le paiement en dinars et en euros. Ingénieurs seniors à Alger et Sétif, prix total et calendrier écrits, serveur et données à votre nom." },
    related: { label: 'À lire ensuite', items: [
      { href: '/blog/creer-equivalent-planity-algerie-2027-reservation-salon-beaute-acompte-mariees/', kind: 'Série #09', name: "Créer l'équivalent de Planity en Algérie en 2027" },
      { href: '/blog/creer-plateforme-location-voiture-algerie-2027-reservation-caution-etat-des-lieux/', kind: 'Série #08', name: 'Créer une plateforme de location de voitures en 2027' },
      { href: '/blog/lancer-un-saas-en-algerie-2027-abonnement-paiement-calendrier/', kind: '2027', name: 'Lancer un SaaS en Algérie en 2027' },
      { href: '/blog/agent-ia-entreprise-algerie-2027-par-ou-commencer-ce-qui-marche/', kind: '2027', name: "Un agent IA pour l'entreprise en 2027" },
    ] },
  },
  en: {
    kind: 'Series · Seen in France #10', title: "Auto garage software in Algeria (2027): itemised quote, remote approval, origin of parts and service book",
    dek: "In France you compare three garages online, book a slot, and the invoice looks like the quote. In Algeria the price is given on the phone, the extra work is discovered at the till, and nobody really knows where the fitted part comes from. What a platform must do at each moment of a repair, what to build first, the calculation that justifies it, the rule on part origin, and the model to choose for 2027.",
    publishedAt: 'November 2026', readTime: '11 min read', author: 'Symloop', about: ['Car repair', 'Garage software', 'Spare parts', 'Diaspora', 'Algeria 2027'],
    intro: [
      "**Short answer.** The iDGarages of Algeria in 2027 is not first a garage comparison site: it is **the workshop's tool**, a file per vehicle, a quote written line by line with the origin of each part, the customer's approval given on a phone with a photo of the worn part, and a service book that keeps everything. A comparison site can only show fair prices if quotes are comparable; in Algeria they are not yet. Starting with the workshop is what makes the rest possible, including for **the son in Lyon who pays for the repair of his parents' car in Sétif**.",
      "This guide is the tenth in the series \"Seen in France, to build in Algeria\", after [beauty salon booking](/blog/creer-equivalent-planity-algerie-2027-reservation-salon-beaute-acompte-mariees/) and [car rental](/blog/creer-plateforme-location-voiture-algerie-2027-reservation-caution-etat-des-lieux/). It is written for the diaspora founder who wants to launch the platform, and for the manager of a garage, network or fleet who wants quotes accepted faster and customers who come back.",
    ],
    sections: [
      { heading: 'Why people distrust garages, and why they use them more and more', body: [
        "The scenario is familiar. You call about a noise when braking; the mechanic gives a price \"roughly\". The next day he calls back: the discs too. The day after, the invoice is heavier than both calls together, and the fitted part has neither brand nor box. **None of this is necessarily dishonest: it is what happens when the quote lives on the phone, the approval in a memory, and the origin of the part nowhere.**",
        "Demand, meanwhile, is not falling. The ONS counted more than **6.4 million vehicles** at the end of 2018, and no more recent consolidated public statistic is available. New-vehicle imports were almost frozen between 2017 and 2023 and have resumed at a still limited pace: 96,418 vehicles imported in 2025, according to the Minister of Industry. People keep their cars longer, so they maintain them more. Parts have been scarce: according to a sector official quoted by Algérie360 in February 2025, national stock covered only 45% of demand at the end of 2024, and the number of importers had fallen by 60% in a few years.",
        "Counterfeiting remains an issue: customs seized 387,026 counterfeit items in the first nine months of 2025, all categories combined. The share of counterfeit car parts is not reliably measured; published estimates range from about 6% to 50% depending on sources and years, which mainly means nobody knows. **In that context, the garage that writes the origin of each part on its quote has an advantage its neighbours lack.**",
      ] },
      { heading: 'What iDGarages built, and what has already been tried in Algeria', body: [
        "In France, iDGarages and Vroomly compare garages and take bookings online. The trade press credited iDGarages with about 4,300 partner garages and 8,000 bookings a month in the early 2020s, and Vroomly launched a toolset for the garages themselves. A telling detail: at booking, iDGarages shows only an estimated total; the detailed quote is provided by the garage on the day. **Even in France, compared prices rest on standardised quotes: reference labour times and parts catalogues per vehicle, which garages already use.**",
        "In Algeria the idea has been tried. Otretien.com presented itself in January 2021 as the country's first car maintenance and repair platform, with more than 1,000 professionals announced and about fifteen quote requests a day, according to Algérie Eco. We do not know where the service stands today. But the lesson is clear: **a garage directory without a workshop tool can only show approximate prices**, and an approximate price is exactly what the customer already distrusts.",
      ] },
      { heading: 'A repair people can trust, in six moments', body: [
        "The platform must hold each of these six moments. The first three can happen remotely, the last three at the workshop.",
      ], visual: 'journey', after: [
        "**The request** starts from the plate or chassis number, so the vehicle file opens with its history, the symptom in the customer's own words, and a video of the noise, often worth more than a description. **The itemised quote** separates each part, with reference, origin and price, and labour in hours. **Approval** is given on the phone: the customer sees the photo of the worn part, signs, and the approval is time-stamped. If the mechanic finds something else when dismantling, he sends a new photo and an amendment; **no extra work without a second approval.**",
        "**Parts** are ordered or reserved before the car goes up on the lift: that is what stops it staying there two days. **At handover**, the old part is shown or returned, and the invoice repeats the quote plus the accepted amendments, nothing else. **The service book** keeps the history and the warranty of each part, and sends the next oil-change reminder at the right mileage. That last moment brings the customer back without advertising.",
      ] },
      { heading: "What to build: the workshop's tool first", body: [
        "The temptation is to start with the beautiful comparison site. It is the mistake that sinks most projects of this kind.",
      ], visual: 'stack', after: [
        "**Customer side**, a request and quote in Arabic and French, with photos and video, no account needed; approval signed on the phone and the deposit, in dinars or euros. **The platform** holds the vehicle file, the parts catalogue with origins, and the lift schedule: which mechanic, how long, and which car is waiting for a part. **Workshop side**, a tablet where the mechanic takes before and after photos, logs time and sends extra work to the customer; stock and suppliers; the till that deducts the deposit and prints the warranty.",
        "**The foundation** is in your name, with one simple rule: a signed quote is never edited, it gets an amendment the customer accepts. Once quotes are standardised, an [AI agent](/blog/agent-ia-entreprise-algerie-2027-par-ou-commencer-ce-qui-marche/) can answer \"how much for an oil change on a Clio 4?\" on WhatsApp with the garage's real price, in Arabic or French, and offer a slot; before that, it would answer as fast as it answers wrong.",
      ] },
      { heading: 'The calculation that justifies the tool', body: [
        "The manager rightly asks what the tool brings him. Here is the calculation we do with him, on his own numbers.",
      ], visual: 'atelier', after: [
        "Take a workshop with four lifts, open nine hours a day, twenty-six days a month: **936 lift-hours** to sell. Some of those hours go to waiting: the car is dismantled, on the lift, waiting for the customer to call back with approval, or for the part to arrive. If 60% of hours are billed in that situation, and 75% when approval comes by photo within the hour and the part is reserved first, the gap is **140 billable hours a month**, about DA 280,000 at DA 2,000 an hour, without one more mechanic.",
        "It is an example on assumptions, not a market measure: the rates and hourly price should be replaced by the workshop's own. But the mechanism is always the same: **what costs is not working time, it is the time a car ties up a lift with nobody working on it.** A garage that charges by the job rather than by the hour does the same calculation in cars out per day.",
      ] },
      { heading: 'The origin of parts: the rule that builds trust', body: [
        "It is the part customers look at first, and the one off-the-shelf garage software handles least well for Algeria.",
      ], visual: 'pieces', after: [
        "The rule fits in one sentence: **the origin appears on every line of the quote and the invoice.** Manufacturer original, equivalent quality from an OE supplier, aftermarket, or used from a salvage yard: each has its place, and the customer chooses knowingly, depending on the part, the age of the car and the budget. A known-brand aftermarket brake pad on a fifteen-year-old car can be a reasonable choice; the same choice, unwritten, becomes a suspicion at the first noise.",
        "For safety parts, brakes, steering, tyres, the tool can **refuse a line with no brand or reference**, and the garage says so in writing. The warranty follows the part: its length is printed on the invoice and kept in the service book, with the date and mileage of fitting. This is not a regulatory constraint we are describing, it is a commercial rule: it lets the garage say \"here is what I fitted, and here is why\".",
      ] },
      { heading: "Paying for your parents' car repair, from France", body: [
        "It is a case the diaspora knows well. The parents' car makes a noise; it is the child living in France who pays, without seeing the car, without knowing the garage, on the phone with a father repeating what the mechanic said. With the tool, the garage sends a link: **the itemised quote, the photo of the worn part, the origin of the proposed parts**. The child approves from Lyon, pays the deposit in euros or dinars, and receives the invoice and photos of the fitted part. The parents just drop off the car.",
        "Collecting euros for a service performed in Algeria requires a two-country setup, which we described for [the Booking equivalent](/blog/creer-equivalent-booking-algerie-2027-reservation-hotels-depuis-la-france/) and which is validated before development. But the key is not payment: it is that **the garage becomes the one in town where you can have a car repaired from abroad knowing what you pay for.** For a garage that wants to stand out, that is a stronger argument than a discount.",
      ] },
      { heading: 'Which model to build', body: [
        "Six models come up in the projects presented to us. They do not pay the same way and do not break in the same place.",
      ], visual: 'models', after: [
        "**The garage or network with its own tool** is the soundest starting point: quotes accepted faster, returning customers, data that stays with it. **Subscription software for garages** sells workshop by workshop, with on-site training; it is the model we detailed in [launching a SaaS in Algeria in 2027](/blog/lancer-un-saas-en-algerie-2027-abonnement-paiement-calendrier/). **The comparison site** is only worth something if the quotes it compares are standardised. **Online parts sales** run into reference compatibility and counterfeits: without a catalogue per vehicle, returns multiply.",
        "**Company fleet maintenance** is often the most profitable model at the start: annual contracts, predictable volumes, a fleet manager approving quotes remotely. It connects with what we described for [delivery platforms](/blog/plateforme-livraison-transport-algerie-2027-livreurs-cod-retours/) and [rental agencies](/blog/creer-plateforme-location-voiture-algerie-2027-reservation-caution-etat-des-lieux/), whose cars must go back out quickly. **The mobile mechanic** serves small jobs and emergencies. We advise starting with the first row, opening the tool to other garages, and keeping the comparison site for when quotes are comparable.",
      ] },
      { heading: 'The calendar for 2027', body: [
        "About twelve weeks separate scoping from a pilot in a first garage. **November: written scoping**, and the web-merchant application for CIB and Edahabia payment, filed in the first week, because the bank's timing depends neither on you nor on us. **December-January: the vehicle file, the itemised quote, the workshop tablet.** **February: the pilot** in one garage, alongside the paper book for two weeks, while mechanics build the photo habit. **March-April: stock, suppliers, the service book and reminders.**",
        "The goal is to be run in **before summer**, when pre-trip services, air conditioning and rental cars often fill workshops. This is consistent with the timelines we give in [how long it takes to build an app in 2027](/blog/combien-de-temps-pour-developper-application-plateforme-algerie-2027-delais-reels/). Starting in April means discovering the tool in peak season.",
      ] },
      { heading: 'What makes this kind of project fail', body: [], list: [
        "**Starting with the comparison site.** Without standardised quotes it shows prices garages do not honour, and the first misled customer does not come back.",
        "**A lump-sum quote.** \"Brakes: DA 18,000\" says nothing. One line per part, with reference, origin and price, and labour in hours.",
        "**Extra work without new approval.** It is the first source of disputes. Photo, amendment, signature, and only then the work.",
        "**Part origin not written.** An aftermarket part chosen openly is a choice; a hidden one is a suspicion.",
        "**Mechanics who do not take the photos.** The tool must save them time, not cost it: three photos, one button.",
        "**A car waiting on the lift.** Parts reserved first, approval by photo within the hour.",
        "**Accounts in the provider's name.** Server, domain, data and web-merchant account in your name, from the first week.",
      ] },
      { heading: 'Frequently asked questions', body: [], faq: [
        { q: "Is there an Algerian iDGarages?", a: "Attempts exist, such as Otretien.com, launched in 2021 as a quote and booking platform; we do not know its current activity. As far as we know, no Algerian platform today combines a standardised itemised quote, part origin, remote approval and a service book." },
        { q: "Why not start directly with a garage comparison site?", a: "Because a comparison site shows prices, and prices are only comparable if quotes are: same lines, same labour times, same part origins. As long as garages quote by phone, the comparison site shows approximations, and customers distrust them." },
        { q: "How can a customer in France approve and pay for a repair in Algeria?", a: "Through a link sent by the garage: itemised quote, photo of the worn part, origin of the proposed parts. The customer signs on the phone and pays the deposit, in dinars by CIB or Edahabia, or in euros with a two-country setup to validate before development." },
        { q: "Is off-the-shelf garage software not enough?", a: "Sometimes. If it handles the vehicle file, the itemised quote and stock, and accepts your customers' payments, we will tell you. Custom work is justified for remote approval with photos, part origin on every line, payment in dinars and euros, a network of garages, or company fleet maintenance." },
        { q: "Is a mobile app needed for customers?", a: "Not at launch. A quote link and a service book viewable on the web are enough; the app comes when customers return and service reminders matter. For the workshop, the tablet comes first." },
        { q: "How long does it take to be ready?", a: "About twelve weeks from scoping to a pilot in a first garage, with the vehicle file, the itemised quote and the workshop tablet. Stock, suppliers and the service book come next. To be run in before summer 2027, start in November 2026." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "A garage directory without a workshop tool can only show approximate prices." },
      { after: 4, text: "What costs is not working time: it is the time a car ties up a lift with nobody working on it." },
    ],
    cta: { eyebrow: 'Describe your project', title: "Garage, network, company fleet or platform to launch, the city, the number of lifts and mechanics, how you handle quotes and parts orders today, and the date you are aiming for. We send back the scope, the calendar and the total price, in writing, before we start.", body: "Symloop builds workshop software, quote and booking platforms, and maintenance tracking apps for Algerian garages, networks and fleets, in Arabic, French and English, with payment in dinars and euros. Senior engineers in Algiers and Sétif, total price and calendar in writing, server and data in your name." },
    related: { label: 'Read next', items: [
      { href: '/blog/creer-equivalent-planity-algerie-2027-reservation-salon-beaute-acompte-mariees/', kind: 'Series #09', name: 'Building the Planity of Algeria in 2027' },
      { href: '/blog/creer-plateforme-location-voiture-algerie-2027-reservation-caution-etat-des-lieux/', kind: 'Series #08', name: 'Building a car rental platform in 2027' },
      { href: '/blog/lancer-un-saas-en-algerie-2027-abonnement-paiement-calendrier/', kind: '2027', name: 'Launching a SaaS in Algeria in 2027' },
      { href: '/blog/agent-ia-entreprise-algerie-2027-par-ou-commencer-ce-qui-marche/', kind: '2027', name: 'An AI agent for your company in 2027' },
    ] },
  },
  ar: {
    kind: 'سلسلة · رأيناه في فرنسا #10', title: "برنامج ورشة ميكانيك السيارات في الجزائر (2027): التقدير المفصّل، الموافقة عن بُعد، مصدر القطع ودفتر الصيانة",
    dek: "في فرنسا تقارن ثلاث ورشات عبر الإنترنت، وتحجز موعداً، وتشبه الفاتورة التقدير. في الجزائر يُعطى السعر بالهاتف، ويُكتشف العمل الإضافي عند الدفع، ولا أحد يعرف حقاً من أين جاءت القطعة المركَّبة. ما يجب أن تفعله المنصة في كل لحظة من التصليح، وما يُبنى أولاً، والحساب الذي يبرّره، وقاعدة مصدر القطع، والنموذج الذي يُختار لسنة 2027.",
    publishedAt: 'نوفمبر 2026', readTime: '11 دقيقة قراءة', author: 'Symloop', about: ['ورشة السيارات', 'برنامج الورشة', 'قطع الغيار', 'الجالية', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** مقابل iDGarages في الجزائر سنة 2027 ليس أولاً موقعاً لمقارنة الورشات، بل هو **أداة الورشة**: ملف لكل سيارة، وتقدير مكتوب سطراً بسطر بمصدر كل قطعة، وموافقة الزبون على هاتفه مع صورة القطعة البالية، ودفتر صيانة يحفظ كل شيء. لا يستطيع المقارن عرض أسعار عادلة إلا إذا كانت التقديرات قابلة للمقارنة، وهي ليست كذلك بعد في الجزائر. البدء بالورشة هو ما يجعل الباقي ممكناً، بما في ذلك **للابن الذي يدفع من ليون تصليح سيارة والديه في سطيف**.",
      "هذا الدليل هو العاشر في سلسلة «رأيناه في فرنسا، نبنيه في الجزائر»، بعد [حجز صالونات التجميل](/blog/creer-equivalent-planity-algerie-2027-reservation-salon-beaute-acompte-mariees/) و[كراء السيارات](/blog/creer-plateforme-location-voiture-algerie-2027-reservation-caution-etat-des-lieux/). وهو موجّه لمؤسس من الجالية يريد إطلاق المنصة، ولمسيّر ورشة أو شبكة أو أسطول يريد تقديرات تُقبل أسرع وزبائن يعودون.",
    ],
    sections: [
      { heading: 'لماذا لا نثق في الورشة، ولماذا نذهب إليها أكثر فأكثر', body: [
        "المشهد معروف. تتصل بسبب صوت عند الفرملة، فيعطيك الميكانيكي سعراً «تقريبياً». في الغد يعاود الاتصال: الأقراص أيضاً. وبعد الغد تكون الفاتورة أثقل من المكالمتين معاً، والقطعة المركَّبة بلا علامة ولا علبة. **ليس في هذا بالضرورة غش: هذا ما يحدث عندما يعيش التقدير في الهاتف، والموافقة في الذاكرة، ومصدر القطعة في لا مكان.**",
        "أما الطلب فلا ينخفض. أحصى الديوان الوطني للإحصائيات أكثر من **6,4 مليون مركبة** نهاية 2018، ولا توجد إحصائية عامة موحَّدة أحدث. وقد جُمّد استيراد المركبات الجديدة تقريباً بين 2017 و2023، ثم استؤنف بوتيرة ما تزال محدودة: 96 418 مركبة مستوردة سنة 2025 حسب وزير الصناعة. يحتفظ الناس بسياراتهم مدة أطول، فيصونونها أكثر. وكانت القطع نادرة: حسب مسؤول في القطاع نقلت عنه Algérie360 في فيفري 2025، لم يكن المخزون الوطني يغطي نهاية 2024 سوى 45 % من الطلب، وانخفض عدد المستوردين بـ60 % في سنوات قليلة.",
        "ويبقى التقليد مشكلة: حجزت الجمارك 387 026 سلعة مقلَّدة خلال الأشهر التسعة الأولى من 2025، بكل الأصناف. أما نسبة قطع السيارات المقلَّدة فلا تُقاس بشكل موثوق؛ التقديرات المنشورة تتراوح بين نحو 6 % و50 % حسب المصادر والسنوات، وهذا يعني أساساً أن لا أحد يعرف. **في هذا السياق، الورشة التي تكتب مصدر كل قطعة في تقديرها تملك ميزة لا يملكها جيرانها.**",
      ] },
      { heading: 'ما بنته iDGarages، وما جُرّب في الجزائر', body: [
        "في فرنسا تقارن iDGarages وVroomly بين الورشات وتأخذ المواعيد عبر الإنترنت. نسبت الصحافة المهنية إلى iDGarages نحو 4 300 ورشة شريكة و8 000 موعد شهرياً في بداية العشرينيات، وأطلقت Vroomly أدوات للورشات نفسها. وتفصيل معبّر: عند الحجز لا تعرض iDGarages إلا مبلغاً إجمالياً تقديرياً، وتفاصيل التقدير تقدّمها الورشة يوم الموعد. **حتى في فرنسا، تقوم الأسعار المقارنة على تقديرات موحَّدة: أوقات يد عاملة مرجعية وكتالوجات قطع لكل سيارة تستعملها الورشات أصلاً.**",
        "في الجزائر جُرّبت الفكرة. قدّم Otretien.com نفسه في جانفي 2021 كأول منصة لصيانة وتصليح السيارات في البلاد، مع أكثر من 1 000 مهني معلَن ونحو خمسة عشر طلب تقدير يومياً حسب Algérie Eco. لا نعرف أين وصلت هذه الخدمة اليوم. لكن الدرس واضح: **دليل ورشات دون أداة ورشة لا يعرض إلا أسعاراً تقريبية**، والسعر التقريبي هو بالضبط ما لا يثق فيه الزبون أصلاً.",
      ] },
      { heading: 'تصليح يبعث على الثقة في ست لحظات', body: [
        "يجب أن تمسك المنصة بكل لحظة من هذه اللحظات الست. الثلاث الأولى يمكن أن تتم عن بُعد، والثلاث الأخيرة في الورشة.",
      ], visual: 'journey', after: [
        "**الطلب** ينطلق من رقم اللوحة أو الهيكل، ليُفتح ملف السيارة بسجلها، ومن العَرَض بكلمات الزبون، ومن فيديو للصوت الذي كثيراً ما يغني عن الوصف. **التقدير المفصّل** يفصل كل قطعة بمرجعها ومصدرها وسعرها، واليد العاملة بالساعات. **الموافقة** تُعطى على الهاتف: يرى الزبون صورة القطعة البالية ويوقّع، وتُؤرَّخ الموافقة. وإذا اكتشف الميكانيكي شيئاً آخر عند التفكيك، يرسل صورة جديدة وملحقاً؛ **لا عمل إضافي دون موافقة ثانية.**",
        "**القطع** تُطلب أو تُحجز قبل أن تصعد السيارة إلى الرافعة: هذا ما يمنع بقاءها هناك يومين. **عند التسليم** تُعرض القطعة القديمة أو تُرجع، وتعيد الفاتورة التقدير مع الملاحق المقبولة لا أكثر. **الدفتر** يحفظ السجل وضمان كل قطعة، ويرسل تذكير تغيير الزيت القادم عند الكيلومترات المناسبة. هذه اللحظة الأخيرة هي التي تعيد الزبون دون إشهار.",
      ] },
      { heading: 'ما يجب بناؤه: أداة الورشة أولاً', body: [
        "الإغراء هو البدء بموقع المقارنة الجميل. وهذا هو الخطأ الذي يُفشل أغلب مشاريع هذا النوع.",
      ], visual: 'stack', after: [
        "**جهة الزبون**: طلب وتقدير بالعربية والفرنسية مع صور وفيديو دون إنشاء حساب، والموافقة الموقَّعة على الهاتف والعربون بالدينار أو اليورو. **المنصة** تمسك ملف السيارة، وكتالوج القطع بمصادرها، وجدول الرافعات: أي ميكانيكي، كم من الوقت، وأي سيارة تنتظر قطعة. **جهة الورشة**: لوحة يلتقط فيها الميكانيكي الصور قبل وبعد، ويسجّل وقته، ويعرض العمل الإضافي على الزبون؛ والمخزون والموردون؛ والصندوق الذي يخصم العربون ويطبع الضمان.",
        "**القاعدة** باسمك، مع قاعدة بسيطة: التقدير الموقَّع لا يُعدَّل بل يُضاف إليه ملحق يقبله الزبون. وعندما تصبح التقديرات موحَّدة، يستطيع [وكيل ذكاء اصطناعي](/blog/agent-ia-entreprise-algerie-2027-par-ou-commencer-ce-qui-marche/) أن يجيب على واتساب عن «كم ثمن تغيير الزيت لكليو 4؟» بالسعر الحقيقي للورشة، بالعربية أو الفرنسية، ويقترح موعداً؛ وقبل ذلك سيجيب بسرعة لكن بخطأ.",
      ] },
      { heading: 'الحساب الذي يبرّر الأداة', body: [
        "يسأل المسيّر، وهو محق، عمّا تجلبه له الأداة. هذا هو الحساب الذي نجريه معه على أرقامه.",
      ], visual: 'atelier', after: [
        "لنأخذ ورشة بأربع رافعات، تفتح تسع ساعات يومياً وستة وعشرين يوماً في الشهر: **936 ساعة-رافعة** للبيع. جزء من هذه الساعات يضيع في الانتظار: السيارة مفكَّكة على الرافعة تنتظر أن يعاود الزبون الاتصال ليوافق، أو أن تصل القطعة. إذا فُوترت 60 % من الساعات في هذه الحالة، و75 % عندما تأتي الموافقة بالصورة خلال ساعة وتُحجز القطعة مسبقاً، فالفرق **140 ساعة قابلة للفوترة شهرياً**، أي نحو 280 000 دج بـ2 000 دج للساعة، دون ميكانيكي إضافي.",
        "إنه مثال على فرضيات وليس قياساً للسوق: النسب وسعر الساعة تُستبدل بأرقام الورشة. لكن الآلية دائماً نفسها: **ما يكلّف ليس وقت العمل، بل الوقت الذي تحجز فيه سيارة رافعةً دون أن يشتغل عليها أحد.** والورشة التي تفوتر بالجزاف لا بالساعة تجري الحساب نفسه بعدد السيارات الخارجة يومياً.",
      ] },
      { heading: 'مصدر القطع: القاعدة التي تصنع الثقة', body: [
        "إنه الجزء الذي ينظر إليه الزبائن أولاً، والذي تسيّره برامج الورشات الجاهزة بأقل جودة بالنسبة للجزائر.",
      ], visual: 'pieces', after: [
        "القاعدة في جملة واحدة: **يظهر المصدر في كل سطر من التقدير والفاتورة.** قطعة أصلية من الصانع، أو جودة مكافئة من مورّده، أو متكيّفة، أو مستعملة من التفكيك: لكل منها مكانها، ويختار الزبون عن بيّنة حسب القطعة وعمر السيارة وميزانيته. وسادة فرامل متكيّفة من علامة معروفة لسيارة عمرها خمس عشرة سنة قد تكون اختياراً معقولاً؛ والاختيار نفسه غير مكتوب يصبح شبهة عند أول صوت.",
        "ولقطع السلامة، الفرامل والمقود والعجلات، يمكن للأداة **أن ترفض سطراً دون علامة ولا مرجع**، وتكتب الورشة ذلك. والضمان يتبع القطعة: مدته تُطبع في الفاتورة وتُحفظ في الدفتر مع تاريخ التركيب والكيلومترات. ما نصفه هنا ليس قيداً تنظيمياً بل قاعدة تجارية: هي التي تسمح للورشة أن تقول «هذا ما ركّبته، وهذا سببه».",
      ] },
      { heading: 'دفع تصليح سيارة الوالدين من فرنسا', body: [
        "حالة تعرفها الجالية جيداً. سيارة الوالدين تُصدر صوتاً، والابن المقيم في فرنسا هو من يدفع، دون أن يرى السيارة ولا يعرف الورشة، على الهاتف مع أب يكرر ما قاله الميكانيكي. مع الأداة ترسل الورشة رابطاً: **التقدير سطراً بسطر، صورة القطعة البالية، مصدر القطع المقترحة**. يوافق الابن من ليون، ويدفع العربون باليورو أو الدينار، ويتلقى الفاتورة وصور القطعة المركَّبة. وما على الوالدين إلا إيداع السيارة.",
        "تحصيل اليورو مقابل خدمة تُقدَّم في الجزائر يتطلب تنظيماً بين بلدين، وصفناه في [مقابل Booking](/blog/creer-equivalent-booking-algerie-2027-reservation-hotels-depuis-la-france/) ويُتحقق منه قبل التطوير. لكن الأهم ليس الدفع، بل أن **تصبح الورشة الوحيدة في المدينة التي يمكن تصليح سيارة فيها من الخارج مع معرفة ما يُدفع.** وللورشة التي تريد التميّز، هذه حجة أقوى من أي تخفيض.",
      ] },
      { heading: 'أي نموذج تبني', body: [
        "ستة نماذج تتكرر في المشاريع التي تُعرض علينا. لا تربح بالطريقة نفسها ولا تنكسر في الموضع نفسه.",
      ], visual: 'models', after: [
        "**الورشة أو الشبكة بأداتها الخاصة** هي نقطة الانطلاق الأمتن: تقديرات تُقبل أسرع، زبائن يعودون، وبيانات تبقى عندها. **البرنامج باشتراك للورشات** يُباع ورشة بورشة مع تكوين في عين المكان، وهو النموذج الذي فصّلناه في [إطلاق SaaS في الجزائر سنة 2027](/blog/lancer-un-saas-en-algerie-2027-abonnement-paiement-calendrier/). **المقارن** لا قيمة له إلا إذا كانت التقديرات التي يقارنها موحَّدة. **بيع القطع عبر الإنترنت** يصطدم بتوافق المراجع والتقليد: دون كتالوج لكل سيارة تتكاثر المرتجعات.",
        "**صيانة أساطيل المؤسسات** كثيراً ما تكون النموذج الأكثر ربحاً في البداية: عقود سنوية، حجم متوقَّع، ومسيّر أسطول يوافق على التقديرات عن بُعد. وتلتقي بما وصفناه في [منصات التوصيل](/blog/plateforme-livraison-transport-algerie-2027-livreurs-cod-retours/) و[وكالات الكراء](/blog/creer-plateforme-location-voiture-algerie-2027-reservation-caution-etat-des-lieux/) التي يجب أن تعود سياراتها إلى الطريق بسرعة. **الميكانيكي المتنقل** يخدم التدخلات الصغيرة والطوارئ. ننصح بالبدء بالسطر الأول، ثم فتح الأداة لورشات أخرى، وترك المقارن للحظة التي تصبح فيها التقديرات قابلة للمقارنة.",
      ] },
      { heading: 'الجدول الزمني لسنة 2027', body: [
        "نحو اثني عشر أسبوعاً بين التأطير وتجربة في ورشة أولى. **نوفمبر: التأطير المكتوب**، وملف التاجر الإلكتروني للدفع بـCIB والذهبية، يُطلق في الأسبوع الأول لأن آجال البنك لا تتعلق بك ولا بنا. **ديسمبر-جانفي: ملف السيارة، التقدير المفصّل، لوحة الورشة.** **فيفري: التجربة** في ورشة واحدة، بالتوازي مع الدفتر الورقي لمدة أسبوعين، حتى يكتسب الميكانيكيون عادة التصوير. **مارس-أفريل: المخزون، الموردون، الدفتر والتذكير.**",
        "الهدف أن تكون الأداة مجرَّبة **قبل الصيف**، حين تملأ المراجعات قبل الأسفار الطويلة والمكيّفات وسيارات الكراء الورشات غالباً. وهذا منسجم مع الآجال التي نعطيها في [كم يستغرق تطوير تطبيق سنة 2027](/blog/combien-de-temps-pour-developper-application-plateforme-algerie-2027-delais-reels/). البدء في أفريل يعني اكتشاف الأداة في عزّ الموسم.",
      ] },
      { heading: 'ما يُفشل هذا النوع من المشاريع', body: [], list: [
        "**البدء بالمقارن.** دون تقديرات موحَّدة يعرض أسعاراً لا تحترمها الورشات، والزبون الأول المخدوع لا يعود.",
        "**تقدير إجمالي.** «الفرامل: 18 000 دج» لا يقول شيئاً. سطر لكل قطعة بمرجعها ومصدرها وسعرها، واليد العاملة بالساعات.",
        "**عمل إضافي دون موافقة جديدة.** هو أول مصدر للخلافات. صورة، ملحق، توقيع، ثم العمل.",
        "**مصدر القطع غير مكتوب.** القطعة المتكيّفة المعلنة اختيار، والمخفية شبهة.",
        "**ميكانيكيون لا يلتقطون الصور.** يجب أن توفّر لهم الأداة الوقت لا أن تأخذه: ثلاث صور وزر واحد.",
        "**سيارة تنتظر على الرافعة.** القطع محجوزة مسبقاً، والموافقة بالصورة خلال ساعة.",
        "**الحسابات باسم المطوّر.** الخادم والنطاق والبيانات وحساب التاجر الإلكتروني باسمك منذ الأسبوع الأول.",
      ] },
      { heading: 'أسئلة شائعة', body: [], faq: [
        { q: "هل يوجد iDGarages جزائري؟", a: "توجد محاولات مثل Otretien.com الذي أُطلق سنة 2021 كمنصة للتقديرات والمواعيد، ولا نعرف نشاطه الحالي. وحسب علمنا، لا توجد اليوم منصة جزائرية تجمع بين التقدير الموحَّد المفصّل ومصدر القطع والموافقة عن بُعد ودفتر الصيانة." },
        { q: "لماذا لا نبدأ مباشرة بموقع مقارنة الورشات؟", a: "لأن المقارن يعرض أسعاراً، والأسعار لا تُقارن إلا إذا كانت التقديرات كذلك: الأسطر نفسها، أوقات اليد العاملة نفسها، مصادر القطع نفسها. ما دامت الورشات تقدّر بالهاتف، يعرض المقارن أرقاماً تقريبية ولا يثق فيها الزبون." },
        { q: "كيف يوافق زبون في فرنسا على تصليح في الجزائر ويدفعه؟", a: "عبر رابط ترسله الورشة: تقدير مفصّل، صورة القطعة البالية، مصدر القطع المقترحة. يوقّع الزبون على هاتفه ويدفع العربون بالدينار عبر CIB أو الذهبية، أو باليورو بتنظيم بين بلدين يُتحقق منه قبل التطوير." },
        { q: "ألا يكفي برنامج ورشة جاهز من السوق؟", a: "أحياناً. إذا كان يسيّر ملف السيارة والتقدير المفصّل والمخزون ويقبل دفع زبائنك، سنقول لك ذلك. ويُبرَّر التطوير حسب الطلب للموافقة عن بعد بالصور، ولمصدر القطع في كل سطر، وللدفع بالدينار واليورو، ولشبكة ورشات، أو لصيانة أساطيل المؤسسات." },
        { q: "هل يلزم تطبيق للهاتف للزبائن؟", a: "ليس عند الإطلاق. يكفي رابط تقدير ودفتر يُطّلع عليه عبر الويب، ويأتي التطبيق عندما يعود الزبائن ويصبح تذكير الصيانة مهماً. أما للورشة فاللوحة هي الأولى." },
        { q: "كم من الوقت يلزم للجاهزية؟", a: "نحو اثني عشر أسبوعاً بين التأطير وتجربة في ورشة أولى بملف السيارة والتقدير المفصّل ولوحة الورشة. ثم يأتي المخزون والموردون والدفتر. ولتكون الأداة مجرَّبة قبل صيف 2027 يجب البدء في نوفمبر 2026." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "دليل ورشات دون أداة ورشة لا يعرض إلا أسعاراً تقريبية." },
      { after: 4, text: "ما يكلّف ليس وقت العمل، بل الوقت الذي تحجز فيه سيارة رافعةً دون أن يشتغل عليها أحد." },
    ],
    cta: { eyebrow: 'صف لنا مشروعك', title: "ورشة أو شبكة أو أسطول مؤسسة أو منصة للإطلاق، المدينة، عدد الرافعات والميكانيكيين، كيف تقوم اليوم بالتقديرات وطلبات القطع، والتاريخ الذي تستهدفه. نعيد إليك النطاق والجدول والسعر الإجمالي مكتوبة قبل البدء.", body: "تبني Symloop برامج ورشات، ومنصات تقديرات ومواعيد، وتطبيقات متابعة الصيانة للورشات والشبكات والأساطيل في الجزائر، بالعربية والفرنسية والإنجليزية، مع الدفع بالدينار واليورو. مهندسون كبار في الجزائر العاصمة وسطيف، سعر إجمالي وجدول مكتوبان، الخادم والبيانات باسمك." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: '/blog/creer-equivalent-planity-algerie-2027-reservation-salon-beaute-acompte-mariees/', kind: 'سلسلة #09', name: 'إنشاء مقابل Planity في الجزائر سنة 2027' },
      { href: '/blog/creer-plateforme-location-voiture-algerie-2027-reservation-caution-etat-des-lieux/', kind: 'سلسلة #08', name: 'إنشاء منصة لكراء السيارات سنة 2027' },
      { href: '/blog/lancer-un-saas-en-algerie-2027-abonnement-paiement-calendrier/', kind: '2027', name: 'إطلاق SaaS في الجزائر سنة 2027' },
      { href: '/blog/agent-ia-entreprise-algerie-2027-par-ou-commencer-ce-qui-marche/', kind: '2027', name: 'وكيل ذكاء اصطناعي للمؤسسة سنة 2027' },
    ] },
  },
};

const KEYWORDS = "logiciel garage algérie 2027, application garage automobile algérie, équivalent idgarages algérie, devis garage en ligne algérie, gestion atelier mécanique algérie, carnet d'entretien numérique, pièces détachées origine algérie, entretien flotte entreprise algérie, garage management software algeria, car repair platform algeria, برنامج تسيير ورشة ميكانيك الجزائر 2027, تطبيق ورشة السيارات";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
