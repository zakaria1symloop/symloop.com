import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/comment-archiver-des-documents-en-entreprise-en-algerie-2027-papier-et-numerique-plan-de-classement-nom-des-fichiers-numerisation-recherche.mjs';

const SLUG = 'comment-archiver-des-documents-en-entreprise-en-algerie-2027-papier-et-numerique-plan-de-classement-nom-des-fichiers-numerisation-recherche';
const FIGURES = ['essai', 'nom', 'couches', 'etapes', 'outil', 'calendrier'];
const DATE = '2026-11-19';
const I = (x) => '⁦' + x + '⁩';

const L = {
  partage: '/blog/partage-de-fichiers-entreprise-algerie-2027-serveur-de-fichiers-nas-ou-cloud-droits-par-dossier-versions-acces-a-distance/',
  intranet: '/blog/comment-creer-un-intranet-d-entreprise-en-algerie-2027-notes-de-service-documents-annuaire-demandes-internes-recherche-accuse-de-lecture/',
  espace: '/blog/comment-creer-un-espace-client-en-algerie-2027-suivi-de-dossier-documents-factures-demandes-connexion-par-code-chacun-ne-voit-que-le-sien/',
  sauvegarde: '/blog/si-le-serveur-meurt-demain-algerie-2027-sauvegardes-restauration-testee-perte-maximale-delai-de-reprise-copie-inalterable/',
  roles: '/blog/roles-droits-journal-d-audit-application-algerie-2027-qui-voit-quoi-qui-modifie-quoi-qui-a-change-ce-prix-acces-par-agence-approbations/',
  ia: '/blog/mettre-de-l-ia-dans-une-application-algerie-2027-cinq-fonctions-recherche-documents-extraction-factures-classification-cout-par-requete/',
  recherche: '/blog/recherche-dans-une-application-algerie-2027-catalogue-arabe-francais-darija-fautes-synonymes-classement-zero-resultat/',
};

