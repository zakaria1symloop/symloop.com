import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/logiciel-architecte-bureau-d-etudes-algerie-2027-honoraires-par-phase-temps-passe-indices-de-plans-registre-de-diffusion-reserves-de-chantier.mjs';

const SLUG = 'logiciel-architecte-bureau-d-etudes-algerie-2027-honoraires-par-phase-temps-passe-indices-de-plans-registre-de-diffusion-reserves-de-chantier';
const FIGURES = ['couches', 'phases', 'diffusion', 'visite', 'reserves', 'calendrier'];
const DATE = '2026-11-20';
const I = (x) => '⁦' + x + '⁩';

const L = {
  projets: '/blog/comment-gerer-plusieurs-projets-en-meme-temps-en-entreprise-algerie-2027-logiciel-de-gestion-de-projet-plan-de-charge-temps-passe-reste-a-faire/',
  btp: '/blog/logiciel-entreprise-batiment-btp-algerie-2027-devis-metre-suivi-de-chantier-situations-de-travaux-achats-pointage-marge-par-chantier/',
  promoteur: '/blog/promoteur-immobilier-vendre-sur-plan-diaspora-2027-espace-acquereur-suivi-chantier/',
  photos: '/blog/photos-qui-font-foi-application-algerie-2027-capture-compression-envoi-reprenable-stockage-objet-empreinte-horodatage-acces-signe/',
  espaceclient: '/blog/comment-creer-un-espace-client-en-algerie-2027-suivi-de-dossier-documents-factures-demandes-connexion-par-code-chacun-ne-voit-que-le-sien/',
  fichiers: '/blog/partage-de-fichiers-entreprise-algerie-2027-serveur-de-fichiers-nas-ou-cloud-droits-par-dossier-versions-acces-a-distance/',
  horsligne: '/blog/application-hors-ligne-synchronisation-algerie-2027-base-locale-file-d-attente-idempotence-conflits/',
  credit: '/blog/le-client-doit-400-000-dinars-personne-ne-sait-depuis-quand-credit-client-application-algerie-2027-lettrage-cheques-relances-plafond/',
};

