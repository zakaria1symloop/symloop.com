import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/comment-fixer-des-objectifs-de-vente-algerie-2027-objectif-par-vendeur-suivi-au-jour-le-jour-rythme-necessaire-visites-devis-equipe-commerciale.mjs';

const SLUG = 'comment-fixer-des-objectifs-de-vente-algerie-2027-objectif-par-vendeur-suivi-au-jour-le-jour-rythme-necessaire-visites-devis-equipe-commerciale';
const FIGURES = ['temps', 'erreurs', 'couches', 'vendeurs', 'chaine', 'calendrier'];
const DATE = '2026-11-19';
const I = (x) => '⁦' + x + '⁩';

const L = {
  crm: '/blog/logiciel-crm-algerie-2027-portefeuille-clients-pipeline-relances-devis-prevision-commerciaux/',
  prevente: '/blog/prevente-commerciaux-terrain-distributeur-algerie-2027-application-tournee-commande-recouvrement/',
  ventes: '/blog/comment-analyser-les-ventes-d-une-entreprise-algerie-2027-quels-produits-font-la-marge-quels-clients-partent-comparer-le-bon-mois-ramadan/',
  rentable: '/blog/comment-savoir-si-mon-entreprise-est-rentable-algerie-2027-le-chiffre-d-affaires-monte-il-ne-reste-rien-prix-de-revient-marge-par-client-seuil/',
  tableau: '/blog/tableau-de-bord-temps-reel-gerant-algerie-2027-evenements-agregats-fraicheur-une-definition-par-chiffre-alertes-whatsapp/',
  promo: '/blog/la-promo-a-marche-et-on-a-perdu-de-l-argent-moteur-de-promotions-application-algerie-2027-regles-cumul-codes-garde-de-marge-mesure-temoin/',
  credit: '/blog/le-client-doit-400-000-dinars-personne-ne-sait-depuis-quand-credit-client-application-algerie-2027-lettrage-cheques-relances-plafond/',
};

