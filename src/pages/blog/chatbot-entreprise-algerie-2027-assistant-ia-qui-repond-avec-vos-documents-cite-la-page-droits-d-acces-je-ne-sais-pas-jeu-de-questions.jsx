import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/chatbot-entreprise-algerie-2027-assistant-ia-qui-repond-avec-vos-documents-cite-la-page-droits-d-acces-je-ne-sais-pas-jeu-de-questions.mjs';

const SLUG = 'chatbot-entreprise-algerie-2027-assistant-ia-qui-repond-avec-vos-documents-cite-la-page-droits-d-acces-je-ne-sais-pas-jeu-de-questions';
const FIGURES = ['question', 'corpus', 'ingestion', 'couches', 'calendrier', 'situations'];
const DATE = '2026-11-23';
const I = (x) => '⁦' + x + '⁩';

const L = {
  agent: '/blog/agent-ia-entreprise-algerie-2027-par-ou-commencer-ce-qui-marche/',
  mesurer: '/blog/mesurer-qu-une-ia-marche-avant-la-production-algerie-2027-jeu-d-evaluation-taux-d-erreur-hallucinations-regressions-seuil-de-livraison/',
  serveurs: '/blog/deployer-un-modele-ia-sur-ses-serveurs-algerie-2027-llm-prive-quel-modele-quelle-machine-cout-par-requete-quand-rester-sur-une-api/',
  chatgpt: '/blog/comment-utiliser-chatgpt-en-entreprise-algerie-2027-ia-au-travail-donnees-confidentielles-compte-personnel-ou-professionnel-trois-bacs/',
  whatsapp: '/blog/agent-ia-whatsapp-entreprise-algerie-2027-architecture-fenetre-24-heures-templates-passage-humain-cout-message/',
  roles: '/blog/roles-droits-journal-d-audit-application-algerie-2027-qui-voit-quoi-qui-modifie-quoi-qui-a-change-ce-prix-acces-par-agence-approbations/',
  archiver: '/blog/comment-archiver-des-documents-en-entreprise-en-algerie-2027-papier-et-numerique-plan-de-classement-nom-des-fichiers-numerisation-recherche/',
  bilingue: '/blog/application-en-arabe-et-en-francais-algerie-2027-droite-a-gauche-chiffres-dates-polices-traductions-darija-ce-qu-on-construit/',
  intranet: '/blog/comment-creer-un-intranet-d-entreprise-en-algerie-2027-notes-de-service-documents-annuaire-demandes-internes-recherche-accuse-de-lecture/',
};

