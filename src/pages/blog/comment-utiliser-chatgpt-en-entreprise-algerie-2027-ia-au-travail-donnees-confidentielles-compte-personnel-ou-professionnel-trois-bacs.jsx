import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/comment-utiliser-chatgpt-en-entreprise-algerie-2027-ia-au-travail-donnees-confidentielles-compte-personnel-ou-professionnel-trois-bacs.mjs';

const SLUG = 'comment-utiliser-chatgpt-en-entreprise-algerie-2027-ia-au-travail-donnees-confidentielles-compte-personnel-ou-professionnel-trois-bacs';
const FIGURES = ['bacs', 'ordre', 'comptes', 'regles', 'usages', 'calendrier'];
const DATE = '2026-11-18';
const I = (x) => '⁦' + x + '⁩';

const L = {
  agent: '/blog/agent-ia-entreprise-algerie-2027-par-ou-commencer-ce-qui-marche/',
  mettre: '/blog/mettre-de-l-ia-dans-une-application-algerie-2027-cinq-fonctions-recherche-documents-extraction-factures-classification-cout-par-requete/',
  deployer: '/blog/deployer-un-modele-ia-sur-ses-serveurs-algerie-2027-llm-prive-quel-modele-quelle-machine-cout-par-requete-quand-rester-sur-une-api/',
  mesurer: '/blog/mesurer-qu-une-ia-marche-avant-la-production-algerie-2027-jeu-d-evaluation-taux-d-erreur-hallucinations-regressions-seuil-de-livraison/',
  piratage: '/blog/piratage-entreprise-algerie-2027-boite-mail-piratee-faux-rib-fournisseur-que-faire-premiere-heure-double-verification-regles-de-transfert/',
  intranet: '/blog/comment-creer-un-intranet-d-entreprise-en-algerie-2027-notes-de-service-documents-annuaire-demandes-internes-recherche-accuse-de-lecture/',
};

