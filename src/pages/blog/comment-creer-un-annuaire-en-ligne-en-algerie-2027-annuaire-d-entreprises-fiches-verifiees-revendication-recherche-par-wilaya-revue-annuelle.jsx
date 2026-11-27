import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/comment-creer-un-annuaire-en-ligne-en-algerie-2027-annuaire-d-entreprises-fiches-verifiees-revendication-recherche-par-wilaya-revue-annuelle.mjs';

const SLUG = 'comment-creer-un-annuaire-en-ligne-en-algerie-2027-annuaire-d-entreprises-fiches-verifiees-revendication-recherche-par-wilaya-revue-annuelle';
const FIGURES = ['roue', 'parcours', 'page', 'situations', 'calendrier', 'couches'];
const DATE = '2026-11-23';
const I = (x) => '⁦' + x + '⁩';

const L = {
  intranet: '/blog/comment-creer-un-intranet-d-entreprise-en-algerie-2027-notes-de-service-documents-annuaire-demandes-internes-recherche-accuse-de-lecture/',
  reprise: '/blog/reprendre-ses-donnees-excel-ancien-logiciel-nouvelle-application-algerie-2027-migration-nettoyage-doublons-repetition-bascule-sans-perte/',
  otp: '/blog/connexion-otp-sms-whatsapp-application-algerie-2027-numero-de-telephone-code-cout-par-envoi-fraude-passkeys/',
  roles: '/blog/roles-droits-journal-d-audit-application-algerie-2027-qui-voit-quoi-qui-modifie-quoi-qui-a-change-ce-prix-acces-par-agence-approbations/',
  bilingue: '/blog/application-en-arabe-et-en-francais-algerie-2027-droite-a-gauche-chiffres-dates-polices-traductions-darija-ce-qu-on-construit/',
  recherche: '/blog/recherche-dans-une-application-algerie-2027-catalogue-arabe-francais-darija-fautes-synonymes-classement-zero-resultat/',
  annonces: '/blog/comment-creer-un-site-d-annonces-en-algerie-2027-depot-d-annonce-moderation-fausses-annonces-recherche-mise-en-avant-comptes-pro/',
  relation: '/blog/comment-creer-une-plateforme-de-mise-en-relation-algerie-2027-application-artisans-services-a-domicile-densite-verification-paiement-especes/',
  paiement: '/blog/integrer-paiement-en-ligne-cib-edahabia-application-algerie-2027-page-de-paiement-confirmation-webhook-etats-de-commande-rapprochement-remboursement/',
};

