import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/comment-mesurer-la-satisfaction-client-en-algerie-2027-une-question-apres-chaque-prestation-score-de-recommandation-rappel-sous-48-h-causes.mjs';

const SLUG = 'comment-mesurer-la-satisfaction-client-en-algerie-2027-une-question-apres-chaque-prestation-score-de-recommandation-rappel-sous-48-h-causes';
const FIGURES = ['couches', 'sources', 'nps', 'boucle', 'ordre', 'calendrier'];
const DATE = '2026-11-18';
const I = (x) => '⁦' + x + '⁩';

const L = {
  reclamations: '/blog/le-client-a-appele-trois-fois-reclamations-sav-application-algerie-2027-ticket-unique-priorite-delais-escalade-retours-avoirs-espace-client/',
  notifications: '/blog/notifications-application-algerie-2027-push-sms-whatsapp-boite-in-app-quel-canal-pour-quel-message-pourquoi-elles-n-arrivent-pas-cout-par-envoi/',
  tableau: '/blog/tableau-de-bord-temps-reel-gerant-algerie-2027-evenements-agregats-fraicheur-une-definition-par-chiffre-alertes-whatsapp/',
  espace: '/blog/comment-creer-un-espace-client-en-algerie-2027-suivi-de-dossier-documents-factures-demandes-connexion-par-code-chacun-ne-voit-que-le-sien/',
  fichier: '/blog/un-seul-client-pas-trois-fichier-client-unique-application-algerie-2027-comptoir-whatsapp-boutique-telephone-comme-cle-fusion/',
  crm: '/blog/logiciel-crm-algerie-2027-portefeuille-clients-pipeline-relances-devis-prevision-commerciaux/',
};

