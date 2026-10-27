import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/creer-equivalent-airbnb-algerie-2026.mjs';

const SLUG = 'creer-equivalent-airbnb-algerie-2026';
const FIGURES = ['market', 'changes', 'architecture', 'timeline'];
const DATE = '2026-10-29';

const CONTENT = {
  fr: {
    kind: 'Vu en France, à construire en Algérie · 03', title: "Airbnb en Algérie : la demande existe, la plateforme non. Comment lancer la location saisonnière qui tient (guide fondateur 2026).",
    dek: "Chaque été, des centaines de milliers de familles de la diaspora cherchent un appartement à Béjaïa, Aïn El Turck, Jijel ou Alger, et le trouvent dans un groupe Facebook, sans paiement, sans recours. Pourquoi Airbnb ne règle pas le problème, qui loue vraiment, ce qui doit changer, l'architecture, le calendrier et le cadre à vérifier.",
    publishedAt: 'Octobre 2026', readTime: '11 min de lecture', author: 'Symloop', about: ['Airbnb', 'Location saisonnière', 'Algérie', 'Startup', 'Diaspora'],
    intro: [
      "**Réponse courte.** Airbnb affiche des logements en Algérie, mais le modèle n'y fonctionne pas : l'hôte algérien sans compte bancaire à l'étranger ne peut pas recevoir ses versements, le voyageur local ne peut pas payer avec sa carte CIB, et personne ne vérifie le logement. Résultat, la location saisonnière, massive de juin à septembre, se fait dans des groupes Facebook et sur Ouedkniss, en espèces, sur la confiance. **Le marché n'a pas besoin d'une copie d'Airbnb. Il a besoin de deux choses qu'Airbnb ne peut pas fournir ici : un paiement qui marche dans les deux sens, acompte en dinars et versement à l'hôte dans le pays, et une confiance construite autrement, par la vérification physique des logements.** Ce guide détaille le marché, ce qui doit changer, l'architecture, le calendrier d'une première saison et le cadre légal à vérifier avant de commencer.",
      "C'est le troisième épisode de notre série « Vu en France, à construire en Algérie », après [Doctolib](/blog/creer-equivalent-doctolib-algerie-2026/) et [Uber Eats](/blog/creer-equivalent-uber-eats-algerie-2026/). Le cadre général du fondateur de la diaspora est dans [notre guide dédié](/blog/lancer-startup-tech-algerie-depuis-france-diaspora-2026/).",
    ],
    sections: [
      { heading: "Ce qu'Airbnb a prouvé, et ce qu'il ne peut pas faire en Algérie", body: [
        "Airbnb a prouvé trois choses. Qu'un particulier accepte de louer son logement à un inconnu si quelqu'un garantit le paiement. Qu'un voyageur accepte de payer d'avance si quelqu'un garantit le logement. Et que les avis, accumulés, remplacent la connaissance personnelle. Les trois reposent sur une seule pièce : la plateforme encaisse le voyageur, garde l'argent, et verse l'hôte après l'arrivée. Sans cette pièce, il ne reste qu'un annuaire de photos.",
        "En Algérie, cette pièce manque. Les versements d'Airbnb passent par un compte bancaire, PayPal ou une carte compatible, que la plupart des hôtes algériens n'ont pas ; sur les forums de la plateforme, la question « comment être payé depuis l'Algérie » reste sans réponse. Côté voyageur, la carte CIB ou Edahabia n'est pas acceptée. Airbnb reste donc utilisable par un hôte de la diaspora qui loue l'appartement familial à d'autres membres de la diaspora, et par personne d'autre. Ce n'est pas un marché, c'est une niche.",
      ] },
      { heading: "L'état réel du marché algérien en 2026", body: [
        "La demande est l'une des plus concentrées au monde : de juin à septembre, la diaspora rentre et les familles algériennes partent vers la côte. Les prix des locations à Béjaïa, Tipaza, Oran ou Jijel s'affichent au jour et se négocient par téléphone. Les requêtes « Airbnb Algérie » sont parmi les plus fréquentes que nous mesurons dans les recherches venant de France ; dans leur grande majorité, elles viennent de voyageurs qui cherchent à louer, pas d'hôtes.",
        "L'offre existe aussi, et elle est énorme : des appartements familiaux vides dix mois par an, des résidences de bord de mer, des maisons de vacances. Elle se loue aujourd'hui de cinq façons, dont aucune ne fournit à la fois la confiance et le paiement.",
      ], visual: 'market', after: [
        "Des plateformes locales apparaissent : une application lancée au printemps 2026 se présente par exemple comme une plateforme de réservation de logements et d'expériences pour la diaspora et les voyageurs en Algérie. Le signal est clair, le marché est ouvert ; aucune n'a encore la densité d'offre qui déclenche l'effet de réseau. **La question n'est pas si quelqu'un va le faire, mais qui le fera avec le bon paiement et la bonne confiance.**",
      ] },
      { heading: "Ce qui doit changer par rapport au modèle Airbnb", body: [
        "Copier les écrans d'Airbnb est facile. Six points changent, et les deux premiers décident de tout.",
      ], visual: 'changes', after: [
        "**Le paiement du voyageur.** Un acompte, pas le total : vingt à trente pour cent à la réservation, payé en CIB ou Edahabia via SATIM pour un voyageur en Algérie, le solde en espèces à l'arrivée. L'acompte engage les deux parties et finance la plateforme. Nous avons documenté [l'intégration du paiement CIB et Edahabia](/blog/ecommerce-algerie-paiement-cib-edahabia-2024/).",
        "**Le versement à l'hôte.** En dinars, dans le pays, par virement ou sur carte CIB, après l'arrivée du voyageur. C'est la pièce qu'Airbnb ne peut pas fournir et que vous pouvez fournir, à condition d'en cadrer le statut juridique et fiscal avec un expert-comptable dès le départ.",
        "**Le voyageur de la diaspora.** Il réserve depuis la France et veut payer en euros avec sa carte. Encaisser en euros demande une entité et un prestataire de paiement hors d'Algérie, et le transfert vers l'hôte algérien doit respecter la réglementation des changes. C'est le point le plus délicat du projet ; il se cadre juridiquement avant d'écrire une ligne de code, pas après. Beaucoup de projets choisissent d'ouvrir d'abord aux voyageurs qui paient en dinars, et d'ajouter l'euro dans un second temps.",
        "**La confiance.** Sans historique d'avis, elle se construit physiquement : identité de l'hôte par téléphone et pièce, visite du logement par votre équipe avec photos datées, caution encadrée, et une équipe de médiation joignable pendant la saison. Les avis viendront après la première saison, pas avant.",
        "**Le cadre légal.** La location saisonnière relève en Algérie de la loi 99-06 sur le tourisme et des textes sur l'hébergement touristique meublé ; les sources que nous avons consultées évoquent une autorisation communale, la déclaration des voyageurs étrangers aux services de sécurité, une assurance et un régime fiscal pour l'hôte. Ces règles évoluent et les sources se contredisent sur les détails : **faites valider le cadre par un avocat algérien avant le lancement**, et intégrez la déclaration des voyageurs dans le produit plutôt que de la laisser à l'hôte.",
        "**La saisonnalité.** Quatre mois font l'année. L'infrastructure, l'équipe de médiation et le recrutement des hôtes se dimensionnent pour juillet, pas pour la moyenne.",
      ] },
      { heading: "L'architecture technique", body: [
        "Le produit n'est ni la carte ni les photos. C'est un calendrier unique par logement et un flux d'argent qui entre par acompte et ressort vers l'hôte. Tout le reste est une application immobilière classique, comme celles que nous décrivons dans notre guide des [applications immobilières en Algérie](/blog/application-immobilier-algerie-2024/).",
      ], visual: 'architecture', after: [
        "Deux composants concentrent le risque. **Le calendrier**, parce qu'un hôte qui loue aussi sur Facebook crée des doubles réservations : le produit doit rendre la mise à jour plus facile que l'oubli, par une application hôte à deux écrans. **La caution et les litiges**, parce qu'une saison sans règles écrites finit en appels téléphoniques à deux heures du matin. Les règles se publient, l'équipe de médiation existe avant la première réservation, et la plateforme garde une trace de tout.",
      ] },
      { heading: 'Budget et calendrier : une ville, cent logements, un été', body: [
        "Deux applications, voyageur et hôte, un calendrier, un paiement en deux temps et un back-office de vérification placent le projet en catégorie 3 de notre [grille de prix des applications en Algérie](/blog/prix-application-mobile-algerie-2026/), hors équipe terrain et marketing. Le calendrier est dicté par la saison : on ouvre avant juin ou on attend un an.",
      ], visual: 'timeline', after: [
        "La règle qui compte : **cent logements vérifiés dans une seule ville balnéaire valent mieux que mille annonces non vérifiées dans tout le pays.** Le recrutement des hôtes se fait pendant le développement, hors saison, par une équipe qui visite chaque logement. C'est la même leçon que pour Doctolib et Uber Eats, la densité locale avant l'étendue nationale, avec une contrainte de plus : la date butoir de juin.",
      ] },
      { heading: 'Les erreurs qui tuent ce projet', body: [], list: [
        "**Encaisser le total à la réservation.** Le voyageur algérien ne paiera pas cent pour cent d'avance à une plateforme nouvelle. L'acompte, oui.",
        "**Lancer sans régler le versement aux hôtes.** C'est précisément la raison pour laquelle Airbnb n'occupe pas le marché. Si vous ne la réglez pas, vous êtes Airbnb en moins bien.",
        "**Commencer par les paiements en euros.** Le cadre juridique et de change prend des mois. Ouvrez en dinars, ajoutez l'euro quand la structure est prête.",
        "**Ouvrir en juillet avec dix logements.** La saison est passée avant que l'offre existe. Visez juin avec cent logements vérifiés.",
        "**Laisser la confiance aux avis.** Il n'y en a pas la première année. La confiance se construit par la visite et la caution.",
      ] },
      { heading: 'Questions fréquentes', body: [], faq: [
        { q: "Airbnb fonctionne-t-il en Algérie ?", a: "Des logements y sont affichés, mais les hôtes algériens sans compte à l'étranger ne peuvent pas recevoir leurs versements et les voyageurs ne peuvent pas payer en CIB ou Edahabia. En pratique, Airbnb y sert surtout à des hôtes de la diaspora louant à d'autres membres de la diaspora." },
        { q: "Quel est l'équivalent d'Airbnb en Algérie ?", a: "Il n'existe pas encore de plateforme à usage de masse. La location saisonnière passe par les groupes Facebook, Ouedkniss et les agences locales. Des plateformes locales récentes apparaissent, sans encore la densité d'offre nécessaire." },
        { q: "Comment un voyageur paie-t-il sur une plateforme algérienne ?", a: "Par un acompte en CIB ou Edahabia à la réservation, et le solde en espèces à l'arrivée. Le paiement en euros depuis la France demande une entité et un prestataire hors d'Algérie, à cadrer juridiquement avant le lancement." },
        { q: "La location saisonnière est-elle légale en Algérie ?", a: "Oui, dans le cadre de la loi 99-06 sur le tourisme et des textes sur l'hébergement touristique meublé, avec des obligations d'autorisation, de déclaration des voyageurs étrangers, d'assurance et de fiscalité selon les sources consultées. Les détails évoluent : faites-les valider par un avocat algérien avant le lancement." },
        { q: "Combien de temps et quel budget ?", a: "Six mois jusqu'à une première saison dans une ville, avec cent logements vérifiés. Le projet se situe en catégorie 3 de notre grille de prix, hors équipe terrain et marketing." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "Le marché n'a pas besoin d'une copie d'Airbnb. Il a besoin d'un paiement qui marche dans les deux sens et d'une confiance construite par la visite." },
      { after: 4, text: "Cent logements vérifiés dans une ville valent mieux que mille annonces non vérifiées dans tout le pays." },
    ],
    cta: { eyebrow: 'Vous avez vu le modèle fonctionner', title: "Construisons la version algérienne. Décrivez votre ville cible, votre position sur le paiement et votre calendrier : nous vous dirons quoi lancer en premier pour être prêts avant juin.", body: "Symloop conçoit des plateformes de réservation, de paiement et de gestion immobilière pour le marché algérien, avec des ingénieurs seniors à Alger et Sétif qui ont livré des intégrations CIB, Edahabia et SATIM en production. Nous travaillons avec des fondateurs établis en France sur leur fuseau horaire, avec un cadrage écrit, des jalons et la propriété totale du code." },
    related: { label: 'À lire ensuite', items: [
      { href: '/blog/creer-equivalent-uber-eats-algerie-2026/', kind: 'Série · 02', name: "Uber Eats en Algérie : qui livre vraiment, comment lancer la version qui tient" },
      { href: '/blog/creer-equivalent-doctolib-algerie-2026/', kind: 'Série · 01', name: 'Doctolib en Algérie : lancer la prise de rendez-vous médical en ligne' },
      { href: '/blog/lancer-startup-tech-algerie-depuis-france-diaspora-2026/', kind: 'Guide fondateur', name: 'Lancer une startup tech en Algérie depuis la France' },
      { href: '/blog/logiciel-hotel-reservation-hebergement-algerie-2026/', kind: 'Guide', name: "Logiciel de réservation et d'hébergement en Algérie" },
    ] },
  },
  en: {
    kind: 'Seen in France, to be built in Algeria · 03', title: 'Airbnb in Algeria: the demand exists, the platform does not. How to launch short-term rental that lasts (founder guide 2026).',
    dek: "Every summer, hundreds of thousands of diaspora families look for a flat in Béjaïa, Aïn El Turck, Jijel or Algiers, and find it in a Facebook group, with no payment and no recourse. Why Airbnb does not solve the problem, who really rents, what must change, the architecture, the timeline and the legal frame to check.",
    publishedAt: 'October 2026', readTime: '11 min read', author: 'Symloop', about: ['Airbnb', 'Short-term rental', 'Algeria', 'Startup', 'Diaspora'],
    intro: [
      "**Short answer.** Airbnb lists homes in Algeria, but the model does not work there: an Algerian host without a foreign bank account cannot receive payouts, a local guest cannot pay with a CIB card, and nobody verifies the home. As a result, short-term rental, massive from June to September, happens in Facebook groups and on Ouedkniss, in cash, on trust. **The market does not need a copy of Airbnb. It needs two things Airbnb cannot provide here: a payment that works both ways, a deposit in dinars and a payout to the host inside the country, and trust built differently, through physical verification of homes.** This guide covers the market, what must change, the architecture, the timeline of a first season and the legal frame to check before starting.",
      "This is the third episode of our series \"Seen in France, to be built in Algeria\", after [Doctolib](/blog/creer-equivalent-doctolib-algerie-2026/) and [Uber Eats](/blog/creer-equivalent-uber-eats-algerie-2026/). The general frame for a diaspora founder is in [our dedicated guide](/blog/lancer-startup-tech-algerie-depuis-france-diaspora-2026/).",
    ],
    sections: [
      { heading: 'What Airbnb proved, and what it cannot do in Algeria', body: [
        "Airbnb proved three things. That an individual agrees to rent their home to a stranger if someone guarantees the payment. That a traveller agrees to pay in advance if someone guarantees the home. And that accumulated reviews replace personal acquaintance. All three rest on one piece: the platform collects from the guest, holds the money, and pays the host after check-in. Without that piece, only a directory of photos remains.",
        "In Algeria, that piece is missing. Airbnb payouts go through a bank account, PayPal or a compatible card, which most Algerian hosts do not have; on the platform's own forums, the question \"how do I get paid from Algeria\" goes unanswered. On the guest side, CIB and Edahabia cards are not accepted. So Airbnb remains usable by a diaspora host renting the family flat to other diaspora members, and by nobody else. That is not a market, it is a niche.",
      ] },
      { heading: 'The real state of the Algerian market in 2026', body: [
        "Demand is among the most concentrated in the world: from June to September, the diaspora comes home and Algerian families head for the coast. Rental prices in Béjaïa, Tipaza, Oran or Jijel are quoted per day and negotiated by phone. \"Airbnb Algérie\" queries are among the most frequent we measure in searches coming from France; the vast majority come from travellers looking to rent, not from hosts.",
        "Supply exists too, and it is huge: family flats empty ten months a year, seaside residences, holiday homes. It is rented today in five ways, none of which provides both trust and payment.",
      ], visual: 'market', after: [
        "Local platforms are appearing: an app launched in spring 2026 presents itself, for example, as a booking platform for homes and experiences for the diaspora and travellers in Algeria. The signal is clear, the market is open; none yet has the supply density that triggers the network effect. **The question is not whether someone will do it, but who will do it with the right payment and the right trust.**",
      ] },
      { heading: 'What must change from the Airbnb model', body: [
        "Copying Airbnb's screens is easy. Six points change, and the first two decide everything.",
      ], visual: 'changes', after: [
        "**Guest payment.** A deposit, not the total: twenty to thirty percent at booking, paid by CIB or Edahabia through SATIM for a guest in Algeria, the balance in cash on arrival. The deposit commits both parties and funds the platform. We documented [CIB and Edahabia payment integration](/blog/ecommerce-algerie-paiement-cib-edahabia-2024/).",
        "**Host payout.** In dinars, inside the country, by transfer or to a CIB card, after the guest checks in. It is the piece Airbnb cannot provide and you can, provided you frame its legal and tax status with an accountant from the start.",
        "**The diaspora guest.** They book from France and want to pay in euros with their card. Collecting euros requires an entity and a payment provider outside Algeria, and the transfer to the Algerian host must comply with exchange regulations. It is the most delicate point of the project; it is framed legally before writing a line of code, not after. Many projects choose to open first to guests paying in dinars, and add the euro later.",
        "**Trust.** Without a history of reviews, it is built physically: host identity by phone and ID, a visit of the home by your team with dated photos, a framed security deposit, and a mediation team reachable during the season. Reviews come after the first season, not before.",
        "**The legal frame.** Short-term rental in Algeria falls under Law 99-06 on tourism and the texts on furnished tourist accommodation; the sources we consulted mention a municipal authorisation, the declaration of foreign guests to the security services, insurance and a tax regime for the host. These rules evolve and the sources contradict each other on details: **have the frame validated by an Algerian lawyer before launch**, and build the guest declaration into the product rather than leaving it to the host.",
        "**Seasonality.** Four months make the year. Infrastructure, the mediation team and host recruitment are sized for July, not for the average.",
      ] },
      { heading: 'The technical architecture', body: [
        "The product is neither the map nor the photos. It is a single calendar per home and a money flow that comes in as a deposit and goes out to the host. Everything else is a classic real-estate app, like the ones we describe in our guide to [real-estate apps in Algeria](/blog/application-immobilier-algerie-2024/).",
      ], visual: 'architecture', after: [
        "Two components concentrate the risk. **The calendar**, because a host who also rents on Facebook creates double bookings: the product must make updating easier than forgetting, through a two-screen host app. **Security deposit and disputes**, because a season without written rules ends in phone calls at two in the morning. Rules are published, the mediation team exists before the first booking, and the platform keeps a trace of everything.",
      ] },
      { heading: 'Budget and timeline: one city, one hundred homes, one summer', body: [
        "Two apps, guest and host, a calendar, a two-step payment and a verification back-office place the project in category 3 of our [app price grid for Algeria](/blog/prix-application-mobile-algerie-2026/), excluding field team and marketing. The timeline is dictated by the season: you open before June or you wait a year.",
      ], visual: 'timeline', after: [
        "The rule that counts: **one hundred verified homes in a single seaside city beat a thousand unverified listings nationwide.** Host recruitment happens during development, off season, by a team that visits every home. It is the same lesson as for Doctolib and Uber Eats, local density before national reach, with one more constraint: the June deadline.",
      ] },
      { heading: 'The mistakes that kill this project', body: [], list: [
        "**Collecting the full amount at booking.** The Algerian guest will not pay one hundred percent upfront to a new platform. A deposit, yes.",
        "**Launching without solving host payouts.** That is precisely why Airbnb does not own the market. If you do not solve it, you are a worse Airbnb.",
        "**Starting with euro payments.** The legal and exchange frame takes months. Open in dinars, add the euro when the structure is ready.",
        "**Opening in July with ten homes.** The season is over before supply exists. Aim for June with one hundred verified homes.",
        "**Leaving trust to reviews.** There are none the first year. Trust is built through the visit and the deposit.",
      ] },
      { heading: 'Frequently asked questions', body: [], faq: [
        { q: 'Does Airbnb work in Algeria?', a: 'Homes are listed there, but Algerian hosts without a foreign account cannot receive payouts and guests cannot pay with CIB or Edahabia. In practice, Airbnb there mostly serves diaspora hosts renting to other diaspora members.' },
        { q: 'What is the Airbnb equivalent in Algeria?', a: 'There is no mass-adoption platform yet. Short-term rental goes through Facebook groups, Ouedkniss and local agencies. Recent local platforms are appearing, without the necessary supply density yet.' },
        { q: 'How does a guest pay on an Algerian platform?', a: 'With a CIB or Edahabia deposit at booking, and the balance in cash on arrival. Paying in euros from France requires an entity and a provider outside Algeria, to be framed legally before launch.' },
        { q: 'Is short-term rental legal in Algeria?', a: 'Yes, within Law 99-06 on tourism and the texts on furnished tourist accommodation, with obligations of authorisation, declaration of foreign guests, insurance and tax according to the sources consulted. Details evolve: have them validated by an Algerian lawyer before launch.' },
        { q: 'How long and what budget?', a: 'Six months to a first season in one city, with one hundred verified homes. The project sits in category 3 of our price grid, excluding field team and marketing.' },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: 'The market does not need a copy of Airbnb. It needs a payment that works both ways and trust built through the visit.' },
      { after: 4, text: 'One hundred verified homes in one city beat a thousand unverified listings nationwide.' },
    ],
    cta: { eyebrow: 'You have seen the model work', title: "Let's build the Algerian version. Describe your target city, your position on payment and your timeline: we will tell you what to launch first to be ready before June.", body: 'Symloop designs booking, payment and property management platforms for the Algerian market, with senior engineers in Algiers and Sétif who have shipped CIB, Edahabia and SATIM integrations in production. We work with founders based in France in their time zone, with a written scope, milestones and full code ownership.' },
    related: { label: 'Read next', items: [
      { href: '/blog/creer-equivalent-uber-eats-algerie-2026/', kind: 'Series · 02', name: 'Uber Eats in Algeria: who really delivers, how to launch the version that lasts' },
      { href: '/blog/creer-equivalent-doctolib-algerie-2026/', kind: 'Series · 01', name: 'Doctolib in Algeria: launching online medical booking' },
      { href: '/blog/lancer-startup-tech-algerie-depuis-france-diaspora-2026/', kind: 'Founder guide', name: 'Launching a tech startup in Algeria from France' },
      { href: '/blog/logiciel-hotel-reservation-hebergement-algerie-2026/', kind: 'Guide', name: 'Booking and accommodation software in Algeria' },
    ] },
  },
  ar: {
    kind: 'رأيته في فرنسا، ابنِه في الجزائر · 03', title: 'Airbnb في الجزائر: الطلب موجود والمنصة لا. كيف تطلق الإيجار الموسمي الذي يصمد (دليل المؤسس 2026).',
    dek: 'كل صيف تبحث مئات آلاف عائلات الجالية عن شقة في بجاية أو عين الترك أو جيجل أو الجزائر، وتجدها في مجموعة فيسبوك بلا دفع ولا طعن. لماذا لا يحل Airbnb المشكلة، من يؤجّر فعلاً، ما يجب تغييره، البنية، الجدول الزمني والإطار الواجب التحقق منه.',
    publishedAt: 'أكتوبر 2026', readTime: '11 دقيقة قراءة', author: 'سيملوب', about: ['Airbnb', 'الإيجار الموسمي', 'الجزائر', 'شركة ناشئة', 'الجالية'],
    intro: [
      '**الجواب المختصر.** يعرض Airbnb مساكن في الجزائر لكن النموذج لا يعمل فيها: المضيف الجزائري بلا حساب بنكي في الخارج لا يستطيع استلام أمواله، والمسافر المحلي لا يستطيع الدفع ببطاقة CIB، ولا أحد يتحقق من السكن. النتيجة أن الإيجار الموسمي، الضخم من جوان إلى سبتمبر، يتم في مجموعات فيسبوك وعلى Ouedkniss نقداً وعلى الثقة. **لا تحتاج السوق نسخة من Airbnb. تحتاج شيئين لا يستطيع Airbnb توفيرهما هنا: دفعاً يعمل في الاتجاهين، عربون بالدينار وتحويل للمضيف داخل البلاد، وثقة تُبنى بطريقة مختلفة عبر التحقق الفعلي من المساكن.** يفصّل هذا الدليل السوق وما يجب تغييره والبنية وجدول الموسم الأول والإطار القانوني الواجب التحقق منه قبل البدء.',
      'هذه الحلقة الثالثة من سلسلتنا «رأيته في فرنسا، ابنِه في الجزائر» بعد [Doctolib](/blog/creer-equivalent-doctolib-algerie-2026/) و[Uber Eats](/blog/creer-equivalent-uber-eats-algerie-2026/). الإطار العام لمؤسس الجالية في [دليلنا المخصص](/blog/lancer-startup-tech-algerie-depuis-france-diaspora-2026/).',
    ],
    sections: [
      { heading: 'ما أثبته Airbnb، وما لا يستطيع فعله في الجزائر', body: [
        'أثبت Airbnb ثلاثة أشياء. أن فرداً يقبل تأجير مسكنه لغريب إذا ضمن أحد الدفع. وأن مسافراً يقبل الدفع مسبقاً إذا ضمن أحد السكن. وأن التقييمات المتراكمة تعوّض المعرفة الشخصية. الثلاثة تقوم على قطعة واحدة: المنصة تقبض من المسافر وتحتفظ بالمال وتدفع للمضيف بعد الوصول. بدون هذه القطعة لا يبقى سوى دليل صور.',
        'في الجزائر هذه القطعة مفقودة. تمر تحويلات Airbnb عبر حساب بنكي أو PayPal أو بطاقة متوافقة لا يملكها أغلب المضيفين الجزائريين؛ وفي منتديات المنصة يبقى سؤال «كيف أُدفَع من الجزائر» بلا جواب. ومن جهة المسافر لا تُقبل بطاقة CIB ولا الذهبية. فيبقى Airbnb صالحاً لمضيف من الجالية يؤجّر شقة العائلة لأفراد آخرين من الجالية، ولا أحد غيرهم. هذه ليست سوقاً بل زاوية ضيقة.',
      ] },
      { heading: 'الحالة الحقيقية للسوق الجزائرية في 2026', body: [
        'الطلب من الأكثر تركّزاً في العالم: من جوان إلى سبتمبر تعود الجالية وتتجه العائلات الجزائرية إلى الساحل. أسعار الإيجار في بجاية وتيبازة ووهران وجيجل تُعلن باليوم وتُفاوَض بالهاتف. استعلامات «Airbnb Algérie» من الأكثر تكراراً فيما نقيسه من عمليات البحث القادمة من فرنسا؛ وأغلبيتها الساحقة من مسافرين يبحثون عن إيجار لا من مضيفين.',
        'والعرض موجود أيضاً وهو هائل: شقق عائلية فارغة عشرة أشهر في السنة، إقامات على البحر، بيوت عطل. تُؤجَّر اليوم بخمس طرق لا توفر أي منها الثقة والدفع معاً.',
      ], visual: 'market', after: ['تظهر منصات محلية: تطبيق أُطلق في ربيع 2026 يقدّم نفسه مثلاً كمنصة حجز مساكن وتجارب للجالية والمسافرين في الجزائر. الإشارة واضحة والسوق مفتوحة؛ ولم تبلغ أي منها بعد كثافة العرض التي تطلق أثر الشبكة. **السؤال ليس هل سيفعلها أحد، بل من سيفعلها بالدفع الصحيح والثقة الصحيحة.**'] },
      { heading: 'ما يجب تغييره مقارنة بنموذج Airbnb', body: ['نسخ شاشات Airbnb سهل. ست نقاط تتغير، والأوليان تقرران كل شيء.'], visual: 'changes', after: [
        '**دفع المسافر.** عربون لا الإجمالي: عشرون إلى ثلاثون في المئة عند الحجز بـCIB أو الذهبية عبر SATIM لمسافر في الجزائر، والباقي نقداً عند الوصول. يُلزم العربون الطرفين ويموّل المنصة. وثّقنا [تكامل الدفع CIB والذهبية](/blog/ecommerce-algerie-paiement-cib-edahabia-2024/).',
        '**التحويل للمضيف.** بالدينار، داخل البلاد، بتحويل أو على بطاقة CIB بعد وصول المسافر. هذه القطعة التي لا يستطيع Airbnb توفيرها وتستطيعها أنت، شرط تأطير وضعها القانوني والضريبي مع محاسب خبير منذ البداية.',
        '**مسافر الجالية.** يحجز من فرنسا ويريد الدفع باليورو ببطاقته. قبض اليورو يتطلب كياناً ومزوّد دفع خارج الجزائر، ويجب أن يحترم التحويل إلى المضيف الجزائري تنظيم الصرف. هذه أدق نقطة في المشروع؛ تُؤطَّر قانونياً قبل كتابة سطر كود لا بعده. يختار مشاريع كثيرة الافتتاح أولاً للمسافرين الذين يدفعون بالدينار وإضافة اليورو لاحقاً.',
        '**الثقة.** بلا سجل تقييمات تُبنى فعلياً: هوية المضيف بالهاتف والوثيقة، زيارة السكن من فريقك بصور مؤرخة، كفالة مؤطرة، وفريق وساطة متاح خلال الموسم. تأتي التقييمات بعد الموسم الأول لا قبله.',
        '**الإطار القانوني.** يخضع الإيجار الموسمي في الجزائر للقانون 99-06 المتعلق بالسياحة والنصوص الخاصة بالإيواء السياحي المفروش؛ وتذكر المصادر التي راجعناها ترخيصاً بلدياً والتصريح بالمسافرين الأجانب لمصالح الأمن وتأميناً ونظاماً ضريبياً للمضيف. هذه القواعد تتطور وتتناقض المصادر في التفاصيل: **اطلب مصادقة محامٍ جزائري على الإطار قبل الإطلاق**، وأدمج التصريح بالمسافرين في المنتج بدل تركه للمضيف.',
        '**الموسمية.** أربعة أشهر تصنع السنة. تُقاس البنية وفريق الوساطة واستقطاب المضيفين على جويلية لا على المتوسط.',
      ] },
      { heading: 'البنية التقنية', body: ['المنتج ليس الخريطة ولا الصور. إنه تقويم واحد لكل سكن وتدفق مالي يدخل عربوناً ويخرج إلى المضيف. كل ما عداه تطبيق عقاري كلاسيكي كالذي نصفه في دليل [التطبيقات العقارية في الجزائر](/blog/application-immobilier-algerie-2024/).'], visual: 'architecture', after: ['مكوّنان يركّزان الخطر. **التقويم**، لأن مضيفاً يؤجّر أيضاً على فيسبوك يخلق حجوزات مزدوجة: يجب أن يجعل المنتج التحديث أسهل من النسيان عبر تطبيق مضيف بشاشتين. **الكفالة والنزاعات**، لأن موسماً بلا قواعد مكتوبة ينتهي بمكالمات في الثانية فجراً. تُنشر القواعد ويوجد فريق الوساطة قبل أول حجز وتحتفظ المنصة بأثر كل شيء.'] },
      { heading: 'الميزانية والجدول الزمني: مدينة واحدة، مئة سكن، صيف واحد', body: ['تطبيقان، للمسافر والمضيف، وتقويم ودفع على مرحلتين وإدارة خلفية للتحقق تضع المشروع في الفئة 3 من [شبكة أسعار التطبيقات في الجزائر](/blog/prix-application-mobile-algerie-2026/)، دون الفريق الميداني والتسويق. الموسم يملي الجدول: نفتتح قبل جوان أو ننتظر سنة.'], visual: 'timeline', after: ['القاعدة التي تهم: **مئة سكن موثّق في مدينة ساحلية واحدة أفضل من ألف إعلان غير موثّق في كل البلاد.** يتم استقطاب المضيفين أثناء التطوير خارج الموسم بفريق يزور كل سكن. الدرس نفسه كما في Doctolib وUber Eats، الكثافة المحلية قبل الانتشار الوطني، مع قيد إضافي: موعد جوان النهائي.'] },
      { heading: 'الأخطاء التي تقتل هذا المشروع', body: [], list: [
        '**قبض الإجمالي عند الحجز.** لن يدفع المسافر الجزائري مئة في المئة مقدّماً لمنصة جديدة. العربون نعم.',
        '**الإطلاق دون حل تحويل الأموال للمضيفين.** هذا بالضبط سبب عدم استحواذ Airbnb على السوق. إن لم تحله فأنت Airbnb أسوأ.',
        '**البدء بالدفع باليورو.** الإطار القانوني وإطار الصرف يستغرقان أشهراً. افتتح بالدينار وأضف اليورو عندما يجهز الهيكل.',
        '**الافتتاح في جويلية بعشرة مساكن.** ينقضي الموسم قبل وجود العرض. استهدف جوان بمئة سكن موثّق.',
        '**ترك الثقة للتقييمات.** لا توجد في السنة الأولى. تُبنى الثقة بالزيارة والكفالة.',
      ] },
      { heading: 'أسئلة شائعة', body: [], faq: [
        { q: 'هل يعمل Airbnb في الجزائر؟', a: 'تُعرض فيه مساكن لكن المضيفين الجزائريين بلا حساب في الخارج لا يستطيعون استلام أموالهم ولا يستطيع المسافرون الدفع بـCIB أو الذهبية. عملياً يخدم Airbnb هناك مضيفين من الجالية يؤجّرون لأفراد آخرين من الجالية.' },
        { q: 'ما هو مكافئ Airbnb في الجزائر؟', a: 'لا توجد بعد منصة بانتشار جماهيري. يمر الإيجار الموسمي عبر مجموعات فيسبوك وOuedkniss والوكالات المحلية. تظهر منصات محلية حديثة دون كثافة العرض اللازمة بعد.' },
        { q: 'كيف يدفع المسافر على منصة جزائرية؟', a: 'بعربون CIB أو الذهبية عند الحجز والباقي نقداً عند الوصول. الدفع باليورو من فرنسا يتطلب كياناً ومزوّداً خارج الجزائر يُؤطَّران قانونياً قبل الإطلاق.' },
        { q: 'هل الإيجار الموسمي قانوني في الجزائر؟', a: 'نعم، في إطار القانون 99-06 المتعلق بالسياحة والنصوص الخاصة بالإيواء السياحي المفروش، مع التزامات ترخيص وتصريح بالمسافرين الأجانب وتأمين وضرائب حسب المصادر. التفاصيل تتطور: اطلب مصادقة محامٍ جزائري قبل الإطلاق.' },
        { q: 'كم من الوقت وأي ميزانية؟', a: 'ستة أشهر حتى موسم أول في مدينة واحدة بمئة سكن موثّق. يقع المشروع في الفئة 3 من شبكة أسعارنا دون الفريق الميداني والتسويق.' },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: 'لا تحتاج السوق نسخة من Airbnb. تحتاج دفعاً يعمل في الاتجاهين وثقة تُبنى بالزيارة.' },
      { after: 4, text: 'مئة سكن موثّق في مدينة واحدة أفضل من ألف إعلان غير موثّق في كل البلاد.' },
    ],
    cta: { eyebrow: 'رأيت النموذج يعمل', title: 'لنبنِ النسخة الجزائرية. صف مدينتك المستهدفة وموقفك من الدفع وجدولك الزمني: سنخبرك بما تطلقه أولاً لتكون جاهزاً قبل جوان.', body: 'تصمم سيملوب منصات الحجز والدفع والتسيير العقاري للسوق الجزائرية بمهندسين خبراء في الجزائر وسطيف سلّموا تكاملات CIB والذهبية وSATIM في الإنتاج. نعمل مع مؤسسين مقيمين في فرنسا في منطقتهم الزمنية بتأطير مكتوب ومراحل وملكية كاملة للكود.' },
    related: { label: 'اقرأ بعد ذلك', items: [
      { href: '/blog/creer-equivalent-uber-eats-algerie-2026/', kind: 'سلسلة · 02', name: 'Uber Eats في الجزائر: من يوصّل فعلاً وكيف تطلق النسخة التي تصمد' },
      { href: '/blog/creer-equivalent-doctolib-algerie-2026/', kind: 'سلسلة · 01', name: 'Doctolib في الجزائر: إطلاق حجز المواعيد الطبية عبر الإنترنت' },
      { href: '/blog/lancer-startup-tech-algerie-depuis-france-diaspora-2026/', kind: 'دليل المؤسس', name: 'إطلاق شركة تقنية ناشئة في الجزائر انطلاقاً من فرنسا' },
      { href: '/blog/logiciel-hotel-reservation-hebergement-algerie-2026/', kind: 'دليل', name: 'برنامج الحجز والإيواء في الجزائر' },
    ] },
  },
};

const KEYWORDS = "airbnb algérie, équivalent airbnb algérie, location saisonnière algérie plateforme, créer une plateforme de location de vacances algérie, airbnb algérie paiement hôte, location appartement vacances algérie diaspora, startup location saisonnière algérie, airbnb algeria, short-term rental platform algeria, إيجار موسمي الجزائر منصة";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
