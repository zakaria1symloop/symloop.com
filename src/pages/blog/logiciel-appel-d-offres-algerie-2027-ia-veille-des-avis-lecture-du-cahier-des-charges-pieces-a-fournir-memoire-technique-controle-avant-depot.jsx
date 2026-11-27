import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/logiciel-appel-d-offres-algerie-2027-ia-veille-des-avis-lecture-du-cahier-des-charges-pieces-a-fournir-memoire-technique-controle-avant-depot.mjs';

const SLUG = 'logiciel-appel-d-offres-algerie-2027-ia-veille-des-avis-lecture-du-cahier-des-charges-pieces-a-fournir-memoire-technique-controle-avant-depot';
const FIGURES = ['pertes', 'lecture', 'compte', 'dossier', 'calendrier', 'couches'];
const DATE = '2026-11-20';
const I = (x) => '⁦' + x + '⁩';

const L = {
  lecture: '/blog/lire-factures-bons-de-commande-pieces-par-ia-algerie-2027-photo-en-champs-verifies-schema-controles-validation-humaine-erp/',
  mesure: '/blog/mesurer-qu-une-ia-marche-avant-la-production-algerie-2027-jeu-d-evaluation-taux-d-erreur-hallucinations-regressions-seuil-de-livraison/',
  recherche: '/blog/mettre-de-l-ia-dans-une-application-algerie-2027-cinq-fonctions-recherche-documents-extraction-factures-classification-cout-par-requete/',
  archiver: '/blog/comment-archiver-des-documents-en-entreprise-en-algerie-2027-papier-et-numerique-plan-de-classement-nom-des-fichiers-numerisation-recherche/',
  devis: '/blog/du-devis-a-la-facture-sans-ressaisie-application-algerie-2027-moteur-de-prix-remises-approbation-versions-acceptation-ce-qu-on-construit/',
  btp: '/blog/logiciel-entreprise-batiment-btp-algerie-2027-devis-metre-suivi-de-chantier-situations-de-travaux-achats-pointage-marge-par-chantier/',
  roles: '/blog/roles-droits-journal-d-audit-application-algerie-2027-qui-voit-quoi-qui-modifie-quoi-qui-a-change-ce-prix-acces-par-agence-approbations/',
  chatgpt: '/blog/comment-utiliser-chatgpt-en-entreprise-algerie-2027-ia-au-travail-donnees-confidentielles-compte-personnel-ou-professionnel-trois-bacs/',
  deployer: '/blog/deployer-un-modele-ia-sur-ses-serveurs-algerie-2027-llm-prive-quel-modele-quelle-machine-cout-par-requete-quand-rester-sur-une-api/',
};

