import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/ia-pour-repondre-aux-mails-algerie-2027-agent-ia-tri-des-mails-boite-partagee-demandes-de-devis-brouillons-verifies-delai-de-premiere-reponse.mjs';

const SLUG = 'ia-pour-repondre-aux-mails-algerie-2027-agent-ia-tri-des-mails-boite-partagee-demandes-de-devis-brouillons-verifies-delai-de-premiere-reponse';
const FIGURES = ['file', 'sortes', 'lecture', 'etapes', 'calendrier', 'couches'];
const DATE = '2026-11-23';
const I = (x) => '⁦' + x + '⁩';

const L = {
  sav: '/blog/le-client-a-appele-trois-fois-reclamations-sav-application-algerie-2027-ticket-unique-priorite-delais-escalade-retours-avoirs-espace-client/',
  whatsapp: '/blog/agent-ia-whatsapp-entreprise-algerie-2027-architecture-fenetre-24-heures-templates-passage-humain-cout-message/',
  vocal: '/blog/agent-vocal-ia-standard-telephonique-ia-algerie-2027-appels-manques-prise-de-rendez-vous-francais-arabe-darija-temps-de-reponse-transfert/',
  devis: '/blog/du-devis-a-la-facture-sans-ressaisie-application-algerie-2027-moteur-de-prix-remises-approbation-versions-acceptation-ce-qu-on-construit/',
  lecture: '/blog/lire-factures-bons-de-commande-pieces-par-ia-algerie-2027-photo-en-champs-verifies-schema-controles-validation-humaine-erp/',
  backoffice: '/blog/agent-ia-back-office-erp-algerie-2027-outils-lecture-ecriture-plafonds-approbation-idempotence-journal-ce-que-l-agent-a-le-droit-de-faire/',
  messagerie: '/blog/messagerie-professionnelle-entreprise-algerie-2027-nom-de-domaine-boites-spf-dkim-dmarc-depart-employe-microsoft-365/',
  mesure: '/blog/mesurer-qu-une-ia-marche-avant-la-production-algerie-2027-jeu-d-evaluation-taux-d-erreur-hallucinations-regressions-seuil-de-livraison/',
  chatgpt: '/blog/comment-utiliser-chatgpt-en-entreprise-algerie-2027-ia-au-travail-donnees-confidentielles-compte-personnel-ou-professionnel-trois-bacs/',
};