const CONTENT = {
  fr: {
    kind: 'Satisfaction client · Algérie · 2027', title: "Comment mesurer la satisfaction client en Algérie (2027) : personne ne se plaint et pourtant des clients partent, une question juste après la prestation, un rappel sous 48 heures, et les causes comptées chaque lundi",
    dek: "« On pense que nos clients sont contents parce qu'ils ne se plaignent pas. Puis on en perd trois d'un coup, et on découvre les reproches dans les avis en ligne. Comment mesurer la satisfaction client simplement, sans enquête de vingt questions que personne ne remplit, et surtout que faire des réponses ? » Une seule question, posée juste après la prestation ; et, pour chaque note basse, un rappel sous 48 heures par une personne nommée. C'est le rappel qui fait monter la satisfaction, pas l'enquête.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Satisfaction client', 'Enquête de satisfaction', 'Score de recommandation', 'Rappel des clients mécontents', 'Causes d’insatisfaction', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Ne pas recevoir de réclamation ne dit pas que les clients sont satisfaits : un client mécontent peut partir sans rien dire. Mesurez en trois gestes. **Une question**, une note sur 5 et « pourquoi cette note ? », envoyée **juste après la prestation** par le canal que le client utilise déjà. **Un rappel sous 48 heures** pour chaque note basse, par une personne nommée, qui code la cause. **Trois chiffres chaque lundi** : le taux de réponse, la part des notes basses rappelées à temps, et les causes. Deux fois par an, une seconde question mesure la relation : le score de recommandation. Cinq semaines dans l'exemple. Sans rappel, une enquête ne change rien.",
      "Ce guide s'adresse au gérant d'une entreprise de services, de distribution ou d'installation qui livre, intervient ou traite des dossiers, et au fondateur installé en France qui ne voit pas ses clients en Algérie. Les définitions citées viennent de sources publiques : la satisfaction client, le score de recommandation (NPS), le biais de participation, la loi de Goodhart, le paradoxe de la récupération de service, l'attrition. L'entreprise, ses 200 réponses, ses douze notes basses et son calendrier sont un exemple construit. Aucun pourcentage « habituel » de clients silencieux n'est avancé : ce chiffre se mesure chez vous. Ce guide ne traite pas des règles de droit sur les données personnelles ni sur la prospection : voyez votre conseil.",
    ],
    sections: [
      { heading: "Mesurer la satisfaction, en cinq couches", body: [
        "La couche accentuée est l'alerte : c'est elle qui change quelque chose.",
      ], visual: 'couches', after: [
        "**Ce qu'on mesure.** La satisfaction client mesure à quel point les produits et les services d'une entreprise atteignent ou dépassent les attentes du client. Elle se demande au client, au bon moment : juste après la livraison, l'intervention ou la clôture du dossier, quand le souvenir est précis. **Court.** La brièveté est souvent citée comme ce qui augmente le taux de réponse, et la qualité des réponses se dégrade vers la fin des longs questionnaires. Une note, un pourquoi : trois touches sur un téléphone.",
        "**Le canal.** Celui que le client utilise déjà avec vous, un lien dans un message, sans compte ni mot de passe ; le choix entre les canaux est traité dans [le guide sur les notifications](" + L.notifications + "). **Le déclencheur.** L'envoi ne dépend de la mémoire de personne : il part quand la prestation est marquée terminée dans votre logiciel. Si vos clients ont déjà un espace où suivre leur dossier, la question s'y pose aussi : voir [le guide sur l'espace client](" + L.espace + ").",
      ] },
      { heading: "Six sources, ce que chacune dit et ce qu'elle tait", body: [
        "La figure compare six façons de savoir ce que pensent vos clients.",
      ], visual: 'sources', after: [
        "**Les réclamations ne suffisent pas.** Elles disent ce qui a assez dérangé pour qu'on appelle ; un client mécontent peut aussi partir sans rien dire, et l'attrition, la perte de clients, ne se voit qu'après. **Les avis en ligne** montrent les extrêmes, en public, quand il est trop tard pour réparer. **Qui répond.** Toute enquête a un biais de participation : les résultats cessent d'être représentatifs quand ceux qui répondent ont des traits particuliers, par exemple les très contents et les très fâchés. D'où l'intérêt de suivre le taux de réponse, et de demander à tous, pas aux clients choisis.",
        "**Deux questions, deux usages.** La note après la prestation dit ce qui s'est passé cette fois ; elle sert à réparer. Le score de recommandation, posé deux fois par an, dit l'état de la relation ; il sert à suivre une tendance. Mélanger les deux fatigue les clients sans rien apprendre de plus. **Les réclamations**, elles, gardent leur circuit propre, avec priorités et délais : c'est [le guide sur les réclamations et le SAV](" + L.reclamations + ").",
      ] },
      { heading: "Calculer un score de recommandation", body: [
        "La figure range 200 réponses en trois groupes, puis fait la soustraction.",
      ], visual: 'nps', after: [
        "**La méthode.** Le score de recommandation, ou NPS, est un indicateur d'étude de marché fondé sur une seule question : recommanderiez-vous l'entreprise ? Il a été mis au point par Fred Reichheld, consultant chez Bain & Company, et popularisé par son article de 2003 dans la Harvard Business Review. Les répondants se répartissent en promoteurs, qui donnent 9 ou 10, passifs, 7 ou 8, et détracteurs, 6 ou moins ; le score s'obtient en soustrayant le pourcentage de détracteurs de celui des promoteurs. Dans l'exemple : 55 moins 15, soit +40.",
        "**Ce qu'il ne dit pas.** Un score ne dit pas quoi changer : ce sont les raisons écrites par les détracteurs, lues une par une. Il ne se compare pas non plus d'un secteur à l'autre ; comparez-vous à vous-même, d'un semestre au suivant, avec la même question et le même moment. **Pas d'objectif individuel.** La loi de Goodhart le résume : quand une mesure devient un objectif, elle cesse d'être une bonne mesure. Une prime attachée à la note apprend à l'équipe à demander de bonnes notes, pas à mieux servir.",
      ] },
      { heading: "D'une note basse à un rappel, en quarante-huit heures", body: [
        "La figure suit une note basse, de la prestation à la cause corrigée.",
      ], visual: 'boucle', after: [
        "**Une personne nommée.** L'alerte ne part pas vers une boîte commune : elle arrive chez un responsable, avec la note, la raison et le dossier. Il rappelle sous 48 heures, écoute, répare ce qui peut l'être, et choisit une cause dans une liste de cinq ou six : retard, erreur, accueil, qualité, information. **Ce que vaut un rappel.** On a décrit un « paradoxe de la récupération de service » : un client penserait plus de bien d'une entreprise après qu'elle a corrigé un problème que s'il n'y en avait pas eu. Les études donnent des résultats partagés ; retenez seulement qu'un problème réparé vite n'est pas forcément un client perdu.",
        "**La fiche du client.** La note, la raison et le rappel s'ajoutent à l'historique du client, là où le commercial les verra avant sa prochaine visite : c'est le rôle [du CRM](" + L.crm + "), et cela suppose un client par fiche, comme l'explique [le guide sur le fichier client unique](" + L.fichier + "). **Dire ce qui a changé.** Une fois par trimestre, un message court aux clients : ce que vous nous avez dit, ce que nous avons fait. C'est ce qui fait répondre la fois suivante.",
      ] },
      { heading: "Mettre en place, dans cet ordre", body: [
        "Le premier temps est accentué : choisir le moment.",
      ], visual: 'ordre', after: [
        "**Choisir le moment.** Une seule prestation pour commencer, celle qui compte le plus pour le client : la livraison, la fin d'un chantier, la clôture d'un dossier. **Écrire la question.** Avec les mots du client, dans sa langue, et une échelle simple : de 1 à 5. **Brancher l'envoi** sur l'événement « prestation terminée » ; si le logiciel ne le sait pas, c'est le premier travail.",
        "**Nommer** celui qui rappelle, et son remplaçant. **Coder** les causes : cinq ou six, pas vingt, sinon personne ne choisit. **Publier.** Le lundi, trois chiffres devant l'équipe : le taux de réponse, la part des notes basses rappelées sous 48 heures, le classement des causes. Un chiffre a une définition et une seule, comme l'explique [le guide sur le tableau de bord du gérant](" + L.tableau + ").",
      ] },
      { heading: "Cinq semaines, de la première question au premier bilan, en 2027", body: [
        "Cinq semaines dans l'exemple, dont la première pour décider du moment et de la question.",
      ], visual: 'calendrier', after: [
        "**Semaine 1, le moment et la question** : quelle prestation déclenche l'envoi, la question, l'échelle, la liste des causes. **Semaines 2 et 3, l'envoi et la réponse** : un lien à la fin de la prestation, une page en trois touches. **Semaines 3 et 4, l'alerte et le rappel** : une personne nommée, 48 heures, une cause.",
        "**Semaines 4 et 5, le tableau du lundi et le premier bilan** : ce que disent les causes, une correction décidée, un message aux clients. Dans l'exemple, sept notes basses sur douze avaient la même cause, le retard sans prévenir : la correction n'était pas dans l'enquête, mais dans la planification et le message d'avance. Le score de recommandation, lui, attend le sixième mois.",
      ], list: [
        "**Ce que le gérant reçoit** : une question envoyée automatiquement après la prestation, une page de réponse sans compte, une alerte pour chaque note basse, un rappel tracé, des causes codées, et trois chiffres chaque lundi.",
        "**Ce que l'entreprise ne fait plus** : conclure que tout va bien parce que personne n'appelle, découvrir un reproche dans un avis public, envoyer une enquête de vingt questions, collectionner des notes sans rappeler.",
        "**Ce qui est mesuré** : taux de réponse, part des notes basses rappelées sous 48 heures, causes classées, et deux fois par an le score de recommandation avec ses trois parts.",
        "**Ce que fait Symloop** : le choix du moment et de la question, l'envoi branché sur votre logiciel, la page de réponse, l'alerte et le suivi du rappel, les causes, le tableau du lundi, puis le score de recommandation semestriel.",
      ], faq: [
        { q: "Comment mesurer la satisfaction client ?", a: "Par une seule question, une note sur 5 suivie de « pourquoi cette note ? », envoyée juste après la prestation. Chaque note basse est rappelée sous 48 heures par une personne nommée, qui code la cause. Trois chiffres se lisent chaque lundi : le taux de réponse, les notes basses rappelées à temps, et les causes." },
        { q: "Quelle question poser, et quand ?", a: "« Comment s'est passée votre livraison, votre intervention, votre dossier ? », avec une note de 1 à 5 et une ligne libre. Dans l'heure ou le jour qui suit la prestation, pas à la fin du trimestre : le souvenir est précis et la réparation encore possible." },
        { q: "Qu'est-ce que le NPS, et comment le calculer ?", a: "C'est le score de recommandation : on demande au client s'il recommanderait l'entreprise, de 0 à 10. Les 9 et 10 sont des promoteurs, les 7 et 8 des passifs, les 0 à 6 des détracteurs. Le score est le pourcentage de promoteurs moins le pourcentage de détracteurs." },
        { q: "Quel est un bon score de recommandation ?", a: "Il n'y a pas de seuil universel : les scores varient selon les secteurs et les pays. Au-dessus de zéro, vous avez plus de promoteurs que de détracteurs. Comparez-vous à vous-même, d'un semestre au suivant, avec la même question posée au même moment." },
        { q: "Combien de clients répondent à une enquête ?", a: "Cela dépend du moment, de la longueur et du canal ; aucun chiffre général ne vaut pour votre activité. Mesurez votre propre taux de réponse dès la première semaine : une seule question, envoyée juste après la prestation par le canal habituel, le fait monter." },
        { q: "Que faire d'une mauvaise note ?", a: "Rappeler le client sous 48 heures, par une personne nommée : écouter, réparer ce qui peut l'être, puis coder la cause. Une note basse sans suite apprend au client que répondre ne sert à rien." },
        { q: "Faut-il lier la satisfaction à la prime des employés ?", a: "Non. Quand une mesure devient un objectif, elle cesse d'être une bonne mesure : l'équipe apprend à demander de bonnes notes, ou à ne pas envoyer la question aux clients fâchés. Suivez les causes par équipe, pas les notes par personne." },
        { q: "Les avis en ligne suffisent-ils ?", a: "Non. Ils montrent les extrêmes, en public, et arrivent quand le client est déjà parti ou fâché. La question posée en privé, juste après la prestation, vous laisse le temps de réparer avant l'avis." },
        { q: "Peut-on envoyer la question par WhatsApp ou par SMS ?", a: "Oui, par le canal que le client utilise déjà avec vous, sous la forme d'un lien vers une page de réponse simple. N'écrivez qu'aux clients qui ont accepté d'être contactés, et voyez votre conseil pour les règles applicables." },
        { q: "Combien de temps faut-il, et par quoi commencer ?", a: "Cinq semaines dans l'exemple de ce guide. Commencez par une seule prestation, une seule question, et le nom de la personne qui rappellera les notes basses : le reste se construit autour." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "Ne pas recevoir de réclamation ne dit pas que les clients sont satisfaits." },
      { after: 3, text: "C'est le rappel, pas l'enquête, qui change quelque chose." },
    ],
    cta: { eyebrow: "Dites-nous ce que vous livrez, à combien de clients, et dans quel outil la prestation se termine : nous choisissons le moment et la question avec vous, puis nous branchons l'envoi et l'alerte", title: "Aucune réclamation mais des clients qui partent, reproches découverts dans les avis en ligne, enquête que personne ne remplit, ou fondateur en France qui ne voit pas ses clients en Algérie : nous construisons la mesure et la boucle de rappel", body: "Question après la prestation, page de réponse sans compte, alerte pour chaque note basse, suivi du rappel, causes codées, tableau du lundi, score de recommandation semestriel. Nous travaillons depuis Alger et Sétif, en français, en arabe et en anglais." },
    related: { label: 'À lire aussi', items: [
      { href: L.reclamations, kind: '2027', name: 'Réclamations et SAV : un ticket unique, des délais' },
      { href: L.crm, kind: '2027', name: 'Logiciel CRM : portefeuille, relances, devis' },
      { href: L.tableau, kind: '2027', name: 'Tableau de bord du gérant : une définition par chiffre' },
      { href: L.espace, kind: '2027', name: 'Créer un espace client : état du dossier, pièces, factures' },
    ] },
  },
  en: {
    kind: 'Customer satisfaction · Algeria · 2027', title: "How to measure customer satisfaction in Algeria (2027): nobody complains and yet customers leave, one question right after the job, a call back within 48 hours, and causes counted every Monday",
    dek: "“We think our customers are happy because they do not complain. Then we lose three at once, and we find the criticism in online reviews. How do we measure customer satisfaction simply, without a twenty-question survey nobody fills in, and above all what do we do with the answers?” A single question, asked right after the job; and, for each low rating, a call back within 48 hours by a named person. It is the call back that raises satisfaction, not the survey.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Customer satisfaction', 'Satisfaction survey', 'Recommendation score', 'Calling back unhappy customers', 'Causes of dissatisfaction', 'Algeria 2027'],
    intro: [
      "**Short answer.** Receiving no complaints does not say that customers are satisfied: an unhappy customer can leave without a word. Measure in three actions. **One question**, a rating out of 5 and “why this rating?”, sent **right after the job** through the channel the customer already uses. **A call back within 48 hours** for each low rating, by a named person, who codes the cause. **Three figures every Monday**: the response rate, the share of low ratings called back in time, and the causes. Twice a year, a second question measures the relationship: the recommendation score. Five weeks in the example. Without a call back, a survey changes nothing.",
      "This guide is for the manager of a service, distribution or installation company that delivers, makes call-outs or handles files, and for the founder based in France who does not see their customers in Algeria. The definitions quoted come from public sources: customer satisfaction, the net promoter score (NPS), participation bias, Goodhart's law, the service recovery paradox, customer attrition. The company, its 200 answers, its twelve low ratings and its calendar are a constructed example. No “usual” percentage of silent customers is put forward: that figure is measured at your place. This guide does not cover the legal rules on personal data or on marketing contact: see your legal adviser.",
    ],
    sections: [
      { heading: "Measuring satisfaction, in five layers", body: [
        "The accented layer is the alert: it is the one that changes something.",
      ], visual: 'couches', after: [
        "**What is measured.** Customer satisfaction is a measure of how products and services supplied by a company meet or surpass customer expectation. It is asked of the customer, at the right moment: right after the delivery, the call-out or the closing of the file, when the memory is precise. **Short.** Brevity is often cited as increasing response rate, and the quality of response degrades toward the end of long surveys. A rating, a why: three taps on a phone.",
        "**The channel.** The one the customer already uses with you, a link in a message, no account and no password; the choice between channels is covered in [the guide to notifications](" + L.notifications + "). **The trigger.** The sending does not depend on anyone's memory: it goes out when the job is marked finished in your software. If your customers already have an area where they follow their file, the question is asked there too: see [the guide to the customer area](" + L.espace + ").",
      ] },
      { heading: "Six sources, what each says and what it leaves out", body: [
        "The figure compares six ways of knowing what your customers think.",
      ], visual: 'sources', after: [
        "**Complaints are not enough.** They say what bothered someone enough to call; an unhappy customer can also leave without a word, and customer attrition, the loss of customers, is only seen afterwards. **Online reviews** show the extremes, in public, when it is too late to repair. **Who answers.** Every survey has a participation bias: results stop being representative when those who answer have particular traits, for example the very happy and the very angry. Hence the value of following the response rate, and of asking everyone, not chosen customers.",
        "**Two questions, two uses.** The rating after the job says what happened this time; it is for repairing. The recommendation score, asked twice a year, says the state of the relationship; it is for following a trend. Mixing the two tires customers without teaching anything more. **Complaints** keep their own circuit, with priorities and time limits: that is [the guide to complaints and after-sales](" + L.reclamations + ").",
      ] },
      { heading: "Computing a recommendation score", body: [
        "The figure sorts 200 answers into three groups, then does the subtraction.",
      ], visual: 'nps', after: [
        "**The method.** The net promoter score, or NPS, is a market research metric based on a single question: would you recommend the company? It was developed by Bain & Company consultant Fred Reichheld and popularised by his 2003 Harvard Business Review article. Respondents are divided into promoters, who give 9 or 10, passives, 7 or 8, and detractors, 6 or lower; calculating the score involves subtracting the percentage of detractors from the percentage of promoters. In the example: 55 minus 15, which gives +40.",
        "**What it does not say.** A score does not say what to change: the reasons written by the detractors do, read one by one. Nor is it compared from one sector to another; compare yourself with yourself, from one half-year to the next, with the same question and the same moment. **No individual target.** Goodhart's law sums it up: when a measure becomes a target, it ceases to be a good measure. A bonus tied to the rating teaches the team to ask for good ratings, not to serve better.",
      ] },
      { heading: "From a low rating to a call back, in forty-eight hours", body: [
        "The figure follows one low rating, from the job to the corrected cause.",
      ], visual: 'boucle', after: [
        "**A named person.** The alert does not go to a shared mailbox: it reaches a manager, with the rating, the reason and the file. They call back within 48 hours, listen, repair what can be repaired, and choose a cause from a list of five or six: lateness, error, reception, quality, information. **What a call back is worth.** A “service recovery paradox” has been described: a customer would think more highly of a company after it corrected a problem than if there had been none. Studies have yielded mixed results; simply remember that a problem repaired quickly is not necessarily a lost customer.",
        "**The customer's record.** The rating, the reason and the call back are added to the customer's history, where the sales rep will see them before the next visit: that is the role of [the CRM](" + L.crm + "), and it assumes one customer per record, as explained in [the guide to the single customer file](" + L.fichier + "). **Saying what changed.** Once a quarter, a short message to customers: what you told us, what we did. That is what gets an answer next time.",
      ] },
      { heading: "Setting it up, in this order", body: [
        "The first step is accented: choose the moment.",
      ], visual: 'ordre', after: [
        "**Choose the moment.** A single job to start with, the one that matters most to the customer: the delivery, the end of a building job, the closing of a file. **Write the question.** In the customer's words, in their language, with a simple scale: from 1 to 5. **Connect the sending** to the “job finished” event; if the software does not know it, that is the first piece of work.",
        "**Name** who calls back, and their stand-in. **Code** the causes: five or six, not twenty, or nobody chooses. **Publish.** On Monday, three figures in front of the team: the response rate, the share of low ratings called back within 48 hours, the ranking of causes. A figure has one definition and one only, as explained in [the guide to the manager's dashboard](" + L.tableau + ").",
      ] },
      { heading: "Five weeks, from the first question to the first review, in 2027", body: [
        "Five weeks in the example, the first one to decide the moment and the question.",
      ], visual: 'calendrier', after: [
        "**Week 1, the moment and the question**: which job triggers the sending, the question, the scale, the list of causes. **Weeks 2 and 3, sending and answer**: a link at the end of the job, a page in three taps. **Weeks 3 and 4, the alert and the call back**: a named person, 48 hours, a cause.",
        "**Weeks 4 and 5, the Monday board and the first review**: what the causes say, one correction decided, a message to customers. In the example, seven low ratings out of twelve had the same cause, lateness without warning: the correction was not in the survey, but in planning and in the advance message. The recommendation score waits until the sixth month.",
      ], list: [
        "**What the manager receives**: a question sent automatically after the job, an answer page with no account, an alert for each low rating, a traced call back, coded causes, and three figures every Monday.",
        "**What the company no longer does**: conclude that all is well because nobody calls, discover a criticism in a public review, send a twenty-question survey, collect ratings without calling back.",
        "**What is measured**: response rate, share of low ratings called back within 48 hours, ranked causes, and twice a year the recommendation score with its three shares.",
        "**What Symloop does**: choosing the moment and the question, the sending connected to your software, the answer page, the alert and the follow-up of the call back, the causes, the Monday board, then the half-yearly recommendation score.",
      ], faq: [
        { q: "How do you measure customer satisfaction?", a: "With a single question, a rating out of 5 followed by “why this rating?”, sent right after the job. Each low rating is called back within 48 hours by a named person, who codes the cause. Three figures are read every Monday: the response rate, the low ratings called back in time, and the causes." },
        { q: "Which question should be asked, and when?", a: "“How did your delivery, your call-out, your file go?”, with a rating from 1 to 5 and a free line. Within the hour or the day after the job, not at the end of the quarter: the memory is precise and repair is still possible." },
        { q: "What is NPS, and how is it calculated?", a: "It is the recommendation score: the customer is asked whether they would recommend the company, from 0 to 10. The 9s and 10s are promoters, the 7s and 8s passives, the 0 to 6 detractors. The score is the percentage of promoters minus the percentage of detractors." },
        { q: "What is a good recommendation score?", a: "There is no universal threshold: scores vary by sector and by country. Above zero, you have more promoters than detractors. Compare yourself with yourself, from one half-year to the next, with the same question asked at the same moment." },
        { q: "How many customers answer a survey?", a: "It depends on the moment, the length and the channel; no general figure holds for your business. Measure your own response rate from the first week: a single question, sent right after the job through the usual channel, raises it." },
        { q: "What should be done with a bad rating?", a: "Call the customer back within 48 hours, through a named person: listen, repair what can be repaired, then code the cause. A low rating with no follow-up teaches the customer that answering is pointless." },
        { q: "Should satisfaction be tied to employees' bonuses?", a: "No. When a measure becomes a target, it ceases to be a good measure: the team learns to ask for good ratings, or not to send the question to angry customers. Follow causes per team, not ratings per person." },
        { q: "Are online reviews enough?", a: "No. They show the extremes, in public, and arrive when the customer has already left or is angry. The question asked in private, right after the job, leaves you time to repair before the review." },
        { q: "Can the question be sent by WhatsApp or SMS?", a: "Yes, through the channel the customer already uses with you, as a link to a simple answer page. Write only to customers who agreed to be contacted, and see your legal adviser for the applicable rules." },
        { q: "How long does it take, and where do we start?", a: "Five weeks in this guide's example. Start with a single job, a single question, and the name of the person who will call back low ratings: the rest is built around that." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "Receiving no complaints does not say that customers are satisfied." },
      { after: 3, text: "It is the call back, not the survey, that changes something." },
    ],
    cta: { eyebrow: "Tell us what you deliver, to how many customers, and in which tool the job ends: we choose the moment and the question with you, then we connect the sending and the alert", title: "No complaints but customers leaving, criticism found in online reviews, a survey nobody fills in, or a founder in France who does not see their customers in Algeria: we build the measurement and the call-back loop", body: "Question after the job, answer page with no account, alert for each low rating, follow-up of the call back, coded causes, Monday board, half-yearly recommendation score. We work from Algiers and Sétif, in French, Arabic and English." },
    related: { label: 'Also read', items: [
      { href: L.reclamations, kind: '2027', name: 'Complaints and after-sales: one ticket, time limits' },
      { href: L.crm, kind: '2027', name: 'CRM software: portfolio, follow-ups, quotes' },
      { href: L.tableau, kind: '2027', name: 'The manager’s dashboard: one definition per figure' },
      { href: L.espace, kind: '2027', name: 'Building a customer area: file status, documents, invoices' },
    ] },
  },
  ar: {
    kind: 'رضا الزبائن · الجزائر · 2027', title: "كيف يُقاس رضا الزبائن في الجزائر (2027): لا أحد يشتكي ومع ذلك يغادر زبائن، سؤال مباشرة بعد الخدمة، مكالمة خلال 48 ساعة، وأسباب تُعدّ كل اثنين",
    dek: "«نظن أن زبائننا راضون لأنهم لا يشتكون. ثم نفقد ثلاثة دفعة واحدة، ونكتشف المآخذ في الآراء على الخط. كيف نقيس رضا الزبائن ببساطة، دون استبيان من عشرين سؤالاً لا يملؤه أحد، وخاصة ماذا نفعل بالأجوبة؟» سؤال واحد، يُطرح مباشرة بعد الخدمة؛ ولكل علامة ضعيفة، مكالمة خلال 48 ساعة من شخص معيَّن بالاسم. والمكالمة هي التي ترفع الرضا، لا الاستبيان.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['رضا الزبائن', 'استبيان الرضا', 'مؤشر التوصية', 'الاتصال بالزبائن غير الراضين', 'أسباب عدم الرضا', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** عدم استلام شكوى لا يقول إن الزبائن راضون: الزبون غير الراضي قد يغادر دون كلمة. قيسوا بثلاثة أفعال. **سؤال واحد**، علامة من 5 و«لماذا هذه العلامة؟»، يُرسَل **مباشرة بعد الخدمة** بالقناة التي يستعملها الزبون أصلاً. **مكالمة خلال 48 ساعة** لكل علامة ضعيفة، من شخص معيَّن بالاسم، يرمّز السبب. **ثلاثة أرقام كل اثنين**: نسبة الجواب، حصة العلامات الضعيفة المتابَعة في الأجل، والأسباب. ومرتين في السنة، سؤال ثانٍ يقيس العلاقة: مؤشر التوصية. خمسة أسابيع في المثال. ودون مكالمة، الاستبيان لا يغيّر شيئاً.",
      "هذا الدليل موجَّه إلى مسيّر مؤسسة خدمات أو توزيع أو تركيب، توصل أو تتدخل أو تعالج ملفات، وإلى المؤسس المقيم في فرنسا الذي لا يرى زبائنه في الجزائر. التعريفات المذكورة آتية من مصادر علنية: رضا الزبائن، مؤشر التوصية " + I('NPS') + "، انحياز المشاركة، قانون غودهارت، مفارقة استرجاع الخدمة، وفقدان الزبائن. المؤسسة وأجوبتها المئتان وعلاماتها الضعيفة الاثنتا عشرة ورزنامتها مثال مركَّب. ولا نسبة «معتادة» للزبائن الصامتين مذكورة هنا: هذا الرقم يُقاس عندكم. هذا الدليل لا يتناول القواعد القانونية للبيانات الشخصية ولا للاتصال التجاري: راجعوا مستشاركم.",
    ],
    sections: [
      { heading: "قياس الرضا، في خمس طبقات", body: [
        "الطبقة المبرزة هي التنبيه: هي التي تغيّر شيئاً.",
      ], visual: 'couches', after: [
        "**ما يُقاس.** رضا الزبائن يقيس إلى أي حد تبلغ منتوجات المؤسسة وخدماتها توقعات الزبون أو تتجاوزها. ويُسأل عنه الزبون، في اللحظة المناسبة: مباشرة بعد التوصيل، التدخّل، أو إغلاق الملف، حين تكون الذكرى دقيقة. **قصير.** الإيجاز يُذكر كثيراً على أنه يرفع نسبة الجواب، وجودة الأجوبة تتراجع نحو آخر الاستبيانات الطويلة. علامة، ولماذا: ثلاث لمسات على الهاتف.",
        "**القناة.** التي يستعملها الزبون معكم أصلاً، رابط في رسالة، دون حساب ولا كلمة مرور؛ والاختيار بين القنوات مشروح في [دليل الإشعارات](" + L.notifications + "). **ما يُطلق الإرسال.** الإرسال لا يتوقف على ذاكرة أحد: يخرج حين تُسجَّل الخدمة منتهية في برنامجكم. وإذا كان لزبائنكم فضاء يتابعون فيه ملفهم، فالسؤال يُطرح هناك كذلك: انظر [دليل فضاء الزبون](" + L.espace + ").",
      ] },
      { heading: "ستة مصادر، ما يقوله كل واحد وما يسكت عنه", body: [
        "الشكل يقارن ست طرق لمعرفة ما يفكر فيه زبائنكم.",
      ], visual: 'sources', after: [
        "**الشكاوى لا تكفي.** تقول ما أزعج إلى حد الاتصال؛ والزبون غير الراضي قد يغادر كذلك دون كلمة، وفقدان الزبائن لا يُرى إلا بعدها. **الآراء على الخط** تُظهر الحالات القصوى، علناً، حين يفوت وقت الإصلاح. **من يجيب.** كل استبيان فيه انحياز مشاركة: النتائج تكفّ عن التمثيل حين تكون لمن يجيبون صفات خاصة، مثلاً الراضون جداً والغاضبون جداً. ومن هنا فائدة متابعة نسبة الجواب، وسؤال الجميع، لا زبائن مختارين.",
        "**سؤالان، واستعمالان.** العلامة بعد الخدمة تقول ما جرى هذه المرة؛ وتنفع للإصلاح. ومؤشر التوصية، المطروح مرتين في السنة، يقول حالة العلاقة؛ وينفع لمتابعة اتجاه. وخلط الاثنين يُتعب الزبائن دون أن يعلّم شيئاً أكثر. **أما الشكاوى**، فتحتفظ بمسارها الخاص، بأولويات وآجال: وهو [دليل الشكاوى وخدمة ما بعد البيع](" + L.reclamations + ").",
      ] },
      { heading: "حساب مؤشر التوصية", body: [
        "الشكل يرتّب 200 جواب في ثلاث مجموعات، ثم يُجري الطرح.",
      ], visual: 'nps', after: [
        "**الطريقة.** مؤشر التوصية، أو " + I('NPS') + "، مؤشر في دراسات السوق مبني على سؤال واحد: هل تنصحون بالمؤسسة؟ وضعه " + I('Fred Reichheld') + "، مستشار لدى " + I('Bain & Company') + "، وشاع بمقاله سنة 2003 في " + I('Harvard Business Review') + ". والمجيبون يتوزعون إلى مروّجين، يعطون 9 أو 10، محايدين، 7 أو 8، ومنتقدين، 6 أو أقل؛ والمؤشر يُحصَل عليه بطرح نسبة المنتقدين من نسبة المروّجين. في المثال: 55 ناقص 15، أي زائد 40.",
        "**ما لا يقوله.** المؤشر لا يقول ما يُغيَّر: الأسباب التي كتبها المنتقدون هي التي تقوله، مقروءة واحداً واحداً. ولا يُقارَن كذلك من قطاع إلى آخر؛ قارنوا أنفسكم بأنفسكم، من سداسي إلى الموالي، بالسؤال نفسه واللحظة نفسها. **لا هدف فردي.** قانون غودهارت يلخّصه: حين يصير القياس هدفاً، يكفّ عن كونه قياساً جيداً. ومنحة مربوطة بالعلامة تعلّم الفريق طلب علامات جيدة، لا خدمة أحسن.",
      ] },
      { heading: "من علامة ضعيفة إلى مكالمة، في ثمانٍ وأربعين ساعة", body: [
        "الشكل يتبع علامة ضعيفة، من الخدمة إلى السبب المصحَّح.",
      ], visual: 'boucle', after: [
        "**شخص معيَّن بالاسم.** التنبيه لا يخرج نحو علبة مشتركة: يصل إلى مسؤول، مع العلامة والسبب والملف. يتصل خلال 48 ساعة، يستمع، يصلح ما يمكن إصلاحه، ويختار سبباً من قائمة من خمسة أو ستة: تأخر، خطأ، استقبال، جودة، أو إعلام. **ما تساويه المكالمة.** وُصفت «مفارقة استرجاع الخدمة»: الزبون قد يحسن ظنه بمؤسسة بعد أن صحّحت مشكلاً أكثر مما لو لم يقع. والدراسات أعطت نتائج متباينة؛ فاحتفظوا فقط بأن مشكلاً أُصلح بسرعة ليس بالضرورة زبوناً ضائعاً.",
        "**بطاقة الزبون.** العلامة والسبب والمكالمة تُضاف إلى سجل الزبون، حيث يراها المندوب قبل زيارته المقبلة: وهو دور [برنامج تسيير العلاقة مع الزبائن](" + L.crm + ")، ويفترض زبوناً واحداً لكل بطاقة، كما يشرح [دليل ملف الزبون الموحَّد](" + L.fichier + "). **قول ما تغيّر.** مرة كل ثلاثة أشهر، رسالة قصيرة إلى الزبائن: ما قلتموه لنا، وما فعلناه. وهو ما يجعلهم يجيبون في المرة الموالية.",
      ] },
      { heading: "الوضع، بهذا الترتيب", body: [
        "المرحلة الأولى مبرزة: اختيار اللحظة.",
      ], visual: 'ordre', after: [
        "**اختيار اللحظة.** خدمة واحدة للبدء، التي تهمّ الزبون أكثر: التوصيل، نهاية ورشة، أو إغلاق ملف. **كتابة السؤال.** بكلمات الزبون، بلغته، وبسلّم بسيط: من 1 إلى 5. **ربط الإرسال** بحدث «انتهت الخدمة»؛ وإذا كان البرنامج لا يعرفه، فهو أول عمل.",
        "**تعيين** من يتصل، ومن ينوب عنه. **ترميز** الأسباب: خمسة أو ستة، لا عشرون، وإلا لا يختار أحد. **النشر.** يوم الاثنين، ثلاثة أرقام أمام الفريق: نسبة الجواب، حصة العلامات الضعيفة المتابَعة خلال 48 ساعة، وترتيب الأسباب. وللرقم تعريف واحد لا غير، كما يشرح [دليل لوحة قيادة المسيّر](" + L.tableau + ").",
      ] },
      { heading: "خمسة أسابيع، من أول سؤال إلى أول حصيلة، سنة 2027", body: [
        "خمسة أسابيع في المثال، والأول منها لتقرير اللحظة والسؤال.",
      ], visual: 'calendrier', after: [
        "**الأسبوع 1، اللحظة والسؤال**: أي خدمة تُطلق الإرسال، السؤال، السلّم، وقائمة الأسباب. **الأسبوعان 2 و3، الإرسال والجواب**: رابط عند نهاية الخدمة، وصفحة بثلاث لمسات. **الأسبوعان 3 و4، التنبيه والمكالمة**: شخص معيَّن بالاسم، 48 ساعة، وسبب.",
        "**الأسبوعان 4 و5، لوحة الاثنين وأول حصيلة**: ما تقوله الأسباب، تصحيح مقرَّر، ورسالة إلى الزبائن. في المثال، سبع علامات ضعيفة من اثنتي عشرة كان لها السبب نفسه، التأخر دون إعلام: والتصحيح لم يكن في الاستبيان، بل في التخطيط والرسالة المسبقة. أما مؤشر التوصية، فينتظر الشهر السادس.",
      ], list: [
        "**ما يستلمه المسيّر**: سؤال يُرسَل آلياً بعد الخدمة، صفحة جواب دون حساب، تنبيه لكل علامة ضعيفة، مكالمة مسجَّلة، أسباب مرمَّزة، وثلاثة أرقام كل اثنين.",
        "**ما لم تعد المؤسسة تفعله**: استنتاج أن كل شيء بخير لأن لا أحد يتصل، اكتشاف مأخذ في رأي علني، إرسال استبيان من عشرين سؤالاً، وجمع علامات دون اتصال.",
        "**ما يُقاس**: نسبة الجواب، حصة العلامات الضعيفة المتابَعة خلال 48 ساعة، الأسباب مرتَّبة، ومرتين في السنة مؤشر التوصية بحصصه الثلاث.",
        "**ما تفعله Symloop**: اختيار اللحظة والسؤال، الإرسال المربوط ببرنامجكم، صفحة الجواب، التنبيه ومتابعة المكالمة، الأسباب، لوحة الاثنين، ثم مؤشر التوصية كل سداسي.",
      ], faq: [
        { q: "كيف يُقاس رضا الزبائن؟", a: "بسؤال واحد، علامة من 5 متبوعة بـ«لماذا هذه العلامة؟»، يُرسَل مباشرة بعد الخدمة. وكل علامة ضعيفة تتبعها مكالمة خلال 48 ساعة من شخص معيَّن بالاسم، يرمّز السبب. وثلاثة أرقام تُقرأ كل اثنين: نسبة الجواب، العلامات الضعيفة المتابَعة في الأجل، والأسباب." },
        { q: "أي سؤال نطرح، ومتى؟", a: "«كيف جرى توصيلكم، تدخّلنا، أو ملفكم؟»، مع علامة من 1 إلى 5 وسطر حر. في الساعة أو اليوم الموالي للخدمة، لا في آخر الثلاثي: الذكرى دقيقة والإصلاح ما زال ممكناً." },
        { q: "ما هو مؤشر التوصية، وكيف يُحسب؟", a: "يُسأل الزبون هل ينصح بالمؤسسة، من 0 إلى 10. أصحاب 9 و10 مروّجون، أصحاب 7 و8 محايدون، ومن 0 إلى 6 منتقدون. والمؤشر هو نسبة المروّجين ناقص نسبة المنتقدين." },
        { q: "ما هو مؤشر التوصية الجيد؟", a: "لا توجد عتبة عامة: المؤشرات تختلف حسب القطاعات والبلدان. فوق الصفر، عندكم مروّجون أكثر من المنتقدين. قارنوا أنفسكم بأنفسكم، من سداسي إلى الموالي، بالسؤال نفسه في اللحظة نفسها." },
        { q: "كم زبوناً يجيب عن استبيان؟", a: "يتوقف على اللحظة والطول والقناة؛ ولا رقم عام يصلح لنشاطكم. قيسوا نسبة الجواب عندكم من الأسبوع الأول: سؤال واحد، يُرسَل مباشرة بعد الخدمة بالقناة المعتادة، يرفعها." },
        { q: "ماذا نفعل بعلامة سيئة؟", a: "الاتصال بالزبون خلال 48 ساعة، من شخص معيَّن بالاسم: الاستماع، إصلاح ما يمكن إصلاحه، ثم ترميز السبب. وعلامة ضعيفة دون متابعة تعلّم الزبون أن الجواب لا ينفع." },
        { q: "هل نربط الرضا بمنحة العمّال؟", a: "لا. حين يصير القياس هدفاً، يكفّ عن كونه قياساً جيداً: الفريق يتعلم طلب علامات جيدة، أو عدم إرسال السؤال للزبائن الغاضبين. تابعوا الأسباب حسب الفريق، لا العلامات حسب الشخص." },
        { q: "هل تكفي الآراء على الخط؟", a: "لا. تُظهر الحالات القصوى، علناً، وتصل حين يكون الزبون قد غادر أو غضب. والسؤال المطروح على انفراد، مباشرة بعد الخدمة، يترك لكم وقتاً للإصلاح قبل الرأي." },
        { q: "هل يمكن إرسال السؤال عبر واتساب أو برسالة نصية؟", a: "نعم، بالقناة التي يستعملها الزبون معكم أصلاً، على شكل رابط نحو صفحة جواب بسيطة. ولا تكتبوا إلا للزبائن الذين قبلوا الاتصال بهم، وراجعوا مستشاركم في القواعد السارية." },
        { q: "كم يلزم من وقت، ومن أين نبدأ؟", a: "خمسة أسابيع في مثال هذا الدليل. ابدؤوا بخدمة واحدة، سؤال واحد، واسم الشخص الذي سيتصل عند العلامات الضعيفة: والباقي يُبنى حول ذلك." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "عدم استلام شكوى لا يقول إن الزبائن راضون." },
      { after: 3, text: "المكالمة، لا الاستبيان، هي التي تغيّر شيئاً." },
    ],
    cta: { eyebrow: "قولوا لنا ماذا تسلّمون، لكم زبوناً، وفي أي أداة تنتهي الخدمة: نختار اللحظة والسؤال معكم، ثم نربط الإرسال والتنبيه", title: "لا شكوى لكن زبائن يغادرون، مآخذ تُكتشف في الآراء على الخط، استبيان لا يملؤه أحد، أو مؤسس في فرنسا لا يرى زبائنه في الجزائر: نبني القياس وحلقة المكالمة", body: "سؤال بعد الخدمة، صفحة جواب دون حساب، تنبيه لكل علامة ضعيفة، متابعة المكالمة، أسباب مرمَّزة، لوحة الاثنين، ومؤشر التوصية كل سداسي. نعمل من الجزائر العاصمة وسطيف، بالفرنسية والعربية والإنجليزية." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.reclamations, kind: '2027', name: 'الشكاوى وخدمة ما بعد البيع: تذكرة واحدة، وآجال' },
      { href: L.crm, kind: '2027', name: 'برنامج تسيير العلاقة مع الزبائن: المحفظة، المتابعات، والعروض' },
      { href: L.tableau, kind: '2027', name: 'لوحة قيادة المسيّر: تعريف واحد لكل رقم' },
      { href: L.espace, kind: '2027', name: 'إنشاء فضاء للزبون: حالة الملف، الوثائق، والفواتير' },
    ] },
  },
};

const KEYWORDS = "comment mesurer la satisfaction client 2027, mesurer la satisfaction client algérie, enquête de satisfaction client, comment évaluer la satisfaction client, comment améliorer la satisfaction client, nps calcul, score de recommandation, questionnaire de satisfaction court, rappeler un client mécontent, satisfaction client par sms whatsapp, how to measure customer satisfaction algeria 2027, net promoter score calculation, كيف يُقاس رضا الزبائن 2027, استبيان رضا الزبائن, مؤشر التوصية";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