const CONTENT = {
  fr: {
    kind: 'Architecture · Bureau d’études · Algérie · 2027', title: "Logiciel architecte et bureau d'études en Algérie (2027) : un ouvrage exécuté sur un plan périmé, des heures qui dépassent les honoraires, des réserves perdues dans les photos du téléphone ; phases, temps passé, indices, diffusion, chantier, et ce qu'on met en place",
    dek: "« Je dirige un cabinet d'architecture. La semaine dernière, l'entreprise a coulé un plancher sur un plan que nous avions modifié deux fois depuis : personne ne sait à qui la bonne version a été envoyée. Les réserves du chantier sont dans les photos de mon téléphone, les comptes rendus partent avec trois jours de retard, et je découvre à la fin d'une affaire que nous y avons passé le double des heures prévues. Existe-t-il un logiciel de gestion pour architecte ? » Un cabinet vend des heures et produit des plans : il lui faut savoir, à tout moment, où en sont les unes et qui a reçu les autres.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ["Logiciel d'architecte et de bureau d'études", 'Honoraires et heures par phase', 'Indices de plans et diffusion', 'Réserves de chantier', 'Comptes rendus de chantier', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Un logiciel de cabinet d'architecture ou de bureau d'études tient quatre choses qu'un tableur et une messagerie ne tiennent pas. **Les phases** : pour chaque affaire, un montant d'honoraires et un budget d'heures par phase. **Les temps** : les heures saisies chaque semaine, comparées à ce budget pendant que la phase est en cours. **Les plans** : chaque indice, et un registre de qui a reçu quoi. **Le chantier** : des réserves saisies sur place, par lot, suivies jusqu'à leur levée. Dans l'exemple de cette page, sur vingt envois de plans à suivre, six destinataires n'ont pas le dernier indice.",
      "Cette page s'adresse à celles et ceux qui dirigent un cabinet d'architecture, un bureau d'études ou une équipe de maîtrise d'œuvre, de trois à cinquante personnes, en Algérie ou depuis la France. Les définitions viennent de sources publiques : architecte, dessin d'architecture, système de gestion de documents, feuille de temps, taux d'utilisation, dérive du périmètre, ordre de modification, liste de réserves, demande d'information. Le cabinet, ses plans, ses heures et son chantier sont un exemple construit. La page ne traite ni des règles de rémunération de la maîtrise d'œuvre, ni des responsabilités et garanties légales, ni de fiscalité, et ne cite aucun prix de matériel.",
    ],
    sections: [
      { heading: "Ce qu'il y a dans un logiciel de cabinet", body: [
        "La figure empile cinq couches ; la troisième est celle qui expose le plus le cabinet.",
      ], visual: 'couches', after: [
        "**Le métier.** Un architecte est une personne qui conçoit des bâtiments, en établit les plans et en supervise la construction. Le logiciel suit ces trois temps : l'étude, les plans, le chantier. **Les affaires.** Chaque contrat est découpé en phases, avec pour chacune un montant et un budget d'heures. **Les temps.** Une feuille de temps est une méthode pour enregistrer le temps passé par une personne sur chaque travail ; ici, par affaire et par phase, une fois par semaine. Le plan de charge de l'équipe, lui, est traité dans [la gestion de plusieurs projets](" + L.projets + ").",
        "**Les documents.** C'est la couche accentuée. Un système de gestion de documents sert à stocker, partager, suivre et gérer des fichiers ; il conserve l'historique des versions créées et modifiées par chacun. Un serveur de fichiers bien rangé, décrit dans [le partage de fichiers](" + L.fichiers + "), en fait une partie ; il ne dit pas qui a reçu quelle version. **Le chantier** et **les honoraires** ont leur section. **Le maître d'ouvrage.** Il peut suivre son dossier, ses plans et ses notes d'honoraires dans [un espace client](" + L.espaceclient + ") ; un promoteur a en plus ses acquéreurs, voir [la vente sur plan](" + L.promoteur + "). **L'entreprise en face.** Son propre suivi, devis, situations, marge par chantier, relève du [logiciel de bâtiment](" + L.btp + ").",
      ] },
      { heading: "Une affaire, phase par phase", body: [
        "La figure donne, pour cinq phases prises en exemple, ce qui est remis et ce qui se mesure.",
      ], visual: 'phases', after: [
        "**Des phases, pas un forfait.** Le découpage et les noms viennent de votre contrat ; ceux de la figure sont un exemple. Ce qui compte : chaque phase a un montant d'honoraires et un budget d'heures. **Le taux d'utilisation.** C'est un chiffre important pour les sociétés qui facturent leur temps : les heures facturables divisées par les heures enregistrées sur la période. Une équipe qui passe la moitié de sa semaine sur des affaires sans phase ouverte travaille, mais ne facture pas. **Exemple chiffré**, fictif : une phase vendue 900 000 dinars avec un budget de 300 heures. À 240 heures, le dossier est à moitié fait : la phase finira vers 480 heures, soit 160 % du budget. Le voir à 240 heures laisse le choix ; le voir à 480 ne laisse que le constat.",
        "**La dérive.** La dérive du périmètre est la croissance continue ou non maîtrisée du périmètre d'un projet, en général constatée après son démarrage. Dans un cabinet, elle a un visage : la modification demandée « tant que vous y êtes ». **L'avenant.** Un ordre de modification est un travail ajouté au périmètre d'origine d'un contrat, ou retiré de celui-ci. Le logiciel ne décide pas s'il faut le facturer ; il compte les heures passées sur chaque demande, pour que la discussion ait lieu avec un chiffre. **Les notes d'honoraires.** Une phase marquée terminée propose sa note ; le reste à facturer et les encaissements se lisent par affaire, et les retards se relancent comme dans [le crédit client](" + L.credit + ").",
      ] },
      { heading: "Qui a quel indice de quel plan", body: [
        "La figure montre un registre de diffusion : six plans, quatre destinataires.",
      ], visual: 'diffusion', after: [
        "**À quoi sert un plan.** Les dessins d'architecture servent à communiquer des idées, à aider l'entreprise à construire selon l'intention du projet, et à garder la trace de ce qui a été conçu. Les trois usages supposent que chacun regarde la même version. **L'indice.** Chaque modification d'un plan lui donne un nouvel indice, A, B, C ; l'ancien n'est pas supprimé, il est remplacé. **Le registre.** Dans l'exemple, six plans et quatre destinataires font vingt envois à suivre. Six sont en retard d'au moins un indice. Deux sont graves : l'entreprise de gros œuvre a le plan du rez-de-chaussée à l'indice B quand le cabinet en est à D, et le coffrage à l'indice C quand il en est à E.",
        "**Ce que fait le logiciel.** À chaque nouvel indice, il liste les destinataires de l'ancien et prépare l'envoi : un bordereau, les fichiers, un lien dont l'ouverture est enregistrée. Le plan remplacé porte une mention visible, « remplacé par l'indice D ». **Un QR code sur le plan.** Imprimé dans le cartouche, là où figurent déjà l'auteur du dessin et la personne qui l'a approuvé, il permet à quiconque, sur le chantier, de vérifier au téléphone si la feuille qu'il tient est la dernière. **Les questions.** Une demande d'information est utilisée dans la construction quand les documents du projet manquent d'une information ; chaque question de l'entreprise est rattachée au plan concerné, avec sa réponse et sa date.",
      ] },
      { heading: "Une visite de chantier", body: [
        "La figure suit une visite de chantier en six temps.",
      ], visual: 'visite', after: [
        "**La liste de réserves.** C'est un document établi à des étapes clés ou vers la fin d'un chantier, où l'on note ce qui reste à reprendre ; elle peut aussi être tenue en continu, en vérifiant l'état des travaux tout au long du projet. C'est cette seconde façon que le logiciel rend praticable. **Sur place.** C'est le temps accentué : devant l'ouvrage, une photo, le lieu, le lot, une échéance. La photo est horodatée et conservée comme dans [les photos qui font foi](" + L.photos + "). **Sans réseau.** Un sous-sol ou un chantier isolé n'a pas de connexion : la saisie continue et se synchronise ensuite, voir [l'application hors ligne](" + L.horsligne + ").",
        "**Le compte rendu.** Il se génère en sortant : présents, points abordés, réserves nouvelles, réserves levées, décisions. Il ne se retape pas. **L'envoi.** Chaque entreprise reçoit ce qui la concerne : sa liste, ses échéances, ses photos. **La levée.** L'entreprise déclare la réserve levée, photo à l'appui ; elle n'est close qu'après vérification à la visite suivante. **Ce que cela change.** Le compte rendu part le jour même au lieu de trois jours plus tard, et la visite suivante commence par la liste de ce qui devait être fait.",
      ] },
      { heading: "Les réserves, par lot et par ancienneté", body: [
        "La figure donne l'état des réserves après dix visites.",
      ], visual: 'reserves', after: [
        "**Trois chiffres.** 86 réserves relevées, 61 levées et vérifiées, 25 ouvertes. Le premier dit que le chantier est suivi ; le troisième dit ce qui reste. **L'ancienneté.** Sur les 25, 9 sont ouvertes depuis plus de trente jours : ce sont elles qui comptent. Une réserve récente est normale ; une réserve ancienne est un désaccord, un oubli, ou un lot qui en attend un autre. **Par lot.** Gros œuvre 7 dont 3 anciennes, électricité 6 dont 2, plomberie 5 dont 2, menuiserie 4, peinture 3.",
        "**Ce que l'on en fait.** La réunion de chantier s'ouvre sur les réserves anciennes, lot par lot ; chacun repart avec sa liste et une date. **Ce que l'on mesure.** Réserves ouvertes par lot ; délai moyen de levée ; réserves rouvertes après une levée refusée ; réserves sans échéance. **Plusieurs chantiers.** Les mêmes chiffres, côte à côte : on voit lequel dérive avant que le maître d'ouvrage ne le dise. **Qui tient la liste.** Elle est le plus souvent établie par le maître d'ouvrage, l'architecte ou le concepteur, ou l'entreprise générale ; le logiciel permet que tous regardent la même.",
      ] },
      { heading: "Neuf semaines pour un cabinet", body: [
        "Neuf semaines dans l'exemple, pour un cabinet.",
      ], visual: 'calendrier', after: [
        "**Le cadrage.** Une semaine : vos phases, la codification de vos plans, vos destinataires habituels, les affaires en cours. **La codification.** Un plan s'appelle toujours de la même façon : affaire, discipline, numéro, indice. C'est une décision du cabinet, pas du logiciel ; elle se prend une fois. **La reprise.** Les affaires en cours entrent avec leurs phases, leurs honoraires déjà facturés et leurs derniers indices ; l'historique ancien reste où il est.",
        "**Avec vos outils de dessin.** Le logiciel ne remplace ni le logiciel de dessin ni la maquette numérique : il range ce qu'ils produisent, leur donne un indice et suit leur diffusion. **Prêt à l'emploi ou sur mesure.** Des logiciels de gestion pour cabinets existent et couvrent bien les temps et les honoraires. Le sur-mesure se justifie quand le registre de diffusion, les réserves saisies sur place et l'espace du maître d'ouvrage doivent tenir dans le même outil, en arabe et en français. **Les durées** sont celles d'un exemple construit.",
      ], list: [
        "**Ce que vous recevez** : les affaires avec leurs phases, honoraires et budgets d'heures ; la saisie hebdomadaire des temps ; les plans avec leurs indices et le registre de diffusion ; les réserves saisies au téléphone, par lot ; les comptes rendus générés ; les notes d'honoraires et le reste à facturer.",
        "**Ce que le cabinet évite** : l'ouvrage exécuté sur un plan périmé, la phase qui a coûté le double sans que personne le voie, la réserve perdue dans une galerie de photos, le compte rendu envoyé trois jours après la visite, la note d'honoraires oubliée.",
        "**Ce qui est mesuré** : heures passées contre budget, par phase ; taux d'utilisation de l'équipe ; envois de plans en retard d'un indice ; réserves ouvertes par lot et par ancienneté ; délai de levée ; reste à facturer par affaire.",
        "**Ce que fait Symloop** : le cadrage des phases et de la codification, les affaires et les temps, les documents et la diffusion, l'application de chantier, les comptes rendus, les honoraires, l'espace du maître d'ouvrage, pour un cabinet ou plusieurs agences.",
      ], faq: [
        { q: "Quel logiciel de gestion pour un architecte ?", a: "Un logiciel qui suit les affaires par phase, avec honoraires et heures, les plans avec leurs indices et leur diffusion, et le chantier avec ses réserves et ses comptes rendus. Un outil de dessin ne fait rien de cela." },
        { q: "Quel logiciel pour un bureau d'études ?", a: "Le même socle : affaires, phases, temps passé, documents indicés, diffusion. Un bureau d'études ajoute souvent plus de disciplines par affaire, et davantage de plans à tenir à jour entre elles." },
        { q: "Comment suivre les heures passées sur un projet d'architecture ?", a: "Par une saisie hebdomadaire, par affaire et par phase, comparée au budget d'heures de la phase pendant qu'elle est en cours, et non à la fin de l'affaire." },
        { q: "Comment gérer les versions des plans ?", a: "Chaque modification crée un nouvel indice ; l'ancien est marqué remplacé, jamais effacé. Le logiciel garde l'historique et montre toujours quel indice est en cours." },
        { q: "Comment savoir qui a reçu quelle version d'un plan ?", a: "Par un registre de diffusion : chaque envoi enregistre le plan, l'indice, le destinataire, la date et l'ouverture. À chaque nouvel indice, la liste de ceux qui ont l'ancien s'affiche." },
        { q: "Comment suivre les réserves d'un chantier ?", a: "En les saisissant sur place avec une photo, un lieu, un lot et une échéance, puis en les suivant une par une jusqu'à la levée vérifiée, avec leur ancienneté." },
        { q: "Comment faire un compte rendu de chantier rapidement ?", a: "En le générant à partir de ce qui a été saisi pendant la visite : présents, réserves nouvelles et levées, décisions. Il part le jour même, et chaque entreprise reçoit sa partie." },
        { q: "Le logiciel remplace-t-il le logiciel de dessin ?", a: "Non. Il range les fichiers que le logiciel de dessin produit, leur attribue un indice et suit leur diffusion. Les deux travaillent côte à côte." },
        { q: "Fonctionne-t-il sur le chantier sans connexion ?", a: "La saisie des réserves et des photos doit continuer sans réseau et se synchroniser au retour de la connexion. C'est un choix de construction à poser dès le départ." },
        { q: "Le maître d'ouvrage peut-il suivre son projet ?", a: "Oui, dans un espace qui lui est réservé : l'avancement par phase, les plans à l'indice en cours, les comptes rendus et les notes d'honoraires, sans voir le reste du cabinet." },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: "Le plan à jour existe ; la question est de savoir qui l'a reçu." },
      { after: 4, text: "Une réserve récente est normale ; une réserve ancienne est un désaccord, un oubli, ou un lot qui en attend un autre." },
    ],
    cta: { eyebrow: "Dites-nous combien de personnes, combien d'affaires en cours, et comment vos plans sont nommés aujourd'hui : nous commençons par une semaine de cadrage", title: "Plan périmé sur le chantier, heures qui dépassent les honoraires, réserves dans le téléphone, comptes rendus en retard, ou cabinet que vous voulez piloter depuis la France", body: "Symloop construit l'outil qui tient ensemble vos affaires, vos plans et vos chantiers : phases et temps, indices et diffusion, réserves et comptes rendus, honoraires. Décrivez-nous vos phases, vos destinataires habituels et ce que vous suivez déjà." },
    related: { label: 'À lire aussi', items: [
      { href: L.projets, kind: '2027', name: 'Gérer plusieurs projets : plan de charge, temps passé, reste à faire' },
      { href: L.btp, kind: '2027', name: 'Logiciel d’entreprise de bâtiment : devis, situations, marge par chantier' },
      { href: L.espaceclient, kind: '2027', name: 'Créer un espace client : suivi de dossier, documents, factures' },
      { href: L.fichiers, kind: '2027', name: 'Partage de fichiers en entreprise : droits par dossier, versions' },
    ] },
  },
  en: {
    kind: 'Architecture · Design office · Algeria · 2027', title: "Software for architects and design offices in Algeria (2027): work built from a superseded drawing, hours that exceed the fees, site snags lost among phone photos; phases, time spent, revisions, distribution, the site, and what we put in place",
    dek: "“I run an architecture practice. Last week the contractor poured a floor slab from a drawing we had changed twice since: nobody knows who the right version was sent to. The site snags are in my phone's photos, the site reports go out three days late, and I find out at the end of a job that we spent twice the hours planned. Is there management software for architects?” A practice sells hours and produces drawings: it has to know, at any moment, where the first stand and who received the second.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Software for architects and design offices', 'Fees and hours per phase', 'Drawing revisions and distribution', 'Site snags', 'Site reports', 'Algeria 2027'],
    intro: [
      "**Short answer.** Software for an architecture practice or a design office holds four things that a spreadsheet and an inbox do not. **Phases**: for each job, a fee amount and a budget of hours per phase. **Time**: the hours entered each week, compared with that budget while the phase is under way. **Drawings**: every revision, and a register of who received what. **The site**: snags entered on the spot, per trade, followed until they are cleared. In this page's example, out of twenty drawing sends to track, six recipients do not have the latest revision.",
      "This page is for those who run an architecture practice, a design office or a project supervision team, from three to fifty people, in Algeria or from France. The definitions come from public sources: architect, architectural drawing, document management system, timesheet, utilization rate, scope creep, change order, punch list, request for information. The practice, its drawings, its hours and its site are a constructed example. The page covers neither the rules on fees for design and supervision work, nor legal liabilities and guarantees, nor tax, and quotes no hardware price.",
    ],
    sections: [
      { heading: "What is inside software for a practice", body: [
        "The figure stacks five layers; the third is the one that exposes the practice most.",
      ], visual: 'couches', after: [
        "**The trade.** An architect is a person who plans, designs, and oversees the construction of buildings. The software follows those three: the design, the drawings, the site. **Jobs.** Each contract is broken into phases, each with an amount and a budget of hours. **Time.** A timesheet is a method for recording the amount of a worker's time spent on each job; here, per job and per phase, once a week. The team's workload plan is covered in [managing several projects](" + L.projets + ").",
        "**Documents.** That is the accented layer. A document management system is used to store, share, track and manage files; it keeps the history of the versions created and modified by each user. A tidy file server, described in [file sharing](" + L.fichiers + "), does part of that; it does not say who received which version. **The site** and **fees** each have their section. **The client.** They can follow their file, their drawings and their fee invoices in [a client area](" + L.espaceclient + "); a developer also has buyers, see [selling off-plan](" + L.promoteur + "). **The contractor opposite.** Its own tracking, quotes, progress claims, margin per site, belongs to [construction company software](" + L.btp + ").",
      ] },
      { heading: "A job, phase by phase", body: [
        "The figure gives, for five phases taken as an example, what is handed over and what is measured.",
      ], visual: 'phases', after: [
        "**Phases, not a lump sum.** The breakdown and the names come from your contract; those in the figure are an example. What matters: each phase has a fee amount and a budget of hours. **The utilization rate.** It is an important number for firms that charge their time to clients: billable hours divided by the hours recorded in the period. A team that spends half its week on jobs with no open phase is working, but not billing. **A worked example**, fictitious: a phase sold for 900,000 dinars with a budget of 300 hours. At 240 hours, the file is half done: the phase will end around 480 hours, that is 160% of the budget. Seeing it at 240 hours leaves a choice; seeing it at 480 leaves only the finding.",
        "**Creep.** Scope creep is continuous or uncontrolled growth in a project's scope, generally experienced after the project begins. In a practice it has a face: the change requested “while you are at it”. **The variation.** A change order is work that is added to or deleted from the original scope of work of a contract. The software does not decide whether it should be invoiced; it counts the hours spent on each request, so that the discussion takes place with a figure. **Fee invoices.** A phase marked complete proposes its invoice; the amount still to invoice and payments received are read per job, and late ones are chased as in [customer credit](" + L.credit + ").",
      ] },
      { heading: "Who has which revision of which drawing", body: [
        "The figure shows a distribution register: six drawings, four recipients.",
      ], visual: 'diffusion', after: [
        "**What a drawing is for.** Architectural drawings are used to communicate ideas, to assist the building contractor in construction based on design intent, and to record the design. All three uses assume that everyone is looking at the same version. **The revision.** Each change to a drawing gives it a new revision, A, B, C; the old one is not deleted, it is superseded. **The register.** In the example, six drawings and four recipients make twenty sends to track. Six are at least one revision behind. Two are serious: the structural contractor has the ground floor plan at revision B when the practice is at D, and the formwork drawing at revision C when it is at E.",
        "**What the software does.** At each new revision, it lists the recipients of the old one and prepares the send: a transmittal, the files, a link whose opening is recorded. The superseded drawing carries a visible mention, “superseded by revision D”. **A QR code on the drawing.** Printed in the title block, where the person who drew the drawing and the person who approved it already appear, it lets anyone on site check on a phone whether the sheet in their hands is the latest. **Questions.** A request for information is used in the construction industry when a project's construction documentation lacks information; each question from the contractor is tied to the drawing concerned, with its answer and its date.",
      ] },
      { heading: "A site visit", body: [
        "The figure follows a site visit in six steps.",
      ], visual: 'visite', after: [
        "**The snag list.** A punch list or snag list is a document prepared during key milestones or near the end of a construction project, on which what still has to be put right is noted; it can also be kept rolling, by constantly verifying the work status throughout the project. It is that second way that the software makes practicable. **On site.** That is the accented step: in front of the work, a photo, the place, the trade, a due date. The photo is timestamped and kept as in [photos that stand as proof](" + L.photos + "). **Without a network.** A basement or a remote site has no connection: entry carries on and synchronises afterwards, see [the offline application](" + L.horsligne + ").",
        "**The site report.** It is generated on leaving: those present, points discussed, new snags, cleared snags, decisions. It is not retyped. **Sending.** Each contractor receives what concerns it: its list, its due dates, its photos. **Clearance.** The contractor declares the snag cleared, with a photo; it is only closed after a check at the next visit. **What that changes.** The report goes out the same day instead of three days later, and the next visit starts from the list of what was due to be done.",
      ] },
      { heading: "Snags, by trade and by age", body: [
        "The figure gives the state of the snags after ten visits.",
      ], visual: 'reserves', after: [
        "**Three figures.** 86 snags raised, 61 cleared and checked, 25 open. The first says the site is being followed; the third says what is left. **Age.** Of the 25, 9 have been open for more than thirty days: they are the ones that count. A recent snag is normal; an old snag is a disagreement, an oversight, or one trade waiting on another. **By trade.** Structure 7 of which 3 old, electrical 6 of which 2, plumbing 5 of which 2, joinery 4, painting 3.",
        "**What is done with it.** The site meeting opens on the old snags, trade by trade; everyone leaves with their list and a date. **What is measured.** Open snags per trade; average time to clearance; snags reopened after a refused clearance; snags with no due date. **Several sites.** The same figures, side by side: you see which one is drifting before the client says so. **Who keeps the list.** It is usually made by the owner, the architect or designer, or the general contractor; the software lets all of them look at the same one.",
      ] },
      { heading: "Nine weeks for a practice", body: [
        "Nine weeks in the example, for one practice.",
      ], visual: 'calendrier', after: [
        "**Scoping.** One week: your phases, your drawing numbering, your usual recipients, the jobs in progress. **Numbering.** A drawing is always named the same way: job, discipline, number, revision. That is the practice's decision, not the software's; it is taken once. **Taking over.** Jobs in progress come in with their phases, the fees already invoiced and their latest revisions; older history stays where it is.",
        "**With your drawing tools.** The software replaces neither the drawing software nor the building model: it files what they produce, gives it a revision and follows its distribution. **Ready-made or custom.** Management software for practices exists and covers time and fees well. Custom work is justified when the distribution register, snags entered on site and the client's area have to live in the same tool, in Arabic and in French. **The durations** are those of a constructed example.",
      ], list: [
        "**What you receive**: jobs with their phases, fees and budgets of hours; weekly time entry; drawings with their revisions and the distribution register; snags entered on the phone, per trade; generated site reports; fee invoices and the amount still to invoice.",
        "**What the practice avoids**: work built from a superseded drawing, the phase that cost double without anyone seeing it, the snag lost in a photo gallery, the site report sent three days after the visit, the forgotten fee invoice.",
        "**What is measured**: hours spent against budget, per phase; the team's utilization rate; drawing sends that are one revision behind; open snags per trade and by age; time to clearance; amount still to invoice per job.",
        "**What Symloop does**: scoping the phases and the numbering, jobs and time, documents and distribution, the site application, site reports, fees, the client's area, for one practice or several offices.",
      ], faq: [
        { q: "What management software for an architect?", a: "Software that follows jobs per phase, with fees and hours, drawings with their revisions and distribution, and the site with its snags and reports. A drawing tool does none of that." },
        { q: "What software for a design office?", a: "The same base: jobs, phases, time spent, revisioned documents, distribution. A design office often adds more disciplines per job, and more drawings to keep consistent between them." },
        { q: "How do you track hours spent on an architecture project?", a: "With weekly entry, per job and per phase, compared with the phase's budget of hours while it is under way, not at the end of the job." },
        { q: "How do you manage drawing versions?", a: "Each change creates a new revision; the old one is marked superseded, never deleted. The software keeps the history and always shows which revision is current." },
        { q: "How do you know who received which version of a drawing?", a: "With a distribution register: each send records the drawing, the revision, the recipient, the date and the opening. At each new revision, the list of those who hold the old one is shown." },
        { q: "How do you track site snags?", a: "By entering them on the spot with a photo, a place, a trade and a due date, then following them one by one until clearance is checked, with their age." },
        { q: "How do you produce a site report quickly?", a: "By generating it from what was entered during the visit: those present, new and cleared snags, decisions. It goes out the same day, and each contractor receives its part." },
        { q: "Does the software replace the drawing software?", a: "No. It files what the drawing software produces, assigns it a revision and follows its distribution. The two work side by side." },
        { q: "Does it work on site without a connection?", a: "Entry of snags and photos has to carry on without a network and synchronise when the connection returns. It is a construction choice to make from the start." },
        { q: "Can the client follow their project?", a: "Yes, in an area reserved for them: progress per phase, drawings at the current revision, site reports and fee invoices, without seeing the rest of the practice." },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: "The up-to-date drawing exists; the question is who received it." },
      { after: 4, text: "A recent snag is normal; an old snag is a disagreement, an oversight, or one trade waiting on another." },
    ],
    cta: { eyebrow: "Tell us how many people, how many jobs in progress, and how your drawings are named today: we start with a week of scoping", title: "A superseded drawing on site, hours that exceed the fees, snags in the phone, site reports running late, or a practice you want to run from France", body: "Symloop builds the tool that holds your jobs, your drawings and your sites together: phases and time, revisions and distribution, snags and site reports, fees. Describe your phases to us, your usual recipients and what you already track." },
    related: { label: 'Also read', items: [
      { href: L.projets, kind: '2027', name: 'Managing several projects: workload plan, time spent, work remaining' },
      { href: L.btp, kind: '2027', name: 'Construction company software: quotes, progress claims, margin per site' },
      { href: L.espaceclient, kind: '2027', name: 'Building a client area: file tracking, documents, invoices' },
      { href: L.fichiers, kind: '2027', name: 'File sharing in a company: rights per folder, versions' },
    ] },
  },
  ar: {
    kind: 'الهندسة المعمارية · مكتب الدراسات · الجزائر · 2027', title: "برنامج المهندس المعماري ومكتب الدراسات في الجزائر (2027): عمل أُنجز على مخطط قديم، ساعات تتجاوز الأتعاب، وتحفّظات ضائعة بين صور الهاتف؛ المراحل، الوقت المقضي، المؤشّرات، التوزيع، الورشة، وما نضعه",
    dek: "«أسيّر مكتباً معمارياً. في الأسبوع الماضي، صبّت المقاولة سقفاً على مخطط عدّلناه مرتين بعد ذلك: لا أحد يعرف لمن أُرسلت النسخة الصحيحة. تحفّظات الورشة في صور هاتفي، المحاضر تخرج بثلاثة أيام تأخراً، وأكتشف في نهاية مشروع أننا قضينا فيه ضعف الساعات المتوقعة. هل يوجد برنامج تسيير للمهندس المعماري؟» المكتب يبيع ساعات وينتج مخططات: وعليه أن يعرف، في كل لحظة، أين وصلت الأولى ومن استلم الثانية.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['برنامج المهندس المعماري ومكتب الدراسات', 'الأتعاب والساعات لكل مرحلة', 'مؤشّرات المخططات والتوزيع', 'تحفّظات الورشة', 'محاضر الورشة', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** برنامج المكتب المعماري أو مكتب الدراسات يمسك أربعة أشياء لا يمسكها جدول وبريد إلكتروني. **المراحل**: لكل مشروع، مبلغ أتعاب وميزانية ساعات لكل مرحلة. **الوقت**: الساعات المُدخَلة كل أسبوع، مقارنة بهذه الميزانية والمرحلة جارية. **المخططات**: كل مؤشّر، وسجل بمن استلم ماذا. و**الورشة**: تحفّظات تُدخَل في المكان، لكل حصة، وتُتابَع حتى رفعها. في مثال هذه الصفحة، من عشرين إرسالاً للمخططات يجب تتبّعها، ستة مستلمين ليس عندهم آخر مؤشّر.",
      "هذه الصفحة موجّهة إلى من يسيّر مكتباً معمارياً، مكتب دراسات، أو فريق إشراف على الإنجاز، من ثلاثة إلى خمسين شخصاً، في الجزائر أو من فرنسا. التعريفات من مصادر عمومية: المهندس المعماري، الرسم المعماري، نظام تسيير الوثائق، ورقة الوقت، نسبة الاستعمال، انزلاق النطاق، أمر التعديل، قائمة التحفّظات، وطلب المعلومات. والمكتب ومخططاته وساعاته وورشته مثال مركَّب. والصفحة لا تتناول قواعد أتعاب الإشراف على الإنجاز، ولا المسؤوليات والضمانات القانونية، ولا الجباية، ولا تذكر أي سعر عتاد.",
    ],
    sections: [
      { heading: "ما يوجد في برنامج المكتب", body: [
        "الشكل يرتّب خمس طبقات؛ والثالثة هي التي تعرّض المكتب أكثر.",
      ], visual: 'couches', after: [
        "**المهنة.** المهندس المعماري شخص يصمّم المباني، يضع مخططاتها، ويشرف على بنائها. والبرنامج يتابع هذه الثلاثة: الدراسة، المخططات، والورشة. **المشاريع.** كل عقد يُقسَّم إلى مراحل، ولكل واحدة مبلغ وميزانية ساعات. **الوقت.** ورقة الوقت طريقة لتسجيل الوقت الذي يقضيه شخص في كل عمل؛ وهنا، لكل مشروع ولكل مرحلة، مرة في الأسبوع. أما مخطط حمل الفريق فمعالَج في [تسيير عدة مشاريع](" + L.projets + ").",
        "**الوثائق.** هي الطبقة المبرزة. نظام تسيير الوثائق يُستعمل لتخزين الملفات، تقاسمها، تتبّعها، وتسييرها؛ ويحفظ تاريخ النسخ التي أنشأها وعدّلها كل مستعمل. وخادم ملفات مرتَّب، موصوف في [تقاسم الملفات](" + L.fichiers + ")، يقوم بجزء من ذلك؛ لكنه لا يقول من استلم أي نسخة. ولكل من **الورشة** و**الأتعاب** قسمه. **صاحب المشروع.** يستطيع متابعة ملفه، مخططاته، وكشوف أتعابه في [فضاء الزبون](" + L.espaceclient + ")؛ وللمرقّي العقاري مشتروه أيضاً، انظر [البيع على المخطط](" + L.promoteur + "). **المقاولة المقابلة.** متابعتها الخاصة، الكشوف، الوضعيات، والهامش لكل ورشة، تخص [برنامج مقاولة البناء](" + L.btp + ").",
      ] },
      { heading: "مشروع، مرحلة بمرحلة", body: [
        "الشكل يعطي، لخمس مراحل مأخوذة مثالاً، ما يُسلَّم وما يُقاس.",
      ], visual: 'phases', after: [
        "**مراحل، لا مبلغ جزافي.** التقسيم والأسماء يأتيان من عقدكم؛ وما في الشكل مثال. والمهم: لكل مرحلة مبلغ أتعاب وميزانية ساعات. **نسبة الاستعمال.** هي رقم مهم للشركات التي تفوتر وقتها: الساعات القابلة للفوترة مقسومة على الساعات المسجَّلة في الفترة. وفريق يقضي نصف أسبوعه في مشاريع لا مرحلة مفتوحة فيها يعمل، لكنه لا يفوتر. **مثال بالأرقام**، خيالي: مرحلة بيعت بـ" + I('900 000') + " دينار بميزانية 300 ساعة. عند 240 ساعة، الملف منجز نصفه: ستنتهي المرحلة نحو 480 ساعة، أي 160 بالمئة من الميزانية. رؤية ذلك عند 240 ساعة تترك الاختيار؛ ورؤيته عند 480 لا تترك إلا المعاينة.",
        "**الانزلاق.** انزلاق النطاق هو النمو المستمر أو غير المتحكَّم فيه لنطاق مشروع، ويُلاحَظ عموماً بعد انطلاقه. وله في المكتب وجه: التعديل المطلوب «ما دمتم فيه». **الملحق.** أمر التعديل عمل يُضاف إلى النطاق الأصلي لعقد، أو يُحذف منه. والبرنامج لا يقرّر هل يُفوتَر؛ بل يعدّ الساعات المقضية في كل طلب، ليجري النقاش برقم. **كشوف الأتعاب.** مرحلة عُلّمت منتهية تقترح كشفها؛ وما بقي للفوترة والتحصيلات تُقرأ لكل مشروع، والتأخرات تُذكَّر كما في [دَين الزبون](" + L.credit + ").",
      ] },
      { heading: "من عنده أي مؤشّر من أي مخطط", body: [
        "الشكل يعرض سجل توزيع: ستة مخططات، وأربعة مستلمين.",
      ], visual: 'diffusion', after: [
        "**لماذا المخطط.** الرسوم المعمارية تُستعمل لإيصال الأفكار، لمساعدة المقاولة على البناء حسب قصد المشروع، ولحفظ أثر ما صُمّم. والاستعمالات الثلاثة تفترض أن الجميع ينظر إلى النسخة نفسها. **المؤشّر.** كل تعديل لمخطط يعطيه مؤشّراً جديداً، " + I('A') + "، " + I('B') + "، " + I('C') + "؛ والقديم لا يُحذف، بل يُعوَّض. **السجل.** في المثال، ستة مخططات وأربعة مستلمين تصنع عشرين إرسالاً يجب تتبّعها. ستة متأخرة بمؤشّر واحد على الأقل. واثنان خطيران: مقاولة الأشغال الكبرى عندها مخطط الطابق الأرضي بالمؤشّر " + I('B') + " والمكتب في " + I('D') + "، ومخطط القوالب بالمؤشّر " + I('C') + " والمكتب في " + I('E') + ".",
        "**ما يفعله البرنامج.** عند كل مؤشّر جديد، يسرد مستلمي القديم ويحضّر الإرسال: وصل إرسال، الملفات، ورابط يُسجَّل فتحه. والمخطط المعوَّض يحمل إشارة ظاهرة، «عُوّض بالمؤشّر " + I('D') + "». **رمز " + I('QR') + " على المخطط.** مطبوعاً في خانة العنوان، حيث يوجد من رسم المخطط ومن صادق عليه، يسمح لأي شخص في الورشة أن يتحقق بالهاتف هل الورقة التي بيده هي الأخيرة. **الأسئلة.** طلب المعلومات يُستعمل في البناء حين تنقص وثائق المشروع معلومة؛ وكل سؤال من المقاولة يُربط بالمخطط المعني، بجوابه وتاريخه.",
      ] },
      { heading: "زيارة ورشة", body: [
        "الشكل يتابع زيارة ورشة في ست مراحل.",
      ], visual: 'visite', after: [
        "**قائمة التحفّظات.** هي وثيقة تُعدّ في محطات أساسية أو قرب نهاية ورشة، يُسجَّل فيها ما بقي للإصلاح؛ ويمكن أيضاً مسكها باستمرار، بالتحقق من حالة الأشغال طوال المشروع. وهذه الطريقة الثانية هي التي يجعلها البرنامج ممكنة. **في المكان.** هي المرحلة المبرزة: أمام العمل، صورة، الموضع، الحصة، وأجل. والصورة مؤرَّخة ومحفوظة كما في [الصور التي تُعتمد](" + L.photos + "). **دون شبكة.** قبو أو ورشة معزولة لا اتصال فيهما: الإدخال يستمر ويتزامن بعد ذلك، انظر [التطبيق دون اتصال](" + L.horsligne + ").",
        "**المحضر.** يُولَّد عند الخروج: الحاضرون، النقاط المتناولة، التحفّظات الجديدة، التحفّظات المرفوعة، والقرارات. ولا يُعاد كتابته. **الإرسال.** كل مقاولة تستلم ما يخصّها: قائمتها، آجالها، وصورها. **الرفع.** المقاولة تصرّح برفع التحفّظ، بصورة؛ ولا يُغلق إلا بعد التحقق في الزيارة التالية. **ما يغيّره ذلك.** المحضر يخرج في اليوم نفسه بدل ثلاثة أيام بعده، والزيارة التالية تبدأ بقائمة ما كان يجب إنجازه.",
      ] },
      { heading: "التحفّظات، حسب الحصة وحسب الأقدمية", body: [
        "الشكل يعطي حالة التحفّظات بعد عشر زيارات.",
      ], visual: 'reserves', after: [
        "**ثلاثة أرقام.** 86 تحفّظاً مسجَّلاً، 61 مرفوعاً ومتحقَّقاً منه، و25 مفتوحاً. الأول يقول إن الورشة متابَعة؛ والثالث يقول ما بقي. **الأقدمية.** من الـ25، 9 مفتوحة منذ أكثر من ثلاثين يوماً: وهي التي تهمّ. تحفّظ حديث أمر عادي؛ وتحفّظ قديم خلاف، نسيان، أو حصة تنتظر أخرى. **حسب الحصة.** الأشغال الكبرى 7 منها 3 قديمة، الكهرباء 6 منها 2، الترصيص 5 منها 2، النجارة 4، والدهن 3.",
        "**ما يُفعل بذلك.** اجتماع الورشة يبدأ بالتحفّظات القديمة، حصة بحصة؛ وكل واحد يغادر بقائمته وتاريخ. **ما يُقاس.** التحفّظات المفتوحة لكل حصة؛ متوسط مدة الرفع؛ التحفّظات التي أُعيد فتحها بعد رفع مرفوض؛ والتحفّظات دون أجل. **عدة ورشات.** الأرقام نفسها، جنباً إلى جنب: تُرى أيها تنزلق قبل أن يقول ذلك صاحب المشروع. **من يمسك القائمة.** يعدّها في الغالب صاحب المشروع، المهندس المعماري أو المصمّم، أو المقاولة العامة؛ والبرنامج يسمح بأن ينظر الجميع إلى القائمة نفسها.",
      ] },
      { heading: "تسعة أسابيع لمكتب", body: [
        "تسعة أسابيع في المثال، لمكتب واحد.",
      ], visual: 'calendrier', after: [
        "**التأطير.** أسبوع: مراحلكم، ترميز مخططاتكم، مستلموكم المعتادون، والمشاريع الجارية. **الترميز.** المخطط يُسمّى دائماً بالطريقة نفسها: المشروع، الاختصاص، الرقم، والمؤشّر. وهذا قرار المكتب، لا البرنامج؛ ويُتَّخذ مرة واحدة. **الاسترجاع.** المشاريع الجارية تدخل بمراحلها، أتعابها المفوتَرة، وآخر مؤشّراتها؛ والتاريخ القديم يبقى حيث هو.",
        "**مع أدوات الرسم عندكم.** البرنامج لا يعوّض برنامج الرسم ولا النموذج الرقمي: يرتّب ما ينتجانه، يعطيه مؤشّراً، ويتابع توزيعه. **جاهز أو على المقاس.** توجد برامج تسيير للمكاتب وتغطي جيداً الوقت والأتعاب. والعمل على المقاس يُبرَّر حين يجب أن يجتمع سجل التوزيع، التحفّظات المُدخَلة في المكان، وفضاء صاحب المشروع في الأداة نفسها، بالعربية والفرنسية. **المدد** هي مدد مثال مركَّب.",
      ], list: [
        "**ما تتلقونه**: المشاريع بمراحلها، أتعابها، وميزانيات ساعاتها؛ الإدخال الأسبوعي للوقت؛ المخططات بمؤشّراتها وسجل التوزيع؛ التحفّظات المُدخَلة على الهاتف، لكل حصة؛ المحاضر المولَّدة؛ وكشوف الأتعاب وما بقي للفوترة.",
        "**ما يتفاداه المكتب**: العمل المنجَز على مخطط قديم، المرحلة التي كلّفت الضعف دون أن يراها أحد، التحفّظ الضائع في معرض صور، المحضر المرسَل ثلاثة أيام بعد الزيارة، وكشف الأتعاب المنسي.",
        "**ما يُقاس**: الساعات المقضية مقابل الميزانية، لكل مرحلة؛ نسبة استعمال الفريق؛ إرسالات المخططات المتأخرة بمؤشّر؛ التحفّظات المفتوحة لكل حصة وحسب الأقدمية؛ مدة الرفع؛ وما بقي للفوترة لكل مشروع.",
        "**ما تفعله Symloop**: تأطير المراحل والترميز، المشاريع والوقت، الوثائق والتوزيع، تطبيق الورشة، المحاضر، الأتعاب، وفضاء صاحب المشروع، لمكتب واحد أو لعدة وكالات.",
      ], faq: [
        { q: "أي برنامج تسيير للمهندس المعماري؟", a: "برنامج يتابع المشاريع مرحلة بمرحلة، بالأتعاب والساعات، المخططات بمؤشّراتها وتوزيعها، والورشة بتحفّظاتها ومحاضرها. وأداة الرسم لا تفعل شيئاً من ذلك." },
        { q: "أي برنامج لمكتب دراسات؟", a: "القاعدة نفسها: المشاريع، المراحل، الوقت المقضي، الوثائق بمؤشّراتها، والتوزيع. ومكتب الدراسات يضيف غالباً اختصاصات أكثر في المشروع، ومخططات أكثر يجب أن تبقى متوافقة." },
        { q: "كيف تُتابَع الساعات المقضية في مشروع معماري؟", a: "بإدخال أسبوعي، لكل مشروع ولكل مرحلة، مقارَن بميزانية ساعات المرحلة وهي جارية، لا في نهاية المشروع." },
        { q: "كيف تُسيَّر نسخ المخططات؟", a: "كل تعديل ينشئ مؤشّراً جديداً؛ والقديم يُعلَّم عليه معوَّضاً، ولا يُمحى أبداً. والبرنامج يحفظ التاريخ ويعرض دائماً المؤشّر الحالي." },
        { q: "كيف يُعرف من استلم أي نسخة من مخطط؟", a: "بسجل توزيع: كل إرسال يسجّل المخطط، المؤشّر، المستلم، التاريخ، والفتح. وعند كل مؤشّر جديد، تُعرض قائمة من عندهم القديم." },
        { q: "كيف تُتابَع تحفّظات ورشة؟", a: "بإدخالها في المكان بصورة، موضع، حصة، وأجل، ثم متابعتها واحداً واحداً حتى الرفع المتحقَّق منه، مع أقدميتها." },
        { q: "كيف يُعدّ محضر ورشة بسرعة؟", a: "بتوليده مما أُدخل أثناء الزيارة: الحاضرون، التحفّظات الجديدة والمرفوعة، والقرارات. يخرج في اليوم نفسه، وكل مقاولة تستلم جزءها." },
        { q: "هل يعوّض البرنامج برنامج الرسم؟", a: "لا. يرتّب ما ينتجه برنامج الرسم، يعطيه مؤشّراً، ويتابع توزيعه. والاثنان يعملان جنباً إلى جنب." },
        { q: "هل يشتغل في الورشة دون اتصال؟", a: "إدخال التحفّظات والصور يجب أن يستمر دون شبكة ويتزامن عند عودة الاتصال. وهذا خيار بناء يُطرح منذ البداية." },
        { q: "هل يستطيع صاحب المشروع متابعة مشروعه؟", a: "نعم، في فضاء خاص به: التقدم لكل مرحلة، المخططات بالمؤشّر الحالي، المحاضر، وكشوف الأتعاب، دون رؤية باقي المكتب." },
      ] },
    ],
    pullQuotes: [
      { after: 2, text: "المخطط المحيَّن موجود؛ والسؤال من استلمه." },
      { after: 4, text: "تحفّظ حديث أمر عادي؛ وتحفّظ قديم خلاف، نسيان، أو حصة تنتظر أخرى." },
    ],
    cta: { eyebrow: "قولوا لنا كم شخصاً، كم مشروعاً جارياً، وكيف تُسمّى مخططاتكم اليوم: نبدأ بأسبوع تأطير", title: "مخطط قديم في الورشة، ساعات تتجاوز الأتعاب، تحفّظات في الهاتف، محاضر متأخرة، أو مكتب تريدون تسييره من فرنسا", body: "Symloop تبني الأداة التي تجمع مشاريعكم، مخططاتكم، وورشاتكم: المراحل والوقت، المؤشّرات والتوزيع، التحفّظات والمحاضر، والأتعاب. صِفوا لنا مراحلكم، مستلميكم المعتادين، وما تتابعونه حالياً." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.projets, kind: '2027', name: 'تسيير عدة مشاريع: مخطط الحمل، الوقت المقضي، وما بقي' },
      { href: L.btp, kind: '2027', name: 'برنامج مقاولة البناء: الكشوف، الوضعيات، والهامش لكل ورشة' },
      { href: L.espaceclient, kind: '2027', name: 'إنشاء فضاء الزبون: متابعة الملف، الوثائق، والفواتير' },
      { href: L.fichiers, kind: '2027', name: 'تقاسم الملفات في المؤسسة: الحقوق لكل مجلد، والنسخ' },
    ] },
  },
};

const KEYWORDS = "logiciel architecte, logiciel de gestion architecte, logiciel de gestion pour architecte, logiciel architecte algérie 2027, logiciel bureau d'études, logiciel gestion bureau d'étude, logiciel suivi de chantier architecte, logiciel gestion de projet architecte, logiciel facture architecte, logiciel planning bureau d'études, indices de plans, registre de diffusion des plans, réserves de chantier, compte rendu de chantier, architecture practice management software, software for architects algeria, drawing revision register, snag list software, site report, برنامج المهندس المعماري, برنامج تسيير مكتب دراسات, مؤشّرات المخططات, تحفّظات الورشة, محضر الورشة, Symloop";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
