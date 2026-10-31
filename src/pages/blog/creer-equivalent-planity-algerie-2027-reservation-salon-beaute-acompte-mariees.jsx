import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/creer-equivalent-planity-algerie-2027-reservation-salon-beaute-acompte-mariees.mjs';

const SLUG = 'creer-equivalent-planity-algerie-2027-reservation-salon-beaute-acompte-mariees';
const FIGURES = ['journey', 'noshow', 'stack', 'bride', 'models'];
const DATE = '2026-11-01';

const CONTENT = {
  fr: {
    kind: 'Série · Vu en France #09', title: "Créer l'équivalent de Planity en Algérie en 2027 : la réservation des salons de beauté, l'acompte contre les absences et la saison des mariées.",
    dek: "En France, une cliente réserve sa coiffeuse en trente secondes, à 23 h, sur son téléphone, et reçoit un rappel la veille. En Algérie, le salon prend ses rendez-vous en messages privés sur Instagram et sur WhatsApp, les note dans un cahier, et découvre le samedi matin que plusieurs clientes ne viendront pas. Ce qu'une plateforme doit faire à chaque moment du rendez-vous, le calcul qui justifie l'acompte, ce qu'il faut construire en premier, le marché des mariées de la diaspora, et le calendrier pour être prêt avant l'Aïd et l'été 2027.",
    publishedAt: 'Novembre 2026', readTime: '11 min de lecture', author: 'Symloop', about: ['Salons de beauté', 'Réservation en ligne', 'Logiciel salon', 'Diaspora', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** L'équivalent de Planity en Algérie en 2027 n'est pas d'abord un annuaire de salons : c'est **l'outil du salon**, un agenda par employée avec les vraies durées des prestations, un acompte qui tient le créneau, des rappels qui libèrent les places à temps, et une fiche cliente privée. Planity a gagné en France en vendant ce logiciel aux salons ; l'annuaire est venu par-dessus. En Algérie, des annuaires existent déjà à Alger ; ce qui manque, c'est l'acompte, l'agenda juste, et un produit que personne ne fait encore bien : **le forfait de la mariée qui vit en France et se marie en Algérie**. Pour être prêt, il faut que l'outil tourne **avant le Ramadan**, donc commencer en novembre.",
      "Ce guide est le neuvième de la série « Vu en France, à construire en Algérie », après [la location de voitures](/blog/creer-plateforme-location-voiture-algerie-2027-reservation-caution-etat-des-lieux/) et [l'équivalent de Booking](/blog/creer-equivalent-booking-algerie-2027-reservation-hotels-depuis-la-france/). Il s'adresse au fondateur de la diaspora qui veut lancer la plateforme, et à la gérante de salon, d'institut ou de hammam qui veut que ses rendez-vous se prennent sans elle au téléphone.",
    ],
    sections: [
      { heading: 'Pourquoi un salon algérien perd ses rendez-vous', body: [
        "Le scénario est connu de toutes les gérantes. Les demandes arrivent en messages privés sur Instagram, sur WhatsApp, au téléphone pendant qu'on a les mains dans une couleur. Le rendez-vous est noté dans un cahier, avec une durée approximative. Le samedi, deux clientes ne viennent pas et ne préviennent pas ; à 15 h, une couleur prévue pour une heure en prend deux et demie, et les trois rendez-vous suivants attendent. **Rien de cela n'est un manque de sérieux : c'est ce qui arrive quand l'agenda vit dans un cahier et que le créneau ne coûte rien à la cliente qui ne vient pas.**",
        "Il n'existe pas de mesure publique du taux d'absence dans les salons algériens. Les éditeurs de logiciels de réservation citent, pour d'autres marchés, des fourchettes de 15 à 30 % de rendez-vous non honorés sans acompte ni rappel ; ce sont des chiffres de vendeurs, à prendre comme un ordre de grandeur. Le bon chiffre est celui du salon : il suffit de compter, pendant deux semaines, les rendez-vous du cahier où personne n'est venu.",
      ] },
      { heading: "Ce que Planity a vraiment construit, et ce qui existe déjà en Algérie", body: [
        "Planity, fondée à Paris en 2017, revendiquait en février 2024 environ **37 000 des 140 000 établissements de beauté français**, après une levée de 45 millions d'euros qui portait le total levé à 100 millions, selon Maddyness. La presse spécialisée la décrit comme un éditeur de logiciel pour la beauté autant que comme un site de réservation : les salons paient pour l'agenda, la caisse et les rappels, et le site grand public se remplit parce que les salons y sont déjà. Le même article rappelait qu'à ce moment-là, seuls 22 % des établissements de beauté français et 7 % en Europe avaient adopté la réservation en ligne. **La leçon n'est pas « faire un annuaire » : c'est équiper le salon, puis l'annuaire vient presque seul.**",
        "En Algérie, le terrain n'est plus vide. ZinLook permet de réserver dans des salons et des instituts d'Alger, avec 73 établissements partenaires depuis septembre selon Maghreb Emergent, et un outil pour les professionnels ; le paiement se fait sur place, au salon. Beautify se présente sur les stores comme une plateforme de réservation beauté en Algérie. Nous ne connaissons ni leurs volumes ni leurs projets, et ils peuvent évoluer vite. Mais à fin octobre 2026, à notre connaissance, **l'acompte en ligne, l'agenda par employée avec les vraies durées, et les forfaits mariée réservés depuis la France** restent des terrains ouverts, à Alger comme dans les autres wilayas.",
      ] },
      { heading: 'Un rendez-vous en salon, en six moments', body: [
        "La plateforme doit tenir chacun de ces six moments. Les quatre premiers se passent sur le téléphone de la cliente, les deux derniers au salon.",
      ], visual: 'journey', after: [
        "**La prestation** est choisie avec sa vraie durée, et c'est le salon qui la règle, pas la cliente : un brushing, une couleur avec soin, un lissage, un maquillage de soirée ne prennent pas le même temps, et une couleur sous-estimée décale tout l'après-midi. **La bonne personne** : le créneau est pris sur l'agenda de la coiffeuse, de l'esthéticienne ou de la cabine, avec ses pauses et ses jours de congé ; une cliente qui veut « sa » coiffeuse la choisit. **L'acompte** tient le créneau : CIB et Edahabia en ligne quand le salon a un contrat de web-marchand, une preuve de virement BaridiMob enregistrée sinon, et en euros pour la cliente qui réserve depuis la France, avec la pile à deux pays que nous avons décrite pour [l'équivalent de Booking](/blog/creer-equivalent-booking-algerie-2027-reservation-hotels-depuis-la-france/).",
        "**Les rappels** partent deux jours puis trois heures avant, sur WhatsApp ou par SMS, avec deux boutons : je viens, ou je libère ma place. **Le jour même**, la fiche cliente s'ouvre : la formule de la dernière couleur, une allergie, la préférence notée la dernière fois ; l'acompte est déduit et le solde encaissé. **La suite** : la prochaine date est proposée avant que la cliente parte, et une annulation de dernière minute est proposée à la liste d'attente. C'est ce dernier moment qui remplit l'agenda sans publicité.",
      ] },
      { heading: "Le calcul qui justifie l'acompte", body: [
        "La gérante demande, à juste titre, ce que l'outil lui rapporte. Voici le calcul que nous faisons avec elle, sur ses propres chiffres.",
      ], visual: 'noshow', after: [
        "Prenons un salon de quatre coiffeuses, six rendez-vous par jour chacune, vingt-six jours ouvrés : **624 rendez-vous par mois**. Si 15 % des clientes ne viennent pas, ce sont 94 fauteuils vides, réservés pour rien, et souvent refusés à une autre cliente au téléphone. Si l'acompte et les rappels ramènent l'absence à 5 %, il en reste 31. **Soixante-trois rendez-vous honorés en plus chaque mois** ; à 3 000 DA le rendez-vous moyen, environ 189 000 DA de chiffre d'affaires mensuel qui revient, sans une cliente de plus.",
        "C'est un exemple sur des hypothèses, pas une mesure du marché : les 15 % de départ et les 5 % d'arrivée sont à remplacer par ce que le salon constate. Deux réglages comptent plus que le montant de l'acompte. D'abord, **ne pas exiger d'acompte de tout le monde** : la cliente fidèle qui vient tous les mois n'en a pas besoin ; la nouvelle cliente, la prestation longue, le samedi, la veille de l'Aïd et la mariée, oui. Ensuite, **une règle d'annulation écrite avant le paiement** : jusqu'à quand l'acompte est rendu, et ce qu'il devient après. Une règle claire évite la dispute ; une règle découverte au moment de l'annulation la provoque.",
      ] },
      { heading: "Ce qu'il faut construire : l'outil du salon d'abord", body: [
        "La tentation est de commencer par la belle application grand public. C'est l'erreur qui fait échouer la plupart des projets de ce type.",
      ], visual: 'stack', after: [
        "**Côté cliente**, une page de réservation en arabe et en français, rapide sur un téléphone d'entrée de gamme, sans obligation de créer un compte, et l'acompte. **La plateforme** tient un agenda par employée et par cabine, avec les durées réelles ; des règles d'acompte par prestation, par nouvelle cliente et par saison ; des rappels et une liste d'attente. **Côté salon**, la fiche cliente, la caisse qui déduit l'acompte et clôture la journée, et l'équipe : planning, commissions, et des accès par rôle, parce que l'employée n'a pas à voir le chiffre d'affaires ni les numéros de toutes les clientes.",
        "**La confidentialité n'est pas un détail dans un salon féminin.** Beaucoup de clientes ne veulent pas que leur photo circule ; une photo avant-après ne se publie qu'avec un accord enregistré, et la fiche cliente reste au salon. Les données personnelles sont encadrées en Algérie par la loi 18-07 : un serveur à votre nom, des accès tracés et des sauvegardes quotidiennes sont la base. Une fois l'agenda juste, un [agent IA](/blog/agent-ia-entreprise-algerie-2027-par-ou-commencer-ce-qui-marche/) peut répondre aux messages Instagram et WhatsApp en arabe, en darija ou en français, proposer les créneaux libres et envoyer le lien d'acompte ; avant, il répondrait aussi vite que faux.",
      ] },
      { heading: 'Le marché que Planity ne sert pas : les mariées de la diaspora', body: [
        "L'Algérie a enregistré environ 280 000 mariages par an ces dernières années : 278 000 en 2023 selon le bulletin démographique de l'ONS, et environ 282 000 en 2024 selon les chiffres de l'ONS repris par la presse, en baisse depuis dix ans. Une partie se célèbre l'été, quand la diaspora rentre. Une mariée qui vit à Lyon et se marie à Tlemcen en août doit réserver depuis la France une coiffeuse, une maquilleuse, souvent une machta pour la tesdira et ses changements de tenue, le henné, le hammam, parfois la location des tenues : **cinq prestataires, cinq dates, et aujourd'hui autant de conversations WhatsApp et de virements faits par une cousine.**",
      ], visual: 'bride', after: [
        "**Le produit est un forfait coordonné** : la mariée choisit les prestations, paie un seul acompte, et la plateforme répartit les créneaux dans les agendas de chaque prestataire. Les choix se font sur photos et en visio pendant les mois qui précèdent ; chaque prestataire confirme sa date, son heure et son lieu dans l'outil ; le solde se règle prestataire par prestataire. Le jour J, l'ordre de passage est écrit et partagé, et tout le monde sait à quelle heure la mariée change de tenue.",
        "C'est le panier le plus élevé du métier, réservé des mois à l'avance, et c'est aussi le plus fragile : **un prestataire qui lâche, et tout le forfait tombe.** La plateforme doit donc prévoir un remplaçant par prestation, une règle écrite de ce qui se passe en cas de désistement, et le suivi des acomptes reçus par chacun. Ce n'est pas un module qu'on ajoute à la fin : il se pense dès le cadrage, parce qu'il suppose que les agendas de plusieurs salons parlent entre eux.",
      ] },
      { heading: 'Quel modèle construire', body: [
        "Six modèles reviennent dans les projets qu'on nous présente. Ils ne rapportent pas de la même façon et ne cassent pas au même endroit.",
      ], visual: 'models', after: [
        "**Le salon ou la chaîne avec sa propre réservation** est le point de départ le plus solide : clientes en direct, acompte, aucune commission, et des données qui restent chez lui. **Le logiciel par abonnement pour salons** est le vrai modèle de Planity, celui que nous avons détaillé dans [lancer un SaaS en Algérie en 2027](/blog/lancer-un-saas-en-algerie-2027-abonnement-paiement-calendrier/) : un revenu récurrent, mais une vente et une formation salon par salon, sur place. **L'annuaire** rapporte de la visibilité et des commissions, et ne vaut rien si les créneaux qu'il affiche sont faux.",
        "**Les forfaits mariée** sont le plus gros panier et le plus exigeant en coordination. **Les prestations à domicile** servent les mariées, les mères de famille et les quartiers éloignés, et rejoignent la logique de [la livraison et des tournées](/blog/plateforme-livraison-transport-algerie-2027-livreurs-cod-retours/). **Les hammams et les spas** vendent des créneaux et des cabines, avec des horaires femmes et hommes ; leur intérêt est de remplir les heures creuses de la semaine. Nous conseillons de commencer par la première ligne, d'ouvrir le logiciel à d'autres salons quand le premier tourne, et de garder l'annuaire pour la fin.",
      ] },
      { heading: 'Le calendrier pour 2027', body: [
        "Deux dates comptent en 2027. **Le Ramadan, attendu vers le 8 février, puis l'Aïd el-Fitr vers le 9 mars** selon l'observation du croissant, avec la ruée des veilles d'Aïd dans les salons. Et **la saison des mariages de l'été**, que la diaspora prépare au printemps.",
        "**Novembre : le cadrage écrit**, et le dossier de web-marchand pour le paiement CIB et Edahabia, lancé dès la première semaine, parce que son délai bancaire ne dépend ni de vous ni de nous. **Décembre-janvier : l'outil du salon**, agenda, fiche cliente, caisse, acompte et rappels. **Fin janvier : le pilote** dans deux ou trois salons, en double avec le cahier pendant deux semaines, pour qu'il tourne pendant le Ramadan et encaisse les veilles d'Aïd. **Mars-avril : l'ouverture des forfaits mariée** pour l'été, quand la diaspora réserve son vol. C'est cohérent avec les délais que nous donnons dans [combien de temps pour développer une application en 2027](/blog/combien-de-temps-pour-developper-application-plateforme-algerie-2027-delais-reels/). Commencer en mars, c'est rater l'Aïd et arriver après les réservations de l'été.",
      ] },
      { heading: 'Ce qui fait échouer ce genre de projet', body: [], list: [
        "**Commencer par l'application grand public.** Sans agenda côté salon, la page vend des créneaux déjà pris au téléphone, et la première cliente qui arrive pour rien raconte l'histoire à tout le quartier.",
        "**Des durées de prestation fausses.** Une couleur réglée à une heure en prend deux et demie ; l'agenda est faux dès 15 h. Le salon règle les durées, par prestation et par employée.",
        "**Un acompte pour tout le monde.** Les fidèles s'en vont. Acompte pour les nouvelles clientes, les prestations longues, les jours de pointe et les mariées.",
        "**Une règle d'annulation découverte au moment d'annuler.** Elle s'écrit avant le paiement : jusqu'à quand l'acompte est rendu, et ce qu'il devient après.",
        "**Des photos publiées sans accord.** Dans un salon féminin, c'est la confiance de toute la clientèle qui part. Accord enregistré, photo par photo.",
        "**Un forfait mariée sans remplaçant.** Un prestataire qui lâche en juillet, et tout tombe. Un remplaçant par prestation et une règle écrite de désistement.",
        "**Ouvrir après l'Aïd.** Le pilote doit tourner avant le Ramadan ; les forfaits de l'été s'ouvrent en mars-avril.",
        "**Les comptes au nom du prestataire.** Serveur, domaine, données et compte web-marchand à votre nom, dès la première semaine.",
      ] },
      { heading: 'Questions fréquentes', body: [], faq: [
        { q: "Planity existe-t-il en Algérie ?", a: "Non, à notre connaissance : Planity opère en France et dans quelques pays européens. En Algérie, des plateformes locales de réservation beauté existent, comme ZinLook à Alger ou Beautify ; à fin octobre 2026, le paiement s'y fait au salon. L'acompte en ligne, l'agenda par employée et les forfaits mariée restent peu couverts." },
        { q: "Comment faire payer un acompte à une cliente en Algérie ?", a: "En ligne par CIB ou Edahabia quand le salon dispose d'un contrat de web-marchand avec sa banque ; sinon par un virement BaridiMob dont la preuve est enregistrée dans l'outil et rapprochée à la main. Pour une cliente qui réserve depuis la France, l'acompte peut être encaissé en euros, avec une organisation à deux pays à valider avant le développement." },
        { q: "Quel montant d'acompte demander ?", a: "Il n'y a pas de chiffre universel. Ce qui compte : ne pas en demander aux clientes fidèles, en demander pour les nouvelles clientes, les prestations longues, les jours de pointe et les mariées, et écrire la règle d'annulation avant le paiement. Le montant doit couvrir ce que coûte un fauteuil vide, pas plus." },
        { q: "Un logiciel de salon du marché ne suffit-il pas ?", a: "Parfois. Si un logiciel existant gère l'agenda par employée, les rappels et la caisse, et accepte un acompte avec les moyens de paiement de vos clientes, nous vous le disons. Le sur-mesure se justifie pour l'acompte en CIB, Edahabia et euros, les forfaits mariée multi-prestataires, une chaîne de plusieurs salons, ou une plateforme qui vend son logiciel à d'autres salons." },
        { q: "Faut-il une application mobile ou une page suffit-elle ?", a: "Pour la cliente, une page de réservation rapide en arabe et en français suffit au lancement ; l'application vient quand les clientes reviennent et que la fidélité compte. Pour le salon, c'est l'outil de l'agenda et de la caisse qui compte en premier." },
        { q: "Combien de temps faut-il pour être prêt ?", a: "Environ trois mois entre le cadrage et un pilote dans deux ou trois salons, avec l'acompte et les rappels. Pour que le pilote tourne avant le Ramadan 2027 et encaisse les veilles d'Aïd, il faut commencer en novembre 2026 ; les forfaits mariée s'ajoutent ensuite, pour une ouverture en mars-avril." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "La leçon n'est pas « faire un annuaire » : c'est équiper le salon, puis l'annuaire vient presque seul." },
      { after: 5, text: "Cinq prestataires, cinq dates, un seul acompte : c'est un problème de coordination." },
    ],
    cta: { eyebrow: 'Décrivez votre projet', title: "Salon, chaîne, institut, hammam ou plateforme à lancer, la ville, le nombre d'employées, comment vous prenez aujourd'hui les rendez-vous et les acomptes, et la saison que vous visez. Nous vous rendons le périmètre, le calendrier et le prix total, écrits, avant de commencer.", body: "Symloop construit des logiciels de réservation et de caisse, des applications et des plateformes pour les salons, les instituts et les hammams algériens, en arabe, en français et en anglais, avec l'acompte en dinars et en euros. Ingénieurs seniors à Alger et Sétif, prix total et calendrier écrits, serveur et données à votre nom." },
    related: { label: 'À lire ensuite', items: [
      { href: '/blog/creer-plateforme-location-voiture-algerie-2027-reservation-caution-etat-des-lieux/', kind: 'Série #08', name: 'Créer une plateforme de location de voitures en 2027' },
      { href: '/blog/creer-equivalent-booking-algerie-2027-reservation-hotels-depuis-la-france/', kind: 'Série #06', name: "Créer l'équivalent de Booking en Algérie en 2027" },
      { href: '/blog/lancer-un-saas-en-algerie-2027-abonnement-paiement-calendrier/', kind: '2027', name: 'Lancer un SaaS en Algérie en 2027' },
      { href: '/blog/agent-ia-entreprise-algerie-2027-par-ou-commencer-ce-qui-marche/', kind: '2027', name: "Un agent IA pour l'entreprise en 2027" },
    ] },
  },
  en: {
    kind: 'Series · Seen in France #09', title: "Building the Planity of Algeria in 2027: salon booking, a deposit against no-shows, and the bridal season.",
    dek: "In France, a client books her hairdresser in thirty seconds, at 11 pm, on her phone, and gets a reminder the day before. In Algeria, the salon takes its bookings in Instagram and WhatsApp messages, writes them in a notebook, and finds out on Saturday morning that several clients will not come. What a platform must do at each moment of the appointment, the calculation that justifies a deposit, what to build first, the market of diaspora brides, and the calendar to be ready before Eid and summer 2027.",
    publishedAt: 'November 2026', readTime: '11 min read', author: 'Symloop', about: ['Beauty salons', 'Online booking', 'Salon software', 'Diaspora', 'Algeria 2027'],
    intro: [
      "**Short answer.** The Planity of Algeria in 2027 is not first a salon directory: it is **the salon's tool**, a calendar per employee with the real length of each service, a deposit that holds the slot, reminders that release places in time, and a private client card. Planity won in France by selling that software to salons; the directory came on top. In Algeria, directories already exist in Algiers; what is missing is the deposit, a true calendar, and a product nobody does well yet: **the package for the bride who lives in France and marries in Algeria**. To be ready, the tool must run **before Ramadan**, so start in November.",
      "This guide is the ninth in the series \"Seen in France, to build in Algeria\", after [car rental](/blog/creer-plateforme-location-voiture-algerie-2027-reservation-caution-etat-des-lieux/) and [the Booking equivalent](/blog/creer-equivalent-booking-algerie-2027-reservation-hotels-depuis-la-france/). It is written for the diaspora founder who wants to launch the platform, and for the manager of a salon, beauty institute or hammam who wants bookings to happen without her on the phone.",
    ],
    sections: [
      { heading: 'Why an Algerian salon loses its appointments', body: [
        "Every manager knows the scenario. Requests arrive as Instagram messages, on WhatsApp, by phone while her hands are in a colour. The appointment goes into a notebook with a rough length. On Saturday two clients do not come and do not warn; at 3 pm a colour planned for one hour takes two and a half, and the next three appointments wait. **None of this is a lack of seriousness: it is what happens when the calendar lives in a notebook and the slot costs nothing to the client who does not come.**",
        "There is no public measure of no-show rates in Algerian salons. Booking software vendors quote, for other markets, ranges of 15 to 30% of appointments missed without a deposit or reminder; those are vendor figures, to be read as an order of magnitude. The right number is the salon's own: count, for two weeks, the notebook appointments where nobody came.",
      ] },
      { heading: 'What Planity really built, and what already exists in Algeria', body: [
        "Planity, founded in Paris in 2017, claimed in February 2024 about **37,000 of France's 140,000 beauty establishments**, after a EUR 45 million round that took its total raised to 100 million, according to Maddyness. The trade press describes it as a beauty software company as much as a booking site: salons pay for the calendar, the till and the reminders, and the consumer site fills up because the salons are already on it. The same article noted that at the time only 22% of French beauty establishments, and 7% in Europe, had adopted online booking. **The lesson is not \"build a directory\": it is equip the salon, and the directory almost follows by itself.**",
        "In Algeria the field is no longer empty. ZinLook lets clients book salons and beauty institutes in Algiers, with 73 partner establishments since September according to Maghreb Emergent, and a tool for professionals; payment is made on site, at the salon. Beautify presents itself on the app stores as a beauty booking platform in Algeria. We do not know their volumes or plans, and they may move fast. But at the end of October 2026, as far as we know, **the online deposit, the calendar per employee with real lengths, and bridal packages booked from France** remain open ground, in Algiers and in the other wilayas.",
      ] },
      { heading: 'A salon appointment, in six moments', body: [
        "The platform must hold each of these six moments. The first four happen on the client's phone, the last two at the salon.",
      ], visual: 'journey', after: [
        "**The service** is chosen with its real length, set by the salon, not the client: a blow-dry, a colour with treatment, a straightening, an evening make-up do not take the same time, and an underestimated colour shifts the whole afternoon. **The right person**: the slot is taken on the calendar of the hairdresser, the beautician or the room, with breaks and days off; a client who wants \"her\" stylist chooses her. **The deposit** holds the slot: CIB and Edahabia online when the salon has a web-merchant contract, a recorded BaridiMob transfer receipt otherwise, and euros for the client booking from France, with the two-country stack we described for [the Booking equivalent](/blog/creer-equivalent-booking-algerie-2027-reservation-hotels-depuis-la-france/).",
        "**Reminders** go out two days and then three hours before, on WhatsApp or by SMS, with two buttons: I am coming, or I release my slot. **On the day**, the client card opens: the formula of the last colour, an allergy, the preference noted last time; the deposit is deducted and the balance paid. **Next time**: the next date is offered before the client leaves, and a last-minute cancellation is offered to the waiting list. That last moment fills the calendar without advertising.",
      ] },
      { heading: 'The calculation that justifies a deposit', body: [
        "The manager rightly asks what the tool brings her. Here is the calculation we do with her, on her own numbers.",
      ], visual: 'noshow', after: [
        "Take a salon with four stylists, six appointments a day each, twenty-six working days: **624 appointments a month**. If 15% of clients do not come, that is 94 empty chairs, booked for nothing and often refused to another client on the phone. If the deposit and reminders bring no-shows down to 5%, 31 remain. **Sixty-three more kept appointments every month**; at DA 3,000 for the average appointment, about DA 189,000 of monthly revenue coming back, without a single new client.",
        "It is an example on assumptions, not a market measure: the 15% before and 5% after should be replaced by what the salon observes. Two settings matter more than the deposit amount. First, **do not ask everyone for a deposit**: the loyal client who comes every month does not need one; the new client, the long service, Saturday, the eve of Eid and the bride do. Second, **a cancellation rule written before payment**: until when the deposit is refunded, and what happens to it after. A clear rule avoids the argument; a rule discovered at cancellation starts it.",
      ] },
      { heading: "What to build: the salon's tool first", body: [
        "The temptation is to start with the beautiful consumer app. It is the mistake that sinks most projects of this kind.",
      ], visual: 'stack', after: [
        "**Client side**, a booking page in Arabic and French, fast on an entry-level phone, with no account required, and the deposit. **The platform** holds a calendar per employee and per room, with real lengths; deposit rules per service, per new client and per season; reminders and a waiting list. **Salon side**, the client card, the till that deducts the deposit and closes the day, and the team: schedule, commissions, and role-based access, because an employee does not need to see the revenue or every client's number.",
        "**Confidentiality is not a detail in a women's salon.** Many clients do not want their photo to circulate; a before-and-after photo is published only with recorded consent, and the client card stays at the salon. Personal data is governed in Algeria by law 18-07: a server in your name, logged access and daily backups are the base. Once the calendar is true, an [AI agent](/blog/agent-ia-entreprise-algerie-2027-par-ou-commencer-ce-qui-marche/) can answer Instagram and WhatsApp messages in Arabic, Darija or French, offer free slots and send the deposit link; before that, it would answer as fast as it answers wrong.",
      ] },
      { heading: 'The market Planity does not serve: diaspora brides', body: [
        "Algeria has recorded around 280,000 marriages a year recently: 278,000 in 2023 according to the ONS demographic bulletin, and about 282,000 in 2024 according to ONS figures reported by the press, down over ten years. Part of them are celebrated in summer, when the diaspora comes home. A bride who lives in Lyon and marries in Tlemcen in August must book from France a hairdresser, a make-up artist, often a machta for the tesdira and its outfit changes, the henna, the hammam, sometimes outfit rental: **five providers, five dates, and today as many WhatsApp conversations and transfers made by a cousin.**",
      ], visual: 'bride', after: [
        "**The product is a coordinated package**: the bride chooses the services, pays one deposit, and the platform places the slots in each provider's calendar. Choices are made on photos and by video in the months before; each provider confirms date, time and place in the tool; the balance is settled provider by provider. On the day, the running order is written and shared, and everyone knows at what time the bride changes outfit.",
        "It is the largest basket in the trade, booked months ahead, and also the most fragile: **one provider drops out and the whole package falls.** So the platform must plan a substitute per service, a written rule for what happens on withdrawal, and tracking of the deposits each provider has received. It is not a module added at the end: it is designed from the scoping stage, because it requires the calendars of several salons to talk to each other.",
      ] },
      { heading: 'Which model to build', body: [
        "Six models come up in the projects presented to us. They do not pay the same way and do not break in the same place.",
      ], visual: 'models', after: [
        "**The salon or chain with its own booking** is the soundest starting point: clients direct, deposit, no commission, and data that stays with the salon. **Subscription software for salons** is Planity's real model, the one we detailed in [launching a SaaS in Algeria in 2027](/blog/lancer-un-saas-en-algerie-2027-abonnement-paiement-calendrier/): recurring revenue, but selling and training salon by salon, on site. **The directory** brings visibility and commissions, and is worth nothing if the slots it shows are false.",
        "**Bridal packages** are the largest basket and the most demanding in coordination. **Home services** serve brides, mothers and distant neighbourhoods, and join the logic of [delivery and rounds](/blog/plateforme-livraison-transport-algerie-2027-livreurs-cod-retours/). **Hammams and spas** sell slots and rooms, with women's and men's hours; their interest is filling the quiet hours of the week. We advise starting with the first row, opening the software to other salons once the first one runs, and keeping the directory for last.",
      ] },
      { heading: 'The calendar for 2027', body: [
        "Two dates matter in 2027. **Ramadan, expected around 8 February, then Eid al-Fitr around 9 March** depending on the sighting of the crescent, with the rush in salons on the eves of Eid. And **the summer wedding season**, which the diaspora prepares in spring.",
        "**November: written scoping**, and the web-merchant application for CIB and Edahabia payment, filed in the first week, because the bank's timing depends neither on you nor on us. **December-January: the salon's tool**, calendar, client card, till, deposit and reminders. **End of January: the pilot** in two or three salons, alongside the notebook for two weeks, so it runs during Ramadan and takes the pre-Eid rush. **March-April: bridal packages open** for the summer, when the diaspora books its flights. This is consistent with the timelines we give in [how long it takes to build an app in 2027](/blog/combien-de-temps-pour-developper-application-plateforme-algerie-2027-delais-reels/). Starting in March means missing Eid and arriving after summer bookings.",
      ] },
      { heading: 'What makes this kind of project fail', body: [], list: [
        "**Starting with the consumer app.** Without a calendar on the salon side, the page sells slots already taken by phone, and the first client who comes for nothing tells the whole neighbourhood.",
        "**Wrong service lengths.** A colour set to one hour takes two and a half; the calendar is wrong from 3 pm. The salon sets lengths, per service and per employee.",
        "**A deposit for everyone.** Loyal clients leave. Deposits for new clients, long services, peak days and brides.",
        "**A cancellation rule discovered when cancelling.** It is written before payment: until when the deposit is refunded, and what happens to it after.",
        "**Photos published without consent.** In a women's salon, the trust of the whole clientele goes with it. Recorded consent, photo by photo.",
        "**A bridal package without a substitute.** One provider drops out in July and everything falls. A substitute per service and a written withdrawal rule.",
        "**Opening after Eid.** The pilot must run before Ramadan; summer packages open in March-April.",
        "**Accounts in the provider's name.** Server, domain, data and web-merchant account in your name, from the first week.",
      ] },
      { heading: 'Frequently asked questions', body: [], faq: [
        { q: "Does Planity operate in Algeria?", a: "Not as far as we know: Planity operates in France and a few European countries. In Algeria, local beauty booking platforms exist, such as ZinLook in Algiers or Beautify; at the end of October 2026, payment there is made at the salon. Online deposits, calendars per employee and bridal packages remain little covered." },
        { q: "How can a salon take a deposit from a client in Algeria?", a: "Online by CIB or Edahabia when the salon has a web-merchant contract with its bank; otherwise by a BaridiMob transfer whose receipt is recorded in the tool and matched by hand. For a client booking from France, the deposit can be collected in euros, with a two-country setup to validate before development." },
        { q: "How much deposit should a salon ask for?", a: "There is no universal figure. What matters: do not ask loyal clients, ask new clients, long services, peak days and brides, and write the cancellation rule before payment. The amount should cover what an empty chair costs, no more." },
        { q: "Is an off-the-shelf salon software not enough?", a: "Sometimes. If existing software handles a calendar per employee, reminders and the till, and accepts a deposit with your clients' payment methods, we will tell you. Custom work is justified for deposits in CIB, Edahabia and euros, multi-provider bridal packages, a chain of several salons, or a platform that sells its software to other salons." },
        { q: "Is a mobile app needed or is a page enough?", a: "For the client, a fast booking page in Arabic and French is enough at launch; the app comes when clients return and loyalty matters. For the salon, the calendar and till tool comes first." },
        { q: "How long does it take to be ready?", a: "About three months from scoping to a pilot in two or three salons, with deposit and reminders. For the pilot to run before Ramadan 2027 and take the pre-Eid rush, start in November 2026; bridal packages are added next, to open in March-April." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "The lesson is not \"build a directory\": it is equip the salon, and the directory almost follows by itself." },
      { after: 5, text: "Five providers, five dates, one deposit: it is a coordination problem." },
    ],
    cta: { eyebrow: 'Describe your project', title: "Salon, chain, beauty institute, hammam or platform to launch, the city, the number of employees, how you take bookings and deposits today, and the season you are aiming for. We send back the scope, the calendar and the total price, in writing, before we start.", body: "Symloop builds booking and till software, apps and platforms for Algerian salons, beauty institutes and hammams, in Arabic, French and English, with deposits in dinars and euros. Senior engineers in Algiers and Sétif, total price and calendar in writing, server and data in your name." },
    related: { label: 'Read next', items: [
      { href: '/blog/creer-plateforme-location-voiture-algerie-2027-reservation-caution-etat-des-lieux/', kind: 'Series #08', name: 'Building a car rental platform in 2027' },
      { href: '/blog/creer-equivalent-booking-algerie-2027-reservation-hotels-depuis-la-france/', kind: 'Series #06', name: 'Building the Booking of Algeria in 2027' },
      { href: '/blog/lancer-un-saas-en-algerie-2027-abonnement-paiement-calendrier/', kind: '2027', name: 'Launching a SaaS in Algeria in 2027' },
      { href: '/blog/agent-ia-entreprise-algerie-2027-par-ou-commencer-ce-qui-marche/', kind: '2027', name: 'An AI agent for your company in 2027' },
    ] },
  },
  ar: {
    kind: 'سلسلة · رأيناه في فرنسا #09', title: "إنشاء مقابل Planity في الجزائر سنة 2027: حجز صالونات التجميل، العربون ضد الغياب، وموسم العرائس.",
    dek: "في فرنسا تحجز الزبونة حلاقتها في ثلاثين ثانية، على الساعة الحادية عشرة ليلاً، من هاتفها، وتتلقى تذكيراً في اليوم السابق. في الجزائر يأخذ الصالون مواعيده في رسائل إنستغرام وواتساب، ويكتبها في دفتر، ويكتشف صباح السبت أن عدة زبونات لن يأتين. ما يجب أن تفعله المنصة في كل لحظة من الموعد، والحساب الذي يبرّر العربون، وما يُبنى أولاً، وسوق عرائس الجالية، والجدول الزمني للجاهزية قبل العيد وصيف 2027.",
    publishedAt: 'نوفمبر 2026', readTime: '11 دقيقة قراءة', author: 'Symloop', about: ['صالونات التجميل', 'الحجز عبر الإنترنت', 'برنامج الصالون', 'الجالية', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** مقابل Planity في الجزائر سنة 2027 ليس أولاً دليلاً للصالونات، بل هو **أداة الصالون**: رزنامة لكل عاملة بالمدة الحقيقية لكل خدمة، وعربون يحجز الموعد، وتذكير يحرّر الأماكن في الوقت، وبطاقة زبونة خاصة. ربحت Planity في فرنسا ببيع هذا البرنامج للصالونات، وجاء الدليل فوقه. في الجزائر توجد أدلة في العاصمة، أما الناقص فهو العربون والرزنامة الصحيحة ومنتج لا يتقنه أحد بعد: **باقة العروس التي تعيش في فرنسا وتتزوج في الجزائر**. ولتكون جاهزاً، يجب أن تعمل الأداة **قبل رمضان**، أي أن تبدأ في نوفمبر.",
      "هذا الدليل هو التاسع في سلسلة «رأيناه في فرنسا، نبنيه في الجزائر»، بعد [كراء السيارات](/blog/creer-plateforme-location-voiture-algerie-2027-reservation-caution-etat-des-lieux/) و[مقابل Booking](/blog/creer-equivalent-booking-algerie-2027-reservation-hotels-depuis-la-france/). وهو موجّه لمؤسس من الجالية يريد إطلاق المنصة، ولمسيّرة صالون أو معهد تجميل أو حمام تريد أن تُحجز مواعيدها دون أن تبقى على الهاتف.",
    ],
    sections: [
      { heading: 'لماذا يخسر الصالون الجزائري مواعيده', body: [
        "كل مسيّرة تعرف المشهد. تصل الطلبات في رسائل إنستغرام وواتساب، وبالهاتف بينما يداها في صباغة. يُكتب الموعد في دفتر بمدة تقريبية. يوم السبت لا تأتي زبونتان ولا تخبران؛ وعلى الثالثة بعد الظهر تستغرق صباغة مقدّرة بساعة ساعتين ونصفاً، فتنتظر المواعيد الثلاثة التالية. **ليس في هذا قلة جدية: هذا ما يحدث عندما تعيش الرزنامة في دفتر ولا يكلّف الموعد شيئاً للزبونة التي لا تأتي.**",
        "لا يوجد قياس علني لنسبة الغياب في الصالونات الجزائرية. ناشرو برامج الحجز يذكرون، لأسواق أخرى، نسباً بين 15 و30 % من المواعيد غير المحترمة دون عربون ولا تذكير؛ وهي أرقام بائعين تؤخذ كرتبة تقريبية. الرقم الصحيح هو رقم الصالون نفسه: يكفي أن تعدّ لمدة أسبوعين مواعيد الدفتر التي لم يحضر أصحابها.",
      ] },
      { heading: 'ما بنته Planity فعلاً، وما يوجد في الجزائر', body: [
        "تأسست Planity في باريس سنة 2017، وكانت تعلن في فيفري 2024 نحو **37 000 من أصل 140 000 مؤسسة تجميل فرنسية**، بعد جولة تمويل بـ45 مليون يورو رفعت مجموع ما جمعته إلى 100 مليون، حسب Maddyness. وتصفها الصحافة المتخصصة كناشر برامج للتجميل بقدر ما هي موقع حجز: الصالونات تدفع مقابل الرزنامة والصندوق والتذكير، والموقع العام يمتلئ لأن الصالونات موجودة فيه أصلاً. وذكر المقال نفسه أن 22 % فقط من مؤسسات التجميل الفرنسية و7 % في أوروبا كانت قد اعتمدت الحجز عبر الإنترنت آنذاك. **الدرس ليس «اصنع دليلاً»، بل جهّز الصالون، والدليل يأتي تقريباً وحده.**",
        "في الجزائر لم تعد الساحة فارغة. تتيح ZinLook الحجز في صالونات ومعاهد بالعاصمة، مع 73 مؤسسة شريكة منذ سبتمبر حسب Maghreb Emergent، وأداة للمهنيين؛ والدفع يتم في الصالون. وتقدّم Beautify نفسها على المتاجر كمنصة حجز للتجميل في الجزائر. لا نعرف حجمهما ولا خططهما، وقد يتطوران بسرعة. لكن إلى نهاية أكتوبر 2026، حسب علمنا، تبقى **العربون عبر الإنترنت، والرزنامة لكل عاملة بالمدد الحقيقية، وباقات العرائس المحجوزة من فرنسا** أرضاً مفتوحة، في العاصمة وفي باقي الولايات.",
      ] },
      { heading: 'موعد في الصالون في ست لحظات', body: [
        "يجب أن تمسك المنصة بكل لحظة من هذه اللحظات الست. الأربع الأولى تجري على هاتف الزبونة، والأخيرتان في الصالون.",
      ], visual: 'journey', after: [
        "**الخدمة** تُختار بمدتها الحقيقية، والصالون هو من يضبطها لا الزبونة: التسريح والصباغة مع العناية والتمليس ومكياج السهرة لا تستغرق الوقت نفسه، والصباغة المقدَّرة بأقل من حقها تؤخّر المساء كله. **الشخص المناسب**: يؤخذ الموعد على رزنامة الحلاقة أو خبيرة التجميل أو القاعة، مع الاستراحات وأيام العطلة؛ والزبونة التي تريد «حلاقتها» تختارها. **العربون** يحجز الموعد: CIB والذهبية عبر الإنترنت إذا كان للصالون عقد تاجر إلكتروني، أو إثبات تحويل BaridiMob مسجَّل في غير ذلك، وباليورو للزبونة التي تحجز من فرنسا، بالتنظيم ذي البلدين الذي وصفناه في [مقابل Booking](/blog/creer-equivalent-booking-algerie-2027-reservation-hotels-depuis-la-france/).",
        "**التذكير** يُرسل قبل يومين ثم قبل ثلاث ساعات، عبر واتساب أو SMS، بزرّين: سآتي، أو أحرّر موعدي. **يوم الموعد** تُفتح بطاقة الزبونة: تركيبة آخر صباغة، حساسية، تفضيل سُجّل في المرة الماضية؛ ويُخصم العربون ويُدفع الباقي. **ما بعد**: يُقترح الموعد القادم قبل أن تغادر الزبونة، ويُعرض الإلغاء في آخر لحظة على قائمة الانتظار. هذه اللحظة الأخيرة هي التي تملأ الرزنامة دون إشهار.",
      ] },
      { heading: 'الحساب الذي يبرّر العربون', body: [
        "تسأل المسيّرة، وهي محقة، عمّا تجلبه لها الأداة. هذا هو الحساب الذي نجريه معها على أرقامها.",
      ], visual: 'noshow', after: [
        "لنأخذ صالوناً بأربع حلاقات، ستة مواعيد يومياً لكل واحدة، وستة وعشرين يوم عمل: **624 موعداً في الشهر**. إذا غابت 15 % من الزبونات فهذه 94 كرسياً فارغاً محجوزاً دون فائدة، وكثيراً ما رُفض لزبونة أخرى على الهاتف. وإذا خفّض العربون والتذكير الغياب إلى 5 % يبقى 31. **ثلاثة وستون موعداً إضافياً محترماً كل شهر**؛ بـ3 000 دج لمتوسط الموعد، نحو 189 000 دج من رقم الأعمال الشهري تعود، دون زبونة جديدة واحدة.",
        "إنه مثال على فرضيات وليس قياساً للسوق: نسبة 15 % في البداية و5 % بعدها تُستبدلان بما يلاحظه الصالون. وضبطان أهم من مبلغ العربون. أولاً، **لا تطلب العربون من الجميع**: الزبونة الوفية التي تأتي كل شهر لا تحتاجه؛ أما الزبونة الجديدة والخدمة الطويلة ويوم السبت وليلة العيد والعروس فنعم. ثانياً، **قاعدة إلغاء مكتوبة قبل الدفع**: إلى متى يُرجع العربون وما مصيره بعد ذلك. القاعدة الواضحة تمنع الخلاف، والقاعدة المكتشفة عند الإلغاء تثيره.",
      ] },
      { heading: 'ما يجب بناؤه: أداة الصالون أولاً', body: [
        "الإغراء هو البدء بالتطبيق الجميل الموجّه للزبونات. وهذا هو الخطأ الذي يُفشل أغلب مشاريع هذا النوع.",
      ], visual: 'stack', after: [
        "**جهة الزبونة**: صفحة حجز بالعربية والفرنسية، سريعة على هاتف بسيط، دون إلزام بإنشاء حساب، والعربون. **المنصة** تمسك رزنامة لكل عاملة ولكل قاعة بالمدد الحقيقية، وقواعد للعربون حسب الخدمة والزبونة الجديدة والموسم، والتذكير وقائمة الانتظار. **جهة الصالون**: بطاقة الزبونة، والصندوق الذي يخصم العربون ويغلق اليوم، والفريق: الجدول والعمولات وصلاحيات حسب الدور، لأن العاملة لا تحتاج إلى رؤية رقم الأعمال ولا أرقام كل الزبونات.",
        "**السرية ليست تفصيلاً في صالون نسائي.** كثير من الزبونات لا يردن أن تنتشر صورهن؛ صورة قبل وبعد لا تُنشر إلا بموافقة مسجَّلة، وبطاقة الزبونة تبقى في الصالون. والمعطيات الشخصية مؤطَّرة في الجزائر بالقانون 18-07: خادم باسمك، ودخول متتبَّع، ونسخ احتياطي يومي هي القاعدة. وعندما تصبح الرزنامة صحيحة، يستطيع [وكيل ذكاء اصطناعي](/blog/agent-ia-entreprise-algerie-2027-par-ou-commencer-ce-qui-marche/) الرد على رسائل إنستغرام وواتساب بالعربية أو الدارجة أو الفرنسية، واقتراح المواعيد الشاغرة وإرسال رابط العربون؛ وقبل ذلك سيجيب بسرعة لكن بخطأ.",
      ] },
      { heading: 'السوق التي لا تخدمها Planity: عرائس الجالية', body: [
        "سجّلت الجزائر نحو 280 000 زواج سنوياً في السنوات الأخيرة: 278 000 سنة 2023 حسب النشرة الديموغرافية للديوان الوطني للإحصائيات، ونحو 282 000 سنة 2024 حسب أرقام الديوان التي نقلتها الصحافة، في تراجع منذ عشر سنوات. يُحتفل بجزء منها صيفاً عندما تعود الجالية. والعروس التي تعيش في ليون وتتزوج في تلمسان في أوت عليها أن تحجز من فرنسا حلاقة، وخبيرة مكياج، وغالباً ماشطة للتصديرة وتغيير الألبسة، والحنة، والحمام، وأحياناً كراء الألبسة: **خمسة مقدّمي خدمات، خمسة تواريخ، واليوم بقدرها محادثات واتساب وتحويلات تقوم بها ابنة العم.**",
      ], visual: 'bride', after: [
        "**المنتج باقة منسَّقة**: تختار العروس الخدمات، وتدفع عربوناً واحداً، وتوزّع المنصة المواعيد على رزنامة كل مقدّم خدمة. تتم الاختيارات بالصور والفيديو في الأشهر السابقة؛ ويؤكد كل مقدّم تاريخه وساعته ومكانه في الأداة؛ ويُدفع الباقي لكل واحد على حدة. ويوم العرس يكون ترتيب المرور مكتوباً ومشتركاً، ويعرف الجميع متى تغيّر العروس لباسها.",
        "إنها أكبر سلة في المهنة، تُحجز قبل أشهر، وهي أيضاً الأكثر هشاشة: **مقدّم ينسحب فتسقط الباقة كلها.** لذلك يجب أن تتوقع المنصة بديلاً لكل خدمة، وقاعدة مكتوبة لما يحدث عند الانسحاب، ومتابعة العرابين التي تلقاها كل واحد. وهذا ليس وحدة تُضاف في النهاية: يُفكَّر فيه منذ التأطير، لأنه يفترض أن تتواصل رزنامات عدة صالونات فيما بينها.",
      ] },
      { heading: 'أي نموذج تبني', body: [
        "ستة نماذج تتكرر في المشاريع التي تُعرض علينا. لا تربح بالطريقة نفسها ولا تنكسر في الموضع نفسه.",
      ], visual: 'models', after: [
        "**الصالون أو السلسلة بحجزها الخاص** هو نقطة الانطلاق الأمتن: زبونات مباشرة، عربون، دون عمولة، وبيانات تبقى عندها. **البرنامج باشتراك للصالونات** هو النموذج الحقيقي لـPlanity، الذي فصّلناه في [إطلاق SaaS في الجزائر سنة 2027](/blog/lancer-un-saas-en-algerie-2027-abonnement-paiement-calendrier/): دخل متكرر، لكن بيع وتكوين صالوناً بصالون في عين المكان. **الدليل** يجلب الظهور والعمولات، ولا قيمة له إذا كانت المواعيد التي يعرضها خاطئة.",
        "**باقات العرائس** أكبر سلة وأكثرها تطلباً للتنسيق. **الخدمات في المنزل** تخدم العرائس والأمهات والأحياء البعيدة، وتلتحق بمنطق [التوصيل والجولات](/blog/plateforme-livraison-transport-algerie-2027-livreurs-cod-retours/). **الحمامات والسبا** تبيع مواعيد وقاعات بأوقات للنساء وأخرى للرجال، وفائدتها ملء الساعات الهادئة في الأسبوع. ننصح بالبدء بالسطر الأول، ثم فتح البرنامج لصالونات أخرى عندما يشتغل الأول، وترك الدليل للأخير.",
      ] },
      { heading: 'الجدول الزمني لسنة 2027', body: [
        "تاريخان مهمان سنة 2027. **رمضان المتوقع نحو 8 فيفري، ثم عيد الفطر نحو 9 مارس** حسب رؤية الهلال، مع ازدحام الصالونات ليالي العيد. و**موسم الأعراس الصيفي** الذي تحضّره الجالية في الربيع.",
        "**نوفمبر: التأطير المكتوب**، وملف التاجر الإلكتروني للدفع بـCIB والذهبية، يُطلق في الأسبوع الأول لأن آجال البنك لا تتعلق بك ولا بنا. **ديسمبر-جانفي: أداة الصالون**، الرزنامة، بطاقة الزبونة، الصندوق، العربون والتذكير. **نهاية جانفي: التجربة** في صالونين أو ثلاثة، بالتوازي مع الدفتر لمدة أسبوعين، لتشتغل خلال رمضان وتستوعب ليالي العيد. **مارس-أفريل: فتح باقات العرائس** للصيف، عندما تحجز الجالية رحلاتها. وهذا منسجم مع الآجال التي نعطيها في [كم يستغرق تطوير تطبيق سنة 2027](/blog/combien-de-temps-pour-developper-application-plateforme-algerie-2027-delais-reels/). البدء في مارس يعني تفويت العيد والوصول بعد حجوزات الصيف.",
      ] },
      { heading: 'ما يُفشل هذا النوع من المشاريع', body: [], list: [
        "**البدء بتطبيق الزبونات.** دون رزنامة في جهة الصالون، تبيع الصفحة مواعيد مأخوذة بالهاتف، وأول زبونة تأتي دون فائدة تحكي القصة للحي كله.",
        "**مدد خدمات خاطئة.** صباغة مضبوطة على ساعة تستغرق ساعتين ونصفاً، فتصبح الرزنامة خاطئة منذ الثالثة. الصالون يضبط المدد لكل خدمة ولكل عاملة.",
        "**عربون للجميع.** تغادر الزبونات الوفيات. العربون للجديدات والخدمات الطويلة وأيام الذروة والعرائس.",
        "**قاعدة إلغاء تُكتشف عند الإلغاء.** تُكتب قبل الدفع: إلى متى يُرجع العربون وما مصيره بعد ذلك.",
        "**صور تُنشر دون موافقة.** في صالون نسائي تذهب معها ثقة كل الزبونات. موافقة مسجَّلة، صورة بصورة.",
        "**باقة عروس دون بديل.** مقدّم ينسحب في جويلية فيسقط كل شيء. بديل لكل خدمة وقاعدة انسحاب مكتوبة.",
        "**الافتتاح بعد العيد.** يجب أن تشتغل التجربة قبل رمضان، وباقات الصيف تُفتح في مارس-أفريل.",
        "**الحسابات باسم المطوّر.** الخادم والنطاق والبيانات وحساب التاجر الإلكتروني باسمك منذ الأسبوع الأول.",
      ] },
      { heading: 'أسئلة شائعة', body: [], faq: [
        { q: "هل Planity موجودة في الجزائر؟", a: "لا، حسب علمنا: تعمل Planity في فرنسا وبعض الدول الأوروبية. في الجزائر توجد منصات محلية لحجز خدمات التجميل مثل ZinLook في العاصمة أو Beautify، والدفع فيها يتم في الصالون إلى نهاية أكتوبر 2026. أما العربون عبر الإنترنت والرزنامة لكل عاملة وباقات العرائس فما تزال قليلة التغطية." },
        { q: "كيف يأخذ الصالون عربوناً من زبونة في الجزائر؟", a: "عبر الإنترنت بـCIB أو الذهبية إذا كان للصالون عقد تاجر إلكتروني مع بنكه؛ وإلا بتحويل BaridiMob يُسجَّل إثباته في الأداة ويُطابَق يدوياً. وللزبونة التي تحجز من فرنسا، يمكن تحصيل العربون باليورو بتنظيم بين بلدين يُتحقق منه قبل التطوير." },
        { q: "كم يكون مبلغ العربون؟", a: "لا يوجد رقم عام. المهم: لا تطلبه من الزبونات الوفيات، واطلبه من الجديدات وللخدمات الطويلة وأيام الذروة والعرائس، واكتب قاعدة الإلغاء قبل الدفع. يجب أن يغطي المبلغ ما يكلّفه كرسي فارغ لا أكثر." },
        { q: "ألا يكفي برنامج صالون جاهز من السوق؟", a: "أحياناً. إذا كان برنامج موجود يسيّر رزنامة لكل عاملة والتذكير والصندوق، ويقبل عربوناً بوسائل دفع زبوناتك، سنقول لك ذلك. ويُبرَّر التطوير حسب الطلب للعربون بـCIB والذهبية واليورو، ولباقات العرائس متعددة المقدّمين، ولسلسلة من عدة صالونات، أو لمنصة تبيع برنامجها لصالونات أخرى." },
        { q: "هل يلزم تطبيق للهاتف أم تكفي صفحة؟", a: "للزبونة تكفي صفحة حجز سريعة بالعربية والفرنسية عند الإطلاق، ويأتي التطبيق عندما تعود الزبونات ويصبح الوفاء مهماً. أما للصالون فأداة الرزنامة والصندوق هي الأولى." },
        { q: "كم من الوقت يلزم للجاهزية؟", a: "نحو ثلاثة أشهر بين التأطير وتجربة في صالونين أو ثلاثة بالعربون والتذكير. ولكي تشتغل التجربة قبل رمضان 2027 وتستوعب ليالي العيد، يجب البدء في نوفمبر 2026؛ وتُضاف باقات العرائس بعد ذلك لافتتاح في مارس-أفريل." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "الدرس ليس «اصنع دليلاً»، بل جهّز الصالون، والدليل يأتي تقريباً وحده." },
      { after: 5, text: "خمسة مقدّمي خدمات، خمسة تواريخ، عربون واحد: إنها مشكلة تنسيق." },
    ],
    cta: { eyebrow: 'صف لنا مشروعك', title: "صالون أو سلسلة أو معهد أو حمام أو منصة للإطلاق، المدينة، عدد العاملات، كيف تأخذ اليوم المواعيد والعرابين، والموسم الذي تستهدفه. نعيد إليك النطاق والجدول والسعر الإجمالي مكتوبة قبل البدء.", body: "تبني Symloop برامج حجز وصندوق، وتطبيقات ومنصات لصالونات ومعاهد التجميل والحمامات في الجزائر، بالعربية والفرنسية والإنجليزية، مع العربون بالدينار واليورو. مهندسون كبار في الجزائر العاصمة وسطيف، سعر إجمالي وجدول مكتوبان، الخادم والبيانات باسمك." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: '/blog/creer-plateforme-location-voiture-algerie-2027-reservation-caution-etat-des-lieux/', kind: 'سلسلة #08', name: 'إنشاء منصة لكراء السيارات سنة 2027' },
      { href: '/blog/creer-equivalent-booking-algerie-2027-reservation-hotels-depuis-la-france/', kind: 'سلسلة #06', name: 'إنشاء مقابل Booking في الجزائر سنة 2027' },
      { href: '/blog/lancer-un-saas-en-algerie-2027-abonnement-paiement-calendrier/', kind: '2027', name: 'إطلاق SaaS في الجزائر سنة 2027' },
      { href: '/blog/agent-ia-entreprise-algerie-2027-par-ou-commencer-ce-qui-marche/', kind: '2027', name: 'وكيل ذكاء اصطناعي للمؤسسة سنة 2027' },
    ] },
  },
};

const KEYWORDS = "équivalent planity algérie, application réservation salon de coiffure algérie 2027, logiciel salon de beauté algérie, réservation en ligne institut de beauté algérie, acompte rendez-vous salon, no-show salon coiffure, forfait mariée algérie diaspora, réservation hammam en ligne algérie, salon booking app algeria, beauty salon software algeria, تطبيق حجز صالون حلاقة الجزائر 2027, برنامج تسيير صالون تجميل";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
