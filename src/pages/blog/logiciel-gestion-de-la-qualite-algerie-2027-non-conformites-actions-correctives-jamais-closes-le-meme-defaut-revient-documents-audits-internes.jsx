import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/logiciel-gestion-de-la-qualite-algerie-2027-non-conformites-actions-correctives-jamais-closes-le-meme-defaut-revient-documents-audits-internes.mjs';

const SLUG = 'logiciel-gestion-de-la-qualite-algerie-2027-non-conformites-actions-correctives-jamais-closes-le-meme-defaut-revient-documents-audits-internes';
const FIGURES = ['couches', 'entonnoir', 'sources', 'recidive', 'vie', 'calendrier'];
const DATE = '2026-11-20';
const I = (x) => '⁦' + x + '⁩';

const L = {
  reception: '/blog/le-meme-defaut-revient-et-on-paie-le-fournisseur-controle-a-la-reception-application-algerie-2027-plan-de-controle-non-conformite-reclamation/',
  sav: '/blog/le-client-a-appele-trois-fois-reclamations-sav-application-algerie-2027-ticket-unique-priorite-delais-escalade-retours-avoirs-espace-client/',
  production: '/blog/logiciel-de-gestion-de-production-gpao-algerie-2027-suivi-d-atelier-au-poste-arrets-machine-par-cause-trs-en-cours-ordres-de-fabrication/',
  agro: '/blog/logiciel-agroalimentaire-algerie-2027-tracabilite-des-lots-de-la-matiere-a-la-palette-rappel-rendement-controles-qualite-dlc-erp-production/',
  intranet: '/blog/comment-creer-un-intranet-d-entreprise-en-algerie-2027-notes-de-service-documents-annuaire-demandes-internes-recherche-accuse-de-lecture/',
  photos: '/blog/photos-qui-font-foi-application-algerie-2027-capture-compression-envoi-reprenable-stockage-objet-empreinte-horodatage-acces-signe/',
  dashboard: '/blog/tableau-de-bord-temps-reel-gerant-algerie-2027-evenements-agregats-fraicheur-une-definition-par-chiffre-alertes-whatsapp/',
  roles: '/blog/roles-droits-journal-d-audit-application-algerie-2027-qui-voit-quoi-qui-modifie-quoi-qui-a-change-ce-prix-acces-par-agence-approbations/',
};