const CONTENT = {
  fr: {
    kind: 'Archivage des documents · Algérie · 2027', title: "Comment archiver des documents en entreprise en Algérie (2027) : papier et numérique, des armoires qui débordent et des fichiers nommés « scan0001 », une demi-journée pour retrouver un contrat, plan de classement, nom des fichiers, numérisation, recherche dans le texte",
    dek: "« Nos armoires débordent de classeurs, le dossier partagé contient des milliers de fichiers nommés “scan0001” ou “facture finale (2)”, et quand la banque ou un client demande un contrat de 2021, on met une demi-journée à le retrouver, quand on le retrouve. Comment archiver des documents, papier et numériques, pour retrouver n'importe lequel en une minute ? » Archiver n'est pas ranger : c'est décider, pour chaque document, son nom, sa fiche, sa place et qui peut le voir, puis pouvoir chercher dans son texte. Cela commence par un essai : dix documents, un chronomètre.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Archivage des documents', 'Gestion électronique des documents', 'Numérisation', 'Nommage des fichiers', 'Recherche dans le texte', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Archiver, ce n'est pas ranger : c'est décider, pour chaque document, **son nom, sa fiche, sa place et qui peut le voir**, puis pouvoir chercher dans son texte. Commencez par un essai : dix documents tirés au hasard, un chronomètre. Puis quatre gestes, dans cet ordre : **un plan de classement** de dix à quinze types ; **une règle de nommage**, la date en tête, écrite année-mois-jour ; **le papier trié en trois piles**, dont une seule se numérise ; **la recherche dans le texte**, y compris dans les pages numérisées. Une copie hors du bâtiment, un responsable nommé, et l'essai refait à la fin. Huit semaines dans l'exemple.",
      "Cette page s'adresse au gérant dont les armoires et le dossier partagé ont grossi sans règle, et au fondateur installé en France qui a besoin, le jour même, d'un contrat ou d'une facture rangés quelque part en Algérie. Les définitions viennent de sources publiques : système de gestion de documents, métadonnées, reconnaissance optique de caractères, recherche en texte intégral, format PDF/A, norme ISO 8601, règle 3-2-1, préservation numérique, et la documentation d'un moteur de reconnaissance pour la résolution conseillée. L'entreprise de 25 personnes, ses six armoires, ses dix documents, ses 40 000 pages et son calendrier sont un exemple construit. Cette page ne donne aucune durée légale de conservation et ne traite pas de la valeur d'une copie numérique : ces règles dépendent du type de document, demandez-les à votre expert-comptable ou à votre conseil. Le partage des fichiers au quotidien, serveur, NAS ou cloud, est l'objet d'[un autre guide](" + L.partage + ").",
    ],
    sections: [
      { heading: "Dix documents à retrouver : l'essai avant toute décision", body: [
        "La figure montre le même essai, avant et après.",
      ], visual: 'essai', after: [
        "**L'essai.** Écrivez dix documents sur dix papiers : une facture fournisseur d'un mois précis, un contrat, un bon de livraison signé, un procès-verbal, une garantie. Tirez-les un par un, lancez un chronomètre, et laissez chercher la personne qui cherche d'habitude. Notez le temps, et ce qui n'est pas retrouvé. Dans l'exemple : sept sur dix, 78 minutes au total, et trois documents jamais retrouvés, dont la garantie d'une machine. **Ce que l'essai dit.** Où part le temps : dans les armoires, dans le dossier partagé, dans les boîtes mail. Et ce qui manque : un document introuvable est un document à refaire, à redemander, ou une garantie perdue.",
        "**Ce qu'est un outil d'archivage.** Un système de gestion de documents est un système informatique utilisé pour stocker, partager, suivre et gérer des fichiers électroniques. Il garde en général, pour chaque document, des métadonnées, des données qui décrivent d'autres données : la date d'entrée, la personne qui l'a déposé. Mais l'outil vient en dernier. **L'ordre.** D'abord l'essai, puis le plan de classement et la règle de nommage, qui demandent une semaine de réflexion et aucun achat ; l'outil ne fait qu'appliquer ce qui a été décidé.",
      ] },
      { heading: "Un nom de fichier qui se retrouve", body: [
        "La figure montre le même document sous quatre noms.",
      ], visual: 'nom', after: [
        "**La date en tête.** Dans la norme ISO 8601, les valeurs de date sont ordonnées de la plus grande unité à la plus petite, année, mois, jour, de sorte que l'ordre alphabétique des noms correspond à l'ordre chronologique. Un dossier de factures nommées ainsi se trie tout seul. La date est celle du document, pas celle du jour où on l'a numérisé. **Une liste fermée.** Dix à quinze types, pas plus, écrits toujours de la même façon : facture, contrat, devis, bon de livraison, courrier, procès-verbal. Si deux personnes hésitent entre deux mots, la liste est trop longue.",
        "**Le tiers et le numéro.** Le code du client ou du fournisseur est celui du logiciel de gestion : une seule orthographe, et un lien possible entre l'archive et le logiciel. Le numéro est celui qui est imprimé sur la pièce. **La longueur.** Gardez des noms courts et des dossiers peu profonds : beaucoup d'applications Windows sont limitées à 260 caractères pour le chemin complet d'un fichier, dossiers compris. **La version.** Un chiffre, jamais un adjectif ; l'historique complet, lui, est le travail de l'outil, qui note chaque sortie et chaque retour d'un document.",
      ] },
      { heading: "Une archive, en cinq couches", body: [
        "La couche accentuée est la fiche.",
      ], visual: 'couches', after: [
        "**La recherche dans le texte.** La reconnaissance optique de caractères convertit l'image d'un texte en texte : une page numérisée devient cherchable par ses mots, et plus seulement par son nom. La recherche en texte intégral désigne les techniques qui cherchent dans le contenu des documents eux-mêmes. Pour un fonds en français et en arabe, la reconnaissance doit lire les deux : le moteur libre Tesseract, par exemple, annonce plus de cent langues, dont l'arabe ; la qualité se vérifie sur vos propres pages, tampons et écritures compris. Chercher en deux langues pose les mêmes questions que dans [la recherche d'une application](" + L.recherche + ").",
        "**Les droits.** Un contrat de travail, un relevé bancaire et un bon de livraison ne se montrent pas aux mêmes personnes. Les droits se donnent par type de document, pas dossier par dossier au fil de l'eau, selon les principes du [guide sur les rôles et le journal d'audit](" + L.roles + "). **La durée.** La préservation numérique vise à ce qu'une information reste accessible et utilisable à long terme. Deux règles : un format fait pour durer, PDF/A, version du PDF normalisée par l'ISO pour l'archivage, qui écarte ce qui gêne la lecture future et impose d'incorporer les polices ; et la règle 3-2-1, trois copies, sur deux types de supports, dont une hors du bâtiment, comme dans [le guide sur les sauvegardes](" + L.sauvegarde + ").",
      ] },
      { heading: "Numériser le papier, en six temps", body: [
        "Le premier temps est accentué : trier.",
      ], visual: 'etapes', after: [
        "**Trois piles.** Le papier actif, qu'on consulte encore : il se numérise et s'indexe. Le papier à garder sans le consulter : il va en boîtes numérotées, et c'est la boîte qu'on indexe, pas chaque page. Le papier qui n'a plus à être gardé : il sort, selon un calendrier de conservation, le document qui dit combien de temps chaque type de pièce doit être gardé avant de pouvoir être détruit. Ces durées ne s'inventent pas : demandez-les à votre conseil. Dans l'exemple, un tiers des six armoires est actif : 40 000 pages.",
        "**La qualité.** Le moteur de reconnaissance cité plus haut indique qu'il fonctionne au mieux sur des images d'au moins 300 points par pouce : en dessous, le texte se lit mal et la recherche échoue en silence. **Le rythme.** Dans l'exemple, deux personnes préparent, numérisent, indexent et contrôlent 2 000 pages par jour : quatre semaines pour la pile active. **Le contrôle.** Un lot sur dix est rouvert : pages manquantes, pages à l'envers, texte illisible. L'original reçoit son numéro de boîte, inscrit dans la fiche : le jour où il faut le papier, on sait où il est. **Aller plus loin.** Lire automatiquement le montant ou le numéro d'une facture numérisée relève de [l'extraction par l'IA](" + L.ia + "), utile quand les volumes le justifient.",
      ] },
      { heading: "Dossier partagé bien tenu, ou outil d'archivage ?", body: [
        "La figure compare les deux, sur six points.",
      ], visual: 'outil', after: [
        "**Souvent, le dossier suffit.** Avec un plan de classement, une règle de nommage et des droits par dossier, un dossier partagé bien tenu règle la plupart des recherches d'une petite entreprise. C'est le premier palier, et il ne demande aucun achat. **Quand l'outil se justifie.** Quand il faut chercher dans le texte de pages numérisées, donner des droits par type de document, garder l'historique des versions, ou savoir qui a consulté quoi. L'index existe pour cela : il sert avant tout à interroger et à retrouver.",
        "**Trois familles.** Un logiciel de gestion de documents du marché ; les fonctions de bibliothèque de la suite bureautique que vous utilisez déjà ; ou un module d'archive ajouté à votre application de gestion, quand les documents doivent s'ouvrir depuis la fiche du client ou de la commande. **Les voisins.** L'archive n'est pas l'intranet, où l'on publie les notes et les procédures en vigueur, décrit dans [le guide sur l'intranet](" + L.intranet + ") ; ni l'espace client, où chaque client retrouve ses propres pièces, décrit dans [le guide sur l'espace client](" + L.espace + "). Elle peut les alimenter tous les deux.",
      ] },
      { heading: "Huit semaines, du premier essai au second, en 2027", body: [
        "Huit semaines dans l'exemple, dont la première pour l'essai et l'inventaire.",
      ], visual: 'calendrier', after: [
        "**Le numérique d'abord, le papier en même temps.** Le dossier partagé se reprend par lots : les dossiers de l'année en cours d'abord, puis en remontant. On renomme, on déplace, on supprime les doublons ; ce qui n'a pas été ouvert depuis des années part dans un dossier « ancien », sans être renommé. La pile active de papier se numérise pendant ce temps. **La règle, dès le début.** Tout document nouveau suit la règle dès la deuxième semaine : sinon le stock à reprendre grossit pendant qu'on le range.",
        "**Le second essai.** Les mêmes dix documents, le même chronomètre, la même personne. Dans l'exemple : dix sur dix, moins de six minutes au total. **Ce qui fait durer.** Un responsable nommé, qui tient la liste des types et tranche les hésitations ; la règle affichée ; et l'essai refait deux fois par an, avec dix autres documents.",
      ], list: [
        "**Ce que le gérant reçoit** : le résultat de l'essai, avant et après ; un plan de classement de dix à quinze types ; une règle de nommage sur une demi-page ; le dossier partagé repris ; le papier actif numérisé, lu et indexé ; les boîtes numérotées ; des droits par type de document ; une copie hors du bâtiment.",
        "**Ce que l'entreprise ne fait plus** : chercher une demi-journée un contrat, refaire un document qu'elle possède déjà, nommer un fichier « final (2) », numériser une armoire entière sans l'avoir triée, laisser les contrats de travail lisibles par tous.",
        "**Ce qui est mesuré** : documents retrouvés sur dix et temps par document, pages numérisées et contrôlées par jour, fichiers qui suivent la règle de nommage, documents sans fiche, date de la dernière copie hors site.",
        "**Ce que fait Symloop** : l'essai et l'inventaire, le plan de classement et la règle de nommage avec vos équipes, la reprise du dossier partagé, l'organisation de la numérisation et de la reconnaissance du texte en français et en arabe, la recherche, les droits, la copie hors site, puis, si les six points le justifient, la mise en place d'un outil ou d'un module d'archive relié à votre application.",
      ], faq: [
        { q: "Comment archiver des documents ?", a: "Dans cet ordre : un essai de dix documents pour mesurer, un plan de classement de dix à quinze types, une règle de nommage avec la date en tête, des droits par type de document, la recherche dans le texte, et une copie hors du bâtiment. L'outil vient après ces décisions." },
        { q: "Comment archiver des documents papier ?", a: "En trois piles. Le papier encore consulté se numérise, se lit par reconnaissance de caractères et s'indexe. Le papier à garder sans le consulter va en boîtes numérotées, indexées à la boîte. Le reste sort, selon des durées à demander à votre conseil." },
        { q: "Comment archiver des documents numériques ?", a: "Avec un nom construit, type, date, tiers, numéro, version, un dossier par type, et un format durable comme PDF/A pour ce qui doit se relire dans dix ans. Reprenez d'abord l'année en cours, appliquez la règle à tout document nouveau, puis remontez par lots." },
        { q: "Comment nommer les fichiers ?", a: "La date d'abord, écrite année-mois-jour, puis le type, le code du tiers, le numéro de la pièce et la version en chiffres, séparés par des tirets bas, sans accent ni espace. Exemple : 2027-03-14_facture_client-0418_F-2291_v2.pdf." },
        { q: "Faut-il tout numériser ?", a: "Non. On numérise ce qu'on consulte encore. Le reste se garde en boîtes numérotées, avec le numéro inscrit dans l'index, et se numérise à la demande le jour où quelqu'un en a besoin. Trier avant de numériser divise le travail par trois dans l'exemple." },
        { q: "Peut-on jeter le papier après l'avoir numérisé ?", a: "Cela dépend du type de document et de règles qui ne relèvent pas de cette page : demandez à votre expert-comptable ou à votre conseil avant de détruire quoi que ce soit. Par défaut, gardez l'original en boîte numérotée, avec le numéro inscrit dans sa fiche." },
        { q: "Combien de temps garder les documents ?", a: "Cette page ne donne aucune durée : elles dépendent du type de pièce, et c'est à votre conseil de les fixer. Ce que l'archive doit faire, c'est porter une durée par type de document et signaler ce qui arrive à échéance." },
        { q: "Faut-il un logiciel d'archivage, une GED ?", a: "Pas toujours. Un dossier partagé bien tenu suffit à beaucoup de petites entreprises. L'outil se justifie quand il faut chercher dans le texte de pages numérisées, donner des droits par type de document, garder l'historique des versions ou savoir qui a consulté quoi." },
        { q: "Peut-on chercher dans un document numérisé, en arabe et en français ?", a: "Oui, si les pages ont été lues par reconnaissance optique de caractères dans les deux langues, à partir d'images d'au moins 300 points par pouce. Vérifiez la qualité sur vos propres pages : tampons, tableaux et écritures manuscrites se lisent moins bien." },
        { q: "Combien de temps prend un projet d'archivage ?", a: "Huit semaines dans l'exemple de cette page, pour 25 personnes : une pour l'essai et l'inventaire, une pour le plan et la règle, puis la reprise du numérique et la numérisation de 40 000 pages en parallèle, et un second essai pour finir." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "Un bon nom se lit sans ouvrir le fichier." },
      { after: 3, text: "On ne numérise pas une armoire : on numérise la pile active." },
    ],
    cta: { eyebrow: "Dites-nous combien d'armoires, combien de fichiers et qui cherche d'habitude : nous commençons par l'essai des dix documents", title: "Armoires qui débordent, dossier partagé illisible, contrat introuvable le jour où la banque le demande, ou fondateur en France qui veut ouvrir une pièce rangée en Algérie : nous mesurons, nous écrivons le plan et la règle, puis nous rangeons et numérisons avec vos équipes", body: "Essai chronométré, plan de classement, règle de nommage, reprise du dossier partagé, numérisation et reconnaissance du texte en français et en arabe, recherche, droits par type de document, copie hors site, second essai. Nous travaillons depuis Alger et Sétif, en français, en arabe et en anglais." },
    related: { label: 'À lire aussi', items: [
      { href: L.partage, kind: '2027', name: 'Partage de fichiers : serveur, NAS ou cloud, droits par dossier' },
      { href: L.intranet, kind: '2027', name: 'Créer un intranet : notes, documents, annuaire, demandes' },
      { href: L.espace, kind: '2027', name: 'Créer un espace client : dossiers, documents, factures' },
      { href: L.sauvegarde, kind: '2027', name: 'Si le serveur meurt demain : sauvegardes et restauration testée' },
    ] },
  },
  en: {
    kind: 'Document archiving · Algeria · 2027', title: "How to archive documents in a company in Algeria (2027): paper and digital, overflowing cabinets and files named “scan0001”, half a day to find a contract, filing plan, file names, scanning, search inside the text",
    dek: "“Our cabinets are overflowing with binders, the shared folder holds thousands of files named ‘scan0001’ or ‘invoice final (2)’, and when the bank or a customer asks for a contract from 2021, it takes us half a day to find it, when we find it. How do you archive documents, paper and digital, so that any of them can be found in a minute?” Archiving is not tidying: it is deciding, for each document, its name, its record, its place and who may see it, then being able to search inside its text. It starts with a test: ten documents, a stopwatch.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Document archiving', 'Document management', 'Scanning', 'File naming', 'Search inside the text', 'Algeria 2027'],
    intro: [
      "**Short answer.** Archiving is not tidying: it is deciding, for each document, **its name, its record, its place and who may see it**, then being able to search inside its text. Start with a test: ten documents drawn at random, a stopwatch. Then four moves, in this order: **a filing plan** of ten to fifteen types; **a naming rule**, with the date first, written year-month-day; **paper sorted into three piles**, only one of which is scanned; **search inside the text**, including scanned pages. A copy outside the building, a named owner, and the test run again at the end. Eight weeks in the example.",
      "This page is for the manager whose cabinets and shared folder have grown without a rule, and for the founder based in France who needs, the same day, a contract or an invoice stored somewhere in Algeria. The definitions come from public sources: document management system, metadata, optical character recognition, full-text search, the PDF/A format, the ISO 8601 standard, the 3-2-1 rule, digital preservation, and the documentation of a recognition engine for the advised resolution. The company of 25 people, its six cabinets, its ten documents, its 40,000 pages and its calendar are a constructed example. This page gives no legal keeping period and does not cover the standing of a digital copy: those rules depend on the type of document, so ask your accountant or adviser. Everyday file sharing, server, NAS or cloud, is the subject of [another guide](" + L.partage + ").",
    ],
    sections: [
      { heading: "Ten documents to find again: the test before any decision", body: [
        "The figure shows the same test, before and after.",
      ], visual: 'essai', after: [
        "**The test.** Write ten documents on ten slips of paper: a supplier invoice for a given month, a contract, a signed delivery note, a report, a warranty. Draw them one by one, start a stopwatch, and let the person who usually searches do the searching. Note the time, and what is not found. In the example: seven out of ten, 78 minutes in all, and three documents never found, including a machine warranty. **What the test says.** Where the time goes: in the cabinets, in the shared folder, in mailboxes. And what is missing: a document that cannot be found is a document to redo, to ask for again, or a lost warranty.",
        "**What an archiving tool is.** A document management system is a computerized system used to store, share, track and manage electronic files. It typically stores, for each document, metadata, data that describes other data: the date it was stored, the identity of the user who stored it. But the tool comes last. **The order.** First the test, then the filing plan and the naming rule, which take a week of thought and no purchase; the tool only applies what has been decided.",
      ] },
      { heading: "A file name that can be found again", body: [
        "The figure shows the same document under four names.",
      ], visual: 'nom', after: [
        "**The date first.** In the ISO 8601 standard, date values are ordered from the largest to the smallest unit of time, year, month, day, so that the lexicographical order of names corresponds to chronological order. A folder of invoices named this way sorts itself. The date is that of the document, not of the day it was scanned. **A closed list.** Ten to fifteen types, no more, always written the same way: invoice, contract, quote, delivery note, letter, report. If two people hesitate between two words, the list is too long.",
        "**The third party and the number.** The customer or supplier code is the one in the management software: a single spelling, and a possible link between the archive and the software. The number is the one printed on the document. **Length.** Keep names short and folders shallow: many Windows applications are limited to 260 characters for the full path of a file, folders included. **The version.** A figure, never an adjective; the full history is the tool's job, which records each time a document is checked out and back in.",
      ] },
      { heading: "An archive, in five layers", body: [
        "The accented layer is the record.",
      ], visual: 'couches', after: [
        "**Search inside the text.** Optical character recognition converts the image of a text into text: a scanned page becomes searchable by its words, and no longer only by its name. Full-text search refers to the techniques that search the content of the documents themselves. For holdings in French and Arabic, recognition must read both: the open-source engine Tesseract, for example, announces more than a hundred languages, Arabic among them; quality is checked on your own pages, stamps and handwriting included. Searching in two languages raises the same questions as [search in an application](" + L.recherche + ").",
        "**Rights.** An employment contract, a bank statement and a delivery note are not shown to the same people. Rights are given by type of document, not folder by folder as you go, following the principles of [the guide to roles and the audit log](" + L.roles + "). **Time.** Digital preservation aims to keep information accessible and usable in the long term. Two rules: a format made to last, PDF/A, the ISO-standardized version of PDF for archiving, which prohibits what hinders future reading and requires fonts to be embedded; and the 3-2-1 rule, three copies, on two types of storage media, one of them off-site, as in [the guide to backups](" + L.sauvegarde + ").",
      ] },
      { heading: "Scanning the paper, in six steps", body: [
        "The first step is accented: sort.",
      ], visual: 'etapes', after: [
        "**Three piles.** Active paper, still consulted: it is scanned and indexed. Paper to keep without consulting it: it goes into numbered boxes, and it is the box that is indexed, not each page. Paper that no longer has to be kept: it leaves, following a retention schedule, the document that says how long each type of record must be kept before it can be destroyed. Those periods are not invented: ask your adviser. In the example, a third of the six cabinets is active: 40,000 pages.",
        "**Quality.** The recognition engine mentioned above states that it works best on images of at least 300 dots per inch: below that, the text is read badly and search fails silently. **The pace.** In the example, two people prepare, scan, index and check 2,000 pages a day: four weeks for the active pile. **The check.** One batch in ten is reopened: missing pages, pages upside down, unreadable text. The original receives its box number, written in the record: the day the paper is needed, you know where it is. **Going further.** Reading the amount or the number of a scanned invoice automatically belongs to [extraction by AI](" + L.ia + "), useful when volumes justify it.",
      ] },
      { heading: "A well-kept shared folder, or an archiving tool?", body: [
        "The figure compares the two, on six points.",
      ], visual: 'outil', after: [
        "**Often, the folder is enough.** With a filing plan, a naming rule and rights by folder, a well-kept shared folder settles most searches in a small company. It is the first level, and it requires no purchase. **When the tool is justified.** When you must search inside the text of scanned pages, give rights by type of document, keep the history of versions, or know who consulted what. That is what the index is for: it exists mainly to support query and retrieval.",
        "**Three families.** A document management package on the market; the library functions of the office suite you already use; or an archive module added to your management application, when documents must open from the customer's or the order's record. **The neighbours.** The archive is not the intranet, where current notes and procedures are published, described in [the guide to the intranet](" + L.intranet + "); nor the customer area, where each customer finds their own documents, described in [the guide to the customer area](" + L.espace + "). It can feed both.",
      ] },
      { heading: "Eight weeks, from the first test to the second, in 2027", body: [
        "Eight weeks in the example, the first for the test and the inventory.",
      ], visual: 'calendrier', after: [
        "**Digital first, paper at the same time.** The shared folder is taken up in batches: the current year's folders first, then going back. Files are renamed, moved, duplicates removed; what has not been opened for years goes into an “old” folder, without being renamed. The active pile of paper is scanned meanwhile. **The rule, from the start.** Every new document follows the rule from the second week: otherwise the stock to take up grows while it is being tidied.",
        "**The second test.** The same ten documents, the same stopwatch, the same person. In the example: ten out of ten, under six minutes in all. **What makes it last.** A named owner, who keeps the list of types and settles hesitations; the rule displayed; and the test run again twice a year, with ten other documents.",
      ], list: [
        "**What the manager receives**: the result of the test, before and after; a filing plan of ten to fifteen types; a naming rule on half a page; the shared folder taken up; the active paper scanned, read and indexed; the numbered boxes; rights by type of document; a copy outside the building.",
        "**What the company no longer does**: spend half a day looking for a contract, redo a document it already has, name a file “final (2)”, scan a whole cabinet without sorting it, leave employment contracts readable by everyone.",
        "**What is measured**: documents found out of ten and time per document, pages scanned and checked per day, files that follow the naming rule, documents with no record, date of the last off-site copy.",
        "**What Symloop does**: the test and the inventory, the filing plan and the naming rule with your teams, taking up the shared folder, organising scanning and text recognition in French and Arabic, search, rights, the off-site copy, then, if the six points justify it, setting up a tool or an archive module connected to your application.",
      ], faq: [
        { q: "How do you archive documents?", a: "In this order: a test of ten documents to measure, a filing plan of ten to fifteen types, a naming rule with the date first, rights by type of document, search inside the text, and a copy outside the building. The tool comes after these decisions." },
        { q: "How do you archive paper documents?", a: "In three piles. Paper still consulted is scanned, read by character recognition and indexed. Paper to keep without consulting goes into numbered boxes, indexed by box. The rest leaves, following periods to ask your adviser for." },
        { q: "How do you archive digital documents?", a: "With a built name, type, date, third party, number, version, a folder per type, and a lasting format such as PDF/A for what must be read again in ten years. Take up the current year first, apply the rule to every new document, then go back in batches." },
        { q: "How should files be named?", a: "The date first, written year-month-day, then the type, the third party's code, the document number and the version in figures, separated by underscores, with no accent or space. Example: 2027-03-14_invoice_customer-0418_F-2291_v2.pdf." },
        { q: "Must everything be scanned?", a: "No. Scan what is still consulted. The rest is kept in numbered boxes, with the number written in the index, and scanned on demand the day someone needs it. Sorting before scanning divides the work by three in the example." },
        { q: "Can the paper be thrown away once scanned?", a: "It depends on the type of document and on rules outside this page: ask your accountant or adviser before destroying anything. By default, keep the original in a numbered box, with the number written in its record." },
        { q: "How long should documents be kept?", a: "This page gives no period: they depend on the type of record, and it is for your adviser to set them. What the archive must do is carry a period per type of document and flag what reaches its term." },
        { q: "Do we need archiving software, a document management system?", a: "Not always. A well-kept shared folder is enough for many small companies. The tool is justified when you must search inside the text of scanned pages, give rights by type of document, keep the history of versions or know who consulted what." },
        { q: "Can a scanned document be searched, in Arabic and in French?", a: "Yes, if the pages were read by optical character recognition in both languages, from images of at least 300 dots per inch. Check the quality on your own pages: stamps, tables and handwriting are read less well." },
        { q: "How long does an archiving project take?", a: "Eight weeks in this page's example, for 25 people: one for the test and the inventory, one for the plan and the rule, then taking up the digital files and scanning 40,000 pages in parallel, and a second test to finish." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "A good name is read without opening the file." },
      { after: 3, text: "You do not scan a cabinet: you scan the active pile." },
    ],
    cta: { eyebrow: "Tell us how many cabinets, how many files and who usually does the searching: we start with the ten-document test", title: "Overflowing cabinets, an unreadable shared folder, a contract that cannot be found the day the bank asks for it, or a founder in France who wants to open a document stored in Algeria: we measure, we write the plan and the rule, then we tidy and scan with your teams", body: "Timed test, filing plan, naming rule, taking up the shared folder, scanning and text recognition in French and Arabic, search, rights by type of document, off-site copy, second test. We work from Algiers and Sétif, in French, Arabic and English." },
    related: { label: 'Also read', items: [
      { href: L.partage, kind: '2027', name: 'File sharing: server, NAS or cloud, rights by folder' },
      { href: L.intranet, kind: '2027', name: 'Creating an intranet: notes, documents, directory, requests' },
      { href: L.espace, kind: '2027', name: 'Creating a customer area: files, documents, invoices' },
      { href: L.sauvegarde, kind: '2027', name: 'If the server dies tomorrow: backups and a tested restore' },
    ] },
  },
  ar: {
    kind: 'أرشفة الوثائق · الجزائر · 2027', title: "كيف تُؤرشَف الوثائق في المؤسسة في الجزائر (2027): ورق ورقمي، خزائن ممتلئة وملفات بأسماء آلية، نصف يوم لإيجاد عقد، خطة التصنيف، أسماء الملفات، الرقمنة، والبحث داخل النص",
    dek: "«خزائننا ممتلئة بالملفات الورقية، المجلد المشترك يحتوي آلاف الملفات بأسماء آلية أو فيها كلمة «نهائي» مرتين، وحين يطلب البنك أو زبون عقداً من سنة 2021، نقضي نصف يوم في البحث عنه، هذا إن وجدناه. كيف تُؤرشَف الوثائق، الورقية والرقمية، حتى تُوجد أي واحدة في دقيقة؟» الأرشفة ليست ترتيباً: هي أن يُقرَّر، لكل وثيقة، اسمها وبطاقتها ومكانها ومن يراها، ثم أن يُبحث داخل نصها. وتبدأ بتجربة: عشر وثائق، وساعة توقيت.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['أرشفة الوثائق', 'التسيير الإلكتروني للوثائق', 'الرقمنة', 'تسمية الملفات', 'البحث داخل النص', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** الأرشفة ليست ترتيباً: هي أن يُقرَّر، لكل وثيقة، **اسمها وبطاقتها ومكانها ومن يراها**، ثم أن يُبحث داخل نصها. ابدؤوا بتجربة: عشر وثائق مسحوبة عشوائياً، وساعة توقيت. ثم أربع خطوات، بهذا الترتيب: **خطة تصنيف** من عشرة إلى خمسة عشر نوعاً؛ **قاعدة تسمية**، التاريخ في المقدمة، مكتوباً سنة ثم شهراً ثم يوماً؛ **ورق يُفرز في ثلاث أكوام**، واحدة منها فقط تُرقمَن؛ و**بحث داخل النص**، حتى في الصفحات الممسوحة. نسخة خارج المبنى، مسؤول معيَّن، والتجربة تُعاد في الأخير. ثمانية أسابيع في المثال.",
      "هذه الصفحة موجَّهة إلى المسيّر الذي كبرت خزائنه ومجلده المشترك دون قاعدة، وإلى المؤسس المقيم في فرنسا الذي يحتاج، في اليوم نفسه، عقداً أو فاتورة محفوظة في مكان ما بالجزائر. التعريفات آتية من مصادر علنية: نظام تسيير الوثائق، البيانات الوصفية، التعرّف الضوئي على الحروف، البحث في النص الكامل، صيغة " + I('PDF/A') + "، معيار " + I('ISO 8601') + "، قاعدة " + I('3-2-1') + "، الحفظ الرقمي، ووثائق محرّك تعرّف بخصوص الدقة المنصوح بها. المؤسسة ذات 25 شخصاً وخزائنها الست ووثائقها العشر وصفحاتها الـ 40000 ورزنامتها مثال مركَّب. هذه الصفحة لا تعطي أي مدة حفظ قانونية ولا تتناول قيمة النسخة الرقمية: هذه القواعد تتوقف على نوع الوثيقة، فاسألوا عنها محاسبكم أو مستشاركم. وتقاسم الملفات اليومي، خادم أو تخزين شبكي أو سحابة، موضوع [دليل آخر](" + L.partage + ").",
    ],
    sections: [
      { heading: "عشر وثائق تُسترجع: التجربة قبل أي قرار", body: [
        "الشكل يُظهر التجربة نفسها، قبل وبعد.",
      ], visual: 'essai', after: [
        "**التجربة.** اكتبوا عشر وثائق على عشر ورقات: فاتورة مورّد لشهر محدَّد، عقد، وصل تسليم موقَّع، محضر، ضمان. اسحبوها واحدة واحدة، شغّلوا ساعة توقيت، واتركوا الشخص الذي يبحث عادةً يبحث. سجّلوا الوقت، وما لم يُوجد. في المثال: سبع من عشر، 78 دقيقة إجمالاً، وثلاث وثائق لم تُوجد أبداً، منها ضمان آلة. **ما تقوله التجربة.** أين يذهب الوقت: في الخزائن، في المجلد المشترك، وفي صناديق البريد. وما ينقص: الوثيقة التي لا تُوجد وثيقة تُعاد، أو تُطلب من جديد، أو ضمان ضائع.",
        "**ما هي أداة الأرشفة.** نظام تسيير الوثائق نظام معلوماتي يُستعمل لتخزين الملفات الإلكترونية وتقاسمها وتتبّعها وتسييرها. ويحفظ عادةً، لكل وثيقة، بيانات وصفية، أي بيانات تصف بيانات أخرى: تاريخ الدخول، والشخص الذي أودعها. لكن الأداة تأتي في الأخير. **الترتيب.** التجربة أولاً، ثم خطة التصنيف وقاعدة التسمية، وهما تتطلبان أسبوعاً من التفكير ولا تتطلبان أي شراء؛ والأداة تطبّق فقط ما تقرَّر.",
      ] },
      { heading: "اسم ملف يُسترجع", body: [
        "الشكل يُظهر الوثيقة نفسها بأربعة أسماء.",
      ], visual: 'nom', after: [
        "**التاريخ في المقدمة.** في معيار " + I('ISO 8601') + "، قيم التاريخ مرتَّبة من أكبر وحدة إلى أصغرها، السنة ثم الشهر ثم اليوم، بحيث يوافق الترتيب الأبجدي للأسماء الترتيب الزمني. ومجلد فواتير مسمّاة هكذا يترتَّب وحده. والتاريخ هو تاريخ الوثيقة، لا تاريخ يوم مسحها. **قائمة مغلقة.** من عشرة إلى خمسة عشر نوعاً، لا أكثر، تُكتب دائماً بالطريقة نفسها: فاتورة، عقد، عرض سعر، وصل تسليم، رسالة، محضر. وإذا تردّد شخصان بين كلمتين، فالقائمة طويلة جداً.",
        "**الطرف والرقم.** رمز الزبون أو المورّد هو الذي في برنامج التسيير: كتابة واحدة، ورابط ممكن بين الأرشيف والبرنامج. والرقم هو المطبوع على الوثيقة. **الطول.** احتفظوا بأسماء قصيرة ومجلدات قليلة العمق: تطبيقات كثيرة في " + I('Windows') + " محدودة بـ 260 حرفاً للمسار الكامل للملف، والمجلدات محسوبة. **النسخة.** رقم، لا صفة أبداً؛ والتاريخ الكامل عمل الأداة، التي تسجّل كل خروج للوثيقة وكل رجوع.",
      ] },
      { heading: "الأرشيف، في خمس طبقات", body: [
        "الطبقة المبرزة هي البطاقة.",
      ], visual: 'couches', after: [
        "**البحث داخل النص.** التعرّف الضوئي على الحروف يحوّل صورة نص إلى نص: الصفحة الممسوحة تصير قابلة للبحث بكلماتها، لا باسمها فقط. والبحث في النص الكامل يعني التقنيات التي تبحث في محتوى الوثائق نفسها. ولرصيد بالفرنسية والعربية، يجب أن يقرأ التعرّف اللغتين: المحرّك الحر " + I('Tesseract') + "، مثلاً، يعلن أكثر من مئة لغة، منها العربية؛ والجودة تُراجَع على صفحاتكم أنتم، بأختامها وخطوطها اليدوية. والبحث بلغتين يطرح الأسئلة نفسها التي في [البحث داخل تطبيق](" + L.recherche + ").",
        "**الصلاحيات.** عقد العمل وكشف البنك ووصل التسليم لا تُعرض على الأشخاص أنفسهم. والصلاحيات تُمنح حسب نوع الوثيقة، لا مجلداً بعد مجلد كيفما اتفق، وفق مبادئ [دليل الأدوار وسجل التدقيق](" + L.roles + "). **المدة.** الحفظ الرقمي يهدف إلى أن تبقى المعلومة متاحة وقابلة للاستعمال على المدى الطويل. وقاعدتان: صيغة مصنوعة لتدوم، " + I('PDF/A') + "، وهي نسخة من " + I('PDF') + " معيارية للأرشفة، تمنع ما يعيق القراءة مستقبلاً وتفرض إدراج الخطوط؛ وقاعدة " + I('3-2-1') + "، ثلاث نسخ، على نوعين من الدعائم، واحدة منها خارج المبنى، كما في [دليل النسخ الاحتياطية](" + L.sauvegarde + ").",
      ] },
      { heading: "رقمنة الورق، في ست مراحل", body: [
        "المرحلة الأولى مبرزة: الفرز.",
      ], visual: 'etapes', after: [
        "**ثلاث أكوام.** الورق النشِط، الذي ما زال يُراجَع: يُرقمَن ويُفهرَس. الورق الذي يُحفظ دون مراجعته: يذهب إلى علب مرقَّمة، والعلبة هي التي تُفهرَس، لا كل صفحة. والورق الذي لم يعد حفظه لازماً: يخرج، وفق جدول مدد الحفظ، وهو الوثيقة التي تقول كم يجب أن يُحفظ كل نوع قبل إمكان إتلافه. وهذه المدد لا تُخترَع: اسألوا عنها مستشاركم. في المثال، ثلث الخزائن الست نشِط: 40000 صفحة.",
        "**الجودة.** محرّك التعرّف المذكور أعلاه يذكر أنه يعمل أحسن على صور بدقة 300 نقطة في البوصة على الأقل: وتحتها، يُقرأ النص بصعوبة ويفشل البحث في صمت. **الوتيرة.** في المثال، شخصان يحضّران ويمسحان ويفهرسان ويراقبان 2000 صفحة في اليوم: أربعة أسابيع للكومة النشِطة. **المراقبة.** دفعة من عشر تُفتح من جديد: صفحات ناقصة، صفحات مقلوبة، أو نص غير مقروء. والأصل يأخذ رقم علبته، مكتوباً في البطاقة: يوم يلزم الورق، يُعرف أين هو. **أبعد من ذلك.** قراءة مبلغ فاتورة ممسوحة أو رقمها آلياً تدخل في [الاستخراج بالذكاء الاصطناعي](" + L.ia + ")، وينفع حين تبرّره الأحجام.",
      ] },
      { heading: "مجلد مشترك محكم، أم أداة أرشفة؟", body: [
        "الشكل يقارن بينهما، في ست نقاط.",
      ], visual: 'outil', after: [
        "**غالباً، المجلد يكفي.** بخطة تصنيف، قاعدة تسمية، وصلاحيات حسب المجلد، المجلد المشترك المحكم يحلّ أغلب عمليات البحث في مؤسسة صغيرة. وهو الدرجة الأولى، ولا يتطلب أي شراء. **متى تتبرَّر الأداة.** حين يجب البحث داخل نص صفحات ممسوحة، منح صلاحيات حسب نوع الوثيقة، حفظ تاريخ النسخ، أو معرفة من اطّلع على ماذا. والفهرس موجود لهذا: يخدم قبل كل شيء الاستعلام والاسترجاع.",
        "**ثلاث عائلات.** برنامج تسيير وثائق من السوق؛ وظائف المكتبة في الحزمة المكتبية التي تستعملونها أصلاً؛ أو وحدة أرشيف مضافة إلى تطبيق التسيير عندكم، حين يجب أن تُفتح الوثائق من بطاقة الزبون أو الطلبية. **الجيران.** الأرشيف ليس الشبكة الداخلية، حيث تُنشر المذكرات والإجراءات السارية، الموصوفة في [دليل الشبكة الداخلية](" + L.intranet + ")؛ ولا فضاء الزبون، حيث يجد كل زبون وثائقه، الموصوف في [دليل فضاء الزبون](" + L.espace + "). ويستطيع أن يغذّي الاثنين.",
      ] },
      { heading: "ثمانية أسابيع، من التجربة الأولى إلى الثانية، سنة 2027", body: [
        "ثمانية أسابيع في المثال، والأول منها للتجربة والجرد.",
      ], visual: 'calendrier', after: [
        "**الرقمي أولاً، والورق في الوقت نفسه.** المجلد المشترك يُعالَج على دفعات: مجلدات السنة الجارية أولاً، ثم رجوعاً. تُعاد التسمية، يُنقل، وتُحذف المكرَّرات؛ وما لم يُفتح منذ سنوات يذهب إلى مجلد «قديم»، دون إعادة تسميته. والكومة النشِطة من الورق تُرقمَن في الأثناء. **القاعدة، من البداية.** كل وثيقة جديدة تتبع القاعدة من الأسبوع الثاني: وإلا كبر المخزون الذي يُعالَج بينما يُرتَّب.",
        "**التجربة الثانية.** الوثائق العشر نفسها، ساعة التوقيت نفسها، والشخص نفسه. في المثال: عشر من عشر، في أقل من ست دقائق إجمالاً. **ما يجعله يدوم.** مسؤول معيَّن، يمسك قائمة الأنواع ويحسم التردّد؛ القاعدة معلَّقة؛ والتجربة تُعاد مرتين في السنة، بعشر وثائق أخرى.",
      ], list: [
        "**ما يستلمه المسيّر**: نتيجة التجربة، قبل وبعد؛ خطة تصنيف من عشرة إلى خمسة عشر نوعاً؛ قاعدة تسمية في نصف صفحة؛ المجلد المشترك معالَجاً؛ الورق النشِط ممسوحاً، مقروءاً، ومفهرساً؛ العلب المرقَّمة؛ صلاحيات حسب نوع الوثيقة؛ ونسخة خارج المبنى.",
        "**ما لم تعد المؤسسة تفعله**: البحث نصف يوم عن عقد، إعادة وثيقة تملكها أصلاً، تسمية ملف «نهائي (2)»، رقمنة خزانة كاملة دون فرزها، وترك عقود العمل مقروءة للجميع.",
        "**ما يُقاس**: الوثائق الموجودة من عشر والوقت لكل وثيقة، الصفحات الممسوحة والمراقَبة في اليوم، الملفات التي تتبع قاعدة التسمية، الوثائق دون بطاقة، وتاريخ آخر نسخة خارج الموقع.",
        "**ما تفعله Symloop**: التجربة والجرد، خطة التصنيف وقاعدة التسمية مع فرقكم، معالجة المجلد المشترك، تنظيم الرقمنة والتعرّف على النص بالفرنسية والعربية، البحث، الصلاحيات، النسخة خارج الموقع، ثم، إذا برّرته النقاط الست، وضع أداة أو وحدة أرشيف مرتبطة بتطبيقكم.",
      ], faq: [
        { q: "كيف تُؤرشَف الوثائق؟", a: "بهذا الترتيب: تجربة بعشر وثائق للقياس، خطة تصنيف من عشرة إلى خمسة عشر نوعاً، قاعدة تسمية والتاريخ في المقدمة، صلاحيات حسب نوع الوثيقة، بحث داخل النص، ونسخة خارج المبنى. والأداة تأتي بعد هذه القرارات." },
        { q: "كيف تُؤرشَف الوثائق الورقية؟", a: "في ثلاث أكوام. الورق الذي ما زال يُراجَع يُمسح، يُقرأ بالتعرّف على الحروف، ويُفهرَس. والورق الذي يُحفظ دون مراجعة يذهب إلى علب مرقَّمة، مفهرسة بالعلبة. والباقي يخرج، وفق مدد تسألون عنها مستشاركم." },
        { q: "كيف تُؤرشَف الوثائق الرقمية؟", a: "باسم مبني، النوع والتاريخ والطرف والرقم والنسخة، مجلد لكل نوع، وصيغة تدوم مثل " + I('PDF/A') + " لما يجب أن يُقرأ بعد عشر سنوات. عالجوا السنة الجارية أولاً، طبّقوا القاعدة على كل وثيقة جديدة، ثم ارجعوا على دفعات." },
        { q: "كيف تُسمّى الملفات؟", a: "التاريخ أولاً، مكتوباً سنة ثم شهراً ثم يوماً، ثم النوع، رمز الطرف، رقم الوثيقة، والنسخة بالأرقام، مفصولة بشرطات سفلية، دون فراغ ولا حركات. والمثال في الشكل الثاني من هذه الصفحة." },
        { q: "هل يجب رقمنة كل شيء؟", a: "لا. يُرقمَن ما زال يُراجَع. والباقي يُحفظ في علب مرقَّمة، والرقم مكتوب في الفهرس، ويُرقمَن عند الطلب يوم يحتاجه أحد. والفرز قبل الرقمنة يقسم العمل على ثلاثة في المثال." },
        { q: "هل يمكن رمي الورق بعد رقمنته؟", a: "يتوقف على نوع الوثيقة وعلى قواعد خارج هذه الصفحة: اسألوا محاسبكم أو مستشاركم قبل إتلاف أي شيء. والأصل أن تحتفظوا بالنسخة الورقية في علبة مرقَّمة، والرقم مكتوب في بطاقتها." },
        { q: "كم من الوقت تُحفظ الوثائق؟", a: "هذه الصفحة لا تعطي أي مدة: المدد تتوقف على نوع الوثيقة، وتحديدها لمستشاركم. وما على الأرشيف أن يفعله هو حمل مدة لكل نوع من الوثائق والتنبيه إلى ما يبلغ أجله." },
        { q: "هل يلزم برنامج أرشفة؟", a: "ليس دائماً. مجلد مشترك محكم يكفي مؤسسات صغيرة كثيرة. والأداة تتبرَّر حين يجب البحث داخل نص صفحات ممسوحة، منح صلاحيات حسب نوع الوثيقة، حفظ تاريخ النسخ، أو معرفة من اطّلع على ماذا." },
        { q: "هل يمكن البحث في وثيقة ممسوحة، بالعربية والفرنسية؟", a: "نعم، إذا قُرئت الصفحات بالتعرّف الضوئي على الحروف باللغتين، انطلاقاً من صور بدقة 300 نقطة في البوصة على الأقل. وراجعوا الجودة على صفحاتكم: الأختام والجداول والخطوط اليدوية تُقرأ أقل جودة." },
        { q: "كم يأخذ مشروع أرشفة من وقت؟", a: "ثمانية أسابيع في مثال هذه الصفحة، لـ 25 شخصاً: أسبوع للتجربة والجرد، أسبوع للخطة والقاعدة، ثم معالجة الرقمي ورقمنة 40000 صفحة بالتوازي، وتجربة ثانية في الختام." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "الاسم الجيد يُقرأ دون فتح الملف." },
      { after: 3, text: "لا تُرقمَن خزانة: تُرقمَن الكومة النشِطة." },
    ],
    cta: { eyebrow: "قولوا لنا كم خزانة، كم ملفاً، ومن يبحث عادةً: نبدأ بتجربة الوثائق العشر", title: "خزائن ممتلئة، مجلد مشترك لا يُقرأ، عقد لا يُوجد يوم يطلبه البنك، أو مؤسس في فرنسا يريد فتح وثيقة محفوظة في الجزائر: نقيس، نكتب الخطة والقاعدة، ثم نرتّب ونرقمن مع فرقكم", body: "تجربة بالتوقيت، خطة تصنيف، قاعدة تسمية، معالجة المجلد المشترك، رقمنة وتعرّف على النص بالفرنسية والعربية، بحث، صلاحيات حسب نوع الوثيقة، نسخة خارج الموقع، وتجربة ثانية. نعمل من الجزائر العاصمة وسطيف، بالفرنسية والعربية والإنجليزية." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.partage, kind: '2027', name: 'تقاسم الملفات: خادم، تخزين شبكي، أو سحابة' },
      { href: L.intranet, kind: '2027', name: 'إنشاء شبكة داخلية: مذكرات، وثائق، دليل، وطلبات' },
      { href: L.espace, kind: '2027', name: 'إنشاء فضاء الزبون: ملفات، وثائق، وفواتير' },
      { href: L.sauvegarde, kind: '2027', name: 'لو مات الخادم غداً: النسخ الاحتياطية واسترجاع مجرَّب' },
    ] },
  },
};

const KEYWORDS = "comment archiver des documents 2027, comment archiver des documents papier, comment archiver des documents numériques, archivage des documents entreprise algérie, gestion électronique des documents algérie, ged algérie, numérisation des archives algérie, comment nommer les fichiers, plan de classement, how to archive documents, document management algeria 2027, scanning paper archives, كيف تُؤرشَف الوثائق 2027, أرشفة الوثائق في الجزائر, رقمنة الأرشيف";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