const CONTENT = {
  fr: {
    kind: 'Chatbot d’entreprise · Algérie · 2027', title: "Chatbot d'entreprise en Algérie (2027) : les mêmes questions cent fois par semaine, quatre mille pages de procédures que personne ne lit, des réponses données de mémoire ; un assistant IA qui répond avec vos documents, cite la page, respecte les droits, dit « je ne sais pas », et ce qu'on met en place",
    dek: "« Nos procédures, nos notes de service et nos fiches techniques font quatre mille pages, réparties dans des dossiers partagés. Les mêmes questions arrivent cent fois par semaine aux ressources humaines, à l'informatique et à la qualité. Les nouveaux ne trouvent rien, les anciens répondent de mémoire, parfois avec la version d'il y a deux ans. Nous voulons un chatbot qui réponde avec nos documents, en arabe et en français, sans rien inventer. Comment le mettre en place ? » Un assistant qui retrouve les bons passages, ne lit que ce que la personne a le droit de lire, cite sa source, et dit « je ne sais pas » quand rien n'est écrit.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Chatbot d’entreprise', 'Assistant IA sur vos documents', 'Réponses citées', 'Droits d’accès', 'Jeu de questions de test', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Un chatbot d'entreprise utile ne répond pas de mémoire : pour chaque question, il retrouve dans vos documents les quelques passages qui s'y rapportent, écarte ceux que la personne n'a pas le droit de lire, rédige une réponse à partir des passages restants en citant le document et la page, et dit « je ne sais pas » quand rien n'est écrit. Le travail est d'abord dans les documents. Dans l'exemple de cette page, sur 1 150 fichiers, 190 sont des doublons ou d'anciennes versions ; sur 120 questions de test, les réponses justes avec la bonne source passent de 84 à 107 une fois le tri fait.",
      "Cette page s'adresse aux entreprises de cent à quelques milliers de personnes, industrie, distribution, services, cliniques, écoles, en Algérie, et aux fondatrices et fondateurs de la diaspora qui dirigent une équipe ici. Les définitions viennent de sources publiques : chatbot, génération augmentée par la recherche, hallucination, grand modèle de langage, base de données vectorielle, recherche sémantique, fonction de classement BM25, contrôle d'accès par rôles, reconnaissance de caractères. L'entreprise, ses documents, ses questions et ses résultats sont un exemple construit. La page ne traite pas des règles juridiques sur les données personnelles, et ne cite aucun prix.",
    ],
    sections: [
      { heading: "Une question, quatre passages, une réponse citée", body: [
        "La figure suit une question, de l'index entier aux quatre passages cités dans la réponse.",
      ], visual: 'question', after: [
        "**Le chatbot.** C'est un logiciel conçu pour converser par le texte ou par la voix. Celui dont parle cette page repose sur un grand modèle de langage, un modèle entraîné sur une très grande quantité de texte, auquel on donne vos documents à lire. **La génération augmentée par la recherche.** C'est la technique qui permet à un modèle de retrouver et d'intégrer de l'information nouvelle : il se réfère d'abord à un ensemble de documents défini, puis répond. Elle aide à réduire les hallucinations, ces réponses fausses présentées comme des faits, et permet de citer les sources. **La limite.** Elle ne les supprime pas : la même source écrit qu'elle n'empêche pas les hallucinations.",
        "**Dans l'exemple.** L'index contient 7 200 passages. Une question en fait ressortir 40, par les mots et par le sens ; un reclassement en garde 8. Deux sont réservés à l'encadrement : ils sont écartés avant que le modèle ne lise quoi que ce soit. La réponse s'écrit avec 4 passages, et chaque phrase porte sa source : document, page, date de mise à jour. **Deux recherches.** La recherche par le sens retrouve « congé » quand on écrit « absence » ; la recherche par les mots, celle des moteurs classiques, retrouve une référence exacte comme « RH-07 ». Il faut les deux. **Le refus.** Sous un seuil de pertinence, l'assistant répond « je ne sais pas » et transmet la question.",
      ] },
      { heading: "Le travail est dans les documents", body: [
        "La figure trie les 1 150 documents, puis rejoue les mêmes 120 questions avant et après le tri.",
      ], visual: 'corpus', after: [
        "**Le tri.** Avant d'indexer, on compte. Dans l'exemple, sur 1 150 fichiers : 190 doublons et anciennes versions, un sur six, retirés ; 85 scans sans texte, passés par la reconnaissance de caractères, qui convertit l'image d'un texte en texte lisible par une machine ; 60 sans responsable ni date, attribués. Restent 960 documents, 3 300 pages. Le classement lui-même est un autre sujet, voir [archiver les documents](" + L.archiver + "). **Pourquoi.** Un assistant répond avec ce qu'on lui donne : une ancienne version laissée dans l'index devient une réponse fausse, dite avec assurance.",
        "**La mesure.** 120 questions réelles, chacune avec la réponse attendue et sa source, écrites par les responsables des sujets. Avec tout indexé : 84 réponses justes avec la bonne source, 9 tirées d'une ancienne version, 14 « je ne sais pas » à tort, 6 justifiés, 7 inventées ou fausses. Après le tri et le réglage de la recherche : 107, 1, 4, 6 et 2. **Ce qui reste.** Deux réponses fausses sur 120 : c'est pourquoi la source est toujours affichée, et pourquoi le jeu de questions est rejoué à chaque changement, voir [mesurer qu'une IA marche](" + L.mesurer + "). Les six « je ne sais pas » justifiés sont la liste des notes à écrire.",
      ] },
      { heading: "Un document entre dans l'assistant, en six temps", body: [
        "La figure suit un document, du dossier partagé jusqu'à sa mise à jour dans l'index.",
      ], visual: 'ingestion', after: [
        "**Le découpage.** Les documents sont divisés en passages plus courts pour l'indexation et la recherche. Découper par titres et par paragraphes, plutôt qu'à longueur fixe, garde ensemble une règle et son exception ; chaque passage conserve le document, la page et la date d'où il vient. **L'index.** Les passages sont rangés dans une base qui stocke et retrouve des représentations numériques du texte, dite base vectorielle ; la génération augmentée par la recherche en est un usage particulièrement courant. **Les deux langues.** Une question en arabe doit retrouver une procédure écrite en français, et l'inverse : cela se vérifie dans le jeu de questions, voir [une application dans les deux langues](" + L.bilingue + ").",
        "**Les droits.** Le contrôle d'accès par rôles restreint l'accès d'un système aux personnes autorisées. Ici, chaque passage hérite du groupe de lecture de son document, repris de vos dossiers, et le filtre s'applique avant le modèle : voir [rôles, droits et journal](" + L.roles + "). Dans l'exemple, cinq groupes et 140 documents réservés. **La mise à jour.** Quand un document change, ses anciens passages sont retirés et les nouveaux indexés, dans l'heure dans l'exemple ; un document sans responsable n'entre pas. **Où il vit.** Dans votre intranet, à côté de la recherche, voir [l'intranet d'entreprise](" + L.intranet + ").",
      ] },
      { heading: "Ce qu'il y a dans l'assistant", body: [
        "La figure empile cinq couches ; la troisième, les droits, est celle qu'un assistant grand public n'a pas.",
      ], visual: 'couches', after: [
        "**Pourquoi pas un assistant grand public.** Coller vos procédures dans un assistant en ligne pose deux questions : où partent les documents, et qui peut lire quoi, voir [utiliser ChatGPT en entreprise](" + L.chatgpt + "). L'assistant d'entreprise applique vos droits, cite ses sources et garde un journal des questions. **Où tourne le modèle.** Chez un fournisseur, avec un contrat sur l'usage des données, ou sur vos serveurs quand les documents ne doivent pas sortir, voir [un modèle sur ses serveurs](" + L.serveurs + "). Le choix se fait après le tri : il dépend de ce que contiennent vraiment vos documents.",
        "**Ce qu'il ne fait pas.** Il ne décide rien et n'écrit dans aucun logiciel : il répond. Faire agir une IA dans vos outils est une autre étape, voir [par où commencer avec un agent IA](" + L.agent + "). **Les canaux.** Le même index peut répondre dans l'intranet, sur un poste d'atelier ou par messagerie, voir [l'agent IA sur WhatsApp](" + L.whatsapp + "). **Le journal.** Chaque question, les passages utilisés et l'avis de la personne sont conservés : c'est la matière du réglage, et la liste de ce que vos documents ne disent pas.",
      ] },
      { heading: "Dix semaines, en commençant par compter les questions", body: [
        "Dix semaines dans l'exemple, dont deux à compter les questions avant d'écrire une ligne de code.",
      ], visual: 'calendrier', after: [
        "**Compter.** Pendant deux semaines, trois services notent chaque question reçue. Dans l'exemple : 212 questions, 96 aux ressources humaines, 62 à l'informatique, 54 à la qualité, soit 106 par semaine. À six minutes la réponse, hypothèse de l'exemple, plus de dix heures par semaine pour ceux qui répondent, sans compter l'attente de ceux qui demandent. Ces questions deviennent le jeu de test. **Trier.** Le tri des documents commence en même temps : c'est lui qui dure.",
        "**Régler.** La première version répond en semaine six ; le jeu de 120 questions est rejoué à chaque réglage, et rien n'est ouvert tant que les réponses inventées ne sont pas descendues au niveau que vous avez fixé. **Le pilote.** Un service d'abord. Chaque semaine, les questions sans réponse sont relues avec les responsables : soit le document existe et la recherche est à corriger, soit il manque et quelqu'un l'écrit. **L'ouverture.** Aux autres services, un par un.",
      ] },
      { heading: "Cinq situations, et ce que l'assistant change", body: [
        "La figure reprend cinq situations, avec les dossiers partagés puis avec l'assistant.",
      ], visual: 'situations', after: [
        "**La question répétée.** La personne obtient la réponse et sa source sans attendre ; le service garde son temps pour les cas qui demandent un jugement. **La procédure modifiée.** L'ancienne version sort de l'index le jour où la nouvelle entre : c'est la moitié de la valeur du projet. **La note réservée.** L'assistant ne « sait » pas ce que la personne n'a pas le droit de lire : le passage n'arrive jamais jusqu'au modèle.",
        "**Ce que l'assistant ne remplace pas.** Les personnes qui savent : il leur transmet ce qui n'est écrit nulle part, et leur montre quelles notes manquent. **Prêt à l'emploi ou sur mesure.** Des assistants prêts à l'emploi se branchent sur un espace de documents ; ils conviennent quand vos documents sont déjà triés, dans un seul outil, avec des droits simples. Le sur-mesure se justifie quand les sources sont plusieurs, quand les droits suivent vos services, quand il faut l'arabe, le français et la darija, un jeu de questions à vous, et des documents qui restent chez vous.",
      ], list: [
        "**Ce que vous recevez** : le comptage des questions ; le tri des documents avec un responsable et une date par document ; l'index par les mots et par le sens ; le filtre des droits avant le modèle ; des réponses avec document, page et date ; le « je ne sais pas » et la transmission ; le jeu de questions rejoué à chaque changement ; le journal des questions sans réponse.",
        "**Ce que l'entreprise évite** : la réponse donnée de mémoire, l'ancienne version qui circule, la note réservée lue par qui n'y a pas droit, la réponse inventée dite avec assurance, les documents collés dans un assistant en ligne, le projet lancé sans savoir s'il répond juste.",
        "**Ce qui est mesuré** : réponses justes avec la bonne source sur le jeu de questions ; réponses inventées ; « je ne sais pas » à tort et justifiés ; questions par service et par semaine ; avis des utilisateurs ; délai entre la modification d'un document et sa mise à jour dans l'index.",
        "**Ce que fait Symloop** : le comptage et le jeu de questions avec vos responsables, le tri outillé des documents, l'index, le filtre des droits, les réponses citées, le refus et la transmission, l'intégration à votre intranet, le choix du modèle et de son hébergement, en arabe et en français. Le contenu des documents reste le vôtre.",
      ], faq: [
        { q: "Qu'est-ce qu'un chatbot d'entreprise ?", a: "Un assistant qui répond aux questions des employés ou des clients à partir des documents de l'entreprise : il retrouve les passages utiles, rédige une réponse et cite ses sources." },
        { q: "Comment mettre en place un chatbot sur nos documents ?", a: "En cinq étapes : compter les questions réelles, trier les documents, reprendre les droits d'accès, indexer et répondre avec sources, puis mesurer sur un jeu de questions avant d'ouvrir à un service pilote." },
        { q: "Un chatbot peut-il inventer une réponse ?", a: "Oui. Répondre à partir de vos documents réduit ce risque sans le supprimer. D'où la source affichée à chaque phrase, le « je ne sais pas » sous un seuil, et un jeu de questions rejoué à chaque changement." },
        { q: "Qu'est-ce que le RAG ?", a: "La génération augmentée par la recherche : avant de répondre, le modèle reçoit les passages de vos documents qui se rapportent à la question, et rédige à partir d'eux." },
        { q: "Le chatbot respecte-t-il les droits d'accès ?", a: "Il le doit : chaque passage hérite du groupe de lecture de son document, et le filtre s'applique avant le modèle. Un passage que la personne ne peut pas ouvrir n'entre pas dans la réponse." },
        { q: "Nos documents sortent-ils de l'entreprise ?", a: "Cela dépend de l'endroit où tourne le modèle : chez un fournisseur, sous contrat, ou sur vos serveurs. Le choix se fait après le tri, selon ce que contiennent vos documents." },
        { q: "Répond-il en arabe et en français ?", a: "Oui, à condition de le vérifier : le jeu de questions contient des questions en arabe, en français et en darija, sur des documents écrits dans l'une ou l'autre langue." },
        { q: "Que se passe-t-il quand un document change ?", a: "Ses anciens passages sont retirés de l'index et les nouveaux ajoutés. Sans cela, l'assistant continue de répondre avec l'ancienne version." },
        { q: "Peut-on utiliser un assistant grand public à la place ?", a: "Pour des documents publics, parfois. Pour des procédures internes, il manque vos droits d'accès, la maîtrise de l'endroit où vont les documents, et la mesure sur vos questions." },
        { q: "Par quoi commencer ?", a: "Par deux semaines de comptage des questions réelles, et par le tri des documents : doublons, anciennes versions, scans, responsable et date." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "Le filtre des droits passe avant le modèle : un passage que la personne ne peut pas ouvrir n'entre jamais dans la réponse." },
      { after: 1, text: "Un assistant répond avec ce qu'on lui donne : une ancienne version indexée devient une réponse fausse, dite avec assurance." },
    ],
    cta: { eyebrow: "Dites-nous combien de documents vous avez, où ils sont, et quelles questions reviennent : nous commençons par les compter", title: "Mêmes questions cent fois par semaine, procédures que personne ne lit, anciennes versions qui circulent, réponses de mémoire, documents collés dans un assistant en ligne, ou équipe que vous dirigez en Algérie depuis la France", body: "Symloop construit l'assistant qui répond avec vos documents : tri du corpus, index, droits d'accès, réponses citées, « je ne sais pas », jeu de questions, en arabe et en français. Décrivez-nous vos documents, vos services et vos outils." },
    related: { label: 'À lire aussi', items: [
      { href: L.agent, kind: '2027', name: 'Agent IA en entreprise : par où commencer' },
      { href: L.mesurer, kind: '2027', name: 'Mesurer qu’une IA marche : jeu d’évaluation, hallucinations' },
      { href: L.chatgpt, kind: '2027', name: 'Utiliser ChatGPT en entreprise : données confidentielles' },
      { href: L.serveurs, kind: '2027', name: 'Déployer un modèle d’IA sur ses serveurs' },
    ] },
  },
  en: {
    kind: 'Company chatbot · Algeria · 2027', title: "Company chatbot in Algeria (2027): the same questions a hundred times a week, four thousand pages of procedures nobody reads, answers given from memory; an AI assistant that answers from your documents, quotes the page, respects access rights, says “I don't know”, and what we put in place",
    dek: "“Our procedures, service notes and technical sheets add up to four thousand pages, spread across shared folders. The same questions reach human resources, IT and quality a hundred times a week. Newcomers find nothing, old hands answer from memory, sometimes with the version from two years ago. We want a chatbot that answers from our documents, in Arabic and French, without inventing anything. How do we set it up?” An assistant that finds the right passages, reads only what the person is allowed to read, quotes its source, and says “I don't know” when nothing is written.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Company chatbot', 'AI assistant on your documents', 'Answers with sources', 'Access rights', 'Test question set', 'Algeria 2027'],
    intro: [
      "**Short answer.** A useful company chatbot does not answer from memory: for each question, it finds in your documents the few passages that relate to it, removes those the person is not allowed to read, writes an answer from the remaining passages while quoting the document and the page, and says “I don't know” when nothing is written. The work is first in the documents. In this page's example, out of 1,150 files, 190 are duplicates or old versions; on 120 test questions, answers that are right with the right source go from 84 to 107 once the triage is done.",
      "This page is for companies of one hundred to a few thousand people, industry, distribution, services, clinics, schools, in Algeria, and for diaspora founders who lead a team here. The definitions come from public sources: chatbot, retrieval-augmented generation, hallucination, large language model, vector database, semantic search, the BM25 ranking function, role-based access control, optical character recognition. The company, its documents, its questions and its results are a constructed example. The page does not cover the legal rules on personal data, and quotes no price.",
    ],
    sections: [
      { heading: "One question, four passages, one answer with its sources", body: [
        "The figure follows a question, from the whole index to the four passages quoted in the answer.",
      ], visual: 'question', after: [
        "**The chatbot.** It is software designed to converse through text or speech. The one this page is about relies on a large language model, a model trained on a vast amount of text, which is given your documents to read. **Retrieval-augmented generation.** It is the technique that lets a model retrieve and incorporate new information: it first refers to a specified set of documents, then answers. It helps reduce hallucinations, those false answers presented as fact, and allows sources to be cited. **The limit.** It does not remove them: the same source writes that it does not prevent hallucinations.",
        "**In the example.** The index holds 7,200 passages. A question brings out 40, by words and by meaning; re-ranking keeps 8. Two are reserved for managers: they are removed before the model reads anything. The answer is written with 4 passages, and each sentence carries its source: document, page, update date. **Two searches.** Search by meaning finds “leave” when someone writes “absence”; search by words, the kind classic search engines use, finds an exact reference such as “RH-07”. Both are needed. **Refusal.** Under a relevance threshold, the assistant answers “I don't know” and forwards the question.",
      ] },
      { heading: "The work is in the documents", body: [
        "The figure sorts the 1,150 documents, then replays the same 120 questions before and after triage.",
      ], visual: 'corpus', after: [
        "**Triage.** Before indexing, you count. In the example, out of 1,150 files: 190 duplicates and old versions, one in six, removed; 85 scans with no text, put through character recognition, which converts the image of a text into machine-readable text; 60 with no owner or date, assigned. That leaves 960 documents, 3,300 pages. Filing itself is another subject, see [archiving documents](" + L.archiver + "). **Why.** An assistant answers with what it is given: an old version left in the index becomes a wrong answer, stated with confidence.",
        "**Measurement.** 120 real questions, each with the expected answer and its source, written by the people in charge of each subject. With everything indexed: 84 answers right with the right source, 9 taken from an old version, 14 “I don't know” by mistake, 6 justified, 7 invented or wrong. After triage and tuning of the search: 107, 1, 4, 6 and 2. **What remains.** Two wrong answers out of 120: that is why the source is always displayed, and why the question set is replayed at every change, see [measuring that an AI works](" + L.mesurer + "). The six justified “I don't know” answers are the list of notes to write.",
      ] },
      { heading: "A document enters the assistant, in six steps", body: [
        "The figure follows a document, from the shared folder to its update in the index.",
      ], visual: 'ingestion', after: [
        "**Splitting.** Documents are divided into shorter passages for indexing and retrieval. Splitting by headings and paragraphs, rather than at a fixed length, keeps a rule and its exception together; each passage keeps the document, the page and the date it comes from. **The index.** Passages are stored in a database that stores and retrieves numerical representations of text, known as a vector database; retrieval-augmented generation is an especially common use of it. **Both languages.** A question in Arabic must find a procedure written in French, and the reverse: this is checked in the question set, see [an application in both languages](" + L.bilingue + ").",
        "**Rights.** Role-based access control restricts access to a system to authorised people. Here, each passage inherits the reading group of its document, taken from your folders, and the filter applies before the model: see [roles, rights and audit log](" + L.roles + "). In the example, five groups and 140 reserved documents. **Updates.** When a document changes, its old passages are removed and the new ones indexed, within the hour in the example; a document with no owner does not enter. **Where it lives.** In your intranet, next to the search box, see [the company intranet](" + L.intranet + ").",
      ] },
      { heading: "What is inside the assistant", body: [
        "The figure stacks five layers; the third, the rights, is the one a consumer assistant does not have.",
      ], visual: 'couches', after: [
        "**Why not a consumer assistant.** Pasting your procedures into an online assistant raises two questions: where the documents go, and who can read what, see [using ChatGPT at work](" + L.chatgpt + "). The company assistant applies your rights, cites its sources and keeps a log of the questions. **Where the model runs.** At a provider, with a contract on how the data is used, or on your servers when the documents must not leave, see [a model on your own servers](" + L.serveurs + "). The choice is made after triage: it depends on what your documents really contain.",
        "**What it does not do.** It decides nothing and writes into no software: it answers. Having an AI act in your tools is another step, see [where to start with an AI agent](" + L.agent + "). **Channels.** The same index can answer in the intranet, on a workshop terminal or by messaging, see [the AI agent on WhatsApp](" + L.whatsapp + "). **The log.** Each question, the passages used and the person's feedback are kept: it is the material for tuning, and the list of what your documents do not say.",
      ] },
      { heading: "Ten weeks, starting by counting the questions", body: [
        "Ten weeks in the example, two of them counting questions before a line of code is written.",
      ], visual: 'calendrier', after: [
        "**Counting.** For two weeks, three departments note every question they receive. In the example: 212 questions, 96 to human resources, 62 to IT, 54 to quality, that is 106 a week. At six minutes per answer, an assumption of the example, more than ten hours a week for those who answer, not counting the wait of those who ask. These questions become the test set. **Triage.** Document triage starts at the same time: it is the part that lasts.",
        "**Tuning.** The first version answers in week six; the set of 120 questions is replayed at every tuning, and nothing is opened until invented answers are down to the level you set. **The pilot.** One department first. Every week, the unanswered questions are reread with the people in charge: either the document exists and the search needs fixing, or it is missing and someone writes it. **Opening.** To the other departments, one by one.",
      ] },
      { heading: "Five situations, and what the assistant changes", body: [
        "The figure takes five situations, with shared folders and then with the assistant.",
      ], visual: 'situations', after: [
        "**The repeated question.** The person gets the answer and its source without waiting; the department keeps its time for the cases that need judgement. **The changed procedure.** The old version leaves the index the day the new one enters: that is half the value of the project. **The reserved note.** The assistant does not “know” what the person is not allowed to read: the passage never reaches the model.",
        "**What the assistant does not replace.** The people who know: it forwards to them what is written nowhere, and shows them which notes are missing. **Off the shelf or custom.** Ready-made assistants plug into a document space; they fit when your documents are already sorted, in a single tool, with simple rights. Custom work is justified when there are several sources, when rights follow your departments, when you need Arabic, French and darija, a question set of your own, and documents that stay on your side.",
      ], list: [
        "**What you receive**: the count of questions; document triage with an owner and a date per document; the index by words and by meaning; the rights filter before the model; answers with document, page and date; the “I don't know” and the forwarding; the question set replayed at every change; the log of unanswered questions.",
        "**What the company avoids**: the answer given from memory, the old version that circulates, the reserved note read by someone with no right to it, the invented answer stated with confidence, documents pasted into an online assistant, the project launched without knowing whether it answers right.",
        "**What is measured**: answers right with the right source on the question set; invented answers; “I don't know” by mistake and justified; questions per department and per week; user feedback; time between a document change and its update in the index.",
        "**What Symloop does**: the count and the question set with the people in charge, tool-assisted document triage, the index, the rights filter, answers with sources, refusal and forwarding, integration into your intranet, the choice of the model and of its hosting, in Arabic and French. The content of the documents remains yours.",
      ], faq: [
        { q: "What is a company chatbot?", a: "An assistant that answers employees' or customers' questions from the company's documents: it finds the useful passages, writes an answer and cites its sources." },
        { q: "How do we set up a chatbot on our documents?", a: "In five steps: count the real questions, sort the documents, take over the access rights, index and answer with sources, then measure on a question set before opening to a pilot department." },
        { q: "Can a chatbot invent an answer?", a: "Yes. Answering from your documents reduces that risk without removing it. Hence the source shown for each sentence, the “I don't know” under a threshold, and a question set replayed at every change." },
        { q: "What is RAG?", a: "Retrieval-augmented generation: before answering, the model receives the passages of your documents that relate to the question, and writes from them." },
        { q: "Does the chatbot respect access rights?", a: "It must: each passage inherits the reading group of its document, and the filter applies before the model. A passage the person cannot open does not enter the answer." },
        { q: "Do our documents leave the company?", a: "It depends on where the model runs: at a provider, under contract, or on your servers. The choice is made after triage, according to what your documents contain." },
        { q: "Does it answer in Arabic and French?", a: "Yes, provided it is checked: the question set contains questions in Arabic, French and darija, on documents written in either language." },
        { q: "What happens when a document changes?", a: "Its old passages are removed from the index and the new ones added. Without that, the assistant keeps answering with the old version." },
        { q: "Can we use a consumer assistant instead?", a: "For public documents, sometimes. For internal procedures, it lacks your access rights, control over where the documents go, and measurement on your questions." },
        { q: "Where do we start?", a: "With two weeks counting the real questions, and with document triage: duplicates, old versions, scans, owner and date." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "The rights filter runs before the model: a passage the person cannot open never enters the answer." },
      { after: 1, text: "An assistant answers with what it is given: an old version left in the index becomes a wrong answer, stated with confidence." },
    ],
    cta: { eyebrow: "Tell us how many documents you have, where they are, and which questions keep coming back: we start by counting them", title: "The same questions a hundred times a week, procedures nobody reads, old versions in circulation, answers from memory, documents pasted into an online assistant, or a team you lead in Algeria from France", body: "Symloop builds the assistant that answers from your documents: corpus triage, index, access rights, answers with sources, “I don't know”, question set, in Arabic and French. Describe your documents, your departments and your tools." },
    related: { label: 'Also read', items: [
      { href: L.agent, kind: '2027', name: 'AI agent in a company: where to start' },
      { href: L.mesurer, kind: '2027', name: 'Measuring that an AI works: evaluation set, hallucinations' },
      { href: L.chatgpt, kind: '2027', name: 'Using ChatGPT at work: confidential data' },
      { href: L.serveurs, kind: '2027', name: 'Running an AI model on your own servers' },
    ] },
  },
  ar: {
    kind: 'مساعد المؤسسة · الجزائر · 2027', title: "شات بوت للمؤسسة في الجزائر (2027): الأسئلة نفسها مئة مرة في الأسبوع، أربعة آلاف صفحة من الإجراءات لا يقرؤها أحد، وأجوبة من الذاكرة؛ مساعد ذكي يجيب بوثائقكم، يذكر الصفحة، يحترم الصلاحيات، يقول «لا أعرف»، وما نضعه",
    dek: "«إجراءاتنا، مذكرات المصالح، والبطاقات التقنية تبلغ أربعة آلاف صفحة، موزَّعة على ملفات مشتركة. الأسئلة نفسها تصل مئة مرة في الأسبوع إلى الموارد البشرية، الإعلام الآلي، والجودة. الجدد لا يجدون شيئاً، والقدامى يجيبون من الذاكرة، وأحياناً بنسخة عمرها سنتان. نريد روبوت محادثة يجيب بوثائقنا، بالعربية والفرنسية، دون أن يختلق شيئاً. كيف نضعه؟» مساعد يجد المقاطع الصحيحة، لا يقرأ إلا ما يحق للشخص قراءته، يذكر مصدره، ويقول «لا أعرف» حين لا يوجد شيء مكتوب.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['شات بوت للمؤسسة', 'مساعد ذكي على وثائقكم', 'أجوبة بمصادرها', 'صلاحيات الدخول', 'مجموعة أسئلة الاختبار', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** روبوت المحادثة النافع في المؤسسة لا يجيب من الذاكرة: لكل سؤال، يجد في وثائقكم المقاطع القليلة المتعلقة به، يستبعد ما لا يحق للشخص قراءته، يكتب جواباً انطلاقاً من المقاطع الباقية مع ذكر الوثيقة والصفحة، ويقول «لا أعرف» حين لا يوجد شيء مكتوب. والعمل أولاً في الوثائق. في مثال هذه الصفحة، من " + I('1 150') + " ملفاً، 190 تكرارات أو نسخ قديمة؛ وعلى 120 سؤال اختبار، الأجوبة الصحيحة بالمصدر الصحيح تنتقل من 84 إلى 107 بعد الفرز.",
      "هذه الصفحة موجّهة إلى المؤسسات من مئة إلى بضعة آلاف من الأشخاص، الصناعة، التوزيع، الخدمات، العيادات، والمدارس، في الجزائر، وإلى مؤسِّسات ومؤسِّسي الجالية الذين يديرون فريقاً هنا. التعريفات من مصادر عمومية: روبوت المحادثة، التوليد المعزَّز بالاسترجاع، الهلوسة، النموذج اللغوي الكبير، قاعدة البيانات الشعاعية، البحث بالمعنى، دالة الترتيب " + I('BM25') + "، التحكم في الدخول حسب الأدوار، والتعرف على الحروف. والمؤسسة، وثائقها، أسئلتها، ونتائجها مثال مركَّب. والصفحة لا تتناول القواعد القانونية الخاصة بالمعطيات الشخصية، ولا تذكر أي سعر.",
    ],
    sections: [
      { heading: "سؤال واحد، أربعة مقاطع، وجواب بمصادره", body: [
        "الشكل يتابع سؤالاً، من الفهرس كله إلى المقاطع الأربعة المذكورة في الجواب.",
      ], visual: 'question', after: [
        "**روبوت المحادثة.** هو برنامج مصمَّم للمحادثة بالنص أو بالصوت. والذي تتحدث عنه هذه الصفحة يعتمد على نموذج لغوي كبير، أي نموذج مدرَّب على كمية كبيرة جداً من النصوص، تُعطى له وثائقكم ليقرأها. **التوليد المعزَّز بالاسترجاع.** هو التقنية التي تسمح لنموذج باسترجاع معلومة جديدة وإدماجها: يرجع أولاً إلى مجموعة محددة من الوثائق، ثم يجيب. وهي تساعد على تقليل الهلوسة، أي الأجوبة الخاطئة المقدَّمة كوقائع، وتسمح بذكر المصادر. **الحد.** لا تلغيها: المصدر نفسه يكتب أنها لا تمنع الهلوسة.",
        "**في المثال.** الفهرس يحتوي " + I('7 200') + " مقطع. السؤال يُخرج منها 40، بالكلمات وبالمعنى؛ وإعادة الترتيب تحتفظ بـ8. اثنان مخصَّصان للتأطير: يُستبعَدان قبل أن يقرأ النموذج أي شيء. والجواب يُكتَب بـ4 مقاطع، وكل جملة تحمل مصدرها: الوثيقة، الصفحة، وتاريخ التحيين. **بحثان.** البحث بالمعنى يجد «العطلة» حين يُكتَب «الغياب»؛ والبحث بالكلمات، وهو بحث المحركات التقليدية، يجد مرجعاً محدداً مثل «" + I('RH-07') + "». ويلزم الاثنان. **الرفض.** تحت عتبة ملاءمة، يجيب المساعد «لا أعرف» ويحوّل السؤال.",
      ] },
      { heading: "العمل في الوثائق", body: [
        "الشكل يفرز الوثائق، ثم يعيد الأسئلة الـ120 نفسها قبل الفرز وبعده.",
      ], visual: 'corpus', after: [
        "**الفرز.** قبل الفهرسة، نعدّ. في المثال، من " + I('1 150') + " ملفاً: 190 تكراراً ونسخة قديمة، واحد من ستة، مسحوبة؛ 85 صورة ممسوحة دون نص، تمر بالتعرف على الحروف، الذي يحوّل صورة النص إلى نص تقرؤه الآلة؛ و60 دون مسؤول ولا تاريخ، أُسنِدت. تبقى 960 وثيقة، و" + I('3 300') + " صفحة. والترتيب نفسه موضوع آخر، انظر [أرشفة الوثائق](" + L.archiver + "). **لماذا.** المساعد يجيب بما يُعطى له: النسخة القديمة المتروكة في الفهرس تصير جواباً خاطئاً، يُقال بثقة.",
        "**القياس.** 120 سؤالاً حقيقياً، كل واحد مع الجواب المنتظَر ومصدره، يكتبها المسؤولون عن المواضيع. مع فهرسة الكل: 84 جواباً صحيحاً بالمصدر الصحيح، 9 مأخوذة من نسخة قديمة، 14 «لا أعرف» خطأً، 6 مبرَّرة، و7 مختلَقة أو خاطئة. وبعد الفرز وضبط البحث: 107، 1، 4، 6 و2. **ما يبقى.** جوابان خاطئان من 120: لهذا يُعرَض المصدر دائماً، ولهذا تُعاد مجموعة الأسئلة عند كل تغيير، انظر [قياس أن الذكاء الاصطناعي يعمل](" + L.mesurer + "). وأجوبة «لا أعرف» الست المبرَّرة هي قائمة المذكرات التي يجب كتابتها.",
      ] },
      { heading: "وثيقة تدخل المساعد، في ست مراحل", body: [
        "الشكل يتابع وثيقة، من الملف المشترك إلى تحيينها في الفهرس.",
      ], visual: 'ingestion', after: [
        "**التقطيع.** الوثائق تُقسَّم إلى مقاطع أقصر من أجل الفهرسة والاسترجاع. والتقطيع حسب العناوين والفقرات، لا بطول ثابت، يُبقي القاعدة واستثناءها معاً؛ وكل مقطع يحتفظ بالوثيقة، الصفحة، والتاريخ الذي جاء منه. **الفهرس.** المقاطع تُحفَظ في قاعدة تخزّن تمثيلات رقمية للنص وتسترجعها، تُسمّى قاعدة شعاعية؛ والتوليد المعزَّز بالاسترجاع من أشيع استعمالاتها. **اللغتان.** السؤال بالعربية يجب أن يجد إجراءً مكتوباً بالفرنسية، والعكس: وهذا يُتحقَّق منه في مجموعة الأسئلة، انظر [تطبيق باللغتين](" + L.bilingue + ").",
        "**الصلاحيات.** التحكم في الدخول حسب الأدوار يحصر الدخول إلى نظام في الأشخاص المرخَّص لهم. وهنا، كل مقطع يرث مجموعة القراءة لوثيقته، المأخوذة من ملفاتكم، والمصفاة تُطبَّق قبل النموذج: انظر [الأدوار، الصلاحيات، والسجل](" + L.roles + "). في المثال، خمس مجموعات و140 وثيقة مخصَّصة. **التحيين.** حين تتغيّر وثيقة، تُسحَب مقاطعها القديمة وتُفهرَس الجديدة، في غضون ساعة في المثال؛ والوثيقة دون مسؤول لا تدخل. **أين يوجد.** في شبكتكم الداخلية، بجانب البحث، انظر [الشبكة الداخلية للمؤسسة](" + L.intranet + ").",
      ] },
      { heading: "ما يوجد في المساعد", body: [
        "الشكل يرصّ خمس طبقات؛ والثالثة، الصلاحيات، هي التي لا يملكها مساعد عمومي.",
      ], visual: 'couches', after: [
        "**لماذا لا مساعد عمومي.** لصق إجراءاتكم في مساعد على الإنترنت يطرح سؤالين: أين تذهب الوثائق، ومن يقرأ ماذا، انظر [استعمال " + I('ChatGPT') + " في المؤسسة](" + L.chatgpt + "). ومساعد المؤسسة يطبّق صلاحياتكم، يذكر مصادره، ويحتفظ بسجل للأسئلة. **أين يعمل النموذج.** عند مزوّد، بعقد حول استعمال البيانات، أو على خوادمكم حين لا يجب أن تخرج الوثائق، انظر [نموذج على خوادمكم](" + L.serveurs + "). والاختيار يتم بعد الفرز: يتوقف على ما تحتويه وثائقكم فعلاً.",
        "**ما لا يفعله.** لا يقرّر شيئاً ولا يكتب في أي برنامج: يجيب. وجعل الذكاء الاصطناعي يتصرف في أدواتكم مرحلة أخرى، انظر [من أين نبدأ مع وكيل ذكي](" + L.agent + "). **القنوات.** الفهرس نفسه يمكن أن يجيب في الشبكة الداخلية، على حاسوب في الورشة، أو بالمراسلة، انظر [الوكيل الذكي على " + I('WhatsApp') + "](" + L.whatsapp + "). **السجل.** كل سؤال، المقاطع المستعملة، ورأي الشخص محفوظة: هي مادة الضبط، وقائمة ما لا تقوله وثائقكم.",
      ] },
      { heading: "عشرة أسابيع، بدءاً بعدّ الأسئلة", body: [
        "عشرة أسابيع في المثال، منها أسبوعان لعدّ الأسئلة قبل كتابة أي سطر برمجة.",
      ], visual: 'calendrier', after: [
        "**العدّ.** لأسبوعين، ثلاث مصالح تدوّن كل سؤال يصلها. في المثال: 212 سؤالاً، 96 للموارد البشرية، 62 للإعلام الآلي، و54 للجودة، أي 106 في الأسبوع. وبست دقائق للجواب، وهي فرضية المثال، أكثر من عشر ساعات في الأسبوع لمن يجيبون، دون حساب انتظار من يسألون. وهذه الأسئلة تصير مجموعة الاختبار. **الفرز.** فرز الوثائق يبدأ في الوقت نفسه: هو الذي يطول.",
        "**الضبط.** النسخة الأولى تجيب في الأسبوع السادس؛ ومجموعة الأسئلة الـ120 تُعاد عند كل ضبط، ولا يُفتَح شيء قبل أن تنزل الأجوبة المختلَقة إلى المستوى الذي حددتموه. **التجربة.** مصلحة واحدة أولاً. وكل أسبوع، تُراجَع الأسئلة دون جواب مع المسؤولين: إما الوثيقة موجودة والبحث يجب تصحيحه، وإما تنقص ويكتبها أحدهم. **الفتح.** للمصالح الأخرى، واحدة بعد واحدة.",
      ] },
      { heading: "خمس حالات، وما يغيّره المساعد", body: [
        "الشكل يأخذ خمس حالات، مع الملفات المشتركة ثم مع المساعد.",
      ], visual: 'situations', after: [
        "**السؤال المتكرر.** الشخص ينال الجواب ومصدره دون انتظار؛ والمصلحة تحتفظ بوقتها للحالات التي تتطلب حكماً. **الإجراء المعدَّل.** النسخة القديمة تخرج من الفهرس يوم دخول الجديدة: هذا نصف قيمة المشروع. **المذكرة المخصَّصة.** المساعد لا «يعرف» ما لا يحق للشخص قراءته: المقطع لا يصل أبداً إلى النموذج.",
        "**ما لا يعوّضه المساعد.** الأشخاص الذين يعرفون: يحوّل إليهم ما ليس مكتوباً في أي مكان، ويريهم أي مذكرات تنقص. **جاهز أم على المقاس.** توجد مساعدات جاهزة توصَل بفضاء وثائق؛ وهي مناسبة حين تكون وثائقكم مفروزة، في أداة واحدة، بصلاحيات بسيطة. والتطوير على المقاس مبرَّر حين تتعدد المصادر، حين تتبع الصلاحيات مصالحكم، حين تلزم العربية والفرنسية والدارجة، مجموعة أسئلة خاصة بكم، ووثائق تبقى عندكم.",
      ], list: [
        "**ما تتسلّمونه**: عدّ الأسئلة؛ فرز الوثائق مع مسؤول وتاريخ لكل وثيقة؛ الفهرس بالكلمات وبالمعنى؛ مصفاة الصلاحيات قبل النموذج؛ أجوبة بالوثيقة، الصفحة، والتاريخ؛ «لا أعرف» والتحويل؛ مجموعة الأسئلة التي تُعاد عند كل تغيير؛ وسجل الأسئلة دون جواب.",
        "**ما تتجنّبه المؤسسة**: الجواب من الذاكرة، النسخة القديمة التي تتداول، المذكرة المخصَّصة التي يقرؤها من لا حق له، الجواب المختلَق الذي يُقال بثقة، الوثائق الملصقة في مساعد على الإنترنت، والمشروع الذي يُطلَق دون معرفة هل يجيب صحيحاً.",
        "**ما يُقاس**: الأجوبة الصحيحة بالمصدر الصحيح على مجموعة الأسئلة؛ الأجوبة المختلَقة؛ «لا أعرف» خطأً ومبرَّرة؛ الأسئلة لكل مصلحة وفي الأسبوع؛ آراء المستعملين؛ والأجل بين تعديل وثيقة وتحيينها في الفهرس.",
        "**ما تفعله Symloop**: العدّ ومجموعة الأسئلة مع مسؤوليكم، فرز الوثائق بأدوات، الفهرس، مصفاة الصلاحيات، الأجوبة بمصادرها، الرفض والتحويل، الإدماج في شبكتكم الداخلية، واختيار النموذج ومكان استضافته، بالعربية والفرنسية. ومحتوى الوثائق يبقى ملككم.",
      ], faq: [
        { q: "ما هو شات بوت المؤسسة؟", a: "مساعد يجيب عن أسئلة الموظفين أو الزبائن انطلاقاً من وثائق المؤسسة: يجد المقاطع المفيدة، يكتب جواباً، ويذكر مصادره." },
        { q: "كيف نضع شات بوت على وثائقنا؟", a: "في خمس مراحل: عدّ الأسئلة الحقيقية، فرز الوثائق، استرجاع صلاحيات الدخول، الفهرسة والجواب بالمصادر، ثم القياس على مجموعة أسئلة قبل الفتح لمصلحة تجريبية." },
        { q: "هل يمكن أن يختلق الشات بوت جواباً؟", a: "نعم. الجواب انطلاقاً من وثائقكم يقلّل هذا الخطر دون أن يلغيه. ولهذا يُعرَض المصدر لكل جملة، ويقول «لا أعرف» تحت عتبة، وتُعاد مجموعة الأسئلة عند كل تغيير." },
        { q: "ما هو التوليد المعزَّز بالاسترجاع؟", a: "قبل الجواب، يتلقى النموذج مقاطع وثائقكم المتعلقة بالسؤال، ويكتب انطلاقاً منها." },
        { q: "هل يحترم الشات بوت صلاحيات الدخول؟", a: "يجب ذلك: كل مقطع يرث مجموعة القراءة لوثيقته، والمصفاة تُطبَّق قبل النموذج. والمقطع الذي لا يستطيع الشخص فتحه لا يدخل الجواب." },
        { q: "هل تخرج وثائقنا من المؤسسة؟", a: "يتوقف ذلك على مكان عمل النموذج: عند مزوّد، بعقد، أو على خوادمكم. والاختيار يتم بعد الفرز، حسب ما تحتويه وثائقكم." },
        { q: "هل يجيب بالعربية والفرنسية؟", a: "نعم، بشرط التحقق: مجموعة الأسئلة تحتوي أسئلة بالعربية، الفرنسية، والدارجة، على وثائق مكتوبة بإحدى اللغتين." },
        { q: "ماذا يحدث حين تتغيّر وثيقة؟", a: "تُسحَب مقاطعها القديمة من الفهرس وتُضاف الجديدة. ودون ذلك، يواصل المساعد الجواب بالنسخة القديمة." },
        { q: "هل يمكن استعمال مساعد عمومي بدل ذلك؟", a: "للوثائق العمومية، أحياناً. وللإجراءات الداخلية، تنقصه صلاحياتكم، التحكم في مكان ذهاب الوثائق، والقياس على أسئلتكم." },
        { q: "بماذا يُبدأ؟", a: "بأسبوعين من عدّ الأسئلة الحقيقية، وبفرز الوثائق: التكرارات، النسخ القديمة، الصور الممسوحة، المسؤول والتاريخ." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "مصفاة الصلاحيات تمر قبل النموذج: المقطع الذي لا يستطيع الشخص فتحه لا يدخل الجواب أبداً." },
      { after: 1, text: "المساعد يجيب بما يُعطى له: النسخة القديمة المفهرَسة تصير جواباً خاطئاً، يُقال بثقة." },
    ],
    cta: { eyebrow: "قولوا لنا كم وثيقة عندكم، أين توجد، وأي أسئلة تتكرر: نبدأ بعدّها", title: "الأسئلة نفسها مئة مرة في الأسبوع، إجراءات لا يقرؤها أحد، نسخ قديمة تتداول، أجوبة من الذاكرة، وثائق ملصقة في مساعد على الإنترنت، أو فريق تديرونه في الجزائر من فرنسا", body: "Symloop تبني المساعد الذي يجيب بوثائقكم: فرز الوثائق، الفهرس، صلاحيات الدخول، أجوبة بمصادرها، «لا أعرف»، ومجموعة أسئلة، بالعربية والفرنسية. صِفوا لنا وثائقكم، مصالحكم، وأدواتكم." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.agent, kind: '2027', name: 'الوكيل الذكي في المؤسسة: من أين نبدأ' },
      { href: L.mesurer, kind: '2027', name: 'قياس أن الذكاء الاصطناعي يعمل: مجموعة التقييم، والهلوسة' },
      { href: L.chatgpt, kind: '2027', name: 'استعمال المساعدات الذكية في المؤسسة: البيانات السرية' },
      { href: L.serveurs, kind: '2027', name: 'تشغيل نموذج ذكاء اصطناعي على خوادمكم' },
    ] },
  },
};

const KEYWORDS = "chatbot algérie, chatbot entreprise algérie 2027, chatbot d'entreprise, chatbot ia entreprise, assistant ia entreprise, assistant ia pour entreprise, chatbot interne, chatbot rh, rag entreprise, rag ia entreprise, base de connaissances ia, comment mettre en place un chatbot, créer un chatbot ia, chatbot sur ses documents, agent ia algérie, company chatbot Algeria, enterprise AI assistant, RAG chatbot company documents, شات بوت, شات بوت ذكاء اصطناعي, روبوت محادثة, انشاء شات بوت, مساعد ذكي للشركات, Symloop";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
