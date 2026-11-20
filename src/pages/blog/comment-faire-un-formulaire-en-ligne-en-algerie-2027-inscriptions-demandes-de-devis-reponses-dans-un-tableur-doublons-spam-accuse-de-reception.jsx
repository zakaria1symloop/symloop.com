import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ArticleLayout from '../../components/blog/ArticleLayout';
import { visuals } from '../../content/visuals/comment-faire-un-formulaire-en-ligne-en-algerie-2027-inscriptions-demandes-de-devis-reponses-dans-un-tableur-doublons-spam-accuse-de-reception.mjs';

const SLUG = 'comment-faire-un-formulaire-en-ligne-en-algerie-2027-inscriptions-demandes-de-devis-reponses-dans-un-tableur-doublons-spam-accuse-de-reception';
const FIGURES = ['tableur', 'apres', 'couches', 'champs', 'choix', 'calendrier'];
const DATE = '2026-11-19';
const I = (x) => '⁦' + x + '⁩';

const L = {
  espace: '/blog/comment-creer-un-espace-client-en-algerie-2027-suivi-de-dossier-documents-factures-demandes-connexion-par-code-chacun-ne-voit-que-le-sien/',
  intranet: '/blog/comment-creer-un-intranet-d-entreprise-en-algerie-2027-notes-de-service-documents-annuaire-demandes-internes-recherche-accuse-de-lecture/',
  photos: '/blog/photos-qui-font-foi-application-algerie-2027-capture-compression-envoi-reprenable-stockage-objet-empreinte-horodatage-acces-signe/',
  reservation: '/blog/meme-creneau-reserve-deux-fois-reservation-en-ligne-application-algerie-2027-creneaux-verrou-tenue-acompte-liste-d-attente-rappels/',
  integrer: '/blog/integrer-logiciel-existant-api-algerie-2027-comptabilite-erp-caisse-webhooks-exports-sans-api/',
  notifications: '/blog/notifications-application-algerie-2027-push-sms-whatsapp-boite-in-app-quel-canal-pour-quel-message-pourquoi-elles-n-arrivent-pas-cout-par-envoi/',
};

