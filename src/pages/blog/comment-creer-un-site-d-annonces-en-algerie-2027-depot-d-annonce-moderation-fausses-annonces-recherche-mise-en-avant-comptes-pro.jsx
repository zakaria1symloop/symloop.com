import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/comment-creer-un-site-d-annonces-en-algerie-2027-depot-d-annonce-moderation-fausses-annonces-recherche-mise-en-avant-comptes-pro.mjs';

const SLUG = 'comment-creer-un-site-d-annonces-en-algerie-2027-depot-d-annonce-moderation-fausses-annonces-recherche-mise-en-avant-comptes-pro';
const FIGURES = ['vie', 'couches', 'fraudes', 'cycle', 'filtres', 'calendrier'];
const DATE = '2026-11-20';
const I = (x) => '⁦' + x + '⁩';

const L = {
  marketplace: '/blog/creer-une-marketplace-en-algerie-2027-commission-tva-paiement-modele/',
  jumia: '/blog/apres-jumia-creer-marketplace-ecommerce-algerie-2027-verticale-logistique-paiement/',
  otp: '/blog/connexion-otp-sms-whatsapp-application-algerie-2027-numero-de-telephone-code-cout-par-envoi-fraude-passkeys/',
  arabe: '/blog/application-en-arabe-et-en-francais-algerie-2027-droite-a-gauche-chiffres-dates-polices-traductions-darija-ce-qu-on-construit/',
  paiement: '/blog/integrer-paiement-en-ligne-cib-edahabia-application-algerie-2027-page-de-paiement-confirmation-webhook-etats-de-commande-rapprochement-remboursement/',
  startup: '/blog/lancer-startup-en-algerie-depuis-la-france-2027-calendrier-quatre-voyages/',
  ia: '/blog/mettre-de-l-ia-dans-une-application-algerie-2027-cinq-fonctions-recherche-documents-extraction-factures-classification-cout-par-requete/',
  cahier: '/blog/cahier-des-charges-application-plateforme-algerie-2027-quoi-ecrire-comparer-trois-devis/',
};

