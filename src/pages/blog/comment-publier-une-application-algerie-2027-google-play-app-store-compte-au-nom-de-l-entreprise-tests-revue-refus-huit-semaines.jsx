import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/comment-publier-une-application-algerie-2027-google-play-app-store-compte-au-nom-de-l-entreprise-tests-revue-refus-huit-semaines.mjs';

const SLUG = 'comment-publier-une-application-algerie-2027-google-play-app-store-compte-au-nom-de-l-entreprise-tests-revue-refus-huit-semaines';
const FIGURES = ['compte', 'stores', 'pret', 'chemin', 'revue', 'semaines'];
const DATE = '2026-11-18';
const I = (x) => '⁦' + x + '⁩';

const L = {
  vivre: '/blog/faire-vivre-une-application-algerie-2027-cout-annee-stores-serveurs-mises-a-jour/',
  pwa: '/blog/pwa-ou-application-native-algerie-2027-quand-application-web-installable-suffit-quand-il-faut-les-stores/',
  sept: '/blog/creer-une-application-mobile-en-algerie-2027-sept-decisions-avant-janvier/',
  societe: '/blog/quelle-societe-choisir-algerie-2027-application-avec-ia-cinq-preuves-a-exiger-avant-de-signer-ou-verifier-les-notres/',
  domaine: '/blog/nom-de-domaine-hebergement-site-web-entreprise-algerie-2027-qui-possede-quoi-domaine-expire-ancien-prestataire-reprendre-la-main/',
};