const CONTENT = {
  fr: {
    kind: 'Objectifs de vente · Algérie · 2027', title: "Comment fixer des objectifs de vente en Algérie (2027) : l'objectif est divisé par douze, le même pour tous, et connu en fin de mois ; objectif par vendeur, rythme du jour, visites et devis, et ce qu'on construit",
    dek: "« Chaque année, je prends le chiffre de l'an dernier, j'ajoute dix pour cent et je divise par douze. Tous mes commerciaux ont le même objectif. On découvre le résultat le 30, quand il n'y a plus rien à faire, et la moitié de l'équipe a décroché depuis le 15. Comment fixer des objectifs de vente qui servent à quelque chose ? » Un objectif utile se calcule, s'explique, et surtout se suit : chaque vendeur doit savoir, chaque jour, où il en est par rapport au rythme, et quelle activité l'y ramène.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Objectifs de vente', 'Objectif par vendeur', 'Rythme et atterrissage', 'Indicateurs d’activité', 'Équipe commerciale', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Un objectif de vente utile tient en quatre choses. Il **part du réel** : les ventes passées, mois par mois, pas un pourcentage ajouté d'en haut. Il est **réparti** : par mois selon la saison, par vendeur selon son portefeuille, pas à parts égales. Il est **traduit en activité** : tant de visites et de devis par jour, parce qu'un vendeur maîtrise ses visites, pas son chiffre. Et il est **suivi chaque jour** : le réalisé, le rythme, c'est-à-dire ce qui devrait être fait à cette date, et l'atterrissage du mois. Le jour 14, on sait déjà qui finira au-dessus et qui finira en dessous, et il reste huit jours pour agir.",
      "Cette page s'adresse au gérant ou au responsable commercial d'une entreprise de distribution, de négoce ou de services qui a des vendeurs et un objectif que personne ne suit, et au fondateur installé en France qui veut suivre, de loin, une équipe commerciale en Algérie. Les définitions viennent de sources publiques : objectif de vente, critères d'un bon objectif, fixation d'objectifs, indicateurs avancés et de résultat, loi de Goodhart, secteur de vente, taux de transformation. Les cinq vendeurs, leurs chiffres et le calendrier sont un exemple construit, en milliers de dinars. La page ne traite ni de rémunération, ni de primes, ni de droit du travail : elle parle de mesure.",
    ],
    sections: [
      { heading: "Fixer un objectif, en six temps", body: [
        "La figure donne l'ordre ; le quatrième temps est celui qui manque le plus souvent.",
      ], visual: 'temps', after: [
        "**Ce qu'est un objectif.** Un objectif de vente est le niveau minimal de ventes visé sur une période, que l'on peut fixer pour le jour, la semaine, le mois, le trimestre ou l'année. Il peut porter sur une valeur ou un volume, mais aussi sur une activité, comme un nombre d'appels par jour. **Partir du réel.** Les ventes de l'an dernier, mois par mois, vendeur par vendeur : c'est la seule base qu'une équipe accepte. **Répartir par mois.** Un douzième par mois n'existe pas : le mois de Ramadan, l'été, la rentrée et le nombre de jours ouvrés déplacent les ventes. Chaque mois reçoit le poids qu'il a eu, corrigé de ce que l'on sait de l'année à venir.",
        "**Répartir par vendeur.** Un secteur de vente est le groupe de clients ou la zone dont un vendeur a la charge. Deux secteurs n'ont pas le même potentiel : un objectif égal pour tous récompense celui qui a hérité du meilleur. **Les critères.** Un bon objectif est précis, mesurable, attribué à quelqu'un, réaliste et daté. Les recherches sur la fixation d'objectifs vont dans le même sens : des objectifs précis et difficiles donnent de bien meilleurs résultats que des objectifs faciles ou qu'un simple « faites de votre mieux », à condition d'un retour régulier. **Ce que cette page ne traite pas.** Le suivi des affaires en cours est le sujet du [CRM](" + L.crm + ") ; la tournée du vendeur de terrain, celui de [la prévente](" + L.prevente + ").",
      ] },
      { heading: "Six façons de mal fixer un objectif", body: [
        "La figure donne six erreurs, ce que chacune provoque, et ce qu'on fait à la place.",
      ], visual: 'erreurs', after: [
        "**Le chiffre seul.** Quand une mesure devient une cible, elle cesse d'être une bonne mesure : c'est la loi de Goodhart. Un objectif en chiffre d'affaires seulement pousse aux remises de fin de mois et aux ventes sans marge. Dans sa forme extrême, on fait passer dans le circuit de distribution plus de marchandise qu'il ne peut en vendre : c'est ce qu'on appelle le bourrage du circuit. Trois mesures ensemble se corrigent : le chiffre, la marge, et ce qui est réellement encaissé. **La marge.** Elle se lit par vendeur comme par produit, voir [la rentabilité](" + L.rentable + ") ; les remises se plafonnent, voir [la garde de marge](" + L.promo + ").",
        "**L'encaissement.** Une vente non payée n'est pas une vente finie : compter l'objectif sur l'encaissé, ou au moins le montrer à côté, relie le vendeur au [crédit client](" + L.credit + "). **Le chiffre fixé d'en haut.** Un objectif que personne ne sait expliquer n'engage personne. Montrer le calcul (l'an dernier, le poids du mois, le potentiel du secteur) tient sur une page et change la discussion. **Le silence.** Sans retour, il est impossible d'ajuster son action : un objectif connu une fois par mois n'est pas un objectif, c'est un verdict.",
      ] },
      { heading: "Ce qu'un logiciel d'objectifs doit tenir", body: [
        "La figure empile cinq couches ; la troisième est celle que le vendeur maîtrise.",
      ], visual: 'couches', after: [
        "**L'historique.** Deux ans de ventes, par mois, par vendeur, par secteur et par famille de produits : c'est la matière des objectifs, et elle existe déjà dans le logiciel de facturation. **Les objectifs.** Saisis une fois, par mois et par vendeur, avec le calcul visible. Quand un client change de secteur ou qu'un vendeur arrive en cours d'année, l'objectif suit. **L'activité.** Visites, appels, devis : notés au fil de la journée, sur le téléphone, rattachés au client. Les indicateurs avancés sont des mesures prédictives qui influencent le résultat futur ; les indicateurs de résultat mesurent ce qui est déjà arrivé.",
        "**Le rythme.** Chaque matin, le logiciel calcule ce qui devrait être fait à cette date, en jours ouvrés, et le compare au réalisé. Il prolonge ensuite le rythme jusqu'à la fin du mois : c'est l'atterrissage. Une prévision se compare plus tard au résultat : c'est ainsi qu'elle s'améliore. **Chacun voit le sien.** Le vendeur ouvre son écran : objectif, réalisé, rythme, visites du jour. Le responsable voit l'équipe ; le gérant, une ligne dans son [tableau de bord](" + L.tableau + "). **La même règle pour tous.** Une vente compte quand elle est facturée, ou livrée, ou encaissée : peu importe, pourvu que ce soit écrit et identique pour chacun.",
      ] },
      { heading: "Le mois, vu le jour 14", body: [
        "La figure montre cinq vendeurs le quatorzième jour d'un mois de vingt-deux jours ouvrés.",
      ], visual: 'vendeurs', after: [
        "**Le rythme.** Quatorze jours sur vingt-deux : 64 % de l'objectif devrait être fait. L'équipe est à 52,5 %, en retard de 1 336. Mais la moyenne cache deux histoires : deux vendeurs sont au-dessus du rythme et finiront à 113 % et 107 % ; trois sont en dessous et finiront à 75 %, 57 % et 29 %. **L'atterrissage.** Si rien ne change, l'équipe terminera à 82,5 %. Pour tenir l'objectif, il faudrait 713 par jour pendant les huit jours restants, contre 450 jusqu'ici. Ce n'est pas impossible ; c'est une décision à prendre aujourd'hui.",
        "**Trois retards, trois causes.** Le vendeur à 48 % a peut-être un gros devis en attente ; celui à 36 %, un secteur trop large ; celui à 19 % vient d'arriver. Le chiffre ne le dit pas : l'activité, oui. **Ce qu'on fait le jour 14.** On ne répète pas l'objectif : on regarde, avec chaque vendeur en retard, ses devis ouverts et ses visites de la semaine, comme dans une lecture des [ventes par client](" + L.ventes + "). **Ce qu'on ne fait pas.** Corriger l'objectif en cours de mois pour qu'il tombe juste : il perdrait tout son sens pour le mois suivant.",
      ] },
      { heading: "L'objectif du mois, traduit en visites", body: [
        "La figure remonte du chiffre à l'activité, puis compare l'attendu et le réalisé au jour 14.",
      ], visual: 'chaine', after: [
        "**Remonter la chaîne.** 12 000 de chiffre, à 120 par commande, ce sont 100 commandes. Si deux devis sur cinq sont signés, il faut 250 devis ; à deux visites par devis, 500 visites. Cinq vendeurs, vingt-deux jours : 4,5 visites par vendeur et par jour. Le taux de transformation est la part de ceux qui vont jusqu'au bout ; chaque entreprise a les siens, et le logiciel les mesure sur ses propres ventes. **Pourquoi c'est plus utile.** Un vendeur ne décide pas de son chiffre du jour. Il décide de ses visites. Lui donner 4,5 visites par jour, c'est lui donner quelque chose à faire ce matin.",
        "**Lire le retard.** Au jour 14 : 255 visites pour 318 attendues, 118 devis pour 159, 52 commandes pour 64. Le taux de signature tient, 52 commandes pour 118 devis : ce qui manque, ce sont les visites. La réponse n'est pas une remise de fin de mois, c'est une semaine de terrain. Si les visites étaient là et les signatures absentes, la réponse serait autre : le prix, l'offre, la relance des devis. **La limite.** Un objectif d'activité seul se remplit aussi de visites inutiles : il se lit toujours avec le chiffre, jamais à sa place.",
      ] },
      { heading: "Cinq semaines, dans l'exemple", body: [
        "Cinq semaines pour des objectifs suivis chaque jour, dont une de relevé.",
      ], visual: 'calendrier', after: [
        "**Le relevé.** Une semaine : les ventes de deux ans, la liste des vendeurs et des secteurs, la façon dont les objectifs sont fixés et communiqués aujourd'hui. **Les poids.** Le poids de chaque mois et le potentiel de chaque secteur, calculés sur l'historique. **Les objectifs.** Proposés par le calcul, discutés avec l'équipe, puis figés pour l'année. **L'activité.** La saisie des visites et des devis sur le téléphone, la plus courte possible : un client, un geste. **Le rythme.** L'écran du vendeur et celui du responsable. **La première réunion.** Le dimanche matin : qui est sur le rythme, qui ne l'est pas, et pourquoi.",
        "**Ce qui reste après.** Un écran par vendeur, un par équipe, une ligne pour le gérant. Une réunion courte chaque semaine, toujours la même. **Ce que ce n'est pas.** Ni un système de primes, ni un outil de surveillance : un instrument de mesure, que le vendeur consulte avant son responsable. **Les durées** sont celles d'un exemple construit : elles dépendent de l'état de l'historique et du nombre de vendeurs.",
      ], list: [
        "**Ce que le gérant reçoit** : des objectifs par mois et par vendeur, avec leur calcul ; le rythme et l'atterrissage chaque jour ; l'activité de chaque vendeur ; trois mesures côte à côte, chiffre, marge, encaissement ; une réunion hebdomadaire sur un écran.",
        "**Ce que l'entreprise ne fait plus** : diviser l'année par douze, donner le même chiffre à tout le monde, découvrir le résultat le 30, accorder des remises de fin de mois pour « faire le chiffre », changer l'objectif en cours de route.",
        "**Ce qui est mesuré** : réalisé contre rythme, par vendeur et par jour ; atterrissage du mois ; visites et devis par vendeur ; taux de signature ; marge et encaissement à côté du chiffre.",
        "**Ce que fait Symloop** : le relevé, l'historique et les poids, le calcul des objectifs, la saisie de l'activité sur le téléphone, les écrans du vendeur, du responsable et du gérant, le branchement sur votre facturation, puis les premières réunions avec vous.",
      ], faq: [
        { q: "Comment fixer des objectifs de vente ?", a: "En partant des ventes passées, mois par mois ; en répartissant l'année selon la saison et chaque mois selon le portefeuille de chaque vendeur ; puis en traduisant le chiffre en visites et en devis par jour. Et en le suivant chaque jour, pas chaque mois." },
        { q: "Comment répartir un objectif annuel par mois ?", a: "Pas en douze parts égales. Chaque mois reçoit le poids qu'il a eu les années précédentes, corrigé des dates qui bougent, comme Ramadan et les fêtes, et du nombre de jours ouvrés." },
        { q: "Faut-il donner le même objectif à tous les commerciaux ?", a: "Non. Un objectif se répartit selon le potentiel du secteur et l'ancienneté du portefeuille. Le même chiffre pour tous décourage le nouveau et ne demande rien à celui qui a le meilleur secteur." },
        { q: "Comment suivre les objectifs au quotidien ?", a: "Avec trois chiffres par vendeur : le réalisé, le rythme, c'est-à-dire ce qui devrait être fait à cette date en jours ouvrés, et l'atterrissage du mois si rien ne change. Chacun voit le sien sur son téléphone." },
        { q: "Comment manager une équipe de commerciaux ?", a: "Avec une règle écrite et un rendez-vous fixe. Chaque semaine, on regarde qui est sur le rythme et, pour ceux qui ne le sont pas, leur activité : visites, devis ouverts. On parle de ce qui se fera cette semaine, pas du chiffre du mois." },
        { q: "Quels indicateurs suivre pour une équipe commerciale ?", a: "Deux familles. Les indicateurs avancés, que le vendeur maîtrise : visites, appels, devis. Les indicateurs de résultat : commandes, chiffre, marge, encaissement. Les premiers annoncent les seconds." },
        { q: "Pourquoi un objectif en chiffre d'affaires seul est-il risqué ?", a: "Parce qu'il s'atteint aussi par des remises et des ventes sans marge. Quand une mesure devient une cible, elle cesse d'être une bonne mesure. Chiffre, marge et encaissement se lisent ensemble." },
        { q: "Combien de visites par jour faut-il à un commercial ?", a: "Cela se calcule : objectif du mois, divisé par la commande moyenne, puis par le taux de signature des devis, puis multiplié par le nombre de visites par devis. Dans l'exemple de cette page : 4,5 visites par vendeur et par jour." },
        { q: "Peut-on suivre les objectifs avec Excel ?", a: "Pour fixer les objectifs, oui. Pour les suivre chaque jour, difficilement : il faut ressaisir les ventes et l'activité. Un outil branché sur la facturation calcule le rythme tout seul." },
        { q: "Combien de temps pour mettre en place un suivi des objectifs ?", a: "Cinq semaines dans l'exemple de cette page : relevé, historique, objectifs validés avec l'équipe, saisie de l'activité, écrans. La première réunion se tient la cinquième semaine." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "Un objectif connu une fois par mois n'est pas un objectif, c'est un verdict." },
      { after: 4, text: "Un vendeur ne décide pas de son chiffre du jour. Il décide de ses visites." },
    ],
    cta: { eyebrow: "Dites-nous combien de vendeurs vous avez et comment leurs objectifs sont fixés aujourd'hui : nous commençons par deux ans de ventes", title: "Objectif divisé par douze, même chiffre pour tous, résultat connu le 30, remises de fin de mois, ou fondateur en France qui veut suivre une équipe commerciale en Algérie", body: "Symloop calcule les objectifs sur vos ventes passées, les traduit en activité, et donne à chaque vendeur son rythme du jour sur son téléphone. Décrivez-nous votre équipe, vos secteurs, et ce que vous savez de votre mois le 15." },
    related: { label: 'À lire aussi', items: [
      { href: L.crm, kind: '2027', name: 'Logiciel CRM : portefeuille, pipeline, relances' },
      { href: L.prevente, kind: '2027', name: 'Prévente : tournée, commande, recouvrement' },
      { href: L.ventes, kind: '2027', name: 'Analyser ses ventes : marge par produit, clients partis' },
      { href: L.tableau, kind: '2027', name: 'Tableau de bord en temps réel : une définition par chiffre' },
    ] },
  },
  en: {
    kind: 'Sales targets · Algeria · 2027', title: "How to set sales targets in Algeria (2027): the target is divided by twelve, the same for everyone, and known at month end; a target per seller, the day's pace, visits and quotes, and what we build",
    dek: "“Every year, I take last year's figure, add ten percent and divide by twelve. All my salespeople have the same target. We discover the result on the 30th, when nothing can be done any more, and half the team gave up on the 15th. How do you set sales targets that are of any use?” A useful target is calculated, explained, and above all followed: each seller must know, every day, where they stand against the pace, and which activity brings them back to it.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Sales targets', 'Target per seller', 'Pace and landing', 'Activity indicators', 'Sales team', 'Algeria 2027'],
    intro: [
      "**Short answer.** A useful sales target comes down to four things. It **starts from facts**: past sales, month by month, not a percentage added from above. It is **split**: by month according to the season, by seller according to their portfolio, not in equal shares. It is **translated into activity**: so many visits and quotes a day, because a seller controls their visits, not their figure. And it is **followed every day**: what is done, the pace, that is, what should be done by this date, and the month's landing. On day 14, you already know who will finish above and who below, and eight days remain to act.",
      "This page is for the manager or sales lead of a distribution, trading or service company that has sellers and a target nobody follows, and for the founder based in France who wants to follow, from afar, a sales team in Algeria. The definitions come from public sources: sales target, criteria of a good target, goal setting, leading and lagging indicators, Goodhart's law, sales territory, conversion rate. The five sellers, their figures and the calendar are a constructed example, in thousands of dinars. The page covers neither pay, nor bonuses, nor employment law: it is about measurement.",
    ],
    sections: [
      { heading: "Setting a target, in six steps", body: [
        "The figure gives the order; the fourth step is the one most often missing.",
      ], visual: 'temps', after: [
        "**What a target is.** A sales target is the minimum sales goal for a set time span, which could be set for the day, week, month, quarter or year. It may be an amount of value or volume, but also sales activities, such as a number of calls per day. **Start from facts.** Last year's sales, month by month, seller by seller: it is the only basis a team accepts. **Split by month.** One twelfth a month does not exist: the month of Ramadan, the summer, the return in September and the number of working days all move sales. Each month receives the weight it had, corrected for what is known about the coming year.",
        "**Split by seller.** A sales territory is the customer group or geographical area for which an individual salesperson is responsible. Two territories do not have the same potential: an equal target for all rewards whoever inherited the best one. **The criteria.** A good target is specific, measurable, assigned to someone, realistic and time-bound. Research on goal setting points the same way: difficult specific goals lead to significantly higher performance than easy goals or a simple “do your best”, provided there is regular feedback. **What this page does not cover.** Following open deals is the subject of the [CRM](" + L.crm + "); the field seller's round, that of [pre-sales](" + L.prevente + ").",
      ] },
      { heading: "Six ways to set a target badly", body: [
        "The figure gives six mistakes, what each causes, and what is done instead.",
      ], visual: 'erreurs', after: [
        "**The figure alone.** When a measure becomes a target, it ceases to be a good measure: that is Goodhart's law. A target in revenue alone pushes towards month-end discounts and sales with no margin. In its extreme form, more product is forced through a distribution channel than the channel is capable of selling: this is called channel stuffing. Three measures together correct one another: revenue, margin, and what is actually collected. **Margin.** It is read per seller as per product, see [profitability](" + L.rentable + "); discounts are capped, see [the margin guard](" + L.promo + ").",
        "**Cash collected.** A sale not paid for is not a finished sale: counting the target on cash collected, or at least showing it alongside, ties the seller to [customer credit](" + L.credit + "). **The figure set from above.** A target nobody can explain commits nobody. Showing the calculation (last year, the month's weight, the territory's potential) fits on one page and changes the discussion. **Silence.** Without feedback it is impossible to adjust: a target known once a month is not a target, it is a verdict.",
      ] },
      { heading: "What target software must hold", body: [
        "The figure stacks five layers; the third is the one the seller controls.",
      ], visual: 'couches', after: [
        "**The history.** Two years of sales, by month, by seller, by territory and by product family: it is the raw material of targets, and it already exists in the invoicing software. **The targets.** Entered once, by month and by seller, with the calculation visible. When a customer changes territory or a seller arrives during the year, the target follows. **The activity.** Visits, calls, quotes: noted through the day, on the phone, attached to the customer. Leading indicators are predictive measures that influence future outcomes; lagging indicators measure the final results of past activities.",
        "**The pace.** Every morning, the software calculates what should be done by this date, in working days, and compares it with what is done. It then extends the pace to the end of the month: that is the landing. A forecast is later compared with the actual outcome: that is how it improves. **Each sees their own.** The seller opens their screen: target, done, pace, today's visits. The team lead sees the team; the manager, one line in their [dashboard](" + L.tableau + "). **The same rule for everyone.** A sale counts when it is invoiced, or delivered, or collected: it matters little, provided it is written down and identical for each.",
      ] },
      { heading: "The month, seen on day 14", body: [
        "The figure shows five sellers on the fourteenth day of a month of twenty-two working days.",
      ], visual: 'vendeurs', after: [
        "**The pace.** Fourteen days out of twenty-two: 64% of the target should be done. The team is at 52.5%, behind by 1,336. But the average hides two stories: two sellers are above the pace and will finish at 113% and 107%; three are below and will finish at 75%, 57% and 29%. **The landing.** If nothing changes, the team will end at 82.5%. To hit the target, 713 a day would be needed over the eight remaining days, against 450 so far. It is not impossible; it is a decision to take today.",
        "**Three shortfalls, three causes.** The seller at 48% may have a big quote pending; the one at 36%, too wide a territory; the one at 19% has just arrived. The figure does not say so: the activity does. **What you do on day 14.** You do not repeat the target: with each seller who is behind, you look at their open quotes and their visits of the week, as in a reading of [sales per customer](" + L.ventes + "). **What you do not do.** Correct the target during the month so that it comes out right: it would lose all meaning for the following month.",
      ] },
      { heading: "The month's target, translated into visits", body: [
        "The figure goes back from the figure to the activity, then compares expected and done on day 14.",
      ], visual: 'chaine', after: [
        "**Going back up the chain.** 12,000 of revenue, at 120 per order, is 100 orders. If two quotes in five are signed, 250 quotes are needed; at two visits per quote, 500 visits. Five sellers, twenty-two days: 4.5 visits per seller per day. A conversion rate is the share of those who go all the way; each company has its own, and the software measures them on its own sales. **Why it is more useful.** A seller does not decide their figure for the day. They decide their visits. Giving them 4.5 visits a day is giving them something to do this morning.",
        "**Reading the shortfall.** On day 14: 255 visits for 318 expected, 118 quotes for 159, 52 orders for 64. The signing rate holds, 52 orders for 118 quotes: what is missing is visits. The answer is not a month-end discount, it is a week in the field. If the visits were there and the signatures were not, the answer would be different: the price, the offer, chasing the quotes. **The limit.** An activity target alone also fills up with useless visits: it is always read with the figure, never in its place.",
      ] },
      { heading: "Five weeks, in the example", body: [
        "Five weeks for targets followed every day, one of them a survey.",
      ], visual: 'calendrier', after: [
        "**The survey.** One week: two years of sales, the list of sellers and territories, how targets are set and communicated today. **The weights.** The weight of each month and the potential of each territory, calculated on the history. **The targets.** Proposed by the calculation, discussed with the team, then fixed for the year. **The activity.** Entering visits and quotes on the phone, as short as possible: one customer, one gesture. **The pace.** The seller's screen and the team lead's. **The first meeting.** On Sunday morning: who is on pace, who is not, and why.",
        "**What remains afterwards.** One screen per seller, one per team, one line for the manager. A short meeting every week, always the same. **What it is not.** Neither a bonus scheme nor a surveillance tool: a measuring instrument, which the seller consults before their team lead does. **The durations** are those of a constructed example: they depend on the state of the history and on the number of sellers.",
      ], list: [
        "**What the manager receives**: targets by month and by seller, with their calculation; the pace and the landing every day; each seller's activity; three measures side by side, revenue, margin, cash collected; a weekly meeting on one screen.",
        "**What the company no longer does**: divide the year by twelve, give everyone the same figure, discover the result on the 30th, grant month-end discounts to “make the number”, change the target along the way.",
        "**What is measured**: done against pace, per seller and per day; the month's landing; visits and quotes per seller; signing rate; margin and cash collected beside revenue.",
        "**What Symloop does**: the survey, the history and the weights, calculating the targets, entering activity on the phone, the screens for the seller, the team lead and the manager, the connection to your invoicing, then the first meetings with you.",
      ], faq: [
        { q: "How do you set sales targets?", a: "By starting from past sales, month by month; splitting the year by season and each month by each seller's portfolio; then translating the figure into visits and quotes per day. And by following it every day, not every month." },
        { q: "How do you split an annual target by month?", a: "Not in twelve equal shares. Each month receives the weight it had in previous years, corrected for dates that move, such as Ramadan and holidays, and for the number of working days." },
        { q: "Should all salespeople have the same target?", a: "No. A target is split according to the territory's potential and the age of the portfolio. The same figure for all discourages the newcomer and asks nothing of whoever has the best territory." },
        { q: "How do you follow targets day to day?", a: "With three figures per seller: what is done, the pace, that is, what should be done by this date in working days, and the month's landing if nothing changes. Each sees their own on their phone." },
        { q: "How do you manage a sales team?", a: "With a written rule and a fixed meeting. Every week, you look at who is on pace and, for those who are not, at their activity: visits, open quotes. You talk about what will be done this week, not about the month's figure." },
        { q: "Which indicators should a sales team follow?", a: "Two families. Leading indicators, which the seller controls: visits, calls, quotes. Lagging indicators: orders, revenue, margin, cash collected. The first announce the second." },
        { q: "Why is a revenue-only target risky?", a: "Because it can also be reached through discounts and sales with no margin. When a measure becomes a target, it ceases to be a good measure. Revenue, margin and cash collected are read together." },
        { q: "How many visits a day does a salesperson need?", a: "It is calculated: the month's target, divided by the average order, then by the quote signing rate, then multiplied by the number of visits per quote. In this page's example: 4.5 visits per seller per day." },
        { q: "Can targets be followed with Excel?", a: "For setting targets, yes. For following them every day, hardly: sales and activity have to be retyped. A tool connected to invoicing calculates the pace on its own." },
        { q: "How long does it take to set up target tracking?", a: "Five weeks in this page's example: survey, history, targets agreed with the team, activity entry, screens. The first meeting is held in the fifth week." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "A target known once a month is not a target, it is a verdict." },
      { after: 4, text: "A seller does not decide their figure for the day. They decide their visits." },
    ],
    cta: { eyebrow: "Tell us how many sellers you have and how their targets are set today: we start with two years of sales", title: "A target divided by twelve, the same figure for all, a result known on the 30th, month-end discounts, or a founder in France who wants to follow a sales team in Algeria", body: "Symloop calculates targets on your past sales, translates them into activity, and gives each seller their pace for the day on their phone. Describe your team to us, your territories, and what you know about your month on the 15th." },
    related: { label: 'Also read', items: [
      { href: L.crm, kind: '2027', name: 'CRM software: portfolio, pipeline, reminders' },
      { href: L.prevente, kind: '2027', name: 'Pre-sales: round, order, collection' },
      { href: L.ventes, kind: '2027', name: 'Analysing your sales: margin per product, lost customers' },
      { href: L.tableau, kind: '2027', name: 'Real-time dashboard: one definition per figure' },
    ] },
  },
  ar: {
    kind: 'أهداف البيع · الجزائر · 2027', title: "كيف تُحدَّد أهداف البيع في الجزائر (2027): الهدف يُقسم على اثني عشر، هو نفسه للجميع، ويُعرف آخر الشهر؛ هدف لكل بائع، وتيرة اليوم، الزيارات والعروض، وما نبنيه",
    dek: "«كل سنة، آخذ رقم السنة الماضية، أضيف عشرة بالمئة وأقسم على اثني عشر. كل مندوبيّ التجاريين لهم الهدف نفسه. ونكتشف النتيجة يوم 30، حين لا يبقى ما يُفعل، ونصف الفريق انسحب منذ يوم 15. كيف تُحدَّد أهداف بيع تنفع في شيء؟» الهدف النافع يُحسب، يُشرح، وخصوصاً يُتابَع: كل بائع يجب أن يعرف، كل يوم، أين هو من الوتيرة، وأي نشاط يعيده إليها.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['أهداف البيع', 'هدف لكل بائع', 'الوتيرة ونهاية الشهر', 'مؤشرات النشاط', 'الفريق التجاري', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** هدف البيع النافع أربعة أشياء. **ينطلق من الواقع**: المبيعات السابقة، شهراً بشهر، لا نسبة تُضاف من فوق. **يُوزَّع**: حسب الشهر تبعاً للموسم، وحسب البائع تبعاً لمحفظته، لا بالتساوي. **يُترجَم إلى نشاط**: كذا زيارة وكذا عرض سعر في اليوم، لأن البائع يتحكم في زياراته، لا في رقمه. و**يُتابَع كل يوم**: المنجز، الوتيرة، أي ما يجب أن يكون منجزاً في هذا التاريخ، ونهاية الشهر المتوقعة. وفي اليوم 14، نعرف من سينهي فوق الهدف ومن تحته، وتبقى ثمانية أيام للتحرك.",
      "هذه الصفحة موجّهة إلى مسيّر أو مسؤول تجاري في مؤسسة توزيع أو تجارة أو خدمات لها بائعون وهدف لا يتابعه أحد، وإلى المؤسس المقيم في فرنسا الذي يريد أن يتابع، من بعيد، فريقاً تجارياً في الجزائر. التعريفات من مصادر عمومية: هدف البيع، معايير الهدف الجيد، تحديد الأهداف، المؤشرات المتقدمة ومؤشرات النتيجة، قانون غودهارت، قطاع البيع، ونسبة التحويل. والبائعون الخمسة وأرقامهم والرزنامة مثال مركَّب، بآلاف الدنانير. والصفحة لا تعالج الأجور ولا المنح ولا قانون العمل: هي تتحدث عن القياس.",
    ],
    sections: [
      { heading: "تحديد هدف، في ست مراحل", body: [
        "الشكل يعطي الترتيب؛ والمرحلة الرابعة هي التي تنقص أكثر من غيرها.",
      ], visual: 'temps', after: [
        "**ما هو الهدف.** هدف البيع هو أدنى مستوى مبيعات مقصود خلال مدة، ويمكن تحديده لليوم أو الأسبوع أو الشهر أو الفصل أو السنة. وقد يكون قيمةً أو حجماً، وقد يكون نشاطاً كذلك، مثل عدد المكالمات في اليوم. **الانطلاق من الواقع.** مبيعات السنة الماضية، شهراً بشهر وبائعاً ببائع: هي القاعدة الوحيدة التي يقبلها الفريق. **التوزيع حسب الشهر.** لا وجود لجزء من اثني عشر لكل شهر: شهر رمضان، الصيف، الدخول الاجتماعي، وعدد أيام العمل تحرّك المبيعات. وكل شهر يتلقى الوزن الذي كان له، مصحَّحاً بما يُعرف عن السنة القادمة.",
        "**التوزيع حسب البائع.** قطاع البيع هو مجموعة الزبائن أو المنطقة التي يتكفل بها بائع. وقطاعان ليس لهما الإمكان نفسه: والهدف المتساوي للجميع يكافئ من ورث الأحسن. **المعايير.** الهدف الجيد محدَّد، قابل للقياس، مُسند إلى شخص، واقعي، ومؤرَّخ. والأبحاث حول تحديد الأهداف تذهب في الاتجاه نفسه: الأهداف المحدَّدة والصعبة تعطي نتائج أحسن بكثير من الأهداف السهلة أو من عبارة «افعلوا ما بوسعكم»، بشرط رجوع منتظم للمعلومة. **ما لا تعالجه هذه الصفحة.** متابعة الصفقات الجارية موضوع [برنامج تسيير علاقة الزبائن](" + L.crm + ")، أي " + I('CRM') + "؛ وجولة بائع الميدان، موضوع [البيع المسبق](" + L.prevente + ").",
      ] },
      { heading: "ست طرق سيئة لتحديد هدف", body: [
        "الشكل يعطي ستة أخطاء، ما يسبّبه كل واحد، وما يُفعل بدله.",
      ], visual: 'erreurs', after: [
        "**الرقم وحده.** حين يصير المقياس هدفاً، يتوقف عن كونه مقياساً جيداً: هذا قانون غودهارت. والهدف برقم الأعمال وحده يدفع إلى تخفيضات آخر الشهر والمبيعات دون هامش. وفي صورته القصوى، يُدفع في قناة التوزيع من السلع أكثر مما تستطيع بيعه: وهذا ما يسمى إغراق القناة. وثلاثة مقاييس معاً يصحّح بعضها بعضاً: الرقم، الهامش، وما حُصّل فعلاً. **الهامش.** يُقرأ حسب البائع كما حسب المنتج، انظر [المردودية](" + L.rentable + ")؛ والتخفيضات تُسقَّف، انظر [حفظ الهامش](" + L.promo + ").",
        "**التحصيل.** البيع غير المدفوع ليس بيعاً منتهياً: حساب الهدف على المحصَّل، أو على الأقل إظهاره بجانبه، يربط البائع ب[دَين الزبون](" + L.credit + "). **الرقم المحدَّد من فوق.** الهدف الذي لا يعرف أحد شرحه لا يُلزم أحداً. وإظهار الحساب (السنة الماضية، وزن الشهر، وإمكان القطاع) يسعه صفحة ويغيّر النقاش. **الصمت.** دون رجوع للمعلومة، يستحيل تعديل العمل: والهدف الذي يُعرف مرة في الشهر ليس هدفاً، بل حكم.",
      ] },
      { heading: "ما يجب أن يمسكه برنامج الأهداف", body: [
        "الشكل يرتّب خمس طبقات؛ والثالثة هي التي يتحكم فيها البائع.",
      ], visual: 'couches', after: [
        "**التاريخ.** سنتان من المبيعات، حسب الشهر والبائع والقطاع وصنف المنتجات: هي مادة الأهداف، وهي موجودة من قبل في برنامج الفوترة. **الأهداف.** تُدخَل مرة، حسب الشهر والبائع، مع الحساب ظاهراً. وحين يغيّر زبون قطاعه أو يصل بائع خلال السنة، يتبعه الهدف. **النشاط.** زيارات، مكالمات، وعروض أسعار: تُسجَّل خلال اليوم، على الهاتف، مربوطة بالزبون. والمؤشرات المتقدمة مقاييس تنبؤية تؤثر في النتيجة القادمة؛ ومؤشرات النتيجة تقيس ما وقع من قبل.",
        "**الوتيرة.** كل صباح، يحسب البرنامج ما يجب أن يكون منجزاً في هذا التاريخ، بأيام العمل، ويقارنه بالمنجز. ثم يمدّ الوتيرة إلى نهاية الشهر: هذه نهاية الشهر المتوقعة. والتوقع يُقارَن لاحقاً بالنتيجة: وهكذا يتحسن. **كل واحد يرى وتيرته.** البائع يفتح شاشته: الهدف، المنجز، الوتيرة، وزيارات اليوم. والمسؤول يرى الفريق؛ والمسيّر، سطراً في [لوحة قيادته](" + L.tableau + "). **القاعدة نفسها للجميع.** البيع يُحسب حين يُفوتَر، أو يُسلَّم، أو يُحصَّل: لا يهم كثيراً، ما دام مكتوباً وهو نفسه للجميع.",
      ] },
      { heading: "الشهر، كما يُرى في اليوم 14", body: [
        "الشكل يُظهر خمسة بائعين في اليوم الرابع عشر من شهر فيه اثنان وعشرون يوم عمل.",
      ], visual: 'vendeurs', after: [
        "**الوتيرة.** أربعة عشر يوماً من اثنين وعشرين: 64 بالمئة من الهدف يجب أن يكون منجزاً. والفريق عند 52,5 بالمئة، متأخراً بـ 1336. لكن المتوسط يخفي قصتين: بائعان فوق الوتيرة وسينهيان بـ 113 و107 بالمئة؛ وثلاثة تحتها وسينهون بـ 75 و57 و29 بالمئة. **نهاية الشهر المتوقعة.** إذا لم يتغير شيء، سينهي الفريق بـ 82,5 بالمئة. ولبلوغ الهدف، يلزم 713 في اليوم خلال الأيام الثمانية الباقية، مقابل 450 حتى الآن. وهذا ليس مستحيلاً؛ هو قرار يُتخذ اليوم.",
        "**ثلاثة تأخرات، ثلاثة أسباب.** البائع الذي عند 48 بالمئة قد يكون عنده عرض كبير في الانتظار؛ والذي عند 36، قطاع واسع جداً؛ والذي عند 19 وصل للتو. الرقم لا يقول ذلك: النشاط يقوله. **ما يُفعل في اليوم 14.** لا يُكرَّر الهدف: يُنظر، مع كل بائع متأخر، في عروضه المفتوحة وزياراته خلال الأسبوع، كما في قراءة [المبيعات لكل زبون](" + L.ventes + "). **ما لا يُفعل.** تصحيح الهدف خلال الشهر ليصير مطابقاً: سيفقد كل معناه للشهر الموالي.",
      ] },
      { heading: "هدف الشهر، مترجَماً إلى زيارات", body: [
        "الشكل يصعد من الرقم إلى النشاط، ثم يقارن المنتظر والمنجز في اليوم 14.",
      ], visual: 'chaine', after: [
        "**صعود السلسلة.** 12 000 من رقم الأعمال، بـ 120 لكل طلبية، تعني 100 طلبية. وإذا وُقّع عرضان من خمسة، يلزم 250 عرضاً؛ وبزيارتين لكل عرض، 500 زيارة. خمسة بائعين، واثنان وعشرون يوماً: 4,5 زيارة لكل بائع في اليوم. ونسبة التحويل هي حصة من يذهبون إلى النهاية؛ ولكل مؤسسة نسبها، والبرنامج يقيسها على مبيعاتها هي. **لماذا هذا أنفع.** البائع لا يقرر رقم يومه. هو يقرر زياراته. وإعطاؤه 4,5 زيارة في اليوم هو إعطاؤه شيئاً يفعله هذا الصباح.",
        "**قراءة التأخر.** في اليوم 14: 255 زيارة من 318 منتظرة، 118 عرضاً من 159، و52 طلبية من 64. نسبة التوقيع صامدة، 52 طلبية مقابل 118 عرضاً: ما ينقص هو الزيارات. والجواب ليس تخفيضاً آخر الشهر، بل أسبوع في الميدان. ولو كانت الزيارات موجودة والتوقيعات غائبة، لكان الجواب غيره: السعر، العرض، أو تذكير العروض. **الحد.** هدف النشاط وحده يمتلئ كذلك بزيارات لا تنفع: يُقرأ دائماً مع الرقم، لا مكانه.",
      ] },
      { heading: "خمسة أسابيع، في المثال", body: [
        "خمسة أسابيع لأهداف تُتابَع كل يوم، منها أسبوع للمعاينة.",
      ], visual: 'calendrier', after: [
        "**المعاينة.** أسبوع: مبيعات سنتين، قائمة البائعين والقطاعات، وطريقة تحديد الأهداف وإبلاغها اليوم. **الأوزان.** وزن كل شهر وإمكان كل قطاع، محسوبان على التاريخ. **الأهداف.** يقترحها الحساب، تُناقَش مع الفريق، ثم تُثبَّت للسنة. **النشاط.** إدخال الزيارات والعروض على الهاتف، بأقصر ما يمكن: زبون، وحركة واحدة. **الوتيرة.** شاشة البائع وشاشة المسؤول. **الاجتماع الأول.** صباح أول يوم في الأسبوع: من على الوتيرة، من ليس عليها، ولماذا.",
        "**ما يبقى بعد ذلك.** شاشة لكل بائع، واحدة لكل فريق، وسطر للمسيّر. واجتماع قصير كل أسبوع، هو نفسه دائماً. **ما ليس هو.** لا نظام منح ولا أداة مراقبة: هو أداة قياس، يطالعها البائع قبل مسؤوله. **المدد** هي مدد مثال مركَّب: تتوقف على حالة التاريخ وعدد البائعين.",
      ], list: [
        "**ما يتلقاه المسيّر**: أهداف حسب الشهر والبائع، مع حسابها؛ الوتيرة ونهاية الشهر المتوقعة كل يوم؛ نشاط كل بائع؛ ثلاثة مقاييس جنباً إلى جنب، الرقم والهامش والتحصيل؛ واجتماع أسبوعي على شاشة.",
        "**ما لا تفعله المؤسسة بعد الآن**: قسمة السنة على اثني عشر، إعطاء الرقم نفسه للجميع، اكتشاف النتيجة يوم 30، منح تخفيضات آخر الشهر «لبلوغ الرقم»، وتغيير الهدف في الطريق.",
        "**ما يُقاس**: المنجز مقابل الوتيرة، لكل بائع ولكل يوم؛ نهاية الشهر المتوقعة؛ الزيارات والعروض لكل بائع؛ نسبة التوقيع؛ والهامش والتحصيل بجانب الرقم.",
        "**ما تفعله Symloop**: المعاينة، التاريخ والأوزان، حساب الأهداف، إدخال النشاط على الهاتف، شاشات البائع والمسؤول والمسيّر، الربط بفوترتكم، ثم الاجتماعات الأولى معكم.",
      ], faq: [
        { q: "كيف تُحدَّد أهداف البيع؟", a: "بالانطلاق من المبيعات السابقة، شهراً بشهر؛ بتوزيع السنة حسب الموسم وكل شهر حسب محفظة كل بائع؛ ثم بترجمة الرقم إلى زيارات وعروض في اليوم. وبمتابعته كل يوم، لا كل شهر." },
        { q: "كيف يُوزَّع هدف سنوي على الأشهر؟", a: "ليس باثني عشر جزءاً متساوياً. كل شهر يتلقى الوزن الذي كان له في السنوات السابقة، مصحَّحاً بالتواريخ التي تتحرك، مثل رمضان والأعياد، وبعدد أيام العمل." },
        { q: "هل يُعطى الهدف نفسه لكل المندوبين التجاريين؟", a: "لا. الهدف يُوزَّع حسب إمكان القطاع وقِدم المحفظة. والرقم نفسه للجميع يُحبط الجديد ولا يطلب شيئاً ممن له أحسن قطاع." },
        { q: "كيف تُتابَع الأهداف يومياً؟", a: "بثلاثة أرقام لكل بائع: المنجز، الوتيرة، أي ما يجب أن يكون منجزاً في هذا التاريخ بأيام العمل، ونهاية الشهر المتوقعة إذا لم يتغير شيء. وكل واحد يرى أرقامه على هاتفه." },
        { q: "كيف يُسيَّر فريق من المندوبين التجاريين؟", a: "بقاعدة مكتوبة وموعد ثابت. كل أسبوع، يُنظر من على الوتيرة، ولمن ليسوا عليها، يُنظر في نشاطهم: الزيارات والعروض المفتوحة. ويُتحدث عما سيُفعل هذا الأسبوع، لا عن رقم الشهر." },
        { q: "أي مؤشرات يتابعها الفريق التجاري؟", a: "فئتان. المؤشرات المتقدمة، التي يتحكم فيها البائع: الزيارات، المكالمات، والعروض. ومؤشرات النتيجة: الطلبيات، الرقم، الهامش، والتحصيل. والأولى تُعلن الثانية." },
        { q: "لماذا الهدف برقم الأعمال وحده خطير؟", a: "لأنه يُبلغ كذلك بالتخفيضات والمبيعات دون هامش. حين يصير المقياس هدفاً، يتوقف عن كونه مقياساً جيداً. والرقم والهامش والتحصيل تُقرأ معاً." },
        { q: "كم زيارة في اليوم يحتاج المندوب التجاري؟", a: "هذا يُحسب: هدف الشهر، مقسوماً على متوسط الطلبية، ثم على نسبة توقيع العروض، ثم مضروباً في عدد الزيارات لكل عرض. في مثال هذه الصفحة: 4,5 زيارة لكل بائع في اليوم." },
        { q: "هل يمكن متابعة الأهداف بإكسل؟", a: "لتحديد الأهداف، نعم. ولمتابعتها كل يوم، بصعوبة: يجب إعادة إدخال المبيعات والنشاط. والأداة الموصولة بالفوترة تحسب الوتيرة وحدها." },
        { q: "كم من الوقت لوضع متابعة للأهداف؟", a: "خمسة أسابيع في مثال هذه الصفحة: المعاينة، التاريخ، أهداف متفق عليها مع الفريق، إدخال النشاط، والشاشات. والاجتماع الأول يُعقد في الأسبوع الخامس." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "الهدف الذي يُعرف مرة في الشهر ليس هدفاً، بل حكم." },
      { after: 4, text: "البائع لا يقرر رقم يومه. هو يقرر زياراته." },
    ],
    cta: { eyebrow: "قولوا لنا كم بائعاً عندكم وكيف تُحدَّد أهدافهم اليوم: نبدأ بسنتين من المبيعات", title: "هدف مقسوم على اثني عشر، الرقم نفسه للجميع، نتيجة تُعرف يوم 30، تخفيضات آخر الشهر، أو مؤسس في فرنسا يريد متابعة فريق تجاري في الجزائر", body: "Symloop تحسب الأهداف على مبيعاتكم السابقة، تترجمها إلى نشاط، وتعطي كل بائع وتيرة يومه على هاتفه. صِفوا لنا فريقكم، قطاعاتكم، وما تعرفونه عن شهركم يوم 15." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.crm, kind: '2027', name: 'برنامج تسيير علاقة الزبائن: المحفظة، التذكيرات، والتوقع' },
      { href: L.prevente, kind: '2027', name: 'البيع المسبق: الجولة، الطلبية، والتحصيل' },
      { href: L.ventes, kind: '2027', name: 'تحليل المبيعات: الهامش لكل منتج، والزبائن المغادرون' },
      { href: L.tableau, kind: '2027', name: 'لوحة القيادة في الوقت الحقيقي: تعريف واحد لكل رقم' },
    ] },
  },
};

const KEYWORDS = "comment fixer des objectifs de vente 2027, comment fixer des objectifs, objectifs commerciaux, comment manager une équipe de commerciaux, comment animer une équipe commerciale, suivi des objectifs de vente, objectif par vendeur, indicateurs équipe commerciale, tableau de bord commercial algérie, how to set sales targets, sales quota, manage a sales team, leading indicators sales, sales pace tracking, كيف تُحدَّد أهداف البيع, متابعة أهداف البيع, تسيير الفريق التجاري, مؤشرات المندوبين التجاريين, Symloop";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