const CONTENT = {
  fr: {
    kind: 'Gestion de la qualité · Algérie · 2027', title: "Logiciel de gestion de la qualité en Algérie (2027) : le même défaut revient, les actions décidées en réunion ne se ferment jamais, la procédure affichée n'est plus la bonne, l'audit se prépare dans l'urgence ; constats, causes, actions correctives, documents, et ce qu'on met en place",
    dek: "« Nous avons un service qualité, des fiches de non-conformité et une réunion chaque mois. Les mêmes défauts reviennent quand même : on décide une action, personne ne vérifie si elle a été faite, encore moins si elle a marché. Les réclamations clients sont dans les mails, la procédure affichée à l'atelier n'est plus la bonne version, et chaque audit se prépare en une semaine de panique. Existe-t-il un logiciel de gestion de la qualité pour cela ? » La qualité ne manque pas de fiches : elle manque d'un endroit où une action reste ouverte tant que le défaut revient.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Logiciel de gestion de la qualité', 'Non-conformités et réclamations', 'Actions correctives', 'Documents qualité', 'Audits internes', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Un logiciel de gestion de la qualité tient quatre choses. **Les constats** : non-conformités, réclamations clients, défauts fournisseurs et écarts d'audit, dans un seul circuit. **Les causes** : chaque constat est rattaché à une famille de cause, et l'analyse est écrite. **Les actions** : un responsable, une échéance, et une clôture seulement après vérification que le défaut n'est pas revenu. **Les documents** : la version en vigueur, et la preuve qu'elle a été lue au poste. Dans l'exemple de cette page, sur 120 constats ouverts en six mois, 37 seulement sont clos avec une efficacité vérifiée.",
      "Cette page s'adresse à celles et ceux qui dirigent une entreprise de production ou de services, ou qui y sont responsables de la qualité, que l'entreprise vise une certification ou non. Les définitions viennent de sources publiques : système de management de la qualité, famille ISO 9000, non-conformité, action corrective et préventive, analyse des causes racines, cinq pourquoi, roue PDCA, audit qualité, coût de la non-qualité, principe de Pareto. L'entreprise, ses constats et son défaut suivi sont un exemple construit. La page ne dit pas comment obtenir une certification et ne remplace pas le texte d'une norme ; elle ne traite ni de réglementation, ni de fiscalité, et ne cite aucun prix de matériel.",
    ],
    sections: [
      { heading: "Ce qu'il y a dans un logiciel de gestion de la qualité", body: [
        "La figure empile cinq couches ; la troisième est celle où tout se joue.",
      ], visual: 'couches', after: [
        "**Le système.** Un système de management de la qualité est un ensemble de processus tournés vers la satisfaction régulière des exigences des clients. La famille ISO 9000 est un ensemble de normes internationales pour ces systèmes, et ISO 9001 porte sur les exigences qu'une organisation doit remplir pour s'y conformer. Le logiciel n'est pas la norme : il est l'endroit où ce que vous avez décidé de faire laisse une trace. **La non-conformité.** C'est un écart par rapport à une spécification, une norme ou une attente. **Les constats.** Ils arrivent par plusieurs portes, détaillées plus bas ; le logiciel leur donne le même circuit.",
        "**Les causes** et **les actions** ont leurs sections. **Les documents.** Une procédure a des versions ; une seule est en vigueur. Le logiciel la diffuse, demande une lecture confirmée, et retire l'ancienne ; le principe est celui de [l'intranet](" + L.intranet + ") et de son accusé de lecture, appliqué au poste de travail. **Le pilotage.** Les indicateurs se lisent sur [un tableau de bord](" + L.dashboard + ") : constats par mois, délais de clôture, défauts qui reviennent. **Les droits.** Qui peut clore une action, qui peut valider un document : voir [les rôles et droits](" + L.roles + ").",
      ] },
      { heading: "Où les constats se perdent", body: [
        "La figure suit six mois de constats, de l'ouverture à la vérification d'efficacité.",
      ], visual: 'entonnoir', after: [
        "**L'entonnoir.** Dans l'exemple, 120 constats sont ouverts. 96 ont une cause analysée, 81 une action décidée, 58 une action réalisée, 37 une efficacité vérifiée. **Les pertes.** 24 constats n'ont jamais été analysés ; 15 l'ont été sans qu'une action soit décidée ; 23 actions décidées n'ont pas été faites ; 21 ont été faites sans que personne vérifie le résultat. **Ce que cela dit.** L'entreprise détecte bien. Elle perd ses constats après : entre la réunion et le terrain, puis entre l'action et sa vérification.",
        "**Le coût.** Les coûts de non-qualité sont ceux qui disparaîtraient si les systèmes, les processus et les produits étaient parfaits : rebuts, retouches, retours, temps passé à trier. Une action non vérifiée laisse ce coût courir en donnant l'impression qu'il est traité. **Ce que fait le logiciel.** Chaque constat a une étape, un responsable et une date ; ce qui dépasse sa date remonte au responsable, puis à sa hiérarchie. La réunion mensuelle ne sert plus à se souvenir : elle sert à décider. **Ce que l'on mesure.** Constats par étape ; âge des actions ouvertes ; part des actions closes avec vérification.",
      ] },
      { heading: "Cinq sources, un seul circuit", body: [
        "La figure donne, pour cinq sources de constats, ce qu'on enregistre et qui traite.",
      ], visual: 'sources', after: [
        "**À l'atelier.** Le constat se saisit au poste ou au téléphone : le produit, l'étape, la quantité, une photo, conservée comme dans [les photos qui font foi](" + L.photos + "). Pour une production suivie au poste, il se rattache à l'ordre de fabrication, voir [la gestion de production](" + L.production + "). **La réclamation client.** Elle a deux vies : la réponse au client, traitée dans [les réclamations et le service après-vente](" + L.sav + "), et l'action interne, qui relève de la qualité. **Le fournisseur.** Le contrôle à l'arrivée et la réclamation fournisseur sont décrits dans [le contrôle à la réception](" + L.reception + ").",
        "**L'audit.** Un audit qualité est l'examen systématique d'un système qualité par un auditeur interne ou externe. Ses écarts entrent dans le même circuit que les autres constats, avec la même exigence de clôture. **Les lots.** Quand un défaut touche un lot, la traçabilité dit jusqu'où il est allé, voir [le logiciel agroalimentaire](" + L.agro + "). **Se rejoindre.** Trois réclamations et cinq constats d'atelier sur le même défaut sont un seul problème : le logiciel les regroupe par famille, et c'est le groupe qu'on analyse.",
      ] },
      { heading: "Corriger n'est pas agir sur la cause", body: [
        "La figure compte le même défaut, mois après mois.",
      ], visual: 'recidive', after: [
        "**Trois mots.** La correction est l'action qui élimine une non-conformité détectée. L'action corrective est celle qui élimine les causes d'une non-conformité. L'action préventive vise à empêcher qu'elle n'apparaisse, en général à la suite d'une analyse de risques. **Dans l'exemple.** Au troisième mois, on trie et on retouche : c'est une correction, et la courbe ne bouge pas, 57 défauts en six mois. Au sixième mois, on traite la cause, un réglage et un contrôle au poste : 8 défauts dans les quatre mois suivants.",
        "**Trouver la cause.** L'analyse des causes racines est une méthode de résolution de problèmes qui sert à identifier les causes profondes des défauts. Les cinq pourquoi en sont une technique : une interrogation répétée pour explorer les relations de cause à effet derrière un problème. Le logiciel ne trouve pas la cause ; il demande qu'elle soit écrite avant qu'une action soit décidée. **Où chercher d'abord.** Le principe de Pareto dit que, pour beaucoup de phénomènes, environ 80 % des conséquences viennent de 20 % des causes : le classement des constats par famille montre les deux ou trois causes à traiter en premier. **La boucle.** La roue PDCA est une méthode itérative de maîtrise et d'amélioration continue : prévoir, faire, vérifier, agir. La courbe est le « vérifier ».",
      ] },
      { heading: "Un constat, en six temps", body: [
        "La figure suit un constat en six temps.",
      ], visual: 'vie', after: [
        "**Le constat.** Décrit en une phrase, avec une photo et une quantité, par la personne qui l'a vu. **La correction.** On isole ce qui est douteux, on trie, on retouche ou on rebute : le client est protégé, la cause est encore là. **L'analyse.** C'est le temps accentué. Elle cherche la cause, pas le coupable : un constat qui se retourne contre la personne qui l'a signalé est le dernier qu'elle signalera.",
        "**L'action.** Un responsable, une échéance, des moyens ; pas « sensibiliser les équipes », mais ce qui change concrètement au poste. **La vérification.** À la date prévue, le logiciel pose la question : le défaut est-il revenu ? Il a la réponse, puisqu'il compte les constats de la même famille. **La clôture.** Efficace, ou rouverte avec une nouvelle analyse. **Le délai.** Vous fixez la durée d'observation par famille de défauts : un mois pour une production quotidienne, davantage pour un défaut rare.",
      ] },
      { heading: "Sept semaines pour un site", body: [
        "Sept semaines dans l'exemple, pour un site.",
      ], visual: 'calendrier', after: [
        "**Le cadrage.** Une semaine : vos familles de défauts, vos sources de constats, vos responsables, vos documents en vigueur. **Reprendre l'existant.** Les fiches papier ou le tableur donnent les familles ; les actions encore ouvertes entrent dans le logiciel, les anciennes restent archivées. **Commencer petit.** Un atelier ou une ligne d'abord : la saisie d'un constat doit prendre moins d'une minute, sinon elle ne se fera pas.",
        "**Avec ou sans certification.** Une entreprise certifiée y trouve ses enregistrements tenus à jour entre deux audits ; une entreprise qui ne l'est pas y trouve la même chose, sans le certificat : des défauts qui ne reviennent plus. **Prêt à l'emploi ou sur mesure.** Des logiciels de qualité existent et conviennent à une organisation standard. Le sur-mesure se justifie quand les constats doivent se saisir au poste dans votre outil de production, se relier aux lots, aux commandes et aux fournisseurs, en arabe et en français. **Les durées** sont celles d'un exemple construit.",
      ], list: [
        "**Ce que vous recevez** : la saisie des constats au poste et au téléphone ; un circuit unique pour non-conformités, réclamations, défauts fournisseurs et écarts d'audit ; l'analyse de cause écrite ; les actions avec responsable, échéance et vérification ; les documents versionnés avec lecture confirmée ; le planning des audits ; les indicateurs.",
        "**Ce que l'entreprise évite** : le défaut qui revient sous un autre numéro, l'action décidée et jamais faite, l'action faite et jamais vérifiée, l'ancienne procédure encore affichée, l'audit préparé en une semaine.",
        "**Ce qui est mesuré** : constats par mois, par source et par famille de cause ; délai d'analyse ; âge des actions ouvertes ; part des actions closes avec efficacité vérifiée ; défauts récurrents ; lecture des documents.",
        "**Ce que fait Symloop** : le cadrage des familles et du circuit, la saisie mobile, les actions et leurs relances, la gestion des documents, les audits, les tableaux de bord, le lien avec votre production et vos réclamations.",
      ], faq: [
        { q: "Qu'est-ce qu'un logiciel de gestion de la qualité ?", a: "Un outil qui enregistre les constats, non-conformités, réclamations, écarts d'audit, suit leurs causes et leurs actions jusqu'à une clôture vérifiée, et tient les documents en vigueur. Il remplace les fiches et le tableur." },
        { q: "Comment gérer la qualité dans une entreprise ?", a: "En donnant à chaque constat un responsable et une échéance, en écrivant la cause avant de décider l'action, et en ne fermant l'action que lorsque le défaut n'est pas revenu." },
        { q: "Comment gérer les non-conformités ?", a: "En les saisissant là où elles sont vues, avec une photo et une quantité, puis en les suivant en six temps : constat, correction, analyse, action, vérification, clôture." },
        { q: "Quelle différence entre correction et action corrective ?", a: "La correction élimine le défaut constaté : on trie, on retouche. L'action corrective élimine sa cause, pour qu'il ne revienne pas. Faire la première sans la seconde, c'est recommencer chaque mois." },
        { q: "Pourquoi les mêmes défauts reviennent-ils ?", a: "Le plus souvent parce que l'action a traité le symptôme, ou qu'elle a été décidée sans être faite, ou faite sans être vérifiée. Le suivi par étape montre laquelle des trois." },
        { q: "Comment suivre les actions correctives ?", a: "Chaque action a un responsable, une échéance et une date de vérification. Ce qui dépasse sa date remonte automatiquement, et l'action n'est close que si les constats de la même famille ont cessé." },
        { q: "Faut-il être certifié ISO 9001 pour utiliser un tel logiciel ?", a: "Non. Le logiciel sert d'abord à faire disparaître des défauts. Une entreprise certifiée y tient en plus ses enregistrements entre deux audits." },
        { q: "Comment gérer les documents qualité ?", a: "Une seule version en vigueur par document, diffusée aux postes concernés, avec une lecture confirmée ; les anciennes versions sont retirées et archivées." },
        { q: "Comment préparer un audit interne ?", a: "En le planifiant, avec une grille par processus, et en versant ses écarts dans le même circuit que les autres constats. Si le suivi est tenu toute l'année, l'audit ne demande plus de préparation à part." },
        { q: "Qui saisit les constats ?", a: "La personne qui voit le défaut, au poste ou au téléphone, en moins d'une minute, avec une photo. Un constat qui doit passer par un bureau pour être écrit ne l'est souvent jamais." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "La réunion mensuelle ne sert plus à se souvenir : elle sert à décider." },
      { after: 3, text: "Corriger, c'est retirer les pièces mauvaises ; agir sur la cause, c'est faire qu'il n'y en ait plus." },
    ],
    cta: { eyebrow: "Dites-nous combien de constats par mois, d'où ils viennent, et comment vous suivez les actions aujourd'hui : nous commençons par une semaine de cadrage", title: "Défauts qui reviennent, actions jamais closes, réclamations dans les mails, procédure périmée à l'atelier, ou audit préparé dans l'urgence", body: "Symloop construit l'outil qualité qui correspond à votre organisation : constats, causes, actions, documents, audits, indicateurs. Décrivez-nous vos familles de défauts, vos sources de constats et votre circuit actuel." },
    related: { label: 'À lire aussi', items: [
      { href: L.reception, kind: '2027', name: 'Le contrôle à la réception : plan de contrôle, non-conformité, réclamation fournisseur' },
      { href: L.sav, kind: '2027', name: 'Réclamations et service après-vente : ticket unique, délais, escalade' },
      { href: L.production, kind: '2027', name: 'Logiciel de gestion de production : suivi au poste, arrêts par cause' },
      { href: L.agro, kind: '2027', name: 'Logiciel agroalimentaire : traçabilité des lots, rappel, contrôles' },
    ] },
  },
  en: {
    kind: 'Quality management · Algeria · 2027', title: "Quality management software in Algeria (2027): the same defect comes back, actions decided in meetings never get closed, the procedure on the wall is no longer the right one, the audit is prepared in a rush; findings, causes, corrective actions, documents, and what we put in place",
    dek: "“We have a quality department, non-conformity forms and a meeting every month. The same defects come back all the same: an action is decided, nobody checks whether it was done, still less whether it worked. Customer complaints are in e-mails, the procedure posted in the workshop is no longer the right version, and every audit is prepared in a week of panic. Is there quality management software for that?” Quality is not short of forms: it is short of a place where an action stays open as long as the defect keeps coming back.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Quality management software', 'Non-conformities and complaints', 'Corrective actions', 'Quality documents', 'Internal audits', 'Algeria 2027'],
    intro: [
      "**Short answer.** Quality management software holds four things. **Findings**: non-conformities, customer complaints, supplier defects and audit findings, in a single circuit. **Causes**: each finding is tied to a family of cause, and the analysis is written down. **Actions**: an owner, a due date, and closure only after checking that the defect has not come back. **Documents**: the version in force, and proof that it was read at the station. In this page's example, of 120 findings opened in six months, only 37 are closed with effectiveness verified.",
      "This page is for those who run a production or service company, or who are responsible for quality in one, whether the company is aiming for certification or not. The definitions come from public sources: quality management system, ISO 9000 family, nonconformity, corrective and preventive action, root-cause analysis, five whys, PDCA, quality audit, cost of poor quality, Pareto principle. The company, its findings and the defect followed are a constructed example. The page does not say how to obtain a certification and does not replace the text of a standard; it covers neither regulation nor tax, and quotes no hardware price.",
    ],
    sections: [
      { heading: "What is inside quality management software", body: [
        "The figure stacks five layers; the third is where everything is decided.",
      ], visual: 'couches', after: [
        "**The system.** A quality management system is a collection of business processes focused on consistently meeting customer requirements. The ISO 9000 family is a set of international standards for such systems, and ISO 9001 deals with the requirements that organisations wishing to meet the standard must fulfil. The software is not the standard: it is the place where what you have decided to do leaves a trace. **The nonconformity.** It is a deviation from a specification, a standard, or an expectation. **Findings.** They come in through several doors, detailed below; the software gives them the same circuit.",
        "**Causes** and **actions** have their own sections. **Documents.** A procedure has versions; only one is in force. The software distributes it, asks for reading to be confirmed, and withdraws the old one; the principle is that of [the intranet](" + L.intranet + ") and its read receipt, applied at the workstation. **Steering.** Indicators are read on [a dashboard](" + L.dashboard + "): findings per month, time to closure, defects that come back. **Rights.** Who can close an action, who can approve a document: see [roles and rights](" + L.roles + ").",
      ] },
      { heading: "Where findings get lost", body: [
        "The figure follows six months of findings, from opening to verification of effectiveness.",
      ], visual: 'entonnoir', after: [
        "**The funnel.** In the example, 120 findings are opened. 96 have a cause analysed, 81 an action decided, 58 an action carried out, 37 effectiveness verified. **The losses.** 24 findings were never analysed; 15 were analysed without an action being decided; 23 actions decided were not carried out; 21 were carried out without anyone checking the result. **What that says.** The company detects well. It loses its findings afterwards: between the meeting and the shop floor, then between the action and its verification.",
        "**The cost.** Costs of poor quality are costs that would disappear if systems, processes, and products were perfect: scrap, rework, returns, time spent sorting. An action that is not verified lets that cost run on while giving the impression that it is being dealt with. **What the software does.** Each finding has a step, an owner and a date; what goes past its date surfaces to the owner, then to their manager. The monthly meeting is no longer for remembering: it is for deciding. **What is measured.** Findings per step; age of open actions; share of actions closed with verification.",
      ] },
      { heading: "Five sources, a single circuit", body: [
        "The figure gives, for five sources of findings, what is recorded and who handles it.",
      ], visual: 'sources', after: [
        "**In the workshop.** The finding is entered at the station or on the phone: the product, the step, the quantity, a photo, kept as in [photos that stand as proof](" + L.photos + "). For production tracked at the station, it is tied to the manufacturing order, see [production management](" + L.production + "). **The customer complaint.** It has two lives: the reply to the customer, covered in [complaints and after-sales service](" + L.sav + "), and the internal action, which belongs to quality. **The supplier.** Incoming inspection and the claim to the supplier are described in [inspection at receipt](" + L.reception + ").",
        "**The audit.** A quality audit is the systematic examination of a quality system by an internal or external quality auditor. Its findings go into the same circuit as the others, with the same requirement of closure. **Batches.** When a defect affects a batch, traceability says how far it went, see [food manufacturing software](" + L.agro + "). **Meeting up.** Three complaints and five workshop findings on the same defect are a single problem: the software groups them by family, and it is the group that is analysed.",
      ] },
      { heading: "Correcting is not acting on the cause", body: [
        "The figure counts the same defect, month after month.",
      ], visual: 'recidive', after: [
        "**Three words.** Correction is the action to eliminate a detected nonconformity. Corrective action is action taken to eliminate the causes of non-conformities. Preventive action is action taken to prevent their occurrence, generally as a result of a risk analysis. **In the example.** In the third month, parts are sorted and reworked: that is a correction, and the curve does not move, 57 defects in six months. In the sixth month, the cause is treated, a setting and a check at the station: 8 defects in the following four months.",
        "**Finding the cause.** Root-cause analysis is a method of problem solving used for identifying the root causes of faults or problems. The five whys is one of its techniques: an iterative questioning used to explore the cause-and-effect relationships underlying a problem. The software does not find the cause; it requires it to be written down before an action is decided. **Where to look first.** The Pareto principle states that, for many outcomes, roughly 80% of consequences come from 20% of causes: ranking findings by family shows the two or three causes to treat first. **The loop.** PDCA is an iterative management method used for control and continual improvement: plan, do, check, act. The curve is the “check”.",
      ] },
      { heading: "A finding, in six steps", body: [
        "The figure follows a finding in six steps.",
      ], visual: 'vie', after: [
        "**The finding.** Described in one sentence, with a photo and a quantity, by the person who saw it. **The correction.** What is doubtful is isolated, sorted, reworked or scrapped: the customer is protected, the cause is still there. **The analysis.** That is the accented step. It looks for the cause, not the culprit: a finding that is turned against the person who reported it is the last one they will report.",
        "**The action.** An owner, a due date, means; not “raise the teams' awareness”, but what actually changes at the station. **Verification.** On the date planned, the software asks the question: has the defect come back? It has the answer, since it counts the findings of the same family. **Closing.** Effective, or reopened with a new analysis. **The period.** You set the observation period per family of defects: a month for daily production, longer for a rare defect.",
      ] },
      { heading: "Seven weeks for one site", body: [
        "Seven weeks in the example, for one site.",
      ], visual: 'calendrier', after: [
        "**Scoping.** One week: your families of defects, your sources of findings, your owners, your documents in force. **Taking over what exists.** Paper forms or the spreadsheet give the families; actions still open go into the software, the old ones stay archived. **Starting small.** One workshop or one line first: entering a finding has to take less than a minute, otherwise it will not be done.",
        "**With or without certification.** A certified company finds its records kept up to date between two audits; one that is not certified finds the same thing, without the certificate: defects that no longer come back. **Ready-made or custom.** Quality software exists and suits a standard organisation. Custom work is justified when findings have to be entered at the station in your production tool, and linked to batches, orders and suppliers, in Arabic and in French. **The durations** are those of a constructed example.",
      ], list: [
        "**What you receive**: entry of findings at the station and on the phone; a single circuit for non-conformities, complaints, supplier defects and audit findings; the written cause analysis; actions with owner, due date and verification; versioned documents with reading confirmed; the audit schedule; the indicators.",
        "**What the company avoids**: the defect that comes back under another number, the action decided and never done, the action done and never verified, the old procedure still on the wall, the audit prepared in a week.",
        "**What is measured**: findings per month, per source and per family of cause; time to analysis; age of open actions; share of actions closed with effectiveness verified; recurring defects; reading of documents.",
        "**What Symloop does**: scoping the families and the circuit, mobile entry, actions and their reminders, document management, audits, dashboards, the link with your production and your complaints.",
      ], faq: [
        { q: "What is quality management software?", a: "A tool that records findings, non-conformities, complaints, audit findings, follows their causes and their actions through to a verified closure, and keeps the documents in force. It replaces the forms and the spreadsheet." },
        { q: "How do you manage quality in a company?", a: "By giving each finding an owner and a due date, writing down the cause before deciding the action, and closing the action only when the defect has not come back." },
        { q: "How do you manage non-conformities?", a: "By entering them where they are seen, with a photo and a quantity, then following them in six steps: finding, correction, analysis, action, verification, closing." },
        { q: "What is the difference between correction and corrective action?", a: "Correction eliminates the defect observed: parts are sorted and reworked. Corrective action eliminates its cause, so that it does not come back. Doing the first without the second means starting again every month." },
        { q: "Why do the same defects keep coming back?", a: "Most often because the action treated the symptom, or was decided without being done, or done without being verified. Tracking by step shows which of the three." },
        { q: "How do you follow corrective actions?", a: "Each action has an owner, a due date and a verification date. What goes past its date surfaces automatically, and the action is only closed if findings of the same family have stopped." },
        { q: "Do you need ISO 9001 certification to use such software?", a: "No. The software is first of all there to make defects disappear. A certified company also keeps its records in it between two audits." },
        { q: "How do you manage quality documents?", a: "One version in force per document, distributed to the stations concerned, with reading confirmed; old versions are withdrawn and archived." },
        { q: "How do you prepare an internal audit?", a: "By scheduling it, with a checklist per process, and feeding its findings into the same circuit as the others. If tracking is kept up all year, the audit needs no separate preparation." },
        { q: "Who enters the findings?", a: "The person who sees the defect, at the station or on the phone, in under a minute, with a photo. A finding that has to go through an office to be written down is often never written." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "The monthly meeting is no longer for remembering: it is for deciding." },
      { after: 3, text: "Correcting means removing the bad parts; acting on the cause means there are no more of them." },
    ],
    cta: { eyebrow: "Tell us how many findings a month, where they come from, and how you follow actions today: we start with a week of scoping", title: "Defects that come back, actions never closed, complaints in e-mails, an out-of-date procedure in the workshop, or an audit prepared in a rush", body: "Symloop builds the quality tool that fits your organisation: findings, causes, actions, documents, audits, indicators. Describe your families of defects to us, your sources of findings and your current circuit." },
    related: { label: 'Also read', items: [
      { href: L.reception, kind: '2027', name: 'Inspection at receipt: inspection plan, non-conformity, supplier claim' },
      { href: L.sav, kind: '2027', name: 'Complaints and after-sales service: single ticket, deadlines, escalation' },
      { href: L.production, kind: '2027', name: 'Production management software: tracking at the station, stops by cause' },
      { href: L.agro, kind: '2027', name: 'Food manufacturing software: batch traceability, recall, checks' },
    ] },
  },
  ar: {
    kind: 'تسيير الجودة · الجزائر · 2027', title: "برنامج تسيير الجودة في الجزائر (2027): العيب نفسه يعود، الإجراءات المقرَّرة في الاجتماع لا تُغلق أبداً، الطريقة المعلَّقة لم تعد الصحيحة، والتدقيق يُحضَّر على عجل؛ المعاينات، الأسباب، الإجراءات التصحيحية، الوثائق، وما نضعه",
    dek: "«عندنا مصلحة جودة، بطاقات عدم مطابقة، واجتماع كل شهر. والعيوب نفسها تعود مع ذلك: يُقرَّر إجراء، ولا أحد يتحقق هل أُنجز، وأقل من ذلك هل نجح. شكاوى الزبائن في البريد الإلكتروني، الطريقة المعلَّقة في الورشة لم تعد النسخة الصحيحة، وكل تدقيق يُحضَّر في أسبوع من الذعر. هل يوجد برنامج تسيير جودة لهذا؟» الجودة لا تنقصها البطاقات: ينقصها مكان يبقى فيه الإجراء مفتوحاً ما دام العيب يعود.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['برنامج تسيير الجودة', 'عدم المطابقة والشكاوى', 'الإجراءات التصحيحية', 'وثائق الجودة', 'التدقيق الداخلي', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** برنامج تسيير الجودة يمسك أربعة أشياء. **المعاينات**: عدم المطابقة، شكاوى الزبائن، عيوب المورّدين، وملاحظات التدقيق، في مسار واحد. **الأسباب**: كل معاينة تُربط بعائلة سبب، والتحليل يُكتب. **الإجراءات**: مسؤول، أجل، وإغلاق فقط بعد التحقق من أن العيب لم يعد. و**الوثائق**: النسخة السارية، ودليل أنها قُرئت في المنصب. في مثال هذه الصفحة، من 120 معاينة فُتحت في ستة أشهر، 37 فقط أُغلقت بفعالية متحقَّق منها.",
      "هذه الصفحة موجّهة إلى من يسيّر مؤسسة إنتاج أو خدمات، أو من هو مسؤول عن الجودة فيها، سواء كانت المؤسسة تسعى إلى شهادة أم لا. التعريفات من مصادر عمومية: نظام إدارة الجودة، عائلة " + I('ISO 9000') + "، عدم المطابقة، الإجراء التصحيحي والوقائي، تحليل الأسباب الجذرية، اللماذات الخمس، عجلة " + I('PDCA') + "، تدقيق الجودة، كلفة اللاجودة، ومبدأ باريتو. والمؤسسة ومعايناتها وعيبها المتابَع مثال مركَّب. والصفحة لا تقول كيف تُنال شهادة ولا تعوّض نص معيار؛ ولا تتناول التنظيم ولا الجباية، ولا تذكر أي سعر عتاد.",
    ],
    sections: [
      { heading: "ما يوجد في برنامج تسيير الجودة", body: [
        "الشكل يرتّب خمس طبقات؛ والثالثة هي التي يُحسم فيها كل شيء.",
      ], visual: 'couches', after: [
        "**النظام.** نظام إدارة الجودة مجموعة من العمليات موجّهة نحو تلبية متطلبات الزبائن بانتظام. وعائلة " + I('ISO 9000') + " مجموعة من المعايير الدولية لهذه الأنظمة، و" + I('ISO 9001') + " يتناول المتطلبات التي يجب أن تستوفيها المنظمة التي تريد مطابقته. والبرنامج ليس المعيار: هو المكان الذي يترك فيه ما قرّرتم فعله أثراً. **عدم المطابقة.** هو انحراف عن مواصفة، معيار، أو انتظار. **المعاينات.** تأتي من عدة أبواب، مفصَّلة أسفله؛ والبرنامج يعطيها المسار نفسه.",
        "ولكل من **الأسباب** و**الإجراءات** قسمه. **الوثائق.** للطريقة نسخ؛ وواحدة فقط سارية. البرنامج يوزّعها، يطلب قراءة مؤكَّدة، ويسحب القديمة؛ والمبدأ هو مبدأ [الشبكة الداخلية](" + L.intranet + ") وإشعار القراءة فيها، مطبَّقاً في منصب العمل. **القيادة.** المؤشرات تُقرأ على [لوحة قيادة](" + L.dashboard + "): المعاينات في الشهر، آجال الإغلاق، والعيوب التي تعود. **الحقوق.** من يستطيع إغلاق إجراء، ومن يصادق على وثيقة: انظر [الأدوار والحقوق](" + L.roles + ").",
      ] },
      { heading: "أين تضيع المعاينات", body: [
        "الشكل يتابع ستة أشهر من المعاينات، من الفتح إلى التحقق من الفعالية.",
      ], visual: 'entonnoir', after: [
        "**القمع.** في المثال، تُفتح 120 معاينة. 96 حُلّل سببها، 81 تقرّر لها إجراء، 58 أُنجز إجراؤها، و37 تم التحقق من فعاليتها. **الخسائر.** 24 معاينة لم تُحلَّل أبداً؛ 15 حُلّلت دون أن يُقرَّر إجراء؛ 23 إجراء مقرَّراً لم يُنجَز؛ و21 أُنجزت دون أن يتحقق أحد من النتيجة. **ما يقوله ذلك.** المؤسسة تكتشف جيداً. وتضيّع معايناتها بعد ذلك: بين الاجتماع والميدان، ثم بين الإجراء والتحقق منه.",
        "**الكلفة.** كلفة اللاجودة هي التكاليف التي كانت ستزول لو كانت الأنظمة والعمليات والمنتجات كاملة: المرفوضات، الإصلاحات، المرتجعات، والوقت المقضي في الفرز. وإجراء لم يُتحقَّق منه يترك هذه الكلفة تجري مع إعطاء الانطباع بأنها معالَجة. **ما يفعله البرنامج.** لكل معاينة مرحلة، مسؤول، وتاريخ؛ وما يتجاوز تاريخه يصعد إلى المسؤول، ثم إلى مسؤوله. والاجتماع الشهري لم يعد للتذكّر: صار للقرار. **ما يُقاس.** المعاينات لكل مرحلة؛ عمر الإجراءات المفتوحة؛ ونسبة الإجراءات المغلقة بتحقق.",
      ] },
      { heading: "خمسة مصادر، ومسار واحد", body: [
        "الشكل يعطي، لخمسة مصادر للمعاينات، ما يُسجَّل ومن يعالج.",
      ], visual: 'sources', after: [
        "**في الورشة.** المعاينة تُدخَل في المنصب أو على الهاتف: المنتوج، المرحلة، الكمية، وصورة، تُحفظ كما في [الصور التي تُعتمد](" + L.photos + "). ولإنتاج متابَع في المنصب، تُربط بأمر التصنيع، انظر [تسيير الإنتاج](" + L.production + "). **شكوى الزبون.** لها حياتان: الردّ على الزبون، المعالَج في [الشكاوى وخدمة ما بعد البيع](" + L.sav + ")، والإجراء الداخلي، وهو من شأن الجودة. **المورّد.** المراقبة عند الوصول والشكوى إلى المورّد موصوفتان في [المراقبة عند الاستلام](" + L.reception + ").",
        "**التدقيق.** تدقيق الجودة هو الفحص المنهجي لنظام جودة من مدقّق داخلي أو خارجي. وملاحظاته تدخل المسار نفسه كباقي المعاينات، بشرط الإغلاق نفسه. **الدفعات.** حين يمسّ عيب دفعة، يقول التتبّع إلى أين وصلت، انظر [برنامج الصناعة الغذائية](" + L.agro + "). **الالتقاء.** ثلاث شكاوى وخمس معاينات في الورشة عن العيب نفسه مشكل واحد: البرنامج يجمعها حسب العائلة، والمجموعة هي التي تُحلَّل.",
      ] },
      { heading: "التصحيح ليس عملاً على السبب", body: [
        "الشكل يعدّ العيب نفسه، شهراً بعد شهر.",
      ], visual: 'recidive', after: [
        "**ثلاث كلمات.** التصحيح هو العمل الذي يزيل عدم مطابقة مكتشَفاً. والإجراء التصحيحي هو الذي يزيل أسباب عدم المطابقة. والإجراء الوقائي يرمي إلى منع ظهوره، عموماً بعد تحليل للمخاطر. **في المثال.** في الشهر الثالث، تُفرز القطع وتُصلَح: هذا تصحيح، والمنحنى لا يتحرك، 57 عيباً في ستة أشهر. وفي الشهر السادس، يُعالَج السبب، ضبط ومراقبة في المنصب: 8 عيوب في الأشهر الأربعة التالية.",
        "**إيجاد السبب.** تحليل الأسباب الجذرية طريقة لحل المشاكل تُستعمل لتحديد الأسباب العميقة للعيوب. واللماذات الخمس تقنية منها: استفهام متكرر لاستكشاف علاقات السبب والنتيجة خلف مشكل. والبرنامج لا يجد السبب؛ بل يطلب أن يُكتب قبل أن يُقرَّر إجراء. **أين يُبحث أولاً.** مبدأ باريتو يقول إن نحو 80 بالمئة من النتائج، في ظواهر كثيرة، تأتي من 20 بالمئة من الأسباب: ترتيب المعاينات حسب العائلة يُظهر السببين أو الثلاثة التي تُعالَج أولاً. **الحلقة.** عجلة " + I('PDCA') + " طريقة تكرارية للتحكم والتحسين المستمر: خطّط، نفّذ، تحقق، تصرّف. والمنحنى هو «تحقق».",
      ] },
      { heading: "معاينة، في ست مراحل", body: [
        "الشكل يتابع معاينة في ست مراحل.",
      ], visual: 'vie', after: [
        "**المعاينة.** توصف في جملة، بصورة وكمية، من الشخص الذي رآها. **التصحيح.** يُعزل ما هو مشكوك فيه، يُفرز، يُصلَح أو يُرفض: الزبون محمي، والسبب ما زال هناك. **التحليل.** هو المرحلة المبرزة. يبحث عن السبب، لا عن المذنب: معاينة تنقلب على من بلّغ عنها هي آخر ما سيبلّغ عنه.",
        "**الإجراء.** مسؤول، أجل، ووسائل؛ لا «تحسيس الفرق»، بل ما يتغيّر فعلاً في المنصب. **التحقق.** في التاريخ المحدَّد، يطرح البرنامج السؤال: هل عاد العيب؟ وعنده الجواب، لأنه يعدّ معاينات العائلة نفسها. **الإغلاق.** فعّال، أو يُعاد فتحه بتحليل جديد. **المدة.** تحدّدون مدة الملاحظة لكل عائلة من العيوب: شهر لإنتاج يومي، وأكثر لعيب نادر.",
      ] },
      { heading: "سبعة أسابيع لموقع واحد", body: [
        "سبعة أسابيع في المثال، لموقع واحد.",
      ], visual: 'calendrier', after: [
        "**التأطير.** أسبوع: عائلات العيوب عندكم، مصادر المعاينات، المسؤولون، والوثائق السارية. **استرجاع الموجود.** البطاقات الورقية أو الجدول تعطي العائلات؛ والإجراءات التي ما زالت مفتوحة تدخل البرنامج، والقديمة تبقى مؤرشفة. **البدء صغيراً.** ورشة أو خط أولاً: إدخال معاينة يجب أن يأخذ أقل من دقيقة، وإلا لن يتم.",
        "**بشهادة أو دونها.** مؤسسة حاصلة على شهادة تجد فيه تسجيلاتها محيَّنة بين تدقيقين؛ ومؤسسة غير حاصلة تجد الشيء نفسه، دون الشهادة: عيوب لا تعود. **جاهز أو على المقاس.** توجد برامج جودة وتناسب تنظيماً عادياً. والعمل على المقاس يُبرَّر حين يجب أن تُدخَل المعاينات في المنصب داخل أداة إنتاجكم، وأن تُربط بالدفعات، الطلبيات، والمورّدين، بالعربية والفرنسية. **المدد** هي مدد مثال مركَّب.",
      ], list: [
        "**ما تتلقونه**: إدخال المعاينات في المنصب وعلى الهاتف؛ مسار واحد لعدم المطابقة، الشكاوى، عيوب المورّدين، وملاحظات التدقيق؛ تحليل السبب مكتوباً؛ الإجراءات بمسؤول، أجل، وتحقق؛ الوثائق بنسخها مع قراءة مؤكَّدة؛ برنامج التدقيقات؛ والمؤشرات.",
        "**ما تتفاداه المؤسسة**: العيب الذي يعود برقم آخر، الإجراء المقرَّر الذي لم يُنجَز، الإجراء المنجَز الذي لم يُتحقَّق منه، الطريقة القديمة التي ما زالت معلَّقة، والتدقيق المحضَّر في أسبوع.",
        "**ما يُقاس**: المعاينات لكل شهر، لكل مصدر، ولكل عائلة سبب؛ مدة التحليل؛ عمر الإجراءات المفتوحة؛ نسبة الإجراءات المغلقة بفعالية متحقَّق منها؛ العيوب المتكررة؛ وقراءة الوثائق.",
        "**ما تفعله Symloop**: تأطير العائلات والمسار، الإدخال على الهاتف، الإجراءات وتذكيراتها، تسيير الوثائق، التدقيقات، لوحات القيادة، والربط بإنتاجكم وشكاواكم.",
      ], faq: [
        { q: "ما هو برنامج تسيير الجودة؟", a: "أداة تسجّل المعاينات، عدم المطابقة، الشكاوى، وملاحظات التدقيق، تتابع أسبابها وإجراءاتها حتى إغلاق متحقَّق منه، وتمسك الوثائق السارية. وتعوّض البطاقات والجدول." },
        { q: "كيف تُسيَّر الجودة في مؤسسة؟", a: "بإعطاء كل معاينة مسؤولاً وأجلاً، بكتابة السبب قبل تقرير الإجراء، وبعدم إغلاق الإجراء إلا حين لا يعود العيب." },
        { q: "كيف تُسيَّر حالات عدم المطابقة؟", a: "بإدخالها حيث تُرى، بصورة وكمية، ثم متابعتها في ست مراحل: المعاينة، التصحيح، التحليل، الإجراء، التحقق، والإغلاق." },
        { q: "ما الفرق بين التصحيح والإجراء التصحيحي؟", a: "التصحيح يزيل العيب الملاحَظ: فرز وإصلاح. والإجراء التصحيحي يزيل سببه، حتى لا يعود. وفعل الأول دون الثاني إعادة للبداية كل شهر." },
        { q: "لماذا تعود العيوب نفسها؟", a: "في الغالب لأن الإجراء عالج العَرَض، أو قُرِّر ولم يُنجَز، أو أُنجز ولم يُتحقَّق منه. والمتابعة مرحلة بمرحلة تُظهر أي الثلاثة." },
        { q: "كيف تُتابَع الإجراءات التصحيحية؟", a: "لكل إجراء مسؤول، أجل، وتاريخ تحقق. وما يتجاوز تاريخه يصعد آلياً، والإجراء لا يُغلق إلا إذا توقفت معاينات العائلة نفسها." },
        { q: "هل يلزم الحصول على شهادة ISO 9001 لاستعمال برنامج كهذا؟", a: "لا. البرنامج يخدم أولاً زوال العيوب. ومؤسسة حاصلة على الشهادة تمسك فيه زيادة تسجيلاتها بين تدقيقين." },
        { q: "كيف تُسيَّر وثائق الجودة؟", a: "نسخة سارية واحدة لكل وثيقة، توزَّع على المناصب المعنية، بقراءة مؤكَّدة؛ والنسخ القديمة تُسحب وتؤرشَف." },
        { q: "كيف يُحضَّر تدقيق داخلي؟", a: "ببرمجته، بشبكة لكل عملية، وبإدخال ملاحظاته في المسار نفسه كباقي المعاينات. وإذا كانت المتابعة ممسوكة طوال السنة، لم يعد التدقيق يحتاج إلى تحضير خاص." },
        { q: "من يُدخل المعاينات؟", a: "الشخص الذي يرى العيب، في المنصب أو على الهاتف، في أقل من دقيقة، بصورة. ومعاينة يجب أن تمرّ بمكتب لتُكتب لا تُكتب غالباً أبداً." },
      ] },
    ],
    pullQuotes: [
      { after: 1, text: "الاجتماع الشهري لم يعد للتذكّر: صار للقرار." },
      { after: 3, text: "التصحيح سحب القطع السيئة؛ والعمل على السبب ألّا تبقى منها قطع." },
    ],
    cta: { eyebrow: "قولوا لنا كم معاينة في الشهر، من أين تأتي، وكيف تتابعون الإجراءات اليوم: نبدأ بأسبوع تأطير", title: "عيوب تعود، إجراءات لا تُغلق، شكاوى في البريد الإلكتروني، طريقة قديمة في الورشة، أو تدقيق يُحضَّر على عجل", body: "Symloop تبني أداة الجودة التي تناسب تنظيمكم: المعاينات، الأسباب، الإجراءات، الوثائق، التدقيقات، والمؤشرات. صِفوا لنا عائلات العيوب عندكم، مصادر المعاينات، ومساركم الحالي." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.reception, kind: '2027', name: 'المراقبة عند الاستلام: مخطط المراقبة، عدم المطابقة، والشكوى إلى المورّد' },
      { href: L.sav, kind: '2027', name: 'الشكاوى وخدمة ما بعد البيع: تذكرة واحدة، آجال، وتصعيد' },
      { href: L.production, kind: '2027', name: 'برنامج تسيير الإنتاج: المتابعة في المنصب، والتوقفات حسب السبب' },
      { href: L.agro, kind: '2027', name: 'برنامج الصناعة الغذائية: تتبّع الدفعات، السحب، والمراقبات' },
    ] },
  },
};

const KEYWORDS = "logiciel gestion de la qualité, logiciel de gestion de la qualité algérie 2027, logiciel management de la qualité, logiciel qualité, logiciel gestion des non-conformités, logiciel qse, logiciel iso 9001, logiciel audit interne, logiciel gestion documentaire qualité, comment gérer la qualité dans une entreprise, comment gérer les non-conformités, suivi des actions correctives, quality management software algeria, non-conformity tracking software, corrective action tracking, document control software, internal audit software, برنامج تسيير الجودة, برنامج إدارة الجودة, عدم المطابقة, الإجراءات التصحيحية, التدقيق الداخلي, Symloop";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