const CONTENT = {
  fr: {
    kind: 'ChatGPT en entreprise · Algérie · 2027', title: "Comment utiliser ChatGPT en entreprise en Algérie (2027) : vos employés y collent déjà des contrats et des fichiers clients, ce qu'on peut y mettre, ce qu'on n'y met jamais, compte personnel ou compte de l'entreprise",
    dek: "« J'ai découvert qu'une assistante collait nos contrats dans ChatGPT pour les résumer, et qu'un commercial y avait mis le fichier clients pour préparer une relance. Ils gagnent du temps, je ne veux pas l'interdire. Mais où vont ces données ? Faut-il un abonnement d'entreprise ? Et que peut-on lui confier ? » Ne l'interdisez pas : encadrez-le. Un compte de l'entreprise, une règle en trois bacs sur ce qui entre, et une relecture par celui qui signe.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['ChatGPT en entreprise', 'IA au travail', 'Données confidentielles', 'Compte professionnel', 'Règles d’usage de l’IA', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Vos employés utilisent déjà un assistant : la question est de savoir sur quel compte, et avec quelles données. Cinq règles. **Un compte de l'entreprise**, pas un compte personnel. **Trois bacs** : ce qui se colle tel quel, ce qui se colle nettoyé, ce qui ne se colle jamais, mots de passe, données de personnes, documents sous confidentialité. **Une relecture** par celui qui signe, parce que l'assistant peut affirmer une chose fausse. **Aucune action** sans validation humaine. **Deux heures de formation** par équipe. Cinq usages se font dès demain sans risque ; les trois plus utiles, ceux qui touchent à vos clients et à vos documents, demandent ce cadre, puis un assistant branché sur vos données.",
      "Ce guide s'adresse au gérant qui découvre que ses équipes utilisent ChatGPT ou un autre assistant, et au fondateur installé en France qui veut le même gain de temps dans son entreprise en Algérie. Les définitions citées viennent de sources publiques : l'agent conversationnel, l'hallucination, l'injection de consignes, la génération augmentée par récupération, l'« IA fantôme ». Les conditions d'usage des données sont celles que l'éditeur de ChatGPT indique en novembre 2026 ; elles changent, et chaque assistant a les siennes. L'entreprise et ses usages sont un exemple construit. Ce guide ne traite pas des règles de droit sur les données personnelles ni du secret professionnel : voyez votre conseil.",
    ],
    sections: [
      { heading: "Ce qu'on peut coller dans un assistant : trois bacs", body: [
        "La figure range douze exemples dans trois bacs.",
      ], visual: 'bacs', after: [
        "**Pourquoi trois bacs.** L'usage non déclaré d'outils d'IA par les employés a un nom, l'« IA fantôme » : une forme récente de ces outils informatiques adoptés sans passer par le service informatique. Il n'est pas théorique : en mai 2023, d'après la presse, Samsung a restreint l'usage des assistants après que des ingénieurs avaient envoyé du code interne à ChatGPT. La réponse n'est pas une charte de dix pages : c'est une règle que l'on applique en dix secondes, au moment de coller.",
        "**Le bac du milieu.** C'est le plus utile et le plus délicat : un compte rendu, un tableau de ventes, une procédure. Deux façons d'y entrer. Nettoyer : les noms deviennent Client A, les montants deviennent X, et le résultat se recolle dans le vrai document. Ou travailler sur le compte de l'entreprise, dont les conditions sont connues. **Le troisième bac.** Mots de passe, clés d'accès, données de personnes identifiables, documents couverts par une clause de confidentialité : jamais, quels que soient l'outil et l'offre. Un mot de passe collé dans une conversation est un mot de passe à changer, comme après [un piratage](" + L.piratage + ").",
      ] },
      { heading: "Mettre un cadre, dans cet ordre", body: [
        "Le premier temps est accentué : recenser.",
      ], visual: 'ordre', after: [
        "**Recenser.** Un questionnaire anonyme de cinq questions : utilisez-vous un assistant, lequel, sur quel compte, pour quelles tâches, y avez-vous déjà collé un document de l'entreprise ? Les réponses surprennent souvent la direction. **Ne pas interdire.** L'interdiction ne supprime pas l'usage : elle le déplace vers le téléphone personnel, où plus aucune règle ne s'applique.",
        "**Choisir, écrire, former.** Une offre, un compte par personne, la règle sur une page, deux heures par équipe sur les tâches réelles relevées au recensement. **Outiller.** Dix consignes types par métier, relues une fois par quelqu'un qui connaît le travail : la relance d'un devis, le compte rendu d'une réunion, la réponse à une réclamation. Elles se rangent là où chacun les retrouve, par exemple dans [l'intranet](" + L.intranet + ").",
      ] },
      { heading: "Compte personnel ou compte de l'entreprise", body: [
        "La figure compare les deux sur six points.",
      ], visual: 'comptes', after: [
        "**Ce que dit l'éditeur.** ChatGPT est un agent conversationnel d'IA générative développé par OpenAI. D'après ce que l'éditeur indique sur ses pages publiques en novembre 2026, le partage des conversations pour améliorer les modèles est activé par défaut sur les comptes personnels, gratuits ou payants, et se désactive dans les réglages ; pour les offres destinées aux entreprises et pour l'accès par programme, les contenus ne servent pas à l'entraînement par défaut. Ces conditions changent, et chaque assistant a les siennes : relisez celles de l'offre que vous souscrivez.",
        "**Ce que le compte de l'entreprise change.** L'historique reste dans l'espace de l'entreprise et se ferme au départ de l'employé ; un administrateur ajoute et retire les membres ; la connexion se fait avec l'adresse professionnelle. **Ce qu'il ne change pas.** L'assistant ne devient pas plus exact, et les trois bacs restent valables : une donnée de personne ou un document sous confidentialité ne s'y colle pas davantage. Si rien ne doit sortir de vos murs, il existe une autre voie, décrite dans [le guide pour déployer un modèle sur ses serveurs](" + L.deployer + ").",
      ] },
      { heading: "Cinq règles qui tiennent sur une page", body: [
        "La couche accentuée est celle des données.",
      ], visual: 'regles', after: [
        "**Relire.** Une hallucination est une réponse produite par une IA qui contient une information fausse ou trompeuse présentée comme un fait. L'assistant invente une référence, un chiffre ou une clause avec la même assurance que le reste. D'où la règle : celui qui signe relit, en particulier les chiffres, les noms, les dates et les citations. Un texte que personne n'a relu n'est pas envoyé.",
        "**Aucune action sans validation.** Dès qu'un assistant peut lire vos courriels ou des pages web, une autre faille apparaît : l'injection de consignes, une attaque où des entrées d'apparence anodine sont conçues pour provoquer un comportement imprévu du modèle. Un document piégé peut lui « demander » de transmettre des données. La parade est une règle simple : il propose, quelqu'un décide. C'est aussi la règle des agents décrits dans [le guide sur l'agent IA en entreprise](" + L.agent + "). **Former.** Deux heures suffisent pour que l'usage devienne un savoir-faire.",
      ] },
      { heading: "Dix usages, classés par temps gagné et par sensibilité", body: [
        "La figure place dix usages selon le temps gagné et la sensibilité des données.",
      ], visual: 'usages', after: [
        "**Dès demain.** Reformuler et corriger un e-mail, traduire entre français, arabe et anglais, résumer un long document public, écrire une formule de tableur, bâtir le plan d'une offre : aucune donnée interne n'y entre, et le gain est immédiat. C'est là qu'une équipe apprend à donner une consigne et à relire.",
        "**Avec un cadre.** Répondre aux clients d'après vos documents, chercher dans vos contrats et vos procédures, analyser les ventes par client : ce sont les trois usages qui feraient gagner le plus, et ils touchent à vos données. La technique s'appelle la génération augmentée par récupération : elle permet à un modèle d'aller chercher et d'intégrer des informations venues de vos propres sources. L'assistant répond alors à partir de vos documents, avec des droits par personne. C'est une construction, décrite dans [le guide pour mettre de l'IA dans une application](" + L.mettre + "), et elle se vérifie avant d'être ouverte à tous : voir [le guide pour mesurer qu'une IA marche](" + L.mesurer + "). **Non.** Appliquer tel quel un avis juridique ou médical, ou lui confier des mots de passe.",
      ] },
      { heading: "Quatre semaines, du recensement au premier bilan, en 2027", body: [
        "Quatre semaines dans l'exemple, dont la première pour recenser.",
      ], visual: 'calendrier', after: [
        "**Semaine 1, le recensement**, anonyme et sans jugement. **Semaine 2, l'offre et les comptes.** **Semaines 2 et 3, la règle et la formation** : deux heures par équipe, sur les tâches réelles.",
        "**Semaines 3 et 4, les consignes types.** **Semaine 4, le premier bilan** : les usages réels, les incidents, le temps que chacun dit avoir gagné, et lesquels des trois usages sensibles méritent maintenant un assistant branché sur vos documents.",
      ], list: [
        "**Ce que le gérant reçoit** : le résultat du recensement, la règle des trois bacs sur une page, les comptes de l'entreprise ouverts, dix consignes types par métier, et un bilan après quatre semaines.",
        "**Ce que l'entreprise ne fait plus** : découvrir par hasard qu'un contrat a été collé dans un compte personnel, interdire sans effet, envoyer un texte que personne n'a relu, laisser un assistant agir seul.",
        "**Ce qui est mesuré** : part des employés sur un compte de l'entreprise, tâches confiées à l'assistant, incidents déclarés, temps gagné déclaré par métier.",
        "**Ce que fait Symloop** : le recensement, la règle et la formation, l'ouverture des comptes, les consignes types, puis, pour les usages qui le méritent, l'assistant branché sur vos documents, avec ses droits, sa mesure et sa validation humaine.",
      ], faq: [
        { q: "Comment utiliser ChatGPT en entreprise sans risque ?", a: "Avec cinq règles : un compte de l'entreprise, la règle des trois bacs sur ce qu'on y colle, une relecture par celui qui signe, aucune action sans validation humaine, et deux heures de formation par équipe. Commencez par les usages où aucune donnée interne n'entre." },
        { q: "Peut-on mettre des données de l'entreprise dans ChatGPT ?", a: "Cela dépend du bac. Un texte déjà public, oui. Un document interne, une fois nettoyé de ses noms et de ses montants, ou sur un compte de l'entreprise. Des mots de passe, des données de personnes ou un document sous clause de confidentialité : jamais, quels que soient l'outil et l'offre." },
        { q: "ChatGPT garde-t-il ce qu'on lui écrit ?", a: "Les conversations restent dans l'historique du compte. D'après l'éditeur, en novembre 2026, elles peuvent servir à améliorer les modèles sur un compte personnel, sauf si l'on désactive ce partage dans les réglages, et n'y servent pas par défaut sur les offres pour entreprises. Vérifiez les conditions de votre offre." },
        { q: "Faut-il un abonnement d'entreprise ?", a: "Dès que l'usage dépasse la reformulation et la traduction de textes sans données internes, oui : l'historique, l'administration et les conditions d'usage passent du côté de l'entreprise, et le compte se ferme au départ de l'employé. Il ne dispense ni des trois bacs ni de la relecture." },
        { q: "Comment fonctionne une offre ChatGPT pour entreprise ?", a: "C'est un espace de travail au nom de l'entreprise : chaque employé y a un compte relié à son adresse professionnelle, un administrateur gère les membres et les droits, et les conditions sur les données sont celles d'un contrat professionnel. Les fonctions précises changent : lisez la page de l'offre au moment de souscrire." },
        { q: "Faut-il interdire ChatGPT à ses employés ?", a: "Non. L'interdiction ne supprime pas l'usage : elle le déplace vers le téléphone personnel, où aucune règle ne s'applique et où vous ne voyez plus rien. Un cadre simple, appliqué en dix secondes, protège mieux qu'une interdiction que personne ne respecte." },
        { q: "Que faire si un employé a déjà collé un document confidentiel ?", a: "Supprimer la conversation, désactiver le partage dans les réglages du compte, changer tout mot de passe ou toute clé qui y figurait, et vérifier ce que prévoit la clause de confidentialité du document avec votre conseil. Puis en faire le premier cas de la formation, sans chercher de coupable." },
        { q: "Peut-on faire confiance aux réponses de ChatGPT ?", a: "Pas sans relire. Un assistant peut produire une information fausse présentée comme un fait : une référence, un chiffre, une clause. Il est fiable pour reformuler, traduire, structurer ; pour un fait, un montant ou un texte qui engage, celui qui signe vérifie." },
        { q: "Quelle différence entre ChatGPT et un assistant branché sur nos documents ?", a: "ChatGPT répond à partir de ce qu'il a appris et de ce que vous collez. Un assistant branché sur vos documents va chercher la réponse dans vos contrats, vos procédures et votre catalogue, cite sa source, et respecte les droits de chaque personne. C'est une construction, pas un abonnement." },
        { q: "Par quoi commencer ?", a: "Par un recensement anonyme : qui utilise quel assistant, sur quel compte, pour quoi. Puis les cinq usages sans risque, sur un compte de l'entreprise, avec la règle des trois bacs. Les usages qui touchent à vos clients viennent ensuite." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "L'interdiction ne supprime pas l'usage : elle le déplace vers le téléphone personnel." },
      { after: 3, text: "Il propose, quelqu'un décide." },
    ],
    cta: { eyebrow: "Dites-nous combien de personnes, quels métiers, et ce que vous avez déjà trouvé : nous faisons le recensement et la règle, puis nous vous disons lesquels de vos usages méritent un assistant branché sur vos données", title: "Contrats collés dans un compte personnel, fichier clients envoyé à un assistant, réponses jamais relues, ou fondateur en France qui veut que ses équipes gagnent du temps sans rien exposer : nous posons le cadre, puis nous construisons l'assistant qui travaille sur vos documents", body: "Recensement, règle des trois bacs, comptes de l'entreprise, formation, consignes types, puis assistant sur vos documents avec droits, mesure et validation humaine. Nous travaillons depuis Alger et Sétif, en français, en arabe et en anglais." },
    related: { label: 'À lire aussi', items: [
      { href: L.agent, kind: '2027', name: 'Agent IA en entreprise : par où commencer, ce qui marche' },
      { href: L.mettre, kind: '2027', name: 'Mettre de l’IA dans une application : cinq fonctions, coût par requête' },
      { href: L.deployer, kind: '2027', name: 'Déployer un modèle d’IA sur ses serveurs : quand, et à quel coût' },
      { href: L.mesurer, kind: '2027', name: 'Mesurer qu’une IA marche avant la production' },
    ] },
  },
  en: {
    kind: 'ChatGPT at work · Algeria · 2027', title: "How to use ChatGPT in a company in Algeria (2027): your employees are already pasting contracts and customer files into it, what can go in, what never does, personal account or company account",
    dek: "“I found out that an assistant was pasting our contracts into ChatGPT to summarise them, and that a salesperson had put the customer file in it to prepare a follow-up. They save time, and I do not want to ban it. But where does that data go? Do we need a company subscription? And what can we entrust to it?” Do not ban it: frame it. A company account, a three-bin rule for what goes in, and a reread by whoever signs.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['ChatGPT in a company', 'AI at work', 'Confidential data', 'Business account', 'AI rules of use', 'Algeria 2027'],
    intro: [
      "**Short answer.** Your employees already use an assistant: the question is on which account, and with what data. Five rules. **A company account**, not a personal one. **Three bins**: what is pasted as it is, what is pasted once cleaned, what is never pasted, passwords, data about people, documents under confidentiality. **A reread** by whoever signs, because the assistant can state something false. **No action** without human approval. **Two hours of training** per team. Five uses can be done from tomorrow without risk; the three most useful, those that touch your customers and your documents, need this frame, then an assistant connected to your data.",
      "This guide is for the manager who discovers that their teams use ChatGPT or another assistant, and for the founder based in France who wants the same time saving in their company in Algeria. The definitions quoted come from public sources: the chatbot, the hallucination, prompt injection, retrieval-augmented generation, “shadow AI”. The data-use conditions are those the publisher of ChatGPT states in November 2026; they change, and each assistant has its own. The company and its uses are a constructed example. This guide does not cover the legal rules on personal data or professional secrecy: see your legal adviser.",
    ],
    sections: [
      { heading: "What can be pasted into an assistant: three bins", body: [
        "The figure sorts twelve examples into three bins.",
      ], visual: 'bacs', after: [
        "**Why three bins.** The undeclared use of AI tools by employees has a name, “shadow AI”: a recent form of those IT tools adopted without going through the IT department. It is not theoretical: in May 2023, according to press reports, Samsung restricted the use of assistants after engineers had sent internal code to ChatGPT. The answer is not a ten-page policy: it is a rule applied in ten seconds, at the moment of pasting.",
        "**The middle bin.** It is the most useful and the most delicate: minutes, a sales table, a procedure. Two ways in. Clean it: names become Customer A, amounts become X, and the result is pasted back into the real document. Or work on the company account, whose conditions are known. **The third bin.** Passwords, access keys, data about identifiable people, documents covered by a confidentiality clause: never, whatever the tool and the plan. A password pasted into a conversation is a password to change, as after [a hack](" + L.piratage + ").",
      ] },
      { heading: "Setting a frame, in this order", body: [
        "The first step is accented: take stock.",
      ], visual: 'ordre', after: [
        "**Take stock.** An anonymous questionnaire of five questions: do you use an assistant, which one, on which account, for which tasks, have you ever pasted a company document into it? The answers often surprise management. **Do not ban.** A ban does not remove the use: it moves it to the personal phone, where no rule applies any more.",
        "**Choose, write, train.** One plan, one account per person, the rule on one page, two hours per team on the real tasks found in the stock-take. **Equip.** Ten standard prompts per job, reread once by someone who knows the work: following up a quote, the minutes of a meeting, the reply to a complaint. They are kept where everyone can find them, for example in [the intranet](" + L.intranet + ").",
      ] },
      { heading: "Personal account or company account", body: [
        "The figure compares the two on six points.",
      ], visual: 'comptes', after: [
        "**What the publisher says.** ChatGPT is a generative AI chatbot developed by OpenAI. According to what the publisher states on its public pages in November 2026, sharing conversations to improve the models is on by default on personal accounts, free or paid, and can be turned off in the settings; for the plans aimed at companies and for programmatic access, content is not used for training by default. These conditions change, and each assistant has its own: reread those of the plan you take out.",
        "**What the company account changes.** The history stays in the company's space and is closed when the employee leaves; an administrator adds and removes members; sign-in is with the work address. **What it does not change.** The assistant does not become more accurate, and the three bins still apply: data about a person or a document under confidentiality is no more to be pasted there. If nothing must leave your walls, there is another route, described in [the guide to running a model on your own servers](" + L.deployer + ").",
      ] },
      { heading: "Five rules that fit on one page", body: [
        "The accented layer is data.",
      ], visual: 'regles', after: [
        "**Reread.** A hallucination is a response generated by AI that contains false or misleading information presented as fact. The assistant invents a reference, a figure or a clause with the same assurance as everything else. Hence the rule: whoever signs rereads, in particular figures, names, dates and quotations. A text nobody has reread is not sent.",
        "**No action without approval.** As soon as an assistant can read your emails or web pages, another weakness appears: prompt injection, an attack in which innocuous-looking inputs are designed to cause unintended behavior in the model. A booby-trapped document can “ask” it to pass data on. The defence is a simple rule: it proposes, someone decides. It is also the rule for the agents described in [the guide to the AI agent in a company](" + L.agent + "). **Train.** Two hours are enough for use to become a skill.",
      ] },
      { heading: "Ten uses, sorted by time saved and by sensitivity", body: [
        "The figure places ten uses by time saved and by data sensitivity.",
      ], visual: 'usages', after: [
        "**From tomorrow.** Rephrasing and correcting an email, translating between French, Arabic and English, summarising a long public document, writing a spreadsheet formula, building the outline of a proposal: no internal data goes in, and the gain is immediate. That is where a team learns to give an instruction and to reread.",
        "**With a frame.** Answering customers from your documents, searching your contracts and procedures, analysing sales per customer: these are the three uses that would save the most, and they touch your data. The technique is called retrieval-augmented generation: it enables a model to retrieve and incorporate new information from your own data sources. The assistant then answers from your documents, with rights per person. It is something to be built, described in [the guide to putting AI into an application](" + L.mettre + "), and it is checked before being opened to everyone: see [the guide to measuring that an AI works](" + L.mesurer + "). **No.** Applying legal or medical advice as it is, or entrusting it with passwords.",
      ] },
      { heading: "Four weeks, from taking stock to the first review, in 2027", body: [
        "Four weeks in the example, the first one to take stock.",
      ], visual: 'calendrier', after: [
        "**Week 1, taking stock**, anonymously and without judgment. **Week 2, the plan and the accounts.** **Weeks 2 and 3, the rule and the training**: two hours per team, on the real tasks.",
        "**Weeks 3 and 4, the standard prompts.** **Week 4, the first review**: real uses, incidents, the time each person says they saved, and which of the three sensitive uses now deserve an assistant connected to your documents.",
      ], list: [
        "**What the manager receives**: the result of the stock-take, the three-bin rule on one page, the company accounts opened, ten standard prompts per job, and a review after four weeks.",
        "**What the company no longer does**: find out by chance that a contract was pasted into a personal account, ban to no effect, send a text nobody has reread, let an assistant act on its own.",
        "**What is measured**: share of employees on a company account, tasks given to the assistant, incidents reported, time people say they saved per job.",
        "**What Symloop does**: the stock-take, the rule and the training, opening the accounts, the standard prompts, then, for the uses that deserve it, the assistant connected to your documents, with its rights, its measurement and its human approval.",
      ], faq: [
        { q: "How do you use ChatGPT in a company without risk?", a: "With five rules: a company account, the three-bin rule for what is pasted, a reread by whoever signs, no action without human approval, and two hours of training per team. Start with the uses where no internal data goes in." },
        { q: "Can company data be put into ChatGPT?", a: "It depends on the bin. An already public text, yes. An internal document, once cleaned of its names and amounts, or on a company account. Passwords, data about people or a document under a confidentiality clause: never, whatever the tool and the plan." },
        { q: "Does ChatGPT keep what you write to it?", a: "Conversations stay in the account's history. According to the publisher, in November 2026, they may be used to improve the models on a personal account unless that sharing is turned off in the settings, and are not used for that by default on the plans for companies. Check the conditions of your plan." },
        { q: "Do we need a company subscription?", a: "As soon as use goes beyond rephrasing and translating texts with no internal data, yes: the history, the administration and the terms of use move to the company's side, and the account is closed when the employee leaves. It does not remove the need for the three bins or the reread." },
        { q: "How does a ChatGPT plan for companies work?", a: "It is a workspace in the company's name: each employee has an account linked to their work address, an administrator manages members and rights, and the data conditions are those of a business contract. The exact features change: read the plan's page when you take it out." },
        { q: "Should we ban ChatGPT for our employees?", a: "No. A ban does not remove the use: it moves it to the personal phone, where no rule applies and where you can no longer see anything. A simple frame, applied in ten seconds, protects better than a ban nobody respects." },
        { q: "What should be done if an employee has already pasted a confidential document?", a: "Delete the conversation, turn off sharing in the account settings, change any password or key that was in it, and check with your legal adviser what the document's confidentiality clause provides. Then make it the first case in the training, without looking for someone to blame." },
        { q: "Can ChatGPT's answers be trusted?", a: "Not without rereading. An assistant can produce false information presented as fact: a reference, a figure, a clause. It is reliable for rephrasing, translating, structuring; for a fact, an amount or a text that commits you, whoever signs checks." },
        { q: "What is the difference between ChatGPT and an assistant connected to our documents?", a: "ChatGPT answers from what it has learnt and from what you paste. An assistant connected to your documents looks for the answer in your contracts, procedures and catalogue, cites its source, and respects each person's rights. It is something to be built, not a subscription." },
        { q: "Where do we start?", a: "With an anonymous stock-take: who uses which assistant, on which account, for what. Then the five risk-free uses, on a company account, with the three-bin rule. The uses that touch your customers come afterwards." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "A ban does not remove the use: it moves it to the personal phone." },
      { after: 3, text: "It proposes, someone decides." },
    ],
    cta: { eyebrow: "Tell us how many people, which jobs, and what you have already found: we do the stock-take and the rule, then we tell you which of your uses deserve an assistant connected to your data", title: "Contracts pasted into a personal account, a customer file sent to an assistant, answers never reread, or a founder in France who wants their teams to save time without exposing anything: we set the frame, then we build the assistant that works on your documents", body: "Stock-take, three-bin rule, company accounts, training, standard prompts, then an assistant on your documents with rights, measurement and human approval. We work from Algiers and Sétif, in French, Arabic and English." },
    related: { label: 'Also read', items: [
      { href: L.agent, kind: '2027', name: 'AI agent in a company: where to start, what works' },
      { href: L.mettre, kind: '2027', name: 'Putting AI into an application: five functions, cost per request' },
      { href: L.deployer, kind: '2027', name: 'Running an AI model on your own servers: when, and at what cost' },
      { href: L.mesurer, kind: '2027', name: 'Measuring that an AI works before production' },
    ] },
  },
  ar: {
    kind: 'ChatGPT في المؤسسة · الجزائر · 2027', title: "كيف يُستعمل ChatGPT في المؤسسة في الجزائر (2027): عمّالكم يلصقون فيه العقود وملفات الزبائن أصلاً، ما يمكن وضعه فيه، ما لا يوضع أبداً، حساب شخصي أم حساب المؤسسة",
    dek: "«اكتشفت أن مساعِدة تلصق عقودنا في " + I('ChatGPT') + " لتلخيصها، وأن تاجراً وضع فيه ملف الزبائن لتحضير متابعة. يربحون الوقت، ولا أريد منعه. لكن أين تذهب هذه البيانات؟ هل يلزم اشتراك للمؤسسة؟ وماذا يمكن ائتمانه عليه؟» لا تمنعوه: أطّروه. حساب للمؤسسة، قاعدة من ثلاث سلال لما يدخل، ومراجعة ممن يوقّع.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['ChatGPT في المؤسسة', 'الذكاء الاصطناعي في العمل', 'البيانات السرية', 'الحساب المهني', 'قواعد استعمال الذكاء الاصطناعي', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** عمّالكم يستعملون مساعداً أصلاً: والسؤال على أي حساب، وبأي بيانات. خمس قواعد. **حساب للمؤسسة**، لا حساب شخصي. **ثلاث سلال**: ما يُلصق كما هو، ما يُلصق منظَّفاً، وما لا يُلصق أبداً، كلمات المرور، بيانات الأشخاص، والوثائق السرية. **مراجعة** ممن يوقّع، لأن المساعد قد يؤكّد شيئاً خاطئاً. **لا فعل** دون مصادقة بشرية. **ساعتان من التكوين** لكل فريق. خمسة استعمالات تُنجز من الغد دون خطر؛ والثلاثة الأنفع، التي تمسّ زبائنكم ووثائقكم، تتطلب هذا الإطار، ثم مساعداً موصولاً ببياناتكم.",
      "هذا الدليل موجَّه إلى المسيّر الذي يكتشف أن فرقه تستعمل " + I('ChatGPT') + " أو مساعداً آخر، وإلى المؤسس المقيم في فرنسا الذي يريد الربح نفسه في الوقت لمؤسسته في الجزائر. التعريفات المذكورة آتية من مصادر علنية: روبوت المحادثة، الهلوسة، حقن التعليمات، التوليد المعزَّز بالاسترجاع، و«الذكاء الاصطناعي الخفي». وشروط استعمال البيانات هي التي يذكرها ناشر " + I('ChatGPT') + " في نوفمبر 2026؛ وهي تتغيّر، ولكل مساعد شروطه. المؤسسة واستعمالاتها مثال مركَّب. هذا الدليل لا يتناول القواعد القانونية للبيانات الشخصية ولا السر المهني: راجعوا مستشاركم.",
    ],
    sections: [
      { heading: "ما يمكن لصقه في مساعد: ثلاث سلال", body: [
        "الشكل يرتّب اثني عشر مثالاً في ثلاث سلال.",
      ], visual: 'bacs', after: [
        "**لماذا ثلاث سلال.** الاستعمال غير المصرَّح به لأدوات الذكاء الاصطناعي من طرف العمّال له اسم، «الذكاء الاصطناعي الخفي»: شكل حديث من تلك الأدوات المعلوماتية التي تُعتمَد دون المرور بمصلحة الإعلام الآلي. وليس نظرياً: في ماي 2023، حسب الصحافة، قيّدت " + I('Samsung') + " استعمال المساعدات بعد أن أرسل مهندسون شيفرة داخلية إلى " + I('ChatGPT') + ". والجواب ليس ميثاقاً من عشر صفحات: هو قاعدة تُطبَّق في عشر ثوانٍ، لحظة اللصق.",
        "**السلة الوسطى.** هي الأنفع والأدقّ: محضر، جدول مبيعات، أو إجراء. وطريقتان للدخول. التنظيف: الأسماء تصير الزبون أ، المبالغ تصير س، والنتيجة تُلصق في الوثيقة الحقيقية. أو العمل على حساب المؤسسة، الذي شروطه معروفة. **السلة الثالثة.** كلمات المرور، مفاتيح الوصول، بيانات أشخاص معروفين، ووثائق مشمولة ببند السرية: أبداً، مهما كانت الأداة والعرض. وكلمة مرور أُلصقت في محادثة كلمة مرور تُغيَّر، كما بعد [اختراق](" + L.piratage + ").",
      ] },
      { heading: "وضع إطار، بهذا الترتيب", body: [
        "المرحلة الأولى مبرزة: الإحصاء.",
      ], visual: 'ordre', after: [
        "**الإحصاء.** استبيان مجهول الاسم من خمسة أسئلة: هل تستعملون مساعداً، أيّه، على أي حساب، لأي مهام، وهل لصقتم فيه يوماً وثيقة للمؤسسة؟ والأجوبة تفاجئ الإدارة غالباً. **عدم المنع.** المنع لا يزيل الاستعمال: ينقله إلى الهاتف الشخصي، حيث لا تسري أي قاعدة.",
        "**الاختيار، الكتابة، والتكوين.** عرض واحد، حساب لكل شخص، القاعدة في صفحة، وساعتان لكل فريق على المهام الفعلية المحصاة. **التجهيز.** عشر تعليمات نموذجية لكل مهنة، يراجعها مرة من يعرف العمل: متابعة عرض سعر، محضر اجتماع، والجواب على شكوى. وتُرتَّب حيث يجدها كل واحد، مثلاً في [الإنترانت](" + L.intranet + ").",
      ] },
      { heading: "حساب شخصي أم حساب المؤسسة", body: [
        "الشكل يقارن الاثنين في ست نقاط.",
      ], visual: 'comptes', after: [
        "**ما يقوله الناشر.** " + I('ChatGPT') + " روبوت محادثة بالذكاء الاصطناعي التوليدي طوّرته " + I('OpenAI') + ". وحسب ما يذكره الناشر في صفحاته العلنية في نوفمبر 2026، تقاسم المحادثات لتحسين النماذج مفعَّل افتراضياً في الحسابات الشخصية، المجانية أو المدفوعة، ويُعطَّل في الإعدادات؛ وفي العروض الموجَّهة للمؤسسات وفي الوصول عبر البرامج، لا تُستعمل المحتويات للتدريب افتراضياً. وهذه الشروط تتغيّر، ولكل مساعد شروطه: أعيدوا قراءة شروط العرض الذي تشتركون فيه.",
        "**ما يغيّره حساب المؤسسة.** السجل يبقى في فضاء المؤسسة ويُغلق عند مغادرة العامل؛ مسؤول يضيف الأعضاء ويسحبهم؛ والدخول يتم بالعنوان المهني. **ما لا يغيّره.** المساعد لا يصير أدقّ، والسلال الثلاث تبقى سارية: بيانات شخص أو وثيقة سرية لا تُلصق فيه كذلك. وإذا كان لا شيء يجب أن يخرج من جدرانكم، فتوجد طريق أخرى، موصوفة في [دليل نشر نموذج على خوادمكم](" + L.deployer + ").",
      ] },
      { heading: "خمس قواعد تسعها صفحة", body: [
        "الطبقة المبرزة هي البيانات.",
      ], visual: 'regles', after: [
        "**المراجعة.** الهلوسة جواب ينتجه ذكاء اصطناعي ويحتوي معلومة خاطئة أو مضلِّلة معروضة كحقيقة. المساعد يخترع مرجعاً أو رقماً أو بنداً بالثقة نفسها التي يقول بها الباقي. ومن هنا القاعدة: من يوقّع يراجع، خاصة الأرقام والأسماء والتواريخ والاقتباسات. والنص الذي لم يراجعه أحد لا يُرسَل.",
        "**لا فعل دون مصادقة.** حالما يستطيع مساعد قراءة بريدكم أو صفحات ويب، تظهر ثغرة أخرى: حقن التعليمات، هجوم تُصمَّم فيه مدخلات تبدو بريئة لإحداث تصرف غير منتظَر من النموذج. ووثيقة مفخَّخة قد «تطلب» منه إيصال بيانات. والوقاية قاعدة بسيطة: هو يقترح، وأحدهم يقرّر. وهي كذلك قاعدة الوكلاء الموصوفين في [دليل الوكيل الذكي في المؤسسة](" + L.agent + "). **التكوين.** ساعتان تكفيان ليصير الاستعمال مهارة.",
      ] },
      { heading: "عشرة استعمالات، مرتَّبة حسب الوقت المربوح والحساسية", body: [
        "الشكل يضع عشرة استعمالات حسب الوقت المربوح وحساسية البيانات.",
      ], visual: 'usages', after: [
        "**من الغد.** إعادة صياغة رسالة وتصحيحها، الترجمة بين الفرنسية والعربية والإنجليزية، تلخيص وثيقة علنية طويلة، كتابة صيغة في جدول، وبناء مخطط عرض: لا بيانات داخلية تدخل فيها، والربح فوري. وهنا يتعلم الفريق إعطاء تعليمة والمراجعة.",
        "**بإطار.** الجواب على الزبائن من وثائقكم، البحث في عقودكم وإجراءاتكم، وتحليل المبيعات حسب الزبون: هي الاستعمالات الثلاثة التي تربح أكثر، وتمسّ بياناتكم. والتقنية اسمها التوليد المعزَّز بالاسترجاع: تسمح للنموذج بجلب معلومات من مصادركم الخاصة وإدماجها. فيجيب المساعد من وثائقكم، بصلاحيات لكل شخص. وهو بناء، موصوف في [دليل إدخال الذكاء الاصطناعي في تطبيق](" + L.mettre + ")، ويُتحقَّق منه قبل فتحه للجميع: انظر [دليل قياس أن الذكاء الاصطناعي يعمل](" + L.mesurer + "). **لا.** تطبيق رأي قانوني أو طبي كما هو، أو ائتمانه على كلمات المرور.",
      ] },
      { heading: "أربعة أسابيع، من الإحصاء إلى أول حصيلة، سنة 2027", body: [
        "أربعة أسابيع في المثال، والأول منها للإحصاء.",
      ], visual: 'calendrier', after: [
        "**الأسبوع 1، الإحصاء**، مجهول الاسم ودون حكم. **الأسبوع 2، العرض والحسابات.** **الأسبوعان 2 و3، القاعدة والتكوين**: ساعتان لكل فريق، على المهام الفعلية.",
        "**الأسبوعان 3 و4، التعليمات النموذجية.** **الأسبوع 4، أول حصيلة**: الاستعمالات الفعلية، الحوادث، الوقت الذي يصرّح كل واحد بربحه، وأي الاستعمالات الثلاثة الحساسة يستحق الآن مساعداً موصولاً بوثائقكم.",
      ], list: [
        "**ما يستلمه المسيّر**: نتيجة الإحصاء، قاعدة السلال الثلاث في صفحة، حسابات المؤسسة مفتوحة، عشر تعليمات نموذجية لكل مهنة، وحصيلة بعد أربعة أسابيع.",
        "**ما لم تعد المؤسسة تفعله**: اكتشاف صدفة أن عقداً أُلصق في حساب شخصي، المنع دون أثر، إرسال نص لم يراجعه أحد، وترك مساعد يتصرف وحده.",
        "**ما يُقاس**: حصة العمّال على حساب المؤسسة، المهام الموكلة للمساعد، الحوادث المصرَّح بها، والوقت المصرَّح بربحه حسب المهنة.",
        "**ما تفعله Symloop**: الإحصاء، القاعدة والتكوين، فتح الحسابات، التعليمات النموذجية، ثم، للاستعمالات التي تستحق، المساعد الموصول بوثائقكم، بصلاحياته وقياسه ومصادقته البشرية.",
      ], faq: [
        { q: "كيف يُستعمل ChatGPT في المؤسسة دون خطر؟", a: "بخمس قواعد: حساب للمؤسسة، قاعدة السلال الثلاث لما يُلصق، مراجعة ممن يوقّع، لا فعل دون مصادقة بشرية، وساعتان من التكوين لكل فريق. وابدؤوا بالاستعمالات التي لا تدخل فيها بيانات داخلية." },
        { q: "هل يمكن وضع بيانات المؤسسة في ChatGPT؟", a: "حسب السلة. نص منشور أصلاً، نعم. وثيقة داخلية، بعد تنظيفها من الأسماء والمبالغ، أو على حساب المؤسسة. وكلمات المرور، بيانات الأشخاص، أو وثيقة مشمولة ببند السرية: أبداً، مهما كانت الأداة والعرض." },
        { q: "هل يحتفظ ChatGPT بما نكتبه له؟", a: "المحادثات تبقى في سجل الحساب. وحسب الناشر، في نوفمبر 2026، قد تُستعمل لتحسين النماذج في الحساب الشخصي، إلا إذا عُطِّل هذا التقاسم في الإعدادات، ولا تُستعمل لذلك افتراضياً في عروض المؤسسات. راجعوا شروط عرضكم." },
        { q: "هل يلزم اشتراك للمؤسسة؟", a: "حالما يتجاوز الاستعمال صياغة وترجمة نصوص دون بيانات داخلية، نعم: السجل والإدارة وشروط الاستعمال تنتقل إلى جهة المؤسسة، والحساب يُغلق عند مغادرة العامل. ولا يُغني عن السلال الثلاث ولا عن المراجعة." },
        { q: "كيف يعمل عرض ChatGPT للمؤسسات؟", a: "هو فضاء عمل باسم المؤسسة: لكل عامل حساب مربوط بعنوانه المهني، مسؤول يسيّر الأعضاء والصلاحيات، وشروط البيانات هي شروط عقد مهني. والوظائف بالتفصيل تتغيّر: اقرؤوا صفحة العرض عند الاشتراك." },
        { q: "هل نمنع ChatGPT عن العمّال؟", a: "لا. المنع لا يزيل الاستعمال: ينقله إلى الهاتف الشخصي، حيث لا تسري أي قاعدة ولا ترون شيئاً. وإطار بسيط، يُطبَّق في عشر ثوانٍ، يحمي أكثر من منع لا يحترمه أحد." },
        { q: "ماذا نفعل إذا لصق عامل وثيقة سرية من قبل؟", a: "حذف المحادثة، تعطيل التقاسم في إعدادات الحساب، تغيير كل كلمة مرور أو مفتاح كان فيها، ومراجعة ما ينص عليه بند السرية في الوثيقة مع مستشاركم. ثم جعلها أول حالة في التكوين، دون البحث عن مذنب." },
        { q: "هل يمكن الوثوق بأجوبة ChatGPT؟", a: "ليس دون مراجعة. المساعد قد ينتج معلومة خاطئة معروضة كحقيقة: مرجعاً، رقماً، أو بنداً. وهو موثوق للصياغة والترجمة والترتيب؛ أما لواقعة أو مبلغ أو نص مُلزِم، فمن يوقّع يتحقق." },
        { q: "ما الفرق بين ChatGPT ومساعد موصول بوثائقنا؟", a: I('ChatGPT') + " يجيب مما تعلّمه ومما تلصقونه. والمساعد الموصول بوثائقكم يبحث عن الجواب في عقودكم وإجراءاتكم وفهرسكم، يذكر مصدره، ويحترم صلاحيات كل شخص. هو بناء، لا اشتراك." },
        { q: "من أين نبدأ؟", a: "من إحصاء مجهول الاسم: من يستعمل أي مساعد، على أي حساب، ولماذا. ثم الاستعمالات الخمسة دون خطر، على حساب المؤسسة، بقاعدة السلال الثلاث. والاستعمالات التي تمسّ زبائنكم تأتي بعدها." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "المنع لا يزيل الاستعمال: ينقله إلى الهاتف الشخصي." },
      { after: 3, text: "هو يقترح، وأحدهم يقرّر." },
    ],
    cta: { eyebrow: "قولوا لنا كم شخصاً، أي مهن، وما وجدتموه إلى الآن: ننجز الإحصاء والقاعدة، ثم نقول لكم أي استعمالاتكم يستحق مساعداً موصولاً ببياناتكم", title: "عقود أُلصقت في حساب شخصي، ملف زبائن أُرسل إلى مساعد، أجوبة لا تُراجَع أبداً، أو مؤسس في فرنسا يريد أن تربح فرقه الوقت دون كشف شيء: نضع الإطار، ثم نبني المساعد الذي يعمل على وثائقكم", body: "إحصاء، قاعدة السلال الثلاث، حسابات المؤسسة، تكوين، تعليمات نموذجية، ثم مساعد على وثائقكم بصلاحيات وقياس ومصادقة بشرية. نعمل من الجزائر العاصمة وسطيف، بالفرنسية والعربية والإنجليزية." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.agent, kind: '2027', name: 'الوكيل الذكي في المؤسسة: من أين نبدأ، وما ينجح' },
      { href: L.mettre, kind: '2027', name: 'إدخال الذكاء الاصطناعي في تطبيق: خمس وظائف، وكلفة لكل طلب' },
      { href: L.deployer, kind: '2027', name: 'نشر نموذج ذكاء اصطناعي على خوادمكم: متى، وبأي كلفة' },
      { href: L.mesurer, kind: '2027', name: 'قياس أن الذكاء الاصطناعي يعمل قبل الإنتاج' },
    ] },
  },
};

const KEYWORDS = "comment utiliser chatgpt en entreprise 2027, chatgpt entreprise algérie, comment fonctionne chatgpt business, comment utiliser l'intelligence artificielle au travail, chatgpt données confidentielles, peut-on mettre des données d'entreprise dans chatgpt, charte ia entreprise, ia fantôme shadow ai, interdire chatgpt employés, assistant ia sur ses documents, how to use chatgpt at work algeria 2027, chatgpt company data confidential, كيف استعمل ChatGPT في الشركة 2027, الذكاء الاصطناعي في العمل, البيانات السرية والذكاء الاصطناعي";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