const CONTENT = {
  fr: {
    kind: 'Agent IA de messagerie · Algérie · 2027', title: "IA pour répondre aux mails en Algérie (2027) : deux cents mails par jour sur contact@, des demandes de devis qui attendent trois jours, une réclamation noyée sous les newsletters, et personne ne sait qui a répondu ; agent IA de tri, brouillons vérifiés, délai de réponse, et ce qu'on met en place",
    dek: "« Notre adresse contact@ reçoit deux cents mails par jour : demandes de devis, commandes, réclamations, factures de fournisseurs, candidatures, et beaucoup de publicité. Deux personnes la relèvent quand elles peuvent. Des demandes de devis attendent trois jours, une réclamation urgente est restée sous des newsletters, et personne ne sait qui a répondu à quoi. On me dit qu'une IA peut trier les mails et y répondre. Est-ce sérieux ? » Oui pour le tri, la lecture et le brouillon ; non pour l'envoi sans relecture de ce qui engage l'entreprise.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['IA pour répondre aux mails', 'Agent IA de tri des mails', 'Boîte mail partagée', 'Demandes de devis et réclamations', 'Délai de première réponse', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Un agent IA de messagerie fait quatre choses sur une boîte partagée : il classe chaque mail à l'arrivée (devis, commande, réclamation, facture, candidature, publicité), il en extrait les éléments utiles (client, produit, quantité, date), il l'envoie à la bonne personne avec un délai, et il prépare un brouillon de réponse à partir de vos modèles et de vos données. Une personne relit et envoie tout ce qui engage l'entreprise. Il se juge sur trois chiffres : le délai de première réponse, les mails restés sans responsable, et les erreurs de tri. Dans l'exemple de cette page, sur 200 mails par jour, 64 ne demandent aucune réponse, et la file des 136 autres est vide à 16 h au lieu de laisser 52 mails au lendemain.",
      "Cette page s'adresse aux entreprises dont une boîte partagée déborde, commerce de gros, industrie, services, cliniques, écoles, agences, en Algérie, et aux fondatrices et fondateurs de la diaspora qui montent un service client ici. Les définitions viennent de sources publiques : filtrage du courrier électronique, répondeur automatique, ticket d'assistance, reconnaissance d'entités nommées, précision et rappel, matrice de confusion, injection d'instructions, protocole d'accès à la messagerie, théorie des files d'attente. Les 200 mails, leur répartition, les cadences et les scores sont un exemple construit. La page ne traite ni des règles sur les données personnelles et la lecture des messageries au travail, ni des règles de la prospection par mail, et ne cite aucun prix d'abonnement.",
    ],
    sections: [
      { heading: "Une journée de la boîte contact@", body: [
        "La figure suit les mails d'une journée, heure par heure : ceux qui arrivent, et ceux qui sont traités.",
      ], visual: 'file', after: [
        "**Une file d'attente.** La théorie des files d'attente est l'étude mathématique des files : ce qui arrive plus vite qu'on ne le traite attend. **Dans l'exemple.** 46 mails sont arrivés dans la nuit, 154 arrivent entre 8 h et 18 h, soit 200. Deux personnes en traitent 16 par heure, entre leurs autres tâches. À 18 h, 148 sont traités et 52 n'ont pas été ouverts. Si l'on traite dans l'ordre d'arrivée, le mail ouvert à 18 h est arrivé vers 13 h. Ceux qui restent passent au lendemain, derrière les nouveaux : c'est ainsi qu'une demande de devis attend trois jours.",
        "**Avec l'agent.** Chaque mail est classé à l'arrivée. 64 ne demandent aucune réponse, publicité, notifications, lettres d'information : ils sont rangés sans personne. Restent 136 mails pour des personnes, déjà triés, lus et accompagnés d'un brouillon : elles en envoient 18 par heure. À 16 h la file est vide, et chaque mail part dans l'heure. **Ce que cela dit.** Le gain ne vient pas d'une IA qui répond à la place des gens. Il vient de ce que personne n'ouvre plus les 64 mails inutiles, et de ce que les 136 autres arrivent à la bonne personne, déjà lus. **Ce que l'on mesure.** Mails reçus par type ; délai de première réponse ; mails en attente à la fermeture ; mails sans responsable.",
      ] },
      { heading: "Sept sortes de mails, et qui fait quoi", body: [
        "La figure classe les 200 mails en sept sortes, avec ce que l'agent fait de chacune et ce qui reste à une personne.",
      ], visual: 'sortes', after: [
        "**Le tri.** Filtrer le courrier électronique, c'est le traiter pour l'organiser selon des critères. Les règles classiques trient sur l'expéditeur ou sur un mot de l'objet ; un modèle de langage trie sur le sens, en français, en arabe ou en anglais. **Ce que l'agent fait seul.** Ranger ce qui ne demande pas de réponse, accuser réception, ouvrir un ticket, retrouver une commande, transmettre à la comptabilité ou aux ressources humaines. Un répondeur automatique est un programme qui répond de lui-même aux mails qu'il reçoit, le plus souvent avec le même texte pour tous ; l'agent, lui, dit à la personne ce qu'il a compris de sa demande. **Ce qu'une personne décide.** Un prix, un délai de livraison, un geste commercial, la réponse à une réclamation : tout ce qui engage l'entreprise.",
        "**Le doute.** Vingt mails sur 200 ne ressemblent à rien de connu. L'agent ne devine pas : il les transmet à une personne, et ce sont eux qui servent à compléter les catégories. **La réclamation.** Elle devient un ticket, c'est-à-dire le compte rendu suivi d'un problème, avec une priorité et un délai, voir [les réclamations et le SAV](" + L.sav + "). **Sur d'autres canaux.** Les mêmes demandes arrivent par messagerie instantanée et par téléphone, voir [l'agent IA sur WhatsApp](" + L.whatsapp + ") et [l'agent vocal](" + L.vocal + ").",
      ] },
      { heading: "Un mail, lu", body: [
        "La figure montre une demande de prix, les cinq éléments que l'agent en tire avec leur score de confiance, et le brouillon qu'il prépare.",
      ], visual: 'lecture', after: [
        "**Dans l'exemple.** Une demande de prix pour 5 000 cartons, livrés à Sétif « avant le 15 ». L'agent reconnaît le type de demande, retrouve le client dans votre fichier par son adresse, extrait le produit, la quantité et le lieu. La reconnaissance d'entités nommées est la tâche qui repère et classe les entités nommées d'un texte libre ; ici, un lieu, une date, une quantité. **La confiance.** Chaque élément porte un score. « Avant le 15 » ne dit pas le mois : le score tombe à 61 %, sous le seuil, et le champ est montré à la personne avec la phrase d'origine. La question part dans la réponse.",
        "**Le brouillon.** Il reprend ce qui a été compris et annonce le devis ; il ne contient aucun prix. Le prix vient de vos règles, voir [du devis à la facture](" + L.devis + "). **Les pièces jointes.** Un bon de commande en PDF ou une photo se lisent de la même façon, voir [la lecture de pièces par IA](" + L.lecture + "). **Le mail piégé.** L'injection d'instructions consiste à glisser un ordre dans un contenu que le modèle lit, par exemple un mail : le modèle ne distingue pas de lui-même une consigne d'une donnée. La protection est dans la construction : l'agent n'a aucun outil pour transférer, supprimer ou envoyer seul. Le pire qu'un mail piégé obtienne est une mauvaise étiquette, ou un brouillon qu'une personne refusera, voir [ce que l'agent a le droit de faire](" + L.backoffice + ").",
      ] },
      { heading: "Un mail, en six temps", body: [
        "La figure suit un mail, de son arrivée à son envoi.",
      ], visual: 'etapes', after: [
        "**L'arrivée.** L'outil se branche sur vos boîtes partagées par le protocole standard qu'utilisent les logiciels de messagerie : il lit vos mails, il ne remplace pas votre messagerie, voir [la messagerie professionnelle](" + L.messagerie + "). **Le tri et la lecture.** Le type, la langue, l'urgence, puis les éléments. **Le routage.** Le mail va à la personne ou à l'équipe responsable de ce type, avec un délai que vous fixez : par exemple quatre heures pour un devis, une heure pour une réclamation.",
        "**Le brouillon.** Il part de modèles que vous avez approuvés, complétés par vos données. **L'envoi.** C'est le temps accentué : une personne relit, corrige et envoie. L'outil note ce qu'elle a changé ; un brouillon souvent corrigé désigne un modèle à réécrire. **La trace.** Qui a répondu, quand, et à quoi : la question « qui a répondu à ce client ? » a enfin une réponse.",
      ] },
      { heading: "Dix semaines, en commençant par quatre cents anciens mails", body: [
        "Dix semaines dans l'exemple, avant d'ouvrir les brouillons.",
      ], visual: 'calendrier', after: [
        "**Quatre cents anciens mails.** On les lit avec vous : les types réels, les langues, les réponses déjà données. Ils deviennent le jeu d'essai. **La mesure.** Une matrice de confusion est un tableau qui montre, pour chaque type réel, comment l'outil l'a classé. La précision est la part des mails rangés dans un type qui en font vraiment partie ; le rappel est la part des mails d'un type que l'outil a retrouvés. Pour les réclamations, c'est le rappel qui compte : en manquer une coûte plus que d'en signaler une de trop. Voir [mesurer qu'une IA marche](" + L.mesure + ").",
        "**Le mode fantôme.** Pendant deux semaines, l'agent classe et rédige sans rien envoyer ni déplacer : on compare ses choix à ceux de vos équipes. **L'ouverture par type.** D'abord le rangement et les accusés de réception, puis les brouillons, type par type. **Où vont vos mails.** Ils contiennent des prix, des noms et des pièces : le modèle tourne chez un fournisseur sous contrat ou sur vos serveurs, jamais dans un compte personnel, voir [utiliser ChatGPT en entreprise](" + L.chatgpt + "). **Les durées** sont celles d'un exemple construit.",
      ] },
      { heading: "Ce qu'il y a dans l'outil", body: [
        "La figure empile cinq couches ; la troisième dit ce que l'agent a le droit de faire.",
      ], visual: 'couches', after: [
        "**Les boîtes et la lecture.** La connexion aux boîtes partagées, les fils de discussion, les pièces jointes ; puis le classement, l'extraction, la langue et la confiance. **Les règles et les droits.** C'est la couche accentuée : qui reçoit quoi, dans quel délai, et ce que l'agent a le droit de faire. Il range, étiquette, ouvre un ticket et rédige ; il n'envoie rien qui engage, ne transfère pas, ne supprime pas.",
        "**Les réponses et le suivi.** Des modèles approuvés, une base de réponses, les données du client ; puis le délai de première réponse, les mails sans responsable, les erreurs de tri, les brouillons modifiés. **Prêt à l'emploi ou sur mesure.** Des assistants prêts à l'emploi existent dans les messageries et les outils d'assistance, et conviennent pour résumer et rédiger dans une boîte personnelle. Le sur-mesure se justifie pour une boîte partagée reliée à vos commandes, à votre fichier client et à vos prix, avec vos catégories, l'arabe et le français, vos règles de routage, et des mails gardés chez vous.",
      ], list: [
        "**Ce que vous recevez** : le tri à l'arrivée sur vos boîtes partagées ; les éléments extraits avec leur score ; le routage par type avec délai ; les brouillons à partir de vos modèles ; l'accusé de réception ; le suivi de qui a répondu ; le tableau des délais et des erreurs de tri.",
        "**Ce que l'entreprise évite** : la demande de devis qui attend trois jours, la réclamation noyée sous la publicité, le mail auquel deux personnes répondent, celui auquel personne ne répond, les heures passées à ouvrir des mails inutiles.",
        "**Ce qui est mesuré** : mails reçus par type ; délai de première réponse ; mails en attente à la fermeture ; mails sans responsable ; précision et rappel par type et par langue ; brouillons envoyés sans correction.",
        "**Ce que fait Symloop** : la lecture de vos anciens mails, les catégories et les règles, le tri et la lecture mesurés, les modèles de réponse, le mode fantôme, le raccordement à vos boîtes et à vos outils, le suivi, en arabe et en français.",
      ], faq: [
        { q: "Une IA peut-elle répondre aux mails à ma place ?", a: "Elle peut classer, lire et préparer la réponse. Dans notre méthode, une personne relit et envoie tout ce qui engage l'entreprise : un prix, un délai, un engagement. Le rangement et les accusés de réception se font seuls." },
        { q: "Comment une IA trie-t-elle les mails ?", a: "Elle lit l'objet, le corps et les pièces jointes, et rattache chaque mail à l'un de vos types, en français, en arabe ou en anglais. Chaque choix porte un score de confiance ; sous le seuil, le mail va à une personne." },
        { q: "Qu'est-ce qu'un agent IA de messagerie ?", a: "Un programme branché sur une boîte partagée, qui classe les mails, en extrait les éléments, les envoie à la bonne personne et rédige des brouillons, avec des droits limités : il n'envoie pas, ne transfère pas et ne supprime pas seul." },
        { q: "L'IA peut-elle se tromper de catégorie ?", a: "Oui. C'est pourquoi on mesure avant d'ouvrir, sur quatre cents de vos anciens mails, type par type. Pour les réclamations, on règle l'outil pour n'en manquer aucune, quitte à en signaler trop." },
        { q: "Faut-il changer de messagerie ?", a: "Non. L'outil se branche sur vos boîtes existantes et lit ce qui arrive ; vos équipes continuent d'écrire depuis leur messagerie habituelle." },
        { q: "Que se passe-t-il si un mail contient une instruction malveillante ?", a: "L'agent traite le contenu d'un mail comme une donnée, et il n'a aucun outil pour transférer, supprimer ou envoyer seul. Le pire résultat est une mauvaise étiquette ou un brouillon refusé par la personne qui relit." },
        { q: "Comment gérer une boîte mail partagée à plusieurs ?", a: "Avec un responsable par type de mail, un délai par type, un statut visible (à traiter, en cours, répondu) et la trace de qui a répondu. L'agent applique ces règles à l'arrivée de chaque mail." },
        { q: "L'IA comprend-elle les mails en arabe ?", a: "Elle classe et lit l'arabe, le français, et les mails qui mêlent les deux. La justesse se mesure par langue sur vos propres mails avant d'ouvrir : elle se mesure, elle ne se promet pas." },
        { q: "Mes mails restent-ils confidentiels ?", a: "C'est un choix de construction : le modèle tourne chez un fournisseur sous contrat ou sur vos serveurs, les droits disent qui voit quelle boîte, et chaque action de l'agent est journalisée." },
        { q: "Par quoi commencer ?", a: "Par une semaine de comptage et quatre cents anciens mails : combien par type, combien attendent le soir, combien de temps. Puis par le rangement automatique de ce qui ne demande pas de réponse." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "Le gain ne vient pas d'une IA qui répond à la place des gens : il vient des 64 mails que plus personne n'ouvre." },
      { after: 2, text: "L'agent lit, range et prépare ; il n'envoie rien qui engage l'entreprise." },
    ],
    cta: { eyebrow: "Dites-nous combien de mails arrivent sur vos boîtes partagées, de quels types, et combien attendent le soir : nous commençons par quatre cents anciens mails", title: "Boîte contact@ qui déborde, demandes de devis qui attendent, réclamations noyées, personne ne sait qui a répondu, mails en arabe et en français, ou service client que vous montez en Algérie depuis la France", body: "Symloop construit l'agent de messagerie qui correspond à vos boîtes : tri à l'arrivée, lecture avec score de confiance, routage, brouillons à partir de vos modèles, envoi par une personne, suivi des délais. Décrivez-nous vos boîtes, vos types de mails et vos outils." },
    related: { label: 'À lire aussi', items: [
      { href: L.whatsapp, kind: '2027', name: 'Agent IA sur WhatsApp : architecture, passage à une personne, coût par message' },
      { href: L.vocal, kind: '2027', name: 'Agent vocal IA : appels manqués, prise de rendez-vous, temps de réponse' },
      { href: L.backoffice, kind: '2027', name: 'Agent IA dans le back-office : ce que l’agent a le droit de faire' },
      { href: L.mesure, kind: '2027', name: 'Mesurer qu’une IA marche : jeu d’évaluation, taux d’erreur, seuil de livraison' },
    ] },
  },
  en: {
    kind: 'AI email agent · Algeria · 2027', title: "AI to answer emails in Algeria (2027): two hundred emails a day on contact@, quote requests waiting three days, a complaint buried under newsletters, and nobody knows who answered; an AI agent for sorting, checked drafts, response time, and what we put in place",
    dek: "“Our contact@ address receives two hundred emails a day: quote requests, orders, complaints, supplier invoices, job applications, and a lot of advertising. Two people check it when they can. Quote requests wait three days, an urgent complaint stayed under newsletters, and nobody knows who answered what. I am told an AI can sort the emails and answer them. Is that serious?” Yes for sorting, reading and drafting; no for sending, without a reread, anything that commits the company.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['AI to answer emails', 'AI email triage agent', 'Shared mailbox', 'Quote requests and complaints', 'Time to first reply', 'Algeria 2027'],
    intro: [
      "**Short answer.** An AI email agent does four things on a shared mailbox: it sorts each email on arrival (quote, order, complaint, invoice, job application, advertising), extracts the useful items from it (customer, product, quantity, date), sends it to the right person with a deadline, and prepares a draft reply from your templates and your data. A person rereads and sends whatever commits the company. It is judged on three figures: the time to first reply, the emails left with nobody in charge, and the sorting errors. In this page's example, of 200 emails a day, 64 need no answer, and the queue of the other 136 is empty at 16:00 instead of leaving 52 emails for the next day.",
      "This page is for companies whose shared mailbox overflows, wholesale, industry, services, clinics, schools, agencies, in Algeria, and for diaspora founders setting up a customer service here. The definitions come from public sources: email filtering, autoresponder, support ticket, named-entity recognition, precision and recall, confusion matrix, prompt injection, mail access protocol, queueing theory. The 200 emails, their split, the rates and the scores are a constructed example. The page covers neither the rules on personal data and reading workplace mailboxes, nor the rules on marketing email, and quotes no subscription price.",
    ],
    sections: [
      { heading: "One day of the contact@ mailbox", body: [
        "The figure follows the emails of one day, hour by hour: those that arrive, and those that are handled.",
      ], visual: 'file', after: [
        "**A queue.** Queueing theory is the mathematical study of waiting lines: whatever arrives faster than it is handled waits. **In the example.** 46 emails arrived overnight, 154 arrive between 8:00 and 18:00, that is 200. Two people handle 16 an hour, between their other tasks. At 18:00, 148 are handled and 52 have not been opened. If they are handled in order of arrival, the email opened at 18:00 arrived around 13:00. Those left over move to the next day, behind the new ones: that is how a quote request waits three days.",
        "**With the agent.** Each email is sorted on arrival. 64 need no answer, advertising, notifications, newsletters: they are filed with nobody involved. That leaves 136 emails for people, already sorted, read and accompanied by a draft: they send 18 an hour. At 16:00 the queue is empty, and each email leaves within the hour. **What that says.** The gain does not come from an AI answering in people's place. It comes from nobody opening the 64 useless emails any more, and from the other 136 reaching the right person already read. **What is measured.** Emails received per type; time to first reply; emails waiting at closing time; emails with nobody in charge.",
      ] },
      { heading: "Seven kinds of email, and who does what", body: [
        "The figure sorts the 200 emails into seven kinds, with what the agent does with each and what is left to a person.",
      ], visual: 'sortes', after: [
        "**Sorting.** Email filtering means processing email to organise it according to criteria. Classic rules sort on the sender or on a word in the subject; a language model sorts on meaning, in French, in Arabic or in English. **What the agent does alone.** Filing what needs no answer, acknowledging receipt, opening a ticket, finding an order, passing things to accounting or to human resources. An autoresponder is a program that answers by itself the email it receives, usually with the same text for everyone; the agent tells the person what it understood of their request. **What a person decides.** A price, a delivery date, a commercial gesture, the answer to a complaint: everything that commits the company.",
        "**Doubt.** Twenty emails of 200 look like nothing known. The agent does not guess: it passes them to a person, and they are the ones used to complete the categories. **The complaint.** It becomes a ticket, meaning the running record of a problem, with a priority and a deadline, see [complaints and after-sales](" + L.sav + "). **On other channels.** The same requests arrive by instant messaging and by phone, see [the AI agent on WhatsApp](" + L.whatsapp + ") and [the voice agent](" + L.vocal + ").",
      ] },
      { heading: "One email, read", body: [
        "The figure shows a price request, the five items the agent takes from it with their confidence score, and the draft it prepares.",
      ], visual: 'lecture', after: [
        "**In the example.** A price request for 5,000 cartons, delivered to Sétif “before the 15th”. The agent recognises the type of request, finds the customer in your records by the address, extracts the product, the quantity and the place. Named-entity recognition is the task that locates and classifies the named entities in free text; here, a place, a date, a quantity. **Confidence.** Each item carries a score. “Before the 15th” does not say which month: the score falls to 61%, under the threshold, and the field is shown to the person with the original sentence. The question goes into the reply.",
        "**The draft.** It restates what was understood and announces the quote; it contains no price. The price comes from your rules, see [from quote to invoice](" + L.devis + "). **Attachments.** A purchase order in PDF or a photo is read the same way, see [reading documents with AI](" + L.lecture + "). **The booby-trapped email.** Prompt injection means slipping an order into content the model reads, an email for example: the model cannot tell by itself an instruction from data. The protection is in the build: the agent has no tool to forward, delete or send on its own. The worst a booby-trapped email gets is a wrong label, or a draft a person will refuse, see [what the agent is allowed to do](" + L.backoffice + ").",
      ] },
      { heading: "An email, in six steps", body: [
        "The figure follows an email, from its arrival to its sending.",
      ], visual: 'etapes', after: [
        "**Arrival.** The tool connects to your shared mailboxes through the standard protocol mail software uses: it reads your email, it does not replace your mail system, see [professional email](" + L.messagerie + "). **Sorting and reading.** The type, the language, the urgency, then the items. **Routing.** The email goes to the person or team in charge of that type, with a deadline you set: for example four hours for a quote, one hour for a complaint.",
        "**The draft.** It starts from templates you have approved, completed with your data. **Sending.** That is the accented step: a person rereads, corrects and sends. The tool records what they changed; a draft that is often corrected points to a template to rewrite. **The record.** Who answered, when, and to what: the question “who answered this customer?” finally has an answer.",
      ] },
      { heading: "Ten weeks, starting from four hundred past emails", body: [
        "Ten weeks in the example, before the drafts are opened.",
      ], visual: 'calendrier', after: [
        "**Four hundred past emails.** We read them with you: the real types, the languages, the answers already given. They become the test set. **Measurement.** A confusion matrix is a table showing, for each real type, how the tool classified it. Precision is the share of emails filed under a type that really belong to it; recall is the share of a type's emails that the tool found. For complaints, recall is what counts: missing one costs more than flagging one too many. See [measuring that an AI works](" + L.mesure + ").",
        "**Shadow mode.** For two weeks, the agent sorts and drafts without sending or moving anything: its choices are compared with your teams' choices. **Opening type by type.** First the filing and the acknowledgements, then the drafts, type by type. **Where your emails go.** They contain prices, names and documents: the model runs at a provider under contract or on your servers, never in a personal account, see [using ChatGPT at work](" + L.chatgpt + "). **The durations** are those of a constructed example.",
      ] },
      { heading: "What is inside the tool", body: [
        "The figure stacks five layers; the third says what the agent is allowed to do.",
      ], visual: 'couches', after: [
        "**Mailboxes and reading.** The connection to shared mailboxes, threads, attachments; then sorting, extraction, language and confidence. **Rules and rights.** That is the accented layer: who receives what, within what deadline, and what the agent is allowed to do. It files, labels, opens a ticket and drafts; it sends nothing that commits, does not forward, does not delete.",
        "**Replies and follow-up.** Approved templates, an answer base, the customer's data; then the time to first reply, emails with nobody in charge, sorting errors, edited drafts. **Ready-made or custom.** Ready-made assistants exist in mail systems and helpdesk tools, and suit summarising and drafting in a personal mailbox. Custom work is justified for a shared mailbox connected to your orders, your customer records and your prices, with your categories, Arabic and French, your routing rules, and email kept on your premises.",
      ], list: [
        "**What you receive**: sorting on arrival on your shared mailboxes; the items extracted with their score; routing by type with a deadline; drafts from your templates; the acknowledgement; the record of who answered; the table of delays and sorting errors.",
        "**What the company avoids**: the quote request that waits three days, the complaint buried under advertising, the email two people answer, the one nobody answers, the hours spent opening useless emails.",
        "**What is measured**: emails received per type; time to first reply; emails waiting at closing time; emails with nobody in charge; precision and recall per type and per language; drafts sent without correction.",
        "**What Symloop does**: reading your past emails, the categories and rules, measured sorting and reading, reply templates, shadow mode, connection to your mailboxes and your tools, follow-up, in Arabic and in French.",
      ], faq: [
        { q: "Can an AI answer emails in my place?", a: "It can sort, read and prepare the answer. In our method, a person rereads and sends whatever commits the company: a price, a deadline, a commitment. Filing and acknowledgements are done by themselves." },
        { q: "How does an AI sort emails?", a: "It reads the subject, the body and the attachments, and ties each email to one of your types, in French, Arabic or English. Each choice carries a confidence score; under the threshold, the email goes to a person." },
        { q: "What is an AI email agent?", a: "A program connected to a shared mailbox, which sorts emails, extracts their items, sends them to the right person and writes drafts, with limited rights: it does not send, forward or delete on its own." },
        { q: "Can the AI get the category wrong?", a: "Yes. That is why we measure before opening, on four hundred of your past emails, type by type. For complaints, the tool is tuned to miss none, even if it flags too many." },
        { q: "Do we have to change mail system?", a: "No. The tool connects to your existing mailboxes and reads what arrives; your teams keep writing from their usual mail software." },
        { q: "What happens if an email contains a malicious instruction?", a: "The agent treats the content of an email as data, and it has no tool to forward, delete or send on its own. The worst outcome is a wrong label or a draft refused by the person who rereads." },
        { q: "How do several people manage one shared mailbox?", a: "With one person in charge per type of email, a deadline per type, a visible status (to do, in progress, answered) and a record of who answered. The agent applies those rules as each email arrives." },
        { q: "Does the AI understand emails in Arabic?", a: "It sorts and reads Arabic, French, and emails that mix the two. Accuracy is measured per language on your own emails before opening: it is measured, not promised." },
        { q: "Do my emails stay confidential?", a: "That is a design choice: the model runs at a provider under contract or on your servers, rights say who sees which mailbox, and every action of the agent is logged." },
        { q: "Where do you start?", a: "With a week of counting and four hundred past emails: how many per type, how many wait in the evening, for how long. Then with the automatic filing of what needs no answer." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "The gain does not come from an AI answering in people's place: it comes from the 64 emails nobody opens any more." },
      { after: 2, text: "The agent reads, files and prepares; it sends nothing that commits the company." },
    ],
    cta: { eyebrow: "Tell us how many emails reach your shared mailboxes, of which kinds, and how many wait in the evening: we start from four hundred past emails", title: "A contact@ mailbox that overflows, quote requests that wait, buried complaints, nobody knows who answered, emails in Arabic and in French, or a customer service you are setting up in Algeria from France", body: "Symloop builds the email agent that fits your mailboxes: sorting on arrival, reading with a confidence score, routing, drafts from your templates, sending by a person, follow-up of delays. Describe your mailboxes to us, your kinds of email and your tools." },
    related: { label: 'Also read', items: [
      { href: L.whatsapp, kind: '2027', name: 'AI agent on WhatsApp: architecture, handover to a person, cost per message' },
      { href: L.vocal, kind: '2027', name: 'AI voice agent: missed calls, appointment booking, response time' },
      { href: L.backoffice, kind: '2027', name: 'AI agent in the back office: what the agent is allowed to do' },
      { href: L.mesure, kind: '2027', name: 'Measuring that an AI works: evaluation set, error rate, release threshold' },
    ] },
  },
  ar: {
    kind: 'العون الذكي للبريد · الجزائر · 2027', title: "الذكاء الاصطناعي للرد على الرسائل الإلكترونية في الجزائر (2027): مئتا رسالة في اليوم على العلبة المشتركة، طلبات عروض أسعار تنتظر ثلاثة أيام، شكوى ضائعة تحت النشرات، ولا أحد يعرف من أجاب؛ عون ذكي للفرز، مسودات مُراجَعة، أجل الرد، وما نضعه",
    dek: "«عنواننا العام يستقبل مئتي رسالة في اليوم: طلبات عروض أسعار، طلبيات، شكاوى، فواتير موردين، ترشحات، وكثير من الإشهار. شخصان يطّلعان عليه حين يستطيعان. طلبات عروض أسعار تنتظر ثلاثة أيام، شكوى مستعجلة بقيت تحت النشرات، ولا أحد يعرف من أجاب عن ماذا. يقولون لي إن الذكاء الاصطناعي يستطيع فرز الرسائل والرد عليها. هل هذا جدّي؟» نعم للفرز، القراءة، والمسودة؛ ولا لإرسال ما يُلزم المؤسسة دون مراجعة.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['الذكاء الاصطناعي للرد على الرسائل', 'عون ذكي لفرز البريد', 'علبة البريد المشتركة', 'طلبات عروض الأسعار والشكاوى', 'أجل أول رد', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** العون الذكي للبريد يقوم بأربعة أشياء على علبة مشتركة: يصنّف كل رسالة عند وصولها (عرض سعر، طلبية، شكوى، فاتورة، ترشح، إشهار)، يستخرج منها العناصر المفيدة (الزبون، المنتوج، الكمية، التاريخ)، يرسلها إلى الشخص المناسب مع أجل، ويحضّر مسودة رد انطلاقاً من قوالبكم وبياناتكم. وشخص يراجع ويرسل كل ما يُلزم المؤسسة. ويُحكَم عليه بثلاثة أرقام: أجل أول رد، الرسائل الباقية دون مسؤول، وأخطاء الفرز. في مثال هذه الصفحة، من 200 رسالة في اليوم، 64 لا تتطلب أي رد، وطابور الـ136 الأخرى فارغ في الساعة 16 بدل أن يترك 52 رسالة للغد.",
      "هذه الصفحة موجّهة إلى المؤسسات التي تفيض علبتها المشتركة، تجارة الجملة، الصناعة، الخدمات، العيادات، المدارس، والوكالات، في الجزائر، وإلى مؤسسي الجالية الذين يقيمون خدمة زبائن هنا. التعريفات من مصادر عمومية: تصفية البريد الإلكتروني، المجيب الآلي، تذكرة الدعم، التعرف على الكيانات المسمّاة، الدقة والاستدعاء، مصفوفة الالتباس، حقن التعليمات، بروتوكول الوصول إلى البريد، ونظرية الطوابير. والرسائل الـ200، توزيعها، الوتائر، والدرجات مثال مركَّب. والصفحة لا تتناول قواعد المعطيات الشخصية وقراءة بريد العمل، ولا قواعد المراسلات الإشهارية، ولا تذكر أي سعر اشتراك.",
    ],
    sections: [
      { heading: "يوم من أيام العلبة المشتركة", body: [
        "الشكل يتابع رسائل يوم واحد، ساعة بساعة: التي تصل، والتي تُعالَج.",
      ], visual: 'file', after: [
        "**طابور انتظار.** نظرية الطوابير هي الدراسة الرياضية لصفوف الانتظار: ما يصل أسرع مما يُعالَج ينتظر. **في المثال.** 46 رسالة وصلت في الليل، و154 تصل بين الساعة 8 والساعة 18، أي 200. شخصان يعالجان 16 في الساعة، بين مهامهما الأخرى. في الساعة 18، عولجت 148 و52 لم تُفتَح. وإذا عولجت بترتيب الوصول، فالرسالة المفتوحة في الساعة 18 وصلت نحو الساعة 13. والباقية تنتقل إلى الغد، خلف الجديدة: هكذا ينتظر طلب عرض سعر ثلاثة أيام.",
        "**مع العون.** كل رسالة تُصنَّف عند وصولها. 64 لا تتطلب أي رد، إشهار، إشعارات، ونشرات إخبارية: تُرتَّب دون أي شخص. تبقى 136 رسالة للأشخاص، مفروزة، مقروءة، ومعها مسودة: يرسلون 18 في الساعة. في الساعة 16 الطابور فارغ، وكل رسالة تخرج في ساعتها. **ما يقوله ذلك.** الربح لا يأتي من ذكاء اصطناعي يجيب مكان الناس. يأتي من أن لا أحد يفتح بعد الآن الـ64 رسالة غير المفيدة، ومن أن الـ136 الأخرى تصل إلى الشخص المناسب مقروءة. **ما يُقاس.** الرسائل الواصلة لكل نوع؛ أجل أول رد؛ الرسائل في الانتظار عند الإغلاق؛ والرسائل دون مسؤول.",
      ] },
      { heading: "سبعة أنواع من الرسائل، ومن يفعل ماذا", body: [
        "الشكل يصنّف الرسائل الـ200 في سبعة أنواع، مع ما يفعله العون بكل نوع وما يبقى لشخص.",
      ], visual: 'sortes', after: [
        "**الفرز.** تصفية البريد الإلكتروني هي معالجته لتنظيمه حسب معايير. القواعد الكلاسيكية تفرز حسب المرسل أو حسب كلمة في الموضوع؛ ونموذج اللغة يفرز حسب المعنى، بالفرنسية، العربية، أو الإنجليزية. **ما يفعله العون وحده.** ترتيب ما لا يتطلب رداً، إشعار الاستلام، فتح تذكرة، إيجاد طلبية، والتحويل إلى المحاسبة أو الموارد البشرية. والمجيب الآلي برنامج يرد من تلقاء نفسه على الرسائل التي تصله، وغالباً بالنص نفسه للجميع؛ أما العون فيقول للشخص ما فهمه من طلبه. **ما يقرّره شخص.** سعر، أجل تسليم، لفتة تجارية، أو الرد على شكوى: كل ما يُلزم المؤسسة.",
        "**الشك.** عشرون رسالة من 200 لا تشبه أي شيء معروف. العون لا يخمّن: يحوّلها إلى شخص، وهي التي تُستعمَل لإكمال الأصناف. **الشكوى.** تصير تذكرة، أي المحضر المتابَع لمشكلة، مع أولوية وأجل، انظر [الشكاوى وما بعد البيع](" + L.sav + "). **على قنوات أخرى.** الطلبات نفسها تصل عبر المراسلة الفورية والهاتف، انظر [العون الذكي على واتساب](" + L.whatsapp + ") و[العون الصوتي](" + L.vocal + ").",
      ] },
      { heading: "رسالة واحدة، مقروءة", body: [
        "الشكل يُظهر طلب سعر، العناصر الخمسة التي يستخرجها العون منه مع درجة ثقتها، والمسودة التي يحضّرها.",
      ], visual: 'lecture', after: [
        "**في المثال.** طلب سعر لـ" + I('5 000') + " علبة كرتون، تُسلَّم في سطيف «قبل يوم 15». العون يتعرّف على نوع الطلب، يجد الزبون في ملفاتكم بعنوانه، ويستخرج المنتوج، الكمية، والمكان. والتعرف على الكيانات المسمّاة هو المهمة التي ترصد وتصنّف الكيانات المسمّاة في نص حر؛ هنا، مكان، تاريخ، وكمية. **الثقة.** لكل عنصر درجة. «قبل يوم 15» لا يقول الشهر: الدرجة تنزل إلى 61 بالمئة، تحت العتبة، والحقل يُعرَض على الشخص مع الجملة الأصلية. والسؤال يذهب في الرد.",
        "**المسودة.** تعيد ما فُهم وتعلن عن عرض السعر؛ وليس فيها أي سعر. السعر يأتي من قواعدكم، انظر [من عرض السعر إلى الفاتورة](" + L.devis + "). **المرفقات.** أمر شراء في ملف مرفق أو صورة يُقرآن بالطريقة نفسها، انظر [قراءة الوثائق بالذكاء الاصطناعي](" + L.lecture + "). **الرسالة المفخَّخة.** حقن التعليمات هو دسّ أمر في محتوى يقرؤه النموذج، رسالة مثلاً: النموذج لا يميّز من تلقاء نفسه بين تعليمة ومعطى. والحماية في البناء: العون ليست له أي أداة ليحوّل، يحذف، أو يرسل وحده. وأسوأ ما تحصل عليه رسالة مفخَّخة تصنيف خاطئ، أو مسودة يرفضها شخص، انظر [ما يحق للعون فعله](" + L.backoffice + ").",
      ] },
      { heading: "رسالة، في ست مراحل", body: [
        "الشكل يتابع رسالة، من وصولها إلى إرسال الرد.",
      ], visual: 'etapes', after: [
        "**الوصول.** الأداة ترتبط بعلبكم المشتركة عبر البروتوكول المعياري الذي تستعمله برامج البريد: تقرأ رسائلكم، ولا تعوّض نظام بريدكم، انظر [البريد المهني](" + L.messagerie + "). **الفرز والقراءة.** النوع، اللغة، الاستعجال، ثم العناصر. **التوجيه.** الرسالة تذهب إلى الشخص أو الفريق المسؤول عن هذا النوع، مع أجل تحدّدونه: مثلاً أربع ساعات لعرض سعر، وساعة لشكوى.",
        "**المسودة.** تنطلق من قوالب صادقتم عليها، تُكمَل ببياناتكم. **الإرسال.** هو المرحلة المبرزة: شخص يراجع، يصحّح، ويرسل. والأداة تسجّل ما غيّره؛ ومسودة تُصحَّح كثيراً تدل على قالب يجب إعادة كتابته. **الأثر.** من أجاب، متى، وعن ماذا: السؤال «من أجاب هذا الزبون؟» صار له جواب.",
      ] },
      { heading: "عشرة أسابيع، بدءاً بأربعمئة رسالة قديمة", body: [
        "عشرة أسابيع في المثال، قبل فتح المسودات.",
      ], visual: 'calendrier', after: [
        "**أربعمئة رسالة قديمة.** نقرؤها معكم: الأنواع الحقيقية، اللغات، والأجوبة المعطاة من قبل. تصير مجموعة التجارب. **القياس.** مصفوفة الالتباس جدول يُظهر، لكل نوع حقيقي، كيف صنّفته الأداة. والدقة هي حصة الرسائل المرتَّبة في نوع وهي منه فعلاً؛ والاستدعاء هو حصة رسائل نوع وجدتها الأداة. وللشكاوى، الاستدعاء هو المهم: تفويت واحدة يكلّف أكثر من الإشارة إلى واحدة زائدة. انظر [قياس أن الذكاء الاصطناعي يشتغل](" + L.mesure + ").",
        "**وضع الظل.** خلال أسبوعين، العون يفرز ويحرّر دون أن يرسل أو ينقل شيئاً: نقارن اختياراته باختيارات فرقكم. **الفتح نوعاً بنوع.** أولاً الترتيب وإشعارات الاستلام، ثم المسودات، نوعاً بنوع. **أين تذهب رسائلكم.** فيها أسعار، أسماء، ووثائق: النموذج يشتغل عند مزوّد بعقد أو على خوادمكم، وليس أبداً في حساب شخصي، انظر [استعمال الذكاء الاصطناعي في المؤسسة](" + L.chatgpt + "). **المدد** هي مدد مثال مركَّب.",
      ] },
      { heading: "ما يوجد في الأداة", body: [
        "الشكل يرتّب خمس طبقات؛ والثالثة تقول ما يحق للعون فعله.",
      ], visual: 'couches', after: [
        "**العلب والقراءة.** الربط بالعلب المشتركة، سلاسل المراسلات، والمرفقات؛ ثم التصنيف، الاستخراج، اللغة، والثقة. **القواعد والصلاحيات.** هي الطبقة المبرزة: من يستلم ماذا، في أي أجل، وما يحق للعون فعله. يرتّب، يصنّف، يفتح تذكرة، ويحرّر؛ ولا يرسل شيئاً يُلزم، لا يحوّل، ولا يحذف.",
        "**الأجوبة والمتابعة.** قوالب مصادَق عليها، قاعدة أجوبة، وبيانات الزبون؛ ثم أجل أول رد، الرسائل دون مسؤول، أخطاء الفرز، والمسودات المعدَّلة. **جاهز أو على المقاس.** توجد مساعدات جاهزة في أنظمة البريد وأدوات الدعم، وتناسب التلخيص والتحرير في علبة شخصية. والعمل على المقاس يُبرَّر لعلبة مشتركة مربوطة بطلبياتكم، ملفات زبائنكم، وأسعاركم، بأصنافكم، بالعربية والفرنسية، بقواعد توجيهكم، وبرسائل تبقى عندكم.",
      ], list: [
        "**ما تتلقونه**: الفرز عند الوصول على علبكم المشتركة؛ العناصر المستخرَجة مع درجتها؛ التوجيه حسب النوع مع أجل؛ المسودات انطلاقاً من قوالبكم؛ إشعار الاستلام؛ متابعة من أجاب؛ وجدول الآجال وأخطاء الفرز.",
        "**ما تتفاداه المؤسسة**: طلب عرض السعر الذي ينتظر ثلاثة أيام، الشكوى الضائعة تحت الإشهار، الرسالة التي يجيب عنها شخصان، التي لا يجيب عنها أحد، والساعات المقضية في فتح رسائل غير مفيدة.",
        "**ما يُقاس**: الرسائل الواصلة لكل نوع؛ أجل أول رد؛ الرسائل في الانتظار عند الإغلاق؛ الرسائل دون مسؤول؛ الدقة والاستدعاء لكل نوع ولكل لغة؛ والمسودات المرسَلة دون تصحيح.",
        "**ما تفعله Symloop**: قراءة رسائلكم القديمة، الأصناف والقواعد، قياس الفرز والقراءة، قوالب الأجوبة، وضع الظل، الربط بعلبكم وأدواتكم، والمتابعة، بالعربية والفرنسية.",
      ], faq: [
        { q: "هل يستطيع الذكاء الاصطناعي الرد على الرسائل مكاني؟", a: "يستطيع التصنيف، القراءة، وتحضير الرد. وفي طريقتنا، شخص يراجع ويرسل كل ما يُلزم المؤسسة: سعر، أجل، أو التزام. والترتيب وإشعارات الاستلام تتم وحدها." },
        { q: "كيف يفرز الذكاء الاصطناعي الرسائل؟", a: "يقرأ الموضوع، النص، والمرفقات، ويربط كل رسالة بأحد أنواعكم، بالفرنسية، العربية، أو الإنجليزية. ولكل اختيار درجة ثقة؛ وتحت العتبة، تذهب الرسالة إلى شخص." },
        { q: "ما هو العون الذكي للبريد؟", a: "برنامج مربوط بعلبة مشتركة، يصنّف الرسائل، يستخرج عناصرها، يرسلها إلى الشخص المناسب، ويحرّر مسودات، بصلاحيات محدودة: لا يرسل، لا يحوّل، ولا يحذف وحده." },
        { q: "هل يمكن أن يخطئ الذكاء الاصطناعي في الصنف؟", a: "نعم. لهذا نقيس قبل الفتح، على أربعمئة من رسائلكم القديمة، نوعاً بنوع. وللشكاوى، تُضبَط الأداة حتى لا تفوّت أي واحدة، ولو أشارت إلى أكثر من اللازم." },
        { q: "هل يجب تغيير نظام البريد؟", a: "لا. الأداة ترتبط بعلبكم الموجودة وتقرأ ما يصل؛ وفرقكم تواصل الكتابة من برنامج بريدها المعتاد." },
        { q: "ماذا يحدث إذا احتوت رسالة تعليمة خبيثة؟", a: "العون يعامل محتوى الرسالة كمعطى، وليست له أي أداة ليحوّل، يحذف، أو يرسل وحده. وأسوأ نتيجة تصنيف خاطئ أو مسودة يرفضها الشخص الذي يراجع." },
        { q: "كيف يسيّر عدة أشخاص علبة بريد مشتركة؟", a: "بمسؤول لكل نوع من الرسائل، أجل لكل نوع، حالة مرئية (للمعالجة، جارٍ، أُجيب عنها)، وأثر لمن أجاب. والعون يطبّق هذه القواعد عند وصول كل رسالة." },
        { q: "هل يفهم الذكاء الاصطناعي الرسائل بالعربية؟", a: "يصنّف ويقرأ العربية، الفرنسية، والرسائل التي تمزج بينهما. والصحة تُقاس لكل لغة على رسائلكم أنتم قبل الفتح: تُقاس، ولا يُوعَد بها." },
        { q: "هل تبقى رسائلي سرية؟", a: "هو اختيار في البناء: النموذج يشتغل عند مزوّد بعقد أو على خوادمكم، الصلاحيات تقول من يرى أي علبة، وكل فعل يقوم به العون يُسجَّل." },
        { q: "بماذا يُبدأ؟", a: "بأسبوع من العدّ وأربعمئة رسالة قديمة: كم لكل نوع، كم تنتظر في المساء، وكم من الوقت. ثم بالترتيب الآلي لما لا يتطلب رداً." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "الربح لا يأتي من ذكاء اصطناعي يجيب مكان الناس: يأتي من الـ64 رسالة التي لا يفتحها أحد بعد الآن." },
      { after: 2, text: "العون يقرأ، يرتّب، ويحضّر؛ ولا يرسل شيئاً يُلزم المؤسسة." },
    ],
    cta: { eyebrow: "قولوا لنا كم رسالة تصل إلى علبكم المشتركة، من أي أنواع، وكم تنتظر في المساء: نبدأ بأربعمئة رسالة قديمة", title: "علبة مشتركة تفيض، طلبات عروض أسعار تنتظر، شكاوى ضائعة، لا أحد يعرف من أجاب، رسائل بالعربية والفرنسية، أو خدمة زبائن تقيمونها في الجزائر من فرنسا", body: "Symloop تبني عون البريد الذي يناسب علبكم: الفرز عند الوصول، القراءة بدرجة ثقة، التوجيه، مسودات انطلاقاً من قوالبكم، إرسال من شخص، ومتابعة الآجال. صِفوا لنا علبكم، أنواع رسائلكم، وأدواتكم." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.whatsapp, kind: '2027', name: 'العون الذكي على واتساب: البنية، التحويل إلى شخص، والكلفة لكل رسالة' },
      { href: L.vocal, kind: '2027', name: 'العون الصوتي الذكي: المكالمات الفائتة، حجز المواعيد، وزمن الرد' },
      { href: L.backoffice, kind: '2027', name: 'العون الذكي في المكتب الخلفي: ما يحق للعون فعله' },
      { href: L.mesure, kind: '2027', name: 'قياس أن الذكاء الاصطناعي يشتغل: مجموعة التقييم، نسبة الخطأ، وعتبة التسليم' },
    ] },
  },
};

const KEYWORDS = "ia pour répondre aux mails, ia pour répondre aux mails algérie 2027, ia pour trier les mails, ia tri mail, ia tri boite mail, agent ia mail, agent ia tri mail, agent ia gestion mail, agent ia reponse mail, agent ia traitement mail, ia gestion des mails, ia traitement des mails, réponse mail automatique ia, boite mail partagée, comment gérer une boite mail partagée, comment trier ses mails, logiciel helpdesk, ai email triage, ai email triage agent, ai email assistant for business, الرد على الايميلات بالذكاء الاصطناعي, فرز الرسائل بالذكاء الاصطناعي, العون الذكي للبريد, Symloop";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