const CONTENT = {
  fr: {
    kind: 'Formulaire en ligne · Algérie · 2027', title: "Comment faire un formulaire en ligne en Algérie (2027) : les réponses arrivent dans un tableur que personne ne suit, doublons, messages indésirables, clients qui rappellent pour savoir si c'est bien reçu",
    dek: "« On a mis un formulaire gratuit pour les inscriptions et les demandes de devis. Les réponses arrivent dans un tableur que personne ne regarde tous les jours ; on reçoit des doublons et des messages indésirables ; les gens rappellent pour savoir si on a bien reçu, et deux collègues répondent parfois au même. Comment faire un formulaire en ligne qui marche vraiment ? » Le formulaire n'est pas la page avec les champs : c'est ce qui se passe après « Envoyer ». Peu de champs, un accusé de réception, et une demande suivie au lieu d'une ligne.",
    publishedAt: 'Novembre 2026', readTime: '13 min de lecture', author: 'Symloop', about: ['Formulaire en ligne', 'Formulaire d’inscription', 'Demande de devis en ligne', 'Accusé de réception', 'Suivi des demandes', 'Algérie 2027'],
    intro: [
      "**Réponse courte.** Un formulaire qui marche se juge après le bouton « Envoyer ». Six choses doivent se produire : la saisie est **vérifiée** pendant qu'on tape, pas après ; le demandeur reçoit **un accusé de réception** avec un numéro ; les **messages indésirables et les doublons** sont écartés ; l'envoi devient **une demande**, pas une ligne de tableur, avec **un responsable** et **un état** ; la bonne personne est prévenue ; et l'on **mesure** combien ouvrent le formulaire, combien l'envoient, en combien de temps on répond. Avant cela, triez les champs : ne demandez à l'entrée que ce qu'il faut pour rappeler. Un outil gratuit suffit pour quelques envois par semaine traités par une personne ; au-delà, c'est une application.",
      "Ce guide s'adresse au gérant qui reçoit des inscriptions, des demandes de devis, des candidatures ou des réclamations par un formulaire : école, centre de formation, atelier, agence, clinique, association. Et au fondateur installé en France dont les demandes arrivent d'Algérie pendant qu'il dort. Les définitions et les recommandations citées viennent de sources publiques : le formulaire web, la validation des données, le CAPTCHA et ses limites, le schéma « Post/Redirect/Get », la norme E.164 des numéros de téléphone, les tutoriels du W3C sur les formulaires. L'atelier, ses huit envois et ses taux sont un exemple construit. Ce guide ne traite pas des règles de droit sur les données personnelles : voyez votre conseil.",
    ],
    sections: [
      { heading: "La même semaine, dans un tableur puis en demandes suivies", body: [
        "La figure montre huit envois d'une semaine, dans un tableur puis traités comme des demandes.",
      ], visual: 'tableur', after: [
        "**Ce que c'est.** Un formulaire web permet à un utilisateur de saisir des données qui sont envoyées à un serveur pour y être traitées. Tout est dans le dernier mot : traitées, par qui, et quand ? Un outil comme Google Forms, logiciel de sondage inclus dans la suite bureautique gratuite de Google, peut verser les réponses dans une feuille de calcul qui se met à jour à chaque envoi. C'est commode, et c'est là que les demandes se perdent : une ligne n'a ni responsable, ni état, ni délai.",
        "**Quatre accidents.** Dans l'exemple, sur huit lignes : un doublon, parce que le demandeur a cliqué deux fois ; un message indésirable, arrivé à trois heures du matin ; une demande sans réponse depuis six jours ; une demande à laquelle deux collègues ont répondu, chacun de son côté. Aucun n'est signalé par le tableur. **Le même formulaire, une autre arrivée.** La page peut rester la même : ce qui change, c'est que chaque envoi devient une demande numérotée, confiée à quelqu'un.",
      ] },
      { heading: "Après « Envoyer », six temps", body: [
        "Le temps accentué est le quatrième : créer une demande, pas une ligne.",
      ], visual: 'apres', after: [
        "**Vérifier.** La validation des données consiste à s'assurer qu'une donnée est correcte et utile avant de l'accepter. Le W3C recommande de valider la saisie pour aider l'utilisateur à éviter les erreurs, et d'être aussi accommodant que possible avec les différentes façons d'écrire une même donnée : un formulaire est plus facile à utiliser s'il sait interpréter plusieurs notations. **Confirmer.** Toujours selon le W3C, il faut informer l'utilisateur du résultat de son envoi, qu'il ait réussi ou non ; un message de succès confirme que la tâche est terminée. Un numéro de demande, affiché et envoyé par message, évite l'appel « avez-vous bien reçu ? ».",
        "**Filtrer.** Les robots de spam parcourent internet à la recherche de formulaires où déposer de faux contenus. On les écarte sans punir le demandeur : un champ invisible que seul un robot remplit, un délai minimal entre l'ouverture et l'envoi, une limite par adresse. Le CAPTCHA, ce test qui demande de prouver qu'on est humain, a un coût : ceux qui reposent sur la lecture d'un texte ferment la porte aux personnes aveugles ou malvoyantes. **Les doublons.** Recharger la page après l'envoi peut renvoyer le même contenu ; le schéma « Post/Redirect/Get » existe pour que la page affichée après un envoi puisse être rechargée sans effet indésirable. **Créer, prévenir, suivre.** L'envoi devient une demande ; son responsable reçoit une alerte, selon les canaux décrits dans [le guide sur les notifications](" + L.notifications + ") ; et la demande garde un état jusqu'à la réponse.",
      ] },
      { heading: "Un formulaire qui marche, en cinq couches", body: [
        "La couche accentuée est le traitement : c'est celle qui manque au tableur.",
      ], visual: 'couches', after: [
        "**Les libellés.** Chaque champ a un libellé visible : le W3C demande de fournir des libellés pour identifier tous les contrôles d'un formulaire, champs de texte, cases à cocher, boutons radio, menus déroulants. Un champ dont l'intitulé disparaît dès qu'on tape oblige à deviner. **Deux langues, un téléphone.** Le formulaire se remplit sur un téléphone, en français ou en arabe : des champs larges, le bon clavier pour un numéro, et pas de menu de cinquante lignes.",
        "**Le numéro de téléphone.** C'est le champ qui compte, et celui qui refuse trop souvent les numéros des demandeurs installés à l'étranger, quand il n'accepte qu'un format. La norme E.164 définit le plan de numérotation du réseau téléphonique mondial ; un numéro conforme ne compte que des chiffres, quinze au plus. Le formulaire accepte donc 0550…, +213… ou +33…, et range le numéro sous une seule forme. **Les pièces jointes.** Une photo prise au téléphone est lourde : on la réduit à l'envoi, et l'envoi reprend s'il est coupé, comme l'explique [le guide sur les photos dans une application](" + L.photos + ").",
      ] },
      { heading: "Douze champs, ou cinq", body: [
        "La figure trie douze champs : cinq restent, sept sont barrés.",
      ], visual: 'champs', after: [
        "**Le tri.** Pour chaque champ, une question : en a-t-on besoin pour rappeler cette personne ? Dans l'exemple, trois champs ne servaient à personne, et quatre se demandent mieux au premier échange, quand la personne a déjà une réponse en face d'elle. Il en reste cinq : qui, comment le joindre, quoi, où, et une pièce facultative. **Les chiffres.** Dans l'exemple, 41 personnes sur 100 allaient au bout de douze champs, 63 au bout de cinq. Ce sont des chiffres construits : les vôtres se mesurent, en comptant ceux qui ouvrent le formulaire et ceux qui l'envoient.",
        "**Ce qu'on ne retire pas.** Le champ libre, « votre besoin en une phrase », vaut mieux que dix cases à cocher : le demandeur dit ce qu'il veut avec ses mots. **Les formulaires qui réservent.** Si le formulaire attribue une place, un créneau ou un stock limité, ce n'est plus un formulaire : deux personnes peuvent prendre la dernière place en même temps. Ce cas est traité dans [le guide sur la réservation en ligne](" + L.reservation + "). **Les demandes internes**, achats, pannes, accès, suivent la même logique, décrite dans [le guide sur l'intranet](" + L.intranet + ").",
      ] },
      { heading: "Outil gratuit ou application : six questions", body: [
        "La figure donne six questions pour choisir.",
      ], visual: 'choix', after: [
        "**Quand l'outil gratuit suffit.** Quelques envois par semaine, une seule personne qui traite, une réponse et c'est fini : gardez l'outil, et ajoutez-lui deux habitudes, un message de confirmation et une personne qui ouvre le tableur chaque matin. **Quand il ne suffit plus.** Dès qu'ils sont plusieurs à traiter, qu'une demande passe par des étapes, que des pièces doivent être vérifiées et conservées, ou que le demandeur veut savoir où il en est : c'est alors un espace de suivi, décrit dans [le guide sur l'espace client](" + L.espace + ").",
        "**Les données.** Si la demande doit finir dans votre logiciel, de gestion, de scolarité ou de facturation, la ressaisir à la main recrée les erreurs que le formulaire devait éviter. Le branchement, avec ou sans interface de programmation, est décrit dans [le guide sur l'intégration d'un logiciel existant](" + L.integrer + "). **Où vivent les réponses.** Avec un outil gratuit, elles vivent sur le compte de celui qui a créé le formulaire : vérifiez que ce compte est celui de l'entreprise, pas celui d'un employé.",
      ] },
      { heading: "Quatre semaines, du tri des champs à la mesure, en 2027", body: [
        "Quatre semaines dans l'exemple, dont la première pour trier les champs.",
      ], visual: 'calendrier', after: [
        "**Semaine 1, le tri** : ce qu'on demande à l'entrée, ce qu'on demande après, et qui reçoit quoi. **Semaine 2, le formulaire et ses contrôles** : libellés, formats, pièces jointes, deux langues, essai sur plusieurs téléphones. **Semaines 2 et 3, la protection et l'accusé de réception.**",
        "**Semaines 3 et 4, les demandes et les alertes** : chaque envoi devient une demande, avec un responsable et un état. **Semaine 4, la mesure** : les ouvertures, les envois, le délai de première réponse, et le champ où l'on abandonne. Trois chiffres se relisent ensuite chaque semaine ; le premier à regarder est le délai de première réponse, parce que c'est celui que le demandeur ressent.",
      ], list: [
        "**Ce que le gérant reçoit** : un formulaire court dans deux langues, des contrôles pendant la saisie, un accusé de réception numéroté, les indésirables et les doublons écartés, chaque envoi transformé en demande avec un responsable, et trois chiffres chaque semaine.",
        "**Ce que l'entreprise ne fait plus** : ouvrir un tableur pour deviner ce qui a été traité, répondre à deux à la même demande, oublier une demande six jours, entendre « avez-vous bien reçu mon formulaire ? ».",
        "**Ce qui est mesuré** : ouvertures, envois, part de ceux qui vont au bout, délai de première réponse, demandes sans responsable.",
        "**Ce que fait Symloop** : le tri des champs, le formulaire et ses contrôles, la protection, l'accusé de réception, la transformation en demandes suivies, le branchement sur votre logiciel, puis la mesure.",
      ], faq: [
        { q: "Comment faire un formulaire en ligne ?", a: "En commençant par trier les champs : seulement ce qu'il faut pour rappeler la personne. Puis en soignant ce qui suit l'envoi : une saisie vérifiée pendant qu'on tape, un accusé de réception numéroté, les indésirables et les doublons écartés, et chaque envoi transformé en demande avec un responsable et un état." },
        { q: "Comment faire un formulaire d'inscription en ligne ?", a: "Comme tout formulaire, avec deux soins de plus : une confirmation immédiate portant un numéro, et, si les places sont limitées, un mécanisme qui empêche deux personnes de prendre la dernière en même temps. Les pièces demandées se déposent depuis le téléphone, avec leur état : reçue, manquante, à refaire." },
        { q: "Un formulaire gratuit suffit-il ?", a: "Oui, pour quelques envois par semaine traités par une seule personne, à condition d'ajouter un message de confirmation et d'ouvrir le tableur chaque matin. Dès qu'ils sont plusieurs à traiter, qu'il y a des étapes ou des pièces à garder, il faut une application." },
        { q: "Combien de champs faut-il ?", a: "Le moins possible : ce qu'il faut pour rappeler et comprendre le besoin. Dans l'exemple de ce guide, cinq champs sur douze suffisaient. Le reste se demande au premier échange. Mesurez chez vous la part de ceux qui vont au bout avant et après le tri." },
        { q: "Comment éviter le spam sans CAPTCHA ?", a: "Par des moyens invisibles pour le demandeur : un champ caché que seul un robot remplit, un délai minimal entre l'ouverture et l'envoi, une limite d'envois par adresse. Un test à résoudre reste possible en dernier recours, en sachant qu'il écarte aussi des personnes réelles." },
        { q: "Comment éviter les doublons ?", a: "En empêchant le double envoi au clic, en redirigeant vers une page de confirmation qui peut être rechargée sans rien renvoyer, et en reconnaissant deux envois identiques du même numéro dans un court délai : ils sont fusionnés en une seule demande." },
        { q: "Comment savoir si quelqu'un a répondu à une demande ?", a: "En donnant à chaque demande un responsable et un état : reçue, en cours, répondue. Le délai depuis la réception s'affiche à côté. C'est ce qui manque à un tableur, où une ligne ne dit ni qui s'en occupe ni depuis quand elle attend." },
        { q: "Le formulaire marche-t-il sur téléphone et en arabe ?", a: "Il doit : c'est là qu'il sera rempli. Des champs larges, des libellés toujours visibles, le clavier numérique pour le téléphone, et les deux langues avec le sens d'écriture correct. On l'essaie sur plusieurs téléphones avant l'ouverture." },
        { q: "Peut-on joindre des photos ou des documents ?", a: "Oui. La photo est réduite avant l'envoi, l'envoi reprend s'il est coupé, et le format ainsi que la taille sont vérifiés pendant la saisie, avec un message clair si la pièce ne passe pas." },
        { q: "Combien de temps faut-il, et par quoi commencer ?", a: "Quatre semaines dans l'exemple de ce guide. Commencez par le tri des champs et par une question : qui reçoit l'envoi, et sous quel délai doit-il répondre ? Le formulaire se construit autour de cette réponse." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "Une ligne n'a ni responsable, ni état, ni délai." },
      { after: 3, text: "Chaque champ est une question posée à un inconnu." },
    ],
    cta: { eyebrow: "Dites-nous ce que le formulaire reçoit, combien d'envois par semaine, et qui les traite : nous trions les champs avec vous, puis nous faisons arriver chaque envoi chez quelqu'un", title: "Réponses dans un tableur que personne ne suit, doublons, messages indésirables, « avez-vous bien reçu ? », ou fondateur en France dont les demandes arrivent d'Algérie pendant la nuit : nous construisons le formulaire, et surtout ce qui se passe après « Envoyer »", body: "Tri des champs, formulaire en français et en arabe, contrôles pendant la saisie, protection, accusé de réception, demandes suivies avec responsable et état, branchement sur votre logiciel, mesure. Nous travaillons depuis Alger et Sétif, en français, en arabe et en anglais." },
    related: { label: 'À lire aussi', items: [
      { href: L.espace, kind: '2027', name: 'Créer un espace client : état du dossier, pièces, factures' },
      { href: L.notifications, kind: '2027', name: 'Notifications : quel canal pour quel message' },
      { href: L.reservation, kind: '2027', name: 'Réservation en ligne : le même créneau réservé deux fois' },
      { href: L.intranet, kind: '2027', name: 'Créer un intranet d’entreprise : demandes internes, documents' },
    ] },
  },
  en: {
    kind: 'Online form · Algeria · 2027', title: "How to make an online form in Algeria (2027): the answers land in a spreadsheet nobody follows, duplicates, spam, customers calling back to ask whether it was received",
    dek: "“We set up a free form for enrolments and quote requests. The answers land in a spreadsheet nobody looks at every day; we get duplicates and spam; people call back to ask whether we received it, and two colleagues sometimes reply to the same one. How do we make an online form that really works?” The form is not the page with the fields: it is what happens after “Send”. Few fields, an acknowledgement, and a tracked request instead of a row.",
    publishedAt: 'November 2026', readTime: '13 min read', author: 'Symloop', about: ['Online form', 'Enrolment form', 'Online quote request', 'Acknowledgement of receipt', 'Request tracking', 'Algeria 2027'],
    intro: [
      "**Short answer.** A form that works is judged after the “Send” button. Six things must happen: the input is **checked** while typing, not afterwards; the sender receives **an acknowledgement** with a number; **spam and duplicates** are set aside; the submission becomes **a request**, not a spreadsheet row, with **an owner** and **a status**; the right person is notified; and you **measure** how many open the form, how many send it, how long before you answer. Before that, sort the fields: at the door, ask only what is needed to call back. A free tool is enough for a few submissions a week handled by one person; beyond that, it is an application.",
      "This guide is for the manager who receives enrolments, quote requests, applications or complaints through a form: a school, a training centre, a workshop, an agency, a clinic, an association. And for the founder based in France whose requests arrive from Algeria while they sleep. The definitions and recommendations quoted come from public sources: the web form, data validation, the CAPTCHA and its limits, the Post/Redirect/Get pattern, the E.164 standard for phone numbers, the W3C tutorials on forms. The workshop, its eight submissions and its rates are a constructed example. This guide does not cover the legal rules on personal data: see your legal adviser.",
    ],
    sections: [
      { heading: "The same week, in a spreadsheet then as tracked requests", body: [
        "The figure shows eight submissions in a week, in a spreadsheet then handled as requests.",
      ], visual: 'tableur', after: [
        "**What it is.** A web form allows a user to enter data that is sent to a server for processing. Everything is in the last word: processing, by whom, and when? A tool such as Google Forms, survey software included in Google's free office suite, can pour the answers into a spreadsheet that updates as new responses are received. It is convenient, and that is where requests get lost: a row has no owner, no status and no time limit.",
        "**Four accidents.** In the example, out of eight rows: a duplicate, because the sender clicked twice; a spam message, arriving at three in the morning; a request with no answer for six days; a request two colleagues replied to, each on their own. None is flagged by the spreadsheet. **The same form, a different arrival.** The page can stay the same: what changes is that each submission becomes a numbered request, entrusted to someone.",
      ] },
      { heading: "After “Send”, six steps", body: [
        "The accented step is the fourth: create a request, not a row.",
      ], visual: 'apres', after: [
        "**Check.** Data validation consists in making sure a piece of data is correct and useful before accepting it. The W3C recommends validating user input to help users avoid mistakes, and being as accommodating as possible of different forms of input for the same data: a form is easier to use if it can interpret multiple notations. **Confirm.** Again according to the W3C, give users feedback about the result of their submission, whether successful or not; a success message confirms that the task is complete. A request number, displayed and sent by message, spares the call “did you receive it?”.",
        "**Filter.** Spambots search the internet for web forms in which to submit fake content. They are set aside without punishing the sender: an invisible field only a bot fills in, a minimum delay between opening and sending, a limit per address. The CAPTCHA, the test that asks you to prove you are human, has a cost: those based on reading text shut the door on blind or visually impaired users. **Duplicates.** Reloading the page after sending can resubmit the same content; the Post/Redirect/Get pattern exists so that the page shown after a submission can be reloaded without ill effects. **Create, notify, track.** The submission becomes a request; its owner receives an alert, through the channels described in [the guide to notifications](" + L.notifications + "); and the request keeps a status until the answer.",
      ] },
      { heading: "A form that works, in five layers", body: [
        "The accented layer is handling: it is the one the spreadsheet lacks.",
      ], visual: 'couches', after: [
        "**Labels.** Each field has a visible label: the W3C asks for labels to identify all form controls, including text fields, checkboxes, radio buttons and drop-down menus. A field whose caption disappears as soon as you type forces people to guess. **Two languages, one phone.** The form is filled in on a phone, in French or in Arabic: wide fields, the right keyboard for a number, and no fifty-line menu.",
        "**The phone number.** It is the field that matters, and the one that too often refuses the numbers of senders living abroad, when it accepts only one format. The E.164 standard defines the numbering plan of the worldwide telephone network; a conforming number has only digits, fifteen at most. So the form accepts 0550…, +213… or +33…, and stores the number in a single form. **Attachments.** A photo taken on a phone is heavy: it is reduced on sending, and the upload resumes if it is cut, as explained in [the guide to photos in an application](" + L.photos + ").",
      ] },
      { heading: "Twelve fields, or five", body: [
        "The figure sorts twelve fields: five stay, seven are struck out.",
      ], visual: 'champs', after: [
        "**The sort.** For each field, one question: is it needed to call this person back? In the example, three fields were of use to nobody, and four are better asked in the first exchange, when the person already has an answer in front of them. Five remain: who, how to reach them, what, where, and an optional file. **The figures.** In the example, 41 people out of 100 went to the end of twelve fields, 63 to the end of five. These are constructed figures: yours are measured, by counting those who open the form and those who send it.",
        "**What is not removed.** The free field, “your need in one sentence”, is worth more than ten tick boxes: the sender says what they want in their own words. **Forms that book.** If the form allocates a place, a slot or limited stock, it is no longer a form: two people can take the last place at the same time. That case is covered in [the guide to online booking](" + L.reservation + "). **Internal requests**, purchases, breakdowns, access, follow the same logic, described in [the guide to the intranet](" + L.intranet + ").",
      ] },
      { heading: "Free tool or application: six questions", body: [
        "The figure gives six questions for choosing.",
      ], visual: 'choix', after: [
        "**When the free tool is enough.** A few submissions a week, a single person handling them, one reply and that is it: keep the tool, and add two habits to it, a confirmation message and one person who opens the spreadsheet every morning. **When it no longer is.** As soon as several people handle them, a request goes through steps, documents must be checked and kept, or the sender wants to know where things stand: it is then a tracking area, described in [the guide to the customer area](" + L.espace + ").",
        "**The data.** If the request must end up in your software, for management, schooling or invoicing, retyping it by hand recreates the errors the form was meant to avoid. The connection, with or without a programming interface, is described in [the guide to integrating existing software](" + L.integrer + "). **Where the answers live.** With a free tool, they live in the account of whoever created the form: check that this account is the company's, not an employee's.",
      ] },
      { heading: "Four weeks, from sorting the fields to measuring, in 2027", body: [
        "Four weeks in the example, the first one to sort the fields.",
      ], visual: 'calendrier', after: [
        "**Week 1, the sort**: what is asked at the door, what is asked later, and who receives what. **Week 2, the form and its checks**: labels, formats, attachments, two languages, tested on several phones. **Weeks 2 and 3, protection and the acknowledgement.**",
        "**Weeks 3 and 4, requests and alerts**: each submission becomes a request, with an owner and a status. **Week 4, measuring**: opens, submissions, time to first reply, and the field where people give up. Three figures are then reread every week; the first to look at is the time to first reply, because it is the one the sender feels.",
      ], list: [
        "**What the manager receives**: a short form in two languages, checks while typing, a numbered acknowledgement, spam and duplicates set aside, each submission turned into a request with an owner, and three figures every week.",
        "**What the company no longer does**: open a spreadsheet to guess what has been handled, have two people reply to the same request, forget a request for six days, hear “did you receive my form?”.",
        "**What is measured**: opens, submissions, share of those who go to the end, time to first reply, requests without an owner.",
        "**What Symloop does**: sorting the fields, the form and its checks, protection, the acknowledgement, the turning into tracked requests, the connection to your software, then the measurement.",
      ], faq: [
        { q: "How do you make an online form?", a: "By starting with sorting the fields: only what is needed to call the person back. Then by taking care of what follows the submission: input checked while typing, a numbered acknowledgement, spam and duplicates set aside, and each submission turned into a request with an owner and a status." },
        { q: "How do you make an online enrolment form?", a: "Like any form, with two extra cares: an immediate confirmation carrying a number, and, if places are limited, a mechanism that stops two people taking the last one at the same time. The documents requested are uploaded from the phone, with their status: received, missing, to redo." },
        { q: "Is a free form enough?", a: "Yes, for a few submissions a week handled by a single person, provided you add a confirmation message and open the spreadsheet every morning. As soon as several people handle them, or there are steps or documents to keep, an application is needed." },
        { q: "How many fields are needed?", a: "As few as possible: what is needed to call back and understand the need. In this guide's example, five fields out of twelve were enough. The rest is asked in the first exchange. Measure at your place the share of those who go to the end before and after the sort." },
        { q: "How do you avoid spam without a CAPTCHA?", a: "With means invisible to the sender: a hidden field only a bot fills in, a minimum delay between opening and sending, a limit on submissions per address. A test to solve remains possible as a last resort, knowing that it also turns away real people." },
        { q: "How do you avoid duplicates?", a: "By preventing a double send on click, by redirecting to a confirmation page that can be reloaded without resending anything, and by recognising two identical submissions from the same number within a short time: they are merged into a single request." },
        { q: "How do you know whether someone replied to a request?", a: "By giving each request an owner and a status: received, in progress, answered. The time since receipt is shown beside it. That is what a spreadsheet lacks, where a row says neither who is dealing with it nor how long it has been waiting." },
        { q: "Does the form work on a phone and in Arabic?", a: "It must: that is where it will be filled in. Wide fields, labels always visible, the numeric keyboard for the phone number, and both languages with the correct writing direction. It is tested on several phones before opening." },
        { q: "Can photos or documents be attached?", a: "Yes. The photo is reduced before sending, the upload resumes if it is cut, and the format and size are checked while typing, with a clear message if the file does not go through." },
        { q: "How long does it take, and where do we start?", a: "Four weeks in this guide's example. Start with sorting the fields and with one question: who receives the submission, and within what time must they reply? The form is built around that answer." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "A row has no owner, no status and no time limit." },
      { after: 3, text: "Each field is a question put to a stranger." },
    ],
    cta: { eyebrow: "Tell us what the form receives, how many submissions a week, and who handles them: we sort the fields with you, then we make each submission land with someone", title: "Answers in a spreadsheet nobody follows, duplicates, spam, “did you receive it?”, or a founder in France whose requests arrive from Algeria during the night: we build the form, and above all what happens after “Send”", body: "Sorting the fields, a form in French and in Arabic, checks while typing, protection, acknowledgement, tracked requests with an owner and a status, connection to your software, measurement. We work from Algiers and Sétif, in French, Arabic and English." },
    related: { label: 'Also read', items: [
      { href: L.espace, kind: '2027', name: 'Building a customer area: file status, documents, invoices' },
      { href: L.notifications, kind: '2027', name: 'Notifications: which channel for which message' },
      { href: L.reservation, kind: '2027', name: 'Online booking: the same slot booked twice' },
      { href: L.intranet, kind: '2027', name: 'Building a company intranet: internal requests, documents' },
    ] },
  },
  ar: {
    kind: 'استمارة على الخط · الجزائر · 2027', title: "كيف تُنشأ استمارة على الخط في الجزائر (2027): الأجوبة تصل إلى جدول لا يتابعه أحد، مكرَّرات، رسائل مزعجة، وزبائن يتصلون ليسألوا هل وصل الطلب",
    dek: "«وضعنا استمارة مجانية للتسجيلات وطلبات عرض السعر. الأجوبة تصل إلى جدول لا ينظر فيه أحد كل يوم؛ نستلم مكرَّرات ورسائل مزعجة؛ الناس يتصلون ليسألوا هل استلمنا، وزميلان يجيبان أحياناً عن الطلب نفسه. كيف ننشئ استمارة على الخط تعمل فعلاً؟» الاستمارة ليست الصفحة التي فيها الحقول: هي ما يجري بعد «إرسال». حقول قليلة، إشعار بالاستلام، وطلب متابَع بدل سطر.",
    publishedAt: 'نوفمبر 2026', readTime: '13 دقيقة قراءة', author: 'Symloop', about: ['استمارة على الخط', 'استمارة تسجيل', 'طلب عرض سعر على الخط', 'إشعار بالاستلام', 'متابعة الطلبات', 'الجزائر 2027'],
    intro: [
      "**الجواب المختصر.** الاستمارة التي تعمل يُحكم عليها بعد زر «إرسال». ستة أشياء يجب أن تحدث: الكتابة **تُراجَع** أثناء الإدخال، لا بعده؛ الطالب يستلم **إشعاراً بالاستلام** برقم؛ **الرسائل المزعجة والمكرَّرات** تُبعَد؛ الإرسال يصير **طلباً**، لا سطراً في جدول، له **مسؤول** و**حالة**؛ الشخص المناسب يُعلَم؛ ويُقاس كم يفتحون الاستمارة، كم يرسلونها، وفي كم من الوقت نجيب. وقبل ذلك، افرزوا الحقول: لا تطلبوا عند المدخل إلا ما يلزم للاتصال. وأداة مجانية تكفي لبضعة إرسالات في الأسبوع يعالجها شخص واحد؛ وما فوق ذلك، تطبيق.",
      "هذا الدليل موجَّه إلى المسيّر الذي يستلم تسجيلات، طلبات عرض سعر، ترشحات، أو شكاوى عبر استمارة: مدرسة، مركز تكوين، ورشة، وكالة، عيادة، أو جمعية. وإلى المؤسس المقيم في فرنسا الذي تصله الطلبات من الجزائر وهو نائم. التعريفات والتوصيات المذكورة آتية من مصادر علنية: استمارة الويب، التحقق من البيانات، اختبار " + I('CAPTCHA') + " وحدوده، نمط " + I('Post/Redirect/Get') + "، معيار " + I('E.164') + " لأرقام الهاتف، ودروس " + I('W3C') + " حول الاستمارات. الورشة وإرسالاتها الثمانية ونسبها مثال مركَّب. هذا الدليل لا يتناول القواعد القانونية للبيانات الشخصية: راجعوا مستشاركم.",
    ],
    sections: [
      { heading: "الأسبوع نفسه، في جدول ثم في طلبات متابَعة", body: [
        "الشكل يُظهر ثمانية إرسالات في أسبوع، في جدول ثم معالَجة كطلبات.",
      ], visual: 'tableur', after: [
        "**ما هي.** استمارة الويب تسمح لمستعمل بإدخال بيانات تُرسَل إلى خادم لمعالجتها. والكل في الكلمة الأخيرة: معالجتها، من طرف من، ومتى؟ وأداة مثل " + I('Google Forms') + "، وهي برنامج استبيانات ضمن حزمة " + I('Google') + " المكتبية المجانية، تستطيع صبّ الأجوبة في جدول يتحدّث عند كل إرسال. الأمر مريح، وهناك تضيع الطلبات: السطر لا مسؤول له، ولا حالة، ولا أجل.",
        "**أربع حوادث.** في المثال، من ثمانية أسطر: مكرَّر، لأن الطالب نقر مرتين؛ رسالة مزعجة، وصلت في الثالثة صباحاً؛ طلب دون جواب منذ ستة أيام؛ وطلب أجاب عنه زميلان، كل واحد من جهته. ولا واحدة ينبّه إليها الجدول. **الاستمارة نفسها، ووصول آخر.** الصفحة قد تبقى هي نفسها: ما يتغيّر هو أن كل إرسال يصير طلباً مرقَّماً، موكلاً إلى أحد.",
      ] },
      { heading: "بعد «إرسال»، ست مراحل", body: [
        "المرحلة المبرزة هي الرابعة: إنشاء طلب، لا سطر.",
      ], visual: 'apres', after: [
        "**التحقق.** التحقق من البيانات هو التأكد من أن المعطى صحيح ونافع قبل قبوله. و" + I('W3C') + " يوصي بالتحقق من الإدخال لمساعدة المستعمل على تفادي الأخطاء، وبالتساهل قدر الإمكان مع مختلف طرق كتابة المعطى نفسه: الاستمارة أسهل استعمالاً إذا عرفت تفسير عدة صيغ. **التأكيد.** ودائماً حسب " + I('W3C') + "، يجب إعلام المستعمل بنتيجة إرساله، نجح أم لا؛ ورسالة النجاح تؤكد أن المهمة انتهت. ورقم الطلب، معروضاً ومرسَلاً برسالة، يجنّب مكالمة «هل استلمتم؟».",
        "**الفرز.** روبوتات الرسائل المزعجة تجوب الإنترنت بحثاً عن استمارات تودِع فيها محتوى مزيَّفاً. وتُبعَد دون معاقبة الطالب: حقل غير مرئي لا يملؤه إلا روبوت، أجل أدنى بين الفتح والإرسال، وحدّ لكل عنوان. واختبار " + I('CAPTCHA') + "، الذي يطلب إثبات أنكم بشر، له كلفة: ما يعتمد منه على قراءة نص يغلق الباب أمام المكفوفين وضعاف البصر. **المكرَّرات.** إعادة تحميل الصفحة بعد الإرسال قد تعيد إرسال المحتوى نفسه؛ ونمط " + I('Post/Redirect/Get') + " موجود كي يمكن إعادة تحميل الصفحة المعروضة بعد الإرسال دون أثر غير مرغوب. **الإنشاء، الإعلام، والمتابعة.** الإرسال يصير طلباً؛ ومسؤوله يستلم تنبيهاً، بالقنوات الموصوفة في [دليل الإشعارات](" + L.notifications + ")؛ والطلب يحتفظ بحالة إلى غاية الجواب.",
      ] },
      { heading: "استمارة تعمل، في خمس طبقات", body: [
        "الطبقة المبرزة هي المعالجة: هي التي تنقص الجدول.",
      ], visual: 'couches', after: [
        "**العناوين.** لكل حقل عنوان ظاهر: " + I('W3C') + " يطلب توفير عناوين لتعريف كل عناصر الاستمارة، حقول النص، خانات الاختيار، أزرار الاختيار، والقوائم المنسدلة. والحقل الذي يختفي عنوانه حالما نكتب يُجبر على التخمين. **لغتان، وهاتف.** الاستمارة تُملأ على هاتف، بالفرنسية أو العربية: حقول عريضة، لوحة المفاتيح المناسبة للرقم، ولا قائمة من خمسين سطراً.",
        "**رقم الهاتف.** هو الحقل الذي يهمّ، والذي يرفض كثيراً أرقام الطالبين المقيمين في الخارج، حين لا يقبل إلا صيغة واحدة. ومعيار " + I('E.164') + " يحدّد مخطط الترقيم لشبكة الهاتف العالمية؛ والرقم المطابق لا يحتوي إلا أرقاماً، خمسة عشر على الأكثر. فالاستمارة تقبل الصيغة المحلية والصيغة الدولية، وتحفظ الرقم في شكل واحد. **المرفقات.** الصورة المأخوذة بالهاتف ثقيلة: تُصغَّر عند الإرسال، والإرسال يُستأنف إذا انقطع، كما يشرح [دليل الصور في تطبيق](" + L.photos + ").",
      ] },
      { heading: "اثنا عشر حقلاً، أو خمسة", body: [
        "الشكل يفرز اثني عشر حقلاً: خمسة تبقى، وسبعة تُشطب.",
      ], visual: 'champs', after: [
        "**الفرز.** لكل حقل، سؤال: هل نحتاجه للاتصال بهذا الشخص؟ في المثال، ثلاثة حقول لم تكن تنفع أحداً، وأربعة يُسأل عنها أحسن في أول تبادل، حين يكون للشخص جواب أمامه. فيبقى خمسة: من، كيف نتصل به، ماذا، أين، ووثيقة اختيارية. **الأرقام.** في المثال، 41 شخصاً من 100 كانوا يكملون اثني عشر حقلاً، و63 يكملون خمسة. وهي أرقام مركَّبة: أرقامكم تُقاس، بعدّ من يفتحون الاستمارة ومن يرسلونها.",
        "**ما لا يُسحب.** الحقل الحر، «حاجتكم في جملة»، أنفع من عشر خانات: الطالب يقول ما يريد بكلماته. **الاستمارات التي تحجز.** إذا كانت الاستمارة تمنح مكاناً، موعداً، أو مخزوناً محدوداً، فلم تعد استمارة: شخصان قد يأخذان المكان الأخير في الوقت نفسه. وهذه الحالة مشروحة في [دليل الحجز على الخط](" + L.reservation + "). **الطلبات الداخلية**، المشتريات، الأعطال، والدخول، تتبع المنطق نفسه، الموصوف في [دليل الإنترانت](" + L.intranet + ").",
      ] },
      { heading: "أداة مجانية أم تطبيق: ستة أسئلة", body: [
        "الشكل يعطي ستة أسئلة للاختيار.",
      ], visual: 'choix', after: [
        "**متى تكفي الأداة المجانية.** بضعة إرسالات في الأسبوع، شخص واحد يعالج، جواب وينتهي الأمر: احتفظوا بالأداة، وأضيفوا لها عادتين، رسالة تأكيد وشخص يفتح الجدول كل صباح. **متى لا تكفي.** حالما يعالج عدة أشخاص، أو يمر الطلب بمراحل، أو يجب مراجعة وثائق وحفظها، أو يريد الطالب أن يعرف أين وصل: فهو عندها فضاء متابعة، موصوف في [دليل فضاء الزبون](" + L.espace + ").",
        "**البيانات.** إذا كان الطلب يجب أن ينتهي في برنامجكم، للتسيير أو التمدرس أو الفوترة، فإعادة إدخاله باليد تعيد الأخطاء التي كانت الاستمارة ستتفاداها. والربط، بواجهة برمجة أو دونها، موصوف في [دليل إدماج برنامج موجود](" + L.integrer + "). **أين تعيش الأجوبة.** مع أداة مجانية، تعيش في حساب من أنشأ الاستمارة: تحققوا أن هذا الحساب حساب المؤسسة، لا حساب عامل.",
      ] },
      { heading: "أربعة أسابيع، من فرز الحقول إلى القياس، سنة 2027", body: [
        "أربعة أسابيع في المثال، والأول منها لفرز الحقول.",
      ], visual: 'calendrier', after: [
        "**الأسبوع 1، الفرز**: ما يُطلب عند المدخل، ما يُطلب بعدها، ومن يستلم ماذا. **الأسبوع 2، الاستمارة ومراقبتها**: العناوين، الصيغ، المرفقات، لغتان، وتجربة على عدة هواتف. **الأسبوعان 2 و3، الحماية والإشعار بالاستلام.**",
        "**الأسبوعان 3 و4، الطلبات والتنبيهات**: كل إرسال يصير طلباً، بمسؤول وحالة. **الأسبوع 4، القياس**: الفتح، الإرسال، أجل أول جواب، والحقل الذي يُتخلّى عنده. وثلاثة أرقام تُراجَع بعدها كل أسبوع؛ وأولها أجل أول جواب، لأنه الذي يحسّه الطالب.",
      ], list: [
        "**ما يستلمه المسيّر**: استمارة قصيرة بلغتين، مراقبة أثناء الكتابة، إشعار بالاستلام مرقَّم، المزعج والمكرَّر مبعَدان، كل إرسال محوَّل إلى طلب بمسؤول، وثلاثة أرقام كل أسبوع.",
        "**ما لم تعد المؤسسة تفعله**: فتح جدول لتخمين ما عولج، جواب اثنين عن الطلب نفسه، نسيان طلب ستة أيام، وسماع «هل استلمتم استمارتي؟».",
        "**ما يُقاس**: الفتح، الإرسال، حصة من يكملون، أجل أول جواب، والطلبات دون مسؤول.",
        "**ما تفعله Symloop**: فرز الحقول، الاستمارة ومراقبتها، الحماية، الإشعار بالاستلام، التحويل إلى طلبات متابَعة، الربط ببرنامجكم، ثم القياس.",
      ], faq: [
        { q: "كيف تُنشأ استمارة على الخط؟", a: "بالبدء بفرز الحقول: فقط ما يلزم للاتصال بالشخص. ثم بالعناية بما يتبع الإرسال: كتابة تُراجَع أثناء الإدخال، إشعار بالاستلام مرقَّم، المزعج والمكرَّر مبعَدان، وكل إرسال محوَّل إلى طلب بمسؤول وحالة." },
        { q: "كيف تُنشأ استمارة تسجيل على الخط؟", a: "مثل كل استمارة، بعنايتين زيادة: تأكيد فوري يحمل رقماً، وإذا كانت الأماكن محدودة، آلية تمنع شخصين من أخذ المكان الأخير في الوقت نفسه. والوثائق المطلوبة تودَع من الهاتف، بحالتها: مستلَمة، ناقصة، أو تُعاد." },
        { q: "هل تكفي استمارة مجانية؟", a: "نعم، لبضعة إرسالات في الأسبوع يعالجها شخص واحد، بشرط إضافة رسالة تأكيد وفتح الجدول كل صباح. وحالما يعالج عدة أشخاص، أو توجد مراحل أو وثائق تُحفظ، يلزم تطبيق." },
        { q: "كم حقلاً يلزم؟", a: "أقل ما يمكن: ما يلزم للاتصال وفهم الحاجة. في مثال هذا الدليل، خمسة حقول من اثني عشر كانت تكفي. والباقي يُسأل في أول تبادل. قيسوا عندكم حصة من يكملون قبل الفرز وبعده." },
        { q: "كيف نتفادى الرسائل المزعجة دون CAPTCHA؟", a: "بوسائل لا يراها الطالب: حقل مخفي لا يملؤه إلا روبوت، أجل أدنى بين الفتح والإرسال، وحدّ للإرسالات لكل عنوان. واختبار يُحلّ يبقى ممكناً كحل أخير، مع العلم أنه يُبعد كذلك أشخاصاً حقيقيين." },
        { q: "كيف نتفادى المكرَّرات؟", a: "بمنع الإرسال المزدوج عند النقر، بالتحويل نحو صفحة تأكيد يمكن إعادة تحميلها دون إعادة إرسال شيء، وبالتعرّف على إرسالين متطابقين من الرقم نفسه في مدة قصيرة: يُدمجان في طلب واحد." },
        { q: "كيف نعرف أن أحداً أجاب عن طلب؟", a: "بإعطاء كل طلب مسؤولاً وحالة: مستلَم، قيد المعالجة، أو مُجاب عنه. والمدة منذ الاستلام تُعرض بجانبه. وهو ما ينقص الجدول، حيث السطر لا يقول من يتكفل به ولا منذ متى ينتظر." },
        { q: "هل تعمل الاستمارة على الهاتف وبالعربية؟", a: "يجب: فهناك ستُملأ. حقول عريضة، عناوين ظاهرة دائماً، لوحة الأرقام لرقم الهاتف، واللغتان باتجاه الكتابة الصحيح. وتُجرَّب على عدة هواتف قبل الفتح." },
        { q: "هل يمكن إرفاق صور أو وثائق؟", a: "نعم. الصورة تُصغَّر قبل الإرسال، الإرسال يُستأنف إذا انقطع، والصيغة والحجم يُراجَعان أثناء الإدخال، برسالة واضحة إذا لم تمر الوثيقة." },
        { q: "كم يلزم من وقت، ومن أين نبدأ؟", a: "أربعة أسابيع في مثال هذا الدليل. ابدؤوا بفرز الحقول وبسؤال: من يستلم الإرسال، وفي أي أجل يجب أن يجيب؟ والاستمارة تُبنى حول هذا الجواب." },
      ] },
    ],
    pullQuotes: [
      { after: 0, text: "السطر لا مسؤول له، ولا حالة، ولا أجل." },
      { after: 3, text: "كل حقل سؤال يُطرح على مجهول." },
    ],
    cta: { eyebrow: "قولوا لنا ماذا تستلم الاستمارة، كم إرسالاً في الأسبوع، ومن يعالجها: نفرز الحقول معكم، ثم نجعل كل إرسال يصل إلى أحد", title: "أجوبة في جدول لا يتابعه أحد، مكرَّرات، رسائل مزعجة، «هل استلمتم؟»، أو مؤسس في فرنسا تصله الطلبات من الجزائر في الليل: نبني الاستمارة، وخاصة ما يجري بعد «إرسال»", body: "فرز الحقول، استمارة بالفرنسية والعربية، مراقبة أثناء الكتابة، حماية، إشعار بالاستلام، طلبات متابَعة بمسؤول وحالة، ربط ببرنامجكم، وقياس. نعمل من الجزائر العاصمة وسطيف، بالفرنسية والعربية والإنجليزية." },
    related: { label: 'اقرأ أيضاً', items: [
      { href: L.espace, kind: '2027', name: 'إنشاء فضاء للزبون: حالة الملف، الوثائق، والفواتير' },
      { href: L.notifications, kind: '2027', name: 'الإشعارات: أي قناة لأي رسالة' },
      { href: L.reservation, kind: '2027', name: 'الحجز على الخط: الموعد نفسه محجوز مرتين' },
      { href: L.intranet, kind: '2027', name: 'إنشاء إنترانت للمؤسسة: الطلبات الداخلية، والوثائق' },
    ] },
  },
};

const KEYWORDS = "comment faire un formulaire en ligne 2027, formulaire en ligne algérie, comment créer un formulaire, formulaire d'inscription en ligne, demande de devis en ligne, comment faire un questionnaire en ligne, formulaire google réponses tableur, éviter le spam formulaire, accusé de réception formulaire, suivi des demandes en ligne, how to make an online form algeria 2027, online form responses spreadsheet tracking, كيف أنشئ استمارة على الخط 2027, استمارة تسجيل على الخط, طلب عرض سعر على الخط";

export default function Page() {
  const { locale } = useRouter();
  return <ArticleLayout slug={SLUG} locale={locale || 'fr'} content={CONTENT[locale] || CONTENT.fr} visuals={visuals} figureKeys={FIGURES} keywords={KEYWORDS} datePublished={DATE} />;
}
export async function getStaticProps({ locale }) { return { props: { ...(await serverSideTranslations(locale, ['common'])) } }; }