const CONTENT = {
  fr: {
    kind: 'Publier une application · Algérie · 2027', title: "Comment publier une application sur Google Play et l'App Store en Algérie (2027) : l'application est prête, le lancement est annoncé, et il reste le compte, les tests, la revue et un refus possible",
    dek: "« Notre application est terminée et nous avons annoncé le lancement pour le 1er mars. Le développeur nous dit maintenant qu'il faut encore “la publier” : un compte chez Google, un autre chez Apple, des tests, une validation qui peut refuser. Il propose de la mettre sur son propre compte pour aller plus vite. Combien de temps cela prend-il vraiment, et est-ce une bonne idée ? » Comptez huit semaines avant la date annoncée, pas huit jours. Et le compte se crée au nom de l'entreprise : celui qui possède le compte possède l'application.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Publier une application', 'Google Play', 'App Store', 'Compte développeur', 'Revue des applications', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Publier, c'est six temps : **un compte au nom de l'entreprise** sur chaque store, **une fiche** (nom, captures, description, politique de confidentialité), **une version signée**, **des tests**, **une revue** par le store, puis **une diffusion par étapes**. Deux délais ne se compriment pas : la vérification du compte, qui demande chez Apple un numéro D-U-N-S pour une société, et, chez Google, pour un compte personnel récent, un test fermé de douze testeurs pendant quatorze jours. Ajoutez une revue et un refus possible : commencez huit semaines avant la date annoncée. Et ne publiez pas sur le compte du développeur : le jour où il part, l'application part avec lui.",
      "Ce guide s'adresse au gérant dont l'application est prête, ou presque, et au fondateur installé en France qui prépare un lancement en Algérie. Les conditions citées ont été lues dans l'aide de Google Play et sur les pages d'Apple pour les développeurs en novembre 2026 ; elles changent chaque année, vérifiez-les au moment d'ouvrir vos comptes. Les jours, les motifs de refus et le calendrier de l'exemple sont construits. Ce guide ne traite ni de la fiscalité des ventes dans les stores ni des contrats.",
    ],
    sections: [
      { heading: "Celui qui possède le compte possède l'application", body: [
        "La figure publie la même application de deux façons, puis regarde ce qui se passe le jour où le développeur s'en va.",
      ], visual: 'compte', after: [
        "**Deux types de compte.** Chaque store distingue un compte de personne et un compte d'organisation. Chez Apple, pour un compte individuel, c'est le nom de la personne qui s'affiche comme vendeur de l'application ; pour une organisation, il faut un numéro D-U-N-S, un identifiant d'entreprise à neuf chiffres, et une entité juridique : les noms commerciaux et les succursales ne sont pas acceptés. Chez Google Play, l'inscription coûte 25 dollars une fois, et l'identité du titulaire est vérifiée. **Le raccourci.** Publier sur le compte du développeur évite cette vérification : l'application est en ligne plus tôt, sous son nom à lui.",
        "**Ce que cela coûte.** La fiche, les utilisateurs, les notes, les statistiques et le droit d'envoyer une mise à jour appartiennent au titulaire du compte. Le jour où il change de métier, de pays ou d'avis, l'entreprise n'a plus la main sur sa propre application. Un transfert existe : d'après l'aide de Google Play, il emporte les utilisateurs, les statistiques, les notes et les avis vers le compte cible ; d'après celle d'Apple, l'application garde ses notes et reste disponible pendant l'opération. Mais c'est l'ancien titulaire qui doit le lancer. **La bonne façon.** Le compte se crée au nom de l'entreprise, avec deux administrateurs ; le développeur y est invité avec un rôle, et en sort à la fin. C'est la même règle que pour [le nom de domaine](" + L.domaine + "), et l'une des preuves à demander avant de signer, comme dans [le guide pour choisir une société](" + L.societe + "). Un fondateur installé en France peut ouvrir les comptes au nom de la société qui portera l'application ; vérifiez, pour le pays où elle est immatriculée, les conditions d'inscription et, si l'application est payante, d'encaissement.",
      ] },
      { heading: "Google Play et App Store : ce que chacun demande", body: [
        "La figure compare les deux stores sur sept points.",
      ], visual: 'stores', after: [
        "**Les tests.** Google Play impose aux comptes personnels créés après le 13 novembre 2023 un test fermé d'au moins douze testeurs, inscrits sans interruption pendant au moins quatorze jours, avant d'ouvrir l'accès à la production ; l'examen de cette demande prend en général sept jours ou moins, parfois davantage. L'exigence vise les comptes personnels : raison de plus pour ouvrir le compte au nom de la société. Chez Apple, l'outil de test s'appelle TestFlight : il accepte jusqu'à 10 000 testeurs externes, et la première version qui leur est envoyée passe elle aussi par une revue.",
        "**La revue.** Apple indique examiner habituellement au moins la moitié des envois en moins de 24 heures et 90 % en moins de 48 heures. **Deux exigences qu'on oublie.** Depuis le 31 août 2026, une nouvelle application ou une mise à jour doit cibler Android 16 pour être acceptée sur Google Play, et ce seuil est relevé chaque année : une application livrée il y a deux ans ne passe plus telle quelle. Et les deux stores demandent que l'utilisateur qui peut créer un compte puisse aussi le supprimer. **La diffusion.** Les deux permettent de ne servir d'abord qu'une partie des utilisateurs : un pourcentage choisi chez Google, sept jours de montée progressive chez Apple. Les frais et l'entretien de l'année sont détaillés dans [le guide pour faire vivre une application](" + L.vivre + ") ; si une application web installable vous suffit, il n'y a pas de store du tout : voir [le guide PWA ou application native](" + L.pwa + ").",
      ] },
      { heading: "Ce qui doit être prêt avant d'envoyer, en cinq couches", body: [
        "La couche accentuée est la première : le compte.",
      ], visual: 'pret', after: [
        "**Le compte et l'identité.** Le compte se lance en premier, parce que sa vérification ne dépend pas de vous. L'identifiant unique de l'application se choisit une fois : il ne se change plus après la publication, et il doit porter le nom de l'entreprise, pas celui du prestataire. Les clés qui servent à envoyer les versions sont conservées par l'entreprise, dans un coffre de mots de passe, pas sur l'ordinateur d'une seule personne.",
        "**La fiche et la conformité.** La fiche se rédige en français, en arabe et en anglais, avec de vraies captures d'écran. La politique de confidentialité est une page publique qui dit quelles données l'application collecte et pourquoi ; la déclaration faite au store doit dire la même chose. **La technique.** La revue ouvre l'application comme un utilisateur : il lui faut un compte de démonstration si une connexion est demandée, un serveur allumé, et aucun écran vide. Les décisions prises en amont, connexion, paiement, notifications, sont celles du [guide des sept décisions](" + L.sept + ").",
      ] },
      { heading: "Le chemin d'une version, en six temps", body: [
        "Le premier temps est accentué : le compte.",
      ], visual: 'chemin', after: [
        "**Compte, fiche, version signée.** Ces trois temps se préparent en parallèle. La version porte un numéro, qui augmente à chaque envoi, et une signature, qui prouve qu'elle vient bien de vous. **Tests.** D'abord l'équipe, sur de vrais téléphones et sur un réseau mobile ordinaire ; puis un groupe fermé de vrais utilisateurs, clients, employés, partenaires, qui trouvent ce que l'équipe ne voit plus.",
        "**Revue et diffusion.** Le store essaie la version, l'accepte ou la refuse avec un motif. Une fois acceptée, elle n'est pas forcément servie à tous : on commence par quelques pour cent des utilisateurs, on regarde les plantages, puis on ouvre. **Et ensuite.** Chaque mise à jour refait les deux derniers temps, en plus court. C'est pourquoi une correction urgente ne se livre pas « dans l'heure » sur un store, et pourquoi on garde, côté serveur, de quoi désactiver une fonction sans attendre une revue.",
      ] },
      { heading: "La revue : cinq portes, et un refus coûte un tour de plus", body: [
        "La figure suit une version envoyée un lundi, refusée une première fois, puis acceptée.",
      ], visual: 'revue', after: [
        "**Les cinq portes.** Les règles de revue d'Apple sont rangées en cinq chapitres : sécurité, performances, commerce, conception, juridique. Derrière ces mots, des vérifications concrètes. L'application est-elle complète ? Si elle demande une connexion, les règles demandent de fournir un compte de démonstration et d'allumer le serveur. Est-elle plus qu'un site web emballé ? Dit-elle quelles données elle collecte ? Permet-elle de supprimer son compte ? Google Play applique des règles proches.",
        "**Après un refus.** Le motif est écrit ; on peut répondre à l'équipe de revue pour résoudre le problème avant de renvoyer la version, et faire appel en cas de désaccord. Dans l'exemple, un compte de démonstration oublié coûte deux jours. Un refus qui touche au fond, un paiement à refaire, une fonction jugée insuffisante, coûte des semaines : c'est celui-là qu'on évite en lisant les règles avant de concevoir, pas avant d'envoyer.",
      ] },
      { heading: "Huit semaines avant la date annoncée, en 2027", body: [
        "Huit semaines dans l'exemple, comptées à rebours depuis la date annoncée.",
      ], visual: 'semaines', after: [
        "**Semaines 1 à 3, les comptes.** C'est le délai qu'on ne maîtrise pas : obtention du numéro D-U-N-S, vérification de l'identité, échanges avec le support. **Semaines 2 à 4, la fiche et la conformité**, pendant que le développement se termine. **Semaines 4 et 5, la version** et les essais de l'équipe.",
        "**Semaines 5 et 6, le test fermé** de quatorze jours. **Semaine 7, la revue**, avec un refus compté d'avance. **Semaine 8, la diffusion par étapes**, pour ouvrir à tous le jour annoncé. Si les comptes existent déjà au nom de l'entreprise, on gagne trois semaines ; si l'application est déjà sur le compte d'un ancien prestataire, la première étape devient son transfert.",
      ], list: [
        "**Ce que le gérant reçoit** : les deux comptes au nom de l'entreprise avec la liste des personnes qui y ont accès, la fiche en trois langues, le calendrier à rebours et, après chaque envoi, la réponse du store.",
        "**Ce que l'entreprise ne fait plus** : annoncer une date avant d'avoir un compte vérifié, publier sur le compte d'un prestataire, découvrir un refus la veille du lancement, livrer une mise à jour à tous d'un seul coup.",
        "**Ce qui est mesuré** : jours entre l'envoi et l'acceptation, nombre de refus et leur motif, part des utilisateurs sur la dernière version, taux de plantage pendant la diffusion.",
        "**Ce que fait Symloop** : l'ouverture des comptes au nom du client, la fiche, la conformité, les tests, l'envoi et la réponse à la revue, la diffusion par étapes, puis chaque mise à jour ; et le transfert d'une application restée sur le compte d'un ancien prestataire.",
      ], faq: [
        { q: "Comment publier une application sur Google Play et l'App Store ?", a: "En six temps : un compte au nom de l'entreprise sur chaque store, une fiche avec textes, captures et politique de confidentialité, une version signée, des tests, la revue du store, puis une diffusion par étapes. Le compte se lance en premier, parce que sa vérification est le délai qu'on ne maîtrise pas." },
        { q: "Combien de temps faut-il pour publier une application ?", a: "Huit semaines dans notre exemple, en partant de zéro : trois pour des comptes vérifiés, deux pour le test fermé, une pour la revue avec un refus possible, une pour la diffusion par étapes. Quelques jours seulement si les comptes existent et que l'application est déjà testée." },
        { q: "Combien coûte la publication d'une application ?", a: "Les frais des stores sont connus : 25 dollars une fois pour Google Play, 99 dollars par an pour le programme d'Apple. Le reste est du travail : la fiche, la conformité, les tests et les allers-retours avec la revue." },
        { q: "Peut-on publier l'application sur le compte du développeur ?", a: "Techniquement oui, et c'est plus rapide le premier jour. Mais la fiche, les utilisateurs, les notes et le droit de mettre à jour appartiennent alors à son compte. Ouvrez un compte au nom de l'entreprise et invitez-y le développeur avec un rôle." },
        { q: "Mon application est sur le compte de mon ancien prestataire : comment la récupérer ?", a: "Par un transfert d'un compte à l'autre, que les deux stores prévoient et qui conserve les utilisateurs et les notes. Il doit être lancé par le titulaire actuel : il faut donc sa coopération. Sans elle, il reste à republier sous un nouvel identifiant, en repartant de zéro." },
        { q: "Qu'est-ce qu'un numéro D-U-N-S, et pourquoi Apple le demande ?", a: "C'est un identifiant d'entreprise à neuf chiffres, attribué par Dun & Bradstreet. Apple l'exige pour inscrire une organisation à son programme, afin de vérifier qu'il s'agit d'une entité juridique réelle. Son obtention prend du temps : demandez-le dès le début du projet." },
        { q: "Pourquoi Google demande-t-il douze testeurs pendant quatorze jours ?", a: "C'est une règle de Google Play pour les comptes personnels créés après le 13 novembre 2023 : un test fermé d'au moins douze testeurs, inscrits sans interruption pendant quatorze jours, avant l'accès à la production. Prévoyez ces deux semaines dans le calendrier." },
        { q: "Pourquoi mon application a-t-elle été refusée ?", a: "Le motif est écrit dans la réponse de la revue. Des causes simples : pas de compte de démonstration, serveur éteint pendant l'examen, politique de confidentialité absente, suppression de compte impossible. Une cause de fond : une application qui n'est qu'un site web emballé." },
        { q: "Peut-on publier depuis l'Algérie, ou faut-il une société à l'étranger ?", a: "Les comptes s'ouvrent au nom de la société qui porte l'application, dans le pays où elle est immatriculée. Les conditions d'inscription et, pour une application payante, d'encaissement varient selon les pays et changent : vérifiez-les sur les pages des stores au moment d'ouvrir le compte." },
        { q: "Faut-il repasser par la revue à chaque mise à jour ?", a: "Oui : chaque version passe par la revue, puis par une diffusion par étapes, en plus court que la première fois. Une correction urgente ne se livre donc pas dans l'heure ; on garde côté serveur de quoi désactiver une fonction sans attendre." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "Le jour où le développeur part, l'application part avec le compte." },
      { after: 4, text: "Le refus qui coûte des semaines s'évite en lisant les règles avant de concevoir, pas avant d'envoyer." },
    ],
    cta: { eyebrow: "Dites-nous la date que vous avez annoncée et sur quel compte se trouve l'application aujourd'hui : nous vous disons si la date tient, et ce qu'il faut lancer cette semaine", title: "Application prête mais pas publiée, compte au nom d'un prestataire, refus à la revue, ou fondateur en France qui prépare un lancement en Algérie : nous publions sur des comptes à votre nom, avec un calendrier compté à rebours", body: "Comptes, fiche, conformité, tests, revue, diffusion par étapes, mises à jour, transfert d'une application existante. Nous travaillons depuis Alger et Sétif, en français, en arabe et en anglais." },
    related: { label: 'À lire aussi', items: [
      { href: L.vivre, kind: '2027', name: 'Faire vivre une application : ce qu’elle coûte chaque année' },
      { href: L.pwa, kind: '2027', name: 'PWA ou application native : quand il faut les stores' },
      { href: L.sept, kind: '2027', name: 'Créer une application mobile : sept décisions à prendre avant' },
      { href: L.societe, kind: '2027', name: 'Quelle société choisir : cinq preuves à exiger avant de signer' },
    ] },
  },
  en: {
    kind: 'Publishing an app · Algeria · 2027', title: "How to publish an app on Google Play and the App Store in Algeria (2027): the app is ready, the launch is announced, and there is still the account, the tests, the review and a possible refusal",
    dek: "“Our app is finished and we have announced the launch for 1 March. The developer now tells us it still has to be ‘published’: an account with Google, another with Apple, tests, an approval that can say no. He suggests putting it on his own account to go faster. How long does it really take, and is that a good idea?” Count eight weeks before the announced date, not eight days. And the account is created in the company’s name: whoever owns the account owns the app.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Publishing an app', 'Google Play', 'App Store', 'Developer account', 'App review', 'Algeria 2027'],
    intro: [
      "**Short answer.** Publishing takes six steps: **an account in the company’s name** on each store, **a listing** (name, screenshots, description, privacy policy), **a signed version**, **tests**, **a review** by the store, then **a staged rollout**. Two delays cannot be compressed: account verification, which at Apple requires a D-U-N-S Number for a company, and, at Google, for a recent personal account, a closed test with twelve testers for fourteen days. Add a review and a possible refusal: start eight weeks before the announced date. And do not publish on the developer’s account: the day he leaves, the app leaves with him.",
      "This guide is for the manager whose app is ready, or nearly, and for the founder based in France preparing a launch in Algeria. The conditions quoted were read in the Google Play help pages and on Apple’s developer pages in November 2026; they change every year, so check them when you open your accounts. The days, the reasons for refusal and the calendar in the example are constructed. This guide covers neither the taxation of sales in the stores nor contracts.",
    ],
    sections: [
      { heading: "Whoever owns the account owns the app", body: [
        "The figure publishes the same app in two ways, then looks at what happens the day the developer leaves.",
      ], visual: 'compte', after: [
        "**Two types of account.** Each store distinguishes a person’s account from an organization’s. At Apple, for an individual account, it is the person’s name that is displayed as the seller of the app; for an organization, a D-U-N-S Number is required, a nine-digit company identifier, along with a legal entity: trade names and branches are not accepted. At Google Play, registration costs US$25 once, and the holder’s identity is verified. **The shortcut.** Publishing on the developer’s account avoids that verification: the app is online sooner, under his own name.",
        "**What it costs.** The listing, the users, the ratings, the statistics and the right to send an update belong to the account holder. The day he changes job, country or mind, the company no longer controls its own app. A transfer exists: according to the Google Play help pages, it moves the users, statistics, ratings and reviews to the target account; according to Apple’s, the app keeps its ratings and stays available during the operation. But it is the former holder who has to start it. **The right way.** The account is created in the company’s name, with two administrators; the developer is invited with a role, and leaves it at the end. It is the same rule as for [the domain name](" + L.domaine + "), and one of the proofs to ask for before signing, as in [the guide to choosing a company](" + L.societe + "). A founder based in France can open the accounts in the name of the company that will carry the app; check, for the country where it is registered, the conditions for registration and, if the app is paid, for receiving payments.",
      ] },
      { heading: "Google Play and App Store: what each one asks for", body: [
        "The figure compares the two stores on seven points.",
      ], visual: 'stores', after: [
        "**Tests.** Google Play requires personal accounts created after 13 November 2023 to run a closed test with a minimum of twelve testers, opted in continuously for at least fourteen days, before production access is opened; the review of that request usually takes seven days or less, occasionally longer. The requirement targets personal accounts: one more reason to open the account in the company’s name. At Apple, the testing tool is called TestFlight: it accepts up to 10,000 external testers, and the first build sent to them also goes through a review.",
        "**Review.** Apple states that it typically reviews at least half of submissions in less than 24 hours and 90 % in less than 48 hours. **Two requirements people forget.** Since 31 August 2026, a new app or an update must target Android 16 to be accepted on Google Play, and that threshold is raised every year: an app delivered two years ago no longer passes as it is. And both stores require that a user who can create an account can also delete it. **Rollout.** Both let you serve only part of the users at first: a chosen percentage at Google, seven days of gradual increase at Apple. The fees and the yearly upkeep are detailed in [the guide to keeping an app alive](" + L.vivre + "); if an installable web app is enough for you, there is no store at all: see [the guide to PWA or native app](" + L.pwa + ").",
      ] },
      { heading: "What must be ready before sending, in five layers", body: [
        "The accented layer is the first: the account.",
      ], visual: 'pret', after: [
        "**The account and the identity.** The account is started first, because its verification does not depend on you. The app’s unique identifier is chosen once: it can no longer be changed after publication, and it should carry the company’s name, not the provider’s. The keys used to send versions are kept by the company, in a password vault, not on one person’s computer.",
        "**The listing and compliance.** The listing is written in French, Arabic and English, with real screenshots. The privacy policy is a public page that says which data the app collects and why; the declaration made to the store has to say the same thing. **The technical side.** The review opens the app the way a user would: it needs a demo account if a login is required, a server switched on, and no empty screen. The decisions taken upstream, login, payment, notifications, are those of [the guide to the seven decisions](" + L.sept + ").",
      ] },
      { heading: "The path of a version, in six steps", body: [
        "The first step is accented: the account.",
      ], visual: 'chemin', after: [
        "**Account, listing, signed version.** These three steps are prepared in parallel. The version carries a number, which goes up with each submission, and a signature, which proves it really comes from you. **Tests.** First the team, on real phones and on an ordinary mobile network; then a closed group of real users, customers, employees, partners, who find what the team no longer sees.",
        "**Review and rollout.** The store tries the version, accepts it or refuses it with a reason. Once accepted, it is not necessarily served to everyone: you start with a few per cent of users, watch the crashes, then open up. **And afterwards.** Each update goes through the last two steps again, more briefly. That is why an urgent fix is not delivered “within the hour” on a store, and why you keep, on the server side, a way to switch a feature off without waiting for a review.",
      ] },
      { heading: "Review: five gates, and a refusal costs one more round", body: [
        "The figure follows a version sent on a Monday, refused a first time, then accepted.",
      ], visual: 'revue', after: [
        "**The five gates.** Apple’s review guidelines are arranged in five chapters: safety, performance, business, design, legal. Behind those words, concrete checks. Is the app complete? If it asks for a login, the guidelines ask you to include demo account information and to turn on your back-end service. Is it more than a repackaged website? Does it say which data it collects? Does it let users delete their account? Google Play applies similar rules.",
        "**After a refusal.** The reason is written; you can correspond with the review team to resolve the issue before resubmitting the build, and appeal if you disagree. In the example, a forgotten demo account costs two days. A refusal that goes to the substance, a payment to redo, a feature judged insufficient, costs weeks: that is the one you avoid by reading the rules before designing, not before sending.",
      ] },
      { heading: "Eight weeks before the announced date, in 2027", body: [
        "Eight weeks in the example, counted back from the announced date.",
      ], visual: 'semaines', after: [
        "**Weeks 1 to 3, the accounts.** This is the delay you do not control: obtaining the D-U-N-S Number, identity verification, exchanges with support. **Weeks 2 to 4, the listing and compliance**, while development is finishing. **Weeks 4 and 5, the version** and the team’s trials.",
        "**Weeks 5 and 6, the closed test** of fourteen days. **Week 7, the review**, with one refusal counted in advance. **Week 8, the staged rollout**, to open to everyone on the announced day. If the accounts already exist in the company’s name, you gain three weeks; if the app is already on a former provider’s account, the first step becomes its transfer.",
      ], list: [
        "**What the manager receives**: the two accounts in the company’s name with the list of people who have access, the listing in three languages, the countdown calendar and, after each submission, the store’s answer.",
        "**What the company no longer does**: announce a date before having a verified account, publish on a provider’s account, discover a refusal the day before the launch, deliver an update to everyone in one go.",
        "**What is measured**: days between submission and acceptance, number of refusals and their reason, share of users on the latest version, crash rate during the rollout.",
        "**What Symloop does**: opening the accounts in the client’s name, the listing, compliance, tests, the submission and the reply to the review, the staged rollout, then every update; and the transfer of an app left on a former provider’s account.",
      ], faq: [
        { q: "How do you publish an app on Google Play and the App Store?", a: "In six steps: an account in the company’s name on each store, a listing with texts, screenshots and a privacy policy, a signed version, tests, the store’s review, then a staged rollout. The account is started first, because its verification is the delay you do not control." },
        { q: "How long does it take to publish an app?", a: "Eight weeks in our example, starting from nothing: three for verified accounts, two for the closed test, one for the review with a possible refusal, one for the staged rollout. Only a few days if the accounts exist and the app is already tested." },
        { q: "How much does it cost to publish an app?", a: "The store fees are known: US$25 once for Google Play, 99 USD a year for Apple’s programme. The rest is work: the listing, compliance, the tests and the exchanges with the review." },
        { q: "Can the app be published on the developer’s account?", a: "Technically yes, and it is faster on day one. But the listing, the users, the ratings and the right to update then belong to his account. Open an account in the company’s name and invite the developer to it with a role." },
        { q: "My app is on my former provider’s account: how do I get it back?", a: "Through a transfer from one account to the other, which both stores provide for and which keeps the users and the ratings. It has to be started by the current holder, so you need his cooperation. Without it, what remains is to publish again under a new identifier, starting from zero." },
        { q: "What is a D-U-N-S Number, and why does Apple ask for it?", a: "It is a nine-digit company identifier, assigned by Dun & Bradstreet. Apple requires it to enrol an organization in its programme, to check that it is a real legal entity. Obtaining it takes time: ask for it at the very start of the project." },
        { q: "Why does Google ask for twelve testers for fourteen days?", a: "It is a Google Play rule for personal accounts created after 13 November 2023: a closed test with a minimum of twelve testers, opted in continuously for fourteen days, before production access. Put those two weeks in the calendar." },
        { q: "Why was my app refused?", a: "The reason is written in the review’s answer. Simple causes: no demo account, server off during the examination, no privacy policy, no way to delete an account. A cause of substance: an app that is only a repackaged website." },
        { q: "Can you publish from Algeria, or do you need a company abroad?", a: "The accounts are opened in the name of the company that carries the app, in the country where it is registered. The conditions for registration and, for a paid app, for receiving payments vary by country and change: check them on the stores’ pages when you open the account." },
        { q: "Does every update have to go through review again?", a: "Yes: each version goes through the review, then a staged rollout, more briefly than the first time. So an urgent fix is not delivered within the hour; you keep on the server side a way to switch a feature off without waiting." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "The day the developer leaves, the app leaves with the account." },
      { after: 4, text: "The refusal that costs weeks is avoided by reading the rules before designing, not before sending." },
    ],
    cta: { eyebrow: "Tell us the date you have announced and which account the app sits on today: we tell you whether the date holds, and what has to be started this week", title: "An app that is ready but not published, an account in a provider’s name, a refusal at review, or a founder in France preparing a launch in Algeria: we publish on accounts in your name, with a calendar counted backwards", body: "Accounts, listing, compliance, tests, review, staged rollout, updates, transfer of an existing app. We work from Algiers and Sétif, in French, Arabic and English." },
    related: { label: 'Also read', items: [
      { href: L.vivre, kind: '2027', name: 'Keeping an app alive: what it costs every year' },
      { href: L.pwa, kind: '2027', name: 'PWA or native app: when the stores are needed' },
      { href: L.sept, kind: '2027', name: 'Creating a mobile app: seven decisions to take first' },
      { href: L.societe, kind: '2027', name: 'Which company to choose: five proofs to demand before signing' },
    ] },
  },
  ar: {
    kind: 'نشر تطبيق · الجزائر · 2027', title: "كيف يُنشر تطبيق على غوغل بلاي وآب ستور في الجزائر (2027): التطبيق جاهز، الإطلاق معلَن، وبقي الحساب، الاختبارات، المراجعة ورفض محتمل",
    dek: "«تطبيقنا انتهى وأعلنّا الإطلاق ليوم الفاتح مارس. والمطوِّر يقول لنا الآن إنه يجب “نشره”: حساب عند غوغل، وآخر عند آبل، اختبارات، ومصادقة قد ترفض. ويقترح وضعه على حسابه الخاص لربح الوقت. كم يأخذ ذلك فعلاً، وهل هي فكرة جيدة؟» احسبوا ثمانية أسابيع قبل التاريخ المعلَن، لا ثمانية أيام. والحساب يُنشأ باسم المؤسسة: من يملك الحساب يملك التطبيق.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['نشر تطبيق', 'غوغل بلاي', 'آب ستور', 'حساب المطوِّر', 'مراجعة التطبيقات', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** النشر ست مراحل: **حساب باسم المؤسسة** في كل متجر، **بطاقة** (الاسم، لقطات الشاشة، الوصف، سياسة الخصوصية)، **إصدار موقَّع**، **اختبارات**، **مراجعة** من المتجر، ثم **نشر على مراحل**. وأجلان لا يُضغطان: التحقق من الحساب، ويطلب عند آبل رقم " + I('D-U-N-S') + " للشركة، وعند غوغل، لحساب شخصي حديث، اختباراً مغلقاً باثني عشر مختبِراً مدة أربعة عشر يوماً. أضيفوا مراجعة ورفضاً محتملاً: ابدؤوا ثمانية أسابيع قبل التاريخ المعلَن. ولا تنشروا على حساب المطوِّر: يوم يغادر، يغادر التطبيق معه.",
      "هذا الدليل موجَّه إلى المسيّر الذي تطبيقه جاهز، أو يكاد، وإلى المؤسس المقيم في فرنسا الذي يحضّر إطلاقاً في الجزائر. الشروط المذكورة قُرئت في مساعدة غوغل بلاي وفي صفحات آبل للمطوِّرين في نوفمبر 2026؛ وهي تتغيّر كل سنة، فراجعوها عند فتح حساباتكم. الأيام وأسباب الرفض والتقويم في المثال مركَّبة. هذا الدليل لا يتناول جباية المبيعات في المتاجر ولا العقود.",
    ],
    sections: [
      { heading: "من يملك الحساب يملك التطبيق", body: [
        "الشكل ينشر التطبيق نفسه بطريقتين، ثم ينظر في ما يحدث يوم يغادر المطوِّر.",
      ], visual: 'compte', after: [
        "**نوعان من الحسابات.** كل متجر يميّز بين حساب شخص وحساب مؤسسة. عند آبل، في الحساب الفردي، اسم الشخص هو الذي يُعرض كبائع للتطبيق؛ وللمؤسسة، يلزم رقم " + I('D-U-N-S') + "، وهو معرّف مؤسسة من تسعة أرقام، وكيان قانوني: الأسماء التجارية والفروع غير مقبولة. وعند غوغل بلاي، التسجيل يكلّف 25 دولاراً مرة واحدة، وهوية صاحب الحساب يُتحقَّق منها. **الطريق المختصر.** النشر على حساب المطوِّر يتفادى هذا التحقق: التطبيق يصير متاحاً أبكر، باسمه هو.",
        "**ما يكلّفه ذلك.** البطاقة، المستعملون، التقييمات، الإحصائيات، وحق إرسال تحديث، كلها لصاحب الحساب. ويوم يغيّر مهنته أو بلده أو رأيه، لا تبقى للمؤسسة يد على تطبيقها. والتحويل موجود: حسب مساعدة غوغل بلاي، ينقل المستعملين والإحصائيات والتقييمات والتعليقات إلى الحساب المقصود؛ وحسب مساعدة آبل، يحتفظ التطبيق بتقييماته ويبقى متاحاً أثناء العملية. لكن صاحب الحساب القديم هو من يجب أن يطلقه. **الطريقة الصحيحة.** يُنشأ الحساب باسم المؤسسة، بمسؤولَين؛ ويُدعى إليه المطوِّر بدور، ويخرج منه في النهاية. وهي القاعدة نفسها في [اسم النطاق](" + L.domaine + ")، وإحدى الأدلة التي تُطلب قبل التوقيع، كما في [دليل اختيار الشركة](" + L.societe + "). والمؤسس المقيم في فرنسا يستطيع فتح الحسابات باسم الشركة التي ستحمل التطبيق؛ وراجعوا، للبلد الذي هي مسجَّلة فيه، شروط التسجيل، وإذا كان التطبيق مدفوعاً، شروط القبض.",
      ] },
      { heading: "غوغل بلاي وآب ستور: ما يطلبه كل واحد", body: [
        "الشكل يقارن المتجرين في سبع نقاط.",
      ], visual: 'stores', after: [
        "**الاختبارات.** غوغل بلاي يفرض على الحسابات الشخصية المنشأة بعد 13 نوفمبر 2023 اختباراً مغلقاً بما لا يقل عن اثني عشر مختبِراً، مسجَّلين دون انقطاع مدة أربعة عشر يوماً على الأقل، قبل فتح الوصول إلى الإنتاج؛ وفحص هذا الطلب يأخذ في العادة سبعة أيام أو أقل، وأحياناً أكثر. والشرط يخصّ الحسابات الشخصية: سبب إضافي لفتح الحساب باسم الشركة. وعند آبل، أداة الاختبار اسمها " + I('TestFlight') + ": تقبل إلى " + I('10 000') + " مختبِر خارجي، وأول إصدار يُرسَل إليهم يمرّ هو كذلك بمراجعة.",
        "**المراجعة.** آبل تقول إنها تفحص في العادة نصف الإرسالات على الأقل في أقل من 24 ساعة، و90 بالمئة في أقل من 48 ساعة. **شرطان يُنسيان.** منذ 31 أوت 2026، يجب أن يستهدف التطبيق الجديد أو التحديث أندرويد 16 ليُقبل في غوغل بلاي، وهذه العتبة تُرفع كل سنة: تطبيق سُلِّم قبل سنتين لم يعد يمرّ كما هو. والمتجران يطلبان أن يستطيع المستعمل الذي يُنشئ حساباً أن يحذفه كذلك. **النشر.** كلاهما يسمح بخدمة جزء من المستعملين أولاً: نسبة مختارة عند غوغل، وسبعة أيام من الصعود التدريجي عند آبل. والمصاريف وصيانة السنة مفصَّلة في [دليل إبقاء التطبيق حياً](" + L.vivre + ")؛ وإذا كان تطبيق ويب قابل للتنصيب يكفيكم، فلا متجر إطلاقاً: انظر [دليل " + I('PWA') + " أم تطبيق أصلي](" + L.pwa + ").",
      ] },
      { heading: "ما يجب أن يكون جاهزاً قبل الإرسال، في خمس طبقات", body: [
        "الطبقة المبرزة هي الأولى: الحساب.",
      ], visual: 'pret', after: [
        "**الحساب والهوية.** الحساب يُطلق أولاً، لأن التحقق منه لا يتوقف عليكم. والمعرّف الفريد للتطبيق يُختار مرة واحدة: لا يتغيّر بعد النشر، ويجب أن يحمل اسم المؤسسة، لا اسم المتعهّد. والمفاتيح التي تُستعمل لإرسال الإصدارات تحفظها المؤسسة، في خزنة كلمات المرور، لا في حاسوب شخص واحد.",
        "**البطاقة والمطابقة.** البطاقة تُكتب بالفرنسية والعربية والإنجليزية، بلقطات شاشة حقيقية. وسياسة الخصوصية صفحة علنية تقول أي بيانات يجمعها التطبيق ولماذا؛ والتصريح المقدَّم للمتجر يجب أن يقول الشيء نفسه. **التقني.** المراجعة تفتح التطبيق كما يفعل مستعمل: يلزمها حساب تجربة إذا طُلب تسجيل دخول، خادم مشغَّل، ولا شاشة فارغة. والقرارات المتخذة قبل ذلك، تسجيل الدخول، الدفع، الإشعارات، هي قرارات [دليل القرارات السبعة](" + L.sept + ").",
      ] },
      { heading: "مسار إصدار، في ست مراحل", body: [
        "المرحلة الأولى مبرزة: الحساب.",
      ], visual: 'chemin', after: [
        "**الحساب، البطاقة، والإصدار الموقَّع.** هذه المراحل الثلاث تُحضَّر بالتوازي. الإصدار يحمل رقماً، يرتفع مع كل إرسال، وتوقيعاً، يثبت أنه آتٍ منكم فعلاً. **الاختبارات.** أولاً الفريق، على هواتف حقيقية وعلى شبكة هاتف عادية؛ ثم مجموعة مغلقة من مستعملين حقيقيين، زبائن وعمّال وشركاء، يجدون ما لم يعد الفريق يراه.",
        "**المراجعة والنشر.** المتجر يجرّب الإصدار، يقبله أو يرفضه بسبب. وبعد القبول، لا يُخدَم به الجميع بالضرورة: نبدأ بنسبة صغيرة من المستعملين، نراقب الأعطال، ثم نفتح. **وبعد ذلك.** كل تحديث يعيد المرحلتين الأخيرتين، بمدة أقصر. ولهذا لا يُسلَّم تصحيح مستعجل «خلال الساعة» في متجر، ولهذا نحتفظ، جهة الخادم، بما يسمح بتعطيل وظيفة دون انتظار مراجعة.",
      ] },
      { heading: "المراجعة: خمسة أبواب، والرفض يكلّف دورة إضافية", body: [
        "الشكل يتابع إصداراً أُرسل يوم اثنين، رُفض مرة أولى، ثم قُبل.",
      ], visual: 'revue', after: [
        "**الأبواب الخمسة.** قواعد المراجعة عند آبل مرتَّبة في خمسة فصول: الأمان، الأداء، التجارة، التصميم، والجانب القانوني. ووراء هذه الكلمات تحققات ملموسة. هل التطبيق كامل؟ إذا كان يطلب تسجيل دخول، فالقواعد تطلب تقديم حساب تجربة وتشغيل الخادم. هل هو أكثر من موقع ويب مغلَّف؟ هل يقول أي بيانات يجمع؟ هل يسمح بحذف الحساب؟ وغوغل بلاي يطبّق قواعد قريبة.",
        "**بعد الرفض.** السبب مكتوب؛ ويمكن مراسلة فريق المراجعة لحلّ المشكلة قبل إعادة إرسال الإصدار، والتظلّم عند الخلاف. في المثال، حساب تجربة منسي يكلّف يومين. والرفض الذي يمسّ الجوهر، دفع يُعاد، أو وظيفة حُكم بأنها غير كافية، يكلّف أسابيع: وهذا ما نتفاداه بقراءة القواعد قبل التصميم، لا قبل الإرسال.",
      ] },
      { heading: "ثمانية أسابيع قبل التاريخ المعلَن، سنة 2027", body: [
        "ثمانية أسابيع في المثال، محسوبة رجوعاً من التاريخ المعلَن.",
      ], visual: 'semaines', after: [
        "**الأسابيع من 1 إلى 3، الحسابات.** هو الأجل الذي لا نتحكّم فيه: الحصول على رقم " + I('D-U-N-S') + "، التحقق من الهوية، والمراسلات مع الدعم. **الأسابيع من 2 إلى 4، البطاقة والمطابقة**، والتطوير ينتهي. **الأسبوعان 4 و5، الإصدار** وتجارب الفريق.",
        "**الأسبوعان 5 و6، الاختبار المغلق** لأربعة عشر يوماً. **الأسبوع 7، المراجعة**، مع رفض محسوب مسبقاً. **الأسبوع 8، النشر على مراحل**، للفتح للجميع في اليوم المعلَن. إذا كانت الحسابات موجودة باسم المؤسسة، نربح ثلاثة أسابيع؛ وإذا كان التطبيق على حساب متعهّد سابق، فالمرحلة الأولى تصير تحويله.",
      ], list: [
        "**ما يستلمه المسيّر**: الحسابان باسم المؤسسة مع قائمة من لهم الوصول، البطاقة بثلاث لغات، التقويم المحسوب رجوعاً، وبعد كل إرسال، جواب المتجر.",
        "**ما لم تعد المؤسسة تفعله**: إعلان تاريخ قبل حساب متحقَّق منه، النشر على حساب متعهّد، اكتشاف رفض عشية الإطلاق، وتسليم تحديث للجميع دفعة واحدة.",
        "**ما يُقاس**: الأيام بين الإرسال والقبول، عدد مرات الرفض وأسبابها، حصة المستعملين على آخر إصدار، ونسبة الأعطال أثناء النشر.",
        "**ما تفعله Symloop**: فتح الحسابات باسم الزبون، البطاقة، المطابقة، الاختبارات، الإرسال والجواب على المراجعة، النشر على مراحل، ثم كل تحديث؛ وتحويل تطبيق بقي على حساب متعهّد سابق.",
      ], faq: [
        { q: "كيف يُنشر تطبيق على غوغل بلاي وآب ستور؟", a: "في ست مراحل: حساب باسم المؤسسة في كل متجر، بطاقة بنصوص ولقطات وسياسة خصوصية، إصدار موقَّع، اختبارات، مراجعة المتجر، ثم نشر على مراحل. والحساب يُطلق أولاً، لأن التحقق منه هو الأجل الذي لا نتحكّم فيه." },
        { q: "كم من الوقت يلزم لنشر تطبيق؟", a: "ثمانية أسابيع في مثالنا، انطلاقاً من الصفر: ثلاثة لحسابات متحقَّق منها، اثنان للاختبار المغلق، واحد للمراجعة مع رفض محتمل، وواحد للنشر على مراحل. وبضعة أيام فقط إذا كانت الحسابات موجودة والتطبيق مختبَراً." },
        { q: "كم يكلّف نشر تطبيق؟", a: "مصاريف المتاجر معروفة: 25 دولاراً مرة واحدة لغوغل بلاي، و99 دولاراً في السنة لبرنامج آبل. والباقي عمل: البطاقة، المطابقة، الاختبارات، والمراسلات مع المراجعة." },
        { q: "هل يمكن نشر التطبيق على حساب المطوِّر؟", a: "تقنياً نعم، وهو أسرع في اليوم الأول. لكن البطاقة والمستعملين والتقييمات وحق التحديث تصير لحسابه. افتحوا حساباً باسم المؤسسة وادعوا إليه المطوِّر بدور." },
        { q: "تطبيقي على حساب متعهّدي السابق: كيف أستعيده؟", a: "بتحويل من حساب إلى آخر، وهو متاح في المتجرين ويحفظ المستعملين والتقييمات. ويجب أن يطلقه صاحب الحساب الحالي: فيلزم تعاونه. ودونه، يبقى النشر من جديد بمعرّف جديد، انطلاقاً من الصفر." },
        { q: "ما هو رقم D-U-N-S، ولماذا تطلبه آبل؟", a: "هو معرّف مؤسسة من تسعة أرقام، تمنحه " + I('Dun & Bradstreet') + ". وآبل تشترطه لتسجيل مؤسسة في برنامجها، للتحقق من أنها كيان قانوني حقيقي. والحصول عليه يأخذ وقتاً: اطلبوه من بداية المشروع." },
        { q: "لماذا يطلب غوغل اثني عشر مختبِراً مدة أربعة عشر يوماً؟", a: "هي قاعدة غوغل بلاي للحسابات الشخصية المنشأة بعد 13 نوفمبر 2023: اختبار مغلق بما لا يقل عن اثني عشر مختبِراً، مسجَّلين دون انقطاع مدة أربعة عشر يوماً، قبل الوصول إلى الإنتاج. احسبوا هذين الأسبوعين في التقويم." },
        { q: "لماذا رُفض تطبيقي؟", a: "السبب مكتوب في جواب المراجعة. أسباب بسيطة: لا حساب تجربة، خادم مطفأ أثناء الفحص، سياسة خصوصية غائبة، أو حذف حساب غير ممكن. وسبب في الجوهر: تطبيق ليس إلا موقع ويب مغلَّفاً." },
        { q: "هل يمكن النشر من الجزائر، أم تلزم شركة في الخارج؟", a: "الحسابات تُفتح باسم الشركة التي تحمل التطبيق، في البلد الذي هي مسجَّلة فيه. وشروط التسجيل، وللتطبيق المدفوع شروط القبض، تختلف حسب البلدان وتتغيّر: راجعوها في صفحات المتاجر عند فتح الحساب." },
        { q: "هل يجب المرور بالمراجعة عند كل تحديث؟", a: "نعم: كل إصدار يمرّ بالمراجعة، ثم بنشر على مراحل، بمدة أقصر من المرة الأولى. فالتصحيح المستعجل لا يُسلَّم خلال الساعة؛ ونحتفظ جهة الخادم بما يسمح بتعطيل وظيفة دون انتظار." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "يوم يغادر المطوِّر، يغادر التطبيق مع الحساب." },
      { after: 4, text: "الرفض الذي يكلّف أسابيع يُتفادى بقراءة القواعد قبل التصميم، لا قبل الإرسال." },
    ],
    cta: { eyebrow: "قولوا لنا التاريخ الذي أعلنتموه وعلى أي حساب يوجد التطبيق اليوم: نقول لكم هل يصمد التاريخ، وما يجب إطلاقه هذا الأسبوع", title: "تطبيق جاهز لكنه غير منشور، حساب باسم متعهّد، رفض عند المراجعة، أو مؤسس في فرنسا يحضّر إطلاقاً في الجزائر: ننشر على حسابات باسمكم، بتقويم محسوب رجوعاً", body: "حسابات، بطاقة، مطابقة، اختبارات، مراجعة، نشر على مراحل، تحديثات، وتحويل تطبيق موجود. نعمل من الجزائر العاصمة وسطيف، بالفرنسية والعربية والإنجليزية." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.vivre, kind: '2027', name: 'إبقاء التطبيق حياً: ما يكلّفه كل سنة' },
      { href: L.pwa, kind: '2027', name: 'PWA أم تطبيق أصلي: متى تلزم المتاجر' },
      { href: L.sept, kind: '2027', name: 'إنشاء تطبيق جوال: سبعة قرارات تُتخذ قبل البدء' },
      { href: L.societe, kind: '2027', name: 'أي شركة نختار: خمسة أدلة تُطلب قبل التوقيع' },
    ] },
  },
};

const KEYWORDS = "comment publier une application 2027, publier une application sur google play, publier une application sur app store, publier application play store algérie, compte développeur google play entreprise, compte développeur apple d-u-n-s, application refusée app store, test fermé 12 testeurs 14 jours, combien de temps pour publier une application, transférer une application vers un autre compte, how to publish an app algeria 2027, app rejected app store what to do, كيف انشر تطبيق 2027, نشر تطبيق على غوغل بلاي, نشر تطبيق على آب ستور";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
