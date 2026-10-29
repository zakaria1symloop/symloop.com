import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/creer-une-application-mobile-en-algerie-2027-sept-decisions-avant-janvier.mjs';

const SLUG = 'creer-une-application-mobile-en-algerie-2027-sept-decisions-avant-janvier';
const FIGURES = ['changes', 'decisions', 'inside', 'timeline'];
const DATE = '2026-10-30';

const CONTENT = {
  fr: {
    kind: 'Problème · Application mobile', title: "Créer une application mobile en Algérie en 2027 : les sept décisions à prendre avant janvier.",
    dek: "Vous voulez votre application sur les stores en 2027. Vous avez le métier, peut-être des captures d'écran d'applications françaises qui font ce que vous voulez, et une liste de questions : Android seulement ou iOS aussi, comment les gens paieront, comment ils se connecteront, en quelle langue, où iront les données, et que se passe-t-il après la publication. Ce qui change en Algérie d'ici fin 2027, les sept décisions qui coûtent cher quand on les prend trop tard, ce qu'il y a réellement dans l'application, et le calendrier pour publier au printemps.",
    publishedAt: 'Octobre 2026', readTime: '11 min de lecture', author: 'Symloop', about: ['Application mobile', 'Android', 'iOS', 'Paiement mobile', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** En Algérie, en 2027, le choix par défaut d'une application mobile tient en sept lignes : **Android d'abord** et iOS le mois suivant si la diaspora ou le haut de gamme est visé ; **hors-ligne d'abord** pour tout ce qui touche le terrain ; **paiement CIB/Edahabia, QR DZMobPay et espèces enregistrées dès la première version** ; **identification par numéro de téléphone et code SMS**, sans e-mail ni mot de passe ; **arabe et français** dès le départ, darija dans le support ; **hébergement documenté** au sens de la loi 18-07 ; et **un budget annuel de maintenance et de mises à jour des stores décidé avant le premier jour.** Ces décisions se prennent en novembre, sur une page. Prises en mars, chacune coûte des semaines de reprise. Le calendrier qui tient ouvre les comptes développeur et le dossier web-marchand le premier mois et publie en mai 2027.",
      "Ce guide s'adresse au dirigeant d'une entreprise algérienne qui veut son application, au fondateur qui en fait son produit, et au fondateur de la diaspora qui la construit depuis la France. Il complète notre guide pour [lancer un SaaS en Algérie en 2027](/blog/lancer-un-saas-en-algerie-2027-abonnement-paiement-calendrier/) : ici, l'objet est l'application elle-même.",
    ],
    sections: [
      { heading: "Ce qui change pour une application mobile en Algérie d'ici fin 2027", body: [
        "Quatre échéances rendent 2027 différent de 2024, et elles pèsent sur les sept décisions qui suivent.",
      ], visual: 'changes', after: [
        "**Le paiement mobile devient interopérable.** Le GIE Monétique a annoncé l'extension de DZMobPay, le paiement par QR code opéré par la SATIM, à quinze banques en 2026, après sept banques et Algérie Poste fin 2025. Concrètement, un client paie un commerçant depuis l'application de sa propre banque ou depuis BaridiMob, en scannant un code. Une application qui vend quelque chose doit pouvoir afficher ce code et savoir que le paiement est passé. **Le SoftPos**, annoncé pour fin 2026, transforme le téléphone NFC du commerçant en terminal : une application de livraison ou de vente terrain peut encaisser la carte à la porte sans TPE.",
        "**La vérification des développeurs Android.** Google a annoncé qu'à partir de 2026 dans quatre premiers pays, puis à l'échelle mondiale à partir de 2027, les applications installées sur les appareils Android certifiés devront provenir d'un développeur identifié, y compris lorsqu'elles sont installées hors du Play Store. En Algérie, beaucoup d'entreprises distribuent encore leur application interne ou commerciale en envoyant un fichier APK sur WhatsApp ou Telegram. Cette pratique a une date de fin. Une application sérieuse en 2027 vit dans les stores, avec un compte développeur vérifié, et se met à jour chaque année : Google Play comme l'App Store exigent que les applications ciblent une version récente du système, faute de quoi elles cessent d'être proposées aux nouveaux utilisateurs.",
        "**Le projet de loi de finances 2027 et la 5G fixe.** Le PLF 2027 prévoit une réduction d'impôt de 10 % pour les contribuables à l'IFU ou aux BNC dont au moins la moitié des encaissements est électronique, et un plafonnement du droit de timbre sur les factures en espèces. C'est un projet de loi, amendable jusqu'au vote ; mais il pousse vos utilisateurs commerçants et professions libérales vers le paiement électronique, donc vers une application qui l'intègre. La 5G fixe annoncée par Algérie Télécom pour 2027 améliore le bureau, pas le terrain : la coupure réseau reste la norme dans un entrepôt, une cage d'escalier ou une route de wilaya.",
      ] },
      { heading: 'Les sept décisions à prendre avant janvier', body: [
        "Chaque ligne a un choix par défaut en Algérie et un cas où l'inverse se justifie. La colonne de gauche est ce que nous recommandons à neuf projets sur dix.",
      ], visual: 'decisions', after: [
        "**1. Android d'abord.** L'immense majorité des téléphones en Algérie sont sous Android, et les utilisateurs qui comptent pour votre chiffre d'affaires le sont aussi. iOS vient le mois suivant quand la diaspora, les cadres ou une clientèle premium font partie de la cible, ce qui est le cas de la plupart des projets portés depuis la France. Construire les deux en même temps avec un seul code est aujourd'hui la norme ; publier d'abord sur Android permet d'apprendre avec les vrais utilisateurs un mois plus tôt.",
        "**2. Hors-ligne d'abord.** Un livreur, un commercial, un technicien, une infirmière à domicile travaillent là où le réseau tombe. L'application enregistre localement et synchronise quand le réseau revient ; l'utilisateur ne doit jamais voir une roue qui tourne. Nous l'avons détaillé dans le cas d'un [transporteur de cinquante employés](/blog/gerer-50-employes-terrain-tout-passe-par-telephone-algerie-2026/). Le seul cas connecté en permanence est un back-office utilisé au bureau, sur la fibre.",
        "**3. Le paiement dès la première version.** Pas en option, pas « plus tard » : carte CIB/Edahabia via le statut de web-marchand, QR DZMobPay, et les espèces ou le paiement à la livraison enregistrés dans l'application pour que le chiffre d'affaires réel y soit visible. Le dossier web-marchand prend des semaines à des mois ; il commence le premier jour. Une application qui ne vend rien, un outil interne de suivi d'équipe par exemple, est le seul cas qui s'en passe.",
        "**4. Identification par téléphone.** Le numéro et un code SMS. Pas d'e-mail, que beaucoup d'utilisateurs n'ouvrent jamais ; pas de mot de passe, que tout le monde oublie. L'exception est l'application réservée aux employés d'une entreprise, qui s'appuie sur l'annuaire interne.",
        "**5. Arabe et français dès le départ**, avec une interface qui se retourne correctement en arabe, et la darija dans le support par IA parce que c'est ainsi que les gens écrivent. Le français seul se défend pour un outil interne d'une équipe francophone, et encore : le jour où l'application sort du bureau, la traduction coûte plus cher que si elle avait été prévue.",
        "**6. Données et hébergement documentés.** La loi 18-07 encadre les données personnelles ; les clients formels et les administrations vous demanderont où sont les données, qui y accède et comment elles sont sauvegardées. Cloud local ou cloud étranger, nous avons détaillé [comment payer le cloud depuis l'Algérie](/blog/payer-cloud-ia-depuis-algerie-carte-internationale-solutions-2026/) ; ce qui ne se discute pas, c'est l'existence d'une réponse écrite.",
        "**7. L'après-publication décidé avant le premier jour.** Une application vit : mises à jour annuelles exigées par les stores, nouvelles versions d'Android et d'iOS, retours des utilisateurs, évolutions du paiement. Le budget de maintenance se décide avec le budget de construction, dans le même document. Une application sans mise à jour disparaît des stores en un an, et son entreprise découvre alors qu'elle n'a plus personne pour la rouvrir.",
      ] },
      { heading: "Ce qu'il y a réellement dans l'application", body: [
        "L'application que voit l'utilisateur est la partie visible. Quatre autres couches font qu'elle encaisse, qu'elle se pilote et qu'elle reste en ligne ; c'est là que se joue la différence entre un projet livré et un projet qui tient.",
      ], visual: 'inside', after: [
        "**Le back-office web** est la moitié oubliée des devis : c'est là que l'équipe gère le catalogue, les commandes, les clients et les chiffres. Une application mobile sans back-office finit administrée dans une feuille Excel. **L'IA** prend deux rôles qui paient : le support en arabe, français et darija, 24h/24, à partir de votre règlement et de vos horaires, et les relances et alertes, un paiement en retard, une commande non confirmée, une anomalie sur un compte. Nous avons montré ce que cela donne dans l'e-commerce avec les [commandes refusées à la livraison](/blog/commandes-annulees-a-la-livraison-ecommerce-algerie-2026/).",
        "**Les stores** sont une couche à part entière : comptes développeur au nom de votre société, pas au nom d'un prestataire ; fiches en arabe et en français ; politique de confidentialité en ligne ; mises à jour planifiées. Le code, les comptes et les clés vous appartiennent, c'est écrit dans le contrat, et c'est ce que nous expliquons dans [peut-on connaître le prix total avant de commencer](/blog/connaitre-prix-total-application-avant-de-commencer-algerie-2026/).",
      ] },
      { heading: "Si vous construisez depuis la France", body: [
        "Le fondateur de la diaspora a trois particularités, que nous détaillons dans notre [guide pour lancer une startup tech en Algérie depuis la France](/blog/lancer-startup-tech-algerie-depuis-france-diaspora-2026/).",
      ], list: [
        "**iOS compte dès le premier mois**, parce qu'une partie de vos premiers utilisateurs, vos proches et votre réseau en France, sont sur iPhone. Android reste la priorité pour le marché algérien ; les deux sortent à un mois d'écart.",
        "**Les comptes développeur et le web-marchand exigent une société algérienne**, ou au minimum une structure locale pour encaisser en dinars. Le [label startup](/blog/label-startup-algerie-2026-conditions-dossier-avantages/) s'obtient une fois le produit existant.",
        "**Les tests terrain se font en Algérie**, sur des téléphones Android de milieu de gamme, avec le réseau réel. Une application testée uniquement à Paris sur un iPhone récent échoue le premier jour à Sétif.",
      ] },
      { heading: 'Le calendrier : décider en novembre, publier au printemps 2027', body: [
        "Sept mois, en partant de novembre 2026. Deux lignes ne dépendent pas de vous et s'ouvrent le premier mois : les comptes développeur et le dossier web-marchand. Un projet de ce périmètre, Android et iOS, hors-ligne, paiement, back-office, se situe en catégorie 2 ou 3 de notre [grille de prix](/blog/prix-application-mobile-algerie-2026/) selon la profondeur du métier ; le prix total est écrit avant de commencer.",
      ], visual: 'timeline', after: [
        "**Novembre : le cadrage.** Les sept décisions prises et écrites, les écrans principaux dessinés, le prix total signé. **Novembre à janvier : les comptes**, Google Play et App Store au nom de la société, banque et GIE Monétique pour le web-marchand. **Décembre : le prototype** cliquable testé avec cinq utilisateurs réels, pas des proches ; c'est le moment le moins cher pour changer d'avis. **Janvier à mars : le développement**, les deux plateformes avec un seul code, hors-ligne, paiement, back-office. **Avril : les tests terrain**, dans les conditions réelles de réseau et de téléphone. **Mai 2027 : la publication**, puis les premières versions correctives, qui font partie du projet et pas d'un devis supplémentaire.",
        "Commencer en février au lieu de novembre repousse la publication à l'été, quand vos utilisateurs sont ailleurs, et la première vraie saison à la rentrée.",
      ] },
      { heading: 'Les erreurs que nous voyons en 2026, et qui coûteront plus cher en 2027', body: [], list: [
        "**Distribuer un APK sur WhatsApp.** C'était tolérable ; la vérification mondiale des développeurs Android y met fin. Stores, compte vérifié, mises à jour.",
        "**Reporter le paiement à la version 2.** La version 2 arrive rarement, et le dossier web-marchand prend des mois. Il commence le premier jour.",
        "**Demander un e-mail et un mot de passe.** La moitié des utilisateurs n'arrive pas au deuxième écran. Téléphone et code SMS.",
        "**Tester au bureau sur la fibre.** L'application marche parfaitement jusqu'au premier entrepôt. Hors-ligne d'abord, tests terrain.",
        "**Oublier le back-office.** L'application est belle, l'équipe la gère dans Excel. Le back-office fait partie de la première version.",
        "**Ouvrir les comptes stores au nom du prestataire.** Le jour où vous changez de prestataire, vous perdez l'application. Comptes, code et clés à votre nom.",
        "**Ne pas prévoir l'année d'après.** Sans mises à jour, l'application sort des stores en un an. Le budget de maintenance se décide avec le budget de construction.",
      ] },
      { heading: 'Questions fréquentes', body: [], faq: [
        { q: "Faut-il faire Android et iOS en même temps ?", a: "Les deux se construisent avec un seul code. Publiez Android d'abord, c'est là que sont vos utilisateurs algériens, et iOS le mois suivant si la diaspora, les cadres ou une clientèle premium font partie de la cible. iOS en premier ne se justifie jamais pour le marché algérien." },
        { q: "Comment les utilisateurs paieront-ils dans l'application en 2027 ?", a: "Carte CIB/Edahabia via le statut de web-marchand obtenu auprès de votre banque et du GIE Monétique, QR code DZMobPay devenu interopérable entre les banques, et les espèces ou le paiement à la livraison enregistrés dans l'application. Les trois dès la première version." },
        { q: "Peut-on encore distribuer une application interne par fichier APK ?", a: "De moins en moins. Google étend à partir de 2027 l'obligation d'identifier le développeur des applications installées sur les appareils Android certifiés, y compris hors Play Store. Une application d'entreprise passe par un compte développeur vérifié et, pour les applications internes, par la distribution privée des stores." },
        { q: "Pourquoi le hors-ligne est-il le choix par défaut ?", a: "Parce que les utilisateurs qui comptent, livreurs, commerciaux, techniciens, travaillent là où le réseau tombe. L'application enregistre localement et synchronise quand le réseau revient. Seul un back-office de bureau sur la fibre peut être connecté en permanence." },
        { q: "Où doivent être hébergées les données ?", a: "La loi 18-07 encadre les données personnelles, et vos clients formels vous demanderont où elles sont, qui y accède et comment elles sont sauvegardées. Cloud local ou étranger, l'important est une réponse écrite, des sauvegardes et des accès tracés." },
        { q: "Combien de temps pour être sur les stores ?", a: "Sept mois en partant de novembre 2026 : cadrage, comptes développeur et web-marchand ouverts le premier mois, prototype testé en décembre, développement de janvier à mars, tests terrain en avril, publication en mai 2027." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "En 2027, une application sérieuse encaisse électroniquement et vit dans les stores, pas dans un fichier APK envoyé sur WhatsApp." },
      { after: 2, text: "Une application mobile sans back-office finit administrée dans une feuille Excel." },
    ],
    cta: { eyebrow: 'Décrivez votre application', title: "Le métier, les utilisateurs, ce qu'ils doivent pouvoir faire sans réseau, et comment ils paieront. Nous vous rendons les sept décisions écrites, les écrans principaux et le prix total avant de commencer.", body: "Symloop conçoit des applications mobiles pour l'Algérie : Android et iOS avec un seul code, hors-ligne, paiement CIB/Edahabia et QR intégrés, identification par SMS, arabe et français, back-office web, IA de support et de relance, hébergement documenté. Ingénieurs seniors à Alger et Sétif, comptes et code à votre nom, maintenance planifiée dès le premier jour." },
    related: { label: 'À lire ensuite', items: [
      { href: '/blog/lancer-un-saas-en-algerie-2027-abonnement-paiement-calendrier/', kind: '2027', name: 'Lancer un SaaS en Algérie en 2027' },
      { href: '/blog/prix-application-mobile-algerie-2026/', kind: 'Guide', name: "Prix d'une application mobile en Algérie" },
      { href: '/blog/connaitre-prix-total-application-avant-de-commencer-algerie-2026/', kind: 'Problème', name: 'Peut-on connaître le prix total avant de commencer ?' },
      { href: '/blog/lancer-startup-tech-algerie-depuis-france-diaspora-2026/', kind: 'Guide', name: 'Lancer une startup tech en Algérie depuis la France' },
    ] },
  },
  en: {
    kind: 'Problem · Mobile app', title: 'Building a mobile app in Algeria in 2027: the seven decisions to make before January.',
    dek: "You want your app on the stores in 2027. You have the trade, perhaps screenshots of French apps that do what you want, and a list of questions: Android only or iOS too, how people will pay, how they will sign in, in which language, where the data will go, and what happens after publication. What changes in Algeria by the end of 2027, the seven decisions that cost dearly when made too late, what is really inside the app, and the calendar to publish in spring.",
    publishedAt: 'October 2026', readTime: '11 min read', author: 'Symloop', about: ['Mobile app', 'Android', 'iOS', 'Mobile payment', 'Algeria 2027'],
    intro: [
      "**Short answer.** In Algeria, in 2027, the default choice for a mobile app fits in seven lines: **Android first** and iOS the following month if the diaspora or the premium segment is targeted; **offline first** for anything that touches the field; **CIB/Edahabia, QR DZMobPay and recorded cash payment from the first version**; **identification by phone number and SMS code**, no e-mail or password; **Arabic and French** from the start, darija in support; **documented hosting** under Law 18-07; and **an annual budget for maintenance and store updates decided before day one.** These decisions are made in November, on one page. Made in March, each costs weeks of rework. The calendar that holds opens the developer accounts and the merchant file in the first month and publishes in May 2027.",
      "This guide is for the owner of an Algerian company who wants their app, the founder who makes it their product, and the diaspora founder building it from France. It complements our guide to [launching a SaaS in Algeria in 2027](/blog/lancer-un-saas-en-algerie-2027-abonnement-paiement-calendrier/): here, the object is the app itself.",
    ],
    sections: [
      { heading: 'What changes for a mobile app in Algeria by the end of 2027', body: [
        "Four deadlines make 2027 different from 2024, and they weigh on the seven decisions that follow.",
      ], visual: 'changes', after: [
        "**Mobile payment becomes interoperable.** GIE Monétique announced the extension of DZMobPay, the QR-code payment operated by SATIM, to fifteen banks in 2026, after seven banks and Algérie Poste at the end of 2025. Concretely, a customer pays a merchant from their own bank's app or from BaridiMob by scanning a code. An app that sells something must be able to display that code and know the payment went through. **SoftPos**, announced for the end of 2026, turns the merchant's NFC phone into a terminal: a delivery or field-sales app can take the card at the door without a terminal.",
        "**Android developer verification.** Google announced that from 2026 in four first countries, then worldwide from 2027, apps installed on certified Android devices must come from an identified developer, including when installed outside the Play Store. In Algeria, many companies still distribute their internal or commercial app by sending an APK file on WhatsApp or Telegram. That practice has an end date. A serious app in 2027 lives in the stores, with a verified developer account, and updates every year: Google Play and the App Store both require apps to target a recent system version, failing which they stop being offered to new users.",
        "**The 2027 finance bill and fixed 5G.** The 2027 finance bill plans a 10% tax reduction for taxpayers under the IFU or BNC regimes whose receipts are at least half electronic, and a cap on stamp duty for cash invoices. It is a bill, amendable until the vote; but it pushes your merchant and liberal-profession users towards electronic payment, hence towards an app that integrates it. Fixed 5G announced by Algérie Télécom for 2027 improves the office, not the field: network loss remains the norm in a warehouse, a stairwell or a wilaya road.",
      ] },
      { heading: 'The seven decisions to make before January', body: [
        "Each line has a default choice in Algeria and a case where the opposite is justified. The left column is what we recommend to nine projects out of ten.",
      ], visual: 'decisions', after: [
        "**1. Android first.** The vast majority of phones in Algeria run Android, and so do the users who matter for your revenue. iOS comes the following month when the diaspora, executives or a premium clientele are part of the target, which is the case for most projects led from France. Building both at once with a single codebase is now the norm; publishing on Android first lets you learn from real users a month earlier.",
        "**2. Offline first.** A courier, a salesperson, a technician, a home nurse work where the network drops. The app records locally and syncs when the network returns; the user must never see a spinning wheel. We detailed it for a [carrier with fifty employees](/blog/gerer-50-employes-terrain-tout-passe-par-telephone-algerie-2026/). The only permanently connected case is a back-office used at the office, on fibre.",
        "**3. Payment from the first version.** Not optional, not “later”: CIB/Edahabia card through online-merchant status, QR DZMobPay, and cash or cash on delivery recorded in the app so that real revenue is visible there. The merchant file takes weeks to months; it starts on day one. An app that sells nothing, an internal team-tracking tool for instance, is the only case that does without.",
        "**4. Phone identification.** The number and an SMS code. No e-mail, which many users never open; no password, which everyone forgets. The exception is the employee-only company app, which relies on the internal directory.",
        "**5. Arabic and French from the start**, with an interface that mirrors correctly in Arabic, and darija in AI support because that is how people write. French alone is defensible for an internal tool of a French-speaking team, and even then: the day the app leaves the office, translation costs more than if it had been planned.",
        "**6. Documented data and hosting.** Law 18-07 frames personal data; formal customers and administrations will ask you where the data is, who accesses it and how it is backed up. Local or foreign cloud, we detailed [how to pay for cloud from Algeria](/blog/payer-cloud-ia-depuis-algerie-carte-internationale-solutions-2026/); what is not debatable is the existence of a written answer.",
        "**7. The after-publication decided before day one.** An app lives: yearly updates required by the stores, new Android and iOS versions, user feedback, payment changes. The maintenance budget is decided together with the build budget, in the same document. An app without updates disappears from the stores within a year, and its company then discovers it has nobody left to reopen it.",
      ] },
      { heading: 'What is really inside the app', body: [
        "The app the user sees is the visible part. Four other layers make it collect, run and stay online; that is where the difference between a delivered project and a project that lasts is decided.",
      ], visual: 'inside', after: [
        "**The web back-office** is the forgotten half of quotes: it is where the team manages the catalogue, orders, customers and numbers. A mobile app without a back-office ends up administered in an Excel sheet. **AI** takes two roles that pay: support in Arabic, French and darija, around the clock, from your rules and opening hours, and reminders and alerts, a late payment, an unconfirmed order, an anomaly on an account. We showed what it yields in e-commerce with [orders refused at delivery](/blog/commandes-annulees-a-la-livraison-ecommerce-algerie-2026/).",
        "**The stores** are a layer in their own right: developer accounts in your company's name, not a vendor's; listings in Arabic and French; privacy policy online; planned updates. The code, accounts and keys belong to you, it is written in the contract, and it is what we explain in [can you know the total price before starting](/blog/connaitre-prix-total-application-avant-de-commencer-algerie-2026/).",
      ] },
      { heading: 'If you are building from France', body: [
        "The diaspora founder has three particularities, which we detail in our [guide to launching a tech startup in Algeria from France](/blog/lancer-startup-tech-algerie-depuis-france-diaspora-2026/).",
      ], list: [
        "**iOS matters from the first month**, because part of your first users, your relatives and your network in France, are on iPhone. Android remains the priority for the Algerian market; both ship a month apart.",
        "**Developer accounts and merchant status require an Algerian company**, or at least a local structure to collect in dinars. The [startup label](/blog/label-startup-algerie-2026-conditions-dossier-avantages/) is obtained once the product exists.",
        "**Field tests happen in Algeria**, on mid-range Android phones, with the real network. An app tested only in Paris on a recent iPhone fails on day one in Setif.",
      ] },
      { heading: 'The calendar: decide in November, publish in spring 2027', body: [
        "Seven months, starting in November 2026. Two lines do not depend on you and open in the first month: the developer accounts and the merchant file. A project of this scope, Android and iOS, offline, payment, back-office, sits in category 2 or 3 of our [price grid](/blog/prix-application-mobile-algerie-2026/) depending on the depth of the trade; the total price is written before starting.",
      ], visual: 'timeline', after: [
        "**November: scoping.** The seven decisions made and written, the main screens drawn, the total price signed. **November to January: the accounts**, Google Play and App Store in the company's name, bank and GIE Monétique for the merchant status. **December: the clickable prototype** tested with five real users, not relatives; it is the cheapest moment to change your mind. **January to March: development**, both platforms with one codebase, offline, payment, back-office. **April: field tests**, in real network and phone conditions. **May 2027: publication**, then the first corrective versions, which are part of the project and not of an extra quote.",
        "Starting in February instead of November pushes publication to summer, when your users are elsewhere, and the first real season to September.",
      ] },
      { heading: 'The mistakes we see in 2026, which will cost more in 2027', body: [], list: [
        "**Distributing an APK on WhatsApp.** It was tolerable; worldwide Android developer verification ends it. Stores, verified account, updates.",
        "**Postponing payment to version 2.** Version 2 rarely comes, and the merchant file takes months. It starts on day one.",
        "**Asking for an e-mail and a password.** Half the users never reach the second screen. Phone and SMS code.",
        "**Testing at the office on fibre.** The app works perfectly until the first warehouse. Offline first, field tests.",
        "**Forgetting the back-office.** The app is beautiful, the team runs it in Excel. The back-office is part of the first version.",
        "**Opening store accounts in the vendor's name.** The day you change vendor, you lose the app. Accounts, code and keys in your name.",
        "**Not planning the following year.** Without updates, the app leaves the stores within a year. The maintenance budget is decided with the build budget.",
      ] },
      { heading: 'Frequently asked questions', body: [], faq: [
        { q: 'Should Android and iOS be built at the same time?', a: 'Both are built with one codebase. Publish Android first, that is where your Algerian users are, and iOS the following month if the diaspora, executives or a premium clientele are part of the target. iOS first is never justified for the Algerian market.' },
        { q: 'How will users pay inside the app in 2027?', a: 'CIB/Edahabia card through online-merchant status obtained from your bank and GIE Monétique, DZMobPay QR code now interoperable between banks, and cash or cash on delivery recorded in the app. All three from the first version.' },
        { q: 'Can an internal app still be distributed as an APK file?', a: 'Less and less. From 2027 Google extends the obligation to identify the developer of apps installed on certified Android devices, including outside the Play Store. A company app goes through a verified developer account and, for internal apps, through the stores’ private distribution.' },
        { q: 'Why is offline the default choice?', a: 'Because the users who matter, couriers, salespeople, technicians, work where the network drops. The app records locally and syncs when the network returns. Only an office back-office on fibre can be permanently connected.' },
        { q: 'Where should the data be hosted?', a: 'Law 18-07 frames personal data, and your formal customers will ask where it is, who accesses it and how it is backed up. Local or foreign cloud, what matters is a written answer, backups and traced access.' },
        { q: 'How long to be on the stores?', a: 'Seven months starting in November 2026: scoping, developer and merchant accounts opened in the first month, prototype tested in December, development from January to March, field tests in April, publication in May 2027.' },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: 'In 2027 a serious app collects electronically and lives in the stores, not in an APK file sent on WhatsApp.' },
      { after: 2, text: 'A mobile app without a back-office ends up administered in an Excel sheet.' },
    ],
    cta: { eyebrow: 'Describe your app', title: 'The trade, the users, what they must be able to do without network, and how they will pay. We return the seven decisions in writing, the main screens and the total price before starting.', body: 'Symloop designs mobile apps for Algeria: Android and iOS with one codebase, offline, CIB/Edahabia and QR payment built in, SMS identification, Arabic and French, web back-office, AI support and reminders, documented hosting. Senior engineers in Algiers and Setif, accounts and code in your name, maintenance planned from day one.' },
    related: { label: 'Read next', items: [
      { href: '/blog/lancer-un-saas-en-algerie-2027-abonnement-paiement-calendrier/', kind: '2027', name: 'Launching a SaaS in Algeria in 2027' },
      { href: '/blog/prix-application-mobile-algerie-2026/', kind: 'Guide', name: 'Price of a mobile app in Algeria' },
      { href: '/blog/connaitre-prix-total-application-avant-de-commencer-algerie-2026/', kind: 'Problem', name: 'Can you know the total price before starting?' },
      { href: '/blog/lancer-startup-tech-algerie-depuis-france-diaspora-2026/', kind: 'Guide', name: 'Launching a tech startup in Algeria from France' },
    ] },
  },
  ar: {
    kind: 'مشكلة · تطبيق جوّال', title: 'إنشاء تطبيق جوّال في الجزائر سنة 2027: القرارات السبعة التي تُتخذ قبل جانفي.',
    dek: 'تريد تطبيقك على المتاجر في 2027. لديك المهنة، وربما لقطات شاشة لتطبيقات فرنسية تفعل ما تريد، وقائمة أسئلة: أندرويد فقط أم iOS أيضاً، كيف سيدفع الناس، كيف سيسجلون الدخول، بأي لغة، أين ستذهب البيانات، وماذا يحدث بعد النشر. ما يتغير في الجزائر حتى نهاية 2027، القرارات السبعة التي تكلّف غالياً إن اتُّخذت متأخرة، ما داخل التطبيق فعلاً، والجدول للنشر في الربيع.',
    publishedAt: 'أكتوبر 2026', readTime: '11 دقيقة قراءة', author: 'سيملوب', about: ['تطبيق جوّال', 'أندرويد', 'iOS', 'دفع عبر الجوّال', 'الجزائر 2027'],
    intro: [
      '**الجواب المختصر.** في الجزائر سنة 2027، الخيار الافتراضي لتطبيق جوّال يُلخَّص في سبعة أسطر: **أندرويد أولاً** وiOS في الشهر التالي إن استُهدفت الجالية أو الفئة الراقية؛ **دون اتصال أولاً** لكل ما يمس الميدان؛ **دفع CIB/الذهبية ورمز QR DZMobPay ونقد مسجَّل منذ الإصدار الأول**؛ **تعريف برقم الهاتف ورمز SMS** بلا بريد إلكتروني ولا كلمة سر؛ **العربية والفرنسية** منذ البداية والدارجة في الدعم؛ **استضافة موثّقة** بمعنى القانون 18-07؛ و**ميزانية سنوية للصيانة وتحديثات المتاجر تُقرَّر قبل اليوم الأول.** تُتخذ هذه القرارات في نوفمبر على صفحة واحدة. وإن اتُّخذت في مارس كلّف كل منها أسابيع من الإعادة. الجدول الذي يصمد يفتح حسابات المطور وملف التاجر الإلكتروني في الشهر الأول وينشر في ماي 2027.',
      'هذا الدليل لمسيّر شركة جزائرية يريد تطبيقه، وللمؤسس الذي يجعله منتجه، ولمؤسس الجالية الذي يبنيه من فرنسا. وهو يكمّل دليلنا حول [إطلاق SaaS في الجزائر سنة 2027](/blog/lancer-un-saas-en-algerie-2027-abonnement-paiement-calendrier/): هنا الموضوع هو التطبيق نفسه.',
    ],
    sections: [
      { heading: 'ما يتغير لتطبيق جوّال في الجزائر حتى نهاية 2027', body: [
        'أربعة مواعيد تجعل 2027 مختلفة عن 2024، وتؤثر في القرارات السبعة التالية.',
      ], visual: 'changes', after: [
        '**الدفع عبر الجوّال يصبح متوافقاً بين البنوك.** أعلن GIE Monétique توسيع DZMobPay، الدفع برمز QR الذي تشغّله SATIM، إلى خمسة عشر بنكاً في 2026 بعد سبعة بنوك وبريد الجزائر نهاية 2025. عملياً يدفع الزبون للتاجر من تطبيق بنكه أو من بريدي موب بمسح رمز. والتطبيق الذي يبيع شيئاً يجب أن يعرض هذا الرمز ويعرف أن الدفع تم. **SoftPos**، المعلن لنهاية 2026، يحوّل هاتف التاجر بتقنية NFC إلى جهاز دفع: تطبيق توصيل أو بيع ميداني يحصّل البطاقة عند الباب دون TPE.',
        '**التحقق من مطوري أندرويد.** أعلنت Google أنه ابتداءً من 2026 في أربعة بلدان أولى ثم عالمياً من 2027، يجب أن تأتي التطبيقات المثبتة على أجهزة أندرويد المعتمدة من مطور معرَّف، حتى عند التثبيت خارج Play Store. في الجزائر ما زالت شركات كثيرة توزع تطبيقها الداخلي أو التجاري بإرسال ملف APK على واتساب أو تيليغرام. لهذه الممارسة تاريخ انتهاء. التطبيق الجاد في 2027 يعيش في المتاجر بحساب مطور متحقَّق منه ويُحدَّث كل سنة: يشترط Google Play وApp Store أن تستهدف التطبيقات إصداراً حديثاً من النظام وإلا توقف عرضها على المستخدمين الجدد.',
        '**مشروع قانون المالية 2027 والجيل الخامس الثابت.** ينص مشروع قانون المالية 2027 على تخفيض ضريبي بـ10 % للمكلفين بنظام IFU أو BNC الذين يمر نصف تحصيلهم على الأقل إلكترونياً، وسقف لحق الطابع على الفواتير النقدية. هو مشروع قانون قابل للتعديل حتى التصويت؛ لكنه يدفع مستخدميك من التجار والمهن الحرة نحو الدفع الإلكتروني، وبالتالي نحو تطبيق يدمجه. الجيل الخامس الثابت الذي أعلنته اتصالات الجزائر لسنة 2027 يحسّن المكتب لا الميدان: انقطاع الشبكة يبقى القاعدة في مستودع أو بيت درج أو طريق ولائي.',
      ] },
      { heading: 'القرارات السبعة التي تُتخذ قبل جانفي', body: [
        'لكل سطر خيار افتراضي في الجزائر وحالة يُبرَّر فيها العكس. العمود الأيمن هو ما نوصي به تسعة مشاريع من عشرة.',
      ], visual: 'decisions', after: [
        '**1. أندرويد أولاً.** الغالبية الساحقة من الهواتف في الجزائر تعمل بأندرويد، وكذلك المستخدمون الذين يهمون رقم أعمالك. يأتي iOS في الشهر التالي عندما تكون الجالية أو الإطارات أو زبائن الفئة الراقية جزءاً من الهدف، وهو حال معظم المشاريع المقادة من فرنسا. بناء الاثنين معاً بكود واحد هو القاعدة اليوم؛ والنشر على أندرويد أولاً يتيح التعلم من المستخدمين الحقيقيين قبل شهر.',
        '**2. دون اتصال أولاً.** الموصّل والمندوب التجاري والتقني والممرضة المنزلية يعملون حيث تسقط الشبكة. يسجّل التطبيق محلياً ويزامن عند عودة الشبكة؛ ولا يجب أن يرى المستخدم أبداً عجلة تدور. فصّلنا ذلك في حالة [ناقل بخمسين موظفاً](/blog/gerer-50-employes-terrain-tout-passe-par-telephone-algerie-2026/). الحالة الوحيدة المتصلة دائماً هي مكتب خلفي يُستخدم في المكتب على الألياف.',
        '**3. الدفع منذ الإصدار الأول.** لا اختيارياً ولا «لاحقاً»: بطاقة CIB/الذهبية عبر صفة التاجر الإلكتروني، رمز QR DZMobPay، والنقد أو الدفع عند الاستلام مسجَّلان في التطبيق ليكون رقم الأعمال الحقيقي مرئياً فيه. ملف التاجر الإلكتروني يستغرق أسابيع إلى أشهر؛ يبدأ في اليوم الأول. التطبيق الذي لا يبيع شيئاً، أداة داخلية لمتابعة فريق مثلاً، هو الحالة الوحيدة التي تستغني عنه.',
        '**4. التعريف بالهاتف.** الرقم ورمز SMS. لا بريد إلكتروني لا يفتحه كثير من المستخدمين أبداً؛ ولا كلمة سر ينساها الجميع. الاستثناء هو تطبيق الشركة المخصص للموظفين الذي يعتمد على الدليل الداخلي.',
        '**5. العربية والفرنسية منذ البداية**، بواجهة تنعكس بشكل صحيح بالعربية، والدارجة في دعم الذكاء الاصطناعي لأن الناس يكتبون هكذا. الفرنسية وحدها تُدافَع عنها لأداة داخلية لفريق فرنكوفوني، وحتى هذا بتحفظ: يوم يخرج التطبيق من المكتب تكلّف الترجمة أكثر مما لو خُطط لها.',
        '**6. بيانات واستضافة موثّقتان.** يؤطر القانون 18-07 البيانات الشخصية؛ وسيسألك الزبائن الرسميون والإدارات أين البيانات ومن يصل إليها وكيف تُحفظ احتياطياً. سحابة محلية أو أجنبية، فصّلنا [كيف تدفع للسحابة من الجزائر](/blog/payer-cloud-ia-depuis-algerie-carte-internationale-solutions-2026/)؛ وما لا يُناقش هو وجود جواب مكتوب.',
        '**7. ما بعد النشر يُقرَّر قبل اليوم الأول.** التطبيق يعيش: تحديثات سنوية تشترطها المتاجر، إصدارات جديدة من أندرويد وiOS، ملاحظات المستخدمين، تطورات الدفع. تُقرَّر ميزانية الصيانة مع ميزانية البناء في الوثيقة نفسها. تطبيق بلا تحديث يختفي من المتاجر خلال سنة، وتكتشف شركته حينها أن لا أحد بقي ليعيد فتحه.',
      ] },
      { heading: 'ما داخل التطبيق فعلاً', body: [
        'التطبيق الذي يراه المستخدم هو الجزء المرئي. أربع طبقات أخرى تجعله يحصّل ويُقاد ويبقى على الخط؛ وهناك يُحسم الفرق بين مشروع مسلَّم ومشروع يصمد.',
      ], visual: 'inside', after: [
        '**المكتب الخلفي على الويب** هو النصف المنسي في عروض الأسعار: فيه يدير الفريق الكتالوج والطلبات والزبائن والأرقام. تطبيق جوّال بلا مكتب خلفي ينتهي مُداراً في ورقة إكسل. **الذكاء الاصطناعي** يأخذ دورين مجديين: الدعم بالعربية والفرنسية والدارجة على مدار الساعة انطلاقاً من نظامك ومواعيدك، والتذكيرات والتنبيهات، دفعة متأخرة، طلب غير مؤكد، شذوذ في حساب. أظهرنا ما يعطيه ذلك في التجارة الإلكترونية مع [الطلبات المرفوضة عند التسليم](/blog/commandes-annulees-a-la-livraison-ecommerce-algerie-2026/).',
        '**المتاجر** طبقة قائمة بذاتها: حسابات مطور باسم شركتك لا باسم مزوّد؛ بطاقات بالعربية والفرنسية؛ سياسة خصوصية على الخط؛ تحديثات مخططة. الكود والحسابات والمفاتيح ملكك، مكتوب في العقد، وهو ما نشرحه في [هل يمكن معرفة السعر الإجمالي قبل البدء](/blog/connaitre-prix-total-application-avant-de-commencer-algerie-2026/).',
      ] },
      { heading: 'إن كنت تبني من فرنسا', body: [
        'لمؤسس الجالية ثلاث خصوصيات نفصّلها في [دليلنا لإطلاق ستارت-أب تقنية في الجزائر من فرنسا](/blog/lancer-startup-tech-algerie-depuis-france-diaspora-2026/).',
      ], list: [
        '**iOS يهم منذ الشهر الأول**، لأن جزءاً من مستخدميك الأوائل، أقاربك وشبكتك في فرنسا، على آيفون. يبقى أندرويد الأولوية للسوق الجزائرية؛ ويصدر الاثنان بفارق شهر.',
        '**حسابات المطور وصفة التاجر الإلكتروني تتطلب شركة جزائرية**، أو على الأقل هيكلاً محلياً للتحصيل بالدينار. تُنال [علامة ستارت-أب](/blog/label-startup-algerie-2026-conditions-dossier-avantages/) بمجرد وجود المنتج.',
        '**الاختبارات الميدانية تجري في الجزائر**، على هواتف أندرويد متوسطة، بالشبكة الحقيقية. تطبيق اختُبر في باريس فقط على آيفون حديث يفشل في اليوم الأول في سطيف.',
      ] },
      { heading: 'الجدول: قرّر في نوفمبر، انشر في ربيع 2027', body: [
        'سبعة أشهر انطلاقاً من نوفمبر 2026. خطان لا يعتمدان عليك ويُفتحان في الشهر الأول: حسابات المطور وملف التاجر الإلكتروني. مشروع بهذا النطاق، أندرويد وiOS، دون اتصال، دفع، مكتب خلفي، يقع في الفئة 2 أو 3 من [شبكة أسعارنا](/blog/prix-application-mobile-algerie-2026/) حسب عمق المهنة؛ والسعر الإجمالي مكتوب قبل البدء.',
      ], visual: 'timeline', after: [
        '**نوفمبر: التأطير.** القرارات السبعة متخذة ومكتوبة، الشاشات الرئيسية مرسومة، السعر الإجمالي موقَّع. **نوفمبر إلى جانفي: الحسابات**، Google Play وApp Store باسم الشركة، البنك وGIE Monétique للتاجر الإلكتروني. **ديسمبر: النموذج** القابل للنقر مختبَر مع خمسة مستخدمين حقيقيين لا أقارب؛ هذه أرخص لحظة لتغيير الرأي. **جانفي إلى مارس: التطوير**، المنصتان بكود واحد، دون اتصال، دفع، مكتب خلفي. **أفريل: الاختبارات الميدانية** في ظروف الشبكة والهاتف الحقيقية. **ماي 2027: النشر**، ثم أولى الإصدارات التصحيحية التي هي جزء من المشروع لا من عرض سعر إضافي.',
        'البدء في فيفري بدل نوفمبر يؤجل النشر إلى الصيف حين يكون مستخدموك في مكان آخر، وأول موسم حقيقي إلى الدخول.',
      ] },
      { heading: 'الأخطاء التي نراها في 2026 وستكلّف أكثر في 2027', body: [], list: [
        '**توزيع APK على واتساب.** كان مقبولاً؛ التحقق العالمي من مطوري أندرويد ينهيه. متاجر، حساب متحقَّق منه، تحديثات.',
        '**تأجيل الدفع إلى الإصدار الثاني.** نادراً ما يأتي الإصدار الثاني، وملف التاجر الإلكتروني يستغرق أشهراً. يبدأ في اليوم الأول.',
        '**طلب بريد إلكتروني وكلمة سر.** نصف المستخدمين لا يصلون إلى الشاشة الثانية. هاتف ورمز SMS.',
        '**الاختبار في المكتب على الألياف.** يعمل التطبيق بإتقان حتى أول مستودع. دون اتصال أولاً، اختبارات ميدانية.',
        '**نسيان المكتب الخلفي.** التطبيق جميل والفريق يديره في إكسل. المكتب الخلفي جزء من الإصدار الأول.',
        '**فتح حسابات المتاجر باسم المزوّد.** يوم تغيّر المزوّد تخسر التطبيق. الحسابات والكود والمفاتيح باسمك.',
        '**عدم التخطيط للسنة التالية.** بلا تحديثات يخرج التطبيق من المتاجر خلال سنة. تُقرَّر ميزانية الصيانة مع ميزانية البناء.',
      ] },
      { heading: 'أسئلة شائعة', body: [], faq: [
        { q: 'هل يجب بناء أندرويد وiOS في الوقت نفسه؟', a: 'يُبنى الاثنان بكود واحد. انشر أندرويد أولاً، فهناك مستخدموك الجزائريون، وiOS في الشهر التالي إن كانت الجالية أو الإطارات أو زبائن الفئة الراقية جزءاً من الهدف. iOS أولاً لا يُبرَّر أبداً للسوق الجزائرية.' },
        { q: 'كيف سيدفع المستخدمون داخل التطبيق في 2027؟', a: 'بطاقة CIB/الذهبية عبر صفة التاجر الإلكتروني من بنكك وGIE Monétique، رمز QR DZMobPay الذي أصبح متوافقاً بين البنوك، والنقد أو الدفع عند الاستلام مسجَّلان في التطبيق. الثلاثة منذ الإصدار الأول.' },
        { q: 'هل ما زال يمكن توزيع تطبيق داخلي بملف APK؟', a: 'أقل فأقل. من 2027 توسّع Google إلزام تعريف مطور التطبيقات المثبتة على أجهزة أندرويد المعتمدة حتى خارج Play Store. تطبيق الشركة يمر بحساب مطور متحقَّق منه، وللتطبيقات الداخلية بالتوزيع الخاص في المتاجر.' },
        { q: 'لماذا «دون اتصال» هو الخيار الافتراضي؟', a: 'لأن المستخدمين الذين يهمون، الموصّلون والمندوبون والتقنيون، يعملون حيث تسقط الشبكة. يسجّل التطبيق محلياً ويزامن عند عودة الشبكة. وحده مكتب خلفي في المكتب على الألياف يمكن أن يكون متصلاً دائماً.' },
        { q: 'أين يجب استضافة البيانات؟', a: 'يؤطر القانون 18-07 البيانات الشخصية، وسيسألك زبائنك الرسميون أين هي ومن يصل إليها وكيف تُحفظ احتياطياً. سحابة محلية أو أجنبية، المهم جواب مكتوب ونسخ احتياطية ووصول متتبَّع.' },
        { q: 'كم من الوقت للوصول إلى المتاجر؟', a: 'سبعة أشهر انطلاقاً من نوفمبر 2026: تأطير، حسابات مطور وتاجر إلكتروني تُفتح في الشهر الأول، نموذج مختبَر في ديسمبر، تطوير من جانفي إلى مارس، اختبارات ميدانية في أفريل، نشر في ماي 2027.' },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: 'في 2027 يحصّل التطبيق الجاد إلكترونياً ويعيش في المتاجر، لا في ملف APK مرسل على واتساب.' },
      { after: 2, text: 'تطبيق جوّال بلا مكتب خلفي ينتهي مُداراً في ورقة إكسل.' },
    ],
    cta: { eyebrow: 'صف تطبيقك', title: 'المهنة، المستخدمون، ما يجب أن يفعلوه دون شبكة، وكيف سيدفعون. نعيد إليك القرارات السبعة مكتوبة والشاشات الرئيسية والسعر الإجمالي قبل البدء.', body: 'تصمم سيملوب تطبيقات الجوّال للجزائر: أندرويد وiOS بكود واحد، دون اتصال، دفع CIB/الذهبية وQR مدمج، تعريف بـSMS، عربي وفرنسي، مكتب خلفي ويب، ذكاء اصطناعي للدعم والتذكير، استضافة موثّقة. مهندسون خبراء في الجزائر وسطيف، حسابات وكود باسمك، صيانة مخططة من اليوم الأول.' },
    related: { label: 'اقرأ بعد ذلك', items: [
      { href: '/blog/lancer-un-saas-en-algerie-2027-abonnement-paiement-calendrier/', kind: '2027', name: 'إطلاق SaaS في الجزائر سنة 2027' },
      { href: '/blog/prix-application-mobile-algerie-2026/', kind: 'دليل', name: 'سعر تطبيق جوّال في الجزائر' },
      { href: '/blog/connaitre-prix-total-application-avant-de-commencer-algerie-2026/', kind: 'مشكلة', name: 'هل يمكن معرفة السعر الإجمالي قبل البدء؟' },
      { href: '/blog/lancer-startup-tech-algerie-depuis-france-diaspora-2026/', kind: 'دليل', name: 'إطلاق ستارت-أب تقنية في الجزائر من فرنسا' },
    ] },
  },
};

const KEYWORDS = "créer une application mobile en algérie 2027, application mobile algérie 2027, développement application android algérie, application ios algérie, paiement dans application cib edahabia qr dzmobpay, publier application google play app store algérie, application hors-ligne terrain algérie, build mobile app algeria 2027, إنشاء تطبيق جوال في الجزائر 2027";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