const CONTENT = {
  fr: {
    kind: 'Site d’annonces · Algérie · 2027', title: "Comment créer un site d'annonces en Algérie (2027) : des annonces mortes, des doublons, de fausses annonces, des acheteurs qui appellent pour rien ; dépôt, vérification, recherche, expiration, mise en avant, et ce qu'on met en place",
    dek: "« Je vis en France et je veux lancer en Algérie un site d'annonces spécialisé, pour le matériel et les engins d'occasion. On me dit que c'est simple : un formulaire, des photos, une liste. Mais sur les sites que je regarde, beaucoup d'annonces sont déjà vendues, les mêmes reviennent dix fois, certaines sont fausses, et l'on ne trouve rien avec les filtres. Comment créer un site d'annonces qui ne finisse pas ainsi ? » Un site d'annonces n'est pas un formulaire et une liste : c'est un stock que d'autres remplissent, et qu'il faut garder vrai, trouvable et sûr.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ["Site d'annonces", 'Vérification des annonces', 'Fausses annonces et doublons', 'Recherche par filtres', 'Mise en avant et comptes professionnels', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Un site d'annonces tient sur quatre mécanismes, plus difficiles que le formulaire de dépôt. **Des annonces structurées** : des champs obligatoires par catégorie, parce qu'un filtre ne trouve que ce qui est dans un champ. **Une vérification avant publication** : numéro confirmé, doublons écartés, annonces suspectes retenues. **Un cycle de vie** : l'annonce expire à trente jours si elle n'est pas renouvelée, et la relance demande si c'est vendu. **Une recherche** par filtres, avec alertes. Les revenus, mise en avant et comptes professionnels, viennent après. Dans l'exemple de cette page, sans expiration, trois annonces affichées sur quatre ne mènent plus à rien au bout de trente jours.",
      "Cette page s'adresse à celles et ceux qui veulent lancer un site d'annonces spécialisé, immobilier, véhicules utilitaires, engins et matériel, emploi, élevage, ou ajouter des annonces à un média ou à une communauté existante, depuis l'Algérie ou depuis la France. Les définitions viennent de sources publiques : petites annonces, marché biface, effet de réseau, modération de contenu, recherche à facettes, escroquerie à l'avance de frais, modèle freemium, système de réputation, mot de passe à usage unique. Le site spécialisé, ses mille annonces et ses filtres sont un exemple construit. La page ne traite ni des obligations légales des plateformes, ni de fiscalité, et ne cite aucun prix de matériel.",
    ],
    sections: [
      { heading: "La vie d'une annonce", body: [
        "La figure suit une annonce en six temps.",
      ], visual: 'vie', after: [
        "**Le dépôt.** Une petite annonce est une forme de publicité, née dans les journaux et passée en ligne ; elle coûte bien moins qu'un grand encart, et certains sites la publient gratuitement. Le dépôt doit donc rester rapide : une catégorie, cinq ou six champs, des photos prises au téléphone, un prix. **La vérification.** C'est le temps accentué. Le numéro est confirmé par un code : un mot de passe à usage unique n'est valable que pour une session ou une opération, voir [la connexion par code](" + L.otp + "). Puis des contrôles automatiques, doublon, prix aberrant, mots interdits, et, pour la minorité d'annonces retenues, un regard humain.",
        "**La publication.** L'annonce est en ligne et trouvable. **Les contacts.** Le numéro ne s'affiche qu'à la demande : chaque révélation est comptée, et l'annonceur voit combien de personnes ont voulu l'appeler. C'est le chiffre qui lui fera payer une mise en avant, et le vôtre pour savoir si le site sert à quelque chose. **L'échéance et la clôture.** À trente jours, l'annonce expire sauf renouvellement ; « vendu » se déclare d'un geste. **Deux langues.** Annonces et recherche en arabe et en français, avec les mêmes catégories dans les deux, voir [l'application en arabe et en français](" + L.arabe + ").",
      ] },
      { heading: "Ce qu'il y a dans un site d'annonces", body: [
        "La figure empile cinq couches ; la troisième est celle pour laquelle on vient.",
      ], visual: 'couches', after: [
        "**Deux publics.** Un marché biface est une plateforme intermédiaire entre deux groupes d'utilisateurs qui s'apportent mutuellement un bénéfice : les acheteurs préfèrent un grand nombre de vendeurs, les vendeurs un grand nombre d'acheteurs. C'est un effet de réseau : la valeur du service dépend du nombre de ceux qui l'utilisent. La conséquence pratique : une catégorie, une région, et des annonceurs trouvés un par un avant l'ouverture, comme l'explique [la création d'une marketplace](" + L.marketplace + "). **Annonces ou marketplace.** Un site d'annonces met en relation ; il n'encaisse pas la vente et ne livre pas. C'est plus simple à lancer qu'une place de marché complète, décrite dans [l'après-Jumia](" + L.jumia + "), et cela laisse la porte ouverte pour y venir.",
        "**Les comptes.** Particulier ou professionnel : la distinction se voit sur l'annonce, et elle change les droits, nombre d'annonces, vitrine, statistiques. **La réputation.** Un système de réputation permet aux utilisateurs de s'évaluer les uns les autres pour bâtir la confiance ; sur un site d'annonces, l'ancienneté du compte, le numéro confirmé et les annonces menées à terme disent déjà beaucoup, sans notes à gérer. **Le référencement.** Une page par catégorie et par ville, avec un titre qui dit ce qu'on y trouve : l'optimisation pour les moteurs de recherche est la pratique qui améliore la visibilité d'un site dans leurs résultats, et un site d'annonces vit de ces pages-là.",
      ] },
      { heading: "Six nuisances, et ce qui les arrête", body: [
        "La figure donne, pour six nuisances, le signal et la parade.",
      ], visual: 'fraudes', after: [
        "**La modération.** Modérer, c'est repérer, réduire ou retirer de façon systématique les contributions hors sujet, illégales, nuisibles ou insultantes. Elle peut être réactive : elle repose alors sur les utilisateurs, qui signalent ce qui ne va pas. Craigslist, grand site américain d'annonces, fonctionne ainsi : un système de signalement, et un retrait automatique quand un certain nombre d'utilisateurs ont signalé la même annonce. **Avant plutôt qu'après.** Sur un site jeune, le signalement ne suffit pas : il n'y a pas encore assez de monde pour signaler. Les contrôles au dépôt font l'essentiel.",
        "**L'acompte à distance.** L'escroquerie à l'avance de frais promet beaucoup en échange d'un petit paiement d'avance. Sur un site d'annonces, elle prend la forme d'un prix trop beau et d'une demande d'acompte « pour réserver », avant toute visite. La parade tient en trois choses : retenir les prix très en dessous des autres, afficher un avertissement au moment où le numéro est révélé, et mettre un bouton de signalement sur chaque annonce. **Les doublons.** Mêmes photos, même numéro : une seule annonce reste visible. Reconnaître des images proches fait partie des fonctions décrites dans [l'IA dans une application](" + L.ia + "). **Les règles.** Courtes, affichées au dépôt, appliquées par le logiciel : nombre d'annonces par numéro, par appareil, par jour.",
      ] },
      { heading: "Des annonces encore vraies", body: [
        "La figure suit mille annonces pendant trente jours.",
      ], visual: 'cycle', after: [
        "**Le stock se périme.** Sur 920 annonces publiées, l'exemple en compte 230 encore valables trente jours plus tard ; 310 concernent un bien déjà vendu, 380 sont abandonnées. Si rien n'expire, l'acheteur voit les 920 : trois sur quatre ne mènent à rien. **L'expiration.** Trente jours, puis l'annonce sort des résultats, sauf si l'annonceur la renouvelle d'un geste, depuis un message. **La relance.** Elle pose une seule question : « toujours disponible ? ». Oui, et l'annonce repart pour trente jours ; « vendu », et elle est archivée ; pas de réponse, et elle expire.",
        "**Ce que cela change.** Le site affiche 230 annonces au lieu de 920 : un chiffre plus petit, et un site meilleur. C'est contre-intuitif pour qui veut « avoir beaucoup d'annonces », et c'est la décision la plus importante. **Ce que l'on mesure.** Par annonce : vues, numéros révélés, messages. Pour le site : part des annonces de moins de trente jours, part des annonces ayant reçu au moins un contact, délai avant le premier contact. **La durée dépend de la catégorie.** Un logement à louer n'a pas la durée de vie d'un engin de chantier : l'échéance se règle par catégorie.",
      ] },
      { heading: "Un filtre ne trouve que ce qui est dans un champ", body: [
        "La figure fait passer une catégorie par trois filtres.",
      ], visual: 'filtres', after: [
        "**La recherche à facettes.** Elle complète la recherche par mots par une navigation qui permet de restreindre les résultats au moyen de filtres, fondés sur un classement des articles par caractéristiques. Encore faut-il que ces caractéristiques aient été saisies. Dans l'exemple : 38 chargeuses dans la wilaya ; le filtre sur l'année en garde 22 et en perd 9, dont l'année n'a pas été saisie ; le filtre sur le prix en garde 9 et en perd 7, affichées « prix à discuter ». Seize annonces qui convenaient peut-être ne seront jamais vues.",
        "**Des champs par catégorie.** Un engin se cherche par marque, modèle, année, heures de service, wilaya ; un local, par surface, étage, quartier, type de bail. Cinq ou six champs obligatoires, choisis parmi ceux par lesquels on cherche vraiment : c'est le travail du cadrage, avant le code. **Le prix.** « Prix à discuter » est une habitude ; un prix indicatif obligatoire, que l'annonceur peut marquer « négociable », garde l'annonce trouvable. **Les alertes.** Une recherche enregistrée prévient l'acheteur quand une annonce correspond : dans une catégorie où les biens partent vite, c'est le service qui fait revenir.",
      ] },
      { heading: "Dix semaines, dans l'exemple", body: [
        "Dix semaines pour une catégorie et une région, dont une de cadrage.",
      ], visual: 'calendrier', after: [
        "**Le cadrage.** Une semaine : la catégorie, la région, les champs, les règles de publication, et la liste des premiers annonceurs à aller chercher. Ce travail s'écrit, voir [le cahier des charges](" + L.cahier + "). **Le web d'abord.** Un site qui se charge vite sur téléphone suffit pour ouvrir ; l'application vient quand les annonceurs réguliers la demandent. **Depuis la France.** Ce qui doit se faire sur place, premiers annonceurs, partenariats, se planifie comme dans [le lancement depuis la France](" + L.startup + ").",
        "**Les revenus.** Le freemium est un modèle où le service de base est gratuit et où des fonctions supplémentaires sont payantes. Pour des annonces : dépôt gratuit, puis mise en avant, remontée en tête, compte professionnel avec vitrine et statistiques. Craigslist tire l'essentiel de ses revenus d'annonces d'emploi payantes dans certaines villes : faire payer une catégorie, pas toutes, est une option. Le paiement en ligne se branche comme dans [l'intégration du paiement](" + L.paiement + "). **Prêt à l'emploi ou sur mesure.** Des scripts d'annonces existent et suffisent pour tester une idée. Le sur-mesure se justifie quand les champs par catégorie, la vérification, le cycle de vie et la recherche font la différence, c'est-à-dire dès que le site doit durer. **Les durées** sont celles d'un exemple construit.",
      ], list: [
        "**Ce que vous recevez** : un formulaire de dépôt par catégorie ; des comptes à numéro confirmé ; une file de vérification avec ses règles ; une recherche par filtres avec alertes ; un cycle de vie avec expiration et relance ; des statistiques par annonce ; la mise en avant et les comptes professionnels.",
        "**Ce que le site évite** : les annonces mortes qui s'accumulent, les doublons, les prix « à discuter » introuvables, les faux bons plans, les dix annonces d'un professionnel sous un compte particulier.",
        "**Ce qui est mesuré** : annonces déposées, publiées, refusées et pourquoi ; part des annonces de moins de trente jours ; annonces ayant reçu un contact ; délai avant le premier contact ; signalements traités ; revenus par mise en avant et par compte professionnel.",
        "**Ce que fait Symloop** : le cadrage de la catégorie et de ses champs, le dépôt et les comptes, la vérification et les règles, la recherche et les alertes, le cycle de vie, les statistiques, la mise en avant et le paiement, en arabe et en français.",
      ], faq: [
        { q: "Comment créer un site d'annonces ?", a: "En commençant par une catégorie et une région, avec des champs obligatoires par catégorie, une vérification avant publication, une expiration des annonces et une recherche par filtres. Le formulaire et la liste sont la partie facile." },
        { q: "Combien de temps faut-il pour créer un site d'annonces ?", a: "Dix semaines dans l'exemple de cette page, pour une catégorie et une région, cadrage compris. Un script prêt à l'emploi s'installe plus vite, mais ne règle ni la vérification ni les annonces mortes." },
        { q: "Comment un site d'annonces gagne-t-il de l'argent ?", a: "Le plus souvent par un service gratuit avec des options payantes : mise en avant d'une annonce, remontée en tête, comptes professionnels avec vitrine. Certains sites ne font payer qu'une catégorie, comme l'emploi." },
        { q: "Comment éviter les fausses annonces ?", a: "Par des contrôles au dépôt : numéro confirmé, prix très en dessous des autres retenu pour vérification, limites par numéro et par appareil. Puis un bouton de signalement et un avertissement au moment du contact." },
        { q: "Comment éviter les doublons ?", a: "En comparant, au dépôt, les photos, le numéro et le titre aux annonces déjà en ligne. Une seule reste visible ; l'annonceur est invité à renouveler l'ancienne plutôt qu'à en créer une autre." },
        { q: "Pourquoi faire expirer les annonces ?", a: "Parce qu'une annonce dont le bien est vendu coûte un appel inutile à chaque acheteur. Avec une expiration à trente jours et une relance, le site n'affiche que ce qui est encore disponible." },
        { q: "Faut-il une application mobile ?", a: "Pas pour commencer. Un site rapide sur téléphone suffit pour ouvrir. L'application devient utile pour les annonceurs réguliers et pour les alertes, une fois que le site a du trafic." },
        { q: "Annonces gratuites ou payantes ?", a: "Gratuites au dépôt, presque toujours : un site d'annonces a d'abord besoin d'annonces. Ce qui se paie, c'est la visibilité supplémentaire et les outils des professionnels." },
        { q: "Peut-on lancer un site d'annonces depuis la France ?", a: "Oui, pour la construction et le suivi. Les premiers annonceurs, eux, se trouvent sur place : une catégorie, une région, et des professionnels convaincus un par un avant l'ouverture." },
        { q: "Quelle différence avec une marketplace ?", a: "Le site d'annonces met en relation : la vente se conclut entre les deux parties. La marketplace encaisse, prend une commission et suit la livraison. Le premier est plus simple à lancer et peut évoluer vers la seconde." },
      ] },
    ],
    pullQuotes: [
      { after: 3, text: "Le site affiche 230 annonces au lieu de 920 : un chiffre plus petit, et un site meilleur." },
      { after: 4, text: "Le formulaire de dépôt est le moteur de recherche." },
    ],
    cta: { eyebrow: "Dites-nous quelle catégorie, quelle région, et qui seront vos premiers annonceurs : nous commençons par une semaine de cadrage", title: "Annonces mortes, doublons, faux bons plans, filtres qui ne trouvent rien, ou idée de site d'annonces spécialisé que vous voulez lancer en Algérie depuis la France", body: "Symloop construit ce qui fait tenir un site d'annonces : dépôt par catégorie, vérification, recherche, cycle de vie, mise en avant. Décrivez-nous votre catégorie, les champs par lesquels on y cherche, et ce que les sites existants font mal." },
    related: { label: 'À lire aussi', items: [
      { href: L.marketplace, kind: '2027', name: 'Créer une marketplace en Algérie : commission, paiement, modèle' },
      { href: L.jumia, kind: '2027', name: 'Après Jumia : marketplace verticale, logistique, paiement' },
      { href: L.otp, kind: '2027', name: 'Connexion par code : SMS, WhatsApp, coût, fraude' },
      { href: L.startup, kind: '2027', name: 'Lancer une startup en Algérie depuis la France' },
    ] },
  },
  en: {
    kind: 'Classifieds site · Algeria · 2027', title: "How to build a classifieds site in Algeria (2027): dead listings, duplicates, fake listings, buyers calling for nothing; posting, checking, search, expiry, paid promotion, and what we put in place",
    dek: "“I live in France and I want to launch a specialised classifieds site in Algeria, for used equipment and machinery. I am told it is simple: a form, some photos, a list. But on the sites I look at, many listings are already sold, the same ones come back ten times, some are fake, and the filters find nothing. How do you build a classifieds site that does not end up like that?” A classifieds site is not a form and a list: it is a stock that others fill, and that has to be kept true, findable and safe.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Classifieds site', 'Checking listings', 'Fake listings and duplicates', 'Search by filters', 'Paid promotion and business accounts', 'Algeria 2027'],
    intro: [
      "**Short answer.** A classifieds site rests on four mechanisms, harder than the posting form. **Structured listings**: required fields per category, because a filter only finds what is in a field. **Checking before publication**: number confirmed, duplicates removed, suspect listings held. **A life cycle**: the listing expires at thirty days unless renewed, and the reminder asks whether it is sold. **Search** by filters, with alerts. Revenue, featured listings and business accounts, comes afterwards. In this page's example, without expiry, three listings shown out of four lead nowhere after thirty days.",
      "This page is for those who want to launch a specialised classifieds site, property, commercial vehicles, machinery and equipment, jobs, livestock, or add listings to an existing media outlet or community, from Algeria or from France. The definitions come from public sources: classified advertising, two-sided market, network effect, content moderation, faceted search, advance-fee scam, freemium model, reputation system, one-time password. The specialised site, its thousand listings and its filters are a constructed example. The page covers neither the legal obligations of platforms nor tax, and quotes no hardware price.",
    ],
    sections: [
      { heading: "The life of a listing", body: [
        "The figure follows a listing in six steps.",
      ], visual: 'vie', after: [
        "**Posting.** A classified ad is a form of advertising, born in newspapers and moved online; it costs far less than a large display ad, and some sites publish it free. Posting therefore has to stay quick: a category, five or six fields, photos taken on the phone, a price. **Checking.** It is the accented step. The number is confirmed by a code: a one-time password is valid for only one session or transaction, see [sign-in by code](" + L.otp + "). Then automatic controls, duplicate, absurd price, banned words, and, for the minority of listings held back, a human look.",
        "**Publication.** The listing is online and findable. **Contacts.** The number is shown only on request: each reveal is counted, and the advertiser sees how many people wanted to call. That is the figure that will make them pay for promotion, and yours for knowing whether the site is of any use. **Due date and closing.** At thirty days the listing expires unless renewed; “sold” is declared in one gesture. **Two languages.** Listings and search in Arabic and in French, with the same categories in both, see [the application in Arabic and in French](" + L.arabe + ").",
      ] },
      { heading: "What is inside a classifieds site", body: [
        "The figure stacks five layers; the third is the one people come for.",
      ], visual: 'couches', after: [
        "**Two audiences.** A two-sided market is an intermediary platform between two user groups that bring each other a benefit: buyers prefer a large number of sellers, and sellers a large number of buyers. That is a network effect: the value of the service depends on how many people use it. The practical consequence: one category, one region, and advertisers found one by one before opening, as explained in [building a marketplace](" + L.marketplace + "). **Classifieds or marketplace.** A classifieds site puts people in touch; it does not collect the payment or deliver. It is simpler to launch than a full marketplace, described in [after Jumia](" + L.jumia + "), and it leaves the door open to become one.",
        "**Accounts.** Private or business: the distinction shows on the listing, and it changes the rights, number of listings, shop window, statistics. **Reputation.** A reputation system lets users rate each other to build trust; on a classifieds site, the age of the account, the confirmed number and the listings seen through already say a lot, with no ratings to manage. **Search engines.** One page per category and per city, with a title that says what is there: search engine optimisation is the practice of improving a site's visibility in search results, and a classifieds site lives on those pages.",
      ] },
      { heading: "Six nuisances, and what stops them", body: [
        "The figure gives, for six nuisances, the signal and the countermeasure.",
      ], visual: 'fraudes', after: [
        "**Moderation.** Moderating means systematically identifying, reducing or removing contributions that are irrelevant, illegal, harmful or insulting. It can be reactive: it then depends on users, who report what is wrong. Craigslist, the large American classifieds site, works that way: a flagging system, and automatic removal once a certain number of users have flagged the same posting. **Before rather than after.** On a young site, flagging is not enough: there are not yet enough people to flag. Controls at posting do most of the work.",
        "**The remote deposit.** An advance-fee scam promises a lot in return for a small upfront payment. On a classifieds site it takes the form of a price too good to be true and a request for a deposit “to reserve”, before any visit. The countermeasure comes down to three things: hold prices far below the others, display a warning at the moment the number is revealed, and put a report button on every listing. **Duplicates.** Same photos, same number: only one listing stays visible. Recognising near-identical images is one of the functions described in [AI in an application](" + L.ia + "). **The rules.** Short, shown at posting, enforced by the software: number of listings per number, per device, per day.",
      ] },
      { heading: "Listings that are still true", body: [
        "The figure follows a thousand listings over thirty days.",
      ], visual: 'cycle', after: [
        "**Stock goes stale.** Out of 920 published listings, the example counts 230 still valid thirty days later; 310 are for an item already sold, 380 are abandoned. If nothing expires, the buyer sees all 920: three out of four lead nowhere. **Expiry.** Thirty days, then the listing leaves the results, unless the advertiser renews it in one gesture, from a message. **The reminder.** It asks a single question: “still available?”. Yes, and the listing runs another thirty days; “sold”, and it is archived; no answer, and it expires.",
        "**What that changes.** The site shows 230 listings instead of 920: a smaller number, and a better site. It is counter-intuitive for anyone who wants “lots of listings”, and it is the most important decision. **What is measured.** Per listing: views, numbers revealed, messages. For the site: share of listings under thirty days old, share of listings with at least one contact, time to first contact. **Duration depends on the category.** A flat to rent does not live as long as a piece of site machinery: the due date is set per category.",
      ] },
      { heading: "A filter only finds what is in a field", body: [
        "The figure puts one category through three filters.",
      ], visual: 'filtres', after: [
        "**Faceted search.** It adds to word search a navigation that lets users narrow results by applying filters, based on a classification of items by characteristic. Those characteristics still have to have been entered. In the example: 38 loaders in the wilaya; the year filter keeps 22 and loses 9, whose year was not entered; the price filter keeps 9 and loses 7, shown as “price on request”. Sixteen listings that might have suited will never be seen.",
        "**Fields per category.** A machine is searched by make, model, year, hours of service, wilaya; premises, by surface, floor, district, type of lease. Five or six required fields, chosen from those people really search by: that is the scoping work, before the code. **The price.** “Price on request” is a habit; a required indicative price, which the advertiser can mark “negotiable”, keeps the listing findable. **Alerts.** A saved search warns the buyer when a listing matches: in a category where items go fast, that is the service that brings people back.",
      ] },
      { heading: "Ten weeks, in the example", body: [
        "Ten weeks for one category and one region, one of them scoping.",
      ], visual: 'calendrier', after: [
        "**Scoping.** One week: the category, the region, the fields, the publication rules, and the list of first advertisers to go and find. That work is written down, see [the specification](" + L.cahier + "). **Web first.** A site that loads fast on a phone is enough to open; the app comes when regular advertisers ask for it. **From France.** What has to be done on the ground, first advertisers, partnerships, is planned as in [launching from France](" + L.startup + ").",
        "**Revenue.** Freemium is a model in which the basic service is free and additional features are paid for. For listings: free posting, then featured placement, bumping to the top, a business account with a shop window and statistics. Craigslist draws most of its revenue from paid job ads in certain cities: charging for one category, not all, is an option. Online payment is plugged in as in [payment integration](" + L.paiement + "). **Ready-made or custom.** Classifieds scripts exist and are enough to test an idea. Custom work is justified when fields per category, checking, the life cycle and search make the difference, that is as soon as the site is meant to last. **The durations** are those of a constructed example.",
      ], list: [
        "**What you receive**: a posting form per category; accounts with a confirmed number; a checking queue with its rules; search by filters with alerts; a life cycle with expiry and reminder; statistics per listing; featured placement and business accounts.",
        "**What the site avoids**: dead listings piling up, duplicates, unfindable “price on request” listings, bargains that are too good to be true, a business's ten listings under a private account.",
        "**What is measured**: listings posted, published, refused and why; share of listings under thirty days old; listings that received a contact; time to first contact; reports handled; revenue per promotion and per business account.",
        "**What Symloop does**: scoping the category and its fields, posting and accounts, checking and rules, search and alerts, the life cycle, statistics, promotion and payment, in Arabic and in French.",
      ], faq: [
        { q: "How do you build a classifieds site?", a: "By starting with one category and one region, with required fields per category, checking before publication, expiry of listings and search by filters. The form and the list are the easy part." },
        { q: "How long does it take to build a classifieds site?", a: "Ten weeks in this page's example, for one category and one region, scoping included. A ready-made script installs faster, but settles neither checking nor dead listings." },
        { q: "How does a classifieds site make money?", a: "Most often through a free service with paid options: featuring a listing, bumping it to the top, business accounts with a shop window. Some sites charge for one category only, such as jobs." },
        { q: "How do you avoid fake listings?", a: "With controls at posting: confirmed number, prices far below the others held for checking, limits per number and per device. Then a report button and a warning at the moment of contact." },
        { q: "How do you avoid duplicates?", a: "By comparing, at posting, the photos, the number and the title with listings already online. Only one stays visible; the advertiser is invited to renew the old one rather than create another." },
        { q: "Why make listings expire?", a: "Because a listing whose item is sold costs every buyer a wasted call. With expiry at thirty days and a reminder, the site only shows what is still available." },
        { q: "Is a mobile app needed?", a: "Not to begin with. A site that is fast on a phone is enough to open. The app becomes useful for regular advertisers and for alerts, once the site has traffic." },
        { q: "Free or paid listings?", a: "Free to post, almost always: a classifieds site first of all needs listings. What is paid for is extra visibility and the tools for businesses." },
        { q: "Can a classifieds site be launched from France?", a: "Yes, for building and follow-up. The first advertisers, though, are found on the ground: one category, one region, and businesses convinced one by one before opening." },
        { q: "What is the difference from a marketplace?", a: "A classifieds site puts people in touch: the sale is concluded between the two parties. A marketplace collects the payment, takes a commission and follows the delivery. The first is simpler to launch and can grow into the second." },
      ] },
    ],
    pullQuotes: [
      { after: 3, text: "The site shows 230 listings instead of 920: a smaller number, and a better site." },
      { after: 4, text: "The posting form is the search engine." },
    ],
    cta: { eyebrow: "Tell us which category, which region, and who your first advertisers will be: we start with a week of scoping", title: "Dead listings, duplicates, bargains too good to be true, filters that find nothing, or an idea for a specialised classifieds site you want to launch in Algeria from France", body: "Symloop builds what makes a classifieds site hold up: posting per category, checking, search, life cycle, promotion. Describe your category to us, the fields people search by, and what existing sites do badly." },
    related: { label: 'Also read', items: [
      { href: L.marketplace, kind: '2027', name: 'Building a marketplace in Algeria: commission, payment, model' },
      { href: L.jumia, kind: '2027', name: 'After Jumia: vertical marketplace, logistics, payment' },
      { href: L.otp, kind: '2027', name: 'Sign-in by code: SMS, WhatsApp, cost, fraud' },
      { href: L.startup, kind: '2027', name: 'Launching a startup in Algeria from France' },
    ] },
  },
  ar: {
    kind: 'موقع الإعلانات · الجزائر · 2027', title: "كيف يُنشأ موقع إعلانات في الجزائر (2027): إعلانات ميتة، مكرَّرات، إعلانات زائفة، ومشترون يتصلون دون جدوى؛ الإيداع، المراجعة، البحث، انتهاء الصلاحية، الإبراز، وما نضعه",
    dek: "«أعيش في فرنسا وأريد أن أطلق في الجزائر موقع إعلانات متخصصاً، للعتاد والآليات المستعملة. يُقال لي إنه بسيط: استمارة، صور، وقائمة. لكن في المواقع التي أنظر إليها، كثير من الإعلانات بيعت أشياؤها، والإعلانات نفسها تعود عشر مرات، بعضها زائف، ولا يُعثر على شيء بالفلاتر. كيف يُنشأ موقع إعلانات لا ينتهي هكذا؟» موقع الإعلانات ليس استمارة وقائمة: هو مخزون يملؤه الآخرون، ويجب أن يبقى صحيحاً، قابلاً للعثور عليه، وآمناً.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['موقع الإعلانات', 'مراجعة الإعلانات', 'الإعلانات الزائفة والمكرَّرة', 'البحث بالفلاتر', 'الإبراز والحسابات المهنية', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** موقع الإعلانات يقوم على أربع آليات، أصعب من استمارة الإيداع. **إعلانات مهيكلة**: خانات إجبارية لكل صنف، لأن الفلتر لا يجد إلا ما هو في خانة. **مراجعة قبل النشر**: رقم مؤكَّد، مكرَّرات تُستبعد، وإعلانات مشبوهة تُحجز. **دورة حياة**: الإعلان ينتهي عند ثلاثين يوماً إذا لم يُجدَّد، والتذكير يسأل هل بيع. و**بحث** بالفلاتر، مع تنبيهات. والمداخيل، الإبراز والحسابات المهنية، تأتي بعد ذلك. في مثال هذه الصفحة، دون انتهاء صلاحية، ثلاثة إعلانات معروضة من أربعة لا تؤدي إلى شيء بعد ثلاثين يوماً.",
      "هذه الصفحة موجّهة إلى من يريد إطلاق موقع إعلانات متخصص، عقار، مركبات نفعية، آليات وعتاد، تشغيل، أو مواشٍ، أو إضافة إعلانات إلى وسيلة إعلام أو جماعة قائمة، من الجزائر أو من فرنسا. التعريفات من مصادر عمومية: الإعلانات المبوَّبة، السوق ذات الوجهين، أثر الشبكة، الإشراف على المحتوى، البحث بالأوجه، الاحتيال بالدفع المسبق، النموذج المجاني مع خيارات مدفوعة، نظام السمعة، وكلمة المرور لمرة واحدة. والموقع المتخصص وإعلاناته الألف وفلاتره مثال مركَّب. والصفحة لا تتناول الالتزامات القانونية للمنصات ولا الجباية، ولا تذكر أي سعر عتاد.",
    ],
    sections: [
      { heading: "حياة إعلان", body: [
        "الشكل يتابع إعلاناً في ست مراحل.",
      ], visual: 'vie', after: [
        "**الإيداع.** الإعلان المبوَّب شكل من الإشهار، وُلد في الجرائد وانتقل إلى الإنترنت؛ وهو يكلّف أقل بكثير من إعلان كبير، وبعض المواقع تنشره مجاناً. فيجب أن يبقى الإيداع سريعاً: صنف، خمس أو ست خانات، صور بالهاتف، وسعر. **المراجعة.** هي المرحلة المبرزة. الرقم يؤكَّد برمز: كلمة المرور لمرة واحدة لا تصلح إلا لجلسة أو عملية واحدة، انظر [الدخول بالرمز](" + L.otp + "). ثم مراقبات آلية، مكرَّر، سعر غير معقول، وكلمات ممنوعة، و، لأقلية الإعلانات المحجوزة، نظرة بشرية.",
        "**النشر.** الإعلان على الخط ويُعثر عليه. **الاتصالات.** الرقم لا يظهر إلا عند الطلب: كل كشف يُحسب، والمُعلِن يرى كم شخصاً أراد الاتصال به. وهو الرقم الذي سيجعله يدفع مقابل الإبراز، ورقمكم لمعرفة هل ينفع الموقع. **الأجل والإغلاق.** عند ثلاثين يوماً ينتهي الإعلان إلا إذا جُدّد؛ و«بيع» يُصرَّح به بحركة واحدة. **لغتان.** الإعلانات والبحث بالعربية والفرنسية، بالأصناف نفسها في الاثنتين، انظر [التطبيق بالعربية والفرنسية](" + L.arabe + ").",
      ] },
      { heading: "ما يوجد في موقع إعلانات", body: [
        "الشكل يرتّب خمس طبقات؛ والثالثة هي التي يأتي الناس من أجلها.",
      ], visual: 'couches', after: [
        "**جمهوران.** السوق ذات الوجهين منصة وسيطة بين مجموعتين من المستعملين تنفع كل واحدة الأخرى: المشترون يفضّلون عدداً كبيراً من البائعين، والبائعون عدداً كبيراً من المشترين. وهذا أثر شبكة: قيمة الخدمة تتوقف على عدد من يستعملها. والنتيجة العملية: صنف واحد، منطقة واحدة، ومُعلِنون يُعثر عليهم واحداً واحداً قبل الافتتاح، كما يشرح [إنشاء سوق إلكترونية](" + L.marketplace + "). **إعلانات أم سوق إلكترونية.** موقع الإعلانات يربط بين الطرفين؛ لا يقبض ثمن البيع ولا يسلّم. وهو أبسط إطلاقاً من سوق إلكترونية كاملة، موصوفة في [ما بعد جوميا](" + L.jumia + ")، ويترك الباب مفتوحاً للوصول إليها.",
        "**الحسابات.** فرد أو مهني: الفرق يظهر على الإعلان، ويغيّر الحقوق، عدد الإعلانات، الواجهة، والإحصاءات. **السمعة.** نظام السمعة يسمح للمستعملين بتقييم بعضهم بعضاً لبناء الثقة؛ وفي موقع إعلانات، أقدمية الحساب، الرقم المؤكَّد، والإعلانات التي بلغت نهايتها تقول الكثير، دون تنقيط يُسيَّر. **محركات البحث.** صفحة لكل صنف ولكل مدينة، بعنوان يقول ما يوجد فيها: تحسين الظهور في محركات البحث هو الممارسة التي تحسّن ظهور موقع في نتائجها، وموقع الإعلانات يعيش على هذه الصفحات.",
      ] },
      { heading: "ست مضايقات، وما يوقفها", body: [
        "الشكل يعطي، لست مضايقات، الإشارة والحل.",
      ], visual: 'fraudes', after: [
        "**الإشراف.** الإشراف هو رصد المساهمات الخارجة عن الموضوع أو غير القانونية أو المضرّة أو المهينة، وتقليصها أو سحبها بطريقة منهجية. وقد يكون تفاعلياً: فيعتمد على المستعملين، الذين يبلّغون عما لا يصحّ. وموقع الإعلانات الأمريكي الكبير " + I('Craigslist') + " يشتغل هكذا: نظام تبليغ، وسحب آلي حين يبلّغ عدد معيّن من المستعملين عن الإعلان نفسه. **قبل لا بعد.** في موقع فتيّ، التبليغ لا يكفي: لا يوجد بعد ما يكفي من الناس للتبليغ. والمراقبات عند الإيداع تصنع الأهم.",
        "**العربون عن بعد.** الاحتيال بالدفع المسبق يعد بالكثير مقابل دفعة صغيرة مسبقة. وفي موقع إعلانات، يأخذ شكل سعر مغرٍ أكثر من اللازم وطلب عربون «للحجز»، قبل أي معاينة. والحل في ثلاثة أشياء: حجز الأسعار البعيدة تحت الأخرى، عرض تحذير لحظة كشف الرقم، ووضع زر تبليغ على كل إعلان. **المكرَّرات.** الصور نفسها، الرقم نفسه: إعلان واحد يبقى ظاهراً. والتعرف على صور متقاربة من الوظائف الموصوفة في [الذكاء الاصطناعي في تطبيق](" + L.ia + "). **القواعد.** قصيرة، معروضة عند الإيداع، ويطبّقها البرنامج: عدد الإعلانات لكل رقم، لكل جهاز، وفي اليوم.",
      ] },
      { heading: "إعلانات ما زالت صحيحة", body: [
        "الشكل يتابع ألف إعلان طوال ثلاثين يوماً.",
      ], visual: 'cycle', after: [
        "**المخزون يفسد.** من 920 إعلاناً منشوراً، يعدّ المثال 230 ما زالت صالحة بعد ثلاثين يوماً؛ 310 تخص شيئاً بيع، و380 متروكة. وإذا لم ينتهِ شيء، رأى المشتري الـ920 كلها: ثلاثة من أربعة لا تؤدي إلى شيء. **انتهاء الصلاحية.** ثلاثون يوماً، ثم يخرج الإعلان من النتائج، إلا إذا جدّده المُعلِن بحركة واحدة، من رسالة. **التذكير.** يطرح سؤالاً واحداً: «ما زال متاحاً؟». نعم، فينطلق الإعلان ثلاثين يوماً أخرى؛ «بيع»، فيؤرشَف؛ ودون جواب، ينتهي.",
        "**ما يغيّره ذلك.** الموقع يعرض 230 إعلاناً بدل 920: رقم أصغر، وموقع أحسن. وهذا عكس الحدس لمن يريد «إعلانات كثيرة»، وهو أهم قرار. **ما يُقاس.** لكل إعلان: المشاهدات، الأرقام المكشوفة، والرسائل. وللموقع: نسبة الإعلانات التي عمرها أقل من ثلاثين يوماً، نسبة الإعلانات التي تلقّت اتصالاً واحداً على الأقل، والمدة قبل أول اتصال. **المدة تتوقف على الصنف.** مسكن للإيجار لا يعيش كآلية ورشة: الأجل يُضبط لكل صنف.",
      ] },
      { heading: "الفلتر لا يجد إلا ما هو في خانة", body: [
        "الشكل يمرّر صنفاً بثلاثة فلاتر.",
      ], visual: 'filtres', after: [
        "**البحث بالأوجه.** يضيف إلى البحث بالكلمات تصفحاً يسمح بتضييق النتائج بفلاتر، مبنية على تصنيف العناصر حسب خصائصها. ويبقى أن تكون هذه الخصائص قد أُدخلت. في المثال: 38 محمِّلة في الولاية؛ فلتر السنة يحتفظ بـ22 ويضيّع 9، لم تُدخَل سنتها؛ وفلتر السعر يحتفظ بـ9 ويضيّع 7، معروضة بـ«السعر للنقاش». ستة عشر إعلاناً ربما كانت مناسبة لن تُرى أبداً.",
        "**خانات لكل صنف.** الآلية يُبحث عنها بالعلامة، الموديل، السنة، ساعات الخدمة، والولاية؛ والمحل، بالمساحة، الطابق، الحي، ونوع الإيجار. خمس أو ست خانات إجبارية، تُختار مما يُبحث به فعلاً: وهذا عمل التأطير، قبل الشيفرة. **السعر.** «السعر للنقاش» عادة؛ وسعر تقريبي إجباري، يستطيع المُعلِن أن يعلّم عليه «قابل للتفاوض»، يُبقي الإعلان قابلاً للعثور عليه. **التنبيهات.** بحث محفوظ ينبّه المشتري حين يوافقه إعلان: وفي صنف تذهب أشياؤه بسرعة، هذه الخدمة التي تعيد الناس.",
      ] },
      { heading: "عشرة أسابيع، في المثال", body: [
        "عشرة أسابيع لصنف واحد ومنطقة واحدة، منها أسبوع للتأطير.",
      ], visual: 'calendrier', after: [
        "**التأطير.** أسبوع: الصنف، المنطقة، الخانات، قواعد النشر، وقائمة المُعلِنين الأوائل الذين يُبحث عنهم. وهذا العمل يُكتب، انظر [دفتر الشروط](" + L.cahier + "). **الويب أولاً.** موقع يُحمَّل بسرعة على الهاتف يكفي للافتتاح؛ والتطبيق يأتي حين يطلبه المُعلِنون المنتظمون. **من فرنسا.** ما يجب أن يُنجَز في عين المكان، المُعلِنون الأوائل والشراكات، يُخطَّط كما في [الإطلاق من فرنسا](" + L.startup + ").",
        "**المداخيل.** النموذج المجاني مع خيارات مدفوعة يكون فيه الأساسي مجاناً والوظائف الإضافية بمقابل. وللإعلانات: إيداع مجاني، ثم الإبراز، الرفع إلى الأعلى، وحساب مهني بواجهة وإحصاءات. و" + I('Craigslist') + " يستمد معظم مداخيله من إعلانات تشغيل مدفوعة في مدن معيّنة: جعل صنف واحد بمقابل، لا كلها، خيار ممكن. والدفع عبر الإنترنت يُربط كما في [إدماج الدفع](" + L.paiement + "). **جاهز أو على المقاس.** توجد برامج إعلانات جاهزة وتكفي لتجربة فكرة. والعمل على المقاس يُبرَّر حين تصنع الخانات لكل صنف والمراجعة ودورة الحياة والبحث الفرق، أي منذ أن يُراد للموقع أن يدوم. **المدد** هي مدد مثال مركَّب.",
      ], list: [
        "**ما تتلقونه**: استمارة إيداع لكل صنف؛ حسابات برقم مؤكَّد؛ طابور مراجعة بقواعده؛ بحث بالفلاتر مع تنبيهات؛ دورة حياة بانتهاء صلاحية وتذكير؛ إحصاءات لكل إعلان؛ والإبراز والحسابات المهنية.",
        "**ما يتفاداه الموقع**: الإعلانات الميتة التي تتراكم، المكرَّرات، إعلانات «السعر للنقاش» التي لا يُعثر عليها، الفرص المغرية أكثر من اللازم، والإعلانات العشرة لمهني تحت حساب فرد.",
        "**ما يُقاس**: الإعلانات المودَعة، المنشورة، والمرفوضة ولماذا؛ نسبة الإعلانات التي عمرها أقل من ثلاثين يوماً؛ الإعلانات التي تلقّت اتصالاً؛ المدة قبل أول اتصال؛ التبليغات المعالَجة؛ والمداخيل لكل إبراز ولكل حساب مهني.",
        "**ما تفعله Symloop**: تأطير الصنف وخاناته، الإيداع والحسابات، المراجعة والقواعد، البحث والتنبيهات، دورة الحياة، الإحصاءات، الإبراز والدفع، بالعربية والفرنسية.",
      ], faq: [
        { q: "كيف يُنشأ موقع إعلانات؟", a: "بالبدء بصنف واحد ومنطقة واحدة، مع خانات إجبارية لكل صنف، مراجعة قبل النشر، انتهاء صلاحية للإعلانات، وبحث بالفلاتر. والاستمارة والقائمة هما الجزء السهل." },
        { q: "كم من الوقت يلزم لإنشاء موقع إعلانات؟", a: "عشرة أسابيع في مثال هذه الصفحة، لصنف واحد ومنطقة واحدة، التأطير منها. وبرنامج جاهز يُثبَّت أسرع، لكنه لا يحلّ المراجعة ولا الإعلانات الميتة." },
        { q: "كيف يربح موقع الإعلانات المال؟", a: "في الغالب بخدمة مجانية مع خيارات مدفوعة: إبراز إعلان، رفعه إلى الأعلى، وحسابات مهنية بواجهة. وبعض المواقع لا تجعل بمقابل إلا صنفاً واحداً، كالتشغيل." },
        { q: "كيف تُتفادى الإعلانات الزائفة؟", a: "بمراقبات عند الإيداع: رقم مؤكَّد، سعر بعيد تحت الآخرين يُحجز للمراجعة، وحدود لكل رقم ولكل جهاز. ثم زر تبليغ وتحذير لحظة الاتصال." },
        { q: "كيف تُتفادى المكرَّرات؟", a: "بمقارنة الصور والرقم والعنوان، عند الإيداع، بالإعلانات الموجودة. واحد فقط يبقى ظاهراً؛ ويُدعى المُعلِن إلى تجديد القديم بدل إنشاء آخر." },
        { q: "لماذا تُنهى صلاحية الإعلانات؟", a: "لأن إعلاناً بيع شيئه يكلّف كل مشترٍ مكالمة دون جدوى. وبانتهاء صلاحية عند ثلاثين يوماً وتذكير، لا يعرض الموقع إلا ما هو متاح." },
        { q: "هل يلزم تطبيق للهاتف؟", a: "ليس للبدء. موقع سريع على الهاتف يكفي للافتتاح. والتطبيق يصير نافعاً للمُعلِنين المنتظمين وللتنبيهات، حين يكون للموقع زوار." },
        { q: "إعلانات مجانية أم مدفوعة؟", a: "مجانية عند الإيداع، في الغالب دائماً: موقع الإعلانات يحتاج أولاً إلى إعلانات. وما يُدفع هو الظهور الإضافي وأدوات المهنيين." },
        { q: "هل يمكن إطلاق موقع إعلانات من فرنسا؟", a: "نعم، للبناء والمتابعة. أما المُعلِنون الأوائل فيُعثر عليهم في عين المكان: صنف واحد، منطقة واحدة، ومهنيون يُقنَعون واحداً واحداً قبل الافتتاح." },
        { q: "ما الفرق مع السوق الإلكترونية؟", a: "موقع الإعلانات يربط بين الطرفين: البيع يُبرم بينهما. والسوق الإلكترونية تقبض، تأخذ عمولة، وتتابع التسليم. الأول أبسط إطلاقاً ويمكن أن يتطور نحو الثانية." },
      ] },
    ],
    pullQuotes: [
      { after: 3, text: "الموقع يعرض 230 إعلاناً بدل 920: رقم أصغر، وموقع أحسن." },
      { after: 4, text: "استمارة الإيداع هي محرّك البحث." },
    ],
    cta: { eyebrow: "قولوا لنا أي صنف، أي منطقة، ومن سيكون مُعلِنوكم الأوائل: نبدأ بأسبوع تأطير", title: "إعلانات ميتة، مكرَّرات، فرص مغرية أكثر من اللازم، فلاتر لا تجد شيئاً، أو فكرة موقع إعلانات متخصص تريدون إطلاقه في الجزائر من فرنسا", body: "Symloop تبني ما يجعل موقع الإعلانات يصمد: الإيداع لكل صنف، المراجعة، البحث، دورة الحياة، والإبراز. صِفوا لنا صنفكم، الخانات التي يُبحث بها فيه، وما تفعله المواقع الموجودة بشكل سيئ." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.marketplace, kind: '2027', name: 'إنشاء سوق إلكترونية في الجزائر: العمولة، الدفع، والنموذج' },
      { href: L.jumia, kind: '2027', name: 'ما بعد جوميا: سوق متخصصة، لوجستيك، ودفع' },
      { href: L.otp, kind: '2027', name: 'الدخول بالرمز: الرسائل القصيرة، واتساب، الكلفة، والاحتيال' },
      { href: L.startup, kind: '2027', name: 'إطلاق شركة ناشئة في الجزائر من فرنسا' },
    ] },
  },
};

const KEYWORDS = "comment créer un site d'annonces, créer un site d'annonces en algérie 2027, site d'annonces algérie, petites annonces algérie, site d'annonces immobilières algérie, créer un site de petites annonces, fausses annonces, modération des annonces, mise en avant d'annonce, how to build a classifieds site, classified ads platform algeria, listing moderation, fake listings, faceted search, featured listings, كيف يُنشأ موقع إعلانات, موقع إعلانات الجزائر, الإعلانات المبوَّبة, الإعلانات الزائفة, البحث بالفلاتر, Symloop";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