const CONTENT = {
  fr: {
    kind: 'Annuaire en ligne · Algérie · 2027', title: "Comment créer un annuaire en ligne en Algérie (2027) : notre annuaire est un PDF de trois cents pages, des numéros qui ne répondent plus, la même société inscrite trois fois, introuvable sur Google ; une page par entreprise, revendication, vérification datée, revue annuelle, et ce qu'on met en place",
    dek: "« Notre annuaire des adhérents est un PDF de trois cents pages. Depuis trois ans, nous ajoutons des entreprises et nous n'en revérifions aucune. On nous signale des numéros qui ne répondent plus, des sociétés fermées, la même entreprise inscrite trois fois. On ne peut chercher ni par activité ni par wilaya, personne ne trouve une fiche sur Google, et quand une entreprise appelle pour corriger la sienne, la correction attend la prochaine édition. Comment créer un annuaire en ligne ? » Une page par entreprise, que l'entreprise corrige elle-même, une date de vérification sur chaque fiche, et une revue annuelle, un douzième des fiches chaque mois.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Annuaire en ligne', 'Annuaire d’entreprises', 'Revendication et vérification des fiches', 'Recherche par activité et par wilaya', 'Données structurées', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Un annuaire en ligne se construit en six temps : importer les listes existantes, fusionner les doublons, inviter chaque entreprise, la laisser revendiquer et corriger sa fiche, publier une page par entreprise avec sa date de vérification, puis revérifier chaque fiche une fois par an. Le plus difficile n'est pas de le mettre en ligne : c'est qu'il reste juste. Dans l'exemple de cette page, cent fiches tirées au hasard dans un annuaire de trois ans sont appelées : 48 sont encore justes. Cela correspond à 2 % de fiches qui changent chaque mois. Avec une revue annuelle, 128 fiches par mois, 90 % restent justes en permanence.",
      "Cette page s'adresse aux chambres, fédérations, associations et ordres professionnels, aux portails sectoriels, aux médias, et aux fondatrices et fondateurs, en Algérie ou dans la diaspora, qui veulent lancer l'annuaire d'un métier, d'une filière ou d'une région. Les définitions viennent de sources publiques : annuaire d'entreprises, pages jaunes, recherche à facettes, données structurées, vocabulaire schema.org, plan de site, référencement payant. L'annuaire de 1 800 lignes, ses cent appels, ses taux et ses volumes sont un exemple construit. La page ne traite pas des règles juridiques sur les données personnelles ni sur la publication d'informations d'entreprises, à voir avec votre conseil juridique, et ne cite aucun prix.",
    ],
    sections: [
      { heading: "Cent appels, et ce qu'ils disent de votre annuaire", body: [
        "La figure montre ce que devient un annuaire selon qu'on revérifie ses fiches ou non.",
      ], visual: 'roue', after: [
        "**Un annuaire.** Un annuaire d'entreprises est un site ou un imprimé qui classe des entreprises par catégories ; les pages jaunes en sont un exemple connu : des annuaires téléphoniques d'entreprises, classés par catégorie plutôt que par ordre alphabétique. **Cent appels.** Avant tout projet, tirez cent fiches au hasard et appelez-les. Dans l'exemple, 48 sont justes. Sur les 52 autres : 22 numéros hors service ou changés, 14 adresses changées, 9 activités ou noms modifiés, 7 entreprises fermées. Cent appels donnent un ordre de grandeur, à dix points près : assez pour décider. **Public, pas interne.** Il s'agit ici d'un annuaire public d'entreprises ; l'annuaire du personnel d'une société relève de [l'intranet](" + L.intranet + ").",
        "**Le calcul.** Si 48 fiches sur 100 sont encore justes après trente-six mois, c'est qu'environ 2 % des fiches changent chaque mois : 0,98 multiplié trente-six fois par lui-même donne 0,48. À ce rythme, 22 % des fiches sont fausses après un an, 38 % après deux, 52 % après trois. C'est une simplification : le rythme n'est pas le même pour tous les métiers. **La roue.** Chaque mois, un douzième des fiches est revérifié. Celles du mois sont justes ; celles d'il y a onze mois le sont à 80 %. En moyenne, 90 %. Tous les six mois, 95 %, pour le double de travail. Un annuaire sans aucune fiche fausse n'existe pas : c'est pourquoi chaque fiche affiche sa date.",
      ] },
      { heading: "Une fiche, en six temps", body: [
        "La figure suit une fiche, de la ligne du PDF à sa revue annuelle.",
      ], visual: 'parcours', after: [
        "**Import et doublons.** Les 300 pages et les tableurs deviennent 1 800 lignes, voir [reprendre ses données](" + L.reprise + "). La même société y figure sous trois écritures : la plateforme rapproche les lignes par téléphone, par nom normalisé et par wilaya, propose la fusion, et une personne confirme. Dans l'exemple, 140 doublons sont fusionnés : il reste 1 660 entreprises. **L'invitation.** Chaque entreprise reçoit un message avec un lien vers sa fiche et un code.",
        "**La revendication.** Le code part vers le téléphone ou l'adresse déjà inscrits sur la fiche, jamais vers un contact fourni par la personne qui réclame : sinon, n'importe qui prendrait la fiche d'un concurrent. Quand le numéro inscrit ne répond plus, l'équipe vérifie par un rappel ou par un document. Le principe est celui de [la connexion par code](" + L.otp + "). **Une personne vérifie.** Le nom, le téléphone et l'activité passent par une vérification avant publication ; la description et les photos se publient directement. Chaque changement est tracé, voir [rôles, droits et journal](" + L.roles + ").",
      ] },
      { heading: "Une fiche, lue deux fois", body: [
        "La figure montre la même fiche, telle qu'une personne la lit et telle qu'une machine la lit.",
      ], visual: 'page', after: [
        "**Une page par entreprise.** Dans un PDF, une entreprise est une ligne dans un document de trois cents pages. En ligne, elle a sa page, à une adresse stable, inscrite dans le plan du site : le protocole Sitemap sert à fournir aux moteurs de recherche des détails sur vos pages. **Les données structurées.** Google les décrit comme un format standardisé pour fournir des informations sur une page et en classer le contenu, et dit s'en servir pour comprendre le contenu de la page. Le vocabulaire public schema.org prévoit un type Organization, avec le nom, la description, l'adresse, le téléphone, la date de création, la zone servie et l'adresse web, et un type LocalBusiness pour un établissement physique.",
        "**Ce que cela ne garantit pas.** Une fiche bien structurée peut être comprise ; rien ne garantit qu'un moteur l'affichera ni qu'un assistant la citera. Ce qui dépend de vous : des fiches justes, datées, une par adresse. **La date.** « Fiche vérifiée le 12 novembre 2026, par l'entreprise » : le lecteur sait de quand date ce qu'il lit, et qui l'a vérifié. **Deux écritures.** En Algérie, une même entreprise s'écrit en arabe et en caractères latins : la fiche porte les deux, et se retrouve dans les deux, voir [une application en arabe et en français](" + L.bilingue + ").",
      ] },
      { heading: "Cinq situations, et ce que la plateforme en fait", body: [
        "La figure reprend cinq situations, avec un PDF ou un tableur puis avec la plateforme.",
      ], visual: 'situations', after: [
        "**Chercher.** La recherche à facettes ajoute à la recherche par mots une navigation par filtres : ici l'activité et la wilaya. Elle accepte les fautes de frappe et les deux langues, voir [la recherche dans une application](" + L.recherche + "). **Ce qui manque.** Les recherches sans résultat sont listées chaque semaine : par exemple, « emballage plastique à Oran, onze recherches, aucune fiche » dit quelles entreprises aller chercher. **La fermeture.** Une fiche sans réponse à une revue est marquée « non confirmée » ; sans réponse à la suivante, elle est retirée.",
        "**La mise en avant.** Un annuaire peut vendre une place en tête, à condition de le dire : aux États-Unis, la Commission fédérale du commerce a recommandé aux moteurs de recherche de signaler clairement les placements payants. Ici, la fiche mise en avant porte une mention, et le classement des autres fiches ne change pas. **Annuaire, annonces, mise en relation.** Un annuaire dit qui existe et comment le joindre. [Un site d'annonces](" + L.annonces + ") publie des offres qui expirent. [Une plateforme de mise en relation](" + L.relation + ") organise une prestation, du besoin au paiement. On peut commencer par le premier et ajouter le reste plus tard.",
      ] },
      { heading: "Douze semaines, en commençant par cent appels", body: [
        "Douze semaines dans l'exemple, des cent appels à la première revue.",
      ], visual: 'calendrier', after: [
        "**Le modèle de fiche.** Peu de champs, tous utiles : le nom, l'activité principale, la wilaya, le téléphone, l'année de création, la zone servie. Une liste d'activités courte, où chaque entreprise n'en choisit qu'une principale. Et une décision par champ : public ou non. Le nom du gérant ou un numéro personnel sont des données de personnes : ce qui se publie se décide avec votre conseil juridique. **La campagne.** Sur 1 660 entreprises invitées, 620 revendiquent leur fiche, un peu plus d'une sur trois. L'équipe en vérifie 540 autres au téléphone, une centaine par semaine. 120 sont fermées et retirées.",
        "**L'ouverture.** 1 540 fiches sont publiées : 1 160 vérifiées, trois sur quatre, et 380 reprises de l'ancien annuaire, affichées avec la mention « non vérifiée » et classées après les autres. La plateforme dit ce qu'elle ne sait pas. **La charge.** Chaque mois, 128 fiches reviennent. 52 appartiennent à des entreprises qui ont revendiqué leur fiche : un message, une confirmation. Restent 76 appels ; à cinq minutes l'appel, hypothèse de l'exemple, un peu plus de six heures par mois. Les entreprises qui ne répondent pas au message rejoignent la liste d'appels.",
      ] },
      { heading: "Ce qu'il y a dans la plateforme", body: [
        "La figure empile cinq couches ; la troisième, la vérification, est celle qui sépare un annuaire d'une liste.",
      ], visual: 'couches', after: [
        "**Fiches et recherche.** Une page par entreprise, des champs précis, des données structurées, un plan de site ; une recherche par mots, par activité et par wilaya, dans les deux langues, avec la liste des recherches sans résultat. **Vérification et comptes.** La revendication par code, le contrôle par une personne, la date affichée, la roue de revue ; un compte par entreprise pour gérer sa fiche, un espace d'équipe pour vérifier et fusionner, un journal de chaque changement.",
        "**Les revenus.** Notre conseil : la fiche de base reste gratuite, car c'est le nombre de fiches justes qui fait la valeur de l'annuaire. Peuvent se vendre : une fiche enrichie, une mise en avant signalée, les demandes de contact, les statistiques de consultation ; si cela se règle en ligne, voir [le paiement en ligne](" + L.paiement + "). **Prêt à l'emploi ou sur mesure.** Des extensions d'annuaire existent pour les systèmes de gestion de contenu, certaines avec import et revendication ; elles conviennent quand votre modèle de fiche et votre circuit entrent dans le leur. Le sur-mesure se justifie quand il faut dédoublonner des milliers de lignes, revérifier les fiches par roulement avec votre équipe, chercher en arabe et en français, relier l'annuaire à vos adhésions ou à vos outils, et garder les données chez vous.",
      ], list: [
        "**Ce que vous recevez** : une page par entreprise avec ses données structurées ; l'import et la fusion des doublons ; la revendication par code ; la vérification avant publication ; la date de vérification sur chaque fiche ; la recherche par activité et par wilaya, en arabe et en français ; la roue de revue annuelle ; la liste des recherches sans résultat.",
        "**Ce que l'organisation évite** : le PDF refait tous les deux ans, la fiche fausse que personne ne peut corriger, la même société en triple, l'entreprise fermée qui reste, la fiche prise par un tiers, la place en tête vendue sans le dire.",
        "**Ce qui est mesuré** : part de fiches vérifiées depuis moins de douze mois ; fiches revendiquées ; fiches sans réponse à la revue ; recherches sans résultat par activité et par wilaya ; consultations et demandes de contact par fiche ; doublons fusionnés dans le mois.",
        "**Ce que fait Symloop** : le modèle de fiche et les catégories, l'import et le dédoublonnage, les pages et leurs données structurées, la recherche, la revendication, la roue de vérification, l'espace d'équipe, les options payantes, en arabe et en français. Les appels de vérification restent ceux de votre équipe.",
      ], faq: [
        { q: "Comment créer un annuaire en ligne ?", a: "En six temps : importer les listes existantes, fusionner les doublons, inviter chaque entreprise, la laisser revendiquer et corriger sa fiche, publier une page par entreprise avec sa date de vérification, puis revérifier chaque fiche une fois par an." },
        { q: "Peut-on créer un annuaire sur Excel ou en PDF ?", a: "Pour une liste interne de quelques dizaines de lignes, oui. Pour un annuaire public, il manque la recherche, la correction par l'entreprise, la date de vérification, et une page par fiche que les moteurs peuvent lire." },
        { q: "Comment créer un annuaire d'entreprises à partir de nos fichiers ?", a: "Les fichiers sont importés, rapprochés par téléphone, nom et wilaya, et les doublons proposés à la fusion ; une personne confirme. Dans l'exemple, 1 800 lignes deviennent 1 660 entreprises." },
        { q: "Comment garder un annuaire à jour ?", a: "Par une revue tournante : un douzième des fiches chaque mois. L'entreprise qui a revendiqué sa fiche la confirme d'un message ; les autres sont appelées. Chaque fiche affiche la date de sa dernière vérification." },
        { q: "Comment une entreprise revendique-t-elle sa fiche ?", a: "Elle reçoit un code sur le téléphone ou l'adresse déjà inscrits sur la fiche. Si ce contact n'est plus bon, l'équipe vérifie par un rappel ou par un document avant d'ouvrir l'accès." },
        { q: "Combien de fiches fausses y a-t-il dans notre annuaire ?", a: "Appelez cent fiches tirées au hasard : vous aurez la réponse à dix points près. Dans l'exemple, 52 sur 100 après trois ans sans revérification." },
        { q: "Comment faire apparaître les fiches sur Google ?", a: "Une page par entreprise, à une adresse stable, dans le plan du site, avec des données structurées. Cela permet à un moteur de comprendre la fiche ; cela ne garantit pas qu'il l'affichera." },
        { q: "Comment un annuaire gagne-t-il de l'argent ?", a: "Par une fiche enrichie, une mise en avant signalée comme telle, les demandes de contact ou les statistiques de la fiche. La fiche de base gagne à rester gratuite : c'est le nombre de fiches justes qui fait la valeur." },
        { q: "Quelle différence entre un annuaire, un site d'annonces et une plateforme de mise en relation ?", a: "L'annuaire dit qui existe et comment le joindre. Le site d'annonces publie des offres qui expirent. La plateforme de mise en relation organise la prestation, du besoin au paiement." },
        { q: "Par quoi commencer ?", a: "Par cent appels sur votre annuaire actuel, puis par le modèle de fiche : quels champs, quelles activités, et ce qui est public." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "Un annuaire ne meurt pas d'un coup : il perd deux fiches sur cent chaque mois, sans que personne le voie." },
      { after: 2, text: "Une fiche sans date demande au lecteur de vous croire sur parole." },
    ],
    cta: { eyebrow: "Dites-nous combien de fiches compte votre annuaire, sous quelle forme il existe, et de quand date sa dernière vérification : nous commençons par cent appels", title: "Annuaire en PDF, fiches fausses, doublons, entreprises fermées qui restent, recherche impossible, introuvable sur Google, ou annuaire d'un métier que vous voulez lancer en Algérie depuis la France", body: "Symloop construit la plateforme d'annuaire qui correspond à votre organisation : une page par entreprise, import et dédoublonnage, revendication par code, vérification datée, recherche par activité et par wilaya, revue annuelle. Décrivez-nous vos listes, votre équipe et ce que vous attendez de l'annuaire." },
    related: { label: 'À lire aussi', items: [
      { href: L.annonces, kind: '2027', name: 'Créer un site d’annonces : dépôt, modération, fausses annonces' },
      { href: L.relation, kind: '2027', name: 'Plateforme de mise en relation : densité, vérification, paiement' },
      { href: L.recherche, kind: '2027', name: 'Recherche dans une application : arabe, français, fautes, zéro résultat' },
      { href: L.reprise, kind: '2027', name: 'Reprendre ses données : migration, nettoyage, doublons' },
    ] },
  },
  en: {
    kind: 'Online directory · Algeria · 2027', title: "How to create an online directory in Algeria (2027): our directory is a three-hundred-page PDF, numbers that no longer answer, the same company listed three times, nowhere on Google; one page per company, claiming, dated verification, yearly review, and what we put in place",
    dek: "“Our members' directory is a three-hundred-page PDF. For three years we have been adding companies and re-verifying none. People report numbers that no longer answer, closed companies, the same business listed three times. You cannot search by activity or by wilaya, nobody finds an entry on Google, and when a company calls to correct its entry, the correction waits for the next edition. How do we create an online directory?” One page per company, which the company corrects itself, a verification date on every entry, and a yearly review, one twelfth of the entries every month.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Online directory', 'Business directory', 'Claiming and verifying entries', 'Search by activity and by wilaya', 'Structured data', 'Algeria 2027'],
    intro: [
      "**Short answer.** An online directory is built in six steps: import the existing lists, merge the duplicates, invite each company, let it claim and correct its entry, publish one page per company with its verification date, then re-verify every entry once a year. The hard part is not putting it online: it is keeping it correct. In this page's example, one hundred entries drawn at random from a three-year-old directory are called: 48 are still correct. That corresponds to 2% of entries changing every month. With a yearly review, 128 entries a month, 90% stay correct at all times.",
      "This page is for chambers, federations, professional associations and orders, sector portals, media, and founders, in Algeria or in the diaspora, who want to launch the directory of a trade, an industry or a region. The definitions come from public sources: business directory, yellow pages, faceted search, structured data, the schema.org vocabulary, sitemap, paid inclusion. The 1,800-line directory, its hundred calls, its rates and its volumes are a constructed example. The page does not cover the legal rules on personal data or on publishing company information, to be reviewed with your legal counsel, and quotes no price.",
    ],
    sections: [
      { heading: "One hundred calls, and what they say about your directory", body: [
        "The figure shows what becomes of a directory depending on whether its entries are re-verified or not.",
      ], visual: 'roue', after: [
        "**A directory.** A business directory is a website or a printed listing that sorts businesses into categories; the yellow pages are a well-known example: telephone directories of businesses, organised by category rather than alphabetically. **One hundred calls.** Before any project, draw one hundred entries at random and call them. In the example, 48 are correct. Of the other 52: 22 numbers out of service or changed, 14 addresses changed, 9 activities or names modified, 7 companies closed. One hundred calls give an order of magnitude, to within ten points: enough to decide. **Public, not internal.** This page is about a public directory of companies; a company's staff directory belongs in [an intranet](" + L.intranet + ").",
        "**The arithmetic.** If 48 entries in 100 are still correct after thirty-six months, about 2% of entries change every month: 0.98 multiplied by itself thirty-six times gives 0.48. At that pace, 22% of entries are wrong after one year, 38% after two, 52% after three. It is a simplification: the pace is not the same for every trade. **The wheel.** Each month, one twelfth of the entries is re-verified. This month's are correct; those from eleven months ago are 80% correct. On average, 90%. Every six months, 95%, for twice the work. A directory with no wrong entry does not exist: that is why each entry shows its date.",
      ] },
      { heading: "An entry, in six steps", body: [
        "The figure follows an entry, from the line in the PDF to its yearly review.",
      ], visual: 'parcours', after: [
        "**Import and duplicates.** The 300 pages and the spreadsheets become 1,800 lines, see [taking over your data](" + L.reprise + "). The same company appears under three spellings: the platform matches lines by phone, by normalised name and by wilaya, suggests the merge, and a person confirms. In the example, 140 duplicates are merged: 1,660 companies remain. **The invitation.** Each company receives a message with a link to its entry and a code.",
        "**Claiming.** The code goes to the phone or the address already on the entry, never to a contact supplied by the person claiming: otherwise anyone could take a competitor's entry. When the number on file no longer answers, the team verifies by a call back or by a document. The principle is that of [sign-in by code](" + L.otp + "). **A person verifies.** The name, the phone and the activity go through a check before publication; the description and the photos are published directly. Every change is recorded, see [roles, rights and audit log](" + L.roles + ").",
      ] },
      { heading: "One entry, read twice", body: [
        "The figure shows the same entry, as a person reads it and as a machine reads it.",
      ], visual: 'page', after: [
        "**One page per company.** In a PDF, a company is a line in a three-hundred-page document. Online, it has its page, at a stable address, listed in the site map: the Sitemap protocol is there to give search engines details about your pages. **Structured data.** Google describes it as a standardised format for providing information about a page and classifying its content, and says it uses it to understand the content of the page. The public schema.org vocabulary provides an Organization type, with the name, the description, the address, the telephone, the founding date, the area served and the web address, and a LocalBusiness type for a physical establishment.",
        "**What this does not guarantee.** A well-structured entry can be understood; nothing guarantees that a search engine will display it or that an assistant will cite it. What depends on you: entries that are correct, dated, one per address. **The date.** “Entry verified on 12 November 2026, by the company”: the reader knows how old the information is, and who verified it. **Two scripts.** In Algeria, the same company is written in Arabic and in Latin characters: the entry carries both and can be found in both, see [an application in Arabic and French](" + L.bilingue + ").",
      ] },
      { heading: "Five situations, and what the platform does with them", body: [
        "The figure takes five situations, with a PDF or a spreadsheet and then with the platform.",
      ], visual: 'situations', after: [
        "**Searching.** Faceted search adds navigation by filters to search by words: here, the activity and the wilaya. It accepts typing errors and both languages, see [search in an application](" + L.recherche + "). **What is missing.** Searches with no result are listed every week: for example, “plastic packaging in Oran, eleven searches, no entry” says which companies to go and find. **Closure.** An entry with no answer to one review is marked “not confirmed”; with no answer to the next one, it is removed.",
        "**Promotion.** A directory may sell a place at the top, provided it says so: in the United States, the Federal Trade Commission has advised search engines to clearly mark paid placements. Here, a promoted entry carries a label, and the ranking of the other entries does not change. **Directory, classifieds, matching.** A directory says who exists and how to reach them. [A classifieds site](" + L.annonces + ") publishes offers that expire. [A matching platform](" + L.relation + ") organises a service, from the need to the payment. You can start with the first and add the rest later.",
      ] },
      { heading: "Twelve weeks, starting with one hundred calls", body: [
        "Twelve weeks in the example, from the hundred calls to the first review.",
      ], visual: 'calendrier', after: [
        "**The entry template.** Few fields, all useful: the name, the main activity, the wilaya, the phone, the founding year, the area served. A short list of activities, where each company picks one main activity. And one decision per field: public or not. A manager's name or a personal number is data about a person: what gets published is decided with your legal counsel. **The campaign.** Of 1,660 companies invited, 620 claim their entry, a little more than one in three. The team verifies another 540 by phone, about a hundred a week. 120 are closed and removed.",
        "**Opening.** 1,540 entries are published: 1,160 verified, three in four, and 380 taken from the old directory, displayed with the mention “not verified” and ranked after the others. The platform says what it does not know. **The workload.** Each month, 128 entries come up. 52 belong to companies that claimed their entry: one message, one confirmation. That leaves 76 calls; at five minutes a call, an assumption of the example, a little over six hours a month. Companies that do not answer the message join the call list.",
      ] },
      { heading: "What is inside the platform", body: [
        "The figure stacks five layers; the third, verification, is the one that separates a directory from a list.",
      ], visual: 'couches', after: [
        "**Entries and search.** One page per company, precise fields, structured data, a site map; search by words, by activity and by wilaya, in both languages, with the list of searches that returned nothing. **Verification and accounts.** Claiming by code, the check by a person, the displayed date, the review wheel; an account per company to manage its entry, a team space to verify and merge, a log of every change.",
        "**Revenue.** Our advice: the basic entry stays free, because the number of correct entries is what makes the directory valuable. What can be sold: an enriched entry, a labelled promotion, contact requests, viewing statistics; if this is paid online, see [online payment](" + L.paiement + "). **Off the shelf or custom.** Directory extensions exist for content management systems, some with import and claiming; they fit when your entry template and your process fit theirs. Custom work is justified when thousands of lines must be deduplicated, entries re-verified in rotation with your team, searched in Arabic and French, linked to your memberships or your tools, and the data kept on your side.",
      ], list: [
        "**What you receive**: one page per company with its structured data; import and merging of duplicates; claiming by code; verification before publication; the verification date on each entry; search by activity and by wilaya, in Arabic and French; the yearly review wheel; the list of searches with no result.",
        "**What the organisation avoids**: the PDF redone every two years, the wrong entry nobody can correct, the same company listed three times, the closed company that stays, the entry taken by a third party, the top place sold without saying so.",
        "**What is measured**: share of entries verified within the last twelve months; claimed entries; entries with no answer to the review; searches with no result by activity and by wilaya; views and contact requests per entry; duplicates merged in the month.",
        "**What Symloop does**: the entry template and the categories, import and deduplication, the pages and their structured data, search, claiming, the verification wheel, the team space, the paid options, in Arabic and French. The verification calls remain your team's.",
      ], faq: [
        { q: "How do you create an online directory?", a: "In six steps: import the existing lists, merge the duplicates, invite each company, let it claim and correct its entry, publish one page per company with its verification date, then re-verify every entry once a year." },
        { q: "Can a directory be kept in Excel or as a PDF?", a: "For an internal list of a few dozen lines, yes. A public directory lacks search, correction by the company, a verification date, and one page per entry that search engines can read." },
        { q: "How do we create a business directory from our files?", a: "The files are imported, matched by phone, name and wilaya, and duplicates are suggested for merging; a person confirms. In the example, 1,800 lines become 1,660 companies." },
        { q: "How do you keep a directory up to date?", a: "With a rolling review: one twelfth of the entries every month. A company that claimed its entry confirms it with one message; the others are called. Each entry shows the date of its last verification." },
        { q: "How does a company claim its entry?", a: "It receives a code on the phone or the address already on the entry. If that contact is no longer valid, the team verifies by a call back or a document before opening access." },
        { q: "How many wrong entries are there in our directory?", a: "Call one hundred entries drawn at random: you will have the answer to within ten points. In the example, 52 in 100 after three years with no re-verification." },
        { q: "How do we get the entries to appear on Google?", a: "One page per company, at a stable address, in the site map, with structured data. That lets a search engine understand the entry; it does not guarantee it will display it." },
        { q: "How does a directory make money?", a: "With an enriched entry, a promotion labelled as such, contact requests or entry statistics. The basic entry is better left free: the number of correct entries is what makes the value." },
        { q: "What is the difference between a directory, a classifieds site and a matching platform?", a: "The directory says who exists and how to reach them. The classifieds site publishes offers that expire. The matching platform organises the service, from the need to the payment." },
        { q: "Where do we start?", a: "With one hundred calls on your current directory, then with the entry template: which fields, which activities, and what is public." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "A directory does not die all at once: it loses two entries in a hundred every month, and nobody sees it." },
      { after: 2, text: "An entry with no date asks the reader to take your word for it." },
    ],
    cta: { eyebrow: "Tell us how many entries your directory has, in what form it exists, and when it was last verified: we start with one hundred calls", title: "A directory in PDF, wrong entries, duplicates, closed companies that stay, no search, nowhere on Google, or the directory of a trade you want to launch in Algeria from France", body: "Symloop builds the directory platform that fits your organisation: one page per company, import and deduplication, claiming by code, dated verification, search by activity and by wilaya, yearly review. Describe your lists, your team and what you expect from the directory." },
    related: { label: 'Also read', items: [
      { href: L.annonces, kind: '2027', name: 'Creating a classifieds site: posting, moderation, fake listings' },
      { href: L.relation, kind: '2027', name: 'Matching platform: density, verification, payment' },
      { href: L.recherche, kind: '2027', name: 'Search in an application: Arabic, French, typos, zero results' },
      { href: L.reprise, kind: '2027', name: 'Taking over your data: migration, cleaning, duplicates' },
    ] },
  },
  ar: {
    kind: 'دليل على الإنترنت · الجزائر · 2027', title: "كيف يُنشأ دليل على الإنترنت في الجزائر (2027): دليلنا ملف من ثلاثمئة صفحة، أرقام لا تجيب، الشركة نفسها مسجَّلة ثلاث مرات، ولا أحد يجده في محركات البحث؛ صفحة لكل مؤسسة، مطالبة بالبطاقة، تحقق مؤرَّخ، مراجعة سنوية، وما نضعه",
    dek: "«دليل منخرطينا ملف من ثلاثمئة صفحة. منذ ثلاث سنوات نضيف مؤسسات ولا نعيد التحقق من أي واحدة. يبلّغوننا عن أرقام لا تجيب، شركات أغلقت، والمؤسسة نفسها مسجَّلة ثلاث مرات. لا يمكن البحث لا حسب النشاط ولا حسب الولاية، لا أحد يجد بطاقة في محركات البحث، وحين تتصل مؤسسة لتصحيح بطاقتها، ينتظر التصحيح الطبعة القادمة. كيف ننشئ دليلاً على الإنترنت؟» صفحة لكل مؤسسة، تصحّحها المؤسسة بنفسها، تاريخ تحقق على كل بطاقة، ومراجعة سنوية، جزء من اثني عشر من البطاقات كل شهر.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['دليل على الإنترنت', 'دليل المؤسسات', 'المطالبة بالبطاقات والتحقق منها', 'البحث حسب النشاط والولاية', 'البيانات المنظَّمة', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** الدليل على الإنترنت يُبنى في ست مراحل: استيراد القوائم الموجودة، دمج التكرارات، دعوة كل مؤسسة، تركها تطالب ببطاقتها وتصحّحها، نشر صفحة لكل مؤسسة مع تاريخ التحقق منها، ثم إعادة التحقق من كل بطاقة مرة في السنة. الأصعب ليس وضعه على الإنترنت: بل أن يبقى صحيحاً. في مثال هذه الصفحة، يُتَّصل بمئة بطاقة مسحوبة عشوائياً من دليل عمره ثلاث سنوات: 48 ما زالت صحيحة. وهذا يوافق 2 بالمئة من البطاقات تتغيّر كل شهر. ومع مراجعة سنوية، 128 بطاقة في الشهر، تبقى 90 بالمئة صحيحة على الدوام.",
      "هذه الصفحة موجّهة إلى الغرف، الاتحادات، الجمعيات والهيئات المهنية، البوابات القطاعية، وسائل الإعلام، والمؤسِّسات والمؤسِّسين، في الجزائر أو في الجالية، ممن يريدون إطلاق دليل مهنة، شعبة، أو جهة. التعريفات من مصادر عمومية: دليل المؤسسات، الصفحات الصفراء، البحث بالتصفية، البيانات المنظَّمة، مفردات " + I('schema.org') + "، خريطة الموقع، والإدراج المدفوع. والدليل من " + I('1 800') + " سطر، اتصالاته المئة، نسبه، وأحجامه مثال مركَّب. والصفحة لا تتناول القواعد القانونية الخاصة بالمعطيات الشخصية ولا بنشر معلومات المؤسسات، وتُراجَع مع مستشاركم القانوني، ولا تذكر أي سعر.",
    ],
    sections: [
      { heading: "مئة اتصال، وما تقوله عن دليلكم", body: [
        "الشكل يبيّن ما يصير إليه الدليل حسب ما إذا كانت بطاقاته يُعاد التحقق منها أم لا.",
      ], visual: 'roue', after: [
        "**الدليل.** دليل المؤسسات موقع أو مطبوع يصنّف المؤسسات حسب الأصناف؛ والصفحات الصفراء مثال معروف: أدلة هاتفية للمؤسسات، مرتَّبة حسب الصنف لا حسب الترتيب الأبجدي. **مئة اتصال.** قبل أي مشروع، اسحبوا مئة بطاقة عشوائياً واتصلوا بها. في المثال، 48 صحيحة. ومن الاثنتين والخمسين الأخرى: 22 رقماً خارج الخدمة أو تغيّر، 14 عنواناً تغيّر، 9 أنشطة أو أسماء عُدِّلت، و7 مؤسسات أغلقت. مئة اتصال تعطي ترتيب حجم، بفارق عشر نقاط: يكفي للقرار. **عمومي، لا داخلي.** الحديث هنا عن دليل عمومي للمؤسسات؛ أما دليل عمال شركة فمكانه [الشبكة الداخلية](" + L.intranet + ").",
        "**الحساب.** إذا كانت 48 بطاقة من 100 ما زالت صحيحة بعد ستة وثلاثين شهراً، فمعناه أن نحو 2 بالمئة من البطاقات تتغيّر كل شهر: " + I('0,98') + " مضروبة في نفسها ستاً وثلاثين مرة تعطي " + I('0,48') + ". وبهذه الوتيرة، 22 بالمئة من البطاقات خاطئة بعد سنة، 38 بعد سنتين، و52 بعد ثلاث. وهذا تبسيط: الوتيرة ليست واحدة في كل المهن. **العجلة.** كل شهر، يُعاد التحقق من جزء من اثني عشر من البطاقات. بطاقات هذا الشهر صحيحة؛ وبطاقات ما قبل أحد عشر شهراً صحيحة بنسبة 80 بالمئة. وفي المتوسط، 90 بالمئة. وكل ستة أشهر، 95 بالمئة، بضعف العمل. ودليل دون أي بطاقة خاطئة لا يوجد: لهذا تُظهر كل بطاقة تاريخها.",
      ] },
      { heading: "بطاقة، في ست مراحل", body: [
        "الشكل يتابع بطاقة، من السطر في الملف إلى مراجعتها السنوية.",
      ], visual: 'parcours', after: [
        "**الاستيراد والتكرار.** الصفحات الثلاثمئة والجداول تصير " + I('1 800') + " سطر، انظر [استرجاع البيانات](" + L.reprise + "). والشركة نفسها مذكورة بثلاث كتابات: المنصة تقارب السطور بالهاتف، بالاسم الموحَّد، وبالولاية، تقترح الدمج، وشخص يؤكّد. في المثال، يُدمَج 140 تكراراً: تبقى " + I('1 660') + " مؤسسة. **الدعوة.** كل مؤسسة تتلقى رسالة فيها رابط نحو بطاقتها ورمز.",
        "**المطالبة.** الرمز يذهب إلى الهاتف أو العنوان المسجَّل في البطاقة، لا إلى جهة اتصال يقدّمها من يطالب: وإلا لأخذ أي شخص بطاقة منافسه. وحين لا يجيب الرقم المسجَّل، يتحقق الفريق بمعاودة الاتصال أو بوثيقة. والمبدأ هو مبدأ [الدخول برمز](" + L.otp + "). **شخص يتحقق.** الاسم، الهاتف، والنشاط تمر بتحقق قبل النشر؛ والوصف والصور تُنشَر مباشرة. وكل تغيير مسجَّل، انظر [الأدوار، الصلاحيات، والسجل](" + L.roles + ").",
      ] },
      { heading: "بطاقة واحدة، مقروءة مرتين", body: [
        "الشكل يبيّن البطاقة نفسها، كما يقرؤها شخص وكما تقرؤها آلة.",
      ], visual: 'page', after: [
        "**صفحة لكل مؤسسة.** في ملف " + I('PDF') + "، المؤسسة سطر في وثيقة من ثلاثمئة صفحة. وعلى الإنترنت، لها صفحتها، بعنوان ثابت، مسجَّلة في خريطة الموقع: بروتوكول " + I('Sitemap') + " غرضه تزويد محركات البحث بتفاصيل عن صفحاتكم. **البيانات المنظَّمة.** " + I('Google') + " تصفها بأنها صيغة معيارية لتقديم معلومات عن صفحة وتصنيف محتواها، وتقول إنها تستعملها لفهم محتوى الصفحة. والمفردات العمومية " + I('schema.org') + " تنص على نوع " + I('Organization') + "، فيه الاسم، الوصف، العنوان، الهاتف، تاريخ التأسيس، منطقة الخدمة، وعنوان الموقع، وعلى نوع " + I('LocalBusiness') + " لمحل له مكان.",
        "**ما لا يضمنه هذا.** البطاقة المنظَّمة جيداً يمكن فهمها؛ ولا شيء يضمن أن يعرضها محرك بحث ولا أن يذكرها مساعد ذكي. وما يتوقف عليكم: بطاقات صحيحة، مؤرَّخة، واحدة لكل عنوان. **التاريخ.** «بطاقة مُتحقَّق منها يوم 12 نوفمبر 2026، من المؤسسة»: القارئ يعرف عمر ما يقرؤه، ومن تحقق منه. **كتابتان.** في الجزائر، المؤسسة نفسها تُكتَب بالعربية وبالحروف اللاتينية: البطاقة تحمل الاثنتين، وتوجد بالاثنتين، انظر [تطبيق بالعربية والفرنسية](" + L.bilingue + ").",
      ] },
      { heading: "خمس حالات، وما تفعله المنصة بها", body: [
        "الشكل يأخذ خمس حالات، مع ملف أو جدول ثم مع المنصة.",
      ], visual: 'situations', after: [
        "**البحث.** البحث بالتصفية يضيف إلى البحث بالكلمات تنقلاً بالمصافي: هنا النشاط والولاية. ويقبل أخطاء الكتابة واللغتين، انظر [البحث في تطبيق](" + L.recherche + "). **ما ينقص.** عمليات البحث دون نتيجة تُعرَض كل أسبوع: مثلاً «تغليف بلاستيكي في وهران، أحد عشر بحثاً، ولا بطاقة» تقول أي مؤسسات يجب البحث عنها. **الإغلاق.** البطاقة دون جواب على مراجعة تُعلَّم «غير مؤكَّدة»؛ ودون جواب على التالية، تُسحَب.",
        "**الإبراز.** يمكن لدليل أن يبيع مكاناً في المقدمة، بشرط أن يقول ذلك: في الولايات المتحدة، أوصت لجنة التجارة الفيدرالية محركات البحث بأن تشير بوضوح إلى المواضع المدفوعة. وهنا، البطاقة المبرزة تحمل إشارة، وترتيب البطاقات الأخرى لا يتغيّر. **دليل، إعلانات، وربط.** الدليل يقول من يوجد وكيف يُتَّصل به. و[موقع الإعلانات](" + L.annonces + ") ينشر عروضاً تنتهي صلاحيتها. و[منصة الربط](" + L.relation + ") تنظّم خدمة، من الحاجة إلى الدفع. ويمكن البدء بالأول وإضافة الباقي لاحقاً.",
      ] },
      { heading: "اثنا عشر أسبوعاً، بدءاً بمئة اتصال", body: [
        "اثنا عشر أسبوعاً في المثال، من الاتصالات المئة إلى المراجعة الأولى.",
      ], visual: 'calendrier', after: [
        "**نموذج البطاقة.** حقول قليلة، كلها مفيدة: الاسم، النشاط الرئيسي، الولاية، الهاتف، سنة التأسيس، ومنطقة الخدمة. وقائمة أنشطة قصيرة، تختار منها كل مؤسسة نشاطاً رئيسياً واحداً. وقرار لكل حقل: عمومي أم لا. اسم المسيّر أو رقم شخصي معطيات تخص أشخاصاً: ما يُنشَر يُقرَّر مع مستشاركم القانوني. **الحملة.** من " + I('1 660') + " مؤسسة مدعوة، 620 تطالب ببطاقتها، أكثر بقليل من واحدة من ثلاث. والفريق يتحقق من 540 أخرى بالهاتف، نحو مئة في الأسبوع. و120 أغلقت وسُحبت.",
        "**الفتح.** تُنشَر " + I('1 540') + " بطاقة: " + I('1 160') + " مُتحقَّق منها، ثلاث من أربع، و380 مأخوذة من الدليل القديم، معروضة بعبارة «غير مُتحقَّق منها» ومرتَّبة بعد الأخرى. المنصة تقول ما لا تعرفه. **العبء.** كل شهر، تعود 128 بطاقة. 52 منها لمؤسسات طالبت ببطاقتها: رسالة، وتأكيد. يبقى 76 اتصالاً؛ وبخمس دقائق للاتصال، وهي فرضية المثال، أكثر بقليل من ست ساعات في الشهر. والمؤسسات التي لا تجيب على الرسالة تنضم إلى قائمة الاتصالات.",
      ] },
      { heading: "ما يوجد في المنصة", body: [
        "الشكل يرصّ خمس طبقات؛ والثالثة، التحقق، هي التي تفصل الدليل عن القائمة.",
      ], visual: 'couches', after: [
        "**البطاقات والبحث.** صفحة لكل مؤسسة، حقول دقيقة، بيانات منظَّمة، وخريطة موقع؛ وبحث بالكلمات، بالنشاط، وبالولاية، باللغتين، مع قائمة عمليات البحث دون نتيجة. **التحقق والحسابات.** المطالبة برمز، المراقبة من شخص، التاريخ الظاهر، وعجلة المراجعة؛ حساب لكل مؤسسة لتسيير بطاقتها، فضاء للفريق للتحقق والدمج، وسجل لكل تغيير.",
        "**المداخيل.** نصيحتنا: البطاقة الأساسية تبقى مجانية، لأن عدد البطاقات الصحيحة هو ما يصنع قيمة الدليل. وما يمكن بيعه: بطاقة موسَّعة، إبراز مُشار إليه، طلبات الاتصال، وإحصائيات المشاهدة؛ وإذا كان الدفع على الإنترنت، انظر [الدفع الإلكتروني](" + L.paiement + "). **جاهز أم على المقاس.** توجد إضافات للأدلة في أنظمة تسيير المحتوى، وبعضها فيه الاستيراد والمطالبة؛ وهي مناسبة حين يدخل نموذج بطاقتكم ومساركم في نموذجها. والتطوير على المقاس مبرَّر حين يجب إزالة التكرار من آلاف السطور، إعادة التحقق من البطاقات بالتناوب مع فريقكم، البحث بالعربية والفرنسية، ربط الدليل بانخراطاتكم أو بأدواتكم، وإبقاء البيانات عندكم.",
      ], list: [
        "**ما تتسلّمونه**: صفحة لكل مؤسسة مع بياناتها المنظَّمة؛ الاستيراد ودمج التكرارات؛ المطالبة برمز؛ التحقق قبل النشر؛ تاريخ التحقق على كل بطاقة؛ البحث حسب النشاط والولاية، بالعربية والفرنسية؛ عجلة المراجعة السنوية؛ وقائمة عمليات البحث دون نتيجة.",
        "**ما تتجنّبه الهيئة**: الملف الذي يُعاد كل سنتين، البطاقة الخاطئة التي لا يستطيع أحد تصحيحها، الشركة نفسها ثلاث مرات، المؤسسة المغلقة التي تبقى، البطاقة التي يأخذها طرف آخر، والمكان في المقدمة المَبيع دون قول ذلك.",
        "**ما يُقاس**: حصة البطاقات المُتحقَّق منها منذ أقل من اثني عشر شهراً؛ البطاقات المطالَب بها؛ البطاقات دون جواب على المراجعة؛ عمليات البحث دون نتيجة حسب النشاط والولاية؛ المشاهدات وطلبات الاتصال لكل بطاقة؛ والتكرارات المدموجة في الشهر.",
        "**ما تفعله Symloop**: نموذج البطاقة والأصناف، الاستيراد وإزالة التكرار، الصفحات وبياناتها المنظَّمة، البحث، المطالبة، عجلة التحقق، فضاء الفريق، والخيارات المدفوعة، بالعربية والفرنسية. واتصالات التحقق تبقى من مهام فريقكم.",
      ], faq: [
        { q: "كيف يُنشأ دليل على الإنترنت؟", a: "في ست مراحل: استيراد القوائم الموجودة، دمج التكرارات، دعوة كل مؤسسة، تركها تطالب ببطاقتها وتصحّحها، نشر صفحة لكل مؤسسة مع تاريخ التحقق منها، ثم إعادة التحقق من كل بطاقة مرة في السنة." },
        { q: "هل يكفي جدول أو ملف لدليل؟", a: "لقائمة داخلية من بضع عشرات من السطور، نعم. أما الدليل العمومي فينقصه البحث، التصحيح من المؤسسة، تاريخ التحقق، وصفحة لكل بطاقة تقرؤها محركات البحث." },
        { q: "كيف ننشئ دليل مؤسسات انطلاقاً من ملفاتنا؟", a: "تُستورَد الملفات، تُقارَب بالهاتف، الاسم، والولاية، وتُقترَح التكرارات للدمج؛ وشخص يؤكّد. في المثال، ألف وثمانمئة سطر تصير ألفاً وستمئة وستين مؤسسة." },
        { q: "كيف يبقى الدليل محيَّناً؟", a: "بمراجعة دوّارة: جزء من اثني عشر من البطاقات كل شهر. المؤسسة التي طالبت ببطاقتها تؤكّدها برسالة؛ والأخرى يُتَّصل بها. وكل بطاقة تُظهر تاريخ آخر تحقق منها." },
        { q: "كيف تطالب مؤسسة ببطاقتها؟", a: "تتلقى رمزاً على الهاتف أو العنوان المسجَّل في البطاقة. وإذا لم يعد هذا العنوان صالحاً، يتحقق الفريق بمعاودة الاتصال أو بوثيقة قبل فتح الدخول." },
        { q: "كم بطاقة خاطئة في دليلنا؟", a: "اتصلوا بمئة بطاقة مسحوبة عشوائياً: تحصلون على الجواب بفارق عشر نقاط. في المثال، 52 من 100 بعد ثلاث سنوات دون إعادة تحقق." },
        { q: "كيف تظهر البطاقات في محركات البحث؟", a: "صفحة لكل مؤسسة، بعنوان ثابت، في خريطة الموقع، مع بيانات منظَّمة. هذا يسمح لمحرك بحث بفهم البطاقة؛ ولا يضمن أن يعرضها." },
        { q: "كيف يربح الدليل مالاً؟", a: "ببطاقة موسَّعة، إبراز مُشار إليه، طلبات الاتصال، أو إحصائيات البطاقة. والأفضل أن تبقى البطاقة الأساسية مجانية: عدد البطاقات الصحيحة هو ما يصنع القيمة." },
        { q: "ما الفرق بين دليل، موقع إعلانات، ومنصة ربط؟", a: "الدليل يقول من يوجد وكيف يُتَّصل به. موقع الإعلانات ينشر عروضاً تنتهي صلاحيتها. ومنصة الربط تنظّم الخدمة، من الحاجة إلى الدفع." },
        { q: "بماذا يُبدأ؟", a: "بمئة اتصال على دليلكم الحالي، ثم بنموذج البطاقة: أي حقول، أي أنشطة، وما هو عمومي." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "الدليل لا يموت دفعة واحدة: يفقد بطاقتين من مئة كل شهر، دون أن يراه أحد." },
      { after: 2, text: "بطاقة دون تاريخ تطلب من القارئ أن يصدّقكم على الكلمة." },
    ],
    cta: { eyebrow: "قولوا لنا كم بطاقة في دليلكم، في أي شكل يوجد، ومتى كان آخر تحقق منه: نبدأ بمئة اتصال", title: "دليل في ملف، بطاقات خاطئة، تكرارات، مؤسسات مغلقة تبقى، بحث مستحيل، غياب عن محركات البحث، أو دليل مهنة تريدون إطلاقه في الجزائر من فرنسا", body: "Symloop تبني منصة الدليل التي تناسب هيئتكم: صفحة لكل مؤسسة، استيراد وإزالة تكرار، مطالبة برمز، تحقق مؤرَّخ، بحث حسب النشاط والولاية، ومراجعة سنوية. صِفوا لنا قوائمكم، فريقكم، وما تنتظرونه من الدليل." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.annonces, kind: '2027', name: 'إنشاء موقع إعلانات: الإيداع، المراقبة، والإعلانات الزائفة' },
      { href: L.relation, kind: '2027', name: 'منصة الربط: الكثافة، التحقق، والدفع' },
      { href: L.recherche, kind: '2027', name: 'البحث في تطبيق: العربية، الفرنسية، الأخطاء، وانعدام النتائج' },
      { href: L.reprise, kind: '2027', name: 'استرجاع البيانات: الترحيل، التنظيف، والتكرارات' },
    ] },
  },
};

const KEYWORDS = "annuaire en ligne algérie, annuaire en ligne algérie 2027, comment créer un annuaire en ligne, créer un annuaire en ligne, comment créer un annuaire, comment créer un annuaire d'entreprise, comment créer un annuaire professionnel, créer un annuaire d'entreprise, annuaire des entreprises algérie, annuaire professionnel algérie, annuaire entreprise algérie, logiciel annuaire, logiciel annuaire entreprise, comment créer un annuaire sur excel, plateforme annuaire, site annuaire d'entreprises, revendiquer une fiche, fiche entreprise vérifiée, how to create an online directory, business directory Algeria, online directory software, directory website development, دليل الشركات الجزائرية, دليل المؤسسات الجزائرية, إنشاء دليل إلكتروني, دليل على الإنترنت, برنامج دليل الشركات, Symloop";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