const CONTENT = {
  fr: {
    kind: 'Appels d’offres · Algérie · 2027', title: "Logiciel appel d'offres en Algérie (2027) : un cahier des charges de deux cents pages, une pièce oubliée découverte trois jours avant le dépôt, un mémoire technique recopié du précédent, et des avis vus trop tard ; veille, lecture par IA, pièces à fournir, contrôle avant dépôt, et ce qu'on met en place",
    dek: "« Nous répondons à une trentaine d'appels d'offres par an. Chaque cahier des charges fait cent ou deux cents pages, chacun en lit un morceau, et l'on découvre trois jours avant la date limite qu'il manque une pièce. Le mémoire technique est recopié du précédent, avec parfois le nom d'un autre client dedans. Le mois dernier, notre offre a été écartée pour un document oublié, et nous apprenons l'existence de certains avis quand il est trop tard. Existe-t-il un logiciel, ou une IA, pour répondre aux appels d'offres ? » Oui : il surveille les avis, lit le cahier des charges et en sort la liste de ce qui est exigé, page par page, dès le premier jour ; vos équipes vérifient, rédigent, chiffrent et signent.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Logiciel appel d’offres', 'IA et appels d’offres', 'Veille des avis', 'Lecture du cahier des charges', 'Pièces à fournir et mémoire technique', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Un logiciel de réponse aux appels d'offres fait quatre choses : il surveille les sources où paraissent les avis et vous alerte le jour même ; il lit le cahier des charges et en sort la liste des exigences, des pièces à fournir, des dates et des critères, chacune avec le numéro de sa page ; il tient une bibliothèque de vos pièces et de vos réponses passées, avec leurs dates de validité ; et il suit chaque dossier jusqu'au dépôt, avec un contrôle de complétude. L'IA lit et prépare ; vos équipes vérifient, chiffrent et signent. Dans l'exemple de cette page, un cahier des charges de 180 pages donne 64 exigences, dont 15 points à traiter connus dès le premier jour.",
      "Cette page s'adresse aux entreprises qui répondent régulièrement à des appels d'offres, publics ou privés, en Algérie : bâtiment et travaux, fourniture d'équipements, services, informatique, maintenance, et aux fondatrices et fondateurs de la diaspora qui soumissionnent ici. Les définitions viennent de sources publiques : appel d'offres, cahier des charges, mémoire technique, devis quantitatif, reconnaissance optique de caractères, extraction d'information, génération augmentée par récupération, hallucination d'un modèle. Le cahier des charges de 180 pages, ses 64 exigences et les 21 jours sont un exemple construit. La page ne traite ni de la réglementation des marchés publics, ni des pièces qu'elle exige, ni des cautions, ni des recours, et ne cite aucun prix : chaque cahier des charges fixe ses propres règles, et c'est lui que l'outil lit.",
    ],
    sections: [
      { heading: "Cinq façons de perdre avant d'être lu", body: [
        "La figure liste cinq façons de perdre un appel d'offres avant que l'offre soit lue, et ce que l'outil fait pour chacune.",
      ], visual: 'pertes', after: [
        "**L'appel d'offres.** C'est une procédure qui permet à un commanditaire de choisir l'entreprise à laquelle il confie un marché, en mettant plusieurs offres en concurrence ; le moins-disant n'est pas nécessairement retenu. Le cahier des charges est le document qui dit ce qui est attendu. Chaque réponse a une période de préparation, et une date limite. **Où l'on perd.** Dans les cas décrits ici, on ne perd pas sur le fond. On perd parce que l'avis a été vu trop tard, parce qu'une pièce manque ou n'est plus valide, parce que le mémoire technique a été recopié sans être relu, ou parce qu'on a répondu à un marché qui n'était pas pour soi.",
        "**Ce que fait l'outil.** Il rend ces cinq pertes visibles tôt : une alerte le jour de la parution, la liste des pièces dès le premier jour, un rappel avant qu'une pièce n'expire, des réponses passées retrouvées puis relues, et une grille pour décider d'y aller ou non. **Où paraissent les avis.** Dans la presse, sur les sites des donneurs d'ordre, et dans des bulletins spécialisés ; BAOSEM, par exemple, édite le bulletin des appels d'offres du secteur de l'énergie. La veille suit les sources que vous lui donnez, avec vos mots et vos secteurs. **Ce que l'outil ne fait pas.** Il ne dit pas si votre offre est conforme à la réglementation, et il ne remplace ni votre conseil juridique ni la personne qui signe.",
      ] },
      { heading: "Un cahier des charges de 180 pages, 64 exigences", body: [
        "La figure montre les 180 pages d'un cahier des charges, et où se trouvent les 64 exigences que l'outil en sort.",
      ], visual: 'lecture', after: [
        "**Dans l'exemple.** 180 pages, 64 exigences, réparties sur 41 pages : 18 pièces à fournir, 27 exigences techniques, 6 dates et délais, 5 critères de notation, 8 conditions financières. La bibliothèque en couvre 49 : des pièces encore valides, des réponses déjà écrites, des dates notées au calendrier. Restent 12 points à produire et 3 à clarifier auprès du donneur d'ordre. **Comment il lit.** Les pages scannées passent par la reconnaissance optique de caractères, qui convertit l'image d'un texte en texte ; puis l'extraction d'information sort des éléments structurés d'un document qui ne l'est pas, voir [la lecture de pièces par IA](" + L.lecture + ").",
        "**La règle de la page.** Une hallucination est une réponse produite par une IA qui contient une information fausse présentée comme un fait. Dans un appel d'offres, une exigence inventée ou une exigence manquée coûtent le marché. D'où la règle : chaque exigence garde le numéro de sa page et l'extrait d'origine, et une exigence sans page n'entre pas dans la liste. Une personne vérifie, en ouvrant la page. **Ce que l'on mesure avant d'ouvrir.** Sur vos anciens cahiers des charges, dont vous connaissez les exigences : combien l'outil en retrouve, combien il en manque, combien il en invente, voir [mesurer qu'une IA marche](" + L.mesure + "). **Le devis quantitatif.** Dans le bâtiment, ce document détaille les matériaux, les pièces et la main-d'œuvre ; l'outil en reprend les lignes dans un tableau, et vos équipes chiffrent, voir [le logiciel du bâtiment](" + L.btp + ").",
      ] },
      { heading: "Vingt et un jours avant le dépôt", body: [
        "La figure suit le même dossier pendant les 21 jours de préparation, avant et avec l'outil.",
      ], visual: 'compte', after: [
        "**Avant.** Chacun lit sa partie quand il a le temps. Les points à traiter se découvrent à mesure : 4 au jour 3, 11 au jour 12, 15 au jour 18, trois jours avant la date limite, quand quelqu'un s'aperçoit qu'une pièce manque. Le jour du dépôt, 2 points sont encore ouverts. **Avec l'outil.** Les 15 points sont connus au jour 1 : 12 à produire, 3 à clarifier. Chacun a une personne et une date. Il en reste 7 au jour 8, 1 au jour 15, aucun au jour 17 : quatre jours de marge.",
        "**Ce que cela dit.** Le travail est le même, les personnes aussi. Ce qui change, c'est le jour où l'on sait. Une pièce à demander à un organisme se demande au jour 1, pas au jour 18. **Le tableau du dossier.** Il montre ce qui reste, pas ce qui est fait : points ouverts, responsable, date, et les questions posées au donneur d'ordre avec leurs réponses. **Le contrôle avant l'envoi.** Il compare le dossier à la liste, pièce par pièce, et signale ce qui manque ou ce qui n'est plus valide. **Ce que l'on mesure.** Jour où le dernier point est fermé ; points ouverts au dépôt ; pièces périmées détectées ; offres écartées pour pièce manquante, qui doivent être zéro.",
      ] },
      { heading: "Un dossier, en six temps", body: [
        "La figure suit un dossier, de l'avis au dépôt.",
      ], visual: 'dossier', after: [
        "**L'avis et la décision.** La veille trouve l'avis et le résume : objet, donneur d'ordre, date limite. Une grille aide à décider d'y aller ou non, sur vos critères : métier, taille, région, charge des équipes, résultats passés chez ce donneur d'ordre. La décision reste la vôtre. **La lecture.** C'est le temps accentué : exigences, pièces, dates et critères, chacun avec sa page. **La répartition.** Chaque point reçoit une personne et une date ; les droits disent qui voit les prix, voir [les rôles et le journal d'audit](" + L.roles + ").",
        "**La rédaction.** Le mémoire technique est une pièce essentielle de la réponse. L'outil retrouve, dans vos réponses passées, les passages qui répondent à chaque exigence : c'est la génération augmentée par récupération, une technique qui permet à un modèle d'aller chercher une information dans vos documents et de citer ses sources, voir [la recherche dans les documents](" + L.recherche + "). Il propose un brouillon ; une personne le réécrit pour ce marché, et l'outil signale tout nom de client ou de marché qui n'est pas celui du dossier. **Le prix.** Il se construit avec vos règles, par vos équipes, voir [du devis à la facture](" + L.devis + "). **Le dépôt.** Contrôle de complétude, puis archivage du dossier tel qu'il est parti.",
      ] },
      { heading: "Neuf semaines, en commençant par trois dossiers passés", body: [
        "Neuf semaines dans l'exemple, avant le premier dossier réel.",
      ], visual: 'calendrier', after: [
        "**Trois dossiers passés.** Un gagné, un perdu, un écarté : on y relit ce qui a manqué, et le jour où on l'a su. Ils servent aussi de jeu d'essai pour la lecture. **La bibliothèque.** Vos pièces avec leurs dates de validité, vos références, vos réponses techniques, classées et nommées, voir [archiver ses documents](" + L.archiver + "). C'est le travail le plus long, et celui qui sert le plus. **La lecture.** Elle est essayée sur vos anciens cahiers des charges, en français et en arabe, jusqu'à ce que la part d'exigences retrouvées soit celle que vous acceptez.",
        "**La veille, le tableau, le contrôle.** Les sources que vous suivez, les points ouverts par personne, la complétude avant envoi. **Le premier dossier réel.** En double avec votre méthode actuelle, puis seul. **Où vont vos documents.** Un cahier des charges, vos prix et vos références sont confidentiels : ils ne se collent pas dans un compte personnel d'assistant, voir [utiliser ChatGPT en entreprise](" + L.chatgpt + "). Le modèle tourne chez un fournisseur sous contrat, ou sur vos serveurs, voir [déployer un modèle sur ses serveurs](" + L.deployer + "). **Les durées** sont celles d'un exemple construit.",
      ] },
      { heading: "Ce qu'il y a dans l'outil", body: [
        "La figure empile cinq couches ; la deuxième, la lecture, est celle qui change le calendrier.",
      ], visual: 'couches', after: [
        "**La veille et la lecture.** Des sources suivies, une alerte le jour de la parution ; puis la reconnaissance de caractères, l'extraction, le numéro de page, les points à clarifier. C'est la couche accentuée. **La bibliothèque.** Pièces, références, réponses passées, avec leurs dates : ce que l'entreprise sait déjà dire, retrouvé au lieu d'être réécrit.",
        "**Le dossier et le suivi.** Points ouverts, versions, contrôle de complétude ; puis les avis vus, les dossiers déposés, les résultats et les motifs de rejet, pour apprendre de chaque réponse. **Prêt à l'emploi ou sur mesure.** Des logiciels de veille et de réponse aux appels d'offres existent, et conviennent quand vos sources et vos documents sont ceux qu'ils connaissent. Le sur-mesure se justifie quand il faut suivre vos sources, lire des cahiers des charges en français et en arabe, parfois scannés, relier votre bibliothèque, vos prix et vos outils, et garder vos documents chez vous.",
      ], list: [
        "**Ce que vous recevez** : la veille sur vos sources ; la liste des exigences avec numéro de page ; la bibliothèque de pièces et de réponses, avec dates de validité ; le tableau du dossier ; le brouillon du mémoire à réécrire ; le contrôle de complétude ; l'archive de chaque dossier déposé ; le suivi des résultats.",
        "**Ce que l'entreprise évite** : l'avis vu trop tard, la pièce manquante découverte trois jours avant, la pièce périmée, le mémoire recopié avec le nom d'un autre client, les nuits passées à assembler le dossier, l'offre écartée pour un document oublié.",
        "**Ce qui est mesuré** : avis vus et jour où ils sont vus ; exigences retrouvées, manquées, inventées ; jour où le dernier point est fermé ; points ouverts au dépôt ; pièces périmées détectées ; offres écartées pour pièce manquante ; dossiers déposés et résultats.",
        "**Ce que fait Symloop** : la relecture de trois dossiers passés, la bibliothèque, la lecture avec numéro de page et ses essais, la veille sur vos sources, le tableau et le contrôle, le lien avec vos outils, le suivi après le premier dossier, en arabe et en français.",
      ], faq: [
        { q: "Existe-t-il un logiciel pour répondre aux appels d'offres ?", a: "Oui. Il surveille les avis, lit le cahier des charges, sort la liste de ce qui est exigé, tient la bibliothèque de vos pièces et de vos réponses, et suit le dossier jusqu'au dépôt. Il prépare ; vos équipes décident, chiffrent et signent." },
        { q: "Une IA peut-elle répondre à un appel d'offres à ma place ?", a: "Non, et nous ne le construisons pas ainsi. Elle lit, liste, retrouve vos réponses passées et propose un brouillon. Le prix, les engagements et la signature restent à des personnes." },
        { q: "Comment une IA lit-elle un cahier des charges ?", a: "Elle convertit les pages scannées en texte, puis extrait les exigences, les pièces, les dates et les critères. Chaque élément garde le numéro de sa page, pour qu'une personne le vérifie." },
        { q: "Peut-on faire confiance à la liste produite par l'IA ?", a: "On la vérifie. Une exigence sans page n'entre pas dans la liste, et l'outil est d'abord mesuré sur vos anciens cahiers des charges : exigences retrouvées, manquées, inventées. La relecture par une personne reste obligatoire dans notre méthode." },
        { q: "Comment trouver les appels d'offres en Algérie ?", a: "Les avis paraissent dans la presse, sur les sites des donneurs d'ordre et dans des bulletins spécialisés. La veille suit les sources que vous choisissez et vous alerte le jour de la parution, avec vos mots et vos secteurs." },
        { q: "Comment ne plus oublier une pièce dans un dossier de soumission ?", a: "En connaissant la liste dès le premier jour, en donnant chaque pièce à une personne avec une date, et en passant un contrôle de complétude avant l'envoi. La bibliothèque rappelle aussi les pièces dont la validité approche de sa fin." },
        { q: "L'outil dit-il quelles pièces la réglementation exige ?", a: "Non. Il lit ce que le cahier des charges demande et vous le liste. La réglementation des marchés et sa lecture relèvent de votre conseil juridique." },
        { q: "Peut-il rédiger le mémoire technique ?", a: "Il propose un brouillon à partir de vos réponses passées, exigence par exigence, avec ses sources. Une personne le réécrit pour ce marché." },
        { q: "Mes cahiers des charges et mes prix restent-ils confidentiels ?", a: "C'est un choix de construction : le modèle tourne chez un fournisseur sous contrat ou sur vos serveurs, les droits disent qui voit les prix, et chaque accès est journalisé." },
        { q: "Par quoi commencer ?", a: "Par trois dossiers passés : un gagné, un perdu, un écarté. On y lit ce qui a manqué et quand on l'a su. Puis par la bibliothèque de pièces, avec leurs dates de validité." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "Une exigence sans numéro de page n'entre pas dans la liste." },
      { after: 2, text: "Le travail est le même : ce qui change, c'est le jour où l'on sait ce qui manque." },
    ],
    cta: { eyebrow: "Dites-nous combien d'appels d'offres vous traitez par an, d'où viennent les avis, et ce qui a manqué la dernière fois : nous commençons par trois dossiers passés", title: "Avis vus trop tard, cahier des charges de deux cents pages, pièce oubliée, pièce périmée, mémoire recopié, offre écartée pour un document, ou marchés que vous visez en Algérie depuis la France", body: "Symloop construit l'outil de réponse aux appels d'offres qui correspond à vos marchés : veille sur vos sources, lecture avec numéro de page, bibliothèque de pièces et de réponses, tableau du dossier, contrôle avant dépôt. Décrivez-nous vos marchés, vos documents et vos outils." },
    related: { label: 'À lire aussi', items: [
      { href: L.lecture, kind: '2027', name: 'Lire factures et pièces par IA : des champs vérifiés' },
      { href: L.mesure, kind: '2027', name: 'Mesurer qu’une IA marche : jeu d’évaluation, taux d’erreur, seuil de livraison' },
      { href: L.devis, kind: '2027', name: 'Du devis à la facture sans ressaisie' },
      { href: L.archiver, kind: '2027', name: 'Archiver ses documents : plan de classement, noms des fichiers, recherche' },
    ] },
  },
  en: {
    kind: 'Tenders · Algeria · 2027', title: "Tender software in Algeria (2027): a two-hundred-page tender document, a forgotten document discovered three days before submission, a technical proposal copied from the last one, and notices seen too late; watch, AI reading, documents to supply, check before submission, and what we put in place",
    dek: "“We answer about thirty tenders a year. Each tender document runs to a hundred or two hundred pages, everyone reads a piece of it, and three days before the deadline we discover that a document is missing. The technical proposal is copied from the previous one, sometimes with another client's name still in it. Last month our bid was rejected over a forgotten document, and we learn that some notices exist when it is too late. Is there software, or an AI, for answering tenders?” Yes: it watches the notices, reads the tender document and produces the list of what is required, page by page, from the first day; your teams check, write, price and sign.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Tender software', 'AI and tenders', 'Watching notices', 'Reading the tender document', 'Documents to supply and technical proposal', 'Algeria 2027'],
    intro: [
      "**Short answer.** Tender-response software does four things: it watches the sources where notices appear and alerts you the same day; it reads the tender document and produces the list of requirements, documents to supply, dates and criteria, each with its page number; it keeps a library of your documents and past answers, with their validity dates; and it follows each bid up to submission, with a completeness check. The AI reads and prepares; your teams check, price and sign. In this page's example, a 180-page tender document yields 64 requirements, 15 of them points to handle that are known from the first day.",
      "This page is for companies that regularly answer tenders, public or private, in Algeria: building and works, supply of equipment, services, IT, maintenance, and for diaspora founders bidding here. The definitions come from public sources: invitation to tender, specification, technical proposal, bill of quantities, optical character recognition, information extraction, retrieval-augmented generation, model hallucination. The 180-page tender document, its 64 requirements and the 21 days are a constructed example. The page covers neither public procurement regulations, nor the documents they require, nor bid bonds, nor appeals, and quotes no price: each tender document sets its own rules, and that is what the tool reads.",
    ],
    sections: [
      { heading: "Five ways to lose before being read", body: [
        "The figure lists five ways to lose a tender before the bid is read, and what the tool does about each.",
      ], visual: 'pertes', after: [
        "**The tender.** It is a procedure that lets a buyer choose the company it will entrust with a contract, by putting several offers in competition; the lowest price is not necessarily the one retained. The tender document is the document that says what is expected. Each answer has a preparation period, and a deadline. **Where bids are lost.** In the cases described here, not on substance. They are lost because the notice was seen too late, because a document is missing or no longer valid, because the technical proposal was copied without being reread, or because the company bid on a contract that was not for it.",
        "**What the tool does.** It makes those five losses visible early: an alert on the day of publication, the list of documents from the first day, a reminder before a document expires, past answers retrieved then reread, and a grid for deciding whether to go. **Where notices appear.** In the press, on buyers' websites, and in specialised bulletins; BAOSEM, for example, publishes the tender bulletin of the energy sector. The watch follows the sources you give it, with your words and your sectors. **What the tool does not do.** It does not say whether your bid complies with the regulations, and it replaces neither your legal adviser nor the person who signs.",
      ] },
      { heading: "A 180-page tender document, 64 requirements", body: [
        "The figure shows the 180 pages of a tender document, and where the 64 requirements the tool extracts are found.",
      ], visual: 'lecture', after: [
        "**In the example.** 180 pages, 64 requirements, spread over 41 pages: 18 documents to supply, 27 technical requirements, 6 dates and deadlines, 5 scoring criteria, 8 financial conditions. The library covers 49 of them: documents still valid, answers already written, dates noted in the calendar. That leaves 12 points to produce and 3 to clarify with the buyer. **How it reads.** Scanned pages go through optical character recognition, which turns the image of a text into text; then information extraction pulls structured items out of a document that is not structured, see [reading documents with AI](" + L.lecture + ").",
        "**The page rule.** A hallucination is an answer produced by an AI that contains false information presented as fact. In a tender, an invented requirement or a missed requirement costs the contract. Hence the rule: each requirement keeps its page number and the original excerpt, and a requirement with no page does not enter the list. A person checks, by opening the page. **What is measured before opening.** On your past tender documents, whose requirements you know: how many the tool finds, how many it misses, how many it invents, see [measuring that an AI works](" + L.mesure + "). **The bill of quantities.** In construction, this document itemises materials, parts and labour; the tool copies its lines into a table, and your teams price them, see [construction software](" + L.btp + ").",
      ] },
      { heading: "Twenty-one days before submission", body: [
        "The figure follows the same bid during the 21 days of preparation, before and with the tool.",
      ], visual: 'compte', after: [
        "**Before.** Each person reads their part when they have time. The points to handle are discovered along the way: 4 on day 3, 11 on day 12, 15 on day 18, three days before the deadline, when somebody notices that a document is missing. On submission day, 2 points are still open. **With the tool.** The 15 points are known on day 1: 12 to produce, 3 to clarify. Each has a person and a date. 7 remain on day 8, 1 on day 15, none on day 17: four days of margin.",
        "**What that says.** The work is the same, and so are the people. What changes is the day you know. A document to request from an institution is requested on day 1, not on day 18. **The bid board.** It shows what remains, not what is done: open points, owner, date, and the questions put to the buyer with their answers. **The check before sending.** It compares the bid with the list, document by document, and flags what is missing or no longer valid. **What is measured.** The day the last point is closed; points open at submission; expired documents detected; bids rejected over a missing document, which must be zero.",
      ] },
      { heading: "A bid, in six steps", body: [
        "The figure follows a bid, from the notice to submission.",
      ], visual: 'dossier', after: [
        "**The notice and the decision.** The watch finds the notice and summarises it: subject, buyer, deadline. A grid helps decide whether to go, on your criteria: trade, size, region, team workload, past results with that buyer. The decision remains yours. **The reading.** That is the accented step: requirements, documents, dates and criteria, each with its page. **Allocation.** Each point gets a person and a date; rights say who sees the prices, see [roles and the audit log](" + L.roles + ").",
        "**Writing.** The technical proposal is an essential document of the answer. The tool finds, in your past answers, the passages that respond to each requirement: that is retrieval-augmented generation, a technique that lets a model fetch information from your documents and cite its sources, see [search in documents](" + L.recherche + "). It proposes a draft; a person rewrites it for this contract, and the tool flags any client or contract name that is not the one of the bid. **The price.** It is built with your rules, by your teams, see [from quote to invoice](" + L.devis + "). **Submission.** Completeness check, then archiving of the bid as it was sent.",
      ] },
      { heading: "Nine weeks, starting from three past bids", body: [
        "Nine weeks in the example, before the first real bid.",
      ], visual: 'calendrier', after: [
        "**Three past bids.** One won, one lost, one rejected: we reread in them what was missing, and the day it was known. They also serve as a test set for the reading. **The library.** Your documents with their validity dates, your references, your technical answers, filed and named, see [archiving your documents](" + L.archiver + "). It is the longest piece of work, and the one that serves most. **The reading.** It is tried on your past tender documents, in French and in Arabic, until the share of requirements found is the one you accept.",
        "**The watch, the board, the check.** The sources you follow, open points per person, completeness before sending. **The first real bid.** In parallel with your current method, then alone. **Where your documents go.** A tender document, your prices and your references are confidential: they are not pasted into a personal assistant account, see [using ChatGPT at work](" + L.chatgpt + "). The model runs at a provider under contract, or on your servers, see [deploying a model on your own servers](" + L.deployer + "). **The durations** are those of a constructed example.",
      ] },
      { heading: "What is inside the tool", body: [
        "The figure stacks five layers; the second, the reading, is the one that changes the calendar.",
      ], visual: 'couches', after: [
        "**The watch and the reading.** Sources followed, an alert on the day of publication; then character recognition, extraction, the page number, the points to clarify. That is the accented layer. **The library.** Documents, references, past answers, with their dates: what the company already knows how to say, retrieved instead of rewritten.",
        "**The bid and follow-up.** Open points, versions, completeness check; then notices seen, bids submitted, results and reasons for rejection, to learn from each answer. **Ready-made or custom.** Software for watching and answering tenders exists, and suits you when your sources and your documents are the ones it knows. Custom work is justified when your sources have to be followed, tender documents read in French and in Arabic, sometimes scanned, your library, prices and tools connected, and your documents kept on your premises.",
      ], list: [
        "**What you receive**: the watch on your sources; the list of requirements with page numbers; the library of documents and answers, with validity dates; the bid board; the draft proposal to rewrite; the completeness check; the archive of each bid submitted; follow-up of results.",
        "**What the company avoids**: the notice seen too late, the missing document discovered three days before, the expired document, the proposal copied with another client's name, the nights spent assembling the bid, the bid rejected over a forgotten document.",
        "**What is measured**: notices seen and the day they are seen; requirements found, missed, invented; the day the last point is closed; points open at submission; expired documents detected; bids rejected over a missing document; bids submitted and results.",
        "**What Symloop does**: rereading three past bids, the library, the reading with page numbers and its trials, the watch on your sources, the board and the check, the link with your tools, follow-up after the first bid, in Arabic and in French.",
      ], faq: [
        { q: "Is there software for answering tenders?", a: "Yes. It watches the notices, reads the tender document, produces the list of what is required, keeps the library of your documents and answers, and follows the bid up to submission. It prepares; your teams decide, price and sign." },
        { q: "Can an AI answer a tender in my place?", a: "No, and we do not build it that way. It reads, lists, retrieves your past answers and proposes a draft. The price, the commitments and the signature stay with people." },
        { q: "How does an AI read a tender document?", a: "It turns scanned pages into text, then extracts the requirements, the documents, the dates and the criteria. Each item keeps its page number, so that a person can check it." },
        { q: "Can the list produced by the AI be trusted?", a: "It is checked. A requirement with no page does not enter the list, and the tool is first measured on your past tender documents: requirements found, missed, invented. Rereading by a person remains mandatory in our method." },
        { q: "How do you find tenders in Algeria?", a: "Notices appear in the press, on buyers' websites and in specialised bulletins. The watch follows the sources you choose and alerts you on the day of publication, with your words and your sectors." },
        { q: "How do you stop forgetting a document in a bid file?", a: "By knowing the list from the first day, giving each document to a person with a date, and running a completeness check before sending. The library also reminds you of documents whose validity is about to end." },
        { q: "Does the tool say which documents the regulations require?", a: "No. It reads what the tender document asks for and lists it for you. Procurement regulations and how to read them are a matter for your legal adviser." },
        { q: "Can it write the technical proposal?", a: "It proposes a draft from your past answers, requirement by requirement, with its sources. A person rewrites it for this contract." },
        { q: "Do my tender documents and prices stay confidential?", a: "That is a design choice: the model runs at a provider under contract or on your servers, rights say who sees the prices, and every access is logged." },
        { q: "Where do you start?", a: "With three past bids: one won, one lost, one rejected. We read in them what was missing and when it was known. Then with the library of documents, with their validity dates." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "A requirement with no page number does not enter the list." },
      { after: 2, text: "The work is the same: what changes is the day you know what is missing." },
    ],
    cta: { eyebrow: "Tell us how many tenders you handle a year, where the notices come from, and what was missing last time: we start from three past bids", title: "Notices seen too late, a two-hundred-page tender document, a forgotten document, an expired document, a copied proposal, a bid rejected over one document, or contracts you are aiming at in Algeria from France", body: "Symloop builds the tender-response tool that fits your contracts: a watch on your sources, reading with page numbers, a library of documents and answers, a bid board, a check before submission. Describe your contracts to us, your documents and your tools." },
    related: { label: 'Also read', items: [
      { href: L.lecture, kind: '2027', name: 'Reading invoices and documents with AI: verified fields' },
      { href: L.mesure, kind: '2027', name: 'Measuring that an AI works: evaluation set, error rate, release threshold' },
      { href: L.devis, kind: '2027', name: 'From quote to invoice without retyping' },
      { href: L.archiver, kind: '2027', name: 'Archiving company documents: filing plan, file names, search' },
    ] },
  },
  ar: {
    kind: 'المناقصات · الجزائر · 2027', title: "برنامج المناقصات في الجزائر (2027): دفتر شروط من مئتي صفحة، وثيقة منسية تُكتشَف قبل الإيداع بثلاثة أيام، مذكرة تقنية منسوخة من السابقة، وإعلانات تُرى بعد فوات الأوان؛ الرصد، القراءة بالذكاء الاصطناعي، الوثائق المطلوبة، المراقبة قبل الإيداع، وما نضعه",
    dek: "«نشارك في نحو ثلاثين مناقصة في السنة. كل دفتر شروط فيه مئة أو مئتا صفحة، كل واحد يقرأ جزءاً منه، ونكتشف قبل آخر أجل بثلاثة أيام أن وثيقة تنقص. المذكرة التقنية تُنسَخ من السابقة، وأحياناً يبقى فيها اسم زبون آخر. الشهر الماضي، أُقصي عرضنا بسبب وثيقة منسية، ونعلم بوجود بعض الإعلانات بعد فوات الأوان. هل يوجد برنامج، أو ذكاء اصطناعي، للرد على المناقصات؟» نعم: يرصد الإعلانات، يقرأ دفتر الشروط، ويُخرج قائمة ما هو مطلوب، صفحة بصفحة، منذ اليوم الأول؛ وفرقكم تتحقق، تحرّر، تسعّر، وتوقّع.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['برنامج المناقصات', 'الذكاء الاصطناعي والمناقصات', 'رصد الإعلانات', 'قراءة دفتر الشروط', 'الوثائق المطلوبة والمذكرة التقنية', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** برنامج الرد على المناقصات يقوم بأربعة أشياء: يرصد المصادر التي تُنشَر فيها الإعلانات وينبّهكم في اليوم نفسه؛ يقرأ دفتر الشروط ويُخرج قائمة المتطلبات، الوثائق المطلوبة، التواريخ، والمعايير، كل واحد مع رقم صفحته؛ يحفظ مكتبة لوثائقكم وأجوبتكم السابقة، بتواريخ صلاحيتها؛ ويتابع كل ملف حتى الإيداع، مع مراقبة الاكتمال. الذكاء الاصطناعي يقرأ ويحضّر؛ وفرقكم تتحقق، تسعّر، وتوقّع. في مثال هذه الصفحة، دفتر شروط من 180 صفحة يعطي 64 متطلَّباً، منها 15 نقطة للمعالجة تُعرَف منذ اليوم الأول.",
      "هذه الصفحة موجّهة إلى المؤسسات التي تشارك بانتظام في مناقصات، عمومية أو خاصة، في الجزائر: البناء والأشغال، توريد التجهيزات، الخدمات، الإعلام الآلي، والصيانة، وإلى مؤسسي الجالية الذين يتعهدون هنا. التعريفات من مصادر عمومية: المناقصة، دفتر الشروط، المذكرة التقنية، الكشف الكمي، التعرف الضوئي على الحروف، استخراج المعلومات، التوليد المعزَّز بالاسترجاع، وهلوسة النموذج. ودفتر الشروط من 180 صفحة، متطلباته الـ64، والأيام الـ21 مثال مركَّب. والصفحة لا تتناول تنظيم الصفقات العمومية، ولا الوثائق التي يفرضها، ولا الكفالات، ولا الطعون، ولا تذكر أي سعر: كل دفتر شروط يحدّد قواعده، وهو ما تقرؤه الأداة.",
    ],
    sections: [
      { heading: "خمس طرق للخسارة قبل أن يُقرأ العرض", body: [
        "الشكل يعرض خمس طرق لخسارة مناقصة قبل أن يُقرأ العرض، وما تفعله الأداة لكل واحدة.",
      ], visual: 'pertes', after: [
        "**المناقصة.** إجراء يسمح لصاحب الطلب باختيار المؤسسة التي يُسنَد إليها العمل، بوضع عدة عروض في المنافسة؛ والأقل سعراً ليس بالضرورة هو المختار. ودفتر الشروط هو الوثيقة التي تقول ما هو منتظَر. ولكل عرض فترة تحضير، وآخر أجل. **أين نخسر.** في الحالات الموصوفة هنا، لا نخسر في المضمون. نخسر لأن الإعلان رُئي متأخراً، لأن وثيقة تنقص أو لم تعد صالحة، لأن المذكرة التقنية نُسخت دون مراجعة، أو لأننا شاركنا في صفقة ليست لنا.",
        "**ما تفعله الأداة.** تجعل هذه الخسائر الخمس مرئية مبكراً: تنبيه يوم النشر، قائمة الوثائق منذ اليوم الأول، تذكير قبل انتهاء صلاحية وثيقة، أجوبة سابقة تُسترجَع ثم تُراجَع، وشبكة لقرار المشاركة أو عدمها. **أين تُنشَر الإعلانات.** في الصحافة، على مواقع أصحاب الطلب، وفي نشرات متخصصة؛ مؤسسة " + I('BAOSEM') + "، مثلاً، تنشر نشرة مناقصات قطاع الطاقة. والرصد يتابع المصادر التي تعطونها له، بكلماتكم وقطاعاتكم. **ما لا تفعله الأداة.** لا تقول إن كان عرضكم مطابقاً للتنظيم، ولا تعوّض مستشاركم القانوني ولا الشخص الذي يوقّع.",
      ] },
      { heading: "دفتر شروط من 180 صفحة، و64 متطلَّباً", body: [
        "الشكل يُظهر صفحات دفتر الشروط الـ180، وأين توجد المتطلبات الـ64 التي تُخرجها الأداة.",
      ], visual: 'lecture', after: [
        "**في المثال.** 180 صفحة، 64 متطلَّباً، موزَّعة على 41 صفحة: 18 وثيقة مطلوبة، 27 متطلَّباً تقنياً، 6 تواريخ وآجال، 5 معايير تنقيط، و8 شروط مالية. المكتبة تغطي 49 منها: وثائق ما زالت صالحة، أجوبة مكتوبة من قبل، وتواريخ مسجَّلة في الرزنامة. تبقى 12 نقطة تُعَدّ و3 تُستوضَح من صاحب الطلب. **كيف تقرأ.** الصفحات الممسوحة تمر بالتعرف الضوئي على الحروف، الذي يحوّل صورة نص إلى نص؛ ثم استخراج المعلومات يُخرج عناصر منظَّمة من وثيقة غير منظَّمة، انظر [قراءة الوثائق بالذكاء الاصطناعي](" + L.lecture + ").",
        "**قاعدة الصفحة.** الهلوسة جواب ينتجه الذكاء الاصطناعي وفيه معلومة خاطئة مقدَّمة كأنها حقيقة. وفي مناقصة، متطلَّب مختلَق أو متطلَّب فائت يكلّف الصفقة. من هنا القاعدة: كل متطلَّب يحتفظ برقم صفحته وبالمقطع الأصلي، ومتطلَّب دون صفحة لا يدخل القائمة. وشخص يتحقق، بفتح الصفحة. **ما يُقاس قبل الفتح.** على دفاتر شروطكم القديمة، التي تعرفون متطلباتها: كم تجد الأداة منها، كم يفوتها، وكم تختلق، انظر [قياس أن الذكاء الاصطناعي يشتغل](" + L.mesure + "). **الكشف الكمي.** في البناء، هذه الوثيقة تفصّل المواد، القطع، واليد العاملة؛ والأداة تنقل سطوره إلى جدول، وفرقكم تسعّر، انظر [برنامج مؤسسة البناء](" + L.btp + ").",
      ] },
      { heading: "واحد وعشرون يوماً قبل الإيداع", body: [
        "الشكل يتابع الملف نفسه خلال أيام التحضير الـ21، قبل الأداة ومعها.",
      ], visual: 'compte', after: [
        "**قبل.** كل واحد يقرأ جزءه حين يجد الوقت. والنقاط التي تُعالَج تُكتشَف شيئاً فشيئاً: 4 في اليوم 3، 11 في اليوم 12، و15 في اليوم 18، قبل آخر أجل بثلاثة أيام، حين ينتبه أحدهم إلى أن وثيقة تنقص. ويوم الإيداع، نقطتان ما زالتا مفتوحتين. **مع الأداة.** النقاط الـ15 معروفة في اليوم 1: 12 تُعَدّ، و3 تُستوضَح. ولكل واحدة شخص وتاريخ. يبقى 7 في اليوم 8، 1 في اليوم 15، ولا شيء في اليوم 17: أربعة أيام هامشاً.",
        "**ما يقوله ذلك.** العمل هو نفسه، والأشخاص كذلك. ما يتغيّر هو اليوم الذي نعرف فيه. وثيقة تُطلَب من هيئة تُطلَب في اليوم 1، لا في اليوم 18. **لوحة الملف.** تُظهر ما بقي، لا ما أُنجز: النقاط المفتوحة، المسؤول، التاريخ، والأسئلة المطروحة على صاحب الطلب مع أجوبتها. **المراقبة قبل الإرسال.** تقارن الملف بالقائمة، وثيقة بوثيقة، وتشير إلى ما ينقص أو ما لم يعد صالحاً. **ما يُقاس.** اليوم الذي تُغلَق فيه آخر نقطة؛ النقاط المفتوحة عند الإيداع؛ الوثائق المنتهية الصلاحية المكتشَفة؛ والعروض المقصاة بسبب وثيقة ناقصة، ويجب أن تكون صفراً.",
      ] },
      { heading: "ملف، في ست مراحل", body: [
        "الشكل يتابع ملفاً، من الإعلان إلى الإيداع.",
      ], visual: 'dossier', after: [
        "**الإعلان والقرار.** الرصد يجد الإعلان ويلخّصه: الموضوع، صاحب الطلب، وآخر أجل. وشبكة تساعد على قرار المشاركة أو عدمها، بمعاييركم: المهنة، الحجم، المنطقة، حِمل الفرق، والنتائج السابقة عند صاحب الطلب هذا. والقرار يبقى لكم. **القراءة.** هي المرحلة المبرزة: المتطلبات، الوثائق، التواريخ، والمعايير، كل واحد مع صفحته. **التوزيع.** كل نقطة تأخذ شخصاً وتاريخاً؛ والصلاحيات تقول من يرى الأسعار، انظر [الأدوار وسجل التدقيق](" + L.roles + ").",
        "**التحرير.** المذكرة التقنية وثيقة أساسية في الرد. والأداة تجد، في أجوبتكم السابقة، المقاطع التي تجيب عن كل متطلَّب: هو التوليد المعزَّز بالاسترجاع، تقنية تسمح لنموذج بالبحث عن معلومة في وثائقكم وذكر مصادره، انظر [البحث في الوثائق](" + L.recherche + "). تقترح مسودة؛ وشخص يعيد كتابتها لهذه الصفقة، والأداة تشير إلى كل اسم زبون أو صفقة ليس اسم الملف. **السعر.** يُبنى بقواعدكم، ومن فرقكم، انظر [من عرض السعر إلى الفاتورة](" + L.devis + "). **الإيداع.** مراقبة الاكتمال، ثم أرشفة الملف كما أُرسل.",
      ] },
      { heading: "تسعة أسابيع، بدءاً بثلاثة ملفات سابقة", body: [
        "تسعة أسابيع في المثال، قبل أول ملف حقيقي.",
      ], visual: 'calendrier', after: [
        "**ثلاثة ملفات سابقة.** واحد رُبح، واحد خُسر، وواحد أُقصي: نقرأ فيها ما الذي نقص، وفي أي يوم عُرف. وتصلح أيضاً مجموعة تجارب للقراءة. **المكتبة.** وثائقكم بتواريخ صلاحيتها، مراجعكم، وأجوبتكم التقنية، مرتَّبة ومسمّاة، انظر [أرشفة الوثائق](" + L.archiver + "). هو العمل الأطول، والأكثر نفعاً. **القراءة.** تُجرَّب على دفاتر شروطكم القديمة، بالفرنسية والعربية، حتى تصير حصة المتطلبات الموجودة هي التي تقبلونها.",
        "**الرصد، اللوحة، والمراقبة.** المصادر التي تتابعونها، النقاط المفتوحة لكل شخص، والاكتمال قبل الإرسال. **أول ملف حقيقي.** بالتوازي مع طريقتكم الحالية، ثم وحده. **أين تذهب وثائقكم.** دفتر الشروط، أسعاركم، ومراجعكم سرية: لا تُلصَق في حساب شخصي لمساعد ذكي، انظر [استعمال الذكاء الاصطناعي في المؤسسة](" + L.chatgpt + "). والنموذج يشتغل عند مزوّد بعقد، أو على خوادمكم، انظر [تشغيل نموذج على خوادمكم](" + L.deployer + "). **المدد** هي مدد مثال مركَّب.",
      ] },
      { heading: "ما يوجد في الأداة", body: [
        "الشكل يرتّب خمس طبقات؛ والثانية، القراءة، هي التي تغيّر الرزنامة.",
      ], visual: 'couches', after: [
        "**الرصد والقراءة.** مصادر متابَعة، وتنبيه يوم النشر؛ ثم التعرف على الحروف، الاستخراج، رقم الصفحة، والنقاط التي تُستوضَح. هي الطبقة المبرزة. **المكتبة.** وثائق، مراجع، وأجوبة سابقة، بتواريخها: ما تعرف المؤسسة قوله من قبل، يُسترجَع بدل أن تُعاد كتابته.",
        "**الملف والمتابعة.** النقاط المفتوحة، النسخ، ومراقبة الاكتمال؛ ثم الإعلانات المرئية، الملفات المودَعة، النتائج، وأسباب الإقصاء، للتعلّم من كل جواب. **جاهز أو على المقاس.** توجد برامج لرصد المناقصات والرد عليها، وتناسب حين تكون مصادركم ووثائقكم مما تعرفه. والعمل على المقاس يُبرَّر حين يلزم متابعة مصادركم، قراءة دفاتر شروط بالفرنسية والعربية، ممسوحة أحياناً، ربط مكتبتكم، أسعاركم، وأدواتكم، وإبقاء وثائقكم عندكم.",
      ], list: [
        "**ما تتلقونه**: الرصد على مصادركم؛ قائمة المتطلبات برقم الصفحة؛ مكتبة الوثائق والأجوبة، بتواريخ الصلاحية؛ لوحة الملف؛ مسودة المذكرة لإعادة كتابتها؛ مراقبة الاكتمال؛ أرشيف كل ملف مودَع؛ ومتابعة النتائج.",
        "**ما تتفاداه المؤسسة**: الإعلان الذي يُرى متأخراً، الوثيقة الناقصة التي تُكتشَف قبل الأجل بثلاثة أيام، الوثيقة المنتهية الصلاحية، المذكرة المنسوخة وفيها اسم زبون آخر، الليالي المقضية في تجميع الملف، والعرض المقصى بسبب وثيقة منسية.",
        "**ما يُقاس**: الإعلانات المرئية واليوم الذي تُرى فيه؛ المتطلبات الموجودة، الفائتة، والمختلَقة؛ اليوم الذي تُغلَق فيه آخر نقطة؛ النقاط المفتوحة عند الإيداع؛ الوثائق المنتهية الصلاحية المكتشَفة؛ العروض المقصاة بسبب وثيقة ناقصة؛ والملفات المودَعة ونتائجها.",
        "**ما تفعله Symloop**: مراجعة ثلاثة ملفات سابقة، المكتبة، القراءة برقم الصفحة وتجاربها، الرصد على مصادركم، اللوحة والمراقبة، الربط بأدواتكم، والمتابعة بعد أول ملف، بالعربية والفرنسية.",
      ], faq: [
        { q: "هل يوجد برنامج للرد على المناقصات؟", a: "نعم. يرصد الإعلانات، يقرأ دفتر الشروط، يُخرج قائمة ما هو مطلوب، يحفظ مكتبة وثائقكم وأجوبتكم، ويتابع الملف حتى الإيداع. هو يحضّر؛ وفرقكم تقرّر، تسعّر، وتوقّع." },
        { q: "هل يستطيع الذكاء الاصطناعي الرد على مناقصة مكاني؟", a: "لا، ولا نبنيه هكذا. يقرأ، يعدّ القائمة، يسترجع أجوبتكم السابقة، ويقترح مسودة. والسعر، الالتزامات، والتوقيع تبقى لأشخاص." },
        { q: "كيف يقرأ الذكاء الاصطناعي دفتر الشروط؟", a: "يحوّل الصفحات الممسوحة إلى نص، ثم يستخرج المتطلبات، الوثائق، التواريخ، والمعايير. وكل عنصر يحتفظ برقم صفحته، ليتحقق منه شخص." },
        { q: "هل يمكن الوثوق بالقائمة التي ينتجها الذكاء الاصطناعي؟", a: "تُراجَع. متطلَّب دون صفحة لا يدخل القائمة، والأداة تُقاس أولاً على دفاتر شروطكم القديمة: المتطلبات الموجودة، الفائتة، والمختلَقة. والمراجعة من شخص تبقى إلزامية في طريقتنا." },
        { q: "كيف نجد المناقصات في الجزائر؟", a: "الإعلانات تُنشَر في الصحافة، على مواقع أصحاب الطلب، وفي نشرات متخصصة. والرصد يتابع المصادر التي تختارونها وينبّهكم يوم النشر، بكلماتكم وقطاعاتكم." },
        { q: "كيف لا ننسى وثيقة في ملف التعهد؟", a: "بمعرفة القائمة منذ اليوم الأول، بإسناد كل وثيقة إلى شخص مع تاريخ، وبمراقبة الاكتمال قبل الإرسال. والمكتبة تذكّر أيضاً بالوثائق التي تقترب نهاية صلاحيتها." },
        { q: "هل تقول الأداة أي الوثائق يفرضها التنظيم؟", a: "لا. تقرأ ما يطلبه دفتر الشروط وتعدّه لكم. وتنظيم الصفقات وقراءته من اختصاص مستشاركم القانوني." },
        { q: "هل تستطيع تحرير المذكرة التقنية؟", a: "تقترح مسودة انطلاقاً من أجوبتكم السابقة، متطلَّباً بمتطلَّب، مع مصادرها. وشخص يعيد كتابتها لهذه الصفقة." },
        { q: "هل تبقى دفاتر شروطي وأسعاري سرية؟", a: "هو اختيار في البناء: النموذج يشتغل عند مزوّد بعقد أو على خوادمكم، الصلاحيات تقول من يرى الأسعار، وكل دخول يُسجَّل." },
        { q: "بماذا يُبدأ؟", a: "بثلاثة ملفات سابقة: واحد رُبح، واحد خُسر، وواحد أُقصي. نقرأ فيها ما الذي نقص ومتى عُرف. ثم بمكتبة الوثائق، بتواريخ صلاحيتها." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "متطلَّب دون رقم صفحة لا يدخل القائمة." },
      { after: 2, text: "العمل هو نفسه: ما يتغيّر هو اليوم الذي نعرف فيه ما ينقص." },
    ],
    cta: { eyebrow: "قولوا لنا كم مناقصة تعالجون في السنة، من أين تأتي الإعلانات، وما الذي نقص آخر مرة: نبدأ بثلاثة ملفات سابقة", title: "إعلانات تُرى متأخرة، دفتر شروط من مئتي صفحة، وثيقة منسية، وثيقة منتهية الصلاحية، مذكرة منسوخة، عرض مقصى بسبب وثيقة، أو صفقات تستهدفونها في الجزائر من فرنسا", body: "Symloop تبني أداة الرد على المناقصات التي تناسب صفقاتكم: رصد على مصادركم، قراءة برقم الصفحة، مكتبة وثائق وأجوبة، لوحة الملف، ومراقبة قبل الإيداع. صِفوا لنا صفقاتكم، وثائقكم، وأدواتكم." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.lecture, kind: '2027', name: 'قراءة الفواتير والوثائق بالذكاء الاصطناعي: حقول مُتحقَّق منها' },
      { href: L.mesure, kind: '2027', name: 'قياس أن الذكاء الاصطناعي يشتغل: مجموعة التقييم، نسبة الخطأ، وعتبة التسليم' },
      { href: L.devis, kind: '2027', name: 'من عرض السعر إلى الفاتورة دون إعادة إدخال' },
      { href: L.archiver, kind: '2027', name: 'أرشفة وثائق المؤسسة: مخطط الترتيب، التسمية، والبحث' },
    ] },
  },
};

const KEYWORDS = "logiciel appel d'offres, logiciel appel d'offres algérie 2027, logiciel réponse appel d'offre, logiciel gestion appel d'offres, logiciel veille appel d'offre, logiciel ia appel d'offre, ia appel d'offres, ia pour répondre aux appels d'offres, ia réponse appel d'offre, ia analyse appel d'offre, agent ia appel d'offre, mémoire technique ia, veille appel d'offres, comment répondre à un appel d'offre, soumission appel d'offre algerie, dossier de soumission à un appel d'offre algerie, appel d'offre algerie, tender management software, ai tender response, مناقصات الجزائر, برنامج المناقصات, الرد على المناقصات بالذكاء الاصطناعي, دفتر الشروط, Symloop";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
